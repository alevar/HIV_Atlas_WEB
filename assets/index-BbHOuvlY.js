import{aP as g}from"./index-DvmOrY9r.js";const S={DEL:"deletion",INS:"insertion",DUP:"duplication",INV:"inversion",INVDUP:"inverted_duplication",CNV:"copy_number_variation",TRA:"translocation","DUP:TANDEM":"tandem_duplication",NON_REF:"sequence_variant","*":"sequence_variant"};function f(e,n,r){if(!n||n.length===0)return["remark","no alternative alleles"];const t=new Set;let s=new Set;if(n.forEach(d=>{let[o,i]=l(d,r);o||([o,i]=N(e,d)),o&&i&&(t.add(o),s.add(i))}),s.size>1){const d=[...s],o=new Set(d.map(i=>{const a=i.split("->");return a[1]?a[0]:i}).filter(i=>!!i));s=new Set([...o].map(i=>i.trim()).map(i=>{const a=d.map(u=>u.split("->").map(h=>h.trim())).map(u=>u[1]&&u[0]===i?u[1]:"").filter(u=>!!u);return a.length?`${i} -> ${a.join(",")}`:i}))}return t.size?[[...t].join(","),[...s].join(",")]:[]}function l(e,n){if(typeof e=="string"&&!e.startsWith("<"))return[];let r=S[e];if(!r&&n.getMetadata("ALT",e)&&(r="sequence_variant"),r)return[r,e];const t=e.split(":");return t.length>1?l(`<${t.slice(0,-1).join(":")}>`,n):[]}function N(e,n){if(g(n))return["breakend",n];if(e.length===1&&n.length===1)return["SNV",c("SNV",e,n)];if(n==="<INS>")return["insertion",n];if(n==="<DEL>")return["deletion",n];if(n==="<DUP>")return["duplication",n];if(n==="<CNV>")return["cnv",n];if(n==="<INV>")return["inversion",n];if(n==="<TRA>")return["translocation",n];if(n.includes("<"))return["sv",n];if(e.length===n.length)return e.split("").reverse().join("")===n?["inversion",c("inversion",e,n)]:["substitution",c("substitution",e,n)];if(e.length<=n.length){const t=n.length-e.length,s=t.toLocaleString("en-US");return["insertion",t>5?`${s}bp INS`:c("insertion",e,n)]}if(e.length>n.length){const t=e.length-n.length,s=t.toLocaleString("en-US");return["deletion",t>5?`${s}bp DEL`:c("deletion",e,n)]}return["indel",c("indel",e,n)]}function c(e,n,r){return`${e} ${n} -> ${r}`}class A{constructor(n){this.variant=n.variant,this.parser=n.parser,this.data=this.dataFromVariant(this.variant),this._id=n.id}get(n){var r;return n==="samples"?this.variant.SAMPLES:(r=this.data[n])!==null&&r!==void 0?r:this.variant[n]}set(){}parent(){}children(){}tags(){return[...Object.keys(this.data),...Object.keys(this.variant),"samples"]}id(){return this._id}dataFromVariant(n){const{REF:r,ALT:t,POS:s,CHROM:d,INFO:o,ID:i}=n,a=s-1,[u,h]=f(r,t,this.parser),p=t==null?void 0:t.includes("<TRA>"),m=t==null?void 0:t.some(v=>v.includes("<"));return{refName:d,start:a,end:m&&o.END&&!p?+o.END[0]:a+r.length,description:h,type:u,name:i==null?void 0:i.join(","),aliases:i&&i.length>1?i.slice(1):void 0}}toJSON(){return{uniqueId:this._id,...this.variant,...this.data,samples:this.variant.SAMPLES}}}export{A as V};
//# sourceMappingURL=index-BbHOuvlY.js.map
