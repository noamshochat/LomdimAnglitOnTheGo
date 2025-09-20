/*! For license information please see main.ee82ea71.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var w=y.prototype=new v;w.constructor=y,m(w,b.prototype),w.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,a)&&!E.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:k.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+z(s,0):i,x(o)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),T(o,t,a,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",x(e))for(var u=0;u<e.length;u++){var c=i+z(l=e[u],u);s+=T(l,t,a,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=T(l=l.value,t,a,c=i+z(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function F(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},j={transition:null},M={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:j,ReactCurrentOwner:k};function R(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:F,forEach:function(e,t,n){F(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return F(e,(function(){t++})),t},toArray:function(e){return F(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=o,t.PureComponent=y,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.act=R,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.transition;j.transition={};try{e()}finally{j.transition=t}},t.unstable_act=R,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,h=3,p=!1,m=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function x(e){if(g=!1,w(e),!m)if(null!==r(u))m=!0,j(S);else{var t=r(c);null!==t&&M(x,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,v(_),_=-1),p=!0;var i=h;try{for(w(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!T());){var o=f.callback;if("function"===typeof o){f.callback=null,h=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),w(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&M(x,d.startTime-n),s=!1}return s}finally{f=null,h=i,p=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,C=null,_=-1,P=5,z=-1;function T(){return!(t.unstable_now()-z<P)}function F(){if(null!==C){var e=t.unstable_now();z=e;var n=!0;try{n=C(!0,e)}finally{n?k():(E=!1,C=null)}}else E=!1}if("function"===typeof y)k=function(){y(F)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,O=N.port2;N.port1.onmessage=F,k=function(){O.postMessage(null)}}else k=function(){b(F,0)};function j(e){C=e,E||(E=!0,k())}function M(e,n){_=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,j(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(v(_),_=-1):g=!0,M(x,i-o))):(e.sortIndex=l,n(u,e),m||p||(m=!0,j(S))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},494:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(43)),u=l(n(838)),c={resize:!0,useWorker:!1},d={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0};function f(e,t){return e||t?e:d}t.default=function(e){var t=e.style,n=e.className,a=e.width,i=e.height,o=e.globalOptions,l=e.onInit,d=(0,s.useRef)(null),h=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(d.current)return h.current=u.default.create(d.current,r(r({},c),o)),null===l||void 0===l||l({confetti:h.current}),function(){var e;null===(e=h.current)||void 0===e||e.reset()}}),[]),s.default.createElement("canvas",{ref:d,style:f(t,n),className:n,width:a,height:i})}},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},p={};function m(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(p,e)||!d.call(h,e)&&(f.test(e)?p[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var j=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var M=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=M&&e[M]||e["@@iterator"])?e:null}var I,L=Object.assign;function D(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var A=!1;function $(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function W(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case C:return"Profiler";case E:return"StrictMode";case T:return"Suspense";case F:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ie(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(he).forEach((function(e){pe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var be=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(be[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function xe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function Ce(e){if(e=ya(e)){if("function"!==typeof Se)throw Error(i(280));var t=e.stateNode;t&&(t=xa(t),Se(e.stateNode,e.type,t))}}function _e(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function Pe(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function ze(e,t){return e(t)}function Te(){}var Fe=!1;function Ne(e,t,n){if(Fe)return e(t,n);Fe=!0;try{return ze(e,t,n)}finally{Fe=!1,(null!==ke||null!==Ee)&&(Te(),Pe())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=xa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var je=!1;if(c)try{var Me={};Object.defineProperty(Me,"passive",{get:function(){je=!0}}),window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,Me)}catch(ce){je=!1}function Re(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ie=!1,Le=null,De=!1,Ae=null,$e={onError:function(e){Ie=!0,Le=e}};function We(e,t,n,r,a,i,o,l,s){Ie=!1,Le=null,Re.apply($e,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ue(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return He(a),e;if(o===r)return He(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Qe(e):null}function Qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Qe(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,Ge=a.unstable_shouldYield,qe=a.unstable_requestPaint,Xe=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var yt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var xt,St,kt,Et,Ct,_t=!1,Pt=[],zt=null,Tt=null,Ft=null,Nt=new Map,Ot=new Map,jt=[],Mt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function It(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Lt(e){var t=va(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Ct(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ya(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function At(e,t,n){Dt(e)&&n.delete(t)}function $t(){_t=!1,null!==zt&&Dt(zt)&&(zt=null),null!==Tt&&Dt(Tt)&&(Tt=null),null!==Ft&&Dt(Ft)&&(Ft=null),Nt.forEach(At),Ot.forEach(At)}function Wt(e,t){e.blockedOn===t&&(e.blockedOn=null,_t||(_t=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$t)))}function Ut(e){function t(t){return Wt(t,e)}if(0<Pt.length){Wt(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Wt(zt,e),null!==Tt&&Wt(Tt,e),null!==Ft&&Wt(Ft,e),Nt.forEach(t),Ot.forEach(t),n=0;n<jt.length;n++)(r=jt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&null===(n=jt[0]).blockedOn;)Lt(n),null===n.blockedOn&&jt.shift()}var Bt=w.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var a=yt,i=Bt.transition;Bt.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=a,Bt.transition=i}}function Qt(e,t,n,r){var a=yt,i=Bt.transition;Bt.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=a,Bt.transition=i}}function Kt(e,t,n,r){if(Ht){var a=Gt(e,t,n,r);if(null===a)Hr(e,t,r,Yt,n),Rt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return zt=It(zt,e,t,n,r,a),!0;case"dragenter":return Tt=It(Tt,e,t,n,r,a),!0;case"mouseover":return Ft=It(Ft,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Nt.set(i,It(Nt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ot.set(i,It(Ot.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Rt(e,r),4&t&&-1<Mt.indexOf(e)){for(;null!==a;){var i=ya(a);if(null!==i&&xt(i),null===(i=Gt(e,t,n,r))&&Hr(e,t,r,Yt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function Gt(e,t,n,r){if(Yt=null,null!==(e=va(e=xe(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=L({},un,{view:0,detail:0}),fn=an(dn),hn=L({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),pn=an(hn),mn=an(L({},hn,{dataTransfer:0})),gn=an(L({},dn,{relatedTarget:0})),bn=an(L({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=L({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(vn),wn=an(L({},un,{data:0})),xn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function Cn(){return En}var _n=L({},dn,{key:function(e){if(e.key){var t=xn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(_n),zn=an(L({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=an(L({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Fn=an(L({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=L({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(Nn),jn=[9,13,27,32],Mn=c&&"CompositionEvent"in window,Rn=null;c&&"documentMode"in document&&(Rn=document.documentMode);var In=c&&"TextEvent"in window&&!Rn,Ln=c&&(!Mn||Rn&&8<Rn&&11>=Rn),Dn=String.fromCharCode(32),An=!1;function $n(e,t){switch(e){case"keyup":return-1!==jn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Vn(e,t,n,r){_e(r),0<(t=Qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,Kn=null;function Yn(e){Dr(e,0)}function Gn(e){if(K(wa(e)))return e}function qn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Qn&&(Qn.detachEvent("onpropertychange",nr),Kn=Qn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];Vn(t,Kn,e,xe(e)),Ne(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function ir(e,t){if("click"===e)return Gn(t)}function or(e,t){if("input"===e||"change"===e)return Gn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=cr(n,i);var o=cr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,br=null,vr=null,yr=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Qr(br,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},kr={},Er={};function Cr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var _r=Cr("animationend"),Pr=Cr("animationiteration"),zr=Cr("animationstart"),Tr=Cr("transitionend"),Fr=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Fr.set(e,t),s(t,[e])}for(var jr=0;jr<Nr.length;jr++){var Mr=Nr[jr];Or(Mr.toLowerCase(),"on"+(Mr[0].toUpperCase()+Mr.slice(1)))}Or(_r,"onAnimationEnd"),Or(Pr,"onAnimationIteration"),Or(zr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Tr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,u){if(We.apply(this,arguments),Ie){if(!Ie)throw Error(i(198));var c=Le;Ie=!1,Le=null,De||(De=!0,Ae=c)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Lr(a,l,u),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Lr(a,l,u),i=s}}}if(De)throw e=Ae,De=!1,Ae=null,e}function Ar(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Wr]){e[Wr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||$r(t,!1,e),$r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Wr]||(t[Wr]=!0,$r("selectionchange",!1,t))}}function Br(e,t,n,r){switch(qt(t)){case 1:var a=Vt;break;case 4:a=Qt;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!je||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=va(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Ne((function(){var r=i,a=xe(n),o=[];e:{var l=Fr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Pn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Tn;break;case _r:case Pr:case zr:s=bn;break;case Tr:s=Fn;break;case"scroll":s=fn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=Oe(p,f))&&c.push(Vr(p,m,h)))),d)break;p=p.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===we||!(u=n.relatedTarget||n.fromElement)||!va(u)&&!u[pa])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?va(u):null)&&(u!==(d=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=pn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==s?l:wa(s),h=null==u?l:wa(u),(l=new c(m,p+"leave",s,n,a)).target=d,l.relatedTarget=h,m=null,va(a)===r&&((c=new c(f,p+"enter",u,n,a)).target=h,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,p=0,h=c=s;h;h=Kr(h))p++;for(h=0,m=f;m;m=Kr(m))h++;for(;0<p-h;)c=Kr(c),p--;for(;0<h-p;)f=Kr(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==s&&Yr(o,l,s,c,!1),null!==u&&null!==d&&Yr(o,d,u,c,!0)}if("select"===(s=(l=r?wa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=qn;else if(Hn(l))if(Xn)g=or;else{g=ar;var b=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Vn(o,g,n,a):(b&&b(e,l,r),"focusout"===e&&(b=l._wrapperState)&&b.controlled&&"number"===l.type&&ee(l,"number",l.value)),b=r?wa(r):window,e){case"focusin":(Hn(b)||"true"===b.contentEditable)&&(gr=b,br=r,vr=null);break;case"focusout":vr=br=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,wr(o,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":wr(o,n,a)}var v;if(Mn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?$n(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Ln&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(v=en()):(Zt="value"in(Xt=a)?Xt.value:Xt.textContent,Un=!0)),0<(b=Qr(r,y)).length&&(y=new wn(y,e,null,n,a),o.push({event:y,listeners:b}),v?y.data=v:null!==(v=Wn(n))&&(y.data=v))),(v=In?function(e,t){switch(e){case"compositionend":return Wn(t);case"keypress":return 32!==t.which?null:(An=!0,Dn);case"textInput":return(e=t.data)===Dn&&An?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Mn&&$n(e,t)?(e=en(),Jt=Zt=Xt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Qr(r,"onBeforeInput")).length&&(a=new wn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=v))}Dr(o,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Oe(e,n))&&r.unshift(Vr(e,i,a)),null!=(i=Oe(e,t))&&r.push(Vr(e,i,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Oe(n,i))&&o.unshift(Vr(n,s,l)):a||null!=(s=Oe(n,i))&&o.push(Vr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(qr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ut(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,ha="__reactProps$"+da,pa="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,ba="__reactHandles$"+da;function va(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pa]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ya(e){return!(e=e[fa]||e[pa])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function xa(e){return e[ha]||null}var Sa=[],ka=-1;function Ea(e){return{current:e}}function Ca(e){0>ka||(e.current=Sa[ka],Sa[ka]=null,ka--)}function _a(e,t){ka++,Sa[ka]=e.current,e.current=t}var Pa={},za=Ea(Pa),Ta=Ea(!1),Fa=Pa;function Na(e,t){var n=e.type.contextTypes;if(!n)return Pa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function ja(){Ca(Ta),Ca(za)}function Ma(e,t,n){if(za.current!==Pa)throw Error(i(168));_a(za,t),_a(Ta,n)}function Ra(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,B(e)||"Unknown",a));return L({},n,r)}function Ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pa,Fa=za.current,_a(za,e),_a(Ta,Ta.current),!0}function La(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Ra(e,t,Fa),r.__reactInternalMemoizedMergedChildContext=e,Ca(Ta),Ca(za),_a(za,e)):Ca(Ta),_a(Ta,n)}var Da=null,Aa=!1,$a=!1;function Wa(e){null===Da?Da=[e]:Da.push(e)}function Ua(){if(!$a&&null!==Da){$a=!0;var e=0,t=yt;try{var n=Da;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Da=null,Aa=!1}catch(a){throw null!==Da&&(Da=Da.slice(e+1)),Ke(Je,Ua),a}finally{yt=t,$a=!1}}return null}var Ba=[],Ha=0,Va=null,Qa=0,Ka=[],Ya=0,Ga=null,qa=1,Xa="";function Za(e,t){Ba[Ha++]=Qa,Ba[Ha++]=Va,Va=e,Qa=t}function Ja(e,t,n){Ka[Ya++]=qa,Ka[Ya++]=Xa,Ka[Ya++]=Ga,Ga=e;var r=qa;e=Xa;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,qa=1<<32-ot(t)+a|n<<a|r,Xa=i+e}else qa=1<<i|n<<a|r,Xa=e}function ei(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function ti(e){for(;e===Va;)Va=Ba[--Ha],Ba[Ha]=null,Qa=Ba[--Ha],Ba[Ha]=null;for(;e===Ga;)Ga=Ka[--Ya],Ka[Ya]=null,Xa=Ka[--Ya],Ka[Ya]=null,qa=Ka[--Ya],Ka[Ya]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Nu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ga?{id:qa,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ua(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ci(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ci(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw fi(),Error(i(418));for(;t;)oi(e,t),t=ua(t.nextSibling)}if(ci(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ua(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=ri;e;)e=ua(e.nextSibling)}function hi(){ri=ni=null,ai=!1}function pi(e){null===ii?ii=[e]:ii.push(e)}var mi=w.ReactCurrentBatchConfig;function gi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vi(e){return(0,e._init)(e._payload)}function yi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=ju(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Lu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===O&&vi(i)===t.type)?((r=a(t,n.props)).ref=gi(e,t,n),r.return=e,r):((r=Mu(n.type,n.key,n.props,null,e.mode,r)).ref=gi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Du(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Ru(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Lu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case x:return(n=Mu(t.type,t.key,t.props,null,e.mode,n)).ref=gi(e,null,t),n.return=e,n;case S:return(t=Du(t,e.mode,n)).return=e,t;case O:return f(e,(0,t._init)(t._payload),n)}if(te(t)||R(t))return(t=Ru(t,e.mode,n,null)).return=e,t;bi(e,t)}return null}function h(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===a?u(e,t,n,r):null;case S:return n.key===a?c(e,t,n,r):null;case O:return h(e,t,(a=n._init)(n._payload),r)}if(te(n)||R(n))return null!==a?null:d(e,t,n,r,null);bi(e,n)}return null}function p(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case x:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return p(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||R(r))return d(t,e=e.get(n)||null,r,a,null);bi(t,r)}return null}function m(a,i,l,s){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var b=h(a,d,l[m],s);if(null===b){null===d&&(d=g);break}e&&d&&null===b.alternate&&t(a,d),i=o(b,i,m),null===c?u=b:c.sibling=b,c=b,d=g}if(m===l.length)return n(a,d),ai&&Za(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(i=o(d,i,m),null===c?u=d:c.sibling=d,c=d);return ai&&Za(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=p(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=o(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ai&&Za(a,m),u}function g(a,l,s,u){var c=R(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,m=l,g=l=0,b=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=h(a,m,v.value,u);if(null===y){null===m&&(m=b);break}e&&m&&null===y.alternate&&t(a,m),l=o(y,l,g),null===d?c=y:d.sibling=y,d=y,m=b}if(v.done)return n(a,m),ai&&Za(a,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(a,v.value,u))&&(l=o(v,l,g),null===d?c=v:d.sibling=v,d=v);return ai&&Za(a,g),c}for(m=r(a,m);!v.done;g++,v=s.next())null!==(v=p(m,a,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(a,e)})),ai&&Za(a,g),c}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===k&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case x:e:{for(var u=o.key,c=i;null!==c;){if(c.key===u){if((u=o.type)===k){if(7===c.tag){n(r,c.sibling),(i=a(c,o.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===O&&vi(u)===c.type){n(r,c.sibling),(i=a(c,o.props)).ref=gi(r,c,o),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===k?((i=Ru(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=Mu(o.type,o.key,o.props,null,r.mode,s)).ref=gi(r,i,o),s.return=r,r=s)}return l(r);case S:e:{for(c=o.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Du(o,r.mode,s)).return=r,r=i}return l(r);case O:return e(r,i,(c=o._init)(o._payload),s)}if(te(o))return m(r,i,o,s);if(R(o))return g(r,i,o,s);bi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Lu(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var wi=yi(!0),xi=yi(!1),Si=Ea(null),ki=null,Ei=null,Ci=null;function _i(){Ci=Ei=ki=null}function Pi(e){var t=Si.current;Ca(Si),e._currentValue=t}function zi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ti(e,t){ki=e,Ci=Ei=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Fi(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===Ei){if(null===ki)throw Error(i(308));Ei=e,ki.dependencies={lanes:0,firstContext:e}}else Ei=Ei.next=e;return t}var Ni=null;function Oi(e){null===Ni?Ni=[e]:Ni.push(e)}function ji(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Oi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Mi(e,r)}function Mi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ri=!1;function Ii(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Li(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Di(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ai(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zs)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Mi(e,n)}return null===(a=r.interleaved)?(t.next=t,Oi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Mi(e,n)}function $i(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Wi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var a=e.updateQueue;Ri=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=l.lane,h=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,m=l;switch(f=t,h=n,m.tag){case 1:if("function"===typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null===(f="function"===typeof(p=m.payload)?p.call(h,d,f):p)||void 0===f)break e;d=L({},d,f);break e;case 2:Ri=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=h,s=d):c=c.next=h,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Is|=o,e.lanes=o,e.memoizedState=d}}function Bi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var Hi={},Vi=Ea(Hi),Qi=Ea(Hi),Ki=Ea(Hi);function Yi(e){if(e===Hi)throw Error(i(174));return e}function Gi(e,t){switch(_a(Ki,t),_a(Qi,e),_a(Vi,Hi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(Vi),_a(Vi,t)}function qi(){Ca(Vi),Ca(Qi),Ca(Ki)}function Xi(e){Yi(Ki.current);var t=Yi(Vi.current),n=se(t,e.type);t!==n&&(_a(Qi,e),_a(Vi,n))}function Zi(e){Qi.current===e&&(Ca(Vi),Ca(Qi))}var Ji=Ea(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=w.ReactCurrentDispatcher,ao=w.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,uo=!1,co=!1,fo=0,ho=0;function po(){throw Error(i(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Jo:el,e=n(r,a),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(co)}if(ro.current=Zo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,uo=!1,t)throw Error(i(300));return e}function bo(){var e=0!==fo;return fo=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function yo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function wo(e,t){return"function"===typeof t?t(e):t}function xo(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,u=null,c=o;do{var d=c.lane;if((io&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,oo.lanes|=d,Is|=d}c=c.next}while(null!==c&&c!==o);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Is|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(yl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(){}function Eo(e,t){var n=oo,r=yo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,yl=!0),r=r.queue,Io(Po.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,No(9,_o.bind(null,n,r,a,t),void 0,null),null===Ts)throw Error(i(349));0!==(30&io)||Co(n,t,a)}return a}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function _o(e,t,n,r){t.value=n,t.getSnapshot=r,zo(t)&&To(e)}function Po(e,t,n){return n((function(){zo(t)&&To(e)}))}function zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function To(e){var t=Mi(e,1);null!==t&&nu(t,e,1,-1)}function Fo(e){var t=vo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oo(){return yo().memoizedState}function jo(e,t,n,r){var a=vo();oo.flags|=e,a.memoizedState=No(1|t,n,void 0,void 0===r?null:r)}function Mo(e,t,n,r){var a=yo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&mo(r,o.deps))return void(a.memoizedState=No(t,n,i,r))}oo.flags|=e,a.memoizedState=No(1|t,n,i,r)}function Ro(e,t){return jo(8390656,8,e,t)}function Io(e,t){return Mo(2048,8,e,t)}function Lo(e,t){return Mo(4,2,e,t)}function Do(e,t){return Mo(4,4,e,t)}function Ao(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $o(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Mo(4,4,Ao.bind(null,t,e),n)}function Wo(){}function Uo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ho(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Is|=n,e.baseState=!0),t)}function Vo(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{yt=n,ao.transition=r}}function Qo(){return yo().memoizedState}function Ko(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))qo(t,n);else if(null!==(n=ji(e,t,n,r))){nu(n,e,r,eu()),Xo(n,t,r)}}function Yo(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))qo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,Oi(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=ji(e,t,a,r))&&(nu(n,e,r,a=eu()),Xo(n,t,r))}}function Go(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function qo(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Zo={readContext:Fi,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useInsertionEffect:po,useLayoutEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useMutableSource:po,useSyncExternalStore:po,useId:po,unstable_isNewReconciler:!1},Jo={readContext:Fi,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:Fi,useEffect:Ro,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,jo(4194308,4,Ao.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return jo(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:Fo,useDebugValue:Wo,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=Fo(!1),t=e[0];return e=Vo.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=vo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ts)throw Error(i(349));0!==(30&io)||Co(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ro(Po.bind(null,r,o,e),[e]),r.flags|=2048,No(9,_o.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vo(),t=Ts.identifierPrefix;if(ai){var n=Xa;t=":"+t+"R"+(n=(qa&~(1<<32-ot(qa)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ho++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Fi,useCallback:Uo,useContext:Fi,useEffect:Io,useImperativeHandle:$o,useInsertionEffect:Lo,useLayoutEffect:Do,useMemo:Bo,useReducer:xo,useRef:Oo,useState:function(){return xo(wo)},useDebugValue:Wo,useDeferredValue:function(e){return Ho(yo(),lo.memoizedState,e)},useTransition:function(){return[xo(wo)[0],yo().memoizedState]},useMutableSource:ko,useSyncExternalStore:Eo,useId:Qo,unstable_isNewReconciler:!1},tl={readContext:Fi,useCallback:Uo,useContext:Fi,useEffect:Io,useImperativeHandle:$o,useInsertionEffect:Lo,useLayoutEffect:Do,useMemo:Bo,useReducer:So,useRef:Oo,useState:function(){return So(wo)},useDebugValue:Wo,useDeferredValue:function(e){var t=yo();return null===lo?t.memoizedState=e:Ho(t,lo.memoizedState,e)},useTransition:function(){return[So(wo)[0],yo().memoizedState]},useMutableSource:ko,useSyncExternalStore:Eo,useId:Qo,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Di(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ai(e,i,a))&&(nu(t,e,a,r),$i(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Di(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ai(e,i,a))&&(nu(t,e,a,r),$i(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Di(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Ai(e,a,r))&&(nu(t,e,r,n),$i(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=Pa,i=t.contextType;return"object"===typeof i&&null!==i?i=Fi(i):(a=Oa(t)?Fa:za.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Na(e,a):Pa),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ii(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Fi(i):(i=Oa(t)?Fa:za.current,a.context=Na(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Ui(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=W(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function hl(e,t,n){(n=Di(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function pl(e,t,n){(n=Di(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Qs?Qs=new Set([this]):Qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Di(-1,1)).tag=2,Ai(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vl=w.ReactCurrentOwner,yl=!1;function wl(e,t,n,r){t.child=null===e?xi(t,null,n,r):wi(t,e.child,n,r)}function xl(e,t,n,r,a){n=n.render;var i=t.ref;return Ti(t,a),r=go(e,t,n,r,i,a),n=bo(),null===e||yl?(ai&&n&&ei(t),t.flags|=1,wl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Ou(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Mu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,kl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Hl(e,t,a)}return t.flags|=1,(e=ju(i,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Hl(e,t,a);0!==(131072&e.flags)&&(yl=!0)}}return _l(e,t,n,r,a)}function El(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_a(js,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_a(js,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,_a(js,Os),Os|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,_a(js,Os),Os|=r;return wl(e,t,a,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,a){var i=Oa(n)?Fa:za.current;return i=Na(t,i),Ti(t,a),n=go(e,t,n,r,i,a),r=bo(),null===e||yl?(ai&&r&&ei(t),t.flags|=1,wl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function Pl(e,t,n,r,a){if(Oa(n)){var i=!0;Ia(t)}else i=!1;if(Ti(t,a),null===t.stateNode)Bl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=Fi(u):u=Na(t,u=Oa(n)?Fa:za.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,o,r,u),Ri=!1;var f=t.memoizedState;o.state=f,Ui(t,r,o,a),s=t.memoizedState,l!==r||f!==s||Ta.current||Ri?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Ri||il(t,n,l,r,f,s,u))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Li(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),o.props=u,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Fi(s):s=Na(t,s=Oa(n)?Fa:za.current);var h=n.getDerivedStateFromProps;(c="function"===typeof h||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,o,r,s),Ri=!1,f=t.memoizedState,o.state=f,Ui(t,r,o,a);var p=t.memoizedState;l!==d||f!==p||Ta.current||Ri?("function"===typeof h&&(rl(t,n,h,r),p=t.memoizedState),(u=Ri||il(t,n,u,r,f,p,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,i,a)}function zl(e,t,n,r,a,i){Cl(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&La(t,n,!1),Hl(e,t,i);r=t.stateNode,vl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,l,i)):wl(e,t,l,i),t.memoizedState=r.state,a&&La(t,n,!0),t.child}function Tl(e){var t=e.stateNode;t.pendingContext?Ma(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(0,t.context,!1),Gi(e,t.containerInfo)}function Fl(e,t,n,r,a){return hi(),pi(a),t.flags|=256,wl(e,t,n,r),t.child}var Nl,Ol,jl,Ml,Rl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ll(e,t,n){var r,a=t.pendingProps,o=Ji.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),_a(Ji,1&o),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Iu(s,a,0,null),e=Ru(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(n),t.memoizedState=Rl,e):Dl(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Al(e,t,l,r=cl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Iu({mode:"visible",children:r.children},a,0,null),(o=Ru(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Rl,o);if(0===(1&t.mode))return Al(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Al(e,t,l,r=cl(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ts)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Mi(e,a),nu(r,e,a,-1))}return mu(),Al(e,t,l,r=cl(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ua(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Ka[Ya++]=qa,Ka[Ya++]=Xa,Ka[Ya++]=Ga,qa=e.id,Xa=e.overflow,Ga=t),t=Dl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=ju(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=ju(r,l):(l=Ru(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Rl,a}return e=(l=e.child).sibling,a=ju(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Dl(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Al(e,t,n,r){return null!==r&&pi(r),wi(t,e.child,null,n),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zi(e.return,t,n)}function Wl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Ul(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(wl(e,t,r.children,n),0!==(2&(r=Ji.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_a(Ji,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Wl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Wl(t,!0,n,null,i);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=ju(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=ju(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ql(t),null;case 1:case 17:return Oa(t.type)&&ja(),Ql(t),null;case 3:return r=t.stateNode,qi(),Ca(Ta),Ca(za),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(ou(ii),ii=null))),Ol(e,t),Ql(t),null;case 5:Zi(t);var a=Yi(Ki.current);if(n=t.type,null!==e&&null!=t.stateNode)jl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ql(t),null}if(e=Yi(Vi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fa]=t,r[ha]=o,e=0!==(1&t.mode),n){case"dialog":Ar("cancel",r),Ar("close",r);break;case"iframe":case"object":case"embed":Ar("load",r);break;case"video":case"audio":for(a=0;a<Rr.length;a++)Ar(Rr[a],r);break;case"source":Ar("error",r);break;case"img":case"image":case"link":Ar("error",r),Ar("load",r);break;case"details":Ar("toggle",r);break;case"input":q(r,o),Ar("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ar("invalid",r);break;case"textarea":ae(r,o),Ar("invalid",r)}for(var s in ve(n,o),a=null,o)if(o.hasOwnProperty(s)){var u=o[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ar("scroll",r)}switch(n){case"input":Q(r),J(r,o,!0);break;case"textarea":Q(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[ha]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Ar("cancel",e),Ar("close",e),a=r;break;case"iframe":case"object":case"embed":Ar("load",e),a=r;break;case"video":case"audio":for(a=0;a<Rr.length;a++)Ar(Rr[a],e);a=r;break;case"source":Ar("error",e),a=r;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),a=r;break;case"details":Ar("toggle",e),a=r;break;case"input":q(e,r),a=G(e,r),Ar("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=L({},r,{value:void 0}),Ar("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Ar("invalid",e)}for(o in ve(n,a),u=a)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?ge(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Ar("scroll",e):null!=c&&y(e,o,c,s))}switch(n){case"input":Q(e),J(e,r,!1);break;case"textarea":Q(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ql(t),null;case 6:if(e&&null!=t.stateNode)Ml(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Yi(Ki.current),Yi(Vi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Ql(t),null;case 13:if(Ca(Ji),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))fi(),hi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[fa]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ql(t),o=!1}else null!==ii&&(ou(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ji.current)?0===Ms&&(Ms=3):mu())),null!==t.updateQueue&&(t.flags|=4),Ql(t),null);case 4:return qi(),Ol(e,t),null===e&&Ur(t.stateNode.containerInfo),Ql(t),null;case 10:return Pi(t.type._context),Ql(t),null;case 19:if(Ca(Ji),null===(o=t.memoizedState))return Ql(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Vl(o,!1);else{if(0!==Ms||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Vl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _a(Ji,1&Ji.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>Us&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Ql(t),null}else 2*Xe()-o.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Ji.current,_a(Ji,r?1&n|2:1&n),t):(Ql(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Ql(t),6&t.subtreeFlags&&(t.flags|=8192)):Ql(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Yl(e,t){switch(ti(t),t.tag){case 1:return Oa(t.type)&&ja(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qi(),Ca(Ta),Ca(za),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Ca(Ji),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(Ji),null;case 4:return qi(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},jl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Yi(Vi.current);var i,o=null;switch(n){case"input":a=G(e,a),r=G(e,r),o=[];break;case"select":a=L({},a,{value:void 0}),r=L({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ve(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ar("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Ml=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,ql=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[ha],delete t[ma],delete t[ga],delete t[ba])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)hs(e,t,n),n=n.sibling}function hs(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:ql||Jl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ut(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!ql&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Eu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(ql=(r=ql)||null!==n.memoizedState,fs(e,t,n),ql=r):fs(e,t,n);break;default:fs(e,t,n)}}function ps(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=zu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(i(160));hs(o,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Eu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),bs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Eu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ms(t,e),bs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),bs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&X(a,o),ye(s,l);var c=ye(s,o);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):y(a,d,f,c)}switch(s){case"input":Z(a,o);break;case"textarea":ie(a,o);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var p=o.value;null!=p?ne(a,!!o.multiple,p,!1):h!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[ha]=o}catch(g){Eu(e,e.return,g)}}break;case 6:if(ms(t,e),bs(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){Eu(e,e.return,g)}}break;case 3:if(ms(t,e),bs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ms(t,e),bs(e);break;case 13:ms(t,e),bs(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Ws=Xe())),4&r&&ps(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ql=(c=ql)||d,ms(t,e),ql=c):ms(t,e),bs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(p=(h=Zl).child,h.tag){case 0:case 11:case 14:case 15:ns(4,h,h.return);break;case 1:Jl(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Jl(h,h.return);break;case 22:if(null!==h.memoizedState){xs(f);continue}}null!==p?(p.return=h,Zl=p):xs(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),bs(e),4&r&&ps(e);case 21:}}function bs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){Eu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Zl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Gl;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Gl;var u=ql;if(Gl=o,(ql=s)&&!u)for(Zl=a;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?Ss(a):null!==s?(s.return=o,Zl=s):Ss(a);for(;null!==i;)Zl=i,ys(i,t,n),i=i.sibling;Zl=a,Gl=l,ql=u}ws(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Zl=i):ws(e)}}function ws(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ql)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Bi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Bi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ut(f)}}}break;default:throw Error(i(163))}ql||512&t.flags&&as(t)}catch(h){Eu(t,t.return,h)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function xs(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Ss(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Eu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Eu(t,a,s)}}var i=t.return;try{as(t)}catch(s){Eu(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){Eu(t,o,s)}}}catch(s){Eu(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var ks,Es=Math.ceil,Cs=w.ReactCurrentDispatcher,_s=w.ReactCurrentOwner,Ps=w.ReactCurrentBatchConfig,zs=0,Ts=null,Fs=null,Ns=0,Os=0,js=Ea(0),Ms=0,Rs=null,Is=0,Ls=0,Ds=0,As=null,$s=null,Ws=0,Us=1/0,Bs=null,Hs=!1,Vs=null,Qs=null,Ks=!1,Ys=null,Gs=0,qs=0,Xs=null,Zs=-1,Js=0;function eu(){return 0!==(6&zs)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&zs)&&0!==Ns?Ns&-Ns:null!==mi.transition?(0===Js&&(Js=mt()),Js):0!==(e=yt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nu(e,t,n,r){if(50<qs)throw qs=0,Xs=null,Error(i(185));bt(e,n,r),0!==(2&zs)&&e===Ts||(e===Ts&&(0===(2&zs)&&(Ls|=n),4===Ms&&lu(e,Ns)),ru(e,r),1===n&&0===zs&&0===(1&t.mode)&&(Us=Xe()+500,Aa&&Ua()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=ht(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===Ts?Ns:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Aa=!0,Wa(e)}(su.bind(null,e)):Wa(su.bind(null,e)),oa((function(){0===(6&zs)&&Ua()})),n=null;else{switch(wt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Tu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,Js=0,0!==(6&zs))throw Error(i(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ts?Ns:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=zs;zs|=2;var o=pu();for(Ts===e&&Ns===t||(Bs=null,Us=Xe()+500,fu(e,t));;)try{vu();break}catch(s){hu(e,s)}_i(),Cs.current=o,zs=a,null!==Fs?t=0:(Ts=null,Ns=0,t=Ms)}if(0!==t){if(2===t&&(0!==(a=pt(e))&&(r=a,t=iu(e,a))),1===t)throw n=Rs,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(o=pt(e))&&(r=o,t=iu(e,o))),1===t))throw n=Rs,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:xu(e,$s,Bs);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Ws+500-Xe())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(xu.bind(null,e,$s,Bs),t);break}xu(e,$s,Bs);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ra(xu.bind(null,e,$s,Bs),r);break}xu(e,$s,Bs);break;default:throw Error(i(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function iu(e,t){var n=As;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=$s,$s=n,null!==t&&ou(t)),e}function ou(e){null===$s?$s=e:$s.push.apply($s,e)}function lu(e,t){for(t&=~Ds,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&zs))throw Error(i(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=pt(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Rs,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xu(e,$s,Bs),ru(e,Xe()),null}function uu(e,t){var n=zs;zs|=1;try{return e(t)}finally{0===(zs=n)&&(Us=Xe()+500,Aa&&Ua())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&zs)&&Su();var t=zs;zs|=1;var n=Ps.transition,r=yt;try{if(Ps.transition=null,yt=1,e)return e()}finally{yt=r,Ps.transition=n,0===(6&(zs=t))&&Ua()}}function du(){Os=js.current,Ca(js)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Fs)for(n=Fs.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&ja();break;case 3:qi(),Ca(Ta),Ca(za),no();break;case 5:Zi(r);break;case 4:qi();break;case 13:case 19:Ca(Ji);break;case 10:Pi(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ts=e,Fs=e=ju(e.current,null),Ns=Os=t,Ms=0,Rs=null,Ds=Ls=Is=0,$s=As=null,null!==Ni){for(t=0;t<Ni.length;t++)if(null!==(r=(n=Ni[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ni=null}return e}function hu(e,t){for(;;){var n=Fs;try{if(_i(),ro.current=Zo,uo){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}uo=!1}if(io=0,so=lo=oo=null,co=!1,fo=0,_s.current=null,null===n||null===n.return){Ms=1,Rs=t,Fs=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Ns,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=gl(l);if(null!==p){p.flags&=-257,bl(p,l,s,0,t),1&p.mode&&ml(o,c,t),u=c;var m=(t=p).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(o,c,t),mu();break e}u=Error(i(426))}else if(ai&&1&s.mode){var b=gl(l);if(null!==b){0===(65536&b.flags)&&(b.flags|=256),bl(b,l,s,0,t),pi(ul(u,s));break e}}o=u=ul(u,s),4!==Ms&&(Ms=2),null===As?As=[o]:As.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Wi(o,hl(0,u,t));break e;case 1:s=u;var v=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Qs||!Qs.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Wi(o,pl(o,s,t));break e}}o=o.return}while(null!==o)}wu(n)}catch(w){t=w,Fs===n&&null!==n&&(Fs=n=n.return);continue}break}}function pu(){var e=Cs.current;return Cs.current=Zo,null===e?Zo:e}function mu(){0!==Ms&&3!==Ms&&2!==Ms||(Ms=4),null===Ts||0===(268435455&Is)&&0===(268435455&Ls)||lu(Ts,Ns)}function gu(e,t){var n=zs;zs|=2;var r=pu();for(Ts===e&&Ns===t||(Bs=null,fu(e,t));;)try{bu();break}catch(a){hu(e,a)}if(_i(),zs=n,Cs.current=r,null!==Fs)throw Error(i(261));return Ts=null,Ns=0,Ms}function bu(){for(;null!==Fs;)yu(Fs)}function vu(){for(;null!==Fs&&!Ge();)yu(Fs)}function yu(e){var t=ks(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?wu(e):Fs=t,_s.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Os)))return void(Fs=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(Fs=n);if(null===e)return Ms=6,void(Fs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Fs=t);Fs=t=e}while(null!==t);0===Ms&&(Ms=5)}function xu(e,t,n){var r=yt,a=Ps.transition;try{Ps.transition=null,yt=1,function(e,t,n,r){do{Su()}while(null!==Ys);if(0!==(6&zs))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===Ts&&(Fs=Ts=null,Ns=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Tu(tt,(function(){return Su(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Ps.transition,Ps.transition=null;var l=yt;yt=1;var s=zs;zs|=4,_s.current=null,function(e,t){if(ea=Ht,hr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(x){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++c===a&&(s=l),h===o&&++d===r&&(u=l),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Ht=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,b=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(i(163))}}catch(x){Eu(t,t.return,x)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),pr(ta),Ht=!!ea,ta=ea=null,e.current=n,vs(n,e,a),qe(),zs=s,yt=l,Ps.transition=o}else e.current=n;if(Ks&&(Ks=!1,Ys=e,Gs=a),o=e.pendingLanes,0===o&&(Qs=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Gs)&&0!==e.tag&&Su(),o=e.pendingLanes,0!==(1&o)?e===Xs?qs++:(qs=0,Xs=e):qs=0,Ua()}(e,t,n,r)}finally{Ps.transition=a,yt=r}return null}function Su(){if(null!==Ys){var e=wt(Gs),t=Ps.transition,n=yt;try{if(Ps.transition=null,yt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Gs=0,0!==(6&zs))throw Error(i(331));var a=zs;for(zs|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var h=(d=Zl).sibling,p=d.return;if(is(d),d===c){Zl=null;break}if(null!==h){h.return=p,Zl=h;break}Zl=p}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(null!==g)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Zl=v;break e}Zl=o.return}}var y=e.current;for(Zl=y;null!==Zl;){var w=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==w)w.return=l,Zl=w;else e:for(l=y;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Eu(s,s.return,S)}if(s===l){Zl=null;break e}var x=s.sibling;if(null!==x){x.return=s.return,Zl=x;break e}Zl=s.return}}if(zs=a,Ua(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{yt=n,Ps.transition=t}}return!1}function ku(e,t,n){e=Ai(e,t=hl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(bt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Qs||!Qs.has(r))){t=Ai(t,e=pl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(bt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ts===e&&(Ns&n)===n&&(4===Ms||3===Ms&&(130023424&Ns)===Ns&&500>Xe()-Ws?fu(e,0):Ds|=n),ru(e,t)}function _u(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Mi(e,t))&&(bt(e,t,n),ru(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_u(e,n)}function zu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),_u(e,n)}function Tu(e,t){return Ke(e,t)}function Fu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nu(e,t,n,r){return new Fu(e,t,n,r)}function Ou(e){return!(!(e=e.prototype)||!e.isReactComponent)}function ju(e,t){var n=e.alternate;return null===n?((n=Nu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mu(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)Ou(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Ru(n.children,a,o,t);case E:l=8,a|=8;break;case C:return(e=Nu(12,n,t,2|a)).elementType=C,e.lanes=o,e;case T:return(e=Nu(13,n,t,a)).elementType=T,e.lanes=o,e;case F:return(e=Nu(19,n,t,a)).elementType=F,e.lanes=o,e;case j:return Iu(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:l=10;break e;case P:l=9;break e;case z:l=11;break e;case N:l=14;break e;case O:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Nu(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Ru(e,t,n,r){return(e=Nu(7,e,r,t)).lanes=n,e}function Iu(e,t,n,r){return(e=Nu(22,e,r,t)).elementType=j,e.lanes=n,e.stateNode={isHidden:!1},e}function Lu(e,t,n){return(e=Nu(6,e,null,t)).lanes=n,e}function Du(e,t,n){return(t=Nu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Au(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,a,i,o,l,s){return e=new Au(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Nu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ii(i),e}function Wu(e){if(!e)return Pa;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Oa(n))return Ra(e,n,t)}return t}function Uu(e,t,n,r,a,i,o,l,s){return(e=$u(n,r,!0,e,0,i,0,l,s)).context=Wu(null),n=e.current,(i=Di(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Ai(n,i,a),e.current.lanes=a,bt(e,a,r),ru(e,r),e}function Bu(e,t,n,r){var a=t.current,i=eu(),o=tu(a);return n=Wu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Di(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ai(a,t,o))&&(nu(e,a,o,i),$i(e,a,o)),o}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Qu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ta.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Tl(t),hi();break;case 5:Xi(t);break;case 1:Oa(t.type)&&Ia(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;_a(Si,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_a(Ji,1&Ji.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ll(e,t,n):(_a(Ji,1&Ji.current),null!==(e=Hl(e,t,n))?e.sibling:null);_a(Ji,1&Ji.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),_a(Ji,Ji.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Hl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ai&&0!==(1048576&t.flags)&&Ja(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var a=Na(t,za.current);Ti(t,n),a=go(null,t,r,e,a,n);var o=bo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(o=!0,Ia(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Ii(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=zl(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),wl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ou(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===N)return 14}return 2}(r),e=nl(r,e),a){case 0:t=_l(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=xl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Pl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Tl(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Li(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Fl(e,t,r,n,a=ul(Error(i(423)),t));break e}if(r!==a){t=Fl(e,t,r,n,a=ul(Error(i(424)),t));break e}for(ri=ua(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=xi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===a){t=Hl(e,t,n);break e}wl(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ui(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),Cl(e,t),wl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Ll(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):wl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,xl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return wl(e,t,t.pendingProps,n),t.child;case 8:case 12:return wl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,_a(Si,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!Ta.current){t=Hl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Di(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),zi(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),zi(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}wl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Ti(t,n),r=r(a=Fi(a)),t.flags|=1,wl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Bl(e,t),t.tag=1,Oa(r)?(e=!0,Ia(t)):e=!1,Ti(t,n),ol(t,r,a),sl(t,r,a,n),zl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return El(e,t,n)}throw Error(i(156,t.tag))};var Ku="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function Gu(e){this._internalRoot=e}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=Hu(o);l.call(e)}}Bu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=Hu(o);i.call(e)}}var o=Uu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[pa]=o.current,Ur(8===e.nodeType?e.parentNode:e),cu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[pa]=s.current,Ur(8===e.nodeType?e.parentNode:e),cu((function(){Bu(t,s,n,r)})),s}(n,t,e,a,r);return Hu(o)}Gu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Bu(e,t,null,null)},Gu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Bu(null,e,null,null)})),t[pa]=null}},Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&0!==t&&t<jt[n].priority;n++);jt.splice(n,0,e),0===n&&Lt(e)}},xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,Xe()),0===(6&zs)&&(Us=Xe()+500,Ua()))}break;case 13:cu((function(){var t=Mi(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Qu(e,1)}},St=function(e){if(13===e.tag){var t=Mi(e,134217728);if(null!==t)nu(t,e,134217728,eu());Qu(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Mi(e,t);if(null!==n)nu(n,e,t,eu());Qu(e,t)}},Et=function(){return yt},Ct=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=xa(r);if(!a)throw Error(i(90));K(r),Z(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=uu,Te=cu;var ec={usingClientEntryPoint:!1,Events:[ya,wa,xa,_e,Pe,uu]},tc={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qu(e))throw Error(i(299));var n=!1,r="",a=Ku;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,a),e[pa]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(i(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=Ku;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uu(t,null,e,1,null!=n?n:null,a,0,o,l),e[pa]=t.current,Ur(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Gu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(i(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[pa]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},838:(e,t,n)=>{"use strict";n.r(t),n.d(t,{create:()=>i,default:()=>a});var r={};!function e(t,n,r,a){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o="function"===typeof Path2D&&"function"===typeof DOMMatrix,l=function(){if(!t.OffscreenCanvas)return!1;var e=new OffscreenCanvas(1,1),n=e.getContext("2d");n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();try{n.createPattern(r,"no-repeat")}catch(a){return!1}return!0}();function s(){}function u(e){var r=n.exports.Promise,a=void 0!==r?r:t.Promise;return"function"===typeof a?new a(e):(e(s,s),null)}var c,d,f,h=(c=l,d=new Map,{transform:function(e){if(c)return e;if(d.has(e))return d.get(e);var t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),d.set(e,t),t},clear:function(){d.clear()}}),p=function(){var e,t,n=Math.floor(1e3/60),r={},a=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(e=function(e){var t=Math.random();return r[t]=requestAnimationFrame((function i(o){a===o||a+n-1<o?(a=o,delete r[t],e()):r[t]=requestAnimationFrame(i)})),t},t=function(e){r[e]&&cancelAnimationFrame(r[e])}):(e=function(e){return setTimeout(e,n)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),m=function(){var t,n,a={};return function(){if(t)return t;if(!r&&i){var o=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{t=new Worker(URL.createObjectURL(new Blob([o])))}catch(l){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",l),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,i,o){if(n)return t(r,null),n;var l=Math.random().toString(36).slice(2);return n=u((function(i){function s(t){t.data.callback===l&&(delete a[l],e.removeEventListener("message",s),n=null,h.clear(),o(),i())}e.addEventListener("message",s),t(r,l),a[l]=s.bind(null,{data:{callback:l}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),a)a[t](),delete a[t]}}(t)}return t}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(e,t,n){return function(e,t){return t?t(e):e}(e&&(null!==(r=e[t])&&void 0!==r)?e[t]:g[t],n);var r}function v(e){return e<0?0:Math.floor(e)}function y(e){return parseInt(e,16)}function w(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function k(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function E(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function C(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,a=t.y+t.random*t.tiltSin,i=t.wobbleX+t.random*t.tiltCos,l=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),o&&"path"===t.shape.type&&"string"===typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,n,r,a,i,o){var l=new Path2D(e),s=new Path2D;s.addPath(l,new DOMMatrix(t));var u=new Path2D;return u.addPath(s,new DOMMatrix([Math.cos(o)*a,Math.sin(o)*a,-Math.sin(o)*i,Math.cos(o)*i,n,r])),u}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(i-r),.1*Math.abs(l-a),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var s=Math.PI/10*t.wobble,u=.1*Math.abs(i-r),c=.1*Math.abs(l-a),d=t.shape.bitmap.width*t.scalar,f=t.shape.bitmap.height*t.scalar,p=new DOMMatrix([Math.cos(s)*u,Math.sin(s)*u,-Math.sin(s)*c,Math.cos(s)*c,t.x,t.y]);p.multiplySelf(new DOMMatrix(t.shape.matrix));var m=e.createPattern(h.transform(t.shape.bitmap),"no-repeat");m.setTransform(p),e.globalAlpha=1-n,e.fillStyle=m,e.fillRect(t.x-d/2,t.y-f/2,d,f),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(l-a)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,a,i,o,l,s){e.save(),e.translate(t,n),e.rotate(i),e.scale(r,a),e.arc(0,0,1,o,l,s),e.restore()}(e,t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(l-a)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var g=Math.PI/2*3,b=4*t.scalar,v=8*t.scalar,y=t.x,w=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,w=t.y+Math.sin(g)*v,e.lineTo(y,w),g+=S,y=t.x+Math.cos(g)*b,w=t.y+Math.sin(g)*b,e.lineTo(y,w),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(a)),e.lineTo(Math.floor(i),Math.floor(l)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function _(e,n){var o,l=!e,s=!!b(n||{},"resize"),c=!1,d=b(n,"disableForReducedMotion",Boolean),f=i&&!!b(n||{},"useWorker")?m():null,g=l?S:k,y=!(!e||!f)&&!!e.__confetti_initialized,x="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function _(t,n,i){for(var l,s,c=b(t,"particleCount",v),d=b(t,"angle",Number),f=b(t,"spread",Number),m=b(t,"startVelocity",Number),y=b(t,"decay",Number),x=b(t,"gravity",Number),S=b(t,"drift",Number),k=b(t,"colors",w),_=b(t,"ticks",Number),P=b(t,"shapes"),z=b(t,"scalar"),T=!!b(t,"flat"),F=function(e){var t=b(e,"origin",Object);return t.x=b(t,"x",Number),t.y=b(t,"y",Number),t}(t),N=c,O=[],j=e.width*F.x,M=e.height*F.y;N--;)O.push(E({x:j,y:M,angle:d,spread:f,startVelocity:m,color:k[N%k.length],shape:P[(l=0,s=P.length,Math.floor(Math.random()*(s-l))+l)],ticks:_,decay:y,gravity:x,drift:S,scalar:z,flat:T}));return o?o.addFettis(O):(o=function(e,t,n,i,o){var l,s,c=t.slice(),d=e.getContext("2d"),f=u((function(t){function u(){l=s=null,d.clearRect(0,0,i.width,i.height),h.clear(),o(),t()}l=p.frame((function t(){!r||i.width===a.width&&i.height===a.height||(i.width=e.width=a.width,i.height=e.height=a.height),i.width||i.height||(n(e),i.width=e.width,i.height=e.height),d.clearRect(0,0,i.width,i.height),(c=c.filter((function(e){return C(d,e)}))).length?l=p.frame(t):u()})),s=u}));return{addFettis:function(e){return c=c.concat(e),f},canvas:e,promise:f,reset:function(){l&&p.cancel(l),s&&s()}}}(e,O,g,n,i),o.promise)}function P(n){var r=d||b(n,"disableForReducedMotion",Boolean),a=b(n,"zIndex",Number);if(r&&x)return u((function(e){e()}));l&&o?e=o.canvas:l&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(a),document.body.appendChild(e)),s&&!y&&g(e);var i={width:e.width,height:e.height};function h(){if(f){var t={getBoundingClientRect:function(){if(!l)return e.getBoundingClientRect()}};return g(t),void f.postMessage({resize:{width:t.width,height:t.height}})}i.width=i.height=null}function p(){o=null,s&&(c=!1,t.removeEventListener("resize",h)),l&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,y=!1)}return f&&!y&&f.init(e),y=!0,f&&(e.__confetti_initialized=!0),s&&!c&&(c=!0,t.addEventListener("resize",h,!1)),f?f.fire(n,i,p):_(n,i,p)}return P.reset=function(){f&&f.reset(),o&&o.reset()},P}function P(){return f||(f=_(null,{useWorker:!0,resize:!0})),f}n.exports=function(){return P().apply(this,arguments)},n.exports.reset=function(){P().reset()},n.exports.create=_,n.exports.shapeFromPath=function(e){if(!o)throw new Error("path confetti are not supported in this browser");var t,n;"string"===typeof e?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),a=document.createElement("canvas").getContext("2d");if(!n){for(var i,l,s=1e3,u=s,c=s,d=0,f=0,h=0;h<s;h+=2)for(var p=0;p<s;p+=2)a.isPointInPath(r,h,p,"nonzero")&&(u=Math.min(u,h),c=Math.min(c,p),d=Math.max(d,h),f=Math.max(f,p));i=d-u,l=f-c;var m=Math.min(10/i,10/l);n=[m,0,0,m,-Math.round(i/2+u)*m,-Math.round(l/2+c)*m]}return{type:"path",path:t,matrix:n}},n.exports.shapeFromText=function(e){var t,n=1,r="#000000",a='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"===typeof e?t=e:(t=e.text,n="scalar"in e?e.scalar:n,a="fontFamily"in e?e.fontFamily:a,r="color"in e?e.color:r);var i=10*n,o=i+"px "+a,l=new OffscreenCanvas(i,i),s=l.getContext("2d");s.font=o;var u=s.measureText(t),c=Math.ceil(u.actualBoundingBoxRight+u.actualBoundingBoxLeft),d=Math.ceil(u.actualBoundingBoxAscent+u.actualBoundingBoxDescent),f=u.actualBoundingBoxLeft+2,h=u.actualBoundingBoxAscent+2;c+=4,d+=4,(s=(l=new OffscreenCanvas(c,d)).getContext("2d")).font=o,s.fillStyle=r,s.fillText(t,f,h);var p=1/n;return{type:"bitmap",bitmap:l.transferToImageBitmap(),matrix:[p,0,0,p,-c*p/2,-d*p/2]}}}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),r,!1);const a=r.exports;var i=r.exports.create},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var i=n(324),o=n.n(i),l="-ms-",s="-moz-",u="-webkit-",c="comm",d="rule",f="decl",h="@keyframes",p=Math.abs,m=String.fromCharCode,g=Object.assign;function b(e){return e.trim()}function v(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function x(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function k(e){return e.length}function E(e){return e.length}function C(e,t){return t.push(e),e}function _(e,t){return e.filter((function(e){return!v(e,t)}))}var P=1,z=1,T=0,F=0,N=0,O="";function j(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:P,column:z,length:o,return:"",siblings:l}}function M(e,t){return g(j("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=M(e.root,{children:[e]});C(e,e.siblings)}function I(){return N=F>0?x(O,--F):0,z--,10===N&&(z=1,P--),N}function L(){return N=F<T?x(O,F++):0,z++,10===N&&(z=1,P++),N}function D(){return x(O,F)}function A(){return F}function $(e,t){return S(O,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return P=z=1,T=k(O=e),F=0,[]}function B(e){return O="",e}function H(e){return b($(F-1,K(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(N=D())&&N<33;)L();return W(e)>2||W(N)>3?"":" "}function Q(e,t){for(;--t&&L()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return $(e,A()+(t<6&&32==D()&&32==L()))}function K(e){for(;L();)switch(N){case e:return F;case 34:case 39:34!==e&&39!==e&&K(N);break;case 40:41===e&&K(e);break;case 92:L()}return F}function Y(e,t){for(;L()&&e+N!==57&&(e+N!==84||47!==D()););return"/*"+$(t,F-1)+"*"+m(47===e?e:L())}function G(e){for(;!W(D());)L();return $(e,F)}function q(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case c:return"";case h:return e.return=e.value+"{"+q(e.children,r)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(n=q(e.children,r))?e.return=e.value+"{"+n+"}":""}function Z(e,t,n){switch(function(e,t){return 45^x(e,0)?(((t<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+s+e+l+e+e;case 5936:switch(x(e,t+11)){case 114:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+l+e+e;case 6165:return u+e+l+"flex-"+e+e;case 5187:return u+e+y(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return u+e+l+"flex-item-"+y(e,/flex-|-self/g,"")+(v(e,/flex-|baseline/)?"":l+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return u+e+l+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+l+y(e,"shrink","negative")+e;case 5292:return u+e+l+y(e,"basis","preferred-size")+e;case 6060:return u+"box-"+y(e,"-grow","")+u+e+l+y(e,"grow","positive")+e;case 4554:return u+y(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!v(e,/flex-|baseline/))return l+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return l+y(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,v(e.props,/grid-\w+-end/)}))?~w(e+(n=n[t].value),"span",0)?e:l+y(e,"-start","")+e+l+"grid-row-span:"+(~w(n,"span",0)?v(n,/\d+/):+v(n,/\d+/)-+v(e,/\d+/))+";":l+y(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return v(e.props,/grid-\w+-start/)}))?e:l+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(x(e,t+1)){case 109:if(45!==x(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+s+(108==x(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?Z(y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,s){return l+n+":"+r+s+(a?l+n+"-span:"+(i?o:+o-+r)+s:"")+e}));case 4949:if(121===x(e,t+6))return y(e,":",":"+u)+e;break;case 6444:switch(x(e,45===x(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===x(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+e;case 100:return y(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function J(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=Z(e.value,e.length,n));case h:return q([M(e,{value:y(e.value,"@","@"+u)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(v(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":R(M(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),R(M(e,{props:[t]})),g(e,{props:_(n,r)});break;case"::placeholder":R(M(e,{props:[y(t,/:(plac\w+)/,":"+u+"input-$1")]})),R(M(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),R(M(e,{props:[y(t,/:(plac\w+)/,l+"input-$1")]})),R(M(e,{props:[t]})),g(e,{props:_(n,r)})}return""}))}}function ee(e){return B(te("",null,null,null,[""],e=U(e),0,[0],e))}function te(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,f=0,h=0,g=0,b=1,v=1,S=1,E=0,_="",P=a,z=i,T=r,F=_;v;)switch(g=E,E=L()){case 40:if(108!=g&&58==x(F,d-1)){-1!=w(F+=y(H(E),"&","&\f"),"&\f",p(u?l[u-1]:0))&&(S=-1);break}case 34:case 39:case 91:F+=H(E);break;case 9:case 10:case 13:case 32:F+=V(g);break;case 92:F+=Q(A()-1,7);continue;case 47:switch(D()){case 42:case 47:C(re(Y(L(),A()),t,n,s),s);break;default:F+="/"}break;case 123*b:l[u++]=k(F)*S;case 125*b:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+c:-1==S&&(F=y(F,/\f/g,"")),h>0&&k(F)-d&&C(h>32?ae(F+";",r,n,d-1,s):ae(y(F," ","")+";",r,n,d-2,s),s);break;case 59:F+=";";default:if(C(T=ne(F,t,n,u,c,a,l,_,P=[],z=[],d,i),i),123===E)if(0===c)te(F,t,T,T,P,i,d,l,z);else switch(99===f&&110===x(F,3)?100:f){case 100:case 108:case 109:case 115:te(e,T,T,r&&C(ne(e,T,T,0,0,a,l,_,a,P=[],d,z),z),a,z,d,l,r?P:z);break;default:te(F,T,T,T,[""],z,0,l,z)}}u=c=h=0,b=S=1,_=F="",d=o;break;case 58:d=1+k(F),h=g;default:if(b<1)if(123==E)--b;else if(125==E&&0==b++&&125==I())continue;switch(F+=m(E),E*b){case 38:S=c>0?1:(F+="\f",-1);break;case 44:l[u++]=(k(F)-1)*S,S=1;break;case 64:45===D()&&(F+=H(L())),f=D(),c=d=k(_=F+=G(A())),E++;break;case 45:45===g&&2==k(F)&&(b=0)}}return i}function ne(e,t,n,r,a,i,o,l,s,u,c,f){for(var h=a-1,m=0===a?i:[""],g=E(m),v=0,w=0,x=0;v<r;++v)for(var k=0,C=S(e,h+1,h=p(w=o[v])),_=e;k<g;++k)(_=b(w>0?m[k]+" "+C:y(C,/&\f/g,m[k])))&&(s[x++]=_);return j(e,t,n,0===a?d:l,s,u,c,f)}function re(e,t,n,r){return j(e,t,n,c,m(N),S(e,2,-2),0,r)}function ae(e,t,n,r,a){return j(e,t,n,f,S(e,0,r),S(e,r+1,-1),r,a)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ue="6.1.17",ce="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),he=(new Set,Object.freeze([])),pe=Object.freeze({});function me(e,t,n){return void 0===n&&(n=pe),e.theme!==n.theme&&e.theme||t||n.theme}var ge=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ve=/(^-|-$)/g;function ye(e){return e.replace(be,"-").replace(ve,"")}var we=/(a)(d)/gi,xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=xe(t%52)+n;return(xe(t%52)+n).replace(we,"$1-$2")}var ke,Ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return Ee(5381,e)};function _e(e){return Se(Ce(e)>>>0)}function Pe(e){return e.displayName||e.name||"Component"}function ze(e){return"string"==typeof e&&!0}var Te="function"==typeof Symbol&&Symbol.for,Fe=Te?Symbol.for("react.memo"):60115,Ne=Te?Symbol.for("react.forward_ref"):60112,Oe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},je={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Re=((ke={})[Ne]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ke[Fe]=Me,ke);function Ie(e){return("type"in(t=e)&&t.type.$$typeof)===Fe?Me:"$$typeof"in e?Re[e.$$typeof]:Oe;var t}var Le=Object.defineProperty,De=Object.getOwnPropertyNames,Ae=Object.getOwnPropertySymbols,$e=Object.getOwnPropertyDescriptor,We=Object.getPrototypeOf,Ue=Object.prototype;function Be(e,t,n){if("string"!=typeof t){if(Ue){var r=We(t);r&&r!==Ue&&Be(e,r,n)}var a=De(t);Ae&&(a=a.concat(Ae(t)));for(var i=Ie(e),o=Ie(t),l=0;l<a.length;++l){var s=a[l];if(!(s in je||n&&n[s]||o&&s in o||i&&s in i)){var u=$e(t,s);try{Le(e,s,u)}catch(e){}}}}return e}function He(e){return"function"==typeof e}function Ve(e){return"object"==typeof e&&"styledComponentId"in e}function Qe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ke(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ye(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ge(e,t,n){if(void 0===n&&(n=!1),!n&&!Ye(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ge(e[r],t[r]);else if(Ye(t))for(var r in t)e[r]=Ge(e[r],t[r]);return e}function qe(e,t){Object.defineProperty(e,"toString",{value:t})}function Xe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Xe(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(ce);return t},e}(),Je=new Map,et=new Map,tt=1,nt=function(e){if(Je.has(e))return Je.get(e);for(;et.has(tt);)tt++;var t=tt++;return Je.set(e,t),et.set(t,e),t},rt=function(e,t){tt=t+1,Je.set(e,t),et.set(t,e)},at="style[".concat(oe,"][").concat(se,'="').concat(ue,'"]'),it=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ot=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},lt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ce),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(it);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(rt(c,u),ot(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},st=function(e){for(var t=document.querySelectorAll(at),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(oe)!==le&&(lt(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ut(){return n.nc}var ct=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(oe,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(oe,le),r.setAttribute(se,ue);var o=ut();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},dt=function(){function e(e){this.element=ct(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Xe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=ct(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ht=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),pt=de,mt={isServer:!de,useCSSOMInjection:!fe},gt=function(){function e(e,t,n){void 0===e&&(e=pe),void 0===t&&(t={});var a=this;this.options=r(r({},mt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&pt&&(pt=!1,st(this)),qe(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return et.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(oe,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(ce)},i=0;i<n;i++)a(i);return r}(a)}))}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&de&&st(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ht(n):t?new dt(n):new ft(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(nt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,vt=/^\s*\/\/.*$/gm;function yt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=yt(e.children,t)),e}))}function wt(e){var t,n,r,a=void 0===e?pe:e,i=a.options,o=void 0===i?pe:i,l=a.plugins,s=void 0===l?he:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(r,u))})),o.prefix&&c.push(J),c.push(X);var f=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(vt,""),u=ee(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(u=yt(u,o.namespace));var d,f=[];return q(u,function(e){var t=E(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce((function(e,t){return t.name||Xe(15),Ee(e,t.name)}),5381).toString():"",f}var xt=new gt,St=wt(),kt=e.createContext({shouldForwardProp:void 0,styleSheet:xt,stylis:St}),Et=(kt.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(kt)}function _t(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=Ct().styleSheet,l=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),s=(0,e.useMemo)((function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){o()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var u=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}}),[t.shouldForwardProp,l,s]);return e.createElement(kt.Provider,{value:u},e.createElement(Et.Provider,{value:s},t.children))}var Pt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qe(this,(function(){throw Xe(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),zt=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ft=function(e){return null==e||!1===e||""===e},Nt=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ft(o)&&(Array.isArray(o)&&o.isCss||He(o)?r.push("".concat(Tt(i),":"),o,";"):Ye(o)?r.push.apply(r,a(a(["".concat(i," {")],Nt(o),!1),["}"],!1)):r.push("".concat(Tt(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ie||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ot(e,t,n,r){return Ft(e)?[]:Ve(e)?[".".concat(e.styledComponentId)]:He(e)?!He(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Ot(e(t),t,n,r):e instanceof Pt?n?(e.inject(n,r),[e.getName(r)]):[e]:Ye(e)?Nt(e):Array.isArray(e)?Array.prototype.concat.apply(he,e.map((function(e){return Ot(e,t,n,r)}))):[e.toString()];var a}function jt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(He(n)&&!Ve(n))return!1}return!0}var Mt=Ce(ue),Rt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&jt(e),this.componentId=t,this.baseHash=Ee(Mt,t),this.baseStyle=n,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Qe(r,this.staticRulesId);else{var a=Ke(Ot(this.rules,e,t,n)),i=Se(Ee(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Qe(r,i),this.staticRulesId=i}else{for(var l=Ee(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Ke(Ot(c,e,t,n));l=Ee(l,d+u),s+=d}}if(s){var f=Se(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Qe(r,f)}}return r},e}(),It=e.createContext(void 0);It.Consumer;var Lt={};new Set;function Dt(t,n,a){var i=Ve(t),o=t,l=!ze(t),s=n.attrs,u=void 0===s?he:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":ye(e);Lt[n]=(Lt[n]||0)+1;var r="".concat(n,"-").concat(_e(ue+n+Lt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,f=n.displayName,h=void 0===f?function(e){return ze(e)?"styled.".concat(e):"Styled(".concat(Pe(e),")")}(t):f,p=n.displayName&&n.componentId?"".concat(ye(n.displayName),"-").concat(n.componentId):n.componentId||d,m=i&&o.attrs?o.attrs.concat(u).filter(Boolean):u,g=n.shouldForwardProp;if(i&&o.shouldForwardProp){var b=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;g=function(e,t){return b(e,t)&&v(e,t)}}else g=b}var y=new Rt(a,p,i?o.componentStyle:void 0);function w(t,n){return function(t,n,a){var i=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,u=t.styledComponentId,c=t.target,d=e.useContext(It),f=Ct(),h=t.shouldForwardProp||f.shouldForwardProp,p=me(n,d,l)||pe,m=function(e,t,n){for(var a,i=r(r({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var l=He(a=e[o])?a(i):a;for(var s in l)i[s]="className"===s?Qe(i[s],l[s]):"style"===s?r(r({},i[s]),l[s]):l[s]}return t.className&&(i.className=Qe(i.className,t.className)),i}(i,n,p),g=m.as||c,b={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===p||("forwardedAs"===v?b.as=m.forwardedAs:h&&!h(v,g)||(b[v]=m[v]));var y=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),w=Qe(s,u);return y&&(w+=" "+y),m.className&&(w+=" "+m.className),b[ze(g)&&!ge.has(g)?"class":"className"]=w,a&&(b.ref=a),(0,e.createElement)(g,b)}(x,t,n)}w.displayName=h;var x=e.forwardRef(w);return x.attrs=m,x.componentStyle=y,x.displayName=h,x.shouldForwardProp=g,x.foldedComponentIds=i?Qe(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=i?o.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Ge(e,a[r],!0);return e}({},o.defaultProps,e):e}}),qe(x,(function(){return".".concat(x.styledComponentId)})),l&&Be(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function At(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var $t=function(e){return Object.assign(e,{isCss:!0})};function Wt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(He(e)||Ye(e))return $t(Ot(At(he,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ot(r):$t(Ot(At(r,t)))}function Ut(e,t,n){if(void 0===n&&(n=pe),!t)throw Xe(1,t);var i=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Wt.apply(void 0,a([r],i,!1)))};return i.attrs=function(a){return Ut(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ut(e,t,r(r({},n),a))},i}var Bt=function(e){return Ut(Dt,e)},Ht=Bt;ge.forEach((function(e){Ht[e]=Bt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=jt(e),gt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(Ke(Ot(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ut(),r=Ke([n&&'nonce="'.concat(n,'"'),"".concat(oe,'="true"'),"".concat(se,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Xe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Xe(2);var a=t.instance.toString();if(!a)return[];var i=((n={})[oe]="",n[se]=ue,n.dangerouslySetInnerHTML={__html:a},n),o=ut();return o&&(i.nonce=o),[e.createElement("style",r({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Xe(2);return e.createElement(_t,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Xe(3)}})(),"__sc-".concat(oe,"__");var Vt=n(579);const Qt=Ht.div`
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 0.5rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 120px;
    margin: 0;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 480px) {
    min-height: 100px;
    padding: 1.2rem;
    margin: 0;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
    
    &:active {
      transform: scale(0.95);
    }
  }
`,Kt=Ht.div`
  font-size: ${e=>e.isHebrew?"1.8rem":"1.6rem"};
  color: #2c3e50;
  font-weight: 500;
  direction: ${e=>e.isHebrew?"rtl":"ltr"};
  margin-bottom: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: ${e=>e.isHebrew?"1.6rem":"1.4rem"};
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  @media (max-width: 480px) {
    font-size: ${e=>e.isHebrew?"1.4rem":"1.2rem"};
    margin-bottom: 0.8rem;
    font-weight: 600;
  }
`,Yt=Ht.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #2c3e50;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  font-size: 1.2rem;
  display: ${e=>e.hidden?"none":"flex"};
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  min-width: 44px;
  min-height: 44px;
  border-radius: 50%;

  &:hover {
    opacity: 1;
    background-color: rgba(44, 62, 80, 0.1);
  }

  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 8px;
    min-width: 48px;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 6px;
    min-width: 52px;
    min-height: 52px;
  }
`,Gt=t=>{let{english:n,hebrew:r,forceFlipped:a}=t;const[i,o]=(0,e.useState)(!1);(0,e.useEffect)((()=>{void 0!==a&&o(a)}),[a]);return(0,Vt.jsxs)(Qt,{onClick:()=>o(!i),children:[(0,Vt.jsx)(Kt,{isHebrew:i,children:i?r:n}),(0,Vt.jsx)(Yt,{onClick:e=>{e.stopPropagation();const t=new SpeechSynthesisUtterance(n);t.lang="en-US",window.speechSynthesis.speak(t)},hidden:i,title:"Click to hear pronunciation",children:"\ud83d\udd0a"})]})};var qt=n(494),Xt=n.n(qt);const Zt=JSON.parse('{"L":[{"name":"Greetings and Common Phrases","wordPairs":[{"english":"Hello","hebrew":"\u05e9\u05dc\u05d5\u05dd"},{"english":"Goodbye","hebrew":"\u05dc\u05d4\u05ea\u05e8\u05d0\u05d5\u05ea"},{"english":"Thank you","hebrew":"\u05ea\u05d5\u05d3\u05d4"},{"english":"Please","hebrew":"\u05d1\u05d1\u05e7\u05e9\u05d4"},{"english":"Welcome","hebrew":"\u05d1\u05e8\u05d5\u05da \u05d4\u05d1\u05d0"},{"english":"Good morning","hebrew":"\u05d1\u05d5\u05e7\u05e8 \u05d8\u05d5\u05d1"},{"english":"Good night","hebrew":"\u05dc\u05d9\u05dc\u05d4 \u05d8\u05d5\u05d1"},{"english":"How are you?","hebrew":"\u05de\u05d4 \u05e9\u05dc\u05d5\u05de\u05da?"},{"english":"I love you","hebrew":"\u05d0\u05e0\u05d9 \u05d0\u05d5\u05d4\u05d1 \u05d0\u05d5\u05ea\u05da"},{"english":"Sorry","hebrew":"\u05e1\u05dc\u05d9\u05d7\u05d4"}]},{"name":"Days of the Week","wordPairs":[{"english":"Sunday","hebrew":"\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df"},{"english":"Monday","hebrew":"\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9"},{"english":"Tuesday","hebrew":"\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9"},{"english":"Wednesday","hebrew":"\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9"},{"english":"Thursday","hebrew":"\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9"},{"english":"Friday","hebrew":"\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9"},{"english":"Saturday","hebrew":"\u05e9\u05d1\u05ea"}]},{"name":"Time and Dates","wordPairs":[{"english":"Tomorrow","hebrew":"\u05de\u05d7\u05e8"},{"english":"Yesterday","hebrew":"\u05d0\u05ea\u05de\u05d5\u05dc"},{"english":"Maybe","hebrew":"\u05d0\u05d5\u05dc\u05d9"}]},{"name":"Places and Institutions","wordPairs":[{"english":"Town","hebrew":"\u05e2\u05d9\u05e8"},{"english":"School","hebrew":"\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8"},{"english":"Hospital","hebrew":"\u05d1\u05d9\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd"},{"english":"Farm","hebrew":"\u05d7\u05d5\u05d5\u05d4"},{"english":"House","hebrew":"\u05d1\u05d9\u05ea"}]},{"name":"People and Relationships","wordPairs":[{"english":"Friend","hebrew":"\u05d7\u05d1\u05e8"},{"english":"Help","hebrew":"\u05e2\u05d6\u05e8\u05d4"},{"english":"People","hebrew":"\u05d0\u05e0\u05e9\u05d9\u05dd"},{"english":"Doctor","hebrew":"\u05e8\u05d5\u05e4\u05d0"},{"english":"Boy","hebrew":"\u05d9\u05dc\u05d3"},{"english":"Astronaut","hebrew":"\u05d0\u05e1\u05d8\u05e8\u05d5\u05e0\u05d0\u05d5\u05d8"}]},{"name":"Food and Drink","wordPairs":[{"english":"Water","hebrew":"\u05de\u05d9\u05dd"},{"english":"Food","hebrew":"\u05d0\u05d5\u05db\u05dc"},{"english":"Dinner","hebrew":"\u05d0\u05e8\u05d5\u05d7\u05ea \u05e2\u05e8\u05d1"},{"english":"Cake","hebrew":"\u05e2\u05d5\u05d2\u05d4"},{"english":"Coconut","hebrew":"\u05e7\u05d5\u05e7\u05d5\u05e1"},{"english":"Corn","hebrew":"\u05ea\u05d9\u05e8\u05e1"}]},{"name":"Animals","wordPairs":[{"english":"Elephant","hebrew":"\u05e4\u05d9\u05dc"},{"english":"Kitten","hebrew":"\u05d7\u05ea\u05dc\u05ea\u05d5\u05dc"},{"english":"Animal","hebrew":"\u05d7\u05d9\u05d4"},{"english":"Bear","hebrew":"\u05d3\u05d5\u05d1"},{"english":"Tiger","hebrew":"\u05d8\u05d9\u05d2\u05e8\u05d9\u05e1"},{"english":"Lion","hebrew":"\u05d0\u05e8\u05d9\u05d4"},{"english":"Giraffe","hebrew":"\u05d2\'\u05d9\u05e8\u05e4\u05d4"},{"english":"Cat","hebrew":"\u05d7\u05ea\u05d5\u05dc"},{"english":"Dog","hebrew":"\u05db\u05dc\u05d1"},{"english":"bat","hebrew":"\u05e2\u05d8\u05dc\u05e3"},{"english":"Bird","hebrew":"\u05e6\u05d9\u05e4\u05d5\u05e8"},{"english":"Fish","hebrew":"\u05d3\u05d2"},{"english":"Snake","hebrew":"\u05e0\u05d7\u05e9"},{"english":"Rabbit","hebrew":"\u05d0\u05e8\u05e0\u05d1"},{"english":"Mouse","hebrew":"\u05e2\u05db\u05d1\u05e8"},{"english":"Pig","hebrew":"\u05d7\u05d6\u05d9\u05e8"},{"english":"Sheep","hebrew":"\u05db\u05d1\u05e9"},{"english":"Cow","hebrew":"\u05e4\u05e8\u05d4"},{"english":"Ant","hebrew":"\u05e0\u05de\u05dc\u05d4"},{"english":"Alligator","hebrew":"\u05ea\u05e0\u05d9\u05df"},{"english":"Butterfly","hebrew":"\u05e4\u05e8\u05e4\u05e8"},{"english":"Chick","hebrew":"\u05d0\u05e4\u05e8\u05d5\u05d7"}]},{"name":"Transportation","wordPairs":[{"english":"Car","hebrew":"\u05de\u05db\u05d5\u05e0\u05d9\u05ea"},{"english":"Bike","hebrew":"\u05d0\u05d5\u05e4\u05e0\u05d9\u05d9\u05dd"},{"english":"Trolley","hebrew":"\u05e2\u05d2\u05dc\u05d4"},{"english":"Motor","hebrew":"\u05de\u05e0\u05d5\u05e2"},{"english":"Driver","hebrew":"\u05e0\u05d4\u05d2"},{"english":"Airplane","hebrew":"\u05de\u05d8\u05d5\u05e1"},{"english":"Anchor","hebrew":"\u05e2\u05d5\u05d2\u05df"}]},{"name":"School and Office","wordPairs":[{"english":"Book","hebrew":"\u05e1\u05e4\u05e8"},{"english":"Pen","hebrew":"\u05e2\u05d8"},{"english":"Paper","hebrew":"\u05e0\u05d9\u05d9\u05e8"}]},{"name":"Colors","wordPairs":[{"english":"Red","hebrew":"\u05d0\u05d3\u05d5\u05dd"},{"english":"Blue","hebrew":"\u05db\u05d7\u05d5\u05dc"},{"english":"Green","hebrew":"\u05d9\u05e8\u05d5\u05e7"},{"english":"Yellow","hebrew":"\u05e6\u05d4\u05d5\u05d1"},{"english":"Orange","hebrew":"\u05db\u05ea\u05d5\u05dd"},{"english":"Purple","hebrew":"\u05e1\u05d2\u05d5\u05dc"},{"english":"Pink","hebrew":"\u05d5\u05e8\u05d5\u05d3"},{"english":"Brown","hebrew":"\u05d7\u05d5\u05dd"},{"english":"Black","hebrew":"\u05e9\u05d7\u05d5\u05e8"},{"english":"White","hebrew":"\u05dc\u05d1\u05df"},{"english":"Gray","hebrew":"\u05d0\u05e4\u05d5\u05e8"},{"english":"Gold","hebrew":"\u05d6\u05d4\u05d1"},{"english":"Silver","hebrew":"\u05db\u05e1\u05e3"}]},{"name":"Languages","wordPairs":[{"english":"Arabic","hebrew":"\u05e2\u05e8\u05d1\u05d9\u05ea"}]},{"name":"Emotions and States","wordPairs":[{"english":"Scared","hebrew":"\u05de\u05e4\u05d7\u05d3"},{"english":"Clean","hebrew":"\u05e0\u05e7\u05d9"},{"english":"Dirty","hebrew":"\u05de\u05dc\u05d5\u05db\u05dc\u05da"},{"english":"Smile","hebrew":"\u05d7\u05d9\u05d5\u05da"},{"english":"Cool","hebrew":"\u05e7\u05e8 , \u05de\u05d2\u05e0\u05d9\u05d1 (\u05e1\u05dc\u05e0\u05d2)"},{"english":"Tired","hebrew":"\u05e2\u05d9\u05d9\u05e3"},{"english":"Tear","hebrew":"\u05d3\u05de\u05e2\u05d4"},{"english":"Happy","hebrew":"\u05e9\u05de\u05d7"},{"english":"Sad","hebrew":"\u05e2\u05e6\u05d5\u05d1"},{"english":"Rich","hebrew":"\u05e2\u05e9\u05d9\u05e8"},{"english":"Poor","hebrew":"\u05e2\u05e0\u05d9"}]},{"name":"Activities","wordPairs":[{"english":"Party","hebrew":"\u05de\u05e1\u05d9\u05d1\u05d4"},{"english":"Tricks","hebrew":"\u05d8\u05e8\u05d9\u05e7\u05d9\u05dd"}]},{"name":"Verbs","wordPairs":[{"english":"Watch","hebrew":"\u05e6\u05d5\u05e4\u05d4"},{"english":"Listen","hebrew":"\u05dc\u05d4\u05e7\u05e9\u05d9\u05d1"},{"english":"Wakes up","hebrew":"\u05de\u05ea\u05e2\u05d5\u05e8\u05e8"},{"english":"With","hebrew":"\u05e2\u05dd"},{"english":"Thirsty","hebrew":"\u05e6\u05de\u05d0"},{"english":"Hungry","hebrew":"\u05e8\u05e2\u05d1"},{"english":"Want","hebrew":"\u05e8\u05d5\u05e6\u05d4"},{"english":"Wear","hebrew":"\u05dc\u05d5\u05d1\u05e9"},{"english":"Wearing","hebrew":"\u05dc\u05d5\u05d1\u05e9"}]},{"name":"Sentences","wordPairs":[{"english":"How many lions do you have?","hebrew":"\u05db\u05de\u05d4 \u05d0\u05e8\u05d9\u05d5\u05ea \u05d9\u05e9 \u05dc\u05da"},{"english":"We have five lions","hebrew":"\u05d9\u05e9 \u05dc\u05e0\u05d5 \u05d7\u05de\u05d9\u05e9\u05d4 \u05d0\u05e8\u05d9\u05d5\u05ea"},{"english":"There are two elephants","hebrew":"\u05d9\u05e9 \u05e9\u05e0\u05d9 \u05e4\u05d9\u05dc\u05d9\u05dd"},{"english":"What time is it?","hebrew":"\u05de\u05d4 \u05d4\u05e9\u05e2\u05d4?"},{"english":"Its three o`clock","hebrew":"\u05d4\u05e9\u05e2\u05d4 \u05e9\u05dc\u05d5\u05e9"},{"english":"Its half past two","hebrew":"\u05d4\u05e9\u05e2\u05d4 \u05e9\u05ea\u05d9\u05d9\u05dd \u05d5\u05d7\u05e6\u05d9"},{"english":"I wake up at seven o`clock","hebrew":"\u05d0\u05e0\u05d9 \u05de\u05ea\u05e2\u05d5\u05e8\u05e8 \u05d1\u05e9\u05e2\u05d4 \u05e9\u05d1\u05e2"},{"english":"I eat dinner at half past six","hebrew":"\u05d0\u05e0\u05d9 \u05d0\u05d5\u05db\u05dc \u05d0\u05e8\u05d5\u05d7\u05ea \u05e2\u05e8\u05d1 \u05d1\u05e9\u05e2\u05d4 \u05e9\u05e9 \u05d5\u05d7\u05e6\u05d9"},{"english":"What are you good at?","hebrew":"\u05d1\u05de\u05d4 \u05d0\u05ea\u05d4 \u05d8\u05d5\u05d1 ?"},{"english":"I am good at Arabic","hebrew":"\u05d0\u05e0\u05d9 \u05d8\u05d5\u05d1 \u05d1\u05e2\u05e8\u05d1\u05d9\u05ea"},{"english":"I have a test in Hebrew","hebrew":"\u05d9\u05e9 \u05dc\u05d9 \u05de\u05d1\u05d7\u05df \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea"},{"english":"Look at my new tricks","hebrew":"\u05e8\u05d0\u05d4 \u05d0\u05ea \u05d4\u05d8\u05e8\u05d9\u05e7\u05d9\u05dd \u05d4\u05d7\u05d3\u05e9\u05d9\u05dd \u05e9\u05dc\u05d9"},{"english":"Please tell me your name","hebrew":"\u05d1\u05d1\u05e7\u05e9\u05d4 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d9 \u05d0\u05ea \u05e9\u05de\u05da"},{"english":"Come to my birthday party","hebrew":"\u05d1\u05d5\u05d0 \u05dc\u05de\u05e1\u05d9\u05d1\u05ea \u05d9\u05d5\u05dd \u05d4\u05d4\u05d5\u05dc\u05d3\u05ea \u05e9\u05dc\u05d9"},{"english":"What can I bring?","hebrew":"\u05de\u05d4 \u05d0\u05e0\u05d9 \u05d9\u05db\u05d5\u05dc \u05dc\u05d4\u05d1\u05d9\u05d0?"},{"english":"I know","hebrew":"\u05d0\u05e0\u05d9 \u05d9\u05d5\u05d3\u05e2"},{"english":"I don\'t know","hebrew":"\u05d0\u05e0\u05d9 \u05dc\u05d0 \u05d9\u05d5\u05d3\u05e2"},{"english":"Let\'s play with the kitten","hebrew":"\u05d1\u05d5\u05d0 \u05e0\u05e9\u05d7\u05e7 \u05e2\u05dd \u05d4\u05d7\u05ea\u05dc\u05ea\u05d5\u05dc"},{"english":"Good idea","hebrew":"\u05e8\u05e2\u05d9\u05d5\u05df \u05d8\u05d5\u05d1"}]},{"name":"Objects","wordPairs":[{"english":"Apple","hebrew":"\u05ea\u05e4\u05d5\u05d7"},{"english":"Table","hebrew":"\u05e9\u05d5\u05dc\u05d7\u05df"},{"english":"Bottle","hebrew":"\u05d1\u05e7\u05d1\u05d5\u05e7"},{"english":"Chair","hebrew":"\u05db\u05d9\u05e1\u05d0"},{"english":"Mirror","hebrew":"\u05de\u05e8\u05d0\u05d4"},{"english":"Ball","hebrew":"\u05db\u05d3\u05d5\u05e8"}]},{"name":"Shapes and Sizes","wordPairs":[{"english":"Circle","hebrew":"\u05de\u05e2\u05d2\u05dc"},{"english":"Far","hebrew":"\u05e8\u05d7\u05d5\u05e7"},{"english":"Bigger","hebrew":"\u05d2\u05d3\u05d5\u05dc \u05d9\u05d5\u05ea\u05e8"},{"english":"Big","hebrew":"\u05d2\u05d3\u05d5\u05dc"},{"english":"Small","hebrew":"\u05e7\u05d8\u05df"},{"english":"Long","hebrew":"\u05d0\u05e8\u05d5\u05da"},{"english":"Short","hebrew":"\u05e7\u05e6\u05e8"},{"english":"Tall","hebrew":"\u05d2\u05d1\u05d5\u05d4"},{"english":"Thin","hebrew":"\u05e8\u05d6\u05d4"},{"english":"Wide","hebrew":"\u05e8\u05d7\u05d1"},{"english":"Narrow","hebrew":"\u05e6\u05e8"},{"english":"Old","hebrew":"\u05d9\u05e9\u05df"},{"english":"New","hebrew":"\u05d7\u05d3\u05e9"},{"english":"Fast","hebrew":"\u05de\u05d4\u05d9\u05e8"},{"english":"Slow","hebrew":"\u05d0\u05d9\u05d8\u05d9"},{"english":"Expensive","hebrew":"\u05d9\u05e7\u05e8"},{"english":"Cheap","hebrew":"\u05d6\u05d5\u05dc"}]},{"name":"Technology","wordPairs":[{"english":"Laser","hebrew":"\u05dc\u05d9\u05d9\u05d6\u05e8"}]},{"name":"Roles and People","wordPairs":[{"english":"Leader","hebrew":"\u05de\u05d5\u05d1\u05d9\u05dc"},{"english":"Player","hebrew":"\u05e9\u05d7\u05e7\u05df"},{"english":"Singer","hebrew":"\u05d6\u05de\u05e8"}]},{"name":"Nature and Environment","wordPairs":[{"english":"Air","hebrew":"\u05d0\u05d5\u05d5\u05d9\u05e8"}]},{"name":"Money","wordPairs":[{"english":"Penny","hebrew":"\u05e4\u05e0\u05d9"},{"english":"Dollar","hebrew":"\u05d3\u05d5\u05dc\u05e8"}]},{"name":"Clothing and Accessories","wordPairs":[{"english":"Cape","hebrew":"\u05d2\u05dc\u05d9\u05de\u05d4"},{"english":"Belt","hebrew":"\u05d7\u05d2\u05d5\u05e8\u05d4"},{"english":"Scarf","hebrew":"\u05e6\u05e2\u05d9\u05e3"},{"english":"Clothes","hebrew":"\u05d1\u05d2\u05d3\u05d9\u05dd"}]},{"name":"Weather","wordPairs":[{"english":"Windy","hebrew":"\u05e1\u05d5\u05e2\u05e8"},{"english":"Weather","hebrew":"\u05de\u05d6\u05d2 \u05d0\u05d5\u05d5\u05d9\u05e8"},{"english":"Cloudy","hebrew":"\u05de\u05e2\u05d5\u05e0\u05df"},{"english":"Rainy","hebrew":"\u05d2\u05e9\u05d5\u05dd"},{"english":"Warm","hebrew":"\u05d7\u05dd"}]},{"name":"Conjunctions and Connectors","wordPairs":[{"english":"But","hebrew":"\u05d0\u05d1\u05dc"}]}]}'),Jt=Ht.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,en=(Ht.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Ht.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`),tn=Ht.h3`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`,nn=Ht.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #2c3e50;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`,rn=Ht.button`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  border: 2px solid ${e=>e.$showAnswer?e.$isCorrect?"#4CAF50":e.$isSelected&&!e.$isCorrect?"#f44336":"#e0e0e0":"#e0e0e0"};
  border-radius: 8px;
  background-color: ${e=>e.$showAnswer?e.$isCorrect?"#E8F5E9":e.$isSelected&&!e.$isCorrect?"#FFEBEE":"white":"white"};
  color: #2c3e50;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    margin-bottom: 0.7rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: ${e=>e.$showAnswer?"inherit":"#f5f5f5"};
  }
`,an=Ht.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${e=>e.$isCorrect?"#E8F5E9":"#FFEBEE"};
  color: ${e=>e.$isCorrect?"#2E7D32":"#C62828"};
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-top: 0.7rem;
    padding: 0.7rem;
    font-size: 0.8rem;
  }
`,on=Ht.button`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  
  &:hover {
    background-color: #27ae60;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 1rem;
    margin-top: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
  }
`,ln=Ht.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,sn=Ht.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,un=Ht.p`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,cn=Ht.p`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,dn=Ht.button`
  padding: 0.8rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
  }
`,fn=Ht.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`,hn=Ht.div`
  margin: 1rem 0 1.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    margin: 0.8rem 0 1.2rem;
  }
`,pn=Ht.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    height: 6px;
  }
`,mn=Ht.div`
  width: ${e=>e.$progress}%;
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s ease;
`,gn=Ht.div`
  text-align: right;
  color: #666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,bn=(Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  overflow: hidden;
`,Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`),vn=Ht.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  margin-top: 2rem;
`,yn=Ht.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,wn=Ht.p`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,xn=Ht.button`
  padding: 0.8rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
  }
`,Sn=()=>{const[t,n]=(0,e.useState)(0),[r,a]=(0,e.useState)(null),[i,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(0),[u,c]=(0,e.useState)(!1),[d,f]=(0,e.useState)(!1),[h,p]=(0,e.useState)(!1),[m,g]=(0,e.useState)({width:0,height:0}),b=(0,e.useRef)(),v=[{particleCount:200,spread:70,origin:{y:.6},startVelocity:55,decay:.9,gravity:1,drift:0,ticks:200,colors:["#ff0000","#ffd700","#ff4500"]},{particleCount:250,spread:60,origin:{y:.6},startVelocity:60,decay:.92,gravity:1.1,drift:.1,ticks:200,colors:["#0000ff","#87ceeb","#ffffff"]},{particleCount:300,spread:90,origin:{y:.6},startVelocity:65,decay:.91,gravity:1.2,drift:.2,ticks:200,colors:["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"]},{particleCount:180,spread:80,origin:{y:.6},startVelocity:50,decay:.93,gravity:.9,drift:.15,ticks:200,colors:["#800080","#ff69b4","#ff1493"]},{particleCount:220,spread:75,origin:{y:.6},startVelocity:58,decay:.89,gravity:1.05,drift:.1,ticks:200,colors:["#008000","#ffd700","#90ee90"]}],y=[{particleCount:300,spread:70,origin:{y:.6},startVelocity:65,decay:.92,gravity:1.1,drift:.1,ticks:200,colors:["#FFD700","#FFA500","#FFE5B4"]},{particleCount:400,spread:90,origin:{y:.6},startVelocity:70,decay:.91,gravity:1.2,drift:.2,ticks:200,colors:["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF"]},{particleCount:350,spread:80,origin:{y:.6},startVelocity:60,decay:.93,gravity:1.05,drift:.15,ticks:200,colors:["#FFFFFF","#FFD700","#FFA500"]}];(0,e.useEffect)((()=>{const e=()=>{g({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const w=e.useMemo((()=>[...Zt.L.flatMap((e=>e.wordPairs.map((e=>({question:`What is the Hebrew translation for "${e.english}"?`,correctAnswer:e.hebrew,englishWord:e.english})))))].sort((()=>Math.random()-.5)).slice(0,30).map((e=>{const t=[e.correctAnswer,...S(Zt.L,e.correctAnswer,3)].sort((()=>Math.random()-.5));return{...e,options:t}}))),[]),x=w[t];function S(e,t,n){const r=e.flatMap((e=>e.wordPairs.map((e=>e.hebrew)))).filter(((e,n,r)=>e!==t&&r.indexOf(e)===n));return[...r].sort((()=>Math.random()-.5)).slice(0,Math.min(n,r.length))}const k=e=>{let{confetti:t}=e;b.current=t},E=()=>{n(0),a(null),o(!1),s(0),c(!1),f(!1),p(!1)},C=()=>{p(!1)},_=t/w.length*100;if(u){const e=Math.round(l/w.length*100),t=e>=90,n=100===e;return(0,Vt.jsxs)(Jt,{children:[(0,Vt.jsx)(Xt(),{onInit:k}),(0,Vt.jsxs)(ln,{children:[(0,Vt.jsx)(sn,{children:"Exam Complete!"}),(0,Vt.jsxs)(un,{children:["You got ",l," out of ",w.length," questions correct"]}),(0,Vt.jsxs)(cn,{children:[e,"%"]}),n&&(0,Vt.jsx)(un,{style:{color:"#FFD700",fontWeight:"bold",fontSize:"1.4rem"},children:"Perfect Score! \ud83c\udf1f"}),t&&!n&&(0,Vt.jsx)(un,{style:{color:"#27ae60",fontWeight:"bold"},children:"Excellent! \ud83c\udf89"}),(0,Vt.jsx)(dn,{onClick:E,children:"Take Exam Again"})]}),h&&(0,Vt.jsx)(bn,{children:(0,Vt.jsxs)(vn,{children:[(0,Vt.jsx)(yn,{children:"Keep Practicing!"}),(0,Vt.jsx)(wn,{children:"Your score is below 90%. Consider reviewing the words in the Words tab before trying the exam again."}),(0,Vt.jsx)(xn,{onClick:C,children:"Close"})]})})]})}return(0,Vt.jsxs)(Jt,{children:[(0,Vt.jsx)(fn,{children:"Words Practice"}),(0,Vt.jsxs)(hn,{children:[(0,Vt.jsx)(pn,{$progress:_,children:(0,Vt.jsx)(mn,{$progress:_})}),(0,Vt.jsxs)(gn,{children:[t," / ",w.length]})]}),(0,Vt.jsxs)(en,{children:[(0,Vt.jsxs)(tn,{children:[x.question,(0,Vt.jsx)(nn,{onClick:()=>(e=>{const t=new SpeechSynthesisUtterance(e);t.lang="en-US",window.speechSynthesis.speak(t)})(x.englishWord),children:"\ud83d\udd0a"})]}),x.options.map(((e,l)=>{const u=r===e,c=e===x.correctAnswer;return(0,Vt.jsx)(rn,{$isSelected:u,$isCorrect:c,$showAnswer:i,onClick:()=>{return r=e,void(i||(a(r),o(!0),r===x.correctAnswer&&(s((e=>e+1)),t<w.length-1&&setTimeout((()=>{a(null),o(!1),n((e=>e+1))}),2e3))));var r},children:e},l)})),i&&(0,Vt.jsx)(an,{$isCorrect:r===x.correctAnswer,children:r===x.correctAnswer?"Correct! Well done!":`Incorrect. The correct answer is: ${x.correctAnswer}`})]}),i&&(r!==x.correctAnswer||t===w.length-1)&&(0,Vt.jsx)(on,{onClick:()=>{a(null),o(!1),t===w.length-1?(c(!0),(()=>{if(b.current){const e=Math.round(l/w.length*100);if(100===e)y.forEach(((e,t)=>{setTimeout((()=>{var t;null===(t=b.current)||void 0===t||t.call(b,e)}),500*t)}));else if(e>=90){const e=[v[Math.floor(Math.random()*v.length)],v[Math.floor(Math.random()*v.length)],v[Math.floor(Math.random()*v.length)]];b.current(e[0]),setTimeout((()=>{var t;null===(t=b.current)||void 0===t||t.call(b,e[1])}),300),setTimeout((()=>{var t;null===(t=b.current)||void 0===t||t.call(b,e[2])}),600)}}})()):n((e=>e+1))},children:t===w.length-1?"Finish Quiz":"Next Question"})]})},kn=Ht.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,En=Ht.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Cn=Ht.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`,_n=(Ht.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 0 auto 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ht.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Ht.div`
  width: 100%;
  max-width: 400px;
  margin-top: 1rem;
`,Ht.button`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 2px solid ${e=>e.$showAnswer?e.$isCorrect?"#27ae60":e.$isSelected&&!e.$isCorrect?"#e74c3c":"#e0e0e0":"#e0e0e0"};
  border-radius: 8px;
  background-color: ${e=>e.$showAnswer?e.$isCorrect?"#e8f5e9":e.$isSelected&&!e.$isCorrect?"#ffebee":"white":"white"};
  color: #2c3e50;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    cursor: default;
    transform: none;
    box-shadow: none;
  }
`,Ht.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${e=>e.$isCorrect?"#e8f5e9":"#ffebee"};
  color: ${e=>e.$isCorrect?"#27ae60":"#e74c3c"};
  text-align: center;
  font-weight: 500;
`,Ht.button`
  width: 100%;
  padding: 1rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #34495e;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,Ht.div`
  margin-bottom: 2rem;
`,Ht.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,Ht.div`
  width: ${e=>e.$progress}%;
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s ease;
`,Ht.div`
  text-align: center;
  color: #2c3e50;
  font-size: 0.9rem;
`,Ht.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`,Ht.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`,Ht.p`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,Ht.div`
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
`,Ht.button`
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: #34495e;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,()=>(0,Vt.jsxs)(kn,{style:{cursor:"default"},children:[(0,Vt.jsx)(En,{children:"Word Practice in Pictures"}),(0,Vt.jsx)(Cn,{children:(0,Vt.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#666",fontSize:"1.2rem",cursor:"default"},children:"This feature is temporarily unavailable. Please check back later."})})]})),Pn=Ht.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,zn=Ht.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Tn=Ht.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    border-radius: 10px;
  }
`,Fn=Ht.h3`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`,Nn=Ht.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #2c3e50;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  min-width: 44px;
  min-height: 44px;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    min-width: 48px;
    min-height: 48px;
  }

  &:hover {
    transform: scale(1.1);
    background-color: rgba(44, 62, 80, 0.1);
  }
`,On=Ht.button`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  border: 2px solid ${e=>e.$showAnswer?e.$isCorrect?"#4CAF50":e.$isSelected&&!e.$isCorrect?"#f44336":"#e0e0e0":"#e0e0e0"};
  border-radius: 8px;
  background-color: ${e=>e.$showAnswer?e.$isCorrect?"#E8F5E9":e.$isSelected&&!e.$isCorrect?"#FFEBEE":"white":"white"};
  color: #2c3e50;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  min-height: 44px;
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    margin-bottom: 0.7rem;
    font-size: 0.9rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    font-size: 0.85rem;
    min-height: 52px;
  }

  &:hover {
    background-color: ${e=>e.$showAnswer?"inherit":"#f5f5f5"};
  }
  
  &:active {
    transform: scale(0.98);
  }
`,jn=Ht.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${e=>e.$isCorrect?"#E8F5E9":"#FFEBEE"};
  color: ${e=>e.$isCorrect?"#2E7D32":"#C62828"};
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-top: 0.7rem;
    padding: 0.7rem;
    font-size: 0.8rem;
  }
`,Mn=Ht.button`
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  min-height: 44px;
  
  &:hover {
    background-color: #27ae60;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 1rem;
    margin-top: 0.8rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
    min-height: 52px;
  }
`,Rn=Ht.div`
  margin: 1rem 0 1.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    margin: 0.8rem 0 1.2rem;
  }
`,In=Ht.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    height: 6px;
  }
`,Ln=Ht.div`
  width: ${e=>e.$progress}%;
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s ease;
`,Dn=Ht.div`
  text-align: right;
  color: #666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,An=Ht.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,$n=Ht.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,Wn=Ht.p`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Un=Ht.p`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,Bn=Ht.button`
  padding: 0.8rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px;
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    min-height: 48px;
  }

  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
  }
`,Hn=Ht.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Vn=Ht.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Qn=Ht.p`
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
`,Kn=Ht.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`,Yn=Ht.button`
  padding: 1rem 1.5rem;
  border: 2px solid ${e=>e.isSelected?"#2c3e50":"#e0e0e0"};
  border-radius: 12px;
  background-color: ${e=>e.isSelected?"#2c3e50":"white"};
  color: ${e=>e.isSelected?"white":"#2c3e50"};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:hover {
    border-color: #2c3e50;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    min-height: 55px;
    font-size: 0.9rem;
  }
`,Gn=Ht.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,qn=Ht.div`
  font-size: 0.9rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,Xn=Ht.button`
  padding: 1rem 2rem;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 50px;
  width: 100%;
  
  &:hover {
    background-color: #229954;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`,Zn=()=>{const[t,n]=(0,e.useState)(0),[r,a]=(0,e.useState)(null),[i,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(0),[u,c]=(0,e.useState)(!1),[d,f]=(0,e.useState)(!0),[h,p]=(0,e.useState)(50),m=(0,e.useRef)(),g=e.useMemo((()=>[...Zt.L.flatMap((e=>e.wordPairs.map((t=>({question:`What is the Hebrew translation for "${t.english}"?`,correctAnswer:t.hebrew,englishWord:t.english,category:e.name})))))].sort((()=>Math.random()-.5)).slice(0,h).map((e=>{const t=[e.correctAnswer,...v(Zt.L,e.correctAnswer,3)].sort((()=>Math.random()-.5));return{...e,options:t}}))),[]),b=g[t];function v(e,t,n){const r=e.flatMap((e=>e.wordPairs.map((e=>e.hebrew)))).filter(((e,n,r)=>e!==t&&r.indexOf(e)===n));return[...r].sort((()=>Math.random()-.5)).slice(0,Math.min(n,r.length))}const y=e=>{let{confetti:t}=e;m.current=t},w=()=>{n(0),a(null),o(!1),s(0),c(!1),f(!0)},x=()=>{f(!1),n(0),a(null),o(!1),s(0),c(!1)},S=t/g.length*100;if(u){const e=Math.round(l/g.length*100),t=e>=80,n=100===e;return(0,Vt.jsxs)(Pn,{children:[(0,Vt.jsx)(Xt(),{onInit:y}),(0,Vt.jsxs)(An,{children:[(0,Vt.jsx)($n,{children:"Final Exam Complete! \ud83c\udf93"}),(0,Vt.jsxs)(Wn,{children:["You got ",l," out of ",g.length," questions correct"]}),(0,Vt.jsxs)(Un,{children:[e,"%"]}),n&&(0,Vt.jsx)(Wn,{style:{color:"#FFD700",fontWeight:"bold",fontSize:"1.4rem"},children:"Perfect Score! \ud83c\udf1f Outstanding!"}),t&&!n&&(0,Vt.jsx)(Wn,{style:{color:"#27ae60",fontWeight:"bold"},children:"Excellent Work! \ud83c\udf89"}),!t&&(0,Vt.jsx)(Wn,{style:{color:"#e67e22",fontWeight:"bold"},children:"Good effort! Keep practicing! \ud83d\udcda"}),(0,Vt.jsx)(Bn,{onClick:w,children:"Take Final Exam Again"})]})]})}return d?(0,Vt.jsxs)(Pn,{children:[(0,Vt.jsx)(zn,{children:"Final Exam Setup"}),(0,Vt.jsxs)(Hn,{children:[(0,Vt.jsx)(Vn,{children:"Choose Exam Length"}),(0,Vt.jsx)(Qn,{children:"Select how many questions you want in your final exam. You can always retake the exam with a different length."}),(0,Vt.jsxs)(Kn,{children:[(0,Vt.jsxs)(Yn,{isSelected:50===h,onClick:()=>p(50),children:[(0,Vt.jsx)(Gn,{children:"\ud83d\udcdd Quick Exam (50 Questions)"}),(0,Vt.jsx)(qn,{children:"~15-20 minutes \u2022 Good for practice and review"})]}),(0,Vt.jsxs)(Yn,{isSelected:162===h,onClick:()=>p(162),children:[(0,Vt.jsx)(Gn,{children:"\ud83c\udf93 Complete Exam (162 Questions)"}),(0,Vt.jsx)(qn,{children:"~45-60 minutes \u2022 Tests all vocabulary words"})]})]}),(0,Vt.jsxs)(Xn,{onClick:x,children:["Start ",50===h?"Quick":"Complete"," Final Exam"]})]})]}):(0,Vt.jsxs)(Pn,{children:[(0,Vt.jsxs)(zn,{children:["Final Exam - ",50===h?"Quick":"Complete"," (",h," Questions)"]}),(0,Vt.jsxs)(Rn,{children:[(0,Vt.jsx)(In,{$progress:S,children:(0,Vt.jsx)(Ln,{$progress:S})}),(0,Vt.jsxs)(Dn,{children:[t," / ",g.length]})]}),(0,Vt.jsxs)(Tn,{children:[(0,Vt.jsxs)(Fn,{children:[b.question,(0,Vt.jsx)(Nn,{onClick:()=>(e=>{const t=new SpeechSynthesisUtterance(e);t.lang="en-US",window.speechSynthesis.speak(t)})(b.englishWord),children:"\ud83d\udd0a"})]}),b.options.map(((e,l)=>{const u=r===e,c=e===b.correctAnswer;return(0,Vt.jsx)(On,{$isSelected:u,$isCorrect:c,$showAnswer:i,onClick:()=>{return r=e,void(i||(a(r),o(!0),r===b.correctAnswer&&(s((e=>e+1)),t<g.length-1&&setTimeout((()=>{a(null),o(!1),n((e=>e+1))}),2e3))));var r},children:e},l)})),i&&(0,Vt.jsx)(jn,{$isCorrect:r===b.correctAnswer,children:r===b.correctAnswer?"Correct! Well done!":`Incorrect. The correct answer is: ${b.correctAnswer}`})]}),i&&(r!==b.correctAnswer||t===g.length-1)&&(0,Vt.jsx)(Mn,{onClick:()=>{a(null),o(!1),t===g.length-1?(c(!0),(()=>{if(m.current){const e=Math.round(l/g.length*100);if(100===e)[{particleCount:300,spread:70,origin:{y:.6},startVelocity:65,decay:.92,gravity:1.1,drift:.1,ticks:200,colors:["#FFD700","#FFA500","#FFE5B4"]},{particleCount:400,spread:90,origin:{y:.6},startVelocity:70,decay:.91,gravity:1.2,drift:.2,ticks:200,colors:["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF"]}].forEach(((e,t)=>{setTimeout((()=>{var t;null===(t=m.current)||void 0===t||t.call(m,e)}),500*t)}));else if(e>=80){const e=[{particleCount:200,spread:70,origin:{y:.6},startVelocity:55,decay:.9,gravity:1,drift:0,ticks:200,colors:["#ff0000","#ffd700","#ff4500"]},{particleCount:250,spread:60,origin:{y:.6},startVelocity:60,decay:.92,gravity:1.1,drift:.1,ticks:200,colors:["#0000ff","#87ceeb","#ffffff"]}];m.current(e[0]),setTimeout((()=>{var t;null===(t=m.current)||void 0===t||t.call(m,e[1])}),300)}}})()):n((e=>e+1))},children:t===g.length-1?"Finish Final Exam":"Next Question"})]})},Jn=Ht.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`,er=Ht.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`,tr=Ht.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`,nr=Ht.p`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
    line-height: 1.7;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    padding: 0 0.8rem;
    line-height: 1.8;
  }
`,rr=(Ht.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    flex-direction: column;
    align-items: center;
  }
`,Ht.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: ${e=>e.isActive?"#2c3e50":"white"};
  color: ${e=>e.isActive?"white":"#2c3e50"};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  min-height: 44px;
  min-width: 44px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    min-height: 52px;
    white-space: normal;
    text-align: center;
  }
`),ar=(Ht(rr)`
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
`,Ht.div`
  margin-bottom: 3rem;
`),ir=Ht.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #2c3e50;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`,or=Ht.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`,lr=Ht.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`,sr=(Ht.div`
  width: 220px;
  background: #f7f9fa;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1rem 0.5rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: fit-content;
  
  @media (max-width: 900px) {
    width: 100px;
    margin-right: 1rem;
    padding: 0.5rem 0.2rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1.5rem;
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    gap: 0.4rem;
    border-radius: 10px;
  }
`,Ht.button`
  background: ${e=>e.isActive?"#2c3e50":"white"};
  color: ${e=>e.isActive?"white":"#2c3e50"};
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 0.3rem;
  text-align: left;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  min-height: 44px;
  
  &:hover {
    background: #e0e0e0;
    color: #2c3e50;
  }
  
  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.5rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    text-align: center;
    flex: 1;
    min-width: 100px;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 0.6rem;
    font-size: 0.85rem;
    min-width: 90px;
    min-height: 52px;
  }
`,Ht.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Ht.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #2c3e50;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`),ur=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,cr=Ht.button`
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #95a5a6;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 44px;
  
  &:hover {
    background-color: #7f8c8d;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    min-height: 52px;
  }
`,dr=Ht.button`
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 44px;
  
  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    min-height: 52px;
  }
`,fr=Ht.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,hr=Ht.button`
  background: white;
  border: none;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 100px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
    min-height: 90px;
    border-radius: 10px;
  }
`,pr=Ht.h3`
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,mr=Ht.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`,gr=Ht(hr)`
  opacity: 0.5;
  cursor: not-allowed;
  
  &:hover {
    transform: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: none;
  }
`,br=Ht.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.8rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`,vr=Ht.button`
  background: ${e=>e.isActive?"#2c3e50":"white"};
  color: ${e=>e.isActive?"white":"#2c3e50"};
  border: none;
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  font-size: 0.9rem;
  font-weight: 500;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 70px;
    font-size: 0.85rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    min-height: 60px;
    font-size: 0.8rem;
    border-radius: 8px;
  }
`,yr=()=>{const[t,n]=(0,e.useState)("main"),[r,a]=(0,e.useState)(0),[i,o]=(0,e.useState)(!1),l=[...Zt.L].sort(((e,t)=>e.name.localeCompare(t.name))),s=Zt.L.flatMap((e=>e.wordPairs.filter((e=>/(?:le|ar|ir|er)$/i.test(e.english))).map((t=>({...t,category:e.name}))))),u=["le","ar","ir","er"],c=e.useMemo((()=>s.map((e=>{const t=u.find((t=>e.english.toLowerCase().endsWith(t)));return{base:t?e.english.slice(0,-t.length):e.english,correctEnding:t,fullWord:e.english,hebrew:e.hebrew}})).sort((()=>Math.random()-.5)).slice(0,20)),[s.length]),[d,f]=e.useState(0),[h,p]=e.useState(null),[m,g]=e.useState(!1),[b,v]=e.useState(0),[y,w]=e.useState(!1),x=-1===r,S=l[r],[k,E]=(0,e.useState)(!0);return(0,Vt.jsxs)(Jn,{children:[(0,Vt.jsxs)(or,{children:[(0,Vt.jsx)(er,{children:"English"}),"main"!==t&&(0,Vt.jsxs)(ur,{children:[(0,Vt.jsx)(cr,{onClick:()=>{"words"===t?k?n("main"):E(!0):n("words")},children:"\u2190 Back"}),(0,Vt.jsx)(dr,{onClick:()=>{n("main")},children:"\ud83c\udfe0 Home"})]})]}),(0,Vt.jsxs)(lr,{children:["main"===t&&(0,Vt.jsxs)(fr,{children:[(0,Vt.jsxs)(hr,{onClick:()=>n("words"),children:[(0,Vt.jsx)(pr,{children:"\ud83d\udcda Words"}),(0,Vt.jsx)(mr,{children:"Study vocabulary by category"})]}),(0,Vt.jsxs)(hr,{onClick:()=>n("exam"),children:[(0,Vt.jsx)(pr,{children:"\ud83c\udfaf Words Practice"}),(0,Vt.jsx)(mr,{children:"Practice with multiple choice questions"})]}),(0,Vt.jsxs)(hr,{onClick:()=>n("leArIrEr"),children:[(0,Vt.jsx)(pr,{children:"\ud83d\udd24 le, ar, ir, er Words"}),(0,Vt.jsx)(mr,{children:"Special focus on word endings"})]}),(0,Vt.jsxs)(hr,{onClick:()=>n("leArIrErExam"),children:[(0,Vt.jsx)(pr,{children:"\ud83d\udcdd le, ar, ir, er Exam"}),(0,Vt.jsx)(mr,{children:"Test your knowledge of word endings"})]}),(0,Vt.jsxs)(hr,{onClick:()=>n("finalExam"),children:[(0,Vt.jsx)(pr,{children:"\ud83c\udf93 Final Exam"}),(0,Vt.jsx)(mr,{children:"Comprehensive test of all vocabulary"})]}),(0,Vt.jsxs)(gr,{children:[(0,Vt.jsx)(pr,{children:"\ud83d\uddbc\ufe0f Word Practice in Pictures"}),(0,Vt.jsx)(mr,{children:"Coming soon..."})]}),(0,Vt.jsxs)(gr,{children:[(0,Vt.jsx)(pr,{children:"\ud83d\udcd6 Story-1"}),(0,Vt.jsx)(mr,{children:"Coming soon..."})]}),(0,Vt.jsxs)(gr,{children:[(0,Vt.jsx)(pr,{children:"\ud83d\udcd6 Story-2"}),(0,Vt.jsx)(mr,{children:"Coming soon..."})]})]}),"words"===t&&(0,Vt.jsx)(Vt.Fragment,{children:k?(0,Vt.jsxs)("div",{style:{width:"100%"},children:[(0,Vt.jsx)(nr,{children:"Choose a category to study vocabulary words"}),(0,Vt.jsxs)(br,{children:[(0,Vt.jsx)(vr,{isActive:x,onClick:()=>{a(-1),E(!1)},children:"\ud83d\udcda All Words"}),l.map(((e,t)=>(0,Vt.jsx)(vr,{isActive:r===t,onClick:()=>{a(t),E(!1)},children:e.name},e.name)))]})]}):(0,Vt.jsxs)("div",{style:{width:"100%"},children:[(0,Vt.jsxs)(nr,{children:["Click on a card to reveal its Hebrew translation.",(0,Vt.jsx)("br",{}),"Click the speaker icon \ud83d\udd0a to hear the English pronunciation."]}),(0,Vt.jsx)("div",{style:{textAlign:"center",marginBottom:"1rem"},children:(0,Vt.jsx)(sr,{onClick:()=>o(!i),children:i?"Show English":"Show Hebrew"})}),x?l.map(((e,t)=>(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(ir,{children:e.name}),(0,Vt.jsx)(tr,{children:e.wordPairs.map(((e,t)=>(0,Vt.jsx)(Gt,{english:e.english,hebrew:e.hebrew,forceFlipped:i},t)))})]},t))):(0,Vt.jsxs)(Vt.Fragment,{children:[(0,Vt.jsx)(ir,{children:S.name}),(0,Vt.jsx)(tr,{children:S.wordPairs.map(((e,t)=>(0,Vt.jsx)(Gt,{english:e.english,hebrew:e.hebrew,forceFlipped:i},t)))})]})]})}),"exam"===t&&(0,Vt.jsx)(Sn,{}),"picturePractice"===t&&(0,Vt.jsx)(_n,{}),"finalExam"===t&&(0,Vt.jsx)(Zn,{}),"leArIrEr"===t&&(0,Vt.jsxs)("div",{style:{width:"100%"},children:[(0,Vt.jsxs)(nr,{children:["Words ending with ",(0,Vt.jsx)("b",{children:"le"}),", ",(0,Vt.jsx)("b",{children:"ar"}),", ",(0,Vt.jsx)("b",{children:"ir"}),", or ",(0,Vt.jsx)("b",{children:"er"})," from all topics.",(0,Vt.jsx)("br",{}),"Click on a card to reveal its Hebrew translation.",(0,Vt.jsx)("br",{}),"Click the speaker icon \ud83d\udd0a to hear the English pronunciation."]}),(0,Vt.jsx)("div",{style:{textAlign:"center",marginBottom:"1rem"},children:(0,Vt.jsx)(sr,{onClick:()=>o(!i),children:i?"Show English":"Show Hebrew"})}),(0,Vt.jsx)(ir,{children:"le, ar, ir, er Words"}),(0,Vt.jsx)(tr,{children:0===s.length?(0,Vt.jsx)("div",{children:"No matching words found."}):s.map(((e,t)=>(0,Vt.jsx)(Gt,{english:e.english,hebrew:e.hebrew,forceFlipped:i},t)))})]}),"leArIrErExam"===t&&(0,Vt.jsxs)("div",{style:{width:"100%"},children:[(0,Vt.jsxs)(nr,{children:["For each question, choose the correct ending (",(0,Vt.jsx)("b",{children:"le"}),", ",(0,Vt.jsx)("b",{children:"ar"}),", ",(0,Vt.jsx)("b",{children:"ir"}),", or ",(0,Vt.jsx)("b",{children:"er"}),") to complete the English word.",(0,Vt.jsx)("br",{}),"Click the speaker icon \ud83d\udd0a to hear the full word.",(0,Vt.jsx)("br",{})]}),(0,Vt.jsx)(ir,{children:"le, ar, ir, er Words Exam"}),y?(0,Vt.jsxs)("div",{style:{textAlign:"center",margin:"2rem 0"},children:[(0,Vt.jsx)("h2",{children:"Quiz Complete!"}),(0,Vt.jsxs)("p",{children:["You got ",b," out of ",c.length," correct."]}),(0,Vt.jsx)("button",{onClick:()=>{f(0),p(null),g(!1),v(0),w(!1)},style:{padding:"0.8rem 1.5rem",borderRadius:8,background:"#2c3e50",color:"white",border:"none",fontSize:"1rem",cursor:"pointer",marginTop:"1rem"},children:"Take Exam Again"})]}):(0,Vt.jsxs)("div",{style:{maxWidth:500,margin:"0 auto",background:"white",borderRadius:15,boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"2rem",textAlign:"center"},children:[(0,Vt.jsxs)("h3",{style:{color:"#2c3e50",marginBottom:"1.5rem"},children:[d+1," / ",c.length]}),(0,Vt.jsxs)("div",{style:{fontSize:"1.5rem",marginBottom:"1.2rem",color:"#2c3e50"},children:[c[d].base,(0,Vt.jsx)("span",{style:{color:"#bbb",fontWeight:400},children:"___"})]}),(0,Vt.jsx)("button",{onClick:()=>{const e=new window.SpeechSynthesisUtterance(c[d].fullWord);e.lang="en-US",window.speechSynthesis.speak(e)},style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",marginBottom:"1rem"},title:"Click to hear pronunciation",children:"\ud83d\udd0a"}),(0,Vt.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"1.5rem"},children:u.map((e=>(0,Vt.jsx)("button",{onClick:()=>(e=>{m||(p(e),g(!0),e===c[d].correctEnding&&v((e=>e+1)))})(e),disabled:m,style:{padding:"0.8rem 1.5rem",borderRadius:8,background:h===e?e===c[d].correctEnding?"#2ecc71":"#e74c3c":"#f7f9fa",color:h===e?"white":"#2c3e50",border:"none",fontSize:"1.1rem",cursor:m?"default":"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:e},e)))}),m&&(0,Vt.jsx)("div",{style:{marginBottom:"1.2rem",color:h===c[d].correctEnding?"#2ecc71":"#e74c3c",fontWeight:500},children:h===c[d].correctEnding?"Correct! Well done!":`Incorrect. The correct ending is: ${c[d].correctEnding}`}),m&&(0,Vt.jsx)("button",{onClick:()=>{p(null),g(!1),d===c.length-1?w(!0):f((e=>e+1))},style:{padding:"0.8rem 1.5rem",borderRadius:8,background:"#2ecc71",color:"white",border:"none",fontSize:"1.1rem",cursor:"pointer"},children:d===c.length-1?"Finish Quiz":"Next Question"})]})]})]})]})};t.createRoot(document.getElementById("root")).render((0,Vt.jsx)(e.StrictMode,{children:(0,Vt.jsx)(yr,{})}))})()})();
//# sourceMappingURL=main.ee82ea71.js.map