/** History.js */
window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!="undefined"&&c.init()}(window),function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"";return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&&g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&&i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,"statechange"),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")})},typeof g.init!="undefined"&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){return typeof m.Adapter=="undefined"?!1:(typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;return a+="/",a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&&c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a=="undefined"?b=m.savedStates[m.savedStates.length-1]:a<0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e,f;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&&!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&&(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!="undefined"?m.busy.flag=a:typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a>=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData("state",b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem("History.store"))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem("History.store",k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor==="Apple Computer, Inc."||(e.appCodeName||"")==="Mozilla")m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})}},m.init()}(window)




/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010, John Dyer (http://johndyer.me)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/var mejs=mejs||{};mejs.version="2.1.6";mejs.meIndex=0;mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg"]}]};
mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>';return b.firstChild.href},getScriptPath:function(a){for(var b=0,c,d="",e="",f,g=document.getElementsByTagName("script");b<g.length;b++){f=g[b].src;for(c=0;c<a.length;c++){e=a[c];if(f.indexOf(e)>-1){d=f.substring(0,
f.indexOf(e));break}}if(d!=="")break}return d},secondsToTimeCode:function(a,b){a=Math.round(a);var c,d=Math.floor(a/60);if(d>=60){c=Math.floor(d/60);d%=60}c=c===undefined?"00":c>=10?c:"0"+c;d=d>=10?d:"0"+d;a=Math.floor(a%60);a=a>=10?a:"0"+a;return(c>0||b===true?c+":":"")+d+":"+a},timeCodeToSeconds:function(a){a=a.split(":");return a[0]*60*60+a[1]*60+parseFloat(a[2].replace(",","."))}};
mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];b[1]=b[1]||0;b[2]=b[2]||0;return c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?true:false},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e=[0,0,0],f;if(typeof this.nav.plugins!="undefined"&&typeof this.nav.plugins[a]=="object"){if((c=this.nav.plugins[a].description)&&
!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)){e=c.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(a=0;a<e.length;a++)e[a]=parseInt(e[a].match(/\d+/),10)}}else if(typeof window.ActiveXObject!="undefined")try{if(f=new ActiveXObject(c))e=d(f)}catch(g){}return e}};
mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[];if(a=a.GetVariable("$version")){a=a.split(" ")[1].split(",");b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}return b});
mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(d,e,f,g){for(;d.isVersionSupported(e[0]+"."+e[1]+"."+e[2]+"."+e[3]);)e[f]+=g;e[f]-=g};c(a,b,0,1);c(a,b,1,1);c(a,b,2,1E4);c(a,b,2,1E3);c(a,b,2,100);c(a,b,2,10);c(a,b,2,1);c(a,b,3,1);return b});
if(mejs.PluginDetector.ua.match(/android 2\.[12]/)!==null)HTMLMediaElement.canPlayType=function(a){return a.match(/video\/(mp4|m4v)/gi)!==null?"probably":""};
mejs.MediaFeatures={init:function(){var a=mejs.PluginDetector.nav,b=mejs.PluginDetector.ua.toLowerCase(),c,d=["source","track","audio","video"];this.isiPad=b.match(/ipad/i)!==null;this.isiPhone=b.match(/iphone/i)!==null;this.isAndroid=b.match(/android/i)!==null;this.isIE=a.appName.toLowerCase().indexOf("microsoft")!=-1;this.isChrome=b.match(/chrome/gi)!==null;for(a=0;a<d.length;a++)c=document.createElement(d[a]);this.hasNativeFullScreen=typeof c.webkitEnterFullScreen!=="undefined";if(this.isChrome)this.hasNativeFullScreen=
false;if(this.hasNativeFullScreen&&b.match(/mac os x 10_5/i))this.hasNativeFullScreen=false}};mejs.MediaFeatures.init();
mejs.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){if(typeof a=="string")this.src=a;else{var b,c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type))this.src=c.src}}},setVideoSize:function(a,b){this.width=a;this.height=b}};mejs.PluginMediaElement=function(a,b,c){this.id=a;this.pluginType=b;this.src=c;this.events={}};
mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){this.pluginApi.playMedia();this.paused=false}},load:function(){if(this.pluginApi!=null){this.pluginApi.loadMedia();this.paused=false}},pause:function(){if(this.pluginApi!=null){this.pluginApi.pauseMedia();this.paused=
true}},stop:function(){if(this.pluginApi!=null){this.pluginApi.stopMedia();this.paused=true}},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++){d=e[b];if(mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return true}return false},setSrc:function(a){if(typeof a=="string"){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));this.src=mejs.Utility.absolutizeUrl(a)}else{var b,c;for(b=0;b<a.length;b++){c=
a[b];if(this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));this.src=mejs.Utility.absolutizeUrl(a)}}}},setCurrentTime:function(a){if(this.pluginApi!=null){this.pluginApi.setCurrentTime(a);this.currentTime=a}},setVolume:function(a){if(this.pluginApi!=null){this.pluginApi.setVolume(a);this.volume=a}},setMuted:function(a){if(this.pluginApi!=null){this.pluginApi.setMuted(a);this.muted=a}},setVideoSize:function(a,b){if(this.pluginElement.style){this.pluginElement.style.width=
a+"px";this.pluginElement.style.height=b+"px"}this.pluginApi!=null&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){this.pluginApi!=null&&this.pluginApi.setFullscreen(a)},addEventListener:function(a,b){this.events[a]=this.events[a]||[];this.events[a].push(b)},removeEventListener:function(a,b){if(!a){this.events={};return true}var c=this.events[a];if(!c)return true;if(!b){this.events[a]=[];return true}for(i=0;i<c.length;i++)if(c[i]===b){this.events[a].splice(i,1);return true}return false},
dispatchEvent:function(a){var b,c,d=this.events[a];if(d){c=Array.prototype.slice.call(arguments,1);for(b=0;b<d.length;b++)d[b].apply(null,c)}}};
mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b;this.htmlMediaElements[a]=c},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];switch(b.pluginType){case "flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case "silverlight":b.pluginElement=document.getElementById(b.id);b.pluginApi=b.pluginElement.Content.MediaElementJS}b.pluginApi!=null&&b.success&&b.success(b,
c)},fireEvent:function(a,b,c){var d,e;a=this.pluginMediaElements[a];a.ended=false;a.paused=true;b={type:b,target:a};for(d in c){a[d]=c[d];b[d]=c[d]}e=c.bufferedTime||0;b.target.buffered=b.buffered={start:function(){return 0},end:function(){return e},length:1};a.dispatchEvent(b.type,b)}};
mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight"],enablePluginDebug:false,type:"",pluginPath:"/assets/js/libs/mediaelement/",flashName:"flashmediaelement.swf",enablePluginSmoothing:false,silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,timerRate:250,success:function(){},error:function(){}};
mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)};
mejs.HtmlMediaElementShim={create:function(a,b){var c=mejs.MediaElementDefaults,d=typeof a=="string"?document.getElementById(a):a,e=d.tagName.toLowerCase()=="video",f=typeof d.canPlayType!="undefined",g={method:"",url:""},k=d.getAttribute("poster"),h=d.getAttribute("autoplay"),l=d.getAttribute("preload"),j=d.getAttribute("controls"),n;for(n in b)c[n]=b[n];k=typeof k=="undefined"||k===null?"":k;l=typeof l=="undefined"||l===null||l==="false"?"none":l;h=!(typeof h=="undefined"||h===null||h==="false");
j=!(typeof j=="undefined"||j===null||j==="false");g=this.determinePlayback(d,c,e,f);if(g.method=="native")return this.updateNative(d,c,h,l,g);else if(g.method!=="")return this.createPlugin(d,c,e,g.method,g.url!==null?mejs.Utility.absolutizeUrl(g.url):"",k,h,l,j);else this.createErrorMessage(d,c,g.url!==null?mejs.Utility.absolutizeUrl(g.url):"",k)},determinePlayback:function(a,b,c,d){var e=[],f,g,k={method:"",url:""},h=a.getAttribute("src"),l,j;if(typeof b.type!="undefined"&&b.type!=="")e.push({type:b.type,
url:null});else if(h!="undefined"&&h!==null){g=this.checkType(h,a.getAttribute("type"),c);e.push({type:g,url:h})}else for(f=0;f<a.childNodes.length;f++){g=a.childNodes[f];if(g.nodeType==1&&g.tagName.toLowerCase()=="source"){h=g.getAttribute("src");g=this.checkType(h,g.getAttribute("type"),c);e.push({type:g,url:h})}}if(d&&(b.mode==="auto"||b.mode==="native"))for(f=0;f<e.length;f++)if(a.canPlayType(e[f].type).replace(/no/,"")!==""||a.canPlayType(e[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""){k.method=
"native";k.url=e[f].url;return k}if(b.mode==="auto"||b.mode==="shim")for(f=0;f<e.length;f++){g=e[f].type;for(a=0;a<b.plugins.length;a++){h=b.plugins[a];l=mejs.plugins[h];for(c=0;c<l.length;c++){j=l[c];if(mejs.PluginDetector.hasPluginVersion(h,j.version))for(d=0;d<j.types.length;d++)if(g==j.types[d]){k.method=h;k.url=e[f].url;return k}}}}if(k.method==="")k.url=e[0].url;return k},checkType:function(a,b,c){if(a&&!b){a=a.substring(a.lastIndexOf(".")+1);return(c?"video":"audio")+"/"+a}else return b&&~b.indexOf(";")?
b.substr(0,b.indexOf(";")):b},createErrorMessage:function(a,b,c,d){var e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=a.width+"px";e.style.height=a.height+"px"}catch(f){}e.innerHTML=d!==""?'<a href="'+c+'"><img src="'+d+'" /></a>':'<a href="'+c+'"><span>Download File</span></a>';a.parentNode.insertBefore(e,a);a.style.display="none";b.error(a)},createPlugin:function(a,b,c,d,e,f,g,k,h){var l=f=1,j="me_"+d+"_"+mejs.meIndex++,n=new mejs.PluginMediaElement(j,d,e),o=document.createElement("div"),
m;for(m=a.parentNode;m!==null&&m.tagName.toLowerCase()!="body";){if(m.parentNode.tagName.toLowerCase()=="p"){m.parentNode.parentNode.insertBefore(m,m.parentNode);break}m=m.parentNode}if(c){f=b.videoWidth>0?b.videoWidth:a.getAttribute("width")!==null?a.getAttribute("width"):b.defaultVideoWidth;l=b.videoHeight>0?b.videoHeight:a.getAttribute("height")!==null?a.getAttribute("height"):b.defaultVideoHeight}else if(b.enablePluginDebug){f=320;l=240}n.success=b.success;mejs.MediaPluginBridge.registerPluginElement(j,
n,a);o.className="me-plugin";a.parentNode.insertBefore(o,a);c=["id="+j,"isvideo="+(c?"true":"false"),"autoplay="+(g?"true":"false"),"preload="+k,"width="+f,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"height="+l];if(e!==null)d=="flash"?c.push("file="+mejs.Utility.encodeUrl(e)):c.push("file="+e);b.enablePluginDebug&&c.push("debug=true");b.enablePluginSmoothing&&c.push("smoothing=true");h&&c.push("controls=true");switch(d){case "silverlight":o.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+
j+'" name="'+j+'" width="'+f+'" height="'+l+'"><param name="initParams" value="'+c.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';break;case "flash":if(mejs.MediaFeatures.isIE){d=document.createElement("div");o.appendChild(d);d.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+
j+'" width="'+f+'" height="'+l+'"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+c.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else o.innerHTML='<embed id="'+j+'" name="'+j+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+
b.pluginPath+b.flashName+'" flashvars="'+c.join("&")+'" width="'+f+'" height="'+l+'"></embed>'}a.style.display="none";return n},updateNative:function(a,b,c,d,e){for(var f in mejs.HtmlMediaElement)a[f]=mejs.HtmlMediaElement[f];if(mejs.MediaFeatures.isChrome)if(d==="none"&&!c){a.src="";a.load();a.canceledPreload=true;a.addEventListener("play",function(){if(a.canceledPreload){a.src=e.url;a.load();a.play();a.canceledPreload=false}},false)}else if(c){a.load();a.play()}b.success(a,a);return a}};
window.mejs=mejs;window.MediaElement=mejs.MediaElement;

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010, John Dyer (http://johndyer.me)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */(function(f){mejs.MepDefaults={poster:"",defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,audioWidth:400,audioHeight:30,startVolume:0.8,loop:false,enableAutosize:true,alwaysShowHours:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"]};mejs.mepIndex=0;mejs.MediaElementPlayer=function(a,c){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(a,c);this.options=f.extend({},mejs.MepDefaults,c);this.$media=this.$node=
f(a);this.node=this.media=this.$media[0];if(typeof this.node.player!="undefined")return this.node.player;else this.node.player=this;this.isVideo=this.media.tagName.toLowerCase()==="video";this.init();return this};mejs.MediaElementPlayer.prototype={init:function(){var a=this,c=mejs.MediaFeatures,b=f.extend(true,{},a.options,{success:function(d,e){a.meReady(d,e)},error:function(d){a.handleError(d)}});if(c.isiPad||c.isiPhone){a.$media.attr("controls","controls");a.$media.removeAttr("poster");if(c.isiPad&&
a.media.getAttribute("autoplay")!==null){a.media.load();a.media.play()}}else if(c.isAndroid){if(a.isVideo){if(a.$media.find("source").length>0)a.media.src=a.$media.find('source[src$="mp4"]').attr("src");a.$media.click(function(){a.media.play()})}}else{a.$media.removeAttr("controls");a.id="mep_"+mejs.mepIndex++;a.container=f('<div id="'+a.id+'" class="mejs-container"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
a.container.find(".mejs-mediaelement").append(a.$media);a.controls=a.container.find(".mejs-controls");a.layers=a.container.find(".mejs-layers");if(a.isVideo){a.width=a.options.videoWidth>0?a.options.videoWidth:a.$media[0].getAttribute("width")!==null?a.$media.attr("width"):a.options.defaultVideoWidth;a.height=a.options.videoHeight>0?a.options.videoHeight:a.$media[0].getAttribute("height")!==null?a.$media.attr("height"):a.options.defaultVideoHeight}else{a.width=a.options.audioWidth;a.height=a.options.audioHeight}a.setPlayerSize(a.width,
a.height);b.pluginWidth=a.height;b.pluginHeight=a.width}mejs.MediaElement(a.$media[0],b)},meReady:function(a,c){var b=this,d=mejs.MediaFeatures,e;if(!this.created){this.created=true;b.media=a;b.domNode=c;if(!d.isiPhone&&!d.isAndroid&&!d.isiPad){b.buildposter(b,b.controls,b.layers,b.media);b.buildoverlays(b,b.controls,b.layers,b.media);b.findTracks();for(e in b.options.features){d=b.options.features[e];if(b["build"+d])try{b["build"+d](b,b.controls,b.layers,b.media)}catch(g){}}b.setPlayerSize(b.width,
b.height);b.setControlsSize();if(b.isVideo){b.container.bind("mouseenter",function(){b.controls.css("visibility","visible");b.controls.stop(true,true).fadeIn(200)}).bind("mouseleave",function(){b.media.paused||b.controls.stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden");f(this).css("display","block")})});b.domNode.getAttribute("autoplay")!==null&&b.controls.css("visibility","hidden");b.options.enableAutosize&&b.media.addEventListener("loadedmetadata",function(h){if(b.options.videoHeight<=
0&&b.domNode.getAttribute("height")===null&&!isNaN(h.target.videoHeight)){b.setPlayerSize(h.target.videoWidth,h.target.videoHeight);b.setControlsSize();b.media.setVideoSize(h.target.videoWidth,h.target.videoHeight)}},false)}b.media.addEventListener("ended",function(){b.media.setCurrentTime(0);b.media.pause();b.setProgressRail&&b.setProgressRail();b.setCurrentRail&&b.setCurrentRail();b.options.loop?b.media.play():b.controls.css("visibility","visible")},true);b.media.addEventListener("loadedmetadata",
function(){b.updateDuration&&b.updateDuration();b.updateCurrent&&b.updateCurrent();b.setControlsSize()},true);setTimeout(function(){b.setControlsSize();b.setPlayerSize(b.width,b.height)},50)}b.options.success&&b.options.success(b.media,b.domNode)}},handleError:function(a){this.options.error&&this.options.error(a)},setPlayerSize:function(a,c){this.width=parseInt(a,10);this.height=parseInt(c,10);this.container.width(this.width).height(this.height);this.layers.children(".mejs-layer").width(this.width).height(this.height)},
setControlsSize:function(){var a=0,c=0,b=this.controls.find(".mejs-time-rail"),d=this.controls.find(".mejs-time-total");this.controls.find(".mejs-time-current");this.controls.find(".mejs-time-loaded");others=b.siblings();others.each(function(){if(f(this).css("position")!="absolute")a+=f(this).outerWidth(true)});c=this.controls.width()-a-(b.outerWidth(true)-b.outerWidth(false));b.width(c);d.width(c-(d.outerWidth(true)-d.width()));this.setProgressRail&&this.setProgressRail();this.setCurrentRail&&this.setCurrentRail()},
buildposter:function(a,c,b,d){var e=f('<div class="mejs-poster mejs-layer"><img /></div>').appendTo(b);c=a.$media.attr("poster");b=e.find("img").width(a.width).height(a.height);if(a.options.poster!="")b.attr("src",a.options.poster);else c!==""&&c!=null?b.attr("src",c):e.remove();d.addEventListener("play",function(){e.hide()},false)},buildoverlays:function(a,c,b,d){if(a.isVideo){var e=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(b),
g=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(b),h=f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(b).click(function(){d.paused?d.play():d.pause()});d.addEventListener("play",function(){h.hide();g.hide()},false);d.addEventListener("pause",function(){h.show()},false);d.addEventListener("loadstart",function(){e.show()},false);d.addEventListener("canplay",function(){e.hide()},
false);d.addEventListener("error",function(){e.hide();g.show();g.find("mejs-overlay-error").html("Error loading this resource")},false)}},findTracks:function(){var a=this,c=a.$media.find("track");a.tracks=[];c.each(function(){a.tracks.push({srclang:f(this).attr("srclang").toLowerCase(),src:f(this).attr("src"),kind:f(this).attr("kind"),entries:[],isLoaded:false})})},changeSkin:function(a){this.container[0].className="mejs-container "+a;this.setPlayerSize();this.setControlsSize()},play:function(){this.media.play()},
pause:function(){this.media.pause()},load:function(){this.media.load()},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)}};jQuery.fn.mediaelementplayer=function(a){return this.each(function(){new mejs.MediaElementPlayer(f(this),a)})};window.MediaElementPlayer=
mejs.MediaElementPlayer})(jQuery);
(function(f){MediaElementPlayer.prototype.buildplaypause=function(a,c,b,d){var e=f('<div class="mejs-button mejs-playpause-button mejs-play" type="button"><button type="button"></button></div>').appendTo(c).click(function(g){g.preventDefault();d.paused?d.play():d.pause();return false});d.addEventListener("play",function(){e.removeClass("mejs-play").addClass("mejs-pause")},false);d.addEventListener("playing",function(){e.removeClass("mejs-play").addClass("mejs-pause")},false);d.addEventListener("pause",
function(){e.removeClass("mejs-pause").addClass("mejs-play")},false);d.addEventListener("paused",function(){e.removeClass("mejs-pause").addClass("mejs-play")},false)}})(jQuery);
(function(f){MediaElementPlayer.prototype.buildstop=function(a,c,b,d){f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button"></button></div>').appendTo(c).click(function(){d.paused||d.pause();if(d.currentTime>0){d.setCurrentTime(0);c.find(".mejs-time-current").width("0px");c.find(".mejs-time-handle").css("left","0px");c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));b.find(".mejs-poster").show()}})}})(jQuery);
(function(f){MediaElementPlayer.prototype.buildprogress=function(a,c,b,d){f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(c);var e=c.find(".mejs-time-total");b=c.find(".mejs-time-loaded");var g=c.find(".mejs-time-current"),
h=c.find(".mejs-time-handle"),j=c.find(".mejs-time-float"),l=c.find(".mejs-time-float-current"),m=function(k){k=k.pageX;var n=e.offset(),q=e.outerWidth(),p=0;p=0;if(k>n.left&&k<=q+n.left&&d.duration){p=(k-n.left)/q;p=p<=0.02?0:p*d.duration;o&&d.setCurrentTime(p);j.css("left",k-n.left);l.html(mejs.Utility.secondsToTimeCode(p))}},o=false,i=false;e.bind("mousedown",function(k){o=true;m(k);return false});c.find(".mejs-time-rail").bind("mouseenter",function(){i=true}).bind("mouseleave",function(){i=false});
f(document).bind("mouseup",function(){o=false}).bind("mousemove",function(k){if(o||i)m(k)});d.addEventListener("progress",function(k){a.setProgressRail(k);a.setCurrentRail(k)},false);d.addEventListener("timeupdate",function(k){a.setProgressRail(k);a.setCurrentRail(k)},false);this.loaded=b;this.total=e;this.current=g;this.handle=h};MediaElementPlayer.prototype.setProgressRail=function(a){var c=a!=undefined?a.target:this.media,b=null;if(c&&c.buffered&&c.buffered.length>0&&c.buffered.end&&c.duration)b=
c.buffered.end(0)/c.duration;else if(c&&c.bytesTotal!=undefined&&c.bytesTotal>0&&c.bufferedBytes!=undefined)b=c.bufferedBytes/c.bytesTotal;else if(a&&a.lengthComputable&&a.total!=0)b=a.loaded/a.total;if(b!==null){b=Math.min(1,Math.max(0,b));this.loaded&&this.total&&this.loaded.width(this.total.width()*b)}};MediaElementPlayer.prototype.setCurrentRail=function(){if(this.media.currentTime!=undefined&&this.media.duration)if(this.total&&this.handle){var a=this.total.width()*this.media.currentTime/this.media.duration,
c=a-this.handle.outerWidth(true)/2;this.current.width(a);this.handle.css("left",c)}}})(jQuery);
(function(f){MediaElementPlayer.prototype.buildcurrent=function(a,c,b,d){f('<div class="mejs-time"><span class="mejs-currenttime">'+(a.options.alwaysShowHours?"00:":"")+"00:00</span></div>").appendTo(c);this.currenttime=this.controls.find(".mejs-currenttime");d.addEventListener("timeupdate",function(){a.updateCurrent()},false)};MediaElementPlayer.prototype.buildduration=function(a,c,b,d){if(c.children().last().find(".mejs-currenttime").length>0)f(' <span> | </span> <span class="mejs-duration">'+(a.options.alwaysShowHours?
"00:":"")+"00:00</span>").appendTo(c.find(".mejs-time"));else{c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(a.options.alwaysShowHours?"00:":"")+"00:00</span></div>").appendTo(c)}this.durationD=this.controls.find(".mejs-duration");d.addEventListener("timeupdate",function(){a.updateDuration()},false)};MediaElementPlayer.prototype.updateCurrent=function(){if(this.currenttime)this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime|
0,this.options.alwaysShowHours||this.media.duration>3600))};MediaElementPlayer.prototype.updateDuration=function(){this.media.duration&&this.durationD&&this.durationD.html(mejs.Utility.secondsToTimeCode(this.media.duration,this.options.alwaysShowHours))}})(jQuery);
(function(f){MediaElementPlayer.prototype.buildvolume=function(a,c,b,d){var e=f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(c);c=e.find(".mejs-volume-slider");var g=e.find(".mejs-volume-total"),h=e.find(".mejs-volume-current"),j=e.find(".mejs-volume-handle"),l=function(i){i=g.height()-g.height()*
i;j.css("top",i-j.height()/2);h.height(g.height()-i+parseInt(g.css("top").replace(/px/,""),10));h.css("top",i)},m=function(i){var k=g.height(),n=g.offset(),q=parseInt(g.css("top").replace(/px/,""),10);i=i.pageY-n.top;n=(k-i)/k;if(i<0)i=0;else if(i>k)i=k;j.css("top",i-j.height()/2+q);h.height(k-i);h.css("top",i+q);if(n==0){d.setMuted(true);e.removeClass("mejs-mute").addClass("mejs-unmute")}else{d.setMuted(false);e.removeClass("mejs-unmute").addClass("mejs-mute")}n=Math.max(0,n);n=Math.min(n,1);d.setVolume(n)},
o=false;c.bind("mousedown",function(i){m(i);o=true;return false});f(document).bind("mouseup",function(){o=false}).bind("mousemove",function(i){o&&m(i)});e.find("span").click(function(){if(d.muted){d.setMuted(false);e.removeClass("mejs-unmute").addClass("mejs-mute");l(1)}else{d.setMuted(true);e.removeClass("mejs-mute").addClass("mejs-unmute");l(0)}});d.addEventListener("volumechange",function(i){o||l(i.target.volume)},true);l(a.options.startVolume);d.pluginType==="native"&&d.setVolume(a.options.startVolume)}})(jQuery);
(function(f){MediaElementPlayer.prototype.buildfullscreen=function(a,c,b,d){if(a.isVideo){var e=0,g=0,h=a.container,j=f('<div class="mejs-button mejs-fullscreen-button"><button type="button"></button></div>').appendTo(c).click(function(){l(mejs.MediaFeatures.hasNativeFullScreen?!d.webkitDisplayingFullscreen:!d.isFullScreen)}),l=function(m){switch(d.pluginType){case "flash":case "silverlight":d.setFullscreen(m);break;case "native":if(mejs.MediaFeatures.hasNativeFullScreen)if(m){d.webkitEnterFullScreen();
d.isFullScreen=true}else{d.webkitExitFullScreen();d.isFullScreen=false}else if(m){e=a.$media.height();g=a.$media.width();h.addClass("mejs-container-fullscreen").width("100%").height("100%").css("z-index",1E3);a.$media.width("100%").height("100%");b.children("div").width("100%").height("100%");j.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");a.setControlsSize();d.isFullScreen=true}else{h.removeClass("mejs-container-fullscreen").width(g).height(e).css("z-index",1);a.$media.width(g).height(e);
b.children("div").width(g).height(e);j.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");a.setControlsSize();d.isFullScreen=false}}};f(document).bind("keydown",function(m){d.isFullScreen&&m.keyCode==27&&l(false)})}}})(jQuery);
(function(f){f.extend(mejs.MepDefaults,{startLanguage:"",translations:[],translationSelector:false,googleApiKey:""});f.extend(MediaElementPlayer.prototype,{buildtracks:function(a,c,b,d){if(a.isVideo)if(a.tracks.length!=0){var e,g="";a.chapters=f('<div class="mejs-chapters mejs-layer"></div>').prependTo(b).hide();a.captions=f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>').prependTo(b).hide();a.captionsText=a.captions.find(".mejs-captions-text");
a.captionsButton=f('<div class="mejs-button mejs-captions-button"><button type="button" ></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+a.id+'_captions" id="'+a.id+'_captions_none" value="none" checked="checked" /><label for="'+a.id+'_captions_none">None</label></li></ul></div></button>').appendTo(c).delegate("input[type=radio]","click",function(){lang=this.value;if(lang=="none")a.selectedTrack=null;else for(e=0;e<a.tracks.length;e++)if(a.tracks[e].srclang==lang){a.selectedTrack=
a.tracks[e];a.captions.attr("lang",a.selectedTrack.srclang);a.displayCaptions();break}});a.container.bind("mouseenter",function(){a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("mouseleave",function(){d.paused||a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")});a.trackToLoad=-1;a.selectedTrack=null;a.isLoadingTrack=false;if(a.tracks.length>0&&a.options.translations.length>0)for(e=0;e<a.options.translations.length;e++)a.tracks.push({srclang:a.options.translations[e].toLowerCase(),
src:null,kind:"subtitles",entries:[],isLoaded:false,isTranslation:true});for(e=0;e<a.tracks.length;e++)a.tracks[e].kind=="subtitles"&&a.addTrackButton(a.tracks[e].srclang,a.tracks[e].isTranslation);a.loadNextTrack();d.addEventListener("timeupdate",function(){a.displayCaptions()},false);d.addEventListener("loadedmetadata",function(){a.displayChapters()},false);a.container.hover(function(){a.chapters.css("visibility","visible");a.chapters.fadeIn(200)},function(){d.paused||a.chapters.fadeOut(200,function(){f(this).css("visibility",
"hidden");f(this).css("display","block")})});a.node.getAttribute("autoplay")!==null&&a.chapters.css("visibility","hidden");if(a.options.translationSelector){for(e in mejs.language.codes)g+='<option value="'+e+'">'+mejs.language.codes[e]+"</option>";a.container.find(".mejs-captions-selector ul").before(f('<select class="mejs-captions-translations"><option value="">--Add Translation--</option>'+g+"</select>"));a.container.find(".mejs-captions-translations").change(function(){lang=f(this).val();if(lang!=
""){a.tracks.push({srclang:lang,src:null,entries:[],isLoaded:false,isTranslation:true});if(!a.isLoadingTrack){a.trackToLoad--;a.addTrackButton(lang,true);a.options.startLanguage=lang;a.loadNextTrack()}}})}}},loadNextTrack:function(){this.trackToLoad++;if(this.trackToLoad<this.tracks.length){this.isLoadingTrack=true;this.loadTrack(this.trackToLoad)}else this.isLoadingTrack=false},loadTrack:function(a){var c=this,b=c.tracks[a],d=function(){b.isLoaded=true;c.enableTrackButton(b.srclang);c.loadNextTrack()};
b.isTranslation?mejs.TrackFormatParser.translateTrackText(c.tracks[0].entries,c.tracks[0].srclang,b.srclang,c.options.googleApiKey,function(e){b.entries=e;d()}):f.ajax({url:b.src,success:function(e){b.entries=mejs.TrackFormatParser.parse(e);d();b.kind=="chapters"&&c.media.duration>0&&c.drawChapters(b)},error:function(){c.loadNextTrack()}})},enableTrackButton:function(a){this.captionsButton.find("input[value="+a+"]").prop("disabled",false).siblings("label").html(mejs.language.codes[a]||a);this.options.startLanguage==
a&&f("#"+this.id+"_captions_"+a).click();this.adjustLanguageBox()},addTrackButton:function(a,c){var b=mejs.language.codes[a]||a;this.captionsButton.find("ul").append(f('<li><input type="radio" name="'+this.id+'_captions" id="'+this.id+"_captions_"+a+'" value="'+a+'" disabled="disabled" /><label for="'+this.id+"_captions_"+a+'">'+b+(c?" (translating)":" (loading)")+"</label></li>"));this.adjustLanguageBox();this.container.find(".mejs-captions-translations option[value="+a+"]").remove()},adjustLanguageBox:function(){this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+
this.captionsButton.find(".mejs-captions-translations").outerHeight(true))},displayCaptions:function(){if(typeof this.tracks!="undefined"){var a,c=this.selectedTrack;if(c!=null&&c.isLoaded)for(a=0;a<c.entries.times.length;a++)if(this.media.currentTime>=c.entries.times[a].start&&this.media.currentTime<=c.entries.times[a].stop){this.captionsText.html(c.entries.text[a]);this.captions.show();return}this.captions.hide()}},displayChapters:function(){var a;for(a=0;a<this.tracks.length;a++)if(this.tracks[a].kind==
"chapters"&&this.tracks[a].isLoaded){this.drawChapters(this.tracks[a]);break}},drawChapters:function(a){var c=this,b,d,e=d=0;c.chapters.empty();for(b=0;b<a.entries.times.length;b++){d=a.entries.times[b].stop-a.entries.times[b].start;d=Math.floor(d/c.media.duration*100);if(d+e>100||b==a.entries.times.length-1&&d+e<100)d=100-e;c.chapters.append(f('<div class="mejs-chapter" rel="'+a.entries.times[b].start+'" style="left: '+e.toString()+"%;width: "+d.toString()+'%;"><div class="mejs-chapter-block'+(b==
a.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+a.entries.text[b]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(a.entries.times[b].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(a.entries.times[b].stop)+"</span></div></div>"));e+=d}c.chapters.find("div.mejs-chapter").click(function(){c.media.setCurrentTime(parseFloat(f(this).attr("rel")));c.media.paused&&c.media.play()});c.chapters.show()}});mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",
be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",
pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};mejs.TrackFormatParser={pattern_identifier:/^[0-9]+$/,pattern_timecode:/^([0-9]{2}:[0-9]{2}:[0-9]{2}(,[0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}(,[0-9]{3})?)(.*)$/,split2:function(a,c){return a.split(c)},parse:function(a){var c=0;a=this.split2(a,/\r?\n/);for(var b={text:[],
times:[]},d,e;c<a.length;c++)if(this.pattern_identifier.exec(a[c])){c++;if((d=this.pattern_timecode.exec(a[c]))&&c<a.length){c++;e=a[c];for(c++;a[c]!==""&&c<a.length;){e=e+"\n"+a[c];c++}b.text.push(e);b.times.push({start:mejs.Utility.timeCodeToSeconds(d[1]),stop:mejs.Utility.timeCodeToSeconds(d[3]),settings:d[5]})}}return b},translateTrackText:function(a,c,b,d,e){var g={text:[],times:[]},h,j;this.translateText(a.text.join(" <a></a>"),c,b,d,function(l){h=l.split("<a></a>");for(j=0;j<a.text.length;j++){g.text[j]=
h[j];g.times[j]={start:a.times[j].start,stop:a.times[j].stop,settings:a.times[j].settings}}e(g)})},translateText:function(a,c,b,d,e){for(var g,h=[],j,l="",m=function(){if(h.length>0){j=h.shift();mejs.TrackFormatParser.translateChunk(j,c,b,d,function(o){if(o!="undefined")l+=o;m()})}else e(l)};a.length>0;)if(a.length>1E3){g=a.lastIndexOf(".",1E3);h.push(a.substring(0,g));a=a.substring(g+1)}else{h.push(a);a=""}m()},translateChunk:function(a,c,b,d,e){a={q:a,langpair:c+"|"+b,v:"1.0"};if(d!==""&&d!==null)a.key=
d;f.ajax({url:"https://ajax.googleapis.com/ajax/services/language/translate",data:a,type:"GET",dataType:"jsonp",success:function(g){e(g.responseData.translatedText)},error:function(){e(null)}})}};if("x\n\ny".split(/\n/gi).length!=3)mejs.TrackFormatParser.split2=function(a,c){var b=[],d="",e;for(e=0;e<a.length;e++){d+=a.substring(e,e+1);if(c.test(d)){b.push(d.replace(c,""));d=""}}b.push(d);return b}})(jQuery);




/** Cross-browser console log */
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});




/** Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 *
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(i){var g=i||window.event,f=[].slice.call(arguments,1),j=0,h=true,e=0,d=0;i=c.event.fix(g);i.type="mousewheel";if(i.wheelDelta){j=i.wheelDelta/120}if(i.detail){j=-i.detail/3}d=j;if(g.axis!==undefined&&g.axis===g.HORIZONTAL_AXIS){d=0;e=-1*j}if(g.wheelDeltaY!==undefined){d=g.wheelDeltaY/120}if(g.wheelDeltaX!==undefined){e=-1*g.wheelDeltaX/120}f.unshift(i,j,e,d);return c.event.handle.apply(this,f)}})(jQuery);




/**
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);




/**
 * jQuery.Preload - Multifunctional preloader
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com
 * Dual licensed under MIT and GPL.
 * Date: 3/25/2009
 * @author Ariel Flesler
 * @version 1.0.8
 */
;(function($){var h=$.preload=function(c,d){if(c.split)c=$(c);d=$.extend({},h.defaults,d);var f=$.map(c,function(a){if(!a)return;if(a.split)return d.base+a+d.ext;var b=a.src||a.href;if(typeof d.placeholder=='string'&&a.src)a.src=d.placeholder;if(b&&d.find)b=b.replace(d.find,d.replace);return b||null}),data={loaded:0,failed:0,next:0,done:0,total:f.length};if(!data.total)return finish();var g=$(Array(d.threshold+1).join('<img/>')).load(handler).error(handler).bind('abort',handler).each(fetch);function handler(e){data.element=this;data.found=e.type=='load';data.image=this.src;data.index=this.index;var a=data.original=c[this.index];data[data.found?'loaded':'failed']++;data.done++;if(d.enforceCache)h.cache.push($('<img/>').attr('src',data.image)[0]);if(d.placeholder&&a.src)a.src=data.found?data.image:d.notFound||a.src;if(d.onComplete)d.onComplete(data);if(data.done<data.total)fetch(0,this);else{if(g&&g.unbind)g.unbind('load').unbind('error').unbind('abort');g=null;finish()}};function fetch(i,a,b){if(a.attachEvent&&data.next&&data.next%h.gap==0&&!b){setTimeout(function(){fetch(i,a,1)},0);return!1}if(data.next==data.total)return!1;a.index=data.next;a.src=f[data.next++];if(d.onRequest){data.index=a.index;data.element=a;data.image=a.src;data.original=c[data.next-1];d.onRequest(data)}};function finish(){if(d.onFinish)d.onFinish(data)}};h.gap=14;h.cache=[];h.defaults={threshold:2,base:'',ext:'',replace:''};$.fn.preload=function(a){h(this,a);return this}})(jQuery);




var GATracking = {

	
    trackPageView: function (page) {
        _gaq.push(['_trackPageview', page + '/desktop']);
    },
    
    
    trackAdventure: function (lang, adventure, page) {

        var pageName = 'start';

        switch (page) {
            case 0:
                pageName = "start";
                break;
            case 1:
                pageName = "film";
                break;
        }
        
        GATracking.trackPageView('/tracking/' + lang + '/adventure/' + adventure + '/' + pageName);
	
	},
    
    
    trackCar: function (lang, car) {
    
        GATracking.trackPageView('/tracking/' + lang + '/car/' + car);
      
	},
    
	trackV40: function (lang, car) {
    
        GATracking.trackPageView('/tracking/' + lang + '/v40cc/' + car);
      
	},
    
    trackPage: function (lang, alias) {
    
        GATracking.trackPageView('/tracking/' + lang + '/' + alias);
        
	}
    
    
};

var Scaling = {


    // Just storing window-height and window-width
    windowDimensions: {
        width: null,
        height: null
    },
    
    
    // Offset percentages for larger adventure-images. 
    // Needed for matching larger adventure-images with cover-images
    coverOffsets: [
        0.1328125, 
        0.2515625, 
        0.2, 
        0.66875, 
        0.675, 
        0.1359375, 
        0.36015625, 
        0.175, 
        0.3796875,
        0.240625,
        0.18046875,
        0.4703125,
        0.4890625,
        0.403125,
        0.24453125,
        0.12109375,
        0.68828125,
        0.23984375,
        0.55625,
        0.58046875,
        0.0875,
        0.3828125,
        0.22421875,
        0.459375,
        0.6734375,
        0.428125,
        0.3734375,
        0.471875,
        0.30625,
        0.37734375,
        0.46640625,
        0.496875,
        0.6296875,
        0.515625,
        0.33671875,
        0.15625,
        0.2578125,
        0.4296875,
        0.6875,
        0.58125,
        0.703125,
        0.16171875,
        0.5609375,
        0.06796875,
        0.3625,
        0.425,
        0.5859375,
        0.44296875,
        0.62578125,
        0.52890625
    ],
    
    
    // Offset percentages for larger car-images. 
    // Needed for matching larger car-images with car-cover-images
    carCoverOffsets: [
        0.0, /* First cover not supposed to open */
        0.5421875,
        0.4359375, 
        0.5859375,
        0.3671875, 
        0.3132812, 
        0.5546875, 
        0.7898437, 
        0.5554687, 
        0.3601562,
        0.5164062
    ],

    v40CoverOffsets: [
        0.0, /* First cover not supposed to open */
        0.50390625,
		0.35546875,
		0.58203125,
		0.34765625,
		0.47265625,
		0.49609375,
    ],
    
    // Return correct percentage for scaling
    constrainPercent: function (originalWidth, originalHeight, stageWidth) {
    
        var stageHeight = Scaling.windowDimensions.height,
            percentW = stageWidth / originalWidth,
            percentH = stageHeight / originalHeight,
            rectWidth = originalWidth * percentH;

        return (rectWidth >= stageWidth)? percentH : percentW;
        
    },
    
	
    // Return the correct percentage for scaling cover-images and adventure-images
    scalingPercentage: function() {

        var coverDimensions = { width: 180, height: 800 },
            imageDimensions = { width: 1280, height: 800 },
            coverPercent = Scaling.constrainPercent(coverDimensions.width, coverDimensions.height, coverDimensions.width),
            imagePercent = Scaling.constrainPercent(imageDimensions.width, imageDimensions.height, Scaling.windowDimensions.width);

        return (imageDimensions.width * coverPercent < Scaling.windowDimensions.width)? imagePercent : coverPercent;

    },
    
	
    // Return the correct percentage for scaling cover-images and adventure-images
    scalingPercentageCars: function() {

        var coverDimensions = { width: 180, height: 800 },
            imageDimensions = { width: 1010, height: 800 },
            coverPercent = Scaling.constrainPercent(coverDimensions.width, coverDimensions.height, coverDimensions.width),
            imagePercent = Scaling.constrainPercent(imageDimensions.width, imageDimensions.height, (Scaling.windowDimensions.width - 270));

        return (imageDimensions.width * coverPercent < (Scaling.windowDimensions.width - 270))? imagePercent : coverPercent;

    },
    
	
    // Runs on each window-resize
    resizeCoverFlow: function() {

        var percent = Scaling.scalingPercentage();

        CoverFlow.settings.element.find('img').css({
            width: percent * 180,
            height: percent * 800
        })
        .end().find('.expand').css({
            width: Scaling.windowDimensions.width
        });

        if (Velo.settings.element) {

            Velo.settings.element.find('img').css({
                width: percent * 180,
                height: percent * 800
            })
            .end().find('.expand').css({
                width: Scaling.windowDimensions.width
            });

        }

    },
    

    // Runs on each window-resize
    resizeAdventure: function() {

        var percent = Scaling.scalingPercentage(),
            carDescriptionOffsets;

        Adventure.settings.element.find('img.scale').css({
            width: percent * 1280,
            height: percent * 800
        })
        .end().find('.adventure-content').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        });

        if ($('#current-cover').length) {

            $('#current-cover').find('img').css({
                width: percent * 1280,
                height: percent * 800
            })
            .end().find('.car-content').css({
                width: Scaling.windowDimensions.width,
                height: Scaling.windowDimensions.height
            });

            Velo.moveDescription(false);

        }

        Adventure.moveCaptions();
        Adventure.moveBadge();
        Adventure.setIndicatorLine();

    },
    
	
    // Runs on slideInAdventure
    resizeNextAdventure: function() {

        var percent = Scaling.scalingPercentage();

        Adventure.settings.element.find('.adventure-content:last').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        })
        .find('img.scale').css({
            width: percent * 1280,
            height: percent * 800
        });

        if ($('#current-cover').length) {

            $('#current-cover').find('.car-content:last').css({
                width: Scaling.windowDimensions.width,
                height: Scaling.windowDimensions.height
            })
            .find('img').css({
                width: percent * 1280,
                height: percent * 800
            });

        }

    },
    

    // Runs on each window-resize and on AdventureMap init
    resizePage: function() {

        var percent = Scaling.scalingPercentage(),
            percent2 = Scaling.constrainPercent(1185, 1024, Scaling.windowDimensions.width - 270),
            percent3 = Scaling.constrainPercent(1100, 800, Scaling.windowDimensions.width - 270),
            w, h;

        if ($('.page-cars').length) {
            w = Scaling.windowDimensions.width;
            h = Scaling.windowDimensions.height;
        }

        else {
            w = Scaling.windowDimensions.width - 270;
            h = Scaling.windowDimensions.height;
        }
       
        $('#page-wrapper').css({
            width: w,
            height: h
        });

        $('.page-offer .scene img').css({
        	minWidth:1100,
        	minHeight:800,
            width: percent3*1100,
            height:  percent3*800 
        });

         $('.page-offer .scene ').css({
            height:  h
        });

        $('#imagemap').css({
            width: percent2 * 1185,
            height: percent2 * 1024
        });
		
        $('#map-wrapper').find('a').each(function() {
        
            var cords = $(this).data('cords').split(':');
            
            $(this).css({
                left: (parseInt(cords[0], 10) * percent2) - 22,
                top: (parseInt(cords[1], 10) * percent2) - 45
            });
            
        });
    },
    
	
    // Runs on each window-resize
    resizeOverlay: function() {
    
        $('#overlay').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        });
        
    },
    
	
    // Runs on each window-resize, and also when clicking on lang-select
    adjustSidebar: function() {

        var sidebarElement = $('#sidebar').find('p'),
            menuElement = $('#menu'),
            textHeight = sidebarElement.outerHeight() + parseInt(sidebarElement.css('marginTop'), 10),
            menuHeight = menuElement.outerHeight() + parseInt(menuElement.css('bottom'), 10);

        // #todo - Optimize
        if ((textHeight + menuHeight) > Scaling.windowDimensions.height) {
            sidebarElement.fadeOut();
        }
        else {
            sidebarElement.fadeIn();
        }

    },
    
	
    windowResize: function() {

        Scaling.windowDimensions.width = $(window).width();
        Scaling.windowDimensions.height = $(window).height();

        Scaling.resizeCoverFlow();
        Scaling.resizeAdventure();
        Scaling.resizePage();
        Scaling.adjustSidebar();
        Scaling.resizeOverlay();

        CoverFlow.setCenterLine();
        CoverFlow.adjustNavSpeed();

        Velo.setCenterLine();
        Velo.adjustNavSpeed();

    }

    
};


