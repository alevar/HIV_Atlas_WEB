import{m as R,o as T,a as u,R as e,c as B,D as A,T as m,L as D,P as p,d as g,f as L,B as F}from"./index-Cb9Tbun5.js";const P=R()(n=>({paper:{padding:n.spacing(2),margin:n.spacing(2)},field:{margin:n.spacing(2)}})),I=["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"];function N(n){const{flag:t=0,setFlag:r}=n;return e.createElement(e.Fragment,null,e.createElement(g,{type:"number",value:t,onChange:s=>{r(+s.target.value)}}),I.map((s,i)=>{const a=t&1<<i,l=`${s}_${a}`;return e.createElement("div",{key:l},e.createElement("input",{type:"checkbox",checked:!!a,onChange:d=>{d.target.checked?r(t|1<<i):r(t&~(1<<i))}}),e.createElement("label",{htmlFor:l},s))}))}const $=T(function(n){var t,r;const{model:s,handleClose:i}=n,{classes:a}=P(),{filterBy:l}=s,[d,b]=u.useState(l.flagInclude),[v,k]=u.useState(l.flagExclude),[o,x]=u.useState(((t=l.tagFilter)===null||t===void 0?void 0:t.tag)||""),[f,C]=u.useState(((r=l.tagFilter)===null||r===void 0?void 0:r.value)||""),[E,S]=u.useState(l.readName||""),h=/^[A-Za-z][A-Za-z0-9]$/.exec(o),y="https://broadinstitute.github.io/picard/explain-flags.html";return e.createElement(B.Dialog,{open:!0,onClose:i,title:"Filter options"},e.createElement(A,null,e.createElement(m,null,"Set filter bitmask options. Refer to ",e.createElement(D,{href:y},y)," ","for details"),e.createElement(p,{className:a.paper,variant:"outlined"},e.createElement("div",{style:{display:"flex"}},e.createElement("div",null,e.createElement(m,null,"Read must have ALL these flags"),e.createElement(N,{flag:d,setFlag:b})),e.createElement("div",null,e.createElement(m,null,"Read must have NONE of these flags"),e.createElement(N,{flag:v,setFlag:k})))),e.createElement(p,{className:a.paper,variant:"outlined"},e.createElement(m,null,"Filter by tag name and value. Use * in the value field to get all reads containing any value for that tag. Example: filter tag name SA with value * to get all split/supplementary reads. Other examples include HP for haplotype, or RG for read group"),e.createElement(g,{className:a.field,value:o,onChange:c=>{x(c.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2},error:o.length===2&&!h,helperText:o.length===2&&!h?"Not a valid tag":""}),e.createElement(g,{className:a.field,value:f,onChange:c=>{C(c.target.value)},placeholder:"Enter tag value"})),e.createElement(p,{className:a.paper,variant:"outlined"},e.createElement(m,null,"Filter by read name"),e.createElement(g,{className:a.field,value:E,onChange:c=>{S(c.target.value)},placeholder:"Enter read name"})),e.createElement(L,null,e.createElement(F,{variant:"contained",color:"primary",autoFocus:!0,type:"submit",onClick:()=>{s.setFilterBy({flagInclude:d,flagExclude:v,readName:E,tagFilter:o!==""?{tag:o,value:f}:void 0}),i()}},"Submit"),e.createElement(F,{variant:"contained",color:"secondary",onClick:()=>{i()}},"Cancel"))))});export{$ as default};
//# sourceMappingURL=FilterByTagDialog-D8JOWk6s.js.map