import{u as d,h as y,R as e,j as f,k as P}from"./rpcWorker-DOy5Xw-Q.js";async function B(n,c){const{height:l,id:g}=n,{overrideHeight:h}=c,u=d.getContainingView(n),{offsetPx:E,roundedDynamicBlocks:p,width:w}=u,x=await Promise.all(p.map(async t=>{const o=y.create({key:t.key,region:t}),r=n.regionCannotBeRenderedText(t)||n.regionCannotBeRendered(t);if(r)return[t,{reactElement:e.createElement(e.Fragment,null,e.createElement("rect",{x:0,y:0,width:w,height:20,fill:"#aaa"}),e.createElement("text",{x:0,y:15},r))}];const{rpcManager:s,renderArgs:m,renderProps:a,rendererType:i}=f(o,n);return[t,await i.renderInClient(s,{...m,...a,viewParams:d.getViewParams(n,!0),exportSVG:c,theme:c.theme||a.theme})]}));return e.createElement(e.Fragment,null,x.map(([t,o],r)=>{const{offsetPx:s,widthPx:m}=t,a=s-E,i=P(g,r);return e.createElement(e.Fragment,{key:`frag-${r}`},e.createElement("defs",null,e.createElement("clipPath",{id:i},e.createElement("rect",{x:0,y:0,width:m,height:h||l}))),e.createElement("g",{transform:`translate(${a} 0)`},e.createElement("g",{clipPath:`url(#${i})`},e.createElement(d.ReactRendering,{rendering:o}))))}))}export{B as renderBaseLinearDisplaySvg};
//# sourceMappingURL=renderSvg-Bu7pety0.js.map
