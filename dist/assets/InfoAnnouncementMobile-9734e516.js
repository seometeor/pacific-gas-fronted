import{d as M,c as d,a as s,t as a,j as e,w as n,u as r,F as y,z as C,i as o,o as u,k as f,y as I,h as A,_ as x}from"./index-2570b978.js";import{a as $}from"./announcementList-55fb6487.js";const w={class:"infoAnnouncement"},L={style:{display:"flex","align-items":"center"}},B={style:{"font-size":"14px"}},N={style:{color:"#005782"}},V=["onClick"],j={class:"title"},z={class:"subTitle"},F=M({__name:"InfoAnnouncementMobile",setup(R){const i=l=>{localStorage.setItem("activeIndex",l.id)};return(l,S)=>{const p=o("el-breadcrumb-item"),b=o("el-breadcrumb"),h=o("el-image"),_=o("RouterLink"),c=o("el-col"),v=o("el-row"),g=o("el-divider");return u(),d("div",w,[s("div",L,[s("span",B,a(l.$t("menu.position"))+"：",1),e(b,{"separator-icon":r(I)},{default:n(()=>[e(p,{to:{path:"/homeMobile"}},{default:n(()=>[f(a(l.$t("menu.home")),1)]),_:1}),e(p,{to:{path:"/secondMobile/infoAnnouncementMobile"}},{default:n(()=>[s("span",N,a(l.$t("menu.infoAnnouncement")),1)]),_:1})]),_:1},8,["separator-icon"])]),(u(!0),d(y,null,C(r($),(t,k)=>(u(),d("div",{key:k,onClick:m=>i(t)},[e(v,null,{default:n(()=>[e(c,{span:24},{default:n(()=>[e(_,{to:{path:"/secondMobile/infomationMobile"}},{default:n(()=>[e(h,{src:r(A)("infoAnnouncement.jpg"),class:"img"},null,8,["src"])]),_:1})]),_:1}),e(c,{span:24},{default:n(()=>[e(_,{to:{path:"/secondMobile/infomationMobile"},onClick:m=>i(t)},{default:n(()=>[s("p",j,a(t.title),1)]),_:2},1032,["onClick"])]),_:2},1024),e(c,{span:24},{default:n(()=>[s("span",z,[s("p",null,"发布时间："+a(t.date)+" 分类："+a(t.type),1)])]),_:2},1024),e(c,{span:24},{default:n(()=>[e(_,{to:{path:"/secondMobile/infomationMobile"},onClick:m=>i(t)},{default:n(()=>[f("阅读正文 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),e(g)],8,V))),128))])}}});const E=x(F,[["__scopeId","data-v-d952cd97"]]);export{E as default};
