"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4927],{28188:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=a(74848),n=a(28453);function i(e){return(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Df8VcbWW_BM?si=4e9F9b2j4diEaK_I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}function o(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i()}const s={sidebar_position:9,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"February 28, 2024",description:"Use Terraform to manage Teradata data pipelines in Airbyte using Terraform.",keywords:["Terraform","Airbyte","Teradata Vantage","data engineering","ELT","automation","data integration","CI/CD","version control"]},d="Manage ELT pipelines as code with Terraform and Airbyte on Teradata Vantage",l={id:"manage-data/terraform-airbyte-provider",title:"Manage ELT pipelines as code with Terraform and Airbyte on Teradata Vantage",description:"Use Terraform to manage Teradata data pipelines in Airbyte using Terraform.",source:"@site/quickstarts/manage-data/terraform-airbyte-provider.md",sourceDirName:"manage-data",slug:"/manage-data/terraform-airbyte-provider",permalink:"/developers/pr-preview/pr-20/quickstarts/manage-data/terraform-airbyte-provider",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"February 28, 2024",description:"Use Terraform to manage Teradata data pipelines in Airbyte using Terraform.",keywords:["Terraform","Airbyte","Teradata Vantage","data engineering","ELT","automation","data integration","CI/CD","version control"]},sidebar:"tutorialSidebar",previous:{title:"Use Airbyte to load data from external sources to Teradata Vantage",permalink:"/developers/pr-preview/pr-20/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage"},next:{title:"Transform data Loaded with Airbyte using dbt",permalink:"/developers/pr-preview/pr-20/quickstarts/manage-data/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt"}},c={},h=[{value:"Overview",id:"overview",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install Terraform",id:"install-terraform",level:3},{value:"Environment preparation",id:"environment-preparation",level:3},{value:"Define a data pipeline",id:"define-a-data-pipeline",level:3},{value:"Configuring the variables.tf file",id:"configuring-the-variablestf-file",level:3},{value:"Execution Commands",id:"execution-commands",level:3},{value:"Additional Resources",id:"additional-resources",level:3}];function p(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"manage-elt-pipelines-as-code-with-terraform-and-airbyte-on-teradata-vantage",children:"Manage ELT pipelines as code with Terraform and Airbyte on Teradata Vantage"}),"\n",(0,t.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"This quickstart explains how to use Terraform to manage Airbyte data pipelines as code. Instead of manual configurations through the WebUI, we'll use code to create and manage Airbyte resources. The provided example illustrates a basic ELT pipeline from Google Sheets to Teradata Vantage using Airbyte's Terraform provider."}),"\n",(0,t.jsx)(r.p,{children:"The Airbyte Terraform provider is available for users on Airbyte Cloud, OSS & Self-Managed Enterprise."}),"\n",(0,t.jsx)(r.p,{children:"Watch this concise explanation of how this integration works:"}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(r.h3,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://www.terraform.io",children:"Terraform"})," is a leading open-source tool in the Infrastructure as Code (IaC) space. It enables the automated provisioning and management of infrastructure, cloud platforms, and services via configuration files, instead of manual setup. Terraform uses plugins, known as Terraform providers, to communicate with infrastructure hosts, cloud providers, APIs, and SaaS platforms."]}),"\n",(0,t.jsxs)(r.p,{children:["Airbyte, the data integration platform, has a Terraform provider that communicates directly with ",(0,t.jsx)(r.a,{href:"https://reference.airbyte.com/reference/start",children:"Airbyte's API"}),". This allows data engineers to manage Airbyte configurations, enforce version control, and apply good data engineering practices within their ELT pipelines."]}),"\n",(0,t.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://airbyte.com/connectors/teradata-vantage",children:"Airbyte Cloud Account"}),". Start with a 14-day free trial that begins after the first successful sync."]}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Generate an Airbyte API Key by logging into the ",(0,t.jsx)(r.a,{href:"https://portal.airbyte.com",children:"developer portal"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Teradata Vantage Instance. You will need a database ",(0,t.jsx)(r.code,{children:"Host"}),", ",(0,t.jsx)(r.code,{children:"Username"}),", and ",(0,t.jsx)(r.code,{children:"Password"})," for Airbyte\u2019s Terraform configuration."]}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://quickstarts.teradata.com/getting-started-with-csae.html",children:"Create a free Teradata instance on ClearScape Analytics Experience"})}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Source Data. For demonstration purposes we will use a ",(0,t.jsx)(r.a,{href:"https://docs.google.com/spreadsheets/d/1XNBYUw3p7xG6ptfwjChqZ-dNXbTuVwPi7ToQfYKgJIE/edit#gid=0",children:"sample Google Sheets,"}),". Make a copy of it into a personal Google worspace."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://support.google.com/googleapi/answer/6158841?hl=en%5D=",children:"Google Cloud Platform API enabled for your personal or organizational account"}),". You\u2019ll need to authenticate your Google account via OAuth or via Service Account Key Authenticator. In this example, we use ",(0,t.jsx)(r.a,{href:"https://cloud.google.com/iam/docs/keys-create-delete",children:"Service Account Key Authenticator"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"install-terraform",children:"Install Terraform"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Apply the respective commands to install Terraform on your Operating System. Find additional options on the ",(0,t.jsx)(r.a,{href:"https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli",children:"Terraform site"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h1,{id:"tabs-idterraform_tab_install-roleemits-gtm-events",children:'[tabs, id="terraform_tab_install", role="emits-gtm-events"]'}),"\n",(0,t.jsxs)(r.p,{children:["macOS::\n+\nFirst, install the HashiCorp tap, a repository of all ",(0,t.jsx)(r.a,{href:"https://brew.sh",children:"Homebrew"})," packages.\n+"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:" brew tap hashicorp/tap\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Next, install Terraform with hashicorp/tap/terraform.\n+"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:" brew install hashicorp/tap/terraform\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Windows::\n+\n",(0,t.jsx)(r.a,{href:"https://chocolatey.org",children:"Chocolatey"})," is a free and open-source package management system for Windows. Install the Terraform package from the command-line.\n+"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:" choco install terraform\n"})}),"\n",(0,t.jsx)(r.p,{children:"Linux::\n+"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list\nsudo apt update && sudo apt install terraform \n'})}),"\n",(0,t.jsx)(r.p,{children:"===="}),"\n",(0,t.jsx)(r.h3,{id:"environment-preparation",children:"Environment preparation"}),"\n",(0,t.jsxs)(r.p,{children:["Prepare the environment by creating a directory for the Terraform configuration and initialize two files: ",(0,t.jsx)(r.code,{children:"main.tf"})," and ",(0,t.jsx)(r.code,{children:"variables.tf"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"mkdir terraform_airbyte\ncd terraform_airbyte\ntouch main.tf variables.tf\n"})}),"\n",(0,t.jsx)(r.h3,{id:"define-a-data-pipeline",children:"Define a data pipeline"}),"\n",(0,t.jsxs)(r.p,{children:["Define the data source, destination and connection within the ",(0,t.jsx)(r.code,{children:"main.tf"})," file. Open the newly created ",(0,t.jsx)(r.code,{children:"main.tf"})," file in Visual Studio Code or any preferred code editor."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["If using Visual Studio Code, install ",(0,t.jsx)(r.a,{href:"https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform",children:"HashiCorp Terraform Extensions"})," to add autocompletion and syntax highlighting. You can also add ",(0,t.jsx)(r.a,{href:"https://marketplace.visualstudio.com/items?itemName=4ops.terraform",children:"Terraform by Anton Kuliko"})," for configuration language support."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Terraform Extensions on Visual Studio Code",src:a(99450).A+"",width:"3048",height:"768"})}),"\n",(0,t.jsx)(r.p,{children:"Populate the main.tf file with the template provided."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'# Provider Configuration\nterraform {\n  required_providers {\n    airbyte = {\n      source = "airbytehq/airbyte"\n      version = "0.4.1"  // Latest Version https://registry.terraform.io/providers/airbytehq/airbyte/latest\n    }\n  }\n}\nprovider "airbyte" {\n  // If running on Airbyte Cloud, generate & save the API key from https://portal.airbyte.com\n  bearer_auth = var.api_key\n}\n# Google Sheets Source Configuration\nresource "airbyte_source_google_sheets" "my_source_gsheets" {\n  configuration = {\n    source_type = "google-sheets"\n     credentials = {\n      service_account_key_authentication = {\n        service_account_info = var.google_private_key\n      }\n    }\n    names_conversion = true,\n    spreadsheet_id = var.spreadsheet_id\n  }\n  name = "Google Sheets"\n  workspace_id = var.workspace_id\n}\n# Teradata Vantage Destination Configuration\n# For optional parameters visit https://registry.terraform.io/providers/airbytehq/airbyte/latest/docs/resources/destination_teradata \nresource "airbyte_destination_teradata" "my_destination_teradata" {\n  configuration = {\n    host            = var.host\n    password        = var.password\n    schema          = "airbyte_td_two"\n    ssl             = false\n    ssl_mode = {\n      allow = {}\n    }\n    username = var.username\n  }\n  name          = "Teradata"\n  workspace_id  = var.workspace_id\n}\n# Connection Configuration \nresource "airbyte_connection" "googlesheets_teradata" {\n  name = "Google Sheets - Teradata"\n  source_id = airbyte_source_google_sheets.my_source_gsheets.source_id\n  destination_id = airbyte_destination_teradata.my_destination_teradata.destination_id\n    schedule = {\n      schedule_type = "cron" // "manual"\n      cron_expression = "0 15 * * * ?" # This sets the data sync to run every 15 minutes of the hour\n    }\n  }\n'})}),"\n",(0,t.jsx)(r.p,{children:"Note that this example uses a cron expression to schedule the data transfer to run every 15 minutes past the hour."}),"\n",(0,t.jsxs)(r.p,{children:["In our ",(0,t.jsx)(r.code,{children:"main.tf"})," file we reference variables which are held in the ",(0,t.jsx)(r.code,{children:"variables.tf"})," file, including the API key, workspace ID, Google Sheet id, Google private key and Teradata Vantage credentials. Copy the following template into the ",(0,t.jsx)(r.code,{children:"variables.tf"})," file and populate with the appropriate configuration values in the ",(0,t.jsx)(r.code,{children:"default"})," attribute."]}),"\n",(0,t.jsx)(r.h3,{id:"configuring-the-variablestf-file",children:"Configuring the variables.tf file"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'#log in to https://portal.airbyte.com generate, save and populate the variable with an API key\nvariable "api_key" {\n    type = string\n    default = ""\n}\n#workspace_id is found in the url to the Airbyte Cloud account https://cloud.airbyte.com/workspaces/<workspace_id>/settings/dbt-cloud \nvariable "workspace_id" {\n    type = string\n    default = ""\n} \n\n#Google spreadsheet id and Google private key\nvariable "spreadsheet_id" {\n    type = string\n    default = ""\n}\nvariable "google_private_key" {\n  type = string\n  default =  ""\n}\n# Teradata Vantage connection credentials\nvariable "host" {\n  type = string\n  default = ""\n  }\nvariable "username" {\n  type = string\n  default = "demo_user"\n  }\n  variable "password" {\n  type = string\n  default = ""\n  }\n'})}),"\n",(0,t.jsx)(r.h3,{id:"execution-commands",children:"Execution Commands"}),"\n",(0,t.jsxs)(r.p,{children:["Run ",(0,t.jsx)(r.code,{children:"terraform init"})," pull down provider plugin from terraform provider page and initialize a working Terraform directory."]}),"\n",(0,t.jsx)(r.p,{children:"This command should only be run after writing a new Terraform configuration or cloning an existing one from version control."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Initialize Terraform with Terraform init command",src:a(44696).A+"",width:"2982",height:"2106"})}),"\n",(0,t.jsxs)(r.p,{children:["Run ",(0,t.jsx)(r.code,{children:"terraform plan"})," to display the execution plan Terraform will use to create resource and make modifications to infrastructure."]}),"\n",(0,t.jsx)(r.p,{children:"For this example a plan for 3 new resources is created:"}),"\n",(0,t.jsx)(r.p,{children:"Connection: # airbyte_connection.googlesheets_teradata will be created"}),"\n",(0,t.jsx)(r.p,{children:"Destination: # airbyte_connection.googlesheets_teradata will be created"}),"\n",(0,t.jsx)(r.p,{children:"Source: # airbyte_source_google_sheets.my_source_gsheets will be created"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"View Terraform execution plan with terraform plan command",src:a(41627).A+"",width:"3142",height:"2122"})}),"\n",(0,t.jsxs)(r.p,{children:["Run ",(0,t.jsx)(r.code,{children:"terraform apply"})," and ",(0,t.jsx)(r.code,{children:"yes"})," to generate a plan and carry out the plan."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Apply the Terraform plan with terraform apply command",src:a(80896).A+"",width:"3114",height:"2114"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"terraform.tfstate"})," file is created after running ",(0,t.jsx)(r.code,{children:"terraform apply"})," for the first time. This file tracks the status of all sources, destinations, and connections managed by Terraform. For subsequent executions of ",(0,t.jsx)(r.code,{children:"Terraform apply"}),", Terraform compares the code in the ",(0,t.jsx)(r.code,{children:"main.tf"})," file with the code stored in the ",(0,t.jsx)(r.code,{children:"tfstate"})," file. If resources are added or removed in ",(0,t.jsx)(r.code,{children:"main.tf"}),", Terraform automatically updates both deployment and the ",(0,t.jsx)(r.code,{children:".tfstate"})," file accordingly upon deployment. Do not modify this file by hand."]}),"\n",(0,t.jsx)(r.p,{children:"You now have a Source, Destination and Connection on Airbyte Cloud created and managed via Terraform."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Airbyte Connection in Airbyte Cloud UI",src:a(44784).A+"",width:"1436",height:"354"})}),"\n",(0,t.jsx)(r.h3,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://quickstarts.teradata.com/elt/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage.html",children:"Use Airbyte to load data from external sources to Teradata Vantage"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://quickstarts.teradata.com/elt/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt.html",children:"Transform data Loaded with Airbyte using dbt"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://reference.airbyte.com/reference/createsource",children:"Airbyte API reference documentation"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://registry.terraform.io/providers/airbytehq/airbyte/latest/docs/resources/destination_teradata#example-usage",children:"Terraform Airbyte Provider Docs"})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},44784:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/airbyteconnection-3a220f634814b2764e39ba96d5206e75.png"},99450:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/extensions-8ebc769b586d0c7688fb4225093a933b.png"},80896:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/terraformapply-533f60b2d2a687ef55603759188c4785.png"},44696:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/terraforminit-5a8d66ce341574b351bf3db2fc21f1ff.png"},41627:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/terraformplan-48302b763a5c6db551ad5db88d9b2acc.png"},28453:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>s});var t=a(96540);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);