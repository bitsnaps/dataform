(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{258:function(e,a,n){__NEXT_REGISTER_PAGE("/guides/js-api",function(){return e.exports=n(259),{page:e.exports.default}})},259:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(1),s=n(12);function m(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}a.default=function(e){var a=e.components,n=m(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",Layout:function(e){var a=e.children;return r.a.createElement(s.a,{title:"JS API"},a)},layoutProps:n,components:a},r.a.createElement(o.MDXTag,{name:"p",components:a},"Generally the easiest way to define ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/guides/materializations"}},"materializations"),", ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/guides/assertions"}},"assertions"),", and ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/guides/operations"}},"operations")," is to create a new file with the appropriate extension, one of ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".sql .assert.sql .ops.sql"),"."),r.a.createElement(o.MDXTag,{name:"p",components:a},"For advanced use cases, all of the above can be defined via Dataform's a JavaScript API."),r.a.createElement(o.MDXTag,{name:"p",components:a},"To use the JS API, create a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".js")," file anywhere in the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"definitions/")," folder of your project."),r.a.createElement(o.MDXTag,{name:"p",components:a},"The JS API provides three primary functions that correspond to the types of objects above:"),r.a.createElement(o.MDXTag,{name:"ul",components:a},r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/reference/js-api#materialize()"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"materialize()"))),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/reference/js-api#operate()"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"operate()"))),r.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/reference/js-api#assert()"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"assert()")))),r.a.createElement(o.MDXTag,{name:"p",components:a},"These are regular JavaScript (ES6) files that can contain arbitrary code, for loops, functions, constants etc."),r.a.createElement(o.MDXTag,{name:"h2",components:a},"Example"),r.a.createElement(o.MDXTag,{name:"p",components:a},"Define an incremental table, provide a query and a where clause using a ",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/reference/contextable"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"Contextable"))," argument and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"self()"),"."),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},"materialize(",r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"example_incremental"'),")\n  .type(",r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"incremental"'),")\n  .query(",r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"select 1 as ts"'),")\n  .where(",r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"context")," =>")," ",r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"`ts > (select max(ts) from ",r.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-subst"}},"${context.self()}"),")`"),");")))}}},[[258,1,0]]]);