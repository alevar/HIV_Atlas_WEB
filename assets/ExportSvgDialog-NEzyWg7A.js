import{u as p,a as s,R as e,c as y,D as z,M as r,e as w,C as D,T as b,f as F,B as h,i as N,d as R}from"./index-DvmOrY9r.js";function M(){return e.createElement("div",null,e.createElement(N,{size:20,style:{marginRight:20}}),e.createElement(b,{display:"inline"},"Creating SVG"))}function o(n,a){return p.useLocalStorage(`svg-${n}`,a)}function c({children:n,...a}){return e.createElement("div",null,e.createElement(R,{...a},n))}function G({model:n,handleClose:a}){const l=p.getSession(n),i=typeof OffscreenCanvas<"u",[u,C]=s.useState(i),[S,m]=s.useState(!1),[f,g]=s.useState(),[E,T]=o("file","jbrowse.svg"),[v,k]=o("tracklabels","offset"),[d,x]=o("theme",l.themeName||"default");return e.createElement(y.Dialog,{open:!0,onClose:a,title:"Export SVG"},e.createElement(z,null,f?e.createElement(y.ErrorMessage,{error:f}):S?e.createElement(M,null):null,e.createElement(c,{helperText:"filename",value:E,onChange:t=>{T(t.target.value)}}),e.createElement(c,{select:!0,label:"Track label positioning",variant:"outlined",style:{width:150},value:v,onChange:t=>{k(t.target.value)}},e.createElement(r,{value:"offset"},"Offset"),e.createElement(r,{value:"overlay"},"Overlay"),e.createElement(r,{value:"left"},"Left"),e.createElement(r,{value:"none"},"None")),l.allThemes?e.createElement(c,{select:!0,label:"Theme",variant:"outlined",value:d,onChange:t=>{x(t.target.value)}},Object.entries(l.allThemes()).map(([t,L])=>e.createElement(r,{key:t,value:t},L.name||"(Unknown name)"))):null,i?e.createElement(w,{control:e.createElement(D,{checked:u,onChange:()=>{C(t=>!t)}}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):e.createElement(b,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),e.createElement(F,null,e.createElement(h,{variant:"contained",color:"secondary",onClick:()=>{a()}},"Cancel"),e.createElement(h,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{m(!0),g(void 0);try{await n.exportSvg({rasterizeLayers:u,filename:E,trackLabels:v,themeName:d}),a()}catch(t){console.error(t),g(t)}finally{m(!1)}}},"Submit")))}export{G as default};
//# sourceMappingURL=ExportSvgDialog-NEzyWg7A.js.map