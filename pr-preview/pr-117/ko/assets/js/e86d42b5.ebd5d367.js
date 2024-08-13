"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6947],{41269:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>r});var a=t(74848),s=t(28453);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},76532:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>r});var a=t(74848),s=t(28453);const r=[];function o(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE HR\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Let\u2019s create a sample table and insert some data and query it. We will first create a table to hold employee information:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n)\nUNIQUE PRIMARY INDEX ( GlobalID );\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Now, let's insert a record:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n)\nVALUES (\n   101,\n   'Adam',\n   'Tworkowski',\n   '1980-01-05',\n   '2004-08-01',\n   01\n);\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Finally, let's see if we can retrieve the data:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM HR.Employees;\n"})}),"\n",(0,a.jsx)(n.p,{children:"You should get the following results:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"GlobalID  FirstName  LastName   DateOfBirth  JoinedDate  DepartmentCode\n--------  ---------  ---------- -----------  ----------  --------------\n     101  Adam       Tworkowski  1980-01-05  2004-08-01               1\n"})})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},9512:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var a=t(74848),s=t(28453),r=t(76532);const o=[{value:"Run sample queries",id:"run-sample-queries",level:2},...r.RM,{value:"Optional setup",id:"optional-setup",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Install VirtualBox and 7zip:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt update && apt-get install p7zip-full p7zip-rar virtualbox -y\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Retrieve the curl command to download Vantage Express."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.a,{href:"https://downloads.teradata.com/download/database/teradata-express-for-vmware-player",children:"Vantage Expess download page"})," (registration required)."]}),"\n",(0,a.jsxs)(n.li,{children:["Click on the latest download link, e.g. ",(0,a.jsx)(n.strong,{children:'"Vantage Express 17.20"'}),". You will see a license agreement popup. Don't accept the license yet."]}),"\n",(0,a.jsxs)(n.li,{children:["Open the network view in your browser. For example, in Chrome press ",(0,a.jsx)("kbd",{children:"F12"})," and navigate to ",(0,a.jsx)(n.code,{children:"Network"})," tab:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Browser Network Tab",src:t(26664).A+"",width:"1172",height:"764"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Accept the license by clicking on ",(0,a.jsx)(n.code,{children:"I Agree"})," button and cancel the download."]}),"\n",(0,a.jsxs)(n.li,{children:["In the network view, find the last request that starts with ",(0,a.jsx)(n.code,{children:"VantageExpress"}),". Right click on it and select ",(0,a.jsx)(n.code,{children:"Copy -> Copy as cURL"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Browser Copy culr",src:t(55479).A+"",width:"1024",height:"928"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Head back to the ssh session and download Vantage Express by pasting the curl command. Add ",(0,a.jsx)(n.code,{children:"-o ve.7z"})," to the command to save the download to file named ",(0,a.jsx)(n.code,{children:"ve.7z"}),". You can remove all the HTTP headers, e.g.:"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -o ve.7z 'http://d289lrf5tw1zls.cloudfront.net/database/teradata-express/VantageExpress17.20_Sles12_202108300444.7z?Expires=1638719978&Signature=GKBkNvery_long_signature__&Key-Pair-Id=********************'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Unzip the downloaded file. It will take several minutes:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"7z x ve.7z\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Start the VM in VirtualBox. The command will return immediately but the VM init process will take several minutes:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export VM_IMAGE_DIR="/opt/downloads/VantageExpress17.20_Sles12"\nDEFAULT_VM_NAME="vantage-express"\nVM_NAME="${VM_NAME:-$DEFAULT_VM_NAME}"\nvboxmanage createvm --name "$VM_NAME" --register --ostype openSUSE_64\nvboxmanage modifyvm "$VM_NAME" --ioapic on --memory 6000 --vram 128 --nic1 nat --cpus 4\nvboxmanage storagectl "$VM_NAME" --name "SATA Controller" --add sata --controller IntelAhci\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk1*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 1 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk2*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 2 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk3*\')"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tdssh,tcp,,4422,,22"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tddb,tcp,,1025,,1025"\nvboxmanage startvm "$VM_NAME" --type headless\nvboxmanage controlvm "$VM_NAME" keyboardputscancode 1c 1c\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["ssh to Vantage Express VM. Use ",(0,a.jsx)(n.code,{children:"root"})," as password:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ssh -p 4422 root@localhost\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Validate that the DB is up:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pdestate -a\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If the command returns ",(0,a.jsx)(n.code,{children:"PDE state is RUN/STARTED. DBS state is 5: Logons are enabled - The system is quiescent"}),", it means that Vantage Express has started.\nIf the status is different, repeat ",(0,a.jsx)(n.code,{children:"pdestate -a"})," till you get the correct status."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Once Vantage Express is up and running, start ",(0,a.jsx)(n.code,{children:"bteq"})," client command line client. BTEQ (pronounced \u201cbee-teek\u201d) is a general-purpose, command-based client tool used to submit SQL queries to a Teradata Database."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Once in bteq, connect to your Vantage Express instance. When asked for the password, enter ",(0,a.jsx)(n.code,{children:"dbc"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,a.jsx)(n.h2,{id:"run-sample-queries",children:"Run sample queries"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Using ",(0,a.jsx)(n.code,{children:"dbc"})," user, we will create a new database called ",(0,a.jsx)(n.code,{children:"HR"}),". Copy/paste this query and run press ",(0,a.jsx)("kbd",{children:"Enter"}),":"]}),"\n"]}),"\n",(0,a.jsx)(r.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"optional-setup",children:"Optional setup"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If you intend to stop and start the VM, you may want to add Vantage Express to autostart. ssh to your VM and run the following commands:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -i\n\ncat <<EOF >> /etc/default/virtualbox\nVBOXAUTOSTART_DB=/etc/vbox\nVBOXAUTOSTART_CONFIG=/etc/vbox/autostart.cfg\nEOF\n\ncat <<EOF > /etc/systemd/system/vantage-express.service\n[Unit]\nDescription=vm1\nAfter=network.target virtualbox.service\nBefore=runlevel2.target shutdown.target\n[Service]\nUser=root\nGroup=root\nType=forking\nRestart=no\nTimeoutSec=5min\nIgnoreSIGPIPE=no\nKillMode=process\nGuessMainPID=no\nRemainAfterExit=yes\nExecStart=/usr/bin/VBoxManage startvm vantage-express --type headless\nExecStop=/usr/bin/VBoxManage controlvm vantage-express savestate\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl enable vantage-express\nsystemctl start vantage-express\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},43457:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>r});var a=t(74848),s=t(28453);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You can now get a hosted instance of Vantage for free at ",(0,a.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"."]})})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},42813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=t(74848),s=t(28453),r=t(43457),o=t(41269),i=t(9512);const c={sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"December 12th, 2022",description:"Run Vantage Express on AWS.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AWS"]},l="Run Vantage Express on AWS",d={id:"get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",title:"Run Vantage Express on AWS",description:"Run Vantage Express on AWS.",source:"@site/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws.md",sourceDirName:"get-access-to-vantage/on-your-cloud-infrastructure",slug:"/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",permalink:"/pr-preview/pr-117/ko/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"December 12th, 2022",description:"Run Vantage Express on AWS.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AWS"]},sidebar:"tutorialSidebar",previous:{title:"Run Vantage Express on UTM",permalink:"/pr-preview/pr-117/ko/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm"},next:{title:"Run Vantage Express on Google Cloud",permalink:"/pr-preview/pr-117/ko/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp"}},u={},p=[...r.RM,{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},...i.RM,{value:"Cleanup",id:"cleanup",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Further reading",id:"further-reading",level:2},...o.RM];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"run-vantage-express-on-aws",children:"Run Vantage Express on AWS"}),"\n",(0,a.jsx)(r.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"This how-to demonstrates how to run Vantage Express on AWS. Vantage Express is a small footprint configuration that contains a fully functional Teradata SQL Engine."}),"\n",(0,a.jsxs)(n.admonition,{type:"important",children:[(0,a.jsx)("b",{children:"Cloud charges"}),(0,a.jsxs)(n.p,{children:["Vantage Express is distributed as a virtual machine image. This how-to uses the EC2 ",(0,a.jsx)(n.code,{children:"c5n.metal"})," instance type. It's a bare metal instance that costs over $3/h."]}),(0,a.jsxs)(n.p,{children:["If you want a cheaper option, try ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-117/ko/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",children:"Google Cloud"})," and ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-117/ko/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure",children:"Azure"})," which support nested virtualization and can run Vantage Express on cheap VM's."]}),(0,a.jsxs)(n.p,{children:["If you do not wish to pay for cloud usage, you can get a free hosted instance of Vantage at ",(0,a.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com/"}),". Alternatively, you install Vantage Express locally using ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-117/ko/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware",children:"VMware"}),", ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-117/ko/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox",children:"VirtualBox"}),", or ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-117/ko/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"UTM"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["An AWS account. If you need to create a new account follow ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/",children:"the official AWS instructions"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"awscli"})," command line utility installed and configured on your machine. You can find installation instructions here: ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You will need a VPC with an Internet-facing subnet. If you don't have one available, here is how you can create it:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Copied from https://cloudaffaire.com/how-to-create-a-custom-vpc-using-aws-cli/\n\n# Create VPC\nAWS_VPC_ID=$(aws ec2 create-vpc \\\n  --cidr-block 10.0.0.0/16 \\\n  --query \'Vpc.{VpcId:VpcId}\' \\\n  --output text)\n\n# Enable DNS hostname for your VPC\naws ec2 modify-vpc-attribute \\\n  --vpc-id $AWS_VPC_ID \\\n  --enable-dns-hostnames "{\\"Value\\":true}"\n\n# Create a public subnet\nAWS_SUBNET_PUBLIC_ID=$(aws ec2 create-subnet \\\n  --vpc-id $AWS_VPC_ID --cidr-block 10.0.1.0/24 \\\n  --query \'Subnet.{SubnetId:SubnetId}\' \\\n  --output text)\n\n# Enable Auto-assign Public IP on Public Subnet\naws ec2 modify-subnet-attribute \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --map-public-ip-on-launch\n\n# Create an Internet Gateway\nAWS_INTERNET_GATEWAY_ID=$(aws ec2 create-internet-gateway \\\n  --query \'InternetGateway.{InternetGatewayId:InternetGatewayId}\' \\\n  --output text)\n\n# Attach Internet gateway to your VPC\naws ec2 attach-internet-gateway \\\n  --vpc-id $AWS_VPC_ID \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID\n\n# Create a route table\nAWS_CUSTOM_ROUTE_TABLE_ID=$(aws ec2 create-route-table \\\n  --vpc-id $AWS_VPC_ID \\\n  --query \'RouteTable.{RouteTableId:RouteTableId}\' \\\n  --output text )\n\n# Create route to Internet Gateway\naws ec2 create-route \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --destination-cidr-block 0.0.0.0/0 \\\n  --gateway-id $AWS_INTERNET_GATEWAY_ID \\\n  --output text\n\n# Associate the public subnet with route table\nAWS_ROUTE_TABLE_ASSOID=$(aws ec2 associate-route-table  \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --output text | head -1)\n\n# Create a security group\naws ec2 create-security-group \\\n  --vpc-id $AWS_VPC_ID \\\n  --group-name myvpc-security-group \\\n  --description \'My VPC non default security group\' \\\n  --output text\n\n# Get security group ID\'s\nAWS_DEFAULT_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'SecurityGroups[?GroupName == `default`].GroupId\' \\\n  --output text) &&\n  AWS_CUSTOM_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'SecurityGroups[?GroupName == `myvpc-security-group`].GroupId\' \\\n  --output text)\n\n# Create security group ingress rules\naws ec2 authorize-security-group-ingress \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --ip-permissions \'[{"IpProtocol": "tcp", "FromPort": 22, "ToPort": 22, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow SSH"}]}]\' \\\n  --output text\n\n# Add a tag to the VPC\naws ec2 create-tags \\\n  --resources $AWS_VPC_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc"\n\n# Add a tag to public subnet\naws ec2 create-tags \\\n  --resources $AWS_SUBNET_PUBLIC_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-public-subnet"\n\n# Add a tag to the Internet-Gateway\naws ec2 create-tags \\\n  --resources $AWS_INTERNET_GATEWAY_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-internet-gateway"\n\n# Add a tag to the default route table\nAWS_DEFAULT_ROUTE_TABLE_ID=$(aws ec2 describe-route-tables \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'RouteTables[?Associations[0].Main != `false`].RouteTableId\' \\\n  --output text) &&\n  aws ec2 create-tags \\\n  --resources $AWS_DEFAULT_ROUTE_TABLE_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-default-route-table"\n\n# Add a tag to the public route table\naws ec2 create-tags \\\n  --resources $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-public-route-table"\n\n# Add a tags to security groups\naws ec2 create-tags \\\n  --resources $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-security-group" &&\n  aws ec2 create-tags \\\n  --resources $AWS_DEFAULT_SECURITY_GROUP_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-default-security-group"\n\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"To create a VM you will need an ssh key pair. If you don't have it already, create one:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"aws ec2 create-key-pair --key-name vantage-key --query 'KeyMaterial' --output text > vantage-key.pem\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Restrict access to the private key. Replace ",(0,a.jsx)(n.code,{children:"<path_to_private_key_file>"})," with the private key path returned by the previous command:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chmod 600 vantage-key.pem\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Get the AMI id of the latest Ubuntu image in your region:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"AWS_AMI_ID=$(aws ec2 describe-images \\\n  --filters 'Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-*amd64*' \\\n  --query 'Images[*].[Name,ImageId,CreationDate]' --output text \\\n  | sort -k3 -r | head -n1 | cut -f 2)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a Ubuntu VM with 4 CPU's and 8GB of RAM, and a 70GB disk."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"AWS_INSTANCE_ID=$(aws ec2 run-instances \\\n  --image-id $AWS_AMI_ID \\\n  --count 1 \\\n  --instance-type c5n.metal \\\n  --block-device-mapping DeviceName=/dev/sda1,Ebs={VolumeSize=70} \\\n  --key-name vantage-key \\\n  --security-group-ids $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --query 'Instances[0].InstanceId' \\\n  --output text)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ssh to your VM:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'AWS_INSTANCE_PUBLIC_IP=$(aws ec2 describe-instances \\\n  --query "Reservations[*].Instances[*].PublicIpAddress" \\\n  --output=text --instance-ids $AWS_INSTANCE_ID)\nssh -i vantage-key.pem ubuntu@$AWS_INSTANCE_PUBLIC_IP\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Once in the VM, switch to ",(0,a.jsx)(n.code,{children:"root"})," user:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -i\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Prepare the download directory for Vantage Express:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/downloads\ncd /opt/downloads\n"})}),"\n",(0,a.jsx)(i.Ay,{}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you would like to connect to Vantage Express from the Internet, you will need to open up firewall holes to your VM. You should also change the default password to ",(0,a.jsx)(n.code,{children:"dbc"})," user:"]}),"\n",(0,a.jsxs)(n.li,{children:["To change the password for ",(0,a.jsx)(n.code,{children:"dbc"})," user go to your VM and start bteq:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Login to your database using ",(0,a.jsx)(n.code,{children:"dbc"})," as username and password:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Change the password for ",(0,a.jsx)(n.code,{children:"dbc"})," user:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"MODIFY USER dbc AS PASSWORD = new_password;\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You can now open up port 1025 to the internet:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'aws ec2 authorize-security-group-ingress \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --ip-permissions \'[{"IpProtocol": "tcp", "FromPort": 1025, "ToPort": 1025, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow Teradata port"}]}]\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,a.jsx)(n.p,{children:"To stop incurring charges, delete all the resources:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Delete the VM\naws ec2 terminate-instances --instance-ids $AWS_INSTANCE_ID --output text\n\n# Wait for the VM to terminate\n\n# Delete custom security group\naws ec2 delete-security-group \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID\n\n# Delete internet gateway\naws ec2 detach-internet-gateway \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID \\\n  --vpc-id $AWS_VPC_ID &&\n  aws ec2 delete-internet-gateway \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID\n\n# Delete the custom route table\naws ec2 disassociate-route-table \\\n  --association-id $AWS_ROUTE_TABLE_ASSOID &&\n  aws ec2 delete-route-table \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID\n\n# Delete the public subnet\naws ec2 delete-subnet \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID\n\n# Delete the vpc\naws ec2 delete-vpc \\\n  --vpc-id $AWS_VPC_ID\n"})}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/pr-preview/pr-117/ko/quickstarts/manage-data/nos",children:"Query data stored in object storage"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20",children:"Teradata\xae Studio\u2122 and Studio\u2122 Express Installation Guide"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root",children:"Introduction to BTEQ"})}),"\n"]}),"\n",(0,a.jsx)(o.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},55479:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/browser.copy.curl-ef8d15fbb3caf4c7c5981d9e8888f5aa.png"},26664:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/browser.network-10b20cd42fc007de4c04d0c25874a866.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);