var VeloXCHelpers = {


    userAgentString: navigator.userAgent.toLowerCase(),
    prevHistoryState: null,
    PNGLoaderTimeout: null,
    lang: null,
    

    transEndEventNames: {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        msTransition: 'msTransitionEnd',
        transition: 'transitionend'
    },
    
	
    /* From here: https://github.com/kswedberg/jquery-smooth-scroll/blob/master/jquery.smooth-scroll.js */
    getScrollable: function(opts) {

        var scrollable = [],
            scrolled = false,
            dir = opts.dir && opts.dir === 'left' ? 'scrollLeft' : 'scrollTop';

        this.each(function() {

            if (this === document || this === window) { return; }

            var el = $(this);

            if (el[dir]() > 0) {
                scrollable.push(this);
                return;
            }

            el[dir](1);
            scrolled = el[dir]() > 0;
            el[dir](0);

            if (scrolled) {
                scrollable.push(this);
                return;
            }

        });

        if (opts.el === 'first' && scrollable.length) {
            scrollable = [scrollable.shift()];
        }

        return scrollable;

    },
    
	
    addOverlay: function(options) {
        var overlay = $('#overlay').length? $('#overlay') : $('<div id="overlay" />').appendTo('body');
        
        if (options) {
        
            if ($.isFunction(options.click)) {
                setTimeout(function() {
                    overlay.unbind('click').bind('click', options.click);
                }, 200); // Use a small timeout before binding click. To prevent movie from closing on double-click
            }
            
            if ($.isFunction(options.mousemove)) {
                setTimeout(function() {
                    overlay.unbind('mousemove').bind('mousemove', options.mousemove);
                }, 500);
            }

            if (options.classname) {
                overlay.addClass(options.classname);
            }
            
        }

        overlay.css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height,
            display: 'block'
        });

    },
    
	
    unbindOverlay: function() {
        $('#overlay').unbind();		
    },
    
	
    removeOverlay: function() {
        $('#overlay').unbind().removeClass().hide();
    },
    
	
    movieElement: null,
    
	
    playMovie: function(id, lang) {

        var videoSrc = '/assets/movies/' + id + '_' + lang;

        // #GATracking (lang, adventure-id, scene-id)
        GATracking.trackAdventure(VeloXCHelpers.lang, CoverFlow.settings.element.find('.expand').index() + 1, 1);

        VeloXCHelpers.addOverlay({ classname: 'transparent', click: VeloXCHelpers.closeMovie });

        $('#videoplayer').addClass('active').css({
            left: (Scaling.windowDimensions.width / 2) - (768 / 2),
            top: (Scaling.windowDimensions.height / 2) - (432 / 2) + $(window).scrollTop()
        });

        if (!VeloXCHelpers.movieElement) {
        
            VeloXCHelpers.movieElement = new MediaElementPlayer('#mediaelement', {
                success: function(video) {
                    video.setSrc([{ src: videoSrc + '.mp4', type: 'video/mp4' }, { src: videoSrc + '.webm', type: 'video/webm' }]);
                    video.load();
                    video.play();

                    // Chrome Fix... have to do this twice the first time
                    if (VeloXCHelpers.userAgentString.indexOf('chrome') > -1) {
                        setTimeout(function(){
                            VeloXCHelpers.movieElement.setSrc([{ src: videoSrc + '.mp4', type: 'video/mp4' }, { src: videoSrc + '.webm', type: 'video/webm' }]);
                            VeloXCHelpers.movieElement.load();
                            VeloXCHelpers.movieElement.play();
                        }, 1);	
                    }

                }
            });
        }
        
        else {
        
            VeloXCHelpers.movieElement.setSrc([{ src: videoSrc + '.mp4', type: 'video/mp4' }, { src: videoSrc + '.webm', type: 'video/webm' }]);
            VeloXCHelpers.movieElement.load();
            VeloXCHelpers.movieElement.play();
            
        }

    },
    
	
    closeMovie: function() {

        $('#videoplayer').removeClass('active');
        VeloXCHelpers.removeOverlay();

        if (VeloXCHelpers.movieElement) {
            VeloXCHelpers.movieElement.setCurrentTime(0);
            VeloXCHelpers.movieElement.pause();
        }

    },
    
	
    cssAnimation: function(object, cssProperties, duration, callback, bodyClass) {
    	console.log(Modernizr.prefixed('transition'));
        var transEndEventName = VeloXCHelpers.transEndEventNames[Modernizr.prefixed('transition')];

        duration = duration || 500;
        bodyClass = bodyClass || false;

        if (Modernizr.csstransitions) {
            if (bodyClass) {
                $('body').addClass(bodyClass);
            }

            object.css(cssProperties);

            if ($.isFunction(callback)) {

                object.bind(transEndEventName, function() {
                    object.unbind(transEndEventName);
                    if (bodyClass) {
                        $('body').removeClass(bodyClass);
                    }
                    callback();
                });
            }

        } 

        else {
            if ($.isFunction(callback)) {		
                object.stop().animate(cssProperties, duration, 'easeOutQuad', callback);
            } 
            else {
                object.stop().animate(cssProperties, duration, 'easeOutQuad');			
            }
        }

    },
    
	
    showPNGLoader: function(element, options) {

        var loader = $('#png-loader').length? $('#png-loader') : $('<div id="png-loader" />'),
            left = 0,		
            defaults = {
                size: 32,
                loop: true,
                reset: 351,
                interval: 100
            },
            settings = $.extend({}, defaults, options);

        loader.data(settings).detach().appendTo(element).css('backgroundPosition', '0 0').show();

        (function animateLoader() {

            VeloXCHelpers.PNGLoaderTimeout = setTimeout(function() {
                if (left < -settings.reset) {
                    if (settings.loop) {
                        loader.css('backgroundPosition', '0 0');
                    }
                    else {
                        clearTimeout(VeloXCHelpers.PNGLoaderTimeout);
                        return;
                    }
                }
                else {
                    loader.css('backgroundPosition', (left -= settings.size) + 'px 0');
                }
                animateLoader();
            }, settings.interval);

        })();

    },
    
	
    hidePNGLoader: function(cb) {

        var loader = $('#png-loader'),
            settings = loader.data(),
            left;

        function hideLoader() {
            loader.removeData().hide();
            if ($.isFunction(cb)) {
                cb();
            }
        }

        clearTimeout(VeloXCHelpers.PNGLoaderTimeout);

        if (loader.css('backgroundPosition')) {
            left = parseInt(loader.css('backgroundPosition').split(' ')[0], 10);
        }
        else {
            left = 0;
        }

        if (settings.loop) {
            hideLoader();
            return;
        }

        // If it's an animation that is not allowed to loop: Finish the animation, then hide
        (function animateLoader() {
            VeloXCHelpers.PNGLoaderTimeout = setTimeout(function() {
                if (left < -settings.reset) {
                    clearTimeout(VeloXCHelpers.PNGLoaderTimeout);
                    setTimeout(hideLoader, 200);
                    return;
                }
                else {
                    loader.css('backgroundPosition', (left -= settings.size) + 'px 0');
                }
                animateLoader();
            }, 1);
        })();

    },
    
	
    setSeason: function() {

        var scrollLeft = CoverFlow.settings.element[0].scrollLeft;

        if ($('body').is('.summer') && scrollLeft < 180 * 25) {
            $('body').removeClass('summer').addClass('winter');
        }
        else if ($('body').is('.winter') && scrollLeft > 180 * 25) {
            $('body').removeClass('winter').addClass('summer');
        }

    },
    
	
    setVisibleCovers: function() {

        var scrollLeft = CoverFlow.settings.element[0].scrollLeft,
            coversOnScreen = Math.ceil((Scaling.windowDimensions.width - 270) / CoverFlow.settings.coverWidth),
            offset = 4,
            firstIndex = Math.floor(scrollLeft / 180),
            lastIndex = firstIndex + coversOnScreen;

        // Use some offset, just to be safe
        firstIndex = (firstIndex - offset > 0)? firstIndex - offset : firstIndex;
        lastIndex = (lastIndex + offset < 50)? lastIndex + offset : lastIndex;

        $('#cover-flow a').removeClass('visible').slice(firstIndex, lastIndex).addClass('visible');

    },
    
	
    getNextScrollPosition: function(e) {

        var scrollPos = $(window).scrollTop(),
            nextScrollPos;

        if (scrollPos % Scaling.windowDimensions.height === 0) {
            nextScrollPos = Scaling.windowDimensions.height;
        }
        else {
            if (e.which === 38) {
                nextScrollPos = scrollPos % Scaling.windowDimensions.height;
            }
            else {
                nextScrollPos = Scaling.windowDimensions.height - (scrollPos % Scaling.windowDimensions.height);
            }
        }

        return nextScrollPos;

    },
    
	
    getPageTitle: function(type, id) {
		
        var prefix = 'Velo Travels',
            separator = ' - ',
            title = prefix;

        switch (type) {
            case 'close-page':
                break;
            case 'open-page':
                title += separator + $('#menu nav').find('a:nth-child(' + id + ')').text();
                break;
            case 'close-car':
                title += separator + $('#menu').find('a:nth-child(2)').text();
                break;
            case 'open-car':
                title += separator + $('#car-covers').find('li:nth-child(' + id + ') i').text();
                break;
            case 'close-adventure':
                break;
            case 'open-adventure':
                title += separator + 'No ' + id + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i:first').text() + ', ' + $('#cover-flow').find('a:nth-child(' + id + ') i:last').text();
                break;
            case 'slide-car':
                title += separator + $('#car-covers').find('li:nth-child(' + (id) + ') i').text();
                break;
            case 'slide-adventure':
                title += separator + 'No ' + id + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i:first').text() + ', ' + $('#cover-flow').find('a:nth-child(' + id + ') i:last').text();
                break;
            case 'map-to-adventure':
                title += separator + 'No ' + id + ' ' + $('#cover-flow').find('a:nth-child(' + id + ') i:first').text() + ', ' + $('#cover-flow').find('a:nth-child(' + id + ') i:last').text();
                break;
        }

        return title;

    }
    
	
};

