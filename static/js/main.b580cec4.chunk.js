(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e){e.exports=JSON.parse('{"Loginform.header":"Input the password to access the Message Log.","Loginform.input-email":"Email","Loginform.input-pd":"Password","Loginform.button-submit":"Log In","Loginform.formHandler.alert":"You are not authorized to use this service.","SignInForm.formHandler.alert":"Successfully Sign In.","SignInForm.header":"Input Email and Password to sign in.","SignInForm.header2":"Password should be more than 7 digits.","SignInForm.button-submit":"Submit","Layout.iconText-login":"LogIn","Layout.iconText-logout":"LogOut","Layout.iconText-signin":"SingIn","Layout.iconText-changepw":"Change Password","ChangePasswordForm.formHandler-header":"Input the password that you want to change.","ChangePasswordForm.formHandler-alert":"Failed to change password. Password Should be more than 7 digits.","ChangePasswordForm.formHandler-alert2":"Succeded to change the password.","InitialPage.header":"Select Menu To Start Application."}')},106:function(e){e.exports=JSON.parse('{"Loginform.header":"\ub85c\uadf8\uc5d0 \uc811\uc18d \ud558\ub824\uba74 \uc544\uc774\ub514\uc640 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.","Loginform.input-email":"\uc774\uba54\uc77c","Loginform.input-pd":"\ud328\uc2a4\uc6cc\ub4dc","Loginform.button-submit":"\ub85c\uadf8\uc778","Loginform.formHandler.alert":"\ub2f9\uc2e0\uc740 \uc2b9\uc778\ubc1b\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4.","SignInForm.formHandler.alert":"\uac00\uc785\uc774 \uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4.","SignInForm.header":"\uc774\uba54\uc77c \uacfc \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc11c \uac00\uc785\ud574 \ubcf4\uc138\uc694.","SignInForm.header2":"\ube44\ubc00\ubc88\ud638\ub294 7\uc790\ub9ac \uc774\uc0c1\uc774\uc5ec\uc57c \ub429\ub2c8\ub2e4.","SignInForm.button-submit":"\uc81c\ucd9c","Layout.iconText-login":"\ub85c\uadf8\uc778","Layout.iconText-logout":"\ub85c\uadf8\uc544\uc6c3","Layout.iconText-signin":"\uac00\uc785\ud558\uae30","Layout.iconText-changepw":"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd","ChangePasswordForm.formHandler-header":"\ubcc0\uacbd\ud560 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.","ChangePasswordForm.formHandler-alert":"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ube44\ubc00\ubc88\ud638\ub294 7\uc790 \uc774\uc0c1\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4..","ChangePasswordForm.formHandler-alert2":"\uc131\uacf5\ud558\uc600\uc2b5\ub2c8\ub2e4.","InitialPage.header":"\uba54\ub274\ub97c \uc120\ud0dd\ud558\uc5ec \uc2dc\uc791\ud574 \ubcf4\uc138\uc694!"}')},146:function(e,t,n){e.exports=n(165)},151:function(e,t,n){},152:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"main",(function(){return Je}));var r={};n.r(r),n.d(r,"main",(function(){return Be}));var o=n(0),l=n.n(o),i=n(30),c=n.n(i),u=(n(151),n(14)),s=(n(152),n(251)),m=n(238),d=n(246),p=n(245),g=n(176),f=n(18),h=n.n(f),v=n(31),b=function(){var e=Object(v.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkLePHqkPxNxPalsSLE_C4CbAaOiaGwNw",{method:"POST",body:JSON.stringify({email:t,password:n,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:if((a=e.sent).ok){e.next=8;break}throw console.log(a),"Authentication failed! \n \ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.",new Error("Authentication failed! \n \ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.");case 8:return e.next=10,a.json();case 10:return r=e.sent,console.log(r),e.abrupt("return",r);case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(v.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkLePHqkPxNxPalsSLE_C4CbAaOiaGwNw",{method:"POST",body:JSON.stringify({email:t,password:n,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:if((a=e.sent).ok){e.next=8;break}throw console.log(a),"Sign In failed! Password Should be more than 7 digits. \n \ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ube44\ubc00\ubc88\ud638\ub294 7\uc790 \uc774\uc0c1\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4.",new Error("Sign In failed! Password Should be more than 7 digits. \n \ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ube44\ubc00\ubc88\ud638\ub294 7\uc790 \uc774\uc0c1\uc774\uc5ec\uc57c \ud569\ub2c8\ub2e4.");case 8:return e.next=10,a.json();case 10:return r=e.sent,console.log(r),e.abrupt("return",r);case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n){return e.apply(this,arguments)}}(),x=n(93),w=Object(x.b)({name:"user",initialState:{user:"",idToken:"",isLoggedIn:!1,lan:""},reducers:{updateUser:function(e,t){e.user=t.payload},updateIdToken:function(e,t){e.idToken=t.payload},updateIsLoggedIn:function(e,t){e.isLoggedIn=t.payload},updateLanguage:function(e,t){e.lan=t.payload}}}),y=Object(x.a)({reducer:w.reducer}),k=w.actions,j=y,O=n(60),I=O.c,S=function(){return Object(O.b)()},L=function(){var e=S(),t=Object(o.useRef)(null),n=Object(o.useRef)(null),a=Object(u.g)(),r=Object(d.a)("main").t;return l.a.createElement("section",null,l.a.createElement(g.a,{variant:"h6",color:"white"},r("Loginform.header")),l.a.createElement(s.a,{sx:{backgroundColor:"white",marginTop:"10px"}}),l.a.createElement(p.a,{container:!0,spacing:4,style:{marginTop:"10px"}},l.a.createElement(p.a,{item:!0,xs:12,sm:3}),l.a.createElement(p.a,{item:!0,xs:12,sm:6},l.a.createElement(m.a,{required:!0,color:"primary",sx:{input:{borderRadius:"5px",border:"1px solid white",color:"white"}},margin:"dense",name:"Email",label:r("Loginform.input-email"),type:"text",fullWidth:!0,InputLabelProps:{style:{color:"#fff"}},inputRef:t}),l.a.createElement(m.a,{margin:"dense",required:!0,name:"pw",sx:{input:{borderRadius:"5px",border:"1px solid white",color:"white"}},InputLabelProps:{style:{color:"#fff"}},label:r("Loginform.input-pd"),type:"password",fullWidth:!0,inputRef:n}),l.a.createElement("button",{style:{marginTop:"30px"},onClick:function(){var o,l;b(null===(o=t.current)||void 0===o?void 0:o.value,null===(l=n.current)||void 0===l?void 0:l.value).then((function(t){console.log(t),!0===(null===t||void 0===t?void 0:t.registered)&&"Hans"===(null===t||void 0===t?void 0:t.displayName)||!0===(null===t||void 0===t?void 0:t.registered)&&"Sarah"===(null===t||void 0===t?void 0:t.displayName)?(e(k.updateIdToken(t.idToken)),e(k.updateIsLoggedIn(!0)),e(k.updateUser(null===t||void 0===t?void 0:t.displayName)),localStorage.setItem("token",t.idToken),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("user",null===t||void 0===t?void 0:t.displayName),a("/hompageen")):!0===(null===t||void 0===t?void 0:t.registered)&&"\uc131\uc7ac"===(null===t||void 0===t?void 0:t.displayName)||!0===(null===t||void 0===t?void 0:t.registered)&&"\uc5c4\ub9c8"===(null===t||void 0===t?void 0:t.displayName)||!0===(null===t||void 0===t?void 0:t.registered)&&"\uc740\uc9c0"===(null===t||void 0===t?void 0:t.displayName)||!0===(null===t||void 0===t?void 0:t.registered)&&"\uc544\ube60"===(null===t||void 0===t?void 0:t.displayName)?(e(k.updateIdToken(t.idToken)),e(k.updateIsLoggedIn(!0)),e(k.updateUser(null===t||void 0===t?void 0:t.displayName)),localStorage.setItem("token",t.idToken),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("user",null===t||void 0===t?void 0:t.displayName),a("/hompagekr")):!0===(null===t||void 0===t?void 0:t.registered)&&alert(r("Loginform.formHandler.alert"))}))}},r("Loginform.button-submit")))))},T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,null))},C=n(8),P=n(254),N=n(232),F=function(){Object(u.g)();var e=Object(d.a)("main"),t=(e.t,e.i18n);return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{sx:{backgroundColor:"linear-gradient(to left, #3399ff 27%, #9999ff 100%);"}},l.a.createElement(P.a,null,l.a.createElement(N.a,{sx:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",padding:"10px 0px"},component:"div"},l.a.createElement(g.a,{variant:"body2",component:"div",gutterBottom:!0,sx:{color:"white"}},"InterLogger v3"),l.a.createElement("select",{onChange:function(e){console.log(e.target.value),t.changeLanguage(e.target.value)},style:{color:"white",backgroundColor:"#00000000",borderColor:"#00000000"}},l.a.createElement("option",{value:"kr"},"\ud55c\uad6d\uc5b4"),l.a.createElement("option",{value:"en"},"English"))))))},H=n(234),R=n(242),A=n(243),U=n(237),W=n(119),q=n.n(W),J=n(118),B=n.n(J),D=n(120),M=n.n(D),z=n(121),G=n.n(z),Y=n(122),_=n.n(Y),V=n(89),K=n.n(V),Q=n(90),X=n.n(Q),Z=n(244),$=n(247),ee=n(250),te=n(248),ne=n(249),ae=n(233),re=function(e){var t=e.open,n=e.close,a=Object(o.useState)(!1),r=Object(C.a)(a,2),i=r[0],c=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement($.a,{open:t,onClose:n,fullWidth:!0,maxWidth:"sm"},l.a.createElement(ae.a,null,"Undoing Box"),l.a.createElement(te.a,null,l.a.createElement(ne.a,{align:"left"},l.a.createElement(p.a,{container:!0,spacing:8,sx:{display:"flex",alignItems:"center",flexDirection:"row"}},!i&&l.a.createElement(p.a,{item:!0,xs:12,md:12},l.a.createElement(g.a,{variant:"body2"},"\uc6b0\ub9ac \uc774\uc05c\uc774 \uc548\ub155? You pressed this button because you wanted to say goodbye or break up to me, right? You must have had a hard time today. \uc6b0\ub9ac \uc774\uc05c\uc774. \ub108\ubb34 \uc218\uace0\ud588\uc5b4. ",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement(g.a,{variant:"body1"},"Lets take some 5 min of Rest time first and cool down yourself."),l.a.createElement("br",null),l.a.createElement(g.a,{variant:"body2"},"Did you all rest? I think I've probably cleared my mind. Then let's press blue button. Then you'll change your mind about breaking up."))),i&&l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement(H.a,{sx:{width:"400px",height:"600px"},component:"img",src:"image/sarah.jpeg"}),l.a.createElement(g.a,{variant:"body2"},"\uc624\ube60\ub3c4 \uc6b0\ub9ac\ub3fc\uc9c0\ub97c \ub9ce\uc774 \uc0ac\ub791\ud558\uace0 \ubbff\uc9c0. \uc624\ube60\ub791 \ub2e4\uc2dc \ud55c\ubc88 \uc804\ud654\ud574\uc11c \uc774\uc57c\uae30 \ud574\ubcf4\uc790 \uc774\uc05c\uc774. We cannot break easily like this. ",l.a.createElement("br",null),"We can fix the issue with call. Let make a call bae."),l.a.createElement("br",null),l.a.createElement("a",{href:"tel:+85267901714"}," \uc624\ube60\ud55c\ud14c \uc804\ud654 \uac78\uae30 ")))),l.a.createElement(ee.a,null,l.a.createElement(Z.a,{variant:"contained",style:{color:"white"},onClick:function(){c(!0)},disabled:i},"Press Me"),l.a.createElement(Z.a,{variant:"contained",style:{color:"white",background:"red"},onClick:function(){n(),c(!1)}},"Close"))))},oe=function(e){var t=Object(o.useState)(!1),n=Object(C.a)(t,2),a=n[0],r=n[1],i=Object(d.a)("main").t,c=function(){return r(!1)},s=S(),m=Object(u.g)(),p=I((function(e){return e.user})),g=I((function(e){return e.isLoggedIn})),f=Object(o.useState)(!1),h=Object(C.a)(f,2),v=h[0],b=h[1],E=[g?{icon:l.a.createElement(B.a,null),name:i("Layout.iconText-logout")}:{icon:l.a.createElement(q.a,null),name:i("Layout.iconText-login")},g?null:{icon:l.a.createElement(M.a,null),name:i("Layout.iconText-signin")},g?{icon:l.a.createElement(G.a,null),name:i("Layout.iconText-changepw")}:null,g?"\uc131\uc7ac"===p||"\uc5c4\ub9c8"===p||"\uc544\ube60"===p||"\uc740\uc9c0"===p?{icon:l.a.createElement(K.a,null),name:"\uba54\uc138\uc9c0 \ub85c\uadf8"}:{icon:l.a.createElement(K.a,null),name:"Message Log"}:null,g?"\uc131\uc7ac"===p||"\uc5c4\ub9c8"===p||"\uc544\ube60"===p||"\uc740\uc9c0"===p?{icon:l.a.createElement(X.a,null),name:"\ud648"}:{icon:l.a.createElement(X.a,null),name:"Home"}:null,g?"\uc131\uc7ac"===p||"\uc5c4\ub9c8"===p||"\uc544\ube60"===p||"\uc740\uc9c0"===p?null:{icon:l.a.createElement(_.a,null),name:"Undoing Box"}:null].filter(Boolean);return console.log(p),l.a.createElement("div",null,l.a.createElement(F,null),l.a.createElement(H.a,{sx:{flexGrow:1}},l.a.createElement("main",null,e.children),l.a.createElement(R.a,{ariaLabel:"SpeedDial tooltip example",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"},icon:l.a.createElement(A.a,null),onClose:c,onOpen:function(){return r(!0)},open:a},E.map((function(e){return l.a.createElement(U.a,{key:null===e||void 0===e?void 0:e.name,icon:null===e||void 0===e?void 0:e.icon,tooltipTitle:null===e||void 0===e?void 0:e.name,tooltipOpen:!0,onClick:function(){"LogIn"===(null===e||void 0===e?void 0:e.name)||"\ub85c\uadf8\uc778"===(null===e||void 0===e?void 0:e.name)?m("/login"):"LogOut"===(null===e||void 0===e?void 0:e.name)||"\ub85c\uadf8\uc544\uc6c3"===(null===e||void 0===e?void 0:e.name)?(s(k.updateIdToken("")),s(k.updateIsLoggedIn(!1)),s(k.updateUser("")),localStorage.removeItem("token"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("user"),m("/login")):"SingIn"===(null===e||void 0===e?void 0:e.name)||"\uac00\uc785\ud558\uae30"===(null===e||void 0===e?void 0:e.name)?m("/signin"):"Change Password"===(null===e||void 0===e?void 0:e.name)||"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"===(null===e||void 0===e?void 0:e.name)?m("/changepassword"):"Message Log"===(null===e||void 0===e?void 0:e.name)?m("/msglogen"):"\uba54\uc138\uc9c0 \ub85c\uadf8"===(null===e||void 0===e?void 0:e.name)?m("/msglogkr"):"Home"===(null===e||void 0===e?void 0:e.name)?m("/hompageen"):"\ud648"===(null===e||void 0===e?void 0:e.name)||"\uba54\uc138\uc9c0 \ub85c\uadf8"===(null===e||void 0===e?void 0:e.name)?m("/hompagekr"):"Undoing Box"===(null===e||void 0===e?void 0:e.name)&&b(!0),c()}})})))),l.a.createElement(re,{open:v,close:function(){b(!1)}}))};n(102);var le,ie=function(e){var t=Object(o.useRef)(null),n=Object(o.useRef)(null),a=new Date,r=I((function(e){return e.user}));return l.a.createElement("form",{onSubmit:function(o){var l,i;if((null===(l=t.current)||void 0===l?void 0:l.value)&&(null===(i=n.current)||void 0===i?void 0:i.value)){var c,u;o.preventDefault();var s={title:null===(c=t.current)||void 0===c?void 0:c.value,text:null===(u=n.current)||void 0===u?void 0:u.value,date:a.toLocaleString(),logger:r};e.AddNote(s),e.setIsbuttonPressed(!1),t.current.value="",n.current.value=""}else alert("Please input required fields.")}},l.a.createElement("div",{className:"control"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",id:"title",ref:t,style:{color:"white"},placeholder:"Log the title here..!"})),l.a.createElement("div",{className:"control"},l.a.createElement("label",{htmlFor:"text-log"},"Text Log"),l.a.createElement("textarea",{rows:5,id:"text-log",ref:n,style:{color:"white"},placeholder:"Log the past event that you want to mention.."})),l.a.createElement("button",null,"Submit"))},ce=n(48),ue=n(78),se=(n(103),ue.a.li(le||(le=Object(ce.a)(["\n  margin: ",";\n  padding: 1rem;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n  border-radius: 6px;\n  text-align: center;\n  color: white;\n"])),(function(e){return e.margin?e.margin+"px":"1rem;"}))),me=function(e){return l.a.createElement("div",null,l.a.createElement(se,null,l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.text),l.a.createElement("h6",null,e.date)))},de=(n(104),function(e){return l.a.createElement("div",{style:{overflowY:"scroll",height:300}},l.a.createElement("ul",{className:"note-list"},e.note.map((function(e){return l.a.createElement(me,{key:e.id,title:e.title,date:e.date,text:e.text})}))))}),pe=function(){var e=I((function(e){return e.user})),t=(S(),Object(o.useState)([])),n=Object(C.a)(t,2),a=n[0],r=n[1],i=Object(o.useState)(""),c=Object(C.a)(i,2),s=c[0],m=c[1],d=Object(o.useState)(!1),p=Object(C.a)(d,2),g=p[0],f=p[1],b=Object(o.useState)(!1),E=Object(C.a)(b,2),x=E[0],w=E[1],y=(Object(u.g)(),Object(o.useCallback)(Object(v.a)(h.a.mark((function e(){var t,n,a,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),m(""),e.prev=2,e.next=5,fetch("https://react-http-2887f-default-rtdb.firebaseio.com/notes.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:for(o in n=e.sent,console.log(n),a=[],n)a.push({id:o,title:n[o].title,text:n[o].text,date:"".concat(n[o].logger," logged message at ").concat(n[o].date,"....")});a.reverse(),console.log(a),r(a),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),e.t0 instanceof Error&&m(e.t0.message);case 22:f(!1);case 23:case"end":return e.stop()}}),e,null,[[2,19]])}))),[]));function k(){return(k=Object(v.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-2887f-default-rtdb.firebaseio.com/notes.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"appication/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),alert("Message is successfully added..!"),y();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){y()}),[y]);var j=l.a.createElement("p",{style:{color:"white"}},"Found no Notes.");return a.length>0&&(j=l.a.createElement(de,{note:a})),s&&(j=l.a.createElement("p",{style:{color:"white"}},s)),g&&(j=l.a.createElement("p",{style:{color:"white"}},"Loading...")),l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement("h3",{style:{color:"white"}},"Welcome..! ",e," "),l.a.createElement("button",{onClick:y},"Update Notes"),l.a.createElement("button",{onClick:function(){w(!0)},style:{marginLeft:"20px"}},"Write Log")),x&&l.a.createElement("section",null,l.a.createElement("h3",{style:{color:"white"}},"Log Format"),l.a.createElement(ie,{AddNote:function(e){return k.apply(this,arguments)},logger:e,setIsbuttonPressed:w})),l.a.createElement("section",null,l.a.createElement("h3",{style:{color:"white"}},"Log"),j))},ge=function(){return l.a.createElement(pe,null)};var fe=function(e){var t=Object(o.useRef)(null),n=Object(o.useRef)(null),a=new Date,r=I((function(e){return e.user}));return l.a.createElement("form",{onSubmit:function(o){var l,i,c=null===(l=t.current)||void 0===l?void 0:l.value,u=null===(i=n.current)||void 0===i?void 0:i.value;if(c&&u){var s,m;o.preventDefault();var d={title:null===(s=t.current)||void 0===s?void 0:s.value,text:null===(m=n.current)||void 0===m?void 0:m.value,date:a.toLocaleString(),logger:r};console.log(d),e.AddNote(d),e.setIsbuttonPressed(!1),t.current.value="",n.current.value=""}else alert("\uc81c\ubaa9\uacfc \ub0b4\uc6a9\uc744 \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694.");console.log({temp:c,temp2:u})}},l.a.createElement("div",{className:"control"},l.a.createElement("label",{htmlFor:"title"},"\uc81c\ubaa9"),l.a.createElement("input",{type:"text",id:"title",ref:t,style:{color:"white"},placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc2dc\uc624."})),l.a.createElement("div",{className:"control"},l.a.createElement("label",{htmlFor:"text-log"},"\ub0b4\uc6a9"),l.a.createElement("textarea",{rows:5,id:"text-log",ref:n,style:{color:"white"},placeholder:"\ub0a8\uae30\uace0 \uc2f6\uc740 \ub9d0\uc744 \uc801\uc73c\uc2dc\uc624.."})),l.a.createElement("button",null,"\uc81c\ucd9c"))},he=function(e){return l.a.createElement("div",null,l.a.createElement("li",{className:"note "},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.text),l.a.createElement("h6",null,e.date)))},ve=function(e){return l.a.createElement("div",{style:{overflowY:"scroll",height:300}},l.a.createElement("ul",{className:"note-list"},e.note.map((function(e){return l.a.createElement(he,{key:e.id,title:e.title,date:e.date,text:e.text})}))))},be=function(){var e=I((function(e){return e.user})),t=(S(),Object(o.useState)([])),n=Object(C.a)(t,2),a=n[0],r=n[1],i=Object(o.useState)(""),c=Object(C.a)(i,2),s=c[0],m=c[1],d=Object(o.useState)(!1),p=Object(C.a)(d,2),g=p[0],f=p[1],b=Object(o.useState)(!1),E=Object(C.a)(b,2),x=E[0],w=E[1],y=(Object(u.g)(),Object(o.useCallback)(Object(v.a)(h.a.mark((function e(){var t,n,a,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),m(""),e.prev=2,e.next=5,fetch("https://react-http-2887f-default-rtdb.firebaseio.com/notes2.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:for(o in n=e.sent,a=[],n)a.push({id:o,title:n[o].title,text:n[o].text,date:"".concat(n[o].logger,"\ub2d8\uc774 ").concat(n[o].date,"\uc5d0 \ub0a8\uae30\uc168\uc2b5\ub2c8\ub2e4..")});a.reverse(),console.log(a),r(a),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),e.t0 instanceof Error&&m(e.t0.message);case 21:f(!1);case 22:case"end":return e.stop()}}),e,null,[[2,18]])}))),[]));function k(){return(k=Object(v.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-2887f-default-rtdb.firebaseio.com/notes2.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"appication/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),alert("\uba54\uc138\uc9c0\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),y();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){y()}),[y]);var j=l.a.createElement("p",{style:{color:"white"}},"Found no Notes.");return a.length>0&&(j=l.a.createElement(ve,{note:a})),s&&(j=l.a.createElement("p",{style:{color:"white"}},s)),g&&(j=l.a.createElement("p",{style:{color:"white"}},"Loading...")),l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement("h3",{style:{color:"white"}},"\ubc18\uac11\uc2b5\ub2c8\ub2e4.. ",e,"\ub2d8.... "),l.a.createElement("button",{onClick:y},"\uba54\uc138\uc9c0 \uc5c5\ub370\uc774\ud2b8"),l.a.createElement("button",{onClick:function(){w(!0)},style:{marginLeft:"20px"}},"\uba54\uc138\uc9c0 \uc801\uae30")),x&&l.a.createElement("section",null,l.a.createElement("h3",{style:{color:"white"}},"\uba54\uc138\uc9c0 \uc591\uc2dd"),l.a.createElement(fe,{AddNote:function(e){return k.apply(this,arguments)},logger:e,setIsbuttonPressed:w})),l.a.createElement("section",null,l.a.createElement("h3",{style:{color:"white"}},"\uba54\uc138\uc9c0 \ub85c\uadf8"),j))},Ee=function(){return l.a.createElement(be,null)},xe=function(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(u.g)(),a=Object(d.a)("main").t;return l.a.createElement("section",null,l.a.createElement(g.a,{variant:"h6",color:"white"},a("SignInForm.header"),l.a.createElement("br",null),a("SignInForm.header2")),l.a.createElement(s.a,{sx:{backgroundColor:"white",marginTop:"10px"}}),l.a.createElement(p.a,{container:!0,spacing:4,style:{marginTop:"10px"}},l.a.createElement(p.a,{item:!0,xs:12,sm:3}),l.a.createElement(p.a,{item:!0,xs:12,sm:6},l.a.createElement(m.a,{required:!0,color:"primary",sx:{input:{borderRadius:"5px",border:"1px solid white",color:"white"}},InputLabelProps:{style:{color:"#fff"}},margin:"dense",name:"Email",label:"Email",type:"text",fullWidth:!0,inputRef:e}),l.a.createElement(m.a,{margin:"dense",required:!0,name:"pw",sx:{input:{borderRadius:"5px",border:"1px solid white",color:"white"}},InputLabelProps:{style:{color:"#fff"}},label:"Password",type:"password",fullWidth:!0,inputRef:t}),l.a.createElement("button",{style:{marginTop:"30px"},onClick:function(){var r,o;E(null===(r=e.current)||void 0===r?void 0:r.value,null===(o=t.current)||void 0===o?void 0:o.value).then((function(e){(null===e||void 0===e?void 0:e.idToken)&&(alert(a("SignInForm.formHandler.alert")),n("/login"))}))}},a("SignInForm.button-submit")))))};var we=function(){return l.a.createElement(xe,null)},ye=function(){var e=Object(o.useRef)(null),t=Object(u.g)(),n=I((function(e){return e.idToken})),a=(I((function(e){return e.lan})),Object(d.a)("main").t),r=S(),i=function(){var o=Object(v.a)(h.a.mark((function o(){var l,i,c,u,s;return h.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log(null===(l=e.current)||void 0===l?void 0:l.value),o.prev=1,o.next=4,fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCkLePHqkPxNxPalsSLE_C4CbAaOiaGwNw",{method:"POST",body:JSON.stringify({idToken:n,password:null===(i=e.current)||void 0===i?void 0:i.value,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}});case 4:if((c=o.sent).ok){o.next=9;break}throw console.log(c),u=a("ChangePasswordForm.formHandler-alert"),new Error(u);case 9:return o.next=11,c.json();case 11:s=o.sent,console.log(s),alert(a("ChangePasswordForm.formHandler-alert2")),r(k.updateIdToken("")),r(k.updateIsLoggedIn(!1)),r(k.updateUser("")),localStorage.removeItem("token"),localStorage.removeItem("isLoggedIn"),localStorage.removeItem("user"),t("/login"),o.next=20;break;case 17:o.prev=17,o.t0=o.catch(1),alert(o.t0);case 20:case"end":return o.stop()}}),o,null,[[1,17]])})));return function(){return o.apply(this,arguments)}}();return console.log(n),l.a.createElement("section",null,l.a.createElement(g.a,{variant:"h6",color:"white"},a("ChangePasswordForm.formHandler-header")),l.a.createElement(s.a,{sx:{backgroundColor:"white",marginTop:"10px"}}),l.a.createElement(p.a,{container:!0,spacing:4,style:{marginTop:"10px"}},l.a.createElement(p.a,{item:!0,xs:12,sm:3}),l.a.createElement(p.a,{item:!0,xs:12,sm:6},l.a.createElement(m.a,{margin:"dense",required:!0,name:"pw",sx:{input:{borderRadius:"5px",border:"1px solid white",color:"white"}},label:a("Loginform.input-pd"),type:"password",fullWidth:!0,inputRef:e,InputLabelProps:{style:{color:"#fff"}}}),l.a.createElement("button",{style:{marginTop:"30px"},onClick:i},a("SignInForm.button-submit")))))},ke=function(){return l.a.createElement(ye,null)},je=n(235),Oe=n(21),Ie=function(){var e=Object(u.g)(),t=I((function(e){return e.user})),n=Object(Oe.a)(),a=Object(je.a)(n.breakpoints.down("sm"));return l.a.createElement("section",null,l.a.createElement(g.a,{variant:"h6",color:"white"},"Welcome Back.. ",t,".."),l.a.createElement(s.a,{sx:{backgroundColor:"white",marginTop:"10px"}}),l.a.createElement(p.a,{container:!0,spacing:4,style:{marginTop:"10px"}},l.a.createElement(p.a,{item:!0,xs:12,sm:12},a?l.a.createElement(H.a,{sx:{width:"300px",height:"400px"},component:"img",src:"image/sarah.jpeg"}):l.a.createElement(H.a,{sx:{width:"400px",height:"600px"},component:"img",src:"image/sarah.jpeg"})),l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement("button",{style:{marginTop:"30px"},onClick:function(){e("/msglogen")}},"Log Message"))))},Se=function(){return l.a.createElement(Ie,null)},Le=function(){var e=Object(u.g)(),t=I((function(e){return e.user})),n=Object(Oe.a)(),a=Object(je.a)(n.breakpoints.down("sm"));return l.a.createElement("section",null,l.a.createElement(g.a,{variant:"h6",color:"white"},"\ud658\uc601\ud569\ub2c8\ub2e4.. ",t," \ub2d8.."),l.a.createElement(s.a,{sx:{backgroundColor:"white",marginTop:"10px"}}),l.a.createElement(p.a,{container:!0,style:{marginTop:"10px"}}),a?l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement(H.a,{sx:{width:"300px",height:"300px",marginLeft:"-10px"},component:"img",src:"image/family.jpeg"}),l.a.createElement("button",{style:{marginTop:"30px"},onClick:function(){e("/msglogkr")}},"\uba54\uc138\uc9c0 \ub0a8\uae30\ub7ec \uac00\uae30")):l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement(H.a,{sx:{width:"600px",height:"400px",marginLeft:"-10px"},component:"img",src:"image/family.jpeg"}),l.a.createElement("button",{style:{marginTop:"30px"},onClick:function(){e("/msglogkr")}},"\uba54\uc138\uc9c0 \ub0a8\uae30\ub7ec \uac00\uae30")))},Te=function(){return l.a.createElement(Le,null)},Ce=function(){var e=Object(o.useRef)(null),t=(Object(u.g)(),I((function(e){return e.idToken}))),n=I((function(e){return e.lan})),a=function(){var a=Object(v.a)(h.a.mark((function a(){var r,o,l,i;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(null===(r=e.current)||void 0===r?void 0:r.value),a.prev=1,a.next=4,fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCkLePHqkPxNxPalsSLE_C4CbAaOiaGwNw",{method:"POST",body:JSON.stringify({idToken:t,displayName:null===(o=e.current)||void 0===o?void 0:o.value,photoUrl:null,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}});case 4:if((l=a.sent).ok){a.next=9;break}throw console.log(l),new Error("\ud55c\uad6d\uc5b4"===n?"\uc0ac\uc6a9\uc790 \uc774\ub984 \ubcc0\uacbd\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.":"Failed to change user name.");case 9:return a.next=11,l.json();case 11:i=a.sent,console.log(i),alert("\uc131\uacf5\ud558\uc600\uc2b5\ub2c8\ub2e4."),a.next=19;break;case 16:a.prev=16,a.t0=a.catch(1),alert(a.t0);case 19:case"end":return a.stop()}}),a,null,[[1,16]])})));return function(){return a.apply(this,arguments)}}();return console.log(t),l.a.createElement("section",null,l.a.createElement(g.a,{variant:"h6",color:"white"},"\ubcc0\uacbd\ud560 \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.","\ud55c\uad6d\uc5b4"===n?"\ubcc0\uacbd\ud560 \uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.":"Input the username that you want to change."),l.a.createElement(s.a,{sx:{backgroundColor:"white",marginTop:"10px"}}),l.a.createElement(p.a,{container:!0,spacing:4,style:{marginTop:"10px"}},l.a.createElement(p.a,{item:!0,xs:12,sm:3}),l.a.createElement(p.a,{item:!0,xs:12,sm:6},l.a.createElement(m.a,{margin:"dense",required:!0,name:"Username",sx:{input:{borderRadius:"5px",border:"1px solid white",color:"white"}},InputLabelProps:{style:{color:"#fff"}},label:"Username",type:"Username",fullWidth:!0,inputRef:e}),l.a.createElement("button",{style:{marginTop:"30px"},onClick:a},"Submit"))))},Pe=function(){return l.a.createElement(Ce,null)},Ne=function(){var e=Object(d.a)("main").t;return l.a.createElement("section",null,l.a.createElement(g.a,{variant:"h6",color:"white"},"Internet Logger v3"),l.a.createElement(s.a,{sx:{backgroundColor:"white",marginTop:"10px"}}),l.a.createElement(p.a,{container:!0,style:{marginTop:"10px"}}),l.a.createElement(p.a,{item:!0,xs:12,sm:12},l.a.createElement(g.a,{variant:"h6",color:"white"},e("InitialPage.header"))))},Fe=function(){return l.a.createElement(Ne,null)},He=n(236);var Re=function(){var e,t=I((function(e){return e.isLoggedIn})),n=I((function(e){return e.user})),a=S(),r=localStorage.getItem("token"),i="true"===(null===(e=localStorage.getItem("isLoggedIn"))||void 0===e?void 0:e.toLowerCase()),c=localStorage.getItem("user");Object(o.useEffect)((function(){i&&(a(k.updateIdToken(r)),a(k.updateUser(c)),a(k.updateIsLoggedIn(i)))}),[r,i,c,a]);var s=function(){return!!(t&&"Sarah"===n||t&&"Hans"===n)},m=function(){return!!(t&&"\uc740\uc9c0"===n||t&&"\uc5c4\ub9c8"===n||t&&"\uc544\ube60"===n||t&&"\uc131\uc7ac"===n)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(He.a,null),l.a.createElement(oe,null,l.a.createElement(u.d,null,t?l.a.createElement(u.b,{path:"*",element:l.a.createElement(u.a,{to:"/initialpage"})}):l.a.createElement(u.b,{path:"*",element:l.a.createElement(u.a,{to:"/login"})}),!t&&l.a.createElement(u.b,{path:"/login",element:l.a.createElement(T,null)}),t&&l.a.createElement(u.b,{path:"/initialpage",element:l.a.createElement(Fe,null)}),!t&&l.a.createElement(u.b,{path:"/signin",element:l.a.createElement(we,null)}),s()&&l.a.createElement(u.b,{path:"/msglogen",element:l.a.createElement(ge,null)}),m()&&l.a.createElement(u.b,{path:"/msglogkr",element:l.a.createElement(Ee,null)}),s()&&l.a.createElement(u.b,{path:"/hompageen",element:l.a.createElement(Se,null)}),m()&&l.a.createElement(u.b,{path:"/hompagekr",element:l.a.createElement(Te,null)}),t&&l.a.createElement(u.b,{path:"/updateusername",element:l.a.createElement(Pe,null)}),t&&l.a.createElement(u.b,{path:"/changepassword",element:l.a.createElement(ke,null)}))))},Ae=n(29),Ue=n(91),We=n(94),qe=n(63),Je=n(105),Be=n(106),De={en:Object(Ue.a)({},a),kr:Object(Ue.a)({},r)};We.a.use(qe.e).init({resources:De,lng:"kr",fallbackLng:{en:["en"],default:["kr"]},debug:!0,keySeparator:!1,interpolation:{escapeValue:!1},react:{useSuspense:!1}});We.a;c.a.render(l.a.createElement(Ae.a,null,l.a.createElement(O.a,{store:j},l.a.createElement(Re,null))),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.b580cec4.chunk.js.map