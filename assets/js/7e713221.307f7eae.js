"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"Metrics",description:"Metrics",hide_table_of_contents:!1,sidebar_position:2},i="Metrics",o={unversionedId:"customization/agreement-modeling/metrics",id:"customization/agreement-modeling/metrics",title:"Metrics",description:"Metrics",source:"@site/docs/customization/agreement-modeling/metrics.md",sourceDirName:"customization/agreement-modeling",slug:"/customization/agreement-modeling/metrics",permalink:"/customization/agreement-modeling/metrics",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/customization/agreement-modeling/metrics.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1695242196,formattedLastUpdatedAt:"Sep 20, 2023",sidebarPosition:2,frontMatter:{title:"Metrics",description:"Metrics",hide_table_of_contents:!1,sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Team Practices Agreements",permalink:"/customization/agreement-modeling/team-practices-agreements"},next:{title:"Guarantees",permalink:"/customization/agreement-modeling/guarantees"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Collectors",id:"collectors",level:2},{value:"Event Collector",id:"event-collector",level:3},{value:"Patterns",id:"patterns",level:4},{value:"Pivotal Tracker Collector",id:"pivotal-tracker-collector",level:3},{value:"Examples",id:"examples",level:4},{value:"GitHub Collector",id:"github-collector",level:3},{value:"Examples",id:"examples-1",level:4}],s={toc:m},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metrics"},"Metrics"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Agreement conformed from several Guarantees contain all the information needed to compute them. Each guarantee contains an objective, which can involve one or more metrics. The metric is the instrument used to fetch the required information and extract a value for the system to verify the fulfilment of the objective."),(0,r.kt)("h2",{id:"collectors"},"Collectors"),(0,r.kt)("p",null,"The collectors are the component which receiving a metric as input, are able to connect to the different data sources to extract the information needed for it, and compute the final result."),(0,r.kt)("p",null,"Actually, there are 3 different collectors available. The metrics are modeled as a JSON object following the iAgree specification. Each collector has his own syntax and they are similar in order to be consistent but there are some differences in order to extend the features."),(0,r.kt)("h3",{id:"event-collector"},"Event Collector"),(0,r.kt)("p",null,"The Event Collector is capable of using different data sources as input and join the information in order to correlate different payloads composing more complex metrics. Actually it can fetch information from Github, Pivotal Tracker, Travis CI, CodeClimate and Heroku."),(0,r.kt)("h4",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,"The metrics available to use in the Event Collector follow 4 different patterns:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector/README.md#pattern_1"},"Number of ",(0,r.kt)("strong",{parentName:"a"},"[Event]")," in ",(0,r.kt)("strong",{parentName:"a"},"[Tool]")," every ",(0,r.kt)("strong",{parentName:"a"},"[Period]")," by ",(0,r.kt)("strong",{parentName:"a"},"[TEAM|MEMBER]"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector/README.md#pattern_2"},(0,r.kt)("strong",{parentName:"a"},"[MAX|MIN|AVG|STD|NEWEST|LATEST]")," ",(0,r.kt)("strong",{parentName:"a"},"[Property]")," value of ",(0,r.kt)("strong",{parentName:"a"},"[Event]")," in ",(0,r.kt)("strong",{parentName:"a"},"[Tool]")," every ",(0,r.kt)("strong",{parentName:"a"},"[Period]")," by team.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector/README.md#pattern_3"},(0,r.kt)("strong",{parentName:"a"},"[Frequency]")," distribution of ",(0,r.kt)("strong",{parentName:"a"},"[Event]")," in ",(0,r.kt)("strong",{parentName:"a"},"[Tool]")," every ",(0,r.kt)("strong",{parentName:"a"},"[Period]")," by team.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector/README.md#pattern_4"},"Percentage of ",(0,r.kt)("strong",{parentName:"a"},"[Event1]")," in ",(0,r.kt)("strong",{parentName:"a"},"[Tool1]")," correlated with ",(0,r.kt)("strong",{parentName:"a"},"[Event2]")," in ",(0,r.kt)("strong",{parentName:"a"},"[Tool2]")," within ",(0,r.kt)("strong",{parentName:"a"},"[window]")," every ",(0,r.kt)("strong",{parentName:"a"},"[Period]")," by team."))),(0,r.kt)("p",null,"Right now these are the events available for each tool:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tool"),(0,r.kt)("th",{parentName:"tr",align:null},"Events"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"New branches, Open PRs, Merged PRs, Closed PRs, PR additions/deletions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Started stories, Finished stories, Delivered stories, Accepted stories")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Heroku"),(0,r.kt)("td",{parentName:"tr",align:null},"Releases, Builds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Travis"),(0,r.kt)("td",{parentName:"tr",align:null},"Builds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CodeClimate"),(0,r.kt)("td",{parentName:"tr",align:null},"Coverage reports")))),(0,r.kt)("p",null,"Here we are showing 4 different examples with their corresponding JSON format using the patterns above. Bear in mind that this is the DSL of the metric and the period is not displayed because it belongs to the guarantee:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. NUMBER_PT_STARTEDSTORIES:")," Number of ",(0,r.kt)("inlineCode",{parentName:"p"},"STARTED_STORIES")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"PIVOTAL")," every ",(0,r.kt)("inlineCode",{parentName:"p"},"DAY")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"MEMBER")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metric": {\n      "computing": "actual",\n      "element": "number",\n      "event": {\n        "pivotal": {\n          "activity": {\n            "highlight": "finished"\n          }\n        }\n      },\n      "scope": {\n        "$ref": "#/context/definitions/scopes/development"\n      }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. VALUE_CC_COVERAGE_AVG:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"AVG COVERAGE")," value of ",(0,r.kt)("inlineCode",{parentName:"p"},"COVERAGE_REPORT")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"CODECLIMATE")," every ",(0,r.kt)("inlineCode",{parentName:"p"},"WEEK")," by team."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "metric": {\n      "computing": "actual",\n      "element": {\n        "value": {\n          "parameter": "attributes.covered_percent",\n          "return": "avg",\n          "traceback": true\n        }\n      },\n      "event": {\n        "codeclimate": {\n          "coverage": {}\n        }\n      },\n      "scope": {\n        "$ref": "#/context/definitions/scopes/development"\n      }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. STDEV_TR_SUCCESSFULBUILDS_DAILY:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DAILY")," distribution of ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESSFUL_BUILDS")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"TRAVIS")," every ",(0,r.kt)("inlineCode",{parentName:"p"},"WEEK")," by team"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metric": {\n      "computing": "string",\n      "element": {\n        "stdev": {\n          "period": "daily"\n        }\n      },\n      "event": {\n        "travis": {\n          "builds_public": {\n            "@type": "build",\n            "state": "passed"          \n          }\n        }\n      },\n      "scope": {\n        "$ref": "#/context/definitions/scopes/development"\n      }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. PERCENTAGE_GH_NEWBRANCH_PT_STARTEDSTORIES:")," Percentage of ",(0,r.kt)("inlineCode",{parentName:"p"},"NEW_BRANCH")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB")," correlated with ",(0,r.kt)("inlineCode",{parentName:"p"},"START_STORY")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"PIVOTAL_TRACKER")," within ",(0,r.kt)("inlineCode",{parentName:"p"},"1_HOUR")," every ",(0,r.kt)("inlineCode",{parentName:"p"},"WEEK")," by team."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metric": {\n      "computing": "actual",\n      "element": {\n        "percentage": {\n          "related": {\n            "github": {\n              "events": {\n                "type": "CreateEvent",\n                "payload": {\n                  "ref_type": "branch"\n                }\n              }\n            },\n            "window": 3600\n          }\n        }\n      },\n      "event": {\n        "pivotal": {\n          "activity": {\n            "highlight": "started"\n          }\n        }\n      },\n      "scope": {\n        "$ref": "#/context/definitions/scopes/development"\n      }\n    }\n}\n')),(0,r.kt)("p",null,"For a ",(0,r.kt)("strong",{parentName:"p"},"full list of metric pattern examples"),", please follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector/README.md"},"this link")," where you can found the following examples:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Non correlation metrics:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Tool"),(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"DSL Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"New Branches"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_gh_newbranch"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"Open PR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_gh_openpr"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"Merged PR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_gh_mergepr"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Started Stories"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_pt_startedstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Finished Stories"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_pt_finishedstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered Stories"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_pt_acceptedstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Accepted Stories"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_pt_deliveredstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Heroku"),(0,r.kt)("td",{parentName:"tr",align:null},"Releases"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_he_releases"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Travis"),(0,r.kt)("td",{parentName:"tr",align:null},"Builds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_tr_builds"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Travis"),(0,r.kt)("td",{parentName:"tr",align:null},"Failed Builds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_tr_failedbuilds"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"CodeClimate"),(0,r.kt)("td",{parentName:"tr",align:null},"Coverage Reports"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_cc_coverage"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"CodeClimate"),(0,r.kt)("td",{parentName:"tr",align:null},"Coverage Reports over 80"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#number_cc_coverage_over80"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"CodeClimate"),(0,r.kt)("td",{parentName:"tr",align:null},"Coverage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#value_cc_coverage"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"CodeClimate"),(0,r.kt)("td",{parentName:"tr",align:null},"Coverage Offsetted"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#value_cc_coverage_offset"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STDev"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"Daily Merged PR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#stdev_gh_mergepr_daily"},"Show definition"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Correlation metrics:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Tool 1"),(0,r.kt)("th",{parentName:"tr",align:null},"Event 1"),(0,r.kt)("th",{parentName:"tr",align:null},"Tool 2"),(0,r.kt)("th",{parentName:"tr",align:null},"Event 2"),(0,r.kt)("th",{parentName:"tr",align:null},"Correlation Type"),(0,r.kt)("th",{parentName:"tr",align:null},"DSL Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"New Branch"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Started Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Time Window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_gh_newbranch_pt_startedstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"New Branch"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Started Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Bind"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_gh_newbranch_pt_startedstories_bind"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"Open PR"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Finished Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Time Window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_gh_openpr_pt_finishedstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"Open PR"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Finished Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Bind"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_gh_openpr_pt_finishedstories_bind"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"Merge PR"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Time Window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_gh_mergepr_pt_deliveredstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"Merge PR"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Bind"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_gh_mergepr_pt_deliveredstories_bind"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub Wrapper"),(0,r.kt)("td",{parentName:"tr",align:null},"New Branch"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Started Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Time Window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_ghwr_newbranch_pt_startedstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"Heroku"),(0,r.kt)("td",{parentName:"tr",align:null},"Releases"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Time Window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_he_releases_pt_deliveredstories"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"Heroku"),(0,r.kt)("td",{parentName:"tr",align:null},"Releases"),(0,r.kt)("td",{parentName:"tr",align:null},"Pivotal Tracker"),(0,r.kt)("td",{parentName:"tr",align:null},"Delivered Stories"),(0,r.kt)("td",{parentName:"tr",align:null},"Bind"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_he_releases_pt_deliveredstories_bind"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"Travis"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful Builds"),(0,r.kt)("td",{parentName:"tr",align:null},"Travis"),(0,r.kt)("td",{parentName:"tr",align:null},"Builds"),(0,r.kt)("td",{parentName:"tr",align:null},"Time Window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_tr_successfulbuilds_tr_builds"},"Show definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"CodeClimate"),(0,r.kt)("td",{parentName:"tr",align:null},"Coverage reports over 80"),(0,r.kt)("td",{parentName:"tr",align:null},"CodeClimate"),(0,r.kt)("td",{parentName:"tr",align:null},"Coverage reports"),(0,r.kt)("td",{parentName:"tr",align:null},"Time Window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#percentage_cc_coverageover80_cc_coverage"},"Show definition"))))),(0,r.kt)("h3",{id:"pivotal-tracker-collector"},"Pivotal Tracker Collector"),(0,r.kt)("p",null,"The PT Collector connects with Pivotal Tracker and can produce more specific metrics using the different payloads. "),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"There is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/pt-collector"},"webpage")," with available examples for public usage."),(0,r.kt)("h3",{id:"github-collector"},"GitHub Collector"),(0,r.kt)("p",null,"Using GitHub API v4, it can access to the information from GitHub Projects Kanbans in order to keep track of the different cards and the changes. "),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"There is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/gh-collector"},"webpage")," with available examples for public usage."))}c.isMDXComponent=!0}}]);