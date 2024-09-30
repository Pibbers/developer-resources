"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[472],{77692:(t,e,a)=>{a.d(e,{Ay:()=>o,RM:()=>i});var n=a(74848),s=a(28453);const i=[];function r(t){const e={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsx)(e.mdxAdmonitionTitle,{}),(0,n.jsxs)(e.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,n.jsx)(e.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function o(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}},23961:(t,e,a)=>{a.d(e,{Ay:()=>o,RM:()=>i});var n=a(74848),s=a(28453);const i=[];function r(t){const e={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsx)(e.mdxAdmonitionTitle,{}),(0,n.jsxs)(e.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,n.jsx)(e.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function o(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}},57377:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(74848),s=a(28453),i=a(23961),r=a(77692);const o={sidebar_position:5,id:"perform-time-series-analysis-using-teradata-vantage",author:"Remi Turpaud",email:"remi.turpaud@teradata.com",page_last_update:"15 de abril 2022",description:"Realizar an\xe1lisis de series temporales mediante Teradata Vantage",keywords:["data warehouses","analytics","teradata","vantage","time series","business intelligence","enterprise analytics","time series","time series analysis"]},d="Realizar an\xe1lisis de series temporales mediante Teradata Vantage",c={id:"analyze-data/perform-time-series-analysis-using-teradata-vantage",title:"Realizar an\xe1lisis de series temporales mediante Teradata Vantage",description:"Realizar an\xe1lisis de series temporales mediante Teradata Vantage",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/analyze-data/perform-time-series-analysis-using-teradata-vantage.md",sourceDirName:"analyze-data",slug:"/analyze-data/perform-time-series-analysis-using-teradata-vantage",permalink:"/es/quickstarts/analyze-data/perform-time-series-analysis-using-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"perform-time-series-analysis-using-teradata-vantage",author:"Remi Turpaud",email:"remi.turpaud@teradata.com",page_last_update:"15 de abril 2022",description:"Realizar an\xe1lisis de series temporales mediante Teradata Vantage",keywords:["data warehouses","analytics","teradata","vantage","time series","business intelligence","enterprise analytics","time series","time series analysis"]},sidebar:"tutorialSidebar",previous:{title:"Ejecutar scripts en Vantage",permalink:"/es/quickstarts/analyze-data/sto"},next:{title:"ModelOps: importar e implementar su primer modelo BYOM",permalink:"/es/quickstarts/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-byom"}},l={},p=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...i.RM,{value:"Importar conjuntos de datos desde AWS S3 mediante Vantage NOS",id:"importar-conjuntos-de-datos-desde-aws-s3-mediante-vantage-nos",level:2},{value:"Operaciones b\xe1sicas de series temporales",id:"operaciones-b\xe1sicas-de-series-temporales",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...r.RM];function m(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"realizar-an\xe1lisis-de-series-temporales-mediante-teradata-vantage",children:"Realizar an\xe1lisis de series temporales mediante Teradata Vantage"}),"\n",(0,n.jsx)(e.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,n.jsx)(e.p,{children:"Las series temporales son series de puntos de datos indexados en orden temporal. Son datos producidos y recopilados continuamente por una amplia gama de aplicaciones y dispositivos, incluido, entre otros, el Internet de las cosas. Teradata Vantage ofrece varias funcionalidades para simplificar el an\xe1lisis de datos de las series temporales."}),"\n",(0,n.jsx)(e.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,n.jsx)(e.p,{children:"Necesita acceso a una instancia de Teradata Vantage. Las funcionalidades de serie temporal y NOS est\xe1n habilitadas en todas las ediciones de Vantage, desde Vantage Express hasta Developer, DYI y Vantage as a Service a partir de la versi\xf3n 17.10."}),"\n",(0,n.jsx)(i.Ay,{}),"\n",(0,n.jsx)(e.h2,{id:"importar-conjuntos-de-datos-desde-aws-s3-mediante-vantage-nos",children:"Importar conjuntos de datos desde AWS S3 mediante Vantage NOS"}),"\n",(0,n.jsx)(e.p,{children:"Nuestros conjuntos de datos de muestra est\xe1n disponibles en el dep\xf3sito S3 y se puede acceder a ellos desde Vantage directamente usando Vantage NOS. Los datos est\xe1n en formato CSV y los incorporaremos a Vantage para nuestro an\xe1lisis de series temporales."}),"\n",(0,n.jsx)(e.p,{children:"Echemos un vistazo primero a los datos. La siguiente consulta recuperar\xe1 10 filas del dep\xf3sito S3."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT TOP 10 * FROM (\n\tLOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'\n) AS d;\n"})}),"\n",(0,n.jsx)(e.p,{children:"Esto es lo que tenemos:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\nLocation\t\t\t\t\t        \t\tvendor_id\tpickup_datetime\t\tdropoff_datetime\tpassenger_count\t\ttrip_distance\t\tpickup_longitude\t        pickup_latitude\t\trate_code\tstore_and_fwd_flag\tdropoff_longitude\tdropoff_latitude\tpayment_type\tfare_amount\tsurcharge\tmta_tax\t\ttip_amount\ttolls_amount\ttotal_amount\n------------------------------------------------------------------\t---------\t-----------------\t-----------------\t----------------\t--------------\t\t-----------------\t\t----------------\t----------\t-------------------\t------------------\t-----------------\t-------------\t------------\t----------\t--------\t----------\t------------\t------------\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 15:18\t25/11/2013 15:33\t1\t\t\t1\t\t\t-73.992423\t\t\t40.749517\t\t1\t\tN \t\t\t-73.98816\t\t40.746557\t\tCRD   \t\t10\t\t0\t\t0.5\t\t2.22\t\t0\t\t12.72\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 5:34\t\t25/11/2013 5:48\t\t1\t\t\t3.6\t\t\t-73.971555\t\t\t40.794548\t\t1\t\tN \t\t\t-73.975399\t\t40.755404\t\tCRD   \t\t14.5\t\t0.5\t\t0.5\t\t1\t\t0\t\t16.5\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 8:31\t\t25/11/2013 8:55\t\t1\t\t\t5.9\t\t\t-73.94764\t\t\t40.830465\t\t1\t\tN \t\t\t-73.972323\t\t40.76332\t\tCRD   \t\t21\t\t0\t\t0.5\t\t3\t\t0\t\t24.5\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 7:00\t\t25/11/2013 7:04\t\t1\t\t\t1.2\t\t\t-73.983357\t\t\t40.767193\t\t1\t\tN \t\t\t-73.978394\t\t40.75558\t\tCRD   \t\t5.5\t\t0\t\t0.5\t\t1\t\t0\t\t7\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 15:24\t25/11/2013 15:30\t1\t\t\t0.5\t\t\t-73.982313\t\t\t40.764827\t\t1\t\tN \t\t\t-73.982129\t\t40.758889\t\tCRD   \t\t5.5\t\t0\t\t0.5\t\t3\t\t0\t\t9\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 15:53\t25/11/2013 16:00\t1\t\t\t0.6\t\t\t-73.978104\t\t\t40.752966\t\t1\t\tN \t\t\t-73.985756\t\t40.762685\t\tCRD   \t\t6\t\t1\t\t0.5\t\t1\t\t0\t\t8.5\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 6:49\t\t25/11/2013 7:04\t\t1\t\t\t3.8\t\t\t-73.976005\t\t\t40.744481\t\t1\t\tN \t\t\t-74.016063\t\t40.717298\t\tCRD   \t\t14\t\t0\t\t0.5\t\t2.9\t\t0\t\t17.4\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 21:20\t25/11/2013 21:26\t1\t\t\t1.1\t\t\t-73.946371\t\t\t40.775369\t\t1\t\tN \t\t\t-73.95309\t\t40.785103\t\tCRD   \t\t6.5\t\t0.5\t\t0.5\t\t1.5\t\t0\t\t9\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 10:02\t25/11/2013 10:17\t1\t\t\t2.2\t\t\t-73.952625\t\t\t40.780962\t\t1\t\tN \t\t\t-73.98163\t\t40.777978\t\tCRD   \t\t12\t\t0\t\t0.5\t\t2\t\t0\t\t14.5\n/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv\tCMT   \t\t25/11/2013 9:43\t\t25/11/2013 10:02\t1\t\t\t3.3\t\t\t-73.982013\t\t\t40.762507\t\t1\t\tN \t\t\t-74.006854\t\t40.719582\t\tCRD   \t\t15\t\t0\t\t0.5\t\t2\t\t0\t\t17.5\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"Extraigamos los datos completos y llev\xe9moslos a Vantage para su posterior an\xe1lisis."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\nCREATE TABLE trip\n(\n  vendor_id varchar(10) character set latin NOT casespecific,\n  rate_code          integer,\n  pickup_datetime timestamp(6),\n  dropoff_datetime timestamp(6),\n  passenger_count   smallint,\n  trip_distance float,\n  pickup_longitude float,\n  pickup_latitude float,\n  dropoff_longitude float,\n  dropoff_latitude float\n)\nNO PRIMARY INDEX ;\n\n\n\nINSERT INTO trip\nSELECT TOP 200000 vendor_id ,\n  rate_code,\n  pickup_datetime,\n  dropoff_datetime ,\n  passenger_count,\n   trip_distance ,\n  pickup_longitude,\n  pickup_latitude ,\n  dropoff_longitude ,\n  dropoff_latitude FROM (\n\tLOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'\n) AS d;\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"Resultado:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"200000 rows affected.\n"})}),"\n",(0,n.jsx)(e.p,{children:"Vantage ahora obtendr\xe1 los datos de S3 y los insertar\xe1 en la tabla de viajes que acabamos de crear."}),"\n",(0,n.jsx)(e.h2,{id:"operaciones-b\xe1sicas-de-series-temporales",children:"Operaciones b\xe1sicas de series temporales"}),"\n",(0,n.jsx)(e.p,{children:"Ahora que estamos familiarizados con el conjunto de datos, podemos utilizar las capacidades de Vantage para analizarlo r\xe1pidamente. Primero, identifiquemos cu\xe1ntos pasajeros se recogen por hora en el mes de noviembre."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\nSELECT TOP 10\n\t$TD_TIMECODE_RANGE\n\t,begin($TD_TIMECODE_RANGE) time_bucket_start\n\t,sum(passenger_count) passenger_count\nFROM trip\nWHERE extract(month from pickup_datetime)=11\nGROUP BY TIME(HOURS(1))\nUSING TIMECODE(pickup_datetime)\nORDER BY 1;\n\n"})}),"\n",(0,n.jsxs)(e.p,{children:["Para obtener m\xe1s informaci\xf3n sobre ",(0,n.jsx)(e.a,{href:"https://www.docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Time-Series-Aggregates-and-SELECT-Extensions/GROUP-BY-TIME-Clause",children:"GROUP BY TIME"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"Resultado:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"TIMECODE_RANGE\t\t\t\t\t\t\ttime_bucket_start\t\t\tpassenger_count\n---------------------------------------------------------\t---------------------------------\t----------------\n(2013-11-04 11:00:00.000000, 2013-11-04 12:00:00.000000)\t2013-11-04 11:00:00.000000-05:00\t4\n(2013-11-04 12:00:00.000000, 2013-11-04 13:00:00.000000)\t2013-11-04 12:00:00.000000-05:00\t2\n(2013-11-04 14:00:00.000000, 2013-11-04 15:00:00.000000)\t2013-11-04 14:00:00.000000-05:00\t5\n(2013-11-04 15:00:00.000000, 2013-11-04 16:00:00.000000)\t2013-11-04 15:00:00.000000-05:00\t2\n(2013-11-04 16:00:00.000000, 2013-11-04 17:00:00.000000)\t2013-11-04 16:00:00.000000-05:00\t9\n(2013-11-04 17:00:00.000000, 2013-11-04 18:00:00.000000)\t2013-11-04 17:00:00.000000-05:00\t11\n(2013-11-04 18:00:00.000000, 2013-11-04 19:00:00.000000)\t2013-11-04 18:00:00.000000-05:00\t41\n(2013-11-04 19:00:00.000000, 2013-11-04 20:00:00.000000)\t2013-11-04 19:00:00.000000-05:00\t2791\n(2013-11-04 20:00:00.000000, 2013-11-04 21:00:00.000000)\t2013-11-04 20:00:00.000000-05:00\t15185\n(2013-11-04 21:00:00.000000, 2013-11-04 22:00:00.000000)\t2013-11-04 21:00:00.000000-05:00\t27500\n\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"S\xed, esto tambi\xe9n se puede lograr extrayendo la hora del tiempo y luego agreg\xe1ndola; es c\xf3digo/trabajo adicional, pero se puede hacer sin una funcionalidad espec\xedfica de la serie temporal."}),"\n",(0,n.jsx)(e.p,{children:"Pero ahora vayamos un paso m\xe1s all\xe1 para identificar cu\xe1ntos pasajeros est\xe1n siendo recogidos y cu\xe1l es la duraci\xf3n promedio del viaje por proveedor cada 15 minutos en noviembre."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT TOP 10\n    $TD_TIMECODE_RANGE,\n    vendor_id,\n    SUM(passenger_count),\n    AVG((dropoff_datetime - pickup_datetime ) MINUTE (4)) AS avg_trip_time_in_mins\nFROM trip\nGROUP BY TIME (MINUTES(15) AND vendor_id)\nUSING TIMECODE(pickup_datetime)\nWHERE EXTRACT(MONTH FROM pickup_datetime)=11\nORDER BY 1,2;\n"})}),"\n",(0,n.jsx)(e.p,{children:"Resultado:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\nTIMECODE_RANGE\t\t\t\t\t\t\tvendor_id\tpassenger_count\t\tavg_trip_time_in_mins\n--------------------------------------------------------\t----------\t----------------\t----------------------\n(2013-11-04 11:00:00.000000, 2013-11-04 11:15:00.000000)\tVTS\t\t1\t\t\t16\n(2013-11-04 11:15:00.000000, 2013-11-04 11:30:00.000000)\tVTS\t\t1\t\t\t10\n(2013-11-04 11:45:00.000000, 2013-11-04 12:00:00.000000)\tVTS\t\t2\t\t\t6\n(2013-11-04 12:00:00.000000, 2013-11-04 12:15:00.000000)\tVTS\t\t1\t\t\t11\n(2013-11-04 12:15:00.000000, 2013-11-04 12:30:00.000000)\tVTS\t\t1\t\t\t57\n(2013-11-04 14:15:00.000000, 2013-11-04 14:30:00.000000)\tVTS\t\t1\t\t\t3\n(2013-11-04 14:30:00.000000, 2013-11-04 14:45:00.000000)\tVTS\t\t2\t\t\t19\n(2013-11-04 14:45:00.000000, 2013-11-04 15:00:00.000000)\tVTS\t\t2\t\t\t9\n(2013-11-04 15:15:00.000000, 2013-11-04 15:30:00.000000)\tVTS\t\t1\t\t\t11\n(2013-11-04 15:30:00.000000, 2013-11-04 15:45:00.000000)\tVTS\t\t1\t\t\t31\n\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"Este es el poder de la funcionalidad de series temporales de Vantage. Sin necesidad de una l\xf3gica complicada y engorrosa, podemos encontrar la duraci\xf3n promedio del viaje por proveedor cada 15 minutos simplemente modificando la cl\xe1usula de grupo por tiempo. Veamos ahora lo sencillo que es construir medias m\xf3viles basadas en esto. Primero, comencemos creando una vista como se muestra a continuaci\xf3n."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"REPLACE VIEW NYC_taxi_trip_ts as\nSELECT\n\t$TD_TIMECODE_RANGE time_bucket_per\n\t,vendor_id\n\t,sum(passenger_count) passenger_cnt\n\t,avg(CAST((dropoff_datetime - pickup_datetime MINUTE(4) ) AS INTEGER))  avg_trip_time_in_mins\nFROM trip\nGROUP BY TIME (MINUTES(15) and vendor_id)\nUSING TIMECODE(pickup_datetime)\nWHERE extract(month from pickup_datetime)=11\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"Calculemos un promedio m\xf3vil de 2 horas en nuestra serie temporal de 15 minutos. 2 horas son per\xedodos de 8 * 15 minutos."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM MovingAverage (\n  ON NYC_taxi_trip_ts PARTITION BY vendor_id ORDER BY time_bucket_per\n  USING\n  MAvgType ('S')\n  WindowSize (8)\n  TargetColumns ('passenger_cnt')\n) AS dt\nWHERE begin(time_bucket_per)(date) = '2014-11-25'\nORDER BY vendor_id, time_bucket_per;\n"})}),"\n",(0,n.jsx)(e.p,{children:"Resultado:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"\ntime_bucket_per\t\t\t\t\t\t\tvendor_id\tpassenger_cnt\t\tavg_trip_time_in_mins\tpassenger_cnt_smavg\n---------------------------------------------------------\t--------------\t----------------------\t--------------------\t--------------------\n(2013-11-04 14:45:00.000000, 2013-11-04 15:00:00.000000)\tVTS\t\t2\t\t\t9\t\t\t1.375\n(2013-11-04 15:15:00.000000, 2013-11-04 15:30:00.000000)\tVTS\t\t1\t\t\t11\t\t\t1.375\n(2013-11-04 15:30:00.000000, 2013-11-04 15:45:00.000000)\tVTS\t\t1\t\t\t31\t\t\t1.375\n(2013-11-04 16:15:00.000000, 2013-11-04 16:30:00.000000)\tVTS\t\t2\t\t\t16\t\t\t1.375\n(2013-11-04 16:30:00.000000, 2013-11-04 16:45:00.000000)\tVTS\t\t1\t\t\t3\t\t\t1.375\n(2013-11-04 16:45:00.000000, 2013-11-04 17:00:00.000000)\tVTS\t\t6\t\t\t38\t\t\t2\n(2013-11-04 17:15:00.000000, 2013-11-04 17:30:00.000000)\tVTS\t\t2\t\t\t29.5\t\t\t2.125\n(2013-11-04 17:45:00.000000, 2013-11-04 18:00:00.000000)\tVTS\t\t9\t\t\t20.33333333\t\t3\n(2013-11-04 18:00:00.000000, 2013-11-04 18:15:00.000000)\tVTS\t\t6\t\t\t23.4\t\t\t3.5\n(2013-11-04 18:15:00.000000, 2013-11-04 18:30:00.000000)\tVTS\t\t4\t\t\t15.66666667\t\t3.875\n(2013-11-04 18:30:00.000000, 2013-11-04 18:45:00.000000)\tVTS\t\t8\t\t\t24.5\t\t\t4.75\n(2013-11-04 18:45:00.000000, 2013-11-04 19:00:00.000000)\tVTS\t\t23\t\t\t38.33333333\t\t7.375\n(2013-11-04 19:00:00.000000, 2013-11-04 19:15:00.000000)\tVTS\t\t195\t\t\t26.61538462\t\t31.625\n(2013-11-04 19:15:00.000000, 2013-11-04 19:30:00.000000)\tVTS\t\t774\t\t\t13.70083102\t\t127.625\n(2013-11-04 19:30:00.000000, 2013-11-04 19:45:00.000000)\tVTS\t\t586\t\t\t12.38095238\t\t200.625\n(2013-11-04 19:45:00.000000, 2013-11-04 20:00:00.000000)\tVTS\t\t1236\t\t\t15.54742097\t\t354\n(2013-11-04 20:00:00.000000, 2013-11-04 20:15:00.000000)\tVTS\t\t3339\t\t\t11.78947368\t\t770.625\n(2013-11-04 20:15:00.000000, 2013-11-04 20:30:00.000000)\tVTS\t\t3474\t\t\t10.5603396\t\t1204.375\n(2013-11-04 20:30:00.000000, 2013-11-04 20:45:00.000000)\tVTS\t\t3260\t\t\t12.26484323\t\t1610.875\n(2013-11-04 20:45:00.000000, 2013-11-04 21:00:00.000000)\tVTS\t\t5112\t\t\t12.05590062\t\t2247\n\n\n\n"})}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsx)(e.p,{children:"Adem\xe1s de las operaciones de series temporales anteriores, Vantage tambi\xe9n proporciona tablas de series temporales especiales con \xedndice de tiempo primario (Primary Time Index, PTI). Estas son tablas Vantage regulares con PTI definido en lugar de un \xedndice primario (Primary Index, PI). Aunque las tablas con PTI no son obligatorias para las funciones/operaciones de series temporales, PTI optimiza la forma en que se almacenan f\xedsicamente los datos de las series temporales y, por lo tanto, mejora considerablemente el rendimiento en comparaci\xf3n con las tablas normales."})}),"\n",(0,n.jsx)(e.h2,{id:"resumen",children:"Resumen"}),"\n",(0,n.jsx)(e.p,{children:"En este inicio r\xe1pido, hemos aprendido lo f\xe1cil que es analizar conjuntos de datos de series temporales utilizando las capacidades de series temporales de Vantage."}),"\n",(0,n.jsx)(e.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Introduction-to-Teradata-Time-Series-Tables-and-Operations",children:"Teradata Vantage\u2122: operaciones y tablas de series temporales"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/es/quickstarts/manage-data/nos",children:"Consultar datos almacenados en el almacenamiento de objetos"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root",children:"Teradata Vantage\u2122: Gu\xeda de introducci\xf3n a Native Object Storage"})}),"\n"]}),"\n",(0,n.jsx)(r.Ay,{})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(m,{...t})}):m(t)}},28453:(t,e,a)=>{a.d(e,{R:()=>r,x:()=>o});var n=a(96540);const s={},i=n.createContext(s);function r(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);