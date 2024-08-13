"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6406],{82228:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=n(74848),i=n(28453);const a={id:"azure-account-requirements",title:"Azure account requirements",description:"How to prepare your Azure account for AI Unlimited installation",sidebar_label:"Azure account requirements",sidebar_position:2,pagination_prev:null,pagination_next:null},o="Azure account requirements",s={id:"resources/azure-account-requirements",title:"Azure account requirements",description:"How to prepare your Azure account for AI Unlimited installation",source:"@site/docs/resources/azure-requirements.md",sourceDirName:"resources",slug:"/resources/azure-account-requirements",permalink:"/pr-preview/pr-117/fr/ai-unlimited/resources/azure-account-requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"azure-account-requirements",title:"Azure account requirements",description:"How to prepare your Azure account for AI Unlimited installation",sidebar_label:"Azure account requirements",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},l={},u=[{value:"Prepare your Azure account",id:"prepare-your-azure-account",level:2},{value:"Create the role for the manager",id:"create-the-role-for-the-manager",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"azure-account-requirements",children:"Azure account requirements"}),"\n",(0,t.jsxs)(r.p,{children:["First, make sure you have the ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-117/fr/ai-unlimited/install-ai-unlimited/#prerequisites",children:"prerequisites"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Then before you install AI Unlimited, address these Azure items."}),"\n",(0,t.jsx)(r.h2,{id:"prepare-your-azure-account",children:"Prepare your Azure account"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Work with your cloud admin to ensure your Azure account has the permissions to create the cloud resources defined in the ",(0,t.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited",children:"AI Unlimited template"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Networking requirements: Your Azure ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",children:"resource group"})," must have an ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal",children:"Azure Virtual Network (VNet)"})," configured with a ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal",children:"subnet"}),". Use an existing VNet or subnet, or create your own, depending on your account permissions."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["If you'll need to access the manager instance to run commands or debug, you can use a ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal",children:"key pair"})," to securely connect using Secure Shell (SSH). You'll need the key pair when you ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-117/fr/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal#specify-instance-details",children:"specify the instance details"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"create-the-role-for-the-manager",children:"Create the role for the manager"}),"\n",(0,t.jsx)(r.p,{children:"The manager needs a role that allows it to do the following:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Deploy the engine."}),"\n",(0,t.jsx)(r.li,{children:"Create a new role for the engine (each time it deploys the engine) that allows the engine's nodes to communicate."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"deployments"})," folder in the ",(0,t.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub repository"})," provided by Teradata includes a manager role ARM template and a policy sample."]}),"\n",(0,t.jsx)(r.p,{children:"Open a terminal window, and clone the repository."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,t.jsx)(r.p,{children:"Or use the links that follow to download what you need."}),"\n",(0,t.jsx)(r.p,{children:"Create the role:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["If you have the permissions needed to create roles, create the role for the manager using the ",(0,t.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json",children:"role-policy"})," ARM template. See ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template",children:"Create or update Azure custom roles using an ARM template"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Or share the ",(0,t.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json",children:"ai-unlimited.json"})," policy, which contains the permissions the manager needs, with your cloud admin so they can create the role for you."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["You'll need the ",(0,t.jsx)(r.code,{children:"RoleDefinitionId"})," when you ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-117/fr/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal#specify-instance-details",children:"specify the instance details"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>s});var t=n(96540);const i={},a=t.createContext(i);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);