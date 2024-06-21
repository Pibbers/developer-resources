"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1158],{41269:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>i});var a=n(74848),r=n(28453);const i=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},62680:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>i});var a=n(74848),r=n(28453);const i=[];function o(e){const t={a:"a",admonition:"admonition",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"test",src:n(13397).A+"",width:"717",height:"489"})})]})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},27952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(74848),r=n(28453),i=(n(62680),n(41269));const o={id:"ubuntu",sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"January 5th, 2022",description:"Use Vantage with ODBC on Ubuntu",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","odbc","ubuntu"]},s="Use Vantage with ODBC on Ubuntu",c={id:"connect-to-vantage/configure-odbc/ubuntu",title:"Use Vantage with ODBC on Ubuntu",description:"Use Vantage with ODBC on Ubuntu",source:"@site/quickstarts/connect-to-vantage/configure-odbc/odbc.ubuntu.md",sourceDirName:"connect-to-vantage/configure-odbc",slug:"/connect-to-vantage/configure-odbc/ubuntu",permalink:"/developers/pr-preview/pr-20/quickstarts/connect-to-vantage/configure-odbc/ubuntu",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ubuntu",sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"January 5th, 2022",description:"Use Vantage with ODBC on Ubuntu",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","odbc","ubuntu"]},sidebar:"tutorialSidebar",previous:{title:"Configure a Teradata Vantage connection in DBeaver",permalink:"/developers/pr-preview/pr-20/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver"},next:{title:"Query data stored in object storage",permalink:"/developers/pr-preview/pr-20/quickstarts/manage-data/nos"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Use ODBC",id:"use-odbc",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...i.RM];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-vantage-with-odbc-on-ubuntu",children:"Use Vantage with ODBC on Ubuntu"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"This how-to demonstrates how to use the ODBC driver with Teradata Vantage on Ubuntu."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Access to a Teradata Vantage instance."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget unixodbc unixodbc-dev iodbc python3-pip\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Install Teradata ODBC driver for Ubuntu:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"wget https://downloads.teradata.com/download/cdn/connectivity/odbc/17.10.x.x/tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \\\n    && tar -xzf tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \\\n    && dpkg -i tdodbc1710/tdodbc1710-17.10.00.14-1.x86_64.deb\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Configure ODBC, by creating file ",(0,a.jsx)(t.code,{children:"/etc/odbcinst.ini"})," with the following content:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"[ODBC Drivers]\nTeradata Database ODBC Driver 17.10=Installed\n\n[Teradata Database ODBC Driver 17.10]\nDescription=Teradata Database ODBC Driver 17.10\nDriver=/opt/teradata/client/17.10/odbc_64/lib/tdataodbc_sb64.so\n"})}),"\n",(0,a.jsx)(t.h2,{id:"use-odbc",children:"Use ODBC"}),"\n",(0,a.jsxs)(t.p,{children:["We will validate the installation with a sample Python application. Create ",(0,a.jsx)(t.code,{children:"test.py"})," file with the following content.\nReplace ",(0,a.jsx)(t.code,{children:"DBCName=192.168.86.33;UID=dbc;PWD=dbc"})," with the IP address of your Teradata Vantage instance, username and password:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"import pyodbc\n\nprint(pyodbc.drivers())\n\ncnxn = pyodbc.connect('DRIVER={Teradata Database ODBC Driver 17.10};DBCName=192.168.86.33;UID=dbc;PWD=dbc;')\ncursor = cnxn.cursor()\n\ncursor.execute(\"SELECT CURRENT_DATE\")\nfor row in cursor.fetchall():\n    print(row)\nEOF\n"})}),"\n",(0,a.jsx)(t.p,{children:"Run the test application:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"python3 test.py\n"})}),"\n",(0,a.jsx)(t.p,{children:"You should get output similar to:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"['ODBC Drivers', 'Teradata Database ODBC Driver 17.10']\n(datetime.date(2022, 1, 5), )\n"})}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"This how-to demonstrated how to use ODBC with Teradata Vantage on Ubuntu. The how-to shows how to install the ODBC Teradata driver and the dependencies. It then shows how to configure ODBC and validate connectivity with a simple Python application."}),"\n",(0,a.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.teradata.com/search/all?query=ODBC+Driver+for+Teradata+User+Guide&filters=ft%3AisBook~%22true%22&sort=last_update",children:"ODBC Driver for Teradata\xae User Guide"})}),"\n"]}),"\n",(0,a.jsx)(i.Ay,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},13397:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/boot-manager-menu-5cf7ff77a35dfcda853cb0b6c226fe9f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);