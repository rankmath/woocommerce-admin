(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[0],{564:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var a=r(0),n=r(49),o=r(127),c=r.n(o),i=r(28),s=c()(i.b),l=function(e){var t=s.getCurrencyConfig(),r=Object(n.applyFilters)("woocommerce_admin_report_currency",t,e);return c()(r)},u=Object(a.createContext)(s)},565:function(e,t,r){"use strict";var a=r(0),n=r(2),o=r(1),c=r.n(o),i=r(34);function s(e){var t=e.className,r=Object(n.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),o=Object(n.__)("Reload","woocommerce-admin");return Object(a.createElement)(i.EmptyContent,{className:t,title:r,actionLabel:o,actionCallback:function(){window.location.reload()}})}s.propTypes={className:c.a.string},t.a=s},572:function(e,t,r){"use strict";var a=r(5),n=r.n(a),o=r(13),c=r.n(o),i=r(14),s=r.n(i),l=r(10),u=r.n(l),d=r(15),p=r.n(d),m=r(16),b=r.n(m),f=r(9),y=r.n(f),g=r(0),O=r(25),h=r(1),v=r.n(h),j=r(3),_=r(11),w=r(34),S=r(28),C=r(21),E=r(32),D=r(29),P=r(564),F=r(84);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=y()(e);if(t){var n=y()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return b()(this,r)}}var x=function(e){p()(r,e);var t=q(r);function r(){var e;return c()(this,r),(e=t.call(this)).onDateSelect=e.onDateSelect.bind(u()(e)),e.onFilterSelect=e.onFilterSelect.bind(u()(e)),e.onAdvancedFilterAction=e.onAdvancedFilterAction.bind(u()(e)),e}return s()(r,[{key:"onDateSelect",value:function(e){var t=this.props,r=t.report;(0,t.addCesSurveyForAnalytics)(),Object(D.recordEvent)("datepicker_update",k({report:r},Object(j.omitBy)(e,j.isUndefined)))}},{key:"onFilterSelect",value:function(e){var t=this.props,r=t.report,a=t.addCesSurveyForAnalytics,n=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(n)&&a();var o={report:r,filter:e.filter||"all"};"single_product"===e.filter&&(o.filter_variation=e["filter-variations"]||"all"),Object(D.recordEvent)("analytics_filter",o)}},{key:"onAdvancedFilterAction",value:function(e,t){var r=this.props,a=r.report,n=r.addCesSurveyForAnalytics;switch(e){case"add":Object(D.recordEvent)("analytics_filters_add",{report:a,filter:t.key});break;case"remove":Object(D.recordEvent)("analytics_filters_remove",{report:a,filter:t.key});break;case"filter":var o=Object.keys(t).reduce((function(e,r){return e[Object(j.snakeCase)(r)]=t[r],e}),{});n(),Object(D.recordEvent)("analytics_filters_filter",k({report:a},o));break;case"clear_all":Object(D.recordEvent)("analytics_filters_clear_all",{report:a});break;case"match":Object(D.recordEvent)("analytics_filters_all_any",{report:a,value:t.match})}}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.filters,a=e.path,n=e.query,o=e.showDatePicker,c=e.defaultDateRange,i=Object(E.getDateParamsFromQuery)(n,c),s=i.period,l=i.compare,u=i.before,d=i.after,p=Object(E.getCurrentDates)(n,c),m={period:s,compare:l,before:u,after:d,primaryDate:p.primary,secondaryDate:p.secondary},b=this.context;return Object(g.createElement)(w.ReportFilters,{query:n,siteLocale:S.c.siteLocale,currency:b.getCurrencyConfig(),path:a,filters:r,advancedFilters:t,showDatePicker:o,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:m,isoDateFormat:E.isoDateFormat})}}]),r}(g.Component);x.contextType=P.a,t.a=Object(O.compose)(Object(_.withSelect)((function(e){return{defaultDateRange:e(C.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range}})),Object(_.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(F.c).addCesSurveyForAnalytics}})))(x),x.propTypes={advancedFilters:v.a.object,filters:v.a.array,path:v.a.string.isRequired,query:v.a.object,showDatePicker:v.a.bool,report:v.a.string.isRequired}},573:function(e,t,r){"use strict";var a=r(23),n=r.n(a),o=r(20),c=r.n(o),i=r(5),s=r.n(i),l=r(18),u=r.n(l),d=r(26),p=r.n(d),m=r(0),b=r(4),f=r(49),y=r(25),g=r(138),O=r(11),h=r(3),v=r(2),j=r(1),_=r.n(j),w=r(34),S=r(22),C=r(538),E=r(21),D=r(29),P=function(){return Object(m.createElement)("svg",{role:"img","aria-hidden":"true",focusable:"false",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},Object(m.createElement)("path",{d:"M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"}))},F=r(565);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=r(84);r(643);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(e){var t=e.getHeadersContent,r=e.getRowsContent,a=e.getSummary,o=e.isRequesting,i=e.primaryData,l=e.tableData,d=e.endpoint,y=(e.itemIdField,e.tableQuery,e.compareBy),O=e.compareParam,j=e.searchBy,_=e.labels,R=void 0===_?{}:_,k=p()(e,["getHeadersContent","getRowsContent","getSummary","isRequesting","primaryData","tableData","endpoint","itemIdField","tableQuery","compareBy","compareParam","searchBy","labels"]),q=e.query,x=e.columnPrefsKey,T=l.items,N=l.query,Q=q[O]?Object(S.getIdsFromQuery)(q[y]):[],B=Object(m.useState)(Q),I=u()(B,2),M=I[0],L=I[1],U=Object(m.useRef)(null),V=Object(E.useUserPreferences)(),z=V.updateUserPreferences,H=p()(V,["updateUserPreferences"]);if(l.isError||i.isError)return Object(m.createElement)(F.a,null);var G=[];x&&(G=H&&H[x]?H[x]:G);var J,K,Y,W,X=function(e,n,o){var c=a?a(n,o):null;return Object(f.applyFilters)("woocommerce_admin_report_table",{endpoint:d,headers:t(),rows:r(e),totals:n,summary:c,items:T})},Z=function(t){var r=e.ids;L(t?r:[])},$=function(t,r){var a=e.ids;if(r)L(Object(h.uniq)([a[t]].concat(c()(M))));else{var n=M.indexOf(a[t]);L([].concat(c()(M.slice(0,n)),c()(M.slice(n+1))))}},ee=function(t){var r=e.ids,a=void 0===r?[]:r,n=-1!==M.indexOf(a[t]);return{display:Object(m.createElement)(b.CheckboxControl,{onChange:Object(h.partial)($,t),checked:n}),value:!1}},te=o||l.isRequesting||i.isRequesting,re=Object(h.get)(i,["data","totals"],{}),ae=T.totalResults||0,ne=ae>0,oe=Object(S.getSearchWords)(q).map((function(e){return{key:e,label:e}})),ce=T.data,ie=X(ce,re,ae),se=ie.headers,le=ie.rows,ue=ie.summary;y&&(le=le.map((function(e,t){return[ee(t)].concat(c()(e))})),se=[(J=e.ids,K=void 0===J?[]:J,Y=K.length>0,W=Y&&K.length===M.length,{cellClassName:"is-checkbox-column",key:"compare",label:Object(m.createElement)(b.CheckboxControl,{onChange:Z,"aria-label":Object(v.__)("Select All"),checked:W,disabled:!Y}),required:!0})].concat(c()(se)));var de=function(e,t){return t?e.map((function(e){return A(A({},e),{},{visible:e.required||!t.includes(e.key)})})):e.map((function(e){return A(A({},e),{},{visible:e.required||!e.hiddenByDefault})}))}(se,G);return Object(m.createElement)(m.Fragment,null,Object(m.createElement)("div",{className:"woocommerce-report-table__scroll-point",ref:U,"aria-hidden":!0}),Object(m.createElement)(w.TableCard,n()({className:"woocommerce-report-table",hasSearch:!!j,actions:[y&&Object(m.createElement)(w.CompareButton,{key:"compare",className:"woocommerce-table__compare",count:M.length,helpText:R.helpText||Object(v.__)("Check at least two items below to compare","woocommerce-admin"),onClick:function(){y&&Object(S.onQueryChange)("compare")(y,O,M.join(","))},disabled:!ne},R.compareButton||Object(v.__)("Compare","woocommerce-admin")),j&&Object(m.createElement)(w.Search,{allowFreeTextSearch:!0,inlineTags:!0,key:"search",onChange:function(t){var r,a=e.baseSearchQuery,n=e.addCesSurveyForCustomerSearch,o=t.map((function(e){return e.label.replace(",","%2C")}));o.length?(Object(S.updateQueryString)(A(A((r={filter:void 0},s()(r,O,void 0),s()(r,j,void 0),r),a),{},{search:Object(h.uniq)(o).join(",")})),n()):Object(S.updateQueryString)({search:void 0});Object(D.recordEvent)("analytics_table_filter",{report:d})},placeholder:R.placeholder||Object(v.__)("Search by item name","woocommerce-admin"),selected:oe,showClearButton:!0,type:j,disabled:!ne}),ne&&Object(m.createElement)(b.Button,{key:"download",className:"woocommerce-table__download-button",disabled:te,onClick:function(){var t=e.createNotice,r=e.startExport,a=e.title,n=Object.assign({},q),o=T.data,c=T.totalResults,i="browser";if(delete n.extended_info,n.search&&delete n[j],o&&o.length===c){var s=X(o,c),l=s.headers,u=s.rows;Object(C.downloadCSVFile)(Object(C.generateCSVFileName)(a,n),Object(C.generateCSVDataFromTable)(l,u))}else i="email",r(d,N).then((function(){return t("success",Object(v.sprintf)(Object(v.__)("Your %s Report will be emailed to you.","woocommerce-admin"),a))})).catch((function(e){return t("error",e.message||Object(v.sprintf)(Object(v.__)("There was a problem exporting your %s Report. Please try again.","woocommerce-admin"),a))}));Object(D.recordEvent)("analytics_table_download",{report:d,rows:c,downloadType:i})}},Object(m.createElement)(P,null),Object(m.createElement)("span",{className:"woocommerce-table__download-button__label"},R.downloadButton||Object(v.__)("Download","woocommerce-admin")))],headers:de,isLoading:te,onQueryChange:S.onQueryChange,onColumnsChange:function(e,t){var r=se.map((function(e){return e.key})).filter((function(t){return!e.includes(t)}));if(x){var a=s()({},x,r);z(a)}if(t){var n={report:d,column:t,status:e.includes(t)?"on":"off"};Object(D.recordEvent)("analytics_table_header_toggle",n)}},onSort:function(e,t){Object(S.onQueryChange)("sort")(e,t);var r={report:d,column:e,direction:t};Object(D.recordEvent)("analytics_table_sort",r)},onPageChange:function(e,t){U.current.scrollIntoView();var r=U.current.nextSibling.querySelector(".woocommerce-table__table"),a=g.focus.focusable.find(r);a.length&&a[0].focus(),t&&("goto"===t?Object(D.recordEvent)("analytics_table_go_to_page",{report:d,page:e}):Object(D.recordEvent)("analytics_table_page_click",{report:d,direction:t}))},rows:le,rowsPerPage:parseInt(N.per_page,10)||E.QUERY_DEFAULTS.pageSize,summary:ue,totalRows:ae},k)))};T.propTypes={baseSearchQuery:_.a.object,compareBy:_.a.string,compareParam:_.a.string,columnPrefsKey:_.a.string,endpoint:_.a.string,extendItemsMethodNames:_.a.shape({getError:_.a.string,isRequesting:_.a.string,load:_.a.string}),extendedItemsStoreName:_.a.string,getHeadersContent:_.a.func.isRequired,getRowsContent:_.a.func.isRequired,getSummary:_.a.func,itemIdField:_.a.string,labels:_.a.shape({compareButton:_.a.string,downloadButton:_.a.string,helpText:_.a.string,placeholder:_.a.string}),primaryData:_.a.object,searchBy:_.a.string,summaryFields:_.a.arrayOf(_.a.string),tableData:_.a.object.isRequired,tableQuery:_.a.object,title:_.a.string.isRequired},T.defaultProps={primaryData:{},tableData:{items:{data:[],totalResults:0},query:{}},tableQuery:{},compareParam:"filter",downloadable:!1,onSearch:h.noop,baseSearchQuery:{}};var N=[],Q={};t.a=Object(y.compose)(Object(O.withSelect)((function(e,t){var r=t.endpoint,a=t.getSummary,n=t.isRequesting,o=t.itemIdField,c=t.query,i=t.tableData,s=t.tableQuery,l=t.filters,u=t.advancedFilters,d=t.summaryFields;if(n||c.search&&(!c[r]||!c[r].length))return Q;var p=e(E.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,m="categories"===r?"products":r,b=a?Object(E.getReportChartData)({endpoint:m,dataType:"primary",query:c,select:e,filters:l,advancedFilters:u,defaultDateRange:p,fields:d}):Q,f=function(e,t,r){var a=t.extendItemsMethodNames,n=t.extendedItemsStoreName,o=t.itemIdField,c=r.items.data;if(!(Array.isArray(c)&&c.length&&a&&o))return r;var i=e(n),s=i[a.getError],l=i[a.isRequesting],u=i[a.load],d={include:c.map((function(e){return e[o]})).join(","),per_page:c.length},p=u(d),m=!!l&&l(d),b=!!s&&s(d),f=c.map((function(e){var t=Object(h.first)(p.filter((function(t){return e.id===t.id})));return k(k({},e),t)})),y=r.isRequesting||m,g=r.isError||b;return k(k({},r),{},{isRequesting:y,isError:g,items:k(k({},r.items),{},{data:f})})}(e,t,i||Object(E.getReportTableData)({endpoint:r,query:c,select:e,tableQuery:s,filters:l,advancedFilters:u,defaultDateRange:p}));return{primaryData:b,ids:o&&f.items.data?f.items.data.map((function(e){return e[o]})):N,tableData:f,query:c}})),Object(O.withDispatch)((function(e){var t=e(E.EXPORT_STORE_NAME).startExport;return{createNotice:e("core/notices").createNotice,startExport:t,addCesSurveyForCustomerSearch:e(q.c).addCesSurveyForCustomerSearch}})))(T)},643:function(e,t,r){}}]);