import{u as a,l as f}from"./index-Cb9Tbun5.js";function x(t,s,i=1){const c=s.map(n=>t.findIndex(o=>o.name===n)).sort((n,o)=>n-o);let e=0;for(const n of c){const o=Math.max(e,n-i);o>=e&&t.splice(o,0,t.splice(n,1)[0]),e=e+1}return t}function m(t,s,i=1){const c=s.map(n=>t.findIndex(o=>o.name===n)).sort((n,o)=>o-n);let e=t.length-1;for(const n of c){const o=Math.min(e,n+i);o<=e&&t.splice(o,0,t.splice(n,1)[0]),e=e-1}return t}const l=12.8;function r(t){const{prefersOffset:s}=t,{trackLabels:i}=a.getContainingView(t),c=a.getContainingTrack(t),e=f.getConf(c,"name");return i==="overlapping"&&!s?a.measureText(e,l)+100:10}export{m as a,r as g,x as m};
//# sourceMappingURL=util-BAycMn2B.js.map