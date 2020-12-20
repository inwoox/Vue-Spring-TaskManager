package taskagile.web.socket;

import taskagile.domain.common.security.TokenManager;
import taskagile.domain.model.user.UserId;
import taskagile.utils.JsonUtils;
import io.jsonwebtoken.JwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class WebSocketRequestDispatcher extends TextWebSocketHandler {

  private static final Logger log = LoggerFactory.getLogger(WebSocketRequestDispatcher.class);

  private TokenManager tokenManager;
  private ChannelHandlerResolver channelHandlerResolver;

  public WebSocketRequestDispatcher(TokenManager tokenManager,
                                    ChannelHandlerResolver channelHandlerResolver) {
    this.tokenManager = tokenManager;
    this.channelHandlerResolver = channelHandlerResolver;
  }

  // 연결이 수립되면 호출되어 , 연결에서 세션을 가져오고, 토큰을 추출하고, 토큰에서 유저 ID를 가져오고 
  // 세션에 유저 ID를 등록하고, "authenticated"를 클라이언트로 보낸다. 
  @Override
  public void afterConnectionEstablished(WebSocketSession webSocketSession) {
    log.debug("WebSocket connection established");
    RealTimeSession session = new RealTimeSession(webSocketSession);
    String token = session.getToken();

    try {
      UserId userId = tokenManager.verifyJwt(token);
      session.setUserId(userId);
      session.reply("authenticated");
    } catch (JwtException exception) {
      log.debug("Invalid JWT token value: {}", token);
      session.fail("authentication failed");
    }
  }

  // 메시지를 받을 경우 호출된다. 
  @Override
  protected void handleTextMessage(WebSocketSession webSocketSession, TextMessage message) {
    RealTimeSession session = new RealTimeSession(webSocketSession);
    log.debug("RealTimeSession[{}] Received message `{}`", session.id(), message.getPayload());

    // 메시지의 페이로드(Json)를 IncomingMessage 객체로 만든다.  
    IncomingMessage incomingMessage = JsonUtils.toObject(message.getPayload(), IncomingMessage.class);
    if (incomingMessage == null) {
      session.error("Illegal format of incoming message: " + message.getPayload());
      return;
    }

    // Action 애노테이션으로 정의한 값과 일치하는 액션이 있으면, invoker를 반환
    // 즉, ChannelHandlerResolver에게 특정 채널로 전송되는 메시지를 처리하기 위해, 등록된 채널 핸들러를 찾아달라고 요청

    // 채널 핸들러의 위치가 파악되면, 메시지를 처리하기로 되어있는 보드 채널 핸들러의 지정된 액션 메서드를 호출하기 위해
    // 그에 대응하는 ChannelHandlerInvoker를 사용한다.
    ChannelHandlerInvoker invoker = channelHandlerResolver.findInvoker(incomingMessage);
    if (invoker == null) {
      String errorMessage = "No handler found for action `" + incomingMessage.getAction() +
        "` at channel `" + incomingMessage.getChannel() + "`";

      // 채널 핸들러 또는 액션 메서드를 찾지 못하면, 서버는 클라이언트에게 에러를 전달한다.
      session.error(errorMessage);
      log.error("RealTimeSession[{}] {}", session.id(), errorMessage);
      return;
    }

    invoker.handle(incomingMessage, session);
  }

  // 연결이 종료되면 호출된다. 
  @Override
  public void afterConnectionClosed(WebSocketSession webSocketSession, CloseStatus status) {
    RealTimeSession session = new RealTimeSession(webSocketSession);
    SubscriptionHub.unsubscribeAll(session);
    log.debug("RealTimeSession[{}] Unsubscribed all channels after disconnecting", session.id());
  }
}