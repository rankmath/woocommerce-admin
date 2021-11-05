(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[16],{484:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o(2),c=o(1),i=o.n(c),n=o(28),s=o(7),m=o(504),l=o(55);const{addCesSurveyForAnalytics:d}=Object(s.dispatch)(l.c),u=Object(n.applyFilters)("woocommerce_admin_variations_report_charts",[{key:"items_sold",label:Object(a.__)("Items sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(a.__)("Net sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(a.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),b=Object(n.applyFilters)("woocommerce_admin_variations_report_filters",[{label:Object(a.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter-variations",showFilters:()=>!0,filters:[{label:Object(a.__)("All variations","woocommerce-admin"),chartMode:"item-comparison",value:"all"},{label:Object(a.__)("Single variation","woocommerce-admin"),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:m.g,labels:{placeholder:Object(a.__)("Type to search for a variation","woocommerce-admin"),button:Object(a.__)("Single variation","woocommerce-admin")}}}]},{label:Object(a.__)("Comparison","woocommerce-admin"),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:m.g,labels:{helpText:Object(a.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(a.__)("Search for variations to compare","woocommerce-admin"),title:Object(a.__)("Compare Variations","woocommerce-admin"),update:Object(a.__)("Compare","woocommerce-admin")},onClick:d}},{label:Object(a.__)("Advanced filters","woocommerce-admin"),value:"advanced"}]}]),_=Object(n.applyFilters)("woocommerce_admin_variations_report_advanced_filters",{title:Object(a._x)("Variations match {{select /}} filters","A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin"),filters:{attribute:{allowMultiple:!0,labels:{add:Object(a.__)("Attribute","woocommerce-admin"),placeholder:Object(a.__)("Search attributes","woocommerce-admin"),remove:Object(a.__)("Remove attribute filter","woocommerce-admin"),rule:Object(a.__)("Select a product attribute filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select attributes","woocommerce-admin")},rules:[{value:"is",label:Object(a._x)("Is","product attribute","woocommerce-admin")},{value:"is_not",label:Object(a._x)("Is Not","product attribute","woocommerce-admin")}],input:{component:"ProductAttribute"}},category:{labels:{add:Object(a.__)("Categories","woocommerce-admin"),placeholder:Object(a.__)("Search categories","woocommerce-admin"),remove:Object(a.__)("Remove categories filter","woocommerce-admin"),rule:Object(a.__)("Select a category filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Category{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select categories","woocommerce-admin")},rules:[{value:"includes",label:Object(a._x)("Includes","categories","woocommerce-admin")},{value:"excludes",label:Object(a._x)("Excludes","categories","woocommerce-admin")}],input:{component:"Search",type:"categories",getLabels:m.a}},product:{labels:{add:Object(a.__)("Products","woocommerce-admin"),placeholder:Object(a.__)("Search products","woocommerce-admin"),remove:Object(a.__)("Remove products filter","woocommerce-admin"),rule:Object(a.__)("Select a product filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select products","woocommerce-admin")},rules:[{value:"includes",label:Object(a._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(a._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"variableProducts",getLabels:m.d}}}});var p=o(512),v=o(510),j=o(506),O=o(513),y=o(539),f=o(507);const w=e=>{const{itemsLabel:t,mode:o}=(({query:e})=>{const t="compare-variations"===e["filter-variations"]&&e.variations&&e.variations.split(",").length>1;return{compareObject:"variations",itemsLabel:Object(a.__)("%d variations","woocommerce-admin"),mode:t?"item-comparison":"time-comparison"}})(e),{path:c,query:i,isError:n,isRequesting:s}=e;if(n)return Object(r.createElement)(j.a,null);const m={...i};return"item-comparison"===o&&(m.segmentby="variation"),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(f.a,{query:i,path:c,filters:b,advancedFilters:_,report:"variations"}),Object(r.createElement)(O.a,{mode:o,charts:u,endpoint:"variations",isRequesting:s,query:m,selectedChart:Object(p.a)(i.chart,u),filters:b,advancedFilters:_}),Object(r.createElement)(v.a,{charts:u,mode:o,filters:b,advancedFilters:_,endpoint:"variations",isRequesting:s,itemsLabel:t,path:c,query:m,selectedChart:Object(p.a)(m.chart,u)}),Object(r.createElement)(y.a,{isRequesting:s,query:i,filters:b,advancedFilters:_}))};w.propTypes={path:i.a.string.isRequired,query:i.a.object.isRequired};t.default=w},504:function(e,t,o){"use strict";o.d(t,"e",(function(){return d})),o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return b})),o.d(t,"c",(function(){return _})),o.d(t,"d",(function(){return p})),o.d(t,"f",(function(){return v})),o.d(t,"h",(function(){return j})),o.d(t,"g",(function(){return O}));var r=o(15),a=o(18),c=o.n(a),i=o(4),n=o(12),s=o(11),m=o(13),l=o(505);function d(e,t=i.identity){return function(o="",a){const i="function"==typeof e?e(a):e,s=Object(n.getIdsFromQuery)(o);if(s.length<1)return Promise.resolve([]);const m={include:s.join(","),per_page:s.length};return c()({path:Object(r.addQueryArgs)(i,m)}).then(e=>e.map(t))}}d(s.NAMESPACE+"/products/attributes",e=>({key:e.id,label:e.name}));const u=d(s.NAMESPACE+"/products/categories",e=>({key:e.id,label:e.name})),b=d(s.NAMESPACE+"/coupons",e=>({key:e.id,label:e.code})),_=d(s.NAMESPACE+"/customers",e=>({key:e.id,label:e.name})),p=d(s.NAMESPACE+"/products",e=>({key:e.id,label:e.name})),v=d(s.NAMESPACE+"/taxes",e=>({key:e.id,label:Object(l.a)(e)}));function j({attributes:e,name:t}){const o=Object(m.f)("variationTitleAttributesSeparator"," - ");if(t&&t.indexOf(o)>-1)return t;const r=(e||[]).map(({option:e})=>e).join(", ");return r?t+o+r:t}const O=d(({products:e})=>e?s.NAMESPACE+`/products/${e}/variations`:s.NAMESPACE+"/variations",e=>({key:e.id,label:j(e)}))},505:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o(2);function a(e){return[e.country,e.state,e.name||Object(r.__)("TAX","woocommerce-admin"),e.priority].map(e=>e.toString().toUpperCase().trim()).filter(Boolean).join("-")}},516:function(e,t,o){"use strict";function r(e,t,o){return!!t&&(e&&t<=o==="instock")}o.d(t,"a",(function(){return r}))},539:function(e,t,o){"use strict";var r=o(0),a=o(2),c=o(4),i=o(21),n=o(12),s=o(120),m=o(13),l=o(508),d=o(516),u=o(503),b=o(504);const _=Object(m.f)("manageStock","no"),p=Object(m.f)("stockStatuses",{});class v extends r.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(a.__)("Product / Variation title","woocommerce-admin"),key:"name",required:!0,isLeftAligned:!0},{label:Object(a.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:Object(a.__)("Items sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(a.__)("Net sales","woocommerce-admin"),screenReaderLabel:Object(a.__)("Net sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:Object(a.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},"yes"===_?{label:Object(a.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===_?{label:Object(a.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}getRowsContent(e=[]){const{query:t}=this.props,o=Object(n.getPersistedQuery)(t),{formatAmount:l,formatDecimal:u,getCurrencyConfig:v}=this.context;return Object(c.map)(e,e=>{const{items_sold:t,net_revenue:c,orders_count:j,product_id:O,variation_id:y}=e,f=e.extended_info||{},{stock_status:w,stock_quantity:h,low_stock_amount:g,sku:S}=f,k=(C=e,Object(b.h)(C.extended_info||{}));var C;const A=Object(n.getNewPath)(o,"/analytics/orders",{filter:"advanced",variation_includes:y}),E=Object(m.e)(`post.php?post=${O}&action=edit`);return[{display:Object(r.createElement)(i.Link,{href:E,type:"wp-admin"},k),value:k},{display:S,value:S},{display:Object(s.formatValue)(v(),"number",t),value:t},{display:l(c),value:u(c)},{display:Object(r.createElement)(i.Link,{href:A,type:"wc-admin"},j),value:j},"yes"===_?{display:Object(d.a)(w,h,g)?Object(r.createElement)(i.Link,{href:E,type:"wp-admin"},Object(a._x)("Low","Indication of a low quantity","woocommerce-admin")):p[w],value:p[w]}:null,"yes"===_?{display:h,value:h}:null].filter(Boolean)})}getSummary(e){const{variations_count:t=0,items_sold:o=0,net_revenue:r=0,orders_count:c=0}=e,{formatAmount:i,getCurrencyConfig:n}=this.context,m=n();return[{label:Object(a._n)("variation sold","variations sold",t,"woocommerce-admin"),value:Object(s.formatValue)(m,"number",t)},{label:Object(a._n)("item sold","items sold",o,"woocommerce-admin"),value:Object(s.formatValue)(m,"number",o)},{label:Object(a.__)("net sales","woocommerce-admin"),value:i(r)},{label:Object(a._n)("orders","orders",c,"woocommerce-admin"),value:Object(s.formatValue)(m,"number",c)}]}render(){const{advancedFilters:e,baseSearchQuery:t,filters:o,isRequesting:c,query:i}=this.props,n={helpText:Object(a.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(a.__)("Search by variation name or SKU","woocommerce-admin")};return Object(r.createElement)(l.a,{baseSearchQuery:t,compareBy:"variations",compareParam:"filter-variations",endpoint:"variations",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,isRequesting:c,itemIdField:"variation_id",labels:n,query:i,getSummary:this.getSummary,summaryFields:["variations_count","items_sold","net_revenue","orders_count"],tableQuery:{orderby:i.orderby||"items_sold",order:i.order||"desc",extended_info:!0,product_includes:i.products,variations:i.variations},title:Object(a.__)("Variations","woocommerce-admin"),columnPrefsKey:"variations_report_columns",filters:o,advancedFilters:e})}}v.contextType=u.a,t.a=v}}]);