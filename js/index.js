parcelRequire=function(t,e,n,r){function i(n,r){function o(t){return i(o.resolve(t))}if(!e[n]){if(!t[n]){var u="function"==typeof parcelRequire&&parcelRequire;if(!r&&u)return u(n,!0);if(a)return a(n,!0);if(s&&"string"==typeof n)return s(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}o.resolve=function(e){return t[n][1][e]||e},o.cache={};var l=e[n]=new i.Module(n);t[n][0].call(l.exports,o,l,l.exports,this)}return e[n].exports}var o,a="function"==typeof parcelRequire&&parcelRequire,s="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=function(t){this.id=t,this.bundle=i,this.exports={}},i.modules=t,i.cache=e,i.parent=a,i.register=function(e,n){t[e]=[function(t,e){e.exports=n},{}]};for(var u=0;u<n.length;u++)try{i(n[u])}catch(t){o||(o=t)}if(n.length){var c=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):r&&(this[r]=c)}if(parcelRequire=i,o)throw o;return i}({XR92:[function(t,e,n){var r;arguments[3],arguments[3];!function(t,e){"function"==typeof r&&r.amd?r(function(){return e(t)}):e(t)}(this,function(t){var e,n=function(){function e(t){return null==t?String(t):B[_.call(t)]||"object"}function n(t){return"function"==e(t)}function r(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(t){return"object"==e(t)}function a(t){return o(t)&&!r(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){var e=!!t&&"length"in t&&t.length,n=b.type(t);return"function"!=n&&!r(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function c(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,e){return"number"!=typeof e||R[u(t)]?e:e+"px"}function f(t){return"children"in t?N.call(t.children):b.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function h(t,e){var n,r=t?t.length:0;for(n=0;n<r;n++)this[n]=t[n];this.length=r,this.selector=e||""}function p(t,e){return null==e?b(t):b(t).filter(e)}function d(t,e,r,i){return n(e)?e.call(t,r,i):e}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function v(t,e){var n=t.className||"",r=n&&n.baseVal!==y;if(e===y)return r?n.baseVal:n;r?n.baseVal=e:t.className=e}function g(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?b.parseJSON(t):t):t}catch(e){return t}}var y,x,b,w,E,j,T=[],C=T.concat,S=T.filter,N=T.slice,O=t.document,P={},A={},R={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},q=/^\s*<(\w+|!)[^>]*>/,D=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,M=/^(?:body|html)$/i,L=/([A-Z])/g,$=["val","css","html","text","data","width","height","offset"],k=O.createElement("table"),z=O.createElement("tr"),Z={tr:O.createElement("tbody"),tbody:k,thead:k,tfoot:k,td:z,th:z,"*":O.createElement("div")},I=/complete|loaded|interactive/,H=/^[\w-]*$/,B={},_=B.toString,V={},U=O.createElement("div"),X={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array};return V.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=U).appendChild(t),r=~V.qsa(i,e).indexOf(t),o&&U.removeChild(t),r},E=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},j=function(t){return S.call(t,function(e,n){return t.indexOf(e)==n})},V.fragment=function(t,e,n){var r,i,o;return D.test(t)&&(r=b(O.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(F,"<$1></$2>")),e===y&&(e=q.test(t)&&RegExp.$1),e in Z||(e="*"),(o=Z[e]).innerHTML=""+t,r=b.each(N.call(o.childNodes),function(){o.removeChild(this)})),a(n)&&(i=b(r),b.each(n,function(t,e){$.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},V.Z=function(t,e){return new h(t,e)},V.isZ=function(t){return t instanceof V.Z},V.init=function(t,e){var r,i;if(!t)return V.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&q.test(t))r=V.fragment(t,RegExp.$1,e),t=null;else{if(e!==y)return b(e).find(t);r=V.qsa(O,t)}else{if(n(t))return b(O).ready(t);if(V.isZ(t))return t;if(J(t))i=t,r=S.call(i,function(t){return null!=t});else if(o(t))r=[t],t=null;else if(q.test(t))r=V.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==y)return b(e).find(t);r=V.qsa(O,t)}}return V.Z(r,t)},(b=function(t,e){return V.init(t,e)}).extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){!function t(e,n,r){for(x in n)r&&(a(n[x])||J(n[x]))?(a(n[x])&&!a(e[x])&&(e[x]={}),J(n[x])&&!J(e[x])&&(e[x]=[]),t(e[x],n[x],r)):n[x]!==y&&(e[x]=n[x])}(t,n,e)}),t},V.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=H.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:N.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},b.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},b.type=e,b.isFunction=n,b.isWindow=r,b.isArray=J,b.isPlainObject=a,b.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},b.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},b.inArray=function(t,e,n){return T.indexOf.call(e,t,n)},b.camelCase=E,b.trim=function(t){return null==t?"":String.prototype.trim.call(t)},b.uuid=0,b.support={},b.expr={},b.noop=function(){},b.map=function(t,e){var n,r,i,o,a=[];if(s(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&a.push(n);else for(i in t)null!=(n=e(t[i],i))&&a.push(n);return(o=a).length>0?b.fn.concat.apply([],o):o},b.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},b.grep=function(t,e){return S.call(t,e)},t.JSON&&(b.parseJSON=JSON.parse),b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),b.fn={constructor:V.Z,length:0,forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,splice:T.splice,indexOf:T.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=V.isZ(e)?e.toArray():e;return C.apply(V.isZ(this)?this.toArray():this,n)},map:function(t){return b(b.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return b(N.apply(this,arguments))},ready:function(t){return I.test(O.readyState)&&O.body?t(b):O.addEventListener("DOMContentLoaded",function(){t(b)},!1),this},get:function(t){return t===y?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return n(t)?this.not(this.not(t)):b(S.call(this,function(e){return V.matches(e,t)}))},add:function(t,e){return b(j(this.concat(b(t,e))))},is:function(t){return this.length>0&&V.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==y)this.each(function(n){t.call(this,n)||e.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&n(t.item)?N.call(t):b(t);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return b(e)},has:function(t){return this.filter(function(){return o(t)?b.contains(this,t):b(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:b(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:b(t)},find:function(t){var e=this;return t?"object"==typeof t?b(t).filter(function(){var t=this;return T.some.call(e,function(e){return b.contains(e,t)})}):1==this.length?b(V.qsa(this[0],t)):this.map(function(){return V.qsa(this,t)}):b()},closest:function(t,e){var n=[],r="object"==typeof t&&b(t);return this.each(function(o,a){for(;a&&!(r?r.indexOf(a)>=0:V.matches(a,t));)a=a!==e&&!i(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),b(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=b.map(n,function(t){if((t=t.parentNode)&&!i(t)&&e.indexOf(t)<0)return e.push(t),t});return p(e,t)},parent:function(t){return p(j(this.pluck("parentNode")),t)},children:function(t){return p(this.map(function(){return f(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||N.call(this.childNodes)})},siblings:function(t){return p(this.map(function(t,e){return S.call(f(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return b.map(this,function(e){return e[t]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,P[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),P[t]=n),P[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var r=b(t).get(0),i=r.parentNode||this.length>1;return this.each(function(n){b(this).wrapAll(e?t.call(this,n):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){var e;for(b(this[0]).before(t=b(t));(e=t.children()).length;)t=e.first();b(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var r=b(this),i=r.contents(),o=e?t.call(this,n):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){b(this).replaceWith(b(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=b(this);(t===y?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return b(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return b(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;b(this).empty().append(d(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=d(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(x in t)m(this,x,t[x]);else m(this,t,d(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:y},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){m(this,t)},this)})},prop:function(t,e){return t=X[t]||t,1 in arguments?this.each(function(n){this[t]=d(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=X[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(L,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?g(r):y},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=d(this,t,e,this.value)})):this[0]&&(this[0].multiple?b(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=b(this),r=d(this,e,t,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(O.documentElement!==this[0]&&!b.contains(O.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,n){if(arguments.length<2){var r=this[0];if("string"==typeof t){if(!r)return;return r.style[E(t)]||getComputedStyle(r,"").getPropertyValue(t)}if(J(t)){if(!r)return;var i={},o=getComputedStyle(r,"");return b.each(t,function(t,e){i[e]=r.style[E(e)]||o.getPropertyValue(e)}),i}}var a="";if("string"==e(t))n||0===n?a=u(t)+":"+l(t,n):this.each(function(){this.style.removeProperty(u(t))});else for(x in t)t[x]||0===t[x]?a+=u(x)+":"+l(x,t[x])+";":this.each(function(){this.style.removeProperty(u(x))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(b(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&T.some.call(this,function(t){return this.test(v(t))},c(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){w=[];var n=v(this);d(this,t,e,n).split(/\s+/g).forEach(function(t){b(this).hasClass(t)||w.push(t)},this),w.length&&v(this,n+(n?" ":"")+w.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===y)return v(this,"");w=v(this),d(this,t,e,w).split(/\s+/g).forEach(function(t){w=w.replace(c(t)," ")}),v(this,w.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=b(this);d(this,t,n,v(this)).split(/\s+/g).forEach(function(t){(e===y?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===y?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===y?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=M.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(b(t).css("margin-top"))||0,n.left-=parseFloat(b(t).css("margin-left"))||0,r.top+=parseFloat(b(e[0]).css("border-top-width"))||0,r.left+=parseFloat(b(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!M.test(t.nodeName)&&"static"==b(t).css("position");)t=t.offsetParent;return t})}},b.fn.detach=b.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});b.fn[t]=function(n){var o,a=this[0];return n===y?r(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){(a=b(this)).css(t,d(this,n,e,a[t]()))})}}),["after","prepend","before","append"].forEach(function(n,r){var i=r%2;b.fn[n]=function(){var n,o,a=b.map(arguments,function(t){var r=[];return"array"==(n=e(t))?(t.forEach(function(t){return t.nodeType!==y?r.push(t):b.zepto.isZ(t)?r=r.concat(t.get()):void(r=r.concat(V.fragment(t)))}),r):"object"==n||null==t?t:V.fragment(t)}),s=this.length>1;return a.length<1?this:this.each(function(e,n){o=i?n:n.parentNode,n=0==r?n.nextSibling:1==r?n.firstChild:2==r?n:null;var u=b.contains(O.documentElement,o);a.forEach(function(e){if(s)e=e.cloneNode(!0);else if(!o)return b(e).remove();o.insertBefore(e,n),u&&function t(e,n){n(e);for(var r=0,i=e.childNodes.length;r<i;r++)t(e.childNodes[r],n)}(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},b.fn[i?n+"To":"insert"+(r?"Before":"After")]=function(t){return b(t)[n](this),this}}),V.Z.prototype=h.prototype=b.fn,V.uniq=j,V.deserializeValue=g,b.zepto=V,b}();return t.Zepto=n,void 0===t.$&&(t.$=n),function(e){function n(t){return t._zid||(t._zid=h++)}function r(t,e,r,o){if((e=i(e)).ns)var a=(s=e.ns,new RegExp("(?:^| )"+s.replace(" "," .* ?")+"(?: |$)"));var s;return(v[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||a.test(t.ns))&&(!r||n(t.fn)===n(r))&&(!o||t.sel==o)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return b[t]||y&&x[t]||t}function s(t,r,s,u,l,h,p){var d=n(t),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(s);var r=i(n);r.fn=s,r.sel=l,r.e in b&&(s=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return r.fn.apply(this,arguments)}),r.del=h;var d=h||s;r.proxy=function(e){if(!(e=c(e)).isImmediatePropagationStopped()){e.data=u;var n=d.apply(t,e._args==f?[e]:[e].concat(e._args));return!1===n&&(e.preventDefault(),e.stopPropagation()),n}},r.i=m.length,m.push(r),"addEventListener"in t&&t.addEventListener(a(r.e),r.proxy,o(r,p))})}function u(t,e,i,s,u){var c=n(t);(e||"").split(/\s/).forEach(function(e){r(t,e,i,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(t,n){return!n&&t.isDefaultPrevented||(n||(n=t),e.each(T,function(e,r){var i=n[e];t[e]=function(){return this[r]=w,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=w)),t}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=e.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in t,x={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",e.event={add:s,remove:u},e.proxy=function(t,r){var i=2 in arguments&&p.call(arguments,2);if(d(t)){var o=function(){return t.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=n(t),o}if(m(r))return i?(i.unshift(t[r],t),e.proxy.apply(null,i)):e.proxy(t[r],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r,i,o){var a,c,h=this;return t&&!m(t)?(e.each(t,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||!1===i||(i=r,r=n,n=f),i!==f&&!1!==r||(i=r,r=f),!1===i&&(i=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(t){var r,o=e(t.target).closest(n,h).get(0);if(o&&o!==h)return r=e.extend(l(t),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))}),s(h,t,i,r,n,c||a)}))},e.fn.off=function(t,n,r){var i=this;return t&&!m(t)?(e.each(t,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||!1===r||(r=n,n=f),!1===r&&(r=E),i.each(function(){u(this,t,r,n)}))},e.fn.trigger=function(t,n){return(t=m(t)||e.isPlainObject(t)?e.Event(t):c(t))._args=n,this.each(function(){t.type in x&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var i,o;return this.each(function(a,s){(i=l(m(t)?e.Event(t):t))._args=n,i.target=s,e.each(r(s,t.type||t),function(t,e){if(o=e.proxy(i),i.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){m(t)||(t=(e=t).type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(n),function(e){function n(t,n,r,i){if(t.global)return function(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}(n||p,r,i)}function r(t,e){var r=e.context;if(!1===e.beforeSend.call(r,t,e)||!1===n(e,r,"ajaxBeforeSend",[t,e]))return!1;n(e,r,"ajaxSend",[t,e])}function i(t,e,r,i){var o=r.context;r.success.call(o,t,"success",e),i&&i.resolveWith(o,[t,"success",e]),n(r,o,"ajaxSuccess",[e,r,t]),a("success",e,r)}function o(t,e,r,i,o){var s=i.context;i.error.call(s,r,e,t),o&&o.rejectWith(s,[r,e,t]),n(i,s,"ajaxError",[r,i,t||e]),a(e,r,i)}function a(t,r,i){var o=i.context;i.complete.call(o,r,t),n(i,o,"ajaxComplete",[r,i]),function(t){t.global&&!--e.active&&n(t,null,"ajaxStop")}(i)}function s(){}function u(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function c(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}var l,f,h=+new Date,p=t.document,d=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,m=/^(?:text|application)\/javascript/i,v=/^(?:text|application)\/xml/i,g="application/json",y="text/html",x=/^\s*$/,b=p.createElement("a");b.href=t.location.href,e.active=0,e.ajaxJSONP=function(n,a){if(!("type"in n))return e.ajax(n);var s,u,c=n.jsonpCallback,l=(e.isFunction(c)?c():c)||"Zepto"+h++,f=p.createElement("script"),d=t[l],m=function(t){e(f).triggerHandler("error",t||"abort")},v={abort:m};return a&&a.promise(v),e(f).on("load error",function(r,c){clearTimeout(u),e(f).off().remove(),"error"!=r.type&&s?i(s[0],v,n,a):o(null,c||"error",v,n,a),t[l]=d,s&&e.isFunction(d)&&d(s[0]),d=s=void 0}),!1===r(v,n)?(m("abort"),v):(t[l]=function(){s=arguments},f.src=n.url.replace(/\?(.+)=\?/,"?$1="+l),p.head.appendChild(f),n.timeout>0&&(u=setTimeout(function(){m("timeout")},n.timeout)),v)},e.ajaxSettings={type:"GET",beforeSend:s,success:s,error:s,complete:s,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:g,xml:"application/xml, text/xml",html:y,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:s},e.ajax=function(a){var c,h,d=e.extend({},a||{}),w=e.Deferred&&e.Deferred();for(l in e.ajaxSettings)void 0===d[l]&&(d[l]=e.ajaxSettings[l]);!function(t){t.global&&0==e.active++&&n(t,null,"ajaxStart")}(d),d.crossDomain||((c=p.createElement("a")).href=d.url,c.href=c.href,d.crossDomain=b.protocol+"//"+b.host!=c.protocol+"//"+c.host),d.url||(d.url=t.location.toString()),(h=d.url.indexOf("#"))>-1&&(d.url=d.url.slice(0,h)),function(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=u(t.url,t.data),t.data=void 0)}(d);var E=d.dataType,j=/\?.+=\?/.test(d.url);if(j&&(E="jsonp"),!1!==d.cache&&(a&&!0===a.cache||"script"!=E&&"jsonp"!=E)||(d.url=u(d.url,"_="+Date.now())),"jsonp"==E)return j||(d.url=u(d.url,d.jsonp?d.jsonp+"=?":!1===d.jsonp?"":"callback=?")),e.ajaxJSONP(d,w);var T,C=d.accepts[E],S={},N=function(t,e){S[t.toLowerCase()]=[t,e]},O=/^([\w-]+:)\/\//.test(d.url)?RegExp.$1:t.location.protocol,P=d.xhr(),A=P.setRequestHeader;if(w&&w.promise(P),d.crossDomain||N("X-Requested-With","XMLHttpRequest"),N("Accept",C||"*/*"),(C=d.mimeType||C)&&(C.indexOf(",")>-1&&(C=C.split(",",2)[0]),P.overrideMimeType&&P.overrideMimeType(C)),(d.contentType||!1!==d.contentType&&d.data&&"GET"!=d.type.toUpperCase())&&N("Content-Type",d.contentType||"application/x-www-form-urlencoded"),d.headers)for(f in d.headers)N(f,d.headers[f]);if(P.setRequestHeader=N,P.onreadystatechange=function(){if(4==P.readyState){P.onreadystatechange=s,clearTimeout(T);var t,n=!1;if(P.status>=200&&P.status<300||304==P.status||0==P.status&&"file:"==O){if(E=E||((r=d.mimeType||P.getResponseHeader("content-type"))&&(r=r.split(";",2)[0]),r&&(r==y?"html":r==g?"json":m.test(r)?"script":v.test(r)&&"xml")||"text"),"arraybuffer"==P.responseType||"blob"==P.responseType)t=P.response;else{t=P.responseText;try{t=function(t,e,n){if(n.dataFilter==s)return t;var r=n.context;return n.dataFilter.call(r,t,e)}(t,E,d),"script"==E?(0,eval)(t):"xml"==E?t=P.responseXML:"json"==E&&(t=x.test(t)?null:e.parseJSON(t))}catch(t){n=t}if(n)return o(n,"parsererror",P,d,w)}i(t,P,d,w)}else o(P.statusText||null,P.status?"error":"abort",P,d,w)}var r},!1===r(P,d))return P.abort(),o(null,"abort",P,d,w),P;var R=!("async"in d)||d.async;if(P.open(d.type,d.url,R,d.username,d.password),d.xhrFields)for(f in d.xhrFields)P[f]=d.xhrFields[f];for(f in S)A.apply(P,S[f]);return d.timeout>0&&(T=setTimeout(function(){P.onreadystatechange=s,P.abort(),o(null,"timeout",P,d,w)},d.timeout)),P.send(d.data?d.data:null),P},e.get=function(){return e.ajax(c.apply(null,arguments))},e.post=function(){var t=c.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=c.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var i,o=this,a=t.split(/\s/),s=c(t,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(t){o.html(i?e("<div>").html(t.replace(d,"")).find(i):t),u&&u.apply(o,arguments)},e.ajax(s),this};var w=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(w(t)+"="+w(n))},function t(n,r,i,o){var a,s=e.isArray(r),u=e.isPlainObject(r);e.each(r,function(r,c){a=e.type(c),o&&(r=i?o:o+"["+(u||"object"==a||"array"==a?r:"")+"]"),!o&&s?n.add(c.name,c.value):"array"==a||!i&&"object"==a?t(n,c,i,r):n.add(r,c)})}(r,t,n),r.join("&").replace(/%20/g,"+")}}(n),(e=n).fn.serializeArray=function(){var t,n,r=[],i=function(e){if(e.forEach)return e.forEach(i);r.push({name:t,value:e})};return this[0]&&e.each(this[0].elements,function(r,o){n=o.type,(t=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(e(o).val())}),r},e.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},e.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this},function(){try{getComputedStyle(void 0)}catch(n){var e=getComputedStyle;t.getComputedStyle=function(t,n){try{return e(t,n)}catch(t){return null}}}}(),n})},{}],Bb20:[function(t,e,n){Object.prototype.document=window.document,Object.prototype.location=window.location;var r=t("zepto").$;delete Object.prototype.document,delete Object.prototype.location,window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},r(function(){function t(t,e){var n=e-t,r=Math.random();return t+Math.round(r*n)}function e(){c.drawImage(a,-a.width/2,-a.height/2)}function n(){e(),++p>150&&p%8==0&&(c.fillStyle="rgba(0,0,0,.04)",c.fillRect(-3*u,-3*u,6*u,6*u)),r(.025)}function r(t){c.rotate(t*Math.PI/180)}var i,o,a=document.createElement("canvas"),s=document.getElementById("startrack");s.width=a.width=i=s.offsetWidth,s.height=a.height=o=s.offsetHeight;var u=Math.max(i,o);a.width=2.6*u,a.height=2.6*u;var c=s.getContext("2d"),l=a.getContext("2d"),f=i,h=[],p=0;c.fillStyle="rgba(21,21,21,1)",c.fillRect(0,0,i,o),c.lineCap="round";for(var d,m,v,g,y=2e4;y--;)d=void 0,m=void 0,v=void 0,g=void 0,h.push({x:t(-a.width,a.width),y:t(-a.height,a.height),size:1.2,color:(d=t(120,255),m=t(120,255),v=t(120,255),g=t(30,100)/100,"rgba("+d+","+m+","+v+","+g+")")});!function(){for(var t=h.length;t--;){var e=h[t];l.beginPath(),l.arc(e.x,e.y,e.size,0,2*Math.PI,!0),l.fillStyle=e.color,l.closePath(),l.fill()}}();var x=f;c.translate(x,0),function t(){requestAnimFrame(t),n()}(),window.onresize=function(){s.width=i=s.offsetWidth,s.height=o=s.offsetHeight,c.fillStyle="rgba(21,21,21,1)",c.fillRect(0,0,i,o)}}),window.onscroll=function(){r(window).scrollTop()>.6*r(window).height()?r(".background").addClass("fixed"):r(".background").removeClass("fixed")},r(function(){})},{zepto:"XR92"}]},{},["Bb20"],null);