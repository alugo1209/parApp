"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5781],{5781:(w,g,o)=>{o.r(g),o.d(g,{NewExperiencePageModule:()=>N});var p=o(6814),d=o(95),s=o(6728),u=o(3044),h=o(5861),e=o(6242),f=o(9045);const m=["filepicker"],v=[{path:"",component:(()=>{var i;class l{constructor(n,t,a){this.router=n,this.toastCtrl=t,this.dataService=a,this.name="",this.fileName="",this.descripcion="",this.btnDisable=!0}ngOnInit(){}getDataC(n){this.dataService.getStorage("companyId").then(t=>{t&&(this.companyId=t,this.getDataU(n))})}getDataU(n){this.dataService.getStorage("id").then(t=>{t&&(this.userId=t,this.getDataT(n))})}getDataT(n){const t=new FileReader;t.readAsArrayBuffer(n),t.onload=()=>{const a=new Blob([t.result],{type:n.type});this.dataService.uploadFile(this.companyId,this.userId,this.name,this.descripcion,a,n.name).subscribe(r=>{this.getDataResult(r)})}}getDataResult(n){n.error?(console.log("error"),console.log(n),this.dataService.showToast(this.toastCtrl,n)):(console.log("data"),console.log(n),this.dataService.showToast(this.toastCtrl,n.message),setTimeout(()=>{this.regresar()},3e3))}addFile(){this.uploader.nativeElement.click()}fileSelected(n){var t=this;return(0,h.Z)(function*(){t.selectedFile=n.target.files[0],t.fileName=t.selectedFile.name,t.btnDisable=!1})()}guardarFile(){void 0===this.name||""===this.name?this.dataService.showToast(this.toastCtrl,"Debe registrar el nombre del video."):void 0===this.descripcion||""===this.descripcion?this.dataService.showToast(this.toastCtrl,"Debe agregar una breve descripci\xf3n al video."):void 0===this.selectedFile?this.dataService.showToast(this.toastCtrl,"Debe seleccionar un archivo."):this.getDataC(this.selectedFile)}regresar(){this.router.navigate(["/experience"])}}return(i=l).\u0275fac=function(n){return new(n||i)(e.Y36(u.F0),e.Y36(s.yF),e.Y36(f.s))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-new-experience"]],viewQuery:function(n,t){if(1&n&&e.Gf(m,5),2&n){let a;e.iGM(a=e.CRH())&&(t.uploader=a.first)}},decls:19,vars:5,consts:[[1,"contenidoDiv"],[1,"tituloPage1"],["id","inbox-list1"],["hidden","","type","file",3,"change"],["filepicker",""],["label","Nombre Video","labelPlacement","stacked",3,"ngModel","ngModelChange"],["label","Descripci\xf3n","labelPlacement","stacked",3,"ngModel","ngModelChange"],["label","Nombre del Archivo","labelPlacement","stacked",3,"ngModel","readonly","ngModelChange"],["expand","block",1,"button-silver",3,"click"],["expand","block",1,"button-silver",3,"disabled","click"],[1,"contentDiv-button-list"],["expand","block","start","",1,"button-silver",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-content",0)(1,"ion-card")(2,"ion-card-header")(3,"p",1),e._uU(4,"Nueva Experiencia"),e.qZA()()(),e.TgZ(5,"ion-card",2)(6,"input",3,4),e.NdJ("change",function(r){return t.fileSelected(r)}),e.qZA(),e.TgZ(8,"ion-input",5),e.NdJ("ngModelChange",function(r){return t.name=r}),e.qZA(),e.TgZ(9,"ion-input",6),e.NdJ("ngModelChange",function(r){return t.descripcion=r}),e.qZA(),e.TgZ(10,"ion-input",7),e.NdJ("ngModelChange",function(r){return t.fileName=r}),e.qZA(),e.TgZ(11,"ion-button",8),e.NdJ("click",function(){return t.addFile()}),e._uU(12,"Seleccionar Archivo Video"),e.qZA(),e.TgZ(13,"ion-button",9),e.NdJ("click",function(){return t.guardarFile()}),e._uU(14,"Guardar"),e.qZA()(),e.TgZ(15,"ion-card",10)(16,"div")(17,"ion-button",11),e.NdJ("click",function(){return t.regresar()}),e._uU(18,"REGRESAR"),e.qZA()()()()),2&n&&(e.xp6(8),e.Q6J("ngModel",t.name),e.xp6(1),e.Q6J("ngModel",t.descripcion),e.xp6(1),e.Q6J("ngModel",t.fileName)("readonly",!0),e.xp6(3),e.Q6J("disabled",t.btnDisable))},dependencies:[d.JJ,d.On,s.YG,s.PM,s.Zi,s.W2,s.pK,s.j9]}),l})()}];let b=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.Bz.forChild(v),u.Bz]}),l})(),N=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,d.u5,s.Pc,b]}),l})()}}]);