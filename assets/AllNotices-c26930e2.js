import{a as L,u as P,r as n,D as w,k as N,z as A,f as E,j as e}from"./index-e55b8b4d.js";import{L as S}from"./Loader-5eaa80c7.js";import{N as y,S as F}from"./NoMatchesFound-6143a5d6.js";import{N as z,a as C}from"./noticeList.styled-db7e520e.js";import"./AllNotices.styled-097117b1.js";import"./notiflix-notify-aio-d5ae3de8.js";import"./AttentionModalWrapper-536b54f6.js";function R(){var d;const{pathname:l}=L(),h=l.split("/")[2],[p]=P(),g=Object.fromEntries(p.entries()),[i,f]=n.useState(1),[c,r]=n.useState(12);n.useEffect(()=>{const t=()=>{const s=window.innerWidth;s<=768?r(11):s<=1024?r(10):r(12)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const{data:a,error:m,isLoading:j}=w({category:h,params:{page:i,limit:c,...g}}),u=N(A),{data:o}=E(void 0,{skip:!u}),x=u&&((d=o==null?void 0:o.user)==null?void 0:d.favoritesArr)||[],v=(t,s)=>{f(s)};return e.jsxs(e.Fragment,{children:[j?e.jsx(S,{}):e.jsxs(e.Fragment,{children:[e.jsx(z,{children:a.notices.length>0?a.notices.map(({_id:t,...s})=>e.jsx(C,{id:t,...s,userFavoritesArr:x},t)):e.jsx(y,{})}),e.jsx(F,{count:Math.ceil(a.totalCount/c),page:i,onChange:v,color:"primary"})]}),m&&m.message]})}export{R as default};