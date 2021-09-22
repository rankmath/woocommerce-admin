this.wc=this.wc||{},this.wc.customerEffortScore=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=473)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t,n){e.exports=n(75)()},15:function(e,t){!function(){e.exports=this.wp.data}()},18:function(e,t){!function(){e.exports=this.wp.compose}()},2:function(e,t){!function(){e.exports=this.wp.i18n}()},20:function(e,t,n){var o=n(60),r=n(61),c=n(39),a=n(62);e.exports=function(e,t){return o(e)||r(e,t)||c(e,t)||a()}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return s}));var o=n(4),r=o.Navigation||o.__experimentalNavigation,c=o.NavigationBackButton||o.__experimentalNavigationBackButton,a=o.NavigationGroup||o.__experimentalNavigationGroup,i=o.NavigationMenu||o.__experimentalNavigationMenu,u=o.NavigationItem||o.__experimentalNavigationItem,l=o.Text||o.__experimentalText,s=o.useSlot||o.__experimentalUseSlot},37:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},39:function(e,t,n){var o=n(37);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},4:function(e,t){!function(){e.exports=this.wp.components}()},473:function(e,t,n){"use strict";n.r(t),n.d(t,"CustomerEffortScore",(function(){return _}));var o=n(20),r=n.n(o),c=n(0),a=n(1),i=n.n(a),u=n(2),l=n(18),s=n(15),f=n(4),m=n(31);function b(e){var t=e.recordScoreCallback,n=e.label,o=[{label:Object(u.__)("Very difficult","woocommerce-admin"),value:"1"},{label:Object(u.__)("Somewhat difficult","woocommerce-admin"),value:"2"},{label:Object(u.__)("Neutral","woocommerce-admin"),value:"3"},{label:Object(u.__)("Somewhat easy","woocommerce-admin"),value:"4"},{label:Object(u.__)("Very easy","woocommerce-admin"),value:"5"}],a=Object(c.useState)(NaN),i=r()(a,2),l=i[0],s=i[1],b=Object(c.useState)(),p=r()(b,2),d=p[0],_=p[1],v=Object(c.useState)(!1),y=r()(v,2),O=y[0],j=y[1],h=Object(c.useState)(!0),w=r()(h,2),S=w[0],g=w[1],x=function(){return g(!1)};return S?Object(c.createElement)(f.Modal,{className:"woocommerce-customer-effort-score",title:Object(u.__)("Please share your feedback","woocommerce-admin"),onRequestClose:x,shouldCloseOnClickOutside:!1},Object(c.createElement)(m.f,{variant:"subtitle.small",as:"p"},n),Object(c.createElement)("div",{className:"woocommerce-customer-effort-score__selection"},Object(c.createElement)(f.RadioControl,{selected:l.toString(10),options:o,onChange:function(e){var t=parseInt(e,10);s(t),j(!Number.isInteger(t))}})),(1===l||2===l)&&Object(c.createElement)("div",{className:"woocommerce-customer-effort-score__comments"},Object(c.createElement)(f.TextareaControl,{label:Object(u.__)("Comments (Optional)","woocommerce-admin"),help:Object(u.__)("Your feedback will go to the WooCommerce development team","woocommerce-admin"),value:d,onChange:function(e){return _(e)},rows:"5"})),O&&Object(c.createElement)("div",{className:"woocommerce-customer-effort-score__errors",role:"alert"},Object(c.createElement)(m.f,{variant:"body",as:"p"},Object(u.__)("Please provide feedback by selecting an option above.","woocommerce-admin"))),Object(c.createElement)("div",{className:"woocommerce-customer-effort-score__buttons"},Object(c.createElement)(f.Button,{isTertiary:!0,onClick:x,name:"cancel"},Object(u.__)("Cancel","woocommerce-admin")),Object(c.createElement)(f.Button,{isPrimary:!0,onClick:function(){Number.isInteger(l)?(g(!1),t(l,d)):j(!0)},name:"send"},Object(u.__)("Send","woocommerce-admin")))):null}b.propTypes={recordScoreCallback:i.a.func.isRequired,label:i.a.string.isRequired};var p=b,d=function(){};function _(e){var t=e.recordScoreCallback,n=e.label,o=e.createNotice,a=e.onNoticeShownCallback,i=void 0===a?d:a,l=e.onNoticeDismissedCallback,s=void 0===l?d:l,f=e.onModalShownCallback,m=void 0===f?d:f,b=e.icon,_=Object(c.useState)(!0),v=r()(_,2),y=v[0],O=v[1],j=Object(c.useState)(!1),h=r()(j,2),w=h[0],S=h[1];return Object(c.useEffect)((function(){y&&(o("success",n,{actions:[{label:Object(u.__)("Give feedback","woocommerce-admin"),onClick:function(){S(!0),m()}}],icon:b,explicitDismiss:!0,onDismiss:s}),O(!1),i())}),[y]),y?null:w?Object(c.createElement)(p,{label:n,recordScoreCallback:t}):null}_.propTypes={recordScoreCallback:i.a.func.isRequired,label:i.a.string.isRequired,createNotice:i.a.func.isRequired,onNoticeShownCallback:i.a.func,onNoticeDismissedCallback:i.a.func,onModalShownCallback:i.a.func,icon:i.a.element};t.default=Object(l.compose)(Object(s.withDispatch)((function(e){return{createNotice:e("core/notices2").createNotice}})))(_)},60:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},61:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,c=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw c}}return n}}},62:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},75:function(e,t,n){"use strict";var o=n(76);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,c,a){if(a!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return n.PropTypes=n,n}},76:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}});