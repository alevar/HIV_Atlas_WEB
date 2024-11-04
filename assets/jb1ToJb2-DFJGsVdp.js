import{u as m,G as n}from"./rpcWorker-DOy5Xw-Q.js";function F(e,c,y){var u,p,l,d,s;const t={trackId:m.objectHash(e),name:e.key||e.label},U=e.metadata&&(e.metadata.description||e.metadata.Description);U&&(t.description=U);const T=e.category||((u=e.metadata)===null||u===void 0?void 0:u.category);t.category=T?T.split(/\s*\/\s*/):[];const{storeClass:r}=e;if(!e.urlTemplate){if(!(r!=null&&r.endsWith("FromConfig"))){const i=e.key||e.label;return console.warn(`Could not import JBrowse1 track "${i}" because it does not have a "urlTemplate" or is not a "FromConfig" track`),n.generateUnsupportedTrackConf(t.name,i,t.category)}return L(e,t)}const o=i=>new URL(i,`${c}/`).href.replaceAll(/%7B/gi,"{").replaceAll(/%7D/gi,"}"),a=o(e.urlTemplate);if(r){if(r==="JBrowse/Store/SeqFeature/BAM"){const i={type:"BamAdapter",bamLocation:{uri:a,locationType:"UriLocation"}};return e.baiUrlTemplate?i.index={location:{uri:o(e.baiUrlTemplate),locationType:"UriLocation"}}:e.csiUrlTemplate?i.index={location:{uri:o(e.csiUrlTemplate),locationType:"UriLocation"},indexType:"CSI"}:i.index={location:{uri:`${a}.bai`,locationType:"UriLocation"}},{...t,type:"AlignmentsTrack",adapter:i}}if(r==="JBrowse/Store/SeqFeature/CRAM"){const i={type:"CramAdapter",cramLocation:{uri:a,locationType:"UriLocation"},sequenceAdapter:y};return i.craiLocation=e.craiUrlTemplate?{uri:o(e.craiUrlTemplate),locationType:"UriLocation"}:{uri:`${a}.crai`,locationType:"UriLocation"},{...t,type:"AlignmentsTrack",adapter:i}}if(r==="JBrowse/Store/SeqFeature/NCList")return{...t,type:"FeatureTrack",adapter:{type:"NCListAdapter",rootUrlTemplate:{uri:a,locationType:"UriLocation"}}};if(r==="JBrowse/Store/SeqFeature/BigWig"||r==="JBrowse/Store/BigWig")return!((p=e.type)===null||p===void 0)&&p.endsWith("XYPlot")?t.defaultRendering="xyplot":!((l=e.type)===null||l===void 0)&&l.endsWith("Density")&&(t.defaultRendering="density"),{...t,type:"QuantitativeTrack",adapter:{type:"BigWigAdapter",bigWigLocation:{uri:a,locationType:"UriLocation"}}};if(r==="JBrowse/Store/SeqFeature/VCFTabix"){const i={type:"VcfTabixAdapter",vcfGzLocation:{uri:a,locationType:"UriLocation"}};return e.tbiUrlTemplate?i.index={location:{uri:o(e.tbiUrlTemplate),locationType:"UriLocation"}}:e.csiUrlTemplate?i.index={location:{uri:o(e.csiUrlTemplate),locationType:"UriLocation"},indexType:"CSI"}:i.index={location:{uri:`${a}.tbi`,locationType:"UriLocation"}},{...t,type:"VariantTrack",adapter:i}}if(r==="JBrowse/Store/SeqFeature/VCFTribble")return n.generateUnsupportedTrackConf(t.name,`VCFTribble (${a})`,t.category);if(r==="JBrowse/Store/SeqFeature/GFF3")return{...t,type:"FeatureTrack",adapter:{type:"Gff3Adapter",gffLocation:{uri:a,locationType:"UriLocation"}}};if(r==="JBrowse/Store/SeqFeature/BigBed")return{...t,type:"FeatureTrack",adapter:{type:"BigBedAdapter",bigBedLocation:{uri:a,locationType:"UriLocation"}}};if(r==="JBrowse/Store/SeqFeature/GFF3Tabix"){const i={type:"Gff3TabixAdapter",gffGzLocation:{uri:a,locationType:"UriLocation"}};return e.tbiUrlTemplate?i.index={location:{uri:o(e.tbiUrlTemplate),locationType:"UriLocation"}}:e.csiUrlTemplate?i.index={location:{uri:o(e.csiUrlTemplate),locationType:"UriLocation"},indexType:"CSI"}:i.index={location:{uri:`${a}.tbi`,locationType:"UriLocation"}},{...t,type:"FeatureTrack",adapter:i}}if(r==="JBrowse/Store/SeqFeature/BED")return n.generateUnsupportedTrackConf(t.name,`BED (${a})`,t.category);if(r==="JBrowse/Store/SeqFeature/BEDTabix"){const i={type:"BedTabixAdapter",bedGzLocation:{uri:a,locationType:"UriLocation"}};return e.tbiUrlTemplate?i.index={location:{uri:o(e.tbiUrlTemplate),locationType:"UriLocation"}}:e.csiUrlTemplate?i.index={location:{uri:o(e.csiUrlTemplate),locationType:"UriLocation"},indexType:"CSI"}:i.index={location:{uri:`${a}.tbi`,locationType:"UriLocation"}},{...t,type:"FeatureTrack",adapter:i}}if(r==="JBrowse/Store/SeqFeature/GTF")return{...t,type:"FeatureTrack",adapter:{type:"GtfAdapter",gtfLocation:{uri:a,locationType:"UriLocation"}}};if(r==="JBrowse/Store/SeqFeature/StaticChunked"||r==="JBrowse/Store/Sequence/StaticChunked")return n.generateUnsupportedTrackConf(t.name,`StaticChunked (${a})`,t.category);if(r==="JBrowse/Store/SeqFeature/UnindexedFasta")return n.generateUnsupportedTrackConf(t.name,`UnindexedFasta (${a})`,t.category);if(r==="JBrowse/Store/SeqFeature/IndexedFasta"){const i={type:"IndexedFastaAdapter",fastaLocation:{uri:a,locationType:"UriLocation"}};return i.faiLocation=e.faiUrlTemplate?{uri:o(e.faiUrlTemplate),locationType:"UriLocation"}:{uri:`${a}.fai`,locationType:"UriLocation"},{...t,type:"SequenceTrack",adapter:i}}if(r==="JBrowse/Store/SeqFeature/BgzipIndexedFasta"){const i={type:"BgzipFastaAdapter",fastaLocation:{uri:a,locationType:"UriLocation"}};return i.faiLocation=e.faiUrlTemplate?{uri:o(e.faiUrlTemplate),locationType:"UriLocation"}:{uri:`${a}.fai`,locationType:"UriLocation"},i.gziLocation=e.gziUrlTemplate?{uri:o(e.gziUrlTemplate),locationType:"UriLocation"}:{uri:`${a}.gzi`,locationType:"UriLocation"},{...t,type:"ReferenceSequenceTrack",adapter:i}}if(r==="JBrowse/Store/SeqFeature/TwoBit")return{...t,type:"ReferenceSequenceTrack",adapter:{type:"TwoBitAdapter",twoBitLocation:{uri:a,locationType:"UriLocation"}}}}return t.adapter=n.guessAdapter({uri:a,locationType:"UriLocation"},void 0,a),t.adapter.type===n.UNSUPPORTED?n.generateUnsupportedTrackConf(t.name,a,t.category):t.adapter.type===n.UNKNOWN?n.generateUnknownTrackConf(t.name,a,t.category):(t.type=n.guessTrackType(t.adapter.type),t.type==="QuantitativeTrack"&&(!((d=e.type)===null||d===void 0)&&d.endsWith("XYPlot")?t.defaultRendering="xyplot":!((s=e.type)===null||s===void 0)&&s.endsWith("Density")&&(t.defaultRendering="density")),t)}function L(e,c){const u=(e.features||[]).map(p=>{const l=JSON.parse(JSON.stringify(p));return l.refName=p.seq_id,l.uniqueId=`${p.seq_id}:${p.start}-${p.end}:${p.name||""}`,l});return c.adapter={type:"FromConfigAdapter",features:u},c.type="FeatureTrack",c}export{F as convertTrackConfig};
//# sourceMappingURL=jb1ToJb2-DFJGsVdp.js.map
