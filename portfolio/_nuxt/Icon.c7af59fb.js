import{z as g,P as v,Q as w,f as C,G as x,y as S,t as r,w as z,R as k,o as c,C as _,u as e,c as d,S as A,U as I,V as B,W as b,X as D,M as N}from"./entry.2f9e1b11.js";function q(){const s=g();return s._appConfig||(s._appConfig=v(w)),s._appConfig}const E=["width","height"],F=C({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(s){let o,h;const a=s,y=g(),p=q().nuxtIcon,u=x("icons",()=>({})),l=S(!1),m=r(()=>{var t;return(t=u.value)==null?void 0:t[a.name]}),i=r(()=>y.vueApp.component(a.name)),n=r(()=>{const t=a.size||(p==null?void 0:p.size)||"1em";return String(Number(t))===t?`${t}px`:t});async function f(){var t;i.value||(t=u.value)!=null&&t[a.name]||(l.value=!0,u.value[a.name]=await D(a.name).catch(()=>{}),l.value=!1)}return z(()=>a.name,f),!i.value&&([o,h]=k(()=>f()),o=await o,h()),(t,G)=>l.value?(c(),_("span",{key:0,class:"icon",width:e(n),height:e(n)},null,8,E)):e(m)?(c(),d(e(A),{key:1,icon:e(m),class:"icon",width:e(n),height:e(n)},null,8,["icon","width","height"])):e(i)?(c(),d(I(e(i)),{key:2,class:"icon",width:e(n),height:e(n)},null,8,["width","height"])):(c(),_("span",{key:3,class:"icon",style:b({fontSize:e(n),lineHeight:e(n),width:e(n),height:e(n)})},B(s.name),5))}}),M=N(F,[["__scopeId","data-v-1ab6d6c7"]]);export{M as default};
