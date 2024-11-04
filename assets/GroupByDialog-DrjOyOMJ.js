import{o as D,a as o,u as l,x as F,R as e,c as f,D as I,T as v,e as B,C as L,d as N,f as V,B as y,h as q}from"./index-DvmOrY9r.js";function A(c){return JSON.parse(JSON.stringify(c))}const z=D(function(c){const{model:n,handleClose:i}=c,[t,C]=o.useState(""),[s,b]=o.useState(),[T,m]=o.useState(!1),[p,E]=o.useState(),[u,S]=o.useState(!0),w=/^[A-Za-z][A-Za-z0-9]$/.exec(t),r=t.length===2&&!w,h=l.useDebounce(t,1e3);return o.useEffect(()=>{(async()=>{try{if(!r){E(void 0),m(!0);const a=await F({self:n,tag:h,blocks:l.getContainingView(n).staticBlocks});b(a)}}catch(a){console.error(a),E(a)}finally{m(!1)}})()},[n,r,h]),e.createElement(f.Dialog,{open:!0,onClose:i,title:"Group by tag"},e.createElement(I,null,e.createElement(v,null,"Set the tag to group by. NOTE: this will make a set of fully functional subtracks with the filter by by default set to the values of the tag that are visible in the current view"),e.createElement(v,{color:"textSecondary"},"Examples: HP for haplotype, RG for read group, etc."),e.createElement(B,{control:e.createElement(L,{checked:u,onChange:()=>{S(!u)}}),label:"Make a new subtrack for undefined values of tag as well?"}),e.createElement(N,{value:t,onChange:a=>{C(a.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2,"data-testid":"group-tag-name-input"},error:r,helperText:r?"Not a valid tag":"",autoComplete:"off","data-testid":"group-tag-name"}),p?e.createElement(f.ErrorMessage,{error:p}):T?e.createElement(f.LoadingEllipses,{title:"Loading unique tags"}):s?e.createElement("div",null,e.createElement("div",null,"Found unique ",t," values:"),e.createElement("div",null,s.join(", "))):null),e.createElement(V,null,e.createElement(y,{variant:"contained",color:"primary",type:"submit",disabled:!s,autoFocus:!0,onClick:()=>{const a=l.getContainingTrack(n),d=A(q(a.configuration)),x=l.getSession(n);if(s){const k=[...s];u&&k.push(void 0);for(const g of k){const $=x.addTrackConf({...d,trackId:`${d.trackId}-${t}:${g}-${+Date.now()}-sessionTrack`,name:`${d.name} ${t}:${g}`,displays:void 0});l.getContainingView(n).showTrack($.trackId).displays[0].setFilterBy({flagInclude:0,flagExclude:1540,tagFilter:{tag:t,value:g}})}}i()}},"Submit"),e.createElement(y,{variant:"contained",color:"secondary",onClick:()=>{i()}},"Cancel")))});export{z as default};
//# sourceMappingURL=GroupByDialog-DrjOyOMJ.js.map
