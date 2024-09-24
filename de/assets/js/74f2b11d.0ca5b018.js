"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4598],{941:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var i=r(74848),t=r(28453),a=r(56240),s=r(19365);const l={id:"run-ai-unlimited-jupyterlab-docker",title:"F\xfchren Sie den Manager und JupyterLab lokal aus",description:"Erfahren Sie, wie Sie den AI Unlimited Manager und JupyterLab mit Docker ausf\xfchren.",sidebar_label:"Ausf\xfchren des Managers und JupyterLab mithilfe von Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},d="Ausf\xfchren des Managers und JupyterLab mithilfe von Docker",u={id:"resources/quickstart/run-ai-unlimited-jupyterlab-docker",title:"F\xfchren Sie den Manager und JupyterLab lokal aus",description:"Erfahren Sie, wie Sie den AI Unlimited Manager und JupyterLab mit Docker ausf\xfchren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/resources/quickstart/docker-install-ai-unlimited-jupyter.md",sourceDirName:"resources/quickstart",slug:"/resources/quickstart/run-ai-unlimited-jupyterlab-docker",permalink:"/de/ai-unlimited/resources/quickstart/run-ai-unlimited-jupyterlab-docker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"run-ai-unlimited-jupyterlab-docker",title:"F\xfchren Sie den Manager und JupyterLab lokal aus",description:"Erfahren Sie, wie Sie den AI Unlimited Manager und JupyterLab mit Docker ausf\xfchren.",sidebar_label:"Ausf\xfchren des Managers und JupyterLab mithilfe von Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},c=[{value:"Voraussetzungen",id:"voraussetzungen",level:2},{value:"Festlegen der Speicherorte f\xfcr Konfigurationsdateien",id:"festlegen-der-speicherorte-f\xfcr-konfigurationsdateien",level:2},{value:"Klonen des Repository",id:"klonen-des-repository",level:2},{value:"\xdcbergeben Sie die Anmeldeinformationen Ihres Cloud-Dienstanbieters an Docker",id:"\xfcbergeben-sie-die-anmeldeinformationen-ihres-cloud-dienstanbieters-an-docker",level:2},{value:"Starten Sie den Manager und JupyterLab",id:"starten-sie-den-manager-und-jupyterlab",level:2},{value:"\xdcberpr\xfcfen des Zugriffs",id:"\xfcberpr\xfcfen-des-zugriffs",level:2},{value:"Wie geht es weiter?",id:"wie-geht-es-weiter",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ausf\xfchren-des-managers-und-jupyterlab-mithilfe-von-docker",children:"Ausf\xfchren des Managers und JupyterLab mithilfe von Docker"}),"\n",(0,i.jsx)(n.p,{children:"Der AI Unlimited-Manager orchestriert die Bereitstellung der Engine und enth\xe4lt eine webbasierte Benutzeroberfl\xe4che zur \xdcberwachung von Projekten. Und im Manager richten Sie AI Unlimited ein."}),"\n",(0,i.jsx)(n.p,{children:"Sie verwenden JupyterLab, um Daten zu untersuchen und zu analysieren."}),"\n",(0,i.jsxs)(n.p,{children:["Sie verwenden ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"}),", um den AI Unlimited Manager und JupyterLab mit dem AI Unlimited Jupyter Kernel lokal in Containern auszuf\xfchren."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Wenn Sie Unterst\xfctzung bei der Installation ben\xf6tigen, senden Sie eine E-Mail an das ",(0,i.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"Support-Team"})," oder fragen Sie die ",(0,i.jsx)(n.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"Gemeinschaft"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"voraussetzungen",children:"Voraussetzungen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ein AWS- oder Azure-Konto mit nutzungsbasierter Abrechnung, auf dem die Engine von einem Jupyter-Notebook aus bereitgestellt werden kann"}),"\n",(0,i.jsxs)(n.li,{children:["Ein ",(0,i.jsx)(n.a,{href:"https://github.com",children:"GitHub"}),"- oder ",(0,i.jsx)(n.a,{href:"https://gitlab.com",children:"GitLab"}),"-Konto zum Hosten jedes Projekt-Repositorys zur Authentifizierung von Benutzern und Speicherung von Projektinformationen"]}),"\n",(0,i.jsx)(n.li,{children:"Ihr Objektspeicher, in dem sich Ihr Amazon- oder ADLS Gen2-Datensee befindet"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.docker.com/get-started/",children:"Docker"})," auf Ihrem Computer installiert"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"festlegen-der-speicherorte-f\xfcr-konfigurationsdateien",children:"Festlegen der Speicherorte f\xfcr Konfigurationsdateien"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Legen Sie optional die Umgebungsvariable ",(0,i.jsx)(n.code,{children:"AI_UNLIMITED_HOME"})," auf das Verzeichnis fest, in dem die Konfigurations- und Datendateien des Managers gespeichert werden sollen. Stellen Sie sicher, dass das Verzeichnis vorhanden ist und die entsprechende Berechtigung erteilt wurde. Der Standardspeicherort ist ",(0,i.jsx)(n.code,{children:"./volumes/ai-unlimited"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Lokaler Standort"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Containerstandort"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Nutzung"})})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"$AI_UNLIMITED_HOME"}),(0,i.jsx)(n.td,{children:"/etc/td"}),(0,i.jsx)(n.td,{children:"Speichert Daten und Konfiguration"})]})})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Erfahren Sie mehr \xfcber die Umgebungsvariablen in ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html",children:"AWS"})," oder ",(0,i.jsx)(n.a,{href:"https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication",children:"Azure"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Legen Sie optional die Umgebungsvariable ",(0,i.jsx)(n.code,{children:"JUPYTER_HOME"})," auf das Verzeichnis fest, in dem die JupyterLab-Konfigurationsdateien gespeichert werden sollen. Der Standardspeicherort ist ",(0,i.jsx)(n.code,{children:"~/.jupyter"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"klonen-des-repository",children:"Klonen des Repository"}),"\n",(0,i.jsxs)(n.p,{children:["Der Ordner ",(0,i.jsx)(n.code,{children:"deployments/docker"})," im von Teradata bereitgestellten ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub-Repository"})," enth\xe4lt die folgenden Dateien, die Sie zum Ausf\xfchren des Managers und von JupyterLab ben\xf6tigen:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"[AWS or Azure]-credentials-env-vars.yaml"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ai-unlimited.yaml"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"jupyter.yaml"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Klonen Sie das Repository."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\xfcbergeben-sie-die-anmeldeinformationen-ihres-cloud-dienstanbieters-an-docker",children:"\xdcbergeben Sie die Anmeldeinformationen Ihres Cloud-Dienstanbieters an Docker"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"Sie k\xf6nnen die Anmeldeinformationen auf zwei Arten weitergeben:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Verwenden Sie ",(0,i.jsx)(n.code,{children:"[AWS or Azure]-credentials-env-vars.yaml"}),", das Umgebungsvariablen zum Speichern Ihrer Anmeldeinformationen enth\xe4lt."]}),"\n",(0,i.jsx)(n.li,{children:"Verwenden Sie ein lokales Volume, das Ihre Anmeldeinformationen enth\xe4lt."}),"\n"]}),(0,i.jsxs)(n.p,{children:["Siehe beide Methoden im Abschnitt ",(0,i.jsx)(n.strong,{children:"Jupyter und AI Unlimited"})," von ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md",children:"Bereitstellen mit Docker Compose"})," im Teradata AI Unlimited GitHub-Repository."]}),(0,i.jsx)(n.p,{children:"Dieser QuickStart verwendet die erste Methode."})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Kopieren Sie diese Umgebungsvariablen aus der Konsole Ihres Cloud-Dienstanbieters."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"aws",label:"AWS",default:!0,children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"}),", ",(0,i.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})," und ",(0,i.jsx)(n.code,{children:"AWS_SESSION_TOKEN"})]})}),(0,i.jsx)(s.A,{value:"azure",label:"Azure",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ARM_SUBSCRIPTION_ID"}),", ",(0,i.jsx)(n.code,{children:"ARM_CLIENT_ID"})," und ",(0,i.jsx)(n.code,{children:"ARM_CLIENT_SECRET"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Gehen Sie zum Verzeichnis, in dem sich ",(0,i.jsx)(n.code,{children:"[AWS or Azure]-credentials-env-vars.yaml"})," befindet, und aktualisieren Sie die Umgebungsvariablenwerte der Datei."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"starten-sie-den-manager-und-jupyterlab",children:"Starten Sie den Manager und JupyterLab"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Starten Sie den Manager und JupyterLab \xfcber das Verzeichnis, in dem sich ",(0,i.jsx)(n.code,{children:"[AWS or Azure]-credentials-env-vars.yaml"}),", ",(0,i.jsx)(n.code,{children:"ai-unlimited.yaml"})," und ",(0,i.jsx)(n.code,{children:"jupyter.yaml"})," befinden."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Die Kennzeichnung ",(0,i.jsx)(n.code,{children:"-d"})," im Befehl ist optional."]})}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"aws",label:"AWS",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Run the Docker Compose file in the background "',children:"docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up \n"})})}),(0,i.jsx)(s.A,{value:"azure",label:"Azure",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Run the Docker Compose file in the background "',children:"docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Der Befehl l\xe4dt den Manager und die JupyterLab-Container herunter und startet sie."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Um das Jupyter-Token abzurufen, listen Sie die aktuell ausgef\xfchrten Container auf."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker ps \n"})}),"\n",(0,i.jsx)(n.p,{children:"Und ermitteln Sie den Namen des JupyterLab-Containers."}),"\n",(0,i.jsx)(n.p,{children:"Suchen Sie dann in den Protokollen des Containers nach Vorkommen der Zeichenfolge \u201eToken\u201c."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker logs <container_name> | grep 'Token'\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\xfcberpr\xfcfen-des-zugriffs",children:"\xdcberpr\xfcfen des Zugriffs"}),"\n",(0,i.jsxs)(n.p,{children:["Wenn der Manager bereit ist, k\xf6nnen Sie unter ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," darauf zugreifen."]}),"\n",(0,i.jsxs)(n.p,{children:["Wenn JupyterLab bereit ist, k\xf6nnen Sie unter ",(0,i.jsx)(n.code,{children:"http://localhost:8888"})," darauf zugreifen und das Token eingeben."]}),"\n",(0,i.jsx)(n.h2,{id:"wie-geht-es-weiter",children:"Wie geht es weiter?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/de/ai-unlimited/resources/create-oauth-app",children:"Erstellen Sie eine OAuth-App"}),", um die Authentifizierung zwischen AI Unlimited und Ihrem Git-Provider-Konto zu erm\xf6glichen."]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var i=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){var n=e.children,r=e.hidden,s=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,s),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>y});var i=r(96540),t=r(34164),a=r(23104),s=r(56347),l=r(205),d=r(57485);var u=r(89466);function o(e){var n,r;return null!=(n=null==(r=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function c(e){var n=e.values,r=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:function(e){return o(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,i=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,i){return n.findIndex((function(n){return r(n,e)}))!==i})));if(i.length>0)throw new Error('Docusaurus error: Duplicate values "'+i.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,a=(0,s.W6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,i=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:r,groupId:t});return[(0,d.aZ)(l),(0,i.useCallback)((function(e){if(l){var n=new URLSearchParams(a.location.search);n.set(l,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[l,a])]}function p(e){var n,r,t,a,s=e.defaultValue,d=e.queryString,o=void 0!==d&&d,p=e.groupId,f=c(e),b=(0,i.useState)((function(){return function(e){var n,r=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:f})})),g=b[0],j=b[1],x=m({queryString:o,groupId:p}),v=x[0],y=x[1],S=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,u.Dv)(n),t=r[0],a=r[1],[t,(0,i.useCallback)((function(e){n&&a.set(e)}),[n,a])]),k=S[0],A=S[1],w=function(){var e=null!=v?v:k;return h({value:e,tabValues:f})?e:null}();return(0,l.A)((function(){w&&j(w)}),[w]),{selectedValue:g,selectValue:(0,i.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),A(e)}),[y,A,f]),tabValues:f}}var f=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function j(e){var n=e.className,r=e.block,i=e.selectedValue,s=e.selectValue,l=e.tabValues,d=[],u=(0,a.a_)().blockElementScrollPositionUntilNextRender,o=function(e){var n=e.currentTarget,r=d.indexOf(n),t=l[r].value;t!==i&&(u(n),s(t))},c=function(e){var n,r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var i,t=d.indexOf(e.currentTarget)+1;r=null!=(i=d[t])?i:d[0];break;case"ArrowLeft":var a,s=d.indexOf(e.currentTarget)-1;r=null!=(a=d[s])?a:d[d.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return d.push(e)},onKeyDown:c,onClick:o},a,{className:(0,t.A)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":i===n}),children:null!=r?r:n}),n)}))})}function x(e){var n=e.lazy,r=e.children,t=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=a.find((function(e){return e.props.value===t}));return s?(0,i.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function v(e){var n=p(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,Object.assign({},e,n)),(0,g.jsx)(x,Object.assign({},e,n))]})}function y(e){var n=(0,f.A)();return(0,g.jsx)(v,Object.assign({},e,{children:o(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var i=r(96540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);