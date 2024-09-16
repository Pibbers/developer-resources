"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1474],{41269:(e,t,n)=>{n.d(t,{Ay:()=>r,RM:()=>i});var a=n(74848),s=n(28453);const i=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function r(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},81638:(e,t,n)=>{n.d(t,{Ay:()=>r,RM:()=>i});var a=n(74848),s=n(28453);const i=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["This how-to shows you how to add Teradata Extensions to a Jupyter Notebooks environment. A hosted version of Jupyter Notebooks integrated with Teradata Extensions and analytics tools is available for functional testing for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com",children:"https://clearscape.teradata.com"}),"."]})})}function r(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},62680:(e,t,n)=>{n.d(t,{Ay:()=>r,RM:()=>i});var a=n(74848),s=n(28453);const i=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function r(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},52416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a=n(74848),s=n(28453),i=n(62680),o=n(81638),r=n(41269);const c={sidebar_position:11,author:"Hailing Jiang",email:"Hailing.Jiang@teradata.com",page_last_update:"September 27th, 2022",description:"Integrate Teradata Jupyter extensions with SageMaker notebook instance",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy"]},l="Integrate Teradata Jupyter extensions with SageMaker notebook instance",d={id:"analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker",title:"Integrate Teradata Jupyter extensions with SageMaker notebook instance",description:"Integrate Teradata Jupyter extensions with SageMaker notebook instance",source:"@site/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker.md",sourceDirName:"analyze-data",slug:"/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker",permalink:"/pr-preview/pr-135/fr/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,author:"Hailing Jiang",email:"Hailing.Jiang@teradata.com",page_last_update:"September 27th, 2022",description:"Integrate Teradata Jupyter extensions with SageMaker notebook instance",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy"]},sidebar:"tutorialSidebar",previous:{title:"Integrate Teradata Jupyter extensions with Google Vertex AI",permalink:"/pr-preview/pr-135/fr/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai"},next:{title:"Create Vizualizations in Power BI using Vantage",permalink:"/pr-preview/pr-135/fr/quickstarts/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage"}},p={},u=[...o.RM,{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},...i.RM,{value:"Integration",id:"integration",level:3},{value:"Steps to integrate with notebook instance",id:"steps-to-integrate-with-notebook-instance",level:3},{value:"Further reading",id:"further-reading",level:3},...r.RM];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"integrate-teradata-jupyter-extensions-with-sagemaker-notebook-instance",children:"Integrate Teradata Jupyter extensions with SageMaker notebook instance"}),"\n",(0,a.jsx)(o.Ay,{}),"\n",(0,a.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Teradata Jupyter extensions provide Teradata SQL kernel and several UI extensions to allow users to easily asccess and navigate Teradata database from Jupyter envioronment. This article describes how to integate our Jupyter extensions with SageMaker notebook instance."}),"\n",(0,a.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Access to a Teradata Vantage instance","\n",(0,a.jsx)(i.Ay,{}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"AWS account"}),"\n",(0,a.jsx)(t.li,{children:"AWS S3 bucket to store lifecycle configuration scripts and Teradata Jupyter extension package"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"integration",children:"Integration"}),"\n",(0,a.jsx)(t.p,{children:"SageMaker supports customization of notebook instances using lifecycle configuration scripts. Below we will demo how to use lifecycle configuration scripts to install our Jupyter kernel and extensions in a notebook instance."}),"\n",(0,a.jsx)(t.h3,{id:"steps-to-integrate-with-notebook-instance",children:"Steps to integrate with notebook instance"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Download Teradata Jupyter extensions package"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Download Linux version from ",(0,a.jsx)(t.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter"}),' and upload it to an S3 bucket. This zipped package contains Teradata Jupyter kernel and extensions. Each extension has 2 files, the one with "_prebuilt" in the name is prebuilt extension which can be installed using PIP, the other one is source extension that needs to be installed using "jupyter labextension". It is recommended to use prebuilt extensions.']}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Create a lifecycle configuration for notebook instance\n",(0,a.jsx)(t.img,{alt:"create a lifecycle configuration for notebook instance",src:n(12617).A+"",width:"2900",height:"788"})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Here are sample scripts that fetches the Teradata package from S3 bucket and installs Jupyter kernel and extensions. Note that on-create.sh creates a custom conda env that persists on notebook instance's EBS volume so that the installation will not get lost after notebook restarts. on-start.sh installs Teradata kernel and extensions to the custom conda env."}),"\n",(0,a.jsx)(t.p,{children:"on-create.sh"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:', role="content-editable',children:'#!/bin/bash\n \nset -e\n \n# This script installs a custom, persistent installation of conda on the Notebook Instance\'s EBS volume, and ensures\n# that these custom environments are available as kernels in Jupyter.\n \n \nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n# Install a separate conda installation via Miniconda\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\nmkdir -p "$WORKING_DIR"\nwget https://repo.anaconda.com/miniconda/Miniconda3-4.6.14-Linux-x86_64.sh -O "$WORKING_DIR/miniconda.sh"\nbash "$WORKING_DIR/miniconda.sh" -b -u -p "$WORKING_DIR/miniconda"\nrm -rf "$WORKING_DIR/miniconda.sh"\n# Create a custom conda environment\nsource "$WORKING_DIR/miniconda/bin/activate"\nKERNEL_NAME="teradatasql"\n \nPYTHON="3.8"\nconda create --yes --name "$KERNEL_NAME" python="$PYTHON"\nconda activate "$KERNEL_NAME"\npip install --quiet ipykernel\n \nEOF\n'})}),"\n",(0,a.jsx)(t.p,{children:"on-start.sh"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:', role="content-editable"',children:'#!/bin/bash\n \nset -e\n \n# This script installs Teradata Jupyter kernel and extensions.\n \n \nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n \nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\n \nsource "$WORKING_DIR/miniconda/bin/activate" teradatasql\n \n# fetch Teradata Jupyter extensions package from S3 and unzip it\nmkdir -p "$WORKING_DIR/teradata"\naws s3 cp s3://sagemaker-teradata-bucket/teradatasqllinux_3.3.0-ec06172022.zip "$WORKING_DIR/teradata"\ncd "$WORKING_DIR/teradata"\n \nunzip -o teradatasqllinux_3.3.0-ec06172022.zip\n \n# install Teradata kernel\ncp teradatakernel /home/ec2-user/anaconda3/condabin\njupyter kernelspec install --user ./teradatasql\n \n# install Teradata Jupyter extensions\nsource /home/ec2-user/anaconda3/bin/activate JupyterSystemEnv\n \npip install teradata_connection_manager_prebuilt-3.3.0.tar.gz\npip install teradata_database_explorer_prebuilt-3.3.0.tar.gz\npip install teradata_preferences_prebuilt-3.3.0.tar.gz\npip install teradata_resultset_renderer_prebuilt-3.3.0.tar.gz\npip install teradata_sqlhighlighter_prebuilt-3.3.0.tar.gz\n \nconda deactivate\nEOF\n'})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a notebook instance. Please select 'Amazon Linux 2, Jupyter Lab3' for Platform identifier and select the lifecycle configuration created in step 2 for Lifecycle configuration."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Create notebook instance",src:n(38687).A+"",width:"1912",height:"1368"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You might also need to add vpc, subnet and security group in 'Network' section to gain access to Teradata databases."}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Wait until notebook instance Status turns 'InService', click 'Open JupyterLab' to open the notebook.\n",(0,a.jsx)(t.img,{alt:"Open notebook",src:n(25176).A+"",width:"2654",height:"660"})]}),"\n",(0,a.jsxs)(t.p,{children:["Access the demo notebooks to get usage tips\n",(0,a.jsx)(t.img,{alt:"access demo notebooks",src:n(99067).A+"",width:"2852",height:"1082"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://teradata.github.io/jupyterextensions",children:"Teradata Jupyter Extensions Website"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root",children:"Teradata Vantage\u2122 Modules for Jupyter Installation Guide"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root",children:"Teradata\xae Package for Python User Guide"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html",children:"Customize a Notebook Instance Using a Lifecycle Configuration Script"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/aws-samples/amazon-sagemaker-notebook-instance-lifecycle-config-samples/blob/master/scripts/persistent-conda-ebs/on-create.sh",children:"amazon sagemaker notebook instance lifecycle config samples"})}),"\n"]}),"\n","\n",(0,a.jsx)(r.Ay,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},12617:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sagemaker.notebook.create.lifecycle.config-aa5b0851303bb769f768fe899a5fc5e8.png"},38687:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sagemaker.notebook.create.notebook.instance-890cfccaa74f3589c1b62ef4a0cc6761.png"},25176:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sagemaker.notebook.notebook.inservice-bed2d0acfce668b3f0f19d7de337ddba.png"},99067:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sagemaker.notebook.start-343b0d8adca75aa8adcc9256350f4de9.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);