"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4928],{2726:(re,N,h)=>{h.d(N,{Uw:()=>P,fo:()=>S});var d=h(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var o=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(o||{});class M extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const Q=n=>{var e,t,i,a,r;const l=n.CapacitorCustomPlatform||null,s=n.Capacitor||{},p=s.Plugins=s.Plugins||{},u=n.CapacitorPlatforms,_=(null===(e=null==u?void 0:u.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==l?l.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),le=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==_()),ue=(null===(i=null==u?void 0:u.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(g=>{const m=J.get(g);return!!(null!=m&&m.platforms.has(_())||ee(g))}),ee=(null===(a=null==u?void 0:u.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(g=>{var m;return null===(m=s.PluginHeaders)||void 0===m?void 0:m.find(j=>j.name===g)}),J=new Map,ve=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((g,m={})=>{const j=J.get(g);if(j)return console.warn(`Capacitor plugin "${g}" already registered. Cannot register plugins twice.`),j.proxy;const $=_(),W=ee(g);let Z;const he=function(){var v=(0,d.Z)(function*(){return!Z&&$ in m?Z=Z="function"==typeof m[$]?yield m[$]():m[$]:null!==l&&!Z&&"web"in m&&(Z=Z="function"==typeof m.web?yield m.web():m.web),Z});return function(){return v.apply(this,arguments)}}(),z=v=>{let b;const E=(...k)=>{const x=he().then(y=>{const U=((v,b)=>{var E,k;if(!W){if(v)return null===(k=v[b])||void 0===k?void 0:k.bind(v);throw new M(`"${g}" plugin is not implemented on ${$}`,o.Unimplemented)}{const x=null==W?void 0:W.methods.find(y=>b===y.name);if(x)return"promise"===x.rtype?y=>s.nativePromise(g,b.toString(),y):(y,U)=>s.nativeCallback(g,b.toString(),y,U);if(v)return null===(E=v[b])||void 0===E?void 0:E.bind(v)}})(y,v);if(U){const D=U(...k);return b=null==D?void 0:D.remove,D}throw new M(`"${g}.${v}()" is not implemented on ${$}`,o.Unimplemented)});return"addListener"===v&&(x.remove=(0,d.Z)(function*(){return b()})),x};return E.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(E,"name",{value:v,writable:!1,configurable:!1}),E},te=z("addListener"),ne=z("removeListener"),be=(v,b)=>{const E=te({eventName:v},b),k=function(){var y=(0,d.Z)(function*(){const U=yield E;ne({eventName:v,callbackId:U},b)});return function(){return y.apply(this,arguments)}}(),x=new Promise(y=>E.then(()=>y({remove:k})));return x.remove=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield k()}),x},V=new Proxy({},{get(v,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return W?be:te;case"removeListener":return ne;default:return z(b)}}});return p[g]=V,J.set(g,{name:g,proxy:V,platforms:new Set([...Object.keys(m),...W?[$]:[]])}),V});return s.convertFileSrc||(s.convertFileSrc=g=>g),s.getPlatform=_,s.handleError=g=>n.console.error(g),s.isNativePlatform=le,s.isPluginAvailable=ue,s.pluginMethodNoop=(g,m,j)=>Promise.reject(`${j} does not have an implementation of "${m}".`),s.registerPlugin=ve,s.Exception=M,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},O=(n=>n.Capacitor=Q(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),S=O.registerPlugin;class P{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const l=function(){var p=(0,d.Z)(function*(){return i.removeListener(e,t)});return function(){return p.apply(this,arguments)}}(),s=Promise.resolve({remove:l});return Object.defineProperty(s,"remove",{value:(p=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield l()}),function(){return p.apply(this,arguments)})}),s;var p}removeAllListeners(){var e=this;return(0,d.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const i=this.listeners[e];i&&i.forEach(a=>a(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new O.Exception(e,o.Unimplemented)}unavailable(e="not available"){return new O.Exception(e,o.Unavailable)}removeListener(e,t){var i=this;return(0,d.Z)(function*(){const a=i.listeners[e];if(!a)return;const r=a.indexOf(t);i.listeners[e].splice(r,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const L=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),T=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class R extends P{getCookies(){return(0,d.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[a,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=T(a).trim(),r=T(r).trim(),t[a]=r}),t})()}setCookie(e){return(0,d.Z)(function*(){try{const t=L(e.key),i=L(e.value),a=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),l=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${a}; path=${r}; ${l};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,d.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,d.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,d.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}S("CapacitorCookies",{web:()=>new R});const oe=function(){var n=(0,d.Z)(function*(e){return new Promise((t,i)=>{const a=new FileReader;a.onload=()=>{const r=a.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},a.onerror=r=>i(r),a.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class ce extends P{request(e){return(0,d.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),a=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(a=>a.toLocaleLowerCase()).reduce((a,r,l)=>(a[r]=n[e[l]],a),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(a.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[l,s]of Object.entries(n.data||{}))r.set(l,s);t.body=r.toString()}else if(a.includes("multipart/form-data")){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((s,p)=>{r.append(p,s)});else for(const s of Object.keys(n.data))r.append(s,n.data[s]);t.body=r;const l=new Headers(t.headers);l.delete("content-type"),t.headers=l}else(a.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),i=((n,e=!0)=>n?Object.entries(n).reduce((i,a)=>{const[r,l]=a;let s,p;return Array.isArray(l)?(p="",l.forEach(u=>{s=e?encodeURIComponent(u):u,p+=`${r}=${s}&`}),p.slice(0,-1)):(s=e?encodeURIComponent(l):l,p=`${r}=${s}`),`${i}&${p}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=i?`${e.url}?${i}`:e.url,r=yield fetch(a,t),l=r.headers.get("content-type")||"";let p,u,{responseType:s="text"}=r.ok?e:{};switch(l.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":u=yield r.blob(),p=yield oe(u);break;case"json":p=yield r.json();break;default:p=yield r.text()}const F={};return r.headers.forEach((_,K)=>{F[K]=_}),{data:p,headers:F,status:r.status,url:r.url}})()}get(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}S("CapacitorHttp",{web:()=>new ce})},4928:(re,N,h)=>{h.r(N),h.d(N,{NotificacionPageModule:()=>S});var d=h(6814),H=h(95),C=h(6728),A=h(3044),Y=h(5861);const B=(0,h(2726).fo)("Browser",{web:()=>h.e(3671).then(h.bind(h,3671)).then(c=>new c.BrowserWeb)});var o=h(6242),M=h(9045);function G(c,w){if(1&c){const P=o.EpF();o.TgZ(0,"ion-card",6)(1,"ion-card-content",7),o.NdJ("click",function(){const T=o.CHM(P).$implicit,R=o.oxw();return o.KtG(R.viewWebPage(T.targetUrl))}),o.TgZ(2,"ion-label")(3,"b"),o._uU(4),o.qZA(),o._UZ(5,"br"),o.TgZ(6,"p"),o._uU(7),o.qZA()()()()}if(2&c){const P=w.$implicit;o.xp6(4),o.Oqu(P.title),o.xp6(3),o.Oqu(P.message)}}const X=[{path:"",component:(()=>{var c;class w{constructor(f,L,T){this.router=f,this.toastCtrl=L,this.dataService=T,this.viewWebPage=function(){var R=(0,Y.Z)(function*(I){yield B.open({url:"http://"+I}),B.addListener("browserFinished",()=>{console.log("browser exited")})});return function(I){return R.apply(this,arguments)}}()}ngAfterViewInit(){this.getDataT()}getDataT(){this.dataService.getStorage("token").then(f=>{f&&(this.token=f,this.listNotificacions())})}listNotificacions(){this.dataService.getNotifications(this.token).subscribe(f=>{this.getDataResult(f)})}getDataResult(f){f.error?this.dataService.showToast(this.toastCtrl,f.statusText):(this.lists=f.result,console.log(this.lists))}regresar(){this.router.navigate(["/main"])}}return(c=w).\u0275fac=function(f){return new(f||c)(o.Y36(A.F0),o.Y36(C.yF),o.Y36(M.s))},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-notificacion"]],decls:17,vars:1,consts:[[1,"contenidoDiv"],[1,"tituloPage"],["id","inbox-list"],["class","contentCardLi",4,"ngFor","ngForOf"],[1,"contentDiv-button-list"],["expand","block","start","",1,"button-silver",3,"click"],[1,"contentCardLi"],[3,"click"]],template:function(f,L){1&f&&(o.TgZ(0,"ion-content",0)(1,"ion-card")(2,"ion-card-header")(3,"p",1),o._uU(4,"Notificaciones"),o.qZA()()(),o.TgZ(5,"ion-list",2),o.YNc(6,G,8,2,"ion-card",3),o.TgZ(7,"ion-card",4)(8,"div")(9,"ion-button",5),o.NdJ("click",function(){return L.regresar()}),o._uU(10,"REGRESAR"),o.qZA()()(),o.TgZ(11,"ion-card")(12,"div"),o._UZ(13,"br")(14,"br")(15,"br")(16,"br"),o.qZA()()()()),2&f&&(o.xp6(6),o.Q6J("ngForOf",L.lists))},dependencies:[d.sg,C.YG,C.PM,C.FN,C.Zi,C.W2,C.Q$,C.q_]}),w})()}];let O=(()=>{var c;class w{}return(c=w).\u0275fac=function(f){return new(f||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[A.Bz.forChild(X),A.Bz]}),w})(),S=(()=>{var c;class w{}return(c=w).\u0275fac=function(f){return new(f||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[d.ez,H.u5,C.Pc,O]}),w})()}}]);