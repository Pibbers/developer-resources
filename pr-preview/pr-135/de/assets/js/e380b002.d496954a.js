"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1763],{67734:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(74848),a=i(28453);const r={id:"create-oauth-app",title:"Create an OAuth app",description:"It will allow AI Unlimited to use your Git provider's authentication to manage project repositories.",sidebar_label:"Create an OAuth app",sidebar_position:4,pagination_prev:null,pagination_next:null},o="Create a GitHub or GitLab OAuth app",s={id:"resources/create-oauth-app",title:"Create an OAuth app",description:"It will allow AI Unlimited to use your Git provider's authentication to manage project repositories.",source:"@site/docs/resources/create-oauth-app.md",sourceDirName:"resources",slug:"/resources/create-oauth-app",permalink:"/pr-preview/pr-135/de/ai-unlimited/resources/create-oauth-app",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"create-oauth-app",title:"Create an OAuth app",description:"It will allow AI Unlimited to use your Git provider's authentication to manage project repositories.",sidebar_label:"Create an OAuth app",sidebar_position:4,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},p={},l=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-a-github-or-gitlab-oauth-app",children:"Create a GitHub or GitLab OAuth app"}),"\n",(0,n.jsx)(t.p,{children:"An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password."}),"\n",(0,n.jsxs)(t.p,{children:["Create an ",(0,n.jsx)(t.a,{href:"https://oauth.net/2/",children:"OAuth"})," app so that AI Unlimited can use GitHub or GitLab authentication to manage each ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-135/de/ai-unlimited/glossary#project-repository",children:"project repository"})," and, each time the engine is deployed, derive the engine users from the collaborators you have added to the repository."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Sign in to your GitHub or GitLab account."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create an OAuth app. See ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app",children:"GitHub: Create an OAuth app"})," or ",(0,n.jsx)(t.a,{href:"https://docs.gitlab.com/ee/integration/oauth_provider.html",children:"GitLab: Create an OAuth app"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"While registering the OAuth app, use these URLs."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Homepage URL: ",(0,n.jsx)(t.code,{children:"http://[ip_or_hostname]:[port]"}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This is the manager URL that you received at the end of the installation process."})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Authorization callback URL: ",(0,n.jsx)(t.code,{children:"[Homepage URL]/auth/github/callback"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For GitLab, select the appropriate OAuth ",(0,n.jsx)(t.strong,{children:"Scopes"})," as defined in ",(0,n.jsx)(t.a,{href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications",children:"Authorized Applications"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Copy and keep the ",(0,n.jsx)(t.strong,{children:"Client ID"})," and ",(0,n.jsx)(t.strong,{children:"Client secret"}),", which you'll need to set up AI Unlimited."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Now you're ready to ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-135/de/ai-unlimited/install-ai-unlimited/setup-ai-unlimited",children:"set up AI Unlimited"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var n=i(96540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);