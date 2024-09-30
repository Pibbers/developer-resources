"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6130],{77692:(e,a,n)=>{n.d(a,{Ay:()=>c,RM:()=>t});var s=n(74848),i=n(28453);const t=[];function r(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{}),(0,s.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,s.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>c,RM:()=>t});var s=n(74848),i=n(28453);const t=[];function r(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{}),(0,s.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,s.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},30089:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var s=n(74848),i=n(28453),t=n(23961),r=n(77692);const c={sidebar_position:19,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"18 de marzo de 2024",description:"Incorporaci\xf3n y catalogaci\xf3n de datos desde Teradata Vantage a Amazon S3",keywords:["data warehouses","object storage","teradata","vantage","cloud data platform","data engineering","enterprise analytics","aws glue","aws lake formation","cat\xe1logo de aws glue"]},d="Incorporaci\xf3n y catalogaci\xf3n de datos desde Teradata Vantage a Amazon S3 con scripts de AWS Glue",o={id:"manage-data/ingest-catalog-data-teradata-s3-with-glue",title:"Incorporaci\xf3n y catalogaci\xf3n de datos desde Teradata Vantage a Amazon S3 con scripts de AWS Glue",description:"Incorporaci\xf3n y catalogaci\xf3n de datos desde Teradata Vantage a Amazon S3",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/ingest-catalog-data-teradata-s3-with-glue.md",sourceDirName:"manage-data",slug:"/manage-data/ingest-catalog-data-teradata-s3-with-glue",permalink:"/es/quickstarts/manage-data/ingest-catalog-data-teradata-s3-with-glue",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"18 de marzo de 2024",description:"Incorporaci\xf3n y catalogaci\xf3n de datos desde Teradata Vantage a Amazon S3",keywords:["data warehouses","object storage","teradata","vantage","cloud data platform","data engineering","enterprise analytics","aws glue","aws lake formation","cat\xe1logo de aws glue"]},sidebar:"tutorialSidebar",previous:{title:"Configurar una conexi\xf3n a Teradata Vantage en DataHub",permalink:"/es/quickstarts/manage-data/configure-a-teradata-vantage-connection-in-datahub"},next:{title:"Conectarse a Vantage mediante JDBC",permalink:"/es/quickstarts/create-applications/jdbc"}},l={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:3},{value:"Prerrequisitos",id:"prerrequisitos",level:3},...t.RM,{value:"Carga de datos de prueba",id:"carga-de-datos-de-prueba",level:3},{value:"Configuraci\xf3n de Amazon AWS",id:"configuraci\xf3n-de-amazon-aws",level:3},{value:"Creaci\xf3n de un dep\xf3sito de Amazon S3 para incorporar datos",id:"creaci\xf3n-de-un-dep\xf3sito-de-amazon-s3-para-incorporar-datos",level:3},{value:"Creaci\xf3n de una base de datos de cat\xe1logo de AWS Glue para almacenar metadatos",id:"creaci\xf3n-de-una-base-de-datos-de-cat\xe1logo-de-aws-glue-para-almacenar-metadatos",level:3},{value:"Almacenar credenciales de Teradata Vantage en AWS Secrets Manager",id:"almacenar-credenciales-de-teradata-vantage-en-aws-secrets-manager",level:3},{value:"Creaci\xf3n de un rol de servicio de AWS Glue para asignarlo a trabajos de ETL",id:"creaci\xf3n-de-un-rol-de-servicio-de-aws-glue-para-asignarlo-a-trabajos-de-etl",level:3},{value:"Crear una conexi\xf3n a una instancia de Teradata Vantage en AWS Glue",id:"crear-una-conexi\xf3n-a-una-instancia-de-teradata-vantage-en-aws-glue",level:3},{value:"Crear un trabajo de AWS Glue",id:"crear-un-trabajo-de-aws-glue",level:3},{value:"Redactar un script para la incorporaci\xf3n y catalogaci\xf3n automatizadas de datos de Teradata Vantage en Amazon S3",id:"redactar-un-script-para-la-incorporaci\xf3n-y-catalogaci\xf3n-automatizadas-de-datos-de-teradata-vantage-en-amazon-s3",level:3},{value:"Comprobaci\xf3n de los resultados",id:"comprobaci\xf3n-de-los-resultados",level:3},{value:"Resumen",id:"resumen",level:3},{value:"Lectura adicional",id:"lectura-adicional",level:3},...r.RM];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"incorporaci\xf3n-y-catalogaci\xf3n-de-datos-desde-teradata-vantage-a-amazon-s3-con-scripts-de-aws-glue",children:"Incorporaci\xf3n y catalogaci\xf3n de datos desde Teradata Vantage a Amazon S3 con scripts de AWS Glue"}),"\n",(0,s.jsx)(a.h3,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,s.jsx)(a.p,{children:"En este inicio r\xe1pido se detalla el proceso de incorporaci\xf3n y catalogaci\xf3n de datos de Teradata Vantage a Amazon S3 con AWS Glue."}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["Para incorporar datos en Amazon S3 cuando la catalogaci\xf3n no es un requisito, tenga en cuenta las ",(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/SQL-Data-Manipulation-Language/Working-with-External-Data/WRITE_NOS",children:"capacidades Write NOS de Teradata"}),"."]})}),"\n",(0,s.jsx)(a.h3,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Acceso a una ",(0,s.jsx)(a.a,{href:"https://aws.amazon.com",children:"cuenta de Amazon AWS"})]}),"\n",(0,s.jsxs)(a.li,{children:["Acceso a una instancia de Teradata Vantage","\n",(0,s.jsx)(t.Ay,{}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Una base de datos ",(0,s.jsx)(a.a,{href:"/es/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver",children:"cliente"})," para enviar consultas para cargar los datos de prueba"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"carga-de-datos-de-prueba",children:"Carga de datos de prueba"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"En su cliente de base de datos favorito, ejecute las siguientes consultas"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"CREATE DATABASE teddy_retailers_inventory\nAS PERMANENT = 110e6;\n\nCREATE TABLE teddy_retailers_inventory.source_catalog AS\n(\n  SELECT product_id, product_name, product_category, price_cents\n    FROM (\n\t\tLOCATION='/s3/dev-rel-demos.s3.amazonaws.com/demo-datamesh/source_products.csv') as products\n) WITH DATA;\n\nCREATE TABLE teddy_retailers_inventory.source_stock AS\n(\n  SELECT entry_id, product_id, product_quantity, purchase_price_cents, entry_date\n    FROM (\n\t\tLOCATION='/s3/dev-rel-demos.s3.amazonaws.com/demo-datamesh/source_stock.csv') as stock\n) WITH DATA;\n"})}),"\n",(0,s.jsx)(a.h3,{id:"configuraci\xf3n-de-amazon-aws",children:"Configuraci\xf3n de Amazon AWS"}),"\n",(0,s.jsx)(a.p,{children:"En esta secci\xf3n cubriremos en detalle cada uno de los pasos a continuaci\xf3n:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Creaci\xf3n de un dep\xf3sito de Amazon S3 para incorporar datos"}),"\n",(0,s.jsx)(a.li,{children:"Creaci\xf3n de una base de datos de cat\xe1logo de AWS Glue para almacenar metadatos"}),"\n",(0,s.jsx)(a.li,{children:"Almacenar credenciales de Teradata Vantage en AWS Secrets Manager"}),"\n",(0,s.jsx)(a.li,{children:"Creaci\xf3n de un rol de servicio de AWS Glue para asignarlo a trabajos de ETL"}),"\n",(0,s.jsx)(a.li,{children:"Crear una conexi\xf3n a una instancia de Teradata Vantage en AWS Glue"}),"\n",(0,s.jsx)(a.li,{children:"Crear un trabajo de AWS Glue"}),"\n",(0,s.jsx)(a.li,{children:"Redactar un script para la incorporaci\xf3n y catalogaci\xf3n automatizadas de datos de Teradata Vantage en Amazon S3"}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"creaci\xf3n-de-un-dep\xf3sito-de-amazon-s3-para-incorporar-datos",children:"Creaci\xf3n de un dep\xf3sito de Amazon S3 para incorporar datos"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["En Amazon S3, seleccione ",(0,s.jsx)(a.code,{children:"Create bucket"}),".\n",(0,s.jsx)(a.img,{alt:"crear un dep\xf3sito",src:n(30991).A+"",width:"1231",height:"218"})]}),"\n",(0,s.jsxs)(a.li,{children:["Asigne un nombre al dep\xf3sito y an\xf3telo.\n",(0,s.jsx)(a.img,{alt:"dar nombre a un dep\xf3sito",src:n(980).A+"",width:"812",height:"595"})]}),"\n",(0,s.jsx)(a.li,{children:"Deje todos los ajustes en sus valores predeterminados."}),"\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"Create bucket"}),".\n",(0,s.jsx)(a.img,{alt:"guardar el dep\xf3sito",src:n(30333).A+"",width:"814",height:"622"})]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"creaci\xf3n-de-una-base-de-datos-de-cat\xe1logo-de-aws-glue-para-almacenar-metadatos",children:"Creaci\xf3n de una base de datos de cat\xe1logo de AWS Glue para almacenar metadatos"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"En AWS Glue, seleccione Cat\xe1logo de datos, Bases de datos."}),"\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"Add database"}),".\n",(0,s.jsx)(a.img,{alt:"agregar base de datos",src:n(55638).A+"",width:"1283",height:"185"})]}),"\n",(0,s.jsxs)(a.li,{children:["Defina un nombre para la base de datos y haga clic en ",(0,s.jsx)(a.code,{children:"Create database"}),".\n",(0,s.jsx)(a.img,{alt:"agregar nombre de base de datos",src:n(24813).A+"",width:"1280",height:"497"})]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"almacenar-credenciales-de-teradata-vantage-en-aws-secrets-manager",children:"Almacenar credenciales de Teradata Vantage en AWS Secrets Manager"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["En AWS Secrets Manager, seleccione ",(0,s.jsx)(a.code,{children:"Create new secret"}),".\n",(0,s.jsx)(a.img,{alt:"crear secreto",src:n(24804).A+"",width:"1491",height:"156"})]}),"\n",(0,s.jsxs)(a.li,{children:["El secreto debe ser ",(0,s.jsx)(a.code,{children:"Other type of secret"})," con las siguientes claves y valores seg\xfan su instancia de Teradata Vantage:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"USER"}),"\n",(0,s.jsx)(a.li,{children:"PASSWORD"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsx)(a.p,{children:'En el caso de ClearScape Analytics Experience, el usuario siempre es "demo_user" y la contrase\xf1a es la que defini\xf3 al crear su entorno de ClearScape Analytics Experience.'})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"valores secretos",src:n(90783).A+"",width:"819",height:"744"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Asigne un nombre al secreto."}),"\n",(0,s.jsx)(a.li,{children:"El resto de los pasos se pueden dejar con los valores predeterminados."}),"\n",(0,s.jsx)(a.li,{children:"Cree el secreto."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"creaci\xf3n-de-un-rol-de-servicio-de-aws-glue-para-asignarlo-a-trabajos-de-etl",children:"Creaci\xf3n de un rol de servicio de AWS Glue para asignarlo a trabajos de ETL"}),"\n",(0,s.jsx)(a.p,{children:"El rol que cree debe tener acceso a los permisos t\xedpicos de un rol de servicio de Glue, pero tambi\xe9n acceso para leer el secreto y el dep\xf3sito S3 que haya creado."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"En AWS, vaya al servicio IAM."}),"\n",(0,s.jsxs)(a.li,{children:["En Gesti\xf3n de acceso, seleccione ",(0,s.jsx)(a.code,{children:"Roles"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["En los roles, haga clic en ",(0,s.jsx)(a.code,{children:"Create role"}),".\n",(0,s.jsx)(a.img,{alt:"crear rol",src:n(87856).A+"",width:"1234",height:"186"})]}),"\n",(0,s.jsxs)(a.li,{children:["En la selecci\xf3n de una entidad de confianza, seleccione ",(0,s.jsx)(a.code,{children:"AWS service"})," y elija ",(0,s.jsx)(a.code,{children:"Glue"})," en el men\xfa desplegable.\n",(0,s.jsx)(a.img,{alt:"tipo de rol",src:n(53003).A+"",width:"1244",height:"671"})]}),"\n",(0,s.jsxs)(a.li,{children:["En la adici\xf3n de permisos:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Busque ",(0,s.jsx)(a.code,{children:"AWSGlueServiceRole"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"Haga clic en la casilla de verificaci\xf3n correspondiente."}),"\n",(0,s.jsxs)(a.li,{children:["Busque ",(0,s.jsx)(a.code,{children:"SecretsManagerReadWrite"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"Haga clic en la casilla de verificaci\xf3n correspondiente."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["En la opci\xf3n para asignar nombre, revisar y crear:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Defina un nombre para el rol.\n",(0,s.jsx)(a.img,{alt:"asignar nombre al rol",src:n(52386).A+"",width:"1188",height:"756"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"Create role"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"Regrese a Administraci\xf3n de acceso, Roles y busque el rol que acaba de crear."}),"\n",(0,s.jsx)(a.li,{children:"Seleccione su rol."}),"\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"Add permissions"})," y posteriormente en ",(0,s.jsx)(a.code,{children:"Create inline policy"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"JSON"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"En el editor de pol\xedticas, pegue el objeto JSON a continuaci\xf3n, sustituyendo el nombre del dep\xf3sito que ha creado."}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "FullAccessToSpecificBucket",\n            "Effect": "Allow",\n            "Action": "s3:*",\n            "Resource": [1\n                "arn:aws:s3:::<bucket-name>",\n                "arn:aws:s3:::<bucket-name>/*"\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"Next"}),".\n",(0,s.jsx)(a.img,{alt:"pol\xedtica en l\xednea",src:n(85501).A+"",width:"1297",height:"742"})]}),"\n",(0,s.jsx)(a.li,{children:"Asigne un nombre a su pol\xedtica."}),"\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"Create policy"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"crear-una-conexi\xf3n-a-una-instancia-de-teradata-vantage-en-aws-glue",children:"Crear una conexi\xf3n a una instancia de Teradata Vantage en AWS Glue"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["En AWS Glue, seleccione ",(0,s.jsx)(a.code,{children:"Data connections"}),".\n",(0,s.jsx)(a.img,{alt:"conexi\xf3n",src:n(29167).A+"",width:"1084",height:"784"})]}),"\n",(0,s.jsxs)(a.li,{children:["En Conectores, seleccione ",(0,s.jsx)(a.code,{children:"Create connection"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Busque y seleccione la fuente de datos Teradata Vantage.\n",(0,s.jsx)(a.img,{alt:"tipo de teradata",src:n(38932).A+"",width:"1005",height:"382"})]}),"\n",(0,s.jsx)(a.li,{children:"En el cuadro de di\xe1logo, escriba la URL de su instancia de Teradata Vantage en formato JDBC."}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["En el caso de ClearScape Analytics Experience, la URL sigue la siguiente estructura:\n",(0,s.jsx)(a.code,{children:"jdbc:teradata://<URL Host>/DATABASE=demo_user,DBS_PORT=1025"})]})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Seleccione el secreto de AWS creado en el paso anterior."}),"\n",(0,s.jsxs)(a.li,{children:["Asigne un nombre a su conexi\xf3n y finalice el proceso de creaci\xf3n.\n",(0,s.jsx)(a.img,{alt:"configuraci\xf3n de la conexi\xf3n",src:n(4861).A+"",width:"818",height:"586"})]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"crear-un-trabajo-de-aws-glue",children:"Crear un trabajo de AWS Glue"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["En AWS Glue, seleccione ",(0,s.jsx)(a.code,{children:"ETL Jobs"})," y haga clic en ",(0,s.jsx)(a.code,{children:"Script editor"}),".\n",(0,s.jsx)(a.img,{alt:"creaci\xf3n de editor de scripts",src:n(45863).A+"",width:"1549",height:"277"})]}),"\n",(0,s.jsxs)(a.li,{children:["Seleccione ",(0,s.jsx)(a.code,{children:"Spark"})," como motor y elija comenzar desde el principio.\n",(0,s.jsx)(a.img,{alt:"tipo de editor de scripts",src:n(75692).A+"",width:"837",height:"355"})]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"redactar-un-script-para-la-incorporaci\xf3n-y-catalogaci\xf3n-automatizadas-de-datos-de-teradata-vantage-en-amazon-s3",children:"Redactar un script para la incorporaci\xf3n y catalogaci\xf3n automatizadas de datos de Teradata Vantage en Amazon S3"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Copie el siguiente script en el editor.","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["El script requiere las siguientes modificaciones:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Sustituya el nombre del dep\xf3sito S3."}),"\n",(0,s.jsx)(a.li,{children:"Sustituya el nombre del base de datos del cat\xe1logo de Glue."}),"\n",(0,s.jsx)(a.li,{children:"Si no est\xe1 siguiendo el ejemplo de la gu\xeda, modifique el nombre de la base de datos y las tablas que se van a incorporar y catalogar."}),"\n",(0,s.jsx)(a.li,{children:"Para fines de catalogaci\xf3n, en el ejemplo solo se incorpora la primera fila de cada tabla. Esta consulta se puede modificar para incorporar toda la tabla o para filtrar filas seleccionadas."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-python",metastring:', id="glue-script-first-run" role="emits-gtm-events"',children:'# Import section\nimport sys\nfrom awsglue.transforms import *\nfrom awsglue.utils import getResolvedOptions\nfrom pyspark.context import SparkContext\nfrom awsglue.context import GlueContext\nfrom awsglue.job import Job\nfrom pyspark.sql import SQLContext\n\n# PySpark Config Section\nargs = getResolvedOptions(sys.argv, ["JOB_NAME"])\nsc = SparkContext()\nglueContext = GlueContext(sc)\nspark = glueContext.spark_session\njob = Job(glueContext)\njob.init(args["JOB_NAME"], args)\n\n#ETL Job Parameters Section\n# Source database\ndatabase_name = "teddy_retailers_inventory"\n\n# Source tables\ntable_names = ["source_catalog","source_stock"]\n\n# Target S3 Bucket\ntarget_s3_bucket = "s3://<your-bucket-name>"\n\n#Target catalog database \ncatalog_database_name = "<your-catalog-database-name>" \n\n\n# Job function abstraction\ndef process_table(table_name, transformation_ctx_prefix, catalog_database, catalog_table_name):\n    dynamic_frame = glueContext.create_dynamic_frame.from_options(\n        connection_type="teradata",\n        connection_options={\n            "dbtable": table_name,\n            "connectionName": "Teradata connection default",\n            "query": f"SELECT TOP 1 * FROM {table_name}", # This line can be modified to ingest the full table or rows that fulfill an specific condition\n        },\n        transformation_ctx=transformation_ctx_prefix + "_read",\n    )\n\n    s3_sink = glueContext.getSink(\n        path=target_s3_bucket,\n        connection_type="s3",\n        updateBehavior="UPDATE_IN_DATABASE",\n        partitionKeys=[],\n        compression="snappy",\n        enableUpdateCatalog=True,\n        transformation_ctx=transformation_ctx_prefix + "_s3",\n    )\n    # Dynamically set catalog table name based on function parameter\n    s3_sink.setCatalogInfo(\n        catalogDatabase=catalog_database, catalogTableName=catalog_table_name\n    )\n    s3_sink.setFormat("csv")\n    s3_sink.writeFrame(dynamic_frame)\n\n\n# Job execution section\nfor table_name in table_names:\n    full_table_name = f"{database_name}.{table_name}"  \n    transformation_ctx_prefix = f"{database_name}_{table_name}"  \n    catalog_table_name = f"{table_name}_catalog"  \n    # Call your process_table function for each table\n    process_table(full_table_name, transformation_ctx_prefix, catalog_database_name, catalog_table_name)\n\njob.commit()\n'})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Asignar un nombre al script\n",(0,s.jsx)(a.img,{alt:"script en el editor",src:n(89653).A+"",width:"1311",height:"758"})]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"En Detalles del trabajo, Propiedades b\xe1sicas:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Seleccione el rol de IAM que cre\xf3 para el trabajo de ETL."}),"\n",(0,s.jsxs)(a.li,{children:['Para realizar pruebas, seleccione "2" como n\xfamero solicitado de trabajadores, es el m\xednimo permitido.\n',(0,s.jsx)(a.img,{alt:"configuraciones de script",src:n(4026).A+"",width:"617",height:"725"}),"\n* En ",(0,s.jsx)(a.code,{children:"Advanced properties"}),", ",(0,s.jsx)(a.code,{children:"Connections"})," seleccione su conexi\xf3n a Teradata Vantage."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsx)(a.p,{children:"Debe hacerse referencia dos veces a la conexi\xf3n creada: una en la configuraci\xf3n del trabajo y otra en el propio script."})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"conexi\xf3n de configuraci\xf3n de script",src:n(62051).A+"",width:"829",height:"532"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"Save"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.code,{children:"Run"}),".","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"El trabajo de ETL tarda un par de minutos en completarse, la mayor parte de este tiempo est\xe1 relacionado con el inicio del cl\xfaster Spark."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"comprobaci\xf3n-de-los-resultados",children:"Comprobaci\xf3n de los resultados"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Una vez finalizado el trabajo:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Vaya a Cat\xe1logo de datos, Bases de datos."}),"\n",(0,s.jsx)(a.li,{children:"Haga clic en la base de datos del cat\xe1logo que ha creado."}),"\n",(0,s.jsxs)(a.li,{children:["En esta ubicaci\xf3n, ver\xe1 las tablas extra\xeddas y catalogadas a trav\xe9s de su trabajo de ETL de Glue.\n",(0,s.jsx)(a.img,{alt:"tablas de resultados",src:n(72038).A+"",width:"1295",height:"447"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Todas las tablas incorporadas tambi\xe9n est\xe1n presentes como archivos comprimidos en S3. En raras ocasiones, estos archivos se consultar\xe1n directamente. Se pueden utilizar servicios como AWS Athena para consultar los archivos bas\xe1ndose en los metadatos del cat\xe1logo."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"resumen",children:"Resumen"}),"\n",(0,s.jsx)(a.p,{children:"En este inicio r\xe1pido se detalla el proceso de incorporaci\xf3n y catalogaci\xf3n de datos de Teradata Vantage a Amazon S3 con scripts de AWS Glue."}),"\n",(0,s.jsx)(a.h3,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"/es/quickstarts/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",children:"Integrar Teradata Vantage con Google Cloud Data Catalog"})}),"\n"]}),"\n","\n",(0,s.jsx)(r.Ay,{})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},30991:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Buckets-1-898de68879a5ef1ffeec900337a1dca3.PNG"},980:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Buckets-2-676aa2a38d845b652f97b395e8043163.PNG"},30333:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Buckets-3-12a07fc3c5b043f47096df1666b568a5.PNG"},55638:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Cat-1-4fc905b5ac49dc3b1e141c8426aad9e0.PNG"},24813:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Cat-2-30df5221aaee67adb25c6d90dc735e31.PNG"},29167:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Glue-1-598de7057f5a9d379aa5252a0da0580d.PNG"},38932:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Glue-2-8b424cc7304d19718c5a3c35d940f892.PNG"},4861:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Glue-3-7b0f1ee87f5c9899b751d37489859752.PNG"},45863:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Glue-script-1-24cb7e70f1de30c5fcaa52dc29d4b631.PNG"},75692:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Glue-script-2-e7f628836b7232063286bec34f25bc6c.PNG"},89653:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Glue-script-3-66e1374c8a98d95a489e0a0ec635aa2a.PNG"},4026:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Glue-script-4-5382e42dfa85e3ebb441a9d7fcd6a6ba.PNG"},62051:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Glue-script-5-07a9302e3014a8acfd9fd28a4e0303c2.PNG"},72038:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Results-cf1a1dd58c3e0a900b0c75e104d35f70.PNG"},87856:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Role-1-05d727aedab96ae96afdc6c47a1f0506.PNG"},53003:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Role-2-c0d5befbdb62b8a5e02e47ed0f43c2d5.PNG"},52386:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Role-3-075be68d4664c0cf1bd919bf4a65d41e.PNG"},85501:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/Role-4-a6d9e85e6ccc0168bde6e195e1883d93.PNG"},24804:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/secret-1-8e65560fa45ff42c87cc7f2c5b91489f.PNG"},90783:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/secret-2-41c84a8725cae02d8c916ebe445d63ff.PNG"},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>c});var s=n(96540);const i={},t=s.createContext(i);function r(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);