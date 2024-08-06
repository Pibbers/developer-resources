"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2028],{93258:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=r(74848),t=r(28453),o=r(56240),l=r(19365);const i={id:"collaborate-project",title:"Collaborate on a project",description:"Learn how to access a project as a collaborator",sidebar_position:3,sidebar_label:"Collaborate on a project",pagination_prev:null,pagination_next:null},s="Collaborate on a project",c={id:"explore-and-analyze-data/collaborate-project",title:"Collaborate on a project",description:"Learn how to access a project as a collaborator",source:"@site/docs/explore-and-analyze-data/collaborate-project.md",sourceDirName:"explore-and-analyze-data",slug:"/explore-and-analyze-data/collaborate-project",permalink:"/fr/ai-unlimited/explore-and-analyze-data/collaborate-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"collaborate-project",title:"Collaborate on a project",description:"Learn how to access a project as a collaborator",sidebar_position:3,sidebar_label:"Collaborate on a project",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},u={},d=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Access the project",id:"access-the-project",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"collaborate-on-a-project",children:"Collaborate on a project"}),"\n",(0,a.jsx)(n.p,{children:"A project is a means to explore and analyze data from a Jupyter notebook."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Each project has a Git repository. ",(0,a.jsx)(n.a,{href:"/fr/ai-unlimited/glossary#project-repository",children:"Learn why"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["A project owner might ",(0,a.jsx)(n.a,{href:"/fr/ai-unlimited/manage-ai-unlimited/add-collaborators",children:"add you to a project"})," as a collaborator. To contribute, you'll need to access the project from a Jupyter notebook."]}),"\n",(0,a.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"From the project owner, get these items:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The IP address or  hostname of the ",(0,a.jsx)(n.a,{href:"/fr/ai-unlimited/glossary#ai-unlimited-manager",children:"AI Unlimited manager"})]}),"\n",(0,a.jsx)(n.li,{children:"The project name"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["From your profile, ",(0,a.jsx)(n.a,{href:"/fr/ai-unlimited/explore-and-analyze-data/get-api-key",children:"get your API key"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"%help"})," for details on all the magic commands available in your notebook. Run ",(0,a.jsx)(n.code,{children:"%help <command>"})," for details on one of them."]}),(0,a.jsxs)(n.p,{children:["Or learn about the ",(0,a.jsx)(n.a,{href:"/fr/ai-unlimited/explore-and-analyze-data/magic-commands",children:"magic commands"})," specific to AI Unlimited."]})]}),"\n",(0,a.jsx)(n.h2,{id:"access-the-project",children:"Access the project"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Connect to JupyterLab, open a notebook, and select the AI Unlimited kernel."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Connect to the manager."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Find out if the engine is deployed."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_engine_list project=<Project_Name>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If the engine is not deployed, deploy it and restore the project."}),"\n",(0,a.jsxs)(n.p,{children:["The size can be small, medium, large, or extralarge. The default is small. See ",(0,a.jsx)(n.a,{href:"http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig",children:"AWS"})," or ",(0,a.jsx)(n.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview",children:"Azure"})," pricing information."]}),"\n",(0,a.jsx)(n.p,{children:"If you don't specify the number of nodes, one node is deployed. The default for restore is true."}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{value:"aws1",label:"AWS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>\n"})})}),(0,a.jsx)(l.A,{value:"azure",label:"Azure",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Get your password for the engine."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_user_list project=<Project_Name>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Refresh the connection to include your notebook."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_connection_add project=<Project_Name>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Connect to the project."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%connect <Project_Name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"When the connection is made, provide your password."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You're all set! Now you can contribute to the project."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var a=r(34164);const t={tabItem:"tabItem_Ymn6"};var o=r(74848);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>y});var a=r(96540),t=r(34164),o=r(23104),l=r(56347),i=r(205),s=r(57485);var c=r(89466);function u(e){var n,r;return null!=(n=null==(r=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function d(e){var n=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,a=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,a){return n.findIndex((function(n){return r(n,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,o=(0,l.W6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:t});return[(0,s.aZ)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function f(e){var n,r,t,o,l=e.defaultValue,s=e.queryString,u=void 0!==s&&s,f=e.groupId,m=d(e),b=(0,a.useState)((function(){return function(e){var n,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:m})})),j=b[0],x=b[1],v=h({queryString:u,groupId:f}),g=v[0],y=v[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),r=(0,c.Dv)(n),t=r[0],o=r[1],[t,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=_[0],k=_[1],N=function(){var e=null!=g?g:w;return p({value:e,tabValues:m})?e:null}();return(0,i.A)((function(){N&&x(N)}),[N]),{selectedValue:j,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function x(e){var n=e.className,r=e.block,a=e.selectedValue,l=e.selectValue,i=e.tabValues,s=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=s.indexOf(n),t=i[r].value;t!==a&&(c(n),l(t))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,t=s.indexOf(e.currentTarget)+1;r=null!=(a=s[t])?a:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;r=null!=(o=s[l])?o:s[s.length-1]}null==(n=r)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,o=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},o,{className:(0,t.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,t=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=o.find((function(e){return e.props.value===t}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function g(e){var n=f(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,j.jsx)(x,Object.assign({},e,n)),(0,j.jsx)(v,Object.assign({},e,n))]})}function y(e){var n=(0,m.A)();return(0,j.jsx)(g,Object.assign({},e,{children:u(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var a=r(96540);const t={},o=a.createContext(t);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);