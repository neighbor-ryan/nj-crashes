(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{76470:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/njsp",function(){return n(1378)}])},1378:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return p}});var a=n(11527);n(50959);var r=n(65185),c=n.n(r),s=n(41949),o=n(48167),i=n(27149),l=n(13105),d=n(66038),u=n(41796),m=!0;function p(e){return(0,a.jsxs)("div",{className:c().container,children:[(0,a.jsx)(s.F,{title:d.f,description:"Analysis & Visualization of traffic crash data published by NJ State Police and NJ DOT",url:o.HQ,thumbnail:"".concat(o.HQ,"/plots/fatalities_per_year_by_type.png")}),(0,a.jsxs)("main",{className:c().main,children:[(0,a.jsx)("h1",{className:c().title,children:d.f}),(0,a.jsxs)("p",{children:["Data comes from ",(0,a.jsx)(i.Z,{title:"NJ State Police fatal crash data",href:u.jy,children:"NJ State Police"}),", and is updated daily (though crashes sometimes take weeks or months to show up)."]}),(0,a.jsxs)("div",{className:c()["plot-container"],children:[(0,a.jsx)(d.l_,{...e}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)("p",{children:["Code and data are ",(0,a.jsx)(i.Z,{href:o.Tf.href,children:"on GitHub"}),"; feedback / issues ",(0,a.jsx)(i.Z,{href:"".concat(o.Tf.href,"/issues/new"),children:"here"}),")."]}),(0,a.jsx)(l.I_,{socials:[o.Tf,{name:"Hudson County Complete Streets",title:"Hudson County Complete Streets",href:"https://hudcostreets.org",src:"/logos/hccs.png"}]})]})]})}},66038:function(e,t,n){"use strict";n.d(t,{f:function(){return d},l_:function(){return m}});var a=n(11527),r=n(78912).Buffer;async function c(e){let t,{db:n,tableData:a,stem:c}=e;if("csv"===a.kind){let e="".concat(c,".csv");t="'".concat(e,"'"),await n.registerFileText(e,a.data)}else{let e="".concat(c,".parquet");t="parquet_scan('".concat(e,"')");let s=new Uint8Array(r.from(a.base64,"base64"));await n.registerFileBuffer(e,s)}return t}var s=n(8068),o=n(4555),i=n(50959);async function l(e){let{db:t,target:n,typeProjections:a,initialPlotData:r,types:c,county:i}=e,l="\n        SELECT\n            year,\n            CAST(sum(driver) as INT) as driver,\n            CAST(sum(pedestrian) as INT) as pedestrian,\n            CAST(sum(cyclist) as INT) as cyclist,\n            CAST(sum(passenger) as INT) as passenger,\n            CAST(sum(driver + pedestrian + cyclist + passenger) as INT) as total,\n            NULL as projected\n        FROM ".concat(n,"\n        ").concat(i?"WHERE county = '".concat(i,"'"):"","\n        GROUP BY year\n    "),d=await (0,s.Vn)(t,l),u=Array.from(c),m={Drivers:"driver",Pedestrians:"pedestrian",Cyclists:"cyclist",Passengers:"passenger",Projected:"projected"},p=u.map(e=>{let t=m[e];return t in a?a[t]:0}).reduce((e,t)=>e+t,0),h=d[d.length-1];if(h.year==o.$B){let e=u.map(e=>h[m[e]]).reduce((e,t)=>e+t,0);h.projected=p-e}else console.warn("getPlotData: last year is not ".concat(o.$B,":"),h," (county: ".concat(i,")")),d.push({year:o.$B,driver:0,pedestrian:0,cyclist:0,passenger:0,total:0,projected:p});console.log("got ytc data:",d);let f=1===c.size,y=r.map(e=>{let{name:t}=e,n=m[t],a={...e};return a.x=d.map(e=>e.year),a.y=d.map(e=>e[n]),a.visible=!!c.has(t)||"legendonly",f||(a.textposition="inside"),a}),g=f?[]:d.map(e=>{let{year:t,projected:n}=e,a=u.map(t=>e[m[t]]).reduce((e,t)=>e+t,0);return{x:t,y:a,text:"".concat(a),showarrow:!1,yshift:10}});return{rows:d,data:y,annotations:g}}let d="New Jersey Car Crash Deaths",u=["Drivers","Pedestrians","Cyclists","Passengers","Projected"];function m(e){let{params:t,tableData:n,typeProjections:r,rundate:m,yearTotalsMap:p,county:h,title:f,heading:y,spec:g}=e,{src:_,name:j}=g=null!=g?g:o.xW;_=null!=_?_:"plots/".concat(j,".png");let[w,b]=(0,i.useState)(new Set(u)),[N,S]=(0,i.useState)(null),[x,v]=(0,i.useState)(null),{data:T,layout:C,...D}=t,[E,P]=(0,i.useState)(T),[J,k]=(0,i.useState)(C.annotations),[A,B]=(0,i.useState)(null),F=(0,i.useCallback)(e=>{if(w.has(e)){console.log("types: disable ".concat(e));let t=new Set(Array.from(w));t.delete(e),b(t)}else{console.log("types: enable ".concat(e));let t=new Set(Array.from(w));t.add(e),b(t)}return!1},[w]),H=(0,i.useCallback)(e=>(w.size<=1?(console.log("types: remove solo ".concat(e)),b(new Set(u))):(console.log("types: solo ".concat(e)),b(new Set([e]))),!1),[w]);return(0,i.useEffect)(()=>{(async function(){let e=await (0,s.Vx)();console.log("got db:",e),S(e);let t=await c({db:e,tableData:n,stem:"ytc"});console.log("registered target:",t),B(t)})()},[n]),(0,i.useEffect)(()=>{(async function(){if(!N||!A)return;let{rows:e,data:t,annotations:n}=await l({db:N,target:A,typeProjections:r,initialPlotData:T,types:w,county:h});v(e),P(t),k(n)})()},[N,A,r,T,w,h]),(0,a.jsx)(o.XN,{...g,params:{data:E,layout:{...C,annotations:J,margin:{t:0,r:10,b:0,l:0}},...D},src:_,title:null!=f?f:d,heading:y,data:{rundate:m,yearTotalsMap:p},onLegendClick:F,onLegendDoubleClick:H})}},4555:function(e,t,n){"use strict";n.d(t,{$B:function(){return d},Vv:function(){return g},XN:function(){return m},eF:function(){return f},xW:function(){return y}});var a=n(11527);n(50959);var r=n(4172),c=n(27149),s=n(48167);let{HalfRoundWiden:o,filterIdxs:i,filterValues:l}=r,d=new Date().getFullYear(),u=d-1;function m(e){return r.XN(e)}let p=[],h=p.concat(...["y","m"].map(e=>p.concat(...["s","c"].map(t=>p.concat(...["d","i","p"].map(n=>{let a="".concat(n).concat(t).concat(e),r={s:"State",c:"County"}[t],c={y:"Year",m:"Month"}[e],s="".concat({s:"State",c:"Counties"}[t]," x ").concat(c,"s"),o={i:"Traffic Crash Injuries",p:"Property Damage Crashes",d:"Traffic Deaths"}[n],i="State"==r?"NJ ".concat(o," per ").concat(c):"NJ ".concat(o," per {").concat(r,", ").concat(c,"}");return"dcm"==a&&(i+=" (12mo avgs)"),{id:a,name:"njdot/".concat(a),title:i,menuName:({i:"Injuries",p:"Property Damage",d:"Deaths"})[n],dropdownSection:s,style:"County"==r&&{height:580}}}))))));function f(e){let{rundate:t,yearTotalsMap:n,includeWorstYearsBlurb:r}=e,o=n["2021"].total,i=n["2022"].total,l=n[u].total,m=n[d];if(!m)return console.warn("NjspChildren: yearTotalsMap doesn't contain ".concat(d,":"),n),null;let{total:p,projected:h}=m,f=p+h,y=new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Click/Double-click the legend labels to toggle or solo each type."}),!1!==r&&(0,a.jsxs)("p",{children:["2021 and 2022 were the worst years in the NJSP record (since 2008), with ",o," and ",i," deaths, resp."]}),(0,a.jsxs)("p",{children:[(0,a.jsxs)(c.Z,{href:"".concat(s.Tf.href,"/commits/main"),children:["As of ",y]}),", ",d," has ",p," reported deaths, and ",(0,a.jsx)(c.Z,{href:"https://nbviewer.org/github/neighbor-ryan/nj-crashes/blob/main/njsp/update-projections.ipynb",children:"is on pace"})," for ",f,f>l?", exceeding ".concat(u,"'s ").concat(l):"","."]})]})}let y={title:"NJ Traffic Deaths per Year",id:"per-year",name:"fatalities_per_year_by_type",menuName:"Traffic Deaths / Year",dropdownSection:"NJSP",filter:l({mapRange:o}),children:f},g=[y,{id:"ytd",name:"ytd-deaths",title:"NJ Traffic Deaths per Year",menuName:"YTD",dropdownSection:"NJSP",filter:i,children:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{children:"Some data arrives weeks or months after the fact, so current year numbers are especially subject to change."})})},{id:"vs-homicides",name:"crash_homicide_cmp",title:"NJ Traffic Deaths vs. Homicides",menuName:"vs. Homicides",dropdownSection:"NJSP",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Traffic crashes kill 1.5-2x as many people as homicides in NJ."}),(0,a.jsxs)("p",{children:["Homicide data comes from ",(0,a.jsx)(c.Z,{href:"https://nj.gov/njsp/ucr/uniform-crime-reports.shtml",children:"NJ State Police"})," and ",(0,a.jsx)(c.Z,{href:"https://www.disastercenter.com/crime/njcrimn.htm",children:"Disaster Center"}),"."]})]})},{id:"per-month",name:"fatalities_per_month",title:"NJ Traffic Deaths per Month",menuName:"Per Month",dropdownSection:"NJSP"},{id:"per-month-type",name:"fatalities_per_month_by_type",title:"NJ Traffic Deaths per Month (by Victim Type)",menuName:"By Victim Type",dropdownSection:"NJSP"},{id:"by-month-bars",name:"fatalities_by_month_bars",title:"NJ Traffic Deaths, grouped by month",menuName:"Grouped by Month",dropdownSection:"NJSP"},...h]},48167:function(e,t,n){"use strict";n.d(t,{Tf:function(){return c},UY:function(){return i},HQ:function(){return r}});var a=n(13105);n(27842),n(20557);let r="https://neighbor-ryan.org/nj-crashes",c=a.Tf("neighbor-ryan/nj-crashes","svg"),s=a.tL("RunsAsCoded"),o=a.mr("neighbor_ryan"),i=[c,a._F("@neighborryan"),s,o]},41796:function(e,t,n){"use strict";n.d(t,{Iv:function(){return s},jy:function(){return c},mB:function(){return o}});var a=n(21358),r=n(62400);let c="https://nj.gov/njsp/info/fatalacc/",s="https://www.state.nj.us/transportation/refdata/accident/rawdata01-current.shtm";function o(){let e=r.env.S3_DBS?"https://nj-crashes.s3.amazonaws.com/njdot/data":"".concat((0,a.b)(),"/njdot");return{crashes:"".concat(e,"/crashes.db"),occupants:"".concat(e,"/occupants.db"),pedestrians:"".concat(e,"/pedestrians.db"),vehicles:"".concat(e,"/vehicles.db"),drivers:"".concat(e,"/drivers.db"),cmym:"".concat(e,"/cmym.db"),cmymc:"".concat(e,"/cmymc.db")}}},65185:function(e){e.exports={container:"index_container__9GuY8",main:"index_main__c2BVR",title:"index_title__a_HQY","plot-container":"index_plot-container__NCtTQ",map:"index_map__G_wnO",bold:"index_bold__yXydk"}},955:function(e,t,n){e.exports=n(20621)},41949:function(e,t,n){"use strict";n.d(t,{F:function(){return s}});var a=n(50959),r=n(955),c=n(21358);function s({title:e,description:t,type:n="website",url:s,thumbnail:o,favicon:i,twitterCard:l="summary_large_image",children:d}){let u=(0,c.b)();return i=i||`${u}/favicon.ico`,a.createElement(r,null,a.createElement("title",null,e),a.createElement("link",{rel:"icon",href:i}),a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{property:"og:title",content:e}),a.createElement("meta",{property:"og:description",content:t}),a.createElement("meta",{property:"og:type",content:n}),a.createElement("meta",{property:"og:url",content:s}),a.createElement("meta",{property:"og:image",content:o}),a.createElement("meta",{name:"twitter:title",content:e}),a.createElement("meta",{name:"twitter:description",content:t}),a.createElement("meta",{name:"twitter:image",content:o}),a.createElement("meta",{name:"twitter:card",content:l}),d)}}},function(e){e.O(0,[68,149,461,774,888,179],function(){return e(e.s=76470)}),_N_E=e.O()}]);