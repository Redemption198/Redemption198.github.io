import{u as h,w as d,a,b as w,e as q,f as C,h as D,i as u,j as _,k as b}from"./entry.fd7c228b.js";const y=(c,e=a())=>{const f=h(c);d(()=>h(c),(o=f)=>{if(!e.path||!o)return;const t=Object.assign({},(o==null?void 0:o.head)||{}),s=t.title||(o==null?void 0:o.title);s&&(t.title=s),t.meta=[...t.meta||[]];const p=(t==null?void 0:t.description)||(o==null?void 0:o.description);p&&t.meta.filter(n=>n.name==="description").length===0&&t.meta.push({name:"description",content:p});const r=(t==null?void 0:t.image)||(o==null?void 0:o.image);if(r&&t.meta.filter(n=>n.property==="og:image").length===0&&(typeof r=="string"&&t.meta.push({property:"og:image",content:r}),typeof r=="object")){const n=["src","secure_url","type","width","height","alt"];for(const i of n)i==="src"&&r.src?t.meta.push({property:"og:image",content:r[i]}):r[i]&&t.meta.push({property:`og:image:${i}`,content:r[i]})}w(()=>q(t))},{immediate:!0})},v=C({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>a().path},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(c){const e=D(),{tag:f,excerpt:m,path:o,query:t,head:s}=c,p=Object.assign(t||{},{path:o,find:"one"}),r=(n,i)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:i},null,2));return u(b,p,{default:e!=null&&e.default?({data:n,refresh:i,isPartial:g})=>{var l;return s&&y(n),(l=e.default)==null?void 0:l.call(e,{doc:n,refresh:i,isPartial:g,excerpt:m,...this.$attrs})}:({data:n})=>(s&&y(n),u(_,{value:n,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):r("default",n)})),empty:n=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,n))||u("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,n))||u("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{v as default};
