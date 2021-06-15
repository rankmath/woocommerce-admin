this.wc=this.wc||{},this.wc.betaFeaturesTrackingModal=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=534)}({0:function(e,t){e.exports=window.wp.element},11:function(e,t){e.exports=window.wp.data},162:function(e,t){e.exports=window.wc.explat},18:function(e,t,n){var r=n(61),o=n(62),c=n(45),a=n(63);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=window.wp.i18n},21:function(e,t){e.exports=window.wc.data},25:function(e,t){e.exports=window.wp.compose},29:function(e,t){e.exports=window.wc.tracks},38:function(e,t){function n(e,t,n,r,o,c,a){try{var u=e[c](a),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,c){var a=e.apply(t,r);function u(e){n(a,o,c,u,i,"next",e)}function i(e){n(a,o,c,u,i,"throw",e)}u(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t){e.exports=window.wp.components},41:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},45:function(e,t,n){var r=n(41);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},524:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(38),c=n.n(o),a=n(18),u=n.n(a),i=n(6),s=n.n(i),l=n(2),f=n(4),d=n(11),p=n(25),m=n(21),w=n(29),b=n(162),x=Object(p.compose)(Object(d.withDispatch)((function(e){return{updateOptions:e(m.OPTIONS_STORE_NAME).updateOptions}})))((function(e){var t=e.updateOptions,n=Object(r.useState)(!1),o=u()(n,2),a=o[0],i=o[1],d=Object(r.useState)(!1),p=u()(d,2),m=p[0],x=p[1],v=Object(r.useRef)(document.querySelector("#woocommerce_navigation_enabled")),_=function(){var e=c()(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"function"==typeof window.wcTracks.enable&&(n?window.wcTracks.enable((function(){Object(b.initializeExPlat)()})):window.wcTracks.isEnabled=!1),n&&Object(w.recordEvent)("settings_features_tracking_enabled"),e.abrupt("return",t({woocommerce_allow_tracking:n?"yes":"no"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(v.current){var e=function(e){e.target.checked&&(e.target.checked=!1,i(!0))},t=v.current;return t.addEventListener("change",e,!1),function(){return t.removeEventListener("change",e)}}}),[]),v.current&&a?Object(r.createElement)(f.Modal,{title:Object(l.__)("Build a Better WooCommerce","woocommerce-admin"),onRequestClose:function(){return i(!1)},className:"woocommerce-beta-features-tracking-modal"},Object(r.createElement)("p",null,Object(l.__)("Testing new features requires sharing non-sensitive data via ","woocommerce-admin"),Object(r.createElement)("a",{href:"https://woocommerce.com/usage-tracking"},Object(l.__)("usage tracking","woocommerce-admin")),Object(l.__)(". Gathering usage data allows us to make WooCommerce better — your store will be considered as we evaluate new features, judge the quality of an update, or determine if an improvement makes sense. No personal data is tracked or stored and you can opt-out at any time.","woocommerce-admin")),Object(r.createElement)("div",{className:"woocommerce-beta-features-tracking-modal__checkbox"},Object(r.createElement)(f.CheckboxControl,{label:"Enable usage tracking",onChange:x,checked:m})),Object(r.createElement)("div",{className:"woocommerce-beta-features-tracking-modal__actions"},Object(r.createElement)(f.Button,{isPrimary:!0,onClick:c()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=6;break}return e.next=3,_(!0);case 3:v.current.checked=!0,e.next=8;break;case 6:return e.next=8,_(!1);case 8:i(!1);case 9:case"end":return e.stop()}}),e)})))},Object(l.__)("Save","woocommerce-admin")))):null})),v=(n(524),document.createElement("div"));v.setAttribute("id","beta-features-tracking"),Object(r.render)(Object(r.createElement)(x,null),document.body.appendChild(v))},6:function(e,t){e.exports=window.regeneratorRuntime},61:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},62:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},63:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}});