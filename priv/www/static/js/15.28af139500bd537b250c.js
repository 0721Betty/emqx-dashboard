webpackJsonp([15],{D37f:function(e,t){},JWuK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),s=r.n(a),l=r("exGp"),n=r.n(l),o={name:"RuleView",components:{RuleActions:r("eDC2").a},props:{},data:function(){return{record:{actions:[{id:"inspect_1562305995013447740",metrics:[{failed:0,node:"emqx@127.0.0.1",success:0}],name:"inspect",params:{}}],description:"",enabled:!0,for:["message.publish"],id:"rule:b35e3e59",metrics:[{matched:0,node:"emqx@127.0.0.1",speed:0,speed_last5m:0,speed_max:0}],rawsql:"SELECT\n  *\nFROM\n  \"message.publish\"\nWHERE\n  topic =~ '#'"}}},methods:{loadData:function(){var e=this;return n()(s.a.mark(function t(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.id){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$httpGet("/rules/"+e.id);case 4:r=t.sent,e.record=r.data;case 6:case"end":return t.stop()}},t,e)}))()}},created:function(){this.loadData()},computed:{id:function(){return this.$route.params.id}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rule-view"},[r("div",{staticClass:"page-title"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/rules"}}},[e._v("\n        "+e._s(e.$t("rule.message_rule"))+"\n      ")]),e._v(" "),r("el-breadcrumb-item",{staticClass:"breadcrumb-name"},[e._v(e._s(e.id))])],1)],1),e._v(" "),r("el-card",{staticClass:"el-card--self"},[r("div",{staticClass:"config-dialog",attrs:{slot:"header"},slot:"header"},[e._v("\n      "+e._s(e.$t("rule.metrics"))+"\n    ")]),e._v(" "),r("el-table",{attrs:{border:"",data:e.record.metrics}},[r("el-table-column",{attrs:{prop:"node",label:e.$t("rule.node")}}),e._v(" "),r("el-table-column",{attrs:{prop:"matched",sortable:"",label:e.$t("rule.rule_matched_1")}}),e._v(" "),r("el-table-column",{attrs:{prop:"speed",sortable:"",label:e.$t("rule.speed_current")}}),e._v(" "),r("el-table-column",{attrs:{prop:"speed_max",label:e.$t("rule.speed_max_1")}}),e._v(" "),r("el-table-column",{attrs:{prop:"speed_last5m",label:e.$t("rule.speed_last5m_1")}})],1)],1),e._v(" "),r("el-card",{staticClass:"el-card--self"},[r("div",{staticClass:"config-dialog",attrs:{slot:"header"},slot:"header"},[e._v("\n      "+e._s(e.$t("rule.basic_info"))+"\n    ")]),e._v(" "),r("el-form",{attrs:{model:e.record,"label-position":"left","label-width":"100px","label-suffix":":"}},[r("el-form-item",{attrs:{label:e.$t("rule.trigger_events")}},[r("span",[e._v(e._s(e.record.for.join(",")))])]),e._v(" "),r("el-form-item",{attrs:{label:e.$t("rule.description")}},[r("span",[e._v(e._s(e.record.description))])]),e._v(" "),r("el-form-item",{attrs:{label:e.$t("rule.rule_sql")}},[r("code",[e._v(e._s(e.record.rawsql))])])],1)],1),e._v(" "),r("el-card",{staticClass:"el-card--self"},[r("div",{staticClass:"config-dialog",attrs:{slot:"header"},slot:"header"},[e._v("\n      "+e._s(e.$t("rule.set_action"))+"\n    ")]),e._v(" "),r("rule-actions",{attrs:{record:e.record,operations:[]}})],1)],1)},staticRenderFns:[]};var i=r("VU/8")(o,c,!1,function(e){r("D37f")},null,null);t.default=i.exports}});