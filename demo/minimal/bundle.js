!function(){var t,e,r=function(t){var e;return function(r){return e||t(e={exports:{},parent:r},e.exports),e.exports}},n=r((function(t,e){(function(e){(function(){"use strict";function r(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function n(t,e){for(var r,n="",i=0,o=-1,a=0,s=0;s<=t.length;++s){if(s<t.length)r=t.charCodeAt(s);else{if(47===r)break;r=47}if(47===r){if(o===s-1||1===a);else if(o!==s-1&&2===a){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var u=n.lastIndexOf("/");if(u!==n.length-1){-1===u?(n="",i=0):i=(n=n.slice(0,u)).length-1-n.lastIndexOf("/"),o=s,a=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=s,a=0;continue}e&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+t.slice(o+1,s):n=t.slice(o+1,s),i=s-o-1;o=s,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var i={resolve:function(){for(var t,i="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var s;a>=0?s=arguments[a]:(void 0===t&&(t=e.cwd()),s=t),r(s),0!==s.length&&(i=s+"/"+i,o=47===s.charCodeAt(0))}return i=n(i,!o),o?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(t){if(r(t),0===t.length)return".";var e=47===t.charCodeAt(0),i=47===t.charCodeAt(t.length-1);return 0!==(t=n(t,!e)).length||e||(t="."),t.length>0&&i&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return r(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,e=0;e<arguments.length;++e){var n=arguments[e];r(n),n.length>0&&(void 0===t?t=n:t+="/"+n)}return void 0===t?".":i.normalize(t)},relative:function(t,e){if(r(t),r(e),t===e)return"";if((t=i.resolve(t))===(e=i.resolve(e)))return"";for(var n=1;n<t.length&&47===t.charCodeAt(n);++n);for(var o=t.length,a=o-n,s=1;s<e.length&&47===e.charCodeAt(s);++s);for(var u=e.length-s,l=a<u?a:u,f=-1,c=0;c<=l;++c){if(c===l){if(u>l){if(47===e.charCodeAt(s+c))return e.slice(s+c+1);if(0===c)return e.slice(s+c)}else a>l&&(47===t.charCodeAt(n+c)?f=c:0===c&&(f=0));break}var h=t.charCodeAt(n+c);if(h!==e.charCodeAt(s+c))break;47===h&&(f=c)}var g="";for(c=n+f+1;c<=o;++c)c!==o&&47!==t.charCodeAt(c)||(0===g.length?g+="..":g+="/..");return g.length>0?g+e.slice(s+f):(s+=f,47===e.charCodeAt(s)&&++s,e.slice(s))},_makeLong:function(t){return t},dirname:function(t){if(r(t),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,i=-1,o=!0,a=t.length-1;a>=1;--a)if(47===(e=t.charCodeAt(a))){if(!o){i=a;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":t.slice(0,i)},basename:function(t,e){if(void 0!==e&&"string"!=typeof e)throw new TypeError('"ext" argument must be a string');r(t);var n,i=0,o=-1,a=!0;if(void 0!==e&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var s=e.length-1,u=-1;for(n=t.length-1;n>=0;--n){var l=t.charCodeAt(n);if(47===l){if(!a){i=n+1;break}}else-1===u&&(a=!1,u=n+1),s>=0&&(l===e.charCodeAt(s)?-1==--s&&(o=n):(s=-1,o=u))}return i===o?o=u:-1===o&&(o=t.length),t.slice(i,o)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!a){i=n+1;break}}else-1===o&&(a=!1,o=n+1);return-1===o?"":t.slice(i,o)},extname:function(t){r(t);for(var e=-1,n=0,i=-1,o=!0,a=0,s=t.length-1;s>=0;--s){var u=t.charCodeAt(s);if(47!==u)-1===i&&(o=!1,i=s+1),46===u?-1===e?e=s:1!==a&&(a=1):-1!==e&&(a=-1);else if(!o){n=s+1;break}}return-1===e||-1===i||0===a||1===a&&e===i-1&&e===n+1?"":t.slice(e,i)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+"/"+n:n}(0,t)},parse:function(t){r(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return e;var n,i=t.charCodeAt(0),o=47===i;o?(e.root="/",n=1):n=0;for(var a=-1,s=0,u=-1,l=!0,f=t.length-1,c=0;f>=n;--f)if(47!==(i=t.charCodeAt(f)))-1===u&&(l=!1,u=f+1),46===i?-1===a?a=f:1!==c&&(c=1):-1!==a&&(c=-1);else if(!l){s=f+1;break}return-1===a||-1===u||0===c||1===c&&a===u-1&&a===s+1?-1!==u&&(e.base=e.name=0===s&&o?t.slice(1,u):t.slice(s,u)):(0===s&&o?(e.name=t.slice(1,a),e.base=t.slice(1,u)):(e.name=t.slice(s,a),e.base=t.slice(s,u)),e.ext=t.slice(a,u)),s>0?e.dir=t.slice(0,s-1):o&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,t.exports=i}).call(this)}).call(this,o)})),i=r((function(t,e){})),o={},a=o={};function s(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(r){t=s}try{e="function"==typeof clearTimeout?clearTimeout:u}catch(r){e=u}}();var f,c=[],h=!1,g=-1;function m(){h&&f&&(h=!1,f.length?c=f.concat(c):g=-1,c.length&&p())}function p(){if(!h){var t=l(m);h=!0;for(var r=c.length;r;){for(f=c,c=[];++g<r;)f&&f[g].run();g=-1,r=c.length}f=null,h=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===u||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(r){try{return e.call(null,t)}catch(r){return e.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new d(t,e)),1!==c.length||h||l(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0};var b={exports:{}};(function(t,e,r){(function(){var o,a=(o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,void 0!==e&&(o=o||e),function(e){var a,s;(e=void 0!==(e=e||{})?e:{}).ready=new Promise((function(t,e){a=t,s=e}));var u,l={};for(u in e)e.hasOwnProperty(u)&&(l[u]=e[u]);var f,c,h=[],g=function(t,e){throw e},m=!1,p=!1;m="object"==typeof window,p="function"==typeof importScripts,f="object"==typeof t&&"object"==typeof t.versions&&"string"==typeof t.versions.node,c=!m&&!f&&!p;var d,y,b,v,A="";f?(A=p?n({}).dirname(A)+"/":r+"/",d=function(t,e){return b||(b=i({})),v||(v=n({})),t=v.normalize(t),b.readFileSync(t,e?null:"utf8")},y=function(t){var e=d(t,!0);return e.buffer||(e=new Uint8Array(e)),e},t.argv.length>1&&t.argv[1].replace(/\\/g,"/"),h=t.argv.slice(2),t.on("uncaughtException",(function(t){if(!(t instanceof rt))throw t})),t.on("unhandledRejection",N),g=function(e){t.exit(e)},e.inspect=function(){return"[Emscripten Module object]"}):c?("undefined"!=typeof read&&(d=function(t){return read(t)}),y=function(t){return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):read(t,"binary")},"undefined"!=typeof scriptArgs?h=scriptArgs:void 0!==arguments&&(h=arguments),"function"==typeof quit&&(g=function(t){quit(t)}),"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(m||p)&&(p?A=self.location.href:document.currentScript&&(A=document.currentScript.src),o&&(A=o),A=0!==A.indexOf("blob:")?A.substr(0,A.lastIndexOf("/")+1):"",d=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},p&&(y=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var w,E,T,_,x=e.print||console.log.bind(console),C=e.printErr||console.warn.bind(console);for(u in l)l.hasOwnProperty(u)&&(e[u]=l[u]);l=null,e.arguments&&(h=e.arguments),e.thisProgram&&e.thisProgram,e.quit&&(g=e.quit),e.wasmBinary&&(w=e.wasmBinary),e.noExitRuntime&&(E=e.noExitRuntime),"object"!=typeof WebAssembly&&N("no native wasm support detected");var R,S,F,P=!1,k="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function I(t,e,r){for(var n=e+r,i=e;t[i]&&!(i>=n);)++i;if(i-e>16&&t.subarray&&k)return k.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}var H,L=e.INITIAL_MEMORY||16777216;(T=e.wasmMemory?e.wasmMemory:new WebAssembly.Memory({initial:L/65536,maximum:L/65536}))&&(R=T.buffer),L=R.byteLength,R=H=R,e.HEAP8=new Int8Array(H),e.HEAP16=new Int16Array(H),e.HEAP32=F=new Int32Array(H),e.HEAPU8=S=new Uint8Array(H),e.HEAPU16=new Uint16Array(H),e.HEAPU32=new Uint32Array(H),e.HEAPF32=new Float32Array(H),e.HEAPF64=new Float64Array(H);var j=[],M=[],q=[],O=[],U=0,W=null,B=null;function N(t){e.onAbort&&e.onAbort(t),C(t+=""),P=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(t);throw s(r),r}function D(t,e){return String.prototype.startsWith?t.startsWith(e):0===t.indexOf(e)}e.preloadedImages={},e.preloadedAudios={};var z="data:application/octet-stream;base64,";function G(t){return D(t,z)}var $="file://";function Y(t){return D(t,$)}var X,J="triangle.out.wasm";function Q(){try{if(w)return new Uint8Array(w);if(y)return y(J);throw"both async and sync fetching of the wasm failed"}catch(C){N(C)}}function K(t){for(;t.length>0;){var r=t.shift();if("function"!=typeof r){var n=r.func;"number"==typeof n?void 0===r.arg?_.get(n)():_.get(n)(r.arg):n(void 0===r.arg?null:r.arg)}else r(e)}}G(J)||(X=J,J=e.locateFile?e.locateFile(X,A):A+X);var V={mappings:{},buffers:[null,[],[]],printChar:function(t,e){var r=V.buffers[t];0===e||10===e?((1===t?x:C)(I(r,0)),r.length=0):r.push(e)},varargs:void 0,get:function(){return V.varargs+=4,F[V.varargs-4>>2]},getStr:function(t){return function(t,e){return t?I(S,t,void 0):""}(t)},get64:function(t,e){return t}};M.push({func:function(){et()}});var Z,tt={d:function(t,e,r){S.copyWithin(t,e,e+r)},e:function(t){N("OOM")},f:function(t){!function(t,r){E||(e.onExit&&e.onExit(t),P=!0),g(t,new rt(t))}(t)},c:function(t,e,r,n){for(var i=0,o=0;o<r;o++){for(var a=F[e+8*o>>2],s=F[e+(8*o+4)>>2],u=0;u<s;u++)V.printChar(t,S[a+u]);i+=s}return F[n>>2]=i,0},b:function(t){var e=Date.now();return F[t>>2]=e/1e3|0,F[t+4>>2]=e%1e3*1e3|0,0},a:T},et=(function(){var t={a:tt};function r(t,r){var n=t.exports;e.asm=n,_=e.asm.g,function(t){if(U--,e.monitorRunDependencies&&e.monitorRunDependencies(U),0==U&&(null!==W&&(clearInterval(W),W=null),B)){var r=B;B=null,r()}}()}function n(t){r(t.instance)}function i(e){return(w||!m&&!p||"function"!=typeof fetch||Y(J)?Promise.resolve().then(Q):fetch(J,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+J+"'";return t.arrayBuffer()})).catch((function(){return Q()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){C("failed to asynchronously prepare wasm: "+t),N(t)}))}if(U++,e.monitorRunDependencies&&e.monitorRunDependencies(U),e.instantiateWasm)try{return e.instantiateWasm(t,r)}catch(o){return C("Module.instantiateWasm callback failed with error: "+o),!1}!function(){if(w||"function"!=typeof WebAssembly.instantiateStreaming||G(J)||Y(J)||"function"!=typeof fetch)return i(n);fetch(J,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(n,(function(t){return C("wasm streaming compile failed: "+t),C("falling back to ArrayBuffer instantiation"),i(n)}))}))}()}(),e.___wasm_call_ctors=function(){return(et=e.___wasm_call_ctors=e.asm.h).apply(null,arguments)});function rt(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function nt(t){function r(){Z||(Z=!0,e.calledRun=!0,P||(K(M),K(q),a(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)t=e.postRun.shift(),O.unshift(t);var t;K(O)}()))}t=t||h,U>0||(function(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)t=e.preRun.shift(),j.unshift(t);var t;K(j)}(),U>0||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),r()}),1)):r()))}if(e._malloc=function(){return(e._malloc=e.asm.i).apply(null,arguments)},e._free=function(){return(e._free=e.asm.j).apply(null,arguments)},e._triangulate=function(){return(e._triangulate=e.asm.k).apply(null,arguments)},e.stringToUTF8=function(t,e,r){return function(t,e,r,n){if(!(n>0))return 0;for(var i=r,o=r+n-1,a=0;a<t.length;++a){var s=t.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++a)),s<=127){if(r>=o)break;e[r++]=s}else if(s<=2047){if(r+1>=o)break;e[r++]=192|s>>6,e[r++]=128|63&s}else if(s<=65535){if(r+2>=o)break;e[r++]=224|s>>12,e[r++]=128|s>>6&63,e[r++]=128|63&s}else{if(r+3>=o)break;e[r++]=240|s>>18,e[r++]=128|s>>12&63,e[r++]=128|s>>6&63,e[r++]=128|63&s}}return e[r]=0,r-i}(t,S,e,r)},e.lengthBytesUTF8=function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&t.charCodeAt(++r)),n<=127?++e:e+=n<=2047?2:n<=65535?3:4}return e},B=function t(){Z||nt(),Z||(B=t)},e.run=nt,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return E=!0,nt(),e.ready});"object"==typeof b.exports?b.exports=a:"function"==typeof define&&define.amd?define([],(function(){return a})):"object"==typeof b.exports&&(b.exports.Module=a)}).call(this)}).call(this,o,"/triangle.out.js","/"),b=b.exports;let v={};const A=(t,e=Int32Array)=>{if(!t||!t.length)return null;const r=T(t,e),n=v._malloc(r.length*r.BYTES_PER_ELEMENT),i=n/r.BYTES_PER_ELEMENT,o=E(e);return v[o].subarray(i,i+r.length).set(r),n},w=(t,e,r=Int32Array)=>{if(!t)return null;const n=t/r.BYTES_PER_ELEMENT,i=E(r);return v[i].subarray(n,n+e)},E=t=>{switch(t){case Float64Array:return"HEAPF64";case Int32Array:return"HEAP32";default:return"HEAP8"}},T=(t,e)=>t.constructor==e?t:new e(t);class _{static get LENGTH(){return 23}constructor(t={}){this.ptr=v._malloc(_.LENGTH*Int32Array.BYTES_PER_ELEMENT),this.arr=w(this.ptr,_.LENGTH),this.arr.set(new Int32Array(_.LENGTH));for(const e in t)e in this&&(this[e]=t[e])}destroy(t){v._free(this.arr[0]),v._free(this.arr[1]),v._free(this.arr[2]),v._free(this.arr[5]),v._free(this.arr[6]),v._free(this.arr[7]),v._free(this.arr[8]),v._free(this.arr[12]),v._free(this.arr[13]),v._free(this.arr[19]),v._free(this.arr[20]),v._free(this.arr[21]),v._free(this.ptr),t&&(v._free(this.arr[15]),v._free(this.arr[17]))}set pointlist(t){this.arr[0]=A(t,Float64Array),this.arr[3]=t?~~(.5*t.length):0}set pointattributelist(t){this.arr[1]=A(t,Float64Array),this.arr[4]=t?~~(t.length/this.numberofpoints):0}set pointmarkerlist(t){this.arr[2]=A(t)}set numberofpoints(t){}set numberofpointattributes(t){}set trianglelist(t){this.arr[5]=A(t),this.arr[9]=t?~~(t.length/3):0}set triangleattributelist(t){this.arr[6]=A(t,Float64Array),this.arr[11]=t?~~(t.length/this.numberoftriangles):0}set trianglearealist(t){this.arr[7]=A(t,Float64Array)}set neighborlist(t){this.arr[8]=A(t)}set numberoftriangles(t){}set numberofcorners(t){}set numberoftriangleattributes(t){}set segmentlist(t){this.arr[12]=A(t),this.arr[14]=t?~~(.5*t.length):0}set segmentmarkerlist(t){this.arr[13]=A(t)}set numberofsegments(t){}set holelist(t){this.arr[15]=A(t,Float64Array),this.arr[16]=t?~~(.5*t.length):0}set numberofholes(t){}set regionlist(t){this.arr[17]=A(t,Float64Array),this.arr[18]=t?~~(.25*t.length):0}set numberofregions(t){}set edgelist(t){this.arr[19]=A(t),this.arr[22]=t?~~(.5*t.length):0}set edgemarkerlist(t){this.arr[20]=A(t)}set normlist(t){this.arr[21]=A(t,Float64Array)}set numberofedges(t){}get pointlist(){return w(this.arr[0],2*this.numberofpoints,Float64Array)}get pointattributelist(){return w(this.arr[1],this.numberofpointattributes*this.numberofpoints,Float64Array)}get pointmarkerlist(){return w(this.arr[2],this.numberofpoints)}get numberofpoints(){return this.arr[3]}get numberofpointattributes(){return this.arr[4]}get trianglelist(){return w(this.arr[5],3*this.numberoftriangles)}get triangleattributelist(){return w(this.arr[6],this.numberoftriangleattributes*this.numberoftriangles,Float64Array)}get trianglearealist(){return w(this.arr[7],this.numberoftriangles,Float64Array)}get neighborlist(){return w(this.arr[8],3*this.numberoftriangles)}get numberoftriangles(){return this.arr[9]}get numberofcorners(){return this.arr[10]}get numberoftriangleattributes(){return this.arr[11]}get segmentlist(){return w(this.arr[12],2*this.numberofsegments)}get segmentmarkerlist(){return w(this.arr[13],this.numberofsegments)}get numberofsegments(){return this.arr[14]}get holelist(){return w(this.arr[15],2*this.numberofholes,Float64Array)}get numberofholes(){return this.arr[16]}get regionlist(){return w(this.arr[17],4*this.numberofregions,Float64Array)}get numberofregions(){return this.arr[18]}get edgelist(){return w(this.arr[19],2*this.numberofedges)}get edgemarkerlist(){return w(this.arr[20],this.numberofedges)}get normlist(){return w(this.arr[21],2*this.numberofedges,Float64Array)}get numberofedges(){return this.arr[22]}}var x=t=>new Promise((e,r)=>{b({locateFile:(e,r)=>t||r+e}).then(t=>{v=t,e()})}),C=(t,e,r,n=null)=>{const i=(t=>{const e=v.lengthBytesUTF8(t)+1,r=v._malloc(e);return v.stringToUTF8(t,r,e),r})(((t,e,r=null)=>{if("string"==typeof t)return t;"object"==typeof t&&t||(t={});let n="";return e.numberofsegments&&(n+="p"),null!==r&&(n+="v"),n+="z",!1!==t.quiet&&(n+="Q"),!0===t.refine&&(n+="r"),!0===t.regionAttr&&(n+="A"),!0===t.convexHull&&(n+="c"),!0===t.ccdt&&(n+="D"),!0===t.jettison&&(n+="j"),!0===t.edges&&(n+="e"),!0===t.neighbors&&(n+="n"),!0===t.quadratic&&(n+="o2"),!1===t.bndMarkers&&(n+="B"),!1===t.holes&&(n+="O"),"number"==typeof t.steiner&&(n=`${n}S${t.steiner}`),"number"==typeof t.quality?n=`${n}q${t.quality}`:!0===t.quality&&(n+="q"),"number"==typeof t.area?n=`${n}a${t.area}`:!0===t.area&&(n+="a"),!1===t.quiet&&console.log("Switches:",n),n})(t,e,n)),o=n?n.ptr:null;v._triangulate(i,e.ptr,r.ptr,o),v._free(i)},R=t=>new _(t),S=(t,e)=>{t.destroy(e)},F=(t,e=2)=>{if(!t)return null;const r=[],n=t.length/e;for(var i=0;i<n;i++){const n=[];for(let r=0;r<e;r++)n.push(t[i*e+r]);r.push(n)}return r};const P=document.querySelector("canvas"),k=P.getContext("2d");P.width=640,P.height=640;const I={pointlist:[-1,-1,1,-1,1,1,-1,1]};x("../../triangle.out.wasm").then(()=>{const t=R(I),e=R();C({quality:!0},t,e),H(e),S(t),S(e)});const H=t=>{const e=F(t.pointlist),r=F(t.trianglelist,3);let n,i;((t,e,r)=>{for(let n=0;n<t.length;n++)t[n][0]*=e,t[n][1]*=r})(e,.4*P.width,.4*P.height),k.fillStyle="#eee",k.fillRect(0,0,P.width,P.height),k.save(),k.translate(.5*P.width,.5*P.height),k.fillStyle="#000",k.lineWidth=2;for(let a=0;a<e.length;a++)n=e[a][0],i=e[a][1],k.beginPath(),k.arc(n,i,3,0,2*Math.PI),k.fill();if(r){let t,n,i;for(var o=0;o<r.length;o++)t=r[o][0],n=r[o][1],i=r[o][2],k.beginPath(),k.moveTo(e[t][0],e[t][1]),k.lineTo(e[n][0],e[n][1]),k.lineTo(e[i][0],e[i][1]),k.closePath(),k.stroke()}k.restore()}}();