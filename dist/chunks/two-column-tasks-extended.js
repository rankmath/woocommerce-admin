(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[53],{545:function(e,t,s){"use strict";t.a=["products","payments","woocommerce-payments","tax","shipping","marketing","appearance"]},621:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(2),i=s(3),a=s(477),o=s(7),l=s(11),r=s(16),m=s(170),u=s(531),d=s(549),_=s(522),O=(s(532),s(545));t.default=({query:e})=>{const{task:t}=e,{hideTaskList:s}=Object(o.useDispatch)(l.ONBOARDING_STORE_NAME),{updateOptions:k}=Object(o.useDispatch)(l.OPTIONS_STORE_NAME),{isResolving:p,taskLists:b}=Object(o.useSelect)(e=>({isResolving:e(l.ONBOARDING_STORE_NAME).isResolving("getTaskLists"),taskLists:e(l.ONBOARDING_STORE_NAME).getTaskLists()}));Object(n.useEffect)(()=>{k({woocommerce_task_list_prompt_shown:!0,woocommerce_default_homepage_layout:"two_columns"})},[b,p]);const w=(()=>{if(!t)return null;const e=b.reduce((e,t)=>[...e,...t.tasks],[]).find(e=>e.id===t);return e||null})();if(t&&!w)return null;if(p)return Object(n.createElement)(_.a,{query:e});if(w)return Object(n.createElement)("div",{className:"woocommerce-task-dashboard__container"},Object(n.createElement)(u.a,{query:e,task:w}));const h=b.find(e=>"extended"===e.id),E=b.find(e=>"setup"===e.id);if(h.tasks=[...new Set(h.tasks.concat((null==E?void 0:E.tasks.filter(e=>!O.a.includes(e.id)&&"store_details"!==e.id))||[]))],0===h.tasks.length)return null;const g=h.tasks.filter(e=>e.completed).length===h.tasks.length,{id:f,isHidden:j,isVisible:N,isToggleable:y,title:R,tasks:A}=h;return N?Object(n.createElement)(n.Fragment,{key:f},Object(n.createElement)(d.a,{id:f,isComplete:g,query:e,tasks:A,title:R}),y&&Object(n.createElement)(m.a,null,Object(n.createElement)(i.MenuGroup,{className:"woocommerce-layout__homescreen-display-options",label:Object(c.__)("Display","woocommerce-admin")},Object(n.createElement)(i.MenuItem,{className:"woocommerce-layout__homescreen-extension-tasklist-toggle",icon:!j&&a.a,isSelected:!j,role:"menuitemcheckbox",onClick:()=>(e=>{const{id:t,isHidden:n}=e,c=!n;Object(r.recordEvent)(c?t+"_tasklist_hide":t+"_tasklist_show",{}),s(t)})(h)},Object(c.__)("Show things to do next","woocommerce-admin"))))):null}}}]);