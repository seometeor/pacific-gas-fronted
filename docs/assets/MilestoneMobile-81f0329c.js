import{d as p,r as f,b,e as _,f as h,c as v,a as o,t as a,j as t,w as n,u as l,n as m,i,o as g,k as M,y as C,h as u,_ as y}from"./index-bbe86257.js";const x={class:"milestone"},A={style:{display:"flex","align-items":"center"}},B={style:{"font-size":"14px"}},S={style:{color:"#005782"}},k=p({__name:"MilestoneMobile",setup(w){const e=f(!1);return b(()=>{sessionStorage.getItem("isChActive")=="true"?e.value=!0:e.value=!1,_.on("isChActive",s=>{e.value=s})}),h(()=>{_.off("isChActive")}),(s,I)=>{const c=i("el-breadcrumb-item"),d=i("el-breadcrumb"),r=i("el-image");return g(),v("div",x,[o("div",A,[o("span",B,a(s.$t("menu.position"))+"：",1),t(d,{"separator-icon":l(C)},{default:n(()=>[t(c,{to:{path:"/homeMobile"}},{default:n(()=>[M(a(s.$t("menu.home")),1)]),_:1}),t(c,{to:{path:"/secondMobile/milestoneMobile"}},{default:n(()=>[o("span",S,a(s.$t("menu.milestone")),1)]),_:1})]),_:1},8,["separator-icon"])]),t(r,{class:m({"img-En":e.value}),src:l(u)("mileStone-en.png")},null,8,["class","src"]),t(r,{class:m({"img-Ch":!e.value}),src:l(u)("mileStone-ch.png")},null,8,["class","src"])])}}});const V=y(k,[["__scopeId","data-v-44b7c3ac"]]);export{V as default};