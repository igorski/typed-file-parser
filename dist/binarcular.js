module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){e.exports=r(4)},function(e,t){function r(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)}))}}},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t,r){"use strict";e.exports=function(e,t,r,n){try{try{var o;try{o=new window.Blob([e])}catch(t){(o=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(e),o=o.getBlob()}var a=window.URL||window.webkitURL,i=a.createObjectURL(o),u=new window[t](i,r);return a.revokeObjectURL(i),u}catch(n){return new window[t]("data:application/javascript,".concat(encodeURIComponent(e)),r)}}catch(e){if(!n)throw Error("Inline worker is not supported");return new window[t](n,r)}}},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof l?t:l,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=m(i,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f={};function l(){}function p(){}function d(){}var h={};h[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,o)&&(h=y);var b=d.prototype=l.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,u){var c=s(e[o],e,a);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(l).then((function(e){f.value=e,i(f)}),(function(e){return n("throw",e,i,u)}))}u(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function m(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,m(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:I}}function I(){return{value:void 0,done:!0}}return p.prototype=b.constructor=d,d.constructor=p,p.displayName=u(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(w.prototype),w.prototype[a]=function(){return this},e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(b),u(b,i,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";r.r(t),r.d(t,"types",(function(){return y})),r.d(t,"isSupported",(function(){return b})),r.d(t,"parse",(function(){return g})),r.d(t,"seek",(function(){return m})),r.d(t,"fileToByteArray",(function(){return T}));var n=r(0),o=r.n(n),a=r(2),i=r.n(a),u=r(1),c=r.n(u),s=Object.freeze(["CHAR","BYTE","INT8","UINT8","SHORT","INT16","UINT16","INT24","UINT24","INT32","UINT32","LONG","ULONG","FLOAT","FLOAT32","INT64","UINT64","LONGLONG","ULONGLONG","DOUBLE","FLOAT64"].reduce((function(e,t){return e[t]=t,e}),{}));function f(e){var t=0;return Object.values(e).forEach((function(e){var r=l(e),n=p(e);switch(r){case s.CHAR:case s.BYTE:case s.INT8:case s.UINT8:t+=n;break;case s.SHORT:case s.INT16:case s.UINT16:t+=2*n;break;case s.INT24:case s.UINT24:t+=3*n;break;case s.INT32:case s.UINT32:case s.LONG:case s.ULONG:case s.FLOAT:case s.FLOAT32:t+=4*n;break;case s.INT64:case s.UINT64:case s.LONGLONG:case s.ULONGLONG:case s.DOUBLE:case s.FLOAT64:t+=8*n;break;default:throw new Error('Unsupported data type "'.concat(r,'"'))}})),t}var l=function(e){return e.split(/(\[|\|)/)[0]},p=function(e){var t,r;return parseInt(null!==(t=null===(r=e.match(/\d+(?=\])/))||void 0===r?void 0:r[0])&&void 0!==t?t:1)},d=r(3),h=r.n(d),v=function(){return h()('!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=7)}([function(e,r,t){var n=t(3),a=t(4),o=t(5),c=t(6);e.exports=function(e){return n(e)||a(e)||o(e)||c()}},function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},function(e,r){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},function(e,r,t){var n=t(1);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,r){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,r,t){var n=t(1);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,r,t){"use strict";t.r(r);var n=t(2),a=t.n(n),o=t(0),c=t.n(o),u=Object.freeze(["CHAR","BYTE","INT8","UINT8","SHORT","INT16","UINT16","INT24","UINT24","INT32","UINT32","LONG","ULONG","FLOAT","FLOAT32","INT64","UINT64","LONGLONG","ULONGLONG","DOUBLE","FLOAT64"].reduce((function(e,r){return e[r]=r,e}),{}));function i(e){var r=0;return Object.values(e).forEach((function(e){var t=f(e),n=s(e);switch(t){case u.CHAR:case u.BYTE:case u.INT8:case u.UINT8:r+=n;break;case u.SHORT:case u.INT16:case u.UINT16:r+=2*n;break;case u.INT24:case u.UINT24:r+=3*n;break;case u.INT32:case u.UINT32:case u.LONG:case u.ULONG:case u.FLOAT:case u.FLOAT32:r+=4*n;break;case u.INT64:case u.UINT64:case u.LONGLONG:case u.ULONGLONG:case u.DOUBLE:case u.FLOAT64:r+=8*n;break;default:throw new Error(\'Unsupported data type "\'.concat(t,\'"\'))}})),r}var f=function(e){return e.split(/(\\[|\\|)/)[0]},s=function(e){var r,t;return parseInt(null!==(r=null===(t=e.match(/\\d+(?=\\])/))||void 0===t?void 0:t[0])&&void 0!==r?r:1)},l=[u.FLOAT,u.FLOAT32,u.DOUBLE,u.FLOAT64],O=void 0;var b=void 0;function v(e,r,t){var n={value:void 0,offset:t},a=f(e),o=s(e);if(t+(o-1)>=r.length)return n;var i=function(e){if(e.includes("|BE"))return!1;if(e.includes("|LE"))return!0;return function(){if(void 0===O){var e=new ArrayBuffer(4),r=new Uint32Array(e),t=new Uint8Array(e);r[0]=3735928559,O=239===t[0]}return O}()}(e),v=l.includes(a),p=v?(void 0===b&&(b=new DataView(new Uint8Array(4).buffer)),b):null;switch(a){default:return n;case u.CHAR:n.value=1===o?String.fromCharCode(r[t]):c()(r.slice(t,t+o)).map((function(e){return String.fromCharCode(e)})).join(""),n.offset+=o;break;case u.BYTE:case u.INT8:case u.UINT8:n.value=1===o?r[t]:c()(r.slice(t,t+o)),n.offset+=o;break;case u.SHORT:case u.INT16:case u.UINT16:n.value=d(t,o,2,(function(e){return i?r[e+1]<<8|r[e]:r[e]<<8|r[e+1]})),n.offset+=2*o;break;case u.INT24:case u.UINT24:n.value=d(t,o,3,(function(e){return i?r[e+2]<<16|r[e+1]<<8|r[e]:r[e]<<16|r[e+1]<<8|r[e+2]})),n.offset+=3*o;break;case u.INT32:case u.UINT32:case u.LONG:case u.ULONG:case u.FLOAT:case u.FLOAT32:n.value=d(t,o,4,(function(e){var t;return t=i?r[e+3]<<24|r[e+2]<<16|r[e+1]<<8|r[e]:r[e]<<24|r[e+1]<<16|r[e+2]<<8|r[e+3],v?(p.setInt32(0,t),p.getFloat32()):t})),n.offset+=4*o;break;case u.INT64:case u.UINT64:case u.LONGLONG:case u.ULONGLONG:case u.DOUBLE:case u.FLOAT64:n.value=d(t,o,8,(function(e){var t=r.slice(e,e+8),n=new DataView(t.buffer),a=n.getUint32(0,O)+Math.pow(2,32)*n.getUint32(4,O);return v?(n.setBigInt64(0,BigInt(a)),n.getFloat64()):a})),n.offset+=8*o}return n}function d(e,r,t,n){for(var a=r>1,o=e+r*t,c=a?[]:0,u=e;u<o;u+=t){var i=n(u);a?c.push(i):c=i}return c}function p(e,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.length,a=r.length,o=t;o<n;++o)if(e[o]===r[0]){var c=e.slice(o,o+a);if(c.every((function(e,t){return e===r[t]})))return o}return 1/0}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}self.addEventListener("message",(function(e){var r=e.data,t=r.byteArray;switch(r.cmd){default:throw new Error("unknown cmd");case"parse":self.postMessage(T(T({},function(e,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.length,a=Object.keys(r),o=a.length,c=0,u={data:{},end:t,error:!1},f=Math.max(0,t);f<n&&c<o;){var s=a[c],l=r[s],O=v(l,e,f);if(void 0===O.value)return u.error=!0,u;u.data[s]=O.value,f=O.offset,++c}return u.end=f,u.error=u.end!==t+i(r),u}(t,r.structureDefinition,r.offset)),{},{byteArray:t}),[t.buffer]);break;case"seek":self.postMessage({offset:p(t,r.compareByteArray,r.offset),byteArray:t},[t.buffer])}}),!1)}]);',"Worker",void 0,void 0)},y=s;function b(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return(!e||"function"==typeof t.BigInt)&&["FileReader","atob","Uint8Array","DataView"].every((function(e){return"function"==typeof t[e]}))}function g(e){return w.apply(this,arguments)}function w(){return(w=c()(o.a.mark((function e(t){var r,n,a,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.length>1&&void 0!==u[1]?u[1]:{},n=u.length>2&&void 0!==u[2]?u[2]:0,a=t,e.prev=3,"string"!=typeof t){e.next=8;break}a=Uint8Array.from(window.atob(t.split("base64,").pop()),(function(e){return e.charCodeAt(0)})),e.next=12;break;case 8:if(!(t instanceof File||t instanceof Blob)){e.next=12;break}return e.next=11,T(t,n,f(r));case 11:a=e.sent;case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(3);case 16:if(a instanceof Uint8Array){e.next=18;break}throw new Error("input should be either String, File, Blob or Uint8Array got ".concat(i()(t)," instead"));case 18:return e.abrupt("return",new Promise((function(e,t){N(e,t,{cmd:"parse",byteArray:a,structureDefinition:r,offset:n},[a.buffer])})));case 19:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}function m(e,t){return O.apply(this,arguments)}function O(){return(O=c()(o.a.mark((function e(t,r){var n,a,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:0,a="string"==typeof r?new Uint8Array(r.split("").map((function(e){return e.charCodeAt(0)}))):r,e.abrupt("return",new Promise((function(e,r){N(e,r,{cmd:"seek",byteArray:t,compareByteArray:a,offset:n},[t.buffer])})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return L.apply(this,arguments)}function L(){return(L=c()(o.a.mark((function e(t){var r,n,a,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:0,n=i.length>2&&void 0!==i[2]?i[2]:t.size,a=new FileReader,e.abrupt("return",new Promise((function(e,o){a.onload=function(t){var r=t.target;e(new Uint8Array(r.result))},a.onerror=o,a.readAsArrayBuffer(t.slice(r,Math.min(t.size,r+n)))})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,r,n){var o=new v;o.onmessage=function(t){var r=t.data;e(r),o.terminate()},o.onerror=function(e){t(e),o.terminate()},o.postMessage(r,n)}}]);