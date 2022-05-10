/*! For license information please see npm.react-router-dom.fb09e.js.LICENSE.txt */
"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[216],{9711:(e,t,a)=>{a.r(t),a.d(t,{BrowserRouter:()=>l,HashRouter:()=>f,Link:()=>p,MemoryRouter:()=>o.VA,NavLink:()=>d,Navigate:()=>o.Fg,NavigationType:()=>r.aU,Outlet:()=>o.j3,Route:()=>o.AW,Router:()=>o.F0,Routes:()=>o.Z5,UNSAFE_LocationContext:()=>o.gd,UNSAFE_NavigationContext:()=>o.Us,UNSAFE_RouteContext:()=>o.pW,createPath:()=>r.Ep,createRoutesFromChildren:()=>o.is,createSearchParams:()=>v,generatePath:()=>o.Gn,matchPath:()=>o.LX,matchRoutes:()=>o.fp,parsePath:()=>r.cP,renderMatches:()=>o.Oe,resolvePath:()=>o.i3,unstable_HistoryRouter:()=>h,useHref:()=>o.oQ,useInRouterContext:()=>o.GV,useLinkClickHandler:()=>y,useLocation:()=>o.TH,useMatch:()=>o.bS,useNavigate:()=>o.s0,useNavigationType:()=>o.ur,useOutlet:()=>o.pC,useOutletContext:()=>o.bx,useParams:()=>o.UO,useResolvedPath:()=>o.WU,useRoutes:()=>o.V$,useSearchParams:()=>m});var n=a(7294),r=a(5648),o=a(6974);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}const s=["onClick","reloadDocument","replace","state","target","to"],u=["aria-current","caseSensitive","className","end","style","to","children"];function l(e){let{basename:t,children:a,window:c}=e,i=(0,n.useRef)();null==i.current&&(i.current=(0,r.lX)({window:c}));let s=i.current,[u,l]=(0,n.useState)({action:s.action,location:s.location});return(0,n.useLayoutEffect)((()=>s.listen(l)),[s]),(0,n.createElement)(o.F0,{basename:t,children:a,location:u.location,navigationType:u.action,navigator:s})}function f(e){let{basename:t,children:a,window:c}=e,i=(0,n.useRef)();null==i.current&&(i.current=(0,r.q_)({window:c}));let s=i.current,[u,l]=(0,n.useState)({action:s.action,location:s.location});return(0,n.useLayoutEffect)((()=>s.listen(l)),[s]),(0,n.createElement)(o.F0,{basename:t,children:a,location:u.location,navigationType:u.action,navigator:s})}function h(e){let{basename:t,children:a,history:r}=e;const[c,i]=(0,n.useState)({action:r.action,location:r.location});return(0,n.useLayoutEffect)((()=>r.listen(i)),[r]),(0,n.createElement)(o.F0,{basename:t,children:a,location:c.location,navigationType:c.action,navigator:r})}const p=(0,n.forwardRef)((function(e,t){let{onClick:a,reloadDocument:r,replace:u=!1,state:l,target:f,to:h}=e,p=i(e,s),d=(0,o.oQ)(h),m=y(h,{replace:u,state:l,target:f});return(0,n.createElement)("a",c({},p,{href:d,onClick:function(e){a&&a(e),e.defaultPrevented||r||m(e)},ref:t,target:f}))})),d=(0,n.forwardRef)((function(e,t){let{"aria-current":a="page",caseSensitive:r=!1,className:s="",end:l=!1,style:f,to:h,children:d}=e,y=i(e,u),m=(0,o.TH)(),v=(0,o.WU)(h),g=m.pathname,b=v.pathname;r||(g=g.toLowerCase(),b=b.toLowerCase());let R,w=g===b||!l&&g.startsWith(b)&&"/"===g.charAt(b.length),C=w?a:void 0;R="function"==typeof s?s({isActive:w}):[s,w?"active":null].filter(Boolean).join(" ");let k="function"==typeof f?f({isActive:w}):f;return(0,n.createElement)(p,c({},y,{"aria-current":C,className:R,ref:t,style:k,to:h}),"function"==typeof d?d({isActive:w}):d)}));function y(e,t){let{target:a,replace:c,state:i}=void 0===t?{}:t,s=(0,o.s0)(),u=(0,o.TH)(),l=(0,o.WU)(e);return(0,n.useCallback)((t=>{if(!(0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let a=!!c||(0,r.Ep)(u)===(0,r.Ep)(l);s(e,{replace:a,state:i})}}),[u,s,l,c,i,a,e])}function m(e){let t=(0,n.useRef)(v(e)),a=(0,o.TH)(),r=(0,n.useMemo)((()=>{let e=v(a.search);for(let a of t.current.keys())e.has(a)||t.current.getAll(a).forEach((t=>{e.append(a,t)}));return e}),[a.search]),c=(0,o.s0)();return[r,(0,n.useCallback)(((e,t)=>{c("?"+v(e),t)}),[c])]}function v(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,a)=>{let n=e[a];return t.concat(Array.isArray(n)?n.map((e=>[a,e])):[[a,n]])}),[]))}}}]);