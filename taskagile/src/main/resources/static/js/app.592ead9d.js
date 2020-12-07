(function(e){function t(t){for(var r,n,i=t[0],d=t[1],l=t[2],u=0,m=[];u<i.length;u++)n=i[u],s[n]&&m.push(s[n][0]),s[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var d=a[i];0!==s[d]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={app:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=d;o.push(["56d7","chunk-vendors"]),a()})({"0a4d":function(e,t,a){},"1b35":function(e,t,a){},2856:function(e,t,a){},"31ce":function(e,t,a){},"4ad8":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],n={name:"App"},i=n,d=(a("5c0b"),a("2877")),l=Object(d["a"])(i,s,o,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"form"},[a("Logo"),a("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"alert alert-danger failed"},[e._v(e._s(e.errorMessage)+" ")]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",id:"username"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),e.$v.form.username.$dirty?a("div",{staticClass:"field-error"},[e.$v.form.username.required?e._e():a("div",{staticClass:"error"},[e._v("유저 이름을 입력해야합니다.")])]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e.$v.form.password.$dirty?a("div",{staticClass:"field-error"},[e.$v.form.password.required?e._e():a("div",{staticClass:"error"},[e._v("패스워드를 입력해야합니다.")])]):e._e()]),a("button",{staticClass:"btn btn-outline-warning btn-lg btn-block",attrs:{type:"submit"}},[e._v("Sign in")]),e._m(0)])],1)]),a("PageFooter")],1)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"links"},[a("p",{staticClass:"sign-up text-muted"},[e._v(" 계정이 없으십니까? "),a("a",{staticClass:"link-sign-up",attrs:{href:"/register"}},[e._v("클릭하세요!")])]),a("p",[a("a",{attrs:{href:"#"}},[e._v("패스워드를 잊어버리셨습니까?")])])])}],f=a("b5ae"),p=a("bc3a"),g=a.n(p),h=a("2ef0"),b=a.n(h),_={parse:function(e){if(e.response){var t=e.response.status,a=e.response.data;return 400===t?a&&a.message?new Error(a.message):new Error("Bad request"):401===t?new Error("Request not authorized."):403===t?new Error("Request forbidden."):404===t?new Error("Request failed. Request endpoint not found on the server."):500===t?a&&a.message?new Error(a.message+" Please try again later."):new Error("There is an error on the server side. Please try again later."):new Error("Request failed. Please try again later.")}return e.request?new Error("Request failed. No response from the server."):b.a.isError(e)?e:new Error(e)}},C={authenticate:function(e){return new Promise(function(t,a){g.a.post("/authentications",e).then(function(e){var a=e.data;t(a)}).catch(function(e){a(_.parse(e))})})}},w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo-wrapper"},[a("img",{staticClass:"logo",attrs:{src:"/images/logo.png"}}),a("div",{staticClass:"tagline"},[e._v(e._s(e.$t("logo.tagLine")))])])},y=[],$={name:"Logo"},P=$,x=(a("c34e"),Object(d["a"])(P,w,y,!1,null,"01705b82",null));x.options.__file="Logo.vue";var q=x.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("span",{staticClass:"copyright"},[e._v("© 2020 TaskAgile.com")]),a("ul",{staticClass:"footer-links list-inline float-right"},[a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[e._v("About")])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[e._v("서비스 약관")])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[e._v("개인정보보호정책")])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://github.com/taskagile/vuejs.spring-boot.mysql",target:"_blank"}},[e._v("GitHub")])])])])}],L={name:"PageFooter"},k=L,O=(a("d7c7"),Object(d["a"])(k,B,M,!1,null,"4c92eb8a",null));O.options.__file="PageFooter.vue";var N=O.exports,T={name:"LoginPage",data:function(){return{form:{username:"",password:""},errorMessage:""}},components:{Logo:q,PageFooter:N},validations:{form:{username:{required:f["required"]},password:{required:f["required"]}}},methods:{submitForm:function(){var e=this;this.$v.$touch(),this.$v.$invalid||C.authenticate(this.form).then(function(){e.$router.push({name:"HomePage"})}).catch(function(t){e.errorMessage=t.message})}}},E=T,A=(a("c9e9"),Object(d["a"])(E,m,v,!1,null,"5b6bc5a4",null));A.options.__file="LoginPage.vue";var j=A.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"register-form"},[e._m(0),a("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"failed"},[e._v(e._s(e.errorMessage))]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v(" Username ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",id:"username"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),e.$v.form.username.$dirty?a("div",{staticClass:"field-error"},[e.$v.form.username.required?e._e():a("div",{staticClass:"error"},[e._v("이름을 입력해야합니다.")]),e.$v.form.username.alphaNum?e._e():a("div",{staticClass:"error"},[e._v("이름은 글자와 숫자만 가능합니다.")]),e.$v.form.username.minLength?e._e():a("div",{staticClass:"error"},[e._v("이름은 "+e._s(e.$v.form.username.$params.minLength.min)+"자 이상이어야합니다.")]),e.$v.form.username.maxLength?e._e():a("div",{staticClass:"error"},[e._v("이름은 "+e._s(e.$v.form.username.$params.maxLength.max)+"자 이하여야합니다.")])]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"emailAddress"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.emailAddress,expression:"form.emailAddress"}],staticClass:"form-control",attrs:{type:"email",id:"emailAddress"},domProps:{value:e.form.emailAddress},on:{input:function(t){t.target.composing||e.$set(e.form,"emailAddress",t.target.value)}}}),e.$v.form.emailAddress.$dirty?a("div",{staticClass:"field-error"},[e.$v.form.emailAddress.required?e._e():a("div",{staticClass:"error"},[e._v("이메일을 입력해야합니다.")]),e.$v.form.emailAddress.email?e._e():a("div",{staticClass:"error"},[e._v("유효한 이메일 주소가 아닙니다.")]),e.$v.form.emailAddress.maxLength?e._e():a("div",{staticClass:"error"},[e._v("이메일 주소는 "+e._s(e.$v.form.emailAddress.$params.maxLength.max)+"자 이하여야합니다.")])]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e.$v.form.password.$dirty?a("div",{staticClass:"field-error"},[e.$v.form.password.required?e._e():a("div",{staticClass:"error"},[e._v("패스워드를 입력해야합니다.")]),e.$v.form.password.minLength?e._e():a("div",{staticClass:"error"},[e._v("패스워드는 "+e._s(e.$v.form.password.$params.minLength.min)+"자 이상이어야합니다.")]),e.$v.form.password.maxLength?e._e():a("div",{staticClass:"error"},[e._v("패스워드는 "+e._s(e.$v.form.password.$params.maxLength.min)+"자 이하여야합니다.")])]):e._e()]),a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("Create account")]),e._m(1),e._m(2)])])]),e._m(3)])},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo-wrapper"},[a("img",{staticClass:"logo",attrs:{src:"/images/logo.png"}}),a("div",{staticClass:"tagline"},[e._v("Open source task management tool")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"accept-terms text-muted"},[e._v("Create account를 클릭하면, "),a("a",{attrs:{href:"#"}},[e._v("서비스 약관")]),e._v(" 및 "),a("a",{attrs:{href:"#"}},[e._v("개인정보 보호정책")]),e._v("에 동의하는 것입니다.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"text-center text-muted"},[e._v("계정이 있으시면 "),a("a",{attrs:{href:"/login"}},[e._v("로그인")]),e._v("하세요.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("span",{staticClass:"copyright"},[e._v("© 2020 TaskAgile.com")]),a("ul",{staticClass:"footer-links list-inline float-right"},[a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[e._v("About")])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[e._v("Terms of Service")])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"#"}},[e._v("Privacy Policy")])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"https://github.com/inwoox/Vue-Spring-TaskManager",target:"_blank"}},[e._v("GitHub")])])])])}],R={register:function(e){return new Promise(function(t,a){g.a.post("/registrations",e).then(function(e){var a=e.data;t(a)}).catch(function(e){a(e)})})}},U={name:"RegisterPage",data:function(){return{form:{username:"",emailAddress:"",password:""},errorMessage:""}},validations:{form:{username:{required:f["required"],minLength:Object(f["minLength"])(2),maxLength:Object(f["maxLength"])(50),alphaNum:f["alphaNum"]},emailAddress:{required:f["required"],email:f["email"],maxLength:Object(f["maxLength"])(100)},password:{required:f["required"],minLength:Object(f["minLength"])(6),maxLength:Object(f["maxLength"])(30)}}},methods:{submitForm:function(){var e=this;this.$v.$touch(),this.$v.$invalid||R.register(this.form).then(function(){e.$router.push({name:"LoginPage"})}).catch(function(t){e.errorMessage="유저 등록에 실패하였습니다."+t.message})}}},H=U,F=(a("8481"),Object(d["a"])(H,S,I,!1,null,"40c665a2",null));F.options.__file="RegisterPage.vue";var D=F.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("PageHeader"),a("div",{staticClass:"boards-container"},[a("div",{staticClass:"boards-section"},[a("h2",{staticClass:"section-title"},[e._v(e._s(e.$t("homePage.personalBoards")))]),a("div",{staticClass:"boards d-flex align-content-start flex-wrap"},[e._l(e.personalBoards,function(t){return a("div",{key:t.id,staticClass:"board list-inline-item",on:{click:function(a){e.openBoard(t)}}},[a("h3",[e._v(e._s(t.name))]),a("p",[e._v(e._s(t.description))])])}),a("div",{staticClass:"board add list-inline-item",on:{click:function(t){e.createBoard()}}},[a("font-awesome-icon",{attrs:{icon:"plus"}}),a("div",[e._v(e._s(e.$t("homePage.createNewBoard")))])],1)],2)]),e._l(e.teamBoards,function(t){return a("div",{key:t.id,staticClass:"boards-section"},[a("h2",{staticClass:"section-title"},[e._v(e._s(t.name))]),a("div",{staticClass:"boards d-flex align-content-start flex-wrap"},[e._l(t.boards,function(t){return a("div",{key:t.id,staticClass:"board list-inline-item",on:{click:function(a){e.openBoard(t)}}},[a("h3",[e._v(e._s(t.name))]),a("p",[e._v(e._s(t.description))])])}),a("div",{staticClass:"board add list-inline-item",on:{click:function(a){e.createBoard(t)}}},[a("font-awesome-icon",{attrs:{icon:"plus"}}),a("div",[e._v(e._s(e.$t("homePage.createNewBoard")))])],1)],2)])}),a("div",{staticClass:"create-team-wrapper"},[a("button",{staticClass:"btn btn-link",on:{click:function(t){e.createTeam()}}},[e._v("+ "+e._s(e.$t("homePage.createNewTeam")))])])],2),a("CreateBoardModal",{attrs:{teamId:e.selectedTeamId},on:{created:e.onBoardCreated}}),a("CreateTeamModal")],1)},G=[],J=a("c93e"),Y=a("1157"),K=a.n(Y),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header d-flex align-content-center"},[a("div",{staticClass:"logo",on:{click:function(t){e.goHome()}}},[a("font-awesome-icon",{staticClass:"home-icon",attrs:{icon:"home"}}),a("img",{attrs:{src:"/images/logo.png"}})],1),a("div",{staticClass:"boards-menu-toggle"},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn dropdown-toggle",attrs:{type:"button",id:"boardsMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n        "+e._s(e.$t("header.boardsMenu.label"))+"\n      ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"boardsMenu"}},[e.hasBoards?e._e():a("div",{staticClass:"dropdown-item"},[e._v(e._s(e.$t("header.boardsMenu.noBoard")))]),e.hasBoards?a("div",[e.personalBoards?a("h6",{staticClass:"dropdown-header"},[e._v(e._s(e.$t("header.boardsMenu.personalBoards")))]):e._e(),e._l(e.personalBoards,function(t){return a("button",{key:t.id,staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(a){e.openBoard(t)}}},[e._v(e._s(t.name))])}),e._l(e.teamBoards,function(t){return a("div",{key:"t"+t.id},[a("h6",{staticClass:"dropdown-header"},[e._v(e._s(t.name))]),e._l(t.boards,function(t){return a("button",{key:t.id,staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(a){e.openBoard(t)}}},[e._v(e._s(t.name))])})],2)})],2):e._e()])])]),a("div",{staticClass:"search-box flex-fill"},[a("div",{staticClass:"search-wrapper"},[a("font-awesome-icon",{staticClass:"search-icon",attrs:{icon:"search"}}),a("input",{staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:e.$t("header.search")}})],1)]),a("div",{staticClass:"profile-menu-toggle"},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn dropdown-toggle",attrs:{type:"button",id:"profileMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e._v("\n        "+e._s(e.user.name)+"\n      ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"profileMenu"}},[a("button",{staticClass:"dropdown-item",attrs:{type:"button"}},[e._v(e._s(e.$t("header.profile")))]),a("button",{staticClass:"dropdown-item",attrs:{type:"button"}},[e._v(e._s(e.$t("header.signOut")))])])])])])},Q=[],W=(a("3e48"),a("2f62")),X={name:"PageHeader",computed:Object(J["a"])({},Object(W["b"])(["user","hasBoards","personalBoards","teamBoards"])),created:function(){this.$store.dispatch("getMyData")},methods:{goHome:function(){this.$router.push({name:"HomePage"})},openBoard:function(e){this.$router.push({name:"board",params:{boardId:e.id}})}}},Z=X,ee=(a("e858"),Object(d["a"])(Z,V,Q,!1,null,"e66f37dc",null));ee.options.__file="PageHeader.vue";var te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.saveBoard(t)}}},[a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",backdrop:"static",id:"createBoardModal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("Create Board")]),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.close}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),a("div",{staticClass:"modal-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"alert alert-danger failed"},[e._v(e._s(e.errorMessage))]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.board.name,expression:"board.name"}],staticClass:"form-control",attrs:{type:"text",id:"boardNameInput",placeholder:"Board name",maxlength:"128"},domProps:{value:e.board.name},on:{input:function(t){t.target.composing||e.$set(e.board,"name",t.target.value)}}}),e.$v.board.name.$dirty?a("div",{staticClass:"field-error"},[e.$v.board.name.required?e._e():a("div",{staticClass:"error"},[e._v("Name is required")])]):e._e()]),a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.board.description,expression:"board.description"}],staticClass:"form-control",attrs:{placeholder:"Add board description here"},domProps:{value:e.board.description},on:{input:function(t){t.target.composing||e.$set(e.board,"description",t.target.value)}}}),e.$v.board.description.$dirty?a("div",{staticClass:"field-error"},[e.$v.board.description.required?e._e():a("div",{staticClass:"error"},[e._v("Description is required")])]):e._e()])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create")]),a("button",{staticClass:"btn btn-default btn-cancel",attrs:{type:"button"},on:{click:e.close}},[e._v("Cancel")])])])])])])},re=[],se=(a("7f7f"),{create:function(e){return new Promise(function(t,a){g.a.post("/boards",e).then(function(e){var a=e.data;t(a)}).catch(function(e){a(_.parse(e))})})}}),oe={name:"CreateBoardModal",props:["teamId"],data:function(){return{board:{name:"",description:""},errorMessage:""}},validations:{board:{name:{required:f["required"]},description:{required:f["required"]}}},mounted:function(){K()("#createBoardModal").on("shown.bs.modal",function(){K()("#boardNameInput").trigger("focus")})},methods:{saveBoard:function(){var e=this;if(this.$v.$touch(),!this.$v.$invalid){var t={teamId:this.teamId,name:this.board.name,description:this.board.description};se.create(t).then(function(t){e.$store.dispatch("addBoard",t),e.$emit("created",t.id),e.close()}).catch(function(t){e.errorMessage=t.message})}},close:function(){this.$v.$reset(),this.board.name="",this.board.description="",this.errorMessage="",K()("#createBoardModal").modal("hide")}}},ne=oe,ie=(a("d1fe"),Object(d["a"])(ne,ae,re,!1,null,"3e73db4e",null));ie.options.__file="CreateBoardModal.vue";var de=ie.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.saveTeam(t)}}},[a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",backdrop:"static",id:"createTeamModal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("Create Team")]),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.close}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),a("div",{staticClass:"modal-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"alert alert-danger failed"},[e._v(e._s(e.errorMessage))]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.team.name,expression:"team.name"}],staticClass:"form-control",attrs:{type:"text",id:"teamNameInput",placeholder:"Team name",maxlength:"128"},domProps:{value:e.team.name},on:{input:function(t){t.target.composing||e.$set(e.team,"name",t.target.value)}}}),e.$v.team.name.$dirty?a("div",{staticClass:"field-error"},[e.$v.team.name.required?e._e():a("div",{staticClass:"error"},[e._v("Name is required")])]):e._e()])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create")]),a("button",{staticClass:"btn btn-default btn-cancel",attrs:{type:"button"},on:{click:e.close}},[e._v("Cancel")])])])])])])},ce=[],ue={create:function(e){return new Promise(function(t,a){g.a.post("/teams",e).then(function(e){var a=e.data;t(a)}).catch(function(e){a(_.parse(e))})})}},me={name:"CreateTeamModal",data:function(){return{team:{name:""},errorMessage:""}},validations:{team:{name:{required:f["required"]}}},mounted:function(){K()("#createTeamModal").on("shown.bs.modal",function(){K()("#teamNameInput").trigger("focus")})},methods:{saveTeam:function(){var e=this;this.$v.$touch(),this.$v.$invalid||ue.create(this.team).then(function(t){e.$store.dispatch("addTeam",t),e.close()}).catch(function(t){e.errorMessage=t.message})},close:function(){this.$v.$reset(),this.team.name="",this.errorMessage="",K()("#createTeamModal").modal("hide")}}},ve=me,fe=(a("5e35"),Object(d["a"])(ve,le,ce,!1,null,"4fc5d605",null));fe.options.__file="CreateTeamModal.vue";var pe=fe.exports,ge={name:"HomePage",data:function(){return{selectedTeamId:0}},computed:Object(J["a"])({},Object(W["b"])(["personalBoards","teamBoards"])),components:{PageHeader:te,CreateBoardModal:de,CreateTeamModal:pe},methods:{openBoard:function(e){this.$router.push({name:"board",params:{boardId:e.id}})},createBoard:function(e){this.selectedTeamId=e?e.id:0,K()("#createBoardModal").modal("show")},createTeam:function(){K()("#createTeamModal").modal("show")},onBoardCreated:function(e){this.$router.push({name:"board",params:{boardId:e}})}}},he=ge,be=(a("e2cd"),Object(d["a"])(he,z,G,!1,null,"00c11cc8",null));be.options.__file="HomePage.vue";var _e=be.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("PageHeader"),a("div",[e._v("Board")])],1)},we=[],ye={name:"BoardPage",components:{PageHeader:te}},$e=ye,Pe=(a("81c1"),Object(d["a"])($e,Ce,we,!1,null,"7425414a",null));Pe.options.__file="BoardPage.vue";var xe=Pe.exports;r["a"].use(u["a"]);var qe=new u["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"LoginPage",component:j},{path:"/register",name:"RegisterPage",component:D},{path:"/",name:"HomePage",component:_e},{path:"/board/:boardId",name:"board",component:xe}]});r["a"].use(W["a"]);var Be=new W["a"].Store({state:{},mutations:{},actions:{}}),Me=a("1dce"),Le=a.n(Me),ke=a("ecee"),Oe=a("c074"),Ne=a("ad3d"),Te=a("a925"),Ee=a("ab72"),Ae=a("7215"),je=Ee,Se=Ae;r["a"].use(Te["a"]);var Ie=new Te["a"]({locale:"en_US",messages:{en_US:je,kr_KR:Se}});g.a.defaults.baseURL="/api",g.a.defaults.headers.common.Accept="application/json",g.a.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),r["a"].use(Le.a),ke["c"].add(Oe["a"],Oe["c"],Oe["b"]),r["a"].component("font-awesome-icon",Ne["a"]),r["a"].config.productionTip=!1,new r["a"]({router:qe,store:Be,i18n:Ie,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("2856"),s=a.n(r);s.a},"5e35":function(e,t,a){"use strict";var r=a("7e98"),s=a.n(r);s.a},6407:function(e,t,a){},"6a47":function(e,t,a){},7215:function(e){e.exports={logo:{tagLine:"Open source task management tool"},header:{boardsMenu:{label:"Boards",noBoard:"No board",personalBoards:"Personal Boards"},search:"Search",profile:"Profile",signOut:"Sign Out"},loginPage:{form:{username:{label:"Username or email address",required:"Username or email address is required"},password:{label:"Password",required:"Password is required"},submit:"Sign in",noAccountYet:"Don't have an account yet?",signUpHere:"Sign up here",forgotPassword:"Forgot your password?"}},registerPage:{form:{username:{label:"Username",requred:"Username is required",alphaNum:"Username can only contain letters and numbers",minLength:"Username must have at least {minLength} letters.",maxLength:"Username is too long. It can contains maximium {maxLength} letters."},emailAddress:{label:"Email address",required:"Email address is required",email:"This is not a valid email address",maxLength:"Email address is too long. It can contains maximium {maxLength} letters."},password:{label:"Password",required:"Password is required",minLength:"Password is too short. It can contains at least {minLength} letters.",maxLength:"Password is too long. It can contains maximium {maxLength} letters."},submit:"Create account",terms:{accept:"By clicking “Create account”, you agree to our {termsOfService} and {privacyPolicy}.",termsOfService:"terms of service",privacyPolicy:"privacy policy"},alreadyHaveAccount:"Already have an account?",signIn:"Sign in"}},homePage:{personalBoards:"Personal Boards",createNewBoard:"Create New Board",createNewTeam:"Create New Team"},pageFooter:{about:"About",termOfService:"Terms of Service",privacyPolicy:"Privacy Policy"},error:{request:{bad:"Bad request",notAuthorized:"Request not authorized.",forbidden:"Request forbidden.",notFound:"Request failed. Request endpoint not found on the server.",unknownServerError:"There is an error on the server side. Please try again later.",failed:"Request failed. Please try again later.",noResponse:"Request failed. No response from the server."}}}},"7e98":function(e,t,a){},"81c1":function(e,t,a){"use strict";var r=a("e48b"),s=a.n(r);s.a},8481:function(e,t,a){"use strict";var r=a("1b35"),s=a.n(r);s.a},ab72:function(e){e.exports={logo:{tagLine:"Open source task management tool"},header:{boardsMenu:{label:"Boards",noBoard:"No board",personalBoards:"Personal Boards"},search:"Search",profile:"Profile",signOut:"Sign Out"},loginPage:{form:{username:{label:"Username or email address",required:"Username or email address is required"},password:{label:"Password",required:"Password is required"},submit:"Sign in",noAccountYet:"Don't have an account yet?",signUpHere:"Sign up here",forgotPassword:"Forgot your password?"}},registerPage:{form:{username:{label:"Username",requred:"Username is required",alphaNum:"Username can only contain letters and numbers",minLength:"Username must have at least {minLength} letters.",maxLength:"Username is too long. It can contains maximium {maxLength} letters."},emailAddress:{label:"Email address",required:"Email address is required",email:"This is not a valid email address",maxLength:"Email address is too long. It can contains maximium {maxLength} letters."},password:{label:"Password",required:"Password is required",minLength:"Password is too short. It can contains at least {minLength} letters.",maxLength:"Password is too long. It can contains maximium {maxLength} letters."},submit:"Create account",terms:{accept:"By clicking “Create account”, you agree to our {termsOfService} and {privacyPolicy}.",termsOfService:"terms of service",privacyPolicy:"privacy policy"},alreadyHaveAccount:"Already have an account?",signIn:"Sign in"}},homePage:{personalBoards:"Personal Boards",createNewBoard:"Create New Board",createNewTeam:"Create New Team"},pageFooter:{about:"About",termOfService:"Terms of Service",privacyPolicy:"Privacy Policy"},error:{request:{bad:"Bad request",notAuthorized:"Request not authorized.",forbidden:"Request forbidden.",notFound:"Request failed. Request endpoint not found on the server.",unknownServerError:"There is an error on the server side. Please try again later.",failed:"Request failed. Please try again later.",noResponse:"Request failed. No response from the server."}}}},c34e:function(e,t,a){"use strict";var r=a("ff9b"),s=a.n(r);s.a},c9e9:function(e,t,a){"use strict";var r=a("31ce"),s=a.n(r);s.a},d1fe:function(e,t,a){"use strict";var r=a("4ad8"),s=a.n(r);s.a},d7c7:function(e,t,a){"use strict";var r=a("6407"),s=a.n(r);s.a},e2cd:function(e,t,a){"use strict";var r=a("0a4d"),s=a.n(r);s.a},e48b:function(e,t,a){},e858:function(e,t,a){"use strict";var r=a("6a47"),s=a.n(r);s.a},ff9b:function(e,t,a){}});
//# sourceMappingURL=app.592ead9d.js.map