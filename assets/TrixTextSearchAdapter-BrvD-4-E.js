var B=Object.defineProperty;var A=(n,t,s)=>t in n?B(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var y=(n,t,s)=>A(n,typeof t!="symbol"?t+"":t,s);import{ab as C,c as E,e as F,i as I,ac as O}from"./rpcWorker-DOy5Xw-Q.js";const g=65536,k=10;function T(n,t){const s=new Set;return n.filter(e=>{const o=t(e);return s.has(o)?!1:s.add(o)})}class _{constructor(t,s,e=20){y(this,"ixxFile");y(this,"ixFile");y(this,"maxResults");this.ixxFile=t,this.ixFile=s,this.maxResults=e}async search(t,s){let e=[];const i=t.split(" ")[0].toLowerCase(),r=await this._getBuffer(i,s);if(!r)return[];let{end:c,buffer:d}=r,l=!1;for(;!l;){const u=d.toString(),p=u.slice(0,u.lastIndexOf(`
`)).split(`
`).filter(a=>!!a),b=[];for(const a of p){const m=a.split(" ")[0],x=m.startsWith(i);m.slice(0,i.length)>i&&(l=!0),x&&b.push(a)}const h=b.flatMap(a=>{const[m,...x]=a.split(" ");return x.map(w=>[m,w.split(",")[0]])});if(e.length+h.length<this.maxResults&&!l){const a=await this.ixFile.read(C.Buffer.alloc(g),0,g,c,s);if(!a.bytesRead){e=e.concat(h);break}d=C.Buffer.concat([d,a.buffer]),c+=g}else if(e.length+h.length>=this.maxResults||l){e=e.concat(h);break}}return T(e,u=>u[1]).slice(0,this.maxResults)}async getIndex(t){return(await this.ixxFile.readFile({encoding:"utf8",...t})).split(`
`).filter(e=>!!e).map(e=>{const o=e.length-k,i=e.slice(0,o),r=e.slice(o),c=Number.parseInt(r,16);return[i,c]})}async _getBuffer(t,s){let e=0,o=65536;const i=await this.getIndex(s);for(const[d,l]of i)d.slice(0,t.length)<t&&(e=l,o=l+65536);const r=o-e;return r<0?void 0:{...await this.ixFile.read(C.Buffer.alloc(r),0,r,e,s),end:o}}}function L(n){try{return decodeURIComponent(n)}catch{return n}}function S(n,t,s=15){const e=n.toLowerCase().indexOf(t);return n.length<40?n:(Math.max(0,e-s)>0?"...":"")+n.slice(Math.max(0,e-s),e+t.length+s).trim()+(e+t.length<n.length?"...":"")}class N extends E.BaseAdapter{constructor(t,s,e){super(t,s,e);const o=F.readConfObject(t,"ixFilePath"),i=F.readConfObject(t,"ixxFilePath");if(!o)throw new Error("must provide out.ix");if(!i)throw new Error("must provide out.ixx");this.trixJs=new _(I.openLocation(i,e),I.openLocation(o,e),1500)}async searchIndex(t){const s=t.queryString.toLowerCase(),e=s.split(" "),i=(await this.trixJs.search(s)).filter(([,r])=>e.every(c=>L(r).toLowerCase().includes(c))).map(([r,c])=>{const d=JSON.parse(c.replaceAll("|",",")),[l,u,...p]=d.map(f=>L(f)),b=p.findIndex(f=>!!f),h=p.map(f=>f.toLowerCase()).findIndex(f=>f.includes(r.toLowerCase())),a=p[b],m=p[h],x=h!==-1?S(m,r):void 0,w=S(a,r),R=!x||w.toLowerCase()===x.toLowerCase()?w:`${w} (${x})`;return new O({locString:l,label:a,displayString:R,matchedObject:d.map(f=>decodeURIComponent(f)),trackId:u})});return t.searchType==="exact"?i.filter(r=>r.getLabel().toLowerCase()===t.queryString.toLowerCase()):i}freeResources(){}}export{N as default};
//# sourceMappingURL=TrixTextSearchAdapter-BrvD-4-E.js.map