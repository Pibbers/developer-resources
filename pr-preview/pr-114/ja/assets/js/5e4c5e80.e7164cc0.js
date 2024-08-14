"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[148],{41269:(a,e,t)=>{t.d(e,{Ay:()=>i,RM:()=>s});var n=t(74848),o=t(28453);const s=[];function r(a){const e={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...a.components};return(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)(e.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(e.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function i(a={}){const{wrapper:e}={...(0,o.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(r,{...a})}):r(a)}},56281:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=t(74848),o=t(28453),s=t(41269);const r={id:"install-teradata-studio-on-mac-m1-m2",sidebar_position:1,author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"August 14th, 2023",description:"Run Teradata Studio on Apple Mac M1/M2.",keywords:["Teradata Studio","Teradata Studio Express","teradata","vantage","Mac","Apple Mac","Apple Mac M1","Apple Mac M2","Arm based Processor."]},i="Use Teradata Studio/Express on Apple Mac M1/M2",d={id:"connect-to-vantage/install-teradata-studio-on-mac-m1-m2",title:"Use Teradata Studio/Express on Apple Mac M1/M2",description:"Run Teradata Studio on Apple Mac M1/M2.",source:"@site/quickstarts/connect-to-vantage/install-teradata-studio-on-mac-m1-m2.md",sourceDirName:"connect-to-vantage",slug:"/connect-to-vantage/install-teradata-studio-on-mac-m1-m2",permalink:"/pr-preview/pr-114/ja/quickstarts/connect-to-vantage/install-teradata-studio-on-mac-m1-m2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"install-teradata-studio-on-mac-m1-m2",sidebar_position:1,author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"August 14th, 2023",description:"Run Teradata Studio on Apple Mac M1/M2.",keywords:["Teradata Studio","Teradata Studio Express","teradata","vantage","Mac","Apple Mac","Apple Mac M1","Apple Mac M2","Arm based Processor."]},sidebar:"tutorialSidebar",previous:{title:"Getting started with ClearScape Analytics Experience",permalink:"/pr-preview/pr-114/ja/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae"},next:{title:"Configure a Teradata Vantage connection in DBeaver",permalink:"/pr-preview/pr-114/ja/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Steps to follow",id:"steps-to-follow",level:2},{value:"Summary",id:"summary",level:2},...s.RM];function p(a){const e={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"use-teradata-studioexpress-on-apple-mac-m1m2",children:"Use Teradata Studio/Express on Apple Mac M1/M2"}),"\n",(0,n.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(e.p,{children:"This how-to goes through the installation of Teradata Studio and Teradata Studio Express on Apple Mac M1/M2 machines."}),"\n",(0,n.jsx)(e.h2,{id:"steps-to-follow",children:"Steps to follow"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Install and enable Rosetta binary translator. Follow ",(0,n.jsx)(e.a,{href:"https://support.apple.com/en-us/HT211861",children:"the Apple Mac Rosetta Installation Guide"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Download and Install a x86 64-bit based JDK 11 from your preferred vendor. For example, you can download x86 64-bit JDK 11 from ",(0,n.jsx)(e.a,{href:"https://www.azul.com/downloads/?version=java-11-lts&os=macos&architecture=x86-64-bit&package=jdkGet",children:"Azul"})]}),"\n",(0,n.jsx)(e.li,{children:"Download the latest Teradata Studio or Teradata Studio Express release from the Teradata Downloads page:"}),"\n"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://downloads.teradata.com/download/tools/teradata-studio",children:"Teradata Studio"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://downloads.teradata.com/download/tools/teradata-studio-express",children:"Teradata Studio Express"})}),"\n"]}),"\n",(0,n.jsxs)(e.ol,{start:"4",children:["\n",(0,n.jsxs)(e.li,{children:["Install the Teradata Studio/Teradata Studio Express. Refer to ",(0,n.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(38634).A+"",children:"Teradata Studio and Teradata Studio Express Installation Guide"})," for details."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(e.p,{children:"Apple has introduced ARM-based processors in Apple MAC M1/M2 machines. Intel x64-based applications won't work by default on ARM-based processors. Teradata Studio or Teradata Studio Express also doesn't work by default as the current Studio macOS build is an intel x64-based application. This how-to demonstrates how to install Intel x64-based JDK and Teradata Studio or Teradata Studio Express on Apple Mac M1/M2."}),"\n",(0,n.jsx)(s.Ay,{})]})}function u(a={}){const{wrapper:e}={...(0,o.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(p,{...a})}):p(a)}},38634:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/files/Studio-Express-InstallGuide-d0d2a912c8e3f129dd8908cff082aa9d.pdf"},28453:(a,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function r(a){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function i(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(o):a.components||o:r(a.components),n.createElement(s.Provider,{value:e},a.children)}}}]);