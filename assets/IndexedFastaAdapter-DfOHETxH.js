import{aJ as d,ab as x,c as _,aK as I,i as l,O as q,u as b}from"./rpcWorker-DOy5Xw-Q.js";import{A as F}from"./AbortablePromiseCache-xs5eyOH3.js";function S(r,e){return r.offset+r.lineBytes*Math.floor(e/r.lineLength)+e%r.lineLength}async function L(r,e){const t=await r.readFile(e);if(!(t!=null&&t.length))throw new Error("No data read from FASTA index (FAI) file");let a=0,n;const i=t.toString("utf8").split(/\r?\n/).filter(s=>/\S/.test(s)).map(s=>s.split("	")).filter(s=>s[0]!=="").map(s=>((!n||n.name!==s[0])&&(n={name:s[0],id:a},a+=1),{id:n.id,name:s[0],length:+s[1],start:0,end:+s[1],offset:+s[2],lineLength:+s[3],lineBytes:+s[4]}));return{name:Object.fromEntries(i.map(s=>[s.name,s])),id:Object.fromEntries(i.map(s=>[s.id,s]))}}class O{constructor({fasta:e,fai:t,path:a,faiPath:n}){if(e)this.fasta=e;else if(a)this.fasta=new d(a);else throw new Error("Need to pass filehandle for fasta or path to localfile");if(t)this.fai=t;else if(n)this.fai=new d(n);else if(a)this.fai=new d(`${a}.fai`);else throw new Error("Need to pass filehandle for  or path to localfile")}async _getIndexes(e){return this.indexes||(this.indexes=L(this.fai,e)),this.indexes}async getSequenceNames(e){return Object.keys((await this._getIndexes(e)).name)}async getSequenceSizes(e){const t={},a=await this._getIndexes(e);for(const n of Object.values(a.id))t[n.name]=n.length;return t}async getSequenceSize(e,t){var a;return(a=(await this._getIndexes(t)).name[e])===null||a===void 0?void 0:a.length}async hasReferenceSequence(e,t){return!!(await this._getIndexes(t)).name[e]}async getResiduesById(e,t,a,n){const i=(await this._getIndexes(n)).id[e];if(i)return this._fetchFromIndexEntry(i,t,a,n)}async getResiduesByName(e,t,a,n){const i=(await this._getIndexes(n)).name[e];if(i)return this._fetchFromIndexEntry(i,t,a,n)}async getSequence(e,t,a,n){return this.getResiduesByName(e,t,a,n)}async _fetchFromIndexEntry(e,t=0,a,n){let i=a;if(t<0)throw new TypeError("regionStart cannot be less than 0");if((i===void 0||i>e.length)&&(i=e.length),t>=i)return"";const s=S(e,t),o=S(e,i)-s,f=x.Buffer.allocUnsafe(o);return await this.fasta.read(f,0,o,s,n),f.toString("utf8").replace(/\s+/g,"")}}class v extends _.BaseSequenceAdapter{constructor(){super(...arguments),this.seqCache=new F({cache:new I({maxSize:200}),fill:async(e,t)=>{const{refName:a,start:n,end:i,fasta:s}=e;return s.getSequence(a,n,i,{...e,signal:t})}})}async getRefNames(e){const{fasta:t}=await this.setup();return t.getSequenceNames(e)}async getRegions(e){const{fasta:t}=await this.setup(),a=await t.getSequenceSizes(e);return Object.keys(a).map(n=>({refName:n,start:0,end:a[n]}))}async setupPre(){const e=this.getConf("fastaLocation"),t=this.getConf("faiLocation");return{fasta:new O({fasta:l.openLocation(e,this.pluginManager),fai:l.openLocation(t,this.pluginManager)})}}async getHeader(){const e=this.getConf("metadataLocation");return e.uri===""||e.uri==="/path/to/fa.metadata.yaml"?null:l.openLocation(e,this.pluginManager).readFile("utf8")}async setup(){return this.setupP||(this.setupP=this.setupPre().catch(e=>{throw this.setupP=void 0,e})),this.setupP}getFeatures(e,t){const{refName:a,start:n,end:i}=e;return q(async s=>{const{fasta:o}=await this.setup(),f=await o.getSequenceSize(a,t),h=Math.min(f,i),g=[],c=128e3,m=n-n%c,w=i+(c-i%c);for(let u=m;u<w;u+=c){const y={refName:a,start:u,end:u+c};g.push(this.seqCache.get(JSON.stringify(y),{...y,fasta:o},t==null?void 0:t.signal))}const p=(await Promise.all(g)).join("").slice(n-m).slice(0,i-n);p&&s.next(new b.SimpleFeature({id:`${a} ${n}-${h}`,data:{refName:a,start:n,end:h,seq:p}})),s.complete()})}freeResources(){}}var N=Object.freeze({__proto__:null,default:v});export{O as I,v as a,N as b};
//# sourceMappingURL=IndexedFastaAdapter-DfOHETxH.js.map
