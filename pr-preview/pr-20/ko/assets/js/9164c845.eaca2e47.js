"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5707],{41269:(e,a,n)=>{n.d(a,{Ay:()=>s,RM:()=>o});var t=n(74848),r=n(28453);const o=[];function i(e){const a={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If you have any questions or need further assistance, please visit our ",(0,t.jsx)(a.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function s(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},62680:(e,a,n)=>{n.d(a,{Ay:()=>s,RM:()=>o});var t=n(74848),r=n(28453);const o=[];function i(e){const a={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function s(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},18189:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>f,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>T});var t=n(74848),r=n(28453),o=n(62680),i=n(56240),s=n(19365);function l(e){const a={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(s.A,{value:"Windows",label:"Windows",default:!0,children:[(0,t.jsx)(a.p,{children:"Run in Powershell:"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"Unzip the downloaded file and run `setup.exe`.\n"})})]}),(0,t.jsx)(s.A,{value:"MacOS",label:"MacOS",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"Unzip the downloaded file and run `TeradataToolsAndUtilitiesXX.XX.XX.pkg`.\n"})})}),(0,t.jsxs)(s.A,{value:"Linux",label:"Linux",children:[(0,t.jsx)(a.p,{children:"Unzip the downloaded file, go to the unzipped directory and run:"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"./setup.sh a\n"})})]})]})}function d(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}var c=n(41269);const u={sidebar_position:11,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"April 6th, 2022",title:"Load data with TPT",description:"Load data into Vantage efficiently using Teradata Parallel Transporter (TPT).",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","Fastload","Teradata Parallel Transporter","TPT"],id:"run-bulkloads-efficiently-with-teradata-parallel-transporter"},p="Run large bulkloads efficiently with Teradata Parallel Transporter (TPT)",h={id:"manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",title:"Load data with TPT",description:"Load data into Vantage efficiently using Teradata Parallel Transporter (TPT).",source:"@site/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter.md",sourceDirName:"manage-data",slug:"/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",permalink:"/pr-preview/pr-20/ko/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"April 6th, 2022",title:"Load data with TPT",description:"Load data into Vantage efficiently using Teradata Parallel Transporter (TPT).",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","Fastload","Teradata Parallel Transporter","TPT"],id:"run-bulkloads-efficiently-with-teradata-parallel-transporter"},sidebar:"tutorialSidebar",previous:{title:"Transform data Loaded with Airbyte using dbt",permalink:"/pr-preview/pr-20/ko/quickstarts/manage-data/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt"},next:{title:"Create Parquet files in object storage",permalink:"/pr-preview/pr-20/ko/quickstarts/manage-data/create-parquet-files-in-object-storage"}},f={},T=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...o.RM,{value:"Install TTU",id:"install-ttu",level:2},{value:"Get Sample data",id:"get-sample-data",level:2},{value:"Create a database",id:"create-a-database",level:2},{value:"Run TPT",id:"run-tpt",level:2},{value:"<code>TPT</code> vs. NOS",id:"tpt-vs-nos",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...c.RM];function m(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"run-large-bulkloads-efficiently-with-teradata-parallel-transporter-tpt",children:"Run large bulkloads efficiently with Teradata Parallel Transporter (TPT)"}),"\n",(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(a.p,{children:["We often have a need to move large volumes of data into Vantage. Teradata offers ",(0,t.jsx)(a.code,{children:"Teradata Parallel Transporter (TPT)"})," utility that can efficiently load large amounts of data into Teradata Vantage. This how-to demonstrates how to use ",(0,t.jsx)(a.code,{children:"TPT"}),". In this scenario, we will load over 300k records, over 40MB of data, in a couple of seconds."]}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Access to a Teradata Vantage instance."}),"\n",(0,t.jsx)(o.Ay,{}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Download Teradata Tools and Utilities (TTU) -  supported platforms: ",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-windows-installation-package",children:"Windows"}),", ",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-mac-osx-installation-package",children:"MacOS"}),", ",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0",children:"Linux"})," (requires registration)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"install-ttu",children:"Install TTU"}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(a.h2,{id:"get-sample-data",children:"Get Sample data"}),"\n",(0,t.jsxs)(a.p,{children:["We will be working with the US tax fillings for nonprofit organizations. Nonprofit tax filings are public data. The US Internal Revenue Service publishes them in S3 bucket. Let's grab a summary of filings for 2020: ",(0,t.jsx)(a.code,{children:"https://storage.googleapis.com/clearscape_analytics_demo_data/TPT/index_2020.csv"}),". You can use your browser, ",(0,t.jsx)(a.code,{children:"wget"})," or ",(0,t.jsx)(a.code,{children:"curl"})," to save the file locally."]}),"\n",(0,t.jsx)(a.h2,{id:"create-a-database",children:"Create a database"}),"\n",(0,t.jsx)(a.p,{children:"Let's create a database in Vantage. Use your favorite SQL tool to run the following query:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE DATABASE irs\nAS PERMANENT = 120e6, -- 120MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,t.jsx)(a.h2,{id:"run-tpt",children:"Run TPT"}),"\n",(0,t.jsxs)(a.p,{children:["We will now run ",(0,t.jsx)(a.code,{children:"TPT"}),". ",(0,t.jsx)(a.code,{children:"TPT"})," is a command-line tool that can be used to load, extract and update data in Teradata Vantage. These various functions are implemented in so called ",(0,t.jsx)(a.code,{children:"operators"}),". For example, loading data into Vantage is handled by the ",(0,t.jsx)(a.code,{children:"Load"})," operator. The ",(0,t.jsx)(a.code,{children:"Load"})," operator is very efficient in uploading large amounts of data into Vantage. The ",(0,t.jsx)(a.code,{children:"Load"})," operator, in order to be fast, has several restrictions in place. It can only populate empty tables. Inserts to already populated tables are not supported. It doesn't support tables with secondary indices. Also, it won't insert duplicate records, even if a table is a ",(0,t.jsx)(a.code,{children:"MULTISET"})," table. For the full list of restrictions check out ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022/Load-Operator/Usage-Notes/Normalized-Tables/Restrictions-and-Limitations",children:"Teradata\xae TPT Reference - Load Operator - Restrictions and Limitations"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"TPT has its own scripting language. The language allows you to prepare the database with arbitrary SQL commands, declare the input source and define how the data should be inserted into Vantage."}),"\n",(0,t.jsx)(a.p,{children:"To load the csv data to Vantage, we will define and run a job. The job will prepare the database. It will remove old log and error tables and create the target table. It will then read the file and insert the data into the database."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Create a job variable file that will tell TPT how to connect to our Vantage database. Create file ",(0,t.jsx)(a.code,{children:"jobvars.txt"})," and insert the following content. Replace ",(0,t.jsx)(a.code,{children:"host"})," with the host name of your database. For example, if you are using a local Vantage Express instance, use ",(0,t.jsx)(a.code,{children:"127.0.0.1"}),". ",(0,t.jsx)(a.code,{children:"username"})," with the database user name, and ",(0,t.jsx)(a.code,{children:"password"})," with the database password. Note that the preparation step (DDL) and the load step have their own configuration values and that the config values need to be entered twice to configure both the DDL and the load step."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",metastring:', id="tpt_first_config", role="emits-gtm-events"',children:"TargetTdpId           = 'host'\nTargetUserName        = 'username'\nTargetUserPassword    = 'password'\n\nFileReaderDirectoryPath = ''\nFileReaderFileName      = 'index_2020.csv'\nFileReaderFormat        = 'Delimited'\nFileReaderOpenMode      = 'Read'\nFileReaderTextDelimiter = ','\nFileReaderSkipRows      = 1\n\nDDLErrorList = '3807'\n\nLoadLogTable    = 'irs.irs_returns_lg'\nLoadErrorTable1 = 'irs.irs_returns_et'\nLoadErrorTable2 = 'irs.irs_returns_uv'\nLoadTargetTable = 'irs.irs_returns'\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Create a file with the following content and save it as ",(0,t.jsx)(a.code,{children:"load.txt"}),". See comments within the job file to understand its structure."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"DEFINE JOB file_load\nDESCRIPTION 'Load a Teradata table from a file'\n(\n  /*\n    Define the schema of the data in the csv file\n  */\n  DEFINE SCHEMA SCHEMA_IRS\n    (\n      in_return_id     VARCHAR(19),\n      in_filing_type   VARCHAR(5),\n      in_ein           VARCHAR(19),\n      in_tax_period    VARCHAR(19),\n      in_sub_date      VARCHAR(22),\n      in_taxpayer_name VARCHAR(100),\n      in_return_type   VARCHAR(5),\n      in_dln           VARCHAR(19),\n      in_object_id     VARCHAR(19)\n    );\n\n  /*\n    In the first step, we are sending statements to remove old tables\n    and create a new one.\n    This step replies on configuration stored in `od_IRS` operator\n  */\n  STEP st_Setup_Tables\n  (\n    APPLY\n      ('DROP TABLE ' || @LoadLogTable || ';'),\n      ('DROP TABLE ' || @LoadErrorTable1 || ';'),\n      ('DROP TABLE ' || @LoadErrorTable2 || ';'),\n      ('DROP TABLE ' || @LoadTargetTable || ';'),\n      ('CREATE TABLE ' || @LoadTargetTable || ' (\n          return_id INT,\n          filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,\n          ein INT,\n          tax_period INT,\n          sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,\n          taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,\n          return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,\n          dln BIGINT,\n          object_id BIGINT\n        )\n        PRIMARY INDEX ( return_id );')\n    TO OPERATOR ($DDL);\n  );\n\n  /*\n    Finally, in this step we read the data from the file operator\n    and send it to the load operator.\n  */\n  STEP st_Load_File\n  (\n    APPLY\n      ('INSERT INTO ' || @LoadTargetTable || ' (\n          return_id,\n          filing_type,\n          ein,\n          tax_period,\n          sub_date,\n          taxpayer_name,\n          return_type,\n          dln,\n          object_id\n      ) VALUES (\n          :in_return_id,\n          :in_filing_type,\n          :in_ein,\n          :in_tax_period,\n          :in_sub_date,\n          :in_taxpayer_name,\n          :in_return_type,\n          :in_dln,\n          :in_object_id\n      );')\n    TO OPERATOR ($LOAD)\n    SELECT * FROM OPERATOR($FILE_READER(SCHEMA_IRS));\n  );\n);\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Run the job:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"tbuild -f load.txt -v jobvars.txt -j file_load\n"})}),"\n",(0,t.jsx)(a.p,{children:"A successful run will return logs that look like this:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"Teradata Parallel Transporter Version 17.10.00.10 64-Bit\nThe global configuration file '/opt/teradata/client/17.10/tbuild/twbcfg.ini' is used.\n  Log Directory: /opt/teradata/client/17.10/tbuild/logs\n  Checkpoint Directory: /opt/teradata/client/17.10/tbuild/checkpoint\n\nJob log: /opt/teradata/client/17.10/tbuild/logs/file_load-4.out\nJob id is file_load-4, running on osboxes\nTeradata Parallel Transporter SQL DDL Operator Version 17.10.00.10\nod_IRS: private log not specified\nod_IRS: connecting sessions\nod_IRS: sending SQL requests\nod_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_lg' does not exist.\nod_IRS: TPT18046: Error is ignored as requested in ErrorList\nod_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_et' does not exist.\nod_IRS: TPT18046: Error is ignored as requested in ErrorList\nod_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_uv' does not exist.\nod_IRS: TPT18046: Error is ignored as requested in ErrorList\nod_IRS: disconnecting sessions\nod_IRS: Total processor time used = '0.013471 Second(s)'\nod_IRS: Start : Thu Apr  7 20:56:32 2022\nod_IRS: End   : Thu Apr  7 20:56:32 2022\nJob step st_Setup_Tables completed successfully\nTeradata Parallel Transporter Load Operator Version 17.10.00.10\nol_IRS: private log not specified\nTeradata Parallel Transporter DataConnector Operator Version 17.10.00.10\nop_IRS[1]: Instance 1 directing private log report to 'dtacop-root-368731-1'.\nop_IRS[1]: DataConnector Producer operator Instances: 1\nop_IRS[1]: ECI operator ID: 'op_IRS-368731'\nop_IRS[1]: Operator instance 1 processing file 'index_2020.csv'.\nol_IRS: connecting sessions\nol_IRS: preparing target table\nol_IRS: entering Acquisition Phase\nol_IRS: entering Application Phase\nol_IRS: Statistics for Target Table:  'irs.irs_returns'\nol_IRS: Total Rows Sent To RDBMS:      333722\nol_IRS: Total Rows Applied:            333722\nol_IRS: Total Rows in Error Table 1:   0\nol_IRS: Total Rows in Error Table 2:   0\nol_IRS: Total Duplicate Rows:          0\nop_IRS[1]: Total files processed: 1.\nol_IRS: disconnecting sessions\nJob step st_Load_File completed successfully\nJob file_load completed successfully\nol_IRS: Performance metrics:\nol_IRS:     MB/sec in Acquisition phase: 9.225\nol_IRS:     Elapsed time from start to Acquisition phase:   2 second(s)\nol_IRS:     Elapsed time in Acquisition phase:   5 second(s)\nol_IRS:     Elapsed time in Application phase:   3 second(s)\nol_IRS:     Elapsed time from Application phase to end: < 1 second\nol_IRS: Total processor time used = '0.254337 Second(s)'\nol_IRS: Start : Thu Apr  7 20:56:32 2022\nol_IRS: End   : Thu Apr  7 20:56:42 2022\nJob start: Thu Apr  7 20:56:32 2022\nJob end:   Thu Apr  7 20:56:42 2022\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.h2,{id:"tpt-vs-nos",children:[(0,t.jsx)(a.code,{children:"TPT"})," vs. NOS"]}),"\n",(0,t.jsx)(a.p,{children:"In our case, the file is in an S3 bucket. That means, that we can use Native Object Storage (NOS) to ingest the data:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"-- create an S3-backed foreign table\nCREATE FOREIGN TABLE irs_returns_nos\n    USING ( LOCATION('/s3/s3.amazonaws.com/irs-form-990/index_2020.csv') );\n\n-- load the data into a native table\nCREATE MULTISET TABLE irs_returns_nos_native\n    (RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME)\nAS (\n    SELECT RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME FROM irs_returns_nos\n) WITH DATA\nNO PRIMARY INDEX;\n"})}),"\n",(0,t.jsx)(a.p,{children:"The NOS solution is convenient as it doesn't depend on additional tools. It can be implemented using only SQL. It performs well, especially for Vantage deployments with a high number of AMPs as NOS tasks are delegated to AMPs and run in parallel. Also, splitting the data in object storage into multiple files may further improve performance."}),"\n",(0,t.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(a.p,{children:["This how-to demonstrated how to ingest large amounts of data into Vantage. We loaded hundreds of thousands or records into Vantage in a couple of seconds using ",(0,t.jsx)(a.code,{children:"TPT"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/February-2022",children:"Teradata\xae TPT User Guide"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022",children:"Teradata\xae TPT Reference"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-20/ko/quickstarts/manage-data/nos",children:"Query data stored in object storage"})}),"\n"]}),"\n","\n",(0,t.jsx)(c.Ay,{})]})}function g(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var t=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){var a=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:n,children:a})}},56240:(e,a,n)=>{n.d(a,{A:()=>x});var t=n(96540),r=n(34164),o=n(23104),i=n(56347),s=n(205),l=n(57485);var d=n(89466);function c(e){var a,n;return null!=(a=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function u(e){var a=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=a?a:function(e){return c(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(n);return function(e){var a,n,t=(void 0===(n=function(e,a){return e.value===a.value})&&(n=function(e,a){return e===a}),(a=e).filter((function(e,t){return a.findIndex((function(a){return n(a,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function p(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function h(e){var a=e.queryString,n=void 0!==a&&a,r=e.groupId,o=(0,i.W6)(),s=function(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((function(e){if(s){var a=new URLSearchParams(o.location.search);a.set(s,e),o.replace(Object.assign({},o.location,{search:a.toString()}))}}),[s,o])]}function f(e){var a,n,r,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,f=e.groupId,T=u(e),m=(0,t.useState)((function(){return function(e){var a,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(a=t.find((function(e){return e.default})))?a:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:T})})),g=m[0],b=m[1],v=h({queryString:c,groupId:f}),_=v[0],x=v[1],R=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),n=(0,d.Dv)(a),r=n[0],o=n[1],[r,(0,t.useCallback)((function(e){a&&o.set(e)}),[a,o])]),j=R[0],A=R[1],w=function(){var e=null!=_?_:j;return p({value:e,tabValues:T})?e:null}();return(0,s.A)((function(){w&&b(w)}),[w]),{selectedValue:g,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:T}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),A(e)}),[x,A,T]),tabValues:T}}var T=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function b(e){var a=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],d=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,n=l.indexOf(a),r=s[n].value;r!==t&&(d(a),i(r))},u=function(e){var a,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,r=l.indexOf(e.currentTarget)+1;n=null!=(t=l[r])?t:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;n=null!=(o=l[i])?o:l[l.length-1]}null==(a=n)||a.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:s.map((function(e){var a=e.value,n=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:function(e){return l.push(e)},onKeyDown:u,onClick:c},o,{className:(0,r.A)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===a}),children:null!=n?n:a}),a)}))})}function v(e){var a=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var i=o.find((function(e){return e.props.value===r}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})}))})}function _(e){var a=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,Object.assign({},e,a)),(0,g.jsx)(v,Object.assign({},e,a))]})}function x(e){var a=(0,T.A)();return(0,g.jsx)(_,Object.assign({},e,{children:c(e.children)}),String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>s});var t=n(96540);const r={},o=t.createContext(r);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);