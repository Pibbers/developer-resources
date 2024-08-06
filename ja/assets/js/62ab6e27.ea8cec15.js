"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5440],{41269:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>o});var a=t(74848),r=t(28453);const o=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},62680:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>o});var a=t(74848),r=t(28453);const o=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},84632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453),o=t(62680),s=t(41269);t(56240),t(19365);const i={sidebar_position:15,id:"segment",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"January 18th, 2022",description:"Store events from Twilio Segment in Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","customer data platform","cdp","segment"]},l="Store events from Twilio Segment",c={id:"manage-data/segment",title:"Store events from Twilio Segment",description:"Store events from Twilio Segment in Teradata Vantage.",source:"@site/quickstarts/manage-data/segment.md",sourceDirName:"manage-data",slug:"/manage-data/segment",permalink:"/ja/quickstarts/manage-data/segment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,id:"segment",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"January 18th, 2022",description:"Store events from Twilio Segment in Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","customer data platform","cdp","segment"]},sidebar:"tutorialSidebar",previous:{title:"Connect Teradata Vantage to Salesforce using Amazon Appflow",permalink:"/ja/quickstarts/manage-data/integrate-teradata-vantage-to-salesforce-using-amazon-appflow"},next:{title:"Connect Azure Data Share to Teradata Vantage",permalink:"/ja/quickstarts/manage-data/connect-azure-data-share-to-teradata-vantage"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},...o.RM,{value:"Build and deploy",id:"build-and-deploy",level:3},{value:"Try it out",id:"try-it-out",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...s.RM];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"store-events-from-twilio-segment",children:"Store events from Twilio Segment"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"This solution listens to events from Twilio Segment and writes data to a Teradata Vantage instance. The example uses Google Cloud but it can be translated into any cloud platform."}),"\n",(0,a.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,a.jsx)(n.p,{children:"In this solution, Twilio Segment writes raw event data to Google Cloud Pub/Sub. Pub/Sub forwards events to a Cloud Run application. The Cloud Run app writes data to a Teradata Vantage database. It's a serverless solution that doesn't require allocation or management of any VM's."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Segment Google Cloud Flow Diagram",src:t(60368).A+"",width:"933",height:"189"})}),"\n",(0,a.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["A Google Cloud account. If you don't have an account, you can create one at ",(0,a.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"https://console.cloud.google.com/"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gcloud"})," installed. See ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"https://cloud.google.com/sdk/docs/install"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"A Teradata Vantage instance that Google Cloud Run can talk to."}),"\n"]}),"\n",(0,a.jsx)(o.Ay,{}),"\n",(0,a.jsx)(n.h3,{id:"build-and-deploy",children:"Build and deploy"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Clone the sample repository:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"git clone git@github.com:Teradata/segment-integration-tutorial.git\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The repo contains ",(0,a.jsx)(n.code,{children:"segment.sql"})," file that sets up the database. the script on your Vantage db using your favorite SQL IDE, ",(0,a.jsx)(n.a,{href:"https://downloads.teradata.com/download/tools/teradata-studio",children:"Teradata Studio"})," or command line tool called ",(0,a.jsx)(n.code,{children:"bteq"})," (download for ",(0,a.jsx)(n.a,{href:"https://downloads.teradata.com/node/7314",children:"Windows"}),", ",(0,a.jsx)(n.a,{href:"https://downloads.teradata.com/node/200442",children:"Linux"}),", ",(0,a.jsx)(n.a,{href:"https://downloads.teradata.com/node/201214",children:"macOS"}),".\nThe SQL script will create a new database called ",(0,a.jsx)(n.code,{children:"Segment"})," and a set of tables to store Segment events."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set the default project and region:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud config set project <PROJECT_ID>\ngcloud config set compute/region <REGION>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Retrieve the project id and the number. We will need it in subsequent steps:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'export PROJECT_ID=$(gcloud config get-value project)\n\nexport PROJECT_NUMBER=$(gcloud projects list \\\n  --filter="$(gcloud config get-value project)" \\\n  --format="value(PROJECT_NUMBER)")\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Enable required Google Cloud services:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud services enable cloudbuild.googleapis.com containerregistry.googleapis.com run.googleapis.com secretmanager.googleapis.com pubsub.googleapis.com\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"Build the application:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud builds submit --tag gcr.io/$PROJECT_ID/segment-listener\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"7",children:["\n",(0,a.jsx)(n.li,{children:"Define an API key that you will share with Segment. Store the API key in Google Cloud Secret Manager:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud secrets create VANTAGE_USER_SECRET\necho -n 'dbc' > /tmp/vantage_user.txt\ngcloud secrets versions add VANTAGE_USER_SECRET --data-file=/tmp/vantage_user.txt\n\ngcloud secrets create VANTAGE_PASSWORD_SECRET\necho -n 'dbc' > /tmp/vantage_password.txt\ngcloud secrets versions add VANTAGE_PASSWORD_SECRET --data-file=/tmp/vantage_password.txt\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"8",children:["\n",(0,a.jsx)(n.li,{children:"The application that write Segment data to Vantage will use Cloud Run. We first need to allow Cloud Run to access secrets:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud projects add-iam-policy-binding $PROJECT_ID \\\n     --member=serviceAccount:$PROJECT_NUMBER-compute@developer.gserviceaccount.com \\\n     --role=roles/secretmanager.secretAccessor\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"9",children:["\n",(0,a.jsxs)(n.li,{children:["Deploy the app to Cloud Run (replace ",(0,a.jsx)(n.code,{children:"<VANTAGE_HOST>"})," with the hostname or IP of your Teradata Vantage database). The second export statement saves the service url as we need it for subsequent commands:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud run deploy --image gcr.io/$PROJECT_ID/segment-listener segment-listener \\\n  --region $(gcloud config get-value compute/region) \\\n  --update-env-vars VANTAGE_HOST=35.239.251.1 \\\n  --update-secrets 'VANTAGE_USER=VANTAGE_USER_SECRET:1, VANTAGE_PASSWORD=VANTAGE_PASSWORD_SECRET:1' \\\n  --no-allow-unauthenticated\n\nexport SERVICE_URL=$(gcloud run services describe segment-listener --platform managed --region $(gcloud config get-value compute/region) --format 'value(status.url)')\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"10",children:["\n",(0,a.jsx)(n.li,{children:"Create a Pub/Sub topic that will receive events from Segment:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud pubsub topics create segment-events\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"11",children:["\n",(0,a.jsx)(n.li,{children:"Create a service account that will be used by Pub/Sub to invoke the Cloud Run app:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'gcloud iam service-accounts create cloud-run-pubsub-invoker \\\n     --display-name "Cloud Run Pub/Sub Invoker"\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"12",children:["\n",(0,a.jsx)(n.li,{children:"Give the service account permission to invoke Cloud Run:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud run services add-iam-policy-binding segment-listener \\\n  --region $(gcloud config get-value compute/region) \\\n  --member=serviceAccount:cloud-run-pubsub-invoker@$PROJECT_ID.iam.gserviceaccount.com \\\n  --role=roles/run.invoker\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"13",children:["\n",(0,a.jsx)(n.li,{children:"Allow Pub/Sub to create authentication tokens in your project:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud projects add-iam-policy-binding $PROJECT_ID \\\n  --member=serviceAccount:service-$PROJECT_NUMBER@gcp-sa-pubsub.iam.gserviceaccount.com \\\n  --role=roles/iam.serviceAccountTokenCreator\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"14",children:["\n",(0,a.jsx)(n.li,{children:"Create a Pub/Sub subscription with the service account:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gcloud pubsub subscriptions create segment-events-cloudrun-subscription --topic projects/$PROJECT_ID/topics/segment-events \\\n   --push-endpoint=$SERVICE_URL \\\n   --push-auth-service-account=cloud-run-pubsub-invoker@$PROJECT_ID.iam.gserviceaccount.com \\\n   --max-retry-delay 600 \\\n   --min-retry-delay 30\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"15",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Allow Segment to publish to your topic. To do that, assign ",(0,a.jsx)(n.code,{children:"pubsub@segment-integrations.iam.gserviceaccount.com"})," role ",(0,a.jsx)(n.code,{children:"Pub/Sub Publisher"})," in your project at ",(0,a.jsx)(n.a,{href:"https://console.cloud.google.com/cloudpubsub/topic/list",children:"https://console.cloud.google.com/cloudpubsub/topic/list"}),". See ",(0,a.jsx)(n.a,{href:"https://segment.com/docs/connections/destinations/catalog/google-cloud-pubsub/#authentication",children:"Segment manual"})," for details."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Configure your Google Cloud Pub/Sub a destination in Segment. Use the full topic ",(0,a.jsx)(n.code,{children:"projects/<PROJECT_ID>/topics/segment-events"})," and map all Segment event types (using ",(0,a.jsx)(n.code,{children:"*"})," character) to the topic."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"try-it-out",children:"Try it out"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Use Segment's Event Tester functionality to send a sample payload to the topic. Verify that the sample data has been stored in Vantage."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The example shows how to deploy the app in a single region. In many cases, this setup doesn't guarantee enough uptime. The Cloud Run app should be deployed in more than one region behind a Global Load Balancer."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"This how-to demonstrates how to send Segment events to Teradata Vantage. The configuration forwards events from Segment to Google Cloud Pub/Sub and then on to a Cloud Run application. The application writes data to Teradata Vantage."}),"\n",(0,a.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://segment.com/docs/connections/destinations/catalog/google-cloud-pubsub/",children:"Segment Pub/Sub destination documentation"})}),"\n"]}),"\n",(0,a.jsx)(s.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},56240:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),o=t(23104),s=t(56347),i=t(205),l=t(57485);var c=t(89466);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n,t,a=(void 0===(t=function(e,n){return e.value===n.value})&&(t=function(e,n){return e===n}),(n=e).filter((function(e,a){return n.findIndex((function(n){return t(n,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,s.W6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function m(e){var n,t,r,o,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,m=e.groupId,g=d(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:g})})),f=v[0],b=v[1],j=p({queryString:u,groupId:m}),x=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),t=(0,c.Dv)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),S=w[0],T=w[1],E=function(){var e=null!=x?x:S;return h({value:e,tabValues:g})?e:null}();return(0,i.A)((function(){E&&b(E)}),[E]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,g]),tabValues:g}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function b(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(c(n),s(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var o,s=l.indexOf(e.currentTarget)-1;t=null!=(o=l[s])?o:l[l.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,r.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=o.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function x(e){var n=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(b,Object.assign({},e,n)),(0,f.jsx)(j,Object.assign({},e,n))]})}function y(e){var n=(0,g.A)();return(0,f.jsx)(x,Object.assign({},e,{children:u(e.children)}),String(n))}},60368:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/segment.flow.diagram-745525a22933c7b8742c25d4e961c76d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(96540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);