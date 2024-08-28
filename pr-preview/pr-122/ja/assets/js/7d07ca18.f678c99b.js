"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1410],{41269:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>i});var a=t(74848),s=t(28453);const i=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function r(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},49609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(74848),s=t(28453),i=t(41269);const o={sidebar_position:13,author:"Igor Machin, Ambrose Inman",email:"igor.machin@teradata.com",page_last_update:"November 18th, 2022",description:"Execute Airflow workflows that use dbt with Teradata Vantage",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","airflow","queries","dbt"]},r="Execute Airflow workflows that use dbt with Teradata Vantage",l={id:"manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage",title:"Execute Airflow workflows that use dbt with Teradata Vantage",description:"Execute Airflow workflows that use dbt with Teradata Vantage",source:"@site/quickstarts/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage",permalink:"/pr-preview/pr-122/ja/quickstarts/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,author:"Igor Machin, Ambrose Inman",email:"igor.machin@teradata.com",page_last_update:"November 18th, 2022",description:"Execute Airflow workflows that use dbt with Teradata Vantage",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","airflow","queries","dbt"]},sidebar:"tutorialSidebar",previous:{title:"Create Parquet files in object storage",permalink:"/pr-preview/pr-122/ja/quickstarts/manage-data/create-parquet-files-in-object-storage"},next:{title:"Connect Teradata Vantage to Salesforce using Amazon Appflow",permalink:"/pr-preview/pr-122/ja/quickstarts/manage-data/integrate-teradata-vantage-to-salesforce-using-amazon-appflow"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequsites",id:"prerequsites",level:2},{value:"Install and execute Airflow",id:"install-and-execute-airflow",level:2},{value:"Create a VM",id:"create-a-vm",level:3},{value:"Install Python",id:"install-python",level:3},{value:"Create an Airflow environment",id:"create-an-airflow-environment",level:3},{value:"Install Docker",id:"install-docker",level:3},{value:"Install <code>docker-compose</code> and docker environment configuration files",id:"install-docker-compose-and-docker-environment-configuration-files",level:3},{value:"Install a test dbt project",id:"install-a-test-dbt-project",level:3},{value:"Create the Airflow environment in Docker",id:"create-the-airflow-environment-in-docker",level:3},{value:"Run an Airflow DAG",id:"run-an-airflow-dag",level:3},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...i.RM];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"execute-airflow-workflows-that-use-dbt-with-teradata-vantage",children:"Execute Airflow workflows that use dbt with Teradata Vantage"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"This tutorial demonstrates how to install Airflow on an AWS EC2 VM, configure the workflow to use dbt, and run it against a Teradata Vantage database. Airflow is a task scheduling tool that is typically used to build data pipelines to process and load data. In this example, we go through the Airflow installation process, which creates a Docker-based Airflow environment. Once Airflow is installed, we run several Airflow DAG (Direct Acyclic Graph, or simply workflow) examples that load data into a Teradata Vantage database."}),"\n",(0,a.jsx)(n.h2,{id:"prerequsites",children:"Prerequsites"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Access to AWS (Amazon Web Services) with permissions to create a VM."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"This tutorial can be adjusted to other compute platforms or even on a bare metal machine as long as it has a computing and storage capacity comparable to the machine mentioned in this document (t2.2xlarge EC2 on AWS with approximately 100GB of storage) and is connected to the internet. If you decide to use a different compute platform, some steps in the tutorial will have to be altered."})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"An SSH client."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you are on a Mac or a Linux machine, these tools are already included. If you are on Windows, consider ",(0,a.jsx)(n.a,{href:"https://www.putty.org",children:"PuTTY"})," or ",(0,a.jsx)(n.a,{href:"https://mobaxterm.mobatek.net/download.html",children:"MobaXterm"}),"."]})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Access to a Teradata Vantage database. If you don't have access to Teradata Vantage, explore ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-122/ja/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"Vantage Express"})," - a free edition for developers."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"install-and-execute-airflow",children:"Install and execute Airflow"}),"\n",(0,a.jsx)(n.h3,{id:"create-a-vm",children:"Create a VM"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to the AWS EC2 console and click on ",(0,a.jsx)(n.code,{children:"Launch instance"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.code,{children:"Red Hat"})," for OS image."]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.code,{children:"t2.2xlarge"})," for instance type."]}),"\n",(0,a.jsx)(n.li,{children:"Create a new key pair or use an existing one."}),"\n",(0,a.jsx)(n.li,{children:"Apply network settings that will allow you ssh to the server and the server will have outbound connectivity to the Internet. Usually, applying the default settings will do."}),"\n",(0,a.jsx)(n.li,{children:"Assign 100GB of storage."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"install-python",children:"Install Python"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["ssh to the machine using ",(0,a.jsx)(n.code,{children:"ec2-user"})," user."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Check if python is installed (should be Python 3.7 or higher). Type ",(0,a.jsx)(n.code,{children:"python"})," or ",(0,a.jsx)(n.code,{children:"python3"})," on the command line."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["If python is not installed (you are getting ",(0,a.jsx)(n.code,{children:"command not found"})," message) run the commands below to install it. The commands may require you to confirm the installation by typing ",(0,a.jsx)(n.code,{children:"y"})," and enter."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="install_python", role="content-editable emits-gtm-events"',children:"sudo yum install python3\n# create a virtual environment for the project\nsudo yum install python3-pip\nsudo pip3 install virtualenv\n"})}),"\n",(0,a.jsx)(n.h3,{id:"create-an-airflow-environment",children:"Create an Airflow environment"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create the Airflow directory structure (from the ec2-user home directory /home/ec2-user)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="install_airflow", role="content-editable emits-gtm-events"',children:'mkdir airflow\ncd airflow\nmkdir -p ./dags ./logs ./plugins ./data ./config ./data\necho -e "AIRFLOW_UID=$(id -u)" > .env\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Use your preferred file transfer tool (",(0,a.jsx)(n.code,{children:"scp"}),", ",(0,a.jsx)(n.code,{children:"PuTTY"}),", ",(0,a.jsx)(n.code,{children:"MobaXterm"}),", or similar) to upload ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(15508).A+"",children:"airflow.cfg"})," file to ",(0,a.jsx)(n.code,{children:"airflow/config"})," directory."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"install-docker",children:"Install Docker"}),"\n",(0,a.jsx)(n.p,{children:"Docker is a containerization tool that allows us to install Airflow in a containerized environment."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The steps must be executed in ",(0,a.jsx)(n.code,{children:"airflow"})," directory."]})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Uninstall podman (RHEL containerization tool)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="uninstall_podman", role="content-editable emits-gtm-events"',children:"sudo yum remove docker \\\ndocker-client \\\ndocker-client-latest \\\ndocker-common \\\ndocker-latest \\\ndocker-latest-logrotate \\\ndocker-logrotate \\\ndocker-engine \\\npodman \\\nrunc\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Install yum utilities"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="install_yum", role="content-editable emits-gtm-events"',children:"sudo yum install -y yum-utils\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Add docker to yum repository."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="add_docker_to_yum", role="content-editable emits-gtm-events"',children:"sudo yum-config-manager \\\n--add-repo \\\nhttps://download.docker.com/linux/centos/docker-ce.repo\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Install docker."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="install_docker", role="content-editable emits-gtm-events"',children:"sudo yum install docker-ce docker-ce-cli containerd.io\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Start docker as a service. The first command runs the docker service automatically when the system starts up next time. The second command starts Docker now."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="start_docker", role="content-editable emits-gtm-events"',children:"sudo systemctl enable docker\nsudo systemctl start docker\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"Check if Docker is installed correctly. This command should return an empty list of containers (since we have not started any container yet):"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="check_docker", role="content-editable emits-gtm-events"',children:"sudo docker ps\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"install-docker-compose-and-docker-environment-configuration-files",children:["Install ",(0,a.jsx)(n.code,{children:"docker-compose"})," and docker environment configuration files"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Upload ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(71206).A+"",children:"Dockerfile"})," and ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(14560).A+"",children:"Dockerfile"})," files to the VM and save them in ",(0,a.jsx)(n.code,{children:"airflow"})," directory."]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["What ",(0,a.jsx)(n.code,{children:"docker-compose.yaml"})," and ",(0,a.jsx)(n.code,{children:"Dockerfile"})," do\n",(0,a.jsx)(n.code,{children:"docker-compose.yaml"})," and ",(0,a.jsx)(n.code,{children:"Dockerfile"})," files are necessary to build the environment during the installation. The ",(0,a.jsx)(n.code,{children:"docker-compose.yaml"})," file downloads and installs the Airflow docker container. The container includes the web ui, a Postgres database for metadata, the scheduler, 3 workers (so 3 tasks can be run in parallel), the trigger and the nginx web server to show the docs produced by ",(0,a.jsx)(n.code,{children:"dbt"}),". In addition host directories are mounted on containers and various other install processes are performed. ",(0,a.jsx)(n.code,{children:"Dockerfile"})," will additionally install needed packages in each container."]}),(0,a.jsxs)(n.p,{children:["If you would like to learn more what ",(0,a.jsx)(n.code,{children:"docker-compose.yaml"})," and ",(0,a.jsx)(n.code,{children:"Dockerfile"})," files do, examine these files. There are comments which clarify what is installed and why."]})]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Install docker-compose (necessary to run the yaml file)."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The instructions are based on version 1.29.2. Check out ",(0,a.jsx)(n.a,{href:"https://github.com/docker/compose/releases",children:"https://github.com/docker/compose/releases"})," site for the latest release and update the command below as needed."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="install_docker_compose", role="content-editable emits-gtm-events"',children:"sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Test your docker-compose installation. The command should return the docker-compose version, for example ",(0,a.jsx)(n.code,{children:"docker-compose version 1.29.2, build 5becea4c"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="check_docker_compose", role="content-editable emits-gtm-events"',children:"docker-compose --version\n"})}),"\n",(0,a.jsx)(n.h3,{id:"install-a-test-dbt-project",children:"Install a test dbt project"}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["These steps set up a sample dbt project. ",(0,a.jsx)(n.code,{children:"dbt"})," tool itself will be installed on the containers later by ",(0,a.jsx)(n.code,{children:"docker-compose"}),"."]})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Install git:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="install_git", role="content-editable emits-gtm-events"',children:"sudo yum install git\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Get the sample jaffle shop dbt project:"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The dbt directories will be created under the home directory (not under ",(0,a.jsx)(n.code,{children:"airflow"}),"). The home directory in our example is ",(0,a.jsx)(n.code,{children:"/home/ec2-user"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="download_sample_dbt_project", role="content-editable emits-gtm-events"',children:"# move to home dir\ncd\nmkdir dbt\ncd dbt\ngit clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop\ncd jaffle_shop\nmkdir target\nchmod 777 target\necho '' > target/index.html\nchmod o+w target/index.html\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Create the ",(0,a.jsx)(n.code,{children:"airflowtest"})," and ",(0,a.jsx)(n.code,{children:"jaffle_shop"})," users/databases on your Teradata database by using your preferred database tool (Teradata Studio Express, ",(0,a.jsx)(n.code,{children:"bteq"})," or similar). Log into the database as ",(0,a.jsx)(n.code,{children:"dbc"}),", then execute the commands (change the passwords if needed):"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",metastring:', id="create_databases", role="content-editable emits-gtm-events"',children:'CREATE USER "airflowtest" FROM "dbc" AS PERM=5000000000 PASSWORD="abcd";\nCREATE USER "jaffle_shop" FROM "dbc" AS PERM=5000000000 PASSWORD="abcd";\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Create the dbt configuration directory:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="create_dbt_config_dir", role="content-editable emits-gtm-events"',children:"cd\nmkdir .dbt\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Copy ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(78618).A+"",children:"profiles.yml"})," into the ",(0,a.jsx)(n.code,{children:".dbt"})," directory."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Edit the file so it corresponds to your Teradata database setup. At a minium, you will need to change the host, user and password. Use ",(0,a.jsx)(n.code,{children:"jaffle_shop"})," user credentials you set up in step 3."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"create-the-airflow-environment-in-docker",children:"Create the Airflow environment in Docker"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Run the docker environment creation script in the ",(0,a.jsx)(n.code,{children:"airflow"})," directory where ",(0,a.jsx)(n.code,{children:"Dockerfile"})," and ",(0,a.jsx)(n.code,{children:"docker-compose.yaml"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="run_docker_compose", role="content-editable emits-gtm-events"',children:"cd ~/airflow\nsudo docker-compose up --build\n"})}),"\n",(0,a.jsx)(n.p,{children:"This can take 5-10 minutes, when the installation is complete you should see on the screen a message similar to this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="run_docker_compose_response", role="content-editable emits-gtm-events"',children:'airflow-webserver_1  | 127.0.0.1 - - [13/Sep/2022:00:20:48 +0000] "GET /health HTTP/1.1" 200 187 "-" "curl/7.74.0"\n'})}),"\n",(0,a.jsx)(n.p,{children:"This means the Airflow webserver is ready to accept calls."}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Now Airflow should be up. The terminal session that we were using during the installation will be used to display log messages, so it is recommended\nto open another terminal session for subsequent steps. To check the Airflow installation type:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="check_airflow_in_docker", role="content-editable emits-gtm-events"',children:"sudo docker ps\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result should be something like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="check_airflow_in_docker_output", role="content-editable emits-gtm-events"',children:'CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS                    PORTS                                                 NAMES\n60d50d9f43f5   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-scheduler_1\ne2b46ec98274   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_3_1\n7b44004c7277   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_1_1\n4017b8ce9235   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp             airflow_airflow-webserver_1\n3cc407e2d565   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:5555->5555/tcp, :::5555->5555/tcp, 8080/tcp   airflow_flower_1\n340a83b202e3   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-triggerer_1\n82198f0d8b84   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_2_1\n382c3077c1e5   redis:latest           "docker-entrypoint.s\u2026"   18 minutes ago   Up 18 minutes (healthy)   6379/tcp                                              airflow_redis_1\n8a3be8d8a7f4   nginx                  "/docker-entrypoint.\u2026"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:4000->80/tcp, :::4000->80/tcp                 airflow_nginx_1\n9ca888e9e8df   postgres:13            "docker-entrypoint.s\u2026"   18 minutes ago   Up 18 minutes (healthy)   5432/tcp                                              airflow_postgres_1\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"OPTIONAL: If you want to delete the docker installation (for example to update the docker-compose.yaml and the Dockerfile files and recreate a different environment), the command is (from the airflow directory where these files are located):"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:', id="docker_compose_down", role="content-editable emits-gtm-events"',children:"sudo docker-compose down --volumes --rmi all\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once the stack is down, update the configuration files and restart by running the command in step 1."}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["To test if the Airflow web UI works, type the following urls on your browser. Replace ",(0,a.jsx)(n.code,{children:"<VM_IP_ADDRESS>"})," with the external IP address of the VM:"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["DAG UI: ",(0,a.jsx)(n.code,{children:"http://<YOUR_IP_ADDRESS>:8080/home"})," - username: airflow / password: airflow"]}),"\n",(0,a.jsxs)(n.li,{children:["Flower Airflow UI (worker control): ",(0,a.jsx)(n.code,{children:"http://<YOUR_IP_ADDRESS>:5555/"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"run-an-airflow-dag",children:"Run an Airflow DAG"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Copy ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(59867).A+"",children:"airflow_dbt_integration.py"}),", ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(34010).A+"",children:"db_test_example_dag.py"}),", ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(94711).A+"",children:"discover_dag.py"}),", ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(26625).A+"",children:"variables.json"})," files to ",(0,a.jsx)(n.code,{children:"/home/ec2-user/airflow/dags"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Examine the files:"}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"airflow_dbt_integration.py"})," - a simple Teradata sql example that creates a few tables and runs queries."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"db_test_example_dag.py"})," - runs a dbt example [i.e. integration of dbt and airflow with a Teradata database). In this example a fictitious jaffle_shop data model is created, loaded and the documentation for this project is produced (you can view it by pointing your browser to ",(0,a.jsx)(n.code,{children:"http://<VM_IP_ADDRESS>:4000/"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["[Adjust ",(0,a.jsx)(n.code,{children:"db_test_example_dag.py"}),"]\n",(0,a.jsx)(n.code,{children:"db_test_example_dag.py"})," needs to be updated so that the Teradata database IP address points to your database."]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"discover_dag.py"})," - an example on how to load various types of data files (CSV, Parquet, JSON). The source code file contains comments that explain what the program does and how to use it. This example relies on ",(0,a.jsx)(n.code,{children:"variables.json"})," file. The file needs to be imported into Airflow. It will happen in subsequent steps."]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Wait for a few minutes until these dag files are picked up by the airflow tool. Once they are picked up they will appear on the list of dags on the Airflow home page."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Import ",(0,a.jsx)(n.code,{children:"variables.json"})," file as a variable file into Airflow:"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click on ",(0,a.jsx)(n.code,{children:"Admin -> Variables"})," menu item to go to the Variables page\n",(0,a.jsx)(n.img,{alt:"Airflow admin dropdown",src:t(83092).A+"",width:"3783",height:"1698"})]}),"\n",(0,a.jsxs)(n.li,{children:["Click on ",(0,a.jsx)(n.code,{children:"Choose File"}),", then select ",(0,a.jsx)(n.code,{children:"variable.json"})," in your file explorer and click on ",(0,a.jsx)(n.code,{children:"Import Variables"}),"\n",(0,a.jsx)(n.img,{alt:"Airflow admin dropdown",src:t(97486).A+"",width:"3780",height:"1788"})]}),"\n",(0,a.jsx)(n.li,{children:"Edit the variables to match your environment"}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Run the dags from the UI and check the logs."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"This tutorial aimed at providing a hands on exercise on how to install an Airflow environment on a Linux server and how to use Airflow to interact with a Teradata Vantage database. An additional example is provided on how to integrate Airflow and the data modelling and maintenance tool dbt to create and load a Teradata Vantage database."}),"\n",(0,a.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/pr-preview/pr-122/ja/quickstarts/manage-data/dbt",children:"Use dbt (data build tool) with Teradata Vantage"})}),"\n"]}),"\n","\n",(0,a.jsx)(i.Ay,{})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},14560:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/Dockerfile-e02ecc3d2dfef9b0b3195ec722bcd3ce.txt"},15508:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/airflow-6c270318138bb4142ed64bd3878052d0.cfg"},59867:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/airflow_dbt_integration-fea3922ba23945058eec5d9178388b32.py"},34010:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/db_test_example_dag-62b1e0c51ca30665b1186191560a7411.py"},94711:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/discover_dag-9d3a41b1b862fb8bc402709ce4c65372.py"},71206:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/docker-compose-9ea58983842a8b8e0670cfa18006bcaf.yaml"},78618:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/profiles-0bb28df29acc968ba3c054b5088f794c.yml"},26625:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/variables-f48f86a689d2f23fed304ee931860963.json"},83092:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/admin-dropdown-b21c608a7073253228b02cbdc69907ca.png"},97486:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/import-variables-038f9bde89911ff49c1e48d190dc27b8.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);