(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{262:function(e,n,a){__NEXT_REGISTER_PAGE("/guides/operations",function(){return e.exports=a(263),{page:e.exports.default}})},263:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(1),s=a(12);function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components,a=m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:function(e){var n=e.children;return o.a.createElement(s.a,{title:"Operations"},n)},layoutProps:a,components:n},o.a.createElement(r.MDXTag,{name:"p",components:n},"An ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"operation")," defines a set of SQL commands that will be executed in order against your warehouse, and can be used for arbitrary operations that don't necessarily create materializations or tests."),o.a.createElement(r.MDXTag,{name:"p",components:n},"To define a new operation, create a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".ops.sql")," file in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"definitions")," directory."),o.a.createElement(r.MDXTag,{name:"p",components:n},"For example, the following file defines two queries that will be run in order and executes vacuum commands in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Redshift"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"hljs language-js",metaString:""}},"vacuum ",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-keyword"}},"delete")," only sales to ",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"hljs-number"}},"75")," percent\n---\nvacuum reindex listing")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Multiple statements can be seperated with a single line containing only ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"---")),o.a.createElement(r.MDXTag,{name:"h2",components:n},"Reference"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Check the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/reference/assertions"}},"assertions reference")," for a list of all methods you can use in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".ops.sql")," files."))}}},[[262,1,0]]]);