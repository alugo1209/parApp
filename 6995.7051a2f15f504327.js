"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6995],{6995:(Z,u,a)=>{a.r(u),a.d(u,{ProfilePageModule:()=>h});var d=a(6814),g=a(95),r=a(6728),l=a(3044);class f{constructor(){this.name="",this.slug="",this.email="",this.css="",this.logo=""}}class m{constructor(){this.name="",this.email=""}}var e=a(6242),P=a(9045);const p=[{path:"",component:(()=>{var t;class n{constructor(i,o,c){this.router=i,this.dataService=o,this.menuCtrl=c,this.user=new m,this.company=new f}ngAfterViewInit(){this.getData()}getData(){this.dataService.getStorage("tokenFull").then(i=>{if(i){const o=i;this.user=o.user,this.company=o.company}})}regresar(){this.router.navigate(["/main"])}}return(t=n).\u0275fac=function(i){return new(i||t)(e.Y36(l.F0),e.Y36(P.s),e.Y36(r._q))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],decls:31,vars:3,consts:[[1,"contenidoDiv"],[1,"tituloPage"],["id","inbox-list1"],[1,"titleLabel2"],["id","div1"],["id","div2"],[1,"contentDiv-button-list"],["expand","block","start","",1,"button-silver",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-content",0)(1,"ion-card")(2,"ion-card-header")(3,"p",1),e._uU(4,"Perfil"),e.qZA()()(),e.TgZ(5,"ion-list",2)(6,"ion-card",3)(7,"div",4)(8,"label"),e._uU(9,"Nombre:"),e.qZA()(),e.TgZ(10,"div",5)(11,"b"),e._uU(12),e.qZA()()(),e.TgZ(13,"ion-card",3)(14,"div",4)(15,"label"),e._uU(16,"Email:"),e.qZA()(),e.TgZ(17,"div",5)(18,"b"),e._uU(19),e.qZA()()(),e.TgZ(20,"ion-card",3)(21,"div",4)(22,"label"),e._uU(23,"Compa\xf1\xeda:"),e.qZA()(),e.TgZ(24,"div",5)(25,"b"),e._uU(26),e.qZA()()()(),e.TgZ(27,"ion-card",6)(28,"div")(29,"ion-button",7),e.NdJ("click",function(){return o.regresar()}),e._uU(30,"REGRESAR"),e.qZA()()()()),2&i&&(e.xp6(12),e.Oqu(o.user.name),e.xp6(7),e.Oqu(o.user.email),e.xp6(7),e.Oqu(o.company.name))},dependencies:[r.YG,r.PM,r.Zi,r.W2,r.q_]}),n})()}];let v=(()=>{var t;class n{}return(t=n).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(p),l.Bz]}),n})(),h=(()=>{var t;class n{}return(t=n).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,g.u5,r.Pc,v]}),n})()}}]);