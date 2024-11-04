import{V as Te,a as W,b_ as pe,b$ as ge,z as xe,m as ee,o as Ne,R as u,c0 as Oe,c1 as Ye,c2 as Xe,aa as We,ae as Re,U as ke,P as $e,B as N,c3 as Ue,c4 as Be,c5 as Le,c6 as Ae,bg as Fe,u as $,c as He,b9 as Ie,D as Ge,f as Ve}from"./index-DvmOrY9r.js";import{C as qe,a as ze}from"./ColorPicker-CIrAY6Yi.js";import{m as ce,a as de}from"./util-CGnSGovx.js";var G={exports:{}},me={};function ve(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ve(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function fe(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=ve(e))&&(r&&(r+=" "),r+=t);return r}const Ke=Object.freeze(Object.defineProperty({__proto__:null,clsx:fe,default:fe},Symbol.toStringTag,{value:"Module"})),je=Te(Ke);var g={},_={};Object.defineProperty(_,"__esModule",{value:!0});_.dontSetMe=tt;_.findInArray=Je;_.int=et;_.isFunction=Qe;_.isNum=Ze;function Je(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function Qe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Ze(e){return typeof e=="number"&&!isNaN(e)}function et(e){return parseInt(e,10)}function tt(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var R={};Object.defineProperty(R,"__esModule",{value:!0});R.browserPrefixToKey=Se;R.browserPrefixToStyle=nt;R.default=void 0;R.getPrefix=ye;const J=["Moz","Webkit","O","ms"];function ye(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<J.length;r++)if(Se(t,J[r])in n)return J[r];return""}function Se(e,t){return t?"".concat(t).concat(rt(e)):e}function nt(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function rt(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}R.default=ye();Object.defineProperty(g,"__esModule",{value:!0});g.addClassName=we;g.addEvent=st;g.addUserSelectStyles=vt;g.createCSSTransform=ht;g.createSVGTransform=pt;g.getTouch=gt;g.getTouchIdentifier=mt;g.getTranslation=te;g.innerHeight=ct;g.innerWidth=dt;g.matchesSelector=be;g.matchesSelectorAndParentsTo=at;g.offsetXYFromParent=ft;g.outerHeight=lt;g.outerWidth=ut;g.removeClassName=Ee;g.removeEvent=it;g.removeUserSelectStyles=yt;var C=_,he=ot(R);function De(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(De=function(r){return r?n:t})(e)}function ot(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=De(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}let I="";function be(e,t){return I||(I=(0,C.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,C.isFunction)(e[n])})),(0,C.isFunction)(e[I])?e[I](t):!1}function at(e,t,n){let r=e;do{if(be(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function st(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function it(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function lt(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,C.int)(n.borderTopWidth),t+=(0,C.int)(n.borderBottomWidth),t}function ut(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,C.int)(n.borderLeftWidth),t+=(0,C.int)(n.borderRightWidth),t}function ct(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,C.int)(n.paddingTop),t-=(0,C.int)(n.paddingBottom),t}function dt(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,C.int)(n.paddingLeft),t-=(0,C.int)(n.paddingRight),t}function ft(e,t,n){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),i=(e.clientX+t.scrollLeft-o.left)/n,l=(e.clientY+t.scrollTop-o.top)/n;return{x:i,y:l}}function ht(e,t){const n=te(e,t,"px");return{[(0,he.browserPrefixToKey)("transform",he.default)]:n}}function pt(e,t){return te(e,t,"")}function te(e,t,n){let{x:r,y:o}=e,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const l="".concat(typeof t.x=="string"?t.x:t.x+n),h="".concat(typeof t.y=="string"?t.y:t.y+n);i="translate(".concat(l,", ").concat(h,")")+i}return i}function gt(e,t){return e.targetTouches&&(0,C.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,C.findInArray)(e.changedTouches,n=>t===n.identifier)}function mt(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function vt(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&we(e.body,"react-draggable-transparent-selection")}function yt(e){if(e)try{if(e.body&&Ee(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function we(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function Ee(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var T={};Object.defineProperty(T,"__esModule",{value:!0});T.canDragX=bt;T.canDragY=wt;T.createCoreData=Ct;T.createDraggableData=Pt;T.getBoundPosition=St;T.getControlPosition=Et;T.snapToGrid=Dt;var E=_,U=g;function St(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:Mt(r);const o=ne(e);if(typeof r=="string"){const{ownerDocument:i}=o,l=i.defaultView;let h;if(r==="parent"?h=o.parentNode:h=i.querySelector(r),!(h instanceof l.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const p=h,S=l.getComputedStyle(o),P=l.getComputedStyle(p);r={left:-o.offsetLeft+(0,E.int)(P.paddingLeft)+(0,E.int)(S.marginLeft),top:-o.offsetTop+(0,E.int)(P.paddingTop)+(0,E.int)(S.marginTop),right:(0,U.innerWidth)(p)-(0,U.outerWidth)(o)-o.offsetLeft+(0,E.int)(P.paddingRight)-(0,E.int)(S.marginRight),bottom:(0,U.innerHeight)(p)-(0,U.outerHeight)(o)-o.offsetTop+(0,E.int)(P.paddingBottom)-(0,E.int)(S.marginBottom)}}return(0,E.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,E.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,E.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,E.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function Dt(e,t,n){const r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]}function bt(e){return e.props.axis==="both"||e.props.axis==="x"}function wt(e){return e.props.axis==="both"||e.props.axis==="y"}function Et(e,t,n){const r=typeof t=="number"?(0,U.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const o=ne(n),i=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,U.offsetXYFromParent)(r||e,i,n.props.scale)}function Ct(e,t,n){const r=!(0,E.isNum)(e.lastX),o=ne(e);return r?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:o,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function Pt(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Mt(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function ne(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var V={},q={};Object.defineProperty(q,"__esModule",{value:!0});q.default=_t;function _t(){}Object.defineProperty(V,"__esModule",{value:!0});V.default=void 0;var Q=xt(W),w=re(pe),Tt=re(ge),y=g,Y=T,Z=_,A=re(q);function re(e){return e&&e.__esModule?e:{default:e}}function Ce(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Ce=function(r){return r?n:t})(e)}function xt(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Ce(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function D(e,t,n){return t=Nt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nt(e){var t=Ot(e,"string");return typeof t=="symbol"?t:String(t)}function Ot(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const M={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let X=M.mouse,z=class extends Q.Component{constructor(){super(...arguments),D(this,"dragging",!1),D(this,"lastX",NaN),D(this,"lastY",NaN),D(this,"touchIdentifier",null),D(this,"mounted",!1),D(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,y.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,y.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const o=(0,y.getTouchIdentifier)(t);this.touchIdentifier=o;const i=(0,Y.getControlPosition)(t,o,this);if(i==null)return;const{x:l,y:h}=i,p=(0,Y.createCoreData)(this,l,h);(0,A.default)("DraggableCore: handleDragStart: %j",p),(0,A.default)("calling",this.props.onStart),!(this.props.onStart(t,p)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,y.addUserSelectStyles)(r),this.dragging=!0,this.lastX=l,this.lastY=h,(0,y.addEvent)(r,X.move,this.handleDrag),(0,y.addEvent)(r,X.stop,this.handleDragStop))}),D(this,"handleDrag",t=>{const n=(0,Y.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let h=r-this.lastX,p=o-this.lastY;if([h,p]=(0,Y.snapToGrid)(this.props.grid,h,p),!h&&!p)return;r=this.lastX+h,o=this.lastY+p}const i=(0,Y.createCoreData)(this,r,o);if((0,A.default)("DraggableCore: handleDrag: %j",i),this.props.onDrag(t,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const p=document.createEvent("MouseEvents");p.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(p)}return}this.lastX=r,this.lastY=o}),D(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,Y.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let p=r-this.lastX||0,S=o-this.lastY||0;[p,S]=(0,Y.snapToGrid)(this.props.grid,p,S),r=this.lastX+p,o=this.lastY+S}const i=(0,Y.createCoreData)(this,r,o);if(this.props.onStop(t,i)===!1||this.mounted===!1)return!1;const h=this.findDOMNode();h&&this.props.enableUserSelectHack&&(0,y.removeUserSelectStyles)(h.ownerDocument),(0,A.default)("DraggableCore: handleDragStop: %j",i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,h&&((0,A.default)("DraggableCore: Removing handlers"),(0,y.removeEvent)(h.ownerDocument,X.move,this.handleDrag),(0,y.removeEvent)(h.ownerDocument,X.stop,this.handleDragStop))}),D(this,"onMouseDown",t=>(X=M.mouse,this.handleDragStart(t))),D(this,"onMouseUp",t=>(X=M.mouse,this.handleDragStop(t))),D(this,"onTouchStart",t=>(X=M.touch,this.handleDragStart(t))),D(this,"onTouchEnd",t=>(X=M.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,y.addEvent)(t,M.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,y.removeEvent)(n,M.mouse.move,this.handleDrag),(0,y.removeEvent)(n,M.touch.move,this.handleDrag),(0,y.removeEvent)(n,M.mouse.stop,this.handleDragStop),(0,y.removeEvent)(n,M.touch.stop,this.handleDragStop),(0,y.removeEvent)(t,M.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,y.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:Tt.default.findDOMNode(this)}render(){return Q.cloneElement(Q.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};V.default=z;D(z,"displayName","DraggableCore");D(z,"propTypes",{allowAnyClick:w.default.bool,children:w.default.node.isRequired,disabled:w.default.bool,enableUserSelectHack:w.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:w.default.arrayOf(w.default.number),handle:w.default.string,cancel:w.default.string,nodeRef:w.default.object,onStart:w.default.func,onDrag:w.default.func,onStop:w.default.func,onMouseDown:w.default.func,scale:w.default.number,className:Z.dontSetMe,style:Z.dontSetMe,transform:Z.dontSetMe});D(z,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return p.default}}),e.default=void 0;var t=K(W),n=P(pe),r=P(ge),o=P(je),i=g,l=T,h=_,p=P(V),S=P(q);function P(a){return a&&a.__esModule?a:{default:a}}function F(a){if(typeof WeakMap!="function")return null;var s=new WeakMap,d=new WeakMap;return(F=function(c){return c?d:s})(a)}function K(a,s){if(a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var d=F(s);if(d&&d.has(a))return d.get(a);var c={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(f!=="default"&&Object.prototype.hasOwnProperty.call(a,f)){var O=m?Object.getOwnPropertyDescriptor(a,f):null;O&&(O.get||O.set)?Object.defineProperty(c,f,O):c[f]=a[f]}return c.default=a,d&&d.set(a,c),c}function B(){return B=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}return a},B.apply(this,arguments)}function x(a,s,d){return s=j(s),s in a?Object.defineProperty(a,s,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[s]=d,a}function j(a){var s=v(a,"string");return typeof s=="symbol"?s:String(s)}function v(a,s){if(typeof a!="object"||a===null)return a;var d=a[Symbol.toPrimitive];if(d!==void 0){var c=d.call(a,s||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(a)}class b extends t.Component{static getDerivedStateFromProps(s,d){let{position:c}=s,{prevPropsPosition:m}=d;return c&&(!m||c.x!==m.x||c.y!==m.y)?((0,S.default)("Draggable: getDerivedStateFromProps %j",{position:c,prevPropsPosition:m}),{x:c.x,y:c.y,prevPropsPosition:{...c}}):null}constructor(s){super(s),x(this,"onDragStart",(d,c)=>{if((0,S.default)("Draggable: onDragStart: %j",c),this.props.onStart(d,(0,l.createDraggableData)(this,c))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),x(this,"onDrag",(d,c)=>{if(!this.state.dragging)return!1;(0,S.default)("Draggable: onDrag: %j",c);const m=(0,l.createDraggableData)(this,c),f={x:m.x,y:m.y,slackX:0,slackY:0};if(this.props.bounds){const{x:L,y:k}=f;f.x+=this.state.slackX,f.y+=this.state.slackY;const[H,oe]=(0,l.getBoundPosition)(this,f.x,f.y);f.x=H,f.y=oe,f.slackX=this.state.slackX+(L-f.x),f.slackY=this.state.slackY+(k-f.y),m.x=f.x,m.y=f.y,m.deltaX=f.x-this.state.x,m.deltaY=f.y-this.state.y}if(this.props.onDrag(d,m)===!1)return!1;this.setState(f)}),x(this,"onDragStop",(d,c)=>{if(!this.state.dragging||this.props.onStop(d,(0,l.createDraggableData)(this,c))===!1)return!1;(0,S.default)("Draggable: onDragStop: %j",c);const f={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:L,y:k}=this.props.position;f.x=L,f.y=k}this.setState(f)}),this.state={dragging:!1,dragged:!1,x:s.position?s.position.x:s.defaultPosition.x,y:s.position?s.position.y:s.defaultPosition.y,prevPropsPosition:{...s.position},slackX:0,slackY:0,isElementSVG:!1},s.position&&!(s.onDrag||s.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var s,d;return(s=(d=this.props)===null||d===void 0||(d=d.nodeRef)===null||d===void 0?void 0:d.current)!==null&&s!==void 0?s:r.default.findDOMNode(this)}render(){const{axis:s,bounds:d,children:c,defaultPosition:m,defaultClassName:f,defaultClassNameDragging:O,defaultClassNameDragged:L,position:k,positionOffset:H,scale:oe,...Me}=this.props;let ae={},se=null;const ie=!!!k||this.state.dragging,le=k||m,ue={x:(0,l.canDragX)(this)&&ie?this.state.x:le.x,y:(0,l.canDragY)(this)&&ie?this.state.y:le.y};this.state.isElementSVG?se=(0,i.createSVGTransform)(ue,H):ae=(0,i.createCSSTransform)(ue,H);const _e=(0,o.default)(c.props.className||"",f,{[O]:this.state.dragging,[L]:this.state.dragged});return t.createElement(p.default,B({},Me,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(c),{className:_e,style:{...c.props.style,...ae},transform:se}))}}e.default=b,x(b,"displayName","Draggable"),x(b,"propTypes",{...p.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:h.dontSetMe,style:h.dontSetMe,transform:h.dontSetMe}),x(b,"defaultProps",{...p.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(me);const{default:Pe,DraggableCore:Yt}=me;G.exports=Pe;G.exports.default=Pe;G.exports.DraggableCore=Yt;var Xt=G.exports;const Wt=xe(Xt),Rt=ee()(e=>({closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}));function kt(e){const t=W.useRef(null);return u.createElement(Wt,{nodeRef:t,cancel:'[class*="MuiDialogContent-root"]',onStart:n=>{var r,o;return(o=(r=n.target)===null||r===void 0?void 0:r.className)===null||o===void 0?void 0:o.includes("MuiDialogTitle")}},u.createElement($e,{ref:t,...e}))}const $t=Ne(function(t){const{classes:n}=Rt(),{title:r,children:o,onClose:i}=t;return u.createElement(Oe,{...t,PaperComponent:kt},u.createElement(Ye,null,u.createElement(Xe,{style:{cursor:"move"}},r,i?u.createElement(We,{className:n.closeButton,onClick:()=>{i()}},u.createElement(Re,null)):null),u.createElement(ke,null),o))}),Ut=ee()({cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}});function Bt({rows:e,onChange:t,showTips:n}){const{classes:r}=Ut(),[o,i]=W.useState(null),[l,h]=W.useState([]),{name:p,color:S,baseUri:P,...F}=e[0],[K,B]=W.useState("blue"),[x,j]=W.useState({idx:0,field:null});return u.createElement("div",null,u.createElement(N,{disabled:!l.length,onClick:v=>{i(v.currentTarget)}},"Change color of selected items"),u.createElement(N,{onClick:()=>{t(ce([...e],l))},disabled:!l.length},u.createElement(Ue,null),n?"Move selected items up":null),u.createElement(N,{onClick:()=>{t(de([...e],l))},disabled:!l.length},u.createElement(Be,null),n?"Move selected items down":null),u.createElement(N,{onClick:()=>{t(ce([...e],l,e.length))},disabled:!l.length},u.createElement(Le,null),n?"Move selected items to top":null),u.createElement(N,{onClick:()=>{t(de([...e],l,e.length))},disabled:!l.length},u.createElement(Ae,null),n?"Move selected items to bottom":null),u.createElement(qe.ColorPopover,{anchorEl:o,color:K,onChange:v=>{B(v),l.forEach(b=>{const a=e.find(s=>s.name===b);a&&(a.color=v)}),t([...e])},onClose:()=>{i(null)}}),u.createElement("div",{style:{height:400,width:"100%"}},u.createElement(Fe,{getRowId:v=>v.name,checkboxSelection:!0,disableRowSelectionOnClick:!0,onRowSelectionModelChange:v=>{h(v)},rows:e,rowHeight:25,columnHeaderHeight:33,columns:[{field:"color",headerName:"Color",renderCell:v=>{const{value:b,id:a}=v;return u.createElement(ze,{color:b||"blue",onChange:s=>{const d=e.find(c=>c.name===a);d&&(d.color=s),t([...e])}})}},{field:"name",headerName:"Name",width:$.measureGridWidth(e.map(v=>v.name))},...Object.keys(F).map(v=>({field:v,renderCell:({value:b})=>u.createElement("div",{className:r.cell},u.createElement(He.SanitizedHTML,{html:$.getStr(b)})),width:$.measureGridWidth(e.map(b=>`${b[v]}`))}))],sortModel:[],onSortModelChange:v=>{const b=v[0],a=(x.idx+1)%2,s=b.field||x.field;j({idx:a,field:s}),t(s?[...e].sort((d,c)=>{const m=$.getStr(d[s]),f=$.getStr(c[s]);return a===1?m.localeCompare(f):f.localeCompare(m)}):e)}})))}const Lt=ee()({content:{minWidth:800}});function Vt({model:e,handleClose:t}){const{classes:n}=Lt(),{sources:r}=e,[o,i]=W.useState(Ie(r||[])),[l,h]=$.useLocalStorage("multiwiggle-showTips",!0);return u.createElement($t,{open:!0,onClose:t,maxWidth:"xl",title:"Multi-wiggle color/arrangement editor"},u.createElement(Ge,{className:n.content},u.createElement(N,{variant:"contained",style:{float:"right"},onClick:()=>{h(!l)}},l?"Hide tips":"Show tips"),u.createElement("br",null),l?u.createElement(u.Fragment,null,"Helpful tips",u.createElement("ul",null,u.createElement("li",null,"You can select rows in the table with the checkboxes"),u.createElement("li",null,"Multi-select is enabled with shift-click and control-click"),u.createElement("li",null,'The "Move selected items up/down" can re-arrange subtracks'),u.createElement("li",null,"Sorting the data grid itself can also re-arrange subtracks"),u.createElement("li",null,"Changes are applied when you hit Submit"),u.createElement("li",null,"You can click and drag the dialog box to move it on the screen"),u.createElement("li",null,"Columns in the table can be hidden using a vertical '...' menu on the right side of each column"))):null,u.createElement(Bt,{rows:o,onChange:i,showTips:l})),u.createElement(Ve,null,u.createElement(N,{variant:"contained",type:"submit",color:"inherit",onClick:()=>{e.clearLayout(),i(e.sources||[])}},"Clear custom settings"),u.createElement(N,{variant:"contained",color:"secondary",onClick:()=>{t(),i([...e.sources||[]])}},"Cancel"),u.createElement(N,{variant:"contained",color:"primary",type:"submit",onClick:()=>{e.setLayout(o),t()}},"Submit")))}export{Vt as default};
//# sourceMappingURL=SetColorDialog-hfZ4dBGL.js.map
