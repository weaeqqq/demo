System.register(["./index-legacy-CwOYnrgk.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.u}],execute:function(){function t(e,t){return function(){return e.apply(t,arguments)}}const{toString:r}=Object.prototype,{getPrototypeOf:o}=Object,s=(i=Object.create(null),e=>{const t=r.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())});var i;const a=e=>(e=e.toLowerCase(),t=>s(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined"),f=a("ArrayBuffer"),d=c("string"),p=c("function"),h=c("number"),m=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==s(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=a("Date"),b=a("File"),E=a("Blob"),w=a("FileList"),O=a("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function R(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,T=e=>!l(e)&&e!==A,j=(v="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>v&&e instanceof v);var v;const N=a("HTMLFormElement"),x=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),C=a("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},_="abcdefghijklmnopqrstuvwxyz",F="0123456789",U={DIGIT:F,ALPHA:_,ALPHA_DIGIT:_+_.toUpperCase()+F},B=a("AsyncFunction"),L={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||p(e.append)&&("formdata"===(t=s(e))||"object"===t&&p(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:d,isNumber:h,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:y,isUndefined:l,isDate:g,isFile:b,isBlob:E,isRegExp:C,isFunction:p,isStream:e=>m(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:j,isFileList:w,forEach:S,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},r=(r,o)=>{const s=t&&R(n,o)||o;y(n[s])&&y(r)?n[s]=e(n[s],r):y(r)?n[s]=e({},r):u(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&S(arguments[o],r);return n},extend:(e,n,r,{allOwnKeys:o}={})=>(S(n,((n,o)=>{r&&p(n)?e[o]=t(n,r):e[o]=n}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!h(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:N,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{if(p(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];p(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:R,global:A,isContextDefined:T,ALPHABET:U,generateString:(e=16,t=U.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&p(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(m(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=u(e)?[]:{};return S(e,((e,t)=>{const s=n(e,r+1);!l(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:B,isThenable:e=>e&&(m(e)||p(e))&&p(e.then)&&p(e.catch)};function D(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}L.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const k=D.prototype,q={};function I(e){return L.isPlainObject(e)||L.isArray(e)}function z(e){return L.endsWith(e,"[]")?e.slice(0,-2):e}function M(e,t,n){return e?e.concat(t).map((function(e,t){return e=z(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{q[e]={value:e}})),Object.defineProperties(D,q),Object.defineProperty(k,"isAxiosError",{value:!0}),D.from=(e,t,n,r,o,s)=>{const i=Object.create(k);return L.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),D.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const H=L.toFlatObject(L,{},null,(function(e){return/^is[A-Z]/.test(e)}));function J(e,t,n){if(!L.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!L.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(L.isDate(e))return e.toISOString();if(!a&&L.isBlob(e))throw new D("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(e)||L.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(L.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(L.isArray(e)&&function(e){return L.isArray(e)&&!e.some(I)}(e)||(L.isFileList(e)||L.endsWith(n,"[]"))&&(a=L.toArray(e)))return n=z(n),a.forEach((function(e,r){!L.isUndefined(e)&&null!==e&&t.append(!0===i?M([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!I(e)||(t.append(M(o,n,s),c(e)),!1)}const l=[],f=Object.assign(H,{defaultVisitor:u,convertValue:c,isVisitable:I});if(!L.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!L.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),L.forEach(n,(function(n,s){!0===(!(L.isUndefined(n)||null===n)&&o.call(t,n,L.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function W(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function K(e,t){this._pairs=[],e&&J(e,this,t)}const V=K.prototype;function $(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function G(e,t,n){if(!t)return e;const r=n&&n.encode||$,o=n&&n.serialize;let s;if(s=o?o(t,n):L.isURLSearchParams(t)?t.toString():new K(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}V.append=function(e,t){this._pairs.push([e,t])},V.toString=function(e){const t=e?function(t){return e.call(this,t,W)}:W;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class X{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const Q={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Z={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:K,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Y="undefined"!=typeof window&&"undefined"!=typeof document,ee=(te="undefined"!=typeof navigator&&navigator.product,Y&&["ReactNative","NativeScript","NS"].indexOf(te)<0);var te;const ne="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,re={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Y,hasStandardBrowserEnv:ee,hasStandardBrowserWebWorkerEnv:ne},Symbol.toStringTag,{value:"Module"})),...Z};function oe(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&L.isArray(r)?r.length:s,a?(L.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&L.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&L.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(L.isFormData(e)&&L.isFunction(e.entries)){const n={};return L.forEachEntry(e,((e,r)=>{t(function(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const se={transitional:Q,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=L.isObject(e);if(o&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return r?JSON.stringify(oe(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return J(e,new re.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return re.isNode&&L.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=L.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return J(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||se.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&L.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw D.from(o,D.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],(e=>{se.headers[e]={}}));const ie=se,ae=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ce=Symbol("internals");function ue(e){return e&&String(e).trim().toLowerCase()}function le(e){return!1===e||null==e?e:L.isArray(e)?e.map(le):String(e)}function fe(e,t,n,r,o){return L.isFunction(r)?r.call(this,t,n):(o&&(t=n),L.isString(t)?L.isString(r)?-1!==t.indexOf(r):L.isRegExp(r)?r.test(t):void 0:void 0)}class de{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ue(t);if(!o)throw new Error("header name must be a non-empty string");const s=L.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=le(e))}const s=(e,t)=>L.forEach(e,((e,n)=>o(e,n,t)));return L.isPlainObject(e)||e instanceof this.constructor?s(e,t):L.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ae[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ue(e)){const n=L.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(L.isFunction(t))return t.call(this,e,n);if(L.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ue(e)){const n=L.findKey(this,e);return!(!n||void 0===this[n]||t&&!fe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ue(e)){const o=L.findKey(n,e);!o||t&&!fe(0,n[o],o,t)||(delete n[o],r=!0)}}return L.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!fe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return L.forEach(this,((r,o)=>{const s=L.findKey(n,o);if(s)return t[s]=le(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=le(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return L.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&L.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ce]=this[ce]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ue(e);t[r]||(function(e,t){const n=L.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return L.isArray(e)?e.forEach(r):r(e),this}}de.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),L.reduceDescriptors(de.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),L.freezeMethods(de);const pe=de;function he(e,t){const n=this||ie,r=t||n,o=pe.from(r.headers);let s=r.data;return L.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function me(e){return!(!e||!e.__CANCEL__)}function ye(e,t,n){D.call(this,null==e?"canceled":e,D.ERR_CANCELED,t,n),this.name="CanceledError"}L.inherits(ye,D,{__CANCEL__:!0});const ge=re.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];L.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),L.isString(r)&&i.push("path="+r),L.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function be(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ee=re.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=L.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function we(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Oe="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=pe.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(L.isFormData(r))if(re.hasStandardBrowserEnv||re.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const f=be(e.baseURL,e.url);function d(){if(!l)return;const r=pe.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),u()}),(function(e){n(e),u()}),{data:a&&"text"!==a&&"json"!==a?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),G(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new D("Request aborted",D.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new D("Network Error",D.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Q;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new D(t,r.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,e,l)),l=null},re.hasStandardBrowserEnv&&(c&&L.isFunction(c)&&(c=c(e)),c||!1!==c&&Ee(f))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&ge.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in l&&L.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),L.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",we(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",we(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new ye(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);p&&-1===re.protocols.indexOf(p)?n(new D("Unsupported protocol "+p+":",D.ERR_BAD_REQUEST,e)):l.send(r||null)}))},Se={http:null,xhr:Oe};L.forEach(Se,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Re=e=>`- ${e}`,Ae=e=>L.isFunction(e)||null===e||!1===e,Te=e=>{e=L.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Ae(n)&&(r=Se[(t=String(n)).toLowerCase()],void 0===r))throw new D(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new D("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Re).join("\n"):" "+Re(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function je(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ye(null,e)}function ve(e){return je(e),e.headers=pe.from(e.headers),e.data=he.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Te(e.adapter||ie.adapter)(e).then((function(t){return je(e),t.data=he.call(e,e.transformResponse,t),t.headers=pe.from(t.headers),t}),(function(t){return me(t)||(je(e),t&&t.response&&(t.response.data=he.call(e,e.transformResponse,t.response),t.response.headers=pe.from(t.response.headers))),Promise.reject(t)}))}const Ne=e=>e instanceof pe?{...e}:e;function xe(e,t){t=t||{};const n={};function r(e,t,n){return L.isPlainObject(e)&&L.isPlainObject(t)?L.merge.call({caseless:n},e,t):L.isPlainObject(t)?L.merge({},t):L.isArray(t)?t.slice():t}function o(e,t,n){return L.isUndefined(t)?L.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!L.isUndefined(t))return r(void 0,t)}function i(e,t){return L.isUndefined(t)?L.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ne(e),Ne(t),!0)};return L.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);L.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ce="1.6.8",Pe={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Pe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const _e={};Pe.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.8] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new D(r(o," has been removed"+(t?" in "+t:"")),D.ERR_DEPRECATED);return t&&!_e[o]&&(_e[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const Fe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new D("option "+s+" must be "+n,D.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new D("Unknown option "+s,D.ERR_BAD_OPTION)}},validators:Pe},Ue=Fe.validators;class Be{constructor(e){this.defaults=e,this.interceptors={request:new X,response:new X}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=xe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Fe.assertOptions(n,{silentJSONParsing:Ue.transitional(Ue.boolean),forcedJSONParsing:Ue.transitional(Ue.boolean),clarifyTimeoutError:Ue.transitional(Ue.boolean)},!1),null!=r&&(L.isFunction(r)?t.paramsSerializer={serialize:r}:Fe.assertOptions(r,{encode:Ue.function,serialize:Ue.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&L.merge(o.common,o[t.method]);o&&L.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=pe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[ve.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=ve.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return G(be((e=xe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],(function(e){Be.prototype[e]=function(t,n){return this.request(xe(n||{},{method:e,url:t,data:(n||{}).data}))}})),L.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(xe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Be.prototype[e]=t(),Be.prototype[e+"Form"]=t(!0)}));const Le=Be;class De{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ye(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new De((function(t){e=t})),cancel:e}}}const ke=De,qe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qe).forEach((([e,t])=>{qe[t]=e}));const Ie=qe,ze=function e(n){const r=new Le(n),o=t(Le.prototype.request,r);return L.extend(o,Le.prototype,r,{allOwnKeys:!0}),L.extend(o,r,null,{allOwnKeys:!0}),o.create=function(t){return e(xe(n,t))},o}(ie);ze.Axios=Le,ze.CanceledError=ye,ze.CancelToken=ke,ze.isCancel=me,ze.VERSION=Ce,ze.toFormData=J,ze.AxiosError=D,ze.Cancel=ze.CanceledError,ze.all=function(e){return Promise.all(e)},ze.spread=function(e){return function(t){return e.apply(null,t)}},ze.isAxiosError=function(e){return L.isObject(e)&&!0===e.isAxiosError},ze.mergeConfig=xe,ze.AxiosHeaders=pe,ze.formToJSON=e=>oe(L.isHTMLForm(e)?new FormData(e):e),ze.getAdapter=Te,ze.HttpStatusCode=Ie,ze.default=ze;const Me=ze.create({baseURL:"https://utt.51jiajiao.top",timeout:1e4});Me.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),Me.interceptors.response.use((function(e){const{code:t,data:r,msg:o,suffix:s}=e.data;if(0===t){let t=n.decrypt(r,s);return t=JSON.parse(t),e.data=t,console.log(t),t}return console.log("请求出错",o),Promise.reject(o)}),(function(e){return Promise.reject(e)}));const He=e=>(e.method="get",Me(e));e("g",(e=>He({url:"/data/category/base-2.js",data:e}))),e("a",((e="base-vip-mmtj-1")=>He({url:`data/list/${e}.js`}))),e("b",((e="7")=>He({url:`data/topic/detail-${e}.js`}))),e("c",((e="25505-1")=>He({url:`data/shipin/nvyou-${e}.js`}))),e("d",((e="")=>He({url:`data/shipin/detail-${e}.js`}))),e("_",((e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}))}}}));
