import{d as a,y as e,f as s,P as l,m as t,r as o,o as n,c as i,a as d,t as r,i as u,g as m,w as c}from"./index-74a794cf.js";const p={style:{"margin-bottom":"15px"}},g={style:{display:"flex","align-items":"center"}},v=d("span",null,"切换权限：",-1),f=a({emits:["change"],setup(a,{emit:f}){const y=e(),b=s((()=>y.roles)),x=l(b.value[0]);return t(x,(async a=>{await y.changeRoles(a),f("change")})),(a,e)=>{const s=o("el-radio-button"),l=o("el-radio-group");return n(),i("div",null,[d("div",p,"你的权限："+r(u(b)),1),d("div",g,[v,m(l,{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=a=>x.value=a)},{default:c((()=>[m(s,{label:"editor"}),m(s,{label:"admin"})])),_:1},8,["modelValue"])])])}}});export{f as _};
