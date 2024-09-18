"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3184],{11319:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>t});var s=a(74848),r=a(28453);const t=[];function l(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["\u3054\u8cea\u554f\u304c\u3042\u308b\u5834\u5408\u3084\u3055\u3089\u306b\u30b5\u30dd\u30fc\u30c8\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001 ",(0,s.jsx)(n.a,{href:"https://support.teradata.com/community",children:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30d5\u30a9\u30fc\u30e9\u30e0"})," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u30b5\u30dd\u30fc\u30c8\u3092\u53d7\u3051\u305f\u308a\u3001\u4ed6\u306e\u30b3\u30df\u30e5\u30cb\u30c6\u30a3 \u30e1\u30f3\u30d0\u30fc\u3068\u4ea4\u6d41\u3057\u305f\u308a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},65734:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>t});var s=a(74848),r=a(28453);const t=[];function l(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE HR\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30b5\u30f3\u30d7\u30eb \u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u3001\u30c7\u30fc\u30bf\u3092\u633f\u5165\u3057\u3066\u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u307e\u305a\u3001\u5f93\u696d\u54e1\u60c5\u5831\u3092\u4fdd\u6301\u3059\u308b\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n)\nUNIQUE PRIMARY INDEX ( GlobalID );\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6b21\u306b\u3001\u30ec\u30b3\u30fc\u30c9\u3092\u633f\u5165\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n)\nVALUES (\n   101,\n   'Adam',\n   'Tworkowski',\n   '1980-01-05',\n   '2004-08-01',\n   01\n);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6700\u5f8c\u306b\u3001\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM HR.Employees;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u7d50\u679c\u304c\u5f97\u3089\u308c\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"GlobalID  FirstName  LastName   DateOfBirth  JoinedDate  DepartmentCode\n--------  ---------  ---------- -----------  ----------  --------------\n     101  Adam       Tworkowski  1980-01-05  2004-08-01               1\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},12090:(e,n,a)=>{a.d(n,{Ay:()=>i,RM:()=>l});var s=a(74848),r=a(28453),t=a(65734);const l=[{value:"\u30b5\u30f3\u30d7\u30eb \u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b",id:"\u30b5\u30f3\u30d7\u30eb-\u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b",level:2},...t.RM,{value:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VirtualBox\u30687 zip\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt update && apt-get install p7zip-full p7zip-rar virtualbox -y\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Vantage Express \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e curl \u30b3\u30de\u30f3\u30c9\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://downloads.teradata.com/download/database/teradata-express-for-vmware-player",children:"Vantage Express \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9 \u30da\u30fc\u30b8"})," \u3078\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059\uff09\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u6700\u65b0\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9 \u30ea\u30f3\u30af (\u4f8b: **\u300cVantage Express 17.20\u300d)**\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u4f7f\u7528\u8a31\u8afe\u5951\u7d04\u306e\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u307e\u3060\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u53d7\u3051\u5165\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u30d6\u30e9\u30a6\u30b6\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30d3\u30e5\u30fc\u3092\u958b\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001Chrome \u3067\u306f ",(0,s.jsx)("kbd",{children:"F12 \u30ad\u30fc"})," \u3092\u62bc\u3057\u3066 ",(0,s.jsx)(n.code,{children:"Network"})," \u30bf\u30d6\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u30d6\u30e9\u30a6\u30b6\u306e\u300cNetwork\u300d\u30bf\u30d6",src:a(94582).A+"",width:"1172",height:"764"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"I Agree (\u540c\u610f\u3059\u308b)"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u53d7\u3051\u5165\u308c\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30d3\u30e5\u30fc\u3067\u3001 ",(0,s.jsx)(n.code,{children:"VantageExpress"})," \u3067\u59cb\u307e\u308b\u6700\u5f8c\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u898b\u3064\u3051\u307e\u3059\u3002\u305d\u308c\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066 ",(0,s.jsx)(n.code,{children:"Copy -> Copy as cURL"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Browser Copy culr",src:a(2053).A+"",width:"1024",height:"928"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["ssh \u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u623b\u308a\u3001curl \u30b3\u30de\u30f3\u30c9\u3092\u8cbc\u308a\u4ed8\u3051\u3066 Vantage Express \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092 ",(0,s.jsx)(n.code,{children:"ve.7z"})," \u3068\u3044\u3046\u540d\u524d\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3059\u308b\u306b\u306f\u3001\u30b3\u30de\u30f3\u30c9\u306b ",(0,s.jsx)(n.code,{children:"-o ve.7z"})," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3059\u3079\u3066\u306e HTTP \u30d8\u30c3\u30c0\u30fc\u3092\u524a\u9664\u3067\u304d\u307e\u3059\u3002\u4f8b:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -o ve.7z 'http://d289lrf5tw1zls.cloudfront.net/database/teradata-express/VantageExpress17.20_Sles12_202108300444.7z?Expires=1638719978&Signature=GKBkNvery_long_signature__&Key-Pair-Id=********************'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u89e3\u51cd\u3057\u307e\u3059\u3002\u6570\u5206\u304b\u304b\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"7z x ve.7z\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VirtualBox \u3067 VM \u3092\u8d77\u52d5\u3057\u307e\u3059\u30b3\u30de\u30f3\u30c9\u306f\u3059\u3050\u306b\u8fd4\u3055\u308c\u307e\u3059\u304c\u3001VM \u306e\u521d\u671f\u5316\u30d7\u30ed\u30bb\u30b9\u306b\u306f\u6570\u5206\u304b\u304b\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export VM_IMAGE_DIR="/opt/downloads/VantageExpress17.20_Sles12"\nDEFAULT_VM_NAME="vantage-express"\nVM_NAME="${VM_NAME:-$DEFAULT_VM_NAME}"\nvboxmanage createvm --name "$VM_NAME" --register --ostype openSUSE_64\nvboxmanage modifyvm "$VM_NAME" --ioapic on --memory 6000 --vram 128 --nic1 nat --cpus 4\nvboxmanage storagectl "$VM_NAME" --name "SATA Controller" --add sata --controller IntelAhci\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk1*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 1 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk2*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 2 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk3*\')"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tdssh,tcp,,4422,,22"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tddb,tcp,,1025,,1025"\nvboxmanage startvm "$VM_NAME" --type headless\nvboxmanage controlvm "$VM_NAME" keyboardputscancode 1c 1c\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Vantage Express VM \u306b ssh \u3067\u63a5\u7d9a\u3057\u307e\u3059\u3002 ",(0,s.jsx)(n.code,{children:"root"})," \u3092\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh -p 4422 root@localhost\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DB \u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pdestate -a\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u30b3\u30de\u30f3\u30c9\u304c",(0,s.jsx)(n.code,{children:"PDE state is RUN/STARTED. DBS state is 5: Logons are enabled - The system is quiescent"}),"\u3092\u8fd4\u3059\u5834\u5408\u306f\u3001Vantage Express\u304c\u8d77\u52d5\u3057\u305f\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u72b6\u614b\u304c\u7570\u306a\u308b\u5834\u5408\u306f\u3001\u6b63\u3057\u3044\u30b9\u30c6\u30fc\u30bf\u30b9\u304c\u5f97\u3089\u308c\u308b\u307e\u3067 ",(0,s.jsx)(n.code,{children:"pdestate -a"})," \u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Vantage Express\u304c\u8d77\u52d5\u3057\u3066\u5b9f\u884c\u3055\u308c\u305f\u3089\u3001",(0,s.jsx)(n.code,{children:"bteq"})," \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002BTEQ (\u300c\u30d3\u30fc\u30c6\u30c3\u30af\u300d\u3068\u767a\u97f3) \u306f\u3001Teradata Database \u306b SQL \u30af\u30a8\u30ea\u30fc\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u3001\u6c4e\u7528\u306e\u30b3\u30de\u30f3\u30c9 \u30d9\u30fc\u30b9\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 \u30c4\u30fc\u30eb\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["bteq \u306b\u5165\u3063\u305f\u3089\u3001Vantage Express \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u6c42\u3081\u3089\u308c\u305f\u3089\u3001 ",(0,s.jsx)(n.code,{children:"dbc"})," \u3092\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30b5\u30f3\u30d7\u30eb-\u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b",children:"\u30b5\u30f3\u30d7\u30eb \u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dbc"})," \u30e6\u30fc\u30b6\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,s.jsx)(n.code,{children:"HR"})," \u3068\u3044\u3046\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30af\u30a8\u30ea\u30fc\u3092\u30b3\u30d4\u30fc/\u8cbc\u308a\u4ed8\u3051\u3057\u3066\u5b9f\u884c\u3057\u3001 ",(0,s.jsx)("kbd",{children:"Enter"}),"\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VM \u3092\u505c\u6b62\u3057\u3066\u8d77\u52d5\u3059\u308b\u5834\u5408\u306f\u3001Vantage Express \u3092\u81ea\u52d5\u8d77\u52d5\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 VM \u306b ssh \u3067\u63a5\u7d9a\u3057\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -i\n\ncat <<EOF >> /etc/default/virtualbox\nVBOXAUTOSTART_DB=/etc/vbox\nVBOXAUTOSTART_CONFIG=/etc/vbox/autostart.cfg\nEOF\n\ncat <<EOF > /etc/systemd/system/vantage-express.service\n[Unit]\nDescription=vm1\nAfter=network.target virtualbox.service\nBefore=runlevel2.target shutdown.target\n[Service]\nUser=root\nGroup=root\nType=forking\nRestart=no\nTimeoutSec=5min\nIgnoreSIGPIPE=no\nKillMode=process\nGuessMainPID=no\nRemainAfterExit=yes\nExecStart=/usr/bin/VBoxManage startvm vantage-express --type headless\nExecStop=/usr/bin/VBoxManage controlvm vantage-express savestate\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl enable vantage-express\nsystemctl start vantage-express\n"})})]})}function i(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},64375:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>t});var s=a(74848),r=a(28453);const t=[];function l(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["\u73fe\u5728\u3001 ",(0,s.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"\u3067 Vantage \u306e\u30db\u30b9\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7121\u6599\u3067\u5165\u624b\u3067\u304d\u307e\u3059\u3002"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},96119:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>v,frontMatter:()=>h,metadata:()=>x,toc:()=>m});var s=a(74848),r=a(28453),t=a(64375),l=a(11319),c=a(12090),i=a(56240),o=a(19365);function d(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(i.A,{children:[(0,s.jsxs)(o.A,{value:"Windows",label:"Windows",default:!0,children:[(0,s.jsx)(n.p,{children:"Run in Powershell:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express ` --zone=us-central1-a ` --machine-type=n2-custom-4-8192 ` --create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced ` --enable-nested-virtualization ` --tags=ve \n"})})]}),(0,s.jsx)(o.A,{value:"MacOS",label:"MacOS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"gcloud compute instances create teradata-vantage-express \\",children:" --zone=us-central1-a \\\n --machine-type=n2-custom-4-8192 \\\n --create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \\\n --enable-nested-virtualization \\\n --tags=ve \n"})})}),(0,s.jsx)(o.A,{value:"Linux",label:"Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"gcloud compute instances create teradata-vantage-express \\",children:" --zone=us-central1-a \\\n --machine-type=n2-custom-4-8192 \\\n --create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \\\n --enable-nested-virtualization \\\n --tags=ve \n"})})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}const h={sidebar_position:2,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"2022 \u5e74 8 \u6708 22 \u65e5",description:"Google Cloud \u3067 Vantage Express \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},p="Google Cloud \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",x={id:"get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",title:"Google Cloud \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",description:"Google Cloud \u3067 Vantage Express \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp.md",sourceDirName:"get-access-to-vantage/on-your-cloud-infrastructure",slug:"/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",permalink:"/pr-preview/pr-135/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"2022 \u5e74 8 \u6708 22 \u65e5",description:"Google Cloud \u3067 Vantage Express \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"AWS \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-135/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws"},next:{title:"Azure \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-135/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure"}},g={},m=[...t.RM,{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},...c.RM,{value:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7",id:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7",level:2},{value:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"\u3055\u3089\u306b\u8a73\u3057\u304f",level:2},...l.RM];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"google-cloud-\u3067-vantage-express-\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",children:"Google Cloud \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5"}),"\n",(0,s.jsx)(t.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30cf\u30a6\u30c4\u30fc\u3067\u306f\u3001Google Cloud Platform \u3067 Vantage Express \u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002Vantage Express \u306b\u306f\u3001\u5b8c\u5168\u306b\u6a5f\u80fd\u3059\u308b Teradata SQL \u30a8\u30f3\u30b8\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u30af\u30e9\u30a6\u30c9\u306e\u4f7f\u7528\u6599\u3092\u652f\u6255\u3044\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001",(0,s.jsx)(n.a,{href:"/pr-preview/pr-135/ja/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware",children:"VMware"}),"\u3001",(0,s.jsx)(n.a,{href:"/pr-preview/pr-135/ja/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox",children:"VirtualBox"}),"\u3001",(0,s.jsx)(n.a,{href:"/pr-preview/pr-135/ja/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"UTM"})," \u3092\u4f7f\u7528\u3057\u3066 Vantage Express \u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Google\u30af\u30e9\u30a6\u30c9\u30a2\u30ab\u30a6\u30f3\u30c8\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud"})," \u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 \u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u304c\u30de\u30b7\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"https://cloud.google.com/sdk/docs/install"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["4 \u3064\u306e CPU\u30018 GB \u306e RAM\u300170 GB \u306e\u30d0\u30e9\u30f3\u30b9 \u30c7\u30a3\u30b9\u30af\u3092\u5099\u3048\u305f Ubuntu VM \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u306f ",(0,s.jsx)(n.code,{children:"us-central1"})," \u3001\u30ea\u30fc\u30b8\u30e7\u30f3\u306b VM \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u6700\u9ad8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5f97\u308b\u306b\u306f\u3001\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u6700\u3082\u8fd1\u3044\u30ea\u30fc\u30b8\u30e7\u30f3\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30ea\u30fc\u30b8\u30e7\u30f3\u306e\u4e00\u89a7\u306b\u3064\u3044\u3066\u306f ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/regions-zones",children:"Google Cloud \u30ea\u30fc\u30b8\u30e7\u30f3\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3001\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,s.jsx)(u,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VM\u306bssh\u3067\u63a5\u7d9a\u3059\u308b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcloud compute ssh teradata-vantage-express --zone=us-central1-a\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"})," \u30e6\u30fc\u30b6\u30fc\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -i\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Vantage Express\u7528\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u6e96\u5099\u3059\u308b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/downloads\ncd /opt/downloads\n"})}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u304b\u3089 Vantage Express \u306b\u63a5\u7d9a\u3059\u308b\u5834\u5408\u306f\u3001VM \u3078\u306e\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u306e\u7a74\u3092\u958b\u3051\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092 ",(0,s.jsx)(n.code,{children:"dbc"})," \u30e6\u30fc\u30b6\u30fc\u306b\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dbc"})," \u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001VM \u306b\u79fb\u52d5\u3057\u3066 bteq \u3092\u958b\u59cb\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u3057\u3066 ",(0,s.jsx)(n.code,{children:"dbc"})," \u3092\u4f7f\u7528\u3057\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dbc"})," \u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"MODIFY USER dbc AS PASSWORD = new_password;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"gcloud \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30dd\u30fc\u30c8 1025 \u3092\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcloud compute firewall-rules create vantage-express --allow=tcp:1025 --direction=IN --target-tags=ve\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7",children:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7"}),"\n",(0,s.jsx)(n.p,{children:"\u6599\u91d1\u306e\u767a\u751f\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001VM \u3092\u524a\u9664\u3059\u308b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcloud compute instances delete teradata-vantage-express --zone=us-central1-a\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u307e\u305f\u3001\u8ffd\u52a0\u3057\u305f\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb \u30eb\u30fc\u30eb\u3082\u5fd8\u308c\u305a\u306b\u524a\u9664\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4f8b:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gcloud compute firewall-rules delete vantage-express\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",children:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-135/ja/quickstarts/manage-data/nos",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30af\u30a8\u30ea\u30fc\u30c7\u30fc\u30bf"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u3055\u3089\u306b\u8a73\u3057\u304f",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20",children:"Teradata\xaeStudio\u2122\u304a\u3088\u3073Studio\u2122Express\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb \u30ac\u30a4\u30c9"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root",children:"BTEQ \u306e\u7d39\u4ecb"})}),"\n"]}),"\n",(0,s.jsx)(l.Ay,{})]})}function v(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>l});a(96540);var s=a(34164);const r={tabItem:"tabItem_Ymn6"};var t=a(74848);function l(e){var n=e.children,a=e.hidden,l=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:a,children:n})}},56240:(e,n,a)=>{a.d(n,{A:()=>A});var s=a(96540),r=a(34164),t=a(23104),l=a(56347),c=a(205),i=a(57485);var o=a(89466);function d(e){var n,a;return null!=(n=null==(a=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function u(e){var n=e.values,a=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n,a,s=(void 0===(a=function(e,n){return e.value===n.value})&&(a=function(e,n){return e===n}),(n=e).filter((function(e,s){return n.findIndex((function(n){return a(n,e)}))!==s})));if(s.length>0)throw new Error('Docusaurus error: Duplicate values "'+s.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,t=(0,l.W6)(),c=function(e){var n=e.queryString,a=void 0!==n&&n,s=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:a,groupId:r});return[(0,i.aZ)(c),(0,s.useCallback)((function(e){if(c){var n=new URLSearchParams(t.location.search);n.set(c,e),t.replace(Object.assign({},t.location,{search:n.toString()}))}}),[c,t])]}function x(e){var n,a,r,t,l=e.defaultValue,i=e.queryString,d=void 0!==i&&i,x=e.groupId,g=u(e),m=(0,s.useState)((function(){return function(e){var n,a=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:g})})),j=m[0],v=m[1],b=p({queryString:d,groupId:x}),f=b[0],A=b[1],E=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:x}.groupId),a=(0,o.Dv)(n),r=a[0],t=a[1],[r,(0,s.useCallback)((function(e){n&&t.set(e)}),[n,t])]),y=E[0],V=E[1],M=function(){var e=null!=f?f:y;return h({value:e,tabValues:g})?e:null}();return(0,c.A)((function(){M&&v(M)}),[M]),{selectedValue:j,selectValue:(0,s.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),A(e),V(e)}),[A,V,g]),tabValues:g}}var g=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function v(e){var n=e.className,a=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,i=[],o=(0,t.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,a=i.indexOf(n),r=c[a].value;r!==s&&(o(n),l(r))},u=function(e){var n,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var s,r=i.indexOf(e.currentTarget)+1;a=null!=(s=i[r])?s:i[0];break;case"ArrowLeft":var t,l=i.indexOf(e.currentTarget)-1;a=null!=(t=i[l])?t:i[i.length-1]}null==(n=a)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:c.map((function(e){var n=e.value,a=e.label,t=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return i.push(e)},onKeyDown:u,onClick:d},t,{className:(0,r.A)("tabs__item",m.tabItem,null==t?void 0:t.className,{"tabs__item--active":s===n}),children:null!=a?a:n}),n)}))})}function b(e){var n=e.lazy,a=e.children,r=e.selectedValue,t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var l=t.find((function(e){return e.props.value===r}));return l?(0,s.cloneElement)(l,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function f(e){var n=x(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,Object.assign({},e,n)),(0,j.jsx)(b,Object.assign({},e,n))]})}function A(e){var n=(0,g.A)();return(0,j.jsx)(f,Object.assign({},e,{children:d(e.children)}),String(n))}},2053:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/browser.copy.curl-ef8d15fbb3caf4c7c5981d9e8888f5aa.png"},94582:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/browser.network-10b20cd42fc007de4c04d0c25874a866.png"},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>c});var s=a(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);