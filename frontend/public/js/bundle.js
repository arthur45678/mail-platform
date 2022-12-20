/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
    this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * perfect-scrollbar v1.3.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.PerfectScrollbar=e()}(this,function(){"use strict";function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var r=e[i];"number"==typeof r&&(r+="px"),t.style[i]=r}return t}function i(t){var e=document.createElement("div");return e.className=t,e}function r(t,e){if(!v)throw new Error("No element matching method supported");return v.call(t,e)}function l(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function n(t,e){return Array.prototype.filter.call(t.children,function(t){return r(t,e)})}function o(t,e){var i=t.element.classList,r=m.state.scrolling(e);i.contains(r)?clearTimeout(Y[e]):i.add(r)}function s(t,e){Y[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(m.state.scrolling(e))},t.settings.scrollingThreshold)}function a(t,e){o(t,e),s(t,e)}function c(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function h(t,e,i,r,l){var n=i[0],o=i[1],s=i[2],h=i[3],u=i[4],d=i[5];void 0===r&&(r=!0),void 0===l&&(l=!1);var f=t.element;t.reach[h]=null,f[s]<1&&(t.reach[h]="start"),f[s]>t[n]-t[o]-1&&(t.reach[h]="end"),e&&(f.dispatchEvent(c("ps-scroll-"+h)),e<0?f.dispatchEvent(c("ps-scroll-"+u)):e>0&&f.dispatchEvent(c("ps-scroll-"+d)),r&&a(t,h)),t.reach[h]&&(e||l)&&f.dispatchEvent(c("ps-"+h+"-reach-"+t.reach[h]))}function u(t){return parseInt(t,10)||0}function d(t){return r(t,"input,[contenteditable]")||r(t,"select,[contenteditable]")||r(t,"textarea,[contenteditable]")||r(t,"button,[contenteditable]")}function f(e){var i=t(e);return u(i.width)+u(i.paddingLeft)+u(i.paddingRight)+u(i.borderLeftWidth)+u(i.borderRightWidth)}function p(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function b(t,i){var r={width:i.railXWidth};i.isRtl?r.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:r.left=t.scrollLeft,i.isScrollbarXUsingBottom?r.bottom=i.scrollbarXBottom-t.scrollTop:r.top=i.scrollbarXTop+t.scrollTop,e(i.scrollbarXRail,r);var l={top:t.scrollTop,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?l.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth:l.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?l.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:l.left=i.scrollbarYLeft+t.scrollLeft,e(i.scrollbarYRail,l),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}function g(t,e){function i(e){p[d]=b+v*(e[a]-g),o(t,f),T(t),e.stopPropagation(),e.preventDefault()}function r(){s(t,f),t.event.unbind(t.ownerDocument,"mousemove",i)}var l=e[0],n=e[1],a=e[2],c=e[3],h=e[4],u=e[5],d=e[6],f=e[7],p=t.element,b=null,g=null,v=null;t.event.bind(t[h],"mousedown",function(e){b=p[d],g=e[a],v=(t[n]-t[l])/(t[c]-t[u]),t.event.bind(t.ownerDocument,"mousemove",i),t.event.once(t.ownerDocument,"mouseup",r),e.stopPropagation(),e.preventDefault()})}var v="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector),m={main:"ps",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Y={x:null,y:null},X=function(t){this.element=t,this.handlers={}},w={isEmpty:{configurable:!0}};X.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},X.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(r){return!(!e||r===e)||(i.element.removeEventListener(t,r,!1),!1)})},X.prototype.unbindAll=function(){var t=this;for(var e in t.handlers)t.unbind(e)},w.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(X.prototype,w);var y=function(){this.eventElements=[]};y.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new X(t),this.eventElements.push(e)),e},y.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},y.prototype.unbind=function(t,e,i){var r=this.eventElement(t);r.unbind(e,i),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},y.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},y.prototype.once=function(t,e,i){var r=this.eventElement(t),l=function(t){r.unbind(e,l),i(t)};r.bind(e,l)};var W=function(t,e,i,r,l){void 0===r&&(r=!0),void 0===l&&(l=!1);var n;if("top"===e)n=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");n=["contentWidth","containerWidth","scrollLeft","x","left","right"]}h(t,i,n,r,l)},L={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},T=function(t){var e=t.element;t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(n(e,m.element.rail("x")).forEach(function(t){return l(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(n(e,m.element.rail("y")).forEach(function(t){return l(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=p(t,u(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=u((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=p(t,u(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=u(e.scrollTop*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),b(e,t),t.scrollbarXActive?e.classList.add(m.state.active("x")):(e.classList.remove(m.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=0),t.scrollbarYActive?e.classList.add(m.state.active("y")):(e.classList.remove(m.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)},R={"click-rail":function(t){t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,T(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,T(t),e.stopPropagation()})},"drag-thumb":function(t){g(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x"]),g(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y"])},keyboard:function(t){function e(e,r){var l=i.scrollTop;if(0===e){if(!t.scrollbarYActive)return!1;if(0===l&&r>0||l>=t.contentHeight-t.containerHeight&&r<0)return!t.settings.wheelPropagation}var n=i.scrollLeft;if(0===r){if(!t.scrollbarXActive)return!1;if(0===n&&e<0||n>=t.contentWidth-t.containerWidth&&e>0)return!t.settings.wheelPropagation}return!0}var i=t.element,l=function(){return r(i,":hover")},n=function(){return r(t.scrollbarX,":focus")||r(t.scrollbarY,":focus")};t.event.bind(t.ownerDocument,"keydown",function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(l()||n())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(d(o))return}var s=0,a=0;switch(r.which){case 37:s=r.metaKey?-t.contentWidth:r.altKey?-t.containerWidth:-30;break;case 38:a=r.metaKey?t.contentHeight:r.altKey?t.containerHeight:30;break;case 39:s=r.metaKey?t.contentWidth:r.altKey?t.containerWidth:30;break;case 40:a=r.metaKey?-t.contentHeight:r.altKey?-t.containerHeight:-30;break;case 32:a=r.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(i.scrollTop-=a,i.scrollLeft+=s,T(t),e(s,a)&&r.preventDefault())}})},wheel:function(e){function i(t,i){var r=0===o.scrollTop,l=o.scrollTop+o.offsetHeight===o.scrollHeight,n=0===o.scrollLeft,s=o.scrollLeft+o.offsetWidth===o.offsetWidth;return!(Math.abs(i)>Math.abs(t)?r||l:n||s)||!e.settings.wheelPropagation}function r(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}function l(e,i,r){if(!L.isWebKit&&o.querySelector("select:focus"))return!0;if(!o.contains(e))return!1;for(var l=e;l&&l!==o;){if(l.classList.contains(m.element.consuming))return!0;var n=t(l);if([n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&!(0===l.scrollTop&&r>0||l.scrollTop===s&&r<0))return!0;var a=l.scrollLeft-l.clientWidth;if(a>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===a&&i>0))return!0}l=l.parentNode}return!1}function n(t){var n=r(t),s=n[0],a=n[1];if(!l(t.target,s,a)){var c=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(a?o.scrollTop-=a*e.settings.wheelSpeed:o.scrollTop+=s*e.settings.wheelSpeed,c=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(s?o.scrollLeft+=s*e.settings.wheelSpeed:o.scrollLeft-=a*e.settings.wheelSpeed,c=!0):(o.scrollTop-=a*e.settings.wheelSpeed,o.scrollLeft+=s*e.settings.wheelSpeed),T(e),(c=c||i(s,a))&&!t.ctrlKey&&(t.stopPropagation(),t.preventDefault())}}var o=e.element;void 0!==window.onwheel?e.event.bind(o,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(o,"mousewheel",n)},touch:function(e){function i(t,i){var r=h.scrollTop,l=h.scrollLeft,n=Math.abs(t),o=Math.abs(i);if(o>n){if(i<0&&r===e.contentHeight-e.containerHeight||i>0&&0===r)return 0===window.scrollY&&i>0&&L.isChrome}else if(n>o&&(t<0&&l===e.contentWidth-e.containerWidth||t>0&&0===l))return!0;return!0}function r(t,i){h.scrollTop-=i,h.scrollLeft-=t,T(e)}function l(t){return t.targetTouches?t.targetTouches[0]:t}function n(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function o(t){if(n(t)){var e=l(t);u.pageX=e.pageX,u.pageY=e.pageY,d=(new Date).getTime(),null!==p&&clearInterval(p)}}function s(e,i,r){if(!h.contains(e))return!1;for(var l=e;l&&l!==h;){if(l.classList.contains(m.element.consuming))return!0;var n=t(l);if([n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/)){var o=l.scrollHeight-l.clientHeight;if(o>0&&!(0===l.scrollTop&&r>0||l.scrollTop===o&&r<0))return!0;var s=l.scrollLeft-l.clientWidth;if(s>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===s&&i>0))return!0}l=l.parentNode}return!1}function a(t){if(n(t)){var e=l(t),o={pageX:e.pageX,pageY:e.pageY},a=o.pageX-u.pageX,c=o.pageY-u.pageY;if(s(t.target,a,c))return;r(a,c),u=o;var h=(new Date).getTime(),p=h-d;p>0&&(f.x=a/p,f.y=c/p,d=h),i(a,c)&&t.preventDefault()}}function c(){e.settings.swipeEasing&&(clearInterval(p),p=setInterval(function(){e.isInitialized?clearInterval(p):f.x||f.y?Math.abs(f.x)<.01&&Math.abs(f.y)<.01?clearInterval(p):(r(30*f.x,30*f.y),f.x*=.8,f.y*=.8):clearInterval(p)},10))}if(L.supportsTouch||L.supportsIePointer){var h=e.element,u={},d=0,f={},p=null;L.supportsTouch?(e.event.bind(h,"touchstart",o),e.event.bind(h,"touchmove",a),e.event.bind(h,"touchend",c)):L.supportsIePointer&&(window.PointerEvent?(e.event.bind(h,"pointerdown",o),e.event.bind(h,"pointermove",a),e.event.bind(h,"pointerup",c)):window.MSPointerEvent&&(e.event.bind(h,"MSPointerDown",o),e.event.bind(h,"MSPointerMove",a),e.event.bind(h,"MSPointerUp",c)))}}},H=function(r,l){var n=this;if(void 0===l&&(l={}),"string"==typeof r&&(r=document.querySelector(r)),!r||!r.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=r,r.classList.add(m.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1};for(var o in l)n.settings[o]=l[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return r.classList.add(m.state.focus)},a=function(){return r.classList.remove(m.state.focus)};this.isRtl="rtl"===t(r).direction,this.isNegativeScroll=function(){var t=r.scrollLeft,e=null;return r.scrollLeft=-1,e=r.scrollLeft<0,r.scrollLeft=t,e}(),this.negativeScrollAdjustment=this.isNegativeScroll?r.scrollWidth-r.clientWidth:0,this.event=new y,this.ownerDocument=r.ownerDocument||document,this.scrollbarXRail=i(m.element.rail("x")),r.appendChild(this.scrollbarXRail),this.scrollbarX=i(m.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=u(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=u(c.borderLeftWidth)+u(c.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=u(c.marginLeft)+u(c.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(m.element.rail("y")),r.appendChild(this.scrollbarYRail),this.scrollbarY=i(m.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var h=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(h.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=u(h.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?f(this.scrollbarY):null,this.railBorderYWidth=u(h.borderTopWidth)+u(h.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=u(h.marginTop)+u(h.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:r.scrollLeft<=0?"start":r.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:r.scrollTop<=0?"start":r.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return R[t](n)}),this.lastScrollTop=r.scrollTop,this.lastScrollLeft=r.scrollLeft,this.event.bind(this.element,"scroll",function(t){return n.onScroll(t)}),T(this)};return H.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=u(t(this.scrollbarXRail).marginLeft)+u(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=u(t(this.scrollbarYRail).marginTop)+u(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),T(this),W(this,"top",0,!1,!0),W(this,"left",0,!1,!0),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},H.prototype.onScroll=function(t){this.isAlive&&(T(this),W(this,"top",this.element.scrollTop-this.lastScrollTop),W(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=this.element.scrollTop,this.lastScrollLeft=this.element.scrollLeft)},H.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),l(this.scrollbarX),l(this.scrollbarY),l(this.scrollbarXRail),l(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},H.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},H});

/* mousetrap v1.6.2 craig.is/killing/mice */
(function(p,t,h){function u(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function y(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return m[a.which]?m[a.which]:q[a.which]?q[a.which]:String.fromCharCode(a.which).toLowerCase()}function E(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function v(a){return"shift"==a||"ctrl"==a||"alt"==a||
    "meta"==a}function z(a,b){var d,e=[];var c=a;"+"===c?c=["+"]:(c=c.replace(/\+{2}/g,"+plus"),c=c.split("+"));for(d=0;d<c.length;++d){var k=c[d];A[k]&&(k=A[k]);b&&"keypress"!=b&&B[k]&&(k=B[k],e.push("shift"));v(k)&&e.push(k)}c=k;d=b;if(!d){if(!n){n={};for(var h in m)95<h&&112>h||m.hasOwnProperty(h)&&(n[m[h]]=h)}d=n[c]?"keydown":"keypress"}"keypress"==d&&e.length&&(d="keydown");return{key:k,modifiers:e,action:d}}function C(a,b){return null===a||a===t?!1:a===b?!0:C(a.parentNode,b)}function e(a){function b(a){a=
    a||{};var b=!1,l;for(l in n)a[l]?b=!0:n[l]=0;b||(w=!1)}function d(a,b,r,g,F,e){var l,D=[],h=r.type;if(!f._callbacks[a])return[];"keyup"==h&&v(a)&&(b=[a]);for(l=0;l<f._callbacks[a].length;++l){var d=f._callbacks[a][l];if((g||!d.seq||n[d.seq]==d.level)&&h==d.action){var c;(c="keypress"==h&&!r.metaKey&&!r.ctrlKey)||(c=d.modifiers,c=b.sort().join(",")===c.sort().join(","));c&&(c=g&&d.seq==g&&d.level==e,(!g&&d.combo==F||c)&&f._callbacks[a].splice(l,1),D.push(d))}}return D}function h(a,b,d,g){f.stopCallback(b,
    b.target||b.srcElement,d,g)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function c(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=y(a);b&&("keyup"==a.type&&x===b?x=!1:f.handleKey(b,E(a),a))}function k(a,d,r,g){function l(d){return function(){w=d;++n[a];clearTimeout(p);p=setTimeout(b,1E3)}}function e(d){h(r,d,a);"keyup"!==g&&(x=y(d));setTimeout(b,10)}for(var c=n[a]=0;c<d.length;++c){var f=c+1===d.length?e:l(g||
    z(d[c+1]).action);m(d[c],f,g,a,c)}}function m(a,b,c,g,e){f._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var h=a.split(" ");1<h.length?k(a,h,b,c):(c=z(a,c),f._callbacks[c.key]=f._callbacks[c.key]||[],d(c.key,c.modifiers,{type:c.action},g,a,e),f._callbacks[c.key][g?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:g,level:e,combo:a}))}var f=this;a=a||t;if(!(f instanceof e))return new e(a);f.target=a;f._callbacks={};f._directMap={};var n={},p,x=!1,q=!1,w=!1;f._handleKey=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            c,e){var g=d(a,c,e),f;c={};var l=0,k=!1;for(f=0;f<g.length;++f)g[f].seq&&(l=Math.max(l,g[f].level));for(f=0;f<g.length;++f)g[f].seq?g[f].level==l&&(k=!0,c[g[f].seq]=1,h(g[f].callback,e,g[f].combo,g[f].seq)):k||h(g[f].callback,e,g[f].combo);g="keypress"==e.type&&q;e.type!=w||v(a)||g||b(c);q=k&&"keydown"==e.type};f._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)m(a[d],b,c)};u(a,"keypress",c);u(a,"keydown",c);u(a,"keyup",c)}if(p){var m={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
    18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},q={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",
    escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(h=1;20>h;++h)m[111+h]="f"+h;for(h=0;9>=h;++h)m[h+96]=h.toString();e.prototype.bind=function(a,b,d){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,d);return this};e.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};e.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};e.prototype.reset=function(){this._callbacks={};
    this._directMap={};return this};e.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||C(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};e.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};e.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(m[b]=a[b]);n=null};e.init=function(){var a=e(t),b;for(b in a)"_"!==b.charAt(0)&&(e[b]=function(b){return function(){return a[b].apply(a,
    arguments)}}(b))};e.init();p.Mousetrap=e;"undefined"!==typeof module&&module.exports&&(module.exports=e);"function"===typeof define&&define.amd&&define(function(){return e})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);


/* Dore Main Script

Table of Contents

01. Utils
02. Shift Select
03. Dore Main Plugin
  03.01. Getting Colors from CSS
  03.02. Resize
  03.03. Search
  03.04. Shift Selectable Init
  03.05. Menu
  03.06. App Menu
  03.07. Survey App
  03.08. Rotate Button
  03.09. Charts
  03.10. Calendar
  03.11. Datatable
  03.12. Notification
  03.13. Dropdown Select
  03.14. Slick Slider
  03.15. Form Validation
  03.16. Tooltip
  03.17. Popover
  03.18. Select 2
  03.19. Datepicker
  03.20. Dropzone
  03.21. Cropperjs
  03.22. Range Slider
  03.23. Modal Passing Content
  03.24. Scrollbar
  03.25. Progress
  03.26. Rating
  03.27. Tags Input
  03.28. Sortable
  03.29. State Button
  03.30. Typeahead
  03.31. Full Screen
  03.32. Html Editors
  03.33. Showing Body
  03.34. Keyboard Shortcuts
  03.35. Context Menu
  03.36. Select from Library
  03.37. Feedback
  03.38. Smart Wizard
  03.39. Countdown
  03.40. Lightbox
  03.41. Ellipsis
  03.42. Glide
  03.43. Validation
*/

/* 01. Utils */
$.fn.addCommas = function (nStr) {
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
};

// State Button
(function ($) {
    $.fn.stateButton = function (options) {
        if (this.length > 1) {
            this.each(function () { $(this).stateButton(options) });
            return this;
        }

        this.initialize = function () {
            return this;
        };

        this.showSpinner = function () {
            $(this).addClass("show-spinner");
            $(this).addClass("active");
            return this;
        };

        this.hideSpinner = function () {
            $(this).removeClass("show-spinner");
            return this;
        };

        this.showFail = function (tooltip) {
            $(this).addClass("show-fail");
            $(this).removeClass("show-spinner");
            if (tooltip) {
                $(this).find(".icon.fail").tooltip("show");
            }
            return this;
        };

        this.showSuccess = function (tooltip) {
            $(this).addClass("show-success");
            $(this).removeClass("show-spinner");
            if (tooltip) {
                $(this).find(".icon.success").tooltip("show");
            }
            return this;
        };

        this.reset = function () {
            this.hideTooltips();
            this.hideSpinner();
            $(this).removeClass("show-success");
            $(this).removeClass("show-fail");
            $(this).removeClass("active");
        }

        this.hideTooltips = function () {
            this.hideFailTooltip();
            this.hideSuccessTooltip();
            return this;
        };

        this.showSuccessTooltip = function () {
            $(this).find(".icon.success").tooltip("show");
            return this;
        };

        this.hideSuccessTooltip = function () {
            $(this).find(".icon.success").tooltip("dispose");
            return this;
        };

        this.showFailTooltip = function () {
            $(this).find(".icon.fail").tooltip("show");
            return this;
        };

        this.hideFailTooltip = function () {
            $(this).find(".icon.fail").tooltip("dispose");
            return this;
        };

        return this.initialize();
    }
})(jQuery);

/* 02. Shift Select */
$.shiftSelectable = function (element, config) {
    var plugin = this;
    config = $.extend(
        {
            items: ".card"
        },
        config
    );
    var $container = $(element);
    var $checkAll = null;
    var $boxes = $container.find("input[type='checkbox']");
    var lastChecked;
    if ($container.data("checkAll")) {
        $checkAll = $("#" + $container.data("checkAll"));
        $checkAll.on("click", function () {
            $boxes.prop("checked", $($checkAll).prop("checked")).trigger("change");
            document.activeElement.blur();
            controlActiveClasses();
        });
    }

    function itemClick(checkbox, shiftKey) {
        $(checkbox)
            .prop("checked", !$(checkbox).prop("checked"))
            .trigger("change");

        if (!lastChecked) {
            lastChecked = checkbox;
        }
        if (lastChecked) {
            if (shiftKey) {
                var start = $boxes.index(checkbox);
                var end = $boxes.index(lastChecked);
                $boxes
                    .slice(Math.min(start, end), Math.max(start, end) + 1)
                    .prop("checked", lastChecked.checked)
                    .trigger("change");
            }
            lastChecked = checkbox;
        }

        if ($checkAll) {
            var anyChecked = false;
            var allChecked = true;
            $boxes.each(function () {
                if ($(this).prop("checked")) {
                    anyChecked = true;
                } else {
                    allChecked = false;
                }
            });
            if (anyChecked) {
                $checkAll.prop("indeterminate", anyChecked);
            } else {
                $checkAll.prop("indeterminate", anyChecked);
                $checkAll.prop("checked", anyChecked);
            }
            if (allChecked) {
                $checkAll.prop("indeterminate", false);
                $checkAll.prop("checked", allChecked);
            }
        }
        document.activeElement.blur();
        controlActiveClasses();
    }

    $container.on("click", config.items, function (e) {
        if (
            $(e.target).is("a") ||
            $(e.target)
                .parent()
                .is("a")
        ) {
            return;
        }

        if ($(e.target).is("input[type='checkbox']")) {
            e.preventDefault();
            e.stopPropagation();
        }
        var checkbox = $(this).find("input[type='checkbox']")[0];
        itemClick(checkbox, e.shiftKey);
    });

    function controlActiveClasses() {
        $boxes.each(function () {
            if ($(this).prop("checked")) {
                $(this)
                    .parents(".card")
                    .addClass("active");
            } else {
                $(this)
                    .parents(".card")
                    .removeClass("active");
            }
        });
    }

    plugin.update = function () {
        $boxes = $container.find("input[type='checkbox']");
    }

    plugin.selectAll = function () {
        if ($checkAll) {
            $boxes.prop("checked", true).trigger("change");
            $checkAll.prop("checked", true);
            $checkAll.prop("indeterminate", false);
            controlActiveClasses();
        }
    };

    plugin.deSelectAll = function () {
        if ($checkAll) {
            $boxes.prop("checked", false).trigger("change");
            $checkAll.prop("checked", false);
            $checkAll.prop("indeterminate", false);
            controlActiveClasses();
        }
    };

    plugin.rightClick = function (trigger) {
        var checkbox = $(trigger).find("input[type='checkbox']")[0];
        if ($(checkbox).prop("checked")) {
            return;
        }
        plugin.deSelectAll();
        itemClick(checkbox, false);
    };
};

$.fn.shiftSelectable = function (options) {
    return this.each(function () {
        if (undefined == $(this).data("shiftSelectable")) {
            var plugin = new $.shiftSelectable(this, options);
            $(this).data("shiftSelectable", plugin);
        }
    });
};

/* 03. Dore Main Plugin */
$.dore = function (element, options) {
    var defaults = {};
    var plugin = this;
    plugin.settings = {};
    var $element = $(element);
    var element = element;
    var $shiftSelect;
    var direction;
    var isRtl = false;

    function init() {
        options = options || {};
        plugin.settings = $.extend({}, defaults, options);
        setDirection();

        /* 03.01. Getting Colors from CSS */
        var rootStyle = getComputedStyle(document.body);
        var themeColor1 = rootStyle.getPropertyValue("--theme-color-1").trim();
        var themeColor2 = rootStyle.getPropertyValue("--theme-color-2").trim();
        var themeColor3 = rootStyle.getPropertyValue("--theme-color-3").trim();
        var themeColor4 = rootStyle.getPropertyValue("--theme-color-4").trim();
        var themeColor5 = rootStyle.getPropertyValue("--theme-color-5").trim();
        var themeColor6 = rootStyle.getPropertyValue("--theme-color-6").trim();
        var themeColor1_10 = rootStyle
            .getPropertyValue("--theme-color-1-10")
            .trim();
        var themeColor2_10 = rootStyle
            .getPropertyValue("--theme-color-2-10")
            .trim();
        var themeColor3_10 = rootStyle
            .getPropertyValue("--theme-color-3-10")
            .trim();
        var themeColor4_10 = rootStyle
            .getPropertyValue("--theme-color-4-10")
            .trim();

        var themeColor5_10 = rootStyle
            .getPropertyValue("--theme-color-5-10")
            .trim();
        var themeColor6_10 = rootStyle
            .getPropertyValue("--theme-color-6-10")
            .trim();

        var primaryColor = rootStyle.getPropertyValue("--primary-color").trim();
        var foregroundColor = rootStyle
            .getPropertyValue("--foreground-color")
            .trim();
        var separatorColor = rootStyle.getPropertyValue("--separator-color").trim();

        /* 03.02. Resize */
        var subHiddenBreakpoint = 1440;
        var searchHiddenBreakpoint = 768;
        var menuHiddenBreakpoint = 768;

        function onResize() {
            var windowHeight = $(window).outerHeight();
            var windowWidth = $(window).outerWidth();
            var navbarHeight = $(".navbar").outerHeight();

            var submenuMargin = parseInt(
                $(".sub-menu .scroll").css("margin-top"),
                10
            );

            if ($(".chat-app .scroll").length > 0 && chatAppScroll) {
                $(".chat-app .scroll").scrollTop(
                    $(".chat-app .scroll").prop("scrollHeight")
                );
                chatAppScroll.update();
            }

            if (windowWidth < menuHiddenBreakpoint) {
                $("#app-container").addClass("menu-mobile");
            } else if (windowWidth < subHiddenBreakpoint) {
                $("#app-container").removeClass("menu-mobile");
                if ($("#app-container").hasClass("menu-default")) {
                    $("#app-container").removeClass(allMenuClassNames);
                    $("#app-container").addClass("menu-default menu-sub-hidden");
                }
            } else {
                $("#app-container").removeClass("menu-mobile");
                if (
                    $("#app-container").hasClass("menu-default") &&
                    $("#app-container").hasClass("menu-sub-hidden")
                ) {
                    $("#app-container").removeClass("menu-sub-hidden");
                }
            }

            setMenuClassNames(0, true);
        }

        function setDirection() {
            if (typeof Storage !== "undefined") {
                if (localStorage.getItem("dore-direction")) {
                    direction = localStorage.getItem("dore-direction");
                }
                isRtl = direction == "rtl" && true;
            }
        }

        $(window).on("resize", function (event) {
            if (event.originalEvent.isTrusted) {
                onResize();
            }
        });
        onResize();

        /* 03.03. Search */
        function searchIconClick() {
            if ($(window).outerWidth() < searchHiddenBreakpoint) {
                if ($(".search").hasClass("mobile-view")) {
                    $(".search").removeClass("mobile-view");
                    navigateToSearchPage();
                } else {
                    $(".search").addClass("mobile-view");
                    $(".search input").focus();
                }
            } else {
                navigateToSearchPage();
            }
        }

        $(".search .search-icon").on("click", function () {
            searchIconClick();
        });

        $(".search input").on("keyup", function (e) {
            if (e.which == 13) {
                navigateToSearchPage();
            }
            if (e.which == 27) {
                hideSearchArea();
            }
        });

        function navigateToSearchPage() {
            var inputVal = $(".search input").val();
            var searchPath = $(".search").data("searchPath");
            if (inputVal != "") {
                $(".search input").val("");
                window.location.href = searchPath + inputVal;
            }
        }

        function hideSearchArea() {
            if ($(".search").hasClass("mobile-view")) {
                $(".search").removeClass("mobile-view");
                $(".search input").val("");
            }
        }

        $(document).on("click", function (event) {
            if (
                !$(event.target)
                    .parents()
                    .hasClass("search")
            ) {
                hideSearchArea();
            }
        });

        /* 03.04. Shift Selectable Init */
        $shiftSelect = $(".list").shiftSelectable();

        /* 03.05. Menu */
        var menuClickCount = 0;
        var allMenuClassNames = "menu-default menu-hidden sub-hidden main-hidden menu-sub-hidden main-show-temporary sub-show-temporary menu-mobile";
        function setMenuClassNames(clickIndex, calledFromResize, link) {
            menuClickCount = clickIndex;
            var container = $("#app-container");
            if (container.length == 0) {
                return;
            }

            var link = link || getActiveMainMenuLink();

            //menu-default no subpage
            if (
                $(".sub-menu ul[data-link='" + link + "']").length == 0 &&
                (menuClickCount == 2 || calledFromResize)
            ) {
                if ($(window).outerWidth() >= menuHiddenBreakpoint) {
                    if (isClassIncludedApp("menu-default")) {
                        if (calledFromResize) {
                            $("#app-container").removeClass(allMenuClassNames);
                            $("#app-container").addClass("menu-default menu-sub-hidden sub-hidden");
                            menuClickCount = 0; // This one should be changed from 1 to 0
                        } else {
                            $("#app-container").removeClass(allMenuClassNames);
                            $("#app-container").addClass("menu-default main-hidden menu-sub-hidden sub-hidden");
                            menuClickCount = 0;
                        }
                        resizeCarousel();
                        return;
                    }
                }
            }

            //menu-sub-hidden no subpage
            if (
                $(".sub-menu ul[data-link='" + link + "']").length == 0 &&
                (menuClickCount == 1 || calledFromResize)
            ) {
                if ($(window).outerWidth() >= menuHiddenBreakpoint) {
                    if (isClassIncludedApp("menu-sub-hidden")) {
                        if (calledFromResize) {
                            $("#app-container").removeClass(allMenuClassNames);
                            $("#app-container").addClass("menu-sub-hidden sub-hidden");
                            menuClickCount = 0;
                        } else {
                            $("#app-container").removeClass(allMenuClassNames);
                            $("#app-container").addClass("menu-sub-hidden main-hidden sub-hidden");
                            menuClickCount = -1;
                        }
                        resizeCarousel();
                        return;
                    }
                }
            }

            //menu-hidden no subpage
            if (
                $(".sub-menu ul[data-link='" + link + "']").length == 0 &&
                (menuClickCount == 1 || calledFromResize)
            ) {
                if ($(window).outerWidth() >= menuHiddenBreakpoint) {
                    if (isClassIncludedApp("menu-hidden")) {
                        if (calledFromResize) {
                            $("#app-container").removeClass(allMenuClassNames);
                            $("#app-container").addClass("menu-hidden main-hidden sub-hidden");
                            menuClickCount = 0;
                        } else {
                            $("#app-container").removeClass(allMenuClassNames);
                            $("#app-container").addClass("menu-hidden main-show-temporary");
                            menuClickCount = 3;
                        }
                        resizeCarousel();
                        return;
                    }
                }
            }

            if (clickIndex % 4 == 0) {
                if (isClassIncludedApp("menu-main-hidden")) {
                    nextClasses = "menu-main-hidden";
                } else if (
                    isClassIncludedApp("menu-default") &&
                    isClassIncludedApp("menu-sub-hidden")
                ) {
                    nextClasses = "menu-default menu-sub-hidden";
                } else if (isClassIncludedApp("menu-default")) {
                    nextClasses = "menu-default";
                } else if (isClassIncludedApp("menu-sub-hidden")) {
                    nextClasses = "menu-sub-hidden";
                } else if (isClassIncludedApp("menu-hidden")) {
                    nextClasses = "menu-hidden";
                }
                menuClickCount = 0;
            } else if (clickIndex % 4 == 1) {
                if (
                    isClassIncludedApp("menu-default") &&
                    isClassIncludedApp("menu-sub-hidden")
                ) {
                    nextClasses = "menu-default menu-sub-hidden main-hidden sub-hidden";
                } else if (isClassIncludedApp("menu-default")) {
                    nextClasses = "menu-default sub-hidden";
                } else if (isClassIncludedApp("menu-main-hidden")) {
                    nextClasses = "menu-main-hidden menu-hidden";
                } else if (isClassIncludedApp("menu-sub-hidden")) {
                    nextClasses = "menu-sub-hidden main-hidden sub-hidden";
                } else if (isClassIncludedApp("menu-hidden")) {
                    nextClasses = "menu-hidden main-show-temporary";
                }
            } else if (clickIndex % 4 == 2) {
                if (isClassIncludedApp("menu-main-hidden") && isClassIncludedApp("menu-hidden")) {
                    nextClasses = "menu-main-hidden";
                } else if (
                    isClassIncludedApp("menu-default") &&
                    isClassIncludedApp("menu-sub-hidden")
                ) {
                    nextClasses = "menu-default menu-sub-hidden sub-hidden";
                } else if (isClassIncludedApp("menu-default")) {
                    nextClasses = "menu-default main-hidden sub-hidden";
                } else if (isClassIncludedApp("menu-sub-hidden")) {
                    nextClasses = "menu-sub-hidden sub-hidden";
                } else if (isClassIncludedApp("menu-hidden")) {
                    nextClasses = "menu-hidden main-show-temporary sub-show-temporary";
                }
            } else if (clickIndex % 4 == 3) {
                if (isClassIncludedApp("menu-main-hidden")) {
                    nextClasses = "menu-main-hidden menu-hidden";
                }
                else if (
                    isClassIncludedApp("menu-default") &&
                    isClassIncludedApp("menu-sub-hidden")
                ) {
                    nextClasses = "menu-default menu-sub-hidden sub-show-temporary";
                } else if (isClassIncludedApp("menu-default")) {
                    nextClasses = "menu-default sub-hidden";
                } else if (isClassIncludedApp("menu-sub-hidden")) {
                    nextClasses = "menu-sub-hidden sub-show-temporary";
                } else if (isClassIncludedApp("menu-hidden")) {
                    nextClasses = "menu-hidden main-show-temporary";
                }
            }
            if (isClassIncludedApp("menu-mobile")) {
                nextClasses += " menu-mobile";
            }
            container.removeClass(allMenuClassNames);
            container.addClass(nextClasses);
            resizeCarousel();
        }
        $(".menu-button").on("click", function (event) {
            event.preventDefault();
            // event.stopPropagation();
            setMenuClassNames(++menuClickCount);
        });

        $(".menu-button-mobile").on("click", function (event) {
            event.preventDefault();
            // event.stopPropagation();
            $("#app-container")
                .removeClass("sub-show-temporary")
                .toggleClass("main-show-temporary");
            return false;
        });

        $(".main-menu").on("click", "a", function (event) {
            event.preventDefault();
            // event.stopPropagation();
            var link = $(this)
                .attr("href")
                .replace("#", "");
            if ($(".sub-menu ul[data-link='" + link + "']").length == 0) {
                var target = $(this).attr("target");
                if ($(this).attr("target") == null) {
                    window.open(link, "_self");
                } else {
                    window.open(link, target);
                }
                return;
            }

            showSubMenu($(this).attr("href"));
            var container = $("#app-container");
            if (!$("#app-container").hasClass("menu-mobile")) {
                if (
                    $("#app-container").hasClass("menu-sub-hidden") &&
                    (menuClickCount == 2 || menuClickCount == 0)
                ) {
                    setMenuClassNames(3, false, link);
                } else if (
                    $("#app-container").hasClass("menu-hidden") &&
                    (menuClickCount == 1 || menuClickCount == 3)
                ) {
                    setMenuClassNames(2, false, link);
                } else if (
                    $("#app-container").hasClass("menu-default") &&
                    !$("#app-container").hasClass("menu-sub-hidden") &&
                    (menuClickCount == 1 || menuClickCount == 3)
                ) {
                    setMenuClassNames(0, false, link);
                }
            } else {
                $("#app-container").addClass("sub-show-temporary");
            }
            return false;
        });

        $(document).on("click", function (event) {
            if (
                !(
                    $(event.target)
                        .parents()
                        .hasClass("menu-button") ||
                    $(event.target).hasClass("menu-button") ||
                    $(event.target)
                        .parents()
                        //   .hasClass("menu-button-mobile") ||
                        // $(event.target).hasClass("menu-button-mobile") ||
                        // $(event.target)
                        //   .parents()
                        .hasClass("sidebar") ||
                    $(event.target).hasClass("sidebar")
                )
            ) {
                // Prevent sub menu closing on collapse click
                if ($(event.target).parents("a[data-toggle='collapse']").length > 0 || $(event.target).attr("data-toggle") == 'collapse') {
                    return;
                }
                if (
                    $("#app-container").hasClass("menu-sub-hidden") &&
                    menuClickCount == 3
                ) {
                    var link = getActiveMainMenuLink();
                    if (link == lastActiveSubmenu) {
                        setMenuClassNames(2);
                    } else {
                        setMenuClassNames(0);
                    }
                } else if ($("#app-container").hasClass("menu-main-hidden") && $("#app-container").hasClass("menu-mobile")) {
                    setMenuClassNames(0);
                } else if (
                    $("#app-container").hasClass("menu-hidden") ||
                    $("#app-container").hasClass("menu-mobile")
                ) {
                    setMenuClassNames(0);
                }
            }
        });

        function getActiveMainMenuLink() {
            var dataLink = $(".main-menu ul li.active a").attr("href");
            return dataLink ? dataLink.replace("#", "") : "";
        }

        function isClassIncludedApp(className) {
            var container = $("#app-container");
            var currentClasses = container
                .attr("class")
                .split(" ")
                .filter(function (x) {
                    return x != "";
                });
            return currentClasses.includes(className);
        }

        var lastActiveSubmenu = "";
        function showSubMenu(dataLink) {
            if ($(".main-menu").length == 0) {
                return;
            }

            var link = dataLink ? dataLink.replace("#", "") : "";
            if ($(".sub-menu ul[data-link='" + link + "']").length == 0) {
                $("#app-container").removeClass("sub-show-temporary");

                if ($("#app-container").length == 0) {
                    return;
                }

                if (
                    isClassIncludedApp("menu-sub-hidden") ||
                    isClassIncludedApp("menu-hidden")
                ) {
                    menuClickCount = 0;
                } else {
                    menuClickCount = 1;
                }
                $("#app-container").addClass("sub-hidden");
                noTransition();
                return;
            }
            if (link == lastActiveSubmenu) {
                return;
            }
            $(".sub-menu ul").fadeOut(0);
            $(".sub-menu ul[data-link='" + link + "']").slideDown(100);

            $(".sub-menu .scroll").scrollTop(0);
            lastActiveSubmenu = link;
        }

        function noTransition() {
            $(".sub-menu").addClass("no-transition");
            $("main").addClass("no-transition");
            setTimeout(function () {
                $(".sub-menu").removeClass("no-transition");
                $("main").removeClass("no-transition");
            }, 350);
        }

        showSubMenu($(".main-menu ul li.active a").attr("href"));

        function resizeCarousel() {
            setTimeout(function () {
                var event = document.createEvent("HTMLEvents");
                event.initEvent("resize", false, false);
                window.dispatchEvent(event);
            }, 350);
        }

        /* 03.06. App Menu */
        $(".app-menu-button").on("click", function (event) {
            event.preventDefault();
            if ($(".app-menu").hasClass("shown")) {
                $(".app-menu").removeClass("shown");
            } else {
                $(".app-menu").addClass("shown");
            }
        });

        $(document).on("click", function (event) {
            if (
                !(
                    $(event.target)
                        .parents()
                        .hasClass("app-menu") ||
                    $(event.target)
                        .parents()
                        .hasClass("app-menu-button") ||
                    $(event.target).hasClass("app-menu-button") ||
                    $(event.target).hasClass("app-menu")
                )
            ) {
                if ($(".app-menu").hasClass("shown")) {
                    $(".app-menu").removeClass("shown");
                }
            }
        });

        /* 03.07. Survey App */
        $(document).on("click", ".question .view-button", function () {
            editViewClick($(this));
        });

        $(document).on("click", ".question .edit-button", function () {
            editViewClick($(this));
        });

        function editViewClick($this) {
            var $question = $($this.parents(".question"));
            $question.toggleClass("edit-quesiton");
            $question.toggleClass("view-quesiton");
            var $questionCollapse = $question.find(".question-collapse");
            if (!$questionCollapse.hasClass("show")) {
                $questionCollapse.collapse("toggle");
                $question.find(".rotate-icon-click").toggleClass("rotate");
            }
        }

        /* 03.08. Rotate Button */
        $(document).on("click", ".rotate-icon-click", function () {
            $(this).toggleClass("rotate");
        });

        /* 03.09. Charts */
        if (typeof Chart !== "undefined") {
            Chart.defaults.global.defaultFontFamily = "'Nunito', sans-serif";

            Chart.defaults.LineWithShadow = Chart.defaults.line;
            Chart.controllers.LineWithShadow = Chart.controllers.line.extend({
                draw: function (ease) {
                    Chart.controllers.line.prototype.draw.call(this, ease);
                    var ctx = this.chart.ctx;
                    ctx.save();
                    ctx.shadowColor = "rgba(0,0,0,0.15)";
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 10;
                    ctx.responsive = true;
                    ctx.stroke();
                    Chart.controllers.line.prototype.draw.apply(this, arguments);
                    ctx.restore();
                }
            });

            Chart.defaults.BarWithShadow = Chart.defaults.bar;
            Chart.controllers.BarWithShadow = Chart.controllers.bar.extend({
                draw: function (ease) {
                    Chart.controllers.bar.prototype.draw.call(this, ease);
                    var ctx = this.chart.ctx;
                    ctx.save();
                    ctx.shadowColor = "rgba(0,0,0,0.15)";
                    ctx.shadowBlur = 12;
                    ctx.shadowOffsetX = 5;
                    ctx.shadowOffsetY = 10;
                    ctx.responsive = true;
                    Chart.controllers.bar.prototype.draw.apply(this, arguments);
                    ctx.restore();
                }
            });

            Chart.defaults.LineWithLine = Chart.defaults.line;
            Chart.controllers.LineWithLine = Chart.controllers.line.extend({
                draw: function (ease) {
                    Chart.controllers.line.prototype.draw.call(this, ease);
                    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
                        var activePoint = this.chart.tooltip._active[0];
                        var ctx = this.chart.ctx;
                        var x = activePoint.tooltipPosition().x;
                        var topY = this.chart.scales["y-axis-0"].top;
                        var bottomY = this.chart.scales["y-axis-0"].bottom;
                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(x, topY);
                        ctx.lineTo(x, bottomY);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "rgba(0,0,0,0.1)";
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            });

            Chart.defaults.DoughnutWithShadow = Chart.defaults.doughnut;
            Chart.controllers.DoughnutWithShadow = Chart.controllers.doughnut.extend({
                draw: function (ease) {
                    Chart.controllers.doughnut.prototype.draw.call(this, ease);
                    let ctx = this.chart.chart.ctx;
                    ctx.save();
                    ctx.shadowColor = "rgba(0,0,0,0.15)";
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 10;
                    ctx.responsive = true;
                    Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
                    ctx.restore();
                }
            });

            Chart.defaults.PieWithShadow = Chart.defaults.pie;
            Chart.controllers.PieWithShadow = Chart.controllers.pie.extend({
                draw: function (ease) {
                    Chart.controllers.pie.prototype.draw.call(this, ease);
                    let ctx = this.chart.chart.ctx;
                    ctx.save();
                    ctx.shadowColor = "rgba(0,0,0,0.15)";
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 10;
                    ctx.responsive = true;
                    Chart.controllers.pie.prototype.draw.apply(this, arguments);
                    ctx.restore();
                }
            });

            Chart.defaults.ScatterWithShadow = Chart.defaults.scatter;
            Chart.controllers.ScatterWithShadow = Chart.controllers.scatter.extend({
                draw: function (ease) {
                    Chart.controllers.scatter.prototype.draw.call(this, ease);
                    let ctx = this.chart.chart.ctx;
                    ctx.save();
                    ctx.shadowColor = "rgba(0,0,0,0.2)";
                    ctx.shadowBlur = 7;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 7;
                    ctx.responsive = true;
                    Chart.controllers.scatter.prototype.draw.apply(this, arguments);
                    ctx.restore();
                }
            });

            Chart.defaults.RadarWithShadow = Chart.defaults.radar;
            Chart.controllers.RadarWithShadow = Chart.controllers.radar.extend({
                draw: function (ease) {
                    Chart.controllers.radar.prototype.draw.call(this, ease);
                    let ctx = this.chart.chart.ctx;
                    ctx.save();
                    ctx.shadowColor = "rgba(0,0,0,0.2)";
                    ctx.shadowBlur = 7;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 7;
                    ctx.responsive = true;
                    Chart.controllers.radar.prototype.draw.apply(this, arguments);
                    ctx.restore();
                }
            });

            Chart.defaults.PolarWithShadow = Chart.defaults.polarArea;
            Chart.controllers.PolarWithShadow = Chart.controllers.polarArea.extend({
                draw: function (ease) {
                    Chart.controllers.polarArea.prototype.draw.call(this, ease);
                    let ctx = this.chart.chart.ctx;
                    ctx.save();
                    ctx.shadowColor = "rgba(0,0,0,0.2)";
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 5;
                    ctx.shadowOffsetY = 10;
                    ctx.responsive = true;
                    Chart.controllers.polarArea.prototype.draw.apply(this, arguments);
                    ctx.restore();
                }
            });

            var chartTooltip = {
                backgroundColor: foregroundColor,
                titleFontColor: primaryColor,
                borderColor: separatorColor,
                borderWidth: 0.5,
                bodyFontColor: primaryColor,
                bodySpacing: 10,
                xPadding: 15,
                yPadding: 15,
                cornerRadius: 0.15,
                displayColors: false
            };

            if (document.getElementById("visitChartFull")) {
                var visitChartFull = document
                    .getElementById("visitChartFull")
                    .getContext("2d");
                var myChart = new Chart(visitChartFull, {
                    type: "LineWithShadow",
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "Data",
                                borderColor: themeColor1,
                                pointBorderColor: themeColor1,
                                pointBackgroundColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: themeColor1,
                                pointRadius: 3,
                                pointBorderWidth: 3,
                                pointHoverRadius: 3,
                                fill: true,
                                backgroundColor: themeColor1_10,
                                borderWidth: 2,
                                data: [180, 140, 150, 120, 180, 110, 160],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }
                        ]
                    },
                    options: {
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 40,
                                bottom: 0
                            }
                        },
                        plugins: {
                            datalabels: {
                                backgroundColor: "transparent",
                                borderRadius: 30,
                                borderWidth: 1,
                                padding: 5,
                                borderColor: function (context) {
                                    return context.dataset.borderColor;
                                },
                                color: function (context) {
                                    return context.dataset.borderColor;
                                },
                                font: {
                                    weight: "bold",
                                    size: 10
                                },
                                formatter: Math.round
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        tooltips: chartTooltip,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        min: 0
                                    },
                                    display: false
                                }
                            ],
                            xAxes: [
                                {
                                    ticks: {
                                        min: 0
                                    },
                                    display: false
                                }
                            ]
                        }
                    }
                });
            }

            if (document.getElementById("visitChart")) {
                var visitChart = document.getElementById("visitChart").getContext("2d");
                var myChart = new Chart(visitChart, {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 0
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        legend: {
                            display: false
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: themeColor1,
                                pointBackgroundColor: foregroundColor,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: foregroundColor,
                                pointRadius: 4,
                                pointBorderWidth: 2,
                                pointHoverRadius: 5,
                                fill: true,
                                borderWidth: 2,
                                backgroundColor: themeColor1_10
                            }
                        ]
                    }
                });
            }

            if (document.getElementById("conversionChart")) {
                var conversionChart = document
                    .getElementById("conversionChart")
                    .getContext("2d");
                var myChart = new Chart(conversionChart, {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 0
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        legend: {
                            display: false
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "",
                                data: [65, 60, 68, 54, 63, 60, 60],
                                borderColor: themeColor2,
                                pointBackgroundColor: foregroundColor,
                                pointBorderColor: themeColor2,
                                pointHoverBackgroundColor: themeColor2,
                                pointHoverBorderColor: foregroundColor,
                                pointRadius: 4,
                                pointBorderWidth: 2,
                                pointHoverRadius: 5,
                                fill: true,
                                borderWidth: 2,
                                backgroundColor: themeColor2_10
                            }
                        ]
                    }
                });
            }

            var smallChartOptions = {
                layout: {
                    padding: {
                        left: 5,
                        right: 5,
                        top: 10,
                        bottom: 10
                    }
                },
                plugins: {
                    datalabels: {
                        display: false
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    intersect: false,
                    enabled: false,
                    custom: function (tooltipModel) {
                        if (tooltipModel && tooltipModel.dataPoints) {
                            var $textContainer = $(this._chart.canvas.offsetParent);
                            var yLabel = tooltipModel.dataPoints[0].yLabel;
                            var xLabel = tooltipModel.dataPoints[0].xLabel;
                            var label = tooltipModel.body[0].lines[0].split(":")[0];
                            $textContainer.find(".value").html("$" + $.fn.addCommas(yLabel));
                            $textContainer.find(".label").html(label + "-" + xLabel);
                        }
                    }
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            },
                            display: false
                        }
                    ],
                    xAxes: [
                        {
                            display: false
                        }
                    ]
                }
            };

            var smallChartInit = {
                afterInit: function (chart, options) {
                    var $textContainer = $(chart.canvas.offsetParent);
                    var yLabel = chart.data.datasets[0].data[0];
                    var xLabel = chart.data.labels[0];
                    var label = chart.data.datasets[0].label;
                    $textContainer.find(".value").html("$" + $.fn.addCommas(yLabel));
                    $textContainer.find(".label").html(label + "-" + xLabel);
                }
            };

            if (document.getElementById("smallChart1")) {
                var smallChart1 = document
                    .getElementById("smallChart1")
                    .getContext("2d");
                var myChart = new Chart(smallChart1, {
                    type: "LineWithLine",
                    plugins: [smallChartInit],
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "Total Orders",
                                borderColor: themeColor1,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: themeColor1,
                                pointRadius: 2,
                                pointBorderWidth: 3,
                                pointHoverRadius: 2,
                                fill: false,
                                borderWidth: 2,
                                data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }
                        ]
                    },
                    options: smallChartOptions
                });
            }

            if (document.getElementById("smallChart2")) {
                var smallChart2 = document
                    .getElementById("smallChart2")
                    .getContext("2d");
                var myChart = new Chart(smallChart2, {
                    type: "LineWithLine",
                    plugins: [smallChartInit],
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "Pending Orders",
                                borderColor: themeColor1,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: themeColor1,
                                pointRadius: 2,
                                pointBorderWidth: 3,
                                pointHoverRadius: 2,
                                fill: false,
                                borderWidth: 2,
                                data: [115, 120, 300, 222, 105, 85, 36],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }
                        ]
                    },
                    options: smallChartOptions
                });
            }

            if (document.getElementById("smallChart3")) {
                var smallChart3 = document
                    .getElementById("smallChart3")
                    .getContext("2d");
                var myChart = new Chart(smallChart3, {
                    type: "LineWithLine",
                    plugins: [smallChartInit],
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "Active Orders",
                                borderColor: themeColor1,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: themeColor1,
                                pointRadius: 2,
                                pointBorderWidth: 3,
                                pointHoverRadius: 2,
                                fill: false,
                                borderWidth: 2,
                                data: [350, 452, 762, 952, 630, 85, 158],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }
                        ]
                    },
                    options: smallChartOptions
                });
            }

            if (document.getElementById("smallChart4")) {
                var smallChart4 = document
                    .getElementById("smallChart4")
                    .getContext("2d");
                var myChart = new Chart(smallChart4, {
                    type: "LineWithLine",
                    plugins: [smallChartInit],
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "Shipped Orders",
                                borderColor: themeColor1,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: themeColor1,
                                pointRadius: 2,
                                pointBorderWidth: 3,
                                pointHoverRadius: 2,
                                fill: false,
                                borderWidth: 2,
                                data: [200, 452, 250, 630, 125, 85, 20],
                                datalabels: {
                                    align: "end",
                                    anchor: "end"
                                }
                            }
                        ]
                    },
                    options: smallChartOptions
                });
            }

            if (document.getElementById("salesChart")) {
                var salesChart = document.getElementById("salesChart").getContext("2d");
                var myChart = new Chart(salesChart, {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 20
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        legend: {
                            display: false
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: themeColor1,
                                pointBackgroundColor: foregroundColor,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: foregroundColor,
                                pointRadius: 6,
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                fill: false
                            }
                        ]
                    }
                });
            }

            if (document.getElementById("areaChart")) {
                var areaChart = document.getElementById("areaChart").getContext("2d");
                var myChart = new Chart(areaChart, {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 0
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        legend: {
                            display: false
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: themeColor1,
                                pointBackgroundColor: foregroundColor,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: foregroundColor,
                                pointRadius: 4,
                                pointBorderWidth: 2,
                                pointHoverRadius: 5,
                                fill: true,
                                borderWidth: 2,
                                backgroundColor: themeColor1_10
                            }
                        ]
                    }
                });
            }

            if (document.getElementById("areaChartNoShadow")) {
                var areaChartNoShadow = document
                    .getElementById("areaChartNoShadow")
                    .getContext("2d");
                var myChart = new Chart(areaChartNoShadow, {
                    type: "line",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 0
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        legend: {
                            display: false
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: themeColor1,
                                pointBackgroundColor: foregroundColor,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: foregroundColor,
                                pointRadius: 4,
                                pointBorderWidth: 2,
                                pointHoverRadius: 5,
                                fill: true,
                                borderWidth: 2,
                                backgroundColor: themeColor1_10
                            }
                        ]
                    }
                });
            }

            if (document.getElementById("scatterChart")) {
                var scatterChart = document
                    .getElementById("scatterChart")
                    .getContext("2d");
                var myChart = new Chart(scatterChart, {
                    type: "ScatterWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 20,
                                        min: -80,
                                        max: 80,
                                        padding: 20
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)"
                                    }
                                }
                            ]
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        datasets: [
                            {
                                borderWidth: 2,
                                label: "Cakes",
                                borderColor: themeColor1,
                                backgroundColor: themeColor1_10,
                                data: [
                                    { x: 62, y: -78 },
                                    { x: -0, y: 74 },
                                    { x: -67, y: 45 },
                                    { x: -26, y: -43 },
                                    { x: -15, y: -30 },
                                    { x: 65, y: -68 },
                                    { x: -28, y: -61 }
                                ]
                            },
                            {
                                borderWidth: 2,
                                label: "Desserts",
                                borderColor: themeColor2,
                                backgroundColor: themeColor2_10,
                                data: [
                                    { x: 79, y: 62 },
                                    { x: 62, y: 0 },
                                    { x: -76, y: -81 },
                                    { x: -51, y: 41 },
                                    { x: -9, y: 9 },
                                    { x: 72, y: -37 },
                                    { x: 62, y: -26 }
                                ]
                            }
                        ]
                    }
                });
            }

            if (document.getElementById("scatterChartNoShadow")) {
                var scatterChartNoShadow = document
                    .getElementById("scatterChartNoShadow")
                    .getContext("2d");
                var myChart = new Chart(scatterChartNoShadow, {
                    type: "scatter",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 20,
                                        min: -80,
                                        max: 80,
                                        padding: 20
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)"
                                    }
                                }
                            ]
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        datasets: [
                            {
                                borderWidth: 2,
                                label: "Cakes",
                                borderColor: themeColor1,
                                backgroundColor: themeColor1_10,
                                data: [
                                    { x: 62, y: -78 },
                                    { x: -0, y: 74 },
                                    { x: -67, y: 45 },
                                    { x: -26, y: -43 },
                                    { x: -15, y: -30 },
                                    { x: 65, y: -68 },
                                    { x: -28, y: -61 }
                                ]
                            },
                            {
                                borderWidth: 2,
                                label: "Desserts",
                                borderColor: themeColor2,
                                backgroundColor: themeColor2_10,
                                data: [
                                    { x: 79, y: 62 },
                                    { x: 62, y: 0 },
                                    { x: -76, y: -81 },
                                    { x: -51, y: 41 },
                                    { x: -9, y: 9 },
                                    { x: 72, y: -37 },
                                    { x: 62, y: -26 }
                                ]
                            }
                        ]
                    }
                });
            }

            if (document.getElementById("radarChartNoShadow")) {
                var radarChartNoShadow = document
                    .getElementById("radarChartNoShadow")
                    .getContext("2d");
                var myChart = new Chart(radarChartNoShadow, {
                    type: "radar",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scale: {
                            ticks: {
                                display: false
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        datasets: [
                            {
                                label: "Stock",
                                borderWidth: 2,
                                pointBackgroundColor: themeColor1,
                                borderColor: themeColor1,
                                backgroundColor: themeColor1_10,
                                data: [80, 90, 70]
                            },
                            {
                                label: "Order",
                                borderWidth: 2,
                                pointBackgroundColor: themeColor2,
                                borderColor: themeColor2,
                                backgroundColor: themeColor2_10,
                                data: [68, 80, 95]
                            }
                        ],
                        labels: ["Cakes", "Desserts", "Cupcakes"]
                    }
                });
            }

            if (document.getElementById("radarChart")) {
                var radarChart = document.getElementById("radarChart").getContext("2d");
                var myChart = new Chart(radarChart, {
                    type: "RadarWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scale: {
                            ticks: {
                                display: false
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        datasets: [
                            {
                                label: "Stock",
                                borderWidth: 2,
                                pointBackgroundColor: themeColor1,
                                borderColor: themeColor1,
                                backgroundColor: themeColor1_10,
                                data: [80, 90, 70]
                            },
                            {
                                label: "Order",
                                borderWidth: 2,
                                pointBackgroundColor: themeColor2,
                                borderColor: themeColor2,
                                backgroundColor: themeColor2_10,
                                data: [68, 80, 95]
                            }
                        ],
                        labels: ["Cakes", "Desserts", "Cupcakes"]
                    }
                });
            }

            if (document.getElementById("polarChart")) {
                var polarChart = document.getElementById("polarChart").getContext("2d");
                var myChart = new Chart(polarChart, {
                    type: "PolarWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scale: {
                            ticks: {
                                display: false
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        datasets: [
                            {
                                label: "Stock",
                                borderWidth: 2,
                                pointBackgroundColor: themeColor1,
                                borderColor: [themeColor1, themeColor2, themeColor3],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10
                                ],
                                data: [80, 90, 50]
                            }
                        ],
                        labels: ["Cakes", "Desserts", "Cupcakes"]
                    }
                });
            }

            if (document.getElementById("polarChartNoShadow")) {
                var polarChartNoShadow = document
                    .getElementById("polarChartNoShadow")
                    .getContext("2d");
                var myChart = new Chart(polarChartNoShadow, {
                    type: "polarArea",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scale: {
                            ticks: {
                                display: false
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        datasets: [
                            {
                                label: "Stock",
                                borderWidth: 2,
                                pointBackgroundColor: themeColor1,
                                borderColor: [themeColor1, themeColor2, themeColor3],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10
                                ],
                                data: [80, 90, 70]
                            }
                        ],
                        labels: ["Cakes", "Desserts", "Cupcakes"]
                    }
                });
            }

            if (document.getElementById("salesChartNoShadow")) {
                var salesChartNoShadow = document
                    .getElementById("salesChartNoShadow")
                    .getContext("2d");
                var myChart = new Chart(salesChartNoShadow, {
                    type: "line",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 5,
                                        min: 50,
                                        max: 70,
                                        padding: 20
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        legend: {
                            display: false
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                label: "",
                                data: [54, 63, 60, 65, 60, 68, 60],
                                borderColor: themeColor1,
                                pointBackgroundColor: foregroundColor,
                                pointBorderColor: themeColor1,
                                pointHoverBackgroundColor: themeColor1,
                                pointHoverBorderColor: foregroundColor,
                                pointRadius: 6,
                                pointBorderWidth: 2,
                                pointHoverRadius: 8,
                                fill: false
                            }
                        ]
                    }
                });
            }

            if (document.getElementById("productChart")) {
                var productChart = document
                    .getElementById("productChart")
                    .getContext("2d");
                var myChart = new Chart(productChart, {
                    type: "BarWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 100,
                                        min: 300,
                                        max: 800,
                                        padding: 20
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                label: "Cakes",
                                borderColor: themeColor1,
                                backgroundColor: themeColor1_10,
                                data: [456, 479, 324, 569, 702, 600],
                                borderWidth: 2
                            },
                            {
                                label: "Desserts",
                                borderColor: themeColor2,
                                backgroundColor: themeColor2_10,
                                data: [364, 504, 605, 400, 345, 320],
                                borderWidth: 2
                            }
                        ]
                    }
                });
            }

            if (document.getElementById("productChartNoShadow")) {
                var productChartNoShadow = document
                    .getElementById("productChartNoShadow")
                    .getContext("2d");
                var myChart = new Chart(productChartNoShadow, {
                    type: "bar",
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        lineWidth: 1,
                                        color: "rgba(0,0,0,0.1)",
                                        drawBorder: false
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 100,
                                        min: 300,
                                        max: 800,
                                        padding: 20
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    },
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                label: "Cakes",
                                borderColor: themeColor1,
                                backgroundColor: themeColor1_10,
                                data: [456, 479, 324, 569, 702, 600],
                                borderWidth: 2
                            },
                            {
                                label: "Desserts",
                                borderColor: themeColor2,
                                backgroundColor: themeColor2_10,
                                data: [364, 504, 605, 400, 345, 320],
                                borderWidth: 2
                            }
                        ]
                    }
                });
            }

            var contributionChartOptions = {
                type: "LineWithShadow",
                options: {
                    plugins: {
                        datalabels: {
                            display: false
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: false
                                },
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 5,
                                    min: 50,
                                    max: 70,
                                    padding: 20
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: chartTooltip
                },
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    datasets: [
                        {
                            borderWidth: 2,
                            label: "",
                            data: [54, 63, 60, 65, 60, 68, 60, 63, 60, 65, 60, 68],
                            borderColor: themeColor1,
                            pointBackgroundColor: foregroundColor,
                            pointBorderColor: themeColor1,
                            pointHoverBackgroundColor: themeColor1,
                            pointHoverBorderColor: foregroundColor,
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: false
                        }
                    ]
                }
            };

            if (document.getElementById("contributionChart1")) {
                var contributionChart1 = new Chart(
                    document.getElementById("contributionChart1").getContext("2d"),
                    contributionChartOptions
                );
            }

            if (document.getElementById("contributionChart2")) {
                var contributionChart2 = new Chart(
                    document.getElementById("contributionChart2").getContext("2d"),
                    contributionChartOptions
                );
            }

            if (document.getElementById("contributionChart3")) {
                var contributionChart3 = new Chart(
                    document.getElementById("contributionChart3").getContext("2d"),
                    contributionChartOptions
                );
            }

            var centerTextPlugin = {
                afterDatasetsUpdate: function (chart) { },
                beforeDraw: function (chart) {
                    var width = chart.chartArea.right;
                    var height = chart.chartArea.bottom;
                    var ctx = chart.chart.ctx;
                    ctx.restore();

                    var activeLabel = chart.data.labels[0];
                    var activeValue = chart.data.datasets[0].data[0];
                    var dataset = chart.data.datasets[0];
                    var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                    var total = meta.total;

                    var activePercentage = parseFloat(
                        ((activeValue / total) * 100).toFixed(1)
                    );
                    activePercentage = chart.legend.legendItems[0].hidden
                        ? 0
                        : activePercentage;

                    if (chart.pointAvailable) {
                        activeLabel = chart.data.labels[chart.pointIndex];
                        activeValue =
                            chart.data.datasets[chart.pointDataIndex].data[chart.pointIndex];

                        dataset = chart.data.datasets[chart.pointDataIndex];
                        meta = dataset._meta[Object.keys(dataset._meta)[0]];
                        total = meta.total;
                        activePercentage = parseFloat(
                            ((activeValue / total) * 100).toFixed(1)
                        );
                        activePercentage = chart.legend.legendItems[chart.pointIndex].hidden
                            ? 0
                            : activePercentage;
                    }

                    ctx.font = "36px" + " Nunito, sans-serif";
                    ctx.fillStyle = primaryColor;
                    ctx.textBaseline = "middle";

                    var text = activePercentage + "%",
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;
                    ctx.fillText(text, textX, textY);

                    ctx.font = "14px" + " Nunito, sans-serif";
                    ctx.textBaseline = "middle";

                    var text2 = activeLabel,
                        textX = Math.round((width - ctx.measureText(text2).width) / 2),
                        textY = height / 2 - 30;
                    ctx.fillText(text2, textX, textY);

                    ctx.save();
                },
                beforeEvent: function (chart, event, options) {
                    var firstPoint = chart.getElementAtEvent(event)[0];

                    if (firstPoint) {
                        chart.pointIndex = firstPoint._index;
                        chart.pointDataIndex = firstPoint._datasetIndex;
                        chart.pointAvailable = true;
                    }
                }
            };

            if (document.getElementById("categoryChart")) {
                var categoryChart = document.getElementById("categoryChart");
                var myDoughnutChart = new Chart(categoryChart, {
                    plugins: [centerTextPlugin],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["Cakes", "Cupcakes", "Desserts"],
                        datasets: [
                            {
                                label: "",
                                borderColor: [themeColor3, themeColor2, themeColor1],
                                backgroundColor: [
                                    themeColor3_10,
                                    themeColor2_10,
                                    themeColor1_10
                                ],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 80,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }

            if (document.getElementById("categoryChartNoShadow")) {
                var categoryChartNoShadow = document.getElementById(
                    "categoryChartNoShadow"
                );
                var myDoughnutChart = new Chart(categoryChartNoShadow, {
                    plugins: [centerTextPlugin],
                    type: "doughnut",
                    data: {
                        labels: ["Cakes", "Cupcakes", "Desserts"],
                        datasets: [
                            {
                                label: "",
                                borderColor: [themeColor3, themeColor2, themeColor1],
                                backgroundColor: [
                                    themeColor3_10,
                                    themeColor2_10,
                                    themeColor1_10
                                ],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 80,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }

            if (document.getElementById("pieChartNoShadow")) {
                var pieChart = document.getElementById("pieChartNoShadow");
                var myChart = new Chart(pieChart, {
                    type: "pie",
                    data: {
                        labels: ["Cakes", "Cupcakes", "Desserts"],
                        datasets: [
                            {
                                label: "",
                                borderColor: [themeColor1, themeColor2, themeColor3],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10
                                ],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }

            if (document.getElementById("pieChart")) {
                var pieChart = document.getElementById("pieChart");
                var myChart = new Chart(pieChart, {
                    type: "PieWithShadow",
                    data: {
                        labels: ["Cakes", "Cupcakes", "Desserts"],
                        datasets: [
                            {
                                label: "",
                                borderColor: [themeColor1, themeColor2, themeColor3],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10
                                ],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }

            if (document.getElementById("frequencyChart")) {
                var frequencyChart = document.getElementById("frequencyChart");
                var myDoughnutChart = new Chart(frequencyChart, {
                    plugins: [centerTextPlugin],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["Adding", "Editing", "Deleting"],
                        datasets: [
                            {
                                label: "",
                                borderColor: [themeColor1, themeColor2, themeColor3],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10
                                ],
                                borderWidth: 2,
                                data: [15, 25, 20]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 80,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }

            if (document.getElementById("ageChart")) {
                var ageChart = document.getElementById("ageChart");
                var myDoughnutChart = new Chart(ageChart, {
                    plugins: [centerTextPlugin],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["12-24", "24-30", "30-40", "40-50", "50-60"],
                        datasets: [
                            {
                                label: "",
                                borderColor: [
                                    themeColor1,
                                    themeColor2,
                                    themeColor3,
                                    themeColor4,
                                    themeColor5
                                ],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10,
                                    themeColor4_10,
                                    themeColor5_10
                                ],
                                borderWidth: 2,
                                data: [15, 25, 20, 30, 14]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 80,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }

            if (document.getElementById("genderChart")) {
                var genderChart = document.getElementById("genderChart");
                var myDoughnutChart = new Chart(genderChart, {
                    plugins: [centerTextPlugin],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["Male", "Female", "Other"],
                        datasets: [
                            {
                                label: "",
                                borderColor: [themeColor1, themeColor2, themeColor3],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10
                                ],
                                borderWidth: 2,
                                data: [85, 45, 20]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 80,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }

            if (document.getElementById("workChart")) {
                var workChart = document.getElementById("workChart");
                var myDoughnutChart = new Chart(workChart, {
                    plugins: [centerTextPlugin],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: [
                            "Employed for wages",
                            "Self-employed",
                            "Looking for work",
                            "Retired"
                        ],
                        datasets: [
                            {
                                label: "",
                                borderColor: [
                                    themeColor1,
                                    themeColor2,
                                    themeColor3,
                                    themeColor4
                                ],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10,
                                    themeColor4_10
                                ],
                                borderWidth: 2,
                                data: [15, 25, 20, 8]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 80,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }

            if (document.getElementById("codingChart")) {
                var codingChart = document.getElementById("codingChart");
                var myDoughnutChart = new Chart(codingChart, {
                    plugins: [centerTextPlugin],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["Python", "JavaScript", "PHP", "Java", "C#"],
                        datasets: [
                            {
                                label: "",
                                borderColor: [
                                    themeColor1,
                                    themeColor2,
                                    themeColor3,
                                    themeColor4,
                                    themeColor5
                                ],
                                backgroundColor: [
                                    themeColor1_10,
                                    themeColor2_10,
                                    themeColor3_10,
                                    themeColor4_10,
                                    themeColor5_10
                                ],
                                borderWidth: 2,
                                data: [15, 25, 20, 8, 25]
                            }
                        ]
                    },
                    draw: function () { },
                    options: {
                        plugins: {
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        cutoutPercentage: 80,
                        title: {
                            display: false
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: true,
                                fontSize: 12
                            }
                        },
                        tooltips: chartTooltip
                    }
                });
            }
        }

        /* 03.10. Calendar */
        if ($().fullCalendar) {
            var testEvent = new Date(new Date().setHours(new Date().getHours()));
            var day = testEvent.getDate();
            var month = testEvent.getMonth() + 1;
            $(".calendar").fullCalendar({
                themeSystem: "bootstrap4",
                height: "auto",
                isRTL: isRtl,
                buttonText: {
                    today: "Today",
                    month: "Month",
                    week: "Week",
                    day: "Day",
                    list: "List"
                },
                bootstrapFontAwesome: {
                    prev: " simple-icon-arrow-left",
                    next: " simple-icon-arrow-right",
                    prevYear: " simple-icon-control-start",
                    nextYear: " simple-icon-control-end"
                },
                events: [
                    {
                        title: "Account",
                        start: "2018-05-18"
                    },
                    {
                        title: "Delivery",
                        start: "2019-07-22",
                        end: "2019-07-24"
                    },
                    {
                        title: "Conference",
                        start: "2019-06-07",
                        end: "2019-06-09"
                    },
                    {
                        title: "Delivery",
                        start: "2019-09-03",
                        end: "2019-09-06"
                    },
                    {
                        title: "Meeting",
                        start: "2019-06-17",
                        end: "2019-06-18"
                    },
                    {
                        title: "Taxes",
                        start: "2019-08-07",
                        end: "2019-08-09"
                    }
                ]
            });
        }

        /* 03.11. Datatable */
        if ($().DataTable) {
            $(".data-table-standard").DataTable({
                bLengthChange: false,
                searching: false,
                destroy: true,
                info: false,
                sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                pageLength: 6,
                language: {
                    paginate: {
                        previous: "<i class='simple-icon-arrow-left'></i>",
                        next: "<i class='simple-icon-arrow-right'></i>"
                    }
                },
                drawCallback: function () {
                    $($(".dataTables_wrapper .pagination li:first-of-type"))
                        .find("a")
                        .addClass("prev");
                    $($(".dataTables_wrapper .pagination li:last-of-type"))
                        .find("a")
                        .addClass("next");

                    $(".dataTables_wrapper .pagination").addClass("pagination-sm");
                }
            });

            $(".data-tables-pagination").DataTable({
                bLengthChange: false,
                searching: false,
                destroy: true,
                info: false,
                sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                pageLength: 8,
                language: {
                    paginate: {
                        previous: "<i class='simple-icon-arrow-left'></i>",
                        next: "<i class='simple-icon-arrow-right'></i>"
                    }
                },
                drawCallback: function () {
                    $($(".dataTables_wrapper .pagination li:first-of-type"))
                        .find("a")
                        .addClass("prev");
                    $($(".dataTables_wrapper .pagination li:last-of-type"))
                        .find("a")
                        .addClass("next");

                    $(".dataTables_wrapper .pagination").addClass("pagination-sm");
                }
            });

            var dataTablePs;
            $(".data-table-scrollable").DataTable({
                searching: false,
                bLengthChange: false,
                destroy: true,
                info: false,
                paging: false,
                sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                responsive: !0,
                deferRender: !0,
                scrollY: "calc(100vh - 400px)",
                scrollCollapse: !0,
                "fnInitComplete": function () {
                    dataTablePs = new PerfectScrollbar('.dataTables_scrollBody', { suppressScrollX: true });
                    dataTablePs.isRtl = false;
                },
                "fnDrawCallback": function (oSettings) {
                    dataTablePs = new PerfectScrollbar('.dataTables_scrollBody', { suppressScrollX: true });
                    dataTablePs.isRtl = false;
                }
            });

            $(".data-table-feature").DataTable({
                sDom: '<"row view-filter"<"col-sm-12"<"float-right"l><"float-left"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                "columns": [
                    { "data": "name" },
                    { "data": "position" },
                    { "data": "office" },
                    { "data": "age" },
                    { "data": "start_date" },
                    { "data": "salary" }
                ],
                drawCallback: function () {
                    $($(".dataTables_wrapper .pagination li:first-of-type"))
                        .find("a")
                        .addClass("prev");
                    $($(".dataTables_wrapper .pagination li:last-of-type"))
                        .find("a")
                        .addClass("next");

                    $(".dataTables_wrapper .pagination").addClass("pagination-sm");
                },
                language: {
                    paginate: {
                        previous: "<i class='simple-icon-arrow-left'></i>",
                        next: "<i class='simple-icon-arrow-right'></i>"
                    },
                    search: "_INPUT_",
                    searchPlaceholder: "Search...",
                    lengthMenu: "Items Per Page _MENU_"
                },
            });

            // Datatable with rows
            var $dataTableRows = $("#datatableRows").DataTable({
                bLengthChange: false,
                buttons: [
                    'copy',
                    'excel',
                    'csv',
                    'pdf'
                ],
                destroy: true,
                info: false,
                sDom: '<"row view-filter"<"col-sm-12"<"float-left"l><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
                pageLength: 10,
                columns: [
                    { data: "Name" },
                    { data: "Sales" },
                    { data: "Stock" },
                    { data: "Category" },
                    { data: "Check" }
                ],
                language: {
                    paginate: {
                        previous: "<i class='simple-icon-arrow-left'></i>",
                        next: "<i class='simple-icon-arrow-right'></i>"
                    }
                },
                drawCallback: function () {
                    unCheckAllRows();
                    $("#checkAllDataTables").prop("checked", false);
                    $("#checkAllDataTables").prop("indeterminate", false).trigger("change");

                    $($(".dataTables_wrapper .pagination li:first-of-type"))
                        .find("a")
                        .addClass("prev");
                    $($(".dataTables_wrapper .pagination li:last-of-type"))
                        .find("a")
                        .addClass("next");
                    $(".dataTables_wrapper .pagination").addClass("pagination-sm");
                    var api = $(this).dataTable().api();
                    $("#pageCountDatatable span").html("Displaying " + parseInt(api.page.info().start + 1) + "-" + api.page.info().end + " of " + api.page.info().recordsTotal + " items");
                }
            });

            $("#dataTablesCopy").on("click", function(event) {
                event.preventDefault();
                $dataTableRows.buttons(0).trigger();
            });

            $("#dataTablesExcel").on("click", function(event) {
                event.preventDefault();
                $dataTableRows.buttons(1).trigger();
            });

            $("#dataTablesCsv").on("click", function(event) {
                event.preventDefault();
                $dataTableRows.buttons(2).trigger();
            });

            $("#dataTablesPdf").on("click", function(event) {
                event.preventDefault();
                $dataTableRows.buttons(3).trigger();
            });

            $('#datatableRows tbody').on('click', 'tr', function () {
                $(this).toggleClass('selected');
                var $checkBox = $(this).find(".custom-checkbox input");
                $checkBox.prop("checked", !$checkBox.prop("checked")).trigger("change");
                controlCheckAll();
            });

            function controlCheckAll() {
                var anyChecked = false;
                var allChecked = true;
                $('#datatableRows tbody tr .custom-checkbox input').each(function () {
                    if ($(this).prop("checked")) {
                        anyChecked = true;
                    } else {
                        allChecked = false;
                    }
                });
                if (anyChecked) {
                    $("#checkAllDataTables").prop("indeterminate", anyChecked);
                } else {
                    $("#checkAllDataTables").prop("indeterminate", anyChecked);
                    $("#checkAllDataTables").prop("checked", anyChecked);
                }
                if (allChecked) {
                    $("#checkAllDataTables").prop("indeterminate", false);
                    $("#checkAllDataTables").prop("checked", allChecked);
                }
            }

            function unCheckAllRows() {
                $('#datatableRows tbody tr').removeClass('selected');
                $('#datatableRows tbody tr .custom-checkbox input').prop("checked", false).trigger("change");
            }

            function checkAllRows() {
                $('#datatableRows tbody tr').addClass('selected');
                $('#datatableRows tbody tr .custom-checkbox input').prop("checked", true).trigger("change");
            }

            $("#checkAllDataTables").on("click", function (event) {
                var isCheckedAll = $("#checkAllDataTables").prop("checked");
                if (isCheckedAll) {
                    checkAllRows();
                } else {
                    unCheckAllRows();
                }
            });

            function getSelectedRows() {
                //Getting Selected Ones
                console.log($dataTableRows.rows('.selected').data());
            }

            $("#searchDatatable").on("keyup", function (event) {
                $dataTableRows.search($(this).val()).draw();
            });

            $("#pageCountDatatable .dropdown-menu a").on("click", function (event) {
                var selText = $(this).text();
                $dataTableRows.page.len(parseInt(selText)).draw();
            });

            var $addToDatatableButton = $("#addToDatatable").stateButton();

            // Validation when modal shown
            $('#rightModal').on('shown.bs.modal', function (e) {
                $("#addToDatatableForm").validate(
                    {
                        rules: {
                            Sales: {
                                required: true,
                                number: true,
                                min: 3000
                            },
                            Stock: {
                                required: true,
                                number: true,
                            },
                            Category: {
                                required: true
                            },
                            Name: {
                                required: true
                            }
                        }
                    }
                )
            })

            //Adding to datatable from right modal
            $("#addToDatatable").on("click", function (event) {
                if ($("#addToDatatableForm").valid()) {
                    $addToDatatableButton.showSpinner();
                    var inputs = $("#addToDatatableForm").find(':input');
                    var data = {};
                    inputs.each(function () {
                        data[$(this).attr("name")] = $(this).val();
                    });
                    data["Check"] = '<label class="custom-control custom-checkbox mb-1 align-self-center data-table-rows-check"><input type="checkbox" class="custom-control-input"><span class="custom-control-label">&nbsp;</span></label>';
                    $dataTableRows.row.add(data).draw();
                    setTimeout(function () {
                        $addToDatatableButton.showSuccess(true, "New row added!");
                        setTimeout(function () {
                            $("#rightModal").modal("toggle");
                            $addToDatatableButton.reset();
                            inputs.each(function () {
                                $(this).val("");
                            });
                            if ($("#addToDatatableForm").find('select').data('select2')) {
                                $("#addToDatatableForm").find('select').val('').trigger('change');
                            }
                            $("#addToDatatableForm").validate().resetForm();
                        }, 1000);
                    }, 1000);
                }
            });
        }

        /* 03.12. Notification */
        function showNotification(placementFrom, placementAlign, type) {
            $.notify(
                {
                    title: "Bootstrap Notify",
                    message: "Here is a notification!",
                    target: "_blank"
                },
                {
                    element: "body",
                    position: null,
                    type: type,
                    allow_dismiss: true,
                    newest_on_top: false,
                    showProgressbar: false,
                    placement: {
                        from: placementFrom,
                        align: placementAlign
                    },
                    offset: 20,
                    spacing: 10,
                    z_index: 1031,
                    delay: 4000,
                    timer: 2000,
                    url_target: "_blank",
                    mouse_over: null,
                    animate: {
                        enter: "animated fadeInDown",
                        exit: "animated fadeOutUp"
                    },
                    onShow: null,
                    onShown: null,
                    onClose: null,
                    onClosed: null,
                    icon_type: "class",
                    template:
                        '<div data-notify="container" class="col-11 col-sm-3 alert  alert-{0} " role="alert">' +
                        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                        '<span data-notify="icon"></span> ' +
                        '<span data-notify="title">{1}</span> ' +
                        '<span data-notify="message">{2}</span>' +
                        '<div class="progress" data-notify="progressbar">' +
                        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                        "</div>" +
                        '<a href="{3}" target="{4}" data-notify="url"></a>' +
                        "</div>"
                }
            );
        }

        $("body").on("click", ".notify-btn", function (event) {
            event.preventDefault();
            showNotification($(this).data("from"), $(this).data("align"), "primary");
        });

        /* 03.13. Dropdown Select */
        $(".dropdown-as-select .dropdown-menu a").click(function () {
            var selText = $(this).text();
            $(this).parents(".dropdown-as-select").find('.dropdown-toggle').html(selText);
            $(this).parents(".dropdown-as-select").find('a').removeClass("active");
            $(this).addClass("active");
        });

        /* 03.14. Slick Slider */
        if ($().slick) {
            $(".slick.basic").slick({
                dots: true,
                infinite: true,
                speed: 300,
                rtl: isRtl,
                slidesToShow: 3,
                slidesToScroll: 4,
                appendDots: $(".slick.basic")
                    .parents(".slick-container")
                    .find(".slider-dot-container"),
                prevArrow: $(".slick.basic")
                    .parents(".slick-container")
                    .find(".slider-nav .left-arrow"),
                nextArrow: $(".slick.basic")
                    .parents(".slick-container")
                    .find(".slider-nav .right-arrow"),
                customPaging: function (slider, i) {
                    return '<button role="button" class="slick-dot"><span></span></button>';
                },
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $(".slick.center").slick({
                dots: true,
                infinite: true,
                centerMode: true,
                speed: 300,
                rtl: isRtl,
                slidesToShow: 4,
                slidesToScroll: 4,
                appendDots: $(".slick.center")
                    .parents(".slick-container")
                    .find(".slider-dot-container"),
                prevArrow: $(".slick.center")
                    .parents(".slick-container")
                    .find(".slider-nav .left-arrow"),
                nextArrow: $(".slick.center")
                    .parents(".slick-container")
                    .find(".slider-nav .right-arrow"),
                customPaging: function (slider, i) {
                    return '<button role="button" class="slick-dot"><span></span></button>';
                },
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                            centerMode: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            centerMode: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false
                        }
                    }
                ]
            });

            $(".slick.single").slick({
                dots: true,
                infinite: true,
                rtl: isRtl,
                speed: 300,
                appendDots: $(".slick.single")
                    .parents(".slick-container")
                    .find(".slider-dot-container"),
                prevArrow: $(".slick.single")
                    .parents(".slick-container")
                    .find(".slider-nav .left-arrow"),
                nextArrow: $(".slick.single")
                    .parents(".slick-container")
                    .find(".slider-nav .right-arrow"),
                customPaging: function (slider, i) {
                    return '<button role="button" class="slick-dot"><span></span></button>';
                }
            });
        }

        /* 03.15. Form Validation */
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
                "submit",
                function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add("was-validated");
                },
                false
            );
        });

        /* 03.16. Tooltip */
        if ($().tooltip) {
            $('[data-toggle="tooltip"]').tooltip();
        }

        /* 03.17. Popover */
        if ($().popover) {
            $('[data-toggle="popover"]').popover({ trigger: "focus" });
        }

        /* 03.18. Select 2 */
        if ($().select2) {
            $(".select2-single, .select2-multiple").select2({
                theme: "bootstrap",
                dir: direction,
                placeholder: "",
                maximumSelectionSize: 6,
                containerCssClass: ":all:"
            });
        }

        /* 03.19. Datepicker */
        if ($().datepicker) {
            $("input.datepicker").datepicker({
                autoclose: true,
                rtl: isRtl,
                templates: {
                    leftArrow: '<i class="simple-icon-arrow-left"></i>',
                    rightArrow: '<i class="simple-icon-arrow-right"></i>'
                }
            });

            $(".input-daterange").datepicker({
                autoclose: true,
                rtl: isRtl,
                templates: {
                    leftArrow: '<i class="simple-icon-arrow-left"></i>',
                    rightArrow: '<i class="simple-icon-arrow-right"></i>'
                }
            });

            $(".input-group.date").datepicker({
                autoclose: true,
                rtl: isRtl,
                templates: {
                    leftArrow: '<i class="simple-icon-arrow-left"></i>',
                    rightArrow: '<i class="simple-icon-arrow-right"></i>'
                }
            });

            $(".date-inline").datepicker({
                autoclose: true,
                rtl: isRtl,
                templates: {
                    leftArrow: '<i class="simple-icon-arrow-left"></i>',
                    rightArrow: '<i class="simple-icon-arrow-right"></i>'
                }
            });
        }

        /* 03.20. Dropzone */
        if ($().dropzone && !$(".dropzone").hasClass("disabled")) {
            $(".dropzone").dropzone({
                url: "https://httpbin.org/post",
                init: function () {
                    this.on("success", function (file, responseText) {
                        console.log(responseText);
                    });
                },
                thumbnailWidth: 160,
                previewTemplate: '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>'
            });
        }



        /* 03.21. Cropperjs */
        var Cropper = window.Cropper;
        if (typeof Cropper !== "undefined") {
            function each(arr, callback) {
                var length = arr.length;
                var i;

                for (i = 0; i < length; i++) {
                    callback.call(arr, arr[i], i, arr);
                }

                return arr;
            }
            var previews = document.querySelectorAll(".cropper-preview");
            var options = {
                aspectRatio: 4 / 3,
                preview: ".img-preview",
                ready: function () {
                    var clone = this.cloneNode();

                    clone.className = "";
                    clone.style.cssText =
                        "display: block;" +
                        "width: 100%;" +
                        "min-width: 0;" +
                        "min-height: 0;" +
                        "max-width: none;" +
                        "max-height: none;";
                    each(previews, function (elem) {
                        elem.appendChild(clone.cloneNode());
                    });
                },
                crop: function (e) {
                    var data = e.detail;
                    var cropper = this.cropper;
                    var imageData = cropper.getImageData();
                    var previewAspectRatio = data.width / data.height;

                    each(previews, function (elem) {
                        var previewImage = elem.getElementsByTagName("img").item(0);
                        var previewWidth = elem.offsetWidth;
                        var previewHeight = previewWidth / previewAspectRatio;
                        var imageScaledRatio = data.width / previewWidth;
                        elem.style.height = previewHeight + "px";
                        if (previewImage) {
                            previewImage.style.width =
                                imageData.naturalWidth / imageScaledRatio + "px";
                            previewImage.style.height =
                                imageData.naturalHeight / imageScaledRatio + "px";
                            previewImage.style.marginLeft = -data.x / imageScaledRatio + "px";
                            previewImage.style.marginTop = -data.y / imageScaledRatio + "px";
                        }
                    });
                },
                zoom: function (e) { }
            };

            if ($("#inputImage").length > 0) {
                var inputImage = $("#inputImage")[0];
                var image = $("#cropperImage")[0];

                var cropper;
                inputImage.onchange = function () {
                    var files = this.files;
                    var file;

                    if (files && files.length) {
                        file = files[0];
                        $("#cropperContainer").css("display", "block");

                        if (/^image\/\w+/.test(file.type)) {
                            uploadedImageType = file.type;
                            uploadedImageName = file.name;

                            image.src = uploadedImageURL = URL.createObjectURL(file);
                            if (cropper) {
                                cropper.destroy();
                            }
                            cropper = new Cropper(image, options);
                            inputImage.value = null;
                        } else {
                            window.alert("Please choose an image file.");
                        }
                    }
                };
            }
        }

        /* 03.22. Range Slider */
        if (typeof noUiSlider !== "undefined") {
            if ($("#dashboardPriceRange").length > 0) {
                noUiSlider.create($("#dashboardPriceRange")[0], {
                    start: [800, 2100],
                    connect: true,
                    tooltips: true,
                    direction: direction,
                    range: {
                        min: 200,
                        max: 2800
                    },
                    step: 10,
                    format: {
                        to: function (value) {
                            return "$" + $.fn.addCommas(Math.floor(value));
                        },
                        from: function (value) {
                            return value;
                        }
                    }
                });
            }

            if ($("#doubleSlider").length > 0) {
                noUiSlider.create($("#doubleSlider")[0], {
                    start: [800, 1200],
                    connect: true,
                    tooltips: true,
                    direction: direction,
                    range: {
                        min: 500,
                        max: 1500
                    },
                    step: 10,
                    format: {
                        to: function (value) {
                            return "$" + $.fn.addCommas(Math.round(value));
                        },
                        from: function (value) {
                            return value;
                        }
                    }
                });
            }

            if ($("#singleSlider").length > 0) {
                noUiSlider.create($("#singleSlider")[0], {
                    start: 0,
                    connect: true,
                    tooltips: true,
                    direction: direction,
                    range: {
                        min: 0,
                        max: 150
                    },
                    step: 1,
                    format: {
                        to: function (value) {
                            return $.fn.addCommas(Math.round(value));
                        },
                        from: function (value) {
                            return value;
                        }
                    }
                });
            }
        }

        /* 03.23. Modal Passing Content */
        $("#exampleModalContent").on("show.bs.modal", function (event) {
            var button = $(event.relatedTarget);
            var recipient = button.data("whatever");
            var modal = $(this);
            modal.find(".modal-title").text("New message to " + recipient);
            modal.find(".modal-body input").val(recipient);
        });

        /* 03.24. Scrollbar */
        if (typeof PerfectScrollbar !== "undefined") {
            var chatAppScroll;
            $(".scroll").each(function () {
                if ($(this).parents(".chat-app").length > 0) {
                    var scrollElement = $(this)[0];
                    var $scrollContent = $(this).find(".scroll-content");
                    var initialized = false;

                    function createChatAppScroll() {
                        chatAppScroll = new PerfectScrollbar(scrollElement, { suppressScrollX: true });
                        chatAppScroll.isRtl = false;
                        initialized = false;
                    }

                    function calculateHeight() {
                        var elementsHeight = 0;
                        if ($("main").length > 0) {
                            elementsHeight += parseInt($("main").css("margin-top"));
                        }
                        if ($(".chat-input-container").length > 0) {
                            elementsHeight += $(".chat-input-container").outerHeight(true);
                        }
                        if ($(".chat-heading-container").length > 0) {
                            elementsHeight += $(".chat-heading-container").outerHeight(true);
                        }
                        if ($(".separator").length > 0) {
                            elementsHeight += $(".separator").outerHeight(true);
                        }
                        $(".chat-app .scroll").css("height", (window.innerHeight - elementsHeight) + "px");

                        if (chatAppScroll) {
                            $(".chat-app .scroll").scrollTop(
                                $(".chat-app .scroll").prop("scrollHeight")
                            );
                            chatAppScroll.update();
                        }
                        if (window.innerWidth < 576) {
                            if (chatAppScroll) {
                                chatAppScroll.destroy();
                                chatAppScroll = null;
                            }
                            $(".chat-app .scroll-content > div:last-of-type").css("padding-bottom", ($(".chat-input-container").outerHeight(true)) + "px");

                            if (!initialized) {
                                setTimeout(function () {
                                    $("html, body").animate({ scrollTop: $(document).height() + 30 }, 100);
                                }, 300);
                                initialized = true;
                            }
                        } else {
                            if (!chatAppScroll) {
                                createChatAppScroll();
                            }
                            $(".chat-app .scroll-content > div:last-of-type").css("padding-bottom", 0);
                        }
                    }
                    $(window).on("resize", function (event) {
                        calculateHeight();
                    });
                    calculateHeight();

                    return;
                }
                var ps = new PerfectScrollbar($(this)[0], { suppressScrollX: true });
                ps.isRtl = false;
            });
        }

        /* 03.25. Progress */
        $(".progress-bar").each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });

        if (typeof ProgressBar !== "undefined") {
            $(".progress-bar-circle").each(function () {
                var val = $(this).attr("aria-valuenow");
                var color = $(this).data("color") || themeColor1;
                var trailColor = $(this).data("trailColor") || "#d7d7d7";
                var max = $(this).attr("aria-valuemax") || 100;
                var showPercent = $(this).data("showPercent");
                var circle = new ProgressBar.Circle(this, {
                    color: color,
                    duration: 20,
                    easing: "easeInOut",
                    strokeWidth: 4,
                    trailColor: trailColor,
                    trailWidth: 4,
                    text: {
                        autoStyleContainer: false
                    },
                    step: function (state, bar) {
                        if (showPercent) {
                            bar.setText(Math.round(bar.value() * 100) + "%");
                        } else {
                            bar.setText(val + "/" + max);
                        }
                    }
                }).animate(val / max);
            });
        }

        /* 03.26. Rating */
        if ($().barrating) {
            $(".rating").each(function () {
                var current = $(this).data("currentRating");
                var readonly = $(this).data("readonly");
                $(this).barrating({
                    theme: "bootstrap-stars",
                    initialRating: current,
                    readonly: readonly
                });
            });
        }

        /* 03.27. Tags Input */
        if ($().tagsinput) {
            $(".tags").tagsinput({
                cancelConfirmKeysOnEmpty: true,
                confirmKeys: [13]
            });

            $("body").on("keypress", ".bootstrap-tagsinput input", function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        }

        /* 03.28. Sortable */
        if (typeof Sortable !== "undefined") {
            $(".sortable").each(function () {
                if ($(this).find(".handle").length > 0) {
                    Sortable.create($(this)[0], { handle: ".handle" });
                } else {
                    Sortable.create($(this)[0]);
                }
            });
            if ($(".sortable-survey").length > 0) {
                Sortable.create($(".sortable-survey")[0]);
            }
        }

        /* 03.29. State Button */
        var $successButton = $("#successButton").stateButton();
        $successButton.on("click", function (event) {
            event.preventDefault();
            $successButton.showSpinner();
            //Demonstration states with a timeout
            setTimeout(function () {
                $successButton.showSuccess(true);
                setTimeout(function () {
                    $successButton.reset();
                }, 2000);
            }, 3000);
        });

        var $failButton = $("#failButton").stateButton();
        $("#failButton").on("click", function (event) {
            event.preventDefault();
            $failButton.showSpinner();
            //Demonstration states with a timeout
            setTimeout(function () {
                $failButton.showFail(true);
                setTimeout(function () {
                    $failButton.reset();
                }, 2000);
            }, 3000);
        });

        /* 03.30. Typeahead */
        var testData = [
            {
                name: "May",
                index: 0,
                id: "5a8a9bfd8bf389ba8d6bb211"
            },
            {
                name: "Fuentes",
                index: 1,
                id: "5a8a9bfdee10e107f28578d4"
            },
            {
                name: "Henderson",
                index: 2,
                id: "5a8a9bfd4f9e224dfa0110f3"
            },
            {
                name: "Hinton",
                index: 3,
                id: "5a8a9bfde42b28e85df34630"
            },
            {
                name: "Barrera",
                index: 4,
                id: "5a8a9bfdc0cba3abc4532d8d"
            },
            {
                name: "Therese",
                index: 5,
                id: "5a8a9bfdedfcd1aa0f4c414e"
            },
            {
                name: "Nona",
                index: 6,
                id: "5a8a9bfdd6686aa51b953c4e"
            },
            {
                name: "Frye",
                index: 7,
                id: "5a8a9bfd352e2fd4c101507d"
            },
            {
                name: "Cora",
                index: 8,
                id: "5a8a9bfdb5133142047f2600"
            },
            {
                name: "Miles",
                index: 9,
                id: "5a8a9bfdadb1afd136117928"
            },
            {
                name: "Cantrell",
                index: 10,
                id: "5a8a9bfdca4795bcbb002057"
            },
            {
                name: "Benson",
                index: 11,
                id: "5a8a9bfdaa51e9a4aeeddb7d"
            },
            {
                name: "Susanna",
                index: 12,
                id: "5a8a9bfd57dd857535ef5998"
            },
            {
                name: "Beatrice",
                index: 13,
                id: "5a8a9bfd68b6f12828da4175"
            },
            {
                name: "Tameka",
                index: 14,
                id: "5a8a9bfd2bc4a368244d5253"
            },
            {
                name: "Lowe",
                index: 15,
                id: "5a8a9bfd9004fda447204d30"
            },
            {
                name: "Roth",
                index: 16,
                id: "5a8a9bfdb4616dbc06af6172"
            },
            {
                name: "Conley",
                index: 17,
                id: "5a8a9bfdfae43320dd8f9c5a"
            },
            {
                name: "Nelda",
                index: 18,
                id: "5a8a9bfd534d9e0ba2d7c9a7"
            },
            {
                name: "Angie",
                index: 19,
                id: "5a8a9bfd57de84496dc42259"
            }
        ];

        if ($().typeahead) {
            $("#query").typeahead({ source: testData });
        }

        /* 03.31. Full Screen */

        function isFullScreen() {
            var isInFullScreen =
                (document.fullscreenElement && document.fullscreenElement !== null) ||
                (document.webkitFullscreenElement &&
                    document.webkitFullscreenElement !== null) ||
                (document.mozFullScreenElement &&
                    document.mozFullScreenElement !== null) ||
                (document.msFullscreenElement && document.msFullscreenElement !== null);
            return isInFullScreen;
        }

        function fullscreen() {
            var isInFullScreen = isFullScreen();

            var docElm = document.documentElement;
            if (!isInFullScreen) {
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                } else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }

        $("#fullScreenButton").on("click", function (event) {
            event.preventDefault();
            if (isFullScreen()) {
                $($(this).find("i")[1]).css("display", "none");
                $($(this).find("i")[0]).css("display", "inline");
            } else {
                $($(this).find("i")[1]).css("display", "inline");
                $($(this).find("i")[0]).css("display", "none");
            }
            fullscreen();
        });

        /* 03.32. Html Editors */
        if (typeof Quill !== "undefined") {
            var quillToolbarOptions = [
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],

                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: direction }],

                [{ size: ["small", false, "large", "huge"] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],

                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],

                ["clean"]
            ];

            var quillBubbleToolbarOptions = [
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ color: [] }],
                [{ direction: direction }],
                [{ align: [] }]
            ];

            var editor = new Quill("#quillEditor", {
                modules: { toolbar: quillToolbarOptions },
                theme: "snow"
            });

            var editorBubble = new Quill("#quillEditorBubble", {
                modules: { toolbar: quillBubbleToolbarOptions },
                theme: "bubble"
            });
        }

        if (typeof ClassicEditor !== "undefined") {
            ClassicEditor.create(document.querySelector("#ckEditorClassic")).catch(function (error) { });
        }

        /* 03.33. Showing Body */
        $("body > *").css({ opacity: 0 });

        setTimeout(function () {
            $("body").removeClass("show-spinner");
            $("main").addClass("default-transition");
            $(".sub-menu").addClass("default-transition");
            $(".main-menu").addClass("default-transition");
            $(".theme-colors").addClass("default-transition");
            $("body > *").animate({ opacity: 1 }, 100);
        }, 300);


        /*03.34. Keyboard Shortcuts*/
        if (typeof Mousetrap !== "undefined") {
            //Go to next page on sub menu
            Mousetrap.bind(["ctrl+down", "command+down"], function (e) {
                var $nextItem = $(".sub-menu li.active").next();
                if ($nextItem.length == 0) {
                    $nextItem = $(".sub-menu li.active")
                        .parent()
                        .children()
                        .first();
                }
                window.location.href = $nextItem.find("a").attr("href");
                return false;
            });

            //Go to prev page on sub menu
            Mousetrap.bind(["ctrl+up", "command+up"], function (e) {
                var $prevItem = $(".sub-menu li.active").prev();
                if ($prevItem.length == 0) {
                    $prevItem = $(".sub-menu li.active")
                        .parent()
                        .children()
                        .last();
                }
                window.location.href = $prevItem.find("a").attr("href");
                return false;
            });

            //Go to next page on main menu
            Mousetrap.bind(["ctrl+shift+down", "command+shift+down"], function (e) {
                var $nextItem = $(".main-menu li.active").next();
                if ($nextItem.length == 0) {
                    $nextItem = $(".main-menu li:first-of-type");
                }
                var $link = $nextItem
                    .find("a")
                    .attr("href")
                    .replace("#", "");
                var $firstSubLink = $(
                    ".sub-menu ul[data-link='" + $link + "'] li:first-of-type"
                );
                window.location.href = $firstSubLink.find("a").attr("href");
                return false;
            });

            //Go to prev page on main menu
            Mousetrap.bind(["ctrl+shift+up", "command+shift+up"], function (e) {
                var $prevItem = $(".main-menu li.active").prev();
                if ($prevItem.length == 0) {
                    $prevItem = $(".main-menu li:last-of-type");
                }
                var $link = $prevItem
                    .find("a")
                    .attr("href")
                    .replace("#", "");
                var $firstSubLink = $(
                    ".sub-menu ul[data-link='" + $link + "'] li:first-of-type"
                );
                window.location.href = $firstSubLink.find("a").attr("href");
                return false;
            });

            /*Select all with ctrl+a and deselect all with ctrl+d at list pages */
            if ($(".list") && $(".list").length > 0) {
                Mousetrap.bind(["ctrl+a", "command+a"], function (e) {
                    $(".list")
                        .shiftSelectable()
                        .data("shiftSelectable")
                        .selectAll();
                    return false;
                });

                Mousetrap.bind(["ctrl+d", "command+d"], function (e) {
                    $(".list")
                        .shiftSelectable()
                        .data("shiftSelectable")
                        .deSelectAll();
                    return false;
                });
            }
        }

        /*03.35. Context Menu */
        if ($().contextMenu) {
            $.contextMenu({
                selector: ".list .card",
                callback: function (key, options) {
                    var m = "clicked: " + key;
                },
                events: {
                    show: function (options) {
                        var $list = options.$trigger.parents(".list");
                        if ($list && $list.length > 0) {
                            $list.data("shiftSelectable").rightClick(options.$trigger);
                        }
                    }
                },
                items: {
                    copy: {
                        name: "Copy",
                        className: "simple-icon-docs"
                    },
                    archive: { name: "Move to archive", className: "simple-icon-drawer" },
                    delete: { name: "Delete", className: "simple-icon-trash" }
                }
            });
        }

        /* 03.36. Select from Library */
        if ($().selectFromLibrary) {
            $(".sfl-multiple").selectFromLibrary();
            $(".sfl-single").selectFromLibrary();
            /*
      Getting selected items
      console.log($(".sfl-multiple").selectFromLibrary().data("selectFromLibrary").getData());
      console.log($(".sfl-single").selectFromLibrary().data("selectFromLibrary").getData());
      */
        }

        /* 03.37. Feedback */
        $(".feedback-container").on("click", "a", onFeedbackClick);

        function onFeedbackClick(event) {
            event.preventDefault();
            $(".feedback-container").off("click", "a", onFeedbackClick);
            $(".feedback-container a").tooltip("dispose");
            $(".feedback-container a").animate({
                opacity: 0
            }, 300, function () {
                $(".feedback-container a").css("visibility", "hidden");
            });
            $(".feedback-container .feedback-answer").html($(event.currentTarget).data("message"));
        }


        /* 03.38. Smart Wizard */
        if ($().smartWizard) {
            $('#smartWizardDefault').smartWizard({
                selected: 0,
                theme: 'default',
                transitionEffect: 'fade',
                showStepURLhash: false
            });

            $('#smartWizardDot').smartWizard({
                selected: 0,
                theme: 'dots',
                transitionEffect: 'fade',
                showStepURLhash: false
            });

            $('#smartWizardCheck').smartWizard({
                selected: 0,
                theme: 'check',
                transitionEffect: 'fade',
                showStepURLhash: false
            });

            $('#smartWizardClickable').smartWizard({
                selected: 0,
                theme: 'default',
                transitionEffect: 'fade',
                showStepURLhash: false,
                anchorSettings: {
                    enableAllAnchors: true
                }
            });

            //Custom Buttons
            $('#smartWizardCustomButtons').smartWizard({
                selected: 0,
                theme: 'default',
                transitionEffect: 'fade',
                showStepURLhash: false,
                toolbarSettings: {
                    toolbarPosition: 'none'
                }
            });

            $("#smartWizardCustomButtons .prev-btn").on("click", function () {
                $('#smartWizardCustomButtons').smartWizard("prev");
                return true;
            });

            $("#smartWizardCustomButtons .next-btn").on("click", function () {
                $('#smartWizardCustomButtons').smartWizard("next");
                return true;
            });

            $("#smartWizardCustomButtons .reset-btn").on("click", function (event) {
                $('#smartWizardCustomButtons').smartWizard("reset");
                return true;
            });

            // Validation
            $("#smartWizardValidation").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
                if (stepPosition === 'first') {
                    $("#smartWizardValidation .prev-btn").addClass('disabled');
                    $("#smartWizardValidation .finish-btn").hide();
                    $("#smartWizardValidation .next-btn").show();
                } else if (stepPosition === 'final') {
                    $("#smartWizardValidation .next-btn").hide();
                    $("#smartWizardValidation .finish-btn").show();
                    $("#smartWizardValidation .prev-btn").removeClass('disabled');
                } else {
                    $("#smartWizardValidation .finish-btn").hide();
                    $("#smartWizardValidation .next-btn").show();
                    $("#smartWizardValidation .prev-btn").removeClass('disabled');
                }
            });

            $('#smartWizardValidation').smartWizard({
                selected: 0,
                theme: 'check',
                transitionEffect: 'fade',
                showStepURLhash: false,
                toolbarSettings: {
                    toolbarPosition: 'none'
                }
            });

            $("#smartWizardValidation").on("leaveStep", function (e, anchorObject, stepNumber, stepDirection) {
                var elmForm = $("#form-step-" + stepNumber);
                if (stepDirection === 'forward' && elmForm) {
                    return checkWizardValidation(elmForm);
                }
            });

            $("#smartWizardValidation .prev-btn").on("click", function () {
                $('#smartWizardValidation').smartWizard("prev");
                return true;
            });

            $("#smartWizardValidation .next-btn").on("click", function () {
                $('#smartWizardValidation').smartWizard("next");
                return true;
            });

            $("#smartWizardValidation .finish-btn").on("click", function (event) {
                if (checkWizardValidation($('#smartWizardValidation #form-step-1'))) {
                    console.log("Form Done");
                    return false;
                }
                return true;
            });

            function checkWizardValidation(form) {
                if ($().validate) {
                    if ($(form).valid()) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }

        /* 03.39. Countdown */
        if (typeof Countdown !== "undefined") {
            var dateToCount = new Date(new Date().setMinutes(new Date().getMinutes() + 5000));
            var countdown = new Countdown({
                selector: '#timer',
                leadingZeros: true,
                msgBefore: "",
                msgAfter: "",
                msgPattern: ' <span class="timer-column"><p class="lead text-center">{days}</p><p>Days</p></span><span class="timer-column"><p class="lead text-center">{hours}</p><p>Hours</p></span><span class="timer-column"><p class="lead text-center">{minutes}</p><p>Minutes</p></span><span class="timer-column"><p class="lead text-center">{seconds}</p><p>Seconds</p></span>',
                dateEnd: dateToCount
            });
        }

        /* 03.40. Lightbox */
        if (typeof baguetteBox !== "undefined") {
            baguetteBox.run('.gallery');
            baguetteBox.run('.lightbox');
        }

        /* 03.41. Ellipsis */
        if ($().ellipsis) {
            $(".ellipsis").ellipsis({
                live: true
            });
        }

        /* 03.42. Glide */
        if (typeof Glide !== "undefined") {

            // Details Images
            if ($(".glide.details").length > 0) {
                var glideThumbCountMax = 5;
                var glideLength = $(".glide.thumbs li").length;
                var perView = Math.min(glideThumbCountMax, glideLength);

                var glideLarge = new Glide(".glide.details", {
                    bound: true,
                    rewind: false,
                    focusAt: 0,
                    perView: 1,
                    startAt: 0,
                    direction: direction,
                });

                var glideThumbs = new Glide(".glide.thumbs", {
                    bound: true,
                    rewind: false,
                    perView: perView,
                    perTouch: 1,
                    focusAt: 0,
                    startAt: 0,
                    direction: direction,
                    breakpoints: {
                        576: {
                            perView: Math.min(4, glideLength)
                        },
                        420: {
                            perView: Math.min(3, glideLength)
                        }
                    }
                });

                $(".glide.thumbs").css("width", perView * 70);
                addActiveThumbClass(0);

                $(".glide.thumbs li").on("click", function (event) {
                    var clickedIndex = $(event.currentTarget).index();
                    glideLarge.go("=" + clickedIndex);
                    addActiveThumbClass(clickedIndex);
                });

                glideLarge.on(["swipe.end"], function () {
                    addActiveThumbClass(glideLarge.index);
                });

                glideThumbs.on("resize", function () {
                    perView = Math.min(glideThumbs.settings.perView, glideLength);
                    $(".glide.thumbs").css("width", perView * 70);
                    if (perView >= $(".glide.thumbs li").length) {
                        $(".glide.thumbs .glide__arrows").css("display", "none");
                    } else {
                        $(".glide.thumbs .glide__arrows").css("display", "block");
                    }
                });

                function addActiveThumbClass(index) {
                    $(".glide.thumbs li").removeClass("active");
                    $($(".glide.thumbs li")[index]).addClass("active");
                    var gap = glideThumbs.index + perView;
                    if (index >= gap) {
                        glideThumbs.go(">");
                    }
                    if (index < glideThumbs.index) {
                        glideThumbs.go("<");
                    }
                }
                glideThumbs.mount();
                glideLarge.mount();
            }

            // Dashboard Numbers
            if ($(".glide.dashboard-numbers").length > 0) {
                new Glide(".glide.dashboard-numbers", {
                    bound: true,
                    rewind: false,
                    perView: 4,
                    perTouch: 1,
                    focusAt: 0,
                    startAt: 0,
                    direction: direction,
                    gap: 7,
                    breakpoints: {
                        1800: {
                            perView: 3
                        },
                        576: {
                            perView: 2
                        },
                        320: {
                            perView: 1
                        }
                    }
                }).mount();
            }

            // Dashboard Best Rated
            if ($(".best-rated-items").length > 0) {
                new Glide(".best-rated-items", {
                    gap: 10,
                    perView: 1,
                    direction: direction,
                    type: "carousel",
                    peek: { before: 0, after: 100 },
                    breakpoints: {
                        480: { perView: 1 },
                        992: { perView: 2 },
                        1200: { perView: 1 }
                    },
                }).mount();
            }


            if ($(".glide.basic").length > 0) {
                new Glide(".glide.basic", {
                    gap: 0,
                    rewind: false,
                    bound: true,
                    perView: 3,
                    direction: direction,
                    breakpoints: {
                        600: { perView: 1 },
                        1000: { perView: 2 }
                    },
                }).mount();
            }

            if ($(".glide.center").length > 0) {
                new Glide(".glide.center", {
                    gap: 0,
                    type: "carousel",
                    perView: 4,
                    direction: direction,
                    peek: { before: 50, after: 50 },
                    breakpoints: {
                        600: { perView: 1 },
                        1000: { perView: 2 }
                    },
                }).mount();
            }

            if ($(".glide.single").length > 0) {
                new Glide(".glide.single", {
                    gap: 0,
                    type: "carousel",
                    perView: 1,
                    direction: direction,
                }).mount();
            }



            if ($(".glide.gallery").length > 0) {
                var enableClick = true;
                var glideGallery = new Glide(".glide.gallery", {
                    gap: 10,
                    perTouch: 1,
                    perView: 1,
                    type: "carousel",
                    peek: { before: 100, after: 100 },
                    direction: direction
                })

                glideGallery.on(["swipe.move"], function () {
                    enableClick = false;
                });

                glideGallery.on(["run.after"], function () {
                    enableClick = true;
                });

                glideGallery.mount();

                $(".glide.gallery").get(0).addEventListener('click', function (event) {
                    if (!enableClick) {
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    } else {
                        return true;
                    }
                }, true);

            }
        }

        /* 03.43. Validation */
        // Bootstrap Validate
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                $(form).find(".custom-control input").parents(".form-group").each(function () {
                    $(this).find(".custom-control input").parents(".form-group").removeClass("is-invalid");
                    if ($(this).find(".custom-control input:invalid").length == $(this).find(".custom-control input").length) {
                        $(this).find(".custom-control input:invalid").parents(".form-group").addClass("is-invalid");
                    }
                });
                form.classList.add('was-validated');
            }, false);

            $(form).find("input").each(function () {
                $(this).on("change", function () {
                    $(this).parents(".form-group").removeClass("is-invalid");
                });
            });
        });

        // jQuery Validate
        if ($().validate) {
            $.validator.setDefaults({
                ignore: [],
                errorElement: "div",
                submitHandler: function () {
                    alert("submitted!");
                },
                errorPlacement: function (error, element) {
                    if (element.attr("class").indexOf("custom-control") != -1) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                }
            });

            $("#exampleForm").validate();
            $("#exampleFormTopLabels").validate();
            $("#exampleFormLabelsInInput").validate();
            $("#tooltipPositions").validate();
            $("#tooltipHelpers").validate();

            $("#rulesForm").validate({
                rules: {
                    rulesName: {
                        required: true,
                        lettersonly: true
                    },
                    rulesEmail: {
                        required: true,
                        email: true
                    },
                    rulesId: {
                        required: true,
                        minlength: 8,
                        maxlength: 8,
                        number: true
                    },
                    rulesDetail: {
                        required: true,
                        maxlength: 20
                    },
                    rulesPassword: {
                        required: true,
                        minlength: 6,
                    },
                    rulesPasswordConfirm: {
                        required: true,
                        minlength: 6,
                        equalTo: "#rulesPassword"
                    },
                    rulesCreditCard: {
                        creditcard: true,
                        nowhitespace: true,
                        required: true,
                    },
                    rulesAge: {
                        number: true,
                        min: 18,
                        required: true
                    }
                },
                messages: {
                    rulesName: {
                        lettersonly: "Only letters are accepted!"
                    },
                    rulesEmail: {
                        email: "Your email address must be in correct format!"
                    },
                    rulesId: {
                        number: "Must be a number!",
                        minlength: "Id must be {0} characters!",
                        maxlength: "Id must be {0} characters!"
                    },
                    rulesPassword: {
                        minlength: "Password must be at least {0} characters!"
                    },
                    rulesPasswordConfirm: {
                        equalTo: "Passwords must match!",
                        minlength: "Password must be at least {0} characters!"
                    },
                    rulesDetail: {
                        maxlength: "Details must be maximum {0} characters!"
                    },
                    rulesCreditCard: {
                        creditcard: "Must be a valid credit card number!",
                        nowhitespace: "Must not contain whitespace!"
                    }
                }
            });

            $('select, .tags-input, .datepicker').on('change', function () {
                $(this).valid();
            });
        }
    }

    init();
};

$.fn.dore = function (options) {
    return this.each(function () {
        if (undefined == $(this).data("dore")) {
            var plugin = new $.dore(this, options);
            $(this).data("dore", plugin);
        }
    });
};



/* Dore Theme Select & Initializer Script

Table of Contents

01. Css Loading Util
02. Theme Selector And Initializer
*/

/* 01. Css Loading Util */
function loadStyle(href, callback) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].href == href) {
            return;
        }
    }
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    if (callback) {
        link.onload = function () {
            callback();
        };
    }
    var mainCss = $(head).find('[href$="main.css"]');
    if (mainCss.length !== 0) {
        mainCss[0].before(link);
    } else {
        head.appendChild(link);
    }
}

/* 02. Theme Selector, Layout Direction And Initializer */
(function ($) {
    if ($().dropzone) {
        Dropzone.autoDiscover = false;
    }

    var themeColorsDom = /*html*/`
  <div class="theme-colors">
    <div class="p-4">
    <p class="text-muted mb-2">Light Theme</p>
    <div class="d-flex flex-row justify-content-between mb-3">
      <a href="#" data-theme="dore.light.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>
      <a href="#" data-theme="dore.light.blueyale.min.css" class="theme-color theme-color-blueyale"></a>
      <a href="#" data-theme="dore.light.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>
      <a href="#" data-theme="dore.light.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>
      <a href="#" data-theme="dore.light.greenlime.min.css" class="theme-color theme-color-greenlime"></a>
    </div>
    <div class="d-flex flex-row justify-content-between mb-4">
      <a href="#" data-theme="dore.light.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>
      <a href="#" data-theme="dore.light.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>
      <a href="#" data-theme="dore.light.redruby.min.css" class="theme-color theme-color-redruby"></a>
      <a href="#" data-theme="dore.light.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>
      <a href="#" data-theme="dore.light.greysteel.min.css" class="theme-color theme-color-greysteel"></a>
    </div>
    <p class="text-muted mb-2">Dark Theme</p>
    <div class="d-flex flex-row justify-content-between mb-3">
      <a href="#" data-theme="dore.dark.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>
      <a href="#" data-theme="dore.dark.blueyale.min.css" class="theme-color theme-color-blueyale"></a>
      <a href="#" data-theme="dore.dark.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>
      <a href="#" data-theme="dore.dark.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>
      <a href="#" data-theme="dore.dark.greenlime.min.css" class="theme-color theme-color-greenlime"></a>
    </div>
    <div class="d-flex flex-row justify-content-between">
    <a href="#" data-theme="dore.dark.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>
    <a href="#" data-theme="dore.dark.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>
    <a href="#" data-theme="dore.dark.redruby.min.css" class="theme-color theme-color-redruby"></a>
    <a href="#" data-theme="dore.dark.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>
    <a href="#" data-theme="dore.dark.greysteel.min.css" class="theme-color theme-color-greysteel"></a>
  </div>
  </div>
  <div class="p-4">
    <p class="text-muted mb-2">Border Radius</p>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="roundedRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="rounded">
      <label class="custom-control-label" for="roundedRadio">Rounded</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="flatRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="flat">
      <label class="custom-control-label" for="flatRadio">Flat</label>
    </div>
  </div>
  <div class="p-4">
    <p class="text-muted mb-2">Direction</p>
    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="ltrRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="ltr">
    <label class="custom-control-label" for="ltrRadio">Ltr</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="rtlRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="rtl">
    <label class="custom-control-label" for="rtlRadio">Rtl</label>
  </div>
</div>
<a href="#" class="theme-button"> <i class="simple-icon-magic-wand"></i> </a>
</div>
`;

    $("body").append(themeColorsDom);


    /* Default Theme Color, Border Radius and  Direction */
    var theme = "dore.light.bluenavy.min.css";
    var direction = "ltr";
    var radius = "rounded";

    if (typeof Storage !== "undefined") {
        if (localStorage.getItem("dore-theme-color")) {
            theme = localStorage.getItem("dore-theme-color");
        } else {
            localStorage.setItem("dore-theme-color", theme);
        }
        if (localStorage.getItem("dore-direction")) {
            direction = localStorage.getItem("dore-direction");
        } else {
            localStorage.setItem("dore-direction", direction);
        }
        if (localStorage.getItem("dore-radius")) {
            radius = localStorage.getItem("dore-radius");
        } else {
            localStorage.setItem("dore-radius", radius);
        }
    }

    $(".theme-color[data-theme='" + theme + "']").addClass("active");
    $(".direction-radio[data-direction='" + direction + "']").attr("checked", true);
    $(".radius-radio[data-radius='" + radius + "']").attr("checked", true);
    $("#switchDark").attr("checked", theme.indexOf("dark") > 0 ? true : false);

    loadStyle("css/" + theme, onStyleComplete);
    function onStyleComplete() {
        setTimeout(onStyleCompleteDelayed, 300);
    }

    function onStyleCompleteDelayed() {
        $("body").addClass(direction);
        $("html").attr("dir", direction);
        $("body").addClass(radius);
        $("body").dore();
    }

    $("body").on("click", ".theme-color", function (event) {
        event.preventDefault();
        var dataTheme = $(this).data("theme");
        if (typeof Storage !== "undefined") {
            localStorage.setItem("dore-theme-color", dataTheme);
            window.location.reload();
        }
    });

    $("input[name='directionRadio']").on("change", function (event) {
        var direction = $(event.currentTarget).data("direction");
        if (typeof Storage !== "undefined") {
            localStorage.setItem("dore-direction", direction);
            window.location.reload();
        }
    });

    $("input[name='radiusRadio']").on("change", function (event) {
        var radius = $(event.currentTarget).data("radius");
        if (typeof Storage !== "undefined") {
            localStorage.setItem("dore-radius", radius);
            window.location.reload();
        }
    });

    $("#switchDark").on("change", function (event) {
        var mode = $(event.currentTarget)[0].checked ? "dark" : "light";
        if (mode == "dark") {
            theme = theme.replace("light", "dark");
        } else if (mode == "light") {
            theme = theme.replace("dark", "light");
        }
        if (typeof Storage !== "undefined") {
            localStorage.setItem("dore-theme-color", theme);
            window.location.reload();
        }
    });

    $(".theme-button").on("click", function (event) {
        event.preventDefault();
        $(this)
            .parents(".theme-colors")
            .toggleClass("shown");
    });

    $(document).on("click", function (event) {
        if (
            !(
                $(event.target)
                    .parents()
                    .hasClass("theme-colors") ||
                $(event.target)
                    .parents()
                    .hasClass("theme-button") ||
                $(event.target).hasClass("theme-button") ||
                $(event.target).hasClass("theme-colors")
            )
        ) {
            if ($(".theme-colors").hasClass("shown")) {
                $(".theme-colors").removeClass("shown");
            }
        }
    });
})(jQuery);
