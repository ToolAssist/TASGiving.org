(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0dbc":function(t,s,e){"use strict";e("c252")},"3fba":function(t,s,e){"use strict";e("f9de")},"5c34":function(t){t.exports={data:{timezone:"America/Los_Angeles",website:"https://tasgiving.org/",description:null},events:[{title:"TASGiving 2020",description:"Our First Year!",raised:"$10,085.00",runCount:44,runnerCount:29,runtime:{date:"01/13/2021",days:2,hours:9,minutes:25,seconds:13}}]}},c252:function(t,s,e){},e4bb:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("main",[e("b-container",{staticClass:"boxes"},[e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{md:"6"}},[e("b-card",{staticClass:"history-card",attrs:{"text-variant":"white"}},[e("b-card-title",{staticClass:"text-center"},[t._v(" History ")]),e("small",[t._v(" Look how well we did at previous events! ")]),e("HistoryComponent")],1)],1)],1)],1)],1)},i=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.historyItems,(function(s,n){return e("div",{key:n,staticClass:"event"},[e("div",{staticClass:"title"},[t._v(t._s(s.title))]),e("div",{staticClass:"date"},[t._v(t._s(s.runtime.date))]),e("div",{staticClass:"description"},[t._v(t._s(s.description))]),e("div",{staticClass:"detail"},[e("span",{staticClass:"title"},[t._v("Raised")]),t._v(t._s(s.raised)+" ")]),e("div",{staticClass:"detail"},[e("span",{staticClass:"title"},[t._v("Runs")]),t._v(t._s(s.runCount)+" ")]),e("div",{staticClass:"detail"},[e("span",{staticClass:"title"},[t._v("Runners")]),t._v(t._s(s.runnerCount)+" ")]),e("div",{staticClass:"detail"},[e("span",{staticClass:"title"},[t._v("Length")]),t._v(" "+t._s(s.runtime.days)+" days "+t._s(s.runtime.hours)+" hours "+t._s(s.runtime.minutes)+" minutes "+t._s(s.runtime.seconds)+" seconds ")])])})),0)},r=[],o=e("5c34"),c={name:"History",components:{},data:function(){return{historyItems:o.events}}},u=c,l=(e("3fba"),e("2877")),d=Object(l["a"])(u,a,r,!1,null,"a363a590",null),v=d.exports,_={name:"History",components:{HistoryComponent:v},props:{phase:{type:String,default:"hype"}},methods:{openLinkNewTab:function(t){var s=window.open(t,"_blank");s.focus()}}},p=_,m=(e("0dbc"),Object(l["a"])(p,n,i,!1,null,"eb1eddb4",null));s["default"]=m.exports},f9de:function(t,s,e){}}]);