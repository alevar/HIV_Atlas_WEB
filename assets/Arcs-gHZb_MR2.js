import{aL as F,u as v,r as P,o as S,e as T,R as d}from"./rpcWorker-DOy5Xw-Q.js";function R(e,t){var n,i,r,s;const a=t?F(t):void 0,u=e.get("start");let l=e.get("end");const f=e.get("strand"),c=e.get("mate"),m=e.get("refName");let p,k=0,N=0,b=0,E=0;if(["<TRA","<DEL","<INV","<INS","<DUP","<CNV"].some(o=>t==null?void 0:t.startsWith(o))){const o=e.get("INFO"),g=(i=(n=o==null?void 0:o.END)===null||n===void 0?void 0:n[0])!==null&&i!==void 0?i:l;p=(s=(r=o==null?void 0:o.CHR2)===null||r===void 0?void 0:r[0])!==null&&s!==void 0?s:m,k=g,N=g-1,l=u+1}else if(a!=null&&a.MatePosition){const o=a.MatePosition.split(":");E=a.MateDirection==="left"?1:-1,b=a.Join==="left"?-1:1,k=+o[1],N=+o[1]-1,p=o[0]}return{k1:{refName:m,start:u,end:l,strand:f,mateDirection:E},k2:c??{refName:p||"unknown",end:k,start:N,mateDirection:b}}}function V(e,t){var n;const{k1:i,k2:r}=R(e,t);return[e.get("name"),e.get("id"),v.assembleLocString(i),v.assembleLocString(r),(n=e.get("INFO"))===null||n===void 0?void 0:n.SVTYPE,t].filter(s=>!!s).join(" - ")}const W=P.lazy(()=>import("./ArcTooltip-B9xMq20J.js")),A=S(function({model:e,feature:t,alt:n,assembly:i,view:r}){var s,a;const[u,l]=P.useState(!1),{height:f}=e,{k1:c,k2:m}=R(t,n),p=P.useRef(null),k=T.getConf(e,"color",{feature:t,alt:n}),N=i.getCanonicalRefName(c.refName)||c.refName,b=i.getCanonicalRefName(m.refName)||m.refName,E=c.start,C=m.start,o=(s=r.bpToPx({refName:N,coord:E}))===null||s===void 0?void 0:s.offsetPx,g=(a=r.bpToPx({refName:b,coord:C}))===null||a===void 0?void 0:a.offsetPx;if(o!==void 0&&g!==void 0){const _=(g-o)/2,D=Math.abs(_),O=Math.min(f,D),$=o-r.offsetPx,w=g-r.offsetPx,h=$,x=w,y=u?"black":k,M=3;return D>1?d.createElement(d.Fragment,null,d.createElement("path",{d:`M ${h} 0 C ${h} ${O}, ${x} ${O}, ${x} 0`,ref:p,...v.getStrokeProps(y),strokeWidth:M,onMouseOut:()=>{l(!1)},onMouseOver:()=>{l(!0)},onClick:()=>{e.selectFeature(t)},fill:"none",pointerEvents:"stroke"}),c.mateDirection?d.createElement("line",{...v.getStrokeProps(y),strokeWidth:M,onMouseOut:()=>{l(!1)},onMouseOver:()=>{l(!0)},onClick:()=>{e.selectFeature(t)},x1:h,x2:h+c.mateDirection*20,y1:1.5,y2:1.5}):null,m.mateDirection?d.createElement("line",{...v.getStrokeProps(y),strokeWidth:M,onMouseOut:()=>{l(!1)},onMouseOver:()=>{l(!0)},onClick:()=>{e.selectFeature(t)},x1:x,x2:x+m.mateDirection*20,y1:1.5,y2:1.5}):null,u?d.createElement(P.Suspense,{fallback:null},d.createElement(W,{contents:V(t,n)})):null):null}return null}),L=S(function({model:e,exportSVG:t,children:n}){const{height:i}=e,r=v.getContainingView(e),s=Math.round(r.dynamicBlocks.totalWidthPx);return t?n:d.createElement("svg",{width:s,height:i},n)}),j=S(function({model:e,exportSVG:t}){const n=v.getContainingView(e),i=v.getSession(e),{assemblyManager:r}=i,{features:s}=e,a=r.get(n.assemblyNames[0]);return a?d.createElement(L,{model:e,exportSVG:t},s==null?void 0:s.map(u=>{var l;const f=u.get("ALT");return(l=f==null?void 0:f.map(c=>d.createElement(A,{key:`${u.id()}-${c}`,session:i,feature:u,alt:c,view:n,model:e,assembly:a})))!==null&&l!==void 0?l:d.createElement(A,{key:u.id(),session:i,feature:u,view:n,model:e,assembly:a})})):null});export{j as A};
//# sourceMappingURL=Arcs-gHZb_MR2.js.map