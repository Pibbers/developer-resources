"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8074],{44138:(e,r,a)=>{a.d(r,{Ay:()=>t,RM:()=>s});var n=a(74848),i=a(28453);const s=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["La carpeta ",(0,n.jsx)(r.code,{children:"deployments"})," en el ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited",children:"Repositorio de GitHub de AI Unlimited"})," proporcionada por Teradata contiene archivos de plantillas, par\xe1metros y pol\xedticas para instalar AI Unlimited."]}),"\n",(0,n.jsx)(r.p,{children:"Abra una ventana de terminal y clone el repositorio."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function t(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},81916:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(74848),i=a(28453),s=a(44138);const l={id:"deploy-jupyter-azure-portal",title:"Instalar JupyterLab en Azure",description:"Aprenda a implementar JupyterLab usando una plantilla ARM.",sidebar_label:"Instalar en Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},t="Instalar JupyterLab en Azure",d={id:"resources/jupyterlab/deploy-jupyter-azure-portal",title:"Instalar JupyterLab en Azure",description:"Aprenda a implementar JupyterLab usando una plantilla ARM.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/resources/jupyterlab/install-jupyterlab-azure.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/deploy-jupyter-azure-portal",permalink:"/es/ai-unlimited/resources/jupyterlab/deploy-jupyter-azure-portal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-jupyter-azure-portal",title:"Instalar JupyterLab en Azure",description:"Aprenda a implementar JupyterLab usando una plantilla ARM.",sidebar_label:"Instalar en Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},c=[{value:"Prepare su cuenta de Azure",id:"prepare-su-cuenta-de-azure",level:2},{value:"Clonar el repositorio",id:"clonar-el-repositorio",level:2},...s.RM,{value:"Localizar la plantilla de Jupyter",id:"localizar-la-plantilla-de-jupyter",level:2},{value:"Cargar la plantilla",id:"cargar-la-plantilla",level:2},{value:"Especificar detalles de la instancia",id:"especificar-detalles-de-la-instancia",level:2},{value:"Crear la instancia",id:"crear-la-instancia",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:a}=r;return a||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"instalar-jupyterlab-en-azure",children:"Instalar JupyterLab en Azure"}),"\n",(0,n.jsx)(r.p,{children:"Utilizar\xe1 una plantilla de Azure Resource Manager (ARM) proporcionada por Teradata para instalar JupyterLab y el kernel de AI Unlimited desde el Azure Portal."}),"\n",(0,n.jsxs)(r.p,{children:["Esto implementa una instancia de servidor, con JupyterLab ejecut\xe1ndose en un contenedor controlado por ",(0,n.jsx)(r.a,{href:"/es/ai-unlimited/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["Para obtener ayuda con la instalaci\xf3n, env\xede un correo electr\xf3nico al ",(0,n.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"equipo de soporte"})," o pregunte a la ",(0,n.jsx)(r.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"comunidad"}),"."]})}),"\n",(0,n.jsx)(r.h2,{id:"prepare-su-cuenta-de-azure",children:"Prepare su cuenta de Azure"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Trabaje con su administrador de nube para asegurarse de que su cuenta de Azure tenga los permisos necesarios para crear los recursos de nube definidos en la ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter",children:"plantilla de JupyterLab"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Requisitos de red: su ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",children:"grupo de recursos"})," de Azure debe tener una ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal",children:"Azure Virtual Network (VNet)"})," configurada con una ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal",children:"subred"}),". Use una red virtual o subred existente, o cree la suya propia, seg\xfan los permisos de su cuenta."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Si necesita acceder a la instancia de JupyterLab para ejecutar comandos o depurar, puede usar un ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys",children:"par de claves"})," para conectarse de forma segura mediante Secure Shell (SSH). Necesitar\xe1 el par de claves cuando ",(0,n.jsx)(r.a,{href:"#specify-instance-details",children:"especifique los detalles de la instancia"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"clonar-el-repositorio",children:"Clonar el repositorio"}),"\n","\n",(0,n.jsx)(s.Ay,{}),"\n",(0,n.jsx)(r.h2,{id:"localizar-la-plantilla-de-jupyter",children:"Localizar la plantilla de Jupyter"}),"\n",(0,n.jsx)(r.p,{children:"Las plantillas ARM para JupyterLab est\xe1n aqu\xed en el repositorio de GitHub de AI Unlimited:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"deployments/azure/templates/arm/jupyter"})}),"\n",(0,n.jsxs)(r.p,{children:["Elija una plantilla en funci\xf3n de si desea utilizar un ",(0,n.jsx)(r.a,{href:"/es/ai-unlimited/glossary#load-balancer",children:"equilibrador de carga"})," y de qu\xe9 tipo."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Quiz\xe1s quiera pedirle orientaci\xf3n a un administrador de la nube de su organizaci\xf3n."})}),"\n",(0,n.jsxs)(r.p,{children:["- ",(0,n.jsx)(r.code,{children:"jupyter-with-alb.json"}),"\u2014JupyterLab se encuentra detr\xe1s de un ",(0,n.jsx)(r.a,{href:"/es/ai-unlimited/glossary#application-load-balancer",children:"equilibrador de carga de aplicaciones"}),"\n- ",(0,n.jsx)(r.code,{children:"jupyter-with-nlb.json"}),"\u2014JupyterLab se encuentra detr\xe1s de un ",(0,n.jsx)(r.a,{href:"/es/ai-unlimited/glossary#network-load-balancer",children:"equilibrador de carga de red"}),"\n- ",(0,n.jsx)(r.code,{children:"jupyter-without-lb.json"}),"\u2014Sin equilibrador de carga"]}),"\n",(0,n.jsx)(r.h2,{id:"cargar-la-plantilla",children:"Cargar la plantilla"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Inicie sesi\xf3n en el ",(0,n.jsx)(r.a,{href:"https://portal.azure.com",children:"Azure Portal"}),".","\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Las referencias a Azure Portal est\xe1n actualizadas al 29 de mayo de 2024."})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["Busque ",(0,n.jsx)(r.strong,{children:"implementaci\xf3n personalizada"})," y luego seleccione ",(0,n.jsx)(r.strong,{children:"Implementar una plantilla personalizada"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Seleccione ",(0,n.jsx)(r.strong,{children:"Crear su propia plantilla en el editor"})," y luego ",(0,n.jsx)(r.strong,{children:"Cargar archivo"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Seleccione el archivo de plantilla que eligi\xf3 usar y seleccione ",(0,n.jsx)(r.strong,{children:"Guardar"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"especificar-detalles-de-la-instancia",children:"Especificar detalles de la instancia"}),"\n",(0,n.jsx)(r.p,{children:"Revise los par\xe1metros. Proporcione valores para los requeridos. Es posible que su organizaci\xf3n requiera otros."}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Par\xe1metros de Azure y JupyterLab"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe1metro"}),(0,n.jsx)(r.th,{children:"Descripci\xf3n"}),(0,n.jsx)(r.th,{children:"Notas"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Subscription"}),(0,n.jsx)(r.td,{children:"La suscripci\xf3n de Azure que desea utilizar para implementar AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Obligatorio",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"Recomendamos utilizar una cuenta que no sea una prueba gratuita."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Region"}),(0,n.jsx)(r.td,{children:"La regi\xf3n donde desea implementar AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Obligatorio",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"Seleccione la regi\xf3n de Azure m\xe1s cercana a su ubicaci\xf3n de trabajo y los recursos de datos que desea usar con AI Unlimited."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Resource Group Name"}),(0,n.jsx)(r.td,{children:"El nombre del contenedor que agrupa recursos de AI Unlimited relacionados."}),(0,n.jsxs)(r.td,{children:["Obligatorio",(0,n.jsx)("br",{}),"Predeterminado: ai-unlimited-jupyter"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"OS Version"}),(0,n.jsx)(r.td,{children:"Las versiones de los sistemas operativos que est\xe1n disponibles en la suscripci\xf3n actual."}),(0,n.jsxs)(r.td,{children:["Opcional con valor predeterminado",(0,n.jsx)("br",{}),"Predeterminado: Ubuntu-2004"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Instance Type"}),(0,n.jsx)(r.td,{children:"El tipo de instancia que desea utilizar para AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Valor predeterminado: STANDARD_D2_V3",(0,n.jsx)("br",{}),"Recomendamos utilizar el tipo de instancia predeterminado para ahorrar costes. El tipo de instancia predeterminado es la serie Dv3 est\xe1ndar con 2 vCPU y 8,0 GiB de memoria."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Network"}),(0,n.jsx)(r.td,{children:"El nombre de la red en la que desea implementar la instancia de AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Predeterminado: NA"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Subnet"}),(0,n.jsx)(r.td,{children:"La subred en la que desea implementar la instancia de AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Obligatorio",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"La subred debe residir en la zona de disponibilidad seleccionada."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Security Group"}),(0,n.jsx)(r.td,{children:"El firewall virtual que controla el tr\xe1fico entrante y saliente a la instancia."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Valor predeterminado: JupyterSecurityGroup",(0,n.jsx)("br",{}),"El grupo de seguridad se implementa como un conjunto de reglas que especifican qu\xe9 protocolos, puertos y direcciones IP o bloques CIDR tienen permitido acceder a la instancia. Defina al menos un CIDR de acceso o un grupo de seguridad para permitir el tr\xe1fico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Access CIDR"}),(0,n.jsx)(r.td,{children:"El rango de direcciones IP CIDR al que se le permite acceder a la instancia."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Valor predeterminado: 0.0.0.0/0",(0,n.jsx)("br",{}),"Recomendamos configurar este valor en un rango de IP de confianza. Defina al menos un CIDR de acceso o un grupo de seguridad para permitir el tr\xe1fico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Source App Sec Groups (ASG)"}),(0,n.jsx)(r.td,{children:"Los grupos de seguridad de aplicaciones de origen que tienen permiso para conectarse a la instancia de AI Unlimited. Los ASG le permiten organizar sus m\xe1quinas virtuales (VM) en funci\xf3n de sus pol\xedticas de seguridad de red espec\xedficas. Estas pol\xedticas de seguridad determinan qu\xe9 tr\xe1fico est\xe1 permitido o no en su m\xe1quina virtual."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"Seleccione un grupo de seguridad de aplicaciones en la misma regi\xf3n que la interfaz de red."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Destination App Sec Groups"}),(0,n.jsx)(r.td,{children:"Los grupos de seguridad de aplicaciones de destino que tienen permiso para conectarse a la instancia de AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"Seleccione un grupo de seguridad de aplicaciones en la misma regi\xf3n que la interfaz de red."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Role Definition ID"}),(0,n.jsx)(r.td,{children:"El ID del rol que se utilizar\xe1 con AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Obligatorio",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"Utilice el comando ",(0,n.jsx)(r.code,{children:"Get-AzRoleDefinition"})," de la CLI de Azure para obtener su ID de definici\xf3n de rol."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Allow Public SSH"}),(0,n.jsx)(r.td,{children:"Especifica si puede usar claves de shell seguro (SSH) para conectarse a m\xe1quinas virtuales en Azure."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Predeterminado: verdadero"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Public Key"}),(0,n.jsx)(r.td,{children:"La clave SSH p\xfablica que puede utilizar para conectarse a una m\xe1quina virtual a trav\xe9s de SSH."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"Este valor debe comenzar con ",(0,n.jsx)(r.code,{children:"ssh-rsa"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use Persistent Volume"}),(0,n.jsxs)(r.td,{children:["Especifica si desea utilizar un volumen persistente nuevo o existente para almacenar datos. Consulte ",(0,n.jsx)(r.em,{children:"M\xe1s informaci\xf3n: Uso de un volumen persistente"})," debajo de la secci\xf3n de par\xe1metros."]}),(0,n.jsxs)(r.td,{children:["Opcional con valor predeterminado",(0,n.jsx)("br",{}),"Predeterminado: Nuevo",(0,n.jsx)("br",{}),"Las opciones admitidas son un nuevo volumen persistente o uno existente, seg\xfan su caso de uso."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Persistent Volume Size"}),(0,n.jsx)(r.td,{children:"El tama\xf1o del volumen persistente que puede adjuntar a la instancia, en GB."}),(0,n.jsxs)(r.td,{children:["Opcional",(0,n.jsx)("br",{}),"Predeterminado: 100",(0,n.jsx)("br",{}),"Admite valores entre 8 y 1000."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Existing Persistent Volume"}),(0,n.jsx)(r.td,{children:"El ID del volumen persistente existente que puede adjuntar a la instancia."}),(0,n.jsxs)(r.td,{children:["Obligatorio si Usar volumen persistente est\xe1 configurado como Existente",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"El volumen persistente debe estar en la misma zona de disponibilidad que la instancia de AI Unlimited."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JupyterHttpPort"}),(0,n.jsx)(r.td,{children:"El puerto para acceder a la interfaz de usuario del servicio JupyterLab."}),(0,n.jsxs)(r.td,{children:["Obligatorio con valor predeterminado",(0,n.jsx)("br",{}),"Valor predeterminado: 8888"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JupyterVersion"}),(0,n.jsx)(r.td,{children:"La versi\xf3n de JupyterLab que desea implementar."}),(0,n.jsxs)(r.td,{children:["Obligatorio con valor predeterminado",(0,n.jsx)("br",{}),"Valor predeterminado: \xfaltimo",(0,n.jsx)("br",{}),"El valor es una etiqueta de versi\xf3n de contenedor, por ejemplo, \xfaltimo."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JupyterToken"}),(0,n.jsx)(r.td,{children:"El token o contrase\xf1a utilizado para acceder a JupyterLab desde la interfaz de usuario."}),(0,n.jsxs)(r.td,{children:["Obligatorio",(0,n.jsx)("br",{}),"Predeterminado: NA",(0,n.jsx)("br",{}),"El token debe comenzar con una letra y contener solo caracteres alfanum\xe9ricos. El patr\xf3n permitido es ^[a-zA-Z][a-zA-Z0-9-]*."]})]})]})]})]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"M\xe1s informaci\xf3n: C\xf3mo usar un volumen persistente"}),(0,n.jsx)(r.p,{children:"La instancia de JupyterLab se ejecuta en un contenedor y guarda sus datos de configuraci\xf3n en una base de datos en el volumen ra\xedz de la instancia. Estos datos se conservan si apaga, reinicia o crea una instant\xe1nea y vuelve a iniciar la instancia."}),(0,n.jsx)(r.p,{children:"Sin embargo, un volumen persistente almacena datos de una aplicaci\xf3n en contenedores m\xe1s all\xe1 de la vida \xfatil del contenedor, pod o nodo en el que se ejecuta."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Sin un volumen persistente"})}),(0,n.jsx)(r.p,{children:"Si el contenedor, el pod o el nodo fallan o finalizan, perder\xe1 los datos de configuraci\xf3n de JupyterLab. Puede implementar una nueva instancia de JupyterLab, pero no en el mismo estado que la que se perdi\xf3."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Con un volumen persistente"})}),(0,n.jsx)(r.p,{children:"Si el contenedor, pod o nodo falla o finaliza, y los datos de configuraci\xf3n de JupyterLab se almacenan en un volumen persistente, puede implementar una nueva instancia de JupyterLab que tenga la misma configuraci\xf3n que la que se perdi\xf3."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Ejemplo"})}),(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Implemente JupyterLab e incluya estos par\xe1metros:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(r.strong,{children:"Nuevo"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["Despu\xe9s de crear la pila, en la pesta\xf1a ",(0,n.jsx)(r.strong,{children:"Salidas"}),", anote el ",(0,n.jsx)(r.code,{children:"volume-id"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Utilice JupyterLab."}),"\n",(0,n.jsxs)(r.li,{children:["Si se pierde la instancia de JupyterLab, implemente JupyterLab nuevamente e incluya estos par\xe1metros:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(r.strong,{children:"Nuevo"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ExistingPersistentVolumeId"}),": el valor que anot\xf3 en el paso 2"]}),"\n"]}),"\n"]}),"\n"]}),(0,n.jsx)(r.p,{children:"La nueva instancia de JupyterLab tiene la misma configuraci\xf3n que la que se perdi\xf3."})]}),"\n",(0,n.jsx)(r.h2,{id:"crear-la-instancia",children:"Crear la instancia"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Seleccione ",(0,n.jsx)(r.strong,{children:"Revisar + crear"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Seleccione ",(0,n.jsx)(r.strong,{children:"Crear"}),".",(0,n.jsx)("br",{}),"\nEn la p\xe1gina ",(0,n.jsx)(r.strong,{children:"Notificaciones"})," puede supervisar el progreso."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Cuando se completa la implementaci\xf3n, la p\xe1gina ",(0,n.jsx)(r.strong,{children:"Salidas"})," muestra la URL para acceder a JupyterLab."]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>l,x:()=>t});var n=a(96540);const i={},s=n.createContext(i);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);