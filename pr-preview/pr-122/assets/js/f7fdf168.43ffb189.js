"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8765],{41269:(e,n,a)=>{a.d(n,{Ay:()=>s,RM:()=>r});var i=a(74848),t=a(28453);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,i.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function s(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},62680:(e,n,a)=>{a.d(n,{Ay:()=>s,RM:()=>r});var i=a(74848),t=a(28453);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,i.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function s(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},95376:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var i=a(74848),t=a(28453),r=a(62680),o=a(41269);const s={sidebar_position:3,id:"airflow",author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"February 06th, 2024",description:"Use Apache Airflow with Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","airflow","workflow."]},l="Use Apache Airflow with Teradata Vantage",d={id:"manage-data/airflow",title:"Use Apache Airflow with Teradata Vantage",description:"Use Apache Airflow with Teradata Vantage.",source:"@site/quickstarts/manage-data/airflow.md",sourceDirName:"manage-data",slug:"/manage-data/airflow",permalink:"/pr-preview/pr-122/quickstarts/manage-data/airflow",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"airflow",author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"February 06th, 2024",description:"Use Apache Airflow with Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","airflow","workflow."]},sidebar:"tutorialSidebar",previous:{title:"Select the right data ingestion solution for Teradata Vantage",permalink:"/pr-preview/pr-122/quickstarts/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage"},next:{title:"dbt with Teradata Vantage",permalink:"/pr-preview/pr-122/quickstarts/manage-data/dbt"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...r.RM,{value:"Install Apache Airflow",id:"install-apache-airflow",level:2},{value:"Start Airflow Standalone",id:"start-airflow-standalone",level:2},{value:"Define a Teradata connection in Airflow Web UI",id:"define-a-teradata-connection-in-airflow-web-ui",level:2},{value:"Define a Teradata connection in Environment Variable",id:"define-a-teradata-connection-in-environment-variable",level:2},{value:"JSON format example",id:"json-format-example",level:2},{value:"URI format example",id:"uri-format-example",level:2},{value:"Define a DAG in Airflow",id:"define-a-dag-in-airflow",level:2},{value:"Load DAG",id:"load-dag",level:2},{value:"Run DAG",id:"run-dag",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...o.RM];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"use-apache-airflow-with-teradata-vantage",children:"Use Apache Airflow with Teradata Vantage"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This tutorial demonstrates how to use airflow with Teradata Vantage. Airflow will be installed on Ubuntu System."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ubuntu 22.x"}),"\n",(0,i.jsxs)(n.li,{children:["Access to a Teradata Vantage instance.","\n",(0,i.jsx)(r.Ay,{}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Python ",(0,i.jsx)(n.strong,{children:"3.8"}),", ",(0,i.jsx)(n.strong,{children:"3.9"}),", ",(0,i.jsx)(n.strong,{children:"3.10"})," or ",(0,i.jsx)(n.strong,{children:"3.11"})," installed."]}),"\n",(0,i.jsx)(n.li,{children:"pip"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-apache-airflow",children:"Install Apache Airflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the AIRFLOW_HOME environment variable. Airflow requires a home directory and uses ~/airflow by default, but you can set a different location if you prefer. The AIRFLOW_HOME environment variable is used to inform Airflow of the desired location."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export AIRFLOW_HOME=~/airflow\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.code,{children:"apache-airflow"})," stable version 2.8.1 from PyPI repository.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'AIRFLOW_VERSION=2.8.2\nPYTHON_VERSION="$(python --version | cut -d " " -f 2 | cut -d "." -f 1-2)"\nCONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"\npip install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the Airflow Teradata provider stable version from PyPI repository."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "apache-airflow-providers-teradata"\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"For security reasons, the test connection functionality is disabled by default across Airflow UI, API and CLI.\nThe availability of the functionality can be controlled by the test_connection flag in the core section of the Airflow configuration ($AIRFLOW_HOME/airflow.cfg) or Define below environment variable before starting airflow server.\nexport AIRFLOW__CORE__TEST_CONNECTION=Enabled"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"start-airflow-standalone",children:"Start Airflow Standalone"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run Airflow Standalone","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"airflow standalone\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Access the Airflow UI. Visit ",(0,i.jsx)(n.a,{href:"https://localhost:8080",children:"https://localhost:8080"})," in the browser and log in with the admin account details shown in the terminal."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Teradata Connections may be defined in Airflow in the following ways:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Using Airflow Web UI"}),"\n",(0,i.jsx)(n.li,{children:"Using Environment Variable"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"define-a-teradata-connection-in-airflow-web-ui",children:"Define a Teradata connection in Airflow Web UI"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the Admin -> Connections section of the UI. Click the Create link to create a new connection.\n",(0,i.jsx)(n.img,{alt:"Airflow admin dropdown",src:a(38255).A+"",width:"1885",height:"388"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fill in input details in New Connection Page.\n",(0,i.jsx)(n.img,{alt:"Airflow New Connection",src:a(25673).A+"",width:"3579",height:"1966"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connection Id: Unique ID of Teradata Connection."}),"\n",(0,i.jsx)(n.li,{children:"Connection Type: Type of the system. Select Teradata."}),"\n",(0,i.jsx)(n.li,{children:"Database Server URL (required): Teradata instance hostname to connect to."}),"\n",(0,i.jsx)(n.li,{children:"Database (optional): Specify the name of the database to connect to"}),"\n",(0,i.jsx)(n.li,{children:"Login (required): Specify the user name to connect."}),"\n",(0,i.jsx)(n.li,{children:"Password (required): Specify the password to connect."}),"\n",(0,i.jsx)(n.li,{children:"Click on Test and Save."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"define-a-teradata-connection-in-environment-variable",children:"Define a Teradata connection in Environment Variable"}),"\n",(0,i.jsx)(n.p,{children:"Airflow connections may be defined in environment variables in either of one below formats."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON format"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"URI format"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The naming convention is AIRFLOW_CONN_CONN_ID, all uppercase (note the single underscores surrounding CONN).\nSo if your connection id is teradata_conn_id then the variable name should be AIRFLOW_CONN_TERADATA_CONN_ID"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"json-format-example",children:"JSON format example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export AIRFLOW_CONN_TERADATA_CONN_ID=\'{\n    "conn_type": "teradata",\n    "login": "teradata_user",\n    "password": "my-password",\n    "host": "my-host",\n    "schema": "my-schema",\n    "extra": {\n        "tmode": "TERA",\n        "sslmode": "verify-ca"\n    }\n}\'\n'})}),"\n",(0,i.jsx)(n.h2,{id:"uri-format-example",children:"URI format example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export AIRFLOW_CONN_TERADATA_CONN_ID='teradata://teradata_user:my-password@my-host/my-schema?tmode=TERA&sslmode=verify-ca'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Refer ",(0,i.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/connections/teradata.html",children:"Teradata Hook"}),"  for detailed information on Teradata Connection in Airflow."]}),"\n",(0,i.jsx)(n.h2,{id:"define-a-dag-in-airflow",children:"Define a DAG in Airflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"In Airflow, DAGs are defined as Python code."}),"\n",(0,i.jsx)(n.li,{children:"Create a DAG as a python file like sample.py under DAG_FOLDER - $AIRFLOW_HOME/files/dags directory."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'from datetime import datetime\nfrom airflow import DAG\nfrom airflow.providers.teradata.operators.teradata import TeradataOperator\nCONN_ID = "Teradata_TestConn"\nwith DAG(\n    dag_id="example_teradata_operator",\n    max_active_runs=1,\n    max_active_tasks=3,\n    catchup=False,\n    start_date=datetime(2023, 1, 1),\n) as dag:\n    create = TeradataOperator(\n        task_id="table_create",\n        conn_id=CONN_ID,\n        sql="""\n            CREATE TABLE my_users,\n            FALLBACK (\n                user_id decimal(10,0) NOT NULL GENERATED ALWAYS AS IDENTITY (\n                    START WITH 1\n                    INCREMENT BY 1\n                    MINVALUE 1\n                    MAXVALUE 2147483647\n                    NO CYCLE),\n                user_name VARCHAR(30)\n            ) PRIMARY INDEX (user_id);\n        """,\n    )\n'})}),"\n",(0,i.jsx)(n.h2,{id:"load-dag",children:"Load DAG"}),"\n",(0,i.jsx)(n.p,{children:"Airflow loads DAGs from Python source files, which it looks for inside its configured DAG_FOLDER - $AIRFLOW_HOME/files/dags directory."}),"\n",(0,i.jsx)(n.h2,{id:"run-dag",children:"Run DAG"}),"\n",(0,i.jsx)(n.p,{children:"DAGs will run in one of two ways:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"When they are triggered either manually or via the API"}),"\n",(0,i.jsxs)(n.li,{children:["On a defined schedule, which is defined as part of the DAG\n",(0,i.jsx)(n.code,{children:"example_teradata_operator"})," is defined to trigger as manually. To define a schedule, any valid ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cron",children:"Crontab"})," schedule value can be passed to the schedule argument."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'with DAG(\n  dag_id="my_daily_dag",\n  schedule="0 0 * * *"\n  ) as dag:\n'})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial demonstrated how to use Airflow and the Airflow Teradata provider with a Teradata Vantage instance. The example DAG provided creates ",(0,i.jsx)(n.code,{children:"my_users"})," table in the Teradata Vantage instance defined in Connection UI."]}),"\n",(0,i.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/start.html",children:"airflow documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html",children:"airflow DAGs"})}),"\n"]}),"\n",(0,i.jsx)(o.Ay,{})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},38255:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/airflow-connection-afc4c68b6bdf00a9e76c479b6f769b6c.png"},25673:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/airflow-newconnection-8406f78d94110c438752732154421c08.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var i=a(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);