"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6416],{41269:(e,a,t)=>{t.d(a,{Ay:()=>r,RM:()=>o});var n=t(74848),s=t(28453);const o=[];function i(e){const a={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(a.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function r(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},62680:(e,a,t)=>{t.d(a,{Ay:()=>r,RM:()=>o});var n=t(74848),s=t(28453);const o=[];function i(e){const a={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function r(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},82492:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=t(74848),s=t(28453),o=t(62680),i=t(41269);const r={id:"nos",sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"September 7th, 2021",description:"Teradata Vantage Native Object Storage - read and write from/to object storage, unified SQL interface for Vantage and object storage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},c="Query data stored in object storage",d={id:"manage-data/nos",title:"Query data stored in object storage",description:"Teradata Vantage Native Object Storage - read and write from/to object storage, unified SQL interface for Vantage and object storage.",source:"@site/quickstarts/manage-data/nos.md",sourceDirName:"manage-data",slug:"/manage-data/nos",permalink:"/pr-preview/pr-125/ko/quickstarts/manage-data/nos",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"nos",sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"September 7th, 2021",description:"Teradata Vantage Native Object Storage - read and write from/to object storage, unified SQL interface for Vantage and object storage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Ubuntu",permalink:"/pr-preview/pr-125/ko/quickstarts/connect-to-vantage/configure-odbc/ubuntu"},next:{title:"Select the right data ingestion solution for Teradata Vantage",permalink:"/pr-preview/pr-125/ko/quickstarts/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...o.RM,{value:"Explore data with NOS",id:"explore-data-with-nos",level:2},{value:"Query data with NOS",id:"query-data-with-nos",level:2},{value:"Load data from NOS into Vantage",id:"load-data-from-nos-into-vantage",level:2},{value:"Access private buckets",id:"access-private-buckets",level:2},{value:"Export data from Vantage to object storage",id:"export-data-from-vantage-to-object-storage",level:2},{value:"Summary",id:"summary",level:2},...i.RM];function h(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"query-data-stored-in-object-storage",children:"Query data stored in object storage"}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"Native Object Storage (NOS) is a Vantage feature that allows you to query data stored in files in object storage such as AWS S3, Google GCS, Azure Blob or on-prem implementations. It's useful in scenarios where you want to explore data without building a data pipeline to bring it into Vantage."}),"\n",(0,n.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(a.p,{children:"You need access to a Teradata Vantage instance. NOS is enabled in all Vantage editions from Vantage Express through Developer, DYI to Vantage as a Service starting from version 17.10."}),"\n",(0,n.jsx)(o.Ay,{}),"\n",(0,n.jsx)(a.h2,{id:"explore-data-with-nos",children:"Explore data with NOS"}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"Currently, NOS supports CSV, JSON (as array or new-line delimited), and Parquet data formats."})}),"\n",(0,n.jsxs)(a.p,{children:["Let's say you have a dataset stored as CSV files in an S3 bucket. You want to explore the dataset before you decide if you want to bring it into Vantage. For this scenario, we are going to use a public dataset published by Teradata that contains river flow data collected by the\nU.S. Geological Survey. The bucket is at ",(0,n.jsx)(a.a,{href:"https://td-usgs-public.s3.amazonaws.com/",children:"https://td-usgs-public.s3.amazonaws.com/"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Let's first have a look at sample CSV data. We take the first 10 rows that Vantage will fetch from the bucket:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT\n  TOP 10 *\nFROM (\n\tLOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'\n) AS d;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Here is what I've got:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"GageHeight2  Flow   site_no   datetime             Precipitation  GageHeight\n-----------  ------ --------  -------------------  -------------  ----------\n10.9         15300  09380000  2018-06-28 00:30     671            9.80\n10.8         14500  09380000  2018-06-28 01:00     673            9.64\n10.7         14100  09380000  2018-06-28 01:15     672            9.56\n11.0         16200  09380000  2018-06-27 00:00     669            9.97\n10.9         15700  09380000  2018-06-27 00:30     668            9.88\n10.8         15400  09380000  2018-06-27 00:45     672            9.82\n10.8         15100  09380000  2018-06-27 01:00     672            9.77\n10.8         14700  09380000  2018-06-27 01:15     672            9.68\n10.9         16000  09380000  2018-06-27 00:15     668            9.93\n10.8         14900  09380000  2018-06-28 00:45     672            9.72\n"})}),"\n",(0,n.jsx)(a.p,{children:"We have got plenty of numbers, but what do they mean? To answer this question, we will ask Vantage to detect the schema of the CSV files:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT\n  *\nFROM (\n\tLOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'\n\tRETURNTYPE='NOSREAD_SCHEMA'\n) AS d;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Vantage will now fetch a data sample to analyze the schema and return results:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"Name            Datatype                            FileType  Location\n--------------- ----------------------------------- --------- -------------------------------------------------------------------\nGageHeight2     decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv\nFlow            decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv\nsite_no         int                                 csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv\ndatetime        TIMESTAMP(0) FORMAT'Y4-MM-DDBHH:MI' csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv\nPrecipitation   decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv\nGageHeight      decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv\n"})}),"\n",(0,n.jsx)(a.p,{children:"We see that the CSV files have 6 columns. For each column, we get the name, the datatype and the file coordinates that were used to infer the schema."}),"\n",(0,n.jsx)(a.h2,{id:"query-data-with-nos",children:"Query data with NOS"}),"\n",(0,n.jsx)(a.p,{children:"Now that we know the schema, we can work with the dataset as if it was a regular SQL table. To prove the point, let's try to do some data aggregation. Let's get an average temperature per site for sites that collect temperatures."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT\n  site_no Site_no, AVG(Flow) Avg_Flow\nFROM (\n  LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'\n) AS d\nGROUP BY\n  site_no\nHAVING\n  Avg_Flow IS NOT NULL;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Result:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"Site_no  Avg_Flow\n-------- ---------\n09380000 11\n09423560 73\n09424900 93\n09429070 81\n"})}),"\n",(0,n.jsx)(a.p,{children:"To register your ad hoc exploratory activity as a permanent source, create it as a foreign table:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- If you are running this sample as dbc user you will not have permissions\n-- to create a table in dbc database. Instead, create a new database and use\n-- the newly create database to create a foreign table.\n\nCREATE DATABASE Riverflow\n  AS PERMANENT = 60e6, -- 60MB\n  SPOOL = 120e6; -- 120MB\n\n-- change current database to Riverflow\nDATABASE Riverflow;\n\nCREATE FOREIGN TABLE riverflow\n  USING ( LOCATION('/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/') );\n\nSELECT top 10 * FROM riverflow;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Result:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"Location                                                            GageHeight2 Flow site_no datetime            Precipitation GageHeight\n------------------------------------------------------------------- ----------- ---- ------- ------------------- ------------- ----------\n/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09429070/2018/07/02.csv null        null 9429070 2018-07-02 14:40:00 1.21          null\n/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:30:00 0.00          -0.01\n/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:45:00 0.00          -0.01\n/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 01:00:00 0.00          -0.01\n/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:15:00 0.00          -0.01\n/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09429070/2018/07/02.csv null        null 9429070 2018-07-02 14:38:00 1.06          null\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This time, the ",(0,n.jsx)(a.code,{children:"SELECT"})," statement looks like a regular select against an in-database table. If you require subsecond response time when querying the data, there is an easy way to bring the CSV data into Vantage to speed things up. Read on to find out how."]}),"\n",(0,n.jsx)(a.h2,{id:"load-data-from-nos-into-vantage",children:"Load data from NOS into Vantage"}),"\n",(0,n.jsxs)(a.p,{children:["Querying object storage takes time. What if you decided that the data looks interesting and you want to do some more analysis with a solution that will you quicker answers? The good news is that data returned with NOS can be used as a source for ",(0,n.jsx)(a.code,{children:"CREATE TABLE"})," statements. Assuming you have ",(0,n.jsx)(a.code,{children:"CREATE TABLE"})," privilege, you will be able to run:"]}),"\n",(0,n.jsxs)(a.p,{children:["IMPORTANT: This query assumes you created database ",(0,n.jsx)(a.code,{children:"Riverflow"})," and a foreign table called ",(0,n.jsx)(a.code,{children:"riverflow"})," in the previous step."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- This query assumes you created database `Riverflow`\n-- and a foreign table called `riverflow` in the previous step.\n\nCREATE MULTISET TABLE riverflow_native (site_no, Flow, GageHeight, datetime)\nAS (\n  SELECT site_no, Flow, GageHeight, datetime FROM riverflow\n) WITH DATA\nNO PRIMARY INDEX;\n\nSELECT TOP 10 * FROM riverflow_native;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Result:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"site_no   Flow  GageHeight  datetime\n-------  -----  ----------  -------------------\n9400815    .00        -.01  2018-07-10 00:30:00\n9400815    .00        -.01  2018-07-10 01:00:00\n9400815    .00        -.01  2018-07-10 01:15:00\n9400815    .00        -.01  2018-07-10 01:30:00\n9400815    .00        -.01  2018-07-10 02:00:00\n9400815    .00        -.01  2018-07-10 02:15:00\n9400815    .00        -.01  2018-07-10 01:45:00\n9400815    .00        -.01  2018-07-10 00:45:00\n9400815    .00        -.01  2018-07-10 00:15:00\n9400815    .00        -.01  2018-07-10 00:00:00\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This time, the ",(0,n.jsx)(a.code,{children:"SELECT"})," query returned in less than a second. Vantage didn't have to fetch the data from NOS. Instead, it answered using data that was already on its nodes."]}),"\n",(0,n.jsx)(a.h2,{id:"access-private-buckets",children:"Access private buckets"}),"\n",(0,n.jsx)(a.p,{children:"So far, we have used a public bucket. What if you have a private bucket? How do you tell Vantage what credentials it should use?"}),"\n",(0,n.jsx)(a.p,{children:"It is possible to inline your credentials directly into your query:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'SELECT\n  TOP 10 *\nFROM (\n  LOCATION=\'/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/\'\n  AUTHORIZATION=\'{"ACCESS_ID":"","ACCESS_KEY":""}\'\n) AS d;\n'})}),"\n",(0,n.jsx)(a.p,{children:"Entering these credentials all the time can be tedious and less secure. In Vantage, you can create an authorization object that will serve as a container for your credentials:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"CREATE AUTHORIZATION aws_authorization\n  USER 'YOUR-ACCESS-KEY-ID'\n  PASSWORD 'YOUR-SECRET-ACCESS-KEY';\n"})}),"\n",(0,n.jsx)(a.p,{children:"You can then reference your authorization object when you create a foreign table:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"CREATE FOREIGN TABLE riverflow\n, EXTERNAL SECURITY aws_authorization\nUSING ( LOCATION('/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/') );\n"})}),"\n",(0,n.jsx)(a.h2,{id:"export-data-from-vantage-to-object-storage",children:"Export data from Vantage to object storage"}),"\n",(0,n.jsxs)(a.p,{children:["So far, we have talked about reading and importing data from object storage. Wouldn't it be nice if we had a way to use SQL to export data from Vantage to object storage? This is exactly what ",(0,n.jsx)(a.code,{children:"WRITE_NOS"})," function is for. Let's say we want to export data from ",(0,n.jsx)(a.code,{children:"riverflow_native"})," table to object storage. You can do so with the following query:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM WRITE_NOS (\n  ON ( SELECT * FROM riverflow_native )\n  PARTITION BY site_no ORDER BY site_no\n  USING\n    LOCATION('YOUR-OBJECT-STORE-URI')\n    AUTHORIZATION(aws_authorization)\n    STOREDAS('PARQUET')\n    COMPRESSION('SNAPPY')\n    NAMING('RANGE')\n    INCLUDE_ORDERING('TRUE')\n) AS d;\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Here, we instruct Vantage to take data from ",(0,n.jsx)(a.code,{children:"riverflow_native"})," and save it in ",(0,n.jsx)(a.code,{children:"YOUR-OBJECT-STORE-URI"})," bucket using ",(0,n.jsx)(a.code,{children:"parquet"})," format. The data will be split into files by ",(0,n.jsx)(a.code,{children:"site_no"})," attribute. The files will be compressed."]}),"\n",(0,n.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(a.p,{children:"In this quick start we have learned how to read data from object storage using Native Object Storage (NOS) functionality in Vantage. NOS supports reading and importing data stored in CSV, JSON and Parquet formats. NOS can also export data from Vantage to object storage."}),"\n",(0,n.jsx)(a.h1,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root",children:"Teradata Vantage\u2122 - Native Object Store Getting Started Guide"})}),"\n"]}),"\n",(0,n.jsx)(i.Ay,{})]})}function g(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>r});var n=t(96540);const s={},o=n.createContext(s);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);