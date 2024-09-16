"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5547],{41269:(e,t,a)=>{a.d(t,{Ay:()=>s,RM:()=>o});var n=a(74848),r=a(28453);const o=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},62680:(e,t,a)=>{a.d(t,{Ay:()=>s,RM:()=>o});var n=a(74848),r=a(28453);const o=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},78180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(74848),r=a(28453),o=a(62680),i=a(41269);const s={sidebar_position:2,id:"local-jupyter-hub",title:"Deploy Teradata Jupyter extensions to JupyterHub",author:"Hailing Jiang",email:"Hailing.iang@teradata.com",page_last_update:"November 17th, 2021",description:"Deploy Teradata Jupyter extensions in customer JupyterHub clusters",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","java applications","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy"]},l="Deploy Teradata Jupyter extensions to JupyterHub",d={id:"analyze-data/local-jupyter-hub",title:"Deploy Teradata Jupyter extensions to JupyterHub",description:"Deploy Teradata Jupyter extensions in customer JupyterHub clusters",source:"@site/quickstarts/analyze-data/local-jupyter-hub.md",sourceDirName:"analyze-data",slug:"/analyze-data/local-jupyter-hub",permalink:"/pr-preview/pr-135/ko/quickstarts/analyze-data/local-jupyter-hub",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"local-jupyter-hub",title:"Deploy Teradata Jupyter extensions to JupyterHub",author:"Hailing Jiang",email:"Hailing.iang@teradata.com",page_last_update:"November 17th, 2021",description:"Deploy Teradata Jupyter extensions in customer JupyterHub clusters",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","java applications","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy"]},sidebar:"tutorialSidebar",previous:{title:"Use Vantage from a Jupyter notebook",permalink:"/pr-preview/pr-135/ko/quickstarts/analyze-data/jupyter"},next:{title:"Train ML models in Vantage using Database Analytic Functions",permalink:"/pr-preview/pr-135/ko/quickstarts/analyze-data/ml"}},u={},c=[{value:"Overview",id:"overview",level:2},...o.RM,{value:"Use Teradata Jupyter Docker image",id:"use-teradata-jupyter-docker-image",level:2},{value:"Install Teradata Jupyter Docker image in your registry",id:"install-teradata-jupyter-docker-image-in-your-registry",level:3},{value:"Use Teradata Jupyter Docker image in JupyterHub",id:"use-teradata-jupyter-docker-image-in-jupyterhub",level:3},{value:"Customize Teradata Jupyter Docker image",id:"customize-teradata-jupyter-docker-image",level:3},{value:"Customize an existing Docker image to include Teradata extensions",id:"customize-an-existing-docker-image-to-include-teradata-extensions",level:2},{value:"Further reading",id:"further-reading",level:2},...i.RM];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deploy-teradata-jupyter-extensions-to-jupyterhub",children:"Deploy Teradata Jupyter extensions to JupyterHub"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"For customers who have their own JupyterHub clusters, there are two options to integrate Teradata Jupyter extensions into the existing clusters:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Use Teradata Jupyter Docker image."}),"\n",(0,n.jsx)(t.li,{children:"Customize an existing Docker image to include Teradata extensions."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This page contains detailed instructions on the two options. Instructions are based on the assumption that the customer JupyterHub deployment is based on\xa0",(0,n.jsx)(t.a,{href:"https://zero-to-jupyterhub.readthedocs.io/en/latest/index.html",children:"Zero to JupyterHub with Kubernetes"}),"."]}),"\n",(0,n.jsx)(o.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"use-teradata-jupyter-docker-image",children:"Use Teradata Jupyter Docker image"}),"\n",(0,n.jsxs)(t.p,{children:["Teradata provides a ready-to-run Docker image that\xa0builds on the ",(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/jupyter/datascience-notebook/",children:"jupyter/datascience-notebook"})," image. It bundles the Teradata SQL kernel, Teradata Python and R libraries and drivers and Teradata extensions for Jupyter to make you productive while interacting with Teradata database. The image also contains sample notebooks that demonstrate how to use the SQL kernel, extensions and Teradata libraries."]}),"\n",(0,n.jsx)(t.p,{children:"You can use this image in the following ways:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Start a personal Jupyter Notebook server in a local Docker container"}),"\n",(0,n.jsx)(t.li,{children:"Run JupyterLab servers for a team using JupyterHub"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For instructions to start a personal JupyterLab server in a local Docker container, please see ",(0,n.jsx)(t.a,{href:"https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/Fwvns7y_a7juDWx1NixC2A",children:"installation guide"}),". This section will focus on how to use the\xa0 Teradata Jupyter Docker image in a customer's existing JupyterHub environment."]}),"\n",(0,n.jsx)(t.h3,{id:"install-teradata-jupyter-docker-image-in-your-registry",children:"Install Teradata Jupyter Docker image in your registry"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to ",(0,n.jsx)(t.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"Vantage Modules for Jupyter"})," page and download the Docker image. It is a tarball with name in this format ",(0,n.jsx)(t.code,{children:"teradatajupyterlabext_VERSION.tar.gz"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Load the image:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker load -i teradatajupyterlabext_VERSION.tar.gz\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Push the image to your Docker registry:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker push\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"You may want to consider changing the name of the loaded image for simplicity:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker tag OLD_IMAGE_NAME NEW_IMAGE_NAME\n"})})]}),"\n",(0,n.jsx)(t.h3,{id:"use-teradata-jupyter-docker-image-in-jupyterhub",children:"Use Teradata Jupyter Docker image in JupyterHub"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["To use the Teradata Jupyter Docker image directly in your JupyterHub cluster, modify the override file as described in ",(0,n.jsx)(t.a,{href:"https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/user-environment.html#choose-and-use-an-existing-docker-image",children:"herein the JupyterHub documentation"}),". Replace ",(0,n.jsx)(t.code,{children:"REGISTRY_URL"})," and ",(0,n.jsx)(t.code,{children:"VERSION"})," with appropriate values from the step above:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"singleuser:\n  image:\n  name: REGISTRY_URL/teradatajupyterlabext_VERSION\n  tag: latest\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Apply the changes to the cluster as described in ",(0,n.jsx)(t.a,{href:"https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/extending-jupyterhub.html#applying-configuration-changes",children:"JupyterHub documentation"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can use multiple profiles to allow users to select which image they want to use when they log in to JupyterHub. For detailed instructions and examples on configuring multiple profiles, please see ",(0,n.jsx)(t.a,{href:"https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/user-environment.html#using-multiple-profiles-to-let-users-select-their-environment",children:"JupyterHub documentation"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"customize-teradata-jupyter-docker-image",children:"Customize Teradata Jupyter Docker image"}),"\n",(0,n.jsx)(t.p,{children:"If your users need some packages or notebooks that are not bundled in the Teradata Jupyter Docker image, we recommend that you use Teradata image as a base image and build a new one on top of it."}),"\n",(0,n.jsxs)(t.p,{children:["Here is an example Dockerfile that builds on top of Teradata image and adds additional packages and notebooks. Use the Dockerfile to build a new Docker image, push the image to a designated registry, modify override file as shown above to use the new image as singleuser image, apply the changes to the cluster as described above. Replace ",(0,n.jsx)(t.code,{children:"REGISTRY_URL"})," and ",(0,n.jsx)(t.code,{children:"VERSION"})," with appropriate values:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"FROM REGISTRY_URL/teradatajupyterlabext_VERSION:latest\n\n# install additional packages\nRUN pip install --no-cache-dir astropy\n\n# copy notebooks\nCOPY notebooks/. /tmp/JupyterLabRoot/DemoNotebooks/\n"})}),"\n",(0,n.jsx)(t.h2,{id:"customize-an-existing-docker-image-to-include-teradata-extensions",children:"Customize an existing Docker image to include Teradata extensions"}),"\n",(0,n.jsx)(t.p,{children:"If you prefer, you can include the Teradata SQL kernel and extensions into into an existing image you are currently using."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to ",(0,n.jsx)(t.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"Vantage Modules for Jupyter"}),"\xa0page to download the zipped Teradata Jupyter extensions package bundle.\xa0 Assuming your existing docker image is Linux based, you will want to use the Linux version of the download.\xa0 Otherwise, download for the platform you are using.\xa0The ",(0,n.jsx)(t.code,{children:".zip"})," file contains the Teradata SQL Kernel, extensions and sample notebooks."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Unzip the bundle file to your working directory."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Below is an example Dockerfile to add Teradata Jupyter extensions to your existing Docker image. Use the Dockerfile to build a new Docker image, push the image to a designated registry, modify override file as shown above to use the new image as singleuser image, apply the changes to the cluster:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"FROM REGISTRY_URL/your-existing-image:tag\nENV NB_USER=jovyan \\\n  HOME=/home/jovyan \\\n  EXT_DIR=/opt/teradata/jupyterext/packages\n\nUSER root\n\n##############################################################\n# Install kernel and copy supporting files\n##############################################################\n\n# Copy the kernel\nCOPY ./teradatakernel /usr/local/bin\nRUN chmod 755 /usr/local/bin/teradatakernel\n\n# Copy directory with kernel.json file into image\nCOPY ./teradatasql teradatasql/\n\n##############################################################\n# Switch to user jovyan to copy the notebooks and license files.\n##############################################################\n\nUSER $NB_USER\n\n# Copy notebooks\nCOPY ./notebooks/ /tmp/JupyterLabRoot/TeradataSampleNotebooks/\n\n# Copy license files\nCOPY ./ThirdPartyLicenses /tmp/JupyterLabRoot/ThirdPartyLicenses/\n\nUSER root\n\n# Install the kernel file to /opt/conda jupyter lab instance\nRUN jupyter kernelspec install ./teradatasql --prefix=/opt/conda\n\n##############################################################\n# Install Teradata extensions\n##############################################################\n\nCOPY ./teradata_*.tgz $EXT_DIR\n\nWORKDIR $EXT_DIR\n\nRUN jupyter labextension install --no-build teradata_database* && \\\n  jupyter labextension install --no-build teradata_resultset* && \\\n  jupyter labextension install --no-build teradata_sqlhighlighter* && \\\n  jupyter labextension install --no-build teradata_connection_manager* && \\\n  jupyter labextension install --no-build teradata_preferences* && \\\n  jupyter lab build --dev-build=False --minimize=False && \\\n  rm -rf *\n\nWORKDIR $HOME\n\n# Give back ownership of /opt/conda to  jovyan\nRUN chown -R jovyan:users /opt/conda\n\n# Jupyter will create .local directory\nRUN rm -rf $HOME/.local\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"You can optionally install Teradata package for Python and Teradata package for R. See the following pages for details:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://downloads.teradata.com/download/aster/teradata-python-package-teradataml",children:"Teradata Package for Python - teradataml download page"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://downloads.teradata.com/download/aster/tdplyr-download-page",children:"Teradata Package for R - tdplyr download page"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://teradata.github.io/jupyterextensions",children:"Teradata Jupyter Extensions Website"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root",children:"Teradata Vantage\u2122 Modules for Jupyter Installation Guide"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root",children:"Teradata\xae Package for Python User Guide"})}),"\n"]}),"\n",(0,n.jsx)(i.Ay,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);