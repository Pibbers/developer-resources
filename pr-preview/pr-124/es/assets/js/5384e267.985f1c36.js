"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3007],{41269:(e,t,n)=>{n.d(t,{Ay:()=>o,RM:()=>r});var a=n(74848),s=n(28453);const r=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},62680:(e,t,n)=>{n.d(t,{Ay:()=>o,RM:()=>r});var a=n(74848),s=n(28453);const r=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},33332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(74848),s=n(28453),r=n(62680),i=n(41269);const o={sidebar_position:3,id:"mule-dbc-example",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"August 30, 2023",description:"Query Teradata Vantage from a Mule service.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","Mule","JDBC","microservices"]},c="Query Teradata Vantage from a Mule service",l={id:"create-applications/mule-dbc-example",title:"Query Teradata Vantage from a Mule service",description:"Query Teradata Vantage from a Mule service.",source:"@site/quickstarts/create-applications/mule-dbc-example.md",sourceDirName:"create-applications",slug:"/create-applications/mule-dbc-example",permalink:"/pr-preview/pr-124/es/quickstarts/create-applications/mule-dbc-example",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"mule-dbc-example",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"August 30, 2023",description:"Query Teradata Vantage from a Mule service.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","Mule","JDBC","microservices"]},sidebar:"tutorialSidebar",previous:{title:"Connect to Vantage using Python",permalink:"/pr-preview/pr-124/es/quickstarts/create-applications/teradatasql"},next:{title:"Send queries using REST API",permalink:"/pr-preview/pr-124/es/quickstarts/create-applications/send-queries-using-rest-api"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...r.RM,{value:"Example service",id:"example-service",level:2},{value:"Setup",id:"setup",level:2},{value:"Run",id:"run",level:2},{value:"Further reading",id:"further-reading",level:2},...i.RM];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"query-teradata-vantage-from-a-mule-service",children:"Query Teradata Vantage from a Mule service"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"This example is a clone of the Mulesoft MySQL sample project.\nIt demonstrates how to query a Teradata database and expose results over REST API."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Mulesoft Anypoint Studio. You can download a 30-day trial from ",(0,a.jsx)(t.a,{href:"https://www.mulesoft.com/platform/studio",children:"https://www.mulesoft.com/platform/studio"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Access to a Teradata Vantage instance."}),"\n"]}),"\n",(0,a.jsx)(r.Ay,{}),"\n",(0,a.jsx)(t.h2,{id:"example-service",children:"Example service"}),"\n",(0,a.jsx)(t.p,{children:"This example Mule service takes an HTTP request, queries the Teradata Vantage database and returns results in JSON format."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"service flow",src:n(11066).A+"",width:"764",height:"530"})}),"\n",(0,a.jsxs)(t.p,{children:["The Mule HTTP connector listens for HTTP GET requests with the form: ",(0,a.jsx)(t.code,{children:"http://<host>:8081/?lastname=<parameter>"}),".\nThe HTTP connector passes the value of ",(0,a.jsx)(t.code,{children:"<parameter>"})," as one of the message properties to a database connector.\nThe database connector is configured to extract this value and use it in this SQL query:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM hr.employees WHERE LastName = :lastName\n"})}),"\n",(0,a.jsxs)(t.p,{children:["As you can see, we are using parameterized query with reference to the value of the parameter passed to the HTTP connector.\nSo if the HTTP connector receives ",(0,a.jsx)(t.a,{href:"http://localhost:8081/?lastname=Smith",children:"http://localhost:8081/?lastname=Smith"}),", the SQL query will be:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM employees WHERE last_name = Smith\n"})}),"\n",(0,a.jsx)(t.p,{children:"The database connector instructs the database server to run the SQL query, retrieves the result of the query, and passes it to the Transform message processor which converts the result to JSON.\nSince the HTTP connector is configured as request-response, the result is returned to the originating HTTP client."}),"\n",(0,a.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Clone ",(0,a.jsx)(t.code,{children:"Teradata/mule-jdbc-example"})," repository:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"  git clone https://github.com/Teradata/mule-jdbc-example\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Edit ",(0,a.jsx)(t.code,{children:"src/main/mule/querying-a-teradata-database.xml"}),", find the Teradata connection string ",(0,a.jsx)(t.code,{children:"jdbc:teradata://<HOST>/user=<username>,password=<password>"})," and replace Teradata connection parameters to match your environment."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Should your Vantage instance be accessible via ClearScape Analytics Experience, you must replace ",(0,a.jsx)(t.code,{children:"<HOST>"})," with the host URL of your ClearScape Analytics Experience environment. Additionally, the 'user' and 'password' should be updated to reflect your ClearScape Analytics Environment's username and password."]})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Create a sample database in your Vantage instance.\nPopulate it with sample data."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:" -- create database\n CREATE DATABASE HR\n   AS PERMANENT = 60e6, SPOOL = 120e6;\n\n -- create table\n CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n )\n UNIQUE PRIMARY INDEX ( GlobalID );\n\n -- insert a record\n INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n ) VALUES (\n   101,\n   'Test',\n   'Testowsky',\n   '1980-01-05',\n   '2004-08-01',\n   01\n );\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Open the project in Anypoint Studio."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Once in Anypoint Studio, click on ",(0,a.jsx)(t.code,{children:"Import projects.."}),":"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Anypoint import projects menu",src:n(23569).A+"",width:"692",height:"654"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Select ",(0,a.jsx)(t.code,{children:"Anypoint Studio project from File System"}),":"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Anypoint import option",src:n(72820).A+"",width:"1182",height:"1104"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Use the directory where you cloned the git repository as the ",(0,a.jsx)(t.code,{children:"Project Root"}),". Leave all other settings at their default values."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"run",children:"Run"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Run the example application in Anypoint Studio using the ",(0,a.jsx)(t.code,{children:"Run"})," menu.\nThe project will now build and run. It will take a minute."]}),"\n",(0,a.jsxs)(t.li,{children:["Go to your web browser and send the following request: ",(0,a.jsx)(t.a,{href:"http://localhost:8081/?lastname=Testowsky",children:"http://localhost:8081/?lastname=Testowsky"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You should get the following JSON response:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "JoinedDate": "2004-08-01T00:00:00",\n    "DateOfBirth": "1980-01-05T00:00:00",\n    "FirstName": "Test",\n    "GlobalID": 101,\n    "DepartmentCode": 1,\n    "LastName": "Testowsky"\n  }\n]\n'})}),"\n",(0,a.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["View this ",(0,a.jsx)(t.a,{href:"http://www.mulesoft.org/documentation/display/current/Database+Connector",children:"document"})," for more information on how to configure a database connector on your machine."]}),"\n",(0,a.jsxs)(t.li,{children:["Access plain ",(0,a.jsx)(t.a,{href:"http://www.mulesoft.org/documentation/display/current/Database+Connector+Reference",children:"Reference material"})," for the Database Connector."]}),"\n",(0,a.jsxs)(t.li,{children:["Learn more about ",(0,a.jsx)(t.a,{href:"http://www.mulesoft.org/documentation/display/current/DataSense",children:"DataSense"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.Ay,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},23569:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/anypoint.import.projects-d8636ae9c4ac4e243e51f3871a1fea5d.png"},11066:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/flow-edb780dd627d759fb3225b74aa9efeca.png"},72820:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/select.import.option-72005c33854675c998cd404295554541.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);