"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7342],{46237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(74848),i=t(28453),s=t(56240),a=t(19365);const l={id:"setup-ai-unlimited",title:"Set up AI Unlimited",description:"Learn about the setup details.",sidebar_label:"Set up AI Unlimited",sidebar_position:3,pagination_prev:null,pagination_next:null},o="Set up AI Unlimited",c={id:"install-ai-unlimited/setup-ai-unlimited",title:"Set up AI Unlimited",description:"Learn about the setup details.",source:"@site/docs/install-ai-unlimited/setup-ai-unlimited.md",sourceDirName:"install-ai-unlimited",slug:"/install-ai-unlimited/setup-ai-unlimited",permalink:"/pr-preview/pr-117/de/ai-unlimited/install-ai-unlimited/setup-ai-unlimited",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"setup-ai-unlimited",title:"Set up AI Unlimited",description:"Learn about the setup details.",sidebar_label:"Set up AI Unlimited",sidebar_position:3,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},u={},d=[{value:"Complete the fields",id:"complete-the-fields",level:2},{value:"Before you leave",id:"before-you-leave",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"set-up-ai-unlimited",children:"Set up AI Unlimited"}),"\n",(0,r.jsxs)(n.p,{children:["After you install the ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/glossary#ai-unlimited-manager",children:"manager"}),", access the AI Unlimited setup using the URL you received at the end of the installation process: ",(0,r.jsx)(n.code,{children:"http://[ip_or_hostname]:[port]"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"By setting up AI Unlimited, you become the AI Unlimited admin at your organization."})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For setup help, email the ",(0,r.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"support team"})," or ask the ",(0,r.jsx)(n.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"community"}),"."]})}),"\n",(0,r.jsx)("a",{id:"setup-fields"}),"\n",(0,r.jsx)(n.h2,{id:"complete-the-fields",children:"Complete the fields"}),"\n",(0,r.jsx)(n.p,{children:"Find information about each group of fields here."}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Basic setup"}),(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"AI Unlimited base URL"}),"\u2014The URL you used to access the setup. You received it when you installed the manager."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Git provider"}),"\u2014GitHub or GitLab."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"AI Unlimited log level"}),"\u2014The level of detail to see in AI Unlimited logs."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Engine IP network type"})}),(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Private"})," if you deploy the engine in the same Virtual Private Cloud as AI Unlimited."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Public"})," or ",(0,r.jsx)(n.strong,{children:"Private"})," refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Use TLS"})}),(0,r.jsxs)(n.p,{children:["We recommend that you use ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/glossary#transport-layer-security",children:"Transport Layer Security (TLS)"})," to secure connections to AI Unlimited and safeguard your data in transit."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you are using an ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/glossary#application-load-balancer",children:"application load balancer (ALB)"}),", with certification termination enabled, select ",(0,r.jsx)(n.strong,{children:"False"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you are using a ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/glossary#network-load-balancer",children:"network load balancer (NLB)"})," or no load balancer, select ",(0,r.jsx)(n.strong,{children:"True."}),"\n.."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"AI Unlimited TLS certificate"})," and ",(0,r.jsx)(n.strong,{children:"AI Unlimited TLS certificate key"}),"\u2014If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Or select ",(0,r.jsx)(n.strong,{children:"Generate Certs"})," to use a Teradata system-generated certificate. It automatically renews before it expires."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Update"}),"."]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Cloud integration"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.p,{children:"Some of these fields are for default values. Later, when you deploy the engine from a Jupyter notebook, you can specify values, different from the defaults, for that deployment."}),(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(a.A,{value:"aws1",label:"AWS",children:[(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default region"}),"\u2014The AWS region in which to deploy the engine. We recommend choosing the region closest to your data lake."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default subnet"}),"\u2014The ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html",children:"AWS subnet"})," to which to deploy the engine. The AWS console shows the subnets in the region."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Default IAM role"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html",children:"IAM role"})," for the engine. Leave blank to let AI Unlimited create the role\u2014if your security allows this. Otherwise, create a role using this policy: ",(0,r.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json",children:"ai-unlimited-engine.json"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If AI Unlimited creates the role, it creates it for the AWS ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/glossary#cluster",children:"cluster"})," that deploys the engine\u2014each time you deploy the engine. If your organization creates the role, it must accommodate any cluster that might deploy the engine."]}),"\n"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Resource tags"}),"\u2014You can ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html",children:"tag"})," the AWS resources that deploy the engine to make them easier to manage."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Inbound security"})}),(0,r.jsx)(n.p,{children:"Use these fields to allow source traffic to reach the engine:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:["Default ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/glossary#classless-inter-domain-routing",children:"CIDRs"})]})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Default ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html",children:"security group"})," IDs"]}),"\u2014If you deploy the engine in the same Virtual Private Cloud as AI Unlimited, include the AI Unlimited security group in this field to ensure that AI Unlimited can communicate with the engine."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.strong,{children:["Default ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html",children:"prefix list"})," names"]})}),"\n"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Role prefix"}),"\u2014If AI Unlimited creates the role, this prefix is added to the role name."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",children:"Permissions boundary"})," ARN"]}),"\u2014If your IAM entities require a boundary, you can provide one here."]}),(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Update"}),"."]})]}),(0,r.jsxs)(a.A,{value:"azure",label:"Azure",children:[(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default region"}),"\u2014The Azure region in which to deploy the engine. We recommend choosing the region closest to your data lake."]}),(0,r.jsxs)(n.p,{children:["Learn more about ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices",children:"Azure virtual networks"}),"."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default network resource group"}),"\u2014The resource group that contains the network."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default network"}),"\u2014The network to which to deploy the engine."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default subnet"}),"\u2014The subnet to which to deploy the engine."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default key vault"}),"\u2014The key vault, used by the engine, in which sensitive information such as passwords can be securely stored."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default key vault resource group"}),"\u2014The resource group that contains the key vault."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Inbound security"})}),(0,r.jsx)(n.p,{children:"Use these fields to allow source traffic to reach the engine:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Default ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/glossary#classless-inter-domain-routing",children:"CIDRs"})]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Default ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups",children:"security group"})," names"]}),"\u2014 If you deploy the engine in the same Virtual Private Cloud as AI Unlimited, include the AI Unlimited application security group in this field to ensure that AI Unlimited can communicate with the engine."]}),"\n"]}),"\n"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Resource tags"}),"\u2014You can ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources",children:"tag"})," the Azure resources that deploy the engine to make them easier to manage."]}),(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Update"}),"."]})]})]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Git integration"}),(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(a.A,{value:"github",label:"GitHub",children:[(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitHub callback URL"}),"\u2014After authenticating a user, GitHub uses this URL to redirect to the manager. This was provided to the OAuth app ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/resources/create-oauth-app",children:"when it was created"}),"."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitHub base URL"}),"\u2014The URL for your GitHub instance."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitHub client ID"})," and ",(0,r.jsx)(n.strong,{children:"GitHub client secret"}),"\u2014The credentials received from GitHub when your ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/resources/create-oauth-app",children:"OAuth app was created"}),"."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Organization access"})}),(0,r.jsx)(n.p,{children:"Two organizations in your GitHub account can help with access control and repository management:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Members of the ",(0,r.jsx)(n.strong,{children:"Authorizing organization"})," are able to sign in and authenticate themselves in AI Unlimited. If you don't specify an organization, any GitHub account user can sign in and authenticate."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Project repositories are created in the ",(0,r.jsx)(n.strong,{children:"Repository organization"}),". If you don't specify an organization, projects will be in your personal GitHub space."]}),"\n"]}),"\n"]}),(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Update"}),"."]}),(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Sign In"}),". Then, sign in (if prompted), and authenticate yourself."]})]}),(0,r.jsxs)(a.A,{value:"gitlab",label:"GitLab",children:[(0,r.jsx)("br",{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitLab callback URL"}),"\u2014After authenticating a user, GitLab uses this URL to redirect to the manager. This was provided to the OAuth app ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/resources/create-oauth-app",children:"when it was created"}),"."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitLab base URL"}),"\u2014The URL for your GitLab instance."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GitLab client ID"})," and ",(0,r.jsx)(n.strong,{children:"GitLab client secret"}),"\u2014The credentials received from GitLab when your ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/resources/create-oauth-app",children:"OAuth app was created"}),"."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Group access"})}),(0,r.jsx)(n.p,{children:"Two groups in your GitLab account can help with access control and repository management:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Members of the ",(0,r.jsx)(n.strong,{children:"Authorizing group"})," are able to sign in and authenticate themselves in AI Unlimited. If you don't specify a group, any GitLab account user can sign in and authenticate."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["All project repositories are created in the ",(0,r.jsx)(n.strong,{children:"Repository group"}),". If you don't specify a group, projects will be in your personal GitLab space."]}),"\n"]}),"\n"]}),(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Update"}),"."]}),(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Sign In"}),". Then, sign in (if prompted), and authenticate yourself."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"before-you-leave",children:"Before you leave"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On your ",(0,r.jsx)(n.strong,{children:"Profile"}),", copy your API key.\nYou'll use it when you connect to the engine from a Jupyter notebook."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you enabled TLS, select ",(0,r.jsx)(n.strong,{children:"Restart"}),". This restarts the AI Unlimited service with TLS in place."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Congratulations! AI Unlimited setup is now complete."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Because you are the AI Unlimited admin, you can return to the setup anytime to ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/manage-ai-unlimited/change-settings",children:"change any settings"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsxs)(n.p,{children:["In a Jupyter notebook, start ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-117/de/ai-unlimited/explore-and-analyze-data/",children:"exploring and analyzing data"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){var n=e.children,t=e.hidden,a=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},56240:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),i=t(34164),s=t(23104),a=t(56347),l=t(205),o=t(57485);var c=t(89466);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n,t,r=(void 0===(t=function(e,n){return e.value===n.value})&&(t=function(e,n){return e===n}),(n=e).filter((function(e,r){return n.findIndex((function(n){return t(n,e)}))!==r})));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,s=(0,a.W6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:i});return[(0,o.aZ)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function m(e){var n,t,i,s,a=e.defaultValue,o=e.queryString,u=void 0!==o&&o,m=e.groupId,g=d(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:g})})),x=f[0],j=f[1],b=p({queryString:u,groupId:m}),y=b[0],v=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),t=(0,c.Dv)(n),i=t[0],s=t[1],[i,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),I=w[0],A=w[1],U=function(){var e=null!=y?y:I;return h({value:e,tabValues:g})?e:null}();return(0,l.A)((function(){U&&j(U)}),[U]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);j(e),v(e),A(e)}),[v,A,g]),tabValues:g}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){var n=e.className,t=e.block,r=e.selectedValue,a=e.selectValue,l=e.tabValues,o=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(c(n),a(i))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,i=o.indexOf(e.currentTarget)+1;t=null!=(r=o[i])?r:o[0];break;case"ArrowLeft":var s,a=o.indexOf(e.currentTarget)-1;t=null!=(s=o[a])?s:o[o.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,i.A)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,i=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=s.find((function(e){return e.props.value===i}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function y(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,Object.assign({},e,n)),(0,x.jsx)(b,Object.assign({},e,n))]})}function v(e){var n=(0,g.A)();return(0,x.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);