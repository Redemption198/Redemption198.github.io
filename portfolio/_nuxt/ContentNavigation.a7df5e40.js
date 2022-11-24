import{_ as r,e as d,i as m,C as b,a as V,D as j,j as c,u as B,E as N,F as y,G as k,p as v,k as S,H as $,I as T,J as O,K as P,L as C,d as n,t as M,M as w,f as x,N as z}from"./entry.21ae7dd4.js";import{u as q}from"./asyncData.4c447966.js";import{h as L,j as H}from"./query.3467454b.js";import{w as F,s as U,u as G,a as W}from"./utils.f53d8382.js";import"./ContentDoc.c15d4c52.js";import"./ContentList.656fa27b.js";import"./ContentQuery.12e67268.js";import"./ContentRenderer.4ac4cf8a.js";import"./ContentRendererMarkdown.9a6432f1.js";import"./ContentSlot.b1cb92a3.js";import"./DocumentDrivenEmpty.22a2e69d.js";import"./DocumentDrivenNotFound.ca518810.js";import"./Markdown.27896b07.js";import"./ProseCode.24cb7651.js";import"./Icon.vue_vue_type_style_index_0_scoped_ca945699_lang.15bb71f0.js";import{u as J}from"./composables.8df6e296.js";import"./_commonjsHelpers.fed2a411.js";import"./_plugin-vue_export-helper.a1a6add7.js";const K=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const i=F(e?`/navigation/${L(e)}.json`:"/navigation");if(U())return(await r(()=>import("./client-db.40608fca.js"),["./client-db.40608fca.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./utils.f53d8382.js","./query.3467454b.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(o=>o.generateNavigation))(e||{});const a=await $fetch(i,{method:"GET",responseType:"json",params:{_params:H(e||{}),previewToken:G("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const A={},Y=d({props:{name:String},async setup(t,e){const i=await A[t.name]().then(a=>a.default||a);return()=>m(i,{},e.slots)}}),Q=d({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=b("_route"),a=i===V()?j():i,u=c(()=>{var o,l;return(l=(o=B(t.name))!=null?o:a.meta.layout)!=null?l:"default"});return()=>{var s;const o=u.value&&u.value in A,l=(s=a.meta.layoutTransition)!=null?s:N;return y(k,o&&l,{default:()=>y(Y,o&&{key:u.value,name:u.value,hasTransition:void 0},e.slots).default()}).default()}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z=d({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const a=v(null),u=S();return $(o=>{if(!u.isHydrating)return i("error",o),a.value=o,!1}),()=>{var o,l;return a.value?(o=e.error)==null?void 0:o.call(e,{error:a}):(l=e.default)==null?void 0:l.call(e)}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=d({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const a=v(!1);return T(()=>{a.value=!0}),u=>{var _;if(a.value)return(_=e.default)==null?void 0:_.call(e);const o=e.fallback||e.placeholder;if(o)return o();const l=u.fallback||u.placeholder||"",s=u.fallbackTag||u.placeholderTag||"span";return O(s,i,l)}}}),g=new WeakMap;function rt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(i,...a)=>{var u;if(i.mounted$){const o=t.render(i,...a);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):m(o)}else return m("div",(u=i.$attrs)!=null?u:i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,a)=>{var o;const u=v(!1);return T(()=>{u.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,i,a))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...s)=>{if(u.value){const _=l(...s);return _.children===null||typeof _.children=="string"?P(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):m(_)}else return m("div",a.attrs)})},g.set(t,e),e}const nt=Object.freeze(Object.defineProperty({__proto__:null,default:et,createClientOnly:rt},Symbol.toStringTag,{value:"Module"})),ot=d({name:"DevOnly",setup(t,e){return()=>null}}),it=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),at=d({name:"ServerPlaceholder",render(){return O("div")}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=d({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=_t({duration:t.duration,throttle:t.throttle}),a=S();return a.hook("page:start",i.start),a.hook("page:finish",i.finish),C(()=>i.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function _t(t){const e=v(0),i=v(!1),a=c(()=>1e4/t.duration);let u=null,o=null;function l(){_(),e.value=0,i.value=!0,t.throttle?o=setTimeout(E,t.throttle):E()}function s(){e.value=100,D()}function _(){clearInterval(u),clearTimeout(o),u=null,o=null}function I(R){e.value=Math.min(100,e.value+R)}function D(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{I(a.value)},100)}return{progress:e,isLoading:i,start:l,finish:s,clear:_}}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),st=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,a)=>(J(()=>t({...st(i),...a.attrs},a)),()=>{var u,o;return e?(o=(u=a.slots).default)==null?void 0:o.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},mt=d({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const i={...t},a=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return a&&(i.children=a),{noscript:[i]}})}),pt=d({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ft=d({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ht=d({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,u,o;return{title:((o=(u=(a=e.default)==null?void 0:a.call(e))==null?void 0:u[0])==null?void 0:o.children)||null}})}),vt=d({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),gt=d({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,o,l;const i={...t},a=(l=(o=(u=e.default)==null?void 0:u.call(e))==null?void 0:o[0])==null?void 0:l.children;return a&&(i.children=a),{style:[i]}})}),ct=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,a;return(a=(i=e.slots).default)==null?void 0:a.call(i)}}),Et=d({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),yt=d({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:mt,Link:pt,Base:ft,Title:ht,Meta:vt,Style:gt,Head:ct,Html:Et,Body:yt},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./TheImage.0431c182.js"),["./TheImage.0431c182.js","./TheImage.vue_vue_type_script_setup_true_lang.f0e1c235.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentDoc.c15d4c52.js"),["./ContentDoc.c15d4c52.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./composables.8df6e296.js","./ContentRenderer.4ac4cf8a.js","./ContentRendererMarkdown.9a6432f1.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.12e67268.js","./asyncData.4c447966.js","./query.3467454b.js","./utils.f53d8382.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentList.656fa27b.js"),["./ContentList.656fa27b.js","./ContentQuery.12e67268.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./asyncData.4c447966.js","./query.3467454b.js","./utils.f53d8382.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>St),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentQuery.12e67268.js"),["./ContentQuery.12e67268.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./asyncData.4c447966.js","./query.3467454b.js","./utils.f53d8382.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRenderer.4ac4cf8a.js"),["./ContentRenderer.4ac4cf8a.js","./ContentRendererMarkdown.9a6432f1.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRendererMarkdown.9a6432f1.js"),["./ContentRendererMarkdown.9a6432f1.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.b1cb92a3.js"),["./ContentSlot.b1cb92a3.js","./utils.f53d8382.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.22a2e69d.js"),["./DocumentDrivenEmpty.22a2e69d.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.ca518810.js"),["./DocumentDrivenNotFound.ca518810.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.27896b07.js"),["./Markdown.27896b07.js","./ContentSlot.b1cb92a3.js","./utils.f53d8382.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.a89c9006.js"),["./ProseA.a89c9006.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.f5929c68.js"),["./ProseBlockquote.f5929c68.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.24cb7651.js"),["./ProseCode.24cb7651.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.68c8a59b.js"),["./ProseCodeInline.68c8a59b.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.def2dda2.js"),["./ProseEm.def2dda2.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.4c2ebb15.js"),["./ProseH1.4c2ebb15.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.73523237.js"),["./ProseH2.73523237.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.c4c42474.js"),["./ProseH3.c4c42474.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.a49b1f34.js"),["./ProseH4.a49b1f34.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.ba510df5.js"),["./ProseH5.ba510df5.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.3c3fac02.js"),["./ProseH6.3c3fac02.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.15540801.js"),["./ProseHr.15540801.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.7154c325.js"),["./ProseImg.7154c325.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.1737846a.js"),["./ProseLi.1737846a.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.ac24cc69.js"),["./ProseOl.ac24cc69.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.9c806f86.js"),["./ProseP.9c806f86.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.2567217e.js"),["./ProseStrong.2567217e.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.6a662e83.js"),["./ProseTable.6a662e83.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.b792189f.js"),["./ProseTbody.b792189f.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.5567536f.js"),["./ProseTd.5567536f.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.93c620ae.js"),["./ProseTh.93c620ae.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.8ba53525.js"),["./ProseThead.8ba53525.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.3bc99dca.js"),["./ProseTr.3bc99dca.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.ad44fdb1.js"),["./ProseUl.ad44fdb1.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.24a83796.js"),["./welcome.24a83796.js","./composables.8df6e296.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.4c447966.js","./query.3467454b.js","./utils.f53d8382.js","./ContentDoc.c15d4c52.js","./ContentRenderer.4ac4cf8a.js","./ContentRendererMarkdown.9a6432f1.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.12e67268.js","./ContentList.656fa27b.js","./ContentSlot.b1cb92a3.js","./DocumentDrivenEmpty.22a2e69d.js","./DocumentDrivenNotFound.ca518810.js","./Markdown.27896b07.js","./ProseCode.24cb7651.js","./ProseCode.e63e49c6.css","./Icon.vue_vue_type_style_index_0_scoped_ca945699_lang.15bb71f0.js","./Icon.294af607.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.21ae7dd4.js").then(t=>t.a5),["./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Icon.c1207095.js"),["./Icon.c1207095.js","./entry.21ae7dd4.js","./entry.4e5dc772.css","./Icon.vue_vue_type_style_index_0_scoped_ca945699_lang.15bb71f0.js","./Icon.294af607.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.21ae7dd4.js").then(t=>t.a6),["./entry.21ae7dd4.js","./entry.4e5dc772.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const Pt=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),i=c(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!i.value&&w("dd-navigation").value){const{navigation:u}=W();return{navigation:u}}const{data:a}=await q(`content-navigation-${L(i.value)}`,()=>K(i.value));return{navigation:a}},render(t){const e=x(),{navigation:i}=t,a=l=>m(z,{to:l._path},()=>l.title),u=(l,s)=>m("ul",s?{"data-level":s}:null,l.map(_=>_.children?m("li",null,[a(_),u(_.children,s+1)]):m("li",null,a(_)))),o=l=>u(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):o(i)}}),St=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"}));export{Pt as default};
