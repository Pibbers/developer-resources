"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2809],{41269:(e,t,a)=>{a.d(t,{Ay:()=>o,RM:()=>s});var n=a(74848),r=a(28453);const s=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},62680:(e,t,a)=>{a.d(t,{Ay:()=>o,RM:()=>s});var n=a(74848),r=a(28453);const s=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},33210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=a(74848),r=a(28453),s=a(62680),i=a(41269);const o={sidebar_position:6,author:"Mohammmad Taha Wahab, Mohammad Harris Mansur and Will Fleury",email:"mohammadtaha.wahab@teradata.com , mohammadharris.mansur@teradata.com and will.fleury@teradata.com",page_last_update:"January 5th, 2023",description:"Feast Enterprise Feature Store Connector with Teradata",keywords:["data warehouses","analytics","teradata","vantage","time series","business intelligence","enterprise analytics","feature store","Feast","connector"]},d="Build a FEAST feature store in Teradata Vantage",l={id:"manage-data/using-feast-feature-store-with-teradata-vantage",title:"Build a FEAST feature store in Teradata Vantage",description:"Feast Enterprise Feature Store Connector with Teradata",source:"@site/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/using-feast-feature-store-with-teradata-vantage",permalink:"/pr-preview/pr-126/fr/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,author:"Mohammmad Taha Wahab, Mohammad Harris Mansur and Will Fleury",email:"mohammadtaha.wahab@teradata.com , mohammadharris.mansur@teradata.com and will.fleury@teradata.com",page_last_update:"January 5th, 2023",description:"Feast Enterprise Feature Store Connector with Teradata",keywords:["data warehouses","analytics","teradata","vantage","time series","business intelligence","enterprise analytics","feature store","Feast","connector"]},sidebar:"tutorialSidebar",previous:{title:"Advanced dbt use cases with Teradata Vantage",permalink:"/pr-preview/pr-126/fr/quickstarts/manage-data/advanced-dbt"},next:{title:"Use dbt and FEAST to build a feature store in Teradata Vantage",permalink:"/pr-preview/pr-126/fr/quickstarts/manage-data/getting-started-dbt-feast-teradata-pipeline"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Offline Store Config",id:"offline-store-config",level:2},{value:"Repo Definition",id:"repo-definition",level:2},{value:"Offline Store Usage",id:"offline-store-usage",level:2},{value:"Online Store",id:"online-store",level:2},{value:"Online Store Config",id:"online-store-config",level:2},{value:"Online Store Usage",id:"online-store-usage",level:2},{value:"How to set SQL Registry",id:"how-to-set-sql-registry",level:2},{value:"Further reading",id:"further-reading",level:2},...i.RM];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"build-a-feast-feature-store-in-teradata-vantage",children:"Build a FEAST feature store in Teradata Vantage"}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Feast's connector for Teradata is a complete implementation with support for all features and uses Teradata Vantage as an online and offline store."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"Access to a Teradata Vantage instance."}),"\n","\n",(0,n.jsx)(s.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This how-to assumes you know Feast terminology. If you need a refresher check out the official ",(0,n.jsx)(t.a,{href:"https://docs.feast.dev",children:"FEAST documentation"})]}),"\n",(0,n.jsxs)(t.p,{children:["This document demonstrates how developers can integrate ",(0,n.jsx)(t.code,{children:"Teradata's offline and online store"})," with Feast. Teradata's offline stores allow users to use any underlying data store as their offline feature store. Features can be retrieved from the offline store for model training and can be materialized into the online feature store for use during model inference."]}),"\n",(0,n.jsxs)(t.p,{children:["On the other hand, online stores are used to serve features at low latency. The ",(0,n.jsx)(t.code,{children:"materialize"})," command can be used to load feature values from the data sources (or offline stores) into the online store"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"feast-teradata"})," library adds support for Teradata as"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"OfflineStore"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"OnlineStore"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, using Teradata as the registry (catalog) is already supported via the ",(0,n.jsx)(t.code,{children:"registry_type: sql"})," and included in our examples. This means that everything is located in Teradata. However, depending on the requirements, installation, etc, this can be mixed and matched with other systems as appropriate."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(t.p,{children:["To get started, install the ",(0,n.jsx)(t.code,{children:"feast-teradata"})," library"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:', id="feast_pip_install", role="emits-gtm-events"',children:"pip install feast-teradata\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Let's create a simple feast setup with Teradata using the standard drivers' dataset. Note that you cannot use ",(0,n.jsx)(t.code,{children:"feast init"})," as this command only works for templates that are part of the core feast library. We intend on getting this library merged into feast core eventually but for now, you will need to use the following cli command for this specific task. All other ",(0,n.jsx)(t.code,{children:"feast"})," cli commands work as expected."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"feast-td init-repo\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will then prompt you for the required information for the Teradata system and upload the example dataset. Let's assume you used the repo name ",(0,n.jsx)(t.code,{children:"demo"})," when running the above command. You can find the repository files along with a file called ",(0,n.jsx)(t.code,{children:"test_workflow.py"}),". Running this ",(0,n.jsx)(t.code,{children:"test_workflow.py"})," will execute a complete workflow for the feast with Teradata as the Registry, OfflineStore, and OnlineStore."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"demo/\n    feature_repo/\n        driver_repo.py\n        feature_store.yml\n    test_workflow.py\n"})}),"\n",(0,n.jsxs)(t.p,{children:["From within the ",(0,n.jsx)(t.code,{children:"demo/feature_repo"})," directory, execute the following feast command to apply (import/update) the repo definition into the registry. You will be able to see the registry metadata tables in the teradata database after running this command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"feast apply\n"})}),"\n",(0,n.jsx)(t.p,{children:"To see the registry information in the feast UI, run the following command. Note the --registry_ttl_sec is important as by default it polls every 5 seconds."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"feast ui --registry_ttl_sec=120\n"})}),"\n",(0,n.jsx)(t.h2,{id:"offline-store-config",children:"Offline Store Config"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"\nproject: <name of project>\nregistry: <registry>\nprovider: local\noffline_store:\n   type: feast_teradata.offline.teradata.TeradataOfflineStore\n   host: <db host>\n   database: <db name>\n   user: <username>\n   password: <password>\n   log_mech: <connection mechanism>\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"repo-definition",children:"Repo Definition"}),"\n",(0,n.jsx)(t.p,{children:"Below is an example of definition.py which elaborates how\nto set the entity, source connector, and feature view."}),"\n",(0,n.jsx)(t.p,{children:"Now to explain the different components:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TeradataSource:"})," Data Source for features stored in Teradata (Enterprise or Lake) or accessible via a Foreign Table from Teradata (NOS, QueryGrid)"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Entity:"})," A collection of semantically related features"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Feature View:"})," A feature view is a group of feature data from a specific data source. Feature views allow you to consistently define features and their data sources, enabling the reuse of feature groups across a project"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'driver = Entity(name="driver", join_keys=["driver_id"])\nproject_name = yaml.safe_load(open("feature_store.yaml")]("project"]\n\ndriver_stats_source = TeradataSource(\n    database=yaml.safe_load(open("feature_store.yaml")]("offline_store"]["database"],\n    table=f"{project_name}_feast_driver_hourly_stats",\n    timestamp_field="event_timestamp",\n    created_timestamp_column="created",\n)\n\ndriver_stats_fv = FeatureView(\n    name="driver_hourly_stats",\n    entities=[driver],\n    ttl=timedelta(weeks=52 * 10),\n    schema=[\n        Field(name="driver_id", dtype=Int64),\n        Field(name="conv_rate", dtype=Float32),\n        Field(name="acc_rate", dtype=Float32),\n        Field(name="avg_daily_trips", dtype=Int64),\n    ],\n    source=driver_stats_source,\n    tags={"team": "driver_performance"},\n)\n\n'})}),"\n",(0,n.jsx)(t.h2,{id:"offline-store-usage",children:"Offline Store Usage"}),"\n",(0,n.jsx)(t.p,{children:"There are two different ways to test your offline store as explained below. But first, there are a few mandatory steps to follow:"}),"\n",(0,n.jsxs)(t.p,{children:["Now, let's batch-read some features for training, using only entities (population) for which we have seen an event in the last ",(0,n.jsx)(t.code,{children:"60"})," days. The predicates (filter) used can be on anything relevant for the entity (population) selection for the given training dataset. The ",(0,n.jsx)(t.code,{children:"event_timestamp"})," is only for example purposes."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'\nfrom feast import FeatureStore\nstore = FeatureStore(repo_path="feature_repo")\ntraining_df = store.get_historical_features(\n    entity_df=f"""\n            SELECT\n                driver_id,\n                event_timestamp\n            FROM demo_feast_driver_hourly_stats\n            WHERE event_timestamp BETWEEN (CURRENT_TIMESTAMP - INTERVAL \'60\' DAY) AND CURRENT_TIMESTAMP\n        """,\n    features=[\n        "driver_hourly_stats:conv_rate",\n        "driver_hourly_stats:acc_rate",\n        "driver_hourly_stats:avg_daily_trips"\n    ],\n).to_df()\nprint(training_df.head())\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"feast-teradata"})," library allows you to use the complete set of feast APIs and functionality. Please refer to the official feast ",(0,n.jsx)(t.a,{href:"https://docs.feast.dev/getting-started/quickstart",children:"quickstart"})," for more details on the various things you can do."]}),"\n",(0,n.jsx)(t.h2,{id:"online-store",children:"Online Store"}),"\n",(0,n.jsx)(t.p,{children:"Feast materializes data to online stores for low-latency lookup at model inference time. Typically, key-value stores are used for online stores, however, relational databases can be used for this purpose as well."}),"\n",(0,n.jsx)(t.p,{children:"Users can develop their own online stores by creating a class that implements the contract in the OnlineStore class."}),"\n",(0,n.jsx)(t.h2,{id:"online-store-config",children:"Online Store Config"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"project: <name of project>\nregistry: <registry>\nprovider: local\noffline_store:\n   type: feast_teradata.offline.teradata.TeradataOfflineStore\n   host: <db host>\n   database: <db name>\n   user: <username>\n   password: <password>\n   log_mech: <connection mechanism>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"online-store-usage",children:"Online Store Usage"}),"\n",(0,n.jsx)(t.p,{children:"There are a few mandatory steps to follow before we can test the online store:"}),"\n",(0,n.jsxs)(t.p,{children:["The command ",(0,n.jsx)(t.code,{children:"materialize_incremental"})," is used to incrementally materialize features in the online store. If there are no new features to be added, this command will essentially not be doing anything. With feast ",(0,n.jsx)(t.code,{children:"materialize_incremental"}),", the start time is either now \u2014 ttl (the ttl that we defined in our feature views) or the time of the most recent materialization. If you\u2019ve materialized features at least once, then subsequent materializations will only fetch features that weren\u2019t present in the store at the time of the previous materializations."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"CURRENT_TIME=$(date +'%Y-%m-%dT%H:%M:%S')\nfeast materialize-incremental $CURRENT_TIME\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Next, while fetching the online features, we have two parameters ",(0,n.jsx)(t.code,{children:"features"})," and ",(0,n.jsx)(t.code,{children:"entity_rows"}),". The ",(0,n.jsx)(t.code,{children:"features"})," parameter is a list and can take any number of features that are present in the ",(0,n.jsx)(t.code,{children:"df_feature_view"}),". The example above shows all 4 features present but these can be less than 4 as well. Secondly, the ",(0,n.jsx)(t.code,{children:"entity_rows"})," parameter is also a list and takes a dictionary of the form ",(0,n.jsx)(t.code,{children:"{feature_identifier_column: value_to_be_fetched}"}),". In our case, the column driver_id is used to uniquely identify the different rows of the entity driver. We are currently fetching values of the features where driver_id is equal to 5. We can also fetch multiple such rows using the format: ",(0,n.jsx)(t.code,{children:"[{driver_id: val_1}, {driver_id: val_2}, .., {driver_id: val_n}] [{driver_id: val_1}, {driver_id: val_2}, .., {driver_id: val_n}]"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'entity_rows = [\n        {\n            "driver_id": 1001,\n        },\n        {\n            "driver_id": 1002,\n        },\n    ]\nfeatures_to_fetch = [\n            "driver_hourly_stats:acc_rate",\n            "driver_hourly_stats:conv_rate",\n            "driver_hourly_stats:avg_daily_trips"\n        ]\nreturned_features = store.get_online_features(\n    features=features_to_fetch,\n    entity_rows=entity_rows,\n).to_dict()\nfor key, value in sorted(returned_features.items()):\n    print(key, " : ", value)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-set-sql-registry",children:"How to set SQL Registry"}),"\n",(0,n.jsx)(t.p,{children:"Another important thing is the SQL Registry. We first make a path variable that uses the username, password, database name, etc. to make a connection string which it then uses to establish a connection to Teradata's Database."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"path = 'teradatasql://'+ teradata_user +':' + teradata_password + '@'+host + '/?database=' + teradata_database + '&LOGMECH=' + teradata_log_mech\n"})}),"\n",(0,n.jsx)(t.p,{children:"It will create the following table in your database:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Entities (entity_name,project_id,last_updated_timestamp,entity_proto)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Data_sources (data_source_name,project_id,last_updated_timestamp,data_source_proto)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Feature_views (feature_view_name,project_id,last_updated_timestamp,materialized_intervals,feature_view_proto,user_metadata)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Request_feature_views (feature_view_name,project_id,last_updated_timestamp,feature_view_proto,user_metadata)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Stream_feature_views (feature_view_name,project_id,last_updated_timestamp,feature_view_proto,user_metadata)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"managed_infra (infra_name, project_id, last_updated_timestamp, infra_proto)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"validation_references (validation_reference_name, project_id, last_updated_timestamp, validation_reference_proto)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"saved_datasets (saved_dataset_name, project_id, last_updated_timestamp, saved_dataset_proto)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"feature_services (feature_service_name, project_id, last_updated_timestamp, feature_service_proto)"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"on_demand_feature_views (feature_view_name, project_id, last_updated_timestamp, feature_view_proto, user_metadata)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, if you want to see a complete (but not real-world), end-to-end example workflow example, see the ",(0,n.jsx)(t.code,{children:"demo/test_workflow.py"})," script. This is used for testing the complete feast functionality."]}),"\n",(0,n.jsx)(t.p,{children:"An Enterprise Feature Store accelerates the value-gaining process in crucial stages of data analysis. It enhances productivity and reduces the time taken to introduce products in the market. By integrating Teradata with Feast, it enables the use of Teradata's highly efficient parallel processing within a Feature Store, thereby enhancing performance."}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.feast.dev/tutorials/using-scalable-registry",children:"Feast Scalable Registry"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://medium.com/teradata/enabling-highly-scalable-feature-store-with-teradata-vantage-and-feast-e01008fa8fdb",children:"Enabling highly scalable feature store with Teradata Vantage and FEAST"})}),"\n"]}),"\n","\n",(0,n.jsx)(i.Ay,{})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);