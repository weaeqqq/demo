System.register(["./index-legacy-CwOYnrgk.js"],(function(e,t){"use strict";var n,o,r,i,u,l,c,s,a,f,d,v;return{setters:[e=>{n=e.S,o=e.U,r=e.V,i=e.r,u=e.f,l=e.K,c=e.g,s=e.W,a=e.X,f=e.w,d=e.c,v=e.o}],execute:function(){function t(e){return!!s()&&(a(e),!0)}function p(e){return"function"==typeof e?e():l(e)}e({a:function(e,n,o={}){const{root:r,rootMargin:u="0px",threshold:l=.1,window:c=b,immediate:s=!0}=o,a=A((()=>c&&"IntersectionObserver"in c)),v=d((()=>{const t=p(e);return(Array.isArray(t)?t:[t]).map(g).filter(y)}));let m=w;const h=i(s),S=a.value?f((()=>[v.value,g(r),h.value]),(([e,t])=>{if(m(),!h.value)return;if(!e.length)return;const o=new IntersectionObserver(n,{root:g(t),rootMargin:u,threshold:l});e.forEach((e=>e&&o.observe(e))),m=()=>{o.disconnect(),m=w}}),{immediate:s,flush:"post"}):w,O=()=>{m(),S(),h.value=!1};return t(O),{isSupported:a,isActive:h,pause(){m(),h.value=!1},resume(){h.value=!0},stop:O}},u:function(e=null,u={}){var l,c,s;const{document:a=S,restoreOnUnmount:v=(e=>e)}=u,m=null!=(l=null==a?void 0:a.title)?l:"",O=function(...e){if(1!==e.length)return n(...e);const t=e[0];return"function"==typeof t?o(r((()=>({get:t,set:w})))):i(t)}(null!=(c=null!=e?e:null==a?void 0:a.title)?c:null),M=e&&"function"==typeof e;function T(e){if(!("titleTemplate"in u))return e;const t=u.titleTemplate||"%s";return"function"==typeof t?t(e):p(t).replace(/%s/g,e)}return f(O,((e,t)=>{e!==t&&a&&(a.title=T("string"==typeof e?e:""))}),{immediate:!0}),u.observe&&!u.titleTemplate&&a&&!M&&function(e,n,o={}){const{window:r=b,...i}=o;let u;const l=A((()=>r&&"MutationObserver"in r)),c=()=>{u&&(u.disconnect(),u=void 0)},s=d((()=>{const t=p(e),n=(Array.isArray(t)?t:[t]).map(g).filter(y);return new Set(n)})),a=f((()=>s.value),(e=>{c(),l.value&&r&&e.size&&(u=new MutationObserver(n),e.forEach((e=>u.observe(e,i))))}),{immediate:!0,flush:"post"}),v=()=>{c(),a()};t(v)}(null==(s=a.head)?void 0:s.querySelector("title"),(()=>{a&&a.title!==O.value&&(O.value=T(a.title))}),{childList:!0}),h((()=>{if(v){const e=v(m,O.value||"");null!=e&&a&&(a.title=e)}})),O}});const m="undefined"!=typeof window&&"undefined"!=typeof document;"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);const y=e=>null!=e,w=()=>{};function h(e,t){const n=function(e){return e||c()}(t);n&&u(e,t)}function g(e){var t;const n=p(e);return null!=(t=null==n?void 0:n.$el)?t:n}const b=m?window:void 0,S=m?window.document:void 0;function A(e){const t=function(){const e=i(!1),t=c();return t&&v((()=>{e.value=!0}),t),e}();return d((()=>(t.value,Boolean(e()))))}}}}));
