import{aI as c,i as s}from"./rpcWorker-DOy5Xw-Q.js";import{I as r,a as p}from"./IndexedFastaAdapter-DfOHETxH.js";import"./AbortablePromiseCache-xs5eyOH3.js";class d extends r{constructor({fasta:a,path:t,fai:n,faiPath:e,gzi:i,gziPath:o}){super({fasta:a,path:t,fai:n,faiPath:e}),a&&i?this.fasta=new c({filehandle:a,gziFilehandle:i}):t&&o&&(this.fasta=new c({path:t,gziPath:o}))}}class h extends p{async setupPre(){const a=this.getConf("fastaLocation"),t=this.getConf("faiLocation"),n=this.getConf("gziLocation"),e={fasta:s.openLocation(a,this.pluginManager),fai:s.openLocation(t,this.pluginManager),gzi:s.openLocation(n,this.pluginManager)};return{fasta:new d(e)}}}export{h as default};
//# sourceMappingURL=BgzipFastaAdapter-CPWCt3LO.js.map