"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9941],{73441:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>r});var s=n(74848),i=n(28453);const r=[];function a(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"deployments"})," folder in the ",(0,s.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub repository"})," provided by Teradata contains template, parameter, and policy files for installing AI Unlimited."]}),"\n",(0,s.jsx)(t.p,{children:"Open a terminal window, and clone the repository."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},64075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(74848),i=n(28453),r=n(73441);const a={id:"deploy-manager-azure-portal",title:"Install on Azure",description:"Learn how to deploy the manager using an Azure Resource Manager (ARM) template.",sidebar_label:"Install on Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},l="Install the manager on Azure",o={id:"install-ai-unlimited/deploy-manager-azure-portal",title:"Install on Azure",description:"Learn how to deploy the manager using an Azure Resource Manager (ARM) template.",source:"@site/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md",sourceDirName:"install-ai-unlimited",slug:"/install-ai-unlimited/deploy-manager-azure-portal",permalink:"/pr-preview/pr-117/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-manager-azure-portal",title:"Install on Azure",description:"Learn how to deploy the manager using an Azure Resource Manager (ARM) template.",sidebar_label:"Install on Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},c=[{value:"Clone the repository",id:"clone-the-repository",level:2},...r.RM,{value:"Locate the manager template",id:"locate-the-manager-template",level:2},{value:"Load the template",id:"load-the-template",level:2},{value:"Specify instance details",id:"specify-instance-details",level:2},{value:"Create the instance",id:"create-the-instance",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"install-the-manager-on-azure",children:"Install the manager on Azure"}),"\n",(0,s.jsxs)(t.p,{children:["Before you begin, make sure you have the ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-117/ai-unlimited/install-ai-unlimited/#prerequisites",children:"prerequisites"})," and your Azure account meets ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-117/ai-unlimited/resources/azure-account-requirements",children:"the requirements"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The AI Unlimited manager orchestrates the engine's deployment and includes a web-based user interface for setup."}),"\n",(0,s.jsxs)(t.p,{children:["You'll use an Azure Resource Manager (ARM) template provided by Teradata to install the manager from the Azure Portal. You'll deploy a server instance, on which the manager runs in a container controlled by ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-117/ai-unlimited/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For installation help, email the ",(0,s.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"support team"})," or ask the ",(0,s.jsx)(t.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"community"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"clone-the-repository",children:"Clone the repository"}),"\n","\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"locate-the-manager-template",children:"Locate the manager template"}),"\n",(0,s.jsx)(t.p,{children:"ARM templates for the manager are here in the AI Unlimited GitHub repository:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"deployments/azure/templates/arm/ai-unlimited"})}),"\n",(0,s.jsxs)(t.p,{children:["Choose a template based on whether you intend to use a ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-117/ai-unlimited/glossary#load-balancer",children:"load balancer"})," and what type."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"You might want to ask a cloud admin at your organization for guidance."})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ai-unlimited-with-alb.json"}),"\u2014Hosts the manager behind an ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-117/ai-unlimited/glossary#application-load-balancer",children:"application load balancer"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ai-unlimited-with-nlb.json"}),"\u2014Hosts the manager behind a ",(0,s.jsx)(t.a,{href:"/pr-preview/pr-117/ai-unlimited/glossary#network-load-balancer",children:"network load balancer"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ai-unlimited-without-lb.json"}),"\u2014No load balancer. If you're unsure about which template to use, we recommend this one."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"load-the-template",children:"Load the template"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign in to the ",(0,s.jsx)(t.a,{href:"https://portal.azure.com",children:"Azure Portal"}),".","\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"References to Azure Portal are up-to-date as of May 29, 2024."})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Search for ",(0,s.jsx)(t.strong,{children:"custom deployment"}),", then select ",(0,s.jsx)(t.strong,{children:"Deploy a custom template"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Build your own template in the editor"}),", then ",(0,s.jsx)(t.strong,{children:"Load file"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the template file you chose to use, then select ",(0,s.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsx)("a",{id:"azure-parms"}),"\n",(0,s.jsx)(t.h2,{id:"specify-instance-details",children:"Specify instance details"}),"\n",(0,s.jsx)(t.p,{children:"Review the parameters. Provide values for the required parameters. Your organization might require others."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Azure and AI Unlimited parameters"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Subscription"}),(0,s.jsx)(t.td,{children:"The Azure subscription you want to use for deploying AI Unlimited."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA ",(0,s.jsx)("br",{}),"This must be a pay-as-you-go account."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Region"}),(0,s.jsx)(t.td,{children:"The region where you want to deploy AI Unlimited."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"Select the Azure region closest to your work location and the data resources to use with AI Unlimited."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resource Group Name"}),(0,s.jsx)(t.td,{children:"The name of the container that groups together related AI Unlimited resources."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: ai-unlimited-workspace"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AI Unlimited Name"}),(0,s.jsx)(t.td,{children:"Unique name given to AI Unlimited."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Public Key"}),(0,s.jsx)(t.td,{children:"The public SSH Key that you can use to connect to a VM over SSH."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"This value must start with \u201cssh-rsa\u201d."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OS Version"}),(0,s.jsx)(t.td,{children:"The versions of the operating systems that are available in the current subscription."}),(0,s.jsxs)(t.td,{children:["Optional  with default",(0,s.jsx)("br",{}),"Default: Ubuntu-2004"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Instance Type"}),(0,s.jsx)(t.td,{children:"The instance type that you want to use for AI Unlimited."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: STANDARD_D2_V3",(0,s.jsx)("br",{}),"We recommend using the default instance type to save costs. The default instance type is the standard Dv3 series with 2 vCPUs and 8.0 GiB of memory."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Network"}),(0,s.jsx)(t.td,{children:"The name of the network to which you want to deploy the AI Unlimited instance."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("br",{}),"Optional",(0,s.jsx)("br",{}),"Default: NA"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Subnet"}),(0,s.jsx)(t.td,{children:"The subnetwork to which you want to deploy the AI Unlimited instance."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"The subnet must reside in the selected availability zone."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Security Group"}),(0,s.jsx)(t.td,{children:"The virtual firewall that controls inbound and outbound traffic to the instance."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: AiUnlimitedSecurityGroup",(0,s.jsx)("br",{}),"Security Group is implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Access CIDR"}),(0,s.jsx)(t.td,{children:"The CIDR IP address range that is permitted to access the instance."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: 0.0.0.0/0",(0,s.jsx)("br",{}),"We recommend setting this value to a trusted IP range. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AI Unlimited HTTP Port"}),(0,s.jsx)(t.td,{children:"The port to access the AI Unlimited UI."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: 3000"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AI Unlimited GRPC Port"}),(0,s.jsx)(t.td,{children:"The port to access the AI Unlimited API."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: 3282"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Source App Sec Groups"}),(0,s.jsx)(t.td,{children:"The source application security groups (ASG) that have permission to connect to the AI Unlimited instance. ASGs let you organize your virtual machines (VMs) based on their specific network security policies. These security policies determine what traffic is or is not permissible on your virtual machine."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{})," Select an application security group in the same region as the network interface."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Destination App Sec Groups"}),(0,s.jsx)(t.td,{children:"The destination application security groups that have permission to connect to the AI Unlimited instance."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"Select an application security group in the same region as the network interface.\u202f"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Role Definition ID"}),(0,s.jsx)(t.td,{children:"The ID of the role to use with AI Unlimited."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"Use Azure CLI command- Get-AzRoleDefinition to get your Role Definition ID."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Allow Public SSH"}),(0,s.jsx)(t.td,{children:"Specifies whether you can use secure shell (SSH) keys to connect to VMs in Azure."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use Key Vault"}),(0,s.jsx)(t.td,{children:"Specifies whether to use Key Vault to retrieve the secured password during a deployment."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: New"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use Persistent Volume"}),(0,s.jsxs)(t.td,{children:["Specifies whether you want to use a new or existing persistent volume to store data. See ",(0,s.jsx)(t.em,{children:"Learn more: Using a persistent volume"})," below the parameters section."]}),(0,s.jsxs)(t.td,{children:["Optional with default",(0,s.jsx)("br",{}),"Default: New ",(0,s.jsx)("br",{}),"Supported options: New or Existing, depending on your use case."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Persistent Volume Size"}),(0,s.jsx)(t.td,{children:"The size of the persistent volume that you can attach to the instance, in GB."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: 100"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Existing Persistent Volume"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("br",{}),"The ID of the existing persistent volume that you can attach to the instance."]}),(0,s.jsxs)(t.td,{children:["Required if UsePersistentVolume is set to Existing.",(0,s.jsx)("br",{}),"Default: None",(0,s.jsx)("br",{}),"The persistent volume must be in the same availability zone as the AI Unlimited instance."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AI Unlimited Version"}),(0,s.jsx)(t.td,{children:"The version of the AI Unlimited you want to deploy."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: latest",(0,s.jsx)("br",{}),"The value is a container version tag."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use NLB"}),(0,s.jsx)(t.td,{children:"Specifies whether the instance is accessed using a Network Load Balancer."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: false"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tags"}),(0,s.jsx)(t.td,{children:"The key-value pairs that are assigned to the resources for quick identification."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default",":NA"]})]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Learn more: Using a persistent volume"}),(0,s.jsx)(t.p,{children:"The manager instance runs in a container and saves its configuration data in a database in the root volume of the instance. This data persists if you shut down, restart, or snapshot and relaunch the instance."}),(0,s.jsx)(t.p,{children:"A persistent volume stores data for a containerized application beyond the lifetime of the container, pod, or node in which it runs."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Without a persistent volume"})}),(0,s.jsx)(t.p,{children:"If the container, pod, or node crashes or terminates, you lose the manager's configuration data. You can deploy a new manager instance, but not to the same state as the one that was lost."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"With a persistent volume"})}),(0,s.jsx)(t.p,{children:"If the container, pod, or node crashes or terminates, and the manager's configuration data is stored in a persistent volume, you can deploy a new manager instance that has the same configuration as the one that was lost."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example"})}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Deploy the manager, and set the ",(0,s.jsx)(t.code,{children:"Use Persistent Volume"})," parameter to ",(0,s.jsx)(t.strong,{children:"New"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["After you create the stack, on the ",(0,s.jsx)(t.strong,{children:"Outputs"})," page, note the ",(0,s.jsx)(t.code,{children:"volume-id"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Use AI Unlimited."}),"\n",(0,s.jsxs)(t.li,{children:["If the manager instance is lost, deploy the manager again, and include these parameters:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Use Persistent Volume"}),": ",(0,s.jsx)(t.strong,{children:"New"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Existing Persistent Volume"}),": the value you noted in step 2"]}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(t.p,{children:"The new manager instance has the same configuration as the one that was lost."})]}),"\n",(0,s.jsx)(t.h2,{id:"create-the-instance",children:"Create the instance"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Review + create"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Create"}),".",(0,s.jsx)("br",{}),"\nOn the ",(0,s.jsx)(t.strong,{children:"Notifications"})," page, you can monitor progress."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["When deployment is complete, the ",(0,s.jsx)(t.strong,{children:"Outputs"})," page shows values generated for the created resources."]}),"\n",(0,s.jsx)(t.p,{children:"You'll need the URL to access the manager and set up AI Unlimited."}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/pr-preview/pr-117/ai-unlimited/resources/create-oauth-app",children:"Create an OAuth app"})," to allow authentication between AI Unlimited and your Git provider account."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);