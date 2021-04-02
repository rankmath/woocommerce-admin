(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[18],{491:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r.n(a),o=r(12),i=r.n(o),c=r(13),s=r.n(c),u=r(14),l=r.n(u),d=r(15),m=r.n(d),p=r(7),f=r.n(p),y=r(0),b=r(1),g=r.n(b),v=r(2),h=r(11),_=r(525),O=r(504),j=r(503),R=r(505),x=r(9),w=r.n(x),C=r(3),D=r(47),q=r(21),k=r(142),S=r(502),E=r(507),P=r(499);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=f()(e);if(t){var n=f()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return m()(this,r)}}var F=function(e){l()(r,e);var t=T(r);function r(){var e;return i()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(w()(e)),e.getRowsContent=e.getRowsContent.bind(w()(e)),e.getSummary=e.getSummary.bind(w()(e)),e}return s()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(v.__)("Tax Code","woocommerce-admin"),key:"tax_code",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(v.__)("Rate","woocommerce-admin"),key:"rate",isSortable:!0,isNumeric:!0},{label:Object(v.__)("Total Tax","woocommerce-admin"),key:"total_tax",isSortable:!0},{label:Object(v.__)("Order Tax","woocommerce-admin"),key:"order_tax",isSortable:!0},{label:Object(v.__)("Shipping Tax","woocommerce-admin"),key:"shipping_tax",isSortable:!0},{label:Object(v.__)("Orders","woocommerce-admin"),key:"orders_count",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0}]}},{key:"getRowsContent",value:function(e){var t=this,r=this.context,a=r.render,n=r.formatDecimal,o=r.getCurrencyConfig;return Object(C.map)(e,(function(e){var r=t.props.query,i=e.order_tax,c=e.orders_count,s=e.tax_rate,u=e.tax_rate_id,l=e.total_tax,d=e.shipping_tax,m=Object(S.a)(e),p=Object(q.getPersistedQuery)(r),f=Object(q.getNewPath)(p,"/analytics/orders",{filter:"advanced",tax_rate_includes:u});return[{display:Object(y.createElement)(D.Link,{href:f,type:"wc-admin"},m),value:m},{display:s.toFixed(2)+"%",value:s},{display:a(l),value:n(l)},{display:a(i),value:n(i)},{display:a(d),value:n(d)},{display:Object(k.formatValue)(o(),"number",c),value:c}]}))}},{key:"getSummary",value:function(e){var t=e.tax_codes,r=void 0===t?0:t,a=e.total_tax,n=void 0===a?0:a,o=e.order_tax,i=void 0===o?0:o,c=e.shipping_tax,s=void 0===c?0:c,u=e.orders_count,l=void 0===u?0:u,d=this.context,m=d.formatAmount,p=(0,d.getCurrencyConfig)();return[{label:Object(v._n)("tax code","tax codes",r,"woocommerce-admin"),value:Object(k.formatValue)(p,"number",r)},{label:Object(v.__)("total tax","woocommerce-admin"),value:m(n)},{label:Object(v.__)("order tax","woocommerce-admin"),value:m(i)},{label:Object(v.__)("shipping tax","woocommerce-admin"),value:m(s)},{label:Object(v._n)("order","orders",l,"woocommerce-admin"),value:Object(k.formatValue)(p,"number",l)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.filters,a=e.isRequesting,n=e.query;return Object(y.createElement)(E.a,{compareBy:"taxes",endpoint:"taxes",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["tax_codes","total_tax","order_tax","shipping_tax","orders_count"],isRequesting:a,itemIdField:"tax_rate_id",query:n,searchBy:"taxes",tableQuery:{orderby:n.orderby||"tax_rate_id"},title:Object(v.__)("Taxes","woocommerce-admin"),columnPrefsKey:"taxes_report_columns",filters:r,advancedFilters:t})}}]),r}(y.Component);F.contextType=P.a;var A=F,N=r(506),M=r(76);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=f()(e);if(t){var n=f()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return m()(this,r)}}var I=function(e){l()(r,e);var t=V(r);function r(){return i()(this,r),t.apply(this,arguments)}return s()(r,[{key:"getChartMeta",value:function(){var e="compare-taxes"===this.props.query.filter?"item-comparison":"time-comparison";return{itemsLabel:Object(v.__)("%d taxes","woocommerce-admin"),mode:e}}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.query,a=e.path,o=e.addCesSurveyForAnalytics,i=this.getChartMeta(),c=i.mode,s=i.itemsLabel;_.c[0].filters.find((function(e){return"compare-taxes"===e.value})).settings.onClick=o;var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);return"item-comparison"===c&&(u.segmentby="tax_rate_id"),Object(y.createElement)(y.Fragment,null,Object(y.createElement)(N.a,{query:r,path:a,filters:_.c,advancedFilters:_.a,report:"taxes"}),Object(y.createElement)(R.a,{charts:_.b,endpoint:"taxes",isRequesting:t,query:u,selectedChart:Object(O.a)(r.chart,_.b),filters:_.c,advancedFilters:_.a}),Object(y.createElement)(j.a,{charts:_.b,filters:_.c,advancedFilters:_.a,mode:c,endpoint:"taxes",query:u,path:a,isRequesting:t,itemsLabel:s,selectedChart:Object(O.a)(r.chart,_.b)}),Object(y.createElement)(A,{isRequesting:t,query:r,filters:_.c,advancedFilters:_.a}))}}]),r}(y.Component);I.propTypes={query:g.a.object.isRequired};t.default=Object(h.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(M.c).addCesSurveyForAnalytics}}))(I)},501:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return y})),r.d(t,"f",(function(){return b})),r.d(t,"h",(function(){return g})),r.d(t,"g",(function(){return v}));var a=r(23),n=r(26),o=r.n(n),i=r(3),c=r(21),s=r(22),u=r(25),l=r(502);function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,i="function"==typeof e?e(n):e,s=Object(c.getIdsFromQuery)(r);if(s.length<1)return Promise.resolve([]);var u={include:s.join(","),per_page:s.length};return o()({path:Object(a.addQueryArgs)(i,u)}).then((function(e){return e.map(t)}))}}d(s.NAMESPACE+"/products/attributes",(function(e){return{key:e.id,label:e.name}}));var m=d(s.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),p=d(s.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),f=d(s.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),y=d(s.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),b=d(s.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(l.a)(e)}}));function g(e){var t=e.attributes,r=e.name,a=Object(u.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(a)>-1)return r;var n=t.map((function(e){return e.option})).join(", ");return n?r+a+n:r}var v=d((function(e){var t=e.products;return t?s.NAMESPACE+"/products/".concat(t,"/variations"):s.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:g(e)}}))},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(2);function n(e){return[e.country,e.state,e.name||Object(a.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},503:function(e,t,r){"use strict";var a=r(5),n=r.n(a),o=r(12),i=r.n(o),c=r(13),s=r.n(c),u=r(14),l=r.n(u),d=r(15),m=r.n(d),p=r(7),f=r.n(p),y=r(0),b=r(2),g=r(20),v=r(75),h=r(11),_=r(3),O=r(1),j=r.n(O),R=r(47),x=r(22),w=r(29),C=r(499),D=r(500),q=r(21);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=f()(e);if(t){var n=f()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return m()(this,r)}}var P=function(e){l()(r,e);var t=E(r);function r(){return i()(this,r),t.apply(this,arguments)}return s()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(_.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),S({date:Object(v.format)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,n=e.selectedChart,o=e.defaultDateRange,i=Object(w.getIntervalForQuery)(t),c=Object(w.getCurrentDates)(t,o),s=c.primary,u=c.secondary;return r.data.intervals.map((function(e,r){var o=Object(w.getPreviousDate)(e.date_start,s.after,u.after,t.compare,i),c=a.data.intervals[r];return{date:Object(v.format)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:e.date_start,value:e.subtotals[n.key]||0},secondary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:o.format("YYYY-MM-DD HH:mm:ss"),value:c&&c.subtotals[n.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(_.get)(t,["data","totals",a.key],null),secondary:Object(_.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var n=this.props,o=n.emptySearchResults,i=n.filterParam,c=n.interactiveLegend,s=n.itemsLabel,u=n.legendPosition,l=n.path,d=n.query,m=n.selectedChart,p=n.showHeaderControls,f=n.primaryData,g=Object(w.getIntervalForQuery)(d),v=Object(w.getAllowedIntervalsForQuery)(d),h=Object(w.getDateFormatsForInterval)(g,f.data.intervals.length),_=o?Object(b.__)("No data for the current search","woocommerce-admin"):Object(b.__)("No data for the selected date range","woocommerce-admin"),O=this.context,j=O.formatAmount,C=O.getCurrencyConfig;return Object(y.createElement)(R.Chart,{allowedIntervals:v,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:_,filterParam:i,interactiveLegend:c,interval:g,isRequesting:t,itemsLabel:s,legendPosition:u,legendTotals:a,mode:e,path:l,query:d,screenReaderFormat:h.screenReaderFormat,showHeaderControls:p,title:m.label,tooltipLabelFormat:h.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&m.label||null,tooltipValueFormat:Object(x.getTooltipValueFormat)(m.type,j),chartType:Object(w.getChartTypeForQuery)(d),valueType:m.type,xFormat:h.xFormat,x2Format:h.x2Format,currency:C()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(y.createElement)(D.a,{isError:!0});var a=t||r.isRequesting,n=this.getItemChartData();return this.renderChart("item-comparison",a,n)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(y.createElement)(D.a,{isError:!0});var n=t||r.isRequesting||a.isRequesting,o=this.getTimeChartData(),i=this.getTimeChartTotals();return this.renderChart("time-comparison",n,o,i)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(y.Component);P.contextType=C.a,P.propTypes={filters:j.a.array,isRequesting:j.a.bool,itemsLabel:j.a.string,limitProperties:j.a.array,mode:j.a.string,path:j.a.string.isRequired,primaryData:j.a.object,query:j.a.object.isRequired,secondaryData:j.a.object,selectedChart:j.a.shape({key:j.a.string.isRequired,label:j.a.string.isRequired,order:j.a.oneOf(["asc","desc"]),orderby:j.a.string,type:j.a.oneOf(["average","number","currency"]).isRequired}).isRequired},P.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(g.compose)(Object(h.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.filters,o=t.isRequesting,i=t.limitProperties,c=t.query,s=t.advancedFilters,u=i||[a],l=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var n=t.slice(0),o=n.pop();if(o.showFilters(r,a)){var i=Object(q.flattenFilters)(o.filters),c=r[o.param]||o.defaultValue||"all";return Object(_.find)(i,{value:c})}return e(n,r,a)}(n,c),d=Object(_.get)(l,["settings","param"]),m=t.mode||function(e,t){if(e&&t){var r=Object(_.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(_.get)(e,["chartMode"])}return null}(l,c)||"time-comparison",p=e(x.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,f={mode:m,filterParam:d,defaultDateRange:p};if(o)return f;var y=u.some((function(e){return c[e]&&c[e].length}));if(c.search&&!y)return S(S({},f),{},{emptySearchResults:!0});var b=r&&r.map((function(e){return e.key})),g=Object(x.getReportChartData)({endpoint:a,dataType:"primary",query:c,select:e,limitBy:u,filters:n,advancedFilters:s,defaultDateRange:p,fields:b});if("item-comparison"===m)return S(S({},f),{},{primaryData:g});var v=Object(x.getReportChartData)({endpoint:a,dataType:"secondary",query:c,select:e,limitBy:u,filters:n,advancedFilters:s,defaultDateRange:p,fields:b});return S(S({},f),{},{primaryData:g,secondaryData:v})})))(P)},504:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(3);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(a.find)(t,{key:e});return r||t[0]}},505:function(e,t,r){"use strict";var a=r(12),n=r.n(a),o=r(13),i=r.n(o),c=r(14),s=r.n(c),u=r(15),l=r.n(u),d=r(7),m=r.n(d),p=r(0),f=r(2),y=r(20),b=r(11),g=r(1),v=r.n(g),h=r(21),_=r(47),O=r(142),j=r(22),R=r(29),x=r(27),w=r(500),C=r(499);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var q=function(e){s()(r,e);var t=D(r);function r(){return n()(this,r),t.apply(this,arguments)}return i()(r,[{key:"formatVal",value:function(e,t){var r=this.context,a=r.formatAmount,n=r.getCurrencyConfig;return"currency"===t?a(e):Object(O.formatValue)(n(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,a=r.emptySearchResults,n=r.summaryData.totals,o=n.primary?n.primary[e]:0,i=n.secondary?n.secondary[e]:0,c=a?0:o,s=a?0:i;return{delta:Object(O.calculateDelta)(c,s),prevValue:this.formatVal(s,t),value:this.formatVal(c,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,a=t.query,n=t.selectedChart,o=t.summaryData,i=t.endpoint,c=t.report,s=t.defaultDateRange,u=o.isError,l=o.isRequesting;if(u)return Object(p.createElement)(w.a,{isError:!0});if(l)return Object(p.createElement)(_.SummaryListPlaceholder,{numberOfItems:r.length});var d=Object(R.getDateParamsFromQuery)(a,s).compare;return Object(p.createElement)(_.SummaryList,null,(function(t){var a=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,s=t.orderby,u=t.label,l=t.type,m={chart:r};s&&(m.orderby=s),o&&(m.order=o);var y=Object(h.getNewPath)(m),b=n.key===r,g=e.getValues(r,l),v=g.delta,O=g.prevValue,j=g.value;return Object(p.createElement)(_.SummaryNumber,{key:r,delta:v,href:y,label:u,prevLabel:"previous_period"===d?Object(f.__)("Previous Period:","woocommerce-admin"):Object(f.__)("Previous Year:","woocommerce-admin"),prevValue:O,selected:b,value:j,onLinkClickCallback:function(){a&&a(),Object(x.recordEvent)("analytics_chart_tab_click",{report:c||i,key:r})}})}))}))}}]),r}(p.Component);q.propTypes={charts:v.a.array.isRequired,endpoint:v.a.string.isRequired,limitProperties:v.a.array,query:v.a.object.isRequired,selectedChart:v.a.shape({key:v.a.string.isRequired,label:v.a.string.isRequired,order:v.a.oneOf(["asc","desc"]),orderby:v.a.string,type:v.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:v.a.object,report:v.a.string},q.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},q.contextType=C.a,t.a=Object(y.compose)(Object(b.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.limitProperties,o=t.query,i=t.filters,c=t.advancedFilters,s=n||[a],u=s.some((function(e){return o[e]&&o[e].length}));if(o.search&&!u)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),d=e(j.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(j.getSummaryNumbers)({endpoint:a,query:o,select:e,limitBy:s,filters:i,advancedFilters:c,defaultDateRange:d,fields:l}),defaultDateRange:d}})))(q)},525:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return l}));var a=r(2),n=r(43),o=r(22),i=r(501),c=r(502),s=Object(n.applyFilters)("woocommerce_admin_taxes_report_charts",[{key:"total_tax",label:Object(a.__)("Total Tax","woocommerce-admin"),order:"desc",orderby:"total_tax",type:"currency"},{key:"order_tax",label:Object(a.__)("Order Tax","woocommerce-admin"),order:"desc",orderby:"order_tax",type:"currency"},{key:"shipping_tax",label:Object(a.__)("Shipping Tax","woocommerce-admin"),order:"desc",orderby:"shipping_tax",type:"currency"},{key:"orders_count",label:Object(a.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),u=Object(n.applyFilters)("woocommerce_admin_taxes_report_filters",[{label:Object(a.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(a.__)("All Taxes","woocommerce-admin"),value:"all"},{label:Object(a.__)("Comparison","woocommerce-admin"),value:"compare-taxes",chartMode:"item-comparison",settings:{type:"taxes",param:"taxes",getLabels:Object(i.e)(o.NAMESPACE+"/taxes",(function(e){return{id:e.id,key:e.id,label:Object(c.a)(e)}})),labels:{helpText:Object(a.__)("Check at least two tax codes below to compare","woocommerce-admin"),placeholder:Object(a.__)("Search for tax codes to compare","woocommerce-admin"),title:Object(a.__)("Compare Tax Codes","woocommerce-admin"),update:Object(a.__)("Compare","woocommerce-admin")}}}]}]),l=Object(n.applyFilters)("woocommerce_admin_taxes_report_advanced_filters",{})}}]);