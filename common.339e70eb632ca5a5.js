"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9629:(M,v,a)=>{a.d(v,{c:()=>l});var p=a(5349),d=a(967),u=a(9203);const l=(r,e)=>{let t,o;const i=(c,f,_)=>{if(typeof document>"u")return;const E=document.elementFromPoint(c,f);E&&e(E)?E!==t&&(n(),s(E,_)):n()},s=(c,f)=>{t=c,o||(o=t);const _=t;(0,p.w)(()=>_.classList.add("ion-activated")),f()},n=(c=!1)=>{if(!t)return;const f=t;(0,p.w)(()=>f.classList.remove("ion-activated")),c&&o!==t&&t.click(),t=void 0};return(0,u.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>i(c.currentX,c.currentY,d.a),onMove:c=>i(c.currentX,c.currentY,d.b),onEnd:()=>{n(!0),(0,d.h)(),o=void 0}})}},4874:(M,v,a)=>{a.d(v,{g:()=>d});var p=a(6225);const d=()=>{if(void 0!==p.w)return p.w.Capacitor}},5149:(M,v,a)=>{a.d(v,{g:()=>p});const p=(e,t,o,i,s)=>u(e[1],t[1],o[1],i[1],s).map(n=>d(e[0],t[0],o[0],i[0],n)),d=(e,t,o,i,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*o*s+3*o+i*s))-e*Math.pow(s-1,3),u=(e,t,o,i,s)=>r((i-=s)-3*(o-=s)+3*(t-=s)-(e-=s),3*o-6*t+3*e,3*t-3*e,e).filter(c=>c>=0&&c<=1),r=(e,t,o,i)=>{if(0===e)return((e,t,o)=>{const i=t*t-4*e*o;return i<0?[]:[(-t+Math.sqrt(i))/(2*e),(-t-Math.sqrt(i))/(2*e)]})(t,o,i);const s=(3*(o/=e)-(t/=e)*t)/3,n=(2*t*t*t-9*t*o+27*(i/=e))/27;if(0===s)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-s),-Math.sqrt(-s)];const c=Math.pow(n/2,2)+Math.pow(s/3,3);if(0===c)return[Math.pow(n/2,.5)-t/3];if(c>0)return[Math.pow(-n/2+Math.sqrt(c),1/3)-Math.pow(n/2+Math.sqrt(c),1/3)-t/3];const f=Math.sqrt(Math.pow(-s/3,3)),_=Math.acos(-n/(2*Math.sqrt(Math.pow(-s/3,3)))),E=2*Math.pow(f,1/3);return[E*Math.cos(_/3)-t/3,E*Math.cos((_+2*Math.PI)/3)-t/3,E*Math.cos((_+4*Math.PI)/3)-t/3]}},5085:(M,v,a)=>{a.d(v,{i:()=>p});const p=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(M,v,a)=>{a.r(v),a.d(v,{startFocusVisible:()=>l});const p="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=r=>{let e=[],t=!0;const o=r?r.shadowRoot:document,i=r||document.body,s=C=>{e.forEach(g=>g.classList.remove(p)),C.forEach(g=>g.classList.add(p)),e=C},n=()=>{t=!1,s([])},c=C=>{t=u.includes(C.key),t||s([])},f=C=>{if(t&&void 0!==C.composedPath){const g=C.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));s(g)}},_=()=>{o.activeElement===i&&s([])};return o.addEventListener("keydown",c),o.addEventListener("focusin",f),o.addEventListener("focusout",_),o.addEventListener("touchstart",n,{passive:!0}),o.addEventListener("mousedown",n),{destroy:()=>{o.removeEventListener("keydown",c),o.removeEventListener("focusin",f),o.removeEventListener("focusout",_),o.removeEventListener("touchstart",n),o.removeEventListener("mousedown",n)},setFocus:s}}},9988:(M,v,a)=>{a.d(v,{c:()=>d});var p=a(839);const d=e=>{const t=e;let o;return{hasLegacyControl:()=>{if(void 0===o){const s=void 0!==t.label||u(t),n=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,c=(0,p.h)(t);o=!0===t.legacy||!s&&!n&&null!==c}return o}}},u=e=>!!(l.includes(e.tagName)&&null!==e.querySelector('[slot="label"]')||r.includes(e.tagName)&&""!==e.textContent),l=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],r=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(M,v,a)=>{a.d(v,{I:()=>d,a:()=>t,b:()=>o,c:()=>e,d:()=>s,h:()=>i});var p=a(4874),d=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(d||{});const l={getEngine(){const n=window.TapticEngine;if(n)return n;const c=(0,p.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,p.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,p.g)(),impact(n){const c=this.getEngine();if(!c)return;const f=this.isCapacitor()?n.style:n.style.toLowerCase();c.impact({style:f})},notification(n){const c=this.getEngine();if(!c)return;const f=this.isCapacitor()?n.type:n.type.toLowerCase();c.notification({type:f})},selection(){const n=this.isCapacitor()?d.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},r=()=>l.available(),e=()=>{r()&&l.selection()},t=()=>{r()&&l.selectionStart()},o=()=>{r()&&l.selectionChanged()},i=()=>{r()&&l.selectionEnd()},s=n=>{r()&&l.impact(n)}},2874:(M,v,a)=>{a.d(v,{I:()=>e,a:()=>s,b:()=>r,c:()=>f,d:()=>E,f:()=>n,g:()=>i,i:()=>o,p:()=>_,r:()=>C,s:()=>c});var p=a(5861),d=a(839),u=a(6710);const r="ion-content",e=".ion-content-scroll-host",t=`${r}, ${e}`,o=g=>"ION-CONTENT"===g.tagName,i=function(){var g=(0,p.Z)(function*(w){return o(w)?(yield new Promise(m=>(0,d.c)(w,m)),w.getScrollElement()):w});return function(m){return g.apply(this,arguments)}}(),s=g=>g.querySelector(e)||g.querySelector(t),n=g=>g.closest(t),c=(g,w)=>o(g)?g.scrollToTop(w):Promise.resolve(g.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),f=(g,w,m,y)=>o(g)?g.scrollByPoint(w,m,y):Promise.resolve(g.scrollBy({top:m,left:w,behavior:y>0?"smooth":"auto"})),_=g=>(0,u.b)(g,r),E=g=>{if(o(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},C=(g,w)=>{o(g)?g.scrollY=w:g.style.removeProperty("overflow")}},5307:(M,v,a)=>{a.d(v,{a:()=>p,b:()=>f,c:()=>t,d:()=>_,e:()=>L,f:()=>e,g:()=>E,h:()=>u,i:()=>d,j:()=>y,k:()=>O,l:()=>o,m:()=>n,n:()=>C,o:()=>s,p:()=>r,q:()=>l,r:()=>m,s:()=>h,t:()=>c,u:()=>g,v:()=>w,w:()=>i});const p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(M,v,a)=>{a.d(v,{c:()=>l,g:()=>r});var p=a(6225),d=a(839),u=a(6710);const l=(t,o,i)=>{let s,n;void 0!==p.w&&"MutationObserver"in p.w&&(s=new MutationObserver(E=>{for(const C of E)for(const g of C.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&g.slot===o)return i(),void(0,d.r)(()=>c(g))}),s.observe(t,{childList:!0}));const c=E=>{var C;n&&(n.disconnect(),n=void 0),n=new MutationObserver(g=>{i();for(const w of g)for(const m of w.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===o&&_()}),n.observe(null!==(C=E.parentElement)&&void 0!==C?C:E,{subtree:!0,childList:!0})},_=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{s&&(s.disconnect(),s=void 0),_()}}},r=(t,o,i)=>{const s=null==t?0:t.toString().length,n=e(s,o);if(void 0===i)return n;try{return i(s,o)}catch(c){return(0,u.a)("Exception in provided `counterFormatter`.",c),n}},e=(t,o)=>`${t} / ${o}`},7484:(M,v,a)=>{a.d(v,{K:()=>l,a:()=>u});var p=a(4874),d=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(d||{}),u=function(r){return r.Body="body",r.Ionic="ionic",r.Native="native",r.None="none",r}(u||{});const l={getEngine(){const r=(0,p.g)();if(null!=r&&r.isPluginAvailable("Keyboard"))return r.Plugins.Keyboard},getResizeMode(){const r=this.getEngine();return null!=r&&r.getResizeMode?r.getResizeMode().catch(e=>{if(e.code!==d.Unimplemented)throw e}):Promise.resolve(void 0)}}},1612:(M,v,a)=>{a.r(v),a.d(v,{KEYBOARD_DID_CLOSE:()=>r,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>O,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>C,resetKeyboardAssist:()=>s,setKeyboardClose:()=>_,setKeyboardOpen:()=>f,startKeyboardAssist:()=>n,trackViewportChanges:()=>y});var p=a(7484);a(4874),a(6225);const l="ionKeyboardDidShow",r="ionKeyboardDidHide";let t={},o={},i=!1;const s=()=>{t={},o={},i=!1},n=h=>{if(p.K.getEngine())c(h);else{if(!h.visualViewport)return;o=O(h.visualViewport),h.visualViewport.onresize=()=>{y(h),E()||C(h)?f(h):g(h)&&_(h)}}},c=h=>{h.addEventListener("keyboardDidShow",L=>f(h,L)),h.addEventListener("keyboardDidHide",()=>_(h))},f=(h,L)=>{w(h,L),i=!0},_=h=>{m(h),i=!1},E=()=>!i&&t.width===o.width&&(t.height-o.height)*o.scale>150,C=h=>i&&!g(h),g=h=>i&&o.height===h.innerHeight,w=(h,L)=>{const D=new CustomEvent(l,{detail:{keyboardHeight:L?L.keyboardHeight:h.innerHeight-o.height}});h.dispatchEvent(D)},m=h=>{const L=new CustomEvent(r);h.dispatchEvent(L)},y=h=>{t=Object.assign({},o),o=O(h.visualViewport)},O=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},3459:(M,v,a)=>{a.d(v,{c:()=>e});var p=a(5861),d=a(6225),u=a(7484);const l=t=>{if(void 0===d.d||t===u.a.None||void 0===t)return null;const o=d.d.querySelector("ion-app");return null!=o?o:d.d.body},r=t=>{const o=l(t);return null===o?0:o.clientHeight},e=function(){var t=(0,p.Z)(function*(o){let i,s,n,c;const f=function(){var w=(0,p.Z)(function*(){const m=yield u.K.getResizeMode(),y=void 0===m?void 0:m.mode;i=()=>{void 0===c&&(c=r(y)),n=!0,_(n,y)},s=()=>{n=!1,_(n,y)},null==d.w||d.w.addEventListener("keyboardWillShow",i),null==d.w||d.w.addEventListener("keyboardWillHide",s)});return function(){return w.apply(this,arguments)}}(),_=(w,m)=>{o&&o(w,E(m))},E=w=>{if(0===c||c===r(w))return;const m=l(w);return null!==m?new Promise(y=>{const h=new ResizeObserver(()=>{m.clientHeight===c&&(h.disconnect(),y())});h.observe(m)}):void 0};return yield f(),{init:f,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",i),null==d.w||d.w.removeEventListener("keyboardWillHide",s),i=s=void 0},isKeyboardVisible:()=>n}});return function(i){return t.apply(this,arguments)}}()},3830:(M,v,a)=>{a.d(v,{c:()=>d});var p=a(5861);const d=()=>{let u;return{lock:function(){var r=(0,p.Z)(function*(){const e=u;let t;return u=new Promise(o=>t=o),void 0!==e&&(yield e),t});return function(){return r.apply(this,arguments)}}()}}},5857:(M,v,a)=>{a.d(v,{c:()=>u});var p=a(6225),d=a(839);const u=(l,r,e)=>{let t;const o=()=>!(void 0===r()||void 0!==l.label||null===e()),s=()=>{const c=r();if(void 0===c)return;if(!o())return void c.style.removeProperty("width");const f=e().scrollWidth;if(0===f&&null===c.offsetParent&&void 0!==p.w&&"IntersectionObserver"in p.w){if(void 0!==t)return;const _=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(s(),_.disconnect(),t=void 0)},{threshold:.01,root:l});_.observe(c)}else c.style.setProperty("width",.75*f+"px")};return{calculateNotchWidth:()=>{o()&&(0,d.r)(()=>{s()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},3781:(M,v,a)=>{a.d(v,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(u,l,r)=>{const e=u*l/r-u+"ms",t=2*Math.PI*l/r;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(u,l,r)=>{const e=l/r,t=u*e-u+"ms",o=2*Math.PI*e;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,l)=>({r:6,style:{left:32-32*l+"%","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,l,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*l+(l<r/2?180:-180)}deg)`,"animation-delay":u*l/r-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,l,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*l+(l<r/2?180:-180)}deg)`,"animation-delay":u*l/r-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,l,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":u*l/r-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,l,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":u*l/r-u+"ms"}})}}},8663:(M,v,a)=>{a.r(v),a.d(v,{createSwipeBackGesture:()=>r});var p=a(839),d=a(5085),u=a(9203);a(619);const r=(e,t,o,i,s)=>{const n=e.ownerDocument.defaultView;let c=(0,d.i)(e);const _=m=>c?-m.deltaX:m.deltaX;return(0,u.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(c=(0,d.i)(e),(m=>{const{startX:O}=m;return c?O>=n.innerWidth-50:O<=50})(m)&&t()),onStart:o,onMove:m=>{const O=_(m)/n.innerWidth;i(O)},onEnd:m=>{const y=_(m),O=n.innerWidth,h=y/O,L=(m=>c?-m.velocityX:m.velocityX)(m),D=L>=0&&(L>.2||y>O/2),b=(D?1-h:h)*O;let P=0;if(b>5){const T=b/Math.abs(L);P=Math.min(T,540)}s(D,h<=0?.01:(0,p.l)(0,h,.9999),P)}})}},5564:(M,v,a)=>{a.d(v,{w:()=>p});const p=(l,r,e)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{e(d(o,r))});return t.observe(l,{childList:!0,subtree:!0}),t},d=(l,r)=>{let e;return l.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)e=u(t.addedNodes[o],r)||e}),e},u=(l,r)=>{if(1!==l.nodeType)return;const e=l;return(e.tagName===r.toUpperCase()?[e]:Array.from(e.querySelectorAll(r))).find(o=>o.value===e.value)}},1796:(M,v,a)=>{a.d(v,{r:()=>i});var p=a(5861),d=a(6814),u=a(95),l=a(6728);class r{}var e=a(6242),t=a(6593),o=a(9045);let i=(()=>{var s;class n{constructor(f,_){this.sanitizer=f,this.dataService=_,this.topicsCourse=new r,this.topicsCourse.toCo_ContentVirtual="",this.topicsCourse.toCo_Html="",this.topicsCourse.toCo_Name=""}ngAfterViewInit(){this.listModuleVirtual()}listModuleVirtual(){var f=this;return(0,p.Z)(function*(){yield f.dataService.getStorage("toCo"+f.toCoId).then(_=>{_&&(f.topicsCourse=_,f.getTopicsCourse())})})()}getTopicsCourse(){this.topicsCourse.toCo_Html=this.topicsCourse.toCo_ContentVirtual,this.topicsCourse.toCo_Html=this.topicsCourse.toCo_Html.replaceAll('height="800"','style="border: none"'),this.topicsCourse.toCo_Html=this.sanitizer.bypassSecurityTrustHtml(this.topicsCourse.toCo_Html)}}return(s=n).\u0275fac=function(f){return new(f||s)(e.Y36(t.H7),e.Y36(o.s))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-detail-virtual"]],inputs:{toCoId:"toCoId"},standalone:!0,features:[e.jDz],decls:4,vars:3,consts:[["seamless","","sandbox","allow-scripts",2,"border","none",3,"srcdoc","id"]],template:function(f,_){1&f&&(e.TgZ(0,"div"),e._UZ(1,"iframe",0),e.TgZ(2,"p"),e._uU(3),e.qZA()()),2&f&&(e.xp6(1),e.s9C("id","iframe"+_.toCoId),e.Q6J("srcdoc",_.topicsCourse.toCo_Html,e.oJD),e.xp6(2),e.Oqu(_.topicsCourse.toCo_Name))},dependencies:[d.ez,u.u5,l.Pc]}),n})()},9045:(M,v,a)=>{a.d(v,{s:()=>r});var p=a(5861),d=a(9862),u=a(6242),l=a(2014);let r=(()=>{var e;class t{constructor(i,s){this.http=i,this.storage=s,this.ingreso=!1,this.urlApiLogin="https://score-test.contentgrp.com/api/login",this.urlApiEdutuberVideos="https://score-test.contentgrp.com/api/edutuberVideos/",this.urlApi="https://aprendeyavanza2.com.co/ApiSilver/api/",this.apiClients="Clients",this.apiClientsByUser="Clients/List/",this.apiClientsById="Clients/",this.apiClientsClasification="Clasification/",this.apiClientsGetModuleByClasification="Clasification/GetModuleByClasification/",this.apiUsersGetListModuleVirtual="Users/GetListModuleVirtual/",this.apiUsersGetModule="Users/GetModule/",this.apiUsersGetNotifications="Users/GetNotifications/"}showToast(i,s,n){return(0,p.Z)(function*(){(yield i.create({cssClass:"custom-toast",message:s,animated:!0,duration:n||2e3,mode:"ios"})).present()})()}getOptionsLogin(){return{headers:(new d.WM).set("Content-Type","application/x-www-form-urlencoded")}}getOptions2(i){return{headers:(new d.WM).set("Accept","*/*").set("Content-Type","application/json; charset=utf-8").set("mode","no-cors").set("Authorization","bearer "+i)}}getStorage(i){return this.storage.get(i)}setStorage(i,s){this.storage.set(i,s)}clearStorage(){this.storage.clear()}random_rgba(){var i=Math.round,s=Math.random;return"rgba("+i(255*s())+","+i(255*s())+","+i(255*s())+",0.7)"}getLogin(i,s){const n=new d.LE({fromObject:{email:i,password:s}});return this.http.post(this.urlApiLogin,n,this.getOptionsLogin())}edutuberVideos(i,s){return this.http.get(this.urlApiEdutuberVideos+s,this.getOptions2(i))}getClientes(i){return this.http.get(this.urlApi+this.apiClients,this.getOptions2(i))}getClientsClasification(i,s){return this.http.get(this.urlApi+this.apiClientsClasification+s,this.getOptions2(i))}getClientsByUser(i,s){return this.http.get(this.urlApi+this.apiClientsByUser+s,this.getOptions2(i))}getClientsById(i,s){return this.http.get(this.urlApi+this.apiClientsById+s,this.getOptions2(i))}getModuleByClasification(i,s){return this.http.get(this.urlApi+this.apiClientsGetModuleByClasification+s,this.getOptions2(i))}getListModuleVirtual(i,s){return this.http.get(this.urlApi+this.apiUsersGetListModuleVirtual+s,this.getOptions2(i))}getModule(i,s,n){return this.http.get(this.urlApi+this.apiUsersGetModule+s+"/"+n,this.getOptions2(i))}getNotifications(i){return this.http.get(this.urlApi+this.apiUsersGetNotifications,this.getOptions2(i))}}return(e=t).\u0275fac=function(i){return new(i||e)(u.LFG(d.eN),u.LFG(l.K))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),t})()}}]);