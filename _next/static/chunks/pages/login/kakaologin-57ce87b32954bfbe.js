(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[181],{9144:function(e,n,t){"use strict";t.r(n);var o=t(7294);t(1163);var r=t(9521),a=t(8767),c=t(1896),i=t(4480),u=t(8872),s=t(1505),l=t(35),d=t(5893),f=t(3454),p=r.ZP.div.withConfig({displayName:"kakaologin__KakaologinRedirectWrapper",componentId:"sc-1pkvppm-0"})([""]),h=r.ZP.div.withConfig({displayName:"kakaologin__Loading",componentId:"sc-1pkvppm-1"})(["display:flex;justify-content:center;align-items:center;opacity:1;position:fixed;top:0;left:0;height:100vh;width:100vw;background-color:#fcfcfc;z-index:99999;"]);n.default=function(){var e=(0,o.useState)(null),n=e[0],t=e[1],r=(0,o.useState)(null),_=r[0],k=r[1],g=(0,o.useState)(null),E=g[0],w=g[1];return(0,i.sJ)(u.w6),(0,a.useQuery)(["requestKakaoLogin",E],function(){return(0,c.Y)({baseURl:"".concat(f.env.NEXT_PUBLIC_DOMAIN),url:"".concat(f.env.NEXT_PUBLIC_API_SERVER,"/login/kakaologin"),withCredentials:!0,method:"POST",data:{userInfo:E}})},{retry:!1,enabled:null!=E,onSuccess:function(e){"success"===e.data.status?(l.y.setItemWithExpireTime("loggedIn",!0,1296e4),location.replace("/")):"not exist"===e.data.status&&(location.href="/signup/simple")},onError:function(e){console.error("Error Occured : ",e)}}).refetch,(0,a.useQuery)(["getUserInfo",_],function(){return(0,c.Y)({baseURl:"".concat(f.env.NEXT_PUBLIC_DOMAIN),url:"https://kapi.kakao.com/v2/user/me",method:"GET",headers:{"Content-type":"application/x-www-form-urlencoded;charset=utf-8",Authorization:"Bearer ".concat(_)}})},{retry:!1,enabled:null!=_,onSuccess:function(e){w(e.data)},onError:function(e){console.error("Error Occured : ",e)}}).refetch,(0,a.useQuery)(["getAccessToken",n],function(){return(0,c.Y)({baseURl:"".concat(f.env.NEXT_PUBLIC_DOMAIN),url:"https://kauth.kakao.com/oauth/token",method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded;charset=utf-8"},data:{grant_type:"authorization_code",client_id:"".concat(f.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY),redirect_uri:"".concat(f.env.NEXT_PUBLIC_DOMAIN+"/login/kakaologin"),code:"".concat(n)}})},{retry:!1,enabled:null!=n,onSuccess:function(e){k(e.data.access_token)},onError:function(e){console.error("Error Occured : ",e)}}).refetch,(0,o.useEffect)(function(){var e=new URL(document.location).searchParams.get("code");e&&t(e)},[]),(0,d.jsx)(p,{children:(0,d.jsx)(h,{children:(0,d.jsx)(s.iT,{height:"80",width:"80",radius:"9",color:"#DC5F00",secondaryColor:"#a9a9a8",ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0,strokeWidth:"2",strokeWidthSecondary:"4"})})})}},10:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/kakaologin",function(){return t(9144)}])}},function(e){e.O(0,[774,888,179],function(){return e(e.s=10)}),_N_E=e.O()}]);