var VeloKeyNav = {


    coverFlowKeyCounter: 0,

	coverFlowKeyNav: function(settings) {

        $(document).unbind('keydown keyup')
        .bind('keydown', function(e) {
        
            if (e.which === 27 || e.which === 13 || (e.which >= 37 && e.which <= 40)) { 
                if (!$('#overlay').is(':visible')) {
                    VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });	
                }
                e.preventDefault();
            }
            
        })
        .bind('keyup', function(e) {

            var coverFlow = (settings.type === 'cars' || settings.type === 'v40cc')? Velo.settings.element : CoverFlow.settings.element,
                activeCover = coverFlow.find('.active'),
                scrollPos = coverFlow.scrollLeft(),
                scrollPosMax = 180 * settings.covers - Scaling.windowDimensions.width + 270,
                coversOnScreen = Math.floor((Scaling.windowDimensions.width - 270) / CoverFlow.settings.coverWidth),
                startIndex = Math.ceil(scrollPos / 180),
                index;



            if (coverFlow.is(':animated')) {
                return;
            }

            switch (e.which) {
                case 13:
                    //Enter
                    if (activeCover.length) {
                        index = activeCover.removeClass('active').index();
                        if (settings.type === 'cars' || settings.type === 'v40cc') {
                            if (index > 0) {
                                History.pushState({ type: 'open-car', id: index, index: index }, VeloXCHelpers.getPageTitle('open-car', index + 1), '/' + settings.type + '/' + index);
                            }
                            else {
                                window.location = activeCover.find('a').attr('href');
                            }
                        }
                        else {
                            History.pushState({ type: 'open-adventure', id: (index + 1), index: index }, VeloXCHelpers.getPageTitle('open-adventure', index + 1), '/adventure/' + (index + 1));
                        }
                    }
                    break;
                case 37:
                    //Left
                    if (activeCover.length) {
                        if (activeCover.index() === 0) {
                            VeloKeyNav.coverFlowKeyCounter = 0;
                        }
                        else {
                            activeCover.removeClass('active').prev().addClass('active');
                            VeloKeyNav.coverFlowKeyCounter -= 1;	
                        }
                    }
                    else {
                        if (settings.type === 'cars' || settings.type === 'v40cc') {
                            coverFlow.find('li').eq(startIndex).addClass('active');
                        }
                        else {
                            coverFlow.find('a').eq(startIndex).addClass('active');
                        }
                    }
                    break;
                case 39:
                    //Right
                    if (activeCover.length) {
                        if (activeCover.index() === (settings.covers - 1)) {
                            VeloKeyNav.coverFlowKeyCounter = coversOnScreen - 1;
                        }
                        else {
                            activeCover.removeClass('active').next().addClass('active');
                            VeloKeyNav.coverFlowKeyCounter += 1;	
                        }
                    }
                    else {
                        if (settings.type === 'cars' || settings.type === 'v40cc') {
                            coverFlow.find('li').eq(startIndex).addClass('active');
                        }
                        else {
                            coverFlow.find('a').eq(startIndex).addClass('active');
                        }
                    }
                    break;
            }

            //log('Before: ' + VeloKeyNav.coverFlowKeyCounter);
            if (VeloKeyNav.coverFlowKeyCounter < 0) {
                VeloXCHelpers.unbindOverlay();
                coverFlow.animate({ scrollLeft: scrollPos - (coversOnScreen * 180) }, { 
                    duration: 500, 
                    easing: 'easeOutQuad', 
                    queue: false, 
                    complete: function() {
                        VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });	
                        scrollPos = coverFlow.scrollLeft();
                        if (scrollPos === 0) {
                            VeloKeyNav.coverFlowKeyCounter = activeCover.index();
                        }
                        VeloXCHelpers.setSeason();
                    }
                });
                VeloKeyNav.coverFlowKeyCounter = coversOnScreen - 1;
            }
            else if (VeloKeyNav.coverFlowKeyCounter >= coversOnScreen) {
                VeloXCHelpers.unbindOverlay();
                coverFlow.animate({ scrollLeft: scrollPos + (coversOnScreen * 180) }, {
                    duration: 500, 
                    easing: 'easeOutQuad', 
                    queue: false, 
                    complete: function() {
                        VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });	
                        scrollPos = coverFlow.scrollLeft();
                        if (scrollPos === scrollPosMax) {
                            VeloKeyNav.coverFlowKeyCounter = coversOnScreen - 1 - ((settings.covers - 1) - activeCover.index());
                        }
                        VeloXCHelpers.setSeason();
                    } 
                });
                VeloKeyNav.coverFlowKeyCounter = 0;
            }
            //log('After: ' + VeloKeyNav.coverFlowKeyCounter);	
        });
	},
	
    adventureKeyNav: function(settings) {

        $(document).unbind('keydown keyup')
        .bind('keydown', function(e) {
            if (e.which === 27 || (e.which >= 37 && e.which <= 40)) { e.preventDefault(); }
        })
        .bind('keyup', function(e) {

            var state = History.getState(),
                id = (settings.type === 'cars' || settings.type === 'v40cc')? parseInt(state.cleanUrl.split('/' + settings.type + '/').pop(), 10) : parseInt(state.cleanUrl.split('/adventure/').pop(), 10),
                scrollPos = $(window).scrollTop(),
                nextScrollPos = VeloXCHelpers.getNextScrollPosition(e),
                duration = nextScrollPos * 1.618;

            // Disable advenure-key-nav in these occasions
            if ($('#overlay').is(':visible') || $('body').is('.loading-next-adventure, .slide-in-next-adventure')) {
                return;
            }

            switch (e.which) {
                case 27:
                    if (settings.type === 'cars' || settings.type === 'v40cc') {
                        History.pushState({ type: 'close-car' }, VeloXCHelpers.getPageTitle('close-car'), '/' + settings.type);
                    }
                    else {
                        History.pushState({ type: 'close-adventure' }, VeloXCHelpers.getPageTitle('close-adventure'), '/');
                    }
                    break;
                case 37:
                    if ((settings.type === 'cars' || settings.type === 'v40cc') && id > 1) {
                        History.pushState({ type: 'slide-car', url: '/' + settings.type +'/' + (id - 1), direction: 'prev' }, VeloXCHelpers.getPageTitle('slide-car', id), '/' + settings.type + '/' + (id - 1));
                    }
                    else if (settings.type === 'adventure' && id > 1) {
                        History.pushState({ type: 'slide-adventure', url: '/adventure/' + (id - 1), direction: 'prev' }, VeloXCHelpers.getPageTitle('slide-adventure', id - 1), '/adventure/' + (id - 1));
                    }
                    break;
                case 38:
                    if (settings.type === 'adventure' && scrollPos !== 0) { /* This check is needed on mac/safari */
                        $('html, body').firstScrollable().stop().animate({ scrollTop: scrollPos - nextScrollPos }, { 
                            duration: duration, 
                            easing: 'easeInOutQuad', 
                            queue: false 
                        });
                    }
                    break;
                case 39:
                    if (settings.type === 'cars') {
                        if (id < Scaling.carCoverOffsets.length - 1) {
                            History.pushState({ type: 'slide-car', url: '/' + settings.type +'/' + (id + 1), direction: 'next' }, VeloXCHelpers.getPageTitle('slide-car', id + 2), '/' + settings.type + '/' + (id + 1));
                        }
                    }
					else if (settings.type === 'v40cc') {
                        if (id < Scaling.v40CoverOffsets.length - 1) {
                            History.pushState({ type: 'slide-car', url: '/' + settings.type +'/' + (id + 1), direction: 'next' }, VeloXCHelpers.getPageTitle('slide-car', id + 2), '/' + settings.type + '/' + (id + 1));
                        }
                    }
                    else {
                        if (id < 50) {
                            History.pushState({ type: 'slide-adventure', url: '/adventure/' + (id + 1), direction: 'next' }, VeloXCHelpers.getPageTitle('slide-adventure', id + 1), '/adventure/' + (id + 1));
                        }
                    }
                    break;
                case 40:
                    if (settings.type === 'adventure') {
                        $('html, body').firstScrollable().stop().animate({ scrollTop: scrollPos + nextScrollPos }, { 
                            duration: duration, 
                            easing: 'easeInOutQuad', 
                            queue: false 
                        });	
                    }
                    break;
                case 84:
                    if (settings.type === 'adventure' && scrollPos !== 0) { /* This check is needed on mac/safari */
                        Adventure.scrollToTop();
                    }
                    break;
            }

        });

    }
    
    
};

