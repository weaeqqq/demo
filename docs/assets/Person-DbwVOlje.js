import{L}from"./index-BHysHZum.js";import{P as w,I,B as V}from"./ImgItem-kVkpXH3N.js";import{r as o,a as A,o as q,k as r,l as k,t as u,v as y,A as p,B as v,h as d,F as x,x as N,z as T,q as C}from"./index-B9KQOuSr.js";import{c as E}from"./plugin-vueexport-helper-BwnSHJRw.js";import{u as S}from"./index-BZt_ioQC.js";const b={class:"list-page"},z={class:"top-title"},M={class:"list"},R={class:"pages"},K={__name:"Person",setup(U){const m=T(),B=S();B.value="演员列表";const _=o(1),t=o(0),g=o("".concat(m.query.id,"-1")),i=o(!0),f=o(""),c=A({allData:[]});function D(n){window.scroll(0,0);const a=m.query.id+"-"+n;g.value=a,h()}async function h(n){var a;i.value=!0;const e=await E(g.value);f.value=e.nvyou,c.allData=((a=e==null?void 0:e.list)==null?void 0:a.data)||[],c.allData.map(l=>(l.tag="女优专区",{...l})),t.value=e.list.last_page,i.value=!1}q(()=>{h()});function P(n){}return(n,a)=>{const e=L,l=w,F=V;return r(),k("div",b,[u("h3",z,y(f.value),1),p(d(e,{type:"spinner"},null,512),[[v,i.value]]),u("div",M,[(r(!0),k(x,null,N(c.allData,s=>(r(),C(I,{key:s.title||s.name,data:s,onClickItem:P},null,8,["data"]))),128))]),u("div",R,[p(d(l,{onChange:D,modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=s=>_.value=s),"page-count":t.value,"items-per-page":5,"force-ellipses":""},null,8,["modelValue","page-count"]),[[v,t.value>1]])]),p(u("p",{class:"page-total"},"总共："+y(t.value)+"页",513),[[v,t.value>1]]),d(F)])}}};export{K as default};
