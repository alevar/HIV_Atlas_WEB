import{aM as c,Q as s}from"./index-DvmOrY9r.js";import{I as r,a as d}from"./IndexedFastaAdapter-BnsagMEF.js";class g extends r{constructor({fasta:a,path:t,fai:n,faiPath:e,gzi:o,gziPath:i}){super({fasta:a,path:t,fai:n,faiPath:e}),a&&o?this.fasta=new c({filehandle:a,gziFilehandle:o}):t&&i&&(this.fasta=new c({path:t,gziPath:i}))}}class L extends d{async setupPre(){const a=this.getConf("fastaLocation"),t=this.getConf("faiLocation"),n=this.getConf("gziLocation"),e={fasta:s.openLocation(a,this.pluginManager),fai:s.openLocation(t,this.pluginManager),gzi:s.openLocation(n,this.pluginManager)};return{fasta:new g(e)}}}export{L as default};
//# sourceMappingURL=BgzipFastaAdapter-DrQwqtOg.js.map
