import{ao as R,ap as $,aq as P,o as b,R as e,af as M,P as I,ag as G,ah as H,ai as z,aj as u,ak as J,l as C,aa as x,d as B,M as V,aw as E,c as y,a as m,B as g,bm as N,m as W,ba as K,D as Q,f as U}from"./index-DvmOrY9r.js";import{d as X}from"./Delete-D96jQr9r.js";var h={},Y=$;Object.defineProperty(h,"__esModule",{value:!0});var j=h.default=void 0,Z=Y(R()),ee=P;j=h.default=(0,Z.default)((0,ee.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Create");const te=b(function({rootModel:t,setIsAssemblyBeingEdited:o,setAssemblyBeingEdited:a}){function l(s){t.jbrowse.removeAssemblyConf(s)}const{assemblies:r}=t.jbrowse;return e.createElement(M,{component:I},e.createElement(G,null,e.createElement(H,null,e.createElement(z,null,e.createElement(u,null,"Name"),e.createElement(u,null,"Display name"),e.createElement(u,null,"Aliases"),e.createElement(u,null,"Actions"))),e.createElement(J,null,r.map(s=>{const n=C.readConfObject(s,"name"),d=C.readConfObject(s,"displayName"),i=C.readConfObject(s,"aliases");return e.createElement(z,{key:n},e.createElement(u,null,n),e.createElement(u,null,d),e.createElement(u,null,i?i.toString():""),e.createElement(u,null,e.createElement(x,{"data-testid":`${n}-edit`,onClick:()=>{o(!0),a(s)}},e.createElement(j,{color:"primary"})),e.createElement(x,{"data-testid":`${n}-delete`,onClick:()=>{l(n)}},e.createElement(X,{color:"error"}))))}))))}),ae=b(function({adapterSelection:t,setAdapterSelection:o,adapterTypes:a}){return e.createElement(B,{value:t,label:"Type",select:!0,helperText:"Type of adapter to use",fullWidth:!0,onChange:l=>{o(l.target.value)}},a.map(l=>e.createElement(V,{key:l,value:l},l)))}),ne=b(function({adapterSelection:t,fastaLocation:o,faiLocation:a,gziLocation:l,twoBitLocation:r,chromSizesLocation:s,setFaiLocation:n,setGziLocation:d,setTwoBitLocation:i,setFastaLocation:L,setChromSizesLocation:f}){return t==="IndexedFastaAdapter"||t==="BgzipFastaAdapter"?e.createElement(E,{container:!0,spacing:2},e.createElement(E,{item:!0},e.createElement(y.FileSelector,{name:"fastaLocation",location:o,setLocation:c=>{L(c)}})),e.createElement(E,{item:!0},e.createElement(y.FileSelector,{name:"faiLocation",location:a,setLocation:c=>{n(c)}})),t==="BgzipFastaAdapter"?e.createElement(E,{item:!0},e.createElement(y.FileSelector,{name:"gziLocation",location:l,setLocation:c=>{d(c)}})):null):t==="TwoBitAdapter"?e.createElement(E,{container:!0,spacing:2},e.createElement(E,{item:!0},e.createElement(y.FileSelector,{name:"twoBitLocation",location:r,setLocation:c=>{i(c)}})),e.createElement(E,{item:!0},e.createElement(y.FileSelector,{name:"chromSizesLocation (optional, can be added to speed up loading 2bit files with many contigs)",location:s,setLocation:c=>{f(c)}}))):null}),A={uri:""},k=["IndexedFastaAdapter","BgzipFastaAdapter","TwoBitAdapter"],le=b(function({rootModel:t,setFormOpen:o}){const[a,l]=m.useState(""),[r,s]=m.useState(""),[n,d]=m.useState(k[0]),[i,L]=m.useState(A),[f,c]=m.useState(A),[w,_]=m.useState(A),[F,D]=m.useState(A),[T,q]=m.useState(A);function O(){var p,S;if(a==="")(p=t.session)===null||p===void 0||p.notify("Can't create an assembly without a name");else{o(!1);let v;if(n==="IndexedFastaAdapter")v={name:a,displayName:r,sequence:{adapter:{type:"IndexedFastaAdapter",fastaLocation:i,faiLocation:f}}};else if(n==="BgzipFastaAdapter")v={name:a,displayName:r,sequence:{adapter:{type:"BgzipFastaAdapter",fastaLocation:i,faiLocation:f,gziLocation:w}}};else if(n==="TwoBitAdapter")v={name:a,displayName:r,sequence:{adapter:{type:"TwoBitAdapter",twoBitLocation:F,chromSizesLocation:T}}};else throw new Error(`unknown ${n}`);t.jbrowse.addAssemblyConf(v),(S=t.session)===null||S===void 0||S.notify(`Successfully added ${a} assembly to JBrowse 2`,"success")}}return e.createElement("div",null,e.createElement(I,null,e.createElement(B,{id:"assembly-name",inputProps:{"data-testid":"assembly-name"},label:"Assembly name",helperText:"The assembly name e.g. hg38",variant:"outlined",value:a,onChange:p=>{l(p.target.value)}}),e.createElement(B,{id:"assembly-name",inputProps:{"data-testid":"assembly-display-name"},label:"Assembly display name",helperText:'A human readable display name for the assembly e.g. "Homo sapiens (hg38)"',variant:"outlined",value:r,onChange:p=>{s(p.target.value)}}),e.createElement(ae,{adapterSelection:n,adapterTypes:k,setAdapterSelection:d}),e.createElement(ne,{adapterSelection:n,fastaLocation:i,faiLocation:f,gziLocation:w,twoBitLocation:F,chromSizesLocation:T,setFaiLocation:c,setGziLocation:_,setTwoBitLocation:D,setFastaLocation:L,setChromSizesLocation:q})),e.createElement(g,{variant:"contained",color:"secondary",startIcon:e.createElement(N,null),onClick:O},"Create new assembly"))}),se=W()({container:{overflow:"auto",maxHeight:600}}),oe=b(function({assembly:t}){const{classes:o}=se();return e.createElement("div",{className:o.container},t?e.createElement(K,{model:{target:t}}):e.createElement("div",null,"No assembly"))}),ce=b(function({rootModel:t,onClose:o}){const[a,l]=m.useState(!1),[r,s]=m.useState(!1),[n,d]=m.useState(),i=!a&&!r;return e.createElement(y.Dialog,{open:!0,onClose:()=>{o(!1)},title:"Assembly manager"},e.createElement(Q,null,i?e.createElement(te,{rootModel:t,setIsAssemblyBeingEdited:s,setAssemblyBeingEdited:d}):null,r?e.createElement(oe,{assembly:n}):null,a?e.createElement(le,{rootModel:t,setFormOpen:l}):null),e.createElement(U,null,a?e.createElement(g,{variant:"contained",onClick:()=>{l(!1)}},"Back"):null,r?e.createElement(g,{variant:"contained",onClick:()=>{s(!1)}},"Back"):null,i?e.createElement(e.Fragment,null,e.createElement(g,{color:"secondary",variant:"contained",onClick:()=>{o(!1)}},"Close"),e.createElement(g,{variant:"contained",startIcon:e.createElement(N,null),onClick:()=>{l(!0)}},"Add new assembly")):null))});export{ce as default};
//# sourceMappingURL=index-DwKCKroj.js.map
