(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538d674a"],{"581b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",["range"==t.mode&&t.invalidDaterange?a("b-alert",{attrs:{variant:"warning",show:""}},[t._v("The selected date range is invalid. The second date must be greater than the first date.")]):t._e(),"range"==t.mode&&t.daterangeTooLong?a("b-alert",{attrs:{variant:"warning",show:""}},[t._v("The selected date range is too long. The maximum is "+t._s(t.maxDuration/86400)+" days.")]):t._e(),a("table",[a("tr",[t._m(0),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{id:"mode"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.mode=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"last_duration"}},[t._v("Last duration")]),a("option",{attrs:{value:"range"}},[t._v("Date range")])])])]),"last_duration"==t.mode?a("tr",[t._m(1),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],attrs:{id:"duration"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.duration=e.target.multiple?a:a[0]},t.valueChanged]}},[a("option",{domProps:{value:900}},[t._v("15min")]),a("option",{domProps:{value:1800}},[t._v("30min")]),a("option",{domProps:{value:3600}},[t._v("1h")]),a("option",{domProps:{value:7200}},[t._v("2h")]),a("option",{domProps:{value:14400}},[t._v("4h")]),a("option",{domProps:{value:21600}},[t._v("6h")]),a("option",{domProps:{value:43200}},[t._v("12h")]),a("option",{domProps:{value:86400}},[t._v("24h")])])])]):t._e(),"range"==t.mode?a("tr",[a("th",{staticClass:"pr-2"},[t._v("Range:")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.start,expression:"start"}],attrs:{type:"date"},domProps:{value:t.start},on:{input:function(e){e.target.composing||(t.start=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.end,expression:"end"}],attrs:{type:"date"},domProps:{value:t.end},on:{input:function(e){e.target.composing||(t.end=e.target.value)}}}),a("button",{staticClass:"btn btn-outline-dark btn-sm",attrs:{type:"button",disabled:"range"==t.mode&&(t.invalidDaterange||t.emptyDaterange||t.daterangeTooLong)},on:{click:t.valueChanged}},[t._v("Update")])])]):t._e()])],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticClass:"pr-2"},[a("label",{attrs:{for:"mode"}},[t._v("Interval mode:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticClass:"pr-2"},[a("label",{attrs:{for:"duration"}},[t._v("Show last:")])])}],o=(a("a9e3"),a("c1df")),i=a.n(o),s={name:"input-timeinterval",props:{defaultDuration:{type:Number,default:3600},maxDuration:{type:Number,default:null}},data:function(){return{duration:JSON.parse(JSON.stringify(this.defaultDuration)),mode:"last_duration",start:null,end:null}},computed:{value:{get:function(){return"range"==this.mode&&this.start&&this.end?[i()(this.start),i()(this.end)]:[i()().subtract(this.duration,"seconds"),i()()]}},emptyDaterange:function(){return!(this.start&&this.end)},invalidDaterange:function(){return i()(this.start)>=i()(this.end)},daterangeTooLong:function(){return i()(this.start).add(this.maxDuration,"seconds").isBefore(i()(this.end))}},mounted:function(){this.valueChanged()},methods:{valueChanged:function(){"last_duration"!=this.mode&&(this.emptyDaterange||this.invalidDaterange||this.daterangeTooLong)||this.$emit("input",this.value)}}},u=s,d=a("2877"),l=Object(d["a"])(u,n,r,!1,null,"5fe81294",null);e["default"]=l.exports},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),o=a("94ca"),i=a("6eeb"),s=a("5135"),u=a("c6b6"),d=a("7156"),l=a("c04e"),c=a("d039"),v=a("7c73"),m=a("241c").f,p=a("06cf").f,h=a("9bf2").f,f=a("58a8").trim,g="Number",_=r[g],b=_.prototype,N=u(v(b))==g,I=function(t){var e,a,n,r,o,i,s,u,d=l(t,!1);if("string"==typeof d&&d.length>2)if(d=f(d),e=d.charCodeAt(0),43===e||45===e){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+d}for(o=d.slice(2),i=o.length,s=0;s<i;s++)if(u=o.charCodeAt(s),u<48||u>r)return NaN;return parseInt(o,n)}return+d};if(o(g,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var w,y=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof y&&(N?c((function(){b.valueOf.call(a)})):u(a)!=g)?d(new _(I(e)),a,y):I(e)},E=n?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;E.length>T;T++)s(_,w=E[T])&&!s(y,w)&&h(y,w,p(_,w));y.prototype=b,b.constructor=y,i(r,g,y)}}}]);
//# sourceMappingURL=chunk-538d674a.e516466e.js.map