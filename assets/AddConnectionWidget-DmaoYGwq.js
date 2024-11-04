import{o as g,bg as k,R as t,r,b as x,ao as h,ap as N,aq as I,q as M,a4 as y,M as R,m as _,u as p,bj as W,bk as j,bl as q,bm as B,a as v}from"./rpcWorker-DOy5Xw-Q.js";function L(e){return"id"in e&&"name"in e&&"root"in e}function V(e){return L(e)&&"connectionInstances"in e}const w=g(function({connectionType:e,model:a,session:o}){const s=e.configEditorComponent||k;return t.createElement(r.Suspense,{fallback:t.createElement(x.LoadingEllipses,null)},t.createElement(s,{model:{target:a},session:o}))});var E={},z=N;Object.defineProperty(E,"__esModule",{value:!0});var S=E.default=void 0,D=z(h()),O=I;S=E.default=(0,D.default)((0,O.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew");const T=g(function({connectionTypeChoices:a,connectionType:o,setConnectionType:s}){const m=a[0];return r.useEffect(()=>{o||s(m)},[o,m,s]),t.createElement("form",{autoComplete:"off"},o?t.createElement(M,{value:o.name,label:"connectionType",helperText:o.description?t.createElement(t.Fragment,null,o.description,o.url?t.createElement(y,{href:o.url,rel:"noopener noreferrer",target:"_blank"},t.createElement(S,null)):null):null,select:!0,fullWidth:!0,onChange:n=>{s(a.find(d=>d.name===n.target.value))},variant:"outlined"},a.map(n=>t.createElement(R,{key:n.name,value:n.name},n.displayName||n.name))):null)}),A=_()(e=>({root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)}})),f=["Select a Connection Type","Configure Connection"],H=g(function({model:e}){const[a,o]=r.useState(),[s,m]=r.useState(),[n,d]=r.useState(0),{classes:l}=A(),i=p.getSession(e),{pluginManager:b}=p.getEnv(i),c=r.useMemo(()=>a==null?void 0:a.configSchema.create({connectionId:s},p.getEnv(e)),[s,a,e]);return t.createElement("div",{className:l.root},t.createElement(W,{className:l.stepper,activeStep:n,orientation:"vertical"},f.map(C=>t.createElement(j,{key:C},t.createElement(q,null,C),t.createElement(B,null,n===0?t.createElement(T,{connectionTypeChoices:b.getConnectionElements(),connectionType:a,setConnectionType:u=>{o(u),u&&m(`${u.name}-${Date.now()}`)}}):a&&c?t.createElement(w,{connectionType:a,model:c,session:i}):null,t.createElement("div",{className:l.actionsContainer},t.createElement(v,{disabled:n===0,onClick:()=>{d(n-1)},className:l.button},"Back"),t.createElement(v,{disabled:!(n===0&&a||n===1&&c),variant:"contained",color:"primary",onClick:()=>{if(n===f.length-1){if(c&&V(i)){const u=i.addConnectionConf(c);i.makeConnection(u)}else i.notify("No config model to add");p.isSessionModelWithWidgets(i)&&i.hideWidget(e)}else d(n+1)},className:l.button,"data-testid":"addConnectionNext"},n===f.length-1?"Connect":"Next")))))))});export{H as default};
//# sourceMappingURL=AddConnectionWidget-DmaoYGwq.js.map