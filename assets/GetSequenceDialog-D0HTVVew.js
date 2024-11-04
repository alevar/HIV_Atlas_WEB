import{ao as j,ap as L,aq as I,m as M,o as T,r as c,u as S,R as e,b as G,D as P,p as k,aD as z,x as B,q as H,F as W,s as A,C as $,v as V,a as y,b3 as J,b4 as K,b5 as Q,e as U}from"./rpcWorker-DOy5Xw-Q.js";var x={};Object.defineProperty(x,"__esModule",{value:!0});x.formatFastaLines=N;var X=x.formatSeqFasta=Y;function N(a){return a.replaceAll(/(.{1,80})/g,`$1
`).trimEnd()}function Y(a){return a.map(r=>`>${r.header}
${N(r.seq)}`).join(`
`)}var w={},Z=L;Object.defineProperty(w,"__esModule",{value:!0});var D=w.default=void 0,ee=Z(j()),te=I;D=w.default=(0,ee.default)((0,te.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"GetApp");const ae=M()({dialogContent:{width:"80em"},textAreaFont:{fontFamily:"Courier New"}});async function ne(a,r,f){const o=S.getSession(a),{leftOffset:i,rightOffset:s}=a;if(!i||!s)throw new Error("no offsets on model to use for range");if(i.assemblyName!==s.assemblyName)throw new Error("not able to fetch sequences from multiple assemblies");const{rpcManager:b,assemblyManager:u}=o,d=i.assemblyName||s.assemblyName||"",p=u.get(d);if(!p)throw new Error(`assembly ${d} not found`);const g=U.getConf(p,["sequence","adapter"]),l="getSequence";return b.call(l,"CoreGetFeatures",{adapterConfig:g,regions:r,sessionId:l,signal:f})}const se=T(function({model:a,handleClose:r}){const{classes:f}=ae(),[o,i]=c.useState(),[s,b]=c.useState(),[u,d]=c.useState(!1),[p,g]=c.useState(!1),[l,O]=c.useState(!1),{leftOffset:F,rightOffset:R}=a,h=s===void 0;c.useEffect(()=>{const n=new AbortController;return(async()=>{try{const t=a.getSelectedRegions(F,R);if(t.length===0)throw new Error("Selected region is out of bounds");const E=await ne(a,t,n.signal);b(E)}catch(t){console.error(t),i(t)}})(),()=>{n.abort()}},[a,F,R]);const m=s?X(s.map(n=>{let t=n.get("seq");const E=n.get("refName"),C=n.get("start")+1,q=n.get("end"),_=`${E}:${C}-${q}`;if((t==null?void 0:t.length)!==q-C+1)throw new Error(`${_} returned ${t.length.toLocaleString()} bases, but should have returned ${(q-C).toLocaleString()}`);return u&&(t=S.reverse(t)),l&&(t=S.complement(t)),{header:_+(u?"-rev":"")+(l?"-comp":""),seq:t}})):"",v=m?m.length>1e6:!1;return e.createElement(G.Dialog,{maxWidth:"xl",open:!0,onClose:()=>{r(),a.setOffsets()},title:"Reference sequence"},e.createElement(P,null,o?e.createElement(k,{color:"error"},`${o}`):h?e.createElement(z,null,"Retrieving reference sequence...",e.createElement(B,{style:{marginLeft:10},size:20,disableShrink:!0})):null,e.createElement(H,{"data-testid":"rubberband-sequence",variant:"outlined",multiline:!0,minRows:5,maxRows:10,disabled:v,className:f.dialogContent,fullWidth:!0,value:v?"Reference sequence too large to display, use the download FASTA button":m,InputProps:{readOnly:!0,classes:{input:f.textAreaFont}}}),e.createElement(W,null,e.createElement(A,{control:e.createElement($,{value:u,onChange:n=>{d(n.target.checked)}}),label:"Reverse sequence"}),e.createElement(A,{control:e.createElement($,{value:l,onChange:n=>{O(n.target.checked)}}),label:"Complement sequence"})),e.createElement(k,{style:{margin:10}},'Note: Check both boxes for the "reverse complement"')),e.createElement(V,null,e.createElement(y,{onClick:()=>{J(m),g(!0),setTimeout(()=>{g(!1)},500)},disabled:h||!!o||v,color:"primary",startIcon:e.createElement(K,null)},p?"Copied":"Copy to clipboard"),e.createElement(y,{onClick:()=>{Q.saveAs(new Blob([m||""],{type:"text/x-fasta;charset=utf-8"}),"jbrowse_ref_seq.fa")},disabled:h||!!o,color:"primary",startIcon:e.createElement(D,null)},"Download FASTA"),e.createElement(y,{onClick:r,variant:"contained"},"Close")))});export{se as default};
//# sourceMappingURL=GetSequenceDialog-D0HTVVew.js.map
