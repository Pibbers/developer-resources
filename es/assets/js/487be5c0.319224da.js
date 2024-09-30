"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6207],{77692:(e,a,n)=>{n.d(a,{Ay:()=>d,RM:()=>o});var i=n(74848),r=n(28453);const o=[];function t(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(a.admonition,{type:"note",children:[(0,i.jsx)(a.mdxAdmonitionTitle,{}),(0,i.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,i.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function d(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>d,RM:()=>o});var i=n(74848),r=n(28453);const o=[];function t(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(a.admonition,{type:"note",children:[(0,i.jsx)(a.mdxAdmonitionTitle,{}),(0,i.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,i.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function d(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},20521:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var i=n(74848),r=n(28453),o=n(23961),t=n(77692);const d={sidebar_position:3,id:"airflow",author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"6 de febrero de 2024",description:"Utilizar Apache Airflow con Teradata Vantage",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","airflow","workflow."]},s="Utilizar Apache Airflow con Teradata Vantage",l={id:"manage-data/airflow",title:"Utilizar Apache Airflow con Teradata Vantage",description:"Utilizar Apache Airflow con Teradata Vantage",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/airflow.md",sourceDirName:"manage-data",slug:"/manage-data/airflow",permalink:"/es/quickstarts/manage-data/airflow",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"airflow",author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"6 de febrero de 2024",description:"Utilizar Apache Airflow con Teradata Vantage",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","airflow","workflow."]},sidebar:"tutorialSidebar",previous:{title:"Seleccionar la soluci\xf3n de ingesta de datos adecuada para Teradata Vantage",permalink:"/es/quickstarts/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage"},next:{title:"Apache Airflow using Astronomer Cosmos",permalink:"/es/quickstarts/manage-data/execute-dbt-teradata-transformations-in-airflow-with-cosmos"}},c={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...o.RM,{value:"Instalar Apache Airflow",id:"instalar-apache-airflow",level:2},{value:"Iniciar Airflow independiente",id:"iniciar-airflow-independiente",level:2},{value:"Definir una conexi\xf3n Teradata en la interfaz de usuario de Airflow",id:"definir-una-conexi\xf3n-teradata-en-la-interfaz-de-usuario-de-airflow",level:2},{value:"Definir una conexi\xf3n Teradata en una variable de entorno",id:"definir-una-conexi\xf3n-teradata-en-una-variable-de-entorno",level:2},{value:"Ejemplo de formato JSON",id:"ejemplo-de-formato-json",level:2},{value:"Ejemplo de formato URI",id:"ejemplo-de-formato-uri",level:2},{value:"Definir un DAG en Airflow",id:"definir-un-dag-en-airflow",level:2},{value:"Cargar DAG",id:"cargar-dag",level:2},{value:"Ejecutar DAG",id:"ejecutar-dag",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...t.RM];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"utilizar-apache-airflow-con-teradata-vantage",children:"Utilizar Apache Airflow con Teradata Vantage"}),"\n",(0,i.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,i.jsx)(a.p,{children:"Este tutorial demuestra c\xf3mo utilizar Airflow con Teradata Vantage. Airflow se instalar\xe1 en el sistema Ubuntu."}),"\n",(0,i.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Ubuntu 22.x"}),"\n",(0,i.jsxs)(a.li,{children:["Acceso a una instancia de Teradata Vantage.","\n",(0,i.jsx)(o.Ay,{}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["Python ",(0,i.jsx)(a.strong,{children:"3.8"}),", ",(0,i.jsx)(a.strong,{children:"3.9"}),", ",(0,i.jsx)(a.strong,{children:"3.10"})," o ",(0,i.jsx)(a.strong,{children:"3.11"})," instalado."]}),"\n",(0,i.jsx)(a.li,{children:"pip"}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"instalar-apache-airflow",children:"Instalar Apache Airflow"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Configure la variable de entorno AIRFLOW_HOME. Airflow requiere un directorio de inicio y usa ~/airflow de forma predeterminada, pero puede establecer una ubicaci\xf3n diferente si lo prefiere. La variable de entorno AIRFLOW_HOME se utiliza para informar a Airflow de la ubicaci\xf3n deseada."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"export AIRFLOW_HOME=~/airflow\n"})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Instale la versi\xf3n estable 2.8.1 de ",(0,i.jsx)(a.code,{children:"apache-airflow"})," desde el repositorio de PyPI:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'AIRFLOW_VERSION=2.8.2\nPYTHON_VERSION="$(python --version | cut -d " " -f 2 | cut -d "." -f 1-2)"\nCONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"\npip install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"\n'})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Instale la versi\xf3n estable del proveedor Airflow Teradata desde el repositorio PyPI."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'pip install "apache-airflow-providers-teradata"\n'})}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"Por razones de seguridad, la funcionalidad de conexi\xf3n de prueba est\xe1 deshabilitada de forma predeterminada en la interfaz de usuario, la API y la CLI de Airflow.\nLa disponibilidad de la funcionalidad se puede controlar mediante el indicador test_connection en la secci\xf3n principal de la configuraci\xf3n de Airflow ($AIRFLOW_HOME/airflow.cfg) o puede definir la siguiente variable de entorno antes de iniciar el servidor de Airflow.\nexport AIRFLOW__CORE__TEST_CONNECTION=Enabled"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"iniciar-airflow-independiente",children:"Iniciar Airflow independiente"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["Ejecute Airflow de forma independiente\n```bash\nairflow standalone","\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["Acceda a la interfaz de usuario de Airflow. Visite ",(0,i.jsx)(a.a,{href:"https://localhost:8080",children:"https://localhost:8080"})," en el navegador e inicie sesi\xf3n con los detalles de la cuenta de administrador que se muestran en el terminal."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Las conexiones Teradata se pueden definir en Airflow de las siguientes formas:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Mediante la interfaz de usuario web de Airflow"}),"\n",(0,i.jsx)(a.li,{children:"Mediante una variable de entorno"}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"definir-una-conexi\xf3n-teradata-en-la-interfaz-de-usuario-de-airflow",children:"Definir una conexi\xf3n Teradata en la interfaz de usuario de Airflow"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Abra la secci\xf3n Administraci\xf3n -> Conexiones de la interfaz de usuario. Haga clic en el enlace Crear para crear una nueva conexi\xf3n.\n",(0,i.jsx)(a.img,{alt:"Men\xfa desplegable de administraci\xf3n de Airflow",src:n(62344).A+"",width:"1885",height:"388"})]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Complete los detalles de entrada en la p\xe1gina Nueva conexi\xf3n.\n",(0,i.jsx)(a.img,{alt:"Nueva conexi\xf3n de Airflow",src:n(23420).A+"",width:"3579",height:"1966"})]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"ID de conexi\xf3n: ID \xfanico de la conexi\xf3n Teradata."}),"\n",(0,i.jsx)(a.li,{children:"Tipo de conexi\xf3n: tipo de sistema. Seleccione Teradata."}),"\n",(0,i.jsx)(a.li,{children:"URL del servidor de base de datos (obligatorio): nombre de host de la instancia de Teradata al que conectarse."}),"\n",(0,i.jsx)(a.li,{children:"Base de datos (opcional): especifique el nombre de la base de datos a la que conectarse"}),"\n",(0,i.jsx)(a.li,{children:"Iniciar sesi\xf3n (obligatorio): especifique el nombre de usuario para conectarse."}),"\n",(0,i.jsx)(a.li,{children:"Contrase\xf1a (obligatoria): especifique la contrase\xf1a para conectarse."}),"\n",(0,i.jsx)(a.li,{children:"Haga clic en Probar y guardar."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"definir-una-conexi\xf3n-teradata-en-una-variable-de-entorno",children:"Definir una conexi\xf3n Teradata en una variable de entorno"}),"\n",(0,i.jsx)(a.p,{children:"Las conexiones de Airflow se pueden definir en variables de entorno en cualquiera de los formatos siguientes."}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Formato JSON"}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Formato URI"}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"La convenci\xf3n de nomenclatura es AIRFLOW_CONN_CONN_ID, todo en may\xfasculas (tenga en cuenta los guiones bajos simples junto a CONN).\nSi su ID de conexi\xf3n es teradata_conn_id, el nombre de la variable debe ser AIRFLOW_CONN_TERADATA_CONN_ID"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"ejemplo-de-formato-json",children:"Ejemplo de formato JSON"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'export AIRFLOW_CONN_TERADATA_CONN_ID=\'{\n    "conn_type": "teradata",\n    "login": "teradata_user",\n    "password": "my-password",\n    "host": "my-host",\n    "schema": "my-schema",\n    "extra": {\n        "tmode": "TERA",\n        "sslmode": "verify-ca"\n    }\n}\'\n'})}),"\n",(0,i.jsx)(a.h2,{id:"ejemplo-de-formato-uri",children:"Ejemplo de formato URI"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"export AIRFLOW_CONN_TERADATA_CONN_ID='teradata://teradata_user:my-password@my-host/my-schema?tmode=TERA&sslmode=verify-ca'\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Consulte ",(0,i.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/connections/teradata.html",children:"Enlace de Teradata"})," para obtener informaci\xf3n detallada sobre la conexi\xf3n Teradata en Airflow."]}),"\n",(0,i.jsx)(a.h2,{id:"definir-un-dag-en-airflow",children:"Definir un DAG en Airflow"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"En Airflow, los DAG se definen como c\xf3digo Python."}),"\n",(0,i.jsx)(a.li,{children:"Cree un DAG como un archivo de Python como sample.py en el directorio DAG_FOLDER - $AIRFLOW_HOME/files/dags."}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-sql",children:'from datetime import datetime\nfrom airflow import DAG\nfrom airflow.providers.teradata.operators.teradata import TeradataOperator\nCONN_ID = "Teradata_TestConn"\nwith DAG(\n    dag_id="example_teradata_operator",\n    max_active_runs=1,\n    max_active_tasks=3,\n    catchup=False,\n    start_date=datetime(2023, 1, 1),\n) as dag:\n    create = TeradataOperator(\n        task_id="table_create",\n        conn_id=CONN_ID,\n        sql="""\n            CREATE TABLE my_users,\n            FALLBACK (\n                user_id decimal(10,0) NOT NULL GENERATED ALWAYS AS IDENTITY (\n                    START WITH 1\n                    INCREMENT BY 1\n                    MINVALUE 1\n                    MAXVALUE 2147483647\n                    NO CYCLE),\n                user_name VARCHAR(30)\n            ) PRIMARY INDEX (user_id);\n        """,\n    )\n'})}),"\n",(0,i.jsx)(a.h2,{id:"cargar-dag",children:"Cargar DAG"}),"\n",(0,i.jsx)(a.p,{children:"Airflow carga DAG desde archivos fuente de Python, que busca dentro de su directorio DAG_FOLDER - $AIRFLOW_HOME/files/dags configurado."}),"\n",(0,i.jsx)(a.h2,{id:"ejecutar-dag",children:"Ejecutar DAG"}),"\n",(0,i.jsx)(a.p,{children:"Los DAG se ejecutar\xe1n de dos maneras:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Cuando se activen manualmente o mediante la API"}),"\n",(0,i.jsxs)(a.li,{children:["En una programaci\xf3n definida, que se define como parte del DAG\n",(0,i.jsx)(a.code,{children:"example_teradata_operator"})," se define para activarse manualmente. Para definir una programaci\xf3n, cualquier valor de programaci\xf3n de ",(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Cron",children:"Crontab"})," v\xe1lida se puede pasar al argumento de programaci\xf3n."]}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-python",children:'with DAG(\n  dag_id="my_daily_dag",\n  schedule="0 0 * * *"\n  ) as dag:\n'})}),"\n",(0,i.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,i.jsxs)(a.p,{children:["Este tutorial demostr\xf3 c\xf3mo utilizar Airflow y el proveedor de Airflow Teradata con una instancia de Teradata Vantage. El DAG de ejemplo proporcionado crea la tabla ",(0,i.jsx)(a.code,{children:"my_users"})," en la instancia de Teradata Vantage definida en la interfaz de usuario de Connection."]}),"\n",(0,i.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/start.html",children:"Documentaci\xf3n de Airflow"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html",children:"DAG de Airflow"})}),"\n"]}),"\n",(0,i.jsx)(t.Ay,{})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},62344:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/airflow-connection-afc4c68b6bdf00a9e76c479b6f769b6c.png"},23420:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/airflow-newconnection-8406f78d94110c438752732154421c08.png"},28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>d});var i=n(96540);const r={},o=i.createContext(r);function t(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);