var VeloCompability = {


    fixGeneratedContent: function() {
        /* Appy an extra element to some elements to compensate for lack of generated-content support */
        if (!Modernizr.generatedcontent) {
            Adventure.settings.element.find('.quicklinks a, .links a').add('#menu a').append('<span />');
        }
    }
    
    
};

var Page = {


    settings: {
        element: $('#page-wrapper'),
        visible: false,
        pageName: ''
    },

    open: function(page, cb) {
		
        

        GATracking.trackPage(VeloXCHelpers.lang, page);

        $('body').addClass('loading-page');
        VeloXCHelpers.showPNGLoader($('body'));
        VeloXCHelpers.addOverlay();
		
		var req = $.ajax('/api/pageHTML/' + page, { 
		dataType : 'html', 
		type : 'GET', 
		cache: false,
		  error: function (xhr, ajaxOptions, thrownError) {
			$('body').removeClass('loading-page');
			VeloXCHelpers.hidePNGLoader();
			VeloXCHelpers.removeOverlay();
		  }
		});
		
        req.success(function(resp) {
        	    //Page.settings.element.css({'transform': 'translateX('+ (270 - (Scaling.windowDimensions.width - 270)) + ')'}).html(resp);
            var width, left;

            switch (page) {
                case 'about':
                    width = 240;
                    left = 270 - (240);
                    break;
                case 'cars':
                    width = Scaling.windowDimensions.width;
                    left =  270 - (Scaling.windowDimensions.width);
                    break;
               case 'v40cc':
                    width = Scaling.windowDimensions.width;
                    left =  270 - (Scaling.windowDimensions.width);
                    break;
                default:
                    width = Scaling.windowDimensions.width - 270;
                    left = 270 - (Scaling.windowDimensions.width - 270);
                    break;
            }

            Page.settings.element.css({
                width: width,
                left: left
            }).html(resp);

            if (page === 'map') {
                AdventureMap.init();
            }
            else if (page === 'cars') {
                Velo.init('cars');
            }
            else if (page === 'v40cc') {
                Velo.init('v40cc');
            }
            else if (page === 'offer') {
                Offer.init();
            }

            $.preload('.page-content img', {
                onFinish: function() {
                    $('body').removeClass('loading-page');
                    VeloXCHelpers.hidePNGLoader();
                    Page.playIntro(page, cb);
                }
            });

        }); 

    },
	
	
    playIntro: function(pageName, cb) {
        var leftValue = 270;

        Page.settings.element.show();
        Page.settings.visible = true;
        Page.settings.pageName = pageName;

        if (Page.settings.pageName === 'cars' || Page.settings.pageName === 'v40cc') {
            leftValue = 0;

            $('#car-covers').find('ul').css({
                left: 270
            });
        }
        //set the size of the background image in .page-offer
        percent3 = Scaling.constrainPercent(1100, 800, Scaling.windowDimensions.width - 270),
        h = Scaling.windowDimensions.height;
       
        $('.page-offer .scene img').css({
        	 minWidth:1100,
        	minHeight:800,
            width: percent3*1100,
            height:  percent3*800 
        });

         $('.page-offer .scene ').css({
            height:  h
        });
        // #HACK Make animations non-instant
        $(window).scrollTop(0); 

        // Reset scrollLeft position if we load the map page
        $('#map-wrapper').scrollLeft((Scaling.scalingPercentage() * 1185) / 2);

        console.log("playIntro");

        //VeloXCHelpers.cssAnimation(Page.settings.element, {'transform': 'translateX(270px)'}, 450, function(){Page.introCallback();}, 'play-page-intro');
        VeloXCHelpers.cssAnimation(Page.settings.element, { left: leftValue }, 450, function() {
            VeloXCHelpers.removeOverlay();

            if ($.isFunction(cb)) {
                cb();
            }

            Page.settings.element.find('.page-close').bind('click', function(e) {
                History.pushState({ type: 'close-page' }, VeloXCHelpers.getPageTitle('close-page'), '/');
                e.preventDefault();
            });			
        }, 'play-page-intro');

    },
	
	
    playOutro: function(cb) {

        var scrollLeft, 
            firstIndex, 
            leftValue = 270;

        if (Page.settings.element.is(':visible')) {		
            Page.settings.visible = false;

            if (Page.settings.pageName === 'cars' || Page.settings.pageName === 'v40cc') {
                leftValue = 0;
            }
            if (Page.settings.pageName === 'offer') {
                Offer.out();
            }

            //VeloXCHelpers.cssAnimation(Page.settings.element, {'transform': 'translateX('+(270 -(Scaling.windowDimensions.width - 270))+')'}, 450, function(){
            VeloXCHelpers.cssAnimation(Page.settings.element, { left: 270 - (Scaling.windowDimensions.width - leftValue) }, 450, function() {
                Page.settings.element.empty().hide();

                // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
                if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {

                    scrollLeft = CoverFlow.settings.element.scrollLeft();
                    firstIndex = Math.floor(scrollLeft / 180);

                    if (CoverFlow.settings.element.find('.active').length) {
                        VeloKeyNav.coverFlowKeyCounter = CoverFlow.settings.element.find('.active').index() - firstIndex - 1;
                    }

                    VeloKeyNav.coverFlowKeyNav({type: 'adventure', covers: 50});

                }

                VeloXCHelpers.removeOverlay();

                if ($.isFunction(cb)) { 
                    cb();
                }
            
            }, 'play-page-outro');
        }

    }
    
    
};

