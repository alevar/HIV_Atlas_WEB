import{bA as b,R as e,u as g,a7 as H,bB as N,bC as V,bD as G,bE as T,bF as z,w as $,am as F,bG as M,c as L}from"./index-DvmOrY9r.js";function C({width:t,height:n,shift:a}){const l=b();return e.createElement("rect",{width:t+a*2,height:n,fill:g.stripAlpha(l.palette.background.default)})}function O({model:t,height:n}){const{dynamicBlocks:a,offsetPx:l,interRegionPaddingWidth:i}=t;return e.createElement(e.Fragment,null,a.contentBlocks.slice(1).map(o=>e.createElement("rect",{key:o.key,x:o.offsetPx-l-i,width:i,y:0,height:n,fill:"grey"})))}function D({trackLabels:t,trackName:n,fontSize:a,trackLabelOffset:l,x:i}){const o=b(),h=g.stripAlpha(o.palette.text.primary),s=t==="overlay"?5:0,m=t==="offset"?5:0,c=g.coarseStripHTML(n);return t!=="none"?e.createElement("g",null,t==="left"?e.createElement("text",{x:l-40,y:20,fill:h,fontSize:a,dominantBaseline:"hanging",textAnchor:"end"},c):e.createElement("text",{x:i+s,y:m,fill:h,fontSize:a,dominantBaseline:"hanging"},c)):null}function I({displayResults:t,model:n,textHeight:a,fontSize:l,trackLabels:i="offset",trackLabelOffset:o=0}){const h=g.getSession(n),s=i==="offset"?a:0;let m=0;return e.createElement(e.Fragment,null,t.map(({track:c,result:r})=>{const f=m,p=c.configuration,d=H.getTrackName(p,h),y=c.displays[0],x=Math.max(-n.offsetPx,0);return m+=y.height+s,e.createElement("g",{key:p.trackId,transform:`translate(0 ${f})`},e.createElement("g",{transform:`translate(${o} ${s})`},e.createElement(O,{model:n,height:y.height}),r),e.createElement(D,{trackName:d,fontSize:l,trackLabels:i,trackLabelOffset:o,x}))}))}function J({start:t,end:n,bpPerPx:a,reversed:l=!1,major:i=!0,minor:o=!0,hideText:h=!1}){const s=N(t,n,a,i,o),m=b(),c=g.stripAlpha(m.palette.text.secondary);return e.createElement(e.Fragment,null,s.map(r=>{const f=(l?n-r.base:r.base-t)/a;return e.createElement("line",{key:`tick-${r.base}`,x1:f,x2:f,y1:0,y2:r.type==="major"?6:4,strokeWidth:1,stroke:c})}),h?null:s.filter(r=>r.type==="major").map(r=>{const f=(l?n-r.base:r.base-t)/a;return e.createElement("text",{key:`label-${r.base}`,x:f-3,y:18,fontSize:11,fill:c},g.getTickDisplayStr(r.base+1,a))}))}function _({model:t,fontSize:n}){const{dynamicBlocks:{contentBlocks:a},offsetPx:l,bpPerPx:i}=t,o=a.length<5,h=b(),s=g.stripAlpha(h.palette.text.primary);return e.createElement(e.Fragment,null,e.createElement(O,{model:t,height:30}),a.map(m=>{const{start:c,end:r,key:f,reversed:p,offsetPx:d,refName:y,widthPx:x}=m,E=d-l,u=`clip-${f}`;return e.createElement("g",{key:f},e.createElement("defs",null,e.createElement("clipPath",{id:u},e.createElement("rect",{x:0,y:0,width:x,height:100}))),e.createElement("g",{transform:`translate(${E} 0)`},e.createElement("g",{clipPath:`url(#${u})`},e.createElement("text",{x:4,y:n,fontSize:n,fill:s},y),e.createElement("g",{transform:"translate(0 20)"},e.createElement(J,{hideText:!o,start:c,end:r,bpPerPx:i,reversed:p})))))}))}function j({model:t,fontSize:n}){const{offsetPx:a,dynamicBlocks:{totalWidthPxWithoutBorders:l,totalBp:i}}=t,o=b(),h=g.getBpDisplayStr(i),s=Math.max(-a,0),m=s+l,c=g.stripAlpha(o.palette.text.secondary),r=s+(m-s)/2,f=n;return e.createElement(e.Fragment,null,e.createElement("line",{x1:s,x2:m,y1:10,y2:10,stroke:c}),e.createElement("line",{x1:s,x2:s,y1:5,y2:15,stroke:c}),e.createElement("line",{x1:m,x2:m,y1:5,y2:15,stroke:c}),e.createElement("text",{x:r,y:f,textAnchor:"middle",dominantBaseline:"hanging",fontSize:n,fill:c},h))}function X({model:t,fontSize:n,cytobandHeight:a,rulerHeight:l}){const{width:i,assemblyNames:o,showCytobands:h,displayedRegions:s}=t,{assemblyManager:m}=g.getSession(t),c=o.length>1?"":o[0],r=m.get(c),f=b(),p=g.stripAlpha(f.palette.text.primary),d=V.create({displayedRegions:JSON.parse(JSON.stringify(s)),interRegionPaddingWidth:0,minimumBlockWidth:t.minimumBlockWidth}),y=t.dynamicBlocks.contentBlocks;if(!y.length)return null;d.setVolatileWidth(i),d.showAllRegions();const x=d.dynamicBlocks.contentBlocks[0],E=y.at(0),u=y.at(-1),S=d.bpToPx({...E,coord:E.reversed?E.end:E.start})||0,v=d.bpToPx({...u,coord:u.reversed?u.start:u.end})||0,k=+h*a;return e.createElement("g",{id:"header"},e.createElement("text",{x:0,y:0,dominantBaseline:"hanging",fontSize:n,fill:p},c),h?e.createElement("g",{transform:`translate(0 ${l})`},e.createElement(G,{overview:d,assembly:r,block:x}),e.createElement("rect",{stroke:"red",fill:"rgb(255,0,0)",fillOpacity:.1,width:Math.max(v-S,.5),height:T-1,x:S,y:.5}),e.createElement("g",{transform:`translate(0,${T})`},e.createElement(z,{overview:d,model:t,useOffset:!1}))):null,e.createElement("g",{transform:`translate(0 ${n+k})`},e.createElement(j,{model:t,fontSize:n})),e.createElement("g",{transform:`translate(0 ${l+k})`},e.createElement(_,{model:t,fontSize:n})))}function q(t,n,a){return g.sum(t.map(l=>l.displays[0].height+(["none","left"].includes(a)?0:n)))}async function Q(t,n){await $(()=>t.initialized);const{textHeight:a=18,headerHeight:l=40,rulerHeight:i=50,fontSize:o=13,cytobandHeight:h=100,trackLabels:s="offset",themeName:m="default",Wrapper:c=({children:w})=>w}=n,r=g.getSession(t),{allThemes:f}=r,{createRootFn:p}=F(t),d=f==null?void 0:f()[m],{width:y,tracks:x,showCytobands:E}=t,u=50,S=+E*h,v=l+i+S+10,k=q(x,a,s)+v+100,A=await Promise.all(x.map(async w=>{const R=w.displays[0];return await $(()=>!R.renderProps().notReady),{track:w,result:await R.renderSvg({...n,theme:d})}})),W=g.max(x.map(w=>g.measureText(H.getTrackName(w.configuration,r),o)),0)+40,B=s==="left"?W:0,P=y+B;return g.renderToStaticMarkup(e.createElement(M,{theme:L.createJBrowseTheme(d)},e.createElement(c,null,e.createElement("svg",{width:P,height:k,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:[0,0,P+u*2,k].toString()},e.createElement(C,{width:P,height:k,shift:u}),e.createElement("g",{transform:`translate(${u} 0)`},e.createElement("g",{transform:`translate(${B})`},e.createElement(X,{model:t,fontSize:o,rulerHeight:i,cytobandHeight:h})),e.createElement("g",{transform:`translate(0 ${v})`},e.createElement(I,{textHeight:a,fontSize:o,model:t,displayResults:A,trackLabels:s,trackLabelOffset:B})))))),p)}export{_ as SVGRuler,I as SVGTracks,Q as renderToSvg};
//# sourceMappingURL=SVGLinearGenomeView-ztBXKI7p.js.map
