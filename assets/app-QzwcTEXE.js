const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Valine.min-CCpidXZ9.js","assets/rolldown-runtime-QTnfLwEv.js","assets/CustomBanner-CQjsAPTE.js","assets/runtime-core.esm-bundler-BFRqcTqv.js","assets/client-B65KAcrA.js","assets/plugin-vue_export-helper-BDNMzG2s.js","assets/Examples-D4tsw43h.js","assets/Pagation-Cw2T0ncd.js","assets/runtime-dom.esm-bundler-CRMtwxqM.js","assets/IconChat-CbkMKvAW.js","assets/IconCompass-hVGdgc1c.js","assets/IconDocument-CpCppU4K.js","assets/IconDocumentAttachment-BXxiQgcx.js","assets/IconFire-Bn2dzXjE.js","assets/IconHome-B5Tde3LA.js","assets/IconReco-DNkby423.js","assets/IconRevili-CA43ZeJ4.js","assets/IconSubVolume-XTq9tF1T.js","assets/Md5-xrqYIi1B.js","assets/lib-Cy4379CG.js","assets/demo-BTNFaB3L.js","assets/TestLayout-DT4h-Cs6.js","assets/GenericContainer-BqKUk1Gu.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./rolldown-runtime-QTnfLwEv.js";import{A as r,Ct as i,D as a,E as o,G as s,H as c,J as l,K as u,N as d,O as f,P as p,Q as m,S as h,St as g,U as _,V as v,W as y,X as b,Y as x,Z as S,a as C,b as w,c as T,f as E,g as D,h as O,j as k,k as A,l as j,m as M,nt as N,o as P,p as F,q as ee,r as I,rt as L,s as R,tt as z,v as B,w as V,wt as H,z as U}from"./runtime-core.esm-bundler-BFRqcTqv.js";import{a as te,i as ne,o as re,r as ie,s as ae,t as oe}from"./runtime-dom.esm-bundler-CRMtwxqM.js";import{A as W,B as se,C as G,D as ce,E as K,F as le,H as ue,I as de,J as fe,K as pe,L as me,M as he,N as ge,O as q,P as _e,R as ve,T as ye,V as be,W as xe,X as Se,Y as Ce,Z as we,_ as Te,a as Ee,b as De,c as Oe,d as ke,f as Ae,g as je,h as Me,i as Ne,j as Pe,k as Fe,l as Ie,m as Le,n as Re,o as ze,p as Be,q as Ve,r as He,s as Ue,u as We,v as Ge,x as Ke,y as qe,z as Je}from"./client-B65KAcrA.js";import{A as Ye,B as Xe,C as Ze,D as Qe,E as $e,F as et,H as tt,I as nt,L as rt,M as it,N as at,O as ot,P as st,R as ct,S as lt,T as ut,V as dt,_ as ft,a as pt,b as mt,c as ht,d as gt,f as _t,g as vt,h as yt,i as bt,j as xt,k as St,l as Ct,m as wt,n as Tt,o as Et,p as Dt,r as Ot,s as kt,t as At,u as jt,v as Mt,w as Nt,x as Pt,y as Ft,z as It}from"./GenericContainer-BqKUk1Gu.js";import{t as Lt}from"./plugin-vue_export-helper-BDNMzG2s.js";import{t as Rt}from"./Pagation-Cw2T0ncd.js";import{t as zt}from"./lib-Cy4379CG.js";var Bt=typeof document<`u`,Vt=/#/g,Ht=/&/g,Ut=/\//g,Wt=/=/g,Gt=/\?/g,Kt=/\+/g,qt=/%5B/g,Jt=/%5D/g,Yt=/%5E/g,Xt=/%60/g,Zt=/%7B/g,Qt=/%7C/g,$t=/%7D/g,en=/%20/g;function tn(e){return e==null?``:encodeURI(``+e).replace(Qt,`|`).replace(qt,`[`).replace(Jt,`]`)}function nn(e){return tn(e).replace(Zt,`{`).replace($t,`}`).replace(Yt,`^`)}function rn(e){return tn(e).replace(Kt,`%2B`).replace(en,`+`).replace(Vt,`%23`).replace(Ht,`%26`).replace(Xt,"`").replace(Zt,`{`).replace($t,`}`).replace(Yt,`^`)}function an(e){return rn(e).replace(Wt,`%3D`)}function on(e){return tn(e).replace(Vt,`%23`).replace(Gt,`%3F`)}function sn(e){return on(e).replace(Ut,`%2F`)}function cn(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var ln=/\/$/,un=e=>e.replace(ln,``);function dn(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=yn(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:cn(o)}}function fn(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function pn(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function mn(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&hn(t.matched[r],n.matched[i])&&gn(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function hn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function gn(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!_n(e[n],t[n]))return!1;return!0}function _n(e,t){return W(e)?vn(e,t):W(t)?vn(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function vn(e,t){return W(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function yn(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var bn={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function xn(e){if(!e)if(Bt){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),un(e)}var Sn=/^[^#]+#/;function Cn(e,t){return e.replace(Sn,`#`)+t}function wn(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Tn=()=>({left:window.scrollX,top:window.scrollY});function En(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=wn(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Dn(e,t){return(history.state?history.state.position-t:-1)+e}var On=new Map;function kn(e,t){On.set(e,t)}function An(e){let t=On.get(e);return On.delete(e),t}function jn(e){return typeof e==`string`||e&&typeof e==`object`}function Mn(e){return typeof e==`string`||typeof e==`symbol`}function Nn(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Kt,` `),i=r.indexOf(`=`),a=cn(i<0?r:r.slice(0,i)),o=i<0?null:cn(r.slice(i+1));if(a in t){let e=t[a];W(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Pn(e){let t=``;for(let n in e){let r=e[n];if(n=an(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(W(r)?r.map(e=>e&&rn(e)):[r&&rn(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Fn(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=W(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function In(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ln(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Fe(4,{from:n,to:t})):e instanceof Error?c(e):jn(e)?c(Fe(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Rn(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(ge(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Ln(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Pe(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Ln(c,n,r,o,e,i)()}))}}return a}function zn(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>hn(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>hn(e,s))||i.push(s))}return[n,r,i]}var Bn=()=>location.protocol+`//`+location.host;function Vn(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),pn(n,``)}return pn(n,e)+r+i}function Hn(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Vn(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(q({},e.state,{scroll:Tn()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Un(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Tn():null}}function Wn(e){let{history:t,location:n}=window,r={value:Vn(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Bn()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,q({},t.state,Un(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=q({},i.value,t.state,{forward:e,scroll:Tn()});a(o.current,o,!0),a(e,q({},Un(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Gn(e){e=xn(e);let t=Wn(e),n=Hn(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=q({location:``,base:e,go:r,createHref:Cn.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var Kn={type:0,value:``},qn=/[a-zA-Z0-9_]/;function Jn(e){if(!e)return[[]];if(e===`/`)return[[Kn]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:qn.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Yn=`[^/]+?`,Xn={sensitive:!1,strict:!1,start:!0,end:!0},Zn=/[.+*?^${}()[\]/\\]/g;function Qn(e,t){let n=q({},Xn,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(Zn,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Yn;if(u!==Yn){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(W(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=W(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function $n(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function er(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=$n(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(tr(r))return 1;if(tr(i))return-1}return i.length-r.length}function tr(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var nr={strict:!1,end:!0,sensitive:!1};function rr(e,t,n){let r=q(Qn(Jn(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function ir(e,t){let n=[],r=new Map;t=le(nr,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=or(e);s.aliasOf=r&&r.record;let l=le(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(or(q({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=rr(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!cr(d)&&o(e.name)),fr(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:de}function o(e){if(Mn(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=ur(e,n);n.splice(t,0,e),e.record.name&&!cr(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Fe(1,{location:e});s=i.record.name,a=q(ar(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&ar(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Fe(1,{location:e,currentLocation:t});s=i.record.name,a=q({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:lr(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function ar(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function or(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:sr(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function sr(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function cr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function lr(e){return e.reduce((e,t)=>q(e,t.meta),{})}function ur(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;er(e,t[i])<0?r=i:n=i+1}let i=dr(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function dr(e){let t=e;for(;t=t.parent;)if(fr(t)&&er(e,t)===0)return t}function fr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function pr(e){let t=w(ve),n=w(me),r=C(()=>{let n=L(e.to);return t.resolve(n)}),i=C(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(hn.bind(null,i));if(o>-1)return o;let s=vr(e[t-2]);return t>1&&vr(i)===s&&a[a.length-1].path!==s?a.findIndex(hn.bind(null,e[t-2])):o}),a=C(()=>i.value>-1&&_r(n.params,r.value.params)),o=C(()=>i.value>-1&&i.value===n.matched.length-1&&gn(n.params,r.value.params));function s(n={}){if(gr(n)){let n=t[L(e.replace)?`replace`:`push`](L(e.to)).catch(de);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:C(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function mr(e){return e.length===1?e[0]:e}var hr=O({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:pr,setup(e,{slots:t}){let n=l(pr(e)),{options:r}=w(ve),i=C(()=>({[yr(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[yr(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&mr(t.default(n));return e.custom?r:B(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function gr(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _r(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!W(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function vr(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var yr=(e,t,n)=>e??t??n,br=O({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let i=w(Je),a=C(()=>e.route||i.value),o=w(ue,0),s=C(()=>{let e=L(o),{matched:t}=a.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),c=C(()=>a.value.matched[s.value]);r(ue,C(()=>s.value+1)),r(_e,c),r(Je,a);let l=b();return U(()=>[l.value,c.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!hn(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=a.value,i=e.name,o=c.value,s=o&&o.components[i];if(!s)return xr(n.default,{Component:s,route:r});let u=o.props[i],d=B(s,q({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[i]=null)},ref:l}));return xr(n.default,{Component:d,route:r})||d}}});function xr(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Sr=br;function Cr(e){let t=ir(e.routes,e),n=e.parseQuery||Nn,r=e.stringifyQuery||Pn,i=e.history,a=In(),o=In(),s=In(),c=m(bn),l=bn;Bt&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=ce.bind(null,e=>``+e),d=ce.bind(null,sn),f=ce.bind(null,cn);function p(e,n){let r,i;return Mn(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function g(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function _(){return t.getRoutes().map(e=>e.record)}function v(e){return!!t.getRecordMatcher(e)}function y(e,a){if(a=q({},a||c.value),typeof e==`string`){let r=dn(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return q(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=q({},e,{path:dn(n,e.path,a.path).path});else{let t=q({},e.params);for(let e in t)t[e]??delete t[e];o=q({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=fn(r,q({},e,{hash:nn(l),path:s.path})),m=i.createHref(p);return q({fullPath:p,hash:l,query:r===Pn?Fn(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function b(e){return typeof e==`string`?dn(n,e,c.value.path):q({},e)}function x(e,t){if(l!==e)return Fe(8,{from:t,to:e})}function C(e){return E(e)}function w(e){return C(q(b(e),{replace:!0}))}function T(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=b(i):{path:i},i.params={}),q({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function E(e,t){let n=l=y(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=T(n,i);if(u)return E(q(b(u),{state:typeof u==`object`?q({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&mn(r,i,n)&&(f=Fe(16,{to:d,from:i}),B(i,i,!0,!1)),(f?Promise.resolve(f):k(d,i)).catch(e=>he(e)?he(e,2)?e:z(e):I(e,d,i)).then(e=>{if(e){if(he(e,2))return E(q({replace:s},b(e.to),{state:typeof e.to==`object`?q({},a,e.to.state):a,force:o}),t||d)}else e=j(d,i,!0,s,a);return A(d,i,e),e})}function D(e,t){let n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function O(e){let t=U.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function k(e,t){let n,[r,i,s]=zn(e,t);n=Rn(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Ln(r,e,t))});let c=D.bind(null,e,t);return n.push(c),ne(n).then(()=>{n=[];for(let r of a.list())n.push(Ln(r,e,t));return n.push(c),ne(n)}).then(()=>{n=Rn(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Ln(r,e,t))});return n.push(c),ne(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(W(r.beforeEnter))for(let i of r.beforeEnter)n.push(Ln(i,e,t));else n.push(Ln(r.beforeEnter,e,t));return n.push(c),ne(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Rn(s,`beforeRouteEnter`,e,t,O),n.push(c),ne(n))).then(()=>{n=[];for(let r of o.list())n.push(Ln(r,e,t));return n.push(c),ne(n)}).catch(e=>he(e,8)?e:Promise.reject(e))}function A(e,t,n){s.list().forEach(r=>O(()=>r(e,t,n)))}function j(e,t,n,r,a){let o=x(e,t);if(o)return o;let s=t===bn,l=Bt?history.state:{};n&&(r||s?i.replace(e.fullPath,q({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,B(e,t,n,s),z()}let M;function N(){M||=i.listen((e,t,n)=>{if(!te.listening)return;let r=y(e),a=T(r,te.currentRoute.value);if(a){E(q(a,{replace:!0,force:!0}),r).catch(de);return}l=r;let o=c.value;Bt&&kn(Dn(o.fullPath,n.delta),Tn()),k(r,o).catch(e=>he(e,12)?e:he(e,2)?(E(q(b(e.to),{force:!0}),r).then(e=>{he(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(de),Promise.reject()):(n.delta&&i.go(-n.delta,!1),I(e,r,o))).then(e=>{e||=j(r,o,!1),e&&(n.delta&&!he(e,8)?i.go(-n.delta,!1):n.type===`pop`&&he(e,20)&&i.go(-1,!1)),A(r,o,e)}).catch(de)})}let P=In(),F=In(),ee;function I(e,t,n){z(e);let r=F.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function R(){return ee&&c.value!==bn?Promise.resolve():new Promise((e,t)=>{P.add([e,t])})}function z(e){return ee||(ee=!e,N(),P.list().forEach(([t,n])=>e?n(e):t()),P.reset()),e}function B(t,n,r,i){let{scrollBehavior:a}=e;if(!Bt||!a)return Promise.resolve();let o=!r&&An(Dn(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return h().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&En(e)).catch(e=>t===c.value&&I(e,t,n))}let V=e=>i.go(e),H,U=new Set,te={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:v,getRoutes:_,resolve:y,options:e,push:C,replace:w,go:V,back:()=>V(-1),forward:()=>V(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:F.add,isReady:R,install(e){e.component(`RouterLink`,hr),e.component(`RouterView`,Sr),e.config.globalProperties.$router=te,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>L(c)}),Bt&&!H&&c.value===bn&&(H=!0,C(i.location).catch(e=>{}));let t={};for(let e in bn)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(ve,te),e.provide(me,S(t)),e.provide(Je,c);let n=e.unmount;U.add(e),e.unmount=function(){U.delete(e),U.size<1&&(l=bn,M&&M(),M=null,c.value=bn,H=!1,ee=!1),n()}}};function ne(e){return e.reduce((e,t)=>e.then(()=>O(t)),Promise.resolve())}return te}var wr=e=>e!==void 0,Tr=e=>Array.isArray(e),{entries:Er}=Object,{fromEntries:Dr}=Object,{values:Or}=Object,kr=(e,...t)=>{if(t.length===0)return e;let n=t.shift();return n&&Er(n).forEach(([t,r])=>{t===`__proto__`||t===`constructor`||(pe(e[t])&&pe(r)?kr(e[t],r):Tr(r)?e[t]=[...r]:pe(r)?e[t]={...r}:e[t]=n[t])}),kr(e,...t)},Ar={"/":{contributors:`贡献者`,changelog:`更新日志`,timeOn:`于`,viewChangelog:`查看所有更新日志`,latestUpdateAt:`最近更新`},"/en/":{contributors:`Contributors`,changelog:`Changelog`,timeOn:`on`,viewChangelog:`View All Changelog`,latestUpdateAt:`Last Updated`}},jr=()=>rt(Ar),Mr=({level:e=2,text:t,anchor:n})=>B(`h${e||2}`,{id:n,tabindex:`-1`},B(`a`,{href:`#${n}`,class:`header-anchor`},B(`span`,t))),Nr=(e=!0)=>{let{frontmatter:t,page:n}=Be();return C(()=>t.value.contributors===!1||!N(e)?[]:n.value.git.contributors??[])},Pr=({name:e,url:t,avatar:n})=>B(t?`a`:`span`,{href:t,target:`_blank`,rel:`noreferrer`,class:`vp-contributor`},[n?B(`img`,{src:n,alt:``,class:`vp-contributor-avatar`}):null,B(`span`,{class:`vp-contributor-name`},e)]),Fr=O({name:`GitContributors`,props:{title:String,headerLevel:{type:Number,default:2}},setup(e){let t=Nr(),n=jr();return()=>t.value.length>0?[B(Mr,{level:e.headerLevel,anchor:`doc-contributors`,text:e.title||n.value.contributors}),B(`div`,{class:`vp-contributors`},t.value.map(e=>B(Pr,e)))]:null}}),Ir=e({default:()=>Lr}),Lr={enhance:({app:e})=>{e.component(`GitContributors`,Fr)}},Rr=e({});async function zr(){let{initCopyBtn:e}=it();o(()=>{setTimeout(()=>{e()},500)})}var Br=e({default:()=>Vr}),Vr=ze({setup(){zr()}}),Hr=O({name:`Valine`,props:{options:{type:Object,default(){return{}}}},setup(e){se();let{options:n}=z(e);o(async()=>{let e=(await K(async()=>{let{default:e}=await import(`./Valine.min-CCpidXZ9.js`).then(e=>t(e.default,1));return{default:e}},__vite__mapDeps([0,1]))).default;(async()=>{let t={el:`#valine`,placeholder:`just go go`,notify:!1,verify:!1,avatar:`retro`,visitor:!0,recordIP:!1,path:window.location.pathname,...n.value};new e(t)})()})},render(){return B(`div`,{class:`reco-valine-wrapper`},B(`div`,{id:`valine`}))}});function Ur(e){return s()?(ee(e),!0):!1}function Wr(e){return typeof e==`function`?e():L(e)}var Gr=typeof window<`u`&&typeof document<`u`;typeof WorkerGlobalScope<`u`&&globalThis instanceof WorkerGlobalScope;var Kr=Object.prototype.toString,qr=e=>Kr.call(e)===`[object Object]`,Jr=()=>{};function Yr(e,t){function n(...n){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(r).catch(i)})}return n}var Xr=e=>e();function Zr(e,t={}){let n,r,i=Jr,a=e=>{clearTimeout(e),i(),i=Jr};return o=>{let s=Wr(e),c=Wr(t.maxWait);return n&&a(n),s<=0||c!==void 0&&c<=0?(r&&=(a(r),null),Promise.resolve(o())):new Promise((e,l)=>{i=t.rejectOnCancel?l:e,c&&!r&&(r=setTimeout(()=>{n&&a(n),r=null,e(o())},c)),n=setTimeout(()=>{r&&a(r),r=null,e(o())},s)})}}function Qr(e=Xr){let t=b(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:x(t),pause:n,resume:r,eventFilter:(...n)=>{t.value&&e(...n)}}}function $r(e){return e||D()}function ei(e,t=200,n={}){return Yr(Zr(t,n),e)}function ti(e,t,n={}){let{eventFilter:r=Xr,...i}=n;return U(e,Yr(r,t),i)}function ni(e,t,n={}){let{eventFilter:r,...i}=n,{eventFilter:a,pause:o,resume:s,isActive:c}=Qr(r);return{stop:ti(e,t,{...i,eventFilter:a}),pause:o,resume:s,isActive:c}}function ri(e,t=!0,n){$r()?o(e,n):t?e():h(e)}function ii(e,t){$r(t)&&a(e,t)}function ai(e,t=1e3,n={}){let{immediate:r=!0,immediateCallback:i=!1}=n,a=null,o=b(!1);function s(){a&&=(clearInterval(a),null)}function c(){o.value=!1,s()}function l(){let n=Wr(t);n<=0||(o.value=!0,i&&e(),s(),a=setInterval(e,n))}return r&&Gr&&l(),(u(t)||typeof t==`function`)&&Ur(U(t,()=>{o.value&&Gr&&l()})),Ur(c),{isActive:o,pause:c,resume:l}}function oi(e){let t=Wr(e);return t?.$el??t}var si=Gr?window:void 0,ci=Gr?window.document:void 0;Gr&&window.navigator,Gr&&window.location;function li(...e){let t,n,r,i;if(typeof e[0]==`string`||Array.isArray(e[0])?([n,r,i]=e,t=si):[t,n,r,i]=e,!t)return Jr;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);let a=[],o=()=>{a.forEach(e=>e()),a.length=0},s=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),c=U(()=>[oi(t),Wr(i)],([e,t])=>{if(o(),!e)return;let i=qr(t)?{...t}:t;a.push(...n.flatMap(t=>r.map(n=>s(e,t,n,i))))},{immediate:!0,flush:`post`}),l=()=>{c(),o()};return Ur(l),l}function ui(e,t={}){let{immediate:n=!0,fpsLimit:r=void 0,window:i=si}=t,a=b(!1),o=r?1e3/r:null,s=0,c=null;function l(t){if(!a.value||!i)return;s||=t;let n=t-s;if(o&&n<o){c=i.requestAnimationFrame(l);return}s=t,e({delta:n,timestamp:t}),c=i.requestAnimationFrame(l)}function u(){!a.value&&i&&(a.value=!0,s=0,c=i.requestAnimationFrame(l))}function d(){a.value=!1,c!=null&&i&&(i.cancelAnimationFrame(c),c=null)}return n&&u(),Ur(d),{isActive:x(a),pause:d,resume:u}}var di=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},fi=`__vueuse_ssr_handlers__`,pi=mi();function mi(){return fi in di||(di[fi]=di[fi]||{}),di[fi]}function hi(e,t){return pi[e]||t}function gi(e){return e==null?`any`:e instanceof Set?`set`:e instanceof Map?`map`:e instanceof Date?`date`:typeof e==`boolean`?`boolean`:typeof e==`string`?`string`:typeof e==`object`?`object`:Number.isNaN(e)?`any`:`number`}var _i={boolean:{read:e=>e===`true`,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},vi=`vueuse-storage`;function yi(e,t,n,r={}){let{flush:i=`pre`,deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:l,window:u=si,eventFilter:d,onError:f=e=>{console.error(e)},initOnMounted:p}=r,g=(l?m:b)(typeof t==`function`?t():t);if(!n)try{n=hi(`getDefaultStorage`,()=>si?.localStorage)()}catch(e){f(e)}if(!n)return g;let _=Wr(t),v=gi(_),y=r.serializer??_i[v],{pause:x,resume:S}=ni(g,()=>w(g.value),{flush:i,deep:a,eventFilter:d});u&&o&&ri(()=>{li(u,`storage`,E),li(u,vi,D),p&&E()}),p||E();function C(t,r){u&&u.dispatchEvent(new CustomEvent(vi,{detail:{key:e,oldValue:t,newValue:r,storageArea:n}}))}function w(t){try{let r=n.getItem(e);if(t==null)C(r,null),n.removeItem(e);else{let i=y.write(t);r!==i&&(n.setItem(e,i),C(r,i))}}catch(e){f(e)}}function T(t){let r=t?t.newValue:n.getItem(e);if(r==null)return s&&_!=null&&n.setItem(e,y.write(_)),_;if(!t&&c){let e=y.read(r);return typeof c==`function`?c(e,_):v===`object`&&!Array.isArray(e)?{..._,...e}:e}else if(typeof r!=`string`)return r;else return y.read(r)}function E(t){if(!(t&&t.storageArea!==n)){if(t&&t.key==null){g.value=_;return}if(!(t&&t.key!==e)){x();try{t?.newValue!==y.write(g.value)&&(g.value=T(t))}catch(e){f(e)}finally{t?h(S):S()}}}}function D(e){E(e.detail)}return g}function bi(e={}){let{controls:t=!1,interval:n=`requestAnimationFrame`}=e,r=b(new Date),i=()=>r.value=new Date,a=n===`requestAnimationFrame`?ui(i,{immediate:!0}):ai(i,n,{immediate:!0});return t?{now:r,...a}:r}function xi(e,t=Jr,n={}){let{immediate:r=!0,manual:i=!1,type:a=`text/javascript`,async:o=!0,crossOrigin:s,referrerPolicy:c,noModule:l,defer:u,document:d=ci,attrs:f={}}=n,p=b(null),m=null,h=n=>new Promise((r,i)=>{let m=e=>(p.value=e,r(e),e);if(!d){r(!1);return}let h=!1,g=d.querySelector(`script[src="${Wr(e)}"]`);g?g.hasAttribute(`data-loaded`)&&m(g):(g=d.createElement(`script`),g.type=a,g.async=o,g.src=Wr(e),u&&(g.defer=u),s&&(g.crossOrigin=s),l&&(g.noModule=l),c&&(g.referrerPolicy=c),Object.entries(f).forEach(([e,t])=>g?.setAttribute(e,t)),h=!0),g.addEventListener(`error`,e=>i(e)),g.addEventListener(`abort`,e=>i(e)),g.addEventListener(`load`,()=>{g.setAttribute(`data-loaded`,`true`),t(g),m(g)}),h&&(g=d.head.appendChild(g)),n||m(g)}),g=(e=!0)=>(m||=h(e),m),_=()=>{if(!d)return;m=null,p.value&&=null;let t=d.querySelector(`script[src="${Wr(e)}"]`);t&&d.head.removeChild(t)};return r&&!i&&ri(g),i||ii(_),{scriptTag:p,load:g,unload:_}}var Si=0;function Ci(e,t={}){let n=b(!1),{document:r=ci,immediate:i=!0,manual:a=!1,id:o=`vueuse_styletag_${++Si}`}=t,s=b(e),c=()=>{},l=()=>{if(!r)return;let e=r.getElementById(o)||r.createElement(`style`);e.isConnected||(e.id=o,t.media&&(e.media=t.media),r.head.appendChild(e)),!n.value&&(c=U(s,t=>{e.textContent=t},{immediate:!0}),n.value=!0)},u=()=>{!r||!n.value||(c(),r.head.removeChild(r.getElementById(o)),n.value=!1)};return i&&!a&&ri(l),a||Ur(u),{id:o,css:s,unload:u,load:l,isLoaded:x(n)}}var wi=new Map;function Ti(e){var t=wi.get(e);t&&t.destroy()}function Ei(e){var t=wi.get(e);t&&t.update()}var Di=null;typeof window>`u`?((Di=function(e){return e}).destroy=function(e){return e},Di.update=function(e){return e}):((Di=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&e.nodeName===`TEXTAREA`&&!wi.has(e)){var t,n=null,r=window.getComputedStyle(e),i=(t=e.value,function(){o({testForHeightReduction:t===``||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),a=function(t){e.removeEventListener(`autosize:destroy`,a),e.removeEventListener(`autosize:update`,s),e.removeEventListener(`input`,i),window.removeEventListener(`resize`,s),Object.keys(t).forEach(function(n){return e.style[n]=t[n]}),wi.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener(`autosize:destroy`,a),e.addEventListener(`autosize:update`,s),e.addEventListener(`input`,i),window.addEventListener(`resize`,s),e.style.overflowX=`hidden`,e.style.wordWrap=`break-word`,wi.set(e,{destroy:a,update:s}),s()}function o(t){var i,a,s=t.restoreTextAlign,c=s===void 0?null:s,l=t.testForHeightReduction,u=l===void 0||l,d=r.overflowY;if(e.scrollHeight!==0&&(r.resize===`vertical`?e.style.resize=`none`:r.resize===`both`&&(e.style.resize=`horizontal`),u&&(i=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],n=e[1];t.style.scrollBehavior=`auto`,t.scrollTop=n,t.style.scrollBehavior=null})}}(e),e.style.height=``),a=r.boxSizing===`content-box`?e.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):e.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!==`none`&&a>parseFloat(r.maxHeight)?(r.overflowY===`hidden`&&(e.style.overflow=`scroll`),a=parseFloat(r.maxHeight)):r.overflowY!==`hidden`&&(e.style.overflow=`hidden`),e.style.height=a+`px`,c&&(e.style.textAlign=c),i&&i(),n!==a&&(e.dispatchEvent(new Event(`autosize:resized`,{bubbles:!0})),n=a),d!==r.overflow&&!c)){var f=r.textAlign;r.overflow===`hidden`&&(e.style.textAlign=f===`start`?`end`:`start`),o({restoreTextAlign:f,testForHeightReduction:!0})}}function s(){o({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Ti),e},Di.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Ei),e});var Oi=Di;function ki(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:``,highlight:null,hooks:null,langPrefix:`language-`,mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var Ai=ki();function ji(e){Ai=e}var Mi=/[&<>"']/,Ni=new RegExp(Mi.source,`g`),Pi=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Fi=new RegExp(Pi.source,`g`),Ii={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Li=e=>Ii[e];function Ri(e,t){if(t){if(Mi.test(e))return e.replace(Ni,Li)}else if(Pi.test(e))return e.replace(Fi,Li);return e}var zi=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Bi(e){return e.replace(zi,(e,t)=>(t=t.toLowerCase(),t===`colon`?`:`:t.charAt(0)===`#`?t.charAt(1)===`x`?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):``))}var Vi=/(^|[^\[])\^/g;function J(e,t){e=typeof e==`string`?e:e.source,t||=``;let n={replace:(t,r)=>(r=r.source||r,r=r.replace(Vi,`$1`),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}var Hi=/[^\w:]/g,Ui=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Wi(e,t,n){if(e){let e;try{e=decodeURIComponent(Bi(n)).replace(Hi,``).toLowerCase()}catch{return null}if(e.indexOf(`javascript:`)===0||e.indexOf(`vbscript:`)===0||e.indexOf(`data:`)===0)return null}t&&!Ui.test(n)&&(n=Yi(t,n));try{n=encodeURI(n).replace(/%25/g,`%`)}catch{return null}return n}var Gi={},Ki=/^[^:]+:\/*[^/]*$/,qi=/^([^:]+:)[\s\S]*$/,Ji=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Yi(e,t){Gi[` `+e]||(Ki.test(e)?Gi[` `+e]=e+`/`:Gi[` `+e]=Qi(e,`/`,!0)),e=Gi[` `+e];let n=e.indexOf(`:`)===-1;return t.substring(0,2)===`//`?n?t:e.replace(qi,`$1`)+t:t.charAt(0)===`/`?n?t:e.replace(Ji,`$1`)+t:e+t}var Xi={exec:function(){}};function Zi(e,t){let n=e.replace(/\|/g,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(/ \|/),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,`|`);return n}function Qi(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function $i(e,t){if(e.indexOf(t[1])===-1)return-1;let n=e.length,r=0,i=0;for(;i<n;i++)if(e[i]===`\\`)i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1}function ea(e){e&&e.sanitize&&!e.silent&&console.warn(`marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options`)}function ta(e,t){if(t<1)return``;let n=``;for(;t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function na(e,t,n,r){let i=t.href,a=t.title?Ri(t.title):null,o=e[1].replace(/\\([\[\]])/g,`$1`);if(e[0].charAt(0)!==`!`){r.state.inLink=!0;let e={type:`link`,raw:n,href:i,title:a,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,e}return{type:`image`,raw:n,href:i,title:a,text:Ri(o)}}function ra(e,t){let n=e.match(/^(\s+)(?:```)/);if(n===null)return t;let r=n[1];return t.split(`
`).map(e=>{let t=e.match(/^\s+/);if(t===null)return e;let[n]=t;return n.length>=r.length?e.slice(r.length):e}).join(`
`)}var ia=class{constructor(e){this.options=e||Ai}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:Qi(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=ra(e,t[3]||``);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=Qi(e,`#`);(this.options.pedantic||!t||/ $/.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,``),n=this.lexer.state.top;this.lexer.state.top=!0;let r=this.lexer.blockTokens(e);return this.lexer.state.top=n,{type:`blockquote`,raw:t[0],tokens:r,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,i,a,o,s,c,l,u,d,f,p,m=t[1].trim(),h=m.length>1,g={type:`list`,raw:``,ordered:h,start:h?+m.slice(0,-1):``,loose:!1,items:[]};m=h?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=h?m:`[*+-]`);let _=RegExp(`^( {0,3}${m})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(p=!1,!(!(t=_.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),l=t[2].split(`
`,1)[0].replace(/^\t+/,e=>` `.repeat(3*e.length)),u=e.split(`
`,1)[0],this.options.pedantic?(a=2,f=l.trimLeft()):(a=t[2].search(/[^ ]/),a=a>4?1:a,f=l.slice(a),a+=t[1].length),s=!1,!l&&/^ *$/.test(u)&&(n+=u+`
`,e=e.substring(u.length+1),p=!0),!p){let t=RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),r=RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),i=RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),o=RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,`  `)),!(i.test(u)||o.test(u)||t.test(u)||r.test(e)));){if(u.search(/[^ ]/)>=a||!u.trim())f+=`
`+u.slice(a);else{if(s||l.search(/[^ ]/)>=4||i.test(l)||o.test(l)||r.test(l))break;f+=`
`+u}!s&&!u.trim()&&(s=!0),n+=d+`
`,e=e.substring(d.length+1),l=u.slice(a)}}g.loose||(c?g.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(f),r&&(i=r[0]!==`[ ] `,f=f.replace(/^\[[ xX]\] +/,``))),g.items.push({type:`list_item`,raw:n,task:!!r,checked:i,loose:!1,text:f}),g.raw+=n}g.items[g.items.length-1].raw=n.trimRight(),g.items[g.items.length-1].text=f.trimRight(),g.raw=g.raw.trimRight();let v=g.items.length;for(o=0;o<v;o++)if(this.lexer.state.top=!1,g.items[o].tokens=this.lexer.blockTokens(g.items[o].text,[]),!g.loose){let e=g.items[o].tokens.filter(e=>e.type===`space`);g.loose=e.length>0&&e.some(e=>/\n.*\n/.test(e.raw))}if(g.loose)for(o=0;o<v;o++)g.items[o].loose=!0;return g}}html(e){let t=this.rules.block.html.exec(e);if(t){let e={type:`html`,raw:t[0],pre:!this.options.sanitizer&&(t[1]===`pre`||t[1]===`script`||t[1]===`style`),text:t[0]};if(this.options.sanitize){let n=this.options.sanitizer?this.options.sanitizer(t[0]):Ri(t[0]);e.type=`paragraph`,e.text=n,e.tokens=this.lexer.inline(n)}return e}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(/\s+/g,` `),n=t[2]?t[2].replace(/^<(.*)>$/,`$1`).replace(this.rules.inline._escapes,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(t){let e={type:`table`,header:Zi(t[1]).map(e=>({text:e})),align:t[2].replace(/^ *|\| *$/g,``).split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,``).split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let n=e.align.length,r,i,a,o;for(r=0;r<n;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]=`right`:/^ *:-+: *$/.test(e.align[r])?e.align[r]=`center`:/^ *:-+ *$/.test(e.align[r])?e.align[r]=`left`:e.align[r]=null;for(n=e.rows.length,r=0;r<n;r++)e.rows[r]=Zi(e.rows[r],e.header.length).map(e=>({text:e}));for(n=e.header.length,i=0;i<n;i++)e.header[i].tokens=this.lexer.inline(e.header[i].text);for(n=e.rows.length,i=0;i<n;i++)for(o=e.rows[i],a=0;a<o.length;a++)o[a].tokens=this.lexer.inline(o[a].text);return e}}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:Ri(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?`text`:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Ri(t[0]):t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=Qi(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=$i(t[2],`()`);if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),na(t,{href:n&&n.replace(this.rules.inline._escapes,`$1`),title:r&&r.replace(this.rules.inline._escapes,`$1`)},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g,` `);if(e=t[e.toLowerCase()],!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return na(n,e,n[0],this.lexer)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;let i=r[1]||r[2]||``;if(!i||i&&(n===``||this.rules.inline.punctuation.exec(n))){let n=r[0].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=i.length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=e.slice(0,n+r.index+(r[0].length-i.length)+a);if(Math.min(n,a)%2){let e=t.slice(1,-1);return{type:`em`,raw:t,text:e,tokens:this.lexer.inlineTokens(e)}}let c=t.slice(2,-2);return{type:`strong`,raw:t,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g,` `),n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=Ri(e,!0),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:`del`,raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){let n=this.rules.inline.autolink.exec(e);if(n){let e,r;return n[2]===`@`?(e=Ri(this.options.mangle?t(n[1]):n[1]),r=`mailto:`+e):(e=Ri(n[1]),r=e),{type:`link`,raw:n[0],text:e,href:r,tokens:[{type:`text`,raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if(n[2]===`@`)e=Ri(this.options.mangle?t(n[0]):n[0]),r=`mailto:`+e;else{let t;do t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(t!==n[0]);e=Ri(n[0]),r=n[1]===`www.`?`http://`+n[0]:n[0]}return{type:`link`,raw:n[0],text:e,href:r,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e,t){let n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Ri(n[0]):n[0]:Ri(this.options.smartypants?t(n[0]):n[0]),{type:`text`,raw:n[0],text:e}}}},Y={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))`,def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Xi,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};Y._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Y._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,Y.def=J(Y.def).replace(`label`,Y._label).replace(`title`,Y._title).getRegex(),Y.bullet=/(?:[*+-]|\d{1,9}[.)])/,Y.listItemStart=J(/^( *)(bull) */).replace(`bull`,Y.bullet).getRegex(),Y.list=J(Y.list).replace(/bull/g,Y.bullet).replace(`hr`,`\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))`).replace(`def`,`\\n+(?=`+Y.def.source+`)`).getRegex(),Y._tag=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Y._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Y.html=J(Y.html,`i`).replace(`comment`,Y._comment).replace(`tag`,Y._tag).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Y.paragraph=J(Y._paragraph).replace(`hr`,Y.hr).replace(`heading`,` {0,3}#{1,6} `).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Y._tag).getRegex(),Y.blockquote=J(Y.blockquote).replace(`paragraph`,Y.paragraph).getRegex(),Y.normal={...Y},Y.gfm={...Y.normal,table:`^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`},Y.gfm.table=J(Y.gfm.table).replace(`hr`,Y.hr).replace(`heading`,` {0,3}#{1,6} `).replace(`blockquote`,` {0,3}>`).replace(`code`,` {4}[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Y._tag).getRegex(),Y.gfm.paragraph=J(Y._paragraph).replace(`hr`,Y.hr).replace(`heading`,` {0,3}#{1,6} `).replace(`|lheading`,``).replace(`table`,Y.gfm.table).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Y._tag).getRegex(),Y.pedantic={...Y.normal,html:J(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Y._comment).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Xi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:J(Y.normal._paragraph).replace(`hr`,Y.hr).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Y.lheading).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).getRegex()};var X={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Xi,tag:`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`,link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:`reflink|nolink(?!\\()`,emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Xi,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};X._punctuation=`!"#$%&'()+\\-.,/:;<=>?@\\[\\]\`^{|}~`,X.punctuation=J(X.punctuation).replace(/punctuation/g,X._punctuation).getRegex(),X.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,X.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,X._comment=J(Y._comment).replace(`(?:-->|$)`,`-->`).getRegex(),X.emStrong.lDelim=J(X.emStrong.lDelim).replace(/punct/g,X._punctuation).getRegex(),X.emStrong.rDelimAst=J(X.emStrong.rDelimAst,`g`).replace(/punct/g,X._punctuation).getRegex(),X.emStrong.rDelimUnd=J(X.emStrong.rDelimUnd,`g`).replace(/punct/g,X._punctuation).getRegex(),X._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,X._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,X._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,X.autolink=J(X.autolink).replace(`scheme`,X._scheme).replace(`email`,X._email).getRegex(),X._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,X.tag=J(X.tag).replace(`comment`,X._comment).replace(`attribute`,X._attribute).getRegex(),X._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,X._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,X._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,X.link=J(X.link).replace(`label`,X._label).replace(`href`,X._href).replace(`title`,X._title).getRegex(),X.reflink=J(X.reflink).replace(`label`,X._label).replace(`ref`,Y._label).getRegex(),X.nolink=J(X.nolink).replace(`ref`,Y._label).getRegex(),X.reflinkSearch=J(X.reflinkSearch,`g`).replace(`reflink`,X.reflink).replace(`nolink`,X.nolink).getRegex(),X.normal={...X},X.pedantic={...X.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:J(/^!?\[(label)\]\((.*?)\)/).replace(`label`,X._label).getRegex(),reflink:J(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,X._label).getRegex()},X.gfm={...X.normal,escape:J(X.escape).replace(`])`,`~|])`).getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},X.gfm.url=J(X.gfm.url,`i`).replace(`email`,X.gfm._extended_email).getRegex(),X.breaks={...X.gfm,br:J(X.br).replace(`{2,}`,`*`).getRegex(),text:J(X.gfm.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()};function aa(e){return e.replace(/---/g,`—`).replace(/--/g,`–`).replace(/(^|[-\u2014/(\[{"\s])'/g,`$1‘`).replace(/'/g,`’`).replace(/(^|[-\u2014/(\[{\u2018\s])"/g,`$1“`).replace(/"/g,`”`).replace(/\.{3}/g,`…`)}function oa(e){let t=``,n,r,i=e.length;for(n=0;n<i;n++)r=e.charCodeAt(n),Math.random()>.5&&(r=`x`+r.toString(16)),t+=`&#`+r+`;`;return t}var sa=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ai,this.options.tokenizer=this.options.tokenizer||new ia,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:Y.normal,inline:X.normal};this.options.pedantic?(t.block=Y.pedantic,t.inline=X.pedantic):this.options.gfm&&(t.block=Y.gfm,this.options.breaks?t.inline=X.breaks:t.inline=X.gfm),this.tokenizer.rules=t}static get rules(){return{block:Y,inline:X}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){e=this.options.pedantic?e.replace(/\t/g,`    `).replace(/^ +$/gm,``):e.replace(/^( *)(\t+)/gm,(e,t,n)=>t+`    `.repeat(n.length));let n,r,i,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>(n=r.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&(r.type===`paragraph`||r.type===`text`)?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&(r.type===`paragraph`||r.type===`text`)?(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(function(e){r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){r=t[t.length-1],a&&r.type===`paragraph`?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),a=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&r.type===`text`?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,i,a=e,o,s,c;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)e.includes(o[0].slice(o[0].lastIndexOf(`[`)+1,-1))&&(a=a.slice(0,o.index)+`[`+ta(`a`,o[0].length-2)+`]`+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,o.index)+`[`+ta(`a`,o[0].length-2)+`]`+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.escapedEmSt.exec(a))!=null;)a=a.slice(0,o.index+o[0].length-2)+`++`+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(s||(c=``),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(r=>(n=r.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type===`text`&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type===`text`&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,oa)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,oa))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(function(e){r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(i,aa)){e=e.substring(n.raw.length),n.raw.slice(-1)!==`_`&&(c=n.raw.slice(-1)),s=!0,r=t[t.length-1],r&&r.type===`text`?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},ca=class{constructor(e){this.options=e||Ai}code(e,t,n){let r=(t||``).match(/\S*/)[0];if(this.options.highlight){let t=this.options.highlight(e,r);t!=null&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,``)+`
`,r?`<pre><code class="`+this.options.langPrefix+Ri(r)+`">`+(n?e:Ri(e,!0))+`</code></pre>
`:`<pre><code>`+(n?e:Ri(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,n,r){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+r.slug(n)}">${e}</h${t}>\n`:`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){let r=t?`ol`:`ul`,i=t&&n!==1?` start="`+n+`"`:``;return`<`+r+i+`>
`+e+`</`+r+`>
`}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"`+(this.options.xhtml?` /`:``)+`> `}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&=`<tbody>${t}</tbody>`,`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){let n=t.header?`th`:`td`;return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?`<br/>`:`<br>`}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=Wi(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let r=`<a href="`+e+`"`;return t&&(r+=` title="`+t+`"`),r+=`>`+n+`</a>`,r}image(e,t,n){if(e=Wi(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?`/>`:`>`,r}text(e){return e}},la=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return``+n}image(e,t,n){return``+n}br(){return``}},ua=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,``).replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,``).replace(/\s/g,`-`)}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do r++,n=e+`-`+r;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){let n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}},da=class e{constructor(e){this.options=e||Ai,this.options.renderer=this.options.renderer||new ca,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new la,this.slugger=new ua}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e,t=!0){let n=``,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=e.length;for(r=0;r<S;r++){if(f=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(x=this.options.extensions.renderers[f.type].call({parser:this},f),x!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`paragraph`,`text`].includes(f.type))){n+=x||``;continue}switch(f.type){case`space`:continue;case`hr`:n+=this.renderer.hr();continue;case`heading`:n+=this.renderer.heading(this.parseInline(f.tokens),f.depth,Bi(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue;case`code`:n+=this.renderer.code(f.text,f.lang,f.escaped);continue;case`table`:for(u=``,l=``,o=f.header.length,i=0;i<o;i++)l+=this.renderer.tablecell(this.parseInline(f.header[i].tokens),{header:!0,align:f.align[i]});for(u+=this.renderer.tablerow(l),d=``,o=f.rows.length,i=0;i<o;i++){for(c=f.rows[i],l=``,s=c.length,a=0;a<s;a++)l+=this.renderer.tablecell(this.parseInline(c[a].tokens),{header:!1,align:f.align[a]});d+=this.renderer.tablerow(l)}n+=this.renderer.table(u,d);continue;case`blockquote`:d=this.parse(f.tokens),n+=this.renderer.blockquote(d);continue;case`list`:for(p=f.ordered,m=f.start,h=f.loose,o=f.items.length,d=``,i=0;i<o;i++)_=f.items[i],v=_.checked,y=_.task,g=``,_.task&&(b=this.renderer.checkbox(v),h?_.tokens.length>0&&_.tokens[0].type===`paragraph`?(_.tokens[0].text=b+` `+_.tokens[0].text,_.tokens[0].tokens&&_.tokens[0].tokens.length>0&&_.tokens[0].tokens[0].type===`text`&&(_.tokens[0].tokens[0].text=b+` `+_.tokens[0].tokens[0].text)):_.tokens.unshift({type:`text`,text:b}):g+=b),g+=this.parse(_.tokens,h),d+=this.renderer.listitem(g,y,v);n+=this.renderer.list(d,p,m);continue;case`html`:n+=this.renderer.html(f.text);continue;case`paragraph`:n+=this.renderer.paragraph(this.parseInline(f.tokens));continue;case`text`:for(d=f.tokens?this.parseInline(f.tokens):f.text;r+1<S&&e[r+1].type===`text`;)f=e[++r],d+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);n+=t?this.renderer.paragraph(d):d;continue;default:{let e=`Token with "`+f.type+`" type was not found.`;if(this.options.silent){console.error(e);return}else throw Error(e)}}}return n}parseInline(e,t){t||=this.renderer;let n=``,r,i,a,o=e.length;for(r=0;r<o;r++){if(i=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(a=this.options.extensions.renderers[i.type].call({parser:this},i),a!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type))){n+=a||``;continue}switch(i.type){case`escape`:n+=t.text(i.text);break;case`html`:n+=t.html(i.text);break;case`link`:n+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case`image`:n+=t.image(i.href,i.title,i.text);break;case`strong`:n+=t.strong(this.parseInline(i.tokens,t));break;case`em`:n+=t.em(this.parseInline(i.tokens,t));break;case`codespan`:n+=t.codespan(i.text);break;case`br`:n+=t.br();break;case`del`:n+=t.del(this.parseInline(i.tokens,t));break;case`text`:n+=t.text(i.text);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent){console.error(e);return}else throw Error(e)}}}return n}},fa=class{constructor(e){this.options=e||Ai}static passThroughHooks=new Set([`preprocess`,`postprocess`]);preprocess(e){return e}postprocess(e){return e}};function pa(e,t,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Ri(r.message+``,!0)+`</pre>`;if(t)return Promise.resolve(e);if(n){n(null,e);return}return e}if(t)return Promise.reject(r);if(n){n(r);return}throw r}}function ma(e,t){return(n,r,i)=>{typeof r==`function`&&(i=r,r=null);let a={...r};r={...Z.defaults,...a};let o=pa(r.silent,r.async,i);if(n==null)return o(Error(`marked(): input parameter is undefined or null`));if(typeof n!=`string`)return o(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(n)+`, string expected`));if(ea(r),r.hooks&&(r.hooks.options=r),i){let a=r.highlight,s;try{r.hooks&&(n=r.hooks.preprocess(n)),s=e(n,r)}catch(e){return o(e)}let c=function(e){let n;if(!e)try{r.walkTokens&&Z.walkTokens(s,r.walkTokens),n=t(s,r),r.hooks&&(n=r.hooks.postprocess(n))}catch(t){e=t}return r.highlight=a,e?o(e):i(null,n)};if(!a||a.length<3||(delete r.highlight,!s.length))return c();let l=0;Z.walkTokens(s,function(e){e.type===`code`&&(l++,setTimeout(()=>{a(e.text,e.lang,function(t,n){if(t)return c(t);n!=null&&n!==e.text&&(e.text=n,e.escaped=!0),l--,l===0&&c()})},0))}),l===0&&c();return}if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(t=>e(t,r)).then(e=>r.walkTokens?Promise.all(Z.walkTokens(e,r.walkTokens)).then(()=>e):e).then(e=>t(e,r)).then(e=>r.hooks?r.hooks.postprocess(e):e).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));let i=e(n,r);r.walkTokens&&Z.walkTokens(i,r.walkTokens);let a=t(i,r);return r.hooks&&(a=r.hooks.postprocess(a)),a}catch(e){return o(e)}}}function Z(e,t,n){return ma(sa.lex,da.parse)(e,t,n)}Z.options=Z.setOptions=function(e){return Z.defaults={...Z.defaults,...e},ji(Z.defaults),Z},Z.getDefaults=ki,Z.defaults=Ai,Z.use=function(...e){let t=Z.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(e=>{let n={...e};if(n.async=Z.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(e.renderer){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(e.tokenizer){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);t[e.level]?t[e.level].unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=Z.defaults.renderer||new ca;for(let n in e.renderer){let r=t[n];t[n]=(...i)=>{let a=e.renderer[n].apply(t,i);return a===!1&&(a=r.apply(t,i)),a}}n.renderer=t}if(e.tokenizer){let t=Z.defaults.tokenizer||new ia;for(let n in e.tokenizer){let r=t[n];t[n]=(...i)=>{let a=e.tokenizer[n].apply(t,i);return a===!1&&(a=r.apply(t,i)),a}}n.tokenizer=t}if(e.hooks){let t=Z.defaults.hooks||new fa;for(let n in e.hooks){let r=t[n];fa.passThroughHooks.has(n)?t[n]=i=>{if(Z.defaults.async)return Promise.resolve(e.hooks[n].call(t,i)).then(e=>r.call(t,e));let a=e.hooks[n].call(t,i);return r.call(t,a)}:t[n]=(...i)=>{let a=e.hooks[n].apply(t,i);return a===!1&&(a=r.apply(t,i)),a}}n.hooks=t}if(e.walkTokens){let t=Z.defaults.walkTokens;n.walkTokens=function(n){let r=[];return r.push(e.walkTokens.call(this,n)),t&&(r=r.concat(t.call(this,n))),r}}Z.setOptions(n)})},Z.walkTokens=function(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(Z,r)),r.type){case`table`:for(let e of r.header)n=n.concat(Z.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)n=n.concat(Z.walkTokens(r.tokens,t));break;case`list`:n=n.concat(Z.walkTokens(r.items,t));break;default:Z.defaults.extensions&&Z.defaults.extensions.childTokens&&Z.defaults.extensions.childTokens[r.type]?Z.defaults.extensions.childTokens[r.type].forEach(function(e){n=n.concat(Z.walkTokens(r[e],t))}):r.tokens&&(n=n.concat(Z.walkTokens(r.tokens,t)))}return n},Z.parseInline=ma(sa.lexInline,da.parseInline),Z.Parser=da,Z.parser=da.parse,Z.Renderer=ca,Z.TextRenderer=la,Z.Lexer=sa,Z.lexer=sa.lex,Z.Tokenizer=ia,Z.Slugger=ua,Z.Hooks=fa,Z.parse=Z,Z.options,Z.setOptions,Z.use,Z.walkTokens,Z.parseInline,da.parse,sa.lex;var ha=({size:e})=>B(`svg`,{class:`wl-close-icon`,viewBox:`0 0 1024 1024`,width:e,height:e},[B(`path`,{d:`M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z`,fill:`currentColor`}),B(`path`,{d:`m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z`,fill:`#888`})]),ga=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},B(`path`,{d:`m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z`,fill:`red`})),_a=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},B(`path`,{d:`M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z`,fill:`currentColor`})),va=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},[B(`path`,{d:`M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z`,fill:`currentColor`}),B(`path`,{d:`M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z`,fill:`currentColor`})]),ya=({active:e=!1})=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},[B(`path`,{d:`M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z`+(e?``:`M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z`),fill:e?`red`:`currentColor`})]),ba=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},[B(`path`,{d:`M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0`,fill:`currentColor`}),B(`path`,{d:`M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0`,fill:`currentColor`})]),xa=()=>B(`svg`,{width:`16`,height:`16`,ariaHidden:`true`},B(`path`,{d:`M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z`,fill:`currentColor`})),Sa=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},B(`path`,{d:`M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z`,fill:`currentColor`})),Ca=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},B(`path`,{d:`M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z`,fill:`currentColor`})),wa=()=>B(`svg`,{class:`verified-icon`,viewBox:`0 0 1024 1024`,width:`14`,height:`14`},B(`path`,{d:`m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z`,fill:`#27ae60`})),Ta=({size:e=100})=>B(`svg`,{width:e,height:e,viewBox:`0 0 100 100`,preserveAspectRatio:`xMidYMid`},B(`circle`,{cx:50,cy:50,fill:`none`,stroke:`currentColor`,strokeWidth:`4`,r:`40`,"stroke-dasharray":`85 30`},B(`animateTransform`,{attributeName:`transform`,type:`rotate`,repeatCount:`indefinite`,dur:`1s`,values:`0 50 50;360 50 50`,keyTimes:`0;1`}))),Ea=()=>B(`svg`,{width:24,height:24,fill:`currentcolor`,viewBox:`0 0 24 24`},[B(`path`,{style:`transform: translateY(0.5px)`,d:`M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z`}),B(`path`,{d:`M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z`})]),Da={"Content-Type":`application/json`},Oa=(e,t=``)=>{if(typeof e==`object`&&e.errno)throw TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},ka=({serverURL:e,lang:t,path:n,type:r,action:i})=>fetch(`${e}/article?lang=${t}`,{method:`POST`,headers:Da,body:JSON.stringify({path:n,type:r,action:i})}).then((e=>e.json())),Aa=({serverURL:e,lang:t,token:n,objectId:r,comment:i})=>fetch(`${e}/comment/${r}?lang=${t}`,{method:`PUT`,headers:{...Da,Authorization:`Bearer ${n}`},body:JSON.stringify(i)}).then((e=>e.json())).then((e=>Oa(e,`Update comment`))),ja=null,Ma=()=>ja||=yi(`WALINE_LIKE`,[]),Na=null,Pa=()=>Na??=yi(`WALINE_REACTION`,{}),Fa=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},Ia={},La={},Ra={},za=Fa&&Fa.__awaiter||function(e,t,n,r){return new(n||=Promise)((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))},Ba=Fa&&Fa.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!((i=i.length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(Ra,"__esModule",{value:!0}),Ra.ReCaptchaInstance=void 0,Ra.ReCaptchaInstance=function(){function e(e,t,n){this.siteKey=e,this.recaptchaID=t,this.recaptcha=n,this.styleContainer=null}return e.prototype.execute=function(e){return za(this,void 0,void 0,(function(){return Ba(this,(function(t){return[2,this.recaptcha.enterprise?this.recaptcha.enterprise.execute(this.recaptchaID,{action:e}):this.recaptcha.execute(this.recaptchaID,{action:e})]}))}))},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){this.styleContainer===null&&(this.styleContainer=document.createElement(`style`),this.styleContainer.innerHTML=`.grecaptcha-badge{visibility:hidden !important;}`,document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){this.styleContainer!==null&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}(),Object.defineProperty(La,"__esModule",{value:!0}),La.getInstance=La.load=void 0;var Va,Ha=Ra;(function(e){e[e.NOT_LOADED=0]=`NOT_LOADED`,e[e.LOADING=1]=`LOADING`,e[e.LOADED=2]=`LOADED`})(Va||={});var Ua=function(){function e(){}return e.load=function(t,n){if(n===void 0&&(n={}),typeof document>`u`)return Promise.reject(Error(`This is a library for the browser!`));if(e.getLoadingState()===Va.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(Error(`reCAPTCHA already loaded with different site key!`));if(e.getLoadingState()===Va.LOADING)return t===e.instanceSiteKey?new Promise((function(t,n){e.successfulLoadingConsumers.push((function(e){return t(e)})),e.errorLoadingRunnable.push((function(e){return n(e)}))})):Promise.reject(Error(`reCAPTCHA already loaded with different site key!`));e.instanceSiteKey=t,e.setLoadingState(Va.LOADING);var r=new e;return new Promise((function(i,a){r.loadScript(t,n.useRecaptchaNet||!1,n.useEnterprise||!1,n.renderParameters?n.renderParameters:{},n.customUrl).then((function(){e.setLoadingState(Va.LOADED);var a=r.doExplicitRender(grecaptcha,t,n.explicitRenderParameters?n.explicitRenderParameters:{},n.useEnterprise||!1),o=new Ha.ReCaptchaInstance(t,a,grecaptcha);e.successfulLoadingConsumers.forEach((function(e){return e(o)})),e.successfulLoadingConsumers=[],n.autoHideBadge&&o.hideBadge(),e.instance=o,i(o)})).catch((function(t){e.errorLoadingRunnable.forEach((function(e){return e(t)})),e.errorLoadingRunnable=[],a(t)}))}))},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return e.loadingState===null?Va.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,n,r,i,a){var o=this;n===void 0&&(n=!1),r===void 0&&(r=!1),i===void 0&&(i={}),a===void 0&&(a=``);var s=document.createElement(`script`);s.setAttribute(`recaptcha-v3-script`,``);var c=`https://www.google.com/recaptcha/api.js`;n&&(c=r?`https://recaptcha.net/recaptcha/enterprise.js`:`https://recaptcha.net/recaptcha/api.js`),r&&(c=`https://www.google.com/recaptcha/enterprise.js`),a&&(c=a),i.render&&=void 0;var l=this.buildQueryString(i);return s.src=c+`?render=explicit`+l,new Promise((function(t,n){s.addEventListener(`load`,o.waitForScriptToLoad((function(){t(s)}),r),!1),s.onerror=function(t){e.setLoadingState(Va.NOT_LOADED),n(t)},document.head.appendChild(s)}))},e.prototype.buildQueryString=function(e){return Object.keys(e).length<1?``:`&`+Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+`=`+e[t]})).join(`&`)},e.prototype.waitForScriptToLoad=function(t,n){var r=this;return function(){window.grecaptcha===void 0?setTimeout((function(){r.waitForScriptToLoad(t,n)}),e.SCRIPT_LOAD_DELAY):n?window.grecaptcha.enterprise.ready((function(){t()})):window.grecaptcha.ready((function(){t()}))}},e.prototype.doExplicitRender=function(e,t,n,r){var i={sitekey:t,badge:n.badge,size:n.size,tabindex:n.tabindex};return n.container?r?e.enterprise.render(n.container,i):e.render(n.container,i):r?e.enterprise.render(i):e.render(i)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();La.load=Ua.load,La.getInstance=Ua.getInstance,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ReCaptchaInstance=e.getInstance=e.load=void 0;var t=La;Object.defineProperty(e,"load",{enumerable:!0,get:function(){return t.load}}),Object.defineProperty(e,"getInstance",{enumerable:!0,get:function(){return t.getInstance}});var n=Ra;Object.defineProperty(e,"ReCaptchaInstance",{enumerable:!0,get:function(){return n.ReCaptchaInstance}})}(Ia);var Wa={},Ga=null,Ka=()=>Ga??=yi(`WALINE_USER`,{}),qa={key:0,class:`wl-reaction`},Ja=[`textContent`],Ya={class:`wl-reaction-list`},Xa=[`onClick`],Za={class:`wl-reaction-img`},Qa=[`src`,`alt`],$a=[`textContent`],eo=[`textContent`],to=O({__name:`ArticleReaction`,setup(e,{expose:t}){t();let n=Pa(),r=w(`config`),i=b(-1),s=b([]),c=C((()=>r.value.locale)),l=C((()=>r.value.reaction.length>0)),u=C((()=>{let{reaction:e,path:t}=r.value;return e.map(((e,r)=>({icon:e,desc:c.value[`reaction${r}`],active:n.value[t]===r})))})),d,f=async()=>{if(l.value){let{serverURL:e,lang:t,path:n,reaction:i}=r.value,a=new AbortController;d=a.abort.bind(a);let o=await(({serverURL:e,lang:t,paths:n,type:r,signal:i})=>fetch(`${e}/article?path=${encodeURIComponent(n.join(`,`))}&type=${encodeURIComponent(r.join(`,`))}&lang=${t}`,{signal:i}).then((e=>e.json())))({serverURL:e,lang:t,paths:[n],type:i.map(((e,t)=>`reaction${t}`)),signal:a.signal});if(Array.isArray(o)||typeof o==`number`)return;s.value=i.map(((e,t)=>o[`reaction${t}`]))}};return o((()=>{U((()=>[r.value.serverURL,r.value.path]),(()=>{f()}),{immediate:!0})})),a((()=>d?.())),(e,t)=>u.value.length?(A(),j(`div`,qa,[P(`div`,{class:`wl-reaction-title`,textContent:H(c.value.reactionTitle)},null,8,Ja),P(`ul`,Ya,[(A(!0),j(I,null,k(u.value,(({active:e,icon:t,desc:a},o)=>(A(),j(`li`,{key:o,class:g([`wl-reaction-item`,{active:e}]),onClick:e=>(async e=>{if(i.value===-1){let{serverURL:t,lang:a,path:o}=r.value,c=n.value[o];i.value=e,c!==void 0&&(await ka({serverURL:t,lang:a,path:o,type:`reaction${c}`,action:`desc`}),s.value[c]=Math.max(s.value[c]-1,0)),c!==e&&(await ka({serverURL:t,lang:a,path:o,type:`reaction${e}`}),s.value[e]=(s.value[e]||0)+1),c===e?delete n.value[o]:n.value[o]=e,i.value=-1}})(o)},[P(`div`,Za,[P(`img`,{src:t,alt:a},null,8,Qa),i.value===o?(A(),R(L(Ta),{key:0,class:`wl-reaction-loading`})):(A(),j(`div`,{key:1,class:`wl-reaction-votes`,textContent:H(s.value[o]||0)},null,8,$a))]),P(`div`,{class:`wl-reaction-text`,textContent:H(a)},null,8,eo)],10,Xa)))),128))])])):T(`v-if`,!0)}}),no=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ro=no(to,[[`__file`,`ArticleReaction.vue`]]),io=[`data-index`],ao=[`src`,`title`,`onClick`],oo=no(O({__name:`ImageWall`,props:{items:{default:()=>[]},columnWidth:{default:300},gap:{default:0}},emits:[`insert`],setup(e,{expose:t}){let n=e;t();let r=null,a=b(null),s=b({}),c=b([]),l=()=>{let e=Math.floor((a.value.getBoundingClientRect().width+n.gap)/(n.columnWidth+n.gap));return e>0?e:1},u=async e=>{if(e>=n.items.length)return;await h();let t=Array.from(a.value?.children||[]).reduce(((e,t)=>t.getBoundingClientRect().height<e.getBoundingClientRect().height?t:e));c.value[Number(t.dataset.index)].push(e),await u(e+1)},d=async(e=!1)=>{if(c.value.length===l()&&!e)return;var t;c.value=(t=l(),Array(t).fill(null).map((()=>[])));let n=window.scrollY;await u(0),window.scrollTo({top:n})},f=e=>{s.value[e.target.src]=!0};return o((()=>{d(!0),r=new ResizeObserver((()=>{d()})),r.observe(a.value),U((()=>[n.items]),(()=>{s.value={},d(!0)})),U((()=>[n.columnWidth,n.gap]),(()=>{d()}))})),V((()=>r.unobserve(a.value))),(e,t)=>(A(),j(`div`,{ref_key:`wall`,ref:a,class:`wl-gallery`,style:i({gap:`${e.gap}px`})},[(A(!0),j(I,null,k(c.value,((t,n)=>(A(),j(`div`,{key:n,class:`wl-gallery-column`,"data-index":n,style:i({gap:`${e.gap}px`})},[(A(!0),j(I,null,k(t,(t=>(A(),j(I,{key:t},[s.value[e.items[t].src]?T(`v-if`,!0):(A(),R(L(Ta),{key:0,size:36,style:{margin:`20px auto`}})),P(`img`,{class:`wl-gallery-item`,src:e.items[t].src,title:e.items[t].title,loading:`lazy`,onLoad:f,onClick:n=>e.$emit(`insert`,`![](${e.items[t].src})`)},null,40,ao)],64)))),128))],12,io)))),128))],4))}}),[[`__file`,`ImageWall.vue`]]),so=e=>{try{e=decodeURI(e)}catch{}return e},co=(e=``)=>e.replace(/\/$/u,``),lo=e=>/^(https?:)?\/\//.test(e),uo=[`nick`,`mail`,`link`],fo=e=>e.filter((e=>uo.includes(e))),po=[`//unpkg.com/@waline/emojis@1.1.0/weibo`],mo=[`//unpkg.com/@waline/emojis/tieba/tieba_agree.png`,`//unpkg.com/@waline/emojis/tieba/tieba_look_down.png`,`//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png`,`//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png`,`//unpkg.com/@waline/emojis/tieba/tieba_awkward.png`,`//unpkg.com/@waline/emojis/tieba/tieba_sleep.png`],ho=e=>new Promise(((t,n)=>{if(e.size>128e3)return n(Error(`File too large! File size limit 128KB`));let r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result?.toString()||``),r.onerror=n})),go=e=>!0===e?`<p class="wl-tex">TeX is not available in preview</p>`:`<span class="wl-tex">TeX is not available in preview</span>`,_o=e=>{let t=async(t,n={})=>fetch(`https://api.giphy.com/v1/gifs/${t}?${new URLSearchParams({lang:e,limit:`20`,rating:`g`,api_key:`6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp`,...n}).toString()}`).then((e=>e.json())).then((({data:e})=>e.map((e=>({title:e.title,src:e.images.downsized_medium.url})))));return{search:e=>t(`search`,{q:e,offset:`0`}),default:()=>t(`trending`,{}),more:(e,n=0)=>t(`search`,{q:e,offset:n.toString()})}},vo=RegExp(`([\\u4E00-\\u9FFF\\u3400-\\u4dbf\\uf900-\\ufaff\\u3040-\\u309f\\uac00-\\ud7af\\u0400-\\u04FF]+|\\w+|<)|((?:(?:^|\\s)\\/\\/(.+?)$)|(?:\\/\\*([\\S\\s]*?)\\*\\/))`,`gmi`),yo=[`23AC69`,`91C132`,`F19726`,`E8552D`,`1AAB8E`,`E1147F`,`2980C1`,`1BA1E6`,`9FA0A0`,`F19726`,`E30B20`,`E30B20`,`A3338B`],bo={},xo=e=>{let t=0;return e.replace(vo,((e,n,r)=>{if(r)return`<span style="color: slategray">${r}</span>`;if(n===`<`)return`&lt;`;let i;bo[n]?i=bo[n]:(i=yo[t],bo[n]=i);let a=`<span style="color: #${i}">${n}</span>`;return t=++t%yo.length,a}))},So=`nick.nickError.mail.mailError.link.optional.placeholder.sofa.submit.like.cancelLike.reply.cancelReply.comment.refresh.more.preview.emoji.uploadImage.seconds.minutes.hours.days.now.uploading.login.logout.admin.sticky.word.wordHint.anonymous.level0.level1.level2.level3.level4.level5.gif.gifSearchPlaceholder.profile.approved.waiting.spam.unsticky.oldest.latest.hottest.reactionTitle`.split(`.`),Co=e=>Object.fromEntries(e.map(((e,t)=>[So[t],e]))),wo=Co(`NickName,NickName cannot be less than 3 bytes.,E-Mail,Please confirm your email address.,Website,Optional,Comment here...,No comment yet.,Submit,Like,Cancel like,Reply,Cancel reply,Comments,Refresh,Load More...,Preview,Emoji,Upload Image,seconds ago,minutes ago,hours ago,days ago,just now,Uploading,Login,logout,Admin,Sticky,Words,Please input comments between $0 and $1 words!
 Current word number: $2,Anonymous,Dwarves,Hobbits,Ents,Wizards,Elves,Maiar,GIF,Search GIF,Profile,Approved,Waiting,Spam,Unsticky,Oldest,Latest,Hottest,What do you think?`.split(`,`)),To=Co(`ニックネーム,3バイト以上のニックネームをご入力ください.,メールアドレス,メールアドレスをご確認ください.,サイト,オプション,ここにコメント,コメントしましょう~,提出する,Like,Cancel like,返信する,キャンセル,コメント,更新,さらに読み込む,プレビュー,絵文字,画像をアップロード,秒前,分前,時間前,日前,たっだ今,アップロード,ログインする,ログアウト,管理者,トップに置く,ワード,コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2,匿名,うえにん,なかにん,しもおし,特にしもおし,かげ,なぬし,GIF,探す GIF,個人情報,承認済み,待っている,スパム,べたつかない,逆順,正順,人気順,どう思いますか？`.split(`,`)),Eo=Co(`Apelido(Apelido não pode ser menor que 3 bytes.(E-Mail(Por favor, confirme seu endereço de e-mail.(Website(Opcional(Comente aqui...(Nenhum comentário, ainda.(Enviar(Like(Cancel like(Responder(Cancelar resposta(Comentários(Refrescar(Carregar Mais...(Visualizar(Emoji(Enviar Imagem(segundos atrás(minutos atrás(horas atrás(dias atrás(agora mesmo(Enviando(Entrar(Sair(Admin(Sticky(Palavras(Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2(Anônimo(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Pesquisar GIF(informação pessoal(Aprovado(Espera(Spam(Unsticky(Mais velho(Mais recentes(Mais quente(O que você acha?`.split(`(`)),Do=Co(`Псевдоним(Никнейм не может быть меньше 3 байт.(Эл. адрес(Пожалуйста, подтвердите адрес вашей электронной почты.(Веб-сайт(Необязательный(Комментарий здесь...(Пока нет комментариев.(Отправить(Like(Cancel like(Отвечать(Отменить ответ(Комментарии(Обновить(Загрузи больше...(Превью(эмодзи(Загрузить изображение(секунд назад(несколько минут назад(несколько часов назад(дней назад(прямо сейчас(Загрузка(Авторизоваться(Выход из системы(Админ(Липкий(Слова(Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2(Анонимный(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Поиск GIF(Персональные данные(Одобренный(Ожидающий(Спам(Нелипкий(самый старый(последний(самый горячий(Что вы думаете?`.split(`(`)),Oo=Co(`昵称,昵称不能少于3个字符,邮箱,请填写正确的邮件地址,网址,可选,欢迎评论,来发评论吧~,提交,喜欢,取消喜欢,回复,取消回复,评论,刷新,加载更多...,预览,表情,上传图片,秒前,分钟前,小时前,天前,刚刚,正在上传,登录,退出,博主,置顶,字,评论字数应在 $0 到 $1 字之间！
当前字数：$2,匿名,潜水,冒泡,吐槽,活跃,话痨,传说,表情包,搜索表情包,个人资料,通过,待审核,垃圾,取消置顶,按倒序,按正序,按热度,你认为这篇文章怎么样？`.split(`,`)),ko=Co(`暱稱,暱稱不能少於3個字元,郵箱,請填寫正確的郵件地址,網址,可選,歡迎留言,來發留言吧~,送出,喜歡,取消喜歡,回覆,取消回覆,留言,重整,載入更多...,預覽,表情,上傳圖片,秒前,分鐘前,小時前,天前,剛剛,正在上傳,登入,登出,管理者,置頂,字,留言字數應在 $0 到 $1 字之間！
目前字數：$2,匿名,潛水,冒泡,吐槽,活躍,多話,傳說,表情包,搜尋表情包,個人資料,通過,待審核,垃圾,取消置頂,最早,最新,熱門,你認為這篇文章怎麼樣？`.split(`,`)),Ao={zh:Oo,"zh-cn":Oo,"zh-CN":Oo,"zh-tw":ko,"zh-TW":ko,en:wo,"en-US":wo,"en-us":wo,jp:To,ja:To,"jp-jp":To,"jp-JP":To,"pt-br":Eo,"pt-BR":Eo,ru:Do,"ru-ru":Do,"ru-RU":Do},jo=e=>{let t=co(e);return lo(t)?t:`https://${t}`},Mo=e=>Array.isArray(e)?e:!!e&&[0,e],No=(e,t)=>typeof e==`function`?e:!1!==e&&t,Po=`{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}`,Fo=(e,t)=>{let n=e.toString();for(;n.length<t;)n=`0`+n;return n},Io=(e,t,n)=>{if(!e)return``;let r=typeof e==`string`?new Date(e.indexOf(` `)===-1?e:e.replace(/-/g,`/`)):e,i=t.getTime()-r.getTime(),a=Math.floor(i/864e5);if(a===0){let e=i%864e5,t=Math.floor(e/36e5);if(t===0){let t=e%36e5,r=Math.floor(t/6e4);if(r===0){let e=t%6e4;return`${Math.round(e/1e3)} ${n.seconds}`}return`${r} ${n.minutes}`}return`${t} ${n.hours}`}return a<0?n.now:a<8?`${a} ${n.days}`:(e=>{let t=Fo(e.getDate(),2),n=Fo(e.getMonth()+1,2);return`${Fo(e.getFullYear(),2)}-${n}-${t}`})(r)},Lo=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ro=e=>{let t=yi(`WALINE_EMOJI`,{}),n=!!/@[0-9]+\.[0-9]+\.[0-9]+/.test(e);if(n){let n=t.value[e];if(n)return Promise.resolve(n)}return fetch(`${e}/info.json`).then((e=>e.json())).then((r=>{let i={folder:e,...r};return n&&(t.value[e]=i),i}))},zo=(e,t=``,n=``,r=``)=>`${t?`${t}/`:``}${n}${e}${r?`.${r}`:``}`,Bo=e=>e.type.includes(`image`),Vo=e=>{let t=Array.from(e).find(Bo);return t?t.getAsFile():null},Ho=/\$.*?\$/,Uo=/^\$(.*?)\$/,Wo=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,Go=(e=``,t={})=>e.replace(/:(.+?):/g,((e,n)=>t[n]?`<img class="wl-emoji" src="${t[n]}" alt="${n}">`:e)),Ko=(e,{emojiMap:t,highlighter:n,texRenderer:r})=>{if(Z.setOptions({highlight:n||void 0,breaks:!0,smartLists:!0,smartypants:!0}),r){let e=(e=>[{name:`blockMath`,level:`block`,tokenizer(t){let n=Wo.exec(t);if(n!==null)return{type:`html`,raw:n[0],text:e(!0,n[1])}}},{name:`inlineMath`,level:`inline`,start(e){let t=e.search(Ho);return t===-1?e.length:t},tokenizer(t){let n=Uo.exec(t);if(n!==null)return{type:`html`,raw:n[0],text:e(!1,n[1])}}}])(r);Z.use({extensions:e})}return Z.parse(Go(e,t))},qo={class:`wl-comment`},Jo={key:0,class:`wl-login-info`},Yo={class:`wl-avatar`},Xo=[`title`],Zo=[`title`],Qo=[`src`],$o=[`title`,`textContent`],es={class:`wl-panel`},ts=[`for`,`textContent`],ns=[`id`,`onUpdate:modelValue`,`name`,`type`],rs=[`placeholder`],is={class:`wl-preview`},as=P(`hr`,null,null,-1),os=[`innerHTML`],ss={class:`wl-footer`},cs={class:`wl-actions`},ls={href:`https://guides.github.com/features/mastering-markdown/`,title:`Markdown Guide`,"aria-label":`Markdown is supported`,class:`wl-action`,target:`_blank`,rel:`noopener noreferrer`},us=[`title`],ds=[`title`],fs=[`title`],ps=[`title`],ms={class:`wl-info`},hs=P(`div`,{class:`wl-captcha-container`},null,-1),gs={class:`wl-text-number`},_s={key:0},vs=[`textContent`],ys=[`textContent`],bs=[`disabled`],xs=[`placeholder`],Ss={key:1,class:`wl-loading`},Cs={key:0,class:`wl-tab-wrapper`},ws=[`title`,`onClick`],Ts=[`src`,`alt`],Es={key:0,class:`wl-tabs`},Ds=[`onClick`],Os=[`src`,`alt`,`title`],ks=[`title`],As=no(O({__name:`CommentBox`,props:{edit:{default:null},rootId:{default:``},replyId:{default:``},replyUser:{default:``}},emits:[`log`,`cancelEdit`,`cancelReply`,`submit`],setup(e,{expose:t,emit:n}){let r=e;t();let i=w(`config`),s=yi(`WALINE_COMMENT_BOX_EDITOR`,``),d=yi(`WALINE_USER_META`,{nick:``,mail:``,link:``}),f=Ka(),p=b({}),m=b(null),h=b(null),_=b(null),v=b(null),y=b(null),x=b(null),S=b(null),D=b({tabs:[],map:{}}),O=b(0),M=b(!1),N=b(!1),ee=b(!1),z=b(``),B=b(0),V=l({loading:!0,list:[]}),ie=b(0),ae=b(!1),oe=b(``),W=b(!1),se=b(!1),G=C((()=>i.value.locale)),ce=C((()=>!!f.value?.token)),K=C((()=>!1!==i.value.imageUploader)),le=e=>{let t=m.value,n=t.selectionStart,r=t.selectionEnd||0,i=t.scrollTop;s.value=t.value.substring(0,n)+e+t.value.substring(r,t.value.length),t.focus(),t.selectionStart=n+e.length,t.selectionEnd=n+e.length,t.scrollTop=i},ue=e=>{let t=e.key;(e.ctrlKey||e.metaKey)&&t===`Enter`&&he()},de=e=>{let t=`![${i.value.locale.uploading} ${e.name}]()`;return le(t),W.value=!0,Promise.resolve().then((()=>i.value.imageUploader(e))).then((n=>{s.value=s.value.replace(t,`\r\n![${e.name}](${n})`)})).catch((e=>{alert(e.message),s.value=s.value.replace(t,``)})).then((()=>{W.value=!1}))},fe=e=>{if(e.dataTransfer?.items){let t=Vo(e.dataTransfer.items);t&&K.value&&(de(t),e.preventDefault())}},pe=e=>{if(e.clipboardData){let t=Vo(e.clipboardData.items);t&&K.value&&de(t)}},me=()=>{let e=h.value;e.files&&K.value&&de(e.files[0]).then((()=>{e.value=``}))},he=async()=>{let{serverURL:e,lang:t,login:a,wordLimit:o,requiredMeta:c,recaptchaV3Key:l,turnstileKey:u}=i.value,h=await(async()=>{if(!navigator)return``;let{userAgentData:e}=navigator,t=navigator.userAgent;if(!e||e.platform!==`Windows`)return t;let{platformVersion:n}=await e.getHighEntropyValues([`platformVersion`]);return n&&parseInt(n.split(`.`)[0])>=13&&(t=t.replace(`Windows NT 10.0`,`Windows NT 11.0`)),t})(),g={comment:oe.value,nick:d.value.nick,mail:d.value.mail,link:d.value.link,url:i.value.path,ua:h};if(f.value?.token)g.nick=f.value.display_name,g.mail=f.value.email,g.link=f.value.url;else{if(a===`force`)return;if(c.indexOf(`nick`)>-1&&!g.nick)return p.value.nick?.focus(),alert(G.value.nickError);if(c.indexOf(`mail`)>-1&&!g.mail||g.mail&&(_=g.mail,!Lo.test(_)))return p.value.mail?.focus(),alert(G.value.mailError);g.nick||=G.value.anonymous}var _;if(g.comment){if(!ae.value)return alert(G.value.wordHint.replace(`$0`,o[0].toString()).replace(`$1`,o[1].toString()).replace(`$2`,B.value.toString()));g.comment=Go(g.comment,D.value.map),r.replyId&&r.rootId&&(g.pid=r.replyId,g.rid=r.rootId,g.at=r.replyUser),W.value=!0;try{l&&(g.recaptchaV3=await(e=>{let t=Wa[e]??(Wa[e]=Ia.load(e,{useRecaptchaNet:!0,autoHideBadge:!0}));return{execute:e=>t.then((t=>t.execute(e)))}})(l).execute(`social`)),u&&(g.turnstile=await(v=u,{execute:async e=>{let{load:t}=xi(`https://challenges.cloudflare.com/turnstile/v0/api.js`,void 0,{async:!1});await t();let n=window?.turnstile;return new Promise((t=>{n?.ready((()=>{n?.render(`.wl-captcha-container`,{sitekey:v,action:e,size:`compact`,callback:t})}))}))}}).execute(`social`));let i={serverURL:e,lang:t,token:f.value?.token,comment:g},a=await(r.edit?Aa({objectId:r.edit.objectId,...i}):(({serverURL:e,lang:t,token:n,comment:r})=>{let i={"Content-Type":`application/json`};return n&&(i.Authorization=`Bearer ${n}`),fetch(`${e}/comment?lang=${t}`,{method:`POST`,headers:i,body:JSON.stringify(r)}).then((e=>e.json()))})(i));if(W.value=!1,a.errmsg)return alert(a.errmsg);n(`submit`,a.data),s.value=``,z.value=``,r.replyId&&n(`cancelReply`),r.edit?.objectId&&n(`cancelEdit`)}catch(e){W.value=!1,alert(e.message)}var v}else m.value?.focus()},ge=e=>{e.preventDefault();let{lang:t,serverURL:r}=i.value;(({lang:e,serverURL:t})=>{let n=(window.innerWidth-450)/2,r=(window.innerHeight-450)/2,i=window.open(`${t}/ui/login?lng=${encodeURIComponent(e)}`,`_blank`,`width=450,height=450,left=${n},top=${r},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);return i?.postMessage({type:`TOKEN`,data:null},`*`),new Promise((e=>{let t=({data:n})=>{n&&typeof n==`object`&&n.type===`userInfo`&&n.data.token&&(i?.close(),window.removeEventListener(`message`,t),e(n.data))};window.addEventListener(`message`,t)}))})({serverURL:r,lang:t}).then((e=>{f.value=e,(e.remember?localStorage:sessionStorage).setItem(`WALINE_USER`,JSON.stringify(e)),n(`log`)}))},q=()=>{f.value={},localStorage.setItem(`WALINE_USER`,`null`),sessionStorage.setItem(`WALINE_USER`,`null`),n(`log`)},_e=e=>{e.preventDefault();let{lang:t,serverURL:n}=i.value,r=(window.innerWidth-800)/2,a=(window.innerHeight-800)/2,o=new URLSearchParams({lng:t,token:f.value.token});window.open(`${n}/ui/profile?${o.toString()}`,`_blank`,`width=800,height=800,left=${r},top=${a},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`)?.postMessage({type:`TOKEN`,data:f.value.token},`*`)},ve=e=>{_.value?.contains(e.target)||v.value?.contains(e.target)||(M.value=!1),y.value?.contains(e.target)||x.value?.contains(e.target)||(N.value=!1)},ye=async e=>{let{scrollTop:t,clientHeight:n,scrollHeight:r}=e.target,a=(n+t)/r,o=i.value.search,s=S.value?.value||``;a<.9||V.loading||se.value||(V.loading=!0,(o.more&&V.list.length?await o.more(s,V.list.length):await o.search(s)).length?V.list=[...V.list,...o.more&&V.list.length?await o.more(s,V.list.length):await o.search(s)]:se.value=!0,V.loading=!1,setTimeout((()=>{e.target.scrollTop=t}),50))},be=ei((e=>{V.list=[],se.value=!1,ye(e)}),300);U([i,B],(([e,t])=>{let{wordLimit:n}=e;n?t<n[0]&&n[0]!==0?(ie.value=n[0],ae.value=!1):t>n[1]?(ie.value=n[1],ae.value=!1):(ie.value=n[1],ae.value=!0):(ie.value=0,ae.value=!0)}),{immediate:!0});let xe=({data:e})=>{e&&e.type===`profile`&&(f.value={...f.value,...e.data},[localStorage,sessionStorage].filter((e=>e.getItem(`WALINE_USER`))).forEach((e=>e.setItem(`WALINE_USER`,JSON.stringify(f)))))};return o((()=>{document.body.addEventListener(`click`,ve),window.addEventListener(`message`,xe),r.edit?.objectId&&(s.value=r.edit.orig),U(N,(async e=>{if(!e)return;let t=i.value.search;S.value&&(S.value.value=``),V.loading=!0,V.list=t.default?await t.default():await t.search(``),V.loading=!1})),U((()=>s.value),(e=>{let{highlighter:t,texRenderer:n}=i.value;oe.value=e,z.value=Ko(e,{emojiMap:D.value.map,highlighter:t,texRenderer:n}),B.value=(e=>((e=>e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu))(e)?.reduce(((e,t)=>e+(t.trim()===``?0:t.trim().split(/\s+/u).length)),0)||0)+((e=>e.match(/[\u4E00-\u9FD5]/gu))(e)?.length||0))(e),e?Oi(m.value):Oi.destroy(m.value)}),{immediate:!0}),U((()=>i.value.emoji),(e=>{return(t=e,Promise.all(t.map((e=>typeof e==`string`?Ro(co(e)):Promise.resolve(e)))).then((e=>{let t={tabs:[],map:{}};return e.forEach((e=>{let{name:n,folder:r,icon:i,prefix:a,type:o,items:s}=e;t.tabs.push({name:n,icon:zo(i,r,a,o),items:s.map((e=>{let n=`${a||``}${e}`;return t.map[n]=zo(e,r,a,o),n}))})})),t}))).then((e=>{D.value=e}));var t}),{immediate:!0})})),a((()=>{document.body.removeEventListener(`click`,ve),window.removeEventListener(`message`,xe)})),(e,t)=>(A(),j(`div`,qo,[L(i).login!==`disable`&&ce.value&&!e.edit?.objectId?(A(),j(`div`,Jo,[P(`div`,Yo,[P(`button`,{type:`submit`,class:`wl-logout-btn`,title:G.value.logout,onClick:q},[F(L(ha),{size:14})],8,Xo),P(`a`,{href:`#`,class:`wl-login-nick`,"aria-label":`Profile`,title:G.value.profile,onClick:_e},[P(`img`,{src:L(f).avatar,alt:`avatar`},null,8,Qo)],8,Zo)]),P(`a`,{href:`#`,class:`wl-login-nick`,"aria-label":`Profile`,title:G.value.profile,onClick:_e,textContent:H(L(f).display_name)},null,8,$o)])):T(`v-if`,!0),P(`div`,es,[L(i).login!==`force`&&L(i).meta.length&&!ce.value?(A(),j(`div`,{key:0,class:g([`wl-header`,`item${L(i).meta.length}`])},[(A(!0),j(I,null,k(L(i).meta,(e=>(A(),j(`div`,{key:e,class:`wl-header-item`},[P(`label`,{for:`wl-${e}`,textContent:H(G.value[e]+(L(i).requiredMeta.includes(e)||!L(i).requiredMeta.length?``:`(${G.value.optional})`))},null,8,ts),c(P(`input`,{id:`wl-${e}`,ref_for:!0,ref:t=>{t&&(p.value[e]=t)},"onUpdate:modelValue":t=>L(d)[e]=t,class:g([`wl-input`,`wl-${e}`]),name:e,type:e===`mail`?`email`:`text`},null,10,ns),[[ne,L(d)[e]]])])))),128))],2)):T(`v-if`,!0),c(P(`textarea`,{id:`wl-edit`,ref_key:`editorRef`,ref:m,"onUpdate:modelValue":t[0]||=e=>u(s)?s.value=e:null,class:`wl-editor`,placeholder:e.replyUser?`@${e.replyUser}`:G.value.placeholder,onKeydown:ue,onDrop:fe,onPaste:pe},null,40,rs),[[te,L(s)]]),c(P(`div`,is,[as,P(`h4`,null,H(G.value.preview)+`:`,1),P(`div`,{class:`wl-content`,innerHTML:z.value},null,8,os)],512),[[re,ee.value]]),P(`div`,ss,[P(`div`,cs,[P(`a`,ls,[F(L(xa))]),c(P(`button`,{ref_key:`emojiButtonRef`,ref:_,type:`button`,class:g([`wl-action`,{active:M.value}]),title:G.value.emoji,onClick:t[1]||=e=>M.value=!M.value},[F(L(_a))],10,us),[[re,D.value.tabs.length]]),L(i).search?(A(),j(`button`,{key:0,ref_key:`gifButtonRef`,ref:y,type:`button`,class:g([`wl-action`,{active:N.value}]),title:G.value.gif,onClick:t[2]||=e=>N.value=!N.value},[F(L(Ea))],10,ds)):T(`v-if`,!0),P(`input`,{id:`wl-image-upload`,ref_key:`imageUploadRef`,ref:h,class:`upload`,type:`file`,accept:`.png,.jpg,.jpeg,.webp,.bmp,.gif`,onChange:me},null,544),K.value?(A(),j(`label`,{key:1,for:`wl-image-upload`,class:`wl-action`,title:G.value.uploadImage},[F(L(va))],8,fs)):T(`v-if`,!0),P(`button`,{type:`button`,class:g([`wl-action`,{active:ee.value}]),title:G.value.preview,onClick:t[3]||=e=>ee.value=!ee.value},[F(L(ba))],10,ps)]),P(`div`,ms,[hs,P(`div`,gs,[E(H(B.value)+` `,1),L(i).wordLimit?(A(),j(`span`,_s,[E(` \xA0/\xA0 `),P(`span`,{class:g({illegal:!ae.value}),textContent:H(ie.value)},null,10,vs)])):T(`v-if`,!0),E(` \xA0`+H(G.value.word),1)]),L(i).login===`disable`||ce.value?T(`v-if`,!0):(A(),j(`button`,{key:0,type:`button`,class:`wl-btn`,onClick:ge,textContent:H(G.value.login)},null,8,ys)),L(i).login!==`force`||ce.value?(A(),j(`button`,{key:1,type:`submit`,class:`primary wl-btn`,title:`Cmd|Ctrl + Enter`,disabled:W.value,onClick:he},[W.value?(A(),R(L(Ta),{key:0,size:16})):(A(),j(I,{key:1},[E(H(G.value.submit),1)],64))],8,bs)):T(`v-if`,!0)]),P(`div`,{ref_key:`gifPopupRef`,ref:x,class:g([`wl-gif-popup`,{display:N.value}])},[P(`input`,{ref_key:`gifSearchInputRef`,ref:S,type:`text`,placeholder:G.value.gifSearchPlaceholder,onInput:t[4]||=(...e)=>L(be)&&L(be)(...e)},null,40,xs),V.list.length?(A(),R(oo,{key:0,items:V.list,"column-width":200,gap:6,onInsert:t[5]||=e=>le(e),onScroll:ye},null,8,[`items`])):T(`v-if`,!0),V.loading?(A(),j(`div`,Ss,[F(L(Ta),{size:30})])):T(`v-if`,!0)],2),P(`div`,{ref_key:`emojiPopupRef`,ref:v,class:g([`wl-emoji-popup`,{display:M.value}])},[(A(!0),j(I,null,k(D.value.tabs,((e,t)=>(A(),j(I,{key:e.name},[t===O.value?(A(),j(`div`,Cs,[(A(!0),j(I,null,k(e.items,(e=>(A(),j(`button`,{key:e,type:`button`,title:e,onClick:t=>le(`:${e}:`)},[M.value?(A(),j(`img`,{key:0,class:`wl-emoji`,src:D.value.map[e],alt:e,loading:`lazy`,referrerPolicy:`no-referrer`},null,8,Ts)):T(`v-if`,!0)],8,ws)))),128))])):T(`v-if`,!0)],64)))),128)),D.value.tabs.length>1?(A(),j(`div`,Es,[(A(!0),j(I,null,k(D.value.tabs,((e,t)=>(A(),j(`button`,{key:e.name,type:`button`,class:g([`wl-tab`,{active:O.value===t}]),onClick:e=>O.value=t},[P(`img`,{class:`wl-emoji`,src:e.icon,alt:e.name,title:e.name,loading:`lazy`,referrerPolicy:`no-referrer`},null,8,Os)],10,Ds)))),128))])):T(`v-if`,!0)],2)])]),e.replyId||e.edit?.objectId?(A(),j(`button`,{key:1,type:`button`,class:`wl-close`,title:G.value.cancelReply,onClick:t[6]||=t=>e.$emit(e.replyId?`cancelReply`:`cancelEdit`)},[F(L(ha),{size:24})],8,ks)):T(`v-if`,!0)]))}}),[[`__file`,`CommentBox.vue`]]),js=[`id`],Ms={class:`wl-user`,"aria-hidden":`true`},Ns=[`src`],Ps={class:`wl-card`},Fs={class:`wl-head`},Is=[`href`],Ls={key:1,class:`wl-nick`},Rs=[`textContent`],zs=[`textContent`],Bs=[`textContent`],Vs=[`textContent`],Hs=[`textContent`],Us={class:`wl-comment-actions`},Ws=[`title`],Gs=[`textContent`],Ks=[`title`],qs={class:`wl-meta`,"aria-hidden":`true`},Js=[`data-value`,`textContent`],Ys=[`data-value`,`textContent`],Xs=[`data-value`,`textContent`],Zs=[`innerHTML`],Qs={key:1,class:`wl-admin-actions`},$s={class:`wl-comment-status`},ec=[`disabled`,`onClick`,`textContent`],tc={key:3,class:`wl-quote`},nc=no(O({__name:`CommentCard`,props:{comment:{},edit:{default:null},rootId:{},reply:{default:null}},emits:[`log`,`submit`,`delete`,`edit`,`like`,`status`,`sticky`,`reply`],setup(e){let t=e,n=[`approved`,`waiting`,`spam`],r=w(`config`),i=Ma(),a=bi(),o=Ka(),s=C((()=>r.value.locale)),c=C((()=>{let{link:e}=t.comment;return e?lo(e)?e:`https://${e}`:``})),l=C((()=>i.value.includes(t.comment.objectId))),u=C((()=>Io(t.comment.insertedAt,a.value,s.value))),f=C((()=>o.value.type===`administrator`)),p=C((()=>t.comment.user_id&&o.value.objectId===t.comment.user_id)),m=C((()=>t.comment.objectId===t.reply?.objectId)),h=C((()=>t.comment.objectId===t.edit?.objectId));return(e,t)=>{let r=d(`CommentCard`,!0);return A(),j(`div`,{id:e.comment.objectId,class:`wl-card-item`},[P(`div`,Ms,[e.comment.avatar?(A(),j(`img`,{key:0,src:e.comment.avatar},null,8,Ns)):T(`v-if`,!0),e.comment.type?(A(),R(L(wa),{key:1})):T(`v-if`,!0)]),P(`div`,Ps,[P(`div`,Fs,[c.value?(A(),j(`a`,{key:0,class:`wl-nick`,href:c.value,target:`_blank`,rel:`nofollow noopener noreferrer`},H(e.comment.nick),9,Is)):(A(),j(`span`,Ls,H(e.comment.nick),1)),e.comment.type===`administrator`?(A(),j(`span`,{key:2,class:`wl-badge`,textContent:H(s.value.admin)},null,8,Rs)):T(`v-if`,!0),e.comment.label?(A(),j(`span`,{key:3,class:`wl-badge`,textContent:H(e.comment.label)},null,8,zs)):T(`v-if`,!0),e.comment.sticky?(A(),j(`span`,{key:4,class:`wl-badge`,textContent:H(s.value.sticky)},null,8,Bs)):T(`v-if`,!0),e.comment.level!==void 0&&e.comment.level>=0?(A(),j(`span`,{key:5,class:g(`wl-badge level${e.comment.level}`),textContent:H(s.value[`level${e.comment.level}`]||`Level ${e.comment.level}`)},null,10,Vs)):T(`v-if`,!0),P(`span`,{class:`wl-time`,textContent:H(u.value)},null,8,Hs),P(`div`,Us,[f.value||p.value?(A(),j(`button`,{key:0,type:`button`,class:`wl-edit`,onClick:t[0]||=()=>e.$emit(`edit`,e.comment)},[F(L(Ca))])):T(`v-if`,!0),f.value||p.value?(A(),j(`button`,{key:1,type:`button`,class:`wl-delete`,onClick:t[1]||=t=>e.$emit(`delete`,e.comment)},[F(L(ga))])):T(`v-if`,!0),P(`button`,{type:`button`,class:`wl-like`,title:l.value?s.value.cancelLike:s.value.like,onClick:t[2]||=t=>e.$emit(`like`,e.comment)},[F(L(ya),{active:l.value},null,8,[`active`]),`like`in e.comment?(A(),j(`span`,{key:0,textContent:H(e.comment.like)},null,8,Gs)):T(`v-if`,!0)],8,Ws),P(`button`,{type:`button`,class:g([`wl-reply`,{active:m.value}]),title:m.value?s.value.cancelReply:s.value.reply,onClick:t[3]||=t=>e.$emit(`reply`,m.value?null:e.comment)},[F(L(Sa))],10,Ks)])]),P(`div`,qs,[e.comment.addr?(A(),j(`span`,{key:0,class:`wl-addr`,"data-value":e.comment.addr,textContent:H(e.comment.addr)},null,8,Js)):T(`v-if`,!0),e.comment.browser?(A(),j(`span`,{key:1,class:`wl-browser`,"data-value":e.comment.browser,textContent:H(e.comment.browser)},null,8,Ys)):T(`v-if`,!0),e.comment.os?(A(),j(`span`,{key:2,class:`wl-os`,"data-value":e.comment.os,textContent:H(e.comment.os)},null,8,Xs)):T(`v-if`,!0)]),h.value?T(`v-if`,!0):(A(),j(`div`,{key:0,class:`wl-content`,innerHTML:e.comment.comment},null,8,Zs)),f.value&&!h.value?(A(),j(`div`,Qs,[P(`span`,$s,[(A(),j(I,null,k(n,(t=>P(`button`,{key:t,type:`submit`,class:g(`wl-btn wl-${t}`),disabled:e.comment.status===t,onClick:n=>e.$emit(`status`,{status:t,comment:e.comment}),textContent:H(s.value[t])},null,10,ec))),64))]),f.value&&!e.comment.rid?(A(),j(`button`,{key:0,type:`submit`,class:`wl-btn wl-sticky`,onClick:t[4]||=t=>e.$emit(`sticky`,e.comment)},H(e.comment.sticky?s.value.unsticky:s.value.sticky),1)):T(`v-if`,!0)])):T(`v-if`,!0),m.value||h.value?(A(),j(`div`,{key:2,class:g({"wl-reply-wrapper":m.value,"wl-edit-wrapper":h.value})},[F(As,{edit:e.edit,"reply-id":e.reply?.objectId,"reply-user":e.comment.nick,"root-id":e.rootId,onLog:t[5]||=t=>e.$emit(`log`),onCancelReply:t[6]||=t=>e.$emit(`reply`,null),onCancelEdit:t[7]||=t=>e.$emit(`edit`,null),onSubmit:t[8]||=t=>e.$emit(`submit`,t)},null,8,[`edit`,`reply-id`,`reply-user`,`root-id`])],2)):T(`v-if`,!0),e.comment.children?(A(),j(`div`,tc,[(A(!0),j(I,null,k(e.comment.children,(n=>(A(),R(r,{key:n.objectId,comment:n,reply:e.reply,edit:e.edit,"root-id":e.rootId,onLog:t[9]||=t=>e.$emit(`log`),onDelete:t[10]||=t=>e.$emit(`delete`,t),onEdit:t[11]||=t=>e.$emit(`edit`,t),onLike:t[12]||=t=>e.$emit(`like`,t),onReply:t[13]||=t=>e.$emit(`reply`,t),onStatus:t[14]||=t=>e.$emit(`status`,t),onSticky:t[15]||=t=>e.$emit(`sticky`,t),onSubmit:t[16]||=t=>e.$emit(`submit`,t)},null,8,[`comment`,`reply`,`edit`,`root-id`])))),128))])):T(`v-if`,!0)])],8,js)}}}),[[`__file`,`CommentCard.vue`]]),rc=`2.15.8`,ic={"data-waline":``},ac={class:`wl-meta-head`},oc={class:`wl-count`},sc=[`textContent`],cc={class:`wl-sort`},lc=[`onClick`],uc={class:`wl-cards`},dc={key:1,class:`wl-operation`},fc=[`textContent`],pc={key:0,class:`wl-loading`},mc=[`textContent`],hc={key:2,class:`wl-operation`},gc=[`textContent`],_c={key:3,class:`wl-power`},vc=P(`a`,{href:`https://github.com/walinejs/waline`,target:`_blank`,rel:`noopener noreferrer`},` Waline `,-1),yc=no(O({__name:`WalineComment`,props:[`serverURL`,`path`,`meta`,`requiredMeta`,`dark`,`commentSorting`,`lang`,`locale`,`pageSize`,`wordLimit`,`emoji`,`login`,`highlighter`,`texRenderer`,`imageUploader`,`search`,`copyright`,`recaptchaV3Key`,`turnstileKey`,`reaction`],setup(e){let t=e,n={latest:`insertedAt_desc`,oldest:`insertedAt_asc`,hottest:`like_desc`},i=Object.keys(n),s=Ka(),c=Ma(),l=b(`loading`),u=b(0),d=b(1),f=b(0),p=C((()=>(({serverURL:e,path:t=location.pathname,lang:n=typeof navigator>`u`?`en-US`:navigator.language,locale:r,emoji:i=po,meta:a=[`nick`,`mail`,`link`],requiredMeta:o=[],dark:s=!1,pageSize:c=10,wordLimit:l,imageUploader:u,highlighter:d,texRenderer:f,copyright:p=!0,login:m=`enable`,search:h,reaction:g,recaptchaV3Key:_=``,turnstileKey:v=``,commentSorting:y=`latest`,...b})=>({serverURL:jo(e),path:so(t),locale:{...Ao[n]||Ao[`en-US`],...typeof r==`object`?r:{}},wordLimit:Mo(l),meta:fo(a),requiredMeta:fo(o),imageUploader:No(u,ho),highlighter:No(d,xo),texRenderer:No(f,go),lang:Object.keys(Ao).includes(n)?n:`en-US`,dark:s,emoji:typeof i==`boolean`?i?po:[]:i,pageSize:c,login:m,copyright:p,search:!1!==h&&(typeof h==`object`?h:_o(n)),recaptchaV3Key:_,turnstileKey:v,reaction:Array.isArray(g)?g:!0===g?mo:[],commentSorting:y,...b}))(t))),m=b(p.value.commentSorting),h=b([]),_=b(null),v=b(null),y=C((()=>{return typeof(e=p.value.dark)==`string`?e===`auto`?`@media(prefers-color-scheme:dark){body${Po}}`:`${e}${Po}`:!0===e?`:root${Po}`:``;var e})),x=C((()=>p.value.locale)),S;Ci(y,{id:`waline-darkmode`});let w=e=>{let{serverURL:t,path:r,pageSize:i}=p.value,a=new AbortController;l.value=`loading`,S?.(),(({serverURL:e,lang:t,path:n,page:r,pageSize:i,sortBy:a,signal:o,token:s})=>{let c={};return s&&(c.Authorization=`Bearer ${s}`),fetch(`${e}/comment?path=${encodeURIComponent(n)}&pageSize=${i}&page=${r}&lang=${t}&sortBy=${a}`,{signal:o,headers:c}).then((e=>e.json())).then((e=>Oa(e,`Get comment data`)))})({serverURL:t,lang:p.value.lang,path:r,pageSize:i,sortBy:n[m.value],page:e,signal:a.signal,token:s.value?.token}).then((t=>{l.value=`success`,u.value=t.count,h.value.push(...t.data),d.value=e,f.value=t.totalPages})).catch((e=>{e.name!==`AbortError`&&(console.error(e.message),l.value=`error`)})),S=a.abort.bind(a)},D=()=>w(d.value+1),O=()=>{u.value=0,h.value=[],w(1)},M=e=>{_.value=e},N=e=>{v.value=e},ee=e=>{if(v.value)v.value.comment=e.comment,v.value.orig=e.orig;else if(e.rid){let t=h.value.find((({objectId:t})=>t===e.rid));if(!t)return;Array.isArray(t.children)||(t.children=[]),t.children.push(e)}else h.value.unshift(e),u.value+=1},z=async({comment:e,status:t})=>{if(e.status===t)return;let{serverURL:n,lang:r}=p.value;await Aa({serverURL:n,lang:r,token:s.value?.token,objectId:e.objectId,comment:{status:t}}),e.status=t},B=async e=>{if(e.rid)return;let{serverURL:t,lang:n}=p.value;await Aa({serverURL:t,lang:n,token:s.value?.token,objectId:e.objectId,comment:{sticky:+!e.sticky}}),e.sticky=!e.sticky},V=async({objectId:e})=>{if(!confirm(`Are you sure you want to delete this comment?`))return;let{serverURL:t,lang:n}=p.value;await(({serverURL:e,lang:t,token:n,objectId:r})=>fetch(`${e}/comment/${r}?lang=${t}`,{method:`DELETE`,headers:{Authorization:`Bearer ${n}`}}).then((e=>e.json())).then((e=>Oa(e,`Delete comment`))))({serverURL:t,lang:n,token:s.value?.token,objectId:e}),h.value.some(((t,n)=>t.objectId===e?(h.value=h.value.filter(((e,t)=>t!==n)),!0):t.children.some(((r,i)=>r.objectId===e&&(h.value[n].children=t.children.filter(((e,t)=>t!==i)),!0)))))},te=async e=>{let{serverURL:t,lang:n}=p.value,{objectId:r}=e,i=c.value.includes(r);await Aa({serverURL:t,lang:n,objectId:r,token:s.value?.token,comment:{like:!i}}),i?c.value=c.value.filter((e=>e!==r)):(c.value=[...c.value,r],c.value.length>50&&(c.value=c.value.slice(-50))),e.like=(e.like||0)+(i?-1:1)};return r(`config`,p),o((()=>{U((()=>[t.serverURL,t.path]),(()=>O()),{immediate:!0})})),a((()=>S?.())),(e,t)=>(A(),j(`div`,ic,[F(ro),_.value?T(`v-if`,!0):(A(),R(As,{key:0,onLog:O,onSubmit:ee})),P(`div`,ac,[P(`div`,oc,[u.value?(A(),j(`span`,{key:0,class:`wl-num`,textContent:H(u.value)},null,8,sc)):T(`v-if`,!0),E(` `+H(x.value.comment),1)]),P(`ul`,cc,[(A(!0),j(I,null,k(L(i),(e=>(A(),j(`li`,{key:e,class:g([e===m.value?`active`:``]),onClick:t=>(e=>{m.value!==e&&(m.value=e,O())})(e)},H(x.value[e]),11,lc)))),128))])]),P(`div`,uc,[(A(!0),j(I,null,k(h.value,(e=>(A(),R(nc,{key:e.objectId,"root-id":e.objectId,comment:e,reply:_.value,edit:v.value,onLog:O,onReply:M,onEdit:N,onSubmit:ee,onStatus:z,onDelete:V,onSticky:B,onLike:te},null,8,[`root-id`,`comment`,`reply`,`edit`])))),128))]),l.value===`error`?(A(),j(`div`,dc,[P(`button`,{type:`button`,class:`wl-btn`,onClick:O,textContent:H(x.value.refresh)},null,8,fc)])):(A(),j(I,{key:2},[l.value===`loading`?(A(),j(`div`,pc,[F(L(Ta),{size:30})])):h.value.length?d.value<f.value?(A(),j(`div`,hc,[P(`button`,{type:`button`,class:`wl-btn`,onClick:D,textContent:H(x.value.more)},null,8,gc)])):T(`v-if`,!0):(A(),j(`div`,{key:1,class:`wl-empty`,textContent:H(x.value.sofa)},null,8,mc))],64)),p.value.copyright?(A(),j(`div`,_c,[E(` Powered by `),vc,E(` v`+H(L(rc)),1)])):T(`v-if`,!0)]))}}),[[`__file`,`WalineComment.vue`]]),bc=O({name:`Waline`,props:{options:{type:Object,default(){return{}}}},setup(e){let{options:t}=z(e),n=qe(),r=je(),i=C(()=>({lang:n.value||`zh-CN`,dark:`html[class="dark"]`,path:ye(r.value?.path),...t.value,pageview:!1}));return()=>B(`div`,{class:`reco-waline-wrapper`},B(yc,i.value))}}),xc=[`id`,`host`,`repo`,`repoid`,`category`,`categoryid`,`mapping`,`term`,`strict`,`reactionsenabled`,`emitmetadata`,`inputposition`,`theme`,`lang`,`loading`],Sc=O({__name:`Giscus`,props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(e){let t=b(!1);return o(()=>{t.value=!0,K(()=>import(`./giscus-aTimukGI-CuvfziGS.js`),[])}),(e,n)=>t.value?(A(),j(`giscus-widget`,{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,xc)):T(``,!0)}}),Cc=O({name:`Giscus`,props:{options:{type:Object,default(){return{}}}},setup(e){let{options:t}=z(e),n=b(`light_tritanopia`);o(async()=>{let e=function(){let e=document.documentElement.classList?.contains(`dark`);{let t=window.location.protocol+`//`+window.location.host;n.value=t+`/assets/giscus-theme${e?`-dark`:``}.css`}};new MutationObserver(e).observe(document.documentElement,{attributes:!0}),e()});let r=C(()=>({lang:`zh-CN`,host:`https://giscus.app`,theme:n.value,...t.value}));return()=>B(`div`,{class:`reco-giscus-wrapper`},B(Sc,r.value))}}),wc=O({name:`RecoComments`,components:{Valine:Hr,Waline:bc,Giscus:Cc},props:{hideComments:{type:Boolean,default:!0}},setup(e){let{solution:t,options:n}=Qe(),{hideComments:r}=z(e),i;switch(t.value){case`valine`:i=Hr;break;case`waline`:i=bc;break;case`giscus`:i=Cc;break;default:i=``;break}return()=>i?r.value?t.value===`valine`?B(i,{options:n.value,style:`display: none`}):null:B(i,{options:n.value}):null}}),Tc=O({name:`ValineViews`,props:{idVal:String,numStyle:{type:Object,default:()=>({})},flagTitle:{type:String,default:`Your Article Title`}},setup(e){let t=se(),{idVal:n,numStyle:r,flagTitle:i}=z(e);return()=>B(`span`,{id:n.value||t.path,class:`leancloud-visitors`,"data-flag-title":i.value},B(`a`,{class:`leancloud-visitors-count`,style:r.value}))}}),Ec=[`nick`,`mail`,`link`],Dc=e=>e.filter((e=>Ec.includes(e))),Oc=[`//unpkg.com/@waline/emojis@1.1.0/weibo`],kc=`en-US`,Ac=[`//unpkg.com/@waline/emojis/tieba/tieba_agree.png`,`//unpkg.com/@waline/emojis/tieba/tieba_look_down.png`,`//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png`,`//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png`,`//unpkg.com/@waline/emojis/tieba/tieba_awkward.png`,`//unpkg.com/@waline/emojis/tieba/tieba_sleep.png`],jc=e=>new Promise(((t,n)=>{if(e.size>128e3)return n(Error(`File too large! File size limit 128KB`));let r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result?.toString()||``),r.onerror=n})),Mc=e=>!0===e?`<p class="wl-tex">TeX is not available in preview</p>`:`<span class="wl-tex">TeX is not available in preview</span>`,Nc=e=>{let t=async(t,n={})=>fetch(`https://api.giphy.com/v1/gifs/${t}?${new URLSearchParams({lang:e,limit:`20`,rating:`g`,api_key:`6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp`,...n}).toString()}`).then((e=>e.json())).then((({data:e})=>e.map((e=>({title:e.title,src:e.images.downsized_medium.url})))));return{search:e=>t(`search`,{q:e,offset:`0`}),default:()=>t(`trending`,{}),more:(e,n=0)=>t(`search`,{q:e,offset:n.toString()})}},Pc=RegExp(`([\\u4E00-\\u9FFF\\u3400-\\u4dbf\\uf900-\\ufaff\\u3040-\\u309f\\uac00-\\ud7af\\u0400-\\u04FF]+|\\w+|<)|((?:(?:^|\\s)\\/\\/(.+?)$)|(?:\\/\\*([\\S\\s]*?)\\*\\/))`,`gmi`),Fc=[`23AC69`,`91C132`,`F19726`,`E8552D`,`1AAB8E`,`E1147F`,`2980C1`,`1BA1E6`,`9FA0A0`,`F19726`,`E30B20`,`E30B20`,`A3338B`],Ic={},Lc=e=>{let t=0;return e.replace(Pc,((e,n,r)=>{if(r)return`<span style="color: slategray">${r}</span>`;if(n===`<`)return`&lt;`;let i;Ic[n]?i=Ic[n]:(i=Fc[t],Ic[n]=i);let a=`<span style="color: #${i}">${n}</span>`;return t=++t%Fc.length,a}))},Rc=`nick.nickError.mail.mailError.link.optional.placeholder.sofa.submit.like.cancelLike.reply.cancelReply.comment.refresh.more.preview.emoji.uploadImage.seconds.minutes.hours.days.now.uploading.login.logout.admin.sticky.word.wordHint.anonymous.level0.level1.level2.level3.level4.level5.gif.gifSearchPlaceholder.profile.approved.waiting.spam.unsticky.oldest.latest.hottest.reactionTitle`.split(`.`),zc=e=>Object.fromEntries(e.map(((e,t)=>[Rc[t],e]))),Bc=zc(`NickName,NickName cannot be less than 3 bytes.,E-Mail,Please confirm your email address.,Website,Optional,Comment here...,No comment yet.,Submit,Like,Cancel like,Reply,Cancel reply,Comments,Refresh,Load More...,Preview,Emoji,Upload Image,seconds ago,minutes ago,hours ago,days ago,just now,Uploading,Login,logout,Admin,Sticky,Words,Please input comments between $0 and $1 words!
 Current word number: $2,Anonymous,Dwarves,Hobbits,Ents,Wizards,Elves,Maiar,GIF,Search GIF,Profile,Approved,Waiting,Spam,Unsticky,Oldest,Latest,Hottest,What do you think?`.split(`,`)),Vc=zc(`ニックネーム,3バイト以上のニックネームをご入力ください.,メールアドレス,メールアドレスをご確認ください.,サイト,オプション,ここにコメント,コメントしましょう~,提出する,Like,Cancel like,返信する,キャンセル,コメント,更新,さらに読み込む,プレビュー,絵文字,画像をアップロード,秒前,分前,時間前,日前,たっだ今,アップロード,ログインする,ログアウト,管理者,トップに置く,ワード,コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2,匿名,うえにん,なかにん,しもおし,特にしもおし,かげ,なぬし,GIF,探す GIF,個人情報,承認済み,待っている,スパム,べたつかない,逆順,正順,人気順,どう思いますか？`.split(`,`)),Hc=zc(`Apelido(Apelido não pode ser menor que 3 bytes.(E-Mail(Por favor, confirme seu endereço de e-mail.(Website(Opcional(Comente aqui...(Nenhum comentário, ainda.(Enviar(Like(Cancel like(Responder(Cancelar resposta(Comentários(Refrescar(Carregar Mais...(Visualizar(Emoji(Enviar Imagem(segundos atrás(minutos atrás(horas atrás(dias atrás(agora mesmo(Enviando(Entrar(Sair(Admin(Sticky(Palavras(Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2(Anônimo(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Pesquisar GIF(informação pessoal(Aprovado(Espera(Spam(Unsticky(Mais velho(Mais recentes(Mais quente(O que você acha?`.split(`(`)),Uc=zc(`Псевдоним(Никнейм не может быть меньше 3 байт.(Эл. адрес(Пожалуйста, подтвердите адрес вашей электронной почты.(Веб-сайт(Необязательный(Комментарий здесь...(Пока нет комментариев.(Отправить(Like(Cancel like(Отвечать(Отменить ответ(Комментарии(Обновить(Загрузи больше...(Превью(эмодзи(Загрузить изображение(секунд назад(несколько минут назад(несколько часов назад(дней назад(прямо сейчас(Загрузка(Авторизоваться(Выход из системы(Админ(Липкий(Слова(Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2(Анонимный(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Поиск GIF(Персональные данные(Одобренный(Ожидающий(Спам(Нелипкий(самый старый(последний(самый горячий(Что вы думаете?`.split(`(`)),Wc=zc(`昵称,昵称不能少于3个字符,邮箱,请填写正确的邮件地址,网址,可选,欢迎评论,来发评论吧~,提交,喜欢,取消喜欢,回复,取消回复,评论,刷新,加载更多...,预览,表情,上传图片,秒前,分钟前,小时前,天前,刚刚,正在上传,登录,退出,博主,置顶,字,评论字数应在 $0 到 $1 字之间！
当前字数：$2,匿名,潜水,冒泡,吐槽,活跃,话痨,传说,表情包,搜索表情包,个人资料,通过,待审核,垃圾,取消置顶,按倒序,按正序,按热度,你认为这篇文章怎么样？`.split(`,`)),Gc=zc(`暱稱,暱稱不能少於3個字元,郵箱,請填寫正確的郵件地址,網址,可選,歡迎留言,來發留言吧~,送出,喜歡,取消喜歡,回覆,取消回覆,留言,重整,載入更多...,預覽,表情,上傳圖片,秒前,分鐘前,小時前,天前,剛剛,正在上傳,登入,登出,管理者,置頂,字,留言字數應在 $0 到 $1 字之間！
目前字數：$2,匿名,潛水,冒泡,吐槽,活躍,多話,傳說,表情包,搜尋表情包,個人資料,通過,待審核,垃圾,取消置頂,最早,最新,熱門,你認為這篇文章怎麼樣？`.split(`,`)),Kc={zh:Wc,"zh-cn":Wc,"zh-CN":Wc,"zh-tw":Gc,"zh-TW":Gc,en:Bc,"en-US":Bc,"en-us":Bc,jp:Vc,ja:Vc,"jp-jp":Vc,"jp-JP":Vc,"pt-br":Hc,"pt-BR":Hc,ru:Uc,"ru-ru":Uc,"ru-RU":Uc},qc={"Content-Type":`application/json`},Jc=(e,t=``)=>{if(typeof e==`object`&&e.errno)throw TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},Yc=({serverURL:e,lang:t,paths:n,type:r,signal:i})=>fetch(`${e}/article?path=${encodeURIComponent(n.join(`,`))}&type=${encodeURIComponent(r.join(`,`))}&lang=${t}`,{signal:i}).then((e=>e.json())),Xc=({serverURL:e,lang:t,path:n,type:r,action:i})=>fetch(`${e}/article?lang=${t}`,{method:`POST`,headers:qc,body:JSON.stringify({path:n,type:r,action:i})}).then((e=>e.json())),Zc=({serverURL:e,lang:t,token:n,objectId:r,comment:i})=>fetch(`${e}/comment/${r}?lang=${t}`,{method:`PUT`,headers:{...qc,Authorization:`Bearer ${n}`},body:JSON.stringify(i)}).then((e=>e.json())).then((e=>Jc(e,`Update comment`))),Qc=e=>{try{e=decodeURI(e)}catch{}return e},$c=(e=``)=>e.replace(/\/$/u,``),el=e=>/^(https?:)?\/\//.test(e),tl=e=>{let t=$c(e);return el(t)?t:`https://${t}`},nl=e=>Array.isArray(e)?e:!!e&&[0,e],rl=(e,t)=>typeof e==`function`?e:!1!==e&&t,il=`{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}`,al=(e,t)=>{let n=e.toString();for(;n.length<t;)n=`0`+n;return n},ol=(e,t,n)=>{if(!e)return``;let r=typeof e==`string`?new Date(e.indexOf(` `)===-1?e:e.replace(/-/g,`/`)):e,i=t.getTime()-r.getTime(),a=Math.floor(i/864e5);if(a===0){let e=i%864e5,t=Math.floor(e/36e5);if(t===0){let t=e%36e5,r=Math.floor(t/6e4);if(r===0){let e=t%6e4;return`${Math.round(e/1e3)} ${n.seconds}`}return`${r} ${n.minutes}`}return`${t} ${n.hours}`}return a<0?n.now:a<8?`${a} ${n.days}`:(e=>{let t=al(e.getDate(),2),n=al(e.getMonth()+1,2);return`${al(e.getFullYear(),2)}-${n}-${t}`})(r)},sl=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,cl=e=>{let t=yi(`WALINE_EMOJI`,{}),n=!!/@[0-9]+\.[0-9]+\.[0-9]+/.test(e);if(n){let n=t.value[e];if(n)return Promise.resolve(n)}return fetch(`${e}/info.json`).then((e=>e.json())).then((r=>{let i={folder:e,...r};return n&&(t.value[e]=i),i}))},ll=(e,t=``,n=``,r=``)=>`${t?`${t}/`:``}${n}${e}${r?`.${r}`:``}`,ul=e=>{e.name!==`AbortError`&&console.error(e.message)},dl=e=>e.type.includes(`image`),fl=e=>{let t=Array.from(e).find(dl);return t?t.getAsFile():null},pl=/\$.*?\$/,ml=/^\$(.*?)\$/,hl=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,gl=(e=``,t={})=>e.replace(/:(.+?):/g,((e,n)=>t[n]?`<img class="wl-emoji" src="${t[n]}" alt="${n}">`:e)),_l=(e,{emojiMap:t,highlighter:n,texRenderer:r})=>{if(Z.setOptions({highlight:n||void 0,breaks:!0,smartLists:!0,smartypants:!0}),r){let e=(e=>[{name:`blockMath`,level:`block`,tokenizer(t){let n=hl.exec(t);if(n!==null)return{type:`html`,raw:n[0],text:e(!0,n[1])}}},{name:`inlineMath`,level:`inline`,start(e){let t=e.search(pl);return t===-1?e.length:t},tokenizer(t){let n=ml.exec(t);if(n!==null)return{type:`html`,raw:n[0],text:e(!1,n[1])}}}])(r);Z.use({extensions:e})}return Z.parse(gl(e,t))},vl=e=>e.dataset.path||e.getAttribute(`id`),yl=({size:e})=>B(`svg`,{class:`wl-close-icon`,viewBox:`0 0 1024 1024`,width:e,height:e},[B(`path`,{d:`M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z`,fill:`currentColor`}),B(`path`,{d:`m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z`,fill:`#888`})]),bl=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},B(`path`,{d:`m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z`,fill:`red`})),xl=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},B(`path`,{d:`M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z`,fill:`currentColor`})),Sl=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},[B(`path`,{d:`M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z`,fill:`currentColor`}),B(`path`,{d:`M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z`,fill:`currentColor`})]),Cl=({active:e=!1})=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},[B(`path`,{d:`M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z`+(e?``:`M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z`),fill:e?`red`:`currentColor`})]),wl=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},[B(`path`,{d:`M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0`,fill:`currentColor`}),B(`path`,{d:`M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0`,fill:`currentColor`})]),Tl=()=>B(`svg`,{width:`16`,height:`16`,ariaHidden:`true`},B(`path`,{d:`M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z`,fill:`currentColor`})),El=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},B(`path`,{d:`M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z`,fill:`currentColor`})),Dl=()=>B(`svg`,{viewBox:`0 0 1024 1024`,width:`24`,height:`24`},B(`path`,{d:`M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z`,fill:`currentColor`})),Ol=()=>B(`svg`,{class:`verified-icon`,viewBox:`0 0 1024 1024`,width:`14`,height:`14`},B(`path`,{d:`m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z`,fill:`#27ae60`})),kl=({size:e=100})=>B(`svg`,{width:e,height:e,viewBox:`0 0 100 100`,preserveAspectRatio:`xMidYMid`},B(`circle`,{cx:50,cy:50,fill:`none`,stroke:`currentColor`,strokeWidth:`4`,r:`40`,"stroke-dasharray":`85 30`},B(`animateTransform`,{attributeName:`transform`,type:`rotate`,repeatCount:`indefinite`,dur:`1s`,values:`0 50 50;360 50 50`,keyTimes:`0;1`}))),Al=()=>B(`svg`,{width:24,height:24,fill:`currentcolor`,viewBox:`0 0 24 24`},[B(`path`,{style:`transform: translateY(0.5px)`,d:`M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z`}),B(`path`,{d:`M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z`})]),jl=null,Ml=()=>jl||=yi(`WALINE_LIKE`,[]),Nl=null,Pl=()=>Nl??=yi(`WALINE_REACTION`,{}),Fl=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},Il={},Ll={},Rl={},zl=Fl&&Fl.__awaiter||function(e,t,n,r){return new(n||=Promise)((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((r=r.apply(e,t||[])).next())}))},Bl=Fl&&Fl.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==`function`&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw TypeError(`Generator is already executing.`);for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!((i=i.length>0&&i[i.length-1])||a[0]!==6&&a[0]!==2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(Rl,"__esModule",{value:!0}),Rl.ReCaptchaInstance=void 0,Rl.ReCaptchaInstance=function(){function e(e,t,n){this.siteKey=e,this.recaptchaID=t,this.recaptcha=n,this.styleContainer=null}return e.prototype.execute=function(e){return zl(this,void 0,void 0,(function(){return Bl(this,(function(t){return[2,this.recaptcha.enterprise?this.recaptcha.enterprise.execute(this.recaptchaID,{action:e}):this.recaptcha.execute(this.recaptchaID,{action:e})]}))}))},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){this.styleContainer===null&&(this.styleContainer=document.createElement(`style`),this.styleContainer.innerHTML=`.grecaptcha-badge{visibility:hidden !important;}`,document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){this.styleContainer!==null&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}(),Object.defineProperty(Ll,"__esModule",{value:!0}),Ll.getInstance=Ll.load=void 0;var Vl,Hl=Rl;(function(e){e[e.NOT_LOADED=0]=`NOT_LOADED`,e[e.LOADING=1]=`LOADING`,e[e.LOADED=2]=`LOADED`})(Vl||={});var Ul=function(){function e(){}return e.load=function(t,n){if(n===void 0&&(n={}),typeof document>`u`)return Promise.reject(Error(`This is a library for the browser!`));if(e.getLoadingState()===Vl.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(Error(`reCAPTCHA already loaded with different site key!`));if(e.getLoadingState()===Vl.LOADING)return t===e.instanceSiteKey?new Promise((function(t,n){e.successfulLoadingConsumers.push((function(e){return t(e)})),e.errorLoadingRunnable.push((function(e){return n(e)}))})):Promise.reject(Error(`reCAPTCHA already loaded with different site key!`));e.instanceSiteKey=t,e.setLoadingState(Vl.LOADING);var r=new e;return new Promise((function(i,a){r.loadScript(t,n.useRecaptchaNet||!1,n.useEnterprise||!1,n.renderParameters?n.renderParameters:{},n.customUrl).then((function(){e.setLoadingState(Vl.LOADED);var a=r.doExplicitRender(grecaptcha,t,n.explicitRenderParameters?n.explicitRenderParameters:{},n.useEnterprise||!1),o=new Hl.ReCaptchaInstance(t,a,grecaptcha);e.successfulLoadingConsumers.forEach((function(e){return e(o)})),e.successfulLoadingConsumers=[],n.autoHideBadge&&o.hideBadge(),e.instance=o,i(o)})).catch((function(t){e.errorLoadingRunnable.forEach((function(e){return e(t)})),e.errorLoadingRunnable=[],a(t)}))}))},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return e.loadingState===null?Vl.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,n,r,i,a){var o=this;n===void 0&&(n=!1),r===void 0&&(r=!1),i===void 0&&(i={}),a===void 0&&(a=``);var s=document.createElement(`script`);s.setAttribute(`recaptcha-v3-script`,``);var c=`https://www.google.com/recaptcha/api.js`;n&&(c=r?`https://recaptcha.net/recaptcha/enterprise.js`:`https://recaptcha.net/recaptcha/api.js`),r&&(c=`https://www.google.com/recaptcha/enterprise.js`),a&&(c=a),i.render&&=void 0;var l=this.buildQueryString(i);return s.src=c+`?render=explicit`+l,new Promise((function(t,n){s.addEventListener(`load`,o.waitForScriptToLoad((function(){t(s)}),r),!1),s.onerror=function(t){e.setLoadingState(Vl.NOT_LOADED),n(t)},document.head.appendChild(s)}))},e.prototype.buildQueryString=function(e){return Object.keys(e).length<1?``:`&`+Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+`=`+e[t]})).join(`&`)},e.prototype.waitForScriptToLoad=function(t,n){var r=this;return function(){window.grecaptcha===void 0?setTimeout((function(){r.waitForScriptToLoad(t,n)}),e.SCRIPT_LOAD_DELAY):n?window.grecaptcha.enterprise.ready((function(){t()})):window.grecaptcha.ready((function(){t()}))}},e.prototype.doExplicitRender=function(e,t,n,r){var i={sitekey:t,badge:n.badge,size:n.size,tabindex:n.tabindex};return n.container?r?e.enterprise.render(n.container,i):e.render(n.container,i):r?e.enterprise.render(i):e.render(i)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();Ll.load=Ul.load,Ll.getInstance=Ul.getInstance,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ReCaptchaInstance=e.getInstance=e.load=void 0;var t=Ll;Object.defineProperty(e,"load",{enumerable:!0,get:function(){return t.load}}),Object.defineProperty(e,"getInstance",{enumerable:!0,get:function(){return t.getInstance}});var n=Rl;Object.defineProperty(e,"ReCaptchaInstance",{enumerable:!0,get:function(){return n.ReCaptchaInstance}})}(Il);var Wl={},Gl=null,Kl=()=>Gl??=yi(`WALINE_USER`,{}),ql={key:0,class:`wl-reaction`},Jl=[`textContent`],Yl={class:`wl-reaction-list`},Xl=[`onClick`],Zl={class:`wl-reaction-img`},Ql=[`src`,`alt`],$l=[`textContent`],eu=[`textContent`],tu=O({__name:`ArticleReaction`,setup(e,{expose:t}){t();let n=Pl(),r=w(`config`),i=b(-1),s=b([]),c=C((()=>r.value.locale)),l=C((()=>r.value.reaction.length>0)),u=C((()=>{let{reaction:e,path:t}=r.value;return e.map(((e,r)=>({icon:e,desc:c.value[`reaction${r}`],active:n.value[t]===r})))})),d;return o((()=>{U((()=>[r.value.serverURL,r.value.path]),(()=>{(async()=>{if(l.value){let{serverURL:e,lang:t,path:n,reaction:i}=r.value,a=new AbortController;d=a.abort.bind(a);let o=await Yc({serverURL:e,lang:t,paths:[n],type:i.map(((e,t)=>`reaction${t}`)),signal:a.signal});if(Array.isArray(o)||typeof o==`number`)return;s.value=i.map(((e,t)=>o[`reaction${t}`]))}})()}),{immediate:!0})})),a((()=>d?.())),(e,t)=>u.value.length?(A(),j(`div`,ql,[P(`div`,{class:`wl-reaction-title`,textContent:H(c.value.reactionTitle)},null,8,Jl),P(`ul`,Yl,[(A(!0),j(I,null,k(u.value,(({active:e,icon:t,desc:a},o)=>(A(),j(`li`,{key:o,class:g([`wl-reaction-item`,{active:e}]),onClick:e=>(async e=>{if(i.value===-1){let{serverURL:t,lang:a,path:o}=r.value,c=n.value[o];i.value=e,c!==void 0&&(await Xc({serverURL:t,lang:a,path:o,type:`reaction${c}`,action:`desc`}),s.value[c]=Math.max(s.value[c]-1,0)),c!==e&&(await Xc({serverURL:t,lang:a,path:o,type:`reaction${e}`}),s.value[e]=(s.value[e]||0)+1),c===e?delete n.value[o]:n.value[o]=e,i.value=-1}})(o)},[P(`div`,Zl,[P(`img`,{src:t,alt:a},null,8,Ql),i.value===o?(A(),R(L(kl),{key:0,class:`wl-reaction-loading`})):(A(),j(`div`,{key:1,class:`wl-reaction-votes`,textContent:H(s.value[o]||0)},null,8,$l))]),P(`div`,{class:`wl-reaction-text`,textContent:H(a)},null,8,eu)],10,Xl)))),128))])])):T(`v-if`,!0)}}),nu=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ru=nu(tu,[[`__file`,`ArticleReaction.vue`]]),iu=[`data-index`],au=[`src`,`title`,`onClick`],ou=nu(O({__name:`ImageWall`,props:{items:{default:()=>[]},columnWidth:{default:300},gap:{default:0}},emits:[`insert`],setup(e,{expose:t}){let n=e;t();let r=null,a=b(null),s=b({}),c=b([]),l=()=>{let e=Math.floor((a.value.getBoundingClientRect().width+n.gap)/(n.columnWidth+n.gap));return e>0?e:1},u=async e=>{if(e>=n.items.length)return;await h();let t=Array.from(a.value?.children||[]).reduce(((e,t)=>t.getBoundingClientRect().height<e.getBoundingClientRect().height?t:e));c.value[Number(t.dataset.index)].push(e),await u(e+1)},d=async(e=!1)=>{if(c.value.length===l()&&!e)return;var t;c.value=(t=l(),Array(t).fill(null).map((()=>[])));let n=window.scrollY;await u(0),window.scrollTo({top:n})},f=e=>{s.value[e.target.src]=!0};return o((()=>{d(!0),r=new ResizeObserver((()=>{d()})),r.observe(a.value),U((()=>[n.items]),(()=>{s.value={},d(!0)})),U((()=>[n.columnWidth,n.gap]),(()=>{d()}))})),V((()=>r.unobserve(a.value))),(e,t)=>(A(),j(`div`,{ref_key:`wall`,ref:a,class:`wl-gallery`,style:i({gap:`${e.gap}px`})},[(A(!0),j(I,null,k(c.value,((t,n)=>(A(),j(`div`,{key:n,class:`wl-gallery-column`,"data-index":n,style:i({gap:`${e.gap}px`})},[(A(!0),j(I,null,k(t,(t=>(A(),j(I,{key:t},[s.value[e.items[t].src]?T(`v-if`,!0):(A(),R(L(kl),{key:0,size:36,style:{margin:`20px auto`}})),P(`img`,{class:`wl-gallery-item`,src:e.items[t].src,title:e.items[t].title,loading:`lazy`,onLoad:f,onClick:n=>e.$emit(`insert`,`![](${e.items[t].src})`)},null,40,au)],64)))),128))],12,iu)))),128))],4))}}),[[`__file`,`ImageWall.vue`]]),su={class:`wl-comment`},cu={key:0,class:`wl-login-info`},lu={class:`wl-avatar`},uu=[`title`],du=[`title`],fu=[`src`],pu=[`title`,`textContent`],mu={class:`wl-panel`},hu=[`for`,`textContent`],gu=[`id`,`onUpdate:modelValue`,`name`,`type`],_u=[`placeholder`],vu={class:`wl-preview`},yu=P(`hr`,null,null,-1),bu=[`innerHTML`],xu={class:`wl-footer`},Su={class:`wl-actions`},Cu={href:`https://guides.github.com/features/mastering-markdown/`,title:`Markdown Guide`,"aria-label":`Markdown is supported`,class:`wl-action`,target:`_blank`,rel:`noopener noreferrer`},wu=[`title`],Tu=[`title`],Eu=[`title`],Du=[`title`],Ou={class:`wl-info`},ku=P(`div`,{class:`wl-captcha-container`},null,-1),Au={class:`wl-text-number`},ju={key:0},Mu=[`textContent`],Nu=[`textContent`],Pu=[`disabled`],Fu=[`placeholder`],Iu={key:1,class:`wl-loading`},Lu={key:0,class:`wl-tab-wrapper`},Ru=[`title`,`onClick`],zu=[`src`,`alt`],Bu={key:0,class:`wl-tabs`},Vu=[`onClick`],Hu=[`src`,`alt`,`title`],Uu=[`title`],Wu=nu(O({__name:`CommentBox`,props:{edit:{default:null},rootId:{default:``},replyId:{default:``},replyUser:{default:``}},emits:[`log`,`cancelEdit`,`cancelReply`,`submit`],setup(e,{expose:t,emit:n}){let r=e;t();let i=w(`config`),s=yi(`WALINE_COMMENT_BOX_EDITOR`,``),d=yi(`WALINE_USER_META`,{nick:``,mail:``,link:``}),f=Kl(),p=b({}),m=b(null),h=b(null),_=b(null),v=b(null),y=b(null),x=b(null),S=b(null),D=b({tabs:[],map:{}}),O=b(0),M=b(!1),N=b(!1),ee=b(!1),z=b(``),B=b(0),V=l({loading:!0,list:[]}),ie=b(0),ae=b(!1),oe=b(``),W=b(!1),se=b(!1),G=C((()=>i.value.locale)),ce=C((()=>!!f.value?.token)),K=C((()=>!1!==i.value.imageUploader)),le=e=>{let t=m.value,n=t.selectionStart,r=t.selectionEnd||0,i=t.scrollTop;s.value=t.value.substring(0,n)+e+t.value.substring(r,t.value.length),t.focus(),t.selectionStart=n+e.length,t.selectionEnd=n+e.length,t.scrollTop=i},ue=e=>{let t=e.key;(e.ctrlKey||e.metaKey)&&t===`Enter`&&he()},de=e=>{let t=`![${i.value.locale.uploading} ${e.name}]()`;return le(t),W.value=!0,Promise.resolve().then((()=>i.value.imageUploader(e))).then((n=>{s.value=s.value.replace(t,`\r\n![${e.name}](${n})`)})).catch((e=>{alert(e.message),s.value=s.value.replace(t,``)})).then((()=>{W.value=!1}))},fe=e=>{if(e.dataTransfer?.items){let t=fl(e.dataTransfer.items);t&&K.value&&(de(t),e.preventDefault())}},pe=e=>{if(e.clipboardData){let t=fl(e.clipboardData.items);t&&K.value&&de(t)}},me=()=>{let e=h.value;e.files&&K.value&&de(e.files[0]).then((()=>{e.value=``}))},he=async()=>{let{serverURL:e,lang:t,login:a,wordLimit:o,requiredMeta:c,recaptchaV3Key:l,turnstileKey:u}=i.value,h=await(async()=>{if(!navigator)return``;let{userAgentData:e}=navigator,t=navigator.userAgent;if(!e||e.platform!==`Windows`)return t;let{platformVersion:n}=await e.getHighEntropyValues([`platformVersion`]);return n&&parseInt(n.split(`.`)[0])>=13&&(t=t.replace(`Windows NT 10.0`,`Windows NT 11.0`)),t})(),g={comment:oe.value,nick:d.value.nick,mail:d.value.mail,link:d.value.link,url:i.value.path,ua:h};if(f.value?.token)g.nick=f.value.display_name,g.mail=f.value.email,g.link=f.value.url;else{if(a===`force`)return;if(c.indexOf(`nick`)>-1&&!g.nick)return p.value.nick?.focus(),alert(G.value.nickError);if(c.indexOf(`mail`)>-1&&!g.mail||g.mail&&(_=g.mail,!sl.test(_)))return p.value.mail?.focus(),alert(G.value.mailError);g.nick||=G.value.anonymous}var _;if(g.comment){if(!ae.value)return alert(G.value.wordHint.replace(`$0`,o[0].toString()).replace(`$1`,o[1].toString()).replace(`$2`,B.value.toString()));g.comment=gl(g.comment,D.value.map),r.replyId&&r.rootId&&(g.pid=r.replyId,g.rid=r.rootId,g.at=r.replyUser),W.value=!0;try{l&&(g.recaptchaV3=await(e=>{let t=Wl[e]??(Wl[e]=Il.load(e,{useRecaptchaNet:!0,autoHideBadge:!0}));return{execute:e=>t.then((t=>t.execute(e)))}})(l).execute(`social`)),u&&(g.turnstile=await(v=u,{execute:async e=>{let{load:t}=xi(`https://challenges.cloudflare.com/turnstile/v0/api.js`,void 0,{async:!1});await t();let n=window?.turnstile;return new Promise((t=>{n?.ready((()=>{n?.render(`.wl-captcha-container`,{sitekey:v,action:e,size:`compact`,callback:t})}))}))}}).execute(`social`));let i={serverURL:e,lang:t,token:f.value?.token,comment:g},a=await(r.edit?Zc({objectId:r.edit.objectId,...i}):(({serverURL:e,lang:t,token:n,comment:r})=>{let i={"Content-Type":`application/json`};return n&&(i.Authorization=`Bearer ${n}`),fetch(`${e}/comment?lang=${t}`,{method:`POST`,headers:i,body:JSON.stringify(r)}).then((e=>e.json()))})(i));if(W.value=!1,a.errmsg)return alert(a.errmsg);n(`submit`,a.data),s.value=``,z.value=``,r.replyId&&n(`cancelReply`),r.edit?.objectId&&n(`cancelEdit`)}catch(e){W.value=!1,alert(e.message)}var v}else m.value?.focus()},ge=e=>{e.preventDefault();let{lang:t,serverURL:r}=i.value;(({lang:e,serverURL:t})=>{let n=(window.innerWidth-450)/2,r=(window.innerHeight-450)/2,i=window.open(`${t}/ui/login?lng=${encodeURIComponent(e)}`,`_blank`,`width=450,height=450,left=${n},top=${r},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);return i?.postMessage({type:`TOKEN`,data:null},`*`),new Promise((e=>{let t=({data:n})=>{n&&typeof n==`object`&&n.type===`userInfo`&&n.data.token&&(i?.close(),window.removeEventListener(`message`,t),e(n.data))};window.addEventListener(`message`,t)}))})({serverURL:r,lang:t}).then((e=>{f.value=e,(e.remember?localStorage:sessionStorage).setItem(`WALINE_USER`,JSON.stringify(e)),n(`log`)}))},q=()=>{f.value={},localStorage.setItem(`WALINE_USER`,`null`),sessionStorage.setItem(`WALINE_USER`,`null`),n(`log`)},_e=e=>{e.preventDefault();let{lang:t,serverURL:n}=i.value,r=(window.innerWidth-800)/2,a=(window.innerHeight-800)/2,o=new URLSearchParams({lng:t,token:f.value.token});window.open(`${n}/ui/profile?${o.toString()}`,`_blank`,`width=800,height=800,left=${r},top=${a},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`)?.postMessage({type:`TOKEN`,data:f.value.token},`*`)},ve=e=>{_.value?.contains(e.target)||v.value?.contains(e.target)||(M.value=!1),y.value?.contains(e.target)||x.value?.contains(e.target)||(N.value=!1)},ye=async e=>{let{scrollTop:t,clientHeight:n,scrollHeight:r}=e.target,a=(n+t)/r,o=i.value.search,s=S.value?.value||``;a<.9||V.loading||se.value||(V.loading=!0,(o.more&&V.list.length?await o.more(s,V.list.length):await o.search(s)).length?V.list=[...V.list,...o.more&&V.list.length?await o.more(s,V.list.length):await o.search(s)]:se.value=!0,V.loading=!1,setTimeout((()=>{e.target.scrollTop=t}),50))},be=ei((e=>{V.list=[],se.value=!1,ye(e)}),300);U([i,B],(([e,t])=>{let{wordLimit:n}=e;n?t<n[0]&&n[0]!==0?(ie.value=n[0],ae.value=!1):t>n[1]?(ie.value=n[1],ae.value=!1):(ie.value=n[1],ae.value=!0):(ie.value=0,ae.value=!0)}),{immediate:!0});let xe=({data:e})=>{e&&e.type===`profile`&&(f.value={...f.value,...e.data},[localStorage,sessionStorage].filter((e=>e.getItem(`WALINE_USER`))).forEach((e=>e.setItem(`WALINE_USER`,JSON.stringify(f)))))};return o((()=>{document.body.addEventListener(`click`,ve),window.addEventListener(`message`,xe),r.edit?.objectId&&(s.value=r.edit.orig),U(N,(async e=>{if(!e)return;let t=i.value.search;S.value&&(S.value.value=``),V.loading=!0,V.list=t.default?await t.default():await t.search(``),V.loading=!1})),U((()=>s.value),(e=>{let{highlighter:t,texRenderer:n}=i.value;oe.value=e,z.value=_l(e,{emojiMap:D.value.map,highlighter:t,texRenderer:n}),B.value=(e=>((e=>e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu))(e)?.reduce(((e,t)=>e+(t.trim()===``?0:t.trim().split(/\s+/u).length)),0)||0)+((e=>e.match(/[\u4E00-\u9FD5]/gu))(e)?.length||0))(e),e?Oi(m.value):Oi.destroy(m.value)}),{immediate:!0}),U((()=>i.value.emoji),(e=>{return(t=e,Promise.all(t.map((e=>typeof e==`string`?cl($c(e)):Promise.resolve(e)))).then((e=>{let t={tabs:[],map:{}};return e.forEach((e=>{let{name:n,folder:r,icon:i,prefix:a,type:o,items:s}=e;t.tabs.push({name:n,icon:ll(i,r,a,o),items:s.map((e=>{let n=`${a||``}${e}`;return t.map[n]=ll(e,r,a,o),n}))})})),t}))).then((e=>{D.value=e}));var t}),{immediate:!0})})),a((()=>{document.body.removeEventListener(`click`,ve),window.removeEventListener(`message`,xe)})),(e,t)=>(A(),j(`div`,su,[L(i).login!==`disable`&&ce.value&&!e.edit?.objectId?(A(),j(`div`,cu,[P(`div`,lu,[P(`button`,{type:`submit`,class:`wl-logout-btn`,title:G.value.logout,onClick:q},[F(L(yl),{size:14})],8,uu),P(`a`,{href:`#`,class:`wl-login-nick`,"aria-label":`Profile`,title:G.value.profile,onClick:_e},[P(`img`,{src:L(f).avatar,alt:`avatar`},null,8,fu)],8,du)]),P(`a`,{href:`#`,class:`wl-login-nick`,"aria-label":`Profile`,title:G.value.profile,onClick:_e,textContent:H(L(f).display_name)},null,8,pu)])):T(`v-if`,!0),P(`div`,mu,[L(i).login!==`force`&&L(i).meta.length&&!ce.value?(A(),j(`div`,{key:0,class:g([`wl-header`,`item${L(i).meta.length}`])},[(A(!0),j(I,null,k(L(i).meta,(e=>(A(),j(`div`,{key:e,class:`wl-header-item`},[P(`label`,{for:`wl-${e}`,textContent:H(G.value[e]+(L(i).requiredMeta.includes(e)||!L(i).requiredMeta.length?``:`(${G.value.optional})`))},null,8,hu),c(P(`input`,{id:`wl-${e}`,ref_for:!0,ref:t=>{t&&(p.value[e]=t)},"onUpdate:modelValue":t=>L(d)[e]=t,class:g([`wl-input`,`wl-${e}`]),name:e,type:e===`mail`?`email`:`text`},null,10,gu),[[ne,L(d)[e]]])])))),128))],2)):T(`v-if`,!0),c(P(`textarea`,{id:`wl-edit`,ref_key:`editorRef`,ref:m,"onUpdate:modelValue":t[0]||=e=>u(s)?s.value=e:null,class:`wl-editor`,placeholder:e.replyUser?`@${e.replyUser}`:G.value.placeholder,onKeydown:ue,onDrop:fe,onPaste:pe},null,40,_u),[[te,L(s)]]),c(P(`div`,vu,[yu,P(`h4`,null,H(G.value.preview)+`:`,1),P(`div`,{class:`wl-content`,innerHTML:z.value},null,8,bu)],512),[[re,ee.value]]),P(`div`,xu,[P(`div`,Su,[P(`a`,Cu,[F(L(Tl))]),c(P(`button`,{ref_key:`emojiButtonRef`,ref:_,type:`button`,class:g([`wl-action`,{active:M.value}]),title:G.value.emoji,onClick:t[1]||=e=>M.value=!M.value},[F(L(xl))],10,wu),[[re,D.value.tabs.length]]),L(i).search?(A(),j(`button`,{key:0,ref_key:`gifButtonRef`,ref:y,type:`button`,class:g([`wl-action`,{active:N.value}]),title:G.value.gif,onClick:t[2]||=e=>N.value=!N.value},[F(L(Al))],10,Tu)):T(`v-if`,!0),P(`input`,{id:`wl-image-upload`,ref_key:`imageUploadRef`,ref:h,class:`upload`,type:`file`,accept:`.png,.jpg,.jpeg,.webp,.bmp,.gif`,onChange:me},null,544),K.value?(A(),j(`label`,{key:1,for:`wl-image-upload`,class:`wl-action`,title:G.value.uploadImage},[F(L(Sl))],8,Eu)):T(`v-if`,!0),P(`button`,{type:`button`,class:g([`wl-action`,{active:ee.value}]),title:G.value.preview,onClick:t[3]||=e=>ee.value=!ee.value},[F(L(wl))],10,Du)]),P(`div`,Ou,[ku,P(`div`,Au,[E(H(B.value)+` `,1),L(i).wordLimit?(A(),j(`span`,ju,[E(` \xA0/\xA0 `),P(`span`,{class:g({illegal:!ae.value}),textContent:H(ie.value)},null,10,Mu)])):T(`v-if`,!0),E(` \xA0`+H(G.value.word),1)]),L(i).login===`disable`||ce.value?T(`v-if`,!0):(A(),j(`button`,{key:0,type:`button`,class:`wl-btn`,onClick:ge,textContent:H(G.value.login)},null,8,Nu)),L(i).login!==`force`||ce.value?(A(),j(`button`,{key:1,type:`submit`,class:`primary wl-btn`,title:`Cmd|Ctrl + Enter`,disabled:W.value,onClick:he},[W.value?(A(),R(L(kl),{key:0,size:16})):(A(),j(I,{key:1},[E(H(G.value.submit),1)],64))],8,Pu)):T(`v-if`,!0)]),P(`div`,{ref_key:`gifPopupRef`,ref:x,class:g([`wl-gif-popup`,{display:N.value}])},[P(`input`,{ref_key:`gifSearchInputRef`,ref:S,type:`text`,placeholder:G.value.gifSearchPlaceholder,onInput:t[4]||=(...e)=>L(be)&&L(be)(...e)},null,40,Fu),V.list.length?(A(),R(ou,{key:0,items:V.list,"column-width":200,gap:6,onInsert:t[5]||=e=>le(e),onScroll:ye},null,8,[`items`])):T(`v-if`,!0),V.loading?(A(),j(`div`,Iu,[F(L(kl),{size:30})])):T(`v-if`,!0)],2),P(`div`,{ref_key:`emojiPopupRef`,ref:v,class:g([`wl-emoji-popup`,{display:M.value}])},[(A(!0),j(I,null,k(D.value.tabs,((e,t)=>(A(),j(I,{key:e.name},[t===O.value?(A(),j(`div`,Lu,[(A(!0),j(I,null,k(e.items,(e=>(A(),j(`button`,{key:e,type:`button`,title:e,onClick:t=>le(`:${e}:`)},[M.value?(A(),j(`img`,{key:0,class:`wl-emoji`,src:D.value.map[e],alt:e,loading:`lazy`,referrerPolicy:`no-referrer`},null,8,zu)):T(`v-if`,!0)],8,Ru)))),128))])):T(`v-if`,!0)],64)))),128)),D.value.tabs.length>1?(A(),j(`div`,Bu,[(A(!0),j(I,null,k(D.value.tabs,((e,t)=>(A(),j(`button`,{key:e.name,type:`button`,class:g([`wl-tab`,{active:O.value===t}]),onClick:e=>O.value=t},[P(`img`,{class:`wl-emoji`,src:e.icon,alt:e.name,title:e.name,loading:`lazy`,referrerPolicy:`no-referrer`},null,8,Hu)],10,Vu)))),128))])):T(`v-if`,!0)],2)])]),e.replyId||e.edit?.objectId?(A(),j(`button`,{key:1,type:`button`,class:`wl-close`,title:G.value.cancelReply,onClick:t[6]||=t=>e.$emit(e.replyId?`cancelReply`:`cancelEdit`)},[F(L(yl),{size:24})],8,Uu)):T(`v-if`,!0)]))}}),[[`__file`,`CommentBox.vue`]]),Gu=[`id`],Ku={class:`wl-user`,"aria-hidden":`true`},qu=[`src`],Ju={class:`wl-card`},Yu={class:`wl-head`},Xu=[`href`],Zu={key:1,class:`wl-nick`},Qu=[`textContent`],$u=[`textContent`],ed=[`textContent`],td=[`textContent`],nd=[`textContent`],rd={class:`wl-comment-actions`},id=[`title`],ad=[`textContent`],od=[`title`],sd={class:`wl-meta`,"aria-hidden":`true`},cd=[`data-value`,`textContent`],ld=[`data-value`,`textContent`],ud=[`data-value`,`textContent`],dd=[`innerHTML`],fd={key:1,class:`wl-admin-actions`},pd={class:`wl-comment-status`},md=[`disabled`,`onClick`,`textContent`],hd={key:3,class:`wl-quote`},gd=nu(O({__name:`CommentCard`,props:{comment:{},edit:{default:null},rootId:{},reply:{default:null}},emits:[`log`,`submit`,`delete`,`edit`,`like`,`status`,`sticky`,`reply`],setup(e){let t=e,n=[`approved`,`waiting`,`spam`],r=w(`config`),i=Ml(),a=bi(),o=Kl(),s=C((()=>r.value.locale)),c=C((()=>{let{link:e}=t.comment;return e?el(e)?e:`https://${e}`:``})),l=C((()=>i.value.includes(t.comment.objectId))),u=C((()=>ol(t.comment.insertedAt,a.value,s.value))),f=C((()=>o.value.type===`administrator`)),p=C((()=>t.comment.user_id&&o.value.objectId===t.comment.user_id)),m=C((()=>t.comment.objectId===t.reply?.objectId)),h=C((()=>t.comment.objectId===t.edit?.objectId));return(e,t)=>{let r=d(`CommentCard`,!0);return A(),j(`div`,{id:e.comment.objectId,class:`wl-card-item`},[P(`div`,Ku,[e.comment.avatar?(A(),j(`img`,{key:0,src:e.comment.avatar},null,8,qu)):T(`v-if`,!0),e.comment.type?(A(),R(L(Ol),{key:1})):T(`v-if`,!0)]),P(`div`,Ju,[P(`div`,Yu,[c.value?(A(),j(`a`,{key:0,class:`wl-nick`,href:c.value,target:`_blank`,rel:`nofollow noopener noreferrer`},H(e.comment.nick),9,Xu)):(A(),j(`span`,Zu,H(e.comment.nick),1)),e.comment.type===`administrator`?(A(),j(`span`,{key:2,class:`wl-badge`,textContent:H(s.value.admin)},null,8,Qu)):T(`v-if`,!0),e.comment.label?(A(),j(`span`,{key:3,class:`wl-badge`,textContent:H(e.comment.label)},null,8,$u)):T(`v-if`,!0),e.comment.sticky?(A(),j(`span`,{key:4,class:`wl-badge`,textContent:H(s.value.sticky)},null,8,ed)):T(`v-if`,!0),e.comment.level!==void 0&&e.comment.level>=0?(A(),j(`span`,{key:5,class:g(`wl-badge level${e.comment.level}`),textContent:H(s.value[`level${e.comment.level}`]||`Level ${e.comment.level}`)},null,10,td)):T(`v-if`,!0),P(`span`,{class:`wl-time`,textContent:H(u.value)},null,8,nd),P(`div`,rd,[f.value||p.value?(A(),j(`button`,{key:0,type:`button`,class:`wl-edit`,onClick:t[0]||=()=>e.$emit(`edit`,e.comment)},[F(L(Dl))])):T(`v-if`,!0),f.value||p.value?(A(),j(`button`,{key:1,type:`button`,class:`wl-delete`,onClick:t[1]||=t=>e.$emit(`delete`,e.comment)},[F(L(bl))])):T(`v-if`,!0),P(`button`,{type:`button`,class:`wl-like`,title:l.value?s.value.cancelLike:s.value.like,onClick:t[2]||=t=>e.$emit(`like`,e.comment)},[F(L(Cl),{active:l.value},null,8,[`active`]),`like`in e.comment?(A(),j(`span`,{key:0,textContent:H(e.comment.like)},null,8,ad)):T(`v-if`,!0)],8,id),P(`button`,{type:`button`,class:g([`wl-reply`,{active:m.value}]),title:m.value?s.value.cancelReply:s.value.reply,onClick:t[3]||=t=>e.$emit(`reply`,m.value?null:e.comment)},[F(L(El))],10,od)])]),P(`div`,sd,[e.comment.addr?(A(),j(`span`,{key:0,class:`wl-addr`,"data-value":e.comment.addr,textContent:H(e.comment.addr)},null,8,cd)):T(`v-if`,!0),e.comment.browser?(A(),j(`span`,{key:1,class:`wl-browser`,"data-value":e.comment.browser,textContent:H(e.comment.browser)},null,8,ld)):T(`v-if`,!0),e.comment.os?(A(),j(`span`,{key:2,class:`wl-os`,"data-value":e.comment.os,textContent:H(e.comment.os)},null,8,ud)):T(`v-if`,!0)]),h.value?T(`v-if`,!0):(A(),j(`div`,{key:0,class:`wl-content`,innerHTML:e.comment.comment},null,8,dd)),f.value&&!h.value?(A(),j(`div`,fd,[P(`span`,pd,[(A(),j(I,null,k(n,(t=>P(`button`,{key:t,type:`submit`,class:g(`wl-btn wl-${t}`),disabled:e.comment.status===t,onClick:n=>e.$emit(`status`,{status:t,comment:e.comment}),textContent:H(s.value[t])},null,10,md))),64))]),f.value&&!e.comment.rid?(A(),j(`button`,{key:0,type:`submit`,class:`wl-btn wl-sticky`,onClick:t[4]||=t=>e.$emit(`sticky`,e.comment)},H(e.comment.sticky?s.value.unsticky:s.value.sticky),1)):T(`v-if`,!0)])):T(`v-if`,!0),m.value||h.value?(A(),j(`div`,{key:2,class:g({"wl-reply-wrapper":m.value,"wl-edit-wrapper":h.value})},[F(Wu,{edit:e.edit,"reply-id":e.reply?.objectId,"reply-user":e.comment.nick,"root-id":e.rootId,onLog:t[5]||=t=>e.$emit(`log`),onCancelReply:t[6]||=t=>e.$emit(`reply`,null),onCancelEdit:t[7]||=t=>e.$emit(`edit`,null),onSubmit:t[8]||=t=>e.$emit(`submit`,t)},null,8,[`edit`,`reply-id`,`reply-user`,`root-id`])],2)):T(`v-if`,!0),e.comment.children?(A(),j(`div`,hd,[(A(!0),j(I,null,k(e.comment.children,(n=>(A(),R(r,{key:n.objectId,comment:n,reply:e.reply,edit:e.edit,"root-id":e.rootId,onLog:t[9]||=t=>e.$emit(`log`),onDelete:t[10]||=t=>e.$emit(`delete`,t),onEdit:t[11]||=t=>e.$emit(`edit`,t),onLike:t[12]||=t=>e.$emit(`like`,t),onReply:t[13]||=t=>e.$emit(`reply`,t),onStatus:t[14]||=t=>e.$emit(`status`,t),onSticky:t[15]||=t=>e.$emit(`sticky`,t),onSubmit:t[16]||=t=>e.$emit(`submit`,t)},null,8,[`comment`,`reply`,`edit`,`root-id`])))),128))])):T(`v-if`,!0)])],8,Gu)}}}),[[`__file`,`CommentCard.vue`]]),_d=`2.15.8`,vd={"data-waline":``},yd={class:`wl-meta-head`},bd={class:`wl-count`},xd=[`textContent`],Sd={class:`wl-sort`},Cd=[`onClick`],wd={class:`wl-cards`},Td={key:1,class:`wl-operation`},Ed=[`textContent`],Dd={key:0,class:`wl-loading`},Od=[`textContent`],kd={key:2,class:`wl-operation`},Ad=[`textContent`],jd={key:3,class:`wl-power`},Md=P(`a`,{href:`https://github.com/walinejs/waline`,target:`_blank`,rel:`noopener noreferrer`},` Waline `,-1);nu(O({__name:`WalineComment`,props:[`serverURL`,`path`,`meta`,`requiredMeta`,`dark`,`commentSorting`,`lang`,`locale`,`pageSize`,`wordLimit`,`emoji`,`login`,`highlighter`,`texRenderer`,`imageUploader`,`search`,`copyright`,`recaptchaV3Key`,`turnstileKey`,`reaction`],setup(e){let t=e,n={latest:`insertedAt_desc`,oldest:`insertedAt_asc`,hottest:`like_desc`},i=Object.keys(n),s=Kl(),c=Ml(),l=b(`loading`),u=b(0),d=b(1),f=b(0),p=C((()=>(({serverURL:e,path:t=location.pathname,lang:n=typeof navigator>`u`?`en-US`:navigator.language,locale:r,emoji:i=Oc,meta:a=[`nick`,`mail`,`link`],requiredMeta:o=[],dark:s=!1,pageSize:c=10,wordLimit:l,imageUploader:u,highlighter:d,texRenderer:f,copyright:p=!0,login:m=`enable`,search:h,reaction:g,recaptchaV3Key:_=``,turnstileKey:v=``,commentSorting:y=`latest`,...b})=>({serverURL:tl(e),path:Qc(t),locale:{...Kc[n]||Kc[kc],...typeof r==`object`?r:{}},wordLimit:nl(l),meta:Dc(a),requiredMeta:Dc(o),imageUploader:rl(u,jc),highlighter:rl(d,Lc),texRenderer:rl(f,Mc),lang:Object.keys(Kc).includes(n)?n:`en-US`,dark:s,emoji:typeof i==`boolean`?i?Oc:[]:i,pageSize:c,login:m,copyright:p,search:!1!==h&&(typeof h==`object`?h:Nc(n)),recaptchaV3Key:_,turnstileKey:v,reaction:Array.isArray(g)?g:!0===g?Ac:[],commentSorting:y,...b}))(t))),m=b(p.value.commentSorting),h=b([]),_=b(null),v=b(null),y=C((()=>{return typeof(e=p.value.dark)==`string`?e===`auto`?`@media(prefers-color-scheme:dark){body${il}}`:`${e}${il}`:!0===e?`:root${il}`:``;var e})),x=C((()=>p.value.locale)),S;Ci(y,{id:`waline-darkmode`});let w=e=>{let{serverURL:t,path:r,pageSize:i}=p.value,a=new AbortController;l.value=`loading`,S?.(),(({serverURL:e,lang:t,path:n,page:r,pageSize:i,sortBy:a,signal:o,token:s})=>{let c={};return s&&(c.Authorization=`Bearer ${s}`),fetch(`${e}/comment?path=${encodeURIComponent(n)}&pageSize=${i}&page=${r}&lang=${t}&sortBy=${a}`,{signal:o,headers:c}).then((e=>e.json())).then((e=>Jc(e,`Get comment data`)))})({serverURL:t,lang:p.value.lang,path:r,pageSize:i,sortBy:n[m.value],page:e,signal:a.signal,token:s.value?.token}).then((t=>{l.value=`success`,u.value=t.count,h.value.push(...t.data),d.value=e,f.value=t.totalPages})).catch((e=>{e.name!==`AbortError`&&(console.error(e.message),l.value=`error`)})),S=a.abort.bind(a)},D=()=>w(d.value+1),O=()=>{u.value=0,h.value=[],w(1)},M=e=>{_.value=e},N=e=>{v.value=e},ee=e=>{if(v.value)v.value.comment=e.comment,v.value.orig=e.orig;else if(e.rid){let t=h.value.find((({objectId:t})=>t===e.rid));if(!t)return;Array.isArray(t.children)||(t.children=[]),t.children.push(e)}else h.value.unshift(e),u.value+=1},z=async({comment:e,status:t})=>{if(e.status===t)return;let{serverURL:n,lang:r}=p.value;await Zc({serverURL:n,lang:r,token:s.value?.token,objectId:e.objectId,comment:{status:t}}),e.status=t},B=async e=>{if(e.rid)return;let{serverURL:t,lang:n}=p.value;await Zc({serverURL:t,lang:n,token:s.value?.token,objectId:e.objectId,comment:{sticky:+!e.sticky}}),e.sticky=!e.sticky},V=async({objectId:e})=>{if(!confirm(`Are you sure you want to delete this comment?`))return;let{serverURL:t,lang:n}=p.value;await(({serverURL:e,lang:t,token:n,objectId:r})=>fetch(`${e}/comment/${r}?lang=${t}`,{method:`DELETE`,headers:{Authorization:`Bearer ${n}`}}).then((e=>e.json())).then((e=>Jc(e,`Delete comment`))))({serverURL:t,lang:n,token:s.value?.token,objectId:e}),h.value.some(((t,n)=>t.objectId===e?(h.value=h.value.filter(((e,t)=>t!==n)),!0):t.children.some(((r,i)=>r.objectId===e&&(h.value[n].children=t.children.filter(((e,t)=>t!==i)),!0)))))},te=async e=>{let{serverURL:t,lang:n}=p.value,{objectId:r}=e,i=c.value.includes(r);await Zc({serverURL:t,lang:n,objectId:r,token:s.value?.token,comment:{like:!i}}),i?c.value=c.value.filter((e=>e!==r)):(c.value=[...c.value,r],c.value.length>50&&(c.value=c.value.slice(-50))),e.like=(e.like||0)+(i?-1:1)};return r(`config`,p),o((()=>{U((()=>[t.serverURL,t.path]),(()=>O()),{immediate:!0})})),a((()=>S?.())),(e,t)=>(A(),j(`div`,vd,[F(ru),_.value?T(`v-if`,!0):(A(),R(Wu,{key:0,onLog:O,onSubmit:ee})),P(`div`,yd,[P(`div`,bd,[u.value?(A(),j(`span`,{key:0,class:`wl-num`,textContent:H(u.value)},null,8,xd)):T(`v-if`,!0),E(` `+H(x.value.comment),1)]),P(`ul`,Sd,[(A(!0),j(I,null,k(L(i),(e=>(A(),j(`li`,{key:e,class:g([e===m.value?`active`:``]),onClick:t=>(e=>{m.value!==e&&(m.value=e,O())})(e)},H(x.value[e]),11,Cd)))),128))])]),P(`div`,wd,[(A(!0),j(I,null,k(h.value,(e=>(A(),R(gd,{key:e.objectId,"root-id":e.objectId,comment:e,reply:_.value,edit:v.value,onLog:O,onReply:M,onEdit:N,onSubmit:ee,onStatus:z,onDelete:V,onSticky:B,onLike:te},null,8,[`root-id`,`comment`,`reply`,`edit`])))),128))]),l.value===`error`?(A(),j(`div`,Td,[P(`button`,{type:`button`,class:`wl-btn`,onClick:O,textContent:H(x.value.refresh)},null,8,Ed)])):(A(),j(I,{key:2},[l.value===`loading`?(A(),j(`div`,Dd,[F(L(kl),{size:30})])):h.value.length?d.value<f.value?(A(),j(`div`,kd,[P(`button`,{type:`button`,class:`wl-btn`,onClick:D,textContent:H(x.value.more)},null,8,Ad)])):T(`v-if`,!0):(A(),j(`div`,{key:1,class:`wl-empty`,textContent:H(x.value.sofa)},null,8,Od))],64)),p.value.copyright?(A(),j(`div`,jd,[E(` Powered by `),Md,E(` v`+H(L(_d)),1)])):T(`v-if`,!0)]))}}),[[`__file`,`WalineComment.vue`]]);var Nd=(e,t)=>{t.forEach(((t,n)=>{t.innerText=e[n].toString()}))},Pd=({serverURL:e,path:t=window.location.pathname,selector:n=`.waline-pageview-count`,update:r=!0,lang:i=navigator.language})=>{let a=new AbortController,o=Array.from(document.querySelectorAll(n)),s=e=>{let n=vl(e);return n!==null&&t!==n},c=n=>(({serverURL:e,lang:t,paths:n,signal:r})=>Yc({serverURL:e,lang:t,paths:n,type:[`time`],signal:r}).then((e=>Array.isArray(e)?e:[e])))({serverURL:tl(e),paths:n.map((e=>vl(e)||t)),lang:i,signal:a.signal}).then((e=>Nd(e,n))).catch(ul);if(r){let n=o.filter((e=>!s(e))),r=o.filter(s);(l={serverURL:tl(e),path:t,lang:i},Xc({...l,type:`time`,action:`inc`})).then((e=>Nd(Array(n.length).fill(e),n))),r.length&&c(r)}else c(o);var l;return a.abort.bind(a)},Fd=O({name:`WalineViews`,props:{path:String},setup(e){let{path:t}=z(e),{options:n}=Qe(),r=se(),i=function(){Pd({serverURL:n.value.serverURL,path:t.value,selector:`[data-path="${t.value}"]`,update:r.path===t.value})};return o(()=>{i()}),f(()=>{i()}),()=>B(`span`,{class:`waline-pageview-count`,"data-path":t.value})}});function Id({app:e}){e.component(`Comments`,e=>B(wc,{...e})),e.component(`ValineViews`,e=>B(Tc,{...e})),e.component(`WalineViews`,e=>B(Fd,{...e}))}var Ld=e({default:()=>Rd}),Rd=ze({enhance(...e){Id(...e)}}),zd=(e,t)=>{e.classList.add(t)},Bd=(e,t)=>{e.classList.remove(t)},Vd=e=>{e?.remove()},Hd=(e,t,n)=>e<t?t:e>n?n:e,Ud=e=>(-1+e)*100,Wd=(()=>{let e=[],t=()=>{let n=e.shift();n&&n(t)};return n=>{e.push(n),e.length===1&&t()}})(),Gd=e=>e.replace(/^-ms-/u,`ms-`).replaceAll(/-(?<letter>[\da-z])/giu,(e,t)=>t.toUpperCase()),Kd=(()=>{let e=[`Webkit`,`O`,`Moz`,`ms`],t={},n=t=>{let{style:n}=document.body;if(t in n)return t;let r=t.charAt(0).toUpperCase()+t.slice(1),i=e.length;for(;i--;){let t=`${e[i]}${r}`;if(t in n)return t}return t},r=e=>{let r=Gd(e);return t[r]??=n(r)},i=(e,t,n)=>{e.style[r(t)]=n};return(e,t)=>{for(let[n,r]of Er(t))wr(r)&&i(e,n,r)}})(),qd={minimum:.08,easing:`ease`,speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:`[role="bar"]`,parent:`body`,template:`<div class="bar" role="bar"></div>`},Q={percent:null,isRendered:()=>!!document.querySelector(`#nprogress`),set:e=>{let{speed:t,easing:n}=qd,r=Q.isStarted(),i=Hd(e,qd.minimum,1);Q.percent=i===1?null:i;let a=Q.render(!r),o=a.querySelector(qd.barSelector);return a.offsetWidth,Wd(e=>{Kd(o,{transform:`translate3d(${Ud(i)}%,0,0)`,transition:`all ${t}ms ${n}`}),i===1?(Kd(a,{transition:`none`,opacity:`1`}),a.offsetWidth,setTimeout(()=>{Kd(a,{transition:`all ${t}ms linear`,opacity:`0`}),setTimeout(()=>{Q.remove(),e()},t)},t)):setTimeout(()=>{e()},t)}),Q},isStarted:()=>typeof Q.percent==`number`,start:()=>{Q.percent||Q.set(0);let e=()=>{setTimeout(()=>{Q.percent&&(Q.trickle(),e())},qd.trickleSpeed)};return qd.trickle&&e(),Q},done:e=>!e&&!Q.percent?Q:Q.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=Q;return t?(t=Hd(t+(typeof e==`number`?e:(1-t)*Hd(Math.random()*t,.1,.95)),0,.994),Q.set(t)):Q.start()},trickle:()=>Q.increase(Math.random()*qd.trickleRate),render:e=>{if(Q.isRendered())return document.querySelector(`#nprogress`);zd(document.documentElement,`nprogress-busy`);let t=document.createElement(`div`);t.id=`nprogress`,t.innerHTML=qd.template;let n=t.querySelector(qd.barSelector),r=document.querySelector(qd.parent);return Kd(n,{transition:`all 0 linear`,transform:`translate3d(${e?`-100`:Ud(Q.percent??0)}%,0,0)`}),r&&(r!==document.body&&zd(r,`nprogress-custom-parent`),r.append(t)),t},remove:()=>{Bd(document.documentElement,`nprogress-busy`),Bd(document.querySelector(qd.parent),`nprogress-custom-parent`),Vd(document.querySelector(`#nprogress`))}},Jd=()=>{o(()=>{let e=be(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(e=>{t.has(e.path)||Q.start()}),e.afterEach(e=>{t.add(e.path),Q.done()})})},Yd=e({default:()=>Xd}),Xd=ze({setup(){Jd()}}),Zd=O({name:`BackToTop`,setup(){let e=Le(),t=rt({"/":{backToTop:`返回顶部`},"/en/":{backToTop:`Back to top`}}),n=m(),{height:r}=ct(n),{height:i}=dt(),{y:a}=Xe(),s=C(()=>(e.value.backToTop??!0)&&a.value>100),c=C(()=>a.value/(r.value-i.value)*100);return o(()=>{n.value=document.body}),()=>B(oe,{name:`fade-in`},()=>s.value?B(`button`,{type:`button`,class:`vp-back-to-top-button`,"aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})}},[B(`span`,{class:`vp-scroll-progress`,role:`progressbar`,"aria-labelledby":`loadinglabel`,"aria-valuenow":c.value},B(`svg`,B(`circle`,{cx:`26`,cy:`26`,r:`24`,fill:`none`,stroke:`currentColor`,"stroke-width":`4`,"stroke-dasharray":`${Math.PI*c.value*.48} ${Math.PI*(100-c.value)*.48}`}))),B(`div`,{class:`back-to-top-icon`})]):null)}}),Qd=e({default:()=>$d}),$d=ze({rootComponents:[Zd]});function ef(){let e=rf(),t=C(()=>e?.value?.bulletin),n=b(!1),r=`__CLOSE_BULLETIN_POPOVER__`;return o(()=>{let e=sessionStorage.getItem(r);n.value=e!==`true`&&!!t?.value?.body}),{visible:n,bulletin:t,closeBulletinPopover:()=>{n.value=!1,sessionStorage.setItem(r,`true`)}}}var tf={handleImage(e){return`<img style=\"${e.style||``}\" src=\"${e.src}\" />`},handleText(e){return`<div style=\"${e.style||``}\">${e.content}</div>`},handleTitle(e){return`<h5 style=\"${e.style||``}\">${e.content}</h5>`},handleButton(e){return`<a style=\"${e.style||``}\" class=\"btn\" href=\"${e.link}\">${e.text}</a>`},handleButtongroup(e){return`<div class="btn-group">${(e.children||[]).reduce((t,n)=>t+=`<a style=\"${n.style||e.style||``}\" class=\"btn\" href=\"${n.link}\">${n.text}</a>`,``)}</div>`},handleHr(e){return`<hr />`}};function nf(){let e=rf();function t(e){if(Array.isArray(e))return e.map(e=>t(e));{let t=e.type;return t=t.slice(0,1).toUpperCase()+t.slice(1),tf[`handle${t}`](e)}}return{bodyNodes:C(()=>t(e?.value?.bulletin?.body).join(``)),handleNode:t}}function rf(){let e={locales:{"/":{selectLanguageName:`简体中文`,lastUpdatedText:`最后更新时间`,navbar:[{text:`首页`,link:`/`,icon:`IconHome`},{text:`指南`,link:`/docs/guide/introduce`,icon:`IconCompass`},{text:`参考`,icon:`IconDocument`,children:[{text:`配置`,children:[{text:`Vuepress 配置`,link:`https://v2.vuepress.vuejs.org/zh/reference/config.html`},{text:`Frontmatter`,link:`/docs/theme/frontmatter-home`},{text:`主题配置`,link:`/docs/theme/home`},{text:`Markdown 扩展`,link:`/docs/theme/custom-container`}]},{text:`插件`,children:[{text:`page`,link:`/docs/plugins/page`},{text:`comments`,link:`/docs/plugins/comments`},{text:`vue-previews`,link:`/docs/plugins/vue-previews`},{text:`bulletin-popover`,link:`/docs/plugins/bulletin-popover`}]}]},{text:`版本`,icon:`IconSubVolume`,children:[{text:`2.x(rc)`,link:`https://vuepress-theme-reco.recoluan.com/`},{text:`1.x`,link:`http://v1.vuepress-reco.recoluan.com/views/1.x/`}]},{text:`博客`,link:`/posts`,icon:`IconDocumentAttachment`},{text:`案例`,link:`/docs/others/examples`,icon:`IconFire`},{text:`留言板`,link:`/docs/message-board`,icon:`IconChat`}],series:{"/docs/guide/":[`introduce`,`getting-started`,`gui-builder`,`package-manager`,`custom-style`,`style`,`icon`,`bundler`,`builtin-page`,`folder-specification`,`register-components`,`register-layouts`,`contribute`],"/docs/theme/":[{text:`Frontmatter`,children:[`frontmatter-home`,`frontmatter-page`]},{text:`主题配置`,children:[{text:`Locale 配置`,children:[`home`,`source-dir`,`git`,`series`,`navbar`,`comments`,`bulletin-popover`,`password`,`appearance`,`social-links`,`pages`,`doc-search`,`auto-set-category`,`auto-set-series`,`custom-primary-color`]},{text:`多语言`,children:[`multilingual`]}]},{text:`Markdown 扩展`,children:[`custom-container`,`markdown-task`,`markdown-vue-preview`,`markdown-file-parse`]}],"/docs/plugins/":[`page`,`comments`,`vue-previews`,`bulletin-popover`]},commentConfig:{type:`valine`,options:{appId:`jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz`,appKey:`Js91M9DfM9vPwVaUj7xdkbxh`,placeholder:`填写邮箱可以收到回复提醒哦！`,verify:!0,recordIP:!0,hideComments:!0}},bulletin:{body:[{type:`title`,content:`最新版本`},{type:`text`,content:`
      <ul>
        <li>vuepress：2.0.0-rc.19</li>
        <li>reco 主题：2.0.0-rc.26</li>
      </ul>`,style:`font-size: 12px; color: #5D67E8;`},{type:`title`,content:`QQ 频道：3u8x6485s0`},{type:`image`,src:`/qq_channel.png`},{type:`text`,content:`<br /><div><b>周知：</b>原 3 个 QQ 群成员活跃状态差异较大，且分布较分散，现停止新人加群，为了方便大家的交流，请移步 QQ 频道。</div>`,style:`font-size: 12px; color: #5D67E8;`},{type:`hr`},{type:`buttongroup`,children:[{text:`打赏`,link:`/docs/others/donate.html`}]}]},catalogTitle:`页面导航`,tip:`提示`,info:`信息`,warning:`警告`,danger:`危险`,details:`详情`,editLinkText:`编辑当前页面`,notFound:`哇哦，没有发现这个页面！`,backToHome:`返回首页`},"/en/":{selectLanguageName:`English`,navbar:[{text:`Home`,link:`/en/`,icon:`IconHome`},{text:`Guide`,link:`/en/docs/guide/introduce`,icon:`IconCompass`},{text:`Reference`,icon:`IconDocument`,children:[{text:`Configuration`,children:[{text:`Vuepress Config`,link:`https://v2.vuepress.vuejs.org/reference/config.html`},{text:`Frontmatter`,link:`/en/docs/theme/frontmatter-home`},{text:`Theme Configuration`,link:`/en/docs/theme/home`},{text:`Markdown Extension`,link:`/en/docs/theme/custom-container`}]},{text:`Plugins`,children:[{text:`page`,link:`/en/docs/plugins/page`},{text:`comments`,link:`/en/docs/plugins/comments`},{text:`vue-previews`,link:`/en/docs/plugins/vue-previews`},{text:`bulletin-popover`,link:`/en/docs/plugins/bulletin-popover`}]}]},{text:`Version`,icon:`IconSubVolume`,children:[{text:`2.x(rc)`,link:`https://vuepress-theme-reco.recoluan.com/en/`},{text:`1.x`,link:`http://v1.vuepress-reco.recoluan.com/en/views/1.x/`}]},{text:`Examples`,link:`/en/docs/others/examples`,icon:`IconFire`},{text:`Message board`,link:`/en/docs/message-board`,icon:`IconChat`}],series:{"/en/docs/guide/":[`introduce`,`getting-started`,`gui-builder`,`package-manager`,`custom-style`,`style`,`icon`,`bundler`,`builtin-page`,`folder-specification`,`register-components`,`register-layouts`,`contribute`],"/en/docs/theme/":[{text:`Frontmatter`,children:[`frontmatter-home`,`frontmatter-page`]},{text:`Theme Configuration`,children:[{text:`Locale Config`,children:[`home`,`source-dir`,`git`,`series`,`navbar`,`comments`,`bulletin-popover`,`password`,`appearance`,`social-links`,`pages`,`doc-search`,`auto-set-category`,`auto-set-series`,`custom-primary-color`]},{text:`Multilingual`,children:[`multilingual`]}]},{text:`Markdown Extension`,children:[`custom-container`,`markdown-task`,`markdown-vue-preview`,`markdown-file-parse`]}],"/en/docs/plugins/":[`page`,`comments`,`vue-previews`,`bulletin-popover`]},commentConfig:{type:`valine`,options:{appId:`jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz`,appKey:`Js91M9DfM9vPwVaUj7xdkbxh`,placeholder:`Fill in the email can receive a reply reminder!`,verify:!0,recordIP:!0,hideComments:!0}},bulletin:{title:`Bulletin`,body:[{type:`title`,content:`Latest Version`},{type:`text`,content:`
      <ul>
        <li>vuepress：2.0.0-rc.19</li>
        <li>theme reco：2.0.0-rc.26</li>
      </ul>`,style:`font-size: 12px; color: #5D67E8;`},{type:`title`,content:`QQ Channel：3u8x6485s0`},{type:`image`,src:`/qq_channel.png`},{type:`text`,content:`<br /><div><b>Tip: </b>The original three QQ group members are quite different and scattered, so new people are stopped to join the group now. In order to facilitate your communication, please move to the QQ channel.</div>`,style:`font-size: 12px; color: #5D67E8;`},{type:`hr`},{type:`buttongroup`,children:[{text:`Donate`,link:`/docs/others/donate.html`}]}]}}},colorMode:`dark`,logo:`/logo.png`,author:`reco_luan`,docsRepo:`https://github.com/vuepress-reco/vuepress-theme-reco`,docsBranch:`main`,docsDir:`/docs`,algolia:{appId:`38R2J3MTQC`,apiKey:`583d3caf699630b08a9bc2d12d599701`,indexName:`v2-vuepress-reco-recoluan`},socialLinks:[{icon:`IconReco`,link:`https://recoluan.com/`},{icon:`IconRevili`,link:`https://revili.recoluan.com`}]},t=se(),n=C(()=>Se(e.locales||{},t?.path||`/`));return C(()=>Ye(e,n.value))}var af={class:`bulletin-title`},of=[`innerHTML`],sf=O({__name:`Bulletin`,setup(e){let{visible:t,bulletin:n,closeBulletinPopover:r}=ef(),{bodyNodes:a}=nf();return(e,o)=>{let s=d(`Xicons`);return L(t)?(A(),j(`div`,{key:0,class:`bulletin-wrapper`,style:i({width:L(n)?.width||`300px`})},[P(`div`,af,[F(s,{icon:`VolumeUp`,"icon-size":`20`,text:L(n)?.title||`公告`,color:`#fff`,"text-size":`16`},null,8,[`text`]),(A(),j(`svg`,{class:`btn-close icon`,onClick:o[0]||=(...e)=>L(r)&&L(r)(...e),t:`1573745677073`,viewBox:`0 0 1024 1024`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,"p-id":`4448`,width:`22`,height:`22`},[...o[1]||=[P(`path`,{d:`M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0`,"p-id":`4449`},null,-1)]]))]),P(`div`,{class:`bulletin-content`,innerHTML:L(a)},null,8,of)],4)):T(``,!0)}}}),cf=e({default:()=>lf}),lf=ze({rootComponents:[O(()=>()=>B(sf))]}),uf=B(`svg`,{class:`external-link-icon`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,x:`0px`,y:`0px`,viewBox:`0 0 100 100`,width:`15`,height:`15`},[B(`path`,{fill:`currentColor`,d:`M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z`}),B(`polygon`,{fill:`currentColor`,points:`45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9`})]),df=O({name:`ExternalLinkIcon`,props:{locales:{type:Object,default:()=>({})}},setup(e){let t=Ke(),n=C(()=>e.locales[t.value]??{openInNewWindow:`open in new window`});return()=>B(`span`,[uf,B(`span`,{class:`external-link-icon-sr-only`},n.value.openInNewWindow)])}}),ff=e({default:()=>mf}),pf={},mf=ze({enhance({app:e}){e.component(`ExternalLinkIcon`,B(df,{locales:pf}))}}),hf={};function gf(e){let t=hf[e];if(t)return t;t=hf[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function _f(e,t){typeof t!=`string`&&(t=_f.defaultChars);let n=gf(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}_f.defaultChars=`;/?:@&=+$,#`,_f.componentChars=``;var vf={};function yf(e){let t=vf[e];if(t)return t;t=vf[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function bf(e,t,n){typeof t!=`string`&&(n=t,t=bf.defaultChars),n===void 0&&(n=!0);let r=yf(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}bf.defaultChars=`;/?:@&=+$,-_.!~*'()#`,bf.componentChars=`-_.!~*'()`;function xf(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function Sf(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var Cf=/^([a-z0-9.+-]+:)/i,wf=/:[0-9]*$/,Tf=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Ef=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],Df=[`/`,`?`,`#`],Of=255,kf=/^[+a-z0-9A-Z_-]{0,63}$/,Af=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,jf={javascript:!0,"javascript:":!0},Mf={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Nf(e,t){if(e&&e instanceof Sf)return e;let n=new Sf;return n.parse(e,t),n}Sf.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=Tf.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=Cf.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&jf[o])&&(a=a.substr(2),this.slashes=!0)),!jf[o]&&(i||o&&!Mf[o])){let e=-1;for(let t=0;t<Df.length;t++)r=a.indexOf(Df[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<Ef.length;t++)r=a.indexOf(Ef[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(kf)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(kf)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(Af);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>Of&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),Mf[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},Sf.prototype.parseHost=function(e){let t=wf.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Pf=e({decode:()=>_f,encode:()=>bf,format:()=>xf,parse:()=>Nf}),Ff=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,If=/[\0-\x1F\x7F-\x9F]/,Lf=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Rf=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,zf=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Bf=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Vf=e({Any:()=>Ff,Cc:()=>If,Cf:()=>Lf,P:()=>Rf,S:()=>zf,Z:()=>Bf}),Hf=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),Uf=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),Wf=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Gf=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Kf(e){return e>=55296&&e<=57343||e>1114111?65533:Wf.get(e)??e}var qf;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(qf||={});var Jf=32,Yf;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(Yf||={});function Xf(e){return e>=qf.ZERO&&e<=qf.NINE}function Zf(e){return e>=qf.UPPER_A&&e<=qf.UPPER_F||e>=qf.LOWER_A&&e<=qf.LOWER_F}function Qf(e){return e>=qf.UPPER_A&&e<=qf.UPPER_Z||e>=qf.LOWER_A&&e<=qf.LOWER_Z||Xf(e)}function $f(e){return e===qf.EQUALS||Qf(e)}var ep;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(ep||={});var tp;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(tp||={});var np=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=ep.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=tp.Strict}startEntity(e){this.decodeMode=e,this.state=ep.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case ep.EntityStart:return e.charCodeAt(t)===qf.NUM?(this.state=ep.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=ep.NamedEntity,this.stateNamedEntity(e,t));case ep.NumericStart:return this.stateNumericStart(e,t);case ep.NumericDecimal:return this.stateNumericDecimal(e,t);case ep.NumericHex:return this.stateNumericHex(e,t);case ep.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|Jf)===qf.LOWER_X?(this.state=ep.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=ep.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Xf(r)||Zf(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Xf(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===qf.SEMI)this.consumed+=1;else if(this.decodeMode===tp.Strict)return 0;return this.emitCodePoint(Kf(this.result),this.consumed),this.errors&&(e!==qf.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&Yf.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=ip(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===tp.Attribute&&(i===0||$f(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&Yf.VALUE_LENGTH)>>14,i!==0){if(a===qf.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==tp.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&Yf.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~Yf.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case ep.NamedEntity:return this.result!==0&&(this.decodeMode!==tp.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case ep.NumericDecimal:return this.emitNumericEntity(0,2);case ep.NumericHex:return this.emitNumericEntity(0,3);case ep.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case ep.EntityStart:return 0}}};function rp(e){let t=``,n=new np(e,e=>t+=Gf(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function ip(e,t,n,r){let i=(t&Yf.BRANCH_LENGTH)>>7,a=t&Yf.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var ap=rp(Hf);rp(Uf);function op(e,t=tp.Legacy){return ap(e,t)}function sp(e){return ap(e,tp.Strict)}var cp=e({arrayReplaceAt:()=>mp,asciiTrim:()=>Ip,assign:()=>pp,escapeHtml:()=>Dp,escapeRE:()=>kp,fromCodePoint:()=>gp,has:()=>fp,isMdAsciiPunct:()=>Np,isPunctChar:()=>jp,isPunctCharCode:()=>Mp,isSpace:()=>$,isString:()=>up,isValidEntityCode:()=>hp,isWhiteSpace:()=>Ap,lib:()=>Lp,normalizeReference:()=>Pp,unescapeAll:()=>Sp,unescapeMd:()=>xp});function lp(e){return Object.prototype.toString.call(e)}function up(e){return lp(e)===`[object String]`}var dp=Object.prototype.hasOwnProperty;function fp(e,t){return dp.call(e,t)}function pp(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function mp(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function hp(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function gp(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var _p=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,vp=RegExp(_p.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),yp=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function bp(e,t){if(t.charCodeAt(0)===35&&yp.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return hp(n)?gp(n):e}let n=op(e);return n===e?e:n}function xp(e){return e.indexOf(`\\`)<0?e:e.replace(_p,`$1`)}function Sp(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(vp,function(e,t,n){return t||bp(e,n)})}var Cp=/[&<>"]/,wp=/[&<>"]/g,Tp={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function Ep(e){return Tp[e]}function Dp(e){return Cp.test(e)?e.replace(wp,Ep):e}var Op=/[.?*+^$[\]\\(){}|-]/g;function kp(e){return e.replace(Op,`\\$&`)}function $(e){switch(e){case 9:case 32:return!0}return!1}function Ap(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function jp(e){return Rf.test(e)||zf.test(e)}function Mp(e){return jp(gp(e))}function Np(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Pp(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function Fp(e){return e===32||e===9||e===10||e===13}function Ip(e){let t=0;for(;t<e.length&&Fp(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&Fp(e.charCodeAt(n));n--);return e.slice(t,n+1)}var Lp={mdurl:Pf,ucmicro:Vf};function Rp(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function zp(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=Sp(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=Sp(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function Bp(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=Sp(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=Sp(e.slice(t,a)),o}var Vp=e({parseLinkDestination:()=>zp,parseLinkLabel:()=>Rp,parseLinkTitle:()=>Bp}),Hp={};Hp.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+Dp(a.content)+`</code>`},Hp.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+Dp(e[t].content)+`</code></pre>
`},Hp.fence=function(e,t,n,r,i){let a=e[t],o=a.info?Sp(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||Dp(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},Hp.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},Hp.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},Hp.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},Hp.text=function(e,t){return Dp(e[t].content)},Hp.html_block=function(e,t){return e[t].content},Hp.html_inline=function(e,t){return e[t].content};function Up(){this.rules=pp({},Hp)}Up.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+Dp(e.attrs[t][0])+`="`+Dp(e.attrs[t][1])+`"`;return r},Up.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},Up.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},Up.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},Up.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function Wp(){this.__rules__=[],this.__cache__=null}Wp.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},Wp.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},Wp.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},Wp.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},Wp.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},Wp.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},Wp.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},Wp.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},Wp.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},Wp.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Gp(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}Gp.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},Gp.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},Gp.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},Gp.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},Gp.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function Kp(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Kp.prototype.Token=Gp;var qp=/\r\n?|\n/g,Jp=/\0/g;function Yp(e){let t;t=e.src.replace(qp,`
`),t=t.replace(Jp,`�`),e.src=t}function Xp(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Zp(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function Qp(e){return/^<a[>\s]/i.test(e)}function $p(e){return/^<\/a\s*>/i.test(e)}function em(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(Qp(o.content)&&i>0&&i--,$p(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=mp(r,a,c)}}}}var tm=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,nm=/\((c|tm|r)\)/i,rm=/\((c|tm|r)\)/gi,im={c:`©`,r:`®`,tm:`™`};function am(e,t){return im[t.toLowerCase()]}function om(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(rm,am)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function sm(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&tm.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function cm(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(nm.test(e.tokens[t].content)&&om(e.tokens[t].children),tm.test(e.tokens[t].content)&&sm(e.tokens[t].children))}var lm=/['"]/,um=/['"]/g,dm=`’`;function fm(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function pm(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function mm(e,t){let n,r=[],i={};for(let a=0;a<e.length;a++){let o=e[a],s=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=s);n--);if(r.length=n+1,o.type!==`text`)continue;let c=o.content,l=0,u=c.length;OUTER:for(;l<u;){um.lastIndex=l;let o=um.exec(c);if(!o)break;let d=!0,f=!0;l=o.index+1;let p=o[0]===`'`,m=32;if(o.index-1>=0)m=c.charCodeAt(o.index-1);else for(n=a-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(l<u)h=c.charCodeAt(l);else for(n=a+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=Np(m)||Mp(m),_=Np(h)||Mp(h),v=Ap(m),y=Ap(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&o[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&fm(i,a,o.index,dm);continue}if(f)for(n=r.length-1;n>=0;n--){let e=r[n];if(r[n].level<s)break;if(e.single===p&&r[n].level===s){e=r[n];let s,c;p?(s=t.md.options.quotes[2],c=t.md.options.quotes[3]):(s=t.md.options.quotes[0],c=t.md.options.quotes[1]),fm(i,a,o.index,c),fm(i,e.token,e.pos,s),r.length=n;continue OUTER}}d?r.push({token:a,pos:o.index,single:p,level:s}):f&&p&&fm(i,a,o.index,dm)}}Object.keys(i).forEach(function(t){e[t].content=pm(e[t].content,i[t])})}function hm(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!lm.test(e.tokens[t].content)||mm(e.tokens[t].children,e)}function gm(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var _m=[[`normalize`,Yp],[`block`,Xp],[`inline`,Zp],[`linkify`,em],[`replacements`,cm],[`smartquotes`,hm],[`text_join`,gm]];function vm(){this.ruler=new Wp;for(let e=0;e<_m.length;e++)this.ruler.push(_m[e][0],_m[e][1])}vm.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},vm.prototype.State=Kp;function ym(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if($(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ym.prototype.push=function(e,t,n){let r=new Gp(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},ym.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},ym.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},ym.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&$(this.src.charCodeAt(e));e++);return e},ym.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!$(this.src.charCodeAt(--e)))return e+1;return e},ym.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},ym.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},ym.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if($(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},ym.prototype.Token=Gp;var bm=65536;function xm(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function Sm(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Cm(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!$(s)||o===45&&$(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!$(t))return!1;a++}let c=xm(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=xm(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=Sm(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=xm(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=Sm(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>bm))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function wm(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function Tm(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Em(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if($(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Dm(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!$(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Om(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!$(e.src.charCodeAt(r))?-1:r}function km(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!$(a))?-1:i}function Am(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function jm(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=km(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Om(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],x=e.sCount[c],S=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=S,e.tShift[c]=b,e.sCount[c]=x,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let C=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){C=!0;break}if(C)break;if(d){if(p=km(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Om(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&Am(e,h),!0}function Mm(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!$(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!$(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&$(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&$(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=Pp(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var Nm=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Pm=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),Fm=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),Im=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+Nm.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(Fm.source+`\\s*$`),/^$/,!1]];function Lm(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<Im.length&&!Im[s][0].test(o);s++);if(s===Im.length)return!1;if(r)return Im[s][2];let c=t+1,l=Im[s][1].test(``);if(!Im[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),Im[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function Rm(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!$(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&$(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=Ip(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function zm(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=Ip(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function Bm(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=Ip(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var Vm=[[`table`,Cm,[`paragraph`,`reference`]],[`code`,wm],[`fence`,Tm,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Em,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Dm,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,jm,[`paragraph`,`reference`,`blockquote`]],[`reference`,Mm],[`html_block`,Lm,[`paragraph`,`reference`,`blockquote`]],[`heading`,Rm,[`paragraph`,`reference`,`blockquote`]],[`lheading`,zm],[`paragraph`,Bm]];function Hm(){this.ruler=new Wp;for(let e=0;e<Vm.length;e++)this.ruler.push(Vm[e][0],Vm[e][1],{alt:(Vm[e][2]||[]).slice()})}Hm.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},Hm.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},Hm.prototype.State=ym;function Um(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Um.prototype.pushPending=function(){let e=new Gp(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},Um.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new Gp(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},Um.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=Np(i)||Mp(i),l=Np(s)||Mp(s),u=Ap(i),d=Ap(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},Um.prototype.Token=Gp;function Wm(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Gm(e,t){let n=e.pos;for(;n<e.posMax&&!Wm(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var Km=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function qm(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(Km);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function Jm(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&$(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var Ym=[];for(let e=0;e<256;e++)Ym.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){Ym[e.charCodeAt(0)]=1});function Xm(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),$(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&Ym[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function Zm(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function Qm(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function $m(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function eh(e){let t=e.tokens_meta,n=e.tokens_meta.length;$m(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&$m(e,t[r].delimiters)}var th={tokenize:Qm,postProcess:eh};function nh(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function rh(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function ih(e){let t=e.tokens_meta,n=e.tokens_meta.length;rh(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&rh(e,t[r].delimiters)}var ah={tokenize:nh,postProcess:ih};function oh(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[Pp(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function sh(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[Pp(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var ch=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,lh=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function uh(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(lh.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(ch.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function dh(e){return/^<a[>\s]/i.test(e)}function fh(e){return/^<\/a\s*>/i.test(e)}function ph(e){let t=e|32;return t>=97&&t<=122}function mh(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!ph(i))return!1;let a=e.src.slice(r).match(Pm);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],dh(t.content)&&e.linkLevel++,fh(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var hh=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,gh=/^&([a-z][a-z0-9]{1,31});/i;function _h(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(hh);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=hp(t)?gp(t):gp(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(gh);if(r){let n=sp(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function vh(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function yh(e){let t=e.tokens_meta,n=e.tokens_meta.length;vh(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&vh(t[e].delimiters)}function bh(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var xh=[[`text`,Gm],[`linkify`,qm],[`newline`,Jm],[`escape`,Xm],[`backticks`,Zm],[`strikethrough`,th.tokenize],[`emphasis`,ah.tokenize],[`link`,oh],[`image`,sh],[`autolink`,uh],[`html_inline`,mh],[`entity`,_h]],Sh=[[`balance_pairs`,yh],[`strikethrough`,th.postProcess],[`emphasis`,ah.postProcess],[`fragments_join`,bh]];function Ch(){this.ruler=new Wp;for(let e=0;e<xh.length;e++)this.ruler.push(xh[e][0],xh[e][1]);this.ruler2=new Wp;for(let e=0;e<Sh.length;e++)this.ruler2.push(Sh[e][0],Sh[e][1])}Ch.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},Ch.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},Ch.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},Ch.prototype.State=Um;function wh(e){let t={};e||={},t.src_Any=Ff.source,t.src_Cc=If.source,t.src_Z=Bf.source,t.src_P=Rf.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function Th(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function Eh(e){return Object.prototype.toString.call(e)}function Dh(e){return Eh(e)===`[object String]`}function Oh(e){return Eh(e)===`[object Object]`}function kh(e){return Eh(e)===`[object RegExp]`}function Ah(e){return Eh(e)===`[object Function]`}function jh(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var Mh={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Nh(e){return Object.keys(e||{}).reduce(function(e,t){return e||Mh.hasOwnProperty(t)},!1)}var Ph={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},Fh=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,Ih=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function Lh(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function Rh(){return function(e,t){t.normalize(e)}}function zh(e){let t=e.re=wh(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Fh),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Oh(n)){kh(n.validate)?r.validate=Lh(n.validate):Ah(n.validate)?r.validate=n.validate:a(t,n),Ah(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=Rh();return}if(Dh(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:Rh()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(jh).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function Bh(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function Vh(e,t){if(!(this instanceof Vh))return new Vh(e,t);t||Nh(e)&&(t=e,e={}),this.__opts__=Th({},Mh,t),this.__schemas__=Th({},Ph,e),this.__compiled__={},this.__tlds__=Ih,this.__tlds_replaced__=!1,this.re={},zh(this)}Vh.prototype.add=function(e,t){return this.__schemas__[e]=t,zh(this),this},Vh.prototype.set=function(e){return this.__opts__=Th(this.__opts__,e),this},Vh.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},Vh.prototype.pretest=function(e){return this.re.pretest.test(e)},Vh.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},Vh.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new Bh(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},Vh.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new Bh(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},Vh.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),zh(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,zh(this),this)},Vh.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},Vh.prototype.onCompile=function(){};var Hh=2147483647,Uh=36,Wh=1,Gh=26,Kh=38,qh=700,Jh=72,Yh=128,Xh=`-`,Zh=/^xn--/,Qh=/[^\0-\x7F]/,$h=/[\x2E\u3002\uFF0E\uFF61]/g,eg={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},tg=Uh-Wh,ng=Math.floor,rg=String.fromCharCode;function ig(e){throw RangeError(eg[e])}function ag(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function og(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace($h,`.`);let i=ag(e.split(`.`),t).join(`.`);return r+i}function sg(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var cg=e=>String.fromCodePoint(...e),lg=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Uh},ug=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},dg=function(e,t,n){let r=0;for(e=n?ng(e/qh):e>>1,e+=ng(e/t);e>455;r+=Uh)e=ng(e/tg);return ng(r+36*e/(e+Kh))},fg=function(e){let t=[],n=e.length,r=0,i=Yh,a=Jh,o=e.lastIndexOf(Xh);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&ig(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=Uh;;i+=Uh){s>=n&&ig(`invalid-input`);let o=lg(e.charCodeAt(s++));o>=Uh&&ig(`invalid-input`),o>ng((Hh-r)/t)&&ig(`overflow`),r+=o*t;let c=i<=a?Wh:i>=a+Gh?Gh:i-a;if(o<c)break;let l=Uh-c;t>ng(Hh/l)&&ig(`overflow`),t*=l}let c=t.length+1;a=dg(r-o,c,o==0),ng(r/c)>Hh-i&&ig(`overflow`),i+=ng(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},pg=function(e){let t=[];e=sg(e);let n=e.length,r=Yh,i=0,a=Jh;for(let n of e)n<128&&t.push(rg(n));let o=t.length,s=o;for(o&&t.push(Xh);s<n;){let n=Hh;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>ng((Hh-i)/c)&&ig(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>Hh&&ig(`overflow`),n===r){let e=i;for(let n=Uh;;n+=Uh){let r=n<=a?Wh:n>=a+Gh?Gh:n-a;if(e<r)break;let i=e-r,o=Uh-r;t.push(rg(ug(r+i%o,0))),e=ng(i/o)}t.push(rg(ug(e,0))),a=dg(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},mg={version:`2.3.1`,ucs2:{decode:sg,encode:cg},decode:fg,encode:pg,toASCII:function(e){return og(e,function(e){return Qh.test(e)?`xn--`+pg(e):e})},toUnicode:function(e){return og(e,function(e){return Zh.test(e)?fg(e.slice(4).toLowerCase()):e})}},hg={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},gg=/^(vbscript|javascript|file|data):/,_g=/^data:image\/(gif|png|jpeg|webp);/;function vg(e){let t=e.trim().toLowerCase();return!gg.test(t)||_g.test(t)}var yg=[`http:`,`https:`,`mailto:`];function bg(e){let t=Nf(e,!0);if(t.hostname&&(!t.protocol||yg.indexOf(t.protocol)>=0))try{t.hostname=mg.toASCII(t.hostname)}catch{}return bf(xf(t))}function xg(e){let t=Nf(e,!0);if(t.hostname&&(!t.protocol||yg.indexOf(t.protocol)>=0))try{t.hostname=mg.toUnicode(t.hostname)}catch{}return _f(xf(t),_f.defaultChars+`%`)}function Sg(e,t){if(!(this instanceof Sg))return new Sg(e,t);t||up(e)||(t=e||{},e=`default`),this.inline=new Ch,this.block=new Hm,this.core=new vm,this.renderer=new Up,this.linkify=new Vh,this.validateLink=vg,this.normalizeLink=bg,this.normalizeLinkText=xg,this.utils=cp,this.helpers=pp({},Vp),this.options={},this.configure(e),t&&this.set(t)}Sg.prototype.set=function(e){return pp(this.options,e),this},Sg.prototype.configure=function(e){let t=this;if(up(e)){let t=e;if(e=hg[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},Sg.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},Sg.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},Sg.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},Sg.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},Sg.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},Sg.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},Sg.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var Cg=t(n(((e,t)=>{var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/\u00a0/g,` `)},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){n||={};var r,a;switch(i.util.type(t)){case`Object`:if(a=i.util.objId(t),n[a])return n[a];for(var o in r={},n[a]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case`Array`:return a=i.util.objId(t),n[a]?n[a]:(r=[],n[a]=r,t.forEach(function(t,i){r[i]=e(t,n)}),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return`none`},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,`gi`),``),e.classList.add(`language-`+n)},currentScript:function(){if(typeof document>`u`)return null;if(document.currentScript&&document.currentScript.tagName===`SCRIPT`)return document.currentScript;try{throw Error()}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName(`script`);for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r=`no-`+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r||=i.languages;var a=r[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(s)||(o[s]=a[s])}var l=r[e];return r[e]=o,i.languages.DFS(i.languages,function(t,n){n===l&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,r,a){a||={};var o=i.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var c=t[s],l=i.util.type(c);l===`Object`&&!a[o(c)]?(a[o(c)]=!0,e(c,n,null,a)):l===`Array`&&!a[o(c)]&&(a[o(c)]=!0,e(c,n,s,a))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:`code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code`};i.hooks.run(`before-highlightall`,r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run(`before-all-elements-highlight`,r);for(var a=0,o;o=r.elements[a++];)i.highlightElement(o,t===!0,r.callback)},highlightElement:function(t,n,r){var a=i.util.getLanguage(t),o=i.languages[a];i.util.setLanguage(t,a);var s=t.parentElement;s&&s.nodeName.toLowerCase()===`pre`&&i.util.setLanguage(s,a);var c={element:t,language:a,grammar:o,code:t.textContent};function l(e){c.highlightedCode=e,i.hooks.run(`before-insert`,c),c.element.innerHTML=c.highlightedCode,i.hooks.run(`after-highlight`,c),i.hooks.run(`complete`,c),r&&r.call(c.element)}if(i.hooks.run(`before-sanity-check`,c),s=c.element.parentElement,s&&s.nodeName.toLowerCase()===`pre`&&!s.hasAttribute(`tabindex`)&&s.setAttribute(`tabindex`,`0`),!c.code){i.hooks.run(`complete`,c),r&&r.call(c.element);return}if(i.hooks.run(`before-highlight`,c),!c.grammar){l(i.util.encode(c.code));return}if(n&&e.Worker){var u=new Worker(i.filename);u.onmessage=function(e){l(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(i.highlight(c.code,c.grammar,c.language))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(i.hooks.run(`before-tokenize`,r),!r.grammar)throw Error(`The language "`+r.language+`" has no grammar.`);return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run(`after-tokenize`,r),a.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new c;return l(i,i.head,e),s(e,i,t,i.head,0),d(i)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(!(!n||!n.length))for(var r=0,a;a=n[r++];)a(t)}},Token:a};e.Prism=i;function a(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=(r||``).length|0}a.stringify=function e(t,n){if(typeof t==`string`)return t;if(Array.isArray(t)){var r=``;return t.forEach(function(t){r+=e(t,n)}),r}var a={type:t.type,content:e(t.content,n),tag:`span`,classes:[`token`,t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),i.hooks.run(`wrap`,a);var s=``;for(var c in a.attributes)s+=` `+c+`="`+(a.attributes[c]||``).replace(/"/g,`&quot;`)+`"`;return`<`+a.tag+` class="`+a.classes.join(` `)+`"`+s+`>`+a.content+`</`+a.tag+`>`};function o(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var a=i[1].length;i.index+=a,i[0]=i[0].slice(a)}return i}function s(e,t,n,r,c,d){for(var f in n)if(!(!n.hasOwnProperty(f)||!n[f])){var p=n[f];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d.cause==f+`,`+m)return;var h=p[m],g=h.inside,_=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var b=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,b+`g`)}for(var x=h.pattern||h,S=r.next,C=c;S!==t.tail&&!(d&&C>=d.reach);C+=S.value.length,S=S.next){var w=S.value;if(t.length>e.length)return;if(!(w instanceof a)){var T=1,E;if(v){if(E=o(x,C,e,_),!E||E.index>=e.length)break;var D=E.index,O=E.index+E[0].length,k=C;for(k+=S.value.length;D>=k;)S=S.next,k+=S.value.length;if(k-=S.value.length,C=k,S.value instanceof a)continue;for(var A=S;A!==t.tail&&(k<O||typeof A.value==`string`);A=A.next)T++,k+=A.value.length;T--,w=e.slice(C,k),E.index-=C}else if(E=o(x,0,w,_),!E)continue;var D=E.index,j=E[0],M=w.slice(0,D),N=w.slice(D+j.length),P=C+w.length;d&&P>d.reach&&(d.reach=P);var F=S.prev;M&&(F=l(t,F,M),C+=M.length),u(t,F,T);var ee=new a(f,g?i.tokenize(j,g):j,y,j);if(S=l(t,F,ee),N&&l(t,S,N),T>1){var I={cause:f+`,`+m,reach:P};s(e,t,n,S.prev,C,I),d&&I.reach>d.reach&&(d.reach=I.reach)}}}}}}function c(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function u(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}function d(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}if(!e.document)return e.addEventListener&&(i.disableWorkerMessageHandler||e.addEventListener(`message`,function(t){var n=JSON.parse(t.data),r=n.language,a=n.code,o=n.immediateClose;e.postMessage(i.highlight(a,i.languages[r],r)),o&&e.close()},!1)),i;var f=i.util.currentScript();f&&(i.filename=f.src,f.hasAttribute(`data-manual`)&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var m=document.readyState;m===`loading`||m===`interactive`&&f&&f.defer?document.addEventListener(`DOMContentLoaded`,p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}(typeof window<`u`?window:typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope?self:{});t!==void 0&&t.exports&&(t.exports=n),typeof global<`u`&&(global.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside[`attr-value`].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside[`internal-subset`].inside=n.languages.markup,n.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i[`language-`+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var a={};a[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore(`markup`,`cdata`,a)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend(`markup`,{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined(`style`,`css`),n.tag.addAttribute(`style`,`css`))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend(`clike`,{"class-name":[n.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),n.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),n.languages.markup&&(n.languages.markup.tag.addInlined(`script`,`javascript`),n.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),n.languages.js=n.languages.javascript,(function(){if(n===void 0||typeof document>`u`)return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=`Loading…`,t=function(e,t){return`✖ Error `+e+` while fetching file: `+t},r=`✖ Error: File does not exist or is empty`,i={js:`javascript`,py:`python`,rb:`ruby`,ps1:`powershell`,psm1:`powershell`,sh:`bash`,bat:`batch`,h:`c`,tex:`latex`},a=`data-src-status`,o=`loading`,s=`loaded`,c=`failed`,l=`pre[data-src]:not([`+a+`="`+s+`"]):not([`+a+`="`+o+`"])`;function u(e,n,i){var a=new XMLHttpRequest;a.open(`GET`,e,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?n(a.responseText):a.status>=400?i(t(a.status,a.statusText)):i(r))},a.send(null)}function d(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||``);if(t){var n=Number(t[1]),r=t[2],i=t[3];return r?i?[n,Number(i)]:[n,void 0]:[n,n]}}n.hooks.add(`before-highlightall`,function(e){e.selector+=`, `+l}),n.hooks.add(`before-sanity-check`,function(t){var r=t.element;if(r.matches(l)){t.code=``,r.setAttribute(a,o);var f=r.appendChild(document.createElement(`CODE`));f.textContent=e;var p=r.getAttribute(`data-src`),m=t.language;if(m===`none`){var h=(/\.(\w+)$/.exec(p)||[,`none`])[1];m=i[h]||h}n.util.setLanguage(f,m),n.util.setLanguage(r,m);var g=n.plugins.autoloader;g&&g.loadLanguages(m),u(p,function(e){r.setAttribute(a,s);var t=d(r.getAttribute(`data-range`));if(t){var i=e.split(/\r\n?|\n/g),o=t[0],c=t[1]==null?i.length:t[1];o<0&&(o+=i.length),o=Math.max(0,Math.min(o-1,i.length)),c<0&&(c+=i.length),c=Math.max(0,Math.min(c,i.length)),e=i.slice(o,c).join(`
`),r.hasAttribute(`data-start`)||r.setAttribute(`data-start`,String(o+1))}f.textContent=e,n.highlightElement(f)},function(e){r.setAttribute(a,c),f.textContent=e})}}),n.plugins.fileHighlight={highlight:function(e){for(var t=(e||document).querySelectorAll(l),r=0,i;i=t[r++];)n.highlightElement(i)}};var f=!1;n.fileHighlight=function(){f||=(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()}))(),1);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside[`attr-value`].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside[`internal-subset`].inside=Prism.languages.markup,Prism.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r[`language-`+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var i={};i[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore(`markup`,`cdata`,i)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend(`markup`,{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined(`style`,`css`),n.tag.addAttribute(`style`,`css`))})(Prism),Prism.languages.javascript=Prism.languages.extend(`clike`,{"class-name":[Prism.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),Prism.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined(`script`,`javascript`),Prism.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),Prism.languages.js=Prism.languages.javascript,(function(e){var t=`\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b`,n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:`punctuation`,inside:null},r={bash:n,environment:{pattern:RegExp(`\\$`+t),alias:`constant`},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp(`(\\{)`+t),lookbehind:!0,alias:`constant`}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:`important`},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:`function`},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:`function`}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:`variable`,lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp(`(^|[\\s;|&]|[<>]\\()`+t),lookbehind:!0,alias:`constant`}},alias:`variable`,lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:`variable`,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp(`\\$?`+t),alias:`constant`},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:`class-name`},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:`important`},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:`important`}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var i=[`comment`,`function-name`,`for-or-select`,`assign-left`,`parameter`,`string`,`environment`,`function`,`keyword`,`builtin`,`boolean`,`file-descriptor`,`operator`,`punctuation`,`number`],a=r.variable[1].inside,o=0;o<i.length;o++)a[i[o]]=e.languages.bash[i[o]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism),(function(e){e.languages.typescript=e.languages.extend(`javascript`,{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript[`literal-property`];var t=e.languages.extend(`typescript`,{});delete t[`class-name`],e.languages.typescript[`class-name`].inside=t,e.languages.insertBefore(`typescript`,`function`,{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:`operator`},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:`class-name`,inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism),(function(e){function t(e){return e=e.replace(/<inner>/g,function(){return`(?:\\\\.|[^\\\\\\n\\r]|(?:\\n|\\r\\n?)(?![\\r\\n]))`}),RegExp(`((?:^|[^\\\\])(?:\\\\{2})*)(?:`+e+`)`)}var n="(?:\\\\.|``(?:[^`\\r\\n]|`(?!`))+``|`[^`\\r\\n]+`|[^\\\\|\\r\\n`])+",r=`\\|?__(?:\\|__)+\\|?(?:(?:\\n|\\r\\n?)|(?![\\s\\S]))`.replace(/__/g,function(){return n}),i=`\\|?[ \\t]*:?-{3,}:?[ \\t]*(?:\\|[ \\t]*:?-{3,}:?[ \\t]*)+\\|?(?:\\n|\\r\\n?)`;e.languages.markdown=e.languages.extend(`markup`,{}),e.languages.insertBefore(`markdown`,`prolog`,{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:[`yaml`,`language-yaml`],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:`punctuation`},table:{pattern:RegExp(`^`+r+i+`(?:`+r+`)*`,`m`),inside:{"table-data-rows":{pattern:RegExp(`^(`+r+i+`)(?:`+r+`)*$`),lookbehind:!0,inside:{"table-data":{pattern:RegExp(n),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp(`^(`+r+`)`+i+`$`),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp(`^`+r+`$`),inside:{"table-header":{pattern:RegExp(n),alias:`important`,inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:`keyword`},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:`important`,inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:`important`,inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:`punctuation`},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:`punctuation`},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:`url`},bold:{pattern:t(`\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t(`\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t(`(~~?)(?:(?!~)<inner>)+\\2`),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:[`code`,`keyword`]},url:{pattern:t(`!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \\t]?\\[(?:(?!\\])<inner>)+\\])`),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),[`url`,`bold`,`italic`,`strike`].forEach(function(t){[`url`,`bold`,`italic`,`strike`,`code-snippet`].forEach(function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])})}),e.hooks.add(`after-tokenize`,function(e){if(e.language!==`markdown`&&e.language!==`md`)return;function t(e){if(!(!e||typeof e==`string`))for(var n=0,r=e.length;n<r;n++){var i=e[n];if(i.type!==`code`){t(i.content);continue}var a=i.content[1],o=i.content[3];if(a&&o&&a.type===`code-language`&&o.type===`code-block`&&typeof a.content==`string`){var s=a.content.replace(/\b#/g,`sharp`).replace(/\b\+\+/g,`pp`);s=(/[a-z][\w-]*/i.exec(s)||[``])[0].toLowerCase();var c=`language-`+s;o.alias?typeof o.alias==`string`?o.alias=[o.alias,c]:o.alias.push(c):o.alias=[c]}}}t(e.tokens)}),e.hooks.add(`wrap`,function(t){if(t.type===`code-block`){for(var n=``,r=0,i=t.classes.length;r<i;r++){var a=t.classes[r],o=/language-(.+)/.exec(a);if(o){n=o[1];break}}var s=e.languages[n];if(s)t.content=e.highlight(c(t.content),s,n);else if(n&&n!==`none`&&e.plugins.autoloader){var l=`md-`+new Date().valueOf()+`-`+Math.floor(Math.random()*0x2386f26fc10000);t.attributes.id=l,e.plugins.autoloader.loadLanguages(n,function(){var t=document.getElementById(l);t&&(t.innerHTML=e.highlight(t.textContent,e.languages[n],n))})}}});var a=RegExp(e.languages.markup.tag.pattern.source,`gi`),o={amp:`&`,lt:`<`,gt:`>`,quot:`"`},s=String.fromCodePoint||String.fromCharCode;function c(e){var t=e.replace(a,``);return t=t.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(e,t){return t=t.toLowerCase(),t[0]===`#`?s(t[1]===`x`?parseInt(t.slice(2),16):Number(t.slice(1))):o[t]||e}),t}e.languages.md=e.languages.markdown})(Prism),Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:`punctuation`},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:`string`},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:[`annotation`,`punctuation`],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python[`string-interpolation`].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python,(function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=`(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*`,r={pattern:RegExp(`(^|[^\\w.])`+n+`[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b`),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend(`clike`,{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(`(^|[^\\w.])`+n+`[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)`),lookbehind:!0,inside:r.inside},{pattern:RegExp(`(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)`+n+`[A-Z]\\w*\\b`),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore(`java`,`string`,{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:`string`},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore(`java`,`class-name`,{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:`punctuation`},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(`(\\bimport\\s+)`+n+`(?:[A-Z]\\w*|\\*)(?=\\s*;)`),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(`(\\bimport\\s+static\\s+)`+n+`(?:\\w+|\\*)(?=\\s*;)`),lookbehind:!0,alias:`static`,inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(`(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?`.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism),Prism.languages.c=Prism.languages.extend(`clike`,{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore(`c`,`string`,{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore(`c`,`string`,{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:`property`,inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:`function`}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:`keyword`},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore(`c`,`function`,{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean,(function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=`\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b`.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend(`c`,{"class-name":[{pattern:RegExp(`(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+`.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore(`cpp`,`string`,{module:{pattern:RegExp(`(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\\r\\n|[\\s\\S])|[^"\\\\\\r\\n])*"|<[^<>\\r\\n]*>|`+`<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>`.replace(/<mod-name>/g,function(){return n})+`)`),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:`string`,greedy:!0}}),e.languages.insertBefore(`cpp`,`keyword`,{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:`class-name`,inside:e.languages.cpp}}}}),e.languages.insertBefore(`cpp`,`operator`,{"double-colon":{pattern:/::/,alias:`punctuation`}}),e.languages.insertBefore(`cpp`,`class-name`,{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend(`cpp`,{})}}),e.languages.insertBefore(`inside`,`double-colon`,{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp[`base-clause`])})(Prism),(function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,function(e,n){return`(?:`+t[+n]+`)`})}function n(e,n,r){return RegExp(t(e,n),r||``)}function r(e,t){for(var n=0;n<t;n++)e=e.replace(/<<self>>/g,function(){return`(?:`+e+`)`});return e.replace(/<<self>>/g,`[^\\s\\S]`)}var i={type:`bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void`,typeDeclaration:`class enum interface record struct`,contextual:`add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)`,other:`abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield`};function a(e){return`\\b(?:`+e.trim().replace(/ /g,`|`)+`)\\b`}var o=a(i.typeDeclaration),s=RegExp(a(i.type+` `+i.typeDeclaration+` `+i.contextual+` `+i.other)),c=a(i.typeDeclaration+` `+i.contextual+` `+i.other),l=a(i.type+` `+i.typeDeclaration+` `+i.other),u=r(`<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>`,2),d=r(`\\((?:[^()]|<<self>>)*\\)`,2),f=`@?\\b[A-Za-z_]\\w*\\b`,p=t(`<<0>>(?:\\s*<<1>>)?`,[f,u]),m=t(`(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*`,[c,p]),h=`\\[\\s*(?:,\\s*)*\\]`,g=t(`<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?`,[m,h]),_=t(`(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?`,[t(`\\(<<0>>+(?:,<<0>>+)+\\)`,[t(`[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>`,[u,d,h])]),m,h]),v={keyword:s,punctuation:/[<>()?,.:[\]]/},y=`'(?:[^\\r\\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,b=`"(?:\\\\.|[^\\\\"\\r\\n])*"`,x=`@"(?:""|\\\\[\\s\\S]|[^\\\\"])*"(?!")`;e.languages.csharp=e.languages.extend(`clike`,{string:[{pattern:n(`(^|[^$\\\\])<<0>>`,[x]),lookbehind:!0,greedy:!0},{pattern:n(`(^|[^@$\\\\])<<0>>`,[b]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:n(`(\\busing\\s+static\\s+)<<0>>(?=\\s*;)`,[m]),lookbehind:!0,inside:v},{pattern:n(`(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)`,[f,_]),lookbehind:!0,inside:v},{pattern:n(`(\\busing\\s+)<<0>>(?=\\s*=)`,[f]),lookbehind:!0},{pattern:n(`(\\b<<0>>\\s+)<<1>>`,[o,p]),lookbehind:!0,inside:v},{pattern:n(`(\\bcatch\\s*\\(\\s*)<<0>>`,[m]),lookbehind:!0,inside:v},{pattern:n(`(\\bwhere\\s+)<<0>>`,[f]),lookbehind:!0},{pattern:n(`(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>`,[g]),lookbehind:!0,inside:v},{pattern:n(`\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))`,[_,l,f]),inside:v}],keyword:s,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore(`csharp`,`number`,{range:{pattern:/\.\./,alias:`operator`}}),e.languages.insertBefore(`csharp`,`punctuation`,{"named-parameter":{pattern:n(`([(,]\\s*)<<0>>(?=\\s*:)`,[f]),lookbehind:!0,alias:`punctuation`}}),e.languages.insertBefore(`csharp`,`class-name`,{namespace:{pattern:n(`(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])`,[f]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(`(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))`,[d]),lookbehind:!0,alias:`class-name`,inside:v},"return-type":{pattern:n(`<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))`,[_,m]),inside:v,alias:`class-name`},"constructor-invocation":{pattern:n(`(\\bnew\\s+)<<0>>(?=\\s*[[({])`,[_]),lookbehind:!0,inside:v,alias:`class-name`},"generic-method":{pattern:n(`<<0>>\\s*<<1>>(?=\\s*\\()`,[f,u]),inside:{function:n(`^<<0>>`,[f]),generic:{pattern:RegExp(u),alias:`class-name`,inside:v}}},"type-list":{pattern:n(`\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))`,[o,p,f,_,s.source,d,`\\bnew\\s*\\(\\s*\\)`]),lookbehind:!0,inside:{"record-arguments":{pattern:n(`(^(?!new\\s*\\()<<0>>\\s*)<<1>>`,[p,d]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:s,"class-name":{pattern:RegExp(_),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:`property`,inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:`keyword`}}}});var S=b+`|`+y,C=t(`\\/(?![*/])|\\/\\/[^\\r\\n]*[\\r\\n]|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/|<<0>>`,[S]),w=r(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[C]),2),T=`\\b(?:assembly|event|field|method|module|param|property|return|type)\\b`,E=t(`<<0>>(?:\\s*\\(<<1>>*\\))?`,[m,w]);e.languages.insertBefore(`csharp`,`class-name`,{attribute:{pattern:n(`((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])`,[T,E]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(`^<<0>>(?=\\s*:)`,[T]),alias:`keyword`},"attribute-arguments":{pattern:n(`\\(<<0>>*\\)`,[w]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var D=`:[^}\\r\\n]+`,O=r(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[C]),2),k=t(`\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}`,[O,D]),A=r(t(`[^"'/()]|\\/(?!\\*)|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/|<<0>>|\\(<<self>>*\\)`,[S]),2),j=t(`\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}`,[A,D]);function M(t,r){return{interpolation:{pattern:n(`((?:^|[^{])(?:\\{\\{)*)<<0>>`,[t]),lookbehind:!0,inside:{"format-string":{pattern:n(`(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)`,[r,D]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:`language-csharp`,inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore(`csharp`,`string`,{"interpolation-string":[{pattern:n(`(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[\\s\\S]|\\{\\{|<<0>>|[^\\\\{"])*"`,[k]),lookbehind:!0,greedy:!0,inside:M(k,O)},{pattern:n(`(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"`,[j]),lookbehind:!0,greedy:!0,inside:M(j,A)}],char:{pattern:RegExp(y),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp})(Prism),Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:`keyword`}},Prism.languages.webmanifest=Prism.languages.json,(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r=`(?:`+n.source+`(?:[ 	]+`+t.source+`)?|`+t.source+`(?:[ 	]+`+n.source+`)?)`,i=`(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&'*,\\-:>?@[\\]\`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \\t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*`.replace(/<PLAIN>/g,function(){return`[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]`}),a=`"(?:[^"\\\\\\r\\n]|\\\\.)*"|'(?:[^'\\\\\\r\\n]|\\\\.)*'`;function o(e,t){t=(t||``).replace(/m/g,``)+`m`;var n=`([:\\-,[{]\\s*(?:\\s<<prop>>[ \\t]+)?)(?:<<value>>)(?=[ \\t]*(?:$|,|\\]|\\}|(?:[\\r\\n]\\s*)?#))`.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return e});return RegExp(n,t)}e.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ \\t]+)?[|>])[ \\t]*(?:((?:\\r?\\n|\\r)[ \\t]+)\\S[^\\r\\n]*(?:\\2[^\\r\\n]+)*)`.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:`string`},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\\r\\n?])[ \\t]*(?:<<prop>>[ \\t]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return`(?:`+i+`|`+a+`)`})),lookbehind:!0,greedy:!0,alias:`atrule`},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:`important`},datetime:{pattern:o(`\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \\t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \\t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?`),lookbehind:!0,alias:`number`},boolean:{pattern:o(`false|true`,`i`),lookbehind:!0,alias:`important`},null:{pattern:o(`null|~`,`i`),lookbehind:!0,alias:`important`},string:{pattern:o(a),lookbehind:!0,greedy:!0},number:{pattern:o(`[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)`,`i`),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism),(function(e){e.languages.ruby=e.languages.extend(`clike`,{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),e.languages.insertBefore(`ruby`,`operator`,{"double-colon":{pattern:/::/,alias:`punctuation`}});var t={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:e.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:`punctuation`}}};delete e.languages.ruby.function;var n=`(?:`+[`([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[\\s\\S])*\\1`,`\\((?:[^()\\\\]|\\\\[\\s\\S]|\\((?:[^()\\\\]|\\\\[\\s\\S])*\\))*\\)`,`\\{(?:[^{}\\\\]|\\\\[\\s\\S]|\\{(?:[^{}\\\\]|\\\\[\\s\\S])*\\})*\\}`,`\\[(?:[^\\[\\]\\\\]|\\\\[\\s\\S]|\\[(?:[^\\[\\]\\\\]|\\\\[\\s\\S])*\\])*\\]`,`<(?:[^<>\\\\]|\\\\[\\s\\S]|<(?:[^<>\\\\]|\\\\[\\s\\S])*>)*>`].join(`|`)+`)`,r=`(?:"(?:\\\\.|[^"\\\\\\r\\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\\0-\\x7F]+)[?!]?|\\$.)`;e.languages.insertBefore(`ruby`,`keyword`,{"regex-literal":[{pattern:RegExp(`%r`+n+`[egimnosux]{0,6}`),greedy:!0,inside:{interpolation:t,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:t,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp(`(^|[^:]):`+r),lookbehind:!0,greedy:!0},{pattern:RegExp(`([\\r\\n{(,][ \\t]*)`+r+`(?=:(?!:))`),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),e.languages.insertBefore(`ruby`,`string`,{"string-literal":[{pattern:RegExp(`%[qQiIwWs]?`+n),greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:`heredoc-string`,greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:t,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:`heredoc-string`,greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp(`%x`+n),greedy:!0,inside:{interpolation:t,command:{pattern:/[\s\S]+/,alias:`string`}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:t,command:{pattern:/[\s\S]+/,alias:`string`}}}]}),delete e.languages.ruby.string,e.languages.insertBefore(`ruby`,`number`,{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),e.languages.rb=e.languages.ruby})(Prism),(function(e){for(var t=`\\/\\*(?:[^*/]|\\*(?!\\/)|\\/(?!\\*)|<self>)*\\*\\/`,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return`[^\\s\\S]`}),e.languages.rust={comment:[{pattern:RegExp(`(^|[^\\\\])`+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:`attr-name`,inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:`punctuation`},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:`symbol`},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:`punctuation`},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:`function`},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:`class-name`},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:`namespace`},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:`namespace`,inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:`property`},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust[`closure-params`].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism),Prism.languages.go=Prism.languages.extend(`clike`,{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore(`go`,`string`,{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go[`class-name`],(function(e){var t=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,n=[{pattern:/\b(?:false|true)\b/i,alias:`boolean`},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],r=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,i=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,a=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:`important`},comment:t,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:`class-name`},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:`function`},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:`type-casting`,greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:`type-hint`,greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:`return-type`,greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:`type-declaration`,greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:`type-declaration`,greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:`static-context`,greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:`class-name-fully-qualified`,greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:`class-name-fully-qualified`,greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:`class-name-fully-qualified`,greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:`type-declaration`,greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:[`class-name-fully-qualified`,`type-declaration`],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:`static-context`,greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:[`class-name-fully-qualified`,`static-context`],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:`type-hint`,greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:[`class-name-fully-qualified`,`type-hint`],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:`return-type`,greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:[`class-name-fully-qualified`,`return-type`],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:r,operator:i,punctuation:a};var o={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},s=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:`nowdoc-string`,greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:`symbol`,inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:`heredoc-string`,greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:`symbol`,inside:{punctuation:/^<<<"?|[";]$/}},interpolation:o}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:`backtick-quoted-string`,greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:`single-quoted-string`,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:`double-quoted-string`,greedy:!0,inside:{interpolation:o}}];e.languages.insertBefore(`php`,`variable`,{string:s,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:t,string:s,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:`class-name`,greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:[`class-name`,`class-name-fully-qualified`],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,number:r,operator:i,punctuation:a}},delimiter:{pattern:/^#\[|\]$/,alias:`punctuation`}}}}),e.hooks.add(`before-tokenize`,function(t){/<\?/.test(t.code)&&e.languages[`markup-templating`].buildPlaceholders(t,`php`,/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)}),e.hooks.add(`after-tokenize`,function(t){e.languages[`markup-templating`].tokenizePlaceholders(t,`php`)})})(Prism),(function(e){function t(e,t){return`___`+e.toUpperCase()+t+`___`}Object.defineProperties(e.languages[`markup-templating`]={},{buildPlaceholders:{value:function(n,r,i,a){if(n.language===r){var o=n.tokenStack=[];n.code=n.code.replace(i,function(e){if(typeof a==`function`&&!a(e))return e;for(var i=o.length,s;n.code.indexOf(s=t(r,i))!==-1;)++i;return o[i]=e,s}),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,r){if(n.language!==r||!n.tokenStack)return;n.grammar=e.languages[r];var i=0,a=Object.keys(n.tokenStack);function o(s){for(var c=0;c<s.length&&!(i>=a.length);c++){var l=s[c];if(typeof l==`string`||l.content&&typeof l.content==`string`){var u=a[i],d=n.tokenStack[u],f=typeof l==`string`?l:l.content,p=t(r,u),m=f.indexOf(p);if(m>-1){++i;var h=f.substring(0,m),g=new e.Token(r,e.tokenize(d,n.grammar),`language-`+r,d),_=f.substring(m+p.length),v=[];h&&v.push.apply(v,o([h])),v.push(g),_&&v.push.apply(v,o([_])),typeof l==`string`?s.splice.apply(s,[c,1].concat(v)):l.content=v}}else l.content&&o(l.content)}return s}o(n.tokens)}}})})(Prism);var wg=n(((e,t)=>{var n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,o=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},s=(e,t,o,s)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let c of i(t))!a.call(e,c)&&c!==o&&n(e,c,{get:()=>t[c],enumerable:!(s=r(t,c))||s.enumerable});return e},c=e=>s(n({},`__esModule`,{value:!0}),e),l={};o(l,{markdownItTable:()=>g}),t.exports=c(l);var u=/^ {0,3}(\d+\.|\*|-)$/,d=/^(?<space> {0,3})>/;function f(e){switch(e){case 9:case 32:return!0}return!1}function p(e,t){var n=e.bMarks[t]+e.blkIndent,r=e.eMarks[t];return e.src.substr(n,r-n)}function m(e){var t=[],n=0,r=e.length,i,a=0,o=0,s=!1,c=0;for(i=e.charCodeAt(n);n<r;)i===96?s?(s=!1,c=n):a%2==0&&(s=!0,c=n):i===124&&a%2==0&&!s&&(t.push(e.substring(o,n)),o=n+1),i===92?a++:a=0,n++,n===r&&s&&(s=!1,n=c+1),i=e.charCodeAt(n);return t.push(e.substring(o)),t}function h(e,t,n,r){var i,a,o,s,c,l,h,g,_,v,y;if(t+2>n||(c=t+1,e.sCount[c]<e.blkIndent)||e.sCount[c]-e.blkIndent>=4||(o=e.bMarks[c]+e.tShift[c],o>=e.eMarks[c])||(i=e.src.charCodeAt(o++),i!==124&&i!==45&&i!==58))return!1;for(;o<e.eMarks[c];){if(i=e.src.charCodeAt(o),i!==124&&i!==45&&i!==58&&!f(i))return!1;o++}for(a=p(e,t+1),l=a.split(`|`),_=[],s=0;s<l.length;s++){if(v=l[s].trim(),!v){if(s===0||s===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(v))return!1;v.charCodeAt(v.length-1)===58?_.push(v.charCodeAt(0)===58?`center`:`right`):v.charCodeAt(0)===58?_.push(`left`):_.push(``)}if(a=p(e,t).trim(),a.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4||(l=m(a.replace(/^\||\|$/g,``)),h=l.length,h>_.length))return!1;if(r)return!0;for(g=e.push(`table_open`,`table`,1),g.map=[t,0],g=e.push(`tr_open`,`tr`,1),g.map=[t,t+1],s=0;s<l.length;s++)g=e.push(`th_open`,`th`,1),g.map=[t,t+1],_[s]&&(g.attrs=[[`style`,`text-align:`+_[s]]]),g=e.push(`paragraph_open`,`p`,1),g=e.push(`inline`,``,0),g.content=l[s].trim(),g.map=[t,t+1],g.children=[],g=e.push(`paragraph_close`,`p`,-1),g=e.push(`th_close`,`th`,-1);for(g=e.push(`tr_close`,`tr`,-1),g.map=y=[t+2,0],c=t+2;c<n&&!(e.sCount[c]<e.blkIndent||(a=p(e,c).trim(),a.indexOf(`|`)===-1)||e.sCount[c]-e.blkIndent>=4);c++){l=m(a.replace(/^\||\|$/g,``)),g=e.push(`tr_open`,`tr`,1);for(let t=0,n=1;t<l.length;t++){g=e.push(`td_open`,`td`,1),_[t]&&(g.attrs=[[`style`,`text-align:`+_[t]]]);let r=0,i;(i=d.exec(l[t]))?r=i.groups.space.length:(i=u.exec(l[t]))&&(r=i.input.length),e.bMarks[c]+=n+e.tShift[c]+r,e.tShift[c]=0,e.sCount[c]=0,n=(l[t]||``).length+1,e.eMarks[c]=e.bMarks[c]+n-r-1,e.lineMax=1,e.md.block.tokenize(e,c,c+1),g=e.push(`td_close`,`td`,-1)}g=e.push(`tr_close`,`tr`,-1)}return g=e.push(`table_close`,`table`,-1),y[1]=c,e.line=c,!0}var g=(e,t)=>{e.block.ruler.before(`paragraph`,`table`,h,{alt:[`paragraph`,`reference`]})}})),Tg=n(((e,t)=>{var n=!0,r=!1,i=!1;t.exports=function(e,t){t&&(n=!t.enabled,r=!!t.label,i=!!t.labelAfter),e.core.ruler.after(`inline`,`github-task-lists`,function(e){for(var t=e.tokens,r=2;r<t.length;r++)s(t,r)&&(c(t[r],e.Token),a(t[r-2],`class`,`task-list-item`+(n?``:` enabled`)),a(t[o(t,r-2)],`class`,`contains-task-list`))})};function a(e,t,n){var r=e.attrIndex(t),i=[t,n];r<0?e.attrPush(i):e.attrs[r]=i}function o(e,t){for(var n=e[t].level-1,r=t-1;r>=0;r--)if(e[r].level===n)return r;return-1}function s(e,t){return p(e[t])&&m(e[t-1])&&h(e[t-2])&&g(e[t])}function c(e,t){if(e.children.unshift(l(e,t)),e.children[1].content=e.children[1].content.slice(3),e.content=e.content.slice(3),r)if(i){e.children.pop();var n=`task-item-`+Math.ceil(1e4*1e3*Math.random()-1e3);e.children[0].content=e.children[0].content.slice(0,-1)+` id="`+n+`">`,e.children.push(f(e.content,n,t))}else e.children.unshift(u(t)),e.children.push(d(t))}function l(e,t){var r=new t(`html_inline`,``,0),i=n?` disabled="" `:``;return e.content.indexOf(`[ ] `)===0?r.content=`<input class="task-list-item-checkbox"`+i+`type="checkbox">`:(e.content.indexOf(`[x] `)===0||e.content.indexOf(`[X] `)===0)&&(r.content=`<input class="task-list-item-checkbox" checked=""`+i+`type="checkbox">`),r}function u(e){var t=new e(`html_inline`,``,0);return t.content=`<label>`,t}function d(e){var t=new e(`html_inline`,``,0);return t.content=`</label>`,t}function f(e,t,n){var r=new n(`html_inline`,``,0);return r.content=`<label class="task-list-item-label" for="`+t+`">`+e+`</label>`,r.attrs=[{for:t}],r}function p(e){return e.type===`inline`}function m(e){return e.type===`paragraph_open`}function h(e){return e.type===`list_item_open`}function g(e){return e.content.indexOf(`[ ] `)===0||e.content.indexOf(`[x] `)===0||e.content.indexOf(`[X] `)===0}})),Eg={class:`ai-chat-inner`},Dg={class:`chat-container`},Og={class:`message-content`},kg={key:0,class:`message-avatar assistant-avatar`},Ag=[`innerHTML`],jg={key:1,class:`message-avatar user-avatar`},Mg={class:`chat-input-container`},Ng={class:`chat-input`},Pg=[`disabled`],Fg=[`disabled`],Ig={key:0,class:`w-6 h-6`,xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},Lg={key:1},Rg={key:2},zg=Lt(O({__name:`AIChat`,setup(e){let t=w(`aiChatSiteContext`)||{pages:[],totalPages:0},n=typeof window<`u`&&window.__AI_CHAT_OPTIONS||{},r=b([]),i=b(``),a=b([{role:`assistant`,content:`你好！我是文档智能助手，有关于本文档的任何问题都可以问我。`,displayContent:`你好！我是文档智能助手，有关于本文档的任何问题都可以问我。`}]),s=b(!1),l=b(!1),u=b(null),d=b(``),f=je(),p=G(),m=Te();o(()=>{let e=window.location.pathname;d.value=`vuepress-reco-chat-${e}`,v()});let _=()=>{if(typeof window<`u`&&window.localStorage){let e=a.value.map(e=>({...e,content:e.content||e.displayContent||``,displayContent:e.displayContent||e.content||``}));window.localStorage.setItem(d.value,JSON.stringify(e))}},v=()=>{if(typeof window<`u`&&window.localStorage){let e=window.localStorage.getItem(d.value);if(e)try{let t=JSON.parse(e);a.value=t.map(e=>({...e,content:e.content||e.displayContent||``,displayContent:e.displayContent||e.content||``})).filter(e=>e.content.trim()!==``)}catch(e){console.error(`加载聊天历史失败:`,e)}}};U(a,()=>{_()},{deep:!0});let y=async()=>{let e=i.value.trim();if(!(!e||s.value)){a.value.push({role:`user`,content:e,displayContent:e}),i.value=``,s.value=!0,await h(),N();try{let t={role:`assistant`,content:`正在思考...`,displayContent:`正在思考...`};a.value.push(t),l.value=!0;let n=await S(e,e=>{e&&(t.content=t.content===`正在思考...`?e:t.content+e,t.displayContent=t.content,N())});if(n)t.content=n,t.displayContent=n;else if(t.content===`正在思考...`){let n=await C(e);t.content=n,t.displayContent=n}}catch(e){let t=`抱歉，我遇到了一些问题，请稍后再试。`;e instanceof Error&&(e.message.includes(`network`)||e.message.includes(`fetch`)?t=`网络连接错误。请检查您的网络连接并重试。`:(e.message.includes(`API`)||e.message.includes(`key`))&&(t=`API密钥错误或权限不足。请检查您的API设置。`),console.error(`AI回复错误:`,e));let n=a.value[a.value.length-1];n&&n.role===`assistant`&&n.content===`正在思考...`?(n.content=t,n.displayContent=t):a.value.push({role:`assistant`,content:t,displayContent:t})}finally{s.value=!1,l.value=!1,_()}}},x=e=>{if(console.log(`搜索查询:`,e),console.log(`可用文档数量:`,t.pages?.length||0),console.log(`文档索引ID:`,t.indexId||`未知`),!t||!t.pages||!t.pages.length)return console.log(`没有可用的文档内容`),{relevantPages:[]};let n=e.toLowerCase().split(/[,.?!;:\n]/).filter(e=>e.trim().length>0),i=new Set;e.trim().length>0&&i.add(e.toLowerCase().trim()),n.forEach(e=>{let t=e.trim();t.length>=2&&i.add(t),(e.match(/[\u4e00-\u9fa5]+/g)||[]).forEach(e=>{if(e.length>=1&&i.add(e),e.length>=2)for(let t=0;t<e.length;t++){let n=e.charAt(t);[`系`,`列`,`配`,`置`,`文`,`档`,`主`,`题`,`插`,`件`,`页`,`标`,`组`,`件`].includes(n)&&i.add(n)}if(e.length>=3)for(let t=0;t<e.length-1;t++){let n=e.substring(t,t+2);i.add(n)}}),(e.match(/[a-zA-Z]+/g)||[]).forEach(e=>{e.length>=2&&i.add(e)}),(e.match(/[a-zA-Z0-9_\-.]+/g)||[]).forEach(e=>{e.length>=2&&/[0-9_\-.]/.test(e)&&i.add(e)})});let a=Array.from(i);if(console.log(`提取的关键词:`,a),a.length===0)if(console.log(`没有提取到关键词，使用完整查询`),e.length>=2)a.push(e.toLowerCase());else return console.log(`查询过短，无法匹配`),{relevantPages:[]};console.log(`处理后的关键词:`,Array.from(i));let o=t.pages.map(t=>{let r=t.title.toLowerCase(),i=t.summary.toLowerCase(),o=(t.content||``).toLowerCase(),s=(t.tags||[]).map(e=>e.toLowerCase()),c=(t.headings||[]).map(e=>e.text.toLowerCase()),l=0,u=[];r.includes(e.toLowerCase())?(l+=50,u.push(`标题完全匹配[+50]`)):r.includes(e.toLowerCase().replace(/\s+/g,``))&&(l+=45,u.push(`标题匹配无空格查询[+45]`));let d=e.toLowerCase().trim().split(/\s+/);if(d.length===1&&d[0].length>=1){let e=d[0];if(r.includes(e)){let t=e.length/r.length,n=Math.min(40,Math.round(40*t));l+=n,u.push(`标题部分匹配[+${n}]`)}}return o.includes(e.toLowerCase())&&(l+=30,u.push(`内容完全匹配[+30]`)),a.forEach(e=>{if(r.includes(e)){let t=Math.min(20,Math.max(5,e.length*3));l+=t,u.push(`标题包含关键词"${e}"[+${t}]`)}let t=c.filter(t=>t.includes(e)).length;if(t>0){let n=t*10;l+=n,u.push(`${t}个子标题包含"${e}"[+${n}]`)}i.includes(e)&&(l+=8,u.push(`摘要包含"${e}"[+8]`));let n=0,a=o.indexOf(e);for(;a!==-1;){let t=(a===0||!/[a-zA-Z0-9\u4e00-\u9fa5]/.test(o.charAt(a-1)))&&(a+e.length===o.length||!/[a-zA-Z0-9\u4e00-\u9fa5]/.test(o.charAt(a+e.length)));n+=t?1.5:1,a=o.indexOf(e,a+1)}if(n>0){let t=Math.min(n*(2+Math.min(3,e.length/2)),20);l+=t,u.push(`内容包含"${e}"${n}次[+${t.toFixed(1)}]`)}s.some(t=>t.includes(e))&&(l+=5,u.push(`标签包含"${e}"[+5]`))}),n.forEach(e=>{if(e.length>=3){let t=e.trim().toLowerCase();if(o.includes(t)){let n=Math.min(15,5+e.length);l+=n,u.push(`内容包含完整短语"${t}"[+${n}]`)}}}),l>0&&console.log(`页面"${t.title}"得分:${l}，匹配详情:`,u),{...t,score:l,matchDetails:u}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score);return o.length===0&&e.trim().length>=1&&(console.log(`没有找到精确匹配，尝试模糊匹配`),o=t.pages.map(t=>{let n=t.title.toLowerCase(),r=(t.content||``).toLowerCase(),i=(t.headings||[]).map(e=>e.text.toLowerCase()),a=0,o=[],s=e.toLowerCase().trim();for(let e=0;e<s.length;e++){let t=s.charAt(e);/[\u4e00-\u9fa5]/.test(t)&&(n.includes(t)&&(a+=8,o.push(`标题包含汉字"${t}"[+8]`)),i.some(e=>e.includes(t))&&(a+=5,o.push(`子标题包含汉字"${t}"[+5]`)),r.includes(t)&&(a+=3,o.push(`内容包含汉字"${t}"[+3]`)))}if(s.length>=2)for(let e=0;e<s.length-1;e++){let t=s.substring(e,e+2);n.includes(t)&&(a+=10,o.push(`标题包含"${t}"[+10]`)),r.includes(t)&&(a+=5,o.push(`内容包含"${t}"[+5]`))}return a>0&&console.log(`模糊匹配: 页面"${t.title}"得分:${a}，匹配详情:`,o),{...t,score:a,matchDetails:o}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score)),o=o.slice(0,5),console.log(`找到相关文档:`,o.length),o.forEach((e,t)=>{console.log(`文档 ${t+1}:`,e.title,`得分:`,e.score)}),r.value=o,console.log(`搜索结果已存储:`,r.value.length,`条记录`),{relevantPages:o}},S=async(e,r)=>{try{let i=M();if(!i)return console.warn(`未配置DeepSeek API密钥，使用备用响应`),C(e);let o=p.value.title,s=p.value.description,c=f.value.title,l=f.value.path,{relevantPages:u}=x(e),d=``;u.length>0?(d=`以下是与用户问题相关的文档内容 (索引ID: ${t.indexId||`未知`}):\n`,u.forEach((e,t)=>{d+=`\n------- 文档 ${t+1} -------\n`,d+=`标题: ${e.title}\n路径: ${e.path}\n`,e.tags&&e.tags.length>0&&(d+=`标签: ${e.tags.join(`, `)}\n`),e.headings&&e.headings.length>0&&(d+=`
文档结构:
`,e.headings.forEach(e=>{let t=`  `.repeat(e.level-1);d+=`${t}- ${e.text}\n`})),d+=`\n完整内容:\n${e.content}\n`}),d+=`

请根据以上文档内容回答用户的问题。如果文档中没有相关信息，请说明这一点。`):d=`未找到与用户问题直接相关的文档内容。`;let m={model:n.model||`deepseek-chat`,messages:[{role:`system`,content:`你是${o}文档网站的AI助手。你的职责是基于文档内容准确回答用户问题。

当前站点信息:
- 站点名称: ${o}
- 站点描述: ${s}
- 用户当前浏览页面: ${c} (${l})

指导原则:
1. 你必须严格基于提供给你的文档内容回答问题，不要自行编造信息
2. 如果文档中包含了用户问题的直接答案，请引用该内容并清晰地解释
3. 如果文档中没有直接相关内容，请基于最相关的文档部分进行推断和解释
4. 强调重点内容，使用代码示例或列表增强可读性
5. 回答应简洁清晰，直接解决用户问题

${d}

请根据上述文档内容，提供准确、具体、有帮助的回答。如果需要展示代码，请使用正确的代码格式。回答使用中文。`},...a.value.map(e=>({role:e.role,content:e.content})),{role:`user`,content:e}],temperature:n.temperature||.7,max_tokens:n.maxTokens||2e3,stream:!0},h=await fetch(`https://api.deepseek.com/v1/chat/completions`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${i}`},body:JSON.stringify(m)});if(!h.ok){let e=await h.json();throw Error(`API错误: ${e.error?.message||`未知错误`}`)}if(!h.body)throw Error(`响应体为空`);let g=h.body.getReader(),_=new TextDecoder(`utf-8`),v=``,y=``;for(;;){let{done:e,value:t}=await g.read();if(e)break;let n=_.decode(t,{stream:!0});y+=n;let i=y.split(`
`);y=i.pop()||``;for(let e of i)if(e.trim()!==``&&e.trim()!==`data: [DONE]`)try{let t=e.replace(/^data: /,``),n=JSON.parse(t).choices[0]?.delta?.content||``;n&&(v+=n,r&&r(n))}catch(t){console.error(`解析流数据错误:`,t,e)}}return v}catch(t){return console.error(`DeepSeek API调用失败:`,t),t instanceof Error&&console.error(`API错误详情:`,t.message,t.stack),t instanceof TypeError&&t.message.includes(`fetch`)?`网络连接错误。请检查您的网络连接并重试。`:C(e)}},C=async e=>{await new Promise(e=>setTimeout(e,1e3));let{relevantPages:n}=x(e);if(n.length>0){let e=`[基于文档内容 - 索引ID: ${t.indexId||`未知`}] 根据我在文档中找到的信息：\n\n`,r=n[0];return e+=`来自《${r.title}》的内容:\n${r.summary}\n\n`,n.length>1&&(e+=`您可能还对以下页面感兴趣：
`,n.slice(1).forEach((t,n)=>{e+=`- [${t.title}](${t.path})\n`})),e}let r=p.value.title;return f.value.title,e.toLowerCase().includes(`主题`)||e.toLowerCase().includes(`theme`)?`vuepress-theme-reco是一款简洁的vuepress博客和文档主题。它提供了博客、分类、标签、时间轴等功能，非常适合构建个人博客或项目文档。`:e.toLowerCase().includes(`插件`)||e.toLowerCase().includes(`plugin`)?`vuepress-theme-reco支持多种插件，包括评论插件、页面插件、vue-previews插件和bulletin-popover插件等。您可以在文档中查看更详细的插件使用说明。`:e.toLowerCase().includes(`模块`)||e.toLowerCase().includes(`module`)?`vuepress-theme-reco的首页由多个可配置模块组成，包括Banner、BannerBrand、Blog、MdContent、Comment、Footer和Features等。您可以通过frontmatter.modules来自定义显示哪些模块以及它们的顺序。`:e.toLowerCase().includes(`如何`)||e.toLowerCase().includes(`how`)?"要开始使用vuepress-theme-reco主题，您可以通过以下命令初始化项目：```bash\npnpm install @vuepress-reco/theme-cli@1.0.7 -g\ntheme-cli init\n```然后按照提示选择2.x版本进行安装。":`[通用回复] 关于"${e}"的问题，我建议您查看${r}的官方文档获取更详细的信息。如果您有更具体的问题，请随时询问我！`},E=new Sg({html:!0,linkify:!0,typographer:!0,breaks:!0,highlight:function(e,t){let n=(t||``).toLowerCase(),r=n&&Cg.default.languages[n]?n:null;if(r)try{return Cg.default.highlight(e,Cg.default.languages[r],r)}catch(e){console.error(`Prism高亮错误:`,e)}return e}});try{let e=wg();E.use(e)}catch{}try{let e=Tg();E.use(e,{enabled:!0,label:!0})}catch{}let D=E.renderer.rules.link_open||function(e,t,n,r,i){return i.renderToken(e,t,n)};E.renderer.rules.link_open=function(e,t,n,r,i){let a=e[t].attrIndex(`class`);a<0?e[t].attrPush([`class`,`external-link`]):e[t].attrs&&e[t].attrs[a]&&e[t].attrs[a][1]&&(e[t].attrs[a][1]+=` external-link`);let o=e[t].attrIndex(`href`);if(o>=0&&e[t].attrs){let n=e[t].attrs[o];n&&n[1]&&/^https?:\/\//.test(n[1])&&(e[t].attrPush([`target`,`_blank`]),e[t].attrPush([`rel`,`noopener noreferrer`]))}return D(e,t,n,r,i)};let O=e=>{if(!e)return``;try{return`<div class="vuepress-markdown-body">${E.render(e)}</div>`}catch(t){console.error(`Markdown渲染失败:`,t);let n=e.replace(/```(\w*)\n([\s\S]*?)```/g,(e,t,n)=>{let r=t||`text`,i=(r||``).toLowerCase(),a=i&&i!==`text`&&Cg.default.languages[i]?i:null;if(a)try{return`<div class="language-${a} ext-${a} line-numbers-mode"><pre class="language-${a}"><code>${Cg.default.highlight(n,Cg.default.languages[a],a)}</code></pre></div>`}catch(e){console.error(`Prism高亮错误:`,e)}return`<div class="language-${r} ext-${r} line-numbers-mode"><pre class="language-${r}"><code>${n.replace(/\n/g,`<br>`).replace(/\s/g,`&nbsp;`)}</code></pre></div>`});return n=n.replace(/`([^`]+)`/g,`<code class="inline-code">$1</code>`),n=n.replace(/^#{1,6}\s+(.+)$/gm,(e,t)=>{let n=e.trim().split(` `)[0].length;return`<h${n} class="vuepress-heading">${t}</h${n}>`}),n=n.replace(/^\s*[-*+]\s+(.+)$/gm,`<li class="vuepress-list-item">$1</li>`),n=n.replace(/(<li[^>]*>.*<\/li>)+/g,`<ul class="vuepress-list">$&</ul>`),n=n.replace(/\n\n/g,`</p><p class="vuepress-paragraph">`),n=n.replace(/\n/g,`<br>`),n.startsWith(`<`)||(n=`<p class="vuepress-paragraph">${n}</p>`),`<div class="vuepress-markdown-body">${n}</div>`}},M=()=>{let e=m.value.aiChat||{},t=n.apiKey,r=``;return typeof window<`u`&&window.localStorage&&(r=window.localStorage.getItem(`deepseek-api-key`)||``),e.apiKey||t||r||``},N=()=>{u.value&&(u.value.scrollTop=u.value.scrollHeight)};return o(()=>{N(),a.value=[{role:`assistant`,content:`你好！我是Vuepress Reco文档智能助手，有什么可以帮到你的？`,displayContent:`你好！我是Vuepress Reco文档智能助手，有什么可以帮到你的？`}]}),(e,t)=>(A(),j(`section`,Eg,[P(`div`,Dg,[P(`div`,{class:`chat-messages`,ref_key:`chatMessagesRef`,ref:u},[(A(!0),j(I,null,k(a.value,(e,n)=>(A(),j(`div`,{key:n,class:g([`message`,e.role===`user`?`user-message`:`assistant-message`])},[P(`div`,Og,[e.role===`assistant`?(A(),j(`div`,kg,[...t[1]||=[P(`span`,{class:`robot-icon`},`🤖`,-1)]])):T(``,!0),P(`div`,{class:`message-text`,innerHTML:O(e.displayContent||e.content)},null,8,Ag),e.role===`user`?(A(),j(`div`,jg,[...t[2]||=[P(`span`,{class:`user-icon`},`👤`,-1)]])):T(``,!0)])],2))),128))],512),P(`div`,Mg,[P(`div`,Ng,[c(P(`input`,{type:`text`,"onUpdate:modelValue":t[0]||=e=>i.value=e,onKeyup:ae(y,[`enter`]),placeholder:`有什么问题都可以问我...`,disabled:s.value||l.value},null,40,Pg),[[te,i.value]]),P(`button`,{onClick:y,disabled:s.value||l.value||!i.value.trim()},[!s.value&&!l.value?(A(),j(`svg`,Ig,[...t[3]||=[P(`g`,{fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[P(`path`,{d:`M10 14L21 3`}),P(`path`,{d:`M21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3`})],-1)]])):l.value?(A(),j(`span`,Lg,`回复中...`)):(A(),j(`span`,Rg,`处理中...`))],8,Fg)])])])]))}}),[[`__scopeId`,`data-v-3e796f42`]]),Bg={class:`ai-chat-button-container`},Vg={key:0,class:`ai-chat-window`},Hg={class:`ai-chat-window-header`},Ug={class:`header-buttons`},Wg={class:`ai-chat-window-body`},Gg=O({__name:`AIChatButton`,setup(e){let t=b(!1),n=b(null),r=()=>{t.value=!t.value},i=()=>{n.value&&n.value.clearChatHistory&&n.value.clearChatHistory()},a=e=>{let n=e.target,r=document.querySelector(`.ai-chat-button-container`);t.value&&r&&!r.contains(n)&&(t.value=!1)},s=()=>{window.innerWidth<768&&t.value&&(t.value=!1)};return o(()=>{document.addEventListener(`click`,a),window.addEventListener(`resize`,s)}),V(()=>{document.removeEventListener(`click`,a),window.removeEventListener(`resize`,s)}),U(t,e=>{e?document.body.classList.add(`ai-chat-open`):document.body.classList.remove(`ai-chat-open`)}),(e,a)=>{let o=d(`Xicons`);return A(),j(`div`,Bg,[P(`div`,{class:`ai-chat-floating-button`,onClick:r},` 🤖 `),t.value?(A(),j(`div`,Vg,[P(`div`,Hg,[F(o,{icon:`VolumeUp`,"icon-size":`20`,text:`🤖 ${e.bulletin?.title||`AI Assistant`}`,color:`#fff`,"text-size":`16`},null,8,[`text`]),P(`div`,Ug,[(A(),j(`svg`,{class:`btn-new-chat`,onClick:i,xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},[...a[0]||=[P(`g`,{fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[P(`circle`,{cx:`12`,cy:`12`,r:`9`}),P(`path`,{d:`M9 12h6`}),P(`path`,{d:`M12 9v6`})],-1)]])),(A(),j(`svg`,{class:`btn-close icon`,onClick:r,t:`1573745677073`,viewBox:`0 0 1024 1024`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,"p-id":`4448`,width:`22`,height:`22`},[...a[1]||=[P(`path`,{d:`M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0`,"p-id":`4449`},null,-1)]]))])]),P(`div`,Wg,[F(zg,{ref_key:`chatInstance`,ref:n},null,512)])])):T(``,!0)])}}}),Kg={pages:[{path:`/README.html`,title:`初始化，并选择 2.x`,summary:`::: tip 前往  体验全新可视化搭建脚手架。 ::: **npx** **npm** **yarn**`,content:`## 快速开始

::: tip
前往 [这里](/docs/guide/gui-builder.html) 体验全新可视化搭建脚手架。
:::

**npx**

\`\`\`bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
\`\`\`

**npm**

\`\`\`bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
\`\`\`

**yarn**

\`\`\`bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
\`\`\``,headings:[{level:2,text:`快速开始`},{level:1,text:`初始化，并选择 2.x`},{level:1,text:`初始化，并选择 2.x`},{level:1,text:`初始化，并选择 2.x`}],tags:[],categories:[]},{path:`/blogs/about.html`,title:`vuepress-theme-reco`,summary:`::: tip 介绍 1. 这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；<br> 2. 主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；<br> 3. 你可以打开  来查看效果。 :::  是基于  的博客主题。  功能比较简单，只适合书写简单的文档，但好在支持主题自定义，而个人又希望能够用它来书写博客，原因就是它足够的简洁，毫无疑问，这也符合很多程序员的观念，也就是在这种情况下， 的第一个版本经过一个通宵而产生。 主题开源不久，很多朋友通过各种联系方式，给到很多好的意见和建议，所以我个人也在积极地更新。 因为我是一名前端开发工程师，开发的过程中，总是想着能不能加入一些炫酷的效果，有很多次都是添加上又去掉，反反复复，最后都是被 **简洁** 的这个原则阻止掉，毕竟，现在我是将它当作一个产品来看待，并不是一个技术或者是技巧的尝试项目。 随着不断有用户过来询问：为什么  不能在  上使用？本来只是打算对  进行简单的bug修复的我，终究还是忍不住，开始了  的开发。又是在一个寂静的凌晨两点半（晚上就是出活快），我默默地开...`,content:`[图片]
[图片]
[图片]

::: tip 介绍
1. 这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；<br>
2. 主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；<br>
3. 你可以打开 [午后南杂](https://www.recoluan.com) 来查看效果。
:::

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` 是基于 \`vuepress@0.x\` 的博客主题。

\`vuepress@0.x\` 功能比较简单，只适合书写简单的文档，但好在支持主题自定义，而个人又希望能够用它来书写博客，原因就是它足够的简洁，毫无疑问，这也符合很多程序员的观念，也就是在这种情况下，\`vuepress-theme-reco@0.x\` 的第一个版本经过一个通宵而产生。

主题开源不久，很多朋友通过各种联系方式，给到很多好的意见和建议，所以我个人也在积极地更新。

因为我是一名前端开发工程师，开发的过程中，总是想着能不能加入一些炫酷的效果，有很多次都是添加上又去掉，反反复复，最后都是被 **简洁** 的这个原则阻止掉，毕竟，现在我是将它当作一个产品来看待，并不是一个技术或者是技巧的尝试项目。

### 1.x

随着不断有用户过来询问：为什么 \`vuepress-theme-reco@0.x\` 不能在 \`vuepress@1.x\` 上使用？本来只是打算对 \`vuepress-theme-reco@0.x\` 进行简单的bug修复的我，终究还是忍不住，开始了 \`vuepress-theme-reco@1.x\` 的开发。又是在一个寂静的凌晨两点半（晚上就是出活快），我默默地开始了。

主题升级的关键也就是 \`@vuepress/plugin-blog\` 这款官方插件，它不需要再去麻烦地过滤数据，将分类和标签的相关信息直接存在 \`$categories\` 和 \`$tags\` 这两个全局变量中。借助于 \`@vuepress/plugin-blog\`，分类和标签功能更容易实现，但也有了一些局限。接下来两三天的时间，都是在进行功能的迁移和一些bug的修复。

\`vuepress-theme-reco@1.x\` 的开发中，更加深刻地明白了模块化和组件化编程的重要性，如果当初没有把一些功能进行封装，而是直接简单的复制，这次升级也不会这么顺利。模块拆分的越细，使用就会越灵活。

### CLI

还是衷心地希望能有更多的朋友参与进来，更快地去完善它。接下来时间允许的情况下，我会开源一款自动生成博客的脚手架，略过配置步骤，直接书写优质内容，这也是我后来逐渐形成的一种信念，就是希望能让这款主题，功能越完善，使用越来越简单。

### Contribute

**衷心感谢为此项目贡献过宝贵代码的朋友们**

|昵称|贡献记录|
|:-:|-|
|[kangxu](https://github.com/kangxukangxu)|[vuepress-theme-reco@0.x](https://github.com/recoluan/vuepress-theme-reco/commit/ec7426a88d50cf8d9f90a7ad9b731a10da7f438b)|
|[Ekko](https://github.com/danranVm)|[vuepress-theme-reco-demo@1.x](https://github.com/recoluan/vuepress-theme-reco-demo/commit/6d2bbe919e7f6564b8c8173558d197e38e024dc5)|

**衷心感谢美女设计师**


|昵称|贡献内容|
|:-:|-|
|[Zoey]()|主题图标调整定稿|
|冰冰|主题图标初稿|

## Preview

[图片]

[图片]

[图片]

[图片]

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,headings:[{level:2,text:`Play Together`},{level:3,text:`0.x`},{level:3,text:`1.x`},{level:3,text:`CLI`},{level:3,text:`Contribute`},{level:2,text:`Preview`},{level:2,text:`License`}],tags:[],categories:[`blog`]},{path:`/blogs/deploy.html`,title:`确保脚本抛出遇到的错误`,summary:`> 这里我们只介绍 GitLab 和 GitHub 的 pages 功能的部署。 打开项目设置的  模块，将  设置为 ，这样我们就可以将博客项目放在  分支，而部署到  分支。 在根目录建一个  文件： ::: warning 如果你用的 MAC，在项目根目录借助  执行  即可；如果你使用的是 WINDOWS，在项目根目录借助  执行  即可。 :::  的自动部署需要借助  。 1. 打开 ，使用  登录； 2. 进入设置页面，点击  按钮，将需要自动部署的项目导入进来； 3. 项目列表中，项目后面有一个  按钮，点击进去将进行配置：    1. 获取 ：进入github的设置页面，点击  按钮，点击  按钮，在当前页面生成 ，名字随便写，只是起到区分作用；    2. 配置 ：将上面生成的  添加在项目的设置页面的 ，切记，名字不可随便写，在这里你写成 ；    3. 配置 ：（如果你的项目就在  分支，可以不用配置这里） 选择 你存放项目源码的分支， 选择 ， 选择 ，添加成功后便会生效。 4. 在根目录下创建 （）：      5. 现在去提交一下代码试试吧，在你提交成功后...`,content:"> 这里我们只介绍 GitLab 和 GitHub 的 pages 功能的部署。\n\n## GitHub\n\n打开项目设置的 `GitHub Pages` 模块，将 `Source` 设置为 `gh-pages`，这样我们就可以将博客项目放在 `master` 分支，而部署到 `gh-pages` 分支。\n\n### 手动部署\n\n在根目录建一个 `deploy.sh` 文件：\n\n```bash\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io\n# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\n\ncd -\n```\n\n::: warning\n如果你用的 MAC，在项目根目录借助 `终端` 执行 `bash deploy.sh` 即可；如果你使用的是 WINDOWS，在项目根目录借助 `Git Bash` 执行 `bash deploy.sh` 即可。\n:::\n\n### 自动部署\n\n`GitHub` 的自动部署需要借助 `travis-ci` 。\n\n1. 打开 [travis-ci](https://travis-ci.com/)，使用 `GitHub` 登录；\n2. 进入设置页面，点击 `Manage repositories on GitHub` 按钮，将需要自动部署的项目导入进来；\n3. 项目列表中，项目后面有一个 `settings` 按钮，点击进去将进行配置：\n   1. 获取 `token`：进入github的设置页面，点击 `Developer settings` 按钮，点击 `Personal access tokens` 按钮，在当前页面生成 `token`，名字随便写，只是起到区分作用；\n   2. 配置 `token`：将上面生成的 `token` 添加在项目的设置页面的 `Environment Variables`，切记，名字不可随便写，在这里你写成 `GITHUB_TOKEN`；\n   3. 配置 `Cron Jobs`：（如果你的项目就在 `master` 分支，可以不用配置这里）`Branch` 选择 你存放项目源码的分支，`Interval` 选择 `monthly`，`Options` 选择 `Always run`，添加成功后便会生效。\n4. 在根目录下创建 `.travis.yml`（[配置规范](https://docs.travis-ci.com/user/deployment/pages/)）：\n    ```yml\n    language: node_js\n    node_js:\n      - lts/*\n    script:\n      - npm run build\n    deploy:\n      provider: pages\n      skip-cleanup: true\n      local_dir: docs/.vuepress/dist # 项目打包后生成的文件的目录\n      github-token: $GITHUB_TOKEN # 这里这个变量就是刚才配置 token 时填写的那个变量\n      keep-history: true\n      on:\n        branch: master # 项目源码所在的分支\n    ```\n5. 现在去提交一下代码试试吧，在你提交成功后 `travis-ci` 的控制台就能看到你的项目在部署了。\n\n## GitLab\n\n### 手动部署\n\n1. 设置输出目录为 `public`：\n\n   由于 `GitLab` 的 `pages` 功能的指定文件夹是 `public`，所以我们要将项目的输出目录改为 `public`，也就是将 `config.js` 的 `dest` 设置为 `public`；\n\n2. 本地编译，然后将项目提交到 `GitLab` 即可。\n\n### 自动部署\n\n1. 设置输出目录为 `public`；\n2. 由于 `GitLab` 自带 CI，所以就省去了很多的配置步骤，只需要在项目根目录创建 `.gitlab-ci.yml`（[配置规范](https://docs.gitlab.com/ee/ci/yaml/README.html)）：\n    ```yml\n    image: node:9.11.1\n\n    pages:\n      cache:\n        paths:\n        - node_modules/ # 缓存 node_modules，加速编译\n\n      script:\n      - npm install\n      - npm run docs:build\n      artifacts:\n        paths:\n        - public\n      only:\n      - master\n    ``` \n3. 将项目提交到 `GitLab` 即可。",headings:[{level:2,text:`GitHub`},{level:3,text:`手动部署`},{level:1,text:`确保脚本抛出遇到的错误`},{level:1,text:`生成静态文件`},{level:1,text:`进入生成的文件夹`},{level:1,text:`如果是发布到自定义域名`},{level:1,text:`echo 'www.example.com' > CNAME`},{level:1,text:`如果发布到 https://<USERNAME>.github.io`},{level:1,text:`git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master`},{level:1,text:`如果发布到 https://<USERNAME>.github.io/<REPO>`},{level:1,text:`git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages`},{level:3,text:`自动部署`},{level:2,text:`GitLab`},{level:3,text:`手动部署`},{level:3,text:`自动部署`}],tags:[],categories:[`blog`]},{path:`/blogs/github-actions-secret-key.html`,title:`如何在 GitHub Actions 时使用 secretKey`,summary:`当我参考，使用  自动部署的时候发现要使用 Secret Key 去使用  评论功能，我就犯愁了。 直接写在  里虽说并没有谁会盗用（吧 😃），但显然不太安全。这是原 workflow 文件中下面这段启发了我。其他的变量难道也可以这样传到服务器上？ 果然  早就帮我们想好了解决办法。 -  简单说就是在对应 repo 的  区域里输入。 **注意⚠️**：上图中画圈的位置的 , 正确的英语语法是 , 不过这篇教程统一用 , 和下面的 也得一致! ~~英语好的朋友别嘲讽在下 😵~~ 再在  里用 去取，通过  存入服务器的环境变量。就可以用啦 👻。 做个实验。 里加上这样一段。 输出下图这样的结果。github 把结果加密了，不过可以发现，有设置的  和没有设置的 ， 出来是不一样的。由此可见，已经设置成功了。 直接试试吧。 在  之前加上环境参数那一段。 再在  内用 node 的语法去环境参数取就 OK 啦！ 结果是评论功能可以使用了呀 😍。 - 完整的  请参考我的  看起来一个小步骤但解决了大问题呢 💃。 --- :::tip 本文作者 ，博客 。 :::`,content:`## 如何在 GitHub Actions 时使用 secretKey

### 问题

当我参考[这篇](https://www.lasy.site/views/%E5%89%8D%E7%AB%AF/%E4%BD%BF%E7%94%A8%20GitHub%20Actions%20%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2.html)，使用 \`Github Action\` 自动部署的时候发现要使用 Secret Key 去使用 \`VSSUE\` 评论功能，我就犯愁了。

直接写在 \`config\` 里虽说并没有谁会盗用（吧 😃），但显然不太安全。这是原 workflow 文件中下面这段启发了我。其他的变量难道也可以这样传到服务器上？

\`\`\`yaml
with:
  ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }}
\`\`\`

### 解决方法

果然 \`Github\` 早就帮我们想好了解决办法。

- [Creating and storing encrypted secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)

简单说就是在对应 repo 的 \`Secrets\` 区域里输入。

[图片]

**注意⚠️**：上图中画圈的位置的 \`A\`, 正确的英语语法是 \`AN\`, 不过这篇教程统一用 \`A\`, 和下面的

\`\`\`
\${{ secrets.THIS_IS_A_EXAMPLE }}
\`\`\`

也得一致!

~~英语好的朋友别嘲讽在下 😵~~

再在 \`actions\` 里用

\`\`\`
\${{ secrets.YOURKEY }}
\`\`\`

去取，通过 \`env\` 存入服务器的环境变量。就可以用啦 👻。

做个实验。\`main.yaml\` 里加上这样一段。

\`\`\`yaml{2,3,4}
- name: Pass Variables
  env:
    EXAMPLE: \${{ secrets.THIS_IS_A_EXAMPLE }}
    NOTEXIST: \${{ secrets.NOT_EXIST }}
  run: echo 'try to show secret 😉' && echo $EXAMPLE && echo $NOT_EXIST
\`\`\`

输出下图这样的结果。github 把结果加密了，不过可以发现，有设置的 \`THIS_IS_A_EXAMPLE\` 和没有设置的 \`NOT_EXIST\`，\`echo\` 出来是不一样的。由此可见，已经设置成功了。

[图片]

### 实施

直接试试吧。

\`\`\`yaml
- name: Build
  env:
    VSSUEID: \${{ secrets.VSSUEID }}
    VSSUESECRET: \${{ secrets.VSSUESECRET }}
  run: npm install && npm run build
\`\`\`

在 \`npm run build\` 之前加上环境参数那一段。

\`\`\`js
  vssueConfig: {
    platform: 'github',
    owner: 'xyyolab',
    repo: 'blog',
    clientId: process.env.VSSUEID,
    clientSecret: process.env.VSSUESECRET
  }
\`\`\`

再在 \`config\` 内用 node 的语法去环境参数取就 OK 啦！

结果是评论功能可以使用了呀 😍。

[图片]

- 完整的 \`main.yaml\` 请参考我的 [Github](https://github.com/xyyolab/blog/blob/master/.github/workflows/main.yml)

看起来一个小步骤但解决了大问题呢 💃。

---

:::tip
本文作者 [xyh 🐸](https://github.com/xyyolab)，博客 [xyh 🐸](https://blog.xyyolab.com)。
:::`,headings:[{level:2,text:`如何在 GitHub Actions 时使用 secretKey`},{level:3,text:`问题`},{level:3,text:`解决方法`},{level:3,text:`实施`}],tags:[`Github Actions`,`Secret Key`],categories:[`blog`]},{path:`/blogs/github-actions.html`,title:`使用 GitHub Actions 自动部署博客`,summary:`本篇以  Github Pages 为例，并且假设你已经掌握了 GitHub Pages 的使用。 假设你的文章和静态文件在同一个仓库，使用  分支管理文章和代码，使用  分支存放生成的静态文件 一般部署博客的流程是： 1. 写一篇文章 2. 生成静态文件： 3. 切换  分支 4. 复制静态文件到  分支 5. 访问网址验证是否成功 博客就是用来写文章的，每次写篇文章还要搞那么多操作。 当你使用了 GitHub Actions 之后，流程可以简化为： 1. 写一篇文章 2. 提交到 GitHub 结束了，是不是很方便？ 从机械的流程中解脱，专注于写作。 那么开始打造我们的 GitHub Actions 吧。 我创建了一个在我的 GitHub 仓库，用的是 VuePress（一个 Vue 官方的静态站点生成器）。 后面部署的 Action 需要有操作你的仓库的权限，因此提前设置好 GitHub personal access（个人访问令牌）。 生成教程可以看 GitHub 官方的帮助文档：。 授予权限的时候只给  权限即可。 令牌名字一定要叫：，这是后面的 Action 需要用的。 >...`,content:`# 使用 GitHub Actions 自动部署博客

本篇以  Github Pages 为例，并且假设你已经掌握了 GitHub Pages 的使用。

假设你的文章和静态文件在同一个仓库，使用 \`master\` 分支管理文章和代码，使用 \`gh-pages\` 分支存放生成的静态文件

一般部署博客的流程是：

1. 写一篇文章
2. 生成静态文件：\`npm run build\`
3. 切换 \`gh-pages\` 分支
4. 复制静态文件到 \`gh-pages\` 分支
5. 访问网址验证是否成功

博客就是用来写文章的，每次写篇文章还要搞那么多操作。

当你使用了 GitHub Actions 之后，流程可以简化为：

1. 写一篇文章
2. 提交到 GitHub

结束了，是不是很方便？

从机械的流程中解脱，专注于写作。

那么开始打造我们的 GitHub Actions 吧。

我创建了一个[示例项目](https://github.com/LasyIsLazy/gh-pages-Actions-demo)在我的 GitHub 仓库，用的是 VuePress（一个 Vue 官方的静态站点生成器）。

## 设置 Secrets

后面部署的 Action 需要有操作你的仓库的权限，因此提前设置好 GitHub personal access（个人访问令牌）。

生成教程可以看 GitHub 官方的帮助文档：[创建用于命令行的个人访问令牌](https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)。

授予权限的时候只给 \`repo\` 权限即可。

[图片]

令牌名字一定要叫：\`ACCESS_TOKEN\`，这是后面的 Action 需要用的。

[图片]

## 编写 workflow 文件

> 持续集成一次运行的过程，就是一个 workflow（工作流程）。

项目结构如图：

[图片]

创建\`.github/workflows/main.yml\`文件（可以到我的[示例仓库](https://github.com/LasyIsLazy/gh-pages-action-demo/blob/master/.github/workflows/main.yml)中查看），内容如下：

\`\`\`yml
name: Deploy GitHub Pages

# 触发条件：在 push 到 master 分支后
on:
  push:
    branches:
      - master

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 生成静态文件
      - name: Build
        run: npm install && npm run docs:build

      # 部署到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: docs/.vuepress/dist

\`\`\`

这里我就不对语法作讲解了，需要了解 workflow 的基本语法可以查看[官方帮助](https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)，也可以参考[阮一峰老师的 GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)。

这里我写了三步：

1. 拉取代码。用到了一个 GitHub 官方 action：\`actions/checkout\` 。
2. 生成静态文件。直接运行脚本，如果你不是用的 VuePress 或者脚本不一样，要修改成你自己的。
3. 部署到 GitHub Pages。使用了第三方作者的 action：\`JamesIves/github-pages-deploy-action@releases/v3\`。我详细介绍下这个 action：

使用 \`with\` 参数向环境中传入了三个环境变量：

1. \`ACCESS_TOKEN\`：读取 GitHub 仓库 secrets 的 \`ACCESS_TOKEN\` 变量，也就是我们前面设置的
2. \`BRANCH\`：部署分支 \`gh-pages\`（GitHub Pages 读取的分支）
3. \`FOLDER\`：需要部署的文件在 \`docs/.vuepress/dist\` 路径，也就是我们使用 \`npm run docs:build\` 生成的静态文件的位置

> 这里有一点需要注意：我使用的是 \`v3\` 版本，需要使用 \`with\` 参数传入环境变量，且需要自行构建；网上常见的教程使用的是 \`v2\` 版本，使用 \`env\` 参数传入环境变量，不需要自行构建，可使用 \`BUILD_SCRIPT\` 环境变量传入构建脚本

至此，配置工作均已完成。提交你的代码，就会开启自动构建。

以后，你每次有代码 push 到 \`master\` 分支时，GitHub 都会开始自动构建。

## 验证

### 部署失败

按照教程是不会失败的，但是建议你了解下失败的情况。

如果部署失败你会收到一封部署失败的邮件

[图片]

点击可以跳转到仓库的 Action 页面查看日志

[图片]

展开错误的部署 job 查看日志

[图片]

可以看到有这么一个错误日志：\`No such file or directory\`，经排查，是没有生成静态文件，因此导致路径不存在。

> 我这个错误是由于参考了网上常见的教程导致的。网上大部分教程（包括前面提到的阮一峰老师的教程）使用的是：\`JamesIves/github-pages-deploy-action\` 的 \`v2\` 版本，然而引用的时候写的都是：\`JamesIves/github-pages-deploy-action@master\`，引用的 \`master\` 分支。在作者写的时候可能当时这个 action 最新的就是 \`v2\` 版本，所以没有什么问题。然而现在 \`master\` 分支已经是 \`v3\` 版本了，语法有变化，完全按照教程就会出错。如果继续使用他的教程可以改成\`JamesIves/github-pages-deploy-action@releases/v2\`。

修复后重新提交，GitHub 会再次部署。

### 部署成功

点击仓库的 Actions，查看部署情况。

如果正在部署中，应该是图中标出的这个样子。

[图片]

这里显示所有的部署（应该叫做 *Workflow*，便于理解，就叫 *部署* 了）记录。图中有三种状态，分别是：部署中（黄色动态图标）、部署完成（绿色对号图标）、部署失败（红色错号图标）。

点击进入查看部署情况。

[图片]

部署成功，全是绿色~

接下来访问网站验证一下：[https://lasyislazy.github.io/gh-pages-action-demo/](https://lasyislazy.github.io/gh-pages-action-demo/)

[图片]

完美结束，享受 GitHub Actions 带来的愉快体验吧~

## 其他

鉴于还是有很多人不是用的 GitHub Pages，我这里再提供一下其他方式的思路，其实都是一样的，大概分成三步：

1. 拉取代码
2. 生成静态文件
3. 部署到服务器

前两步都是一样的，不同的方式区别也就在于第三步。

使用 GitHub Pages 的话可以使用 \`JamesIves/github-pages-deploy-action\` 这个 action，使用其他的方式其实也可以找到对应的 action。

例如，我的网站是部署在虚拟主机空间上的，平时部署是用 FTP 的方式替换主机空间上的静态文件，因此找到了一个可以部署到 FTP 上的 acton \`SamKirkland/FTP-Deploy-Action\`，然后第三步就变为了：

\`\`\`yaml
      - name: FTP Deploy
        uses: SamKirkland/FTP-Deploy-Action@2.0.0
        env:
          FTP_SERVER: xxx.xxx.com
          FTP_USERNAME: xxxx
          FTP_PASSWORD: \${{ secrets.BLOG_FTP_PASSWORD }}
          LOCAL_DIR: docs/.vuepress/dist
          REMOTE_DIR: /htdocs
          ARGS: --delete --transfer-all --exclude=logreport --verbose
\`\`\`

一般都是传一些环境变量进去就可以了，需要哪些环境变量去这个 action 的 GitHub 上看下介绍就好了。

最后再说一下怎么找 action，以下是几个常用的网址：

- [https://github.com/actions](https://github.com/actions)：GitHub 官方的 action
- [https://github.com/marketplace?type=actions](https://github.com/marketplace?type=actions)：GitHub 官方市场中的 action
- [https://github.com/sdras/awesome-actions](https://github.com/sdras/awesome-actions)：第三方收集的有用的 action

然后就是要利用好搜索引擎了。

实在找不到就得自己写 action 了，本篇就不讨论了。



以上便是本篇教程全部内容，本篇首发于我的个人博客：[https://www.lasy.site/](https://www.lasy.site/)


:::tip
本文作者 [Lasy](https://github.com/LasyIsLazy)，博客 [Lasy](https://www.lasy.site)。
:::

参考链接：

- [https://help.github.com/en/github/working-with-github-pages/about-github-pages](https://help.github.com/en/github/working-with-github-pages/about-github-pages)
- [https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions](https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)`,headings:[{level:1,text:`使用 GitHub Actions 自动部署博客`},{level:2,text:`设置 Secrets`},{level:2,text:`编写 workflow 文件`},{level:1,text:`触发条件：在 push 到 master 分支后`},{level:1,text:`任务`},{level:2,text:`验证`},{level:3,text:`部署失败`},{level:3,text:`部署成功`},{level:2,text:`其他`}],tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},{path:`/blogs/lookroot.html`,title:`感谢 lookroot 对于主题推广的贡献`,summary:`lookroot 近期在 B 站的  的使用教程中，细致地针对 reco 主题的使用进行了讲解，在此非常感谢 lookroot 为主题推广所做的贡献，也希望大家多多关注这位大牛。 <iframe src="//player.bilibili.com/player.html?aid=583145008&cid=191619036&page=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>`,content:`lookroot 近期在 B 站的 \`vuepress\` 的使用教程中，细致地针对 reco 主题的使用进行了讲解，在此非常感谢 lookroot 为主题推广所做的贡献，也希望大家多多关注这位大牛。

<iframe src="//player.bilibili.com/player.html?aid=583145008&cid=191619036&page=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>`,headings:[],tags:[],categories:[`blog`]},{path:`/blogs/one-year-old.html`,title:`vuepress-theme-reco 一周岁`,summary:`不知不觉， 已经一周岁了，静下心来回想这个过程，过程是美好的，结果也是美好的。 <!-- more --> 从开始的每天只有个位数的人次下载，到目前每天几百次的下载量；从无人问津，到目前活跃的评论社区和主题交流群（加  微信进群），还有几位朋友积极地贡献代码，提供丰富的想法，主题在朝着一个美好的前方前进，倍感欣慰。 做主题，是从为公司搭建文档平台开始，到后来是想着可以做一个博客或文档的解决方案，一切还只是个爱好而已。而目前使用的朋友越来越多，还有一些专业人士在关注，我就会不自觉的去考虑我现在做的这一步是不是对的，是不是完美的（当然并不完美）。 并且因为有了稳定贡献代码的朋友的加入，开发速度在加快，开发需求同样也在增多，我要时时刻刻去考虑下面要去做什么，可能更多的是因为自己能力还差很多，在项目管理的经验上也有不足，所以压力瞬间多了好多。 在赶着把  发版之后，感觉就像被掏空一样，毕竟这个项目不是工作，需要牺牲很多的上班之外的休息和学习时间。 熟悉主题的朋友都知道，我在这个版本中积极地去尝试插件化，可以让用户自由去组合主题的风格和功能，但是实际上目前只是实现了首页的自定义，离想象的样子还差...`,content:`不知不觉，\`vuepress-theme-reco\` 已经一周岁了，静下心来回想这个过程，过程是美好的，结果也是美好的。

<!-- more -->

## 1

从开始的每天只有个位数的人次下载，到目前每天几百次的下载量；从无人问津，到目前活跃的评论社区和主题交流群（加 \`reco_luan\` 微信进群），还有几位朋友积极地贡献代码，提供丰富的想法，主题在朝着一个美好的前方前进，倍感欣慰。

## 2

做主题，是从为公司搭建文档平台开始，到后来是想着可以做一个博客或文档的解决方案，一切还只是个爱好而已。而目前使用的朋友越来越多，还有一些专业人士在关注，我就会不自觉的去考虑我现在做的这一步是不是对的，是不是完美的（当然并不完美）。

并且因为有了稳定贡献代码的朋友的加入，开发速度在加快，开发需求同样也在增多，我要时时刻刻去考虑下面要去做什么，可能更多的是因为自己能力还差很多，在项目管理的经验上也有不足，所以压力瞬间多了好多。

## 3

在赶着把 \`1.1.0\` 发版之后，感觉就像被掏空一样，毕竟这个项目不是工作，需要牺牲很多的上班之外的休息和学习时间。

熟悉主题的朋友都知道，我在这个版本中积极地去尝试插件化，可以让用户自由去组合主题的风格和功能，但是实际上目前只是实现了首页的自定义，离想象的样子还差很远，所以 **\`插件化\`** 还有很多工作要做，这可能也是下面主要的工作方向。

除了插件化，主题还有更多的功能要去丰富，道路阻且长啊。

## 4

不管怎么样，在此还是想感谢目前参与开发的所有朋友，人多力量大、想法多，结果必然是美好的，未来也将会是一段不错的经历，不是吗？`,headings:[{level:2,text:`1`},{level:2,text:`2`},{level:2,text:`3`},{level:2,text:`4`}],tags:[],categories:[`blog`]},{path:`/blogs/valine-admin.html`,title:`Valine Admin 后台搭建(修订)`,summary:`::: tip Valine Admin 是 Valine 评论系统的扩展和增强，主要实现评论邮件通知、评论管理、垃圾评论过滤等功能。支持完全自定义的邮件通知模板，基于Akismet API实现准确的垃圾评论过滤。 开发者   ::: 在云引擎-->部署界面，填写代码库并保存： > 也可以使用我根据的项目改写的地址： ，改编版本内容介绍请。 <br /> <img src="https://i.loli.net/2020/07/19/BCxjLA68ZOEtID7.png" alt="填写代码库" width="600" style="display: block;margin: auto" /> <br /> <img src="https://i.loli.net/2020/07/19/53bpWmS2MAJIXf9.png" alt="填写代码库" width="600" style="display: block;margin: auto" /> <img src="https://i.loli.net/2020/07/19/qZBdJPEmLzx5Oo6.png" alt="...`,content:`::: tip
Valine Admin 是 Valine 评论系统的扩展和增强，主要实现评论邮件通知、评论管理、垃圾评论过滤等功能。支持完全自定义的邮件通知模板，基于Akismet API实现准确的垃圾评论过滤。

开发者  [@Deserts](https://deserts.io/)
:::


## 云引擎"一键"部署
### 1. 填写代码库
在[Leancloud](https://leancloud.cn/dashboard/#/apps)云引擎-->部署界面，填写代码库并保存：[https://github.com/DesertsP/Valine-Admin.git](https://github.com/DesertsP/Valine-Admin.git)


> 也可以使用我根据[@Deserts](https://deserts.io/)的项目改写的地址： [https://github.com/ComicAuthor/Valine-Admin](https://github.com/ComicAuthor/Valine-Admin)，改编版本内容介绍请[点击](#改编版本内容介绍)。

<br />
<img src="https://i.loli.net/2020/07/19/BCxjLA68ZOEtID7.png" alt="填写代码库" width="600" style="display: block;margin: auto" />
<br />
<img src="https://i.loli.net/2020/07/19/53bpWmS2MAJIXf9.png" alt="填写代码库" width="600" style="display: block;margin: auto" />

### 2.在设置页面，设置环境变量以及 Web 二级域名。
<img src="https://i.loli.net/2020/07/19/qZBdJPEmLzx5Oo6.png" alt="设置环境变量" width="600" style="display: block;margin: auto" />

具体格式如下：
|       变量       |        示例          |               说明|
|:----------------:|:------------------:|:---------------------:|
|    SITE_NAME     |                  平凡的你我                  |                                                         [必填]博客名称                                                         |
|     SITE_URL     | [https://reinness.com](https://reinness.com) |                                                         [必填]首页地址                                                         |
| **SMTP_SERVICE** |                    "163"                     | [新版支持]邮件服务提供商，支持 QQ、163、126、Gmail 以及 [**更多**](https://nodemailer.com/smtp/well-known/#supported-services) |
|    SMTP_USER     |                xxxxx@163.com                 |                                                       [必填]SMTP登录用户                                                       |
|    SMTP_PASS     |                   XXXXXXXX                   |                                          [必填]SMTP登录密码（QQ邮箱需要获取独立密码）                                          |
|   SENDER_NAME    |                    caleb                     |                                                          [必填]发件人                                                          |
|   SENDER_EMAIL   |                xxxxx@163.com                 |                                                         [必填]发件邮箱                                                         |
|  BLOGGER_EMAIL   |                xxxxx@163.com                 |               [可选]如果自己在回复，设置这个可以不向自己的邮箱发送邮件 && 博主通知收件地址，默认使用SENDER_EMAIL               |
|    ADMIN_URL     |           https://xxx.leanapp.cn/            |                                              [建议]Web主机二级域名，用于自动唤醒                                               |
|   AKISMET_KEY    |                 xxxxxxxxxxxx                 |                      [可选]Akismet Key 用于垃圾评论检测，设为MANUAL_REVIEW开启人工审核，留空不使用反垃圾                       |

**以上必填参数请务必正确设置。**

### 3.切换到部署标签页，分支使用master，点击部署即可
<img src="https://i.loli.net/2020/07/19/Gl28hq1UsHZ6F9L.png" alt="部署" width="600" style="display: block;margin: auto" />

第一次部署可能会需要些时间。

<img src="https://i.loli.net/2020/07/19/icCQWGbaAlNdjPB.png" alt="部署日志" width="600" style="display: block;margin: auto" />

### 4.评论管理
#### ~~访问设置的二级域名\`https://二级域名.leanapp.cn/sign-up\` ，注册管理员登录信息，如：[https://nk6vtvs0tdwc.leanapp.cn/sign-up](https://nk6vtvs0tdwc.leanapp.cn/sign-up)~~


:::tip
按照LeanCould下发的通知，华北和华东地区不再提供共享的域名。所以华北、华东的用户需要自行绑定域名(需要已经备案过的域名)。如果没有自己的域名呢，也可以直接使用国际版，但是只会提供三个月的有效时间。过后还是得自行绑定域名。

详情参考 [LeanCloud Blog | 域名绑定 Q&A](https://leancloudblog.com/domain-question-answers/)
:::


国际版域名配置,输入你想自定义的名称即可。

<img src="https://i.loli.net/2020/07/19/whs3c5oJ6qpEdxb.png" alt="域名配置" width="600" style="display: block;margin: auto" />


::: warning
注：使用原版Valine如果遇到注册页面不显示直接跳转至登录页的情况，请手动删除_User表中的全部数据。

如果发现页面并没有跳转，请在域名后加上 \`/sign-up\`
:::

<img src="https://i.loli.net/2020/07/19/Cn1hvLGEcQmgsXl.png" alt="注册页" width="600" style="display: block;margin: auto" />

### 5.定时任务设置

**目前实现了两种云函数定时任务:**
::: tip
(1)自动唤醒，定时访问Web APP二级域名防止云引擎休眠；

(2)每天定时检查24小时内漏发的邮件通知。
:::


**进入云引擎-定时任务中，创建定时器，创建两个定时任务。**

(1)选择self-wake云函数，Cron表达式为\`0 0/30 7-23 * * ?\`，表示每天早6点到晚23点每隔30分钟访问云引擎，ADMIN_URL环境变量务必设置正确：

<img src="https://i.loli.net/2020/07/19/jXduZSOi3QnRMo6.png" alt="self-wake云函数" width="600" style="display: block;margin: auto" />

(2)选择resend-mails云函数，Cron表达式为\`0 0 8 * * ?\`，表示每天早8点检查过去24小时内漏发的通知邮件并补发：

<img src="https://i.loli.net/2020/07/19/oIrpXniWRy9T5Zc.png" alt="resend-mails云函数" width="600" style="display: block;margin: auto" />

**添加定时器后记得点击启动方可生效。**

**至此，Valine Admin 已经可以正常工作。**

## 邮件通知模板
### 1.环境变量设定
邮件通知模板在云引擎环境变量中设定，可自定义通知邮件标题及内容模板。

| 环境变量            |                        示例                        |                            说明 |
|---------------------|:--------------------------------------------------:|--------------------------------:|
| MAIL_SUBJECT        | \${PARENT_NICK}，您在\${SITE_NAME}上的评论收到了回复 | [可选]@通知邮件主题（标题）模板 |
| MAIL_TEMPLATE       |                       见下文                       |         [可选]@通知邮件内容模板 |
| MAIL_SUBJECT_ADMIN  |              \${SITE_NAME}上有新评论了              |      [可选]博主邮件通知主题模板 |
| MAIL_TEMPLATE_ADMIN |                       见下文                       |      [可选]博主邮件通知内容模板 |


### 2.自定义模板
邮件通知包含两种，分别是 **被@通知** 和 **博主通知**，这两种模板都可以完全自定义。默认使用经典的蓝色风格模板。


@通知模板中的可用变量如下（注，这是邮件模板变量，是指嵌入到HTML邮件模板中的变量，请勿与云引擎环境变量混淆）

| 模板变量       |              说明               |
|----------------|:-------------------------------:|
| SITE_NAME      |            博客名称             |
| SITE_URL       |          博客首页地址           |
| POST_URL       |      文章地址（完整路径）       |
| PARENT_NICK    | 收件人昵称（被@者，父级评论人） |
| PARENT_COMMENT |          父级评论内容           |
| NICK           |          新评论者昵称           |
| COMMENT        |           新评论内容            |

**（1）默认被@通知邮件内容模板如下：**


\`\`\` html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"><h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在<a style="text-decoration:none;color: #12ADDB;" href="\${SITE_URL}" target="_blank">            \${SITE_NAME}</a>上的评论有了新的回复</h2> \${PARENT_NICK} 同学，您曾发表评论：<div style="padding:0 12px 0 12px;margin-top:18px"><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;">            \${PARENT_COMMENT}</div><p><strong>\${NICK}</strong>回复说：</p><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> \${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="\${POST_URL}" target="_blank">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb" href="\${SITE_URL}" target="_blank">\${SITE_NAME}</a>。<br></p></div></div>
\`\`\`
效果如图：
<img src="https://i.loli.net/2020/07/19/2g9lkajHZhczWL3.png" alt="默认主题" width="600" style="display: block;margin: auto" />

**（2）彩虹风格的@通知邮件模板代码：**

\`\`\` html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"><h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在<a style="text-decoration:none;color: #12ADDB;" href="\${SITE_URL}" target="_blank">            \${SITE_NAME}</a>上的评论有了新的回复</h2> \${PARENT_NICK} 同学，您曾发表评论：<div style="padding:0 12px 0 12px;margin-top:18px"><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;">            \${PARENT_COMMENT}</div><p><strong>\${NICK}</strong>回复说：</p><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> \${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="\${POST_URL}" target="_blank">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb" href="\${SITE_URL}" target="_blank">\${SITE_NAME}</a>。<br></p></div></div>
\`\`\`
效果如图：
<img src="https://i.loli.net/2020/07/19/pq9h1KPgynVSbIX.png" alt="彩虹风格" width="600" style="display: block;margin: auto" />


博主通知邮件模板中的可用变量与@通知中的基本一致，***PARENT_NICK*** 和 ***PARENT_COMMENT*** 变量不再可用。


**（3）默认博主通知邮件内容模板如下：**
\`\`\` html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"><h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在<a style="text-decoration:none;color: #12ADDB;" href="\${SITE_URL}" target="_blank">\${SITE_NAME}</a>上的文章有了新的评论</h2><p><strong>\${NICK}</strong>回复说：</p><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> \${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="\${POST_URL}" target="_blank">查看回复的完整內容</a><br></p></div></div>
\`\`\`
因为没使用过这个，所以就没挂图~~~

**（4）彩虹风格的博主通知邮件内容模板如下：**
\`\`\` html
<div style="border-radius: 10px 10px 10px 10px;font-size:13px;    color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);"><div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;"><p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;">您在<a style="text-decoration:none;color: #ffffff;"href="\${SITE_URL}">\${SITE_NAME}</a>上有新评论啦！</p></div><div style="margin:40px auto;width:90%"><p
// ... [代码块已截断]
\`\`\`
效果如图：
<img src="https://i.loli.net/2020/07/19/sNiR4QHFDjmqXGB.png" alt="彩虹风格" width="600" style="display: block;margin: auto" />


## 改编版本教程

## Qmsg酱

### 申请APPKey 

首先前往[**Qmsg酱官网**](https://qmsg.zendee.cn/),按照官方文档完成相应的注册。并添加「Qmsg酱」小姐姐为QQ好友。然后点击文档按钮。  

<img src="https://i.loli.net/2020/07/19/WPHmEcjfdzM7y9r.png" alt="个人中心" width="600" style="display: block;margin: auto" />

看到接口地址后将 \`send/\` 之后的内容复制下来，填写进 \`QMSG_KEY\` 变量中。

<img src="https://i.loli.net/2020/07/19/gc8Aad5ZmNP3fIk.png" alt="接口地址" width="600" style="display: block;margin: auto" />

### Qmsg模板

初始化模板样式如下：

<img src="https://i.loli.net/2020/07/19/tWilU9OCqAdbx6H.png" alt="QMSG_TEMPLATE" width="600" style="display: block;margin: auto" />

如果你并不不喜欢当前的样式，这里为您抛出了一些接口供您自定义模板：  

|   变量    |         说明         |
|:---------:|:--------------------:|
| SITE_NAME |    [可选]站点名称    |
|   NICK    |   [可选]评论者名称   |
|  comment  |    [必填]评论信息    |
| POST_URL  | [可选]对应的评论地址 |

**使用字符串拼接方法，将变量放入其中**

参考如下：
\`\`\` js
\`您在 \${SITE_NAME} 上有新评论啦！
\${NICK} 给您的回复如下：[CQ:emoji,id=11015]
           
    [CQ:face,id=12] \${comment}
        
您可以点击 \${POST_URL} 前去查看！\`
\`\`\`

同时您还可以使用QQ表情用来点缀您的信息模板。使用方法为 \`[CQ:face,id=XX]\` ,其中XX为下图的表情序号。

<img src="https://i.loli.net/2020/07/19/Sro5UpwiPBGHKsY.png" alt="表情" width="600" style="display: block;margin: auto" />

如果你觉得QQ表情不是特别好看的话，您可以使用QQ里面的emoji表情。使用方法为 \`[CQ:emoji,id=XX]\` ,其中XX为emoji表情序号。

[**emoji表情id查询地址**](https://cqp.cc/t/15827/)


### QQ戳一戳

如果想开启戳一戳提示的话，就设置true。

## Server酱

### 申请SC_KEY

首先前往[**Server酱官网**](https://sc.ftqq.com/3.version), 通过Github登录。点击 \`微信推送\` 完成微信绑定。

<img src="https://i.loli.net/2020/07/19/DpXSO96R8gFHCmk.png" alt="微信绑定" width="600" style="display: block;margin: auto" />

测试微信推送正常以后，点击 \`发送消息\` 进入页面。可以看到 \`SCKEY\` 复制粘贴到变量 \`SC_KEY\` 中。

<img src="https://i.loli.net/2020/07/19/mhfROXjAITVL58y.png" alt="查看SCKEY" width="600" style="display: block;margin: auto" />

### 消息 标题/内容 模板
 
初始化模板样式如下：

<img src="https://i.loli.net/2020/07/19/sCcjfIzUpvDdknh.png" alt="标题模板" width="600" style="display: block;margin: auto" />


### 自定义 标题/内容 模板 

抛出的接口： 

|   变量    |         说明         |
|:---------:|:--------------------:|
| SITE_NAME |    [可选]站点名称    |
|   NICK    |   [可选]评论者名称   |
|  COMMENT  |    [必填]评论信息    |
| POST_URL  | [可选]对应的评论地址 |

**使用字符串拼接方法，将变量放入其中**

消息标题模板参考：
\`\`\`js
\`您在 \${SITE_NAME} 上有新评论啦！\`
\`\`\`


消息内容模板参考：
\`\`\`js
\`#### \${NICK} 给您的回复如下：
        
> \${COMMENT}
        
#### 您可以点击[查看回复的完整內容](\${POST_URL})\`
\`\`\`

变量 \`SC_DESP_TEMPLATE\` 支持MarkDown。但是最大只有64K，请提前注意。

> 注意这里的 COMMENT 与 QQ消息模板中的 comment 并不相同，请注意分别。

## 改编版本内容介绍

**Version 1.0.2**
1. 增加了QQ提醒功能(Qmsg酱)
2. 增加了微信提醒功能(Server酱)

**Version 1.0.1**
1. 增加了用户头像的判断 QQ头像以及gravatar头像
2. 增加了分页插件
3. 增加了博主/全部列表的展示
4. 增加了返回顶部按钮
5. 不断升级中~~~

**以上所有内容供大家参考，有问题请及时指正，如有侵权，请及时联系删除**

:::tip
本文作者 [Caleb](https://github.com/ComicAuthor)，博客 [平凡的你我](https://reinness.com/)。
:::
### **完结撒花:tada::tada::tada:**`,headings:[{level:2,text:`云引擎"一键"部署`},{level:3,text:`1. 填写代码库`},{level:3,text:`2.在设置页面，设置环境变量以及 Web 二级域名。`},{level:3,text:`3.切换到部署标签页，分支使用master，点击部署即可`},{level:3,text:`4.评论管理`},{level:4,text:"~~访问设置的二级域名`https://二级域名.leanapp.cn/sign-up` ，注册管理员登录信息，如：[https://nk6vtvs0tdwc.leanapp.cn/sign-up](https://nk6vtvs0tdwc.leanapp.cn/sign-up)~~"},{level:3,text:`5.定时任务设置`},{level:2,text:`邮件通知模板`},{level:3,text:`1.环境变量设定`},{level:3,text:`2.自定义模板`},{level:2,text:`改编版本教程`},{level:2,text:`Qmsg酱`},{level:3,text:`申请APPKey`},{level:3,text:`Qmsg模板`},{level:3,text:`QQ戳一戳`},{level:2,text:`Server酱`},{level:3,text:`申请SC_KEY`},{level:3,text:`消息 标题/内容 模板`},{level:3,text:`自定义 标题/内容 模板`},{level:4,text:"您可以点击[查看回复的完整內容](${POST_URL})`"},{level:2,text:`改编版本内容介绍`},{level:3,text:`**完结撒花:tada::tada::tada:**`}],tags:[],categories:[`blog`]},{path:`/docs/message-board.html`,title:`留言板`,summary:`::: info 欢迎大家在此留下你的建议和意见，或者在  提交你的问题，或来  进行讨论。 :::`,content:`::: info
欢迎大家在此留下你的建议和意见，或者在 [GitHub Issue](https://github.com/vuepress-reco/vuepress-theme-reco) 提交你的问题，或来 [GitHub Discussions](https://github.com/vuepress-reco/vuepress-theme-reco/discussions) 进行讨论。
:::`,headings:[],tags:[],categories:[]},{path:`/en/README.html`,title:`Init，and choose 2.x`,summary:`::: tip Go to  to experience the new visual scaffolding. ::: **npx** **npm** **yarn**`,content:`## Quick Start

::: tip
Go to [here](/en/docs/guide/gui-builder.html) to experience the new visual scaffolding.
:::

**npx**

\`\`\`bash
# Init，and choose 2.x
npx @vuepress-reco/theme-cli init
\`\`\`

**npm**

\`\`\`bash
# Init，and choose 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
\`\`\`

**yarn**

\`\`\`bash
# Init，and choose 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
\`\`\``,headings:[{level:2,text:`Quick Start`},{level:1,text:`Init，and choose 2.x`},{level:1,text:`Init，and choose 2.x`},{level:1,text:`Init，and choose 2.x`}],tags:[],categories:[]},{path:`/docs/others/donate.html`,title:`打赏`,summary:`<hr /> ::: tip  是一款完全免费的开源  主题。 开始时的兴趣和后来的责任是我不断更新动力。 得到很多网友的称赞、祝福和贡献，真的非常开心(^▽^)。 如果你觉得主题还不错，可以为作者贡献一杯奶茶。 ::: |WeChat|AliPay| |-|-| |<img style="width: 160px" src="/wechat.png" />|<img style="width: 160px" src="/alipay.png" />| <hr/> |昵称|日期|金额|备注| |:-:|:-:|:-:|:-:| |*士|2024-05-02|20|期望reco项目越来越好，也希望未来能为它做出贡献！| |*亮|2024-04-13|10|加油，很不错| |z*y|2023-11-30|10|越来越好| |*助|2023-06-23|50|-| |*健|2023-05-22|30|感谢Reco| |*林|2023-02-23|6.66|给大佬递茶🍵| |*栀|2023-01-09|9.9|-| |S*m|2022-11-30|1|-| |啊*k|2022-10-10|6...`,content:`### 说明

<hr />

::: tip
\`vuepress-theme-reco\` 是一款完全免费的开源 \`vuepress\` 主题。

开始时的兴趣和后来的责任是我不断更新动力。

得到很多网友的称赞、祝福和贡献，真的非常开心(^▽^)。

如果你觉得主题还不错，可以为作者贡献一杯奶茶。
:::

|WeChat|AliPay|
|-|-|
|<img style="width: 160px" src="/wechat.png" />|<img style="width: 160px" src="/alipay.png" />|

### 打赏记录

<hr/>

|昵称|日期|金额|备注|
|:-:|:-:|:-:|:-:|
|*士|2024-05-02|20|期望reco项目越来越好，也希望未来能为它做出贡献！|
|*亮|2024-04-13|10|加油，很不错|
|z*y|2023-11-30|10|越来越好|
|*助|2023-06-23|50|-|
|*健|2023-05-22|30|感谢Reco|
|*林|2023-02-23|6.66|给大佬递茶🍵|
|*栀|2023-01-09|9.9|-|
|S*m|2022-11-30|1|-|
|啊*k|2022-10-10|6.6|能拉我进群吗QQ ***|
|啊*k|2022-10-09|8.88|大佬拉我进群***|
|*睿|2022-08-08|1.66|Support the reco.|
|*峰|2022-04-28|15|-|
|*W|2022-03-31|28.88|wx:xxx 想请教您|
|E*o|2022-03-14|5|支持一下|
|*松|2022-01-29|6.66|加油，感谢作者|
|*松|2022-01-29|10|-|
|**阳|2022-01-04|20|-|
|*芯|2021-12-26|1|-|
|*松|2021-12-13|20|感谢作者的耐心解答|
|*松|2021-12-10|30|请作者大佬喝杯奶茶|
|M*k|2021-12-06|8.88|加油(*￣m￣)✊|
|*。|2021-12-02|10|萌新不会用压根看不懂|
|*品|2021-10-07|4.5|-|
|Franklin 秦梓源|2021-07-22|6.66|-|
|**义|2021-10-20|6.66|期待2.0|
|*旺|2021-04-17|20|-|
|张*4|2021-04-16|5|望早日支持vitepress|
|L*n|2021-04-11|1|期待2.0|
|*猫|2021-04-09|8|支持|
|R*g|2021-04-09|10|设计针不错|
|*耀|2021-01-10|20|一杯奶茶 支持 reco|
|**根|2020-12-31|18|给大佬递茶|
|*生|2020-12-25|30|Reco 棒 期待广告插件|
|*来|2020-12-03|0.01|-|
|*递|2020-10-06|18|-|
|*美|2020-07-27|20|-|
|i*g|2020-07-16|6.66|感谢作者，请喝奶茶|
|*罡|2020-05-12|50|感谢theme-reco|
|K*n|2020-04-13|20|-|
|叫我詹躲躲|2020-03-23|8.88|一杯奶茶|
|王*豪|2019-12-25|20|茶水费|
|橘子|2019-07-12|15|coffee|`,headings:[{level:3,text:`说明`},{level:3,text:`打赏记录`}],tags:[],categories:[]},{path:`/docs/others/examples.html`,title:`案例`,summary:`::: tip 添加案例请点击  在最上面添加配置信息。（**要求：站点不可删除 footer 的主题推荐。**） ::: <examples />`,content:`::: tip
添加案例请点击 [这里](https://github.com/vuepress-reco/vuepress-theme-reco/edit/main/docs/.vuepress/data/examples.ts) 在最上面添加配置信息。（**要求：站点不可删除 footer 的主题推荐。**）
:::

<examples />`,headings:[],tags:[],categories:[]},{path:`/docs/plugins/bulletin-popover.html`,title:`公告插件`,summary:`::: warning 请注意：该插件内部的组件的样式并没有内置，需要手动设置。 :::`,content:`::: warning
请注意：该插件内部的组件的样式并没有内置，需要手动设置。
:::`,headings:[],tags:[],categories:[]},{path:`/docs/plugins/comments.html`,title:`评论插件`,summary:`::: warning 本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。 :::`,content:`::: warning
本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。
:::`,headings:[],tags:[],categories:[]},{path:`/docs/plugins/page.html`,title:`页面增强插件`,summary:`::: warning 本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。 :::`,content:`::: warning
本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。
:::`,headings:[],tags:[],categories:[]},{path:`/docs/plugins/vue-previews.html`,title:`vue 组件预览插件`,summary:`::: warning 本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。 :::`,content:`::: warning
本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。
:::`,headings:[],tags:[],categories:[]},{path:`/docs/guide/architecture.html`,title:`架构`,summary:`reco 主题 2.0，将不再是一个单纯的主题，更像是一个快速搭建 vuepress 主题的解决方案，或者叫做 。 它依赖  为主题扩展的页面，同时可以为特定页面注入分类、标签和分页的相关数据，并依赖其他插件默认为主题扩展一些必要功能。 reco 主题 2.0 最核心的功能就是提供了网站风格的插槽，允许通过  指定网站风格和主题的其他配置，reco 主题将会内置一些风格，比如 reco 主题 1.0 的两种风格，并在未来也会拓展更多的风格，同时允许开发者更加轻松地自定义属于自己的风格。   开发者可以按照  的规范，依赖 reco 主题强大的风格插槽，任意扩展页面路由和页面内容，虽然使用同一款主题，但是每个人都可以拥有属于自己的风格。`,content:`## 架构

[图片]

reco 主题 2.0，将不再是一个单纯的主题，更像是一个快速搭建 vuepress 主题的解决方案，或者叫做 \`容器\`。

它依赖 \`@vuepress-reco/vuepress-plugin-page\` 为主题扩展的页面，同时可以为特定页面注入分类、标签和分页的相关数据，并依赖其他插件默认为主题扩展一些必要功能。

reco 主题 2.0 最核心的功能就是提供了网站风格的插槽，允许通过 \`reco.config.js\` 指定网站风格和主题的其他配置，reco 主题将会内置一些风格，比如 reco 主题 1.0 的两种风格，并在未来也会拓展更多的风格，同时允许开发者更加轻松地自定义属于自己的风格。
 
## 主题风格

[图片]

开发者可以按照 \`风格 package\` 的规范，依赖 reco 主题强大的风格插槽，任意扩展页面路由和页面内容，虽然使用同一款主题，但是每个人都可以拥有属于自己的风格。`,headings:[{level:2,text:`架构`},{level:2,text:`主题风格`}],tags:[],categories:[]},{path:`/docs/guide/builtin-page.html`,title:`内置页面`,summary:`:::tip 主题内置了一些页面，这些页面是承载了特定功能的独立页面，可以用于丰富站点的功能，比如可以将页面入口放在  上。 如果想要注册页面，请参考 。 ::: **博客列表页面** - 路由： - 描述：独立的博客列表页，给文档站提供一个通过博客跟用户互动的能力 - 案例：    **时间轴页面** - 路由： - 描述：博客的时间轴，可以作为归档页面 - 案例：    **友情链接** - 路由： - 描述：友情链接 - 案例：    - 配置：`,content:`:::tip
主题内置了一些页面，这些页面是承载了特定功能的独立页面，可以用于丰富站点的功能，比如可以将页面入口放在 \`navabr\` 上。

如果想要注册页面，请参考 [这里](/docs/theme/pages.html)。
:::

**博客列表页面**

- 路由：\`/posts.html\`
- 描述：独立的博客列表页，给文档站提供一个通过博客跟用户互动的能力
- 案例：
  [图片]

**时间轴页面**

- 路由：\`/timeline.html\`
- 描述：博客的时间轴，可以作为归档页面
- 案例：
  [图片]

**友情链接**

- 路由：\`/friendship-link.html\`
- 描述：友情链接
- 案例：
  [图片]
- 配置：
  \`\`\`ts
  import { defineUserConfig } from 'vuepress'
  import { recoTheme } from 'vuepress-theme-reco'

  export default defineUserConfig({
    theme: recoTheme({
      friendshipLinks: [
        {
          title: 'vuepress-recovuepress-recovuepress-recovuepress-reco',
          logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
          link: 'https://github.com/vuepress-reco'
        }
      ]
    })
  })
  \`\`\``,headings:[],tags:[],categories:[]},{path:`/docs/guide/bundler.html`,title:`打包工具`,summary:`一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。你只需要通过  配置项指定打包工具即可： :::warning 因为  主题自改写了打包工具的默认配置，所以如果用户想要自定义打包工具的配置，需要借助  或 ，原来的  和  已无法生效。 :::`,content:`## 使用打包工具

一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。你只需要通过 \`bundler\` 配置项指定打包工具即可：

\`\`\`ts
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default {
  bundler: viteBundler(),
  // bundler: webpackBundler(),
}
\`\`\`

## 配置

:::warning
因为 \`reco\` 主题自改写了打包工具的默认配置，所以如果用户想要自定义打包工具的配置，需要借助 \`theme.viteBundlerOptions\` 或 \`theme.webpackBundlerOptions\`，原来的 \`viteBundler({})\` 和 \`webpackBundler({})\` 已无法生效。
:::

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    viteBundlerOptions: {
      viteOptions: {},
      vuePluginOptions: {},
    },
    // webpackBundlerOptions: {
    //   postcss: {},
    //   vue: {}
    // }
  })
})
\`\`\``,headings:[{level:2,text:`使用打包工具`},{level:2,text:`配置`}],tags:[],categories:[]},{path:`/docs/guide/contribute.html`,title:`安装`,summary:`欢迎大家为 reco 主题贡献代码！ 首先你需要 fork 一份 ，并 clone 到本地，并确保本地已经安装了 。 以上准备工作完成以后，进入项目文件夹，并执行以下命令： 这个时候，项目已经启动，你可以  中去测试你的功能，要确保你的代码已经经过详细测试，并通过了  命令，功能测试完一定要同步文档。 提交 commit 请使用  命令，严格按照规范去提交代码，commit 信息务必使用英文。 PR 标题简单明了，PR 详情中要详细描述你所提交的内容，必要时要贴图，PR 信息务必使用英文。`,content:`欢迎大家为 reco 主题贡献代码！

## 项目初始化

首先你需要 fork 一份 [reco 主题仓库](https://github.com/vuepress-reco/vuepress-theme-reco)，并 clone 到本地，并确保本地已经安装了 \`pnpm\`。

以上准备工作完成以后，进入项目文件夹，并执行以下命令：

\`\`\`bash
# 安装
pnpm install

# 编译
pnpm build

# 启动
pnpm dev
\`\`\`

这个时候，项目已经启动，你可以 \`example\` 中去测试你的功能，要确保你的代码已经经过详细测试，并通过了 \`pnpm example:build\` 命令，功能测试完一定要同步文档。

## 代码提交规范

提交 commit 请使用 \`pnpm commit\` 命令，严格按照规范去提交代码，commit 信息务必使用英文。

## PR 规范

PR 标题简单明了，PR 详情中要详细描述你所提交的内容，必要时要贴图，PR 信息务必使用英文。`,headings:[{level:2,text:`项目初始化`},{level:1,text:`安装`},{level:1,text:`编译`},{level:1,text:`启动`},{level:2,text:`代码提交规范`},{level:2,text:`PR 规范`}],tags:[],categories:[]},{path:`/docs/guide/custom-style.html`,title:`自定义样式`,summary:`如果需要对主题样式进行覆盖，只需要在  中书写需要覆盖的样式的即可，书写规范请参考 。`,content:"如果需要对主题样式进行覆盖，只需要在 `.vuepress/styles/index.css` 中书写需要覆盖的样式的即可，书写规范请参考 [指南/样式](/docs/guide/style)。",headings:[],tags:[],categories:[]},{path:`/docs/guide/folder-specification.html`,title:`文件夹规范`,summary:`:::warning reco 主题实现了博客的功能，但是 vuepress 没有办法区分博客或是文档，导致文档也会出现在博客区域，所以主题对博客和文档的存放位置进行了约束，博客文章请放在  文件夹中（强制），文档系列请放在  文件夹中（强制），普通文档请放在  中（不强制）。 :::`,content:":::warning\nreco 主题实现了博客的功能，但是 vuepress 没有办法区分博客或是文档，导致文档也会出现在博客区域，所以主题对博客和文档的存放位置进行了约束，博客文章请放在 `/blogs` 文件夹中（强制），文档系列请放在 `/series` 文件夹中（强制），普通文档请放在 `/docs` 中（不强制）。\n:::",headings:[],tags:[],categories:[]},{path:`/docs/guide/getting-started.html`,title:`初始化，并选择 2.x`,summary:`::: tip 前往  体验全新可视化搭建脚手架。 ::: **npx** **npm** **yarn**`,content:`## 快速开始

::: tip
前往 [这里](/docs/guide/gui-builder.html) 体验全新可视化搭建脚手架。
:::

**npx**

\`\`\`bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
\`\`\`

**npm**

\`\`\`bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
\`\`\`

**yarn**

\`\`\`bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
\`\`\`

## 手动安装

\`\`\`bash
npm install vuepress@next vuepress-theme-reco@next --save-dev

# or
yarn add vuepress@next vuepress-theme-reco@next
\`\`\`

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // options
  })
})
\`\`\``,headings:[{level:2,text:`快速开始`},{level:1,text:`初始化，并选择 2.x`},{level:1,text:`初始化，并选择 2.x`},{level:1,text:`初始化，并选择 2.x`},{level:2,text:`手动安装`},{level:1,text:`or`}],tags:[],categories:[]},{path:`/docs/guide/gui-builder.html`,title:`全局安装 revili`,summary:`:::warning 目前可视化搭建脚手架处于 alpha 阶段，功能比较简陋，仅用于尝鲜，欢迎大家前往  提出宝贵的建议。 ::: 主题的使用仍然有一定的门槛，为了方便新手快速入门，尤其是非前端开发者，reco 主题尝试基于  开发可视化搭建平台。`,content:`:::warning
目前可视化搭建脚手架处于 alpha 阶段，功能比较简陋，仅用于尝鲜，欢迎大家前往 [GitHub](https://github.com/vuepress-reco/revili-kit-vuepress-reco/issues) 提出宝贵的建议。
:::

## 简介

主题的使用仍然有一定的门槛，为了方便新手快速入门，尤其是非前端开发者，reco 主题尝试基于 [revili](https://revili.recoluan.com/) 开发可视化搭建平台。

\`\`\`bash
# 全局安装 revili
pnpm add -g revili@next

# 安装 reco 主题套件
revili add revili-kit-vuepress-reco@next

# 启动可视化搭建平台
revili start
\`\`\`

## 效果展示

### 项目列表

[图片]

### 选择文件夹

[图片]

### 设置参数

[图片]

### 创建项目

[图片]`,headings:[{level:2,text:`简介`},{level:1,text:`全局安装 revili`},{level:1,text:`安装 reco 主题套件`},{level:1,text:`启动可视化搭建平台`},{level:2,text:`效果展示`},{level:3,text:`项目列表`},{level:3,text:`选择文件夹`},{level:3,text:`设置参数`},{level:3,text:`创建项目`}],tags:[],categories:[]},{path:`/docs/guide/icon.html`,title:`图标`,summary:`:::warning 原来 reco 主题的图标只集成了  1 种图标，因为定制能力受限， 版本之后，reco 主题不再内置图标，而是允许用户定制任何自己想要的图标。 ::: 在  下注册图标组件，比如新增一个 ： > svg 可以去  获取，其他 svg 资源均可。 :::: code-group ::: code-group-item 在 config 文件中使用 ::: ::: code-group-item 在 mackdown 中使用 ::: :::: 如果想要在自定义组件或 markdown 中直接使用 svg 图标： |参数|说明|类型|可选值|默认值| |-|-|-|-|-| |icon|图标|string|自定义的图标组件名称|-| |color|图标和文本的颜色|string|-|inherit| |iconPosition|图标的位置，同时设置了 icon 和 text 时才有意义|string|top/bottom/left/right|left| |iconSize|图标的大小|string|-|18| |text|文本的内容|string|-|-| |tex...`,content:`## 介绍

:::warning
原来 reco 主题的图标只集成了 [Carbon](https://carbondesignsystem.com/elements/icons/library/) 1 种图标，因为定制能力受限，\`2.0.0-rc.23\` 版本之后，reco 主题不再内置图标，而是允许用户定制任何自己想要的图标。
:::

## 使用

### 注册图标组件

在 \`.vuepress/components\` 下注册图标组件，比如新增一个 \`IconHome.vue\`：

> svg 可以去 [Xicons](https://www.xicons.org/#/zh-CN) 获取，其他 svg 资源均可。

\`\`\`vue
<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z" fill="currentColor"></path></svg>
</template>
\`\`\`

### 使用图标组件

:::: code-group
::: code-group-item 在 config 文件中使用
\`\`\`ts
import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: recoTheme({
    navbar: { text: '首页', link: '/', icon: 'IconHome' }
  })
})
\`\`\`
:::
::: code-group-item 在 mackdown 中使用
\`\`\`markdown
<Xicons icon="IconHome" />
\`\`\`
:::
::::


## 高级

如果想要在自定义组件或 markdown 中直接使用 svg 图标：

\`\`\`vue
<Xicons :text="copyRight">
  <template #icon>
    <svg class="xicon-icon" style="width: 18px; height: 18px; font-size: 18px; color: inherit;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25"></path></g></svg>
  </template>
</Xicons>
\`\`\`

## 参考

### Props

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|icon|图标|string|自定义的图标组件名称|-|
|color|图标和文本的颜色|string|-|inherit|
|iconPosition|图标的位置，同时设置了 icon 和 text 时才有意义|string|top/bottom/left/right|left|
|iconSize|图标的大小|string|-|18|
|text|文本的内容|string|-|-|
|textSize|文本的大小|string|-|14|
|link|跳转链接|string|-|javascript:void(0)|
|target|跳转方式|string|\`_self\`,\`_blank\`,\`_parent\`,\`_top\`|_self|

### Slots

|name|说明|
|-|-|
|default|指定 props.text 位置的内容，用于表达更加复杂的内容|
|icon|通过外部图标来替换|`,headings:[{level:2,text:`介绍`},{level:2,text:`使用`},{level:3,text:`注册图标组件`},{level:3,text:`使用图标组件`},{level:2,text:`高级`},{level:2,text:`参考`},{level:3,text:`Props`},{level:3,text:`Slots`}],tags:[],categories:[]},{path:`/docs/guide/introduce.html`,title:`介绍`,summary:`欢迎使用 ，该主题有些功能参考了  默认主题，但是不再像  和  一样在默认主题上进行魔改了，这是全新的一套方案，比如样式是采用了  方案，博客等页面扩展能力则是通过插件  来实现的。 ::: warning 主题的配置，必须依赖此文档，不可拿官方默认主题文档来比较，因为仅有少量配置与官方默认主题文档重叠。 :::`,content:"## 与默认主题的关系\n\n欢迎使用 `vuepress-theme-reco@2.x`，该主题有些功能参考了 `vuepress@2.x` 默认主题，但是不再像 `0.x` 和 `1.x` 一样在默认主题上进行魔改了，这是全新的一套方案，比如样式是采用了 `tailwindCSS` 方案，博客等页面扩展能力则是通过插件 `@vuepress-reco/vuepress-plugin-page` 来实现的。\n\n::: warning\n主题的配置，必须依赖此文档，不可拿官方默认主题文档来比较，因为仅有少量配置与官方默认主题文档重叠。\n:::\n\n## 与默认主题的重叠的配置",headings:[{level:2,text:`与默认主题的关系`},{level:2,text:`与默认主题的重叠的配置`}],tags:[],categories:[]},{path:`/docs/guide/package-manager.html`,title:`包管理工具`,summary:`如果包管理器使用的是  或 ， 中只需要包含： 1.  2.  3.  或  如果包管理器使用的是 ， 中还需要包含 。`,content:`如果包管理器使用的是 \`npm\` 或 \`yarn\`，\`package.json\` 中只需要包含：
1. \`vuepress\`
2. \`vuepress-theme-reco\`
3. \`@vuepress/bundler-vite\` 或 \`@vuepress/bundler-webpack\`

如果包管理器使用的是 \`pnpm\`，\`package.json\` 中还需要包含 \`vue\`。

\`\`\`json
{
  "name": "vuepress-theme-reco-demo",
  "version": "2.0.0",
  "description": "Demo for vuepress-theme-reco@2.x.",
  "repository": "git@github.com:recoluan/vuepress-theme-reco-demo.git",
  "author": "reco_luan <recoluan@outlook.com>",
  "license": "MIT",
  "scripts": {
    "dev": "vuepress dev .",
    "start": "vuepress dev .",
    "build": "vuepress build ."
  },
  "dependencies": {
    "vue": "^3.5.0",
    "vuepress": "2.0.0-rc.19",
    "vuepress-theme-reco": "2.0.0-rc.26",
    "@vuepress/bundler-vite": "2.0.0-rc.19",
    "@vuepress/bundler-webpack": "2.0.0-rc.19"
  }
}
\`\`\``,headings:[],tags:[],categories:[]},{path:`/docs/guide/register-components.html`,title:`注册组件`,summary:`::: warning - 书写样式请参考 。 - 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 ::: 主题默认将  下面的  组件进行了全局注册。`,content:"::: warning\n- 书写样式请参考 [指南/样式](/docs/guide/style)。\n- 如果我们文档项目存放在工程的子目录，比如 `/docs` 文件夹下，我们需要设置 `themeConfig.docsDir` 为 `/docs`。\n:::\n\n## 介绍\n\n主题默认将 `/.vuepress/components` 下面的 `.vue` 组件进行了全局注册。",headings:[{level:2,text:`介绍`}],tags:[],categories:[]},{path:`/docs/guide/register-layouts.html`,title:`注册布局`,summary:`::: warning - 书写样式请参考 。 - 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 ::: 主题默认将  下面的  组件注册为布局组件，如果组件的名字与主题内置的组件名字一样，则会覆盖默认布局。 **通用容器** 请使用  作为布局组件的外层容器，这样会为自定义的布局添加顶部导航、侧边栏等能力。 **别名** 可以通过这些别名直接引入需要的内置能力。 **样式** 请参考 。 **案例**`,content:`::: warning
- 书写样式请参考 [指南/样式](/docs/guide/style)。
- 如果我们文档项目存放在工程的子目录，比如 \`/docs\` 文件夹下，我们需要设置 \`themeConfig.docsDir\` 为 \`/docs\`。
:::

## 介绍

主题默认将 \`/.vuepress/layouts\` 下面的 \`.vue\` 组件注册为布局组件，如果组件的名字与主题内置的组件名字一样，则会覆盖默认布局。

## 指定某个页面的布局

\`\`\`md
---
layout: CustomLayout
---
\`\`\`

## 开发

**通用容器**

请使用 \`GenericContainer\` 作为布局组件的外层容器，这样会为自定义的布局添加顶部导航、侧边栏等能力。

**别名**

可以通过这些别名直接引入需要的内置能力。

\`\`\`ts
alias: {
  '@types': path.resolve(__dirname, '../types'),
  '@client': path.resolve(__dirname, '../client'),
  '@utils': path.resolve(__dirname, '../client/utils'),
  '@components': path.resolve(__dirname, '../client/components'),
  '@composables': path.resolve(__dirname, '../client/composables'),
},
\`\`\`

**样式**

请参考 [这里](/docs/guide/style.html)。

**案例**

\`\`\`vue
<template>
  <GenericContainer>
    <section class="page-404-wrapper">
      <div class="content">
        <h1>404</h1>
        <p>Oops! Page does not exist.</p>
        <div class="xicon-container">Go Home</div>
      </div>
    </section>
  </GenericContainer>
</template>

<script lang="ts" setup>
import GenericContainer from '@components/GenericContainer/index.vue'
import { useThemeLocaleData } from '@composables/index.js'
<\/script>

<style lang="postcss">
.page-404-wrapper {
  @apply bg-reco-primary;
}
</style>
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`指定某个页面的布局`},{level:2,text:`开发`}],tags:[],categories:[]},{path:`/docs/guide/style.html`,title:`样式`,summary:`reco 主题的 css 方案是  +  +  ，可以直接在 css 中直接书写嵌套格式和循环格式（类 scss），无论自定义样式，还是自定义组件均可直接使用。 :::: code-group ::: code-group-item tailwindcss in html ::: ::: code-group-item tailwindcss in css ::: ::: code-group-item css 嵌套 ::: ::: code-group-item css 循环 ::: :::: 如果在写 tailwindcss 时，用到 reco 主题自定义的基础样式、变量和组件，需要在 css 文件最上面引入  ：`,content:`## 介绍

reco 主题的 css 方案是 [tailwindcss 3.0](https://tailwindcss.com/docs/installation) + [postcss-nested](https://github.com/postcss/postcss-nested) + [postcss-each](https://github.com/madyankin/postcss-each) ，可以直接在 css 中直接书写嵌套格式和循环格式（类 scss），无论自定义样式，还是自定义组件均可直接使用。

## 示例

:::: code-group
::: code-group-item tailwindcss in html
\`\`\`html
<div class="bg-indigo-500">reco_luan</div>
\`\`\`
:::
::: code-group-item tailwindcss in css
\`\`\`css
ul {
  @apply flex items-center list-none;
  li {
    @apply text-center text-base text-black;
  }
}
\`\`\`
:::
::: code-group-item css 嵌套
\`\`\`css
ul {
  diplay: flex;
  align-items: center;
  list-style: none;
  li {
    text-align: center;
    font-size: 16px;
    color: black;
  }
}
\`\`\`
:::
::: code-group-item css 循环
\`\`\`css
@each $lang in html, css, javascript, vue {
  div.language-$(lang)::before {
    content: '$(lang)';
  }
}
\`\`\`
:::
::::

## 注意

如果在写 tailwindcss 时，用到 reco 主题自定义的基础样式、变量和组件，需要在 css 文件最上面引入 \`@vuepress-reco/tailwindcss-config/lib/client/styles/components.css\` ：

\`\`\`css
@import url('@vuepress-reco/tailwindcss-config/lib/client/styles/components.css');
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`示例`},{level:2,text:`注意`}],tags:[],categories:[]},{path:`/en/docs/message-board.html`,title:`message board`,summary:`::: info You are welcome to leave your suggestions and comments here, or submit your questions at , or come to  for discussion. :::`,content:`::: info
You are welcome to leave your suggestions and comments here, or submit your questions at [GitHub Issue](https://github.com/vuepress-reco/vuepress-theme-reco), or come to [GitHub Discussions](https://github.com/vuepress-theme-reco://github.com/vuepress-reco/vuepress-theme-reco/discussions) for discussion.
:::`,headings:[],tags:[],categories:[]},{path:`/docs/theme/appearance.html`,title:`外观`,summary:`主题默认根据系统的外观颜色来自动改变自己的外观颜色，但是允许用户设置默认外观颜色，可选值为 、、，默认 。`,content:`## 介绍

主题默认根据系统的外观颜色来自动改变自己的外观颜色，但是允许用户设置默认外观颜色，可选值为 \`dark\`、\`light\`、\`auto\`，默认 \`auto\`。

## 使用

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    colorMode: 'dark', // dark, light, 默认 auto
    colorModeSwitch: false // 是否展示颜色模式开关，默认 true
  })
})
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`使用`}],tags:[],categories:[]},{path:`/docs/theme/auto-set-category.html`,title:`自动设置分类`,summary:`为了节约用户的时间成本，主题可以自动为  文件夹下的博客设置分类，也就是将该文件所在文件夹的名称设置为该文件的  的  的值。 ::: warning  API 后期会做调整，但不会废弃，请谨慎使用。 :::`,content:`## 介绍

为了节约用户的时间成本，主题可以自动为 \`blogs\` 文件夹下的博客设置分类，也就是将该文件所在文件夹的名称设置为该文件的 \`frontmatter\` 的 \`categories\` 的值。

\`\`\`
/
└─ .vuepress
└─ blogs
  └─ 分类1
    └─ 博客1.md
  └─ 分类2
    └─ 博客2.md
\`\`\`

## 配置

::: warning
\`autoAddCategoryToNavbar\` API 后期会做调整，但不会废弃，请谨慎使用。
:::

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 插入位置，默认 0
      showIcon: true, // 展示图标，默认 false
    },
    // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值
    autoAddCategoryToNavbar: true
  })
})
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`配置`}],tags:[],categories:[]},{path:`/docs/theme/auto-set-series.html`,title:`自动设置系列`,summary:`为了节约用户的时间成本，主题可以自动将  文件夹下的文档，按照文件夹嵌套关系生成系列的配置。`,content:`## 介绍

为了节约用户的时间成本，主题可以自动将 \`series\` 文件夹下的文档，按照文件夹嵌套关系生成系列的配置。
\`\`\`

/
└─ .vuepress
└─ series
  └─ 系列1
    └─ 文档1.md
    └─ 文档2.md
  └─ 系列2
    └─ 分组1
      └─ 文档3.md
    └─ 分组2
      └─ 文档4.md
\`\`\`

## 配置

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // 自动设置分类
    autoSetSeries: true,
  })
})
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`配置`}],tags:[],categories:[]},{path:`/docs/theme/bulletin-popover.html`,title:`公告`,summary:"::: tip 公告内容展示在页面右上角，以弹窗的形式展示，该公告的显示和隐藏依赖于  里的变量，所以网站每次被打开，公告弹窗都会显示。 ::: **width** - 描述：公告宽度，单位  - 默认值： **title** - 描述：公告标题 - 默认值： **body** - 描述：公告内容 - 类型: `{     type: 'text' | 'hr' | 'title' | 'buttongroup',     content?: string,     children?: Array<{ text: string, link: string }>    }` - 类型说明：   |类型|说明|   |-|-|   |title|标题，需要配置  属性|   |text|文本，需要配置  属性|   |hr|隔断线，类似  标签，此类型不需要配置其他属性|   |buttongroup|按钮组，仅此类型需要配置 | - 案例：以主题官网为例 -",content:`::: tip
公告内容展示在页面右上角，以弹窗的形式展示，该公告的显示和隐藏依赖于 \`sesstionStorage\` 里的变量，所以网站每次被打开，公告弹窗都会显示。
:::

## 配置

**width**

- 描述：公告宽度，单位 \`px\`
- 默认值：\`300\`

**title**

- 描述：公告标题
- 默认值：\`公告\`

**body**

- 描述：公告内容
- 类型: \`{
    type: 'text' | 'hr' | 'title' | 'buttongroup',
    content?: string,
    children?: Array<{ text: string, link: string }> 
  }\`
- 类型说明：
  |类型|说明|
  |-|-|
  |title|标题，需要配置 \`content\` 属性|
  |text|文本，需要配置 \`content\` 属性|
  |hr|隔断线，类似 \`hr\` 标签，此类型不需要配置其他属性|
  |buttongroup|按钮组，仅此类型需要配置 \`children\`|
- 案例：以主题官网为例
- 
  \`\`\`ts
  // .vuepress/config.ts

  import { defineUserConfig } from 'vuepress'
  import { recoTheme } from 'vuepress-theme-reco'

  export default defineUserConfig({
    theme: recoTheme({
      bulletin: {
        body: [
          {
            type: 'text',
            content: \`🎉🎉🎉 reco 主题 2.x 已经发布 RC 版本，在发布 Latest 版本之前不会再有大的更新，
            大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。\`,
            style: 'font-size: 12px;'
          },
          { type: 'hr' },
          { type: 'title', content: 'QQ 群' },
          {
            type: 'text',
            content: \`
            <ul>
              <li>QQ群1：1037296104</li>
              <li>QQ群2：1061561395</li>
              <li>QQ群3：962687802</li>
            </ul>\`,
            style: 'font-size: 12px;'
          },
          { type: 'hr' },
          { type: 'title', content: 'GitHub' },
          {
            type: 'text',
            content: \`
            <ul>
              <li><a href="https://github.com/vuepress-rec
// ... [代码块已截断]
\`\`\``,headings:[{level:2,text:`配置`}],tags:[],categories:[]},{path:`/docs/theme/comments.html`,title:`评论`,summary:`主题内置评论插件 ，目前支持 ； 如果你想默认不加载评论，而只在某些页面显示评论功能，可以在  中设置 ，并在需要展示评论的页面设置 。 如果仅是某篇文章不想设置开启评论功能，可以在  设置 。 其他参数参考 。 ::: tip 如果 valine 的获取评论的接口报  错误的话，不用担心，这是因为你还没有添加评论，只要存在 1 条评论，就不会报错了，这是  的请求处理操作而已； ::: 使用教程及 options 其它参数参考 。 使用教程及 options 其它参数参考。 ::: warning Giscus 会在页面内放置指向 giscus.app 的 iframe，而该组件需要加载网站中的 css 文件才能使用配置文件中的主题，这会造成跨域问题。在使用开发服务器问题时，该问题无需处理；在正式部署时，需要配置  和  请求头，否则评论样式会出现问题。 :::`,content:`## 介绍

主题内置评论插件 \`@vuepress-reco/vuepress-plugin-comments\`，目前支持 \`Valine、Waline、Giscus\`；

如果你想默认不加载评论，而只在某些页面显示评论功能，可以在 \`commentConfig.options\` 中设置 \`hideComments: true\`，并在需要展示评论的页面设置 \`hideComments: false\`。

如果仅是某篇文章不想设置开启评论功能，可以在 \`front-matter\` 设置 \`hideComments: true\`。

## Option API

### Valine

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'valine',
      options: {
        appId: '...', // your appId
        appKey: '...', // your appKey
        hideComments: true, // 全局隐藏评论，默认 false
      },
    },
  }),
})
\`\`\`

其他参数参考 [Valine 官网](https://valine.js.org/configuration.html)。

::: tip
如果 valine 的获取评论的接口报 \`404\` 错误的话，不用担心，这是因为你还没有添加评论，只要存在 1 条评论，就不会报错了，这是 \`leanCloud\` 的请求处理操作而已；
:::

### Waline

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'waline',
      options: {
        serverURL: 'your serverURL',
        ...
        hideComments: true, // 全局隐藏评论，默认 false
      },
    },
  }),
})
\`\`\`

使用教程及 options 其它参数参考 [Waline 官网](https://waline.js.org/guide/get-started.html)。

### Giscus

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'reco/blog-comments',
        repoId: 'R_kgDOxxxxxx',
        category: 'Announcements',
        categoryId: 'xxxxx',
        mapping: 'title',
        ...
        hideComments: true, // 全局隐藏评论，默认 false
      },
    },
  }),
})
\`\`\`

使用教程及 options 其它参数参考[Giscus](https://giscus.app)。

::: warning
Giscus 会在页面内放置指向 giscus.app 的 iframe，而该组件需要加载网站中的 css 文件才能使用配置文件中的主题，这会造成跨域问题。在使用开发服务器问题时，该问题无需处理；在正式部署时，需要配置 \`Access-Control-Allow-Origin\` 和 \`Access-Control-Allow-Headers\` 请求头，否则评论样式会出现问题。
:::`,headings:[{level:2,text:`介绍`},{level:2,text:`Option API`},{level:3,text:`Valine`},{level:3,text:`Waline`},{level:3,text:`Giscus`}],tags:[],categories:[]},{path:`/docs/theme/custom-container.html`,title:`自定义容器`,summary:"是必需的，  和  是可选的。 支持的  有： -  -  -  -  **输入** **输出** ::: tip 这是一个提示 ::: ::: info 这是一个提示 ::: ::: warning 这是一个警告 ::: ::: danger 这是一个危险警告 ::: ::: details 这是一个 details 标签 ::: **输入** js const foo = 'foo' js const bar = 'bar' ` **输出** :::: code-group ::: code-group-item FOO ::: ::: code-group-item BAR ::: ::::",content:`## 提示相关

\`\`\` md
::: <type> [title]
[content]
:::
\`\`\`

\`type\` 是必需的， \`title\` 和 \`content\` 是可选的。

支持的 \`type\` 有：

- \`tip\`
- \`warning\`
- \`danger\`
- \`details\`

**输入**

\`\`\` md
::: tip
这是一个提示
:::

::: info
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
\`\`\`

**输出**

::: tip
这是一个提示
:::

::: info
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

## 代码相关

**输入**

\`\`\`\`md
:::: code-group
::: code-group-item FOO
\`\`\`js
const foo = 'foo'
\`\`\`
:::
::: code-group-item BAR
\`\`\`js
const bar = 'bar'
\`\`\`
:::
::::
\`\`\`\`

**输出**

:::: code-group
::: code-group-item FOO
\`\`\`js
const foo = 'foo'
\`\`\`
:::
::: code-group-item BAR
\`\`\`js
const bar = 'bar'
\`\`\`
:::
::::`,headings:[{level:2,text:`提示相关`},{level:2,text:`代码相关`}],tags:[],categories:[]},{path:`/docs/theme/custom-primary-color.html`,title:`自定义主题的基础色`,summary:`::: warning 主题是通过  来配置 css 的，后期可能会开放更多的配置能力，所以当前功能的 API 在以后可能会改变。 ::: 如果你对主题的默认的主色不喜欢，可以通过  来自定义，主题会修改  的配置：`,content:`::: warning
主题是通过 \`tailwindcss\` 来配置 css 的，后期可能会开放更多的配置能力，所以当前功能的 API 在以后可能会改变。
:::

如果你对主题的默认的主色不喜欢，可以通过 \`themeConfig.primaryColor\` 来自定义，主题会修改 \`tailwindcss\` 的配置：

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    primaryColor: '#3aa675'
  })
})
\`\`\``,headings:[],tags:[],categories:[]},{path:`/docs/theme/doc-search.html`,title:`搜索功能`,summary:`主题已经内置了简单的搜索能力，如果希望使用 ，可以进行配置。`,content:`## 介绍

主题已经内置了简单的搜索能力，如果希望使用 \`Algolia\`，可以进行配置。

## 配置

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
  algolia: {
    appId: 'xxx',
    apiKey: 'xxx',
    indexName: 'xxx',
    inputSelector: '### REPLACE ME ####',
    algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    debug: false // Set debug to true if you want to inspect the dropdown
  },
  })
})
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`配置`}],tags:[],categories:[]},{path:`/docs/theme/frontmatter-home.html`,title:`首页`,summary:`::: tip 为了满足用户更多的使用场景，主题已经将首页进行了模块化，用户可以在首页 md 文件的  中指定要展示的内容模块及其展示顺序，后期将开发更多的模块供大家使用，且支持用户按需自定义首页模块。 ::: 目前内置的首页模块有 、、、、、, ，其配置如下： - 描述：指定首页模块 - 默认值： - 可选值：、、、、、、 - 配置项：   - Banner：巨幅展示图，可以展示 logo、标题、简述、背景图，上下布局   - BannerBrand：品牌格式的巨幅展示图，可以展示 logo、标题、简述、背景图、按钮，左右布局   - Features: 首页特性列表   - Blog：博客模块，两栏布局，作则展示博客列表，右侧展示用户信息及博客相关内容   - MdContent：首页的 markdown 正文展示模块   - Comment: 评论模块   - Footer：首页底部模块 - 描述：用于配置 Banner 模块 - frontmatter 配置：   - heroText：标题   - tagline：简述   - heroImage: 首页 logo   - h...`,content:`::: tip
为了满足用户更多的使用场景，主题已经将首页进行了模块化，用户可以在首页 md 文件的 \`frontmatter\` 中指定要展示的内容模块及其展示顺序，后期将开发更多的模块供大家使用，且支持用户按需自定义首页模块。
:::

## 配置

目前内置的首页模块有 \`Banner\`、\`BannerBrand\`、\`Features\`、\`Blog\`、\`MdContent\`、\`Comment\`, \`Footer\`，其配置如下：

### modules

- 描述：指定首页模块
- 默认值：\`['BannerBrand', 'Blog', 'Footer']\`
- 可选值：\`Banner\`、\`BannerBrand\`、\`Features\`、\`Blog\`、\`MdContent\`、\`Comment\`、\`Footer\`
- 配置项：
  - Banner：巨幅展示图，可以展示 logo、标题、简述、背景图，上下布局
  - BannerBrand：品牌格式的巨幅展示图，可以展示 logo、标题、简述、背景图、按钮，左右布局
  - Features: 首页特性列表
  - Blog：博客模块，两栏布局，作则展示博客列表，右侧展示用户信息及博客相关内容
  - MdContent：首页的 markdown 正文展示模块
  - Comment: 评论模块
  - Footer：首页底部模块

### banner
- 描述：用于配置 Banner 模块
- frontmatter 配置：
  - heroText：标题
  - tagline：简述
  - heroImage: 首页 logo
  - heroImageStyle: 首页 logo 样式
  - bgImage: 背景图片
  - bgImageStyle: 背景图片样式
- 案例：
  - <img width="600" alt="banner" src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png">

### bannerBrand
- 描述：用于配置 BannerBrand 模块
- frontmatter 配置：
  - title：标题
  - description: 描述
  - tagline：标语
  - buttons: 按钮
    - text: 按钮文案
    - link: 按钮地址
    - type: 按钮风格，默认带背景色，如果不需要可以设置为 'plain'
- 案例：
  - <img width="600" alt="bannerBrand" src="https://user-images.githubusercontent.com/18067907/214793265-d316133f-12c3-47a3-8f96-a34e5cca5087.png">

### blog
- 描述：用于配置 Blog 模块
- frontmatter 配置：
  - socialLinks：社交地址
    - icon: 图标，设置方式见 [这里](/docs/guide/icon)
    - link: 按钮地址
- themeConfig 配置：
  - author：作者昵称
  - authorAvatar：作者头像
- 案例：
  - <img width="600" alt="blog" src="https://user-images.githubusercontent.com/18067907/216823247-8aee08e1-2c24-45e5-8c2e-b9a919ed1c27.png">

### features
- 描述：配置首页特性列表
- frontmatter 配置：
  - title：标题
  - details：详情
- 案例：
  - <img width="600" alt="footer" src="https://github.com/vuepress-reco/vuepress-theme-reco/assets/18067907/5b1ced88-606a-4088-b32d-4a9c6ed9cc66">

### footer
- 描述：用于配置 Footer 模块
- frontmatter 配置：
  - record: 域名备案文案
  - recordLink：域名备案地址
  - cyberSecurityRecord: 公安备案文案
  - cyberSecurityLink：公安备案地址
  - startYear：本网站开始时间
- 案例：
  - <img width="600" alt="footer" src="https://user-images.githubusercontent.com/18067907/152644689-f7fc1e34-6f43-44f5-86a0-fd26d4157bb1.png">

### MdContent
- 描述：首页的 markdown 正文展示模块
- 案例：-

###  Comment
- 描述： 评论功能，如果站点想把评论功能放在首页，可以配置这个选项
- 案例：-

## 案例

\`\`\`yaml
---
home: true
modules: # 指定首页展示模块
  - BannerBrand
  - Blog
  - MdContent
  - Features
  - Footer
banner: # banner 模块的配置
  heroText: 午后南杂
  tagline: Enjoy when you can, and endure when you must.
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /banner.jpg
  bgImageStyle:
    height: 450px
bannerBrand: # bannerBrand 模块的配置
  title: vuepress-reco
  description: 一款简洁的 vuepress 博客 & 文档 主题。
  tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Default Style, link: '/docs/theme/introduce', type: 'plain' }
  socialLinks: # 社交地址
    - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
blog: # blog 模块的配置
  socialLinks: # 社交地址
    - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
features:
- title: 过去
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 当下
  details: 帮助更多的朋友节省时间去用心书写内容，而
// ... [代码块已截断]
\`\`\`

## 自定义首页模块

::: warning
reco 主题的 css 方案是 postcss + tailwindcss，支持 css 最新嵌套提案（类 scss），为组件书写样式时需注意。
:::

只要组件在全局注册，即可作为首页的模块被首页使用。

首先可以参考 [注册组件](/docs/guide/register-components.html) 将首页模块组件注册为全局组件，然后在首页的 frontmatter 中去配置（假如自定义的模块组件为 CustomModule）：

\`\`\`yaml
---
home: true
modules: # 指定首页展示模块
  - CustomModule
  - Footer
customModule: # customModule 模块的配置
  key: value
footer: # 底部模块的配置
  record: 域名备案文案
  recordLink: 域名备案地址
  cyberSecurityRecord: 公安备案文案
  cyberSecurityLink: 公安备案地址
  startYear: 2018
---
\`\`\`

开发首页模块时，可以通过下面方法去获得 frontmatter 配置：

\`\`\`js
import { usePageFrontmatter, withBase } from 'vuepress/utils'
const frontmatter = usePageFrontmatter()
\`\`\``,headings:[{level:2,text:`配置`},{level:3,text:`modules`},{level:3,text:`banner`},{level:3,text:`bannerBrand`},{level:3,text:`blog`},{level:3,text:`features`},{level:3,text:`footer`},{level:3,text:`MdContent`},{level:3,text:`Comment`},{level:2,text:`案例`},{level:2,text:`自定义首页模块`}],tags:[],categories:[]},{path:`/docs/theme/frontmatter-page.html`,title:`普通文档`,summary:`:::tip 以下为  特有的  配置，其他配置请参考 。 ::: - 类型： - 详情：页面加密密码。 - 参考： - 类型： - 详情：文章置顶，按照 1, 2, 3, ... 来降序排序。 - 类型：  - 详情：为当前页面添加额外的类名。 - 示例：      然后你可以在  文件中为这个页面添加自定义样式：    - 参考：`,content:`:::tip
以下为 \`vuepress-theme-reco\` 特有的 \`Frontmatter\` 配置，其他配置请参考 [Vuepress Frontmatter](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html)。
:::

## password

- 类型：\`string ｜ string[]\`
- 详情：页面加密密码。
- 参考：[参考 -> 主题配置 -> 加密](/docs/theme/password.html)

## sticky

- 类型：\`number\`
- 详情：文章置顶，按照 1, 2, 3, ... 来降序排序。

## pageClass

- 类型： \`string\`
- 详情：为当前页面添加额外的类名。
- 示例：
  \`\`\`md
    ---
    pageClass: custom-page-class
    ---
  \`\`\`

  然后你可以在 \`.vuepress/styles/index.css\` 文件中为这个页面添加自定义样式：

  \`\`\`css
  .theme-container {
    .custom-page-class {
      /* 页面样式 */
    }
  }
  \`\`\`

- 参考：[默认主题 > 样式 > Style 文件](/docs/theme/custom-style.html)`,headings:[{level:2,text:`password`},{level:2,text:`sticky`},{level:2,text:`pageClass`}],tags:[],categories:[]},{path:`/docs/theme/git.html`,title:`git 相关`,summary:`:::tip 用于生成 git 跳转地址和编辑链接。 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 ::: **repo** - 类型： string - 详情：项目仓库的 URL。它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。 **docsRepo** - 类型： string - 详情：文档源文件的仓库 URL 。它将会用于生成 编辑此页 的链接。如果你不设置该选项，则默认会使用 repo 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。 **docsBranch** - 类型： string - 默认值： 'main' - 详情：文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。 **docsDir** - 类型： string - 详情：文档项目存放在工程的子目录。如果我们文档项目存放在工程的子目录，比如 /docs 文件夹下，我们需要设置 themeConfig.docsDir 为 ./docs。务必要这样设置，因为这项配置与很多解析功能强相关。`,content:`## 介绍

:::tip
用于生成 git 跳转地址和编辑链接。

如果我们文档项目存放在工程的子目录，比如 \`/docs\` 文件夹下，我们需要设置 \`themeConfig.docsDir\` 为 \`./docs\`。
:::

## 配置

**repo**
- 类型： string
- 详情：项目仓库的 URL。它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。


\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // 如果你按照 \`organization/repository\` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库
    repo: 'vuejs/vuepress',
    // 你也可以直接将它设置为一个 URL
    repo: 'https://gitlab.com/foo/bar',
  })
})
\`\`\`

**docsRepo**
- 类型： string
- 详情：文档源文件的仓库 URL 。它将会用于生成 编辑此页 的链接。如果你不设置该选项，则默认会使用 repo 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。

**docsBranch**
- 类型： string
- 默认值： 'main'
- 详情：文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    docsDir: '/docs',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco',
    docsBranch: 'main',
  })
})
\`\`\`

**docsDir**
- 类型： string
- 详情：文档项目存放在工程的子目录。如果我们文档项目存放在工程的子目录，比如 /docs 文件夹下，我们需要设置 themeConfig.docsDir 为 ./docs。务必要这样设置，因为这项配置与很多解析功能强相关。`,headings:[{level:2,text:`介绍`},{level:2,text:`配置`}],tags:[],categories:[]},{path:`/docs/theme/home.html`,title:`another-home-path.md`,summary:`某些场景下，文档的首页并不一定是文档根目录的  文件，这时我们可以在  中设置  来置顶首页，并通过  来指定首页路径。 :::: code-group ::: code-group-item 指定首页 ::: ::: code-group-item 指定首页路径 ::: ::::`,content:`## 介绍

某些场景下，文档的首页并不一定是文档根目录的 \`README.md\` 文件，这时我们可以在 \`Frontmatter\` 中设置 \`home: true\` 来置顶首页，并通过 \`themeConfig.home\` 来指定首页路径。

## 配置

:::: code-group
::: code-group-item 指定首页
\`\`\`yml
# another-home-path.md
---
title: 指定首页
home: true
---
\`\`\`
:::
::: code-group-item 指定首页路径
\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    home: '/another-home-path'
  })
})
\`\`\`
:::
::::`,headings:[{level:2,text:`介绍`},{level:2,text:`配置`},{level:1,text:`another-home-path.md`}],tags:[],categories:[]},{path:`/docs/theme/markdown-file-parse.html`,title:`解析文件为代码组`,summary:`:::warning 注意， 之后的版本取消了  文件夹的能力，所有组件都可以放在文件夹  中声明。 ::: **输入** **输出** @`,content:`:::warning
注意，\`2.0.0-rc.5\` 之后的版本取消了 \`vue-previews\` 文件夹的能力，所有组件都可以放在文件夹 \`components\` 中声明。
:::

**输入**

\`\`\`md
@[code-group](@/docs/.vuepress/components/demo.vue)
\`\`\`

**输出**

@[code-group](@/docs/.vuepress/components/demo.vue)`,headings:[],tags:[],categories:[]},{path:`/docs/theme/markdown-task.html`,title:`任务列表`,summary:`**输入** **输出** - [x] 打游戏 - [ ] 学习`,content:`**输入**

\`\`\`md
- [x] 打游戏
- [ ] 学习
\`\`\`

**输出**

- [x] 打游戏
- [ ] 学习`,headings:[],tags:[],categories:[]},{path:`/docs/theme/markdown-vue-preview.html`,title:`Vue 组件预览`,summary:`:::warning 注意， 之后的版本取消了  文件夹的能力，所有组件都可以放在文件夹  中声明。 ::: :::tip 主题默认将  下面的  组件进行了全局注册，所以需要预览的组件请放在此目录下，注意：文件名不允许有  。 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 ::: **输入** **输出** @`,content:":::warning\n注意，`2.0.0-rc.5` 之后的版本取消了 `vue-previews` 文件夹的能力，所有组件都可以放在文件夹 `components` 中声明。\n:::\n\n:::tip\n主题默认将 `/.vuepress/components` 下面的 `.vue` 组件进行了全局注册，所以需要预览的组件请放在此目录下，注意：文件名不允许有 `-` `_`。\n\n如果我们文档项目存放在工程的子目录，比如 `/docs` 文件夹下，我们需要设置 `themeConfig.docsDir` 为 `./docs`。\n:::\n\n**输入**\n\n```md\n@[preview](@/docs/.vuepress/components/demo.vue)\n```\n\n**输出**\n\n@[preview](@/docs/.vuepress/components/demo.vue)",headings:[],tags:[],categories:[]},{path:`/docs/theme/multilingual.html`,title:`语言配置`,summary:"这些选项用于配置与语言相关的文本。 如果你的站点是以英语以外的其他语言提供服务的，你应该为每个语言设置这些选项来提供翻译。 > 多语言配置请参考 。 |参数|类型|默认值|描述| |-|-|-|-| |categoriesText||Categories|分类| |tagsText||Tags|标签| |catalogTitle||ON THIS PAGE|文章右侧目录的标题| |selectLanguageName||${lang}|Locale 的语言名称| |editLinkText||Edit this page|编辑此页 链接的文字| |lastUpdatedText||Last Updated|最近更新时间戳 标签的文字| |tip||TIP|自定义提示容器的标题| |info||INFO|自定义信息容器的标题| |warning||WARNING|自定义警告容器的标题| |danger||DANGER|自定义危险容器的标题| |details||DETAILS|自定义详情容器的标题| |notFound||Oops! Page does not exist.|404 页面...",content:`## 介绍

这些选项用于配置与语言相关的文本。

如果你的站点是以英语以外的其他语言提供服务的，你应该为每个语言设置这些选项来提供翻译。

> 多语言配置请参考 [官方文档](https://v2.vuepress.vuejs.org/zh/guide/i18n.html)。

## 配置

|参数|类型|默认值|描述|
|-|-|-|-|
|categoriesText|\`string\`|Categories|分类|
|tagsText|\`string\`|Tags|标签|
|catalogTitle|\`string\`|ON THIS PAGE|文章右侧目录的标题|
|selectLanguageName|\`string\`|\${lang}|Locale 的语言名称|
|editLinkText|\`string\`|Edit this page|编辑此页 链接的文字|
|lastUpdatedText|\`string\`|Last Updated|最近更新时间戳 标签的文字|
|tip|\`string\`|TIP|自定义提示容器的标题|
|info|\`string\`|INFO|自定义信息容器的标题|
|warning|\`string\`|WARNING|自定义警告容器的标题|
|danger|\`string\`|DANGER|自定义危险容器的标题|
|details|\`string\`|DETAILS|自定义详情容器的标题|
|notFound|\`string\`|Oops! Page does not exist.|404 页面文案|
|backToHome|\`string\`|Back To Home|404 页面返回首页文案|
|inputPasswordText|\`string\`|Please enter the password|密码输入提示|
|unlockSucessText|\`string\`|Success, enjoy it!|密码输入正确提示|
|unlockFailuerText|\`string\`|Failed, please enter again!|密码输入错误提示|

## 案例

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
      tip: '提示',
      info: '信息',
      danger: '危险',
      warning: '警告',
      details: '详情',
      tagsText: '标签',
      backToHome: '返回首页',
      categoriesText: '分类',
      catalogTitle: '页面导航',
      editLinkText: '编辑当前页面',
      lastUpdatedText: '最后更新时间',
      selectLanguageName: '简体中文',
      notFound: '哇哦，没有发现这个页面！',
      inputPasswordText: '请输入密码',
      unlockSucessText: '密码正确，玩得开心！',
      unlockFailuerText: '密码错误，请重新输入！'
  })
})
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`配置`},{level:2,text:`案例`}],tags:[],categories:[]},{path:`/docs/theme/navbar.html`,title:`导航栏`,summary:`::: tip 设置图标请参考  :::`,content:`## 类型

\`\`\`ts
interface NavbarItemBasic {
  text: string
  link?: string
  icon?: string
}

interface NavbarItem extends NavbarItemBasic {
  children?: NavbarItemBasic[]
}

type Navbar = NavbarItem[]
\`\`\`

::: tip
设置图标请参考 [指南 -> 图标](/docs/guide/icon.html)
:::

## 参考

\`\`\`ts
export const navbar = [
  { text: '指南', link: '/docs/guide/introduce', icon: 'IconCompass' },
  {
    text: '参考',
    icon: 'IconDocument',
    children: [
      {
        text: '配置',
        children: [
          { text: '主题配置', link: '/docs/theme/frontmatter' },
          { text: 'Markdown 扩展', link: '/docs/theme/custom-container' },
          { text: '高级', link: '/docs/theme/custom-catalog-title' },
        ],
      },
      {
        text: '插件',
        children: [
          { text: 'page', link: '/docs/plugins/page' },
          { text: 'comments', link: '/docs/plugins/comments' },
          { text: 'vue-previews', link: '/docs/plugins/vue-previews' },
          { text: 'bulletin-popover', link: '/docs/plugins/bulletin-popover' },
        ],
      },
    ],
  },
  {
    text: '版本',
    icon: 'IconSubVolume',
    children: [
      { text: '2.x(alpha)', link: 'https://vuepress-theme-reco.recoluan.com/' },
      {
        text: '1.x',
        link: 'https://vuepress-theme-reco.
// ... [代码块已截断]
\`\`\``,headings:[{level:2,text:`类型`},{level:2,text:`参考`}],tags:[],categories:[]},{path:`/docs/theme/pages.html`,title:`注册页面`,summary:`:::info 可以通过  来自定义注册一些定制化的页面，比如时间轴页面。 ::: 注册布局，请参考 。`,content:`:::info
可以通过 \`pages\` 来自定义注册一些定制化的页面，比如时间轴页面。
:::

## 注册

注册布局，请参考 [这里](/docs/guide/register-layouts.html)。

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    pages: [
      {
        path: '/custom-page.html',
        layout: 'CustomLayout',
      },
    ]
  })
})
\`\`\``,headings:[{level:2,text:`注册`}],tags:[],categories:[]},{path:`/docs/theme/password.html`,title:`设置单个密码`,summary:`::: tip 如果网站整体或者某篇文档具有私密性，不希望被公开，只有填入密钥登录后（关闭浏览器标签后登录失效），才能进入内容页面。 - 密码位数只能是 6 个字符 - 密码可以通过数组设置多个 ::: ::: warning 1. 加密的安全性较低，请酌情使用； 2. 如果设置了加密，锚点功能将失效。 ::: 如果你的密码明文是 ，需要将其转化为密文，也就是 ，使用密文去设置密码。 网站发布后，在密码输入框输入  即可进入网站，他人也无法通过代码中的密文知道你的密码，但是你一定要记住自己的密码明文。 请在下面的输入框输入密码明文，以获取相应的密文： <md5 />`,content:`::: tip
如果网站整体或者某篇文档具有私密性，不希望被公开，只有填入密钥登录后（关闭浏览器标签后登录失效），才能进入内容页面。

- 密码位数只能是 6 个字符
- 密码可以通过数组设置多个
:::

::: warning
1. 加密的安全性较低，请酌情使用；
2. 如果设置了加密，锚点功能将失效。
:::

## 获取密文

如果你的密码明文是 \`123456\`，需要将其转化为密文，也就是 \`14e1b600b1fd579f47433b88e8d85291\`，使用密文去设置密码。

网站发布后，在密码输入框输入 \`123456\` 即可进入网站，他人也无法通过代码中的密文知道你的密码，但是你一定要记住自己的密码明文。

请在下面的输入框输入密码明文，以获取相应的密文：

<md5 />

## 设置加密

### 加密整个网站

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // 设置单个密码
    password: '14e1b600b1fd579f47433b88e8d85291',
    // 设置多个密码
    password: [
      '14e1b600b1fd579f47433b88e8d85291',
      'f8de1968939dd4ac5992ce962993ac2b'
    ]
  })
})
\`\`\`

### 加密单个页面

\`\`\`md
---
title: xxx
# 设置单个密码
password: 14e1b600b1fd579f47433b88e8d85291
# 设置多个密码
password: 
 - 14e1b600b1fd579f47433b88e8d85291
 - f8de1968939dd4ac5992ce962993ac2b
---
\`\`\``,headings:[{level:2,text:`获取密文`},{level:2,text:`设置加密`},{level:3,text:`加密整个网站`},{level:3,text:`加密单个页面`},{level:1,text:`设置单个密码`},{level:1,text:`设置多个密码`}],tags:[],categories:[]},{path:`/docs/theme/series.html`,title:`系列`,summary:`在  中， 被更改为 ，由两部分原因： 1. 在  中，侧边栏被拆分为了  和 ，多个文档可以通过左侧边栏来聚合在一起，表达它们之间的联系，右侧边栏展示的则是当前页面的目录结构，因为考虑到  默认主题将他们都放在左侧侧边栏会将其表现的没有重点，但是通过  和  来表示  和 ，语意化又不太好； 2. 考虑到需要放在一起的文档一定是一个 “系列” 文档，比如教程、文集等，故采用了 。 ::: warning 如果左侧出现文章的名称显示成了文档的路径，可以把 children 变为完整模式。 :::`,content:`## 介绍

在 \`vuepress-theme-reco@2.x\` 中，\`左侧边栏（sideBar）\` 被更改为 \`系列（series）\`，由两部分原因：

1. 在 \`vuepress-theme-reco@1.x\` 中，侧边栏被拆分为了 \`左侧边栏（sidebar）\` 和 \`右侧边栏（subSidebar）\`，多个文档可以通过左侧边栏来聚合在一起，表达它们之间的联系，右侧边栏展示的则是当前页面的目录结构，因为考虑到 \`vuepress\` 默认主题将他们都放在左侧侧边栏会将其表现的没有重点，但是通过 \`sidebar\` 和 \`subSidebar\` 来表示 \`左侧边栏\` 和 \`右侧边栏\`，语意化又不太好；
2. 考虑到需要放在一起的文档一定是一个 “系列” 文档，比如教程、文集等，故采用了 \`series\`。

## 配置

### 普通

\`\`\` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [ 'introduce', 'usage' ]
    }
  }
}
\`\`\`

### 分组

\`\`\`js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [
        {
          text: '基础',
          children: [ 'introduce', 'usage' ]
          collapsible: true // 默认展开，true 为折叠
        },
        {
          text: '高级',
          children: [ 'home', 'series', 'comments' ]
        }
      ]
    }
  }
}
\`\`\`

### 子分组

\`\`\`js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [
        {
          text: '分组1',
          children: [ 'introduce', 'usage' ]
          collapsible: true // 默认展开，true 为折叠
        },
        {
          text: '分组2',
          children: [
            {
              text: '子分组1',
              children: ['home']
            },
            {
              text: '子分组1',
              children: ['series', 'comments']
            }
          ]
        }
      ]
    }
  }
}
\`\`\`

### 异常

::: warning
如果左侧出现文章的名称显示成了文档的路径，可以把 children 变为完整模式。
:::

\`\`\`js
// 省略模式
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [ 'introduce', 'usage' ]
    }
  }
}

// 完整模式
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [ '/vuepress-theme-reco/introduce', '/vuepress-theme-reco/usage' ]
    }
  }
}
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`配置`},{level:3,text:`普通`},{level:3,text:`分组`},{level:3,text:`子分组`},{level:3,text:`异常`}],tags:[],categories:[]},{path:`/docs/theme/set-vite-bundler.html`,title:`用户自定义配置打包`,summary:`::: tip 我们默认配置了 postcss 的 plugins ，这是保证项目启动的基本配置。 ::: 如果你不满意我们现有的打包或者想要自定义打包配置，你可以使用该功能，该配置为 vuepress@2.x 提供的基于 Vite 的打包配置，， - 描述：自定义打包配置 - 配置项：   - viteOptions：接受 Vite 的所有选项。   - vuePluginOptions： 接受  的所有选项`,content:`::: tip
我们默认配置了 postcss 的 plugins ，这是保证项目启动的基本配置。
:::

如果你不满意我们现有的打包或者想要自定义打包配置，你可以使用该功能，该配置为 vuepress@2.x 提供的基于 Vite 的打包配置，[详情参考](https://v2.vuepress.vuejs.org/reference/bundler/vite.html)，

## 配置

### viteBundler

- 描述：自定义打包配置
- 配置项：
  - viteOptions：接受 Vite 的所有选项。
  - vuePluginOptions： 接受 [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue) 的所有选项


\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    viteBundler: {
      viteOptions: {
        ...do somthing
      },
      vuePluginOptions: {
        ...do somthing
      }
    }
  })
})
\`\`\``,headings:[{level:2,text:`配置`},{level:3,text:`viteBundler`}],tags:[],categories:[]},{path:`/docs/theme/social-links.html`,title:`社交地址`,summary:`::: tip 设置图标请参考  :::`,content:`## 类型

\`\`\`ts
type SocialLinks = Array<{
  link: string
  icon: string
}>
\`\`\`

## 案例

::: tip
设置图标请参考 [指南 -> 图标](/docs/guide/icon.html)
:::

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
      'socialLinks': [
        { icon: 'IconGitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
      ]
  })
})
\`\`\``,headings:[{level:2,text:`类型`},{level:2,text:`案例`}],tags:[],categories:[]},{path:`/docs/theme/source-dir.html`,title:`源文件文件夹`,summary:`:::warning 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 务必要这样设置，因为这项配置与很多解析功能强相关。 :::`,content:`## 介绍

:::warning
如果我们文档项目存放在工程的子目录，比如 \`/docs\` 文件夹下，我们需要设置 \`themeConfig.docsDir\` 为 \`./docs\`。

务必要这样设置，因为这项配置与很多解析功能强相关。
:::

## 配置

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    docsDir: '/docs'
  })
})
\`\`\``,headings:[{level:2,text:`介绍`},{level:2,text:`配置`}],tags:[],categories:[]},{path:`/en/docs/others/donate.html`,title:`donate`,summary:`<hr /> ::: tip  is a completely free and open source  theme. Interest in the beginning and responsibilities later on are my motivation for constant renewal. I am really happy to have received praise, blessings and contributions from many netizens (^▽^). If you think the theme is not bad, you can contribute a cup of milk tea to the author. ::: |WeChat|AliPay| |-|-| |<img style="width: 160px" src="/wechat.png" />|<img style="width: 160px" src="/alipay.png" />| <hr/> |昵称|日期|金额|备注| |:-:|:-:|:-:|:-:|...`,content:`## 说明

<hr />

::: tip
\`vuepress-theme-reco\` is a completely free and open source \`vuepress\` theme.

Interest in the beginning and responsibilities later on are my motivation for constant renewal.

I am really happy to have received praise, blessings and contributions from many netizens (^▽^).

If you think the theme is not bad, you can contribute a cup of milk tea to the author.
:::

|WeChat|AliPay|
|-|-|
|<img style="width: 160px" src="/wechat.png" />|<img style="width: 160px" src="/alipay.png" />|

## Donation Record

<hr/>

|昵称|日期|金额|备注|
|:-:|:-:|:-:|:-:|
|*松|2022-01-29|6.66|加油，感谢作者🙋|
|*松|2022-01-29|10|-|
|**阳|2022-01-04|20|-|
|*芯|2021-12-26|1|-|
|*松|2021-12-13|20|感谢您的耐心解答|
|*松|2021-12-10|30|请作者大佬喝杯奶茶|
|M*k|2021-12-06|8.88|加油(*￣m￣)✊|
|*气|2021-12-02|10|萌新不会用压根看不懂|
|**义|2021-10-20|6.66|期待2.0|
|*品|2021-10-07|4.5|-|
|Franklin 秦梓源|2021-07-22|6.66|-|
|*旺|2021-04-17|20|-|
|张*4|2021-04-16|5|望早日支持vitepress|
|L*n|2021-04-11|1|期待2.0|
|*猫|2021-04-09|8|支持|
|R*g|2021-04-09|10|设计针不错|
|*耀|2021-01-10|20|一杯奶茶 支持 reco|
|**根|2020-12-31|18|给大佬递茶|
|*生|2020-12-25|30|Reco 棒 期待广告插件|
|*来|2020-12-03|0.01|-|
|*递|2020-10-06|18|-|
|*美|2020-07-27|20|-|
|i*g|2020-07-16|6.66|感谢作者，请喝奶茶|
|*罡|2020-05-12|50|感谢theme-reco|
|K*n|2020-04-13|20|-|
|叫我詹躲躲|2020-03-23|8.88|一杯奶茶|
|王*豪|2019-12-25|20|茶水费|
|橘子|2019-07-12|15|coffee|`,headings:[{level:2,text:`说明`},{level:2,text:`Donation Record`}],tags:[],categories:[]},{path:`/en/docs/others/examples.html`,title:`Examples`,summary:`::: tip To add a case, click  adds configuration information at the top. (**Requirement: footer's topic recommendation cannot be deleted on the site.**) ::: <examples />`,content:`::: tip
To add a case, click [here](https://github.com/vuepress-reco/vuepress-theme-reco/edit/main/docs/.vuepress/data/examples.ts) adds configuration information at the top. (**Requirement: footer's topic recommendation cannot be deleted on the site.**)
:::

<examples />`,headings:[],tags:[],categories:[]},{path:`/en/docs/guide/architecture.html`,title:`Architecture`,summary:`reco theme 2.0, It will no longer be a simple theme, but more like a solution to quickly build a vuepress theme, or 。 It relies on  to extend the page for the theme, and can inject relevant data of categories, tags and paging for specific pages, and depends on other plugins to extend some necessary functions for the theme by default. The core function of reco theme 2.0 is to provide a website style slot, allowing the website style and other configuration of the theme to be specified through . Th...`,content:`## Architecture

[图片]

reco theme 2.0, It will no longer be a simple theme, but more like a solution to quickly build a vuepress theme, or \`container\`。

It relies on \`@vuepress-reco/vuepress-plugin-page\` to extend the page for the theme, and can inject relevant data of categories, tags and paging for specific pages, and depends on other plugins to extend some necessary functions for the theme by default.

The core function of reco theme 2.0 is to provide a website style slot, allowing the website style and other configuration of the theme to be specified through \`reco.config.js\`. The reco theme will have some built-in styles, such as the two styles of reco theme 1.0, and will expand more styles in the future, while allowing developers to customize their own styles more easily.
 
## Theme Style

[图片]

Developers can follow the \`style package\` specification and rely on the powerful style slots of the reco theme to arbitrarily expand page routing and page content. Although they use the same theme, everyone can have their own style.`,headings:[{level:2,text:`Architecture`},{level:2,text:`Theme Style`}],tags:[],categories:[]},{path:`/en/docs/guide/builtin-page.html`,title:`Build-in Page`,summary:`:::tip The theme has built-in pages that are independent pages with specific functions, that can be used to enrich the functionality of the site, such as placing the page entry on . If want to register pages，please refer to 。 ::: **Blog List Page** - route:  - description: A separate blog list page, that provides documentation stations with the ability to interact with users through blogs. - example:    **Timeline Page** - route:  - description: The timeline of the blog, which can be used as an ...`,content:`:::tip
The theme has built-in pages that are independent pages with specific functions, that can be used to enrich the functionality of the site, such as placing the page entry on \`navabr\`.

If want to register pages，please refer to [here](/en/docs/theme/pages.html)。
:::

**Blog List Page**

- route: \`/posts.html\`
- description: A separate blog list page, that provides documentation stations with the ability to interact with users through blogs.
- example:
  [图片]

**Timeline Page**

- route: \`/timeline.html\`
- description: The timeline of the blog, which can be used as an archive page.
- example:
  [图片]

**Friendship Link**

- route: \`/friendship-link.html\`
- description: friendship link
- example:
  [图片]
- config:
  \`\`\`ts
  import { defineUserConfig } from 'vuepress'
  import { recoTheme } from 'vuepress-theme-reco'

  export default defineUserConfig({
    theme: recoTheme({
      friendshipLinks: [
        {
          title: 'vuepress-recovuepress-recovuepress-recovuepress-reco',
          logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
          link: 'https://github.com/vuepress-reco'
        }
      ]
    })
  })
  \`\`\``,headings:[],tags:[],categories:[]},{path:`/en/docs/guide/bundler.html`,title:`Bundler`,summary:`Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress. You can use a bundler via the bundler option: :::warning 因为  主题自改写了打包工具的默认配置，所以如果用户想要自定义打包工具的配置，需要借助  或 ，原来的  和  已无法生效。 :::`,content:`## Use a Bundler

Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress. You can use a bundler via the bundler option:

\`\`\`ts
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default {
  bundler: viteBundler(),
  // bundler: webpackBundler(),
}
\`\`\`

## Options

:::warning
因为 \`reco\` 主题自改写了打包工具的默认配置，所以如果用户想要自定义打包工具的配置，需要借助 \`theme.viteBundlerOptions\` 或 \`theme.webpackBundlerOptions\`，原来的 \`viteBundler({})\` 和 \`webpackBundler({})\` 已无法生效。
:::

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    viteBundlerOptions: {
      viteOptions: {},
      vuePluginOptions: {},
    },
    // webpackBundlerOptions: {
    //   postcss: {},
    //   vue: {}
    // }
  })
})
\`\`\``,headings:[{level:2,text:`Use a Bundler`},{level:2,text:`Options`}],tags:[],categories:[]},{path:`/en/docs/guide/contribute.html`,title:`Install`,summary:"Welcome to contribute code to the reco theme! First, you need to fork a , clone it locally, and make sure that  is installed locally. After the above preparations are completed, go to the project folder and execute the following commands: ` At this time, the project has been started, and you can test your function in . Make sure that your code has been tested in detail and passed the  command. After the function test, you must synchronize the documentation. To submit a commit, please use the  co...",content:`Welcome to contribute code to the reco theme!

## Initialization

First, you need to fork a [reco theme repository](https://github.com/vuepress-reco/vuepress-theme-reco), clone it locally, and make sure that \`pnpm\` is installed locally.

After the above preparations are completed, go to the project folder and execute the following commands:

\`\`\`bash
# Install
pnpm install

# Compile
pnpm build

# Start
pnpm dev
\`\`\`\`

At this time, the project has been started, and you can test your function in \`example\`. Make sure that your code has been tested in detail and passed the \`pnpm example:build\` command. After the function test, you must synchronize the documentation.

## Git commit specification

To submit a commit, please use the \`pnpm commit\` command to submit code in strict accordance with the specifications, and the commit information must be in English.

## Git PR specification

The PR title is simple and clear, the PR details should describe the content you submitted in detail, and stickers if necessary, and the PR information must be in English.`,headings:[{level:2,text:`Initialization`},{level:1,text:`Install`},{level:1,text:`Compile`},{level:1,text:`Start`},{level:2,text:`Git commit specification`},{level:2,text:`Git PR specification`}],tags:[],categories:[]},{path:`/en/docs/guide/custom-style.html`,title:`Custom Style`,summary:`If you need to override the theme style, you only need to write the style to be overridden in . For the writing specification, please refer to .`,content:"If you need to override the theme style, you only need to write the style to be overridden in `.vuepress/styles/index.css`. For the writing specification, please refer to [Guide/Style](/en/docs/guide/style).",headings:[],tags:[],categories:[]},{path:`/en/docs/guide/folder-specification.html`,title:`Folder Specification`,summary:`:::warning The reco theme implements the function of the blog, but vuepress has no way to distinguish blogs or documents, so the documents will also appear in the blog area, so the theme restricts the storage location of blogs and documents, blog articles should be placed in the  file folder (mandatory), documents sery should be placed in the  file folder (mandatory), ordinary documents should be placed in  (not mandatory). :::`,content:":::warning\nThe reco theme implements the function of the blog, but vuepress has no way to distinguish blogs or documents, so the documents will also appear in the blog area, so the theme restricts the storage location of blogs and documents, blog articles should be placed in the `/blogs` file folder (mandatory), documents sery should be placed in the `/series` file folder (mandatory), ordinary documents should be placed in `/docs` (not mandatory).\n:::",headings:[],tags:[],categories:[]},{path:`/en/docs/guide/getting-started.html`,title:`Init，and choose 2.x`,summary:`::: tip Go to  to experience the new visual scaffolding. ::: **npx** **npm** **yarn**`,content:`## Quick Start

::: tip
Go to [here](/en/docs/guide/gui-builder.html) to experience the new visual scaffolding.
:::

**npx**

\`\`\`bash
# Init，and choose 2.x
npx @vuepress-reco/theme-cli init
\`\`\`

**npm**

\`\`\`bash
# Init，and choose 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
\`\`\`

**yarn**

\`\`\`bash
# Init，and choose 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
\`\`\`

## Manual Installation

\`\`\`bash
npm install vuepress@next vuepress-theme-reco@next --save-dev

# or
yarn add vuepress@next vuepress-theme-reco@next
\`\`\`

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // options
  })
})
\`\`\``,headings:[{level:2,text:`Quick Start`},{level:1,text:`Init，and choose 2.x`},{level:1,text:`Init，and choose 2.x`},{level:1,text:`Init，and choose 2.x`},{level:2,text:`Manual Installation`},{level:1,text:`or`}],tags:[],categories:[]},{path:`/en/docs/guide/gui-builder.html`,title:`global installation of revili`,summary:`:::warning At present, the visual scaffolding is in the alpha stage, and its function is relatively simple, and it is only used for tasting. Welcome to  puts forward some valuable suggestions. ::: There is still a certain threshold for the use of themes. In order to facilitate beginners, especially non-front-end developers, reco theme try to build a visual platform based on .`,content:`:::warning
At present, the visual scaffolding is in the alpha stage, and its function is relatively simple, and it is only used for tasting. Welcome to [GitHub](https://github.com/vuepress-reco/revili-kit-vuepress-reco/issues) puts forward some valuable suggestions.
:::

## Introduction

There is still a certain threshold for the use of themes. In order to facilitate beginners, especially non-front-end developers, reco theme try to build a visual platform based on [revili](https://revili.recoluan.com/).

\`\`\`bash
# global installation of revili
pnpm add -g revili@next

# install the reco theme kit
revili add revili-kit-vuepress-reco@next

# launch a visual platform
revili start
\`\`\`

## Display

### Project List

[图片]

### Choose Folder

[图片]

### Set Options

[图片]

### Create Project

[图片]`,headings:[{level:2,text:`Introduction`},{level:1,text:`global installation of revili`},{level:1,text:`install the reco theme kit`},{level:1,text:`launch a visual platform`},{level:2,text:`Display`},{level:3,text:`Project List`},{level:3,text:`Choose Folder`},{level:3,text:`Set Options`},{level:3,text:`Create Project`}],tags:[],categories:[]},{path:`/en/docs/guide/icon.html`,title:`Icon`,summary:`:::warning Originally, the reco theme's icons only integrated one type of icon . Due to limited customization capabilities, after the  version, the reco theme no longer has built-in icons, but allows users to customize any icon they want. ::: Register icon components under , such as adding an : > svg 可以去  获取，其他 svg 资源均可。 :::: code-group ::: code-group-item Using in config file ::: ::: code-group-item Use in mackdown ::: :::: If you want to use the svg icon directly in a custom component or markd...`,content:`## Introduction

:::warning
Originally, the reco theme's icons only integrated one type of icon [Carbon](https://carbondesignsystem.com/elements/icons/library/). Due to limited customization capabilities, after the \` 2.0.0-rc.23\` version, the reco theme no longer has built-in icons, but allows users to customize any icon they want.

:::

## Usage

### Registrater icon component

Register icon components under \`.vuepress/components\`, such as adding an \`IconHome.vue\`:

> svg 可以去 [Xicons](https://www.xicons.org/#/zh-CN) 获取，其他 svg 资源均可。

\`\`\`vue
<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z" fill="currentColor"></path></svg>
</template>
\`\`\`

### 使用图标组件

:::: code-group
::: code-group-item Using in config file
\`\`\`ts
import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: recoTheme({
    navbar: { text: 'Home', link: '/', icon: 'IconHome' }
  })
})
\`\`\`
:::
::: code-group-item Use in mackdown
\`\`\`markdown
<Xicons icon="IconHome" />
\`\`\`
:::
::::


## Advanced

If you want to use the svg icon directly in a custom component or markdown:

\`\`\`vue
<Xicons :text="copyRight">
  <template #icon>
    <svg class="xicon-icon" style="width: 18px; height: 18px; font-size: 18px; color: inherit;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25"></path></g></svg>
  </template>
</Xicons>
\`\`\`

## Reference

### Props

|Params|Description|Type|Optional|Default|
|-|-|-|-|-|
|icon|Icon|string|The Name of customed icon component|-|
|color|Color of icon and text|string|-|inherit|
|iconPosition|The position of icon, this makes sense when both icon and text are set|string|top/bottom/left/right|left|
|iconSize|The size of icon|string|-|18|
|text|The content of text|string|-|-|
|textSize|The size of text|string|-|14|
|link|Jump link|string|-|javascript:void(0)|
|target|Jump method|string|_self/_blank/_parent/_top|_self|


### Slots

|Name|Description|
|-|-|
|default|Specify the contents of the props.text position to express more complex content|
|icon|Replace with an external icon|`,headings:[{level:2,text:`Introduction`},{level:2,text:`Usage`},{level:3,text:`Registrater icon component`},{level:3,text:`使用图标组件`},{level:2,text:`Advanced`},{level:2,text:`Reference`},{level:3,text:`Props`},{level:3,text:`Slots`}],tags:[],categories:[]},{path:`/en/docs/guide/introduce.html`,title:`Introduce`,summary:`Welcome to . Some features of this theme refer to the default theme of , but it is no longer modified on the default theme like  and . This is a new solution, for example, the style adopts the scheme of , and the page expansion capabilities such as blogs are realized through the plug-in . The configuration of the theme must rely on this document and cannot be compared with the official default theme document, as only a small number of configurations overlap with the official default theme docume...`,content:"Welcome to `vuepress-theme-reco@2.x`. Some features of this theme refer to the default theme of `vuepress@ 2.x`, but it is no longer modified on the default theme like `0.x` and `1.x`. This is a new solution, for example, the style adopts the scheme of `tailwindCSS`, and the page expansion capabilities such as blogs are realized through the plug-in `@vuepress-reco/vuepress-plugin-page`.\n\nThe configuration of the theme must rely on this document and cannot be compared with the official default theme document, as only a small number of configurations overlap with the official default theme document.",headings:[],tags:[],categories:[]},{path:`/en/docs/guide/package-manager.html`,title:`Package Manager`,summary:`If the package manager uses  or , only the  needs to be included: 1. . 2. . 3.  or. If the package manager uses ,  also needs to include .`,content:`If the package manager uses \`npm\` or \`yarn\`, only the \`package.json\` needs to be included:
1. \`vuepress\`.
2. \`vuepress-theme- recovery\`.
3. \`@ vuepress/bundler- vite\` or\` @ vuepress/bundler- webpack\`.

If the package manager uses \`pnpm\`, \`package.json\` also needs to include \`vue\`.

\`\`\`json
{
  "name": "vuepress-theme-reco-demo",
  "version": "2.0.0",
  "description": "Demo for vuepress-theme-reco@2.x.",
  "repository": "git@github.com:recoluan/vuepress-theme-reco-demo.git",
  "author": "reco_luan <recoluan@outlook.com>",
  "license": "MIT",
  "scripts": {
    "dev": "vuepress dev .",
    "start": "vuepress dev .",
    "build": "vuepress build ."
  },
  "dependencies": {
    "vue": "^3.5.0",
    "vuepress": "2.0.0-rc.19",
    "vuepress-theme-reco": "2.0.0-rc.26",
    "@vuepress/bundler-vite": "2.0.0-rc.19",
    "@vuepress/bundler-webpack": "2.0.0-rc.19"
  }
}
\`\`\``,headings:[],tags:[],categories:[]},{path:`/en/docs/guide/register-components.html`,title:`Register Components`,summary:`::: warning - Please refer to  for writing style. - If our documentation project is stored in a subdirectory of the project, such as the  folder, we need to set  to . ::: By default, the theme registers the  components under  globally.`,content:"::: warning\n- Please refer to [Guide/Style](/en/docs/guide/style) for writing style.\n- If our documentation project is stored in a subdirectory of the project, such as the `/docs` folder, we need to set `themeConfig.docsDir` to `/docs`.\n:::\n\n## Introduce\n\nBy default, the theme registers the `.vue` components under `/.vuepress/components` globally.",headings:[{level:2,text:`Introduce`}],tags:[],categories:[]},{path:`/en/docs/guide/register-layouts.html`,title:`Register Layouts`,summary:`::: warning - Please refer to  for writing style. - By default, the theme registers the  components under  globally. ::: By default, the theme registers the  components to layout component under  globally.If the component name is the same as the component name built into the theme, the default layout is overridden. **Generic Container** Please use  as the outer container for the layout component, which will add top navigation, sidebar and other capabilities to your customized layout. **Alias** Y...`,content:`::: warning
- Please refer to [Guide/Style](/en/docs/guide/style) for writing style.
- By default, the theme registers the \`.vue\` components under \`/.vuepress/components\` globally.
:::

## Introduce

By default, the theme registers the \`.vue\` components to layout component under \`/.vuepress/components\` globally.If the component name is the same as the component name built into the theme, the default layout is overridden.

## Specify the layout of a page

\`\`\`md
---
layout: CustomLayout
---
\`\`\`

## Development

**Generic Container**

Please use \`GenericContainer\` as the outer container for the layout component, which will add top navigation, sidebar and other capabilities to your customized layout.

**Alias**

You can directly introduce required built-in capabilities through these aliases.

\`\`\`ts
alias: {
  '@types': path.resolve(__dirname, '../types'),
  '@client': path.resolve(__dirname, '../client'),
  '@utils': path.resolve(__dirname, '../client/utils'),
  '@components': path.resolve(__dirname, '../client/components'),
  '@composables': path.resolve(__dirname, '../client/composables'),
},
\`\`\`

**Style**

Please refer to [here](/en/docs/guide/style.html)。

**Example**

\`\`\`vue
<template>
  <GenericContainer>
    <section class="page-404-wrapper">
      <div class="content">
        <h1>404</h1>
        <p>Oops! Page does not exist.</p>
        <div class="xicon-container">Go Home</div>
      </div>
    </section>
  </GenericContainer>
</template>

<script lang="ts" setup>
import GenericContainer from '@components/GenericContainer/index.vue'
import { useThemeLocaleData } from '@composables/index.js'
<\/script>

<style lang="postcss">
.page-404-wrapper {
  @apply bg-reco-primary;
}
</style>
\`\`\``,headings:[{level:2,text:`Introduce`},{level:2,text:`Specify the layout of a page`},{level:2,text:`Development`}],tags:[],categories:[]},{path:`/en/docs/guide/style.html`,title:`Style`,summary:"The css scheme of the reco theme is  +  + , you can directly write nested formats and loop formats (similar to scss) in css, which can be used directly regardless of custom styles or custom components. :::: code-group ::: code-group-item tailwindcss in html ::: ::: code-group-item tailwindcss in css ` ::: ::: code-group-item css nesting ` ::: ::: code-group-item css loop ` ::: :::: If you use the base, variables and components customized by the reco theme when writing tailwindcss, you need to im...",content:`## Introduce

The css scheme of the reco theme is [tailwindcss 3.0](https://tailwindcss.com/docs/installation) + [postcss-nested](https://github.com/postcss/postcss-nested) + [postcss-each](https://github.com/madyankin/postcss-each), you can directly write nested formats and loop formats (similar to scss) in css, which can be used directly regardless of custom styles or custom components.

## Example

:::: code-group
::: code-group-item tailwindcss in html
\`\`\`html
<div class="bg-indigo-500">reco_luan</div>
\`\`\`
:::
::: code-group-item tailwindcss in css
\`\`\`\`css
ul {
   @apply flex items-center list-none;
   li {
     @apply text-center text-base text-black;
   }
}
\`\`\`\`
:::
::: code-group-item css nesting
\`\`\`\`css
ul {
   diplay: flex;
   align-items: center;
   list-style: none;
   li {
     text-align: center;
     font-size: 16px;
     color: black;
   }
}
\`\`\`\`
:::
::: code-group-item css loop
\`\`\`\`css
@each $lang in html, css, javascript, vue {
   div.language-$(lang)::before {
     content: '$(lang)';
   }
}
\`\`\`\`
:::
::::

## Notice

If you use the base, variables and components customized by the reco theme when writing tailwindcss, you need to import \`@vuepress-reco/tailwindcss-config/lib/client/styles/components.css\` at the top of the css file:

\`\`\`\`css
@import url('@vuepress-reco/tailwindcss-config/lib/client/styles/components.css');
\`\`\`\``,headings:[{level:2,text:`Introduce`},{level:2,text:`Example`},{level:2,text:`Notice`}],tags:[],categories:[]},{path:`/en/docs/plugins/bulletin-popover.html`,title:`Announcement plugin`,summary:`::: warning Please note: The styles of the components inside the plugin are not built-in and need to be set manually. :::`,content:`::: warning
Please note: The styles of the components inside the plugin are not built-in and need to be set manually.
:::`,headings:[],tags:[],categories:[]},{path:`/en/docs/plugins/comments.html`,title:`Comment plugin`,summary:`::: warning This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later. :::`,content:`::: warning
This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later.
:::`,headings:[],tags:[],categories:[]},{path:`/en/docs/plugins/page.html`,title:`Page Enhancement Plugin`,summary:`::: warning This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later. :::`,content:`::: warning
This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later.
:::`,headings:[],tags:[],categories:[]},{path:`/en/docs/plugins/vue-previews.html`,title:`vue component preview plugin`,summary:`::: warning This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later. :::`,content:`::: warning
This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later.
:::`,headings:[],tags:[],categories:[]},{path:`/en/docs/theme/appearance.html`,title:`Appearance`,summary:`The theme automatically changes its appearance color according to the appearance color of the system by default, but allows users to set the default appearance color. Available values are , , , default .`,content:`## Introduction

The theme automatically changes its appearance color according to the appearance color of the system by default, but allows users to set the default appearance color. Available values are \`dark\`, \`light\`, \`auto\`, default \`auto\`.

## Usage

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    colorMode: 'dark', // dark, light, default auto
    colorModeSwitch: false // if show color mode switch，default true
  })
})
\`\`\``,headings:[{level:2,text:`Introduction`},{level:2,text:`Usage`}],tags:[],categories:[]},{path:`/en/docs/theme/auto-set-category.html`,title:`Auto Set Categories`,summary:`In order to save users' time cost, the theme can automatically set the classification for the blog under the  folder, that is, set the name of the folder where the file is located to the value of the  of the file's . ::: warning The  API will be adjusted later, but will not be abandoned, please use it with caution. :::`,content:`## Introduction

In order to save users' time cost, the theme can automatically set the classification for the blog under the \`blogs\` folder, that is, set the name of the folder where the file is located to the value of the \`categories\` of the file's \`frontmatter\`.

\`\`\`
/
└─ .vuepress
└─ blogs
  └─ Category 1
    └─ blog1.md
  └─ Category 2
    └─ blog2.md
\`\`\`

## Configure

::: warning
The \`autoAddCategoryToNavbar\` API will be adjusted later, but will not be abandoned, please use it with caution.
:::

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // automatically set categories
    autoSetBlogCategories: true,
    // automatically add categories and tags to the header navigation bar
    autoAddCategoryToNavbar: {
      location: 1, // insertion position，default 0
      showIcon: true, // display icon，default false
    },
    // when autoAddCategoryToNavbar is true, all defaults are taken.
    autoAddCategoryToNavbar: true
  })
})
\`\`\``,headings:[{level:2,text:`Introduction`},{level:2,text:`Configure`}],tags:[],categories:[]},{path:`/en/docs/theme/auto-set-series.html`,title:`Auto Set Series`,summary:`In order to save users' time cost, the theme can automatically generate a series of configurations for the documents under the  folder according to the folder nesting relationship.`,content:`## Introduction

In order to save users' time cost, the theme can automatically generate a series of configurations for the documents under the \`series\` folder according to the folder nesting relationship.

\`\`\`
/
└─ .vuepress
└─ series
  └─ sery 1
    └─ doc1.md
    └─ doc2.md
  └─ sery 2
    └─ group1
      └─ doc3.md
    └─ group2
      └─ doc4.md
\`\`\`

## Configure

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // auto set series
    autoSetSeries: true,
  })
})
\`\`\``,headings:[{level:2,text:`Introduction`},{level:2,text:`Configure`}],tags:[],categories:[]},{path:`/en/docs/theme/bulletin-popover.html`,title:`Announcement`,summary:"::: tip The content of the announcement is displayed in the upper right corner of the page in the form of a pop-up window. The display and hiding of the announcement depends on the variables in , so every time the website is opened, the announcement pop-up window will be displayed. ::: **width** - description: Announcement width, unit  - default： **title** - description: Announcement title - default： **body** - description: Announcement content - type: `{     type: 'text' | 'hr' | 'title' | 'but...",content:`::: tip
The content of the announcement is displayed in the upper right corner of the page in the form of a pop-up window. The display and hiding of the announcement depends on the variables in \`sessionStorage\`, so every time the website is opened, the announcement pop-up window will be displayed.
:::

## Configure

**width**

- description: Announcement width, unit \`px\`
- default：\`300\`

**title**

- description: Announcement title
- default：\`公告\`

**body**

- description: Announcement content
- type: \`{
    type: 'text' | 'hr' | 'title' | 'buttongroup',
    content?: string,
    children?: Array<{ text: string, link: string }> 
  }\`
- type description:
  |type|description|
  |-|-|
  |title|Title, need to configure the \`content\` property|
  |text|Text, need to configure the \`content\` property|
  |hr|Break line, similar to the \`hr\` tag, this type does not need to configure other properties|
  |buttongroup|Button group, only this type needs to configure \`children\`|
- Case: Take the theme official website as an example
- 
  \`\`\`ts
  // .vuepress/config.ts

  import { defineUserConfig } from 'vuepress'
  import { recoTheme } from 'vuepress-theme-reco'

  export default defineUserConfig({
    theme: recoTheme({
      bulletin: {
        body: [
          {
            type: 'text',
            content: \`🎉🎉🎉 The reco theme 2.x has been released in RC version, and there will be no major updates until the latest version is released.
            Everyone can enjoy the early adopters, and I hope you will actively feedback the experience in the QQ group and GitHub, and I will respond as soon as possible.\`,
            style: 'font-size: 12px;'
          },
          { type: 'hr' },
          { type: 'title', content: 'QQ 群' },
          {
            type: 'text',
            content: \`
            <ul>
              <li>QQ群1：1037296104</li>
              <li>QQ群2：1061561395</li>
              <li>QQ群3：962687802</li>
            </ul>\`,
            style: 'font-size: 12px;'
          },
          { type: 'hr' }
// ... [代码块已截断]
\`\`\``,headings:[{level:2,text:`Configure`}],tags:[],categories:[]},{path:`/en/docs/theme/comments.html`,title:`Comment`,summary:`The theme built-in comment plugin , currently supports ; If you want to not load comments by default, but only display comments on certain pages, you can set  in , and set  on pages that need to display comments. If it is only a certain article that you don't want to enable comments, you can set  in . For other parameters, please refer to . ::: tip If valine's interface for getting comments reports a  error, don't worry, this is because you haven't added a comment, as long as there is 1 comment,...`,content:`## Introduction

The theme built-in comment plugin \`@vuepress-reco/vuepress-plugin-comments\`, currently supports \`Valine, Walin, Giscus\`;

If you want to not load comments by default, but only display comments on certain pages, you can set \`hideComments: true\` in \`valineConfig\`, and set \`hideComments: false\` on pages that need to display comments.

If it is only a certain article that you don't want to enable comments, you can set \`hideComments: true\` in \`front-matter\`.

## Option API

### Valine

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'valine',
      options: {
        appId: '...', // your appId
        appKey: '...', // your appKey
        hideComments: true, // hide comments globally, default false
      },
    },
  }),
})
\`\`\`

For other parameters, please refer to [Valine official website](https://valine.js.org/configuration.html).
::: tip
If valine's interface for getting comments reports a \`404\` error, don't worry, this is because you haven't added a comment, as long as there is 1 comment, no error will be reported, this is just the request processing operation of \`leanCloud\`;
:::

### Waline

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'waline',
      options: {
        serverURL: 'your serverURL',
        ...
        hideComments: true, // hide comments globally, default false
      },
    },
  }),
})
\`\`\`

Refer to [Waline official website](https://waline.js.org/guide/get-started.html) for the tutorial and other parameters of options.

### Giscus

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'reco/blog-comments',
        repoId: 'R_kgDOxxxxxx',
        category: 'Announcements',
        categoryId: 'xxxxx',
        mapping: 'title',
        ...
        hideComments: true, // hide comments globally, default false
      },
    },
  }),
})
\`\`\`

Refer to [Giscus](https://giscus.app) for the tutorial and other parameters of options.

::: warning
Giscus uses an iframe referring to giscus.app, which requires to load css files from your own website. This causes an cross origin problem. You needn't to handle it when you are using development server, but when you are deploying the project, it is necessary to configure headers \`Access-Control-Allow-Origin\` and \`Access-Control-Allow-Headers\`, otherwise a style problem will occur.
:::`,headings:[{level:2,text:`Introduction`},{level:2,text:`Option API`},{level:3,text:`Valine`},{level:3,text:`Waline`},{level:3,text:`Giscus`}],tags:[],categories:[]},{path:`/en/docs/theme/custom-container.html`,title:`Custom Container`,summary:"is required,  and  are optional. The supported  are: -  -  -  -  **input** **output** ::: tip this is a tip ::: ::: info this is a info ::: ::: warning this is a warning ::: ::: danger this is a danger warning ::: ::: details this is a details tag ::: **input** js const foo = 'foo' js const bar = 'bar' ` **output** :::: code-group ::: code-group-item FOO ::: ::: code-group-item BAR ::: ::::",content:`## Tips related

\`\`\` md
::: <type> [title]
[content]
:::
\`\`\`

\`type\` is required, \`title\` and \`content\` are optional.

The supported \`type\` are:

- \`tip\`
- \`warning\`
- \`danger\`
- \`details\`

**input**

\`\`\` md
::: tip
this is a tip
:::

::: info
this is a info
:::

::: warning
this is a warning
:::

::: danger
This is a danger warning
:::

::: details
this is a details tag
:::
\`\`\`

**output**

::: tip
this is a tip
:::

::: info
this is a info
:::

::: warning
this is a warning
:::

::: danger
this is a danger warning
:::

::: details
this is a details tag
:::

## Code related

**input**

\`\`\`\`md
:::: code-group
::: code-group-item FOO
\`\`\`js
const foo = 'foo'
\`\`\`
:::
::: code-group-item BAR
\`\`\`js
const bar = 'bar'
\`\`\`
:::
::::
\`\`\`\`

**output**

:::: code-group
::: code-group-item FOO
\`\`\`js
const foo = 'foo'
\`\`\`
:::
::: code-group-item BAR
\`\`\`js
const bar = 'bar'
\`\`\`
:::
::::`,headings:[{level:2,text:`Tips related`},{level:2,text:`Code related`}],tags:[],categories:[]},{path:`/en/docs/theme/custom-primary-color.html`,title:`Customize Primary Color`,summary:`::: warning The theme configures css through , more configuration capabilities may be opened later, so the API of the current functionality may change later. ::: If you don't like the theme's default primary color, you can customize it by  :`,content:`::: warning
The theme configures css through \`tailwindcss\`, more configuration capabilities may be opened later, so the API of the current functionality may change later.
:::

If you don't like the theme's default primary color, you can customize it by \`themeConfig.primaryColor\` :

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    primaryColor: '#3aa675'
  })
})
\`\`\``,headings:[],tags:[],categories:[]},{path:`/en/docs/theme/doc-search.html`,title:`Search Function`,summary:`The theme already has a simple search capability built in. If you want to use , you can configure it.`,content:`## Introduction

The theme already has a simple search capability built in. If you want to use \`Algolia\`, you can configure it.

## Configure

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
  algolia: {
    appId: 'xxx',
    apiKey: 'xxx',
    indexName: 'xxx',
    inputSelector: '### REPLACE ME ####',
    algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    debug: false // Set debug to true if you want to inspect the dropdown
  },
  })
})
\`\`\``,headings:[{level:2,text:`Introduction`},{level:2,text:`Configure`}],tags:[],categories:[]},{path:`/en/docs/theme/frontmatter-home.html`,title:`Home Page`,summary:`::: tip In order to meet more usage scenarios of users, the theme has modularized the home page. Users can specify the content modules to be displayed and their display order in the  of the md file of the home page. More modules will be developed later for everyone to use , and supports users to customize the home page module as needed. ::: Currently, the built-in homepage modules include , , , , , , , and their configurations are as follows:   - description: Specify the home page module - defau...`,content:`::: tip
In order to meet more usage scenarios of users, the theme has modularized the home page. Users can specify the content modules to be displayed and their display order in the \`frontmatter\` of the md file of the home page. More modules will be developed later for everyone to use , and supports users to customize the home page module as needed.
:::

## Configure

Currently, the built-in homepage modules include \`Banner\`, \`BannerBrand\`, \`Features\`, \`Blog\`, \`MdContent\`, \`Comment\`, \`Footer\`, and their configurations are as follows:

### modules
 
- description: Specify the home page module
- default: \`['BannerBrand', 'Blog', 'Footer']\`
- optional：\`Banner\`、\`BannerBrand\`、\`Features\`、\`Blog\`、\`MdContent\`、\`Comment\`、\`Footer\`
- configuration item: 
  - Banner: Huge display map, can display logo, title, brief description, background image, top and bottom layout
  - BannerBrand: Huge display map in brand format, which can display logo, title, brief description, background image, button, left and right layout
  - Blog: Blog module, two-column layout, showing the list of blogs as a rule, and displaying user information and blog-related content on the right
  - MdContent: The markdown text display module of the home page
  - Comment: Comment Module
  - Footer: Home Bottom Module

### banner
- description: Used to configure the \`Banner\` module
- frontmatter options: 
  - heroText: title
  - tagline: Briefly
  - heroImage: index logo
  - heroImageStyle: index logo style
  - bgImage: Background image
  - bgImageStyle: Background image style
- case: 
  - <img width="600" alt="banner" src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png">

### bannerBrand
- description: Used to configure the \`BannerBrand\` module
- frontmatter options:
  - title: Title
  - descrition: Descrition
  - tagline: tagline
  - bgImage: Background image
  - bgImageStyle: Background image style
  - buttons: button
    - text: button text
    - link: content link
    - type: content style, the default background color, if not needed, can be set to 'plain' ds
- case: 
  - <img width="600" alt="bannerBrand" src="https://user-images.githubusercontent.com/18067907/214793265-d316133f-12c3-47a3-8f96-a34e5cca5087.png">

### blog
- description: Used to configure the \`Blog\` module
- frontmatter options:
  - socialLinks: For social address, See [here](/en/docs/guide/icon) for settings
    - icon: icon
    - link: button link
- themeConfig options: 
  - author: author name
  - authorAvatar: author avatar
- case:
  - <img width="600" alt="blog" src="https://user-images.githubusercontent.com/18067907/216823247-8aee08e1-2c24-45e5-8c2e-b9a919ed1c27.png">

### features
- description: Used to configure the feature list of home page
- frontmatter options: 
  - title：标题
  - details：详情
- case: 
  - <img width="600" alt="footer" src="https://github.com/vuepress-reco/vuepress-theme-reco/assets/18067907/5b1ced88-606a-4088-b32d-4a9c6ed9cc66">

### footer
- description: Used to configure the \`Footer\` module
- frontmatter options: 
  - record: Domain name filing copy
  - recordLink: Domain name registration address
  - cyberSecurityRecord: Police record copy
  - cyberSecurityLink: Public security record address
  - startYear: Start time of this site
- case: 
  - <img width="600" alt="footer" src="https://user-images.githubusercontent.com/18067907/152644689-f7fc1e34-6f43-44f5-86a0-fd26d4157bb1.png">

### MdContent
- description: The markdown text display module of the home page
- case: -

###  Comment
- description: Comment function, if the site wants to put the comment function on the home page, you can configure this option
- case: -

## Case

\`\`\`yaml
---
home: true
modules: # Designated homepage display module  - BannerBrand
  - Blog
  - MdContent
  - Features
  - Footer
banner: # banner module configuration
  heroText: 午后南杂
  tagline: Enjoy when you can, and endure when you must.
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /banner.jpg
  bgImageStyle:
    height: 450px
bannerBrand: # bannerBrand module configuration
  title: vuepress-reco
  description: A simple vuepress Blog & Doc theme.
  tagline: vuepress-theme-reco 2.0 continues to adhere to the concise style, all functions are out of the box, the home page is assembled modularly, the style is written with tailwindcss, and Vite is used as the default compiler. You only need to be responsible for content creation, please leave the rest to me.
  bgImage: /banner.jpg
  bgImageStyle:
    height: 450px
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Default Style, link: '/docs/theme/introduce',
// ... [代码块已截断]
\`\`\`

## Custom Home Module

::: warning
The css scheme of the reco theme is postcss + tailwindcss, which supports the latest CSS nesting proposal (class scss), you need to pay attention when writing styles for components.
:::

As long as the component is registered globally, it can be used by the home page as a module of the home page.

First, you can refer to [Register Components](/docs/guide/register-components.html) to register the homepage module component as a global component, and then configure it in the frontmatter of the homepage (if the custom module component is CustomModule):

\`\`\`yaml
---
home: true
modules: # Designated homepage display module
  - CustomModule
  - Footer
customModule: # customModule module configuration
  key: value
footer: # footer module configuration
  record: Domain name filing copy
  recordLink: Domain name registration address
  cyberSecurityRecord: Police record copy
  cyberSecurityLink: Public security record address
  startYear: 2018
---
\`\`\`

When developing the front page module, you can get the \`frontmatter\` configuration by the following methods:

\`\`\`js
import { usePageFrontmatter, withBase } from 'vuepress/utils'
const frontmatter = usePageFrontmatter()
\`\`\``,headings:[{level:2,text:`Configure`},{level:3,text:`modules`},{level:3,text:`banner`},{level:3,text:`bannerBrand`},{level:3,text:`blog`},{level:3,text:`features`},{level:3,text:`footer`},{level:3,text:`MdContent`},{level:3,text:`Comment`},{level:2,text:`Case`},{level:2,text:`Custom Home Module`}],tags:[],categories:[]},{path:`/en/docs/theme/frontmatter-page.html`,title:`Normal Pages`,summary:`:::tip The following is the  configuration unique to . For other configurations, please refer to 。 ::: - Type:  - Detail: page encryption password. - Refer:  - Type:  - Detail: The article is on top, according to 1, 2, 3,. To sort in descending order. - Type:  - Detail: 为当前页面添加额外的类名。 - Example:      Then you can customize styles of this page in  file:    - Also see:`,content:`:::tip
The following is the \`Frontmatter\` configuration unique to \`vuepress-theme- reco\`. For other configurations, please refer to [Vuepress Frontmatter](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html)。
:::

## password

- Type: \`string ｜ string[]\`
- Detail: page encryption password.
- Refer: [Reference->Theme Configuration-> Encryption](/en/docs/theme/password.html)

## sticky

- Type: \`number\`
- Detail: The article is on top, according to 1, 2, 3,. To sort in descending order.


## pageClass

- Type: \`string\`
- Detail: 为当前页面添加额外的类名。
- Example:
  \`\`\`md
    ---
    pageClass: custom-page-class
    ---
  \`\`\`

  Then you can customize styles of this page in \`.vuepress/styles/index.css\` file:

  \`\`\`css
  .theme-container {
    .custom-page-class {
      /* page styles */
    }
  }
  \`\`\`

- Also see: [Default Theme > Styles > Style File](/en/docs/theme/custom-style.html)`,headings:[{level:2,text:`password`},{level:2,text:`sticky`},{level:2,text:`pageClass`}],tags:[],categories:[]},{path:`/en/docs/theme/git.html`,title:`About Git`,summary:`:::tip Used to generate git jump addresses and edit links. If our project is stored in a subdirectory of the project, such as the  folder, we need to set  to . ::: **repo** - Type: string - Details: Specify the repository url of your project. This will be used as the link of the repository link, which will be displayed as the last item of the navbar. **docsRepo** - Type: string - Details: Specify the repository url of your documentation source files. This will be used for generating the edit thi...`,content:`## Introduction

:::tip
Used to generate git jump addresses and edit links.

If our project is stored in a subdirectory of the project, such as the \`/docs\` folder, we need to set \`themeConfig.docsDir\` to \`/docs\`.
:::

## Configuration

**repo**
- Type: string
- Details: Specify the repository url of your project. This will be used as the link of the repository link, which will be displayed as the last item of the navbar.

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // If you set it in the form of \`organization/repository\`
    // we will take it as a GitHub repo
    repo: 'vuejs/vuepress',
    // You can also set it to a URL directly
    repo: 'https://gitlab.com/foo/bar',
  })
})
\`\`\`

**docsRepo**
- Type: string
- Details: Specify the repository url of your documentation source files. This will be used for generating the edit this page link. If you don't set this option, it will use the repo option by default. But if your documentation source files are in a different repository, you will need to set this option.



**docsBranch**
- Type: string
- Default: 'main'
- Details: Specify the repository branch of your documentation source files. This will be used for generating the edit this page link.

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    docsDir: '/docs',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco',
    docsBranch: 'main',
  })
})
\`\`\`

**docsDir**
- Type: string
- Default: '.'
- Detail: The project is stored in a subdirectory of the project, such as the \`/docs\` folder, we need to set \`themeConfig.docsDir\` to \`/docs\`.Be sure to set it this way, because this configuration is strongly related to many parsing features.`,headings:[{level:2,text:`Introduction`},{level:2,text:`Configuration`}],tags:[],categories:[]},{path:`/en/docs/theme/home.html`,title:`another-home-path.md`,summary:`In some scenarios, the home page of a document is not necessarily the  file of the document root directory. In this case, you can set  in  to top the home page, and specify the home page path through . :::: code-group ::: code-group-item Specify the home page ::: ::: code-group-item Specify the home page path ::: ::::`,content:`## Introduction

In some scenarios, the home page of a document is not necessarily the \`README.md\` file of the document root directory. In this case, you can set \`README.md\` in \`Frontmatter\` to top the home page, and specify the home page path through \`themeConfig.home\`.

## Configuration

:::: code-group
::: code-group-item Specify the home page
\`\`\`yml
# another-home-path.md
---
title: specifies the home page
home: true
---
\`\`\`
:::
::: code-group-item Specify the home page path
\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    home: '/another-home-path'
  })
})
\`\`\`
:::
::::`,headings:[{level:2,text:`Introduction`},{level:2,text:`Configuration`},{level:1,text:`another-home-path.md`}],tags:[],categories:[]},{path:`/en/docs/theme/markdown-file-parse.html`,title:`Parse File To Code Group`,summary:`:::warning Note that the version after  cancels the ability of the  folder, and all components can be declared in the folder . ::: **Input** **Output** @`,content:`:::warning
Note that the version after \`2.0.0-rc.5\` cancels the ability of the \`vue-previews\` folder, and all components can be declared in the folder \`components\`.
:::

**Input**

\`\`\`md
@[code-group](@/docs/.vuepress/vue-previews/demo.vue)
\`\`\`

**Output**

@[code-group](@/docs/.vuepress/vue-previews/demo.vue)`,headings:[],tags:[],categories:[]},{path:`/en/docs/theme/markdown-task.html`,title:`Task List`,summary:`**Input** **Output** - [x] Play game - [ ] Study`,content:`**Input**

\`\`\`md
- [x] Play game
- [ ] Study
\`\`\`

**Output**

- [x] Play game
- [ ] Study`,headings:[],tags:[],categories:[]},{path:`/en/docs/theme/markdown-vue-preview.html`,title:`Vue Component Preview`,summary:`:::warning Note that the version after  cancels the ability of the  folder, and all components can be declared in the folder . ::: :::tip By default, the theme registers the  component under  globally, so the components that need to be previewed should be placed in this directory. Note:is not allowed in the file name. If our project is stored in a subdirectory of the project, such as the  folder, we need to set  to . ::: **Input** **Output** @`,content:":::warning\nNote that the version after `2.0.0-rc.5` cancels the ability of the `vue-previews` folder, and all components can be declared in the folder `components`.\n:::\n\n:::tip\nBy default, the theme registers the `.vue` component under `/.vuepress/components` globally, so the components that need to be previewed should be placed in this directory. Note:`-``_ `is not allowed in the file name.\n\nIf our project is stored in a subdirectory of the project, such as the `/docs` folder, we need to set `themeConfig.docsDir` to `/docs`.\n:::\n\n**Input**\n\n```md\n@[preview](@/docs/.vuepress/components/demo.vue)\n```\n\n**Output**\n\n@[preview](@/docs/.vuepress/components/demo.vue)",headings:[],tags:[],categories:[]},{path:`/en/docs/theme/multilingual.html`,title:`I18n`,summary:"These options configure locale-related texts. If your site is served in a different language besides English, you should set these options per locale to provide translations. > Please refer to  for detailed i18n config. |Options|Type|Default|Description| |-|-|-|-| |categoriesText||Categories|categories| |tagsText||Tags|tags| |catalogTitle||ON THIS PAGE|The title of the table of contents on the right of the article| |selectLanguageName||${lang}|Language name of Locale| |editLinkText||Edit this pa...",content:`These options configure locale-related texts.

If your site is served in a different language besides English, you should set these options per locale to provide translations.

> Please refer to [Official Documentation](https://v2.vuepress.vuejs.org/guide/i18n.html) for detailed i18n config.

## Options

|Options|Type|Default|Description|
|-|-|-|-|
|categoriesText|\`string\`|Categories|categories|
|tagsText|\`string\`|Tags|tags|
|catalogTitle|\`string\`|ON THIS PAGE|The title of the table of contents on the right of the article|
|selectLanguageName|\`string\`|\${lang}|Language name of Locale|
|editLinkText|\`string\`|Edit this page|Edit the text of the link on this pag|
|lastUpdatedText|\`string\`|Last Updated|The text of the recently updated timestamp label|
|tip|\`string\`|TIP|Customize the title of the tip container|
|info|\`string\`|INFO|Customize the title of the info container|
|warning|\`string\`|WARNING|Customize the title of the warning container|
|danger|\`string\`|DANGER|Customize the title of the danger container|
|details|\`string\`|DETAILS|Customize the title of the details container|
|notFound|\`string\`|Oops! Page does not exist.|404 page text|
|backToHome|\`string\`|Back To Home|404 page returns to the home page|
|inputPasswordText|\`string\`|Please enter the password|Password entry prompt|
|unlockSucessText|\`string\`|Success, enjoy it!|Prompt for successful password entry|
|unlockFailuerText|\`string\`|Failed, please enter again!|Password entry error prompt|

## Example

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
      tip: 'Tip',
      info: 'Info',
      tagsText: 'Tags',
      danger: 'Danger',
      warning: 'Warning',
      details: 'Details',
      backToHome: 'Back To Home',
      categoriesText: 'Categories',
      catalogTitle: 'On This Page',
      selectLanguageName: 'English',
      editLinkText: 'Edit this page',
      lastUpdatedText: 'Last Updated',
      notFound: 'Oops! Page does not exist.',
      inputPasswordText: 'Please enter the password',
      unlockSucessText: 'Success, enjoy it!',
      unlockFailuerText: 'Failed, please enter again!'
  })
})
\`\`\``,headings:[{level:2,text:`Options`},{level:2,text:`Example`}],tags:[],categories:[]},{path:`/en/docs/theme/navbar.html`,title:`Navbar`,summary:`::: tip For more information on setting icons, please see  :::`,content:`## Types

\`\`\`ts
interface NavbarItemBasic {
  text: string
  link?: string
  icon?: string
}

interface NavbarItem extends NavbarItemBasic {
  children?: NavbarItemBasic[]
}

type Navbar = NavbarItem[]
\`\`\`

::: tip
For more information on setting icons, please see [Guide-> Icon](/docs/guide/icon.html)
:::

## Refer

\`\`\`ts
export const navbar = [
  { text: 'Guide', link: '/en/docs/guide/introduce', icon: 'Compass' },
  {
    text: 'Reference',
    icon: 'Document',
    children: [
      {
        text: 'Configuration',
        children: [
          { text: 'Theme Configuration', link: '/en/docs/theme/frontmatter' },
          {
            text: 'Markdown Extension',
            link: '/en/docs/theme/custom-container',
          },
          { text: 'Advance', link: '/en/docs/theme/custom-catalog-title' },
        ],
      },
      {
        text: 'Plugins',
        children: [
          { text: 'page', link: '/en/docs/plugins/page' },
          { text: 'comments', link: '/en/docs/plugins/comments' },
          { text: 'vue-previews', link: '/en/docs/plugins/vue-previews' },
          {
            text: 'bulletin-popover',
            link: '/en/docs/plugins/bulletin-popover',
          },
        ],
      },
    ],
  },
  {
    text: 'Version',
    icon: 'SubVolume',
    children: [
      { text:
// ... [代码块已截断]
\`\`\``,headings:[{level:2,text:`Types`},{level:2,text:`Refer`}],tags:[],categories:[]},{path:`/en/docs/theme/pages.html`,title:`Register Pages`,summary:`:::info You can use  to customize and register some customized pages, such as the Timeline page. ::: Register layouts, please refer to 。`,content:`:::info
You can use \`pages\` to customize and register some customized pages, such as the Timeline page.
:::

## 注册

Register layouts, please refer to [here](/en/docs/guide/register-layouts.html)。

\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    pages: [
      {
        path: '/custom-page.html',
        layout: 'CustomLayout',
      },
    ]
  })
})
\`\`\``,headings:[{level:2,text:`注册`}],tags:[],categories:[]},{path:`/en/docs/theme/password.html`,title:`set a single password`,summary:`::: tip If the website as a whole or a document is private and does not want to be made public, you can only enter the content page after filling in the key login (login is invalid after closing the browser tab). - the number of passwords can only be 6 characters. - multiple passwords can be set through an array. ::: ::: warning 1. The security of encryption is low, please use it as appropriate. 2. If encryption is set, the anchor function will fail. ::: If your password is , you need to convert...`,content:`::: tip
If the website as a whole or a document is private and does not want to be made public, you can only enter the content page after filling in the key login (login is invalid after closing the browser tab).

- the number of passwords can only be 6 characters.
- multiple passwords can be set through an array.
:::

::: warning
1. The security of encryption is low, please use it as appropriate.
2. If encryption is set, the anchor function will fail.
:::

## Obtaining Ciphertext

If your password is \`123456\`, you need to convert it into ciphertext, that is, \`14e1b600b1fd579f47433b88e8d85291\`, use ciphertext to set the password.

After the website is released, enter \`123456\` in the password input box to enter the website, and others cannot know your password through the ciphertext in the code, but you must remember your password in plaintext.

Please enter the password plaintext in the input box below to get the corresponding ciphertext:

<md5 />

## Set Encryption

### Encrypt The e=Entire Website

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // set a single password
    password: '14e1b600b1fd579f47433b88e8d85291',
    // set multiple passwords
    password: [
      '14e1b600b1fd579f47433b88e8d85291',
      'f8de1968939dd4ac5992ce962993ac2b'
    ]
  })
})
\`\`\`

### Encrypting A Single Page

\`\`\`md
---
title: xxx
# set a single password
password: 14e1b600b1fd579f47433b88e8d85291
# set multiple passwords
password: 
 - 14e1b600b1fd579f47433b88e8d85291
 - f8de1968939dd4ac5992ce962993ac2b
---
\`\`\``,headings:[{level:2,text:`Obtaining Ciphertext`},{level:2,text:`Set Encryption`},{level:3,text:`Encrypt The e=Entire Website`},{level:3,text:`Encrypting A Single Page`},{level:1,text:`set a single password`},{level:1,text:`set multiple passwords`}],tags:[],categories:[]},{path:`/en/docs/theme/series.html`,title:`Series`,summary:`In ,  was changed to  for two reasons: 1. In , the sidebar is split into right sidebar', multiple documents can be aggregated in the left sidebar Together, to express the connection between them, the right sidebar shows the directory structure of the current page, because considering the  default theme, putting them all on the left sidebar will make it unfocused, but by  and  to represent  and , the semantics are not very good; 2. Considering that the documents that need to be put together must ...`,content:`## Introduction

In \`vuepress-theme-reco@2.x\`, \`sidebar\` was changed to \`series\` for two reasons:

1. In \`vuepress-theme-reco@1.x\`, the sidebar is split into \`left sidebar' and \`right sidebar', multiple documents can be aggregated in the left sidebar Together, to express the connection between them, the right sidebar shows the directory structure of the current page, because considering the \`vuepress\` default theme, putting them all on the left sidebar will make it unfocused, but by \`sidebar\` and \`subSidebar\` to represent \`left sidebar\` and \`right sidebar\`, the semantics are not very good;
2. Considering that the documents that need to be put together must be a "series" of documents, such as tutorials, anthologies, etc., \`series\` is used.

## Configure

### General

\`\`\` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [ 'introduce', 'usage' ]
    }
  }
}
\`\`\`

### Group

\`\`\`js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [
        {
          text: 'base',
          children: [ 'introduce', 'usage' ],
          collapsible: true // expand by default, true is collapsible
        },
        {
          text: 'advanced',
          children: [ 'home', 'series', 'comments' ]
        }
      ]
    }
  }
}
\`\`\`

### Sub Group

\`\`\`js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [
        {
          text: 'Group 1',
          children: [ 'introduce', 'usage' ]
          collapsible: true // This attribute can only be used for first-level groups
        },
        {
          text: 'Group 2',
          children: [
            {
              text: 'Sub Group 1',
              children: ['home']
            },
            {
              text: 'Sub Group 2',
              children: ['series', 'comments']
            }
          ]
        }
      ]
    }
  }
}
\`\`\`

### Error

::: warning
If the name of the article on the left shows the path to the document, you can turn children into full mode.
:::

\`\`\`js
// omit mode
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [ 'introduce', 'usage' ]
    }
  }
}

// full mode
module.exports = {
  themeConfig: {
    series: {
      '/vuepress-theme-reco/': [ '/vuepress-theme-reco/introduce', '/vuepress-theme-reco/usage' ]
    }
  }
}
\`\`\``,headings:[{level:2,text:`Introduction`},{level:2,text:`Configure`},{level:3,text:`General`},{level:3,text:`Group`},{level:3,text:`Sub Group`},{level:3,text:`Error`}],tags:[],categories:[]},{path:`/en/docs/theme/set-vite-bundler.html`,title:`User-defined packaging configuration`,summary:`::: tip We configure postcss plugins by default, which is the basic configuration to ensure project startup. ::: If you are not satisfied with our existing packaging or want to customize the packaging configuration, you can use this function, which is the Vite-based packaging configuration provided by vuepress@2.x, ， - description: User-defined packaging configuration - Options:   - viteOptions: Accepts all options of Vite.   - vuePluginOptions： Accepts all options of .`,content:`::: tip
We configure postcss plugins by default, which is the basic configuration to ensure project startup.
:::

If you are not satisfied with our existing packaging or want to customize the packaging configuration, you can use this function, which is the Vite-based packaging configuration provided by vuepress@2.x, [check the details](https://v2.vuepress.vuejs.org/reference/bundler/vite.html)，

## Configure

### viteBundler

- description: User-defined packaging configuration
- Options:
  - viteOptions: Accepts all options of Vite.
  - vuePluginOptions： Accepts all options of [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue).


\`\`\`ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    viteBundler: {
      viteOptions: {
        ...do somthing
      },
      vuePluginOptions: {
        ...do somthing
      }
    }
  })
})
\`\`\``,headings:[{level:2,text:`Configure`},{level:3,text:`viteBundler`}],tags:[],categories:[]},{path:`/en/docs/theme/social-links.html`,title:`Social Links`,summary:`::: tip For more information on setting icons, please see  :::`,content:`## Types

\`\`\`ts
type SocialLinks = Array<{
  link: string
  icon: string
}>
\`\`\`

## Refer

::: tip
For more information on setting icons, please see [Guide-> Icon](/docs/guide/icon.html)
:::

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
      'socialLinks': [
        { icon: 'IconGitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
      ]
  })
})
\`\`\``,headings:[{level:2,text:`Types`},{level:2,text:`Refer`}],tags:[],categories:[]},{path:`/en/docs/theme/source-dir.html`,title:`Source folder`,summary:`:::tip If our project is stored in a subdirectory of the project, such as the  folder, we need to set  to . Be sure to set it this way, because this configuration is strongly related to many parsing features. :::`,content:`## Introduction

:::tip
If our project is stored in a subdirectory of the project, such as the \`/docs\` folder, we need to set \`themeConfig.docsDir\` to \`/docs\`.

Be sure to set it this way, because this configuration is strongly related to many parsing features.
:::

## Configuration

\`\`\`ts
// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    docsDir: '/docs'
  })
})
\`\`\``,headings:[{level:2,text:`Introduction`},{level:2,text:`Configuration`}],tags:[],categories:[]}],timestamp:`2026-07-23T13:21:39.188Z`,totalPages:97,indexId:`DOC-eulq4r`},qg=e({default:()=>Jg}),Jg=ze({enhance({app:e}){e.provide(`aiChatSiteContext`,Kg)},rootComponents:[O(()=>()=>B(Gg))]}),Yg=e({default:()=>Xg}),Xg={enhance:({app:e})=>{e.component(`CustomBanner`,M(()=>K(()=>import(`./CustomBanner-CQjsAPTE.js`),__vite__mapDeps([2,3,4,1,5])))),e.component(`Examples`,M(()=>K(()=>import(`./Examples-D4tsw43h.js`),__vite__mapDeps([6,3,5,7,8])))),e.component(`IconChat`,M(()=>K(()=>import(`./IconChat-CbkMKvAW.js`),__vite__mapDeps([9,3,5])))),e.component(`IconCompass`,M(()=>K(()=>import(`./IconCompass-hVGdgc1c.js`),__vite__mapDeps([10,3,5])))),e.component(`IconDocument`,M(()=>K(()=>import(`./IconDocument-CpCppU4K.js`),__vite__mapDeps([11,3,5])))),e.component(`IconDocumentAttachment`,M(()=>K(()=>import(`./IconDocumentAttachment-BXxiQgcx.js`),__vite__mapDeps([12,3,5])))),e.component(`IconFire`,M(()=>K(()=>import(`./IconFire-Bn2dzXjE.js`),__vite__mapDeps([13,3,5])))),e.component(`IconHome`,M(()=>K(()=>import(`./IconHome-B5Tde3LA.js`),__vite__mapDeps([14,3,5])))),e.component(`IconReco`,M(()=>K(()=>import(`./IconReco-DNkby423.js`),__vite__mapDeps([15,3,5])))),e.component(`IconRevili`,M(()=>K(()=>import(`./IconRevili-CA43ZeJ4.js`),__vite__mapDeps([16,3,5])))),e.component(`IconSubVolume`,M(()=>K(()=>import(`./IconSubVolume-XTq9tF1T.js`),__vite__mapDeps([17,3,5])))),e.component(`Md5`,M(()=>K(()=>import(`./Md5-xrqYIi1B.js`),__vite__mapDeps([18,3,8,5,19])))),e.component(`demo`,M(()=>K(()=>import(`./demo-BTNFaB3L.js`),__vite__mapDeps([20,3]))))}},Zg=e({default:()=>Qg}),Qg=ze({enhance({app:e}){let t=xt(),n=e._context.provides[Ee],r=C(()=>Ye(t.value,n.routeLocale.value));e.provide(St,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}}),ot(e,t,r)}});async function $g(){r(Nt,[{title:`vuepress-theme-reco 一周岁`,frontmatter:{title:`vuepress-theme-reco 一周岁`,date:`2019-10-26T00:00:00.000Z`,categories:[`blog`],sticky:1},path:`/blogs/one-year-old.html`},{title:`Valine Admin 后台搭建(修订)`,frontmatter:{title:`Valine Admin 后台搭建(修订)`,date:`2020-07-06T00:00:00.000Z`,author:`Caleb`,categories:[`blog`]},path:`/blogs/valine-admin.html`},{title:`感谢 lookroot 对于主题推广的贡献`,frontmatter:{title:`感谢 lookroot 对于主题推广的贡献`,date:`2020-05-28T00:00:00.000Z`,author:`reco_luan`,categories:[`blog`]},path:`/blogs/lookroot.html`},{title:`如何在 GitHub Actions 时使用 secretKey`,frontmatter:{title:`如何在 GitHub Actions 时使用 secretKey`,date:`2020-03-20T00:00:00.000Z`,author:`xyh 🐸`,tags:[`Github Actions`,`Secret Key`],categories:[`blog`]},path:`/blogs/github-actions-secret-key.html`},{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`},{title:`Pages 部署`,frontmatter:{title:`Pages 部署`,date:`2019-05-14T00:00:00.000Z`,categories:[`blog`]},path:`/blogs/deploy.html`},{title:`vuepress-theme-reco`,frontmatter:{title:`vuepress-theme-reco`,date:`2019-04-09T00:00:00.000Z`,categories:[`blog`]},path:`/blogs/about.html`}]),r(ut,{}),r(Ze,{categories:{layout:`Categories`,items:{blog:{label:`blog`,length:7,categoryValue:`blog`,pages:[{title:`vuepress-theme-reco 一周岁`,frontmatter:{title:`vuepress-theme-reco 一周岁`,date:`2019-10-26T00:00:00.000Z`,categories:[`blog`],sticky:1},path:`/blogs/one-year-old.html`},{title:`Valine Admin 后台搭建(修订)`,frontmatter:{title:`Valine Admin 后台搭建(修订)`,date:`2020-07-06T00:00:00.000Z`,author:`Caleb`,categories:[`blog`]},path:`/blogs/valine-admin.html`},{title:`感谢 lookroot 对于主题推广的贡献`,frontmatter:{title:`感谢 lookroot 对于主题推广的贡献`,date:`2020-05-28T00:00:00.000Z`,author:`reco_luan`,categories:[`blog`]},path:`/blogs/lookroot.html`},{title:`如何在 GitHub Actions 时使用 secretKey`,frontmatter:{title:`如何在 GitHub Actions 时使用 secretKey`,date:`2020-03-20T00:00:00.000Z`,author:`xyh 🐸`,tags:[`Github Actions`,`Secret Key`],categories:[`blog`]},path:`/blogs/github-actions-secret-key.html`},{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`},{title:`Pages 部署`,frontmatter:{title:`Pages 部署`,date:`2019-05-14T00:00:00.000Z`,categories:[`blog`]},path:`/blogs/deploy.html`},{title:`vuepress-theme-reco`,frontmatter:{title:`vuepress-theme-reco`,date:`2019-04-09T00:00:00.000Z`,categories:[`blog`]},path:`/blogs/about.html`}]}},pageSize:10},tags:{layout:`Categories`,items:{"Github-Actions":{label:`Github Actions`,length:2,categoryValue:`Github-Actions`,pages:[{title:`如何在 GitHub Actions 时使用 secretKey`,frontmatter:{title:`如何在 GitHub Actions 时使用 secretKey`,date:`2020-03-20T00:00:00.000Z`,author:`xyh 🐸`,tags:[`Github Actions`,`Secret Key`],categories:[`blog`]},path:`/blogs/github-actions-secret-key.html`},{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`}]},"Secret-Key":{length:1,pages:[{title:`如何在 GitHub Actions 时使用 secretKey`,frontmatter:{title:`如何在 GitHub Actions 时使用 secretKey`,date:`2020-03-20T00:00:00.000Z`,author:`xyh 🐸`,tags:[`Github Actions`,`Secret Key`],categories:[`blog`]},path:`/blogs/github-actions-secret-key.html`}],label:`Secret Key`,categoryValue:`Secret-Key`},VuePress:{length:1,pages:[{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`}],label:`VuePress`,categoryValue:`VuePress`},boke:{length:1,pages:[{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`}],label:`博客`,categoryValue:`boke`}},pageSize:10}}),r(lt,{"/categories/blog/1.html":{pageSize:10,currentPage:1,totalPage:7,currentCategoryKey:`categories`,currentCategoryValue:`blog`,pages:[{title:`vuepress-theme-reco 一周岁`,frontmatter:{title:`vuepress-theme-reco 一周岁`,date:`2019-10-26T00:00:00.000Z`,categories:[`blog`],sticky:1},path:`/blogs/one-year-old.html`},{title:`Valine Admin 后台搭建(修订)`,frontmatter:{title:`Valine Admin 后台搭建(修订)`,date:`2020-07-06T00:00:00.000Z`,author:`Caleb`,categories:[`blog`]},path:`/blogs/valine-admin.html`},{title:`感谢 lookroot 对于主题推广的贡献`,frontmatter:{title:`感谢 lookroot 对于主题推广的贡献`,date:`2020-05-28T00:00:00.000Z`,author:`reco_luan`,categories:[`blog`]},path:`/blogs/lookroot.html`},{title:`如何在 GitHub Actions 时使用 secretKey`,frontmatter:{title:`如何在 GitHub Actions 时使用 secretKey`,date:`2020-03-20T00:00:00.000Z`,author:`xyh 🐸`,tags:[`Github Actions`,`Secret Key`],categories:[`blog`]},path:`/blogs/github-actions-secret-key.html`},{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`},{title:`Pages 部署`,frontmatter:{title:`Pages 部署`,date:`2019-05-14T00:00:00.000Z`,categories:[`blog`]},path:`/blogs/deploy.html`},{title:`vuepress-theme-reco`,frontmatter:{title:`vuepress-theme-reco`,date:`2019-04-09T00:00:00.000Z`,categories:[`blog`]},path:`/blogs/about.html`}]},"/tags/Github-Actions/1.html":{pageSize:10,currentPage:1,totalPage:2,currentCategoryKey:`tags`,currentCategoryValue:`Github-Actions`,pages:[{title:`如何在 GitHub Actions 时使用 secretKey`,frontmatter:{title:`如何在 GitHub Actions 时使用 secretKey`,date:`2020-03-20T00:00:00.000Z`,author:`xyh 🐸`,tags:[`Github Actions`,`Secret Key`],categories:[`blog`]},path:`/blogs/github-actions-secret-key.html`},{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`}]},"/tags/Secret-Key/1.html":{pageSize:10,currentPage:1,totalPage:1,currentCategoryKey:`tags`,currentCategoryValue:`Secret-Key`,pages:[{title:`如何在 GitHub Actions 时使用 secretKey`,frontmatter:{title:`如何在 GitHub Actions 时使用 secretKey`,date:`2020-03-20T00:00:00.000Z`,author:`xyh 🐸`,tags:[`Github Actions`,`Secret Key`],categories:[`blog`]},path:`/blogs/github-actions-secret-key.html`}]},"/tags/VuePress/1.html":{pageSize:10,currentPage:1,totalPage:1,currentCategoryKey:`tags`,currentCategoryValue:`VuePress`,pages:[{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`}]},"/tags/boke/1.html":{pageSize:10,currentPage:1,totalPage:1,currentCategoryKey:`tags`,currentCategoryValue:`boke`,pages:[{title:`使用 GitHub Actions 自动部署博客`,frontmatter:{title:`使用 GitHub Actions 自动部署博客`,date:`2020-02-10T00:00:00.000Z`,author:`Lasy`,tags:[`Github Actions`,`VuePress`,`博客`],categories:[`blog`]},path:`/blogs/github-actions.html`}]}})}var e_=e({default:()=>t_}),t_=ze({setup(){$g()}}),n_=b([{title:``,headers:[],path:`/timeline.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[],path:`/posts.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[],path:`/friendship-link.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[],path:`/categories/blog/1.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[],path:`/tags/Github-Actions/1.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[],path:`/tags/Secret-Key/1.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[],path:`/tags/VuePress/1.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[],path:`/tags/boke/1.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[],path:`/posts/1.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[{level:2,title:`快速开始`,slug:`快速开始`,link:`#快速开始`,children:[]}],path:`/`,pathLocale:`/`,extraFields:[]},{title:`vuepress-theme-reco`,headers:[{level:2,title:`Play Together`,slug:`play-together`,link:`#play-together`,children:[{level:3,title:`0.x`,slug:`_0-x`,link:`#_0-x`,children:[]},{level:3,title:`1.x`,slug:`_1-x`,link:`#_1-x`,children:[]},{level:3,title:`CLI`,slug:`cli`,link:`#cli`,children:[]},{level:3,title:`Contribute`,slug:`contribute`,link:`#contribute`,children:[]}]},{level:2,title:`Preview`,slug:`preview`,link:`#preview`,children:[]},{level:2,title:`License`,slug:`license`,link:`#license`,children:[]}],path:`/blogs/about.html`,pathLocale:`/`,extraFields:[]},{title:`Pages 部署`,headers:[{level:2,title:`GitHub`,slug:`github`,link:`#github`,children:[{level:3,title:`手动部署`,slug:`手动部署`,link:`#手动部署`,children:[]},{level:3,title:`自动部署`,slug:`自动部署`,link:`#自动部署`,children:[]}]},{level:2,title:`GitLab`,slug:`gitlab`,link:`#gitlab`,children:[{level:3,title:`手动部署`,slug:`手动部署-1`,link:`#手动部署-1`,children:[]},{level:3,title:`自动部署`,slug:`自动部署-1`,link:`#自动部署-1`,children:[]}]}],path:`/blogs/deploy.html`,pathLocale:`/`,extraFields:[]},{title:`如何在 GitHub Actions 时使用 secretKey`,headers:[{level:2,title:`如何在 GitHub Actions 时使用 secretKey`,slug:`如何在-github-actions-时使用-secretkey`,link:`#如何在-github-actions-时使用-secretkey`,children:[{level:3,title:`问题`,slug:`问题`,link:`#问题`,children:[]},{level:3,title:`解决方法`,slug:`解决方法`,link:`#解决方法`,children:[]},{level:3,title:`实施`,slug:`实施`,link:`#实施`,children:[]}]}],path:`/blogs/github-actions-secret-key.html`,pathLocale:`/`,extraFields:[]},{title:`使用 GitHub Actions 自动部署博客`,headers:[{level:2,title:`设置 Secrets`,slug:`设置-secrets`,link:`#设置-secrets`,children:[]},{level:2,title:`编写 workflow 文件`,slug:`编写-workflow-文件`,link:`#编写-workflow-文件`,children:[]},{level:2,title:`验证`,slug:`验证`,link:`#验证`,children:[{level:3,title:`部署失败`,slug:`部署失败`,link:`#部署失败`,children:[]},{level:3,title:`部署成功`,slug:`部署成功`,link:`#部署成功`,children:[]}]},{level:2,title:`其他`,slug:`其他`,link:`#其他`,children:[]}],path:`/blogs/github-actions.html`,pathLocale:`/`,extraFields:[]},{title:`感谢 lookroot 对于主题推广的贡献`,headers:[],path:`/blogs/lookroot.html`,pathLocale:`/`,extraFields:[]},{title:`vuepress-theme-reco 一周岁`,headers:[{level:2,title:`1`,slug:`_1`,link:`#_1`,children:[]},{level:2,title:`2`,slug:`_2`,link:`#_2`,children:[]},{level:2,title:`3`,slug:`_3`,link:`#_3`,children:[]},{level:2,title:`4`,slug:`_4`,link:`#_4`,children:[]}],path:`/blogs/one-year-old.html`,pathLocale:`/`,extraFields:[]},{title:`Valine Admin 后台搭建(修订)`,headers:[{level:2,title:`云引擎"一键"部署`,slug:`云引擎-一键-部署`,link:`#云引擎-一键-部署`,children:[{level:3,title:`1. 填写代码库`,slug:`_1-填写代码库`,link:`#_1-填写代码库`,children:[]},{level:3,title:`2.在设置页面，设置环境变量以及 Web 二级域名。`,slug:`_2-在设置页面-设置环境变量以及-web-二级域名。`,link:`#_2-在设置页面-设置环境变量以及-web-二级域名。`,children:[]},{level:3,title:`3.切换到部署标签页，分支使用master，点击部署即可`,slug:`_3-切换到部署标签页-分支使用master-点击部署即可`,link:`#_3-切换到部署标签页-分支使用master-点击部署即可`,children:[]},{level:3,title:`4.评论管理`,slug:`_4-评论管理`,link:`#_4-评论管理`,children:[]},{level:3,title:`5.定时任务设置`,slug:`_5-定时任务设置`,link:`#_5-定时任务设置`,children:[]}]},{level:2,title:`邮件通知模板`,slug:`邮件通知模板`,link:`#邮件通知模板`,children:[{level:3,title:`1.环境变量设定`,slug:`_1-环境变量设定`,link:`#_1-环境变量设定`,children:[]},{level:3,title:`2.自定义模板`,slug:`_2-自定义模板`,link:`#_2-自定义模板`,children:[]}]},{level:2,title:`改编版本教程`,slug:`改编版本教程`,link:`#改编版本教程`,children:[]},{level:2,title:`Qmsg酱`,slug:`qmsg酱`,link:`#qmsg酱`,children:[{level:3,title:`申请APPKey`,slug:`申请appkey`,link:`#申请appkey`,children:[]},{level:3,title:`Qmsg模板`,slug:`qmsg模板`,link:`#qmsg模板`,children:[]},{level:3,title:`QQ戳一戳`,slug:`qq戳一戳`,link:`#qq戳一戳`,children:[]}]},{level:2,title:`Server酱`,slug:`server酱`,link:`#server酱`,children:[{level:3,title:`申请SC_KEY`,slug:`申请sc-key`,link:`#申请sc-key`,children:[]},{level:3,title:`消息 标题/内容 模板`,slug:`消息-标题-内容-模板`,link:`#消息-标题-内容-模板`,children:[]},{level:3,title:`自定义 标题/内容 模板`,slug:`自定义-标题-内容-模板`,link:`#自定义-标题-内容-模板`,children:[]}]},{level:2,title:`改编版本内容介绍`,slug:`改编版本内容介绍`,link:`#改编版本内容介绍`,children:[{level:3,title:`完结撒花🎉🎉🎉`,slug:`完结撒花`,link:`#完结撒花`,children:[]}]}],path:`/blogs/valine-admin.html`,pathLocale:`/`,extraFields:[]},{title:`留言板`,headers:[],path:`/docs/message-board.html`,pathLocale:`/`,extraFields:[]},{title:``,headers:[{level:2,title:`Quick Start`,slug:`quick-start`,link:`#quick-start`,children:[]}],path:`/en/`,pathLocale:`/en/`,extraFields:[]},{title:`打赏`,headers:[{level:3,title:`说明`,slug:`说明`,link:`#说明`,children:[]},{level:3,title:`打赏记录`,slug:`打赏记录`,link:`#打赏记录`,children:[]}],path:`/docs/others/donate.html`,pathLocale:`/`,extraFields:[]},{title:`案例`,headers:[],path:`/docs/others/examples.html`,pathLocale:`/`,extraFields:[]},{title:`公告插件`,headers:[],path:`/docs/plugins/bulletin-popover.html`,pathLocale:`/`,extraFields:[]},{title:`评论插件`,headers:[],path:`/docs/plugins/comments.html`,pathLocale:`/`,extraFields:[]},{title:`页面增强插件`,headers:[],path:`/docs/plugins/page.html`,pathLocale:`/`,extraFields:[]},{title:`vue 组件预览插件`,headers:[],path:`/docs/plugins/vue-previews.html`,pathLocale:`/`,extraFields:[]},{title:`外观`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`使用`,slug:`使用`,link:`#使用`,children:[]}],path:`/docs/theme/appearance.html`,pathLocale:`/`,extraFields:[]},{title:`自动设置分类`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]}],path:`/docs/theme/auto-set-category.html`,pathLocale:`/`,extraFields:[]},{title:`自动设置系列`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]}],path:`/docs/theme/auto-set-series.html`,pathLocale:`/`,extraFields:[]},{title:`公告`,headers:[{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]}],path:`/docs/theme/bulletin-popover.html`,pathLocale:`/`,extraFields:[]},{title:`评论`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`Option API`,slug:`option-api`,link:`#option-api`,children:[{level:3,title:`Valine`,slug:`valine`,link:`#valine`,children:[]},{level:3,title:`Waline`,slug:`waline`,link:`#waline`,children:[]},{level:3,title:`Giscus`,slug:`giscus`,link:`#giscus`,children:[]}]}],path:`/docs/theme/comments.html`,pathLocale:`/`,extraFields:[]},{title:`自定义容器`,headers:[{level:2,title:`提示相关`,slug:`提示相关`,link:`#提示相关`,children:[]},{level:2,title:`代码相关`,slug:`代码相关`,link:`#代码相关`,children:[]}],path:`/docs/theme/custom-container.html`,pathLocale:`/`,extraFields:[]},{title:`自定义主题的基础色`,headers:[],path:`/docs/theme/custom-primary-color.html`,pathLocale:`/`,extraFields:[]},{title:`搜索功能`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]}],path:`/docs/theme/doc-search.html`,pathLocale:`/`,extraFields:[]},{title:`首页`,headers:[{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[{level:3,title:`modules`,slug:`modules`,link:`#modules`,children:[]},{level:3,title:`banner`,slug:`banner`,link:`#banner`,children:[]},{level:3,title:`bannerBrand`,slug:`bannerbrand`,link:`#bannerbrand`,children:[]},{level:3,title:`blog`,slug:`blog`,link:`#blog`,children:[]},{level:3,title:`features`,slug:`features`,link:`#features`,children:[]},{level:3,title:`footer`,slug:`footer`,link:`#footer`,children:[]},{level:3,title:`MdContent`,slug:`mdcontent`,link:`#mdcontent`,children:[]},{level:3,title:`Comment`,slug:`comment`,link:`#comment`,children:[]}]},{level:2,title:`案例`,slug:`案例`,link:`#案例`,children:[]},{level:2,title:`自定义首页模块`,slug:`自定义首页模块`,link:`#自定义首页模块`,children:[]}],path:`/docs/theme/frontmatter-home.html`,pathLocale:`/`,extraFields:[]},{title:`普通文档`,headers:[{level:2,title:`password`,slug:`password`,link:`#password`,children:[]},{level:2,title:`sticky`,slug:`sticky`,link:`#sticky`,children:[]},{level:2,title:`pageClass`,slug:`pageclass`,link:`#pageclass`,children:[]}],path:`/docs/theme/frontmatter-page.html`,pathLocale:`/`,extraFields:[]},{title:`git 相关`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]}],path:`/docs/theme/git.html`,pathLocale:`/`,extraFields:[]},{title:`首页路径`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]}],path:`/docs/theme/home.html`,pathLocale:`/`,extraFields:[]},{title:`解析文件为代码组`,headers:[],path:`/docs/theme/markdown-file-parse.html`,pathLocale:`/`,extraFields:[]},{title:`任务列表`,headers:[],path:`/docs/theme/markdown-task.html`,pathLocale:`/`,extraFields:[]},{title:`Vue 组件预览`,headers:[],path:`/docs/theme/markdown-vue-preview.html`,pathLocale:`/`,extraFields:[]},{title:`语言配置`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]},{level:2,title:`案例`,slug:`案例`,link:`#案例`,children:[]}],path:`/docs/theme/multilingual.html`,pathLocale:`/`,extraFields:[]},{title:`导航栏`,headers:[{level:2,title:`类型`,slug:`类型`,link:`#类型`,children:[]},{level:2,title:`参考`,slug:`参考`,link:`#参考`,children:[]}],path:`/docs/theme/navbar.html`,pathLocale:`/`,extraFields:[]},{title:`注册页面`,headers:[{level:2,title:`注册`,slug:`注册`,link:`#注册`,children:[]}],path:`/docs/theme/pages.html`,pathLocale:`/`,extraFields:[]},{title:`加密`,headers:[{level:2,title:`获取密文`,slug:`获取密文`,link:`#获取密文`,children:[]},{level:2,title:`设置加密`,slug:`设置加密`,link:`#设置加密`,children:[{level:3,title:`加密整个网站`,slug:`加密整个网站`,link:`#加密整个网站`,children:[]},{level:3,title:`加密单个页面`,slug:`加密单个页面`,link:`#加密单个页面`,children:[]}]}],path:`/docs/theme/password.html`,pathLocale:`/`,extraFields:[]},{title:`系列`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[{level:3,title:`普通`,slug:`普通`,link:`#普通`,children:[]},{level:3,title:`分组`,slug:`分组`,link:`#分组`,children:[]},{level:3,title:`子分组`,slug:`子分组`,link:`#子分组`,children:[]},{level:3,title:`异常`,slug:`异常`,link:`#异常`,children:[]}]}],path:`/docs/theme/series.html`,pathLocale:`/`,extraFields:[]},{title:`用户自定义配置打包`,headers:[{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[{level:3,title:`viteBundler`,slug:`vitebundler`,link:`#vitebundler`,children:[]}]}],path:`/docs/theme/set-vite-bundler.html`,pathLocale:`/`,extraFields:[]},{title:`社交地址`,headers:[{level:2,title:`类型`,slug:`类型`,link:`#类型`,children:[]},{level:2,title:`案例`,slug:`案例`,link:`#案例`,children:[]}],path:`/docs/theme/social-links.html`,pathLocale:`/`,extraFields:[]},{title:`源文件文件夹`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]}],path:`/docs/theme/source-dir.html`,pathLocale:`/`,extraFields:[]},{title:`架构`,headers:[{level:2,title:`架构`,slug:`架构`,link:`#架构`,children:[]},{level:2,title:`主题风格`,slug:`主题风格`,link:`#主题风格`,children:[]}],path:`/docs/guide/architecture.html`,pathLocale:`/`,extraFields:[]},{title:`内置页面`,headers:[],path:`/docs/guide/builtin-page.html`,pathLocale:`/`,extraFields:[]},{title:`打包工具`,headers:[{level:2,title:`使用打包工具`,slug:`使用打包工具`,link:`#使用打包工具`,children:[]},{level:2,title:`配置`,slug:`配置`,link:`#配置`,children:[]}],path:`/docs/guide/bundler.html`,pathLocale:`/`,extraFields:[]},{title:`贡献`,headers:[{level:2,title:`项目初始化`,slug:`项目初始化`,link:`#项目初始化`,children:[]},{level:2,title:`代码提交规范`,slug:`代码提交规范`,link:`#代码提交规范`,children:[]},{level:2,title:`PR 规范`,slug:`pr-规范`,link:`#pr-规范`,children:[]}],path:`/docs/guide/contribute.html`,pathLocale:`/`,extraFields:[]},{title:`自定义样式`,headers:[],path:`/docs/guide/custom-style.html`,pathLocale:`/`,extraFields:[]},{title:`文件夹规范`,headers:[],path:`/docs/guide/folder-specification.html`,pathLocale:`/`,extraFields:[]},{title:`快速开始`,headers:[{level:2,title:`快速开始`,slug:`快速开始`,link:`#快速开始`,children:[]},{level:2,title:`手动安装`,slug:`手动安装`,link:`#手动安装`,children:[]}],path:`/docs/guide/getting-started.html`,pathLocale:`/`,extraFields:[]},{title:`可视化搭建`,headers:[{level:2,title:`简介`,slug:`简介`,link:`#简介`,children:[]},{level:2,title:`效果展示`,slug:`效果展示`,link:`#效果展示`,children:[{level:3,title:`项目列表`,slug:`项目列表`,link:`#项目列表`,children:[]},{level:3,title:`选择文件夹`,slug:`选择文件夹`,link:`#选择文件夹`,children:[]},{level:3,title:`设置参数`,slug:`设置参数`,link:`#设置参数`,children:[]},{level:3,title:`创建项目`,slug:`创建项目`,link:`#创建项目`,children:[]}]}],path:`/docs/guide/gui-builder.html`,pathLocale:`/`,extraFields:[]},{title:`图标`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`使用`,slug:`使用`,link:`#使用`,children:[{level:3,title:`注册图标组件`,slug:`注册图标组件`,link:`#注册图标组件`,children:[]},{level:3,title:`使用图标组件`,slug:`使用图标组件`,link:`#使用图标组件`,children:[]}]},{level:2,title:`高级`,slug:`高级`,link:`#高级`,children:[]},{level:2,title:`参考`,slug:`参考`,link:`#参考`,children:[{level:3,title:`Props`,slug:`props`,link:`#props`,children:[]},{level:3,title:`Slots`,slug:`slots`,link:`#slots`,children:[]}]}],path:`/docs/guide/icon.html`,pathLocale:`/`,extraFields:[]},{title:`介绍`,headers:[{level:2,title:`与默认主题的关系`,slug:`与默认主题的关系`,link:`#与默认主题的关系`,children:[]},{level:2,title:`与默认主题的重叠的配置`,slug:`与默认主题的重叠的配置`,link:`#与默认主题的重叠的配置`,children:[]}],path:`/docs/guide/introduce.html`,pathLocale:`/`,extraFields:[]},{title:`包管理工具`,headers:[],path:`/docs/guide/package-manager.html`,pathLocale:`/`,extraFields:[]},{title:`注册组件`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]}],path:`/docs/guide/register-components.html`,pathLocale:`/`,extraFields:[]},{title:`注册布局`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`指定某个页面的布局`,slug:`指定某个页面的布局`,link:`#指定某个页面的布局`,children:[]},{level:2,title:`开发`,slug:`开发`,link:`#开发`,children:[]}],path:`/docs/guide/register-layouts.html`,pathLocale:`/`,extraFields:[]},{title:`样式`,headers:[{level:2,title:`介绍`,slug:`介绍`,link:`#介绍`,children:[]},{level:2,title:`示例`,slug:`示例`,link:`#示例`,children:[]},{level:2,title:`注意`,slug:`注意`,link:`#注意`,children:[]}],path:`/docs/guide/style.html`,pathLocale:`/`,extraFields:[]},{title:`message board`,headers:[],path:`/en/docs/message-board.html`,pathLocale:`/en/`,extraFields:[]},{title:`Architecture`,headers:[{level:2,title:`Architecture`,slug:`architecture`,link:`#architecture`,children:[]},{level:2,title:`Theme Style`,slug:`theme-style`,link:`#theme-style`,children:[]}],path:`/en/docs/guide/architecture.html`,pathLocale:`/en/`,extraFields:[]},{title:`Build-in Page`,headers:[],path:`/en/docs/guide/builtin-page.html`,pathLocale:`/en/`,extraFields:[]},{title:`Bundler`,headers:[{level:2,title:`Use a Bundler`,slug:`use-a-bundler`,link:`#use-a-bundler`,children:[]},{level:2,title:`Options`,slug:`options`,link:`#options`,children:[]}],path:`/en/docs/guide/bundler.html`,pathLocale:`/en/`,extraFields:[]},{title:`Contribute`,headers:[{level:2,title:`Initialization`,slug:`initialization`,link:`#initialization`,children:[]},{level:2,title:`Git commit specification`,slug:`git-commit-specification`,link:`#git-commit-specification`,children:[]},{level:2,title:`Git PR specification`,slug:`git-pr-specification`,link:`#git-pr-specification`,children:[]}],path:`/en/docs/guide/contribute.html`,pathLocale:`/en/`,extraFields:[]},{title:`Custom Style`,headers:[],path:`/en/docs/guide/custom-style.html`,pathLocale:`/en/`,extraFields:[]},{title:`Folder Specification`,headers:[],path:`/en/docs/guide/folder-specification.html`,pathLocale:`/en/`,extraFields:[]},{title:`Quick start`,headers:[{level:2,title:`Quick Start`,slug:`quick-start`,link:`#quick-start`,children:[]},{level:2,title:`Manual Installation`,slug:`manual-installation`,link:`#manual-installation`,children:[]}],path:`/en/docs/guide/getting-started.html`,pathLocale:`/en/`,extraFields:[]},{title:`Visual Building`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Display`,slug:`display`,link:`#display`,children:[{level:3,title:`Project List`,slug:`project-list`,link:`#project-list`,children:[]},{level:3,title:`Choose Folder`,slug:`choose-folder`,link:`#choose-folder`,children:[]},{level:3,title:`Set Options`,slug:`set-options`,link:`#set-options`,children:[]},{level:3,title:`Create Project`,slug:`create-project`,link:`#create-project`,children:[]}]}],path:`/en/docs/guide/gui-builder.html`,pathLocale:`/en/`,extraFields:[]},{title:`Icon`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Usage`,slug:`usage`,link:`#usage`,children:[{level:3,title:`Registrater icon component`,slug:`registrater-icon-component`,link:`#registrater-icon-component`,children:[]},{level:3,title:`使用图标组件`,slug:`使用图标组件`,link:`#使用图标组件`,children:[]}]},{level:2,title:`Advanced`,slug:`advanced`,link:`#advanced`,children:[]},{level:2,title:`Reference`,slug:`reference`,link:`#reference`,children:[{level:3,title:`Props`,slug:`props`,link:`#props`,children:[]},{level:3,title:`Slots`,slug:`slots`,link:`#slots`,children:[]}]}],path:`/en/docs/guide/icon.html`,pathLocale:`/en/`,extraFields:[]},{title:`Introduce`,headers:[],path:`/en/docs/guide/introduce.html`,pathLocale:`/en/`,extraFields:[]},{title:`Package Manager`,headers:[],path:`/en/docs/guide/package-manager.html`,pathLocale:`/en/`,extraFields:[]},{title:`Register Components`,headers:[{level:2,title:`Introduce`,slug:`introduce`,link:`#introduce`,children:[]}],path:`/en/docs/guide/register-components.html`,pathLocale:`/en/`,extraFields:[]},{title:`Register Layouts`,headers:[{level:2,title:`Introduce`,slug:`introduce`,link:`#introduce`,children:[]},{level:2,title:`Specify the layout of a page`,slug:`specify-the-layout-of-a-page`,link:`#specify-the-layout-of-a-page`,children:[]},{level:2,title:`Development`,slug:`development`,link:`#development`,children:[]}],path:`/en/docs/guide/register-layouts.html`,pathLocale:`/en/`,extraFields:[]},{title:`Style`,headers:[{level:2,title:`Introduce`,slug:`introduce`,link:`#introduce`,children:[]},{level:2,title:`Example`,slug:`example`,link:`#example`,children:[]},{level:2,title:`Notice`,slug:`notice`,link:`#notice`,children:[]}],path:`/en/docs/guide/style.html`,pathLocale:`/en/`,extraFields:[]},{title:`Announcement plugin`,headers:[],path:`/en/docs/plugins/bulletin-popover.html`,pathLocale:`/en/`,extraFields:[]},{title:`Comment plugin`,headers:[],path:`/en/docs/plugins/comments.html`,pathLocale:`/en/`,extraFields:[]},{title:`Page Enhancement Plugin`,headers:[],path:`/en/docs/plugins/page.html`,pathLocale:`/en/`,extraFields:[]},{title:`vue component preview plugin`,headers:[],path:`/en/docs/plugins/vue-previews.html`,pathLocale:`/en/`,extraFields:[]},{title:`Appearance`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Usage`,slug:`usage`,link:`#usage`,children:[]}],path:`/en/docs/theme/appearance.html`,pathLocale:`/en/`,extraFields:[]},{title:`Auto Set Categories`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Configure`,slug:`configure`,link:`#configure`,children:[]}],path:`/en/docs/theme/auto-set-category.html`,pathLocale:`/en/`,extraFields:[]},{title:`Auto Set Series`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Configure`,slug:`configure`,link:`#configure`,children:[]}],path:`/en/docs/theme/auto-set-series.html`,pathLocale:`/en/`,extraFields:[]},{title:`Announcement`,headers:[{level:2,title:`Configure`,slug:`configure`,link:`#configure`,children:[]}],path:`/en/docs/theme/bulletin-popover.html`,pathLocale:`/en/`,extraFields:[]},{title:`Comment`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Option API`,slug:`option-api`,link:`#option-api`,children:[{level:3,title:`Valine`,slug:`valine`,link:`#valine`,children:[]},{level:3,title:`Waline`,slug:`waline`,link:`#waline`,children:[]},{level:3,title:`Giscus`,slug:`giscus`,link:`#giscus`,children:[]}]}],path:`/en/docs/theme/comments.html`,pathLocale:`/en/`,extraFields:[]},{title:`Custom Container`,headers:[{level:2,title:`Tips related`,slug:`tips-related`,link:`#tips-related`,children:[]},{level:2,title:`Code related`,slug:`code-related`,link:`#code-related`,children:[]}],path:`/en/docs/theme/custom-container.html`,pathLocale:`/en/`,extraFields:[]},{title:`Customize Primary Color`,headers:[],path:`/en/docs/theme/custom-primary-color.html`,pathLocale:`/en/`,extraFields:[]},{title:`Search Function`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Configure`,slug:`configure`,link:`#configure`,children:[]}],path:`/en/docs/theme/doc-search.html`,pathLocale:`/en/`,extraFields:[]},{title:`Home Page`,headers:[{level:2,title:`Configure`,slug:`configure`,link:`#configure`,children:[{level:3,title:`modules`,slug:`modules`,link:`#modules`,children:[]},{level:3,title:`banner`,slug:`banner`,link:`#banner`,children:[]},{level:3,title:`bannerBrand`,slug:`bannerbrand`,link:`#bannerbrand`,children:[]},{level:3,title:`blog`,slug:`blog`,link:`#blog`,children:[]},{level:3,title:`features`,slug:`features`,link:`#features`,children:[]},{level:3,title:`footer`,slug:`footer`,link:`#footer`,children:[]},{level:3,title:`MdContent`,slug:`mdcontent`,link:`#mdcontent`,children:[]},{level:3,title:`Comment`,slug:`comment`,link:`#comment`,children:[]}]},{level:2,title:`Case`,slug:`case`,link:`#case`,children:[]},{level:2,title:`Custom Home Module`,slug:`custom-home-module`,link:`#custom-home-module`,children:[]}],path:`/en/docs/theme/frontmatter-home.html`,pathLocale:`/en/`,extraFields:[]},{title:`Normal Pages`,headers:[{level:2,title:`password`,slug:`password`,link:`#password`,children:[]},{level:2,title:`sticky`,slug:`sticky`,link:`#sticky`,children:[]},{level:2,title:`pageClass`,slug:`pageclass`,link:`#pageclass`,children:[]}],path:`/en/docs/theme/frontmatter-page.html`,pathLocale:`/en/`,extraFields:[]},{title:`About Git`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Configuration`,slug:`configuration`,link:`#configuration`,children:[]}],path:`/en/docs/theme/git.html`,pathLocale:`/en/`,extraFields:[]},{title:`Home Page Path`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Configuration`,slug:`configuration`,link:`#configuration`,children:[]}],path:`/en/docs/theme/home.html`,pathLocale:`/en/`,extraFields:[]},{title:`Parse File To Code Group`,headers:[],path:`/en/docs/theme/markdown-file-parse.html`,pathLocale:`/en/`,extraFields:[]},{title:`Task List`,headers:[],path:`/en/docs/theme/markdown-task.html`,pathLocale:`/en/`,extraFields:[]},{title:`Vue Component Preview`,headers:[],path:`/en/docs/theme/markdown-vue-preview.html`,pathLocale:`/en/`,extraFields:[]},{title:`I18n`,headers:[{level:2,title:`Options`,slug:`options`,link:`#options`,children:[]},{level:2,title:`Example`,slug:`example`,link:`#example`,children:[]}],path:`/en/docs/theme/multilingual.html`,pathLocale:`/en/`,extraFields:[]},{title:`Navbar`,headers:[{level:2,title:`Types`,slug:`types`,link:`#types`,children:[]},{level:2,title:`Refer`,slug:`refer`,link:`#refer`,children:[]}],path:`/en/docs/theme/navbar.html`,pathLocale:`/en/`,extraFields:[]},{title:`Register Pages`,headers:[{level:2,title:`注册`,slug:`注册`,link:`#注册`,children:[]}],path:`/en/docs/theme/pages.html`,pathLocale:`/en/`,extraFields:[]},{title:`Encryption`,headers:[{level:2,title:`Obtaining Ciphertext`,slug:`obtaining-ciphertext`,link:`#obtaining-ciphertext`,children:[]},{level:2,title:`Set Encryption`,slug:`set-encryption`,link:`#set-encryption`,children:[{level:3,title:`Encrypt The e=Entire Website`,slug:`encrypt-the-e-entire-website`,link:`#encrypt-the-e-entire-website`,children:[]},{level:3,title:`Encrypting A Single Page`,slug:`encrypting-a-single-page`,link:`#encrypting-a-single-page`,children:[]}]}],path:`/en/docs/theme/password.html`,pathLocale:`/en/`,extraFields:[]},{title:`Series`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Configure`,slug:`configure`,link:`#configure`,children:[{level:3,title:`General`,slug:`general`,link:`#general`,children:[]},{level:3,title:`Group`,slug:`group`,link:`#group`,children:[]},{level:3,title:`Sub Group`,slug:`sub-group`,link:`#sub-group`,children:[]},{level:3,title:`Error`,slug:`error`,link:`#error`,children:[]}]}],path:`/en/docs/theme/series.html`,pathLocale:`/en/`,extraFields:[]},{title:`User-defined packaging configuration`,headers:[{level:2,title:`Configure`,slug:`configure`,link:`#configure`,children:[{level:3,title:`viteBundler`,slug:`vitebundler`,link:`#vitebundler`,children:[]}]}],path:`/en/docs/theme/set-vite-bundler.html`,pathLocale:`/en/`,extraFields:[]},{title:`Social Links`,headers:[{level:2,title:`Types`,slug:`types`,link:`#types`,children:[]},{level:2,title:`Refer`,slug:`refer`,link:`#refer`,children:[]}],path:`/en/docs/theme/social-links.html`,pathLocale:`/en/`,extraFields:[]},{title:`Source folder`,headers:[{level:2,title:`Introduction`,slug:`introduction`,link:`#introduction`,children:[]},{level:2,title:`Configuration`,slug:`configuration`,link:`#configuration`,children:[]}],path:`/en/docs/theme/source-dir.html`,pathLocale:`/en/`,extraFields:[]},{title:`donate`,headers:[{level:2,title:`说明`,slug:`说明`,link:`#说明`,children:[]},{level:2,title:`Donation Record`,slug:`donation-record`,link:`#donation-record`,children:[]}],path:`/en/docs/others/donate.html`,pathLocale:`/en/`,extraFields:[]},{title:`Examples`,headers:[],path:`/en/docs/others/examples.html`,pathLocale:`/en/`,extraFields:[]},{title:``,headers:[],path:`/404.html`,pathLocale:`/`,extraFields:[]}]),r_=()=>n_,i_=/[^\u0000-\u007F]/u,a_=e=>e.split(/\s+/gu).map(e=>e.trim()).filter(Boolean),o_=e=>e.replaceAll(/[-/\\^$*+?.()|[\]{}]/gu,String.raw`\$&`),s_=(e,t)=>{let n=t.join(` `),r=a_(e);if(i_.test(e))return r.some(e=>n.toLowerCase().includes(e));let i=e.endsWith(` `);return RegExp(`${r.map((e,t)=>r.length===t+1&&!i?`(?=.*\\b${o_(e)})`:`(?=.*\\b${o_(e)}\\b)`).join(``)}.+`,`giu`).test(n)},c_=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:r})=>{let i=C(()=>e.value.filter(e=>e.pathLocale===t.value));return C(()=>{let e=n.value.trim().toLowerCase();if(!e)return[];let t=[],a=(n,i)=>{s_(e,[i.title])&&t.push({link:`${n.path}#${i.slug}`,title:n.title,header:i.title});for(let e of i.children){if(t.length>=r.value)return;a(n,e)}};for(let n of i.value){if(t.length>=r.value)break;if(s_(e,[n.title,...n.extraFields])){t.push({link:n.path,title:n.title});continue}for(let e of n.headers){if(t.length>=r.value)break;a(n,e)}}return t})},l_=e=>{let t=b(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?--t.value:t.value=e.value.length-1}}},u_=O({name:`SearchBox`,props:{locales:{type:Object,default:()=>({})},hotKeys:Array,maxSuggestions:{type:Number,default:5}},setup(e){let{locales:t,hotKeys:n,maxSuggestions:r}=z(e),i=rt(t),a=be(),o=Ke(),s=r_(),c=b(null),l=b(!1),u=b(``),d=c_({searchIndex:s,routeLocale:o,query:u,maxSuggestions:r}),{focusIndex:f,focusNext:p,focusPrev:m}=l_(d);et(n,()=>{c.value?.focus()});let h=C(()=>l.value&&d.value.length>0),g=()=>{h.value&&m()},_=()=>{h.value&&p()},v=e=>{if(!h.value)return;let t=d.value[e];t&&a.push(t.link).then(()=>{u.value=``,f.value=0})};return()=>B(`form`,{class:`search-box`,role:`search`},[B(`input`,{ref:c,type:`search`,placeholder:i.value.placeholder,autocomplete:`off`,spellcheck:!1,value:u.value,onFocus:()=>{l.value=!0},onBlur:()=>{l.value=!1},onInput:e=>{u.value=e.target.value},onKeydown:e=>{switch(e.key){case`ArrowUp`:g();break;case`ArrowDown`:_();break;case`Enter`:e.preventDefault(),v(f.value);break;default:}}}),h.value&&B(`ul`,{class:`suggestions`,onMouseleave:()=>{f.value=-1}},d.value.map(({link:e,title:t,header:n},r)=>B(`li`,{class:[`suggestion`,{focus:f.value===r}],onMouseenter:()=>{f.value=r},onMousedown:()=>{v(r)}},B(`a`,{href:e,onClick:e=>{e.preventDefault()}},[B(`span`,{class:`page-title`},t),n&&B(`span`,{class:`page-header`},`> ${n}`)]))))])}}),d_=e({default:()=>h_}),f_={"/":{placeholder:`搜索`},"/en/":{placeholder:`Search`}},p_=[{key:`s`,ctrl:!0}],m_=5,h_=ze({enhance({app:e}){e.component(`SearchBox`,e=>B(u_,{locales:f_,hotKeys:p_,maxSuggestions:m_,...e}))}}),g_=Symbol(`mediumZoom`),__=()=>{let e=w(g_);if(!e)throw Error(`useMediumZoom() is called without provider.`);return e},v_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y_=function(e){return e.tagName===`IMG`},b_=function(e){return NodeList.prototype.isPrototypeOf(e)},x_=function(e){return e&&e.nodeType===1},S_=function(e){return(e.currentSrc||e.src).substr(-4).toLowerCase()===`.svg`},C_=function(e){try{return Array.isArray(e)?e.filter(y_):b_(e)?[].slice.call(e).filter(y_):x_(e)?[e].filter(y_):typeof e==`string`?[].slice.call(document.querySelectorAll(e)).filter(y_):[]}catch{throw TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},w_=function(e){var t=document.createElement(`div`);return t.classList.add(`medium-zoom-overlay`),t.style.background=e,t},T_=function(e){var t=e.getBoundingClientRect(),n=t.top,r=t.left,i=t.width,a=t.height,o=e.cloneNode(),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return o.removeAttribute(`id`),o.style.position=`absolute`,o.style.top=n+s+`px`,o.style.left=r+c+`px`,o.style.width=i+`px`,o.style.height=a+`px`,o.style.transform=``,o},E_=function(e,t){var n=v_({bubbles:!1,cancelable:!1,detail:void 0},t);if(typeof window.CustomEvent==`function`)return new CustomEvent(e,n);var r=document.createEvent(`CustomEvent`);return r.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),r},D_=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(e){function t(){}e(t,t)},i=function(e){var t=e.target;if(t===T){m();return}y.indexOf(t)!==-1&&h({target:t})},a=function(){if(!(x||!w.original)){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(S-e)>C.scrollOffset&&setTimeout(m,150)}},o=function(e){var t=e.key||e.keyCode;(t===`Escape`||t===`Esc`||t===27)&&m()},s=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e;return e.background&&(T.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=v_({},C.container,e.container)),e.template&&(t.template=x_(e.template)?e.template:document.querySelector(e.template)),C=v_({},C,t),y.forEach(function(e){e.dispatchEvent(E_(`medium-zoom:update`,{detail:{zoom:E}}))}),E},c=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(v_({},C,t))},l=function(){var e=[...arguments].reduce(function(e,t){return[].concat(e,C_(t))},[]);return e.filter(function(e){return y.indexOf(e)===-1}).forEach(function(e){y.push(e),e.classList.add(`medium-zoom-image`)}),b.forEach(function(t){var n=t.type,r=t.listener,i=t.options;e.forEach(function(e){e.addEventListener(n,r,i)})}),E},u=function(){var e=[...arguments];w.zoomed&&m();var t=e.length>0?e.reduce(function(e,t){return[].concat(e,C_(t))},[]):y;return t.forEach(function(e){e.classList.remove(`medium-zoom-image`),e.dispatchEvent(E_(`medium-zoom:detach`,{detail:{zoom:E}}))}),y=y.filter(function(e){return t.indexOf(e)===-1}),E},d=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(r){r.addEventListener(`medium-zoom:`+e,t,n)}),b.push({type:`medium-zoom:`+e,listener:t,options:n}),E},f=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(r){r.removeEventListener(`medium-zoom:`+e,t,n)}),b=b.filter(function(n){return!(n.type===`medium-zoom:`+e&&n.listener.toString()===t.toString())}),E},p=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).target,t=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,n=void 0;if(C.container)if(C.container instanceof Object)e=v_({},e,C.container),t=e.width-e.left-e.right-C.margin*2,n=e.height-e.top-e.bottom-C.margin*2;else{var r=(x_(C.container)?C.container:document.querySelector(C.container)).getBoundingClientRect(),i=r.width,a=r.height,o=r.left,s=r.top;e=v_({},e,{width:i,height:a,left:o,top:s})}t||=e.width-C.margin*2,n||=e.height-C.margin*2;var c=w.zoomedHd||w.original,l=S_(c)?t:c.naturalWidth||t,u=S_(c)?n:c.naturalHeight||n,d=c.getBoundingClientRect(),f=d.top,p=d.left,m=d.width,h=d.height,g=Math.min(Math.max(m,l),t)/m,_=Math.min(Math.max(h,u),n)/h,v=Math.min(g,_),y=(-p+(t-m)/2+C.margin+e.left)/v,b=(-f+(n-h)/2+C.margin+e.top)/v,x=`scale(`+v+`) translate3d(`+y+`px, `+b+`px, 0)`;w.zoomed.style.transform=x,w.zoomedHd&&(w.zoomedHd.style.transform=x)};return new r(function(n){if(e&&y.indexOf(e)===-1){n(E);return}var r=function e(){x=!1,w.zoomed.removeEventListener(`transitionend`,e),w.original.dispatchEvent(E_(`medium-zoom:opened`,{detail:{zoom:E}})),n(E)};if(w.zoomed){n(E);return}if(e)w.original=e;else if(y.length>0)w.original=y[0];else{n(E);return}if(w.original.dispatchEvent(E_(`medium-zoom:open`,{detail:{zoom:E}})),S=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,x=!0,w.zoomed=T_(w.original),document.body.appendChild(T),C.template){var i=x_(C.template)?C.template:document.querySelector(C.template);w.template=document.createElement(`div`),w.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(w.template)}if(w.original.parentElement&&w.original.parentElement.tagName===`PICTURE`&&w.original.currentSrc&&(w.zoomed.src=w.original.currentSrc),document.body.appendChild(w.zoomed),window.requestAnimationFrame(function(){document.body.classList.add(`medium-zoom--opened`)}),w.original.classList.add(`medium-zoom-image--hidden`),w.zoomed.classList.add(`medium-zoom-image--opened`),w.zoomed.addEventListener(`click`,m),w.zoomed.addEventListener(`transitionend`,r),w.original.getAttribute(`data-zoom-src`)){w.zoomedHd=w.zoomed.cloneNode(),w.zoomedHd.removeAttribute(`srcset`),w.zoomedHd.removeAttribute(`sizes`),w.zoomedHd.removeAttribute(`loading`),w.zoomedHd.src=w.zoomed.getAttribute(`data-zoom-src`),w.zoomedHd.onerror=function(){clearInterval(a),console.warn(`Unable to reach the zoom image target `+w.zoomedHd.src),w.zoomedHd=null,t()};var a=setInterval(function(){w.zoomedHd.complete&&(clearInterval(a),w.zoomedHd.classList.add(`medium-zoom-image--opened`),w.zoomedHd.addEventListener(`click`,m),document.body.appendChild(w.zoomedHd),t())},10)}else if(w.original.hasAttribute(`srcset`)){w.zoomedHd=w.zoomed.cloneNode(),w.zoomedHd.removeAttribute(`sizes`),w.zoomedHd.removeAttribute(`loading`);var o=w.zoomedHd.addEventListener(`load`,function(){w.zoomedHd.removeEventListener(`load`,o),w.zoomedHd.classList.add(`medium-zoom-image--opened`),w.zoomedHd.addEventListener(`click`,m),document.body.appendChild(w.zoomedHd),t()})}else t()})},m=function(){return new r(function(e){if(x||!w.original){e(E);return}var t=function t(){w.original.classList.remove(`medium-zoom-image--hidden`),document.body.removeChild(w.zoomed),w.zoomedHd&&document.body.removeChild(w.zoomedHd),document.body.removeChild(T),w.zoomed.classList.remove(`medium-zoom-image--opened`),w.template&&document.body.removeChild(w.template),x=!1,w.zoomed.removeEventListener(`transitionend`,t),w.original.dispatchEvent(E_(`medium-zoom:closed`,{detail:{zoom:E}})),w.original=null,w.zoomed=null,w.zoomedHd=null,w.template=null,e(E)};x=!0,document.body.classList.remove(`medium-zoom--opened`),w.zoomed.style.transform=``,w.zoomedHd&&(w.zoomedHd.style.transform=``),w.template&&(w.template.style.transition=`opacity 150ms`,w.template.style.opacity=0),w.original.dispatchEvent(E_(`medium-zoom:close`,{detail:{zoom:E}})),w.zoomed.addEventListener(`transitionend`,t)})},h=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).target;return w.original?m():p({target:e})},g=function(){return C},_=function(){return y},v=function(){return w.original},y=[],b=[],x=!1,S=0,C=n,w={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)===`[object Object]`?C=t:(t||typeof t==`string`)&&l(t),C=v_({margin:0,background:`#fff`,scrollOffset:40,container:null,template:null},C);var T=w_(C.background);document.addEventListener(`click`,i),document.addEventListener(`keyup`,o),document.addEventListener(`scroll`,a),window.addEventListener(`resize`,m);var E={open:p,close:m,toggle:h,update:s,clone:c,attach:l,detach:u,on:d,off:f,getOptions:g,getImages:_,getZoomedImage:v};return E};function O_(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>`u`)){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}O_(`.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}`);var k_=e({default:()=>M_}),A_=`[vp-content] > img, [vp-content] :not(a) > img`,j_={background:`inherit`},M_=ze({enhance({app:e}){let t=D_(j_);t.refresh=(e=A_)=>{t.detach(),t.attach(e)},e.provide(g_,t)},setup(){let e=__();Ue(t=>{t!==`beforeUnmount`&&e.refresh()})}}),N_=async(e,t)=>{let{path:n,query:r}=e.currentRoute.value,{scrollBehavior:i}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:r,hash:t}),e.options.scrollBehavior=i},P_=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{let i=be();It(`scroll`,tt(()=>{let n=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(n)<r){N_(i,``);return}let a=window.innerHeight+n,o=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),s=Math.abs(o-a)<r,c=[...document.querySelectorAll(e)],l=[...document.querySelectorAll(t)].filter(e=>c.some(t=>t.hash===e.hash));for(let e=0;e<l.length;e++){let t=l[e],a=l[e+1],o=n>=(t.parentElement?.offsetTop??0)-r,c=!a||n<(a.parentElement?.offsetTop??0)-r;if(!(o&&c))continue;let u=decodeURIComponent(i.currentRoute.value.hash),d=decodeURIComponent(t.hash);if(u===d)return;if(s){for(let t=e+1;t<l.length;t++)if(u===decodeURIComponent(l[t].hash))return}N_(i,d);return}},n))},F_=e({default:()=>B_}),I_=`a.page-catalog-item`,L_=`.header-anchor`,R_=200,z_=5,B_=ze({setup(){P_({headerLinkSelector:I_,headerAnchorSelector:L_,delay:R_,offset:z_})}});function V_(e,t,n){var r,i,a;t===void 0&&(t=50),n===void 0&&(n={});var o=(r=n.isImmediate)!=null&&r,s=(i=n.callback)!=null&&i,c=n.maxWait,l=Date.now(),u=[];function d(){if(c!==void 0){var e=Date.now()-l;if(e+t>=c)return c-e}return t}var f=function(){var t=[].slice.call(arguments),n=this;return new Promise(function(r,i){var c=o&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,l=Date.now(),!o){var r=e.apply(n,t);s&&s(r),u.forEach(function(e){return(0,e.resolve)(r)}),u=[]}},d()),c){var f=e.apply(n,t);return s&&s(f),r(f)}u.push({resolve:r,reject:i})})};return f.cancel=function(e){a!==void 0&&clearTimeout(a),u.forEach(function(t){return(0,t.reject)(e)}),u=[]},f}var H_=(e,t)=>{let n=It(`keydown`,r=>{let{keyboardShortcuts:i={}}=e.value,a=i[`Ctrl/Cmd+K`]!==!1&&r.key===`k`&&(nt()||st()?r.metaKey:r.ctrlKey),o=i[`/`]!==!1&&r.key===`/`;(a||o)&&(r.preventDefault(),t(),n())})},U_=()=>{let e=be();return{transformItems:e=>e.map(e=>({...e,url:`/${Ce(we(e.url,`/`))}`})),navigator:{navigate:({itemUrl:t})=>{e.push(t.replace(`/`,`/`))}},transformSearchClient:e=>({...e,search:V_(e.search,500)})}},W_=b({appId:`38R2J3MTQC`,apiKey:`583d3caf699630b08a9bc2d12d599701`,indexName:`v2-vuepress-reco-recoluan`,locales:{"/":{placeholder:`搜索文档`,translations:{button:{buttonText:`搜索文档`,buttonAriaLabel:`搜索文档`},modal:{searchBox:{clearButtonTitle:`清除查询条件`,clearButtonAriaLabel:`清除查询条件`,closeButtonText:`关闭`,closeButtonAriaLabel:`关闭`,placeholderText:`搜索文档`,placeholderTextAskAi:`向 AI 助手提问`,placeholderTextAskAiStreaming:`回答中...`,searchInputLabel:`搜索`,backToKeywordSearchButtonText:`返回关键字搜索`,backToKeywordSearchButtonAriaLabel:`返回关键字搜索`,newConversationPlaceholder:`询问问题`,conversationHistoryTitle:`对话历史`,startNewConversationText:`新对话`,viewConversationHistoryText:`对话历史`},startScreen:{recentSearchesTitle:`搜索历史`,noRecentSearchesText:`没有搜索历史`,saveRecentSearchButtonTitle:`保存至搜索历史`,removeRecentSearchButtonTitle:`从搜索历史中移除`,favoriteSearchesTitle:`收藏`,removeFavoriteSearchButtonTitle:`从收藏中移除`,recentConversationsTitle:`最近对话`,removeRecentConversationButtonTitle:`从最近对话中移除`},errorScreen:{titleText:`无法获取结果`,helpText:`你可能需要检查你的网络连接`},noResultsScreen:{noResultsText:`无法找到相关结果为`,suggestedQueryText:`你可以尝试查询`,reportMissingResultsText:`你认为该查询应该有结果？`,reportMissingResultsLinkText:`告知我们`},resultsScreen:{askAiPlaceholder:`询问AI：`,noResultsAskAiPlaceholder:`没有找到文档？让 AI 来帮忙：`},askAiScreen:{disclaimerText:`AI 助手的回答可能不准确。自行验证回复。`,relatedSourcesText:`相关资源`,thinkingText:`思考中...`,copyButtonText:`复制`,copyButtonCopiedText:`已复制`,copyButtonTitle:`复制`,likeButtonTitle:`有帮助`,dislikeButtonTitle:`没帮助`,thanksForFeedbackText:`感谢您的反馈！`,preToolCallText:`搜索中...`,duringToolCallText:`搜索`,afterToolCallText:`已搜索`,stoppedStreamingText:`你停止了此回复`},footer:{selectText:`选择`,submitQuestionText:`提交问题`,selectKeyAriaLabel:`回车键`,navigateText:`切换`,navigateUpKeyAriaLabel:`上箭头`,navigateDownKeyAriaLabel:`下箭头`,closeText:`关闭`,backToSearchText:`返回搜索`,closeKeyAriaLabel:`ESC 键`,poweredByText:`搜索提供者`}}}},"/en/":{}}}),G_=Symbol(``),K_=()=>{let e=w(G_),t=Ke();return C(()=>({...e.value,...e.value.locales?.[t.value]}))},q_=e=>{e.provide(G_,x(W_))},J_=(e,t=[])=>[`lang:${e}`,...Array.isArray(t)?t:[t]],Y_=({indices:e,indexName:t,searchParameters:n},r)=>(e??[{name:t??``,searchParameters:n}]).map(e=>{if(Ve(e))return{name:e,searchParameters:{facetFilters:`lang:${r}`}};let{searchParameters:t,...n}=e;return{...n,searchParameters:{...t,facetFilters:J_(r,t?.facetFilters)}}}),X_=({buttonText:e=`Search`,buttonAriaLabel:t=e}={})=>{let n=nt()||st()||at();return`<button type="button" aria-label="${t}" aria-keyshortcuts="${n?`Command`:`Control`}+k" class="DocSearch DocSearch-Button"><span class="DocSearch-Button-Container"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" class="DocSearch-Search-Icon"><circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" stroke-width="1.4"></circle><path d="m21 21-4.3-4.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${e}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key ${n?``:`DocSearch-Button-Key--ctrl`}">${n?`⌘`:`Ctrl`}</kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`},Z_=()=>{if(document.querySelector(`.DocSearch-Modal`))return;let e=new Event(`keydown`);e.key=`k`,e.metaKey=!0,window.dispatchEvent(e),setTimeout(Z_,16)},Q_=e=>{let t=`algolia-preconnect`;(`requestIdleCallback`in window?window.requestIdleCallback:setTimeout)(()=>{if(document.head.querySelector(`#${t}`))return;let n=document.createElement(`link`);n.id=t,n.rel=`preconnect`,n.href=`https://${e}-dsn.algolia.net`,n.crossOrigin=``,document.head.append(n)})},$_=O({name:`DocSearch`,props:{containerId:{type:String,default:`docsearch-container`},options:{type:Object,default:()=>({})}},setup(e){let t=K_(),n=U_(),r=Me(),i=Ke(),a=b(!1),s=b(!1),c=C(()=>{let{locales:n={},...r}=e.options;return{...t.value,...r,...n[i.value]}}),l=async()=>{let{default:t}=await K(async()=>{let{default:e}=await import(`./esm-DLZGTa_Y.js`);return{default:e}},[]),{indexName:i,indices:o,searchParameters:s,...l}=c.value;t({...n,...l,container:`#${e.containerId}`,indices:Y_({indices:o,indexName:i,searchParameters:s},r.value)}),a.value=!0},u=()=>{s.value||a.value||(s.value=!0,l(),Z_(),U(i,l))};return H_(c,u),o(()=>{Q_(c.value.appId)}),()=>[B(`div`,{id:e.containerId,style:{display:a.value?`block`:`none`}}),a.value?null:B(`div`,{class:`docsearch-placeholder`,onClick:u,innerHTML:X_(c.value.translations?.button)})]}}),ev=e({default:()=>tv}),tv={enhance({app:e}){q_(e),e.component(`SearchBox`,$_)}},nv={GitHub:`:repo/edit/:branch/:path`,GitLab:`:repo/-/edit/:branch/:path`,Gitee:`:repo/edit/:branch/:path`,Bitbucket:`:repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default`},rv=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:r,editLinkPattern:i})=>{let a=Mt(e),o;return i?o=i:a!==null&&(o=nv[a]),o?o.replace(/:repo/,xe(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Ce(`${fe(n)}/${r}`)):null};function iv(){let e=[`#e15b64`,`#f47e60`,`#f8b26a`,`#abbd81`,`#849b87`,`#e15b64`,`#f47e60`,`#f8b26a`,`#f26d6d`,`#67cc86`,`#fb9b5f`,`#3498db`];return e[Math.floor(Math.random()*e.length)]}var av={},ov={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 32 32`};function sv(e,t){return A(),j(`svg`,ov,[...t[0]||=[P(`path`,{d:`M2 26h28v2H2z`,fill:`currentColor`},null,-1),P(`path`,{d:`M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z`,fill:`currentColor`},null,-1)]])}var cv=Lt(av,[[`render`,sv]]),lv={},uv={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 32 32`};function dv(e,t){return A(),j(`svg`,uv,[...t[0]||=[P(`path`,{d:`M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z`,fill:`currentColor`},null,-1),P(`path`,{d:`M26 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z`,fill:`currentColor`},null,-1)]])}var fv=Lt(lv,[[`render`,dv]]),pv={},mv={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 28 28`};function hv(e,t){return A(),j(`svg`,mv,[...t[0]||=[P(`g`,{fill:`none`},[P(`path`,{d:`M12.701 3.908c.532-1.078 2.069-1.078 2.6 0l2.692 5.452l6.017.875c1.19.173 1.664 1.634.804 2.473l-4.355 4.244l1.028 5.993c.204 1.185-1.04 2.088-2.103 1.529L14 21.644l-5.381 2.83c-1.064.559-2.307-.344-2.104-1.529l1.028-5.993l-4.355-4.244c-.86-.839-.385-2.3.804-2.473l6.017-.875l2.691-5.452z`,fill:`currentColor`})],-1)]])}var gv=Lt(pv,[[`render`,hv]]),_v={},vv={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 32 32`};function yv(e,t){return A(),j(`svg`,vv,[...t[0]||=[P(`path`,{d:`M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 22H6V12h20v14zm0-16H6V6h4v2h2V6h8v2h2V6h4v4z`,fill:`currentColor`},null,-1)]])}var bv=Lt(_v,[[`render`,yv]]);function xv(e){e.component(`NavbarSearch`,()=>{let t=e.component(`Docsearch`)||e.component(`SearchBox`);return t?B(t):null})}var Sv=null,Cv=null,wv={wait:()=>Sv,pending:()=>{Sv=new Promise(e=>Cv=e)},resolve:()=>{Cv?.(),Sv=null,Cv=null}},Tv=()=>wv,Ev=()=>{let e=[],t=[];return document.querySelectorAll(`.theme-reco-md-content h2, .theme-reco-md-content h3, .theme-reco-md-content h4, .theme-reco-md-content h5, .theme-reco-md-content h6`).forEach(n=>{if(!n.id)return;let r=Number(n.tagName.slice(1)),i={title:n.textContent?.trim()??``,slug:n.id,link:`#${n.id}`,level:r,children:[]};for(;t.length>0&&t[t.length-1].level>=r;)t.pop();let a=t[t.length-1];a?a.children.push(i):e.push(i),t.push(i)}),e};function Dv(){let e=b([]),t=C(()=>ht(e.value));Ue(t=>{e.value=t===`beforeUnmount`?[]:Ev()}),r(kt,t)}function Ov({app:e}){Dt(e),xv(e)}function kv(e){return e?e.trim().replaceAll(` `,`-`):``}function Av(e=``){return e.replace(`T`,` `).replace(`Z`,``).split(`.`)[0].replace(/(\s00:00:00)$/,``)}var jv={key:0,class:`page-info`},Mv=O({__name:`PageInfo`,props:{pageData:{type:Object,default:()=>({})},currentCategory:{type:String,default:``},currentTag:{type:String,default:``},hideViews:{type:Boolean,default:!1}},setup(e){function t(e){return bt(kv(e))}let{pageData:n,hideViews:r}=z(e),i=jt(),{solution:a,options:o}=Qe(),s=C(()=>n?.value?.frontmatter?.author||i.value.author||``),c=C(()=>n?.value?.path||`/`),l=C(()=>{let e=n?.value?.frontmatter?.date;return e?Av(e):``}),u=C(()=>(n?.value?.frontmatter?.categories||[]).map(e=>({label:e,pathValue:t(e)}))),f=C(()=>(n?.value?.frontmatter?.tags||[]).map(e=>({label:e,pathValue:t(e)}))),p=C(()=>!!s.value||!!l.value||!!(u.value&&u.value.length>0)||!!(f.value&&f.value.length>0)),m=C(()=>a.value===`valine`&&o.value.visitor!=0&&!r.value),h=C(()=>a.value===`waline`&&o.value.pageview!=0&&!r.value);return(e,t)=>{let n=d(`Xicons`),r=d(`router-link`),i=d(`ValineViews`),a=d(`WalineViews`);return p.value?(A(),j(`div`,jv,[s.value?(A(),R(n,{key:0,icon:L(fv),text:s.value},null,8,[`icon`,`text`])):T(``,!0),l.value?(A(),R(n,{key:1,icon:L(bv),text:l.value},null,8,[`icon`,`text`])):T(``,!0),u.value.length>0?(A(),R(n,{key:2,icon:L(yt)},{default:v(()=>[(A(!0),j(I,null,k(u.value,({label:e,pathValue:t})=>(A(),R(r,{to:`/categories/${t}/1.html`,key:t},{default:v(()=>[E(H(e),1)]),_:2},1032,[`to`]))),128))]),_:1},8,[`icon`])):T(``,!0),f.value.length>0?(A(),R(n,{key:3,icon:L(vt)},{default:v(()=>[(A(!0),j(I,null,k(f.value,({label:e,pathValue:t})=>(A(),R(r,{to:`/tags/${t}/1.html`,key:t},{default:v(()=>[E(H(e),1)]),_:2},1032,[`to`]))),128))]),_:1},8,[`icon`])):T(``,!0),m.value||h.value?(A(),R(n,{key:4,icon:L(ft)},{default:v(()=>[m.value?(A(),R(i,{key:0,idVal:c.value},null,8,[`idVal`])):T(``,!0),h.value?(A(),R(a,{key:1,path:c.value},null,8,[`path`])):T(``,!0)]),_:1},8,[`icon`])):T(``,!0)])):T(``,!0)}}}),Nv={class:`title`},Pv=O({__name:`PostItem`,props:{data:{type:Object,default:()=>({})}},setup(e){let{data:t}=z(e),{solution:n}=Qe();return(e,r)=>{let i=d(`Xicons`),a=d(`MagicCard`);return _([L(t).path,L(t).title,L(t).frontmatter?.sticky,L(n)],()=>F(a,{class:`post-item-container`},{default:v(()=>[P(`div`,Nv,[F(pt,{to:L(t).path},{default:v(()=>[L(t).frontmatter?.sticky?(A(),R(i,{key:0,icon:L(gv)},null,8,[`icon`])):T(``,!0),P(`span`,null,H(L(t).title),1)]),_:1},8,[`to`])]),F(Mv,{"page-data":L(t),"hide-views":L(n)===`valine`},null,8,[`page-data`,`hide-views`])]),_:1}),r,0)}}}),Fv={class:`post-list-container`},Iv=O({__name:`index`,props:{data:{type:Array,default:()=>[]}},setup(e){let{data:t}=z(e);return(e,n)=>(A(),j(`div`,Fv,[(A(!0),j(I,null,k(L(t),(e,t)=>(A(),R(Pv,{key:t,data:e},null,8,[`data`]))),128))]))}}),Lv={class:`posts-container`},Rv=10,zv=O({__name:`Posts`,setup(e){let{posts:t}=$e(),n=b(1),r=b(0),i=C(()=>{let e=(n.value-1)*Rv,r=n.value*Rv;return(t||[]).slice(e,r)}),a=e=>{},s=se(),c=be();Ke(),jt();let l=C(()=>s.query.page);return a=e=>{n.value=e;let t=ye(`/posts`);c.push(e>1?`${t}/${e}.html`:`${t}.html`),setTimeout(()=>{if(r.value===0){let e=document.querySelector(`.home-blog-content`);e&&(r.value=e.getBoundingClientRect().top)}window.scrollTo({left:0,top:0,behavior:`smooth`})},100)},o(()=>{U(l,e=>{e&&(n.value=Number(e))})}),(e,r)=>(A(),j(`section`,Lv,[F(Iv,{data:i.value},null,8,[`data`]),F(Rt,{currentPage:n.value,total:L(t).length,onChange:L(a)},null,8,[`currentPage`,`total`,`onChange`])]))}}),Bv=O({__name:`Posts`,setup(e){let{initMagicCard:t}=gt();return o(()=>{t()}),U(se(),()=>{t()}),(e,t)=>(A(),R(At,null,{default:v(()=>[F(zv)]),_:1}))}}),Vv={class:`home-blog-content`},Hv={class:`blog-list`},Uv={class:`personal-info-wrapper`},Wv=[`src`],Gv={key:1,class:`name`},Kv={class:`module-title`},qv={class:`category-wrapper`},Jv={class:`text`},Yv={class:`num`},Xv={class:`module-title`},Zv={class:`tag-wrapper`},Qv=10,$v=O({__name:`Blog`,setup(e){let{posts:t,categorySummary:n}=$e(),r=C(()=>t.length),s=b(1),c=C(()=>n?.categories?.items||[]),l=C(()=>n?.tags?.items||[]),u=C(()=>{let e=(s.value-1)*Qv,n=s.value*Qv;return(t||[]).slice(e,n)}),f=e=>{},p=se(),m=be(),h=Ke(),g=jt(),_=C(()=>p.query.page);{f=e=>{s.value=e;let t=g.value.home||h.value;m.push(e>1?`${t}?page=${e}`:t),window.scrollTo({left:0,top:0,behavior:`smooth`})};let e=Number(p?.query?.page);function t(e){e>=r?e=r:e<=0&&(e=1),f(e)}o(()=>{typeof e==`number`&&!isNaN(e)&&t(e),U(_,e=>{e&&(s.value=Number(e))})});let n=_t(()=>{let e=document.querySelector(`.info-wrapper`);e&&(e.setAttribute(`data-x`,e.offsetLeft),e.setAttribute(`data-y`,e.offsetTop),e.setAttribute(`data-width`,e.clientWidth),e.setAttribute(`data-height`,e.clientHeight))},200);window.addEventListener(`scroll`,n),a(()=>{window.removeEventListener(`scroll`,n)})}return(e,n)=>{let r=d(`Xicons`),a=d(`router-link`),o=d(`MagicCard`);return A(),j(`section`,Vv,[P(`section`,Hv,[F(Iv,{data:u.value},null,8,[`data`]),F(Rt,{currentPage:s.value,total:L(t).length,onChange:L(f)},null,8,[`currentPage`,`total`,`onChange`])]),F(o,{class:`info-wrapper`},{default:v(()=>[P(`div`,Uv,[L(g).authorAvatar?(A(),j(`img`,{key:0,class:`personal-img`,src:L(ye)(L(g).authorAvatar),alt:`author-avatar`},null,8,Wv)):T(``,!0),L(g).author?(A(),j(`p`,Gv,H(L(g).author),1)):T(``,!0),n[0]||=P(`hr`,null,null,-1)]),P(`h4`,Kv,[F(r,{icon:L(yt),text:L(g).categoriesText||`Categories`},null,8,[`icon`,`text`])]),P(`ul`,qv,[(A(!0),j(I,null,k(c.value,({label:e,length:t,categoryValue:n},r)=>(A(),j(`li`,{class:`category-item`,key:r},[F(a,{class:`category-link`,to:`/categories/${n}/1.html`},{default:v(()=>[P(`span`,Jv,H(e),1),P(`span`,Yv,H(t),1)]),_:2},1032,[`to`])]))),128))]),P(`h4`,Xv,[F(r,{icon:L(vt),text:L(g).tagsText||`Tags`},null,8,[`icon`,`text`])]),P(`ul`,Zv,[(A(!0),j(I,null,k(l.value,({label:e,categoryValue:t},n)=>(A(),j(`li`,{class:`tag-item`,key:n,style:i({borderColor:L(iv)()})},[F(a,{class:`tag-link`,to:`/tags/${t}/1.html`},{default:v(()=>[E(H(e),1)]),_:2},1032,[`to`])],4))),128))])]),_:1})])}}}),ey={class:`banner-brand__content`},ty=[`src`],ny={key:1},ry={key:2},iy=O({__name:`Banner`,setup(e){let t=Te(),n=C(()=>t.value?.banner?.heroImage?ye(t.value?.banner?.heroImage):null),r=C(()=>t.value?.banner?.heroImageStyle||{}),a=C(()=>{let{bgImageStyle:e,bgImage:n}=t.value?.banner||{},r=n?{textAlign:`center`,overflow:`hidden`,background:`url(${ye(n)}) center/cover no-repeat`}:{textAlign:`center`,overflow:`hidden`,background:``};return e?{...r,...e}:{...r}});return(e,o)=>(A(),j(`section`,{class:`banner-wrapper`,style:i({...a.value})},[P(`div`,ey,[n.value?(A(),j(`img`,{key:0,src:n.value,style:i({...r.value}),alt:`heroImage`},null,12,ty)):T(``,!0),L(t)?.banner?.heroText?(A(),j(`h1`,ny,H(L(t)?.banner?.heroText),1)):T(``,!0),L(t)?.banner?.tagline?(A(),j(`p`,ry,H(L(t)?.banner?.tagline),1)):T(``,!0)])],4))}}),ay={};function oy(e,t){let n=d(`Comments`);return A(),R(n,{"hide-comments":!1})}var sy=Lt(ay,[[`render`,oy]]),cy={class:`features__container`},ly=O({__name:`Features`,setup(e){let t=Te(),n=C(()=>t.value.features||[]);return(e,t)=>{let r=d(`MagicCard`);return A(),j(`div`,cy,[(A(!0),j(I,null,k(n.value,(e,t)=>(A(),R(r,{class:`features__item`,key:t},{default:v(()=>[P(`h4`,null,H(e.title),1),P(`p`,null,H(e.details),1)]),_:2},1024))),128))])}}}),uy={},dy={class:`theme-reco-md-content`};function fy(e,t){let n=d(`Content`);return A(),j(`section`,dy,[F(n)])}var py=Lt(uy,[[`render`,fy]]),my={class:`banner-brand__content`},hy={key:0,class:`title`},gy={key:1,class:`description`},_y={key:2,class:`tagline`},vy={key:3,class:`btn-group`},yy=O({__name:`BannerBrand`,setup(e){let t=Te();C(()=>t.value?.bannerBrand?.heroImage?ye(t.value?.bannerBrand?.heroImage):null);let n=C(()=>t.value?.bannerBrand?.buttons||[]);C(()=>t.value?.bannerBrand?.heroImageStyle||{});let r=C(()=>{let{bgImageStyle:e,bgImage:n}=t.value?.bannerBrand||{},r=n?{overflow:`hidden`,background:`url(${ye(n)}) center/cover no-repeat`}:{};return e?{...r,...e}:r});return(e,a)=>{let o=d(`Xicons`);return A(),j(`section`,{class:`banner-brand__wrapper`,style:i({...r.value})},[P(`div`,my,[L(t)?.bannerBrand?.title?(A(),j(`h1`,hy,H(L(t)?.bannerBrand?.title),1)):T(``,!0),L(t)?.bannerBrand?.description?(A(),j(`p`,gy,H(L(t)?.bannerBrand?.description),1)):T(``,!0),L(t)?.bannerBrand?.tagline?(A(),j(`p`,_y,H(L(t)?.bannerBrand?.tagline),1)):T(``,!0),n.value.length>0?(A(),j(`div`,vy,[(A(!0),j(I,null,k(n.value,(e,t)=>(A(),R(o,{class:g(e.type),key:t,icon:e.icon,text:e.text,link:e.link,"icon-size":`18`,"text-size":`14`},null,8,[`class`,`icon`,`text`,`link`]))),128))])):T(``,!0)])],4)}}}),by={class:`home-wrapper`},xy=O({...O({name:`HomeWrapper`,components:{Banner:iy,BannerBrand:yy,Blog:$v,MdContent:py,Comment:sy,Footer:Tt,Features:ly}}),setup(e){let t=Te();return(e,n)=>(A(),j(`main`,by,[(A(!0),j(I,null,k(L(t).modules||[`Banner`,`Blog`,`Footer`],e=>(A(),R(p(e),{key:e}))),128))]))}}),Sy={key:0,class:`page-nav`},Cy=O({__name:`PageNav`,setup(e){let t=e=>e===!1?null:Ve(e)?Pt(e):pe(e)?e:!1,n=(e,t,r)=>{let i=e.findIndex(e=>e.link===t);if(i!==-1){let t=e[i+r];return t?.link?t:null}for(let i of e)if(i.children){let e=n(i.children,t,r);if(e)return e}return null},r=se(),i=be(),a=Et(),o=mt(),s=C(()=>{let e=t(o.value.prev);return e===!1?n(a.value,r.path,-1):e}),c=C(()=>{let e=t(o.value.next);return e===!1?n(a.value,r.path,1):e}),l=e=>{i.push(e)};return(e,t)=>s.value||c.value?(A(),j(`nav`,Sy,[P(`p`,{class:g([`inner`,{hasPrev:!!s.value,hasNext:!!c.value}])},[s.value?(A(),j(`span`,{key:0,class:`page-nav-item prev`,onClick:t[0]||=e=>l(s.value.link)},` ← `+H(s.value.text),1)):T(``,!0),c.value?(A(),j(`span`,{key:1,class:`page-nav-item next`,onClick:t[1]||=e=>l(c.value.link)},H(c.value.text)+` → `,1)):T(``,!0)],2)])):T(``,!0)}}),wy={class:`page-meta`},Ty={key:0,class:`meta-item edit-link`},Ey={key:1,class:`meta-item last-updated`},Dy=O({__name:`PageMeta`,setup(e){let t=()=>{let e=jt(),t=je(),n=mt();return C(()=>{if(!(n.value.editLink??e.value.editLink??!0))return null;let{repo:r,docsRepo:i=r,docsBranch:a=`main`,docsDir:o=``,editLinkText:s}=e.value;if(!i)return null;let c=rv({docsRepo:i,docsBranch:a,docsDir:o,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:s??`Edit this page`,link:c,icon:cv,hideExternalLinkIcon:!0}:null})},n=()=>{let e=jt(),t=je(),n=mt();return C(()=>!(n.value.lastUpdated??e.value.lastUpdated??!0)||!t.value.git?.updatedTime?null:new Date(t.value.git?.updatedTime).toLocaleString())},r=t(),i=n(),a=jt();return(e,t)=>{let n=d(`Xicons`);return A(),j(`footer`,wy,[L(r)?(A(),j(`div`,Ty,[F(n,{class:`meta-item-label`,icon:L(r).icon,text:L(r).text,link:L(r).link,target:`_blank`,"icon-size":`20`,"text-size":`14`},null,8,[`icon`,`text`,`link`])])):T(``,!0),L(i)?(A(),j(`div`,Ey,[F(n,{class:`meta-item-label`,icon:L(bv),text:`${L(a).lastUpdatedText||`Last Updated`} ${L(i)}`,"icon-size":`20`,"text-size":`14`},null,8,[`icon`,`text`])])):T(``,!0)])}}}),Oy=(e,t)=>e.hash===t.link?!0:t.children?t.children.some(t=>Oy(e,t)):!1,ky=(e,t)=>B(`li`,{...t},B(Ot,{class:`page-catalog-item`,item:e})),Ay=e=>e.children?.length?e.children.map(e=>B(jy,{item:e})):[null],jy=({item:e})=>{let t=Oy(se(),e);return e.children&&e.children.length>0?[ky(e,{class:{[`page-catalog-menu-depth_${e.level||2}`]:!0,active:t}}),...Ay(e)]:[ky(e,{class:{[`page-catalog-menu-depth_${e.level||2}`]:!0,active:t}})]};jy.displayName=`CatalogItem`,jy.props={item:{type:Object,required:!0}};var My={class:`page-catalog-container`},Ny={class:`tip`},Py=O({__name:`index`,setup(e){let{catalog:t}=Ct(),n=jt(),r=C(()=>n.value.catalogTitle||`ON THIS PAGE`);return(e,n)=>(A(),j(`div`,My,[P(`h5`,Ny,H(r.value),1),P(`ul`,null,[(A(!0),j(I,null,k(L(t),e=>(A(),R(L(jy),{key:e.link||e.text,item:e},null,8,[`item`]))),128))])]))}});function Fy(){let e=mt();return{pagePassword:C(()=>{let t=e.value.password;return t?Array.isArray(t)?t:[t]:[]})}}function Iy(e,t){let n=jt(),r=b(``),i=b(null),a=b(`Locked`),o=b(n.value.inputPasswordText||`Please enter the password`);return U(r,i=>{i.length===6&&(e.value.includes(zt(zt(i)))?(a.value=`Unlocked`,o.value=n.value.unlockSucessText||`Success, enjoy it!`,setTimeout(()=>{t(`pass`)},600)):(r.value=``,o.value=n.value.unlockFailuerText||`Failed, please enter again!`))}),{password:r,passwordRef:i,lockIcon:a,lockText:o,focus:()=>{i.value.focus()}}}var Ly={class:`page-password-wrapper`},Ry={key:0},zy={key:0},By={key:0},Vy={key:0},Hy={key:0},Uy={key:0},Wy=O({__name:`index`,emits:[`pass`],setup(e,{emit:t}){let n=t,{pagePassword:r}=Fy(),{password:i,passwordRef:a,lockIcon:o,lockText:s,focus:l}=Iy(r,n);return(e,t)=>{let n=d(`Xicons`);return A(),j(`div`,Ly,[c(P(`input`,{maxlength:`6`,type:`password`,ref_key:`passwordRef`,ref:a,"onUpdate:modelValue":t[0]||=e=>u(i)?i.value=e:null},null,512),[[te,L(i)]]),P(`div`,null,[F(n,{icon:L(o),text:L(s)},null,8,[`icon`,`text`])]),P(`ul`,{class:`password-show`,onClick:t[1]||=(...e)=>L(l)&&L(l)(...e)},[P(`li`,null,[L(i).length>0?(A(),j(`i`,Ry)):T(``,!0)]),P(`li`,null,[L(i).length>1?(A(),j(`i`,zy)):T(``,!0)]),P(`li`,null,[L(i).length>2?(A(),j(`i`,By)):T(``,!0)]),P(`li`,null,[L(i).length>3?(A(),j(`i`,Vy)):T(``,!0)]),P(`li`,null,[L(i).length>4?(A(),j(`i`,Hy)):T(``,!0)]),P(`li`,null,[L(i).length>5?(A(),j(`i`,Uy)):T(``,!0)])])])}}}),Gy=`PAGE_PASSWORD_PASS`;function Ky(){let e=se();Gy=`${Gy}:${e.path}`;let t=mt(),n=b(!1),r=b(!0),i=b(!!t.value.password);return o(()=>{let e=`true`;e=sessionStorage.getItem(Gy),t.value.password&&e!==`true`&&(r.value=!1),n.value=!0}),{pageLoaded:n,pagePasswordPass:r,setedPagePassword:i,handlePass:()=>{r.value=!0,sessionStorage.setItem(Gy,`true`)}}}var qy={class:`page-container`},Jy={class:`page-content`},Yy={key:0,class:`page-title`},Xy={key:1,class:`theme-reco-md-content`},Zy={key:2,class:`theme-reco-md-content`},Qy=O({__name:`index`,setup(e){let t=je(),{options:n}=Qe(),{pageLoaded:r,pagePasswordPass:i,setedPagePassword:a,handlePass:o}=Ky(),s=C(()=>t?.value?.frontmatter?.title||t?.value?.title||``);C(()=>t?.value?.frontmatter?.sticky||``);let c=C(()=>{let{hideComments:e}=t?.value?.frontmatter,{hideComments:r}=n.value;return e===!0||e!==!1&&r===!0}),{isShowCatalog:l}=Ct();return(e,n)=>{let u=d(`Content`),f=d(`Comments`);return A(),j(`main`,qy,[P(`div`,Jy,[s.value?(A(),j(`h1`,Yy,H(s.value),1)):T(``,!0),(A(),R(Mv,{key:L(t).path,"page-data":L(t)},null,8,[`page-data`])),L(a)?(A(),j(`div`,Zy,[L(r)&&!L(i)?(A(),R(Wy,{key:0,onPass:L(o)},null,8,[`onPass`])):T(``,!0),L(r)&&L(i)?(A(),R(u,{key:1})):T(``,!0)])):(A(),j(`div`,Xy,[F(u)])),F(Dy),F(Cy),F(f,{"hide-comments":c.value},null,8,[`hide-comments`])]),L(l)?(A(),R(Py,{key:0})):T(``,!0)])}}}),$y=O({__name:`Layout`,setup(e){let t=Ft(),n=Te(),r=Tv(),i=r.resolve,a=r.pending,{initMagicCard:s}=gt();return o(()=>{s()}),U(se(),()=>{s()}),(e,r)=>(A(),R(At,{"width-style":L(n).home===!0?`full`:`max-width`},{default:v(()=>[L(n).home===!0?(A(),R(xy,{key:0})):(A(),R(oe,{key:1,name:`fade-slide-y`,mode:`out-in`,onBeforeEnter:L(i),onBeforeLeave:L(a)},{default:v(()=>[(A(),R(Qy,{key:L(t).path}))]),_:1},8,[`onBeforeEnter`,`onBeforeLeave`]))]),_:1},8,[`width-style`]))}}),eb={class:`page-404-wrapper`},tb={class:`content`},nb=O({__name:`NotFound`,setup(e){let t=be(),n=Ke(),r=jt(),i=()=>{t.push(r.value.home||n.value)};return(e,t)=>(A(),R(At,null,{default:v(()=>[P(`section`,eb,[P(`div`,tb,[t[0]||=P(`h1`,null,`404`,-1),P(`p`,null,H(L(r).notFound||`Oops! Page does not exist.`),1),P(`div`,{class:`xicon-container`,onClick:i},H(L(r).backToHome||`Back To Home`),1)]),t[1]||=P(`img`,{src:`/assets/taken-BlFnQ52t.svg`},null,-1)])]),_:1}))}}),rb={class:`timeline-content`},ib={class:`year`},ab={class:`year-wrapper`},ob={class:`date`},sb={key:1,class:`title`},cb=O({__name:`Timeline`,setup(e){let{posts:t}=$e(),n={};t.forEach(e=>{if(!e.frontmatter.date)return;let t=e.frontmatter.date.includes(`/`)?`/`:`-`,[r,i,a]=Av(e.frontmatter.date).split(` `)[0].split(t)||[];if(!(!r||!i||!a)){if(!n[r]){n[r]=[{...e,date:`${i}${t}${a}`}];return}n[r].push({...e,date:`${i}-${a}`})}});let r=Object.keys(n).sort((e,t)=>Number(t)-Number(e)).reduce((e,t)=>(e.push({year:t,data:n[t]}),e),[]);return(e,t)=>(A(),R(At,{class:`timeline-wrapper`},{default:v(()=>[P(`ul`,rb,[(A(!0),j(I,null,k(L(r),(e,t)=>(A(),j(`li`,{key:t},[P(`h2`,ib,H(e.year),1),P(`ul`,ab,[(A(!0),j(I,null,k(e.data,(e,t)=>(A(),j(`li`,{key:t,class:`item`},[P(`span`,ob,H(e.date),1),e&&e.path&&typeof e.path==`string`?(A(),R(pt,{key:0,class:`title`,to:e.path},{default:v(()=>[E(H(e.title),1)]),_:2},1032,[`to`])):(A(),j(`span`,sb,H(e.title),1))]))),128))])]))),128))])]),_:1}))}}),lb={class:`categories-container`},ub={class:`category-list`},db={class:`text`},fb=O({__name:`Categories`,setup(e){let{categoryPosts:t,categorySummary:n}=$e(),r=se(),i=be(),a=C(()=>{let e=[],r=t.value.currentCategoryKey;if(r){let{items:t=[]}=n[r];e=Object.values(t)}return e}),s=e=>{let{currentCategoryKey:n,currentCategoryValue:r}=t.value;i.push(`/${n}/${r}/${e}.html`)},{initMagicCard:c}=gt();return o(()=>{c()}),U(r,()=>{c()}),(e,n)=>(A(),R(At,null,{default:v(()=>[P(`div`,lb,[P(`ul`,ub,[(A(!0),j(I,null,k(a.value,({label:e,categoryValue:n},r)=>(A(),j(`li`,{key:r,class:g([`category-item`,{active:L(t).currentCategoryValue===n}])},[F(pt,{class:`category-link`,to:`/${L(t).currentCategoryKey}/${n}/1.html`},{default:v(()=>[P(`span`,db,H(e),1)]),_:2},1032,[`to`])],2))),128))]),F(Iv,{data:L(t).pages},null,8,[`data`]),L(t).totalPage>10?(A(),R(Rt,{key:0,currentPage:L(t).currentPage,total:L(t).totalPage,onChange:s},null,8,[`currentPage`,`total`])):T(``,!0)])]),_:1}))}});function pb(){let e=jt();return{friendshipLinks:C(()=>e.value.friendshipLinks||[]),handlClick:e=>{window.open(e,`_blank`)}}}var mb={class:`friendship-link-container`},hb={class:`logo`},gb=[`src`],_b={class:`title`},vb=O({__name:`index`,setup(e){let{friendshipLinks:t,handlClick:n}=pb(),{initMagicCard:r}=gt();return o(()=>{r()}),U(se(),()=>{r()}),(e,r)=>(A(),R(At,null,{default:v(()=>[P(`div`,mb,[(A(!0),j(I,null,k(L(t),(e,t)=>(A(),R(L(wt),{class:`friendship-link-item`,key:t,onClick:()=>L(n)(e.link)},{default:v(()=>[P(`div`,hb,[P(`img`,{src:e.logo},null,8,gb)]),P(`span`,_b,H(e.title),1)]),_:2},1032,[`onClick`]))),128))])]),_:1}))}}),yb=e({Categories:()=>fb,FriendshipLink:()=>vb,Layout:()=>$y,NotFound:()=>nb,Posts:()=>Bv,Timeline:()=>cb}),bb=e({default:()=>Sb}),xb={TestLayout:M(()=>K(()=>import(`./TestLayout-DT4h-Cs6.js`),__vite__mapDeps([21,3,4,1,22,8,5,19])))},Sb=ze({enhance(...e){Ov(...e)},setup(){Dv()},layouts:{...yb,...xb}}),Cb=[Ir,Rr,Br,Ld,Yd,Qd,cf,ff,qg,Yg,Zg,e_,d_,k_,F_,ev,bb].map(e=>e.default).filter(Boolean),wb=m(JSON.parse(`{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"vuepress-reco","description":"一款简洁的 vuepress 博客 & 文档 主题。"},"/en/":{"lang":"en-US","title":"vuepress-reco","description":"A simple vuepress Blog & Doc theme."}}}`)),Tb=Gn,Eb=()=>{let e=Cr({history:Tb(fe(`/`)),routes:[{name:`vuepress-route`,path:`/:catchAll(.*)`,components:{}}],scrollBehavior:(e,t,n)=>n||(e.hash?{el:e.hash}:{top:0})});return e.beforeResolve(async(e,t)=>{if(e.path!==t.path||t===bn){let t=Ie(e.fullPath);if(t.path!==e.fullPath)return t.path;let n=await t.loader();e.meta={...t.meta,_pageChunk:n}}else e.path===t.path&&(e.meta=t.meta)}),e},Db=e=>{e.component(`ClientOnly`,Re),e.component(`Content`,He),e.component(`RouteLink`,Ne)},Ob=(e,t,n)=>{let r=C(()=>t.currentRoute.value.path),i=y((e,n)=>({get(){return e(),t.currentRoute.value.meta._pageChunk},set(e){t.currentRoute.value.meta._pageChunk=e,n()}})),a=C(()=>We.resolveLayouts(n)),o=C(()=>We.resolveRouteLocale(wb.value.locales,r.value)),s=C(()=>We.resolveSiteLocaleData(wb.value,o.value)),c=C(()=>i.value.default),l=C(()=>i.value._pageData),u=C(()=>l.value.frontmatter),d=C(()=>We.resolvePageHeadTitle(l.value,s.value)),f=C(()=>We.resolvePageHead(d.value,u.value,s.value)),p=C(()=>We.resolvePageLang(l.value,s.value)),m={layouts:a,pageData:l,pageComponent:c,pageFrontmatter:u,pageHead:f,pageHeadTitle:d,pageLang:p,pageLayout:C(()=>We.resolvePageLayout(l.value,a.value)),redirects:Oe,routeLocale:o,routePath:r,routes:ke,siteData:wb,siteLocaleData:s,frontmatter:u,head:f,headTitle:d,lang:p,page:l,site:wb,siteLocale:s};return e.provide(Ee,m),Object.defineProperties(e.config.globalProperties,{$pageFrontmatter:{get:()=>u.value},$pageHead:{get:()=>f.value},$pageHeadTitle:{get:()=>d.value},$pageLang:{get:()=>p.value},$pageData:{get:()=>l.value},$routeLocale:{get:()=>o.value},$withBase:{get:()=>ye},$frontmatter:{get:()=>u.value},$head:{get:()=>f.value},$headTitle:{get:()=>d.value},$lang:{get:()=>p.value},$page:{get:()=>l.value},$site:{get:()=>wb.value},$siteLocale:{get:()=>s.value}}),m},kb=([e,t,n=``])=>{let r=`head > ${e}${Object.entries(t).map(([e,t])=>Ve(t)?`[${e}=${JSON.stringify(t)}]`:t?`[${e}]`:``).join(``)}`;return Array.from(document.querySelectorAll(r)).find(e=>e.innerText===n)??null},Ab=([e,t,n])=>{if(!Ve(e))return null;let r=document.createElement(e);return pe(t)&&Object.entries(t).forEach(([e,t])=>{Ve(t)?r.setAttribute(e,t):t&&r.setAttribute(e,``)}),Ve(n)&&r.appendChild(document.createTextNode(n)),r},jb=()=>{let e=Ge(),t=qe(),n=[],i=()=>{e.value.forEach(e=>{let t=kb(e);t&&n.push(t)})},a=()=>{let t=[];return e.value.forEach(e=>{let n=Ab(e);n&&t.push(n)}),t},s=()=>{document.documentElement.lang=t.value;let e=a();n.forEach((t,r)=>{let i=e.findIndex(e=>t.isEqualNode(e));i===-1?(t.remove(),delete n[r]):e.splice(i,1)}),e.forEach(e=>document.head.appendChild(e)),n=[...n.filter(e=>!!e),...e]};r(Ae,s),o(()=>{i(),U(e,s,{immediate:!1})})},Mb=ie,Nb=async()=>{let e=Mb({name:`Vuepress`,setup(){jb();for(let e of Cb)e.setup?.();let e=Cb.flatMap(({rootComponents:e=[]})=>e.map(e=>B(e))),t=De();return()=>[B(t.value),e]}}),t=Eb();Db(e),Ob(e,t,Cb);for(let n of Cb)await n.enhance?.({app:e,router:t,siteData:wb});return e.use(t),{app:e,router:t}};Nb().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount(`#app`)})});export{Nb as createVueApp};