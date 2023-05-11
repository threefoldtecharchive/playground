import{d as x,u as U,r as c,a as W,b as s,o as V,c as B,w as t,g as C,e as y,f as o,h as P,v as z,j as w,m as $,i as F,s as _,y as j,z as G,_ as K,A as Y,F as q}from"./index-b7afd9dd.js";import{P as k,d as Q,r as H}from"./root_fs-caa8e3a5.js";import{e as h,f as D,_ as J}from"./tf_deployment_list.vue_vue_type_script_setup_true_lang-1240b60d.js";import{_ as S}from"./expandable_layout.vue_vue_type_script_setup_true_lang-052cc532.js";import"./list_table.vue_vue_type_script_setup_true_lang-dd240133.js";const X=_("a",{href:"https://manual.grid.tf/weblets/weblets_caprover.html?highlight=caprover#caprover",target:"_blank",class:"app-link"}," Quick start documentation ",-1),Z=_("p",{style:{maxWidth:"880px"}}," You will need to point a wildcard DNS entry for the domain you entered above to this CapRover instance IP Address after deployment, otherwise, you won't be able to access the CapRover dashboard using this domain. ",-1),ee=_("p",{class:"font-weight-bold mt-4"},[y(" If you don't know what Captain root domain is, make sure to visit the "),_("a",{target:"_blank",href:"https://manual.grid.tf/weblets/weblets_caprover.html?highlight=caprover#caprover",style:{color:"inherit"}}," Quick start documentation. ")],-1),ae={name:"TfCaprover",components:{CaproverWorker:h,ExpandableLayout:S}},te=x({...ae,setup(E){const r=U(),b=c(),u=W(),d=c(""),p=c(C(10)),i=c(D("CR"+C(9))),n=c([]);async function A(){r.value.setStatus("deploy");const l=k.Caprover.toLowerCase();try{const e=await j(u.profile,l);await r.value.validateBalance(e);const v=await Q(e,{name:i.value.name,machines:[g(i.value,[{key:"SWM_NODE_MODE",value:"leader"},{key:"CAPROVER_ROOT_DOMAIN",value:d.value},{key:"CAPTAIN_IMAGE_VERSION",value:"latest"},{key:"PUBLIC_KEY",value:u.profile.ssh},{key:"DEFAULT_PASSWORD",value:p.value},{key:"CAPTAIN_IS_DEBUG",value:"true"}]),...n.value.map(f=>g(f,[{key:"SWM_NODE_MODE",value:"worker"},{key:"PUBLIC_KEY",value:u.profile.ssh}]))]});r.value.reloadDeploymentsList(),r.value.setStatus("success","Successfully deployed a caprover instance."),r.value.openDialog(v,{SWM_NODE_MODE:"Swarm Node Mode",PUBLIC_KEY:"Public SSH Key",CAPROVER_ROOT_DOMAIN:!1,CAPTAIN_IMAGE_VERSION:"Captain Image Version",DEFAULT_PASSWORD:"Default Password",CAPTAIN_IS_DEBUG:"Debug Mode"})}catch(e){r.value.setStatus("failed",G(e,"Failed to deploy a caprover instance."))}}function I(){n.value.push(D())}function g(l,e){return{name:l.name,cpu:l.solution.cpu,memory:l.solution.memory,flist:"https://hub.grid.tf/tf-official-apps/tf-caprover-latest.flist",entryPoint:"/sbin/zinit init",farmId:l.farm.farmID,farmName:l.farm.name,country:l.farm.country,publicIpv4:!0,planetary:!0,rootFilesystemSize:H(l.solution.cpu,l.solution.memory),disks:[{name:"data0",size:l.solution.disk,mountPoint:"/var/lib/docker"}],envs:e}}return(l,e)=>{const v=s("v-text-field"),f=s("input-validator"),N=s("v-alert"),L=s("password-input-wrapper"),O=s("d-tabs"),M=s("v-btn"),T=s("weblet-layout");return V(),B(T,{ref_key:"layout",ref:r},{title:t(()=>[y("Deploy Caprover")]),subtitle:t(()=>[y(" CapRover is an extremely easy to use app/database deployment & web server manager for your NodeJS, Python, PHP, ASP.NET, Ruby, MySQL, MongoDB, Postgres, WordPress (and etc…) applications! "),X]),"footer-actions":t(()=>{var a;return[o(M,{color:"primary",variant:"tonal",onClick:A,disabled:(a=b.value)==null?void 0:a.invalid},{default:t(()=>[y(" Deploy ")]),_:1},8,["disabled"])]}),default:t(()=>[o(O,{tabs:[{title:"Config",value:"config"},{title:"Leader",value:"leader"},{title:"Workers",value:"workers"}],ref_key:"tabs",ref:b},{config:t(()=>[o(f,{value:d.value,rules:[P("Domain is required."),z("Please provide a valid domain.",{pattern:/^\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b$/})]},{default:t(({props:a})=>[o(v,w({label:"Domain",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=m=>d.value=m)},a,{autofocus:""}),null,16,["modelValue"])]),_:1},8,["value","rules"]),o(N,{type:"warning",variant:"tonal",class:"mb-6"},{default:t(()=>[Z,ee]),_:1}),o(L,null,{default:t(({props:a})=>[o(f,{value:p.value,rules:[P("Password is required."),$("Password minLength is 6 chars.",6),F("Password maxLength is 15 chars.",15)]},{default:t(({props:m})=>[o(v,w({label:"Password",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=R=>p.value=R)},{...a,...m}),null,16,["modelValue"])]),_:2},1032,["value","rules"])]),_:1})]),leader:t(()=>[o(h,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=a=>i.value=a)},null,8,["modelValue"])]),workers:t(()=>[o(S,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=a=>n.value=a),onAdd:I},{default:t(({index:a})=>[o(h,{modelValue:n.value[a],"onUpdate:modelValue":m=>n.value[a]=m},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["modelValue"])]),_:1},512)]),_:1},512)}}}),oe={name:"CaproverView",components:{TfCaprover:te,TfDeploymentList:J},setup(){return{name:k.Caprover}}},le={class:"mt-4"};function se(E,r,b,u,d,p){const i=s("TfCaprover"),n=s("TfDeploymentList");return V(),Y(q,null,[o(i),_("div",le,[o(n,{"project-name":u.name},null,8,["project-name"])])],64)}const pe=K(oe,[["render",se]]);export{pe as default};
