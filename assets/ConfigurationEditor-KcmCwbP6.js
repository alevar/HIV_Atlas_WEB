import{aR as ce,o as d,r as f,R as e,bq as N,a7 as ue,a8 as z,q as v,b8 as S,a4 as b,a as F,bv as T,m as $,u as H,J as me,bK as de,T as pe,bN as fe,br as k,bO as w,bs as J,bc as U,b as B,aH as he,s as ge,C as Ee,bP as ve,bQ as R,bR as O,M as K,P as G,bS as be,bT as $e,e as C,bL as X,bM as Q,a5 as Z,p as Y,bU as ee,F as ye,bV as Ce,be as xe}from"./rpcWorker-DOy5Xw-Q.js";import{c as Se}from"./_commonjs-dynamic-modules-TDtrdbi3.js";import{d as A}from"./Delete-CwIby_wm.js";import{a as ke}from"./ColorPicker-ck5SAPyy.js";var te={exports:{}};(function(t,a){(function(n,o){typeof Se=="function"?t.exports=o():n.pluralize=o()})(ce,function(){var n=[],o=[],r={},i={},c={};function u(l){return typeof l=="string"?new RegExp("^"+l+"$","i"):l}function m(l,s){return l===s?s:l===l.toLowerCase()?s.toLowerCase():l===l.toUpperCase()?s.toUpperCase():l[0]===l[0].toUpperCase()?s.charAt(0).toUpperCase()+s.substr(1).toLowerCase():s.toLowerCase()}function M(l,s){return l.replace(/\$(\d{1,2})/g,function(E,h){return s[h]||""})}function x(l,s){return l.replace(s[0],function(E,h){var g=M(s[1],arguments);return m(E===""?l[h-1]:E,g)})}function P(l,s,E){if(!l.length||r.hasOwnProperty(l))return s;for(var h=E.length;h--;){var g=E[h];if(g[0].test(s))return x(s,g)}return s}function j(l,s,E){return function(h){var g=h.toLowerCase();return s.hasOwnProperty(g)?m(h,g):l.hasOwnProperty(g)?m(h,l[g]):P(g,h,E)}}function I(l,s,E,h){return function(g){var y=g.toLowerCase();return s.hasOwnProperty(y)?!0:l.hasOwnProperty(y)?!1:P(y,y,E)===y}}function p(l,s,E){var h=s===1?p.singular(l):p.plural(l);return(E?s+" ":"")+h}return p.plural=j(c,i,n),p.isPlural=I(c,i,n),p.singular=j(i,c,o),p.isSingular=I(i,c,o),p.addPluralRule=function(l,s){n.push([u(l),s])},p.addSingularRule=function(l,s){o.push([u(l),s])},p.addUncountableRule=function(l){if(typeof l=="string"){r[l.toLowerCase()]=!0;return}p.addPluralRule(l,"$0"),p.addSingularRule(l,"$0")},p.addIrregularRule=function(l,s){s=s.toLowerCase(),l=l.toLowerCase(),c[l]=s,i[s]=l},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(l){return p.addIrregularRule(l[0],l[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(l){return p.addPluralRule(l[0],l[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(l){return p.addSingularRule(l[0],l[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(p.addUncountableRule),p})})(te);var V=te.exports;const ae=d(function({slot:t}){const[a,n]=f.useState(""),[o,r]=f.useState(!1);return e.createElement(e.Fragment,null,t.name?e.createElement(N,null,t.name):null,e.createElement(ue,{disablePadding:!0},t.value.map((i,c)=>e.createElement(z,{key:`${JSON.stringify(i)}-${c}`,disableGutters:!0},e.createElement(v,{value:i,onChange:u=>{t.setAtIndex(c,u.target.value)},InputProps:{endAdornment:e.createElement(S,{position:"end"},e.createElement(b,{onClick:()=>{t.removeAtIndex(c)}},e.createElement(A,null)))}}))),o?e.createElement(z,{disableGutters:!0},e.createElement(v,{value:a,placeholder:"add new",onChange:i=>{n(i.target.value)},InputProps:{endAdornment:e.createElement(S,{position:"end"},e.createElement(e.Fragment,null,e.createElement(F,{color:"primary",variant:"contained",style:{margin:2},"data-testid":`stringArrayAdd-${t.name}`,onClick:()=>{r(!1),t.add(a),n("")}},"OK"),e.createElement(F,{color:"primary",variant:"contained",style:{margin:2},onClick:()=>{r(!1),n("")}},"Cancel")))}})):null,e.createElement(F,{color:"primary",variant:"contained",style:{margin:4},disabled:o,onClick:()=>{r(!0)}},"Add item")),e.createElement(T,null,t.description))}),W='Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',we=$()(t=>({callbackEditor:{marginTop:"16px",borderBottom:`1px solid ${t.palette.divider}`,width:"100%",fontFamily:W},textAreaFont:{fontFamily:W},callbackContainer:{width:"100%",overflowX:"auto"},error:{color:"red",fontSize:"0.8em"}})),Ne=d(function({slot:t}){const{classes:a}=we(),[n,o]=f.useState(t.value),[r,i]=f.useState(),c=H.useDebounce(n,400);return f.useEffect(()=>{var u;try{const m=c.startsWith("jexl:")?c:`jexl:${c}`;if(m==="jexl:")throw new Error("Empty jexl expression is not valid");me(m,(u=de(t).pluginManager)===null||u===void 0?void 0:u.jexl),t.set(m),i(void 0)}catch(m){console.error({e:m}),i(m)}},[c,t]),e.createElement(e.Fragment,null,r?e.createElement("p",{className:a.error},`${r}`):null,e.createElement("div",{className:a.callbackContainer},e.createElement(v,{multiline:!0,className:a.callbackEditor,value:n.startsWith("jexl:")?n.split("jexl:")[1]:n,onChange:u=>{o(u.target.value)},style:{background:r?"#fdd":void 0},InputProps:{classes:{input:a.textAreaFont}}}),e.createElement("p",null,t.description),e.createElement(pe,{title:e.createElement("div",null,"Callbacks are written in Jexl format. Click to learn more.",e.createElement("br",null)," Names of available context items: ",t.contextVariable),arrow:!0},e.createElement(b,{color:"primary",onClick:()=>{const u=window.open("https://github.com/TomFrost/Jexl","_blank","noopener,noreferrer");u&&(u.opener=null)}},e.createElement(fe,null)))))}),Te=t=>{const{value:a="#000",label:n="",TextFieldProps:o={},onChange:r}=t,[i,c]=f.useState(!1);return e.createElement("div",{style:{display:"flex"}},e.createElement(v,{value:a,label:n,onClick:()=>{c(!i)},onChange:u=>{r(u.target.value)},...o}),e.createElement("div",{style:{marginTop:10}},e.createElement(e.Suspense,{fallback:null},e.createElement(ke,{color:a,onChange:u=>{r(u)}}))))},Le=d(function(t){const{slot:a}=t;return e.createElement(Te,{label:a.name,value:a.value,onChange:n=>{a.set(n)},TextFieldProps:{helperText:a.description,fullWidth:!0}})}),Me="12px",_='Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',Fe=$()(t=>({error:{color:"red",fontSize:"0.8em"},callbackEditor:{fontFamily:_,fontSize:Me,background:t.palette.background.default,width:800,marginTop:"16px",border:"1px solid rgba(0,0,0,0.42)"},callbackContainer:{width:"100%",overflowX:"auto"},textAreaFont:{fontFamily:_}})),q=d(function({slot:a}){const{classes:n}=Fe(),[o,r]=f.useState(JSON.stringify(a.value,null,2)),[i,c]=f.useState();return f.useEffect(()=>{try{c(void 0),a.set(JSON.parse(o))}catch(u){console.error({e:u}),c(u)}},[o,a]),e.createElement(e.Fragment,null,i?e.createElement("p",{className:n.error},`${i}`):null,e.createElement("div",{className:n.callbackContainer},e.createElement(N,{shrink:!0,htmlFor:"json-editor"},a.name),e.createElement(v,{id:"json-editor",className:n.callbackEditor,value:o,helperText:a.description,multiline:!0,onChange:u=>{r(u.target.value)},style:{background:i?"#fdd":void 0},InputProps:{classes:{input:n.textAreaFont}}})))}),Ae=$()(t=>({card:{marginTop:t.spacing(1)}})),Pe=d(function({slot:t}){const{classes:a}=Ae(),[n,o]=f.useState("");return e.createElement(e.Fragment,null,e.createElement(N,null,t.name),[...t.value].map(([r,i])=>e.createElement(k,{raised:!0,key:r,className:a.card},e.createElement(w,{title:r,action:e.createElement(b,{onClick:()=>{t.remove(r)}},e.createElement(A,null))}),e.createElement(J,null,e.createElement(ae,{slot:{name:t.name,value:i,description:`Values associated with entry ${r}`,setAtIndex:(c,u)=>{t.setAtKeyIndex(r,c,u)},removeAtIndex:c=>{t.removeAtKeyIndex(r,c)},add:c=>{t.addToKey(r,c)}}})))),e.createElement(k,{raised:!0,className:a.card},e.createElement(w,{disableTypography:!0,title:e.createElement(v,{fullWidth:!0,value:n,placeholder:"add new",onChange:r=>{o(r.target.value)},InputProps:{endAdornment:e.createElement(S,{position:"end"},e.createElement(b,{disabled:n==="",onClick:()=>{t.add(n,[]),o("")}},e.createElement(U,null)))}})})),e.createElement(T,null,t.description))});function L(t){const{helperText:a}=t;return e.createElement(v,{...t,helperText:e.createElement(B.SanitizedHTML,{html:a||""}),FormHelperTextProps:{component:"div"},fullWidth:!0})}const ne=d(function({slot:t}){const[a,n]=f.useState(t.value);return f.useEffect(()=>{var o;const r=Number.parseFloat(a);Number.isNaN(r)?(o=t.reset)===null||o===void 0||o.call(t):t.set(r)},[t,a]),e.createElement(L,{label:t.name,helperText:t.description,value:a,type:"number",onChange:o=>{n(o.target.value)}})}),je=$()(t=>({card:{marginTop:t.spacing(1)}})),Ie=d(function({slot:t}){const{classes:a}=je(),[n,o]=f.useState("");return e.createElement(e.Fragment,null,e.createElement(N,null,t.name),[...t.value].map(([r,i])=>e.createElement(k,{raised:!0,key:r,className:a.card},e.createElement(w,{title:r,action:e.createElement(b,{onClick:()=>{t.remove(r)}},e.createElement(A,null))}),e.createElement(J,null,e.createElement(ne,{slot:{value:i,set:c=>{t.add(r,c)}}})))),e.createElement(k,{raised:!0,className:a.card},e.createElement(w,{disableTypography:!0,title:e.createElement(v,{fullWidth:!0,value:n,placeholder:"add new",onChange:r=>{o(r.target.value)},InputProps:{endAdornment:e.createElement(S,{position:"end"},e.createElement(b,{disabled:n==="",onClick:()=>{t.add(n,0),o("")}},e.createElement(U,null)))}})})),e.createElement(T,null,t.description))}),ze=d(function({slot:t}){return e.createElement(he,null,e.createElement(ge,{label:t.name,control:e.createElement(Ee,{checked:t.value,onChange:a=>{t.set(a.target.checked)}})}),e.createElement(T,null,t.description))}),re=$()(t=>({paper:{display:"flex",marginBottom:t.spacing(2),position:"relative"},paperContent:{width:"100%"},slotModeSwitch:{width:24,background:t.palette.secondary.light,display:"flex",justifyContent:"center",alignItems:"center"}})),oe=d(function({slot:t}){return e.createElement(L,{label:t.name,helperText:t.description,value:t.value,onChange:a=>{t.set(a.target.value)}})}),Re=d(function({slot:t}){return e.createElement(v,{label:t.name,helperText:t.description,multiline:!0,value:t.value,onChange:a=>{t.set(a.target.value)}})}),Oe=()=>e.createElement($e,null,e.createElement("path",{d:"M20.41,3C21.8,5.71 22.35,8.84 22,12C21.8,15.16 20.7,18.29 18.83,21L17.3,20C18.91,17.57 19.85,14.8 20,12C20.34,9.2 19.89,6.43 18.7,4L20.41,3M5.17,3L6.7,4C5.09,6.43 4.15,9.2 4,12C3.66,14.8 4.12,17.57 5.3,20L3.61,21C2.21,18.29 1.65,15.17 2,12C2.2,8.84 3.3,5.71 5.17,3M12.08,10.68L14.4,7.45H16.93L13.15,12.45L15.35,17.37H13.09L11.71,14L9.28,17.33H6.76L10.66,12.21L8.53,7.45H10.8L12.08,10.68Z"})),Ve=d(function({slot:t}){const[a,n]=f.useState(t.value);return f.useEffect(()=>{const o=Number.parseInt(a,10);Number.isNaN(o)||t.set(o)},[t,a]),e.createElement(L,{label:t.name,helperText:t.description,value:a,type:"number",onChange:o=>{n(o.target.value)}})}),We=d(function({slot:t,slotSchema:a}){const n=ve(R(a)),o=O(O(R(n.properties.value))[1]).map(r=>r.value);return e.createElement(L,{value:t.value,label:t.name,select:!0,helperText:t.description,onChange:r=>{t.set(r.target.value)}},o.map(r=>e.createElement(K,{key:r,value:r},r)))}),_e=d(function({slot:t}){var a;return e.createElement(B.FileSelector,{location:t.value,setLocation:n=>{t.set(n)},name:t.name,description:t.description,rootModel:(a=H.getEnv(t).pluginManager)===null||a===void 0?void 0:a.rootModel})}),D={string:oe,text:Re,fileLocation:_e,stringArray:ae,stringArrayMap:Pe,numberMap:Ie,number:ne,integer:Ve,color:Le,stringEnum:We,boolean:ze,frozen:q,configRelationships:q},qe=d(function({slot:t,slotSchema:a}){const{classes:n}=re(),{type:o}=t;let r=t.isCallback?Ne:D[o];return r||(console.warn(`no slot editor defined for ${o}, editing as string`),r=oe),o in D||console.warn(`SlotEditor needs to implement ${o}`),e.createElement(G,{className:n.paper},e.createElement("div",{className:n.paperContent},e.createElement(r,{slot:t,slotSchema:a})),e.createElement("div",{className:n.slotModeSwitch},t.contextVariable.length?e.createElement(b,{onClick:()=>t.isCallback?t.convertToValue():t.convertToCallback(),title:`convert to ${t.isCallback?"regular value":"callback"}`},t.isCallback?e.createElement(Oe,null):e.createElement(be,null)):null))}),De=d(function({typeNameChoices:t,slot:a,slotName:n,onChange:o}){const{classes:r}=re();return e.createElement(G,{className:r.paper},e.createElement("div",{className:r.paperContent},e.createElement(v,{value:a.type,label:"Type",select:!0,helperText:`Type of ${n} to use`,fullWidth:!0,onChange:o},t.map(i=>e.createElement(K,{key:i,value:i},i)))))}),le=$()(t=>({icon:{color:t.palette.tertiary.contrastText||"#fff"},expansionPanelDetails:{display:"block",padding:t.spacing(1)},accordion:{border:`1px solid ${t.palette.text.primary}`},noOverflow:{width:"100%",overflowX:"auto"}})),ie=d(function(t){const{classes:a}=le(),{slotName:n,slotSchema:o,schema:r,slot:i=r[n],path:c=[]}=t;if(C.isConfigurationSchemaType(o)){if(i.length)return i.map((m,M)=>{const x=m.type?`${V.singular(n)} ${m.type}`:`${V.singular(n)} ${M+1}`;return e.createElement(ie,{key:x,...t,slot:m,slotName:x})});const u=C.getTypeNamesFromExplicitlyTypedUnion(o);return e.createElement(X,{defaultExpanded:!0,className:a.accordion},e.createElement(Q,{expandIcon:e.createElement(Z,{className:a.icon})},e.createElement(Y,null,[...c,n].join("➔"))),e.createElement(ee,{className:a.expansionPanelDetails},u.length?e.createElement(De,{typeNameChoices:u,slotName:n,slot:i,onChange:m=>{m.target.value!==i.type&&r.setSubschema(n,{type:m.target.value})}}):null,e.createElement(ye,{className:a.noOverflow},e.createElement(se,{schema:i,path:[...c,n]}))))}else return C.isConfigurationSlotType(o)?e.createElement(qe,{key:n,slot:i,slotSchema:o}):null}),se=d(function({schema:t,path:a=[]}){const n=Ce(t).properties;return e.createElement(e.Fragment,null,Object.entries(n).map(([o,r])=>e.createElement(ie,{key:o,slotName:o,slotSchema:r,path:a,schema:t})))}),Ke=d(function({model:t}){const{classes:a}=le(),{target:n}=t,o=C.readConfObject(n,"trackId"),r=C.readConfObject(n,"name");return e.createElement(X,{key:o,defaultExpanded:!0,className:a.accordion},e.createElement(Q,{expandIcon:e.createElement(Z,{className:a.icon})},e.createElement(Y,null,e.createElement(xe,{html:r??"Configuration"}))),e.createElement(ee,{className:a.expansionPanelDetails,"data-testid":"configEditor"},e.createElement(se,{schema:n})))});export{Ke as default};
//# sourceMappingURL=ConfigurationEditor-KcmCwbP6.js.map