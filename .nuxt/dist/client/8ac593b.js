(window.webpackJsonp=window.webpackJsonp||[]).push([[19,5,9,10,14],{215:function(e,t,l){"use strict";l.r(t);var r={props:{image:{type:Object,required:!0}}},n=l(12),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{attrs:{draggable:"false",src:e.image.fields.file.url,alt:e.image.fields.description}})}),[],!1,null,null,null);t.default=component.exports},220:function(e,t,l){"use strict";l.r(t);var r={props:{small:{type:Boolean,default:!1},image:{type:Object,required:!1}}},n=l(12),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"flex items-center relative",class:e.small?"h-screen-2/3":"h-screen-4/5"},[l("div",{staticClass:"text-center md:text-left z-10"},[e._t("default")],2),e._v(" "),e.image?l("UiImage",{staticClass:"w-1/2 absolute left-1/2 top-50 opacity-40",attrs:{draggable:"false",image:e.image}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiImage:l(215).default})},225:function(e,t,l){"use strict";l.r(t);var r={},n=l(12),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"p-2 h-6 flex items-center rounded-xl text-gray-900 bg-gradient-to-r from-primary-400 to-yellow-300 font-bold"},[l("small",[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},249:function(e,t,l){"use strict";l.r(t);var r={data:function(){return{projects:[{name:"Mini Restauration",url:"https://instagram.com/jarvisthemini",level:10},{name:"Evolve (cms)",url:"https://racerfish.com/de/web-development",level:0},{name:"LBC Composites",url:"https://lbc-composites.com",level:0},{name:"StrawBlond",url:"https://strawblond.com",level:0},{name:"Roughneck Marine",url:"https://roughneck-marine.com",level:0},{name:"Ladyplanet",url:"https://ladyplanet.ch",level:0},{name:"SocialGate (app)",url:null,level:0},{name:"Apropos.jobs (app)",url:null,level:0},{name:"Nitrous (cms)",url:"https://racerfish.com/de/web-development",level:0}]}}},n=l(12),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"w-full grid-cols-1 md:grid-cols-2 grid gap-4"},e._l(e.projects,(function(t,r){return l("a",{key:r,staticClass:"col-span-1 p-5 flex rounded-3xl bg-gray-800 transform transition-colors relative",class:{"cursor-not-allowed":!t.url,"hover:bg-gray-700":t.url},attrs:{target:"_blank",href:t.url}},[l("h3",[e._v(e._s(t.name))]),t.url?e._e():l("ui-badge",{staticClass:"ml-2"},[e._v("Private")]),e._v(" "),t.level>=8?l("p",{staticClass:"absolute top-0 left-0 font-emoji"},[e._v("⭐")]):e._e()],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiBadge:l(225).default})},300:function(e,t,l){"use strict";l.r(t);var r={head:function(){return{title:"Ramon Egger | Projects"}}},n=l(12),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("UiHero",{attrs:{small:""}},[l("h2",[e._v("Projects")])]),e._v(" "),l("UiSection",{attrs:{id:"projects"}},[l("ui-projects")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiHero:l(220).default,UiProjects:l(249).default,UiSection:l(162).default})}}]);