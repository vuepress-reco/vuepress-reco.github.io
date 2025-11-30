const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/donate.html-kdxLXzHQ.js","assets/alipay-XgbB8KdG.js","assets/donate.html-CBHea5qj.js"])))=>i.map(i=>d[i]);
var th=Object.defineProperty;var nh=(e,t,n)=>t in e?th(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Nr=(e,t,n)=>nh(e,typeof t!="symbol"?t+"":t,n);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ia(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ue={},hu=[],en=()=>{},uh=()=>!1,Cr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),La=e=>e.startsWith("onUpdate:"),dt=Object.assign,$a=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rh=Object.prototype.hasOwnProperty,je=(e,t)=>rh.call(e,t),Ce=Array.isArray,mu=e=>Er(e)==="[object Map]",Du=e=>Er(e)==="[object Set]",Cs=e=>Er(e)==="[object Date]",De=e=>typeof e=="function",nt=e=>typeof e=="string",Gt=e=>typeof e=="symbol",Ve=e=>e!==null&&typeof e=="object",Ad=e=>(Ve(e)||De(e))&&De(e.then)&&De(e.catch),Sd=Object.prototype.toString,Er=e=>Sd.call(e),oh=e=>Er(e).slice(8,-1),Td=e=>Er(e)==="[object Object]",Da=e=>nt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gu=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ih=/-(\w)/g,Bt=No(e=>e.replace(ih,(t,n)=>n?n.toUpperCase():"")),ah=/\B([A-Z])/g,jn=No(e=>e.replace(ah,"-$1").toLowerCase()),jo=No(e=>e.charAt(0).toUpperCase()+e.slice(1)),di=No(e=>e?`on${jo(e)}`:""),mn=(e,t)=>!Object.is(e,t),so=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Id=(e,t,n,u=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:u,value:n})},vo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},sh=e=>{const t=nt(e)?Number(e):NaN;return isNaN(t)?e:t};let Es;const Ho=()=>Es||(Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ct(e){if(Ce(e)){const t={};for(let n=0;n<e.length;n++){const u=e[n],r=nt(u)?fh(u):ct(u);if(r)for(const o in r)t[o]=r[o]}return t}else if(nt(e)||Ve(e))return e}const lh=/;(?![^(]*\))/g,ch=/:([^]+)/,dh=/\/\*[^]*?\*\//g;function fh(e){const t={};return e.replace(dh,"").split(lh).forEach(n=>{if(n){const u=n.split(ch);u.length>1&&(t[u[0].trim()]=u[1].trim())}}),t}function ke(e){let t="";if(nt(e))t=e;else if(Ce(e))for(let n=0;n<e.length;n++){const u=ke(e[n]);u&&(t+=u+" ")}else if(Ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ph="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hh=Ia(ph);function Ld(e){return!!e||e===""}function mh(e,t){if(e.length!==t.length)return!1;let n=!0;for(let u=0;n&&u<e.length;u++)n=tu(e[u],t[u]);return n}function tu(e,t){if(e===t)return!0;let n=Cs(e),u=Cs(t);if(n||u)return n&&u?e.getTime()===t.getTime():!1;if(n=Gt(e),u=Gt(t),n||u)return e===t;if(n=Ce(e),u=Ce(t),n||u)return n&&u?mh(e,t):!1;if(n=Ve(e),u=Ve(t),n||u){if(!n||!u)return!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const a=e.hasOwnProperty(i),s=t.hasOwnProperty(i);if(a&&!s||!a&&s||!tu(e[i],t[i]))return!1}}return String(e)===String(t)}function Pa(e,t){return e.findIndex(n=>tu(n,t))}const $d=e=>!!(e&&e.__v_isRef===!0),oe=e=>nt(e)?e:e==null?"":Ce(e)||Ve(e)&&(e.toString===Sd||!De(e.toString))?$d(e)?oe(e.value):JSON.stringify(e,Dd,2):String(e),Dd=(e,t)=>$d(t)?Dd(e,t.value):mu(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[u,r],o)=>(n[fi(u,o)+" =>"]=r,n),{})}:Du(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fi(n))}:Gt(t)?fi(t):Ve(t)&&!Ce(t)&&!Td(t)?String(t):t,fi=(e,t="")=>{var n;return Gt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class gh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!t&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=yt;try{return yt=this,t()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(t){if(this._active){this._active=!1;let n,u;for(n=0,u=this.effects.length;n<u;n++)this.effects[n].stop();for(this.effects.length=0,n=0,u=this.cleanups.length;n<u;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,u=this.scopes.length;n<u;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ra(){return yt}function Pd(e,t=!1){yt&&yt.cleanups.push(e)}let qe;const pi=new WeakSet;class Rd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pi.has(this)&&(pi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,As(this),Md(this);const t=qe,n=Ut;qe=this,Ut=!0;try{return this.fn()}finally{zd(this),qe=t,Ut=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ma(t);this.deps=this.depsTail=void 0,As(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){na(this)&&this.run()}get dirty(){return na(this)}}let Fd=0,Qu,Xu;function Od(e,t=!1){if(e.flags|=8,t){e.next=Xu,Xu=e;return}e.next=Qu,Qu=e}function Fa(){Fd++}function Oa(){if(--Fd>0)return;if(Xu){let t=Xu;for(Xu=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Qu;){let t=Qu;for(Qu=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(u){e||(e=u)}t=n}}if(e)throw e}function Md(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zd(e){let t,n=e.depsTail,u=n;for(;u;){const r=u.prevDep;u.version===-1?(u===n&&(n=r),Ma(u),bh(u)):t=u,u.dep.activeLink=u.prevActiveLink,u.prevActiveLink=void 0,u=r}e.deps=t,e.depsTail=n}function na(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Bd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Bd(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===rr))return;e.globalVersion=rr;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!na(e)){e.flags&=-3;return}const n=qe,u=Ut;qe=e,Ut=!0;try{Md(e);const r=e.fn(e._value);(t.version===0||mn(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{qe=n,Ut=u,zd(e),e.flags&=-3}}function Ma(e,t=!1){const{dep:n,prevSub:u,nextSub:r}=e;if(u&&(u.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=u,e.nextSub=void 0),n.subs===e&&(n.subs=u,!u&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ma(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function bh(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ut=!0;const Nd=[];function Hn(){Nd.push(Ut),Ut=!1}function Vn(){const e=Nd.pop();Ut=e===void 0?!0:e}function As(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=qe;qe=void 0;try{t()}finally{qe=n}}}let rr=0;class vh{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!qe||!Ut||qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==qe)n=this.activeLink=new vh(qe,this),qe.deps?(n.prevDep=qe.depsTail,qe.depsTail.nextDep=n,qe.depsTail=n):qe.deps=qe.depsTail=n,jd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const u=n.nextDep;u.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=u),n.prevDep=qe.depsTail,n.nextDep=void 0,qe.depsTail.nextDep=n,qe.depsTail=n,qe.deps===n&&(qe.deps=u)}return n}trigger(t){this.version++,rr++,this.notify(t)}notify(t){Fa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Oa()}}}function jd(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let u=t.deps;u;u=u.nextDep)jd(u)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const yo=new WeakMap,Qn=Symbol(""),ua=Symbol(""),or=Symbol("");function pt(e,t,n){if(Ut&&qe){let u=yo.get(e);u||yo.set(e,u=new Map);let r=u.get(n);r||(u.set(n,r=new Vo),r.map=u,r.key=n),r.track()}}function fn(e,t,n,u,r,o){const i=yo.get(e);if(!i){rr++;return}const a=s=>{s&&s.trigger()};if(Fa(),t==="clear")i.forEach(a);else{const s=Ce(e),l=s&&Da(n);if(s&&n==="length"){const c=Number(u);i.forEach((d,f)=>{(f==="length"||f===or||!Gt(f)&&f>=c)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),l&&a(i.get(or)),t){case"add":s?l&&a(i.get("length")):(a(i.get(Qn)),mu(e)&&a(i.get(ua)));break;case"delete":s||(a(i.get(Qn)),mu(e)&&a(i.get(ua)));break;case"set":mu(e)&&a(i.get(Qn));break}}Oa()}function yh(e,t){const n=yo.get(e);return n&&n.get(t)}function iu(e){const t=Me(e);return t===e?t:(pt(t,"iterate",or),Mt(e)?t:t.map(ht))}function Uo(e){return pt(e=Me(e),"iterate",or),e}const xh={__proto__:null,[Symbol.iterator](){return hi(this,Symbol.iterator,ht)},concat(...e){return iu(this).concat(...e.map(t=>Ce(t)?iu(t):t))},entries(){return hi(this,"entries",e=>(e[1]=ht(e[1]),e))},every(e,t){return on(this,"every",e,t,void 0,arguments)},filter(e,t){return on(this,"filter",e,t,n=>n.map(ht),arguments)},find(e,t){return on(this,"find",e,t,ht,arguments)},findIndex(e,t){return on(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return on(this,"findLast",e,t,ht,arguments)},findLastIndex(e,t){return on(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return on(this,"forEach",e,t,void 0,arguments)},includes(...e){return mi(this,"includes",e)},indexOf(...e){return mi(this,"indexOf",e)},join(e){return iu(this).join(e)},lastIndexOf(...e){return mi(this,"lastIndexOf",e)},map(e,t){return on(this,"map",e,t,void 0,arguments)},pop(){return ju(this,"pop")},push(...e){return ju(this,"push",e)},reduce(e,...t){return Ss(this,"reduce",e,t)},reduceRight(e,...t){return Ss(this,"reduceRight",e,t)},shift(){return ju(this,"shift")},some(e,t){return on(this,"some",e,t,void 0,arguments)},splice(...e){return ju(this,"splice",e)},toReversed(){return iu(this).toReversed()},toSorted(e){return iu(this).toSorted(e)},toSpliced(...e){return iu(this).toSpliced(...e)},unshift(...e){return ju(this,"unshift",e)},values(){return hi(this,"values",ht)}};function hi(e,t,n){const u=Uo(e),r=u[t]();return u!==e&&!Mt(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const _h=Array.prototype;function on(e,t,n,u,r,o){const i=Uo(e),a=i!==e&&!Mt(e),s=i[t];if(s!==_h[t]){const d=s.apply(e,o);return a?ht(d):d}let l=n;i!==e&&(a?l=function(d,f){return n.call(this,ht(d),f,e)}:n.length>2&&(l=function(d,f){return n.call(this,d,f,e)}));const c=s.call(i,l,u);return a&&r?r(c):c}function Ss(e,t,n,u){const r=Uo(e);let o=n;return r!==e&&(Mt(e)?n.length>3&&(o=function(i,a,s){return n.call(this,i,a,s,e)}):o=function(i,a,s){return n.call(this,i,ht(a),s,e)}),r[t](o,...u)}function mi(e,t,n){const u=Me(e);pt(u,"iterate",or);const r=u[t](...n);return(r===-1||r===!1)&&Na(n[0])?(n[0]=Me(n[0]),u[t](...n)):r}function ju(e,t,n=[]){Hn(),Fa();const u=Me(e)[t].apply(e,n);return Oa(),Vn(),u}const wh=Ia("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Gt));function kh(e){Gt(e)||(e=String(e));const t=Me(this);return pt(t,"has",e),t.hasOwnProperty(e)}class Vd{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,u){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return u===(r?o?Ph:Wd:o?qd:Gd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(u)?t:void 0;const i=Ce(t);if(!r){let s;if(i&&(s=xh[n]))return s;if(n==="hasOwnProperty")return kh}const a=Reflect.get(t,n,Xe(t)?t:u);return(Gt(n)?Hd.has(n):wh(n))||(r||pt(t,"get",n),o)?a:Xe(a)?i&&Da(n)?a:a.value:Ve(a)?r?Pu(a):bn(a):a}}class Ud extends Vd{constructor(t=!1){super(!1,t)}set(t,n,u,r){let o=t[n];if(!this._isShallow){const s=nu(o);if(!Mt(u)&&!nu(u)&&(o=Me(o),u=Me(u)),!Ce(t)&&Xe(o)&&!Xe(u))return s?!1:(o.value=u,!0)}const i=Ce(t)&&Da(n)?Number(n)<t.length:je(t,n),a=Reflect.set(t,n,u,Xe(t)?t:r);return t===Me(r)&&(i?mn(u,o)&&fn(t,"set",n,u):fn(t,"add",n,u)),a}deleteProperty(t,n){const u=je(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&u&&fn(t,"delete",n,void 0),r}has(t,n){const u=Reflect.has(t,n);return(!Gt(n)||!Hd.has(n))&&pt(t,"has",n),u}ownKeys(t){return pt(t,"iterate",Ce(t)?"length":Qn),Reflect.ownKeys(t)}}class Ch extends Vd{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Eh=new Ud,Ah=new Ch,Sh=new Ud(!0);const ra=e=>e,jr=e=>Reflect.getPrototypeOf(e);function Th(e,t,n){return function(...u){const r=this.__v_raw,o=Me(r),i=mu(o),a=e==="entries"||e===Symbol.iterator&&i,s=e==="keys"&&i,l=r[e](...u),c=n?ra:t?oa:ht;return!t&&pt(o,"iterate",s?ua:Qn),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[c(d[0]),c(d[1])]:c(d),done:f}},[Symbol.iterator](){return this}}}}function Hr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ih(e,t){const n={get(r){const o=this.__v_raw,i=Me(o),a=Me(r);e||(mn(r,a)&&pt(i,"get",r),pt(i,"get",a));const{has:s}=jr(i),l=t?ra:e?oa:ht;if(s.call(i,r))return l(o.get(r));if(s.call(i,a))return l(o.get(a));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!e&&pt(Me(r),"iterate",Qn),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,i=Me(o),a=Me(r);return e||(mn(r,a)&&pt(i,"has",r),pt(i,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const i=this,a=i.__v_raw,s=Me(a),l=t?ra:e?oa:ht;return!e&&pt(s,"iterate",Qn),a.forEach((c,d)=>r.call(o,l(c),l(d),i))}};return dt(n,e?{add:Hr("add"),set:Hr("set"),delete:Hr("delete"),clear:Hr("clear")}:{add(r){!t&&!Mt(r)&&!nu(r)&&(r=Me(r));const o=Me(this);return jr(o).has.call(o,r)||(o.add(r),fn(o,"add",r,r)),this},set(r,o){!t&&!Mt(o)&&!nu(o)&&(o=Me(o));const i=Me(this),{has:a,get:s}=jr(i);let l=a.call(i,r);l||(r=Me(r),l=a.call(i,r));const c=s.call(i,r);return i.set(r,o),l?mn(o,c)&&fn(i,"set",r,o):fn(i,"add",r,o),this},delete(r){const o=Me(this),{has:i,get:a}=jr(o);let s=i.call(o,r);s||(r=Me(r),s=i.call(o,r)),a&&a.call(o,r);const l=o.delete(r);return s&&fn(o,"delete",r,void 0),l},clear(){const r=Me(this),o=r.size!==0,i=r.clear();return o&&fn(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Th(r,e,t)}),n}function za(e,t){const n=Ih(e,t);return(u,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?u:Reflect.get(je(n,r)&&r in u?n:u,r,o)}const Lh={get:za(!1,!1)},$h={get:za(!1,!0)},Dh={get:za(!0,!1)};const Gd=new WeakMap,qd=new WeakMap,Wd=new WeakMap,Ph=new WeakMap;function Rh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fh(e){return e.__v_skip||!Object.isExtensible(e)?0:Rh(oh(e))}function bn(e){return nu(e)?e:Ba(e,!1,Eh,Lh,Gd)}function Kd(e){return Ba(e,!1,Sh,$h,qd)}function Pu(e){return Ba(e,!0,Ah,Dh,Wd)}function Ba(e,t,n,u,r){if(!Ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Fh(e);if(i===0)return e;const a=new Proxy(e,i===2?u:n);return r.set(e,a),a}function Xn(e){return nu(e)?Xn(e.__v_raw):!!(e&&e.__v_isReactive)}function nu(e){return!!(e&&e.__v_isReadonly)}function Mt(e){return!!(e&&e.__v_isShallow)}function Na(e){return e?!!e.__v_raw:!1}function Me(e){const t=e&&e.__v_raw;return t?Me(t):e}function Oh(e){return!je(e,"__v_skip")&&Object.isExtensible(e)&&Id(e,"__v_skip",!0),e}const ht=e=>Ve(e)?bn(e):e,oa=e=>Ve(e)?Pu(e):e;function Xe(e){return e?e.__v_isRef===!0:!1}function Q(e){return Zd(e,!1)}function ut(e){return Zd(e,!0)}function Zd(e,t){return Xe(e)?e:new Mh(e,t)}class Mh{constructor(t,n){this.dep=new Vo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Me(t),this._value=n?t:ht(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,u=this.__v_isShallow||Mt(t)||nu(t);t=u?t:Me(t),mn(t,n)&&(this._rawValue=t,this._value=u?t:ht(t),this.dep.trigger())}}function E(e){return Xe(e)?e.value:e}function st(e){return De(e)?e():E(e)}const zh={get:(e,t,n)=>t==="__v_raw"?e:E(Reflect.get(e,t,n)),set:(e,t,n,u)=>{const r=e[t];return Xe(r)&&!Xe(n)?(r.value=n,!0):Reflect.set(e,t,n,u)}};function Qd(e){return Xn(e)?e:new Proxy(e,zh)}class Bh{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Vo,{get:u,set:r}=t(n.track.bind(n),n.trigger.bind(n));this._get=u,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Nh(e){return new Bh(e)}function gt(e){const t=Ce(e)?new Array(e.length):{};for(const n in e)t[n]=Xd(e,n);return t}class jh{constructor(t,n,u){this._object=t,this._key=n,this._defaultValue=u,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return yh(Me(this._object),this._key)}}class Hh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Vh(e,t,n){return Xe(e)?e:De(e)?new Hh(e):Ve(e)&&arguments.length>1?Xd(e,t,n):Q(e)}function Xd(e,t,n){const u=e[t];return Xe(u)?u:new jh(e,t,n)}class Uh{constructor(t,n,u){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Vo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=u}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return Od(this,!0),!0}get value(){const t=this.dep.track();return Bd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Gh(e,t,n=!1){let u,r;return De(e)?u=e:(u=e.get,r=e.set),new Uh(u,r,n)}const Vr={},xo=new WeakMap;let Wn;function qh(e,t=!1,n=Wn){if(n){let u=xo.get(n);u||xo.set(n,u=[]),u.push(e)}}function Wh(e,t,n=Ue){const{immediate:u,deep:r,once:o,scheduler:i,augmentJob:a,call:s}=n,l=v=>r?v:Mt(v)||r===!1||r===0?pn(v,1):pn(v);let c,d,f,p,g=!1,h=!1;if(Xe(e)?(d=()=>e.value,g=Mt(e)):Xn(e)?(d=()=>l(e),g=!0):Ce(e)?(h=!0,g=e.some(v=>Xn(v)||Mt(v)),d=()=>e.map(v=>{if(Xe(v))return v.value;if(Xn(v))return l(v);if(De(v))return s?s(v,2):v()})):De(e)?t?d=s?()=>s(e,2):e:d=()=>{if(f){Hn();try{f()}finally{Vn()}}const v=Wn;Wn=c;try{return s?s(e,3,[p]):e(p)}finally{Wn=v}}:d=en,t&&r){const v=d,T=r===!0?1/0:r;d=()=>pn(v(),T)}const y=Ra(),C=()=>{c.stop(),y&&y.active&&$a(y.effects,c)};if(o&&t){const v=t;t=(...T)=>{v(...T),C()}}let b=h?new Array(e.length).fill(Vr):Vr;const m=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(t){const T=c.run();if(r||g||(h?T.some((P,A)=>mn(P,b[A])):mn(T,b))){f&&f();const P=Wn;Wn=c;try{const A=[T,b===Vr?void 0:h&&b[0]===Vr?[]:b,p];s?s(t,3,A):t(...A),b=T}finally{Wn=P}}}else c.run()};return a&&a(m),c=new Rd(d),c.scheduler=i?()=>i(m,!1):m,p=v=>qh(v,!1,c),f=c.onStop=()=>{const v=xo.get(c);if(v){if(s)s(v,4);else for(const T of v)T();xo.delete(c)}},t?u?m(!0):b=c.run():i?i(m.bind(null,!0),!0):c.run(),C.pause=c.pause.bind(c),C.resume=c.resume.bind(c),C.stop=C,C}function pn(e,t=1/0,n){if(t<=0||!Ve(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Xe(e))pn(e.value,t,n);else if(Ce(e))for(let u=0;u<e.length;u++)pn(e[u],t,n);else if(Du(e)||mu(e))e.forEach(u=>{pn(u,t,n)});else if(Td(e)){for(const u in e)pn(e[u],t,n);for(const u of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,u)&&pn(e[u],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ar(e,t,n,u){try{return u?e(...u):e()}catch(r){Sr(r,t,n)}}function qt(e,t,n,u){if(De(e)){const r=Ar(e,t,n,u);return r&&Ad(r)&&r.catch(o=>{Sr(o,t,n)}),r}if(Ce(e)){const r=[];for(let o=0;o<e.length;o++)r.push(qt(e[o],t,n,u));return r}}function Sr(e,t,n,u=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||Ue;if(t){let a=t.parent;const s=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,l)===!1)return}a=a.parent}if(o){Hn(),Ar(o,null,10,[e,s,l]),Vn();return}}Kh(e,n,r,u,i)}function Kh(e,t,n,u=!0,r=!1){if(r)throw e;console.error(e)}const xt=[];let Qt=-1;const bu=[];let Cn=null,du=0;const Yd=Promise.resolve();let _o=null;function yn(e){const t=_o||Yd;return e?t.then(this?e.bind(this):e):t}function Zh(e){let t=Qt+1,n=xt.length;for(;t<n;){const u=t+n>>>1,r=xt[u],o=ir(r);o<e||o===e&&r.flags&2?t=u+1:n=u}return t}function ja(e){if(!(e.flags&1)){const t=ir(e),n=xt[xt.length-1];!n||!(e.flags&2)&&t>=ir(n)?xt.push(e):xt.splice(Zh(t),0,e),e.flags|=1,Jd()}}function Jd(){_o||(_o=Yd.then(e0))}function Qh(e){Ce(e)?bu.push(...e):Cn&&e.id===-1?Cn.splice(du+1,0,e):e.flags&1||(bu.push(e),e.flags|=1),Jd()}function Ts(e,t,n=Qt+1){for(;n<xt.length;n++){const u=xt[n];if(u&&u.flags&2){if(e&&u.id!==e.uid)continue;xt.splice(n,1),n--,u.flags&4&&(u.flags&=-2),u(),u.flags&4||(u.flags&=-2)}}}function wo(e){if(bu.length){const t=[...new Set(bu)].sort((n,u)=>ir(n)-ir(u));if(bu.length=0,Cn){Cn.push(...t);return}for(Cn=t,du=0;du<Cn.length;du++){const n=Cn[du];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Cn=null,du=0}}const ir=e=>e.id==null?e.flags&2?-1:1/0:e.id;function e0(e){try{for(Qt=0;Qt<xt.length;Qt++){const t=xt[Qt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ar(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qt<xt.length;Qt++){const t=xt[Qt];t&&(t.flags&=-2)}Qt=-1,xt.length=0,wo(),_o=null,(xt.length||bu.length)&&e0()}}let it=null,t0=null;function ko(e){const t=it;return it=e,t0=e&&e.type.__scopeId||null,t}function Be(e,t=it,n){if(!t||e._n)return e;const u=(...r)=>{u._d&&Ns(-1);const o=ko(t);let i;try{i=e(...r)}finally{ko(o),u._d&&Ns(1)}return i};return u._n=!0,u._c=!0,u._d=!0,u}function kt(e,t){if(it===null)return e;const n=Ko(it),u=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,a,s=Ue]=t[r];o&&(De(o)&&(o={mounted:o,updated:o}),o.deep&&pn(i),u.push({dir:o,instance:n,value:i,oldValue:void 0,arg:a,modifiers:s}))}return e}function Xt(e,t,n,u){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const a=r[i];o&&(a.oldValue=o[i].value);let s=a.dir[u];s&&(Hn(),qt(s,n,8,[e.el,a,e,t]),Vn())}}const Xh=Symbol("_vte"),n0=e=>e.__isTeleport,En=Symbol("_leaveCb"),Ur=Symbol("_enterCb");function Yh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fe(()=>{e.isMounted=!0}),Ir(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],u0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},r0=e=>{const t=e.subTree;return t.component?r0(t.component):t},Jh={name:"BaseTransition",props:u0,setup(e,{slots:t}){const n=Ru(),u=Yh();return()=>{const r=t.default&&a0(t.default(),!0);if(!r||!r.length)return;const o=o0(r),i=Me(e),{mode:a}=i;if(u.isLeaving)return gi(o);const s=Is(o);if(!s)return gi(o);let l=ia(s,i,u,n,d=>l=d);s.type!==mt&&ar(s,l);let c=n.subTree&&Is(n.subTree);if(c&&c.type!==mt&&!Zn(s,c)&&r0(n).type!==mt){let d=ia(c,i,u,n);if(ar(c,d),a==="out-in"&&s.type!==mt)return u.isLeaving=!0,d.afterLeave=()=>{u.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},gi(o);a==="in-out"&&s.type!==mt?d.delayLeave=(f,p,g)=>{const h=i0(u,c);h[String(c.key)]=c,f[En]=()=>{p(),f[En]=void 0,delete l.delayedLeave,c=void 0},l.delayedLeave=()=>{g(),delete l.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function o0(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==mt){t=n;break}}return t}const e1=Jh;function i0(e,t){const{leavingVNodes:n}=e;let u=n.get(t.type);return u||(u=Object.create(null),n.set(t.type,u)),u}function ia(e,t,n,u,r){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:y,onAppear:C,onAfterAppear:b,onAppearCancelled:m}=t,v=String(e.key),T=i0(n,e),P=(L,D)=>{L&&qt(L,u,9,D)},A=(L,D)=>{const N=D[1];P(L,D),Ce(L)?L.every(I=>I.length<=1)&&N():L.length<=1&&N()},k={mode:i,persisted:a,beforeEnter(L){let D=s;if(!n.isMounted)if(o)D=y||s;else return;L[En]&&L[En](!0);const N=T[v];N&&Zn(e,N)&&N.el[En]&&N.el[En](),P(D,[L])},enter(L){let D=l,N=c,I=d;if(!n.isMounted)if(o)D=C||l,N=b||c,I=m||d;else return;let R=!1;const K=L[Ur]=U=>{R||(R=!0,U?P(I,[L]):P(N,[L]),k.delayedLeave&&k.delayedLeave(),L[Ur]=void 0)};D?A(D,[L,K]):K()},leave(L,D){const N=String(e.key);if(L[Ur]&&L[Ur](!0),n.isUnmounting)return D();P(f,[L]);let I=!1;const R=L[En]=K=>{I||(I=!0,D(),K?P(h,[L]):P(g,[L]),L[En]=void 0,T[N]===e&&delete T[N])};T[N]=e,p?A(p,[L,R]):R()},clone(L){const D=ia(L,t,n,u,r);return r&&r(D),D}};return k}function gi(e){if(Tr(e))return e=Rn(e),e.children=null,e}function Is(e){if(!Tr(e))return n0(e.type)&&e.children?o0(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&De(n.default))return n.default()}}function ar(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ar(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function a0(e,t=!1,n){let u=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===me?(i.patchFlag&128&&r++,u=u.concat(a0(i.children,t,a))):(t||i.type!==mt)&&u.push(a!=null?Rn(i,{key:a}):i)}if(r>1)for(let o=0;o<u.length;o++)u[o].patchFlag=-2;return u}/*! #__NO_SIDE_EFFECTS__ */function fe(e,t){return De(e)?dt({name:e.name},t,{setup:e}):e}function Ha(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function sr(e,t,n,u,r=!1){if(Ce(e)){e.forEach((g,h)=>sr(g,t&&(Ce(t)?t[h]:t),n,u,r));return}if(Yn(u)&&!r){u.shapeFlag&512&&u.type.__asyncResolved&&u.component.subTree.component&&sr(e,t,n,u.component.subTree);return}const o=u.shapeFlag&4?Ko(u.component):u.el,i=r?null:o,{i:a,r:s}=e,l=t&&t.r,c=a.refs===Ue?a.refs={}:a.refs,d=a.setupState,f=Me(d),p=d===Ue?()=>!1:g=>je(f,g);if(l!=null&&l!==s&&(nt(l)?(c[l]=null,p(l)&&(d[l]=null)):Xe(l)&&(l.value=null)),De(s))Ar(s,a,12,[i,c]);else{const g=nt(s),h=Xe(s);if(g||h){const y=()=>{if(e.f){const C=g?p(s)?d[s]:c[s]:s.value;r?Ce(C)&&$a(C,o):Ce(C)?C.includes(o)||C.push(o):g?(c[s]=[o],p(s)&&(d[s]=c[s])):(s.value=[o],e.k&&(c[e.k]=s.value))}else g?(c[s]=i,p(s)&&(d[s]=i)):h&&(s.value=i,e.k&&(c[e.k]=i))};i?(y.id=-1,Tt(y,n)):y()}}}let Ls=!1;const au=()=>{Ls||(console.error("Hydration completed but contains mismatches."),Ls=!0)},t1=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",n1=e=>e.namespaceURI.includes("MathML"),Gr=e=>{if(e.nodeType===1){if(t1(e))return"svg";if(n1(e))return"mathml"}},pu=e=>e.nodeType===8;function u1(e){const{mt:t,p:n,o:{patchProp:u,createText:r,nextSibling:o,parentNode:i,remove:a,insert:s,createComment:l}}=e,c=(m,v)=>{if(!v.hasChildNodes()){n(null,m,v),wo(),v._vnode=m;return}d(v.firstChild,m,null,null,null),wo(),v._vnode=m},d=(m,v,T,P,A,k=!1)=>{k=k||!!v.dynamicChildren;const L=pu(m)&&m.data==="[",D=()=>h(m,v,T,P,A,L),{type:N,ref:I,shapeFlag:R,patchFlag:K}=v;let U=m.nodeType;v.el=m,K===-2&&(k=!1,v.dynamicChildren=null);let M=null;switch(N){case eu:U!==3?v.children===""?(s(v.el=r(""),i(m),m),M=m):M=D():(m.data!==v.children&&(au(),m.data=v.children),M=o(m));break;case mt:b(m)?(M=o(m),C(v.el=m.content.firstChild,m,T)):U!==8||L?M=D():M=o(m);break;case Ju:if(L&&(m=o(m),U=m.nodeType),U===1||U===3){M=m;const J=!v.children.length;for(let q=0;q<v.staticCount;q++)J&&(v.children+=M.nodeType===1?M.outerHTML:M.data),q===v.staticCount-1&&(v.anchor=M),M=o(M);return L?o(M):M}else D();break;case me:L?M=g(m,v,T,P,A,k):M=D();break;default:if(R&1)(U!==1||v.type.toLowerCase()!==m.tagName.toLowerCase())&&!b(m)?M=D():M=f(m,v,T,P,A,k);else if(R&6){v.slotScopeIds=A;const J=i(m);if(L?M=y(m):pu(m)&&m.data==="teleport start"?M=y(m,m.data,"teleport end"):M=o(m),t(v,J,null,T,P,Gr(J),k),Yn(v)&&!v.type.__asyncResolved){let q;L?(q=re(me),q.anchor=M?M.previousSibling:J.lastChild):q=m.nodeType===3?Qe(""):re("div"),q.el=m,v.component.subTree=q}}else R&64?U!==8?M=D():M=v.type.hydrate(m,v,T,P,A,k,e,p):R&128&&(M=v.type.hydrate(m,v,T,P,Gr(i(m)),A,k,e,d))}return I!=null&&sr(I,null,P,v),M},f=(m,v,T,P,A,k)=>{k=k||!!v.dynamicChildren;const{type:L,props:D,patchFlag:N,shapeFlag:I,dirs:R,transition:K}=v,U=L==="input"||L==="option";if(U||N!==-1){R&&Xt(v,null,T,"created");let M=!1;if(b(m)){M=L0(null,K)&&T&&T.vnode.props&&T.vnode.props.appear;const q=m.content.firstChild;M&&K.beforeEnter(q),C(q,m,T),v.el=m=q}if(I&16&&!(D&&(D.innerHTML||D.textContent))){let q=p(m.firstChild,v,m,T,P,A,k);for(;q;){qr(m,1)||au();const ie=q;q=q.nextSibling,a(ie)}}else if(I&8){let q=v.children;q[0]===`
`&&(m.tagName==="PRE"||m.tagName==="TEXTAREA")&&(q=q.slice(1)),m.textContent!==q&&(qr(m,0)||au(),m.textContent=v.children)}if(D){if(U||!k||N&48){const q=m.tagName.includes("-");for(const ie in D)(U&&(ie.endsWith("value")||ie==="indeterminate")||Cr(ie)&&!gu(ie)||ie[0]==="."||q)&&u(m,ie,null,D[ie],void 0,T)}else if(D.onClick)u(m,"onClick",null,D.onClick,void 0,T);else if(N&4&&Xn(D.style))for(const q in D.style)D.style[q]}let J;(J=D&&D.onVnodeBeforeMount)&&Rt(J,T,v),R&&Xt(v,null,T,"beforeMount"),((J=D&&D.onVnodeMounted)||R||M)&&M0(()=>{J&&Rt(J,T,v),M&&K.enter(m),R&&Xt(v,null,T,"mounted")},P)}return m.nextSibling},p=(m,v,T,P,A,k,L)=>{L=L||!!v.dynamicChildren;const D=v.children,N=D.length;for(let I=0;I<N;I++){const R=L?D[I]:D[I]=Ft(D[I]),K=R.type===eu;m?(K&&!L&&I+1<N&&Ft(D[I+1]).type===eu&&(s(r(m.data.slice(R.children.length)),T,o(m)),m.data=R.children),m=d(m,R,P,A,k,L)):K&&!R.children?s(R.el=r(""),T):(qr(T,1)||au(),n(null,R,T,null,P,A,Gr(T),k))}return m},g=(m,v,T,P,A,k)=>{const{slotScopeIds:L}=v;L&&(A=A?A.concat(L):L);const D=i(m),N=p(o(m),v,D,T,P,A,k);return N&&pu(N)&&N.data==="]"?o(v.anchor=N):(au(),s(v.anchor=l("]"),D,N),N)},h=(m,v,T,P,A,k)=>{if(qr(m.parentElement,1)||au(),v.el=null,k){const N=y(m);for(;;){const I=o(m);if(I&&I!==N)a(I);else break}}const L=o(m),D=i(m);return a(m),n(null,v,D,L,T,P,Gr(D),A),T&&(T.vnode.el=v.el,F0(T,v.el)),L},y=(m,v="[",T="]")=>{let P=0;for(;m;)if(m=o(m),m&&pu(m)&&(m.data===v&&P++,m.data===T)){if(P===0)return o(m);P--}return m},C=(m,v,T)=>{const P=v.parentNode;P&&P.replaceChild(m,v);let A=T;for(;A;)A.vnode.el===v&&(A.vnode.el=A.subTree.el=m),A=A.parent},b=m=>m.nodeType===1&&m.tagName==="TEMPLATE";return[c,d]}const $s="data-allow-mismatch",r1={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function qr(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute($s);)e=e.parentElement;const n=e&&e.getAttribute($s);if(n==null)return!1;if(n==="")return!0;{const u=n.split(",");return t===0&&u.includes("children")?!0:n.split(",").includes(r1[t])}}Ho().requestIdleCallback;Ho().cancelIdleCallback;function o1(e,t){if(pu(e)&&e.data==="["){let n=1,u=e.nextSibling;for(;u;){if(u.nodeType===1){if(t(u)===!1)break}else if(pu(u))if(u.data==="]"){if(--n===0)break}else u.data==="["&&n++;u=u.nextSibling}}else t(e)}const Yn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function vt(e){De(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:u,delay:r=200,hydrate:o,timeout:i,suspensible:a=!0,onError:s}=e;let l=null,c,d=0;const f=()=>(d++,l=null,p()),p=()=>{let g;return l||(g=l=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),s)return new Promise((y,C)=>{s(h,()=>y(f()),()=>C(h),d+1)});throw h}).then(h=>g!==l&&l?l:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),c=h,h)))};return fe({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(g,h,y){const C=o?()=>{const b=o(y,m=>o1(g,m));b&&(h.bum||(h.bum=[])).push(b)}:y;c?C():p().then(()=>!h.isUnmounted&&C())},get __asyncResolved(){return c},setup(){const g=ot;if(Ha(g),c)return()=>bi(c,g);const h=m=>{l=null,Sr(m,g,13,!u)};if(a&&g.suspense||Cu)return p().then(m=>()=>bi(m,g)).catch(m=>(h(m),()=>u?re(u,{error:m}):null));const y=Q(!1),C=Q(),b=Q(!!r);return r&&setTimeout(()=>{b.value=!1},r),i!=null&&setTimeout(()=>{if(!y.value&&!C.value){const m=new Error(`Async component timed out after ${i}ms.`);h(m),C.value=m}},i),p().then(()=>{y.value=!0,g.parent&&Tr(g.parent.vnode)&&g.parent.update()}).catch(m=>{h(m),C.value=m}),()=>{if(y.value&&c)return bi(c,g);if(C.value&&u)return re(u,{error:C.value});if(n&&!b.value)return re(n)}}})}function bi(e,t){const{ref:n,props:u,children:r,ce:o}=t.vnode,i=re(e,u,r);return i.ref=n,i.ce=o,delete t.vnode.ce,i}const Tr=e=>e.type.__isKeepAlive;function i1(e,t){s0(e,"a",t)}function a1(e,t){s0(e,"da",t)}function s0(e,t,n=ot){const u=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Go(t,u,n),n){let r=n.parent;for(;r&&r.parent;)Tr(r.parent.vnode)&&s1(u,t,n,r),r=r.parent}}function s1(e,t,n,u){const r=Go(t,e,u,!0);Vt(()=>{$a(u[t],r)},n)}function Go(e,t,n=ot,u=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{Hn();const a=Lr(n),s=qt(t,n,e,i);return a(),Vn(),s});return u?r.unshift(o):r.push(o),o}}const xn=e=>(t,n=ot)=>{(!Cu||e==="sp")&&Go(e,(...u)=>t(...u),n)},l0=xn("bm"),Fe=xn("m"),c0=xn("bu"),d0=xn("u"),Ir=xn("bum"),Vt=xn("um"),l1=xn("sp"),c1=xn("rtg"),d1=xn("rtc");function f1(e,t=ot){Go("ec",e,t)}const f0="components";function ze(e,t){return h0(f0,e,!0,t)||e}const p0=Symbol.for("v-ndc");function wu(e){return nt(e)?h0(f0,e,!1)||e:e||p0}function h0(e,t,n=!0,u=!1){const r=it||ot;if(r){const o=r.type;{const a=Z1(o,!1);if(a&&(a===t||a===Bt(t)||a===jo(Bt(t))))return o}const i=Ds(r[e]||o[e],t)||Ds(r.appContext[e],t);return!i&&u?o:i}}function Ds(e,t){return e&&(e[t]||e[Bt(t)]||e[jo(Bt(t))])}function Re(e,t,n,u){let r;const o=n,i=Ce(e);if(i||nt(e)){const a=i&&Xn(e);let s=!1;a&&(s=!Mt(e),e=Uo(e)),r=new Array(e.length);for(let l=0,c=e.length;l<c;l++)r[l]=t(s?ht(e[l]):e[l],l,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,o)}else if(Ve(e))if(e[Symbol.iterator])r=Array.from(e,(a,s)=>t(a,s,void 0,o));else{const a=Object.keys(e);r=new Array(a.length);for(let s=0,l=a.length;s<l;s++){const c=a[s];r[s]=t(e[c],c,s,o)}}else r=[];return r}function _t(e,t,n={},u,r){if(it.ce||it.parent&&Yn(it.parent)&&it.parent.ce)return t!=="default"&&(n.name=t),x(),de(me,null,[re("slot",n,u&&u())],64);let o=e[t];o&&o._c&&(o._d=!1),x();const i=o&&m0(o(n)),a=n.key||i&&i.key,s=de(me,{key:(a&&!Gt(a)?a:`_${t}`)+(!i&&u?"_fb":"")},i||(u?u():[]),i&&e._===1?64:-2);return s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),o&&o._c&&(o._d=!0),s}function m0(e){return e.some(t=>lr(t)?!(t.type===mt||t.type===me&&!m0(t.children)):!0)?e:null}const aa=e=>e?N0(e)?Ko(e):aa(e.parent):null,Yu=dt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>aa(e.parent),$root:e=>aa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>v0(e),$forceUpdate:e=>e.f||(e.f=()=>{ja(e.update)}),$nextTick:e=>e.n||(e.n=yn.bind(e.proxy)),$watch:e=>R1.bind(e)}),vi=(e,t)=>e!==Ue&&!e.__isScriptSetup&&je(e,t),p1={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:u,data:r,props:o,accessCache:i,type:a,appContext:s}=e;let l;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return u[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(vi(u,t))return i[t]=1,u[t];if(r!==Ue&&je(r,t))return i[t]=2,r[t];if((l=e.propsOptions[0])&&je(l,t))return i[t]=3,o[t];if(n!==Ue&&je(n,t))return i[t]=4,n[t];sa&&(i[t]=0)}}const c=Yu[t];let d,f;if(c)return t==="$attrs"&&pt(e.attrs,"get",""),c(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==Ue&&je(n,t))return i[t]=4,n[t];if(f=s.config.globalProperties,je(f,t))return f[t]},set({_:e},t,n){const{data:u,setupState:r,ctx:o}=e;return vi(r,t)?(r[t]=n,!0):u!==Ue&&je(u,t)?(u[t]=n,!0):je(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:u,appContext:r,propsOptions:o}},i){let a;return!!n[i]||e!==Ue&&je(e,i)||vi(t,i)||(a=o[0])&&je(a,i)||je(u,i)||je(Yu,i)||je(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:je(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function g0(){return h1().slots}function h1(){const e=Ru();return e.setupContext||(e.setupContext=H0(e))}function Ps(e){return Ce(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let sa=!0;function m1(e){const t=v0(e),n=e.proxy,u=e.ctx;sa=!1,t.beforeCreate&&Rs(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:a,provide:s,inject:l,created:c,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:h,deactivated:y,beforeDestroy:C,beforeUnmount:b,destroyed:m,unmounted:v,render:T,renderTracked:P,renderTriggered:A,errorCaptured:k,serverPrefetch:L,expose:D,inheritAttrs:N,components:I,directives:R,filters:K}=t;if(l&&g1(l,u,null),i)for(const J in i){const q=i[J];De(q)&&(u[J]=q.bind(n))}if(r){const J=r.call(n,n);Ve(J)&&(e.data=bn(J))}if(sa=!0,o)for(const J in o){const q=o[J],ie=De(q)?q.bind(n,n):De(q.get)?q.get.bind(n,n):en,ce=!De(q)&&De(q.set)?q.set.bind(n):en,ve=B({get:ie,set:ce});Object.defineProperty(u,J,{enumerable:!0,configurable:!0,get:()=>ve.value,set:he=>ve.value=he})}if(a)for(const J in a)b0(a[J],u,n,J);if(s){const J=De(s)?s.call(n):s;Reflect.ownKeys(J).forEach(q=>{Ot(q,J[q])})}c&&Rs(c,e,"c");function M(J,q){Ce(q)?q.forEach(ie=>J(ie.bind(n))):q&&J(q.bind(n))}if(M(l0,d),M(Fe,f),M(c0,p),M(d0,g),M(i1,h),M(a1,y),M(f1,k),M(d1,P),M(c1,A),M(Ir,b),M(Vt,v),M(l1,L),Ce(D))if(D.length){const J=e.exposed||(e.exposed={});D.forEach(q=>{Object.defineProperty(J,q,{get:()=>n[q],set:ie=>n[q]=ie})})}else e.exposed||(e.exposed={});T&&e.render===en&&(e.render=T),N!=null&&(e.inheritAttrs=N),I&&(e.components=I),R&&(e.directives=R),L&&Ha(e)}function g1(e,t,n=en){Ce(e)&&(e=la(e));for(const u in e){const r=e[u];let o;Ve(r)?"default"in r?o=He(r.from||u,r.default,!0):o=He(r.from||u):o=He(r),Xe(o)?Object.defineProperty(t,u,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[u]=o}}function Rs(e,t,n){qt(Ce(e)?e.map(u=>u.bind(t.proxy)):e.bind(t.proxy),t,n)}function b0(e,t,n,u){let r=u.includes(".")?P0(n,u):()=>n[u];if(nt(e)){const o=t[e];De(o)&&Pe(r,o)}else if(De(e))Pe(r,e.bind(n));else if(Ve(e))if(Ce(e))e.forEach(o=>b0(o,t,n,u));else{const o=De(e.handler)?e.handler.bind(n):t[e.handler];De(o)&&Pe(r,o,e)}}function v0(e){const t=e.type,{mixins:n,extends:u}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let s;return a?s=a:!r.length&&!n&&!u?s=t:(s={},r.length&&r.forEach(l=>Co(s,l,i,!0)),Co(s,t,i)),Ve(t)&&o.set(t,s),s}function Co(e,t,n,u=!1){const{mixins:r,extends:o}=t;o&&Co(e,o,n,!0),r&&r.forEach(i=>Co(e,i,n,!0));for(const i in t)if(!(u&&i==="expose")){const a=b1[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const b1={data:Fs,props:Os,emits:Os,methods:Wu,computed:Wu,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Wu,directives:Wu,watch:y1,provide:Fs,inject:v1};function Fs(e,t){return t?e?function(){return dt(De(e)?e.call(this,this):e,De(t)?t.call(this,this):t)}:t:e}function v1(e,t){return Wu(la(e),la(t))}function la(e){if(Ce(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function bt(e,t){return e?[...new Set([].concat(e,t))]:t}function Wu(e,t){return e?dt(Object.create(null),e,t):t}function Os(e,t){return e?Ce(e)&&Ce(t)?[...new Set([...e,...t])]:dt(Object.create(null),Ps(e),Ps(t??{})):t}function y1(e,t){if(!e)return t;if(!t)return e;const n=dt(Object.create(null),e);for(const u in t)n[u]=bt(e[u],t[u]);return n}function y0(){return{app:null,config:{isNativeTag:uh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let x1=0;function _1(e,t){return function(u,r=null){De(u)||(u=dt({},u)),r!=null&&!Ve(r)&&(r=null);const o=y0(),i=new WeakSet,a=[];let s=!1;const l=o.app={_uid:x1++,_component:u,_props:r,_container:null,_context:o,_instance:null,version:J1,get config(){return o.config},set config(c){},use(c,...d){return i.has(c)||(c&&De(c.install)?(i.add(c),c.install(l,...d)):De(c)&&(i.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,f){if(!s){const p=l._ceVNode||re(u,r);return p.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),d&&t?t(p,c):e(p,c,f),s=!0,l._container=c,c.__vue_app__=l,Ko(p.component)}},onUnmount(c){a.push(c)},unmount(){s&&(qt(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l},runWithContext(c){const d=Jn;Jn=l;try{return c()}finally{Jn=d}}};return l}}let Jn=null;function Ot(e,t){if(ot){let n=ot.provides;const u=ot.parent&&ot.parent.provides;u===n&&(n=ot.provides=Object.create(u)),n[e]=t}}function He(e,t,n=!1){const u=ot||it;if(u||Jn){const r=Jn?Jn._context.provides:u?u.parent==null?u.vnode.appContext&&u.vnode.appContext.provides:u.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&De(t)?t.call(u&&u.proxy):t}}function x0(){return!!(ot||it||Jn)}const _0={},w0=()=>Object.create(_0),k0=e=>Object.getPrototypeOf(e)===_0;function w1(e,t,n,u=!1){const r={},o=w0();e.propsDefaults=Object.create(null),C0(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=u?r:Kd(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function k1(e,t,n,u){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,a=Me(r),[s]=e.propsOptions;let l=!1;if((u||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(qo(e.emitsOptions,f))continue;const p=t[f];if(s)if(je(o,f))p!==o[f]&&(o[f]=p,l=!0);else{const g=Bt(f);r[g]=ca(s,a,g,p,e,!1)}else p!==o[f]&&(o[f]=p,l=!0)}}}else{C0(e,t,r,o)&&(l=!0);let c;for(const d in a)(!t||!je(t,d)&&((c=jn(d))===d||!je(t,c)))&&(s?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=ca(s,a,d,void 0,e,!0)):delete r[d]);if(o!==a)for(const d in o)(!t||!je(t,d))&&(delete o[d],l=!0)}l&&fn(e.attrs,"set","")}function C0(e,t,n,u){const[r,o]=e.propsOptions;let i=!1,a;if(t)for(let s in t){if(gu(s))continue;const l=t[s];let c;r&&je(r,c=Bt(s))?!o||!o.includes(c)?n[c]=l:(a||(a={}))[c]=l:qo(e.emitsOptions,s)||(!(s in u)||l!==u[s])&&(u[s]=l,i=!0)}if(o){const s=Me(n),l=a||Ue;for(let c=0;c<o.length;c++){const d=o[c];n[d]=ca(r,s,d,l[d],e,!je(l,d))}}return i}function ca(e,t,n,u,r,o){const i=e[n];if(i!=null){const a=je(i,"default");if(a&&u===void 0){const s=i.default;if(i.type!==Function&&!i.skipFactory&&De(s)){const{propsDefaults:l}=r;if(n in l)u=l[n];else{const c=Lr(r);u=l[n]=s.call(null,t),c()}}else u=s;r.ce&&r.ce._setProp(n,u)}i[0]&&(o&&!a?u=!1:i[1]&&(u===""||u===jn(n))&&(u=!0))}return u}const C1=new WeakMap;function E0(e,t,n=!1){const u=n?C1:t.propsCache,r=u.get(e);if(r)return r;const o=e.props,i={},a=[];let s=!1;if(!De(e)){const c=d=>{s=!0;const[f,p]=E0(d,t,!0);dt(i,f),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!s)return Ve(e)&&u.set(e,hu),hu;if(Ce(o))for(let c=0;c<o.length;c++){const d=Bt(o[c]);Ms(d)&&(i[d]=Ue)}else if(o)for(const c in o){const d=Bt(c);if(Ms(d)){const f=o[c],p=i[d]=Ce(f)||De(f)?{type:f}:dt({},f),g=p.type;let h=!1,y=!0;if(Ce(g))for(let C=0;C<g.length;++C){const b=g[C],m=De(b)&&b.name;if(m==="Boolean"){h=!0;break}else m==="String"&&(y=!1)}else h=De(g)&&g.name==="Boolean";p[0]=h,p[1]=y,(h||je(p,"default"))&&a.push(d)}}const l=[i,a];return Ve(e)&&u.set(e,l),l}function Ms(e){return e[0]!=="$"&&!gu(e)}const A0=e=>e[0]==="_"||e==="$stable",Va=e=>Ce(e)?e.map(Ft):[Ft(e)],E1=(e,t,n)=>{if(t._n)return t;const u=Be((...r)=>Va(t(...r)),n);return u._c=!1,u},S0=(e,t,n)=>{const u=e._ctx;for(const r in e){if(A0(r))continue;const o=e[r];if(De(o))t[r]=E1(r,o,u);else if(o!=null){const i=Va(o);t[r]=()=>i}}},T0=(e,t)=>{const n=Va(t);e.slots.default=()=>n},I0=(e,t,n)=>{for(const u in t)(n||u!=="_")&&(e[u]=t[u])},A1=(e,t,n)=>{const u=e.slots=w0();if(e.vnode.shapeFlag&32){const r=t._;r?(I0(u,t,n),n&&Id(u,"_",r,!0)):S0(t,u)}else t&&T0(e,t)},S1=(e,t,n)=>{const{vnode:u,slots:r}=e;let o=!0,i=Ue;if(u.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:I0(r,t,n):(o=!t.$stable,S0(t,r)),i=t}else t&&(T0(e,t),i={default:1});if(o)for(const a in r)!A0(a)&&i[a]==null&&delete r[a]},Tt=M0;function T1(e){return I1(e,u1)}function I1(e,t){const n=Ho();n.__VUE__=!0;const{insert:u,remove:r,patchProp:o,createElement:i,createText:a,createComment:s,setText:l,setElementText:c,parentNode:d,nextSibling:f,setScopeId:p=en,insertStaticContent:g}=e,h=(w,_,F,G=null,j=null,W=null,ae=void 0,ue=null,se=!!_.dynamicChildren)=>{if(w===_)return;w&&!Zn(w,_)&&(G=H(w),he(w,j,W,!0),w=null),_.patchFlag===-2&&(se=!1,_.dynamicChildren=null);const{type:te,ref:xe,shapeFlag:pe}=_;switch(te){case eu:y(w,_,F,G);break;case mt:C(w,_,F,G);break;case Ju:w==null&&b(_,F,G,ae);break;case me:I(w,_,F,G,j,W,ae,ue,se);break;default:pe&1?T(w,_,F,G,j,W,ae,ue,se):pe&6?R(w,_,F,G,j,W,ae,ue,se):(pe&64||pe&128)&&te.process(w,_,F,G,j,W,ae,ue,se,O)}xe!=null&&j&&sr(xe,w&&w.ref,W,_||w,!_)},y=(w,_,F,G)=>{if(w==null)u(_.el=a(_.children),F,G);else{const j=_.el=w.el;_.children!==w.children&&l(j,_.children)}},C=(w,_,F,G)=>{w==null?u(_.el=s(_.children||""),F,G):_.el=w.el},b=(w,_,F,G)=>{[w.el,w.anchor]=g(w.children,_,F,G,w.el,w.anchor)},m=({el:w,anchor:_},F,G)=>{let j;for(;w&&w!==_;)j=f(w),u(w,F,G),w=j;u(_,F,G)},v=({el:w,anchor:_})=>{let F;for(;w&&w!==_;)F=f(w),r(w),w=F;r(_)},T=(w,_,F,G,j,W,ae,ue,se)=>{_.type==="svg"?ae="svg":_.type==="math"&&(ae="mathml"),w==null?P(_,F,G,j,W,ae,ue,se):L(w,_,j,W,ae,ue,se)},P=(w,_,F,G,j,W,ae,ue)=>{let se,te;const{props:xe,shapeFlag:pe,transition:_e,dirs:Se}=w;if(se=w.el=i(w.type,W,xe&&xe.is,xe),pe&8?c(se,w.children):pe&16&&k(w.children,se,null,G,j,yi(w,W),ae,ue),Se&&Xt(w,null,G,"created"),A(se,w,w.scopeId,ae,G),xe){for(const $e in xe)$e!=="value"&&!gu($e)&&o(se,$e,null,xe[$e],W,G);"value"in xe&&o(se,"value",null,xe.value,W),(te=xe.onVnodeBeforeMount)&&Rt(te,G,w)}Se&&Xt(w,null,G,"beforeMount");const Ee=L0(j,_e);Ee&&_e.beforeEnter(se),u(se,_,F),((te=xe&&xe.onVnodeMounted)||Ee||Se)&&Tt(()=>{te&&Rt(te,G,w),Ee&&_e.enter(se),Se&&Xt(w,null,G,"mounted")},j)},A=(w,_,F,G,j)=>{if(F&&p(w,F),G)for(let W=0;W<G.length;W++)p(w,G[W]);if(j){let W=j.subTree;if(_===W||O0(W.type)&&(W.ssContent===_||W.ssFallback===_)){const ae=j.vnode;A(w,ae,ae.scopeId,ae.slotScopeIds,j.parent)}}},k=(w,_,F,G,j,W,ae,ue,se=0)=>{for(let te=se;te<w.length;te++){const xe=w[te]=ue?An(w[te]):Ft(w[te]);h(null,xe,_,F,G,j,W,ae,ue)}},L=(w,_,F,G,j,W,ae)=>{const ue=_.el=w.el;let{patchFlag:se,dynamicChildren:te,dirs:xe}=_;se|=w.patchFlag&16;const pe=w.props||Ue,_e=_.props||Ue;let Se;if(F&&Un(F,!1),(Se=_e.onVnodeBeforeUpdate)&&Rt(Se,F,_,w),xe&&Xt(_,w,F,"beforeUpdate"),F&&Un(F,!0),(pe.innerHTML&&_e.innerHTML==null||pe.textContent&&_e.textContent==null)&&c(ue,""),te?D(w.dynamicChildren,te,ue,F,G,yi(_,j),W):ae||q(w,_,ue,null,F,G,yi(_,j),W,!1),se>0){if(se&16)N(ue,pe,_e,F,j);else if(se&2&&pe.class!==_e.class&&o(ue,"class",null,_e.class,j),se&4&&o(ue,"style",pe.style,_e.style,j),se&8){const Ee=_.dynamicProps;for(let $e=0;$e<Ee.length;$e++){const Te=Ee[$e],Ze=pe[Te],Oe=_e[Te];(Oe!==Ze||Te==="value")&&o(ue,Te,Ze,Oe,j,F)}}se&1&&w.children!==_.children&&c(ue,_.children)}else!ae&&te==null&&N(ue,pe,_e,F,j);((Se=_e.onVnodeUpdated)||xe)&&Tt(()=>{Se&&Rt(Se,F,_,w),xe&&Xt(_,w,F,"updated")},G)},D=(w,_,F,G,j,W,ae)=>{for(let ue=0;ue<_.length;ue++){const se=w[ue],te=_[ue],xe=se.el&&(se.type===me||!Zn(se,te)||se.shapeFlag&70)?d(se.el):F;h(se,te,xe,null,G,j,W,ae,!0)}},N=(w,_,F,G,j)=>{if(_!==F){if(_!==Ue)for(const W in _)!gu(W)&&!(W in F)&&o(w,W,_[W],null,j,G);for(const W in F){if(gu(W))continue;const ae=F[W],ue=_[W];ae!==ue&&W!=="value"&&o(w,W,ue,ae,j,G)}"value"in F&&o(w,"value",_.value,F.value,j)}},I=(w,_,F,G,j,W,ae,ue,se)=>{const te=_.el=w?w.el:a(""),xe=_.anchor=w?w.anchor:a("");let{patchFlag:pe,dynamicChildren:_e,slotScopeIds:Se}=_;Se&&(ue=ue?ue.concat(Se):Se),w==null?(u(te,F,G),u(xe,F,G),k(_.children||[],F,xe,j,W,ae,ue,se)):pe>0&&pe&64&&_e&&w.dynamicChildren?(D(w.dynamicChildren,_e,F,j,W,ae,ue),(_.key!=null||j&&_===j.subTree)&&$0(w,_,!0)):q(w,_,F,xe,j,W,ae,ue,se)},R=(w,_,F,G,j,W,ae,ue,se)=>{_.slotScopeIds=ue,w==null?_.shapeFlag&512?j.ctx.activate(_,F,G,ae,se):K(_,F,G,j,W,ae,se):U(w,_,se)},K=(w,_,F,G,j,W,ae)=>{const ue=w.component=G1(w,G,j);if(Tr(w)&&(ue.ctx.renderer=O),q1(ue,!1,ae),ue.asyncDep){if(j&&j.registerDep(ue,M,ae),!w.el){const se=ue.subTree=re(mt);C(null,se,_,F)}}else M(ue,w,_,F,j,W,ae)},U=(w,_,F)=>{const G=_.component=w.component;if(B1(w,_,F))if(G.asyncDep&&!G.asyncResolved){J(G,_,F);return}else G.next=_,G.update();else _.el=w.el,G.vnode=_},M=(w,_,F,G,j,W,ae)=>{const ue=()=>{if(w.isMounted){let{next:pe,bu:_e,u:Se,parent:Ee,vnode:$e}=w;{const rt=D0(w);if(rt){pe&&(pe.el=$e.el,J(w,pe,ae)),rt.asyncDep.then(()=>{w.isUnmounted||ue()});return}}let Te=pe,Ze;Un(w,!1),pe?(pe.el=$e.el,J(w,pe,ae)):pe=$e,_e&&so(_e),(Ze=pe.props&&pe.props.onVnodeBeforeUpdate)&&Rt(Ze,Ee,pe,$e),Un(w,!0);const Oe=xi(w),et=w.subTree;w.subTree=Oe,h(et,Oe,d(et.el),H(et),w,j,W),pe.el=Oe.el,Te===null&&F0(w,Oe.el),Se&&Tt(Se,j),(Ze=pe.props&&pe.props.onVnodeUpdated)&&Tt(()=>Rt(Ze,Ee,pe,$e),j)}else{let pe;const{el:_e,props:Se}=_,{bm:Ee,m:$e,parent:Te,root:Ze,type:Oe}=w,et=Yn(_);if(Un(w,!1),Ee&&so(Ee),!et&&(pe=Se&&Se.onVnodeBeforeMount)&&Rt(pe,Te,_),Un(w,!0),_e&&Y){const rt=()=>{w.subTree=xi(w),Y(_e,w.subTree,w,j,null)};et&&Oe.__asyncHydrate?Oe.__asyncHydrate(_e,w,rt):rt()}else{Ze.ce&&Ze.ce._injectChildStyle(Oe);const rt=w.subTree=xi(w);h(null,rt,F,G,w,j,W),_.el=rt.el}if($e&&Tt($e,j),!et&&(pe=Se&&Se.onVnodeMounted)){const rt=_;Tt(()=>Rt(pe,Te,rt),j)}(_.shapeFlag&256||Te&&Yn(Te.vnode)&&Te.vnode.shapeFlag&256)&&w.a&&Tt(w.a,j),w.isMounted=!0,_=F=G=null}};w.scope.on();const se=w.effect=new Rd(ue);w.scope.off();const te=w.update=se.run.bind(se),xe=w.job=se.runIfDirty.bind(se);xe.i=w,xe.id=w.uid,se.scheduler=()=>ja(xe),Un(w,!0),te()},J=(w,_,F)=>{_.component=w;const G=w.vnode.props;w.vnode=_,w.next=null,k1(w,_.props,G,F),S1(w,_.children,F),Hn(),Ts(w),Vn()},q=(w,_,F,G,j,W,ae,ue,se=!1)=>{const te=w&&w.children,xe=w?w.shapeFlag:0,pe=_.children,{patchFlag:_e,shapeFlag:Se}=_;if(_e>0){if(_e&128){ce(te,pe,F,G,j,W,ae,ue,se);return}else if(_e&256){ie(te,pe,F,G,j,W,ae,ue,se);return}}Se&8?(xe&16&&ye(te,j,W),pe!==te&&c(F,pe)):xe&16?Se&16?ce(te,pe,F,G,j,W,ae,ue,se):ye(te,j,W,!0):(xe&8&&c(F,""),Se&16&&k(pe,F,G,j,W,ae,ue,se))},ie=(w,_,F,G,j,W,ae,ue,se)=>{w=w||hu,_=_||hu;const te=w.length,xe=_.length,pe=Math.min(te,xe);let _e;for(_e=0;_e<pe;_e++){const Se=_[_e]=se?An(_[_e]):Ft(_[_e]);h(w[_e],Se,F,null,j,W,ae,ue,se)}te>xe?ye(w,j,W,!0,!1,pe):k(_,F,G,j,W,ae,ue,se,pe)},ce=(w,_,F,G,j,W,ae,ue,se)=>{let te=0;const xe=_.length;let pe=w.length-1,_e=xe-1;for(;te<=pe&&te<=_e;){const Se=w[te],Ee=_[te]=se?An(_[te]):Ft(_[te]);if(Zn(Se,Ee))h(Se,Ee,F,null,j,W,ae,ue,se);else break;te++}for(;te<=pe&&te<=_e;){const Se=w[pe],Ee=_[_e]=se?An(_[_e]):Ft(_[_e]);if(Zn(Se,Ee))h(Se,Ee,F,null,j,W,ae,ue,se);else break;pe--,_e--}if(te>pe){if(te<=_e){const Se=_e+1,Ee=Se<xe?_[Se].el:G;for(;te<=_e;)h(null,_[te]=se?An(_[te]):Ft(_[te]),F,Ee,j,W,ae,ue,se),te++}}else if(te>_e)for(;te<=pe;)he(w[te],j,W,!0),te++;else{const Se=te,Ee=te,$e=new Map;for(te=Ee;te<=_e;te++){const St=_[te]=se?An(_[te]):Ft(_[te]);St.key!=null&&$e.set(St.key,te)}let Te,Ze=0;const Oe=_e-Ee+1;let et=!1,rt=0;const rn=new Array(Oe);for(te=0;te<Oe;te++)rn[te]=0;for(te=Se;te<=pe;te++){const St=w[te];if(Ze>=Oe){he(St,j,W,!0);continue}let Zt;if(St.key!=null)Zt=$e.get(St.key);else for(Te=Ee;Te<=_e;Te++)if(rn[Te-Ee]===0&&Zn(St,_[Te])){Zt=Te;break}Zt===void 0?he(St,j,W,!0):(rn[Zt-Ee]=te+1,Zt>=rt?rt=Zt:et=!0,h(St,_[Zt],F,null,j,W,ae,ue,se),Ze++)}const ws=et?L1(rn):hu;for(Te=ws.length-1,te=Oe-1;te>=0;te--){const St=Ee+te,Zt=_[St],ks=St+1<xe?_[St+1].el:G;rn[te]===0?h(null,Zt,F,ks,j,W,ae,ue,se):et&&(Te<0||te!==ws[Te]?ve(Zt,F,ks,2):Te--)}}},ve=(w,_,F,G,j=null)=>{const{el:W,type:ae,transition:ue,children:se,shapeFlag:te}=w;if(te&6){ve(w.component.subTree,_,F,G);return}if(te&128){w.suspense.move(_,F,G);return}if(te&64){ae.move(w,_,F,O);return}if(ae===me){u(W,_,F);for(let pe=0;pe<se.length;pe++)ve(se[pe],_,F,G);u(w.anchor,_,F);return}if(ae===Ju){m(w,_,F);return}if(G!==2&&te&1&&ue)if(G===0)ue.beforeEnter(W),u(W,_,F),Tt(()=>ue.enter(W),j);else{const{leave:pe,delayLeave:_e,afterLeave:Se}=ue,Ee=()=>u(W,_,F),$e=()=>{pe(W,()=>{Ee(),Se&&Se()})};_e?_e(W,Ee,$e):$e()}else u(W,_,F)},he=(w,_,F,G=!1,j=!1)=>{const{type:W,props:ae,ref:ue,children:se,dynamicChildren:te,shapeFlag:xe,patchFlag:pe,dirs:_e,cacheIndex:Se}=w;if(pe===-2&&(j=!1),ue!=null&&sr(ue,null,F,w,!0),Se!=null&&(_.renderCache[Se]=void 0),xe&256){_.ctx.deactivate(w);return}const Ee=xe&1&&_e,$e=!Yn(w);let Te;if($e&&(Te=ae&&ae.onVnodeBeforeUnmount)&&Rt(Te,_,w),xe&6)be(w.component,F,G);else{if(xe&128){w.suspense.unmount(F,G);return}Ee&&Xt(w,null,_,"beforeUnmount"),xe&64?w.type.remove(w,_,F,O,G):te&&!te.hasOnce&&(W!==me||pe>0&&pe&64)?ye(te,_,F,!1,!0):(W===me&&pe&384||!j&&xe&16)&&ye(se,_,F),G&&Ie(w)}($e&&(Te=ae&&ae.onVnodeUnmounted)||Ee)&&Tt(()=>{Te&&Rt(Te,_,w),Ee&&Xt(w,null,_,"unmounted")},F)},Ie=w=>{const{type:_,el:F,anchor:G,transition:j}=w;if(_===me){Le(F,G);return}if(_===Ju){v(w);return}const W=()=>{r(F),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(w.shapeFlag&1&&j&&!j.persisted){const{leave:ae,delayLeave:ue}=j,se=()=>ae(F,W);ue?ue(w.el,W,se):se()}else W()},Le=(w,_)=>{let F;for(;w!==_;)F=f(w),r(w),w=F;r(_)},be=(w,_,F)=>{const{bum:G,scope:j,job:W,subTree:ae,um:ue,m:se,a:te}=w;zs(se),zs(te),G&&so(G),j.stop(),W&&(W.flags|=8,he(ae,w,_,F)),ue&&Tt(ue,_),Tt(()=>{w.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},ye=(w,_,F,G=!1,j=!1,W=0)=>{for(let ae=W;ae<w.length;ae++)he(w[ae],_,F,G,j)},H=w=>{if(w.shapeFlag&6)return H(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const _=f(w.anchor||w.el),F=_&&_[Xh];return F?f(F):_};let ne=!1;const ee=(w,_,F)=>{w==null?_._vnode&&he(_._vnode,null,null,!0):h(_._vnode||null,w,_,null,null,null,F),_._vnode=w,ne||(ne=!0,Ts(),wo(),ne=!1)},O={p:h,um:he,m:ve,r:Ie,mt:K,mc:k,pc:q,pbc:D,n:H,o:e};let z,Y;return t&&([z,Y]=t(O)),{render:ee,hydrate:z,createApp:_1(ee,z)}}function yi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Un({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function L0(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $0(e,t,n=!1){const u=e.children,r=t.children;if(Ce(u)&&Ce(r))for(let o=0;o<u.length;o++){const i=u[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=An(r[o]),a.el=i.el),!n&&a.patchFlag!==-2&&$0(i,a)),a.type===eu&&(a.el=i.el)}}function L1(e){const t=e.slice(),n=[0];let u,r,o,i,a;const s=e.length;for(u=0;u<s;u++){const l=e[u];if(l!==0){if(r=n[n.length-1],e[r]<l){t[u]=r,n.push(u);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<l?o=a+1:i=a;l<e[n[o]]&&(o>0&&(t[u]=n[o-1]),n[o]=u)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function D0(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:D0(t)}function zs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const $1=Symbol.for("v-scx"),D1=()=>He($1);function P1(e,t){return Ua(e,null,t)}function Pe(e,t,n){return Ua(e,t,n)}function Ua(e,t,n=Ue){const{immediate:u,deep:r,flush:o,once:i}=n,a=dt({},n),s=t&&u||!t&&o!=="post";let l;if(Cu){if(o==="sync"){const p=D1();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!s){const p=()=>{};return p.stop=en,p.resume=en,p.pause=en,p}}const c=ot;a.call=(p,g,h)=>qt(p,c,g,h);let d=!1;o==="post"?a.scheduler=p=>{Tt(p,c&&c.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(p,g)=>{g?p():ja(p)}),a.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const f=Wh(e,t,a);return Cu&&(l?l.push(f):s&&f()),f}function R1(e,t,n){const u=this.proxy,r=nt(e)?e.includes(".")?P0(u,e):()=>u[e]:e.bind(u,u);let o;De(t)?o=t:(o=t.handler,n=t);const i=Lr(this),a=Ua(r,o.bind(u),n);return i(),a}function P0(e,t){const n=t.split(".");return()=>{let u=e;for(let r=0;r<n.length&&u;r++)u=u[n[r]];return u}}const F1=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Bt(t)}Modifiers`]||e[`${jn(t)}Modifiers`];function O1(e,t,...n){if(e.isUnmounted)return;const u=e.vnode.props||Ue;let r=n;const o=t.startsWith("update:"),i=o&&F1(u,t.slice(7));i&&(i.trim&&(r=n.map(c=>nt(c)?c.trim():c)),i.number&&(r=n.map(vo)));let a,s=u[a=di(t)]||u[a=di(Bt(t))];!s&&o&&(s=u[a=di(jn(t))]),s&&qt(s,e,6,r);const l=u[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,qt(l,e,6,r)}}function R0(e,t,n=!1){const u=t.emitsCache,r=u.get(e);if(r!==void 0)return r;const o=e.emits;let i={},a=!1;if(!De(e)){const s=l=>{const c=R0(l,t,!0);c&&(a=!0,dt(i,c))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!o&&!a?(Ve(e)&&u.set(e,null),null):(Ce(o)?o.forEach(s=>i[s]=null):dt(i,o),Ve(e)&&u.set(e,i),i)}function qo(e,t){return!e||!Cr(t)?!1:(t=t.slice(2).replace(/Once$/,""),je(e,t[0].toLowerCase()+t.slice(1))||je(e,jn(t))||je(e,t))}function xi(e){const{type:t,vnode:n,proxy:u,withProxy:r,propsOptions:[o],slots:i,attrs:a,emit:s,render:l,renderCache:c,props:d,data:f,setupState:p,ctx:g,inheritAttrs:h}=e,y=ko(e);let C,b;try{if(n.shapeFlag&4){const v=r||u,T=v;C=Ft(l.call(T,v,c,d,p,f,g)),b=a}else{const v=t;C=Ft(v.length>1?v(d,{attrs:a,slots:i,emit:s}):v(d,null)),b=t.props?a:M1(a)}}catch(v){er.length=0,Sr(v,e,1),C=re(mt)}let m=C;if(b&&h!==!1){const v=Object.keys(b),{shapeFlag:T}=m;v.length&&T&7&&(o&&v.some(La)&&(b=z1(b,o)),m=Rn(m,b,!1,!0))}return n.dirs&&(m=Rn(m,null,!1,!0),m.dirs=m.dirs?m.dirs.concat(n.dirs):n.dirs),n.transition&&ar(m,n.transition),C=m,ko(y),C}const M1=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cr(n))&&((t||(t={}))[n]=e[n]);return t},z1=(e,t)=>{const n={};for(const u in e)(!La(u)||!(u.slice(9)in t))&&(n[u]=e[u]);return n};function B1(e,t,n){const{props:u,children:r,component:o}=e,{props:i,children:a,patchFlag:s}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return u?Bs(u,i,l):!!i;if(s&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(i[f]!==u[f]&&!qo(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:u===i?!1:u?i?Bs(u,i,l):!0:!!i;return!1}function Bs(e,t,n){const u=Object.keys(t);if(u.length!==Object.keys(e).length)return!0;for(let r=0;r<u.length;r++){const o=u[r];if(t[o]!==e[o]&&!qo(n,o))return!0}return!1}function F0({vnode:e,parent:t},n){for(;t;){const u=t.subTree;if(u.suspense&&u.suspense.activeBranch===e&&(u.el=e.el),u===e)(e=t.vnode).el=n,t=t.parent;else break}}const O0=e=>e.__isSuspense;function M0(e,t){t&&t.pendingBranch?Ce(e)?t.effects.push(...e):t.effects.push(e):Qh(e)}const me=Symbol.for("v-fgt"),eu=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Ju=Symbol.for("v-stc"),er=[];let wt=null;function x(e=!1){er.push(wt=e?null:[])}function N1(){er.pop(),wt=er[er.length-1]||null}let ku=1;function Ns(e,t=!1){ku+=e,e<0&&wt&&t&&(wt.hasOnce=!0)}function z0(e){return e.dynamicChildren=ku>0?wt||hu:null,N1(),ku>0&&wt&&wt.push(e),e}function S(e,t,n,u,r,o){return z0($(e,t,n,u,r,o,!0))}function de(e,t,n,u,r){return z0(re(e,t,n,u,r,!0))}function lr(e){return e?e.__v_isVNode===!0:!1}function Zn(e,t){return e.type===t.type&&e.key===t.key}const B0=({key:e})=>e??null,lo=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?nt(e)||Xe(e)||De(e)?{i:it,r:e,k:t,f:!!n}:e:null);function $(e,t=null,n=null,u=0,r=null,o=e===me?0:1,i=!1,a=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&B0(t),ref:t&&lo(t),scopeId:t0,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:u,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:it};return a?(Ga(s,n),o&128&&e.normalize(s)):n&&(s.shapeFlag|=nt(n)?8:16),ku>0&&!i&&wt&&(s.patchFlag>0||o&6)&&s.patchFlag!==32&&wt.push(s),s}const re=j1;function j1(e,t=null,n=null,u=0,r=null,o=!1){if((!e||e===p0)&&(e=mt),lr(e)){const a=Rn(e,t,!0);return n&&Ga(a,n),ku>0&&!o&&wt&&(a.shapeFlag&6?wt[wt.indexOf(e)]=a:wt.push(a)),a.patchFlag=-2,a}if(Q1(e)&&(e=e.__vccOpts),t){t=H1(t);let{class:a,style:s}=t;a&&!nt(a)&&(t.class=ke(a)),Ve(s)&&(Na(s)&&!Ce(s)&&(s=dt({},s)),t.style=ct(s))}const i=nt(e)?1:O0(e)?128:n0(e)?64:Ve(e)?4:De(e)?2:0;return $(e,t,n,u,r,i,o,!0)}function H1(e){return e?Na(e)||k0(e)?dt({},e):e:null}function Rn(e,t,n=!1,u=!1){const{props:r,ref:o,patchFlag:i,children:a,transition:s}=e,l=t?Eo(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&B0(l),ref:t&&t.ref?n&&o?Ce(o)?o.concat(lo(t)):[o,lo(t)]:lo(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:s,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rn(e.ssContent),ssFallback:e.ssFallback&&Rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return s&&u&&ar(c,s.clone(c)),c}function Qe(e=" ",t=0){return re(eu,null,e,t)}function Wo(e,t){const n=re(Ju,null,e);return n.staticCount=t,n}function V(e="",t=!1){return t?(x(),de(mt,null,e)):re(mt,null,e)}function Ft(e){return e==null||typeof e=="boolean"?re(mt):Ce(e)?re(me,null,e.slice()):lr(e)?An(e):re(eu,null,String(e))}function An(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rn(e)}function Ga(e,t){let n=0;const{shapeFlag:u}=e;if(t==null)t=null;else if(Ce(t))n=16;else if(typeof t=="object")if(u&65){const r=t.default;r&&(r._c&&(r._d=!1),Ga(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!k0(t)?t._ctx=it:r===3&&it&&(it.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else De(t)?(t={default:t,_ctx:it},n=32):(t=String(t),u&64?(n=16,t=[Qe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Eo(...e){const t={};for(let n=0;n<e.length;n++){const u=e[n];for(const r in u)if(r==="class")t.class!==u.class&&(t.class=ke([t.class,u.class]));else if(r==="style")t.style=ct([t.style,u.style]);else if(Cr(r)){const o=t[r],i=u[r];i&&o!==i&&!(Ce(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=u[r])}return t}function Rt(e,t,n,u=null){qt(e,t,7,[n,u])}const V1=y0();let U1=0;function G1(e,t,n){const u=e.type,r=(t?t.appContext:e.appContext)||V1,o={uid:U1++,vnode:e,type:u,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:E0(u,r),emitsOptions:R0(u,r),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:u.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=O1.bind(null,o),e.ce&&e.ce(o),o}let ot=null;const Ru=()=>ot||it;let Ao,da;{const e=Ho(),t=(n,u)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(u),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};Ao=t("__VUE_INSTANCE_SETTERS__",n=>ot=n),da=t("__VUE_SSR_SETTERS__",n=>Cu=n)}const Lr=e=>{const t=ot;return Ao(e),e.scope.on(),()=>{e.scope.off(),Ao(t)}},js=()=>{ot&&ot.scope.off(),Ao(null)};function N0(e){return e.vnode.shapeFlag&4}let Cu=!1;function q1(e,t=!1,n=!1){t&&da(t);const{props:u,children:r}=e.vnode,o=N0(e);w1(e,u,o,t),A1(e,r,n);const i=o?W1(e,t):void 0;return t&&da(!1),i}function W1(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,p1);const{setup:u}=n;if(u){Hn();const r=e.setupContext=u.length>1?H0(e):null,o=Lr(e),i=Ar(u,e,0,[e.props,r]),a=Ad(i);if(Vn(),o(),(a||e.sp)&&!Yn(e)&&Ha(e),a){if(i.then(js,js),t)return i.then(s=>{Hs(e,s)}).catch(s=>{Sr(s,e,0)});e.asyncDep=i}else Hs(e,i)}else j0(e)}function Hs(e,t,n){De(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ve(t)&&(e.setupState=Qd(t)),j0(e)}function j0(e,t,n){const u=e.type;e.render||(e.render=u.render||en);{const r=Lr(e);Hn();try{m1(e)}finally{Vn(),r()}}}const K1={get(e,t){return pt(e,"get",""),e[t]}};function H0(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,K1),slots:e.slots,emit:e.emit,expose:t}}function Ko(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Qd(Oh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yu)return Yu[n](e)},has(t,n){return n in t||n in Yu}})):e.proxy}function Z1(e,t=!0){return De(e)?e.displayName||e.name:e.name||t&&e.__name}function Q1(e){return De(e)&&"__vccOpts"in e}const B=(e,t)=>Gh(e,t,Cu);function Z(e,t,n){const u=arguments.length;return u===2?Ve(t)&&!Ce(t)?lr(t)?re(e,null,[t]):re(e,t):re(e,null,t):(u>3?n=Array.prototype.slice.call(arguments,2):u===3&&lr(n)&&(n=[n]),re(e,t,n))}function X1(e,t,n,u){const r=n[u];if(r&&Y1(r,e))return r;const o=t();return o.memo=e.slice(),o.cacheIndex=u,n[u]=o}function Y1(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let u=0;u<n.length;u++)if(mn(n[u],t[u]))return!1;return ku>0&&wt&&wt.push(e),!0}const J1="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fa;const Vs=typeof window<"u"&&window.trustedTypes;if(Vs)try{fa=Vs.createPolicy("vue",{createHTML:e=>e})}catch{}const V0=fa?e=>fa.createHTML(e):e=>e,em="http://www.w3.org/2000/svg",tm="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,Us=dn&&dn.createElement("template"),nm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,u)=>{const r=t==="svg"?dn.createElementNS(em,e):t==="mathml"?dn.createElementNS(tm,e):n?dn.createElement(e,{is:n}):dn.createElement(e);return e==="select"&&u&&u.multiple!=null&&r.setAttribute("multiple",u.multiple),r},createText:e=>dn.createTextNode(e),createComment:e=>dn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,u,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Us.innerHTML=V0(u==="svg"?`<svg>${e}</svg>`:u==="mathml"?`<math>${e}</math>`:e);const a=Us.content;if(u==="svg"||u==="mathml"){const s=a.firstChild;for(;s.firstChild;)a.appendChild(s.firstChild);a.removeChild(s)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_n="transition",Hu="animation",cr=Symbol("_vtc"),U0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},um=dt({},u0,U0),rm=e=>(e.displayName="Transition",e.props=um,e),dr=rm((e,{slots:t})=>Z(e1,om(e),t)),Gn=(e,t=[])=>{Ce(e)?e.forEach(n=>n(...t)):e&&e(...t)},Gs=e=>e?Ce(e)?e.some(t=>t.length>1):e.length>1:!1;function om(e){const t={};for(const I in e)I in U0||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:u,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:s=o,appearActiveClass:l=i,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=im(r),h=g&&g[0],y=g&&g[1],{onBeforeEnter:C,onEnter:b,onEnterCancelled:m,onLeave:v,onLeaveCancelled:T,onBeforeAppear:P=C,onAppear:A=b,onAppearCancelled:k=m}=t,L=(I,R,K,U)=>{I._enterCancelled=U,qn(I,R?c:a),qn(I,R?l:i),K&&K()},D=(I,R)=>{I._isLeaving=!1,qn(I,d),qn(I,p),qn(I,f),R&&R()},N=I=>(R,K)=>{const U=I?A:b,M=()=>L(R,I,K);Gn(U,[R,M]),qs(()=>{qn(R,I?s:o),an(R,I?c:a),Gs(U)||Ws(R,u,h,M)})};return dt(t,{onBeforeEnter(I){Gn(C,[I]),an(I,o),an(I,i)},onBeforeAppear(I){Gn(P,[I]),an(I,s),an(I,l)},onEnter:N(!1),onAppear:N(!0),onLeave(I,R){I._isLeaving=!0;const K=()=>D(I,R);an(I,d),I._enterCancelled?(an(I,f),Qs()):(Qs(),an(I,f)),qs(()=>{I._isLeaving&&(qn(I,d),an(I,p),Gs(v)||Ws(I,u,y,K))}),Gn(v,[I,K])},onEnterCancelled(I){L(I,!1,void 0,!0),Gn(m,[I])},onAppearCancelled(I){L(I,!0,void 0,!0),Gn(k,[I])},onLeaveCancelled(I){D(I),Gn(T,[I])}})}function im(e){if(e==null)return null;if(Ve(e))return[_i(e.enter),_i(e.leave)];{const t=_i(e);return[t,t]}}function _i(e){return sh(e)}function an(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[cr]||(e[cr]=new Set)).add(t)}function qn(e,t){t.split(/\s+/).forEach(u=>u&&e.classList.remove(u));const n=e[cr];n&&(n.delete(t),n.size||(e[cr]=void 0))}function qs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let am=0;function Ws(e,t,n,u){const r=e._endId=++am,o=()=>{r===e._endId&&u()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:a,propCount:s}=sm(e,t);if(!i)return u();const l=i+"end";let c=0;const d=()=>{e.removeEventListener(l,f),o()},f=p=>{p.target===e&&++c>=s&&d()};setTimeout(()=>{c<s&&d()},a+1),e.addEventListener(l,f)}function sm(e,t){const n=window.getComputedStyle(e),u=g=>(n[g]||"").split(", "),r=u(`${_n}Delay`),o=u(`${_n}Duration`),i=Ks(r,o),a=u(`${Hu}Delay`),s=u(`${Hu}Duration`),l=Ks(a,s);let c=null,d=0,f=0;t===_n?i>0&&(c=_n,d=i,f=o.length):t===Hu?l>0&&(c=Hu,d=l,f=s.length):(d=Math.max(i,l),c=d>0?i>l?_n:Hu:null,f=c?c===_n?o.length:s.length:0);const p=c===_n&&/\b(transform|all)(,|$)/.test(u(`${_n}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:p}}function Ks(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,u)=>Zs(n)+Zs(e[u])))}function Zs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Qs(){return document.body.offsetHeight}function lm(e,t,n){const u=e[cr];u&&(t=(t?[t,...u]:[...u]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const So=Symbol("_vod"),G0=Symbol("_vsh"),Eu={beforeMount(e,{value:t},{transition:n}){e[So]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Vu(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:u}){!t!=!n&&(u?t?(u.beforeEnter(e),Vu(e,!0),u.enter(e)):u.leave(e,()=>{Vu(e,!1)}):Vu(e,t))},beforeUnmount(e,{value:t}){Vu(e,t)}};function Vu(e,t){e.style.display=t?e[So]:"none",e[G0]=!t}const cm=Symbol(""),dm=/(^|;)\s*display\s*:/;function fm(e,t,n){const u=e.style,r=nt(n);let o=!1;if(n&&!r){if(t)if(nt(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&co(u,a,"")}else for(const i in t)n[i]==null&&co(u,i,"");for(const i in n)i==="display"&&(o=!0),co(u,i,n[i])}else if(r){if(t!==n){const i=u[cm];i&&(n+=";"+i),u.cssText=n,o=dm.test(n)}}else t&&e.removeAttribute("style");So in e&&(e[So]=o?u.display:"",e[G0]&&(u.display="none"))}const Xs=/\s*!important$/;function co(e,t,n){if(Ce(n))n.forEach(u=>co(e,t,u));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const u=pm(e,t);Xs.test(n)?e.setProperty(jn(u),n.replace(Xs,""),"important"):e[u]=n}}const Ys=["Webkit","Moz","ms"],wi={};function pm(e,t){const n=wi[t];if(n)return n;let u=Bt(t);if(u!=="filter"&&u in e)return wi[t]=u;u=jo(u);for(let r=0;r<Ys.length;r++){const o=Ys[r]+u;if(o in e)return wi[t]=o}return t}const Js="http://www.w3.org/1999/xlink";function el(e,t,n,u,r,o=hh(t)){u&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Js,t.slice(6,t.length)):e.setAttributeNS(Js,t,n):n==null||o&&!Ld(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Gt(n)?String(n):n)}function tl(e,t,n,u,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?V0(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,s=n==null?e.type==="checkbox"?"on":"":String(n);(a!==s||!("_value"in e))&&(e.value=s),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ld(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(r||t)}function hn(e,t,n,u){e.addEventListener(t,n,u)}function hm(e,t,n,u){e.removeEventListener(t,n,u)}const nl=Symbol("_vei");function mm(e,t,n,u,r=null){const o=e[nl]||(e[nl]={}),i=o[t];if(u&&i)i.value=u;else{const[a,s]=gm(t);if(u){const l=o[t]=ym(u,r);hn(e,a,l,s)}else i&&(hm(e,a,i,s),o[t]=void 0)}}const ul=/(?:Once|Passive|Capture)$/;function gm(e){let t;if(ul.test(e)){t={};let u;for(;u=e.match(ul);)e=e.slice(0,e.length-u[0].length),t[u[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jn(e.slice(2)),t]}let ki=0;const bm=Promise.resolve(),vm=()=>ki||(bm.then(()=>ki=0),ki=Date.now());function ym(e,t){const n=u=>{if(!u._vts)u._vts=Date.now();else if(u._vts<=n.attached)return;qt(xm(u,n.value),t,5,[u])};return n.value=e,n.attached=vm(),n}function xm(e,t){if(Ce(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(u=>r=>!r._stopped&&u&&u(r))}else return t}const rl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,_m=(e,t,n,u,r,o)=>{const i=r==="svg";t==="class"?lm(e,u,i):t==="style"?fm(e,n,u):Cr(t)?La(t)||mm(e,t,n,u,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wm(e,t,u,i))?(tl(e,t,u),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&el(e,t,u,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!nt(u))?tl(e,Bt(t),u,o,t):(t==="true-value"?e._trueValue=u:t==="false-value"&&(e._falseValue=u),el(e,t,u,i))};function wm(e,t,n,u){if(u)return!!(t==="innerHTML"||t==="textContent"||t in e&&rl(t)&&De(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rl(t)&&nt(n)?!1:t in e}const Fn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Ce(t)?n=>so(t,n):t};function km(e){e.target.composing=!0}function ol(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const zt=Symbol("_assign"),On={created(e,{modifiers:{lazy:t,trim:n,number:u}},r){e[zt]=Fn(r);const o=u||r.props&&r.props.type==="number";hn(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=vo(a)),e[zt](a)}),n&&hn(e,"change",()=>{e.value=e.value.trim()}),t||(hn(e,"compositionstart",km),hn(e,"compositionend",ol),hn(e,"change",ol))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:u,trim:r,number:o}},i){if(e[zt]=Fn(i),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?vo(e.value):e.value,s=t??"";a!==s&&(document.activeElement===e&&e.type!=="range"&&(u&&t===n||r&&e.value.trim()===s)||(e.value=s))}},Cm={deep:!0,created(e,t,n){e[zt]=Fn(n),hn(e,"change",()=>{const u=e._modelValue,r=Au(e),o=e.checked,i=e[zt];if(Ce(u)){const a=Pa(u,r),s=a!==-1;if(o&&!s)i(u.concat(r));else if(!o&&s){const l=[...u];l.splice(a,1),i(l)}}else if(Du(u)){const a=new Set(u);o?a.add(r):a.delete(r),i(a)}else i(q0(e,o))})},mounted:il,beforeUpdate(e,t,n){e[zt]=Fn(n),il(e,t,n)}};function il(e,{value:t,oldValue:n},u){e._modelValue=t;let r;if(Ce(t))r=Pa(t,u.props.value)>-1;else if(Du(t))r=t.has(u.props.value);else{if(t===n)return;r=tu(t,q0(e,!0))}e.checked!==r&&(e.checked=r)}const Em={created(e,{value:t},n){e.checked=tu(t,n.props.value),e[zt]=Fn(n),hn(e,"change",()=>{e[zt](Au(e))})},beforeUpdate(e,{value:t,oldValue:n},u){e[zt]=Fn(u),t!==n&&(e.checked=tu(t,u.props.value))}},Am={deep:!0,created(e,{value:t,modifiers:{number:n}},u){const r=Du(t);hn(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?vo(Au(i)):Au(i));e[zt](e.multiple?r?new Set(o):o:o[0]),e._assigning=!0,yn(()=>{e._assigning=!1})}),e[zt]=Fn(u)},mounted(e,{value:t}){al(e,t)},beforeUpdate(e,t,n){e[zt]=Fn(n)},updated(e,{value:t}){e._assigning||al(e,t)}};function al(e,t){const n=e.multiple,u=Ce(t);if(!(n&&!u&&!Du(t))){for(let r=0,o=e.options.length;r<o;r++){const i=e.options[r],a=Au(i);if(n)if(u){const s=typeof a;s==="string"||s==="number"?i.selected=t.some(l=>String(l)===String(a)):i.selected=Pa(t,a)>-1}else i.selected=t.has(a);else if(tu(Au(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Au(e){return"_value"in e?e._value:e.value}function q0(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const W0={created(e,t,n){Wr(e,t,n,null,"created")},mounted(e,t,n){Wr(e,t,n,null,"mounted")},beforeUpdate(e,t,n,u){Wr(e,t,n,u,"beforeUpdate")},updated(e,t,n,u){Wr(e,t,n,u,"updated")}};function Sm(e,t){switch(e){case"SELECT":return Am;case"TEXTAREA":return On;default:switch(t){case"checkbox":return Cm;case"radio":return Em;default:return On}}}function Wr(e,t,n,u,r){const i=Sm(e.tagName,n.props&&n.props.type)[r];i&&i(e,t,n,u)}const Tm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Im=(e,t)=>{const n=e._withKeys||(e._withKeys={}),u=t.join(".");return n[u]||(n[u]=r=>{if(!("key"in r))return;const o=jn(r.key);if(t.some(i=>i===o||Tm[i]===o))return e(r)})},Lm=dt({patchProp:_m},nm);let Ci,sl=!1;function $m(){return Ci=sl?Ci:T1(Lm),sl=!0,Ci}const Dm=(...e)=>{const t=$m().createApp(...e),{mount:n}=t;return t.mount=u=>{const r=Rm(u);if(r)return n(r,!0,Pm(r))},t};function Pm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Rm(e){return nt(e)?document.querySelector(e):e}var K0=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith("//"),$r=e=>/^(https?:)?\/\//.test(e),ll=e=>{if(!e||e.endsWith("/"))return e;let t=e.replace(/(^|\/)README.md$/i,"$1index.html");return t.endsWith(".md")?t=`${t.substring(0,t.length-3)}.html`:t.endsWith(".html")||(t=`${t}.html`),t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),t},Fm="http://.",Om=(e,t)=>{if(!e.startsWith("/")&&t){const n=t.slice(0,t.lastIndexOf("/"));return ll(new URL(`${n}/${e}`,Fm).pathname)}return ll(e)},Zo=(e,t)=>{const n=Object.keys(e).sort((u,r)=>{const o=r.split("/").length-u.split("/").length;return o!==0?o:r.length-u.length});for(const u of n)if(t.startsWith(u))return u;return"/"},Mm=(e,t="/")=>{const n=e.replace(/^(?:https?:)?\/\/[^/]*/,"");return n.startsWith(t)?`/${n.slice(t.length)}`:n},zm=/(#|\?)/,Z0=e=>{const[t,...n]=e.split(zm);return{pathname:t,hashAndQueries:n.join("")}},Bm=["link","meta","script","style","noscript","template"],Nm=["title","base"],jm=([e,t,n])=>Nm.includes(e)?e:Bm.includes(e)?e==="meta"&&t.name?`${e}.${t.name}`:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([u,r])=>typeof r=="boolean"?r?[u,""]:null:[u,r]).filter(u=>u!=null).sort(([u],[r])=>u.localeCompare(r)),n]):null,Hm=e=>{const t=new Set,n=[];return e.forEach(u=>{const r=jm(u);r&&!t.has(r)&&(t.add(r),n.push(u))}),n},Q0=e=>e.endsWith("/")?e.slice(0,-1):e,qa=e=>e.startsWith("/")?e.slice(1):e,Wa=e=>Object.prototype.toString.call(e)==="[object Object]",tn=e=>typeof e=="string";const Vm="modulepreload",Um=function(e){return"/"+e},cl={},X=function(t,n,u){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(n.map(s=>{if(s=Um(s),s in cl)return;cl[s]=!0;const l=s.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Vm,l||(d.as="script"),d.crossOrigin="",d.href=s,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},Gm=JSON.parse("{}"),qm=Object.fromEntries([["/timeline.html",{loader:()=>X(()=>import("./timeline.html-CA_bA39U.js"),[]),meta:{title:""}}],["/posts.html",{loader:()=>X(()=>import("./posts.html-DH_jddPp.js"),[]),meta:{title:""}}],["/friendship-link.html",{loader:()=>X(()=>import("./friendship-link.html-CINaCPOs.js"),[]),meta:{title:""}}],["/categories/blog/1.html",{loader:()=>X(()=>import("./1.html-DANnib9n.js"),[]),meta:{title:""}}],["/tags/Github-Actions/1.html",{loader:()=>X(()=>import("./1.html-t1GGhCkY.js"),[]),meta:{title:""}}],["/tags/Secret-Key/1.html",{loader:()=>X(()=>import("./1.html-F-K2XMbG.js"),[]),meta:{title:""}}],["/tags/VuePress/1.html",{loader:()=>X(()=>import("./1.html-DLYEyuv3.js"),[]),meta:{title:""}}],["/tags/boke/1.html",{loader:()=>X(()=>import("./1.html-tWn76A5s.js"),[]),meta:{title:""}}],["/posts/1.html",{loader:()=>X(()=>import("./1.html-D1-l51Bp.js"),[]),meta:{title:""}}],["/",{loader:()=>X(()=>import("./index.html-Jue6WFDN.js"),[]),meta:{title:""}}],["/blogs/about.html",{loader:()=>X(()=>import("./about.html-B7vgP9vE.js"),[]),meta:{title:"vuepress-theme-reco"}}],["/blogs/deploy.html",{loader:()=>X(()=>import("./deploy.html-eSb6N0Rz.js"),[]),meta:{title:"Pages 部署"}}],["/blogs/github-actions-secret-key.html",{loader:()=>X(()=>import("./github-actions-secret-key.html-CA0f1Q6Z.js"),[]),meta:{title:"如何在 GitHub Actions 时使用 secretKey"}}],["/blogs/github-actions.html",{loader:()=>X(()=>import("./github-actions.html-DD9HBHSj.js"),[]),meta:{title:"使用 GitHub Actions 自动部署博客"}}],["/blogs/lookroot.html",{loader:()=>X(()=>import("./lookroot.html-B72SxJnt.js"),[]),meta:{title:"感谢 lookroot 对于主题推广的贡献"}}],["/blogs/one-year-old.html",{loader:()=>X(()=>import("./one-year-old.html-DRnQmT2d.js"),[]),meta:{title:"vuepress-theme-reco 一周岁"}}],["/blogs/valine-admin.html",{loader:()=>X(()=>import("./valine-admin.html--QYbcXAI.js"),[]),meta:{title:"Valine Admin 后台搭建(修订)"}}],["/en/",{loader:()=>X(()=>import("./index.html-zQxikJGU.js"),[]),meta:{title:""}}],["/docs/message-board.html",{loader:()=>X(()=>import("./message-board.html-BaOt1tDI.js"),[]),meta:{title:"留言板"}}],["/en/docs/message-board.html",{loader:()=>X(()=>import("./message-board.html-BINQbT32.js"),[]),meta:{title:"message board"}}],["/docs/others/donate.html",{loader:()=>X(()=>import("./donate.html-kdxLXzHQ.js"),__vite__mapDeps([0,1])),meta:{title:"打赏"}}],["/docs/others/examples.html",{loader:()=>X(()=>import("./examples.html-Dx4Pwauu.js"),[]),meta:{title:"案例"}}],["/docs/guide/architecture.html",{loader:()=>X(()=>import("./architecture.html-nqUTNmYq.js"),[]),meta:{title:"架构"}}],["/docs/guide/builtin-page.html",{loader:()=>X(()=>import("./builtin-page.html-C0gBP1pA.js"),[]),meta:{title:"内置页面"}}],["/docs/guide/bundler.html",{loader:()=>X(()=>import("./bundler.html-Dg9KoQEL.js"),[]),meta:{title:"打包工具"}}],["/docs/guide/contribute.html",{loader:()=>X(()=>import("./contribute.html-C-ZTk4q8.js"),[]),meta:{title:"贡献"}}],["/docs/guide/custom-style.html",{loader:()=>X(()=>import("./custom-style.html-qY1eVDl3.js"),[]),meta:{title:"自定义样式"}}],["/docs/guide/folder-specification.html",{loader:()=>X(()=>import("./folder-specification.html-ChtNNrAH.js"),[]),meta:{title:"文件夹规范"}}],["/docs/guide/getting-started.html",{loader:()=>X(()=>import("./getting-started.html-CqnJhfjO.js"),[]),meta:{title:"快速开始"}}],["/docs/guide/gui-builder.html",{loader:()=>X(()=>import("./gui-builder.html-uEidMlK0.js"),[]),meta:{title:"可视化搭建"}}],["/docs/guide/icon.html",{loader:()=>X(()=>import("./icon.html-B6DW2wkr.js"),[]),meta:{title:"图标"}}],["/docs/guide/introduce.html",{loader:()=>X(()=>import("./introduce.html-CixMNpNI.js"),[]),meta:{title:"介绍"}}],["/docs/guide/package-manager.html",{loader:()=>X(()=>import("./package-manager.html-C0jXPHvb.js"),[]),meta:{title:"包管理工具"}}],["/docs/guide/register-components.html",{loader:()=>X(()=>import("./register-components.html-D-iO5gcf.js"),[]),meta:{title:"注册组件"}}],["/docs/guide/register-layouts.html",{loader:()=>X(()=>import("./register-layouts.html-BpTU1R0y.js"),[]),meta:{title:"注册布局"}}],["/docs/guide/style.html",{loader:()=>X(()=>import("./style.html-Bxr_dPa5.js"),[]),meta:{title:"样式"}}],["/docs/plugins/bulletin-popover.html",{loader:()=>X(()=>import("./bulletin-popover.html-CeZBC_cA.js"),[]),meta:{title:"公告插件"}}],["/docs/plugins/comments.html",{loader:()=>X(()=>import("./comments.html-C53B_ddD.js"),[]),meta:{title:"评论插件"}}],["/docs/plugins/page.html",{loader:()=>X(()=>import("./page.html-DmYRICuA.js"),[]),meta:{title:"页面增强插件"}}],["/docs/plugins/vue-previews.html",{loader:()=>X(()=>import("./vue-previews.html-BRQSdiuo.js"),[]),meta:{title:"vue 组件预览插件"}}],["/docs/theme/appearance.html",{loader:()=>X(()=>import("./appearance.html-1VusHZGm.js"),[]),meta:{title:"外观"}}],["/docs/theme/auto-set-category.html",{loader:()=>X(()=>import("./auto-set-category.html-BcbWySGo.js"),[]),meta:{title:"自动设置分类"}}],["/docs/theme/auto-set-series.html",{loader:()=>X(()=>import("./auto-set-series.html-Cu2ALn4i.js"),[]),meta:{title:"自动设置系列"}}],["/docs/theme/bulletin-popover.html",{loader:()=>X(()=>import("./bulletin-popover.html-DixcgBkF.js"),[]),meta:{title:"公告"}}],["/docs/theme/comments.html",{loader:()=>X(()=>import("./comments.html-DhwBhfew.js"),[]),meta:{title:"评论"}}],["/docs/theme/custom-container.html",{loader:()=>X(()=>import("./custom-container.html-mINIElRz.js"),[]),meta:{title:"自定义容器"}}],["/docs/theme/custom-primary-color.html",{loader:()=>X(()=>import("./custom-primary-color.html-D-PU_szg.js"),[]),meta:{title:"自定义主题的基础色"}}],["/docs/theme/doc-search.html",{loader:()=>X(()=>import("./doc-search.html-z-fk_VEM.js"),[]),meta:{title:"搜索功能"}}],["/docs/theme/frontmatter-home.html",{loader:()=>X(()=>import("./frontmatter-home.html-CJSx9PVb.js"),[]),meta:{title:"首页"}}],["/docs/theme/frontmatter-page.html",{loader:()=>X(()=>import("./frontmatter-page.html-yMoCzvxw.js"),[]),meta:{title:"普通文档"}}],["/docs/theme/git.html",{loader:()=>X(()=>import("./git.html-B3NmHMTg.js"),[]),meta:{title:"git 相关"}}],["/docs/theme/home.html",{loader:()=>X(()=>import("./home.html-DA0MxCLU.js"),[]),meta:{title:"首页路径"}}],["/docs/theme/markdown-file-parse.html",{loader:()=>X(()=>import("./markdown-file-parse.html-DLTgpIwj.js"),[]),meta:{title:"解析文件为代码组"}}],["/docs/theme/markdown-task.html",{loader:()=>X(()=>import("./markdown-task.html-CQV3l-5y.js"),[]),meta:{title:"任务列表"}}],["/docs/theme/markdown-vue-preview.html",{loader:()=>X(()=>import("./markdown-vue-preview.html-DVCxBfN8.js"),[]),meta:{title:"Vue 组件预览"}}],["/docs/theme/multilingual.html",{loader:()=>X(()=>import("./multilingual.html-CpKzMjh6.js"),[]),meta:{title:"语言配置"}}],["/docs/theme/navbar.html",{loader:()=>X(()=>import("./navbar.html-CjQPilLc.js"),[]),meta:{title:"导航栏"}}],["/docs/theme/pages.html",{loader:()=>X(()=>import("./pages.html-H2DpSBjE.js"),[]),meta:{title:"注册页面"}}],["/docs/theme/password.html",{loader:()=>X(()=>import("./password.html-PBdpA106.js"),[]),meta:{title:"加密"}}],["/docs/theme/series.html",{loader:()=>X(()=>import("./series.html-CXLhg_cO.js"),[]),meta:{title:"系列"}}],["/docs/theme/set-vite-bundler.html",{loader:()=>X(()=>import("./set-vite-bundler.html-cDnPW8S9.js"),[]),meta:{title:"用户自定义配置打包"}}],["/docs/theme/social-links.html",{loader:()=>X(()=>import("./social-links.html-BfG67jsK.js"),[]),meta:{title:"社交地址"}}],["/docs/theme/source-dir.html",{loader:()=>X(()=>import("./source-dir.html-Bosviuji.js"),[]),meta:{title:"源文件文件夹"}}],["/en/docs/guide/architecture.html",{loader:()=>X(()=>import("./architecture.html-BCaPpAbu.js"),[]),meta:{title:"Architecture"}}],["/en/docs/guide/builtin-page.html",{loader:()=>X(()=>import("./builtin-page.html-9fKIvhr5.js"),[]),meta:{title:"Build-in Page"}}],["/en/docs/guide/bundler.html",{loader:()=>X(()=>import("./bundler.html-CCdA3SWB.js"),[]),meta:{title:"Bundler"}}],["/en/docs/guide/contribute.html",{loader:()=>X(()=>import("./contribute.html-CIk3n7wb.js"),[]),meta:{title:"Contribute"}}],["/en/docs/guide/custom-style.html",{loader:()=>X(()=>import("./custom-style.html-DrkP1mO_.js"),[]),meta:{title:"Custom Style"}}],["/en/docs/guide/folder-specification.html",{loader:()=>X(()=>import("./folder-specification.html-B2m7i80w.js"),[]),meta:{title:"Folder Specification"}}],["/en/docs/guide/getting-started.html",{loader:()=>X(()=>import("./getting-started.html-Dy-T6V-s.js"),[]),meta:{title:"Quick start"}}],["/en/docs/guide/gui-builder.html",{loader:()=>X(()=>import("./gui-builder.html-DO3ANopE.js"),[]),meta:{title:"Visual Building"}}],["/en/docs/guide/icon.html",{loader:()=>X(()=>import("./icon.html-HDZmWNTW.js"),[]),meta:{title:"Icon"}}],["/en/docs/guide/introduce.html",{loader:()=>X(()=>import("./introduce.html-oIdwQkpj.js"),[]),meta:{title:"Introduce"}}],["/en/docs/guide/package-manager.html",{loader:()=>X(()=>import("./package-manager.html-lIRU4Vxb.js"),[]),meta:{title:"Package Manager"}}],["/en/docs/guide/register-components.html",{loader:()=>X(()=>import("./register-components.html-A1mX0CAC.js"),[]),meta:{title:"Register Components"}}],["/en/docs/guide/register-layouts.html",{loader:()=>X(()=>import("./register-layouts.html-Bi1mLF3D.js"),[]),meta:{title:"Register Layouts"}}],["/en/docs/guide/style.html",{loader:()=>X(()=>import("./style.html-rk_P9ICx.js"),[]),meta:{title:"Style"}}],["/en/docs/others/donate.html",{loader:()=>X(()=>import("./donate.html-CBHea5qj.js"),__vite__mapDeps([2,1])),meta:{title:"donate"}}],["/en/docs/others/examples.html",{loader:()=>X(()=>import("./examples.html-CuKO9b3-.js"),[]),meta:{title:"Examples"}}],["/en/docs/plugins/bulletin-popover.html",{loader:()=>X(()=>import("./bulletin-popover.html-BDz0L59c.js"),[]),meta:{title:"Announcement plugin"}}],["/en/docs/plugins/comments.html",{loader:()=>X(()=>import("./comments.html-CHlP2j34.js"),[]),meta:{title:"Comment plugin"}}],["/en/docs/plugins/page.html",{loader:()=>X(()=>import("./page.html-DtBLPOpt.js"),[]),meta:{title:"Page Enhancement Plugin"}}],["/en/docs/plugins/vue-previews.html",{loader:()=>X(()=>import("./vue-previews.html-BcVB2tKm.js"),[]),meta:{title:"vue component preview plugin"}}],["/en/docs/theme/appearance.html",{loader:()=>X(()=>import("./appearance.html-BG0oVzbC.js"),[]),meta:{title:"Appearance"}}],["/en/docs/theme/auto-set-category.html",{loader:()=>X(()=>import("./auto-set-category.html-C9sIhBU_.js"),[]),meta:{title:"Auto Set Categories"}}],["/en/docs/theme/auto-set-series.html",{loader:()=>X(()=>import("./auto-set-series.html-BdJn0_XF.js"),[]),meta:{title:"Auto Set Series"}}],["/en/docs/theme/bulletin-popover.html",{loader:()=>X(()=>import("./bulletin-popover.html-CW_SxloM.js"),[]),meta:{title:"Announcement"}}],["/en/docs/theme/comments.html",{loader:()=>X(()=>import("./comments.html-BMjRqiNr.js"),[]),meta:{title:"Comment"}}],["/en/docs/theme/custom-container.html",{loader:()=>X(()=>import("./custom-container.html-Bu-ThnWm.js"),[]),meta:{title:"Custom Container"}}],["/en/docs/theme/custom-primary-color.html",{loader:()=>X(()=>import("./custom-primary-color.html-BB0kCe3e.js"),[]),meta:{title:"Customize Primary Color"}}],["/en/docs/theme/doc-search.html",{loader:()=>X(()=>import("./doc-search.html-t70ZNP6I.js"),[]),meta:{title:"Search Function"}}],["/en/docs/theme/frontmatter-home.html",{loader:()=>X(()=>import("./frontmatter-home.html-CtcJTxzi.js"),[]),meta:{title:"Home Page"}}],["/en/docs/theme/frontmatter-page.html",{loader:()=>X(()=>import("./frontmatter-page.html-DxWTdLM-.js"),[]),meta:{title:"Normal Pages"}}],["/en/docs/theme/git.html",{loader:()=>X(()=>import("./git.html-BUCbeieD.js"),[]),meta:{title:"About Git"}}],["/en/docs/theme/home.html",{loader:()=>X(()=>import("./home.html-D8x_G0Fa.js"),[]),meta:{title:"Home Page Path"}}],["/en/docs/theme/markdown-file-parse.html",{loader:()=>X(()=>import("./markdown-file-parse.html-CYm_l1z2.js"),[]),meta:{title:"Parse File To Code Group"}}],["/en/docs/theme/markdown-task.html",{loader:()=>X(()=>import("./markdown-task.html-DmP5pnta.js"),[]),meta:{title:"Task List"}}],["/en/docs/theme/markdown-vue-preview.html",{loader:()=>X(()=>import("./markdown-vue-preview.html-Bn09-3K2.js"),[]),meta:{title:"Vue Component Preview"}}],["/en/docs/theme/multilingual.html",{loader:()=>X(()=>import("./multilingual.html-C65ThILX.js"),[]),meta:{title:"I18n"}}],["/en/docs/theme/navbar.html",{loader:()=>X(()=>import("./navbar.html-V42svBwL.js"),[]),meta:{title:"Navbar"}}],["/en/docs/theme/pages.html",{loader:()=>X(()=>import("./pages.html-DP8VsrNd.js"),[]),meta:{title:"Register Pages"}}],["/en/docs/theme/password.html",{loader:()=>X(()=>import("./password.html-BZFoKfwQ.js"),[]),meta:{title:"Encryption"}}],["/en/docs/theme/series.html",{loader:()=>X(()=>import("./series.html-CpZBj08t.js"),[]),meta:{title:"Series"}}],["/en/docs/theme/set-vite-bundler.html",{loader:()=>X(()=>import("./set-vite-bundler.html-rpYeHcIF.js"),[]),meta:{title:"User-defined packaging configuration"}}],["/en/docs/theme/social-links.html",{loader:()=>X(()=>import("./social-links.html-DNtGl8qF.js"),[]),meta:{title:"Social Links"}}],["/en/docs/theme/source-dir.html",{loader:()=>X(()=>import("./source-dir.html-CNakCkdQ.js"),[]),meta:{title:"Source folder"}}],["/404.html",{loader:()=>X(()=>import("./404.html-B0xbZQjS.js"),[]),meta:{title:""}}]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fu=typeof document<"u";function X0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&X0(e.default)}const Ne=Object.assign;function Ei(e,t){const n={};for(const u in t){const r=t[u];n[u]=Wt(r)?r.map(e):e(r)}return n}const tr=()=>{},Wt=Array.isArray,Y0=/#/g,Km=/&/g,Zm=/\//g,Qm=/=/g,Xm=/\?/g,J0=/\+/g,Ym=/%5B/g,Jm=/%5D/g,ef=/%5E/g,eg=/%60/g,tf=/%7B/g,tg=/%7C/g,nf=/%7D/g,ng=/%20/g;function Ka(e){return encodeURI(""+e).replace(tg,"|").replace(Ym,"[").replace(Jm,"]")}function ug(e){return Ka(e).replace(tf,"{").replace(nf,"}").replace(ef,"^")}function pa(e){return Ka(e).replace(J0,"%2B").replace(ng,"+").replace(Y0,"%23").replace(Km,"%26").replace(eg,"`").replace(tf,"{").replace(nf,"}").replace(ef,"^")}function rg(e){return pa(e).replace(Qm,"%3D")}function og(e){return Ka(e).replace(Y0,"%23").replace(Xm,"%3F")}function ig(e){return e==null?"":og(e).replace(Zm,"%2F")}function fr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const ag=/\/$/,sg=e=>e.replace(ag,"");function Ai(e,t,n="/"){let u,r={},o="",i="";const a=t.indexOf("#");let s=t.indexOf("?");return a<s&&a>=0&&(s=-1),s>-1&&(u=t.slice(0,s),o=t.slice(s+1,a>-1?a:t.length),r=e(o)),a>-1&&(u=u||t.slice(0,a),i=t.slice(a,t.length)),u=fg(u??t,n),{fullPath:u+(o&&"?")+o+i,path:u,query:r,hash:fr(i)}}function lg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function dl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function cg(e,t,n){const u=t.matched.length-1,r=n.matched.length-1;return u>-1&&u===r&&Su(t.matched[u],n.matched[r])&&uf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Su(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function uf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!dg(e[n],t[n]))return!1;return!0}function dg(e,t){return Wt(e)?fl(e,t):Wt(t)?fl(t,e):e===t}function fl(e,t){return Wt(t)?e.length===t.length&&e.every((n,u)=>n===t[u]):e.length===1&&e[0]===t}function fg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),u=e.split("/"),r=u[u.length-1];(r===".."||r===".")&&u.push("");let o=n.length-1,i,a;for(i=0;i<u.length;i++)if(a=u[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+u.slice(i).join("/")}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var pr;(function(e){e.pop="pop",e.push="push"})(pr||(pr={}));var nr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(nr||(nr={}));function pg(e){if(!e)if(fu){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),sg(e)}const hg=/^[^#]+#/;function mg(e,t){return e.replace(hg,"#")+t}function gg(e,t){const n=document.documentElement.getBoundingClientRect(),u=e.getBoundingClientRect();return{behavior:t.behavior,left:u.left-n.left-(t.left||0),top:u.top-n.top-(t.top||0)}}const Qo=()=>({left:window.scrollX,top:window.scrollY});function bg(e){let t;if("el"in e){const n=e.el,u=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?u?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=gg(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function pl(e,t){return(history.state?history.state.position-t:-1)+e}const ha=new Map;function vg(e,t){ha.set(e,t)}function yg(e){const t=ha.get(e);return ha.delete(e),t}let xg=()=>location.protocol+"//"+location.host;function rf(e,t){const{pathname:n,search:u,hash:r}=t,o=e.indexOf("#");if(o>-1){let a=r.includes(e.slice(o))?e.slice(o).length:1,s=r.slice(a);return s[0]!=="/"&&(s="/"+s),dl(s,"")}return dl(n,e)+u+r}function _g(e,t,n,u){let r=[],o=[],i=null;const a=({state:f})=>{const p=rf(e,location),g=n.value,h=t.value;let y=0;if(f){if(n.value=p,t.value=f,i&&i===g){i=null;return}y=h?f.position-h.position:0}else u(p);r.forEach(C=>{C(n.value,g,{delta:y,type:pr.pop,direction:y?y>0?nr.forward:nr.back:nr.unknown})})};function s(){i=n.value}function l(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return o.push(p),p}function c(){const{history:f}=window;f.state&&f.replaceState(Ne({},f.state,{scroll:Qo()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:s,listen:l,destroy:d}}function hl(e,t,n,u=!1,r=!1){return{back:e,current:t,forward:n,replaced:u,position:window.history.length,scroll:r?Qo():null}}function wg(e){const{history:t,location:n}=window,u={value:rf(e,n)},r={value:t.state};r.value||o(u.value,{back:null,current:u.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(s,l,c){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+s:xg()+e+s;try{t[c?"replaceState":"pushState"](l,"",f),r.value=l}catch(p){console.error(p),n[c?"replace":"assign"](f)}}function i(s,l){const c=Ne({},t.state,hl(r.value.back,s,r.value.forward,!0),l,{position:r.value.position});o(s,c,!0),u.value=s}function a(s,l){const c=Ne({},r.value,t.state,{forward:s,scroll:Qo()});o(c.current,c,!0);const d=Ne({},hl(u.value,s,null),{position:c.position+1},l);o(s,d,!1),u.value=s}return{location:u,state:r,push:a,replace:i}}function kg(e){e=pg(e);const t=wg(e),n=_g(e,t.state,t.location,t.replace);function u(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=Ne({location:"",base:e,go:u,createHref:mg.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Cg(e){return typeof e=="string"||e&&typeof e=="object"}function of(e){return typeof e=="string"||typeof e=="symbol"}const af=Symbol("");var ml;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ml||(ml={}));function Tu(e,t){return Ne(new Error,{type:e,[af]:!0},t)}function sn(e,t){return e instanceof Error&&af in e&&(t==null||!!(e.type&t))}const gl="[^/]+?",Eg={sensitive:!1,strict:!1,start:!0,end:!0},Ag=/[.+*?^${}()[\]/\\]/g;function Sg(e,t){const n=Ne({},Eg,t),u=[];let r=n.start?"^":"";const o=[];for(const l of e){const c=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const f=l[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Ag,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:h,optional:y,regexp:C}=f;o.push({name:g,repeatable:h,optional:y});const b=C||gl;if(b!==gl){p+=10;try{new RegExp(`(${b})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+v.message)}}let m=h?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(m=y&&l.length<2?`(?:/${m})`:"/"+m),y&&(m+="?"),r+=m,p+=20,y&&(p+=-8),h&&(p+=-20),b===".*"&&(p+=-50)}c.push(p)}u.push(c)}if(n.strict&&n.end){const l=u.length-1;u[l][u[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(l){const c=l.match(i),d={};if(!c)return null;for(let f=1;f<c.length;f++){const p=c[f]||"",g=o[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function s(l){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const p of f)if(p.type===0)c+=p.value;else if(p.type===1){const{value:g,repeatable:h,optional:y}=p,C=g in l?l[g]:"";if(Wt(C)&&!h)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Wt(C)?C.join("/"):C;if(!b)if(y)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);c+=b}}return c||"/"}return{re:i,score:u,keys:o,parse:a,stringify:s}}function Tg(e,t){let n=0;for(;n<e.length&&n<t.length;){const u=t[n]-e[n];if(u)return u;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function sf(e,t){let n=0;const u=e.score,r=t.score;for(;n<u.length&&n<r.length;){const o=Tg(u[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-u.length)===1){if(bl(u))return 1;if(bl(r))return-1}return r.length-u.length}function bl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ig={type:0,value:""},Lg=/[a-zA-Z0-9_]/;function $g(e){if(!e)return[[]];if(e==="/")return[[Ig]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,u=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let a=0,s,l="",c="";function d(){l&&(n===0?o.push({type:0,value:l}):n===1||n===2||n===3?(o.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:c,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=s}for(;a<e.length;){if(s=e[a++],s==="\\"&&n!==2){u=n,n=4;continue}switch(n){case 0:s==="/"?(l&&d(),i()):s===":"?(d(),n=1):f();break;case 4:f(),n=u;break;case 1:s==="("?n=2:Lg.test(s)?f():(d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&a--);break;case 2:s===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+s:n=3:c+=s;break;case 3:d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),i(),r}function Dg(e,t,n){const u=Sg($g(e.path),n),r=Ne(u,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Pg(e,t){const n=[],u=new Map;t=_l({strict:!1,end:!0,sensitive:!1},t);function r(d){return u.get(d)}function o(d,f,p){const g=!p,h=yl(d);h.aliasOf=p&&p.record;const y=_l(t,d),C=[h];if("alias"in d){const v=typeof d.alias=="string"?[d.alias]:d.alias;for(const T of v)C.push(yl(Ne({},h,{components:p?p.record.components:h.components,path:T,aliasOf:p?p.record:h})))}let b,m;for(const v of C){const{path:T}=v;if(f&&T[0]!=="/"){const P=f.record.path,A=P[P.length-1]==="/"?"":"/";v.path=f.record.path+(T&&A+T)}if(b=Dg(v,f,y),p?p.alias.push(b):(m=m||b,m!==b&&m.alias.push(b),g&&d.name&&!xl(b)&&i(d.name)),lf(b)&&s(b),h.children){const P=h.children;for(let A=0;A<P.length;A++)o(P[A],b,p&&p.children[A])}p=p||b}return m?()=>{i(m)}:tr}function i(d){if(of(d)){const f=u.get(d);f&&(u.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&u.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function s(d){const f=Og(d,n);n.splice(f,0,d),d.record.name&&!xl(d)&&u.set(d.record.name,d)}function l(d,f){let p,g={},h,y;if("name"in d&&d.name){if(p=u.get(d.name),!p)throw Tu(1,{location:d});y=p.record.name,g=Ne(vl(f.params,p.keys.filter(m=>!m.optional).concat(p.parent?p.parent.keys.filter(m=>m.optional):[]).map(m=>m.name)),d.params&&vl(d.params,p.keys.map(m=>m.name))),h=p.stringify(g)}else if(d.path!=null)h=d.path,p=n.find(m=>m.re.test(h)),p&&(g=p.parse(h),y=p.record.name);else{if(p=f.name?u.get(f.name):n.find(m=>m.re.test(f.path)),!p)throw Tu(1,{location:d,currentLocation:f});y=p.record.name,g=Ne({},f.params,d.params),h=p.stringify(g)}const C=[];let b=p;for(;b;)C.unshift(b.record),b=b.parent;return{name:y,path:h,params:g,matched:C,meta:Fg(C)}}e.forEach(d=>o(d));function c(){n.length=0,u.clear()}return{addRoute:o,resolve:l,removeRoute:i,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function vl(e,t){const n={};for(const u of t)u in e&&(n[u]=e[u]);return n}function yl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Rg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Rg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const u in e.components)t[u]=typeof n=="object"?n[u]:n;return t}function xl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Fg(e){return e.reduce((t,n)=>Ne(t,n.meta),{})}function _l(e,t){const n={};for(const u in e)n[u]=u in t?t[u]:e[u];return n}function Og(e,t){let n=0,u=t.length;for(;n!==u;){const o=n+u>>1;sf(e,t[o])<0?u=o:n=o+1}const r=Mg(e);return r&&(u=t.lastIndexOf(r,u-1)),u}function Mg(e){let t=e;for(;t=t.parent;)if(lf(t)&&sf(e,t)===0)return t}function lf({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function zg(e){const t={};if(e===""||e==="?")return t;const u=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<u.length;++r){const o=u[r].replace(J0," "),i=o.indexOf("="),a=fr(i<0?o:o.slice(0,i)),s=i<0?null:fr(o.slice(i+1));if(a in t){let l=t[a];Wt(l)||(l=t[a]=[l]),l.push(s)}else t[a]=s}return t}function wl(e){let t="";for(let n in e){const u=e[n];if(n=rg(n),u==null){u!==void 0&&(t+=(t.length?"&":"")+n);continue}(Wt(u)?u.map(o=>o&&pa(o)):[u&&pa(u)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Bg(e){const t={};for(const n in e){const u=e[n];u!==void 0&&(t[n]=Wt(u)?u.map(r=>r==null?null:""+r):u==null?u:""+u)}return t}const Ng=Symbol(""),kl=Symbol(""),Xo=Symbol(""),Za=Symbol(""),ma=Symbol("");function Uu(){let e=[];function t(u){return e.push(u),()=>{const r=e.indexOf(u);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Sn(e,t,n,u,r,o=i=>i()){const i=u&&(u.enterCallbacks[r]=u.enterCallbacks[r]||[]);return()=>new Promise((a,s)=>{const l=f=>{f===!1?s(Tu(4,{from:n,to:t})):f instanceof Error?s(f):Cg(f)?s(Tu(2,{from:t,to:f})):(i&&u.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),a())},c=o(()=>e.call(u&&u.instances[r],t,n,l));let d=Promise.resolve(c);e.length<3&&(d=d.then(l)),d.catch(f=>s(f))})}function Si(e,t,n,u,r=o=>o()){const o=[];for(const i of e)for(const a in i.components){let s=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(X0(s)){const c=(s.__vccOpts||s)[t];c&&o.push(Sn(c,n,u,i,a,r))}else{let l=s();o.push(()=>l.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=Wm(c)?c.default:c;i.mods[a]=c,i.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&Sn(p,n,u,i,a,r)()}))}}return o}function Cl(e){const t=He(Xo),n=He(Za),u=B(()=>{const s=E(e.to);return t.resolve(s)}),r=B(()=>{const{matched:s}=u.value,{length:l}=s,c=s[l-1],d=n.matched;if(!c||!d.length)return-1;const f=d.findIndex(Su.bind(null,c));if(f>-1)return f;const p=El(s[l-2]);return l>1&&El(c)===p&&d[d.length-1].path!==p?d.findIndex(Su.bind(null,s[l-2])):f}),o=B(()=>r.value>-1&&Gg(n.params,u.value.params)),i=B(()=>r.value>-1&&r.value===n.matched.length-1&&uf(n.params,u.value.params));function a(s={}){if(Ug(s)){const l=t[E(e.replace)?"replace":"push"](E(e.to)).catch(tr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:u,href:B(()=>u.value.href),isActive:o,isExactActive:i,navigate:a}}function jg(e){return e.length===1?e[0]:e}const Hg=fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cl,setup(e,{slots:t}){const n=bn(Cl(e)),{options:u}=He(Xo),r=B(()=>({[Al(e.activeClass,u.linkActiveClass,"router-link-active")]:n.isActive,[Al(e.exactActiveClass,u.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&jg(t.default(n));return e.custom?o:Z("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),Vg=Hg;function Ug(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gg(e,t){for(const n in t){const u=t[n],r=e[n];if(typeof u=="string"){if(u!==r)return!1}else if(!Wt(r)||r.length!==u.length||u.some((o,i)=>o!==r[i]))return!1}return!0}function El(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Al=(e,t,n)=>e??t??n,qg=fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const u=He(ma),r=B(()=>e.route||u.value),o=He(kl,0),i=B(()=>{let l=E(o);const{matched:c}=r.value;let d;for(;(d=c[l])&&!d.components;)l++;return l}),a=B(()=>r.value.matched[i.value]);Ot(kl,B(()=>i.value+1)),Ot(Ng,a),Ot(ma,r);const s=Q();return Pe(()=>[s.value,a.value,e.name],([l,c,d],[f,p,g])=>{c&&(c.instances[d]=l,p&&p!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),l&&c&&(!p||!Su(c,p)||!f)&&(c.enterCallbacks[d]||[]).forEach(h=>h(l))},{flush:"post"}),()=>{const l=r.value,c=e.name,d=a.value,f=d&&d.components[c];if(!f)return Sl(n.default,{Component:f,route:l});const p=d.props[c],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,y=Z(f,Ne({},g,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[c]=null)},ref:s}));return Sl(n.default,{Component:y,route:l})||y}}});function Sl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wg=qg;function Kg(e){const t=Pg(e.routes,e),n=e.parseQuery||zg,u=e.stringifyQuery||wl,r=e.history,o=Uu(),i=Uu(),a=Uu(),s=ut(cn);let l=cn;fu&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ei.bind(null,H=>""+H),d=Ei.bind(null,ig),f=Ei.bind(null,fr);function p(H,ne){let ee,O;return of(H)?(ee=t.getRecordMatcher(H),O=ne):O=H,t.addRoute(O,ee)}function g(H){const ne=t.getRecordMatcher(H);ne&&t.removeRoute(ne)}function h(){return t.getRoutes().map(H=>H.record)}function y(H){return!!t.getRecordMatcher(H)}function C(H,ne){if(ne=Ne({},ne||s.value),typeof H=="string"){const _=Ai(n,H,ne.path),F=t.resolve({path:_.path},ne),G=r.createHref(_.fullPath);return Ne(_,F,{params:f(F.params),hash:fr(_.hash),redirectedFrom:void 0,href:G})}let ee;if(H.path!=null)ee=Ne({},H,{path:Ai(n,H.path,ne.path).path});else{const _=Ne({},H.params);for(const F in _)_[F]==null&&delete _[F];ee=Ne({},H,{params:d(_)}),ne.params=d(ne.params)}const O=t.resolve(ee,ne),z=H.hash||"";O.params=c(f(O.params));const Y=lg(u,Ne({},H,{hash:ug(z),path:O.path})),w=r.createHref(Y);return Ne({fullPath:Y,hash:z,query:u===wl?Bg(H.query):H.query||{}},O,{redirectedFrom:void 0,href:w})}function b(H){return typeof H=="string"?Ai(n,H,s.value.path):Ne({},H)}function m(H,ne){if(l!==H)return Tu(8,{from:ne,to:H})}function v(H){return A(H)}function T(H){return v(Ne(b(H),{replace:!0}))}function P(H){const ne=H.matched[H.matched.length-1];if(ne&&ne.redirect){const{redirect:ee}=ne;let O=typeof ee=="function"?ee(H):ee;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=b(O):{path:O},O.params={}),Ne({query:H.query,hash:H.hash,params:O.path!=null?{}:H.params},O)}}function A(H,ne){const ee=l=C(H),O=s.value,z=H.state,Y=H.force,w=H.replace===!0,_=P(ee);if(_)return A(Ne(b(_),{state:typeof _=="object"?Ne({},z,_.state):z,force:Y,replace:w}),ne||ee);const F=ee;F.redirectedFrom=ne;let G;return!Y&&cg(u,O,ee)&&(G=Tu(16,{to:F,from:O}),ve(O,O,!0,!1)),(G?Promise.resolve(G):D(F,O)).catch(j=>sn(j)?sn(j,2)?j:ce(j):q(j,F,O)).then(j=>{if(j){if(sn(j,2))return A(Ne({replace:w},b(j.to),{state:typeof j.to=="object"?Ne({},z,j.to.state):z,force:Y}),ne||F)}else j=I(F,O,!0,w,z);return N(F,O,j),j})}function k(H,ne){const ee=m(H,ne);return ee?Promise.reject(ee):Promise.resolve()}function L(H){const ne=Le.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(H):H()}function D(H,ne){let ee;const[O,z,Y]=Zg(H,ne);ee=Si(O.reverse(),"beforeRouteLeave",H,ne);for(const _ of O)_.leaveGuards.forEach(F=>{ee.push(Sn(F,H,ne))});const w=k.bind(null,H,ne);return ee.push(w),ye(ee).then(()=>{ee=[];for(const _ of o.list())ee.push(Sn(_,H,ne));return ee.push(w),ye(ee)}).then(()=>{ee=Si(z,"beforeRouteUpdate",H,ne);for(const _ of z)_.updateGuards.forEach(F=>{ee.push(Sn(F,H,ne))});return ee.push(w),ye(ee)}).then(()=>{ee=[];for(const _ of Y)if(_.beforeEnter)if(Wt(_.beforeEnter))for(const F of _.beforeEnter)ee.push(Sn(F,H,ne));else ee.push(Sn(_.beforeEnter,H,ne));return ee.push(w),ye(ee)}).then(()=>(H.matched.forEach(_=>_.enterCallbacks={}),ee=Si(Y,"beforeRouteEnter",H,ne,L),ee.push(w),ye(ee))).then(()=>{ee=[];for(const _ of i.list())ee.push(Sn(_,H,ne));return ee.push(w),ye(ee)}).catch(_=>sn(_,8)?_:Promise.reject(_))}function N(H,ne,ee){a.list().forEach(O=>L(()=>O(H,ne,ee)))}function I(H,ne,ee,O,z){const Y=m(H,ne);if(Y)return Y;const w=ne===cn,_=fu?history.state:{};ee&&(O||w?r.replace(H.fullPath,Ne({scroll:w&&_&&_.scroll},z)):r.push(H.fullPath,z)),s.value=H,ve(H,ne,ee,w),ce()}let R;function K(){R||(R=r.listen((H,ne,ee)=>{if(!be.listening)return;const O=C(H),z=P(O);if(z){A(Ne(z,{replace:!0,force:!0}),O).catch(tr);return}l=O;const Y=s.value;fu&&vg(pl(Y.fullPath,ee.delta),Qo()),D(O,Y).catch(w=>sn(w,12)?w:sn(w,2)?(A(Ne(b(w.to),{force:!0}),O).then(_=>{sn(_,20)&&!ee.delta&&ee.type===pr.pop&&r.go(-1,!1)}).catch(tr),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),q(w,O,Y))).then(w=>{w=w||I(O,Y,!1),w&&(ee.delta&&!sn(w,8)?r.go(-ee.delta,!1):ee.type===pr.pop&&sn(w,20)&&r.go(-1,!1)),N(O,Y,w)}).catch(tr)}))}let U=Uu(),M=Uu(),J;function q(H,ne,ee){ce(H);const O=M.list();return O.length?O.forEach(z=>z(H,ne,ee)):console.error(H),Promise.reject(H)}function ie(){return J&&s.value!==cn?Promise.resolve():new Promise((H,ne)=>{U.add([H,ne])})}function ce(H){return J||(J=!H,K(),U.list().forEach(([ne,ee])=>H?ee(H):ne()),U.reset()),H}function ve(H,ne,ee,O){const{scrollBehavior:z}=e;if(!fu||!z)return Promise.resolve();const Y=!ee&&yg(pl(H.fullPath,0))||(O||!ee)&&history.state&&history.state.scroll||null;return yn().then(()=>z(H,ne,Y)).then(w=>w&&bg(w)).catch(w=>q(w,H,ne))}const he=H=>r.go(H);let Ie;const Le=new Set,be={currentRoute:s,listening:!0,addRoute:p,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:h,resolve:C,options:e,push:v,replace:T,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:M.add,isReady:ie,install(H){const ne=this;H.component("RouterLink",Vg),H.component("RouterView",Wg),H.config.globalProperties.$router=ne,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>E(s)}),fu&&!Ie&&s.value===cn&&(Ie=!0,v(r.location).catch(z=>{}));const ee={};for(const z in cn)Object.defineProperty(ee,z,{get:()=>s.value[z],enumerable:!0});H.provide(Xo,ne),H.provide(Za,Kd(ee)),H.provide(ma,s);const O=H.unmount;Le.add(H),H.unmount=function(){Le.delete(H),Le.size<1&&(l=cn,R&&R(),R=null,s.value=cn,Ie=!1,J=!1),O()}}};function ye(H){return H.reduce((ne,ee)=>ne.then(()=>L(ee)),Promise.resolve())}return be}function Zg(e,t){const n=[],u=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(l=>Su(l,a))?u.push(a):n.push(a));const s=e.matched[i];s&&(t.matched.find(l=>Su(l,s))||r.push(s))}return[n,u,r]}function Lt(){return He(Xo)}function Je(e){return He(Za)}var Yo=Symbol(""),Et=()=>{const e=He(Yo);if(!e)throw new Error("useClientData() is called without provider.");return e},Qg=()=>Et().layouts,cf=()=>Et().pageComponent,Mn=()=>Et().pageData,$t=()=>Et().pageFrontmatter,df=()=>Et().pageHead,Jo=()=>Et().pageLang,ff=()=>Et().pageLayout,Xg=()=>Et().redirects,Dt=()=>Et().routeLocale,Yg=()=>Et().routePath,pf=()=>Et().routes,Dr=()=>Et().siteData,ei=()=>Et().siteLocaleData,fo=ut([]),hf=e=>{fo.value.push(e),Vt(()=>{fo.value=fo.value.filter(t=>t!==e)})},Qa=Symbol(""),Jg=()=>{const e=He(Qa);if(!e)throw new Error("useUpdateHead() is called without provider.");return e},ga=ut(Gm),vu=ut(qm),Xa=(e,t)=>{const n=Om(e,t);if(vu.value[n])return n;const u=encodeURI(n);if(vu.value[u])return u;const r=ga.value[n]||ga.value[u];return r||n},ti=(e,t)=>{const{pathname:n,hashAndQueries:u}=Z0(e),r=Xa(n,t),o=r+u;return vu.value[r]?{...vu.value[r],path:o,notFound:!1}:{...vu.value["/404.html"],path:o,notFound:!0}},mf=(e,t)=>{const{pathname:n,hashAndQueries:u}=Z0(e);return Xa(n,t)+u},e2=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},Ya=fe({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(e,{slots:t}){const n=Lt(),u=Je(),r=B(()=>e.to.startsWith("#")||e.to.startsWith("?")?e.to:`/${mf(e.to,u.path).substring(1)}`);return()=>Z("a",{class:["route-link",{[e.activeClass]:e.active}],href:r.value,onClick:(o={})=>{e2(o)&&n.push(e.to).catch()}},t.default())}}),t2=fe({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=Vh(e,"config"),u=Je(),r=Dr(),o=B(()=>K0(n.value.link)),i=B(()=>n.value.target||(o.value?"_blank":void 0)),a=B(()=>i.value==="_blank"),s=B(()=>!o.value&&!a.value),l=B(()=>n.value.rel||(a.value?"noopener noreferrer":null)),c=B(()=>n.value.ariaLabel??n.value.text),d=B(()=>{if(n.value.exact)return!1;const p=Object.keys(r.value.locales);return p.length?p.every(g=>g!==n.value.link):n.value.link!=="/"}),f=B(()=>s.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,"u")).test(u.path):d.value?u.path.startsWith(n.value.link):u.path===n.value.link:!1);return()=>{const{before:p,after:g,default:h}=t,y=(h==null?void 0:h(n.value))??[p==null?void 0:p(n.value),n.value.text,g==null?void 0:g(n.value)];return s.value?Z(Ya,{class:"auto-link",to:n.value.link,active:f.value,"aria-label":c.value},()=>y):Z("a",{class:"auto-link external-link",href:n.value.link,"aria-label":c.value,rel:l.value,target:i.value},y)}}}),gf=fe({name:"ClientOnly",setup(e,t){const n=Q(!1);return Fe(()=>{n.value=!0}),()=>{var u,r;return n.value?(r=(u=t.slots).default)==null?void 0:r.call(u):null}}}),Kr=e=>{fo.value.forEach(t=>t(e))},bf=fe({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const t=cf(),n=B(()=>{if(!e.path)return t.value;const r=ti(e.path);return vt(async()=>r.loader().then(({comp:o})=>o))}),u=$t();return Pe(u,()=>{Kr("updated")},{deep:!0,flush:"post"}),()=>Z(n.value,{onVnodeMounted:()=>{Kr("mounted")},onVnodeUpdated:()=>{Kr("updated")},onVnodeBeforeUnmount:()=>{Kr("beforeUnmount")}})}}),n2="Layout",u2="en-US",kn=bn({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageHead:(e,t,n)=>{const u=tn(t.description)?t.description:n.description,r=[...Array.isArray(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:u}]];return Hm(r)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||u2,resolvePageLayout:(e,t)=>{const n=tn(e.frontmatter.layout)?e.frontmatter.layout:n2;if(!t[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return t[n]},resolveRouteLocale:(e,t)=>Zo(e,decodeURI(t)),resolveSiteLocaleData:({base:e,locales:t,...n},u)=>{var r;return{...n,...t[u],head:[...((r=t[u])==null?void 0:r.head)??[],...n.head]}}}),At=(e={})=>e,Nt=e=>$r(e)?e:`/${qa(e)}`,r2=Object.defineProperty,o2=(e,t)=>{for(var n in t)r2(e,n,{get:t[n],enumerable:!0})},vf={};o2(vf,{COMPONENT_STATE_TYPE:()=>i2,INSPECTOR_ID:()=>a2,INSPECTOR_LABEL:()=>s2,INSPECTOR_NODES:()=>l2,INSPECTOR_STATE_SECTION_NAME:()=>c2,PLUGIN_ID:()=>yf,PLUGIN_LABEL:()=>Ja});var yf="org.vuejs.vuepress",Ja="VuePress",i2=Ja,a2=yf,s2=Ja,Tl={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},Il={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},Ll={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},$l={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},l2={[Tl.id]:Tl,[Il.id]:Il,[Ll.id]:Ll,[$l.id]:$l},c2="State";const d2=Object.freeze(Object.defineProperty({__proto__:null,AutoLink:t2,ClientOnly:gf,Content:bf,DEVTOOLS:vf,RouteLink:Ya,clientDataSymbol:Yo,defineClientConfig:At,onContentUpdated:hf,resolveRoute:ti,resolveRouteFullPath:mf,resolveRoutePath:Xa,resolvers:kn,updateHeadSymbol:Qa,useClientData:Et,useLayouts:Qg,usePageComponent:cf,usePageData:Mn,usePageFrontmatter:$t,usePageHead:df,usePageLang:Jo,usePageLayout:ff,useRedirects:Xg,useRoute:Je,useRouteLocale:Dt,useRoutePath:Yg,useRouter:Lt,useRoutes:pf,useSiteData:Dr,useSiteLocaleData:ei,useUpdateHead:Jg,withBase:Nt},Symbol.toStringTag,{value:"Module"}));function xf(e){return Ra()?(Pd(e),!0):!1}const Ti=new WeakMap,f2=(...e)=>{var t;const n=e[0],u=(t=Ru())==null?void 0:t.proxy;if(u==null&&!x0())throw new Error("injectLocal must be called in setup");return u&&Ti.has(u)&&n in Ti.get(u)?Ti.get(u)[n]:He(...e)},p2=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const h2=Object.prototype.toString,m2=e=>h2.call(e)==="[object Object]",Iu=()=>{};function _f(e,t){function n(...u){return new Promise((r,o)=>{Promise.resolve(e(()=>t.apply(this,u),{fn:t,thisArg:this,args:u})).then(r).catch(o)})}return n}function g2(e,t={}){let n,u,r=Iu;const o=s=>{clearTimeout(s),r(),r=Iu};let i;return s=>{const l=st(e),c=st(t.maxWait);return n&&o(n),l<=0||c!==void 0&&c<=0?(u&&(o(u),u=null),Promise.resolve(s())):new Promise((d,f)=>{r=t.rejectOnCancel?f:d,i=s,c&&!u&&(u=setTimeout(()=>{n&&o(n),u=null,d(i())},c)),n=setTimeout(()=>{u&&o(u),u=null,d(s())},l)})}}function b2(...e){let t=0,n,u=!0,r=Iu,o,i,a,s,l;!Xe(e[0])&&typeof e[0]=="object"?{delay:i,trailing:a=!0,leading:s=!0,rejectOnCancel:l=!1}=e[0]:[i,a=!0,s=!0,l=!1]=e;const c=()=>{n&&(clearTimeout(n),n=void 0,r(),r=Iu)};return f=>{const p=st(i),g=Date.now()-t,h=()=>o=f();return c(),p<=0?(t=Date.now(),h()):(g>p&&(s||!u)?(t=Date.now(),h()):a&&(o=new Promise((y,C)=>{r=l?C:y,n=setTimeout(()=>{t=Date.now(),u=!0,y(h()),c()},Math.max(0,p-g))})),!s&&!n&&(n=setTimeout(()=>u=!0,p)),u=!1,o)}}function Dl(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function po(e){return Array.isArray(e)?e:[e]}function v2(e){return Ru()}function wf(e,t=200,n={}){return _f(g2(t,n),e)}function y2(e,t=200,n=!1,u=!0,r=!1){return _f(b2(t,n,u,r),e)}function es(e,t=!0,n){v2()?Fe(e,n):t?e():yn(e)}function x2(e,t,n){return Pe(e,t,{...n,immediate:!0})}const ru=p2?window:void 0;function Dn(e){var t;const n=st(e);return(t=n==null?void 0:n.$el)!=null?t:n}function vn(...e){const t=[],n=()=>{t.forEach(a=>a()),t.length=0},u=(a,s,l,c)=>(a.addEventListener(s,l,c),()=>a.removeEventListener(s,l,c)),r=B(()=>{const a=po(st(e[0])).filter(s=>s!=null);return a.every(s=>typeof s!="string")?a:void 0}),o=x2(()=>{var a,s;return[(s=(a=r.value)==null?void 0:a.map(l=>Dn(l)))!=null?s:[ru].filter(l=>l!=null),po(st(r.value?e[1]:e[0])),po(E(r.value?e[2]:e[1])),st(r.value?e[3]:e[2])]},([a,s,l,c])=>{if(n(),!(a!=null&&a.length)||!(s!=null&&s.length)||!(l!=null&&l.length))return;const d=m2(c)?{...c}:c;t.push(...a.flatMap(f=>s.flatMap(p=>l.map(g=>u(f,p,g,d)))))},{flush:"post"}),i=()=>{o(),n()};return xf(n),i}function _2(){const e=ut(!1),t=Ru();return t&&Fe(()=>{e.value=!0},t),e}function kf(e){const t=_2();return B(()=>(t.value,!!e()))}const w2=Symbol("vueuse-ssr-width");function k2(){const e=x0()?f2(w2,null):null;return typeof e=="number"?e:void 0}function C2(e,t={}){const{window:n=ru,ssrWidth:u=k2()}=t,r=kf(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),o=ut(typeof u=="number"),i=ut(),a=ut(!1),s=l=>{a.value=l.matches};return P1(()=>{if(o.value){o.value=!r.value;const l=st(e).split(",");a.value=l.some(c=>{const d=c.includes("not all"),f=c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),p=c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let g=!!(f||p);return f&&g&&(g=u>=Dl(f[1])),p&&g&&(g=u<=Dl(p[1])),d?!g:g});return}r.value&&(i.value=n.matchMedia(st(e)),a.value=i.value.matches)}),vn(i,"change",s,{passive:!0}),B(()=>a.value)}function E2(e,t,n={}){const{window:u=ru,...r}=n;let o;const i=kf(()=>u&&"ResizeObserver"in u),a=()=>{o&&(o.disconnect(),o=void 0)},s=B(()=>{const d=st(e);return Array.isArray(d)?d.map(f=>Dn(f)):[Dn(d)]}),l=Pe(s,d=>{if(a(),i.value&&u){o=new ResizeObserver(t);for(const f of d)f&&o.observe(f,r)}},{immediate:!0,flush:"post"}),c=()=>{a(),l()};return xf(c),{isSupported:i,stop:c}}function A2(e,t={width:0,height:0},n={}){const{window:u=ru,box:r="content-box"}=n,o=B(()=>{var d,f;return(f=(d=Dn(e))==null?void 0:d.namespaceURI)==null?void 0:f.includes("svg")}),i=ut(t.width),a=ut(t.height),{stop:s}=E2(e,([d])=>{const f=r==="border-box"?d.borderBoxSize:r==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(u&&o.value){const p=Dn(e);if(p){const g=p.getBoundingClientRect();i.value=g.width,a.value=g.height}}else if(f){const p=po(f);i.value=p.reduce((g,{inlineSize:h})=>g+h,0),a.value=p.reduce((g,{blockSize:h})=>g+h,0)}else i.value=d.contentRect.width,a.value=d.contentRect.height},n);es(()=>{const d=Dn(e);d&&(i.value="offsetWidth"in d?d.offsetWidth:t.width,a.value="offsetHeight"in d?d.offsetHeight:t.height)});const l=Pe(()=>Dn(e),d=>{i.value=d?t.width:0,a.value=d?t.height:0});function c(){s(),l()}return{width:i,height:a,stop:c}}const Pl=1;function S2(e,t={}){const{throttle:n=0,idle:u=200,onStop:r=Iu,onScroll:o=Iu,offset:i={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:s="auto",window:l=ru,onError:c=A=>{console.error(A)}}=t,d=ut(0),f=ut(0),p=B({get(){return d.value},set(A){h(A,void 0)}}),g=B({get(){return f.value},set(A){h(void 0,A)}});function h(A,k){var L,D,N,I;if(!l)return;const R=st(e);if(!R)return;(N=R instanceof Document?l.document.body:R)==null||N.scrollTo({top:(L=st(k))!=null?L:g.value,left:(D=st(A))!=null?D:p.value,behavior:st(s)});const K=((I=R==null?void 0:R.document)==null?void 0:I.documentElement)||(R==null?void 0:R.documentElement)||R;p!=null&&(d.value=K.scrollLeft),g!=null&&(f.value=K.scrollTop)}const y=ut(!1),C=bn({left:!0,right:!1,top:!0,bottom:!1}),b=bn({left:!1,right:!1,top:!1,bottom:!1}),m=A=>{y.value&&(y.value=!1,b.left=!1,b.right=!1,b.top=!1,b.bottom=!1,r(A))},v=wf(m,n+u),T=A=>{var k;if(!l)return;const L=((k=A==null?void 0:A.document)==null?void 0:k.documentElement)||(A==null?void 0:A.documentElement)||Dn(A),{display:D,flexDirection:N,direction:I}=getComputedStyle(L),R=I==="rtl"?-1:1,K=L.scrollLeft;b.left=K<d.value,b.right=K>d.value;const U=Math.abs(K*R)<=(i.left||0),M=Math.abs(K*R)+L.clientWidth>=L.scrollWidth-(i.right||0)-Pl;D==="flex"&&N==="row-reverse"?(C.left=M,C.right=U):(C.left=U,C.right=M),d.value=K;let J=L.scrollTop;A===l.document&&!J&&(J=l.document.body.scrollTop),b.top=J<f.value,b.bottom=J>f.value;const q=Math.abs(J)<=(i.top||0),ie=Math.abs(J)+L.clientHeight>=L.scrollHeight-(i.bottom||0)-Pl;D==="flex"&&N==="column-reverse"?(C.top=ie,C.bottom=q):(C.top=q,C.bottom=ie),f.value=J},P=A=>{var k;if(!l)return;const L=(k=A.target.documentElement)!=null?k:A.target;T(L),y.value=!0,v(A),o(A)};return vn(e,"scroll",n?y2(P,n,!0,!1):P,a),es(()=>{try{const A=st(e);if(!A)return;T(A)}catch(A){c(A)}}),vn(e,"scrollend",m,a),{x:p,y:g,isScrolling:y,arrivedState:C,directions:b,measure(){const A=st(e);l&&A&&T(A)}}}function T2(e={}){const{window:t=ru,...n}=e;return S2(t,n)}function I2(e={}){const{window:t=ru,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:u=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:o=!0,type:i="inner"}=e,a=ut(n),s=ut(u),l=()=>{if(t)if(i==="outer")a.value=t.outerWidth,s.value=t.outerHeight;else if(i==="visual"&&t.visualViewport){const{width:d,height:f,scale:p}=t.visualViewport;a.value=Math.round(d*p),s.value=Math.round(f*p)}else o?(a.value=t.innerWidth,s.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight)};l(),es(l);const c={passive:!0};if(vn("resize",l,c),t&&i==="visual"&&t.visualViewport&&vn(t.visualViewport,"resize",l,c),r){const d=C2("(orientation: portrait)");Pe(d,()=>l())}return{width:a,height:s}}[...new Array(6)].map((e,t)=>`[vp-content] h${t+1}`).join(",");const L2=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,$2=(e,t)=>t.some(n=>{if(tn(n))return n===e.key;const{key:u,ctrl:r=!1,shift:o=!1,alt:i=!1}=n;return u===e.key&&r===e.ctrlKey&&o===e.shiftKey&&i===e.altKey}),ts=e=>{const t=Dt();return B(()=>st(e)[t.value]??{})},D2=(e,t)=>{vn("keydown",u=>{const r=st(e);r!=null&&r.length&&$2(u,r)&&!L2(u.target)&&(u.preventDefault(),t())})},P2=()=>{const e=pf();return B(()=>Object.keys(e.value))},R2=e=>typeof e<"u",F2=()=>{const e=$t(),t=Mn();return B(()=>{var n;return e.value.contributors===!1?[]:((n=t.value.git)==null?void 0:n.contributors)??[]})};var O2={"/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新："},"/en/":{contributors:"Contributors",changelog:"Changelog",timeOn:"on",viewChangelog:"View All Changelog",latestUpdateAt:"Last Updated:"}};const M2=O2,z2=()=>ts(M2),B2=({level:e=2,text:t,anchor:n})=>Z(`h${e||2}`,{id:n,tabindex:"-1"},Z("a",{href:`#${n}`,class:"header-anchor"},Z("span",t))),N2=({name:e,url:t,avatar:n})=>Z(t?"a":"span",{href:t,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[n?Z("img",{src:n,alt:e,class:"vp-contributor-avatar"}):null,Z("span",{class:"vp-contributor-name"},e)]),j2=fe({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(e){const t=F2(),n=z2();return()=>t.value.length?[Z(B2,{level:e.headerLevel,anchor:"doc-contributors",text:e.title||n.value.contributors}),Z("div",{class:"vp-contributors"},t.value.map(u=>Z(N2,u)))]:null}}),H2={enhance:({app:e})=>{e.component("GitContributors",j2)}},V2=Object.freeze(Object.defineProperty({__proto__:null,default:H2},Symbol.toStringTag,{value:"Module"})),U2=({selector:e='div[class*="language-"].has-collapsed-lines > .collapsed-lines'}={})=>{vn("click",t=>{const n=t.target;if(n.matches(e)){const u=n.parentElement;u!=null&&u.classList.toggle("collapsed")&&u.scrollIntoView({block:"center",behavior:"instant"})}})},G2={setup(){U2()}},q2=Object.freeze(Object.defineProperty({__proto__:null,default:G2},Symbol.toStringTag,{value:"Module"}));function Cf(){const e=Q([]),t=()=>{e.value.forEach(u=>{u.style.position="relative";const r=document.createElement("span");r.className="code-copy-btn",r.style.position="absolute",r.style.zIndex="20",r.style.top="4px",r.style.right="10px",r.style.display="none",r.style.padding="0 10px 0 10px",r.style.borderRadius="4px",r.style.cursor="pointer",r.innerHTML='<span class="copied">copied</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></g></svg>';const o=r.querySelector("svg");o.style.width="20px",o.style.verticalAlign="middle";const i=r.querySelector(".copied");i.style.verticalAlign="middle",i.style.fontSize="12px",i.style.display="none",i.style.marginRight="4px",K2(r),u.appendChild(r),u.addEventListener("mouseenter",()=>{r.style.display="block"}),u.addEventListener("mouseleave",()=>{r.style.display="none"})})};return{codeNodes:e,initCopyBtn:()=>{const u=document.querySelectorAll('div[class*="language-"]');e.value=u,t()}}}async function W2(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const u=document.getSelection(),r=u?u.rangeCount>0&&u.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),r&&(u.removeAllRanges(),u.addRange(r)),n&&n.focus()}}function K2(e){e.addEventListener("click",()=>{const t=e.parentElement;if(!t)return;const n=t.classList.contains("language-sh")||t.classList.contains("language-bash");let{innerText:u=""}=t;n&&(u=u.replace(/^ *\$ /gm,"")),W2(u).then(()=>{const r=e.querySelector(".copied");r.style.display="inline-block",setTimeout(()=>{r.style.display="none"},3e3)})})}async function Z2(){const{initCopyBtn:e}=Cf();Fe(()=>{setTimeout(()=>{e()},500)})}const Q2=At({setup(){Z2()}}),X2=Object.freeze(Object.defineProperty({__proto__:null,default:Q2},Symbol.toStringTag,{value:"Module"})),Y2=JSON.parse('{"locales":{"/":{"selectLanguageName":"简体中文","lastUpdatedText":"最后更新时间","navbar":[{"text":"首页","link":"/","icon":"IconHome"},{"text":"指南","link":"/docs/guide/introduce","icon":"IconCompass"},{"text":"参考","icon":"IconDocument","children":[{"text":"配置","children":[{"text":"Vuepress 配置","link":"https://v2.vuepress.vuejs.org/zh/reference/config.html"},{"text":"Frontmatter","link":"/docs/theme/frontmatter-home"},{"text":"主题配置","link":"/docs/theme/home"},{"text":"Markdown 扩展","link":"/docs/theme/custom-container"}]},{"text":"插件","children":[{"text":"page","link":"/docs/plugins/page"},{"text":"comments","link":"/docs/plugins/comments"},{"text":"vue-previews","link":"/docs/plugins/vue-previews"},{"text":"bulletin-popover","link":"/docs/plugins/bulletin-popover"}]}]},{"text":"版本","icon":"IconSubVolume","children":[{"text":"2.x(rc)","link":"https://vuepress-theme-reco.recoluan.com/"},{"text":"1.x","link":"http://v1.vuepress-reco.recoluan.com/views/1.x/"}]},{"text":"博客","link":"/posts","icon":"IconDocumentAttachment"},{"text":"案例","link":"/docs/others/examples","icon":"IconFire"},{"text":"留言板","link":"/docs/message-board","icon":"IconChat"}],"series":{"/docs/guide/":["introduce","getting-started","gui-builder","package-manager","custom-style","style","icon","bundler","builtin-page","folder-specification","register-components","register-layouts","contribute"],"/docs/theme/":[{"text":"Frontmatter","children":["frontmatter-home","frontmatter-page"]},{"text":"主题配置","children":[{"text":"Locale 配置","children":["home","source-dir","git","series","navbar","comments","bulletin-popover","password","appearance","social-links","pages","doc-search","auto-set-category","auto-set-series","custom-primary-color"]},{"text":"多语言","children":["multilingual"]}]},{"text":"Markdown 扩展","children":["custom-container","markdown-task","markdown-vue-preview","markdown-file-parse"]}],"/docs/plugins/":["page","comments","vue-previews","bulletin-popover"]},"commentConfig":{"type":"valine","options":{"appId":"jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz","appKey":"Js91M9DfM9vPwVaUj7xdkbxh","placeholder":"填写邮箱可以收到回复提醒哦！","verify":true,"recordIP":true,"hideComments":true}},"bulletin":{"body":[{"type":"title","content":"最新版本"},{"type":"text","content":"\\n      <ul>\\n        <li>vuepress：2.0.0-rc.19</li>\\n        <li>reco 主题：2.0.0-rc.26</li>\\n      </ul>","style":"font-size: 12px; color: #5D67E8;"},{"type":"title","content":"QQ 频道：3u8x6485s0"},{"type":"image","src":"/qq_channel.png"},{"type":"text","content":"<br /><div><b>周知：</b>原 3 个 QQ 群成员活跃状态差异较大，且分布较分散，现停止新人加群，为了方便大家的交流，请移步 QQ 频道。</div>","style":"font-size: 12px; color: #5D67E8;"},{"type":"hr"},{"type":"buttongroup","children":[{"text":"打赏","link":"/docs/others/donate.html"}]}]},"catalogTitle":"页面导航","tip":"提示","info":"信息","warning":"警告","danger":"危险","details":"详情","editLinkText":"编辑当前页面","notFound":"哇哦，没有发现这个页面！","backToHome":"返回首页"},"/en/":{"selectLanguageName":"English","navbar":[{"text":"Home","link":"/en/","icon":"IconHome"},{"text":"Guide","link":"/en/docs/guide/introduce","icon":"IconCompass"},{"text":"Reference","icon":"IconDocument","children":[{"text":"Configuration","children":[{"text":"Vuepress Config","link":"https://v2.vuepress.vuejs.org/reference/config.html"},{"text":"Frontmatter","link":"/en/docs/theme/frontmatter-home"},{"text":"Theme Configuration","link":"/en/docs/theme/home"},{"text":"Markdown Extension","link":"/en/docs/theme/custom-container"}]},{"text":"Plugins","children":[{"text":"page","link":"/en/docs/plugins/page"},{"text":"comments","link":"/en/docs/plugins/comments"},{"text":"vue-previews","link":"/en/docs/plugins/vue-previews"},{"text":"bulletin-popover","link":"/en/docs/plugins/bulletin-popover"}]}]},{"text":"Version","icon":"IconSubVolume","children":[{"text":"2.x(rc)","link":"https://vuepress-theme-reco.recoluan.com/en/"},{"text":"1.x","link":"http://v1.vuepress-reco.recoluan.com/en/views/1.x/"}]},{"text":"Examples","link":"/en/docs/others/examples","icon":"IconFire"},{"text":"Message board","link":"/en/docs/message-board","icon":"IconChat"}],"series":{"/en/docs/guide/":["introduce","getting-started","gui-builder","package-manager","custom-style","style","icon","bundler","builtin-page","folder-specification","register-components","register-layouts","contribute"],"/en/docs/theme/":[{"text":"Frontmatter","children":["frontmatter-home","frontmatter-page"]},{"text":"Theme Configuration","children":[{"text":"Locale Config","children":["home","source-dir","git","series","navbar","comments","bulletin-popover","password","appearance","social-links","pages","doc-search","auto-set-category","auto-set-series","custom-primary-color"]},{"text":"Multilingual","children":["multilingual"]}]},{"text":"Markdown Extension","children":["custom-container","markdown-task","markdown-vue-preview","markdown-file-parse"]}],"/en/docs/plugins/":["page","comments","vue-previews","bulletin-popover"]},"commentConfig":{"type":"valine","options":{"appId":"jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz","appKey":"Js91M9DfM9vPwVaUj7xdkbxh","placeholder":"Fill in the email can receive a reply reminder!","verify":true,"recordIP":true,"hideComments":true}},"bulletin":{"title":"Bulletin","body":[{"type":"title","content":"Latest Version"},{"type":"text","content":"\\n      <ul>\\n        <li>vuepress：2.0.0-rc.19</li>\\n        <li>theme reco：2.0.0-rc.26</li>\\n      </ul>","style":"font-size: 12px; color: #5D67E8;"},{"type":"title","content":"QQ Channel：3u8x6485s0"},{"type":"image","src":"/qq_channel.png"},{"type":"text","content":"<br /><div><b>Tip: </b>The original three QQ group members are quite different and scattered, so new people are stopped to join the group now. In order to facilitate your communication, please move to the QQ channel.</div>","style":"font-size: 12px; color: #5D67E8;"},{"type":"hr"},{"type":"buttongroup","children":[{"text":"Donate","link":"/docs/others/donate.html"}]}]}}},"colorMode":"dark","logo":"/logo.png","author":"reco_luan","docsRepo":"https://github.com/vuepress-reco/vuepress-theme-reco","docsBranch":"main","docsDir":"/docs","algolia":{"appId":"38R2J3MTQC","apiKey":"583d3caf699630b08a9bc2d12d599701","indexName":"v2-vuepress-reco-recoluan"},"socialLinks":[{"icon":"IconReco","link":"https://recoluan.com/"},{"icon":"IconRevili","link":"https://revili.recoluan.com"}]}'),J2=Q(Y2),Ef=()=>J2,Af=Symbol(""),eb=()=>{const e=He(Af);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},ns=(e,t)=>{const{locales:n,...u}=e;return{...u,...n==null?void 0:n[t]}};var tb={locales:{"/":{selectLanguageName:"简体中文",lastUpdatedText:"最后更新时间",navbar:[{text:"首页",link:"/",icon:"IconHome"},{text:"指南",link:"/docs/guide/introduce",icon:"IconCompass"},{text:"参考",icon:"IconDocument",children:[{text:"配置",children:[{text:"Vuepress 配置",link:"https://v2.vuepress.vuejs.org/zh/reference/config.html"},{text:"Frontmatter",link:"/docs/theme/frontmatter-home"},{text:"主题配置",link:"/docs/theme/home"},{text:"Markdown 扩展",link:"/docs/theme/custom-container"}]},{text:"插件",children:[{text:"page",link:"/docs/plugins/page"},{text:"comments",link:"/docs/plugins/comments"},{text:"vue-previews",link:"/docs/plugins/vue-previews"},{text:"bulletin-popover",link:"/docs/plugins/bulletin-popover"}]}]},{text:"版本",icon:"IconSubVolume",children:[{text:"2.x(rc)",link:"https://vuepress-theme-reco.recoluan.com/"},{text:"1.x",link:"http://v1.vuepress-reco.recoluan.com/views/1.x/"}]},{text:"博客",link:"/posts",icon:"IconDocumentAttachment"},{text:"案例",link:"/docs/others/examples",icon:"IconFire"},{text:"留言板",link:"/docs/message-board",icon:"IconChat"}],series:{"/docs/guide/":["introduce","getting-started","gui-builder","package-manager","custom-style","style","icon","bundler","builtin-page","folder-specification","register-components","register-layouts","contribute"],"/docs/theme/":[{text:"Frontmatter",children:["frontmatter-home","frontmatter-page"]},{text:"主题配置",children:[{text:"Locale 配置",children:["home","source-dir","git","series","navbar","comments","bulletin-popover","password","appearance","social-links","pages","doc-search","auto-set-category","auto-set-series","custom-primary-color"]},{text:"多语言",children:["multilingual"]}]},{text:"Markdown 扩展",children:["custom-container","markdown-task","markdown-vue-preview","markdown-file-parse"]}],"/docs/plugins/":["page","comments","vue-previews","bulletin-popover"]},commentConfig:{type:"valine",options:{appId:"jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz",appKey:"Js91M9DfM9vPwVaUj7xdkbxh",placeholder:"填写邮箱可以收到回复提醒哦！",verify:!0,recordIP:!0,hideComments:!0}},bulletin:{body:[{type:"title",content:"最新版本"},{type:"text",content:`
      <ul>
        <li>vuepress：2.0.0-rc.19</li>
        <li>reco 主题：2.0.0-rc.26</li>
      </ul>`,style:"font-size: 12px; color: #5D67E8;"},{type:"title",content:"QQ 频道：3u8x6485s0"},{type:"image",src:"/qq_channel.png"},{type:"text",content:"<br /><div><b>周知：</b>原 3 个 QQ 群成员活跃状态差异较大，且分布较分散，现停止新人加群，为了方便大家的交流，请移步 QQ 频道。</div>",style:"font-size: 12px; color: #5D67E8;"},{type:"hr"},{type:"buttongroup",children:[{text:"打赏",link:"/docs/others/donate.html"}]}]},catalogTitle:"页面导航",tip:"提示",info:"信息",warning:"警告",danger:"危险",details:"详情",editLinkText:"编辑当前页面",notFound:"哇哦，没有发现这个页面！",backToHome:"返回首页"},"/en/":{selectLanguageName:"English",navbar:[{text:"Home",link:"/en/",icon:"IconHome"},{text:"Guide",link:"/en/docs/guide/introduce",icon:"IconCompass"},{text:"Reference",icon:"IconDocument",children:[{text:"Configuration",children:[{text:"Vuepress Config",link:"https://v2.vuepress.vuejs.org/reference/config.html"},{text:"Frontmatter",link:"/en/docs/theme/frontmatter-home"},{text:"Theme Configuration",link:"/en/docs/theme/home"},{text:"Markdown Extension",link:"/en/docs/theme/custom-container"}]},{text:"Plugins",children:[{text:"page",link:"/en/docs/plugins/page"},{text:"comments",link:"/en/docs/plugins/comments"},{text:"vue-previews",link:"/en/docs/plugins/vue-previews"},{text:"bulletin-popover",link:"/en/docs/plugins/bulletin-popover"}]}]},{text:"Version",icon:"IconSubVolume",children:[{text:"2.x(rc)",link:"https://vuepress-theme-reco.recoluan.com/en/"},{text:"1.x",link:"http://v1.vuepress-reco.recoluan.com/en/views/1.x/"}]},{text:"Examples",link:"/en/docs/others/examples",icon:"IconFire"},{text:"Message board",link:"/en/docs/message-board",icon:"IconChat"}],series:{"/en/docs/guide/":["introduce","getting-started","gui-builder","package-manager","custom-style","style","icon","bundler","builtin-page","folder-specification","register-components","register-layouts","contribute"],"/en/docs/theme/":[{text:"Frontmatter",children:["frontmatter-home","frontmatter-page"]},{text:"Theme Configuration",children:[{text:"Locale Config",children:["home","source-dir","git","series","navbar","comments","bulletin-popover","password","appearance","social-links","pages","doc-search","auto-set-category","auto-set-series","custom-primary-color"]},{text:"Multilingual",children:["multilingual"]}]},{text:"Markdown Extension",children:["custom-container","markdown-task","markdown-vue-preview","markdown-file-parse"]}],"/en/docs/plugins/":["page","comments","vue-previews","bulletin-popover"]},commentConfig:{type:"valine",options:{appId:"jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz",appKey:"Js91M9DfM9vPwVaUj7xdkbxh",placeholder:"Fill in the email can receive a reply reminder!",verify:!0,recordIP:!0,hideComments:!0}},bulletin:{title:"Bulletin",body:[{type:"title",content:"Latest Version"},{type:"text",content:`
      <ul>
        <li>vuepress：2.0.0-rc.19</li>
        <li>theme reco：2.0.0-rc.26</li>
      </ul>`,style:"font-size: 12px; color: #5D67E8;"},{type:"title",content:"QQ Channel：3u8x6485s0"},{type:"image",src:"/qq_channel.png"},{type:"text",content:"<br /><div><b>Tip: </b>The original three QQ group members are quite different and scattered, so new people are stopped to join the group now. In order to facilitate your communication, please move to the QQ channel.</div>",style:"font-size: 12px; color: #5D67E8;"},{type:"hr"},{type:"buttongroup",children:[{text:"Donate",link:"/docs/others/donate.html"}]}]}}},colorMode:"dark",logo:"/logo.png",author:"reco_luan",docsRepo:"https://github.com/vuepress-reco/vuepress-theme-reco",docsBranch:"main",docsDir:"/docs",algolia:{appId:"38R2J3MTQC",apiKey:"583d3caf699630b08a9bc2d12d599701",indexName:"v2-vuepress-reco-recoluan"},socialLinks:[{icon:"IconReco",link:"https://recoluan.com/"},{icon:"IconRevili",link:"https://revili.recoluan.com"}]};function Fu(){const e=nb(),t=B(()=>{var u;switch((u=e.value.commentConfig)==null?void 0:u.type){case"valine":return"valine";case"waline":return"waline";case"giscus":return"giscus";default:return""}}),n=B(()=>{var u,r;return((r=(u=e.value)==null?void 0:u.commentConfig)==null?void 0:r.options)||{}});return{solution:t,options:n}}function nb(){const e=tb,t=Je(),n=B(()=>Zo(e.locales||{},(t==null?void 0:t.path)||"/"));return B(()=>ns(e,n.value))}const Rl=fe({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(e){Je();const{options:t}=gt(e);Fe(async()=>{const n=(await X(async()=>{const{default:r}=await import("./Valine.min-B6QJIEEs.js").then(o=>o.V);return{default:r}},[])).default;(async()=>{const r={el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname,...t.value};new n(r)})()})},render(){return Z("div",{class:"reco-valine-wrapper"},Z("div",{id:"valine"}))}});function hr(e){return Ra()?(Pd(e),!0):!1}function gn(e){return typeof e=="function"?e():E(e)}const To=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ub=Object.prototype.toString,rb=e=>ub.call(e)==="[object Object]",Io=()=>{};function Sf(e,t){function n(...u){return new Promise((r,o)=>{Promise.resolve(e(()=>t.apply(this,u),{fn:t,thisArg:this,args:u})).then(r).catch(o)})}return n}const Tf=e=>e();function ob(e,t={}){let n,u,r=Io;const o=a=>{clearTimeout(a),r(),r=Io};return a=>{const s=gn(e),l=gn(t.maxWait);return n&&o(n),s<=0||l!==void 0&&l<=0?(u&&(o(u),u=null),Promise.resolve(a())):new Promise((c,d)=>{r=t.rejectOnCancel?d:c,l&&!u&&(u=setTimeout(()=>{n&&o(n),u=null,c(a())},l)),n=setTimeout(()=>{u&&o(u),u=null,c(a())},s)})}}function ib(e=Tf){const t=Q(!0);function n(){t.value=!1}function u(){t.value=!0}const r=(...o)=>{t.value&&e(...o)};return{isActive:Pu(t),pause:n,resume:u,eventFilter:r}}function If(e){return Ru()}function Lf(e,t=200,n={}){return Sf(ob(t,n),e)}function ab(e,t,n={}){const{eventFilter:u=Tf,...r}=n;return Pe(e,Sf(u,t),r)}function sb(e,t,n={}){const{eventFilter:u,...r}=n,{eventFilter:o,pause:i,resume:a,isActive:s}=ib(u);return{stop:ab(e,t,{...r,eventFilter:o}),pause:i,resume:a,isActive:s}}function us(e,t=!0,n){If()?Fe(e,n):t?e():yn(e)}function lb(e,t){If()&&Vt(e,t)}function cb(e,t=1e3,n={}){const{immediate:u=!0,immediateCallback:r=!1}=n;let o=null;const i=Q(!1);function a(){o&&(clearInterval(o),o=null)}function s(){i.value=!1,a()}function l(){const c=gn(t);c<=0||(i.value=!0,r&&e(),a(),o=setInterval(e,c))}if(u&&To&&l(),Xe(t)||typeof t=="function"){const c=Pe(t,()=>{i.value&&To&&l()});hr(c)}return hr(s),{isActive:i,pause:s,resume:l}}function db(e){var t;const n=gn(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Lo=To?window:void 0,$f=To?window.document:void 0;function Fl(...e){let t,n,u,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,u,r]=e,t=Lo):[t,n,u,r]=e,!t)return Io;Array.isArray(n)||(n=[n]),Array.isArray(u)||(u=[u]);const o=[],i=()=>{o.forEach(c=>c()),o.length=0},a=(c,d,f,p)=>(c.addEventListener(d,f,p),()=>c.removeEventListener(d,f,p)),s=Pe(()=>[db(t),gn(r)],([c,d])=>{if(i(),!c)return;const f=rb(d)?{...d}:d;o.push(...n.flatMap(p=>u.map(g=>a(c,p,g,f))))},{immediate:!0,flush:"post"}),l=()=>{s(),i()};return hr(l),l}function fb(e,t={}){const{immediate:n=!0,fpsLimit:u=void 0,window:r=Lo}=t,o=Q(!1),i=u?1e3/u:null;let a=0,s=null;function l(f){if(!o.value||!r)return;a||(a=f);const p=f-a;if(i&&p<i){s=r.requestAnimationFrame(l);return}a=f,e({delta:p,timestamp:f}),s=r.requestAnimationFrame(l)}function c(){!o.value&&r&&(o.value=!0,a=0,s=r.requestAnimationFrame(l))}function d(){o.value=!1,s!=null&&r&&(r.cancelAnimationFrame(s),s=null)}return n&&c(),hr(d),{isActive:Pu(o),pause:d,resume:c}}const Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qr="__vueuse_ssr_handlers__",pb=hb();function hb(){return Qr in Zr||(Zr[Qr]=Zr[Qr]||{}),Zr[Qr]}function mb(e,t){return pb[e]||t}function gb(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const bb={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Ol="vueuse-storage";function jt(e,t,n,u={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:s=!0,mergeDefaults:l=!1,shallow:c,window:d=Lo,eventFilter:f,onError:p=D=>{console.error(D)},initOnMounted:g}=u,h=(c?ut:Q)(typeof t=="function"?t():t);if(!n)try{n=mb("getDefaultStorage",()=>{var D;return(D=Lo)==null?void 0:D.localStorage})()}catch(D){p(D)}if(!n)return h;const y=gn(t),C=gb(y),b=(r=u.serializer)!=null?r:bb[C],{pause:m,resume:v}=sb(h,()=>P(h.value),{flush:o,deep:i,eventFilter:f});d&&a&&us(()=>{Fl(d,"storage",k),Fl(d,Ol,L),g&&k()}),g||k();function T(D,N){d&&d.dispatchEvent(new CustomEvent(Ol,{detail:{key:e,oldValue:D,newValue:N,storageArea:n}}))}function P(D){try{const N=n.getItem(e);if(D==null)T(N,null),n.removeItem(e);else{const I=b.write(D);N!==I&&(n.setItem(e,I),T(N,I))}}catch(N){p(N)}}function A(D){const N=D?D.newValue:n.getItem(e);if(N==null)return s&&y!=null&&n.setItem(e,b.write(y)),y;if(!D&&l){const I=b.read(N);return typeof l=="function"?l(I,y):C==="object"&&!Array.isArray(I)?{...y,...I}:I}else return typeof N!="string"?N:b.read(N)}function k(D){if(!(D&&D.storageArea!==n)){if(D&&D.key==null){h.value=y;return}if(!(D&&D.key!==e)){m();try{(D==null?void 0:D.newValue)!==b.write(h.value)&&(h.value=A(D))}catch(N){p(N)}finally{D?yn(v):v()}}}}function L(D){k(D.detail)}return h}function Df(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,u=Q(new Date),r=()=>u.value=new Date,o=n==="requestAnimationFrame"?fb(r,{immediate:!0}):cb(r,n,{immediate:!0});return t?{now:u,...o}:u}function Pf(e,t=Io,n={}){const{immediate:u=!0,manual:r=!1,type:o="text/javascript",async:i=!0,crossOrigin:a,referrerPolicy:s,noModule:l,defer:c,document:d=$f,attrs:f={}}=n,p=Q(null);let g=null;const h=b=>new Promise((m,v)=>{const T=k=>(p.value=k,m(k),k);if(!d){m(!1);return}let P=!1,A=d.querySelector(`script[src="${gn(e)}"]`);A?A.hasAttribute("data-loaded")&&T(A):(A=d.createElement("script"),A.type=o,A.async=i,A.src=gn(e),c&&(A.defer=c),a&&(A.crossOrigin=a),l&&(A.noModule=l),s&&(A.referrerPolicy=s),Object.entries(f).forEach(([k,L])=>A==null?void 0:A.setAttribute(k,L)),P=!0),A.addEventListener("error",k=>v(k)),A.addEventListener("abort",k=>v(k)),A.addEventListener("load",()=>{A.setAttribute("data-loaded","true"),t(A),T(A)}),P&&(A=d.head.appendChild(A)),b||T(A)}),y=(b=!0)=>(g||(g=h(b)),g),C=()=>{if(!d)return;g=null,p.value&&(p.value=null);const b=d.querySelector(`script[src="${gn(e)}"]`);b&&d.head.removeChild(b)};return u&&!r&&us(y),r||lb(C),{scriptTag:p,load:y,unload:C}}let vb=0;function Rf(e,t={}){const n=Q(!1),{document:u=$f,immediate:r=!0,manual:o=!1,id:i=`vueuse_styletag_${++vb}`}=t,a=Q(e);let s=()=>{};const l=()=>{if(!u)return;const d=u.getElementById(i)||u.createElement("style");d.isConnected||(d.id=i,t.media&&(d.media=t.media),u.head.appendChild(d)),!n.value&&(s=Pe(a,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},c=()=>{!u||!n.value||(s(),u.head.removeChild(u.getElementById(i)),n.value=!1)};return r&&!o&&us(l),o||hr(c),{id:i,css:a,unload:c,load:l,isLoaded:Pu(n)}}var ur=new Map;function yb(e){var t=ur.get(e);t&&t.destroy()}function xb(e){var t=ur.get(e);t&&t.update()}var Ku=null;typeof window>"u"?((Ku=function(e){return e}).destroy=function(e){return e},Ku.update=function(e){return e}):((Ku=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(n){return function(u){if(u&&u.nodeName&&u.nodeName==="TEXTAREA"&&!ur.has(u)){var r,o=null,i=window.getComputedStyle(u),a=(r=u.value,function(){l({testForHeightReduction:r===""||!u.value.startsWith(r),restoreTextAlign:null}),r=u.value}),s=(function(d){u.removeEventListener("autosize:destroy",s),u.removeEventListener("autosize:update",c),u.removeEventListener("input",a),window.removeEventListener("resize",c),Object.keys(d).forEach(function(f){return u.style[f]=d[f]}),ur.delete(u)}).bind(u,{height:u.style.height,resize:u.style.resize,textAlign:u.style.textAlign,overflowY:u.style.overflowY,overflowX:u.style.overflowX,wordWrap:u.style.wordWrap});u.addEventListener("autosize:destroy",s),u.addEventListener("autosize:update",c),u.addEventListener("input",a),window.addEventListener("resize",c),u.style.overflowX="hidden",u.style.wordWrap="break-word",ur.set(u,{destroy:s,update:c}),c()}function l(d){var f,p,g=d.restoreTextAlign,h=g===void 0?null:g,y=d.testForHeightReduction,C=y===void 0||y,b=i.overflowY;if(u.scrollHeight!==0&&(i.resize==="vertical"?u.style.resize="none":i.resize==="both"&&(u.style.resize="horizontal"),C&&(f=function(v){for(var T=[];v&&v.parentNode&&v.parentNode instanceof Element;)v.parentNode.scrollTop&&T.push([v.parentNode,v.parentNode.scrollTop]),v=v.parentNode;return function(){return T.forEach(function(P){var A=P[0],k=P[1];A.style.scrollBehavior="auto",A.scrollTop=k,A.style.scrollBehavior=null})}}(u),u.style.height=""),p=i.boxSizing==="content-box"?u.scrollHeight-(parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)):u.scrollHeight+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),i.maxHeight!=="none"&&p>parseFloat(i.maxHeight)?(i.overflowY==="hidden"&&(u.style.overflow="scroll"),p=parseFloat(i.maxHeight)):i.overflowY!=="hidden"&&(u.style.overflow="hidden"),u.style.height=p+"px",h&&(u.style.textAlign=h),f&&f(),o!==p&&(u.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),o=p),b!==i.overflow&&!h)){var m=i.textAlign;i.overflow==="hidden"&&(u.style.textAlign=m==="start"?"end":"start"),l({restoreTextAlign:m,testForHeightReduction:!0})}}function c(){l({testForHeightReduction:!0,restoreTextAlign:null})}}(n)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],yb),e},Ku.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],xb),e});var $o=Ku;function Ff(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let ou=Ff();function _b(e){ou=e}const Of=/[&<>"']/,wb=new RegExp(Of.source,"g"),Mf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,kb=new RegExp(Mf.source,"g"),Cb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ml=e=>Cb[e];function ft(e,t){if(t){if(Of.test(e))return e.replace(wb,Ml)}else if(Mf.test(e))return e.replace(kb,Ml);return e}const Eb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function zf(e){return e.replace(Eb,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Ab=/(^|[^\[])\^/g;function Ge(e,t){e=typeof e=="string"?e:e.source,t=t||"";const n={replace:(u,r)=>(r=r.source||r,r=r.replace(Ab,"$1"),e=e.replace(u,r),n),getRegex:()=>new RegExp(e,t)};return n}const Sb=/[^\w:]/g,Tb=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function zl(e,t,n){if(e){let u;try{u=decodeURIComponent(zf(n)).replace(Sb,"").toLowerCase()}catch{return null}if(u.indexOf("javascript:")===0||u.indexOf("vbscript:")===0||u.indexOf("data:")===0)return null}t&&!Tb.test(n)&&(n=Db(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Xr={},Ib=/^[^:]+:\/*[^/]*$/,Lb=/^([^:]+:)[\s\S]*$/,$b=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Db(e,t){Xr[" "+e]||(Ib.test(e)?Xr[" "+e]=e+"/":Xr[" "+e]=ho(e,"/",!0)),e=Xr[" "+e];const n=e.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:e.replace(Lb,"$1")+t:t.charAt(0)==="/"?n?t:e.replace($b,"$1")+t:e+t}const Do={exec:function(){}};function Bl(e,t){const n=e.replace(/\|/g,(o,i,a)=>{let s=!1,l=i;for(;--l>=0&&a[l]==="\\";)s=!s;return s?"|":" |"}),u=n.split(/ \|/);let r=0;if(u[0].trim()||u.shift(),u.length>0&&!u[u.length-1].trim()&&u.pop(),u.length>t)u.splice(t);else for(;u.length<t;)u.push("");for(;r<u.length;r++)u[r]=u[r].trim().replace(/\\\|/g,"|");return u}function ho(e,t,n){const u=e.length;if(u===0)return"";let r=0;for(;r<u;){const o=e.charAt(u-r-1);if(o===t&&!n)r++;else if(o!==t&&n)r++;else break}return e.slice(0,u-r)}function Pb(e,t){if(e.indexOf(t[1])===-1)return-1;const n=e.length;let u=0,r=0;for(;r<n;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])u++;else if(e[r]===t[1]&&(u--,u<0))return r;return-1}function Rb(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Nl(e,t){if(t<1)return"";let n="";for(;t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function jl(e,t,n,u){const r=t.href,o=t.title?ft(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){u.state.inLink=!0;const a={type:"link",raw:n,href:r,title:o,text:i,tokens:u.inlineTokens(i)};return u.state.inLink=!1,a}return{type:"image",raw:n,href:r,title:o,text:ft(i)}}function Fb(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const u=n[1];return t.split(`
`).map(r=>{const o=r.match(/^\s+/);if(o===null)return r;const[i]=o;return i.length>=u.length?r.slice(u.length):r}).join(`
`)}class rs{constructor(t){this.options=t||ou}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const u=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?u:ho(u,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const u=n[0],r=Fb(u,n[3]||"");return{type:"code",raw:u,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:r}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let u=n[2].trim();if(/#$/.test(u)){const r=ho(u,"#");(this.options.pedantic||!r||/ $/.test(r))&&(u=r.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:u,tokens:this.lexer.inline(u)}}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const u=n[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const o=this.lexer.blockTokens(u);return this.lexer.state.top=r,{type:"blockquote",raw:n[0],tokens:o,text:u}}}list(t){let n=this.rules.block.list.exec(t);if(n){let u,r,o,i,a,s,l,c,d,f,p,g,h=n[1].trim();const y=h.length>1,C={type:"list",raw:"",ordered:y,start:y?+h.slice(0,-1):"",loose:!1,items:[]};h=y?`\\d{1,9}\\${h.slice(-1)}`:`\\${h}`,this.options.pedantic&&(h=y?h:"[*+-]");const b=new RegExp(`^( {0,3}${h})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(g=!1,!(!(n=b.exec(t))||this.rules.block.hr.test(t)));){if(u=n[0],t=t.substring(u.length),c=n[2].split(`
`,1)[0].replace(/^\t+/,v=>" ".repeat(3*v.length)),d=t.split(`
`,1)[0],this.options.pedantic?(i=2,p=c.trimLeft()):(i=n[2].search(/[^ ]/),i=i>4?1:i,p=c.slice(i),i+=n[1].length),s=!1,!c&&/^ *$/.test(d)&&(u+=d+`
`,t=t.substring(d.length+1),g=!0),!g){const v=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),T=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),P=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),A=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;t&&(f=t.split(`
`,1)[0],d=f,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(P.test(d)||A.test(d)||v.test(d)||T.test(t)));){if(d.search(/[^ ]/)>=i||!d.trim())p+=`
`+d.slice(i);else{if(s||c.search(/[^ ]/)>=4||P.test(c)||A.test(c)||T.test(c))break;p+=`
`+d}!s&&!d.trim()&&(s=!0),u+=f+`
`,t=t.substring(f.length+1),c=d.slice(i)}}C.loose||(l?C.loose=!0:/\n *\n *$/.test(u)&&(l=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(p),r&&(o=r[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),C.items.push({type:"list_item",raw:u,task:!!r,checked:o,loose:!1,text:p}),C.raw+=u}C.items[C.items.length-1].raw=u.trimRight(),C.items[C.items.length-1].text=p.trimRight(),C.raw=C.raw.trimRight();const m=C.items.length;for(a=0;a<m;a++)if(this.lexer.state.top=!1,C.items[a].tokens=this.lexer.blockTokens(C.items[a].text,[]),!C.loose){const v=C.items[a].tokens.filter(P=>P.type==="space"),T=v.length>0&&v.some(P=>/\n.*\n/.test(P.raw));C.loose=T}if(C.loose)for(a=0;a<m;a++)C.items[a].loose=!0;return C}}html(t){const n=this.rules.block.html.exec(t);if(n){const u={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(n[0]):ft(n[0]);u.type="paragraph",u.text=r,u.tokens=this.lexer.inline(r)}return u}}def(t){const n=this.rules.block.def.exec(t);if(n){const u=n[1].toLowerCase().replace(/\s+/g," "),r=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:u,raw:n[0],href:r,title:o}}}table(t){const n=this.rules.block.table.exec(t);if(n){const u={type:"table",header:Bl(n[1]).map(r=>({text:r})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(u.header.length===u.align.length){u.raw=n[0];let r=u.align.length,o,i,a,s;for(o=0;o<r;o++)/^ *-+: *$/.test(u.align[o])?u.align[o]="right":/^ *:-+: *$/.test(u.align[o])?u.align[o]="center":/^ *:-+ *$/.test(u.align[o])?u.align[o]="left":u.align[o]=null;for(r=u.rows.length,o=0;o<r;o++)u.rows[o]=Bl(u.rows[o],u.header.length).map(l=>({text:l}));for(r=u.header.length,i=0;i<r;i++)u.header[i].tokens=this.lexer.inline(u.header[i].text);for(r=u.rows.length,i=0;i<r;i++)for(s=u.rows[i],a=0;a<s.length;a++)s[a].tokens=this.lexer.inline(s[a].text);return u}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const u=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:u,tokens:this.lexer.inline(u)}}}text(t){const n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:ft(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):ft(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const u=n[2].trim();if(!this.options.pedantic&&/^</.test(u)){if(!/>$/.test(u))return;const i=ho(u.slice(0,-1),"\\");if((u.length-i.length)%2===0)return}else{const i=Pb(n[2],"()");if(i>-1){const s=(n[0].indexOf("!")===0?5:4)+n[1].length+i;n[2]=n[2].substring(0,i),n[0]=n[0].substring(0,s).trim(),n[3]=""}}let r=n[2],o="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);i&&(r=i[1],o=i[3])}else o=n[3]?n[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(u)?r=r.slice(1):r=r.slice(1,-1)),jl(n,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let u;if((u=this.rules.inline.reflink.exec(t))||(u=this.rules.inline.nolink.exec(t))){let r=(u[2]||u[1]).replace(/\s+/g," ");if(r=n[r.toLowerCase()],!r){const o=u[0].charAt(0);return{type:"text",raw:o,text:o}}return jl(u,r,u[0],this.lexer)}}emStrong(t,n,u=""){let r=this.rules.inline.emStrong.lDelim.exec(t);if(!r||r[3]&&u.match(/[\p{L}\p{N}]/u))return;const o=r[1]||r[2]||"";if(!o||o&&(u===""||this.rules.inline.punctuation.exec(u))){const i=r[0].length-1;let a,s,l=i,c=0;const d=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,n=n.slice(-1*t.length+i);(r=d.exec(n))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(s=a.length,r[3]||r[4]){l+=s;continue}else if((r[5]||r[6])&&i%3&&!((i+s)%3)){c+=s;continue}if(l-=s,l>0)continue;s=Math.min(s,s+l+c);const f=t.slice(0,i+r.index+(r[0].length-a.length)+s);if(Math.min(i,s)%2){const g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}const p=f.slice(2,-2);return{type:"strong",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let u=n[2].replace(/\n/g," ");const r=/[^ ]/.test(u),o=/^ /.test(u)&&/ $/.test(u);return r&&o&&(u=u.substring(1,u.length-1)),u=ft(u,!0),{type:"codespan",raw:n[0],text:u}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t,n){const u=this.rules.inline.autolink.exec(t);if(u){let r,o;return u[2]==="@"?(r=ft(this.options.mangle?n(u[1]):u[1]),o="mailto:"+r):(r=ft(u[1]),o=r),{type:"link",raw:u[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(t,n){let u;if(u=this.rules.inline.url.exec(t)){let r,o;if(u[2]==="@")r=ft(this.options.mangle?n(u[0]):u[0]),o="mailto:"+r;else{let i;do i=u[0],u[0]=this.rules.inline._backpedal.exec(u[0])[0];while(i!==u[0]);r=ft(u[0]),u[1]==="www."?o="http://"+u[0]:o=u[0]}return{type:"link",raw:u[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t,n){const u=this.rules.inline.text.exec(t);if(u){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(u[0]):ft(u[0]):u[0]:r=ft(this.options.smartypants?n(u[0]):u[0]),{type:"text",raw:u[0],text:r}}}}const Ae={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Do,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};Ae._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;Ae._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;Ae.def=Ge(Ae.def).replace("label",Ae._label).replace("title",Ae._title).getRegex();Ae.bullet=/(?:[*+-]|\d{1,9}[.)])/;Ae.listItemStart=Ge(/^( *)(bull) */).replace("bull",Ae.bullet).getRegex();Ae.list=Ge(Ae.list).replace(/bull/g,Ae.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Ae.def.source+")").getRegex();Ae._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";Ae._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;Ae.html=Ge(Ae.html,"i").replace("comment",Ae._comment).replace("tag",Ae._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();Ae.paragraph=Ge(Ae._paragraph).replace("hr",Ae.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ae._tag).getRegex();Ae.blockquote=Ge(Ae.blockquote).replace("paragraph",Ae.paragraph).getRegex();Ae.normal={...Ae};Ae.gfm={...Ae.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};Ae.gfm.table=Ge(Ae.gfm.table).replace("hr",Ae.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ae._tag).getRegex();Ae.gfm.paragraph=Ge(Ae._paragraph).replace("hr",Ae.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Ae.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ae._tag).getRegex();Ae.pedantic={...Ae.normal,html:Ge(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ae._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Do,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ge(Ae.normal._paragraph).replace("hr",Ae.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ae.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const ge={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Do,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Do,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};ge._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";ge.punctuation=Ge(ge.punctuation).replace(/punctuation/g,ge._punctuation).getRegex();ge.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;ge.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;ge._comment=Ge(Ae._comment).replace("(?:-->|$)","-->").getRegex();ge.emStrong.lDelim=Ge(ge.emStrong.lDelim).replace(/punct/g,ge._punctuation).getRegex();ge.emStrong.rDelimAst=Ge(ge.emStrong.rDelimAst,"g").replace(/punct/g,ge._punctuation).getRegex();ge.emStrong.rDelimUnd=Ge(ge.emStrong.rDelimUnd,"g").replace(/punct/g,ge._punctuation).getRegex();ge._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;ge._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;ge._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;ge.autolink=Ge(ge.autolink).replace("scheme",ge._scheme).replace("email",ge._email).getRegex();ge._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;ge.tag=Ge(ge.tag).replace("comment",ge._comment).replace("attribute",ge._attribute).getRegex();ge._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;ge._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;ge._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;ge.link=Ge(ge.link).replace("label",ge._label).replace("href",ge._href).replace("title",ge._title).getRegex();ge.reflink=Ge(ge.reflink).replace("label",ge._label).replace("ref",Ae._label).getRegex();ge.nolink=Ge(ge.nolink).replace("ref",Ae._label).getRegex();ge.reflinkSearch=Ge(ge.reflinkSearch,"g").replace("reflink",ge.reflink).replace("nolink",ge.nolink).getRegex();ge.normal={...ge};ge.pedantic={...ge.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ge(/^!?\[(label)\]\((.*?)\)/).replace("label",ge._label).getRegex(),reflink:Ge(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ge._label).getRegex()};ge.gfm={...ge.normal,escape:Ge(ge.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};ge.gfm.url=Ge(ge.gfm.url,"i").replace("email",ge.gfm._extended_email).getRegex();ge.breaks={...ge.gfm,br:Ge(ge.br).replace("{2,}","*").getRegex(),text:Ge(ge.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Ob(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Hl(e){let t="",n,u;const r=e.length;for(n=0;n<r;n++)u=e.charCodeAt(n),Math.random()>.5&&(u="x"+u.toString(16)),t+="&#"+u+";";return t}class zn{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||ou,this.options.tokenizer=this.options.tokenizer||new rs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ae.normal,inline:ge.normal};this.options.pedantic?(n.block=Ae.pedantic,n.inline=ge.pedantic):this.options.gfm&&(n.block=Ae.gfm,this.options.breaks?n.inline=ge.breaks:n.inline=ge.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ae,inline:ge}}static lex(t,n){return new zn(n).lex(t)}static lexInline(t,n){return new zn(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(a,s,l)=>s+"    ".repeat(l.length));let u,r,o,i;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(u=a.call({lexer:this},t,n))?(t=t.substring(u.raw.length),n.push(u),!0):!1))){if(u=this.tokenizer.space(t)){t=t.substring(u.raw.length),u.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(u);continue}if(u=this.tokenizer.code(t)){t=t.substring(u.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+u.raw,r.text+=`
`+u.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(u);continue}if(u=this.tokenizer.fences(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.heading(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.hr(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.blockquote(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.list(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.html(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.def(t)){t=t.substring(u.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+u.raw,r.text+=`
`+u.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title});continue}if(u=this.tokenizer.table(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.lheading(t)){t=t.substring(u.raw.length),n.push(u);continue}if(o=t,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const s=t.slice(1);let l;this.options.extensions.startBlock.forEach(function(c){l=c.call({lexer:this},s),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(o=t.substring(0,a+1))}if(this.state.top&&(u=this.tokenizer.paragraph(o))){r=n[n.length-1],i&&r.type==="paragraph"?(r.raw+=`
`+u.raw,r.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(u),i=o.length!==t.length,t=t.substring(u.raw.length);continue}if(u=this.tokenizer.text(t)){t=t.substring(u.raw.length),r=n[n.length-1],r&&r.type==="text"?(r.raw+=`
`+u.raw,r.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(u);continue}if(t){const a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let u,r,o,i=t,a,s,l;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,a.index)+"["+Nl("a",a[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,a.index)+"["+Nl("a",a[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(i))!=null;)i=i.slice(0,a.index+a[0].length-2)+"++"+i.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(s||(l=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(u=c.call({lexer:this},t,n))?(t=t.substring(u.raw.length),n.push(u),!0):!1))){if(u=this.tokenizer.escape(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.tag(t)){t=t.substring(u.raw.length),r=n[n.length-1],r&&u.type==="text"&&r.type==="text"?(r.raw+=u.raw,r.text+=u.text):n.push(u);continue}if(u=this.tokenizer.link(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(u.raw.length),r=n[n.length-1],r&&u.type==="text"&&r.type==="text"?(r.raw+=u.raw,r.text+=u.text):n.push(u);continue}if(u=this.tokenizer.emStrong(t,i,l)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.codespan(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.br(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.del(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.autolink(t,Hl)){t=t.substring(u.raw.length),n.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(t,Hl))){t=t.substring(u.raw.length),n.push(u);continue}if(o=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const d=t.slice(1);let f;this.options.extensions.startInline.forEach(function(p){f=p.call({lexer:this},d),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(o=t.substring(0,c+1))}if(u=this.tokenizer.inlineText(o,Ob)){t=t.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(l=u.raw.slice(-1)),s=!0,r=n[n.length-1],r&&r.type==="text"?(r.raw+=u.raw,r.text+=u.text):n.push(u);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return n}}let os=class{constructor(t){this.options=t||ou}code(t,n,u){const r=(n||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(t,r);o!=null&&o!==t&&(u=!0,t=o)}return t=t.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+ft(r)+'">'+(u?t:ft(t,!0))+`</code></pre>
`:"<pre><code>"+(u?t:ft(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,n,u,r){if(this.options.headerIds){const o=this.options.headerPrefix+r.slug(u);return`<h${n} id="${o}">${t}</h${n}>
`}return`<h${n}>${t}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,u){const r=n?"ol":"ul",o=n&&u!==1?' start="'+u+'"':"";return"<"+r+o+`>
`+t+"</"+r+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,n){const u=n.header?"th":"td";return(n.align?`<${u} align="${n.align}">`:`<${u}>`)+t+`</${u}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,n,u){if(t=zl(this.options.sanitize,this.options.baseUrl,t),t===null)return u;let r='<a href="'+t+'"';return n&&(r+=' title="'+n+'"'),r+=">"+u+"</a>",r}image(t,n,u){if(t=zl(this.options.sanitize,this.options.baseUrl,t),t===null)return u;let r=`<img src="${t}" alt="${u}"`;return n&&(r+=` title="${n}"`),r+=this.options.xhtml?"/>":">",r}text(t){return t}};class Bf{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,u){return""+u}image(t,n,u){return""+u}br(){return""}}class Nf{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let u=t,r=0;if(this.seen.hasOwnProperty(u)){r=this.seen[t];do r++,u=t+"-"+r;while(this.seen.hasOwnProperty(u))}return n||(this.seen[t]=r,this.seen[u]=0),u}slug(t,n={}){const u=this.serialize(t);return this.getNextSafeSlug(u,n.dryrun)}}class Bn{constructor(t){this.options=t||ou,this.options.renderer=this.options.renderer||new os,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Bf,this.slugger=new Nf}static parse(t,n){return new Bn(n).parse(t)}static parseInline(t,n){return new Bn(n).parseInline(t)}parse(t,n=!0){let u="",r,o,i,a,s,l,c,d,f,p,g,h,y,C,b,m,v,T,P;const A=t.length;for(r=0;r<A;r++){if(p=t[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(P=this.options.extensions.renderers[p.type].call({parser:this},p),P!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){u+=P||"";continue}switch(p.type){case"space":continue;case"hr":{u+=this.renderer.hr();continue}case"heading":{u+=this.renderer.heading(this.parseInline(p.tokens),p.depth,zf(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{u+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(d="",c="",a=p.header.length,o=0;o<a;o++)c+=this.renderer.tablecell(this.parseInline(p.header[o].tokens),{header:!0,align:p.align[o]});for(d+=this.renderer.tablerow(c),f="",a=p.rows.length,o=0;o<a;o++){for(l=p.rows[o],c="",s=l.length,i=0;i<s;i++)c+=this.renderer.tablecell(this.parseInline(l[i].tokens),{header:!1,align:p.align[i]});f+=this.renderer.tablerow(c)}u+=this.renderer.table(d,f);continue}case"blockquote":{f=this.parse(p.tokens),u+=this.renderer.blockquote(f);continue}case"list":{for(g=p.ordered,h=p.start,y=p.loose,a=p.items.length,f="",o=0;o<a;o++)b=p.items[o],m=b.checked,v=b.task,C="",b.task&&(T=this.renderer.checkbox(m),y?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=T+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=T+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:T}):C+=T),C+=this.parse(b.tokens,y),f+=this.renderer.listitem(C,v,m);u+=this.renderer.list(f,g,h);continue}case"html":{u+=this.renderer.html(p.text);continue}case"paragraph":{u+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(f=p.tokens?this.parseInline(p.tokens):p.text;r+1<A&&t[r+1].type==="text";)p=t[++r],f+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);u+=n?this.renderer.paragraph(f):f;continue}default:{const k='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(k);return}else throw new Error(k)}}}return u}parseInline(t,n){n=n||this.renderer;let u="",r,o,i;const a=t.length;for(r=0;r<a;r++){if(o=t[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(i=this.options.extensions.renderers[o.type].call({parser:this},o),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))){u+=i||"";continue}switch(o.type){case"escape":{u+=n.text(o.text);break}case"html":{u+=n.html(o.text);break}case"link":{u+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break}case"image":{u+=n.image(o.href,o.title,o.text);break}case"strong":{u+=n.strong(this.parseInline(o.tokens,n));break}case"em":{u+=n.em(this.parseInline(o.tokens,n));break}case"codespan":{u+=n.codespan(o.text);break}case"br":{u+=n.br();break}case"del":{u+=n.del(this.parseInline(o.tokens,n));break}case"text":{u+=n.text(o.text);break}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(s);return}else throw new Error(s)}}}return u}}class Po{constructor(t){this.options=t||ou}preprocess(t){return t}postprocess(t){return t}}Nr(Po,"passThroughHooks",new Set(["preprocess","postprocess"]));function Mb(e,t,n){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+ft(u.message+"",!0)+"</pre>";if(t)return Promise.resolve(r);if(n){n(null,r);return}return r}if(t)return Promise.reject(u);if(n){n(u);return}throw u}}function jf(e,t){return(n,u,r)=>{typeof u=="function"&&(r=u,u=null);const o={...u};u={...we.defaults,...o};const i=Mb(u.silent,u.async,r);if(typeof n>"u"||n===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(Rb(u),u.hooks&&(u.hooks.options=u),r){const a=u.highlight;let s;try{u.hooks&&(n=u.hooks.preprocess(n)),s=e(n,u)}catch(d){return i(d)}const l=function(d){let f;if(!d)try{u.walkTokens&&we.walkTokens(s,u.walkTokens),f=t(s,u),u.hooks&&(f=u.hooks.postprocess(f))}catch(p){d=p}return u.highlight=a,d?i(d):r(null,f)};if(!a||a.length<3||(delete u.highlight,!s.length))return l();let c=0;we.walkTokens(s,function(d){d.type==="code"&&(c++,setTimeout(()=>{a(d.text,d.lang,function(f,p){if(f)return l(f);p!=null&&p!==d.text&&(d.text=p,d.escaped=!0),c--,c===0&&l()})},0))}),c===0&&l();return}if(u.async)return Promise.resolve(u.hooks?u.hooks.preprocess(n):n).then(a=>e(a,u)).then(a=>u.walkTokens?Promise.all(we.walkTokens(a,u.walkTokens)).then(()=>a):a).then(a=>t(a,u)).then(a=>u.hooks?u.hooks.postprocess(a):a).catch(i);try{u.hooks&&(n=u.hooks.preprocess(n));const a=e(n,u);u.walkTokens&&we.walkTokens(a,u.walkTokens);let s=t(a,u);return u.hooks&&(s=u.hooks.postprocess(s)),s}catch(a){return i(a)}}}function we(e,t,n){return jf(zn.lex,Bn.parse)(e,t,n)}we.options=we.setOptions=function(e){return we.defaults={...we.defaults,...e},_b(we.defaults),we};we.getDefaults=Ff;we.defaults=ou;we.use=function(...e){const t=we.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(n=>{const u={...n};if(u.async=we.defaults.async||u.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const o=t.renderers[r.name];o?t.renderers[r.name]=function(...i){let a=r.renderer.apply(this,i);return a===!1&&(a=o.apply(this,i)),a}:t.renderers[r.name]=r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[r.level]?t[r.level].unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),u.extensions=t),n.renderer){const r=we.defaults.renderer||new os;for(const o in n.renderer){const i=r[o];r[o]=(...a)=>{let s=n.renderer[o].apply(r,a);return s===!1&&(s=i.apply(r,a)),s}}u.renderer=r}if(n.tokenizer){const r=we.defaults.tokenizer||new rs;for(const o in n.tokenizer){const i=r[o];r[o]=(...a)=>{let s=n.tokenizer[o].apply(r,a);return s===!1&&(s=i.apply(r,a)),s}}u.tokenizer=r}if(n.hooks){const r=we.defaults.hooks||new Po;for(const o in n.hooks){const i=r[o];Po.passThroughHooks.has(o)?r[o]=a=>{if(we.defaults.async)return Promise.resolve(n.hooks[o].call(r,a)).then(l=>i.call(r,l));const s=n.hooks[o].call(r,a);return i.call(r,s)}:r[o]=(...a)=>{let s=n.hooks[o].apply(r,a);return s===!1&&(s=i.apply(r,a)),s}}u.hooks=r}if(n.walkTokens){const r=we.defaults.walkTokens;u.walkTokens=function(o){let i=[];return i.push(n.walkTokens.call(this,o)),r&&(i=i.concat(r.call(this,o))),i}}we.setOptions(u)})};we.walkTokens=function(e,t){let n=[];for(const u of e)switch(n=n.concat(t.call(we,u)),u.type){case"table":{for(const r of u.header)n=n.concat(we.walkTokens(r.tokens,t));for(const r of u.rows)for(const o of r)n=n.concat(we.walkTokens(o.tokens,t));break}case"list":{n=n.concat(we.walkTokens(u.items,t));break}default:we.defaults.extensions&&we.defaults.extensions.childTokens&&we.defaults.extensions.childTokens[u.type]?we.defaults.extensions.childTokens[u.type].forEach(function(r){n=n.concat(we.walkTokens(u[r],t))}):u.tokens&&(n=n.concat(we.walkTokens(u.tokens,t)))}return n};we.parseInline=jf(zn.lexInline,Bn.parseInline);we.Parser=Bn;we.parser=Bn.parse;we.Renderer=os;we.TextRenderer=Bf;we.Lexer=zn;we.lexer=zn.lex;we.Tokenizer=rs;we.Slugger=Nf;we.Hooks=Po;we.parse=we;we.options;we.setOptions;we.use;we.walkTokens;we.parseInline;Bn.parse;zn.lex;const Vl=({size:e})=>Z("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:e,height:e},[Z("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),Z("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),zb=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},Z("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),Bb=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},Z("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),Nb=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[Z("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),Z("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),jb=({active:e=!1})=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[Z("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(e?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:e?"red":"currentColor"})]),Hb=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[Z("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),Z("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),Vb=()=>Z("svg",{width:"16",height:"16",ariaHidden:"true"},Z("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),Ub=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},Z("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),Gb=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},Z("path",{d:"M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",fill:"currentColor"})),qb=()=>Z("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},Z("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"})),mr=({size:e=100})=>Z("svg",{width:e,height:e,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},Z("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},Z("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}))),Wb=()=>Z("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[Z("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),Z("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})]),Hf={"Content-Type":"application/json"},ba=(e,t="")=>{if(typeof e=="object"&&e.errno)throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},Ul=({serverURL:e,lang:t,path:n,type:u,action:r})=>fetch(`${e}/article?lang=${t}`,{method:"POST",headers:Hf,body:JSON.stringify({path:n,type:u,action:r})}).then(o=>o.json()),mo=({serverURL:e,lang:t,token:n,objectId:u,comment:r})=>fetch(`${e}/comment/${u}?lang=${t}`,{method:"PUT",headers:{...Hf,Authorization:`Bearer ${n}`},body:JSON.stringify(r)}).then(o=>o.json()).then(o=>ba(o,"Update comment"));let Gl=null;const Vf=()=>Gl||(Gl=jt("WALINE_LIKE",[]));let ql=null;const Kb=()=>ql??(ql=jt("WALINE_REACTION",{}));var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Uf={},yu={},gr={},Zb=Ro&&Ro.__awaiter||function(e,t,n,u){return new(n||(n=Promise))(function(r,o){function i(l){try{s(u.next(l))}catch(c){o(c)}}function a(l){try{s(u.throw(l))}catch(c){o(c)}}function s(l){var c;l.done?r(l.value):(c=l.value,c instanceof n?c:new n(function(d){d(c)})).then(i,a)}s((u=u.apply(e,t||[])).next())})},Qb=Ro&&Ro.__generator||function(e,t){var n,u,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(s){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,u&&(r=2&c[0]?u.return:c[0]?u.throw||((r=u.return)&&r.call(u),0):u.next)&&!(r=r.call(u,c[1])).done)return r;switch(u=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,u=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(r=i.trys,!((r=r.length>0&&r[r.length-1])||c[0]!==6&&c[0]!==2)){i=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(c[0]===6&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(d){c=[6,d],u=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([s,l])}}};Object.defineProperty(gr,"__esModule",{value:!0}),gr.ReCaptchaInstance=void 0;var Xb=function(){function e(t,n,u){this.siteKey=t,this.recaptchaID=n,this.recaptcha=u,this.styleContainer=null}return e.prototype.execute=function(t){return Zb(this,void 0,void 0,function(){return Qb(this,function(n){return[2,this.recaptcha.enterprise?this.recaptcha.enterprise.execute(this.recaptchaID,{action:t}):this.recaptcha.execute(this.recaptchaID,{action:t})]})})},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){this.styleContainer===null&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{visibility:hidden !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){this.styleContainer!==null&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();gr.ReCaptchaInstance=Xb,Object.defineProperty(yu,"__esModule",{value:!0}),yu.getInstance=yu.load=void 0;var Tn,Yb=gr;(function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"})(Tn||(Tn={}));var Wl=function(){function e(){}return e.load=function(t,n){if(n===void 0&&(n={}),typeof document>"u")return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===Tn.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===Tn.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise(function(r,o){e.successfulLoadingConsumers.push(function(i){return r(i)}),e.errorLoadingRunnable.push(function(i){return o(i)})});e.instanceSiteKey=t,e.setLoadingState(Tn.LOADING);var u=new e;return new Promise(function(r,o){u.loadScript(t,n.useRecaptchaNet||!1,n.useEnterprise||!1,n.renderParameters?n.renderParameters:{},n.customUrl).then(function(){e.setLoadingState(Tn.LOADED);var i=u.doExplicitRender(grecaptcha,t,n.explicitRenderParameters?n.explicitRenderParameters:{},n.useEnterprise||!1),a=new Yb.ReCaptchaInstance(t,i,grecaptcha);e.successfulLoadingConsumers.forEach(function(s){return s(a)}),e.successfulLoadingConsumers=[],n.autoHideBadge&&a.hideBadge(),e.instance=a,r(a)}).catch(function(i){e.errorLoadingRunnable.forEach(function(a){return a(i)}),e.errorLoadingRunnable=[],o(i)})})},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return e.loadingState===null?Tn.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,n,u,r,o){var i=this;n===void 0&&(n=!1),u===void 0&&(u=!1),r===void 0&&(r={}),o===void 0&&(o="");var a=document.createElement("script");a.setAttribute("recaptcha-v3-script","");var s="https://www.google.com/recaptcha/api.js";n&&(s=u?"https://recaptcha.net/recaptcha/enterprise.js":"https://recaptcha.net/recaptcha/api.js"),u&&(s="https://www.google.com/recaptcha/enterprise.js"),o&&(s=o),r.render&&(r.render=void 0);var l=this.buildQueryString(r);return a.src=s+"?render=explicit"+l,new Promise(function(c,d){a.addEventListener("load",i.waitForScriptToLoad(function(){c(a)},u),!1),a.onerror=function(f){e.setLoadingState(Tn.NOT_LOADED),d(f)},document.head.appendChild(a)})},e.prototype.buildQueryString=function(t){return Object.keys(t).length<1?"":"&"+Object.keys(t).filter(function(n){return!!t[n]}).map(function(n){return n+"="+t[n]}).join("&")},e.prototype.waitForScriptToLoad=function(t,n){var u=this;return function(){window.grecaptcha===void 0?setTimeout(function(){u.waitForScriptToLoad(t,n)},e.SCRIPT_LOAD_DELAY):n?window.grecaptcha.enterprise.ready(function(){t()}):window.grecaptcha.ready(function(){t()})}},e.prototype.doExplicitRender=function(t,n,u,r){var o={sitekey:n,badge:u.badge,size:u.size,tabindex:u.tabindex};return u.container?r?t.enterprise.render(u.container,o):t.render(u.container,o):r?t.enterprise.render(o):t.render(o)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();yu.load=Wl.load,yu.getInstance=Wl.getInstance,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ReCaptchaInstance=e.getInstance=e.load=void 0;var t=yu;Object.defineProperty(e,"load",{enumerable:!0,get:function(){return t.load}}),Object.defineProperty(e,"getInstance",{enumerable:!0,get:function(){return t.getInstance}});var n=gr;Object.defineProperty(e,"ReCaptchaInstance",{enumerable:!0,get:function(){return n.ReCaptchaInstance}})}(Uf);const Kl={};let Zl=null;const is=()=>Zl??(Zl=jt("WALINE_USER",{})),Jb={key:0,class:"wl-reaction"},e6=["textContent"],t6={class:"wl-reaction-list"},n6=["onClick"],u6={class:"wl-reaction-img"},r6=["src","alt"],o6=["textContent"],i6=["textContent"];var a6=fe({__name:"ArticleReaction",setup(e,{expose:t}){t();const n=Kb(),u=He("config"),r=Q(-1),o=Q([]),i=B(()=>u.value.locale),a=B(()=>u.value.reaction.length>0),s=B(()=>{const{reaction:d,path:f}=u.value;return d.map((p,g)=>({icon:p,desc:i.value[`reaction${g}`],active:n.value[f]===g}))});let l;const c=async()=>{if(a.value){const{serverURL:d,lang:f,path:p,reaction:g}=u.value,h=new AbortController;l=h.abort.bind(h);const y=await(({serverURL:C,lang:b,paths:m,type:v,signal:T})=>fetch(`${C}/article?path=${encodeURIComponent(m.join(","))}&type=${encodeURIComponent(v.join(","))}&lang=${b}`,{signal:T}).then(P=>P.json()))({serverURL:d,lang:f,paths:[p],type:g.map((C,b)=>`reaction${b}`),signal:h.signal});if(Array.isArray(y)||typeof y=="number")return;o.value=g.map((C,b)=>y[`reaction${b}`])}};return Fe(()=>{Pe(()=>[u.value.serverURL,u.value.path],()=>{c()},{immediate:!0})}),Vt(()=>l==null?void 0:l()),(d,f)=>s.value.length?(x(),S("div",Jb,[$("div",{class:"wl-reaction-title",textContent:oe(i.value.reactionTitle)},null,8,e6),$("ul",t6,[(x(!0),S(me,null,Re(s.value,({active:p,icon:g,desc:h},y)=>(x(),S("li",{key:y,class:ke(["wl-reaction-item",{active:p}]),onClick:C=>(async b=>{if(r.value===-1){const{serverURL:m,lang:v,path:T}=u.value,P=n.value[T];r.value=b,P!==void 0&&(await Ul({serverURL:m,lang:v,path:T,type:`reaction${P}`,action:"desc"}),o.value[P]=Math.max(o.value[P]-1,0)),P!==b&&(await Ul({serverURL:m,lang:v,path:T,type:`reaction${b}`}),o.value[b]=(o.value[b]||0)+1),P===b?delete n.value[T]:n.value[T]=b,r.value=-1}})(y)},[$("div",u6,[$("img",{src:g,alt:h},null,8,r6),r.value===y?(x(),de(E(mr),{key:0,class:"wl-reaction-loading"})):(x(),S("div",{key:1,class:"wl-reaction-votes",textContent:oe(o.value[y]||0)},null,8,o6))]),$("div",{class:"wl-reaction-text",textContent:oe(h)},null,8,i6)],10,n6))),128))])])):V("v-if",!0)}}),Pr=(e,t)=>{const n=e.__vccOpts||e;for(const[u,r]of t)n[u]=r;return n},s6=Pr(a6,[["__file","ArticleReaction.vue"]]);const l6=["data-index"],c6=["src","title","onClick"];var d6=Pr(fe({__name:"ImageWall",props:{items:{default:()=>[]},columnWidth:{default:300},gap:{default:0}},emits:["insert"],setup(e,{expose:t}){const n=e;t();let u=null;const r=Q(null),o=Q({}),i=Q([]),a=()=>{const d=Math.floor((r.value.getBoundingClientRect().width+n.gap)/(n.columnWidth+n.gap));return d>0?d:1},s=async d=>{var p;if(d>=n.items.length)return;await yn();const f=Array.from(((p=r.value)==null?void 0:p.children)||[]).reduce((g,h)=>h.getBoundingClientRect().height<g.getBoundingClientRect().height?h:g);i.value[Number(f.dataset.index)].push(d),await s(d+1)},l=async(d=!1)=>{if(i.value.length===a()&&!d)return;var f;i.value=(f=a(),new Array(f).fill(null).map(()=>[]));const p=window.scrollY;await s(0),window.scrollTo({top:p})},c=d=>{o.value[d.target.src]=!0};return Fe(()=>{l(!0),u=new ResizeObserver(()=>{l()}),u.observe(r.value),Pe(()=>[n.items],()=>{o.value={},l(!0)}),Pe(()=>[n.columnWidth,n.gap],()=>{l()})}),Ir(()=>u.unobserve(r.value)),(d,f)=>(x(),S("div",{ref_key:"wall",ref:r,class:"wl-gallery",style:ct({gap:`${d.gap}px`})},[(x(!0),S(me,null,Re(i.value,(p,g)=>(x(),S("div",{key:g,class:"wl-gallery-column","data-index":g,style:ct({gap:`${d.gap}px`})},[(x(!0),S(me,null,Re(p,h=>(x(),S(me,{key:h},[o.value[d.items[h].src]?V("v-if",!0):(x(),de(E(mr),{key:0,size:36,style:{margin:"20px auto"}})),$("img",{class:"wl-gallery-item",src:d.items[h].src,title:d.items[h].title,loading:"lazy",onLoad:c,onClick:y=>d.$emit("insert",`![](${d.items[h].src})`)},null,40,c6)],64))),128))],12,l6))),128))],4))}}),[["__file","ImageWall.vue"]]);const f6=e=>{try{e=decodeURI(e)}catch{}return e},Gf=(e="")=>e.replace(/\/$/u,""),qf=e=>/^(https?:)?\/\//.test(e),p6=["nick","mail","link"],Ql=e=>e.filter(t=>p6.includes(t)),Xl=["//unpkg.com/@waline/emojis@1.1.0/weibo"],h6=["//unpkg.com/@waline/emojis/tieba/tieba_agree.png","//unpkg.com/@waline/emojis/tieba/tieba_look_down.png","//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png","//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png","//unpkg.com/@waline/emojis/tieba/tieba_awkward.png","//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"],m6=e=>new Promise((t,n)=>{if(e.size>128e3)return n(new Error("File too large! File size limit 128KB"));const u=new FileReader;u.readAsDataURL(e),u.onload=()=>{var r;return t(((r=u.result)==null?void 0:r.toString())||"")},u.onerror=n}),g6=e=>e===!0?'<p class="wl-tex">TeX is not available in preview</p>':'<span class="wl-tex">TeX is not available in preview</span>',b6=e=>{const t=async(n,u={})=>fetch(`https://api.giphy.com/v1/gifs/${n}?${new URLSearchParams({lang:e,limit:"20",rating:"g",api_key:"6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp",...u}).toString()}`).then(r=>r.json()).then(({data:r})=>r.map(o=>({title:o.title,src:o.images.downsized_medium.url})));return{search:n=>t("search",{q:n,offset:"0"}),default:()=>t("trending",{}),more:(n,u=0)=>t("search",{q:n,offset:u.toString()})}},v6=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),Yl=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],Ii={},y6=e=>{let t=0;return e.replace(v6,(n,u,r)=>{if(r)return`<span style="color: slategray">${r}</span>`;if(u==="<")return"&lt;";let o;Ii[u]?o=Ii[u]:(o=Yl[t],Ii[u]=o);const i=`<span style="color: #${o}">${u}</span>`;return t=++t%Yl.length,i})},x6=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder","profile","approved","waiting","spam","unsticky","oldest","latest","hottest","reactionTitle"],Ou=e=>Object.fromEntries(e.map((t,n)=>[x6[n],t]));var Li=Ou(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF","Profile","Approved","Waiting","Spam","Unsticky","Oldest","Latest","Hottest","What do you think?"]),Yr=Ou(["ニックネーム","3バイト以上のニックネームをご入力ください.","メールアドレス","メールアドレスをご確認ください.","サイト","オプション","ここにコメント","コメントしましょう~","提出する","Like","Cancel like","返信する","キャンセル","コメント","更新","さらに読み込む","プレビュー","絵文字","画像をアップロード","秒前","分前","時間前","日前","たっだ今","アップロード","ログインする","ログアウト","管理者","トップに置く","ワード",`コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2`,"匿名","うえにん","なかにん","しもおし","特にしもおし","かげ","なぬし","GIF","探す GIF","個人情報","承認済み","待っている","スパム","べたつかない","逆順","正順","人気順","どう思いますか？"]),Jl=Ou(["Apelido","Apelido não pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endereço de e-mail.","Website","Opcional","Comente aqui...","Nenhum comentário, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Comentários","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atrás","minutos atrás","horas atrás","dias atrás","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2`,"Anônimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF","informação pessoal","Aprovado","Espera","Spam","Unsticky","Mais velho","Mais recentes","Mais quente","O que você acha?"]),$i=Ou(["Псевдоним","Никнейм не может быть меньше 3 байт.","Эл. адрес","Пожалуйста, подтвердите адрес вашей электронной почты.","Веб-сайт","Необязательный","Комментарий здесь...","Пока нет комментариев.","Отправить","Like","Cancel like","Отвечать","Отменить ответ","Комментарии","Обновить","Загрузи больше...","Превью","эмодзи","Загрузить изображение","секунд назад","несколько минут назад","несколько часов назад","дней назад","прямо сейчас","Загрузка","Авторизоваться","Выход из системы","Админ","Липкий","Слова",`Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2`,"Анонимный","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Поиск GIF","Персональные данные","Одобренный","Ожидающий","Спам","Нелипкий","самый старый","последний","самый горячий","Что вы думаете?"]),Di=Ou(["昵称","昵称不能少于3个字符","邮箱","请填写正确的邮件地址","网址","可选","欢迎评论","来发评论吧~","提交","喜欢","取消喜欢","回复","取消回复","评论","刷新","加载更多...","预览","表情","上传图片","秒前","分钟前","小时前","天前","刚刚","正在上传","登录","退出","博主","置顶","字",`评论字数应在 $0 到 $1 字之间！
当前字数：$2`,"匿名","潜水","冒泡","吐槽","活跃","话痨","传说","表情包","搜索表情包","个人资料","通过","待审核","垃圾","取消置顶","按倒序","按正序","按热度","你认为这篇文章怎么样？"]),ec=Ou(["暱稱","暱稱不能少於3個字元","郵箱","請填寫正確的郵件地址","網址","可選","歡迎留言","來發留言吧~","送出","喜歡","取消喜歡","回覆","取消回覆","留言","重整","載入更多...","預覽","表情","上傳圖片","秒前","分鐘前","小時前","天前","剛剛","正在上傳","登入","登出","管理者","置頂","字",`留言字數應在 $0 到 $1 字之間！
目前字數：$2`,"匿名","潛水","冒泡","吐槽","活躍","多話","傳說","表情包","搜尋表情包","個人資料","通過","待審核","垃圾","取消置頂","最早","最新","熱門","你認為這篇文章怎麼樣？"]);const Pi={zh:Di,"zh-cn":Di,"zh-CN":Di,"zh-tw":ec,"zh-TW":ec,en:Li,"en-US":Li,"en-us":Li,jp:Yr,ja:Yr,"jp-jp":Yr,"jp-JP":Yr,"pt-br":Jl,"pt-BR":Jl,ru:$i,"ru-ru":$i,"ru-RU":$i},_6=e=>{const t=Gf(e);return qf(t)?t:`https://${t}`},w6=e=>Array.isArray(e)?e:!!e&&[0,e],Ri=(e,t)=>typeof e=="function"?e:e!==!1&&t,Fi="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",Oi=(e,t)=>{let n=e.toString();for(;n.length<t;)n="0"+n;return n},k6=(e,t,n)=>{if(!e)return"";const u=typeof e=="string"?new Date(e.indexOf(" ")!==-1?e.replace(/-/g,"/"):e):e,r=t.getTime()-u.getTime(),o=Math.floor(r/864e5);if(o===0){const i=r%864e5,a=Math.floor(i/36e5);if(a===0){const s=i%36e5,l=Math.floor(s/6e4);if(l===0){const c=s%6e4;return`${Math.round(c/1e3)} ${n.seconds}`}return`${l} ${n.minutes}`}return`${a} ${n.hours}`}return o<0?n.now:o<8?`${o} ${n.days}`:(i=>{const a=Oi(i.getDate(),2),s=Oi(i.getMonth()+1,2);return`${Oi(i.getFullYear(),2)}-${s}-${a}`})(u)},C6=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,E6=e=>{const t=jt("WALINE_EMOJI",{}),n=!!/@[0-9]+\.[0-9]+\.[0-9]+/.test(e);if(n){const u=t.value[e];if(u)return Promise.resolve(u)}return fetch(`${e}/info.json`).then(u=>u.json()).then(u=>{const r={folder:e,...u};return n&&(t.value[e]=r),r})},tc=(e,t="",n="",u="")=>`${t?`${t}/`:""}${n}${e}${u?`.${u}`:""}`,A6=e=>e.type.includes("image"),nc=e=>{const t=Array.from(e).find(A6);return t?t.getAsFile():null},S6=/\$.*?\$/,T6=/^\$(.*?)\$/,I6=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,Wf=(e="",t={})=>e.replace(/:(.+?):/g,(n,u)=>t[u]?`<img class="wl-emoji" src="${t[u]}" alt="${u}">`:n),L6=(e,{emojiMap:t,highlighter:n,texRenderer:u})=>{if(we.setOptions({highlight:n||void 0,breaks:!0,smartLists:!0,smartypants:!0}),u){const r=(o=>[{name:"blockMath",level:"block",tokenizer(i){const a=I6.exec(i);if(a!==null)return{type:"html",raw:a[0],text:o(!0,a[1])}}},{name:"inlineMath",level:"inline",start(i){const a=i.search(S6);return a!==-1?a:i.length},tokenizer(i){const a=T6.exec(i);if(a!==null)return{type:"html",raw:a[0],text:o(!1,a[1])}}}])(u);we.use({extensions:r})}return we.parse(Wf(e,t))},$6={class:"wl-comment"},D6={key:0,class:"wl-login-info"},P6={class:"wl-avatar"},R6=["title"],F6=["title"],O6=["src"],M6=["title","textContent"],z6={class:"wl-panel"},B6=["for","textContent"],N6=["id","onUpdate:modelValue","name","type"],j6=["placeholder"],H6={class:"wl-preview"},V6=$("hr",null,null,-1),U6=["innerHTML"],G6={class:"wl-footer"},q6={class:"wl-actions"},W6={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noopener noreferrer"},K6=["title"],Z6=["title"],Q6=["title"],X6=["title"],Y6={class:"wl-info"},J6=$("div",{class:"wl-captcha-container"},null,-1),e5={class:"wl-text-number"},t5={key:0},n5=["textContent"],u5=["textContent"],r5=["disabled"],o5=["placeholder"],i5={key:1,class:"wl-loading"},a5={key:0,class:"wl-tab-wrapper"},s5=["title","onClick"],l5=["src","alt"],c5={key:0,class:"wl-tabs"},d5=["onClick"],f5=["src","alt","title"],p5=["title"];var h5=fe({__name:"CommentBox",props:{edit:{default:null},rootId:{default:""},replyId:{default:""},replyUser:{default:""}},emits:["log","cancelEdit","cancelReply","submit"],setup(e,{expose:t,emit:n}){const u=e;t();const r=He("config"),o=jt("WALINE_COMMENT_BOX_EDITOR",""),i=jt("WALINE_USER_META",{nick:"",mail:"",link:""}),a=is(),s=Q({}),l=Q(null),c=Q(null),d=Q(null),f=Q(null),p=Q(null),g=Q(null),h=Q(null),y=Q({tabs:[],map:{}}),C=Q(0),b=Q(!1),m=Q(!1),v=Q(!1),T=Q(""),P=Q(0),A=bn({loading:!0,list:[]}),k=Q(0),L=Q(!1),D=Q(""),N=Q(!1),I=Q(!1),R=B(()=>r.value.locale),K=B(()=>{var O;return!!((O=a.value)!=null&&O.token)}),U=B(()=>r.value.imageUploader!==!1),M=O=>{const z=l.value,Y=z.selectionStart,w=z.selectionEnd||0,_=z.scrollTop;o.value=z.value.substring(0,Y)+O+z.value.substring(w,z.value.length),z.focus(),z.selectionStart=Y+O.length,z.selectionEnd=Y+O.length,z.scrollTop=_},J=O=>{const z=O.key;(O.ctrlKey||O.metaKey)&&z==="Enter"&&he()},q=O=>{const z=`![${r.value.locale.uploading} ${O.name}]()`;return M(z),N.value=!0,Promise.resolve().then(()=>r.value.imageUploader(O)).then(Y=>{o.value=o.value.replace(z,`\r
![${O.name}](${Y})`)}).catch(Y=>{alert(Y.message),o.value=o.value.replace(z,"")}).then(()=>{N.value=!1})},ie=O=>{var z;if((z=O.dataTransfer)!=null&&z.items){const Y=nc(O.dataTransfer.items);Y&&U.value&&(q(Y),O.preventDefault())}},ce=O=>{if(O.clipboardData){const z=nc(O.clipboardData.items);z&&U.value&&q(z)}},ve=()=>{const O=c.value;O.files&&U.value&&q(O.files[0]).then(()=>{O.value=""})},he=async()=>{var se,te,xe,pe,_e,Se;const{serverURL:O,lang:z,login:Y,wordLimit:w,requiredMeta:_,recaptchaV3Key:F,turnstileKey:G}=r.value,j=await(async()=>{if(!navigator)return"";const{userAgentData:Ee}=navigator;let $e=navigator.userAgent;if(!Ee||Ee.platform!=="Windows")return $e;const{platformVersion:Te}=await Ee.getHighEntropyValues(["platformVersion"]);return Te&&parseInt(Te.split(".")[0])>=13&&($e=$e.replace("Windows NT 10.0","Windows NT 11.0")),$e})(),W={comment:D.value,nick:i.value.nick,mail:i.value.mail,link:i.value.link,url:r.value.path,ua:j};if((se=a.value)!=null&&se.token)W.nick=a.value.display_name,W.mail=a.value.email,W.link=a.value.url;else{if(Y==="force")return;if(_.indexOf("nick")>-1&&!W.nick)return(te=s.value.nick)==null||te.focus(),alert(R.value.nickError);if(_.indexOf("mail")>-1&&!W.mail||W.mail&&(ae=W.mail,!C6.test(ae)))return(xe=s.value.mail)==null||xe.focus(),alert(R.value.mailError);W.nick||(W.nick=R.value.anonymous)}var ae;if(W.comment){if(!L.value)return alert(R.value.wordHint.replace("$0",w[0].toString()).replace("$1",w[1].toString()).replace("$2",P.value.toString()));W.comment=Wf(W.comment,y.value.map),u.replyId&&u.rootId&&(W.pid=u.replyId,W.rid=u.rootId,W.at=u.replyUser),N.value=!0;try{F&&(W.recaptchaV3=await(Te=>{const Ze=Kl[Te]??(Kl[Te]=Uf.load(Te,{useRecaptchaNet:!0,autoHideBadge:!0}));return{execute:Oe=>Ze.then(et=>et.execute(Oe))}})(F).execute("social")),G&&(W.turnstile=await(ue=G,{execute:async Te=>{const{load:Ze}=Pf("https://challenges.cloudflare.com/turnstile/v0/api.js",void 0,{async:!1});await Ze();const Oe=window==null?void 0:window.turnstile;return new Promise(et=>{Oe==null||Oe.ready(()=>{Oe==null||Oe.render(".wl-captcha-container",{sitekey:ue,action:Te,size:"compact",callback:et})})})}}).execute("social"));const Ee={serverURL:O,lang:z,token:(pe=a.value)==null?void 0:pe.token,comment:W},$e=await(u.edit?mo({objectId:u.edit.objectId,...Ee}):(({serverURL:Te,lang:Ze,token:Oe,comment:et})=>{const rt={"Content-Type":"application/json"};return Oe&&(rt.Authorization=`Bearer ${Oe}`),fetch(`${Te}/comment?lang=${Ze}`,{method:"POST",headers:rt,body:JSON.stringify(et)}).then(rn=>rn.json())})(Ee));if(N.value=!1,$e.errmsg)return alert($e.errmsg);n("submit",$e.data),o.value="",T.value="",u.replyId&&n("cancelReply"),(_e=u.edit)!=null&&_e.objectId&&n("cancelEdit")}catch(Ee){N.value=!1,alert(Ee.message)}var ue}else(Se=l.value)==null||Se.focus()},Ie=O=>{O.preventDefault();const{lang:z,serverURL:Y}=r.value;(({lang:w,serverURL:_})=>{const F=(window.innerWidth-450)/2,G=(window.innerHeight-450)/2,j=window.open(`${_}/ui/login?lng=${encodeURIComponent(w)}`,"_blank",`width=450,height=450,left=${F},top=${G},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);return j==null||j.postMessage({type:"TOKEN",data:null},"*"),new Promise(W=>{const ae=({data:ue})=>{ue&&typeof ue=="object"&&ue.type==="userInfo"&&ue.data.token&&(j==null||j.close(),window.removeEventListener("message",ae),W(ue.data))};window.addEventListener("message",ae)})})({serverURL:Y,lang:z}).then(w=>{a.value=w,(w.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(w)),n("log")})},Le=()=>{a.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null"),n("log")},be=O=>{O.preventDefault();const{lang:z,serverURL:Y}=r.value,w=(window.innerWidth-800)/2,_=(window.innerHeight-800)/2,F=new URLSearchParams({lng:z,token:a.value.token}),G=window.open(`${Y}/ui/profile?${F.toString()}`,"_blank",`width=800,height=800,left=${w},top=${_},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);G==null||G.postMessage({type:"TOKEN",data:a.value.token},"*")},ye=O=>{var z,Y,w,_;(z=d.value)!=null&&z.contains(O.target)||(Y=f.value)!=null&&Y.contains(O.target)||(b.value=!1),(w=p.value)!=null&&w.contains(O.target)||(_=g.value)!=null&&_.contains(O.target)||(m.value=!1)},H=async O=>{var j;const{scrollTop:z,clientHeight:Y,scrollHeight:w}=O.target,_=(Y+z)/w,F=r.value.search,G=((j=h.value)==null?void 0:j.value)||"";_<.9||A.loading||I.value||(A.loading=!0,(F.more&&A.list.length?await F.more(G,A.list.length):await F.search(G)).length?A.list=[...A.list,...F.more&&A.list.length?await F.more(G,A.list.length):await F.search(G)]:I.value=!0,A.loading=!1,setTimeout(()=>{O.target.scrollTop=z},50))},ne=Lf(O=>{A.list=[],I.value=!1,H(O)},300);Pe([r,P],([O,z])=>{const{wordLimit:Y}=O;Y?z<Y[0]&&Y[0]!==0?(k.value=Y[0],L.value=!1):z>Y[1]?(k.value=Y[1],L.value=!1):(k.value=Y[1],L.value=!0):(k.value=0,L.value=!0)},{immediate:!0});const ee=({data:O})=>{O&&O.type==="profile"&&(a.value={...a.value,...O.data},[localStorage,sessionStorage].filter(z=>z.getItem("WALINE_USER")).forEach(z=>z.setItem("WALINE_USER",JSON.stringify(a))))};return Fe(()=>{var O;document.body.addEventListener("click",ye),window.addEventListener("message",ee),(O=u.edit)!=null&&O.objectId&&(o.value=u.edit.orig),Pe(m,async z=>{if(!z)return;const Y=r.value.search;h.value&&(h.value.value=""),A.loading=!0,A.list=Y.default?await Y.default():await Y.search(""),A.loading=!1}),Pe(()=>o.value,z=>{const{highlighter:Y,texRenderer:w}=r.value;D.value=z,T.value=L6(z,{emojiMap:y.value.map,highlighter:Y,texRenderer:w}),P.value=(_=>{var F,G;return(((F=(j=>j.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu))(_))==null?void 0:F.reduce((j,W)=>j+(W.trim()===""?0:W.trim().split(/\s+/u).length),0))||0)+(((G=(j=>j.match(/[\u4E00-\u9FD5]/gu))(_))==null?void 0:G.length)||0)})(z),z?$o(l.value):$o.destroy(l.value)},{immediate:!0}),Pe(()=>r.value.emoji,z=>{return(Y=z,Promise.all(Y.map(w=>typeof w=="string"?E6(Gf(w)):Promise.resolve(w))).then(w=>{const _={tabs:[],map:{}};return w.forEach(F=>{const{name:G,folder:j,icon:W,prefix:ae,type:ue,items:se}=F;_.tabs.push({name:G,icon:tc(W,j,ae,ue),items:se.map(te=>{const xe=`${ae||""}${te}`;return _.map[xe]=tc(te,j,ae,ue),xe})})}),_})).then(w=>{y.value=w});var Y},{immediate:!0})}),Vt(()=>{document.body.removeEventListener("click",ye),window.removeEventListener("message",ee)}),(O,z)=>{var Y,w;return x(),S("div",$6,[E(r).login!=="disable"&&K.value&&!((Y=O.edit)!=null&&Y.objectId)?(x(),S("div",D6,[$("div",P6,[$("button",{type:"submit",class:"wl-logout-btn",title:R.value.logout,onClick:Le},[re(E(Vl),{size:14})],8,R6),$("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",title:R.value.profile,onClick:be},[$("img",{src:E(a).avatar,alt:"avatar"},null,8,O6)],8,F6)]),$("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",title:R.value.profile,onClick:be,textContent:oe(E(a).display_name)},null,8,M6)])):V("v-if",!0),$("div",z6,[E(r).login!=="force"&&E(r).meta.length&&!K.value?(x(),S("div",{key:0,class:ke(["wl-header",`item${E(r).meta.length}`])},[(x(!0),S(me,null,Re(E(r).meta,_=>(x(),S("div",{key:_,class:"wl-header-item"},[$("label",{for:`wl-${_}`,textContent:oe(R.value[_]+(E(r).requiredMeta.includes(_)||!E(r).requiredMeta.length?"":`(${R.value.optional})`))},null,8,B6),kt($("input",{id:`wl-${_}`,ref_for:!0,ref:F=>{F&&(s.value[_]=F)},"onUpdate:modelValue":F=>E(i)[_]=F,class:ke(["wl-input",`wl-${_}`]),name:_,type:_==="mail"?"email":"text"},null,10,N6),[[W0,E(i)[_]]])]))),128))],2)):V("v-if",!0),kt($("textarea",{id:"wl-edit",ref_key:"editorRef",ref:l,"onUpdate:modelValue":z[0]||(z[0]=_=>Xe(o)?o.value=_:null),class:"wl-editor",placeholder:O.replyUser?`@${O.replyUser}`:R.value.placeholder,onKeydown:J,onDrop:ie,onPaste:ce},null,40,j6),[[On,E(o)]]),kt($("div",H6,[V6,$("h4",null,oe(R.value.preview)+":",1),$("div",{class:"wl-content",innerHTML:T.value},null,8,U6)],512),[[Eu,v.value]]),$("div",G6,[$("div",q6,[$("a",W6,[re(E(Vb))]),kt($("button",{ref_key:"emojiButtonRef",ref:d,type:"button",class:ke(["wl-action",{active:b.value}]),title:R.value.emoji,onClick:z[1]||(z[1]=_=>b.value=!b.value)},[re(E(Bb))],10,K6),[[Eu,y.value.tabs.length]]),E(r).search?(x(),S("button",{key:0,ref_key:"gifButtonRef",ref:p,type:"button",class:ke(["wl-action",{active:m.value}]),title:R.value.gif,onClick:z[2]||(z[2]=_=>m.value=!m.value)},[re(E(Wb))],10,Z6)):V("v-if",!0),$("input",{id:"wl-image-upload",ref_key:"imageUploadRef",ref:c,class:"upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:ve},null,544),U.value?(x(),S("label",{key:1,for:"wl-image-upload",class:"wl-action",title:R.value.uploadImage},[re(E(Nb))],8,Q6)):V("v-if",!0),$("button",{type:"button",class:ke(["wl-action",{active:v.value}]),title:R.value.preview,onClick:z[3]||(z[3]=_=>v.value=!v.value)},[re(E(Hb))],10,X6)]),$("div",Y6,[J6,$("div",e5,[Qe(oe(P.value)+" ",1),E(r).wordLimit?(x(),S("span",t5,[Qe("  /  "),$("span",{class:ke({illegal:!L.value}),textContent:oe(k.value)},null,10,n5)])):V("v-if",!0),Qe("  "+oe(R.value.word),1)]),E(r).login==="disable"||K.value?V("v-if",!0):(x(),S("button",{key:0,type:"button",class:"wl-btn",onClick:Ie,textContent:oe(R.value.login)},null,8,u5)),E(r).login!=="force"||K.value?(x(),S("button",{key:1,type:"submit",class:"primary wl-btn",title:"Cmd|Ctrl + Enter",disabled:N.value,onClick:he},[N.value?(x(),de(E(mr),{key:0,size:16})):(x(),S(me,{key:1},[Qe(oe(R.value.submit),1)],64))],8,r5)):V("v-if",!0)]),$("div",{ref_key:"gifPopupRef",ref:g,class:ke(["wl-gif-popup",{display:m.value}])},[$("input",{ref_key:"gifSearchInputRef",ref:h,type:"text",placeholder:R.value.gifSearchPlaceholder,onInput:z[4]||(z[4]=(..._)=>E(ne)&&E(ne)(..._))},null,40,o5),A.list.length?(x(),de(d6,{key:0,items:A.list,"column-width":200,gap:6,onInsert:z[5]||(z[5]=_=>M(_)),onScroll:H},null,8,["items"])):V("v-if",!0),A.loading?(x(),S("div",i5,[re(E(mr),{size:30})])):V("v-if",!0)],2),$("div",{ref_key:"emojiPopupRef",ref:f,class:ke(["wl-emoji-popup",{display:b.value}])},[(x(!0),S(me,null,Re(y.value.tabs,(_,F)=>(x(),S(me,{key:_.name},[F===C.value?(x(),S("div",a5,[(x(!0),S(me,null,Re(_.items,G=>(x(),S("button",{key:G,type:"button",title:G,onClick:j=>M(`:${G}:`)},[b.value?(x(),S("img",{key:0,class:"wl-emoji",src:y.value.map[G],alt:G,loading:"lazy",referrerPolicy:"no-referrer"},null,8,l5)):V("v-if",!0)],8,s5))),128))])):V("v-if",!0)],64))),128)),y.value.tabs.length>1?(x(),S("div",c5,[(x(!0),S(me,null,Re(y.value.tabs,(_,F)=>(x(),S("button",{key:_.name,type:"button",class:ke(["wl-tab",{active:C.value===F}]),onClick:G=>C.value=F},[$("img",{class:"wl-emoji",src:_.icon,alt:_.name,title:_.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,f5)],10,d5))),128))])):V("v-if",!0)],2)])]),O.replyId||(w=O.edit)!=null&&w.objectId?(x(),S("button",{key:1,type:"button",class:"wl-close",title:R.value.cancelReply,onClick:z[6]||(z[6]=_=>O.$emit(O.replyId?"cancelReply":"cancelEdit"))},[re(E(Vl),{size:24})],8,p5)):V("v-if",!0)])}}}),Kf=Pr(h5,[["__file","CommentBox.vue"]]);const m5=["id"],g5={class:"wl-user","aria-hidden":"true"},b5=["src"],v5={class:"wl-card"},y5={class:"wl-head"},x5=["href"],_5={key:1,class:"wl-nick"},w5=["textContent"],k5=["textContent"],C5=["textContent"],E5=["textContent"],A5=["textContent"],S5={class:"wl-comment-actions"},T5=["title"],I5=["textContent"],L5=["title"],$5={class:"wl-meta","aria-hidden":"true"},D5=["data-value","textContent"],P5=["data-value","textContent"],R5=["data-value","textContent"],F5=["innerHTML"],O5={key:1,class:"wl-admin-actions"},M5={class:"wl-comment-status"},z5=["disabled","onClick","textContent"],B5={key:3,class:"wl-quote"};var N5=Pr(fe({__name:"CommentCard",props:{comment:{},edit:{default:null},rootId:{},reply:{default:null}},emits:["log","submit","delete","edit","like","status","sticky","reply"],setup(e){const t=e,n=["approved","waiting","spam"],u=He("config"),r=Vf(),o=Df(),i=is(),a=B(()=>u.value.locale),s=B(()=>{const{link:h}=t.comment;return h?qf(h)?h:`https://${h}`:""}),l=B(()=>r.value.includes(t.comment.objectId)),c=B(()=>k6(t.comment.insertedAt,o.value,a.value)),d=B(()=>i.value.type==="administrator"),f=B(()=>t.comment.user_id&&i.value.objectId===t.comment.user_id),p=B(()=>{var h;return t.comment.objectId===((h=t.reply)==null?void 0:h.objectId)}),g=B(()=>{var h;return t.comment.objectId===((h=t.edit)==null?void 0:h.objectId)});return(h,y)=>{var b;const C=ze("CommentCard",!0);return x(),S("div",{id:h.comment.objectId,class:"wl-card-item"},[$("div",g5,[h.comment.avatar?(x(),S("img",{key:0,src:h.comment.avatar},null,8,b5)):V("v-if",!0),h.comment.type?(x(),de(E(qb),{key:1})):V("v-if",!0)]),$("div",v5,[$("div",y5,[s.value?(x(),S("a",{key:0,class:"wl-nick",href:s.value,target:"_blank",rel:"nofollow noopener noreferrer"},oe(h.comment.nick),9,x5)):(x(),S("span",_5,oe(h.comment.nick),1)),h.comment.type==="administrator"?(x(),S("span",{key:2,class:"wl-badge",textContent:oe(a.value.admin)},null,8,w5)):V("v-if",!0),h.comment.label?(x(),S("span",{key:3,class:"wl-badge",textContent:oe(h.comment.label)},null,8,k5)):V("v-if",!0),h.comment.sticky?(x(),S("span",{key:4,class:"wl-badge",textContent:oe(a.value.sticky)},null,8,C5)):V("v-if",!0),h.comment.level!==void 0&&h.comment.level>=0?(x(),S("span",{key:5,class:ke(`wl-badge level${h.comment.level}`),textContent:oe(a.value[`level${h.comment.level}`]||`Level ${h.comment.level}`)},null,10,E5)):V("v-if",!0),$("span",{class:"wl-time",textContent:oe(c.value)},null,8,A5),$("div",S5,[d.value||f.value?(x(),S("button",{key:0,type:"button",class:"wl-edit",onClick:y[0]||(y[0]=()=>h.$emit("edit",h.comment))},[re(E(Gb))])):V("v-if",!0),d.value||f.value?(x(),S("button",{key:1,type:"button",class:"wl-delete",onClick:y[1]||(y[1]=m=>h.$emit("delete",h.comment))},[re(E(zb))])):V("v-if",!0),$("button",{type:"button",class:"wl-like",title:l.value?a.value.cancelLike:a.value.like,onClick:y[2]||(y[2]=m=>h.$emit("like",h.comment))},[re(E(jb),{active:l.value},null,8,["active"]),"like"in h.comment?(x(),S("span",{key:0,textContent:oe(h.comment.like)},null,8,I5)):V("v-if",!0)],8,T5),$("button",{type:"button",class:ke(["wl-reply",{active:p.value}]),title:p.value?a.value.cancelReply:a.value.reply,onClick:y[3]||(y[3]=m=>h.$emit("reply",p.value?null:h.comment))},[re(E(Ub))],10,L5)])]),$("div",$5,[h.comment.addr?(x(),S("span",{key:0,class:"wl-addr","data-value":h.comment.addr,textContent:oe(h.comment.addr)},null,8,D5)):V("v-if",!0),h.comment.browser?(x(),S("span",{key:1,class:"wl-browser","data-value":h.comment.browser,textContent:oe(h.comment.browser)},null,8,P5)):V("v-if",!0),h.comment.os?(x(),S("span",{key:2,class:"wl-os","data-value":h.comment.os,textContent:oe(h.comment.os)},null,8,R5)):V("v-if",!0)]),g.value?V("v-if",!0):(x(),S("div",{key:0,class:"wl-content",innerHTML:h.comment.comment},null,8,F5)),d.value&&!g.value?(x(),S("div",O5,[$("span",M5,[(x(),S(me,null,Re(n,m=>$("button",{key:m,type:"submit",class:ke(`wl-btn wl-${m}`),disabled:h.comment.status===m,onClick:v=>h.$emit("status",{status:m,comment:h.comment}),textContent:oe(a.value[m])},null,10,z5)),64))]),d.value&&!h.comment.rid?(x(),S("button",{key:0,type:"submit",class:"wl-btn wl-sticky",onClick:y[4]||(y[4]=m=>h.$emit("sticky",h.comment))},oe(h.comment.sticky?a.value.unsticky:a.value.sticky),1)):V("v-if",!0)])):V("v-if",!0),p.value||g.value?(x(),S("div",{key:2,class:ke({"wl-reply-wrapper":p.value,"wl-edit-wrapper":g.value})},[re(Kf,{edit:h.edit,"reply-id":(b=h.reply)==null?void 0:b.objectId,"reply-user":h.comment.nick,"root-id":h.rootId,onLog:y[5]||(y[5]=m=>h.$emit("log")),onCancelReply:y[6]||(y[6]=m=>h.$emit("reply",null)),onCancelEdit:y[7]||(y[7]=m=>h.$emit("edit",null)),onSubmit:y[8]||(y[8]=m=>h.$emit("submit",m))},null,8,["edit","reply-id","reply-user","root-id"])],2)):V("v-if",!0),h.comment.children?(x(),S("div",B5,[(x(!0),S(me,null,Re(h.comment.children,m=>(x(),de(C,{key:m.objectId,comment:m,reply:h.reply,edit:h.edit,"root-id":h.rootId,onLog:y[9]||(y[9]=v=>h.$emit("log")),onDelete:y[10]||(y[10]=v=>h.$emit("delete",v)),onEdit:y[11]||(y[11]=v=>h.$emit("edit",v)),onLike:y[12]||(y[12]=v=>h.$emit("like",v)),onReply:y[13]||(y[13]=v=>h.$emit("reply",v)),onStatus:y[14]||(y[14]=v=>h.$emit("status",v)),onSticky:y[15]||(y[15]=v=>h.$emit("sticky",v)),onSubmit:y[16]||(y[16]=v=>h.$emit("submit",v))},null,8,["comment","reply","edit","root-id"]))),128))])):V("v-if",!0)])],8,m5)}}}),[["__file","CommentCard.vue"]]);const j5="2.15.8",H5={"data-waline":""},V5={class:"wl-meta-head"},U5={class:"wl-count"},G5=["textContent"],q5={class:"wl-sort"},W5=["onClick"],K5={class:"wl-cards"},Z5={key:1,class:"wl-operation"},Q5=["textContent"],X5={key:0,class:"wl-loading"},Y5=["textContent"],J5={key:2,class:"wl-operation"},e8=["textContent"],t8={key:3,class:"wl-power"},n8=$("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noopener noreferrer"}," Waline ",-1);var u8=fe({__name:"WalineComment",props:["serverURL","path","meta","requiredMeta","dark","commentSorting","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","search","copyright","recaptchaV3Key","turnstileKey","reaction"],setup(e){const t=e,n={latest:"insertedAt_desc",oldest:"insertedAt_asc",hottest:"like_desc"},u=Object.keys(n),r=is(),o=Vf(),i=Q("loading"),a=Q(0),s=Q(1),l=Q(0),c=B(()=>(({serverURL:I,path:R=location.pathname,lang:K=typeof navigator>"u"?"en-US":navigator.language,locale:U,emoji:M=Xl,meta:J=["nick","mail","link"],requiredMeta:q=[],dark:ie=!1,pageSize:ce=10,wordLimit:ve,imageUploader:he,highlighter:Ie,texRenderer:Le,copyright:be=!0,login:ye="enable",search:H,reaction:ne,recaptchaV3Key:ee="",turnstileKey:O="",commentSorting:z="latest",...Y})=>({serverURL:_6(I),path:f6(R),locale:{...Pi[K]||Pi["en-US"],...typeof U=="object"?U:{}},wordLimit:w6(ve),meta:Ql(J),requiredMeta:Ql(q),imageUploader:Ri(he,m6),highlighter:Ri(Ie,y6),texRenderer:Ri(Le,g6),lang:Object.keys(Pi).includes(K)?K:"en-US",dark:ie,emoji:typeof M=="boolean"?M?Xl:[]:M,pageSize:ce,login:ye,copyright:be,search:H!==!1&&(typeof H=="object"?H:b6(K)),recaptchaV3Key:ee,turnstileKey:O,reaction:Array.isArray(ne)?ne:ne===!0?h6:[],commentSorting:z,...Y}))(t)),d=Q(c.value.commentSorting),f=Q([]),p=Q(null),g=Q(null),h=B(()=>{return typeof(I=c.value.dark)=="string"?I==="auto"?`@media(prefers-color-scheme:dark){body${Fi}}`:`${I}${Fi}`:I===!0?`:root${Fi}`:"";var I}),y=B(()=>c.value.locale);let C;Rf(h,{id:"waline-darkmode"});const b=I=>{var J;const{serverURL:R,path:K,pageSize:U}=c.value,M=new AbortController;i.value="loading",C==null||C(),(({serverURL:q,lang:ie,path:ce,page:ve,pageSize:he,sortBy:Ie,signal:Le,token:be})=>{const ye={};return be&&(ye.Authorization=`Bearer ${be}`),fetch(`${q}/comment?path=${encodeURIComponent(ce)}&pageSize=${he}&page=${ve}&lang=${ie}&sortBy=${Ie}`,{signal:Le,headers:ye}).then(H=>H.json()).then(H=>ba(H,"Get comment data"))})({serverURL:R,lang:c.value.lang,path:K,pageSize:U,sortBy:n[d.value],page:I,signal:M.signal,token:(J=r.value)==null?void 0:J.token}).then(q=>{i.value="success",a.value=q.count,f.value.push(...q.data),s.value=I,l.value=q.totalPages}).catch(q=>{q.name!=="AbortError"&&(console.error(q.message),i.value="error")}),C=M.abort.bind(M)},m=()=>b(s.value+1),v=()=>{a.value=0,f.value=[],b(1)},T=I=>{p.value=I},P=I=>{g.value=I},A=I=>{if(g.value)g.value.comment=I.comment,g.value.orig=I.orig;else if(I.rid){const R=f.value.find(({objectId:K})=>K===I.rid);if(!R)return;Array.isArray(R.children)||(R.children=[]),R.children.push(I)}else f.value.unshift(I),a.value+=1},k=async({comment:I,status:R})=>{var M;if(I.status===R)return;const{serverURL:K,lang:U}=c.value;await mo({serverURL:K,lang:U,token:(M=r.value)==null?void 0:M.token,objectId:I.objectId,comment:{status:R}}),I.status=R},L=async I=>{var U;if(I.rid)return;const{serverURL:R,lang:K}=c.value;await mo({serverURL:R,lang:K,token:(U=r.value)==null?void 0:U.token,objectId:I.objectId,comment:{sticky:I.sticky?0:1}}),I.sticky=!I.sticky},D=async({objectId:I})=>{var U;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:R,lang:K}=c.value;await(({serverURL:M,lang:J,token:q,objectId:ie})=>fetch(`${M}/comment/${ie}?lang=${J}`,{method:"DELETE",headers:{Authorization:`Bearer ${q}`}}).then(ce=>ce.json()).then(ce=>ba(ce,"Delete comment")))({serverURL:R,lang:K,token:(U=r.value)==null?void 0:U.token,objectId:I}),f.value.some((M,J)=>M.objectId===I?(f.value=f.value.filter((q,ie)=>ie!==J),!0):M.children.some((q,ie)=>q.objectId===I&&(f.value[J].children=M.children.filter((ce,ve)=>ve!==ie),!0)))},N=async I=>{var J;const{serverURL:R,lang:K}=c.value,{objectId:U}=I,M=o.value.includes(U);await mo({serverURL:R,lang:K,objectId:U,token:(J=r.value)==null?void 0:J.token,comment:{like:!M}}),M?o.value=o.value.filter(q=>q!==U):(o.value=[...o.value,U],o.value.length>50&&(o.value=o.value.slice(-50))),I.like=(I.like||0)+(M?-1:1)};return Ot("config",c),Fe(()=>{Pe(()=>[t.serverURL,t.path],()=>v(),{immediate:!0})}),Vt(()=>C==null?void 0:C()),(I,R)=>(x(),S("div",H5,[re(s6),p.value?V("v-if",!0):(x(),de(Kf,{key:0,onLog:v,onSubmit:A})),$("div",V5,[$("div",U5,[a.value?(x(),S("span",{key:0,class:"wl-num",textContent:oe(a.value)},null,8,G5)):V("v-if",!0),Qe(" "+oe(y.value.comment),1)]),$("ul",q5,[(x(!0),S(me,null,Re(E(u),K=>(x(),S("li",{key:K,class:ke([K===d.value?"active":""]),onClick:U=>(M=>{d.value!==M&&(d.value=M,v())})(K)},oe(y.value[K]),11,W5))),128))])]),$("div",K5,[(x(!0),S(me,null,Re(f.value,K=>(x(),de(N5,{key:K.objectId,"root-id":K.objectId,comment:K,reply:p.value,edit:g.value,onLog:v,onReply:T,onEdit:P,onSubmit:A,onStatus:k,onDelete:D,onSticky:L,onLike:N},null,8,["root-id","comment","reply","edit"]))),128))]),i.value==="error"?(x(),S("div",Z5,[$("button",{type:"button",class:"wl-btn",onClick:v,textContent:oe(y.value.refresh)},null,8,Q5)])):(x(),S(me,{key:2},[i.value==="loading"?(x(),S("div",X5,[re(E(mr),{size:30})])):f.value.length?s.value<l.value?(x(),S("div",J5,[$("button",{type:"button",class:"wl-btn",onClick:m,textContent:oe(y.value.more)},null,8,e8)])):V("v-if",!0):(x(),S("div",{key:1,class:"wl-empty",textContent:oe(y.value.sofa)},null,8,Y5))],64)),c.value.copyright?(x(),S("div",t8,[Qe(" Powered by "),n8,Qe(" v"+oe(E(j5)),1)])):V("v-if",!0)]))}}),r8=Pr(u8,[["__file","WalineComment.vue"]]);const uc=fe({name:"Waline",props:{options:{type:Object,default(){return{}}}},setup(e){const{options:t}=gt(e),n=Jo(),u=Mn(),r=B(()=>{var o;return{lang:n.value||"zh-CN",dark:'html[class="dark"]',path:Nt((o=u.value)==null?void 0:o.path),...t.value,pageview:!1}});return()=>Z("div",{class:"reco-waline-wrapper"},Z(r8,r.value))}}),o8=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],i8=fe({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(e){const t=Q(!1);return Fe(()=>{t.value=!0,X(()=>import("./giscus-aTimukGI-DWEKOTfS.js"),[])}),(n,u)=>t.value?(x(),S("giscus-widget",{key:0,id:n.id,host:n.host,repo:n.repo,repoid:n.repoId,category:n.category,categoryid:n.categoryId,mapping:n.mapping,term:n.term,strict:n.strict,reactionsenabled:n.reactionsEnabled,emitmetadata:n.emitMetadata,inputposition:n.inputPosition,theme:n.theme,lang:n.lang,loading:n.loading},null,8,o8)):V("",!0)}}),rc=fe({name:"Giscus",props:{options:{type:Object,default(){return{}}}},setup(e){const{options:t}=gt(e),n=Q("light_tritanopia");Fe(async()=>{const r=function(){var a;const i=(a=document.documentElement.classList)==null?void 0:a.contains("dark");{const s=window.location.protocol+"//"+window.location.host;n.value=s+`/assets/giscus-theme${i?"-dark":""}.css`}};new MutationObserver(r).observe(document.documentElement,{attributes:!0}),r()});const u=B(()=>({lang:"zh-CN",host:"https://giscus.app",theme:n.value,...t.value}));return()=>Z("div",{class:"reco-giscus-wrapper"},Z(i8,u.value))}}),a8=fe({name:"RecoComments",components:{Valine:Rl,Waline:uc,Giscus:rc},props:{hideComments:{type:Boolean,default:!0}},setup(e){const{solution:t,options:n}=Fu(),{hideComments:u}=gt(e);let r;switch(t.value){case"valine":r=Rl;break;case"waline":r=uc;break;case"giscus":r=rc;break;default:r="";break}return()=>r?u.value?t.value==="valine"?Z(r,{options:n.value,style:"display: none"}):null:Z(r,{options:n.value}):null}}),s8=fe({name:"ValineViews",props:{idVal:String,numStyle:{type:Object,default:()=>({})},flagTitle:{type:String,default:"Your Article Title"}},setup(e){const t=Je(),{idVal:n,numStyle:u,flagTitle:r}=gt(e);return()=>Z("span",{id:n.value||t.path,class:"leancloud-visitors","data-flag-title":r.value},Z("a",{class:"leancloud-visitors-count",style:u.value}))}}),l8=["nick","mail","link"],oc=e=>e.filter(t=>l8.includes(t)),ic=["//unpkg.com/@waline/emojis@1.1.0/weibo"],c8="en-US",d8=["//unpkg.com/@waline/emojis/tieba/tieba_agree.png","//unpkg.com/@waline/emojis/tieba/tieba_look_down.png","//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png","//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png","//unpkg.com/@waline/emojis/tieba/tieba_awkward.png","//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"],f8=e=>new Promise((t,n)=>{if(e.size>128e3)return n(new Error("File too large! File size limit 128KB"));const u=new FileReader;u.readAsDataURL(e),u.onload=()=>{var r;return t(((r=u.result)==null?void 0:r.toString())||"")},u.onerror=n}),p8=e=>e===!0?'<p class="wl-tex">TeX is not available in preview</p>':'<span class="wl-tex">TeX is not available in preview</span>',h8=e=>{const t=async(n,u={})=>fetch(`https://api.giphy.com/v1/gifs/${n}?${new URLSearchParams({lang:e,limit:"20",rating:"g",api_key:"6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp",...u}).toString()}`).then(r=>r.json()).then(({data:r})=>r.map(o=>({title:o.title,src:o.images.downsized_medium.url})));return{search:n=>t("search",{q:n,offset:"0"}),default:()=>t("trending",{}),more:(n,u=0)=>t("search",{q:n,offset:u.toString()})}},m8=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),ac=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],Mi={},g8=e=>{let t=0;return e.replace(m8,(n,u,r)=>{if(r)return`<span style="color: slategray">${r}</span>`;if(u==="<")return"&lt;";let o;Mi[u]?o=Mi[u]:(o=ac[t],Mi[u]=o);const i=`<span style="color: #${o}">${u}</span>`;return t=++t%ac.length,i})},b8=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder","profile","approved","waiting","spam","unsticky","oldest","latest","hottest","reactionTitle"],Mu=e=>Object.fromEntries(e.map((t,n)=>[b8[n],t]));var zi=Mu(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF","Profile","Approved","Waiting","Spam","Unsticky","Oldest","Latest","Hottest","What do you think?"]),Jr=Mu(["ニックネーム","3バイト以上のニックネームをご入力ください.","メールアドレス","メールアドレスをご確認ください.","サイト","オプション","ここにコメント","コメントしましょう~","提出する","Like","Cancel like","返信する","キャンセル","コメント","更新","さらに読み込む","プレビュー","絵文字","画像をアップロード","秒前","分前","時間前","日前","たっだ今","アップロード","ログインする","ログアウト","管理者","トップに置く","ワード",`コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2`,"匿名","うえにん","なかにん","しもおし","特にしもおし","かげ","なぬし","GIF","探す GIF","個人情報","承認済み","待っている","スパム","べたつかない","逆順","正順","人気順","どう思いますか？"]),sc=Mu(["Apelido","Apelido não pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endereço de e-mail.","Website","Opcional","Comente aqui...","Nenhum comentário, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Comentários","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atrás","minutos atrás","horas atrás","dias atrás","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2`,"Anônimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF","informação pessoal","Aprovado","Espera","Spam","Unsticky","Mais velho","Mais recentes","Mais quente","O que você acha?"]),Bi=Mu(["Псевдоним","Никнейм не может быть меньше 3 байт.","Эл. адрес","Пожалуйста, подтвердите адрес вашей электронной почты.","Веб-сайт","Необязательный","Комментарий здесь...","Пока нет комментариев.","Отправить","Like","Cancel like","Отвечать","Отменить ответ","Комментарии","Обновить","Загрузи больше...","Превью","эмодзи","Загрузить изображение","секунд назад","несколько минут назад","несколько часов назад","дней назад","прямо сейчас","Загрузка","Авторизоваться","Выход из системы","Админ","Липкий","Слова",`Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2`,"Анонимный","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Поиск GIF","Персональные данные","Одобренный","Ожидающий","Спам","Нелипкий","самый старый","последний","самый горячий","Что вы думаете?"]),Ni=Mu(["昵称","昵称不能少于3个字符","邮箱","请填写正确的邮件地址","网址","可选","欢迎评论","来发评论吧~","提交","喜欢","取消喜欢","回复","取消回复","评论","刷新","加载更多...","预览","表情","上传图片","秒前","分钟前","小时前","天前","刚刚","正在上传","登录","退出","博主","置顶","字",`评论字数应在 $0 到 $1 字之间！
当前字数：$2`,"匿名","潜水","冒泡","吐槽","活跃","话痨","传说","表情包","搜索表情包","个人资料","通过","待审核","垃圾","取消置顶","按倒序","按正序","按热度","你认为这篇文章怎么样？"]),lc=Mu(["暱稱","暱稱不能少於3個字元","郵箱","請填寫正確的郵件地址","網址","可選","歡迎留言","來發留言吧~","送出","喜歡","取消喜歡","回覆","取消回覆","留言","重整","載入更多...","預覽","表情","上傳圖片","秒前","分鐘前","小時前","天前","剛剛","正在上傳","登入","登出","管理者","置頂","字",`留言字數應在 $0 到 $1 字之間！
目前字數：$2`,"匿名","潛水","冒泡","吐槽","活躍","多話","傳說","表情包","搜尋表情包","個人資料","通過","待審核","垃圾","取消置頂","最早","最新","熱門","你認為這篇文章怎麼樣？"]);const ji={zh:Ni,"zh-cn":Ni,"zh-CN":Ni,"zh-tw":lc,"zh-TW":lc,en:zi,"en-US":zi,"en-us":zi,jp:Jr,ja:Jr,"jp-jp":Jr,"jp-JP":Jr,"pt-br":sc,"pt-BR":sc,ru:Bi,"ru-ru":Bi,"ru-RU":Bi},Zf={"Content-Type":"application/json"},va=(e,t="")=>{if(typeof e=="object"&&e.errno)throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},Qf=({serverURL:e,lang:t,paths:n,type:u,signal:r})=>fetch(`${e}/article?path=${encodeURIComponent(n.join(","))}&type=${encodeURIComponent(u.join(","))}&lang=${t}`,{signal:r}).then(o=>o.json()),ya=({serverURL:e,lang:t,path:n,type:u,action:r})=>fetch(`${e}/article?lang=${t}`,{method:"POST",headers:Zf,body:JSON.stringify({path:n,type:u,action:r})}).then(o=>o.json()),go=({serverURL:e,lang:t,token:n,objectId:u,comment:r})=>fetch(`${e}/comment/${u}?lang=${t}`,{method:"PUT",headers:{...Zf,Authorization:`Bearer ${n}`},body:JSON.stringify(r)}).then(o=>o.json()).then(o=>va(o,"Update comment")),v8=e=>{try{e=decodeURI(e)}catch{}return e},Xf=(e="")=>e.replace(/\/$/u,""),Yf=e=>/^(https?:)?\/\//.test(e),xa=e=>{const t=Xf(e);return Yf(t)?t:`https://${t}`},y8=e=>Array.isArray(e)?e:!!e&&[0,e],Hi=(e,t)=>typeof e=="function"?e:e!==!1&&t,Vi="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",Ui=(e,t)=>{let n=e.toString();for(;n.length<t;)n="0"+n;return n},x8=(e,t,n)=>{if(!e)return"";const u=typeof e=="string"?new Date(e.indexOf(" ")!==-1?e.replace(/-/g,"/"):e):e,r=t.getTime()-u.getTime(),o=Math.floor(r/864e5);if(o===0){const i=r%864e5,a=Math.floor(i/36e5);if(a===0){const s=i%36e5,l=Math.floor(s/6e4);if(l===0){const c=s%6e4;return`${Math.round(c/1e3)} ${n.seconds}`}return`${l} ${n.minutes}`}return`${a} ${n.hours}`}return o<0?n.now:o<8?`${o} ${n.days}`:(i=>{const a=Ui(i.getDate(),2),s=Ui(i.getMonth()+1,2);return`${Ui(i.getFullYear(),2)}-${s}-${a}`})(u)},_8=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,w8=e=>{const t=jt("WALINE_EMOJI",{}),n=!!/@[0-9]+\.[0-9]+\.[0-9]+/.test(e);if(n){const u=t.value[e];if(u)return Promise.resolve(u)}return fetch(`${e}/info.json`).then(u=>u.json()).then(u=>{const r={folder:e,...u};return n&&(t.value[e]=r),r})},cc=(e,t="",n="",u="")=>`${t?`${t}/`:""}${n}${e}${u?`.${u}`:""}`,k8=e=>{e.name!=="AbortError"&&console.error(e.message)},C8=e=>e.type.includes("image"),dc=e=>{const t=Array.from(e).find(C8);return t?t.getAsFile():null},E8=/\$.*?\$/,A8=/^\$(.*?)\$/,S8=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,Jf=(e="",t={})=>e.replace(/:(.+?):/g,(n,u)=>t[u]?`<img class="wl-emoji" src="${t[u]}" alt="${u}">`:n),T8=(e,{emojiMap:t,highlighter:n,texRenderer:u})=>{if(we.setOptions({highlight:n||void 0,breaks:!0,smartLists:!0,smartypants:!0}),u){const r=(o=>[{name:"blockMath",level:"block",tokenizer(i){const a=S8.exec(i);if(a!==null)return{type:"html",raw:a[0],text:o(!0,a[1])}}},{name:"inlineMath",level:"inline",start(i){const a=i.search(E8);return a!==-1?a:i.length},tokenizer(i){const a=A8.exec(i);if(a!==null)return{type:"html",raw:a[0],text:o(!1,a[1])}}}])(u);we.use({extensions:r})}return we.parse(Jf(e,t))},fc=e=>e.dataset.path||e.getAttribute("id"),pc=({size:e})=>Z("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:e,height:e},[Z("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),Z("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),I8=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},Z("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),L8=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},Z("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),$8=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[Z("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),Z("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),D8=({active:e=!1})=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[Z("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(e?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:e?"red":"currentColor"})]),P8=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[Z("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),Z("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),R8=()=>Z("svg",{width:"16",height:"16",ariaHidden:"true"},Z("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),F8=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},Z("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),O8=()=>Z("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},Z("path",{d:"M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z",fill:"currentColor"})),M8=()=>Z("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},Z("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"})),br=({size:e=100})=>Z("svg",{width:e,height:e,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},Z("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},Z("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}))),z8=()=>Z("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[Z("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),Z("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})]);let hc=null;const ep=()=>hc||(hc=jt("WALINE_LIKE",[]));let mc=null;const B8=()=>mc??(mc=jt("WALINE_REACTION",{}));var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tp={},xu={},vr={},N8=Fo&&Fo.__awaiter||function(e,t,n,u){return new(n||(n=Promise))(function(r,o){function i(l){try{s(u.next(l))}catch(c){o(c)}}function a(l){try{s(u.throw(l))}catch(c){o(c)}}function s(l){var c;l.done?r(l.value):(c=l.value,c instanceof n?c:new n(function(d){d(c)})).then(i,a)}s((u=u.apply(e,t||[])).next())})},j8=Fo&&Fo.__generator||function(e,t){var n,u,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(s){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,u&&(r=2&c[0]?u.return:c[0]?u.throw||((r=u.return)&&r.call(u),0):u.next)&&!(r=r.call(u,c[1])).done)return r;switch(u=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,u=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(r=i.trys,!((r=r.length>0&&r[r.length-1])||c[0]!==6&&c[0]!==2)){i=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(c[0]===6&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(d){c=[6,d],u=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([s,l])}}};Object.defineProperty(vr,"__esModule",{value:!0}),vr.ReCaptchaInstance=void 0;var H8=function(){function e(t,n,u){this.siteKey=t,this.recaptchaID=n,this.recaptcha=u,this.styleContainer=null}return e.prototype.execute=function(t){return N8(this,void 0,void 0,function(){return j8(this,function(n){return[2,this.recaptcha.enterprise?this.recaptcha.enterprise.execute(this.recaptchaID,{action:t}):this.recaptcha.execute(this.recaptchaID,{action:t})]})})},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){this.styleContainer===null&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{visibility:hidden !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){this.styleContainer!==null&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();vr.ReCaptchaInstance=H8,Object.defineProperty(xu,"__esModule",{value:!0}),xu.getInstance=xu.load=void 0;var In,V8=vr;(function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"})(In||(In={}));var gc=function(){function e(){}return e.load=function(t,n){if(n===void 0&&(n={}),typeof document>"u")return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===In.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===In.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise(function(r,o){e.successfulLoadingConsumers.push(function(i){return r(i)}),e.errorLoadingRunnable.push(function(i){return o(i)})});e.instanceSiteKey=t,e.setLoadingState(In.LOADING);var u=new e;return new Promise(function(r,o){u.loadScript(t,n.useRecaptchaNet||!1,n.useEnterprise||!1,n.renderParameters?n.renderParameters:{},n.customUrl).then(function(){e.setLoadingState(In.LOADED);var i=u.doExplicitRender(grecaptcha,t,n.explicitRenderParameters?n.explicitRenderParameters:{},n.useEnterprise||!1),a=new V8.ReCaptchaInstance(t,i,grecaptcha);e.successfulLoadingConsumers.forEach(function(s){return s(a)}),e.successfulLoadingConsumers=[],n.autoHideBadge&&a.hideBadge(),e.instance=a,r(a)}).catch(function(i){e.errorLoadingRunnable.forEach(function(a){return a(i)}),e.errorLoadingRunnable=[],o(i)})})},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return e.loadingState===null?In.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,n,u,r,o){var i=this;n===void 0&&(n=!1),u===void 0&&(u=!1),r===void 0&&(r={}),o===void 0&&(o="");var a=document.createElement("script");a.setAttribute("recaptcha-v3-script","");var s="https://www.google.com/recaptcha/api.js";n&&(s=u?"https://recaptcha.net/recaptcha/enterprise.js":"https://recaptcha.net/recaptcha/api.js"),u&&(s="https://www.google.com/recaptcha/enterprise.js"),o&&(s=o),r.render&&(r.render=void 0);var l=this.buildQueryString(r);return a.src=s+"?render=explicit"+l,new Promise(function(c,d){a.addEventListener("load",i.waitForScriptToLoad(function(){c(a)},u),!1),a.onerror=function(f){e.setLoadingState(In.NOT_LOADED),d(f)},document.head.appendChild(a)})},e.prototype.buildQueryString=function(t){return Object.keys(t).length<1?"":"&"+Object.keys(t).filter(function(n){return!!t[n]}).map(function(n){return n+"="+t[n]}).join("&")},e.prototype.waitForScriptToLoad=function(t,n){var u=this;return function(){window.grecaptcha===void 0?setTimeout(function(){u.waitForScriptToLoad(t,n)},e.SCRIPT_LOAD_DELAY):n?window.grecaptcha.enterprise.ready(function(){t()}):window.grecaptcha.ready(function(){t()})}},e.prototype.doExplicitRender=function(t,n,u,r){var o={sitekey:n,badge:u.badge,size:u.size,tabindex:u.tabindex};return u.container?r?t.enterprise.render(u.container,o):t.render(u.container,o):r?t.enterprise.render(o):t.render(o)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();xu.load=gc.load,xu.getInstance=gc.getInstance,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ReCaptchaInstance=e.getInstance=e.load=void 0;var t=xu;Object.defineProperty(e,"load",{enumerable:!0,get:function(){return t.load}}),Object.defineProperty(e,"getInstance",{enumerable:!0,get:function(){return t.getInstance}});var n=vr;Object.defineProperty(e,"ReCaptchaInstance",{enumerable:!0,get:function(){return n.ReCaptchaInstance}})}(tp);const bc={};let vc=null;const as=()=>vc??(vc=jt("WALINE_USER",{})),U8={key:0,class:"wl-reaction"},G8=["textContent"],q8={class:"wl-reaction-list"},W8=["onClick"],K8={class:"wl-reaction-img"},Z8=["src","alt"],Q8=["textContent"],X8=["textContent"];var Y8=fe({__name:"ArticleReaction",setup(e,{expose:t}){t();const n=B8(),u=He("config"),r=Q(-1),o=Q([]),i=B(()=>u.value.locale),a=B(()=>u.value.reaction.length>0),s=B(()=>{const{reaction:c,path:d}=u.value;return c.map((f,p)=>({icon:f,desc:i.value[`reaction${p}`],active:n.value[d]===p}))});let l;return Fe(()=>{Pe(()=>[u.value.serverURL,u.value.path],()=>{(async()=>{if(a.value){const{serverURL:c,lang:d,path:f,reaction:p}=u.value,g=new AbortController;l=g.abort.bind(g);const h=await Qf({serverURL:c,lang:d,paths:[f],type:p.map((y,C)=>`reaction${C}`),signal:g.signal});if(Array.isArray(h)||typeof h=="number")return;o.value=p.map((y,C)=>h[`reaction${C}`])}})()},{immediate:!0})}),Vt(()=>l==null?void 0:l()),(c,d)=>s.value.length?(x(),S("div",U8,[$("div",{class:"wl-reaction-title",textContent:oe(i.value.reactionTitle)},null,8,G8),$("ul",q8,[(x(!0),S(me,null,Re(s.value,({active:f,icon:p,desc:g},h)=>(x(),S("li",{key:h,class:ke(["wl-reaction-item",{active:f}]),onClick:y=>(async C=>{if(r.value===-1){const{serverURL:b,lang:m,path:v}=u.value,T=n.value[v];r.value=C,T!==void 0&&(await ya({serverURL:b,lang:m,path:v,type:`reaction${T}`,action:"desc"}),o.value[T]=Math.max(o.value[T]-1,0)),T!==C&&(await ya({serverURL:b,lang:m,path:v,type:`reaction${C}`}),o.value[C]=(o.value[C]||0)+1),T===C?delete n.value[v]:n.value[v]=C,r.value=-1}})(h)},[$("div",K8,[$("img",{src:p,alt:g},null,8,Z8),r.value===h?(x(),de(E(br),{key:0,class:"wl-reaction-loading"})):(x(),S("div",{key:1,class:"wl-reaction-votes",textContent:oe(o.value[h]||0)},null,8,Q8))]),$("div",{class:"wl-reaction-text",textContent:oe(g)},null,8,X8)],10,W8))),128))])])):V("v-if",!0)}}),Rr=(e,t)=>{const n=e.__vccOpts||e;for(const[u,r]of t)n[u]=r;return n},J8=Rr(Y8,[["__file","ArticleReaction.vue"]]);const e3=["data-index"],t3=["src","title","onClick"];var n3=Rr(fe({__name:"ImageWall",props:{items:{default:()=>[]},columnWidth:{default:300},gap:{default:0}},emits:["insert"],setup(e,{expose:t}){const n=e;t();let u=null;const r=Q(null),o=Q({}),i=Q([]),a=()=>{const d=Math.floor((r.value.getBoundingClientRect().width+n.gap)/(n.columnWidth+n.gap));return d>0?d:1},s=async d=>{var p;if(d>=n.items.length)return;await yn();const f=Array.from(((p=r.value)==null?void 0:p.children)||[]).reduce((g,h)=>h.getBoundingClientRect().height<g.getBoundingClientRect().height?h:g);i.value[Number(f.dataset.index)].push(d),await s(d+1)},l=async(d=!1)=>{if(i.value.length===a()&&!d)return;var f;i.value=(f=a(),new Array(f).fill(null).map(()=>[]));const p=window.scrollY;await s(0),window.scrollTo({top:p})},c=d=>{o.value[d.target.src]=!0};return Fe(()=>{l(!0),u=new ResizeObserver(()=>{l()}),u.observe(r.value),Pe(()=>[n.items],()=>{o.value={},l(!0)}),Pe(()=>[n.columnWidth,n.gap],()=>{l()})}),Ir(()=>u.unobserve(r.value)),(d,f)=>(x(),S("div",{ref_key:"wall",ref:r,class:"wl-gallery",style:ct({gap:`${d.gap}px`})},[(x(!0),S(me,null,Re(i.value,(p,g)=>(x(),S("div",{key:g,class:"wl-gallery-column","data-index":g,style:ct({gap:`${d.gap}px`})},[(x(!0),S(me,null,Re(p,h=>(x(),S(me,{key:h},[o.value[d.items[h].src]?V("v-if",!0):(x(),de(E(br),{key:0,size:36,style:{margin:"20px auto"}})),$("img",{class:"wl-gallery-item",src:d.items[h].src,title:d.items[h].title,loading:"lazy",onLoad:c,onClick:y=>d.$emit("insert",`![](${d.items[h].src})`)},null,40,t3)],64))),128))],12,e3))),128))],4))}}),[["__file","ImageWall.vue"]]);const u3={class:"wl-comment"},r3={key:0,class:"wl-login-info"},o3={class:"wl-avatar"},i3=["title"],a3=["title"],s3=["src"],l3=["title","textContent"],c3={class:"wl-panel"},d3=["for","textContent"],f3=["id","onUpdate:modelValue","name","type"],p3=["placeholder"],h3={class:"wl-preview"},m3=$("hr",null,null,-1),g3=["innerHTML"],b3={class:"wl-footer"},v3={class:"wl-actions"},y3={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noopener noreferrer"},x3=["title"],_3=["title"],w3=["title"],k3=["title"],C3={class:"wl-info"},E3=$("div",{class:"wl-captcha-container"},null,-1),A3={class:"wl-text-number"},S3={key:0},T3=["textContent"],I3=["textContent"],L3=["disabled"],$3=["placeholder"],D3={key:1,class:"wl-loading"},P3={key:0,class:"wl-tab-wrapper"},R3=["title","onClick"],F3=["src","alt"],O3={key:0,class:"wl-tabs"},M3=["onClick"],z3=["src","alt","title"],B3=["title"];var N3=fe({__name:"CommentBox",props:{edit:{default:null},rootId:{default:""},replyId:{default:""},replyUser:{default:""}},emits:["log","cancelEdit","cancelReply","submit"],setup(e,{expose:t,emit:n}){const u=e;t();const r=He("config"),o=jt("WALINE_COMMENT_BOX_EDITOR",""),i=jt("WALINE_USER_META",{nick:"",mail:"",link:""}),a=as(),s=Q({}),l=Q(null),c=Q(null),d=Q(null),f=Q(null),p=Q(null),g=Q(null),h=Q(null),y=Q({tabs:[],map:{}}),C=Q(0),b=Q(!1),m=Q(!1),v=Q(!1),T=Q(""),P=Q(0),A=bn({loading:!0,list:[]}),k=Q(0),L=Q(!1),D=Q(""),N=Q(!1),I=Q(!1),R=B(()=>r.value.locale),K=B(()=>{var O;return!!((O=a.value)!=null&&O.token)}),U=B(()=>r.value.imageUploader!==!1),M=O=>{const z=l.value,Y=z.selectionStart,w=z.selectionEnd||0,_=z.scrollTop;o.value=z.value.substring(0,Y)+O+z.value.substring(w,z.value.length),z.focus(),z.selectionStart=Y+O.length,z.selectionEnd=Y+O.length,z.scrollTop=_},J=O=>{const z=O.key;(O.ctrlKey||O.metaKey)&&z==="Enter"&&he()},q=O=>{const z=`![${r.value.locale.uploading} ${O.name}]()`;return M(z),N.value=!0,Promise.resolve().then(()=>r.value.imageUploader(O)).then(Y=>{o.value=o.value.replace(z,`\r
![${O.name}](${Y})`)}).catch(Y=>{alert(Y.message),o.value=o.value.replace(z,"")}).then(()=>{N.value=!1})},ie=O=>{var z;if((z=O.dataTransfer)!=null&&z.items){const Y=dc(O.dataTransfer.items);Y&&U.value&&(q(Y),O.preventDefault())}},ce=O=>{if(O.clipboardData){const z=dc(O.clipboardData.items);z&&U.value&&q(z)}},ve=()=>{const O=c.value;O.files&&U.value&&q(O.files[0]).then(()=>{O.value=""})},he=async()=>{var se,te,xe,pe,_e,Se;const{serverURL:O,lang:z,login:Y,wordLimit:w,requiredMeta:_,recaptchaV3Key:F,turnstileKey:G}=r.value,j=await(async()=>{if(!navigator)return"";const{userAgentData:Ee}=navigator;let $e=navigator.userAgent;if(!Ee||Ee.platform!=="Windows")return $e;const{platformVersion:Te}=await Ee.getHighEntropyValues(["platformVersion"]);return Te&&parseInt(Te.split(".")[0])>=13&&($e=$e.replace("Windows NT 10.0","Windows NT 11.0")),$e})(),W={comment:D.value,nick:i.value.nick,mail:i.value.mail,link:i.value.link,url:r.value.path,ua:j};if((se=a.value)!=null&&se.token)W.nick=a.value.display_name,W.mail=a.value.email,W.link=a.value.url;else{if(Y==="force")return;if(_.indexOf("nick")>-1&&!W.nick)return(te=s.value.nick)==null||te.focus(),alert(R.value.nickError);if(_.indexOf("mail")>-1&&!W.mail||W.mail&&(ae=W.mail,!_8.test(ae)))return(xe=s.value.mail)==null||xe.focus(),alert(R.value.mailError);W.nick||(W.nick=R.value.anonymous)}var ae;if(W.comment){if(!L.value)return alert(R.value.wordHint.replace("$0",w[0].toString()).replace("$1",w[1].toString()).replace("$2",P.value.toString()));W.comment=Jf(W.comment,y.value.map),u.replyId&&u.rootId&&(W.pid=u.replyId,W.rid=u.rootId,W.at=u.replyUser),N.value=!0;try{F&&(W.recaptchaV3=await(Te=>{const Ze=bc[Te]??(bc[Te]=tp.load(Te,{useRecaptchaNet:!0,autoHideBadge:!0}));return{execute:Oe=>Ze.then(et=>et.execute(Oe))}})(F).execute("social")),G&&(W.turnstile=await(ue=G,{execute:async Te=>{const{load:Ze}=Pf("https://challenges.cloudflare.com/turnstile/v0/api.js",void 0,{async:!1});await Ze();const Oe=window==null?void 0:window.turnstile;return new Promise(et=>{Oe==null||Oe.ready(()=>{Oe==null||Oe.render(".wl-captcha-container",{sitekey:ue,action:Te,size:"compact",callback:et})})})}}).execute("social"));const Ee={serverURL:O,lang:z,token:(pe=a.value)==null?void 0:pe.token,comment:W},$e=await(u.edit?go({objectId:u.edit.objectId,...Ee}):(({serverURL:Te,lang:Ze,token:Oe,comment:et})=>{const rt={"Content-Type":"application/json"};return Oe&&(rt.Authorization=`Bearer ${Oe}`),fetch(`${Te}/comment?lang=${Ze}`,{method:"POST",headers:rt,body:JSON.stringify(et)}).then(rn=>rn.json())})(Ee));if(N.value=!1,$e.errmsg)return alert($e.errmsg);n("submit",$e.data),o.value="",T.value="",u.replyId&&n("cancelReply"),(_e=u.edit)!=null&&_e.objectId&&n("cancelEdit")}catch(Ee){N.value=!1,alert(Ee.message)}var ue}else(Se=l.value)==null||Se.focus()},Ie=O=>{O.preventDefault();const{lang:z,serverURL:Y}=r.value;(({lang:w,serverURL:_})=>{const F=(window.innerWidth-450)/2,G=(window.innerHeight-450)/2,j=window.open(`${_}/ui/login?lng=${encodeURIComponent(w)}`,"_blank",`width=450,height=450,left=${F},top=${G},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);return j==null||j.postMessage({type:"TOKEN",data:null},"*"),new Promise(W=>{const ae=({data:ue})=>{ue&&typeof ue=="object"&&ue.type==="userInfo"&&ue.data.token&&(j==null||j.close(),window.removeEventListener("message",ae),W(ue.data))};window.addEventListener("message",ae)})})({serverURL:Y,lang:z}).then(w=>{a.value=w,(w.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(w)),n("log")})},Le=()=>{a.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null"),n("log")},be=O=>{O.preventDefault();const{lang:z,serverURL:Y}=r.value,w=(window.innerWidth-800)/2,_=(window.innerHeight-800)/2,F=new URLSearchParams({lng:z,token:a.value.token}),G=window.open(`${Y}/ui/profile?${F.toString()}`,"_blank",`width=800,height=800,left=${w},top=${_},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);G==null||G.postMessage({type:"TOKEN",data:a.value.token},"*")},ye=O=>{var z,Y,w,_;(z=d.value)!=null&&z.contains(O.target)||(Y=f.value)!=null&&Y.contains(O.target)||(b.value=!1),(w=p.value)!=null&&w.contains(O.target)||(_=g.value)!=null&&_.contains(O.target)||(m.value=!1)},H=async O=>{var j;const{scrollTop:z,clientHeight:Y,scrollHeight:w}=O.target,_=(Y+z)/w,F=r.value.search,G=((j=h.value)==null?void 0:j.value)||"";_<.9||A.loading||I.value||(A.loading=!0,(F.more&&A.list.length?await F.more(G,A.list.length):await F.search(G)).length?A.list=[...A.list,...F.more&&A.list.length?await F.more(G,A.list.length):await F.search(G)]:I.value=!0,A.loading=!1,setTimeout(()=>{O.target.scrollTop=z},50))},ne=Lf(O=>{A.list=[],I.value=!1,H(O)},300);Pe([r,P],([O,z])=>{const{wordLimit:Y}=O;Y?z<Y[0]&&Y[0]!==0?(k.value=Y[0],L.value=!1):z>Y[1]?(k.value=Y[1],L.value=!1):(k.value=Y[1],L.value=!0):(k.value=0,L.value=!0)},{immediate:!0});const ee=({data:O})=>{O&&O.type==="profile"&&(a.value={...a.value,...O.data},[localStorage,sessionStorage].filter(z=>z.getItem("WALINE_USER")).forEach(z=>z.setItem("WALINE_USER",JSON.stringify(a))))};return Fe(()=>{var O;document.body.addEventListener("click",ye),window.addEventListener("message",ee),(O=u.edit)!=null&&O.objectId&&(o.value=u.edit.orig),Pe(m,async z=>{if(!z)return;const Y=r.value.search;h.value&&(h.value.value=""),A.loading=!0,A.list=Y.default?await Y.default():await Y.search(""),A.loading=!1}),Pe(()=>o.value,z=>{const{highlighter:Y,texRenderer:w}=r.value;D.value=z,T.value=T8(z,{emojiMap:y.value.map,highlighter:Y,texRenderer:w}),P.value=(_=>{var F,G;return(((F=(j=>j.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu))(_))==null?void 0:F.reduce((j,W)=>j+(W.trim()===""?0:W.trim().split(/\s+/u).length),0))||0)+(((G=(j=>j.match(/[\u4E00-\u9FD5]/gu))(_))==null?void 0:G.length)||0)})(z),z?$o(l.value):$o.destroy(l.value)},{immediate:!0}),Pe(()=>r.value.emoji,z=>{return(Y=z,Promise.all(Y.map(w=>typeof w=="string"?w8(Xf(w)):Promise.resolve(w))).then(w=>{const _={tabs:[],map:{}};return w.forEach(F=>{const{name:G,folder:j,icon:W,prefix:ae,type:ue,items:se}=F;_.tabs.push({name:G,icon:cc(W,j,ae,ue),items:se.map(te=>{const xe=`${ae||""}${te}`;return _.map[xe]=cc(te,j,ae,ue),xe})})}),_})).then(w=>{y.value=w});var Y},{immediate:!0})}),Vt(()=>{document.body.removeEventListener("click",ye),window.removeEventListener("message",ee)}),(O,z)=>{var Y,w;return x(),S("div",u3,[E(r).login!=="disable"&&K.value&&!((Y=O.edit)!=null&&Y.objectId)?(x(),S("div",r3,[$("div",o3,[$("button",{type:"submit",class:"wl-logout-btn",title:R.value.logout,onClick:Le},[re(E(pc),{size:14})],8,i3),$("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",title:R.value.profile,onClick:be},[$("img",{src:E(a).avatar,alt:"avatar"},null,8,s3)],8,a3)]),$("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",title:R.value.profile,onClick:be,textContent:oe(E(a).display_name)},null,8,l3)])):V("v-if",!0),$("div",c3,[E(r).login!=="force"&&E(r).meta.length&&!K.value?(x(),S("div",{key:0,class:ke(["wl-header",`item${E(r).meta.length}`])},[(x(!0),S(me,null,Re(E(r).meta,_=>(x(),S("div",{key:_,class:"wl-header-item"},[$("label",{for:`wl-${_}`,textContent:oe(R.value[_]+(E(r).requiredMeta.includes(_)||!E(r).requiredMeta.length?"":`(${R.value.optional})`))},null,8,d3),kt($("input",{id:`wl-${_}`,ref_for:!0,ref:F=>{F&&(s.value[_]=F)},"onUpdate:modelValue":F=>E(i)[_]=F,class:ke(["wl-input",`wl-${_}`]),name:_,type:_==="mail"?"email":"text"},null,10,f3),[[W0,E(i)[_]]])]))),128))],2)):V("v-if",!0),kt($("textarea",{id:"wl-edit",ref_key:"editorRef",ref:l,"onUpdate:modelValue":z[0]||(z[0]=_=>Xe(o)?o.value=_:null),class:"wl-editor",placeholder:O.replyUser?`@${O.replyUser}`:R.value.placeholder,onKeydown:J,onDrop:ie,onPaste:ce},null,40,p3),[[On,E(o)]]),kt($("div",h3,[m3,$("h4",null,oe(R.value.preview)+":",1),$("div",{class:"wl-content",innerHTML:T.value},null,8,g3)],512),[[Eu,v.value]]),$("div",b3,[$("div",v3,[$("a",y3,[re(E(R8))]),kt($("button",{ref_key:"emojiButtonRef",ref:d,type:"button",class:ke(["wl-action",{active:b.value}]),title:R.value.emoji,onClick:z[1]||(z[1]=_=>b.value=!b.value)},[re(E(L8))],10,x3),[[Eu,y.value.tabs.length]]),E(r).search?(x(),S("button",{key:0,ref_key:"gifButtonRef",ref:p,type:"button",class:ke(["wl-action",{active:m.value}]),title:R.value.gif,onClick:z[2]||(z[2]=_=>m.value=!m.value)},[re(E(z8))],10,_3)):V("v-if",!0),$("input",{id:"wl-image-upload",ref_key:"imageUploadRef",ref:c,class:"upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:ve},null,544),U.value?(x(),S("label",{key:1,for:"wl-image-upload",class:"wl-action",title:R.value.uploadImage},[re(E($8))],8,w3)):V("v-if",!0),$("button",{type:"button",class:ke(["wl-action",{active:v.value}]),title:R.value.preview,onClick:z[3]||(z[3]=_=>v.value=!v.value)},[re(E(P8))],10,k3)]),$("div",C3,[E3,$("div",A3,[Qe(oe(P.value)+" ",1),E(r).wordLimit?(x(),S("span",S3,[Qe("  /  "),$("span",{class:ke({illegal:!L.value}),textContent:oe(k.value)},null,10,T3)])):V("v-if",!0),Qe("  "+oe(R.value.word),1)]),E(r).login==="disable"||K.value?V("v-if",!0):(x(),S("button",{key:0,type:"button",class:"wl-btn",onClick:Ie,textContent:oe(R.value.login)},null,8,I3)),E(r).login!=="force"||K.value?(x(),S("button",{key:1,type:"submit",class:"primary wl-btn",title:"Cmd|Ctrl + Enter",disabled:N.value,onClick:he},[N.value?(x(),de(E(br),{key:0,size:16})):(x(),S(me,{key:1},[Qe(oe(R.value.submit),1)],64))],8,L3)):V("v-if",!0)]),$("div",{ref_key:"gifPopupRef",ref:g,class:ke(["wl-gif-popup",{display:m.value}])},[$("input",{ref_key:"gifSearchInputRef",ref:h,type:"text",placeholder:R.value.gifSearchPlaceholder,onInput:z[4]||(z[4]=(..._)=>E(ne)&&E(ne)(..._))},null,40,$3),A.list.length?(x(),de(n3,{key:0,items:A.list,"column-width":200,gap:6,onInsert:z[5]||(z[5]=_=>M(_)),onScroll:H},null,8,["items"])):V("v-if",!0),A.loading?(x(),S("div",D3,[re(E(br),{size:30})])):V("v-if",!0)],2),$("div",{ref_key:"emojiPopupRef",ref:f,class:ke(["wl-emoji-popup",{display:b.value}])},[(x(!0),S(me,null,Re(y.value.tabs,(_,F)=>(x(),S(me,{key:_.name},[F===C.value?(x(),S("div",P3,[(x(!0),S(me,null,Re(_.items,G=>(x(),S("button",{key:G,type:"button",title:G,onClick:j=>M(`:${G}:`)},[b.value?(x(),S("img",{key:0,class:"wl-emoji",src:y.value.map[G],alt:G,loading:"lazy",referrerPolicy:"no-referrer"},null,8,F3)):V("v-if",!0)],8,R3))),128))])):V("v-if",!0)],64))),128)),y.value.tabs.length>1?(x(),S("div",O3,[(x(!0),S(me,null,Re(y.value.tabs,(_,F)=>(x(),S("button",{key:_.name,type:"button",class:ke(["wl-tab",{active:C.value===F}]),onClick:G=>C.value=F},[$("img",{class:"wl-emoji",src:_.icon,alt:_.name,title:_.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,z3)],10,M3))),128))])):V("v-if",!0)],2)])]),O.replyId||(w=O.edit)!=null&&w.objectId?(x(),S("button",{key:1,type:"button",class:"wl-close",title:R.value.cancelReply,onClick:z[6]||(z[6]=_=>O.$emit(O.replyId?"cancelReply":"cancelEdit"))},[re(E(pc),{size:24})],8,B3)):V("v-if",!0)])}}}),np=Rr(N3,[["__file","CommentBox.vue"]]);const j3=["id"],H3={class:"wl-user","aria-hidden":"true"},V3=["src"],U3={class:"wl-card"},G3={class:"wl-head"},q3=["href"],W3={key:1,class:"wl-nick"},K3=["textContent"],Z3=["textContent"],Q3=["textContent"],X3=["textContent"],Y3=["textContent"],J3={class:"wl-comment-actions"},ev=["title"],tv=["textContent"],nv=["title"],uv={class:"wl-meta","aria-hidden":"true"},rv=["data-value","textContent"],ov=["data-value","textContent"],iv=["data-value","textContent"],av=["innerHTML"],sv={key:1,class:"wl-admin-actions"},lv={class:"wl-comment-status"},cv=["disabled","onClick","textContent"],dv={key:3,class:"wl-quote"};var fv=Rr(fe({__name:"CommentCard",props:{comment:{},edit:{default:null},rootId:{},reply:{default:null}},emits:["log","submit","delete","edit","like","status","sticky","reply"],setup(e){const t=e,n=["approved","waiting","spam"],u=He("config"),r=ep(),o=Df(),i=as(),a=B(()=>u.value.locale),s=B(()=>{const{link:h}=t.comment;return h?Yf(h)?h:`https://${h}`:""}),l=B(()=>r.value.includes(t.comment.objectId)),c=B(()=>x8(t.comment.insertedAt,o.value,a.value)),d=B(()=>i.value.type==="administrator"),f=B(()=>t.comment.user_id&&i.value.objectId===t.comment.user_id),p=B(()=>{var h;return t.comment.objectId===((h=t.reply)==null?void 0:h.objectId)}),g=B(()=>{var h;return t.comment.objectId===((h=t.edit)==null?void 0:h.objectId)});return(h,y)=>{var b;const C=ze("CommentCard",!0);return x(),S("div",{id:h.comment.objectId,class:"wl-card-item"},[$("div",H3,[h.comment.avatar?(x(),S("img",{key:0,src:h.comment.avatar},null,8,V3)):V("v-if",!0),h.comment.type?(x(),de(E(M8),{key:1})):V("v-if",!0)]),$("div",U3,[$("div",G3,[s.value?(x(),S("a",{key:0,class:"wl-nick",href:s.value,target:"_blank",rel:"nofollow noopener noreferrer"},oe(h.comment.nick),9,q3)):(x(),S("span",W3,oe(h.comment.nick),1)),h.comment.type==="administrator"?(x(),S("span",{key:2,class:"wl-badge",textContent:oe(a.value.admin)},null,8,K3)):V("v-if",!0),h.comment.label?(x(),S("span",{key:3,class:"wl-badge",textContent:oe(h.comment.label)},null,8,Z3)):V("v-if",!0),h.comment.sticky?(x(),S("span",{key:4,class:"wl-badge",textContent:oe(a.value.sticky)},null,8,Q3)):V("v-if",!0),h.comment.level!==void 0&&h.comment.level>=0?(x(),S("span",{key:5,class:ke(`wl-badge level${h.comment.level}`),textContent:oe(a.value[`level${h.comment.level}`]||`Level ${h.comment.level}`)},null,10,X3)):V("v-if",!0),$("span",{class:"wl-time",textContent:oe(c.value)},null,8,Y3),$("div",J3,[d.value||f.value?(x(),S("button",{key:0,type:"button",class:"wl-edit",onClick:y[0]||(y[0]=()=>h.$emit("edit",h.comment))},[re(E(O8))])):V("v-if",!0),d.value||f.value?(x(),S("button",{key:1,type:"button",class:"wl-delete",onClick:y[1]||(y[1]=m=>h.$emit("delete",h.comment))},[re(E(I8))])):V("v-if",!0),$("button",{type:"button",class:"wl-like",title:l.value?a.value.cancelLike:a.value.like,onClick:y[2]||(y[2]=m=>h.$emit("like",h.comment))},[re(E(D8),{active:l.value},null,8,["active"]),"like"in h.comment?(x(),S("span",{key:0,textContent:oe(h.comment.like)},null,8,tv)):V("v-if",!0)],8,ev),$("button",{type:"button",class:ke(["wl-reply",{active:p.value}]),title:p.value?a.value.cancelReply:a.value.reply,onClick:y[3]||(y[3]=m=>h.$emit("reply",p.value?null:h.comment))},[re(E(F8))],10,nv)])]),$("div",uv,[h.comment.addr?(x(),S("span",{key:0,class:"wl-addr","data-value":h.comment.addr,textContent:oe(h.comment.addr)},null,8,rv)):V("v-if",!0),h.comment.browser?(x(),S("span",{key:1,class:"wl-browser","data-value":h.comment.browser,textContent:oe(h.comment.browser)},null,8,ov)):V("v-if",!0),h.comment.os?(x(),S("span",{key:2,class:"wl-os","data-value":h.comment.os,textContent:oe(h.comment.os)},null,8,iv)):V("v-if",!0)]),g.value?V("v-if",!0):(x(),S("div",{key:0,class:"wl-content",innerHTML:h.comment.comment},null,8,av)),d.value&&!g.value?(x(),S("div",sv,[$("span",lv,[(x(),S(me,null,Re(n,m=>$("button",{key:m,type:"submit",class:ke(`wl-btn wl-${m}`),disabled:h.comment.status===m,onClick:v=>h.$emit("status",{status:m,comment:h.comment}),textContent:oe(a.value[m])},null,10,cv)),64))]),d.value&&!h.comment.rid?(x(),S("button",{key:0,type:"submit",class:"wl-btn wl-sticky",onClick:y[4]||(y[4]=m=>h.$emit("sticky",h.comment))},oe(h.comment.sticky?a.value.unsticky:a.value.sticky),1)):V("v-if",!0)])):V("v-if",!0),p.value||g.value?(x(),S("div",{key:2,class:ke({"wl-reply-wrapper":p.value,"wl-edit-wrapper":g.value})},[re(np,{edit:h.edit,"reply-id":(b=h.reply)==null?void 0:b.objectId,"reply-user":h.comment.nick,"root-id":h.rootId,onLog:y[5]||(y[5]=m=>h.$emit("log")),onCancelReply:y[6]||(y[6]=m=>h.$emit("reply",null)),onCancelEdit:y[7]||(y[7]=m=>h.$emit("edit",null)),onSubmit:y[8]||(y[8]=m=>h.$emit("submit",m))},null,8,["edit","reply-id","reply-user","root-id"])],2)):V("v-if",!0),h.comment.children?(x(),S("div",dv,[(x(!0),S(me,null,Re(h.comment.children,m=>(x(),de(C,{key:m.objectId,comment:m,reply:h.reply,edit:h.edit,"root-id":h.rootId,onLog:y[9]||(y[9]=v=>h.$emit("log")),onDelete:y[10]||(y[10]=v=>h.$emit("delete",v)),onEdit:y[11]||(y[11]=v=>h.$emit("edit",v)),onLike:y[12]||(y[12]=v=>h.$emit("like",v)),onReply:y[13]||(y[13]=v=>h.$emit("reply",v)),onStatus:y[14]||(y[14]=v=>h.$emit("status",v)),onSticky:y[15]||(y[15]=v=>h.$emit("sticky",v)),onSubmit:y[16]||(y[16]=v=>h.$emit("submit",v))},null,8,["comment","reply","edit","root-id"]))),128))])):V("v-if",!0)])],8,j3)}}}),[["__file","CommentCard.vue"]]);const pv="2.15.8",hv={"data-waline":""},mv={class:"wl-meta-head"},gv={class:"wl-count"},bv=["textContent"],vv={class:"wl-sort"},yv=["onClick"],xv={class:"wl-cards"},_v={key:1,class:"wl-operation"},wv=["textContent"],kv={key:0,class:"wl-loading"},Cv=["textContent"],Ev={key:2,class:"wl-operation"},Av=["textContent"],Sv={key:3,class:"wl-power"},Tv=$("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noopener noreferrer"}," Waline ",-1);var Iv=fe({__name:"WalineComment",props:["serverURL","path","meta","requiredMeta","dark","commentSorting","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","search","copyright","recaptchaV3Key","turnstileKey","reaction"],setup(e){const t=e,n={latest:"insertedAt_desc",oldest:"insertedAt_asc",hottest:"like_desc"},u=Object.keys(n),r=as(),o=ep(),i=Q("loading"),a=Q(0),s=Q(1),l=Q(0),c=B(()=>(({serverURL:I,path:R=location.pathname,lang:K=typeof navigator>"u"?"en-US":navigator.language,locale:U,emoji:M=ic,meta:J=["nick","mail","link"],requiredMeta:q=[],dark:ie=!1,pageSize:ce=10,wordLimit:ve,imageUploader:he,highlighter:Ie,texRenderer:Le,copyright:be=!0,login:ye="enable",search:H,reaction:ne,recaptchaV3Key:ee="",turnstileKey:O="",commentSorting:z="latest",...Y})=>({serverURL:xa(I),path:v8(R),locale:{...ji[K]||ji[c8],...typeof U=="object"?U:{}},wordLimit:y8(ve),meta:oc(J),requiredMeta:oc(q),imageUploader:Hi(he,f8),highlighter:Hi(Ie,g8),texRenderer:Hi(Le,p8),lang:Object.keys(ji).includes(K)?K:"en-US",dark:ie,emoji:typeof M=="boolean"?M?ic:[]:M,pageSize:ce,login:ye,copyright:be,search:H!==!1&&(typeof H=="object"?H:h8(K)),recaptchaV3Key:ee,turnstileKey:O,reaction:Array.isArray(ne)?ne:ne===!0?d8:[],commentSorting:z,...Y}))(t)),d=Q(c.value.commentSorting),f=Q([]),p=Q(null),g=Q(null),h=B(()=>{return typeof(I=c.value.dark)=="string"?I==="auto"?`@media(prefers-color-scheme:dark){body${Vi}}`:`${I}${Vi}`:I===!0?`:root${Vi}`:"";var I}),y=B(()=>c.value.locale);let C;Rf(h,{id:"waline-darkmode"});const b=I=>{var J;const{serverURL:R,path:K,pageSize:U}=c.value,M=new AbortController;i.value="loading",C==null||C(),(({serverURL:q,lang:ie,path:ce,page:ve,pageSize:he,sortBy:Ie,signal:Le,token:be})=>{const ye={};return be&&(ye.Authorization=`Bearer ${be}`),fetch(`${q}/comment?path=${encodeURIComponent(ce)}&pageSize=${he}&page=${ve}&lang=${ie}&sortBy=${Ie}`,{signal:Le,headers:ye}).then(H=>H.json()).then(H=>va(H,"Get comment data"))})({serverURL:R,lang:c.value.lang,path:K,pageSize:U,sortBy:n[d.value],page:I,signal:M.signal,token:(J=r.value)==null?void 0:J.token}).then(q=>{i.value="success",a.value=q.count,f.value.push(...q.data),s.value=I,l.value=q.totalPages}).catch(q=>{q.name!=="AbortError"&&(console.error(q.message),i.value="error")}),C=M.abort.bind(M)},m=()=>b(s.value+1),v=()=>{a.value=0,f.value=[],b(1)},T=I=>{p.value=I},P=I=>{g.value=I},A=I=>{if(g.value)g.value.comment=I.comment,g.value.orig=I.orig;else if(I.rid){const R=f.value.find(({objectId:K})=>K===I.rid);if(!R)return;Array.isArray(R.children)||(R.children=[]),R.children.push(I)}else f.value.unshift(I),a.value+=1},k=async({comment:I,status:R})=>{var M;if(I.status===R)return;const{serverURL:K,lang:U}=c.value;await go({serverURL:K,lang:U,token:(M=r.value)==null?void 0:M.token,objectId:I.objectId,comment:{status:R}}),I.status=R},L=async I=>{var U;if(I.rid)return;const{serverURL:R,lang:K}=c.value;await go({serverURL:R,lang:K,token:(U=r.value)==null?void 0:U.token,objectId:I.objectId,comment:{sticky:I.sticky?0:1}}),I.sticky=!I.sticky},D=async({objectId:I})=>{var U;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:R,lang:K}=c.value;await(({serverURL:M,lang:J,token:q,objectId:ie})=>fetch(`${M}/comment/${ie}?lang=${J}`,{method:"DELETE",headers:{Authorization:`Bearer ${q}`}}).then(ce=>ce.json()).then(ce=>va(ce,"Delete comment")))({serverURL:R,lang:K,token:(U=r.value)==null?void 0:U.token,objectId:I}),f.value.some((M,J)=>M.objectId===I?(f.value=f.value.filter((q,ie)=>ie!==J),!0):M.children.some((q,ie)=>q.objectId===I&&(f.value[J].children=M.children.filter((ce,ve)=>ve!==ie),!0)))},N=async I=>{var J;const{serverURL:R,lang:K}=c.value,{objectId:U}=I,M=o.value.includes(U);await go({serverURL:R,lang:K,objectId:U,token:(J=r.value)==null?void 0:J.token,comment:{like:!M}}),M?o.value=o.value.filter(q=>q!==U):(o.value=[...o.value,U],o.value.length>50&&(o.value=o.value.slice(-50))),I.like=(I.like||0)+(M?-1:1)};return Ot("config",c),Fe(()=>{Pe(()=>[t.serverURL,t.path],()=>v(),{immediate:!0})}),Vt(()=>C==null?void 0:C()),(I,R)=>(x(),S("div",hv,[re(J8),p.value?V("v-if",!0):(x(),de(np,{key:0,onLog:v,onSubmit:A})),$("div",mv,[$("div",gv,[a.value?(x(),S("span",{key:0,class:"wl-num",textContent:oe(a.value)},null,8,bv)):V("v-if",!0),Qe(" "+oe(y.value.comment),1)]),$("ul",vv,[(x(!0),S(me,null,Re(E(u),K=>(x(),S("li",{key:K,class:ke([K===d.value?"active":""]),onClick:U=>(M=>{d.value!==M&&(d.value=M,v())})(K)},oe(y.value[K]),11,yv))),128))])]),$("div",xv,[(x(!0),S(me,null,Re(f.value,K=>(x(),de(fv,{key:K.objectId,"root-id":K.objectId,comment:K,reply:p.value,edit:g.value,onLog:v,onReply:T,onEdit:P,onSubmit:A,onStatus:k,onDelete:D,onSticky:L,onLike:N},null,8,["root-id","comment","reply","edit"]))),128))]),i.value==="error"?(x(),S("div",_v,[$("button",{type:"button",class:"wl-btn",onClick:v,textContent:oe(y.value.refresh)},null,8,wv)])):(x(),S(me,{key:2},[i.value==="loading"?(x(),S("div",kv,[re(E(br),{size:30})])):f.value.length?s.value<l.value?(x(),S("div",Ev,[$("button",{type:"button",class:"wl-btn",onClick:m,textContent:oe(y.value.more)},null,8,Av)])):V("v-if",!0):(x(),S("div",{key:1,class:"wl-empty",textContent:oe(y.value.sofa)},null,8,Cv))],64)),c.value.copyright?(x(),S("div",Sv,[Qe(" Powered by "),Tv,Qe(" v"+oe(E(pv)),1)])):V("v-if",!0)]))}});Rr(Iv,[["__file","WalineComment.vue"]]);const yc=(e,t)=>{t.forEach((n,u)=>{n.innerText=e[u].toString()})},Lv=({serverURL:e,path:t=window.location.pathname,selector:n=".waline-pageview-count",update:u=!0,lang:r=navigator.language})=>{const o=new AbortController,i=Array.from(document.querySelectorAll(n)),a=c=>{const d=fc(c);return d!==null&&t!==d},s=c=>(({serverURL:d,lang:f,paths:p,signal:g})=>Qf({serverURL:d,lang:f,paths:p,type:["time"],signal:g}).then(h=>Array.isArray(h)?h:[h]))({serverURL:xa(e),paths:c.map(d=>fc(d)||t),lang:r,signal:o.signal}).then(d=>yc(d,c)).catch(k8);if(u){const c=i.filter(f=>!a(f)),d=i.filter(a);(l={serverURL:xa(e),path:t,lang:r},ya({...l,type:"time",action:"inc"})).then(f=>yc(new Array(c.length).fill(f),c)),d.length&&s(d)}else s(i);var l;return o.abort.bind(o)},$v=fe({name:"WalineViews",props:{path:String},setup(e){const{path:t}=gt(e),{options:n}=Fu(),u=Je(),r=function(){Lv({serverURL:n.value.serverURL,path:t.value,selector:`[data-path="${t.value}"]`,update:u.path===t.value})};return Fe(()=>{r()}),d0(()=>{r()}),()=>Z("span",{class:"waline-pageview-count","data-path":t.value})}});function Dv({app:e}){e.component("Comments",t=>Z(a8,{...t})),e.component("ValineViews",t=>Z(s8,{...t})),e.component("WalineViews",t=>Z($v,{...t}))}const Pv=At({enhance(...e){Dv(...e)}}),Rv=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const xc=(e,t)=>{e.classList.add(t)},_c=(e,t)=>{e.classList.remove(t)},Fv=e=>{var t;(t=e==null?void 0:e.parentNode)==null||t.removeChild(e)},Gi=(e,t,n)=>e<t?t:e>n?n:e,wc=e=>(-1+e)*100,Ov=(()=>{const e=[],t=()=>{const n=e.shift();n&&n(t)};return n=>{e.push(n),e.length===1&&t()}})(),Mv=e=>e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(t,n)=>n.toUpperCase()),eo=(()=>{const e=["Webkit","O","Moz","ms"],t={},n=o=>{const{style:i}=document.body;if(o in i)return o;const a=o.charAt(0).toUpperCase()+o.slice(1);let s=e.length;for(;s--;){const l=`${e[s]}${a}`;if(l in i)return l}return o},u=o=>{const i=Mv(o);return t[i]??(t[i]=n(i))},r=(o,i,a)=>{o.style[u(i)]=a};return(o,i)=>{for(const a in i){const s=i[a];Object.hasOwn(i,a)&&R2(s)&&r(o,a,s)}}})(),ln={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},tt={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:e=>{const{speed:t,easing:n}=ln,u=tt.isStarted(),r=Gi(e,ln.minimum,1);tt.percent=r===1?null:r;const o=tt.render(!u),i=o.querySelector(ln.barSelector);return o.offsetWidth,Ov(a=>{eo(i,{transform:`translate3d(${wc(r)}%,0,0)`,transition:`all ${t}ms ${n}`}),r===1?(eo(o,{transition:"none",opacity:"1"}),o.offsetWidth,setTimeout(()=>{eo(o,{transition:`all ${t}ms linear`,opacity:"0"}),setTimeout(()=>{tt.remove(),a()},t)},t)):setTimeout(()=>{a()},t)}),tt},isStarted:()=>typeof tt.percent=="number",start:()=>{tt.percent||tt.set(0);const e=()=>{setTimeout(()=>{tt.percent&&(tt.trickle(),e())},ln.trickleSpeed)};return e(),tt},done:e=>!e&&!tt.percent?tt:tt.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=tt;return t?(t=Gi(t+(typeof e=="number"?e:(1-t)*Gi(Math.random()*t,.1,.95)),0,.994),tt.set(t)):tt.start()},trickle:()=>tt.increase(Math.random()*ln.trickleRate),render:e=>{if(tt.isRendered())return document.getElementById("nprogress");xc(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=ln.template;const n=t.querySelector(ln.barSelector),u=document.querySelector(ln.parent),r=e?"-100":wc(tt.percent??0);return eo(n,{transition:"all 0 linear",transform:`translate3d(${r}%,0,0)`}),u&&(u!==document.body&&xc(u,"nprogress-custom-parent"),u.appendChild(t)),t},remove:()=>{_c(document.documentElement,"nprogress-busy"),_c(document.querySelector(ln.parent),"nprogress-custom-parent"),Fv(document.getElementById("nprogress"))}},zv=()=>{Fe(()=>{const e=Lt(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||tt.start()}),e.afterEach(n=>{t.add(n.path),tt.done()})})},Bv=At({setup(){zv()}}),Nv=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"}));var jv={"/":{backToTop:"返回顶部"},"/en/":{backToTop:"Back to top"}};const Hv=fe({name:"BackToTop",setup(){const e=$t(),t=ts(jv),n=ut(),{height:u}=A2(n),{height:r}=I2(),{y:o}=T2(),i=B(()=>(e.value.backToTop??!0)&&o.value>100),a=B(()=>o.value/(u.value-r.value)*100);return Fe(()=>{n.value=document.body}),()=>Z(dr,{name:"back-to-top"},()=>i.value?Z("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[Z("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":a.value},Z("svg",Z("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*a.value*.48} ${Math.PI*(100-a.value)*.48}`}))),Z("div",{class:"back-to-top-icon"})]):null)}}),Vv=At({rootComponents:[Hv]}),Uv=Object.freeze(Object.defineProperty({__proto__:null,default:Vv},Symbol.toStringTag,{value:"Module"}));var Gv={locales:{"/":{selectLanguageName:"简体中文",lastUpdatedText:"最后更新时间",navbar:[{text:"首页",link:"/",icon:"IconHome"},{text:"指南",link:"/docs/guide/introduce",icon:"IconCompass"},{text:"参考",icon:"IconDocument",children:[{text:"配置",children:[{text:"Vuepress 配置",link:"https://v2.vuepress.vuejs.org/zh/reference/config.html"},{text:"Frontmatter",link:"/docs/theme/frontmatter-home"},{text:"主题配置",link:"/docs/theme/home"},{text:"Markdown 扩展",link:"/docs/theme/custom-container"}]},{text:"插件",children:[{text:"page",link:"/docs/plugins/page"},{text:"comments",link:"/docs/plugins/comments"},{text:"vue-previews",link:"/docs/plugins/vue-previews"},{text:"bulletin-popover",link:"/docs/plugins/bulletin-popover"}]}]},{text:"版本",icon:"IconSubVolume",children:[{text:"2.x(rc)",link:"https://vuepress-theme-reco.recoluan.com/"},{text:"1.x",link:"http://v1.vuepress-reco.recoluan.com/views/1.x/"}]},{text:"博客",link:"/posts",icon:"IconDocumentAttachment"},{text:"案例",link:"/docs/others/examples",icon:"IconFire"},{text:"留言板",link:"/docs/message-board",icon:"IconChat"}],series:{"/docs/guide/":["introduce","getting-started","gui-builder","package-manager","custom-style","style","icon","bundler","builtin-page","folder-specification","register-components","register-layouts","contribute"],"/docs/theme/":[{text:"Frontmatter",children:["frontmatter-home","frontmatter-page"]},{text:"主题配置",children:[{text:"Locale 配置",children:["home","source-dir","git","series","navbar","comments","bulletin-popover","password","appearance","social-links","pages","doc-search","auto-set-category","auto-set-series","custom-primary-color"]},{text:"多语言",children:["multilingual"]}]},{text:"Markdown 扩展",children:["custom-container","markdown-task","markdown-vue-preview","markdown-file-parse"]}],"/docs/plugins/":["page","comments","vue-previews","bulletin-popover"]},commentConfig:{type:"valine",options:{appId:"jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz",appKey:"Js91M9DfM9vPwVaUj7xdkbxh",placeholder:"填写邮箱可以收到回复提醒哦！",verify:!0,recordIP:!0,hideComments:!0}},bulletin:{body:[{type:"title",content:"最新版本"},{type:"text",content:`
      <ul>
        <li>vuepress：2.0.0-rc.19</li>
        <li>reco 主题：2.0.0-rc.26</li>
      </ul>`,style:"font-size: 12px; color: #5D67E8;"},{type:"title",content:"QQ 频道：3u8x6485s0"},{type:"image",src:"/qq_channel.png"},{type:"text",content:"<br /><div><b>周知：</b>原 3 个 QQ 群成员活跃状态差异较大，且分布较分散，现停止新人加群，为了方便大家的交流，请移步 QQ 频道。</div>",style:"font-size: 12px; color: #5D67E8;"},{type:"hr"},{type:"buttongroup",children:[{text:"打赏",link:"/docs/others/donate.html"}]}]},catalogTitle:"页面导航",tip:"提示",info:"信息",warning:"警告",danger:"危险",details:"详情",editLinkText:"编辑当前页面",notFound:"哇哦，没有发现这个页面！",backToHome:"返回首页"},"/en/":{selectLanguageName:"English",navbar:[{text:"Home",link:"/en/",icon:"IconHome"},{text:"Guide",link:"/en/docs/guide/introduce",icon:"IconCompass"},{text:"Reference",icon:"IconDocument",children:[{text:"Configuration",children:[{text:"Vuepress Config",link:"https://v2.vuepress.vuejs.org/reference/config.html"},{text:"Frontmatter",link:"/en/docs/theme/frontmatter-home"},{text:"Theme Configuration",link:"/en/docs/theme/home"},{text:"Markdown Extension",link:"/en/docs/theme/custom-container"}]},{text:"Plugins",children:[{text:"page",link:"/en/docs/plugins/page"},{text:"comments",link:"/en/docs/plugins/comments"},{text:"vue-previews",link:"/en/docs/plugins/vue-previews"},{text:"bulletin-popover",link:"/en/docs/plugins/bulletin-popover"}]}]},{text:"Version",icon:"IconSubVolume",children:[{text:"2.x(rc)",link:"https://vuepress-theme-reco.recoluan.com/en/"},{text:"1.x",link:"http://v1.vuepress-reco.recoluan.com/en/views/1.x/"}]},{text:"Examples",link:"/en/docs/others/examples",icon:"IconFire"},{text:"Message board",link:"/en/docs/message-board",icon:"IconChat"}],series:{"/en/docs/guide/":["introduce","getting-started","gui-builder","package-manager","custom-style","style","icon","bundler","builtin-page","folder-specification","register-components","register-layouts","contribute"],"/en/docs/theme/":[{text:"Frontmatter",children:["frontmatter-home","frontmatter-page"]},{text:"Theme Configuration",children:[{text:"Locale Config",children:["home","source-dir","git","series","navbar","comments","bulletin-popover","password","appearance","social-links","pages","doc-search","auto-set-category","auto-set-series","custom-primary-color"]},{text:"Multilingual",children:["multilingual"]}]},{text:"Markdown Extension",children:["custom-container","markdown-task","markdown-vue-preview","markdown-file-parse"]}],"/en/docs/plugins/":["page","comments","vue-previews","bulletin-popover"]},commentConfig:{type:"valine",options:{appId:"jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz",appKey:"Js91M9DfM9vPwVaUj7xdkbxh",placeholder:"Fill in the email can receive a reply reminder!",verify:!0,recordIP:!0,hideComments:!0}},bulletin:{title:"Bulletin",body:[{type:"title",content:"Latest Version"},{type:"text",content:`
      <ul>
        <li>vuepress：2.0.0-rc.19</li>
        <li>theme reco：2.0.0-rc.26</li>
      </ul>`,style:"font-size: 12px; color: #5D67E8;"},{type:"title",content:"QQ Channel：3u8x6485s0"},{type:"image",src:"/qq_channel.png"},{type:"text",content:"<br /><div><b>Tip: </b>The original three QQ group members are quite different and scattered, so new people are stopped to join the group now. In order to facilitate your communication, please move to the QQ channel.</div>",style:"font-size: 12px; color: #5D67E8;"},{type:"hr"},{type:"buttongroup",children:[{text:"Donate",link:"/docs/others/donate.html"}]}]}}},colorMode:"dark",logo:"/logo.png",author:"reco_luan",docsRepo:"https://github.com/vuepress-reco/vuepress-theme-reco",docsBranch:"main",docsDir:"/docs",algolia:{appId:"38R2J3MTQC",apiKey:"583d3caf699630b08a9bc2d12d599701",indexName:"v2-vuepress-reco-recoluan"},socialLinks:[{icon:"IconReco",link:"https://recoluan.com/"},{icon:"IconRevili",link:"https://revili.recoluan.com"}]};function qv(){const e=up(),t=B(()=>{var o;return(o=e==null?void 0:e.value)==null?void 0:o.bulletin}),n=Q(!1),u="__CLOSE_BULLETIN_POPOVER__";return Fe(()=>{var i;const o=sessionStorage.getItem(u);n.value=o!=="true"&&!!((i=t==null?void 0:t.value)!=null&&i.body)}),{visible:n,bulletin:t,closeBulletinPopover:()=>{n.value=!1,sessionStorage.setItem(u,"true")}}}const Wv={handleImage(e){return`<img style="${e.style||""}" src="${e.src}" />`},handleText(e){return`<div style="${e.style||""}">${e.content}</div>`},handleTitle(e){return`<h5 style="${e.style||""}">${e.content}</h5>`},handleButton(e){return`<a style="${e.style||""}" class="btn" href="${e.link}">${e.text}</a>`},handleButtongroup(e){return`<div class="btn-group">${(e.children||[]).reduce((n,u)=>n+=`<a style="${u.style||e.style||""}" class="btn" href="${u.link}">${u.text}</a>`,"")}</div>`},handleHr(e){return"<hr />"}};function Kv(){const e=up();function t(u){if(Array.isArray(u))return u.map(r=>t(r));{let r=u.type;return r=r.slice(0,1).toUpperCase()+r.slice(1),Wv[`handle${r}`](u)}}return{bodyNodes:B(()=>{var u,r;return t((r=(u=e==null?void 0:e.value)==null?void 0:u.bulletin)==null?void 0:r.body).join("")}),handleNode:t}}function up(){const e=Gv,t=Je(),n=B(()=>Zo(e.locales||{},(t==null?void 0:t.path)||"/"));return B(()=>ns(e,n.value))}const Zv={class:"bulletin-title"},Qv=["innerHTML"],Xv=fe({__name:"Bulletin",setup(e){const{visible:t,bulletin:n,closeBulletinPopover:u}=qv(),{bodyNodes:r}=Kv();return(o,i)=>{var s,l;const a=ze("Xicons");return E(t)?(x(),S("div",{key:0,class:"bulletin-wrapper",style:ct({width:((s=E(n))==null?void 0:s.width)||"300px"})},[$("div",Zv,[re(a,{icon:"VolumeUp","icon-size":"20",text:((l=E(n))==null?void 0:l.title)||"公告",color:"#fff","text-size":"16"},null,8,["text"]),(x(),S("svg",{class:"btn-close icon",onClick:i[0]||(i[0]=(...c)=>E(u)&&E(u)(...c)),t:"1573745677073",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},i[1]||(i[1]=[$("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"},null,-1)])))]),$("div",{class:"bulletin-content",innerHTML:E(r)},null,8,Qv)],4)):V("",!0)}}}),Yv=At({rootComponents:[fe(()=>()=>Z(Xv))]}),Jv=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),e4=Z("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[Z("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),Z("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),t4=fe({name:"ExternalLinkIcon",props:{locales:{type:Object,default:()=>({})}},setup(e){const t=Dt(),n=B(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>Z("span",[e4,Z("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}});var n4={};const u4=n4,r4=At({enhance({app:e}){e.component("ExternalLinkIcon",Z(t4,{locales:u4}))}}),o4=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),kc={};function i4(e){let t=kc[e];if(t)return t;t=kc[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);t.push(u)}for(let n=0;n<e.length;n++){const u=e.charCodeAt(n);t[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return t}function Lu(e,t){typeof t!="string"&&(t=Lu.defaultChars);const n=i4(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let r="";for(let o=0,i=u.length;o<i;o+=3){const a=parseInt(u.slice(o+1,o+3),16);if(a<128){r+=n[a];continue}if((a&224)===192&&o+3<i){const s=parseInt(u.slice(o+4,o+6),16);if((s&192)===128){const l=a<<6&1984|s&63;l<128?r+="��":r+=String.fromCharCode(l),o+=3;continue}}if((a&240)===224&&o+6<i){const s=parseInt(u.slice(o+4,o+6),16),l=parseInt(u.slice(o+7,o+9),16);if((s&192)===128&&(l&192)===128){const c=a<<12&61440|s<<6&4032|l&63;c<2048||c>=55296&&c<=57343?r+="���":r+=String.fromCharCode(c),o+=6;continue}}if((a&248)===240&&o+9<i){const s=parseInt(u.slice(o+4,o+6),16),l=parseInt(u.slice(o+7,o+9),16),c=parseInt(u.slice(o+10,o+12),16);if((s&192)===128&&(l&192)===128&&(c&192)===128){let d=a<<18&1835008|s<<12&258048|l<<6&4032|c&63;d<65536||d>1114111?r+="����":(d-=65536,r+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),o+=9;continue}}r+="�"}return r})}Lu.defaultChars=";/?:@&=+$,#";Lu.componentChars="";const Cc={};function a4(e){let t=Cc[e];if(t)return t;t=Cc[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);/^[0-9a-z]$/i.test(u)?t.push(u):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Fr(e,t,n){typeof t!="string"&&(n=t,t=Fr.defaultChars),typeof n>"u"&&(n=!0);const u=a4(t);let r="";for(let o=0,i=e.length;o<i;o++){const a=e.charCodeAt(o);if(n&&a===37&&o+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){r+=e.slice(o,o+3),o+=2;continue}if(a<128){r+=u[a];continue}if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<i){const s=e.charCodeAt(o+1);if(s>=56320&&s<=57343){r+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[o])}return r}Fr.defaultChars=";/?:@&=+$,-_.!~*'()#";Fr.componentChars="-_.!~*'()";function ss(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function Oo(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const s4=/^([a-z0-9.+-]+:)/i,l4=/:[0-9]*$/,c4=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,d4=["<",">",'"',"`"," ","\r",`
`,"	"],f4=["{","}","|","\\","^","`"].concat(d4),p4=["'"].concat(f4),Ec=["%","/","?",";","#"].concat(p4),Ac=["/","?","#"],h4=255,Sc=/^[+a-z0-9A-Z_-]{0,63}$/,m4=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Tc={javascript:!0,"javascript:":!0},Ic={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ls(e,t){if(e&&e instanceof Oo)return e;const n=new Oo;return n.parse(e,t),n}Oo.prototype.parse=function(e,t){let n,u,r,o=e;if(o=o.trim(),!t&&e.split("#").length===1){const l=c4.exec(o);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let i=s4.exec(o);if(i&&(i=i[0],n=i.toLowerCase(),this.protocol=i,o=o.substr(i.length)),(t||i||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=o.substr(0,2)==="//",r&&!(i&&Tc[i])&&(o=o.substr(2),this.slashes=!0)),!Tc[i]&&(r||i&&!Ic[i])){let l=-1;for(let g=0;g<Ac.length;g++)u=o.indexOf(Ac[g]),u!==-1&&(l===-1||u<l)&&(l=u);let c,d;l===-1?d=o.lastIndexOf("@"):d=o.lastIndexOf("@",l),d!==-1&&(c=o.slice(0,d),o=o.slice(d+1),this.auth=c),l=-1;for(let g=0;g<Ec.length;g++)u=o.indexOf(Ec[g]),u!==-1&&(l===-1||u<l)&&(l=u);l===-1&&(l=o.length),o[l-1]===":"&&l--;const f=o.slice(0,l);o=o.slice(l),this.parseHost(f),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const g=this.hostname.split(/\./);for(let h=0,y=g.length;h<y;h++){const C=g[h];if(C&&!C.match(Sc)){let b="";for(let m=0,v=C.length;m<v;m++)C.charCodeAt(m)>127?b+="x":b+=C[m];if(!b.match(Sc)){const m=g.slice(0,h),v=g.slice(h+1),T=C.match(m4);T&&(m.push(T[1]),v.unshift(T[2])),v.length&&(o=v.join(".")+o),this.hostname=m.join(".");break}}}}this.hostname.length>h4&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=o.indexOf("#");a!==-1&&(this.hash=o.substr(a),o=o.slice(0,a));const s=o.indexOf("?");return s!==-1&&(this.search=o.substr(s),o=o.slice(0,s)),o&&(this.pathname=o),Ic[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Oo.prototype.parseHost=function(e){let t=l4.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const g4=Object.freeze(Object.defineProperty({__proto__:null,decode:Lu,encode:Fr,format:ss,parse:ls},Symbol.toStringTag,{value:"Module"})),rp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,op=/[\0-\x1F\x7F-\x9F]/,b4=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,cs=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,ip=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,ap=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,v4=Object.freeze(Object.defineProperty({__proto__:null,Any:rp,Cc:op,Cf:b4,P:cs,S:ip,Z:ap},Symbol.toStringTag,{value:"Module"})),y4=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),x4=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var qi;const _4=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),w4=(qi=String.fromCodePoint)!==null&&qi!==void 0?qi:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function k4(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=_4.get(e))!==null&&t!==void 0?t:e}var lt;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(lt||(lt={}));const C4=32;var Pn;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Pn||(Pn={}));function _a(e){return e>=lt.ZERO&&e<=lt.NINE}function E4(e){return e>=lt.UPPER_A&&e<=lt.UPPER_F||e>=lt.LOWER_A&&e<=lt.LOWER_F}function A4(e){return e>=lt.UPPER_A&&e<=lt.UPPER_Z||e>=lt.LOWER_A&&e<=lt.LOWER_Z||_a(e)}function S4(e){return e===lt.EQUALS||A4(e)}var at;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(at||(at={}));var $n;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})($n||($n={}));class T4{constructor(t,n,u){this.decodeTree=t,this.emitCodePoint=n,this.errors=u,this.state=at.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=$n.Strict}startEntity(t){this.decodeMode=t,this.state=at.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case at.EntityStart:return t.charCodeAt(n)===lt.NUM?(this.state=at.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=at.NamedEntity,this.stateNamedEntity(t,n));case at.NumericStart:return this.stateNumericStart(t,n);case at.NumericDecimal:return this.stateNumericDecimal(t,n);case at.NumericHex:return this.stateNumericHex(t,n);case at.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|C4)===lt.LOWER_X?(this.state=at.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=at.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,u,r){if(n!==u){const o=u-n;this.result=this.result*Math.pow(r,o)+parseInt(t.substr(n,o),r),this.consumed+=o}}stateNumericHex(t,n){const u=n;for(;n<t.length;){const r=t.charCodeAt(n);if(_a(r)||E4(r))n+=1;else return this.addToNumericResult(t,u,n,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(t,u,n,16),-1}stateNumericDecimal(t,n){const u=n;for(;n<t.length;){const r=t.charCodeAt(n);if(_a(r))n+=1;else return this.addToNumericResult(t,u,n,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(t,u,n,10),-1}emitNumericEntity(t,n){var u;if(this.consumed<=n)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===lt.SEMI)this.consumed+=1;else if(this.decodeMode===$n.Strict)return 0;return this.emitCodePoint(k4(this.result),this.consumed),this.errors&&(t!==lt.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:u}=this;let r=u[this.treeIndex],o=(r&Pn.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const i=t.charCodeAt(n);if(this.treeIndex=I4(u,r,this.treeIndex+Math.max(1,o),i),this.treeIndex<0)return this.result===0||this.decodeMode===$n.Attribute&&(o===0||S4(i))?0:this.emitNotTerminatedNamedEntity();if(r=u[this.treeIndex],o=(r&Pn.VALUE_LENGTH)>>14,o!==0){if(i===lt.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==$n.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:u}=this,r=(u[n]&Pn.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,r,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,u){const{decodeTree:r}=this;return this.emitCodePoint(n===1?r[t]&~Pn.VALUE_LENGTH:r[t+1],u),n===3&&this.emitCodePoint(r[t+2],u),u}end(){var t;switch(this.state){case at.NamedEntity:return this.result!==0&&(this.decodeMode!==$n.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case at.NumericDecimal:return this.emitNumericEntity(0,2);case at.NumericHex:return this.emitNumericEntity(0,3);case at.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case at.EntityStart:return 0}}}function sp(e){let t="";const n=new T4(e,u=>t+=w4(u));return function(r,o){let i=0,a=0;for(;(a=r.indexOf("&",a))>=0;){t+=r.slice(i,a),n.startEntity(o);const l=n.write(r,a+1);if(l<0){i=a+n.end();break}i=a+l,a=l===0?i+1:i}const s=t+r.slice(i);return t="",s}}function I4(e,t,n,u){const r=(t&Pn.BRANCH_LENGTH)>>7,o=t&Pn.JUMP_TABLE;if(r===0)return o!==0&&u===o?n:-1;if(o){const s=u-o;return s<0||s>=r?-1:e[n+s]-1}let i=n,a=i+r-1;for(;i<=a;){const s=i+a>>>1,l=e[s];if(l<u)i=s+1;else if(l>u)a=s-1;else return e[s+r]}return-1}const L4=sp(y4);sp(x4);function lp(e,t=$n.Legacy){return L4(e,t)}function $4(e){return Object.prototype.toString.call(e)}function ds(e){return $4(e)==="[object String]"}const D4=Object.prototype.hasOwnProperty;function P4(e,t){return D4.call(e,t)}function ni(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(u){e[u]=n[u]})}}),e}function cp(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function fs(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Mo(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const dp=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,R4=/&([a-z#][a-z0-9]{1,31});/gi,F4=new RegExp(dp.source+"|"+R4.source,"gi"),O4=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function M4(e,t){if(t.charCodeAt(0)===35&&O4.test(t)){const u=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return fs(u)?Mo(u):e}const n=lp(e);return n!==e?n:e}function z4(e){return e.indexOf("\\")<0?e:e.replace(dp,"$1")}function $u(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(F4,function(t,n,u){return n||M4(t,u)})}const B4=/[&<>"]/,N4=/[&<>"]/g,j4={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function H4(e){return j4[e]}function Nn(e){return B4.test(e)?e.replace(N4,H4):e}const V4=/[.?*+^$[\]\\(){}|-]/g;function U4(e){return e.replace(V4,"\\$&")}function We(e){switch(e){case 9:case 32:return!0}return!1}function yr(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function xr(e){return cs.test(e)||ip.test(e)}function _r(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function ui(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const G4={mdurl:g4,ucmicro:v4},q4=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:cp,assign:ni,escapeHtml:Nn,escapeRE:U4,fromCodePoint:Mo,has:P4,isMdAsciiPunct:_r,isPunctChar:xr,isSpace:We,isString:ds,isValidEntityCode:fs,isWhiteSpace:yr,lib:G4,normalizeReference:ui,unescapeAll:$u,unescapeMd:z4},Symbol.toStringTag,{value:"Module"}));function W4(e,t,n){let u,r,o,i;const a=e.posMax,s=e.pos;for(e.pos=t+1,u=1;e.pos<a;){if(o=e.src.charCodeAt(e.pos),o===93&&(u--,u===0)){r=!0;break}if(i=e.pos,e.md.inline.skipToken(e),o===91){if(i===e.pos-1)u++;else if(n)return e.pos=s,-1}}let l=-1;return r&&(l=e.pos),e.pos=s,l}function K4(e,t,n){let u,r=t;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<n;){if(u=e.charCodeAt(r),u===10||u===60)return o;if(u===62)return o.pos=r+1,o.str=$u(e.slice(t+1,r)),o.ok=!0,o;if(u===92&&r+1<n){r+=2;continue}r++}return o}let i=0;for(;r<n&&(u=e.charCodeAt(r),!(u===32||u<32||u===127));){if(u===92&&r+1<n){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(u===40&&(i++,i>32))return o;if(u===41){if(i===0)break;i--}r++}return t===r||i!==0||(o.str=$u(e.slice(t,r)),o.pos=r,o.ok=!0),o}function Z4(e,t,n,u){let r,o=t;const i={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)i.str=u.str,i.marker=u.marker;else{if(o>=n)return i;let a=e.charCodeAt(o);if(a!==34&&a!==39&&a!==40)return i;t++,o++,a===40&&(a=41),i.marker=a}for(;o<n;){if(r=e.charCodeAt(o),r===i.marker)return i.pos=o+1,i.str+=$u(e.slice(t,o)),i.ok=!0,i;if(r===40&&i.marker===41)return i;r===92&&o+1<n&&o++,o++}return i.can_continue=!0,i.str+=$u(e.slice(t,o)),i}const Q4=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:K4,parseLinkLabel:W4,parseLinkTitle:Z4},Symbol.toStringTag,{value:"Module"})),nn={};nn.code_inline=function(e,t,n,u,r){const o=e[t];return"<code"+r.renderAttrs(o)+">"+Nn(o.content)+"</code>"};nn.code_block=function(e,t,n,u,r){const o=e[t];return"<pre"+r.renderAttrs(o)+"><code>"+Nn(e[t].content)+`</code></pre>
`};nn.fence=function(e,t,n,u,r){const o=e[t],i=o.info?$u(o.info).trim():"";let a="",s="";if(i){const c=i.split(/(\s+)/g);a=c[0],s=c.slice(2).join("")}let l;if(n.highlight?l=n.highlight(o.content,a,s)||Nn(o.content):l=Nn(o.content),l.indexOf("<pre")===0)return l+`
`;if(i){const c=o.attrIndex("class"),d=o.attrs?o.attrs.slice():[];c<0?d.push(["class",n.langPrefix+a]):(d[c]=d[c].slice(),d[c][1]+=" "+n.langPrefix+a);const f={attrs:d};return`<pre><code${r.renderAttrs(f)}>${l}</code></pre>
`}return`<pre><code${r.renderAttrs(o)}>${l}</code></pre>
`};nn.image=function(e,t,n,u,r){const o=e[t];return o.attrs[o.attrIndex("alt")][1]=r.renderInlineAsText(o.children,n,u),r.renderToken(e,t,n)};nn.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`};nn.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};nn.text=function(e,t){return Nn(e[t].content)};nn.html_block=function(e,t){return e[t].content};nn.html_inline=function(e,t){return e[t].content};function zu(){this.rules=ni({},nn)}zu.prototype.renderAttrs=function(t){let n,u,r;if(!t.attrs)return"";for(r="",n=0,u=t.attrs.length;n<u;n++)r+=" "+Nn(t.attrs[n][0])+'="'+Nn(t.attrs[n][1])+'"';return r};zu.prototype.renderToken=function(t,n,u){const r=t[n];let o="";if(r.hidden)return"";r.block&&r.nesting!==-1&&n&&t[n-1].hidden&&(o+=`
`),o+=(r.nesting===-1?"</":"<")+r.tag,o+=this.renderAttrs(r),r.nesting===0&&u.xhtmlOut&&(o+=" /");let i=!1;if(r.block&&(i=!0,r.nesting===1&&n+1<t.length)){const a=t[n+1];(a.type==="inline"||a.hidden||a.nesting===-1&&a.tag===r.tag)&&(i=!1)}return o+=i?`>
`:">",o};zu.prototype.renderInline=function(e,t,n){let u="";const r=this.rules;for(let o=0,i=e.length;o<i;o++){const a=e[o].type;typeof r[a]<"u"?u+=r[a](e,o,t,n,this):u+=this.renderToken(e,o,t)}return u};zu.prototype.renderInlineAsText=function(e,t,n){let u="";for(let r=0,o=e.length;r<o;r++)switch(e[r].type){case"text":u+=e[r].content;break;case"image":u+=this.renderInlineAsText(e[r].children,t,n);break;case"html_inline":case"html_block":u+=e[r].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u};zu.prototype.render=function(e,t,n){let u="";const r=this.rules;for(let o=0,i=e.length;o<i;o++){const a=e[o].type;a==="inline"?u+=this.renderInline(e[o].children,t,n):typeof r[a]<"u"?u+=r[a](e,o,t,n,this):u+=this.renderToken(e,o,t,n)}return u};function Ct(){this.__rules__=[],this.__cache__=null}Ct.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};Ct.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(u){t.indexOf(u)<0&&t.push(u)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(u){u.enabled&&(n&&u.alt.indexOf(n)<0||e.__cache__[n].push(u.fn))})})};Ct.prototype.at=function(e,t,n){const u=this.__find__(e),r=n||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=t,this.__rules__[u].alt=r.alt||[],this.__cache__=null};Ct.prototype.before=function(e,t,n,u){const r=this.__find__(e),o=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};Ct.prototype.after=function(e,t,n,u){const r=this.__find__(e),o=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};Ct.prototype.push=function(e,t,n){const u=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:u.alt||[]}),this.__cache__=null};Ct.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const r=this.__find__(u);if(r<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[r].enabled=!0,n.push(u)},this),this.__cache__=null,n};Ct.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)};Ct.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const r=this.__find__(u);if(r<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[r].enabled=!1,n.push(u)},this),this.__cache__=null,n};Ct.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Kt(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Kt.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let u=0,r=n.length;u<r;u++)if(n[u][0]===t)return u;return-1};Kt.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};Kt.prototype.attrSet=function(t,n){const u=this.attrIndex(t),r=[t,n];u<0?this.attrPush(r):this.attrs[u]=r};Kt.prototype.attrGet=function(t){const n=this.attrIndex(t);let u=null;return n>=0&&(u=this.attrs[n][1]),u};Kt.prototype.attrJoin=function(t,n){const u=this.attrIndex(t);u<0?this.attrPush([t,n]):this.attrs[u][1]=this.attrs[u][1]+" "+n};function fp(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}fp.prototype.Token=Kt;const X4=/\r\n?|\n/g,Y4=/\0/g;function J4(e){let t;t=e.src.replace(X4,`
`),t=t.replace(Y4,"�"),e.src=t}function e7(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function t7(e){const t=e.tokens;for(let n=0,u=t.length;n<u;n++){const r=t[n];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function n7(e){return/^<a[>\s]/i.test(e)}function u7(e){return/^<\/a\s*>/i.test(e)}function r7(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,u=t.length;n<u;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,o=0;for(let i=r.length-1;i>=0;i--){const a=r[i];if(a.type==="link_close"){for(i--;r[i].level!==a.level&&r[i].type!=="link_open";)i--;continue}if(a.type==="html_inline"&&(n7(a.content)&&o>0&&o--,u7(a.content)&&o++),!(o>0)&&a.type==="text"&&e.md.linkify.test(a.content)){const s=a.content;let l=e.md.linkify.match(s);const c=[];let d=a.level,f=0;l.length>0&&l[0].index===0&&i>0&&r[i-1].type==="text_special"&&(l=l.slice(1));for(let p=0;p<l.length;p++){const g=l[p].url,h=e.md.normalizeLink(g);if(!e.md.validateLink(h))continue;let y=l[p].text;l[p].schema?l[p].schema==="mailto:"&&!/^mailto:/i.test(y)?y=e.md.normalizeLinkText("mailto:"+y).replace(/^mailto:/,""):y=e.md.normalizeLinkText(y):y=e.md.normalizeLinkText("http://"+y).replace(/^http:\/\//,"");const C=l[p].index;if(C>f){const T=new e.Token("text","",0);T.content=s.slice(f,C),T.level=d,c.push(T)}const b=new e.Token("link_open","a",1);b.attrs=[["href",h]],b.level=d++,b.markup="linkify",b.info="auto",c.push(b);const m=new e.Token("text","",0);m.content=y,m.level=d,c.push(m);const v=new e.Token("link_close","a",-1);v.level=--d,v.markup="linkify",v.info="auto",c.push(v),f=l[p].lastIndex}if(f<s.length){const p=new e.Token("text","",0);p.content=s.slice(f),p.level=d,c.push(p)}t[n].children=r=cp(r,i,c)}}}}const pp=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,o7=/\((c|tm|r)\)/i,i7=/\((c|tm|r)\)/ig,a7={c:"©",r:"®",tm:"™"};function s7(e,t){return a7[t.toLowerCase()]}function l7(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&(u.content=u.content.replace(i7,s7)),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function c7(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&pp.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function d7(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(o7.test(e.tokens[t].content)&&l7(e.tokens[t].children),pp.test(e.tokens[t].content)&&c7(e.tokens[t].children))}const f7=/['"]/,Lc=/['"]/g,$c="’";function to(e,t,n){return e.slice(0,t)+n+e.slice(t+1)}function p7(e,t){let n;const u=[];for(let r=0;r<e.length;r++){const o=e[r],i=e[r].level;for(n=u.length-1;n>=0&&!(u[n].level<=i);n--);if(u.length=n+1,o.type!=="text")continue;let a=o.content,s=0,l=a.length;e:for(;s<l;){Lc.lastIndex=s;const c=Lc.exec(a);if(!c)break;let d=!0,f=!0;s=c.index+1;const p=c[0]==="'";let g=32;if(c.index-1>=0)g=a.charCodeAt(c.index-1);else for(n=r-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){g=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(s<l)h=a.charCodeAt(s);else for(n=r+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}const y=_r(g)||xr(String.fromCharCode(g)),C=_r(h)||xr(String.fromCharCode(h)),b=yr(g),m=yr(h);if(m?d=!1:C&&(b||y||(d=!1)),b?f=!1:y&&(m||C||(f=!1)),h===34&&c[0]==='"'&&g>=48&&g<=57&&(f=d=!1),d&&f&&(d=y,f=C),!d&&!f){p&&(o.content=to(o.content,c.index,$c));continue}if(f)for(n=u.length-1;n>=0;n--){let v=u[n];if(u[n].level<i)break;if(v.single===p&&u[n].level===i){v=u[n];let T,P;p?(T=t.md.options.quotes[2],P=t.md.options.quotes[3]):(T=t.md.options.quotes[0],P=t.md.options.quotes[1]),o.content=to(o.content,c.index,P),e[v.token].content=to(e[v.token].content,v.pos,T),s+=P.length-1,v.token===r&&(s+=T.length-1),a=o.content,l=a.length,u.length=n;continue e}}d?u.push({token:r,pos:c.index,single:p,level:i}):f&&p&&(o.content=to(o.content,c.index,$c))}}}function h7(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!f7.test(e.tokens[t].content)||p7(e.tokens[t].children,e)}function m7(e){let t,n;const u=e.tokens,r=u.length;for(let o=0;o<r;o++){if(u[o].type!=="inline")continue;const i=u[o].children,a=i.length;for(t=0;t<a;t++)i[t].type==="text_special"&&(i[t].type="text");for(t=n=0;t<a;t++)i[t].type==="text"&&t+1<a&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}const Wi=[["normalize",J4],["block",e7],["inline",t7],["linkify",r7],["replacements",d7],["smartquotes",h7],["text_join",m7]];function ps(){this.ruler=new Ct;for(let e=0;e<Wi.length;e++)this.ruler.push(Wi[e][0],Wi[e][1])}ps.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,u=t.length;n<u;n++)t[n](e)};ps.prototype.State=fp;function un(e,t,n,u){this.src=e,this.md=t,this.env=n,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let o=0,i=0,a=0,s=0,l=r.length,c=!1;i<l;i++){const d=r.charCodeAt(i);if(!c)if(We(d)){a++,d===9?s+=4-s%4:s++;continue}else c=!0;(d===10||i===l-1)&&(d!==10&&i++,this.bMarks.push(o),this.eMarks.push(i),this.tShift.push(a),this.sCount.push(s),this.bsCount.push(0),c=!1,a=0,s=0,o=i+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}un.prototype.push=function(e,t,n){const u=new Kt(e,t,n);return u.block=!0,n<0&&this.level--,u.level=this.level,n>0&&this.level++,this.tokens.push(u),u};un.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};un.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};un.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const u=this.src.charCodeAt(t);if(!We(u))break}return t};un.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!We(this.src.charCodeAt(--t)))return t+1;return t};un.prototype.skipChars=function(t,n){for(let u=this.src.length;t<u&&this.src.charCodeAt(t)===n;t++);return t};un.prototype.skipCharsBack=function(t,n,u){if(t<=u)return t;for(;t>u;)if(n!==this.src.charCodeAt(--t))return t+1;return t};un.prototype.getLines=function(t,n,u,r){if(t>=n)return"";const o=new Array(n-t);for(let i=0,a=t;a<n;a++,i++){let s=0;const l=this.bMarks[a];let c=l,d;for(a+1<n||r?d=this.eMarks[a]+1:d=this.eMarks[a];c<d&&s<u;){const f=this.src.charCodeAt(c);if(We(f))f===9?s+=4-(s+this.bsCount[a])%4:s++;else if(c-l<this.tShift[a])s++;else break;c++}s>u?o[i]=new Array(s-u+1).join(" ")+this.src.slice(c,d):o[i]=this.src.slice(c,d)}return o.join("")};un.prototype.Token=Kt;const g7=65536;function Ki(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];return e.src.slice(n,u)}function Dc(e){const t=[],n=e.length;let u=0,r=e.charCodeAt(u),o=!1,i=0,a="";for(;u<n;)r===124&&(o?(a+=e.substring(i,u-1),i=u):(t.push(a+e.substring(i,u)),a="",i=u+1)),o=r===92,u++,r=e.charCodeAt(u);return t.push(a+e.substring(i)),t}function b7(e,t,n,u){if(t+2>n)return!1;let r=t+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let o=e.bMarks[r]+e.tShift[r];if(o>=e.eMarks[r])return!1;const i=e.src.charCodeAt(o++);if(i!==124&&i!==45&&i!==58||o>=e.eMarks[r])return!1;const a=e.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58&&!We(a)||i===45&&We(a))return!1;for(;o<e.eMarks[r];){const v=e.src.charCodeAt(o);if(v!==124&&v!==45&&v!==58&&!We(v))return!1;o++}let s=Ki(e,t+1),l=s.split("|");const c=[];for(let v=0;v<l.length;v++){const T=l[v].trim();if(!T){if(v===0||v===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(T))return!1;T.charCodeAt(T.length-1)===58?c.push(T.charCodeAt(0)===58?"center":"right"):T.charCodeAt(0)===58?c.push("left"):c.push("")}if(s=Ki(e,t).trim(),s.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=Dc(s),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const d=l.length;if(d===0||d!==c.length)return!1;if(u)return!0;const f=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),g=e.push("table_open","table",1),h=[t,0];g.map=h;const y=e.push("thead_open","thead",1);y.map=[t,t+1];const C=e.push("tr_open","tr",1);C.map=[t,t+1];for(let v=0;v<l.length;v++){const T=e.push("th_open","th",1);c[v]&&(T.attrs=[["style","text-align:"+c[v]]]);const P=e.push("inline","",0);P.content=l[v].trim(),P.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let b,m=0;for(r=t+2;r<n&&!(e.sCount[r]<e.blkIndent);r++){let v=!1;for(let P=0,A=p.length;P<A;P++)if(p[P](e,r,n,!0)){v=!0;break}if(v||(s=Ki(e,r).trim(),!s)||e.sCount[r]-e.blkIndent>=4||(l=Dc(s),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),m+=d-l.length,m>g7))break;if(r===t+2){const P=e.push("tbody_open","tbody",1);P.map=b=[t+2,0]}const T=e.push("tr_open","tr",1);T.map=[r,r+1];for(let P=0;P<d;P++){const A=e.push("td_open","td",1);c[P]&&(A.attrs=[["style","text-align:"+c[P]]]);const k=e.push("inline","",0);k.content=l[P]?l[P].trim():"",k.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return b&&(e.push("tbody_close","tbody",-1),b[1]=r),e.push("table_close","table",-1),h[1]=r,e.parentType=f,e.line=r,!0}function v7(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let u=t+1,r=u;for(;u<n;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,r=u;continue}break}e.line=r;const o=e.push("code_block","code",0);return o.content=e.getLines(t,r,4+e.blkIndent,!1)+`
`,o.map=[t,e.line],!0}function y7(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||r+3>o)return!1;const i=e.src.charCodeAt(r);if(i!==126&&i!==96)return!1;let a=r;r=e.skipChars(r,i);let s=r-a;if(s<3)return!1;const l=e.src.slice(a,r),c=e.src.slice(r,o);if(i===96&&c.indexOf(String.fromCharCode(i))>=0)return!1;if(u)return!0;let d=t,f=!1;for(;d++,!(d>=n||(r=a=e.bMarks[d]+e.tShift[d],o=e.eMarks[d],r<o&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(r)===i&&!(e.sCount[d]-e.blkIndent>=4)&&(r=e.skipChars(r,i),!(r-a<s)&&(r=e.skipSpaces(r),!(r<o)))){f=!0;break}s=e.sCount[t],e.line=d+(f?1:0);const p=e.push("fence","code",0);return p.info=c,p.content=e.getLines(t+1,d,s,!0),p.markup=l,p.map=[t,e.line],!0}function x7(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];const i=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(u)return!0;const a=[],s=[],l=[],c=[],d=e.md.block.ruler.getRules("blockquote"),f=e.parentType;e.parentType="blockquote";let p=!1,g;for(g=t;g<n;g++){const m=e.sCount[g]<e.blkIndent;if(r=e.bMarks[g]+e.tShift[g],o=e.eMarks[g],r>=o)break;if(e.src.charCodeAt(r++)===62&&!m){let T=e.sCount[g]+1,P,A;e.src.charCodeAt(r)===32?(r++,T++,A=!1,P=!0):e.src.charCodeAt(r)===9?(P=!0,(e.bsCount[g]+T)%4===3?(r++,T++,A=!1):A=!0):P=!1;let k=T;for(a.push(e.bMarks[g]),e.bMarks[g]=r;r<o;){const L=e.src.charCodeAt(r);if(We(L))L===9?k+=4-(k+e.bsCount[g]+(A?1:0))%4:k++;else break;r++}p=r>=o,s.push(e.bsCount[g]),e.bsCount[g]=e.sCount[g]+1+(P?1:0),l.push(e.sCount[g]),e.sCount[g]=k-T,c.push(e.tShift[g]),e.tShift[g]=r-e.bMarks[g];continue}if(p)break;let v=!1;for(let T=0,P=d.length;T<P;T++)if(d[T](e,g,n,!0)){v=!0;break}if(v){e.lineMax=g,e.blkIndent!==0&&(a.push(e.bMarks[g]),s.push(e.bsCount[g]),c.push(e.tShift[g]),l.push(e.sCount[g]),e.sCount[g]-=e.blkIndent);break}a.push(e.bMarks[g]),s.push(e.bsCount[g]),c.push(e.tShift[g]),l.push(e.sCount[g]),e.sCount[g]=-1}const h=e.blkIndent;e.blkIndent=0;const y=e.push("blockquote_open","blockquote",1);y.markup=">";const C=[t,0];y.map=C,e.md.block.tokenize(e,t,g);const b=e.push("blockquote_close","blockquote",-1);b.markup=">",e.lineMax=i,e.parentType=f,C[1]=e.line;for(let m=0;m<c.length;m++)e.bMarks[m+t]=a[m],e.tShift[m+t]=c[m],e.sCount[m+t]=l[m],e.bsCount[m+t]=s[m];return e.blkIndent=h,!0}function _7(e,t,n,u){const r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(o++);if(i!==42&&i!==45&&i!==95)return!1;let a=1;for(;o<r;){const l=e.src.charCodeAt(o++);if(l!==i&&!We(l))return!1;l===i&&a++}if(a<3)return!1;if(u)return!0;e.line=t+1;const s=e.push("hr","hr",0);return s.map=[t,e.line],s.markup=Array(a+1).join(String.fromCharCode(i)),!0}function Pc(e,t){const n=e.eMarks[t];let u=e.bMarks[t]+e.tShift[t];const r=e.src.charCodeAt(u++);if(r!==42&&r!==45&&r!==43)return-1;if(u<n){const o=e.src.charCodeAt(u);if(!We(o))return-1}return u}function Rc(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];let r=n;if(r+1>=u)return-1;let o=e.src.charCodeAt(r++);if(o<48||o>57)return-1;for(;;){if(r>=u)return-1;if(o=e.src.charCodeAt(r++),o>=48&&o<=57){if(r-n>=10)return-1;continue}if(o===41||o===46)break;return-1}return r<u&&(o=e.src.charCodeAt(r),!We(o))?-1:r}function w7(e,t){const n=e.level+2;for(let u=t+2,r=e.tokens.length-2;u<r;u++)e.tokens[u].level===n&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function k7(e,t,n,u){let r,o,i,a,s=t,l=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let c=!1;u&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(c=!0);let d,f,p;if((p=Rc(e,s))>=0){if(d=!0,i=e.bMarks[s]+e.tShift[s],f=Number(e.src.slice(i,p-1)),c&&f!==1)return!1}else if((p=Pc(e,s))>=0)d=!1;else return!1;if(c&&e.skipSpaces(p)>=e.eMarks[s])return!1;if(u)return!0;const g=e.src.charCodeAt(p-1),h=e.tokens.length;d?(a=e.push("ordered_list_open","ol",1),f!==1&&(a.attrs=[["start",f]])):a=e.push("bullet_list_open","ul",1);const y=[s,0];a.map=y,a.markup=String.fromCharCode(g);let C=!1;const b=e.md.block.ruler.getRules("list"),m=e.parentType;for(e.parentType="list";s<n;){o=p,r=e.eMarks[s];const v=e.sCount[s]+p-(e.bMarks[s]+e.tShift[s]);let T=v;for(;o<r;){const U=e.src.charCodeAt(o);if(U===9)T+=4-(T+e.bsCount[s])%4;else if(U===32)T++;else break;o++}const P=o;let A;P>=r?A=1:A=T-v,A>4&&(A=1);const k=v+A;a=e.push("list_item_open","li",1),a.markup=String.fromCharCode(g);const L=[s,0];a.map=L,d&&(a.info=e.src.slice(i,p-1));const D=e.tight,N=e.tShift[s],I=e.sCount[s],R=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=k,e.tight=!0,e.tShift[s]=P-e.bMarks[s],e.sCount[s]=T,P>=r&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,s,n,!0),(!e.tight||C)&&(l=!1),C=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=R,e.tShift[s]=N,e.sCount[s]=I,e.tight=D,a=e.push("list_item_close","li",-1),a.markup=String.fromCharCode(g),s=e.line,L[1]=s,s>=n||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let K=!1;for(let U=0,M=b.length;U<M;U++)if(b[U](e,s,n,!0)){K=!0;break}if(K)break;if(d){if(p=Rc(e,s),p<0)break;i=e.bMarks[s]+e.tShift[s]}else if(p=Pc(e,s),p<0)break;if(g!==e.src.charCodeAt(p-1))break}return d?a=e.push("ordered_list_close","ol",-1):a=e.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(g),y[1]=s,e.line=s,e.parentType=m,l&&w7(e,h),!0}function C7(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t],i=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function a(b){const m=e.lineMax;if(b>=m||e.isEmpty(b))return null;let v=!1;if(e.sCount[b]-e.blkIndent>3&&(v=!0),e.sCount[b]<0&&(v=!0),!v){const A=e.md.block.ruler.getRules("reference"),k=e.parentType;e.parentType="reference";let L=!1;for(let D=0,N=A.length;D<N;D++)if(A[D](e,b,m,!0)){L=!0;break}if(e.parentType=k,L)return null}const T=e.bMarks[b]+e.tShift[b],P=e.eMarks[b];return e.src.slice(T,P+1)}let s=e.src.slice(r,o+1);o=s.length;let l=-1;for(r=1;r<o;r++){const b=s.charCodeAt(r);if(b===91)return!1;if(b===93){l=r;break}else if(b===10){const m=a(i);m!==null&&(s+=m,o=s.length,i++)}else if(b===92&&(r++,r<o&&s.charCodeAt(r)===10)){const m=a(i);m!==null&&(s+=m,o=s.length,i++)}}if(l<0||s.charCodeAt(l+1)!==58)return!1;for(r=l+2;r<o;r++){const b=s.charCodeAt(r);if(b===10){const m=a(i);m!==null&&(s+=m,o=s.length,i++)}else if(!We(b))break}const c=e.md.helpers.parseLinkDestination(s,r,o);if(!c.ok)return!1;const d=e.md.normalizeLink(c.str);if(!e.md.validateLink(d))return!1;r=c.pos;const f=r,p=i,g=r;for(;r<o;r++){const b=s.charCodeAt(r);if(b===10){const m=a(i);m!==null&&(s+=m,o=s.length,i++)}else if(!We(b))break}let h=e.md.helpers.parseLinkTitle(s,r,o);for(;h.can_continue;){const b=a(i);if(b===null)break;s+=b,r=o,o=s.length,i++,h=e.md.helpers.parseLinkTitle(s,r,o,h)}let y;for(r<o&&g!==r&&h.ok?(y=h.str,r=h.pos):(y="",r=f,i=p);r<o;){const b=s.charCodeAt(r);if(!We(b))break;r++}if(r<o&&s.charCodeAt(r)!==10&&y)for(y="",r=f,i=p;r<o;){const b=s.charCodeAt(r);if(!We(b))break;r++}if(r<o&&s.charCodeAt(r)!==10)return!1;const C=ui(s.slice(1,l));return C?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[C]>"u"&&(e.env.references[C]={title:y,href:d}),e.line=i),!0):!1}const E7=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],A7="[a-zA-Z_:][a-zA-Z0-9:._-]*",S7="[^\"'=<>`\\x00-\\x20]+",T7="'[^']*'",I7='"[^"]*"',L7="(?:"+S7+"|"+T7+"|"+I7+")",$7="(?:\\s+"+A7+"(?:\\s*=\\s*"+L7+")?)",hp="<[A-Za-z][A-Za-z0-9\\-]*"+$7+"*\\s*\\/?>",mp="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",D7="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",P7="<[?][\\s\\S]*?[?]>",R7="<![A-Za-z][^>]*>",F7="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",O7=new RegExp("^(?:"+hp+"|"+mp+"|"+D7+"|"+P7+"|"+R7+"|"+F7+")"),M7=new RegExp("^(?:"+hp+"|"+mp+")"),su=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+E7.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(M7.source+"\\s*$"),/^$/,!1]];function z7(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let i=e.src.slice(r,o),a=0;for(;a<su.length&&!su[a][0].test(i);a++);if(a===su.length)return!1;if(u)return su[a][2];let s=t+1;if(!su[a][1].test(i)){for(;s<n&&!(e.sCount[s]<e.blkIndent);s++)if(r=e.bMarks[s]+e.tShift[s],o=e.eMarks[s],i=e.src.slice(r,o),su[a][1].test(i)){i.length!==0&&s++;break}}e.line=s;const l=e.push("html_block","",0);return l.map=[t,s],l.content=e.getLines(t,s,e.blkIndent,!0),!0}function B7(e,t,n,u){let r=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.src.charCodeAt(r);if(i!==35||r>=o)return!1;let a=1;for(i=e.src.charCodeAt(++r);i===35&&r<o&&a<=6;)a++,i=e.src.charCodeAt(++r);if(a>6||r<o&&!We(i))return!1;if(u)return!0;o=e.skipSpacesBack(o,r);const s=e.skipCharsBack(o,35,r);s>r&&We(e.src.charCodeAt(s-1))&&(o=s),e.line=t+1;const l=e.push("heading_open","h"+String(a),1);l.markup="########".slice(0,a),l.map=[t,e.line];const c=e.push("inline","",0);c.content=e.src.slice(r,o).trim(),c.map=[t,e.line],c.children=[];const d=e.push("heading_close","h"+String(a),-1);return d.markup="########".slice(0,a),!0}function N7(e,t,n){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let o=0,i,a=t+1;for(;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3)continue;if(e.sCount[a]>=e.blkIndent){let p=e.bMarks[a]+e.tShift[a];const g=e.eMarks[a];if(p<g&&(i=e.src.charCodeAt(p),(i===45||i===61)&&(p=e.skipChars(p,i),p=e.skipSpaces(p),p>=g))){o=i===61?1:2;break}}if(e.sCount[a]<0)continue;let f=!1;for(let p=0,g=u.length;p<g;p++)if(u[p](e,a,n,!0)){f=!0;break}if(f)break}if(!o)return!1;const s=e.getLines(t,a,e.blkIndent,!1).trim();e.line=a+1;const l=e.push("heading_open","h"+String(o),1);l.markup=String.fromCharCode(i),l.map=[t,e.line];const c=e.push("inline","",0);c.content=s,c.map=[t,e.line-1],c.children=[];const d=e.push("heading_close","h"+String(o),-1);return d.markup=String.fromCharCode(i),e.parentType=r,!0}function j7(e,t,n){const u=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let o=t+1;for(e.parentType="paragraph";o<n&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let l=!1;for(let c=0,d=u.length;c<d;c++)if(u[c](e,o,n,!0)){l=!0;break}if(l)break}const i=e.getLines(t,o,e.blkIndent,!1).trim();e.line=o;const a=e.push("paragraph_open","p",1);a.map=[t,e.line];const s=e.push("inline","",0);return s.content=i,s.map=[t,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const no=[["table",b7,["paragraph","reference"]],["code",v7],["fence",y7,["paragraph","reference","blockquote","list"]],["blockquote",x7,["paragraph","reference","blockquote","list"]],["hr",_7,["paragraph","reference","blockquote","list"]],["list",k7,["paragraph","reference","blockquote"]],["reference",C7],["html_block",z7,["paragraph","reference","blockquote"]],["heading",B7,["paragraph","reference","blockquote"]],["lheading",N7],["paragraph",j7]];function ri(){this.ruler=new Ct;for(let e=0;e<no.length;e++)this.ruler.push(no[e][0],no[e][1],{alt:(no[e][2]||[]).slice()})}ri.prototype.tokenize=function(e,t,n){const u=this.ruler.getRules(""),r=u.length,o=e.md.options.maxNesting;let i=t,a=!1;for(;i<n&&(e.line=i=e.skipEmptyLines(i),!(i>=n||e.sCount[i]<e.blkIndent));){if(e.level>=o){e.line=n;break}const s=e.line;let l=!1;for(let c=0;c<r;c++)if(l=u[c](e,i,n,!1),l){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),i=e.line,i<n&&e.isEmpty(i)&&(a=!0,i++,e.line=i)}};ri.prototype.parse=function(e,t,n,u){if(!e)return;const r=new this.State(e,t,n,u);this.tokenize(r,r.line,r.lineMax)};ri.prototype.State=un;function Or(e,t,n,u){this.src=e,this.env=n,this.md=t,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Or.prototype.pushPending=function(){const e=new Kt("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Or.prototype.push=function(e,t,n){this.pending&&this.pushPending();const u=new Kt(e,t,n);let r=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(r),u};Or.prototype.scanDelims=function(e,t){const n=this.posMax,u=this.src.charCodeAt(e),r=e>0?this.src.charCodeAt(e-1):32;let o=e;for(;o<n&&this.src.charCodeAt(o)===u;)o++;const i=o-e,a=o<n?this.src.charCodeAt(o):32,s=_r(r)||xr(String.fromCharCode(r)),l=_r(a)||xr(String.fromCharCode(a)),c=yr(r),d=yr(a),f=!d&&(!l||c||s),p=!c&&(!s||d||l);return{can_open:f&&(t||!p||s),can_close:p&&(t||!f||l),length:i}};Or.prototype.Token=Kt;function H7(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function V7(e,t){let n=e.pos;for(;n<e.posMax&&!H7(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}const U7=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function G7(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,u=e.posMax;if(n+3>u||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const r=e.pending.match(U7);if(!r)return!1;const o=r[1],i=e.md.linkify.matchAtStart(e.src.slice(n-o.length));if(!i)return!1;let a=i.url;if(a.length<=o.length)return!1;a=a.replace(/\*+$/,"");const s=e.md.normalizeLink(a);if(!e.md.validateLink(s))return!1;if(!t){e.pending=e.pending.slice(0,-o.length);const l=e.push("link_open","a",1);l.attrs=[["href",s]],l.markup="linkify",l.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(a);const d=e.push("link_close","a",-1);d.markup="linkify",d.info="auto"}return e.pos+=a.length-o.length,!0}function q7(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const u=e.pending.length-1,r=e.posMax;if(!t)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let o=u-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<r&&We(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const hs=[];for(let e=0;e<256;e++)hs.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){hs[e.charCodeAt(0)]=1});function W7(e,t){let n=e.pos;const u=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=u))return!1;let r=e.src.charCodeAt(n);if(r===10){for(t||e.push("hardbreak","br",0),n++;n<u&&(r=e.src.charCodeAt(n),!!We(r));)n++;return e.pos=n,!0}let o=e.src[n];if(r>=55296&&r<=56319&&n+1<u){const a=e.src.charCodeAt(n+1);a>=56320&&a<=57343&&(o+=e.src[n+1],n++)}const i="\\"+o;if(!t){const a=e.push("text_special","",0);r<256&&hs[r]!==0?a.content=o:a.content=i,a.markup=i,a.info="escape"}return e.pos=n+1,!0}function K7(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const r=n;n++;const o=e.posMax;for(;n<o&&e.src.charCodeAt(n)===96;)n++;const i=e.src.slice(r,n),a=i.length;if(e.backticksScanned&&(e.backticks[a]||0)<=r)return t||(e.pending+=i),e.pos+=a,!0;let s=n,l;for(;(l=e.src.indexOf("`",s))!==-1;){for(s=l+1;s<o&&e.src.charCodeAt(s)===96;)s++;const c=s-l;if(c===a){if(!t){const d=e.push("code_inline","code",0);d.markup=i,d.content=e.src.slice(n,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[c]=l}return e.backticksScanned=!0,t||(e.pending+=i),e.pos+=a,!0}function Z7(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==126)return!1;const r=e.scanDelims(e.pos,!0);let o=r.length;const i=String.fromCharCode(u);if(o<2)return!1;let a;o%2&&(a=e.push("text","",0),a.content=i,o--);for(let s=0;s<o;s+=2)a=e.push("text","",0),a.content=i+i,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function Fc(e,t){let n;const u=[],r=t.length;for(let o=0;o<r;o++){const i=t[o];if(i.marker!==126||i.end===-1)continue;const a=t[i.end];n=e.tokens[i.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[a.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[a.token-1].type==="text"&&e.tokens[a.token-1].content==="~"&&u.push(a.token-1)}for(;u.length;){const o=u.pop();let i=o+1;for(;i<e.tokens.length&&e.tokens[i].type==="s_close";)i++;i--,o!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[o],e.tokens[o]=n)}}function Q7(e){const t=e.tokens_meta,n=e.tokens_meta.length;Fc(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Fc(e,t[u].delimiters)}const gp={tokenize:Z7,postProcess:Q7};function X7(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==95&&u!==42)return!1;const r=e.scanDelims(e.pos,u===42);for(let o=0;o<r.length;o++){const i=e.push("text","",0);i.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function Oc(e,t){const n=t.length;for(let u=n-1;u>=0;u--){const r=t[u];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const o=t[r.end],i=u>0&&t[u-1].end===r.end+1&&t[u-1].marker===r.marker&&t[u-1].token===r.token-1&&t[r.end+1].token===o.token+1,a=String.fromCharCode(r.marker),s=e.tokens[r.token];s.type=i?"strong_open":"em_open",s.tag=i?"strong":"em",s.nesting=1,s.markup=i?a+a:a,s.content="";const l=e.tokens[o.token];l.type=i?"strong_close":"em_close",l.tag=i?"strong":"em",l.nesting=-1,l.markup=i?a+a:a,l.content="",i&&(e.tokens[t[u-1].token].content="",e.tokens[t[r.end+1].token].content="",u--)}}function Y7(e){const t=e.tokens_meta,n=e.tokens_meta.length;Oc(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Oc(e,t[u].delimiters)}const bp={tokenize:X7,postProcess:Y7};function J7(e,t){let n,u,r,o,i="",a="",s=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let g=p+1;if(g<d&&e.src.charCodeAt(g)===40){for(l=!1,g++;g<d&&(n=e.src.charCodeAt(g),!(!We(n)&&n!==10));g++);if(g>=d)return!1;if(s=g,r=e.md.helpers.parseLinkDestination(e.src,g,e.posMax),r.ok){for(i=e.md.normalizeLink(r.str),e.md.validateLink(i)?g=r.pos:i="",s=g;g<d&&(n=e.src.charCodeAt(g),!(!We(n)&&n!==10));g++);if(r=e.md.helpers.parseLinkTitle(e.src,g,e.posMax),g<d&&s!==g&&r.ok)for(a=r.str,g=r.pos;g<d&&(n=e.src.charCodeAt(g),!(!We(n)&&n!==10));g++);}(g>=d||e.src.charCodeAt(g)!==41)&&(l=!0),g++}if(l){if(typeof e.env.references>"u")return!1;if(g<d&&e.src.charCodeAt(g)===91?(s=g+1,g=e.md.helpers.parseLinkLabel(e,g),g>=0?u=e.src.slice(s,g++):g=p+1):g=p+1,u||(u=e.src.slice(f,p)),o=e.env.references[ui(u)],!o)return e.pos=c,!1;i=o.href,a=o.title}if(!t){e.pos=f,e.posMax=p;const h=e.push("link_open","a",1),y=[["href",i]];h.attrs=y,a&&y.push(["title",a]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=g,e.posMax=d,!0}function e9(e,t){let n,u,r,o,i,a,s,l,c="";const d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,g=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(g<0)return!1;if(o=g+1,o<f&&e.src.charCodeAt(o)===40){for(o++;o<f&&(n=e.src.charCodeAt(o),!(!We(n)&&n!==10));o++);if(o>=f)return!1;for(l=o,a=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),a.ok&&(c=e.md.normalizeLink(a.str),e.md.validateLink(c)?o=a.pos:c=""),l=o;o<f&&(n=e.src.charCodeAt(o),!(!We(n)&&n!==10));o++);if(a=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<f&&l!==o&&a.ok)for(s=a.str,o=a.pos;o<f&&(n=e.src.charCodeAt(o),!(!We(n)&&n!==10));o++);else s="";if(o>=f||e.src.charCodeAt(o)!==41)return e.pos=d,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<f&&e.src.charCodeAt(o)===91?(l=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?r=e.src.slice(l,o++):o=g+1):o=g+1,r||(r=e.src.slice(p,g)),i=e.env.references[ui(r)],!i)return e.pos=d,!1;c=i.href,s=i.title}if(!t){u=e.src.slice(p,g);const h=[];e.md.inline.parse(u,e.md,e.env,h);const y=e.push("image","img",0),C=[["src",c],["alt",""]];y.attrs=C,y.children=h,y.content=u,s&&C.push(["title",s])}return e.pos=o,e.posMax=f,!0}const t9=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,n9=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function u9(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const u=e.pos,r=e.posMax;for(;;){if(++n>=r)return!1;const i=e.src.charCodeAt(n);if(i===60)return!1;if(i===62)break}const o=e.src.slice(u+1,n);if(n9.test(o)){const i=e.md.normalizeLink(o);if(!e.md.validateLink(i))return!1;if(!t){const a=e.push("link_open","a",1);a.attrs=[["href",i]],a.markup="autolink",a.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=o.length+2,!0}if(t9.test(o)){const i=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(i))return!1;if(!t){const a=e.push("link_open","a",1);a.attrs=[["href",i]],a.markup="autolink",a.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=o.length+2,!0}return!1}function r9(e){return/^<a[>\s]/i.test(e)}function o9(e){return/^<\/a\s*>/i.test(e)}function i9(e){const t=e|32;return t>=97&&t<=122}function a9(e,t){if(!e.md.options.html)return!1;const n=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=n)return!1;const r=e.src.charCodeAt(u+1);if(r!==33&&r!==63&&r!==47&&!i9(r))return!1;const o=e.src.slice(u).match(O7);if(!o)return!1;if(!t){const i=e.push("html_inline","",0);i.content=o[0],r9(i.content)&&e.linkLevel++,o9(i.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const s9=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,l9=/^&([a-z][a-z0-9]{1,31});/i;function c9(e,t){const n=e.pos,u=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=u)return!1;if(e.src.charCodeAt(n+1)===35){const o=e.src.slice(n).match(s9);if(o){if(!t){const i=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),a=e.push("text_special","",0);a.content=fs(i)?Mo(i):Mo(65533),a.markup=o[0],a.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(n).match(l9);if(o){const i=lp(o[0]);if(i!==o[0]){if(!t){const a=e.push("text_special","",0);a.content=i,a.markup=o[0],a.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function Mc(e){const t={},n=e.length;if(!n)return;let u=0,r=-2;const o=[];for(let i=0;i<n;i++){const a=e[i];if(o.push(0),(e[u].marker!==a.marker||r!==a.token-1)&&(u=i),r=a.token,a.length=a.length||0,!a.close)continue;t.hasOwnProperty(a.marker)||(t[a.marker]=[-1,-1,-1,-1,-1,-1]);const s=t[a.marker][(a.open?3:0)+a.length%3];let l=u-o[u]-1,c=l;for(;l>s;l-=o[l]+1){const d=e[l];if(d.marker===a.marker&&d.open&&d.end<0){let f=!1;if((d.close||a.open)&&(d.length+a.length)%3===0&&(d.length%3!==0||a.length%3!==0)&&(f=!0),!f){const p=l>0&&!e[l-1].open?o[l-1]+1:0;o[i]=i-l+p,o[l]=p,a.open=!1,d.end=i,d.close=!1,c=-1,r=-2;break}}}c!==-1&&(t[a.marker][(a.open?3:0)+(a.length||0)%3]=c)}}function d9(e){const t=e.tokens_meta,n=e.tokens_meta.length;Mc(e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Mc(t[u].delimiters)}function f9(e){let t,n,u=0;const r=e.tokens,o=e.tokens.length;for(t=n=0;t<o;t++)r[t].nesting<0&&u--,r[t].level=u,r[t].nesting>0&&u++,r[t].type==="text"&&t+1<o&&r[t+1].type==="text"?r[t+1].content=r[t].content+r[t+1].content:(t!==n&&(r[n]=r[t]),n++);t!==n&&(r.length=n)}const Zi=[["text",V7],["linkify",G7],["newline",q7],["escape",W7],["backticks",K7],["strikethrough",gp.tokenize],["emphasis",bp.tokenize],["link",J7],["image",e9],["autolink",u9],["html_inline",a9],["entity",c9]],Qi=[["balance_pairs",d9],["strikethrough",gp.postProcess],["emphasis",bp.postProcess],["fragments_join",f9]];function Mr(){this.ruler=new Ct;for(let e=0;e<Zi.length;e++)this.ruler.push(Zi[e][0],Zi[e][1]);this.ruler2=new Ct;for(let e=0;e<Qi.length;e++)this.ruler2.push(Qi[e][0],Qi[e][1])}Mr.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),u=n.length,r=e.md.options.maxNesting,o=e.cache;if(typeof o[t]<"u"){e.pos=o[t];return}let i=!1;if(e.level<r){for(let a=0;a<u;a++)if(e.level++,i=n[a](e,!0),e.level--,i){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;i||e.pos++,o[t]=e.pos};Mr.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,u=e.posMax,r=e.md.options.maxNesting;for(;e.pos<u;){const o=e.pos;let i=!1;if(e.level<r){for(let a=0;a<n;a++)if(i=t[a](e,!1),i){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(i){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Mr.prototype.parse=function(e,t,n,u){const r=new this.State(e,t,n,u);this.tokenize(r);const o=this.ruler2.getRules(""),i=o.length;for(let a=0;a<i;a++)o[a](r)};Mr.prototype.State=Or;function p9(e){const t={};e=e||{},t.src_Any=rp.source,t.src_Cc=op.source,t.src_Z=ap.source,t.src_P=cs.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter="(?:(?!"+n+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+n+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function wa(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(u){e[u]=n[u]})}),e}function oi(e){return Object.prototype.toString.call(e)}function h9(e){return oi(e)==="[object String]"}function m9(e){return oi(e)==="[object Object]"}function g9(e){return oi(e)==="[object RegExp]"}function zc(e){return oi(e)==="[object Function]"}function b9(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const vp={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function v9(e){return Object.keys(e||{}).reduce(function(t,n){return t||vp.hasOwnProperty(n)},!1)}const y9={"http:":{validate:function(e,t,n){const u=e.slice(t);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(u)?u.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const u=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(u)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:u.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const u=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(u)?u.match(n.re.mailto)[0].length:0}}},x9="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",_9="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function w9(e){e.__index__=-1,e.__text_cache__=""}function k9(e){return function(t,n){const u=t.slice(n);return e.test(u)?u.match(e)[0].length:0}}function Bc(){return function(e,t){t.normalize(e)}}function zo(e){const t=e.re=p9(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(x9),n.push(t.src_xn),t.src_tlds=n.join("|");function u(a){return a.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(u(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(u(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(u(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(u(t.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function o(a,s){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+s)}Object.keys(e.__schemas__).forEach(function(a){const s=e.__schemas__[a];if(s===null)return;const l={validate:null,link:null};if(e.__compiled__[a]=l,m9(s)){g9(s.validate)?l.validate=k9(s.validate):zc(s.validate)?l.validate=s.validate:o(a,s),zc(s.normalize)?l.normalize=s.normalize:s.normalize?o(a,s):l.normalize=Bc();return}if(h9(s)){r.push(a);return}o(a,s)}),r.forEach(function(a){e.__compiled__[e.__schemas__[a]]&&(e.__compiled__[a].validate=e.__compiled__[e.__schemas__[a]].validate,e.__compiled__[a].normalize=e.__compiled__[e.__schemas__[a]].normalize)}),e.__compiled__[""]={validate:null,normalize:Bc()};const i=Object.keys(e.__compiled__).filter(function(a){return a.length>0&&e.__compiled__[a]}).map(b9).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+i+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+i+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),w9(e)}function C9(e,t){const n=e.__index__,u=e.__last_index__,r=e.__text_cache__.slice(n,u);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=u+t,this.raw=r,this.text=r,this.url=r}function ka(e,t){const n=new C9(e,t);return e.__compiled__[n.schema].normalize(n,e),n}function It(e,t){if(!(this instanceof It))return new It(e,t);t||v9(e)&&(t=e,e={}),this.__opts__=wa({},vp,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=wa({},y9,e),this.__compiled__={},this.__tlds__=_9,this.__tlds_replaced__=!1,this.re={},zo(this)}It.prototype.add=function(t,n){return this.__schemas__[t]=n,zo(this),this};It.prototype.set=function(t){return this.__opts__=wa(this.__opts__,t),this};It.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let n,u,r,o,i,a,s,l,c;if(this.re.schema_test.test(t)){for(s=this.re.schema_search,s.lastIndex=0;(n=s.exec(t))!==null;)if(o=this.testSchemaAt(t,n[2],s.lastIndex),o){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=t.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(u=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(i=u.index+u[1].length,(this.__index__<0||i<this.__index__)&&(this.__schema__="",this.__index__=i,this.__last_index__=u.index+u[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(c=t.indexOf("@"),c>=0&&(r=t.match(this.re.email_fuzzy))!==null&&(i=r.index+r[1].length,a=r.index+r[0].length,(this.__index__<0||i<this.__index__||i===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=i,this.__last_index__=a))),this.__index__>=0};It.prototype.pretest=function(t){return this.re.pretest.test(t)};It.prototype.testSchemaAt=function(t,n,u){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,u,this):0};It.prototype.match=function(t){const n=[];let u=0;this.__index__>=0&&this.__text_cache__===t&&(n.push(ka(this,u)),u=this.__last_index__);let r=u?t.slice(u):t;for(;this.test(r);)n.push(ka(this,u)),r=r.slice(this.__last_index__),u+=this.__last_index__;return n.length?n:null};It.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const u=this.testSchemaAt(t,n[2],n[0].length);return u?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+u,ka(this,0)):null};It.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(u,r,o){return u!==o[r-1]}).reverse(),zo(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,zo(this),this)};It.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};It.prototype.onCompile=function(){};const _u=2147483647,Yt=36,ms=1,wr=26,E9=38,A9=700,yp=72,xp=128,_p="-",S9=/^xn--/,T9=/[^\0-\x7F]/,I9=/[\x2E\u3002\uFF0E\uFF61]/g,L9={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Xi=Yt-ms,Jt=Math.floor,Yi=String.fromCharCode;function Ln(e){throw new RangeError(L9[e])}function $9(e,t){const n=[];let u=e.length;for(;u--;)n[u]=t(e[u]);return n}function wp(e,t){const n=e.split("@");let u="";n.length>1&&(u=n[0]+"@",e=n[1]),e=e.replace(I9,".");const r=e.split("."),o=$9(r,t).join(".");return u+o}function kp(e){const t=[];let n=0;const u=e.length;for(;n<u;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<u){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}const D9=e=>String.fromCodePoint(...e),P9=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Yt},Nc=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Cp=function(e,t,n){let u=0;for(e=n?Jt(e/A9):e>>1,e+=Jt(e/t);e>Xi*wr>>1;u+=Yt)e=Jt(e/Xi);return Jt(u+(Xi+1)*e/(e+E9))},Ep=function(e){const t=[],n=e.length;let u=0,r=xp,o=yp,i=e.lastIndexOf(_p);i<0&&(i=0);for(let a=0;a<i;++a)e.charCodeAt(a)>=128&&Ln("not-basic"),t.push(e.charCodeAt(a));for(let a=i>0?i+1:0;a<n;){const s=u;for(let c=1,d=Yt;;d+=Yt){a>=n&&Ln("invalid-input");const f=P9(e.charCodeAt(a++));f>=Yt&&Ln("invalid-input"),f>Jt((_u-u)/c)&&Ln("overflow"),u+=f*c;const p=d<=o?ms:d>=o+wr?wr:d-o;if(f<p)break;const g=Yt-p;c>Jt(_u/g)&&Ln("overflow"),c*=g}const l=t.length+1;o=Cp(u-s,l,s==0),Jt(u/l)>_u-r&&Ln("overflow"),r+=Jt(u/l),u%=l,t.splice(u++,0,r)}return String.fromCodePoint(...t)},Ap=function(e){const t=[];e=kp(e);const n=e.length;let u=xp,r=0,o=yp;for(const s of e)s<128&&t.push(Yi(s));const i=t.length;let a=i;for(i&&t.push(_p);a<n;){let s=_u;for(const c of e)c>=u&&c<s&&(s=c);const l=a+1;s-u>Jt((_u-r)/l)&&Ln("overflow"),r+=(s-u)*l,u=s;for(const c of e)if(c<u&&++r>_u&&Ln("overflow"),c===u){let d=r;for(let f=Yt;;f+=Yt){const p=f<=o?ms:f>=o+wr?wr:f-o;if(d<p)break;const g=d-p,h=Yt-p;t.push(Yi(Nc(p+g%h,0))),d=Jt(g/h)}t.push(Yi(Nc(d,0))),o=Cp(r,l,a===i),r=0,++a}++r,++u}return t.join("")},R9=function(e){return wp(e,function(t){return S9.test(t)?Ep(t.slice(4).toLowerCase()):t})},F9=function(e){return wp(e,function(t){return T9.test(t)?"xn--"+Ap(t):t})},Sp={version:"2.3.1",ucs2:{decode:kp,encode:D9},decode:Ep,encode:Ap,toASCII:F9,toUnicode:R9},O9={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},M9={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},z9={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},B9={default:O9,zero:M9,commonmark:z9},N9=/^(vbscript|javascript|file|data):/,j9=/^data:image\/(gif|png|jpeg|webp);/;function H9(e){const t=e.trim().toLowerCase();return N9.test(t)?j9.test(t):!0}const Tp=["http:","https:","mailto:"];function V9(e){const t=ls(e,!0);if(t.hostname&&(!t.protocol||Tp.indexOf(t.protocol)>=0))try{t.hostname=Sp.toASCII(t.hostname)}catch{}return Fr(ss(t))}function U9(e){const t=ls(e,!0);if(t.hostname&&(!t.protocol||Tp.indexOf(t.protocol)>=0))try{t.hostname=Sp.toUnicode(t.hostname)}catch{}return Lu(ss(t),Lu.defaultChars+"%")}function Ht(e,t){if(!(this instanceof Ht))return new Ht(e,t);t||ds(e)||(t=e||{},e="default"),this.inline=new Mr,this.block=new ri,this.core=new ps,this.renderer=new zu,this.linkify=new It,this.validateLink=H9,this.normalizeLink=V9,this.normalizeLinkText=U9,this.utils=q4,this.helpers=ni({},Q4),this.options={},this.configure(e),t&&this.set(t)}Ht.prototype.set=function(e){return ni(this.options,e),this};Ht.prototype.configure=function(e){const t=this;if(ds(e)){const n=e;if(e=B9[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this};Ht.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(r){return n.indexOf(r)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this};Ht.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){n=n.concat(this[r].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(r){return n.indexOf(r)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this};Ht.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};Ht.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens};Ht.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};Ht.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens};Ht.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G9(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ji={exports:{}},Hc;function q9(){return Hc||(Hc=1,function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(u){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},a={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function b(m){return m instanceof s?new s(m.type,b(m.content),m.alias):Array.isArray(m)?m.map(b):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++o}),b.__id},clone:function b(m,v){v=v||{};var T,P;switch(a.util.type(m)){case"Object":if(P=a.util.objId(m),v[P])return v[P];T={},v[P]=T;for(var A in m)m.hasOwnProperty(A)&&(T[A]=b(m[A],v));return T;case"Array":return P=a.util.objId(m),v[P]?v[P]:(T=[],v[P]=T,m.forEach(function(k,L){T[L]=b(k,v)}),T);default:return m}},getLanguage:function(b){for(;b;){var m=r.exec(b.className);if(m)return m[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,m){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(T){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(b){var m=document.getElementsByTagName("script");for(var v in m)if(m[v].src==b)return m[v]}return null}},isActive:function(b,m,v){for(var T="no-"+m;b;){var P=b.classList;if(P.contains(m))return!0;if(P.contains(T))return!1;b=b.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(b,m){var v=a.util.clone(a.languages[b]);for(var T in m)v[T]=m[T];return v},insertBefore:function(b,m,v,T){T=T||a.languages;var P=T[b],A={};for(var k in P)if(P.hasOwnProperty(k)){if(k==m)for(var L in v)v.hasOwnProperty(L)&&(A[L]=v[L]);v.hasOwnProperty(k)||(A[k]=P[k])}var D=T[b];return T[b]=A,a.languages.DFS(a.languages,function(N,I){I===D&&N!=b&&(this[N]=A)}),A},DFS:function b(m,v,T,P){P=P||{};var A=a.util.objId;for(var k in m)if(m.hasOwnProperty(k)){v.call(m,k,m[k],T||k);var L=m[k],D=a.util.type(L);D==="Object"&&!P[A(L)]?(P[A(L)]=!0,b(L,v,null,P)):D==="Array"&&!P[A(L)]&&(P[A(L)]=!0,b(L,v,k,P))}}},plugins:{},highlightAll:function(b,m){a.highlightAllUnder(document,b,m)},highlightAllUnder:function(b,m,v){var T={callback:v,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),a.hooks.run("before-all-elements-highlight",T);for(var P=0,A;A=T.elements[P++];)a.highlightElement(A,m===!0,T.callback)},highlightElement:function(b,m,v){var T=a.util.getLanguage(b),P=a.languages[T];a.util.setLanguage(b,T);var A=b.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(A,T);var k=b.textContent,L={element:b,language:T,grammar:P,code:k};function D(I){L.highlightedCode=I,a.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,a.hooks.run("after-highlight",L),a.hooks.run("complete",L),v&&v.call(L.element)}if(a.hooks.run("before-sanity-check",L),A=L.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!L.code){a.hooks.run("complete",L),v&&v.call(L.element);return}if(a.hooks.run("before-highlight",L),!L.grammar){D(a.util.encode(L.code));return}if(m&&u.Worker){var N=new Worker(a.filename);N.onmessage=function(I){D(I.data)},N.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else D(a.highlight(L.code,L.grammar,L.language))},highlight:function(b,m,v){var T={code:b,grammar:m,language:v};if(a.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=a.tokenize(T.code,T.grammar),a.hooks.run("after-tokenize",T),s.stringify(a.util.encode(T.tokens),T.language)},tokenize:function(b,m){var v=m.rest;if(v){for(var T in v)m[T]=v[T];delete m.rest}var P=new d;return f(P,P.head,b),c(b,P,m,P.head,0),g(P)},hooks:{all:{},add:function(b,m){var v=a.hooks.all;v[b]=v[b]||[],v[b].push(m)},run:function(b,m){var v=a.hooks.all[b];if(!(!v||!v.length))for(var T=0,P;P=v[T++];)P(m)}},Token:s};u.Prism=a;function s(b,m,v,T){this.type=b,this.content=m,this.alias=v,this.length=(T||"").length|0}s.stringify=function b(m,v){if(typeof m=="string")return m;if(Array.isArray(m)){var T="";return m.forEach(function(D){T+=b(D,v)}),T}var P={type:m.type,content:b(m.content,v),tag:"span",classes:["token",m.type],attributes:{},language:v},A=m.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(P.classes,A):P.classes.push(A)),a.hooks.run("wrap",P);var k="";for(var L in P.attributes)k+=" "+L+'="'+(P.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+P.tag+' class="'+P.classes.join(" ")+'"'+k+">"+P.content+"</"+P.tag+">"};function l(b,m,v,T){b.lastIndex=m;var P=b.exec(v);if(P&&T&&P[1]){var A=P[1].length;P.index+=A,P[0]=P[0].slice(A)}return P}function c(b,m,v,T,P,A){for(var k in v)if(!(!v.hasOwnProperty(k)||!v[k])){var L=v[k];L=Array.isArray(L)?L:[L];for(var D=0;D<L.length;++D){if(A&&A.cause==k+","+D)return;var N=L[D],I=N.inside,R=!!N.lookbehind,K=!!N.greedy,U=N.alias;if(K&&!N.pattern.global){var M=N.pattern.toString().match(/[imsuy]*$/)[0];N.pattern=RegExp(N.pattern.source,M+"g")}for(var J=N.pattern||N,q=T.next,ie=P;q!==m.tail&&!(A&&ie>=A.reach);ie+=q.value.length,q=q.next){var ce=q.value;if(m.length>b.length)return;if(!(ce instanceof s)){var ve=1,he;if(K){if(he=l(J,ie,b,R),!he||he.index>=b.length)break;var ye=he.index,Ie=he.index+he[0].length,Le=ie;for(Le+=q.value.length;ye>=Le;)q=q.next,Le+=q.value.length;if(Le-=q.value.length,ie=Le,q.value instanceof s)continue;for(var be=q;be!==m.tail&&(Le<Ie||typeof be.value=="string");be=be.next)ve++,Le+=be.value.length;ve--,ce=b.slice(ie,Le),he.index-=ie}else if(he=l(J,0,ce,R),!he)continue;var ye=he.index,H=he[0],ne=ce.slice(0,ye),ee=ce.slice(ye+H.length),O=ie+ce.length;A&&O>A.reach&&(A.reach=O);var z=q.prev;ne&&(z=f(m,z,ne),ie+=ne.length),p(m,z,ve);var Y=new s(k,I?a.tokenize(H,I):H,U,H);if(q=f(m,z,Y),ee&&f(m,q,ee),ve>1){var w={cause:k+","+D,reach:O};c(b,m,v,q.prev,ie,w),A&&w.reach>A.reach&&(A.reach=w.reach)}}}}}}function d(){var b={value:null,prev:null,next:null},m={value:null,prev:b,next:null};b.next=m,this.head=b,this.tail=m,this.length=0}function f(b,m,v){var T=m.next,P={value:v,prev:m,next:T};return m.next=P,T.prev=P,b.length++,P}function p(b,m,v){for(var T=m.next,P=0;P<v&&T!==b.tail;P++)T=T.next;m.next=T,T.prev=m,b.length-=P}function g(b){for(var m=[],v=b.head.next;v!==b.tail;)m.push(v.value),v=v.next;return m}if(!u.document)return u.addEventListener&&(a.disableWorkerMessageHandler||u.addEventListener("message",function(b){var m=JSON.parse(b.data),v=m.language,T=m.code,P=m.immediateClose;u.postMessage(a.highlight(T,a.languages[v],v)),P&&u.close()},!1)),a;var h=a.util.currentScript();h&&(a.filename=h.src,h.hasAttribute("data-manual")&&(a.manual=!0));function y(){a.manual||a.highlightAll()}if(!a.manual){var C=document.readyState;C==="loading"||C==="interactive"&&h&&h.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return a}(t);e.exports&&(e.exports=n),typeof jc<"u"&&(jc.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,o){var i={};i["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};a["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(u,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(u){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var o=u.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u="Loading…",r=function(h,y){return"✖ Error "+h+" while fetching file: "+y},o="✖ Error: File does not exist or is empty",i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",s="loading",l="loaded",c="failed",d="pre[data-src]:not(["+a+'="'+l+'"]):not(['+a+'="'+s+'"])';function f(h,y,C){var b=new XMLHttpRequest;b.open("GET",h,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?y(b.responseText):b.status>=400?C(r(b.status,b.statusText)):C(o))},b.send(null)}function p(h){var y=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(y){var C=Number(y[1]),b=y[2],m=y[3];return b?m?[C,Number(m)]:[C,void 0]:[C,C]}}n.hooks.add("before-highlightall",function(h){h.selector+=", "+d}),n.hooks.add("before-sanity-check",function(h){var y=h.element;if(y.matches(d)){h.code="",y.setAttribute(a,s);var C=y.appendChild(document.createElement("CODE"));C.textContent=u;var b=y.getAttribute("data-src"),m=h.language;if(m==="none"){var v=(/\.(\w+)$/.exec(b)||[,"none"])[1];m=i[v]||v}n.util.setLanguage(C,m),n.util.setLanguage(y,m);var T=n.plugins.autoloader;T&&T.loadLanguages(m),f(b,function(P){y.setAttribute(a,l);var A=p(y.getAttribute("data-range"));if(A){var k=P.split(/\r\n?|\n/g),L=A[0],D=A[1]==null?k.length:A[1];L<0&&(L+=k.length),L=Math.max(0,Math.min(L-1,k.length)),D<0&&(D+=k.length),D=Math.max(0,Math.min(D,k.length)),P=k.slice(L,D).join(`
`),y.hasAttribute("data-start")||y.setAttribute("data-start",String(L+1))}C.textContent=P,n.highlightElement(C)},function(P){y.setAttribute(a,c),C.textContent=P})}}),n.plugins.fileHighlight={highlight:function(y){for(var C=(y||document).querySelectorAll(d),b=0,m;m=C[b++];)n.highlightElement(m)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()}(Ji)),Ji.exports}var W9=q9();const lu=G9(W9);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var u={};u["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},u.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:u}};r["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},u={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:u},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:u},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:u.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:u.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=u.variable[1].inside,i=0;i<r.length;i++)o[r[i]]=e.languages.bash[r[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);var Vc={},Uc;function K9(){return Uc||(Uc=1,function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(Prism)),Vc}K9();(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function n(c){return c=c.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+c+")")}var u=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,r=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return u}),o=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+o+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+o+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(u),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(u),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:n(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(c){["url","bold","italic","strike","code-snippet"].forEach(function(d){c!==d&&(e.languages.markdown[c].inside.content.inside[d]=e.languages.markdown[d])})}),e.hooks.add("after-tokenize",function(c){if(c.language!=="markdown"&&c.language!=="md")return;function d(f){if(!(!f||typeof f=="string"))for(var p=0,g=f.length;p<g;p++){var h=f[p];if(h.type!=="code"){d(h.content);continue}var y=h.content[1],C=h.content[3];if(y&&C&&y.type==="code-language"&&C.type==="code-block"&&typeof y.content=="string"){var b=y.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");b=(/[a-z][\w-]*/i.exec(b)||[""])[0].toLowerCase();var m="language-"+b;C.alias?typeof C.alias=="string"?C.alias=[C.alias,m]:C.alias.push(m):C.alias=[m]}}}d(c.tokens)}),e.hooks.add("wrap",function(c){if(c.type==="code-block"){for(var d="",f=0,p=c.classes.length;f<p;f++){var g=c.classes[f],h=/language-(.+)/.exec(g);if(h){d=h[1];break}}var y=e.languages[d];if(y)c.content=e.highlight(l(c.content),y,d);else if(d&&d!=="none"&&e.plugins.autoloader){var C="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);c.attributes.id=C,e.plugins.autoloader.loadLanguages(d,function(){var b=document.getElementById(C);b&&(b.innerHTML=e.highlight(b.textContent,e.languages[d],d))})}}});var i=RegExp(e.languages.markup.tag.pattern.source,"gi"),a={amp:"&",lt:"<",gt:">",quot:'"'},s=String.fromCodePoint||String.fromCharCode;function l(c){var d=c.replace(i,"");return d=d.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(f,p){if(p=p.toLowerCase(),p[0]==="#"){var g;return p[1]==="x"?g=parseInt(p.slice(2),16):g=Number(p.slice(1)),s(g)}else{var h=a[p];return h||f}}),d}e.languages.md=e.languages.markdown})(Prism);var Gc={},qc;function Z9(){return qc||(qc=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),Gc}Z9();var Wc={},Kc;function Q9(){return Kc||(Kc=1,function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,u={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[u,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:u.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:u.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":u,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:u.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:u.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)),Wc}Q9();Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;var Zc={},Qc;function X9(){return Qc||(Qc=1,function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(Prism)),Zc}X9();var Xc={},Yc;function Y9(){return Yc||(Yc=1,function(e){function t(ie,ce){return ie.replace(/<<(\d+)>>/g,function(ve,he){return"(?:"+ce[+he]+")"})}function n(ie,ce,ve){return RegExp(t(ie,ce),"")}function u(ie,ce){for(var ve=0;ve<ce;ve++)ie=ie.replace(/<<self>>/g,function(){return"(?:"+ie+")"});return ie.replace(/<<self>>/g,"[^\\s\\S]")}var r={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function o(ie){return"\\b(?:"+ie.trim().replace(/ /g,"|")+")\\b"}var i=o(r.typeDeclaration),a=RegExp(o(r.type+" "+r.typeDeclaration+" "+r.contextual+" "+r.other)),s=o(r.typeDeclaration+" "+r.contextual+" "+r.other),l=o(r.type+" "+r.typeDeclaration+" "+r.other),c=u(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),d=u(/\((?:[^()]|<<self>>)*\)/.source,2),f=/@?\b[A-Za-z_]\w*\b/.source,p=t(/<<0>>(?:\s*<<1>>)?/.source,[f,c]),g=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[s,p]),h=/\[\s*(?:,\s*)*\]/.source,y=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[g,h]),C=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[c,d,h]),b=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[C]),m=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[b,g,h]),v={keyword:a,punctuation:/[<>()?,.:[\]]/},T=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,P=/"(?:\\.|[^\\"\r\n])*"/.source,A=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[A]),lookbehind:!0,greedy:!0},{pattern:n(/(^|[^@$\\])<<0>>/.source,[P]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[g]),lookbehind:!0,inside:v},{pattern:n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[f,m]),lookbehind:!0,inside:v},{pattern:n(/(\busing\s+)<<0>>(?=\s*=)/.source,[f]),lookbehind:!0},{pattern:n(/(\b<<0>>\s+)<<1>>/.source,[i,p]),lookbehind:!0,inside:v},{pattern:n(/(\bcatch\s*\(\s*)<<0>>/.source,[g]),lookbehind:!0,inside:v},{pattern:n(/(\bwhere\s+)<<0>>/.source,[f]),lookbehind:!0},{pattern:n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[y]),lookbehind:!0,inside:v},{pattern:n(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[m,l,f]),inside:v}],keyword:a,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n(/([(,]\s*)<<0>>(?=\s*:)/.source,[f]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[f]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[d]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[m,g]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[m]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:n(/<<0>>\s*<<1>>(?=\s*\()/.source,[f,c]),inside:{function:n(/^<<0>>/.source,[f]),generic:{pattern:RegExp(c),alias:"class-name",inside:v}}},"type-list":{pattern:n(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[i,p,f,m,a.source,d,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[p,d]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:a,"class-name":{pattern:RegExp(m),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var k=P+"|"+T,L=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[k]),D=u(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[L]),2),N=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,I=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[g,D]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[N,I]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(/^<<0>>(?=\s*:)/.source,[N]),alias:"keyword"},"attribute-arguments":{pattern:n(/\(<<0>>*\)/.source,[D]),inside:e.languages.csharp},"class-name":{pattern:RegExp(g),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var R=/:[^}\r\n]+/.source,K=u(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[L]),2),U=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[K,R]),M=u(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[k]),2),J=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[M,R]);function q(ie,ce){return{interpolation:{pattern:n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[ie]),lookbehind:!0,inside:{"format-string":{pattern:n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[ce,R]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[U]),lookbehind:!0,greedy:!0,inside:q(U,K)},{pattern:n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[J]),lookbehind:!0,greedy:!0,inside:q(J,M)}],char:{pattern:RegExp(T),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism)),Xc}Y9();Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){var t=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,u="(?:"+n.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+n.source+")?)",r=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),o=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(a,s){s=(s||"").replace(/m/g,"")+"m";var l=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return u}).replace(/<<value>>/g,function(){return a});return RegExp(l,s)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return u})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return u}).replace(/<<key>>/g,function(){return"(?:"+r+"|"+o+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(o),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);var Jc={},ed;function J9(){return ed||(ed=1,function(e){e.languages.ruby=e.languages.extend("clike",{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),e.languages.insertBefore("ruby","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}});var t={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:e.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"}}};delete e.languages.ruby.function;var n="(?:"+[/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,/\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,/\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,/\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,/<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source].join("|")+")",u=/(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;e.languages.insertBefore("ruby","keyword",{"regex-literal":[{pattern:RegExp(/%r/.source+n+/[egimnosux]{0,6}/.source),greedy:!0,inside:{interpolation:t,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:t,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp(/(^|[^:]):/.source+u),lookbehind:!0,greedy:!0},{pattern:RegExp(/([\r\n{(,][ \t]*)/.source+u+/(?=:(?!:))/.source),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),e.languages.insertBefore("ruby","string",{"string-literal":[{pattern:RegExp(/%[qQiIwWs]?/.source+n),greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:t,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp(/%x/.source+n),greedy:!0,inside:{interpolation:t,command:{pattern:/[\s\S]+/,alias:"string"}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:t,command:{pattern:/[\s\S]+/,alias:"string"}}}]}),delete e.languages.ruby.string,e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),e.languages.rb=e.languages.ruby}(Prism)),Jc}J9();var td={},nd;function ey(){return nd||(nd=1,function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(Prism)),td}ey();Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];var ud={},rd;function ty(){return rd||(rd=1,function(e){var t=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,n=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],u=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,r=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,o=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:t,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:u,operator:r,punctuation:o};var i={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},a=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:i}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:i}}];e.languages.insertBefore("php","variable",{string:a,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:t,string:a,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,number:u,operator:r,punctuation:o}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",function(s){if(/<\?/.test(s.code)){var l=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;e.languages["markup-templating"].buildPlaceholders(s,"php",l)}}),e.hooks.add("after-tokenize",function(s){e.languages["markup-templating"].tokenizePlaceholders(s,"php")})}(Prism)),ud}ty();(function(e){function t(n,u){return"___"+n.toUpperCase()+u+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,u,r,o){if(n.language===u){var i=n.tokenStack=[];n.code=n.code.replace(r,function(a){if(typeof o=="function"&&!o(a))return a;for(var s=i.length,l;n.code.indexOf(l=t(u,s))!==-1;)++s;return i[s]=a,l}),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,u){if(n.language!==u||!n.tokenStack)return;n.grammar=e.languages[u];var r=0,o=Object.keys(n.tokenStack);function i(a){for(var s=0;s<a.length&&!(r>=o.length);s++){var l=a[s];if(typeof l=="string"||l.content&&typeof l.content=="string"){var c=o[r],d=n.tokenStack[c],f=typeof l=="string"?l:l.content,p=t(u,c),g=f.indexOf(p);if(g>-1){++r;var h=f.substring(0,g),y=new e.Token(u,e.tokenize(d,n.grammar),"language-"+u,d),C=f.substring(g+p.length),b=[];h&&b.push.apply(b,i([h])),b.push(y),C&&b.push.apply(b,i([C])),typeof l=="string"?a.splice.apply(a,[s,1].concat(b)):l.content=b}}else l.content&&i(l.content)}return a}i(n.tokens)}}})})(Prism);const ny={class:"ai-chat-inner"},uy={class:"chat-container"},ry={class:"message-content"},oy={key:0,class:"message-avatar assistant-avatar"},iy=["innerHTML"],ay={key:1,class:"message-avatar user-avatar"},sy={class:"chat-input-container"},ly={class:"chat-input"},cy=["disabled"],dy=["disabled"],fy={key:0,class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},py={key:1},hy={key:2},my=fe({__name:"AIChat",setup(e){const t=He("aiChatSiteContext")||{pages:[],totalPages:0},n=typeof window<"u"?window.__AI_CHAT_OPTIONS||{}:{},u=Q([]),r=Q(""),o=Q([{role:"assistant",content:"你好！我是文档智能助手，有关于本文档的任何问题都可以问我。",displayContent:"你好！我是文档智能助手，有关于本文档的任何问题都可以问我。"}]),i=Q(!1),a=Q(!1),s=Q(null),l=Q(""),c=Mn(),d=Dr(),f=$t();Fe(()=>{const k=window.location.pathname;l.value=`vuepress-reco-chat-${k}`,g()});const p=()=>{if(typeof window<"u"&&window.localStorage){const k=o.value.map(L=>({...L,content:L.content||L.displayContent||"",displayContent:L.displayContent||L.content||""}));window.localStorage.setItem(l.value,JSON.stringify(k))}},g=()=>{if(typeof window<"u"&&window.localStorage){const k=window.localStorage.getItem(l.value);if(k)try{const L=JSON.parse(k);o.value=L.map(D=>({...D,content:D.content||D.displayContent||"",displayContent:D.displayContent||D.content||""})).filter(D=>D.content.trim()!=="")}catch(L){console.error("加载聊天历史失败:",L)}}};Pe(o,()=>{p()},{deep:!0});const h=async()=>{const k=r.value.trim();if(!(!k||i.value)){o.value.push({role:"user",content:k,displayContent:k}),r.value="",i.value=!0,await yn(),A();try{const L={role:"assistant",content:"正在思考...",displayContent:"正在思考..."};o.value.push(L),a.value=!0;const D=await C(k,N=>{N&&(L.content=L.content==="正在思考..."?N:L.content+N,L.displayContent=L.content,A())});if(D)L.content=D,L.displayContent=D;else if(L.content==="正在思考..."){const N=await b(k);L.content=N,L.displayContent=N}}catch(L){let D="抱歉，我遇到了一些问题，请稍后再试。";L instanceof Error&&(L.message.includes("network")||L.message.includes("fetch")?D="网络连接错误。请检查您的网络连接并重试。":(L.message.includes("API")||L.message.includes("key"))&&(D="API密钥错误或权限不足。请检查您的API设置。"),console.error("AI回复错误:",L));const N=o.value[o.value.length-1];N&&N.role==="assistant"&&N.content==="正在思考..."?(N.content=D,N.displayContent=D):o.value.push({role:"assistant",content:D,displayContent:D})}finally{i.value=!1,a.value=!1,p()}}},y=k=>{var K;if(console.log("搜索查询:",k),console.log("可用文档数量:",((K=t.pages)==null?void 0:K.length)||0),console.log("文档索引ID:",t.indexId||"未知"),!t||!t.pages||!t.pages.length)return console.log("没有可用的文档内容"),{relevantPages:[]};const L=k.toLowerCase().split(/[,.?!;:\n]/).filter(U=>U.trim().length>0),D=new Set;k.trim().length>0&&D.add(k.toLowerCase().trim()),L.forEach(U=>{const M=U.trim();M.length>=2&&D.add(M),(U.match(/[\u4e00-\u9fa5]+/g)||[]).forEach(ce=>{if(ce.length>=1&&D.add(ce),ce.length>=2)for(let ve=0;ve<ce.length;ve++){const he=ce.charAt(ve);["系","列","配","置","文","档","主","题","插","件","页","标","组","件"].includes(he)&&D.add(he)}if(ce.length>=3)for(let ve=0;ve<ce.length-1;ve++){const he=ce.substring(ve,ve+2);D.add(he)}}),(U.match(/[a-zA-Z]+/g)||[]).forEach(ce=>{ce.length>=2&&D.add(ce)}),(U.match(/[a-zA-Z0-9_\-.]+/g)||[]).forEach(ce=>{ce.length>=2&&/[0-9_\-.]/.test(ce)&&D.add(ce)})});const N=Array.from(D);if(console.log("提取的关键词:",N),N.length===0)if(console.log("没有提取到关键词，使用完整查询"),k.length>=2)N.push(k.toLowerCase());else return console.log("查询过短，无法匹配"),{relevantPages:[]};console.log("处理后的关键词:",Array.from(D));let R=t.pages.map(U=>{const M=U.title.toLowerCase(),J=U.summary.toLowerCase(),q=(U.content||"").toLowerCase(),ie=(U.tags||[]).map(be=>be.toLowerCase()),ve=(U.headings||[]).map(be=>be.text.toLowerCase());let he=0,Ie=[];M.includes(k.toLowerCase())?(he+=50,Ie.push("标题完全匹配[+50]")):M.includes(k.toLowerCase().replace(/\s+/g,""))&&(he+=45,Ie.push("标题匹配无空格查询[+45]"));const Le=k.toLowerCase().trim().split(/\s+/);if(Le.length===1&&Le[0].length>=1){const be=Le[0];if(M.includes(be)){const ye=be.length/M.length,H=Math.min(40,Math.round(40*ye));he+=H,Ie.push(`标题部分匹配[+${H}]`)}}return q.includes(k.toLowerCase())&&(he+=30,Ie.push("内容完全匹配[+30]")),N.forEach(be=>{if(M.includes(be)){const ee=Math.min(20,Math.max(5,be.length*3));he+=ee,Ie.push(`标题包含关键词"${be}"[+${ee}]`)}const ye=ve.filter(ee=>ee.includes(be)).length;if(ye>0){const ee=ye*10;he+=ee,Ie.push(`${ye}个子标题包含"${be}"[+${ee}]`)}J.includes(be)&&(he+=8,Ie.push(`摘要包含"${be}"[+8]`));let H=0,ne=q.indexOf(be);for(;ne!==-1;){const ee=(ne===0||!/[a-zA-Z0-9\u4e00-\u9fa5]/.test(q.charAt(ne-1)))&&(ne+be.length===q.length||!/[a-zA-Z0-9\u4e00-\u9fa5]/.test(q.charAt(ne+be.length)));H+=ee?1.5:1,ne=q.indexOf(be,ne+1)}if(H>0){const ee=Math.min(H*(2+Math.min(3,be.length/2)),20);he+=ee,Ie.push(`内容包含"${be}"${H}次[+${ee.toFixed(1)}]`)}ie.some(ee=>ee.includes(be))&&(he+=5,Ie.push(`标签包含"${be}"[+5]`))}),L.forEach(be=>{if(be.length>=3){const ye=be.trim().toLowerCase();if(q.includes(ye)){const H=Math.min(15,5+be.length);he+=H,Ie.push(`内容包含完整短语"${ye}"[+${H}]`)}}}),he>0&&console.log(`页面"${U.title}"得分:${he}，匹配详情:`,Ie),{...U,score:he,matchDetails:Ie}}).filter(U=>U.score>0).sort((U,M)=>M.score-U.score);return R.length===0&&k.trim().length>=1&&(console.log("没有找到精确匹配，尝试模糊匹配"),R=t.pages.map(U=>{const M=U.title.toLowerCase(),J=(U.content||"").toLowerCase(),ie=(U.headings||[]).map(Ie=>Ie.text.toLowerCase());let ce=0,ve=[];const he=k.toLowerCase().trim();for(let Ie=0;Ie<he.length;Ie++){const Le=he.charAt(Ie);/[\u4e00-\u9fa5]/.test(Le)&&(M.includes(Le)&&(ce+=8,ve.push(`标题包含汉字"${Le}"[+8]`)),ie.some(be=>be.includes(Le))&&(ce+=5,ve.push(`子标题包含汉字"${Le}"[+5]`)),J.includes(Le)&&(ce+=3,ve.push(`内容包含汉字"${Le}"[+3]`)))}if(he.length>=2)for(let Ie=0;Ie<he.length-1;Ie++){const Le=he.substring(Ie,Ie+2);M.includes(Le)&&(ce+=10,ve.push(`标题包含"${Le}"[+10]`)),J.includes(Le)&&(ce+=5,ve.push(`内容包含"${Le}"[+5]`))}return ce>0&&console.log(`模糊匹配: 页面"${U.title}"得分:${ce}，匹配详情:`,ve),{...U,score:ce,matchDetails:ve}}).filter(U=>U.score>0).sort((U,M)=>M.score-U.score)),R=R.slice(0,5),console.log("找到相关文档:",R.length),R.forEach((U,M)=>{console.log(`文档 ${M+1}:`,U.title,"得分:",U.score)}),u.value=R,console.log("搜索结果已存储:",u.value.length,"条记录"),{relevantPages:R}},C=async(k,L)=>{var D,N,I;try{const R=P();if(!R)return console.warn("未配置DeepSeek API密钥，使用备用响应"),b(k);const K=d.value.title,U=d.value.description,M=c.value.title,J=c.value.path,{relevantPages:q}=y(k);let ie="";q.length>0?(ie=`以下是与用户问题相关的文档内容 (索引ID: ${t.indexId||"未知"}):
`,q.forEach((ye,H)=>{ie+=`
------- 文档 ${H+1} -------
`,ie+=`标题: ${ye.title}
路径: ${ye.path}
`,ye.tags&&ye.tags.length>0&&(ie+=`标签: ${ye.tags.join(", ")}
`),ye.headings&&ye.headings.length>0&&(ie+=`
文档结构:
`,ye.headings.forEach(ne=>{const ee="  ".repeat(ne.level-1);ie+=`${ee}- ${ne.text}
`})),ie+=`
完整内容:
${ye.content}
`}),ie+=`

请根据以上文档内容回答用户的问题。如果文档中没有相关信息，请说明这一点。`):ie="未找到与用户问题直接相关的文档内容。";const ce={model:n.model||"deepseek-chat",messages:[{role:"system",content:`你是${K}文档网站的AI助手。你的职责是基于文档内容准确回答用户问题。

当前站点信息:
- 站点名称: ${K}
- 站点描述: ${U}
- 用户当前浏览页面: ${M} (${J})

指导原则:
1. 你必须严格基于提供给你的文档内容回答问题，不要自行编造信息
2. 如果文档中包含了用户问题的直接答案，请引用该内容并清晰地解释
3. 如果文档中没有直接相关内容，请基于最相关的文档部分进行推断和解释
4. 强调重点内容，使用代码示例或列表增强可读性
5. 回答应简洁清晰，直接解决用户问题

${ie}

请根据上述文档内容，提供准确、具体、有帮助的回答。如果需要展示代码，请使用正确的代码格式。回答使用中文。`},...o.value.map(ye=>({role:ye.role,content:ye.content})),{role:"user",content:k}],temperature:n.temperature||.7,max_tokens:n.maxTokens||2e3,stream:!0},ve=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${R}`},body:JSON.stringify(ce)});if(!ve.ok){const ye=await ve.json();throw new Error(`API错误: ${((D=ye.error)==null?void 0:D.message)||"未知错误"}`)}if(!ve.body)throw new Error("响应体为空");const he=ve.body.getReader(),Ie=new TextDecoder("utf-8");let Le="",be="";for(;;){const{done:ye,value:H}=await he.read();if(ye)break;const ne=Ie.decode(H,{stream:!0});be+=ne;const ee=be.split(`
`);be=ee.pop()||"";for(const O of ee)if(O.trim()!==""&&O.trim()!=="data: [DONE]")try{const z=O.replace(/^data: /,""),w=((I=(N=JSON.parse(z).choices[0])==null?void 0:N.delta)==null?void 0:I.content)||"";w&&(Le+=w,L&&L(w))}catch(z){console.error("解析流数据错误:",z,O)}}return Le}catch(R){return console.error("DeepSeek API调用失败:",R),R instanceof Error&&console.error("API错误详情:",R.message,R.stack),R instanceof TypeError&&R.message.includes("fetch")?"网络连接错误。请检查您的网络连接并重试。":b(k)}},b=async k=>{await new Promise(N=>setTimeout(N,1e3));const{relevantPages:L}=y(k);if(L.length>0){let N=`[基于文档内容 - 索引ID: ${t.indexId||"未知"}] 根据我在文档中找到的信息：

`;const I=L[0];return N+=`来自《${I.title}》的内容:
${I.summary}

`,L.length>1&&(N+=`您可能还对以下页面感兴趣：
`,L.slice(1).forEach((R,K)=>{N+=`- [${R.title}](${R.path})
`})),N}const D=d.value.title;return c.value.title,k.toLowerCase().includes("主题")||k.toLowerCase().includes("theme")?"vuepress-theme-reco是一款简洁的vuepress博客和文档主题。它提供了博客、分类、标签、时间轴等功能，非常适合构建个人博客或项目文档。":k.toLowerCase().includes("插件")||k.toLowerCase().includes("plugin")?"vuepress-theme-reco支持多种插件，包括评论插件、页面插件、vue-previews插件和bulletin-popover插件等。您可以在文档中查看更详细的插件使用说明。":k.toLowerCase().includes("模块")||k.toLowerCase().includes("module")?"vuepress-theme-reco的首页由多个可配置模块组成，包括Banner、BannerBrand、Blog、MdContent、Comment、Footer和Features等。您可以通过frontmatter.modules来自定义显示哪些模块以及它们的顺序。":k.toLowerCase().includes("如何")||k.toLowerCase().includes("how")?"要开始使用vuepress-theme-reco主题，您可以通过以下命令初始化项目：```bash\npnpm install @vuepress-reco/theme-cli@1.0.7 -g\ntheme-cli init\n```然后按照提示选择2.x版本进行安装。":`[通用回复] 关于"${k}"的问题，我建议您查看${D}的官方文档获取更详细的信息。如果您有更具体的问题，请随时询问我！`},m=new Ht({html:!0,linkify:!0,typographer:!0,breaks:!0,highlight:function(k,L){const D=(L||"").toLowerCase(),N=D&&lu.languages[D]?D:null;if(N)try{return lu.highlight(k,lu.languages[N],N)}catch(I){console.error("Prism高亮错误:",I)}return k}});try{const k=require("markdown-it-table");m.use(k)}catch{}try{const k=require("markdown-it-task-lists");m.use(k,{enabled:!0,label:!0})}catch{}const v=m.renderer.rules.link_open||function(k,L,D,N,I){return I.renderToken(k,L,D)};m.renderer.rules.link_open=function(k,L,D,N,I){const R=k[L].attrIndex("class");R<0?k[L].attrPush(["class","external-link"]):k[L].attrs&&k[L].attrs[R]&&k[L].attrs[R][1]&&(k[L].attrs[R][1]+=" external-link");const K=k[L].attrIndex("href");if(K>=0&&k[L].attrs){const U=k[L].attrs[K];U&&U[1]&&/^https?:\/\//.test(U[1])&&(k[L].attrPush(["target","_blank"]),k[L].attrPush(["rel","noopener noreferrer"]))}return v(k,L,D,N,I)};const T=k=>{if(!k)return"";try{return`<div class="vuepress-markdown-body">${m.render(k)}</div>`}catch(L){console.error("Markdown渲染失败:",L);let D=k.replace(/```(\w*)\n([\s\S]*?)```/g,(N,I,R)=>{const K=I||"text",U=K.toLowerCase(),M=U&&U!=="text"&&lu.languages[U]?U:null;if(M)try{const J=lu.highlight(R,lu.languages[M],M);return`<div class="language-${M} ext-${M} line-numbers-mode"><pre class="language-${M}"><code>${J}</code></pre></div>`}catch(J){console.error("Prism高亮错误:",J)}return`<div class="language-${K} ext-${K} line-numbers-mode"><pre class="language-${K}"><code>${R.replace(/\n/g,"<br>").replace(/\s/g,"&nbsp;")}</code></pre></div>`});return D=D.replace(/`([^`]+)`/g,'<code class="inline-code">$1</code>'),D=D.replace(/^#{1,6}\s+(.+)$/gm,(N,I)=>{const R=N.trim().split(" ")[0].length;return`<h${R} class="vuepress-heading">${I}</h${R}>`}),D=D.replace(/^\s*[-*+]\s+(.+)$/gm,'<li class="vuepress-list-item">$1</li>'),D=D.replace(/(<li[^>]*>.*<\/li>)+/g,'<ul class="vuepress-list">$&</ul>'),D=D.replace(/\n\n/g,'</p><p class="vuepress-paragraph">'),D=D.replace(/\n/g,"<br>"),D.startsWith("<")||(D=`<p class="vuepress-paragraph">${D}</p>`),`<div class="vuepress-markdown-body">${D}</div>`}},P=()=>{const k=f.value.aiChat||{},L=n.apiKey;let D="";return typeof window<"u"&&window.localStorage&&(D=window.localStorage.getItem("deepseek-api-key")||""),k.apiKey||L||D||""},A=()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)};return Fe(()=>{A(),o.value=[{role:"assistant",content:"你好！我是Vuepress Reco文档智能助手，有什么可以帮到你的？",displayContent:"你好！我是Vuepress Reco文档智能助手，有什么可以帮到你的？"}]}),(k,L)=>(x(),S("section",ny,[$("div",uy,[$("div",{class:"chat-messages",ref_key:"chatMessagesRef",ref:s},[(x(!0),S(me,null,Re(o.value,(D,N)=>(x(),S("div",{key:N,class:ke(["message",D.role==="user"?"user-message":"assistant-message"])},[$("div",ry,[D.role==="assistant"?(x(),S("div",oy,L[1]||(L[1]=[$("span",{class:"robot-icon"},"🤖",-1)]))):V("",!0),$("div",{class:"message-text",innerHTML:T(D.displayContent||D.content)},null,8,iy),D.role==="user"?(x(),S("div",ay,L[2]||(L[2]=[$("span",{class:"user-icon"},"👤",-1)]))):V("",!0)])],2))),128))],512),$("div",sy,[$("div",ly,[kt($("input",{type:"text","onUpdate:modelValue":L[0]||(L[0]=D=>r.value=D),onKeyup:Im(h,["enter"]),placeholder:"有什么问题都可以问我...",disabled:i.value||a.value},null,40,cy),[[On,r.value]]),$("button",{onClick:h,disabled:i.value||a.value||!r.value.trim()},[!i.value&&!a.value?(x(),S("svg",fy,L[3]||(L[3]=[$("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$("path",{d:"M10 14L21 3"}),$("path",{d:"M21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3"})],-1)]))):a.value?(x(),S("span",py,"回复中...")):(x(),S("span",hy,"处理中..."))],8,dy)])])])]))}}),Ke=(e,t)=>{const n=e.__vccOpts||e;for(const[u,r]of t)n[u]=r;return n},gy=Ke(my,[["__scopeId","data-v-3e796f42"]]),by={class:"ai-chat-button-container"},vy={key:0,class:"ai-chat-window"},yy={class:"ai-chat-window-header"},xy={class:"header-buttons"},_y={class:"ai-chat-window-body"},wy=fe({__name:"AIChatButton",setup(e){const t=Q(!1),n=Q(null),u=()=>{t.value=!t.value},r=()=>{n.value&&n.value.clearChatHistory&&n.value.clearChatHistory()},o=a=>{const s=a.target,l=document.querySelector(".ai-chat-button-container");t.value&&l&&!l.contains(s)&&(t.value=!1)},i=()=>{window.innerWidth<768&&t.value&&(t.value=!1)};return Fe(()=>{document.addEventListener("click",o),window.addEventListener("resize",i)}),Ir(()=>{document.removeEventListener("click",o),window.removeEventListener("resize",i)}),Pe(t,a=>{a?document.body.classList.add("ai-chat-open"):document.body.classList.remove("ai-chat-open")}),(a,s)=>{var c;const l=ze("Xicons");return x(),S("div",by,[$("div",{class:"ai-chat-floating-button",onClick:u}," 🤖 "),t.value?(x(),S("div",vy,[$("div",yy,[re(l,{icon:"VolumeUp","icon-size":"20",text:`🤖 ${((c=a.bulletin)==null?void 0:c.title)||"AI Assistant"}`,color:"#fff","text-size":"16"},null,8,["text"]),$("div",xy,[(x(),S("svg",{class:"btn-new-chat",onClick:r,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},s[0]||(s[0]=[$("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$("circle",{cx:"12",cy:"12",r:"9"}),$("path",{d:"M9 12h6"}),$("path",{d:"M12 9v6"})],-1)]))),(x(),S("svg",{class:"btn-close icon",onClick:u,t:"1573745677073",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},s[1]||(s[1]=[$("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"},null,-1)])))])]),$("div",_y,[re(gy,{ref_key:"chatInstance",ref:n},null,512)])])):V("",!0)])}}}),ky={pages:[{path:"/README.html",title:"初始化，并选择 2.x",summary:"::: tip 前往  体验全新可视化搭建脚手架。 ::: **npx** **npm** **yarn**",content:`## 快速开始

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
\`\`\``,headings:[{level:2,text:"快速开始"},{level:1,text:"初始化，并选择 2.x"},{level:1,text:"初始化，并选择 2.x"},{level:1,text:"初始化，并选择 2.x"}],tags:[],categories:[]},{path:"/docs/message-board.html",title:"留言板",summary:"::: info 欢迎大家在此留下你的建议和意见，或者在  提交你的问题，或来  进行讨论。 :::",content:`::: info
欢迎大家在此留下你的建议和意见，或者在 [GitHub Issue](https://github.com/vuepress-reco/vuepress-theme-reco) 提交你的问题，或来 [GitHub Discussions](https://github.com/vuepress-reco/vuepress-theme-reco/discussions) 进行讨论。
:::`,headings:[],tags:[],categories:[]},{path:"/blogs/about.html",title:"vuepress-theme-reco",summary:"::: tip 介绍 1. 这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；<br> 2. 主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；<br> 3. 你可以打开  来查看效果。 :::  是基于  的博客主题。  功能比较简单，只适合书写简单的文档，但好在支持主题自定义，而个人又希望能够用它来书写博客，原因就是它足够的简洁，毫无疑问，这也符合很多程序员的观念，也就是在这种情况下， 的第一个版本经过一个通宵而产生。 主题开源不久，很多朋友通过各种联系方式，给到很多好的意见和建议，所以我个人也在积极地更新。 因为我是一名前端开发工程师，开发的过程中，总是想着能不能加入一些炫酷的效果，有很多次都是添加上又去掉，反反复复，最后都是被 **简洁** 的这个原则阻止掉，毕竟，现在我是将它当作一个产品来看待，并不是一个技术或者是技巧的尝试项目。 随着不断有用户过来询问：为什么  不能在  上使用？本来只是打算对  进行简单的bug修复的我，终究还是忍不住，开始了  的开发。又是在一个寂静的凌晨两点半（晚上就是出活快），我默默地开...",content:`[图片]
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
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,headings:[{level:2,text:"Play Together"},{level:3,text:"0.x"},{level:3,text:"1.x"},{level:3,text:"CLI"},{level:3,text:"Contribute"},{level:2,text:"Preview"},{level:2,text:"License"}],tags:[],categories:["blog"]},{path:"/blogs/deploy.html",title:"确保脚本抛出遇到的错误",summary:"> 这里我们只介绍 GitLab 和 GitHub 的 pages 功能的部署。 打开项目设置的  模块，将  设置为 ，这样我们就可以将博客项目放在  分支，而部署到  分支。 在根目录建一个  文件： ::: warning 如果你用的 MAC，在项目根目录借助  执行  即可；如果你使用的是 WINDOWS，在项目根目录借助  执行  即可。 :::  的自动部署需要借助  。 1. 打开 ，使用  登录； 2. 进入设置页面，点击  按钮，将需要自动部署的项目导入进来； 3. 项目列表中，项目后面有一个  按钮，点击进去将进行配置：    1. 获取 ：进入github的设置页面，点击  按钮，点击  按钮，在当前页面生成 ，名字随便写，只是起到区分作用；    2. 配置 ：将上面生成的  添加在项目的设置页面的 ，切记，名字不可随便写，在这里你写成 ；    3. 配置 ：（如果你的项目就在  分支，可以不用配置这里） 选择 你存放项目源码的分支， 选择 ， 选择 ，添加成功后便会生效。 4. 在根目录下创建 （）：      5. 现在去提交一下代码试试吧，在你提交成功后...",content:"> 这里我们只介绍 GitLab 和 GitHub 的 pages 功能的部署。\n\n## GitHub\n\n打开项目设置的 `GitHub Pages` 模块，将 `Source` 设置为 `gh-pages`，这样我们就可以将博客项目放在 `master` 分支，而部署到 `gh-pages` 分支。\n\n### 手动部署\n\n在根目录建一个 `deploy.sh` 文件：\n\n```bash\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io\n# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\n\ncd -\n```\n\n::: warning\n如果你用的 MAC，在项目根目录借助 `终端` 执行 `bash deploy.sh` 即可；如果你使用的是 WINDOWS，在项目根目录借助 `Git Bash` 执行 `bash deploy.sh` 即可。\n:::\n\n### 自动部署\n\n`GitHub` 的自动部署需要借助 `travis-ci` 。\n\n1. 打开 [travis-ci](https://travis-ci.com/)，使用 `GitHub` 登录；\n2. 进入设置页面，点击 `Manage repositories on GitHub` 按钮，将需要自动部署的项目导入进来；\n3. 项目列表中，项目后面有一个 `settings` 按钮，点击进去将进行配置：\n   1. 获取 `token`：进入github的设置页面，点击 `Developer settings` 按钮，点击 `Personal access tokens` 按钮，在当前页面生成 `token`，名字随便写，只是起到区分作用；\n   2. 配置 `token`：将上面生成的 `token` 添加在项目的设置页面的 `Environment Variables`，切记，名字不可随便写，在这里你写成 `GITHUB_TOKEN`；\n   3. 配置 `Cron Jobs`：（如果你的项目就在 `master` 分支，可以不用配置这里）`Branch` 选择 你存放项目源码的分支，`Interval` 选择 `monthly`，`Options` 选择 `Always run`，添加成功后便会生效。\n4. 在根目录下创建 `.travis.yml`（[配置规范](https://docs.travis-ci.com/user/deployment/pages/)）：\n    ```yml\n    language: node_js\n    node_js:\n      - lts/*\n    script:\n      - npm run build\n    deploy:\n      provider: pages\n      skip-cleanup: true\n      local_dir: docs/.vuepress/dist # 项目打包后生成的文件的目录\n      github-token: $GITHUB_TOKEN # 这里这个变量就是刚才配置 token 时填写的那个变量\n      keep-history: true\n      on:\n        branch: master # 项目源码所在的分支\n    ```\n5. 现在去提交一下代码试试吧，在你提交成功后 `travis-ci` 的控制台就能看到你的项目在部署了。\n\n## GitLab\n\n### 手动部署\n\n1. 设置输出目录为 `public`：\n\n   由于 `GitLab` 的 `pages` 功能的指定文件夹是 `public`，所以我们要将项目的输出目录改为 `public`，也就是将 `config.js` 的 `dest` 设置为 `public`；\n\n2. 本地编译，然后将项目提交到 `GitLab` 即可。\n\n### 自动部署\n\n1. 设置输出目录为 `public`；\n2. 由于 `GitLab` 自带 CI，所以就省去了很多的配置步骤，只需要在项目根目录创建 `.gitlab-ci.yml`（[配置规范](https://docs.gitlab.com/ee/ci/yaml/README.html)）：\n    ```yml\n    image: node:9.11.1\n\n    pages:\n      cache:\n        paths:\n        - node_modules/ # 缓存 node_modules，加速编译\n\n      script:\n      - npm install\n      - npm run docs:build\n      artifacts:\n        paths:\n        - public\n      only:\n      - master\n    ``` \n3. 将项目提交到 `GitLab` 即可。",headings:[{level:2,text:"GitHub"},{level:3,text:"手动部署"},{level:1,text:"确保脚本抛出遇到的错误"},{level:1,text:"生成静态文件"},{level:1,text:"进入生成的文件夹"},{level:1,text:"如果是发布到自定义域名"},{level:1,text:"echo 'www.example.com' > CNAME"},{level:1,text:"如果发布到 https://<USERNAME>.github.io"},{level:1,text:"git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master"},{level:1,text:"如果发布到 https://<USERNAME>.github.io/<REPO>"},{level:1,text:"git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages"},{level:3,text:"自动部署"},{level:2,text:"GitLab"},{level:3,text:"手动部署"},{level:3,text:"自动部署"}],tags:[],categories:["blog"]},{path:"/blogs/github-actions-secret-key.html",title:"如何在 GitHub Actions 时使用 secretKey",summary:"当我参考，使用  自动部署的时候发现要使用 Secret Key 去使用  评论功能，我就犯愁了。 直接写在  里虽说并没有谁会盗用（吧 😃），但显然不太安全。这是原 workflow 文件中下面这段启发了我。其他的变量难道也可以这样传到服务器上？ 果然  早就帮我们想好了解决办法。 -  简单说就是在对应 repo 的  区域里输入。 **注意⚠️**：上图中画圈的位置的 , 正确的英语语法是 , 不过这篇教程统一用 , 和下面的 也得一致! ~~英语好的朋友别嘲讽在下 😵~~ 再在  里用 去取，通过  存入服务器的环境变量。就可以用啦 👻。 做个实验。 里加上这样一段。 输出下图这样的结果。github 把结果加密了，不过可以发现，有设置的  和没有设置的 ， 出来是不一样的。由此可见，已经设置成功了。 直接试试吧。 在  之前加上环境参数那一段。 再在  内用 node 的语法去环境参数取就 OK 啦！ 结果是评论功能可以使用了呀 😍。 - 完整的  请参考我的  看起来一个小步骤但解决了大问题呢 💃。 --- :::tip 本文作者 ，博客 。 :::",content:`## 如何在 GitHub Actions 时使用 secretKey

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
:::`,headings:[{level:2,text:"如何在 GitHub Actions 时使用 secretKey"},{level:3,text:"问题"},{level:3,text:"解决方法"},{level:3,text:"实施"}],tags:["Github Actions","Secret Key"],categories:["blog"]},{path:"/blogs/github-actions.html",title:"使用 GitHub Actions 自动部署博客",summary:"本篇以  Github Pages 为例，并且假设你已经掌握了 GitHub Pages 的使用。 假设你的文章和静态文件在同一个仓库，使用  分支管理文章和代码，使用  分支存放生成的静态文件 一般部署博客的流程是： 1. 写一篇文章 2. 生成静态文件： 3. 切换  分支 4. 复制静态文件到  分支 5. 访问网址验证是否成功 博客就是用来写文章的，每次写篇文章还要搞那么多操作。 当你使用了 GitHub Actions 之后，流程可以简化为： 1. 写一篇文章 2. 提交到 GitHub 结束了，是不是很方便？ 从机械的流程中解脱，专注于写作。 那么开始打造我们的 GitHub Actions 吧。 我创建了一个在我的 GitHub 仓库，用的是 VuePress（一个 Vue 官方的静态站点生成器）。 后面部署的 Action 需要有操作你的仓库的权限，因此提前设置好 GitHub personal access（个人访问令牌）。 生成教程可以看 GitHub 官方的帮助文档：。 授予权限的时候只给  权限即可。 令牌名字一定要叫：，这是后面的 Action 需要用的。 >...",content:`# 使用 GitHub Actions 自动部署博客

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
- [http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)`,headings:[{level:1,text:"使用 GitHub Actions 自动部署博客"},{level:2,text:"设置 Secrets"},{level:2,text:"编写 workflow 文件"},{level:1,text:"触发条件：在 push 到 master 分支后"},{level:1,text:"任务"},{level:2,text:"验证"},{level:3,text:"部署失败"},{level:3,text:"部署成功"},{level:2,text:"其他"}],tags:["Github Actions","VuePress","博客"],categories:["blog"]},{path:"/blogs/lookroot.html",title:"感谢 lookroot 对于主题推广的贡献",summary:'lookroot 近期在 B 站的  的使用教程中，细致地针对 reco 主题的使用进行了讲解，在此非常感谢 lookroot 为主题推广所做的贡献，也希望大家多多关注这位大牛。 <iframe src="//player.bilibili.com/player.html?aid=583145008&cid=191619036&page=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>',content:'lookroot 近期在 B 站的 `vuepress` 的使用教程中，细致地针对 reco 主题的使用进行了讲解，在此非常感谢 lookroot 为主题推广所做的贡献，也希望大家多多关注这位大牛。\n\n<iframe src="//player.bilibili.com/player.html?aid=583145008&cid=191619036&page=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>',headings:[],tags:[],categories:["blog"]},{path:"/blogs/one-year-old.html",title:"vuepress-theme-reco 一周岁",summary:"不知不觉， 已经一周岁了，静下心来回想这个过程，过程是美好的，结果也是美好的。 <!-- more --> 从开始的每天只有个位数的人次下载，到目前每天几百次的下载量；从无人问津，到目前活跃的评论社区和主题交流群（加  微信进群），还有几位朋友积极地贡献代码，提供丰富的想法，主题在朝着一个美好的前方前进，倍感欣慰。 做主题，是从为公司搭建文档平台开始，到后来是想着可以做一个博客或文档的解决方案，一切还只是个爱好而已。而目前使用的朋友越来越多，还有一些专业人士在关注，我就会不自觉的去考虑我现在做的这一步是不是对的，是不是完美的（当然并不完美）。 并且因为有了稳定贡献代码的朋友的加入，开发速度在加快，开发需求同样也在增多，我要时时刻刻去考虑下面要去做什么，可能更多的是因为自己能力还差很多，在项目管理的经验上也有不足，所以压力瞬间多了好多。 在赶着把  发版之后，感觉就像被掏空一样，毕竟这个项目不是工作，需要牺牲很多的上班之外的休息和学习时间。 熟悉主题的朋友都知道，我在这个版本中积极地去尝试插件化，可以让用户自由去组合主题的风格和功能，但是实际上目前只是实现了首页的自定义，离想象的样子还差...",content:`不知不觉，\`vuepress-theme-reco\` 已经一周岁了，静下心来回想这个过程，过程是美好的，结果也是美好的。

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

不管怎么样，在此还是想感谢目前参与开发的所有朋友，人多力量大、想法多，结果必然是美好的，未来也将会是一段不错的经历，不是吗？`,headings:[{level:2,text:"1"},{level:2,text:"2"},{level:2,text:"3"},{level:2,text:"4"}],tags:[],categories:["blog"]},{path:"/blogs/valine-admin.html",title:"Valine Admin 后台搭建(修订)",summary:'::: tip Valine Admin 是 Valine 评论系统的扩展和增强，主要实现评论邮件通知、评论管理、垃圾评论过滤等功能。支持完全自定义的邮件通知模板，基于Akismet API实现准确的垃圾评论过滤。 开发者   ::: 在云引擎-->部署界面，填写代码库并保存： > 也可以使用我根据的项目改写的地址： ，改编版本内容介绍请。 <br /> <img src="https://i.loli.net/2020/07/19/BCxjLA68ZOEtID7.png" alt="填写代码库" width="600" style="display: block;margin: auto" /> <br /> <img src="https://i.loli.net/2020/07/19/53bpWmS2MAJIXf9.png" alt="填写代码库" width="600" style="display: block;margin: auto" /> <img src="https://i.loli.net/2020/07/19/qZBdJPEmLzx5Oo6.png" alt="...',content:`::: tip
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
### **完结撒花:tada::tada::tada:**`,headings:[{level:2,text:'云引擎"一键"部署'},{level:3,text:"1. 填写代码库"},{level:3,text:"2.在设置页面，设置环境变量以及 Web 二级域名。"},{level:3,text:"3.切换到部署标签页，分支使用master，点击部署即可"},{level:3,text:"4.评论管理"},{level:4,text:"~~访问设置的二级域名`https://二级域名.leanapp.cn/sign-up` ，注册管理员登录信息，如：[https://nk6vtvs0tdwc.leanapp.cn/sign-up](https://nk6vtvs0tdwc.leanapp.cn/sign-up)~~"},{level:3,text:"5.定时任务设置"},{level:2,text:"邮件通知模板"},{level:3,text:"1.环境变量设定"},{level:3,text:"2.自定义模板"},{level:2,text:"改编版本教程"},{level:2,text:"Qmsg酱"},{level:3,text:"申请APPKey"},{level:3,text:"Qmsg模板"},{level:3,text:"QQ戳一戳"},{level:2,text:"Server酱"},{level:3,text:"申请SC_KEY"},{level:3,text:"消息 标题/内容 模板"},{level:3,text:"自定义 标题/内容 模板"},{level:4,text:"您可以点击[查看回复的完整內容](${POST_URL})`"},{level:2,text:"改编版本内容介绍"},{level:3,text:"**完结撒花:tada::tada::tada:**"}],tags:[],categories:["blog"]},{path:"/en/README.html",title:"Init，and choose 2.x",summary:"::: tip Go to  to experience the new visual scaffolding. ::: **npx** **npm** **yarn**",content:`## Quick Start

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
\`\`\``,headings:[{level:2,text:"Quick Start"},{level:1,text:"Init，and choose 2.x"},{level:1,text:"Init，and choose 2.x"},{level:1,text:"Init，and choose 2.x"}],tags:[],categories:[]},{path:"/docs/guide/architecture.html",title:"架构",summary:"reco 主题 2.0，将不再是一个单纯的主题，更像是一个快速搭建 vuepress 主题的解决方案，或者叫做 。 它依赖  为主题扩展的页面，同时可以为特定页面注入分类、标签和分页的相关数据，并依赖其他插件默认为主题扩展一些必要功能。 reco 主题 2.0 最核心的功能就是提供了网站风格的插槽，允许通过  指定网站风格和主题的其他配置，reco 主题将会内置一些风格，比如 reco 主题 1.0 的两种风格，并在未来也会拓展更多的风格，同时允许开发者更加轻松地自定义属于自己的风格。   开发者可以按照  的规范，依赖 reco 主题强大的风格插槽，任意扩展页面路由和页面内容，虽然使用同一款主题，但是每个人都可以拥有属于自己的风格。",content:`## 架构

[图片]

reco 主题 2.0，将不再是一个单纯的主题，更像是一个快速搭建 vuepress 主题的解决方案，或者叫做 \`容器\`。

它依赖 \`@vuepress-reco/vuepress-plugin-page\` 为主题扩展的页面，同时可以为特定页面注入分类、标签和分页的相关数据，并依赖其他插件默认为主题扩展一些必要功能。

reco 主题 2.0 最核心的功能就是提供了网站风格的插槽，允许通过 \`reco.config.js\` 指定网站风格和主题的其他配置，reco 主题将会内置一些风格，比如 reco 主题 1.0 的两种风格，并在未来也会拓展更多的风格，同时允许开发者更加轻松地自定义属于自己的风格。
 
## 主题风格

[图片]

开发者可以按照 \`风格 package\` 的规范，依赖 reco 主题强大的风格插槽，任意扩展页面路由和页面内容，虽然使用同一款主题，但是每个人都可以拥有属于自己的风格。`,headings:[{level:2,text:"架构"},{level:2,text:"主题风格"}],tags:[],categories:[]},{path:"/docs/guide/builtin-page.html",title:"内置页面",summary:":::tip 主题内置了一些页面，这些页面是承载了特定功能的独立页面，可以用于丰富站点的功能，比如可以将页面入口放在  上。 如果想要注册页面，请参考 。 ::: **博客列表页面** - 路由： - 描述：独立的博客列表页，给文档站提供一个通过博客跟用户互动的能力 - 案例：    **时间轴页面** - 路由： - 描述：博客的时间轴，可以作为归档页面 - 案例：    **友情链接** - 路由： - 描述：友情链接 - 案例：    - 配置：",content:`:::tip
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
  \`\`\``,headings:[],tags:[],categories:[]},{path:"/docs/guide/bundler.html",title:"打包工具",summary:"一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。你只需要通过  配置项指定打包工具即可： :::warning 因为  主题自改写了打包工具的默认配置，所以如果用户想要自定义打包工具的配置，需要借助  或 ，原来的  和  已无法生效。 :::",content:`## 使用打包工具

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
\`\`\``,headings:[{level:2,text:"使用打包工具"},{level:2,text:"配置"}],tags:[],categories:[]},{path:"/docs/guide/contribute.html",title:"安装",summary:"欢迎大家为 reco 主题贡献代码！ 首先你需要 fork 一份 ，并 clone 到本地，并确保本地已经安装了 。 以上准备工作完成以后，进入项目文件夹，并执行以下命令： 这个时候，项目已经启动，你可以  中去测试你的功能，要确保你的代码已经经过详细测试，并通过了  命令，功能测试完一定要同步文档。 提交 commit 请使用  命令，严格按照规范去提交代码，commit 信息务必使用英文。 PR 标题简单明了，PR 详情中要详细描述你所提交的内容，必要时要贴图，PR 信息务必使用英文。",content:`欢迎大家为 reco 主题贡献代码！

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

PR 标题简单明了，PR 详情中要详细描述你所提交的内容，必要时要贴图，PR 信息务必使用英文。`,headings:[{level:2,text:"项目初始化"},{level:1,text:"安装"},{level:1,text:"编译"},{level:1,text:"启动"},{level:2,text:"代码提交规范"},{level:2,text:"PR 规范"}],tags:[],categories:[]},{path:"/docs/guide/custom-style.html",title:"自定义样式",summary:"如果需要对主题样式进行覆盖，只需要在  中书写需要覆盖的样式的即可，书写规范请参考 。",content:"如果需要对主题样式进行覆盖，只需要在 `.vuepress/styles/index.css` 中书写需要覆盖的样式的即可，书写规范请参考 [指南/样式](/docs/guide/style)。",headings:[],tags:[],categories:[]},{path:"/docs/guide/folder-specification.html",title:"文件夹规范",summary:":::warning reco 主题实现了博客的功能，但是 vuepress 没有办法区分博客或是文档，导致文档也会出现在博客区域，所以主题对博客和文档的存放位置进行了约束，博客文章请放在  文件夹中（强制），文档系列请放在  文件夹中（强制），普通文档请放在  中（不强制）。 :::",content:":::warning\nreco 主题实现了博客的功能，但是 vuepress 没有办法区分博客或是文档，导致文档也会出现在博客区域，所以主题对博客和文档的存放位置进行了约束，博客文章请放在 `/blogs` 文件夹中（强制），文档系列请放在 `/series` 文件夹中（强制），普通文档请放在 `/docs` 中（不强制）。\n:::",headings:[],tags:[],categories:[]},{path:"/docs/guide/getting-started.html",title:"初始化，并选择 2.x",summary:"::: tip 前往  体验全新可视化搭建脚手架。 ::: **npx** **npm** **yarn**",content:`## 快速开始

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
\`\`\``,headings:[{level:2,text:"快速开始"},{level:1,text:"初始化，并选择 2.x"},{level:1,text:"初始化，并选择 2.x"},{level:1,text:"初始化，并选择 2.x"},{level:2,text:"手动安装"},{level:1,text:"or"}],tags:[],categories:[]},{path:"/docs/guide/gui-builder.html",title:"全局安装 revili",summary:":::warning 目前可视化搭建脚手架处于 alpha 阶段，功能比较简陋，仅用于尝鲜，欢迎大家前往  提出宝贵的建议。 ::: 主题的使用仍然有一定的门槛，为了方便新手快速入门，尤其是非前端开发者，reco 主题尝试基于  开发可视化搭建平台。",content:`:::warning
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

[图片]`,headings:[{level:2,text:"简介"},{level:1,text:"全局安装 revili"},{level:1,text:"安装 reco 主题套件"},{level:1,text:"启动可视化搭建平台"},{level:2,text:"效果展示"},{level:3,text:"项目列表"},{level:3,text:"选择文件夹"},{level:3,text:"设置参数"},{level:3,text:"创建项目"}],tags:[],categories:[]},{path:"/docs/guide/icon.html",title:"图标",summary:":::warning 原来 reco 主题的图标只集成了  1 种图标，因为定制能力受限， 版本之后，reco 主题不再内置图标，而是允许用户定制任何自己想要的图标。 ::: 在  下注册图标组件，比如新增一个 ： > svg 可以去  获取，其他 svg 资源均可。 :::: code-group ::: code-group-item 在 config 文件中使用 ::: ::: code-group-item 在 mackdown 中使用 ::: :::: 如果想要在自定义组件或 markdown 中直接使用 svg 图标： |参数|说明|类型|可选值|默认值| |-|-|-|-|-| |icon|图标|string|自定义的图标组件名称|-| |color|图标和文本的颜色|string|-|inherit| |iconPosition|图标的位置，同时设置了 icon 和 text 时才有意义|string|top/bottom/left/right|left| |iconSize|图标的大小|string|-|18| |text|文本的内容|string|-|-| |tex...",content:`## 介绍

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
|icon|通过外部图标来替换|`,headings:[{level:2,text:"介绍"},{level:2,text:"使用"},{level:3,text:"注册图标组件"},{level:3,text:"使用图标组件"},{level:2,text:"高级"},{level:2,text:"参考"},{level:3,text:"Props"},{level:3,text:"Slots"}],tags:[],categories:[]},{path:"/docs/guide/introduce.html",title:"介绍",summary:"欢迎使用 ，该主题有些功能参考了  默认主题，但是不再像  和  一样在默认主题上进行魔改了，这是全新的一套方案，比如样式是采用了  方案，博客等页面扩展能力则是通过插件  来实现的。 ::: warning 主题的配置，必须依赖此文档，不可拿官方默认主题文档来比较，因为仅有少量配置与官方默认主题文档重叠。 :::",content:"## 与默认主题的关系\n\n欢迎使用 `vuepress-theme-reco@2.x`，该主题有些功能参考了 `vuepress@2.x` 默认主题，但是不再像 `0.x` 和 `1.x` 一样在默认主题上进行魔改了，这是全新的一套方案，比如样式是采用了 `tailwindCSS` 方案，博客等页面扩展能力则是通过插件 `@vuepress-reco/vuepress-plugin-page` 来实现的。\n\n::: warning\n主题的配置，必须依赖此文档，不可拿官方默认主题文档来比较，因为仅有少量配置与官方默认主题文档重叠。\n:::\n\n## 与默认主题的重叠的配置",headings:[{level:2,text:"与默认主题的关系"},{level:2,text:"与默认主题的重叠的配置"}],tags:[],categories:[]},{path:"/docs/guide/package-manager.html",title:"包管理工具",summary:"如果包管理器使用的是  或 ， 中只需要包含： 1.  2.  3.  或  如果包管理器使用的是 ， 中还需要包含 。",content:`如果包管理器使用的是 \`npm\` 或 \`yarn\`，\`package.json\` 中只需要包含：
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
\`\`\``,headings:[],tags:[],categories:[]},{path:"/docs/guide/register-components.html",title:"注册组件",summary:"::: warning - 书写样式请参考 。 - 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 ::: 主题默认将  下面的  组件进行了全局注册。",content:"::: warning\n- 书写样式请参考 [指南/样式](/docs/guide/style)。\n- 如果我们文档项目存放在工程的子目录，比如 `/docs` 文件夹下，我们需要设置 `themeConfig.docsDir` 为 `/docs`。\n:::\n\n## 介绍\n\n主题默认将 `/.vuepress/components` 下面的 `.vue` 组件进行了全局注册。",headings:[{level:2,text:"介绍"}],tags:[],categories:[]},{path:"/docs/guide/register-layouts.html",title:"注册布局",summary:"::: warning - 书写样式请参考 。 - 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 ::: 主题默认将  下面的  组件注册为布局组件，如果组件的名字与主题内置的组件名字一样，则会覆盖默认布局。 **通用容器** 请使用  作为布局组件的外层容器，这样会为自定义的布局添加顶部导航、侧边栏等能力。 **别名** 可以通过这些别名直接引入需要的内置能力。 **样式** 请参考 。 **案例**",content:`::: warning
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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"指定某个页面的布局"},{level:2,text:"开发"}],tags:[],categories:[]},{path:"/docs/guide/style.html",title:"样式",summary:"reco 主题的 css 方案是  +  +  ，可以直接在 css 中直接书写嵌套格式和循环格式（类 scss），无论自定义样式，还是自定义组件均可直接使用。 :::: code-group ::: code-group-item tailwindcss in html ::: ::: code-group-item tailwindcss in css ::: ::: code-group-item css 嵌套 ::: ::: code-group-item css 循环 ::: :::: 如果在写 tailwindcss 时，用到 reco 主题自定义的基础样式、变量和组件，需要在 css 文件最上面引入  ：",content:`## 介绍

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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"示例"},{level:2,text:"注意"}],tags:[],categories:[]},{path:"/docs/others/donate.html",title:"打赏",summary:'<hr /> ::: tip  是一款完全免费的开源  主题。 开始时的兴趣和后来的责任是我不断更新动力。 得到很多网友的称赞、祝福和贡献，真的非常开心(^▽^)。 如果你觉得主题还不错，可以为作者贡献一杯奶茶。 ::: |WeChat|AliPay| |-|-| |<img style="width: 160px" src="/wechat.png" />|<img style="width: 160px" src="/alipay.png" />| <hr/> |昵称|日期|金额|备注| |:-:|:-:|:-:|:-:| |*士|2024-05-02|20|期望reco项目越来越好，也希望未来能为它做出贡献！| |*亮|2024-04-13|10|加油，很不错| |z*y|2023-11-30|10|越来越好| |*助|2023-06-23|50|-| |*健|2023-05-22|30|感谢Reco| |*林|2023-02-23|6.66|给大佬递茶🍵| |*栀|2023-01-09|9.9|-| |S*m|2022-11-30|1|-| |啊*k|2022-10-10|6...',content:`### 说明

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
|橘子|2019-07-12|15|coffee|`,headings:[{level:3,text:"说明"},{level:3,text:"打赏记录"}],tags:[],categories:[]},{path:"/docs/others/examples.html",title:"案例",summary:"::: tip 添加案例请点击  在最上面添加配置信息。（**要求：站点不可删除 footer 的主题推荐。**） ::: <examples />",content:`::: tip
添加案例请点击 [这里](https://github.com/vuepress-reco/vuepress-theme-reco/edit/main/docs/.vuepress/data/examples.ts) 在最上面添加配置信息。（**要求：站点不可删除 footer 的主题推荐。**）
:::

<examples />`,headings:[],tags:[],categories:[]},{path:"/docs/plugins/bulletin-popover.html",title:"公告插件",summary:"::: warning 请注意：该插件内部的组件的样式并没有内置，需要手动设置。 :::",content:`::: warning
请注意：该插件内部的组件的样式并没有内置，需要手动设置。
:::`,headings:[],tags:[],categories:[]},{path:"/docs/plugins/comments.html",title:"评论插件",summary:"::: warning 本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。 :::",content:`::: warning
本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。
:::`,headings:[],tags:[],categories:[]},{path:"/docs/plugins/page.html",title:"页面增强插件",summary:"::: warning 本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。 :::",content:`::: warning
本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。
:::`,headings:[],tags:[],categories:[]},{path:"/docs/plugins/vue-previews.html",title:"vue 组件预览插件",summary:"::: warning 本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。 :::",content:`::: warning
本插件仅适合主题开发者使用，请主题开发者先自行查看源码，开发文档后面补齐。
:::`,headings:[],tags:[],categories:[]},{path:"/en/docs/message-board.html",title:"message board",summary:"::: info You are welcome to leave your suggestions and comments here, or submit your questions at , or come to  for discussion. :::",content:`::: info
You are welcome to leave your suggestions and comments here, or submit your questions at [GitHub Issue](https://github.com/vuepress-reco/vuepress-theme-reco), or come to [GitHub Discussions](https://github.com/vuepress-theme-reco://github.com/vuepress-reco/vuepress-theme-reco/discussions) for discussion.
:::`,headings:[],tags:[],categories:[]},{path:"/docs/theme/appearance.html",title:"外观",summary:"主题默认根据系统的外观颜色来自动改变自己的外观颜色，但是允许用户设置默认外观颜色，可选值为 、、，默认 。",content:`## 介绍

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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"使用"}],tags:[],categories:[]},{path:"/docs/theme/auto-set-category.html",title:"自动设置分类",summary:"为了节约用户的时间成本，主题可以自动为  文件夹下的博客设置分类，也就是将该文件所在文件夹的名称设置为该文件的  的  的值。 ::: warning  API 后期会做调整，但不会废弃，请谨慎使用。 :::",content:`## 介绍

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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"配置"}],tags:[],categories:[]},{path:"/docs/theme/auto-set-series.html",title:"自动设置系列",summary:"为了节约用户的时间成本，主题可以自动将  文件夹下的文档，按照文件夹嵌套关系生成系列的配置。",content:`## 介绍

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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"配置"}],tags:[],categories:[]},{path:"/docs/theme/bulletin-popover.html",title:"公告",summary:"::: tip 公告内容展示在页面右上角，以弹窗的形式展示，该公告的显示和隐藏依赖于  里的变量，所以网站每次被打开，公告弹窗都会显示。 ::: **width** - 描述：公告宽度，单位  - 默认值： **title** - 描述：公告标题 - 默认值： **body** - 描述：公告内容 - 类型: `{     type: 'text' | 'hr' | 'title' | 'buttongroup',     content?: string,     children?: Array<{ text: string, link: string }>    }` - 类型说明：   |类型|说明|   |-|-|   |title|标题，需要配置  属性|   |text|文本，需要配置  属性|   |hr|隔断线，类似  标签，此类型不需要配置其他属性|   |buttongroup|按钮组，仅此类型需要配置 | - 案例：以主题官网为例 -",content:`::: tip
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
\`\`\``,headings:[{level:2,text:"配置"}],tags:[],categories:[]},{path:"/docs/theme/comments.html",title:"评论",summary:"主题内置评论插件 ，目前支持 ； 如果你想默认不加载评论，而只在某些页面显示评论功能，可以在  中设置 ，并在需要展示评论的页面设置 。 如果仅是某篇文章不想设置开启评论功能，可以在  设置 。 其他参数参考 。 ::: tip 如果 valine 的获取评论的接口报  错误的话，不用担心，这是因为你还没有添加评论，只要存在 1 条评论，就不会报错了，这是  的请求处理操作而已； ::: 使用教程及 options 其它参数参考 。 使用教程及 options 其它参数参考。 ::: warning Giscus 会在页面内放置指向 giscus.app 的 iframe，而该组件需要加载网站中的 css 文件才能使用配置文件中的主题，这会造成跨域问题。在使用开发服务器问题时，该问题无需处理；在正式部署时，需要配置  和  请求头，否则评论样式会出现问题。 :::",content:`## 介绍

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
:::`,headings:[{level:2,text:"介绍"},{level:2,text:"Option API"},{level:3,text:"Valine"},{level:3,text:"Waline"},{level:3,text:"Giscus"}],tags:[],categories:[]},{path:"/docs/theme/custom-container.html",title:"自定义容器",summary:"是必需的，  和  是可选的。 支持的  有： -  -  -  -  **输入** **输出** ::: tip 这是一个提示 ::: ::: info 这是一个提示 ::: ::: warning 这是一个警告 ::: ::: danger 这是一个危险警告 ::: ::: details 这是一个 details 标签 ::: **输入** js const foo = 'foo' js const bar = 'bar' ` **输出** :::: code-group ::: code-group-item FOO ::: ::: code-group-item BAR ::: ::::",content:`## 提示相关

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
::::`,headings:[{level:2,text:"提示相关"},{level:2,text:"代码相关"}],tags:[],categories:[]},{path:"/docs/theme/custom-primary-color.html",title:"自定义主题的基础色",summary:"::: warning 主题是通过  来配置 css 的，后期可能会开放更多的配置能力，所以当前功能的 API 在以后可能会改变。 ::: 如果你对主题的默认的主色不喜欢，可以通过  来自定义，主题会修改  的配置：",content:`::: warning
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
\`\`\``,headings:[],tags:[],categories:[]},{path:"/docs/theme/doc-search.html",title:"搜索功能",summary:"主题已经内置了简单的搜索能力，如果希望使用 ，可以进行配置。",content:`## 介绍

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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"配置"}],tags:[],categories:[]},{path:"/docs/theme/frontmatter-home.html",title:"首页",summary:"::: tip 为了满足用户更多的使用场景，主题已经将首页进行了模块化，用户可以在首页 md 文件的  中指定要展示的内容模块及其展示顺序，后期将开发更多的模块供大家使用，且支持用户按需自定义首页模块。 ::: 目前内置的首页模块有 、、、、、, ，其配置如下： - 描述：指定首页模块 - 默认值： - 可选值：、、、、、、 - 配置项：   - Banner：巨幅展示图，可以展示 logo、标题、简述、背景图，上下布局   - BannerBrand：品牌格式的巨幅展示图，可以展示 logo、标题、简述、背景图、按钮，左右布局   - Features: 首页特性列表   - Blog：博客模块，两栏布局，作则展示博客列表，右侧展示用户信息及博客相关内容   - MdContent：首页的 markdown 正文展示模块   - Comment: 评论模块   - Footer：首页底部模块 - 描述：用于配置 Banner 模块 - frontmatter 配置：   - heroText：标题   - tagline：简述   - heroImage: 首页 logo   - h...",content:`::: tip
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
\`\`\``,headings:[{level:2,text:"配置"},{level:3,text:"modules"},{level:3,text:"banner"},{level:3,text:"bannerBrand"},{level:3,text:"blog"},{level:3,text:"features"},{level:3,text:"footer"},{level:3,text:"MdContent"},{level:3,text:"Comment"},{level:2,text:"案例"},{level:2,text:"自定义首页模块"}],tags:[],categories:[]},{path:"/docs/theme/frontmatter-page.html",title:"普通文档",summary:":::tip 以下为  特有的  配置，其他配置请参考 。 ::: - 类型： - 详情：页面加密密码。 - 参考： - 类型： - 详情：文章置顶，按照 1, 2, 3, ... 来降序排序。 - 类型：  - 详情：为当前页面添加额外的类名。 - 示例：      然后你可以在  文件中为这个页面添加自定义样式：    - 参考：",content:`:::tip
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

- 参考：[默认主题 > 样式 > Style 文件](/docs/theme/custom-style.html)`,headings:[{level:2,text:"password"},{level:2,text:"sticky"},{level:2,text:"pageClass"}],tags:[],categories:[]},{path:"/docs/theme/git.html",title:"git 相关",summary:":::tip 用于生成 git 跳转地址和编辑链接。 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 ::: **repo** - 类型： string - 详情：项目仓库的 URL。它将被用作 仓库链接 的链接。仓库链接 将会显示为导航栏的最后一个元素。 **docsRepo** - 类型： string - 详情：文档源文件的仓库 URL 。它将会用于生成 编辑此页 的链接。如果你不设置该选项，则默认会使用 repo 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。 **docsBranch** - 类型： string - 默认值： 'main' - 详情：文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。 **docsDir** - 类型： string - 详情：文档项目存放在工程的子目录。如果我们文档项目存放在工程的子目录，比如 /docs 文件夹下，我们需要设置 themeConfig.docsDir 为 ./docs。务必要这样设置，因为这项配置与很多解析功能强相关。",content:`## 介绍

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
- 详情：文档项目存放在工程的子目录。如果我们文档项目存放在工程的子目录，比如 /docs 文件夹下，我们需要设置 themeConfig.docsDir 为 ./docs。务必要这样设置，因为这项配置与很多解析功能强相关。`,headings:[{level:2,text:"介绍"},{level:2,text:"配置"}],tags:[],categories:[]},{path:"/docs/theme/home.html",title:"another-home-path.md",summary:"某些场景下，文档的首页并不一定是文档根目录的  文件，这时我们可以在  中设置  来置顶首页，并通过  来指定首页路径。 :::: code-group ::: code-group-item 指定首页 ::: ::: code-group-item 指定首页路径 ::: ::::",content:`## 介绍

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
::::`,headings:[{level:2,text:"介绍"},{level:2,text:"配置"},{level:1,text:"another-home-path.md"}],tags:[],categories:[]},{path:"/docs/theme/markdown-file-parse.html",title:"解析文件为代码组",summary:":::warning 注意， 之后的版本取消了  文件夹的能力，所有组件都可以放在文件夹  中声明。 ::: **输入** **输出** @",content:":::warning\n注意，`2.0.0-rc.5` 之后的版本取消了 `vue-previews` 文件夹的能力，所有组件都可以放在文件夹 `components` 中声明。\n:::\n\n**输入**\n\n```md\n@[code-group](@/docs/.vuepress/components/demo.vue)\n```\n\n**输出**\n\n@[code-group](@/docs/.vuepress/components/demo.vue)",headings:[],tags:[],categories:[]},{path:"/docs/theme/markdown-task.html",title:"任务列表",summary:"**输入** **输出** - [x] 打游戏 - [ ] 学习",content:`**输入**

\`\`\`md
- [x] 打游戏
- [ ] 学习
\`\`\`

**输出**

- [x] 打游戏
- [ ] 学习`,headings:[],tags:[],categories:[]},{path:"/docs/theme/markdown-vue-preview.html",title:"Vue 组件预览",summary:":::warning 注意， 之后的版本取消了  文件夹的能力，所有组件都可以放在文件夹  中声明。 ::: :::tip 主题默认将  下面的  组件进行了全局注册，所以需要预览的组件请放在此目录下，注意：文件名不允许有  。 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 ::: **输入** **输出** @",content:":::warning\n注意，`2.0.0-rc.5` 之后的版本取消了 `vue-previews` 文件夹的能力，所有组件都可以放在文件夹 `components` 中声明。\n:::\n\n:::tip\n主题默认将 `/.vuepress/components` 下面的 `.vue` 组件进行了全局注册，所以需要预览的组件请放在此目录下，注意：文件名不允许有 `-` `_`。\n\n如果我们文档项目存放在工程的子目录，比如 `/docs` 文件夹下，我们需要设置 `themeConfig.docsDir` 为 `./docs`。\n:::\n\n**输入**\n\n```md\n@[preview](@/docs/.vuepress/components/demo.vue)\n```\n\n**输出**\n\n@[preview](@/docs/.vuepress/components/demo.vue)",headings:[],tags:[],categories:[]},{path:"/docs/theme/multilingual.html",title:"语言配置",summary:"这些选项用于配置与语言相关的文本。 如果你的站点是以英语以外的其他语言提供服务的，你应该为每个语言设置这些选项来提供翻译。 > 多语言配置请参考 。 |参数|类型|默认值|描述| |-|-|-|-| |categoriesText||Categories|分类| |tagsText||Tags|标签| |catalogTitle||ON THIS PAGE|文章右侧目录的标题| |selectLanguageName||${lang}|Locale 的语言名称| |editLinkText||Edit this page|编辑此页 链接的文字| |lastUpdatedText||Last Updated|最近更新时间戳 标签的文字| |tip||TIP|自定义提示容器的标题| |info||INFO|自定义信息容器的标题| |warning||WARNING|自定义警告容器的标题| |danger||DANGER|自定义危险容器的标题| |details||DETAILS|自定义详情容器的标题| |notFound||Oops! Page does not exist.|404 页面...",content:`## 介绍

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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"配置"},{level:2,text:"案例"}],tags:[],categories:[]},{path:"/docs/theme/navbar.html",title:"导航栏",summary:"::: tip 设置图标请参考  :::",content:`## 类型

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
\`\`\``,headings:[{level:2,text:"类型"},{level:2,text:"参考"}],tags:[],categories:[]},{path:"/docs/theme/pages.html",title:"注册页面",summary:":::info 可以通过  来自定义注册一些定制化的页面，比如时间轴页面。 ::: 注册布局，请参考 。",content:`:::info
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
\`\`\``,headings:[{level:2,text:"注册"}],tags:[],categories:[]},{path:"/docs/theme/password.html",title:"设置单个密码",summary:"::: tip 如果网站整体或者某篇文档具有私密性，不希望被公开，只有填入密钥登录后（关闭浏览器标签后登录失效），才能进入内容页面。 - 密码位数只能是 6 个字符 - 密码可以通过数组设置多个 ::: ::: warning 1. 加密的安全性较低，请酌情使用； 2. 如果设置了加密，锚点功能将失效。 ::: 如果你的密码明文是 ，需要将其转化为密文，也就是 ，使用密文去设置密码。 网站发布后，在密码输入框输入  即可进入网站，他人也无法通过代码中的密文知道你的密码，但是你一定要记住自己的密码明文。 请在下面的输入框输入密码明文，以获取相应的密文： <md5 />",content:`::: tip
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
\`\`\``,headings:[{level:2,text:"获取密文"},{level:2,text:"设置加密"},{level:3,text:"加密整个网站"},{level:3,text:"加密单个页面"},{level:1,text:"设置单个密码"},{level:1,text:"设置多个密码"}],tags:[],categories:[]},{path:"/docs/theme/series.html",title:"系列",summary:"在  中， 被更改为 ，由两部分原因： 1. 在  中，侧边栏被拆分为了  和 ，多个文档可以通过左侧边栏来聚合在一起，表达它们之间的联系，右侧边栏展示的则是当前页面的目录结构，因为考虑到  默认主题将他们都放在左侧侧边栏会将其表现的没有重点，但是通过  和  来表示  和 ，语意化又不太好； 2. 考虑到需要放在一起的文档一定是一个 “系列” 文档，比如教程、文集等，故采用了 。 ::: warning 如果左侧出现文章的名称显示成了文档的路径，可以把 children 变为完整模式。 :::",content:`## 介绍

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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"配置"},{level:3,text:"普通"},{level:3,text:"分组"},{level:3,text:"子分组"},{level:3,text:"异常"}],tags:[],categories:[]},{path:"/docs/theme/set-vite-bundler.html",title:"用户自定义配置打包",summary:"::: tip 我们默认配置了 postcss 的 plugins ，这是保证项目启动的基本配置。 ::: 如果你不满意我们现有的打包或者想要自定义打包配置，你可以使用该功能，该配置为 vuepress@2.x 提供的基于 Vite 的打包配置，， - 描述：自定义打包配置 - 配置项：   - viteOptions：接受 Vite 的所有选项。   - vuePluginOptions： 接受  的所有选项",content:`::: tip
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
\`\`\``,headings:[{level:2,text:"配置"},{level:3,text:"viteBundler"}],tags:[],categories:[]},{path:"/docs/theme/social-links.html",title:"社交地址",summary:"::: tip 设置图标请参考  :::",content:`## 类型

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
\`\`\``,headings:[{level:2,text:"类型"},{level:2,text:"案例"}],tags:[],categories:[]},{path:"/docs/theme/source-dir.html",title:"源文件文件夹",summary:":::warning 如果我们文档项目存放在工程的子目录，比如  文件夹下，我们需要设置  为 。 务必要这样设置，因为这项配置与很多解析功能强相关。 :::",content:`## 介绍

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
\`\`\``,headings:[{level:2,text:"介绍"},{level:2,text:"配置"}],tags:[],categories:[]},{path:"/en/docs/guide/architecture.html",title:"Architecture",summary:"reco theme 2.0, It will no longer be a simple theme, but more like a solution to quickly build a vuepress theme, or 。 It relies on  to extend the page for the theme, and can inject relevant data of categories, tags and paging for specific pages, and depends on other plugins to extend some necessary functions for the theme by default. The core function of reco theme 2.0 is to provide a website style slot, allowing the website style and other configuration of the theme to be specified through . Th...",content:`## Architecture

[图片]

reco theme 2.0, It will no longer be a simple theme, but more like a solution to quickly build a vuepress theme, or \`container\`。

It relies on \`@vuepress-reco/vuepress-plugin-page\` to extend the page for the theme, and can inject relevant data of categories, tags and paging for specific pages, and depends on other plugins to extend some necessary functions for the theme by default.

The core function of reco theme 2.0 is to provide a website style slot, allowing the website style and other configuration of the theme to be specified through \`reco.config.js\`. The reco theme will have some built-in styles, such as the two styles of reco theme 1.0, and will expand more styles in the future, while allowing developers to customize their own styles more easily.
 
## Theme Style

[图片]

Developers can follow the \`style package\` specification and rely on the powerful style slots of the reco theme to arbitrarily expand page routing and page content. Although they use the same theme, everyone can have their own style.`,headings:[{level:2,text:"Architecture"},{level:2,text:"Theme Style"}],tags:[],categories:[]},{path:"/en/docs/guide/builtin-page.html",title:"Build-in Page",summary:":::tip The theme has built-in pages that are independent pages with specific functions, that can be used to enrich the functionality of the site, such as placing the page entry on . If want to register pages，please refer to 。 ::: **Blog List Page** - route:  - description: A separate blog list page, that provides documentation stations with the ability to interact with users through blogs. - example:    **Timeline Page** - route:  - description: The timeline of the blog, which can be used as an ...",content:`:::tip
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
  \`\`\``,headings:[],tags:[],categories:[]},{path:"/en/docs/guide/bundler.html",title:"Bundler",summary:"Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress. You can use a bundler via the bundler option: :::warning 因为  主题自改写了打包工具的默认配置，所以如果用户想要自定义打包工具的配置，需要借助  或 ，原来的  和  已无法生效。 :::",content:`## Use a Bundler

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
\`\`\``,headings:[{level:2,text:"Use a Bundler"},{level:2,text:"Options"}],tags:[],categories:[]},{path:"/en/docs/guide/contribute.html",title:"Install",summary:"Welcome to contribute code to the reco theme! First, you need to fork a , clone it locally, and make sure that  is installed locally. After the above preparations are completed, go to the project folder and execute the following commands: ` At this time, the project has been started, and you can test your function in . Make sure that your code has been tested in detail and passed the  command. After the function test, you must synchronize the documentation. To submit a commit, please use the  co...",content:`Welcome to contribute code to the reco theme!

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

The PR title is simple and clear, the PR details should describe the content you submitted in detail, and stickers if necessary, and the PR information must be in English.`,headings:[{level:2,text:"Initialization"},{level:1,text:"Install"},{level:1,text:"Compile"},{level:1,text:"Start"},{level:2,text:"Git commit specification"},{level:2,text:"Git PR specification"}],tags:[],categories:[]},{path:"/en/docs/guide/custom-style.html",title:"Custom Style",summary:"If you need to override the theme style, you only need to write the style to be overridden in . For the writing specification, please refer to .",content:"If you need to override the theme style, you only need to write the style to be overridden in `.vuepress/styles/index.css`. For the writing specification, please refer to [Guide/Style](/en/docs/guide/style).",headings:[],tags:[],categories:[]},{path:"/en/docs/guide/folder-specification.html",title:"Folder Specification",summary:":::warning The reco theme implements the function of the blog, but vuepress has no way to distinguish blogs or documents, so the documents will also appear in the blog area, so the theme restricts the storage location of blogs and documents, blog articles should be placed in the  file folder (mandatory), documents sery should be placed in the  file folder (mandatory), ordinary documents should be placed in  (not mandatory). :::",content:":::warning\nThe reco theme implements the function of the blog, but vuepress has no way to distinguish blogs or documents, so the documents will also appear in the blog area, so the theme restricts the storage location of blogs and documents, blog articles should be placed in the `/blogs` file folder (mandatory), documents sery should be placed in the `/series` file folder (mandatory), ordinary documents should be placed in `/docs` (not mandatory).\n:::",headings:[],tags:[],categories:[]},{path:"/en/docs/guide/getting-started.html",title:"Init，and choose 2.x",summary:"::: tip Go to  to experience the new visual scaffolding. ::: **npx** **npm** **yarn**",content:`## Quick Start

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
\`\`\``,headings:[{level:2,text:"Quick Start"},{level:1,text:"Init，and choose 2.x"},{level:1,text:"Init，and choose 2.x"},{level:1,text:"Init，and choose 2.x"},{level:2,text:"Manual Installation"},{level:1,text:"or"}],tags:[],categories:[]},{path:"/en/docs/guide/gui-builder.html",title:"global installation of revili",summary:":::warning At present, the visual scaffolding is in the alpha stage, and its function is relatively simple, and it is only used for tasting. Welcome to  puts forward some valuable suggestions. ::: There is still a certain threshold for the use of themes. In order to facilitate beginners, especially non-front-end developers, reco theme try to build a visual platform based on .",content:`:::warning
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

[图片]`,headings:[{level:2,text:"Introduction"},{level:1,text:"global installation of revili"},{level:1,text:"install the reco theme kit"},{level:1,text:"launch a visual platform"},{level:2,text:"Display"},{level:3,text:"Project List"},{level:3,text:"Choose Folder"},{level:3,text:"Set Options"},{level:3,text:"Create Project"}],tags:[],categories:[]},{path:"/en/docs/guide/icon.html",title:"Icon",summary:":::warning Originally, the reco theme's icons only integrated one type of icon . Due to limited customization capabilities, after the  version, the reco theme no longer has built-in icons, but allows users to customize any icon they want. ::: Register icon components under , such as adding an : > svg 可以去  获取，其他 svg 资源均可。 :::: code-group ::: code-group-item Using in config file ::: ::: code-group-item Use in mackdown ::: :::: If you want to use the svg icon directly in a custom component or markd...",content:`## Introduction

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
|icon|Replace with an external icon|`,headings:[{level:2,text:"Introduction"},{level:2,text:"Usage"},{level:3,text:"Registrater icon component"},{level:3,text:"使用图标组件"},{level:2,text:"Advanced"},{level:2,text:"Reference"},{level:3,text:"Props"},{level:3,text:"Slots"}],tags:[],categories:[]},{path:"/en/docs/guide/introduce.html",title:"Introduce",summary:"Welcome to . Some features of this theme refer to the default theme of , but it is no longer modified on the default theme like  and . This is a new solution, for example, the style adopts the scheme of , and the page expansion capabilities such as blogs are realized through the plug-in . The configuration of the theme must rely on this document and cannot be compared with the official default theme document, as only a small number of configurations overlap with the official default theme docume...",content:"Welcome to `vuepress-theme-reco@2.x`. Some features of this theme refer to the default theme of `vuepress@ 2.x`, but it is no longer modified on the default theme like `0.x` and `1.x`. This is a new solution, for example, the style adopts the scheme of `tailwindCSS`, and the page expansion capabilities such as blogs are realized through the plug-in `@vuepress-reco/vuepress-plugin-page`.\n\nThe configuration of the theme must rely on this document and cannot be compared with the official default theme document, as only a small number of configurations overlap with the official default theme document.",headings:[],tags:[],categories:[]},{path:"/en/docs/guide/package-manager.html",title:"Package Manager",summary:"If the package manager uses  or , only the  needs to be included: 1. . 2. . 3.  or. If the package manager uses ,  also needs to include .",content:`If the package manager uses \`npm\` or \`yarn\`, only the \`package.json\` needs to be included:
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
\`\`\``,headings:[],tags:[],categories:[]},{path:"/en/docs/guide/register-components.html",title:"Register Components",summary:"::: warning - Please refer to  for writing style. - If our documentation project is stored in a subdirectory of the project, such as the  folder, we need to set  to . ::: By default, the theme registers the  components under  globally.",content:"::: warning\n- Please refer to [Guide/Style](/en/docs/guide/style) for writing style.\n- If our documentation project is stored in a subdirectory of the project, such as the `/docs` folder, we need to set `themeConfig.docsDir` to `/docs`.\n:::\n\n## Introduce\n\nBy default, the theme registers the `.vue` components under `/.vuepress/components` globally.",headings:[{level:2,text:"Introduce"}],tags:[],categories:[]},{path:"/en/docs/guide/register-layouts.html",title:"Register Layouts",summary:"::: warning - Please refer to  for writing style. - By default, the theme registers the  components under  globally. ::: By default, the theme registers the  components to layout component under  globally.If the component name is the same as the component name built into the theme, the default layout is overridden. **Generic Container** Please use  as the outer container for the layout component, which will add top navigation, sidebar and other capabilities to your customized layout. **Alias** Y...",content:`::: warning
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
\`\`\``,headings:[{level:2,text:"Introduce"},{level:2,text:"Specify the layout of a page"},{level:2,text:"Development"}],tags:[],categories:[]},{path:"/en/docs/guide/style.html",title:"Style",summary:"The css scheme of the reco theme is  +  + , you can directly write nested formats and loop formats (similar to scss) in css, which can be used directly regardless of custom styles or custom components. :::: code-group ::: code-group-item tailwindcss in html ::: ::: code-group-item tailwindcss in css ` ::: ::: code-group-item css nesting ` ::: ::: code-group-item css loop ` ::: :::: If you use the base, variables and components customized by the reco theme when writing tailwindcss, you need to im...",content:`## Introduce

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
\`\`\`\``,headings:[{level:2,text:"Introduce"},{level:2,text:"Example"},{level:2,text:"Notice"}],tags:[],categories:[]},{path:"/en/docs/plugins/bulletin-popover.html",title:"Announcement plugin",summary:"::: warning Please note: The styles of the components inside the plugin are not built-in and need to be set manually. :::",content:`::: warning
Please note: The styles of the components inside the plugin are not built-in and need to be set manually.
:::`,headings:[],tags:[],categories:[]},{path:"/en/docs/plugins/comments.html",title:"Comment plugin",summary:"::: warning This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later. :::",content:`::: warning
This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later.
:::`,headings:[],tags:[],categories:[]},{path:"/en/docs/plugins/page.html",title:"Page Enhancement Plugin",summary:"::: warning This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later. :::",content:`::: warning
This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later.
:::`,headings:[],tags:[],categories:[]},{path:"/en/docs/plugins/vue-previews.html",title:"vue component preview plugin",summary:"::: warning This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later. :::",content:`::: warning
This plug-in is only suitable for theme developers, please check the source code by yourself first, and complete the development documents later.
:::`,headings:[],tags:[],categories:[]},{path:"/en/docs/others/donate.html",title:"donate",summary:'<hr /> ::: tip  is a completely free and open source  theme. Interest in the beginning and responsibilities later on are my motivation for constant renewal. I am really happy to have received praise, blessings and contributions from many netizens (^▽^). If you think the theme is not bad, you can contribute a cup of milk tea to the author. ::: |WeChat|AliPay| |-|-| |<img style="width: 160px" src="/wechat.png" />|<img style="width: 160px" src="/alipay.png" />| <hr/> |昵称|日期|金额|备注| |:-:|:-:|:-:|:-:|...',content:`## 说明

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
|橘子|2019-07-12|15|coffee|`,headings:[{level:2,text:"说明"},{level:2,text:"Donation Record"}],tags:[],categories:[]},{path:"/en/docs/others/examples.html",title:"Examples",summary:"::: tip To add a case, click  adds configuration information at the top. (**Requirement: footer's topic recommendation cannot be deleted on the site.**) ::: <examples />",content:`::: tip
To add a case, click [here](https://github.com/vuepress-reco/vuepress-theme-reco/edit/main/docs/.vuepress/data/examples.ts) adds configuration information at the top. (**Requirement: footer's topic recommendation cannot be deleted on the site.**)
:::

<examples />`,headings:[],tags:[],categories:[]},{path:"/en/docs/theme/appearance.html",title:"Appearance",summary:"The theme automatically changes its appearance color according to the appearance color of the system by default, but allows users to set the default appearance color. Available values are , , , default .",content:`## Introduction

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
\`\`\``,headings:[{level:2,text:"Introduction"},{level:2,text:"Usage"}],tags:[],categories:[]},{path:"/en/docs/theme/auto-set-category.html",title:"Auto Set Categories",summary:"In order to save users' time cost, the theme can automatically set the classification for the blog under the  folder, that is, set the name of the folder where the file is located to the value of the  of the file's . ::: warning The  API will be adjusted later, but will not be abandoned, please use it with caution. :::",content:`## Introduction

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
\`\`\``,headings:[{level:2,text:"Introduction"},{level:2,text:"Configure"}],tags:[],categories:[]},{path:"/en/docs/theme/auto-set-series.html",title:"Auto Set Series",summary:"In order to save users' time cost, the theme can automatically generate a series of configurations for the documents under the  folder according to the folder nesting relationship.",content:`## Introduction

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
\`\`\``,headings:[{level:2,text:"Introduction"},{level:2,text:"Configure"}],tags:[],categories:[]},{path:"/en/docs/theme/bulletin-popover.html",title:"Announcement",summary:"::: tip The content of the announcement is displayed in the upper right corner of the page in the form of a pop-up window. The display and hiding of the announcement depends on the variables in , so every time the website is opened, the announcement pop-up window will be displayed. ::: **width** - description: Announcement width, unit  - default： **title** - description: Announcement title - default： **body** - description: Announcement content - type: `{     type: 'text' | 'hr' | 'title' | 'but...",content:`::: tip
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
\`\`\``,headings:[{level:2,text:"Configure"}],tags:[],categories:[]},{path:"/en/docs/theme/comments.html",title:"Comment",summary:"The theme built-in comment plugin , currently supports ; If you want to not load comments by default, but only display comments on certain pages, you can set  in , and set  on pages that need to display comments. If it is only a certain article that you don't want to enable comments, you can set  in . For other parameters, please refer to . ::: tip If valine's interface for getting comments reports a  error, don't worry, this is because you haven't added a comment, as long as there is 1 comment,...",content:`## Introduction

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
:::`,headings:[{level:2,text:"Introduction"},{level:2,text:"Option API"},{level:3,text:"Valine"},{level:3,text:"Waline"},{level:3,text:"Giscus"}],tags:[],categories:[]},{path:"/en/docs/theme/custom-container.html",title:"Custom Container",summary:"is required,  and  are optional. The supported  are: -  -  -  -  **input** **output** ::: tip this is a tip ::: ::: info this is a info ::: ::: warning this is a warning ::: ::: danger this is a danger warning ::: ::: details this is a details tag ::: **input** js const foo = 'foo' js const bar = 'bar' ` **output** :::: code-group ::: code-group-item FOO ::: ::: code-group-item BAR ::: ::::",content:`## Tips related

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
::::`,headings:[{level:2,text:"Tips related"},{level:2,text:"Code related"}],tags:[],categories:[]},{path:"/en/docs/theme/custom-primary-color.html",title:"Customize Primary Color",summary:"::: warning The theme configures css through , more configuration capabilities may be opened later, so the API of the current functionality may change later. ::: If you don't like the theme's default primary color, you can customize it by  :",content:`::: warning
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
\`\`\``,headings:[],tags:[],categories:[]},{path:"/en/docs/theme/doc-search.html",title:"Search Function",summary:"The theme already has a simple search capability built in. If you want to use , you can configure it.",content:`## Introduction

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
\`\`\``,headings:[{level:2,text:"Introduction"},{level:2,text:"Configure"}],tags:[],categories:[]},{path:"/en/docs/theme/frontmatter-home.html",title:"Home Page",summary:"::: tip In order to meet more usage scenarios of users, the theme has modularized the home page. Users can specify the content modules to be displayed and their display order in the  of the md file of the home page. More modules will be developed later for everyone to use , and supports users to customize the home page module as needed. ::: Currently, the built-in homepage modules include , , , , , , , and their configurations are as follows:   - description: Specify the home page module - defau...",content:`::: tip
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
\`\`\``,headings:[{level:2,text:"Configure"},{level:3,text:"modules"},{level:3,text:"banner"},{level:3,text:"bannerBrand"},{level:3,text:"blog"},{level:3,text:"features"},{level:3,text:"footer"},{level:3,text:"MdContent"},{level:3,text:"Comment"},{level:2,text:"Case"},{level:2,text:"Custom Home Module"}],tags:[],categories:[]},{path:"/en/docs/theme/frontmatter-page.html",title:"Normal Pages",summary:":::tip The following is the  configuration unique to . For other configurations, please refer to 。 ::: - Type:  - Detail: page encryption password. - Refer:  - Type:  - Detail: The article is on top, according to 1, 2, 3,. To sort in descending order. - Type:  - Detail: 为当前页面添加额外的类名。 - Example:      Then you can customize styles of this page in  file:    - Also see:",content:`:::tip
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

- Also see: [Default Theme > Styles > Style File](/en/docs/theme/custom-style.html)`,headings:[{level:2,text:"password"},{level:2,text:"sticky"},{level:2,text:"pageClass"}],tags:[],categories:[]},{path:"/en/docs/theme/git.html",title:"About Git",summary:":::tip Used to generate git jump addresses and edit links. If our project is stored in a subdirectory of the project, such as the  folder, we need to set  to . ::: **repo** - Type: string - Details: Specify the repository url of your project. This will be used as the link of the repository link, which will be displayed as the last item of the navbar. **docsRepo** - Type: string - Details: Specify the repository url of your documentation source files. This will be used for generating the edit thi...",content:`## Introduction

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
- Detail: The project is stored in a subdirectory of the project, such as the \`/docs\` folder, we need to set \`themeConfig.docsDir\` to \`/docs\`.Be sure to set it this way, because this configuration is strongly related to many parsing features.`,headings:[{level:2,text:"Introduction"},{level:2,text:"Configuration"}],tags:[],categories:[]},{path:"/en/docs/theme/home.html",title:"another-home-path.md",summary:"In some scenarios, the home page of a document is not necessarily the  file of the document root directory. In this case, you can set  in  to top the home page, and specify the home page path through . :::: code-group ::: code-group-item Specify the home page ::: ::: code-group-item Specify the home page path ::: ::::",content:`## Introduction

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
::::`,headings:[{level:2,text:"Introduction"},{level:2,text:"Configuration"},{level:1,text:"another-home-path.md"}],tags:[],categories:[]},{path:"/en/docs/theme/markdown-file-parse.html",title:"Parse File To Code Group",summary:":::warning Note that the version after  cancels the ability of the  folder, and all components can be declared in the folder . ::: **Input** **Output** @",content:":::warning\nNote that the version after `2.0.0-rc.5` cancels the ability of the `vue-previews` folder, and all components can be declared in the folder `components`.\n:::\n\n**Input**\n\n```md\n@[code-group](@/docs/.vuepress/vue-previews/demo.vue)\n```\n\n**Output**\n\n@[code-group](@/docs/.vuepress/vue-previews/demo.vue)",headings:[],tags:[],categories:[]},{path:"/en/docs/theme/markdown-task.html",title:"Task List",summary:"**Input** **Output** - [x] Play game - [ ] Study",content:`**Input**

\`\`\`md
- [x] Play game
- [ ] Study
\`\`\`

**Output**

- [x] Play game
- [ ] Study`,headings:[],tags:[],categories:[]},{path:"/en/docs/theme/markdown-vue-preview.html",title:"Vue Component Preview",summary:":::warning Note that the version after  cancels the ability of the  folder, and all components can be declared in the folder . ::: :::tip By default, the theme registers the  component under  globally, so the components that need to be previewed should be placed in this directory. Note:is not allowed in the file name. If our project is stored in a subdirectory of the project, such as the  folder, we need to set  to . ::: **Input** **Output** @",content:":::warning\nNote that the version after `2.0.0-rc.5` cancels the ability of the `vue-previews` folder, and all components can be declared in the folder `components`.\n:::\n\n:::tip\nBy default, the theme registers the `.vue` component under `/.vuepress/components` globally, so the components that need to be previewed should be placed in this directory. Note:`-``_ `is not allowed in the file name.\n\nIf our project is stored in a subdirectory of the project, such as the `/docs` folder, we need to set `themeConfig.docsDir` to `/docs`.\n:::\n\n**Input**\n\n```md\n@[preview](@/docs/.vuepress/components/demo.vue)\n```\n\n**Output**\n\n@[preview](@/docs/.vuepress/components/demo.vue)",headings:[],tags:[],categories:[]},{path:"/en/docs/theme/multilingual.html",title:"I18n",summary:"These options configure locale-related texts. If your site is served in a different language besides English, you should set these options per locale to provide translations. > Please refer to  for detailed i18n config. |Options|Type|Default|Description| |-|-|-|-| |categoriesText||Categories|categories| |tagsText||Tags|tags| |catalogTitle||ON THIS PAGE|The title of the table of contents on the right of the article| |selectLanguageName||${lang}|Language name of Locale| |editLinkText||Edit this pa...",content:`These options configure locale-related texts.

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
\`\`\``,headings:[{level:2,text:"Options"},{level:2,text:"Example"}],tags:[],categories:[]},{path:"/en/docs/theme/navbar.html",title:"Navbar",summary:"::: tip For more information on setting icons, please see  :::",content:`## Types

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
\`\`\``,headings:[{level:2,text:"Types"},{level:2,text:"Refer"}],tags:[],categories:[]},{path:"/en/docs/theme/pages.html",title:"Register Pages",summary:":::info You can use  to customize and register some customized pages, such as the Timeline page. ::: Register layouts, please refer to 。",content:`:::info
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
\`\`\``,headings:[{level:2,text:"注册"}],tags:[],categories:[]},{path:"/en/docs/theme/password.html",title:"set a single password",summary:"::: tip If the website as a whole or a document is private and does not want to be made public, you can only enter the content page after filling in the key login (login is invalid after closing the browser tab). - the number of passwords can only be 6 characters. - multiple passwords can be set through an array. ::: ::: warning 1. The security of encryption is low, please use it as appropriate. 2. If encryption is set, the anchor function will fail. ::: If your password is , you need to convert...",content:`::: tip
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
\`\`\``,headings:[{level:2,text:"Obtaining Ciphertext"},{level:2,text:"Set Encryption"},{level:3,text:"Encrypt The e=Entire Website"},{level:3,text:"Encrypting A Single Page"},{level:1,text:"set a single password"},{level:1,text:"set multiple passwords"}],tags:[],categories:[]},{path:"/en/docs/theme/series.html",title:"Series",summary:"In ,  was changed to  for two reasons: 1. In , the sidebar is split into right sidebar', multiple documents can be aggregated in the left sidebar Together, to express the connection between them, the right sidebar shows the directory structure of the current page, because considering the  default theme, putting them all on the left sidebar will make it unfocused, but by  and  to represent  and , the semantics are not very good; 2. Considering that the documents that need to be put together must ...",content:`## Introduction

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
\`\`\``,headings:[{level:2,text:"Introduction"},{level:2,text:"Configure"},{level:3,text:"General"},{level:3,text:"Group"},{level:3,text:"Sub Group"},{level:3,text:"Error"}],tags:[],categories:[]},{path:"/en/docs/theme/set-vite-bundler.html",title:"User-defined packaging configuration",summary:"::: tip We configure postcss plugins by default, which is the basic configuration to ensure project startup. ::: If you are not satisfied with our existing packaging or want to customize the packaging configuration, you can use this function, which is the Vite-based packaging configuration provided by vuepress@2.x, ， - description: User-defined packaging configuration - Options:   - viteOptions: Accepts all options of Vite.   - vuePluginOptions： Accepts all options of .",content:`::: tip
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
\`\`\``,headings:[{level:2,text:"Configure"},{level:3,text:"viteBundler"}],tags:[],categories:[]},{path:"/en/docs/theme/social-links.html",title:"Social Links",summary:"::: tip For more information on setting icons, please see  :::",content:`## Types

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
\`\`\``,headings:[{level:2,text:"Types"},{level:2,text:"Refer"}],tags:[],categories:[]},{path:"/en/docs/theme/source-dir.html",title:"Source folder",summary:":::tip If our project is stored in a subdirectory of the project, such as the  folder, we need to set  to . Be sure to set it this way, because this configuration is strongly related to many parsing features. :::",content:`## Introduction

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
\`\`\``,headings:[{level:2,text:"Introduction"},{level:2,text:"Configuration"}],tags:[],categories:[]}],timestamp:"2025-11-30T16:52:02.765Z",totalPages:97,indexId:"DOC-j8jfb8"},Cy=At({enhance({app:e}){e.provide("aiChatSiteContext",ky)},rootComponents:[fe(()=>()=>Z(wy))]}),Ey=Object.freeze(Object.defineProperty({__proto__:null,default:Cy},Symbol.toStringTag,{value:"Module"})),Ay={enhance:({app:e})=>{e.component("CustomBanner",vt(()=>X(()=>import("./CustomBanner-BkAQ_Run.js"),[]))),e.component("Examples",vt(()=>X(()=>import("./Examples-B-1iODaO.js"),[]))),e.component("IconChat",vt(()=>X(()=>import("./IconChat-6NBgCZBi.js"),[]))),e.component("IconCompass",vt(()=>X(()=>import("./IconCompass-B2F-z_d7.js"),[]))),e.component("IconDocument",vt(()=>X(()=>import("./IconDocument-w56e35mj.js"),[]))),e.component("IconDocumentAttachment",vt(()=>X(()=>import("./IconDocumentAttachment-6OCb6f_Q.js"),[]))),e.component("IconFire",vt(()=>X(()=>import("./IconFire-CiDr7A1g.js"),[]))),e.component("IconHome",vt(()=>X(()=>import("./IconHome-bYViiTHL.js"),[]))),e.component("IconReco",vt(()=>X(()=>import("./IconReco-DPkeLV_e.js"),[]))),e.component("IconRevili",vt(()=>X(()=>import("./IconRevili-DamQ_j-Q.js"),[]))),e.component("IconSubVolume",vt(()=>X(()=>import("./IconSubVolume-0U_gToou.js"),[]))),e.component("Md5",vt(()=>X(()=>import("./Md5-BlgEx9dt.js"),[]))),e.component("demo",vt(()=>X(()=>import("./demo-BHZSFa-k.js"),[])))}},Sy=Object.freeze(Object.defineProperty({__proto__:null,default:Ay},Symbol.toStringTag,{value:"Module"})),Ty=At({enhance({app:e}){const t=Ef(),n=e._context.provides[Yo],u=B(()=>ns(t.value,n.routeLocale.value));e.provide(Af,u),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return u.value}}})}}),Iy=Object.freeze(Object.defineProperty({__proto__:null,default:Ty},Symbol.toStringTag,{value:"Module"})),Ip=Symbol("categoryPaginationPostsSymbol"),Lp=Symbol("categorySummarySymbol"),Ca=Symbol("postsSymbol"),$p=Symbol("seriesSymbol");function Bu(){const e=He(Ca,null)||[],t=He($p,null)||{},n=He(Lp,null)||{},u=He(Ip,null)||{};if(!Ca)throw new Error("useSiteLocaleData() is called without provider.");const r=Je();return{categoryPosts:B(()=>u[r==null?void 0:r.path]||{}),categorySummary:n,posts:e,series:t}}var Ly={"/categories/blog/1.html":{pageSize:10,currentPage:1,totalPage:7,currentCategoryKey:"categories",currentCategoryValue:"blog",pages:[{title:"vuepress-theme-reco 一周岁",frontmatter:{title:"vuepress-theme-reco 一周岁",date:"2019-10-26T00:00:00.000Z",categories:["blog"],sticky:1},path:"/blogs/one-year-old.html"},{title:"Valine Admin 后台搭建(修订)",frontmatter:{title:"Valine Admin 后台搭建(修订)",date:"2020-07-06T00:00:00.000Z",author:"Caleb",categories:["blog"]},path:"/blogs/valine-admin.html"},{title:"感谢 lookroot 对于主题推广的贡献",frontmatter:{title:"感谢 lookroot 对于主题推广的贡献",date:"2020-05-28T00:00:00.000Z",author:"reco_luan",categories:["blog"]},path:"/blogs/lookroot.html"},{title:"如何在 GitHub Actions 时使用 secretKey",frontmatter:{title:"如何在 GitHub Actions 时使用 secretKey",date:"2020-03-20T00:00:00.000Z",author:"xyh 🐸",tags:["Github Actions","Secret Key"],categories:["blog"]},path:"/blogs/github-actions-secret-key.html"},{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"},{title:"Pages 部署",frontmatter:{title:"Pages 部署",date:"2019-05-14T00:00:00.000Z",categories:["blog"]},path:"/blogs/deploy.html"},{title:"vuepress-theme-reco",frontmatter:{title:"vuepress-theme-reco",date:"2019-04-09T00:00:00.000Z",categories:["blog"]},path:"/blogs/about.html"}]},"/tags/Github-Actions/1.html":{pageSize:10,currentPage:1,totalPage:2,currentCategoryKey:"tags",currentCategoryValue:"Github-Actions",pages:[{title:"如何在 GitHub Actions 时使用 secretKey",frontmatter:{title:"如何在 GitHub Actions 时使用 secretKey",date:"2020-03-20T00:00:00.000Z",author:"xyh 🐸",tags:["Github Actions","Secret Key"],categories:["blog"]},path:"/blogs/github-actions-secret-key.html"},{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"}]},"/tags/Secret-Key/1.html":{pageSize:10,currentPage:1,totalPage:1,currentCategoryKey:"tags",currentCategoryValue:"Secret-Key",pages:[{title:"如何在 GitHub Actions 时使用 secretKey",frontmatter:{title:"如何在 GitHub Actions 时使用 secretKey",date:"2020-03-20T00:00:00.000Z",author:"xyh 🐸",tags:["Github Actions","Secret Key"],categories:["blog"]},path:"/blogs/github-actions-secret-key.html"}]},"/tags/VuePress/1.html":{pageSize:10,currentPage:1,totalPage:1,currentCategoryKey:"tags",currentCategoryValue:"VuePress",pages:[{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"}]},"/tags/boke/1.html":{pageSize:10,currentPage:1,totalPage:1,currentCategoryKey:"tags",currentCategoryValue:"boke",pages:[{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"}]}},$y={categories:{layout:"Categories",items:{blog:{label:"blog",length:7,categoryValue:"blog",pages:[{title:"vuepress-theme-reco 一周岁",frontmatter:{title:"vuepress-theme-reco 一周岁",date:"2019-10-26T00:00:00.000Z",categories:["blog"],sticky:1},path:"/blogs/one-year-old.html"},{title:"Valine Admin 后台搭建(修订)",frontmatter:{title:"Valine Admin 后台搭建(修订)",date:"2020-07-06T00:00:00.000Z",author:"Caleb",categories:["blog"]},path:"/blogs/valine-admin.html"},{title:"感谢 lookroot 对于主题推广的贡献",frontmatter:{title:"感谢 lookroot 对于主题推广的贡献",date:"2020-05-28T00:00:00.000Z",author:"reco_luan",categories:["blog"]},path:"/blogs/lookroot.html"},{title:"如何在 GitHub Actions 时使用 secretKey",frontmatter:{title:"如何在 GitHub Actions 时使用 secretKey",date:"2020-03-20T00:00:00.000Z",author:"xyh 🐸",tags:["Github Actions","Secret Key"],categories:["blog"]},path:"/blogs/github-actions-secret-key.html"},{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"},{title:"Pages 部署",frontmatter:{title:"Pages 部署",date:"2019-05-14T00:00:00.000Z",categories:["blog"]},path:"/blogs/deploy.html"},{title:"vuepress-theme-reco",frontmatter:{title:"vuepress-theme-reco",date:"2019-04-09T00:00:00.000Z",categories:["blog"]},path:"/blogs/about.html"}]}},pageSize:10},tags:{layout:"Categories",items:{"Github-Actions":{label:"Github Actions",length:2,categoryValue:"Github-Actions",pages:[{title:"如何在 GitHub Actions 时使用 secretKey",frontmatter:{title:"如何在 GitHub Actions 时使用 secretKey",date:"2020-03-20T00:00:00.000Z",author:"xyh 🐸",tags:["Github Actions","Secret Key"],categories:["blog"]},path:"/blogs/github-actions-secret-key.html"},{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"}]},"Secret-Key":{length:1,pages:[{title:"如何在 GitHub Actions 时使用 secretKey",frontmatter:{title:"如何在 GitHub Actions 时使用 secretKey",date:"2020-03-20T00:00:00.000Z",author:"xyh 🐸",tags:["Github Actions","Secret Key"],categories:["blog"]},path:"/blogs/github-actions-secret-key.html"}],label:"Secret Key",categoryValue:"Secret-Key"},VuePress:{length:1,pages:[{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"}],label:"VuePress",categoryValue:"VuePress"},boke:{length:1,pages:[{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"}],label:"博客",categoryValue:"boke"}},pageSize:10}},Dy=[{title:"vuepress-theme-reco 一周岁",frontmatter:{title:"vuepress-theme-reco 一周岁",date:"2019-10-26T00:00:00.000Z",categories:["blog"],sticky:1},path:"/blogs/one-year-old.html"},{title:"Valine Admin 后台搭建(修订)",frontmatter:{title:"Valine Admin 后台搭建(修订)",date:"2020-07-06T00:00:00.000Z",author:"Caleb",categories:["blog"]},path:"/blogs/valine-admin.html"},{title:"感谢 lookroot 对于主题推广的贡献",frontmatter:{title:"感谢 lookroot 对于主题推广的贡献",date:"2020-05-28T00:00:00.000Z",author:"reco_luan",categories:["blog"]},path:"/blogs/lookroot.html"},{title:"如何在 GitHub Actions 时使用 secretKey",frontmatter:{title:"如何在 GitHub Actions 时使用 secretKey",date:"2020-03-20T00:00:00.000Z",author:"xyh 🐸",tags:["Github Actions","Secret Key"],categories:["blog"]},path:"/blogs/github-actions-secret-key.html"},{title:"使用 GitHub Actions 自动部署博客",frontmatter:{title:"使用 GitHub Actions 自动部署博客",date:"2020-02-10T00:00:00.000Z",author:"Lasy",tags:["Github Actions","VuePress","博客"],categories:["blog"]},path:"/blogs/github-actions.html"},{title:"Pages 部署",frontmatter:{title:"Pages 部署",date:"2019-05-14T00:00:00.000Z",categories:["blog"]},path:"/blogs/deploy.html"},{title:"vuepress-theme-reco",frontmatter:{title:"vuepress-theme-reco",date:"2019-04-09T00:00:00.000Z",categories:["blog"]},path:"/blogs/about.html"}],Py={};async function Ry(){const e=Dy,t=Py,n=$y,u=Ly;Ot(Ca,e),Ot($p,t),Ot(Lp,n),Ot(Ip,u)}const Fy=At({setup(){Ry()}}),Oy=Object.freeze(Object.defineProperty({__proto__:null,default:Fy},Symbol.toStringTag,{value:"Module"})),My=[{title:"",headers:[],path:"/timeline.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/friendship-link.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/blog/1.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/Github-Actions/1.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/Secret-Key/1.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/VuePress/1.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/boke/1.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1.html",pathLocale:"/",extraFields:[]},{title:"",headers:[{level:2,title:"快速开始",slug:"快速开始",link:"#快速开始",children:[]}],path:"/",pathLocale:"/",extraFields:[]},{title:"vuepress-theme-reco",headers:[{level:2,title:"Play Together",slug:"play-together",link:"#play-together",children:[{level:3,title:"0.x",slug:"_0-x",link:"#_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",link:"#_1-x",children:[]},{level:3,title:"CLI",slug:"cli",link:"#cli",children:[]},{level:3,title:"Contribute",slug:"contribute",link:"#contribute",children:[]}]},{level:2,title:"Preview",slug:"preview",link:"#preview",children:[]},{level:2,title:"License",slug:"license",link:"#license",children:[]}],path:"/blogs/about.html",pathLocale:"/",extraFields:[]},{title:"Pages 部署",headers:[{level:2,title:"GitHub",slug:"github",link:"#github",children:[{level:3,title:"手动部署",slug:"手动部署",link:"#手动部署",children:[]},{level:3,title:"自动部署",slug:"自动部署",link:"#自动部署",children:[]}]},{level:2,title:"GitLab",slug:"gitlab",link:"#gitlab",children:[{level:3,title:"手动部署",slug:"手动部署-1",link:"#手动部署-1",children:[]},{level:3,title:"自动部署",slug:"自动部署-1",link:"#自动部署-1",children:[]}]}],path:"/blogs/deploy.html",pathLocale:"/",extraFields:[]},{title:"如何在 GitHub Actions 时使用 secretKey",headers:[{level:2,title:"如何在 GitHub Actions 时使用 secretKey",slug:"如何在-github-actions-时使用-secretkey",link:"#如何在-github-actions-时使用-secretkey",children:[{level:3,title:"问题",slug:"问题",link:"#问题",children:[]},{level:3,title:"解决方法",slug:"解决方法",link:"#解决方法",children:[]},{level:3,title:"实施",slug:"实施",link:"#实施",children:[]}]}],path:"/blogs/github-actions-secret-key.html",pathLocale:"/",extraFields:[]},{title:"使用 GitHub Actions 自动部署博客",headers:[{level:2,title:"设置 Secrets",slug:"设置-secrets",link:"#设置-secrets",children:[]},{level:2,title:"编写 workflow 文件",slug:"编写-workflow-文件",link:"#编写-workflow-文件",children:[]},{level:2,title:"验证",slug:"验证",link:"#验证",children:[{level:3,title:"部署失败",slug:"部署失败",link:"#部署失败",children:[]},{level:3,title:"部署成功",slug:"部署成功",link:"#部署成功",children:[]}]},{level:2,title:"其他",slug:"其他",link:"#其他",children:[]}],path:"/blogs/github-actions.html",pathLocale:"/",extraFields:[]},{title:"感谢 lookroot 对于主题推广的贡献",headers:[],path:"/blogs/lookroot.html",pathLocale:"/",extraFields:[]},{title:"vuepress-theme-reco 一周岁",headers:[{level:2,title:"1",slug:"_1",link:"#_1",children:[]},{level:2,title:"2",slug:"_2",link:"#_2",children:[]},{level:2,title:"3",slug:"_3",link:"#_3",children:[]},{level:2,title:"4",slug:"_4",link:"#_4",children:[]}],path:"/blogs/one-year-old.html",pathLocale:"/",extraFields:[]},{title:"Valine Admin 后台搭建(修订)",headers:[{level:2,title:'云引擎"一键"部署',slug:"云引擎-一键-部署",link:"#云引擎-一键-部署",children:[{level:3,title:"1. 填写代码库",slug:"_1-填写代码库",link:"#_1-填写代码库",children:[]},{level:3,title:"2.在设置页面，设置环境变量以及 Web 二级域名。",slug:"_2-在设置页面-设置环境变量以及-web-二级域名。",link:"#_2-在设置页面-设置环境变量以及-web-二级域名。",children:[]},{level:3,title:"3.切换到部署标签页，分支使用master，点击部署即可",slug:"_3-切换到部署标签页-分支使用master-点击部署即可",link:"#_3-切换到部署标签页-分支使用master-点击部署即可",children:[]},{level:3,title:"4.评论管理",slug:"_4-评论管理",link:"#_4-评论管理",children:[]},{level:3,title:"5.定时任务设置",slug:"_5-定时任务设置",link:"#_5-定时任务设置",children:[]}]},{level:2,title:"邮件通知模板",slug:"邮件通知模板",link:"#邮件通知模板",children:[{level:3,title:"1.环境变量设定",slug:"_1-环境变量设定",link:"#_1-环境变量设定",children:[]},{level:3,title:"2.自定义模板",slug:"_2-自定义模板",link:"#_2-自定义模板",children:[]}]},{level:2,title:"改编版本教程",slug:"改编版本教程",link:"#改编版本教程",children:[]},{level:2,title:"Qmsg酱",slug:"qmsg酱",link:"#qmsg酱",children:[{level:3,title:"申请APPKey",slug:"申请appkey",link:"#申请appkey",children:[]},{level:3,title:"Qmsg模板",slug:"qmsg模板",link:"#qmsg模板",children:[]},{level:3,title:"QQ戳一戳",slug:"qq戳一戳",link:"#qq戳一戳",children:[]}]},{level:2,title:"Server酱",slug:"server酱",link:"#server酱",children:[{level:3,title:"申请SC_KEY",slug:"申请sc-key",link:"#申请sc-key",children:[]},{level:3,title:"消息 标题/内容 模板",slug:"消息-标题-内容-模板",link:"#消息-标题-内容-模板",children:[]},{level:3,title:"自定义 标题/内容 模板",slug:"自定义-标题-内容-模板",link:"#自定义-标题-内容-模板",children:[]}]},{level:2,title:"改编版本内容介绍",slug:"改编版本内容介绍",link:"#改编版本内容介绍",children:[{level:3,title:"完结撒花🎉🎉🎉",slug:"完结撒花",link:"#完结撒花",children:[]}]}],path:"/blogs/valine-admin.html",pathLocale:"/",extraFields:[]},{title:"留言板",headers:[],path:"/docs/message-board.html",pathLocale:"/",extraFields:[]},{title:"",headers:[{level:2,title:"Quick Start",slug:"quick-start",link:"#quick-start",children:[]}],path:"/en/",pathLocale:"/en/",extraFields:[]},{title:"架构",headers:[{level:2,title:"架构",slug:"架构",link:"#架构",children:[]},{level:2,title:"主题风格",slug:"主题风格",link:"#主题风格",children:[]}],path:"/docs/guide/architecture.html",pathLocale:"/",extraFields:[]},{title:"内置页面",headers:[],path:"/docs/guide/builtin-page.html",pathLocale:"/",extraFields:[]},{title:"打包工具",headers:[{level:2,title:"使用打包工具",slug:"使用打包工具",link:"#使用打包工具",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/docs/guide/bundler.html",pathLocale:"/",extraFields:[]},{title:"贡献",headers:[{level:2,title:"项目初始化",slug:"项目初始化",link:"#项目初始化",children:[]},{level:2,title:"代码提交规范",slug:"代码提交规范",link:"#代码提交规范",children:[]},{level:2,title:"PR 规范",slug:"pr-规范",link:"#pr-规范",children:[]}],path:"/docs/guide/contribute.html",pathLocale:"/",extraFields:[]},{title:"自定义样式",headers:[],path:"/docs/guide/custom-style.html",pathLocale:"/",extraFields:[]},{title:"文件夹规范",headers:[],path:"/docs/guide/folder-specification.html",pathLocale:"/",extraFields:[]},{title:"快速开始",headers:[{level:2,title:"快速开始",slug:"快速开始",link:"#快速开始",children:[]},{level:2,title:"手动安装",slug:"手动安装",link:"#手动安装",children:[]}],path:"/docs/guide/getting-started.html",pathLocale:"/",extraFields:[]},{title:"可视化搭建",headers:[{level:2,title:"简介",slug:"简介",link:"#简介",children:[]},{level:2,title:"效果展示",slug:"效果展示",link:"#效果展示",children:[{level:3,title:"项目列表",slug:"项目列表",link:"#项目列表",children:[]},{level:3,title:"选择文件夹",slug:"选择文件夹",link:"#选择文件夹",children:[]},{level:3,title:"设置参数",slug:"设置参数",link:"#设置参数",children:[]},{level:3,title:"创建项目",slug:"创建项目",link:"#创建项目",children:[]}]}],path:"/docs/guide/gui-builder.html",pathLocale:"/",extraFields:[]},{title:"图标",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[{level:3,title:"注册图标组件",slug:"注册图标组件",link:"#注册图标组件",children:[]},{level:3,title:"使用图标组件",slug:"使用图标组件",link:"#使用图标组件",children:[]}]},{level:2,title:"高级",slug:"高级",link:"#高级",children:[]},{level:2,title:"参考",slug:"参考",link:"#参考",children:[{level:3,title:"Props",slug:"props",link:"#props",children:[]},{level:3,title:"Slots",slug:"slots",link:"#slots",children:[]}]}],path:"/docs/guide/icon.html",pathLocale:"/",extraFields:[]},{title:"介绍",headers:[{level:2,title:"与默认主题的关系",slug:"与默认主题的关系",link:"#与默认主题的关系",children:[]},{level:2,title:"与默认主题的重叠的配置",slug:"与默认主题的重叠的配置",link:"#与默认主题的重叠的配置",children:[]}],path:"/docs/guide/introduce.html",pathLocale:"/",extraFields:[]},{title:"包管理工具",headers:[],path:"/docs/guide/package-manager.html",pathLocale:"/",extraFields:[]},{title:"注册组件",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/docs/guide/register-components.html",pathLocale:"/",extraFields:[]},{title:"注册布局",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"指定某个页面的布局",slug:"指定某个页面的布局",link:"#指定某个页面的布局",children:[]},{level:2,title:"开发",slug:"开发",link:"#开发",children:[]}],path:"/docs/guide/register-layouts.html",pathLocale:"/",extraFields:[]},{title:"样式",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"示例",slug:"示例",link:"#示例",children:[]},{level:2,title:"注意",slug:"注意",link:"#注意",children:[]}],path:"/docs/guide/style.html",pathLocale:"/",extraFields:[]},{title:"公告插件",headers:[],path:"/docs/plugins/bulletin-popover.html",pathLocale:"/",extraFields:[]},{title:"评论插件",headers:[],path:"/docs/plugins/comments.html",pathLocale:"/",extraFields:[]},{title:"页面增强插件",headers:[],path:"/docs/plugins/page.html",pathLocale:"/",extraFields:[]},{title:"vue 组件预览插件",headers:[],path:"/docs/plugins/vue-previews.html",pathLocale:"/",extraFields:[]},{title:"外观",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]}],path:"/docs/theme/appearance.html",pathLocale:"/",extraFields:[]},{title:"自动设置分类",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/docs/theme/auto-set-category.html",pathLocale:"/",extraFields:[]},{title:"自动设置系列",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/docs/theme/auto-set-series.html",pathLocale:"/",extraFields:[]},{title:"公告",headers:[{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/docs/theme/bulletin-popover.html",pathLocale:"/",extraFields:[]},{title:"评论",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Option API",slug:"option-api",link:"#option-api",children:[{level:3,title:"Valine",slug:"valine",link:"#valine",children:[]},{level:3,title:"Waline",slug:"waline",link:"#waline",children:[]},{level:3,title:"Giscus",slug:"giscus",link:"#giscus",children:[]}]}],path:"/docs/theme/comments.html",pathLocale:"/",extraFields:[]},{title:"自定义容器",headers:[{level:2,title:"提示相关",slug:"提示相关",link:"#提示相关",children:[]},{level:2,title:"代码相关",slug:"代码相关",link:"#代码相关",children:[]}],path:"/docs/theme/custom-container.html",pathLocale:"/",extraFields:[]},{title:"自定义主题的基础色",headers:[],path:"/docs/theme/custom-primary-color.html",pathLocale:"/",extraFields:[]},{title:"搜索功能",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/docs/theme/doc-search.html",pathLocale:"/",extraFields:[]},{title:"首页",headers:[{level:2,title:"配置",slug:"配置",link:"#配置",children:[{level:3,title:"modules",slug:"modules",link:"#modules",children:[]},{level:3,title:"banner",slug:"banner",link:"#banner",children:[]},{level:3,title:"bannerBrand",slug:"bannerbrand",link:"#bannerbrand",children:[]},{level:3,title:"blog",slug:"blog",link:"#blog",children:[]},{level:3,title:"features",slug:"features",link:"#features",children:[]},{level:3,title:"footer",slug:"footer",link:"#footer",children:[]},{level:3,title:"MdContent",slug:"mdcontent",link:"#mdcontent",children:[]},{level:3,title:"Comment",slug:"comment",link:"#comment",children:[]}]},{level:2,title:"案例",slug:"案例",link:"#案例",children:[]},{level:2,title:"自定义首页模块",slug:"自定义首页模块",link:"#自定义首页模块",children:[]}],path:"/docs/theme/frontmatter-home.html",pathLocale:"/",extraFields:[]},{title:"普通文档",headers:[{level:2,title:"password",slug:"password",link:"#password",children:[]},{level:2,title:"sticky",slug:"sticky",link:"#sticky",children:[]},{level:2,title:"pageClass",slug:"pageclass",link:"#pageclass",children:[]}],path:"/docs/theme/frontmatter-page.html",pathLocale:"/",extraFields:[]},{title:"git 相关",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/docs/theme/git.html",pathLocale:"/",extraFields:[]},{title:"首页路径",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/docs/theme/home.html",pathLocale:"/",extraFields:[]},{title:"解析文件为代码组",headers:[],path:"/docs/theme/markdown-file-parse.html",pathLocale:"/",extraFields:[]},{title:"任务列表",headers:[],path:"/docs/theme/markdown-task.html",pathLocale:"/",extraFields:[]},{title:"Vue 组件预览",headers:[],path:"/docs/theme/markdown-vue-preview.html",pathLocale:"/",extraFields:[]},{title:"语言配置",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]},{level:2,title:"案例",slug:"案例",link:"#案例",children:[]}],path:"/docs/theme/multilingual.html",pathLocale:"/",extraFields:[]},{title:"导航栏",headers:[{level:2,title:"类型",slug:"类型",link:"#类型",children:[]},{level:2,title:"参考",slug:"参考",link:"#参考",children:[]}],path:"/docs/theme/navbar.html",pathLocale:"/",extraFields:[]},{title:"注册页面",headers:[{level:2,title:"注册",slug:"注册",link:"#注册",children:[]}],path:"/docs/theme/pages.html",pathLocale:"/",extraFields:[]},{title:"加密",headers:[{level:2,title:"获取密文",slug:"获取密文",link:"#获取密文",children:[]},{level:2,title:"设置加密",slug:"设置加密",link:"#设置加密",children:[{level:3,title:"加密整个网站",slug:"加密整个网站",link:"#加密整个网站",children:[]},{level:3,title:"加密单个页面",slug:"加密单个页面",link:"#加密单个页面",children:[]}]}],path:"/docs/theme/password.html",pathLocale:"/",extraFields:[]},{title:"系列",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[{level:3,title:"普通",slug:"普通",link:"#普通",children:[]},{level:3,title:"分组",slug:"分组",link:"#分组",children:[]},{level:3,title:"子分组",slug:"子分组",link:"#子分组",children:[]},{level:3,title:"异常",slug:"异常",link:"#异常",children:[]}]}],path:"/docs/theme/series.html",pathLocale:"/",extraFields:[]},{title:"用户自定义配置打包",headers:[{level:2,title:"配置",slug:"配置",link:"#配置",children:[{level:3,title:"viteBundler",slug:"vitebundler",link:"#vitebundler",children:[]}]}],path:"/docs/theme/set-vite-bundler.html",pathLocale:"/",extraFields:[]},{title:"社交地址",headers:[{level:2,title:"类型",slug:"类型",link:"#类型",children:[]},{level:2,title:"案例",slug:"案例",link:"#案例",children:[]}],path:"/docs/theme/social-links.html",pathLocale:"/",extraFields:[]},{title:"源文件文件夹",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/docs/theme/source-dir.html",pathLocale:"/",extraFields:[]},{title:"打赏",headers:[{level:3,title:"说明",slug:"说明",link:"#说明",children:[]},{level:3,title:"打赏记录",slug:"打赏记录",link:"#打赏记录",children:[]}],path:"/docs/others/donate.html",pathLocale:"/",extraFields:[]},{title:"案例",headers:[],path:"/docs/others/examples.html",pathLocale:"/",extraFields:[]},{title:"message board",headers:[],path:"/en/docs/message-board.html",pathLocale:"/en/",extraFields:[]},{title:"Architecture",headers:[{level:2,title:"Architecture",slug:"architecture",link:"#architecture",children:[]},{level:2,title:"Theme Style",slug:"theme-style",link:"#theme-style",children:[]}],path:"/en/docs/guide/architecture.html",pathLocale:"/en/",extraFields:[]},{title:"Build-in Page",headers:[],path:"/en/docs/guide/builtin-page.html",pathLocale:"/en/",extraFields:[]},{title:"Bundler",headers:[{level:2,title:"Use a Bundler",slug:"use-a-bundler",link:"#use-a-bundler",children:[]},{level:2,title:"Options",slug:"options",link:"#options",children:[]}],path:"/en/docs/guide/bundler.html",pathLocale:"/en/",extraFields:[]},{title:"Contribute",headers:[{level:2,title:"Initialization",slug:"initialization",link:"#initialization",children:[]},{level:2,title:"Git commit specification",slug:"git-commit-specification",link:"#git-commit-specification",children:[]},{level:2,title:"Git PR specification",slug:"git-pr-specification",link:"#git-pr-specification",children:[]}],path:"/en/docs/guide/contribute.html",pathLocale:"/en/",extraFields:[]},{title:"Custom Style",headers:[],path:"/en/docs/guide/custom-style.html",pathLocale:"/en/",extraFields:[]},{title:"Folder Specification",headers:[],path:"/en/docs/guide/folder-specification.html",pathLocale:"/en/",extraFields:[]},{title:"Quick start",headers:[{level:2,title:"Quick Start",slug:"quick-start",link:"#quick-start",children:[]},{level:2,title:"Manual Installation",slug:"manual-installation",link:"#manual-installation",children:[]}],path:"/en/docs/guide/getting-started.html",pathLocale:"/en/",extraFields:[]},{title:"Visual Building",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Display",slug:"display",link:"#display",children:[{level:3,title:"Project List",slug:"project-list",link:"#project-list",children:[]},{level:3,title:"Choose Folder",slug:"choose-folder",link:"#choose-folder",children:[]},{level:3,title:"Set Options",slug:"set-options",link:"#set-options",children:[]},{level:3,title:"Create Project",slug:"create-project",link:"#create-project",children:[]}]}],path:"/en/docs/guide/gui-builder.html",pathLocale:"/en/",extraFields:[]},{title:"Icon",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Usage",slug:"usage",link:"#usage",children:[{level:3,title:"Registrater icon component",slug:"registrater-icon-component",link:"#registrater-icon-component",children:[]},{level:3,title:"使用图标组件",slug:"使用图标组件",link:"#使用图标组件",children:[]}]},{level:2,title:"Advanced",slug:"advanced",link:"#advanced",children:[]},{level:2,title:"Reference",slug:"reference",link:"#reference",children:[{level:3,title:"Props",slug:"props",link:"#props",children:[]},{level:3,title:"Slots",slug:"slots",link:"#slots",children:[]}]}],path:"/en/docs/guide/icon.html",pathLocale:"/en/",extraFields:[]},{title:"Introduce",headers:[],path:"/en/docs/guide/introduce.html",pathLocale:"/en/",extraFields:[]},{title:"Package Manager",headers:[],path:"/en/docs/guide/package-manager.html",pathLocale:"/en/",extraFields:[]},{title:"Register Components",headers:[{level:2,title:"Introduce",slug:"introduce",link:"#introduce",children:[]}],path:"/en/docs/guide/register-components.html",pathLocale:"/en/",extraFields:[]},{title:"Register Layouts",headers:[{level:2,title:"Introduce",slug:"introduce",link:"#introduce",children:[]},{level:2,title:"Specify the layout of a page",slug:"specify-the-layout-of-a-page",link:"#specify-the-layout-of-a-page",children:[]},{level:2,title:"Development",slug:"development",link:"#development",children:[]}],path:"/en/docs/guide/register-layouts.html",pathLocale:"/en/",extraFields:[]},{title:"Style",headers:[{level:2,title:"Introduce",slug:"introduce",link:"#introduce",children:[]},{level:2,title:"Example",slug:"example",link:"#example",children:[]},{level:2,title:"Notice",slug:"notice",link:"#notice",children:[]}],path:"/en/docs/guide/style.html",pathLocale:"/en/",extraFields:[]},{title:"donate",headers:[{level:2,title:"说明",slug:"说明",link:"#说明",children:[]},{level:2,title:"Donation Record",slug:"donation-record",link:"#donation-record",children:[]}],path:"/en/docs/others/donate.html",pathLocale:"/en/",extraFields:[]},{title:"Examples",headers:[],path:"/en/docs/others/examples.html",pathLocale:"/en/",extraFields:[]},{title:"Announcement plugin",headers:[],path:"/en/docs/plugins/bulletin-popover.html",pathLocale:"/en/",extraFields:[]},{title:"Comment plugin",headers:[],path:"/en/docs/plugins/comments.html",pathLocale:"/en/",extraFields:[]},{title:"Page Enhancement Plugin",headers:[],path:"/en/docs/plugins/page.html",pathLocale:"/en/",extraFields:[]},{title:"vue component preview plugin",headers:[],path:"/en/docs/plugins/vue-previews.html",pathLocale:"/en/",extraFields:[]},{title:"Appearance",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Usage",slug:"usage",link:"#usage",children:[]}],path:"/en/docs/theme/appearance.html",pathLocale:"/en/",extraFields:[]},{title:"Auto Set Categories",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Configure",slug:"configure",link:"#configure",children:[]}],path:"/en/docs/theme/auto-set-category.html",pathLocale:"/en/",extraFields:[]},{title:"Auto Set Series",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Configure",slug:"configure",link:"#configure",children:[]}],path:"/en/docs/theme/auto-set-series.html",pathLocale:"/en/",extraFields:[]},{title:"Announcement",headers:[{level:2,title:"Configure",slug:"configure",link:"#configure",children:[]}],path:"/en/docs/theme/bulletin-popover.html",pathLocale:"/en/",extraFields:[]},{title:"Comment",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Option API",slug:"option-api",link:"#option-api",children:[{level:3,title:"Valine",slug:"valine",link:"#valine",children:[]},{level:3,title:"Waline",slug:"waline",link:"#waline",children:[]},{level:3,title:"Giscus",slug:"giscus",link:"#giscus",children:[]}]}],path:"/en/docs/theme/comments.html",pathLocale:"/en/",extraFields:[]},{title:"Custom Container",headers:[{level:2,title:"Tips related",slug:"tips-related",link:"#tips-related",children:[]},{level:2,title:"Code related",slug:"code-related",link:"#code-related",children:[]}],path:"/en/docs/theme/custom-container.html",pathLocale:"/en/",extraFields:[]},{title:"Customize Primary Color",headers:[],path:"/en/docs/theme/custom-primary-color.html",pathLocale:"/en/",extraFields:[]},{title:"Search Function",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Configure",slug:"configure",link:"#configure",children:[]}],path:"/en/docs/theme/doc-search.html",pathLocale:"/en/",extraFields:[]},{title:"Home Page",headers:[{level:2,title:"Configure",slug:"configure",link:"#configure",children:[{level:3,title:"modules",slug:"modules",link:"#modules",children:[]},{level:3,title:"banner",slug:"banner",link:"#banner",children:[]},{level:3,title:"bannerBrand",slug:"bannerbrand",link:"#bannerbrand",children:[]},{level:3,title:"blog",slug:"blog",link:"#blog",children:[]},{level:3,title:"features",slug:"features",link:"#features",children:[]},{level:3,title:"footer",slug:"footer",link:"#footer",children:[]},{level:3,title:"MdContent",slug:"mdcontent",link:"#mdcontent",children:[]},{level:3,title:"Comment",slug:"comment",link:"#comment",children:[]}]},{level:2,title:"Case",slug:"case",link:"#case",children:[]},{level:2,title:"Custom Home Module",slug:"custom-home-module",link:"#custom-home-module",children:[]}],path:"/en/docs/theme/frontmatter-home.html",pathLocale:"/en/",extraFields:[]},{title:"Normal Pages",headers:[{level:2,title:"password",slug:"password",link:"#password",children:[]},{level:2,title:"sticky",slug:"sticky",link:"#sticky",children:[]},{level:2,title:"pageClass",slug:"pageclass",link:"#pageclass",children:[]}],path:"/en/docs/theme/frontmatter-page.html",pathLocale:"/en/",extraFields:[]},{title:"About Git",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[]}],path:"/en/docs/theme/git.html",pathLocale:"/en/",extraFields:[]},{title:"Home Page Path",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[]}],path:"/en/docs/theme/home.html",pathLocale:"/en/",extraFields:[]},{title:"Parse File To Code Group",headers:[],path:"/en/docs/theme/markdown-file-parse.html",pathLocale:"/en/",extraFields:[]},{title:"Task List",headers:[],path:"/en/docs/theme/markdown-task.html",pathLocale:"/en/",extraFields:[]},{title:"Vue Component Preview",headers:[],path:"/en/docs/theme/markdown-vue-preview.html",pathLocale:"/en/",extraFields:[]},{title:"I18n",headers:[{level:2,title:"Options",slug:"options",link:"#options",children:[]},{level:2,title:"Example",slug:"example",link:"#example",children:[]}],path:"/en/docs/theme/multilingual.html",pathLocale:"/en/",extraFields:[]},{title:"Navbar",headers:[{level:2,title:"Types",slug:"types",link:"#types",children:[]},{level:2,title:"Refer",slug:"refer",link:"#refer",children:[]}],path:"/en/docs/theme/navbar.html",pathLocale:"/en/",extraFields:[]},{title:"Register Pages",headers:[{level:2,title:"注册",slug:"注册",link:"#注册",children:[]}],path:"/en/docs/theme/pages.html",pathLocale:"/en/",extraFields:[]},{title:"Encryption",headers:[{level:2,title:"Obtaining Ciphertext",slug:"obtaining-ciphertext",link:"#obtaining-ciphertext",children:[]},{level:2,title:"Set Encryption",slug:"set-encryption",link:"#set-encryption",children:[{level:3,title:"Encrypt The e=Entire Website",slug:"encrypt-the-e-entire-website",link:"#encrypt-the-e-entire-website",children:[]},{level:3,title:"Encrypting A Single Page",slug:"encrypting-a-single-page",link:"#encrypting-a-single-page",children:[]}]}],path:"/en/docs/theme/password.html",pathLocale:"/en/",extraFields:[]},{title:"Series",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Configure",slug:"configure",link:"#configure",children:[{level:3,title:"General",slug:"general",link:"#general",children:[]},{level:3,title:"Group",slug:"group",link:"#group",children:[]},{level:3,title:"Sub Group",slug:"sub-group",link:"#sub-group",children:[]},{level:3,title:"Error",slug:"error",link:"#error",children:[]}]}],path:"/en/docs/theme/series.html",pathLocale:"/en/",extraFields:[]},{title:"User-defined packaging configuration",headers:[{level:2,title:"Configure",slug:"configure",link:"#configure",children:[{level:3,title:"viteBundler",slug:"vitebundler",link:"#vitebundler",children:[]}]}],path:"/en/docs/theme/set-vite-bundler.html",pathLocale:"/en/",extraFields:[]},{title:"Social Links",headers:[{level:2,title:"Types",slug:"types",link:"#types",children:[]},{level:2,title:"Refer",slug:"refer",link:"#refer",children:[]}],path:"/en/docs/theme/social-links.html",pathLocale:"/en/",extraFields:[]},{title:"Source folder",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[]}],path:"/en/docs/theme/source-dir.html",pathLocale:"/en/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]}];import.meta.webpackHot&&(import.meta.webpackHot.accept(),__VUE_HMR_RUNTIME__.updateSearchIndex&&__VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex));const zy=Q(My),By=()=>zy,Ny=/[^\x00-\x7F]/,jy=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),od=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),id=(e,t)=>{const n=t.join(" "),u=jy(e);if(Ny.test(e))return u.some(o=>n.toLowerCase().includes(o));const r=e.endsWith(" ");return new RegExp(`${u.map((o,i)=>u.length===i+1&&!r?`(?=.*\\b${od(o)})`:`(?=.*\\b${od(o)}\\b)`).join("")}.+`,"gi").test(n)},Hy=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:u})=>{const r=B(()=>e.value.filter(o=>o.pathLocale===t.value));return B(()=>{const o=n.value.trim().toLowerCase();if(!o)return[];const i=[],a=(s,l)=>{id(o,[l.title])&&i.push({link:`${s.path}#${l.slug}`,title:s.title,header:l.title});for(const c of l.children){if(i.length>=u.value)return;a(s,c)}};for(const s of r.value){if(i.length>=u.value)break;if(id(o,[s.title,...s.extraFields])){i.push({link:s.path,title:s.title});continue}for(const l of s.headers){if(i.length>=u.value)break;a(s,l)}}return i})},Vy=e=>{const t=Q(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},Uy=fe({name:"SearchBox",props:{locales:{type:Object,default:()=>({})},hotKeys:Array,maxSuggestions:{type:Number,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:u}=gt(e),r=ts(t),o=Lt(),i=Dt(),a=By(),s=Q(null),l=Q(!1),c=Q(""),d=Hy({searchIndex:a,routeLocale:i,query:c,maxSuggestions:u}),{focusIndex:f,focusNext:p,focusPrev:g}=Vy(d);D2(n,()=>{var m;(m=s.value)==null||m.focus()});const h=B(()=>l.value&&!!d.value.length),y=()=>{h.value&&g()},C=()=>{h.value&&p()},b=m=>{if(!h.value)return;const v=d.value[m];v&&o.push(v.link).then(()=>{c.value="",f.value=0})};return()=>Z("form",{class:"search-box",role:"search"},[Z("input",{ref:s,type:"search",placeholder:r.value.placeholder,autocomplete:"off",spellcheck:!1,value:c.value,onFocus:()=>{l.value=!0},onBlur:()=>{l.value=!1},onInput:m=>{c.value=m.target.value},onKeydown:m=>{switch(m.key){case"ArrowUp":{y();break}case"ArrowDown":{C();break}case"Enter":{m.preventDefault(),b(f.value);break}}}}),h.value&&Z("ul",{class:"suggestions",onMouseleave:()=>{f.value=-1}},d.value.map(({link:m,title:v,header:T},P)=>Z("li",{class:["suggestion",{focus:f.value===P}],onMouseenter:()=>{f.value=P},onMousedown:()=>{b(P)}},Z("a",{href:m,onClick:A=>{A.preventDefault()}},[Z("span",{class:"page-title"},v),T&&Z("span",{class:"page-header"},`> ${T}`)]))))])}});var Gy=[{key:"s",ctrl:!0}],qy={"/":{placeholder:"搜索"},"/en/":{placeholder:"Search"}};const Wy=qy,Ky=Gy,Zy=5;var Qy=At({enhance({app:e}){e.component("SearchBox",t=>Z(Uy,{locales:Wy,hotKeys:Ky,maxSuggestions:Zy,...t}))}});const Xy=Object.freeze(Object.defineProperty({__proto__:null,default:Qy},Symbol.toStringTag,{value:"Module"}));/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var Kn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},uo=function(t){return t.tagName==="IMG"},Yy=function(t){return NodeList.prototype.isPrototypeOf(t)},bo=function(t){return t&&t.nodeType===1},ad=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},sd=function(t){try{return Array.isArray(t)?t.filter(uo):Yy(t)?[].slice.call(t).filter(uo):bo(t)?[t].filter(uo):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(uo):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Jy=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},ex=function(t){var n=t.getBoundingClientRect(),u=n.top,r=n.left,o=n.width,i=n.height,a=t.cloneNode(),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=u+s+"px",a.style.left=r+l+"px",a.style.width=o+"px",a.style.height=i+"px",a.style.transform="",a},cu=function(t,n){var u=Kn({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,u);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,u.bubbles,u.cancelable,u.detail),r},tx=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=window.Promise||function(I){function R(){}I(R,R)},r=function(I){var R=I.target;if(R===L){g();return}m.indexOf(R)!==-1&&h({target:R})},o=function(){if(!(T||!k.original)){var I=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(P-I)>A.scrollOffset&&setTimeout(g,150)}},i=function(I){var R=I.key||I.keyCode;(R==="Escape"||R==="Esc"||R===27)&&g()},a=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},R=I;if(I.background&&(L.style.background=I.background),I.container&&I.container instanceof Object&&(R.container=Kn({},A.container,I.container)),I.template){var K=bo(I.template)?I.template:document.querySelector(I.template);R.template=K}return A=Kn({},A,R),m.forEach(function(U){U.dispatchEvent(cu("medium-zoom:update",{detail:{zoom:D}}))}),D},s=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Kn({},A,I))},l=function(){for(var I=arguments.length,R=Array(I),K=0;K<I;K++)R[K]=arguments[K];var U=R.reduce(function(M,J){return[].concat(M,sd(J))},[]);return U.filter(function(M){return m.indexOf(M)===-1}).forEach(function(M){m.push(M),M.classList.add("medium-zoom-image")}),v.forEach(function(M){var J=M.type,q=M.listener,ie=M.options;U.forEach(function(ce){ce.addEventListener(J,q,ie)})}),D},c=function(){for(var I=arguments.length,R=Array(I),K=0;K<I;K++)R[K]=arguments[K];k.zoomed&&g();var U=R.length>0?R.reduce(function(M,J){return[].concat(M,sd(J))},[]):m;return U.forEach(function(M){M.classList.remove("medium-zoom-image"),M.dispatchEvent(cu("medium-zoom:detach",{detail:{zoom:D}}))}),m=m.filter(function(M){return U.indexOf(M)===-1}),D},d=function(I,R){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return m.forEach(function(U){U.addEventListener("medium-zoom:"+I,R,K)}),v.push({type:"medium-zoom:"+I,listener:R,options:K}),D},f=function(I,R){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return m.forEach(function(U){U.removeEventListener("medium-zoom:"+I,R,K)}),v=v.filter(function(U){return!(U.type==="medium-zoom:"+I&&U.listener.toString()===R.toString())}),D},p=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},R=I.target,K=function(){var M={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},J=void 0,q=void 0;if(A.container)if(A.container instanceof Object)M=Kn({},M,A.container),J=M.width-M.left-M.right-A.margin*2,q=M.height-M.top-M.bottom-A.margin*2;else{var ie=bo(A.container)?A.container:document.querySelector(A.container),ce=ie.getBoundingClientRect(),ve=ce.width,he=ce.height,Ie=ce.left,Le=ce.top;M=Kn({},M,{width:ve,height:he,left:Ie,top:Le})}J=J||M.width-A.margin*2,q=q||M.height-A.margin*2;var be=k.zoomedHd||k.original,ye=ad(be)?J:be.naturalWidth||J,H=ad(be)?q:be.naturalHeight||q,ne=be.getBoundingClientRect(),ee=ne.top,O=ne.left,z=ne.width,Y=ne.height,w=Math.min(Math.max(z,ye),J)/z,_=Math.min(Math.max(Y,H),q)/Y,F=Math.min(w,_),G=(-O+(J-z)/2+A.margin+M.left)/F,j=(-ee+(q-Y)/2+A.margin+M.top)/F,W="scale("+F+") translate3d("+G+"px, "+j+"px, 0)";k.zoomed.style.transform=W,k.zoomedHd&&(k.zoomedHd.style.transform=W)};return new u(function(U){if(R&&m.indexOf(R)===-1){U(D);return}var M=function ve(){T=!1,k.zoomed.removeEventListener("transitionend",ve),k.original.dispatchEvent(cu("medium-zoom:opened",{detail:{zoom:D}})),U(D)};if(k.zoomed){U(D);return}if(R)k.original=R;else if(m.length>0){var J=m;k.original=J[0]}else{U(D);return}if(k.original.dispatchEvent(cu("medium-zoom:open",{detail:{zoom:D}})),P=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,T=!0,k.zoomed=ex(k.original),document.body.appendChild(L),A.template){var q=bo(A.template)?A.template:document.querySelector(A.template);k.template=document.createElement("div"),k.template.appendChild(q.content.cloneNode(!0)),document.body.appendChild(k.template)}if(k.original.parentElement&&k.original.parentElement.tagName==="PICTURE"&&k.original.currentSrc&&(k.zoomed.src=k.original.currentSrc),document.body.appendChild(k.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),k.original.classList.add("medium-zoom-image--hidden"),k.zoomed.classList.add("medium-zoom-image--opened"),k.zoomed.addEventListener("click",g),k.zoomed.addEventListener("transitionend",M),k.original.getAttribute("data-zoom-src")){k.zoomedHd=k.zoomed.cloneNode(),k.zoomedHd.removeAttribute("srcset"),k.zoomedHd.removeAttribute("sizes"),k.zoomedHd.removeAttribute("loading"),k.zoomedHd.src=k.zoomed.getAttribute("data-zoom-src"),k.zoomedHd.onerror=function(){clearInterval(ie),console.warn("Unable to reach the zoom image target "+k.zoomedHd.src),k.zoomedHd=null,K()};var ie=setInterval(function(){k.zoomedHd.complete&&(clearInterval(ie),k.zoomedHd.classList.add("medium-zoom-image--opened"),k.zoomedHd.addEventListener("click",g),document.body.appendChild(k.zoomedHd),K())},10)}else if(k.original.hasAttribute("srcset")){k.zoomedHd=k.zoomed.cloneNode(),k.zoomedHd.removeAttribute("sizes"),k.zoomedHd.removeAttribute("loading");var ce=k.zoomedHd.addEventListener("load",function(){k.zoomedHd.removeEventListener("load",ce),k.zoomedHd.classList.add("medium-zoom-image--opened"),k.zoomedHd.addEventListener("click",g),document.body.appendChild(k.zoomedHd),K()})}else K()})},g=function(){return new u(function(I){if(T||!k.original){I(D);return}var R=function K(){k.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(k.zoomed),k.zoomedHd&&document.body.removeChild(k.zoomedHd),document.body.removeChild(L),k.zoomed.classList.remove("medium-zoom-image--opened"),k.template&&document.body.removeChild(k.template),T=!1,k.zoomed.removeEventListener("transitionend",K),k.original.dispatchEvent(cu("medium-zoom:closed",{detail:{zoom:D}})),k.original=null,k.zoomed=null,k.zoomedHd=null,k.template=null,I(D)};T=!0,document.body.classList.remove("medium-zoom--opened"),k.zoomed.style.transform="",k.zoomedHd&&(k.zoomedHd.style.transform=""),k.template&&(k.template.style.transition="opacity 150ms",k.template.style.opacity=0),k.original.dispatchEvent(cu("medium-zoom:close",{detail:{zoom:D}})),k.zoomed.addEventListener("transitionend",R)})},h=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},R=I.target;return k.original?g():p({target:R})},y=function(){return A},C=function(){return m},b=function(){return k.original},m=[],v=[],T=!1,P=0,A=n,k={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?A=t:(t||typeof t=="string")&&l(t),A=Kn({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},A);var L=Jy(A.background);document.addEventListener("click",r),document.addEventListener("keyup",i),document.addEventListener("scroll",o),window.addEventListener("resize",g);var D={open:p,close:g,toggle:h,update:a,clone:s,attach:l,detach:c,on:d,off:f,getOptions:y,getImages:C,getZoomedImage:b};return D};function nx(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var u=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&u.firstChild?u.insertBefore(r,u.firstChild):u.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ux=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";nx(ux);const Dp=Symbol("mediumZoom"),rx=()=>{const e=He(Dp);if(!e)throw new Error("useMediumZoom() is called without provider.");return e};var ox={background:"inherit"};const ix="[vp-content] > img, [vp-content] :not(a) > img",ax=ox,sx=At({enhance({app:e}){const t=tx(ax);t.refresh=(n=ix)=>{t.detach(),t.attach(n)},e.provide(Dp,t)},setup(){const e=rx();hf(t=>{t!=="beforeUnmount"&&e.refresh()})}}),lx=Object.freeze(Object.defineProperty({__proto__:null,default:sx},Symbol.toStringTag,{value:"Module"})),ld=async(e,t)=>{const{path:n,query:u}=e.currentRoute.value,{scrollBehavior:r}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:u,hash:t}),e.options.scrollBehavior=r},cx=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:u=5})=>{const r=Lt();vn("scroll",wf(()=>{var g,h;const i=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(i-0)<u){ld(r,"");return}const s=window.innerHeight+i,l=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.abs(l-s)<u,d=Array.from(document.querySelectorAll(e)),p=Array.from(document.querySelectorAll(t)).filter(y=>d.some(C=>C.hash===y.hash));for(let y=0;y<p.length;y++){const C=p[y],b=p[y+1],m=i>=(((g=C.parentElement)==null?void 0:g.offsetTop)??0)-u,v=!b||i<(((h=b.parentElement)==null?void 0:h.offsetTop)??0)-u;if(!(m&&v))continue;const P=decodeURIComponent(r.currentRoute.value.hash),A=decodeURIComponent(C.hash);if(P===A)return;if(c){for(let k=y+1;k<p.length;k++)if(P===decodeURIComponent(p[k].hash))return}ld(r,A);return}},n))},dx="a.page-catalog-item",fx=".header-anchor",px=200,hx=5,mx=At({setup(){cx({headerLinkSelector:dx,headerAnchorSelector:fx,delay:px,offset:hx})}}),gx=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"}));function bx(e,t,n){var u,r,o;n===void 0&&(n={});var i=(u=n.isImmediate)!=null&&u,a=(r=n.callback)!=null&&r,s=n.maxWait,l=Date.now(),c=[];function d(){if(s!==void 0){var p=Date.now()-l;if(p+t>=s)return s-p}return t}var f=function(){var p=[].slice.call(arguments),g=this;return new Promise(function(h,y){var C=i&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,l=Date.now(),!i){var m=e.apply(g,p);a&&a(m),c.forEach(function(v){return(0,v.resolve)(m)}),c=[]}},d()),C){var b=e.apply(g,p);return a&&a(b),h(b)}c.push({resolve:h,reject:y})})};return f.cancel=function(p){o!==void 0&&clearTimeout(o),c.forEach(function(g){return(0,g.reject)(p)}),c=[]},f}var vx={appId:"38R2J3MTQC",apiKey:"583d3caf699630b08a9bc2d12d599701",indexName:"v2-vuepress-reco-recoluan",locales:{"/":{placeholder:"搜索文档",translations:{button:{buttonText:"搜索文档",buttonAriaLabel:"搜索文档"},modal:{searchBox:{resetButtonTitle:"清除查询条件",resetButtonAriaLabel:"清除查询条件",cancelButtonText:"取消",cancelButtonAriaLabel:"取消"},startScreen:{recentSearchesTitle:"搜索历史",noRecentSearchesText:"没有搜索历史",saveRecentSearchButtonTitle:"保存至搜索历史",removeRecentSearchButtonTitle:"从搜索历史中移除",favoriteSearchesTitle:"收藏",removeFavoriteSearchButtonTitle:"从收藏中移除"},errorScreen:{titleText:"无法获取结果",helpText:"你可能需要检查你的网络连接"},footer:{selectText:"选择",navigateText:"切换",closeText:"关闭",searchByText:"搜索提供者"},noResultsScreen:{noResultsText:"无法找到相关结果",suggestedQueryText:"你可以尝试查询",reportMissingResultsText:"你认为该查询应该有结果？",reportMissingResultsLinkText:"点击反馈"}}}},"/en/":{}}};const yx=e=>{const t=vn("keydown",n=>{const u=n.key==="k"&&(n.ctrlKey||n.metaKey);n.key!=="/"&&!u||(n.preventDefault(),e(),t())})},xx=()=>{const e=Lt();return{transformItems:t=>t.map(n=>({...n,url:`/${qa(Mm(n.url,"/"))}`})),navigator:{navigate:({itemUrl:t})=>{e.push(t.replace("/","/"))}},transformSearchClient:t=>({...t,search:bx(t.search,500)})}},_x=vx,wx=Q(_x),Pp=Symbol(""),kx=()=>{const e=He(Pp),t=Dt();return B(()=>{var n;return{...e.value,...(n=e.value.locales)==null?void 0:n[t.value]}})},Cx=e=>{e.provide(Pp,Pu(wx))},Ex=(e,t=[])=>[`lang:${e}`,...Array.isArray(t)?t:[t]],Ax=({buttonText:e="Search",buttonAriaLabel:t=e}={})=>`<button type="button" class="DocSearch DocSearch-Button" aria-label="${t}"><span class="DocSearch-Button-Container"><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${e}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"><svg width="15" height="15" class="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`,Rp=()=>{if(document.querySelector(".DocSearch-Modal"))return;const e=new Event("keydown");e.key="k",e.metaKey=!0,window.dispatchEvent(e),setTimeout(Rp,16)},Sx=e=>{const t="algolia-preconnect";("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{if(document.head.querySelector(`#${t}`))return;const n=document.createElement("link");n.id=t,n.rel="preconnect",n.href=`https://${e}-dsn.algolia.net`,n.crossOrigin="",document.head.appendChild(n)})},Tx=fe({name:"DocSearch",props:{containerId:{type:String,default:"docsearch-container"},options:{type:Object,default:()=>({})}},setup(e){const t=kx(),n=xx(),u=Jo(),r=Dt(),o=Q(!1),i=Q(!1),a=B(()=>{const{locales:c={},...d}=e.options;return{...t.value,...d,...c[r.value]}}),s=async()=>{const{default:c}=await X(async()=>{const{default:f}=await import("./index-B-M8YVCw.js");return{default:f}},[]),{searchParameters:d}=a.value;c({...n,...a.value,container:`#${e.containerId}`,searchParameters:{...d,facetFilters:Ex(u.value,d==null?void 0:d.facetFilters)}}),o.value=!0},l=()=>{i.value||o.value||(i.value=!0,s(),Rp(),Pe(r,s))};return yx(l),Fe(()=>{Sx(a.value.appId)}),()=>{var c;return[Z("div",{id:e.containerId,style:{display:o.value?"block":"none"}}),o.value?null:Z("div",{onClick:l,innerHTML:Ax((c=a.value.translations)==null?void 0:c.button)})]}}}),Ix={enhance({app:e}){Cx(e),e.component("SearchBox",Tx)}},Lx=Object.freeze(Object.defineProperty({__proto__:null,default:Ix},Symbol.toStringTag,{value:"Module"})),$x=719,cd=Q(!1);function Fp(){const e=()=>{cd.value=window.innerWidth<=$x};return Fe(()=>{e(),window.addEventListener("resize",e,!1),window.addEventListener("orientationchange",e,!1)}),{isMobile:cd}}const gs=e=>{const{notFound:t,meta:n,path:u}=ti(e);return t?{text:u,link:u}:{text:n.title||u,link:u}},Op=()=>Mn(),uu=()=>$t(),Mp=e=>!$r(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Dx={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Px=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:u,editLinkPattern:r})=>{const o=Mp(e);let i;return r?i=r:o!==null&&(i=Dx[o]),i?i.replace(/:repo/,$r(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,qa(`${Q0(n)}/${u}`)):null};function Rx(){const e=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"],t=Math.floor(Math.random()*e.length);return e[t]}const Fx={},Ox={class:"xicon-icon",style:{width:"18px",height:"18px","font-size":"18px",color:"inherit"},xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 12 12"};function Mx(e,t){return x(),S("svg",Ox,t[0]||(t[0]=[$("g",{fill:"none"},[$("path",{d:"M1.974 6.659a.5.5 0 0 1-.948-.317c-.01.03 0-.001 0-.001a1.633 1.633 0 0 1 .062-.162c.04-.095.099-.226.18-.381c.165-.31.422-.723.801-1.136C2.834 3.827 4.087 3 6 3c1.913 0 3.166.827 3.931 1.662a5.479 5.479 0 0 1 .98 1.517l.046.113c.003.008.013.06.023.11L11 6.5s.084.333-.342.474a.5.5 0 0 1-.632-.314v-.003l-.006-.016a3.678 3.678 0 0 0-.172-.376a4.477 4.477 0 0 0-.654-.927C8.584 4.673 7.587 4 6 4s-2.584.673-3.194 1.338a4.477 4.477 0 0 0-.795 1.225a2.209 2.209 0 0 0-.03.078l-.007.018zM6 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM5 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0z",fill:"currentColor"})],-1)]))}const zp=Ke(Fx,[["render",Mx]]),zx={},Bx={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function Nx(e,t){return x(),S("svg",Bx,t[0]||(t[0]=[Wo('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)]))}const jx=Ke(zx,[["render",Nx]]),Hx={},Vx={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function Ux(e,t){return x(),S("svg",Vx,t[0]||(t[0]=[$("path",{d:"M10 14a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 1.998 2.004A2.002 2.002 0 0 0 10 8z",fill:"currentColor"},null,-1),$("path",{d:"M16.644 29.415L2.586 15.354A2 2 0 0 1 2 13.941V4a2 2 0 0 1 2-2h9.941a2 2 0 0 1 1.414.586l14.06 14.058a2 2 0 0 1 0 2.828l-9.943 9.943a2 2 0 0 1-2.829 0zM4 4v9.942L18.058 28L28 18.058L13.942 4z",fill:"currentColor"},null,-1)]))}const bs=Ke(Hx,[["render",Ux]]),Gx={},qx={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function Wx(e,t){return x(),S("svg",qx,t[0]||(t[0]=[$("path",{d:"M31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7z",fill:"currentColor"},null,-1),$("path",{d:"M1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7z",fill:"currentColor"},null,-1),$("path",{d:"M12.419 25.484L17.639 6l1.932.518L14.35 26z",fill:"currentColor"},null,-1)]))}const Kx=Ke(Gx,[["render",Wx]]),Zx={},Qx={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function Xx(e,t){return x(),S("svg",Qx,t[0]||(t[0]=[$("path",{d:"M2 26h28v2H2z",fill:"currentColor"},null,-1),$("path",{d:"M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z",fill:"currentColor"},null,-1)]))}const Yx=Ke(Zx,[["render",Xx]]),Jx={},e_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function t_(e,t){return x(),S("svg",e_,t[0]||(t[0]=[$("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)]))}const n_=Ke(Jx,[["render",t_]]),u_={},r_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function o_(e,t){return x(),S("svg",r_,t[0]||(t[0]=[$("path",{d:"M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z",fill:"currentColor"},null,-1),$("path",{d:"M26 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z",fill:"currentColor"},null,-1)]))}const i_=Ke(u_,[["render",o_]]),a_={},s_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 28 28"};function l_(e,t){return x(),S("svg",s_,t[0]||(t[0]=[$("g",{fill:"none"},[$("path",{d:"M12.701 3.908c.532-1.078 2.069-1.078 2.6 0l2.692 5.452l6.017.875c1.19.173 1.664 1.634.804 2.473l-4.355 4.244l1.028 5.993c.204 1.185-1.04 2.088-2.103 1.529L14 21.644l-5.381 2.83c-1.064.559-2.307-.344-2.104-1.529l1.028-5.993l-4.355-4.244c-.86-.839-.385-2.3.804-2.473l6.017-.875l2.691-5.452z",fill:"currentColor"})],-1)]))}const c_=Ke(a_,[["render",l_]]),d_={},f_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function p_(e,t){return x(),S("svg",f_,t[0]||(t[0]=[$("path",{d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z","fill-rule":"evenodd",fill:"currentColor"},null,-1)]))}const h_=Ke(d_,[["render",p_]]),m_={},g_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function b_(e,t){return x(),S("svg",g_,t[0]||(t[0]=[$("path",{d:"M11.17 6l3.42 3.41l.58.59H28v16H4V6h7.17m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4z",fill:"currentColor"},null,-1)]))}const ii=Ke(m_,[["render",b_]]),v_={},y_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function x_(e,t){return x(),S("svg",y_,t[0]||(t[0]=[$("path",{d:"M24 14h-2V8a6 6 0 0 0-12 0v6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2zM12 8a4 4 0 0 1 8 0v6h-8zm12 20H8V16h16z",fill:"currentColor"},null,-1)]))}const __=Ke(v_,[["render",x_]]),w_={},k_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function C_(e,t){return x(),S("svg",k_,t[0]||(t[0]=[$("path",{d:"M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 22H6V12h20v14zm0-16H6V6h4v2h2V6h8v2h2V6h4v4z",fill:"currentColor"},null,-1)]))}const Bp=Ke(w_,[["render",C_]]),E_={},A_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function S_(e,t){return x(),S("svg",A_,t[0]||(t[0]=[$("path",{d:"M14 16.59L11.41 14L10 15.41l4 4l8-8L20.59 10L14 16.59z",fill:"currentColor"},null,-1),$("path",{d:"M16 30l-6.176-3.293A10.982 10.982 0 0 1 4 17V4a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v13a10.982 10.982 0 0 1-5.824 9.707zM6 4v13a8.985 8.985 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.985 8.985 0 0 0 26 17V4z",fill:"currentColor"},null,-1)]))}const T_=Ke(E_,[["render",S_]]),I_={},L_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function $_(e,t){return x(),S("svg",L_,t[0]||(t[0]=[Wo('<path d="M14 4h4v4h-4z" fill="currentColor"></path><path d="M4 4h4v4H4z" fill="currentColor"></path><path d="M24 4h4v4h-4z" fill="currentColor"></path><path d="M14 14h4v4h-4z" fill="currentColor"></path><path d="M4 14h4v4H4z" fill="currentColor"></path><path d="M24 14h4v4h-4z" fill="currentColor"></path><path d="M14 24h4v4h-4z" fill="currentColor"></path><path d="M4 24h4v4H4z" fill="currentColor"></path><path d="M24 24h4v4h-4z" fill="currentColor"></path>',9)]))}const D_=Ke(I_,[["render",$_]]),P_={},R_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function F_(e,t){return x(),S("svg",R_,t[0]||(t[0]=[$("path",{d:"M24 14H12V8a4 4 0 0 1 8 0h2a6 6 0 0 0-12 0v6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2zm0 14H8V16h16z",fill:"currentColor"},null,-1)]))}const O_=Ke(P_,[["render",F_]]),M_={},z_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function B_(e,t){return x(),S("svg",z_,t[0]||(t[0]=[$("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)]))}const N_=Ke(M_,[["render",B_]]),j_={},H_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function V_(e,t){return x(),S("svg",H_,t[0]||(t[0]=[$("path",{d:"M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z",fill:"currentColor"},null,-1)]))}const U_=Ke(j_,[["render",V_]]),G_={},q_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function W_(e,t){return x(),S("svg",q_,t[0]||(t[0]=[$("path",{d:"M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z",fill:"currentColor"},null,-1)]))}const K_=Ke(G_,[["render",W_]]),Z_={},Q_={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function X_(e,t){return x(),S("svg",Q_,t[0]||(t[0]=[Wo('<circle cx="10" cy="12" r="2" fill="currentColor"></circle><circle cx="16" cy="9" r="2" fill="currentColor"></circle><circle cx="22" cy="12" r="2" fill="currentColor"></circle><circle cx="23" cy="18" r="2" fill="currentColor"></circle><circle cx="19" cy="23" r="2" fill="currentColor"></circle><path d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2zm8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5.07 5.07 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.89 11.89 0 0 1-3.35 8.79z" fill="currentColor"></path>',6)]))}const Y_=Ke(Z_,[["render",X_]]),J_={},ew={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function tw(e,t){return x(),S("svg",ew,t[0]||(t[0]=[$("path",{d:"M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23z",fill:"currentColor"},null,-1),$("path",{d:"M18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z",fill:"currentColor"},null,-1)]))}const nw=Ke(J_,[["render",tw]]),uw={},rw={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function ow(e,t){return x(),S("svg",rw,t[0]||(t[0]=[Wo('<path d="M15 2h2v3h-2z" fill="currentColor"></path><path d="M27 15h3v2h-3z" fill="currentColor"></path><path d="M15 27h2v3h-2z" fill="currentColor"></path><path d="M2 15h3v2H2z" fill="currentColor"></path><path d="M5.45 6.884l1.414-1.415l2.121 2.122l-1.414 1.414z" fill="currentColor"></path><path d="M23 7.58l2.121-2.12l1.414 1.414l-2.121 2.121z" fill="currentColor"></path><path d="M23.002 24.416l1.415-1.414l2.12 2.122l-1.413 1.414z" fill="currentColor"></path><path d="M5.47 25.13L7.59 23L9 24.42l-2.12 2.12l-1.41-1.41z" fill="currentColor"></path><path d="M16 8a8 8 0 1 0 8 8a8 8 0 0 0-8-8zm0 14a6 6 0 0 1 0-12z" fill="currentColor"></path>',9)]))}const iw=Ke(uw,[["render",ow]]),aw={},sw={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"};function lw(e,t){return x(),S("svg",sw,t[0]||(t[0]=[$("circle",{cx:"16",cy:"8",r:"2",fill:"currentColor"},null,-1),$("circle",{cx:"16",cy:"16",r:"2",fill:"currentColor"},null,-1),$("circle",{cx:"16",cy:"24",r:"2",fill:"currentColor"},null,-1)]))}const cw=Ke(aw,[["render",lw]]),dw={key:1,class:"xicon-container"},zr=fe({__name:"Xicons",props:{icon:[Object,String],iconPosition:{type:String,default:"left"},iconSize:{type:[String,Number],default:18},color:{type:String,default:""},text:{type:String,default:""},textSize:{type:[String,Number],default:"14"},link:{type:String,default:"javascript:void(0)"},target:{type:String,default:"_self"}},emits:["click"],setup(e,{emit:t}){const n=g0(),u=e,r=t,{icon:o,iconPosition:i,iconSize:a,color:s,textSize:l}=gt(u),c=B(()=>({width:`${a.value}px`,height:`${a.value}px`,fontSize:`${a.value}px`,color:s.value})),d=B(()=>({color:s.value,fontSize:`${l.value}px`})),f=()=>{u.link&&window.open(u.link,u.target),r("click")};return(p,g)=>e.link!=="javascript:void(0)"||e.text||E(n).default?(x(),S("span",{key:0,class:ke(["xicon-container",E(i)]),onClick:f},[_t(p.$slots,"icon",{},()=>[(x(),de(wu(E(o)),{class:"xicon-icon",style:ct(c.value)},null,8,["style"]))]),e.text||E(n).default?(x(),S("span",{key:0,class:"xicon-content",style:ct(d.value)},[_t(p.$slots,"default",{},()=>[Qe(oe(e.text),1)])],4)):V("",!0)],2)):(x(),S("span",dw,[(x(),de(wu(E(o)),{style:ct(c.value),onClick:g[0]||(g[0]=h=>r("click"))},null,8,["style"]))]))}}),fw=fe({name:"Tab",setup(){const e=g0(),t=Q(0);return()=>{var u;const n=(((u=e.default)==null?void 0:u.call(e))||[]).map(r=>(r.props||(r.props={}),r));return n.length===0?null:(n.forEach((r,o)=>{r.props&&(r.props.active=o===t.value)}),Z("div",{class:"tab"},[Z("div",{class:"tab__nav"},Z("ul",{class:"tab__ul"},n.map((r,o)=>{var a;const i=o===t.value;return Z("li",{class:"tab__li"},Z("button",{class:{"tab__nav-tab":!0,"tab__nav-tab-active":i},onClick:()=>t.value=o},Z(zr,{icon:D_,text:(a=r.props)==null?void 0:a.title})))}))),n]))}}}),pw=fe({__name:"Badge",props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:"top"}},setup(e){return(t,n)=>(x(),S("span",{class:ke(["badge",e.type]),style:ct({verticalAlign:e.vertical})},[_t(t.$slots,"default",{},()=>[Qe(oe(e.text),1)])],6))}}),hw=fe({__name:"TabItem",props:{title:{type:String,required:!0},active:{type:Boolean,default:!1}},setup(e){const t=e,{title:n,active:u}=gt(t);return(r,o)=>(x(),S("div",{class:ke(["tab-item",{"tab-item__active":E(u)}])},[_t(r.$slots,"default")],2))}}),mw=fe({name:"CodeGroup",setup(e,{slots:t}){const n=Q(-1),u=Q([]);c0(()=>{u.value=[]});const r=(a=n.value)=>{a<u.value.length-1?n.value=a+1:n.value=0,u.value[n.value].focus()},o=(a=n.value)=>{a>0?n.value=a-1:n.value=u.value.length-1,u.value[n.value].focus()},i=(a,s)=>{a.key===" "||a.key==="Enter"?(a.preventDefault(),n.value=s):a.key==="ArrowRight"?(a.preventDefault(),r(s)):a.key==="ArrowLeft"&&(a.preventDefault(),o(s))};return()=>{var s;const a=(((s=t.default)==null?void 0:s.call(t))||[]).filter(l=>l.type.name==="CodeGroupItem").map(l=>(l.props===null&&(l.props={}),l));return a.length===0?null:(n.value<0||n.value>a.length-1?(n.value=a.findIndex(l=>l.props.active===""||l.props.active===!0),n.value===-1&&(n.value=0)):a.forEach((l,c)=>{l.props.active=c===n.value}),Z("div",{class:"code-group"},[Z("div",{class:"code-group__nav"},Z("ul",{class:"code-group__ul"},a.map((l,c)=>{const d=c===n.value;return Z("li",{class:"code-group__li"},Z("button",{ref:f=>{f&&(u.value[c]=f)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":d},ariaPressed:d,ariaExpanded:d,onClick:()=>n.value=c,onKeydown:f=>i(f,c)},Z(zr,{icon:Kx,text:l.props.title})))}))),a]))}}}),gw={},bw={class:"magic-card"};function vw(e,t){return x(),S("div",bw,[t[0]||(t[0]=$("span",{class:"magic-card__bg"},null,-1)),_t(e.$slots,"default")])}const Np=Ke(gw,[["render",vw]]),yw={class:"vue-preview-container"},xw={key:0,class:"preview-container"},_w=fe({__name:"VuePreview",props:["component"],setup(e){return(t,n)=>(x(),S("div",yw,[e.component!=="undefined"?(x(),S("div",xw,[(x(),de(wu(e.component)))])):V("",!0),_t(t.$slots,"default")]))}}),ww=["aria-selected"],kw=fe({name:"CodeGroupItem"}),Cw=fe({...kw,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(x(),S("div",{class:ke(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[_t(t.$slots,"default")],10,ww))}}),dd=Object.freeze(Object.defineProperty({__proto__:null,Badge:pw,CodeGroup:mw,CodeGroupItem:Cw,MagicCard:Np,Tab:fw,TabItem:hw,VuePreview:_w,Xicons:zr},Symbol.toStringTag,{value:"Module"}));function Ew(e){Object.keys(dd).forEach(t=>{e.component(t,dd[t])})}function Aw(e){e.component("NavbarSearch",()=>{const t=e.component("Docsearch")||e.component("SearchBox");return t?Z(t):null})}const vs=(e,t=500)=>{let n;return(...u)=>{n||(n=setTimeout(()=>{e.apply(e,u),n=null},t))}};class Sw{constructor(){Nr(this,"cards");this.cards=[]}init(){this.getCardNodes(),this.initMouseMoveObserver()}initMouseMoveObserver(){window.removeEventListener("mousemove",()=>{}),window.addEventListener("mousemove",vs(t=>{const n=t.pageX,u=t.pageY;this._setMouseLocationToCard(n,u)},50))}getCardNodes(){const t=document.querySelectorAll(".magic-card");this.cards=t,t.forEach(n=>{n.setAttribute("data-x",n.offsetLeft),n.setAttribute("data-y",n.offsetTop),n.setAttribute("data-width",n.clientWidth),n.setAttribute("data-height",n.clientHeight)})}_setMouseLocationToCard(t,n){this.cards.forEach(u=>{const{x:r,y:o,width:i,height:a}=u.dataset,s=Math.floor(t-r),l=Math.floor(n-o);u.style.setProperty("--x",`${s}px`),u.style.setProperty("--y",`${l}px`)})}}const Tw=new Sw;function ai(){return{initMagicCard:()=>{Tw.init()}}}const Iw=()=>Ef(),Ye=()=>eb(),Gu=Q(!1),jp=()=>{const e=si(),t=B(()=>e.value.length>0&&Gu);return{isOpenSeries:Gu,isShowSeries:t,toggleSeries:u=>{Gu.value=typeof u=="boolean"?u:!Gu.value,document.body.style.overflowY=Gu.value?"hidden":"auto"}}},fd=e=>/^[0-9a-zA-Z]+$/.test(e),wn=e=>/^[\u4E00-\u9FA5]+$/.test(e),pd=(e,t=!1)=>{let n=[];const u=/\d+|\D+/g,r=e.match(u);for(let o=0;o<r.length;o++){const i=r[o];isNaN(i)?n=n.concat(i.split("")):t?n.push(i):n=n.concat(i.split(""))}return n},Lw=(e,t,n=!0)=>{if(fd(e)&&fd(t))return e.localeCompare(t,"zh-Hans-CN",{numeric:!0});if(wn(e)&&wn(t))return e.localeCompare(t,"zh-Hans-CN",{numeric:!0});const u=pd(e,n),r=pd(t,n);let o=0;const i=Math.min(u.length,r.length);for(let a=0;a<i;a++){const s=u[a],l=r[a];if(!wn(s)&&wn(l))return-1;if(wn(s)&&!wn(l))return 1;if(wn(s)&&wn(l)?o=s.localeCompare(l,"zh-Hans-CN"):o=s.localeCompare(l,"zh-Hans-CN",{numeric:!0}),o!==0)return o}return u.length>r.length?1:u.length<r.length?-1:0};function Ea(e){return e.sort((n,u)=>(n.children&&Ea(n.children),u.children&&Ea(u.children),Lw(typeof n=="string"?n:n.text,typeof u=="string"?u:u.text,!0)))}function $w(){return{sortSeries:Ea}}const ro=Q(!1),Hp=()=>({isOpenMobileMenus:ro,toggleMobileMenus:t=>{ro.value=typeof t=="boolean"?t:!ro.value,document.body.style.overflowY=ro.value?"hidden":"auto"}}),Vp=Symbol("catalog"),ys=()=>{const e=$t(),t=He(Vp);if(!t)throw new Error("usePageCatalog() is called without provider.");const n=B(()=>t.value.length>0&&e.value.home!==!0);return{catalog:t,isShowCatalog:n}},Dw=e=>({text:e.title,link:`#${e.slug}`,level:e.level,children:Up(e.children)}),Up=e=>e.map(t=>Dw(t)),si=()=>{const e=Je(),{series:t}=Bu(),n=Ye(),u=$t(),r=B(()=>Pw(u.value,n.value,e,t));if(!r)throw new Error("useSeriesItems() is called without provider.");return r},Pw=(e,t,n,u)=>{const{sortSeries:r}=$w();let o=t.series??{};return Object.keys(u).forEach(i=>{u[i]=r(u[i])}),o={...o,...u},e.home?[]:Wa(o)?Rw(o,n):[]},Gp=(e,t)=>t.map(n=>{if(tn(n)){const r=n.includes(e)?n:`${e}${n}`;return gs(r)}const u={...n};return n.children&&(u.children=Gp(e,n.children)),u}),Rw=(e,t)=>{if(!t||typeof t.path>"u")return[];const n=Zo(e,decodeURIComponent(t.path)),u=e[n]??[];return Gp(n,u)};let ea=null,qu=null;const Fw={wait:()=>ea,pending:()=>{ea=new Promise(e=>qu=e)},resolve:()=>{qu==null||qu(),ea=null,qu=null}},Ow=()=>Fw,hd=Q(0),oo=Q("");function qp(){let e=0,t=0;return Fe(()=>{window.addEventListener("touchstart",n=>{const u=n.touches[0];e=Number(u.pageY)}),window.addEventListener("scroll",vs(n=>{t=window.scrollY,t-e<0?oo.value="top":t-e>0?oo.value="bottom":oo.value="",e=t,hd.value=t},300))}),{direction:oo,scrollY:hd}}function Mw(){const e=Op(),t=B(()=>Up(e.value.headers));Ot(Vp,t)}function zw({app:e}){Ew(e),Aw(e)}const Br={__name:"SafeRouterLink",props:{to:{type:[String,Object],required:!0},custom:{type:Boolean,default:!1},replace:{type:Boolean,default:!1},ariaCurrent:{type:String,default:"page"}},setup(e){const t=typeof window>"u";let n=null;const u=Q(!1);if(!t)try{n=Lt()}catch(l){console.warn("SafeRouterLink: Error getting router instance",l)}const r=ut("a"),o=e,i=B(()=>{const l=typeof o.to=="string"?o.to:o.to&&typeof o.to=="object"&&o.to.path?o.to.path:"/";return t||r.value==="a"?{class:"router-link-fallback",href:l,...o.$attrs}:{to:o.to,custom:o.custom,replace:o.replace,"aria-current":o.ariaCurrent,...o.$attrs}}),a=l=>{r.value==="a"&&n&&(l.preventDefault(),typeof o.to=="string"?o.to:o.to&&typeof o.to=="object"&&o.to.path&&o.to.path,o.replace?n.replace(o.to):n.push(o.to))};l0(()=>{t||s()});const s=()=>{if(window.__ROUTER_LINK_LOADED__){r.value=window.__ROUTER_LINK_COMPONENT__,u.value=!0;return}try{X(()=>Promise.resolve().then(()=>d2),void 0).then(l=>{l.RouterLink&&(window.__ROUTER_LINK_COMPONENT__=l.RouterLink,window.__ROUTER_LINK_LOADED__=!0,r.value=l.RouterLink,u.value=!0)}).catch(l=>{console.warn("SafeRouterLink: Failed to load RouterLink, using fallback link",l)})}catch(l){console.warn("SafeRouterLink: Error importing RouterLink",l)}};return Fe(()=>{!t&&!u.value&&s()}),(l,c)=>(x(),de(wu(r.value),Eo(i.value,{onClick:a}),{default:Be(()=>[_t(l.$slots,"default")]),_:3},16))}};function Bw(e){return e?e.trim().replaceAll(" ","-"):""}/*!
 * md5-es
 * https://github.com/logotype/es-crypto.git
 *
 * Copyright 2017 Victor Norgren
 * Released under the MIT license
 */const le=class le{hash(t){return le.hex(le.md51(t))}static md5cycle(t,n){let u=t[0],r=t[1],o=t[2],i=t[3];u=le.ff(u,r,o,i,n[0],7,-680876936),i=le.ff(i,u,r,o,n[1],12,-389564586),o=le.ff(o,i,u,r,n[2],17,606105819),r=le.ff(r,o,i,u,n[3],22,-1044525330),u=le.ff(u,r,o,i,n[4],7,-176418897),i=le.ff(i,u,r,o,n[5],12,1200080426),o=le.ff(o,i,u,r,n[6],17,-1473231341),r=le.ff(r,o,i,u,n[7],22,-45705983),u=le.ff(u,r,o,i,n[8],7,1770035416),i=le.ff(i,u,r,o,n[9],12,-1958414417),o=le.ff(o,i,u,r,n[10],17,-42063),r=le.ff(r,o,i,u,n[11],22,-1990404162),u=le.ff(u,r,o,i,n[12],7,1804603682),i=le.ff(i,u,r,o,n[13],12,-40341101),o=le.ff(o,i,u,r,n[14],17,-1502002290),r=le.ff(r,o,i,u,n[15],22,1236535329),u=le.gg(u,r,o,i,n[1],5,-165796510),i=le.gg(i,u,r,o,n[6],9,-1069501632),o=le.gg(o,i,u,r,n[11],14,643717713),r=le.gg(r,o,i,u,n[0],20,-373897302),u=le.gg(u,r,o,i,n[5],5,-701558691),i=le.gg(i,u,r,o,n[10],9,38016083),o=le.gg(o,i,u,r,n[15],14,-660478335),r=le.gg(r,o,i,u,n[4],20,-405537848),u=le.gg(u,r,o,i,n[9],5,568446438),i=le.gg(i,u,r,o,n[14],9,-1019803690),o=le.gg(o,i,u,r,n[3],14,-187363961),r=le.gg(r,o,i,u,n[8],20,1163531501),u=le.gg(u,r,o,i,n[13],5,-1444681467),i=le.gg(i,u,r,o,n[2],9,-51403784),o=le.gg(o,i,u,r,n[7],14,1735328473),r=le.gg(r,o,i,u,n[12],20,-1926607734),u=le.hh(u,r,o,i,n[5],4,-378558),i=le.hh(i,u,r,o,n[8],11,-2022574463),o=le.hh(o,i,u,r,n[11],16,1839030562),r=le.hh(r,o,i,u,n[14],23,-35309556),u=le.hh(u,r,o,i,n[1],4,-1530992060),i=le.hh(i,u,r,o,n[4],11,1272893353),o=le.hh(o,i,u,r,n[7],16,-155497632),r=le.hh(r,o,i,u,n[10],23,-1094730640),u=le.hh(u,r,o,i,n[13],4,681279174),i=le.hh(i,u,r,o,n[0],11,-358537222),o=le.hh(o,i,u,r,n[3],16,-722521979),r=le.hh(r,o,i,u,n[6],23,76029189),u=le.hh(u,r,o,i,n[9],4,-640364487),i=le.hh(i,u,r,o,n[12],11,-421815835),o=le.hh(o,i,u,r,n[15],16,530742520),r=le.hh(r,o,i,u,n[2],23,-995338651),u=le.ii(u,r,o,i,n[0],6,-198630844),i=le.ii(i,u,r,o,n[7],10,1126891415),o=le.ii(o,i,u,r,n[14],15,-1416354905),r=le.ii(r,o,i,u,n[5],21,-57434055),u=le.ii(u,r,o,i,n[12],6,1700485571),i=le.ii(i,u,r,o,n[3],10,-1894986606),o=le.ii(o,i,u,r,n[10],15,-1051523),r=le.ii(r,o,i,u,n[1],21,-2054922799),u=le.ii(u,r,o,i,n[8],6,1873313359),i=le.ii(i,u,r,o,n[15],10,-30611744),o=le.ii(o,i,u,r,n[6],15,-1560198380),r=le.ii(r,o,i,u,n[13],21,1309151649),u=le.ii(u,r,o,i,n[4],6,-145523070),i=le.ii(i,u,r,o,n[11],10,-1120210379),o=le.ii(o,i,u,r,n[2],15,718787259),r=le.ii(r,o,i,u,n[9],21,-343485551),t[0]=u+t[0]&4294967295,t[1]=r+t[1]&4294967295,t[2]=o+t[2]&4294967295,t[3]=i+t[3]&4294967295}static cmn(t,n,u,r,o,i){return n=(n+t&4294967295)+(r+i&4294967295)&4294967295,(n<<o|n>>>32-o)+u&4294967295}static ff(t,n,u,r,o,i,a){return le.cmn(n&u|~n&r,t,n,o,i,a)}static gg(t,n,u,r,o,i,a){return le.cmn(n&r|u&~r,t,n,o,i,a)}static hh(t,n,u,r,o,i,a){return le.cmn(n^u^r,t,n,o,i,a)}static ii(t,n,u,r,o,i,a){return le.cmn(u^(n|~r),t,n,o,i,a)}static md51(t){const n=t.length,u=[1732584193,-271733879,-1732584194,271733878],r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];let o=0,i=64;for(i;i<=n;i+=64)le.md5cycle(u,le.md5blk(t.substring(i-64,i)));for(t=t.substring(i-64),i=0,o=t.length,i;i<o;i++)r[i>>2]|=t.charCodeAt(i)<<(i%4<<3);if(r[i>>2]|=128<<(i%4<<3),i>55)for(le.md5cycle(u,r),i=0;i<16;i++)r[i]=0;return r[14]=n*8,le.md5cycle(u,r),u}static md5blk(t){const n=[];let u=0;for(u;u<64;u+=4)n[u>>2]=t.charCodeAt(u)+(t.charCodeAt(u+1)<<8)+(t.charCodeAt(u+2)<<16)+(t.charCodeAt(u+3)<<24);return n}static rhex(t){let n="";return n+=le.hexArray[t>>4&15]+le.hexArray[t>>0&15],n+=le.hexArray[t>>12&15]+le.hexArray[t>>8&15],n+=le.hexArray[t>>20&15]+le.hexArray[t>>16&15],n+=le.hexArray[t>>28&15]+le.hexArray[t>>24&15],n}static hex(t){const n=t.length;let u=0;for(u;u<n;u++)t[u]=le.rhex(t[u]);return t.join("")}};Nr(le,"hexArray",["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]);let Aa=le;const Bo=new Aa().hash,Sa=(e="")=>{let t="";const n=/[\u4e00-\u9fa5]/;return t=e.split("").reduce((u,r,o)=>{if(n.test(r)){const i=Nw(r,jw);return u+=i||""}return u+=r},""),t},Nw=(e,t)=>{for(const n in t)if(t.hasOwnProperty(n)&&t[n].indexOf(e)!==-1)return n;return""},jw={a:"啊阿锕",ai:"埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭",an:"鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯",ang:"肮昂盎",ao:"凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖",ba:"芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃",bai:"白柏百摆佰败拜稗薜掰鞴",ban:"斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨",bang:"邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃",bao:"苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅",bo:"剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛",bei:"杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾",ben:"奔苯本笨畚坌锛",beng:"崩绷甭泵蹦迸唪嘣甏",bi:"逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀",bian:"鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊",biao:"标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔",bie:"鳖憋别瘪蹩鳘",bin:"彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓",bing:"兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹",bu:"捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭",ca:"擦嚓礤",cai:"猜裁材才财睬踩采彩菜蔡",can:"餐参蚕残惭惨灿骖璨粲黪",cang:"苍舱仓沧藏伧",cao:"操糙槽曹草艹嘈漕螬艚",ce:"厕策侧册测刂帻恻",ceng:"层蹭噌",cha:"插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩",chai:"拆柴豺侪茈瘥虿龇",chan:"搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔",chang:"昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳",chao:"超抄钞朝嘲潮巢吵炒怊绉晁耖",che:"车扯撤掣彻澈坼屮砗",chen:"郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀",cheng:"撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲",chi:"吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑",chong:"充冲虫崇宠茺忡憧铳艟",chou:"抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋",chu:"臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜",chuan:"揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡",chuang:"疮窗幢床闯创怆",chui:"吹炊捶锤垂陲棰槌",chun:"春椿醇唇淳纯蠢促莼沌肫朐鹑蝽",chuo:"戳绰蔟辶辍镞踔龊",ci:"疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑",cong:"聪葱囱匆从丛偬苁淙骢琮璁枞",cu:"凑粗醋簇猝殂蹙",cuan:"蹿篡窜汆撺昕爨",cui:"摧崔催脆瘁粹淬翠萃悴璀榱隹",cun:"村存寸磋忖皴",cuo:"撮搓措挫错厝脞锉矬痤鹾蹉躜",da:"搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑",dai:"呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛",dan:"耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪",dang:"当挡党荡档谠凼菪宕砀铛裆",dao:"刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛",de:"德得的锝",deng:"蹬灯登等瞪凳邓噔嶝戥磴镫簦",di:"堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶",dian:"颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮",diao:"碉叼雕凋刁掉吊钓调轺铞蜩粜貂",die:"跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎",ding:"丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊",dong:"东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫",dou:"兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡",du:"都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩",duan:"端短锻段断缎彖椴煅簖",dui:"堆兑队对怼憝碓",dun:"墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸",duo:"掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱",e:"蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄",en:"恩蒽摁唔嗯",er:"而儿耳尔饵洱二贰迩珥铒鸸鲕",fa:"发罚筏伐乏阀法珐垡砝",fan:"藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯",fang:"坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂",fei:"菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱",fen:"芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢",feng:"丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜",fu:"佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆",ga:"噶嘎蛤尬呷尕尜旮钆",gai:"该改概钙盖溉丐陔垓戤赅胲",gan:"干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐",gang:"冈刚钢缸肛纲岗港戆罡颃筻",gong:"杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥",gao:"篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆",ge:"哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂",gei:"给",gen:"根跟亘茛哏艮",geng:"耕更庚羹埂耿梗哽赓鲠",gou:"钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲",gu:"辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘",gua:"刮瓜剐寡挂褂卦诖呱栝鸹",guai:"乖拐怪哙",guan:"棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏",guang:"光广逛犷桄胱疒",gui:"瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜",gun:"辊滚棍丨衮绲磙鲧",guo:"锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈",ha:"哈",hai:"骸孩海氦亥害骇咴嗨颏醢",han:"酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾",hen:"夯痕很狠恨",hang:"杭航沆绗珩桁",hao:"壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝",he:"呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮",hei:"嘿黑",heng:"哼亨横衡恒訇蘅",hong:"轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓",hou:"喉侯猴吼厚候后堠後逅瘊篌糇鲎骺",hu:"呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛",hua:"花哗华猾滑画划化话劐浍骅桦铧稞",huai:"槐徊怀淮坏还踝",huan:"欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟",huang:"荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇",hui:"灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾",hun:"荤昏婚魂浑混诨馄阍溷缗",huo:"豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖",ji:"击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂",jia:"嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏",jian:"歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯",jiang:"僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇",jiao:"蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛",jie:"窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫",jin:"巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜",jing:"劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌",jiong:"炯窘冂迥扃",jiu:"揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏",ju:"鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫",juan:"捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽",jue:"撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖",jun:"均菌钧军君峻俊竣浚郡骏捃狻皲筠麇",ka:"喀咖卡佧咔胩",ke:"咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁",kai:"开揩楷凯慨剀垲蒈忾恺铠锎",kan:"刊堪勘坎砍看侃凵莰莶戡龛瞰",kang:"康慷糠扛抗亢炕坑伉闶钪",kao:"考拷烤靠尻栲犒铐",ken:"肯啃垦恳垠裉颀",keng:"吭忐铿",kong:"空恐孔控倥崆箜",kou:"抠口扣寇芤蔻叩眍筘",ku:"枯哭窟苦酷库裤刳堀喾绔骷",kua:"夸垮挎跨胯侉",kuai:"块筷侩快蒯郐蒉狯脍",kuan:"宽款髋",kuang:"匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶",kui:"亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬",kun:"坤昆捆困悃阃琨锟醌鲲髡",kuo:"括扩廓阔蛞",la:"垃拉喇蜡腊辣啦剌摺邋旯砬瘌",lai:"莱来赖崃徕涞濑赉睐铼癞籁",lan:"蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴",lang:"琅榔狼廊郎朗浪莨蒗啷阆锒稂螂",lao:"捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪",le:"勒乐肋仂叻嘞泐鳓",lei:"雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹",ling:"棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮",leng:"楞愣",li:"厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧",lian:"俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢",liang:"粮凉梁粱良两辆量晾亮谅墚椋踉靓魉",liao:"撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢",lie:"列裂烈劣猎冽埒洌趔躐鬣",lin:"琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟",liu:"溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏",long:"龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃",lou:"楼娄搂篓漏陋喽嵝镂瘘耧蝼髅",lu:"芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈",lv:"驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛",luan:"峦孪滦卵乱栾鸾銮",lue:"掠略锊",lun:"轮伦仑沦纶论囵",luo:"萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒",ma:"妈麻玛码蚂马骂嘛吗唛犸嬷杩麽",mai:"埋买麦卖迈脉劢荬咪霾",man:"瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔",mang:"芒茫盲忙莽邙漭朦硭蟒",meng:"氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾",miao:"猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱",mao:"茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦",me:"么",mei:"玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅",men:"门闷们扪玟焖懑钔",mi:"眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋",mian:"棉眠绵冕免勉娩缅面沔湎腼眄",mie:"蔑灭咩蠛篾",min:"民抿皿敏悯闽苠岷闵泯珉",ming:"明螟鸣铭名命冥茗溟暝瞑酩",miu:"谬",mo:"摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘",mou:"谋牟某厶哞婺眸鍪",mu:"拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼",na:"拿哪呐钠那娜纳内捺肭镎衲箬",nai:"氖乃奶耐奈鼐艿萘柰",nan:"南男难囊喃囡楠腩蝻赧",nao:"挠脑恼闹孬垴猱瑙硇铙蛲",ne:"淖呢讷",nei:"馁",nen:"嫩能枘恁",ni:"妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵",nian:"蔫拈年碾撵捻念廿辇黏鲇鲶",niang:"娘酿",niao:"鸟尿茑嬲脲袅",nie:"捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑",nin:"您柠",ning:"狞凝宁拧泞佞蓥咛甯聍",niu:"牛扭钮纽狃忸妞蚴",nong:"脓浓农侬",nu:"奴努怒呶帑弩胬孥驽",nv:"女恧钕衄",nuan:"暖",nuenue:"虐",nue:"疟谑",nuo:"挪懦糯诺傩搦喏锘",ou:"哦欧鸥殴藕呕偶沤怄瓯耦",pa:"啪趴爬帕怕琶葩筢",pai:"拍排牌徘湃派俳蒎",pan:"攀潘盘磐盼畔判叛爿泮袢襻蟠蹒",pang:"乓庞旁耪胖滂逄",pao:"抛咆刨炮袍跑泡匏狍庖脬疱",pei:"呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈",pen:"喷盆湓",peng:"砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛",pi:"砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔",pian:"篇偏片骗谝骈犏胼褊翩蹁",piao:"飘漂瓢票剽嘌嫖缥殍瞟螵",pie:"撇瞥丿苤氕",pin:"拼频贫品聘拚姘嫔榀牝颦",ping:"乒坪苹萍平凭瓶评屏俜娉枰鲆",po:"坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸",pou:"剖裒踣",pu:"扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼",qi:"期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒",qia:"掐恰洽葜",qian:"牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝",qiang:"枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄",qiao:"橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒",qie:"切茄且怯窃郄唼惬妾挈锲箧",qin:"钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾",qing:"青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥",qiong:"琼穷邛茕穹筇銎",qiu:"秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽",qu:"趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢",quan:"圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈",que:"缺炔瘸却鹊榷确雀阙悫",qun:"裙群逡",ran:"然燃冉染苒髯",rang:"瓤壤攘嚷让禳穰",rao:"饶扰绕荛娆桡",ruo:"惹若弱",re:"热偌",ren:"壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽",reng:"扔仍",ri:"日",rong:"戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾",rou:"揉柔肉糅蹂鞣",ru:"茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥",ruan:"软阮朊",rui:"蕊瑞锐芮蕤睿蚋",run:"闰润",sa:"撒洒萨卅仨挲飒",sai:"腮鳃塞赛噻",san:"三叁伞散彡馓氵毵糁霰",sang:"桑嗓丧搡磉颡",sao:"搔骚扫嫂埽臊瘙鳋",se:"瑟色涩啬铩铯穑",sen:"森",seng:"僧",sha:"莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨",shai:"筛晒酾",shan:"珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝",shang:"墒伤商赏晌上尚裳垧绱殇熵觞",shao:"梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄",she:"奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝",shen:"砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃",sheng:"声生甥牲升绳省盛剩胜圣丞渑媵眚笙",shi:"师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺",shou:"收手首守寿授售受瘦兽扌狩绶艏",shu:"蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬",shua:"刷耍唰涮",shuai:"摔衰甩帅蟀",shuan:"栓拴闩",shuang:"霜双爽孀",shui:"谁水睡税",shun:"吮瞬顺舜恂",shuo:"说硕朔烁蒴搠嗍濯妁槊铄",si:"斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥",song:"松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦",sou:"搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋",su:"苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣",suan:"酸蒜算",sui:"虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢",sun:"孙损笋荪狲飧榫跣隼",suo:"梭唆缩琐索锁所唢嗦娑桫睃羧",ta:"塌他它她塔獭挞蹋踏闼溻遢榻沓",tai:"胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐",tan:"坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃",tang:"汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣",thang:"倘躺淌",theng:"趟烫",tao:"掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕",te:"特",teng:"藤腾疼誊滕",ti:"梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍",tian:"天添填田甜恬舔腆掭忝阗殄畋钿蚺",tiao:"条迢眺跳佻祧铫窕龆鲦",tie:"贴铁帖萜餮",ting:"厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆",tong:"通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼",tou:"偷投头透亠",tu:"凸秃突图徒途涂屠土吐兔堍荼菟钍酴",tuan:"湍团疃",tui:"推颓腿蜕褪退忒煺",tun:"吞屯臀饨暾豚窀",tuo:"拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍",wa:"挖哇蛙洼娃瓦袜佤娲腽",wai:"歪外",wan:"豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢",wang:"汪王亡枉网往旺望忘妄罔尢惘辋魍",wei:"威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔",wen:"瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯",weng:"嗡翁瓮蓊蕹",wo:"挝蜗涡窝我斡卧握沃莴幄渥杌肟龌",wu:"巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯",xi:"昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷",xia:"瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠",xian:"锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹",xiang:"相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨",xiao:"萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈",xie:"楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞",xin:"薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫",xing:"星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎",xiong:"兄凶胸匈汹雄熊芎",xiu:"休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹",xu:"墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑",xuan:"轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃",xue:"靴薛学穴雪血噱泶鳕",xun:"勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟",ya:"压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖",yan:"焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹",yang:"殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅",yao:"邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐",ye:"椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘",yi:"一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟",yin:"茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈",ying:"英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂",yo:"哟唷",yong:"拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔",you:"幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬",yu:"迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉",yuan:"鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋",yue:"曰约越跃钥岳粤月悦阅龠樾刖钺",yun:"耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲",za:"匝砸杂拶咂",zai:"栽哉灾宰载再在咱崽甾",zan:"攒暂赞瓒昝簪糌趱錾",zang:"赃脏葬奘戕臧",zao:"遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫",ze:"责择则泽仄赜啧迮昃笮箦舴",zei:"贼",zen:"怎谮",zeng:"增憎曾赠缯甑罾锃",zha:"扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄",zhai:"摘斋宅窄债寨砦",zhan:"瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃",zhang:"樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑",zhao:"招昭找沼赵照罩兆肇召爪诏棹钊笊",zhe:"遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭",zhen:"珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩",zheng:"蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝",zhi:"芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯",zhong:"中盅忠钟衷终种肿重仲众冢锺螽舂舯踵",zhou:"舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷",zhu:"珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈",zhua:"抓",zhuai:"拽",zhuan:"专砖转撰赚篆抟啭颛",zhuang:"桩庄装妆撞壮状丬",zhui:"椎锥追赘坠缀萑骓缒",zhun:"谆准",zhuo:"捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫",zi:"兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭",zong:"鬃棕踪宗综总纵腙粽",zou:"邹走奏揍鄹鲰",zu:"租足卒族祖诅阻组俎菹啐徂驵蹴",zuan:"钻纂攥缵",zui:"嘴醉最罪",zun:"尊遵撙樽鳟",zuo:"昨左佐柞做作坐座阝阼胙祚酢",cou:"薮楱辏腠",nang:"攮哝囔馕曩",o:"喔",dia:"嗲",chuai:"嘬膪踹",cen:"岑涔",diu:"铥",nou:"耨",fou:"缶",bia:"髟"};function Wp(e=""){return e.replace("T"," ").replace("Z","").split(".")[0].replace(/(\s00:00:00)$/,"")}const Hw={key:0,class:"page-info"},Kp=fe({__name:"PageInfo",props:{pageData:{type:Object,default:()=>({})},currentCategory:{type:String,default:""},currentTag:{type:String,default:""},hideViews:{type:Boolean,default:!1}},setup(e){function t(y){return Sa(Bw(y))}const n=e,{pageData:u,hideViews:r}=gt(n),o=Ye(),{solution:i,options:a}=Fu(),s=B(()=>{var y,C;return((C=(y=u==null?void 0:u.value)==null?void 0:y.frontmatter)==null?void 0:C.author)||o.value.author||""}),l=B(()=>{var y;return((y=u==null?void 0:u.value)==null?void 0:y.path)||"/"}),c=B(()=>{var C,b;const y=(b=(C=u==null?void 0:u.value)==null?void 0:C.frontmatter)==null?void 0:b.date;return y?Wp(y):""}),d=B(()=>{var y,C;return(((C=(y=u==null?void 0:u.value)==null?void 0:y.frontmatter)==null?void 0:C.categories)||[]).map(b=>({label:b,pathValue:t(b)}))}),f=B(()=>{var y,C;return(((C=(y=u==null?void 0:u.value)==null?void 0:y.frontmatter)==null?void 0:C.tags)||[]).map(b=>({label:b,pathValue:t(b)}))}),p=B(()=>!!s.value||!!c.value||!!(d.value&&d.value.length>0)||!!(f.value&&f.value.length>0)),g=B(()=>i.value==="valine"&&a.value.visitor!=!1&&!r.value),h=B(()=>i.value==="waline"&&a.value.pageview!=!1&&!r.value);return(y,C)=>{const b=ze("Xicons"),m=ze("router-link"),v=ze("ValineViews"),T=ze("WalineViews");return p.value?(x(),S("div",Hw,[s.value?(x(),de(b,{key:0,icon:E(i_),text:s.value},null,8,["icon","text"])):V("",!0),c.value?(x(),de(b,{key:1,icon:E(Bp),text:c.value},null,8,["icon","text"])):V("",!0),d.value.length>0?(x(),de(b,{key:2,icon:E(ii)},{default:Be(()=>[(x(!0),S(me,null,Re(d.value,({label:P,pathValue:A})=>(x(),de(m,{to:`/categories/${A}/1.html`,key:A},{default:Be(()=>[Qe(oe(P),1)]),_:2},1032,["to"]))),128))]),_:1},8,["icon"])):V("",!0),f.value.length>0?(x(),de(b,{key:3,icon:E(bs)},{default:Be(()=>[(x(!0),S(me,null,Re(f.value,({label:P,pathValue:A})=>(x(),de(m,{to:`/tags/${A}/1.html`,key:A},{default:Be(()=>[Qe(oe(P),1)]),_:2},1032,["to"]))),128))]),_:1},8,["icon"])):V("",!0),g.value||h.value?(x(),de(b,{key:4,icon:E(zp)},{default:Be(()=>[g.value?(x(),de(v,{key:0,idVal:l.value},null,8,["idVal"])):V("",!0),h.value?(x(),de(T,{key:1,path:l.value},null,8,["path"])):V("",!0)]),_:1},8,["icon"])):V("",!0)])):V("",!0)}}}),Vw={class:"title"},Uw=fe({__name:"PostItem",props:{data:{type:Object,default:()=>({})}},setup(e){const t=e,{data:n}=gt(t),{solution:u}=Fu();return(r,o)=>{var s;const i=ze("Xicons"),a=ze("MagicCard");return X1([E(n).path,E(n).title,(s=E(n).frontmatter)==null?void 0:s.sticky,E(u)],()=>re(a,{class:"post-item-container"},{default:Be(()=>[$("div",Vw,[re(Br,{to:E(n).path},{default:Be(()=>{var l;return[(l=E(n).frontmatter)!=null&&l.sticky?(x(),de(i,{key:0,icon:E(c_)},null,8,["icon"])):V("",!0),$("span",null,oe(E(n).title),1)]}),_:1},8,["to"])]),re(Kp,{"page-data":E(n),"hide-views":E(u)==="valine"},null,8,["page-data","hide-views"])]),_:1}),o,0)}}}),Gw={class:"post-list-container"},xs=fe({__name:"index",props:{data:{type:Array,default:()=>[]}},setup(e){const t=e,{data:n}=gt(t);return(u,r)=>(x(),S("div",Gw,[(x(!0),S(me,null,Re(E(n),(o,i)=>(x(),de(Uw,{key:i,data:o},null,8,["data"]))),128))]))}}),qw={key:0,class:"pagation-container"},Ww={class:"ellipsis",key:"ellipsis-front"},Kw=["onClick"],Zw={class:"ellipsis",key:"ellipsis-back"},Qw={class:"jumpinput",key:"input"},_s=fe({__name:"Pagation",props:{currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0},totalPage:{type:Number,default:0}},emits:["change"],setup(e,{emit:t}){const n=e,u=t,r=Q(null),o=B(()=>Math.ceil(n.total/n.pageSize)),i=B(()=>s.value&&!l.value.includes(1)),a=B(()=>s.value&&!l.value.includes(o.value)),s=B(()=>o.value>7),l=B(()=>{const p=[];let g=1,h=o.value;for(o.value>=7&&(n.currentPage>5&&n.currentPage<o.value-4?(g=Number(n.currentPage)-3,h=Number(n.currentPage)+3):n.currentPage<=5?(g=1,h=7):(h=o.value,g=o.value-6));g<=h;)p.push(g),g++;return p}),c=p=>{const g=parseInt(p);g>o.value?u("change",o.value):g<=0?u("change",1):u("change",g),r.value=null},d=()=>{let p=n.currentPage;p>1&&u("change",--p)},f=()=>{let p=n.currentPage;p<o.value&&u("change",++p)};return(p,g)=>{const h=ze("Xicons");return o.value>1?(x(),S("div",qw,[e.currentPage>1?(x(),de(h,{class:"jump",icon:E(U_),iconSize:16,unselectable:"on",key:"left",onClick:d},null,8,["icon"])):V("",!0),i.value?(x(),S("span",{class:"jump",key:"page-one",onClick:g[0]||(g[0]=y=>c(1))},"1")):V("",!0),i.value&&l.value[0]>2?(x(),S("span",Ww,"...")):V("",!0),(x(!0),S(me,null,Re(l.value,y=>(x(),S("span",{class:ke(["jump",{active:e.currentPage==y}]),key:`page-${y}`,onClick:C=>c(y)},oe(y),11,Kw))),128)),a.value&&o.value-l.value.at(-1)>1?(x(),S("span",Zw,"...")):V("",!0),a.value?(x(),S("span",{class:"jump",key:"page-lastest",onClick:g[1]||(g[1]=y=>c(o.value))},oe(o.value),1)):V("",!0),e.currentPage<o.value?(x(),de(h,{class:"jump",key:"right",icon:E(K_),iconSize:16,onClick:f},null,8,["icon"])):V("",!0),$("span",Qw,[kt($("input",{type:"text","onUpdate:modelValue":g[2]||(g[2]=y=>r.value=y)},null,512),[[On,r.value]])]),$("span",{class:"jump go",key:"go",onClick:g[3]||(g[3]=y=>c(r.value))},"Go")])):V("",!0)}}}),Xw={class:"posts-container"},md=10,Yw=fe({__name:"Posts",setup(e){const{posts:t}=Bu(),n=Q(1),u=Q(0),r=B(()=>{const l=(n.value-1)*md,c=n.value*md;return(t||[]).slice(l,c)});let o=l=>{};const i=Je(),a=Lt();Dt(),Ye();const s=B(()=>i.query.page);return o=l=>{n.value=l;const c=Nt("/posts");a.push(l>1?`${c}/${l}.html`:`${c}.html`),setTimeout(()=>{if(u.value===0){const d=document.querySelector(".home-blog-content");d&&(u.value=d.getBoundingClientRect().top)}window.scrollTo({left:0,top:0,behavior:"smooth"})},100)},Fe(()=>{Pe(s,l=>{l&&(n.value=Number(l))})}),(l,c)=>(x(),S("section",Xw,[re(xs,{data:r.value},null,8,["data"]),re(_s,{currentPage:n.value,total:E(t).length,onChange:E(o)},null,8,["currentPage","total","onChange"])]))}}),Jw={class:"site-brand"},ek=["src","alt"],tk=fe({__name:"SiteBrand",props:{icon:{type:String,default:""},link:{type:String,default:""},title:{type:String,default:""}},setup(e){const t=e,{title:n,icon:u,link:r}=gt(t);return(o,i)=>(x(),S("div",Jw,[E(u)?(x(),S("img",{key:0,class:"logo",src:E(u),alt:E(n)},null,8,ek)):V("",!0),E(n)?(x(),de(Br,{key:1,to:E(r),class:ke(["site-name",{"can-hide":E(u)}])},{default:Be(()=>[Qe(oe(E(n)),1)]),_:1},8,["to","class"])):V("",!0)]))}}),nk=()=>{const e=Ye(),t=B(()=>e.value.repo||e.value.docsRepo||""),n=B(()=>t.value?Mp(t.value):null),u=B(()=>n.value==="GitHub"&&!$r(t.value)?`https://github.com/${t.value}`:t.value),r=B(()=>u.value?e.value.repoLabel?e.value.repoLabel:n.value===null?"Source":n.value:null);return B(()=>!u.value||!r.value?{text:"",link:""}:{text:r.value,link:u.value})};function uk(){const e=nk(),t=Ye();return{socialLinks:B(()=>{var o;const r=[...((o=t.value)==null?void 0:o.socialLinks)||[]];return e.value.text==="GitHub"&&r.unshift({icon:h_,link:e.value.link}),r}),jumpSocialLink:r=>{r&&window.open(r,"_blank")}}}function Zp(e){return tn(e)?gs(e):"children"in e&&Array.isArray(e.children)?{...e,children:e.children.map(Zp)}:e}const rk=()=>{const e=Ye();return B(()=>{var r,o,i,a;const n=e.value.autoAddCategoryToNavbar;let u=[...e.value.navbar||[]];if(n){const{categorySummary:s}=Bu(),l=[];if(Object.values(((r=s==null?void 0:s.categories)==null?void 0:r.items)||{}).length>0){const f={text:e.value.categoriesText||"Categories",children:Object.values(((o=s==null?void 0:s.categories)==null?void 0:o.items)||{}).map(p=>({text:p.label,link:`/categories/${Sa(p.categoryValue)}/1.html`}))};n!=null&&n.showIcon&&(f.icon=ii),l.push(f)}if(Object.values(((i=s==null?void 0:s.categories)==null?void 0:i.items)||{}).length>0){const f={text:e.value.tagsText||"Tags",children:Object.values(((a=s==null?void 0:s.tags)==null?void 0:a.items)||{}).map(p=>({text:p.label,link:`/tags/${Sa(p.categoryValue)}/1.html`}))};n!=null&&n.showIcon&&(f.icon=bs),l.push(f)}u.splice((n==null?void 0:n.location)||0,0,...l)}return u.map(s=>Zp(s))})},ok=()=>{const e=Je(),t=Dr(),n=Iw(),u=P2(),r=Dt(),o=ei();return Ye(),B(()=>{const a=Object.keys(t.value.locales||{});if(a.length<2)return null;const s=e==null?void 0:e.path,l=e==null?void 0:e.fullPath;return{icon:nw,text:"",children:a.map(d=>{var C,b;const f=((C=t.value.locales)==null?void 0:C[d])??{},p=((b=n.value.locales)==null?void 0:b[d])??{},g=`${f.lang}`,h=p.selectLanguageName??g;let y;if(g===o.value.lang)y=l;else{const m=s==null?void 0:s.replace(r.value,d);u.value.some(v=>v===m)?y=m:y=p.home??d}return{text:h,link:y,language:!0}})}})},ik=["href","target","rel","aria-label"],kr=fe({__name:"Link",props:{item:{type:Object,required:!0}},setup(e){const t=Je(),n=Dr(),u=Dt(),r=Ye(),o=e,{item:i}=gt(o),a=B(()=>$r(i.value.link)),s=B(()=>!a.value&&K0(i.value.link||"")),l=B(()=>{if(!s.value){if(i.value.target)return i.value.target;if(a.value)return"_blank"}}),c=B(()=>l.value==="_blank"),d=B(()=>!a.value&&!s.value&&!c.value),f=B(()=>{if(!s.value){if(i.value.rel)return i.value.rel;if(c.value)return"noopener noreferrer"}}),p=B(()=>i.value.ariaLabel||i.value.text),g=B(()=>{const y=Object.keys(n.value.locales||{});return y.length?!y.some(C=>C===i.value.link):i.value.link!==r.value.home||u.value}),h=B(()=>{if(!t||typeof t.path>"u"||!d.value||!g.value||!r.value||!i.value||typeof i.value.link!="string"||!i.value.link)return!1;const y=r.value.home||"/",C=Nt(y),b=i.value.link;return t.path===C&&b===C?!0:t.path.startsWith(b)&&!b.endsWith("/")});return(y,C)=>{const b=ze("Xicons"),m=ze("ExternalLinkIcon");return d.value?(x(),de(Br,Eo({key:0,class:["link",{"router-link-active":h.value}],to:E(i).link,"aria-label":p.value},y.$attrs,{key:`${E(i).link}-router`}),{default:Be(()=>[_t(y.$slots,"before"),re(b,{icon:E(i).icon,text:E(i).text},null,8,["icon","text"]),_t(y.$slots,"after")]),_:3},16,["class","to","aria-label"])):(x(),S("a",Eo({key:1,class:"link",href:E(i).link,target:l.value,rel:f.value,"aria-label":p.value},y.$attrs,{key:`${E(i).link}-a`}),[_t(y.$slots,"before"),re(b,{icon:E(i).icon,text:E(i).text},null,8,["icon","text"]),c.value?(x(),de(m,{key:0})):V("",!0),_t(y.$slots,"after")],16,ik))}}}),ak=fe({__name:"DropdownTransition",setup(e){const t=u=>{u.style.height=u.scrollHeight+"px"},n=u=>{u.style.height=""};return(u,r)=>(x(),de(dr,{name:"bounce",mode:"out-in",onEnter:t,onAfterEnter:n,onBeforeLeave:t},{default:Be(()=>[_t(u.$slots,"default")]),_:3}))}}),sk=["aria-label"],lk={key:0,class:"arrow down"},ck=["aria-label"],dk={class:"title"},fk={class:"dropdown-link__subtitle"},pk={class:"dropdown-link__subcontainer"},gd=fe({__name:"index",props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:n}=gt(t),u=B(()=>n.value.ariaLabel||n.value.text),r=Q(!1),o=Je();o&&typeof o.path<"u"&&Pe(()=>o.path,()=>{r.value=!1});const i=Q(!1),a=()=>{f.value&&(f.value=!1),r.value=!0,i.value=!0},s=()=>{i.value=!1,setTimeout(()=>{i.value||l.value?r.value=!0:r.value=!1},200)},l=Q(!1),c=()=>{f.value||(l.value=!0)},d=()=>{f.value||(l.value=!1,setTimeout(()=>{i.value||l.value?r.value=!0:r.value=!1},200))},f=Q(!0),p=()=>{r.value=!r.value,f.value||(f.value=!0)},g=B(()=>{function h(y){var C;if(y.children)return y.children.some(b=>h(b));if(y.link&&!y.language)return((C=o==null?void 0:o.path)==null?void 0:C.indexOf(y.link))>-1}return h(n.value)});return(h,y)=>{const C=ze("Xicons");return x(),S("div",{class:ke(["dropdown-link",{open:r.value}])},[$("button",{class:ke(["dropdown-link__title",g.value?"dropdown-link__title--active":""]),type:"button","aria-label":u.value,onMouseenter:a,onMouseleave:s},[re(C,{class:"title",icon:E(n).icon,text:E(n).text},null,8,["icon","text"]),E(n).text||E(n).icon?(x(),S("span",lk)):V("",!0)],42,sk),$("button",{class:"dropdown-link--mobile__title",type:"button","aria-label":u.value,onClick:p},[$("span",dk,[re(C,{icon:E(n).icon,text:E(n).text},null,8,["icon","text"])]),E(n).text?(x(),S("span",{key:0,class:ke(["arrow",r.value?"down":"right"])},null,2)):V("",!0)],8,ck),re(ak,null,{default:Be(()=>[kt($("ul",{class:"dropdown-link__container",onMouseenter:c,onMouseleave:d},[(x(!0),S(me,null,Re(E(n).children,(b,m)=>(x(),S("li",{key:b.link||m,class:"dropdown-link__item"},[b.children?(x(),S(me,{key:0},[$("h5",fk,[re(C,{icon:b.icon,text:b.text},null,8,["icon","text"])]),$("ul",pk,[(x(!0),S(me,null,Re(b.children,v=>(x(),S("li",{key:v.link,class:"dropdown-link__subitem"},[re(kr,{item:v},null,8,["item"])]))),128))])],64)):(x(),de(kr,{key:1,item:b},null,8,["item"]))]))),128))],544),[[Eu,r.value]])]),_:1})],2)}}});var Ta=(e=>(e[e.auto=0]="auto",e[e.dark=1]="dark",e[e.light=2]="light",e))(Ta||{});const ta="vuepress-reco-color-scheme",Qp=fe({__name:"ToggleDarkModeButton",setup(e){const t={light:jx,dark:n_,auto:iw},n=Ye(),u=Q(n.value.colorMode||"auto"),r=B(()=>t[u.value]);let o=()=>{const i=Ta[u.value],a=i===2?0:i+1;u.value=Ta[a]};return Fe(()=>{const i=localStorage[ta];i&&(u.value=i);const a=document.documentElement.classList;function s(d){a.toggle("dark",d)}function l(d){d==="auto"?(s(c.matches),localStorage.removeItem(ta)):(s(d==="dark"),localStorage[ta]=d)}const c=window.matchMedia("(prefers-color-scheme: dark)");c.onchange=d=>{u.value==="auto"&&s(d.matches)},Pe(u,l),l(u.value)}),(i,a)=>{const s=ze("Xicons");return x(),de(s,{icon:r.value,"icon-size":"20",class:"btn-toggle-dark-mode",onClick:a[0]||(a[0]=l=>E(o)())},null,8,["icon"])}}}),hk={key:0,class:"navbar-links"},mk={key:2,class:"social-links navbar-links__item"},gk=["onClick"],Xp=fe({__name:"index",setup(e){const{isMobile:t}=Fp(),n=rk(),u=Ye(),r=ok(),{socialLinks:o,jumpSocialLink:i}=uk(),a=B(()=>!t.value&&(u.colorModeSwitch??!0));return(s,l)=>E(n).length||E(o).length||E(r)||a.value?(x(),S("nav",hk,[(x(!0),S(me,null,Re(E(n),(c,d)=>(x(),S("div",{key:d,class:"navbar-links__item"},["children"in c&&c.children?(x(),de(gd,{key:0,item:c},null,8,["item"])):(x(),de(kr,{key:1,item:c},null,8,["item"]))]))),128)),E(r)?(x(),de(gd,{key:0,class:ke({"navbar-links__item":!0,language:!E(t)}),item:E(r)},null,8,["class","item"])):V("",!0),a.value?(x(),de(Qp,{key:1,class:"btn--dark-mode navbar-links__item"})):V("",!0),E(o).length?(x(),S("ul",mk,[(x(!0),S(me,null,Re(E(o),(c,d)=>(x(),S("li",{class:"social-item",key:d,onClick:f=>E(i)(c.link)},[(x(),de(wu(c.icon),{style:{width:"25px",height:"25px"}}))],8,gk))),128))])):V("",!0)])):V("",!0)}});function bk(){const e=Dt(),t=ei(),n=Ye(),u=B(()=>t.value.title),r=B(()=>n.value.home||e.value),o=B(()=>n.value.logo?Nt(n.value.logo):"");return{customTitle:u,customLink:r,customIcon:o}}const vk={class:"navbar-inner"},bd=fe({__name:"index",emits:["toggle-menus"],setup(e,{emit:t}){const{customTitle:n,customLink:u,customIcon:r}=bk(),o=Q(0),i=B(()=>o.value?{maxWidth:o.value+"px"}:{}),a=t,s=c=>{a("toggle-menus",c)},{scrollY:l}=qp();return(c,d)=>{const f=ze("NavbarSearch");return x(),S("header",{ref:"navbar",class:ke({"navbar-container":!0,"has-border":E(l)>20})},[$("div",vk,[re(tk,{class:"nav-item",icon:E(r),title:E(n),link:E(u)},null,8,["icon","title","link"]),$("div",{class:"nav-item navbar-links-wrapper",style:ct(i.value)},[$("div",null,[re(f)]),re(Xp),re(zr,{class:"btn-toggle-menus",icon:E(cw),iconSize:20,onClick:s},null,8,["icon"])],4)])],2)}}}),vd=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),yk=(e,t)=>{if(t===void 0)return!1;if(e.hash===t)return!0;const n=vd(e.path),u=vd(t);return n===u},Yp=(e,t)=>t.children?t.children.some(n=>Yp(e,n)):!!yk(e,t.link),xk=(e,t,n)=>{if(n!==1)return;t.collapsible=!t.collapsible;const u=e.target.closest(".series-heading"),r=u.querySelector(".arrow"),o=u.nextElementSibling;t.collapsible?(r.classList.remove("down"),r.classList.add("right"),o.style.display="none"):(r.classList.remove("right"),r.classList.add("down"),o.style.display="block")},yd=(e,t,n)=>e.link?Z(kr,{...n,item:e}):Z(t===1?"h5":"h6",{...n,onClick:r=>xk(r,e,t)},[Z(zr,{icon:t===1?ii:"",text:e.text,textSize:t===1?16:14}),t!==1?null:Z("span",{class:e.collapsible?"arrow right":"arrow down"})]),_k=(e,t)=>{var n;return(n=e.children)!=null&&n.length?Z("ul",{style:{display:e.collapsible?"none":"block"}},e.children.map(u=>Z("li",Z(li,{item:u,level:t})))):null},li=({item:e,level:t})=>{const n=Je(),u=t===1?Yp(n,e):!1;return e.children?[Z("section",{class:"series-group series-item"},[yd(e,t,{class:{"series-heading":!0,[`series-level-${t}`]:!0,active:u}}),_k(e,++t)])]:[yd(e,++t,{class:{"series-item":!0,active:u}})]};li.displayName="SeriesItem";li.props={item:{type:Object,required:!0},level:{type:Number,required:!0}};const wk={class:"series-container"},xd=fe({__name:"index",setup(e){const t=si();return(n,u)=>(x(),S("aside",wk,[(x(!0),S(me,null,Re(E(t),r=>(x(),de(E(li),{item:r,level:1,key:r.link||r.text},null,8,["item"]))),128))]))}}),kk={ref:"subnavbar",class:"sub-navbar-container"},_d=fe({__name:"SubNavbar",emits:["toggle-series"],setup(e,{emit:t}){const n=t,u=()=>{n("toggle-series")};return(r,o)=>(x(),S("header",kk,[$("span",{class:"nav-item"},[$("div",{class:"toggle-series-button","aria-expanded":"false",role:"button",tabindex:"0",onClick:u},o[0]||(o[0]=[$("span",null,null,-1),$("span",null,null,-1),$("span",null,null,-1)])),o[1]||(o[1]=Qe(" Series "))])],512))}});function Ck(){const e=ei(),t=Ye(),n=B(()=>t.value.logo),u=B(()=>e.value.title),r=B(()=>{const o=t.value.password;return o?Array.isArray(o)?o:[o]:[]});return{siteBrandLogo:n,siteBrandTitle:u,sitePassword:r}}function Ek(e,t){const n=Ye(),u=Q(""),r=Q(null),o=ut(__),i=Q(n.value.inputPasswordText||"Please enter the password");return Pe(u,s=>{s.length===6&&(e.value.includes(Bo(Bo(s)))?(o.value=O_,i.value=n.value.unlockSucessText||"Success, enjoy it!",setTimeout(()=>{t("pass")},600)):(u.value="",i.value=n.value.unlockFailuerText||"Failed, please enter again!"))}),{password:u,passwordRef:r,lockIcon:o,lockText:i,focus:()=>{r.value.focus()}}}const Ak="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcfjxsuzNbOC3gOCzcezbl/PWkvnpveKrTPXMmtmTRu/ljumwSdq1geSbP+a8ae+zSurBV/LjrO7Yb+bNlfrrrtmNP/PgdenEWurKhenFdt2rYt/EjPXnu+e9faFjNbWReNq8fdi1hZ1xTuOtVVxBUlIxSGFPX+jGXvHgmu/hn/Hfj96tYe7Yqea7XfXimPLghP334+Cwbvr32N3CiN/Bd+K5fui0Wt2fUeS2U+zOeuO1Y/bmiuPEiuG0bqyKduG5hfvOWaBuWk8sPa6DW++jROfFZfLkl86JV/nuyOzZfvjVY9qkYd20dJ9yXL+YWWxSWcmjbpyQdoyHee7ZfOGsVuTBau3WeOW7V92nUdCSRee3UcaEQuOwVufJk4deQfPOgIpsTt2fR6R/Vtyzd86keNqsab6SX8GYdPWlPPy/VZySeevMYufDeenMZtqkT9KRU/LNYP3aj8imfLCMbdQsG+m+Xem4UurDXtYgF+e2Weq+VRgWb+/KXui7WOWzUxESfO3BWQ8JatIWEduVQdcKCw8PcttQJ+GjSenIZNZfLhcHX9dKKNqXUOnBaN+fR8pEIuO4YdOEPOm0T+/GXNdBJNS6c96jUNIeEsZRJOhyNPbKaedoLeR2OelcJG9wehkaeIN9etQ1HvDOYqqkhdhzNNg6H/jCUv3VWNEIBRUeidl+OPG+UtmjW+GQP9x0OsdeLMsLCPfFXSMOXfAsEcEOEaqBUaWOZU0GRM+wax81jbOgboeFf8izeu6uWaSbfb2ve+OtV9RqMt1rNN2DQt6IN49aOOaiQ7slGmlgblBMb8ovF91YKMcfEF9ujex/M2FkfYeMjJKNfnl3d5wGHpJ7Xu2NQuKxTNBZLseoWb9oOfY7GcE7LWUZSGYEOPevRp+AXDVGinSAi4ZvW60TFUcmU7Cbe7ipdNBGJv7oapJsSV8nUa81NL9GI/R6LbORVbJQOCgueogKJ3ZjXuNCHK4HGn1oYDMfXLp7Pi8LVmsuUKM7LkFXknNiZHtdUdwjFSsuVN8AAAB1dFJOUwAE/hMaDRsI/gH+FPw6/L/+9GT+cS/+7vyP0M0kQbD5w1uI/uf5+v7sTHyU3FvVPLgXvyRJ/aPk1fyq66Vn2NEt/Nv85/7eh2FLzPfvsvX9+N7m8trP7+ntyafrm/OH+Jz59+3Pn3/Mq+qq+NHq5MF4+InD117Lt0kAAAU3SURBVDjLbdV3VJNnFAdgE8gkCQkJS9nInspQRGSIu+496qhard3tySAkIYuEbCBkAAFCwpCN7CkgKGUvBffee1S7z+kXUiL2cP9+zu97733Pe79582YXaFFIAMHFJdqFEBCyCDRv7kLAYGbmMegoN5fo6Gg3AjrG3AwGQ8wBYdaObsfj4pydDx06cuTo0bi4427rHGFzBEJ8ok66bHJ3dr5w4enThoZNm1xOEgIgcwQ6nIj3XHnB+epVobC7qqK5tdHTM/6Ew/8jQTAoOv72SgBWVw/marIkFQboHo+GghCfdmt9eOMWj3tPCzVqjk7B56uJk6qOca8t4T9BZ2eCINahG7d6eLg3ZOVyknU6saKEMzLZWeDl9XM4GgozzQkUEmS51cPTa8v5kSJiQgJRp1CoOUMDZ9MmRj08jjkBnzdBxxWbH/zm9W7kJVENQKKiSM2pH1p1ti3vgefWY6EOINMEQ7fla7WXGjS5yclEIJPDIRLPnMnNedRBo+VvC40BzZwwyHVbPpN5qSHXBHUA5GvaC2i8ie2uQZBpiVgUc8ry63wmzf13/q/JyQkJuqIiXUJCSUkRX9lJ4+VtD15uPX3vIAf0qUAjHDRAokLMF+uIABw0wvXBjiEGCHH98qtVD9uYzNubRzTJJamX023g8J4qtTo3p/kRjZff8eOGNVYQExwHzvhq8iXnTGZ1OndqqrKHSMyabG6l8do6MmL9fA3QzC0cg2nvKC3tu4e6lfkiNfVcYVlZVVVZTyz90j88bUE7Fut00GwabsRgmh+Wlva/g6+qzkxNFQoLC7u7e5A1lA9eTG2BEotysjdA88X+NpVS5Z0WWu3r6pwc8ePUx0KhWNydU3X1N1rpHSW4F+O/2NwAF3xmYyNV/t3CE/31IiuLLzZkisUazeXXteyWO2FgDNcE09Nvnb07zGRfrK+7NijMzDxXmJN1ra7+vYg9fJdUzLWJtJwFx+4C8H1dHf8yAM9Nw4si3vAYq5iLDDTC8MVfyGqy2wtamE0379cPDQ0MDOj4fMX1tzd52o727Oykz43NmAEwpSY7rLOltKnp7cX7938B6vr1589vNtHePFIa4DJj107HkNwuajZ4bJjGFolEtU03btz4o1YkYvNGJwQbSFQ4fP4ycyOUIFVdNdKCsTdaNpstevDsz2e1Ijabp80bp8dSu2YgdH5YhUQiwfRKwzpb730YzWts3Pyqr7+/fzSvOQ3VK5PBk3avh07DbysAWYkhScOUjbfb2lqvXLkykdfXlz+eRu3FyGRTETuCDRBi5bsnQqVC2pSdL6/R6+n08nIslkTB4+msyvNIJHzKzpvgY3iKsHVWgXvgKiSysAxbfBqo4mIsNvb0kyexxQCUdEV4f+NjDZteTlAr39W4iKn0dK6Mrmex5HIGQ6/foE+RISVp0l2rCT4W/71tIHO1t10E0obLpdBJjKQkBomu1wtSZCqVFLxrfkDQzA6AOQasiLSzM5BEFoVComRksBhweBJVABZIF/q7zoJWKyIFAgqFSjVACoWewSCnpFAZYABG+kf5zEALv2BbPB6flkalMoBUEolBlslS4FQqiSQA422Xr7EwweW2tnjwR0iWA2OGUxkkEhhsOwuCoNZ+y7xxZDIro7xcLieTUSgyg8VKTKQIdu/w83WwQJi2N5RgHxi4fz8OlwgguRyFYuDs7HA47+/WB/taQT5uSAQIYhGDXvvDvn17dy5dunDhkiU7F1haHraPcnWAWkA+XfgIM/O1aw8c+H6vES4AoP3BUPTH38K/OmNBlhC2jIMAAAAASUVORK5CYII=",Sk="2.0.0-rc.26",Tk={version:Sk},Ik={class:"footer-wrapper"},Lk={class:"xicon-icon",style:{width:"18px",height:"18px","font-size":"18px",color:"inherit"},xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},$k={key:0},Dk={key:1,class:"cyber-security"},Pk=["href"],Jp=fe({__name:"Footer",setup(e){const t=Dt(),n=Ye(),u=uu(),{solution:r,options:o}=Fu(),{version:i}=Tk,a=B(()=>r.value==="valine"?o.value.visitor!=!1:r.value==="waline"?o.value.pageview!=!1:!1),s=B(()=>{var g,h;let d="";n.value.author&&(d+=`${n.value.author} `);const f=(h=(g=u.value)==null?void 0:g.footer)==null?void 0:h.startYear,p=new Date().getFullYear();return f&&f!=p&&(d+=`${f} - `),d+=p,d}),l=B(()=>n.value.home||t.value),c=B(()=>{var d;return(d=u.value.modules||[])==null?void 0:d.includes("Comment")});return(d,f)=>{var C,b,m,v,T,P,A,k,L,D,N,I;const p=ze("Xicons"),g=ze("ValineViews"),h=ze("WalineViews"),y=ze("Comments");return x(),S("div",Ik,[$("span",null,[re(p,{target:"_blank",icon:E(Y_),text:`vuepress-theme-reco@${E(i)}`,link:"https://vuepress-theme-reco.recoluan.com"},null,8,["icon","text"])]),kt($("span",null,[re(p,{icon:E(T_),link:(b=(C=E(u))==null?void 0:C.footer)==null?void 0:b.recordLink,text:(v=(m=E(u))==null?void 0:m.footer)==null?void 0:v.record,target:"_blank"},null,8,["icon","link","text"])],512),[[Eu,(P=(T=E(u))==null?void 0:T.footer)==null?void 0:P.record]]),$("span",null,[re(p,{text:s.value,icon:E(N_)},{icon:Be(()=>[(x(),S("svg",Lk,f[0]||(f[0]=[$("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$("circle",{cx:"12",cy:"12",r:"9"}),$("path",{d:"M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25"})],-1)])))]),_:1},8,["text","icon"])]),a.value?(x(),S("span",$k,[re(p,{icon:E(zp)},{default:Be(()=>[E(r)==="valine"?(x(),de(g,{key:0,idVal:l.value},null,8,["idVal"])):V("",!0),E(r)==="waline"?(x(),de(h,{key:1,path:l.value},null,8,["path"])):V("",!0)]),_:1},8,["icon"])])):V("",!0),(k=(A=E(u))==null?void 0:A.footer)!=null&&k.cyberSecurityRecord?(x(),S("span",Dk,[f[1]||(f[1]=$("img",{src:Ak,alt:""},null,-1)),$("a",{href:((D=(L=E(u))==null?void 0:L.footer)==null?void 0:D.cyberSecurityLink)||"#",target:"_blank"},oe((I=(N=E(u))==null?void 0:N.footer)==null?void 0:I.cyberSecurityRecord),9,Pk)])):V("",!0),c.value?V("",!0):(x(),de(y,{key:2,"hide-comments":!0}))])}}}),Rk={class:"password-wrapper"},Fk={class:"site-info"},Ok=["src","alt"],Mk={key:1,class:"site-name"},zk={key:0},Bk={key:0},Nk={key:0},jk={key:0},Hk={key:0},Vk={key:0},Uk=fe({__name:"index",emits:["pass"],setup(e,{emit:t}){const n=t,{siteBrandLogo:u,siteBrandTitle:r,sitePassword:o}=Ck(),{password:i,passwordRef:a,lockIcon:s,lockText:l,focus:c}=Ek(o,n);return(d,f)=>{const p=ze("Xicons");return x(),S("div",Rk,[kt($("input",{maxlength:"6",type:"password",ref_key:"passwordRef",ref:a,"onUpdate:modelValue":f[0]||(f[0]=g=>Xe(i)?i.value=g:null)},null,512),[[On,E(i)]]),$("div",Fk,[E(u)?(x(),S("img",{key:0,class:"logo",src:E(Nt)(E(u)),alt:E(r)},null,8,Ok)):V("",!0),E(r)?(x(),S("h1",Mk,oe(E(r)),1)):V("",!0)]),$("div",null,[re(p,{icon:E(s),text:E(l)},null,8,["icon","text"])]),$("ul",{class:"password-show",onClick:f[1]||(f[1]=(...g)=>E(c)&&E(c)(...g))},[$("li",null,[E(i).length>0?(x(),S("i",zk)):V("",!0)]),$("li",null,[E(i).length>1?(x(),S("i",Bk)):V("",!0)]),$("li",null,[E(i).length>2?(x(),S("i",Nk)):V("",!0)]),$("li",null,[E(i).length>3?(x(),S("i",jk)):V("",!0)]),$("li",null,[E(i).length>4?(x(),S("i",Hk)):V("",!0)]),$("li",null,[E(i).length>5?(x(),S("i",Vk)):V("",!0)])]),re(Jp)])}}}),Gk={class:"mobile-menus-container"},qk={class:"appearance"},wd=fe({__name:"NavbarDropdownNemu",setup(e){const t=Ye();return(n,u)=>(x(),S("div",Gk,[re(Xp,{class:"mobile"}),$("div",qk,[u[0]||(u[0]=$("span",null,"Appearance",-1)),E(t).colorModeSwitch??!0?(x(),de(Qp,{key:0})):V("",!0)])]))}}),kd="SITE_PASSWORD_PASS";function Wk(){const e=Ye(),t=Q(!!e.value.password),n=Q(!1),u=Q(!0);return Fe(()=>{let o="true";o=sessionStorage.getItem(kd),e.value.password&&o!=="true"&&(u.value=!1),n.value=!0}),{siteLoaded:n,sitePasswordPass:u,setedSitePassword:t,handlePass:()=>{u.value=!0,sessionStorage.setItem(kd,"true")}}}function Kk(){const{isOpenSeries:e,isShowSeries:t}=jp(),{isShowCatalog:n}=ys(),u=uu(),{isOpenMobileMenus:r}=Hp();return{containerClass:B(()=>[{"series--open":e.value,"series--no":!t.value,"show-series":t.value,"show-catalog":n.value,"mobile-menus--active":r.value},u.value.pageClass])}}function Zk(){const e=()=>{const n=Je(),{initCopyBtn:u}=Cf();Pe(n,()=>{setTimeout(()=>{u()},0)})};return{initCodeCopy:()=>{Fe(()=>{e()})}}}function Qk(){let e=null,t={afterEach:r=>()=>{}};if(typeof window<"u")try{const r=Lt();r&&typeof r.afterEach=="function"&&(t=r)}catch(r){console.warn("Failed to use router, using fallback implementation",r)}return{initSeriesStatus:r=>{typeof window>"u"||(Fe(()=>{try{const{direction:o}=qp();e=t.afterEach((i,a)=>{i&&a&&typeof i.path=="string"&&typeof a.path=="string"&&i.path!==a.path&&(r(),o&&typeof o.value<"u"&&(o.value=""))})}catch(o){console.warn("Error in initSeriesStatus",o)}}),Vt(()=>{if(typeof e=="function")try{e(),e=null}catch(o){console.warn("Error when unregistering router hook",o)}}))}}}const Xk={key:1},Yk={class:"theme-main"},Nu=fe({__name:"index",props:{widthStyle:{type:String,default:"max-width"}},setup(e){const t=si(),n=B(()=>t.value.length>0),{isOpenSeries:u,toggleSeries:r}=jp(),{toggleMobileMenus:o}=Hp(),{isMobile:i}=Fp(),{siteLoaded:a,sitePasswordPass:s,setedSitePassword:l,handlePass:c}=Wk(),{containerClass:d}=Kk(),{initCodeCopy:f}=Zk();f();const{initSeriesStatus:p}=Qk();p(()=>{r(!1),o(!1)});const g=e,{widthStyle:h}=gt(g);return(y,C)=>E(l)?(x(),S("div",{key:1,class:ke(["theme-container",E(d)])},[E(a)&&!E(s)?(x(),de(Uk,{class:"out",key:"out",onPass:E(c)},null,8,["onPass"])):V("",!0),E(a)&&E(s)?(x(),S("div",Xk,[re(bd,{class:ke({"not-open":!E(u),"navbar-container__mobile":n.value}),onToggleMenus:E(o)},null,8,["class","onToggleMenus"]),E(i)&&n.value?(x(),de(_d,{key:0,class:ke({"not-open":!E(u)}),onToggleSeries:E(r)},null,8,["class","onToggleSeries"])):V("",!0),E(i)?(x(),de(wd,{key:1})):V("",!0),re(dr,{name:"fade"},{default:Be(()=>[E(u)?(x(),S("div",{key:0,class:"series-mask",onClick:C[1]||(C[1]=b=>E(r)(!1))})):V("",!0)]),_:1}),$("div",Yk,[n.value?(x(),de(xd,{key:0})):V("",!0),_t(y.$slots,"default")])])):V("",!0)],2)):(x(),S("div",{key:0,class:ke(["theme-container",E(d)])},[re(bd,{class:ke({"not-open":!E(u),"navbar-container--has-series":E(i)&&n.value}),onToggleMenus:E(o)},null,8,["class","onToggleMenus"]),n.value?(x(),de(_d,{key:0,class:ke({"not-open":!E(u)}),onToggleSeries:E(r)},null,8,["class","onToggleSeries"])):V("",!0),E(i)?(x(),de(wd,{key:1})):V("",!0),re(dr,{name:"fade"},{default:Be(()=>[E(u)?(x(),S("div",{key:0,class:"series-mask",onClick:C[0]||(C[0]=b=>E(r)(!1))})):V("",!0)]),_:1}),$("div",{class:"theme-main",style:ct(E(h)==="full"?"max-width: 100%":"")},[n.value?(x(),de(xd,{key:0})):V("",!0),_t(y.$slots,"default")],4)],2))}}),Jk=fe({__name:"Posts",setup(e){const{initMagicCard:t}=ai();Fe(()=>{t()});const n=Je();return Pe(n,()=>{t()}),(u,r)=>(x(),de(Nu,null,{default:Be(()=>[re(Yw)]),_:1}))}}),eC={class:"home-blog-content"},tC={class:"blog-list"},nC={class:"personal-info-wrapper"},uC=["src"],rC={key:1,class:"name"},oC={class:"module-title"},iC={class:"category-wrapper"},aC={class:"text"},sC={class:"num"},lC={class:"module-title"},cC={class:"tag-wrapper"},Cd=10,dC=fe({__name:"Blog",setup(e){var g;const{posts:t,categorySummary:n}=Bu(),u=B(()=>t.length),r=Q(1),o=B(()=>{var h;return((h=n==null?void 0:n.categories)==null?void 0:h.items)||[]}),i=B(()=>{var h;return((h=n==null?void 0:n.tags)==null?void 0:h.items)||[]}),a=B(()=>{const h=(r.value-1)*Cd,y=r.value*Cd;return(t||[]).slice(h,y)});let s=h=>{};const l=Je(),c=Lt(),d=Dt(),f=Ye(),p=B(()=>l.query.page);{let h=function(b){b>=u?b=u:b<=0&&(b=1),s(b)};s=b=>{r.value=b;const m=f.value.home||d.value;c.push(b>1?`${m}?page=${b}`:m),window.scrollTo({left:0,top:0,behavior:"smooth"})};const y=Number((g=l==null?void 0:l.query)==null?void 0:g.page);Fe(()=>{typeof y=="number"&&!isNaN(y)&&h(y),Pe(p,b=>{b&&(r.value=Number(b))})});const C=vs(()=>{const b=document.querySelector(".info-wrapper");b&&(b.setAttribute("data-x",b.offsetLeft),b.setAttribute("data-y",b.offsetTop),b.setAttribute("data-width",b.clientWidth),b.setAttribute("data-height",b.clientHeight))},200);window.addEventListener("scroll",C),Vt(()=>{window.removeEventListener("scroll",C)})}return(h,y)=>{const C=ze("Xicons"),b=ze("router-link"),m=ze("MagicCard");return x(),S("section",eC,[$("section",tC,[re(xs,{data:a.value},null,8,["data"]),re(_s,{currentPage:r.value,total:E(t).length,onChange:E(s)},null,8,["currentPage","total","onChange"])]),re(m,{class:"info-wrapper"},{default:Be(()=>[$("div",nC,[E(f).authorAvatar?(x(),S("img",{key:0,class:"personal-img",src:E(Nt)(E(f).authorAvatar),alt:"author-avatar"},null,8,uC)):V("",!0),E(f).author?(x(),S("p",rC,oe(E(f).author),1)):V("",!0),y[0]||(y[0]=$("hr",null,null,-1))]),$("h4",oC,[re(C,{icon:E(ii),text:E(f).categoriesText||"Categories"},null,8,["icon","text"])]),$("ul",iC,[(x(!0),S(me,null,Re(o.value,({label:v,length:T,categoryValue:P},A)=>(x(),S("li",{class:"category-item",key:A},[re(b,{class:"category-link",to:`/categories/${P}/1.html`},{default:Be(()=>[$("span",aC,oe(v),1),$("span",sC,oe(T),1)]),_:2},1032,["to"])]))),128))]),$("h4",lC,[re(C,{icon:E(bs),text:E(f).tagsText||"Tags"},null,8,["icon","text"])]),$("ul",cC,[(x(!0),S(me,null,Re(i.value,({label:v,categoryValue:T},P)=>(x(),S("li",{class:"tag-item",key:P,style:ct({borderColor:E(Rx)()})},[re(b,{class:"tag-link",to:`/tags/${T}/1.html`},{default:Be(()=>[Qe(oe(v),1)]),_:2},1032,["to"])],4))),128))])]),_:1})])}}}),fC={class:"banner-brand__content"},pC=["src"],hC={key:1},mC={key:2},gC=fe({__name:"Banner",setup(e){const t=$t(),n=B(()=>{var o,i,a,s;return(i=(o=t.value)==null?void 0:o.banner)!=null&&i.heroImage?Nt((s=(a=t.value)==null?void 0:a.banner)==null?void 0:s.heroImage):null}),u=B(()=>{var o,i;return((i=(o=t.value)==null?void 0:o.banner)==null?void 0:i.heroImageStyle)||{}}),r=B(()=>{var s;const{bgImageStyle:o,bgImage:i}=((s=t.value)==null?void 0:s.banner)||{},a=i?{textAlign:"center",overflow:"hidden",background:`url(${Nt(i)}) center/cover no-repeat`}:{textAlign:"center",overflow:"hidden",background:""};return o?{...a,...o}:{...a}});return(o,i)=>{var a,s,l,c,d,f,p,g;return x(),S("section",{class:"banner-wrapper",style:ct({...r.value})},[$("div",fC,[n.value?(x(),S("img",{key:0,src:n.value,style:ct({...u.value}),alt:"heroImage"},null,12,pC)):V("",!0),(s=(a=E(t))==null?void 0:a.banner)!=null&&s.heroText?(x(),S("h1",hC,oe((c=(l=E(t))==null?void 0:l.banner)==null?void 0:c.heroText),1)):V("",!0),(f=(d=E(t))==null?void 0:d.banner)!=null&&f.tagline?(x(),S("p",mC,oe((g=(p=E(t))==null?void 0:p.banner)==null?void 0:g.tagline),1)):V("",!0)])],4)}}}),bC={};function vC(e,t){const n=ze("Comments");return x(),de(n,{"hide-comments":!1})}const yC=Ke(bC,[["render",vC]]),xC={class:"features__container"},_C=fe({__name:"Features",setup(e){const t=$t(),n=B(()=>t.value.features||[]);return(u,r)=>{const o=ze("MagicCard");return x(),S("div",xC,[(x(!0),S(me,null,Re(n.value,(i,a)=>(x(),de(o,{class:"features__item",key:a},{default:Be(()=>[$("h4",null,oe(i.title),1),$("p",null,oe(i.details),1)]),_:2},1024))),128))])}}}),wC={},kC={class:"theme-reco-md-content"};function CC(e,t){const n=ze("Content");return x(),S("section",kC,[re(n)])}const EC=Ke(wC,[["render",CC]]),AC={class:"banner-brand__content"},SC={key:0,class:"title"},TC={key:1,class:"description"},IC={key:2,class:"tagline"},LC={key:3,class:"btn-group"},$C=fe({__name:"BannerBrand",setup(e){const t=$t();B(()=>{var r,o,i,a;return(o=(r=t.value)==null?void 0:r.bannerBrand)!=null&&o.heroImage?Nt((a=(i=t.value)==null?void 0:i.bannerBrand)==null?void 0:a.heroImage):null});const n=B(()=>{var r,o;return((o=(r=t.value)==null?void 0:r.bannerBrand)==null?void 0:o.buttons)||[]});B(()=>{var r,o;return((o=(r=t.value)==null?void 0:r.bannerBrand)==null?void 0:o.heroImageStyle)||{}});const u=B(()=>{var a;const{bgImageStyle:r,bgImage:o}=((a=t.value)==null?void 0:a.bannerBrand)||{},i=o?{overflow:"hidden",background:`url(${Nt(o)}) center/cover no-repeat`}:{};return r?{...i,...r}:i});return(r,o)=>{var a,s,l,c,d,f,p,g,h,y,C,b;const i=ze("Xicons");return x(),S("section",{class:"banner-brand__wrapper",style:ct({...u.value})},[$("div",AC,[(s=(a=E(t))==null?void 0:a.bannerBrand)!=null&&s.title?(x(),S("h1",SC,oe((c=(l=E(t))==null?void 0:l.bannerBrand)==null?void 0:c.title),1)):V("",!0),(f=(d=E(t))==null?void 0:d.bannerBrand)!=null&&f.description?(x(),S("p",TC,oe((g=(p=E(t))==null?void 0:p.bannerBrand)==null?void 0:g.description),1)):V("",!0),(y=(h=E(t))==null?void 0:h.bannerBrand)!=null&&y.tagline?(x(),S("p",IC,oe((b=(C=E(t))==null?void 0:C.bannerBrand)==null?void 0:b.tagline),1)):V("",!0),n.value.length>0?(x(),S("div",LC,[(x(!0),S(me,null,Re(n.value,(m,v)=>(x(),de(i,{class:ke(m.type),key:v,icon:m.icon,text:m.text,link:m.link,"icon-size":"18","text-size":"14"},null,8,["class","icon","text","link"]))),128))])):V("",!0)])],4)}}}),DC={class:"home-wrapper"},PC=fe({name:"HomeWrapper",components:{Banner:gC,BannerBrand:$C,Blog:dC,MdContent:EC,Comment:yC,Footer:Jp,Features:_C}}),RC=fe({...PC,setup(e){const t=$t();return(n,u)=>(x(),S("main",DC,[(x(!0),S(me,null,Re(E(t).modules||["Banner","Blog","Footer"],r=>(x(),de(wu(r),{key:r}))),128))]))}}),FC={key:0,class:"page-nav"},OC=fe({__name:"PageNav",setup(e){const t=c=>c===!1?null:tn(c)?gs(c):Wa(c)?c:!1,n=(c,d,f)=>{const p=c.findIndex(g=>g.link===d);if(p!==-1){const g=c[p+f];return g!=null&&g.link?g:null}for(const g of c)if(g.children){const h=n(g.children,d,f);if(h)return h}return null},u=Je(),r=Lt(),o=si(),i=uu(),a=B(()=>{const c=t(i.value.prev);return c!==!1?c:n(o.value,u.path,-1)}),s=B(()=>{const c=t(i.value.next);return c!==!1?c:n(o.value,u.path,1)}),l=c=>{r.push(c)};return(c,d)=>a.value||s.value?(x(),S("nav",FC,[$("p",{class:ke(["inner",{hasPrev:!!a.value,hasNext:!!s.value}])},[a.value?(x(),S("span",{key:0,class:"page-nav-item prev",onClick:d[0]||(d[0]=f=>l(a.value.link))}," ← "+oe(a.value.text),1)):V("",!0),s.value?(x(),S("span",{key:1,class:"page-nav-item next",onClick:d[1]||(d[1]=f=>l(s.value.link))},oe(s.value.text)+" → ",1)):V("",!0)],2)])):V("",!0)}}),MC={class:"page-meta"},zC={key:0,class:"meta-item edit-link"},BC={key:1,class:"meta-item last-updated"},NC=fe({__name:"PageMeta",setup(e){const t=()=>{const i=Ye(),a=Mn(),s=uu();return B(()=>{if(!(s.value.editLink??i.value.editLink??!0))return null;const{repo:c,docsRepo:d=c,docsBranch:f="main",docsDir:p="",editLinkText:g}=i.value;if(!d)return null;const h=Px({docsRepo:d,docsBranch:f,docsDir:p,filePathRelative:a.value.filePathRelative,editLinkPattern:i.value.editLinkPattern});return h?{text:g??"Edit this page",link:h,icon:Yx,hideExternalLinkIcon:!0}:null})},n=()=>{const i=Ye(),a=Mn(),s=uu();return B(()=>{var d,f;return!(s.value.lastUpdated??i.value.lastUpdated??!0)||!((d=a.value.git)!=null&&d.updatedTime)?null:new Date((f=a.value.git)==null?void 0:f.updatedTime).toLocaleString()})},u=t(),r=n(),o=Ye();return(i,a)=>{const s=ze("Xicons");return x(),S("footer",MC,[E(u)?(x(),S("div",zC,[re(s,{class:"meta-item-label",icon:E(u).icon,text:E(u).text,link:E(u).link,target:"_blank","icon-size":"20","text-size":"14"},null,8,["icon","text","link"])])):V("",!0),E(r)?(x(),S("div",BC,[re(s,{class:"meta-item-label",icon:E(Bp),text:`${E(o).lastUpdatedText||"Last Updated"} ${E(r)}`,"icon-size":"20","text-size":"14"},null,8,["icon","text"])])):V("",!0)])}}}),eh=(e,t)=>e.hash===t.link?!0:t.children?t.children.some(n=>eh(e,n)):!1,Ed=(e,t)=>Z("li",{...t},Z(kr,{class:"page-catalog-item",item:e})),jC=e=>{var t;return(t=e.children)!=null&&t.length?e.children.map(n=>Z(ci,{item:n})):[null]},ci=({item:e})=>{const t=Je(),n=eh(t,e);return e.children&&e.children.length>0?[Ed(e,{class:{[`page-catalog-menu-depth_${e.level||2}`]:!0,active:n}}),...jC(e)]:[Ed(e,{class:{[`page-catalog-menu-depth_${e.level||2}`]:!0,active:n}})]};ci.displayName="CatalogItem";ci.props={item:{type:Object,required:!0}};const HC={class:"page-catalog-container"},VC={class:"tip"},UC=fe({__name:"index",setup(e){const{catalog:t}=ys(),n=Ye(),u=B(()=>n.value.catalogTitle||"ON THIS PAGE");return(r,o)=>(x(),S("div",HC,[$("h5",VC,oe(u.value),1),$("ul",null,[(x(!0),S(me,null,Re(E(t),i=>(x(),de(E(ci),{key:i.link||i.text,item:i},null,8,["item"]))),128))])]))}});function GC(){const e=uu();return{pagePassword:B(()=>{const n=e.value.password;return n?Array.isArray(n)?n:[n]:[]})}}function qC(e,t){const n=Ye(),u=Q(""),r=Q(null),o=Q("Locked"),i=Q(n.value.inputPasswordText||"Please enter the password");return Pe(u,s=>{s.length===6&&(e.value.includes(Bo(Bo(s)))?(o.value="Unlocked",i.value=n.value.unlockSucessText||"Success, enjoy it!",setTimeout(()=>{t("pass")},600)):(u.value="",i.value=n.value.unlockFailuerText||"Failed, please enter again!"))}),{password:u,passwordRef:r,lockIcon:o,lockText:i,focus:()=>{r.value.focus()}}}const WC={class:"page-password-wrapper"},KC={key:0},ZC={key:0},QC={key:0},XC={key:0},YC={key:0},JC={key:0},eE=fe({__name:"index",emits:["pass"],setup(e,{emit:t}){const n=t,{pagePassword:u}=GC(),{password:r,passwordRef:o,lockIcon:i,lockText:a,focus:s}=qC(u,n);return(l,c)=>{const d=ze("Xicons");return x(),S("div",WC,[kt($("input",{maxlength:"6",type:"password",ref_key:"passwordRef",ref:o,"onUpdate:modelValue":c[0]||(c[0]=f=>Xe(r)?r.value=f:null)},null,512),[[On,E(r)]]),$("div",null,[re(d,{icon:E(i),text:E(a)},null,8,["icon","text"])]),$("ul",{class:"password-show",onClick:c[1]||(c[1]=(...f)=>E(s)&&E(s)(...f))},[$("li",null,[E(r).length>0?(x(),S("i",KC)):V("",!0)]),$("li",null,[E(r).length>1?(x(),S("i",ZC)):V("",!0)]),$("li",null,[E(r).length>2?(x(),S("i",QC)):V("",!0)]),$("li",null,[E(r).length>3?(x(),S("i",XC)):V("",!0)]),$("li",null,[E(r).length>4?(x(),S("i",YC)):V("",!0)]),$("li",null,[E(r).length>5?(x(),S("i",JC)):V("",!0)])])])}}});let io="PAGE_PASSWORD_PASS";function tE(){const e=Je();io=`${io}:${e.path}`;const t=uu(),n=Q(!1),u=Q(!0),r=Q(!!t.value.password);return Fe(()=>{let i="true";i=sessionStorage.getItem(io),t.value.password&&i!=="true"&&(u.value=!1),n.value=!0}),{pageLoaded:n,pagePasswordPass:u,setedPagePassword:r,handlePass:()=>{u.value=!0,sessionStorage.setItem(io,"true")}}}const nE={class:"page-container"},uE={class:"page-content"},rE={key:0,class:"page-title"},oE={key:1,class:"theme-reco-md-content"},iE={key:2,class:"theme-reco-md-content"},aE=fe({__name:"index",setup(e){const t=Mn(),{options:n}=Fu(),{pageLoaded:u,pagePasswordPass:r,setedPagePassword:o,handlePass:i}=tE(),a=B(()=>{var c,d,f;return((d=(c=t==null?void 0:t.value)==null?void 0:c.frontmatter)==null?void 0:d.title)||((f=t==null?void 0:t.value)==null?void 0:f.title)||""});B(()=>{var c,d;return((d=(c=t==null?void 0:t.value)==null?void 0:c.frontmatter)==null?void 0:d.sticky)||""});const s=B(()=>{var f;const{hideComments:c}=(f=t==null?void 0:t.value)==null?void 0:f.frontmatter,{hideComments:d}=n.value;return c===!0||c!==!1&&d===!0}),{isShowCatalog:l}=ys();return(c,d)=>{const f=ze("Content"),p=ze("Comments");return x(),S("main",nE,[$("div",uE,[a.value?(x(),S("h1",rE,oe(a.value),1)):V("",!0),(x(),de(Kp,{key:E(t).path,"page-data":E(t)},null,8,["page-data"])),E(o)?(x(),S("div",iE,[E(u)&&!E(r)?(x(),de(eE,{key:0,onPass:E(i)},null,8,["onPass"])):V("",!0),E(u)&&E(r)?(x(),de(f,{key:1})):V("",!0)])):(x(),S("div",oE,[re(f)])),re(NC),re(OC),re(p,{"hide-comments":s.value},null,8,["hide-comments"])]),E(l)?(x(),de(UC,{key:0})):V("",!0)])}}}),sE=fe({__name:"Layout",setup(e){const t=Op(),n=$t(),u=Ow(),r=u.resolve,o=u.pending,{initMagicCard:i}=ai();Fe(()=>{i()});const a=Je();return Pe(a,()=>{i()}),(s,l)=>(x(),de(Nu,{"width-style":E(n).home===!0?"full":"max-width"},{default:Be(()=>[E(n).home===!0?(x(),de(RC,{key:0})):(x(),de(dr,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:E(r),onBeforeLeave:E(o)},{default:Be(()=>[(x(),de(aE,{key:E(t).path}))]),_:1},8,["onBeforeEnter","onBeforeLeave"]))]),_:1},8,["width-style"]))}}),lE="/assets/taken-BlFnQ52t.svg",cE={class:"page-404-wrapper"},dE={class:"content"},fE=fe({__name:"NotFound",setup(e){const t=Lt(),n=Dt(),u=Ye(),r=()=>{t.push(u.value.home||n.value)};return(o,i)=>(x(),de(Nu,null,{default:Be(()=>[$("section",cE,[$("div",dE,[i[0]||(i[0]=$("h1",null,"404",-1)),$("p",null,oe(E(u).notFound||"Oops! Page does not exist."),1),$("div",{class:"xicon-container",onClick:r},oe(E(u).backToHome||"Back To Home"),1)]),i[1]||(i[1]=$("img",{src:lE},null,-1))])]),_:1}))}}),pE={class:"timeline-content"},hE={class:"year"},mE={class:"year-wrapper"},gE={class:"date"},bE={key:1,class:"title"},vE=fe({__name:"Timeline",setup(e){const{posts:t}=Bu(),n={};t.forEach(r=>{if(!r.frontmatter.date)return;let o=r.frontmatter.date.includes("/")?"/":"-";const[i,a,s]=Wp(r.frontmatter.date).split(" ")[0].split(o)||[];if(!(!i||!a||!s)){if(!n[i]){n[i]=[{...r,date:`${a}${o}${s}`}];return}n[i].push({...r,date:`${a}-${s}`})}});const u=Object.keys(n).sort((r,o)=>Number(o)-Number(r)).reduce((r,o)=>(r.push({year:o,data:n[o]}),r),[]);return(r,o)=>(x(),de(Nu,{class:"timeline-wrapper"},{default:Be(()=>[$("ul",pE,[(x(!0),S(me,null,Re(E(u),(i,a)=>(x(),S("li",{key:a},[$("h2",hE,oe(i.year),1),$("ul",mE,[(x(!0),S(me,null,Re(i.data,(s,l)=>(x(),S("li",{key:l,class:"item"},[$("span",gE,oe(s.date),1),s&&s.path&&typeof s.path=="string"?(x(),de(Br,{key:0,class:"title",to:s.path},{default:Be(()=>[Qe(oe(s.title),1)]),_:2},1032,["to"])):(x(),S("span",bE,oe(s.title),1))]))),128))])]))),128))])]),_:1}))}}),yE={class:"categories-container"},xE={class:"category-list"},_E={class:"text"},wE=fe({__name:"Categories",setup(e){const{categoryPosts:t,categorySummary:n}=Bu(),u=Je(),r=Lt(),o=B(()=>{let s=[];const l=t.value.currentCategoryKey;if(l){const{items:c=[]}=n[l];s=Object.values(c)}return s}),i=s=>{const{currentCategoryKey:l,currentCategoryValue:c}=t.value;r.push(`/${l}/${c}/${s}.html`)},{initMagicCard:a}=ai();return Fe(()=>{a()}),Pe(u,()=>{a()}),(s,l)=>(x(),de(Nu,null,{default:Be(()=>[$("div",yE,[$("ul",xE,[(x(!0),S(me,null,Re(o.value,({label:c,categoryValue:d},f)=>(x(),S("li",{key:f,class:ke(["category-item",{active:E(t).currentCategoryValue===d}])},[re(Br,{class:"category-link",to:`/${E(t).currentCategoryKey}/${d}/1.html`},{default:Be(()=>[$("span",_E,oe(c),1)]),_:2},1032,["to"])],2))),128))]),re(xs,{data:E(t).pages},null,8,["data"]),E(t).totalPage>10?(x(),de(_s,{key:0,currentPage:E(t).currentPage,total:E(t).totalPage,onChange:i},null,8,["currentPage","total"])):V("",!0)])]),_:1}))}});function kE(){const e=Ye();return{friendshipLinks:B(()=>e.value.friendshipLinks||[]),handlClick:u=>{window.open(u,"_blank")}}}const CE={class:"friendship-link-container"},EE={class:"logo"},AE=["src"],SE={class:"title"},TE=fe({__name:"index",setup(e){const{friendshipLinks:t,handlClick:n}=kE(),{initMagicCard:u}=ai();Fe(()=>{u()});const r=Je();return Pe(r,()=>{u()}),(o,i)=>(x(),de(Nu,null,{default:Be(()=>[$("div",CE,[(x(!0),S(me,null,Re(E(t),(a,s)=>(x(),de(E(Np),{class:"friendship-link-item",key:s,onClick:()=>E(n)(a.link)},{default:Be(()=>[$("div",EE,[$("img",{src:a.logo},null,8,AE)]),$("span",SE,oe(a.title),1)]),_:2},1032,["onClick"]))),128))])]),_:1}))}}),IE=Object.freeze(Object.defineProperty({__proto__:null,Categories:wE,FriendshipLink:TE,Layout:sE,NotFound:fE,Posts:Jk,Timeline:vE},Symbol.toStringTag,{value:"Module"})),LE={TestLayout:vt(()=>X(()=>import("./TestLayout-D6JAtLh0.js"),[]))},$E=At({enhance(...e){zw(...e)},setup(){Mw()},layouts:{...IE,...LE}}),DE=Object.freeze(Object.defineProperty({__proto__:null,default:$E},Symbol.toStringTag,{value:"Module"})),ao=[V2,q2,X2,Rv,Nv,Uv,Jv,o4,Ey,Sy,Iy,Oy,Xy,lx,gx,Lx,DE].map(e=>e.default).filter(Boolean),PE=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"vuepress-reco","description":"一款简洁的 vuepress 博客 & 文档 主题。"},"/en/":{"lang":"en-US","title":"vuepress-reco","description":"A simple vuepress Blog & Doc theme."}}}');var Zu=ut(PE),RE=kg,FE=()=>{const e=Kg({history:RE(Q0("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(t,n,u)=>u||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{if(t.path!==n.path||n===cn){const u=ti(t.fullPath);if(u.path!==t.fullPath)return u.path;const r=await u.loader();t.meta={...u.meta,_pageChunk:r}}else t.path===n.path&&(t.meta=n.meta)}),e},OE=e=>{e.component("ClientOnly",gf),e.component("Content",bf),e.component("RouteLink",Ya)},ME=(e,t,n)=>{const u=B(()=>t.currentRoute.value.path),r=Nh((y,C)=>({get(){return y(),t.currentRoute.value.meta._pageChunk},set(b){t.currentRoute.value.meta._pageChunk=b,C()}})),o=B(()=>kn.resolveLayouts(n)),i=B(()=>kn.resolveRouteLocale(Zu.value.locales,u.value)),a=B(()=>kn.resolveSiteLocaleData(Zu.value,i.value)),s=B(()=>r.value.comp),l=B(()=>r.value.data),c=B(()=>l.value.frontmatter),d=B(()=>kn.resolvePageHeadTitle(l.value,a.value)),f=B(()=>kn.resolvePageHead(d.value,c.value,a.value)),p=B(()=>kn.resolvePageLang(l.value,a.value)),g=B(()=>kn.resolvePageLayout(l.value,o.value)),h={layouts:o,pageData:l,pageComponent:s,pageFrontmatter:c,pageHead:f,pageHeadTitle:d,pageLang:p,pageLayout:g,redirects:ga,routeLocale:i,routePath:u,routes:vu,siteData:Zu,siteLocaleData:a};return e.provide(Yo,h),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>c.value},$head:{get:()=>f.value},$headTitle:{get:()=>d.value},$lang:{get:()=>p.value},$page:{get:()=>l.value},$routeLocale:{get:()=>i.value},$site:{get:()=>Zu.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>Nt}}),h},zE=([e,t,n=""])=>{const u=Object.entries(t).map(([a,s])=>tn(s)?`[${a}=${JSON.stringify(s)}]`:s?`[${a}]`:"").join(""),r=`head > ${e}${u}`;return Array.from(document.querySelectorAll(r)).find(a=>a.innerText===n)??null},BE=([e,t,n])=>{if(!tn(e))return null;const u=document.createElement(e);return Wa(t)&&Object.entries(t).forEach(([r,o])=>{tn(o)?u.setAttribute(r,o):o&&u.setAttribute(r,"")}),tn(n)&&u.appendChild(document.createTextNode(n)),u},NE=()=>{const e=df(),t=Jo();let n=[];const u=()=>{e.value.forEach(i=>{const a=zE(i);a&&n.push(a)})},r=()=>{const i=[];return e.value.forEach(a=>{const s=BE(a);s&&i.push(s)}),i},o=()=>{document.documentElement.lang=t.value;const i=r();n.forEach((a,s)=>{const l=i.findIndex(c=>a.isEqualNode(c));l===-1?(a.remove(),delete n[s]):i.splice(l,1)}),i.forEach(a=>document.head.appendChild(a)),n=[...n.filter(a=>!!a),...i]};Ot(Qa,o),Fe(()=>{u(),Pe(e,o,{immediate:!1})})},jE=Dm,HE=async()=>{var n;const e=jE({name:"Vuepress",setup(){var o;NE();for(const i of ao)(o=i.setup)==null||o.call(i);const u=ao.flatMap(({rootComponents:i=[]})=>i.map(a=>Z(a))),r=ff();return()=>[Z(r.value),u]}}),t=FE();OE(e),ME(e,t,ao);for(const u of ao)await((n=u.enhance)==null?void 0:n.call(u,{app:e,router:t,siteData:Zu}));return e.use(t),{app:e,router:t}};HE().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{Eu as A,G9 as B,_s as C,me as F,Ke as _,$ as a,Wo as b,S as c,HE as createVueApp,Qe as d,re as e,fe as f,Ye as g,de as h,Nu as i,$t as j,B as k,Nt as l,V as m,E as n,x as o,Re as p,ke as q,ze as r,ct as s,oe as t,Dt as u,Q as v,Be as w,Bo as x,kt as y,On as z};
