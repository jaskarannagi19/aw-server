(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32f94bc2"],{4706:function(t,a,e){var i=e("b190"),o=i("range",e("5a3a"));o.placeholder=e("c2e4"),t.exports=o},a444:function(t,a,e){"use strict";var i=e("dff4"),o=e.n(i);o.a},dff4:function(t,a,e){},fb01:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.isPollVisible?e("b-alert",{attrs:{variant:"info",show:""}},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){t.isPollVisible=!1}}},[t._v("×")]),e("form",[e("p",[t._v("Hey there! You've been using ActivityWatch for a while. How likely are you to recommend it to a friend/colleague on a scale 1-10? (with 10 being the most likely)")]),e("div",{staticClass:"radio-options"},t._l(t.options,(function(a){return e("div",{staticClass:"option-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.rating,expression:"rating"}],attrs:{type:"radio",id:"option"+a,name:"rating"},domProps:{value:a,checked:t._q(t.rating,a)},on:{change:function(e){t.rating=a}}}),e("br"),e("label",{staticStyle:{display:"block"},attrs:{for:"option"+a}},[t._v(t._s(a))])])})),0)]),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("a",{attrs:{href:"#"},on:{click:t.dontShowAgain}},[t._v("Don't show again")]),e("input",{attrs:{type:"submit",value:"Submit"},on:{click:t.submit}})])]):t._e(),t.isPosFollowUpVisible?e("b-alert",{attrs:{variant:"info",show:""}},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){t.isPosFollowUpVisible=!1}}},[t._v("×")]),t._v("We're really happy to hear you are enjoying ActivityWatch, but we think we can do even better! To help us help you, here are a few things you can do:"),e("ul",[e("li",[t._v("Support us on "),e("a",{attrs:{href:"https://www.patreon.com/erikbjare"}},[t._v("Patreon")]),t._v(" or "),e("a",{attrs:{href:"https://opencollective.com/activitywatch"}},[t._v("Open Collective")]),t._v(" (or by "),e("a",{attrs:{href:"https://activitywatch.net/donate/"}},[t._v("other donation methods")]),t._v(").")]),e("li",[t._v("Using ActivityWatch at work? Consider asking your employer to support us!")]),e("li",[t._v("Post about it on social media and tell your friends and colleagues! We are on "),e("a",{attrs:{href:"https://twitter.com/ActivityWatchIt"}},[t._v("Twitter")]),t._v(" and "),e("a",{attrs:{href:"https://www.facebook.com/ActivityWatch"}},[t._v("Facebook")]),t._v(".")]),e("li",[t._v("Vote for new features on the "),e("a",{attrs:{href:"https://forum.activitywatch.net/c/features"}},[t._v("forum")]),t._v(".")]),e("li",[t._v("Rate us on "),e("a",{attrs:{href:"https://alternativeto.net/software/activitywatch/"}},[t._v("AlternativeTo")]),t._v(" and "),e("a",{attrs:{href:"https://play.google.com/store/apps/details?id=net.activitywatch.android"}},[t._v("Google Play Store")]),t._v(".")]),e("li",[t._v("Join our "),e("a",{attrs:{href:"https://discord.gg/vDskV9q"}},[t._v("Discord server")]),t._v(".")])])]):t._e(),t.isNegFollowUpVisible?e("b-alert",{attrs:{variant:"info",show:""}},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){t.isNegFollowUpVisible=!1}}},[t._v("×")]),t._v("We are sorry to hear that you did not like ActivityWatch, but we want to improve! We would be very thankful if you helped us by:"),e("ul",[e("li",[t._v("Fill out the "),e("a",{attrs:{href:"https://forms.gle/q2N9K5RoERBV8kqPA"}},[t._v("feedback form")]),t._v(".")]),e("li",[t._v("Vote for new features on the "),e("a",{attrs:{href:"https://forum.activitywatch.net/c/features"}},[t._v("forum")]),t._v(".")])])]):t._e()],1)},o=[],s=(e("e25e"),e("4706")),l=e.n(s),n=e("c1df"),r=e.n(n),c=10,h=604800,u=604800,v={name:"user-satisfaction-poll",data:function(){return{isPollVisible:!1,isPosFollowUpVisible:!1,isNegFollowUpVisible:!1,options:l()(1,c+1),rating:null,data:null}},mounted:function(){var t=r()();localStorage.initialTimestamp?t=r()(localStorage.initialTimestamp):localStorage.initialTimestamp=t,this.retrieveData(),this.data||(this.data={isEnabled:!0,nextPollTime:t.add(h,"seconds"),timesPollIsShown:0},this.saveData()),this.data.isEnabled&&(r()()>=r()(this.data.nextPollTime)&&(this.data.timesPollIsShown=this.data.timesPollIsShown+1,this.isPollVisible=!0,this.data.nextPollTime=r()().add(u,"seconds")),this.data.timesPollIsShown>2&&(this.data.isEnabled=!1),this.saveData())},methods:{retrieveData:function(){if(localStorage.getItem("userSatisfactionPollData"))try{this.data=JSON.parse(localStorage.getItem("userSatisfactionPollData"))}catch(t){console.error("userSatisfactionPollData not found in localStorage: ",t),localStorage.removeItem("userSatisfactionPollData")}},saveData:function(){var t=JSON.stringify(this.data);localStorage.setItem("userSatisfactionPollData",t)},submit:function(){this.isPollVisible=!1,this.data.isEnabled=!1,this.saveData(),parseInt(this.rating)>=6?this.isPosFollowUpVisible=!0:this.isNegFollowUpVisible=!0},dontShowAgain:function(){this.isPollVisible=!1,this.data.isEnabled=!1,this.saveData()}}},d=v,f=(e("a444"),e("2877")),p=Object(f["a"])(d,i,o,!1,null,"6e9d9f1c",null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-32f94bc2.f6a8a89d.js.map