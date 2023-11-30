(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{2174:function(t,n,e){"use strict";e.d(n,{Q8:function(){return a},V7:function(){return l},VO:function(){return u},_I:function(){return i},qh:function(){return r},sq:function(){return c}});let{entries:r,values:u,keys:o,fromEntries:c}=Object;function i(t,n){return r(t).map((t,e)=>{let[r,u]=t;return n(r,u,e)})}function l(t,n,e){let u=r(t).map((t,e)=>{let[r,u]=t;return n(r,u,e)});return e&&u.reverse(),c(u)}function a(t,n){return l(t,(t,e)=>[t,n(t,e)])}},5083:function(t,n,e){"use strict";e.d(n,{yc:function(){return i},GS:function(){return f},QR:function(){return v},hJ:function(){return p}}),e(1163);var r=e(7294),u=e(6486),o=e.n(u),c=e(2174);function i(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return{encode:n=>n===t?void 0:n.toString(),decode:n=>n?parseFloat(n):t,push:n}}let{entries:l,fromEntries:a,keys:s}=Object;function f(t){let{init:n,places:e,push:r}=t;return{encode:t=>{let{lat:r,lng:u}=t;if(r===n.lat&&u===n.lng)return;let[o,c]=e?[r.toFixed(e),u.toFixed(e)]:[r,u];return u<0?"".concat(o).concat(c):"".concat(o,"_").concat(c)},decode:t=>{if(!t)return n;let e=function(t){let n=Array.from(t.matchAll(/[ +\-_]/g)),e=[],r=null,u=0;function o(n){u=r?r.index||t.length:0;let o=r?r[0]:"";"-"!=o&&(u+=o.length);let c=t.substring(u,n);u=n;let i=parseFloat(c);if(isNaN(i))throw Error("Invalid piece ".concat(c,", parsing ").concat(t));e.push(i)}return n.forEach((n,e)=>{o(n.index||t.length),r=n}),u<t.length&&o(t.length),e}(t);2!=e.length&&console.warn("Unrecognized ll value: ".concat(t));let[r,u]=e;return{lat:r,lng:u}},push:r}}let d=()=>decodeURIComponent(window.location.hash.replace("#",""));function h(t,n){(n=n||d())&&n.startsWith("#")&&(n=n.substring(1));let e=n?n.split("&"):[],r={};return e.forEach(n=>{let[e,u]=n.split(/=(.*)/),o=t[e],c=o.decode(u);r[e]={val:c,param:o}}),r}function p(t,n,e){let{push:r,log:u}=e,o=function(t,n){let e=h(t);l(n).forEach(n=>{let[r,u]=n,o=t[r];if(!o)throw Error("Unrecognized param key: ".concat(r));e[r]={val:u,param:o}});let r=l(e).map(t=>{let[n,{val:e,param:r}]=t,u=r.encode(e);if(void 0!==u)return"".concat(n,"=").concat(u)}).filter(t=>t).join("&");return r}(t,n),c="#".concat(o);return window.location.hash==c?u&&console.log("updateHashParams: skipping push",window.location.hash,"→",c,window.location.hash==c):r?(u&&console.log("updateHashParams: push (pushState)",window.location.hash,"→",c,window.location.hash==c),window.history.pushState({url:c},"",c)):(u&&console.log("updateHashParams: push (replaceState)",window.location.hash,"→",c,window.location.hash==c),window.history.replaceState({url:c},"",c)),o}function v(t){let{params:n,stateCb:e,popStateCb:u}=t,[i,a]=(0,r.useState)(()=>{let t=d();return t}),s=(0,r.useMemo)(()=>h(n,i),[i]),f=(0,c.V7)(n,(t,n)=>{let[e,u]=(n.use||r.useState)(()=>{let e=t in s?s[t].val:n.decode(void 0);return e});return[t,{val:e,set:u,param:n}]}),p=(0,c.VO)(f).map(t=>{let{val:n}=t;return n}),v=(0,r.useCallback)(t=>{let e=h(n,t);l(e).forEach(t=>{let[n,{val:e}]=t,{val:r,set:u}=f[n],c=o().isEqual(r,e);c||(console.log("update state: ".concat(n),r,"->",e,"(change: ".concat(!c,")")),u instanceof Function?u(e):u.set(e))})},[n,f]);return(0,r.useEffect)(()=>{let t=t=>{console.log("onpopstate",t.state,'"'.concat(t.target.location.hash,'"'),'"'.concat(window.location.hash,'"'),t),console.log("history.state:",history.state,'"'.concat(history.state.hash,'"'));let e=function(){let t=history.state.url,n=t.replace(/^[^#]*#?/,"");if(!n){let e=history.state.as;(n=e.replace(/^[^#]*#?/,""))&&console.warn("no hash in history state url ".concat(t,", using as ").concat(e))}return n}();if(v(e),u){let t=h(n,e);u(t)}};return window.addEventListener("popstate",t),()=>{window.removeEventListener("popstate",t)}},[v,u]),(0,r.useEffect)(()=>{let t=()=>{console.log("handleHashChange"),v()};return window.addEventListener("hashchange",t),()=>{window.removeEventListener("hashchange",t)}},[]),(0,r.useEffect)(()=>{l(f).map(t=>{let[n,{val:e,param:r}]=t,u=r.encode(e);if(void 0!==u)return"".concat(n,"=").concat(u)}).filter(t=>t).join("&"),e&&e(f)},p),(0,c.Q8)(f,(t,n)=>{let{val:e,set:r}=n;return[e,r]})}},4464:function(){},1410:function(t,n,e){"use strict";e.d(n,{Hb:function(){return u},UO:function(){return i},mE:function(){return l},sj:function(){return o}});var r=e(7294);function u(t){return Object.freeze({__version:1,map:t})}function o(t,n){return Object.freeze({...t,...n})}let c=(0,r.createContext)(null),i=c.Provider;function l(){let t=(0,r.useContext)(c);if(null==t)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}},7999:function(t,n,e){"use strict";e.d(n,{I:function(){return o},O:function(){return u}});var r=e(7294);function u(t,n,e){return Object.freeze({instance:t,context:n,container:e})}function o(t,n){return null==n?function(n,e){let u=(0,r.useRef)();return u.current||(u.current=t(n,e)),u}:function(e,u){let o=(0,r.useRef)();o.current||(o.current=t(e,u));let c=(0,r.useRef)(e),{instance:i}=o.current;return(0,r.useEffect)(function(){c.current!==e&&(n(i,e,c.current),c.current=e)},[i,e,u]),o}}},1512:function(t,n,e){"use strict";e.d(n,{SO:function(){return f},Au:function(){return d},Lf:function(){return h}});var r=e(7294),u=e(3935),o=e(1410),c=e(7999);function i(t,n){let e=(0,r.useRef)(n);(0,r.useEffect)(function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n},[t,n])}function l(t,n){let e=(0,r.useRef)();(0,r.useEffect)(function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}},[t,n])}var a=e(1802);function s(t,n){(0,r.useEffect)(function(){let e=n.layerContainer??n.map;return e.addLayer(t.instance),function(){n.layerContainer?.removeLayer(t.instance),n.map.removeLayer(t.instance)}},[n,t])}function f(t,n){var e;let s=(0,c.I)(t);return e=function(t,e){let r=(0,o.mE)(),u=s((0,a.q)(t,r),r);return i(r.map,t.attribution),l(u.current,t.eventHandlers),n(u.current,r,t,e),u},(0,r.forwardRef)(function(t,n){let[o,c]=(0,r.useState)(!1),{instance:i}=e(t,c).current;(0,r.useImperativeHandle)(n,()=>i),(0,r.useEffect)(function(){o&&i.update()},[i,o,t.children]);let l=i._contentNode;return l?(0,u.createPortal)(t.children,l):null})}function d(t,n){var e;let u=(0,c.I)(t,n);return e=function(t){let n=(0,o.mE)(),e=u((0,a.q)(t,n),n);return l(e.current,t.eventHandlers),s(e.current,n),function(t,n){let e=(0,r.useRef)();(0,r.useEffect)(function(){if(n.pathOptions!==e.current){let r=n.pathOptions??{};t.instance.setStyle(r),e.current=r}},[t,n])}(e.current,t),e},(0,r.forwardRef)(function(t,n){let{instance:u,context:c}=e(t).current;return(0,r.useImperativeHandle)(n,()=>u),null==t.children?null:r.createElement(o.UO,{value:c},t.children)})}function h(t,n){var e;let u=(0,c.I)(t,n);return e=function(t){let n=(0,o.mE)(),e=u((0,a.q)(t,n),n);return i(n.map,t.attribution),l(e.current,t.eventHandlers),s(e.current,n),e},(0,r.forwardRef)(function(t,n){let{instance:u}=e(t).current;return(0,r.useImperativeHandle)(n,()=>u),null})}},1469:function(t,n,e){"use strict";function r(t,n,e){let{opacity:r,zIndex:u}=n;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=u&&u!==e.zIndex&&t.setZIndex(u)}e.d(n,{I:function(){return r}})},1802:function(t,n,e){"use strict";function r(t,n){let e=t.pane??n.pane;return e?{...t,pane:e}:t}e.d(n,{q:function(){return r}})},6036:function(t,n,e){"use strict";e.d(n,{C:function(){return i}});var r=e(1512),u=e(7999),o=e(1410),c=e(5243);let i=(0,r.Au)(function({center:t,children:n,...e},r){let i=new c.Circle(t,e);return(0,u.O)(i,(0,o.sj)(r,{overlayContainer:i}))},function(t,n,e){n.center!==e.center&&t.setLatLng(n.center),null!=n.radius&&n.radius!==e.radius&&t.setRadius(n.radius)})},4867:function(t,n,e){"use strict";e.d(n,{Q:function(){return i}});var r=e(1512),u=e(7999),o=e(1410),c=e(5243);let i=(0,r.Au)(function({data:t,...n},e){let r=new c.GeoJSON(t,n);return(0,u.O)(r,(0,o.sj)(e,{overlayContainer:r}))},function(t,n,e){n.style!==e.style&&(null==n.style?t.resetStyle():t.setStyle(n.style))})},5715:function(t,n,e){"use strict";e.d(n,{h:function(){return i}});var r=e(1410),u=e(5243),o=e(7294);function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}let i=(0,o.forwardRef)(function({bounds:t,boundsOptions:n,center:e,children:i,className:l,id:a,placeholder:s,style:f,whenReady:d,zoom:h,...p},v){let[w]=(0,o.useState)({className:l,id:a,style:f}),[m,E]=(0,o.useState)(null);(0,o.useImperativeHandle)(v,()=>m?.map??null,[m]);let g=(0,o.useCallback)(o=>{if(null!==o&&null===m){let c=new u.Map(o,p);null!=e&&null!=h?c.setView(e,h):null!=t&&c.fitBounds(t,n),null!=d&&c.whenReady(d),E((0,r.Hb)(c))}},[]);(0,o.useEffect)(()=>()=>{m?.map.remove()},[m]);let y=m?o.createElement(r.UO,{value:m},i):s??null;return o.createElement("div",c({},w,{ref:g}),y)})},9153:function(t,n,e){"use strict";e.d(n,{Sx:function(){return o},zV:function(){return c}});var r=e(1410),u=e(7294);function o(){return(0,r.mE)().map}function c(t){let n=o();return(0,u.useEffect)(function(){return n.on(t),function(){n.off(t)}},[n,t]),n}}}]);