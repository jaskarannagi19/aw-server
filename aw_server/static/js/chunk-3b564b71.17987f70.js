(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b564b71","chunk-91c52c86"],{"0874":function(t,e,n){"use strict";n.r(e);n("99af"),n("4160"),n("d81d"),n("0d03"),n("b0c0"),n("a9e3"),n("d3b7"),n("e25e"),n("ac1f"),n("25f0"),n("5319"),n("159b");var i=n("2909"),r=n("ade3"),a={},c={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in a||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlease make sure you have imported this icon before using it."),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data:function(){return{id:u(),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return Object(r["a"])({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(function(t,n,i){var r=u();return e[i]=r,' id="'.concat(r,'"')})),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(function(t,n,i,r){var a=n||r;return a&&e[a]?"#".concat(e[a]):t})),t},focusable:function(){var t=this.tabindex;if(null==t)return"false";var e="string"===typeof t?parseInt(t,10):t;return e>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var t=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var e=0,n=0;this.$children.forEach((function(i){i.outerScale=t.normalizedScale,e=Math.max(e,i.width),n=Math.max(n,i.height)})),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach((function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2}))}}else console.warn('Invalid prop: prop "name" is required.')}},render:function(t){if(null===this.name)return t();var e={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":String(!(this.label||this.title)),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}},n="vat-".concat(this.id);if(this.title&&(e.attrs["aria-labelledby"]=n),this.raw){var r=this.raw;this.title&&(r='<title id="'.concat(n,'">').concat(l(this.title),"</title>").concat(r)),e.domProps={innerHTML:r}}var a=this.title?[t("title",{attrs:{id:n}},this.title)]:[];return t("svg",e,this.raw?null:a.concat(this.$slots["default"]||[].concat(Object(i["a"])(this.icon.paths.map((function(e,n){return t("path",{attrs:e,key:"path-".concat(n)})}))),Object(i["a"])(this.icon.polygons.map((function(e,n){return t("polygon",{attrs:e,key:"polygon-".concat(n)})}))))))},register:function(t){for(var e in t){var n=t[e],i=n.paths,r=void 0===i?[]:i,c=n.d,s=n.polygons,u=void 0===s?[]:s,h=n.points;c&&r.push({d:c}),h&&u.push({points:h}),a[e]=o({},n,{paths:r,polygons:u})}},icons:a};function o(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach((function(e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})),t}var s=870711;function u(){return"va-".concat((s++).toString(16))}var h={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function l(t){return t.replace(/[<>"&]/g,(function(t){return h[t]||t}))}var d,f,p=c,v=(n("df9a"),n("2877")),m=Object(v["a"])(p,d,f,!1,null,null,null);e["default"]=m.exports},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("277d");var i=n("6b75");function r(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=n("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return r(t)||a(t)||Object(c["a"])(t)||o()}},"29f7":function(t,e,n){"use strict";var i=n("0874");i["default"].register({"regular/minus-square":{width:448,height:512,paths:[{d:"M108 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12h-232zM448 80v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM400 426v-340c0-3.3-2.7-6-6-6h-340c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}]}})},3019:function(t,e,n){"use strict";var i=n("0874");i["default"].register({circle:{width:512,height:512,paths:[{d:"M256 8c137 0 248 111 248 248s-111 248-248 248-248-111-248-248 111-248 248-248z"}]}})},3960:function(t,e,n){"use strict";var i=n("0874");i["default"].register({"regular/plus-square":{width:448,height:512,paths:[{d:"M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zM448 80v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM400 426v-340c0-3.3-2.7-6-6-6h-340c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}]}})},7442:function(t,e,n){},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),a=n("94ca"),c=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),h=n("c04e"),l=n("d039"),d=n("7c73"),f=n("241c").f,p=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,g="Number",y=r[g],b=y.prototype,_=s(d(b))==g,w=function(t){var e,n,i,r,a,c,o,s,u=h(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(a=u.slice(2),c=a.length,o=0;o<c;o++)if(s=a.charCodeAt(o),s<48||s>r)return NaN;return parseInt(a,i)}return+u};if(a(g,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var S,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(_?l((function(){b.valueOf.call(n)})):s(n)!=g)?u(new y(w(e)),n,x):w(e)},N=i?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)o(y,S=N[I])&&!o(x,S)&&v(x,S,p(y,S));x.prototype=b,b.constructor=x,c(r,g,x)}},df9a:function(t,e,n){"use strict";var i=n("7442"),r=n.n(i);r.a},ff65:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"font-size":"0.9em"}},[t._l(t.category_hierarchy,(function(e){return t.parents_expanded(e)?n("div",{staticStyle:{padding:"0.1em 0 0.1em 0"},on:{click:function(n){return t.toggle(e)}}},[n("span",{style:"padding-left: "+1.4*e.depth+"em"},[e.children.length>0?n("span",{staticStyle:{opacity:"0.8"}},[t.expanded.has(e.name_pretty)?n("b",[n("icon",{staticClass:"mr-1",attrs:{name:"regular/minus-square",scale:"0.8"}})],1):n("b",[n("icon",{staticClass:"mr-1",attrs:{name:"regular/plus-square",scale:"0.8"}})],1)]):n("span",{staticStyle:{opacity:"0.6"}},[n("icon",{staticStyle:{"margin-left":"1em","margin-right":"1.22em"},attrs:{name:"circle",scale:"0.4"}})],1),t._v(t._s(e.subname))]),n("span",{staticStyle:{float:"right"}},[t.show_perc?n("span",[t._v(t._s(Math.round(100*e.duration/t.total_duration,1))+"%")]):n("span",[t._v(t._s(t._f("friendlyduration")(e.duration)))])])]):t._e()})),n("hr"),n("b-checkbox",{attrs:{size:"sm"},model:{value:t.show_perc,callback:function(e){t.show_perc=e},expression:"show_perc"}},[t._v("Show percent")])],2)},r=[],a=(n("4de4"),n("7db0"),n("a15b"),n("d81d"),n("fb6a"),n("b0c0"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("3019"),n("3960"),n("29f7"),n("2ef0")),c=n("0a4f");function o(t,e){return a.filter(e,(function(e){return a.isEqual(e.parent,t.name)}))}function s(t,e){var n=o(t,e);a.map(n,(function(t){return s(t,e)})),t.children=a.sortBy(n,(function(t){return-t.duration}))}function u(t){return t.children?a.flattenDeep([t,a.map(t.children,(function(t){return u(t)}))]):[]}var h={name:"aw-categorytree",props:{events:{type:Array}},data:function(){return{expanded:new Set,show_perc:!1}},computed:{total_duration:function(){var t=a.filter(this.category_hierarchy,(function(t){return 0==t.depth}));return a.sumBy(t,(function(t){return t.duration}))},category_hierarchy:function(){var t=JSON.parse(JSON.stringify(this.events)),e=c.build_category_hierarchy(a.map(t,(function(t){return{name:t.data["$category"]}}))),n=c.flatten_category_hierarchy(e).map((function(e){return e.duration=a.sumBy(t.filter((function(t){var n=t.data["$category"].slice(0,e.name.length);return a.isEqual(e.name,n)})),(function(t){return t.duration})),e})),i=a.sortBy(a.filter(n,(function(t){return 0==t.depth})),(function(t){return-t.duration}));return a.map(i,(function(t){return s(t,n)})),n=a.flatten(a.map(i,(function(t){return u(t)}))),n}},methods:{get_category:function(t){return a.find(this.category_hierarchy,(function(e){return a.isEqual(e.name,t)}))},toggle:function(t){this.expanded.has(t.name_pretty)?this.expanded["delete"](t.name_pretty):this.expanded.add(t.name_pretty),this.expanded=new Set(this.expanded)},parents_expanded:function(t){return void 0===t||!t.parent||this.parents_expanded(this.get_category(t.parent))&&this.expanded.has(t.parent.join(">"))}}},l=h,d=n("2877"),f=Object(d["a"])(l,i,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-3b564b71.17987f70.js.map