(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{7218:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return t(1523)}])},1523:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(5893),o=(t(7294),t(6983)),i=t(4866);function u(){return i.p&&(0,r.jsx)(o.nh,{})}},4866:function(n,e,t){"use strict";t.d(e,{p:function(){return N}});var r=t(6983),o=t(7568),i=t(4051),u=t.n(i),a=t(5893),c=t(8030),s=t(2705),l=t(6486),d=t.n(l),f=t(3454);f.env.CONTENTFUL_SPACE_ID="wbbhf1qd7970",f.env.CONTENTFUL_ACCESS_TOKEN="-W1IoA-JTS3yA3py_FyXDdG42P02SFq5vLBff-KXfrQ";var p="\nslug\ntitle\nfeaturedImage {\n  url\n}\ndate\ndescription\n";function v(n){return h.apply(this,arguments)}function h(){return h=(0,o.Z)(u().mark((function n(e){var t,r=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]&&r[1],n.abrupt("return",fetch("https://graphql.contentful.com/content/v1/spaces/".concat(f.env.CONTENTFUL_SPACE_ID),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t?f.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN:f.env.CONTENTFUL_ACCESS_TOKEN)},body:JSON.stringify({query:e})}).then((function(n){return n.json()})));case 2:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function m(n){var e,t;return console.log("!!",n.errors),null===n||void 0===n||null===(e=n.data)||void 0===e||null===(t=e.blogPostCollection)||void 0===t?void 0:t.items}function C(n){return E.apply(this,arguments)}function E(){return(E=(0,o.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v("query {\n      blogPostCollection(order: date_DESC, preview: ".concat(e?"true":"false",") {\n        items {\n          ").concat(p,"\n        }\n      }\n    }"),e);case 2:return t=n.sent,n.abrupt("return",m(t));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var N=(0,r.fZ)({projects:[{id:"fHivtFZUbXCtndQjcV24fY",token:"IDu1Ofdg2kutYhZ63rojOnX2Dz78sAQgQIBm2w86vl0qjKmnNYB7nu3jxbAExLCyAqEEFH6XQmMsQZGPXQA"}],preview:!1});N.registerComponent((function(n){var e=n.type,t=n.children,r=n.className,i=(0,s.usePlasmicQueryData)(JSON.stringify({type:e}),(0,o.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",C(!1));case 1:case"end":return n.stop()}}),n)}))));return console.log("!",i),(null===i||void 0===i?void 0:i.data)?(0,a.jsx)("div",{className:r,children:null===i||void 0===i?void 0:i.data.map((function(n,e){return(0,a.jsx)(c.DataProvider,{name:"contenfulItem",data:n,children:(0,c.repeatedElement)(e,t)},n.slug)}))}):(0,a.jsx)("div",{children:"Please specify a collection."})}),{name:"ContentfulFetcher",props:{children:{type:"slot",defaultValue:{type:"vbox",children:[{type:"component",name:"ContentfulField"}]}}}}),N.registerComponent((function(n){var e=n.className,t=n.path,r=n.setControlContextData,o=(0,c.useSelector)("contenfulItem");if(!o)return(0,a.jsx)("div",{children:"ContentfulField must be used within a ContentfulFetcher"});if(null===r||void 0===r||r({fields:Object.keys(o)}),!t)return(0,a.jsx)("div",{children:"ContentfulField must specify a path."});var i=d().get(o,t);return(null===i||void 0===i?void 0:i.url)?(0,a.jsx)("img",{src:i.url}):(0,a.jsx)("div",{className:e,children:i})}),{name:"ContentfulField",props:{path:{type:"choice",options:function(n,e){return e.fields}}}})}},function(n){n.O(0,[774,662,523,888,179],(function(){return e=7218,n(n.s=e);var e}));var e=n.O();_N_E=e}]);