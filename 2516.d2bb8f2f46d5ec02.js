"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2516],{2516:(T,m,r)=>{r.r(m),r.d(m,{LoginPageModule:()=>y});var b=r(6814),u=r(95),n=r(6728),h=r(3044),e=r(6242),C=r(9045),M=r(7132);const P=["passwordEyeRegister"],S=[{path:"",component:(()=>{var i;class g{constructor(t,o,s,a,d){this.router=t,this.toastCtrl=o,this.dataService=s,this.menuCtrl=a,this.logoService=d,this.btnIngresar="INGRESAR",this.politicas=!1,this.btnDisable=!1,this.chPolitica=" Acepto la",this.chDatos="pol\xedtica de tratamiento de datos",this.lblInformacion="Si olvidaste tu contrase\xf1a o tienes alguna duda, puedes contactarnos a nuetro correo: ",this.lblCorreo="contacto@contentgrp.com",this.lblresto=" y atenderemos tus inquetudes",this.iconpassword="eye-off",this.passwordTypeInput="password",this.email="",this.password=""}getData(){this.dataService.setStorage("ingreso",!1),this.dataService.ingreso=!1,this.dataService.getLogin(this.email,this.password).subscribe(t=>{this.getDataResult(t)})}getDataResult(t){if(t.error)this.dataService.showToast(this.toastCtrl,t.statusText);else{const l=t;var o,s,a,d,p,f,v;"Success"===l.message&&(this.dataService.ingreso=!0,this.dataService.setStorage("ingreso",!0),this.dataService.setStorage("token",l.token),this.dataService.setStorage("user",l.user),this.dataService.setStorage("tokenFull",l),this.dataService.setStorage("companyId",null===(o=l.company)||void 0===o?void 0:o.id),this.dataService.setStorage("logo",null===(s=l.company)||void 0===s?void 0:s.logo),this.dataService.setStorage("css",null===(a=l.company)||void 0===a?void 0:a.css),this.dataService.setStorage("id",null===(d=l.user)||void 0===d?void 0:d.id),this.logoService.setLogo(null===(p=l.company)||void 0===p?void 0:p.logo),this.dataService.setStorage("userId",null===(f=l.silver)||void 0===f?void 0:f.id),console.log(null===(v=l.silver)||void 0===v?void 0:v.id),this.menuCtrl.enable(!0),this.router.navigate(["/main"])),this.dataService.showToast(this.toastCtrl,l.message)}}home(){this.getData()}togglePasswordMode(){this.passwordTypeInput="text"===this.passwordTypeInput?"password":"text",this.iconpassword="eye-off"===this.iconpassword?"eye":"eye-off",this.passwordEye.el.setFocus()}validarDatos(t){this.btnDisable=!1,void 0===this.email||""===this.email?(this.politicas=!1,this.dataService.showToast(this.toastCtrl,"El correo se encuentra vacio")):void 0===this.password||""===this.password?(this.politicas=!1,this.dataService.showToast(this.toastCtrl,"La contrase\xf1a se encuentra vacio")):(console.log(this.politicas),console.log(this.email),console.log(this.password),this.politicas?this.btnDisable=!0:(this.politicas=!1,this.btnDisable=!1)),t.target.checked=this.politicas}ngOnInit(){this.menuCtrl.enable(!1)}}return(i=g).\u0275fac=function(t){return new(t||i)(e.Y36(h.F0),e.Y36(n.yF),e.Y36(C.s),e.Y36(n._q),e.Y36(M.m))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-login"]],viewQuery:function(t,o){if(1&t&&e.Gf(P,5),2&t){let s;e.iGM(s=e.CRH())&&(o.passwordEye=s.first)}},decls:30,vars:12,consts:[[1,"mainLogin"],[1,"contenPrin"],[1,"ion-align-items-center"],["size","12"],["type","email","placeholder","Correo Electr\xf3nico","required","",3,"ngModel","ngModelChange"],["placeholder","Contrase\xf1a","required","",3,"type","ngModel","ngModelChange"],["passwordEyeRegister",""],["size","1"],[3,"checked","ngModel","ngModelChange","ionChange"],["size","11"],[1,"politica"],[1,"datos"],["expand","block",1,"button-silver",3,"disabled","click"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-grid")(3,"ion-row",2)(4,"ion-col",3)(5,"ion-input",4),e.NdJ("ngModelChange",function(a){return o.email=a}),e.qZA()()(),e.TgZ(6,"ion-row",2)(7,"ion-col",3)(8,"ion-input",5,6),e.NdJ("ngModelChange",function(a){return o.password=a}),e.qZA()()(),e.TgZ(10,"ion-row",2)(11,"ion-col",7)(12,"ion-checkbox",8),e.NdJ("ngModelChange",function(a){return o.politicas=a})("ionChange",function(a){return o.validarDatos(a)}),e.qZA()(),e.TgZ(13,"ion-col",9)(14,"ion-label",10),e._uU(15),e.qZA(),e.TgZ(16,"ion-label",11),e._uU(17),e.qZA()()(),e.TgZ(18,"ion-row",2)(19,"ion-col",3)(20,"ion-button",12),e.NdJ("click",function(){return o.home()}),e._uU(21),e.qZA()()(),e.TgZ(22,"ion-row",2)(23,"ion-col",3)(24,"ion-label",10),e._uU(25),e.qZA(),e.TgZ(26,"ion-label",11),e._uU(27),e.qZA(),e.TgZ(28,"ion-label",10),e._uU(29),e.qZA()()()()()()),2&t&&(e.xp6(5),e.Q6J("ngModel",o.email),e.xp6(3),e.Q6J("type",o.passwordTypeInput)("ngModel",o.password),e.xp6(4),e.s9C("checked",o.politicas),e.Q6J("ngModel",o.politicas),e.xp6(3),e.Oqu(o.chPolitica),e.xp6(2),e.hij(" ",o.chDatos,""),e.xp6(3),e.Q6J("disabled",!o.btnDisable),e.xp6(1),e.Oqu(o.btnIngresar),e.xp6(4),e.Oqu(o.lblInformacion),e.xp6(2),e.Oqu(o.lblCorreo),e.xp6(2),e.Oqu(o.lblresto))},dependencies:[u.JJ,u.Q7,u.On,n.YG,n.nz,n.wI,n.W2,n.jY,n.pK,n.Q$,n.Nd,n.w,n.j9],styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box;font-family:Roboto-Regular,sans-serif}.mainLogin[_ngcontent-%COMP%]{width:100%;height:100vh;--background: url(login.3755df16ad22a4bf.png) 0 0/100% 100% no-repeat}.mainLogin[_ngcontent-%COMP%]   .contenPrin[_ngcontent-%COMP%]{position:absolute;bottom:0!important;color:silver;font-weight:700;font-size:16px!important}ion-col[_ngcontent-%COMP%]{padding:4%}ion-input[_ngcontent-%COMP%]{border-bottom:2px solid #31306b;padding:2%}.btn_eye_icon[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:15px;background:transparent}.btn_eye_icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:26px;color:#999}.btn_eye_icon[_ngcontent-%COMP%]:focus{outline:none!important}.politica[_ngcontent-%COMP%]{font-size:12px;text-align:center}.datos[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:12px;text-align:center}"]}),g})()}];let w=(()=>{var i;class g{}return(i=g).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(S),h.Bz]}),g})(),y=(()=>{var i;class g{}return(i=g).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[b.ez,u.u5,n.Pc,w]}),g})()}}]);