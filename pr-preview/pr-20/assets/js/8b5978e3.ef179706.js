"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3294],{20585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=t(74848),r=t(28453),s=t(56240),i=t(19365);const o={sidebar_position:3,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"January 11, 2024",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","data analytics","data science"]},l="Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code",d={id:"vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",source:"@site/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",permalink:"/developers/pr-preview/pr-20/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"January 11, 2024",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","data analytics","data science"]},sidebar:"tutorialSidebar",previous:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker",permalink:"/developers/pr-preview/pr-20/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker"},next:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Amazon SageMaker",permalink:"/developers/pr-preview/pr-20/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone VantageCloud Lake Demo repository",id:"clone-vantagecloud-lake-demo-repository",level:2},{value:"Start a Jupyterlab docker container with Teradata Jupyter Exensions",id:"start-a-jupyterlab-docker-container-with-teradata-jupyter-exensions",level:2},{value:"Visual Studio Code Configuration",id:"visual-studio-code-configuration",level:2},{value:"Edit vars.json file",id:"edit-varsjson-file",level:3},{value:"Modify path to vars.json in UseCases directory",id:"modify-path-to-varsjson-in-usecases-directory",level:3},{value:"Configuring Jupyter Kernels",id:"configuring-jupyter-kernels",level:3},{value:"Run demos",id:"run-demos",level:3},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"run-teradata-jupyter-notebook-demos-for-vantagecloud-lake-in-visual-studio-code",children:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Visual Studio Code is a popular open-source code editor compatible with Windows, MacOs, and Linux. Developers use this Integrated Development Environment [IDE) for coding, debugging, building, and deploying applications. In this quickstart guide, we launch VantageCloud Lake Jupyter notebook demos within Visual Studio Code."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"vscode.png",src:t(83729).A+"",width:"3444",height:"2136"})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"Before you begin, ensure you have the following prerequisites in place:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," installed"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git"})," installed\n** Required to download git repo from ",(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos.git",children:"https://github.com/Teradata/lake-demos.git"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://code.visualstudio.com/download",children:"Visual Studio Code"})," installed"]}),"\n",(0,a.jsxs)(n.li,{children:["A Teradata VantageCloud Lake account with organization URL and login details from the Teradata welcome letter\n** Once logged in follow these ",(0,a.jsx)(n.a,{href:"https://quickstarts.teradata.com/getting-started-with-vantagecloud-lake.html#_create_an_environment",children:"intructions"})," to create a VantageCloud Lake Enviorment"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"clone-vantagecloud-lake-demo-repository",children:"Clone VantageCloud Lake Demo repository"}),"\n",(0,a.jsx)(n.p,{children:"Begin by cloning the GitHub repository and navigating to the project directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/lake-demos.git\ncd lake-demos\n"})}),"\n",(0,a.jsx)(n.h2,{id:"start-a-jupyterlab-docker-container-with-teradata-jupyter-exensions",children:"Start a Jupyterlab docker container with Teradata Jupyter Exensions"}),"\n",(0,a.jsxs)(n.p,{children:["To launch Teradata VantageCloud Lake demos, we need the ",(0,a.jsx)(n.a,{href:"https://hub.docker.com/r/teradata/jupyterlab-extensions",children:"Teradata Jupyter Extensions for Docker"}),". These extensions provide the SQL ipython kernel, utilities to manage connections to Teradata, and the database object explorer to make you productive while interacting with the Teradata database."]}),"\n",(0,a.jsx)(n.p,{children:"Next, start a container and bind it to the existing lake-demos directory. Choose the appropriate command based on your operating system:"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"For Windows, run the docker command in PowerShell."})}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"Windows",label:"Windows",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'  docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v ${PWD}:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})}),(0,a.jsx)(i.A,{value:"MacOS",label:"MacOS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'  docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})}),(0,a.jsx)(i.A,{value:"Linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"Take note of the resulting URL and token; you\u2019ll need them to establish the connection from Visual Studio Code."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"terminal.png",src:t(23367).A+"",width:"1620",height:"258"})}),"\n",(0,a.jsx)(n.h2,{id:"visual-studio-code-configuration",children:"Visual Studio Code Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["Open ",(0,a.jsx)(n.code,{children:"lake-demos"})," project directory in Visual Studio Code. The repository contains the following project tree:"]}),"\n",(0,a.jsx)(n.p,{children:"LAKE_DEMOS"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/tree/main/UseCases",children:"UseCases"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb",children:"0_Demo_Environment_Setup.ipynb"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb",children:"1_Load_Base_Demo_Data.ipynb"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb",children:"Data_Science_OAF.ipynb"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb",children:"Demo_Admin.ipynb"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json file"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"edit-varsjson-file",children:"Edit vars.json file"}),"\n",(0,a.jsxs)(n.p,{children:["Edit the ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json"})})," file to include the required credentials to run the demos +"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Variable"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Value"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:'"host"'})}),(0,a.jsx)(n.td,{children:"Public IP value from your VantageCloud Lake environment"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:'"UES_URI"'})}),(0,a.jsx)(n.td,{children:"Open Analytics from your VantageCloud Lake environment"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.em,{children:'"dbc"'})}),(0,a.jsx)(n.td,{children:"The master password of your VantageCloud Lake environment."})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["To retrieve a Public IP address and Open Analytics Endpoint follow these ",(0,a.jsx)(n.a,{href:"https://quickstarts.teradata.com/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker.html",children:"instructions"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:'Change passwords in the vars.json file. You\'ll see that in the sample vars.json, the passwords of all users are defaulted to "password", this is just for matters of the sample file, you should change all of these password fields to strong passwords, secure them as necessary and follow other password management best practices.'})}),"\n",(0,a.jsx)(n.h3,{id:"modify-path-to-varsjson-in-usecases-directory",children:"Modify path to vars.json in UseCases directory"}),"\n",(0,a.jsx)(n.p,{children:"In the UseCases directory, all .ipynb files use the path ../../vars.json to load the variables from the JSON file when working from Jupyterlab. To work directly from Visual Studio Code, update the code in each .ipynb to point to vars.json."}),"\n",(0,a.jsx)(n.p,{children:"The quickest way to make these changes is via search feature on the left vertical  menu. Search for"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"'../../vars.json'\n"})}),"\n",(0,a.jsx)(n.p,{children:"and replace with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"'vars.json'\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"search",src:t(38107).A+"",width:"1158",height:"402"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"replace",src:t(91479).A+"",width:"560",height:"434"})}),"\n",(0,a.jsx)(n.h3,{id:"configuring-jupyter-kernels",children:"Configuring Jupyter Kernels"}),"\n",(0,a.jsxs)(n.p,{children:["Open ",(0,a.jsx)(n.em,{children:"0_Demo_Environment_Setup.ipynb"})," and click on Select Kernel at the top right corner of Visual Studio Code."]}),"\n",(0,a.jsx)(n.p,{children:"If you have not installed Jupyter and Python extensions, Visual Studio Code will prompt you to install them. These extensions are necessary for Visual Studio Code to detect Kernels. To install them, select 'Install/Enable suggested extensions for Python and Jupyter.'"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"select.kernel.png",src:t(69870).A+"",width:"3140",height:"516"})}),"\n",(0,a.jsxs)(n.p,{children:["Once you've installed the necessary extensions, you'll find options in the drop-down menu. Choose ",(0,a.jsx)(n.strong,{children:"Existing Jupyter Kernel"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"existing.kernel.png",src:t(50915).A+"",width:"885",height:"204"})}),"\n",(0,a.jsx)(n.p,{children:"Enter the URL of the running Jupyter Server and press enter."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"http://localhost:8888\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"server.url.png",src:t(81367).A+"",width:"864",height:"133"})}),"\n",(0,a.jsx)(n.p,{children:"Enter the token found in your terminal when mounting files to the Docker container and press Enter."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"server.password.png",src:t(51597).A+"",width:"858",height:"139"})}),"\n",(0,a.jsx)(n.p,{children:"Change Server Display Name (Leave Blank To Use URL)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"server.display.name.png",src:t(76703).A+"",width:"860",height:"130"})}),"\n",(0,a.jsx)(n.p,{children:"You now have access to all the Teradata Vantage extension kernels. Select Python 3 (ipykernel) from the running Jupyter server."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"python.kernel.png",src:t(48508).A+"",width:"868",height:"234"})}),"\n",(0,a.jsx)(n.h3,{id:"run-demos",children:"Run demos"}),"\n",(0,a.jsxs)(n.p,{children:["Execute all the cells in ",(0,a.jsx)(n.em,{children:"0_Demo_Environment_Setup.ipynb"})," to setup your environment. Followed by ",(0,a.jsx)(n.em,{children:"1_Demo_Setup_Base_Data.ipynb"})," to load the base data required for demo.\nTo learn more about the demo notebooks, go to ",(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake demos"})," page on GitHub."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"demoenvsetup.png",src:t(40346).A+"",width:"1822",height:"991"})}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"In this quickstart guide, we configured Visual Studio Code to access VantageCloud Lake demos using Jupyter notebooks."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},56240:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),s=t(23104),i=t(56347),o=t(205),l=t(57485);var d=t(89466);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function c(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n,t,a=(void 0===(t=function(e,n){return e.value===n.value})&&(t=function(e,n){return e===n}),(n=e).filter((function(e,a){return n.findIndex((function(n){return t(n,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,i.W6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function m(e){var n,t,r,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,m=e.groupId,g=c(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),b=v[0],f=v[1],j=p({queryString:u,groupId:m}),x=j[0],y=j[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),t=(0,d.Dv)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=k[0],C=k[1],_=function(){var e=null!=x?x:w;return h({value:e,tabValues:g})?e:null}();return(0,o.A)((function(){_&&f(_)}),[_]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),C(e)}),[y,C,g]),tabValues:g}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],d=(0,s.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(d(n),i(r))},c=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:c,onClick:u},s,{className:(0,r.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function x(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,b.jsx)(f,Object.assign({},e,n)),(0,b.jsx)(j,Object.assign({},e,n))]})}function y(e){var n=(0,g.A)();return(0,b.jsx)(x,Object.assign({},e,{children:u(e.children)}),String(n))}},40346:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/demoenvsetup-27ed84b9008334333a03eb6476262428.png"},50915:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/existing.kernel-b893c017d4e8ed9e4beb3e85b4a3454e.png"},48508:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/python.kernel-4d46ac77b426cfb1346233a028c73958.png"},91479:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/replace-bcf54ece5b7c9aa548b7243e00fd2c67.png"},38107:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/search-72b082202967672eff33b6c090e9dbba.png"},69870:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/select.kernel-703a383b5df2d41d96bf3c474453b2f8.png"},76703:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/server.display.name-f5ef83c15528f67dc8324485c1645a31.png"},51597:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/server.password-6ecbb5c9c4e91a334a4080099ef11d3f.png"},81367:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/server.url-ab39bd15cfe7f894a5eb3324d85d59ec.png"},23367:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/terminal-440ff9569fa09e4f3c3e3db5374cae99.png"},83729:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/vscode-3504eabc3e8242497f26e161243ffd18.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);