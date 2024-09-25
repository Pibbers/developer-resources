"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4684],{62680:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>i});var t=a(74848),r=a(28453);const i=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},91193:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=a(74848),r=a(28453),i=a(62680),s=a(56240),o=a(19365);const l={sidebar_position:3.5,title:"Apache Airflow using Astronomer Cosmos",author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"July 15th, 2024",description:"Execute dbt teradata transformation jobs in Apache Airflow using Astronomer Cosmos library",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","airflow","queries","dbt","cosmos","astronomer"]},d="Execute dbt teradata transformation jobs in Apache Airflow using Astronomer Cosmos library",c={id:"manage-data/execute-dbt-teradata-transformations-in-airflow-with-cosmos",title:"Apache Airflow using Astronomer Cosmos",description:"Execute dbt teradata transformation jobs in Apache Airflow using Astronomer Cosmos library",source:"@site/quickstarts/manage-data/execute-dbt-teradata-transformations-in-airflow-with-cosmos.md",sourceDirName:"manage-data",slug:"/manage-data/execute-dbt-teradata-transformations-in-airflow-with-cosmos",permalink:"/de/quickstarts/manage-data/execute-dbt-teradata-transformations-in-airflow-with-cosmos",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3.5,frontMatter:{sidebar_position:3.5,title:"Apache Airflow using Astronomer Cosmos",author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"July 15th, 2024",description:"Execute dbt teradata transformation jobs in Apache Airflow using Astronomer Cosmos library",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","airflow","queries","dbt","cosmos","astronomer"]},sidebar:"tutorialSidebar",previous:{title:"Use Apache Airflow with Teradata Vantage",permalink:"/de/quickstarts/manage-data/airflow"},next:{title:"Data Transfer from Azure Blob to Teradata Vantage Using Apache Airflow",permalink:"/de/quickstarts/manage-data/airflow-azure-to-teradata-transfer-operator-doc"}},u={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...i.RM,{value:"Install Apache Airflow and Astronomer Cosmos",id:"install-apache-airflow-and-astronomer-cosmos",level:2},{value:"Install dbt",id:"install-dbt",level:2},{value:"Setup dbt project",id:"setup-dbt-project",level:2},{value:"Configure Apache Airflow",id:"configure-apache-airflow",level:2},{value:"Start Apache Airflow web server",id:"start-apache-airflow-web-server",level:2},{value:"Define Apache Airflow connection to Vantage",id:"define-apache-airflow-connection-to-vantage",level:2},{value:"Define DAG in Apache Airflow",id:"define-dag-in-apache-airflow",level:2},{value:"Load DAG",id:"load-dag",level:2},{value:"Run DAG",id:"run-dag",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"execute-dbt-teradata-transformation-jobs-in-apache-airflow-using-astronomer-cosmos-library",children:"Execute dbt teradata transformation jobs in Apache Airflow using Astronomer Cosmos library"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["This tutorial demonstrates how to install Apache Airflow on a local machine, configure the workflow to use dbt teradata to run dbt transformations using the astronomer cosmos library, and run it against a Teradata Vantage database. Apache Airflow is a task scheduling tool that is typically used to build data pipelines to process and load data. ",(0,t.jsx)(n.a,{href:"https://astronomer.github.io/astronomer-cosmos/",children:"Astronomer cosmos"})," library simplifies orchestrating dbt data transformations in Apache Airflow. Using Cosmos, allows running dbt Core projects as Apache Airflow DAGs and Task Groups with a few lines of code.\nIn this example, we will explain how to use astronomer cosmos to run dbt transformations in airflow against Teradata Vantage database."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"The Windows Subsystem for Linux (WSL)"})," on ",(0,t.jsx)(n.code,{children:"Windows"})," to try this quickstart example."]})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Access to a Teradata Vantage instance, version 17.10 or higher."}),"\n"]}),"\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Python 3.8, 3.9, 3.10 or 3.11 and python3-env, python3-pip installed."}),"\n"]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(o.A,{value:"Linux",label:"Linux",default:!0,children:[(0,t.jsx)(n.p,{children:"Run in Powershell:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install -y python3-venv python3-pip\n"})})]}),(0,t.jsx)(o.A,{value:"WSL",label:"WSL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install -y python3-venv python3-pip\n"})})}),(0,t.jsxs)(o.A,{value:"macOS",label:"macOS",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install python\n"})}),(0,t.jsxs)(n.p,{children:["Refer ",(0,t.jsx)(n.a,{href:"https://docs.python-guide.org/starting/install3/osx/",children:"Installation Guide"})," if you face any issues."]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"install-apache-airflow-and-astronomer-cosmos",children:"Install Apache Airflow and Astronomer Cosmos"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a new python environment to manage airflow and its dependencies. Activate the environment:"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This will install Apache Airflow as well."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'python3 -m venv airflow_env\nsource airflow_env/bin/activate\npip install "astronomer-cosmos"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the Apache Airflow Teradata provider"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'pip install "apache-airflow-providers-teradata"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the AIRFLOW_HOME environment variable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export AIRFLOW_HOME=~/airflow\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-dbt",children:"Install dbt"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new python environment to manage dbt and its dependencies. Activate the environment:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"python3 -m venv dbt_env\nsource dbt_env/bin/activate\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.code,{children:"dbt-teradata"})," and ",(0,t.jsx)(n.code,{children:"dbt-core"})," modules:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pip install dbt-teradata dbt-core\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup-dbt-project",children:"Setup dbt project"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the jaffle_shop repository and cd into the project directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make a new folder, dbt, inside $AIRFLOW_HOME/dags folder. Then, copy/paste jaffle_shop dbt project into $AIRFLOW_HOME/dags/dbt directory"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mkdir -p $AIRFLOW_HOME/dags/dbt/\ncp -r jaffle_shop $AIRFLOW_HOME/dags/dbt/\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-apache-airflow",children:"Configure Apache Airflow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Switch to virtual environment where Apache Airflow was installed at ",(0,t.jsx)(n.a,{href:"#install-apache-airflow-and-astronomer-cosmos",children:"Install Apache Airflow and Astronomer Cosmos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source airflow_env/bin/activate\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Configure the listed environment variables to activate the test connection button, preventing the loading of sample DAGs and default connections in Airflow UI.","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export AIRFLOW__CORE__TEST_CONNECTION=Enabled\nexport AIRFLOW__CORE__LOAD_EXAMPLES=false\nexport AIRFLOW__CORE_LOAD_DEFAULT_CONNECTIONS=false\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Define the path of jaffle_shop project as an environment variable ",(0,t.jsx)(n.code,{children:"dbt_project_home_dir"}),".","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export dbt_project_home_dir=$AIRFLOW_HOME/dags/dbt/jaffle_shop\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Define the path to the virtual environment where dbt-teradata was installed as an environment variable ",(0,t.jsx)(n.code,{children:"dbt_venv_dir"}),".","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export dbt_venv_dir=/../../dbt_env/bin/dbt\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You might need to change ",(0,t.jsx)(n.code,{children:"/../../"})," to the specific path where the ",(0,t.jsx)(n.code,{children:"dbt_env"})," virtual environment is located."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"start-apache-airflow-web-server",children:"Start Apache Airflow web server"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Run airflow web server","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"airflow standalone\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Access the airflow UI. Visit ",(0,t.jsx)(n.a,{href:"https://localhost:8080",children:"https://localhost:8080"})," in the browser and log in with the admin account details shown in the terminal.\n",(0,t.jsx)(n.img,{alt:"Airflow Password",src:a(45707).A+"",width:"3049",height:"427"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"define-apache-airflow-connection-to-vantage",children:"Define Apache Airflow connection to Vantage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click on Admin - Connections"}),"\n",(0,t.jsx)(n.li,{children:"Click on + to define new connection to Teradata Vantage instance."}),"\n",(0,t.jsxs)(n.li,{children:["Define new connection with id ",(0,t.jsx)(n.code,{children:"teradata_default"})," with Teradata Vantage instance details.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connection Id: teradata_default"}),"\n",(0,t.jsx)(n.li,{children:"Connection Type: Teradata"}),"\n",(0,t.jsx)(n.li,{children:"Database Server URL (required): Teradata Vantage instance hostname to connect to."}),"\n",(0,t.jsx)(n.li,{children:"Database: jaffle_shop"}),"\n",(0,t.jsx)(n.li,{children:"Login (required): database user"}),"\n",(0,t.jsx)(n.li,{children:"Password (required): database user password"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"define-dag-in-apache-airflow",children:"Define DAG in Apache Airflow"}),"\n",(0,t.jsxs)(n.p,{children:["Dags in airflow are defined as python files. The dag below runs the dbt transformations defined in the ",(0,t.jsx)(n.code,{children:"jaffle_shop"})," dbt project on a Teradata Vantage system using cosmos.Copy the python code below and save it as ",(0,t.jsx)(n.code,{children:"airflow-cosmos-dbt-teradata-integration.py"})," under the directory $AIRFLOW_HOME/dags."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\nfrom datetime import datetime\n\nfrom airflow import DAG\nfrom cosmos import DbtTaskGroup, ProjectConfig, ProfileConfig, ExecutionConfig\nfrom cosmos.profiles import TeradataUserPasswordProfileMapping\n\nPATH_TO_DBT_VENV = f"{os.environ[\'dbt_venv_dir\']}"\nPATH_TO_DBT_PROJECT = f"{os.environ[\'dbt_project_home_dir\']}"\n\n\nexecution_config = ExecutionConfig(\n    dbt_executable_path=PATH_TO_DBT_VENV,\n)\nprofile_config = ProfileConfig(\n    profile_name="generated_profile",\n    target_name="dev",\n    profile_mapping=TeradataUserPasswordProfileMapping(\n        conn_id="teradata_default",\n    ),\n)\nwith DAG(\n    dag_id="execute_dbt_transformations_with_cosmos",\n    max_active_runs=1,\n    max_active_tasks=10,\n    catchup=False,\n    start_date=datetime(2024, 1, 1),\n\n) as dag:\n      transform_data = DbtTaskGroup(\n          group_id="transform_data",\n          project_config=ProjectConfig(PATH_TO_DBT_PROJECT),\n          profile_config=profile_config,\n          execution_config=execution_config,\n          default_args={"retries": 2},\n      )\n'})}),"\n",(0,t.jsx)(n.h2,{id:"load-dag",children:"Load DAG"}),"\n",(0,t.jsx)(n.p,{children:"When the dag file is copied to $AIRFLOW_HOME/dags, Apache Airflow displays the dag in UI under DAGs section. It will take 2 to 3 minutes to load DAG in Apache Airflow UI."}),"\n",(0,t.jsx)(n.h2,{id:"run-dag",children:"Run DAG"}),"\n",(0,t.jsx)(n.p,{children:"Run the dag as shown in the image below."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Run dag",src:a(95047).A+"",width:"3786",height:"623"})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["In this quick start guide, we explored how to utilize Astronomer Cosmos library in Apache Airflow to execute ",(0,t.jsx)(n.code,{children:"dbt transformations"})," against a Teradata Vantage instance."]}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html",children:"Apache Airflow DAGs reference"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://astronomer.github.io/astronomer-cosmos/",children:"Benefits of Cosmos"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://astronomer.github.io/astronomer-cosmos/profiles/TeradataUserPassword.html",children:"Teradata Cosmos Profile"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"Install WSL on windows"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>s});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var i=a(74848);function s(e){var n=e.children,a=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},56240:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(96540),r=a(34164),i=a(23104),s=a(56347),o=a(205),l=a(57485);var d=a(89466);function c(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function u(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n,a,t=(void 0===(a=function(e,n){return e.value===n.value})&&(a=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return a(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,i=(0,s.W6)(),o=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function f(e){var n,a,r,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,f=e.groupId,m=u(e),b=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),g=b[0],x=b[1],v=p({queryString:c,groupId:f}),j=v[0],w=v[1],A=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),a=(0,d.Dv)(n),r=a[0],i=a[1],[r,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),_=A[0],y=A[1],T=function(){var e=null!=j?j:_;return h({value:e,tabValues:m})?e:null}();return(0,o.A)((function(){T&&x(T)}),[T]),{selectedValue:g,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),y(e)}),[w,y,m]),tabValues:m}}var m=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){var n=e.className,a=e.block,t=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],d=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,a=l.indexOf(n),r=o[a].value;r!==t&&(d(n),s(r))},u=function(e){var n,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,r=l.indexOf(e.currentTarget)+1;a=null!=(t=l[r])?t:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;a=null!=(i=l[s])?i:l[l.length-1]}null==(n=a)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((function(e){var n=e.value,a=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:c},i,{className:(0,r.A)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function v(e){var n=e.lazy,a=e.children,r=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===r}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function j(e){var n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,m.A)();return(0,g.jsx)(j,Object.assign({},e,{children:c(e.children)}),String(n))}},95047:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/airflow-dag-28e9357e62f23d36e260fae982832bb4.png"},45707:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/execute-dbt-teradata-cosmos-airflow-2e8d6b16478586529d54082ad971acab.png"},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);