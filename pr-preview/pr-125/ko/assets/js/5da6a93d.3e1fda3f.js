"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9486],{99073:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(74848),n=t(28453);const i={id:"select-the-right-data-ingestion-tools-for-teradata-vantage",sidebar_position:2,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"February 29th, 2024",description:"Recommendation of data ingestions tools to be used in different use cases for Teradata Vantage",keywords:["data ingestion","teradata","nos","tpt","bteq","querygrid","airbyte","object store","saas","vantage","apache","spark","presto","oracle","Flow"]},s="Select the right data ingestion solution for Teradata Vantage",o={id:"manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",title:"Select the right data ingestion solution for Teradata Vantage",description:"Recommendation of data ingestions tools to be used in different use cases for Teradata Vantage",source:"@site/quickstarts/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",permalink:"/pr-preview/pr-125/ko/quickstarts/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"select-the-right-data-ingestion-tools-for-teradata-vantage",sidebar_position:2,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"February 29th, 2024",description:"Recommendation of data ingestions tools to be used in different use cases for Teradata Vantage",keywords:["data ingestion","teradata","nos","tpt","bteq","querygrid","airbyte","object store","saas","vantage","apache","spark","presto","oracle","Flow"]},sidebar:"tutorialSidebar",previous:{title:"Query data stored in object storage",permalink:"/pr-preview/pr-125/ko/quickstarts/manage-data/nos"},next:{title:"Use Apache Airflow with Teradata Vantage",permalink:"/pr-preview/pr-125/ko/quickstarts/manage-data/airflow"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"High-volume ingestion, including streaming",id:"high-volume-ingestion-including-streaming",level:3},{value:"Ingest data from object storage",id:"ingest-data-from-object-storage",level:3},{value:"Ingest data from local files",id:"ingest-data-from-local-files",level:3},{value:"Ingest data from SaaS applications",id:"ingest-data-from-saas-applications",level:3},{value:"Use data stored in other databases for unified query processing",id:"use-data-stored-in-other-databases-for-unified-query-processing",level:3},{value:"Summary",id:"summary",level:2},{value:"Further Reading",id:"further-reading",level:2}];function c(e){const a={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"select-the-right-data-ingestion-solution-for-teradata-vantage",children:"Select the right data ingestion solution for Teradata Vantage"}),"\n",(0,r.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(a.p,{children:"This article outlines different use cases involving data ingestion. It lists available solutions and recommends the optimal solution for each use case."}),"\n",(0,r.jsx)(a.h3,{id:"high-volume-ingestion-including-streaming",children:"High-volume ingestion, including streaming"}),"\n",(0,r.jsx)(a.p,{children:"Available solutions:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Use ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-Application-Programming-Interface-Programmer-Guide-17.20",children:"Teradata Parallel Transporter API"})]}),"\n",(0,r.jsxs)(a.li,{children:["Stream data to object storage and then ingest using ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Use the ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})," command line utility."]}),"\n",(0,r.jsxs)(a.li,{children:["Use ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Getting-Started",children:"Teradata Query Service"})," - REST API to execute SQL statements in the database."]}),"\n",(0,r.jsx)(a.li,{children:"Use Teradata database drivers such as JDBC (Java), teradatasql (Python), Node.js driver, ODBC, .NET Data Provider."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Teradata Parallel Transport API is usually the most performant solution which offers high throughput and minimum latency. Use it if you need to ingest tens of thousands of rows per second and if you are comfortable using C language."}),"\n",(0,r.jsx)(a.p,{children:"Use the Teradata database drivers when the number of events is in thousands per second. Consider using the Fastload protocol that is available in the most popular drivers e.g. JDBC, Python."}),"\n",(0,r.jsx)(a.p,{children:"If you don't want to manage the dependency on the driver libraries, use Query Service. Since Query Service uses the regular driver protocol to communicate to the database, the throughput of this solution is similar to the throughput offered by database drivers such as JDBC. If you are a vendor and are looking to integrate your product with Teradata, please be aware that not all Teradata customers have Query Service enabled in their sites."}),"\n",(0,r.jsx)(a.p,{children:"If your solution can accept higher latency, a good option is to stream events to object storage and then read the data using NOS. This solution usually requires the least amount of effort."}),"\n",(0,r.jsx)(a.h3,{id:"ingest-data-from-object-storage",children:"Ingest data from object storage"}),"\n",(0,r.jsx)(a.p,{children:"Available solutions:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Loading-Data/Introduction-to-Flow",children:"Flow (VantageCloud Lake only)"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Flow is the recommended ingestion mechanism to bring data from object storage to VantageCloud Lake. For all other Teradata Vantage editions, Teradata NOS is the recommended option. NOS can leverage all Teradata nodes to perform ingestion. Teradata Parallel Transporter (TPT) runs on the client side. It can be used when there is no connectivity from NOS to object storage."}),"\n",(0,r.jsx)(a.h3,{id:"ingest-data-from-local-files",children:"Ingest data from local files"}),"\n",(0,r.jsx)(a.p,{children:"Available solutions:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Basic-Teradata-Query-Reference-17.20/Introduction-to-BTEQ",children:"BTEQ"})}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"TPT is the recommended option to load data from local files. TPT is optimized for scalability and parallelism, thus it has the best throughput of all available options. BTEQ can be used when an ingestion process requires scripting. It also makes sense to  continue using BTEQ if all your other ingestion pipelines run in BTEQ."}),"\n",(0,r.jsx)(a.h3,{id:"ingest-data-from-saas-applications",children:"Ingest data from SaaS applications"}),"\n",(0,r.jsx)(a.p,{children:"Available solutions:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Multiple 3rd party tools such as ",(0,r.jsx)(a.a,{href:"https://airbyte.com/",children:"Airbyte"}),", ",(0,r.jsx)(a.a,{href:"https://precog.com/",children:"Precog"}),", ",(0,r.jsx)(a.a,{href:"https://nexla.com/",children:"Nexla"}),", ",(0,r.jsx)(a.a,{href:"https://fivetran.com/",children:"Fivetran"})]}),"\n",(0,r.jsxs)(a.li,{children:["Export from SaaS apps to local files and then ingest using ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})]}),"\n",(0,r.jsxs)(a.li,{children:["Export from SaaS apps to object storage and then ingest using ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"3rd party tools are usually a better option to move data from SaaS applications to Teradata Vantage. They offer broad support for data sources and eliminate the need to manage intermediate steps such as exporting and storing exported datasets."}),"\n",(0,r.jsx)(a.h3,{id:"use-data-stored-in-other-databases-for-unified-query-processing",children:"Use data stored in other databases for unified query processing"}),"\n",(0,r.jsx)(a.p,{children:"Available solutions:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05",children:"Teradata QueryGrid"})}),"\n",(0,r.jsxs)(a.li,{children:["Export from other databases to local files and then ingest using ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})]}),"\n",(0,r.jsxs)(a.li,{children:["Export from other databases to object storage and then ingest using ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"QueryGrid is the recommended option to move limited quantities of data between different systems/platforms. This includes movement within Vantage instances, Apache Spark, Oracle, Presto, etc. It is especially suited to situations when what needs to be synced is described by complex conditions that can be expressed in SQL."}),"\n",(0,r.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(a.p,{children:"In this article, we explored various data ingestion use cases, provided a list of available tools for each use case, and identified the recommended options for different scenarios."}),"\n",(0,r.jsx)(a.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"/pr-preview/pr-125/ko/quickstarts/manage-data/nos",children:"Query data stored in object storage using NOS"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"/pr-preview/pr-125/ko/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",children:"Run large bulkloads efficiently with Teradata Parallel Transporter"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05",children:"Teradata QueryGrid"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"/pr-preview/pr-125/ko/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage",children:"Use Airbyte to load data from external sources to Teradata Vantage"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var r=t(96540);const n={},i=r.createContext(n);function s(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);