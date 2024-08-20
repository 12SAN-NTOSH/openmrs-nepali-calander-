"use strict";(globalThis.webpackChunk_openmrs_esm_primary_navigation_app=globalThis.webpackChunk_openmrs_esm_primary_navigation_app||[]).push([[619],{2619:(t,e,n)=>{n.r(e),n.d(e,{BOOTSTRAPPING:()=>d,LOADING_SOURCE_CODE:()=>h,LOAD_ERROR:()=>T,MOUNTED:()=>E,MOUNTING:()=>g,NOT_BOOTSTRAPPED:()=>m,NOT_LOADED:()=>f,NOT_MOUNTED:()=>w,SKIP_BECAUSE_BROKEN:()=>P,UNLOADING:()=>O,UNMOUNTING:()=>v,UPDATING:()=>y,addErrorHandler:()=>a,checkActivityFunctions:()=>Nt,ensureJQuerySupport:()=>ht,getAppNames:()=>Tt,getAppStatus:()=>Pt,getMountedApps:()=>Ot,mountRootParcel:()=>k,navigateToUrl:()=>rt,patchHistoryApi:()=>lt,pathToActiveWhen:()=>Mt,registerApplication:()=>bt,removeErrorHandler:()=>c,setBootstrapMaxTime:()=>Q,setMountMaxTime:()=>V,setUnloadMaxTime:()=>z,setUnmountMaxTime:()=>q,start:()=>Bt,triggerAppChange:()=>$t,unloadApplication:()=>St,unregisterApplication:()=>_t});var r=Object.freeze({__proto__:null,get start(){return Bt},get ensureJQuerySupport(){return ht},get setBootstrapMaxTime(){return Q},get setMountMaxTime(){return V},get setUnmountMaxTime(){return q},get setUnloadMaxTime(){return z},get registerApplication(){return bt},get unregisterApplication(){return _t},get getMountedApps(){return Ot},get getAppStatus(){return Pt},get unloadApplication(){return St},get checkActivityFunctions(){return Nt},get getAppNames(){return Tt},get pathToActiveWhen(){return Mt},get navigateToUrl(){return rt},get patchHistoryApi(){return lt},get triggerAppChange(){return $t},get addErrorHandler(){return a},get removeErrorHandler(){return c},get mountRootParcel(){return k},get NOT_LOADED(){return f},get LOADING_SOURCE_CODE(){return h},get NOT_BOOTSTRAPPED(){return m},get BOOTSTRAPPING(){return d},get NOT_MOUNTED(){return w},get MOUNTING(){return g},get UPDATING(){return y},get LOAD_ERROR(){return T},get MOUNTED(){return E},get UNLOADING(){return O},get UNMOUNTING(){return v},get SKIP_BECAUSE_BROKEN(){return P}}),o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}).CustomEvent,i=function(){try{var t=new o("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?o:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n};let s=[];function u(t,e,n){const r=p(t,e,n);s.length?s.forEach((t=>t(r))):setTimeout((()=>{throw r}))}function a(t){if("function"!=typeof t)throw Error(l(28,!1));s.push(t)}function c(t){if("function"!=typeof t)throw Error(l(29,!1));let e=!1;return s=s.filter((n=>{const r=n===t;return e=e||r,!r})),e}function l(t,e,...n){return`single-spa minified message #${t}: ${e?e+" ":""}See https://single-spa.js.org/error/?code=${t}${n.length?`&arg=${n.join("&arg=")}`:""}`}function p(t,e,n){const r=`${S(e)} '${N(e)}' died in status ${e.status}: `;let o;if(t instanceof Error){try{t.message=r+t.message}catch(t){}o=t}else{console.warn(l(30,!1,e.status,N(e)));try{o=Error(r+JSON.stringify(t))}catch(e){o=t}}return o.appOrParcelName=N(e),e.status=n,o}const f="NOT_LOADED",h="LOADING_SOURCE_CODE",m="NOT_BOOTSTRAPPED",d="BOOTSTRAPPING",w="NOT_MOUNTED",g="MOUNTING",E="MOUNTED",y="UPDATING",v="UNMOUNTING",O="UNLOADING",T="LOAD_ERROR",P="SKIP_BECAUSE_BROKEN";function A(t){return t.status===E}function b(t){try{return t.activeWhen(window.location)}catch(e){return u(e,t,P),!1}}function N(t){return t.name}function _(t){return Boolean(t.unmountThisParcel)}function S(t){return _(t)?"parcel":"application"}function U(){for(let t=arguments.length-1;t>0;t--)for(let e in arguments[t])"__proto__"!==e&&(arguments[t-1][e]=arguments[t][e]);return arguments[0]}function D(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function M(t){return t&&("function"==typeof t||(e=t,Array.isArray(e)&&!D(e,(t=>"function"!=typeof t))));var e}function L(t,e){let n=t[e]||[];n=Array.isArray(n)?n:[n],0===n.length&&(n=[()=>Promise.resolve()]);const r=S(t),o=N(t);return function(t){return n.reduce(((n,i,s)=>n.then((()=>{const n=i(t);return R(n)?n:Promise.reject(l(15,!1,r,o,e,s))}))),Promise.resolve())}}function R(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}let j=[];function $(t,e){return Promise.resolve().then((()=>t.status!==m?t:(t.status=d,t.bootstrap?X(t,"bootstrap").then(n).catch((n=>{if(e)throw p(n,t,P);return u(n,t,P),t})):Promise.resolve().then(n))));function n(){return t.status=w,t}}function I(t,e){return Promise.resolve().then((()=>{if(t.status!==E)return t;t.status=v;const n=Object.keys(t.parcels).map((e=>t.parcels[e].unmountThisParcel()));return Promise.all(n).then(r,(n=>r().then((()=>{const r=Error(n.message);if(e)throw p(r,t,P);u(r,t,P)})))).then((()=>t));function r(){return X(t,"unmount").then((()=>{t.status=w}),(n=>{if(e)throw p(n,t,P);u(n,t,P)}))}}))}let G=!1,x=!1;function B(t,e){return Promise.resolve().then((()=>t.status!==w?t:(G||(window.dispatchEvent(new i("single-spa:before-first-mount")),G=!0),t.status=g,X(t,"mount").then((()=>(t.status=E,x||(window.dispatchEvent(new i("single-spa:first-mount")),x=!0),t))).catch((n=>{return t.status=E,I(t,!0).then(r,r);function r(){if(e)throw p(n,t,P);return u(n,t,P),t}})))))}let C=0;const W={parcels:{}};function k(){return H.apply(W,arguments)}function H(t,e){const n=this;if(!t||"object"!=typeof t&&"function"!=typeof t)throw Error(l(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(l(3,!1,typeof t.name));const r=C++;let o=t.name||`parcel-${r}`;if("object"!=typeof e)throw Error(l(4,!1,o,typeof e));if(!e.domElement)throw Error(l(5,!1,o));const i="function"==typeof t,s=i?t:()=>Promise.resolve(t),u={id:r,parcels:{},status:i?h:m,customProps:e,parentName:N(n),unmountThisParcel:()=>d.then((()=>{if(u.status!==E)throw Error(l(6,!1,o,u.status));return I(u,!0)})).then((t=>(u.parentName&&delete n.parcels[u.id],t))).then((t=>(g(t),t))).catch((t=>{throw u.status=P,v(t),t}))};let a;n.parcels[r]=u;let c=s();if(!c||"function"!=typeof c.then)throw Error(l(7,!1));c=c.then((t=>{if(!t)throw Error(l(8,!1));if(o=t.name||`parcel-${r}`,Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!M(t.bootstrap))throw Error(l(9,!1,o));if(!M(t.mount))throw Error(l(10,!1,o));if(!M(t.unmount))throw Error(l(11,!1,o));if(t.update&&!M(t.update))throw Error(l(12,!1,o));const e=L(t,"bootstrap"),n=L(t,"mount"),i=L(t,"unmount");u.status=m,u.name=o,u.bootstrap=e,u.mount=n,u.unmount=i,u.timeouts=Y(t.timeouts),t.update&&(u.update=L(t,"update"),a.update=function(t){return u.customProps=t,K((e=u,Promise.resolve().then((()=>{if(e.status!==E)throw Error(l(32,!1,N(e)));return e.status=y,X(e,"update").then((()=>(e.status=E,e))).catch((t=>{throw p(t,e,P)}))}))));var e})}));const f=c.then((()=>$(u,!0))),d=f.then((()=>B(u,!0)));let g,v;const O=new Promise(((t,e)=>{g=t,v=e}));return a={mount:()=>K(Promise.resolve().then((()=>{if(u.status!==w)throw Error(l(13,!1,o,u.status));return n.parcels[r]=u,B(u)}))),unmount:()=>K(u.unmountThisParcel()),getStatus:()=>u.status,loadPromise:K(c),bootstrapPromise:K(f),mountPromise:K(d),unmountPromise:K(O)},a}function K(t){return t.then((()=>null))}function F(t){const e=N(t);let n="function"==typeof t.customProps?t.customProps(e,window.location):t.customProps;("object"!=typeof n||null===n||Array.isArray(n))&&(n={},console.warn(l(40,!1),e,n));const o=U({},n,{name:e,mountParcel:H.bind(t),singleSpa:r});return _(t)&&(o.unmountSelf=t.unmountThisParcel),o}const J={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function Q(t,e,n){if("number"!=typeof t||t<=0)throw Error(l(16,!1));J.bootstrap={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function V(t,e,n){if("number"!=typeof t||t<=0)throw Error(l(17,!1));J.mount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function q(t,e,n){if("number"!=typeof t||t<=0)throw Error(l(18,!1));J.unmount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function z(t,e,n){if("number"!=typeof t||t<=0)throw Error(l(19,!1));J.unload={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function X(t,e){const n=t.timeouts[e],r=n.warningMillis,o=S(t);return new Promise(((i,s)=>{let u=!1,a=!1;t[e](F(t)).then((t=>{u=!0,i(t)})).catch((t=>{u=!0,s(t)})),setTimeout((()=>p(1)),r),setTimeout((()=>p(!0)),n.millis);const c=l(31,!1,e,o,N(t),n.millis);function p(t){if(!u)if(!0===t)a=!0,n.dieOnTimeout?s(Error(c)):console.error(c);else if(!a){const e=t,o=e*r;console.warn(c),o+r<n.millis&&setTimeout((()=>p(e+1)),r)}}}))}function Y(t){const e={};for(let n in J)e[n]=U({},J[n],t&&t[n]||{});return e}function Z(t){return Promise.resolve().then((()=>{if(t.loadPromise)return t.loadPromise;if(t.status!==f&&t.status!==T)return t;let e,n;return t.status=h,t.loadPromise=Promise.resolve().then((()=>{const r=t.loadApp(F(t));if(!R(r))throw n=!0,Error(l(33,!1,N(t)));return r.then((n=>{let r;t.loadErrorTime=null,e=n,"object"!=typeof e&&(r=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!M(e.bootstrap)&&(r=35),M(e.mount)||(r=36),M(e.unmount)||(r=37);const o=S(e);if(r){let n;try{n=JSON.stringify(e)}catch(t){}return console.error(l(r,!1,o,N(t),n),e),u(void 0,t,P),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=U({},t.devtools.overlays,e.devtools.overlays)),t.status=m,t.bootstrap=L(e,"bootstrap"),t.mount=L(e,"mount"),t.unmount=L(e,"unmount"),t.unload=L(e,"unload"),t.timeouts=Y(e.timeouts),delete t.loadPromise,t}))})).catch((e=>{let r;return delete t.loadPromise,n?r=P:(r=T,t.loadErrorTime=(new Date).getTime()),u(e,t,r),t}))}))}const tt="undefined"!=typeof window,et={hashchange:[],popstate:[]},nt=["hashchange","popstate"];function rt(t){let e;if("string"==typeof t)e=t;else if(this&&this.href)e=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(l(14,!1));e=t.currentTarget.href,t.preventDefault()}const n=pt(window.location.href),r=pt(e);0===e.indexOf("#")?window.location.hash=r.hash:n.host!==r.host&&r.host?window.location.href=e:r.pathname===n.pathname&&r.search===n.search?window.location.hash=r.hash:window.history.pushState(null,null,e)}function ot(t){if(t){const e=t[0].type;nt.indexOf(e)>=0&&et[e].forEach((e=>{try{e.apply(this,t)}catch(t){setTimeout((()=>{throw t}))}}))}}let it;function st(){It([],arguments)}function ut(t,e){return function(){const n=window.location.href,r=t.apply(this,arguments),o=window.location.href;return it&&n===o||window.dispatchEvent(function(t,e){let n;try{n=new PopStateEvent("popstate",{state:t})}catch(e){n=document.createEvent("PopStateEvent"),n.initPopStateEvent("popstate",!1,!1,t)}return n.singleSpa=!0,n.singleSpaTrigger=e,n}(window.history.state,e)),r}}let at=null,ct=!1;function lt(t){if(ct)throw Error(l(43,!1));it=!t||!t.hasOwnProperty("urlRerouteOnly")||t.urlRerouteOnly,ct=!0,at=window.history.replaceState,window.addEventListener("hashchange",st),window.addEventListener("popstate",st);const e=window.addEventListener,n=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0)||D(et[t],(t=>t===n)))return e.apply(this,arguments);et[t].push(n)},window.removeEventListener=function(t,e){if(!("function"==typeof e&&nt.indexOf(t)>=0))return n.apply(this,arguments);et[t]=et[t].filter((t=>t!==e))},window.history.pushState=ut(window.history.pushState,"pushState"),window.history.replaceState=ut(at,"replaceState")}function pt(t){const e=document.createElement("a");return e.href=t,e}tt&&(window.singleSpaNavigate?console.warn(l(41,!1)):window.singleSpaNavigate=rt);let ft=!1;function ht(t=window.jQuery){if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ft){const e=t.fn.on,n=t.fn.off;t.fn.on=function(t,n){return mt.call(this,e,window.addEventListener,t,n,arguments)},t.fn.off=function(t,e){return mt.call(this,n,window.removeEventListener,t,e,arguments)},ft=!0}}function mt(t,e,n,r,o){return"string"!=typeof n?t.apply(this,o):(n.split(/\s+/).forEach((t=>{nt.indexOf(t)>=0&&(e(t,r),n=n.replace(t,""))})),""===n.trim()?this:t.apply(this,o))}const dt={};function wt(t){return Promise.resolve().then((()=>{const e=dt[N(t)];if(!e)return t;if(t.status===f)return gt(t,e),t;if(t.status===O)return e.promise.then((()=>t));if(t.status!==w&&t.status!==T)return t;const n=t.status===T?Promise.resolve():X(t,"unload");return t.status=O,n.then((()=>(gt(t,e),t))).catch((n=>(function(t,e,n){delete dt[N(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,u(n,t,P),e.reject(n)}(t,e,n),t)))}))}function gt(t,e){delete dt[N(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=f,e.resolve()}function Et(t,e,n,r){dt[N(t)]={app:t,resolve:n,reject:r},Object.defineProperty(dt[N(t)],"promise",{get:e})}function yt(t){return dt[t]}const vt=[];function Ot(){return vt.filter(A).map(N)}function Tt(){return vt.map(N)}function Pt(t){const e=D(vt,(e=>N(e)===t));return e?e.status:null}let At=!1;function bt(t,e,n,r){const o=function(t,e,n,r){const o={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"==typeof t?(function(t){if(Array.isArray(t)||null===t)throw Error(l(39,!1));const e=["name","app","activeWhen","customProps"],n=Object.keys(t).reduce(((t,n)=>e.indexOf(n)>=0?t:t.concat(n)),[]);if(0!==n.length)throw Error(l(38,!1,e.join(", "),n.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(l(20,!1));if("object"!=typeof t.app&&"function"!=typeof t.app)throw Error(l(20,!1));const r=t=>"string"==typeof t||"function"==typeof t;if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(l(24,!1));if(!Dt(t.customProps))throw Error(l(22,!1))}(t),o.name=t.name,o.loadApp=t.app,o.activeWhen=t.activeWhen,o.customProps=t.customProps):(function(t,e,n,r){if("string"!=typeof t||0===t.length)throw Error(l(20,!1));if(!e)throw Error(l(23,!1));if("function"!=typeof n)throw Error(l(24,!1));if(!Dt(r))throw Error(l(22,!1))}(t,e,n,r),o.name=t,o.loadApp=e,o.activeWhen=n,o.customProps=r),o.loadApp="function"!=typeof(i=o.loadApp)?()=>Promise.resolve(i):i,o.customProps=function(t){return t||{}}(o.customProps),o.activeWhen=function(t){let e=Array.isArray(t)?t:[t];return e=e.map((t=>"function"==typeof t?t:Mt(t))),t=>e.some((e=>e(t)))}(o.activeWhen),o;var i}(t,e,n,r);if(Ct()||At||(At=!0,setTimeout((()=>{Ct()||console.warn(l(1,!1))}),5e3)),-1!==Tt().indexOf(o.name))throw Error(l(21,!1,o.name));vt.push(U({loadErrorTime:null,status:f,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},o)),tt&&(ht(),It())}function Nt(t=window.location){return vt.filter((e=>e.activeWhen(t))).map(N)}function _t(t){if(0===vt.filter((e=>N(e)===t)).length)throw Error(l(25,!1,t));return(tt?St(t,{waitForUnmount:!1}):Promise.resolve()).then((()=>{const e=vt.map(N).indexOf(t);vt.splice(e,1)}))}function St(t,e={waitForUnmount:!1}){if("string"!=typeof t)throw Error(l(26,!1));const n=D(vt,(e=>N(e)===t));if(!n)throw Error(l(27,!1,t));const r=yt(N(n));if(e&&e.waitForUnmount){if(r)return r.promise;{const t=new Promise(((e,r)=>{Et(n,(()=>t),e,r)}));return t}}{let t;return r?(t=r.promise,Ut(n,r.resolve,r.reject)):t=new Promise(((e,r)=>{Et(n,(()=>t),e,r),Ut(n,e,r)})),t}}function Ut(t,e,n){Promise.resolve().then((()=>{if(D(Nt(),(e=>e===N(t))))return $t()})).then((()=>I(t).then(wt).then((()=>{e(),setTimeout((()=>{It()}))})))).catch(n)}function Dt(t){return!t||"function"==typeof t||"object"==typeof t&&null!==t&&!Array.isArray(t)}function Mt(t,e){const n=function(t,e){let n=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(let e=0;e<t.length;e++){const n=t[e];(!r&&":"===n||r&&"/"===n)&&i(e)}return i(t.length),new RegExp(o,"i");function i(i){const s=t.slice(n,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":s,i===t.length)if(r)e&&(o+="$");else{const t=e?"":".*";o="/"===o.charAt(o.length-1)?`${o}${t}$`:`${o}(/${t})?(#.*)?$`}r=!r,n=i}}(t,e);return t=>{let e=t.origin;e||(e=`${t.protocol}//${t.host}`);const r=t.href.replace(e,"").replace(t.search,"").split("?")[0];return n.test(r)}}let Lt=!1,Rt=[],jt=tt&&window.location.href;function $t(){return It()}function It(t=[],e,n=!1){if(Lt)return new Promise(((t,n)=>{Rt.push({resolve:t,reject:n,eventArguments:e})}));const{appsToUnload:r,appsToUnmount:o,appsToLoad:s,appsToMount:u}=function(){const t=[],e=[],n=[],r=[],o=(new Date).getTime();return vt.forEach((i=>{const s=i.status!==P&&b(i);switch(i.status){case T:s&&o-i.loadErrorTime>=200&&n.push(i);break;case f:case h:s&&n.push(i);break;case m:case w:!s&&yt(N(i))?t.push(i):s&&r.push(i);break;case E:s||e.push(i)}})),{appsToUnload:t,appsToUnmount:e,appsToLoad:n,appsToMount:r}}();let a,c=[],p=jt,d=jt=window.location.href;return Ct()?(Lt=!0,a=r.concat(s,o,u),Promise.resolve().then((()=>(A(0===a.length?"before-no-app-change":"before-app-change",O(!0)),A("before-routing-event",O(!0,{cancelNavigation:g})),Promise.all(c).then((n=>{if(n.some((t=>t)))return at.call(window.history,history.state,"",p.substring(location.origin.length)),jt=location.href,Lt=!1,It(t,e,!0);const i=r.map(wt),a=o.map(I).map((t=>t.then(wt))).concat(i),c=Promise.all(a);c.then((()=>{A("before-mount-routing-event",O(!0))}),(t=>{throw t}));const l=s.map((t=>Z(t).then((t=>Gt(t,c))))),f=u.filter((t=>s.indexOf(t)<0)).map((t=>Gt(t,c)));return c.catch((t=>{throw v(),t})).then((()=>(v(),Promise.all(l.concat(f)).catch((e=>{throw t.forEach((t=>t.reject(e))),e})).then(y).then((()=>{}),(t=>{throw t})))))})))))):(a=s,Promise.resolve().then((()=>{const t=s.map(Z);return Promise.all(t).then(v).then((()=>[])).catch((t=>{throw v(),t})).finally((()=>{}))})));function g(t=!0){const e="function"==typeof(null==t?void 0:t.then)?t:Promise.resolve(t);c.push(e.catch((t=>(console.warn(Error(l(42,!1))),console.warn(t),!1))))}function y(){const e=Ot();t.forEach((t=>t.resolve(e)));try{A(0===a.length?"no-app-change":"app-change",O()),A("routing-event",O())}catch(t){setTimeout((()=>{throw t}))}if(Lt=!1,Rt.length>0){const t=Rt;Rt=[],It(t)}return e}function v(){n||(t.forEach((t=>{ot(t.eventArguments)})),ot(e))}function O(t=!1,n){const i={},c={[E]:[],[w]:[],[f]:[],[P]:[]};t?(s.concat(u).forEach(((t,e)=>{h(t,E)})),r.forEach((t=>{h(t,f)})),o.forEach((t=>{h(t,w)}))):a.forEach((t=>{h(t)}));const l={detail:{newAppStatuses:i,appsByNewStatus:c,totalAppChanges:a.length,originalEvent:null==e?void 0:e[0],oldUrl:p,newUrl:d}};return n&&U(l.detail,n),l;function h(t,e){const n=N(t);e=e||Pt(n),i[n]=e,(c[e]=c[e]||[]).push(n)}}function A(t,e){n||window.dispatchEvent(new i(`single-spa:${t}`,e))}}function Gt(t,e){return b(t)?$(t).then((t=>e.then((()=>b(t)?B(t):t)))):e.then((()=>t))}let xt=!1;function Bt(t){xt=!0,tt&&(lt(t),It())}function Ct(){return xt}var Wt={getRawAppData:function(){return[...vt]},reroute:It,NOT_LOADED:f,toLoadPromise:Z,toBootstrapPromise:$,unregisterApplication:_t,getProfilerData:function(){return j}};tt&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Wt)}}]);