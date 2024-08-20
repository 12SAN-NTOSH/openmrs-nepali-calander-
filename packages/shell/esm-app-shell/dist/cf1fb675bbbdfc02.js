/*! For license information please see cf1fb675bbbdfc02.js.LICENSE.txt */
"use strict";(self.webpackChunk_openmrs_esm_app_shell=self.webpackChunk_openmrs_esm_app_shell||[]).push([[187],{55956:(r,t,n)=>{n.d(t,{y:()=>h});var e=n(49250),o=n(87705),s=n(25722),i=n(69771);var u=n(75754),c=n(71645),a=n(48561),h=function(){var r=function(r){this._isScalar=!1,r&&(this._subscribe=r)};return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(r,t,n){var e=this.operator,u=function(r,t,n){if(r){if(e=r,null!=(u=o.L)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](e):e instanceof u)return r;if(r[s.b])return r[s.b]()}var e,u;return r||t||n?new o.L(r,t,n):new o.L(i.c)}(r,t,n);if(e?u.add(e.call(u,this.source)):u.add(this.source||a.v.useDeprecatedSynchronousErrorHandling&&!u.syncErrorThrowable?this._subscribe(u):this._trySubscribe(u)),a.v.useDeprecatedSynchronousErrorHandling&&u.syncErrorThrowable&&(u.syncErrorThrowable=!1,u.syncErrorThrown))throw u.syncErrorValue;return u},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){a.v.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=t),(0,e._)(r)?r.error(t):console.warn(t)}},r.prototype.forEach=function(r,t){var n=this;return new(t=p(t))((function(t,e){var o;o=n.subscribe((function(t){try{r(t)}catch(r){e(r),o&&o.unsubscribe()}}),e,t)}))},r.prototype._subscribe=function(r){var t=this.source;return t&&t.subscribe(r)},r.prototype[u.L]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return 0===r.length?this:(0,c.U)(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=p(r))((function(r,n){var e;t.subscribe((function(r){return e=r}),(function(r){return n(r)}),(function(){return r(e)}))}))},r.create=function(t){return new r(t)},r}();function p(r){if(r||(r=a.v.Promise||Promise),!r)throw new Error("no Promise impl found");return r}},69771:(r,t,n)=>{n.d(t,{c:()=>s});var e=n(48561),o=n(35502),s={closed:!0,next:function(r){},error:function(r){if(e.v.useDeprecatedSynchronousErrorHandling)throw r;(0,o.z)(r)},complete:function(){}}},87705:(r,t,n)=>{n.d(t,{L:()=>h});var e=n(84411),o=n(59155),s=n(69771),i=n(63586),u=n(25722),c=n(48561),a=n(35502),h=function(r){function t(n,e,o){var i,u,c=r.call(this)||this;switch(c.syncErrorValue=null,c.syncErrorThrown=!1,c.syncErrorThrowable=!1,c.isStopped=!1,arguments.length){case 0:c.destination=s.c;break;case 1:if(!n){c.destination=s.c;break}if("object"==typeof n){i=n,(null!=(u=t)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](i):i instanceof u)?(c.syncErrorThrowable=n.syncErrorThrowable,c.destination=n,n.add(c)):(c.syncErrorThrowable=!0,c.destination=new p(c,n));break}default:c.syncErrorThrowable=!0,c.destination=new p(c,n,e,o)}return c}return e.ZT(t,r),t.prototype[u.b]=function(){return this},t.create=function(r,n,e){var o=new t(r,n,e);return o.syncErrorThrowable=!1,o},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},t}(i.w),p=function(r){var t=function(t,n,e,i){var u,c=r.call(this)||this;c._parentSubscriber=t;var a=c;return(0,o.m)(n)?u=n:n&&(u=n.next,e=n.error,i=n.complete,n!==s.c&&(a=Object.create(n),(0,o.m)(a.unsubscribe)&&c.add(a.unsubscribe.bind(a)),a.unsubscribe=c.unsubscribe.bind(c))),c._context=a,c._next=u,c._error=e,c._complete=i,c};return e.ZT(t,r),t.prototype.next=function(r){if(!this.isStopped&&this._next){var t=this._parentSubscriber;c.v.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},t.prototype.error=function(r){if(!this.isStopped){var t=this._parentSubscriber,n=c.v.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=r,t.syncErrorThrown=!0):(0,a.z)(r),this.unsubscribe();else{if(this.unsubscribe(),n)throw r;(0,a.z)(r)}}},t.prototype.complete=function(){var r=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return r._complete.call(r._context)};c.v.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(r,t){try{r.call(this._context,t)}catch(r){if(this.unsubscribe(),c.v.useDeprecatedSynchronousErrorHandling)throw r;(0,a.z)(r)}},t.prototype.__tryOrSetError=function(r,t,n){if(!c.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return c.v.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=t,r.syncErrorThrown=!0,!0):((0,a.z)(t),!0)}return!1},t.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},t}(h)},63586:(r,t,n)=>{n.d(t,{w:()=>c});var e=n(28703),o=n(65573),s=n(59155),i=n(99985);function u(r,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](r):r instanceof t}var c=function(){var r,t=function(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)};return t.prototype.unsubscribe=function(){var r;if(!this.closed){var n=this,c=n._parentOrParents,h=n._ctorUnsubscribe,p=n._unsubscribe,f=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,u(c,t))c.remove(this);else if(null!==c)for(var b=0;b<c.length;++b)c[b].remove(this);if((0,s.m)(p)){h&&(this._unsubscribe=void 0);try{p.call(this)}catch(t){r=u(t,i.B)?a(t.errors):[t]}}if((0,e.k)(f)){b=-1;for(var l=f.length;++b<l;){var y=f[b];if((0,o.K)(y))try{y.unsubscribe()}catch(t){r=r||[],u(t,i.B)?r=r.concat(a(t.errors)):r.push(t)}}}if(r)throw new i.B(r)}},t.prototype.add=function(r){var n,e=r;if(!r)return t.EMPTY;switch(void 0===r?"undefined":(n=r)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n){case"function":e=new t(r);case"object":if(e===this||e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!u(e,t)){var o=e;(e=new t)._subscriptions=[o]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var s=e._parentOrParents;if(null===s)e._parentOrParents=this;else if(u(s,t)){if(s===this)return e;e._parentOrParents=[s,this]}else{if(-1!==s.indexOf(this))return e;s.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[e]:i.push(e),e},t.prototype.remove=function(r){var t=this._subscriptions;if(t){var n=t.indexOf(r);-1!==n&&t.splice(n,1)}},t.EMPTY=((r=new t).closed=!0,r),t}();function a(r){return r.reduce((function(r,t){return r.concat(u(t,i.B)?t.errors:t)}),[])}},48561:(r,t,n)=>{n.d(t,{v:()=>o});var e=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack,e=r},get useDeprecatedSynchronousErrorHandling(){return e}}},29272:(r,t,n)=>{n.d(t,{E:()=>o,c:()=>s});var e=n(55956),o=new e.y((function(r){return r.complete()}));function s(r){return r?function(r){return new e.y((function(t){return r.schedule((function(){return t.complete()}))}))}(r):o}},52087:(r,t,n)=>{n.d(t,{U:()=>s});var e=n(84411),o=n(87705);function s(r,t){return function(n){if("function"!=typeof r)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new i(r,t))}}var i=function(){var r=function(r,t){this.project=r,this.thisArg=t};return r.prototype.call=function(r,t){return t.subscribe(new u(r,this.project,this.thisArg))},r}(),u=function(r){var t=function(t,n,e){var o=r.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=e||o,o};return e.ZT(t,r),t.prototype._next=function(r){var t;try{t=this.project.call(this.thisArg,r,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)},t}(o.L)},75754:(r,t,n)=>{n.d(t,{L:()=>e});var e=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()},25722:(r,t,n)=>{n.d(t,{b:()=>e});var e=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},63265:(r,t,n)=>{n.d(t,{W:()=>e});var e=function(){var r=function(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this};return r.prototype=Object.create(Error.prototype),r}()},99985:(r,t,n)=>{n.d(t,{B:()=>e});var e=function(){var r=function(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this};return r.prototype=Object.create(Error.prototype),r}()},49250:(r,t,n)=>{n.d(t,{_:()=>o});var e=n(87705);function o(r){for(;r;){var t=r,n=t.closed,o=t.destination,s=t.isStopped;if(n||s)return!1;r=o&&(i=o,null!=(u=e.L)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](i):i instanceof u)?o:null}var i,u;return!0}},35502:(r,t,n)=>{function e(r){setTimeout((function(){throw r}),0)}n.d(t,{z:()=>e})},43850:(r,t,n)=>{function e(r){return r}n.d(t,{y:()=>e})},28703:(r,t,n)=>{n.d(t,{k:()=>e});var e=function(){return Array.isArray||function(r){return r&&"number"==typeof r.length}}()},59155:(r,t,n)=>{function e(r){return"function"==typeof r}n.d(t,{m:()=>e})},65573:(r,t,n)=>{function e(r){return null!==r&&"object"==typeof r}n.d(t,{K:()=>e})},71645:(r,t,n)=>{n.d(t,{U:()=>s,z:()=>o});var e=n(43850);function o(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return s(r)}function s(r){return 0===r.length?e.y:1===r.length?r[0]:function(t){return r.reduce((function(r,t){return t(r)}),t)}}},84411:(r,t,n)=>{n.d(t,{ZT:()=>o});var e=function(r,t){return e=Object.setPrototypeOf||(n={__proto__:[]},(null!=(o=Array)&&"undefined"!=typeof Symbol&&o[Symbol.hasInstance]?!!o[Symbol.hasInstance](n):n instanceof o)&&function(r,t){r.__proto__=t})||function(r,t){for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n])},e(r,t);var n,o};function o(r,t){var n=function(){this.constructor=r};e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}}]);