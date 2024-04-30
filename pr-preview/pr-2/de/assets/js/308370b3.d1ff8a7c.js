"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8833],{4422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=n(4848),r=n(8453);const i={id:"prod-azure-create-custom-role",title:"Full installation - Azure - Create a custom role",description:"Learn how to create the role AI Unlimited needs to deploy the engine.",sidebar_label:"Create a custom role with the required permissions",sidebar_position:6},s="Create a role with the required permissions",l={id:"temp-folder/Azure-temp/before-you-begin/prod-azure-create-custom-role",title:"Full installation - Azure - Create a custom role",description:"Learn how to create the role AI Unlimited needs to deploy the engine.",source:"@site/docs/temp-folder/Azure-temp/before-you-begin/prod-azure-create-custom-role.md",sourceDirName:"temp-folder/Azure-temp/before-you-begin",slug:"/temp-folder/Azure-temp/before-you-begin/prod-azure-create-custom-role",permalink:"/ai-unlimited-docs/de/docs/temp-folder/Azure-temp/before-you-begin/prod-azure-create-custom-role",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"prod-azure-create-custom-role",title:"Full installation - Azure - Create a custom role",description:"Learn how to create the role AI Unlimited needs to deploy the engine.",sidebar_label:"Create a custom role with the required permissions",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Prepare your Azure account",permalink:"/ai-unlimited-docs/de/docs/temp-folder/Azure-temp/before-you-begin/prod-azure-prepare-your-account"},next:{title:"AWS CLI",permalink:"/ai-unlimited-docs/de/docs/temp-folder/install-jupyter-cli/aws-cli-deploy-jupyter"}},d={},a=[];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"create-a-role-with-the-required-permissions",children:"Create a role with the required permissions"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Grabbed this from the Azure Demo installation before we removed it. True for the full installation too?"})})}),"\n",(0,o.jsxs)(t.p,{children:["If the roles defined by your organization cannot deploy AI Unlimited ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"(needs better wording--roles don't deploy)"})}),", use the ",(0,o.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json",children:"role-policy"})," ARM template. This template contains permissions to create an AI Unlimited instance and grants AI Unlimited permissions to create specific IAM ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"[RBAC?]"})})," roles and policies for the AI Unlimited engines it deploys. Optionally, you can share the ",(0,o.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json",children:"ai-unlimited"})," file with your organization administrator to create the custom role on your behalf. This file contains the subscription-level permissions required for AI Unlimited to deploy AI Unlimited engine instances within your resource groups."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Need to look at the template - any readme."})})}),"\n",(0,o.jsxs)(t.p,{children:["If you have the permissions needed to create roles, ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-portal",children:"configure the custom roles and policies"})," on the ",(0,o.jsx)(t.strong,{children:"Access control (IAM)"})," page ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"(AWS term)"})})," from the Azure portal."]}),"\n",(0,o.jsxs)(t.p,{children:["To deploy the role-policy ARM template, do the following: ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:'This is "documenting a third-party UI" which we are not really supposed to do.'})})]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Sign in your ",(0,o.jsx)(t.a,{href:"https://portal.azure.com",children:"Azure portal"})," and select the ",(0,o.jsx)(t.strong,{children:"deploy a custom template"})," option."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.strong,{children:"Build your own template in the editor"})," and load the ",(0,o.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json",children:"role-policy"})," template."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["When the file contents appear in the editor, select ",(0,o.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["On the ",(0,o.jsx)(t.strong,{children:"Custom deployment"})," page, fill in the details in the following fields:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Subscription"}),": The Azure subscription that you want to use."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Region"}),": The geographic location where you can deploy your resources. Use the location that\u2019s closest to your working location."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Name"}),": The name for the role for use with the AI Unlimited instance."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.strong,{children:"Review + Create"}),", and then ",(0,o.jsx)(t.strong,{children:"Create"}),". The template proceeds to deploy a simple network in a few minutes."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["You can view the deployment status in ",(0,o.jsx)(t.strong,{children:"Notifications"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Output"})," tab shows the network names and ",(0,o.jsx)(t.code,{children:"RoleDefinitionId"}),". You'll need these when you install AI Unlimited."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(6540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);