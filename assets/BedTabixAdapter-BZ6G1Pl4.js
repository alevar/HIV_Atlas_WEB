import{B as h,f as u}from"./util-DSKDYvMI.js";import{c as f,i as c,O as g}from"./rpcWorker-DOy5Xw-Q.js";import{T as p}from"./tabixIndexedFile-164LNZf3.js";import"./AbortablePromiseCache-xs5eyOH3.js";class b extends f.BaseFeatureDataAdapter{constructor(t,n,e){super(t,n,e);const s=this.getConf("bedGzLocation"),a=this.getConf(["index","indexType"]),o=this.getConf(["index","location"]),r=this.getConf("autoSql"),i=this.pluginManager;this.bed=new p({filehandle:c.openLocation(s,i),csiFilehandle:a==="CSI"?c.openLocation(o,i):void 0,tbiFilehandle:a!=="CSI"?c.openLocation(o,i):void 0,chunkCacheSize:50*2**20}),this.columnNames=this.getConf("columnNames"),this.scoreColumn=this.getConf("scoreColumn"),this.parser=new h({autoSql:r})}async getRefNames(t={}){return this.bed.getReferenceSequenceNames(t)}async getHeader(){return this.bed.getHeader()}async getNames(){if(this.columnNames.length)return this.columnNames;const e=(await this.bed.getHeader()).split(/\n|\r\n|\r/).filter(s=>!!s).at(-1);return e!=null&&e.includes("	")?e.slice(1).split("	").map(s=>s.trim()):void 0}getFeatures(t,n={}){return g(async e=>{const s=await this.bed.getMetadata(),{columnNumbers:a}=s,o=a.ref-1,r=a.start-1,i=a.end-1,d=await this.getNames();await this.bed.getLines(t.refName,t.start,t.end,{lineCallback:(l,m)=>{e.next(u(l,o,r,i,this.scoreColumn,this.parser,`${this.id}-${m}`,d))},signal:n.signal}),e.complete()},n.signal)}freeResources(){}}b.capabilities=["getFeatures","getRefNames"];export{b as default};
//# sourceMappingURL=BedTabixAdapter-BZ6G1Pl4.js.map
