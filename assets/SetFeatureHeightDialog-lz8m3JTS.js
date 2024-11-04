import{o as p,a as r,R as e,c as d,D as S,T as b,d as f,e as C,C as E,f as y,B as c}from"./index-DvmOrY9r.js";const N=p(function(s){const{model:a,handleClose:n}=s,{featureHeightSetting:l,noSpacing:u}=a,[t,g]=r.useState(`${l}`),[i,h]=r.useState(u),m=t!==""&&!Number.isNaN(+t);return e.createElement(d.Dialog,{open:!0,onClose:n,title:"Set feature height"},e.createElement(S,null,e.createElement(b,null,"Adjust the feature height and whether there is any spacing between features. Setting feature height to 1 and removing spacing makes the display very compact."),e.createElement(f,{value:t,helperText:"Feature height",onChange:o=>{g(o.target.value)}}),e.createElement(C,{control:e.createElement(E,{checked:!!i,onChange:()=>{h(o=>!o)}}),label:"Remove spacing between features in y-direction?"}),e.createElement(y,null,e.createElement(c,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,disabled:!m,onClick:()=>{a.setFeatureHeight(t!==""&&!Number.isNaN(+t)?+t:void 0),a.setNoSpacing(i),n()}},"Submit"),e.createElement(c,{variant:"contained",color:"secondary",onClick:()=>{n()}},"Cancel"))))});export{N as default};
//# sourceMappingURL=SetFeatureHeightDialog-lz8m3JTS.js.map
