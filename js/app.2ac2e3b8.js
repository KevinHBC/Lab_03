(function(){"use strict";var e={2811:function(e,t,n){var o=n(9242),r=n(3396);const a=(0,r.Uk)("Home"),i=(0,r.Uk)(" | "),s=(0,r.Uk)("About"),u=(0,r.Uk)("| "),c=(0,r.Uk)("Task");function l(e,t){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[a])),_:1}),i,(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[s])),_:1}),u,(0,r.Wm)(n,{to:"/task"},{default:(0,r.w5)((()=>[c])),_:1})]),(0,r.Wm)(o)],64)}var d=n(89);const v={},p=(0,d.Z)(v,[["render",l]]);var f=p,h=n(2483);const w=e=>((0,r.dD)("data-v-ce9db120"),e=e(),(0,r.Cn)(),e),g=w((()=>(0,r._)("h1",null,"Events For Good",-1))),m={class:"events"};function y(e,t,n,o,a,i){const s=(0,r.up)("EventCard");return(0,r.wg)(),(0,r.iD)(r.HY,null,[g,(0,r._)("div",m,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.events,(e=>((0,r.wg)(),(0,r.j4)(s,{key:e.id,event:e},null,8,["event"])))),128))])],64)}var b=n(7139);const _={class:"event-card"};function k(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("span",null,"@"+(0,b.zw)(n.event.time)+" on "+(0,b.zw)(n.event.date),1),(0,r._)("h4",null,(0,b.zw)(n.event.title),1)])}var C={name:"EventCard",props:{event:{type:Object,required:!0}}};const O=(0,d.Z)(C,[["render",k],["__scopeId","data-v-37460c01"]]);var j=O,D=n(6265),E=n.n(D);const T=E().create({baseURL:"http://localhost:3004",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var z={getEvents(){return T.get("/events")}},F={name:"EventList",components:{EventCard:j},data(){return{events:null}},created(){z.getEvents().then((e=>{this.events=e.data})).catch((e=>{console.log(e)}))}};const H=(0,d.Z)(F,[["render",y],["__scopeId","data-v-ce9db120"]]);var x=H;const A={class:"about"},U=(0,r._)("h1",null,"This is an about page",-1),Z=[U];function L(e,t){return(0,r.wg)(),(0,r.iD)("div",A,Z)}const P={},W=(0,d.Z)(P,[["render",L]]);var Y=W;const I=e=>((0,r.dD)("data-v-a45c553a"),e=e(),(0,r.Cn)(),e),M=I((()=>(0,r._)("h1",null,"Events For Good",-1))),G={class:"events"};function J(e,t,n,o,a,i){const s=(0,r.up)("TaskF");return(0,r.wg)(),(0,r.iD)(r.HY,null,[M,(0,r._)("div",G,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.events,(e=>((0,r.wg)(),(0,r.j4)(s,{key:e.id,event:e},null,8,["event"])))),128))])],64)}const K={class:"event-card"};function q(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",K,[(0,r._)("h4",null,(0,b.zw)(n.event.category),1),(0,r._)("h4",null,(0,b.zw)(n.event.organizer),1)])}var V={name:"TaskF",props:{event:{type:Object,required:!0}}};const B=(0,d.Z)(V,[["render",q],["__scopeId","data-v-6f67cf2e"]]);var R=B,N={name:"EventListView",components:{TaskF:R},data(){return{events:[{id:5928101,category:"animal welfare",title:"Cat Adoption Day",description:"Find your new feline friend at this event.",location:"Meow Town",date:"January 28, 2022",time:"12:00",petsAllowed:!0,organizer:"Kat Laydee"},{id:4582797,category:"food",title:"Community Gardening",description:"Join us as we tend to the community edible plants.",location:"Flora City",date:"March 14, 2022",time:"10:00",petsAllowed:!0,organizer:"Fern Pollin"},{id:8419988,category:"sustainability",title:"Beach Cleanup",description:"Help pick up trash along the shore.",location:"Playa Del Carmen",date:"July 22, 2022",time:"11:00",petsAllowed:!1,organizer:"Carey Wales"}]}}};const Q=(0,d.Z)(N,[["render",J],["__scopeId","data-v-a45c553a"]]);var S=Q;const X=[{path:"/",name:"EventListView",component:x},{path:"/about",name:"about",component:Y},{path:"/task",name:"task",component:S}],$=(0,h.p7)({history:(0,h.PO)("/lab_03/"),routes:X});var ee=$,te=n(65),ne=(0,te.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(f).use(ne).use(ee).mount("#app");let oe="helxysx";console.log(oe)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunklab_03"]=self["webpackChunklab_03"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2811)}));o=n.O(o)})();
//# sourceMappingURL=app.2ac2e3b8.js.map