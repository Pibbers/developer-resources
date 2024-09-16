"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[577],{41269:(e,t,i)=>{i.d(t,{Ay:()=>d,RM:()=>s});var a=i(74848),n=i(28453);const s=[];function l(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},62680:(e,t,i)=>{i.d(t,{Ay:()=>d,RM:()=>s});var a=i(74848),n=i(28453);const s=[];function l(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8642:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>I,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var a=i(74848),n=i(28453),s=i(62680),l=i(41269),d=i(56240),r=i(19365);const c={id:"dbt",sidebar_position:4,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"July 12th, 2023",description:"Use dbt (data build tool) with Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},o="dbt with Teradata Vantage",u={id:"manage-data/dbt",title:"dbt with Teradata Vantage",description:"Use dbt (data build tool) with Teradata Vantage.",source:"@site/quickstarts/manage-data/dbt.md",sourceDirName:"manage-data",slug:"/manage-data/dbt",permalink:"/pr-preview/pr-135/fr/quickstarts/manage-data/dbt",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"dbt",sidebar_position:4,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"July 12th, 2023",description:"Use dbt (data build tool) with Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},sidebar:"tutorialSidebar",previous:{title:"Use Apache Airflow with Teradata Vantage",permalink:"/pr-preview/pr-135/fr/quickstarts/manage-data/airflow"},next:{title:"Advanced dbt use cases with Teradata Vantage",permalink:"/pr-preview/pr-135/fr/quickstarts/manage-data/advanced-dbt"}},I={},m=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Install dbt",id:"install-dbt",level:2},{value:"Configure dbt",id:"configure-dbt",level:2},{value:"About the Jaffle Shop warehouse",id:"about-the-jaffle-shop-warehouse",level:2},{value:"Run dbt",id:"run-dbt",level:2},{value:"Create raw data tables",id:"create-raw-data-tables",level:3},{value:"Create the dimensional model",id:"create-the-dimensional-model",level:3},{value:"Test the data",id:"test-the-data",level:3},{value:"Generate documentation",id:"generate-documentation",level:3},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...l.RM];function b(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dbt-with-teradata-vantage",children:"dbt with Teradata Vantage"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["This tutorial demonstrates how to use dbt (Data Build Tool) with Teradata Vantage. It's based on the original ",(0,a.jsx)(t.a,{href:"https://github.com/dbt-labs/jaffle_shop-dev",children:"dbt Jaffle Shop tutorial"}),". A couple of models have been adjusted to the SQL dialect supported by Vantage."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Access to a Teradata Vantage instance."}),"\n",(0,a.jsx)(s.Ay,{}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Python ",(0,a.jsx)(t.strong,{children:"3.7"}),", ",(0,a.jsx)(t.strong,{children:"3.8"}),", ",(0,a.jsx)(t.strong,{children:"3.9"}),", ",(0,a.jsx)(t.strong,{children:"3.10"})," or ",(0,a.jsx)(t.strong,{children:"3.11"})," installed."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"install-dbt",children:"Install dbt"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Clone the tutorial repository and cd into the project directory:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop\ncd jaffle_shop\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a new python environment to manage dbt and its dependencies."}),"\n",(0,a.jsx)(t.p,{children:"Activate the environment:"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(d.A,{children:[(0,a.jsxs)(r.A,{value:"Windows",label:"Windows",default:!0,children:[(0,a.jsx)(t.p,{children:"Run in Powershell:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express `\n--zone=us-central1-a `\n--machine-type=n2-custom-4-8192 `\n--create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced `\n--enable-nested-virtualization `\n--tags=ve\n"})})]}),(0,a.jsx)(r.A,{value:"MacOS",label:"MacOS",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express \\\n--zone=us-central1-a \\\n--machine-type=n2-custom-4-8192 \\\n--create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \\\n--enable-nested-virtualization \\\n--tags=ve\n"})})}),(0,a.jsx)(r.A,{value:"Linux",label:"Linux",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express \\\n--zone=us-central1-a \\\n--machine-type=n2-custom-4-8192 \\\n--create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \\\n--enable-nested-virtualization \\\n--tags=ve\n"})})})]}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Install ",(0,a.jsx)(t.code,{children:"dbt-teradata"})," module and its dependencies. The core dbt module is included as a dependency so you don't have to install it separately:"]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"dbt dependencies"})}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"dbt-core"})," module was included as a dependency only up to version 1.7.x of dbt-teradata. Starting from ",(0,a.jsx)(t.code,{children:"dbt-teradata"})," 1.8.0 and above, ",(0,a.jsx)(t.code,{children:"dbt-core"})," will not be installed as a dependency. Therefore, you need to explicitly install ",(0,a.jsx)(t.code,{children:"dbt-core"})," in addition to installing ",(0,a.jsx)(t.code,{children:"dbt-teradata"}),". More information on decoupling dbt adapters from ",(0,a.jsx)(t.code,{children:"dbt-core"})," can be found here: ",(0,a.jsx)(t.a,{href:"https://github.com/dbt-labs/dbt-core/discussions/9171",children:"https://github.com/dbt-labs/dbt-core/discussions/9171"})]})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pip install dbt-teradata\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configure-dbt",children:"Configure dbt"}),"\n",(0,a.jsxs)(t.p,{children:["Configure dbt to connect to your Vantage database. Create ",(0,a.jsx)(t.code,{children:"profiles.yml"})," file in the location show below."]}),"\n",(0,a.jsxs)(d.A,{children:[(0,a.jsxs)(r.A,{value:"Windows",label:"Windows",default:!0,children:[(0,a.jsx)(t.p,{children:"Run in Powershell:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"c:\\Users\\<user name>\\.dbt\\profiles.yml\n"})})]}),(0,a.jsx)(r.A,{value:"MacOS",label:"MacOS",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"~/.dbt/profiles.yml\n"})})}),(0,a.jsx)(r.A,{value:"Linux",label:"Linux",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"~/.dbt/profiles.yml\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["Add the following config to ",(0,a.jsx)(t.code,{children:"profile.yml"})," file. Adjust ",(0,a.jsx)(t.code,{children:"<host>"}),", ",(0,a.jsx)(t.code,{children:"<user>"}),", ",(0,a.jsx)(t.code,{children:"<password>"})," to match your Teradata Vantage instance."]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Database setup"})}),(0,a.jsxs)(t.p,{children:["The following dbt profile points to a database called ",(0,a.jsx)(t.code,{children:"jaffle_shop"}),".\nIf the database doesn't exist on your Teradata Vantage instance, it will be created. You can also change ",(0,a.jsx)(t.code,{children:"schema"})," value to point to an existing database in your instance."]})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"jaffle_shop:\n  outputs:\n    dev:\n      type: teradata\n      host: <host>\n      user: <user>\n      password: <password>\n      logmech: TD2\n      schema: jaffle_shop\n      tmode: ANSI\n      threads: 1\n      timeout_seconds: 300\n      priority: interactive\n      retries: 1\n  target: dev\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now, that we have the profile file in place, we can validate the setup:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If the debug command returned errors, you likely have an issue with the content of ",(0,a.jsx)(t.code,{children:"profiles.yml"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"about-the-jaffle-shop-warehouse",children:"About the Jaffle Shop warehouse"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"jaffle_shop"})," is a fictional e-commerce store. This dbt project transforms raw data from an app database into a dimensional model with customer and order data ready for analytics."]}),"\n",(0,a.jsx)(t.p,{children:"The raw data from the app consists of customers, orders, and payments, with the following entity-relationship diagram:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:i(61594).A+"",width:"900",height:"207"})}),"\n",(0,a.jsx)(t.p,{children:"dbt takes these raw data table and builds the following dimensional model, which is more suitable for analytics tools:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:i(29705).A+"",width:"708",height:"388"})}),"\n",(0,a.jsx)(t.h2,{id:"run-dbt",children:"Run dbt"}),"\n",(0,a.jsx)(t.h3,{id:"create-raw-data-tables",children:"Create raw data tables"}),"\n",(0,a.jsxs)(t.p,{children:["In real life, we will be getting raw data from platforms like Segment, Stitch, Fivetran or another ETL tool. In our case, we will use dbt's ",(0,a.jsx)(t.code,{children:"seed"})," functionality to create tables from csv files. The csv files are located in ",(0,a.jsx)(t.code,{children:"./data"})," directory. Each csv file will produce one table. dbt will inspect the files and do type inference to decide what data types to use for columns."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"dbt seed\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You should now see 3 tables in your ",(0,a.jsx)(t.code,{children:"jaffle_shop"})," database: ",(0,a.jsx)(t.code,{children:"raw_customers"}),", ",(0,a.jsx)(t.code,{children:"raw_orders"}),", ",(0,a.jsx)(t.code,{children:"raw_payments"}),". The tables should be populated with data from the csv files."]}),"\n",(0,a.jsx)(t.h3,{id:"create-the-dimensional-model",children:"Create the dimensional model"}),"\n",(0,a.jsx)(t.p,{children:"Now that we have the raw tables, we can instruct dbt to create the dimensional model:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"dbt run\n"})}),"\n",(0,a.jsxs)(t.p,{children:["So what exactly happened here? dbt created additional tables using ",(0,a.jsx)(t.code,{children:"CREATE TABLE/VIEW FROM SELECT"})," SQL. In the first transformation, dbt took raw tables and built denormalized join tables called ",(0,a.jsx)(t.code,{children:"customer_orders"}),", ",(0,a.jsx)(t.code,{children:"order_payments"}),", ",(0,a.jsx)(t.code,{children:"customer_payments"}),". You will find the definitions of these tables in ",(0,a.jsx)(t.code,{children:"./marts/core/intermediate"}),".\nIn the second step, dbt created ",(0,a.jsx)(t.code,{children:"dim_customers"})," and ",(0,a.jsx)(t.code,{children:"fct_orders"})," tables. These are the dimensional model tables that we want to expose to our BI tool."]}),"\n",(0,a.jsx)(t.h3,{id:"test-the-data",children:"Test the data"}),"\n",(0,a.jsxs)(t.p,{children:["dbt applied multiple transformations to our data. How can we ensure that the data in the dimensional model is correct? dbt allows us to define and execute tests against the data. The tests are defined in ",(0,a.jsx)(t.code,{children:"./marts/core/schema.yml"}),". The file describes each column in all relationships. Each column can have multiple tests configured under ",(0,a.jsx)(t.code,{children:"tests"})," key. For example, we expect that ",(0,a.jsx)(t.code,{children:"fct_orders.order_id"})," column will contain unique, non-null values. To validate that the data in the produced tables satisfies the test conditions run:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"dbt test\n"})}),"\n",(0,a.jsx)(t.h3,{id:"generate-documentation",children:"Generate documentation"}),"\n",(0,a.jsx)(t.p,{children:"Our model consists of just a few tables. Imagine a scenario where where we have many more sources of data and a much more complex dimensional model. We could also have an intermediate zone between the raw data and the dimensional model that follows the Data Vault 2.0 principles. Would it not be useful, if we had the inputs, transformations and outputs documented somehow? dbt allows us to generate documentation from its configuration files:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"dbt docs generate\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will produce html files in ",(0,a.jsx)(t.code,{children:"./target"})," directory."]}),"\n",(0,a.jsx)(t.p,{children:"You can start your own server to browse the documentation. The following command will start a server and open up a browser tab with the docs' landing page:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"dbt docs serve\n"})}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.p,{children:["This tutorial demonstrated how to use dbt with Teradata Vantage. The sample project takes raw data and produces a dimensional data mart. We used multiple dbt commands to populate tables from csv files (",(0,a.jsx)(t.code,{children:"dbt seed"}),"), create models (",(0,a.jsx)(t.code,{children:"dbt run"}),"), test the data (",(0,a.jsx)(t.code,{children:"dbt test"}),"), and generate and serve model documentation (",(0,a.jsx)(t.code,{children:"dbt docs generate"}),", ",(0,a.jsx)(t.code,{children:"dbt docs serve"}),")."]}),"\n",(0,a.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.getdbt.com/docs/",children:"dbt documentation"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/Teradata/dbt-teradata",children:"dbt-teradata plugin documentation"})}),"\n"]}),"\n",(0,a.jsx)(l.Ay,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>l});i(96540);var a=i(34164);const n={tabItem:"tabItem_Ymn6"};var s=i(74848);function l(e){var t=e.children,i=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:i,children:t})}},56240:(e,t,i)=>{i.d(t,{A:()=>x});var a=i(96540),n=i(34164),s=i(23104),l=i(56347),d=i(205),r=i(57485);var c=i(89466);function o(e){var t,i;return null!=(t=null==(i=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:i.filter(Boolean))?t:[]}function u(e){var t=e.values,i=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return o(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(i);return function(e){var t,i,a=(void 0===(i=function(e,t){return e.value===t.value})&&(i=function(e,t){return e===t}),(t=e).filter((function(e,a){return t.findIndex((function(t){return i(t,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,i])}function I(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,i=void 0!==t&&t,n=e.groupId,s=(0,l.W6)(),d=function(e){var t=e.queryString,i=void 0!==t&&t,a=e.groupId;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:i,groupId:n});return[(0,r.aZ)(d),(0,a.useCallback)((function(e){if(d){var t=new URLSearchParams(s.location.search);t.set(d,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[d,s])]}function b(e){var t,i,n,s,l=e.defaultValue,r=e.queryString,o=void 0!==r&&r,b=e.groupId,h=u(e),j=(0,a.useState)((function(){return function(e){var t,i=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!I({value:i,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+i+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return i}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:h})})),g=j[0],p=j[1],Z=m({queryString:o,groupId:b}),N=Z[0],x=Z[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:b}.groupId),i=(0,c.Dv)(t),n=i[0],s=i[1],[n,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),T=w[0],v=w[1],M=function(){var e=null!=N?N:T;return I({value:e,tabValues:h})?e:null}();return(0,d.A)((function(){M&&p(M)}),[M]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!I({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);p(e),x(e),v(e)}),[x,v,h]),tabValues:h}}var h=i(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(74848);function p(e){var t=e.className,i=e.block,a=e.selectedValue,l=e.selectValue,d=e.tabValues,r=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,o=function(e){var t=e.currentTarget,i=r.indexOf(t),n=d[i].value;n!==a&&(c(t),l(n))},u=function(e){var t,i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var a,n=r.indexOf(e.currentTarget)+1;i=null!=(a=r[n])?a:r[0];break;case"ArrowLeft":var s,l=r.indexOf(e.currentTarget)-1;i=null!=(s=r[l])?s:r[r.length-1]}null==(t=i)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":i},t),children:d.map((function(e){var t=e.value,i=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return r.push(e)},onKeyDown:u,onClick:o},s,{className:(0,n.A)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=i?i:t}),t)}))})}function Z(e){var t=e.lazy,i=e.children,n=e.selectedValue,s=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})}))})}function N(e){var t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,g.jsx)(p,Object.assign({},e,t)),(0,g.jsx)(Z,Object.assign({},e,t))]})}function x(e){var t=(0,h.A)();return(0,g.jsx)(N,Object.assign({},e,{children:o(e.children)}),String(t))}},61594:(e,t,i)=>{i.d(t,{A:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8IS0tIEdlbmVyYXRlZCBieSBncmFwaHZpeiB2ZXJzaW9uIDkuMC4wICgyMDIzMDkxMS4xODI3KQogLS0+CjwhLS0gUGFnZXM6IDEgLS0+Cjxzdmcgd2lkdGg9IjY3NXB0IiBoZWlnaHQ9IjE1NXB0Igogdmlld0JveD0iMC4wMCAwLjAwIDY3NC41MCAxNTQuNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZyBpZD0iZ3JhcGgwIiBjbGFzcz0iZ3JhcGgiIHRyYW5zZm9ybT0ic2NhbGUoMSAxKSByb3RhdGUoMCkgdHJhbnNsYXRlKDQgMTUwLjUpIj4KPHBvbHlnb24gZmlsbD0id2hpdGUiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSItNCw0IC00LC0xNTAuNSA2NzAuNSwtMTUwLjUgNjcwLjUsNCAtNCw0Ii8+CjwhLS0gY3VzdG9tZXJzIC0tPgo8ZyBpZD0ibm9kZTEiIGNsYXNzPSJub2RlIj4KPHRpdGxlPmN1c3RvbWVyczwvdGl0bGU+Cjxwb2x5Z29uIGZpbGw9IiNmMzc4NDMiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC00IDgsLTE0Mi41IDE2OCwtMTQyLjUgMTY4LC00IDgsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjgsLTExMyA4LC0xNDIuNSAxNjgsLTE0Mi41IDE2OCwtMTEzIDgsLTExMyIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQwLjc1IiB5PSItMTIzLjMiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTYuMDAiIGZpbGw9IiNmZmZmZmYiPmN1c3RvbWVyczwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2Y5ZDZjZCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjgsLTg1Ljc1IDgsLTExMyAxNjgsLTExMyAxNjgsLTg1Ljc1IDgsLTg1Ljc1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSI4LC04NS43NSA4LC0xMTMgMTY4LC0xMTMgMTY4LC04NS43NSA4LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjEzIiB5PSItOTUuNyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiB0ZXh0LWRlY29yYXRpb249InVuZGVybGluZSIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzAwMDAwMCI+aWQgJiMxNjA7PC90ZXh0Pgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjM0Ljc1IiB5PSItOTUuNyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjMDAwMDAwIj4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC01OC41IDgsLTg1Ljc1IDE2OCwtODUuNzUgMTY4LC01OC41IDgsLTU4LjUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjgsLTU4LjUgOCwtODUuNzUgMTY4LC04NS43NSAxNjgsLTU4LjUgOCwtNTguNSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjEzIiB5PSItNjguNDUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+Zmlyc3RfbmFtZSAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iOTUuNSIgeT0iLTY4LjQ1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbdmFyY2hhcl08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC0zMS4yNSA4LC01OC41IDE2OCwtNTguNSAxNjgsLTMxLjI1IDgsLTMxLjI1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSI4LC0zMS4yNSA4LC01OC41IDE2OCwtNTguNSAxNjgsLTMxLjI1IDgsLTMxLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTMiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPmxhc3RfbmFtZSAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iOTIuNSIgeT0iLTQxLjIiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFt2YXJjaGFyXTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjgsLTQgOCwtMzEuMjUgMTY4LC0zMS4yNSAxNjgsLTQgOCwtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iOCwtNCA4LC0zMS4yNSAxNjgsLTMxLjI1IDE2OCwtNCA4LC00Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTMiIHk9Ii0xMy45NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij5lbWFpbCAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNTkuNSIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbdmFyY2hhcl08L3RleHQ+CjwvZz4KPCEtLSBvcmRlcnMgLS0+CjxnIGlkPSJub2RlMiIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+b3JkZXJzPC90aXRsZT4KPHBvbHlnb24gZmlsbD0iI2YzNzg0MyIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtNCAyNTcsLTE0Mi41IDM5NiwtMTQyLjUgMzk2LC00IDI1NywtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iMjU3LC0xMTMgMjU3LC0xNDIuNSAzOTYsLTE0Mi41IDM5NiwtMTEzIDI1NywtMTEzIi8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjk2Ljg4IiB5PSItMTIzLjMiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTYuMDAiIGZpbGw9IiNmZmZmZmYiPm9yZGVyczwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2Y5ZDZjZCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtODUuNzUgMjU3LC0xMTMgMzk2LC0xMTMgMzk2LC04NS43NSAyNTcsLTg1Ljc1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSIyNTcsLTg1Ljc1IDI1NywtMTEzIDM5NiwtMTEzIDM5NiwtODUuNzUgMjU3LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI2MiIgeT0iLTk1LjciIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgdGV4dC1kZWNvcmF0aW9uPSJ1bmRlcmxpbmUiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPmlkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIyODMuNzUiIHk9Ii05NS43IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPiBbaW50XTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtNTguNSAyNTcsLTg1Ljc1IDM5NiwtODUuNzUgMzk2LC01OC41IDI1NywtNTguNSIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iMjU3LC01OC41IDI1NywtODUuNzUgMzk2LC04NS43NSAzOTYsLTU4LjUgMjU3LC01OC41Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjYyIiB5PSItNjguNDUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij51c2VyX2lkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIzMjEuMjUiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIyNTcsLTMxLjI1IDI1NywtNTguNSAzOTYsLTU4LjUgMzk2LC0zMS4yNSAyNTcsLTMxLjI1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSIyNTcsLTMxLjI1IDI1NywtNTguNSAzOTYsLTU4LjUgMzk2LC0zMS4yNSAyNTcsLTMxLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjYyIiB5PSItNDEuMiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij5vcmRlcl9kYXRlICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIzNDUuMjUiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbZGF0ZV08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIyNTcsLTQgMjU3LC0zMS4yNSAzOTYsLTMxLjI1IDM5NiwtNCAyNTcsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjI1NywtNCAyNTcsLTMxLjI1IDM5NiwtMzEuMjUgMzk2LC00IDI1NywtNCIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI2MiIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPnN0YXR1cyAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMzEzLjc1IiB5PSItMTMuOTUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFt2YXJjaGFyXTwvdGV4dD4KPC9nPgo8IS0tIGN1c3RvbWVycyYjNDU7JiM0NTtvcmRlcnMgLS0+CjxnIGlkPSJlZGdlMSIgY2xhc3M9ImVkZ2UiPgo8dGl0bGU+Y3VzdG9tZXJzJiM0NTsmIzQ1O29yZGVyczwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdmN2Y3ZiIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIiBkPSJNMTc1LjcyLC03My4yNUMxOTkuODUsLTczLjI1IDIyNS44NiwtNzMuMjUgMjQ5LjMzLC03My4yNSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjIxOS4zMyIgeT0iLTU5Ljk1IiBmb250LWZhbWlseT0iVGltZXMsc2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiPjAuLk48L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTc1LjcyIiB5PSItNTkuOTUiIGZvbnQtZmFtaWx5PSJUaW1lcyxzZXJpZiIgZm9udC1zaXplPSIxNC4wMCI+MTwvdGV4dD4KPC9nPgo8IS0tIHBheW1lbnRzIC0tPgo8ZyBpZD0ibm9kZTMiIGNsYXNzPSJub2RlIj4KPHRpdGxlPnBheW1lbnRzPC90aXRsZT4KPHBvbHlnb24gZmlsbD0iI2YzNzg0MyIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjQ4NSwtNCA0ODUsLTE0Mi41IDY1OC41LC0xNDIuNSA2NTguNSwtNCA0ODUsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtMTEzIDQ4NSwtMTQyLjUgNjU4LjUsLTE0Mi41IDY1OC41LC0xMTMgNDg1LC0xMTMiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1MjcuODgiIHk9Ii0xMjMuMyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNi4wMCIgZmlsbD0iI2ZmZmZmZiI+cGF5bWVudHM8L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmOWQ2Y2QiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI0ODUsLTg1Ljc1IDQ4NSwtMTEzIDY1OC41LC0xMTMgNjU4LjUsLTg1Ljc1IDQ4NSwtODUuNzUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtODUuNzUgNDg1LC0xMTMgNjU4LjUsLTExMyA2NTguNSwtODUuNzUgNDg1LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQ5MCIgeT0iLTk1LjciIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgdGV4dC1kZWNvcmF0aW9uPSJ1bmRlcmxpbmUiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPmlkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1MTEuNzUiIHk9Ii05NS43IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPiBbaW50XTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjQ4NSwtNTguNSA0ODUsLTg1Ljc1IDY1OC41LC04NS43NSA2NTguNSwtNTguNSA0ODUsLTU4LjUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtNTguNSA0ODUsLTg1Ljc1IDY1OC41LC04NS43NSA2NTguNSwtNTguNSA0ODUsLTU4LjUiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0OTAiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXN0eWxlPSJpdGFsaWMiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPm9yZGVyX2lkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1NTUuMjUiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI0ODUsLTMxLjI1IDQ4NSwtNTguNSA2NTguNSwtNTguNSA2NTguNSwtMzEuMjUgNDg1LC0zMS4yNSIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iNDg1LC0zMS4yNSA0ODUsLTU4LjUgNjU4LjUsLTU4LjUgNjU4LjUsLTMxLjI1IDQ4NSwtMzEuMjUiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0OTAiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPnBheW1lbnRfbWV0aG9kICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI2MjAuNSIgeT0iLTQxLjIiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFtpbnRdPC90ZXh0Pgo8cG9seWdvbiBmaWxsPSIjZmNlY2U4IiBzdHJva2U9Im5vbmUiIHBvaW50cz0iNDg1LC00IDQ4NSwtMzEuMjUgNjU4LjUsLTMxLjI1IDY1OC41LC00IDQ4NSwtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iNDg1LC00IDQ4NSwtMzEuMjUgNjU4LjUsLTMxLjI1IDY1OC41LC00IDQ4NSwtNCIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQ5MCIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPmFtb3VudCAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNTUyLjI1IiB5PSItMTMuOTUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFtpbnRdPC90ZXh0Pgo8L2c+CjwhLS0gb3JkZXJzJiM0NTsmIzQ1O3BheW1lbnRzIC0tPgo8ZyBpZD0iZWRnZTIiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPm9yZGVycyYjNDU7JiM0NTtwYXltZW50czwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdmN2Y3ZiIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIiBkPSJNNDAzLjgsLTczLjI1QzQyNy4wNywtNzMuMjUgNDUyLjkyLC03My4yNSA0NzcuMTksLTczLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNDQ3LjE5IiB5PSItNTkuOTUiIGZvbnQtZmFtaWx5PSJUaW1lcyxzZXJpZiIgZm9udC1zaXplPSIxNC4wMCI+MC4uTjwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0MDMuOCIgeT0iLTU5Ljk1IiBmb250LWZhbWlseT0iVGltZXMsc2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiPjE8L3RleHQ+CjwvZz4KPC9nPgo8L3N2Zz4K"},29705:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/dbt2-63eca13a00dea36a5f312dc45c10c04b.svg"},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>d});var a=i(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);