var Velo = {


    settings: {
    	pagetype: "cars",
    	offsets: Scaling.carCoverOffsets,
        element: null,
        coverWrapper: null,
        coverArray: null,
        coverWidth: null,
        coverCount: null,
        currentCover: 1,
        navSpeed: 5,
        centerLine: 0,
        timer: null
    },
	
	
    setWrapperWidth: function() {
        this.settings.coverWrapper.width(Velo.settings.coverCount * Velo.settings.coverWidth);
    },
	
	
    setCenterLine: function() {
        Velo.settings.centerLine = (Scaling.windowDimensions.width - 270) / 2;
    },
	
	
    adjustNavSpeed: function() {

        var stageWidth, maxScroll;

        if (Velo.settings.coverWrapper) {

            stageWidth = Scaling.windowDimensions.width - 270;
            maxScroll = Velo.settings.coverWrapper.width() - stageWidth;		

            Velo.settings.adjustedNavSpeed = Velo.settings.navSpeed * (1 + stageWidth / maxScroll);

        }

    },
	
	
    moveCoverFlow: function(mousePos) {	
    
        var delta = Math.abs(1 - mousePos / Velo.settings.centerLine);

        (function moveCovers() {
            Velo.settings.timer = setTimeout(function() {
                if (mousePos > Velo.settings.centerLine) {
                    Velo.settings.element[0].scrollLeft += (Velo.settings.adjustedNavSpeed * delta);
                }
                else {
                    Velo.settings.element[0].scrollLeft -= (Velo.settings.adjustedNavSpeed * delta);
                }
                moveCovers();
            }, 11);
        })();	
    },
	
	
    bindEvents: function() {

        this.settings.element.bind('mousemove', $.throttle(100, true, function(e) { 
            clearTimeout(Velo.settings.timer);
            Velo.moveCoverFlow(e.pageX - 270); 
        }))
        .bind('mouseenter mouseleave mousedown', function() { 
            clearTimeout(Velo.settings.timer);
            $('.car-covers').find('.active').removeClass('active');
            VeloKeyNav.coverFlowKeyCounter = 0;
        })
        .bind('mousewheel', function(e, delta){
            e.preventDefault();
            clearTimeout(Velo.settings.timer);
            delta = (delta < 0)? -1 : 1;
            this.scrollLeft -= (delta * 20);
        })
        .bind('click', function(e) {
            var cover = $(e.target).closest('.item'),
            id = cover.attr('href').split('/').pop(),
            index = cover.closest('li').index();

            clearTimeout(Velo.settings.timer);

            if (index === 0) {
                return;
            }
            else {
                History.pushState({ type: 'open-car', id: id, index: index }, VeloXCHelpers.getPageTitle('open-car', parseInt(index, 10) + 1), '/' + Velo.settings.pagetype + '/' + id);
            }

            e.preventDefault();
        });

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            VeloKeyNav.coverFlowKeyCounter = 0;

            	VeloKeyNav.coverFlowKeyNav({type: Velo.settings.pagetype, covers: 11});
        }

    },
	
	
    moveDescription: function(fontResizing) {

        var description = $('#current-cover').find('.description'),
            scaleRatio = Scaling.scalingPercentage(),
            cssObj = {}, 
            offsets, 
            aligning,
            startwidth;

        if (!description.length) {
            return;
        }

        offsets = description.data('offsets').split(':');
        aligning = description.data('aligning').split(':');
        startwidth = parseInt(description.data('startwidth'), 10);

        cssObj[aligning[0]] = scaleRatio * offsets[0];
        cssObj[aligning[1]] = scaleRatio * offsets[1];

        if (fontResizing) {

            cssObj['width'] = Math.floor(startwidth * scaleRatio);

            description.find('h2').css({
                fontSize: Math.floor(51 * scaleRatio)
            })
            .end().find('p').css({
                fontSize: Math.floor(12 * scaleRatio)
            });

        }

        description.css(cssObj);

    },
	
	
    open: function(car) {
        var id = car.id,
            index = car.index,
            cover = Velo.settings.element.find('li').eq(index),
            req = $.ajax('/api/' + Velo.settings.pagepath + '/' + id, { dataType : 'html', type : 'GET', cache: false }),
            percent = Scaling.scalingPercentage(),
            leftValue;



        Velo.settings.scrollLeft = Velo.settings.element.scrollLeft();
        leftValue = ((180 * index) + 270 - Velo.settings.scrollLeft) - ((percent * 1280) * Velo.settings.offsets[index]);

        // Prevent mousemove from hiding the overlay (webkit)
        VeloXCHelpers.unbindOverlay();

        // If we open with click-event, the overlay has not been added yet.
        VeloXCHelpers.addOverlay();

        CoverFlow.settings.loader.detach().appendTo(cover).show().animate({ width: 180 }, { duration: 5000, queue: false, easing: 'easeInOutQuad' });

        req.success(function(resp) {

            $('body').addClass('loading-adventure');

            $('#current-cover').html(resp).find('img').css({					
                width: percent * 1280,
                height: percent * 800,
                left: leftValue
            });

            VeloCompability.fixGeneratedContent();

            //$.preload('.adventure-content img', {
            $('.car-content img').preload({ 
                onFinish: function() {
                    CoverFlow.settings.loader.stop().animate({ width: 180 }, { 
                        duration: 500, 
                        queue: false, 
                        easing: 'easeInOutQuad',
                        complete: function() {
                            $('body').removeClass('loading-adventure');
                            CoverFlow.settings.loader.hide().width(0);
                            Velo.playIntro(cover, index);
                        }
                    });
                }
            });

        }); 

    },
	
	
    playIntro: function(cover, index) {

        var duration = 0.8 * 1000,
            leftValue = (-180 * index) + Velo.settings.scrollLeft,
            expandWidth = Velo.settings.coverWrapper.width() + Scaling.windowDimensions.width;

        $('#current-cover').show();
        cover.addClass('expand').find('img').hide();

        // #HACK Make animations non-instant
        //$(window).scrollTop(0); 

        VeloXCHelpers.cssAnimation(Velo.settings.coverWrapper, { left: leftValue, width: expandWidth }, duration);
        VeloXCHelpers.cssAnimation(cover, { width: Scaling.windowDimensions.width }, duration);
        VeloXCHelpers.cssAnimation($('#current-cover').find('.scene img'), { left: 0 }, duration, Velo.introCallback, 'play-car-intro');
        VeloXCHelpers.cssAnimation($('#sidebar'), { left: -270 }, duration);

    },
	
	
    playOutro: function() {

        var duration = 0.8 * 1000,
            cover = Velo.settings.element.find('.expand'),
            index = cover.index(),
            leftValue = ((180 * index) + 270 - Velo.settings.scrollLeft) - ((Scaling.scalingPercentage() * 1280) * Velo.settings.offsets[index]),
            maxScroll = (Velo.settings.coverCount * 180) - (Scaling.windowDimensions.width - 270), /* (Scaling.windowDimensions.width - 270) */
            coverWrapperWidth = Velo.settings.coverCount * Velo.settings.coverWidth;

        VeloXCHelpers.addOverlay();

        // Fix for when user slides "prev" and the cover-wrapper has not scrolled past the first cover-item
        if (Velo.settings.scrollLeft < 0 && VeloXCHelpers.prevHistoryState.data.direction === 'prev') {
            leftValue += Velo.settings.scrollLeft;
        }

        // Fix for when user slides "next" and the cover-wrapper has not scrolled past the last cover-item
        if (Velo.settings.scrollLeft > maxScroll && VeloXCHelpers.prevHistoryState.data.direction === 'next') {
            leftValue += Velo.settings.scrollLeft - maxScroll;
        }

        //Added to support playOutro after navigating sideways
        $('#current-cover').find('.car-content').css('zIndex', 3332);

        Velo.settings.element.show().scrollLeft(Velo.settings.scrollLeft);
        $('.car-content .description').hide();

        VeloXCHelpers.cssAnimation(Velo.settings.coverWrapper, { left: 270, width: coverWrapperWidth }, duration);
        VeloXCHelpers.cssAnimation(cover, { width: 180 }, duration);
        VeloXCHelpers.cssAnimation($('#current-cover').find('.scene img'), { left: leftValue }, duration, Velo.outroCallback, 'play-car-outro');
        VeloXCHelpers.cssAnimation($('#sidebar'), { left: 0 }, duration);

    },
	
	
    introCallback: function() {

        var percent = Scaling.scalingPercentage();

        $('body').addClass('car-view');

        // #note changed from Scaling.windowResize(); These should be the only elements in need of resize.
        $('#current-cover img').css({
            width: percent * 1280,
            height: percent * 800
        })
        .end().find('.car-content').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        });

        Velo.settings.element.hide();
        VeloXCHelpers.removeOverlay();
        Velo.initNav();

    },
	
	
    outroCallback: function() {

        var scrollLeft = Velo.settings.element.scrollLeft(),
            firstIndex = Math.floor(scrollLeft / 180);

        $('body').removeClass('car-view');
        $('#current-cover').empty().hide();
        Velo.settings.element.find('.expand img').show().end().find('.expand').removeClass('expand').addClass('active').removeAttr('style');

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            VeloKeyNav.coverFlowKeyCounter = Velo.settings.element.find('.active').index() - firstIndex - 1;
            VeloKeyNav.coverFlowKeyNav({type: Velo.settings.pagetype, covers: 11});
        }

        //setTimeout(VeloXCHelpers.removeOverlay, 500);
        Velo.settings.element[0].scrollLeft += 1; // Fix for older browsers
        VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });

    },
	
	
    slideInCar: function(url, direction) {

        var adventureWrapper = $('#current-cover'),
            id = parseInt(url.split('/').pop(), 10),
            index = id,
            delta = (direction === 'next')? -1 : 1,
            leftValue = (delta === -1)? Scaling.windowDimensions.width : 0,	
            req = $.ajax('/api/' + Velo.settings.pagepath + '/' + id, { dataType: 'html', type: 'GET', cache: false });

        // Disable the page while loading...
        VeloXCHelpers.addOverlay();

        req.success(function(resp) {

            $('body').addClass('loading-next-adventure');
            $('#' + direction).addClass('loading');

            adventureWrapper.append(resp);

            VeloCompability.fixGeneratedContent();

            //Added to support playOutro after navigating sideways
            Velo.settings.scrollLeft = Velo.settings.scrollLeft -(delta * 180);
            Velo.settings.coverWrapper.css('left', (-180 * index) + Velo.settings.scrollLeft);
            Velo.settings.element.find('.expand img').show()
            .end().find('.expand').removeClass('expand').removeAttr('style')
            .end().find('li').eq(index).addClass('expand').width(Scaling.windowDimensions.width).find('img').hide();
            // END

            adventureWrapper.find('.car-content:last').css({
                zIndex: 1, /* Dont set to zero, will break in ie7 */
                left: leftValue - ((Scaling.scalingPercentage() * 1280) * Velo.settings.offsets[index])
            }).end()
            .find('.car-content:first').css('zIndex', 3332);

            Scaling.resizeNextAdventure();

            VeloXCHelpers.showPNGLoader($('#' + direction), {
                size: 41,
                reset: 4058,
                loop: false,
                interval: 50
            });

            $('.car-content:nth-child(2) img').preload({ 
                onFinish: function() {
                    VeloXCHelpers.hidePNGLoader(function() {
                        $('body').removeClass('loading-next-adventure');
                        adventureWrapper.find('.car-content').removeClass('active');

                        VeloXCHelpers.cssAnimation(adventureWrapper.find('.car-content:last'), { left: 0 }, 1000);
                        VeloXCHelpers.cssAnimation(adventureWrapper.find('.car-content:first'), { left: delta * Scaling.windowDimensions.width }, 1000, function() {
                            adventureWrapper.find('.car-content:first').remove().end()
                            .find('.car-content img').css({
                                left: 0 //Added to support playOutro after navigating sideways
                            });
                            Velo.initNav();
                        }, 'slide-in-next-car');
                    });
                }
            });

        }); 

    },
	
	
    initNav: function() {

        var adventureWrapper = $('#current-cover');

        // #GATracking (lang, adventure-id, scene-id)
		if(Velo.settings.pagetype === 'v40cc'){
			GATracking.trackV40(VeloXCHelpers.lang, Velo.settings.element.find('.expand').index());
		}
		else{
			GATracking.trackCar(VeloXCHelpers.lang, Velo.settings.element.find('.expand').index());
		}
		
		adventureWrapper.find('.car-content:last').addClass('active');

        Velo.moveDescription(false);

        $('.car-content .description').fadeIn(200);

        VeloXCHelpers.removeOverlay();

        // Bind navigation events
        adventureWrapper.find('.adventure-nav').unbind('click').bind('click', function(e) {
            var id = this.href.split('/').pop();

            adventureWrapper.find('.adventure-nav').unbind('click');
            History.pushState({ type: 'slide-car', url: this.href, direction: this.id }, VeloXCHelpers.getPageTitle('slide-car', parseInt(id, 10) + 1), '/' + Velo.settings.pagetype + '/' + id);
            e.preventDefault();
        }).end()
        .find('.to-coverflow').bind('click', function(e) {
            History.pushState({ type: 'close-car' }, VeloXCHelpers.getPageTitle('close-car'), '/' + Velo.settings.pagetype);
            e.preventDefault();
        });

        VeloKeyNav.adventureKeyNav({type: Velo.settings.pagetype});

    },
	
	
    init: function(pagetype) {

    	if(pagetype === 'v40cc') {
    		Velo.settings.pagepath = 'v40HTML';
    		Velo.settings.offsets = Scaling.v40CoverOffsets;
        }
        else {
			Velo.settings.pagepath = 'carHTML';
			Velo.settings.offsets = Scaling.carCoverOffsets;
        }

    	Velo.settings.pagetype = pagetype;
        Velo.settings.element = $('.car-covers');
        Velo.settings.coverWrapper = Velo.settings.element.find('ul');
        Velo.settings.coverArray = Velo.settings.element.find('li');
        Velo.settings.coverWidth = Velo.settings.coverArray.width();
        Velo.settings.coverCount = Velo.settings.coverArray.length;

        Scaling.windowResize();
        this.setWrapperWidth();
        this.setCenterLine();
        this.adjustNavSpeed();
        this.bindEvents();

    }
    
    
};

