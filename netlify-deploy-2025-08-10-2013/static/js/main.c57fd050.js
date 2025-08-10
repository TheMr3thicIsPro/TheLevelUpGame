/*! For license information please see main.c57fd050.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:i.current}}t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,a={},l=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)S.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:l,ref:i,props:a,_owner:w.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function F(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(e,t,o,a,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return l=l(s=e),e=""===a?"."+F(s,0):a,k(l)?(o="",null!=e&&(o=e.replace(_,"$&/")+"/"),T(l,t,o,"",function(e){return e})):null!=l&&(j(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(_,"$&/")+"/")+e)),t.push(l)),1;if(s=0,a=""===a?".":a+":",k(e))for(var u=0;u<e.length;u++){var c=a+F(i=e[u],u);s+=T(i,t,o,c,l)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=T(i=i.value,t,o,c=a+F(i,u++),l);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",function(e){return t.call(n,e,o++)}),r}function D(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},O={transition:null},z={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:O,ReactCurrentOwner:w};function R(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=l,t.PureComponent=b,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=R,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!C.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:l,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=R,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,l=o>>>1;r<l;){var i=2*(r+1)-1,s=e[i],u=i+1,c=e[u];if(0>a(s,n))u<o&&0>a(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[i]=n,r=i);else{if(!(u<o&&0>a(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,O(S);else{var t=r(c);null!==t&&z(k,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(j),j=-1),h=!0;var a=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!T());){var l=f.callback;if("function"===typeof l){f.callback=null,p=f.priorityLevel;var i=l(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof i?f.callback=i:f===r(u)&&o(u),x(n)}else o(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&z(k,d.startTime-n),s=!1}return s}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var w,C=!1,E=null,j=-1,_=5,F=-1;function T(){return!(t.unstable_now()-F<_)}function P(){if(null!==E){var e=t.unstable_now();F=e;var n=!0;try{n=E(!0,e)}finally{n?w():(C=!1,E=null)}}else C=!1}if("function"===typeof b)w=function(){b(P)};else if("undefined"!==typeof MessageChannel){var D=new MessageChannel,N=D.port2;D.port1.onmessage=P,w=function(){N.postMessage(null)}}else w=function(){v(P,0)};function O(e){E=e,C||(C=!0,w())}function z(e,n){j=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,O(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,a){var l=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?l+a:l:a=l,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:i=a+i,sortIndex:-1},a>l?(e.sortIndex=a,n(c,e),null===r(u)&&e===r(c)&&(g?(y(j),j=-1):g=!0,z(k,a-l))):(e.sortIndex=i,n(u,e),m||h||(m=!0,O(S))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var u=a[s];if(!i(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,i={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(i[e]=t,e=0;e<t.length;e++)l.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,o,a,l){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),S=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),_=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var I,$=Object.assign;function L(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var A=!1;function U(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),a=r.stack.split("\n"),l=o.length-1,i=a.length-1;1<=l&&0<=i&&o[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(o[l]!==a[i]){if(1!==l||1!==i)do{if(l--,0>--i||o[l]!==a[i]){var s="\n"+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=l&&0<=i);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function M(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1);case 11:return e=U(e.type.render,!1);case 1:return e=U(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case w:return"Fragment";case S:return"Portal";case E:return"Profiler";case C:return"StrictMode";case T:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case F:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case D:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function J(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function G(e,t){X(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ae(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function le(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ie(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ie(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ve=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,we=null,Ce=null;function Ee(e){if(e=xo(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=So(t),Se(e.stateNode,e.type,t))}}function je(e){we?Ce?Ce.push(e):Ce=[e]:we=e}function _e(){if(we){var e=we,t=Ce;if(Ce=we=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Fe(e,t){return e(t)}function Te(){}var Pe=!1;function De(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return Fe(e,t,n)}finally{Pe=!1,(null!==we||null!==Ce)&&(Te(),_e())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=So(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Oe=!1;if(c)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ce){Oe=!1}function Re(e,t,n,r,o,a,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ie=!1,$e=null,Le=!1,Ae=null,Ue={onError:function(e){Ie=!0,$e=e}};function Me(e,t,n,r,o,a,l,i,s){Ie=!1,$e=null,Re.apply(Ue,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(We(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var l=o.alternate;if(null===l){if(null!==(r=o.return)){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return He(o),e;if(l===r)return He(o),t;l=l.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,Je=o.unstable_shouldYield,qe=o.unstable_requestPaint,Xe=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,at=null;var lt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(it(e)/st|0)|0},it=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,l=268435455&n;if(0!==l){var i=l&~o;0!==i?r=dt(i):0!==(a&=l)&&(r=dt(a))}else 0!==(l=n&~o)?r=dt(l):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-lt(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-lt(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,St,wt,Ct,Et,jt=!1,_t=[],Ft=null,Tt=null,Pt=null,Dt=new Map,Nt=new Map,Ot=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rt(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Dt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function It(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function $t(e){var t=bo(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Et(e.priority,function(){wt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Lt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function At(e,t,n){Lt(e)&&n.delete(t)}function Ut(){jt=!1,null!==Ft&&Lt(Ft)&&(Ft=null),null!==Tt&&Lt(Tt)&&(Tt=null),null!==Pt&&Lt(Pt)&&(Pt=null),Dt.forEach(At),Nt.forEach(At)}function Mt(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ut)))}function Wt(e){function t(t){return Mt(t,e)}if(0<_t.length){Mt(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ft&&Mt(Ft,e),null!==Tt&&Mt(Tt,e),null!==Pt&&Mt(Pt,e),Dt.forEach(t),Nt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)$t(n),null===n.blockedOn&&Ot.shift()}var Bt=x.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var o=bt,a=Bt.transition;Bt.transition=null;try{bt=1,Qt(e,t,n,r)}finally{bt=o,Bt.transition=a}}function Kt(e,t,n,r){var o=bt,a=Bt.transition;Bt.transition=null;try{bt=4,Qt(e,t,n,r)}finally{bt=o,Bt.transition=a}}function Qt(e,t,n,r){if(Ht){var o=Jt(e,t,n,r);if(null===o)Hr(e,t,r,Yt,n),Rt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Ft=It(Ft,e,t,n,r,o),!0;case"dragenter":return Tt=It(Tt,e,t,n,r,o),!0;case"mouseover":return Pt=It(Pt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Dt.set(a,It(Dt.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Nt.set(a,It(Nt.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Rt(e,r),4&t&&-1<zt.indexOf(e)){for(;null!==o;){var a=xo(o);if(null!==a&&kt(a),null===(a=Jt(e,t,n,r))&&Hr(e,t,r,Yt,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function Jt(e,t,n,r){if(Yt=null,null!==(e=bo(e=ke(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Gt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Gt,r=n.length,o="value"in Xt?Xt.value:Xt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===o[a-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,a){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=$({},un,{view:0,detail:0}),fn=on(dn),pn=$({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on($({},pn,{dataTransfer:0})),gn=on($({},dn,{relatedTarget:0})),vn=on($({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=$({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(yn),xn=on($({},un,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=wn[e])&&!!t[e]}function En(){return Cn}var jn=$({},dn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=on(jn),Fn=on($({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=on($({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Pn=on($({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Dn=$({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(Dn),On=[9,13,27,32],zn=c&&"CompositionEvent"in window,Rn=null;c&&"documentMode"in document&&(Rn=document.documentMode);var In=c&&"TextEvent"in window&&!Rn,$n=c&&(!zn||Rn&&8<Rn&&11>=Rn),Ln=String.fromCharCode(32),An=!1;function Un(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Vn(e,t,n,r){je(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function Yn(e){Lr(e,0)}function Jn(e){if(Q(ko(e)))return e}function qn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Gn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Gn=Zn}else Gn=!1;Xn=Gn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Jn(Qn)){var t=[];Vn(t,Qn,e,ke(e)),De(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Jn(Qn)}function ar(e,t){if("click"===e)return Jn(t)}function lr(e,t){if("input"===e||"change"===e)return Jn(t)}var ir="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(ir(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!ir(e[o],t[o]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=cr(n,a);var l=cr(n,r);o&&l&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},wr={},Cr={};function Er(e){if(wr[e])return wr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return wr[e]=n[t];return e}c&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=Er("animationend"),_r=Er("animationiteration"),Fr=Er("animationstart"),Tr=Er("transitionend"),Pr=new Map,Dr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Pr.set(e,t),s(t,[e])}for(var Or=0;Or<Dr.length;Or++){var zr=Dr[Or];Nr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Nr(jr,"onAnimationEnd"),Nr(_r,"onAnimationIteration"),Nr(Fr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Tr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function $r(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,l,i,s,u){if(Me.apply(this,arguments),Ie){if(!Ie)throw Error(a(198));var c=$e;Ie=!1,$e=null,Le||(Le=!0,Ae=c)}}(r,t,void 0,e),e.currentTarget=null}function Lr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==a&&o.isPropagationStopped())break e;$r(o,i,u),a=s}else for(l=0;l<r.length;l++){if(s=(i=r[l]).instance,u=i.currentTarget,i=i.listener,s!==a&&o.isPropagationStopped())break e;$r(o,i,u),a=s}}}if(Le)throw e=Ae,Le=!1,Ae=null,e}function Ar(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function Ur(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Mr]){e[Mr]=!0,l.forEach(function(t){"selectionchange"!==t&&(Ir.has(t)||Ur(t,!1,e),Ur(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Mr]||(t[Mr]=!0,Ur("selectionchange",!1,t))}}function Br(e,t,n,r){switch(qt(t)){case 1:var o=Vt;break;case 4:o=Kt;break;default:o=Qt}n=o.bind(null,t,n,e),o=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var l=r.tag;if(3===l||4===l){var i=r.stateNode.containerInfo;if(i===o||8===i.nodeType&&i.parentNode===o)break;if(4===l)for(l=r.return;null!==l;){var s=l.tag;if((3===s||4===s)&&((s=l.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;l=l.return}for(;null!==i;){if(null===(l=bo(i)))return;if(5===(s=l.tag)||6===s){r=a=l;continue e}i=i.parentNode}}r=r.return}De(function(){var r=a,o=ke(n),l=[];e:{var i=Pr.get(e);if(void 0!==i){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Tn;break;case jr:case _r:case Fr:s=vn;break;case Tr:s=Pn;break;case"scroll":s=fn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Fn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==i?i+"Capture":null:i;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Ne(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(i=new s(i,u,null,n,o),l.push({event:i,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!bo(u)&&!u[mo])&&(s||i)&&(i=o.window===o?o:(i=o.ownerDocument)?i.defaultView||i.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?bo(u):null)&&(u!==(d=We(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Fn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?i:ko(s),p=null==u?i:ko(u),(i=new c(m,h+"leave",s,n,o)).target=d,i.relatedTarget=p,m=null,bo(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Qr(p))h++;for(p=0,m=f;m;m=Qr(m))p++;for(;0<h-p;)c=Qr(c),h--;for(;0<p-h;)f=Qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Qr(c),f=Qr(f)}c=null}else c=null;null!==s&&Yr(l,i,s,c,!1),null!==u&&null!==d&&Yr(l,d,u,c,!0)}if("select"===(s=(i=r?ko(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===s&&"file"===i.type)var g=qn;else if(Hn(i))if(Xn)g=lr;else{g=or;var v=rr}else(s=i.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(g=ar);switch(g&&(g=g(e,r))?Vn(l,g,n,o):(v&&v(e,i,r),"focusout"===e&&(v=i._wrapperState)&&v.controlled&&"number"===i.type&&ee(i,"number",i.value)),v=r?ko(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(l,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(l,n,o)}var y;if(zn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Wn?Un(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&($n&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Wn&&(y=en()):(Gt="value"in(Xt=o)?Xt.value:Xt.textContent,Wn=!0)),0<(v=Kr(r,b)).length&&(b=new xn(b,e,null,n,o),l.push({event:b,listeners:v}),y?b.data=y:null!==(y=Mn(n))&&(b.data=y))),(y=In?function(e,t){switch(e){case"compositionend":return Mn(t);case"keypress":return 32!==t.which?null:(An=!0,Ln);case"textInput":return(e=t.data)===Ln&&An?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!zn&&Un(e,t)?(e=en(),Zt=Gt=Xt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),l.push({event:o,listeners:r}),o.data=y))}Lr(l,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ne(e,n))&&r.unshift(Vr(e,a,o)),null!=(a=Ne(e,t))&&r.push(Vr(e,a,o))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,o){for(var a=t._reactName,l=[];null!==n&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(null!==s&&s===r)break;5===i.tag&&null!==u&&(i=u,o?null!=(s=Ne(n,a))&&l.unshift(Vr(n,s,i)):o||null!=(s=Ne(n,a))&&l.push(Vr(n,s,i))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var Jr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Jr,"\n").replace(qr,"")}function Gr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(a(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,lo="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(io)}:ro;function io(e){setTimeout(function(){throw e})}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Wt(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,vo="__reactListeners$"+fo,yo="__reactHandles$"+fo;function bo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[po])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ko(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function So(e){return e[ho]||null}var wo=[],Co=-1;function Eo(e){return{current:e}}function jo(e){0>Co||(e.current=wo[Co],wo[Co]=null,Co--)}function _o(e,t){Co++,wo[Co]=e.current,e.current=t}var Fo={},To=Eo(Fo),Po=Eo(!1),Do=Fo;function No(e,t){var n=e.type.contextTypes;if(!n)return Fo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Oo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zo(){jo(Po),jo(To)}function Ro(e,t,n){if(To.current!==Fo)throw Error(a(168));_o(To,t),_o(Po,n)}function Io(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(a(108,B(e)||"Unknown",o));return $({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fo,Do=To.current,_o(To,e),_o(Po,Po.current),!0}function Lo(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Io(e,t,Do),r.__reactInternalMemoizedMergedChildContext=e,jo(Po),jo(To),_o(To,e)):jo(Po),_o(Po,n)}var Ao=null,Uo=!1,Mo=!1;function Wo(e){null===Ao?Ao=[e]:Ao.push(e)}function Bo(){if(!Mo&&null!==Ao){Mo=!0;var e=0,t=bt;try{var n=Ao;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ao=null,Uo=!1}catch(o){throw null!==Ao&&(Ao=Ao.slice(e+1)),Qe(Ze,Bo),o}finally{bt=t,Mo=!1}}return null}var Ho=[],Vo=0,Ko=null,Qo=0,Yo=[],Jo=0,qo=null,Xo=1,Go="";function Zo(e,t){Ho[Vo++]=Qo,Ho[Vo++]=Ko,Ko=e,Qo=t}function ea(e,t,n){Yo[Jo++]=Xo,Yo[Jo++]=Go,Yo[Jo++]=qo,qo=e;var r=Xo;e=Go;var o=32-lt(r)-1;r&=~(1<<o),n+=1;var a=32-lt(t)+o;if(30<a){var l=o-o%5;a=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Xo=1<<32-lt(t)+o|n<<o|r,Go=a+e}else Xo=1<<a|n<<o|r,Go=e}function ta(e){null!==e.return&&(Zo(e,1),ea(e,1,0))}function na(e){for(;e===Ko;)Ko=Ho[--Vo],Ho[Vo]=null,Qo=Ho[--Vo],Ho[Vo]=null;for(;e===qo;)qo=Yo[--Jo],Yo[Jo]=null,Go=Yo[--Jo],Yo[Jo]=null,Xo=Yo[--Jo],Yo[Jo]=null}var ra=null,oa=null,aa=!1,la=null;function ia(e,t){var n=Du(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,oa=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qo?{id:Xo,overflow:Go}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Du(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,oa=null,!0);default:return!1}}function ua(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(aa){var t=oa;if(t){var n=t;if(!sa(e,t)){if(ua(e))throw Error(a(418));t=uo(n.nextSibling);var r=ra;t&&sa(e,t)?ia(r,n):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ua(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function fa(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oa)){if(ua(e))throw pa(),Error(a(418));for(;t;)ia(e,t),t=uo(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oa=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oa=null}}else oa=ra?uo(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=oa;e;)e=uo(e.nextSibling)}function ha(){oa=ra=null,aa=!1}function ma(e){null===la?la=[e]:la.push(e)}var ga=x.ReactCurrentBatchConfig;function va(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,l=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===l?t.ref:(t=function(e){var t=o.refs;null===e?delete t[l]:t[l]=e},t._stringRef=l,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function xa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Ou(e,t)).index=0,e.sibling=null,e}function l(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=$u(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var a=n.type;return a===w?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===N&&ba(a)===t.type)?((r=o(t,n.props)).ref=va(e,t,n),r.return=e,r):((r=zu(n.type,n.key,n.props,null,e.mode,r)).ref=va(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Lu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Ru(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=$u(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=zu(t.type,t.key,t.props,null,e.mode,n)).ref=va(e,null,t),n.return=e,n;case S:return(t=Lu(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||R(t))return(t=Ru(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===o?u(e,t,n,r):null;case S:return n.key===o?c(e,t,n,r):null;case N:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||R(n))return null!==o?null:d(e,t,n,r,null);ya(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case N:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||R(r))return d(t,e=e.get(n)||null,r,o,null);ya(t,r)}return null}function m(o,a,i,s){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<i.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,i[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=l(v,a,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===i.length)return n(o,d),aa&&Zo(o,m),u;if(null===d){for(;m<i.length;m++)null!==(d=f(o,i[m],s))&&(a=l(d,a,m),null===c?u=d:c.sibling=d,c=d);return aa&&Zo(o,m),u}for(d=r(o,d);m<i.length;m++)null!==(g=h(d,o,m,i[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=l(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(o,e)}),aa&&Zo(o,m),u}function g(o,i,s,u){var c=R(s);if("function"!==typeof c)throw Error(a(150));if(null==(s=c.call(s)))throw Error(a(151));for(var d=c=null,m=i,g=i=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),i=l(b,i,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(o,m),aa&&Zo(o,g),c;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(o,y.value,u))&&(i=l(y,i,g),null===d?c=y:d.sibling=y,d=y);return aa&&Zo(o,g),c}for(m=r(o,m);!y.done;g++,y=s.next())null!==(y=h(m,o,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),i=l(y,i,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(o,e)}),aa&&Zo(o,g),c}return function e(r,a,l,s){if("object"===typeof l&&null!==l&&l.type===w&&null===l.key&&(l=l.props.children),"object"===typeof l&&null!==l){switch(l.$$typeof){case k:e:{for(var u=l.key,c=a;null!==c;){if(c.key===u){if((u=l.type)===w){if(7===c.tag){n(r,c.sibling),(a=o(c,l.props.children)).return=r,r=a;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&ba(u)===c.type){n(r,c.sibling),(a=o(c,l.props)).ref=va(r,c,l),a.return=r,r=a;break e}n(r,c);break}t(r,c),c=c.sibling}l.type===w?((a=Ru(l.props.children,r.mode,s,l.key)).return=r,r=a):((s=zu(l.type,l.key,l.props,null,r.mode,s)).ref=va(r,a,l),s.return=r,r=s)}return i(r);case S:e:{for(c=l.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===l.containerInfo&&a.stateNode.implementation===l.implementation){n(r,a.sibling),(a=o(a,l.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Lu(l,r.mode,s)).return=r,r=a}return i(r);case N:return e(r,a,(c=l._init)(l._payload),s)}if(te(l))return m(r,a,l,s);if(R(l))return g(r,a,l,s);ya(r,l)}return"string"===typeof l&&""!==l||"number"===typeof l?(l=""+l,null!==a&&6===a.tag?(n(r,a.sibling),(a=o(a,l)).return=r,r=a):(n(r,a),(a=$u(l,r.mode,s)).return=r,r=a),i(r)):n(r,a)}}var ka=xa(!0),Sa=xa(!1),wa=Eo(null),Ca=null,Ea=null,ja=null;function _a(){ja=Ea=Ca=null}function Fa(e){var t=wa.current;jo(wa),e._currentValue=t}function Ta(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){Ca=e,ja=Ea=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bi=!0),e.firstContext=null)}function Da(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},null===Ea){if(null===Ca)throw Error(a(308));Ea=e,Ca.dependencies={lanes:0,firstContext:e}}else Ea=Ea.next=e;return t}var Na=null;function Oa(e){null===Na?Na=[e]:Na.push(e)}function za(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Oa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ra(e,r)}function Ra(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ia=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Aa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Fs)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ra(e,n)}return null===(o=r.interleaved)?(t.next=t,Oa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ra(e,n)}function Ma(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=l:a=a.next=l,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ba(e,t,n,r){var o=e.updateQueue;Ia=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,i=o.shared.pending;if(null!==i){o.shared.pending=null;var s=i,u=s.next;s.next=null,null===l?a=u:l.next=u,l=s;var c=e.alternate;null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==l&&(null===i?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(l=0,c=u=s=null,i=a;;){var f=i.lane,p=i.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var h=e,m=i;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=$({},d,f);break e;case 2:Ia=!0}}null!==i.callback&&0!==i.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[i]:f.push(i))}else p={eventTime:p,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,l|=f;if(null===(i=i.next)){if(null===(i=o.shared.pending))break;i=(f=i).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{l|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);Is|=l,e.lanes=l,e.memoizedState=d}}function Ha(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(a(191,o));o.call(r)}}}var Va={},Ka=Eo(Va),Qa=Eo(Va),Ya=Eo(Va);function Ja(e){if(e===Va)throw Error(a(174));return e}function qa(e,t){switch(_o(Ya,t),_o(Qa,e),_o(Ka,Va),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}jo(Ka),_o(Ka,t)}function Xa(){jo(Ka),jo(Qa),jo(Ya)}function Ga(e){Ja(Ya.current);var t=Ja(Ka.current),n=se(t,e.type);t!==n&&(_o(Qa,e),_o(Ka,n))}function Za(e){Qa.current===e&&(jo(Ka),jo(Qa))}var el=Eo(0);function tl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function rl(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var ol=x.ReactCurrentDispatcher,al=x.ReactCurrentBatchConfig,ll=0,il=null,sl=null,ul=null,cl=!1,dl=!1,fl=0,pl=0;function hl(){throw Error(a(321))}function ml(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ir(e[n],t[n]))return!1;return!0}function gl(e,t,n,r,o,l){if(ll=l,il=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ol.current=null===e||null===e.memoizedState?Zl:ei,e=n(r,o),dl){l=0;do{if(dl=!1,fl=0,25<=l)throw Error(a(301));l+=1,ul=sl=null,t.updateQueue=null,ol.current=ti,e=n(r,o)}while(dl)}if(ol.current=Gl,t=null!==sl&&null!==sl.next,ll=0,ul=sl=il=null,cl=!1,t)throw Error(a(300));return e}function vl(){var e=0!==fl;return fl=0,e}function yl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ul?il.memoizedState=ul=e:ul=ul.next=e,ul}function bl(){if(null===sl){var e=il.alternate;e=null!==e?e.memoizedState:null}else e=sl.next;var t=null===ul?il.memoizedState:ul.next;if(null!==t)ul=t,sl=e;else{if(null===e)throw Error(a(310));e={memoizedState:(sl=e).memoizedState,baseState:sl.baseState,baseQueue:sl.baseQueue,queue:sl.queue,next:null},null===ul?il.memoizedState=ul=e:ul=ul.next=e}return ul}function xl(e,t){return"function"===typeof t?t(e):t}function kl(e){var t=bl(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=sl,o=r.baseQueue,l=n.pending;if(null!==l){if(null!==o){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(null!==o){l=o.next,r=r.baseState;var s=i=null,u=null,c=l;do{var d=c.lane;if((ll&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,i=r):u=u.next=f,il.lanes|=d,Is|=d}c=c.next}while(null!==c&&c!==l);null===u?i=r:u.next=s,ir(r,t.memoizedState)||(bi=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{l=o.lane,il.lanes|=l,Is|=l,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=bl(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(null!==o){n.pending=null;var i=o=o.next;do{l=e(l,i.action),i=i.next}while(i!==o);ir(l,t.memoizedState)||(bi=!0),t.memoizedState=l,null===t.baseQueue&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function wl(){}function Cl(e,t){var n=il,r=bl(),o=t(),l=!ir(r.memoizedState,o);if(l&&(r.memoizedState=o,bi=!0),r=r.queue,Il(_l.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||null!==ul&&1&ul.memoizedState.tag){if(n.flags|=2048,Dl(9,jl.bind(null,n,r,o,t),void 0,null),null===Ts)throw Error(a(349));0!==(30&ll)||El(n,t,o)}return o}function El(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=il.updateQueue)?(t={lastEffect:null,stores:null},il.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function jl(e,t,n,r){t.value=n,t.getSnapshot=r,Fl(t)&&Tl(e)}function _l(e,t,n){return n(function(){Fl(t)&&Tl(e)})}function Fl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ir(e,n)}catch(r){return!0}}function Tl(e){var t=Ra(e,1);null!==t&&nu(t,e,1,-1)}function Pl(e){var t=yl();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:e},t.queue=e,e=e.dispatch=Yl.bind(null,il,e),[t.memoizedState,e]}function Dl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=il.updateQueue)?(t={lastEffect:null,stores:null},il.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Nl(){return bl().memoizedState}function Ol(e,t,n,r){var o=yl();il.flags|=e,o.memoizedState=Dl(1|t,n,void 0,void 0===r?null:r)}function zl(e,t,n,r){var o=bl();r=void 0===r?null:r;var a=void 0;if(null!==sl){var l=sl.memoizedState;if(a=l.destroy,null!==r&&ml(r,l.deps))return void(o.memoizedState=Dl(t,n,a,r))}il.flags|=e,o.memoizedState=Dl(1|t,n,a,r)}function Rl(e,t){return Ol(8390656,8,e,t)}function Il(e,t){return zl(2048,8,e,t)}function $l(e,t){return zl(4,2,e,t)}function Ll(e,t){return zl(4,4,e,t)}function Al(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ul(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zl(4,4,Al.bind(null,t,e),n)}function Ml(){}function Wl(e,t){var n=bl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bl(e,t){var n=bl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hl(e,t,n){return 0===(21&ll)?(e.baseState&&(e.baseState=!1,bi=!0),e.memoizedState=n):(ir(n,t)||(n=mt(),il.lanes|=n,Is|=n,e.baseState=!0),t)}function Vl(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{bt=n,al.transition=r}}function Kl(){return bl().memoizedState}function Ql(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jl(e))ql(t,n);else if(null!==(n=za(e,t,n,r))){nu(n,e,r,eu()),Xl(n,t,r)}}function Yl(e,t,n){var r=tu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jl(e))ql(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=a(l,n);if(o.hasEagerState=!0,o.eagerState=i,ir(i,l)){var s=t.interleaved;return null===s?(o.next=o,Oa(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(u){}null!==(n=za(e,t,o,r))&&(nu(n,e,r,o=eu()),Xl(n,t,r))}}function Jl(e){var t=e.alternate;return e===il||null!==t&&t===il}function ql(e,t){dl=cl=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xl(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Gl={readContext:Da,useCallback:hl,useContext:hl,useEffect:hl,useImperativeHandle:hl,useInsertionEffect:hl,useLayoutEffect:hl,useMemo:hl,useReducer:hl,useRef:hl,useState:hl,useDebugValue:hl,useDeferredValue:hl,useTransition:hl,useMutableSource:hl,useSyncExternalStore:hl,useId:hl,unstable_isNewReconciler:!1},Zl={readContext:Da,useCallback:function(e,t){return yl().memoizedState=[e,void 0===t?null:t],e},useContext:Da,useEffect:Rl,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ol(4194308,4,Al.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ol(4,2,e,t)},useMemo:function(e,t){var n=yl();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yl();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ql.bind(null,il,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yl().memoizedState=e},useState:Pl,useDebugValue:Ml,useDeferredValue:function(e){return yl().memoizedState=e},useTransition:function(){var e=Pl(!1),t=e[0];return e=Vl.bind(null,e[1]),yl().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=il,o=yl();if(aa){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Ts)throw Error(a(349));0!==(30&ll)||El(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Rl(_l.bind(null,r,l,e),[e]),r.flags|=2048,Dl(9,jl.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=yl(),t=Ts.identifierPrefix;if(aa){var n=Go;t=":"+t+"R"+(n=(Xo&~(1<<32-lt(Xo)-1)).toString(32)+n),0<(n=fl++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pl++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ei={readContext:Da,useCallback:Wl,useContext:Da,useEffect:Il,useImperativeHandle:Ul,useInsertionEffect:$l,useLayoutEffect:Ll,useMemo:Bl,useReducer:kl,useRef:Nl,useState:function(){return kl(xl)},useDebugValue:Ml,useDeferredValue:function(e){return Hl(bl(),sl.memoizedState,e)},useTransition:function(){return[kl(xl)[0],bl().memoizedState]},useMutableSource:wl,useSyncExternalStore:Cl,useId:Kl,unstable_isNewReconciler:!1},ti={readContext:Da,useCallback:Wl,useContext:Da,useEffect:Il,useImperativeHandle:Ul,useInsertionEffect:$l,useLayoutEffect:Ll,useMemo:Bl,useReducer:Sl,useRef:Nl,useState:function(){return Sl(xl)},useDebugValue:Ml,useDeferredValue:function(e){var t=bl();return null===sl?t.memoizedState=e:Hl(t,sl.memoizedState,e)},useTransition:function(){return[Sl(xl)[0],bl().memoizedState]},useMutableSource:wl,useSyncExternalStore:Cl,useId:Kl,unstable_isNewReconciler:!1};function ni(e,t){if(e&&e.defaultProps){for(var n in t=$({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function ri(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:$({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var oi={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),a=Aa(r,o);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ua(e,a,o))&&(nu(t,e,o,r),Ma(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),a=Aa(r,o);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ua(e,a,o))&&(nu(t,e,o,r),Ma(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),o=Aa(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Ua(e,o,r))&&(nu(t,e,r,n),Ma(t,e,r))}};function ai(e,t,n,r,o,a,l){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,l):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,a))}function li(e,t,n){var r=!1,o=Fo,a=t.contextType;return"object"===typeof a&&null!==a?a=Da(a):(o=Oo(t)?Do:To.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?No(e,o):Fo),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=oi,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ii(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oi.enqueueReplaceState(t,t.state,null)}function si(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},$a(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=Da(a):(a=Oo(t)?Do:To.current,o.context=No(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(ri(e,t,a,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&oi.enqueueReplaceState(o,o.state,null),Ba(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function ui(e,t){try{var n="",r=t;do{n+=M(r),r=r.return}while(r);var o=n}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function di(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fi="function"===typeof WeakMap?WeakMap:Map;function pi(e,t,n){(n=Aa(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),di(0,t)},n}function hi(e,t,n){(n=Aa(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){di(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){di(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function mi(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fi;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gi(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vi(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Aa(-1,1)).tag=2,Ua(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var yi=x.ReactCurrentOwner,bi=!1;function xi(e,t,n,r){t.child=null===e?Sa(t,null,n,r):ka(t,e.child,n,r)}function ki(e,t,n,r,o){n=n.render;var a=t.ref;return Pa(t,o),r=gl(e,t,n,r,a,o),n=vl(),null===e||bi?(aa&&n&&ta(t),t.flags|=1,xi(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hi(e,t,o))}function Si(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||Nu(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zu(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,wi(e,t,a,r,o))}if(a=e.child,0===(e.lanes&o)){var l=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(l,r)&&e.ref===t.ref)return Hi(e,t,o)}return t.flags|=1,(e=Ou(a,r)).ref=t.ref,e.return=t,t.child=e}function wi(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(bi=!1,t.pendingProps=r=a,0===(e.lanes&o))return t.lanes=e.lanes,Hi(e,t,o);0!==(131072&e.flags)&&(bi=!0)}}return ji(e,t,n,r,o)}function Ci(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_o(Os,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_o(Os,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,_o(Os,Ns),Ns|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,_o(Os,Ns),Ns|=r;return xi(e,t,o,n),t.child}function Ei(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ji(e,t,n,r,o){var a=Oo(n)?Do:To.current;return a=No(t,a),Pa(t,o),n=gl(e,t,n,r,a,o),r=vl(),null===e||bi?(aa&&r&&ta(t),t.flags|=1,xi(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hi(e,t,o))}function _i(e,t,n,r,o){if(Oo(n)){var a=!0;$o(t)}else a=!1;if(Pa(t,o),null===t.stateNode)Bi(e,t),li(t,n,r),si(t,n,r,o),r=!0;else if(null===e){var l=t.stateNode,i=t.memoizedProps;l.props=i;var s=l.context,u=n.contextType;"object"===typeof u&&null!==u?u=Da(u):u=No(t,u=Oo(n)?Do:To.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof l.getSnapshotBeforeUpdate;d||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||(i!==r||s!==u)&&ii(t,l,r,u),Ia=!1;var f=t.memoizedState;l.state=f,Ba(t,r,l,o),s=t.memoizedState,i!==r||f!==s||Po.current||Ia?("function"===typeof c&&(ri(t,n,c,r),s=t.memoizedState),(i=Ia||ai(t,n,i,r,f,s,u))?(d||"function"!==typeof l.UNSAFE_componentWillMount&&"function"!==typeof l.componentWillMount||("function"===typeof l.componentWillMount&&l.componentWillMount(),"function"===typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"===typeof l.componentDidMount&&(t.flags|=4194308)):("function"===typeof l.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=i):("function"===typeof l.componentDidMount&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,La(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:ni(t.type,i),l.props=u,d=t.pendingProps,f=l.context,"object"===typeof(s=n.contextType)&&null!==s?s=Da(s):s=No(t,s=Oo(n)?Do:To.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof l.getSnapshotBeforeUpdate)||"function"!==typeof l.UNSAFE_componentWillReceiveProps&&"function"!==typeof l.componentWillReceiveProps||(i!==d||f!==s)&&ii(t,l,r,s),Ia=!1,f=t.memoizedState,l.state=f,Ba(t,r,l,o);var h=t.memoizedState;i!==d||f!==h||Po.current||Ia?("function"===typeof p&&(ri(t,n,p,r),h=t.memoizedState),(u=Ia||ai(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof l.UNSAFE_componentWillUpdate&&"function"!==typeof l.componentWillUpdate||("function"===typeof l.componentWillUpdate&&l.componentWillUpdate(r,h,s),"function"===typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof l.componentDidUpdate&&(t.flags|=4),"function"===typeof l.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof l.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),l.props=r,l.state=h,l.context=s,r=u):("function"!==typeof l.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Fi(e,t,n,r,a,o)}function Fi(e,t,n,r,o,a){Ei(e,t);var l=0!==(128&t.flags);if(!r&&!l)return o&&Lo(t,n,!1),Hi(e,t,a);r=t.stateNode,yi.current=t;var i=l&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&l?(t.child=ka(t,e.child,null,a),t.child=ka(t,null,i,a)):xi(e,t,i,a),t.memoizedState=r.state,o&&Lo(t,n,!0),t.child}function Ti(e){var t=e.stateNode;t.pendingContext?Ro(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ro(0,t.context,!1),qa(e,t.containerInfo)}function Pi(e,t,n,r,o){return ha(),ma(o),t.flags|=256,xi(e,t,n,r),t.child}var Di,Ni,Oi,zi,Ri={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function $i(e,t,n){var r,o=t.pendingProps,l=el.current,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&l)),r?(i=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(l|=1),_o(el,1&l),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,i?(o=t.mode,i=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==i?(i.childLanes=0,i.pendingProps=s):i=Iu(s,o,0,null),e=Ru(e,o,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ii(n),t.memoizedState=Ri,e):Li(t,s));if(null!==(l=e.memoizedState)&&null!==(r=l.dehydrated))return function(e,t,n,r,o,l,i){if(n)return 256&t.flags?(t.flags&=-257,Ai(e,t,i,r=ci(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Iu({mode:"visible",children:r.children},o,0,null),(l=Ru(l,o,i,null)).flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,0!==(1&t.mode)&&ka(t,e.child,null,i),t.child.memoizedState=Ii(i),t.memoizedState=Ri,l);if(0===(1&t.mode))return Ai(e,t,i,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Ai(e,t,i,r=ci(l=Error(a(419)),r,void 0))}if(s=0!==(i&e.childLanes),bi||s){if(null!==(r=Ts)){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|i))?0:o)&&o!==l.retryLane&&(l.retryLane=o,Ra(e,o),nu(r,e,o,-1))}return mu(),Ai(e,t,i,r=ci(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,oa=uo(o.nextSibling),ra=t,aa=!0,la=null,null!==e&&(Yo[Jo++]=Xo,Yo[Jo++]=Go,Yo[Jo++]=qo,Xo=e.id,Go=e.overflow,qo=t),t=Li(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,l,n);if(i){i=o.fallback,s=t.mode,r=(l=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==l?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=Ou(l,u)).subtreeFlags=14680064&l.subtreeFlags,null!==r?i=Ou(r,i):(i=Ru(i,s,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,s=null===(s=e.child.memoizedState)?Ii(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ri,o}return e=(i=e.child).sibling,o=Ou(i,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Li(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ai(e,t,n,r){return null!==r&&ma(r),ka(t,e.child,null,n),(e=Li(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ui(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ta(e.return,t,n)}function Mi(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Wi(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(xi(e,t,r.children,n),0!==(2&(r=el.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ui(e,n,t);else if(19===e.tag)Ui(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_o(el,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===tl(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Mi(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===tl(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Mi(t,!0,n,null,a);break;case"together":Mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hi(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ou(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ou(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vi(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ki(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qi(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ki(t),null;case 1:case 17:return Oo(t.type)&&zo(),Ki(t),null;case 3:return r=t.stateNode,Xa(),jo(Po),jo(To),rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==la&&(lu(la),la=null))),Ni(e,t),Ki(t),null;case 5:Za(t);var o=Ja(Ya.current);if(n=t.type,null!==e&&null!=t.stateNode)Oi(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Ki(t),null}if(e=Ja(Ka.current),fa(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[po]=t,r[ho]=l,e=0!==(1&t.mode),n){case"dialog":Ar("cancel",r),Ar("close",r);break;case"iframe":case"object":case"embed":Ar("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)Ar(Rr[o],r);break;case"source":Ar("error",r);break;case"img":case"image":case"link":Ar("error",r),Ar("load",r);break;case"details":Ar("toggle",r);break;case"input":q(r,l),Ar("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Ar("invalid",r);break;case"textarea":oe(r,l),Ar("invalid",r)}for(var s in ye(n,l),o=null,l)if(l.hasOwnProperty(s)){var u=l[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==l.suppressHydrationWarning&&Gr(r.textContent,u,e),o=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==l.suppressHydrationWarning&&Gr(r.textContent,u,e),o=["children",""+u]):i.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ar("scroll",r)}switch(n){case"input":K(r),Z(r,l,!0);break;case"textarea":K(r),le(r);break;case"select":case"option":break;default:"function"===typeof l.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ie(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Di(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Ar("cancel",e),Ar("close",e),o=r;break;case"iframe":case"object":case"embed":Ar("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)Ar(Rr[o],e);o=r;break;case"source":Ar("error",e),o=r;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),o=r;break;case"details":Ar("toggle",e),o=r;break;case"input":q(e,r),o=J(e,r),Ar("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=$({},r,{value:void 0}),Ar("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Ar("invalid",e)}for(l in ye(n,o),u=o)if(u.hasOwnProperty(l)){var c=u[l];"style"===l?ge(e,c):"dangerouslySetInnerHTML"===l?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===l?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(i.hasOwnProperty(l)?null!=c&&"onScroll"===l&&Ar("scroll",e):null!=c&&b(e,l,c,s))}switch(n){case"input":K(e),Z(e,r,!1);break;case"textarea":K(e),le(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(l=r.value)?ne(e,!!r.multiple,l,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ki(t),null;case 6:if(e&&null!=t.stateNode)zi(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Ja(Ya.current),Ja(Ka.current),fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(l=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Gr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Gr(r.nodeValue,n,0!==(1&e.mode))}l&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Ki(t),null;case 13:if(jo(el),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))pa(),ha(),t.flags|=98560,l=!1;else if(l=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!l)throw Error(a(318));if(!(l=null!==(l=t.memoizedState)?l.dehydrated:null))throw Error(a(317));l[po]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ki(t),l=!1}else null!==la&&(lu(la),la=null),l=!0;if(!l)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&el.current)?0===zs&&(zs=3):mu())),null!==t.updateQueue&&(t.flags|=4),Ki(t),null);case 4:return Xa(),Ni(e,t),null===e&&Wr(t.stateNode.containerInfo),Ki(t),null;case 10:return Fa(t.type._context),Ki(t),null;case 19:if(jo(el),null===(l=t.memoizedState))return Ki(t),null;if(r=0!==(128&t.flags),null===(s=l.rendering))if(r)Vi(l,!1);else{if(0!==zs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=tl(e))){for(t.flags|=128,Vi(l,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(l=n).flags&=14680066,null===(s=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _o(el,1&el.current|2),t.child}e=e.sibling}null!==l.tail&&Xe()>Ws&&(t.flags|=128,r=!0,Vi(l,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=tl(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vi(l,!0),null===l.tail&&"hidden"===l.tailMode&&!s.alternate&&!aa)return Ki(t),null}else 2*Xe()-l.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,r=!0,Vi(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=l.last)?n.sibling=s:t.child=s,l.last=s)}return null!==l.tail?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Xe(),t.sibling=null,n=el.current,_o(el,r?1&n|2:1&n),t):(Ki(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(Ki(t),6&t.subtreeFlags&&(t.flags|=8192)):Ki(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Yi(e,t){switch(na(t),t.tag){case 1:return Oo(t.type)&&zo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),jo(Po),jo(To),rl(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(jo(el),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return jo(el),null;case 4:return Xa(),null;case 10:return Fa(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Di=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ni=function(){},Oi=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ja(Ka.current);var a,l=null;switch(n){case"input":o=J(e,o),r=J(e,r),l=[];break;case"select":o=$({},o,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":o=re(e,o),r=re(e,r),l=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(i.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(l=l||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(l=l||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(i.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ar("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}},zi=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ji=!1,qi=!1,Xi="function"===typeof WeakSet?WeakSet:Set,Gi=null;function Zi(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Cu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,n,a)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ls(e){return 5===e.tag||3===e.tag||4===e.tag}function is(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ls(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,n)}catch(i){}switch(n.tag){case 5:qi||Zi(n,t);case 6:var r=cs,o=ds;cs=null,fs(e,t,n),ds=o,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Wt(e)):so(cs,n.stateNode));break;case 4:r=cs,o=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=o;break;case 0:case 11:case 14:case 15:if(!qi&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var a=o,l=a.destroy;a=a.tag,void 0!==l&&(0!==(2&a)||0!==(4&a))&&es(n,t,l),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!qi&&(Zi(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Cu(n,t,i)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(qi=(r=qi)||null!==n.memoizedState,fs(e,t,n),qi=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xi),t.forEach(function(t){var r=Fu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(a(160));ps(l,i,o),cs=null,ds=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){Cu(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Cu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Cu(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Zi(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Zi(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){Cu(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var l=e.memoizedProps,i=null!==n?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===l.type&&null!=l.name&&X(o,l),be(s,i);var c=be(s,l);for(i=0;i<u.length;i+=2){var d=u[i],f=u[i+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):b(o,d,f,c)}switch(s){case"input":G(o,l);break;case"textarea":ae(o,l);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var h=l.value;null!=h?ne(o,!!l.multiple,h,!1):p!==!!l.multiple&&(null!=l.defaultValue?ne(o,!!l.multiple,l.defaultValue,!0):ne(o,!!l.multiple,l.multiple?[]:"",!1))}o[ho]=l}catch(g){Cu(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(g){Cu(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){Cu(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(o=e.child).flags&&(l=null!==o.memoizedState,o.stateNode.isHidden=l,!l||null!==o.alternate&&null!==o.alternate.memoizedState||(Ms=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(qi=(c=qi)||d,ms(t,e),qi=c):ms(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Gi=e,d=e.child;null!==d;){for(f=Gi=d;null!==Gi;){switch(h=(p=Gi).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zi(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Cu(r,n,g)}}break;case 5:Zi(p,p.return);break;case 22:if(null!==p.memoizedState){ks(f);continue}}null!==h?(h.return=p,Gi=h):ks(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,c?"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none":(s=f.stateNode,i=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",i))}catch(g){Cu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Cu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ls(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),us(e,is(e),o);break;case 3:case 4:var l=r.stateNode.containerInfo;ss(e,is(e),l);break;default:throw Error(a(161))}}catch(i){Cu(e,e.return,i)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Gi=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Gi;){var o=Gi,a=o.child;if(22===o.tag&&r){var l=null!==o.memoizedState||Ji;if(!l){var i=o.alternate,s=null!==i&&null!==i.memoizedState||qi;i=Ji;var u=qi;if(Ji=l,(qi=s)&&!u)for(Gi=o;null!==Gi;)s=(l=Gi).child,22===l.tag&&null!==l.memoizedState?Ss(o):null!==s?(s.return=l,Gi=s):Ss(o);for(;null!==a;)Gi=a,bs(a,t,n),a=a.sibling;Gi=o,Ji=i,qi=u}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Gi=a):xs(e)}}function xs(e){for(;null!==Gi;){var t=Gi;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:qi||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!qi)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ni(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;null!==l&&Ha(t,l,r);break;case 3:var i=t.updateQueue;if(null!==i){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ha(t,i,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Wt(f)}}}break;default:throw Error(a(163))}qi||512&t.flags&&os(t)}catch(p){Cu(t,t.return,p)}}if(t===e){Gi=null;break}if(null!==(n=t.sibling)){n.return=t.return,Gi=n;break}Gi=t.return}}function ks(e){for(;null!==Gi;){var t=Gi;if(t===e){Gi=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Gi=n;break}Gi=t.return}}function Ss(e){for(;null!==Gi;){var t=Gi;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Cu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){Cu(t,o,s)}}var a=t.return;try{os(t)}catch(s){Cu(t,a,s)}break;case 5:var l=t.return;try{os(t)}catch(s){Cu(t,l,s)}}}catch(s){Cu(t,t.return,s)}if(t===e){Gi=null;break}var i=t.sibling;if(null!==i){i.return=t.return,Gi=i;break}Gi=t.return}}var ws,Cs=Math.ceil,Es=x.ReactCurrentDispatcher,js=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,Fs=0,Ts=null,Ps=null,Ds=0,Ns=0,Os=Eo(0),zs=0,Rs=null,Is=0,$s=0,Ls=0,As=null,Us=null,Ms=0,Ws=1/0,Bs=null,Hs=!1,Vs=null,Ks=null,Qs=!1,Ys=null,Js=0,qs=0,Xs=null,Gs=-1,Zs=0;function eu(){return 0!==(6&Fs)?Xe():-1!==Gs?Gs:Gs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Fs)&&0!==Ds?Ds&-Ds:null!==ga.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nu(e,t,n,r){if(50<qs)throw qs=0,Xs=null,Error(a(185));vt(e,n,r),0!==(2&Fs)&&e===Ts||(e===Ts&&(0===(2&Fs)&&($s|=n),4===zs&&iu(e,Ds)),ru(e,r),1===n&&0===Fs&&0===(1&t.mode)&&(Ws=Xe()+500,Uo&&Bo()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-lt(a),i=1<<l,s=o[l];-1===s?0!==(i&n)&&0===(i&r)||(o[l]=pt(i,t)):s<=t&&(e.expiredLanes|=i),a&=~i}}(e,t);var r=ft(e,e===Ts?Ds:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Uo=!0,Wo(e)}(su.bind(null,e)):Wo(su.bind(null,e)),lo(function(){0===(6&Fs)&&Bo()}),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Tu(n,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ou(e,t){if(Gs=-1,Zs=0,0!==(6&Fs))throw Error(a(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ts?Ds:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var o=Fs;Fs|=2;var l=hu();for(Ts===e&&Ds===t||(Bs=null,Ws=Xe()+500,fu(e,t));;)try{yu();break}catch(s){pu(e,s)}_a(),Es.current=l,Fs=o,null!==Ps?t=0:(Ts=null,Ds=0,t=zs)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=au(e,o))),1===t)throw n=Rs,fu(e,0),iu(e,r),ru(e,Xe()),n;if(6===t)iu(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!ir(a(),o))return!1}catch(i){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gu(e,r))&&(0!==(l=ht(e))&&(r=l,t=au(e,l))),1===t))throw n=Rs,fu(e,0),iu(e,r),ru(e,Xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:ku(e,Us,Bs);break;case 3:if(iu(e,r),(130023424&r)===r&&10<(t=Ms+500-Xe())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(ku.bind(null,e,Us,Bs),t);break}ku(e,Us,Bs);break;case 4:if(iu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-lt(r);l=1<<i,(i=t[i])>o&&(o=i),r&=~l}if(r=o,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ro(ku.bind(null,e,Us,Bs),r);break}ku(e,Us,Bs);break;default:throw Error(a(329))}}}return ru(e,Xe()),e.callbackNode===n?ou.bind(null,e):null}function au(e,t){var n=As;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Us,Us=n,null!==t&&lu(t)),e}function lu(e){null===Us?Us=e:Us.push.apply(Us,e)}function iu(e,t){for(t&=~Ls,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Fs))throw Error(a(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=au(e,r))}if(1===n)throw n=Rs,fu(e,0),iu(e,t),ru(e,Xe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,Us,Bs),ru(e,Xe()),null}function uu(e,t){var n=Fs;Fs|=1;try{return e(t)}finally{0===(Fs=n)&&(Ws=Xe()+500,Uo&&Bo())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&Fs)&&Su();var t=Fs;Fs|=1;var n=_s.transition,r=bt;try{if(_s.transition=null,bt=1,e)return e()}finally{bt=r,_s.transition=n,0===(6&(Fs=t))&&Bo()}}function du(){Ns=Os.current,jo(Os)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Ps)for(n=Ps.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zo();break;case 3:Xa(),jo(Po),jo(To),rl();break;case 5:Za(r);break;case 4:Xa();break;case 13:case 19:jo(el);break;case 10:Fa(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ts=e,Ps=e=Ou(e.current,null),Ds=Ns=t,zs=0,Rs=null,Ls=$s=Is=0,Us=As=null,null!==Na){for(t=0;t<Na.length;t++)if(null!==(r=(n=Na[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var l=a.next;a.next=o,r.next=l}n.pending=r}Na=null}return e}function pu(e,t){for(;;){var n=Ps;try{if(_a(),ol.current=Gl,cl){for(var r=il.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}cl=!1}if(ll=0,ul=sl=il=null,dl=!1,fl=0,js.current=null,null===n||null===n.return){zs=1,Rs=t,Ps=null;break}e:{var l=e,i=n.return,s=n,u=t;if(t=Ds,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gi(i);if(null!==h){h.flags&=-257,vi(h,i,s,0,t),1&h.mode&&mi(l,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){mi(l,c,t),mu();break e}u=Error(a(426))}else if(aa&&1&s.mode){var v=gi(i);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vi(v,i,s,0,t),ma(ui(u,s));break e}}l=u=ui(u,s),4!==zs&&(zs=2),null===As?As=[l]:As.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t,Wa(l,pi(0,u,t));break e;case 1:s=u;var y=l.type,b=l.stateNode;if(0===(128&l.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Ks||!Ks.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t,Wa(l,hi(l,s,t));break e}}l=l.return}while(null!==l)}xu(n)}catch(x){t=x,Ps===n&&null!==n&&(Ps=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Gl,null===e?Gl:e}function mu(){0!==zs&&3!==zs&&2!==zs||(zs=4),null===Ts||0===(268435455&Is)&&0===(268435455&$s)||iu(Ts,Ds)}function gu(e,t){var n=Fs;Fs|=2;var r=hu();for(Ts===e&&Ds===t||(Bs=null,fu(e,t));;)try{vu();break}catch(o){pu(e,o)}if(_a(),Fs=n,Es.current=r,null!==Ps)throw Error(a(261));return Ts=null,Ds=0,zs}function vu(){for(;null!==Ps;)bu(Ps)}function yu(){for(;null!==Ps&&!Je();)bu(Ps)}function bu(e){var t=ws(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?xu(e):Ps=t,js.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Qi(n,t,Ns)))return void(Ps=n)}else{if(null!==(n=Yi(n,t)))return n.flags&=32767,void(Ps=n);if(null===e)return zs=6,void(Ps=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ps=t);Ps=t=e}while(null!==t);0===zs&&(zs=5)}function ku(e,t,n){var r=bt,o=_s.transition;try{_s.transition=null,bt=1,function(e,t,n,r){do{Su()}while(null!==Ys);if(0!==(6&Fs))throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-lt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,l),e===Ts&&(Ps=Ts=null,Ds=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,Tu(tt,function(){return Su(),null})),l=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||l){l=_s.transition,_s.transition=null;var i=bt;bt=1;var s=Fs;Fs|=4,js.current=null,function(e,t){if(eo=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch(k){n=null;break e}var i=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=i+o),f!==l||0!==r&&3!==f.nodeType||(u=i+r),3===f.nodeType&&(i+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===o&&(s=i),p===l&&++d===r&&(u=i),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Ht=!1,Gi=t;null!==Gi;)if(e=(t=Gi).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Gi=e;else for(;null!==Gi;){t=Gi;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ni(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(k){Cu(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,Gi=e;break}Gi=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),Ht=!!eo,to=eo=null,e.current=n,ys(n,e,o),qe(),Fs=s,bt=i,_s.transition=l}else e.current=n;if(Qs&&(Qs=!1,Ys=e,Js=o),l=e.pendingLanes,0===l&&(Ks=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Js)&&0!==e.tag&&Su(),l=e.pendingLanes,0!==(1&l)?e===Xs?qs++:(qs=0,Xs=e):qs=0,Bo()}(e,t,n,r)}finally{_s.transition=o,bt=r}return null}function Su(){if(null!==Ys){var e=xt(Js),t=_s.transition,n=bt;try{if(_s.transition=null,bt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Js=0,0!==(6&Fs))throw Error(a(331));var o=Fs;for(Fs|=4,Gi=e.current;null!==Gi;){var l=Gi,i=l.child;if(0!==(16&Gi.flags)){var s=l.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Gi=c;null!==Gi;){var d=Gi;switch(d.tag){case 0:case 11:case 15:ns(8,d,l)}var f=d.child;if(null!==f)f.return=d,Gi=f;else for(;null!==Gi;){var p=(d=Gi).sibling,h=d.return;if(as(d),d===c){Gi=null;break}if(null!==p){p.return=h,Gi=p;break}Gi=h}}}var m=l.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Gi=l}}if(0!==(2064&l.subtreeFlags)&&null!==i)i.return=l,Gi=i;else e:for(;null!==Gi;){if(0!==(2048&(l=Gi).flags))switch(l.tag){case 0:case 11:case 15:ns(9,l,l.return)}var y=l.sibling;if(null!==y){y.return=l.return,Gi=y;break e}Gi=l.return}}var b=e.current;for(Gi=b;null!==Gi;){var x=(i=Gi).child;if(0!==(2064&i.subtreeFlags)&&null!==x)x.return=i,Gi=x;else e:for(i=b;null!==Gi;){if(0!==(2048&(s=Gi).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Cu(s,s.return,S)}if(s===i){Gi=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,Gi=k;break e}Gi=s.return}}if(Fs=o,Bo(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(S){}r=!0}return r}finally{bt=n,_s.transition=t}}return!1}function wu(e,t,n){e=Ua(e,t=pi(0,t=ui(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Cu(e,t,n){if(3===e.tag)wu(e,e,n);else for(;null!==t;){if(3===t.tag){wu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Ua(t,e=hi(t,e=ui(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ts===e&&(Ds&n)===n&&(4===zs||3===zs&&(130023424&Ds)===Ds&&500>Xe()-Ms?fu(e,0):Ls|=n),ru(e,t)}function ju(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Ra(e,t))&&(vt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),ju(e,n)}function Fu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),ju(e,n)}function Tu(e,t){return Qe(e,t)}function Pu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Du(e,t,n,r){return new Pu(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ou(e,t){var n=e.alternate;return null===n?((n=Du(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zu(e,t,n,r,o,l){var i=2;if(r=e,"function"===typeof e)Nu(e)&&(i=1);else if("string"===typeof e)i=5;else e:switch(e){case w:return Ru(n.children,o,l,t);case C:i=8,o|=8;break;case E:return(e=Du(12,n,t,2|o)).elementType=E,e.lanes=l,e;case T:return(e=Du(13,n,t,o)).elementType=T,e.lanes=l,e;case P:return(e=Du(19,n,t,o)).elementType=P,e.lanes=l,e;case O:return Iu(n,o,l,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:i=10;break e;case _:i=9;break e;case F:i=11;break e;case D:i=14;break e;case N:i=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Du(i,n,t,o)).elementType=e,t.type=r,t.lanes=l,t}function Ru(e,t,n,r){return(e=Du(7,e,r,t)).lanes=n,e}function Iu(e,t,n,r){return(e=Du(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function $u(e,t,n){return(e=Du(6,e,null,t)).lanes=n,e}function Lu(e,t,n){return(t=Du(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Au(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Uu(e,t,n,r,o,a,l,i,s){return e=new Au(e,t,n,i,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Du(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(a),e}function Mu(e){if(!e)return Fo;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Oo(n))return Io(e,n,t)}return t}function Wu(e,t,n,r,o,a,l,i,s){return(e=Uu(n,r,!0,e,0,a,0,i,s)).context=Mu(null),n=e.current,(a=Aa(r=eu(),o=tu(n))).callback=void 0!==t&&null!==t?t:null,Ua(n,a,o),e.current.lanes=o,vt(e,o,r),ru(e,r),e}function Bu(e,t,n,r){var o=t.current,a=eu(),l=tu(o);return n=Mu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Aa(a,l)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ua(o,t,l))&&(nu(e,o,l,a),Ma(e,o,l)),l}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ws=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Po.current)bi=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bi=!1,function(e,t,n){switch(t.tag){case 3:Ti(t),ha();break;case 5:Ga(t);break;case 1:Oo(t.type)&&$o(t);break;case 4:qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;_o(wa,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_o(el,1&el.current),t.flags|=128,null):0!==(n&t.child.childLanes)?$i(e,t,n):(_o(el,1&el.current),null!==(e=Hi(e,t,n))?e.sibling:null);_o(el,1&el.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Wi(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),_o(el,el.current),r)break;return null;case 22:case 23:return t.lanes=0,Ci(e,t,n)}return Hi(e,t,n)}(e,t,n);bi=0!==(131072&e.flags)}else bi=!1,aa&&0!==(1048576&t.flags)&&ea(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var o=No(t,To.current);Pa(t,n),o=gl(null,t,r,e,o,n);var l=vl();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oo(r)?(l=!0,$o(t)):l=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,$a(t),o.updater=oi,t.stateNode=o,o._reactInternals=t,si(t,r,e,n),t=Fi(null,t,r,!0,l,n)):(t.tag=0,aa&&l&&ta(t),xi(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===F)return 11;if(e===D)return 14}return 2}(r),e=ni(r,e),o){case 0:t=ji(null,t,r,e,n);break e;case 1:t=_i(null,t,r,e,n);break e;case 11:t=ki(null,t,r,e,n);break e;case 14:t=Si(null,t,r,ni(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,ji(e,t,r,o=t.elementType===r?o:ni(r,o),n);case 1:return r=t.type,o=t.pendingProps,_i(e,t,r,o=t.elementType===r?o:ni(r,o),n);case 3:e:{if(Ti(t),null===e)throw Error(a(387));r=t.pendingProps,o=(l=t.memoizedState).element,La(e,t),Ba(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated){if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,256&t.flags){t=Pi(e,t,r,n,o=ui(Error(a(423)),t));break e}if(r!==o){t=Pi(e,t,r,n,o=ui(Error(a(424)),t));break e}for(oa=uo(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,la=null,n=Sa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===o){t=Hi(e,t,n);break e}xi(e,t,r,n)}t=t.child}return t;case 5:return Ga(t),null===e&&ca(t),r=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,i=o.children,no(r,o)?i=null:null!==l&&no(r,l)&&(t.flags|=32),Ei(e,t),xi(e,t,i,n),t.child;case 6:return null===e&&ca(t),null;case 13:return $i(e,t,n);case 4:return qa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ka(t,null,r,n):xi(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,ki(e,t,r,o=t.elementType===r?o:ni(r,o),n);case 7:return xi(e,t,t.pendingProps,n),t.child;case 8:case 12:return xi(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,_o(wa,r._currentValue),r._currentValue=i,null!==l)if(ir(l.value,i)){if(l.children===o.children&&!Po.current){t=Hi(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var s=l.dependencies;if(null!==s){i=l.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===l.tag){(u=Aa(-1,n&-n)).tag=2;var c=l.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}l.lanes|=n,null!==(u=l.alternate)&&(u.lanes|=n),Ta(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===l.tag)i=l.type===t.type?null:l.child;else if(18===l.tag){if(null===(i=l.return))throw Error(a(341));i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),Ta(i,n,t),i=l.sibling}else i=l.child;if(null!==i)i.return=l;else for(i=l;null!==i;){if(i===t){i=null;break}if(null!==(l=i.sibling)){l.return=i.return,i=l;break}i=i.return}l=i}xi(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pa(t,n),r=r(o=Da(o)),t.flags|=1,xi(e,t,r,n),t.child;case 14:return o=ni(r=t.type,t.pendingProps),Si(e,t,r,o=ni(r.type,o),n);case 15:return wi(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ni(r,o),Bi(e,t),t.tag=1,Oo(r)?(e=!0,$o(t)):e=!1,Pa(t,n),li(t,r,o),si(t,r,o,n),Fi(null,t,r,!0,e,n);case 19:return Wi(e,t,n);case 22:return Ci(e,t,n)}throw Error(a(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function Ju(e){this._internalRoot=e}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Gu(){}function Zu(e,t,n,r,o){var a=n._reactRootContainer;if(a){var l=a;if("function"===typeof o){var i=o;o=function(){var e=Hu(l);i.call(e)}}Bu(t,l,e,o)}else l=function(e,t,n,r,o){if(o){if("function"===typeof r){var a=r;r=function(){var e=Hu(l);a.call(e)}}var l=Wu(t,r,e,0,null,!1,0,"",Gu);return e._reactRootContainer=l,e[mo]=l.current,Wr(8===e.nodeType?e.parentNode:e),cu(),l}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var i=r;r=function(){var e=Hu(s);i.call(e)}}var s=Uu(e,0,!1,null,0,!1,0,"",Gu);return e._reactRootContainer=s,e[mo]=s.current,Wr(8===e.nodeType?e.parentNode:e),cu(function(){Bu(t,s,n,r)}),s}(n,t,e,o,r);return Hu(l)}Ju.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Bu(e,t,null,null)},Ju.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu(function(){Bu(null,e,null,null)}),t[mo]=null}},Ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&$t(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Xe()),0===(6&Fs)&&(Ws=Xe()+500,Bo()))}break;case 13:cu(function(){var t=Ra(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}}),Ku(e,1)}},St=function(e){if(13===e.tag){var t=Ra(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},wt=function(e){if(13===e.tag){var t=tu(e),n=Ra(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},Ct=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(G(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(a(90));Q(r),G(r,o)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Fe=uu,Te=cu;var ec={usingClientEntryPoint:!1,Events:[xo,ko,So,je,_e,uu]},tc={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ot=rc.inject(nc),at=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qu(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qu(e))throw Error(a(299));var n=!1,r="",o=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Uu(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(a(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,o=!1,l="",i=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(l=n.identifierPrefix),void 0!==n.onRecoverableError&&(i=n.onRecoverableError)),t=Wu(t,null,e,1,null!=n?n:null,o,0,l,i),e[mo]=t.current,Wr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ju(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(a(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(a(40));return!!e._reactRootContainer&&(cu(function(){Zu(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.create;function o(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(324),l=n.n(a),i="-ms-",s="-moz-",u="-webkit-",c="comm",d="rule",f="decl",p="@keyframes",h=Math.abs,m=String.fromCharCode,g=Object.assign;function v(e){return e.trim()}function y(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function x(e,t,n){return e.indexOf(t,n)}function k(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function w(e){return e.length}function C(e){return e.length}function E(e,t){return t.push(e),e}function j(e,t){return e.filter(function(e){return!y(e,t)})}var _=1,F=1,T=0,P=0,D=0,N="";function O(e,t,n,r,o,a,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:_,column:F,length:l,return:"",siblings:i}}function z(e,t){return g(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=z(e.root,{children:[e]});E(e,e.siblings)}function I(){return D=P>0?k(N,--P):0,F--,10===D&&(F=1,_--),D}function $(){return D=P<T?k(N,P++):0,F++,10===D&&(F=1,_++),D}function L(){return k(N,P)}function A(){return P}function U(e,t){return S(N,e,t)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(e){return _=F=1,T=w(N=e),P=0,[]}function B(e){return N="",e}function H(e){return v(U(P-1,Q(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(D=L())&&D<33;)$();return M(e)>2||M(D)>3?"":" "}function K(e,t){for(;--t&&$()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return U(e,A()+(t<6&&32==L()&&32==$()))}function Q(e){for(;$();)switch(D){case e:return P;case 34:case 39:34!==e&&39!==e&&Q(D);break;case 40:41===e&&Q(e);break;case 92:$()}return P}function Y(e,t){for(;$()&&e+D!==57&&(e+D!==84||47!==L()););return"/*"+U(t,P-1)+"*"+m(47===e?e:$())}function J(e){for(;!M(L());)$();return U(e,P)}function q(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case c:return"";case p:return e.return=e.value+"{"+q(e.children,r)+"}";case d:if(!w(e.value=e.props.join(",")))return""}return w(n=q(e.children,r))?e.return=e.value+"{"+n+"}":""}function G(e,t,n){switch(function(e,t){return 45^k(e,0)?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+s+e+i+e+e;case 5936:switch(k(e,t+11)){case 114:return u+e+i+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+i+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+i+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+i+e+e;case 6165:return u+e+i+"flex-"+e+e;case 5187:return u+e+b(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+i+"flex-$1$2")+e;case 5443:return u+e+i+"flex-item-"+b(e,/flex-|-self/g,"")+(y(e,/flex-|baseline/)?"":i+"grid-row-"+b(e,/flex-|-self/g,""))+e;case 4675:return u+e+i+"flex-line-pack"+b(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+i+b(e,"shrink","negative")+e;case 5292:return u+e+i+b(e,"basis","preferred-size")+e;case 6060:return u+"box-"+b(e,"-grow","")+u+e+i+b(e,"grow","positive")+e;case 4554:return u+b(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+i+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!y(e,/flex-|baseline/))return i+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return i+b(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,y(e.props,/grid-\w+-end/)})?~x(e+(n=n[t].value),"span",0)?e:i+b(e,"-start","")+e+i+"grid-row-span:"+(~x(n,"span",0)?y(n,/\d+/):+y(n,/\d+/)-+y(e,/\d+/))+";":i+b(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return y(e.props,/grid-\w+-start/)})?e:i+b(b(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(e)-1-t>6)switch(k(e,t+1)){case 109:if(45!==k(e,t+4))break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+s+(108==k(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch",0)?G(b(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return b(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,a,l,s){return i+n+":"+r+s+(o?i+n+"-span:"+(a?l:+l-+r)+s:"")+e});case 4949:if(121===k(e,t+6))return b(e,":",":"+u)+e;break;case 6444:switch(k(e,45===k(e,14)?18:11)){case 120:return b(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===k(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+i+"$2box$3")+e;case 100:return b(e,":",":"+i)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(e,"scroll-","scroll-snap-")+e}return e}function Z(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=G(e.value,e.length,n));case p:return q([z(e,{value:b(e.value,"@","@"+u)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(y(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":R(z(e,{props:[b(t,/:(read-\w+)/,":-moz-$1")]})),R(z(e,{props:[t]})),g(e,{props:j(n,r)});break;case"::placeholder":R(z(e,{props:[b(t,/:(plac\w+)/,":"+u+"input-$1")]})),R(z(e,{props:[b(t,/:(plac\w+)/,":-moz-$1")]})),R(z(e,{props:[b(t,/:(plac\w+)/,i+"input-$1")]})),R(z(e,{props:[t]})),g(e,{props:j(n,r)})}return""})}}function ee(e){return B(te("",null,null,null,[""],e=W(e),0,[0],e))}function te(e,t,n,r,o,a,l,i,s){for(var u=0,c=0,d=l,f=0,p=0,g=0,v=1,y=1,S=1,C=0,j="",_=o,F=a,T=r,P=j;y;)switch(g=C,C=$()){case 40:if(108!=g&&58==k(P,d-1)){-1!=x(P+=b(H(C),"&","&\f"),"&\f",h(u?i[u-1]:0))&&(S=-1);break}case 34:case 39:case 91:P+=H(C);break;case 9:case 10:case 13:case 32:P+=V(g);break;case 92:P+=K(A()-1,7);continue;case 47:switch(L()){case 42:case 47:E(re(Y($(),A()),t,n,s),s);break;default:P+="/"}break;case 123*v:i[u++]=w(P)*S;case 125*v:case 59:case 0:switch(C){case 0:case 125:y=0;case 59+c:-1==S&&(P=b(P,/\f/g,"")),p>0&&w(P)-d&&E(p>32?oe(P+";",r,n,d-1,s):oe(b(P," ","")+";",r,n,d-2,s),s);break;case 59:P+=";";default:if(E(T=ne(P,t,n,u,c,o,i,j,_=[],F=[],d,a),a),123===C)if(0===c)te(P,t,T,T,_,a,d,i,F);else switch(99===f&&110===k(P,3)?100:f){case 100:case 108:case 109:case 115:te(e,T,T,r&&E(ne(e,T,T,0,0,o,i,j,o,_=[],d,F),F),o,F,d,i,r?_:F);break;default:te(P,T,T,T,[""],F,0,i,F)}}u=c=p=0,v=S=1,j=P="",d=l;break;case 58:d=1+w(P),p=g;default:if(v<1)if(123==C)--v;else if(125==C&&0==v++&&125==I())continue;switch(P+=m(C),C*v){case 38:S=c>0?1:(P+="\f",-1);break;case 44:i[u++]=(w(P)-1)*S,S=1;break;case 64:45===L()&&(P+=H($())),f=L(),c=d=w(j=P+=J(A())),C++;break;case 45:45===g&&2==w(P)&&(v=0)}}return a}function ne(e,t,n,r,o,a,l,i,s,u,c,f){for(var p=o-1,m=0===o?a:[""],g=C(m),y=0,x=0,k=0;y<r;++y)for(var w=0,E=S(e,p+1,p=h(x=l[y])),j=e;w<g;++w)(j=v(x>0?m[w]+" "+E:b(E,/&\f/g,m[w])))&&(s[k++]=j);return O(e,t,n,0===o?d:i,s,u,c,f)}function re(e,t,n,r){return O(e,t,n,c,m(D),S(e,2,-2),0,r)}function oe(e,t,n,r,o){return O(e,t,n,f,S(e,0,r),S(e,r+1,-1),r,o)}var ae={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",ie="active",se="data-styled-version",ue="6.1.19",ce="/*!sc*/\n",de="undefined"!=typeof window&&"undefined"!=typeof document,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),pe=(new Set,Object.freeze([])),he=Object.freeze({});function me(e,t,n){return void 0===n&&(n=he),e.theme!==n.theme&&e.theme||t||n.theme}var ge=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function be(e){return e.replace(ve,"-").replace(ye,"")}var xe=/(a)(d)/gi,ke=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ke(t%52)+n;return(ke(t%52)+n).replace(xe,"$1-$2")}var we,Ce=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ee=function(e){return Ce(5381,e)};function je(e){return Se(Ee(e)>>>0)}function _e(e){return e.displayName||e.name||"Component"}function Fe(e){return"string"==typeof e&&!0}var Te="function"==typeof Symbol&&Symbol.for,Pe=Te?Symbol.for("react.memo"):60115,De=Te?Symbol.for("react.forward_ref"):60112,Ne={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ze={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Re=((we={})[De]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},we[Pe]=ze,we);function Ie(e){return("type"in(t=e)&&t.type.$$typeof)===Pe?ze:"$$typeof"in e?Re[e.$$typeof]:Ne;var t}var $e=Object.defineProperty,Le=Object.getOwnPropertyNames,Ae=Object.getOwnPropertySymbols,Ue=Object.getOwnPropertyDescriptor,Me=Object.getPrototypeOf,We=Object.prototype;function Be(e,t,n){if("string"!=typeof t){if(We){var r=Me(t);r&&r!==We&&Be(e,r,n)}var o=Le(t);Ae&&(o=o.concat(Ae(t)));for(var a=Ie(e),l=Ie(t),i=0;i<o.length;++i){var s=o[i];if(!(s in Oe||n&&n[s]||l&&s in l||a&&s in a)){var u=Ue(t,s);try{$e(e,s,u)}catch(e){}}}}return e}function He(e){return"function"==typeof e}function Ve(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qe(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ye(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Je(e,t,n){if(void 0===n&&(n=!1),!n&&!Ye(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Je(e[r],t[r]);else if(Ye(t))for(var r in t)e[r]=Je(e[r],t[r]);return e}function qe(e,t){Object.defineProperty(e,"toString",{value:t})}function Xe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ge=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Xe(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(e+1),i=(a=0,t.length);a<i;a++)this.tag.insertRule(l,t[a])&&(this.groupSizes[e]++,l++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(ce);return t},e}(),Ze=new Map,et=new Map,tt=1,nt=function(e){if(Ze.has(e))return Ze.get(e);for(;et.has(tt);)tt++;var t=tt++;return Ze.set(e,t),et.set(t,e),t},rt=function(e,t){tt=t+1,Ze.set(e,t),et.set(t,e)},ot="style[".concat(le,"][").concat(se,'="').concat(ue,'"]'),at=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,n){for(var r,o=n.split(","),a=0,l=o.length;a<l;a++)(r=o[a])&&e.registerName(t,r)},it=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ce),o=[],a=0,l=r.length;a<l;a++){var i=r[a].trim();if(i){var s=i.match(at);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(rt(c,u),lt(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}},st=function(e){for(var t=document.querySelectorAll(ot),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(le)!==ie&&(it(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ut(){return n.nc}var ct=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(le,ie),r.setAttribute(se,ue);var l=ut();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},dt=function(){function e(e){this.element=ct(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Xe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=ct(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),pt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ht=de,mt={isServer:!de,useCSSOMInjection:!fe},gt=function(){function e(e,t,n){void 0===e&&(e=he),void 0===t&&(t={});var o=this;this.options=r(r({},mt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&ht&&(ht=!1,st(this)),qe(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return et.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),l=t.getGroup(n);if(void 0===a||!a.size||0===l.length)return"continue";var i="".concat(le,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(l).concat(i,'{content:"').concat(s,'"}').concat(ce)},a=0;a<n;a++)o(a);return r}(o)})}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&de&&st(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new pt(n):t?new dt(n):new ft(n)}(this.options),new Ge(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(nt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vt=/&/g,yt=/^\s*\/\/.*$/gm;function bt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=bt(e.children,t)),e})}function xt(e){var t,n,r,o=void 0===e?he:e,a=o.options,l=void 0===a?he:a,i=o.plugins,s=void 0===i?pe:i,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(vt,n).replace(r,u))}),l.prefix&&c.push(Z),c.push(X);var f=function(e,o,a,i){void 0===o&&(o=""),void 0===a&&(a=""),void 0===i&&(i="&"),t=i,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(yt,""),u=ee(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);l.namespace&&(u=bt(u,l.namespace));var d,f=[];return q(u,function(e){var t=C(e);return function(n,r,o,a){for(var l="",i=0;i<t;i++)l+=e[i](n,r,o,a)||"";return l}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce(function(e,t){return t.name||Xe(15),Ce(e,t.name)},5381).toString():"",f}var kt=new gt,St=xt(),wt=e.createContext({shouldForwardProp:void 0,styleSheet:kt,stylis:St}),Ct=(wt.Consumer,e.createContext(void 0));function Et(){return(0,e.useContext)(wt)}function jt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],o=n[1],a=Et().styleSheet,i=(0,e.useMemo)(function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)(function(){return xt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})},[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)(function(){l()(r,t.stylisPlugins)||o(t.stylisPlugins)},[t.stylisPlugins]);var u=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:s}},[t.shouldForwardProp,i,s]);return e.createElement(wt.Provider,{value:u},e.createElement(Ct.Provider,{value:s},t.children))}var _t=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qe(this,function(){throw Xe(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),Ft=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ft(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Pt=function(e){return null==e||!1===e||""===e},Dt=function(e){var t,n,r=[];for(var a in e){var l=e[a];e.hasOwnProperty(a)&&!Pt(l)&&(Array.isArray(l)&&l.isCss||He(l)?r.push("".concat(Tt(a),":"),l,";"):Ye(l)?r.push.apply(r,o(o(["".concat(a," {")],Dt(l),!1),["}"],!1)):r.push("".concat(Tt(a),": ").concat((t=a,null==(n=l)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ae||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nt(e,t,n,r){return Pt(e)?[]:Ve(e)?[".".concat(e.styledComponentId)]:He(e)?!He(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Nt(e(t),t,n,r):e instanceof _t?n?(e.inject(n,r),[e.getName(r)]):[e]:Ye(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply(pe,e.map(function(e){return Nt(e,t,n,r)})):[e.toString()];var o}function Ot(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(He(n)&&!Ve(n))return!1}return!0}var zt=Ee(ue),Rt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ot(e),this.componentId=t,this.baseHash=Ce(zt,t),this.baseStyle=n,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ke(r,this.staticRulesId);else{var o=Qe(Nt(this.rules,e,t,n)),a=Se(Ce(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var l=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,l)}r=Ke(r,a),this.staticRulesId=a}else{for(var i=Ce(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Qe(Nt(c,e,t,n));i=Ce(i,d+u),s+=d}}if(s){var f=Se(i>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Ke(r,f)}}return r},e}(),It=e.createContext(void 0);It.Consumer;var $t={};new Set;function Lt(t,n,o){var a=Ve(t),l=t,i=!Fe(t),s=n.attrs,u=void 0===s?pe:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":be(e);$t[n]=($t[n]||0)+1;var r="".concat(n,"-").concat(je(ue+n+$t[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,f=n.displayName,p=void 0===f?function(e){return Fe(e)?"styled.".concat(e):"Styled(".concat(_e(e),")")}(t):f,h=n.displayName&&n.componentId?"".concat(be(n.displayName),"-").concat(n.componentId):n.componentId||d,m=a&&l.attrs?l.attrs.concat(u).filter(Boolean):u,g=n.shouldForwardProp;if(a&&l.shouldForwardProp){var v=l.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var b=new Rt(o,h,a?l.componentStyle:void 0);function x(t,n){return function(t,n,o){var a=t.attrs,l=t.componentStyle,i=t.defaultProps,s=t.foldedComponentIds,u=t.styledComponentId,c=t.target,d=e.useContext(It),f=Et(),p=t.shouldForwardProp||f.shouldForwardProp,h=me(n,d,i)||he,m=function(e,t,n){for(var o,a=r(r({},t),{className:void 0,theme:n}),l=0;l<e.length;l+=1){var i=He(o=e[l])?o(a):o;for(var s in i)a[s]="className"===s?Ke(a[s],i[s]):"style"===s?r(r({},a[s]),i[s]):i[s]}return t.className&&(a.className=Ke(a.className,t.className)),a}(a,n,h),g=m.as||c,v={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===h||("forwardedAs"===y?v.as=m.forwardedAs:p&&!p(y,g)||(v[y]=m[y]));var b=function(e,t){var n=Et();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(l,m),x=Ke(s,u);return b&&(x+=" "+b),m.className&&(x+=" "+m.className),v[Fe(g)&&!ge.has(g)?"class":"className"]=x,o&&(v.ref=o),(0,e.createElement)(g,v)}(k,t,n)}x.displayName=p;var k=e.forwardRef(x);return k.attrs=m,k.componentStyle=b,k.displayName=p,k.shouldForwardProp=g,k.foldedComponentIds=a?Ke(l.foldedComponentIds,l.styledComponentId):"",k.styledComponentId=h,k.target=a?l.target:t,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Je(e,o[r],!0);return e}({},l.defaultProps,e):e}}),qe(k,function(){return".".concat(k.styledComponentId)}),i&&Be(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function At(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ut=function(e){return Object.assign(e,{isCss:!0})};function Mt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(He(e)||Ye(e))return Ut(Nt(At(pe,o([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Nt(r):Ut(Nt(At(r,t)))}function Wt(e,t,n){if(void 0===n&&(n=he),!t)throw Xe(1,t);var a=function(r){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return e(t,n,Mt.apply(void 0,o([r],a,!1)))};return a.attrs=function(o){return Wt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Wt(e,t,r(r({},n),o))},a}var Bt=function(e){return Wt(Lt,e)},Ht=Bt;ge.forEach(function(e){Ht[e]=Bt(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),gt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Qe(Nt(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ut(),r=Qe([n&&'nonce="'.concat(n,'"'),"".concat(le,'="true"'),"".concat(se,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Xe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Xe(2);var o=t.instance.toString();if(!o)return[];var a=((n={})[le]="",n[se]=ue,n.dangerouslySetInnerHTML={__html:o},n),l=ut();return l&&(a.nonce=l),[e.createElement("style",r({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Xe(2);return e.createElement(jt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Xe(3)}})(),"__sc-".concat(le,"__");const Vt={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let Kt;const Qt=new Uint8Array(16);function Yt(){if(!Kt&&(Kt="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Kt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Kt(Qt)}const Jt=[];for(let n=0;n<256;++n)Jt.push((n+256).toString(16).slice(1));function qt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Jt[e[t+0]]+Jt[e[t+1]]+Jt[e[t+2]]+Jt[e[t+3]]+"-"+Jt[e[t+4]]+Jt[e[t+5]]+"-"+Jt[e[t+6]]+Jt[e[t+7]]+"-"+Jt[e[t+8]]+Jt[e[t+9]]+"-"+Jt[e[t+10]]+Jt[e[t+11]]+Jt[e[t+12]]+Jt[e[t+13]]+Jt[e[t+14]]+Jt[e[t+15]]}const Xt=function(e,t,n){if(Vt.randomUUID&&!t&&!e)return Vt.randomUUID();const r=(e=e||{}).random||(e.rng||Yt)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return qt(r)};var Gt=n(579);const Zt=Ht.div`
  min-height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`,en=Ht.div`
  text-align: center;
  margin-bottom: 30px;
`,tn=Ht.h1`
  color: ${e=>e.theme.accent};
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`,nn=Ht.div`
  text-align: center;
  margin-bottom: 30px;
`,rn=Ht.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${e=>e.theme.accent};
  margin-bottom: 10px;
`,on=Ht.div`
  width: 100%;
  max-width: 400px;
  height: 30px;
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 0;
  margin: 0 auto 20px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      #333 2px,
      #333 4px
    );
    pointer-events: none;
  }
`,an=Ht.div`
  height: 100%;
  background: linear-gradient(90deg, ${e=>e.theme.accent}, ${e=>e.theme.accentHover});
  width: ${e=>e.progress}%;
  transition: width 0.5s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background-color: ${e=>e.theme.accentDark};
    box-shadow: 2px 0 4px rgba(0,0,0,0.3);
  }
`,ln=Ht.div`
  font-size: 0.9rem;
  color: #CCCCCC;
  margin-top: 5px;
`,sn=Ht.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`,un=Ht.div`
  font-size: 2rem;
  text-align: center;
  padding: 10px;
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,cn=Ht.div`
  font-size: 0.8rem;
  color: #CCCCCC;
  font-weight: 500;
  text-transform: capitalize;
`,dn=Ht.div`
  max-width: 500px;
  margin: 0 auto 30px;
  background-color: #1E1E1E;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    margin: 0 10px 30px;
    padding: 15px;
  }
`,fn=Ht.div`
  margin-bottom: 15px;
`,pn=Ht.label`
  display: block;
  margin-bottom: 5px;
  color: #CCCCCC;
  font-weight: 500;
`,hn=Ht.input`
  width: 100%;
  padding: 10px;
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #FFD700;
  }
`,mn=(Ht.select`
  width: 100%;
  padding: 10px;
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #FFD700;
  }
  
  option {
    background-color: #1E1E1E;
    color: #FFFFFF;
  }
`,Ht.button`
  width: 100%;
  padding: 12px;
  background-color: ${e=>e.theme.accent};
  color: #121212;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.accentHover};
  }
  
  &:active {
    transform: translateY(1px);
  }
`),gn=Ht.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin: 0 10px 30px;
  }
`,vn=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`,yn=Ht.h3`
  color: ${e=>e.theme.accent};
  margin-bottom: 15px;
  font-size: 1.2rem;
`,bn=Ht.div`
  margin-bottom: 10px;
  font-size: 1rem;
  
  .label {
    color: #CCCCCC;
    margin-right: 10px;
  }
  
  .value {
    color: #FFFFFF;
    font-weight: bold;
  }
  
  .positive {
    color: #4CAF50;
  }
  
  .negative {
    color: #F44336;
  }
`,xn=Ht.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    margin: 0 10px;
    padding: 15px;
  }
`,kn=Ht.blockquote`
  font-size: 1.1rem;
  font-style: italic;
  color: #CCCCCC;
  margin-bottom: 10px;
  line-height: 1.5;
`,Sn=Ht.div`
  color: ${e=>e.theme.accent};
  font-weight: bold;
`,wn=(Ht.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`,Ht.button.withConfig({shouldForwardProp:e=>!["isActive","themeColor"].includes(e)})`
  padding: 8px 16px;
  background-color: ${e=>e.isActive?e.themeColor:"#1E1E1E"};
  color: ${e=>e.isActive?"#121212":"#FFFFFF"};
  border: 2px solid ${e=>e.themeColor};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.themeColor};
    color: #121212;
  }
`,Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 20px;
  
  @media (max-width: 768px) {
    position: static;
    margin-bottom: 20px;
    padding: 15px;
  }
`),Cn=Ht.h3`
  color: ${e=>e.theme.accent};
  margin-bottom: 15px;
  text-align: center;
`,En=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #121212;
  border: 1px solid #333;
  border-radius: 4px;
  margin-bottom: 10px;
  
  .reminder-text {
    color: #FFFFFF;
    flex: 1;
  }
  
  .delete-btn {
    background-color: #F44336;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.8rem;
    
    &:hover {
      background-color: #D32F2F;
    }
  }
`,jn=(Ht.button`
  width: 100%;
  padding: 12px;
  background-color: #F44336;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #D32F2F;
  }

  &:active {
    transform: translateY(1px);
  }
`,Ht.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`),_n=Ht.div`
  width: 80px;
  height: 80px;
  background-color: #1E1E1E;
  border: 3px solid ${e=>e.theme.accent};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
`,Fn=Ht.div`
  color: ${e=>e.theme.accent};
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 5px;
  font-family: 'Impact', 'Arial Black', 'Helvetica', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7), 0 0 10px ${e=>e.theme.accent}40;
  background: linear-gradient(45deg, ${e=>e.theme.accent}, ${e=>e.theme.accentHover});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Tn=Ht.div`
  color: #CCCCCC;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Arial', sans-serif;
  text-transform: capitalize;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  margin-top: 2px;
`,Pn=Ht.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background-color: #FF6B6B;
  color: #FFFFFF;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background-color: #FF5252;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Dn=Ht.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${e=>e.theme.accent};
  color: ${e=>"#FFD700"===e.theme.accent?"#000":"#fff"};
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background-color: ${e=>e.theme.accentHover};
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Nn=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,On=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 30px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`,zn=Ht.h2`
  color: #4CAF50;
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`,Rn=Ht.div`
  margin-bottom: 20px;
`,In=Ht.h3`
  color: #FFD700;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: bold;
`,$n=Ht.p`
  color: #CCCCCC;
  line-height: 1.6;
  margin-bottom: 10px;
  font-size: 1rem;
`,Ln=Ht.ul`
  color: #CCCCCC;
  margin-left: 20px;
  margin-bottom: 15px;
  
  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
`,An=Ht.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #CCCCCC;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    color: #FFFFFF;
  }
`,Un=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`,Mn=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 40px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`,Wn=Ht.h2`
  color: #FFD700;
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: bold;
`,Bn=Ht.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Hn=Ht.input`
  width: 100%;
  padding: 12px;
  background-color: #121212;
  border: 2px solid #333;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #FFD700;
  }
  
  &::placeholder {
    color: #888;
  }
`,Vn=Ht.button`
  width: 100%;
  padding: 12px;
  background-color: #FFD700;
  color: #121212;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #FFA500;
  }
  
  &:active {
    transform: translateY(1px);
  }
`,Kn=Ht.button`
  background: none;
  border: none;
  color: #4CAF50;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 15px;
  text-decoration: underline;
  
  &:hover {
    color: #45a049;
  }
`,Qn=Ht.div`
  color: #F44336;
  font-size: 0.9rem;
  margin-top: 10px;
`,Yn=Ht.button`
  position: fixed;
  top: 20px;
  right: 120px;
  background-color: ${e=>e.theme.accent};
  color: ${e=>"#FFD700"===e.theme.accent?"#000":"#fff"};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>e.theme.accentHover};
  }
`,Jn=Ht.button`
  position: fixed;
  top: 20px;
  right: 180px;
  background-color: ${e=>e.theme.accent};
  color: ${e=>"#FFD700"===e.theme.accent?"#000":"#fff"};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>e.theme.accentHover};
  }
`,qn=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,Xn=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`,Gn=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,Zn=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  position: relative;
`,er=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,tr=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 30px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`,nr=Ht.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
`,rr=Ht.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.accent)||"#FFD700"}}, ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.accentHover)||"#FFA500"}});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-right: 15px;
`,or=Ht.div`
  flex: 1;
`,ar=Ht.h3`
  color: #FFD700;
  margin: 0 0 5px 0;
  font-size: 1.4rem;
`,lr=Ht.div`
  color: #CCC;
  font-size: 1rem;
`,ir=Ht.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
`,sr=Ht.div`
  background-color: #2A2A2A;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 15px;
  text-align: center;
`,ur=Ht.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.accent)||"#FFD700"}};
  margin-bottom: 5px;
`,cr=Ht.div`
  color: #CCC;
  font-size: 0.9rem;
`,dr=Ht.div`
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 40px 20px;
`,fr=Ht.div`
  margin-top: 15px;
`,pr=Ht.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #2A2A2A;
  border: 1px solid #444;
  border-radius: 6px;
  margin-bottom: 8px;
`,hr=Ht.span`
  color: #FFD700;
  font-weight: bold;
`,mr=Ht.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #2A2A2A;
  border: 1px solid #444;
  border-radius: 6px;
  margin-bottom: 10px;
`,gr=Ht.div`
  flex: 1;
`,vr=Ht.div`
  color: #FFD700;
  font-weight: bold;
  margin-bottom: 4px;
`,yr=Ht.div`
  color: #999;
  font-size: 0.8rem;
`,br=Ht.div`
  display: flex;
  gap: 8px;
`,xr=Ht.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  
  &:hover {
    background-color: #45a049;
  }
`,kr=Ht.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  
  &:hover {
    background-color: #da190b;
  }
`,Sr=Ht.button`
  background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.accent)||"#FFD700"}};
  color: #000;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  
  &:hover {
    background-color: ${e=>{var t;return(null===(t=e.theme)||void 0===t?void 0:t.accentHover)||"#FFA500"}};
  }
`,wr=Ht.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  
  &:hover {
    background-color: #da190b;
  }
`,Cr=Ht.h2`
  color: #FFD700;
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
`,Er=Ht.input`
  width: 100%;
  padding: 10px;
  background-color: #2A2A2A;
  border: 1px solid #444;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 1rem;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`,jr=Ht.div`
  max-height: 300px;
  overflow-y: auto;
`,_r=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #2A2A2A;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #FFFFFF;
`,Fr=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #333;
  color: #FFFFFF;

  &:last-child {
    border-bottom: none;
  }
`,Tr=Ht.button`
  background-color: ${e=>e.isOn?"#4CAF50":"#666"};
  border: none;
  border-radius: 15px;
  width: 50px;
  height: 25px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${e=>e.isOn?"27px":"2px"};
    width: 21px;
    height: 21px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s ease;
  }
`,Pr=Ht.select`
  background-color: #2A2A2A;
  border: 1px solid #444;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.accent};
  }
`,Dr=Ht.button`
  position: fixed;
  top: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${e=>e.theme.accent};
  color: ${e=>"#FFD700"===e.theme.accent?"#000":"#fff"};
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background-color: ${e=>e.theme.accentHover};
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Nr=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,Or=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;
`,zr=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
`,Rr=Ht.h2`
  color: ${e=>e.theme.accent};
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
`,Ir=Ht.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #121212;
  border-radius: 4px;
  border: 1px solid #333;
`,$r=Ht.div`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${e=>e.isUser?e.theme.accent:"#2A2A2A"};
  color: ${e=>e.isUser?"#121212":"#CCCCCC"};
  align-self: ${e=>e.isUser?"flex-end":"flex-start"};
  max-width: 80%;
  word-wrap: break-word;
`,Lr=Ht.div`
  display: flex;
  gap: 10px;
`,Ar=Ht.input`
  flex: 1;
  padding: 10px;
  background-color: #121212;
  border: 2px solid #333;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.accent};
  }
  
  &::placeholder {
    color: #888;
  }
`,Ur=Ht.button`
  padding: 10px 20px;
  background-color: ${e=>e.theme.accent};
  color: #121212;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.accentHover};
  }
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`,Mr=Ht.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`,Wr=Ht.h3`
  color: #FFD700;
  margin-bottom: 15px;
  font-size: 1.2rem;
`,Br=Ht.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
`,Hr=Ht.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 0.9rem;
  border-left: 3px solid #FFD700;
`,Vr=Ht.div`
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`,Kr=Ht.div`
  flex: 0 0 300px;
  margin-top: 80px;
  
  @media (max-width: 768px) {
    flex: none;
    order: 2;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`,Qr=Ht.div`
  flex: 1;
  min-width: 0;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,Yr=Ht.div`
  @media (max-width: 768px) {
    order: 1;
  }
`,Jr=Ht.div`
  @media (max-width: 768px) {
    order: 2;
  }
`,qr=Ht.div`
  @media (max-width: 768px) {
    order: 3;
  }
`,Xr=Ht.div`
  @media (max-width: 768px) {
    order: 4;
  }
`,Gr=Ht.div`
  @media (max-width: 768px) {
    order: 5;
  }
`,Zr=Ht.div`
  @media (max-width: 768px) {
    order: 6;
  }
`,eo=Ht.div`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 10px 15px;
  color: #FFFFFF;
  font-size: 0.9rem;
  z-index: 1000;
`,to=Ht.button`
  background-color: ${e=>e.theme.accent};
  color: ${e=>"#FFD700"===e.theme.accent?"#000":"#fff"};
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 0.8rem;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>e.theme.accentHover};
  }
`,no=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  height: fit-content;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 15px;
  }
`,ro=Ht.h3`
  color: ${e=>e.theme.accent};
  margin-bottom: 15px;
  text-align: center;
  font-size: 1.2rem;
`,oo=Ht.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 10px;
`,ao=Ht.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 5px;
`,lo=Ht.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: #CCCCCC;
  background-color: #121212;
  border-radius: 4px;
`,io=Ht.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: ${e=>e.isToday?"#121212":"#FFFFFF"};
  background-color: ${e=>e.isToday?e.theme.accent:"#121212"};
  border: 1px solid ${e=>e.isToday?e.theme.accent:"#333"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.accentHover};
    color: #121212;
  }
`,so=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 15px;
  }
`,uo=Ht.div`
  max-width: 500px;
  margin: 30px auto;
  background-color: #1E1E1E;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    margin: 30px 10px;
    padding: 15px;
  }
`,co=Ht.h3`
  color: ${e=>e.theme.accent};
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
`,fo=Ht.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,po=Ht.input`
  flex: 1;
  padding: 10px;
  background-color: #121212;
  border: 2px solid #333;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.accent};
  }
`,ho=Ht.button`
  padding: 10px 20px;
  background-color: ${e=>e.theme.accent};
  color: #121212;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.accentHover};
  }
`,mo=Ht.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,go=Ht.div`
  background-color: #121212;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 15px;
  position: relative;
`,vo=Ht.h4`
  color: ${e=>e.theme.accent};
  margin: 0 0 10px 0;
  font-size: 1.2rem;
`,yo=Ht.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
`,bo=Ht.div`
  text-align: center;
  padding: 8px;
  background-color: #1E1E1E;
  border-radius: 4px;
  border: 1px solid #333;
`,xo=Ht.div`
  font-size: 0.8rem;
  color: #CCCCCC;
  margin-bottom: 5px;
`,ko=Ht.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${e=>e.theme.accent};
`,So=Ht.div`
  background-color: #1E1E1E;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`,wo=Ht.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.theme.accent};
  margin-bottom: 5px;
`,Co=Ht.div`
  font-size: 0.9rem;
  color: #CCCCCC;
`,Eo=Ht.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #FF4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #FF6666;
  }
`,jo=Ht.button`
  width: 100%;
  padding: 8px;
  background-color: #FF4444;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    background-color: #FF6666;
  }
`,_o=Ht.h3`
  color: ${e=>e.theme.accent};
  margin-bottom: 15px;
  font-size: 1.2rem;
`,Fo=Ht.div`
  font-family: 'Courier New', monospace;
  font-size: 2rem;
  font-weight: bold;
  color: ${e=>e.theme.accent};
  text-shadow: 0 0 10px ${e=>e.theme.accent};
  background: linear-gradient(45deg, #121212, #1E1E1E);
  border: 2px solid ${e=>e.theme.accent};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 10px;
  }
`,To=Ht.div`
  font-size: 1rem;
  color: #CCCCCC;
  font-weight: 500;
`,Po=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`,Do=Ht.div`
  background-color: #1E1E1E;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  position: relative;
`,No=Ht.h3`
  color: ${e=>e.theme.accent};
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`,Oo=Ht.div`
  margin-bottom: 20px;
  max-height: 200px;
  overflow-y: auto;
`,zo=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #121212;
  border: 1px solid #333;
  border-radius: 4px;
  margin-bottom: 8px;
  
  .reminder-text {
    color: #FFFFFF;
    flex: 1;
    font-size: 0.9rem;
  }
  
  .delete-btn {
    background-color: #F44336;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 0.7rem;
    
    &:hover {
      background-color: #D32F2F;
    }
  }
`,Ro=(Ht.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  background-color: ${e=>e.theme.accent};
  border-radius: 50%;
  z-index: 1;
`,{fitness:{emoji:"\ud83d\udcaa",name:"Fitness"},wellbeing:{emoji:"\ud83e\udde0",name:"Wellbeing"},money:{emoji:"\ud83d\udcb0",name:"Money"},selfcare:{emoji:"\ud83c\udf38",name:"Self Care"},other:{emoji:"\u2b50",name:"Other"}}),Io={gold:{name:"Gold",accent:"#FFD700",accentHover:"#FFA500",accentDark:"#FF8C00"},blue:{name:"Blue",accent:"#4A90E2",accentHover:"#357ABD",accentDark:"#2E5A87"},purple:{name:"Ultraviolet",accent:"#8A2BE2",accentHover:"#7B68EE",accentDark:"#6A5ACD"},red:{name:"Red",accent:"#FF4444",accentHover:"#FF6B6B",accentDark:"#CC3333"}},$o={Unranked:{minTrophies:0,maxTrophies:0,emoji:"\ud83d\udd30"},Peasant:{minTrophies:1,maxTrophies:10,emoji:"\ud83c\udf3e"},"Noob 1":{minTrophies:11,maxTrophies:25,emoji:"\ud83c\udfaf"},"Noob 2":{minTrophies:26,maxTrophies:35,emoji:"\ud83c\udfaf"},"Noob 3":{minTrophies:36,maxTrophies:50,emoji:"\ud83c\udfaf"},"Pro 1":{minTrophies:51,maxTrophies:65,emoji:"\u2694\ufe0f"},"Pro 2":{minTrophies:66,maxTrophies:80,emoji:"\u2694\ufe0f"},"Pro 3":{minTrophies:81,maxTrophies:100,emoji:"\u2694\ufe0f"},"Legendary 1":{minTrophies:101,maxTrophies:130,emoji:"\ud83d\udc51"},"Legendary 2":{minTrophies:131,maxTrophies:165,emoji:"\ud83d\udc51"},"Legendary 3":{minTrophies:166,maxTrophies:200,emoji:"\ud83d\udc51"},"Master 1":{minTrophies:201,maxTrophies:240,emoji:"\ud83d\udd25"},"Master 2":{minTrophies:241,maxTrophies:280,emoji:"\ud83d\udd25"},"Master 3":{minTrophies:281,maxTrophies:325,emoji:"\ud83d\udd25"},Grandmaster:{minTrophies:326,maxTrophies:419,emoji:"\u26a1"},"TOP G":{minTrophies:420,maxTrophies:1/0,emoji:"\ud83d\udc8e"}},Lo={level_10:{id:"level_10",name:"Reach Level 10",description:"Reach level 10 in your journey",emoji:"\ud83c\udfaf",type:"regular",xpReward:30,checkCondition:(e,t)=>e.currentLevel>=10},account_7_days:{id:"account_7_days",name:"Have an account for 7 days",description:"Keep your account active for 7 days",emoji:"\ud83d\udcc5",type:"regular",xpReward:30,checkCondition:(e,t,n)=>n>=7},trophies_25:{id:"trophies_25",name:"Reach 25 Trophies",description:"Earn your first 25 trophies",emoji:"\ud83c\udfc6",type:"regular",xpReward:30,checkCondition:(e,t)=>(e.trophies||0)>=25},trophies_100:{id:"trophies_100",name:"Reach 100 Trophies",description:"Earn 100 trophies - a true champion!",emoji:"\ud83c\udfc6",type:"gold",xpReward:65,checkCondition:(e,t)=>(e.trophies||0)>=100},top_g_rank:{id:"top_g_rank",name:"Reach Top G Rank",description:"Achieve the legendary Top G rank with 420+ trophies",emoji:"\ud83d\udc8e",type:"gold",xpReward:65,checkCondition:(e,t)=>(e.trophies||0)>=420}},Ao=[{text:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{text:"Success is not final, failure is not fatal: it is the courage to continue that counts.",author:"Winston Churchill"},{text:"The future belongs to those who believe in the beauty of their dreams.",author:"Eleanor Roosevelt"},{text:"It is during our darkest moments that we must focus to see the light.",author:"Aristotle"},{text:"The only impossible journey is the one you never begin.",author:"Tony Robbins"},{text:"In the middle of difficulty lies opportunity.",author:"Albert Einstein"},{text:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{text:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{text:"Don't be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{text:"Innovation distinguishes between a leader and a follower.",author:"Steve Jobs"}];const Uo=function(){const[t,n]=(0,e.useState)({currentLevel:1,currentXP:0,streakDays:0,lastTaskDate:null}),[r,o]=(0,e.useState)({fitness:{currentStreak:0,longestStreak:0,totalCompleted:0},wellbeing:{currentStreak:0,longestStreak:0,totalCompleted:0},money:{currentStreak:0,longestStreak:0,totalCompleted:0},selfcare:{currentStreak:0,longestStreak:0,totalCompleted:0},other:{currentStreak:0,longestStreak:0,totalCompleted:0},addictionfree:{currentStreak:0,longestStreak:0,totalCompleted:0}}),[a,l]=(0,e.useState)([]),[i,s]=(0,e.useState)(""),[u,c]=(0,e.useState)({}),[d,f]=(0,e.useState)({}),[p,h]=(0,e.useState)({}),[m,g]=(0,e.useState)(null),[v,y]=(0,e.useState)(""),[b,x]=(0,e.useState)("fitness"),[k,S]=(0,e.useState)(""),[w,C]=(0,e.useState)("fitness"),[E,j]=(0,e.useState)(null),[_,F]=(0,e.useState)(null),[T,P]=(0,e.useState)("gold"),[D,N]=(0,e.useState)([]),[O,z]=(0,e.useState)(""),[R,I]=(0,e.useState)(!1),[$,L]=(0,e.useState)(!1),[A,U]=(0,e.useState)(null),[M,W]=(0,e.useState)(!0),[B,H]=(0,e.useState)(!0),[V,K]=(0,e.useState)({username:"",password:"",confirmPassword:""}),[Q,Y]=(0,e.useState)(""),[J,q]=(0,e.useState)(new Date),[X,G]=(0,e.useState)({}),[Z,ee]=(0,e.useState)(null),[te,ne]=(0,e.useState)(!1),[re,oe]=(0,e.useState)(""),[ae,le]=(0,e.useState)(!1),[ie,se]=(0,e.useState)(!1),[ue,ce]=(0,e.useState)([]),[de,fe]=(0,e.useState)([]),[pe,he]=(0,e.useState)([]),[me,ge]=(0,e.useState)(""),[ve,ye]=(0,e.useState)([]),[be,xe]=(0,e.useState)(!0),[ke,Se]=(0,e.useState)(null),[we,Ce]=(0,e.useState)(!1),[Ee,je]=(0,e.useState)(!1),[_e,Fe]=(0,e.useState)([]),[Te,Pe]=(0,e.useState)(""),[De,Ne]=(0,e.useState)(!1),[Oe,ze]=(0,e.useState)([]),[Re,Ie]=(0,e.useState)(!1),[$e,Le]=(0,e.useState)(!1),[Ae,Ue]=(0,e.useState)("global"),Me=e=>Math.round(50*Math.pow(e,1.2)),We=()=>Me(t.currentLevel),Be=e=>5*e,He=e=>{f(t=>{const a={...t,[e]:{...t[e],completed:!t[e].completed}},l=a[e];return o(e=>{const t={...e};return l.completed?t[l.category].totalCompleted+=1:t[l.category].totalCompleted=Math.max(0,t[l.category].totalCompleted-1),t}),n(e=>{let t,n={...e};if(l.completed){var o;const i=(e=>{const t=(new Date).toDateString(),n=new Date(Date.now()-864e5).toDateString();return e.lastTaskDate===n?{streakDays:e.streakDays+1,lastTaskDate:t}:e.lastTaskDate===t?{streakDays:e.streakDays,lastTaskDate:t}:{streakDays:1,lastTaskDate:t}})(e);n.streakDays=i.streakDays,n.lastTaskDate=i.lastTaskDate;let s=30,u=Be(n.streakDays),c=0;Object.keys(a).length>5&&(c=3);let d=1,f=0;const p=(null===(o=r[l.category])||void 0===o?void 0:o.currentStreak)||0;p>=3&&(f=p);const h=d+f;n.trophies=(e.trophies||0)+h,t=s+u+c}else t=-5;const i=Math.max(0,e.currentXP+t),s=We();return i>=s&&l.completed?{...n,currentLevel:e.currentLevel+1,currentXP:i-s}:{...n,currentXP:i}}),a})},Ve=e=>{for(const[t,n]of Object.entries($o))if(e>=n.minTrophies&&e<=n.maxTrophies)return{rank:t,emoji:n.emoji,trophies:e};return{rank:"TOP G",emoji:"\ud83d\udc8e",trophies:e}},Ke=e=>{e.preventDefault(),Y("");try{if(console.log("\ud83d\udd10 Authentication attempt:",{isLogin:B,username:V.username}),"undefined"===typeof Storage)return void Y("Your browser does not support localStorage. Please use a modern browser.");if(B){console.log("\ud83d\udce5 Attempting to retrieve users from localStorage...");const e=localStorage.getItem("levelUpUsers");console.log("\ud83d\udce6 Raw users data:",e);const t=JSON.parse(e||"{}");console.log("\ud83d\udc65 Parsed users:",Object.keys(t));const n=Object.keys(t).find(e=>e.toLowerCase()===V.username.toLowerCase());console.log("\ud83d\udd0d Found username:",n);const r=n?t[n]:null;console.log("\ud83d\udc64 User data exists:",!!r),r&&r.password===V.password?(console.log("\u2705 Login successful!"),U(n),L(!0),W(!1),Je(n)):(console.log("\u274c Login failed - invalid credentials"),Y("Invalid username or password"))}else{if(console.log("\ud83d\udcdd Attempting signup..."),V.password!==V.confirmPassword)return void Y("Passwords do not match");if(V.username.length<3)return void Y("Username must be at least 3 characters");if(V.password.length<6)return void Y("Password must be at least 6 characters");console.log("\ud83d\udce5 Retrieving existing users for signup...");const e=localStorage.getItem("levelUpUsers"),n=JSON.parse(e||"{}");console.log("\ud83d\udc65 Existing users:",Object.keys(n));const r=Object.keys(n).find(e=>e.toLowerCase()===V.username.toLowerCase());if(r)return console.log("\u274c Username already exists:",r),void Y("Username already exists");console.log("\u2728 Creating new user..."),n[V.username]={password:V.password,createdAt:(new Date).toISOString()};try{localStorage.setItem("levelUpUsers",JSON.stringify(n)),console.log("\ud83d\udcbe User saved to localStorage successfully")}catch(t){return console.error("\u274c Failed to save user to localStorage:",t),void Y("Failed to save user data. Your browser may have storage restrictions.")}console.log("\u2705 Signup successful!"),U(V.username),L(!0),W(!1),Xe(V.username)}K({username:"",password:"",confirmPassword:""})}catch(n){console.error("\u274c Authentication error:",n),console.error("Error details:",{name:n.name,message:n.message,stack:n.stack}),"QuotaExceededError"===n.name?Y("Storage quota exceeded. Please clear your browser data and try again."):n.message.includes("localStorage")?Y("Browser storage is not available. Please check your browser settings."):Y(`An error occurred: ${n.message}. Please try again.`)}},Qe=e=>{e.preventDefault(),Te.trim()&&(async e=>{const n={id:Date.now(),text:e,isUser:!0,timestamp:new Date};Fe(e=>[...e,n]),Pe(""),setTimeout(()=>{let n="";const r=e.toLowerCase(),o=A||"friend",a=t.currentLevel,l=t.trophies||0,i=t.streakDays,s=Ve(l);if(r.includes("don't want")||r.includes("can't")||r.includes("won't")||r.includes("hate")||r.includes("tired")||r.includes("don't feel like")){const e=[`Hey ${o}, I hear you, and that's completely understandable. You know, you've earned ${l} trophies and reached level ${a} - that shows real dedication. Can you tell me what's making you feel this way? Sometimes talking through it helps us see things differently. What's the biggest thing holding you back right now?`,`${o}, I get it - we all have those moments where motivation feels impossible to find. But look, you've got a ${i}-day streak going, which tells me you're stronger than you think. What's going on that's making this feel so hard? I'm here to listen, and maybe we can figure out a way to make it feel less overwhelming.`,`That sounds really tough ${o}, and I want you to know it's okay to feel that way. You're a ${s.rank} ${s.emoji} - you didn't get there by accident. Can you help me understand what's behind these feelings? Sometimes when we don't want to do something, there's a deeper reason - maybe fear, exhaustion, or past experiences?`,`You know what, ${o}? It takes courage to even admit when we're struggling with motivation. You've shown that courage by earning ${l} trophies and reaching level ${a}. What's making this particular thing feel so difficult right now? Let's talk through it - sometimes just getting it out there helps.`];n=e[Math.floor(Math.random()*e.length)]}else if(r.includes("task")||r.includes("work")||r.includes("goal")||r.includes("should")||r.includes("need to")){const e=[`${o}, I understand tasks can feel overwhelming sometimes. But look at you - ${l} trophies earned and level ${a} with a ${i}-day streak! That's proof you can handle challenges. Here's the thing though - completing even small tasks builds momentum and confidence. What happens when you avoid this? Usually, the stress just builds up, right? But when you tackle it, even imperfectly, you feel that sense of accomplishment. What's one tiny step you could take right now?`,`You know ${o}, I've noticed that the tasks we resist most are often the ones that would benefit us the most. You're already a ${s.rank} ${s.emoji}, which shows you understand this. The positive side? You'll feel so much lighter once it's done, plus you're building discipline that helps with everything else. The downside of avoiding it? That nagging feeling just keeps growing, and it usually gets harder the longer we wait. What do you think is making this particular task feel so daunting?`,`Let me ask you something, ${o} - what would completing this task mean for you? And what happens if you keep putting it off? You've already proven you can stick with things (hello, ${l} trophies and level ${a}!), so I know you have it in you. I find that when we really think about the consequences of inaction versus the benefits of action, it becomes clearer. Plus, you don't have to do it perfectly - just starting is often the hardest part.`,`Tasks can feel like mountains sometimes, can't they ${o}? But here's what I've learned - and what your ${i}-day streak proves - the relief and pride you feel after completing something difficult is incredible. And the alternative? That task just sits there in the back of your mind, creating stress. What's making this one feel particularly challenging for you?`];n=e[Math.floor(Math.random()*e.length)]}else{const e=[`Thanks for sharing that with me, ${o}. I'm Clarence, by the way, and I'm genuinely glad you're here working on yourself. I can see you've earned ${l} trophies and reached level ${a} - that's impressive dedication! What's been on your mind lately? I'm here to listen and help however I can.`,`I really appreciate you opening up, ${o}. You know, just by being here and thinking about your goals, you're already ahead of most people. Plus, look at that ${i}-day streak - you're clearly committed to growth! What's one thing that's been challenging you recently? Let's talk through it together.`,`That's interesting, ${o} - tell me more about that. I find that when we dig a little deeper into our thoughts and feelings, we often discover insights that can really help us move forward. You've already shown great self-awareness by reaching ${s.rank} status ${s.emoji}. What's driving this feeling for you?`,`I hear you ${o}, and I want you to know that what you're experiencing is completely valid. You've earned ${l} trophies and built up to level ${a}, which shows real resilience. Can you help me understand what success would look like for you right now? Sometimes breaking things down makes them feel more manageable.`,`You know what I love about our conversation, ${o}? You're being real with me, and that takes courage. Your ${i}-day streak tells me you're someone who follows through. What would it mean for you if you could push through whatever you're facing right now? And what concerns you most about not addressing it?`,`I'm really glad you reached out, ${o}. Sometimes we just need someone to listen, you know? You've already proven you can handle challenges - hello, ${l} trophies and level ${a}! What's been weighing on you lately? I'm here to support you through whatever you're dealing with.`];n=e[Math.floor(Math.random()*e.length)]}const u={id:Date.now()+1,text:n,isUser:!1,timestamp:new Date};Fe(e=>[...e,u])},1500)})(Te.trim())},Ye=e=>{n(t=>({...t,trophies:(t.trophies||0)+e}))},Je=e=>{try{const t=localStorage.getItem(`levelUpUser_${e}`),r=localStorage.getItem(`levelUpStats_${e}`),a=localStorage.getItem(`levelUpDailyTasks_${e}`),i=localStorage.getItem(`levelUpLongTermGoals_${e}`),s=localStorage.getItem(`levelUpReminders_${e}`),u=localStorage.getItem(`levelUpTheme_${e}`),d=localStorage.getItem(`levelUpLastEntry_${e}`),p=localStorage.getItem(`levelUpLastResetDate_${e}`),m=localStorage.getItem(`levelUpDateReminders_${e}`),v=localStorage.getItem(`levelUpAddictions_${e}`),y=localStorage.getItem(`levelUpAddictionStreaks_${e}`),b=localStorage.getItem(`levelUpFriends_${e}`),x=localStorage.getItem(`levelUpFriendRequests_${e}`),k=localStorage.getItem(`levelUpSentFriendRequests_${e}`),S=localStorage.getItem(`levelUpIsPublicAccount_${e}`),w=localStorage.getItem(`levelUpDevMode_${e}`),C=localStorage.getItem(`levelUpAchievements_${e}`);t&&n(JSON.parse(t)),r&&o(JSON.parse(r)),a&&f(JSON.parse(a)),i&&h(JSON.parse(i)),s&&N(JSON.parse(s)),u&&P(u),d&&F(d),p&&g(p),m&&G(JSON.parse(m)),v&&l(JSON.parse(v)),y&&c(JSON.parse(y)),b&&ce(JSON.parse(b)),x&&fe(JSON.parse(x)),k&&he(JSON.parse(k)),S&&xe(JSON.parse(S)),w&&Ne(JSON.parse(w)),C&&ze(JSON.parse(C))}catch(t){console.error("Error loading user data:",t),P("gold")}},qe=()=>{if(A)try{localStorage.setItem(`levelUpUser_${A}`,JSON.stringify(t)),localStorage.setItem(`levelUpStats_${A}`,JSON.stringify(r)),localStorage.setItem(`levelUpDailyTasks_${A}`,JSON.stringify(d)),localStorage.setItem(`levelUpLongTermGoals_${A}`,JSON.stringify(p)),localStorage.setItem(`levelUpReminders_${A}`,JSON.stringify(D)),localStorage.setItem(`levelUpTheme_${A}`,T),localStorage.setItem(`levelUpLastEntry_${A}`,_),localStorage.setItem(`levelUpLastResetDate_${A}`,m),localStorage.setItem(`levelUpDateReminders_${A}`,JSON.stringify(X)),localStorage.setItem(`levelUpAddictions_${A}`,JSON.stringify(a)),localStorage.setItem(`levelUpAddictionStreaks_${A}`,JSON.stringify(u)),localStorage.setItem(`levelUpFriends_${A}`,JSON.stringify(ue)),localStorage.setItem(`levelUpFriendRequests_${A}`,JSON.stringify(de)),localStorage.setItem(`levelUpSentFriendRequests_${A}`,JSON.stringify(pe)),localStorage.setItem(`levelUpIsPublicAccount_${A}`,JSON.stringify(be)),localStorage.setItem(`levelUpDevMode_${A}`,JSON.stringify(De)),localStorage.setItem(`levelUpAchievements_${A}`,JSON.stringify(Oe));const e=JSON.parse(localStorage.getItem("levelUpUsers")||"{}");e[A]&&(e[A]={...e[A],...t,isPublicAccount:be},localStorage.setItem("levelUpUsers",JSON.stringify(e)))}catch(e){console.error("Error saving user data:",e)}},Xe=e=>{n({currentLevel:1,currentXP:0,streakDays:0,lastTaskDate:null,trophies:0}),o({fitness:{currentStreak:0,longestStreak:0,totalCompleted:0},wellbeing:{currentStreak:0,longestStreak:0,totalCompleted:0},money:{currentStreak:0,longestStreak:0,totalCompleted:0},selfcare:{currentStreak:0,longestStreak:0,totalCompleted:0},other:{currentStreak:0,longestStreak:0,totalCompleted:0},addictionfree:{currentStreak:0,longestStreak:0,totalCompleted:0}}),f({}),N([]),P("gold"),F(null),g(null),G({}),l([]),c({}),ze([])};(0,e.useEffect)(()=>{try{const e=localStorage.getItem("levelUpLastUser");if(e){JSON.parse(localStorage.getItem("levelUpUsers")||"{}")[e]&&(U(e),L(!0),W(!1),Je(e))}}catch(r){console.error("Error loading last user:",r),W(!0)}(new Date).toDateString();const e=(new Date).getDate()%Ao.length;j(Ao[e]),$&&(()=>{const e=(new Date).toDateString();if(m!==e){if(m&&t.lastTaskDate){const r=new Date(t.lastTaskDate),o=(new Date(m),new Date(e)),a=Math.floor((o-r)/864e5);if(a>1){const e=2*(a-1);n(t=>({...t,trophies:Math.max(0,(t.trophies||0)-e)}))}}if(f({}),g(e),m){const e=new Date(Date.now()-864e5).toDateString();if(m===e){const e=Object.keys(d).length>0;o(e?e=>{const t={...e};return Object.keys(Ro).forEach(e=>{Object.values(d).filter(t=>t.category===e&&t.completed).length>0?(t[e].currentStreak+=1,t[e].currentStreak>t[e].longestStreak&&(t[e].longestStreak=t[e].currentStreak)):t[e].currentStreak=0}),t}:e=>{const t={...e};return Object.keys(Ro).forEach(e=>{t[e].currentStreak=0}),t})}}}})()},[$]),(0,e.useEffect)(()=>{$&&A&&(()=>{if(!A)return;const e=JSON.parse(localStorage.getItem("levelUpUsers")||"{}")[A],o=e?Math.floor((new Date-new Date(e.createdAt))/864e5):0,a=[];let l=0;Object.values(Lo).forEach(e=>{!Oe.includes(e.id)&&e.checkCondition(t,r,o)&&(a.push(e.id),l+=e.xpReward)}),a.length>0&&(ze(e=>[...e,...a]),n(e=>{let t=e.currentXP+l,n=e.currentLevel;for(;t>=Me(n);)t-=Me(n),n+=1;return{...e,currentXP:t,currentLevel:n}}))})()},[t.currentLevel,t.trophies,r,$,A]),(0,e.useEffect)(()=>{if($&&A){qe();try{localStorage.setItem("levelUpLastUser",A)}catch(e){console.error("Error saving last user:",e)}}},[t,r,d,p,D,T,_,m,A,$,ue,de,pe,be,De,Oe]),(0,e.useEffect)(()=>{const e=setTimeout(()=>{(()=>{if(me.trim())try{const e=JSON.parse(localStorage.getItem("levelUpUsers")||"{}"),t=[];Object.keys(e).forEach(n=>{if(n.toLowerCase().includes(me.toLowerCase())&&n!==A){const r=ue.some(e=>e.username===n),o=pe.includes(n),a=de.some(e=>e.from===n);r||o||a||t.push({username:n,createdAt:e[n].createdAt})}}),ye(t.slice(0,10))}catch(e){console.error("Error searching users:",e)}else ye([])})()},300);return()=>clearTimeout(e)},[me,A,ue,pe,de]),(0,e.useEffect)(()=>{const e=setInterval(()=>{q(new Date)},1e3);return()=>clearInterval(e)},[]),(0,e.useEffect)(()=>{et();const e=setInterval(et,6e4);return()=>clearInterval(e)},[a]);const Ge=Io[T],Ze=e=>{const t=[];return e.years>0&&t.push(`${e.years}y`),e.months>0&&t.push(`${e.months}m`),e.weeks>0&&t.push(`${e.weeks}w`),e.days>0&&t.push(`${e.days}d`),t.length>0?t.join(" "):"0d"},et=()=>{const e=new Date;e.toDateString();c(t=>{const n={...t};return Object.keys(n).forEach(t=>{const r=n[t],o=new Date(r.startDate),a=Math.floor((e-o)/864e5);n[t]={...r,currentStreak:a,longestStreak:Math.max(r.longestStreak,a)}}),n})};return M?(0,Gt.jsx)(Un,{children:(0,Gt.jsxs)(Mn,{children:[(0,Gt.jsx)(Wn,{children:"\ud83d\ude80 LevelUp"}),(0,Gt.jsxs)(Bn,{onSubmit:Ke,children:[(0,Gt.jsx)(Hn,{type:"text",placeholder:"Username",value:V.username,onChange:e=>K({...V,username:e.target.value}),required:!0}),(0,Gt.jsx)(Hn,{type:"password",placeholder:"Password",value:V.password,onChange:e=>K({...V,password:e.target.value}),required:!0}),!B&&(0,Gt.jsx)(Hn,{type:"password",placeholder:"Confirm Password",value:V.confirmPassword,onChange:e=>K({...V,confirmPassword:e.target.value}),required:!0}),(0,Gt.jsx)(Vn,{type:"submit",children:B?"Login":"Sign Up"})]}),(0,Gt.jsx)(Kn,{onClick:()=>H(!B),children:B?"Need an account? Sign up":"Already have an account? Login"}),Q&&(0,Gt.jsx)(Qn,{children:Q})]})}):(0,Gt.jsxs)(Zt,{children:[(0,Gt.jsxs)(Vr,{children:[(0,Gt.jsxs)(Kr,{children:[(0,Gt.jsx)(Yr,{children:(0,Gt.jsxs)(so,{children:[(0,Gt.jsx)(_o,{theme:Ge,children:"\ud83d\udd50 Digital Clock"}),(0,Gt.jsx)(Fo,{theme:Ge,children:(tt=J,tt.toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"}))}),(0,Gt.jsx)(To,{children:(e=>e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}))(J)})]})}),(0,Gt.jsx)(Xr,{children:(0,Gt.jsxs)(wn,{children:[(0,Gt.jsx)(Cn,{theme:Ge,children:"\ud83d\udcdd Reminders"}),(0,Gt.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!O.trim())return;const t={id:Xt(),text:O.trim(),createdAt:(new Date).toISOString()};N(e=>[...e,t]),z("")},children:[(0,Gt.jsx)(fn,{children:(0,Gt.jsx)(hn,{type:"text",value:O,onChange:e=>z(e.target.value),placeholder:"Add a reminder..."})}),(0,Gt.jsx)(mn,{type:"submit",theme:Ge,children:"Add Reminder"})]}),D.length>0&&(0,Gt.jsx)("div",{style:{marginTop:"20px"},children:D.map(e=>(0,Gt.jsxs)(En,{children:[(0,Gt.jsx)("span",{className:"reminder-text",children:e.text}),(0,Gt.jsx)("button",{className:"delete-btn",onClick:()=>{return t=e.id,void N(e=>e.filter(e=>e.id!==t));var t},children:"Delete"})]},e.id))})]})}),(0,Gt.jsx)(Jr,{children:(0,Gt.jsxs)(no,{children:[(0,Gt.jsx)(ro,{theme:Ge,children:"\ud83d\udcc5 Calendar"}),(0,Gt.jsx)(ao,{children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>(0,Gt.jsx)(lo,{children:e},e))}),(0,Gt.jsx)(oo,{children:(()=>{const e=(t=J,new Date(t.getFullYear(),t.getMonth()+1,0).getDate());var t;const n=(e=>new Date(e.getFullYear(),e.getMonth(),1).getDay())(J),r=[];for(let o=0;o<n;o++)r.push(null);for(let o=1;o<=e;o++)r.push(o);return r})().map((e,t)=>{const n=`${J.getFullYear()}-${J.getMonth()}-${e}`,r=X[n]&&X[n].length>0,o=e===J.getDate();let a="#121212",l="#FFFFFF",i="none",s="none";return o&&r?(a=Ge.accent,l="#121212",s=`0 0 15px ${Ge.accent}, inset 0 0 10px rgba(255,255,255,0.3)`,i="3px solid #FFFFFF"):o?(a=Ge.accent,l="#121212",s=`0 0 8px ${Ge.accent}`):r&&(a=Ge.accentDark,l="#FFFFFF",i=`2px dotted ${Ge.accent}`,s=`0 0 5px ${Ge.accentDark}`),(0,Gt.jsxs)(io,{theme:Ge,onClick:()=>e&&(e=>{const t=`${J.getFullYear()}-${J.getMonth()}-${e}`;ee({day:e,dateKey:t}),ne(!0)})(e),style:{backgroundColor:a,color:l,position:"relative",border:i,boxShadow:s,fontWeight:o||r?"bold":"normal",transform:o?"scale(1.05)":"scale(1)"},children:[e||"",o&&(0,Gt.jsx)("div",{style:{position:"absolute",top:"2px",right:"2px",fontSize:"8px",color:"#121212"},children:"\u25cf"}),r&&!o&&(0,Gt.jsx)("div",{style:{position:"absolute",bottom:"2px",right:"2px",fontSize:"8px",color:Ge.accent},children:"\ud83d\udcdd"})]},t)})}),Object.keys(X).length>0&&(0,Gt.jsxs)(Mr,{children:[(0,Gt.jsx)(Wr,{children:"\ud83d\udcdd Reminders"}),(0,Gt.jsx)(Br,{children:Object.entries(X).map(e=>{let[t,n]=e;const[r,o,a]=t.split("-").map(Number),l=`${o+1}/${a}`;return n.map((e,n)=>(0,Gt.jsxs)(Hr,{children:[(0,Gt.jsxs)("strong",{children:[l,":"]})," ",e]},`${t}-${n}`))})})]})]})}),(0,Gt.jsx)(Zr,{children:(0,Gt.jsxs)(uo,{theme:Ge,children:[(0,Gt.jsx)(co,{theme:Ge,children:"\ud83d\udeab Addiction Free Tracker"}),(0,Gt.jsxs)(fo,{onSubmit:e=>{if(e.preventDefault(),i.trim()){const e=Xt(),t={id:e,name:i.trim(),startDate:(new Date).toISOString()};l(e=>[...e,t]),c(t=>({...t,[e]:{currentStreak:0,longestStreak:0,startDate:(new Date).toISOString(),lastResetDate:null}})),s("")}},children:[(0,Gt.jsx)(po,{theme:Ge,type:"text",value:i,onChange:e=>s(e.target.value),placeholder:"Enter addiction to track (e.g., Smoking, Social Media)"}),(0,Gt.jsx)(ho,{theme:Ge,type:"submit",children:"Add Addiction"})]}),a.length>0&&(0,Gt.jsx)(mo,{children:a.map(e=>{const t=u[e.id]||{currentStreak:0,longestStreak:0,startDate:e.startDate},n=(e=>{const t=new Date(e),n=new Date-t;return{years:Math.floor(n/31536e6),months:Math.floor(n%31536e6/2592e6),weeks:Math.floor(n%2592e6/6048e5),days:Math.floor(n%6048e5/864e5)}})(t.startDate);return(0,Gt.jsxs)(go,{children:[(0,Gt.jsx)(Eo,{onClick:()=>{return t=e.id,l(e=>e.filter(e=>e.id!==t)),void c(e=>{const n={...e};return delete n[t],n});var t},children:"\xd7"}),(0,Gt.jsx)(vo,{theme:Ge,children:e.name}),(0,Gt.jsxs)(So,{children:[(0,Gt.jsx)(wo,{theme:Ge,children:Ze(n)}),(0,Gt.jsx)(Co,{children:"Time Clean"})]}),(0,Gt.jsxs)(yo,{children:[(0,Gt.jsxs)(bo,{children:[(0,Gt.jsx)(xo,{children:"Current Streak"}),(0,Gt.jsxs)(ko,{theme:Ge,children:[Math.floor((new Date-new Date(t.startDate))/864e5)," days"]})]}),(0,Gt.jsxs)(bo,{children:[(0,Gt.jsx)(xo,{children:"Longest Streak"}),(0,Gt.jsxs)(ko,{theme:Ge,children:[t.longestStreak," days"]})]})]}),(0,Gt.jsx)(jo,{onClick:()=>(e=>{const t=(new Date).toISOString();c(n=>({...n,[e]:{...n[e],currentStreak:0,startDate:t,lastResetDate:t}}))})(e.id),children:"Reset Streak (Relapsed)"})]},e.id)})})]})})]}),(0,Gt.jsxs)(Qr,{children:[(0,Gt.jsxs)(eo,{children:["Welcome, ",A,"!",(0,Gt.jsx)(to,{theme:Ge,onClick:()=>{qe(),localStorage.removeItem("levelUpLastUser"),L(!1),U(null),W(!0),K({username:"",password:"",confirmPassword:""}),Y(""),n({currentLevel:1,totalXP:0,streakDays:0}),o({}),f({}),N([]),G({}),l([]),c({}),ce([]),xe(!1),P("gold")},children:"Logout"})]}),(0,Gt.jsx)(Dn,{theme:Ge,onClick:()=>I(!0),children:"?"}),(0,Gt.jsx)(Dr,{theme:Ge,onClick:()=>je(!0),children:"\ud83e\udd16"}),(0,Gt.jsx)(Pn,{onClick:()=>{let e=document.getElementById("paypal-donate-container");if(e||(e=document.createElement("div"),e.id="paypal-donate-container",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.zIndex="10000",e.style.backgroundColor="rgba(0, 0, 0, 0.8)",e.style.padding="20px",e.style.borderRadius="10px",e.innerHTML='\n        <div style="background: white; padding: 20px; border-radius: 8px; position: relative;">\n          <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 20px; cursor: pointer;">&times;</button>\n          <div id="donate-button"></div>\n        </div>\n      ',document.body.appendChild(e)),window.PayPal)t();else{const e=document.createElement("script");e.src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js",e.charset="UTF-8",e.onload=()=>{t()},document.head.appendChild(e)}function t(){window.PayPal.Donation.Button({env:"production",hosted_button_id:"QAY95DLT7E6YW",image:{src:"https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif",alt:"Donate with PayPal button",title:"PayPal - The safer, easier way to pay online!"},onComplete:function(e){console.log("Donation completed:",e);const t=document.getElementById("paypal-donate-container");t&&t.remove(),alert("Thank you for your donation! Your support helps keep this app running.")}}).render("#donate-button")}},children:"\ud83d\udc9d"}),(0,Gt.jsx)(Yn,{theme:Ge,onClick:()=>le(!0),children:"\ud83d\udc65"}),(0,Gt.jsx)(Jn,{theme:Ge,onClick:()=>se(!0),children:"\u2699\ufe0f"}),(0,Gt.jsx)(Jn,{theme:Ge,onClick:()=>Ie(!0),style:{right:"70px"},children:"\ud83c\udfc5"}),(0,Gt.jsx)(Jn,{theme:Ge,onClick:()=>Le(!0),style:{right:"240px"},children:"\ud83c\udfc6"}),R&&(0,Gt.jsx)(Nn,{onClick:()=>I(!1),children:(0,Gt.jsxs)(On,{onClick:e=>e.stopPropagation(),children:[(0,Gt.jsx)(An,{onClick:()=>I(!1),children:"\xd7"}),(0,Gt.jsx)(zn,{children:"\ud83d\ude80 How to Earn XP"}),(0,Gt.jsxs)(Rn,{children:[(0,Gt.jsx)(In,{children:"\ud83d\udcdd Basic Task Completion"}),(0,Gt.jsx)($n,{children:"Complete daily tasks to earn XP and level up your character!"}),(0,Gt.jsxs)(Ln,{children:[(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Base XP:"})," Each completed task gives you 30 XP"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Uncompleting tasks:"})," Only removes 5 XP (minimum 0 XP)"]})]})]}),(0,Gt.jsxs)(Rn,{children:[(0,Gt.jsx)(In,{children:"\ud83d\udd25 Streak Bonus"}),(0,Gt.jsx)($n,{children:"Build consecutive daily streaks for bonus XP!"}),(0,Gt.jsxs)(Ln,{children:[(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Streak Bonus:"})," +5 XP per consecutive day"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Example:"})," 4-day streak = +20 XP bonus per task"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Total with streak:"})," 30 base + 20 streak = 50 XP per task"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Streak resets:"})," If you skip a day without completing tasks"]})]})]}),(0,Gt.jsxs)(Rn,{children:[(0,Gt.jsx)(In,{children:"\ud83d\udcc8 Task Count Bonus"}),(0,Gt.jsx)($n,{children:"Create more tasks to unlock bonus XP!"}),(0,Gt.jsxs)(Ln,{children:[(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Bonus Threshold:"})," Having more than 5 tasks"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Bonus Amount:"})," +3 XP per task completion"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Example:"})," With 7 tasks, each completion gives 33 XP (30 base + 3 bonus)"]})]})]}),(0,Gt.jsxs)(Rn,{children:[(0,Gt.jsx)(In,{children:"\ud83c\udfaf Maximum XP Example"}),(0,Gt.jsx)($n,{children:"Combine all bonuses for maximum XP gain:"}),(0,Gt.jsxs)(Ln,{children:[(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Base XP:"})," 30 XP"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Task Count Bonus:"})," +3 XP (6+ tasks)"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Streak Bonus:"})," +25 XP (5-day streak)"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Total:"})," 58 XP per task completion!"]})]})]}),(0,Gt.jsxs)(Rn,{children:[(0,Gt.jsx)(In,{children:"\ud83c\udfaf What's LevelUp's Purpose?"}),(0,Gt.jsx)($n,{children:"The app is designed to give dopamine when completing a task, turning life into a video game of some sorts. There's ranks for competition and levels - just remember we cannot stop you from cheating, you must be loyal and truthful to yourself if you want this to work. Cheating doesn't solve anything - the challenge is what makes you grow stronger."})]}),(0,Gt.jsxs)(Rn,{children:[(0,Gt.jsx)(In,{children:"\ud83c\udfc6 Trophy-Based Ranking System"}),(0,Gt.jsx)($n,{children:"Progress through ranks by earning trophies from completing tasks:"}),(0,Gt.jsxs)(Ln,{children:[(0,Gt.jsx)("li",{children:"\ud83d\udd30 Unranked (0 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83c\udf3e Peasant (1-10 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83c\udfaf Noob 1 (11-25 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83c\udfaf Noob 2 (26-35 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83c\udfaf Noob 3 (36-50 Trophies)"}),(0,Gt.jsx)("li",{children:"\u2694\ufe0f Pro 1 (51-65 Trophies)"}),(0,Gt.jsx)("li",{children:"\u2694\ufe0f Pro 2 (66-80 Trophies)"}),(0,Gt.jsx)("li",{children:"\u2694\ufe0f Pro 3 (81-100 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83d\udc51 Legendary 1 (101-130 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83d\udc51 Legendary 2 (131-165 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83d\udc51 Legendary 3 (166-200 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83d\udd25 Master 1 (201-240 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83d\udd25 Master 2 (241-280 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83d\udd25 Master 3 (281-325 Trophies)"}),(0,Gt.jsx)("li",{children:"\u26a1 Grandmaster (326-419 Trophies)"}),(0,Gt.jsx)("li",{children:"\ud83d\udc8e TOP G (420+ Trophies)"})]})]}),(0,Gt.jsxs)(Rn,{children:[(0,Gt.jsx)(In,{children:"\ud83c\udfc6 Trophy System"}),(0,Gt.jsx)($n,{children:"Earn trophies by completing tasks with streak bonuses:"}),(0,Gt.jsxs)(Ln,{children:[(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Base Trophy:"})," 1 trophy per completed task"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Streak Bonus:"})," +1 trophy per day of current streak (3+ days required)"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Example:"})," 5-day fitness streak = 1 base + 5 streak = 6 trophies per fitness task"]}),(0,Gt.jsxs)("li",{children:[(0,Gt.jsx)("strong",{children:"Category Streaks:"})," Each task category (fitness, wellbeing, etc.) has its own streak"]})]})]})]})}),ae&&(0,Gt.jsx)(qn,{onClick:()=>le(!1),children:(0,Gt.jsxs)(Xn,{onClick:e=>e.stopPropagation(),children:[(0,Gt.jsx)(An,{onClick:()=>le(!1),children:"\xd7"}),(0,Gt.jsx)(Cr,{children:"\ud83d\udc65 Friends"}),(0,Gt.jsx)(Er,{type:"text",placeholder:"Search username...",value:me,onChange:e=>ge(e.target.value)}),ve.length>0&&(0,Gt.jsxs)(fr,{children:[(0,Gt.jsx)("h4",{style:{color:"#FFD700",marginBottom:"10px"},children:"Search Results:"}),ve.map((e,t)=>(0,Gt.jsxs)(pr,{children:[(0,Gt.jsx)(hr,{children:e.username}),(0,Gt.jsx)(Sr,{theme:Ge,onClick:()=>(e=>{try{he(t=>[...t,e]);const t=JSON.parse(localStorage.getItem(`levelUpFriendRequests_${e}`)||"[]");t.push({from:A,timestamp:(new Date).toISOString(),id:Date.now()}),localStorage.setItem(`levelUpFriendRequests_${e}`,JSON.stringify(t)),ye(t=>t.filter(t=>t.username!==e))}catch(t){console.error("Error sending friend request:",t)}})(e.username),children:"Add Friend"})]},t))]}),de.length>0&&(0,Gt.jsxs)("div",{style:{marginTop:"20px"},children:[(0,Gt.jsx)("h4",{style:{color:"#FFD700",marginBottom:"10px"},children:"Friend Requests:"}),de.map((e,t)=>(0,Gt.jsxs)(mr,{children:[(0,Gt.jsxs)(gr,{children:[(0,Gt.jsx)(vr,{children:e.from}),(0,Gt.jsx)(yr,{children:new Date(e.timestamp).toLocaleDateString()})]}),(0,Gt.jsxs)(br,{children:[(0,Gt.jsx)(xr,{onClick:()=>((e,t)=>{try{const n={username:t,addedAt:(new Date).toISOString()};ce(e=>[...e,n]);const r=JSON.parse(localStorage.getItem(`levelUpFriends_${t}`)||"[]");r.push({username:A,addedAt:(new Date).toISOString()}),localStorage.setItem(`levelUpFriends_${t}`,JSON.stringify(r)),fe(t=>t.filter(t=>t.id!==e));const o=JSON.parse(localStorage.getItem(`levelUpSentFriendRequests_${t}`)||"[]").filter(e=>e!==A);localStorage.setItem(`levelUpSentFriendRequests_${t}`,JSON.stringify(o))}catch(n){console.error("Error accepting friend request:",n)}})(e.id,e.from),children:"Accept"}),(0,Gt.jsx)(kr,{onClick:()=>((e,t)=>{try{fe(t=>t.filter(t=>t.id!==e));const n=JSON.parse(localStorage.getItem(`levelUpSentFriendRequests_${t}`)||"[]").filter(e=>e!==A);localStorage.setItem(`levelUpSentFriendRequests_${t}`,JSON.stringify(n))}catch(n){console.error("Error rejecting friend request:",n)}})(e.id,e.from),children:"Reject"})]})]},t))]}),(0,Gt.jsxs)("div",{style:{marginTop:"20px"},children:[(0,Gt.jsxs)("h4",{style:{color:"#FFD700",marginBottom:"10px"},children:["Your Friends (",ue.length,"):"]}),(0,Gt.jsx)(jr,{children:0===ue.length?(0,Gt.jsx)("div",{style:{color:"#CCCCCC",textAlign:"center",padding:"20px"},children:"No friends yet. Search for users to add them!"}):ue.map((e,t)=>(0,Gt.jsxs)(_r,{children:[(0,Gt.jsx)("span",{children:e.username}),(0,Gt.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,Gt.jsx)("button",{style:{background:"#4CAF50",color:"white",border:"none",padding:"6px 12px",borderRadius:"4px",cursor:"pointer",fontSize:"0.8rem"},onClick:()=>(e=>{try{const t=localStorage.getItem(`levelUpUser_${e}`),n=localStorage.getItem(`levelUpStats_${e}`),r=localStorage.getItem(`levelUpIsPublicAccount_${e}`),o=!!r&&JSON.parse(r);if(o&&t&&n){const r=JSON.parse(t),a=JSON.parse(n);Se({username:e,user:r,stats:a,isPublic:o})}else Se({username:e,isPublic:!1});Ce(!0)}catch(t){console.error("Error viewing profile:",t)}})(e.username),children:"View Profile"}),(0,Gt.jsx)(wr,{onClick:()=>(e=>{try{ce(t=>t.filter(t=>t.username!==e));const t=JSON.parse(localStorage.getItem(`levelUpFriends_${e}`)||"[]").filter(e=>e.username!==A);localStorage.setItem(`levelUpFriends_${e}`,JSON.stringify(t))}catch(t){console.error("Error removing friend:",t)}})(e.username),children:"Remove"})]})]},t))})]})]})}),we&&ke&&(0,Gt.jsx)(er,{onClick:()=>Ce(!1),children:(0,Gt.jsxs)(tr,{onClick:e=>e.stopPropagation(),children:[(0,Gt.jsx)(An,{onClick:()=>Ce(!1),children:"\xd7"}),(0,Gt.jsxs)(nr,{children:[(0,Gt.jsx)(rr,{theme:Ge,children:ke.username.charAt(0).toUpperCase()}),(0,Gt.jsxs)(or,{children:[(0,Gt.jsx)(ar,{children:ke.username}),ke.isPublic&&ke.user&&(0,Gt.jsxs)(lr,{children:["Level ",ke.user.currentLevel]})]})]}),ke.isPublic&&ke.stats?(0,Gt.jsx)(ir,{children:Object.entries(ke.stats).map(e=>{var t;let[n,r]=e;return(0,Gt.jsxs)(sr,{children:[(0,Gt.jsx)(ur,{theme:Ge,children:r.totalCompleted}),(0,Gt.jsx)(cr,{children:(null===(t=Ro[n])||void 0===t?void 0:t.name)||n})]},n)})}):(0,Gt.jsx)(dr,{children:"\ud83d\udd12 This user's profile is private"})]})}),ie&&(0,Gt.jsx)(Gn,{onClick:()=>se(!1),children:(0,Gt.jsxs)(Zn,{onClick:e=>e.stopPropagation(),children:[(0,Gt.jsx)(An,{onClick:()=>se(!1),children:"\xd7"}),(0,Gt.jsx)(Cr,{children:"\u2699\ufe0f Settings"}),(0,Gt.jsxs)(Fr,{children:[(0,Gt.jsx)("span",{children:"Theme"}),(0,Gt.jsx)(Pr,{value:T,onChange:e=>P(e.target.value),children:Object.entries(Io).map(e=>{let[t,n]=e;return(0,Gt.jsx)("option",{value:t,children:n.name},t)})})]}),(0,Gt.jsxs)(Fr,{children:[(0,Gt.jsx)("span",{children:"Public Account"}),(0,Gt.jsx)(Tr,{isOn:be,onClick:()=>xe(!be)})]}),(0,Gt.jsxs)(Fr,{children:[(0,Gt.jsx)("span",{children:"Dev Mode (Testing Features)"}),(0,Gt.jsx)(Tr,{isOn:De,onClick:()=>Ne(!De)})]})]})}),Re&&(0,Gt.jsx)(Gn,{onClick:()=>Ie(!1),children:(0,Gt.jsxs)(Zn,{onClick:e=>e.stopPropagation(),children:[(0,Gt.jsx)(An,{onClick:()=>Ie(!1),children:"\xd7"}),(0,Gt.jsx)(Cr,{children:"\ud83c\udfc5 Achievements"}),(0,Gt.jsx)("div",{style:{maxHeight:"400px",overflowY:"auto"},children:Object.values(Lo).map(e=>{const t=Oe.includes(e.id);return(0,Gt.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"15px",marginBottom:"10px",backgroundColor:t?"#2A4A2A":"#2A2A2A",borderRadius:"8px",border:"2px solid "+(t?"#4CAF50":"#444"),opacity:t?1:.6},children:[(0,Gt.jsx)("div",{style:{fontSize:"2rem",marginRight:"15px"},children:e.emoji}),(0,Gt.jsxs)("div",{style:{flex:1},children:[(0,Gt.jsxs)("div",{style:{color:t?"#4CAF50":"#CCCCCC",fontWeight:"bold",fontSize:"1.1rem",marginBottom:"5px"},children:[e.name,"gold"===e.type&&" \ud83c\udf1f"]}),(0,Gt.jsx)("div",{style:{color:"#CCCCCC",fontSize:"0.9rem",marginBottom:"5px"},children:e.description}),(0,Gt.jsxs)("div",{style:{color:Ge.accent,fontSize:"0.8rem",fontWeight:"bold"},children:["+",e.xpReward," XP"]})]}),(0,Gt.jsx)("div",{style:{color:t?"#4CAF50":"#666",fontSize:"1.5rem",fontWeight:"bold"},children:t?"\u2713":"\ud83d\udd12"})]},e.id)})}),(0,Gt.jsxs)("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#1E1E1E",borderRadius:"8px",textAlign:"center"},children:[(0,Gt.jsx)("div",{style:{color:Ge.accent,fontWeight:"bold",marginBottom:"10px"},children:"Achievement Progress"}),(0,Gt.jsxs)("div",{style:{color:"#CCCCCC"},children:["Regular: ",Oe.filter(e=>{var t;return"regular"===(null===(t=Lo[e])||void 0===t?void 0:t.type)}).length,"/",Object.values(Lo).filter(e=>"regular"===e.type).length]}),(0,Gt.jsxs)("div",{style:{color:"#FFD700"},children:["Golden: ",Oe.filter(e=>{var t;return"gold"===(null===(t=Lo[e])||void 0===t?void 0:t.type)}).length,"/",Object.values(Lo).filter(e=>"gold"===e.type).length]})]})]})}),$e&&(0,Gt.jsx)(Gn,{onClick:()=>Le(!1),children:(0,Gt.jsxs)(Zn,{onClick:e=>e.stopPropagation(),children:[(0,Gt.jsx)(An,{onClick:()=>Le(!1),children:"\xd7"}),(0,Gt.jsx)(Cr,{children:"\ud83c\udfc6 Leaderboard"}),(0,Gt.jsxs)("div",{style:{display:"flex",marginBottom:"20px",borderRadius:"8px",overflow:"hidden"},children:[(0,Gt.jsx)("button",{onClick:()=>Ue("global"),style:{flex:1,padding:"12px",backgroundColor:"global"===Ae?Ge.accent:"#2A2A2A",color:"global"===Ae?"#FFD700"===Ge.accent?"#000":"#fff":"#CCCCCC",border:"none",cursor:"pointer",fontWeight:"bold"},children:"\ud83c\udf0d Global"}),(0,Gt.jsx)("button",{onClick:()=>Ue("friends"),style:{flex:1,padding:"12px",backgroundColor:"friends"===Ae?Ge.accent:"#2A2A2A",color:"friends"===Ae?"#FFD700"===Ge.accent?"#000":"#fff":"#CCCCCC",border:"none",cursor:"pointer",fontWeight:"bold"},children:"\ud83d\udc65 Friends"})]}),(0,Gt.jsx)("div",{style:{maxHeight:"400px",overflowY:"auto"},children:"global"===Ae?(()=>{const e=JSON.parse(localStorage.getItem("levelUpUsers")||"{}"),t=Object.entries(e).filter(e=>{let[t,n]=e;return!1!==n.isPublicAccount}).map(e=>{let[t,n]=e;return{username:t,trophies:n.trophies||0,level:n.currentLevel||1,rank:Ve(n.trophies||0)}}).sort((e,t)=>t.trophies-e.trophies);return t.length>0?t.map((e,t)=>(0,Gt.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"15px",marginBottom:"10px",backgroundColor:e.username===A?"#2A4A2A":"#2A2A2A",borderRadius:"8px",border:`2px solid ${e.username===A?Ge.accent:"#444"}`},children:[(0,Gt.jsx)("div",{style:{fontSize:"1.5rem",marginRight:"15px",minWidth:"40px"},children:0===t?"\ud83e\udd47":1===t?"\ud83e\udd48":2===t?"\ud83e\udd49":`#${t+1}`}),(0,Gt.jsx)("div",{style:{fontSize:"1.5rem",marginRight:"15px"},children:e.rank.emoji}),(0,Gt.jsxs)("div",{style:{flex:1},children:[(0,Gt.jsxs)("div",{style:{color:e.username===A?Ge.accent:"#FFFFFF",fontWeight:"bold",fontSize:"1.1rem",marginBottom:"5px"},children:[e.username," ",e.username===A?"(You)":""]}),(0,Gt.jsxs)("div",{style:{color:"#CCCCCC",fontSize:"0.9rem"},children:[e.rank.rank," \u2022 Level ",e.level]})]}),(0,Gt.jsxs)("div",{style:{color:Ge.accent,fontSize:"1.2rem",fontWeight:"bold"},children:["\ud83c\udfc6 ",e.trophies]})]},e.username)):(0,Gt.jsx)("div",{style:{textAlign:"center",color:"#CCCCCC",padding:"40px"},children:"No public accounts found"})})():(()=>{const e=JSON.parse(localStorage.getItem("levelUpUsers")||"{}"),n=ue.map(t=>{const n=e[t];return n?{username:t,trophies:n.trophies||0,level:n.currentLevel||1,rank:Ve(n.trophies||0)}:null}).filter(Boolean).sort((e,t)=>t.trophies-e.trophies),r={username:A,trophies:t.trophies||0,level:t.currentLevel||1,rank:Ve(t.trophies||0)};return n.find(e=>e.username===A)||(n.push(r),n.sort((e,t)=>t.trophies-e.trophies)),n.length>0?n.map((e,t)=>(0,Gt.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"15px",marginBottom:"10px",backgroundColor:e.username===A?"#2A4A2A":"#2A2A2A",borderRadius:"8px",border:`2px solid ${e.username===A?Ge.accent:"#444"}`},children:[(0,Gt.jsx)("div",{style:{fontSize:"1.5rem",marginRight:"15px",minWidth:"40px"},children:0===t?"\ud83e\udd47":1===t?"\ud83e\udd48":2===t?"\ud83e\udd49":`#${t+1}`}),(0,Gt.jsx)("div",{style:{fontSize:"1.5rem",marginRight:"15px"},children:e.rank.emoji}),(0,Gt.jsxs)("div",{style:{flex:1},children:[(0,Gt.jsxs)("div",{style:{color:e.username===A?Ge.accent:"#FFFFFF",fontWeight:"bold",fontSize:"1.1rem",marginBottom:"5px"},children:[e.username," ",e.username===A?"(You)":""]}),(0,Gt.jsxs)("div",{style:{color:"#CCCCCC",fontSize:"0.9rem"},children:[e.rank.rank," \u2022 Level ",e.level]})]}),(0,Gt.jsxs)("div",{style:{color:Ge.accent,fontSize:"1.2rem",fontWeight:"bold"},children:["\ud83c\udfc6 ",e.trophies]})]},e.username)):(0,Gt.jsx)("div",{style:{textAlign:"center",color:"#CCCCCC",padding:"40px"},children:"Add friends to see the friends leaderboard!"})})()})]})}),(0,Gt.jsx)(en,{children:(0,Gt.jsx)(tn,{theme:Ge,children:"\ud83d\ude80 LevelUp"})}),(0,Gt.jsxs)(jn,{children:[(0,Gt.jsx)(_n,{theme:Ge,children:Ve(t.trophies||0).emoji}),(0,Gt.jsx)(Fn,{theme:Ge,children:Ve(t.trophies||0).rank}),(0,Gt.jsxs)(Tn,{children:["\ud83c\udfc6 ",t.trophies||0," Trophies",De&&(0,Gt.jsxs)("div",{style:{display:"flex",gap:"5px",marginTop:"8px",justifyContent:"center",flexWrap:"wrap"},children:[(0,Gt.jsx)("button",{onClick:()=>Ye(-10),style:{background:Ge.accent,color:"#FFD700"===Ge.accent?"#000":"#fff",border:"none",padding:"4px 8px",borderRadius:"4px",cursor:"pointer",fontSize:"0.7rem",fontWeight:"bold"},children:"-10"}),(0,Gt.jsx)("button",{onClick:()=>Ye(-1),style:{background:Ge.accent,color:"#FFD700"===Ge.accent?"#000":"#fff",border:"none",padding:"4px 8px",borderRadius:"4px",cursor:"pointer",fontSize:"0.7rem",fontWeight:"bold"},children:"-1"}),(0,Gt.jsx)("button",{onClick:()=>Ye(1),style:{background:Ge.accent,color:"#FFD700"===Ge.accent?"#000":"#fff",border:"none",padding:"4px 8px",borderRadius:"4px",cursor:"pointer",fontSize:"0.7rem",fontWeight:"bold"},children:"+1"}),(0,Gt.jsx)("button",{onClick:()=>Ye(10),style:{background:Ge.accent,color:"#FFD700"===Ge.accent?"#000":"#fff",border:"none",padding:"4px 8px",borderRadius:"4px",cursor:"pointer",fontSize:"0.7rem",fontWeight:"bold"},children:"+10"})]})]}),t.streakDays>0&&(0,Gt.jsxs)("div",{style:{color:"#4CAF50",fontSize:"0.9rem",marginTop:"5px",fontWeight:"bold"},children:["\ud83d\udd25 ",t.streakDays," day streak (+",Be(t.streakDays)," XP bonus)"]})]}),(0,Gt.jsx)(qr,{children:(0,Gt.jsxs)(nn,{children:[(0,Gt.jsxs)(rn,{theme:Ge,children:["Level ",t.currentLevel]}),(0,Gt.jsx)(on,{children:(0,Gt.jsx)(an,{progress:(()=>{const e=We();return Math.min(t.currentXP/e*100,100)})(),theme:Ge})}),(0,Gt.jsxs)(ln,{children:[t.currentXP," / ",We()," XP"]}),(0,Gt.jsx)(sn,{children:Object.entries(Ro).map(e=>{let[t,n]=e;return(0,Gt.jsxs)(un,{children:[(0,Gt.jsx)("div",{children:n.emoji}),(0,Gt.jsx)(cn,{children:n.name})]},t)})})]})}),(0,Gt.jsxs)(dn,{children:[(0,Gt.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!v.trim())return;const t=Xt(),n={id:t,label:v.trim(),category:b,completed:!1,createdAt:(new Date).toISOString()};f(e=>({...e,[t]:n})),y("")},children:[(0,Gt.jsxs)(fn,{children:[(0,Gt.jsx)(pn,{children:"Task Description"}),(0,Gt.jsx)(hn,{type:"text",value:v,onChange:e=>y(e.target.value),placeholder:"e.g., Worked out for 30 minutes"})]}),(0,Gt.jsxs)(fn,{children:[(0,Gt.jsx)(pn,{children:"Category"}),(0,Gt.jsx)("select",{value:b,onChange:e=>x(e.target.value),style:{flex:1,padding:"12px",backgroundColor:"#2a2a2a",border:"1px solid #444",borderRadius:"8px",color:"white",fontSize:"16px"},children:Object.entries(Ro).map(e=>{let[t,n]=e;return(0,Gt.jsxs)("option",{value:t,children:[n.emoji," ",n.name]},t)})})]}),(0,Gt.jsx)(mn,{type:"submit",theme:Ge,children:"Add Task"})]}),(0,Gt.jsxs)("div",{style:{marginTop:"20px"},children:[(0,Gt.jsx)("h3",{style:{color:Ge.accent,marginBottom:"15px"},children:"Daily Tasks"}),0===Object.values(d).length?(0,Gt.jsx)("p",{style:{color:"#888",fontStyle:"italic"},children:"No tasks added yet"}):(0,Gt.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:Object.values(d).map(e=>(0,Gt.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"10px",backgroundColor:"#2a2a2a",borderRadius:"8px",border:`1px solid ${e.completed?Ge.accent:"#444"}`},children:[(0,Gt.jsx)("input",{type:"checkbox",checked:e.completed,onChange:()=>He(e.id),style:{marginRight:"10px",transform:"scale(1.2)"}}),(0,Gt.jsxs)("span",{style:{flex:1,color:e.completed?Ge.accent:"white",textDecoration:e.completed?"line-through":"none"},children:[Ro[e.category].emoji," ",e.label]}),(0,Gt.jsx)("button",{onClick:()=>{return t=e.id,void f(e=>{const n={...e};return delete n[t],n});var t},style:{background:"none",border:"none",color:"#ff4444",cursor:"pointer",fontSize:"18px",padding:"5px"},children:"\xd7"})]},e.id))})]}),(0,Gt.jsx)(Gr,{children:(0,Gt.jsxs)("div",{style:{marginTop:"30px"},children:[(0,Gt.jsx)("h3",{style:{color:Ge.accent,marginBottom:"15px"},children:"Long-Term Goals"}),(0,Gt.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!k.trim())return;const t=Xt(),n={id:t,label:k.trim(),category:w,completed:!1,createdAt:(new Date).toISOString()};h(e=>({...e,[t]:n})),S("")},style:{marginBottom:"20px"},children:[(0,Gt.jsxs)(fn,{children:[(0,Gt.jsx)("input",{type:"text",value:k,onChange:e=>S(e.target.value),placeholder:"Enter your long-term goal...",style:{flex:1,padding:"12px",backgroundColor:"#2a2a2a",border:`1px solid ${Ge.accent}`,borderRadius:"8px",color:"white",fontSize:"16px"}}),(0,Gt.jsx)("select",{value:w,onChange:e=>C(e.target.value),style:{padding:"12px",backgroundColor:"#2a2a2a",border:`1px solid ${Ge.accent}`,borderRadius:"8px",color:"white",fontSize:"16px"},children:Object.entries(Ro).map(e=>{let[t,n]=e;return(0,Gt.jsxs)("option",{value:t,children:[n.emoji," ",n.name]},t)})})]}),(0,Gt.jsx)(mn,{type:"submit",theme:Ge,children:"Add Long-Term Goal"})]}),0===Object.values(p).length?(0,Gt.jsx)("p",{style:{color:"#888",fontStyle:"italic"},children:"No long-term goals added yet"}):(0,Gt.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:Object.values(p).map(e=>{const t=new Date(e.createdAt),r=new Date,a=Math.ceil((r-t)/864e5),l=Math.max(1,a);return(0,Gt.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"12px",backgroundColor:"#2a2a2a",borderRadius:"8px",border:`1px solid ${e.completed?Ge.accent:"#444"}`},children:[(0,Gt.jsx)("input",{type:"checkbox",checked:e.completed,onChange:()=>{return t=e.id,void h(e=>{const r={...e,[t]:{...e[t],completed:!e[t].completed}},a=r[t];if(o(e=>{const t={...e};return a.completed?t[a.category].totalCompleted+=1:t[a.category].totalCompleted=Math.max(0,t[a.category].totalCompleted-1),t}),a.completed){const e=new Date(a.createdAt),t=new Date,r=Math.ceil((t-e)/864e5),o=Math.max(1,r);n(e=>({...e,trophies:(e.trophies||0)+o}))}return r});var t},style:{marginRight:"12px",transform:"scale(1.2)"}}),(0,Gt.jsxs)("div",{style:{flex:1},children:[(0,Gt.jsxs)("span",{style:{color:e.completed?Ge.accent:"white",textDecoration:e.completed?"line-through":"none",fontSize:"16px"},children:[Ro[e.category].emoji," ",e.label]}),(0,Gt.jsx)("div",{style:{fontSize:"12px",color:"#888",marginTop:"4px"},children:e.completed?`Completed! Earned ${l} \ud83c\udfc6`:`${a} days active \u2022 ${l} \ud83c\udfc6 when completed`})]}),(0,Gt.jsx)("button",{onClick:()=>{return t=e.id,void h(e=>{const n={...e};return delete n[t],n});var t},style:{background:"none",border:"none",color:"#ff4444",cursor:"pointer",fontSize:"18px",padding:"5px"},children:"\xd7"})]},e.id)})})]})})]}),(0,Gt.jsx)(gn,{children:Object.entries(Ro).map(e=>{let[t,n]=e;return(0,Gt.jsxs)(vn,{children:[(0,Gt.jsxs)(yn,{theme:Ge,children:[n.emoji," ",n.name]}),(0,Gt.jsxs)(bn,{children:[(0,Gt.jsx)("span",{className:"label",children:"Current Streak:"}),(0,Gt.jsx)("span",{className:"value",children:r[t].currentStreak})]}),(0,Gt.jsxs)(bn,{children:[(0,Gt.jsx)("span",{className:"label",children:"Longest Streak:"}),(0,Gt.jsx)("span",{className:"value",children:r[t].longestStreak})]}),(0,Gt.jsxs)(bn,{children:[(0,Gt.jsx)("span",{className:"label",children:"Total Completed:"}),(0,Gt.jsx)("span",{className:"value positive",children:r[t].totalCompleted})]})]},t)})}),(0,Gt.jsxs)("div",{style:{marginBottom:"30px"},children:[(0,Gt.jsx)("h2",{style:{color:Ge.accent,marginBottom:"15px",textAlign:"center"},children:"All-Time Stats"}),(0,Gt.jsxs)(gn,{children:[(0,Gt.jsxs)(vn,{children:[(0,Gt.jsx)(yn,{theme:Ge,children:"\ud83d\udcc5 Account Age"}),(0,Gt.jsxs)(bn,{children:[(0,Gt.jsx)("span",{className:"label",children:"Days Active:"}),(0,Gt.jsx)("span",{className:"value positive",children:(()=>{const e=JSON.parse(localStorage.getItem("levelUpUsers")||"{}")[A];return e?Math.floor((new Date-new Date(e.createdAt))/864e5):0})()})]})]}),(0,Gt.jsxs)(vn,{children:[(0,Gt.jsx)(yn,{theme:Ge,children:"\ud83c\udfc6 Total Trophies"}),(0,Gt.jsxs)(bn,{children:[(0,Gt.jsx)("span",{className:"label",children:"Earned:"}),(0,Gt.jsx)("span",{className:"value positive",children:t.trophies||0})]})]}),(0,Gt.jsxs)(vn,{children:[(0,Gt.jsx)(yn,{theme:Ge,children:"\ud83c\udf96\ufe0f Achievements"}),(0,Gt.jsxs)(bn,{children:[(0,Gt.jsx)("span",{className:"label",children:"Regular:"}),(0,Gt.jsx)("span",{className:"value positive",children:Oe.filter(e=>{var t;return"regular"===(null===(t=Lo[e])||void 0===t?void 0:t.type)}).length})]}),(0,Gt.jsxs)(bn,{children:[(0,Gt.jsx)("span",{className:"label",children:"Golden:"}),(0,Gt.jsx)("span",{className:"value positive",children:Oe.filter(e=>{var t;return"gold"===(null===(t=Lo[e])||void 0===t?void 0:t.type)}).length})]})]})]})]}),(0,Gt.jsxs)("div",{style:{marginBottom:"30px"},children:[(0,Gt.jsx)("h2",{style:{color:Ge.accent,marginBottom:"15px",textAlign:"center"},children:"Daily Quotes"}),E&&(0,Gt.jsxs)(xn,{children:[(0,Gt.jsxs)(kn,{children:['"',E.text,'"']}),(0,Gt.jsxs)(Sn,{theme:Ge,children:["\u2014 ",E.author]})]})]})]})]}),Ee&&(0,Gt.jsx)(Nr,{onClick:()=>je(!1),children:(0,Gt.jsxs)(Or,{onClick:e=>e.stopPropagation(),children:[(0,Gt.jsxs)(zr,{children:[(0,Gt.jsx)(Rr,{theme:Ge,children:"\ud83e\udd16 Clarence - Your AI Companion"}),(0,Gt.jsx)(An,{onClick:()=>je(!1),children:"\xd7"})]}),(0,Gt.jsx)(Ir,{children:_e.map((e,t)=>(0,Gt.jsxs)($r,{isUser:e.isUser,theme:Ge,children:[(0,Gt.jsxs)("strong",{children:[e.isUser?"You":"Clarence",":"]})," ",e.text]},t))}),(0,Gt.jsxs)(Lr,{children:[(0,Gt.jsx)(Ar,{type:"text",value:Te,onChange:e=>Pe(e.target.value),placeholder:"Ask me anything or share how you're feeling...",onKeyPress:e=>"Enter"===e.key&&Qe(),theme:Ge}),(0,Gt.jsx)(Ur,{onClick:Qe,theme:Ge,children:"Send"})]})]})}),te&&(0,Gt.jsx)(Po,{onClick:()=>ne(!1),children:(0,Gt.jsxs)(Do,{onClick:e=>e.stopPropagation(),children:[(0,Gt.jsx)(An,{onClick:()=>ne(!1),children:"\xd7"}),(0,Gt.jsxs)(No,{theme:Ge,children:["\ud83d\udcc5 Reminders for ",null===Z||void 0===Z?void 0:Z.day]}),(0,Gt.jsx)(Oo,{children:Z&&X[Z.dateKey]&&X[Z.dateKey].map(e=>(0,Gt.jsxs)(zo,{children:[(0,Gt.jsx)("span",{className:"reminder-text",children:e.text}),(0,Gt.jsx)("button",{className:"delete-btn",onClick:()=>{return t=Z.dateKey,n=e.id,void G(e=>({...e,[t]:e[t].filter(e=>e.id!==n)}));var t,n},children:"Delete"})]},e.id))}),(0,Gt.jsxs)("form",{onSubmit:e=>{e.preventDefault(),re.trim()&&Z&&(G(e=>({...e,[Z.dateKey]:[...e[Z.dateKey]||[],{id:Xt(),text:re.trim(),date:Z.day}]})),oe(""),ne(!1),ee(null))},children:[(0,Gt.jsx)(hn,{type:"text",value:re,onChange:e=>oe(e.target.value),placeholder:"Add a reminder for this date...",style:{marginBottom:"15px"}}),(0,Gt.jsx)(mn,{type:"submit",theme:Ge,children:"Add Reminder"})]})]})})]});var tt};t.createRoot(document.getElementById("root")).render((0,Gt.jsx)(e.StrictMode,{children:(0,Gt.jsx)(Uo,{})}))})()})();
//# sourceMappingURL=main.c57fd050.js.map