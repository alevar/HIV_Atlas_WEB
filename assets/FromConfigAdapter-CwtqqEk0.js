import{I as u,l as c,O as g,J as i}from"./index-DvmOrY9r.js";function m(n){const e=new Map;for(const a of n){const t=new i(a),s=t.get("refName");let r=e.get(s);r||(r=[],e.set(s,r)),r.push(t)}for(const a of e.values())a.sort((t,s)=>t.get("start")-s.get("start"));return e}class p extends u.BaseFeatureDataAdapter{constructor(e,a,t){super(e,a,t);const s=c.readConfObject(e,"features");this.features=m(s)}async getRefNames(){return[...this.features.keys()]}async getRefNameAliases(){return[...this.features.values()].map(e=>({refName:e[0].get("refName"),aliases:e[0].get("aliases")}))}getFeatures(e){const{refName:a,start:t,end:s}=e;return g(async r=>{const o=this.features.get(a)||[];for(const f of o)f.get("end")>t&&f.get("start")<s&&r.next(f);r.complete()})}freeResources(){}}export{p as default,m as makeFeatures};
//# sourceMappingURL=FromConfigAdapter-CwtqqEk0.js.map
