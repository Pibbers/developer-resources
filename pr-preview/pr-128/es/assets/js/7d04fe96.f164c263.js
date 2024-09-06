"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8864],{42852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(74848),o=n(28453);const s={sidebar_position:5,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"January 24, 2024",description:"Run VantageCloud Lake Demos using Jupyter notebooks in Google Vertex AI Workbench.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","data analytics","data science","vertex ai","google cloud"]},r="Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Google Cloud Vertex AI",i={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Google Cloud Vertex AI",description:"Run VantageCloud Lake Demos using Jupyter notebooks in Google Vertex AI Workbench.",source:"@site/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",permalink:"/pr-preview/pr-128/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"January 24, 2024",description:"Run VantageCloud Lake Demos using Jupyter notebooks in Google Vertex AI Workbench.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","data analytics","data science","vertex ai","google cloud"]},sidebar:"tutorialSidebar",previous:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Amazon SageMaker",permalink:"/pr-preview/pr-128/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker"},next:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Microsoft Azure",permalink:"/pr-preview/pr-128/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Vertex AI Google Cloud environment setup",id:"vertex-ai-google-cloud-environment-setup",level:2},{value:"Initiating a user managed notebook instance",id:"initiating-a-user-managed-notebook-instance",level:3},{value:"VantageCloud Lake Configuration",id:"vantagecloud-lake-configuration",level:2},{value:"Edit vars.json",id:"edit-varsjson",level:2},{value:"Run demos",id:"run-demos",level:2},{value:"Summary",id:"summary",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"run-teradata-jupyter-notebook-demos-for-vantagecloud-lake-in-google-cloud-vertex-ai",children:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Google Cloud Vertex AI"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["This quickstart explains how to run ",(0,a.jsx)(t.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Jupyter Notebook Demos for VantageCloud Lake"})," on Vertex AI, the AI/ML platform for Google Cloud."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Teradata modules for Jupyter ",(0,a.jsx)(t.strong,{children:"Linux desktop version"})," (download ",(0,a.jsx)(t.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"here"}),", registration required)"]}),"\n",(0,a.jsxs)(t.li,{children:["Google Cloud account with ",(0,a.jsx)(t.a,{href:"https://console.cloud.google.com/flows/enableapi?apiid=notebooks.googleapis.com,aiplatform.googleapis.com&redirect=https://console.cloud.google.com&_ga=2.180323111.284679914.1706204112-1996764819.1705688373",children:"Vertex AI and Notebooks API"})," enabled"]}),"\n",(0,a.jsx)(t.li,{children:"Google cloud storage to store startup scripts and Teradata Jupyter extension package"}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/pr-preview/pr-128/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"Access to a VantageCloud Lake environment"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"vertex-ai-google-cloud-environment-setup",children:"Vertex AI Google Cloud environment setup"}),"\n",(0,a.jsx)(t.p,{children:"When you create a new notebook instance, you can specify a startup script. This script, which runs only once after instance creation, will install the Teradata Jupyter extension package and clone a GitHub repository into the new user-managed notebooks instance."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Download Teradata Jupyter extensions package"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Visit ",(0,a.jsx)(t.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"Vantage Modules for Jupyter page"})]}),"\n",(0,a.jsx)(t.li,{children:"Sign in and download the Teradata Linux version of the package."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create Google Cloud Storage Bucket"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Create a bucket with a name relevant to the project (e.g., teradata_jupyter)."}),"\n",(0,a.jsxs)(t.li,{children:["Ensure that the bucket name is globally unique. For instance, if the name teradata_jupyter has already been used, it will not be available for subsequent users.\n",(0,a.jsx)(t.img,{alt:"New bucket",src:n(76811).A+"",width:"2478",height:"568"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Upload the unizzped Jupyter extension package to your Google Cloud Storage bucket as a file."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Write the following startup script and save it as ",(0,a.jsx)(t.code,{children:"startup.sh"})," to your local machine."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Below is an example script that retrieves the Teradata Jupyter extension package from Google Cloud Storage bucket and installs Teradata SQL kernel, extensions and clones the lake-demos repository."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Remember to replace teradata_jupyter in the gsutil cp command."})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:', id="vertex_ex_script", role="content-editable, emits-gtm-events"',children:"#! /bin/bash\n\ncd /home/jupyter\nmkdir teradata\ncd teradata\ngsutil cp gs://teradata_jupyter/* .\nunzip teradatasql*.zip\n\n# Install Teradata kernel\ncp teradatakernel /usr/local/bin\n\njupyter kernelspec install ./teradatasql --prefix=/opt/conda\n\n# Install Teradata extensions\npip install --find-links . teradata_preferences_prebuilt\npip install --find-links . teradata_connection_manager_prebuilt\npip install --find-links . teradata_sqlhighlighter_prebuilt\npip install --find-links . teradata_resultset_renderer_prebuilt\npip install --find-links . teradata_database_explorer_prebuilt\n\n# PIP install the Teradata Python library\npip install teradataml==17.20.00.04\n\n# Install Teradata R library (optional, uncomment this line only if you use an environment that supports R)\n#Rscript -e \"install.packages('tdplyr',repos=c('https://r-repo.teradata.com','https://cloud.r-project.org'))\"\n\n# Clone the Teradata lake-demos repository\nsu - jupyter -c \"git clone https://github.com/Teradata/lake-demos.git\"\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Upload this script to your Google Cloud storage bucket as a file\n",(0,a.jsx)(t.img,{alt:"files uploaded to bucket",src:n(22210).A+"",width:"2738",height:"1030"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"initiating-a-user-managed-notebook-instance",children:"Initiating a user managed notebook instance"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Access Vertex AI Workbench"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Return to Vertex AI Workbench in Google Cloud console."}),"\n",(0,a.jsxs)(t.li,{children:["Create a new User-Managed Notebook via Advanced Options or directly at ",(0,a.jsx)(t.a,{href:"https://notebook.new/",children:"https://notebook.new/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Under Details, name your notebook, select your region and select continue.\n",(0,a.jsx)(t.img,{alt:"notebook env details",src:n(31066).A+"",width:"2010",height:"1006"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Under Environment select ",(0,a.jsx)(t.strong,{children:"Browse"})," to select your startup.sh script from your Google Cloud Bucket.\n",(0,a.jsx)(t.img,{alt:"select startup script",src:n(71671).A+"",width:"2456",height:"1262"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select Create to initiate the notebook. It may take a few minutes for the notebook creation process to complete. When it is done, click on OPEN JUPYTERLAB.\n",(0,a.jsx)(t.img,{alt:"active notebook",src:n(91480).A+"",width:"2874",height:"934"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"important",children:(0,a.jsx)(t.p,{children:"You will have to whitelist this IP in your VantageCloud Lake environment to allow the connection. This solution is appropriate in a trial environment. For production environments, a configuration of VPCs, Subnets, and Security Groups might need to be configured and whitelisted."})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["On JupyterLab open a notebook with a Python kernel and run the following command for finding your notebook instance IP address.\n",(0,a.jsx)(t.img,{alt:"python3 kernel",src:n(20200).A+"",width:"2796",height:"1334"})]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:', role="content-editable"',children:'import requests\ndef get_public_ip():\n    try:\n        response = requests.get(\'https://api.ipify.org\')\n        return response.text\n    except requests.RequestException as e:\n        return "Error: " + str(e)\nmy_public_ip = get_public_ip()\nprint("My Public IP is:", my_public_ip)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"vantagecloud-lake-configuration",children:"VantageCloud Lake Configuration"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["In the VantageCloud Lake environment, under settings, add the IP of your notebook instance\n",(0,a.jsx)(t.img,{alt:"Initiate JupyterLab",src:n(76703).A+"",width:"1423",height:"662"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"edit-varsjson",children:"Edit vars.json"}),"\n",(0,a.jsxs)(t.p,{children:["Navigate into the ",(0,a.jsx)(t.code,{children:"lake-demos"})," directory in your notebook.\n",(0,a.jsx)(t.img,{alt:"notebook launcher",src:n(28950).A+"",width:"2720",height:"1456"})]}),"\n",(0,a.jsxs)(t.p,{children:["Right click on vars.json to open the file with editor.\n",(0,a.jsx)(t.img,{alt:"vars.json",src:n(9139).A+"",width:"2810",height:"1834"})]}),"\n",(0,a.jsxs)(t.p,{children:["Edit the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json file"})})," file to include the required credentials to run the demos"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Variable"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Value"})})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:'"host"'})}),(0,a.jsx)(t.td,{children:"Public IP value from your VantageCloud Lake environment"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:'"UES_URI"'})}),(0,a.jsx)(t.td,{children:"Open Analytics from your VantageCloud Lake environment"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:'"dbc"'})}),(0,a.jsx)(t.td,{children:"The master password of your VantageCloud Lake environment."})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["To retrieve a Public IP address and Open Analytics Endpoint follow these ",(0,a.jsx)(t.a,{href:"/pr-preview/pr-128/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker#create-vantagecloud-lake-environment",children:"instructions"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"important",children:(0,a.jsx)(t.p,{children:'Change passwords in the vars.json file.You\'ll see that in the sample vars.json, the passwords of all users are defaulted to "password", this is just for matters of the sample file, you should change all of these password fields to strong passwords, secure them as necessary and follow other password management best practices'})}),"\n",(0,a.jsx)(t.h2,{id:"run-demos",children:"Run demos"}),"\n",(0,a.jsxs)(t.p,{children:["Execute all the cells in ",(0,a.jsx)(t.em,{children:"0_Demo_Environment_Setup.ipynb"})," to setup your environment. Followed by ",(0,a.jsx)(t.strong,{children:"1_Demo_Setup_Base_Data.ipynb"})," to load the base data required for demo."]}),"\n",(0,a.jsxs)(t.p,{children:["To learn more about the demo notebooks, go to ",(0,a.jsx)(t.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake demos"})," page on GitHub."]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.p,{children:["In this quickstart guide, we configured Google Cloud Vertex AI Workbench Notebooks to run ",(0,a.jsx)(t.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Jupyter Notebook Demos for VantageCloud Lake"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},91480:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/activenotebook-706c22364c3c878099ccc0ab2e7663ef.png"},76811:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/bucket-490e623dc52bb3ffcaf179d1937482c4.png"},31066:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/detailsenv-a90448ce8de3e3e5efd8acc6001831c1.png"},28950:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/notebooklauncher-fde21ecd3b27388b0df3850958613967.png"},9139:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/openvars-3b64b202e1395cd6f67b7331d7e76679.png"},20200:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/python3-3c9cf920b70af3b257f429d0ea34fe67.png"},71671:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/startupscript-c808bee345430752612888eba52e48e1.png"},22210:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/upload-81801d8d1591e421a960d4b9032d7c88.png"},76703:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sagemaker-lake-9e18bff602d568e81bbb721a3d4e2553.PNG"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(96540);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);