import{c as u,i as o,V as g,O as h}from"./rpcWorker-DOy5Xw-Q.js";import{T as p}from"./tabixIndexedFile-164LNZf3.js";import{V as l}from"./index-jiauX9iG.js";import"./AbortablePromiseCache-xs5eyOH3.js";class y extends u.BaseFeatureDataAdapter{async configurePre(){const e=this.pluginManager,t=this.getConf("vcfGzLocation"),n=this.getConf(["index","location"]),s=this.getConf(["index","indexType"]),c=o.openLocation(t,e),a=s==="CSI",i=new p({filehandle:c,csiFilehandle:a?o.openLocation(n,e):void 0,tbiFilehandle:a?void 0:o.openLocation(n,e),chunkCacheSize:50*2**20}),r=await i.getHeader();return{vcf:i,parser:new g({header:r})}}async configure(){return this.configured||(this.configured=this.configurePre().catch(e=>{throw this.configured=void 0,e})),this.configured}async getRefNames(e={}){const{vcf:t}=await this.configure();return t.getReferenceSequenceNames(e)}async getHeader(){const{vcf:e}=await this.configure();return e.getHeader()}async getMetadata(){const{parser:e}=await this.configure();return e.getMetadata()}getFeatures(e,t={}){return h(async n=>{const{refName:s,start:c,end:a}=e,{vcf:i,parser:r}=await this.configure();await i.getLines(s,c,a,{lineCallback:(f,d)=>{n.next(new l({variant:r.parseLine(f),parser:r,id:`${this.id}-vcf-${d}`}))},...t}),n.complete()},t.signal)}freeResources(){}}export{y as default};
//# sourceMappingURL=VcfTabixAdapter-DYMM3z-P.js.map