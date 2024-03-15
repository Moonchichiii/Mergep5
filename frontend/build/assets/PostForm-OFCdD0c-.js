import{r as o,c as j,j as e,d as C,e as S,A as D,f as F,g as R,C as E,F as w,h as $,b as B,i as s,B as H,k as G,l as I}from"./index-C6cvgGlj.js";const N=S("h4");N.displayName="DivStyledAsH4";const y=o.forwardRef(({className:c,bsPrefix:a,as:i=N,...n},u)=>(a=j(a,"alert-heading"),e.jsx(i,{ref:u,className:C(c,a),...n})));y.displayName="AlertHeading";const O=y,A=o.forwardRef(({className:c,bsPrefix:a,as:i=D,...n},u)=>(a=j(a,"alert-link"),e.jsx(i,{ref:u,className:C(c,a),...n})));A.displayName="AlertLink";const T=A,L=o.forwardRef((c,a)=>{const{bsPrefix:i,show:n=!0,closeLabel:u="Close alert",closeVariant:m,className:g,children:v,variant:d="primary",onClose:h,dismissible:p,transition:t=w,...r}=F(c,{show:"onClose"}),l=j(i,"alert"),x=R(k=>{h&&h(!1,k)}),b=t===!0?w:t,f=e.jsxs("div",{role:"alert",...b?void 0:r,ref:a,className:C(g,l,d&&`${l}-${d}`,p&&`${l}-dismissible`),children:[p&&e.jsx(E,{onClick:x,"aria-label":u,variant:m}),v]});return b?e.jsx(b,{unmountOnExit:!0,...r,ref:void 0,in:n,children:f}):n?f:null});L.displayName="Alert";const q=Object.assign(L,{Link:T,Heading:O}),U=()=>{o.useContext($);const{handleCloseModal:c}=B(),[a,i]=o.useState({title:"",ingredients:"",recipe:"",time:"10",image:null}),[n,u]=o.useState(""),[m,g]=o.useState("");o.useState(10);const v=[{label:"10 minutes",value:10},{label:"15 minutes",value:15},{label:"20 minutes",value:20},{label:"25 minutes",value:25},{label:"30 minutes",value:30},{label:"40 minutes",value:40},{label:"50 minutes",value:50},{label:"1 hour",value:60},{label:"2 hours",value:120},{label:"3 hours",value:180},{label:"4 hours",value:240},{label:"4 hours or more",value:270}],d=t=>{const{name:r,value:l}=t.target;i({...a,[r]:l})},h=t=>{const r=t.target.files[0];r&&(i({...a,image:r}),u(URL.createObjectURL(r)))},p=async t=>{t.preventDefault();const r=new FormData;Object.entries(a).forEach(([l,x])=>{r.append(l,x)});try{const l=G.get("access"),x=await I.post("/posts/",r,{headers:{Authorization:`Bearer ${l}`}});c()}catch{g("Something went wrong during the post!")}};return e.jsx(e.Fragment,{children:e.jsxs(s,{onSubmit:p,children:[e.jsx("h2",{children:"Recipe Posting"}),n&&e.jsx("div",{children:e.jsx("img",{src:n,alt:"Preview",style:{width:"100%",marginBottom:"10px"}})}),e.jsxs(s.Group,{controlId:"formFile",className:"mb-3",children:[e.jsx(s.Label,{children:"Image"}),e.jsx(s.Control,{type:"file",accept:"image/*",onChange:h})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Title"}),e.jsx(s.Control,{type:"text",placeholder:"Enter title",name:"title",value:a.title,onChange:d,required:!0})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Ingredients"}),e.jsx(s.Control,{as:"textarea",rows:3,name:"ingredients",value:a.ingredients,onChange:d,required:!0})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Recipe"}),e.jsx(s.Control,{as:"textarea",rows:5,name:"recipe",value:a.recipe,onChange:d,required:!0})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Cooking Time"}),e.jsx(s.Control,{as:"select",name:"time",value:a.time,onChange:d,required:!0,children:v.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),m&&e.jsx(q,{variant:"danger",children:m}),e.jsx(H,{variant:"primary",type:"submit",children:"Submit"})]})})};export{U as default};