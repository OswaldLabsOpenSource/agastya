!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var o in e)("object"==typeof exports?exports:t)[o]=e[o]}}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var r=o(e(1)),u=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return new Promise(function(e,o){var r;if(window.agastya&&window.agastya.ready)return"function"==typeof window.agastya[t]?e((r=window.agastya)[t].apply(r,n)):o();var u=window.setInterval(function(){var r;if(window.agastya&&window.agastya.ready)return window.clearInterval(u),"function"==typeof window.agastya[t]?e((r=window.agastya)[t].apply(r,n)):o()},100)})},i=function(){function t(t,n){void 0===n&&(n=!1),r.default("https://"+(n?"staging-":"")+"agastya-loader.oswaldlabs.com/"+t+".js",function(){})}return t.prototype.open=function(t){return u("open",t)},t.prototype.close=function(){return u("close")},t.prototype.toggle=function(){return u("toggle")},t.prototype.navigate=function(t){return u("navigate",t)},t.prototype.unappend=function(){return u("unappend")},t.prototype.on=function(t,n){return u("on",t,n)},t.prototype.off=function(t){return u("off",t)},t.prototype.$emit=function(t,n){return u("$emit",t,n)},t.prototype.secureTrack=function(t){return u("secureTrack",t)},t.prototype.getDetails=function(){return u("getDetails")},t.prototype.getUserInfo=function(){return u("getUserInfo")},t.prototype.api=function(t,n){return u("api",t,n)},t.prototype.stopIntegration=function(t){return u("stopIntegration",t)},t.prototype.updateIntegration=function(t){return u("updateIntegration",t)},t}();n.default=i,window.AgastyaModule=i},function(t,n,e){var o,r,u;
/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
u=function(){var t,n,e=document,o=e.getElementsByTagName("head")[0],r=!1,u="push",i="readyState",a="onreadystatechange",f={},c={},p={},l={};function s(t,n){for(var e=0,o=t.length;e<o;++e)if(!n(t[e]))return r;return 1}function d(t,n){s(t,function(t){return n(t),1})}function y(n,e,o){n=n[u]?n:[n];var r=e&&e.call,i=r?e:o,a=r?n.join(""):e,v=n.length;function w(t){return t.call?t():f[t]}function m(){if(!--v)for(var t in f[a]=1,i&&i(),p)s(t.split("|"),w)&&!d(p[t],w)&&(p[t]=[])}return setTimeout(function(){d(n,function n(e,o){return null===e?m():(o||/^https?:\/\//.test(e)||!t||(e=-1===e.indexOf(".js")?t+e+".js":t+e),l[e]?(a&&(c[a]=1),2==l[e]?m():setTimeout(function(){n(e,!0)},0)):(l[e]=1,a&&(c[a]=1),void g(e,m)))})},0),y}function g(t,r){var u,f=e.createElement("script");f.onload=f.onerror=f[a]=function(){f[i]&&!/^c|loade/.test(f[i])||u||(f.onload=f[a]=null,u=1,l[t]=2,r())},f.async=1,f.src=n?t+(-1===t.indexOf("?")?"?":"&")+n:t,o.insertBefore(f,o.lastChild)}return y.get=g,y.order=function(t,n,e){!function o(r){r=t.shift(),t.length?y(r,o):y(r,n,e)}()},y.path=function(n){t=n},y.urlArgs=function(t){n=t},y.ready=function(t,n,e){t=t[u]?t:[t];var o,r=[];return!d(t,function(t){f[t]||r[u](t)})&&s(t,function(t){return f[t]})?n():(o=t.join("|"),p[o]=p[o]||[],p[o][u](n),e&&e(r)),y},y.done=function(t){y([null],t)},y},t.exports?t.exports=u():void 0===(r="function"==typeof(o=u)?o.call(n,e,n,t):o)||(t.exports=r)}])});