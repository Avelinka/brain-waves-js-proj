import{N as z}from"./notiflix-aio-3.2.6.min-ff94ac69.js";function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:le}=Object,V=(e=>t=>{const n=nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),k=e=>(e=e.toLowerCase(),t=>V(t)===e),K=e=>t=>typeof t===e,{isArray:P}=Array,_=K("undefined");function rt(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fe=k("ArrayBuffer");function ot(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fe(e.buffer),t}const st=K("string"),E=K("function"),_e=K("number"),W=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,U=e=>{if(V(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=k("Date"),ct=k("File"),lt=k("Blob"),ut=k("FileList"),dt=e=>W(e)&&E(e.pipe),ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=V(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},pt=k("URLSearchParams"),mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function v(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function ve(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const De=e=>!_(e)&&e!=={};function te(){const{caseless:e}=De(this)&&this||{},t={},n=(r,o)=>{const s=e&&ve(t,o)||o;U(t[s])&&U(r)?t[s]=te(t[s],r):U(r)?t[s]=te({},r):P(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&v(arguments[r],n);return t}const ht=(e,t,n,{allOwnKeys:r}={})=>(v(t,(o,s)=>{n&&E(o)?e[s]=Pe(o,n):e[s]=o},{allOwnKeys:r}),e),yt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gt=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Et=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!_e(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},St=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&le(Uint8Array)),At=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},kt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Rt=k("HTMLFormElement"),Ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Tt=k("RegExp"),qe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},xt=e=>{qe(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return P(e)?r(e):r(String(e).split(t)),n},Nt=()=>{},Ct=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",ge="0123456789",Ue={DIGIT:ge,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+ge},Bt=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Pt(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ft=e=>{const t=new Array(10),n=(r,o)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=P(r)?[]:{};return v(r,(i,l)=>{const d=n(i,o+1);!_(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},_t=k("AsyncFunction"),vt=e=>e&&(W(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:P,isArrayBuffer:Fe,isBuffer:rt,isFormData:ft,isArrayBufferView:ot,isString:st,isNumber:_e,isBoolean:it,isObject:W,isPlainObject:U,isUndefined:_,isDate:at,isFile:ct,isBlob:lt,isRegExp:Tt,isFunction:E,isStream:dt,isURLSearchParams:pt,isTypedArray:St,isFileList:ut,forEach:v,merge:te,extend:ht,trim:mt,stripBOM:yt,inherits:bt,toFlatObject:gt,kindOf:V,kindOfTest:k,endsWith:wt,toArray:Et,forEachEntry:At,matchAll:kt,isHTMLForm:Rt,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:qe,freezeMethods:xt,toObjectSet:Lt,toCamelCase:Ot,noop:Nt,toFiniteNumber:Ct,findKey:ve,global:{},isContextDefined:De,ALPHABET:Ue,generateString:Bt,isSpecCompliantForm:Pt,toJSONObject:Ft,isAsyncFn:_t,isThenable:vt};function h(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=h.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(h,Me);Object.defineProperty(je,"isAxiosError",{value:!0});h.from=(e,t,n,r,o,s)=>{const i=Object.create(je);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),h.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Dt=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Ie(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(o,s){return o=Ie(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function qt(e){return a.isArray(e)&&!e.some(ne)}const Ut=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,w){return!a.isUndefined(w[m])});const r=n.metaTokens,o=n.visitor||c,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!d&&a.isBlob(u))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?d&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,m,w){let R=u;if(u&&!w&&typeof u=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&qt(u)||(a.isFileList(u)||a.endsWith(m,"[]"))&&(R=a.toArray(u)))return m=Ie(m),R.forEach(function(q,tt){!(a.isUndefined(q)||q===null)&&t.append(i===!0?we([m],tt,s):i===null?m:m+"[]",f(q))}),!1}return ne(u)?!0:(t.append(we(w,m,s),f(u)),!1)}const p=[],b=Object.assign(Ut,{defaultVisitor:c,convertValue:f,isVisitable:ne});function g(u,m){if(!a.isUndefined(u)){if(p.indexOf(u)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(u),a.forEach(u,function(R,S){(!(a.isUndefined(R)||R===null)&&o.call(t,R,a.isString(S)?S.trim():S,m,b))===!0&&g(R,m?m.concat(S):[S])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&G(e,this,t)}const He=ue.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function jt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,n){if(!t)return e;const r=n&&n.encode||jt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Mt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Se=Mt,Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},It=typeof URLSearchParams<"u"?URLSearchParams:ue,Ht=typeof FormData<"u"?FormData:null,$t=typeof Blob<"u"?Blob:null,Jt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),zt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:It,FormData:Ht,Blob:$t},isStandardBrowserEnv:Jt,isStandardBrowserWebWorkerEnv:zt,protocols:["http","https","file","blob","url","data"]};function Vt(e,t){return G(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Kt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Wt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function ze(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Wt(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Kt(r),o,n,0)}),n}return null}function Gt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const de={transitional:Je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return G(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Gt(t)):t}],transformResponse:[function(t){const n=this.transitional||de.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?h.from(l,h.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{de.headers[e]={}});const fe=de,Xt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Xt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Qt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Zt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Q(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function en(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function tn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,f){const c=F(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(o,c);(!p||o[p]===void 0||f===!0||f===void 0&&o[p]!==!1)&&(o[p||d]=j(l))}const i=(l,d)=>a.forEach(l,(f,c)=>s(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Zt(t)?i(Yt(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Qt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=F(i),i){const l=a.findKey(r,i);l&&(!n||Q(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||Q(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=j(o),delete n[s];return}const l=t?en(s):String(s).trim();l!==s&&delete n[s],n[l]=j(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=F(i);r[l]||(tn(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(X.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(X);const O=X;function Z(e,t){const n=this||fe,r=t||n,o=O.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Ve(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,h,{__CANCEL__:!0});function nn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const rn=A.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function on(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ke(e,t){return e&&!on(t)?sn(e,t):t}const an=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function cn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ln(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[s];i||(i=f),n[o]=d,r[o]=f;let p=s,b=0;for(;p!==o;)b+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),f-i<t)return;const g=c&&f-c;return g?Math.round(b*1e3/g):void 0}}function ke(e,t){let n=0;const r=ln(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),f=s<=i;n=s;const c={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&f?(i-s)/d:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const un=typeof XMLHttpRequest<"u",dn=un&&function(e){return new Promise(function(n,r){let o=e.data;const s=O.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;a.isFormData(o)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?a.isString(f=s.getContentType())&&s.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(u+":"+m))}const p=Ke(e.baseURL,e.url);c.open(e.method.toUpperCase(),$e(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const u=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};nn(function(S){n(S),d()},function(S){r(S),d()},w),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Je;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new h(m,w.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const u=(e.withCredentials||an(p))&&e.xsrfCookieName&&rn.read(e.xsrfCookieName);u&&s.set(e.xsrfHeaderName,u)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(m,w){c.setRequestHeader(w,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ke(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ke(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new D(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=cn(p);if(g&&A.protocols.indexOf(g)===-1){r(new h("Unsupported protocol "+g+":",h.ERR_BAD_REQUEST,e));return}c.send(o||null)})},re={http:Dt,xhr:dn};a.forEach(re,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Re=e=>`- ${e}`,fn=e=>a.isFunction(e)||e===null||e===!1,We={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!fn(n)&&(r=re[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(Re).join(`
`):" "+Re(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:re};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function Oe(e){return ee(e),e.headers=O.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),We.getAdapter(e.adapter||fe.adapter)(e).then(function(r){return ee(e),r.data=Z.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Ve(r)||(ee(e),r&&r.response&&(r.response.data=Z.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const Te=e=>e instanceof O?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(f,c,p){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:p},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function o(f,c,p){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,c,p)}function s(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function l(f,c,p){if(p in t)return r(f,c);if(p in e)return r(void 0,f)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(f,c)=>o(Te(f),Te(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||o,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==l||(n[c]=b)}),n}const Ge="1.5.1",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};pe.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Ge+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new h(o(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function pn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new h("option "+s+" must be "+d,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}const oe={assertOptions:pn,validators:pe},T=oe.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new Se,response:new Se}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&oe.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:oe.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete s[u]}),n.headers=O.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let c,p=0,b;if(!d){const u=[Oe.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,f),b=u.length,c=Promise.resolve(n);p<b;)c=c.then(u[p++],u[p++]);return c}b=l.length;let g=n;for(p=0;p<b;){const u=l[p++],m=l[p++];try{g=u(g)}catch(w){m.call(this,w);break}}try{c=Oe.call(this,g)}catch(u){return Promise.reject(u)}for(p=0,b=f.length;p<b;)c=c.then(f[p++],f[p++]);return c}getUri(t){t=B(this.defaults,t);const n=Ke(t.baseURL,t.url);return $e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(B(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const M=H;class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new D(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(o){t=o}),cancel:t}}}const mn=me;function hn(e){return function(n){return e.apply(null,n)}}function yn(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});const bn=se;function Xe(e){const t=new M(e),n=Pe(M.prototype.request,t);return a.extend(n,M.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Xe(B(e,o))},n}const y=Xe(fe);y.Axios=M;y.CanceledError=D;y.CancelToken=mn;y.isCancel=Ve;y.VERSION=Ge;y.toFormData=G;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=hn;y.isAxiosError=yn;y.mergeConfig=B;y.AxiosHeaders=O;y.formToJSON=e=>ze(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=We.getAdapter;y.HttpStatusCode=bn;y.default=y;const he=y,ye="https://books-backend.p.goit.global/books/";async function gn(e){try{const t=await he.get(`${ye}category?category=${e}`);if(t.status!==200)throw new Error(`Request failed with status: ${t.status}`);return t.data}catch(t){z.Notify.failure("Error fetching category-list. Please try again later"),console.log(t.message);return}}async function Ye(e){try{const t=await he.get(`${ye}${e}`);if(t.status!==200)throw new Error(`Request failed with status: ${t.status}`);return t.data}catch(t){z.Notify.failure("Error fetching category-list. Please try again later"),console.log(t.message);return}}async function wn(){try{const e=await he.get(`${ye}top-books`);if(e.status!==200)throw new Error(`Request failed with status: ${e.status}`);return e.data}catch(e){z.Notify.failure("Error fetching category-list. Please try again later"),console.log(e.message);return}}async function En(e){return e.map(n=>{if(n.books.length===0){z.Notify.failure("Sorry, there are no books matching your search query. Please try again.");return}const r=Sn(n);return`<div class="category-box">
        <h3 class = "category-titel">${n.list_name}</h3>
        <ul class="books-list">
            ${r}
        </ul>
             <button class="more-btn js-more-btn" type="button" data-category="${n.list_name}">see more</button>
         </div>`}).join("")}function Sn(e){return e.books.map(({_id:n,author:r,book_image:o,title:s})=>` <li class="book-card js-book-card" data-id="${n}">
                <div class="img-thumb">
                <img class = "book-img" src="${o}" alt="${s}">
                <div class="quick-view" data-id-book="${n}"><p>quick view</p></div>
                </div>
                <h4 class="book-name">${s}</h4>
                <p class="author">${r}</p>
            </li>`).join("")}const Qe=document.querySelector(".js-books-field-wrapper"),An=document.querySelector("#field-categories");kn();async function kn(){try{const e=await wn(),t=await En(e);Qe.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".js-more-btn").forEach(r=>r.addEventListener("click",Rn))}catch(e){console.log(e)}}function Rn(e){console.log("test. Далі має зʼявитись div Павла"),Qe.hidden=!0,An.hidden=!1}const ie=document.querySelector("[data-modal-windows]"),On=document.querySelector("[data-modal-close]"),$=document.querySelector(".modal"),Tn=document.querySelector(".shopping-button-modal"),L=document.querySelector(".add-book-modal"),x=document.querySelector(".remove-book-modal"),N=document.querySelector(".text-after-buy"),xn=document.querySelector(".js-books-field-wrapper"),Le=document.querySelector(".modal-markup");On.addEventListener("click",ae);Tn.addEventListener("click",Nn);xn.addEventListener("click",Pn);let I="";const C="shoping-list";let Ne=[],J={};function Ln(){ie.style.display="block",document.body.classList.add("modal-open"),L.removeAttribute("hidden"),window.addEventListener("click",t),document.addEventListener("keydown",e);function e(r){r.code==="Escape"&&(ae(),document.removeEventListener("keydown",e))}function t(r){r.target==ie&&ae()}setTimeout(()=>{$.style.opacity=1,$.style.transform="translate(-50%, -50%)"},50);const n=JSON.parse(localStorage.getItem(C));if(!n||n.length===0){L.removeAttribute("hidden"),x.setAttribute("hidden",!0),N.setAttribute("hidden",!0);return}else n.find(o=>o._id===I)?(L.setAttribute("hidden",!0),x.removeAttribute("hidden"),N.removeAttribute("hidden")):(L.removeAttribute("hidden"),x.setAttribute("hidden",!0),N.setAttribute("hidden",!0))}function ae(){$.style.opacity=0,$.style.transform="translate(-50%, -40%)",setTimeout(()=>{ie.style.display="none"},200),document.body.classList.remove("modal-open"),setTimeout(()=>{x.setAttribute("hidden",!0),N.setAttribute("hidden",!0)},250)}function Nn(){x.hasAttribute("hidden")?(L.setAttribute("hidden",!0),x.removeAttribute("hidden"),N.removeAttribute("hidden"),Cn()):(L.removeAttribute("hidden"),x.setAttribute("hidden",!0),N.setAttribute("hidden",!0),Bn())}function Cn(){const e=JSON.parse(localStorage.getItem(C));!e||e.length===0?(Ne.push(J),localStorage.setItem(C,JSON.stringify(Ne))):(e.push(J),localStorage.setItem(C,JSON.stringify(e)))}function Bn(){const e=J._id;console.log(e);const t=JSON.parse(localStorage.getItem(C)),n=t.findIndex(r=>r._id===e);t.splice(n,1),localStorage.setItem(C,JSON.stringify(t))}function Pn(e){const n=e.target.closest(".quick-view");if(n)I=n.getAttribute("data-id-book");else return;Ln(),vn(I),Fn(I)}async function Fn(e){try{J=await Ye(e)}catch(t){throw new Error(t)}}function _n({book_image:e,title:t,author:n,amazon_product_url:r}){return`<div class="book-inform-modal-wraper">
             <div class="modal-img-wrapper">
                 <img class="modal-img" src="${e}" alt="book-image" />
             </div>

                <div class="text-infor-wrapper">
                     <p class="book-header-modal">${t}</p>
                     <p class="book-author-modal">${n}</p>
                     <p class="book-description-modal">
      This book provides the reader with deep insights into the lives and
      experiences of its characters, revealing the complexities of human nature and creating a captivating narrative that leaves a lasting impression on the hearts of readers.
                    </p>

                    <div class="marketplace-img-modal-wrapper">
                    <a
                      href="${r}"
                      target="blank"
                      ><img
                        alt="marketplace"
                        class="marketplace-img-modal"
                        srcset="
                      ../images/mask_group_corrected.png,
                      ../images/mask_group_corrected@2x.png 2x
                      "/>
                      </a>
                    
                    <img  alt="book" class="book-img-modal" 
                    srcset="
                    ../images/image_1.png,
                    ../images/image_1@2x.png 2x
                    "/>
                  
                  </div>

             <div class="marketplace-img-modal-wrapper"></div>
            </div>
         </div>`}async function vn(e){Le.innerHTML="";try{const t=await Ye(e);Le.insertAdjacentHTML("beforeend",_n(t))}catch(t){throw new Error(t)}}const Ze=document.querySelector(".all-category__list"),Dn=document.querySelector(".field-books"),ce=document.querySelector(".field-title");document.querySelector(".books-list");const Ce=document.querySelector(".all-books-title");Ze.addEventListener("click",qn);async function qn(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.name;try{if(t==="All categories")Ce.style.display="block",ce.style.display="none",Be(),e.target.classList.add("dedicated-category");else{Ce.style.display="none",ce.style.display="block";const n=await gn(t),r=await Un(n,t);Dn.innerHTML=r,Be(),e.target.classList.add("dedicated-category")}}catch(n){console.error(n.message)}}function Be(){Ze.querySelectorAll(".dedicated-category").forEach(t=>t.classList.remove("dedicated-category"))}async function Un(e,t){return ce.innerHTML=`<h2 class="field-title">${t}</h2>`,e.map(({author:r,title:o,book_image:s,_id:i})=>{}).join("")}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu-1"),r=document.querySelector(".js-close-menu-2"),o=document.querySelector("#js-icon");let s=!1;const i=()=>{s=!s,s?o.setAttribute("href","/images/sprite.svg#icon-x-close"):o.setAttribute("href","/images/sprite.svg#icon-gamburger"),t.setAttribute("aria-expanded",s),e.classList.toggle("is-open",s),s?document.addEventListener("keydown",d):document.removeEventListener("keydown",d)},l=()=>{s=!1,o.setAttribute("href","/images/sprite.svg#icon-gamburger"),e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),document.removeEventListener("click",l),document.removeEventListener("keydown",d)},d=f=>{f.key==="Escape"&&l()};t.addEventListener("click",i),n.addEventListener("click",i),r.addEventListener("click",i),document.addEventListener("keydown",d),window.matchMedia("(min-width: 768px)").addEventListener("change",f=>{f.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const jn={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("is-hidden")},hide(){this.el.classList.add("is-hidden")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};jn.addEventListener();const Mn=document.querySelector("#toggle-slider");Mn.addEventListener("change",e=>{e.preventDefault(),localStorage.getItem("theme")==="theme-dark"?localStorage.removeItem("theme"):localStorage.setItem("theme","theme-dark"),et()});function et(){try{localStorage.getItem("theme")==="theme-dark"?document.querySelector("html").classList.add("theme-dark"):document.querySelector("html").classList.remove("theme-dark")}catch{}}et();
