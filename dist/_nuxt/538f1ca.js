(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{222:function(n,t,r){var content=r(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,r(61).default)("648d0770",content,!0,{sourceMap:!1})},231:function(n,t,r){"use strict";r(222)},232:function(n,t,r){var e=r(60)((function(i){return i[1]}));e.push([n.i,'/*purgecss start ignore*/\n.markdown h2, .markdown h3, .markdown h4{\n  margin-bottom:2rem\n}\n@media (min-width: 768px){\n.markdown h2, .markdown h3, .markdown h4{\n    margin-bottom:2.5rem\n}\n}\n.markdown h2:not(:first-child){\n  margin-top:3rem\n}\n@media (min-width: 768px){\n.markdown h2:not(:first-child){\n    margin-top:6rem\n}\n}\n@media (min-width: 1024px){\n.markdown h2:not(:first-child){\n    margin-top:9rem\n}\n}\n.markdown p{\n  margin-bottom:1rem\n}\n@media (min-width: 768px){\n.markdown p{\n    margin-bottom:2rem\n}\n}\n.markdown a{\n  position:relative;\n  padding-left:0.25rem;\n  padding-right:0.25rem;\n  font-weight:500\n}\n.markdown a:after{\n  position:absolute;\n  bottom:0px;\n  left:0px;\n  height:50%;\n  width:100%;\n  --tw-translate-y:-50%;\n  --tw-bg-opacity:1;\n  background-color:rgba(254, 202, 202, var(--tw-bg-opacity));\n  opacity:0.2;\n  content:""\n}\n.markdown blockquote p{\n  margin-bottom:0px\n}\n.markdown img{\n  display:inline-block;\n  max-height:24rem;\n  border-radius:0.25rem\n}\n\n/*purgecss end ignore*/',""]),e.locals={},n.exports=e},251:function(n,t,r){"use strict";r.r(t);r(247),r(34),r(37);var e=r(248),o=r.n(e),m={props:{text:{required:!0,type:String}},data:function(){return{tags:{ageInYears:function(){return"*about* "+((new Date).getFullYear()-1999)}}}},methods:{replaceTagWithValue:function(n,text,t){return text.replaceAll("{".concat(n,"}"),t)}},computed:{parsedText:function(){var n=this,text=this.text;return Object.keys(this.tags).forEach((function(t){text=n.replaceTagWithValue(t,text,n.tags[t])})),o()(text)}}},d=(r(231),r(12)),component=Object(d.a)(m,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"markdown",domProps:{innerHTML:n._s(n.parsedText)}})}),[],!1,null,null,null);t.default=component.exports}}]);