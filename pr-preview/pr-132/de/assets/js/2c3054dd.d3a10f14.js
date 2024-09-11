"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8072],{44249:(e,n,r)=>{r.d(n,{Ay:()=>l,RM:()=>s});var i=r(74848),t=r(28453);const s=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Der Ordner ",(0,i.jsx)(n.code,{children:"Bereitstellungen"})," im von Teradata bereitgestellten ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub-Repository"})," enth\xe4lt Vorlagen-, Parameter- und Richtliniendateien f\xfcr die Installation von AI Unlimited."]}),"\n",(0,i.jsx)(n.p,{children:"\xd6ffnen Sie ein Terminalfenster und klonen Sie das Repository."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},29063:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var i=r(74848),t=r(28453),s=r(44249);const d={id:"deploy-jupyter-aws-console",title:"Installieren Sie JupyterLab auf AWS",description:"Erfahren Sie, wie Sie JupyterLab mithilfe einer CloudFormation-Vorlage bereitstellen.",sidebar_label:"Auf AWS installieren",sidebar_position:1,pagination_prev:null,pagination_next:null},l="Installieren Sie JupyterLab auf AWS",a={id:"resources/jupyterlab/deploy-jupyter-aws-console",title:"Installieren Sie JupyterLab auf AWS",description:"Erfahren Sie, wie Sie JupyterLab mithilfe einer CloudFormation-Vorlage bereitstellen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/resources/jupyterlab/install-jupyterlab-aws.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/deploy-jupyter-aws-console",permalink:"/pr-preview/pr-132/de/ai-unlimited/resources/jupyterlab/deploy-jupyter-aws-console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-jupyter-aws-console",title:"Installieren Sie JupyterLab auf AWS",description:"Erfahren Sie, wie Sie JupyterLab mithilfe einer CloudFormation-Vorlage bereitstellen.",sidebar_label:"Auf AWS installieren",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},h=[{value:"Vorbereiten Ihres AWS-Kontos",id:"vorbereiten-ihres-aws-kontos",level:2},{value:"Klonen des Repository",id:"klonen-des-repository",level:2},...s.RM,{value:"Suchen Sie nach der Jupyter-Vorlage",id:"suchen-sie-nach-der-jupyter-vorlage",level:2},{value:"Laden Sie die Vorlage",id:"laden-sie-die-vorlage",level:2},{value:"Angeben von Stapeldetails und -optionen",id:"angeben-von-stapeldetails-und--optionen",level:2},{value:"\xdcberpr\xfcfen und Erstellen des Stapels",id:"\xfcberpr\xfcfen-und-erstellen-des-stapels",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installieren-sie-jupyterlab-auf-aws",children:"Installieren Sie JupyterLab auf AWS"}),"\n",(0,i.jsx)(n.p,{children:"Sie verwenden eine von Teradata bereitgestellte CloudFormation-Vorlage, um JupyterLab und den AI Unlimited-Kernel von der AWS Management Console aus zu installieren."}),"\n",(0,i.jsxs)(n.p,{children:["Dadurch wird eine Serverinstanz bereitgestellt, wobei JupyterLab in einem von ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-132/de/ai-unlimited/glossary#systemd",children:"systemd"})," gesteuerten Container ausgef\xfchrt wird."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Wenn Sie Unterst\xfctzung bei der Installation ben\xf6tigen, senden Sie eine E-Mail an das ",(0,i.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"Support-Team"})," oder fragen Sie die ",(0,i.jsx)(n.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"Gemeinschaft"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"vorbereiten-ihres-aws-kontos",children:"Vorbereiten Ihres AWS-Kontos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Arbeiten Sie mit Ihrem Cloud-Administrator zusammen, um sicherzustellen, dass Sie \xfcber die ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/iam/",children:"IAM"}),"-Berechtigungen zum Erstellen der im ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter",children:"JupyterLab-Vorlage"})," definierten Cloud-Ressourcen verf\xfcgen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Wenn Sie auf die JupyterLab-Instanz zugreifen m\xfcssen, um Befehle auszuf\xfchren oder zu debuggen, k\xf6nnen Sie mit einem ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"Schl\xfcsselpaar"})," eine sichere Verbindung \xfcber Secure Shell (SSH) herstellen. Sie ben\xf6tigen das Schl\xfcsselpaar, wenn Sie ",(0,i.jsx)(n.a,{href:"#specify-stack-details-and-options",children:"die Stapeldetails angeben"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Wenn Sie einen ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",children:"Application Load Balancer (ALB)"})," oder ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html",children:"Network Load Balancer (NLB)"}),"verwenden m\xf6chten, stellen Sie sicher, dass Sie \xfcber die Berechtigung zum Verwalten dieser AWS-Dienste verf\xfcgen:\n- ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/acm/",children:"AWS Certificate Manager"})," \u2013 um ein neues Zertifikat f\xfcr die gehostete Zonen-ID in Route 53 auszustellen.\n- ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",children:"AWS Route 53"})," \u2013 um einen benutzerdefinierten Dom\xe4nennamen zu konfigurieren und DNS-Abfragen an Ihren Lastausgleich weiterzuleiten."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"klonen-des-repository",children:"Klonen des Repository"}),"\n","\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"suchen-sie-nach-der-jupyter-vorlage",children:"Suchen Sie nach der Jupyter-Vorlage"}),"\n",(0,i.jsx)(n.p,{children:"CloudFormation-Vorlagen f\xfcr JupyterLab finden Sie hier im AI Unlimited GitHub-Repository:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"deployments/aws/templates/jupyter"})}),"\n",(0,i.jsxs)(n.p,{children:["W\xe4hlen Sie eine Vorlage basierend darauf aus, ob und welchen Typ Sie einen ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-132/de/ai-unlimited/glossary#load-balancer",children:"Lastausgleich"})," verwenden m\xf6chten."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"M\xf6glicherweise m\xf6chten Sie einen Cloud-Administrator in Ihrer Organisation um Rat fragen."})}),"\n",(0,i.jsxs)(n.p,{children:["- ",(0,i.jsx)(n.code,{children:"jupyter-alb.yaml"})," \u2013 Hostet JupyterLab hinter einem ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-132/de/ai-unlimited/glossary#application-load-balancer",children:"Anwendungslastausgleich"}),"\n- ",(0,i.jsx)(n.code,{children:"jupyter-with-nlb.yaml"})," \u2013 Hostet JupyterLab hinter einem ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-132/de/ai-unlimited/glossary#network-load-balancer",children:"Netzwerk-Lastausgleich"}),"\n- ",(0,i.jsx)(n.code,{children:"jupyter-without-lb.yaml"})," \u2013 Kein Lastausgleich"]}),"\n",(0,i.jsx)(n.h2,{id:"laden-sie-die-vorlage",children:"Laden Sie die Vorlage"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Melden Sie sich bei der ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com",children:"AWS-Konsole"})," an.","\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Verweise auf die AWS Management Console sind auf dem Stand vom 29. Mai 2024."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["W\xe4hlen Sie die Region aus, in der JupyterLab bereitgestellt werden soll.",(0,i.jsx)("br",{}),"\nWir empfehlen, die Region auszuw\xe4hlen, die Ihrem prim\xe4ren Arbeitsort am n\xe4chsten liegt."]}),"\n",(0,i.jsxs)(n.li,{children:["Starten Sie einen entsprechenden Suchvorgang und gehen Sie zu ",(0,i.jsx)(n.strong,{children:"CloudFormation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,i.jsx)(n.strong,{children:"Stapel erstellen"})," und dann ",(0,i.jsx)(n.strong,{children:"Mit neuen Ressourcen (Standard)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,i.jsx)(n.strong,{children:"Ausw\xe4hlen einer vorhandenen Vorlage"})," und ",(0,i.jsx)(n.strong,{children:"Hochladen einer Vorlagendatei"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["W\xe4hlen Sie die gew\xfcnschte Vorlagendatei aus und klicken Sie auf ",(0,i.jsx)(n.strong,{children:"Weiter"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"angeben-von-stapeldetails-und--optionen",children:"Angeben von Stapeldetails und -optionen"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Geben Sie einen Stapelnamen an."}),"\n",(0,i.jsx)(n.li,{children:"\xdcberpr\xfcfen Sie die Parameter. Geben Sie Werte f\xfcr die erforderlichen Parameter ein. Ihre Organisation ben\xf6tigt m\xf6glicherweise andere."}),"\n"]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"AWS- und JupyterLab-Parameter"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Beschreibung"}),(0,i.jsx)(n.th,{children:"Hinweise"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"InstanceType"}),(0,i.jsx)(n.td,{children:"Der EC2-Instanztyp, den Sie f\xfcr den Dienst verwenden m\xf6chten."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: t3.small",(0,i.jsx)("br",{}),"Um Kosten zu sparen, empfehlen wir die Verwendung des Standardinstanztyps."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RootVolumeSize"}),(0,i.jsx)(n.td,{children:"Die Gr\xf6\xdfe der Root-Festplatte in GB, die Sie an die Instanz anh\xe4ngen m\xf6chten."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: 8",(0,i.jsx)("br",{}),"Unterst\xfctzt Werte zwischen 8 und 1000."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TerminationProtection"}),(0,i.jsx)(n.td,{children:"Aktiviert den Instanzbeendigungsschutz."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: false"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IamRole"}),(0,i.jsx)(n.td,{children:"Gibt an, ob CloudFormation eine neue IAM-Rolle erstellen oder eine vorhandene verwenden soll."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: New",(0,i.jsx)("br",{}),"Unterst\xfctzte Optionen sind: \u201eNeu\u201c oder \u201eVorhanden\u201c"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IamRoleName"}),(0,i.jsx)(n.td,{children:"Der Name der IAM-Rolle, die der Instanz zugewiesen werden soll, entweder eine vorhandene oder eine neu erstellte IAM-Rolle."}),(0,i.jsxs)(n.td,{children:["Optional mit Standard",(0,i.jsx)("br",{}),"Standard: ai-unlimited-iam-role",(0,i.jsx)("br",{}),"Beim Benennen einer neuen IAM-Rolle erfordert CloudFormation die Funktion CAPABILITY_NAMED_IAM. Lassen Sie dieses Feld leer, um einen automatisch generierten Namen zu verwenden."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["IamPermissions",(0,i.jsx)("br",{}),"Boundary"]}),(0,i.jsx)(n.td,{children:"Die ARN der IAM-Berechtigungsgrenze, die der der Instanz zugewiesenen IAM-Rolle zugeordnet werden soll."}),(0,i.jsxs)(n.td,{children:["Optional",(0,i.jsx)("br",{}),"Standard: NA"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AvailabilityZone"}),(0,i.jsx)(n.td,{children:"Die Verf\xfcgbarkeitszone, in der Sie die Instanz bereitstellen m\xf6chten."}),(0,i.jsxs)(n.td,{children:["Erforderlich",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Der Wert muss mit dem Subnetz und der Zone aller bereits vorhandenen Volumes \xfcbereinstimmen und der Instanztyp muss in der ausgew\xe4hlten Zone verf\xfcgbar sein."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LoadBalancing"}),(0,i.jsx)(n.td,{children:"Gibt an, ob auf die Instanz \xfcber einen NLB zugegriffen wird."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: NetworkLoadBalancer",(0,i.jsx)("br",{}),"Unterst\xfctzte Optionen sind: \u201eNetworkLoadBalancer\u201c oder \u201eNone\u201c"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LoadBalancerScheme"}),(0,i.jsx)(n.td,{children:"Wenn ein Lastausgleich verwendet wird, gibt dieses Feld an, ob auf die Instanz \xfcber das Internet oder nur innerhalb der VPC zugegriffen werden kann."}),(0,i.jsxs)(n.td,{children:["Optional mit Standard",(0,i.jsx)("br",{}),"Standard: Internet-facing",(0,i.jsx)("br",{}),"Der DNS-Name eines internetseitigen Lastausgleichs ist \xf6ffentlich aufl\xf6sbar in die \xf6ffentlichen IP-Adressen der Knoten. Daher k\xf6nnen internetseitige Lastausgleichsanfragen von Clients \xfcber das Internet weiterleiten.Die Knoten eines internen Lastausgleichs haben nur private IP-Adressen. Der DNS-Name eines internen Lastausgleichs ist \xf6ffentlich aufl\xf6sbar in die pers\xf6nlichen IP-Adressen der Knoten. Daher k\xf6nnen interne Lastausgleichsanfragen von Clients mit Zugriff auf die VPC f\xfcr den Lastausgleich weiterleiten."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Private"}),(0,i.jsx)(n.td,{children:"Gibt an, ob der Dienst in einem privaten Netzwerk ohne \xf6ffentliche IPs bereitgestellt wird."}),(0,i.jsxs)(n.td,{children:["Erforderlich",(0,i.jsx)("br",{}),"Standard: false",(0,i.jsx)("br",{}),"Stellen Sie sicher, dass Sie die Option \u201eAutomatische Zuweisung \xf6ffentlicher IPv4-Adressen aktivieren\u201c im Subnetz ausw\xe4hlen, in dem sich der Manager befindet. Wenn diese Option nicht ausgew\xe4hlt ist, kann die Installation fehlschlagen."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Session"}),(0,i.jsx)(n.td,{children:"Gibt an, ob Sie den AWS Session Manager f\xfcr den Zugriff auf die Instanz verwenden k\xf6nnen."}),(0,i.jsxs)(n.td,{children:["Erforderlich",(0,i.jsx)("br",{}),"Standard: false"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Vpc"}),(0,i.jsx)(n.td,{children:"Das Netzwerk, in dem Sie die Instanz bereitstellen m\xf6chten."}),(0,i.jsxs)(n.td,{children:["Erforderlich",(0,i.jsx)("br",{}),"Standard: NA"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Subnetz"}),(0,i.jsx)(n.td,{children:"Das Subnetz, in dem Sie die Instanz bereitstellen m\xf6chten."}),(0,i.jsxs)(n.td,{children:["Erforderlich",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Das Subnetz muss sich in der ausgew\xe4hlten Verf\xfcgbarkeitszone befinden."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"KeyName"}),(0,i.jsx)(n.td,{children:"Das \xf6ffentliche/private Schl\xfcsselpaar, mit dem Sie nach dem Start eine sichere Verbindung zu Ihrer Instanz herstellen k\xf6nnen. Wenn Sie ein AWS-Konto erstellen, ist dies das Schl\xfcsselpaar, das Sie in Ihrer bevorzugten Region erstellen."}),(0,i.jsxs)(n.td,{children:["Optional",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Lassen Sie dieses Feld leer, wenn Sie die SSH-Schl\xfcssel nicht einschlie\xdfen m\xf6chten."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AccessCIDR"}),(0,i.jsx)(n.td,{children:"Der CIDR-IP-Adressbereich, der auf die Instanz zugreifen darf."}),(0,i.jsxs)(n.td,{children:["Optional",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Wir empfehlen, diesen Wert auf einen vertrauensw\xfcrdigen IP-Bereich festzulegen. Definieren Sie mindestens eine der Optionen \u201eAccessCIDR\u201c, \u201ePrefixList\u201c oder \u201eSecurityGroup\u201c, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln f\xfcr Sicherheitsgruppen erstellen."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PrefixList"}),(0,i.jsx)(n.td,{children:"Die PrefixList, die Sie zur Kommunikation mit der Instanz verwenden k\xf6nnen. Es handelt sich um eine Sammlung von CIDR-Bl\xf6cken, die eine Reihe von IP-Adressbereichen definieren, f\xfcr die dieselbe Richtliniendurchsetzung erforderlich ist."}),(0,i.jsxs)(n.td,{children:["Optional",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Definieren Sie mindestens eine der Optionen \u201eAccessCIDR\u201c, \u201ePrefixList\u201c oder \u201eSecurityGroup\u201c, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln f\xfcr Sicherheitsgruppen erstellen."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SecurityGroup"}),(0,i.jsx)(n.td,{children:"Die virtuelle Firewall, die den ein- und ausgehenden Datenverkehr zur Instanz kontrolliert."}),(0,i.jsxs)(n.td,{children:["Optional",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Implementiert als Regelsatz, der angibt, welche Protokolle, Ports und IP-Adressen oder CIDR-Bl\xf6cke auf die Instanz zugreifen d\xfcrfen. Definieren Sie mindestens eines von AccessCIDR, PrefixList oder SecurityGroup, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln f\xfcr Sicherheitsgruppen erstellen."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UsePersistentVolume"}),(0,i.jsxs)(n.td,{children:["Gibt an, ob Sie zum Speichern von Daten ein neues oder vorhandenes persistentes Volume verwenden m\xf6chten. Weitere Informationen finden Sie unter ",(0,i.jsx)(n.em,{children:"Mehr erfahren: Persistentes Volume verwenden"})," unter dem Parameterabschnitt."]}),(0,i.jsxs)(n.td,{children:["Optional mit Standard",(0,i.jsx)("br",{}),"Standard: New",(0,i.jsx)("br",{}),"Unterst\xfctzte Optionen sind je nach Anwendungsfall ein neues oder ein vorhandenes dauerhaftes Volume."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PersistentVolumeSize"}),(0,i.jsx)(n.td,{children:"Die Gr\xf6\xdfe des persistenten Datentr\xe4gers in GB, den Sie an die Instanz anh\xe4ngen k\xf6nnen."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: 20",(0,i.jsx)("br",{}),"Unterst\xfctzt Werte zwischen 8 und 1000"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["ExistingPersistent",(0,i.jsx)("br",{}),"VolumeId"]}),(0,i.jsx)(n.td,{children:"Die ID des vorhandenen persistenten Datentr\xe4gers, den Sie an die Instanz anh\xe4ngen k\xf6nnen."}),(0,i.jsxs)(n.td,{children:["Erforderlich, wenn UsePersistentVolume auf \u201eVorhanden\u201cgesetzt ist",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Das persistente Volume muss sich in derselben Verf\xfcgbarkeitszone wie die AI Unlimited-Instanz befinden."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["PersistentVolume",(0,i.jsx)("br",{}),"DeletionPolicy"]}),(0,i.jsx)(n.td,{children:"Das persistente Volume-Verhalten, wenn Sie die CloudFormation-Bereitstellung l\xf6schen."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: Retain ",(0,i.jsx)("br",{}),"Unterst\xfctzte Optionen sind: \u201eDelete\u201c, \u201eRetain\u201c, \u201eRetainExceptOnCreate\u201c und \u201eSnapshot\u201c."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LatestAmiId"}),(0,i.jsx)(n.td,{children:"Die ID des Images, das auf die neueste AMI-Version verweist. Dieser Wert wird f\xfcr die SSM-Suche verwendet."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Diese Bereitstellung verwendet das neueste verf\xfcgbare Image ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2.",(0,i.jsx)("br",{}),"WICHTIG: Das \xc4ndern dieses Wertes kann den Stapel besch\xe4digen."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JupyterHttpPort"}),(0,i.jsx)(n.td,{children:"Der Port f\xfcr den Zugriff auf die Benutzeroberfl\xe4che des JupyterLab-Dienstes."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: 8888"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JupyterVersion"}),(0,i.jsx)(n.td,{children:"Die Version von JupyterLab, die Sie bereitstellen m\xf6chten."}),(0,i.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,i.jsx)("br",{}),"Standard: latest",(0,i.jsx)("br",{}),"Der Wert ist ein Container-Versionstag, zum Beispiel \u201elatest\u201c."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JupyterToken"}),(0,i.jsx)(n.td,{children:"Das Token oder Passwort, das f\xfcr den Zugriff auf JupyterLab \xfcber die Benutzeroberfl\xe4che verwendet wird."}),(0,i.jsxs)(n.td,{children:["Erforderlich",(0,i.jsx)("br",{}),"Standard: NA",(0,i.jsx)("br",{}),"Das Token muss mit einem Buchstaben beginnen und darf nur alphanumerische Zeichen enthalten. Das zul\xe4ssige Muster ist ^[a-zA-Z][a-zA-Z0-9-]*."]})]})]})]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Mehr erfahren: Persistentes Volume verwenden"}),(0,i.jsx)(n.p,{children:"Die JupyterLab-Instanz wird in einem Container ausgef\xfchrt und speichert ihre Konfigurationsdaten in einer Datenbank im Stammdatentr\xe4ger der Instanz. Diese Daten bleiben erhalten, wenn Sie die Instanz herunterfahren, neu starten oder einen Snapshot erstellen und neu starten."}),(0,i.jsx)(n.p,{children:"Ein persistentes Volume speichert Daten f\xfcr eine containerisierte Anwendung \xfcber die Lebensdauer des Containers, Pods oder Knotens hinaus, in dem sie ausgef\xfchrt wird."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Ohne ein persistentes Volumen"})}),(0,i.jsx)(n.p,{children:"Wenn der Container, Pod oder Knoten abst\xfcrzt oder beendet wird, gehen die JupyterLab-Konfigurationsdaten verloren. Sie k\xf6nnen eine neue JupyterLab-Instanz bereitstellen, jedoch nicht im selben Zustand wie die verlorene."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mit einem persistenten Volumen"})}),(0,i.jsx)(n.p,{children:"Wenn der Container, der Pod oder der Knoten abst\xfcrzt oder beendet wird und die JupyterLab-Konfigurationsdaten in einem persistenten Volume gespeichert sind, k\xf6nnen Sie eine neue JupyterLab-Instanz bereitstellen, die dieselbe Konfiguration wie die verlorene hat."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Beispiel"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Stellen Sie JupyterLab bereit und schlie\xdfen Sie diese Parameter ein:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UsePersistentVolume"}),": ",(0,i.jsx)(n.strong,{children:"New"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,i.jsx)(n.strong,{children:"Retain"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Nachdem Sie den Stapel erstellt haben, notieren Sie sich auf der Registerkarte ",(0,i.jsx)(n.strong,{children:"Ausgaben"})," die \u201evolume-id\u201c."]}),"\n",(0,i.jsx)(n.li,{children:"Verwenden Sie JupyterLab."}),"\n",(0,i.jsxs)(n.li,{children:["Wenn die JupyterLab-Instanz verloren geht, stellen Sie JupyterLab erneut bereit und schlie\xdfen Sie diese Parameter ein:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UsePersistentVolume"}),": ",(0,i.jsx)(n.strong,{children:"New"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,i.jsx)(n.strong,{children:"Retain"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ExistingPersistentVolumeId"}),": der Wert, den Sie in Schritt 2 notiert haben"]}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"Die neue JupyterLab-Instanz hat dieselbe Konfiguration wie die verlorene."})]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,i.jsx)(n.strong,{children:"Weiter"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"Konfigurieren Sie die Stapeloptionen"})," entsprechend Ihren Anforderungen und w\xe4hlen Sie dann ",(0,i.jsx)(n.strong,{children:"Weiter"})," aus."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\xfcberpr\xfcfen-und-erstellen-des-stapels",children:"\xdcberpr\xfcfen und Erstellen des Stapels"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\xdcberpr\xfcfen Sie die Vorlageneinstellungen."}),"\n",(0,i.jsx)(n.li,{children:"Aktivieren Sie das Kontrollk\xe4stchen, um zu best\xe4tigen, dass die Vorlage IAM-Ressourcen erstellen wird."}),"\n",(0,i.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,i.jsx)(n.strong,{children:"\xdcbermitteln"}),", um den Stapel bereitzustellen.",(0,i.jsx)("br",{}),"\nAuf der Registerkarte ",(0,i.jsx)(n.strong,{children:"Ereignisse"})," k\xf6nnen Sie den Fortschritt \xfcberwachen. Wenn der Status aller Ressourcen ",(0,i.jsx)(n.code,{children:"CREATE_COMPLETE"})," ist, ist das JupyterLab bereit."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Die Registerkarte ",(0,i.jsx)(n.strong,{children:"Ausgaben"})," zeigt die URL f\xfcr den Zugriff auf JupyterLab."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var i=r(96540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);