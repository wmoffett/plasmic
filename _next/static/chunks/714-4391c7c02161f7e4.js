"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{9949:function(e,n,t){t.d(n,{p:function(){return ce}});var r=t(6983),o=t(7568),a=t(4051),i=t.n(a),s=t(5893),c=t(8030),l=t(2705),u=t(6486),d=t.n(u),p=t(3454);p.env.CONTENTFUL_SPACE_ID="wbbhf1qd7970",p.env.CONTENTFUL_ACCESS_TOKEN="-W1IoA-JTS3yA3py_FyXDdG42P02SFq5vLBff-KXfrQ",p.env.CONTENTFUL_SPACE_ID="o80oqw32rhmg",p.env.CONTENTFUL_ACCESS_TOKEN="Kv--4rISSalKyJLXuUL8bPKb950cDc52FSfrPHCPu6Y";var h="\nslug\ntitle\nfeaturedImage {\n  url\n  description\n}\ndate\nrichText {\n  json\n  links {\n    assets {\n      __typename\n      block {\n        sys {\n          id\n        }\n        __typename\n        url\n        title\n        width\n        height\n        description\n        fileName\n        contentType\n      }\n    }\n  }\n}\n";function f(e){return m.apply(this,arguments)}function m(){return m=(0,o.Z)(i().mark((function e(n){var t,r=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]&&r[1],e.abrupt("return",fetch("https://graphql.contentful.com/content/v1/spaces/".concat(p.env.CONTENTFUL_SPACE_ID),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t?p.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN:p.env.CONTENTFUL_ACCESS_TOKEN)},body:JSON.stringify({query:n})}).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(e){var n,t;return null===e||void 0===e||null===(n=e.data)||void 0===n||null===(t=n.blogPostCollection)||void 0===t?void 0:t.items}function g(e){return C.apply(this,arguments)}function C(){return(C=(0,o.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("query {\n      blogPostCollection(order: date_DESC, preview: ".concat(n?"true":"false",", limit: 5) {\n        items {\n          ").concat(h,"\n        }\n      }\n    }"),n);case 2:return t=e.sent,e.abrupt("return",v(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,o.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"==typeof n){e.next=2;break}return e.abrupt("return");case 2:return console.log("we have slug:",n),e.next=5,f('query {\n      blogPostCollection(where: { slug: "'.concat(n,'" }, preview: false, limit: 1) {\n        items {\n          ').concat(h,"\n        }\n      }\n    }"));case 5:return t=e.sent,e.abrupt("return",v(t));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=t(4924),S=t(4129),j=t(6437),A=t(6042),b=t(9396),Z=t(9534),B=t(7927),w=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.xv,(0,b.Z)((0,A.Z)({},n),{m:2}))},F=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.X6,(0,A.Z)({as:"h1",size:"2xl",m:1},n))},D=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.X6,(0,A.Z)({as:"h2",size:"xl",m:1},n))},L=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.X6,(0,A.Z)({as:"h3",size:"lg",m:1},n))},T=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.X6,(0,A.Z)({as:"h4",size:"md",m:1},n))},I=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.X6,(0,A.Z)({as:"h5",size:"sm",m:1},n))},N=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.X6,(0,A.Z)({as:"h6",size:"xs",m:1},n))},O=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.xu,(0,A.Z)({},n))},k=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.QI,(0,A.Z)({disablePadding:!0,component:"ul",m:10,my:1},n))},_=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.GS,(0,A.Z)({disablePadding:!0,component:"ol",m:10,my:1},n))},K=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(B.HC,(0,A.Z)({button:!1,disableGutters:!0},n))},P=t(6696),R=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(P.xJ,{m:2,my:1,children:(0,s.jsx)(P.iA,{children:(0,s.jsx)(P.p3,(0,A.Z)({},n))})})},z=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(P.Tr,(0,A.Z)({},n))},M=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(P.Td,(0,A.Z)({},n))},U=function(e){e.node;var n=(0,Z.Z)(e,["node"]);return(0,s.jsx)(P.Td,(0,b.Z)((0,A.Z)({},n),{component:"th"}))},V=t(3887);function H(e){var n=e.node,t=e.data.links.assets.block.find((function(e){return e.sys.id===n.data.target.sys.id}));return t?(0,s.jsx)(q,{data:t}):null}var X,G,q=function(e){var n=e.data,t=n.url,r=n.width,o=n.height,a=n.description;return(0,s.jsxs)(B.xu,{children:[(0,s.jsx)("source",{srcSet:"".concat(t,"?fm=webp"),type:"image/webp"}),(0,s.jsx)("source",{srcSet:"".concat(t,"?fm=avif"),type:"image/avif"}),(0,s.jsx)("source",{srcSet:"".concat(t,"?fm=png"),type:"image/png"}),(0,s.jsx)("source",{srcSet:"".concat(t,"?fm=jpg"),type:"image/jpg"}),(0,s.jsx)(V.Ee,{alt:a,src:t,width:r,height:o,loading:"lazy"})]})},Q=function(e){return function(n,t){return(0,s.jsx)(e,{node:n,children:t})}},J=(X={},(0,E.Z)(X,j.MARKS.BOLD,(function(e){return(0,s.jsx)(B.xv,{as:"b",children:e})})),(0,E.Z)(X,j.MARKS.ITALIC,(function(e){return(0,s.jsx)(B.xv,{as:"i",children:e})})),(0,E.Z)(X,j.MARKS.UNDERLINE,(function(e){return(0,s.jsx)(B.xv,{as:"u",children:e})})),(0,E.Z)(X,j.MARKS.CODE,(function(e){return(0,s.jsx)(B.EK,{children:e})})),X),W=(G={},(0,E.Z)(G,j.BLOCKS.DOCUMENT,(function(e,n){return n})),(0,E.Z)(G,j.BLOCKS.PARAGRAPH,Q(w)),(0,E.Z)(G,j.BLOCKS.HEADING_1,Q(F)),(0,E.Z)(G,j.BLOCKS.HEADING_2,Q(D)),(0,E.Z)(G,j.BLOCKS.HEADING_3,Q(L)),(0,E.Z)(G,j.BLOCKS.HEADING_4,Q(T)),(0,E.Z)(G,j.BLOCKS.HEADING_5,Q(I)),(0,E.Z)(G,j.BLOCKS.HEADING_6,Q(N)),(0,E.Z)(G,j.BLOCKS.EMBEDDED_ENTRY,Q(O)),(0,E.Z)(G,j.BLOCKS.UL_LIST,Q(k)),(0,E.Z)(G,j.BLOCKS.OL_LIST,Q(_)),(0,E.Z)(G,j.BLOCKS.TABLE,Q(R)),(0,E.Z)(G,j.BLOCKS.TABLE_HEADER_CELL,Q(U)),(0,E.Z)(G,j.BLOCKS.TABLE_ROW,Q(z)),(0,E.Z)(G,j.BLOCKS.TABLE_CELL,Q(M)),(0,E.Z)(G,j.BLOCKS.LIST_ITEM,(function(e){var n,t={nodeType:"document",data:{},content:[e]};return(0,S.h)(t,{renderMark:J,renderNode:(n={},(0,E.Z)(n,j.BLOCKS.PARAGRAPH,(function(e,n){return n})),(0,E.Z)(n,j.BLOCKS.LIST_ITEM,Q(K)),n)})})),(0,E.Z)(G,j.BLOCKS.HR,(function(){return(0,s.jsx)(B.iz,{})})),(0,E.Z)(G,j.BLOCKS.QUOTE,(function(e,n){return(0,s.jsx)(B.xv,{as:"blockquote",children:n})})),G),Y=function(e){return e};var $=t(872),ee=t(3569),ne=t(3382),te=function(e){var n=(0,$.Z)({},e),t=n.name,r=n.className,o=n.colorScheme,a=n.size,i=n.variant,c=n.isActive,l=n.isLoading,u=n.loadingText,d=n.spinnerPlacement,p=n.iconPosition,h=n.icon,f=(0,s.jsx)(ne.dt,{});switch(h){case"AddIcon":f=(0,s.jsx)(ne.dt,{});break;case"ArrowBackIcon":f=(0,s.jsx)(ne.Rp,{});break;case"ArrowDownIcon":f=(0,s.jsx)(ne.ve,{});break;case"ArrowForwardIcon":f=(0,s.jsx)(ne.mr,{});break;case"ArrowLeftIcon":f=(0,s.jsx)(ne.Y4,{});break;case"ArrowRightIcon":f=(0,s.jsx)(ne.LZ,{});break;case"ArrowUpDownIcon":f=(0,s.jsx)(ne.Wp,{})}var m=!("left"!==p||!h)&&f,v=!("right"!==p||!h)&&f;return(0,s.jsxs)(s.Fragment,{children:[m&&(0,s.jsx)(ee.zx,{leftIcon:m,className:r,isLoading:l,loadingText:u,isActive:c,colorScheme:o,size:a,variant:i,spinnerPlacement:d,children:t}),v&&(0,s.jsx)(ee.zx,{rightIcon:v,className:r,isLoading:l,loadingText:u,isActive:c,colorScheme:o,size:a,variant:i,spinnerPlacement:d,children:t}),!v&&!m&&(0,s.jsx)(ee.zx,{className:r,isLoading:l,loadingText:u,isActive:c,colorScheme:o,size:a,variant:i,spinnerPlacement:d,children:t})]})},re=t(3812),oe=function(e){var n=(0,$.Z)({},e),t=n.size,r=n.name,o=n.src,a=n.className;return(0,s.jsx)(re.qE,{size:t,name:r,src:o,className:a})},ae=(0,t(2494).IU)({displayName:"CaringIcon",viewBox:"0 0 44 51",path:(0,s.jsxs)("svg",{width:"44",height:"51",viewBox:"0 0 44 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M43.0554 8.27704C43.5805 9.51115 43.0058 10.9373 41.7717 11.4625C38.4351 12.8823 33.6523 16.3996 30.601 22.2503C27.5927 28.0187 26.1695 36.2424 29.7738 47.3327C30.1884 48.6083 29.4904 49.9783 28.2149 50.3929C26.9394 50.8074 25.5693 50.1095 25.1547 48.8339C21.1823 36.6111 22.6327 27.026 26.2946 20.0044C29.9135 13.0653 35.5974 8.81146 39.87 6.99336C41.1041 6.4682 42.5302 7.04293 43.0554 8.27704Z",fill:"white"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.944609 8.27704C0.419455 9.51115 0.994179 10.9373 2.22829 11.4625C5.56493 12.8823 10.3477 16.3996 13.399 22.2503C16.4073 28.0187 17.8305 36.2424 14.2262 47.3327C13.8116 48.6083 14.5096 49.9783 15.7851 50.3929C17.0606 50.8074 18.4307 50.1095 18.8453 48.8339C22.8177 36.6111 21.3673 27.026 17.7054 20.0044C14.0865 13.0653 8.4026 8.81146 4.13005 6.99336C2.89594 6.4682 1.46976 7.04293 0.944609 8.27704Z",fill:"white"}),(0,s.jsx)("path",{d:"M27.4652 5.82831C27.4652 9.0472 24.8558 11.6566 21.6369 11.6566C18.418 11.6566 15.8086 9.0472 15.8086 5.82831C15.8086 2.60942 18.418 0 21.6369 0C24.8558 0 27.4652 2.60942 27.4652 5.82831Z",fill:"white"})]})}),ie=function(e){var n=(0,$.Z)({},e),t=n.width,r=n.height;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(ae,{width:t,height:r})})},se=function(e){var n=(0,$.Z)({},e).colorScheme;return(0,s.jsx)(B.iz,{colorScheme:n})},ce=(0,r.fZ)({projects:[{id:"fHivtFZUbXCtndQjcV24fY",token:"IDu1Ofdg2kutYhZ63rojOnX2Dz78sAQgQIBm2w86vl0qjKmnNYB7nu3jxbAExLCyAqEEFH6XQmMsQZGPXQA"}],preview:!1});ce.registerComponent((function(e){var n=e.type,t=e.children,r=e.className,a=(0,l.usePlasmicQueryData)(JSON.stringify({type:n}),(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g(!1));case 1:case"end":return e.stop()}}),e)}))));return(null===a||void 0===a?void 0:a.data)?(0,s.jsx)("div",{className:r,children:null===a||void 0===a?void 0:a.data.map((function(e,n){return(0,s.jsx)(c.DataProvider,{name:"contenfulItem",data:e,children:(0,c.repeatedElement)(n,t)},e.slug)}))}):(0,s.jsx)("div",{children:"Please specify a collection."})}),{name:"BlogFetcher",props:{children:{type:"slot",defaultValue:{type:"vbox",children:[{type:"component",name:"BlogField"}]}}},providesData:!0}),ce.registerComponent((function(e){var n=e.slug,t=e.children,r=e.className,a=(0,l.usePlasmicQueryData)(JSON.stringify({slug:n}),(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x(n));case 1:case"end":return e.stop()}}),e)}))));return(null===a||void 0===a?void 0:a.data)?(0,s.jsx)("div",{className:r,children:null===a||void 0===a?void 0:a.data.map((function(e,n){return(0,s.jsx)(c.DataProvider,{name:"contenfulItem",data:e,children:(0,c.repeatedElement)(n,t)},e.slug)}))}):(0,s.jsx)("div",{children:"Please specify a collection."})}),{name:"BlogPostFetcher",props:{slug:{type:"string",defaultValue:"image-and-table",options:["image-and-table","paragraph"]},children:{type:"slot",defaultValue:{type:"vbox",children:[{type:"component",name:"BlogField"}]}}},providesData:!0}),ce.registerComponent((function(e){var n=e.className,t=e.path,r=e.setControlContextData,o=(0,c.useSelector)("contenfulItem");if(!o)return(0,s.jsx)("div",{children:"ContentfulField must be used within a ContentfulFetcher"});if(null===r||void 0===r||r({fields:Object.keys(o)}),!t)return(0,s.jsx)("div",{children:"ContentfulField must specify a path."});var a=d().get(o,t);return(null===a||void 0===a?void 0:a.json)?function(e){var n,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={renderNode:Object.assign((0,E.Z)({},j.BLOCKS.EMBEDDED_ASSET,(function(n){return H({node:n,data:e})})),W,null!==(n=r.renderNode)&&void 0!==n?n:{}),renderMark:Object.assign({},J,null!==(t=r.renderMark)&&void 0!==t?t:{}),renderText:Y};return r.renderText&&(o.renderText=r.renderText),(0,s.jsx)(s.Fragment,{children:(0,S.h)(e.json,o)})}(a):(null===a||void 0===a?void 0:a.url)?(0,s.jsx)("img",{src:a.url,alt:a.description}):(0,s.jsx)("div",{className:n,children:a})}),{name:"BlogField",props:{path:{type:"choice",options:function(e,n){return n.fields}}}}),ce.registerComponent(ie,{name:"WhiteLogo",props:{width:{type:"string",defaultValue:"10"},height:{type:"string",defaultValue:"51"}}}),ce.registerComponent(se,{name:"Divider",props:{colorScheme:{type:"string",defaultValue:"whiteAlpha",options:["red","green","blue","teal","pink","purple","cyan","orange","yellow","facebook","messenger","whiteAlpha","blackAlpha"]}}}),ce.registerComponent(te,{name:"Chakra-Button",props:{name:{type:"string",defaultValue:"Button"},colorScheme:{type:"choice",defaultValue:"blue",options:["red","green","blue","teal","pink","purple","cyan","orange","yellow","facebook","messenger","whiteAlpha","blackAlpha"]},size:{type:"choice",defaultValue:"md",options:["xs","sm","md","lg"]},variant:{type:"choice",defaultValue:"solid",options:["solid","outline","ghost","link"]},isActive:{type:"boolean",defaultValue:!1,options:[!1,!0]},isLoading:{type:"boolean",defaultValue:!1,options:[!1,!0]},loadingText:{type:"string",defaultValue:"Submitting"},spinnerPlacement:{type:"choice",defaultValue:"start",options:["start","end"]},iconPosition:{type:"choice",defaultValue:"",options:["left","right"]},icon:{type:"choice",defaultValue:"",options:["AddIcon","ArrowBackIcon","ArrowDownIcon","ArrowForwardIcon","ArrowLeftIcon","ArrowRightIcon","ArrowUpDownIcon"]}}}),ce.registerComponent(oe,{name:"Chakra-Avatar",props:{size:{type:"choice",defaultValue:"md",options:["2xs","xs","sm","md","lg","xl","2xl"]},name:{type:"choice",defaultValue:"Dennis Ma",options:["Dan Abrahmov","Kola Tioluwani","Kent Dodds","Ryan Florence","Prosper Otemuyiwa","Christian Nwamba","Segun Adebayo","Benjamin Jackowitz","Dennis Ma",""]},src:{type:"choice",defaultValue:"",options:["https://bit.ly/dan-abramov","https://bit.ly/tioluwani-kolawole","https://bit.ly/kent-c-dodds","https://bit.ly/ryan-florence","https://bit.ly/prosper-baba","https://bit.ly/code-beast","https://bit.ly/sage-adebayo","https://images.ctfassets.net/o80oqw32rhmg/2WMOrVT4gDEciD6c76FWRX/b9878d0302bdf0ffe8ce56a94faf9a4f/Screen_Shot_2022-08-26_at_7.34.24_PM.png",""]}}})},4901:function(e,n,t){var r=(0,t(2667).B1C)({components:{Checkbox:{baseStyle:{control:{bg:"white"}}}},fonts:{heading:'"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},colors:{gray:{50:"#F5F5F5",100:"#F0F0F0",200:"#EBEBEB",300:"#D6D6D6",400:"#C2C2C2",500:"#A3A3A3",600:"#858585",700:"#5C5C5C",800:"#333333",900:"#141414"},caringRed:{50:"#FFE8E0",100:"#FFBFB1",200:"#FF917F",300:"#FF604D",400:"#FE431B",500:"#E53A01",600:"#B33700",700:"#812F00",800:"#4F1F00",900:"#200D00"},caringRedProgressBar:{500:"#FE431B"},caringOrange:{50:"#FFFAF0",100:"#FEEBCB",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},caringGreen:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#25855A",700:"#276749",800:"#22543D",900:"#1C4532"},caringBlue:{50:"#EBF8FF",100:"#BEE3F8",200:"#90CDF4",300:"#63B3ED",400:"#4299E1",500:"#3182CE",600:"#2B6CB0",700:"#2C5282",800:"#2A4365",900:"#1A365D"},caringDarkBlueCheckbox:{400:"#2C5282",500:"#2A4365",600:"#1A365D"}}});n.Z=r}}]);