import{u as j,r as t,E as v,k as F,z as N,f as P,j as e,a as S,b as C,C as A}from"./index-e55b8b4d.js";import{N as E}from"./NoticesSearch-09df2e9d.js";import{A as b,N as L,P as w,F as y,a as M,b as V,c as k,d as z}from"./filtersQueries-a378c534.js";import{L as O}from"./Loader-5eaa80c7.js";import{N as Q,a as G}from"./noticeList.styled-db7e520e.js";import{N as I,S as R}from"./NoMatchesFound-6143a5d6.js";import"./AttentionModalWrapper-536b54f6.js";import"./notiflix-notify-aio-d5ae3de8.js";import"./AllNotices.styled-097117b1.js";function B(){var x;const[r]=j(),m=Object.fromEntries(r.entries()),[s,h]=t.useState(1),[l,o]=t.useState(12);t.useEffect(()=>{const a=()=>{const c=window.innerWidth;c<=768?o(11):c<=1024?o(10):o(12)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const{data:i,error:u,isLoading:d}=v({params:{page:s,limit:l,...m}}),f=F(N),{data:n}=P(void 0,{skip:!f}),p=f&&((x=n==null?void 0:n.user)==null?void 0:x.favoritesArr)||[],g=(a,c)=>{h(c)};return e.jsxs(e.Fragment,{children:[d&&e.jsx(O,{}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:i.notices.length>0?i.notices.map(({_id:a,...c})=>e.jsx(G,{id:a,...c,userFavoritesArr:p},a)):e.jsx(I,{})}),e.jsx(R,{count:Math.ceil(i.totalCount/l),page:s,onChange:g,color:"primary"})]}),u&&u.message]})}const T={to1:!1,to2:!1,from2:!1,female:!1,male:!1},W=()=>{const[r,m]=j(),[s,h]=t.useState(T),[l,o]=t.useState({}),i=S(),u=C(),d=t.useMemo(()=>Object.fromEntries([...r]),[r]);t.useEffect(()=>{m({...l,...b(s.to1,s.to2,s.from2,s.female,s.male)})},[s,d,m,l,r]),t.useEffect(()=>{i.pathname==="/notices"&&u("/notices/sell")},[]);const f=n=>{o(n?{query:n}:{})};return e.jsx(A,{children:e.jsxs(L,{children:[e.jsx(w,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(E,{onSubmit:f})}),e.jsxs(y,{children:[e.jsx(M,{searchParams:r}),e.jsx("div",{children:e.jsxs(V,{children:[e.jsx(k,{setCheckboxValue:h,checkboxValue:s}),e.jsx(z,{state:{from:i}})]})})]}),e.jsx(B,{})]})})};function D(){return e.jsx(W,{})}export{D as default};