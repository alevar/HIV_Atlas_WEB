import{u as r,h as s,an as c}from"./index-DvmOrY9r.js";async function g(t){const{rpcSessionId:e}=r.getContainingTrack(t),{rpcManager:o}=r.getSession(t),n=r.getContainingView(t);if(!n.initialized||t.error||t.regionTooLarge)return;t.setLoading(!0);const a=await o.call(e,"PileupGetReducedFeatures",{sessionId:e,regions:n.staticBlocks.contentBlocks,filterBy:s(t.filterBy),adapterConfig:t.adapterConfig});t.setChainData(a),t.setLoading(!1)}function u(t,e){c(t,async()=>{await g(t)},{delay:1e3});function o(n){const a=t.ref;if(!a)return;const i=a.getContext("2d");i&&t.chainData&&(i.clearRect(0,0,a.width,t.height*2),i.resetTransform(),i.scale(2,2),e(t,i,a.width,t.height),t.setLastDrawnOffsetPx(n.offsetPx),t.setLastDrawnBpPerPx(n.bpPerPx))}c(t,async()=>{const n=r.getContainingView(t);n.bpPerPx!==t.lastDrawnBpPerPx&&o(n)}),c(t,async()=>{const n=r.getContainingView(t);o(n)},{delay:1e3})}export{u as doAfterAttach};
//# sourceMappingURL=afterAttach-D_Gha3Pf.js.map