var Offer = {
	init: function(){
		$("#video").css("opacity", "0").show().delay(300).animate({
			opacity:1
		}, 400 )
		$(".page-offer .page-close").css("opacity", "0").show().delay(300).animate({
			opacity:1
		}, 400 )
		$("#youtube").hide();
		$("#video").bind("click", function(){

        var videoSrc = $("#youtube");

        VeloXCHelpers.addOverlay({ classname: 'transparent', click: Offer.closeMovie });

        $('#videoplayer').addClass('active').css({
            left: (Scaling.windowDimensions.width / 2) - (768 / 2),
            top: (Scaling.windowDimensions.height / 2) - (500 / 2) 
        });
       
        $("#youtube").show();
		$("#videoplayer").html( videoSrc)
	
    	})
	},
	out: function(){
		$("#video").animate({
			opacity:0
		}, 100 )
		$(".page-offer .page-close").animate({
			opacity:0
		}, 100 )
	},
  	closeMovie: function() {
  		$("#youtube").detach().appendTo("#video");
        $('#videoplayer').removeClass('active');
        VeloXCHelpers.removeOverlay();
		$("#youtube").hide();
    }
};

var AdventureMap = {

    timeout: null,
    mapWrapper: null,
    
    
    scrollMap: function(mouse) {

        var scrollSpeed = 4 * Scaling.scalingPercentage(),
            xMiddle = (Scaling.windowDimensions.width - 270) / 2,
            yMiddle = Scaling.windowDimensions.height / 2,
            deltaX = Math.abs(1 - mouse.x / xMiddle), 
            deltaY = Math.abs(1 - mouse.y / yMiddle);

        clearTimeout(AdventureMap.timeout);

        (function moveCovers() {
            AdventureMap.timeout = setTimeout(function() {
                (mouse.x > xMiddle)? AdventureMap.mapWrapper.scrollLeft += (scrollSpeed * deltaX) : AdventureMap.mapWrapper.scrollLeft -= (scrollSpeed * deltaX);
                (mouse.y > yMiddle)? AdventureMap.mapWrapper.scrollTop += (scrollSpeed * deltaY) : AdventureMap.mapWrapper.scrollTop -= (scrollSpeed * deltaY);
            moveCovers();
            }, 11);
        })();

    },
    
    
    showTooltip: function(item) {

        var tooltip = ($('#ttip').length)? $('#ttip') : $('<div id="ttip" />').appendTo('#map-wrapper').hide(),
            text = item.title,
            cords = { 
                x: parseInt(item.style.left, 10) + 22, 
                y: parseInt(item.style.top, 10) + 47 
            };

        item.title = '';

        tooltip.text(text).css({
            left: cords.x,
            top: cords.y,
            display: 'block'
        });

        // Prevent tooltip from showing outside map container
        if (cords.x + tooltip.width() > Scaling.windowDimensions.width - 270 + $('#map-wrapper').scrollLeft()) {
            tooltip.css({
                left: cords.x - tooltip.width()
            });
        }

    },
    
    
    hideTooltip: function(item) {
        var ttip = $('#ttip').hide();
        item.title = ttip.text();
    },
    
    
    init: function() {

        AdventureMap.mapWrapper = document.getElementById('map-wrapper');
        Scaling.resizePage();

        $(AdventureMap.mapWrapper).bind('mousemove', $.throttle(100, true, function(e) { 
            var mouse = { x: e.pageX - 270, y: e.pageY };
            AdventureMap.scrollMap(mouse);
        }))
        .bind('mouseleave mousedown', function() {
            clearTimeout(AdventureMap.timeout);
        })
        .bind('click', function(e) {
            if ($(e.target).is('a')) {
                var id = parseInt($(e.target).text(), 10);
                History.pushState({type: 'map-to-adventure', id: id, index: id-1 }, VeloXCHelpers.getPageTitle('map-to-adventure', id), '/adventure/' + id);
                e.preventDefault();				
            }
        });

        $(AdventureMap.mapWrapper).find('a')
        .bind('mouseenter', function() { AdventureMap.showTooltip(this); })
        .bind('mouseleave', function() { AdventureMap.hideTooltip(this); });

    }
    
    
};

