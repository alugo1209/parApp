"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4446],{4446:(b,c,o)=>{o.r(c),o.d(c,{InitPageModule:()=>I});var g=o(6814),d=o(95),s=o(6728),l=o(3044),n=o(6242),m=o(9045),h=o(7132);const v=t=>({"--background":t}),f=[{path:"",component:(()=>{var t;class i{constructor(e,r,u,P){this.router=e,this.menuCtrl=r,this.dataService=u,this.logoService=P,this.btnEnter="INGRESAR",this.bgImage="assets/img/loading.png"}login(){this.menuCtrl.enable(!0),this.router.navigate(["/login"])}ngOnInit(){this.menuCtrl.enable(!1),this.dataService.getStorage("token").then(e=>{null!==e&&""!==e&&(this.menuCtrl.enable(!0),this.router.navigate(["/main"]))})}ngAfterContentInit(){this.menuCtrl.enable(!1)}ngAfterViewInit(){this.menuCtrl.enable(!1)}ngOnDestroy(){this.menuCtrl.enable(!0)}}return(t=i).\u0275fac=function(e){return new(e||t)(n.Y36(l.F0),n.Y36(s._q),n.Y36(m.s),n.Y36(h.m))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-init"]],decls:4,vars:4,consts:[[1,"contenido",3,"ngStyle"],[1,"content-button"],["expand","block","start","",1,"button-silver",3,"click"]],template:function(e,r){1&e&&(n.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-button",2),n.NdJ("click",function(){return r.login()}),n._uU(3),n.qZA()()()),2&e&&(n.Q6J("ngStyle",n.VKq(2,v,"url("+r.logoService.getBgImage()+") 0 0/100% 90% no-repeat")),n.xp6(3),n.Oqu(r.btnEnter))},dependencies:[g.PC,s.YG,s.W2],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.contenido[_ngcontent-%COMP%]{background-position:bottom center;object-fit:cover;width:100%;top:10%;height:100vh}"]}),i})()}];let p=(()=>{var t;class i{}return(t=i).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.Bz.forChild(f),l.Bz]}),i})(),I=(()=>{var t;class i{}return(t=i).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.ez,d.u5,s.Pc,p]}),i})()}}]);