import{d as f,b as c,o as t,A as r,s,f as n,w as V,e as k,F as C,E as b,G as h,c as x,D as y}from"./index-b7afd9dd.js";const B={class:"d-flex mb-6"},N={class:"d-flex"},$={class:"flex-grow-1 mr-4"},g={class:"d-flex"},w={name:"ExpandableLayout"},L=f({...w,props:{modelValue:null},emits:["update:modelValue","add"],setup(l,{emit:u}){const p=l;function _(o){const e=[...p.modelValue];e.splice(o,1),u("update:modelValue",e)}return(o,e)=>{const i=c("v-spacer"),m=c("v-btn"),v=c("v-divider");return t(),r("section",null,[s("div",B,[n(i),n(m,{"prepend-icon":"mdi-plus",color:"primary",onClick:e[0]||(e[0]=a=>o.$emit("add"))},{default:V(()=>[k(" add ")]),_:1})]),(t(!0),r(C,null,b(l.modelValue,(a,d)=>(t(),r("div",{key:a},[s("div",N,[s("div",$,[h(o.$slots,"default",{item:a,index:d})]),s("div",g,[n(i),n(m,{color:"error",icon:"mdi-delete-outline",onClick:E=>_(d)},null,8,["onClick"])])]),d+1<l.modelValue.length?(t(),x(v,{key:0,class:"mb-4"})):y("",!0)]))),128))])}}});export{L as _};
