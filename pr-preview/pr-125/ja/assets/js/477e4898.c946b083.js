"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5995],{52595:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(74848),o=t(28453);const r={sidebar_position:17,author:"Wenjie Tehan",email:"wenjie.tehan@teradata.com",page_last_update:"February 14th, 2022",description:"Integrate Teradata Vantage with Google Cloud Data Catalog.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","google cloud","google cloud data catalog."]},s="Integrate Teradata Vantage with Google Cloud Data Catalog",l={id:"manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",title:"Integrate Teradata Vantage with Google Cloud Data Catalog",description:"Integrate Teradata Vantage with Google Cloud Data Catalog.",source:"@site/quickstarts/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog.md",sourceDirName:"manage-data",slug:"/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",permalink:"/pr-preview/pr-125/ja/quickstarts/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,author:"Wenjie Tehan",email:"wenjie.tehan@teradata.com",page_last_update:"February 14th, 2022",description:"Integrate Teradata Vantage with Google Cloud Data Catalog.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","google cloud","google cloud data catalog."]},sidebar:"tutorialSidebar",previous:{title:"Connect Azure Data Share to Teradata Vantage",permalink:"/pr-preview/pr-125/ja/quickstarts/manage-data/connect-azure-data-share-to-teradata-vantage"},next:{title:"Configure a Teradata Vantage connection in DataHub",permalink:"/pr-preview/pr-125/ja/quickstarts/manage-data/configure-a-teradata-vantage-connection-in-datahub"}},i={},c=[{value:"Overview",id:"overview",level:3},{value:"About Google Cloud Data Catalog",id:"about-google-cloud-data-catalog",level:3},{value:"About Teradata Vantage",id:"about-teradata-vantage",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Procedure",id:"procedure",level:3},{value:"Enable Data Catalog API",id:"enable-data-catalog-api",level:3},{value:"Install Teradata Data Catalog Connector",id:"install-teradata-data-catalog-connector",level:3},{value:"Install virtualenv",id:"install-virtualenv",level:3},{value:"Install Data Catalog Teradata Connector",id:"install-data-catalog-teradata-connector",level:4},{value:"Set environment variables",id:"set-environment-variables",level:3},{value:"Run",id:"run",level:3},{value:"Explore Teradata Vantage metadata with Data Catalog",id:"explore-teradata-vantage-metadata-with-data-catalog",level:3},{value:"Cleanup (optional)",id:"cleanup-optional",level:3}];function d(a){const e={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"integrate-teradata-vantage-with-google-cloud-data-catalog",children:"Integrate Teradata Vantage with Google Cloud Data Catalog"}),"\n",(0,n.jsx)(e.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(e.p,{children:["This article describes the process to connect Teradata Vantage with Google Cloud Data Catalog using the ",(0,n.jsx)(e.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector",children:"Data Catalog Teradata Connector on GitHub"}),", and then explore the metadata of the Vantage tables via Data Catalog."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Diagram Description automatically generated",src:t(73843).A+"",width:"1883",height:"870"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Scrape: Connect to Teradata Vantage and retrieve all the available metadata"}),"\n",(0,n.jsx)(e.li,{children:"Prepare: Transform metadata in Data Catalog entities and create Tags"}),"\n",(0,n.jsx)(e.li,{children:"Ingest: Send the Data Catalog entities to the Google Cloud project"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"about-google-cloud-data-catalog",children:"About Google Cloud Data Catalog"}),"\n",(0,n.jsx)(e.p,{children:"Google Cloud Data Catalog is a fully managed data discovery and metadata management service. Data Catalog can catalog the native metadata on data assets. Data Catalog is serverless, and provides a central catalog to capture both technical metadata as well as business metadata in a structured format."}),"\n",(0,n.jsx)(e.h3,{id:"about-teradata-vantage",children:"About Teradata Vantage"}),"\n",(0,n.jsx)(e.p,{children:"Vantage is the modern cloud platform that unifies data warehouses, data lakes, and analytics into a single connected ecosystem."}),"\n",(0,n.jsx)(e.p,{children:"Vantage combines descriptive, predictive, prescriptive analytics, autonomous decision-making, ML functions, and visualization tools into a unified, integrated platform that uncovers real-time business intelligence at scale, no matter where the data resides."}),"\n",(0,n.jsx)(e.p,{children:"Vantage enables companies to start small and elastically scale compute or storage, paying only for what they use, harnessing low-cost object stores and integrating their analytic workloads."}),"\n",(0,n.jsx)(e.p,{children:"Vantage supports R, Python, Teradata Studio, and any other SQL-based tools. You can deploy Vantage across public clouds, on-premises, on optimized or commodity infrastructure, or as-a-service."}),"\n",(0,n.jsxs)(e.p,{children:["See the ",(0,n.jsx)(e.a,{href:"https://docs.teradata.com/home",children:"documentation"})," for more information on Teradata Vantage."]}),"\n",(0,n.jsx)(e.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Access to a Teradata Vantage instance."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["A ",(0,n.jsx)(e.a,{href:"https://support.google.com/accounts/answer/27441?hl=en",children:(0,n.jsx)(e.strong,{children:"Google Service Account"})})," with Data Catalog Admin role"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["A ",(0,n.jsx)(e.a,{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects",children:(0,n.jsx)(e.strong,{children:"Cloud Console Project created"})})," for your account (i.e. partner-integration-lab)"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Billing enabled"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Google Cloud SDK ",(0,n.jsx)(e.a,{href:"https://cloud.google.com/sdk/docs/install",children:"installed"})," and ",(0,n.jsx)(e.a,{href:"https://cloud.google.com/sdk/docs/initializing",children:"initialized"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://www.python.org/downloads/",children:"Python"})," installed"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://pip.pypa.io/en/stable/installation/",children:"Pip"})," installed"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"procedure",children:"Procedure"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Enable Data Catalog APIs"}),"\n",(0,n.jsx)(e.li,{children:"Install Teradata Data Catalog Connector"}),"\n",(0,n.jsx)(e.li,{children:"Run"}),"\n",(0,n.jsx)(e.li,{children:"Explore Teradata Vantage metadata with Data Catalog"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"enable-data-catalog-api",children:"Enable Data Catalog API"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Logon to ",(0,n.jsx)(e.a,{href:"http://console.cloud.google.com/",children:"Google"})," console, choose ",(0,n.jsx)(e.strong,{children:"APIs & Services"})," from the Navigation menu, then click on ",(0,n.jsx)(e.em,{children:"Library"}),". Make sure your project is selected on the top menu bar."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Graphical user interface",src:t(41930).A+"",width:"1150",height:"1125"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Put ",(0,n.jsx)(e.em,{children:"Data Catalog"})," in the search box and click on ",(0,n.jsx)(e.strong,{children:"Google Cloud Data Catalog API"}),", click ",(0,n.jsx)(e.strong,{children:"ENABLE"})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Graphical user interface",src:t(28709).A+"",width:"4400",height:"1503"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"install-teradata-data-catalog-connector",children:"Install Teradata Data Catalog Connector"}),"\n",(0,n.jsxs)(e.p,{children:["A Teradata Data Catalog connector is available on ",(0,n.jsx)(e.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector",children:"GitHub"}),". This connector is written in Python."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Run following command to authorize gcloud to access the Cloud Platform with Google user credentials."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"gcloud auth login\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Choose your Google account when the Google login page opens up and click ",(0,n.jsx)(e.em,{children:"Allow"})," on the next page."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Next, set up default project if you haven\u2019t already done so"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"gcloud config set project &lt;project id>\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"install-virtualenv",children:"Install virtualenv"}),"\n",(0,n.jsxs)(e.p,{children:["We recommend you install the Teradata Data Catalog Connector in an isolated Python environment. To do so, install ",(0,n.jsx)(e.a,{href:"https://virtualenv.pypa.io/en/latest/",children:"virtualenv"})," first:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Windows"})}),"\n",(0,n.jsx)(e.p,{children:"Run in Powershell as Administrator:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\n&lt;your-env>\\Scripts\\activate\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"MacOS"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\nsource &lt;your-env>/bin/activate\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Linux"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\nsource &lt;your-env>/bin/activate\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"install-data-catalog-teradata-connector",children:"Install Data Catalog Teradata Connector"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Windows"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"pip.exe install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"MacOS"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Linux"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', id="gcp_env_var", role="content-editable emits-gtm-events"',children:"export GOOGLE_APPLICATION_CREDENTIALS=&lt;google_credentials_file>\nexport TERADATA2DC_DATACATALOG_PROJECT_ID=&lt;google_cloud_project_id>\nexport TERADATA2DC_DATACATALOG_LOCATION_ID=&lt;google_cloud_location_id>\nexport TERADATA2DC_TERADATA_SERVER=&lt;teradata_server>\nexport TERADATA2DC_TERADATA_USERNAME=&lt;teradata_username>\nexport TERADATA2DC_TERADATA_PASSWORD=&lt;teradata_password>\n"})}),"\n",(0,n.jsxs)(e.p,{children:["Where ",(0,n.jsx)(e.code,{children:"<google_credential_file>"})," is the key for your service account (json file)."]}),"\n",(0,n.jsx)(e.h3,{id:"run",children:"Run"}),"\n",(0,n.jsxs)(e.p,{children:["Execute ",(0,n.jsx)(e.code,{children:"google-datacatalog-teradata-connector"})," command to establish entry point to Vantage database."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', id="gcp_data_catalog_first_run" role="content-editable emits-gtm-events"',children:"google-datacatalog-teradata-connector \\\n  --datacatalog-project-id=$TERADATA2DC_DATACATALOG_PROJECT_ID \\\n  --datacatalog-location-id=$TERADATA2DC_DATACATALOG_LOCATION_ID \\\n  --teradata-host=$TERADATA2DC_TERADATA_SERVER \\\n  --teradata-user=$TERADATA2DC_TERADATA_USERNAME \\\n  --teradata-pass=$TERADATA2DC_TERADATA_PASSWORD\n"})}),"\n",(0,n.jsx)(e.p,{children:"Sample output from the google-datacatalog-teradata-connector command:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:'INFO:root:\n==============Starting CLI===============\nINFO:root:This SQL connector does not implement the user defined datacatalog-entry-resource-url-prefix\nINFO:root:This SQL connector uses the default entry resoure URL\n\n============Start teradata-to-datacatalog===========\n\n==============Scrape metadata===============\nINFO:root:Scrapping metadata from connection_args\n\n1 table containers ready to be ingested...\n\n==============Prepare metadata===============\n\n--\x3e database: Gcpuser\n37 tables ready to be ingested...\n\n==============Ingest metadata===============\n\nDEBUG:google.auth._default:Checking /Users/Teradata/Apps/Cloud/GCP/teradata2dc-credentials.json for explicit credentials as part of auth process...\nINFO:root:Starting to clean up the catalog...\nDEBUG:google.auth.transport.requests:Making request: POST https://oauth2.googleapis.com/token\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): oauth2.googleapis.com:443\nDEBUG:urllib3.connectionpool:https://oauth2.googleapis.com:443 "POST /token HTTP/1.1" 200 None\nINFO:root:0 entries that match the search query exist in Data Catalog!\nINFO:root:Looking for entries to be deleted...\nINFO:root:0 entries will be deleted.\n\nStarting to ingest custom metadata...\n\nDEBUG:google.auth._default:Checking /Users/Teradata/Apps/Cloud/GCP/teradata2dc-credentials.json for explicit credentials as part of auth process...\nINFO:root:Starting the ingestion flow...\nDEBUG:google.auth.transport.requests:Making request: POST https://oauth2.googleapis.com/token\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): oauth2.googleapis.com:443\nDEBUG:urllib3.connectionpool:https://oauth2.googleapis.com:443 "POST /token HTTP/1.1" 200 None\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_database_metadata\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_column_metadata\nINFO:root:Entry Group created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata\nINFO:root:1/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser\nINFO:root: ^ [database] 34.105.107.155/gcpuser\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_database_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser/tags/CWHNiGQeQmPT\nINFO:root:2/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories\nINFO:root: ^ [table] 34.105.107.155/gcpuser/Categories\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories/tags/Ceij5G9t915o\nINFO:root:38/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest\nINFO:root: ^ [table] 34.105.107.155/gcpuser/tablesv_instantiated_latest\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest/tags/Ceij5G9t915o\nINFO:root:\n============End teradata-to-datacatalog============\n'})}),"\n",(0,n.jsx)(e.h3,{id:"explore-teradata-vantage-metadata-with-data-catalog",children:"Explore Teradata Vantage metadata with Data Catalog"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Go to ",(0,n.jsx)(e.a,{href:"https://console.cloud.google.com/datacatalog",children:"Data Catalog"})," console, click on the project (i.e. partner-integration-lab) under ",(0,n.jsx)(e.strong,{children:"Projects"}),". The Teradata tables are showing on the right panel."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Graphical user interface",src:t(76444).A+"",width:"1852",height:"1127"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Click on the table to your interest (i.e. CITY_LEVEL_TRANS), and you\u2019ll see the metadata about this table:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Graphical user interface",src:t(375).A+"",width:"1596",height:"848"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"cleanup-optional",children:"Cleanup (optional)"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Clean up metadata from Data Catalog. To do that, copy ",(0,n.jsx)(e.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/blob/master/google-datacatalog-teradata-connector/tools/cleanup_datacatalog.py",children:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/blob/master/google-datacatalog-teradata-connector/tools/cleanup_datacatalog.py"})," to local directory."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Change directory to where the file is and then run following command:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"python cleanup_datacatalog.py --datacatalog-project-ids=$TERADATA2DC_DATACATALOG_PROJECT_ID\n"})}),"\n"]}),"\n"]})]})}function g(a={}){const{wrapper:e}={...(0,o.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(d,{...a})}):d(a)}},73843:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image2-231e97bc307e071f21582e808900193d.png"},41930:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image3-722d67bf21642b5c8861b9bba23dd253.png"},28709:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image4-a0d9d7c34ff24a43d22bbef1fb7c3347.png"},76444:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image5-5fbc9d3ce64c444855f5246dcea902f2.png"},375:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/image6-fa917a94837adb3a162505612bf61511.png"},28453:(a,e,t)=>{t.d(e,{R:()=>s,x:()=>l});var n=t(96540);const o={},r=n.createContext(o);function s(a){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function l(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(o):a.components||o:s(a.components),n.createElement(r.Provider,{value:e},a.children)}}}]);