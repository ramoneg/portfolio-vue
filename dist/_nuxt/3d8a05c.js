(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,5,8],{220:function(t,e,l){"use strict";l.r(e);var r={props:{buttonStyle:{type:String,default:"primary"},showOverlay:{type:Boolean,default:!0}},data:function(){return{buttonStyles:{primary:"text-gray-900 bg-gradient-to-r from-primary-400 to-yellow-300",secondary:"text-white bg-gradient-to-r from-gray-700 to-gray-800"},overlayStyles:{primary:"bg-gradient-to-r from-primary-300 to-yellow-200",secondary:"text-white"}}},computed:{style:function(){return this.buttonStyles[this.buttonStyle]},overlay:function(){return this.overlayStyles[this.buttonStyle]}}},n=l(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("button",{staticClass:"relative z-10 active:scale-95 transform transition-transform"},[t.$slots.default?l("div",{staticClass:"bg-transparent px-5 py-3 shadow cursor-pointer uppercase font-bold z-10 rounded",class:t.style},[t._t("default")],2):t._e(),t._v(" "),t.showOverlay?l("div",{staticClass:"absolute top-0 left-0 filter blur-xl opacity-60 w-full h-full",class:t.overlay,staticStyle:{"z-index":"-1"}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},221:function(t,e,l){"use strict";l.r(e);var r={props:{small:{type:Boolean,default:!1}}},n=l(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center",class:t.small?"h-screen-2/3":"h-screen-4/5"},[l("div",{staticClass:"text-center md:text-left"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},224:function(t,e,l){"use strict";l.r(e);var r={},n=l(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"text-5xl md:text-7xl font-heading font-black uppercase"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,l){"use strict";l.r(e);l(36),l(37);var r={data:function(){return{filter:"all",skills:[{name:"Laravel",category:"backend",level:10},{name:"PHP",category:"backend",level:9},{name:"SOLID Code",category:"backend",level:6},{name:"Linux/Unix",category:"Engineering",level:7},{name:"Networks",category:"Engineering",level:7},{name:"Vue",category:"Frontend",level:8},{name:"Javascript",category:"Frontend",level:8},{name:"AWS",category:"Engineering",level:5},{name:"Git",category:"Other",level:7},{name:"Welding",category:"Fancy",level:7},{name:"Audio Production",category:"Fancy",level:8},{name:"Thaiboxing",category:"Fancy",level:7},{name:"Video Editing",category:"Fancy",level:7},{name:"Project Management",category:"Other",level:5}]}},methods:{setFilter:function(filter){this.filter==filter?this.filter="all":this.filter=filter}},computed:{categories:function(){var t=["all"];return this.skills.map((function(e){t.some((function(t){return t==e.category}))||t.push(e.category)})),t}}},n=l(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"spacer flex overflow-x-scroll md:overflow-x-visible"},t._l(t.categories,(function(e){return l("UiButton",{key:e,staticClass:"mr-4",attrs:{showOverlay:!1,"button-style":e==t.filter?"primary":"secondary"},nativeOn:{click:function(l){return t.setFilter(e)}}},[t._v("\n            "+t._s(e)+"\n        ")])})),1),t._v(" "),l("div",{staticClass:"flex flex-wrap items-center"},t._l(t.skills,(function(e){return l("div",{key:e.name,staticClass:"flex relative rounded-2xl shadow mr-2 mb-2 md:mr-8 md:mb-8 px-4 py-2 border bg-gray-900 border-gray-700 transition-opacity",class:{"opacity-25":"all"!=t.filter&&e.category!=t.filter,"border-primary-300":e.level>=8}},[l("h3",[t._v(t._s(e.name))]),e.level>=8?l("small",{staticClass:"absolute top-0 right-0 font-emoji"},[t._v("⭐")]):t._e()],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiButton:l(220).default,UiH3:l(165).default})},227:function(t,e,l){"use strict";l.r(e);var r={head:function(){return{title:"Ramon Egger | Home"}}},n=l(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("UiHero",[l("h1",{staticClass:"spacer"},[t._v("\n      I like to write "),l("ui-fancy",{attrs:{overlay:"",icon:"⚡","icon-size":"text-9xl"}},[t._v("#fancy")]),t._v(" code\n    ")],1),t._v(" "),l("div",[l("nuxt-link",{attrs:{to:"/projects"}},[l("UiButton",[t._v("Projects")])],1)],1)],1),t._v(" "),l("UiSection",{attrs:{id:"skills"}},[l("h2",{staticClass:"spacer"},[t._v("Skills")]),t._v(" "),l("ui-skills")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiFancy:l(118).default,UiH1:l(224).default,UiButton:l(220).default,UiHero:l(221).default,UiH2:l(86).default,UiSkills:l(225).default,UiSection:l(166).default})}}]);