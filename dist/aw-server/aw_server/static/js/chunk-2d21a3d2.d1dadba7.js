(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"background-color":"#665566"}},[e.$isAndroid?i("b-alert",{attrs:{show:""}},[i("b",[e._v("Note:")]),e._v(" ActivityWatch on Android is in a very early stage of development. There will be bugs, but we hope you bear with us as we refine things and get it on par with the desktop version of ActivityWatch (which you should try!).")]):e._e(),i("h3",[e._v("Welcome to Weekly ")]),i("p",[e._v("This is the Alpha test. Please provide the information below. This information will never be shared with anyone else.")]),i("hr"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"What is your name?"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{placeholder:"What is your age?"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.from,expression:"from"}],attrs:{placeholder:"Where you are from?"},domProps:{value:e.from},on:{input:function(t){t.target.composing||(e.from=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.timeskills,expression:"timeskills"}],attrs:{placeholder:"How would you describe your time management skills?"},domProps:{value:e.timeskills},on:{input:function(t){t.target.composing||(e.timeskills=t.target.value)}}}),i("p",[i("span",[e._v("The following questions help us send you better notifications.")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.productive_websites,expression:"productive_websites"}],attrs:{placeholder:"What websites would you like to spend less time on?(up to 3)"},domProps:{value:e.productive_websites},on:{input:function(t){t.target.composing||(e.productive_websites=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.unproductive_websites,expression:"unproductive_websites"}],attrs:{placeholder:"What websites would you like to spend more time on?"},domProps:{value:e.unproductive_websites},on:{input:function(t){t.target.composing||(e.unproductive_websites=t.target.value)}}}),i("b-button",{attrs:{variant:"success"},on:{click:function(t){return e.submit()}}},[i("span",{staticClass:"d-none d-md-inline"},[e._v(" Submit")])])],1)])]),i("hr")],1)},s=[],n=(i("b0c0"),i("96cf"),i("1da1")),a=i("bc3a"),r=i.n(a),u={name:"Home",methods:{submit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={name:this.name,age:this.age,from:this.from,timeskills:this.timeskills,productive_websites:this.productive_websites,unproductive_websites:this.unproductive_websites},e.next=3,r.a.post("api/0/userinfo",t).then((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},l=u,c=i("2877"),m=Object(c["a"])(l,o,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.d1dadba7.js.map