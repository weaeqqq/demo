import{c as R,n as y,m as k,e as j,G as F,y as C,d as q,I as L,H as G,J as H,K,h as O,k as J,M as W,t as E,E as B,g as Z,L as Q}from"./index-DgOSLllI.js";import{d as $,r as _,c as D,o as X,b as Y,e as ee,w as te,h as r,m as ae,T as se,n as ne,D as oe,y as ie,a as V,E as ce,G as le,k as I,l as z,t as P,q as re,v as w,H as ue,u as M}from"./index-DorL7S9H.js";import{a as me}from"./index-CBamRlkC.js";import{_ as de}from"./plugin-vueexport-helper-Bh2EnEkq.js";function ge(e,u){let l=null,m=0;return function(...n){if(l)return;const o=Date.now()-m,d=()=>{m=Date.now(),l=!1,e.apply(this,n)};o>=u?d():l=setTimeout(d,u)}}const[fe,S]=R("back-top"),pe={right:y,bottom:y,zIndex:y,target:[String,Object],offset:k(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}};var he=$({name:fe,inheritAttrs:!1,props:pe,emits:["click"],setup(e,{emit:u,slots:l,attrs:m}){let n=!1;const o=_(!1),d=_(),g=_(),h=D(()=>j(F(e.zIndex),{right:C(e.right),bottom:C(e.bottom)})),x=s=>{var c;u("click",s),(c=g.value)==null||c.scrollTo({top:0,behavior:e.immediate?"auto":"smooth"})},t=()=>{o.value=g.value?K(g.value)>=+e.offset:!1},a=()=>{const{target:s}=e;if(typeof s=="string"){const c=document.querySelector(s);if(c)return c}else return s},i=()=>{G&&ne(()=>{g.value=e.target?a():H(d.value),t()})};return q("scroll",ge(t,100),{target:g}),X(i),Y(()=>{n&&(o.value=!0,n=!1)}),ee(()=>{o.value&&e.teleport&&(o.value=!1,n=!0)}),te(()=>e.target,i),()=>{const s=r("div",ae({ref:e.teleport?void 0:d,class:S({active:o.value}),style:h.value,onClick:x},m),[l.default?l.default():r(L,{name:"back-top",class:S("icon")},null)]);return e.teleport?[r("div",{ref:d,class:S("placeholder")},null),r(se,{to:e.teleport},{default:()=>[s]})]:s}}});const Ne=O(he),[ve,b,U]=R("pagination"),T=(e,u,l)=>({number:e,text:u,active:l}),be={mode:J("multi"),prevText:String,nextText:String,pageCount:k(0),modelValue:W(0),totalItems:k(0),showPageSize:k(5),itemsPerPage:k(10),forceEllipses:Boolean,showPrevButton:E,showNextButton:E};var xe=$({name:ve,props:be,emits:["change","update:modelValue"],setup(e,{emit:u,slots:l}){const m=D(()=>{const{pageCount:t,totalItems:a,itemsPerPage:i}=e,s=+t||Math.ceil(+a/+i);return Math.max(1,s)}),n=D(()=>{const t=[],a=m.value,i=+e.showPageSize,{modelValue:s,forceEllipses:c}=e;let v=1,p=a;const N=i<a;N&&(v=Math.max(s-Math.floor(i/2),1),p=v+i-1,p>a&&(p=a,v=p-i+1));for(let f=v;f<=p;f++){const A=T(f,f,f===s);t.push(A)}if(N&&i>0&&c){if(v>1){const f=T(v-1,"...");t.unshift(f)}if(p<a){const f=T(p+1,"...");t.push(f)}}return t}),o=(t,a)=>{t=Z(t,1,m.value),e.modelValue!==t&&(u("update:modelValue",t),a&&u("change",t))};oe(()=>o(e.modelValue));const d=()=>r("li",{class:b("page-desc")},[l.pageDesc?l.pageDesc():"".concat(e.modelValue,"/").concat(m.value)]),g=()=>{const{mode:t,modelValue:a,showPrevButton:i}=e;if(!i)return;const s=l["prev-text"],c=a===1;return r("li",{class:[b("item",{disabled:c,border:t==="simple",prev:!0}),B]},[r("button",{type:"button",disabled:c,onClick:()=>o(a-1,!0)},[s?s():e.prevText||U("prev")])])},h=()=>{const{mode:t,modelValue:a,showNextButton:i}=e;if(!i)return;const s=l["next-text"],c=a===m.value;return r("li",{class:[b("item",{disabled:c,border:t==="simple",next:!0}),B]},[r("button",{type:"button",disabled:c,onClick:()=>o(a+1,!0)},[s?s():e.nextText||U("next")])])},x=()=>n.value.map(t=>r("li",{class:[b("item",{active:t.active,page:!0}),B]},[r("button",{type:"button","aria-current":t.active||void 0,onClick:()=>o(t.number,!0)},[l.page?l.page(t):t.text])]));return()=>r("nav",{role:"navigation",class:b()},[r("ul",{class:b("items")},[g(),e.mode==="simple"?d():x(),h()])])}});const Ce=O(xe),ke=["src"],Pe={class:"duration-time"},_e={class:"time"},ye={class:"text"},Be="https://mig.sxuet.top",Ie={__name:"ImgItem",props:{data:Object,checkName:String},emits:["clickItem"],setup(e,{emit:u}){const l=ie(),m=u,n=e,o=V({title:n.data.title||n.data.name||"标题",imageUrl:"",time:ce(n.data.update_time),durationTime:le(n.data.duration)});let d=["topic","vip","remen","remen2","remen3","shipin"].includes(n.data.channel)?"130px":"280px";["中文字幕","成人动漫","女优专区"].includes(n.data.tag)&&(d="280px");const g=V({height:d});let h=_();const{stop:x}=me(h,async([{isIntersecting:a}])=>{if(a&&!o.imageUrl){x();const i=n.data.thumb.startsWith("/")?n.data.thumb:"/".concat(n.data.thumb),s=Be+i+".txt?size=400x225";let c=await M.fetchData(s);c.includes("data:image/jpg;base64")||(c=M.imgDecrypt(c)),o.imageUrl=c}});function t(){m("clickItem",n.checkName);const a=n.checkName&&n.checkName.includes("女优"),i={id:n.data.id};a&&(i.t=+new Date),l.push({name:a?"person":"detail",query:i})}return(a,i)=>{const s=Q;return I(),z("div",{class:"img-item",onClick:t},[P("div",{class:"img-box",ref_key:"myimg",ref:h,style:ue(g)},[o.imageUrl?(I(),z("img",{key:1,class:"img",src:o.imageUrl},null,8,ke)):(I(),re(s,{key:0,style:{"margin-top":"50px"},type:"spinner",color:"#1989fa"})),P("div",Pe,w(o.durationTime),1),P("div",_e,w(o.time),1)],4),P("p",ye,w(o.title),1)])}}},Ee=de(Ie,[["__scopeId","data-v-eb91e3af"]]);export{Ne as B,Ee as I,Ce as P};
