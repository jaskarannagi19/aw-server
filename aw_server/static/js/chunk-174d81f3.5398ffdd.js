(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-174d81f3"],{c740:function(t,e,n){"use strict";var r=n("23e7"),s=n("b727").findIndex,a=n("44d2"),i=n("ae40"),u="findIndex",c=!0,o=i(u);u in[]&&Array(1)[u]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!o},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(u)},c92b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(t._s(t.id))]),n("table",[n("tr",[n("th",[t._v("Type:")]),n("td",[t._v(t._s(t.bucket.type))])]),n("tr",[n("th",[t._v("Client:")]),n("td",[t._v(t._s(t.bucket.client))])]),n("tr",[n("th",[t._v("Hostname:")]),n("td",[t._v(t._s(t.bucket.hostname))])]),n("tr",[n("th",[t._v("Created:")]),n("td",[t._v(t._s(t._f("iso8601")(t.bucket.created)))])]),t.bucket.metadata?n("tr",[n("th",[t._v("First/last event:")]),n("td",[t._v(t._s(t.bucket.metadata.start)+" / "+t._s(t.bucket.metadata.end))])]):t._e(),n("tr",[n("th",[t._v("Eventcount:")]),n("td",[t._v(t._s(t.eventcount))])])]),n("input-timeinterval",{attrs:{maxDuration:t.maxDuration},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}}),n("vis-timeline",{attrs:{buckets:[t.bucket_with_events],showRowLabels:!1}}),n("aw-eventlist",{attrs:{bucket_id:t.id,events:t.events,editable:""},on:{save:t.updateEvent}})],1)},s=[],a=(n("c740"),n("96cf"),n("1da1")),i={name:"Bucket",props:{id:String},data:function(){return{bucket_with_events:{events:[]},events:[],eventcount:"?",daterange:null,maxDuration:2678400}},computed:{bucket:function(){return this.$store.getters["buckets/getBucket"](this.id)||{}}},watch:{daterange:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getEvents(this.id);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("buckets/ensureBuckets");case 2:return t.next=4,this.getEventCount(this.id);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getEvents:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("buckets/getBucketWithEvents",{id:e,start:this.daterange[0].format(),end:this.daterange[1].format()});case 2:this.bucket_with_events=t.sent,this.events=this.bucket_with_events.events;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getEventCount:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$aw.countEvents(e);case 2:this.eventcount=t.sent.data;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),updateEvent:function(t){var e=this.events.findIndex((function(e){return e.id==t.id}));-1!=e?this.$set(this.events,e,t):console.error(":(")}}},u=i,c=n("2877"),o=Object(c["a"])(u,r,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-174d81f3.5398ffdd.js.map