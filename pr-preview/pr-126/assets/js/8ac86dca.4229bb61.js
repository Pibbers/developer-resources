"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3113],{41269:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>o});var n=a(74848),s=a(28453);const o=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},62680:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>o});var n=a(74848),s=a(28453);const o=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},5143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=a(74848),s=a(28453),o=a(62680),r=a(41269);const i={sidebar_position:12,author:"Kevin Bogusch, Paul Ibberson",email:"paul.ibberson2@teradata.com",page_last_update:"January 14th, 2022",description:"Connect Teradata Vantage to Power BI Desktop.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","microsoft power bi","power bi"]},c="Create Vizualizations in Power BI using Vantage",d={id:"analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage",title:"Create Vizualizations in Power BI using Vantage",description:"Connect Teradata Vantage to Power BI Desktop.",source:"@site/quickstarts/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage.md",sourceDirName:"analyze-data",slug:"/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage",permalink:"/pr-preview/pr-126/quickstarts/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,author:"Kevin Bogusch, Paul Ibberson",email:"paul.ibberson2@teradata.com",page_last_update:"January 14th, 2022",description:"Connect Teradata Vantage to Power BI Desktop.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","microsoft power bi","power bi"]},sidebar:"tutorialSidebar",previous:{title:"Integrate Teradata Jupyter extensions with SageMaker notebook instance",permalink:"/pr-preview/pr-126/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker"},next:{title:"Integrate Teradata Vantage with KNIME Analytics Platform",permalink:"/pr-preview/pr-126/quickstarts/analyze-data/integrate-teradata-vantage-with-knime"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...o.RM,{value:"Getting Started",id:"getting-started",level:2},{value:"Install Power BI Desktop",id:"install-power-bi-desktop",level:3},{value:"Install the .NET Data Provider for Teradata",id:"install-the-net-data-provider-for-teradata",level:3},{value:"Connect to Teradata Vantage",id:"connect-to-teradata-vantage",level:3},{value:"Next steps",id:"next-steps",level:2},...r.RM];function p(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-vizualizations-in-power-bi-using-vantage",children:"Create Vizualizations in Power BI using Vantage"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This guide includes content from both Microsoft and Teradata product documentation."})}),"\n",(0,n.jsx)(t.p,{children:"This article describes the process to connect your Power BI Desktop to Teradata Vantage for creating reports and dramatic visualizations of your data.  Power BI supports Teradata Vantage as a data source and can use the underlying data just like any other data source in Power BI Desktop."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/power-bi-overview",children:"Power BI"})," is a collection of software services, applications, and connectors that work together to turn your unrelated sources of data into coherent, visually immersive, and interactive insights."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Power BI consists of:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Windows desktop application, called ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/fundamentals/desktop-what-is-desktop",children:"Power BI Desktop"})]}),"\n",(0,n.jsxs)(t.li,{children:["An online SaaS (Software as a Service) service, called the ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/fundamentals/power-bi-service-overview",children:"Power BI service"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/consumer/mobile/mobile-apps-for-mobile-devices",children:"Power BI mobile"})," apps for Windows, iOS, and Android devices"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI elements",src:a(76053).A+"",width:"1003",height:"463"})}),"\n",(0,n.jsx)(t.p,{children:"These three elements\u2014Power BI Desktop, the Power BI service, and the mobile apps\u2014are designed to let people create, share, and consume business insights in the way that serves them, or their role, most effectively."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI overview blocks",src:a(52195).A+"",width:"1200",height:"600"})}),"\n",(0,n.jsxs)(t.p,{children:["A fourth element, ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/report-server/get-started",children:"Power BI Report Server"}),", allows you to publish Power BI reports to an on-premises report server, after creating them in Power BI Desktop."]}),"\n",(0,n.jsxs)(t.p,{children:["Power BI Desktop supports Vantage as a 3rd party data source not as a \u2018native\u2019 data source.  Instead, published reports on Power BI service will need to use the ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem",children:"on-premises data gateway"})," component to access Vantage."]}),"\n",(0,n.jsxs)(t.p,{children:["This getting started guide will show you how to connect to a Teradata Vantage. Power BI Desktop Teradata connector uses the ",(0,n.jsx)(t.a,{href:"https://downloads.teradata.com/download/connectivity/net-data-provider-for-teradata",children:".NET Data Provider for Teradata"}),". You need to install the driver on computers that use the Power BI Desktop. The .NET Data Provider for Teradata single installation supports both 32-bit or 64-bit Power BI Desktop application."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"You are expected to be familiar with Azure services, Teradata Vantage, and Power BI Desktop."}),"\n",(0,n.jsx)(t.p,{children:"You will need the following accounts and system."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The Power BI Desktop is a free application for Windows. (Power BI Desktop is not available for Macs. You could run it in a virtual machine, such as ",(0,n.jsx)(t.a,{href:"https://www.parallels.com",children:"Parallels"})," or ",(0,n.jsx)(t.a,{href:"https://www.vmware.com/products/fusion.html",children:"VMware Fusion"}),", or in Apple\u2019s ",(0,n.jsx)(t.a,{href:"https://support.apple.com/en-vn/boot-camp",children:"Boot Camp"}),", but that is beyond the scope of this article.)"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"A Teradata Vantage instance with a user and password. The user must have permission to data that can be used by Power BI Desktop. Vantage must be accessible from Power BI Desktop."}),"\n",(0,n.jsx)(o.Ay,{}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://downloads.teradata.com/download/connectivity/net-data-provider-for-teradata",children:".NET Data Provider for Teradata"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.h3,{id:"install-power-bi-desktop",children:"Install Power BI Desktop"}),"\n",(0,n.jsxs)(t.p,{children:["You can install Power BI Desktop from the ",(0,n.jsx)(t.a,{href:"https://aka.ms/pbidesktopstore",children:"Microsoft Store"})," or ",(0,n.jsx)(t.a,{href:"https://aka.ms/pbiSingleInstaller",children:"download the installer"})," and run it directly."]}),"\n",(0,n.jsx)(t.h3,{id:"install-the-net-data-provider-for-teradata",children:"Install the .NET Data Provider for Teradata"}),"\n",(0,n.jsxs)(t.p,{children:["Download and install the latest version of the ",(0,n.jsx)(t.a,{href:"https://downloads.teradata.com/download/connectivity/net-data-provider-for-teradata",children:".NET Data Provider for Teradata"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Note that there are multiple files available for download. You want the file that starts with \u201ctdnetdp\u201d."}),"\n",(0,n.jsx)(t.h3,{id:"connect-to-teradata-vantage",children:"Connect to Teradata Vantage"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run Power BI Desktop, which has a yellow icon.\n",(0,n.jsx)(t.img,{alt:"Power BI icon",src:a(11101).A+"",width:"1200",height:"630"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["If the opening (splash) screen is showing, click on Get data.\n",(0,n.jsx)(t.img,{alt:"Power BI splash screen",src:a(13181).A+"",width:"295",height:"319"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Otherwise, if you are in the main form of Power BI, ensure that you are on the ",(0,n.jsx)(t.em,{children:"Home"})," ribbon and click on ",(0,n.jsx)(t.em,{children:"Get data"}),". Click on ",(0,n.jsx)(t.em,{children:"More\u2026"}),".\n",(0,n.jsx)(t.img,{alt:"Power BI Get Data menu",src:a(50325).A+"",width:"230",height:"533"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.em,{children:"Database"})," on the left."]}),"\n",(0,n.jsxs)(t.li,{children:["Scroll the list on the right until you see ",(0,n.jsx)(t.em,{children:"Teradata database"}),". Click on ",(0,n.jsx)(t.em,{children:"Teradata database"}),", and then click on the ",(0,n.jsx)(t.em,{children:"Connect"})," button."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"(\u201cTeradata database\u201d and \u201cTeradata Vantage\u201d are synonymous in this article.)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI Database picker",src:a(67045).A+"",width:"602",height:"662"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In the window that appears, enter the name or IP address of your Vantage system into the text box. You can choose to ",(0,n.jsx)(t.em,{children:"Import"})," data directly into Power BI data model, or connect directly to the data source using ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-use-directquery",children:"DirectQuery"})," and click ",(0,n.jsx)(t.em,{children:"OK"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI server connection",src:a(31955).A+"",width:"700",height:"296"})}),"\n",(0,n.jsxs)(t.p,{children:["(Click ",(0,n.jsx)(t.em,{children:"Advanced"})," options to submit hand-crafted SQL statement.)"]}),"\n",(0,n.jsxs)(t.p,{children:["For credentials, you have the option of connecting with your ",(0,n.jsx)(t.em,{children:"Windows"})," login or ",(0,n.jsx)(t.em,{children:"Database"})," username defined in Vantage, which is more common. Select the appropriate    authentication method and enter in your username and password. Click ",(0,n.jsx)(t.em,{children:"Connect"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You also have the option of authenticating with an LDAP server. This option is hidden by default."}),"\n",(0,n.jsxs)(t.p,{children:["If you set the environment variable, ",(0,n.jsx)(t.em,{children:"PBI_EnableTeradataLdap"}),", to ",(0,n.jsx)(t.em,{children:"true"}),", then the LDAP authentication method will become available."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI LDAP connection",src:a(29109).A+"",width:"695",height:"319"})}),"\n",(0,n.jsx)(t.p,{children:"Do note that LDAP is not supported with the on-premises data gateway, which is used for reports that are published to the Power BI service. If you need LDAP authentication and are using the on-premises data gateway, you will need to submit an incident to Microsoft and request support."}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, you can ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-sso-kerberos",children:"configure Kerberos-based SSO from Power BI service to on-premise data sources"})," like Teradata."]}),"\n",(0,n.jsxs)(t.p,{children:["Once you have connected to the Vantage system, Power BI Desktop remembers the credentials for future connections to the system. You can modify these credentials by going to ",(0,n.jsx)(t.em,{children:"File > Options and settings > Data source settings"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The Navigator window appears after a successful connection. It displays the data available on the Vantage system. You can select one or more elements to use in Power BI Desktop."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI Navigator",src:a(40351).A+"",width:"875",height:"702"})}),"\n",(0,n.jsx)(t.p,{children:"You preview a table by clicking on its name. If you want to load it into Power BI Desktop, ensure that you click the checkbox next to the table name."}),"\n",(0,n.jsxs)(t.p,{children:["You can ",(0,n.jsx)(t.em,{children:"Load"})," the selected table, which brings it into Power BI Desktop. You can also ",(0,n.jsx)(t.em,{children:"Edit"})," the query, which opens a query editor so you can filter and refine the set of data you want to load."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Edit"})," may be called ",(0,n.jsx)(t.em,{children:"Transform data"}),", depending upon the version of Power BI Desktop that you have."]}),"\n",(0,n.jsxs)(t.p,{children:["For information on joining tables, see ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-create-and-manage-relationships",children:"Create and Manage Relationships in Power BI Desktop"})," feature."]}),"\n",(0,n.jsxs)(t.p,{children:["To publish your report, click ",(0,n.jsx)(t.em,{children:"Publish"})," on ",(0,n.jsx)(t.em,{children:"Home"})," ribbon in Power BI Desktop."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI Publish",src:a(45237).A+"",width:"1199",height:"795"})}),"\n",(0,n.jsxs)(t.p,{children:["Power BI Desktop will prompt you to save your report. Choose ",(0,n.jsx)(t.em,{children:"My workspace"})," and click ",(0,n.jsx)(t.em,{children:"Select"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI publish to my workspace",src:a(34171).A+"",width:"594",height:"375"})}),"\n",(0,n.jsxs)(t.p,{children:["Once report has been published, click ",(0,n.jsx)(t.em,{children:"Got it"})," to close. You may also click the link, which has the report name in the link."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI successfully published",src:a(52785).A+"",width:"498",height:"264"})}),"\n",(0,n.jsx)(t.p,{children:"This is an example of a report created in Power BI Desktop."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Power BI Report",src:a(16628).A+"",width:"872",height:"678"})}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsx)(t.p,{children:"You can combine data from many sources with Power BI Desktop. Look at the following links for more information."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-what-is-desktop",children:"What is Power BI Desktop?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-data-sources",children:"Data Sources in Power BI Desktop"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-shape-and-combine-data",children:"Shape and Combine Data with Power BI Desktop"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-connect-excel",children:"Connect to Excel workbooks in Power BI Desktop"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-enter-data-directly-into-desktop",children:"Enter data directly into Power BI Desktop"})}),"\n"]}),"\n","\n",(0,n.jsx)(r.Ay,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},67045:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.database.picker-0c3a95af4e96e3890fa7e9bb1047c1e4.png"},76053:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.elements-7c509f34867df505078ab42cfced3858.png"},50325:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.get.data.menu-7cc2881829dadf3ef241f65a67176d41.png"},11101:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.icon-686f17e289d89db488c4977af37b14fc.png"},29109:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.ldap-1656d9dbc70f0a17f76783072c78fb38.png"},40351:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.navigator-9067279e438118d84c41fb1cfeb60874.png"},52195:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.overview.blocks-42e18a00f92a3359c85da669900bf041.png"},45237:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.publish-1edcde2a9b2867f80ab3e52e211c16ad.png"},16628:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.report-5245356ef69bb1fc3ebf0db94a4dadcf.png"},31955:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.server.connect-2e90065abf0e88841fb3b88f895ab10e.png"},13181:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.splash.screen-be6bb79ab97fe49511730d2e603f7367.png"},52785:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.success-f6f48b4ec58cfecf0668ca70634e292a.png"},34171:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/power.bi.workspace-3f59c51f2ad2db7ca66559447bcd0062.png"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var n=a(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);