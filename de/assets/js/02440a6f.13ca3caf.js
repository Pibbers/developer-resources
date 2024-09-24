"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2120],{36002:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var i=r(74848),t=r(28453),a=r(56240),l=r(19365);const s={id:"collaborate-project",title:"An einem Projekt zusammenarbeiten",description:"Erfahren Sie, wie Sie als Mitarbeiter auf ein Projekt zugreifen k\xf6nnen",sidebar_position:3,sidebar_label:"An einem Projekt zusammenarbeiten",pagination_prev:null,pagination_next:null},o="An einem Projekt zusammenarbeiten",u={id:"explore-and-analyze-data/collaborate-project",title:"An einem Projekt zusammenarbeiten",description:"Erfahren Sie, wie Sie als Mitarbeiter auf ein Projekt zugreifen k\xf6nnen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/explore-and-analyze-data/collaborate-project.md",sourceDirName:"explore-and-analyze-data",slug:"/explore-and-analyze-data/collaborate-project",permalink:"/de/ai-unlimited/explore-and-analyze-data/collaborate-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"collaborate-project",title:"An einem Projekt zusammenarbeiten",description:"Erfahren Sie, wie Sie als Mitarbeiter auf ein Projekt zugreifen k\xf6nnen",sidebar_position:3,sidebar_label:"An einem Projekt zusammenarbeiten",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Bevor Sie beginnen",id:"bevor-sie-beginnen",level:2},{value:"Zugriff auf das Projekt",id:"zugriff-auf-das-projekt",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"an-einem-projekt-zusammenarbeiten",children:"An einem Projekt zusammenarbeiten"}),"\n",(0,i.jsx)(n.p,{children:"Ein Projekt ist ein Mittel zum Erkunden und Analysieren von Daten aus einem Jupyter-Notebook."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Jedes Projekt hat ein Git-Repository. ",(0,i.jsx)(n.a,{href:"/de/ai-unlimited/glossary#project-repository",children:"Erfahren Sie warum"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Ein Projektbesitzer k\xf6nnte dich als Mitarbeiter ",(0,i.jsx)(n.a,{href:"/de/ai-unlimited/manage-ai-unlimited/add-collaborators",children:"zu einem Projekt hinzuf\xfcgen"}),". Um einen Beitrag zu leisten, m\xfcssen Sie von einem Jupyter-Notebook aus auf das Projekt zugreifen."]}),"\n",(0,i.jsx)(n.h2,{id:"bevor-sie-beginnen",children:"Bevor Sie beginnen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Erhalten Sie vom Projektbesitzer diese Elemente:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die IP-Adresse oder der Hostname des ",(0,i.jsx)(n.a,{href:"/de/ai-unlimited/glossary#ai-unlimited-manager",children:"AI Unlimited-Manager"})]}),"\n",(0,i.jsx)(n.li,{children:"Den Projektnamen"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Aus Ihrem Profil, ",(0,i.jsx)(n.a,{href:"/de/ai-unlimited/explore-and-analyze-data/get-api-key",children:"holen Sie sich Ihren API-Schl\xfcssel"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["F\xfchren Sie ",(0,i.jsx)(n.code,{children:"%help"})," aus, um Einzelheiten zu allen in Ihrem Notebook verf\xfcgbaren magischen Befehlen zu erhalten. F\xfchren Sie ",(0,i.jsx)(n.code,{children:"%help <command>"})," aus, um Einzelheiten zu einem davon zu erhalten."]}),(0,i.jsxs)(n.p,{children:["Oder erfahren Sie mehr \xfcber die ",(0,i.jsx)(n.a,{href:"/de/ai-unlimited/explore-and-analyze-data/magic-commands",children:"magische Befehle"})," speziell f\xfcr AI Unlimited."]})]}),"\n",(0,i.jsx)(n.h2,{id:"zugriff-auf-das-projekt",children:"Zugriff auf das Projekt"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stellen Sie eine Verbindung zu JupyterLab her, \xf6ffnen Sie ein Notebook und w\xe4hlen Sie den AI Unlimited-Kernel aus."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stellen Sie eine Verbindung zum Manager her."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Finden Sie heraus, ob die Engine bereitgestellt ist."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_list project=<Project_Name>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Wenn die Engine nicht bereitgestellt ist, stellen Sie sie bereit und stellen Sie das Projekt wieder her."}),"\n",(0,i.jsxs)(n.p,{children:["Die Gr\xf6\xdfe kann klein, mittel, gro\xdf oder extragro\xdf sein. Die Standardeinstellung ist klein. Siehe Preisinformationen von ",(0,i.jsx)(n.a,{href:"http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig",children:"AWS"})," oder ",(0,i.jsx)(n.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview",children:"Azure"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Wenn Sie die Anzahl der Knoten nicht angeben, wird ein Knoten bereitgestellt. Der Standardwert f\xfcr die Wiederherstellung ist \u201etrue\u201c."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(l.A,{value:"aws1",label:"AWS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>\n"})})}),(0,i.jsx)(l.A,{value:"azure",label:"Azure",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>\n"})})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Holen Sie sich Ihr Passwort f\xfcr die Engine."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_user_list project=<Project_Name>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Aktualisieren Sie die Verbindung, um Ihr Notebook einzuschlie\xdfen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_connection_add project=<Project_Name>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stellen Sie eine Verbindung zum Projekt her."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%connect <Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Geben Sie Ihr Passwort ein, wenn die Verbindung hergestellt ist."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sie sind fertig! Jetzt k\xf6nnen Sie zum Projekt beitragen."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var i=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,l),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>k});var i=r(96540),t=r(34164),a=r(23104),l=r(56347),s=r(205),o=r(57485);var u=r(89466);function c(e){var n,r;return null!=(n=null==(r=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function d(e){var n=e.values,r=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,i=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,i){return n.findIndex((function(n){return r(n,e)}))!==i})));if(i.length>0)throw new Error('Docusaurus error: Duplicate values "'+i.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,a=(0,l.W6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,i=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:r,groupId:t});return[(0,o.aZ)(s),(0,i.useCallback)((function(e){if(s){var n=new URLSearchParams(a.location.search);n.set(s,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[s,a])]}function m(e){var n,r,t,a,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,m=e.groupId,f=d(e),b=(0,i.useState)((function(){return function(e){var n,r=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:f})})),j=b[0],g=b[1],v=p({queryString:c,groupId:m}),x=v[0],k=v[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,u.Dv)(n),t=r[0],a=r[1],[t,(0,i.useCallback)((function(e){n&&a.set(e)}),[n,a])]),y=_[0],S=_[1],z=function(){var e=null!=x?x:y;return h({value:e,tabValues:f})?e:null}();return(0,s.A)((function(){z&&g(z)}),[z]),{selectedValue:j,selectValue:(0,i.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),S(e)}),[k,S,f]),tabValues:f}}var f=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function g(e){var n=e.className,r=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,o=[],u=(0,a.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=o.indexOf(n),t=s[r].value;t!==i&&(u(n),l(t))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var i,t=o.indexOf(e.currentTarget)+1;r=null!=(i=o[t])?i:o[0];break;case"ArrowLeft":var a,l=o.indexOf(e.currentTarget)-1;r=null!=(a=o[l])?a:o[o.length-1]}null==(n=r)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},a,{className:(0,t.A)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":i===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,t=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=a.find((function(e){return e.props.value===t}));return l?(0,i.cloneElement)(l,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function x(e){var n=m(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,Object.assign({},e,n)),(0,j.jsx)(v,Object.assign({},e,n))]})}function k(e){var n=(0,f.A)();return(0,j.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var i=r(96540);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);