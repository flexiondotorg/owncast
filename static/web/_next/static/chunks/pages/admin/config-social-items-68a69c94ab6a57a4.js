(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{27561:function(e,t,n){var a=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var a=n(13218),r=n(7771),i=n(14841),l=Math.max,s=Math.min;e.exports=function(e,t,n){var o,c,u,d,f,m,p=0,h=!1,v=!1,x=!0;if("function"!=typeof e)throw TypeError("Expected a function");function j(t){var n=o,a=c;return o=c=void 0,p=t,d=e.apply(a,n)}function N(e){var n=e-m,a=e-p;return void 0===m||n>=t||n<0||v&&a>=u}function y(){var e,n,a,i=r();if(N(i))return b(i);f=setTimeout(y,(e=i-m,n=i-p,a=t-e,v?s(a,u-n):a))}function b(e){return(f=void 0,x&&o)?j(e):(o=c=void 0,d)}function g(){var e,n=r(),a=N(n);if(o=arguments,c=this,m=n,a){if(void 0===f)return p=e=m,f=setTimeout(y,t),h?j(e):d;if(v)return clearTimeout(f),f=setTimeout(y,t),j(m)}return void 0===f&&(f=setTimeout(y,t)),d}return t=i(t)||0,a(n)&&(h=!!n.leading,u=(v="maxWait"in n)?l(i(n.maxWait)||0,t):u,x="trailing"in n?!!n.trailing:x),g.cancel=function(){void 0!==f&&clearTimeout(f),p=0,o=m=c=f=void 0},g.flush=function(){return void 0===f?d:b(r())},g}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7771:function(e,t,n){var a=n(55639);e.exports=function(){return a.Date.now()}},14841:function(e,t,n){var a=n(27561),r=n(13218),i=n(33448),l=0/0,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return l;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=o.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?l:+e}},81009:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-social-items",function(){return n(35688)}])},31512:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var a=n(85893),r=n(67294),i=n(23657),l=n(56469),s=n(20133),o=n(27043),c=n(77786),u=n(5152),d=n.n(u),f=n(87528),m=n(70869);let p=e=>{let{iconList:t,selectedOption:n,onSelected:r}=e,i=""===n?null:n;return(0,a.jsxs)("div",{className:"social-dropdown-container",children:[(0,a.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,a.jsxs)("div",{className:"formfield-container",children:[(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,a.jsx)("div",{className:"input-side",children:(0,a.jsxs)(f.default,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:i,value:i,onSelect:e=>{r&&r(e)},children:[t.map(e=>{let{platform:t,icon:n,key:r}=e;return(0,a.jsxs)(f.default.Option,{className:"social-option",value:r,children:[(0,a.jsx)("span",{className:"option-icon",children:(0,a.jsx)("img",{src:n,alt:"",className:"option-icon"})}),(0,a.jsx)("span",{className:"option-label",children:t})]},"platform-".concat(r))}),(0,a.jsx)(f.default.Option,{className:"social-option",value:m.z_,children:"Other..."},"platform-".concat(m.z_))]})})]})]})};var h=n(11992),v=n(4481),x=n(11),j=n(25510),N=n(28700),y=n(17586);let{Title:b}=i.default,g=d()(()=>Promise.all([n.e(3247),n.e(9036)]).then(n.t.bind(n,9036,23)),{loadableGenerated:{webpack:()=>[9036]},ssr:!1}),w=d()(()=>Promise.all([n.e(3247),n.e(3061)]).then(n.t.bind(n,93061,23)),{loadableGenerated:{webpack:()=>[93061]},ssr:!1}),k=d()(()=>Promise.all([n.e(3247),n.e(1506)]).then(n.t.bind(n,81506,23)),{loadableGenerated:{webpack:()=>[81506]},ssr:!1});function E(){var e,t;let[n,i]=(0,r.useState)([]),[u,d]=(0,r.useState)([]),[f,E]=(0,r.useState)(!1),[Z,C]=(0,r.useState)(!1),[S,_]=(0,r.useState)(!1),[O,P]=(0,r.useState)(-1),[T,I]=(0,r.useState)(m.wC),[z,H]=(0,r.useState)(null),{serverConfig:D,setFieldInConfigState:L}=(0,r.useContext)(v.a)||{},{instanceDetails:$}=D,{socialHandles:M}=$,A=async()=>{try{let e=await (0,h.rQ)(h.$i,{auth:!1}),t=Object.keys(e).map(t=>({key:t,...e[t]}));i(t)}catch(e){console.log(e)}},Q=e=>n.find(t=>t.key===e)||!1,G=""!==T.platform&&!n.find(e=>e.key===T.platform);(0,r.useEffect)(()=>{A()},[]),(0,r.useEffect)(()=>{$.socialHandles&&d(M)},[$]);let R=()=>{H(null),clearTimeout(null)},U=()=>{E(!1),P(-1),C(!1),_(!1),I({...m.wC})},V=()=>{U()},F=(e,t)=>{I({...T,[e]:t})},J=async e=>{f||H((0,N.kg)(N.Jk)),await (0,m.Si)({apiPath:m.c9,data:{value:e},onSuccess:()=>{L({fieldName:"socialHandles",value:e,path:"instanceDetails"}),_(!1),V(),H((0,N.kg)(N.zv)),setTimeout(R,m.sI)},onError:e=>{H((0,N.kg)(N.Un,"There was an error: ".concat(e))),_(!1),setTimeout(R,m.sI)}})},K=e=>{let t=[...u];t.splice(e,1),J(t)},W=e=>{if(e<=0||e>=u.length)return;let t=[...u],n=t[e-1];t[e-1]=t[e],t[e]=n,J(t)},X=e=>{if(e<0||e>=u.length-1)return;let t=[...u],n=t[e+1];t[e+1]=t[e],t[e]=n,J(t)},Y=[{title:"Social Link",dataIndex:"",key:"combo",render:(e,t)=>{let{platform:n,url:r}=t,i=Q(n);if(!i)return(0,a.jsx)("div",{className:"social-handle-cell",children:(0,a.jsxs)("p",{className:"option-label",children:[(0,a.jsx)("strong",{children:n}),(0,a.jsx)("span",{className:"handle-url",title:r,children:r})]})});let{icon:l,platform:s}=i;return(0,a.jsxs)("div",{className:"social-handle-cell",children:[(0,a.jsx)("span",{className:"option-icon",children:(0,a.jsx)("img",{src:l,alt:"",className:"option-icon"})}),(0,a.jsxs)("p",{className:"option-label",children:[(0,a.jsx)("strong",{children:s}),(0,a.jsx)("span",{className:"handle-url",title:r,children:r})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,t,n)=>(0,a.jsxs)("div",{className:"actions",children:[(0,a.jsx)(l.Z,{size:"small",onClick:()=>{let e=u[n];P(n),I({...e}),E(!0),Q(e.platform)||C(!0)},children:"Edit"}),(0,a.jsx)(l.Z,{icon:(0,a.jsx)(w,{}),size:"small",hidden:0===n,onClick:()=>W(n)}),(0,a.jsx)(l.Z,{icon:(0,a.jsx)(g,{}),size:"small",hidden:n===u.length-1,onClick:()=>X(n)}),(0,a.jsx)(l.Z,{className:"delete-button",icon:(0,a.jsx)(k,{}),size:"small",onClick:()=>K(n)})]})}],B={disabled:(e=T.url,!(""!==(t=T.platform)&&("xmpp"===t?(0,x.Kf)(e,"xmpp"):(0,x.jv)(e))))},q=(0,a.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,a.jsx)("div",{className:"label-side"}),(0,a.jsx)("div",{className:"input-side",children:(0,a.jsx)(s.default,{placeholder:"Other platform name",defaultValue:T.platform,onChange:e=>{let{value:t}=e.target;F("platform",t)}})})]});return(0,a.jsxs)("div",{className:"social-links-edit-container",children:[(0,a.jsx)(b,{level:3,className:"section-title",children:"Your Social Handles"}),(0,a.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,a.jsx)(y.E,{status:z}),(0,a.jsx)(o.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:Y,dataSource:u}),(0,a.jsx)(c.default,{title:"Edit Social Handle",open:f,onOk:()=>{_(!0);let e=u.length?[...u]:[];-1===O?e.push(T):e.splice(O,1,T),J(e)},onCancel:V,confirmLoading:S,okButtonProps:B,children:(0,a.jsxs)("div",{className:"social-handle-modal-content",children:[(0,a.jsx)(p,{iconList:n,selectedOption:G?m.z_:T.platform,onSelected:e=>{e===m.z_?(C(!0),F("platform","")):(C(!1),F("platform",e))}}),Z&&q,(0,a.jsx)("br",{}),(0,a.jsx)(j.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[T.platform]||"Url to page",value:T.url,onChange:e=>{let{value:t}=e;F("url",t)},useTrim:!0,type:"url",pattern:x.ax}),(0,a.jsx)(y.E,{status:z})]})}),(0,a.jsx)("br",{}),(0,a.jsx)(l.Z,{type:"primary",onClick:()=>{U(),E(!0)},children:"Add a new social link"})]})}},64773:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(97685),r=n(67294);function i(){var e=r.useReducer(function(e){return e+1},0);return(0,a.Z)(e,2)[1]}},23061:function(e,t,n){"use strict";var a=n(67294),r=n(64773),i=n(98947);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,a.useRef)({}),n=(0,r.Z)();return(0,a.useEffect)(function(){var a=i.ZP.subscribe(function(a){t.current=a,e&&n()});return function(){return i.ZP.unsubscribe(a)}},[]),t.current}},65765:function(e,t,n){"use strict";var a=n(61185),r=n(59408),i=a.ZP;i.Header=a.h4,i.Footer=a.$_,i.Content=a.VY,i.Sider=r.Z,i._InternalSiderContext=r.D,t.default=i},93879:function(e,t,n){"use strict";var a=n(87462),r=n(4942),i=n(97685),l=n(93967),s=n.n(l),o=n(23279),c=n.n(o),u=n(97485),d=n(67294),f=n(17399),m=n(84476),p=n(3227),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};(0,p.b)("small","default","large");var v=null,x=function(e){var t=e.spinPrefixCls,n=e.spinning,l=void 0===n||n,o=e.delay,p=e.className,x=e.size,j=void 0===x?"default":x,N=e.tip,y=e.wrapperClassName,b=e.style,g=e.children,w=h(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),k=d.useState(function(){return l&&(!l||!o||!!isNaN(Number(o)))}),E=(0,i.Z)(k,2),Z=E[0],C=E[1];return d.useEffect(function(){var e=c()(function(){C(l)},o);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[o,l]),d.createElement(f.C,null,function(n){var i,l,o=n.direction,c=s()(t,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},"".concat(t,"-sm"),"small"===j),"".concat(t,"-lg"),"large"===j),"".concat(t,"-spinning"),Z),"".concat(t,"-show-text"),!!N),"".concat(t,"-rtl"),"rtl"===o),p),f=(0,u.Z)(w,["indicator","prefixCls"]),h=d.createElement("div",(0,a.Z)({},f,{style:b,className:c,"aria-live":"polite","aria-busy":Z}),(i=e.indicator,l="".concat(t,"-dot"),null===i?null:(0,m.l$)(i)?(0,m.Tm)(i,{className:s()(i.props.className,l)}):(0,m.l$)(v)?(0,m.Tm)(v,{className:s()(v.props.className,l)}):d.createElement("span",{className:s()(l,"".concat(t,"-dot-spin"))},d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}))),N?d.createElement("div",{className:"".concat(t,"-text")},N):null);if(void 0!==g){var x=s()("".concat(t,"-container"),(0,r.Z)({},"".concat(t,"-blur"),Z));return d.createElement("div",(0,a.Z)({},f,{className:s()("".concat(t,"-nested-loading"),y)}),Z&&d.createElement("div",{key:"loading"},h),d.createElement("div",{className:x,key:"container"},g))}return h})},j=function(e){var t=e.prefixCls,n=(0,d.useContext(f.E_).getPrefixCls)("spin",t),r=(0,a.Z)((0,a.Z)({},e),{spinPrefixCls:n});return d.createElement(x,(0,a.Z)({},r))};j.setDefaultIndicator=function(e){v=e},t.Z=j},35688:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(85893);n(67294);var r=n(23657),i=n(31512),l=n(25889);let{Title:s}=r.default;function o(){return(0,a.jsxs)("div",{className:"config-social-items",children:[(0,a.jsx)(s,{children:"Social Items"}),(0,a.jsx)(i.Z,{})]})}o.getLayout=function(e){return(0,a.jsx)(l.l,{page:e})}},11163:function(e,t,n){e.exports=n(43079)},55945:function(e,t,n){"use strict";function a(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return 0===n?0:n}}n.d(t,{u:function(){return a}})},96707:function(e,t,n){"use strict";n.d(t,{H_:function(){return o},I7:function(){return c},dP:function(){return r},fH:function(){return s},jE:function(){return a},vh:function(){return l},yJ:function(){return i}});let a=6048e5,r=864e5,i=6e4,l=36e5,s=43200,o=1440,c=Symbol.for("constructDateFrom")},16393:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var a=n(96707);function r(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&a.I7 in e?e[a.I7](t):e instanceof Date?new e.constructor(t):new Date(t)}},64077:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});var a=n(46042);function r(e,t){return+(0,a.Q)(e)-+(0,a.Q)(t)}},94817:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var a=n(55945),r=n(64077);function i(e,t,n){let i=(0,r._)(e,t)/1e3;return(0,a.u)(null==n?void 0:n.roundingMethod)(i)}},46042:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var a=n(16393);function r(e,t){return(0,a.L)(t||e,e)}}},function(e){e.O(0,[83,1287,3800,7786,443,9904,3657,6167,2502,7528,9532,449,7043,5889,2888,9774,179],function(){return e(e.s=81009)}),_N_E=e.O()}]);