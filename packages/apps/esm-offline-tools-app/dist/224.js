/*! For license information please see 224.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_offline_tools_app=globalThis.webpackChunk_openmrs_esm_offline_tools_app||[]).push([[224],{8696:(e,n,t)=>{t.d(n,{CQ:()=>u});var r,i=t(5776),o=t.n(i),a=t(8854);const u=o().forwardRef((function(e,n){let{children:t,size:i=16,...u}=e;return o().createElement(a.Z,{width:i,height:i,ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...u},r||(r=o().createElement("path",{d:"M12 10H6.78A11 11 0 0127 16h2A13 13 0 006 7.68V4H4v8h8zM20 22h5.22A11 11 0 015 16H3a13 13 0 0023 8.32V28h2V20H20z"})),t)}))},361:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},9233:e=>{function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,i=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,i,o=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],a=i[3];if(!a)return o;if("function"==typeof btoa){var u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),c="/*# ".concat(s," */"),f=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(f).concat([c]).join("\n")}return[o].join("\n")}},487:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],u=0;u<e.length;u++){var s=e[u],c=r.base?s[0]+r.base:s[0],f=o[c]||0,d="".concat(c," ").concat(f);o[c]=f+1;var l=t(d),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(v);else{var p=i(v,r);r.byIndex=u,n.splice(u,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var u=t(o[a]);n[u].references--}for(var s=r(e,i),c=0;c<o.length;c++){var f=t(o[c]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}o=s}}},2052:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},1469:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},4010:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},631:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},9329:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},2173:(e,n,t)=>{var r=t(5776),i="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},o=r.useState,a=r.useEffect,u=r.useLayoutEffect,s=r.useDebugValue;function c(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=o({inst:{value:t,getSnapshot:n}}),i=r[0].inst,f=r[1];return u((function(){i.value=t,i.getSnapshot=n,c(i)&&f({inst:i})}),[e,t,n]),a((function(){return c(i)&&f({inst:i}),e((function(){c(i)&&f({inst:i})}))}),[e]),s(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},1374:(e,n,t)=>{e.exports=t(2173)},1272:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(1758);const i=function(e){return e!=e},o=function(e,n,t){return n==n?function(e,n,t){for(var r=t-1,i=e.length;++r<i;)if(e[r]===n)return r;return-1}(e,n,t):(0,r.Z)(e,i,t)}},6653:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8291);const i=function(e,n,t){var i=e.length;return t=void 0===t?i:t,!n&&t>=i?e:(0,r.Z)(e,n,t)}},143:(e,n,t)=>{t.d(n,{Z:()=>i});var r=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");const i=function(e){return r.test(e)}},1654:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(143),i="\\ud800-\\udfff",o="["+i+"]",a="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",u="\\ud83c[\\udffb-\\udfff]",s="[^"+i+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",d="(?:"+a+"|"+u+")?",l="[\\ufe0e\\ufe0f]?",v=l+d+"(?:\\u200d(?:"+[s,c,f].join("|")+")"+l+d+")*",p="(?:"+[s+a+"?",a,c,f,o].join("|")+")",h=RegExp(u+"(?="+u+")|"+p+v,"g");const g=function(e){return(0,r.Z)(e)?function(e){return e.match(h)||[]}(e):function(e){return e.split("")}(e)}},7744:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(3130),i=t(6653),o=t(143),a=t(1654);const u=function(e){e=(0,r.Z)(e);var n=(0,o.Z)(e)?(0,a.Z)(e):void 0,t=n?n[0]:e.charAt(0),u=n?(0,i.Z)(n,1).join(""):e.slice(1);return t.toUpperCase()+u},s=function(e){return u((0,r.Z)(e).toLowerCase())}},4030:(e,n,t)=>{t.d(n,{Z:()=>A});var r=t(1890),i=t(1250),o=t(8670);const a=function(e,n,t){(void 0!==t&&!(0,o.Z)(e[n],t)||void 0===t&&!(n in e))&&(0,i.Z)(e,n,t)},u=function(e,n,t){for(var r=-1,i=Object(e),o=t(e),a=o.length;a--;){var u=o[++r];if(!1===n(i[u],u,i))break}return e};var s=t(9053),c=t(9178),f=t(7855),d=t(1880),l=t(4996),v=t(6575),p=t(6905),h=t(4897);var g=t(5008),m=t(3200),Z=t(7275),E=t(3862),y=t(8485);const b=function(e,n){if(("constructor"!==n||"function"!=typeof e[n])&&"__proto__"!=n)return e[n]};var w=t(3617),S=t(9809);const R=function(e,n,t,r,i,o,u){var R,C=b(e,t),U=b(n,t),T=u.get(U);if(T)a(e,t,T);else{var _=o?o(C,U,t+"",e,n,u):void 0,V=void 0===_;if(V){var A=(0,v.Z)(U),I=!A&&(0,g.Z)(U),L=!A&&!I&&(0,y.Z)(U);_=U,A||I||L?(0,v.Z)(C)?_=C:(R=C,(0,h.Z)(R)&&(0,p.Z)(R)?_=(0,f.Z)(C):I?(V=!1,_=(0,s.Z)(U,!0)):L?(V=!1,_=(0,c.Z)(U,!0)):_=[]):(0,E.Z)(U)||(0,l.Z)(U)?(_=C,(0,l.Z)(C)?_=function(e){return(0,w.Z)(e,(0,S.Z)(e))}(C):(0,Z.Z)(C)&&!(0,m.Z)(C)||(_=(0,d.Z)(U))):V=!1}V&&(u.set(U,_),i(_,U,r,o,u),u.delete(U)),a(e,t,_)}},C=function e(n,t,i,o,s){n!==t&&u(t,(function(u,c){if(s||(s=new r.Z),(0,Z.Z)(u))R(n,t,c,i,e,o,s);else{var f=o?o(b(n,c),u,c+"",n,t,s):void 0;void 0===f&&(f=u),a(n,c,f)}}),S.Z)};var U=t(1116),T=t(6934),_=t(135);var V=t(5313);const A=(I=function(e,n,t){C(e,n,t)},L=function(e,n){var t=-1,r=n.length,i=r>1?n[r-1]:void 0,a=r>2?n[2]:void 0;for(i=I.length>3&&"function"==typeof i?(r--,i):void 0,a&&function(e,n,t){if(!(0,Z.Z)(t))return!1;var r=typeof n;return!!("number"==r?(0,p.Z)(t)&&(0,V.Z)(n,t.length):"string"==r&&n in t)&&(0,o.Z)(t[n],e)}(n[0],n[1],a)&&(i=r<3?void 0:i,r=1),e=Object(e);++t<r;){var u=n[t];u&&I(e,u,t)}return e},(0,_.Z)((0,T.Z)(L,x,U.Z),L+""));var I,L,x},3262:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(4157),i=t(6653),o=t(1272);var a=t(1654),u=t(3130),s=t(3714);const c=function(e,n,t){if((e=(0,u.Z)(e))&&(t||void 0===n))return e.slice(0,(0,s.Z)(e)+1);if(!e||!(n=(0,r.Z)(n)))return e;var c=(0,a.Z)(e),f=function(e,n){for(var t=e.length;t--&&(0,o.Z)(n,e[t],0)>-1;);return t}(c,(0,a.Z)(n))+1;return(0,i.Z)(c,0,f).join("")}},7216:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7693),i=t(1272);const o=function(e,n){return!(null==e||!e.length)&&(0,i.Z)(e,n,0)>-1},a=function(e,n,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(n,e[r]))return!0;return!1};var u=t(2248),s=t(4458);var c=t(789);const f=s.Z&&1/(0,c.Z)(new s.Z([,-0]))[1]==1/0?function(e){return new s.Z(e)}:function(){},d=function(e){return e&&e.length?function(e,n,t){var i=-1,s=o,d=e.length,l=!0,v=[],p=v;if(t)l=!1,s=a;else if(d>=200){var h=n?null:f(e);if(h)return(0,c.Z)(h);l=!1,s=u.Z,p=new r.Z}else p=n?[]:v;e:for(;++i<d;){var g=e[i],m=n?n(g):g;if(g=t||0!==g?g:0,l&&m==m){for(var Z=p.length;Z--;)if(p[Z]===m)continue e;n&&p.push(m),v.push(g)}else s(p,m,t)||(p!==v&&p.push(m),v.push(g))}return v}(e):[]}},4126:(e,n,t)=>{t.d(n,{ZP:()=>s});var r=t(5776),i=t(1374),o=t(7381);const a=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((n=>{e.status="fulfilled",e.value=n}),(n=>{e.status="rejected",e.reason=n})),e)}),u={dedupe:!0},s=(o.OBJECT.defineProperty(o.SWRConfig,"defaultValue",{value:o.defaultConfig}),(0,o.withArgs)(((e,n,t)=>{const{cache:s,compare:c,suspense:f,fallbackData:d,revalidateOnMount:l,revalidateIfStale:v,refreshInterval:p,refreshWhenHidden:h,refreshWhenOffline:g,keepPreviousData:m}=t,[Z,E,y,b]=o.SWRGlobalState.get(s),[w,S]=(0,o.serialize)(e),R=(0,r.useRef)(!1),C=(0,r.useRef)(!1),U=(0,r.useRef)(w),T=(0,r.useRef)(n),_=(0,r.useRef)(t),V=()=>_.current,A=()=>V().isVisible()&&V().isOnline(),[I,L,x,O]=(0,o.createCacheHelper)(s,w),j=(0,r.useRef)({}).current,k=(0,o.isUndefined)(d)?t.fallback[w]:d,N=(e,n)=>{for(const t in j){const r=t;if("data"===r){if(!c(e[r],n[r])){if(!(0,o.isUndefined)(e[r]))return!1;if(!c(J,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},M=(0,r.useMemo)((()=>{const e=!!w&&!!n&&((0,o.isUndefined)(l)?!V().isPaused()&&!f&&(!!(0,o.isUndefined)(v)||v):l),t=n=>{const t=(0,o.mergeObjects)(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t},r=I(),i=O(),a=t(r),u=r===i?a:t(i);let s=a;return[()=>{const e=t(I());return N(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>u]}),[s,w]),D=(0,i.useSyncExternalStore)((0,r.useCallback)((e=>x(w,((n,t)=>{N(t,n)||e()}))),[s,w]),M[0],M[1]),F=!R.current,H=Z[w]&&Z[w].length>0,P=D.data,z=(0,o.isUndefined)(P)?k:P,W=D.error,G=(0,r.useRef)(z),J=m?(0,o.isUndefined)(P)?G.current:P:z,q=!(H&&!(0,o.isUndefined)(W))&&(F&&!(0,o.isUndefined)(l)?l:!V().isPaused()&&(f?!(0,o.isUndefined)(z)&&v:(0,o.isUndefined)(z)||v)),B=!!(w&&n&&F&&q),Y=(0,o.isUndefined)(D.isValidating)?B:D.isValidating,Q=(0,o.isUndefined)(D.isLoading)?B:D.isLoading,$=(0,r.useCallback)((async e=>{const n=T.current;if(!w||!n||C.current||V().isPaused())return!1;let r,i,a=!0;const u=e||{},s=!y[w]||!u.dedupe,f=()=>o.IS_REACT_LEGACY?!C.current&&w===U.current&&R.current:w===U.current,d={isValidating:!1,isLoading:!1},l=()=>{L(d)},v=()=>{const e=y[w];e&&e[1]===i&&delete y[w]},p={isValidating:!0};(0,o.isUndefined)(I().data)&&(p.isLoading=!0);try{if(s&&(L(p),t.loadingTimeout&&(0,o.isUndefined)(I().data)&&setTimeout((()=>{a&&f()&&V().onLoadingSlow(w,t)}),t.loadingTimeout),y[w]=[n(S),(0,o.getTimestamp)()]),[r,i]=y[w],r=await r,s&&setTimeout(v,t.dedupingInterval),!y[w]||y[w][1]!==i)return s&&f()&&V().onDiscarded(w),!1;d.error=o.UNDEFINED;const e=E[w];if(!(0,o.isUndefined)(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return l(),s&&f()&&V().onDiscarded(w),!1;const u=I().data;d.data=c(u,r)?u:r,s&&f()&&V().onSuccess(r,w,t)}catch(e){v();const n=V(),{shouldRetryOnError:t}=n;n.isPaused()||(d.error=e,s&&f()&&(n.onError(e,w,n),(!0===t||(0,o.isFunction)(t)&&t(e))&&A()&&n.onErrorRetry(e,w,n,(e=>{const n=Z[w];n&&n[0]&&n[0](o.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,l(),!0}),[w,s]),K=(0,r.useCallback)(((...e)=>(0,o.internalMutate)(s,U.current,...e)),[]);if((0,o.useIsomorphicLayoutEffect)((()=>{T.current=n,_.current=t,(0,o.isUndefined)(P)||(G.current=P)})),(0,o.useIsomorphicLayoutEffect)((()=>{if(!w)return;const e=$.bind(o.UNDEFINED,u);let n=0;const t=(0,o.subscribeCallback)(w,Z,((t,r={})=>{if(t==o.revalidateEvents.FOCUS_EVENT){const t=Date.now();V().revalidateOnFocus&&t>n&&A()&&(n=t+V().focusThrottleInterval,e())}else if(t==o.revalidateEvents.RECONNECT_EVENT)V().revalidateOnReconnect&&A()&&e();else{if(t==o.revalidateEvents.MUTATE_EVENT)return $();if(t==o.revalidateEvents.ERROR_REVALIDATE_EVENT)return $(r)}}));return C.current=!1,U.current=w,R.current=!0,L({_k:S}),q&&((0,o.isUndefined)(z)||o.IS_SERVER?e():(0,o.rAF)(e)),()=>{C.current=!0,t()}}),[w]),(0,o.useIsomorphicLayoutEffect)((()=>{let e;function n(){const n=(0,o.isFunction)(p)?p(I().data):p;n&&-1!==e&&(e=setTimeout(t,n))}function t(){I().error||!h&&!V().isVisible()||!g&&!V().isOnline()?n():$(u).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[p,h,g,w]),(0,r.useDebugValue)(J),f&&(0,o.isUndefined)(z)&&w){if(!o.IS_REACT_LEGACY&&o.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");T.current=n,_.current=t,C.current=!1;const e=b[w];if(!(0,o.isUndefined)(e)){const n=K(e);a(n)}if(!(0,o.isUndefined)(W))throw W;{const e=$(u);(0,o.isUndefined)(J)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:K,get data(){return j.data=!0,J},get error(){return j.error=!0,W},get isValidating(){return j.isValidating=!0,Y},get isLoading(){return j.isLoading=!0,Q}}})))}}]);