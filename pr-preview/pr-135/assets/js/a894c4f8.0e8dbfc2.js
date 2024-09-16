"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7848],{64563:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(74848),t=r(28453),i=r(56240),l=r(19365);const o={id:"create-first-project",title:"Create your first project",description:"Run a simple workflow from a Jupyter notebook.",sidebar_label:"Create your first project",sidebar_position:2,pagination_prev:null,pagination_next:null},s="Create your first project",c={id:"explore-and-analyze-data/create-first-project",title:"Create your first project",description:"Run a simple workflow from a Jupyter notebook.",source:"@site/docs/explore-and-analyze-data/create-first-project.md",sourceDirName:"explore-and-analyze-data",slug:"/explore-and-analyze-data/create-first-project",permalink:"/pr-preview/pr-135/ai-unlimited/explore-and-analyze-data/create-first-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"create-first-project",title:"Create your first project",description:"Run a simple workflow from a Jupyter notebook.",sidebar_label:"Create your first project",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},u=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Connect, and run your first workload",id:"connect-and-run-your-first-workload",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"create-your-first-project",children:"Create your first project"}),"\n",(0,a.jsx)(n.p,{children:"A project is a means to explore and analyze data from a Jupyter notebook."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Each project has a Git repository. ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-135/ai-unlimited/glossary#project-repository",children:"Learn why"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"For your first project, using data we provide, you'll complete this simple workflow:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create the project"}),"\n",(0,a.jsx)(n.li,{children:"Deploy the engine"}),"\n",(0,a.jsx)(n.li,{children:"Connect to the data and run a workload"}),"\n",(0,a.jsx)(n.li,{children:"Suspend the engine"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Your AI Unlimited admin is the person at your organization who set up AI Unlimited. From your admin, get these items:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The IP address or  hostname of the ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-135/ai-unlimited/glossary#ai-unlimited-manager",children:"AI Unlimited manager"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"These environment variables:"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"aws",label:"AWS",default:!0,children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"}),", ",(0,a.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"}),", and ",(0,a.jsx)(n.code,{children:"AWS_SESSION_TOKEN"})]})}),(0,a.jsx)(l.A,{value:"azure",label:"Azure",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ARM_SUBSCRIPTION_ID"}),", ",(0,a.jsx)(n.code,{children:"ARM_CLIENT_ID"}),", and ",(0,a.jsx)(n.code,{children:"ARM_CLIENT_SECRET"})]})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["From your profile, ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-135/ai-unlimited/explore-and-analyze-data/get-api-key",children:"get your API key"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["To run the sample workload, you'll need the ",(0,a.jsx)(n.code,{children:"salescenter.csv"})," file. Download the file from the ",(0,a.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/examples/GetStarted/data",children:"AI Unlimited GitHub repository"}),", and upload it to your Amazon Simple Storage Service (S3) or Azure Blob Storage location. Or if you're using your own file, modify the example accordingly."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"connect-and-run-your-first-workload",children:"Connect, and run your first workload"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"%help"})," for details on all the magic commands available in your notebook. Run ",(0,a.jsx)(n.code,{children:"%help <command>"})," for details on one of them."]}),(0,a.jsxs)(n.p,{children:["Or learn about the ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-135/ai-unlimited/explore-and-analyze-data/magic-commands",children:"magic commands"})," specific to AI Unlimited."]})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Connect to JupyterLab, open a notebook, and select the AI Unlimited kernel."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Connect to the manager."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T \t\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create the project."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_create project=<Project_Name>, env=<Cloud_Service_Provider>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create an object store authorization to store the cloud service provider credentials."}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"ACCESS_KEY_ID"}),", ",(0,a.jsx)(n.code,{children:"SECRET_ACCESS_KEY"}),", and ",(0,a.jsx)(n.code,{children:"REGION"})," with your values."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Deploy the engine."}),"\n",(0,a.jsxs)(n.p,{children:["The size can be small, medium, large, or extralarge. The default is small. See ",(0,a.jsx)(n.a,{href:"http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig",children:"AWS"})," or ",(0,a.jsx)(n.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview",children:"Azure"})," pricing information."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>\n"})}),"\n",(0,a.jsx)(n.p,{children:"The deployment process takes a few minutes. It generates a password."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Connect to the project."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%connect <Project_Name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"When the connection is made, provide the generated password."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run the sample workload."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Make sure you do not have tables named SalesCenter or SalesDemo in the selected database. Replace ",(0,a.jsx)(n.code,{children:"Authorization_Name"})," and the ",(0,a.jsx)(n.code,{children:"salescenter.csv_file_location"})," values in the following example with your own values."]})}),"\n",(0,a.jsx)(n.p,{children:"a. Create a table to store the sales center data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP FOREIGN TABLE SalesCenter;\n\nCREATE MULTISET FOREIGN TABLE SalesCenter ,\nEXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>\n(\n    Sales_Center_id INTEGER NOT NULL,\n    Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC\n)\nUSING\n(\n    LOCATION ('<salescenter.csv_file_location>')\n    MANIFEST ('FALSE')\n    ROWFORMAT  ('{\"field_delimiter\":\",\",\"record_delimiter\":\"\\n\",\"character_set\":\"LATIN\"}')\n    STOREDAS ('TEXTFILE')\n    HEADER ('TRUE')\n    STRIP_EXTERIOR_SPACES ('FALSE')\n    STRIP_ENCLOSING_CHAR ('NONE')\n)\nNO PRIMARY INDEX;\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"b. Verify that the data was inserted."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SalesCenter ORDER BY 1\n"})}),"\n",(0,a.jsx)(n.p,{children:"c. Create a table with the sales demo data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'DROP FOREIGN TABLE SalesDemo;\nCREATE MULTISET FOREIGN TABLE SalesDemo ,\nEXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>\n(\n    Sales_Center_ID INTEGER NOT NULL,\n    UNITS DECIMAL(15,4),\n    SALES DECIMAL(15,2),\n    "COST" DECIMAL(15,2)\n)\nUSING\n(\n   LOCATION (\'<salescenter.csv_file_location>\')\n   MANIFEST (\'FALSE\')\n   ROWFORMAT  (\'{"field_delimiter":",","record_delimiter":"\\n","character_set":"LATIN"}\')\n   STOREDAS (\'TEXTFILE\')\n   HEADER (\'FALSE\')\n   STRIP_EXTERIOR_SPACES (\'FALSE\')\n   STRIP_ENCLOSING_CHAR (\'"\')\n)\nNO PRIMARY INDEX;\n'})}),"\n",(0,a.jsx)(n.p,{children:"d. Verify that the sales demo data was inserted successfully."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SalesDemo ORDER BY sales\n"})}),"\n",(0,a.jsx)(n.p,{children:"Open the Navigator for your connection and verify that the tables were created. Run a row count on the tables to verify that the data was loaded."}),"\n",(0,a.jsx)(n.p,{children:"e. Chart the data to visualize the result."}),"\n",(0,a.jsx)(n.p,{children:"Provide X and Y axes for your chart."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%chart sales_center_name, sales, title=Sales Data\n"})}),"\n",(0,a.jsx)(n.p,{children:"f.\tDrop the tables."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP TABLE SalesCenter;\nDROP TABLE SalesDemo;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Back up your project metadata and object definitions (the schema) in your Git repository."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_backup project=<Project_Name>\n"})}),"\n",(0,a.jsx)(n.p,{children:"This backs up your project, but it does not suspend the engine."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Suspend the engine to avoid paying for unneeded engine resources."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%project_engine_suspend project=<Project_Name>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This backs up your project and suspends the engine. Typically you will not use ",(0,a.jsx)(n.code,{children:"%project_backup"})," immediately followed by ",(0,a.jsx)(n.code,{children:"%project_engine_suspend"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Congratulations! You've run your first workload."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var a=r(34164);const t={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>g});var a=r(96540),t=r(34164),i=r(23104),l=r(56347),o=r(205),s=r(57485);var c=r(89466);function d(e){var n,r;return null!=(n=null==(r=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function u(e){var n=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,a=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,a){return n.findIndex((function(n){return r(n,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,i=(0,l.W6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:t});return[(0,s.aZ)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function m(e){var n,r,t,i,l=e.defaultValue,s=e.queryString,d=void 0!==s&&s,m=e.groupId,j=u(e),f=(0,a.useState)((function(){return function(e){var n,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:j})})),x=f[0],b=f[1],v=p({queryString:d,groupId:m}),E=v[0],g=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,c.Dv)(n),t=r[0],i=r[1],[t,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),S=y[0],_=y[1],A=function(){var e=null!=E?E:S;return h({value:e,tabValues:j})?e:null}();return(0,o.A)((function(){A&&b(A)}),[A]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),_(e)}),[g,_,j]),tabValues:j}}var j=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function b(e){var n=e.className,r=e.block,a=e.selectedValue,l=e.selectValue,o=e.tabValues,s=[],c=(0,i.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=s.indexOf(n),t=o[r].value;t!==a&&(c(n),l(t))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,t=s.indexOf(e.currentTarget)+1;r=null!=(a=s[t])?a:s[0];break;case"ArrowLeft":var i,l=s.indexOf(e.currentTarget)-1;r=null!=(i=s[l])?i:s[s.length-1]}null==(n=r)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return s.push(e)},onKeyDown:u,onClick:d},i,{className:(0,t.A)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,t=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=i.find((function(e){return e.props.value===t}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function E(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,Object.assign({},e,n)),(0,x.jsx)(v,Object.assign({},e,n))]})}function g(e){var n=(0,j.A)();return(0,x.jsx)(E,Object.assign({},e,{children:d(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var a=r(96540);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);