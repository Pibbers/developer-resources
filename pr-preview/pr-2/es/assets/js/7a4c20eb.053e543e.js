"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3055],{6924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var i=n(4848),r=n(8453),s=n(6240),a=n(9365);const o={id:"test-quickstart-setup",title:"QuickStart - Setup",description:"Get more information about certain fields in the setup.",sidebar_label:"Test-Set up AI Unlimited",sidebar_position:5},l="Set up AI Unlimited",u={id:"temp-folder/quickstart_a/test-quickstart-setup",title:"QuickStart - Setup",description:"Get more information about certain fields in the setup.",source:"@site/docs/temp-folder/quickstart_a/docker-setup-a.md",sourceDirName:"temp-folder/quickstart_a",slug:"/temp-folder/quickstart_a/test-quickstart-setup",permalink:"/ai-unlimited-docs/es/docs/temp-folder/quickstart_a/test-quickstart-setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"test-quickstart-setup",title:"QuickStart - Setup",description:"Get more information about certain fields in the setup.",sidebar_label:"Test-Set up AI Unlimited",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Azure CLI",permalink:"/ai-unlimited-docs/es/docs/temp-folder/install-jupyter-cli/azure-cli-deploy-jupyter"}},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"set-up-ai-unlimited",children:"Set up AI Unlimited"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Before you start, make sure you have all the necessary details to update the cloud integration section. You must have the minimum configuration values, including ",(0,i.jsx)(t.strong,{children:"Default region"}),", ",(0,i.jsx)(t.strong,{children:"Default subnet"}),", and ",(0,i.jsx)(t.strong,{children:"Default security groups"}),". If you are unsure, Teradata recommends reaching out to your cloud administrator for guidance."]})}),"\n",(0,i.jsx)(t.p,{children:"Access AI Unlimited setup:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"})})," (if you are using the ",(0,i.jsx)(t.a,{href:"/docs/install-ai-unlimited/quickstart/index.md",children:"QuickStart"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"http://[ip_or_hostname]:[port]"})," (for a ",(0,i.jsx)(t.a,{href:"/docs/install-ai-unlimited/production/index.md",children:"full"})," installation)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Are you an AI Unlimited user or administrator? Choose your path: ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:'This topic (which will be for both the QS and the full install) is meant only for the user doing the installation. For the QuickStart, that user is also a general user. For the full installation, that is less likely to be the case. But either way, it\'s in the installation flow--so should not descibe the other uses. There will be other topics for an admin to change settings under "manage" in the TOC, and for a general user to get their API key (under "explore and analyze data" in the TOC.'})})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If you're an AI Unlimited user, AI Unlimited is set up and ready to use. Authorize using your Git provider credentials. This authorizes the AI Unlimited to authenticate the user and access your Git repo. Copy the API Key [Glossary] from your ",(0,i.jsx)(t.strong,{children:"Profile"})," page and then proceed to ",(0,i.jsx)(t.a,{href:"/ai-unlimited-docs/es/docs/explore-and-analyze-data/example-projects",children:"running your first workload"})," on AI Unlimited."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If you're an AI Unlimited administrator, complete the setup. To learn more about specific fields, click a section below."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If you're a returning AI Unlimited administrator looking to modify the setup information, authorize using your GitHub credentials and select ",(0,i.jsx)(t.strong,{children:"SETUP"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Step 1: The basics"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Service base URL"}),": The root URL of the service. This value determines the URL you\u2019ll be redirected to after successful Git authorization and varies depending on the type of installation."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"QuickStart:"}),"\n",(0,i.jsx)(t.li,{children:"Demo or Full install:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Git provider"}),": The Git provider used to store project details."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Service log levels"}),": Defines the level of detail recorded in the log files. The default is ",(0,i.jsx)(t.strong,{children:"Info"}),"; however, Teradata recommends selecting ",(0,i.jsx)(t.strong,{children:"Debug"}),". This option captures fine-grained informational events that could help you debug errors."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Engine IP network type"}),": The type of network assigned to an engine instance that would allow AI Unlimited to communicate with the engine. Select ",(0,i.jsx)(t.strong,{children:"Private"})," if you're deploying the engine in the same VPC as AI Unlimited. Select ",(0,i.jsx)(t.strong,{children:"Public"})," if AI Unlimited is running on a local container."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Use TLS"}),": Indicates if ",(0,i.jsx)(t.a,{href:"/ai-unlimited-docs/es/docs/glossary#glo-tls",children:"Transport Layer Security (TLS)"})," support is enabled to secure communication to AI Unlimited. If you use a self-hosted AI Unlimited instance without a load balancer, Teradata recommends setting this option to ",(0,i.jsx)(t.strong,{children:"True"})," and uploading or generating TLS certificates. For enterprise users employing a load balancer, set this option to ",(0,i.jsx)(t.strong,{children:"False"}),", as the load balancer manages TLS certificates."]}),"\n",(0,i.jsxs)(t.p,{children:["If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option. You can also select ",(0,i.jsx)(t.strong,{children:"GENERATE TLS"})," to use a Teradata system-generated certificate. It automatically renews before it expires."]}),"\n"]}),"\n"]}),(0,i.jsxs)(t.p,{children:["After you've filled in all the details, select ",(0,i.jsx)(t.strong,{children:"Update"}),"."]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Step 2: Cloud integration"}),(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"You can modify these parameters directly from the Jupyter notebook while connecting to the AI Unlimited engine."})}),(0,i.jsxs)(s.A,{children:[(0,i.jsxs)(a.A,{value:"aws1",label:"AWS",children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default region"}),": The region where you want to deploy the engine. Teradata recommends choosing the region closest to your primary work location."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default subnet"}),": The subnet that provides the engine instance with a route to an internet gateway. If you don't specify a subnet, the engine is automatically associated with the default subnet."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default IAM role"}),": The default IAM identity that provides the required permissions to deploy the engine instance. When a default IAM role is assigned to a user or resource, the user or resource automatically assumes the role and gains the permissions granted to the role. If AI Unlimited creates the ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html",children:"IAM role"}),", it creates it for the AWS ",(0,i.jsx)(t.a,{href:"/ai-unlimited-docs/es/docs/glossary#glo-cluster",children:"cluster"})," that deploys the engine\u2014each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Resource tags"}),": The key-value pair applied to a resource to hold metadata about that resource. With a resource tag, you can quickly identify, organize, and manage the AI Unlimited resources you use in your environment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default CIDRs"}),": The list of Classless Inter-Domain Routing (CIDR) network addresses that can be allocated to the engine. Use CIDR to allocate IP addresses flexibly and efficiently in your network. If you don't specify a CIDR, the engine is automatically associated with the default CIDR."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default security groups"}),": The list of security groups for the VPC in each region. Security group is a virtual firewall that contains rules to monitor and filter the incoming and outgoing traffic for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC. If you're deploying AI Unlimited using the CloudFormation template or ARM template, make sure the default security group is the same as the one in the template to ensure AI Unlimited can communicate with the AI Unlimited engine."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Role Prefix"}),": The string of characters prepended to the name of a role. You can use a role prefix to organize and manage roles and to enforce naming conventions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Permission Boundary"}),": The maximum permissions an IAM entity can have regardless of the permissions defined in the identity-based policy. You can define and manage the user permissions and roles and enforce compliance requirements."]}),"\n"]}),(0,i.jsxs)(t.p,{children:["After you've filled-in all the details, select ",(0,i.jsx)(t.strong,{children:"Update"}),"."]})]}),(0,i.jsxs)(a.A,{value:"azure",label:"Azure",children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default region"}),": A single Azure environment corresponds to a single VNet located in a specific region, and all the resources deployed by AI Unlimited on Azure are deployed into that VNet. Teradata recommends selecting a region closest to your primary work location or the region where your data is located."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default CIDRs"}),": The address range to define the range of private IPs for VM instances provisioned into the subnets. The CIDR range must be between /16 and /24. The default is 10.0.0.0/16, however you can modify the value based on your organizational policy."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default security group"}),": Controls inbound and outbound traffic to and from Azure resources within a specified network. Use this field to allow users from your organization access to the resources."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Resource tags"}),": The key-value pair that helps you identify resources based on settings that are relevant to your organization. Use the ai-unlimited tag to quickly identify, organize, and manage the resources you use in your environment."]}),"\n"]}),(0,i.jsxs)(t.p,{children:["After you've filled in all the details, select ",(0,i.jsx)(t.strong,{children:"Update"}),"."]})]})]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Step 3: Git integration"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Application URL"}),": The default URL of your Git provider account. If you're using an Enterprise account, Teradata recommends updating this value to match your hosted private URL by modifying the ",(0,i.jsx)(t.strong,{children:"Base URL"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Callback URL"}),": The URL to redirect to after you authorize using the Git provider."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Base URL"}),": The base URL of your Git provider account. The URL may vary based on your account type. For example, ",(0,i.jsx)(t.a,{href:"https://github.company.com/",children:"https://github.company.com/"})," for a GitHub Enterprise account. To change the ",(0,i.jsx)(t.strong,{children:"Application URL"}),", update this value."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Client ID"}),": The Client ID you received from the Git provider on creating your OAuth App."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Client Secret"}),": The Client secret ID you received from the Git provider on creating your OAuth App."]}),"\n"]}),"\n"]}),(0,i.jsx)(t.p,{children:"** Configure GitHub Organization Access**"}),(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"github",label:"GitHub",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Authorizing Organization"}),": Restricts AI Unlimited access to users belonging to a specific organization on GitHub. If left blank, any user with a GitHub account can authorize and access AI Unlimited."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Repository Organization"}),": Create projects within the repository. If left blank, your projects are located in your personal GitHub space. Teradata recommends specifying this value to collaborate and centralize projects within a specific group."]}),"\n"]}),"\n"]})}),(0,i.jsx)(a.A,{value:"gitlab",label:"GitLab",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Authorizing Group ID"}),": The unique identifier assigned to a group within GitLab that has the authorization to access AI Unlimited."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Repository Group ID"}),": The unique identifier assigned to the repository where the AI Unlimited projects are to be stored. Use this field to organize repositories into logical groups, allowing for easier management and access control."]}),"\n"]}),"\n"]})})]}),(0,i.jsxs)(t.p,{children:["Select ",(0,i.jsx)(t.strong,{children:"Update"})," and then ",(0,i.jsx)(t.strong,{children:"Login"}),"."]})]}),"\n",(0,i.jsxs)(t.p,{children:["If you're an AI Unlimited administrator, go to the ",(0,i.jsx)(t.strong,{children:"Profile"})," page to copy your API Key. If you've enabled TLS, select ",(0,i.jsx)(t.strong,{children:"Restart"})," to restart the service and apply the changes."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var i=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){var t=e.children,n=e.hidden,a=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},6240:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(6540),r=n(4164),s=n(3104),a=n(6347),o=n(205),l=n(7485);var u=n(9466);function c(e){var t,n;return null!=(t=null==(n=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:function(e){return c(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t,n,i=(void 0===(n=function(e,t){return e.value===t.value})&&(n=function(e,t){return e===t}),(t=e).filter((function(e,i){return t.findIndex((function(t){return n(t,e)}))!==i})));if(i.length>0)throw new Error('Docusaurus error: Duplicate values "'+i.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,a.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,i.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function f(e){var t,n,r,s,a=e.defaultValue,l=e.queryString,c=void 0!==l&&l,f=e.groupId,g=d(e),m=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=i.find((function(e){return e.default})))?t:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:g})})),y=m[0],x=m[1],j=p({queryString:c,groupId:f}),b=j[0],v=j[1],I=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),n=(0,u.Dv)(t),r=n[0],s=n[1],[r,(0,i.useCallback)((function(e){t&&s.set(e)}),[t,s])]),A=I[0],w=I[1],T=function(){var e=null!=b?b:A;return h({value:e,tabValues:g})?e:null}();return(0,o.A)((function(){T&&x(T)}),[T]),{selectedValue:y,selectValue:(0,i.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),v(e),w(e)}),[v,w,g]),tabValues:g}}var g=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function x(e){var t=e.className,n=e.block,i=e.selectedValue,a=e.selectValue,o=e.tabValues,l=[],u=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(u(t),a(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var i,r=l.indexOf(e.currentTarget)+1;n=null!=(i=l[r])?i:l[0];break;case"ArrowLeft":var s,a=l.indexOf(e.currentTarget)-1;n=null!=(s=l[a])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,r.A)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=s.find((function(e){return e.props.value===r}));return a?(0,i.cloneElement)(a,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function b(e){var t=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,y.jsx)(x,Object.assign({},e,t)),(0,y.jsx)(j,Object.assign({},e,t))]})}function v(e){var t=(0,g.A)();return(0,y.jsx)(b,Object.assign({},e,{children:c(e.children)}),String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);