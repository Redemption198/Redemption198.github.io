import{m as b,p as P,s as V,_ as r,q as B,r as j,f as d,j as p,t as N,a as k,v as C,x as c,y as $,z as y,u as x,T as w,A as v,B as T,C as M,D as O,E as L,F as S,G as z,e as q,d as n,H,I as F,J as U,K as G,h as W,L as J}from"./entry.d2d3dcd4.js";import"./ContentDoc.2ae6273d.js";import"./ContentSlot.60d55040.js";import"./DocumentDrivenEmpty.a618d012.js";import"./DocumentDrivenNotFound.6298aa50.js";import"./Markdown.107c2938.js";import"./ProseCode.6a176bbe.js";const K=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=b(e?`/navigation/${P(e)}.json`:"/navigation");if(V())return(await r(()=>import("./client-db.be4426f1.js"),["client-db.be4426f1.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(a=>a.generateNavigation))(e||{});const i=await $fetch(o,{method:"GET",responseType:"json",params:{_params:B(e||{}),previewToken:j("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const A={},Y=d({props:{name:String},async setup(t,e){const o=await A[t.name]().then(i=>i.default||i);return()=>p(o,{},e.slots)}}),Q=d({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=N("_route"),i=o===k()?C():o,u=c(()=>{var a,l;return(l=(a=x(t.name))!=null?a:i.meta.layout)!=null?l:"default"});return()=>{var s;const a=u.value&&u.value in A,l=(s=i.meta.layoutTransition)!=null?s:$;return y(w,a&&l,{default:()=>y(Y,a&&{key:u.value,name:u.value,hasTransition:!!l},e.slots).default()}).default()}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const i=v(null),u=T();return M(a=>{if(!u.isHydrating)return o("error",a),i.value=a,!1}),()=>{var a,l;return i.value?(a=e.error)==null?void 0:a.call(e,{error:i}):(l=e.default)==null?void 0:l.call(e)}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=d({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=v(!1);return O(()=>{o.value=!0}),i=>{var s;if(o.value)return(s=e.default)==null?void 0:s.call(e);const u=e.fallback||e.placeholder;if(u)return u();const a=i.fallback||i.placeholder||"",l=i.fallbackTag||i.placeholderTag||"span";return L(l,null,a)}}}),g=new WeakMap;function rt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(o,...i)=>{var u;if(o.mounted$){const a=t.render(o,...i);return a.children===null||typeof a.children=="string"?S(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):p(a)}else return p("div",(u=o.$attrs)!=null?u:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,i)=>{var a;const u=v(!1);return O(()=>{u.value=!0}),Promise.resolve(((a=t.setup)==null?void 0:a.call(t,o,i))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...s)=>{if(u.value){const _=l(...s);return _.children===null||typeof _.children=="string"?S(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):p(_)}else return p("div",i.attrs)})},g.set(t,e),e}const nt=Object.freeze(Object.defineProperty({__proto__:null,default:et,createClientOnly:rt},Symbol.toStringTag,{value:"Module"})),it=d({name:"ServerPlaceholder",render(){return L("div")}}),ot=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),at=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=ut({duration:t.duration,throttle:t.throttle}),i=T();return i.hook("page:start",o.start),i.hook("page:finish",o.finish),z(()=>o.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function ut(t){const e=v(0),o=v(!1),i=c(()=>1e4/t.duration);let u=null,a=null;function l(){_(),e.value=0,o.value=!0,t.throttle?a=setTimeout(E,t.throttle):E()}function s(){e.value=100,D()}function _(){clearInterval(u),clearTimeout(a),u=null,a=null}function I(R){e.value=Math.min(100,e.value+R)}function D(){_(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{I(i.value)},100)}return{progress:e,isLoading:o,start:l,finish:s,clear:_}}const lt=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),_t=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,i)=>(q(()=>t({..._t(o),...i.attrs},i)),()=>{var u,a;return e?(a=(u=i.slots).default)==null?void 0:a.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},dt=d({name:"Script",inheritAttrs:!1,props:{...h,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},i=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return i&&(o.children=i),{script:[o]}})}),st=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const o={...t},i=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return i&&(o.children=i),{noscript:[o]}})}),pt=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),mt=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ft=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var i,u,a;return{title:((a=(u=(i=e.default)==null?void 0:i.call(e))==null?void 0:u[0])==null?void 0:a.children)||null}})}),ht=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),vt=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,a,l;const o={...t},i=(l=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:l.children;return i&&(o.children=i),{style:[o]}})}),gt=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,i;return(i=(o=e.slots).default)==null?void 0:i.call(o)}}),ct=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Et=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),m=Object.freeze(Object.defineProperty({__proto__:null,Script:dt,NoScript:st,Link:pt,Base:mt,Title:ft,Meta:ht,Style:vt,Head:gt,Html:ct,Body:Et},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./ContentDoc.2ae6273d.js"),["ContentDoc.2ae6273d.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.d2d3dcd4.js").then(t=>t.aq),["entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>St),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.d2d3dcd4.js").then(t=>t.ap),["entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.d2d3dcd4.js").then(t=>t.as),["entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.d2d3dcd4.js").then(t=>t.ar),["entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.60d55040.js"),["ContentSlot.60d55040.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.a618d012.js"),["DocumentDrivenEmpty.a618d012.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.6298aa50.js"),["DocumentDrivenNotFound.6298aa50.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.107c2938.js"),["Markdown.107c2938.js","ContentSlot.60d55040.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.aa9d7882.js"),["ProseA.aa9d7882.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.47eb3143.js"),["ProseBlockquote.47eb3143.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.6a176bbe.js"),["ProseCode.6a176bbe.js","ProseCode.e63e49c6.css","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.215fa8bb.js"),["ProseCodeInline.215fa8bb.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.1cc88746.js"),["ProseEm.1cc88746.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.aef65c20.js"),["ProseH1.aef65c20.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.0521e038.js"),["ProseH2.0521e038.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.238405fc.js"),["ProseH3.238405fc.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.6cb391ae.js"),["ProseH4.6cb391ae.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.365bff46.js"),["ProseH5.365bff46.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.3b6e52bb.js"),["ProseH6.3b6e52bb.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.73e6197c.js"),["ProseHr.73e6197c.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.0f3a5b0e.js"),["ProseImg.0f3a5b0e.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.4245ae83.js"),["ProseLi.4245ae83.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.9db6c6ad.js"),["ProseOl.9db6c6ad.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.d5d6ce72.js"),["ProseP.d5d6ce72.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.2bc8806d.js"),["ProseStrong.2bc8806d.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.d9fd2f0f.js"),["ProseTable.d9fd2f0f.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.1cf2d386.js"),["ProseTbody.1cf2d386.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.b98004aa.js"),["ProseTd.b98004aa.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.ddbcb423.js"),["ProseTh.ddbcb423.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.8da563e5.js"),["ProseThead.8da563e5.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.d9776753.js"),["ProseTr.d9776753.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.2e4d38ec.js"),["ProseUl.2e4d38ec.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.0b2504ba.js"),["welcome.0b2504ba.js","entry.d2d3dcd4.js","entry.3e5cc363.css","ContentDoc.2ae6273d.js","ContentSlot.60d55040.js","DocumentDrivenEmpty.a618d012.js","DocumentDrivenNotFound.6298aa50.js","Markdown.107c2938.js","ProseCode.6a176bbe.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.d2d3dcd4.js").then(t=>t.ao),["entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Icon.8c38dc94.js"),["Icon.8c38dc94.js","entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.d2d3dcd4.js").then(t=>t.at),["entry.d2d3dcd4.js","entry.3e5cc363.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Script));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Body));const yt=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=H(t),o=c(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&F("dd-navigation").value){const{navigation:u}=U();return{navigation:u}}const{data:i}=await G(`content-navigation-${P(o.value)}`,()=>K(o.value));return{navigation:i}},render(t){const e=W(),{navigation:o}=t,i=l=>p(J,{to:l._path},()=>l.title),u=(l,s)=>p("ul",s?{"data-level":s}:null,l.map(_=>_.children?p("li",null,[i(_),u(_.children,s+1)]):p("li",null,i(_)))),a=l=>u(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):a(o)}}),St=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"}));export{yt as default};
