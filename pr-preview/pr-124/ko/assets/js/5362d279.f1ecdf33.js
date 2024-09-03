"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6645],{41269:(e,n,s)=>{s.d(n,{Ay:()=>o,RM:()=>a});var r=s(74848),t=s(28453);const a=[];function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,r.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},62680:(e,n,s)=>{s.d(n,{Ay:()=>o,RM:()=>a});var r=s(74848),t=s(28453);const a=[];function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,r.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},13388:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=s(74848),t=s(28453),a=s(62680),i=s(41269);const o={sidebar_position:4,author:"Sudha Vedula",email:"sudha.vedula@teradata.com",page_last_update:"May 29th, 2023",description:"Send queries using REST API. Teradata\xae Query Service is a middleware that provides REST APIs for Vantage.",keywords:["query service","teradata","vantage","query","REST API"]},d="Send queries using REST API",l={id:"create-applications/send-queries-using-rest-api",title:"Send queries using REST API",description:"Send queries using REST API. Teradata\xae Query Service is a middleware that provides REST APIs for Vantage.",source:"@site/quickstarts/create-applications/send-queries-using-rest-api.md",sourceDirName:"create-applications",slug:"/create-applications/send-queries-using-rest-api",permalink:"/pr-preview/pr-124/ko/quickstarts/create-applications/send-queries-using-rest-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,author:"Sudha Vedula",email:"sudha.vedula@teradata.com",page_last_update:"May 29th, 2023",description:"Send queries using REST API. Teradata\xae Query Service is a middleware that provides REST APIs for Vantage.",keywords:["query service","teradata","vantage","query","REST API"]},sidebar:"tutorialSidebar",previous:{title:"Query Teradata Vantage from a Mule service",permalink:"/pr-preview/pr-124/ko/quickstarts/create-applications/mule-dbc-example"},next:{title:"Use Vantage from a Jupyter notebook",permalink:"/pr-preview/pr-124/ko/quickstarts/analyze-data/jupyter"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...a.RM,{value:"Query Service API examples",id:"query-service-api-examples",level:2},{value:"Connect to your Query Service instance",id:"connect-to-your-query-service-instance",level:2},{value:"HTTP Basic authentication",id:"http-basic-authentication",level:3},{value:"JWT authentication",id:"jwt-authentication",level:3},{value:"Make a simple API request with basic options",id:"make-a-simple-api-request-with-basic-options",level:2},{value:"Request a response in CSV format",id:"request-a-response-in-csv-format",level:3},{value:"Use explicit session to submit a query",id:"use-explicit-session-to-submit-a-query",level:2},{value:"Use asynchronous queries",id:"use-asynchronous-queries",level:2},{value:"Get a list of active or queued queries",id:"get-a-list-of-active-or-queued-queries",level:2},{value:"Resources",id:"resources",level:2},...i.RM];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"send-queries-using-rest-api",children:"Send queries using REST API"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Teradata Query Service is a REST API for Vantage that you can use to run standard SQL statements without managing client-side drivers. Use Query Service if you are looking to query and access the Analytics Database through a REST API."}),"\n",(0,r.jsx)(n.p,{children:"This how-to provides examples of common use cases to help you get started with Query Service API."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before starting, make sure you have:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Access to a VantageCloud system where Query Service is provisioned, or a VantageCore with Query Service enabled connectivity. If you are an admin and need to install Query Service, see ",(0,r.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022",children:"Query Service Installation, Configuration, and Usage Guide"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.Ay,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Query Service hostname and system name"}),"\n",(0,r.jsx)(n.li,{children:"Authorization credentials to connect to the database"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Having trouble with the prerequisites? Contact Teradata for setup information."}),"\n",(0,r.jsx)(n.h2,{id:"query-service-api-examples",children:"Query Service API examples"}),"\n",(0,r.jsx)(n.p,{children:"When using the examples, please keep in mind that:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The examples in this document use Python, and you can use these to create examples in your language of choice."}),"\n",(0,r.jsxs)(n.li,{children:["The examples provided here are complete and ready for you to use, although most require a little customization.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The examples in this document use the URL ",(0,r.jsx)(n.code,{children:"https://<QS_HOSTNAME>:1443/"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Replace the following variables with your own value:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<QS_HOSTNAME>"}),": Server where Query Service is installed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<SYSTEM_NAME>"}),": Preconfigured alias of the system"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If your Vantage instance is provided through ClearScape Analytics Experience,",(0,r.jsx)(n.code,{children:"<QS_HOSTNAME>"}),", is the host URL of your ClearScape Analytics Experience environment, ",(0,r.jsx)(n.code,{children:"<SYSTEM_NAME>"})," is 'local'."]})}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-your-query-service-instance",children:"Connect to your Query Service instance"}),"\n",(0,r.jsx)(n.p,{children:"Provide valid credentials to access the target Analytics Database using HTTP Basic or JWT authentication."}),"\n",(0,r.jsx)(n.h3,{id:"http-basic-authentication",children:"HTTP Basic authentication"}),"\n",(0,r.jsxs)(n.p,{children:["The database username and password are combined into a string (",(0,r.jsx)(n.code,{children:'"username : password"'}),") which is then encoded using Base64. The API response contains the authorization method and encoded credentials."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:', id="queryservice_first_query", role="emits-gtm-events"',children:"import requests\nimport json\nimport base64\nrequests.packages.urllib3.disable_warnings()\n\n# run it from local.\n\ndb_user, db_password = 'dbc','dbc'\nauth_encoded = db_user + ':' + db_password\nauth_encoded = base64.b64encode(bytes(auth_encoded, 'utf-8'))\nauth_str = 'Basic ' + auth_encoded.decode('utf-8')\n\nprint(auth_str)\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': auth_str # base 64 encoded username:password\n}\n\nprint(headers)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"Basic ZGJjOmRiYw==\n{\n  'Content-Type': 'application/json',\n  'Authorization': 'Basic ZGJjOmRiYw=='\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"jwt-authentication",children:"JWT authentication"}),"\n",(0,r.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The user must already exist in the database."}),"\n",(0,r.jsx)(n.li,{children:"The database must be JWT enabled."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests\nimport json\nrequests.packages.urllib3.disable_warnings()\n\n# run it from local. \n\nauth_encoded_jwt = \"<YOUR_JWT_HERE>\"\nauth_str = \"Bearer \" + auth_encoded_jwt\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': auth_str\n}\n\nprint(headers)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"{'Content-Type': 'application/json', 'Authorization': 'Bearer <YOUR_JWT_HERE>'}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"make-a-simple-api-request-with-basic-options",children:"Make a simple API request with basic options"}),"\n",(0,r.jsx)(n.p,{children:"In the following example, the request includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SELECT * FROM DBC.DBCInfo"}),": The query to the system with the alias ",(0,r.jsx)(n.code,{children:"<SYSTEM_NAME>"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"'format': 'OBJECT'"}),": The format for response. The formats supported are: JSON object, JSON array, and CSV."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The JSON object format creates one JSON object per row where the column name is the field name, and the column value is the field value."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"'includeColumns': true"}),": The request to include column metadata, such as column names and types, in the response."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"'rowLimit': 4"}),": The number of rows to be returned from a query."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload = {\n  'query': example_query, # 'SELECT * FROM DBC.DBCInfo;',\n  'format': 'OBJECT',\n  'includeColumns': True,\n  'rowLimit': 4\n}\n\npayload_json = json.dumps(payload)\n\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nnum_rows = response.json().get('results'](0].get('rowCount')\nprint('NUMBER of ROWS', num_rows)\nprint('==========================================================')\n\nprint(response.json())\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'NUMBER of ROWS 4\n==========================================================\n{\n  "queueDuration":7,\n  "queryDuration":227,\n  "results":[\n    {\n      "resultSet":True,\n      "columns":[\n        {\n          "name":"DatabaseName",\n          "type":"CHAR"\n        },\n        {\n          "name":"USEDSPACE_IN_GB",\n          "type":"FLOAT"\n        },\n        {\n          "name":"MAXSPACE_IN_GB",\n          "type":"FLOAT"\n        },\n        {\n          "name":"Percentage_Used",\n          "type":"FLOAT"\n        },\n        {\n          "name":"REMAININGSPACE_IN_GB",\n          "type":"FLOAT"\n        }\n      ],\n      "data":[\n        {\n          "DatabaseName":"DBC",\n          "USEDSPACE_IN_GB":317.76382541656494,\n          "MAXSPACE_IN_GB":1510.521079641879,\n          "Percentage_Used":21.03670247964377,\n          "REMAININGSPACE_IN_GB":1192.757254225314\n        },\n        {\n          "DatabaseName":"EM",\n          "USEDSPACE_IN_GB":0.0007491111755371094,\n          "MAXSPACE_IN_GB":11.546071618795395,\n          "Percentage_Used":0.006488017745513208,\n          "REMAININGSPACE_IN_GB":11.545322507619858\n        },\n        {\n          "DatabaseName":"user10",\n          "USEDSPACE_IN_GB":0.019153594970703125,\n          "MAXSPACE_IN_GB":9.313225746154785,\n          "Percentage_Used":0.20566016,\n          "REMAININGSPACE_IN_GB":9.294072151184082\n        },\n        {\n          "DatabaseName":"EMEM",\n          "USEDSPACE_IN_GB":0.006140708923339844,\n          "MAXSPACE_IN_GB":4.656612873077393,\n          "Percentage_Used":0.13187072,\n          "REMAININGSPACE_IN_GB":4.650472164154053\n        },\n        {\n          "DatabaseName":"EMWork",\n          "USEDSPACE_IN_GB":0.0,\n          "MAXSPACE_IN_GB":4.656612873077393,\n          "Percentage_Used":0.0,\n          "REMAININGSPACE_IN_GB":4.656612873077393\n        }\n      ],\n      "rowCount":4,\n      "rowLimitExceeded":True\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For response parameters, see ",(0,r.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body",children:"Query Service Installation, Configuration, and Usage Guide"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"request-a-response-in-csv-format",children:"Request a response in CSV format"}),"\n",(0,r.jsxs)(n.p,{children:["To return an API response in CSV format, set the ",(0,r.jsx)(n.code,{children:"*format*"})," field in the request with the value ",(0,r.jsx)(n.code,{children:"*CSV*"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The CSV format contains only the query results and not response metadata. The response contains a line for each row, where each line contains the row columns separated by a comma. The following example returns the data as comma-separated values."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# CSV with all rows included\n\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload = {\n  'query': example_query, # 'SELECT * FROM DBC.DBCInfo;',\n  'format': 'CSV',\n  'includeColumns': True\n}\n\npayload_json = json.dumps(payload)\n\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"DatabaseName,USEDSPACE_IN_GB,MAXSPACE_IN_GB,Percentage_Used,REMAININGSPACE_IN_GB\nDBC                           ,317.7634754180908,1510.521079641879,21.036679308932754,1192.7576042237881\nEM                            ,7.491111755371094E-4,11.546071618795395,0.006488017745513208,11.545322507619858\nuser10                        ,0.019153594970703125,9.313225746154785,0.20566016,9.294072151184082\nEMEM                          ,0.006140708923339844,4.656612873077393,0.13187072,4.650472164154053\nEMWork                        ,0.0,4.656612873077393,0.0,4.656612873077393\nEMJI                          ,0.0,2.3283064365386963,0.0,2.3283064365386963\nUSER_NAME                     ,0.0,2.0,0.0,2.0\nreadonly                      ,0.0,0.9313225746154785,0.0,0.9313225746154785\naug12_db                      ,7.200241088867188E-5,0.9313225746154785,0.0077312,0.9312505722045898\nSystemFe                      ,1.8024444580078125E-4,0.7450580596923828,0.024192,0.744877815246582\ndbcmngr                       ,3.814697265625E-6,0.09313225746154785,0.004096,0.09312844276428223\nEMViews                       ,0.027594566345214844,0.09313225746154785,29.62944,0.06553769111633301\ntdwm                          ,6.732940673828125E-4,0.09313225746154785,0.722944,0.09245896339416504\nCrashdumps                    ,0.0,0.06984921544790268,0.0,0.06984921544790268\nSYSLIB                        ,0.006252288818359375,0.03725290298461914,16.78336,0.031000614166259766\nSYSBAR                        ,4.76837158203125E-6,0.03725290298461914,0.0128,0.03724813461303711\nSYSUDTLIB                     ,3.5381317138671875E-4,0.029802322387695312,1.1872,0.029448509216308594\nExternal_AP                   ,0.0,0.01862645149230957,0.0,0.01862645149230957\nSysAdmin                      ,0.002307891845703125,0.01862645149230957,12.3904,0.016318559646606445\nKZXaDtQp                      ,0.0,0.009313225746154785,0.0,0.009313225746154785\ns476QJ6O                      ,0.0,0.009313225746154785,0.0,0.009313225746154785\nhTzz03i7                      ,0.0,0.009313225746154785,0.0,0.009313225746154785\nY5WYUUXj                      ,0.0,0.009313225746154785,0.0,0.009313225746154785\n"})}),"\n",(0,r.jsx)(n.h2,{id:"use-explicit-session-to-submit-a-query",children:"Use explicit session to submit a query"}),"\n",(0,r.jsx)(n.p,{children:"Use explicit sessions when a transaction needs to span multiple requests or when using volatile tables. These sessions are only reused if you reference the sessions in a query request. The request is queued if a request references an explicit session already in use."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a session\nSend a POST request to the ",(0,r.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/sessions"})," endpoint. The request creates a new database session and returns the session details as the response."]}),"\n",(0,r.jsxs)(n.p,{children:["In the following example, the request includes ",(0,r.jsx)(n.code,{children:"'auto_commit': True"})," - the request to commit the query upon completion."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# first create a session\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/sessions'\n\npayload = {\n  'auto_commit': True\n}\n\npayload_json = json.dumps(payload)\n\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"{\n  'sessionId': 1366010,\n  'system': 'testsystem',\n  'user': 'dbc',\n  'tdSessionNo': 1626922,\n  'createMode': 'EXPLICIT',\n  'state': 'LOGGINGON',\n  'autoCommit': true\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use the session created in Step 1 to submit queries"}),"\n",(0,r.jsxs)(n.p,{children:["Send a POST request to the ",(0,r.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries"})," endpoint."]}),"\n",(0,r.jsx)(n.p,{children:"The request submits queries to the target system and returns the release and version number of the target system."}),"\n",(0,r.jsx)(n.p,{children:"In the following example, the request includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SELECT * FROM DBC.DBCInfo"}),": The query to the system with the alias ",(0,r.jsx)(n.code,{children:"<SYSTEM_NAME>"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'format': 'OBJECT'"}),": The format for response."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'Session' : <Session ID>"}),": The session ID returned in Step 1 to create an explicit session."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# use this session to submit queries afterwards\n\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload = {\n  'query': 'SELECT * FROM DBC.DBCInfo;',\n  'format': 'OBJECT',\n  'session': 1366010 # <-- sessionId\n}\npayload_json = json.dumps(payload)\n\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "queueDuration":6,\n  "queryDuration":41,\n  "results":[\n    {\n      "resultSet":true,\n      "data":[\n        {\n          "InfoKey":"LANGUAGE SUPPORT MODE",\n          "InfoData":"Standard"\n        },\n        {\n          "InfoKey":"RELEASE",\n          "InfoData":"15.10.07.02"\n        },\n        {\n          "InfoKey":"VERSION",\n          "InfoData":"15.10.07.02"\n        }\n      ],\n      "rowCount":3,\n      "rowLimitExceeded":false\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-asynchronous-queries",children:"Use asynchronous queries"}),"\n",(0,r.jsx)(n.p,{children:"Use asynchronous queries when a system or network performance is affected by querying a large group of data or long running queries."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Submit asynchronous queries to the target system and retrieve a Query ID\nSend a POST request to the ",(0,r.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries"})," endpoint.\nIn the following example, the request includes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SELECT * FROM DBC.DBCInfo"}),": The query to the system with the alias ",(0,r.jsx)(n.code,{children:"<SYSTEM_NAME>"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'format': 'OBJECT'"}),": The format for response."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'spooled_result_set': True"}),": The indication that the request is asynchronous."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"## Run async query .\n\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload = {\n  'query': 'SELECT * FROM DBC.DBCInfo;',\n  'format': 'OBJECT',\n  'spooled_result_set': True\n}\n\npayload_json = json.dumps(payload)\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{"id":1366025}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Get query details using the ID retrieved from Step 1"}),"\n",(0,r.jsxs)(n.p,{children:["Send a GET request to the ",(0,r.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries/<queryID>"})," endpoint, replacing ",(0,r.jsx)(n.code,{children:"<queryID>"})," with the ID retrieved from Step 1."]}),"\n",(0,r.jsxs)(n.p,{children:["The request returns the details of the specific query, including ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"queryState"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"queueOrder"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"queueDuration"})}),", and so on. For a complete list of the response fields and their descriptions, see ",(0,r.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body",children:"Query Service Installation, Configuration, and Usage Guide"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"## response for async query .\n\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025'\n\npayload_json = json.dumps(payload)\nresponse = requests.request('GET', url, headers=headers, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'{\n  "queryId":1366025,\n  "query":"SELECT * FROM DBC.DBCInfo;",\n  "batch":false,\n  "system":"testsystem",\n  "user":"dbc",\n  "session":1366015,\n  "queryState":"RESULT_SET_READY",\n  "queueOrder":0,\n  "queueDuration":6,\n  "queryDuration":9,\n  "statusCode":200,\n  "resultSets":{\n\n  },\n  "counts":{\n\n  },\n  "exceptions":{\n\n  },\n  "outParams":{\n\n  }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"View resultset for asynchronous query"}),"\n",(0,r.jsxs)(n.p,{children:["Send a GET request to the ",(0,r.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries/<queryID>/results"})," endpoint, replacing ",(0,r.jsx)(n.code,{children:"<queryID>"})," with the ID retrieved from Step 1."]}),"\n",(0,r.jsx)(n.p,{children:"The request returns an array of the result sets and update counts produced by the submitted query."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025/results'\n\npayload_json = json.dumps(payload)\nresponse = requests.request('GET', url, headers=headers, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "queueDuration":6,\n  "queryDuration":9,\n  "results":[\n    {\n      "resultSet":true,\n      "data":[\n        {\n          "InfoKey":"LANGUAGE SUPPORT MODE",\n          "InfoData":"Standard"\n        },\n        {\n          "InfoKey":"RELEASE",\n          "InfoData":"15.10.07.02"\n        },\n        {\n          "InfoKey":"VERSION",\n          "InfoData":"15.10.07.02"\n        }\n      ],\n      "rowCount":3,\n      "rowLimitExceeded":false\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"get-a-list-of-active-or-queued-queries",children:"Get a list of active or queued queries"}),"\n",(0,r.jsxs)(n.p,{children:["Send a GET request to the ",(0,r.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries"})," endpoint. The request returns the IDs of active queries."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload={}\n\nresponse = requests.request('GET', url, headers=headers, data=payload, verify=False)\n\nprint(response.json())\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "queryId": 12516087,\n    "query": "SELECt * from dbcmgr.AlertRequest;",\n    "batch": false,\n    "system": "BasicTestSys",\n    "user": "dbc",\n    "session": 12516011,\n    "queryState": "REST_SET_READY",\n    "queueOrder": 0,\n    "queueDurayion": 3,\n    "queryDuration": 3,\n    "statusCode": 200,\n    "resultSets": {},\n    "counts": {},\n    "exceptions": {},\n    "outparams": {}\n  },\n  {\n    "queryId": 12516088,\n    "query": "SELECt * from dbc.DBQLAmpDataTbl;",\n    "batch": false,\n    "system": "BasicTestSys",\n    "user": "dbc",\n    "session": 12516011,\n    "queryState": "REST_SET_READY",\n    "queueOrder": 0,\n    "queueDurayion": 3,\n    "queryDuration": 3,\n    "statusCode": 200,\n    "resultSets": {},\n    "counts": {},\n    "exceptions": {},\n    "outparams": {}\n  }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Features, examples, and references: ",(0,r.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022",children:"Query Service Installation, Configuration, and Usage Guide"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://downloads.teradata.com/api/teradata_query_service",children:"Query Service API OpenAPI Specification"})}),"\n"]}),"\n","\n",(0,r.jsx)(i.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);