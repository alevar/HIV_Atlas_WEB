import{R as e,K as o,o as y,L as T}from"./rpcWorker-DOy5Xw-Q.js";const c=l=>l.toLocaleString("en-US"),$=e.forwardRef(function({model:m,feature:t},i){const r=t.get("start"),s=t.get("end"),E=t.get("refName"),g=r===s?c(r):`${c(r)}..${c(s)}`,a=t.get("sources"),u=t.get("source"),d=t.get("summary"),p=Object.fromEntries(m.sources.map(n=>[n.name,n]));return e.createElement("div",{ref:i},[E,g].filter(n=>!!n).join(":"),e.createElement("br",null),a?e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"color"),e.createElement("th",null,"source"),e.createElement("th",null,"score"))),e.createElement("tbody",null,Object.entries(a).map(([n,b])=>e.createElement("tr",{key:n},e.createElement("td",{style:{background:p[n].color}}," "),e.createElement("td",null,n),e.createElement("td",null,o(b.score)))))):e.createElement("span",null,u," ",d?`min:${o(t.get("minScore"))} avg:${o(t.get("score"))} max:${o(t.get("maxScore"))}`:o(t.get("score"))))}),j=y(l=>e.createElement(T,{useClientY:!0,TooltipContents:$,...l}));export{T as Tooltip,j as default};
//# sourceMappingURL=Tooltip-DLGrjj0P.js.map
