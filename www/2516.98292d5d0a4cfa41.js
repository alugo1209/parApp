"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2516],{2516:(w,h,r)=>{r.r(h),r.d(h,{LoginPageModule:()=>C});var p=r(6814),d=r(95),i=r(6728),u=r(3044),e=r(6242),m=r(9045);const f=["passwordEyeRegister"],b=[{path:"",component:(()=>{var n;class l{constructor(t,o,a,s){this.router=t,this.toastCtrl=o,this.dataService=a,this.menuCtrl=s,this.btnIngresar="INGRESAR",this.politicas=!1,this.btnDisable=!1,this.chPolitica=" Acepto la",this.chDatos="pol\xedtica de tratamiento de datos",this.lblInformacion="Si olvidaste tu contrase\xf1a o tienes alguna duda, puedes contactarnos a nuetro correo: ",this.lblCorreo="contacto@contentgrp.com",this.lblresto=" y atenderemos tus inquetudes",this.iconpassword="eye-off",this.passwordTypeInput="password",this.email="",this.password=""}getData(){this.dataService.setStorage("ingreso",!1),this.dataService.ingreso=!1,this.dataService.getLogin(this.email,this.password).subscribe(t=>{this.getDataResult(t)})}getDataResult(t){if(t.error)this.dataService.showToast(this.toastCtrl,t.statusText);else{const c=t;var o,a;if("Success"===c.message)this.dataService.ingreso=!0,this.dataService.setStorage("ingreso",!0),this.dataService.setStorage("token",c.token),this.dataService.setStorage("user",c.user),this.dataService.setStorage("tokenFull",c),"user@proyectopar.com"===(null===(o=c.user)||void 0===o?void 0:o.email)?this.dataService.setStorage("userId","8c090cc0-91ea-4e99-8286-ca27bba421b0"):this.dataService.setStorage("userId",null===(a=c.silver)||void 0===a?void 0:a.id),this.menuCtrl.enable(!0),this.router.navigate(["/main"]);this.dataService.showToast(this.toastCtrl,c.message)}}home(){this.getData()}togglePasswordMode(){this.passwordTypeInput="text"===this.passwordTypeInput?"password":"text",this.iconpassword="eye-off"===this.iconpassword?"eye":"eye-off",this.passwordEye.el.setFocus()}validarDatos(t){this.btnDisable=!1,void 0===this.email||""===this.email?(this.politicas=!1,this.dataService.showToast(this.toastCtrl,"El correo se encuentra vacio")):void 0===this.password||""===this.password?(this.politicas=!1,this.dataService.showToast(this.toastCtrl,"La contrase\xf1a se encuentra vacio")):(console.log(this.politicas),console.log(this.email),console.log(this.password),this.politicas?this.btnDisable=!0:(this.politicas=!1,this.btnDisable=!1)),t.target.checked=this.politicas}ngOnInit(){this.menuCtrl.enable(!1)}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(u.F0),e.Y36(i.yF),e.Y36(m.s),e.Y36(i._q))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],viewQuery:function(t,o){if(1&t&&e.Gf(f,5),2&t){let a;e.iGM(a=e.CRH())&&(o.passwordEye=a.first)}},decls:33,vars:12,consts:[[1,"main"],[2,"min-height","20%"],[1,"contenPrin"],[1,"ion-align-items-center"],["size","12"],["type","email","placeholder","Correo Electr\xf3nico","required","",3,"ngModel","ngModelChange"],["placeholder","Contrase\xf1a","required","",3,"type","ngModel","ngModelChange"],["passwordEyeRegister",""],["size","1"],[3,"checked","ngModel","ngModelChange","ionChange"],["size","11"],[1,"politica"],[1,"datos"],["color","warning","expand","block",3,"disabled","click"],[1,"contentLogo"],["src","assets/img/logo-content.png",1,"imgLogoContent"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"ion-grid")(4,"ion-row",3)(5,"ion-col",4)(6,"ion-input",5),e.NdJ("ngModelChange",function(s){return o.email=s}),e.qZA()()(),e.TgZ(7,"ion-row",3)(8,"ion-col",4)(9,"ion-input",6,7),e.NdJ("ngModelChange",function(s){return o.password=s}),e.qZA()()(),e.TgZ(11,"ion-row",3)(12,"ion-col",8)(13,"ion-checkbox",9),e.NdJ("ngModelChange",function(s){return o.politicas=s})("ionChange",function(s){return o.validarDatos(s)}),e.qZA()(),e.TgZ(14,"ion-col",10)(15,"ion-label",11),e._uU(16),e.qZA(),e.TgZ(17,"ion-label",12),e._uU(18),e.qZA()()(),e.TgZ(19,"ion-row",3)(20,"ion-col",4)(21,"ion-button",13),e.NdJ("click",function(){return o.home()}),e._uU(22),e.qZA()()(),e.TgZ(23,"ion-row",3)(24,"ion-col",4)(25,"ion-label",11),e._uU(26),e.qZA(),e.TgZ(27,"ion-label",12),e._uU(28),e.qZA(),e.TgZ(29,"ion-label",11),e._uU(30),e.qZA()()()()(),e.TgZ(31,"div",14),e._UZ(32,"ion-img",15),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngModel",o.email),e.xp6(3),e.Q6J("type",o.passwordTypeInput)("ngModel",o.password),e.xp6(4),e.s9C("checked",o.politicas),e.Q6J("ngModel",o.politicas),e.xp6(3),e.Oqu(o.chPolitica),e.xp6(2),e.hij(" ",o.chDatos,""),e.xp6(3),e.Q6J("disabled",!o.btnDisable),e.xp6(1),e.Oqu(o.btnIngresar),e.xp6(4),e.Oqu(o.lblInformacion),e.xp6(2),e.Oqu(o.lblCorreo),e.xp6(2),e.Oqu(o.lblresto))},dependencies:[d.JJ,d.Q7,d.On,i.YG,i.nz,i.wI,i.W2,i.jY,i.Xz,i.pK,i.Q$,i.Nd,i.w,i.j9],styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box;font-family:Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif}.main[_ngcontent-%COMP%]{width:100%;height:100vh;margin:25px auto}.imgLogo[_ngcontent-%COMP%]{width:10vw;padding:20%}.contentLogo[_ngcontent-%COMP%]{width:100%;margin:0;background:rgba(49,48,107,.5764705882);position:absolute;bottom:0;padding:10px}.imgLogoContent[_ngcontent-%COMP%]{display:block;width:20%;margin-left:auto;margin-right:auto}ion-col[_ngcontent-%COMP%]{padding:4%}ion-input[_ngcontent-%COMP%]{border-bottom:2px solid #31306b;padding:2%}.btn_eye_icon[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:15px;background:transparent}.btn_eye_icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:26px;color:#999}.btn_eye_icon[_ngcontent-%COMP%]:focus{outline:none!important}.politica[_ngcontent-%COMP%]{font-size:12px;text-align:center}.datos[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:12px;text-align:center}"]}),l})()}];let v=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(b),u.Bz]}),l})(),C=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,d.u5,i.Pc,v]}),l})()}}]);