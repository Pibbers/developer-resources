"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9401],{3441:(e,t,n)=>{n.d(t,{Ay:()=>o,RM:()=>i});var r=n(4848),s=n(8453);const i=[];function a(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"deployments"})," folder in the ",(0,r.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub repository"})," provided by Teradata contains template, parameter, and policy files for installing AI Unlimited."]}),"\n",(0,r.jsx)(t.p,{children:"Open a terminal window, and clone the repository."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},9229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(4848),s=n(8453),i=n(3441);const a={id:"deploy-jupyter-azure-portal",title:"Install JupyterLab on Azure",description:"Learn how to deploy JupyterLab using an ARM template.",sidebar_label:"Install on Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},o="Install JupyterLab on Azure",l={id:"resources/jupyterlab/deploy-jupyter-azure-portal",title:"Install JupyterLab on Azure",description:"Learn how to deploy JupyterLab using an ARM template.",source:"@site/docs/resources/jupyterlab/install-jupyterlab-azure.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/deploy-jupyter-azure-portal",permalink:"/ai-unlimited-docs/pr-preview/pr-96/fr/docs/resources/jupyterlab/deploy-jupyter-azure-portal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-jupyter-azure-portal",title:"Install JupyterLab on Azure",description:"Learn how to deploy JupyterLab using an ARM template.",sidebar_label:"Install on Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},c=[{value:"Prepare your Azure account",id:"prepare-your-azure-account",level:2},{value:"Clone the repository",id:"clone-the-repository",level:2},...i.RM,{value:"Locate the Jupyter template",id:"locate-the-jupyter-template",level:2},{value:"Load the template",id:"load-the-template",level:2},{value:"Specify instance details",id:"specify-instance-details",level:2},{value:"Create the instance",id:"create-the-instance",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"install-jupyterlab-on-azure",children:"Install JupyterLab on Azure"}),"\n",(0,r.jsx)(t.p,{children:"You'll use an  Azure Resource Manager (ARM) template provided by Teradata to install JupyterLab, and the AI Unlimited kernel, from the Azure Portal."}),"\n",(0,r.jsxs)(t.p,{children:["This deploys a server instance, with JupyterLab running in a container controlled by ",(0,r.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-96/fr/docs/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["For installation support, email the ",(0,r.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"support team"})," or ask the ",(0,r.jsx)(t.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"community"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"prepare-your-azure-account",children:"Prepare your Azure account"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Work with your cloud admin to ensure your Azure account has the permissions needed to create the cloud resources defined in the ",(0,r.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter",children:"JupyterLab template"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Networking requirements: Your Azure ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",children:"resource group"})," must have an ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal",children:"Azure Virtual Network (VNet)"})," configured with a ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal",children:"subnet"}),". Use an existing VNet or subnet, or create your own, depending on your account permissions."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If you'll need to access the JupyterLab instance to run commands or debug, you can use a ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys",children:"key pair"})," to securely connect using Secure Shell (SSH). You'll need the key pair when you ",(0,r.jsx)(t.a,{href:"#specify-instance-details",children:"specify the instance details"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"clone-the-repository",children:"Clone the repository"}),"\n","\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"locate-the-jupyter-template",children:"Locate the Jupyter template"}),"\n",(0,r.jsx)(t.p,{children:"ARM templates for JupyterLab are here in the AI Unlimited GitHub repository:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"deployments/azure/templates/arm/jupyter"})}),"\n",(0,r.jsxs)(t.p,{children:["Choose a template based on whether you intend to use a ",(0,r.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-96/fr/docs/glossary#load-balancer",children:"load balancer"})," and what type."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"You might want to ask a cloud admin at your organization for guidance."})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"jupyter-with-alb.json"}),"\u2014Hosts JupyterLab behind an ",(0,r.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-96/fr/docs/glossary#application-load-balancer",children:"application load balancer"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"jupyter-with-nlb.json"}),"\u2014Hosts JupyterLab behind a ",(0,r.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-96/fr/docs/glossary#network-load-balancer",children:"network load balancer"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"jupyter-without-lb.json"}),"\u2014No load balancer"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"load-the-template",children:"Load the template"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Sign in to the ",(0,r.jsx)(t.a,{href:"https://portal.azure.com",children:"Azure Portal"}),".","\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"References to Azure Portal are up-to-date as of May 29, 2024."})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Search for ",(0,r.jsx)(t.strong,{children:"custom deployment"}),", then select ",(0,r.jsx)(t.strong,{children:"Deploy a custom template"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Select ",(0,r.jsx)(t.strong,{children:"Build your own template in the editor"}),", then ",(0,r.jsx)(t.strong,{children:"Load file"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Select the template file you chose to use, and select ",(0,r.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"specify-instance-details",children:"Specify instance details"}),"\n",(0,r.jsx)(t.p,{children:"Review the parameters. Provide values for the required ones. Your organization might require others."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Azure and JupyterLab parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Subscription"}),(0,r.jsx)(t.td,{children:"The Azure subscription you want to use for deploying AI Unlimited."}),(0,r.jsxs)(t.td,{children:["Required",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"We recommend using an account that is not a Free Trial."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Region"}),(0,r.jsx)(t.td,{children:"The region where you want to deploy AI Unlimited."}),(0,r.jsxs)(t.td,{children:["Required",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"Select the Azure region closest to your work location and the data resources to use with AI Unlimited."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resource Group Name"}),(0,r.jsx)(t.td,{children:"The name of the container that groups together related AI Unlimited resources."}),(0,r.jsxs)(t.td,{children:["Required",(0,r.jsx)("br",{}),"Default: ai-unlimited-jupyter"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OS Version"}),(0,r.jsx)(t.td,{children:"The versions of the operating systems that are available in the current subscription."}),(0,r.jsxs)(t.td,{children:["Optional  with default",(0,r.jsx)("br",{}),"Default: Ubuntu-2004"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Instance Type"}),(0,r.jsx)(t.td,{children:"The instance type that you want to use for AI Unlimited."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: STANDARD_D2_V3",(0,r.jsx)("br",{}),"We recommend using the default instance type to save costs. The default instance type is the standard Dv3 series with 2 vCPUs and 8.0 GiB of memory."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Network"}),(0,r.jsx)(t.td,{children:"The name of the network to which you want to deploy the AI Unlimited instance."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: NA"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Subnet"}),(0,r.jsx)(t.td,{children:"The subnetwork to which you want to deploy the AI Unlimited instance."}),(0,r.jsxs)(t.td,{children:["Required",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"The subnet must reside in the selected availability zone."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Security Group"}),(0,r.jsx)(t.td,{children:"The virtual firewall that controls inbound and outbound traffic to the instance."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: JupyterSecurityGroup",(0,r.jsx)("br",{}),"Security Group is implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Access CIDR"}),(0,r.jsx)(t.td,{children:"The CIDR IP address range that is permitted to access the instance."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: 0.0.0.0/0",(0,r.jsx)("br",{}),"We recommend setting this value to a trusted IP range. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Source App Sec Groups (ASG)"}),(0,r.jsx)(t.td,{children:"The source application security groups that have permission to connect to the AI Unlimited instance. ASGs let you organize your virtual machines (VMs) based on their specific network security policies. These security policies determine what traffic is or is not permissible on your virtual machine."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"Select an application security group in the same region as the network interface."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Destination App Sec Groups"}),(0,r.jsx)(t.td,{children:"The destination application security Groups that have permission to connect to the AI Unlimited instance."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"Select an application security group in the same region as the network interface."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Role Definition ID"}),(0,r.jsx)(t.td,{children:"The ID of the role to use with AI Unlimited."}),(0,r.jsxs)(t.td,{children:["Required",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"Use Azure CLI command- ",(0,r.jsx)(t.code,{children:"Get-AzRoleDefinition"})," command\u202fto get your Role Definition ID."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Allow Public SSH"}),(0,r.jsx)(t.td,{children:"Specifies whether you can use secure shell (SSH) keys to connect to VMs in Azure."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: true"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Public Key"}),(0,r.jsx)(t.td,{children:"The public SSH Key that you can use to connect to a VM over SSH."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"This value must start with ",(0,r.jsx)(t.code,{children:"ssh-rsa"}),".\u202f"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Use Persistent Volume"}),(0,r.jsxs)(t.td,{children:["Specifies whether you want to use a new or existing persistent volume to store data. See ",(0,r.jsx)(t.em,{children:"Learn more: Using a persistent volume"})," below the parameters section."]}),(0,r.jsxs)(t.td,{children:["Optional with default",(0,r.jsx)("br",{}),"Default: New",(0,r.jsx)("br",{}),"Supported options are a new persistent volume or an existing one, depending on your use case."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Persistent Volume Size"}),(0,r.jsx)(t.td,{children:"The size of the persistent volume that you can attach to the instance, in GB."}),(0,r.jsxs)(t.td,{children:["Optional",(0,r.jsx)("br",{}),"Default: 100",(0,r.jsx)("br",{}),"Supports values between 8\u202f and 1000."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Existing Persistent Volume"}),(0,r.jsx)(t.td,{children:"The ID of the existing persistent volume that you can attach to the instance."}),(0,r.jsxs)(t.td,{children:["Required if Use Persistent Volume is set to Existing",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"The persistent volume must be in the same availability zone as the AI Unlimited instance."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"JupyterHttpPort"}),(0,r.jsx)(t.td,{children:"The port to access the JupyterLab service UI."}),(0,r.jsxs)(t.td,{children:["Required with default",(0,r.jsx)("br",{}),"Default: 8888"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"JupyterVersion"}),(0,r.jsx)(t.td,{children:"The version of JupyterLab you want to deploy."}),(0,r.jsxs)(t.td,{children:["Required with default",(0,r.jsx)("br",{}),"Default: latest",(0,r.jsx)("br",{}),"The value is a container version tag, for example, latest."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"JupyterToken"}),(0,r.jsx)(t.td,{children:"The token or password used to access JupyterLab from the UI."}),(0,r.jsxs)(t.td,{children:["Required",(0,r.jsx)("br",{}),"Default: NA",(0,r.jsx)("br",{}),"The token must begin with a letter and contain only alphanumeric characters. The allowed pattern is ^[a-zA-Z][a-zA-Z0-9-]*."]})]})]})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Learn more: Using a persistent volume"}),(0,r.jsx)(t.p,{children:"The JupyterLab instance runs in a container and saves its configuration data in a database in the root volume of the instance. This data persists if you shut down, restart, or snapshot and relaunch the instance."}),(0,r.jsx)(t.p,{children:"But a persistent volume stores data for a containerized application beyond the lifetime of the container, pod, or node in which it runs."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Without a persistent volume"})}),(0,r.jsx)(t.p,{children:"If the container, pod, or node crashes or terminates, you lose the JupyterLab configuration data. You can deploy a new JupyterLab instance, but not to the same state as the one that was lost."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"With a persistent volume"})}),(0,r.jsx)(t.p,{children:"If the container, pod, or node crashes or terminates, and the JupyterLab configuration data is stored in a persistent volume, you can deploy a new JupyterLab instance that has the same configuration as the one that was lost."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example"})}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Deploy JupyterLab, and include these parameters:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"UsePersistentVolume"}),": ",(0,r.jsx)(t.strong,{children:"New"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["After you create the stack, on the ",(0,r.jsx)(t.strong,{children:"Outputs"})," tab, note the ",(0,r.jsx)(t.code,{children:"volume-id"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Use JupyterLab."}),"\n",(0,r.jsxs)(t.li,{children:["If the JupyterLab instance is lost, deploy JupyterLab again, and include these parameters:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"UsePersistentVolume"}),": ",(0,r.jsx)(t.strong,{children:"New"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ExistingPersistentVolumeId"}),": the value you noted in step 2"]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsx)(t.p,{children:"The new JupyterLab instance has the same configuration as the one that was lost."})]}),"\n",(0,r.jsx)(t.h2,{id:"create-the-instance",children:"Create the instance"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Select ",(0,r.jsx)(t.strong,{children:"Review + create"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Select ",(0,r.jsx)(t.strong,{children:"Create"}),".",(0,r.jsx)("br",{}),"\nOn the ",(0,r.jsx)(t.strong,{children:"Notifications"})," page, you can monitor progress."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When deployment is complete, the ",(0,r.jsx)(t.strong,{children:"Outputs"})," page shows the URL for accessing JupyterLab."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);