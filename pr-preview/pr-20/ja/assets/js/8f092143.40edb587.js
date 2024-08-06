"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5344],{12225:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=a(74848),r=a(28453);const o={sidebar_position:4,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"January 16th, 2024",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in SageMaker",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},s="Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Amazon SageMaker",i={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Amazon SageMaker",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in SageMaker",source:"@site/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",permalink:"/pr-preview/pr-20/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"January 16th, 2024",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in SageMaker",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},sidebar:"tutorialSidebar",previous:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code",permalink:"/pr-preview/pr-20/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code"},next:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Google Cloud Vertex AI",permalink:"/pr-preview/pr-20/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS environment set-up",id:"aws-environment-set-up",level:2},{value:"Upload the Teradata modules for Jupyter to an S3 bucket",id:"upload-the-teradata-modules-for-jupyter-to-an-s3-bucket",level:3},{value:"Create an IAM role for your Jupyter Notebooks instance",id:"create-an-iam-role-for-your-jupyter-notebooks-instance",level:3},{value:"Create lifecycle configuration for your Jupyter Notebooks instance",id:"create-lifecycle-configuration-for-your-jupyter-notebooks-instance",level:3},{value:"Create Jupyter Notebooks instance",id:"create-jupyter-notebooks-instance",level:3},{value:"Find the IP CIDR of your Jupyter Notebooks instance",id:"find-the-ip-cidr-of-your-jupyter-notebooks-instance",level:2},{value:"VantageCloud Lake Configuration",id:"vantagecloud-lake-configuration",level:2},{value:"Jupyter Notebook Demos for VantageCloud Lake",id:"jupyter-notebook-demos-for-vantagecloud-lake",level:2},{value:"Configurations",id:"configurations",level:3},{value:"Run demos",id:"run-demos",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-teradata-jupyter-notebook-demos-for-vantagecloud-lake-in-amazon-sagemaker",children:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Amazon SageMaker"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["This quickstart details the process for running the ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Jupyter Notebook Demos for VantageCloud Lake"}),", on Amazon SageMaker, the AI/ML platform from AWS."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Teradata modules for Jupyter (download ",(0,t.jsx)(n.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"here"}),", registration required)"]}),"\n",(0,t.jsx)(n.li,{children:"AWS account with access to S3 and SageMaker"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-20/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"Access to a VantageCloud Lake environment"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"aws-environment-set-up",children:"AWS environment set-up"}),"\n",(0,t.jsx)(n.p,{children:"In this section we will cover in detail each of the steps below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Upload the Teradata modules for Jupyter to a S3 bucket"}),"\n",(0,t.jsx)(n.li,{children:"Create an IAM role for your Jupyter notebook instance"}),"\n",(0,t.jsx)(n.li,{children:"Create a lifecycle configuration for your Jupyter notebook instance"}),"\n",(0,t.jsx)(n.li,{children:"Create Jupyter notebook instance"}),"\n",(0,t.jsx)(n.li,{children:"Find the IP CIDR of your Jupyter notebook instance"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"upload-the-teradata-modules-for-jupyter-to-an-s3-bucket",children:"Upload the Teradata modules for Jupyter to an S3 bucket"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"On AWS S3 create a bucket and keep note of the assigned name"}),"\n",(0,t.jsx)(n.li,{children:"Default options are appropiate for this bucket"}),"\n",(0,t.jsxs)(n.li,{children:["In the created bucket upload the Teradata modules for Jupyter\n",(0,t.jsx)(n.img,{alt:"Load modules in S3 bucket",src:a(34276).A+"",width:"1497",height:"477"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-an-iam-role-for-your-jupyter-notebooks-instance",children:"Create an IAM role for your Jupyter Notebooks instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On SageMaker navigate to the role manager\n",(0,t.jsx)(n.img,{alt:"New role creation",src:a(12089).A+"",width:"1077",height:"665"})]}),"\n",(0,t.jsx)(n.li,{children:"Create a new role (if not already defined)"}),"\n",(0,t.jsxs)(n.li,{children:["For purposes of this guide the role created is assigned the data scientist persona\n",(0,t.jsx)(n.img,{alt:"Role name and persona",src:a(58416).A+"",width:"1159",height:"621"})]}),"\n",(0,t.jsx)(n.li,{children:"On the settings, it is appropiate to keep the defaults"}),"\n",(0,t.jsxs)(n.li,{children:["In the corresponding screen define the bucket where you uploaded the Teradata Jupyter modules\n",(0,t.jsx)(n.img,{alt:"S3 bucket",src:a(23019).A+"",width:"880",height:"368"})]}),"\n",(0,t.jsxs)(n.li,{children:["In the next configuration we add the corresponding policies for access to the S3 bucket",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"S3 bucket permissions",src:a(69474).A+"",width:"1001",height:"603"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-lifecycle-configuration-for-your-jupyter-notebooks-instance",children:"Create lifecycle configuration for your Jupyter Notebooks instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On SageMaker navigate to lifecycle configurations and click on create\n",(0,t.jsx)(n.img,{alt:"Create lifecycle configuration",src:a(57166).A+"",width:"1834",height:"501"})]}),"\n",(0,t.jsxs)(n.li,{children:["Define a lifecycle configuration with the following scripts","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When working from a Windows environment, we recommend copying the scripts into the lifecycle configuration editor line by line. Press 'Enter' after each line directly in the editor to avoid copying issues. This approach helps prevent carriage return errors that can occur due to encoding differences between Windows and Linux. Such errors often manifest as \"/bin/bash^M: bad interpreter\" and can disrupt script execution.\n",(0,t.jsx)(n.img,{alt:"Create lifecycle configuration",src:a(66373).A+"",width:"829",height:"878"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On create script:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:', id="sagemaker_first_config", role="content-editable emits-gtm-events"',children:'#!/bin/bash\n\nset -e\n\n# This script installs a custom, persistent installation of conda on the Notebook Instance\'s EBS volume, and ensures\n# that these custom environments are available as kernels in Jupyter.\n\n\nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n# Install a separate conda installation via Miniconda\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\nmkdir -p "$WORKING_DIR"\nwget https://repo.anaconda.com/miniconda/Miniconda3-4.6.14-Linux-x86_64.sh -O "$WORKING_DIR/miniconda.sh"\nbash "$WORKING_DIR/miniconda.sh" -b -u -p "$WORKING_DIR/miniconda"\nrm -rf "$WORKING_DIR/miniconda.sh"\n# Create a custom conda environment\nsource "$WORKING_DIR/miniconda/bin/activate"\nKERNEL_NAME="teradatasql"\n\nPYTHON="3.8"\nconda create --yes --name "$KERNEL_NAME" python="$PYTHON"\nconda activate "$KERNEL_NAME"\npip install --quiet ipykernel\n\nEOF\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On start script (In this script substitute name of your bucket and confirm version of Jupyter modules)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:'#!/bin/bash\n\nset -e\n\n# This script installs Teradata Jupyter kernel and extensions.\n\n\nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\n\nsource "$WORKING_DIR/miniconda/bin/activate" teradatasql\n\n# Install teradatasql, teradataml, and pandas in the teradatasql environment\npip install teradataml\npip install pandas\n\n# fetch Teradata Jupyter extensions package from S3 and unzip it\nmkdir -p "$WORKING_DIR/teradata"\naws s3 cp s3://resources-jp-extensions/teradatasqllinux_3.4.1-d05242023.zip "$WORKING_DIR/teradata"\ncd "$WORKING_DIR/teradata"\nunzip -o teradatasqllinux_3.4.1-d05242023\ncp teradatakernel /home/ec2-user/anaconda3/condabin\njupyter kernelspec install --user ./teradatasql\nsource /home/ec2-user/anaconda3/bin/activate JupyterSystemEnv\n\n# Install other Teradata-related packages\npip install teradata_connection_manager_prebuilt-3.4.1.tar.gz\npip install teradata_database_explorer_prebuilt-3.4.1.tar.gz\npip install teradata_preferences_prebuilt-3.4.1.tar.gz\npip install teradata_resultset_renderer_prebuilt-3.4.1.tar.gz\npip install teradata_sqlhighlighter_prebuilt-3.4.1.tar.gz\n\nconda deactivate\nEOF\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-jupyter-notebooks-instance",children:"Create Jupyter Notebooks instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On SageMaker navigate Notebooks, Notebook instances, create notebook instance"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Choose a name for your notebook instance, define size (for demos the smaller available instance is enough)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click in additional configurations and assign the recently created lifecycle configuration\n",(0,t.jsx)(n.img,{alt:"Create notebook instance",src:a(65976).A+"",width:"814",height:"668"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click in additional configurations and assign the recently created lifecycle configuration"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Assign the recently created IAM role to the notebook instance\n",(0,t.jsx)(n.img,{alt:"Assign IAM role to notebook instance",src:a(38259).A+"",width:"823",height:"415"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Paste the following link ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"https://github.com/Teradata/lake-demos"})," as the default github repository for the notebook instance\n",(0,t.jsx)(n.img,{alt:"Assign default repository for the notebook instance",src:a(80650).A+"",width:"812",height:"496"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"find-the-ip-cidr-of-your-jupyter-notebooks-instance",children:"Find the IP CIDR of your Jupyter Notebooks instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Once the instance is running click on open JupyterLab\n",(0,t.jsx)(n.img,{alt:"Initiate JupyterLab",src:a(49925).A+"",width:"1529",height:"308"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Loaded JupyterLab",src:a(13948).A+"",width:"1630",height:"665"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On JupyterLab open a notebook with Teradata Python kernel and run the following command for finding your notebook instance IP address.\n** We will whitelist this IP in your VantageCloud Lake environment in order to allow the connection.\n** This is for purposes of this guide and the notebooks demos. For production environments, a configuration of VPCs, Subnets and Security Groups might need to be configured and whitelisted."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:', role="content-editable"',children:'import requests\ndef get_public_ip():\n    try:\n        response # requests.get(\'https://api.ipify.org\')\n        return response.text\n    except requests.RequestException as e:\n        return "Error: " + str(e)\nmy_public_ip = get_public_ip()\nprint("My Public IP is:", my_public_ip)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"vantagecloud-lake-configuration",children:"VantageCloud Lake Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the VantageCloud Lake environment, under settings, add the IP of your notebook instance\n",(0,t.jsx)(n.img,{alt:"Initiate JupyterLab",src:a(73483).A+"",width:"1423",height:"662"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"jupyter-notebook-demos-for-vantagecloud-lake",children:"Jupyter Notebook Demos for VantageCloud Lake"}),"\n",(0,t.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The file ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json file"})," should be edited to match the configuration of your VantageCloud Lake environment\n",(0,t.jsx)(n.img,{alt:"Initiate JupyterLab",src:a(72984).A+"",width:"922",height:"904"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Especifically the following values should be added"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Variable"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Value"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:'"host"'})}),(0,t.jsx)(n.td,{children:"Public IP value from your VantageCloud Lake environment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:'"UES_URI"'})}),(0,t.jsx)(n.td,{children:"Open Analytics from your VantageCloud Lake environment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:'"dbc"'})}),(0,t.jsx)(n.td,{children:"The master password of your VantageCloud Lake environment"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Remember to change all passwords in the vars.json file."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'You\'ll see that in the sample vars.json, the passwords of all users are defaulted to "password", this is just for illustration purposes, you should change all of these password fields to strong passwords, secure them as necessary, and follow other password management best practices.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run-demos",children:"Run demos"}),"\n",(0,t.jsxs)(n.p,{children:["Open and execute all the cells in ",(0,t.jsx)(n.strong,{children:"0_Demo_Environment_Setup.ipynb"})," to setup your environment. Followed by ",(0,t.jsx)(n.strong,{children:"1_Demo_Setup_Base_Data.ipynb"})," to load the base data required for demo."]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about the demo notebooks, go to ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake demos"})," page on GitHub."]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"In this quick start we learned how to run Jupyter notebook demos for VantageCloud Lake in Amazon SageMaker."}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Teradata VantageCloud Lake documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-20/ja/quickstarts/analyze-data/jupyter",children:"Use Vantage from a Jupyter notebook"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},34276:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-bucket-upload-0359d336e891b293b9e95b9a19716e2a.png"},57166:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-config-1-37bd311b7e0a198aad41540fde744660.PNG"},66373:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-config-2-471ede0955dd9880a74bfaab418ce85a.PNG"},13948:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-create-loaded-env-b4cb2bcd756253ce4ef59ad59ebebffc.PNG"},65976:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-create-notebook-1-90dbf20eaed6514ea59a6cc3711f1d99.PNG"},38259:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-create-notebook-2-8b6338dddc60bddba24a250c0b4727bb.PNG"},80650:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-create-notebook-3-a93f157e2cee35635753ea3c75e0cfb4.PNG"},49925:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-create-notebook-4-4e4787d5e37fe633f5fe277a7fdd9fe1.PNG"},12089:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-iam-role-0-ef40601b931005caef15743caea099f8.PNG"},58416:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-iam-role-1-379375347ef2d38438acbc3c6b74eb9d.PNG"},23019:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-iam-role-2-ed4e47f61a33c1eed8a2e5c7e9dcace8.PNG"},69474:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-iam-role-3-bb9bebcabc889c2b5f3e7b9cd002d484.PNG"},73483:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-lake-9e18bff602d568e81bbb721a3d4e2553.PNG"},72984:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/sagemaker-vars-d771ffabe211a1bd3ebd6ba6ce32468d.PNG"},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var t=a(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);