this.wc=this.wc||{},this.wc.printShippingLabelBanner=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=529)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t,n){e.exports=n(75)()},10:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},104:function(e,t,n){"use strict";var r=n(7),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=n(77),s=n(105),c=n(106),a="function"==typeof Symbol&&Symbol.iterator;function l(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}function u(e,t,n,r){var i,c=typeof e;if("undefined"!==c&&"boolean"!==c||(e=null),null===e||"string"===c||"number"===c||"object"===c&&e.$$typeof===o)return n(r,e,""===t?"."+l(e,0):t),1;var p=0,d=""===t?".":t+":";if(Array.isArray(e))for(var f=0;f<e.length;f++)p+=u(i=e[f],d+l(i,f),n,r);else{var m=function(e){var t=e&&(a&&e[a]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(m){0;for(var b,h=m.call(e),w=0;!(b=h.next()).done;)p+=u(i=b.value,d+l(i,w++),n,r)}else if("object"===c){0;var y=""+e;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===y?"object with keys {"+Object.keys(e).join(", ")+"}":y,"")}}return p}var p=/\/+/g;function d(e){return(""+e).replace(p,"$&/")}var f,m,b=h,h=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)},w=function(e){s(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)};function y(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function v(e,t,n){var o,s,c=e.result,a=e.keyPrefix,l=e.func,u=e.context,p=l.call(u,t,e.count++);Array.isArray(p)?g(p,c,n,i.thatReturnsArgument):null!=p&&(r.isValidElement(p)&&(o=p,s=a+(!p.key||t&&t.key===p.key?"":d(p.key)+"/")+n,p=r.cloneElement(o,{key:s},void 0!==o.props?o.props.children:void 0)),c.push(p))}function g(e,t,n,r,o){var i="";null!=n&&(i=d(n)+"/");var s=y.getPooled(t,i,r,o);!function(e,t,n){null==e||u(e,"",t,n)}(e,v,s),y.release(s)}y.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},f=function(e,t,n,r){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)},(m=y).instancePool=[],m.getPooled=f||b,m.poolSize||(m.poolSize=10),m.release=w;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return c(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return c(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)g(e[n],t,n,i.thatReturnsArgument);return t}},105:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,s,c){if(!e){var a;if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,s,c],u=0;(a=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw a.framesToPop=1,a}}},106:function(e,t,n){"use strict";var r=n(77);e.exports=r},107:function(e,t,n){"use strict";function r(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)}},11:function(e,t){e.exports=window.wp.data},12:function(e,t){e.exports=window.wp.primitives},13:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},14:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},15:function(e,t,n){var r=n(81);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},16:function(e,t,n){var r=n(35).default,o=n(10);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},169:function(e,t,n){"use strict";var r=n(66),o=n(67),i=n(0);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.icon,n=e.size,c=void 0===n?24:n,a=Object(o.a)(e,["icon","size"]);return Object(i.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:c,height:c},a))}},2:function(e,t){e.exports=window.wp.i18n},21:function(e,t){e.exports=window.wc.data},25:function(e,t){e.exports=window.wp.compose},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"f",(function(){return w}));var r=n(35),o=n.n(r),i=n(2),s=["wcAdminSettings","preloadSettings"],c="object"===("undefined"==typeof wcSettings?"undefined":o()(wcSettings))?wcSettings:{},a=Object.keys(c).reduce((function(e,t){return s.includes(t)||(e[t]=c[t]),e}),{}),l=a.adminUrl,u=(a.countries,a.currency),p=a.locale,d=a.orderStatuses,f=(a.siteTitle,a.wcAssetUrl);function m(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};if(s.includes(e))throw new Error(Object(i.__)("Mutable settings should be accessed via data store."));var r=a.hasOwnProperty(e)?a[e]:t;return n(r,t)}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};if(s.includes(e))throw new Error(Object(i.__)("Mutable settings should be mutated via data store."));a[e]=n(t)}function h(e){return(l||"")+e}function w(e){return new Promise((function(t,n){document.querySelector("#".concat(e.handle,"-js"))&&t();var r=document.createElement("script");r.src=e.src,r.id="".concat(e.handle,"-js"),r.async=!0,r.onload=t,r.onerror=n,document.body.appendChild(r)}))}},29:function(e,t){e.exports=window.wc.tracks},3:function(e,t){e.exports=window.lodash},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=c(n(7)),i=c(n(104)),s=c(n(107));function c(e){return e&&e.__esModule?e:{default:e}}var a=void 0;function l(e,t){var n,s,c,u,p,d,f,m,b=[],h={};for(d=0;d<e.length;d++)if("string"!==(p=e[d]).type){if(!t.hasOwnProperty(p.value)||void 0===t[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==r(t[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+a);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){n=t[p.value],c=d;break}b.push(t[p.value])}else b.push(p.value);return n&&(u=function(e,t){var n,r,o=t[e],i=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===o.value){if("componentOpen"===n.type){i++;continue}if("componentClose"===n.type){if(0===i)return r;i--}}throw new Error("Missing closing component token `"+o.value+"`")}(c,e),f=l(e.slice(c+1,u),t),s=o.default.cloneElement(n,{},f),b.push(s),u<e.length-1&&(m=l(e.slice(u+1),t),b=b.concat(m))),1===b.length?b[0]:(b.forEach((function(e,t){e&&(h["interpolation-child-"+t]=e)})),(0,i.default)(h))}t.default=function(e){var t=e.mixedString,n=e.components,o=e.throwErrors;if(a=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var i=(0,s.default)(t);try{return l(i,n)}catch(e){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},307:function(e,t,n){},31:function(e,t){e.exports=window.wp.apiFetch},35:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},36:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},38:function(e,t){function n(e,t,n,r,o,i,s){try{var c=e[i](s),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var s=e.apply(t,r);function c(e){n(s,o,i,c,a,"next",e)}function a(e){n(s,o,i,c,a,"throw",e)}c(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t){e.exports=window.wp.components},5:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},529:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),i=n(0),s=n(21),c=n(38),a=n.n(c),l=n(13),u=n.n(l),p=n(14),d=n.n(p),f=n(10),m=n.n(f),b=n(15),h=n.n(b),w=n(16),y=n.n(w),v=n(9),g=n.n(v),O=n(6),_=n.n(O),j=n(2),x=n(4),S=n(25),k=n(30),E=n.n(k),P=n(1),C=n.n(P),R=n(3),M=n(11),A=n(28),B=n(29);n(307);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var o=g()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y()(this,n)}}var L,D=function(e){h()(n,e);var t=T(n);function n(){var e;u()(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),o()(m()(e),"setDismissed",(function(t){e.props.updateOptions({woocommerce_shipping_dismissed_timestamp:t})})),o()(m()(e),"hideBanner",(function(){document.getElementById("woocommerce-admin-print-label").style.display="none"})),o()(m()(e),"remindMeLaterClicked",(function(){var t=e.props,n=t.onCloseAll,r=t.trackElementClicked;e.setDismissed(Date.now()),n(),e.hideBanner(),r("shipping_banner_dismiss_modal_remind_me_later")})),o()(m()(e),"closeForeverClicked",(function(){var t=e.props,n=t.onCloseAll,r=t.trackElementClicked;e.setDismissed(-1),n(),e.hideBanner(),r("shipping_banner_dismiss_modal_close_forever")})),e}return d()(n,[{key:"render",value:function(){var e=this.props,t=e.onClose;return e.visible?Object(i.createElement)(x.Modal,{title:Object(j.__)("Are you sure?","woocommerce-admin"),onRequestClose:t,className:"wc-admin-shipping-banner__dismiss-modal"},Object(i.createElement)("p",{className:"wc-admin-shipping-banner__dismiss-modal-help-text"},Object(j.__)("With WooCommerce Shipping you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.","woocommerce-admin")),Object(i.createElement)("div",{className:"wc-admin-shipping-banner__dismiss-modal-actions"},Object(i.createElement)(x.Button,{isSecondary:!0,onClick:this.remindMeLaterClicked},Object(j.__)("Remind me later","woocommerce-admin")),Object(i.createElement)(x.Button,{isPrimary:!0,onClick:this.closeForeverClicked},Object(j.__)("I don't need this","woocommerce-admin")))):null}}]),n}(i.Component),I=Object(S.compose)(Object(M.withDispatch)((function(e){return{updateOptions:e(s.OPTIONS_STORE_NAME).updateOptions}})))(D),N=n(169),W=n(12),q=Object(i.createElement)(W.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(i.createElement)(W.Path,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"})),G="download",U="install",z="activate",F="setup",H="start",Q=(L={},o()(L,G,Object(j.__)("download","woocommerce-admin")),o()(L,U,Object(j.__)("install","woocommerce-admin")),o()(L,z,Object(j.__)("activate","woocommerce-admin")),o()(L,F,Object(j.__)("set up","woocommerce-admin")),o()(L,H,Object(j.__)("start","woocommerce-admin")),L);function J(e){var t,n,r=e.isSetupError,o=e.errorReason;return r?Object(i.createElement)("div",{className:"wc-admin-shipping-banner-install-error"},Object(i.createElement)(N.a,{icon:q,className:"warning-icon"}),(n=(t=o)in Q?Q[t]:Q[F],Object(j.sprintf)(Object(j.__)("Unable to %s the plugin. Refresh the page and try again.","woocommerce-admin"),n))):null}var V=n(31),$=n.n(V);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var o=g()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y()(this,n)}}var Z=Object(A.h)("wcAdminAssetUrl",""),ee="woocommerce-services",te=function(e){h()(r,e);var t,n=X(r);function r(e){var t;u()(this,r),t=n.call(this,e),o()(m()(t),"isSetupError",(function(){return t.state.wcsSetupError})),o()(m()(t),"closeDismissModal",(function(){t.setState({isDismissModalOpen:!1}),t.trackElementClicked("shipping_banner_dismiss_modal_close_button")})),o()(m()(t),"openDismissModal",(function(){t.setState({isDismissModalOpen:!0}),t.trackElementClicked("shipping_banner_dimiss")})),o()(m()(t),"hideBanner",(function(){t.setState({showShippingBanner:!1})})),o()(m()(t),"createShippingLabelClicked",(function(){var e=t.props.activePlugins;t.setState({isShippingLabelButtonBusy:!0}),t.trackElementClicked("shipping_banner_create_label"),e.includes(ee)?t.acceptTosAndGetWCSAssets():t.installAndActivatePlugins(ee)})),o()(m()(t),"woocommerceServiceLinkClicked",(function(){t.trackElementClicked("shipping_banner_woocommerce_service_link")})),o()(m()(t),"trackBannerEvent",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.props,o=r.activePlugins,i=r.isJetpackConnected;Object(B.recordEvent)(e,K({banner_name:"wcadmin_install_wcs_prompt",jetpack_installed:o.includes("jetpack"),jetpack_connected:i,wcs_installed:o.includes(ee)},n))})),o()(m()(t),"trackImpression",(function(){t.trackBannerEvent("banner_impression")})),o()(m()(t),"trackElementClicked",(function(e){t.trackBannerEvent("banner_element_clicked",{element:e})})),o()(m()(t),"getInstallText",(function(){return t.props.activePlugins.includes(ee)?Object(j.__)('You\'ve already installed WooCommerce Shipping. By clicking "Create shipping label", you agree to its {{tosLink}}Terms of Service{{/tosLink}}.',"woocommerce-admin"):Object(j.__)('By clicking "Create shipping label", {{wcsLink}}WooCommerce Shipping{{/wcsLink}} will be installed and you agree to its {{tosLink}}Terms of Service{{/tosLink}}.',"woocommerce-admin")}));var i=new URL(window.location.href).searchParams.get("post");return t.state={showShippingBanner:!0,isDismissModalOpen:!1,setupErrorReason:F,orderId:parseInt(i,10),wcsAssetsLoaded:!1,wcsAssetsLoading:!1,wcsSetupError:!1,isShippingLabelButtonBusy:!1,installText:t.getInstallText(),isWcsModalOpen:!1},t}return d()(r,[{key:"componentDidMount",value:function(){this.state.showShippingBanner&&this.trackImpression()}},{key:"installAndActivatePlugins",value:(t=a()(_.a.mark((function e(t){var n,r,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,r=n.installPlugins,o=n.activatePlugins,!n.isRequesting){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,r([t]);case 5:if(!0===e.sent.success){e.next=9;break}return this.setState({setupErrorReason:U,wcsSetupError:!0}),e.abrupt("return");case 9:return e.next=11,o([t]);case 11:if(!0===e.sent.success){e.next=15;break}return this.setState({setupErrorReason:z,wcsSetupError:!0}),e.abrupt("return");case 15:this.acceptTosAndGetWCSAssets();case 16:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"acceptTosAndGetWCSAssets",value:function(){var e=this;return $()({path:"/wc/v1/connect/tos",method:"POST",data:{accepted:!0}}).then((function(){return $()({path:"/wc/v1/connect/assets",method:"GET"})})).then((function(t){return e.loadWcsAssets(t)})).catch((function(){return e.setState({wcsSetupError:!0})}))}},{key:"generateMetaBoxHtml",value:function(e,t,n){var r=JSON.stringify(n).replace(/"/g,"&quot;"),o=Object(j.__)("Toggle panel:","woocommerce-admin");return'\n<div id="'.concat(e,'" class="postbox">\n\t<div class="postbox-header">\n\t\t<h2 class="hndle"><span>').concat(t,'</span></h2>\n\t\t<div class="handle-actions">\n\t\t\t<button type="button" class="handlediv" aria-expanded="true">\n\t\t\t\t<span class="screen-reader-text">').concat(o," ").concat(t,'</span>\n\t\t\t\t<span class="toggle-indicator" aria-hidden="true"></span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<div class="inside">\n\t\t<div class="wcc-root woocommerce wc-connect-create-shipping-label" data-args="').concat(r,'">\n\t\t</div>\n\t</div>\n</div>\n')}},{key:"loadWcsAssets",value:function(e){var t=this,n=e.assets;if(this.state.wcsAssetsLoaded||this.state.wcsAssetsLoading)this.openWcsModal();else{this.setState({wcsAssetsLoading:!0});var r=n.wc_connect_admin_script,o=n.wc_connect_admin_style;if(void 0===window.wcsPluginData){var i=r.substring(0,r.lastIndexOf("/")+1);window.wcsPluginData={assetPath:i}}var s=this.state.orderId,c=this.props.itemsCount,a=this.generateMetaBoxHtml("woocommerce-order-label",Object(j.__)("Shipping Label","woocommerce-admin"),{order:{id:s},context:"shipping_label",items:c});document.getElementById("woocommerce-order-data").insertAdjacentHTML("beforebegin",a);var l=this.generateMetaBoxHtml("woocommerce-order-shipment-tracking",Object(j.__)("Shipment Tracking","woocommerce-admin"),{order:{id:s},context:"shipment_tracking",items:c});document.getElementById("woocommerce-order-actions").insertAdjacentHTML("afterend",l),window.jQuery&&(window.jQuery("#normal-sortables").sortable("refresh"),window.jQuery("#side-sortables").sortable("refresh"),window.jQuery("#woocommerce-order-label").hide()),Promise.all([new Promise((function(e,t){var n=document.createElement("script");n.src=r,n.async=!0,n.onload=e,n.onerror=t,document.body.appendChild(n)})),new Promise((function(e,t){if(""!==o){var n=document.getElementsByTagName("head")[0],r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.href=o,r.media="all",r.onload=e,r.onerror=t,n.appendChild(r)}else e()}))]).then((function(){t.setState({wcsAssetsLoaded:!0,wcsAssetsLoading:!1,isShippingLabelButtonBusy:!1}),t.openWcsModal()}))}}},{key:"openWcsModal",value:function(){var e=this;window.wcsGetAppStoreAsync&&window.wcsGetAppStoreAsync("wc-connect-create-shipping-label").then((function(t){var n=t.getState(),r=e.state.orderId,o=n.ui.selectedSiteId,i=t.subscribe((function(){var n=t.getState(),s=Object(R.get)(n,["extensions","woocommerce","woocommerceServices",o,"shippingLabel",r],null),c=Object(R.get)(n,["extensions","woocommerce","woocommerceServices",o,"labelSettings"],null),a=Object(R.get)(n,["extensions","woocommerce","woocommerceServices",o,"packages"],null),l=Object(R.get)(n,["extensions","woocommerce","sites",o,"data","locations"]);s&&c&&c.meta&&a&&l&&(s.loaded&&c.meta.isLoaded&&a.isLoaded&&Object(R.isArray)(l)&&!e.state.isWcsModalOpen?(window.jQuery&&(e.setState({isWcsModalOpen:!0}),window.jQuery(".shipping-label__new-label-button").click()),t.dispatch({type:"NOTICE_CREATE",notice:{duration:1e4,status:"is-success",text:Object(j.__)("Plugin installed and activated","woocommerce-admin")}})):s.showPurchaseDialog&&(i(),window.jQuery&&window.jQuery("#woocommerce-order-label").show()))}));document.getElementById("woocommerce-admin-print-label").style.display="none"}))}},{key:"render",value:function(){var e=this.state,t=e.isDismissModalOpen,n=e.showShippingBanner,r=e.isShippingLabelButtonBusy;return n?Object(i.createElement)("div",null,Object(i.createElement)("div",{className:"wc-admin-shipping-banner-container"},Object(i.createElement)("img",{className:"wc-admin-shipping-banner-illustration",src:Z+"shippingillustration.svg",alt:Object(j.__)("Shipping ","woocommerce-admin")}),Object(i.createElement)("div",{className:"wc-admin-shipping-banner-blob"},Object(i.createElement)("h3",null,Object(j.__)("Print discounted shipping labels with a click.","woocommerce-admin")),Object(i.createElement)("p",null,E()({mixedString:this.state.installText,components:{tosLink:Object(i.createElement)(x.ExternalLink,{href:"https://wordpress.com/tos",target:"_blank",type:"external"}),wcsLink:Object(i.createElement)(x.ExternalLink,{href:"https://woocommerce.com/products/shipping/",target:"_blank",type:"external",onClick:this.woocommerceServiceLinkClicked})}})),Object(i.createElement)(J,{isSetupError:this.isSetupError(),errorReason:this.state.setupErrorReason})),Object(i.createElement)(x.Button,{disabled:r,isPrimary:!0,isBusy:r,onClick:this.createShippingLabelClicked},Object(j.__)("Create shipping label","woocommerce-admin")),Object(i.createElement)("button",{onClick:this.openDismissModal,type:"button",className:"notice-dismiss",disabled:this.state.isShippingLabelButtonBusy},Object(i.createElement)("span",{className:"screen-reader-text"},Object(j.__)("Close Print Label Banner.","woocommerce-admin")))),Object(i.createElement)(I,{visible:t,onClose:this.closeDismissModal,onCloseAll:this.hideBanner,trackElementClicked:this.trackElementClicked})):null}}]),r}(i.Component);te.propTypes={itemsCount:C.a.number.isRequired,isJetpackConnected:C.a.bool.isRequired,activePlugins:C.a.array.isRequired,activatePlugins:C.a.func.isRequired,installPlugins:C.a.func.isRequired,isRequesting:C.a.bool.isRequired};var ne=Object(S.compose)(Object(M.withSelect)((function(e){var t=e(s.PLUGINS_STORE_NAME),n=t.isPluginsRequesting,r=t.isJetpackConnected,o=t.getActivePlugins;return{isRequesting:n("activatePlugins")||n("installPlugins"),isJetpackConnected:r(),activePlugins:o()}})),Object(M.withDispatch)((function(e){var t=e(s.PLUGINS_STORE_NAME);return{activatePlugins:t.activatePlugins,installPlugins:t.installPlugins}})))(te);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=document.getElementById("wc-admin-shipping-banner-root"),se=ie.dataset.args&&JSON.parse(ie.dataset.args)||{},ce=Object(s.withPluginsHydration)(oe(oe({},window.wcSettings.plugins),{},{jetpackStatus:window.wcSettings.dataEndpoints.jetpackStatus}))(ne);Object(i.render)(Object(i.createElement)(ce,{itemsCount:se.items}),ie)},6:function(e,t){e.exports=window.regeneratorRuntime},66:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(36);function o(e,t){if(null==e)return{};var n,o,i=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},7:function(e,t){e.exports=window.React},75:function(e,t,n){"use strict";var r=n(76);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},76:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},81:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,n(t,r)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},9:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0}});