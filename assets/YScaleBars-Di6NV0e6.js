import{R as t,u as g,o as S,Y as F}from"./index-DvmOrY9r.js";import{g as $}from"./util-CGnSGovx.js";const x=n=>{const{color:e="rgb(255,255,255,0.8)"}=n;return t.createElement("rect",{...n,...g.getFillProps(e)})},w=S(function({model:n,rowHeight:e,labelWidth:o,exportSVG:a}){const{needsCustomLegend:c,needsScalebar:i,needsFullHeightScalebar:d,rowHeightTooSmallForScalebar:m,renderColorBoxes:u,sources:s}=n,y=Math.min(e,12),b=e>11,h=u?15:0,p=o+h+5,E=(a?10:0)||(i&&!m?50:0);return s?t.createElement(t.Fragment,null,d?t.createElement(x,{y:0,x:E,width:p,height:(s.length+.25)*e}):null,s.map((r,l)=>{const f=Math.min(20,e);return t.createElement(t.Fragment,{key:`${r.name}-${l}`},d?null:t.createElement(x,{y:l*e+1,x:E,width:p,height:f}),r.color?t.createElement(x,{y:l*e+1,x:E,width:h,height:c?e:f,color:r.color}):null,b?t.createElement("text",{y:l*e+13,x:E+h+2,fontSize:y},r.name):null)})):null}),W=S(({model:n})=>{const{ticks:e,scaleType:o}=n,{width:a}=g.getContainingView(n),c=`[${e==null?void 0:e.values[0]}-${e==null?void 0:e.values[1]}]${o==="log"?" (log scale)":""}`,i=g.measureText(c,14),m=a-i-25;return t.createElement(t.Fragment,null,t.createElement(x,{y:0,x:m,width:i+6,height:16}),t.createElement("text",{y:13,x:m},c))}),C=S(function({children:n,model:e,exportSVG:o}){const{height:a}=e;return o?n:t.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none",height:a,width:g.getContainingView(e).width}},n)}),B=S(function(n){const{model:e,orientation:o,exportSVG:a}=n,{stats:c,needsCustomLegend:i,needsFullHeightScalebar:d,rowHeightTooSmallForScalebar:m,rowHeight:u,sources:s,ticks:y}=e,b=Math.min(u,12),h=u>11,{width:p}=g.getContainingView(e),v=20;if(!(c&&s))return null;const r=Math.max(...s.map(l=>g.measureText(l.name,b)).map(l=>h?l:v));return t.createElement(C,{...n},d?t.createElement(t.Fragment,null,t.createElement("g",{transform:`translate(${a?0:$(e)},0)`},t.createElement(F,{model:e,orientation:o})),t.createElement("g",{transform:`translate(${p-r-100},0)`},t.createElement(w,{exportSVG:a,model:e,rowHeight:12,labelWidth:r}))):t.createElement(t.Fragment,null,t.createElement(w,{exportSVG:a,model:e,rowHeight:e.rowHeight,labelWidth:r}),m||i?t.createElement(W,{...n}):s.map((l,f)=>t.createElement("g",{transform:`translate(0 ${u*f})`,key:`${JSON.stringify(y)}-${f}`},t.createElement(F,{model:e,orientation:o})))))});export{B as Y};
//# sourceMappingURL=YScaleBars-Di6NV0e6.js.map