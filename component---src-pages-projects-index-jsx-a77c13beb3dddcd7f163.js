"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[144],{2861:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(7294),s=a(4316),n=a(917);const i=(0,s.Z)("div",{target:"e1mzxk9t2"})("height:15px;width:15px;border-radius:50%;border:solid 1px #ddd;background-color:rgb(167, 39, 39);z-index:10;transition-duration:0.3s;left:",(e=>{let{position:t}=e;return t+"px"}),";"),r=(0,s.Z)("div",{target:"e1mzxk9t1"})({name:"3uvoxs",styles:"height:8px;width:25px;border-radius:50px;background-color:#ddd"}),o=(0,s.Z)("button",{target:"e1mzxk9t0"})("margin:",(e=>{let{theme:{size:t}}=e;return"0 "+(null==t?void 0:t.u3)+"px"}),";right:10vw;");function c(e){let{onClick:t,position:a}=e;return(0,n.tZ)(o,{onClick:t,className:"flex align-self-end align-items-center justify-between relative"},(0,n.tZ)("p",null,"UIUX"),(0,n.tZ)("div",{className:"flex align-items-center justify-center relative",style:{margin:20}},(0,n.tZ)(i,{className:"absolute",position:a}),(0,n.tZ)(r,null)),(0,n.tZ)("p",null,"Doodles"))}var d=a(6624),u=a(1562),m=a(4422),p=a(7888);function g(){const{pageOpacity:e,setPageOpacity:t,setNavOpacity:a,location:s}=(0,m.oR)();l.useEffect((()=>{setTimeout((()=>{t(1)}),700)}),[]);const{0:i,1:r}=(0,l.useState)(!0),{0:o,1:g}=(0,l.useState)(-5),x=(0,l.useRef)({}),f=()=>{g(i?15:-5),document.querySelectorAll(".parallax-element").forEach((e=>{const t="true"===e.getAttribute("data-toggled");e.style.transform=t?"scale(1, 1) translateX(0px) translateY(0px)":"scale(1.5, 1.5) translateX(0px) translateY(0px)"})),document.querySelectorAll(".parallax-children").forEach((e=>{"true"===e.getAttribute("data-toggled")?e.classList.remove("shake"):e.classList.add("shake")})),r(!i)},v=e=>{x.current=e,document.querySelectorAll(".parallax-element").forEach((t=>{const a="true"===t.getAttribute("data-toggled"),l=a?t.getAttribute("value"):t.getAttribute("value")/10,s=(window.innerWidth-e.pageX*l)/90,n=(window.innerHeight-e.pageY*l)/90;t.style.transform=a?"scale(1.5, 1.5) translateX("+s+"px) translateY("+n+"px)":"scale(1, 1) translateX("+s+"px) translateY("+n+"px)"}))},h=e=>{32===e.keyCode&&f()},y=e=>{e.target.className.includes("shake")&&(e.target.nextSibling.style.display="inline",e.target.nextSibling.classList.remove("fadeOut"),e.target.nextSibling.classList.add("fadeIn"))},b=e=>{e.target.className.includes("shake")&&(e.target.nextSibling.classList.add("fadeOut"),e.target.nextSibling.classList.remove("fadeIn"))};return(0,l.useEffect)((()=>(document.addEventListener("mousemove",v),()=>document.removeEventListener("mousemove",v))),[]),(0,l.useEffect)((()=>(document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h))),[i]),(0,n.tZ)("div",{className:"flex flex-column full-vh relative",style:{width:"calc(100vw - 100px)",transition:"0.75s ease-out",opacity:e}},(0,n.tZ)(c,{onClick:f,position:o}),(0,n.tZ)("div",{className:"flex flex-column flex-grow relative"},(0,n.tZ)("div",{className:"flex flex-column flex-grow relative"},Object.entries(d.Cu).map(((e,l)=>{let[r,{src:o,value:c,styles:d,title:m,subtitle:g}]=e;return(0,n.tZ)("div",{key:r,id:"parallax-"+r,value:c,"data-toggled":i,className:"parallax-element relative",onClick:()=>(e=>{const l=(0,u.dq)(e);(0,p.M)(s.pathname,l)||a(0),t(0),setTimeout((()=>{(0,u.c4)(e)}),700)})(r),style:{zIndex:100,opacity:i?1:.2,marginTop:9*(l+1)+"vh",transform:"scale(1.5, 1.5) translateX(0px) translateY(0px)",...d},onMouseEnter:y,onMouseLeave:b},(0,n.tZ)("img",{className:"parallax-children shake animate__animated","data-toggled":i,src:o,style:{width:"100%",height:"100%",cursor:i?"pointer":"initial"}}),(0,n.tZ)("div",{style:{display:"none",position:"absolute",top:0,left:"100%",marginLeft:10,width:"300%",zIndex:-10},className:"sliding-text animate__animated"},(0,n.tZ)("h6",null,m),(0,n.tZ)("p",{style:{fontSize:12,color:"#999"}},g)))}))),(0,n.tZ)("div",{className:"absolute flex flex-column flex-grow",style:{height:"90%",width:"100%",top:0}},Object.entries(d.$1).map(((e,t)=>{let[a,{src:l,value:s,styles:r}]=e;return(0,n.tZ)("div",{value:s,"data-toggled":!i,key:a,id:"parallax-"+a,className:"parallax-element relative",src:l,style:{opacity:i?.2:1,marginTop:7*(t+1)+"vh",transform:"scale(1, 1) translateX(0px) translateY(0px)",...r}},(0,n.tZ)("img",{className:"parallax-children animate__animated","data-toggled":!i,src:l,style:{width:"100%",height:"100%",cursor:i?"initial":"pointer"}}))})))))}var x=()=>(0,n.tZ)(g,null)}}]);
//# sourceMappingURL=component---src-pages-projects-index-jsx-a77c13beb3dddcd7f163.js.map