var Adventure = {


    settings: {
        element: $('#adventure-wrapper'),
        sceneCount: null,
        queuedScroll: 0,
        hasShownTip: false
    },
    
    
    scrollToTop: function() {
        $('html, body').firstScrollable().stop().animate({'scrollTop': 0}, $(window).scrollTop(), 'easeOutQuad');
    },
    
    
    positionCaptions: function(scene, from, to) {

        var sceneHeight = Scaling.windowDimensions.height,
            percent = ($(window).scrollTop() - (scene * sceneHeight)) / sceneHeight;

        Adventure.settings.element.find('.caption-' + (scene + 1)).css('top', to - ((from - to) * percent));

    },
    
    
    moveCaptions: function() {

        var adventureWrapper = Adventure.settings.element,
            scrollPos = $(window).scrollTop(),
            toTop = Adventure.settings.element.find('.to-top'),
            caption,
            from,
            to,
            i;

        if (!Adventure.settings.sceneCount) {
            return;
        }

        //positionCaptions(scene, from, to)
        for (i = 1; i <= Adventure.settings.sceneCount; i++) {
            caption = adventureWrapper.find('.caption-' + (i));

            if (caption.length) {
                switch (caption.data('align')) {
                    case 'top':
                        to = caption.data('offset');
                        break;
                    case 'bottom':
                        to = (Scaling.windowDimensions.height - parseInt(caption.outerHeight(), 10)) - caption.data('offset');
                        break;
                    case 'center':
                        to = ((Scaling.windowDimensions.height - parseInt(caption.outerHeight(), 10)) / 2) + caption.data('offset');
                        break;
                }

                // Distance to move (4 > 10) :P
                from = to + (Scaling.windowDimensions.height / 4);

                Adventure.positionCaptions((i - 1), from, to);
            }
        }

        // Show and hide top-link #todo - optimize
        if (scrollPos === 0) {
            toTop.stop().animate({ opacity: 0 }, { duration: 200, queue: false });
        }
        else if (toTop.css('opacity') !== '1' && !toTop.is(':animated')) {
            toTop.stop().animate({ opacity:1 }, { duration: 200, queue: false });
        }

        adventureWrapper.find('#adventure-cords').css('top', -(scrollPos) + 75).end()
        .find('.adventure-nav').css('top', -(scrollPos * 3) + (Scaling.windowDimensions.height/2));

        // Move indicator line relative to first scene figcaption
        if ($('#indicator-line').length && adventureWrapper.find('.figcaption').length) {
            $('#indicator-line').css('top', parseInt(adventureWrapper.find('.figcaption')[0].style.top, 10) + 100);
        }

    },
    
    
    setIndicatorLine: function() {

        var sceneWrapper = $('#scene-wrapper'),
            totalFigcaptions,
            firstFigcaption,
            lastFigcaption,
            firstSceneSpan,
            lastSceneSpan,
            offsetTop;

        if (!Adventure.settings.sceneCount || !sceneWrapper.find('.figcaption').length) {
            return;
        }

        totalFigcaptions = sceneWrapper.find('.figcaption').length;

        firstFigcaption = sceneWrapper.find('.figcaption')[0];
        firstSceneSpan = $(firstFigcaption).parent('.scene').index();

        lastFigcaption = sceneWrapper.find('.figcaption')[totalFigcaptions-1];
        lastSceneSpan = $(lastFigcaption).parent('.scene').index();

        offsetTop = (Scaling.windowDimensions.height * firstSceneSpan) + parseInt(firstFigcaption.style.top, 10) + 10;

        $('#indicator-line').css({
            top: offsetTop,
            height: Scaling.windowDimensions.height * lastSceneSpan + (parseInt(lastFigcaption.style.top, 10) + $(lastFigcaption).outerHeight()) - offsetTop
        });

    },
    
    
    moveBadge: function() {

        var percent = Scaling.scalingPercentage(),
            mapWidth = percent * 1280,
            mapHeight = percent * 800;

        $('.badge').css({
            left: mapWidth / 2 - 99,
            top: mapHeight / 2 - 179,
            margin: 0
        });

    },
    
    
    open: function(adventure) {

        var id = adventure.id,
            index = adventure.index,
            cover = CoverFlow.settings.element.find('a').eq(index),
            req = $.ajax('/api/adventureHTML/' + id, { dataType : 'html', type : 'GET', cache: false }),
            percent = Scaling.scalingPercentage(),
            leftValue;

        CoverFlow.settings.scrollLeft = CoverFlow.settings.element.scrollLeft();
        leftValue = ((180 * index) + 270 - CoverFlow.settings.scrollLeft) - ((percent * 1280) * Scaling.coverOffsets[index]);

        // Prevent mousemove from hiding the overlay (webkit)
        VeloXCHelpers.unbindOverlay();

        // If we open with click-event, the overlay has not been added yet.
        VeloXCHelpers.addOverlay();

        CoverFlow.settings.loader.detach().appendTo(cover).show().animate({ width: 180 }, { duration: 5000, queue: false, easing: 'easeInOutQuad' });

        req.success(function(resp) {

            $('body').addClass('loading-adventure');

            Adventure.settings.element.html(resp).find('#scene-1 img.scale').css({					
                width: percent * 1280,
                height: percent * 800,
                left: leftValue
            });


            VeloCompability.fixGeneratedContent();

            //$.preload('.adventure-content img', {
            $('.adventure-content #scene-1 img').preload({ 
                onFinish: function() {
                    CoverFlow.settings.loader.stop().animate({ width: 180 }, { 
                        duration: 500, 
                        queue: false, 
                        easing: 'easeInOutQuad',
                        complete: function() {
                            $('body').removeClass('loading-adventure');
                            CoverFlow.settings.loader.hide().width(0);
                            Adventure.playIntro(cover, index);
                        }
                    });
                }
            });

        }); 

    },
    
    
    playIntro: function(cover, index) {

        var duration = 0.8 * 1000,
            leftValue = (-180 * index) + CoverFlow.settings.scrollLeft,
            expandWidth = CoverFlow.settings.coverWrapper.width() + Scaling.windowDimensions.width;

        Adventure.settings.element.show();
        cover.addClass('expand').find('img').hide();

        // #HACK Make animations non-instant
        $(window).scrollTop(0); 

        VeloXCHelpers.cssAnimation(CoverFlow.settings.coverWrapper, { left: leftValue, width: expandWidth }, duration);
        VeloXCHelpers.cssAnimation(cover, { width: Scaling.windowDimensions.width }, duration);
        VeloXCHelpers.cssAnimation($('#scene-1').find('img.scale'), { left: 0 }, duration, Adventure.introCallback, 'play-adventure-intro');
        VeloXCHelpers.cssAnimation($('#sidebar'), { left: -270 }, duration);

    },
    
    
    playOutro: function() {

        var duration = 0.8 * 1000,
            cover = CoverFlow.settings.element.find('.expand'),
            index = cover.index(),
            leftValue = ((180 * index) + 270 - CoverFlow.settings.scrollLeft) - ((Scaling.scalingPercentage() * 1280) * Scaling.coverOffsets[index]),
            maxScroll = (CoverFlow.settings.coverCount * 180) - (Scaling.windowDimensions.width - 270), /* (Scaling.windowDimensions.width - 270) */
            coverWrapperWidth = CoverFlow.settings.coverCount * CoverFlow.settings.coverWidth;

        VeloXCHelpers.addOverlay();
        
        // Fix for when user slides "prev" and the cover-wrapper has not scrolled past the first cover-item
        if (CoverFlow.settings.scrollLeft < 0 && VeloXCHelpers.prevHistoryState.data.direction === 'prev') {
            leftValue += CoverFlow.settings.scrollLeft;
        }

        // Fix for when user slides "next" and the cover-wrapper has not scrolled past the last cover-item
        if (CoverFlow.settings.scrollLeft > maxScroll && VeloXCHelpers.prevHistoryState.data.direction === 'next') {
            leftValue += CoverFlow.settings.scrollLeft - maxScroll;
        }

        //Added to support playOutro after navigating sideways
        Adventure.settings.element.find('.adventure-content').css('zIndex', 3332);

        CoverFlow.settings.element.show().scrollLeft(CoverFlow.settings.scrollLeft);
        $('#scene-1').find('.figcaption').add('#indicator-line, #adventure-cords').hide();

        VeloXCHelpers.cssAnimation(CoverFlow.settings.coverWrapper, { left: 270, width: coverWrapperWidth }, duration);
        VeloXCHelpers.cssAnimation(cover, { width: 180 }, duration);
        VeloXCHelpers.cssAnimation($('#scene-1 img'), { left: leftValue }, duration, Adventure.outroCallback, 'play-adventure-outro');
        VeloXCHelpers.cssAnimation($('#sidebar'), { left: 0 }, duration);

    },
    
    
    introCallback: function() {

        var percent = Scaling.scalingPercentage(),
            langText = '',
            tip;

        switch(VeloXCHelpers.lang) {
            case 'se':
                langText = 'Du kan navigera<br /> med piltangenterna.';
                break;
            case 'dk':
                langText = 'Du kan navigere<br /> med piletasterne.';
                break;
            case 'no':
                langText = 'Du kan navigere<br /> med piltastene.';
                break;
            case 'fi':
                langText = 'Voit liikkua<br /> nuolinäppäimillä.';
                break;
            default:
                langText = 'Navigate with<br /> the arrow keys.';
                break;
        }

        tip = $('<div class="tip">' + langText + '</div>');

        function toggleTip() {

            var delay = 1000;

            $(document).unbind('keydown keyup').bind('keydown.tip', function(e) {

                delay = 0;

                if (e.which === 27 || (e.which >= 37 && e.which <= 40)) { 
                e.preventDefault(); 
                } 

            })
            .bind('keyup.tip mousemove.tip', function(e) {

                var queueKey = e.which;

                $(document).unbind('keydown.tip keyup.tip mousemove.tip');

                setTimeout(function() {
                    tip.fadeOut(200, function() {
                        tip.remove();
                        Adventure.settings.hasShownTip = true;
                        Adventure.initNav(queueKey);
                    });
                }, delay);

            });

        }

        $('body').addClass('adventure-view');

        // #note changed from Scaling.windowResize(); These should be the only elements in need of resize.
        Adventure.settings.element.find('img.scale').css({
            width: percent * 1280,
            height: percent * 800
        }).end()
        .find('.adventure-content').css({
            width: Scaling.windowDimensions.width,
            height: Scaling.windowDimensions.height
        });

        CoverFlow.settings.element.hide();
        //VeloXCHelpers.removeOverlay();

        // Show key-nav indicator until mousemove or keypress
        if (Adventure.settings.hasShownTip) {
            Adventure.initNav();
        }
        else {
            Adventure.settings.element.find('.adventure-content').append(tip);
            tip.hide().fadeIn(200);
            toggleTip();
        }
		
	},
    
    
    outroCallback: function() {

        var scrollLeft = CoverFlow.settings.element.scrollLeft(),
            firstIndex = Math.floor(scrollLeft / 180);

        Adventure.settings.sceneCount = null;
        $('body').removeClass('adventure-view');
        Adventure.settings.element.empty().hide();
        CoverFlow.settings.element.find('.expand img').show().end().find('.expand').removeClass('expand').addClass('active').removeAttr('style');

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            VeloKeyNav.coverFlowKeyCounter = CoverFlow.settings.element.find('.active').index() - firstIndex - 1;
            VeloKeyNav.coverFlowKeyNav({type: 'adventure', covers: 50});
        }

        //setTimeout(VeloXCHelpers.removeOverlay, 500);
        CoverFlow.settings.element[0].scrollLeft += 1; // Fix for older browsers
        VeloXCHelpers.addOverlay({ mousemove: VeloXCHelpers.removeOverlay });

    },
    
    
    slideInAdventure: function(url, direction) {

        var adventureWrapper = Adventure.settings.element,
            id = parseInt(url.split('/').pop(), 10),
            index = id - 1,
            delta = (direction === 'next')? -1 : 1,
            leftValue = (delta === -1)? Scaling.windowDimensions.width : 0,	
            req = $.ajax('/api/adventureHTML/' + id, { dataType: 'html', type: 'GET', cache: false });
            
        // Disable the page while loading...
        VeloXCHelpers.addOverlay();

        req.success(function(resp) {

            $('body').addClass('loading-next-adventure');
            $('#' + direction).addClass('loading');

            adventureWrapper.append(resp);

            VeloCompability.fixGeneratedContent();

            //Added to support playOutro after navigating sideways
            CoverFlow.settings.scrollLeft = CoverFlow.settings.scrollLeft -(delta * 180);
            CoverFlow.settings.coverWrapper.css('left', (-180 * index) + CoverFlow.settings.scrollLeft);
            CoverFlow.settings.element.find('.expand img').show().end()
            .find('.expand').removeClass('expand').removeAttr('style').end()
            .find('a').eq(index).addClass('expand').width(Scaling.windowDimensions.width).find('img').hide();
            // END

            adventureWrapper.find('.adventure-content:last').css({
                zIndex: 1, /* Dont set to zero, will break in ie7 */
                left: leftValue - ((Scaling.scalingPercentage() * 1280) * Scaling.coverOffsets[index])
            }).end()
            .find('.adventure-content:first').css('zIndex', 3332);

            $('html, body').firstScrollable().animate({ scrollTop: 0 }, $(window).scrollTop(), 'easeOutQuad', function() {

                Scaling.resizeNextAdventure();

                VeloXCHelpers.showPNGLoader($('#' + direction), {
                    size: 41,
                    reset: 4058,
                    loop: false,
                    interval: 50
                });

                $('.adventure-content:nth-child(2) #scene-1 .scale').preload({ 
                    onFinish: function() {
                        VeloXCHelpers.hidePNGLoader(function() {
                            $('body').removeClass('loading-next-adventure');
                            adventureWrapper.find('.adventure-content').removeClass('active');

                            VeloXCHelpers.cssAnimation(adventureWrapper.find('.adventure-content:last'), { left: 0 }, 1000);
                            VeloXCHelpers.cssAnimation(adventureWrapper.find('.adventure-content:first'), { left: delta * Scaling.windowDimensions.width }, 1000, function() {
                                adventureWrapper.find('.adventure-content:first').remove().end()
                                .find('#scene-1 img').css({
                                    left: 0 //Added to support playOutro after navigating sideways
                                });
                                Adventure.initNav();
                            }, 'slide-in-next-adventure');
                        });
                    }
                });

            });

        }); 

    },
    
    
    initNav: function(queuedAction) {

        var adventureWrapper = Adventure.settings.element,
            nextScrollPos, duration;

        // #GATracking (lang, adventure-id, scene-id)
        GATracking.trackAdventure(VeloXCHelpers.lang, CoverFlow.settings.element.find('.expand').index() + 1, 0);

        adventureWrapper.find('.adventure-content:last').addClass('active');
        Adventure.settings.sceneCount = $('#scene-wrapper').find('.scene').length;

        Adventure.moveCaptions();
        Adventure.moveBadge();
        Adventure.setIndicatorLine();

        $('#adventure-cords, #indicator-line, .caption-1').fadeIn(200, function() {
            $('.figcaption').show(); // Show other captions later
        });

        VeloXCHelpers.removeOverlay();

        // Bind navigation events
        adventureWrapper.find('.adventure-nav').unbind('click').bind('click', function(e) {
            var id = this.href.split('/').pop();

            adventureWrapper.find('.adventure-nav').unbind('click');
            History.pushState({ type: 'slide-adventure', url: this.href, direction: this.id }, VeloXCHelpers.getPageTitle('slide-adventure', parseInt(id, 10)), '/adventure/' + id);
            e.preventDefault();

        }).end()
        .find('.to-coverflow').bind('click', function(e) {
            History.pushState({ type: 'close-adventure' }, VeloXCHelpers.getPageTitle('close-adventure'), '/');
            adventureWrapper.find('.to-top').unbind('click');
            e.preventDefault();
        }).end()
        .find('.to-top').bind('click', function(e) {
            Adventure.scrollToTop();
            e.preventDefault();
        }).end()
        .find('.figcaption a').bind('click', function(e) {
            var link = this.href, id = null, lang = null;

            // Popup-movie
            if (link.indexOf('/assets/movies/') > -1) {
                lang = link.split('_')[1].split('.')[0];
                id = link.split('/assets/movies/')[1].split('_')[0];
                VeloXCHelpers.playMovie(id, lang);
                e.preventDefault();
            }

        });

        VeloKeyNav.adventureKeyNav({type: 'adventure'});

        switch (queuedAction) {
            case 37:
                adventureWrapper.find('#prev').trigger('click');
                break;
            case 39:
                adventureWrapper.find('#next').trigger('click');
                break;
            case 40:
                nextScrollPos = VeloXCHelpers.getNextScrollPosition(40),
                duration = nextScrollPos * 1.618;
                $('html, body').firstScrollable().stop().animate({ scrollTop: $(window).scrollTop() + nextScrollPos }, { 
                    duration: duration, 
                    easing: 'easeInOutQuad', 
                    queue: false 
                });	
                break;
            default:
                break;
        }

    },
    
    
    mouseWheelScroll: function(delta) {

        // Using helper function to move scene-wrapper when user scrolls
        var scrollPos = $(window).scrollTop(),
            scrollSteps = 17,
            speed = Scaling.windowDimensions.height / scrollSteps,
            duration;

        // Prevent scrolling when a new adventure is loading
        if ($('body').hasClass('loading-next-adventure') || $('body').hasClass('slide-in-next-adventure')) {
            return;
        }

        delta = (delta < 0)? -1 : 1;

        // Direction-change
        if ( delta !== Adventure.settings.prevDelta) {
            Adventure.settings.queuedScroll = (-delta * speed);
        }

        Adventure.settings.prevDelta = delta;

        // Scroll Down
        if (delta < 0) {
            if (Adventure.settings.queuedScroll < (speed * 10)) {
                Adventure.settings.queuedScroll += speed;
            }
        }

        // Scroll Up
        else {		
            if (Adventure.settings.queuedScroll > (-speed * 10)) {
                Adventure.settings.queuedScroll -= speed;
            }
        }

        duration = 500 + (-delta * Adventure.settings.queuedScroll * 3);

        // Scroll page
        $('html, body').firstScrollable().stop().animate({ scrollTop: '+=' + Adventure.settings.queuedScroll }, { 
            duration: duration, 
            easing: 'easeOutCubic', 
            queue: false, 
            complete: function() { 
                Adventure.settings.queuedScroll = 0; 
            } 
        });

    }
    
    
};

