System.register([],(function(n,e){return{execute:function(){n((()=>{"use strict";var n={d:(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},e={};n.r(e),n.d(e,{dispatchActionableNotificationShown:()=>h,dispatchConnectivityChanged:()=>i,dispatchNotificationShown:()=>f,dispatchPrecacheStaticDependencies:()=>a,dispatchSnackbarShown:()=>l,dispatchToastShown:()=>b,subscribeActionableNotificationShown:()=>E,subscribeConnectivity:()=>r,subscribeConnectivityChanged:()=>o,subscribeNotificationShown:()=>p,subscribePrecacheStaticDependencies:()=>d,subscribeSnackbarShown:()=>S,subscribeToastShown:()=>m});var t="openmrs:connectivity-changed";function i(n){window.dispatchEvent(new CustomEvent(t,{detail:{online:n}}))}function o(n){if(!window.offlineEnabled)return function(){};var e=function(e){return n(e.detail)};return window.addEventListener(t,e),function(){return window.removeEventListener(t,e)}}function r(n){return n({online:!window.offlineEnabled||navigator.onLine}),o(n)}var c="openmrs:precache-static-dependencies";function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.dispatchEvent(new CustomEvent(c,{detail:n}))}function d(n){var e=function(e){return n(e.detail)};return window.addEventListener(c,e),function(){return window.removeEventListener(c,e)}}var u="openmrs:notification-shown",s="openmrs:actionable-notification-shown",w="openmrs:toast-shown",v="openmrs:snack-bar-shown";function f(n){window.dispatchEvent(new CustomEvent(u,{detail:n}))}function h(n){window.dispatchEvent(new CustomEvent(s,{detail:n}))}function l(n){window.dispatchEvent(new CustomEvent(v,{detail:n}))}function b(n){window.dispatchEvent(new CustomEvent(w,{detail:n}))}function p(n){var e=function(e){return n(e.detail)};return window.addEventListener(u,e),function(){return window.removeEventListener(u,e)}}function E(n){var e=function(e){return n(e.detail)};return window.addEventListener(s,e),function(){return window.removeEventListener(s,e)}}function m(n){var e=function(e){return n(e.detail)};return window.addEventListener(w,e),function(){return window.removeEventListener(w,e)}}function S(n){var e=function(e){return n(e.detail)};return window.addEventListener(v,e),function(){return window.removeEventListener(v,e)}}return e})())}}}));
//# sourceMappingURL=openmrs-esm-globals.js.map