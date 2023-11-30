(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[109],{6118:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return i}});let o="refresh",u="navigate",l="restore",f="server-patch",a="prefetch",i="fast-refresh";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6850:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let r=n(8754),o=r._(n(7294)),u=n(961),l=n(4769),f=n(9567),a=n(4170),i=n(6982),c=n(6280),s=n(9810),d=n(1873),p=n(6850),h=n(854),b=n(6118),y=new Set;function v(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(y.has(u))return;y.add(u)}let f=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function _(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:f,as:y,children:g,prefetch:O=null,passHref:E,replace:C,shallow:m,scroll:P,locale:j,onClick:M,onMouseEnter:T,onTouchStart:R,legacyBehavior:k=!1,...A}=e;n=g,k&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let I=!1!==O,L=null===O?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,S=o.default.useContext(c.RouterContext),x=o.default.useContext(s.AppRouterContext),N=null!=S?S:x,w=!S,{href:U,as:K}=o.default.useMemo(()=>{if(!S){let e=_(f);return{href:e,as:y?_(y):e}}let[e,t]=(0,u.resolveHref)(S,f,!0);return{href:e,as:y?(0,u.resolveHref)(S,y):t||e}},[S,f,y]),F=o.default.useRef(U),H=o.default.useRef(K);k&&(r=o.default.Children.only(n));let D=k?r&&"object"==typeof r&&r.ref:t,[V,W,q]=(0,d.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(H.current!==K||F.current!==U)&&(q(),H.current=K,F.current=U),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[K,D,U,q,V]);o.default.useEffect(()=>{N&&W&&I&&v(N,U,K,{locale:j},{kind:L},w)},[K,U,W,j,I,null==S?void 0:S.locale,N,w,L]);let B={ref:z,onClick(e){k||"function"!=typeof M||M(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,u,f,a,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:f,locale:i,scroll:a}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};c?o.default.startTransition(h):h()}(e,N,U,K,C,m,P,j,w,I)},onMouseEnter(e){k||"function"!=typeof T||T(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(I||!w)&&v(N,U,K,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:L},w)},onTouchStart(e){k||"function"!=typeof R||R(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(I||!w)&&v(N,U,K,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:L},w)}};if((0,a.isAbsoluteUrl)(K))B.href=K;else if(!k||E||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,p.getDomainLocale)(K,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);B.href=t||(0,h.addBasePath)((0,i.addLocale)(K,e,null==S?void 0:S.defaultLocale))}return k?o.default.cloneElement(r,B):o.default.createElement("a",{...A,...B},n)}),O=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1873:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7294),o=n(8786),u="function"==typeof IntersectionObserver,l=new Map,f=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,i=a||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8109:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(1664),u=n.n(o);function l(e){let{href:t,ref:n,children:o,...l}=e;if(t&&(t.startsWith("/")||t.startsWith("#")))return n&&console.warn("Dropping anchor ref ".concat(n),{href:t,...l}),r.createElement(u(),{href:t,...l},o);{let{target:e="_blank",rel:u="noreferrer",...f}=l;return r.createElement("a",{href:t,target:e,rel:u,ref:n,...f},o)}}},1664:function(e,t,n){e.exports=n(239)}}]);