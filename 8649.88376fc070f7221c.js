"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8649],{8649:(C,l,r)=>{r.r(l),r.d(l,{MainPageModule:()=>v});var g=r(6814),u=r(95),i=r(6728),s=r(3044),n=r(6242),d=r(9045),m=r(7132);const p=t=>[t];function f(t,o){if(1&t&&(n.TgZ(0,"ion-card",4)(1,"ion-card-content")(2,"ion-item",5)(3,"ion-label"),n._uU(4),n.qZA(),n._UZ(5,"ion-img",6),n.qZA()()()),2&t){const a=o.$implicit;n.xp6(2),n.Q6J("routerLink",n.VKq(3,p,a.url)),n.xp6(2),n.Oqu(a.title),n.xp6(1),n.Q6J("src","assets/img/"+a.imagen+".png")}}const M=[{path:"",component:(()=>{var t;class o{constructor(e,c,P){this.dataService=e,this.logoService=c,this.menuCtrl=P,this.appPages=[{title:"Rutero Relacional",url:"/clients",icon:"pie-chart",imagen:"rutero"},{title:"Educaci\xf3n",url:"/education",icon:"book",imagen:"educacion"},{title:"Experiencias",url:"/experience",icon:"film",imagen:"experiencias"},{title:"Notificaci\xf3n",url:"/notificacion",icon:"notifications",imagen:"notification"}]}ngOnInit(){this.getData(),this.metodoSalir()}ngAfterContentInit(){this.metodoSalir()}ngAfterViewInit(){this.metodoSalir()}ngOnDestroy(){this.metodoSalir()}metodoSalir(){this.menuCtrl.enable(!0)}getData(){this.dataService.getStorage("user").then(e=>{e&&(this.name=e.name)}),this.dataService.getStorage("logo").then(e=>{e&&(this.logoService.setLogo(e),this.logoService.setClassMenu("contenidoHeader"),this.logoService.resetCss())})}}return(t=o).\u0275fac=function(e){return new(e||t)(n.Y36(d.s),n.Y36(m.m),n.Y36(i._q))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-main"]],decls:7,vars:2,consts:[[1,"contenidoDiv"],[1,"tituloPageMain"],["id","inbox-list1"],["class","contentCard",4,"ngFor","ngForOf"],[1,"contentCard"],["routerDirection","root","lines","none","detail","false","routerLinkActive","selected",1,"contentCard",3,"routerLink"],["slot","end",1,"imgLogo1",3,"src"]],template:function(e,c){1&e&&(n.TgZ(0,"ion-content",0)(1,"ion-card",1),n._uU(2," Bienvenido,"),n._UZ(3,"br"),n._uU(4),n.qZA(),n.TgZ(5,"ion-list",2),n.YNc(6,f,6,5,"ion-card",3),n.qZA()()),2&e&&(n.xp6(4),n.hij("",c.name," "),n.xp6(2),n.Q6J("ngForOf",c.appPages))},dependencies:[g.sg,i.PM,i.FN,i.W2,i.Xz,i.Ie,i.Q$,i.q_,i.YI,s.rH,s.Od],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: %5}.iconList[_ngcontent-%COMP%]{font-size:50px;padding:5%;color:#010927!important}ion-item[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%], .iconList[_ngcontent-%COMP%]{--color-hover: #010927 !important}.user[_ngcontent-%COMP%]{text-align:end;font-size:18px;padding:3%;margin:8px;color:var(--ion-color-primary)}"]}),o})()}];let h=(()=>{var t;class o{}return(t=o).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(M),s.Bz]}),o})(),v=(()=>{var t;class o{}return(t=o).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.ez,u.u5,i.Pc,h]}),o})()}}]);