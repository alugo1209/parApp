"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2164],{2164:(E,d,n)=>{n.r(d),n.d(d,{EdutuberPageModule:()=>P});var c=n(6814),l=n(95),s=n(6728),u=n(3044);class g{constructor(){this.name="",this.description="",this.url="",this.image=""}}var e=n(6242),m=n(9045),h=n(6593);let p=(()=>{var t;class o{constructor(i){this.sanitizer=i,this.videoUrl=""}ngOnChanges(){this.video=this.cleanURL(this.videoUrl)}cleanURL(i){return console.log(i),this.sanitizer.bypassSecurityTrustResourceUrl(i)}}return(t=o).\u0275fac=function(i){return new(i||t)(e.Y36(h.H7))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-iframe-video"]],inputs:{videoUrl:"videoUrl"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:1,consts:[[1,"video-responsive"],["frameborder","0","allowfullscreen","",3,"src"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"iframe",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("src",r.video,e.uOi))},dependencies:[c.ez,l.u5,s.Pc]}),o})();const f=[{path:"",component:(()=>{var t;class o{constructor(i,r,v){this.router=i,this.activatedRoute=r,this.dataService=v,this.edutuber=new g}ngAfterViewInit(){this.getDataI()}getDataI(){this.activatedRoute.params.subscribe(i=>{let r=parseInt(i.id);this.getDataV(r)})}getDataV(i){this.dataService.getStorage("video_"+i).then(r=>{r&&(this.edutuber=r,this.videot=this.edutuber.url,console.log(this.videot))})}regresar(){this.router.navigate(["/experience"])}}return(t=o).\u0275fac=function(i){return new(i||t)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(m.s))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edutuber"]],decls:17,vars:4,consts:[[1,"contenidoDiv"],[1,"tituloPage1"],["id","inbox-list1"],[3,"videoUrl"],[1,"titleLabel2"],["id","div1"],[1,"contentDiv-button-list"],["expand","block","start","",1,"button-silver",3,"click"]],template:function(i,r){1&i&&(e.TgZ(0,"ion-content",0)(1,"ion-card")(2,"ion-card-header")(3,"p",1),e._uU(4),e.qZA()()(),e.TgZ(5,"ion-card",2),e._UZ(6,"app-iframe-video",3),e.TgZ(7,"ion-card")(8,"ion-label",4)(9,"div",5),e._uU(10),e.qZA(),e.TgZ(11,"div",5),e._uU(12),e.qZA()()()(),e.TgZ(13,"ion-card",6)(14,"div")(15,"ion-button",7),e.NdJ("click",function(){return r.regresar()}),e._uU(16,"REGRESAR"),e.qZA()()()()),2&i&&(e.xp6(4),e.Oqu(r.edutuber.name),e.xp6(2),e.Q6J("videoUrl",r.videot),e.xp6(4),e.hij("Descripci\xf3n: ",r.edutuber.description,""),e.xp6(2),e.hij("Likes: ",r.edutuber.count_likes,""))},dependencies:[s.YG,s.PM,s.Zi,s.W2,s.Q$,p]}),o})()}];let b=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(f),u.Bz]}),o})(),P=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,l.u5,s.Pc,b,p]}),o})()}}]);