"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9858],{9858:(P,u,n)=>{n.r(u),n.d(u,{DetailsPageModule:()=>I});var g=n(6814),m=n(95),l=n(6728),c=n(3044),t=n(6242),v=n(9045),h=n(1796);function p(a,o){if(1&a&&(t.TgZ(0,"div",10),t._UZ(1,"app-detail-virtual",11),t.qZA()),2&a){const r=o.$implicit;t.xp6(1),t.Q6J("toCoId",r.toCo_Id)}}const f=[{path:"",component:(()=>{var a;class o{constructor(e,i,s,d){this.router=e,this.activatedRoute=i,this.toastCtrl=s,this.dataService=d,this.result=[],this.cat_Name="",this.modu_Name=""}ngOnInit(){this.getDataI()}getDataI(){this.activatedRoute.params.subscribe(e=>{this.catId=parseInt(e.catId),this.modId=parseInt(e.modId),this.getDataU(),this.getDataCategory()})}getDataCategory(){this.dataService.getStorage("category").then(e=>{if(e){let i=e;for(let s=0;s<i.length;s++){const d=i[s];if(d.clasi_Id===this.catId){this.cat_Name=d.clasi_Name;break}}}})}getDataU(){this.dataService.getStorage("userId").then(e=>{e&&(this.userId=e,this.getDataT())})}getDataT(){this.dataService.getStorage("token").then(e=>{e&&(this.token=e,this.getClientsById())})}getClientsById(){this.dataService.getModule(this.token,this.modId,this.userId).subscribe(e=>{this.getDataResult(e)})}getDataResult(e){if(e.error)this.dataService.showToast(this.toastCtrl,e.statusText);else{const i=e.result;this.modulo=i.module,this.modu_Name=this.modulo.modu_Name,this.result=i.topicsCourse;for(let s=0;s<this.result.length;s++){const d=this.result[s];this.dataService.setStorage("toCo"+d.toCo_Id,d)}}}regresar(){this.router.navigate(["/education"])}gotoCategory(e){this.router.navigate(["/education/details-all/"+this.catId+"/"+e])}}return(a=o).\u0275fac=function(e){return new(e||a)(t.Y36(c.F0),t.Y36(c.gz),t.Y36(l.yF),t.Y36(v.s))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-details"]],decls:20,vars:3,consts:[[1,"contenidoDiv"],[1,"tituloPage"],[1,"tituloPage1"],["id","inbox-list1"],[1,"titleLabel"],["id","div1"],["id","div2",3,"click"],["class","spanIframe",4,"ngFor","ngForOf"],[1,"contentDiv-button-list"],["expand","block","start","",1,"button-silver",3,"click"],[1,"spanIframe"],[3,"toCoId"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-content",0)(1,"ion-card")(2,"ion-card-header")(3,"p",1),t._uU(4,"Categoria:"),t.qZA(),t.TgZ(5,"p",2),t._uU(6),t.qZA()()(),t.TgZ(7,"ion-list",3)(8,"ion-card")(9,"ion-card-content")(10,"ion-label",4)(11,"div",5),t._uU(12),t.qZA(),t.TgZ(13,"div",6),t.NdJ("click",function(){return i.gotoCategory(i.modulo.modu_Id)}),t._uU(14,"Ver Todo"),t.qZA()(),t.YNc(15,p,2,1,"div",7),t.qZA()()(),t.TgZ(16,"ion-card",8)(17,"div")(18,"ion-button",9),t.NdJ("click",function(){return i.regresar()}),t._uU(19,"REGRESAR"),t.qZA()()()()),2&e&&(t.xp6(6),t.Oqu(i.cat_Name),t.xp6(6),t.Oqu(i.modu_Name),t.xp6(3),t.Q6J("ngForOf",i.result))},dependencies:[g.sg,l.YG,l.PM,l.FN,l.Zi,l.W2,l.Q$,l.q_,h.r]}),o})()}];let D=(()=>{var a;class o{}return(a=o).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(f),c.Bz]}),o})(),I=(()=>{var a;class o{}return(a=o).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,m.u5,l.Pc,h.r,D]}),o})()}}]);