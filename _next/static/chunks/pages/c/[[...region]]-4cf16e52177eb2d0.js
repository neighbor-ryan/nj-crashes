(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{23604:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/c/[[...region]]",function(){return n(60594)}])},60594:function(e,t,n){"use strict";n.r(t),n.d(t,{DOTEnd:function(){return eL},DOTStart:function(){return ez},H2:function(){return eV},__N_SSG:function(){return eE},default:function(){return eB}});var c=n(11527),s=n(23007),l=n(41796),a=n(99701),o=n(50959),r=n(70633),i=n(4589),u=n.n(i),d=n(56164),h=n(41109),p=n.n(h),m=n(2936),f=n(92188),g=n(43721),x=n(2400),j=n(72842),_=n(8699),v=n(82875),y=n.n(v),b=n(32003),w=n(37564),N=n(5595);let S=[10,20,50],C=S[0],M=e=>"".concat(e,"-per-page"),I=e=>"".concat(e,"-page"),Z=e=>"".concat(e,"-before"),P=RegExp("(?<m>\\d\\d?)\\/(?<d>\\d\\d?)\\/(?<y>\\d\\d)"),k=RegExp("(?<y>\\d\\d\\d\\d)-(?<m>\\d\\d)-(?<d>\\d\\d)");function D(e){let{page:t,setPage:n,perPage:s,setPerPage:l,total:a}=e,r=(0,o.useMemo)(()=>Math.floor(a/s),[a,s]),[i,u]=(0,o.useState)((t+1).toString()),[d,h]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{u((t+1).toString()),h(!1)},[t]),(0,c.jsxs)("div",{className:p().tablePagination,children:[(0,c.jsxs)("label",{className:p().curPage,children:[t*s+1,"-",(0,j.VV)(a,(t+1)*s)," of ",a.toLocaleString()]}),(0,c.jsxs)("label",{className:p().pageNum,children:["Page:",(0,c.jsx)("input",{className:d?p().dirty:"",type:"number",value:i,onChange:e=>{let c=e.target.value||"";u(c);let s=parseInt(c)-1;if(!s&&0!==s||s<0||s>r){h(!0);return}s===t&&d&&h(!1),console.log("onPageChange:",e,s),n(s)}})]}),(0,c.jsxs)("label",{className:p().pageSize,children:["Page size:",(0,c.jsx)("select",{value:s,onChange:e=>{let c=parseInt(e.target.value);console.log("onRowsPerPageChange:",e,c),l(c),n((0,j.GW)(t*s/c))},children:S.map(e=>(0,c.jsx)("option",{children:e},e))})]}),(0,c.jsxs)("span",{className:p().pageCount,children:[(0,c.jsx)("button",{disabled:0===t,onClick:()=>{console.log("⇽: page 0"),n(0)},children:(0,c.jsx)(m.Z,{})}),(0,c.jsx)("button",{disabled:0===t,onClick:()=>{console.log("⇽: page ".concat(t-1)),n(t-1)},children:(0,c.jsx)(f.Z,{})}),(0,c.jsx)("button",{disabled:t===r,onClick:()=>{console.log("⇾: page ".concat(t+1)),n(t+1)},children:(0,c.jsx)(g.Z,{})}),(0,c.jsx)("button",{disabled:t===r,onClick:()=>{console.log("⇾: page ".concat(r)),n(r)},children:(0,c.jsx)(x.Z,{})})]})]})}let T="America/New_York";function E(e){let{cur:t,disabled:n,add:s,unit:l,Icon:a,setBefore:o,className:r}=e;return(0,c.jsx)(N.Z,{title:s?"Forward 1 ".concat(l):"Back 1 ".concat(l),children:(0,c.jsx)("span",{children:(0,c.jsx)("button",{disabled:n,onClick:()=>{let e=u().tz(t,T),n=(e=s?e.add(1,l):e.subtract(1,l)).format("YYYY-MM-DD");console.log("new date: ".concat(n)),o(n)},children:(0,c.jsx)(a,{className:"".concat(null!=r?r:""," ").concat(s?p().left:"")})})})})}function z(e){let{before:t,setBefore:n,start:s,end:l,perPage:a,setPerPage:r,total:i}=e;console.log("DatePagination: before",t,"end:",l);let[d,h]=(0,o.useState)(t),[f,x]=(0,o.useState)(!1),j=(0,o.useMemo)(()=>u().tz(t,T).format("M/D/YY"),[t]);(0,o.useEffect)(()=>{h(j),x(!1)},[t,j]);let _=(0,o.useMemo)(()=>t>=(null!=l?l:y()("%Y-%m-%d",new Date)),[t,l]);return(0,c.jsxs)("div",{className:p().tablePagination,children:[(0,c.jsxs)("label",{className:p().curPage,children:[i.toLocaleString()," total"]}),(0,c.jsxs)("label",{className:p().pageSize,children:["Page size:",(0,c.jsx)("select",{value:a,onChange:e=>{let t=parseInt(e.target.value);console.log("onRowsPerPageChange:",e,t),r(t)},children:S.map(e=>(0,c.jsx)("option",{children:e},e))})]}),(0,c.jsxs)("label",{className:p().beforeDate,children:["On or before:",(0,c.jsx)("input",{className:f?p().dirty:"",type:"text",value:d,onChange:e=>{let c=e.target.value||"";h(c);let s=c.match(P);if(!s){x(!0);return}let{y:a,m:o,d:r}=s.groups,i="20".concat(a,"-").concat(o.padStart(2,"0"),"-").concat(r.padStart(2,"0"));l&&i>l&&(i=l),c==t&&f&&x(!1),console.log('new "before" date:',i),n(i)}})]}),(0,c.jsxs)("span",{className:p().pageCount,children:[(0,c.jsx)(N.Z,{title:"Seek to end (".concat(l,")"),children:(0,c.jsx)("span",{children:(0,c.jsx)("button",{disabled:_,onClick:()=>{console.log("⇾: end",l),n(null!=l?l:y()("%Y-%m-%d",new Date))},children:(0,c.jsx)(m.Z,{})})})}),(0,c.jsx)(E,{cur:t,Icon:b.Z,add:!0,unit:"year",setBefore:n,disabled:_}),(0,c.jsx)(E,{cur:t,Icon:w.Z,add:!0,unit:"month",setBefore:n,className:p().reduce,disabled:_}),(0,c.jsx)(E,{cur:t,Icon:g.Z,add:!0,unit:"day",setBefore:n,disabled:_}),(0,c.jsx)(E,{cur:t,Icon:g.Z,add:!1,unit:"day",setBefore:n}),(0,c.jsx)(E,{cur:t,Icon:w.Z,add:!1,unit:"month",setBefore:n,className:p().reduce}),(0,c.jsx)(E,{cur:t,Icon:b.Z,add:!1,unit:"year",setBefore:n})]})]})}var L=n(68325);function V(e){let{maxBytesToRead:t=20971520,...n}=e;return L.id({maxBytesToRead:t,...n})}let B={"Serious Injuries":"If victim has a serious non-fatal injury which includes:\n• Severe laceration resulting in exposure of underlying tissues/muscle/organs or resulting in significant loss of blood\n• Broken or distorted extremity (arm or leg)\n• Crush injuries\n• Suspected skull, chest or abdominal injury other than bruises or minor lacerations\n• Significant burns (second and third degree burns over 10% or more of the body)\n• Unconsciousness when taken from the crash scene\n• Paralysis","Minor Injuries":"An evident injury, other than fatal and serious injuries. Examples include lump on the head, abrasions, bruises, minor lacerations (cuts on the skin surface with minimal bleeding and no exposure of deeper tissue/muscle).","Other Reported Injuries":"Reported injury that is not fatal, serious or minor. Examples include momentary loss of consciousness, claim of injury, limping, or complaint of pain or nausea. Possible injuries are those which are reported by the person or are indicated by his/her behavior, but no wounds or injuries are readily evident."},Y={k:0,fc:0,si:0,sic:0,mi:0,mic:0,pi:0,pic:0,ni:0,nic:0};function A(e){let t={...Y},n={};return e.forEach(e=>{let{y:c,condition:s,total:l,num_crashes:a}=e;c in n||(n[c]={...Y});let o=[null,"k","si","mi","pi","ni"][s];n[c][o]+=l,t[o]+=l;let r=[null,"fc","sic","mic","pic","nic"][s];n[c][r]+=a,t[r]+=a}),n.totals=t,n}var R=n(96665),F=n.n(R);function H(e){let{enterTouchDelay:t=0,leaveTouchDelay:n=3e3,enterNextDelay:s=0,offset:l=14,arrow:a=!0,...o}=e;return(0,c.jsx)(N.Z,{arrow:a,slotProps:{popper:{modifiers:[{name:"offset",options:{offset:[0,-l]}}]}},enterTouchDelay:t,leaveTouchDelay:n,enterNextDelay:s,...o})}function O(e){let{className:t,style:n,title:s}=e,l=(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"14 5 70 88",className:"".concat(F().icon," ").concat(F().driver," ").concat(null!=t?t:""),style:n,children:[s&&(0,c.jsx)("title",{children:s}),(0,c.jsxs)("g",{transform:"translate(0,12)",children:[(0,c.jsx)("path",{d:"M62.3,47.8c-11.7,0-21.1,9.5-21.1,21.1S50.7,90,62.3,90s21.1-9.5,21.1-21.1S74,47.8,62.3,47.8z M49.9,56.5   c3.3-3.3,7.7-5.2,12.4-5.2s9.1,1.8,12.4,5.2c1.1,1.1,2.1,2.4,2.9,3.8L68,64.7c-1.3-1.7-3.3-2.9-5.7-2.9c-2.3,0-4.4,1.1-5.7,2.9   L47,60.2C47.8,58.9,48.7,57.6,49.9,56.5z M59.4,86.2c-3.6-0.6-6.9-2.3-9.5-4.9c-3.3-3.3-5.2-7.7-5.2-12.4c0-1.1,0.1-2.2,0.3-3.2   l10.3,2.8c0,0.1,0,0.3,0,0.4c0,3.2,2.1,5.9,5.1,6.8L59.4,86.2z M58.8,68.9c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5   s-1.6,3.5-3.5,3.5C60.4,72.4,58.8,70.8,58.8,68.9z M74.8,81.3c-2.6,2.6-5.9,4.3-9.5,4.9l-0.9-10.6c2.9-0.9,5.1-3.6,5.1-6.8   c0-0.2,0-0.3,0-0.4l10.3-2.8c0.2,1,0.3,2.1,0.3,3.2C79.9,73.6,78.1,78,74.8,81.3z"}),(0,c.jsx)("circle",{cx:"41.2",cy:"24.4",r:"14.4"}),(0,c.jsx)("path",{d:"M61.9,46.4c-2.4-3.9-5.8-7.1-9.8-9.1c-2.9,2.5-6.7,4-10.8,4c-4.1,0-7.9-1.5-10.8-3.9c-7.9,4.1-13.4,12.3-13.8,22   c0,0,0,8.1,0,8.2c0,3.3,10.6,6,23.7,6.1c-0.3-1.5-0.5-3.1-0.5-4.7C39.8,56.6,49.7,46.6,61.9,46.4z"})]})]});return s?(0,c.jsx)(H,{title:s,children:l}):l}function U(e){let{className:t,style:n,title:s}=e,l=(0,c.jsx)("svg",{viewBox:"3 0 25 30",className:"".concat(F().icon," ").concat(F().passenger," ").concat(null!=t?t:""),style:n,children:(0,c.jsxs)("g",{transform:"translate(15.5 14)",children:[(0,c.jsxs)("g",{transform:"translate(-18 -15)",children:[(0,c.jsx)("circle",{cx:"17.94653",cy:"7.35815",r:"5.35815"}),(0,c.jsx)("path",{d:"M7.8689,20.46265V28.469A1.53531,1.53531,0,0,0,9.39966,30h14.3291L10.3335,16.58936A4.26837,4.26837,0,0,0,7.8689,20.46265Z M28.01538,28.469V20.46265A4.27642,4.27642,0,0,0,23.72876,16.176H14.2373L27.60205,29.52539A1.5925,1.5925,0,0,0,28.01538,28.469Z"})]}),(0,c.jsxs)("g",{transform:"scale(-1 1),translate(-18 -15)",children:[(0,c.jsx)("circle",{cx:"17.94653",cy:"7.35815",r:"5.35815"}),(0,c.jsx)("path",{d:"M7.8689,20.46265V28.469A1.53531,1.53531,0,0,0,9.39966,30h14.3291L10.3335,16.58936A4.26837,4.26837,0,0,0,7.8689,20.46265Z M28.01538,28.469V20.46265A4.27642,4.27642,0,0,0,23.72876,16.176H14.2373L27.60205,29.52539A1.5925,1.5925,0,0,0,28.01538,28.469Z"})]})]})});return s?(0,c.jsx)(H,{title:s,children:l}):l}function W(e){let{className:t,style:n,title:s}=e,l=(0,c.jsxs)("svg",{viewBox:"5.5 0 25 30",className:"".concat(F().icon," ").concat(F().passenger," ").concat(null!=t?t:""),style:n,children:[(0,c.jsx)("circle",{cx:"17.94653",cy:"7.35815",r:"5.35815"}),(0,c.jsx)("path",{d:"M7.8689,20.46265V28.469A1.53531,1.53531,0,0,0,9.39966,30h14.3291L10.3335,16.58936A4.26837,4.26837,0,0,0,7.8689,20.46265Z"}),(0,c.jsx)("path",{d:"M28.01538,28.469V20.46265A4.27642,4.27642,0,0,0,23.72876,16.176H14.2373L27.60205,29.52539A1.5925,1.5925,0,0,0,28.01538,28.469Z"})]});return s?(0,c.jsx)(H,{title:s,children:l}):l}function q(e){let{className:t,style:n,title:s}=e,l=(0,c.jsx)("svg",{viewBox:"15 0 70 100",className:"".concat(F().icon," ").concat(F().pedestrian," ").concat(null!=t?t:""),style:n,children:(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{d:"M63.3,68.2l-7,11.2l5.4,14.7c0.8,2.1,2.8,3.4,4.9,3.4c0.6,0,1.2-0.1,1.8-0.3c2.7-1,4.1-4,3.1-6.7L63.3,68.2z"}),(0,c.jsx)("path",{d:"M78.9,42.4l-5.8-8.5c-1.6-2.3-3.9-4.1-6.5-5.1c-10.6-4.1-12-4-13-4l-7.5,0.5c-2.1,0.1-3.7,0.7-11.6,10.7     c-0.7,0.9-1.7,1.5-2.9,1.8l-7.8,1.7c-2.5,0.5-4,2.9-3.5,5.4c0.5,2.5,3,4,5.4,3.5l7.8-1.7c3.2-0.7,6-2.5,8.1-5     c0.3-0.4,0.6-0.8,0.9-1.1l7.2,21L32.3,89.5c-1.5,2.5-0.8,5.7,1.7,7.2c0.9,0.5,1.8,0.8,2.8,0.8c1.8,0,3.5-0.9,4.4-2.5l21.6-34.7     c2.2-3.5,2.8-7.9,1.7-11.9l-3.5-12c0.7,0.3,1.5,0.6,2.4,0.9c0.9,0.4,1.7,1,2.3,1.8l5.8,8.5c0.9,1.3,2.3,2,3.7,2     c0.9,0,1.8-0.3,2.6-0.8C79.8,47.3,80.4,44.5,78.9,42.4z"}),(0,c.jsx)("ellipse",{transform:"matrix(0.9941 -0.1082 0.1082 0.9941 -1.0767 5.3193)",cx:"48.5",cy:"12.6",rx:"10.1",ry:"10.1"})]})});return s?(0,c.jsx)(H,{title:s,children:l}):l}function G(e){let{className:t,style:n,title:s}=e,l=(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"".concat(F().icon," ").concat(F().cyclist," ").concat(null!=t?t:""),style:n,viewBox:"5 0 90 100",children:(0,c.jsxs)("g",{transform:"translate(0, 5)",children:[(0,c.jsx)("path",{d:"M45,81.9c-0.6-1-0.9-2-0.9-3.2h-4.3c-0.6-4.1-2.6-7.6-5.6-10.2l3.5-5.4l6.9,13c0.5-2.4,1-4.8,1.5-7l-4.5-8.5h5.7 c-2.7-1.2-8.6-3.1-13.2-4.3l1.2,2.2l-4.8,7.6c-2.1-1-4.4-1.5-6.8-1.5c-9.1,0-16.4,7.4-16.4,16.4c0,9.1,7.4,16.4,16.4,16.4 c8.3,0,15.2-6.2,16.3-14.2h6.4C45.7,83,45.3,82.5,45,81.9z M23.5,92.9c-6.5,0-11.9-5.3-11.9-11.9c0-6.5,5.3-11.9,11.9-11.9 c1.5,0,3,0.3,4.3,0.8l-6.3,9.8c-0.4,0.7-0.5,1.6-0.1,2.3c0.4,0.7,1.2,1.2,2,1.2h11.6C34.1,88.8,29.3,92.9,23.5,92.9z M27.7,78.8 l4-6.3c1.7,1.7,3,3.8,3.4,6.3H27.7z"}),(0,c.jsx)("path",{d:"M76.5,64.6c-1.6,0-3.1,0.2-4.6,0.7l-9.3-20.7c-0.4-0.8-1.2-1.3-2.1-1.3h-2.1c-0.4-0.6-1-1-1.7-1.2 c-4.1-1.1-8.3-2.8-9.4-3.6c-0.9-1.7-3-5.6-4.8-9.1c0.5-3.4,0-8.2-5.7-9c-5.6-0.7-6.6,1.9-8.8,8.3c-2.1,6.1-2.5,15.8-0.9,21.5 c0.5,1.7,1.4,3.3,2.5,3.4c4.3,0.4,16.9,4.3,19.8,6c0,2.9-1.5,11.4-3.2,18.4c-0.5,2.1,0.8,4.2,2.9,4.7c0.5,0.1,1,0.1,1.5,0.1 c1.5-0.2,2.8-1.4,3.2-3c4.8-20.5,3.2-23.1,2.4-24.3c-1.8-2.8-8.4-5.3-14.2-7c-0.1-1.8-0.2-4.4-0.2-7c0,0.1,0.1,0.2,0.1,0.2 c0.4,0.8,1.7,3.1,13,6.3c0.3,0.1,0.6,0.1,0.8,0.1c0.5,0,0.9-0.1,1.4-0.3H59l3.7,8.3h-4.3c0.3,0.9,0.5,2.3,0.4,4.6h2.5l-2.9,4.1 c-0.3,2.7-0.9,6.2-1.9,10.7l9.1-13l2.1,4.6c-4.6,2.9-7.7,8-7.7,13.9c0,9.1,7.4,16.4,16.4,16.4s16.4-7.4,16.4-16.4 C92.9,72,85.5,64.6,76.5,64.6z M76.5,92.9c-6.5,0-11.9-5.3-11.9-11.9c0-4,2-7.5,5-9.7L74.4,82c0.4,0.8,1.2,1.3,2.1,1.3 c0.3,0,0.6-0.1,0.9-0.2c1.2-0.5,1.7-1.9,1.1-3l-4.8-10.6c0.9-0.2,1.8-0.3,2.7-0.3c6.5,0,11.9,5.3,11.9,11.9 C88.3,87.6,83,92.9,76.5,92.9z"}),(0,c.jsx)("ellipse",{transform:"matrix(1.676928e-02 -0.9999 0.9999 1.676928e-02 27.2283 48.9794)",cx:"38.5",cy:"10.6",rx:"8.1",ry:"8.1"})]})});return s?(0,c.jsx)(H,{title:s,children:l}):l}function Q(e){let{className:t,style:n,title:s}=e,l=(0,c.jsx)("svg",{viewBox:"0 0 56 68",className:"".concat(F().icon," ").concat(F().car," ").concat(null!=t?t:""),style:n,children:(0,c.jsxs)("g",{transform:"scale(1, 1.4),translate(0,-3)",children:[(0,c.jsx)("path",{d:"M47.1708984,47.4214478c2.4556885,0,4.5087891-1.7954102,4.887207-4.1463623,.0482178-.265686,.0725098-.5313721,.0725098-.8051147s-.024292-.5394287-.0725098-.8051147c-.378418-2.3509521-2.4315186-4.1463623-4.887207-4.1463623-2.4555664,0-4.5004883,1.7954102-4.8789062,4.1463623v.0080566c-.0483398,.2576294-.0725098,.5233154-.0725098,.7970581s.0241699,.5394287,.0725098,.8051147v.0080566c.3864746,2.3428955,2.4233398,4.1383057,4.8789062,4.1383057Z"}),(0,c.jsx)("path",{d:"M16.5200195,37.5184937c-2.4556885,0-4.5007324,1.7954102-4.8790283,4.1463623-.0482178,.265686-.0725098,.5313721-.0725098,.8051147s.024292,.5394287,.0725098,.8051147c.3782959,2.3509521,2.4233398,4.1463623,4.8790283,4.1463623,2.4555664,0,4.4925537-1.7954102,4.8790283-4.1383057v-.0080566c.0482178-.265686,.0723877-.5313721,.0723877-.8051147s-.0241699-.5394287-.0723877-.7970581v-.0080566c-.378418-2.3509521-2.4234619-4.1463623-4.8790283-4.1463623Z"}),(0,c.jsx)("path",{d:"M59.6799316,28.4599609l-11.5998535-2.0699463c-.2000732-.0300293-.380127-.1500244-.5-.3300171l-6.3100586-9.2700195c-.6000977-.8800049-1.6101074-1.4099731-2.6799316-1.4099731H16.1400146c-1.2000732,0-2.2999268,.6499634-2.8599854,1.6999512l-5.1101074,9.460022c-.1098633,.1900024-.2799072,.3400269-.4799805,.3900146l-3.7099609,1.1400146c-1.1699219,.3599854-1.9799805,1.4599609-1.9799805,2.6799927v9.9199829c0,1.539978,1.2600098,2.7999878,2.8000488,2.7999878h5c-.0600586-.3299561-.0800781-.6599731-.0800781-1,0-.3399658,.0200195-.6699829,.0800781-1,.0100098-.039978,.0100098-.0700073,.0200195-.1099854,.5200195-3.2199707,3.3299561-5.6900024,6.6999512-5.6900024s6.1799316,2.4700317,6.6999512,5.6900024v.0200195c.0100098,.0299683,.0100098,.0599976,.0100098,.0899658l.0100098,.0100098c.0600586,.3200073,.0800781,.6500244,.0800781,.9899902,0,.3400269-.0200195,.6700439-.0800781,1l-.0100098,.0100098h17.2299805l-.0100098-.0100098c-.0599365-.3299561-.0799561-.6599731-.0799561-1,0-.3399658,.0200195-.6699829,.0799561-.9899902l.0100098-.0100098c0-.0299683,0-.0700073,.0100098-.0999756v-.0100098c.5200195-3.2299805,3.3300781-5.6900024,6.6999512-5.6900024,3.3701172,0,6.1900635,2.460022,6.710083,5.6900024,.0100098,.039978,.0100098,.0700073,.0200195,.1099854,.0599365,.3300171,.0799561,.6600342,.0799561,1,0,.3400269-.0200195,.6700439-.0799561,1h5.2999268c1.5400391,0,2.8000488-1.2600098,2.8000488-2.7999878v-9.460022c0-1.3599854-.9799805-2.5199585-2.3200684-2.75Zm-30.289917,2.1500244h1.6099854c.5500488,0,1,.4500122,1,1s-.4499512,1-1,1h-1.6099854c-.5499268,0-1-.4500122-1-1s.4500732-1,1-1Zm-16.6700439-2.4500122l4.5900879-8.5h8.8598633v8.5H12.7199707Zm16.6700439,0v-8.5h8.1700439l5.6799316,8.3599854c.0300293,.0500488,.0700684,.1000366,.0900879,.1400146h-13.9400635Z"})]})});return s?(0,c.jsx)(H,{title:s,children:l}):l}var X=n(62297),J=n.n(X),K=n(27149),$=n(19622),ee=n(98616),et=n.n(ee);function en(e){let{cc:t,mc:n,cc2mc2mn:s}=e,{cn:l,mc2mn:a}=s[t],o=a[n],r=(0,$.F)(o);return(0,c.jsx)(et(),{href:"/c/".concat((0,$.F)(l),"/").concat(r),children:o})}function ec(e){let{cc:t,cc2mc2mn:n}=e;if(!n)throw Error("`cc2mc2mn` is required for `mc` col");let{cn:s}=n[t];return(0,c.jsx)(et(),{href:"/c/".concat((0,$.F)(s)),children:s})}let es={id:"ID",dt:"Date/Time",cc:"County",mc:"Municipality",casualties:"Casualties",road:"Road",cross_street:"Cross Street",mp:"MP",ll:"Lat, Lon"},el="#777",ea="#d00",eo=[{title:"Vehicle damage unknown",fill:el},{title:"Vehicle undamaged",fill:"green"},{title:"Vehicle sustained minor damage",fill:"orange"},{title:"Vehicle sustained moderate damage",fill:ea},{title:"Vehicle disabled",fill:"black"}],er=[{txt:"condition unknown",fill:el},{txt:"deceased",fill:"black"},{txt:"serious injury",fill:ea},{txt:"moderate injury",fill:"orange"},{txt:"possible injury",fill:"#8B8000"}];function ei(e){let{occupants:t,pedestrians:n,vehicles:s}=e,l=[],a=[],o=[],r=[],i=[[],l,a,o,r];return null==t||t.forEach((e,t)=>{let{pos:n,condition:s,eject:l,age:a,sex:o,inj_loc:r,inj_type:u}=e;s=null!=s?s:0;let d="";switch(l){case 2:d="partially ejected";break;case 3:d="ejected";break;case 4:d="trapped"}let[h,p]=1===n?["Driver",O]:["Passenger",W],{txt:m,fill:f}=er[s],g="".concat(null!=a?a:"").concat("M"===o||"F"===o?o:""),x="".concat(h).concat(g?", ".concat(g,","):""," ").concat(m).concat(d?", ".concat(d):""),j=(0,c.jsx)(p,{title:x,style:{fill:f}},t);i[s].push(j)}),null==n||n.forEach((e,t)=>{let{condition:n,age:s,sex:l,inj_loc:a,inj_type:o,cyclist:r}=e,[u,d]=r?["Cyclist",G]:["Pedestrian",q],{txt:h,fill:p}=er[n=null!=n?n:0],m="".concat(null!=s?s:"").concat("M"===l||"F"===l?l:""),f="".concat(u).concat(m?", ".concat(m,","):""," ").concat(h),g=(0,c.jsx)(d,{title:f,style:{fill:p}},t);i[n].push(g)}),(0,c.jsxs)("div",{className:J().icons,children:[l.length?(0,c.jsx)("span",{className:J().typeIcons,children:l}):null,a.length?(0,c.jsx)("span",{className:J().typeIcons,children:a}):null,o.length?(0,c.jsx)("span",{className:J().typeIcons,children:o}):null,r.length?(0,c.jsx)("span",{className:J().typeIcons,children:r}):null,(null==s?void 0:s.length)?(0,c.jsx)("span",{className:J().typeIcons,children:s.map((e,t)=>{let{damage:n,damage_loc:s,impact_loc:l,departure:a}=e,o=4===(n=null!=n?n:0)||3===a||5===a;o&&(n=4);let r=a>=3,i=4===a||5===a,{title:u}=eo[n],{fill:d}=eo[o||r||i?4:n];return 1===a&&(u+=", driven away"),2===a&&(u+=", left at scene"),r&&(u+=", towed"),i&&(u+=", impounded"),(0,c.jsx)(Q,{style:{fill:d},title:u},t)})}):null]})}var eu=n(37292);let ed={id:"ID",dt:"Date/Time",cc:"County",mc:"Municipality",casualties:"Casualties",location:"Location",street:"Street",highway:"Highway"};function eh(e){let{tk:t,dk:n,ok:s,pk:l,bk:a,ti:o}=e,r=er[0].fill;return(0,c.jsx)("div",{className:J().icons,children:(0,c.jsxs)("span",{className:J().typeIcons,children:[(0,eu.w6)(n).map(e=>(0,c.jsx)(O,{title:"Driver killed"},e)),(0,eu.w6)(s).map(e=>(0,c.jsx)(W,{title:"Passenger killed"},e)),(0,eu.w6)(l).map(e=>(0,c.jsx)(q,{title:"Pedestrian killed"},e)),(0,eu.w6)(a).map(e=>(0,c.jsx)(G,{title:"Cyclist killed"},e)),(0,eu.w6)(t-n-s-l-a).map(e=>(0,c.jsx)(U,{title:"Person killed"},e)),(0,eu.w6)(o).map(e=>(0,c.jsx)(U,{title:"Person injured",style:{fill:r}},e))]})})}var ep=n(69011),em=n(60641),ef=n.n(em),eg=n(40873),ex=n.n(eg),ej=n(42977);function e_(e){let{city:t,setCity:n,cities:s}=e,l=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(l.current){let{fontSize:e,fontWeight:n,fontFamily:c}=window.getComputedStyle(l.current),s="".concat(n," ").concat(e," ").concat(c);console.log("CitySelect font:",s,t);let a=(0,ej.mY)(t,s);console.log("CitySelect setting width:",a),l.current.style.width="".concat(a+30,"px")}},[t]),(0,c.jsx)("select",{className:ex().countySelect,ref:l,value:t,onChange:e=>{n(e.target.value)},children:s.map(e=>(0,c.jsx)("option",{value:e,children:e},e))})}var ev=n(4555),ey=n(58510),eb=n.n(ey),ew=n(95611),eN=n(1341),eS=n(78921),eC=n(95644),eM=n(94607),eI=n(13728),eZ=n(70817),eP=n(65142);function ek(e){var t;let{rows:n,colTitles:l,className:a,pagination:o}=e;return(0,c.jsx)(ew.Z,{component:eN.Z,style:{boxShadow:"none"},className:"".concat(eb().rowsTable," ").concat(a||""),children:(0,c.jsxs)(eS.Z,{stickyHeader:!0,sx:{minWidth:450},size:"small","aria-label":"simple table",children:[(0,c.jsx)(eC.Z,{className:eb().tableHead,children:(0,c.jsx)(eM.Z,{children:(0,s.XP)(null!==(t=n[0])&&void 0!==t?t:{}).map(e=>"key"!==e&&(0,c.jsx)(H,{title:null==l?void 0:l[e],arrow:!0,children:(0,c.jsx)(eI.Z,{align:"right",className:eb().noselect,children:e})},e))})}),(0,c.jsx)(eZ.Z,{children:n.map(e=>{let{key:t}=e;return(0,c.jsx)(eM.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:(0,s._I)(e,(e,t)=>"key"!==e&&(0,c.jsx)(eI.Z,{align:"right",children:t},e))},t)})}),o&&(0,c.jsx)(eP.Z,{children:(0,c.jsx)(eM.Z,{children:(0,c.jsx)("td",{colSpan:6,children:"before"in o?(0,c.jsx)(z,{...o}):(0,c.jsx)(D,{...o})})})})]})})}function eD(e){let{result:t,colTitles:n,className:s,pagination:l}=e;return(0,d.g_)(e=>(0,c.jsxs)("div",{className:eb().sqlError,children:[(0,c.jsx)("h2",{children:"Error"}),(0,c.jsx)("pre",{children:e.message})]}),e=>(0,c.jsx)(ek,{rows:e,className:s,colTitles:n,pagination:l}))(t)}var eT=n(73339),eE=!0;let ez="2001-01-01",eL="2021-12-31";function eV(e){let{id:t,children:n}=e;return(0,c.jsxs)("h2",{children:[(0,c.jsx)("span",{id:t,className:ef().idTarget}),(0,c.jsx)(K.Z,{href:"#".concat(t),children:n})]})}function eB(e){let{urls:t,barProps:n,cp:i,Counties:h,...p}=e,[m,f]=(0,o.useState)(65536),{cc:g,mc:x,cn:j,mn:v,mc2mn:b,cc2mc2mn:w,setCounty:N,setCity:S}=(0,r.Z)({...p,urlPrefix:"/c"}),P=function(e,t){var n,c;let{start:s,end:l}=t,{id:a}=e,[r,i]=(0,_.Z)(M(a),{defaultValue:null!==(n=e.perPage)&&void 0!==n?n:C}),[u,d]=(0,_.Z)(Z(a),{defaultValue:null!==(c=null!=l?l:e.before)&&void 0!==c?c:y()("%Y-%m-%d",new Date),serializer:{parse:e=>e.match(k)?e:(console.warn("useDatePaginationControls: invalid date",e),null!=l?l:y()("%Y-%m-%d",new Date)),stringify:e=>e.match(k)?e:(console.warn("useDatePaginationControls: invalid date",e),null!=l?l:y()("%Y-%m-%d",new Date))}}),h=(0,o.useMemo)(()=>null!=l?l:y()("%Y-%m-%d",new Date),[l]);return{perPage:r,setPerPage:i,before:u,setBefore:(0,o.useCallback)(e=>{console.log("setBefore:",e),e.match(k)?e>h?d(h):d(e):console.warn("setBefore: invalid date",e)},[d,h]),start:s,end:l}}({id:"njdot-crashes"},{start:ez,end:eL}),D=function(e){let{cc:t,mc:n,timerId:c="year-stats",...s}=e,l=V({query:(0,o.useMemo)(()=>{let e=t?"where cc=".concat(t).concat(n?" and mc=".concat(n):""):"",c=(t?"c":"")+(n?"m":"")+"yc";return"\n                select y, condition,\n                drivers + passengers + pedestrians + cyclists as total,\n                num_crashes as num_crashes\n                from ".concat(c,"\n                ").concat(e,"\n                order by y desc, condition asc\n            ")},[t,n]),timerId:c,...s});return l?(0,d.UI)(A)(l):null}({url:t.dot.cmymc,cc:g,mc:x,requestChunkSize:m}),T=function(e){let{cc2mc2mn:t,...n}=e,l=function(e){let{cc:t,mc:n,before:c,perPage:s,timerId:l="njdot-crashes",urls:a,...r}=e,i=["i","f"],d=(0,o.useMemo)(()=>{let e=i.map(e=>"severity='".concat(e,"'")).join(" or "),l=t?"cc=".concat(t).concat(n?" and mc=".concat(n):""," and "):"",a=u().tz(c,"America/New_York").add(1,"day").format("YYYY-MM-DD");return"\n                select * from crashes\n                where ".concat(e?"(".concat(e,") and "):"").concat(l).concat("dt<='".concat(a,"'"),"\n                order by dt desc\n                limit ").concat(s,"\n            ")},[c,s,i,t,n]);return V({...r,url:a.dot.crashes,timerId:l,query:d})}({...n}),a=function(e){let{crashesResult:t,urls:n,...c}=e,[s,l]=(0,o.useState)(null),a=(0,L.tI)({url:n.dot.occupants,timerId:"occupants",...c});return(0,o.useEffect)(()=>{t&&(console.log("occupants effect"),(0,d.UI)(e=>{var t;let n=e.map(e=>{let{id:t}=e;return t}),c="\n                        select crash_id, pos, condition, eject, age, sex, inj_loc, inj_type\n                        from occupants\n                        where crash_id in (".concat(n.join(", "),") and condition >= 1 and condition < 5\n                        order by crash_id, condition, pos\n                    ");console.log("Fetching occupants"),null===(t=a(c))||void 0===t||t.then(e=>{(0,d.g_)(e=>(console.error("error fetching occupants:",e),null),e=>{console.log("crashOccupants:",e);let t={};for(let n of e){let{crash_id:e}=n;t[e]||(t[e]=[]),t[e].push(n)}l(t)})(e)})})(t))},[t,a]),s}({crashesResult:l,...n}),r=function(e){let{crashesResult:t,urls:n,...c}=e,[s,l]=(0,o.useState)(null),a=(0,L.tI)({url:n.dot.pedestrians,timerId:"pedestrians",...c});return(0,o.useEffect)(()=>{t&&(console.log("pedestrian effect"),(0,d.UI)(e=>{var t;let n=e.map(e=>{let{id:t}=e;return t}),c="\n                        select crash_id, condition, age, sex, inj_loc, inj_type, cyclist\n                        from pedestrians\n                        where crash_id in (".concat(n.join(", "),") and condition >= 1 and condition < 5\n                        order by crash_id, condition, cyclist\n                    ");console.log("Fetching pedestrians"),null===(t=a(c))||void 0===t||t.then(e=>{(0,d.g_)(e=>(console.error("error fetching pedestrians:",e),null),e=>{console.log("crashPedestrians:",e);let t={};for(let n of e){let{crash_id:e}=n;t[e]||(t[e]=[]),t[e].push(n)}l(t)})(e)})})(t))},[t,a]),s}({crashesResult:l,...n}),i=function(e){let{crashesResult:t,urls:n,...c}=e,[s,l]=(0,o.useState)(null),a=(0,L.tI)({url:n.dot.vehicles,timerId:"vehicles",...c});return(0,o.useEffect)(()=>{t&&(console.log("vehicles effect"),(0,d.UI)(e=>{var t;let n=e.map(e=>{let{id:t}=e;return t}),c="\n                        select\n                            crash_id,\n                            damage,\n                            damage_loc,\n                            impact_loc,\n                            departure,\n                            type\n                        from vehicles v\n                        where crash_id in (".concat(n.join(", "),")\n                    ");console.log("Fetching vehicles"),null===(t=a(c))||void 0===t||t.then(e=>{(0,d.g_)(e=>(console.error("error fetching vehicles:",e),null),e=>{console.log("crashVehicles:",e);let t={};for(let n of e){let{crash_id:e}=n;t[e]||(t[e]=[]),t[e].push(n)}l(t)})(e)})})(t))},[t,a]),s}({crashesResult:l,...n}),h=["dt",...n.cc?[]:["cc"],...n.mc?[]:["mc"],"casualties","road","cross_street","mp"];return(0,o.useMemo)(()=>{if(l)return console.log("crashRows effect"),(0,d.UI)(e=>(function(e){let{rows:t,cols:n,cc2mc2mn:l,crashOccupants:a,crashPedestrians:o,crashVehicles:r}=e;return t.map(e=>{let{id:t}=e,i=null==a?void 0:a[t],u=null==o?void 0:o[t],d=null==r?void 0:r[t];return(0,s.sq)([["key",t],...n.map(n=>{let s="";if("dt"==n)s=(0,c.jsx)(H,{title:"Crash ID: ".concat(t),children:(0,c.jsx)("span",{children:y()("%-m/%-d/%y %-I:%M%p",new Date(e.dt))})});else if("ll"==n){let{ilat:t,ilon:n,olat:c,olon:l}=e,[a,o]=t&&n?[t,n]:[c,l];s=a&&o?"".concat(null==a?void 0:a.toFixed(6),", ").concat(null==o?void 0:o.toFixed(6)):""}else if("road"==n){let{road:t,sri:n}=e;s=(0,c.jsx)(H,{title:n?"SRI ".concat(n):void 0,children:(0,c.jsx)("span",{children:t})})}else if("casualties"==n)s=(0,c.jsx)(ei,{occupants:i,pedestrians:u,vehicles:d});else if("cc"==n)s=(0,c.jsx)(ec,{cc:e.cc,cc2mc2mn:l});else if("mc"==n)s=(0,c.jsx)(en,{...e,cc2mc2mn:l});else if("mp"==n){let{mp:t,ilat:n,ilon:l}=e;if(t&&(s=t.toFixed(2),n&&l)){let e=function(e){let{lat:t,lon:n}=e;return"https://www.google.com/maps/?q=".concat(t,",").concat(n)}({lat:n,lon:l});s=(0,c.jsx)(K.Z,{href:e,children:s})}}else{var a;s=null!==(a=e[n])&&void 0!==a?a:""}return[es[n],s]})])})})({rows:e,cols:h,cc2mc2mn:t,crashOccupants:a,crashPedestrians:r,crashVehicles:i}))(l)},[l,h,a])}({urls:t,cc:g,cn:j,mc:x,cc2mc2mn:w,...P,requestChunkSize:m}),E=function(e,t,n){let{before:c,setBefore:s,start:l,end:a,perPage:r,setPerPage:i}=n,u=(0,o.useMemo)(()=>e?(0,d.g_)(()=>null,t)(e):null,[e]);return(0,o.useMemo)(()=>null===u?void 0:{before:c,setBefore:s,start:l,end:a,perPage:r,setPerPage:i,total:u},[c,s,l,a,r,i,u])}(D,e=>{let{fc:t,sic:n,mic:c,pic:s}=e.totals;return t+n+c+s},P),z=function(e){var t,n;let{id:c}=e,[s,l]=(0,_.Z)(M(c),{defaultValue:null!==(t=e.perPage)&&void 0!==t?t:C}),[a,o]=(0,_.Z)(I(c),{defaultValue:null!==(n=e.page)&&void 0!==n?n:0});return{perPage:s,setPerPage:l,page:a,setPage:o}}({id:"njsp-crashes"}),Y=function(e){let{cc2mc2mn:t,...n}=e,l=function(e){let{cc:t,mc:n,page:c,perPage:s,timerId:l="njsp-crashes",urls:a,...r}=e,i=(0,o.useMemo)(()=>{let e=t?"where cc=".concat(t).concat(n?" and mc=".concat(n):""):"",l=c*s;return"\n                select * from crashes\n                ".concat(e,"\n                order by dt desc\n                limit ").concat(s," offset ").concat(l,"\n            ")},[t,n,c,s]);return V({...r,url:a.njsp.crashes,timerId:l,query:i})}({...n}),a=["dt",...n.cc?[]:["cc"],...n.mc?[]:["mc"],"casualties","location"];return(0,o.useMemo)(()=>{if(l)return console.log("useNjspCrashRows effect"),(0,d.UI)(e=>(function(e){let{rows:t,cols:n,cc2mc2mn:l}=e;return t.map(e=>{let{id:t}=e;return(0,s.sq)([["key",t],...n.map(n=>{let s="";if("dt"==n)s=(0,c.jsx)(H,{title:"NJSP ACCID: ".concat(t),children:(0,c.jsx)("span",{children:y()("%-m/%-d/%y %-I:%M%p",new Date(e.dt))})});else if("casualties"==n)s=(0,c.jsx)(eh,{...e});else if("cc"==n)s=(0,c.jsx)(ec,{cc:e.cc,cc2mc2mn:l});else if("mc"==n)s=(0,c.jsx)(en,{...e,cc2mc2mn:l});else{var a;s=null!==(a=e[n])&&void 0!==a?a:""}return[ed[n],s]})])})})({rows:e,cols:a,cc2mc2mn:t}))(l)},[l,a])}({urls:t,cc:g,cn:j,mc:x,cc2mc2mn:w,...z}),R=function(e,t,n){let{page:c,setPage:s,perPage:l,setPerPage:a}=n,r=(0,o.useMemo)(()=>e?(0,d.g_)(()=>null,t)(e):null,[e]);return(0,o.useMemo)(()=>null===r?void 0:{page:c,setPage:s,perPage:l,setPerPage:a,total:r},[c,s,l,a,r])}(function(e){let{cc:t,mc:n,timerId:c="njsp-crashes-total",urls:s,...l}=e,a=(0,o.useMemo)(()=>{let e=t?"where cc=".concat(t).concat(n?" and mc=".concat(n):""):"";return"\n                select count(*) as total from crashes\n                ".concat(e,"\n            ")},[t,n]);return V({...l,url:s.njsp.crashes,timerId:c,query:a})}({urls:t,cc:g,mc:x,requestChunkSize:m}),e=>(0,ep.Z)(e).total,z),F=(null!=v?v:j)?"".concat(v," County"):"New Jersey",O=v&&(0,c.jsxs)("span",{children:["(",(0,c.jsxs)(K.Z,{href:"/c/".concat(i),children:[j," County"]}),")"]});return(0,c.jsx)("div",{className:ef().body,children:(0,c.jsxs)("div",{className:ef().container,children:[(0,c.jsx)("h1",{className:ef().title,children:S&&x&&b?(0,c.jsx)(e_,{city:b[x],setCity:S,cities:(0,s.VO)(b)}):N?(0,c.jsx)(ej.RY,{county:null!=j?j:null,setCounty:N,Counties:h}):F}),O&&(0,c.jsx)("div",{className:ef().subtitle,children:O}),n?(0,c.jsx)("div",{className:ef().njspPlot,children:(0,c.jsx)(a.l_,{...n,county:null!=j?j:null,Heading:"h1",heading:(0,c.jsx)(eV,{id:"by-type",children:"Car crash deaths"}),spec:ev.xW})}):null,Y&&(0,c.jsxs)("div",{className:ef().section,children:[(0,c.jsx)(eV,{id:"recent",children:"Recent fatal crashes"}),(0,c.jsx)("div",{className:ef().sectionSubtitle,children:"2008 – present"}),(0,c.jsx)(eD,{className:ef().crashesTable,result:Y,pagination:R}),(0,c.jsxs)("div",{className:ef().footer,children:["Source: ",(0,c.jsx)(K.Z,{href:l.jy,children:"NJ State Police"})," (fatal crashes only; typically published between a day and a few months after the fact)"]})]}),T&&(0,c.jsxs)("div",{className:ef().section,children:[(0,c.jsx)(eV,{id:"dot",children:"Fatal / Injury crash details"}),(0,c.jsx)("div",{className:ef().sectionSubtitle,children:"2001-2021"}),(0,c.jsx)(eD,{className:ef().crashesTable,result:T,pagination:E}),(0,c.jsxs)("div",{className:ef().footer,children:["Source: ",(0,c.jsx)(K.Z,{href:l.Iv,children:"NJ DOT"})," (includes non-fatal crashes; most recent data: 2021)"]})]}),D&&(0,c.jsxs)("div",{className:ef().section,children:[(0,c.jsx)(eV,{id:"stats",children:"Annual stats"}),(0,c.jsx)("div",{className:ef().sectionSubtitle,children:"2001-2021"}),(0,c.jsx)(eD,{className:"".concat(ef().crashesTable," ").concat(ef().withTotals),result:(0,d.UI)(e=>(function(e){let{ysds:t}=e;return(0,s._I)(t,(e,t)=>{let{k:n,fc:c,si:s,sic:l,mi:a,mic:o,pi:r,pic:i,nic:u}=t;return{key:e,Year:"totals"===e?"2001–2021":e,"Total crashes":(c+l+o+i+u).toLocaleString(),Deaths:n.toLocaleString(),"Serious Injuries":s.toLocaleString(),"Minor Injuries":a.toLocaleString(),"Other Reported Injuries":r.toLocaleString()}})})({ysds:e}))(D),colTitles:B})]}),(0,c.jsx)(eT.Z,{})]})})}},70633:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var c=n(19622),s=n(50959),l=n(23007),a=n(37292),o=n(47047);function r(e){let{cc2mc2mn:t,urlPrefix:n,...r}=e,i=(0,o.useRouter)(),u=(0,s.useMemo)(()=>(0,l.V7)(t,(e,t)=>{let{cn:n}=t;return[n,e]}),[t]),[d,h]=(0,s.useState)(r.cc),[p,m]=(0,s.useState)(r.mc),f=(0,s.useCallback)(e=>{if(!n||!e.startsWith(n+"/"))return!0;let[s,a]=(e=e.slice(n.length+1)).split("/").map(e=>e?(0,c.c)(e):void 0);if(console.log("useRegion: updateCodes url ".concat(e," cn ").concat(s," mn ").concat(a)),!s)return console.log("beforePopState setting cc ".concat(null)),h(null),!0;{let e=u[s];if(console.log("beforePopState setting cc ".concat(e)),h(e),!a)return console.log("beforePopState setting mc ".concat(null)),m(null),!0;{let{mc2mn:n}=t[e],c=(0,l.V7)(n,(e,t)=>[t,e])[a];return console.log("beforePopState setting mc ".concat(c)),m(c),!0}}},[n,h,m,u,t]);(0,s.useEffect)(()=>{if(!n)return;i.beforePopState(e=>{let{url:t,as:n,options:c}=e;return f(n)});let e=(e,t)=>{let{shallow:n}=t;f(e)};return i.events.on("routeChangeStart",e),()=>{i.events.off("routeChangeStart",e)}},[i,n,f]);let g=(0,s.useCallback)(e=>{let t=e?u[e]:null;if(console.log("new cc",t),h(t),void 0!==n){let t="".concat(n,"/").concat(e?(0,c.F)(e):"");console.log("pushing ".concat(t)),i.push(t,void 0,{shallow:!0})}},[u,h,n]),{county:x,cn:j,mn:_,mc2mn:v,mn2mc:y,cities:b}=(0,s.useMemo)(()=>{if(!d)return{};let e=t[d],{cn:n,mc2mn:c}=e,s=(0,l.V7)(c,(e,t)=>[t,e]),o=(0,a.Wt)((0,l.XP)(s));return{county:e,cn:n,mn:c&&p?c[p]:void 0,mc2mn:c,mn2mc:s,cities:o}},[d,t]),w=(0,s.useCallback)(e=>{if(!y){console.warn("Attempting to select city ".concat(e," with no mn2mc (cc ").concat(d,")"));return}if(m(y[e]),void 0!==n&&j){let t="".concat(n,"/").concat((0,c.F)(j),"/").concat((0,c.F)(e));console.log("pushing ".concat(t)),i.push(t,void 0,{shallow:!0})}},[m,n,j,y]);return{cn:j,mn:_,county:x,cc:d,mc:p,mc2mn:v,setCounty:g,setCity:d?w:void 0,cities:b,cc2mc2mn:t}}},96665:function(e){e.exports={icon:"icons_icon__nBWSs",driver:"icons_driver__Actj4",pedestrian:"icons_pedestrian__lR5Dh",cyclist:"icons_cyclist__uXs6N",car:"icons_car__c6vpg"}},41109:function(e){e.exports={tablePagination:"pagination_tablePagination__lC3mW",curPage:"pagination_curPage__dxmzj",pageNum:"pagination_pageNum__WgUES",dirty:"pagination_dirty__T8K2y",beforeDate:"pagination_beforeDate__Q6Cge",pageSize:"pagination_pageSize__W5eRI",pageCount:"pagination_pageCount___YeaQ",left:"pagination_left__nvvgL",reduce:"pagination_reduce__ZMeGM"}},60641:function(e){e.exports={body:"region-page_body__HkLid",container:"region-page_container__DAGWG",title:"region-page_title__k4sSU",subtitle:"region-page_subtitle__h2BBD",crashesTable:"region-page_crashesTable__RmQfS",withTotals:"region-page_withTotals__Uho81",njspPlot:"region-page_njspPlot__PtERd",section:"region-page_section__OtUiB",sectionSubtitle:"region-page_sectionSubtitle__VSKpQ",idTarget:"region-page_idTarget__lG_r5"}},58510:function(e){e.exports={sqlError:"result-table_sqlError__4KsON",tableHead:"result-table_tableHead__jkTt6",noselect:"result-table_noselect__eGqI4",rowsTable:"result-table_rowsTable__9gjgP"}},62297:function(e){e.exports={icons:"use-crashes_icons__Hn8TQ",typeIcons:"use-crashes_typeIcons__Eca3F",typeIcon:"use-crashes_typeIcon__9988a"}}},function(e){e.O(0,[226,883,445,149,635,261,65,880,407,774,888,179],function(){return e(e.s=23604)}),_N_E=e.O()}]);