import{u as E,R as e,at as T,P as w,au as k,av as N,aw as d,ax as o,ay as C,a as f,az as R,aA as D,b as S,D as L,p as y,a2 as x,v as A}from"./rpcWorker-DOy5Xw-Q.js";function I({searchResults:m,assemblyName:u,model:t,handleClose:i}){const l=E.getSession(t),{pluginManager:b}=E.getEnv(l),{assemblyManager:v}=l,g=u||t.displayedRegions[0].assemblyName,c=v.get(g);if(!c)throw new Error(`assembly ${g} not found`);if(!c.regions)throw new Error(`assembly ${g} regions not loaded`);function h(n){var a;if(n){const r=b.pluggableConfigSchemaType("track"),s=R(r,D(t),n);return((a=s==null?void 0:s.name)===null||a===void 0?void 0:a.value)||""}return""}async function p(n){var a;try{const r=(a=c==null?void 0:c.regions)===null||a===void 0?void 0:a.find(s=>n===s.refName);r?(t.setDisplayedRegions([r]),t.showAllRegions()):await t.navToLocString(n,g)}catch(r){console.warn(r),l.notify(`${r}`,"warning")}}return e.createElement(T,{component:w},e.createElement(k,null,e.createElement(N,null,e.createElement(d,null,e.createElement(o,null,"Name"),e.createElement(o,{align:"right"},"Location"),e.createElement(o,{align:"right"},"Track"),e.createElement(o,{align:"right"}))),e.createElement(C,null,m.map(n=>e.createElement(d,{key:n.getId()},e.createElement(o,{component:"th",scope:"row"},n.getLabel()),e.createElement(o,{align:"right"},n.getLocation()),e.createElement(o,{align:"right"},h(n.getTrackId())||"N/A"),e.createElement(o,{align:"right"},e.createElement(f,{onClick:async()=>{try{await p(n.getLocation()||n.getLabel());const a=n.getTrackId();a&&t.showTrack(a)}catch(a){console.error(a),l.notifyError(`${a}`,a)}i()},color:"primary",variant:"contained"},"Go")))))))}function B({model:m,assemblyName:u,searchQuery:t,searchResults:i,handleClose:l}){return e.createElement(S.Dialog,{open:!0,maxWidth:"xl",onClose:l,title:"Search results"},e.createElement(L,null,i!=null&&i.length?e.createElement(e.Fragment,null,e.createElement(y,null,"Showing results for ",e.createElement("b",null,t)),e.createElement(I,{model:m,handleClose:l,assemblyName:u,searchResults:i})):e.createElement(y,null,"No results found for ",e.createElement("b",null,t))),e.createElement(x,null),e.createElement(A,null,e.createElement(f,{onClick:()=>{l()},color:"primary"},"Cancel")))}export{B as default};
//# sourceMappingURL=SearchResultsDialog-Pqz4UXRC.js.map