var CoverFlow = {


    settings: {
        element: null,
        sidebar: null,
        loader: null,
        coverWrapper: null,
        coverArray: null,
        coverWidth: null,
        coverCount: null,
        currentCover: 26,
        scrollLeft: 0,
        navSpeed: 7,
        centerLine: 0,
        timer: null
    },
    
    
    setWrapperWidth: function() {
        this.settings.coverWrapper.width(CoverFlow.settings.coverCount * CoverFlow.settings.coverWidth);
    },
    
    
    setCenterLine: function() {
        CoverFlow.settings.centerLine = (Scaling.windowDimensions.width - 270) / 2;
    },
    
    
    adjustNavSpeed: function() {
        var stageWidth = Scaling.windowDimensions.width - 270,
        maxScroll = CoverFlow.settings.coverWrapper.width() - stageWidth;

        CoverFlow.settings.adjustedNavSpeed = CoverFlow.settings.navSpeed * (1 + stageWidth / maxScroll);
    },
    
    
    moveCoverFlow: function(mousePos) {	
        var delta = Math.abs(1 - mousePos / CoverFlow.settings.centerLine);

        // use requestAnimationFrame: 
        (function moveCovers() {
            VeloXCHelpers.setSeason();
            //VeloXCHelpers.setVisibleCovers();
            CoverFlow.settings.timer = setTimeout(function() {
                if (mousePos > CoverFlow.settings.centerLine) {
                    CoverFlow.settings.element[0].scrollLeft += (CoverFlow.settings.adjustedNavSpeed * delta);
                }
                else {
                    CoverFlow.settings.element[0].scrollLeft -= (CoverFlow.settings.adjustedNavSpeed * delta);
                }
                moveCovers();
            }, 11); // Set to 16 to be safe... Browser timer resolutions: http://www.nczonline.net/blog/2011/05/03/better-javascript-animations-with-requestanimationframe/
        })();
    },
    
    
    bindEvents: function() {

        this.settings.element.bind('mousemove', $.throttle(100, true, function(e) { 
            clearTimeout(CoverFlow.settings.timer);
            CoverFlow.moveCoverFlow(e.pageX - 270); 
        }))
        .bind('mouseenter mouseleave mousedown', function() { 
            clearTimeout(CoverFlow.settings.timer);
            $('#cover-flow').find('.active').removeClass('active');
            VeloKeyNav.coverFlowKeyCounter = 0;
        })
            .bind('mousewheel', function(e, delta){
            e.preventDefault();
            clearTimeout(CoverFlow.settings.timer);
            delta = (delta < 0)? -1 : 1;
            this.scrollLeft -= (delta * 20);
        })
        .bind('click', function(e) {
            var cover = $(e.target).closest('a'),
                id = cover.attr('href').split('/').pop(),
                index = cover.index();

            clearTimeout(CoverFlow.settings.timer);
            History.pushState({ type: 'open-adventure', id: id, index: index }, VeloXCHelpers.getPageTitle('open-adventure', parseInt(id, 10)), '/adventure/' + id);
            e.preventDefault();
        });

        $('#langselect > a').bind('click', function(e) {
            var accordian = $('#langselect').find('ul');
            e.preventDefault();
            if (accordian.is(':animated')) {
                return;
            }
            accordian.animate({ height: 'toggle' }, 350, 'easeOutQuad', Scaling.adjustSidebar);
        });

        $('#menu nav a').bind('click', function(e) {
            var page = this.href,
                cleanName = page.split('/').pop();

            if (this.rel === 'home') {
                History.pushState({ type: 'close-page' }, VeloXCHelpers.getPageTitle('close-page'), '/');
            }
            else {
                History.pushState({ type: 'open-page', page: cleanName }, VeloXCHelpers.getPageTitle('open-page', $(this).index() + 1), page);
            }
            e.preventDefault();
        });

        $('#videoplayer').find('a').bind('click', VeloXCHelpers.closeMovie);

        $(window).bind('resize', $.throttle(100, Scaling.windowResize));

        // CoverFlow-key nav, disable on IE until mouseover-bug is fixed
        if (parseInt(VeloXCHelpers.userAgentString.indexOf('msie'), 10) === -1) {
            VeloKeyNav.coverFlowKeyNav({type: 'adventure', covers: 50});
        }

    },
    
    
    playIntro: function() {

        var windowLocationString = window.location.pathname.toLowerCase(),
            coverArray = CoverFlow.settings.coverArray,
            currentCover = CoverFlow.settings.currentCover,
            index = currentCover - 1,
            coversOnScreen = Math.ceil((Scaling.windowDimensions.width - 270) / CoverFlow.settings.coverWidth),
            timer;

        function applyRemainingCovers() {

            var id, page;

            $('body').removeClass('play-coverflow-intro');
            VeloXCHelpers.removeOverlay();

            if (windowLocationString.indexOf('/adventure/') > -1) {
                id = parseInt(windowLocationString.split('/adventure/').pop(), 10);
                Adventure.open({ id: id, index: id - 1 });
            }
            else if (windowLocationString.indexOf('/cars/') > -1) {
                id = parseInt(windowLocationString.split('/cars/').pop(), 10);
                if (/([0-9]+)/.test(id)) {
                    Page.open('cars', function() {
                        Velo.open({id: id, index: id});
                    });
                }
                else {
                    Page.open('cars');
                }
            }
            else if (windowLocationString.indexOf('/v40cc/') > -1) {
                id = parseInt(windowLocationString.split('/v40cc/').pop(), 10);
                if (/([0-9]+)/.test(id)) {
                    Page.open('v40cc', function() {
                        Velo.open({id: id, index: id});
                    });
                }
                else {
                    Page.open('v40cc');
                }
            }
            else if (/\/(v40cc|cars|map|competition|about|app|offer)/.test(windowLocationString)) {
                page = windowLocationString.split('/').pop();
                Page.open(page);
            }

        }

        $('body').removeClass('loading-coverflow').addClass('play-coverflow-intro summer');

        // The sidebar is hidden until the class loading-coverflow is removed. 
        // Have to run adjustSidebar when the sidebar has become visible. (using outerHeight calculations)
        Scaling.adjustSidebar();

        if (windowLocationString.indexOf('/adventure/') > -1) {
            // Reset curernt cover and index
            currentCover = parseInt(windowLocationString.split('/adventure/').pop(), 10);
            index = currentCover - 1;
            VeloXCHelpers.addOverlay();
        }

        CoverFlow.settings.element.scrollLeft(180 * (index));

        CoverFlow.settings.sidebar.animate({ left: 0 }, 500, 'easeOutQuad', function() {

            if (index + coversOnScreen > 50) {
                index = 50 - coversOnScreen;
            }

            (function animateCover() {

                if (index >= coversOnScreen + (currentCover - 1)) {
                    clearTimeout(timer);
                    applyRemainingCovers();
                    return;
                }

                timer = setTimeout(function() {
                    coverArray.eq(index).animate({ opacity: 1 }, 200, 'easeInOutQuad');
                    index++;
                    animateCover();
                }, 100);

            })();
        });

    },
    
    
    init: function() {

        var firstPreloadIndex = CoverFlow.settings.currentCover - 1, //25
            lastPreloadIndex,
            offsetIndex = 4,
            coversOnScreen;

        CoverFlow.settings.element = $('#cover-flow');
        CoverFlow.settings.sidebar = $('#sidebar');
        CoverFlow.settings.coverWrapper = CoverFlow.settings.element.find('nav');
        CoverFlow.settings.coverArray = CoverFlow.settings.element.find('a');
        CoverFlow.settings.coverWidth = CoverFlow.settings.coverArray.width();
        CoverFlow.settings.coverCount = CoverFlow.settings.coverArray.length;

        coversOnScreen = Math.ceil(($(window).width() - 270) / CoverFlow.settings.coverWidth);
        lastPreloadIndex = firstPreloadIndex + coversOnScreen + offsetIndex;
        firstPreloadIndex = firstPreloadIndex - offsetIndex;

        // Determine lang, used in #GATracking
        VeloXCHelpers.lang = $('body').attr('class').split('lang-').pop();

        // Append coverflow-loader
        CoverFlow.settings.loader = $('#coverflow-loader').length? $('#coverflow-loader') : $('<div id="coverflow-loader" />').appendTo('body');

        VeloCompability.fixGeneratedContent();

        Scaling.windowResize();
        this.setWrapperWidth();
        this.setCenterLine();
        this.adjustNavSpeed();
        this.bindEvents();

        // Add an overlay so the user dont scroll away before we load the right covers
        VeloXCHelpers.addOverlay();

        $('#cover-flow img').slice(firstPreloadIndex, lastPreloadIndex).preload({ onFinish: CoverFlow.playIntro });
        //$.preload('#cover-flow img', { onFinish: CoverFlow.playIntro });

    }
    
    
};


/* HISTORY.JS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
(function(window, undefined) {

    var History = window.History;
		
    if (!History.enabled) {
        return false;
    }

    // Bind to StateChange Event
    History.Adapter.bind(window, 'statechange', function() { 

        var State = History.getState(),
            windowLocationString = window.location.pathname.toLowerCase(),
            prevId = 0, 
            currId = 0,
            id, index, urlId, urlPage, delta, coversOnScreen;

        function get_dir(filter) {

            if (State.cleanUrl) {
                currId = parseInt(State.cleanUrl.split('/' + filter + '/').pop(), 10);
            }
            
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.url) {
                prevId = parseInt(VeloXCHelpers.prevHistoryState.data.url.split('/' + filter + '/').pop(), 10);
            }

            //log('Curr: ' + currId + ' Prev: ' + prevId);

            return (currId > prevId)? 'next' : 'prev';
        }

        function scrollToCenter(type, index, cb) {
        	console.log(type);
            var obj = (type === 'cars' || type === 'v40cc')? Velo : CoverFlow,
                currentScrollLeft = obj.settings.element.scrollLeft(),
                coversOnScreen = Math.ceil((Scaling.windowDimensions.width - 270) / 180),
                minVisible = Math.round(currentScrollLeft / 180),
                maxVisible = minVisible + coversOnScreen - 1;

            //log('min: ' + minVisible + ' max: ' + maxVisible);
            //log('Duration: ' + (currentScrollLeft - (180 * (index + 1 - coversOnScreen))));

            if (index >= minVisible && index <= maxVisible) {
            
                if ($.isFunction(cb)) {
                    cb();
                }
            }
            
            else {
                if ($.isFunction(cb)) {
                    VeloXCHelpers.addOverlay();
                    obj.settings.element.stop().animate({ scrollLeft: (180 * (index - Math.ceil(coversOnScreen/2))) + 180 }, {
                        duration: 500,
                        easing: 'easeOutQuad',
                        queue: false,
                        complete: cb
                    });
                }
            }

        }

        /*
        log('State: ' + State.data.type);
        if (VeloXCHelpers.prevHistoryState) log('Prev: ' + VeloXCHelpers.prevHistoryState.data.type);
        */

        var pageType = 'cars'

        if(State.url.indexOf('/v40cc') > -1) {
        	pageType = 'v40cc';
        }


        if (State.data.type === 'open-adventure') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-adventure') {
                Adventure.slideInAdventure('/adventure/' + State.data.id, get_dir('adventure'));
            }
            else {
                if (Page.settings.visible) {
                    Page.playOutro(VeloXCHelpers.addOverlay);
                }
                scrollToCenter('adventures', State.data.index, function(){ Adventure.open(State.data); });
            }
            
        }
        
        else if (State.data.type === 'close-adventure') {
        
            if ($(window).scrollTop() !== 0) {
                $('html, body').firstScrollable().stop().animate({'scrollTop': 0}, $(window).scrollTop(), 'easeOutQuad', Adventure.playOutro);
            }
            else {
                Adventure.playOutro();
            }
            if (Page.settings.visible) {
                Page.playOutro();
            }
            
        }
        
        else if (State.data.type === 'open-car') {
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-car') {
                Velo.slideInCar('/' + pageType +'/' + State.data.id, get_dir(pageType));
                console.log("1");
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-page') {
                Page.open(pageType, function() {
                    scrollToCenter(pageType, VeloXCHelpers.prevHistoryState.data.index, function(){ Velo.open(VeloXCHelpers.prevHistoryState.data); });
                });
                console.log("2");
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-page' && VeloXCHelpers.prevHistoryState.data.page !== pageType) {
                Page.playOutro(function(){
                    Page.open(pageType, function() { scrollToCenter(pageType, State.data.index, function(){ Velo.open(State.data); }); });
                });
                console.log("3");
            }
            else {
                scrollToCenter(pageType, State.data.index, function(){ Velo.open(State.data); });
                console.log("4");
            }
            
        }
        
        else if (State.data.type === 'close-car') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-page') {
                Page.open(pageType);
            }
            else {
                Velo.playOutro();
            }
            
        }
        
        else if (State.data.type === 'slide-adventure') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-adventure') {
                Adventure.slideInAdventure(State.data.url, get_dir('adventure'));
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-adventure') {
                id = State.data.url.split('/adventure/').pop();
                index = (id - 1 < 0)? 0 : id - 1;
                scrollToCenter('adventures', index, function(){ Adventure.open({ id: id, index: index, type: 'open-adventure' }); });
            }
            else {
                Adventure.slideInAdventure(State.data.url, State.data.direction);
            }
            
        }
        
        else if (State.data.type === 'slide-car') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-car') {
                Velo.slideInCar(State.data.url, get_dir(pageType));
            }
            else if (VeloXCHelpers.prevHistoryState && (VeloXCHelpers.prevHistoryState.data.type === 'close-car' || VeloXCHelpers.prevHistoryState.data.type === 'open-page')) {
                id = State.data.url.split('/' + pageType + '/').pop();
                //index = (id - 1 < 0)? 0 : id - 1;
                index = id;
                if (State.data.page !== pageType) {
                    Page.playOutro(function(){
                        Page.open(pageType, function() { scrollToCenter(pageType, index, function() { Velo.open({ id: id, index: index, type: 'open-car' }); }); });
                    });
                }
                else {
                    scrollToCenter(pageType, index, function(){ Velo.open({ id: id, index: index, type: 'open-car' }); });
                }
            }
            else {
                Velo.slideInCar(State.data.url, State.data.direction);
            }
            
        }
        
        else if (State.data.type === 'open-page') {
        
            if(VeloXCHelpers.prevHistoryState && (VeloXCHelpers.prevHistoryState.data.type === 'map-to-adventure' || VeloXCHelpers.prevHistoryState.data.type === 'open-adventure')) {
                Adventure.playOutro();
                Page.open(State.data.page);
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-car' && State.data.page !== pageType) {
                Page.playOutro(function(){
                    Page.open(State.data.page);
                });
            }
            else if (VeloXCHelpers.prevHistoryState && (VeloXCHelpers.prevHistoryState.data.type === 'open-car' || VeloXCHelpers.prevHistoryState.data.type === 'slide-car')) {
                if (State.data.page === pageType) {
                    Velo.playOutro();
                }
                else {
                    Page.playOutro(function(){
                        Page.open(State.data.page);
                    });
                }
            }
            else {
                if (Page.settings.visible) {
                    Page.playOutro(function() {
                        Page.open(State.data.page);
                    });
                }
                else {
                    Page.open(State.data.page);
                }
            }
            
        }
        
        else if (State.data.type === 'close-page') {
        
            if(VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-adventure') {
                Adventure.playOutro();
            }
            else {
                Page.playOutro();
            }
            
        }
        
        else if (State.data.type === 'map-to-adventure') {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-adventure') {
                delta = (get_dir('adventure') === 'next')? 1 : -1;
                State.data.url = '/' + (parseInt(VeloXCHelpers.prevHistoryState.data.url.split('/adventure/').pop(), 10) + delta);
                Adventure.slideInAdventure(State.data.url, get_dir('adventure'));
            }
            else {
                coversOnScreen = Math.ceil((CoverFlow.settings.element.width() - CoverFlow.settings.sidebar.width()) / CoverFlow.settings.coverWidth);
                VeloXCHelpers.addOverlay();
                CoverFlow.settings.element.scrollLeft(180 * (State.data.index - Math.ceil(coversOnScreen/2)));
                Page.playOutro(function() {
                    Adventure.open(State.data);
                });
            }
            
        }
        
        else if (State.data.type === undefined) {
        
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-adventure') {
                urlId = parseInt(windowLocationString.split('/adventure/').pop(), 10);
                scrollToCenter('adventures', (urlId - 1), function(){ Adventure.open({ id: urlId, index: urlId - 1 }); });
            }
            if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-adventure') {
                Adventure.playOutro(); /* Fix for html4 history */
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'slide-adventure') {
                delta = (get_dir('adventure') === 'next')? 1 : -1;
                State.data.url = '/' + (parseInt(VeloXCHelpers.prevHistoryState.data.url.split('/adventure/').pop(), 10) + delta);
                Adventure.slideInAdventure(State.data.url, get_dir('adventure'));
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'close-page') {
                urlpage = windowLocationString.split('/').pop();
                Page.open(urlpage);
            }
            else if (VeloXCHelpers.prevHistoryState && VeloXCHelpers.prevHistoryState.data.type === 'open-page') {
                urlpage = windowLocationString.split('/').pop();
                if (urlpage.length) {
                    Page.playOutro(function(){
                        Page.open(urlpage);
                    });	
                }
                else {
                    Page.playOutro();
                }
            }
            
        }

        VeloXCHelpers.prevHistoryState = State;

    });

})(window);


/* ADD CLASSES FOR BROWSER SPECIFIC ENHANCEMENTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Using this to fix font-weight in ff-mac */
Modernizr.addTest('ff-mac', function () {   
	return (VeloXCHelpers.userAgentString.indexOf('macintosh') > -1) && (VeloXCHelpers.userAgentString.indexOf('firefox') > -1 );
});

/* Using this to tweak hw-acc */
Modernizr.addTest('safari', function () {   
	return (VeloXCHelpers.userAgentString.indexOf('safari') > -1) && (VeloXCHelpers.userAgentString.indexOf('chrome') === -1);
});

/* Chrome */
Modernizr.addTest('chrome', function () {   
	return (VeloXCHelpers.userAgentString.indexOf('safari') > -1) && (VeloXCHelpers.userAgentString.indexOf('chrome') > -1);
});


/* JQUERY EXTENSIONS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$.fn.extend({
  firstScrollable: function(dir) {
    var scrl = VeloXCHelpers.getScrollable.call(this, {el: 'first', dir: dir});
    return this.pushStack(scrl);
  }
});

$.extend(jQuery.easing, {
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	}
});


/* #DOM-READY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
jQuery(function(){
	
	CoverFlow.init();
	
	$(document).bind('mousewheel', function(e, delta) {
		e.preventDefault();
		Adventure.mouseWheelScroll(delta);
	});

	$(window).bind('scroll', Adventure.moveCaptions);
	
});