(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[29],{191:function(e,t,r){"use strict";var o=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.size,r=void 0===t?24:t,c=e.onClick,a=(e.icon,e.className),l=function(e,t){var r={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(e,["size","onClick","icon","className"]),i=["gridicon","gridicons-line-graph",a,!1,!1,!1].filter(Boolean).join(" ");return n.default.createElement("svg",o({className:i,height:r,width:r,onClick:c},l,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),n.default.createElement("g",null,n.default.createElement("path",{d:"M3 19h18v2H3zm3-3c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3L8.8 10H9c.5 0 1-.2 1.3-.5l2.7 1.4v.1c0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-.9-.5-1.3L17.8 7h.2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .5.2 1 .5 1.3L15.2 9H15c-.5 0-1 .2-1.3.5L11 8.2V8c0-1.1-.9-2-2-2s-2 .9-2 2c0 .5.2 1 .5 1.3L6.2 12H6c-1.1 0-2 .9-2 2s.9 2 2 2z"})))};var c,a=r(10),n=(c=a)&&c.__esModule?c:{default:c};e.exports=t.default},192:function(e,t,r){"use strict";var o=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=e.size,c=void 0===r?24:r,a=e.onClick,l=(e.icon,e.className),i=function(e,t){var r={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(e,["size","onClick","icon","className"]),s=["gridicon","gridicons-stats-alt",l,!1,!1,(t=c,!(0!=t%18)&&"needs-offset-y")].filter(Boolean).join(" ");return n.default.createElement("svg",o({className:s,height:c,width:c,onClick:a},i,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),n.default.createElement("g",null,n.default.createElement("path",{d:"M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-7h-4v14h4V3zm6 3h-4v11h4V6z"})))};var c,a=r(10),n=(c=a)&&c.__esModule?c:{default:c};e.exports=t.default},500:function(e,t,r){"use strict";var o=r(12),c=r.n(o),a=r(13),n=r.n(a),l=r(14),i=r.n(l),s=r(15),m=r.n(s),d=r(7),u=r.n(d),p=r(0),_=r(2),b=r(1),h=r.n(b),f=r(47),y=r(25);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=u()(e);if(t){var c=u()(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return m()(this,r)}}var w=function(e){i()(r,e);var t=O(r);function r(){return c()(this,r),t.apply(this,arguments)}return n()(r,[{key:"render",value:function(){var e,t,r,o,c=this.props,a=c.className,n=c.isError,l=c.isEmpty;return n?(e=Object(_.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),t=Object(_.__)("Reload","woocommerce-admin"),o=function(){window.location.reload()}):l&&(e=Object(_.__)("No results could be found for this date range.","woocommerce-admin"),t=Object(_.__)("View Orders","woocommerce-admin"),r=Object(y.f)("edit.php?post_type=shop_order")),Object(p.createElement)(f.EmptyContent,{className:a,title:e,actionLabel:t,actionURL:r,actionCallback:o})}}]),r}(p.Component);w.propTypes={className:h.a.string,isError:h.a.bool,isEmpty:h.a.bool},w.defaultProps={className:""},t.a=w},521:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return l}));var o=r(2),c=r(43),a=Object(c.applyFilters)("woocommerce_admin_revenue_report_charts",[{key:"gross_sales",label:Object(o.__)("Gross Sales","woocommerce-admin"),order:"desc",orderby:"gross_sales",type:"currency"},{key:"refunds",label:Object(o.__)("Returns","woocommerce-admin"),order:"desc",orderby:"refunds",type:"currency"},{key:"coupons",label:Object(o.__)("Coupons","woocommerce-admin"),order:"desc",orderby:"coupons",type:"currency"},{key:"net_revenue",label:Object(o.__)("Net Sales","woocommerce-admin"),orderby:"net_revenue",type:"currency"},{key:"taxes",label:Object(o.__)("Taxes","woocommerce-admin"),order:"desc",orderby:"taxes",type:"currency"},{key:"shipping",label:Object(o.__)("Shipping","woocommerce-admin"),orderby:"shipping",type:"currency"},{key:"total_sales",label:Object(o.__)("Total Sales","woocommerce-admin"),order:"desc",orderby:"total_sales",type:"currency"}]),n=Object(c.applyFilters)("woocommerce_admin_revenue_report_filters",[]),l=Object(c.applyFilters)("woocommerce_admin_revenue_report_advanced_filters",{})},522:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return m}));var o=r(2),c=r(43),a=r(501),n=Object(c.applyFilters)("woocommerce_admin_products_report_charts",[{key:"items_sold",label:Object(o.__)("Items Sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),l={label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Products","woocommerce-admin"),value:"all"},{label:Object(o.__)("Single Product","woocommerce-admin"),value:"select_product",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_product",chartMode:"item-comparison",path:["select_product"],settings:{type:"products",param:"products",getLabels:a.d,labels:{placeholder:Object(o.__)("Type to search for a product","woocommerce-admin"),button:Object(o.__)("Single Product","woocommerce-admin")}}}]},{label:Object(o.__)("Comparison","woocommerce-admin"),value:"compare-products",chartMode:"item-comparison",settings:{type:"products",param:"products",getLabels:a.d,labels:{helpText:Object(o.__)("Check at least two products below to compare","woocommerce-admin"),placeholder:Object(o.__)("Search for products to compare","woocommerce-admin"),title:Object(o.__)("Compare Products","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin")}}}]},i={showFilters:function(e){return"single_product"===e.filter&&!!e.products&&e["is-variable"]},staticParams:["filter","products","chartType","paged","per_page"],param:"filter-variations",filters:[{label:Object(o.__)("All Variations","woocommerce-admin"),chartMode:"item-comparison",value:"all"},{label:Object(o.__)("Single Variation","woocommerce-admin"),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:a.g,labels:{placeholder:Object(o.__)("Type to search for a variation","woocommerce-admin"),button:Object(o.__)("Single Variation","woocommerce-admin")}}}]},{label:Object(o.__)("Comparison","woocommerce-admin"),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:a.g,labels:{helpText:Object(o.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(o.__)("Search for variations to compare","woocommerce-admin"),title:Object(o.__)("Compare Variations","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin")}}}]},s=Object(c.applyFilters)("woocommerce_admin_products_report_filters",[l,i]),m=Object(c.applyFilters)("woocommerce_admin_products_report_advanced_filters",{})},524:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return i}));var o=r(2),c=r(43),a=r(501),n=Object(c.applyFilters)("woocommerce_admin_coupons_report_charts",[{key:"orders_count",label:Object(o.__)("Discounted Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"},{key:"amount",label:Object(o.__)("Amount","woocommerce-admin"),order:"desc",orderby:"amount",type:"currency"}]),l=Object(c.applyFilters)("woocommerce_admin_coupons_report_filters",[{label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Coupons","woocommerce-admin"),value:"all"},{label:Object(o.__)("Single Coupon","woocommerce-admin"),value:"select_coupon",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_coupon",chartMode:"item-comparison",path:["select_coupon"],settings:{type:"coupons",param:"coupons",getLabels:a.b,labels:{placeholder:Object(o.__)("Type to search for a coupon","woocommerce-admin"),button:Object(o.__)("Single Coupon","woocommerce-admin")}}}]},{label:Object(o.__)("Comparison","woocommerce-admin"),value:"compare-coupons",settings:{type:"coupons",param:"coupons",getLabels:a.b,labels:{title:Object(o.__)("Compare Coupon Codes","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin"),helpText:Object(o.__)("Check at least two coupon codes below to compare","woocommerce-admin")}}}]}]),i=Object(c.applyFilters)("woocommerce_admin_coupon_report_advanced_filters",{})},525:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return m}));var o=r(2),c=r(43),a=r(22),n=r(501),l=r(502),i=Object(c.applyFilters)("woocommerce_admin_taxes_report_charts",[{key:"total_tax",label:Object(o.__)("Total Tax","woocommerce-admin"),order:"desc",orderby:"total_tax",type:"currency"},{key:"order_tax",label:Object(o.__)("Order Tax","woocommerce-admin"),order:"desc",orderby:"order_tax",type:"currency"},{key:"shipping_tax",label:Object(o.__)("Shipping Tax","woocommerce-admin"),order:"desc",orderby:"shipping_tax",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),s=Object(c.applyFilters)("woocommerce_admin_taxes_report_filters",[{label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Taxes","woocommerce-admin"),value:"all"},{label:Object(o.__)("Comparison","woocommerce-admin"),value:"compare-taxes",chartMode:"item-comparison",settings:{type:"taxes",param:"taxes",getLabels:Object(n.e)(a.NAMESPACE+"/taxes",(function(e){return{id:e.id,key:e.id,label:Object(l.a)(e)}})),labels:{helpText:Object(o.__)("Check at least two tax codes below to compare","woocommerce-admin"),placeholder:Object(o.__)("Search for tax codes to compare","woocommerce-admin"),title:Object(o.__)("Compare Tax Codes","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin")}}}]}]),m=Object(c.applyFilters)("woocommerce_admin_taxes_report_advanced_filters",{})},526:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return _}));var o,c,a=r(8),n=r.n(a),l=r(44),i=r.n(l),s=r(2),m=r(43),d=r(501),u=Object(m.applyFilters)("woocommerce_admin_downloads_report_charts",[{key:"download_count",label:Object(s.__)("Downloads","woocommerce-admin"),type:"number"}]),p=Object(m.applyFilters)("woocommerce_admin_downloads_report_filters",[{label:Object(s.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(s.__)("All Downloads","woocommerce-admin"),value:"all"},{label:Object(s.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),_=Object(m.applyFilters)("woocommerce_admin_downloads_report_advanced_filters",{title:Object(s._x)("Downloads Match {{select /}} Filters","A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg","woocommerce-admin"),filters:{product:{labels:{add:Object(s.__)("Product","woocommerce-admin"),placeholder:Object(s.__)("Search","woocommerce-admin"),remove:Object(s.__)("Remove product filter","woocommerce-admin"),rule:Object(s.__)("Select a product filter match","woocommerce-admin"),title:Object(s.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(s.__)("Select product","woocommerce-admin")},rules:[{value:"includes",label:Object(s._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(s._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"products",getLabels:d.d}},customer:{labels:{add:Object(s.__)("Username","woocommerce-admin"),placeholder:Object(s.__)("Search customer username","woocommerce-admin"),remove:Object(s.__)("Remove customer username filter","woocommerce-admin"),rule:Object(s.__)("Select a customer username filter match","woocommerce-admin"),title:Object(s.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(s.__)("Select customer username","woocommerce-admin")},rules:[{value:"includes",label:Object(s._x)("Includes","customer usernames","woocommerce-admin")},{value:"excludes",label:Object(s._x)("Excludes","customer usernames","woocommerce-admin")}],input:{component:"Search",type:"usernames",getLabels:d.c}},order:{labels:{add:Object(s.__)("Order #","woocommerce-admin"),placeholder:Object(s.__)("Search order number","woocommerce-admin"),remove:Object(s.__)("Remove order number filter","woocommerce-admin"),rule:Object(s.__)("Select a order number filter match","woocommerce-admin"),title:Object(s.__)("{{title}}Order #{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(s.__)("Select order number","woocommerce-admin")},rules:[{value:"includes",label:Object(s._x)("Includes","order numbers","woocommerce-admin")},{value:"excludes",label:Object(s._x)("Excludes","order numbers","woocommerce-admin")}],input:{component:"Search",type:"orders",getLabels:(c=i()(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(","),e.next=3,r.map((function(e){return{id:e,label:"#"+e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})}},ip_address:{labels:{add:Object(s.__)("IP Address","woocommerce-admin"),placeholder:Object(s.__)("Search IP address","woocommerce-admin"),remove:Object(s.__)("Remove IP address filter","woocommerce-admin"),rule:Object(s.__)("Select an IP address filter match","woocommerce-admin"),title:Object(s.__)("{{title}}IP Address{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(s.__)("Select IP address","woocommerce-admin")},rules:[{value:"includes",label:Object(s._x)("Includes","IP addresses","woocommerce-admin")},{value:"excludes",label:Object(s._x)("Excludes","IP addresses","woocommerce-admin")}],input:{component:"Search",type:"downloadIps",getLabels:(o=i()(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(","),e.next=3,r.map((function(e){return{id:e,label:e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}}}})},582:function(e,t,r){},583:function(e,t,r){},610:function(e,t,r){"use strict";r.r(t);var o=r(5),c=r.n(o),a=r(18),n=r.n(a),l=r(34),i=r.n(l),s=r(0),m=r(2),d=r(6),u=r.n(d),p=r(191),_=r.n(p),b=r(192),h=r.n(b),f=r(1),y=r.n(f),O=r(4),w=r(47),j=r(22),v=r(29),g=r(27),k=r(12),x=r.n(k),C=r(13),S=r.n(C),P=r(9),E=r.n(P),T=r(14),F=r.n(T),N=r(15),R=r.n(N),I=r(7),B=r.n(I),M=r(21),L=r(25),D=r(30),q=r(503);r(582);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=B()(e);if(t){var c=B()(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return R()(this,r)}}var H=function(e){F()(r,e);var t=A(r);function r(){var e;x()(this,r);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return e=t.call.apply(t,[this].concat(a)),c()(E()(e),"handleChartClick",(function(){var t=e.props.selectedChart;Object(M.getHistory)().push(e.getChartPath(t))})),e}return S()(r,[{key:"getChartPath",value:function(e){return Object(M.getNewPath)({chart:e.key},"/analytics/"+e.endpoint,Object(M.getPersistedQuery)())}},{key:"render",value:function(){var e=this.props,t=e.charts,r=e.endpoint,o=e.path,c=e.query,a=e.selectedChart,n=e.filters;return a?Object(s.createElement)("div",{role:"presentation",className:"woocommerce-dashboard__chart-block-wrapper",onClick:this.handleChartClick},Object(s.createElement)(O.Card,{className:"woocommerce-dashboard__chart-block"},Object(s.createElement)(O.CardHeader,null,Object(s.createElement)(D.e,{variant:"title.small",as:"h3"},a.label)),Object(s.createElement)(O.CardBody,{size:null},Object(s.createElement)("a",{className:"screen-reader-text",href:Object(L.f)(this.getChartPath(a))},Object(m.sprintf)(Object(m.__)("%s Report","woocommerce-admin"),a.label)),Object(s.createElement)(q.a,{charts:t,endpoint:r,query:c,interactiveLegend:!1,legendPosition:"bottom",path:o,selectedChart:a,showHeaderControls:!1,filters:n})))):null}}]),r}(s.Component);H.propTypes={charts:y.a.array,endpoint:y.a.string.isRequired,path:y.a.string.isRequired,query:y.a.object.isRequired,selectedChart:y.a.object.isRequired};var z=H,V=r(43),U=r(532),G=r(522),J=r(521),Q=r(524),K=r(525),W=r(526);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={revenue:J.b,orders:U.b,products:G.b,coupons:Q.b,taxes:K.b,downloads:W.b},$=[{label:Object(m.__)("Total Sales","woocommerce-admin"),report:"revenue",key:"total_sales"},{label:Object(m.__)("Net Sales","woocommerce-admin"),report:"revenue",key:"net_revenue"},{label:Object(m.__)("Orders","woocommerce-admin"),report:"orders",key:"orders_count"},{label:Object(m.__)("Average Order Value","woocommerce-admin"),report:"orders",key:"avg_order_value"},{label:Object(m.__)("Items Sold","woocommerce-admin"),report:"products",key:"items_sold"},{label:Object(m.__)("Returns","woocommerce-admin"),report:"revenue",key:"refunds"},{label:Object(m.__)("Discounted Orders","woocommerce-admin"),report:"coupons",key:"orders_count"},{label:Object(m.__)("Gross discounted","woocommerce-admin"),report:"coupons",key:"amount"},{label:Object(m.__)("Total Tax","woocommerce-admin"),report:"taxes",key:"total_tax"},{label:Object(m.__)("Order Tax","woocommerce-admin"),report:"taxes",key:"order_tax"},{label:Object(m.__)("Shipping Tax","woocommerce-admin"),report:"taxes",key:"shipping_tax"},{label:Object(m.__)("Shipping","woocommerce-admin"),report:"revenue",key:"shipping"},{label:Object(m.__)("Downloads","woocommerce-admin"),report:"downloads",key:"download_count"}],ee=Object(V.applyFilters)("woocommerce_admin_dashboard_charts_filter",$.map((function(e){return Y(Y({},Z[e.report].find((function(t){return t.key===e.key}))),{},{label:e.label,endpoint:e.report})})));r(583);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=function(e){var t=e.controls,r=e.hiddenBlocks,o=e.isFirst,c=e.isLast,a=e.onMove,l=e.onRemove,d=e.onTitleBlur,p=e.onTitleChange,b=e.onToggleHiddenBlock,f=e.path,y=e.title,k=e.titleInput,x=e.filters,C=Object(j.useUserPreferences)(),S=C.updateUserPreferences,P=i()(C,["updateUserPreferences"]),E=Object(s.useState)(P.dashboard_chart_type||"line"),T=n()(E,2),F=T[0],N=T[1],R=Object(s.useState)(P.dashboard_chart_interval||"day"),I=n()(R,2),B=I[0],M=I[1],L=re(re({},e.query),{},{chartType:F,interval:B}),D=function(e){return function(){N(e),S({dashboard_chart_type:e}),Object(g.recordEvent)("dash_charts_type_toggle",{chart_type:e})}};return Object(s.createElement)("div",{className:"woocommerce-dashboard__dashboard-charts"},Object(s.createElement)(w.SectionHeader,{title:y||Object(m.__)("Charts","woocommerce-admin"),menu:Object(s.createElement)(w.EllipsisMenu,{label:Object(m.__)("Choose which charts to display","woocommerce-admin"),renderContent:function(e){var n=e.onToggle;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(w.MenuTitle,null,Object(m.__)("Charts","woocommerce-admin")),function(e){var t=e.hiddenBlocks,r=e.onToggleHiddenBlock;return ee.map((function(e){var o=e.endpoint+"_"+e.key,c=!t.includes(o);return Object(s.createElement)(w.MenuItem,{checked:c,isCheckbox:!0,isClickable:!0,key:e.endpoint+"_"+e.key,onInvoke:function(){r(o)(),Object(g.recordEvent)("dash_charts_chart_toggle",{status:c?"off":"on",key:o})}},e.label)}))}({hiddenBlocks:r,onToggleHiddenBlock:b}),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(s.createElement)(t,{onToggle:n,onMove:a,onRemove:l,isFirst:o,isLast:c,onTitleBlur:d,onTitleChange:p,titleInput:k}))}}),className:"has-interval-select"},function(e){var t=e.chartInterval,r=e.setInterval,o=e.query,c=Object(v.getAllowedIntervalsForQuery)(o);if(!c||c.length<1)return null;var a={hour:Object(m.__)("By hour","woocommerce-admin"),day:Object(m.__)("By day","woocommerce-admin"),week:Object(m.__)("By week","woocommerce-admin"),month:Object(m.__)("By month","woocommerce-admin"),quarter:Object(m.__)("By quarter","woocommerce-admin"),year:Object(m.__)("By year","woocommerce-admin")};return Object(s.createElement)(O.SelectControl,{className:"woocommerce-chart__interval-select",value:t,options:c.map((function(e){return{value:e,label:a[e]}})),"aria-label":"Chart period",onChange:r})}({chartInterval:B,setInterval:function(e){M(e),S({dashboard_chart_interval:e}),Object(g.recordEvent)("dash_charts_interval",{interval:e})},query:L}),Object(s.createElement)(O.NavigableMenu,{className:"woocommerce-chart__types",orientation:"horizontal",role:"menubar"},Object(s.createElement)(O.Button,{className:u()("woocommerce-chart__type-button",{"woocommerce-chart__type-button-selected":!L.chartType||"line"===L.chartType}),title:Object(m.__)("Line chart","woocommerce-admin"),"aria-checked":"line"===L.chartType,role:"menuitemradio",tabIndex:"line"===L.chartType?0:-1,onClick:D("line")},Object(s.createElement)(_.a,null)),Object(s.createElement)(O.Button,{className:u()("woocommerce-chart__type-button",{"woocommerce-chart__type-button-selected":"bar"===L.chartType}),title:Object(m.__)("Bar chart","woocommerce-admin"),"aria-checked":"bar"===L.chartType,role:"menuitemradio",tabIndex:"bar"===L.chartType?0:-1,onClick:D("bar")},Object(s.createElement)(h.a,null)))),function(e){var t=e.hiddenBlocks,r=e.path,o=e.query,c=e.filters,a=ee.reduce((function(e,t){return void 0===e[t.endpoint]&&(e[t.endpoint]=[]),e[t.endpoint].push(t),e}),{});return Object(s.createElement)("div",{className:"woocommerce-dashboard__columns"},ee.map((function(e){return t.includes(e.endpoint+"_"+e.key)?null:Object(s.createElement)(z,{charts:a[e.endpoint],endpoint:e.endpoint,key:e.endpoint+"_"+e.key,path:r,query:o,selectedChart:e,filters:c})})))}({hiddenBlocks:r,path:f,query:L,filters:x}))};oe.propTypes={path:y.a.string.isRequired,query:y.a.object.isRequired};t.default=oe}}]);