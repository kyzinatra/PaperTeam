"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[143],{4471:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i=a.p+"github.svg"},2261:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={console:"n0sgFBHw9lqz4RNYse4V"}},7353:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={line:"LinHdl0LCiHjGGhc4iPc",line__prefix:"oDUHPHEN3aumO0x70D4F"}},3474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={"constructor-page":"TXpn8KVqDRatYWrjcZR7"}},5711:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={header:"qnZe0_arjPKjGsVxIasw"}},9862:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={header__tab:"p9tSgHa5ibX3vylHMAKH",header__tab_active:"A2g5ZC7TXgbVlhXg2dyn","header__tab-content":"H5Ifm5PAjzZoh6wHCqpv"}},9058:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={button:"xS1844DTL2q74pN8wKVA"}},5634:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={"github-link":"DHjnrMBZqH9yLf50FJlK"}},6734:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={linkBtn:"P3pC6rbmWtIk9E2dg6bI"}},6173:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={main:"TVKPqDIUw3P9RUeiqllQ",main__title:"NVAMW2RpqMadpdj50rGt",main__content:"lhdzKV3NtjHHwMyFKFQ3",main__link:"TBo5dBnwLhYQHnWy6NxJ",main__github:"V9nB_hGDCKLXQs41dssD"}},787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={purple:"PZwaVx3EV1w7H1P11XHN",green:"_CaXSak31NVaT8BRbICf",blue:"vGHVf03dtx10eoYMrRtG"}},4313:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={}},1703:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=a(9711),l=i(a(7296)),r=i(a(7292)),n=i(a(6016)),d=a(6706),o=a(4259),c=i(a(7215));t.default=()=>(0,s.jsx)(d.Provider,{store:o.store,children:(0,s.jsxs)(u.BrowserRouter,{children:[(0,s.jsx)(l.default,{}),(0,s.jsxs)(u.Routes,{children:[(0,s.jsx)(u.Route,{path:"/",element:(0,s.jsx)(r.default,{})}),(0,s.jsx)(u.Route,{path:"/constructor",element:(0,s.jsx)(n.default,{})})]}),(0,s.jsx)(c.default,{})]})})},4201:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=a(5893);t.default=()=>(0,i.jsx)("div",{className:"board",children:(0,i.jsx)("div",{className:"board__layer"})})},8478:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=a(7294),l=i(a(2261)),r=i(a(5209)),n=a(4259),d=i(a(1495)),o=i(a(787));t.default=()=>{const e=(0,n.useSelector)((e=>e.console)),t=(0,n.useAppDispatch)();return(0,u.useEffect)((()=>{e.length||d.default.runConsole(t)}),[e]),(0,u.useEffect)((()=>{d.default.log(t,[["blue","Success!"],[""," try smth else! :D"]],!0)}),[]),(0,s.jsx)("div",{className:l.default.console,children:e.map((e=>(0,s.jsx)(r.default,{prefix:e.prefix,children:e.data.map(((e,t)=>(0,s.jsx)("span",{className:o.default[e[0]],children:e[1]},t)))},e.id)))})}},5209:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=i(a(7353));t.default=({prefix:e,children:t})=>{let a=null;return a="boolean"==typeof e&&e?(0,s.jsx)("span",{className:u.default.line__prefix,children:">"}):e?(0,s.jsx)("span",{className:u.default.line__prefix,children:e}):"",(0,s.jsx)("div",{className:u.default.line,children:(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:a}),t]})})}},6016:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=a(7195),l=a(4259),r=i(a(4201)),n=i(a(8478)),d=i(a(3979)),o=i(a(3474));t.default=()=>{const e=(0,l.useAppDispatch)();return(0,s.jsxs)("div",{className:o.default["constructor-page"],children:[(0,s.jsx)(r.default,{}),(0,s.jsx)(n.default,{}),(0,s.jsx)(d.default,{onClick:()=>e((0,u.clear)()),children:"Clear"})]})}},7296:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=i(a(5711)),l=i(a(6230)),r=a(9711);t.default=()=>{const e=(0,r.useMatch)("/"),t=(0,r.useMatch)("/constructor"),a=(0,r.useMatch)("/contact");return(0,s.jsxs)("header",{className:u.default.header,children:[(0,s.jsx)(l.default,{active:!!e,to:"/",children:"Главная"}),(0,s.jsx)(l.default,{active:!!t,to:"/constructor",children:"Конструктор"}),(0,s.jsx)(l.default,{active:!!a,to:"/contact",children:"Помощь"})]})}},6230:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=a(9711),l=i(a(9862));t.default=({children:e,active:t,to:a})=>{const i=(0,u.useNavigate)();return(0,s.jsx)("div",{onClick:()=>i(a),className:l.default.header__tab+(t?` ${l.default.header__tab_active}`:""),children:(0,s.jsx)("div",{className:l.default["header__tab-content"],children:e})})}},3979:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=i(a(9058));t.default=({children:e,onClick:t})=>(0,s.jsx)("button",{onClick:t,className:u.default.button,children:e})},7168:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=i(a(4471)),l=i(a(5634));t.default=({href:e,children:t})=>(0,s.jsxs)("a",{className:l.default["github-link"],href:e,children:[t," ",(0,s.jsx)("img",{src:`${u.default}`,alt:"github icon"})]})},125:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=a(9711),l=i(a(6734));t.default=({children:e,to:t})=>(0,s.jsx)(u.Link,{to:t,className:l.default.linkBtn,children:e})},7292:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=i(a(7168)),l=i(a(125)),r=i(a(6173));t.default=()=>(0,s.jsxs)("div",{className:r.default.main,children:[(0,s.jsx)("h1",{className:r.default.main__title,children:"Главная"}),(0,s.jsxs)("div",{className:r.default.main__content,children:[(0,s.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aliquid, culpa unde optio ipsa delectus dignissimos porro et praesentium? Quod excepturi ea, sequi laudantium assumenda reprehenderit, quas ipsa vel quidem quae consequatur. Atque odio corrupti ea veritatis libero ut aperiam ullam nostrum ratione? Ipsam aspernatur adipisci voluptatibus id blanditiis veritatis deserunt. Quae voluptatibus beatae saepe, quaerat obcaecati dolores quas magni quibusdam, perferendis deleniti architecto blanditiis temporibus? Atque recusandae sit blanditiis."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aliquid, culpa unde optio ipsa delectus dignissimos porro et praesentium? Quod excepturi ea, sequi laudantium assumenda reprehenderit, quas ipsa vel quidem quae consequatur. Atque odio corrupti ea veritatis libero ut aperiam ullam nostrum ratione? Ipsam aspernatur adipisci voluptatibus id blanditiis veritatis deserunt. Quae voluptatibus beatae saepe, quaerat obcaecati dolores quas magni quibusdam, perferendis deleniti architecto blanditiis temporibus? Atque recusandae sit blanditiis."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aliquid, culpa unde optio ipsa delectus dignissimos porro et praesentium? Quod excepturi ea, sequi laudantium assumenda reprehenderit, quas ipsa vel quidem quae consequatur. Atque odio corrupti ea veritatis libero ut aperiam ullam nostrum ratione? Ipsam aspernatur adipisci voluptatibus id blanditiis veritatis deserunt. Quae voluptatibus beatae saepe, quaerat obcaecati dolores quas magni quibusdam, perferendis deleniti architecto blanditiis temporibus? Atque recusandae sit blanditiis."})]}),(0,s.jsx)("div",{className:r.default.main__link,children:(0,s.jsx)(l.default,{to:"/constructor",children:"Перейти в конструктор"})}),(0,s.jsxs)("div",{className:r.default.main__github,children:[(0,s.jsx)(u.default,{href:"https://github.com/kyzinatra/PaperTeam",children:"GitHub"}),(0,s.jsx)(u.default,{href:"https://github.com/kyzinatra",children:"Kyzinatri"}),(0,s.jsx)(u.default,{href:"https://github.com/Nekttuman",children:"Nekttuman"})]})]})},7215:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=i(a(5242)),l=i(a(398)),r=a(7294),n=a(6706),d=a(364),o=a(4259);t.default=()=>{const e=(0,o.useSelector)((e=>e.toasts)),t=(0,n.useDispatch)(),a=(0,r.useCallback)((()=>t((0,d.remove)({id:e[0].id}))),[e]);return e.length?(0,s.jsx)(l.default,{open:!0,autoHideDuration:e[0].timeout||6e4,onClose:a,children:(0,s.jsx)(u.default,{onClose:a,severity:e[0].type||"info",sx:{width:"100%"},children:e[0].text})}):null}},2629:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(5893),u=a(745),l=i(a(1703));a(4313),a(787),console.log("DEVMODE");const r=document.getElementById("root");(0,u.createRoot)(r).render((0,s.jsx)(l.default,{}))},7195:(e,t,a)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.clear=t.add=t.consoleSlice=void 0;const s=a(9829);t.consoleSlice=(0,s.createSlice)({name:"console",initialState:[],reducers:{add:(e,t)=>[...e,t.payload],clear:e=>[]}}),i=t.consoleSlice.actions,t.add=i.add,t.clear=i.clear,t.default=t.consoleSlice.reducer},364:(e,t,a)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.add=t.toastSlice=void 0;const s=a(9829);t.toastSlice=(0,s.createSlice)({name:"toasts",initialState:[],reducers:{add:(e,t)=>[...e,t.payload],remove:(e,t)=>e.filter((e=>e.id!==t.payload.id))}}),i=t.toastSlice.actions,t.add=i.add,t.remove=i.remove,t.default=t.toastSlice.reducer},4259:function(e,t,a){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useSelector=t.useAppDispatch=t.store=void 0;const s=a(9829),u=a(6706),l=i(a(364)),r=i(a(7195));t.store=(0,s.configureStore)({reducer:{toasts:l.default,console:r.default},devTools:!1}),t.useAppDispatch=()=>(0,u.useDispatch)(),t.useSelector=u.useSelector},1495:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=a(7195),s=a(158);t.default=class{static runConsole(e){e((0,i.add)({id:(0,s.uid)(),data:[["green","kyzintra@Ubuntu20.04.4 "],["purple","kyzintra@Ubuntu20.04.4 "],["","~"]],CreateTime:Date.now()}))}static log(e,t,a){e((0,i.add)({id:(0,s.uid)(),data:t,prefix:a,CreateTime:Date.now()}))}static clear(e){e((0,i.clear)())}}}},e=>{e.O(0,[816,794,931,697,612,555,774,25,105,642,655,524,609,593,623,617,216,183,162,810,979],(()=>(2629,e(e.s=2629)))),e.O()}]);