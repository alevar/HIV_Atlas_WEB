import{a1 as z,br as H,aN as B,bs as A,aI as W,aJ as Y,ay as K,bt as Z}from"./index-DvmOrY9r.js";function j(o){if(o.greaterThan(Number.MAX_SAFE_INTEGER)||o.lessThan(Number.MIN_SAFE_INTEGER))throw new Error("integer overflow");return o.toNumber()}class ee extends Error{}function T(o){if(o&&o.aborted){if(typeof DOMException<"u")throw new DOMException("aborted","AbortError");{const e=new ee("aborted");throw e.code="ERR_ABORTED",e}}}function te(o,e){return e.minv.blockPosition-o.maxv.blockPosition<65e3&&e.maxv.blockPosition-o.minv.blockPosition<5e6}function X(o,e){const t=[];let n=null;return o.length===0?o:(o.sort(function(i,a){const r=i.minv.blockPosition-a.minv.blockPosition;return r!==0?r:i.minv.dataPosition-a.minv.dataPosition}),o.forEach(i=>{(!e||i.maxv.compareTo(e)>0)&&(n===null?(t.push(i),n=i):te(n,i)?i.maxv.compareTo(n.maxv)>0&&(n.maxv=i.maxv):(t.push(i),n=i))}),t)}class V{constructor(e,t){this.blockPosition=e,this.dataPosition=t}toString(){return`${this.blockPosition}:${this.dataPosition}`}compareTo(e){return this.blockPosition-e.blockPosition||this.dataPosition-e.dataPosition}}function L(o,e=0,t=!1){if(t)throw new Error("big-endian virtual file offsets not implemented");return new V(o[e+7]*1099511627776+o[e+6]*4294967296+o[e+5]*16777216+o[e+4]*65536+o[e+3]*256+o[e+2],o[e+1]<<8|o[e])}class D{constructor(e,t,n,i=void 0){this.minv=e,this.maxv=t,this.bin=n,this._fetchedSize=i}toUniqueString(){return`${this.minv}..${this.maxv} (bin ${this.bin}, fetchedSize ${this.fetchedSize()})`}toString(){return this.toUniqueString()}compareTo(e){return this.minv.compareTo(e.minv)||this.maxv.compareTo(e.maxv)||this.bin-e.bin}fetchedSize(){return this._fetchedSize!==void 0?this._fetchedSize:this.maxv.blockPosition+65536-this.minv.blockPosition}}class J{constructor({filehandle:e,renameRefSeqs:t=n=>n}){this.filehandle=e,this.renameRefSeq=t}async getMetadata(e={}){const{indices:t,...n}=await this.parse(e);return n}_findFirstData(e,t){return e?e.compareTo(t)>0?t:e:t}async parse(e={}){return this.parseP||(this.parseP=this._parse(e).catch(t=>{throw this.parseP=void 0,t})),this.parseP}async hasRefSeq(e,t={}){var n;return!!(!((n=(await this.parse(t)).indices[e])===null||n===void 0)&&n.binIndex)}}const ne=21578324,U=14;function ie(o,e){return o+=1,e-=1,[[0,0],[1+(o>>26),1+(e>>26)],[9+(o>>23),9+(e>>23)],[73+(o>>20),73+(e>>20)],[585+(o>>17),585+(e>>17)],[4681+(o>>14),4681+(e>>14)]]}class k extends J{async lineCount(e,t={}){const n=await this.parse(t),i=n.refNameToId[e];if(i===void 0||!n.indices[i])return-1;const{stats:r}=n.indices[i];return r?r.lineCount:-1}async _parse(e={}){const t=await this.filehandle.readFile(e),n=await z(t);if(T(e.signal),n.readUInt32LE(0)!==ne)throw new Error("Not a TBI file");const i=n.readInt32LE(4),a=n.readInt32LE(8),r=a&65536?"zero-based-half-open":"1-based-closed",d={0:"generic",1:"SAM",2:"VCF"}[a&15];if(!d)throw new Error(`invalid Tabix preset format flags ${a}`);const l={ref:n.readInt32LE(12),start:n.readInt32LE(16),end:n.readInt32LE(20)},u=n.readInt32LE(24),c=5,f=((1<<(c+1)*3)-1)/7,I=2**(14+c*3),w=u?String.fromCharCode(u):null,m=n.readInt32LE(28),b=n.readInt32LE(32),{refNameToId:p,refIdToName:x}=this._parseNameBytes(n.slice(36,36+b));let h=36+b,g;return{indices:new Array(i).fill(0).map(()=>{const y=n.readInt32LE(h);h+=4;const S={};let v;for(let C=0;C<y;C+=1){const _=n.readUInt32LE(h);if(h+=4,_>f+1)throw new Error("tabix index contains too many bins, please use a CSI index");if(_===f+1){const N=n.readInt32LE(h);h+=4,N===2&&(v=this.parsePseudoBin(n,h)),h+=16*N}else{const N=n.readInt32LE(h);h+=4;const O=new Array(N);for(let F=0;F<N;F+=1){const q=L(n,h),Q=L(n,h+8);h+=16,g=this._findFirstData(g,q),O[F]=new D(q,Q,_)}S[_]=O}}const P=n.readInt32LE(h);h+=4;const R=new Array(P);for(let C=0;C<P;C+=1)R[C]=L(n,h),h+=8,g=this._findFirstData(g,R[C]);return{binIndex:S,linearIndex:R,stats:v}}),metaChar:w,maxBinNumber:f,maxRefLength:I,skipLines:m,firstDataLine:g,columnNumbers:l,coordinateType:r,format:d,refIdToName:x,refNameToId:p,maxBlockSize:65536}}parsePseudoBin(e,t){return{lineCount:j(H.fromBytesLE(e.slice(t+16,t+24),!0))}}_parseNameBytes(e){let t=0,n=0;const i=[],a={};for(let r=0;r<e.length;r+=1)if(!e[r]){if(n<r){let s=e.toString("utf8",n,r);s=this.renameRefSeq(s),i[t]=s,a[s]=t}n=r+1,t+=1}return{refNameToId:a,refIdToName:i}}async blocksForRange(e,t,n,i={}){t<0&&(t=0);const a=await this.parse(i),r=a.refNameToId[e];if(r===void 0)return[];const s=a.indices[r];if(!s)return[];(s.linearIndex.length?s.linearIndex[t>>U>=s.linearIndex.length?s.linearIndex.length-1:t>>U]:new V(0,0))||console.warn("querying outside of possible tabix range");const l=ie(t,n),u=[];for(const[m,b]of l)for(let p=m;p<=b;p++)if(s.binIndex[p])for(const x of s.binIndex[p])u.push(new D(x.minv,x.maxv,p));const c=s.linearIndex.length;let f=null;const I=Math.min(t>>14,c-1),w=Math.min(n>>14,c-1);for(let m=I;m<=w;++m){const b=s.linearIndex[m];b&&(!f||b.compareTo(f)<0)&&(f=b)}return X(u,f)}}const re=21582659,se=38359875;function ae(o,e){return o*2**e}function G(o,e){return Math.floor(o/2**e)}class M extends J{constructor(e){super(e),this.maxBinNumber=0,this.depth=0,this.minShift=0}async lineCount(e,t={}){const n=await this.parse(t),i=n.refNameToId[e];if(i===void 0||!n.indices[i])return-1;const{stats:r}=n.indices[i];return r?r.lineCount:-1}indexCov(){throw new Error("CSI indexes do not support indexcov")}parseAuxData(e,t){const n=e.readInt32LE(t),i=n&65536?"zero-based-half-open":"1-based-closed",a={0:"generic",1:"SAM",2:"VCF"}[n&15];if(!a)throw new Error(`invalid Tabix preset format flags ${n}`);const r={ref:e.readInt32LE(t+4),start:e.readInt32LE(t+8),end:e.readInt32LE(t+12)},s=e.readInt32LE(t+16),d=s?String.fromCharCode(s):null,l=e.readInt32LE(t+20),u=e.readInt32LE(t+24),{refIdToName:c,refNameToId:f}=this._parseNameBytes(e.slice(t+28,t+28+u));return{refIdToName:c,refNameToId:f,skipLines:l,metaChar:d,columnNumbers:r,format:a,coordinateType:i}}_parseNameBytes(e){let t=0,n=0;const i=[],a={};for(let r=0;r<e.length;r+=1)if(!e[r]){if(n<r){let s=e.toString("utf8",n,r);s=this.renameRefSeq(s),i[t]=s,a[s]=t}n=r+1,t+=1}return{refNameToId:a,refIdToName:i}}async _parse(e={}){const t=await z(await this.filehandle.readFile(e));let n;if(t.readUInt32LE(0)===re)n=1;else if(t.readUInt32LE(0)===se)n=2;else throw new Error("Not a CSI file");this.minShift=t.readInt32LE(4),this.depth=t.readInt32LE(8),this.maxBinNumber=((1<<(this.depth+1)*3)-1)/7;const i=2**(this.minShift+this.depth*3),a=t.readInt32LE(12),r=a&&a>=30?this.parseAuxData(t,16):{refIdToName:[],refNameToId:{},metaChar:null,columnNumbers:{ref:0,start:1,end:2},coordinateType:"zero-based-half-open",format:"generic"},s=t.readInt32LE(16+a);let d,l=16+a+4;const u=new Array(s).fill(0).map(()=>{const c=t.readInt32LE(l);l+=4;const f={};let I;for(let w=0;w<c;w+=1){const m=t.readUInt32LE(l);if(m>this.maxBinNumber)I=this.parsePseudoBin(t,l+4),l+=48;else{const b=L(t,l+4);d=this._findFirstData(d,b);const p=t.readInt32LE(l+12);l+=16;const x=new Array(p);for(let h=0;h<p;h+=1){const g=L(t,l),E=L(t,l+8);l+=16,x[h]=new D(g,E,m)}f[m]=x}}return{binIndex:f,stats:I}});return{...r,csi:!0,refCount:s,maxBlockSize:65536,firstDataLine:d,csiVersion:n,indices:u,depth:this.depth,maxBinNumber:this.maxBinNumber,maxRefLength:i}}parsePseudoBin(e,t){return{lineCount:j(H.fromBytesLE(e.slice(t+28,t+36),!0))}}async blocksForRange(e,t,n,i={}){t<0&&(t=0);const a=await this.parse(i),r=a.refNameToId[e];if(r===void 0)return[];const s=a.indices[r];if(!s)return[];const d=this.reg2bins(t,n),l=[];for(const[u,c]of d)for(let f=u;f<=c;f++)if(s.binIndex[f])for(const I of s.binIndex[f])l.push(new D(I.minv,I.maxv,f));return X(l,new V(0,0))}reg2bins(e,t){e-=1,e<1&&(e=1),t>2**50&&(t=2**34),t-=1;let n=0,i=0,a=this.minShift+this.depth*3;const r=[];for(;n<=this.depth;a-=3,i+=ae(1,n*3),n+=1){const s=i+G(e,a),d=i+G(t,a);if(d-s+r.length>this.maxBinNumber)throw new Error(`query ${e}-${t} is too large for current binning scheme (shift ${this.minShift}, depth ${this.depth}), try a smaller query or a coarser index binning scheme`);r.push([s,d])}return r}}const $=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function oe(o){return new Promise(e=>setTimeout(e,o))}class le{constructor({path:e,filehandle:t,url:n,tbiPath:i,tbiUrl:a,tbiFilehandle:r,csiPath:s,csiUrl:d,csiFilehandle:l,yieldTime:u=500,renameRefSeqs:c=I=>I,chunkCacheSize:f=5*2**20}){if(t)this.filehandle=t;else if(e)this.filehandle=new B(e);else if(n)this.filehandle=new A(n);else throw new TypeError("must provide either filehandle or path");if(r)this.index=new k({filehandle:r,renameRefSeqs:c});else if(l)this.index=new M({filehandle:l,renameRefSeqs:c});else if(i)this.index=new k({filehandle:new B(i),renameRefSeqs:c});else if(s)this.index=new M({filehandle:new B(s),renameRefSeqs:c});else if(e)this.index=new k({filehandle:new B(`${e}.tbi`),renameRefSeqs:c});else if(d)this.index=new M({filehandle:new A(d)});else if(a)this.index=new k({filehandle:new A(a)});else if(n)this.index=new k({filehandle:new A(`${n}.tbi`)});else throw new TypeError("must provide one of tbiFilehandle, tbiPath, csiFilehandle, csiPath, tbiUrl, csiUrl");this.renameRefSeq=c,this.yieldTime=u,this.chunkCache=new W({cache:new Y({maxSize:Math.floor(f/65536)}),fill:(I,w)=>this.readChunk(I,{signal:w})})}async getLines(e,t,n,i){var a;let r,s={},d;typeof i=="function"?d=i:(s=i,d=i.lineCallback,r=i.signal);const l=await this.index.getMetadata(s);T(r);const u=t??0,c=n??l.maxRefLength;if(!(u<=c))throw new TypeError("invalid start and end coordinates. start must be less than or equal to end");if(u===c)return;const f=await this.index.blocksForRange(e,u,c,s);T(r);let I=Date.now();for(const w of f){let m;const{buffer:b,cpositions:p,dpositions:x}=await this.chunkCache.get(w.toString(),w,r);T(r);let h=0,g=0;for(;h<b.length;){const E=b.indexOf(`
`,h);if(E===-1)break;const y=b.slice(h,E),S=(a=$==null?void 0:$.decode(y))!==null&&a!==void 0?a:y.toString();if(x){for(;h+w.minv.dataPosition>=x[g++];);g--}const{startCoordinate:v,overlaps:P}=this.checkLine(l,e,u,c,S);if(m!==void 0&&v!==void 0&&m>v)throw new Error(`Lines not sorted by start coordinate (${m} > ${v}), this file is not usable with Tabix.`);if(m=v,P)d(S.trim(),p[g]*256+(h-x[g])+w.minv.dataPosition+1);else if(v!==void 0&&v>=c)return;this.yieldTime&&I-Date.now()>this.yieldTime&&(I=Date.now(),T(r),await oe(1)),h=E+1}}}async getMetadata(e={}){return this.index.getMetadata(e)}async getHeaderBuffer(e={}){const{firstDataLine:t,metaChar:n,maxBlockSize:i}=await this.getMetadata(e);T(e.signal);const a=((t==null?void 0:t.blockPosition)||0)+i,r=await this._readRegion(0,a,e),s=await z(r);if(n){let d=-1;const l=10,u=n.charCodeAt(0);for(let c=0;c<s.length&&!(c===d+1&&s[c]!==u);c+=1)s[c]===l&&(d=c);return s.slice(0,d+1)}return s}async getHeader(e={}){return(await this.getHeaderBuffer(e)).toString("utf8")}async getReferenceSequenceNames(e={}){return(await this.getMetadata(e)).refIdToName}checkLine(e,t,n,i,a){const{columnNumbers:r,metaChar:s,coordinateType:d,format:l}=e;if(s&&a.startsWith(s))return{overlaps:!1};let{ref:u,start:c,end:f}=r;u||(u=0),c||(c=0),f||(f=0),l==="VCF"&&(f=8);const I=Math.max(u,c,f);let w=1,m=0,b="",p=-1/0;for(let x=0;x<a.length+1;x+=1)if(a[x]==="	"||x===a.length){if(w===u){if(this.renameRefSeq(a.slice(m,x))!==t)return{overlaps:!1}}else if(w===c){if(p=parseInt(a.slice(m,x),10),d==="1-based-closed"&&(p-=1),p>=i)return{startCoordinate:p,overlaps:!1};if((f===0||f===c)&&p+1<=n)return{startCoordinate:p,overlaps:!1}}else if(l==="VCF"&&w===4)b=a.slice(m,x);else if(w===f&&(l==="VCF"?this._getVcfEnd(p,b,a.slice(m,x)):parseInt(a.slice(m,x),10))<=n)return{overlaps:!1};if(m=x+1,w+=1,w>I)break}return{startCoordinate:p,overlaps:!0}}_getVcfEnd(e,t,n){let i=e+t.length;const a=n.includes("SVTYPE=TRA");if(n[0]!=="."&&!a){let r=";";for(let s=0;s<n.length;s+=1){if(r===";"&&n.slice(s,s+4)==="END="){let d=n.indexOf(";",s);d===-1&&(d=n.length),i=parseInt(n.slice(s+4,d),10);break}r=n[s]}}else if(a)return e+1;return i}async lineCount(e,t={}){return this.index.lineCount(e,t)}async _readRegion(e,t,n={}){const i=K.Buffer.alloc(t),{bytesRead:a,buffer:r}=await this.filehandle.read(i,0,t,e,n);return r.slice(0,a)}async readChunk(e,t={}){const n=await this._readRegion(e.minv.blockPosition,e.fetchedSize(),t);return Z(n,e)}}export{le as T};
//# sourceMappingURL=tabixIndexedFile-BYNS8d_K.js.map