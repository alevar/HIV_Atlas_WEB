import{I as i,Q as o}from"./index-DvmOrY9r.js";class c extends i.BaseAdapter{async setupPre(){const t=this.pluginManager,r=await o.openLocation(this.getConf("chromSizesLocation"),t).readFile("utf8");return Object.fromEntries(r.split(/\n|\r\n|\r/).map(e=>e.trim()).filter(e=>!!e).map(e=>{const[a,n]=e.split("	");return[a,+n]}))}async setup(){return this.setupP||(this.setupP=this.setupPre().catch(t=>{throw this.setupP=void 0,t})),this.setupP}async getRegions(){const t=await this.setup();return Object.keys(t).map(s=>({refName:s,start:0,end:t[s]}))}getHeader(){return{}}freeResources(){}}export{c as default};
//# sourceMappingURL=ChromSizesAdapter-0OQ_pIEC.js.map
