import{o as g,r as u,R as e,b as m,D as p,p as r,q as d,v as y,a as n}from"./rpcWorker-DOy5Xw-Q.js";const h=g(function(l){const{model:s,handleClose:a}=l,[t,c]=u.useState(""),o=/^[A-Za-z][A-Za-z0-9]$/.exec(t);return e.createElement(m.Dialog,{open:!0,onClose:a,title:"Sort by tag"},e.createElement(p,null,e.createElement(r,null,"Set the tag to sort by"),e.createElement(r,{color:"textSecondary"},"Examples: HP for haplotype, RG for read group, etc."),e.createElement(d,{value:t,onChange:i=>{c(i.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2,"data-testid":"sort-tag-name-input"},error:t.length===2&&!o,helperText:t.length===2&&!o?"Not a valid tag":"",autoComplete:"off","data-testid":"sort-tag-name"}),e.createElement(y,null,e.createElement(n,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,onClick:()=>{s.setSortedBy("tag",t),a()}},"Submit"),e.createElement(n,{variant:"contained",color:"secondary",onClick:()=>{a()}},"Cancel"))))});export{h as default};
//# sourceMappingURL=SortByTagDialog-BxBIDa4Y.js.map