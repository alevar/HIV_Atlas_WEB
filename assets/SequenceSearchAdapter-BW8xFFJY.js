import{c as v,O as F,f as $,t as C,u as r}from"./rpcWorker-DOy5Xw-Q.js";class S extends v.BaseFeatureDataAdapter{async configure(){var e;const c=await((e=this.getSubAdapter)===null||e===void 0?void 0:e.call(this,this.getConf("sequenceAdapter")));if(!c)throw new Error("Error getting subadapter");return c.dataAdapter}async getRefNames(){return(await this.configure()).getRefNames()}getFeatures(e,c){return F(async o=>{var d;const g=await this.configure(),h=1e4,n=e.end+h,i=Math.max(0,e.start-h);if(n<0||i>n){o.complete();return}const l=g.getFeatures({...e,start:i,end:n},c),m=((d=(await $(l.pipe(C())))[0])===null||d===void 0?void 0:d.get("seq"))||"",u=this.getConf("search"),w=this.getConf("searchForward"),x=this.getConf("searchReverse"),A=this.getConf("caseInsensitive"),p=new RegExp(u,`g${A?"i":""}`);if(u){if(w){const f=m.matchAll(p);for(const t of f){const a=i+t.index,s=i+t.index+t[0].length;r.doesIntersect2(a,s,e.start,e.end)&&o.next(new r.SimpleFeature({uniqueId:`${this.id}-${a}-${t[0]}-pos`,refName:e.refName,start:a,end:s,name:t[0],strand:1}))}}if(x){const f=r.revcom(m).matchAll(p);for(const t of f){const a=n-t.index,s=n-t.index-t[0].length;r.doesIntersect2(s,a,e.start,e.end)&&o.next(new r.SimpleFeature({uniqueId:`${this.id}-${s}-${t[0]}-neg`,refName:e.refName,start:s,end:a,name:t[0],strand:-1}))}}}o.complete()})}freeResources(){}}export{S as default};
//# sourceMappingURL=SequenceSearchAdapter-BW8xFFJY.js.map
