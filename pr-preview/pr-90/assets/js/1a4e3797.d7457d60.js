"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2138],{5787:(e,a,s)=>{s.r(a),s.d(a,{default:()=>z});var r=s(6540),c=s(4164),t=s(4103),l=s.n(t),n=s(3643),i=s.n(n),o=s(8193),u=s(5260),h=s(8774),d=s(4070),m=s(3465),g=s(4255),p=s(3807),v=s(9024),f=s(481),j=s(1312),x=s(4586),y=s(8126),b=s(1062),R=s(2884),_=s(1107);const P={searchBarWrapper:"searchBarWrapper_gqUr",searchQueryInput:"searchQueryInput_cpyO",searchVersionInput:"searchVersionInput_wf2r",searchResultsColumn:"searchResultsColumn_PLpb",searchQueryColumn:"searchQueryColumn_hQFc",algoliaLogo:"algoliaLogo_YElR",algoliaLogoPathFill:"algoliaLogoPathFill_grp5",searchResultItem:"searchResultItem_AlWU",searchResultItemHeading:"searchResultItemHeading_HJFH",searchResultItemPath:"searchResultItemPath_x9Ef",searchResultItemSummary:"searchResultItemSummary_jej3",searchLogoColumn:"searchLogoColumn_Mj_0",card:"card_adw1",searchVersionColumn:"searchVersionColumn_GkmC",loadingSpinner:"loadingSpinner_E_zt","loading-spin":"loading-spin_hlTL",loader:"loader_ujSQ"};var N=s(4848);function V(e){var a=e.docsSearchVersionsHelpers,s=Object.entries(a.allDocsData).filter((function(e){return e[1].versions.length>1}));return(0,N.jsx)("div",{className:(0,c.A)("col","col--3","padding-left--none",P.searchVersionColumn),children:s.map((function(e){var r=e[0],c=e[1],t=s.length>1?r+": ":"";return(0,N.jsx)("select",{onChange:function(e){return a.setSearchVersion(r,e.target.value)},defaultValue:a.searchVersions[r],className:P.searchVersionInput,children:c.versions.map((function(e,a){return(0,N.jsx)("option",{label:""+t+e.label,value:e.name},a)}))},r)}))})}function S(){var e,a,s,t,n,v,S=(0,x.A)().i18n.currentLocale,z=(0,y.c)().algolia,I=z.appId,w=z.apiKey,A=z.indexName,T=(0,b.C)(),C=(e=(0,m.W)().selectMessage,function(a){return e(a,(0,j.T)({id:"theme.SearchPage.documentsFound.plurals",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 Result|{count} Results"},{count:a}))}),L=(a=(0,d.Gy)(),s=(0,r.useState)((function(){return Object.entries(a).reduce((function(e,a){var s,r=a[0],c=a[1];return Object.assign({},e,((s={})[r]=c.versions[0].name,s))}),{})})),t=s[0],n=s[1],v=Object.values(a).some((function(e){return e.versions.length>1})),{allDocsData:a,versioningEnabled:v,searchVersions:t,setSearchVersion:function(e,a){return n((function(s){var r;return Object.assign({},s,((r={})[e]=a,r))}))}}),F=(0,g.b)(),M=F[0],O=F[1],q={items:[],query:null,totalResults:null,totalPages:null,lastPage:null,hasMore:null,loading:null},H=(0,r.useReducer)((function(e,a){switch(a.type){case"reset":return q;case"loading":return Object.assign({},e,{loading:!0});case"update":return M!==a.value.query?e:Object.assign({},a.value,{items:0===a.value.lastPage?a.value.items:e.items.concat(a.value.items)});case"advance":var s=e.totalPages>e.lastPage+1;return Object.assign({},e,{lastPage:s?e.lastPage+1:e.lastPage,hasMore:s});default:return e}}),q),E=H[0],Q=H[1],D=i()(I,w),k=l()(D,A,{hitsPerPage:15,advancedSyntax:!0,disjunctiveFacets:["language","docusaurus_tag"]});k.on("result",(function(e){var a=e.results,s=a.query,r=a.hits,c=a.page,t=a.nbHits,l=a.nbPages;if(""!==s&&Array.isArray(r)){var n=function(e){return e.replace(/algolia-docsearch-suggestion--highlight/g,"search-result-match")},i=r.map((function(e){var a=e.url,s=e._highlightResult.hierarchy,r=e._snippetResult,c=void 0===r?{}:r,t=Object.keys(s).map((function(e){return n(s[e].value)}));return{title:t.pop(),url:T(a),summary:c.content?n(c.content.value)+"...":"",breadcrumbs:t}}));Q({type:"update",value:{items:i,query:s,totalResults:t,totalPages:l,lastPage:c,hasMore:l>c+1,loading:!1}})}else Q({type:"reset"})}));var B=(0,r.useState)(null),W=B[0],U=B[1],G=(0,r.useRef)(0),J=(0,r.useRef)(o.A.canUseIntersectionObserver&&new IntersectionObserver((function(e){var a=e[0],s=a.isIntersecting,r=a.boundingClientRect.y;s&&G.current>r&&Q({type:"advance"}),G.current=r}),{threshold:1})),K=(0,p._q)((function(e){void 0===e&&(e=0),k.addDisjunctiveFacetRefinement("docusaurus_tag","default"),k.addDisjunctiveFacetRefinement("language",S),Object.entries(L.searchVersions).forEach((function(e){var a=e[0],s=e[1];k.addDisjunctiveFacetRefinement("docusaurus_tag","docs-"+a+"-"+s)})),k.setQuery(M).setPage(e).search()}));return(0,r.useEffect)((function(){if(W){var e=J.current;return e?(e.observe(W),function(){return e.unobserve(W)}):function(){return!0}}}),[W]),(0,r.useEffect)((function(){Q({type:"reset"}),M&&(Q({type:"loading"}),setTimeout((function(){K()}),300))}),[M,L.searchVersions,K]),(0,r.useEffect)((function(){E.lastPage&&0!==E.lastPage&&K(E.lastPage)}),[K,E.lastPage]),(0,N.jsxs)(R.A,{children:[(0,N.jsxs)(u.A,{children:[(0,N.jsx)("title",{children:(0,f.s)(M?(0,j.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:M}):(0,j.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"}))}),(0,N.jsx)("meta",{property:"robots",content:"noindex, follow"})]}),(0,N.jsx)("div",{className:P.searchBarWrapper,children:(0,N.jsx)("form",{className:"container "+P.searchBar,onSubmit:function(e){return e.preventDefault()},children:(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col col--2"}),(0,N.jsxs)("div",{className:(0,c.A)("col","col--8",P.searchQueryColumn),children:[(0,N.jsx)("i",{"data-v-8fa474e2":"",className:"material-symbols-outlined","aria-hidden":"true",children:"search"}),(0,N.jsx)("input",{type:"search",name:"q",className:P.searchQueryInput,placeholder:(0,j.T)({id:"theme.SearchPage.inputPlaceholder",message:"Search Teradata...",description:"The placeholder for search page input"}),"aria-label":(0,j.T)({id:"theme.SearchPage.inputLabel",message:"Search",description:"The ARIA label for search page input"}),onChange:function(e){return O(e.target.value)},value:M,autoComplete:"off",autoFocus:!0})]}),L.versioningEnabled&&(0,N.jsx)(V,{docsSearchVersionsHelpers:L})]})})}),(0,N.jsxs)("div",{className:"container margin-bottom--lg",children:[(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col col--2"}),(0,N.jsx)("div",{className:(0,c.A)("col","col--6",P.searchResultsColumn),children:!!E.totalResults&&C(E.totalResults)}),(0,N.jsx)("div",{className:(0,c.A)("col","col--2","text--right",P.searchLogoColumn),children:(0,N.jsx)(h.A,{to:"https://www.algolia.com/","aria-label":(0,j.T)({id:"theme.SearchPage.algoliaLabel",message:"Search by Algolia",description:"The ARIA label for Algolia mention"}),children:(0,N.jsx)("svg",{viewBox:"0 0 168 24",className:P.algoliaLogo,children:(0,N.jsxs)("g",{fill:"none",children:[(0,N.jsx)("path",{className:P.algoliaLogoPathFill,d:"M120.925 18.804c-4.386.02-4.386-3.54-4.386-4.106l-.007-13.336 2.675-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-10.846-2.18c.821 0 1.43-.047 1.855-.129v-2.719a6.334 6.334 0 0 0-1.574-.199 5.7 5.7 0 0 0-.897.069 2.699 2.699 0 0 0-.814.24c-.24.116-.439.28-.582.491-.15.212-.219.335-.219.656 0 .628.219.991.616 1.23s.938.362 1.615.362zm-.233-9.7c.883 0 1.629.109 2.231.328.602.218 1.088.525 1.444.915.363.396.609.922.76 1.483.157.56.232 1.175.232 1.85v6.874a32.5 32.5 0 0 1-1.868.314c-.834.123-1.772.185-2.813.185-.69 0-1.327-.069-1.895-.198a4.001 4.001 0 0 1-1.471-.636 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.803 0-.656.13-1.073.384-1.525a3.24 3.24 0 0 1 1.047-1.106c.445-.287.95-.492 1.532-.615a8.8 8.8 0 0 1 1.82-.185 8.404 8.404 0 0 1 1.972.24v-.438c0-.307-.035-.6-.11-.874a1.88 1.88 0 0 0-.384-.73 1.784 1.784 0 0 0-.724-.493 3.164 3.164 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.735 7.735 0 0 0-1.26.307l-.321-2.192c.335-.117.834-.233 1.478-.349a10.98 10.98 0 0 1 2.073-.178zm52.842 9.626c.822 0 1.43-.048 1.854-.13V13.7a6.347 6.347 0 0 0-1.574-.199c-.294 0-.595.021-.896.069a2.7 2.7 0 0 0-.814.24 1.46 1.46 0 0 0-.582.491c-.15.212-.218.335-.218.656 0 .628.218.991.615 1.23.404.245.938.362 1.615.362zm-.226-9.694c.883 0 1.629.108 2.231.327.602.219 1.088.526 1.444.915.355.39.609.923.759 1.483a6.8 6.8 0 0 1 .233 1.852v6.873c-.41.088-1.034.19-1.868.314-.834.123-1.772.184-2.813.184-.69 0-1.327-.068-1.895-.198a4.001 4.001 0 0 1-1.471-.635 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.804 0-.656.13-1.073.384-1.524.26-.45.608-.82 1.047-1.107.445-.286.95-.491 1.532-.614a8.803 8.803 0 0 1 2.751-.13c.329.034.671.096 1.04.185v-.437a3.3 3.3 0 0 0-.109-.875 1.873 1.873 0 0 0-.384-.731 1.784 1.784 0 0 0-.724-.492 3.165 3.165 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.75 7.75 0 0 0-1.26.307l-.321-2.193c.335-.116.834-.232 1.478-.348a11.633 11.633 0 0 1 2.073-.177zm-8.034-1.271a1.626 1.626 0 0 1-1.628-1.62c0-.895.725-1.62 1.628-1.62.904 0 1.63.725 1.63 1.62 0 .895-.733 1.62-1.63 1.62zm1.348 13.22h-2.689V7.27l2.69-.423v11.956zm-4.714 0c-4.386.02-4.386-3.54-4.386-4.107l-.008-13.336 2.676-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-8.698-5.903c0-1.156-.253-2.119-.746-2.788-.493-.677-1.183-1.01-2.067-1.01-.882 0-1.574.333-2.065 1.01-.493.676-.733 1.632-.733 2.788 0 1.168.246 1.953.74 2.63.492.683 1.183 1.018 2.066 1.018.882 0 1.574-.342 2.067-1.019.492-.683.738-1.46.738-2.63zm2.737-.007c0 .902-.13 1.584-.397 2.33a5.52 5.52 0 0 1-1.128 1.906 4.986 4.986 0 0 1-1.752 1.223c-.685.286-1.739.45-2.265.45-.528-.006-1.574-.157-2.252-.45a5.096 5.096 0 0 1-1.744-1.223c-.487-.527-.863-1.162-1.137-1.906a6.345 6.345 0 0 1-.41-2.33c0-.902.123-1.77.397-2.508a5.554 5.554 0 0 1 1.15-1.892 5.133 5.133 0 0 1 1.75-1.216c.679-.287 1.425-.423 2.232-.423.808 0 1.553.142 2.237.423a4.88 4.88 0 0 1 1.753 1.216 5.644 5.644 0 0 1 1.135 1.892c.287.738.431 1.606.431 2.508zm-20.138 0c0 1.12.246 2.363.738 2.882.493.52 1.13.78 1.91.78.424 0 .828-.062 1.204-.178.377-.116.677-.253.917-.417V9.33a10.476 10.476 0 0 0-1.766-.226c-.971-.028-1.71.37-2.23 1.004-.513.636-.773 1.75-.773 2.788zm7.438 5.274c0 1.824-.466 3.156-1.404 4.004-.936.846-2.367 1.27-4.296 1.27-.705 0-2.17-.137-3.34-.396l.431-2.118c.98.205 2.272.26 2.95.26 1.074 0 1.84-.219 2.299-.656.459-.437.684-1.086.684-1.948v-.437a8.07 8.07 0 0 1-1.047.397c-.43.13-.93.198-1.492.198-.739 0-1.41-.116-2.018-.349a4.206 4.206 0 0 1-1.567-1.025c-.431-.45-.774-1.017-1.013-1.694-.24-.677-.363-1.885-.363-2.773 0-.834.13-1.88.384-2.577.26-.696.629-1.298 1.129-1.796.493-.498 1.095-.881 1.8-1.162a6.605 6.605 0 0 1 2.428-.457c.87 0 1.67.109 2.45.24.78.129 1.444.265 1.985.415V18.17zM6.972 6.677v1.627c-.712-.446-1.52-.67-2.425-.67-.585 0-1.045.13-1.38.391a1.24 1.24 0 0 0-.502 1.03c0 .425.164.765.494 1.02.33.256.835.532 1.516.83.447.192.795.356 1.045.495.25.138.537.332.862.582.324.25.563.548.718.894.154.345.23.741.23 1.188 0 .947-.334 1.691-1.004 2.234-.67.542-1.537.814-2.601.814-1.18 0-2.16-.229-2.936-.686v-1.708c.84.628 1.814.942 2.92.942.585 0 1.048-.136 1.388-.407.34-.271.51-.646.51-1.125 0-.287-.1-.55-.302-.79-.203-.24-.42-.42-.655-.542-.234-.123-.585-.29-1.053-.503a61.27 61.27 0 0 1-.582-.271 13.67 13.67 0 0 1-.55-.287 4.275 4.275 0 0 1-.567-.351 6.92 6.92 0 0 1-.455-.4c-.18-.17-.31-.34-.39-.51-.08-.17-.155-.37-.224-.598a2.553 2.553 0 0 1-.104-.742c0-.915.333-1.638.998-2.17.664-.532 1.523-.798 2.576-.798.968 0 1.793.17 2.473.51zm7.468 5.696v-.287c-.022-.607-.187-1.088-.495-1.444-.309-.357-.75-.535-1.324-.535-.532 0-.99.194-1.373.583-.382.388-.622.949-.717 1.683h3.909zm1.005 2.792v1.404c-.596.34-1.383.51-2.362.51-1.255 0-2.255-.377-3-1.132-.744-.755-1.116-1.744-1.116-2.968 0-1.297.34-2.316 1.021-3.055.68-.74 1.548-1.11 2.6-1.11 1.033 0 1.852.323 2.458.966.606.644.91 1.572.91 2.784 0 .33-.033.676-.096 1.038h-5.314c.107.702.405 1.239.894 1.611.49.372 1.106.558 1.85.558.862 0 1.58-.202 2.155-.606zm6.605-1.77h-1.212c-.596 0-1.045.116-1.349.35-.303.234-.454.532-.454.894 0 .372.117.664.35.877.235.213.575.32 1.022.32.51 0 .912-.142 1.204-.424.293-.281.44-.651.44-1.108v-.91zm-4.068-2.554V9.325c.627-.361 1.457-.542 2.489-.542 2.116 0 3.175 1.026 3.175 3.08V17h-1.548v-.957c-.415.68-1.143 1.02-2.186 1.02-.766 0-1.38-.22-1.843-.661-.462-.442-.694-1.003-.694-1.684 0-.776.293-1.38.878-1.81.585-.431 1.404-.647 2.457-.647h1.34V11.8c0-.554-.133-.971-.399-1.253-.266-.282-.707-.423-1.324-.423a4.07 4.07 0 0 0-2.345.718zm9.333-1.93v1.42c.394-1 1.101-1.5 2.123-1.5.148 0 .313.016.494.048v1.531a1.885 1.885 0 0 0-.75-.143c-.542 0-.989.24-1.34.718-.351.479-.527 1.048-.527 1.707V17h-1.563V8.91h1.563zm5.01 4.084c.022.82.272 1.492.75 2.019.479.526 1.15.79 2.01.79.639 0 1.235-.176 1.788-.527v1.404c-.521.319-1.186.479-1.995.479-1.265 0-2.276-.4-3.031-1.197-.755-.798-1.133-1.792-1.133-2.984 0-1.16.38-2.151 1.14-2.975.761-.825 1.79-1.237 3.088-1.237.702 0 1.346.149 1.93.447v1.436a3.242 3.242 0 0 0-1.77-.495c-.84 0-1.513.266-2.019.798-.505.532-.758 1.213-.758 2.042zM40.24 5.72v4.579c.458-1 1.293-1.5 2.505-1.5.787 0 1.42.245 1.899.734.479.49.718 1.17.718 2.042V17h-1.564v-5.106c0-.553-.14-.98-.422-1.284-.282-.303-.652-.455-1.11-.455-.531 0-1.002.202-1.411.606-.41.405-.615 1.022-.615 1.851V17h-1.563V5.72h1.563zm14.966 10.02c.596 0 1.096-.253 1.5-.758.404-.506.606-1.157.606-1.955 0-.915-.202-1.62-.606-2.114-.404-.495-.92-.742-1.548-.742-.553 0-1.05.224-1.491.67-.442.447-.662 1.133-.662 2.058 0 .958.212 1.67.638 2.138.425.469.946.703 1.563.703zM53.004 5.72v4.42c.574-.894 1.388-1.341 2.44-1.341 1.022 0 1.857.383 2.506 1.149.649.766.973 1.781.973 3.047 0 1.138-.309 2.109-.925 2.912-.617.803-1.463 1.205-2.537 1.205-1.075 0-1.894-.447-2.457-1.34V17h-1.58V5.72h1.58zm9.908 11.104l-3.223-7.913h1.739l1.005 2.632 1.26 3.415c.096-.32.48-1.458 1.15-3.415l.909-2.632h1.66l-2.92 7.866c-.777 2.074-1.963 3.11-3.559 3.11a2.92 2.92 0 0 1-.734-.079v-1.34c.17.042.351.064.543.064 1.032 0 1.755-.57 2.17-1.708z"}),(0,N.jsx)("path",{fill:"#5468FF",d:"M78.988.938h16.594a2.968 2.968 0 0 1 2.966 2.966V20.5a2.967 2.967 0 0 1-2.966 2.964H78.988a2.967 2.967 0 0 1-2.966-2.964V3.897A2.961 2.961 0 0 1 78.988.938z"}),(0,N.jsx)("path",{fill:"white",d:"M89.632 5.967v-.772a.978.978 0 0 0-.978-.977h-2.28a.978.978 0 0 0-.978.977v.793c0 .088.082.15.171.13a7.127 7.127 0 0 1 1.984-.28c.65 0 1.295.088 1.917.259.082.02.164-.04.164-.13m-6.248 1.01l-.39-.389a.977.977 0 0 0-1.382 0l-.465.465a.973.973 0 0 0 0 1.38l.383.383c.062.061.15.047.205-.014.226-.307.472-.601.746-.874.281-.28.568-.526.883-.751.068-.042.075-.137.02-.2m4.16 2.453v3.341c0 .096.104.165.192.117l2.97-1.537c.068-.034.089-.117.055-.184a3.695 3.695 0 0 0-3.08-1.866c-.068 0-.136.054-.136.13m0 8.048a4.489 4.489 0 0 1-4.49-4.482 4.488 4.488 0 0 1 4.49-4.482 4.488 4.488 0 0 1 4.489 4.482 4.484 4.484 0 0 1-4.49 4.482m0-10.85a6.363 6.363 0 1 0 0 12.729 6.37 6.37 0 0 0 6.372-6.368 6.358 6.358 0 0 0-6.371-6.36"})]})})})})]}),E.items.length>0?(0,N.jsx)("main",{children:E.items.map((function(e,a){var s=e.title,r=e.url,t=e.summary;e.breadcrumbs;return(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col col--2"}),(0,N.jsx)(h.A,{className:P.card,to:r,children:(0,N.jsxs)("article",{className:(0,c.A)("col","col--8","doc-card",P.searchResultItem),children:[(0,N.jsx)(_.A,{as:"h2",className:P.searchResultItemHeading,dangerouslySetInnerHTML:{__html:s}}),t&&(0,N.jsx)("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:t}})]})}),(0,N.jsx)("div",{className:"col col--2"})]},a)}))}):[M&&!E.loading&&(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col col--2"}),(0,N.jsx)("p",{className:"col col--8",children:(0,N.jsx)(j.A,{id:"theme.SearchPage.noResultsText",description:"The paragraph for empty search result",children:"No results were found"})})]},"no-results"),!!E.loading&&(0,N.jsx)("div",{className:P.loadingSpinner},"spinner")],E.hasMore&&(0,N.jsx)("div",{className:P.loader,ref:U,children:(0,N.jsx)(j.A,{id:"theme.SearchPage.fetchingNewResults",description:"The paragraph for fetching new search results",children:"Fetching new results..."})})]})]})}function z(){return(0,N.jsx)(v.e3,{className:"search-page-wrapper",children:(0,N.jsx)(S,{})})}}}]);