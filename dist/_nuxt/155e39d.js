(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,5,6,7,8,10,12,13],{207:function(t,e,l){"use strict";l.r(e);var n={},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-xl md:text-2xl font-heading font-black uppercase text-gray-300"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,l){"use strict";l.r(e);var n={},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"text-5xl font-heading font-black uppercase text-gray-200"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,l){var content=l(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(84).default)("fefbcd00",content,!0,{sourceMap:!1})},210:function(t,e,l){"use strict";l.r(e);var n={props:{buttonStyle:{type:String,default:"primary"},showOverlay:{type:Boolean,default:!0}},data:function(){return{buttonStyles:{primary:"text-gray-900 bg-gradient-to-r from-primary-400 to-yellow-300",secondary:"text-white bg-gradient-to-r from-gray-700 to-gray-800"},overlayStyles:{primary:"bg-gradient-to-r from-primary-300 to-yellow-200",secondary:"text-white"}}},computed:{style:function(){return this.buttonStyles[this.buttonStyle]},overlay:function(){return this.overlayStyles[this.buttonStyle]}}},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("button",{staticClass:"relative z-10 active:scale-95 transform transition-transform"},[t.$slots.default?l("div",{staticClass:"bg-transparent px-5 py-3 shadow cursor-pointer uppercase font-bold z-10 rounded",class:t.style},[t._t("default")],2):t._e(),t._v(" "),t.showOverlay?l("div",{staticClass:"absolute top-0 left-0 filter blur-xl opacity-60 w-full h-full",class:t.overlay,staticStyle:{"z-index":"-1"}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},211:function(t,e,l){"use strict";l.r(e);var n={props:{small:{type:Boolean,default:!1}}},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center",class:t.small?"h-screen-2/3":"h-screen-4/5"},[l("div",{staticClass:"text-center md:text-left"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},213:function(t,e,l){"use strict";l.r(e);var n={props:["title"]},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"block-spacer text-center md:text-left"},[t.title?l("ui-h2",{staticClass:"mb-2"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiH2:l(208).default})},214:function(t,e,l){"use strict";l(209)},215:function(t,e,l){var n=l(83)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.fancy-wrapper[data-v-8e5ba330]{\n  position:relative;\n  z-index:1\n}\n.fancy-wrapper .icon[data-v-8e5ba330]{\n  z-index:-1\n}\n.fancy-wrapper .overlay[data-v-8e5ba330]{\n  z-index:-2\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},217:function(t,e,l){"use strict";l.r(e);var n={props:{overlay:{type:Boolean,default:!1},icon:{type:String,default:null},iconSize:{type:String,default:"text-7xl"},iconCenter:{type:Boolean,default:!0}}},r=(l(214),l(35)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("span",{staticClass:"fancy-wrapper"},[t.$slots.default?l("span",{staticClass:"italic px-4 text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-yellow-200"},[t._t("default")],2):t._e(),t._v(" "),t.icon?l("div",{staticClass:"font-emoji icon py-4 absolute top-1/2 transform -translate-y-1/2 text-transparent bg-clip-text bg-primary-200 opacity-10",class:[t.iconSize,t.iconCenter&&"left-1/2 -translate-x-1/2"]},[t._v("\n        "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),t.overlay?l("div",{staticClass:"overlay absolute top-0 left-0 h-full w-full bg-primary-500 opacity-20 filter blur-lg pointer-events-none"}):t._e()])}),[],!1,null,"8e5ba330",null);e.default=component.exports},218:function(t,e,l){"use strict";l.r(e);var n={},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"text-5xl md:text-7xl font-heading font-black uppercase"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,l){"use strict";l.r(e);l(36),l(37);var n={data:function(){return{filter:"all",skills:[{name:"Laravel",category:"backend",level:10},{name:"PHP",category:"backend",level:9},{name:"SOLID Code",category:"backend",level:6},{name:"Linux/Unix",category:"Engineering",level:7},{name:"Networks",category:"Engineering",level:7},{name:"Vue",category:"Frontend",level:8},{name:"Javascript",category:"Frontend",level:8},{name:"AWS",category:"Engineering",level:5},{name:"Git",category:"Other",level:7},{name:"Welding",category:"Fancy",level:7},{name:"Audio Production",category:"Fancy",level:8},{name:"Thaiboxing",category:"Fancy",level:7},{name:"Video Editing",category:"Fancy",level:7},{name:"Project Management",category:"Other",level:5}]}},methods:{setFilter:function(filter){this.filter==filter?this.filter="all":this.filter=filter}},computed:{categories:function(){var t=["all"];return this.skills.map((function(e){t.some((function(t){return t==e.category}))||t.push(e.category)})),t}}},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"spacer flex overflow-x-scroll md:overflow-x-visible"},t._l(t.categories,(function(e){return l("ui-button",{key:e,staticClass:"mr-4",attrs:{showOverlay:!1,"button-style":e==t.filter?"primary":"secondary"},nativeOn:{click:function(l){return t.setFilter(e)}}},[t._v("\n            "+t._s(e)+"\n        ")])})),1),t._v(" "),l("div",{staticClass:"flex flex-wrap items-center"},t._l(t.skills,(function(e){return l("div",{key:e.name,staticClass:"flex relative rounded-2xl shadow mr-2 mb-2 md:mr-8 md:mb-8 px-4 py-2 border bg-gray-900 border-gray-700 transition-opacity",class:{"opacity-25":"all"!=t.filter&&e.category!=t.filter,"border-primary-300":e.level>=8}},[l("ui-h3",[t._v(t._s(e.name))]),e.level>=8?l("small",{staticClass:"absolute top-0 right-0 font-emoji"},[t._v("⭐")]):t._e()],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiButton:l(210).default,UiH3:l(207).default})},220:function(t,e,l){"use strict";l.r(e);var n={},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl md:text-2xl"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},222:function(t,e,l){"use strict";l.r(e);var n={head:function(){return{title:"Ramon Egger | Home"}}},r=l(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("ui-hero",[l("ui-h1",{staticClass:"spacer"},[t._v("\n      I like to write "),l("ui-fancy",{attrs:{overlay:"",icon:"⚡","icon-size":"text-9xl"}},[t._v("#fancy")]),t._v(" code\n    ")],1),t._v(" "),l("div",[l("nuxt-link",{attrs:{to:"/projects"}},[l("ui-button",[t._v("Projects")])],1)],1)],1),t._v(" "),l("ui-section",{attrs:{id:"skills"}},[l("ui-h2",{staticClass:"spacer"},[t._v("Skills")]),t._v(" "),l("ui-skills")],1),t._v(" "),l("ui-section",{staticClass:"flex flex-wrap justify-center",attrs:{id:"about"}},[l("ui-h2",{staticClass:"spacer text-center w-full"},[l("ui-fancy",{attrs:{overlay:"",icon:"🙋‍♂️","icon-size":"text-7xl"}},[t._v("Hi, I'm Ramon")])],1),t._v(" "),l("div",{staticClass:"w-full md:w-2/3 bg-gray-800 rounded-3xl border-primary-300 p-8 font-mono text-left"},[l("ui-p",{staticClass:"spacer"},[t._v("I work as an Full Stack Web Developer. I develop front- and backend stuff for the web.")]),t._v(" "),l("ui-p",[t._v("I'm passionate about tackling something which excites and challenges me. This can be coding a project, restaurating a classic Mini or doing Muay Thai.")])],1)],1),t._v(" "),l("ui-section",{staticClass:"flex flex-wrap justify-center",attrs:{id:"contact"}},[l("ui-h3",[l("ui-fancy",{attrs:{overlay:""}},[l("a",{attrs:{href:"mailto:ramon@ramonegger.ch"}},[t._v("Mail")])])],1),t._v(" "),l("ui-h3",[l("ui-fancy",{attrs:{overlay:""}},[l("a",{attrs:{target:"_blank",href:"https://github.com/ramoneg"}},[t._v("Github")])])],1),t._v(" "),l("ui-h3",[l("ui-fancy",{attrs:{overlay:""}},[l("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/ramon-egger-7509a4123"}},[t._v("LinkedIn")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiFancy:l(217).default,UiH1:l(218).default,UiButton:l(210).default,UiHero:l(211).default,UiH2:l(208).default,UiSkills:l(219).default,UiSection:l(213).default,UiP:l(220).default,UiH3:l(207).default})}}]);