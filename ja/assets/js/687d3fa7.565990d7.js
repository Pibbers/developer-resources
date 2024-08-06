"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6723],{71938:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(74848),s=t(28453);const r={sidebar_position:1,author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"February 9th, 2024",description:"Getting started with ClearScape Analytics Experience",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","clearscape","csae"]},i="Getting started with ClearScape Analytics Experience",c={id:"get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae",title:"Getting started with ClearScape Analytics Experience",description:"Getting started with ClearScape Analytics Experience",source:"@site/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae.md",sourceDirName:"get-access-to-vantage/clearscape-analytics-experience",slug:"/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae",permalink:"/ja/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"February 9th, 2024",description:"Getting started with ClearScape Analytics Experience",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","clearscape","csae"]},sidebar:"tutorialSidebar",previous:{title:"Run Vantage Express on Azure",permalink:"/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure"},next:{title:"Use Teradata Studio/Express on Apple Mac M1/M2",permalink:"/ja/quickstarts/connect-to-vantage/install-teradata-studio-on-mac-m1-m2"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Create a ClearScape Analytics Experience account",id:"create-a-clearscape-analytics-experience-account",level:2},{value:"Create an Environment",id:"create-an-environment",level:2},{value:"Access demos",id:"access-demos",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"getting-started-with-clearscape-analytics-experience",children:"Getting started with ClearScape Analytics Experience"}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsxs)(a.a,{href:"https://www.teradata.com/platform/clearscape-analytics",children:["ClearScape Analytics",(0,n.jsx)("sup",{children:"TM"})]})," is a powerful analytics engine in ",(0,n.jsx)(a.a,{href:"https://www.teradata.com/platform/vantagecloud",children:"Teradata VantageCloud"}),". It delivers breakthrough performance, value, and growth across the enterprise with the most powerful, open and connected AI/ML capabilities on the market. You can experience ClearClearScape Analytics",(0,n.jsx)("sup",{children:"TM"})," and Teradata Vantage, in a non-production setting, through ",(0,n.jsx)(a.a,{href:"https://www.teradata.com/experience",children:"ClearScape Analytics Experience"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"In this how-to we will go through the steps for creating an environment in ClearScape Analytics Experience and access demos."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"VantageCloud",src:t(25507).A+"",width:"1140",height:"1133"})}),"\n",(0,n.jsx)(a.h2,{id:"create-a-clearscape-analytics-experience-account",children:"Create a ClearScape Analytics Experience account"}),"\n",(0,n.jsxs)(a.p,{children:["Head over to ",(0,n.jsx)(a.a,{href:"https://www.teradata.com/experience",children:"ClearScape Analytics Experience"})," and create a free account."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Register",src:t(47256).A+"",width:"2679",height:"1730"})}),"\n",(0,n.jsxs)(a.p,{children:["Sign in to your ",(0,n.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in",children:"ClearScape Analytics account"})," to create an environment and access demos."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Sign in",src:t(49301).A+"",width:"1509",height:"970"})}),"\n",(0,n.jsx)(a.h2,{id:"create-an-environment",children:"Create an Environment"}),"\n",(0,n.jsxs)(a.p,{children:["Once signed in, click on ",(0,n.jsx)(a.strong,{children:"CREATE ENVIRONMENT"})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Create environment",src:t(9691).A+"",width:"3797",height:"1765"})}),"\n",(0,n.jsx)(a.p,{children:"You will need to provide:"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Variable"}),(0,n.jsx)(a.th,{children:"Value"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.strong,{children:"environment name"})}),(0,n.jsx)(a.td,{children:'A name for your environment, e.g. "demo"'})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.strong,{children:"database password"})}),(0,n.jsxs)(a.td,{children:["A password of your choice, this password will be assigned to ",(0,n.jsx)(a.code,{children:"dbc"})," and ",(0,n.jsx)(a.code,{children:"demo_user"})," users"]})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.strong,{children:"Region"})}),(0,n.jsx)(a.td,{children:"Select a region from the dropdown"})]})]})]}),"\n",(0,n.jsx)(a.admonition,{type:"important",children:(0,n.jsx)(a.p,{children:"Note down the database password. You will need it to connect to the database."})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Environment params",src:t(68649).A+"",width:"898",height:"595"})}),"\n",(0,n.jsxs)(a.p,{children:["Click on ",(0,n.jsx)(a.em,{children:"CREATE"})," button to complete the creation of your environment and now, you can see details of your environment."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Environment details",src:t(90809).A+"",width:"3789",height:"1722"})}),"\n",(0,n.jsx)(a.h2,{id:"access-demos",children:"Access demos"}),"\n",(0,n.jsx)(a.p,{children:"The ClearScape Analytics Experience environment includes a variety of demos that showcase how to use analytics to solve business problems across many industries."}),"\n",(0,n.jsxs)(a.p,{children:["To access demos, click on ",(0,n.jsx)(a.strong,{children:"RUN DEMOS USING JUPYTER"})," button. It will open a Jupyter environment in a new tab of your browser."]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"You can find all the detail of demos on the demo index page."})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Usecases folder",src:t(26792).A+"",width:"3767",height:"2013"})}),"\n",(0,n.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(a.p,{children:"In this quick start, we learned how to create an environment in ClearScape Analytics Experience and access demos."}),"\n",(0,n.jsx)(a.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://api.clearscape.teradata.com/api-docs/",children:"ClearScape Analytics Experience API documentation"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.teradata.com/",children:"Teradata Documentation"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},25507:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/VantageCloud-8d3a71f8af4f22c1e4f74e0e6bf2f94d.png"},9691:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/csae_create_env-813cf46882083d7690f57ccb4c468704.png"},90809:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/csae_env_details-a5f7dcb9e9e70ebba9e2df806ef36ef2.png"},68649:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/csae_env_params-a9ef4efef54a9fd5f257199161eefbf0.png"},26792:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/csae_jupyter-478b39ed941b96ec4150b792772e6bc3.png"},47256:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/csae_register-080163faad840319f6ee39f891dac189.png"},49301:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/csae_signin-d2bbdfd37116f9754ce73a972bddadda.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>c});var n=t(96540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);