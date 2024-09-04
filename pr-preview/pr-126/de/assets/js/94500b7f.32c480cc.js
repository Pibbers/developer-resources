"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8782],{15656:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var t=r(74848),a=r(28453),o=r(56240),s=r(19365);const u={id:"suspend-and-restore-project",title:"Suspend and restore a project",description:"How to suspend and restore projects to manage costs.",sidebar_position:2,sidebar_label:"Suspend and restore a project",pagination_prev:null,pagination_next:null},i="Suspend and restore a project",l={id:"manage-ai-unlimited/suspend-and-restore-project",title:"Suspend and restore a project",description:"How to suspend and restore projects to manage costs.",source:"@site/docs/manage-ai-unlimited/suspend-and-restore-project.md",sourceDirName:"manage-ai-unlimited",slug:"/manage-ai-unlimited/suspend-and-restore-project",permalink:"/pr-preview/pr-126/de/ai-unlimited/manage-ai-unlimited/suspend-and-restore-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"suspend-and-restore-project",title:"Suspend and restore a project",description:"How to suspend and restore projects to manage costs.",sidebar_position:2,sidebar_label:"Suspend and restore a project",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Suspend",id:"suspend",level:2},{value:"Restore (redeploy)",id:"restore-redeploy",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"suspend-and-restore-a-project",children:"Suspend and restore a project"}),"\n",(0,t.jsx)(n.p,{children:"You can suspend and restore a project as needed."}),"\n",(0,t.jsx)(n.h2,{id:"suspend",children:"Suspend"}),"\n",(0,t.jsx)(n.p,{children:"To avoid incurring charges for unneeded engine resources, suspend projects you're not working on."}),"\n",(0,t.jsx)(n.p,{children:"User authorizations, object store authorizations, and data objects are saved. When you restore and redeploy the project, you can pick up where you left off."}),"\n",(0,t.jsx)(n.p,{children:"In your notebook, run this magic command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%project_engine_suspend <Project_Name>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"restore-redeploy",children:"Restore (redeploy)"}),"\n",(0,t.jsx)(n.p,{children:"In your notebook, run this magic command:"}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(s.A,{value:"aws1",label:"AWS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>\n"})})}),(0,t.jsx)(s.A,{value:"azure",label:"Azure",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"If you don't specify the number of nodes, one node will be deployed."}),"\n",(0,t.jsx)(n.p,{children:"For the restore parameter, leave the default value of true. This restores the project to the state of the latest Git commmit."}),"\n",(0,t.jsx)(n.p,{children:"Each time the engine is deployed, a new password for connecting to the engine is generated for each user."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Learn more about AI Unlimited ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-126/de/ai-unlimited/explore-and-analyze-data/magic-commands",children:"magic commands"}),"."]})})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){var n=e.children,r=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),a=r(34164),o=r(23104),s=r(56347),u=r(205),i=r(57485);var l=r(89466);function c(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function d(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,t=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return r(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,o=(0,s.W6)(),u=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,i.aZ)(u),(0,t.useCallback)((function(e){if(u){var n=new URLSearchParams(o.location.search);n.set(u,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[u,o])]}function m(e){var n,r,a,o,s=e.defaultValue,i=e.queryString,c=void 0!==i&&i,m=e.groupId,h=d(e),b=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:h})})),v=b[0],g=b[1],j=f({queryString:c,groupId:m}),x=j[0],y=j[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,l.Dv)(n),a=r[0],o=r[1],[a,(0,t.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=_[0],S=_[1],k=function(){var e=null!=x?x:w;return p({value:e,tabValues:h})?e:null}();return(0,u.A)((function(){k&&g(k)}),[k]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),S(e)}),[y,S,h]),tabValues:h}}var h=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function g(e){var n=e.className,r=e.block,t=e.selectedValue,s=e.selectValue,u=e.tabValues,i=[],l=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=i.indexOf(n),a=u[r].value;a!==t&&(l(n),s(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=i.indexOf(e.currentTarget)+1;r=null!=(t=i[a])?t:i[0];break;case"ArrowLeft":var o,s=i.indexOf(e.currentTarget)-1;r=null!=(o=i[s])?o:i[i.length-1]}null==(n=r)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:u.map((function(e){var n=e.value,r=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},o,{className:(0,a.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,a=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=o.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function x(e){var n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,Object.assign({},e,n)),(0,v.jsx)(j,Object.assign({},e,n))]})}function y(e){var n=(0,h.A)();return(0,v.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>u});var t=r(96540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);