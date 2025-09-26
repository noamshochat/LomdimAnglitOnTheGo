/*! For license information please see main.199f7e2f.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var w=y.prototype=new v;w.constructor=y,m(w,b.prototype),w.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,a={},o=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,i)&&!E.hasOwnProperty(i)&&(a[i]=t[i]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===a[i]&&(a[i]=s[i]);return{$$typeof:n,type:e,key:o,ref:l,props:a,_owner:k.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,i,a,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===a?"."+z(s,0):a,x(o)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),T(o,t,i,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=""===a?".":a+":",x(e))for(var u=0;u<e.length;u++){var c=a+z(l=e[u],u);s+=T(l,t,i,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=T(l=l.value,t,i,c=a+z(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function j(e,t,n){if(null==e)return e;var r=[],i=0;return T(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function F(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},O={transition:null},M={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};function R(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:j,forEach:function(e,t,n){j(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=i,t.Profiler=o,t.PureComponent=y,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.act=R,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),a=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:F}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=R,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>a(s,n))u<i&&0>a(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<i&&0>a(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,h=3,p=!1,m=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function x(e){if(g=!1,w(e),!m)if(null!==r(u))m=!0,O(S);else{var t=r(c);null!==t&&M(x,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,v(_),_=-1),p=!0;var a=h;try{for(w(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!T());){var o=f.callback;if("function"===typeof o){f.callback=null,h=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&i(u),w(n)}else i(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&M(x,d.startTime-n),s=!1}return s}finally{f=null,h=a,p=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,C=null,_=-1,P=5,z=-1;function T(){return!(t.unstable_now()-z<P)}function j(){if(null!==C){var e=t.unstable_now();z=e;var n=!0;try{n=C(!0,e)}finally{n?k():(E=!1,C=null)}}else E=!1}if("function"===typeof y)k=function(){y(j)};else if("undefined"!==typeof MessageChannel){var F=new MessageChannel,N=F.port2;F.port1.onmessage=j,k=function(){N.postMessage(null)}}else k=function(){b(j,0)};function O(e){C=e,E||(E=!0,k())}function M(e,n){_=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,O(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>o?(e.sortIndex=a,n(c,e),null===r(u)&&e===r(c)&&(g?(v(_),_=-1):g=!0,M(x,a-o))):(e.sortIndex=l,n(u,e),m||p||(m=!0,O(S))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var u=a[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},494:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(43)),u=l(n(838)),c={resize:!0,useWorker:!1},d={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0};function f(e,t){return e||t?e:d}t.default=function(e){var t=e.style,n=e.className,i=e.width,a=e.height,o=e.globalOptions,l=e.onInit,d=(0,s.useRef)(null),h=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(d.current)return h.current=u.default.create(d.current,r(r({},c),o)),null===l||void 0===l||l({confetti:h.current}),function(){var e;null===(e=h.current)||void 0===e||e.reset()}}),[]),s.default.createElement("canvas",{ref:d,style:f(t,n),className:n,width:i,height:a})}},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},p={};function m(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(p,e)||!d.call(h,e)&&(f.test(e)?p[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var M=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=M&&e[M]||e["@@iterator"])?e:null}var I,L=Object.assign;function D(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var A=!1;function $(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(1!==o||1!==l)do{if(o--,0>--l||i[o]!==a[l]){var s="\n"+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function W(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case C:return"Profiler";case E:return"StrictMode";case T:return"Suspense";case j:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case F:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function U(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=U(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=U(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,U(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+U(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:U(n)}}function ae(e,t){var n=U(t.value),r=U(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(he).forEach((function(e){pe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var be=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(be[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function xe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function Ce(e){if(e=yi(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=xi(t),Se(e.stateNode,e.type,t))}}function _e(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function Pe(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function ze(e,t){return e(t)}function Te(){}var je=!1;function Fe(e,t,n){if(je)return e(t,n);je=!0;try{return ze(e,t,n)}finally{je=!1,(null!==ke||null!==Ee)&&(Te(),Pe())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=xi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Oe=!1;if(c)try{var Me={};Object.defineProperty(Me,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,Me)}catch(ce){Oe=!1}function Re(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ie=!1,Le=null,De=!1,Ae=null,$e={onError:function(e){Ie=!0,Le=e}};function We(e,t,n,r,i,a,o,l,s){Ie=!1,Le=null,Re.apply($e,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ue(e){if(He(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ue(i),e;if(o===r)return Ue(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Qe(e):null}function Qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Qe(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Ye=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,qe=i.unstable_requestPaint,Xe=i.unstable_now,Ze=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~i;0!==l?r=dt(l):0!==(a&=o)&&(r=dt(a))}else 0!==(o=n&~i)?r=dt(o):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var xt,St,kt,Et,Ct,_t=!1,Pt=[],zt=null,Tt=null,jt=null,Ft=new Map,Nt=new Map,Ot=[],Mt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Ft.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function It(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Lt(e){var t=vi(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Ct(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function At(e,t,n){Dt(e)&&n.delete(t)}function $t(){_t=!1,null!==zt&&Dt(zt)&&(zt=null),null!==Tt&&Dt(Tt)&&(Tt=null),null!==jt&&Dt(jt)&&(jt=null),Ft.forEach(At),Nt.forEach(At)}function Wt(e,t){e.blockedOn===t&&(e.blockedOn=null,_t||(_t=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,$t)))}function Ht(e){function t(t){return Wt(t,e)}if(0<Pt.length){Wt(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Wt(zt,e),null!==Tt&&Wt(Tt,e),null!==jt&&Wt(jt,e),Ft.forEach(t),Nt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)Lt(n),null===n.blockedOn&&Ot.shift()}var Bt=w.ReactCurrentBatchConfig,Ut=!0;function Vt(e,t,n,r){var i=yt,a=Bt.transition;Bt.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=i,Bt.transition=a}}function Qt(e,t,n,r){var i=yt,a=Bt.transition;Bt.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=i,Bt.transition=a}}function Kt(e,t,n,r){if(Ut){var i=Gt(e,t,n,r);if(null===i)Ur(e,t,r,Yt,n),Rt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return zt=It(zt,e,t,n,r,i),!0;case"dragenter":return Tt=It(Tt,e,t,n,r,i),!0;case"mouseover":return jt=It(jt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ft.set(a,It(Ft.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Nt.set(a,It(Nt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Rt(e,r),4&t&&-1<Mt.indexOf(e)){for(;null!==i;){var a=yi(i);if(null!==a&&xt(a),null===(a=Gt(e,t,n,r))&&Ur(e,t,r,Yt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Ur(e,t,r,null,n)}}var Yt=null;function Gt(e,t,n,r){if(Yt=null,null!==(e=vi(e=xe(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,i="value"in Xt?Xt.value:Xt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=L({},un,{view:0,detail:0}),fn=an(dn),hn=L({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),pn=an(hn),mn=an(L({},hn,{dataTransfer:0})),gn=an(L({},dn,{relatedTarget:0})),bn=an(L({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=L({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(vn),wn=an(L({},un,{data:0})),xn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function Cn(){return En}var _n=L({},dn,{key:function(e){if(e.key){var t=xn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(_n),zn=an(L({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=an(L({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),jn=an(L({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Fn=L({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=an(Fn),On=[9,13,27,32],Mn=c&&"CompositionEvent"in window,Rn=null;c&&"documentMode"in document&&(Rn=document.documentMode);var In=c&&"TextEvent"in window&&!Rn,Ln=c&&(!Mn||Rn&&8<Rn&&11>=Rn),Dn=String.fromCharCode(32),An=!1;function $n(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Vn(e,t,n,r){_e(r),0<(t=Qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,Kn=null;function Yn(e){Dr(e,0)}function Gn(e){if(K(wi(e)))return e}function qn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Qn&&(Qn.detachEvent("onpropertychange",nr),Kn=Qn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];Vn(t,Kn,e,xe(e)),Fe(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function ar(e,t){if("click"===e)return Gn(t)}function or(e,t){if("input"===e||"change"===e)return Gn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=cr(n,a);var o=cr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,br=null,vr=null,yr=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Qr(br,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},kr={},Er={};function Cr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var _r=Cr("animationend"),Pr=Cr("animationiteration"),zr=Cr("animationstart"),Tr=Cr("transitionend"),jr=new Map,Fr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){jr.set(e,t),s(t,[e])}for(var Or=0;Or<Fr.length;Or++){var Mr=Fr[Or];Nr(Mr.toLowerCase(),"on"+(Mr[0].toUpperCase()+Mr.slice(1)))}Nr(_r,"onAnimationEnd"),Nr(Pr,"onAnimationIteration"),Nr(zr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Tr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,l,s,u){if(We.apply(this,arguments),Ie){if(!Ie)throw Error(a(198));var c=Le;Ie=!1,Le=null,De||(De=!0,Ae=c)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Lr(i,l,u),a=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Lr(i,l,u),a=s}}}if(De)throw e=Ae,De=!1,Ae=null,e}function Ar(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Wr]){e[Wr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||$r(t,!1,e),$r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Wr]||(t[Wr]=!0,$r("selectionchange",!1,t))}}function Br(e,t,n,r){switch(qt(t)){case 1:var i=Vt;break;case 4:i=Qt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ur(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===i||8===l.nodeType&&l.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===i||8===s.nodeType&&s.parentNode===i))return;o=o.return}for(;null!==l;){if(null===(o=vi(l)))return;if(5===(s=o.tag)||6===s){r=a=o;continue e}l=l.parentNode}}r=r.return}Fe((function(){var r=a,i=xe(n),o=[];e:{var l=jr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Pn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Tn;break;case _r:case Pr:case zr:s=bn;break;case Tr:s=jn;break;case"scroll":s=fn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=Ne(p,f))&&c.push(Vr(p,m,h)))),d)break;p=p.return}0<c.length&&(l=new s(l,u,null,n,i),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===we||!(u=n.relatedTarget||n.fromElement)||!vi(u)&&!u[pi])&&(s||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?vi(u):null)&&(u!==(d=He(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=pn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==s?l:wi(s),h=null==u?l:wi(u),(l=new c(m,p+"leave",s,n,i)).target=d,l.relatedTarget=h,m=null,vi(i)===r&&((c=new c(f,p+"enter",u,n,i)).target=h,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,p=0,h=c=s;h;h=Kr(h))p++;for(h=0,m=f;m;m=Kr(m))h++;for(;0<p-h;)c=Kr(c),p--;for(;0<h-p;)f=Kr(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==s&&Yr(o,l,s,c,!1),null!==u&&null!==d&&Yr(o,d,u,c,!0)}if("select"===(s=(l=r?wi(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=qn;else if(Un(l))if(Xn)g=or;else{g=ir;var b=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ar);switch(g&&(g=g(e,r))?Vn(o,g,n,i):(b&&b(e,l,r),"focusout"===e&&(b=l._wrapperState)&&b.controlled&&"number"===l.type&&ee(l,"number",l.value)),b=r?wi(r):window,e){case"focusin":(Un(b)||"true"===b.contentEditable)&&(gr=b,br=r,vr=null);break;case"focusout":vr=br=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,wr(o,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":wr(o,n,i)}var v;if(Mn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hn?$n(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Ln&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Hn&&(v=en()):(Zt="value"in(Xt=i)?Xt.value:Xt.textContent,Hn=!0)),0<(b=Qr(r,y)).length&&(y=new wn(y,e,null,n,i),o.push({event:y,listeners:b}),v?y.data=v:null!==(v=Wn(n))&&(y.data=v))),(v=In?function(e,t){switch(e){case"compositionend":return Wn(t);case"keypress":return 32!==t.which?null:(An=!0,Dn);case"textInput":return(e=t.data)===Dn&&An?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!Mn&&$n(e,t)?(e=en(),Jt=Zt=Xt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Qr(r,"onBeforeInput")).length&&(i=new wn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Dr(o,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Ne(e,n))&&r.unshift(Vr(e,a,i)),null!=(a=Ne(e,t))&&r.push(Vr(e,a,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,i?null!=(s=Ne(n,a))&&o.unshift(Vr(n,s,l)):i||null!=(s=Ne(n,a))&&o.push(Vr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(qr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(a(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(li)}:ri;function li(e){setTimeout((function(){throw e}))}function si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ht(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,hi="__reactProps$"+di,pi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,bi="__reactHandles$"+di;function vi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[fi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[fi]||e[pi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function xi(e){return e[hi]||null}var Si=[],ki=-1;function Ei(e){return{current:e}}function Ci(e){0>ki||(e.current=Si[ki],Si[ki]=null,ki--)}function _i(e,t){ki++,Si[ki]=e.current,e.current=t}var Pi={},zi=Ei(Pi),Ti=Ei(!1),ji=Pi;function Fi(e,t){var n=e.type.contextTypes;if(!n)return Pi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ni(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Oi(){Ci(Ti),Ci(zi)}function Mi(e,t,n){if(zi.current!==Pi)throw Error(a(168));_i(zi,t),_i(Ti,n)}function Ri(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,B(e)||"Unknown",i));return L({},n,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,ji=zi.current,_i(zi,e),_i(Ti,Ti.current),!0}function Li(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ri(e,t,ji),r.__reactInternalMemoizedMergedChildContext=e,Ci(Ti),Ci(zi),_i(zi,e)):Ci(Ti),_i(Ti,n)}var Di=null,Ai=!1,$i=!1;function Wi(e){null===Di?Di=[e]:Di.push(e)}function Hi(){if(!$i&&null!==Di){$i=!0;var e=0,t=yt;try{var n=Di;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Di=null,Ai=!1}catch(i){throw null!==Di&&(Di=Di.slice(e+1)),Ke(Je,Hi),i}finally{yt=t,$i=!1}}return null}var Bi=[],Ui=0,Vi=null,Qi=0,Ki=[],Yi=0,Gi=null,qi=1,Xi="";function Zi(e,t){Bi[Ui++]=Qi,Bi[Ui++]=Vi,Vi=e,Qi=t}function Ji(e,t,n){Ki[Yi++]=qi,Ki[Yi++]=Xi,Ki[Yi++]=Gi,Gi=e;var r=qi;e=Xi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qi=1<<32-ot(t)+i|n<<i|r,Xi=a+e}else qi=1<<a|n<<i|r,Xi=e}function ea(e){null!==e.return&&(Zi(e,1),Ji(e,1,0))}function ta(e){for(;e===Vi;)Vi=Bi[--Ui],Bi[Ui]=null,Qi=Bi[--Ui],Bi[Ui]=null;for(;e===Gi;)Gi=Ki[--Yi],Ki[Yi]=null,Xi=Ki[--Yi],Ki[Yi]=null,qi=Ki[--Yi],Ki[Yi]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Fu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function la(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gi?{id:qi,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Fu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function sa(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ua(e){if(ia){var t=ra;if(t){var n=t;if(!la(e,t)){if(sa(e))throw Error(a(418));t=ui(n.nextSibling);var r=na;t&&la(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(sa(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function da(e){if(e!==na)return!1;if(!ia)return ca(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(sa(e))throw fa(),Error(a(418));for(;t;)oa(e,t),t=ui(t.nextSibling)}if(ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ui(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=ra;e;)e=ui(e.nextSibling)}function ha(){ra=na=null,ia=!1}function pa(e){null===aa?aa=[e]:aa.push(e)}var ma=w.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ba(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Ou(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Lu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var a=n.type;return a===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===N&&va(a)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=Mu(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Du(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Ru(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Lu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case x:return(n=Mu(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case S:return(t=Du(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||R(t))return(t=Ru(t,e.mode,n,null)).return=e,t;ba(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===i?u(e,t,n,r):null;case S:return n.key===i?c(e,t,n,r):null;case N:return h(e,t,(i=n._init)(n._payload),r)}if(te(n)||R(n))return null!==i?null:d(e,t,n,r,null);ba(e,n)}return null}function p(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case x:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case N:return p(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||R(r))return d(t,e=e.get(n)||null,r,i,null);ba(t,r)}return null}function m(i,a,l,s){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var b=h(i,d,l[m],s);if(null===b){null===d&&(d=g);break}e&&d&&null===b.alternate&&t(i,d),a=o(b,a,m),null===c?u=b:c.sibling=b,c=b,d=g}if(m===l.length)return n(i,d),ia&&Zi(i,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(i,l[m],s))&&(a=o(d,a,m),null===c?u=d:c.sibling=d,c=d);return ia&&Zi(i,m),u}for(d=r(i,d);m<l.length;m++)null!==(g=p(d,i,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(i,e)})),ia&&Zi(i,m),u}function g(i,l,s,u){var c=R(s);if("function"!==typeof c)throw Error(a(150));if(null==(s=c.call(s)))throw Error(a(151));for(var d=c=null,m=l,g=l=0,b=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=h(i,m,v.value,u);if(null===y){null===m&&(m=b);break}e&&m&&null===y.alternate&&t(i,m),l=o(y,l,g),null===d?c=y:d.sibling=y,d=y,m=b}if(v.done)return n(i,m),ia&&Zi(i,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(i,v.value,u))&&(l=o(v,l,g),null===d?c=v:d.sibling=v,d=v);return ia&&Zi(i,g),c}for(m=r(i,m);!v.done;g++,v=s.next())null!==(v=p(m,i,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(i,e)})),ia&&Zi(i,g),c}return function e(r,a,o,s){if("object"===typeof o&&null!==o&&o.type===k&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case x:e:{for(var u=o.key,c=a;null!==c;){if(c.key===u){if((u=o.type)===k){if(7===c.tag){n(r,c.sibling),(a=i(c,o.props.children)).return=r,r=a;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&va(u)===c.type){n(r,c.sibling),(a=i(c,o.props)).ref=ga(r,c,o),a.return=r,r=a;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===k?((a=Ru(o.props.children,r.mode,s,o.key)).return=r,r=a):((s=Mu(o.type,o.key,o.props,null,r.mode,s)).ref=ga(r,a,o),s.return=r,r=s)}return l(r);case S:e:{for(c=o.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Du(o,r.mode,s)).return=r,r=a}return l(r);case N:return e(r,a,(c=o._init)(o._payload),s)}if(te(o))return m(r,a,o,s);if(R(o))return g(r,a,o,s);ba(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Lu(o,r.mode,s)).return=r,r=a),l(r)):n(r,a)}}var wa=ya(!0),xa=ya(!1),Sa=Ei(null),ka=null,Ea=null,Ca=null;function _a(){Ca=Ea=ka=null}function Pa(e){var t=Sa.current;Ci(Sa),e._currentValue=t}function za(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t){ka=e,Ca=Ea=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function ja(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===Ea){if(null===ka)throw Error(a(308));Ea=e,ka.dependencies={lanes:0,firstContext:e}}else Ea=Ea.next=e;return t}var Fa=null;function Na(e){null===Fa?Fa=[e]:Fa.push(e)}function Oa(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Na(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ma(e,r)}function Ma(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ra=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Da(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zs)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ma(e,n)}return null===(i=r.interleaved)?(t.next=t,Na(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ma(e,n)}function $a(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ha(e,t,n,r){var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?a=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==a){var d=i.baseState;for(o=0,c=u=s=null,l=a;;){var f=l.lane,h=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,m=l;switch(f=t,h=n,m.tag){case 1:if("function"===typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null===(f="function"===typeof(p=m.payload)?p.call(h,d,f):p)||void 0===f)break e;d=L({},d,f);break e;case 2:Ra=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=h,s=d):c=c.next=h,o|=f;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(f=l).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Is|=o,e.lanes=o,e.memoizedState=d}}function Ba(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Ua={},Va=Ei(Ua),Qa=Ei(Ua),Ka=Ei(Ua);function Ya(e){if(e===Ua)throw Error(a(174));return e}function Ga(e,t){switch(_i(Ka,t),_i(Qa,e),_i(Va,Ua),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Va),_i(Va,t)}function qa(){Ci(Va),Ci(Qa),Ci(Ka)}function Xa(e){Ya(Ka.current);var t=Ya(Va.current),n=se(t,e.type);t!==n&&(_i(Qa,e),_i(Va,n))}function Za(e){Qa.current===e&&(Ci(Va),Ci(Qa))}var Ja=Ei(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=w.ReactCurrentDispatcher,io=w.ReactCurrentBatchConfig,ao=0,oo=null,lo=null,so=null,uo=!1,co=!1,fo=0,ho=0;function po(){throw Error(a(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Jo:el,e=n(r,i),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(a(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,i)}while(co)}if(ro.current=Zo,t=null!==lo&&null!==lo.next,ao=0,so=lo=oo=null,uo=!1,t)throw Error(a(300));return e}function bo(){var e=0!==fo;return fo=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function yo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function wo(e,t){return"function"===typeof t?t(e):t}function xo(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=lo,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var d=c.lane;if((ao&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,oo.lanes|=d,Is|=d}c=c.next}while(null!==c&&c!==o);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Is|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{o=e(o,l.action),l=l.next}while(l!==i);lr(o,t.memoizedState)||(yl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(){}function Eo(e,t){var n=oo,r=yo(),i=t(),o=!lr(r.memoizedState,i);if(o&&(r.memoizedState=i,yl=!0),r=r.queue,Io(Po.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,Fo(9,_o.bind(null,n,r,i,t),void 0,null),null===Ts)throw Error(a(349));0!==(30&ao)||Co(n,t,i)}return i}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function _o(e,t,n,r){t.value=n,t.getSnapshot=r,zo(t)&&To(e)}function Po(e,t,n){return n((function(){zo(t)&&To(e)}))}function zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function To(e){var t=Ma(e,1);null!==t&&nu(t,e,1,-1)}function jo(e){var t=vo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function Fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function No(){return yo().memoizedState}function Oo(e,t,n,r){var i=vo();oo.flags|=e,i.memoizedState=Fo(1|t,n,void 0,void 0===r?null:r)}function Mo(e,t,n,r){var i=yo();r=void 0===r?null:r;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==r&&mo(r,o.deps))return void(i.memoizedState=Fo(t,n,a,r))}oo.flags|=e,i.memoizedState=Fo(1|t,n,a,r)}function Ro(e,t){return Oo(8390656,8,e,t)}function Io(e,t){return Mo(2048,8,e,t)}function Lo(e,t){return Mo(4,2,e,t)}function Do(e,t){return Mo(4,4,e,t)}function Ao(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $o(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Mo(4,4,Ao.bind(null,t,e),n)}function Wo(){}function Ho(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uo(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Is|=n,e.baseState=!0),t)}function Vo(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{yt=n,io.transition=r}}function Qo(){return yo().memoizedState}function Ko(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))qo(t,n);else if(null!==(n=Oa(e,t,n,r))){nu(n,e,r,eu()),Xo(n,t,r)}}function Yo(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))qo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(i.next=i,Na(t)):(i.next=s.next,s.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Oa(e,t,i,r))&&(nu(n,e,r,i=eu()),Xo(n,t,r))}}function Go(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function qo(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Zo={readContext:ja,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useInsertionEffect:po,useLayoutEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useMutableSource:po,useSyncExternalStore:po,useId:po,unstable_isNewReconciler:!1},Jo={readContext:ja,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:ja,useEffect:Ro,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oo(4194308,4,Ao.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:jo,useDebugValue:Wo,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=jo(!1),t=e[0];return e=Vo.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=vo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Ts)throw Error(a(349));0!==(30&ao)||Co(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ro(Po.bind(null,r,o,e),[e]),r.flags|=2048,Fo(9,_o.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vo(),t=Ts.identifierPrefix;if(ia){var n=Xi;t=":"+t+"R"+(n=(qi&~(1<<32-ot(qi)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ho++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:ja,useCallback:Ho,useContext:ja,useEffect:Io,useImperativeHandle:$o,useInsertionEffect:Lo,useLayoutEffect:Do,useMemo:Bo,useReducer:xo,useRef:No,useState:function(){return xo(wo)},useDebugValue:Wo,useDeferredValue:function(e){return Uo(yo(),lo.memoizedState,e)},useTransition:function(){return[xo(wo)[0],yo().memoizedState]},useMutableSource:ko,useSyncExternalStore:Eo,useId:Qo,unstable_isNewReconciler:!1},tl={readContext:ja,useCallback:Ho,useContext:ja,useEffect:Io,useImperativeHandle:$o,useInsertionEffect:Lo,useLayoutEffect:Do,useMemo:Bo,useReducer:So,useRef:No,useState:function(){return So(wo)},useDebugValue:Wo,useDeferredValue:function(e){var t=yo();return null===lo?t.memoizedState=e:Uo(t,lo.memoizedState,e)},useTransition:function(){return[So(wo)[0],yo().memoizedState]},useMutableSource:ko,useSyncExternalStore:Eo,useId:Qo,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),a=Da(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Aa(e,a,i))&&(nu(t,e,i,r),$a(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),a=Da(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Aa(e,a,i))&&(nu(t,e,i,r),$a(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=Da(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Aa(e,i,r))&&(nu(t,e,r,n),$a(t,e,r))}};function al(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(i,a))}function ol(e,t,n){var r=!1,i=Pi,a=t.contextType;return"object"===typeof a&&null!==a?a=ja(a):(i=Ni(t)?ji:zi.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Fi(e,i):Pi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ia(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=ja(a):(a=Ni(t)?ji:zi.current,i.context=Fi(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rl(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Ha(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=W(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function hl(e,t,n){(n=Da(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Us||(Us=!0,Vs=r),dl(0,t)},n}function pl(e,t,n){(n=Da(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Qs?Qs=new Set([this]):Qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bl(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Da(-1,1)).tag=2,Aa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var vl=w.ReactCurrentOwner,yl=!1;function wl(e,t,n,r){t.child=null===e?xa(t,null,n,r):wa(t,e.child,n,r)}function xl(e,t,n,r,i){n=n.render;var a=t.ref;return Ta(t,i),r=go(e,t,n,r,a,i),n=bo(),null===e||yl?(ia&&n&&ea(t),t.flags|=1,wl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ul(e,t,i))}function Sl(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Nu(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Mu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,kl(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Ul(e,t,i)}return t.flags|=1,(e=Ou(a,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Ul(e,t,i);0!==(131072&e.flags)&&(yl=!0)}}return _l(e,t,n,r,i)}function El(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_i(Os,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_i(Os,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,_i(Os,Ns),Ns|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,_i(Os,Ns),Ns|=r;return wl(e,t,i,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,i){var a=Ni(n)?ji:zi.current;return a=Fi(t,a),Ta(t,i),n=go(e,t,n,r,a,i),r=bo(),null===e||yl?(ia&&r&&ea(t),t.flags|=1,wl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ul(e,t,i))}function Pl(e,t,n,r,i){if(Ni(n)){var a=!0;Ii(t)}else a=!1;if(Ta(t,i),null===t.stateNode)Bl(e,t),ol(t,n,r),sl(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=ja(u):u=Fi(t,u=Ni(n)?ji:zi.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,o,r,u),Ra=!1;var f=t.memoizedState;o.state=f,Ha(t,r,o,i),s=t.memoizedState,l!==r||f!==s||Ti.current||Ra?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Ra||al(t,n,l,r,f,s,u))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,La(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),o.props=u,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=ja(s):s=Fi(t,s=Ni(n)?ji:zi.current);var h=n.getDerivedStateFromProps;(c="function"===typeof h||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,o,r,s),Ra=!1,f=t.memoizedState,o.state=f,Ha(t,r,o,i);var p=t.memoizedState;l!==d||f!==p||Ti.current||Ra?("function"===typeof h&&(rl(t,n,h,r),p=t.memoizedState),(u=Ra||al(t,n,u,r,f,p,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,a,i)}function zl(e,t,n,r,i,a){Cl(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Li(t,n,!1),Ul(e,t,a);r=t.stateNode,vl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):wl(e,t,l,a),t.memoizedState=r.state,i&&Li(t,n,!0),t.child}function Tl(e){var t=e.stateNode;t.pendingContext?Mi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Mi(0,t.context,!1),Ga(e,t.containerInfo)}function jl(e,t,n,r,i){return ha(),pa(i),t.flags|=256,wl(e,t,n,r),t.child}var Fl,Nl,Ol,Ml,Rl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ll(e,t,n){var r,i=t.pendingProps,o=Ja.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),_i(Ja,1&o),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,l?(i=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&i)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Iu(s,i,0,null),e=Ru(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(n),t.memoizedState=Rl,e):Dl(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,l){if(n)return 256&t.flags?(t.flags&=-257,Al(e,t,l,r=cl(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Iu({mode:"visible",children:r.children},i,0,null),(o=Ru(o,i,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Rl,o);if(0===(1&t.mode))return Al(e,t,l,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Al(e,t,l,r=cl(o=Error(a(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ts)){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|l))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Ma(e,i),nu(r,e,i,-1))}return mu(),Al(e,t,l,r=cl(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ui(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(Ki[Yi++]=qi,Ki[Yi++]=Xi,Ki[Yi++]=Gi,qi=e.id,Xi=e.overflow,Gi=t),t=Dl(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,o,n);if(l){l=i.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&s)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=Ou(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Ou(r,l):(l=Ru(l,s,n,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Rl,i}return e=(l=e.child).sibling,i=Ou(l,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Dl(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Al(e,t,n,r){return null!==r&&pa(r),wa(t,e.child,null,n),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),za(e.return,t,n)}function Wl(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Hl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(wl(e,t,r.children,n),0!==(2&(r=Ja.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_i(Ja,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wl(t,!0,n,null,a);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ul(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ou(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ou(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ql(t),null;case 1:case 17:return Ni(t.type)&&Oi(),Ql(t),null;case 3:return r=t.stateNode,qa(),Ci(Ti),Ci(zi),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(da(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(ou(aa),aa=null))),Nl(e,t),Ql(t),null;case 5:Za(t);var i=Ya(Ka.current);if(n=t.type,null!==e&&null!=t.stateNode)Ol(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Ql(t),null}if(e=Ya(Va.current),da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fi]=t,r[hi]=o,e=0!==(1&t.mode),n){case"dialog":Ar("cancel",r),Ar("close",r);break;case"iframe":case"object":case"embed":Ar("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)Ar(Rr[i],r);break;case"source":Ar("error",r);break;case"img":case"image":case"link":Ar("error",r),Ar("load",r);break;case"details":Ar("toggle",r);break;case"input":q(r,o),Ar("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ar("invalid",r);break;case"textarea":ie(r,o),Ar("invalid",r)}for(var s in ve(n,o),i=null,o)if(o.hasOwnProperty(s)){var u=o[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),i=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ar("scroll",r)}switch(n){case"input":Q(r),J(r,o,!0);break;case"textarea":Q(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fi]=t,e[hi]=r,Fl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Ar("cancel",e),Ar("close",e),i=r;break;case"iframe":case"object":case"embed":Ar("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)Ar(Rr[i],e);i=r;break;case"source":Ar("error",e),i=r;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),i=r;break;case"details":Ar("toggle",e),i=r;break;case"input":q(e,r),i=G(e,r),Ar("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=L({},r,{value:void 0}),Ar("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Ar("invalid",e)}for(o in ve(n,i),u=i)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?ge(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Ar("scroll",e):null!=c&&y(e,o,c,s))}switch(n){case"input":Q(e),J(e,r,!1);break;case"textarea":Q(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+U(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ql(t),null;case 6:if(e&&null!=t.stateNode)Ml(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Ya(Ka.current),Ya(Va.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return Ql(t),null;case 13:if(Ci(Ja),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))fa(),ha(),t.flags|=98560,o=!1;else if(o=da(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[fi]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ql(t),o=!1}else null!==aa&&(ou(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ja.current)?0===Ms&&(Ms=3):mu())),null!==t.updateQueue&&(t.flags|=4),Ql(t),null);case 4:return qa(),Nl(e,t),null===e&&Hr(t.stateNode.containerInfo),Ql(t),null;case 10:return Pa(t.type._context),Ql(t),null;case 19:if(Ci(Ja),null===(o=t.memoizedState))return Ql(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Vl(o,!1);else{if(0!==Ms||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Vl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _i(Ja,1&Ja.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>Hs&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ia)return Ql(t),null}else 2*Xe()-o.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Ja.current,_i(Ja,r?1&n|2:1&n),t):(Ql(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(Ql(t),6&t.subtreeFlags&&(t.flags|=8192)):Ql(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Yl(e,t){switch(ta(t),t.tag){case 1:return Ni(t.type)&&Oi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qa(),Ci(Ti),Ci(zi),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Ci(Ja),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(Ja),null;case 4:return qa(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Fl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Ol=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ya(Va.current);var a,o=null;switch(n){case"input":i=G(e,i),r=G(e,r),o=[];break;case"select":i=L({},i,{value:void 0}),r=L({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ve(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ar("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Ml=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,ql=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&es(t,n,a)}i=i.next}while(i!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[hi],delete t[mi],delete t[gi],delete t[bi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)hs(e,t,n),n=n.sibling}function hs(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(l){}switch(n.tag){case 5:ql||Jl(n,t);case 6:var r=cs,i=ds;cs=null,fs(e,t,n),ds=i,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?si(e.parentNode,n):1===e.nodeType&&si(e,n),Ht(e)):si(cs,n.stateNode));break;case 4:r=cs,i=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=i;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&es(n,t,o),i=i.next}while(i!==r)}fs(e,t,n);break;case 1:if(!ql&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Eu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(ql=(r=ql)||null!==n.memoizedState,fs(e,t,n),ql=r):fs(e,t,n);break;default:fs(e,t,n)}}function ps(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=zu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(a(160));hs(o,l,i),cs=null,ds=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){Eu(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),bs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Eu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ms(t,e),bs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),bs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&X(i,o),ye(s,l);var c=ye(s,o);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):y(i,d,f,c)}switch(s){case"input":Z(i,o);break;case"textarea":ae(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;null!=p?ne(i,!!o.multiple,p,!1):h!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[hi]=o}catch(g){Eu(e,e.return,g)}}break;case 6:if(ms(t,e),bs(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Eu(e,e.return,g)}}break;case 3:if(ms(t,e),bs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ms(t,e),bs(e);break;case 13:ms(t,e),bs(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Ws=Xe())),4&r&&ps(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ql=(c=ql)||d,ms(t,e),ql=c):ms(t,e),bs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(p=(h=Zl).child,h.tag){case 0:case 11:case 14:case 15:ns(4,h,h.return);break;case 1:Jl(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Jl(h,h.return);break;case 22:if(null!==h.memoizedState){xs(f);continue}}null!==p?(p.return=h,Zl=p):xs(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,c?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),bs(e),4&r&&ps(e);case 21:}}function bs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),us(e,ls(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(a(161))}}catch(l){Eu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Zl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var i=Zl,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Gl;if(!o){var l=i.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Gl;var u=ql;if(Gl=o,(ql=s)&&!u)for(Zl=i;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?Ss(i):null!==s?(s.return=o,Zl=s):Ss(i);for(;null!==a;)Zl=a,ys(a,t,n),a=a.sibling;Zl=i,Gl=l,ql=u}ws(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Zl=a):ws(e)}}function ws(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ql)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ba(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ba(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(a(163))}ql||512&t.flags&&is(t)}catch(h){Eu(t,t.return,h)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function xs(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Ss(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Eu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(s){Eu(t,i,s)}}var a=t.return;try{is(t)}catch(s){Eu(t,a,s)}break;case 5:var o=t.return;try{is(t)}catch(s){Eu(t,o,s)}}}catch(s){Eu(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var ks,Es=Math.ceil,Cs=w.ReactCurrentDispatcher,_s=w.ReactCurrentOwner,Ps=w.ReactCurrentBatchConfig,zs=0,Ts=null,js=null,Fs=0,Ns=0,Os=Ei(0),Ms=0,Rs=null,Is=0,Ls=0,Ds=0,As=null,$s=null,Ws=0,Hs=1/0,Bs=null,Us=!1,Vs=null,Qs=null,Ks=!1,Ys=null,Gs=0,qs=0,Xs=null,Zs=-1,Js=0;function eu(){return 0!==(6&zs)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&zs)&&0!==Fs?Fs&-Fs:null!==ma.transition?(0===Js&&(Js=mt()),Js):0!==(e=yt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nu(e,t,n,r){if(50<qs)throw qs=0,Xs=null,Error(a(185));bt(e,n,r),0!==(2&zs)&&e===Ts||(e===Ts&&(0===(2&zs)&&(Ls|=n),4===Ms&&lu(e,Fs)),ru(e,r),1===n&&0===zs&&0===(1&t.mode)&&(Hs=Xe()+500,Ai&&Hi()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),l=1<<o,s=i[o];-1===s?0!==(l&n)&&0===(l&r)||(i[o]=ht(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var r=ft(e,e===Ts?Fs:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Ai=!0,Wi(e)}(su.bind(null,e)):Wi(su.bind(null,e)),oi((function(){0===(6&zs)&&Hi()})),n=null;else{switch(wt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Tu(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Zs=-1,Js=0,0!==(6&zs))throw Error(a(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ts?Fs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var i=zs;zs|=2;var o=pu();for(Ts===e&&Fs===t||(Bs=null,Hs=Xe()+500,fu(e,t));;)try{vu();break}catch(s){hu(e,s)}_a(),Cs.current=o,zs=i,null!==js?t=0:(Ts=null,Fs=0,t=Ms)}if(0!==t){if(2===t&&(0!==(i=pt(e))&&(r=i,t=au(e,i))),1===t)throw n=Rs,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!lr(a(),i))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gu(e,r))&&(0!==(o=pt(e))&&(r=o,t=au(e,o))),1===t))throw n=Rs,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:xu(e,$s,Bs);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Ws+500-Xe())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(xu.bind(null,e,$s,Bs),t);break}xu(e,$s,Bs);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>i&&(i=l),r&=~o}if(r=i,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ri(xu.bind(null,e,$s,Bs),r);break}xu(e,$s,Bs);break;default:throw Error(a(329))}}}return ru(e,Xe()),e.callbackNode===n?iu.bind(null,e):null}function au(e,t){var n=As;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=$s,$s=n,null!==t&&ou(t)),e}function ou(e){null===$s?$s=e:$s.push.apply($s,e)}function lu(e,t){for(t&=~Ds,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&zs))throw Error(a(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=pt(e);0!==r&&(t=r,n=au(e,r))}if(1===n)throw n=Rs,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xu(e,$s,Bs),ru(e,Xe()),null}function uu(e,t){var n=zs;zs|=1;try{return e(t)}finally{0===(zs=n)&&(Hs=Xe()+500,Ai&&Hi())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&zs)&&Su();var t=zs;zs|=1;var n=Ps.transition,r=yt;try{if(Ps.transition=null,yt=1,e)return e()}finally{yt=r,Ps.transition=n,0===(6&(zs=t))&&Hi()}}function du(){Ns=Os.current,Ci(Os)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==js)for(n=js.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Oi();break;case 3:qa(),Ci(Ti),Ci(zi),no();break;case 5:Za(r);break;case 4:qa();break;case 13:case 19:Ci(Ja);break;case 10:Pa(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ts=e,js=e=Ou(e.current,null),Fs=Ns=t,Ms=0,Rs=null,Ds=Ls=Is=0,$s=As=null,null!==Fa){for(t=0;t<Fa.length;t++)if(null!==(r=(n=Fa[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Fa=null}return e}function hu(e,t){for(;;){var n=js;try{if(_a(),ro.current=Zo,uo){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}uo=!1}if(ao=0,so=lo=oo=null,co=!1,fo=0,_s.current=null,null===n||null===n.return){Ms=1,Rs=t,js=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Fs,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=gl(l);if(null!==p){p.flags&=-257,bl(p,l,s,0,t),1&p.mode&&ml(o,c,t),u=c;var m=(t=p).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(o,c,t),mu();break e}u=Error(a(426))}else if(ia&&1&s.mode){var b=gl(l);if(null!==b){0===(65536&b.flags)&&(b.flags|=256),bl(b,l,s,0,t),pa(ul(u,s));break e}}o=u=ul(u,s),4!==Ms&&(Ms=2),null===As?As=[o]:As.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Wa(o,hl(0,u,t));break e;case 1:s=u;var v=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Qs||!Qs.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Wa(o,pl(o,s,t));break e}}o=o.return}while(null!==o)}wu(n)}catch(w){t=w,js===n&&null!==n&&(js=n=n.return);continue}break}}function pu(){var e=Cs.current;return Cs.current=Zo,null===e?Zo:e}function mu(){0!==Ms&&3!==Ms&&2!==Ms||(Ms=4),null===Ts||0===(268435455&Is)&&0===(268435455&Ls)||lu(Ts,Fs)}function gu(e,t){var n=zs;zs|=2;var r=pu();for(Ts===e&&Fs===t||(Bs=null,fu(e,t));;)try{bu();break}catch(i){hu(e,i)}if(_a(),zs=n,Cs.current=r,null!==js)throw Error(a(261));return Ts=null,Fs=0,Ms}function bu(){for(;null!==js;)yu(js)}function vu(){for(;null!==js&&!Ge();)yu(js)}function yu(e){var t=ks(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?wu(e):js=t,_s.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Ns)))return void(js=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(js=n);if(null===e)return Ms=6,void(js=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(js=t);js=t=e}while(null!==t);0===Ms&&(Ms=5)}function xu(e,t,n){var r=yt,i=Ps.transition;try{Ps.transition=null,yt=1,function(e,t,n,r){do{Su()}while(null!==Ys);if(0!==(6&zs))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Ts&&(js=Ts=null,Fs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Tu(tt,(function(){return Su(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Ps.transition,Ps.transition=null;var l=yt;yt=1;var s=zs;zs|=4,_s.current=null,function(e,t){if(ei=Ut,hr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(x){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||0!==i&&3!==f.nodeType||(s=l+i),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++c===i&&(s=l),h===o&&++d===r&&(u=l),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ut=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,b=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(a(163))}}catch(x){Eu(t,t.return,x)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),pr(ti),Ut=!!ei,ti=ei=null,e.current=n,vs(n,e,i),qe(),zs=s,yt=l,Ps.transition=o}else e.current=n;if(Ks&&(Ks=!1,Ys=e,Gs=i),o=e.pendingLanes,0===o&&(Qs=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Us)throw Us=!1,e=Vs,Vs=null,e;0!==(1&Gs)&&0!==e.tag&&Su(),o=e.pendingLanes,0!==(1&o)?e===Xs?qs++:(qs=0,Xs=e):qs=0,Hi()}(e,t,n,r)}finally{Ps.transition=i,yt=r}return null}function Su(){if(null!==Ys){var e=wt(Gs),t=Ps.transition,n=yt;try{if(Ps.transition=null,yt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Gs=0,0!==(6&zs))throw Error(a(331));var i=zs;for(zs|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var h=(d=Zl).sibling,p=d.return;if(as(d),d===c){Zl=null;break}if(null!==h){h.return=p,Zl=h;break}Zl=p}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(null!==g)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Zl=v;break e}Zl=o.return}}var y=e.current;for(Zl=y;null!==Zl;){var w=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==w)w.return=l,Zl=w;else e:for(l=y;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Eu(s,s.return,S)}if(s===l){Zl=null;break e}var x=s.sibling;if(null!==x){x.return=s.return,Zl=x;break e}Zl=s.return}}if(zs=i,Hi(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(S){}r=!0}return r}finally{yt=n,Ps.transition=t}}return!1}function ku(e,t,n){e=Aa(e,t=hl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(bt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Qs||!Qs.has(r))){t=Aa(t,e=pl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(bt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ts===e&&(Fs&n)===n&&(4===Ms||3===Ms&&(130023424&Fs)===Fs&&500>Xe()-Ws?fu(e,0):Ds|=n),ru(e,t)}function _u(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Ma(e,t))&&(bt(e,t,n),ru(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_u(e,n)}function zu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),_u(e,n)}function Tu(e,t){return Ke(e,t)}function ju(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fu(e,t,n,r){return new ju(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ou(e,t){var n=e.alternate;return null===n?((n=Fu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mu(e,t,n,r,i,o){var l=2;if(r=e,"function"===typeof e)Nu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Ru(n.children,i,o,t);case E:l=8,i|=8;break;case C:return(e=Fu(12,n,t,2|i)).elementType=C,e.lanes=o,e;case T:return(e=Fu(13,n,t,i)).elementType=T,e.lanes=o,e;case j:return(e=Fu(19,n,t,i)).elementType=j,e.lanes=o,e;case O:return Iu(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:l=10;break e;case P:l=9;break e;case z:l=11;break e;case F:l=14;break e;case N:l=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Fu(l,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Ru(e,t,n,r){return(e=Fu(7,e,r,t)).lanes=n,e}function Iu(e,t,n,r){return(e=Fu(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function Lu(e,t,n){return(e=Fu(6,e,null,t)).lanes=n,e}function Du(e,t,n){return(t=Fu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Au(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,i,a,o,l,s){return e=new Au(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Fu(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(a),e}function Wu(e){if(!e)return Pi;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ni(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Ni(n))return Ri(e,n,t)}return t}function Hu(e,t,n,r,i,a,o,l,s){return(e=$u(n,r,!0,e,0,a,0,l,s)).context=Wu(null),n=e.current,(a=Da(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,Aa(n,a,i),e.current.lanes=i,bt(e,i,r),ru(e,r),e}function Bu(e,t,n,r){var i=t.current,a=eu(),o=tu(i);return n=Wu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Da(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Aa(i,t,o))&&(nu(e,i,o,a),$a(e,i,o)),o}function Uu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Qu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ti.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Tl(t),ha();break;case 5:Xa(t);break;case 1:Ni(t.type)&&Ii(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_i(Sa,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_i(Ja,1&Ja.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ll(e,t,n):(_i(Ja,1&Ja.current),null!==(e=Ul(e,t,n))?e.sibling:null);_i(Ja,1&Ja.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),_i(Ja,Ja.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Ul(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ia&&0!==(1048576&t.flags)&&Ji(t,Qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var i=Fi(t,zi.current);Ta(t,n),i=go(null,t,r,e,i,n);var o=bo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ni(r)?(o=!0,Ii(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ia(t),i.updater=il,t.stateNode=i,i._reactInternals=t,sl(t,r,e,n),t=zl(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),wl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===F)return 14}return 2}(r),e=nl(r,e),i){case 0:t=_l(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=xl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,_l(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,Pl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(Tl(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,La(e,t),Ha(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=jl(e,t,r,n,i=ul(Error(a(423)),t));break e}if(r!==i){t=jl(e,t,r,n,i=ul(Error(a(424)),t));break e}for(ra=ui(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=xa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===i){t=Ul(e,t,n);break e}wl(e,t,r,n)}t=t.child}return t;case 5:return Xa(t),null===e&&ua(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,l=i.children,ni(r,i)?l=null:null!==o&&ni(r,o)&&(t.flags|=32),Cl(e,t),wl(e,t,l,n),t.child;case 6:return null===e&&ua(t),null;case 13:return Ll(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):wl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,xl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return wl(e,t,t.pendingProps,n),t.child;case 8:case 12:return wl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,_i(Sa,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===i.children&&!Ti.current){t=Ul(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Da(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),za(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),za(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}wl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ta(t,n),r=r(i=ja(i)),t.flags|=1,wl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),Sl(e,t,r,i=nl(r.type,i),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),Bl(e,t),t.tag=1,Ni(r)?(e=!0,Ii(t)):e=!1,Ta(t,n),ol(t,r,i),sl(t,r,i,n),zl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return El(e,t,n)}throw Error(a(156,t.tag))};var Ku="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function Gu(e){this._internalRoot=e}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var l=i;i=function(){var e=Uu(o);l.call(e)}}Bu(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Uu(o);a.call(e)}}var o=Hu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[pi]=o.current,Hr(8===e.nodeType?e.parentNode:e),cu(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var l=r;r=function(){var e=Uu(s);l.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[pi]=s.current,Hr(8===e.nodeType?e.parentNode:e),cu((function(){Bu(t,s,n,r)})),s}(n,t,e,i,r);return Uu(o)}Gu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Bu(e,t,null,null)},Gu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Bu(null,e,null,null)})),t[pi]=null}},Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&Lt(e)}},xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,Xe()),0===(6&zs)&&(Hs=Xe()+500,Hi()))}break;case 13:cu((function(){var t=Ma(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Qu(e,1)}},St=function(e){if(13===e.tag){var t=Ma(e,134217728);if(null!==t)nu(t,e,134217728,eu());Qu(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Ma(e,t);if(null!==n)nu(n,e,t,eu());Qu(e,t)}},Et=function(){return yt},Ct=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(a(90));K(r),Z(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=uu,Te=cu;var ec={usingClientEntryPoint:!1,Events:[yi,wi,xi,_e,Pe,uu]},tc={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),at=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qu(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qu(e))throw Error(a(299));var n=!1,r="",i=Ku;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,i),e[pi]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(a(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",l=Ku;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,i,0,o,l),e[pi]=t.current,Hr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(a(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(a(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[pi]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},838:(e,t,n)=>{"use strict";n.r(t),n.d(t,{create:()=>a,default:()=>i});var r={};!function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o="function"===typeof Path2D&&"function"===typeof DOMMatrix,l=function(){if(!t.OffscreenCanvas)return!1;var e=new OffscreenCanvas(1,1),n=e.getContext("2d");n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();try{n.createPattern(r,"no-repeat")}catch(i){return!1}return!0}();function s(){}function u(e){var r=n.exports.Promise,i=void 0!==r?r:t.Promise;return"function"===typeof i?new i(e):(e(s,s),null)}var c,d,f,h=(c=l,d=new Map,{transform:function(e){if(c)return e;if(d.has(e))return d.get(e);var t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),d.set(e,t),t},clear:function(){d.clear()}}),p=function(){var e,t,n=Math.floor(1e3/60),r={},i=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(e=function(e){var t=Math.random();return r[t]=requestAnimationFrame((function a(o){i===o||i+n-1<o?(i=o,delete r[t],e()):r[t]=requestAnimationFrame(a)})),t},t=function(e){r[e]&&cancelAnimationFrame(r[e])}):(e=function(e){return setTimeout(e,n)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),m=function(){var t,n,i={};return function(){if(t)return t;if(!r&&a){var o=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{t=new Worker(URL.createObjectURL(new Blob([o])))}catch(l){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",l),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var l=Math.random().toString(36).slice(2);return n=u((function(a){function s(t){t.data.callback===l&&(delete i[l],e.removeEventListener("message",s),n=null,h.clear(),o(),a())}e.addEventListener("message",s),t(r,l),i[l]=s.bind(null,{data:{callback:l}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}(t)}return t}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(e,t,n){return function(e,t){return t?t(e):e}(e&&(null!==(r=e[t])&&void 0!==r)?e[t]:g[t],n);var r}function v(e){return e<0?0:Math.floor(e)}function y(e){return parseInt(e,16)}function w(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function k(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function E(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function C(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,l=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),o&&"path"===t.shape.type&&"string"===typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,n,r,i,a,o){var l=new Path2D(e),s=new Path2D;s.addPath(l,new DOMMatrix(t));var u=new Path2D;return u.addPath(s,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),u}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(a-r),.1*Math.abs(l-i),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var s=Math.PI/10*t.wobble,u=.1*Math.abs(a-r),c=.1*Math.abs(l-i),d=t.shape.bitmap.width*t.scalar,f=t.shape.bitmap.height*t.scalar,p=new DOMMatrix([Math.cos(s)*u,Math.sin(s)*u,-Math.sin(s)*c,Math.cos(s)*c,t.x,t.y]);p.multiplySelf(new DOMMatrix(t.shape.matrix));var m=e.createPattern(h.transform(t.shape.bitmap),"no-repeat");m.setTransform(p),e.globalAlpha=1-n,e.fillStyle=m,e.fillRect(t.x-d/2,t.y-f/2,d,f),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(l-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,i,a,o,l,s){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,l,s),e.restore()}(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(l-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var g=Math.PI/2*3,b=4*t.scalar,v=8*t.scalar,y=t.x,w=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,w=t.y+Math.sin(g)*v,e.lineTo(y,w),g+=S,y=t.x+Math.cos(g)*b,w=t.y+Math.sin(g)*b,e.lineTo(y,w),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(l)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function _(e,n){var o,l=!e,s=!!b(n||{},"resize"),c=!1,d=b(n,"disableForReducedMotion",Boolean),f=a&&!!b(n||{},"useWorker")?m():null,g=l?S:k,y=!(!e||!f)&&!!e.__confetti_initialized,x="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function _(t,n,a){for(var l,s,c=b(t,"particleCount",v),d=b(t,"angle",Number),f=b(t,"spread",Number),m=b(t,"startVelocity",Number),y=b(t,"decay",Number),x=b(t,"gravity",Number),S=b(t,"drift",Number),k=b(t,"colors",w),_=b(t,"ticks",Number),P=b(t,"shapes"),z=b(t,"scalar"),T=!!b(t,"flat"),j=function(e){var t=b(e,"origin",Object);return t.x=b(t,"x",Number),t.y=b(t,"y",Number),t}(t),F=c,N=[],O=e.width*j.x,M=e.height*j.y;F--;)N.push(E({x:O,y:M,angle:d,spread:f,startVelocity:m,color:k[F%k.length],shape:P[(l=0,s=P.length,Math.floor(Math.random()*(s-l))+l)],ticks:_,decay:y,gravity:x,drift:S,scalar:z,flat:T}));return o?o.addFettis(N):(o=function(e,t,n,a,o){var l,s,c=t.slice(),d=e.getContext("2d"),f=u((function(t){function u(){l=s=null,d.clearRect(0,0,a.width,a.height),h.clear(),o(),t()}l=p.frame((function t(){!r||a.width===i.width&&a.height===i.height||(a.width=e.width=i.width,a.height=e.height=i.height),a.width||a.height||(n(e),a.width=e.width,a.height=e.height),d.clearRect(0,0,a.width,a.height),(c=c.filter((function(e){return C(d,e)}))).length?l=p.frame(t):u()})),s=u}));return{addFettis:function(e){return c=c.concat(e),f},canvas:e,promise:f,reset:function(){l&&p.cancel(l),s&&s()}}}(e,N,g,n,a),o.promise)}function P(n){var r=d||b(n,"disableForReducedMotion",Boolean),i=b(n,"zIndex",Number);if(r&&x)return u((function(e){e()}));l&&o?e=o.canvas:l&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(i),document.body.appendChild(e)),s&&!y&&g(e);var a={width:e.width,height:e.height};function h(){if(f){var t={getBoundingClientRect:function(){if(!l)return e.getBoundingClientRect()}};return g(t),void f.postMessage({resize:{width:t.width,height:t.height}})}a.width=a.height=null}function p(){o=null,s&&(c=!1,t.removeEventListener("resize",h)),l&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,y=!1)}return f&&!y&&f.init(e),y=!0,f&&(e.__confetti_initialized=!0),s&&!c&&(c=!0,t.addEventListener("resize",h,!1)),f?f.fire(n,a,p):_(n,a,p)}return P.reset=function(){f&&f.reset(),o&&o.reset()},P}function P(){return f||(f=_(null,{useWorker:!0,resize:!0})),f}n.exports=function(){return P().apply(this,arguments)},n.exports.reset=function(){P().reset()},n.exports.create=_,n.exports.shapeFromPath=function(e){if(!o)throw new Error("path confetti are not supported in this browser");var t,n;"string"===typeof e?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement("canvas").getContext("2d");if(!n){for(var a,l,s=1e3,u=s,c=s,d=0,f=0,h=0;h<s;h+=2)for(var p=0;p<s;p+=2)i.isPointInPath(r,h,p,"nonzero")&&(u=Math.min(u,h),c=Math.min(c,p),d=Math.max(d,h),f=Math.max(f,p));a=d-u,l=f-c;var m=Math.min(10/a,10/l);n=[m,0,0,m,-Math.round(a/2+u)*m,-Math.round(l/2+c)*m]}return{type:"path",path:t,matrix:n}},n.exports.shapeFromText=function(e){var t,n=1,r="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"===typeof e?t=e:(t=e.text,n="scalar"in e?e.scalar:n,i="fontFamily"in e?e.fontFamily:i,r="color"in e?e.color:r);var a=10*n,o=a+"px "+i,l=new OffscreenCanvas(a,a),s=l.getContext("2d");s.font=o;var u=s.measureText(t),c=Math.ceil(u.actualBoundingBoxRight+u.actualBoundingBoxLeft),d=Math.ceil(u.actualBoundingBoxAscent+u.actualBoundingBoxDescent),f=u.actualBoundingBoxLeft+2,h=u.actualBoundingBoxAscent+2;c+=4,d+=4,(s=(l=new OffscreenCanvas(c,d)).getContext("2d")).font=o,s.fillStyle=r,s.fillText(t,f,h);var p=1/n;return{type:"bitmap",bitmap:l.transferToImageBitmap(),matrix:[p,0,0,p,-c*p/2,-d*p/2]}}}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),r,!1);const i=r.exports;var a=r.exports.create},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.create;function i(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(324),o=n.n(a),l="-ms-",s="-moz-",u="-webkit-",c="comm",d="rule",f="decl",h="@keyframes",p=Math.abs,m=String.fromCharCode,g=Object.assign;function b(e){return e.trim()}function v(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function x(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function k(e){return e.length}function E(e){return e.length}function C(e,t){return t.push(e),e}function _(e,t){return e.filter((function(e){return!v(e,t)}))}var P=1,z=1,T=0,j=0,F=0,N="";function O(e,t,n,r,i,a,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:P,column:z,length:o,return:"",siblings:l}}function M(e,t){return g(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=M(e.root,{children:[e]});C(e,e.siblings)}function I(){return F=j>0?x(N,--j):0,z--,10===F&&(z=1,P--),F}function L(){return F=j<T?x(N,j++):0,z++,10===F&&(z=1,P++),F}function D(){return x(N,j)}function A(){return j}function $(e,t){return S(N,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return P=z=1,T=k(N=e),j=0,[]}function B(e){return N="",e}function U(e){return b($(j-1,K(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(F=D())&&F<33;)L();return W(e)>2||W(F)>3?"":" "}function Q(e,t){for(;--t&&L()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return $(e,A()+(t<6&&32==D()&&32==L()))}function K(e){for(;L();)switch(F){case e:return j;case 34:case 39:34!==e&&39!==e&&K(F);break;case 40:41===e&&K(e);break;case 92:L()}return j}function Y(e,t){for(;L()&&e+F!==57&&(e+F!==84||47!==D()););return"/*"+$(t,j-1)+"*"+m(47===e?e:L())}function G(e){for(;!W(D());)L();return $(e,j)}function q(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case c:return"";case h:return e.return=e.value+"{"+q(e.children,r)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(n=q(e.children,r))?e.return=e.value+"{"+n+"}":""}function Z(e,t,n){switch(function(e,t){return 45^x(e,0)?(((t<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+s+e+l+e+e;case 5936:switch(x(e,t+11)){case 114:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+l+e+e;case 6165:return u+e+l+"flex-"+e+e;case 5187:return u+e+y(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return u+e+l+"flex-item-"+y(e,/flex-|-self/g,"")+(v(e,/flex-|baseline/)?"":l+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return u+e+l+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+l+y(e,"shrink","negative")+e;case 5292:return u+e+l+y(e,"basis","preferred-size")+e;case 6060:return u+"box-"+y(e,"-grow","")+u+e+l+y(e,"grow","positive")+e;case 4554:return u+y(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!v(e,/flex-|baseline/))return l+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return l+y(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,v(e.props,/grid-\w+-end/)}))?~w(e+(n=n[t].value),"span",0)?e:l+y(e,"-start","")+e+l+"grid-row-span:"+(~w(n,"span",0)?v(n,/\d+/):+v(n,/\d+/)-+v(e,/\d+/))+";":l+y(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return v(e.props,/grid-\w+-start/)}))?e:l+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(x(e,t+1)){case 109:if(45!==x(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+s+(108==x(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?Z(y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return l+n+":"+r+s+(i?l+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===x(e,t+6))return y(e,":",":"+u)+e;break;case 6444:switch(x(e,45===x(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===x(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+e;case 100:return y(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function J(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=Z(e.value,e.length,n));case h:return q([M(e,{value:y(e.value,"@","@"+u)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(v(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":R(M(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),R(M(e,{props:[t]})),g(e,{props:_(n,r)});break;case"::placeholder":R(M(e,{props:[y(t,/:(plac\w+)/,":"+u+"input-$1")]})),R(M(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),R(M(e,{props:[y(t,/:(plac\w+)/,l+"input-$1")]})),R(M(e,{props:[t]})),g(e,{props:_(n,r)})}return""}))}}function ee(e){return B(te("",null,null,null,[""],e=H(e),0,[0],e))}function te(e,t,n,r,i,a,o,l,s){for(var u=0,c=0,d=o,f=0,h=0,g=0,b=1,v=1,S=1,E=0,_="",P=i,z=a,T=r,j=_;v;)switch(g=E,E=L()){case 40:if(108!=g&&58==x(j,d-1)){-1!=w(j+=y(U(E),"&","&\f"),"&\f",p(u?l[u-1]:0))&&(S=-1);break}case 34:case 39:case 91:j+=U(E);break;case 9:case 10:case 13:case 32:j+=V(g);break;case 92:j+=Q(A()-1,7);continue;case 47:switch(D()){case 42:case 47:C(re(Y(L(),A()),t,n,s),s);break;default:j+="/"}break;case 123*b:l[u++]=k(j)*S;case 125*b:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+c:-1==S&&(j=y(j,/\f/g,"")),h>0&&k(j)-d&&C(h>32?ie(j+";",r,n,d-1,s):ie(y(j," ","")+";",r,n,d-2,s),s);break;case 59:j+=";";default:if(C(T=ne(j,t,n,u,c,i,l,_,P=[],z=[],d,a),a),123===E)if(0===c)te(j,t,T,T,P,a,d,l,z);else switch(99===f&&110===x(j,3)?100:f){case 100:case 108:case 109:case 115:te(e,T,T,r&&C(ne(e,T,T,0,0,i,l,_,i,P=[],d,z),z),i,z,d,l,r?P:z);break;default:te(j,T,T,T,[""],z,0,l,z)}}u=c=h=0,b=S=1,_=j="",d=o;break;case 58:d=1+k(j),h=g;default:if(b<1)if(123==E)--b;else if(125==E&&0==b++&&125==I())continue;switch(j+=m(E),E*b){case 38:S=c>0?1:(j+="\f",-1);break;case 44:l[u++]=(k(j)-1)*S,S=1;break;case 64:45===D()&&(j+=U(L())),f=D(),c=d=k(_=j+=G(A())),E++;break;case 45:45===g&&2==k(j)&&(b=0)}}return a}function ne(e,t,n,r,i,a,o,l,s,u,c,f){for(var h=i-1,m=0===i?a:[""],g=E(m),v=0,w=0,x=0;v<r;++v)for(var k=0,C=S(e,h+1,h=p(w=o[v])),_=e;k<g;++k)(_=b(w>0?m[k]+" "+C:y(C,/&\f/g,m[k])))&&(s[x++]=_);return O(e,t,n,0===i?d:l,s,u,c,f)}function re(e,t,n,r){return O(e,t,n,c,m(F),S(e,2,-2),0,r)}function ie(e,t,n,r,i){return O(e,t,n,f,S(e,0,r),S(e,r+1,-1),r,i)}var ae={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ue="6.1.17",ce="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Forth-Grade-English-Hub",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),he=(new Set,Object.freeze([])),pe=Object.freeze({});function me(e,t,n){return void 0===n&&(n=pe),e.theme!==n.theme&&e.theme||t||n.theme}var ge=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ve=/(^-|-$)/g;function ye(e){return e.replace(be,"-").replace(ve,"")}var we=/(a)(d)/gi,xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=xe(t%52)+n;return(xe(t%52)+n).replace(we,"$1-$2")}var ke,Ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return Ee(5381,e)};function _e(e){return Se(Ce(e)>>>0)}function Pe(e){return e.displayName||e.name||"Component"}function ze(e){return"string"==typeof e&&!0}var Te="function"==typeof Symbol&&Symbol.for,je=Te?Symbol.for("react.memo"):60115,Fe=Te?Symbol.for("react.forward_ref"):60112,Ne={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Re=((ke={})[Fe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ke[je]=Me,ke);function Ie(e){return("type"in(t=e)&&t.type.$$typeof)===je?Me:"$$typeof"in e?Re[e.$$typeof]:Ne;var t}var Le=Object.defineProperty,De=Object.getOwnPropertyNames,Ae=Object.getOwnPropertySymbols,$e=Object.getOwnPropertyDescriptor,We=Object.getPrototypeOf,He=Object.prototype;function Be(e,t,n){if("string"!=typeof t){if(He){var r=We(t);r&&r!==He&&Be(e,r,n)}var i=De(t);Ae&&(i=i.concat(Ae(t)));for(var a=Ie(e),o=Ie(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Oe||n&&n[s]||o&&s in o||a&&s in a)){var u=$e(t,s);try{Le(e,s,u)}catch(e){}}}}return e}function Ue(e){return"function"==typeof e}function Ve(e){return"object"==typeof e&&"styledComponentId"in e}function Qe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ke(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ye(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ge(e,t,n){if(void 0===n&&(n=!1),!n&&!Ye(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ge(e[r],t[r]);else if(Ye(t))for(var r in t)e[r]=Ge(e[r],t[r]);return e}function qe(e,t){Object.defineProperty(e,"toString",{value:t})}function Xe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Xe(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(ce);return t},e}(),Je=new Map,et=new Map,tt=1,nt=function(e){if(Je.has(e))return Je.get(e);for(;et.has(tt);)tt++;var t=tt++;return Je.set(e,t),et.set(t,e),t},rt=function(e,t){tt=t+1,Je.set(e,t),et.set(t,e)},it="style[".concat(oe,"][").concat(se,'="').concat(ue,'"]'),at=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ot=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},lt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ce),i=[],a=0,o=r.length;a<o;a++){var l=r[a].trim();if(l){var s=l.match(at);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(rt(c,u),ot(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},st=function(e){for(var t=document.querySelectorAll(it),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(oe)!==le&&(lt(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ut(){return n.nc}var ct=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(oe,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(oe,le),r.setAttribute(se,ue);var o=ut();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},dt=function(){function e(e){this.element=ct(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Xe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=ct(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ht=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),pt=de,mt={isServer:!de,useCSSOMInjection:!fe},gt=function(){function e(e,t,n){void 0===e&&(e=pe),void 0===t&&(t={});var i=this;this.options=r(r({},mt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&pt&&(pt=!1,st(this)),qe(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return et.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var l="".concat(oe,".g").concat(n,'[id="').concat(i,'"]'),s="";void 0!==a&&a.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(ce)},a=0;a<n;a++)i(a);return r}(i)}))}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&de&&st(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ht(n):t?new dt(n):new ft(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(nt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,vt=/^\s*\/\/.*$/gm;function yt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=yt(e.children,t)),e}))}function wt(e){var t,n,r,i=void 0===e?pe:e,a=i.options,o=void 0===a?pe:a,l=i.plugins,s=void 0===l?he:l,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(r,u))})),o.prefix&&c.push(J),c.push(X);var f=function(e,i,a,l){void 0===i&&(i=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(vt,""),u=ee(a||i?"".concat(a," ").concat(i," { ").concat(s," }"):s);o.namespace&&(u=yt(u,o.namespace));var d,f=[];return q(u,function(e){var t=E(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce((function(e,t){return t.name||Xe(15),Ee(e,t.name)}),5381).toString():"",f}var xt=new gt,St=wt(),kt=e.createContext({shouldForwardProp:void 0,styleSheet:xt,stylis:St}),Et=(kt.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(kt)}function _t(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=Ct().styleSheet,l=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)((function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){o()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var u=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}}),[t.shouldForwardProp,l,s]);return e.createElement(kt.Provider,{value:u},e.createElement(Et.Provider,{value:s},t.children))}var Pt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qe(this,(function(){throw Xe(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),zt=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jt=function(e){return null==e||!1===e||""===e},Ft=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!jt(o)&&(Array.isArray(o)&&o.isCss||Ue(o)?r.push("".concat(Tt(a),":"),o,";"):Ye(o)?r.push.apply(r,i(i(["".concat(a," {")],Ft(o),!1),["}"],!1)):r.push("".concat(Tt(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ae||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nt(e,t,n,r){return jt(e)?[]:Ve(e)?[".".concat(e.styledComponentId)]:Ue(e)?!Ue(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Nt(e(t),t,n,r):e instanceof Pt?n?(e.inject(n,r),[e.getName(r)]):[e]:Ye(e)?Ft(e):Array.isArray(e)?Array.prototype.concat.apply(he,e.map((function(e){return Nt(e,t,n,r)}))):[e.toString()];var i}function Ot(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ue(n)&&!Ve(n))return!1}return!0}var Mt=Ce(ue),Rt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ot(e),this.componentId=t,this.baseHash=Ee(Mt,t),this.baseStyle=n,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Qe(r,this.staticRulesId);else{var i=Ke(Nt(this.rules,e,t,n)),a=Se(Ee(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Qe(r,a),this.staticRulesId=a}else{for(var l=Ee(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Ke(Nt(c,e,t,n));l=Ee(l,d+u),s+=d}}if(s){var f=Se(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Qe(r,f)}}return r},e}(),It=e.createContext(void 0);It.Consumer;var Lt={};new Set;function Dt(t,n,i){var a=Ve(t),o=t,l=!ze(t),s=n.attrs,u=void 0===s?he:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":ye(e);Lt[n]=(Lt[n]||0)+1;var r="".concat(n,"-").concat(_e(ue+n+Lt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,f=n.displayName,h=void 0===f?function(e){return ze(e)?"styled.".concat(e):"Styled(".concat(Pe(e),")")}(t):f,p=n.displayName&&n.componentId?"".concat(ye(n.displayName),"-").concat(n.componentId):n.componentId||d,m=a&&o.attrs?o.attrs.concat(u).filter(Boolean):u,g=n.shouldForwardProp;if(a&&o.shouldForwardProp){var b=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;g=function(e,t){return b(e,t)&&v(e,t)}}else g=b}var y=new Rt(i,p,a?o.componentStyle:void 0);function w(t,n){return function(t,n,i){var a=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,u=t.styledComponentId,c=t.target,d=e.useContext(It),f=Ct(),h=t.shouldForwardProp||f.shouldForwardProp,p=me(n,d,l)||pe,m=function(e,t,n){for(var i,a=r(r({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var l=Ue(i=e[o])?i(a):i;for(var s in l)a[s]="className"===s?Qe(a[s],l[s]):"style"===s?r(r({},a[s]),l[s]):l[s]}return t.className&&(a.className=Qe(a.className,t.className)),a}(a,n,p),g=m.as||c,b={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===p||("forwardedAs"===v?b.as=m.forwardedAs:h&&!h(v,g)||(b[v]=m[v]));var y=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),w=Qe(s,u);return y&&(w+=" "+y),m.className&&(w+=" "+m.className),b[ze(g)&&!ge.has(g)?"class":"className"]=w,i&&(b.ref=i),(0,e.createElement)(g,b)}(x,t,n)}w.displayName=h;var x=e.forwardRef(w);return x.attrs=m,x.componentStyle=y,x.displayName=h,x.shouldForwardProp=g,x.foldedComponentIds=a?Qe(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=a?o.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Ge(e,i[r],!0);return e}({},o.defaultProps,e):e}}),qe(x,(function(){return".".concat(x.styledComponentId)})),l&&Be(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function At(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var $t=function(e){return Object.assign(e,{isCss:!0})};function Wt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ue(e)||Ye(e))return $t(Nt(At(he,i([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Nt(r):$t(Nt(At(r,t)))}function Ht(e,t,n){if(void 0===n&&(n=pe),!t)throw Xe(1,t);var a=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Wt.apply(void 0,i([r],a,!1)))};return a.attrs=function(i){return Ht(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},a.withConfig=function(i){return Ht(e,t,r(r({},n),i))},a}var Bt=function(e){return Ht(Dt,e)},Ut=Bt;ge.forEach((function(e){Ut[e]=Bt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),gt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(Ke(Nt(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ut(),r=Ke([n&&'nonce="'.concat(n,'"'),"".concat(oe,'="true"'),"".concat(se,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Xe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Xe(2);var i=t.instance.toString();if(!i)return[];var a=((n={})[oe]="",n[se]=ue,n.dangerouslySetInnerHTML={__html:i},n),o=ut();return o&&(a.nonce=o),[e.createElement("style",r({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Xe(2);return e.createElement(_t,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Xe(3)}})(),"__sc-".concat(oe,"__");var Vt=n(579);const Qt=Ut.button`
  background-color: white;
  border: none;
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
  width: 100%;
  
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
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
  }
`,Kt=Ut.div`
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
`,Yt=Ut.button`
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
    outline: 3px solid #3498db;
    outline-offset: 2px;
    opacity: 1;
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
`,Gt=t=>{let{english:n,hebrew:r,forceFlipped:i}=t;const[a,o]=(0,e.useState)(!1);(0,e.useEffect)((()=>{void 0!==i&&o(i)}),[i]);const l=e=>{e.stopPropagation();const t=new SpeechSynthesisUtterance(n);t.lang="en-US",window.speechSynthesis.speak(t)};return(0,Vt.jsxs)(Qt,{onClick:()=>o(!a),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),o(!a))},"aria-label":`${n} - Click to flip and see Hebrew translation`,role:"button",tabIndex:0,children:[(0,Vt.jsx)(Kt,{isHebrew:a,children:a?r:n}),(0,Vt.jsx)(Yt,{onClick:l,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),l(e))},hidden:a,"aria-label":`Pronounce ${n}`,title:"Click to hear pronunciation",tabIndex:a?-1:0,children:"\ud83d\udd0a"})]})};var qt=n(494),Xt=n.n(qt);const Zt=JSON.parse('{"L":[{"name":"Greetings and Common Phrases","wordPairs":[{"english":"Hello","hebrew":"\u05e9\u05dc\u05d5\u05dd"},{"english":"Goodbye","hebrew":"\u05dc\u05d4\u05ea\u05e8\u05d0\u05d5\u05ea"},{"english":"Thank you","hebrew":"\u05ea\u05d5\u05d3\u05d4"},{"english":"Please","hebrew":"\u05d1\u05d1\u05e7\u05e9\u05d4"},{"english":"Welcome","hebrew":"\u05d1\u05e8\u05d5\u05da \u05d4\u05d1\u05d0"},{"english":"Good morning","hebrew":"\u05d1\u05d5\u05e7\u05e8 \u05d8\u05d5\u05d1"},{"english":"Good night","hebrew":"\u05dc\u05d9\u05dc\u05d4 \u05d8\u05d5\u05d1"},{"english":"How are you?","hebrew":"\u05de\u05d4 \u05e9\u05dc\u05d5\u05de\u05da?"},{"english":"I love you","hebrew":"\u05d0\u05e0\u05d9 \u05d0\u05d5\u05d4\u05d1 \u05d0\u05d5\u05ea\u05da"},{"english":"Sorry","hebrew":"\u05e1\u05dc\u05d9\u05d7\u05d4"}]},{"name":"Days of the Week","wordPairs":[{"english":"Sunday","hebrew":"\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df"},{"english":"Monday","hebrew":"\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9"},{"english":"Tuesday","hebrew":"\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9"},{"english":"Wednesday","hebrew":"\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9"},{"english":"Thursday","hebrew":"\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9"},{"english":"Friday","hebrew":"\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9"},{"english":"Saturday","hebrew":"\u05e9\u05d1\u05ea"}]},{"name":"Time and Dates","wordPairs":[{"english":"Tomorrow","hebrew":"\u05de\u05d7\u05e8"},{"english":"Yesterday","hebrew":"\u05d0\u05ea\u05de\u05d5\u05dc"},{"english":"Maybe","hebrew":"\u05d0\u05d5\u05dc\u05d9"}]},{"name":"Places and Institutions","wordPairs":[{"english":"Town","hebrew":"\u05e2\u05d9\u05e8"},{"english":"School","hebrew":"\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8"},{"english":"Hospital","hebrew":"\u05d1\u05d9\u05ea \u05d7\u05d5\u05dc\u05d9\u05dd"},{"english":"Farm","hebrew":"\u05d7\u05d5\u05d5\u05d4"},{"english":"House","hebrew":"\u05d1\u05d9\u05ea"}]},{"name":"People and Relationships","wordPairs":[{"english":"Friend","hebrew":"\u05d7\u05d1\u05e8"},{"english":"Help","hebrew":"\u05e2\u05d6\u05e8\u05d4"},{"english":"People","hebrew":"\u05d0\u05e0\u05e9\u05d9\u05dd"},{"english":"Doctor","hebrew":"\u05e8\u05d5\u05e4\u05d0"},{"english":"Boy","hebrew":"\u05d9\u05dc\u05d3"},{"english":"Astronaut","hebrew":"\u05d0\u05e1\u05d8\u05e8\u05d5\u05e0\u05d0\u05d5\u05d8"}]},{"name":"Food and Drink","wordPairs":[{"english":"Water","hebrew":"\u05de\u05d9\u05dd"},{"english":"Food","hebrew":"\u05d0\u05d5\u05db\u05dc"},{"english":"Dinner","hebrew":"\u05d0\u05e8\u05d5\u05d7\u05ea \u05e2\u05e8\u05d1"},{"english":"Cake","hebrew":"\u05e2\u05d5\u05d2\u05d4"},{"english":"Coconut","hebrew":"\u05e7\u05d5\u05e7\u05d5\u05e1"},{"english":"Corn","hebrew":"\u05ea\u05d9\u05e8\u05e1"},{"english":"Pineapple","hebrew":"\u05d0\u05e0\u05e0\u05e1"},{"english":"Grape","hebrew":"\u05e2\u05e0\u05d1"},{"english":"Orange","hebrew":"\u05ea\u05e4\u05d5\u05d6"}]},{"name":"Animals","wordPairs":[{"english":"Elephant","hebrew":"\u05e4\u05d9\u05dc"},{"english":"Kitten","hebrew":"\u05d7\u05ea\u05dc\u05ea\u05d5\u05dc"},{"english":"Animal","hebrew":"\u05d7\u05d9\u05d4"},{"english":"Bear","hebrew":"\u05d3\u05d5\u05d1"},{"english":"Tiger","hebrew":"\u05d8\u05d9\u05d2\u05e8\u05d9\u05e1"},{"english":"Lion","hebrew":"\u05d0\u05e8\u05d9\u05d4"},{"english":"Giraffe","hebrew":"\u05d2\'\u05d9\u05e8\u05e4\u05d4"},{"english":"Cat","hebrew":"\u05d7\u05ea\u05d5\u05dc"},{"english":"Dog","hebrew":"\u05db\u05dc\u05d1"},{"english":"bat","hebrew":"\u05e2\u05d8\u05dc\u05e3"},{"english":"Bird","hebrew":"\u05e6\u05d9\u05e4\u05d5\u05e8"},{"english":"Fish","hebrew":"\u05d3\u05d2"},{"english":"Snake","hebrew":"\u05e0\u05d7\u05e9"},{"english":"Rabbit","hebrew":"\u05d0\u05e8\u05e0\u05d1"},{"english":"Mouse","hebrew":"\u05e2\u05db\u05d1\u05e8"},{"english":"Pig","hebrew":"\u05d7\u05d6\u05d9\u05e8"},{"english":"Sheep","hebrew":"\u05db\u05d1\u05e9"},{"english":"Cow","hebrew":"\u05e4\u05e8\u05d4"},{"english":"Ant","hebrew":"\u05e0\u05de\u05dc\u05d4"},{"english":"Alligator","hebrew":"\u05ea\u05e0\u05d9\u05df"},{"english":"Butterfly","hebrew":"\u05e4\u05e8\u05e4\u05e8"},{"english":"Chick","hebrew":"\u05d0\u05e4\u05e8\u05d5\u05d7"},{"english":"Spider","hebrew":"\u05e2\u05db\u05d1\u05d9\u05e9"},{"english":"Tiger","hebrew":"\u05d8\u05d9\u05d2\u05e8\u05d9\u05e1"}]},{"name":"Transportation","wordPairs":[{"english":"Car","hebrew":"\u05de\u05db\u05d5\u05e0\u05d9\u05ea"},{"english":"Bike","hebrew":"\u05d0\u05d5\u05e4\u05e0\u05d9\u05d9\u05dd"},{"english":"Trolley","hebrew":"\u05e2\u05d2\u05dc\u05d4"},{"english":"Motor","hebrew":"\u05de\u05e0\u05d5\u05e2"},{"english":"Driver","hebrew":"\u05e0\u05d4\u05d2"},{"english":"Airplane","hebrew":"\u05de\u05d8\u05d5\u05e1"},{"english":"Anchor","hebrew":"\u05e2\u05d5\u05d2\u05df"},{"english":"Truck","hebrew":"\u05de\u05e9\u05d0\u05d9\u05ea"},{"english":"Trailer","hebrew":"\u05e7\u05e8\u05d5\u05d5\u05df"}]},{"name":"School and Office","wordPairs":[{"english":"Book","hebrew":"\u05e1\u05e4\u05e8"},{"english":"Pen","hebrew":"\u05e2\u05d8"},{"english":"Paper","hebrew":"\u05e0\u05d9\u05d9\u05e8"},{"english":"Ruler","hebrew":"\u05e1\u05e8\u05d2\u05dc"},{"english":"Marker","hebrew":"\u05d8\u05d5\u05e9"}]},{"name":"Colors","wordPairs":[{"english":"Red","hebrew":"\u05d0\u05d3\u05d5\u05dd"},{"english":"Blue","hebrew":"\u05db\u05d7\u05d5\u05dc"},{"english":"Green","hebrew":"\u05d9\u05e8\u05d5\u05e7"},{"english":"Yellow","hebrew":"\u05e6\u05d4\u05d5\u05d1"},{"english":"Orange","hebrew":"\u05db\u05ea\u05d5\u05dd"},{"english":"Purple","hebrew":"\u05e1\u05d2\u05d5\u05dc"},{"english":"Pink","hebrew":"\u05d5\u05e8\u05d5\u05d3"},{"english":"Brown","hebrew":"\u05d7\u05d5\u05dd"},{"english":"Black","hebrew":"\u05e9\u05d7\u05d5\u05e8"},{"english":"White","hebrew":"\u05dc\u05d1\u05df"},{"english":"Gray","hebrew":"\u05d0\u05e4\u05d5\u05e8"},{"english":"Gold","hebrew":"\u05d6\u05d4\u05d1"},{"english":"Silver","hebrew":"\u05db\u05e1\u05e3"}]},{"name":"Languages","wordPairs":[{"english":"Arabic","hebrew":"\u05e2\u05e8\u05d1\u05d9\u05ea"}]},{"name":"Emotions and States","wordPairs":[{"english":"Scared","hebrew":"\u05de\u05e4\u05d7\u05d3"},{"english":"Clean","hebrew":"\u05e0\u05e7\u05d9"},{"english":"Dirty","hebrew":"\u05de\u05dc\u05d5\u05db\u05dc\u05da"},{"english":"Smile","hebrew":"\u05d7\u05d9\u05d5\u05da"},{"english":"Cool","hebrew":"\u05e7\u05e8 , \u05de\u05d2\u05e0\u05d9\u05d1 (\u05e1\u05dc\u05e0\u05d2)"},{"english":"Tired","hebrew":"\u05e2\u05d9\u05d9\u05e3"},{"english":"Tear","hebrew":"\u05d3\u05de\u05e2\u05d4"},{"english":"Happy","hebrew":"\u05e9\u05de\u05d7"},{"english":"Sad","hebrew":"\u05e2\u05e6\u05d5\u05d1"},{"english":"Rich","hebrew":"\u05e2\u05e9\u05d9\u05e8"},{"english":"Poor","hebrew":"\u05e2\u05e0\u05d9"}]},{"name":"Activities","wordPairs":[{"english":"Party","hebrew":"\u05de\u05e1\u05d9\u05d1\u05d4"},{"english":"Tricks","hebrew":"\u05d8\u05e8\u05d9\u05e7\u05d9\u05dd"},{"english":"Reading","hebrew":"\u05e7\u05e8\u05d9\u05d0\u05d4"},{"english":"Writing","hebrew":"\u05db\u05ea\u05d9\u05d1\u05d4"},{"english":"Drawing","hebrew":"\u05e6\u05d9\u05d5\u05e8"},{"english":"Singing","hebrew":"\u05e9\u05d9\u05e8\u05d4"},{"english":"Dancing","hebrew":"\u05e8\u05d9\u05e7\u05d5\u05d3"},{"english":"Swimming","hebrew":"\u05e9\u05d7\u05d9\u05d9\u05d4"},{"english":"Running","hebrew":"\u05e8\u05d9\u05e6\u05d4"},{"english":"Cooking","hebrew":"\u05d1\u05d9\u05e9\u05d5\u05dc"},{"english":"Playing","hebrew":"\u05de\u05e9\u05d7\u05e7"},{"english":"Skating","hebrew":"\u05d4\u05d7\u05dc\u05e7\u05d4"},{"english":"Cycling","hebrew":"\u05e8\u05db\u05d9\u05d1\u05d4 \u05e2\u05dc \u05d0\u05d5\u05e4\u05e0\u05d9\u05d9\u05dd"}]},{"name":"Verbs","wordPairs":[{"english":"Watch","hebrew":"\u05e6\u05d5\u05e4\u05d4"},{"english":"Listen","hebrew":"\u05dc\u05d4\u05e7\u05e9\u05d9\u05d1"},{"english":"Wakes up","hebrew":"\u05de\u05ea\u05e2\u05d5\u05e8\u05e8"},{"english":"With","hebrew":"\u05e2\u05dd"},{"english":"Thirsty","hebrew":"\u05e6\u05de\u05d0"},{"english":"Hungry","hebrew":"\u05e8\u05e2\u05d1"},{"english":"Want","hebrew":"\u05e8\u05d5\u05e6\u05d4"},{"english":"Wear","hebrew":"\u05dc\u05d5\u05d1\u05e9"},{"english":"Wearing","hebrew":"\u05dc\u05d5\u05d1\u05e9"}]},{"name":"Sentences","wordPairs":[{"english":"How many lions do you have?","hebrew":"\u05db\u05de\u05d4 \u05d0\u05e8\u05d9\u05d5\u05ea \u05d9\u05e9 \u05dc\u05da"},{"english":"We have five lions","hebrew":"\u05d9\u05e9 \u05dc\u05e0\u05d5 \u05d7\u05de\u05d9\u05e9\u05d4 \u05d0\u05e8\u05d9\u05d5\u05ea"},{"english":"There are two elephants","hebrew":"\u05d9\u05e9 \u05e9\u05e0\u05d9 \u05e4\u05d9\u05dc\u05d9\u05dd"},{"english":"What time is it?","hebrew":"\u05de\u05d4 \u05d4\u05e9\u05e2\u05d4?"},{"english":"Its three o`clock","hebrew":"\u05d4\u05e9\u05e2\u05d4 \u05e9\u05dc\u05d5\u05e9"},{"english":"Its half past two","hebrew":"\u05d4\u05e9\u05e2\u05d4 \u05e9\u05ea\u05d9\u05d9\u05dd \u05d5\u05d7\u05e6\u05d9"},{"english":"I wake up at seven o`clock","hebrew":"\u05d0\u05e0\u05d9 \u05de\u05ea\u05e2\u05d5\u05e8\u05e8 \u05d1\u05e9\u05e2\u05d4 \u05e9\u05d1\u05e2"},{"english":"I eat dinner at half past six","hebrew":"\u05d0\u05e0\u05d9 \u05d0\u05d5\u05db\u05dc \u05d0\u05e8\u05d5\u05d7\u05ea \u05e2\u05e8\u05d1 \u05d1\u05e9\u05e2\u05d4 \u05e9\u05e9 \u05d5\u05d7\u05e6\u05d9"},{"english":"What are you good at?","hebrew":"\u05d1\u05de\u05d4 \u05d0\u05ea\u05d4 \u05d8\u05d5\u05d1 ?"},{"english":"I am good at Arabic","hebrew":"\u05d0\u05e0\u05d9 \u05d8\u05d5\u05d1 \u05d1\u05e2\u05e8\u05d1\u05d9\u05ea"},{"english":"I have a test in Hebrew","hebrew":"\u05d9\u05e9 \u05dc\u05d9 \u05de\u05d1\u05d7\u05df \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea"},{"english":"Look at my new tricks","hebrew":"\u05e8\u05d0\u05d4 \u05d0\u05ea \u05d4\u05d8\u05e8\u05d9\u05e7\u05d9\u05dd \u05d4\u05d7\u05d3\u05e9\u05d9\u05dd \u05e9\u05dc\u05d9"},{"english":"Please tell me your name","hebrew":"\u05d1\u05d1\u05e7\u05e9\u05d4 \u05d0\u05de\u05d5\u05e8 \u05dc\u05d9 \u05d0\u05ea \u05e9\u05de\u05da"},{"english":"Come to my birthday party","hebrew":"\u05d1\u05d5\u05d0 \u05dc\u05de\u05e1\u05d9\u05d1\u05ea \u05d9\u05d5\u05dd \u05d4\u05d4\u05d5\u05dc\u05d3\u05ea \u05e9\u05dc\u05d9"},{"english":"What can I bring?","hebrew":"\u05de\u05d4 \u05d0\u05e0\u05d9 \u05d9\u05db\u05d5\u05dc \u05dc\u05d4\u05d1\u05d9\u05d0?"},{"english":"I know","hebrew":"\u05d0\u05e0\u05d9 \u05d9\u05d5\u05d3\u05e2"},{"english":"I don\'t know","hebrew":"\u05d0\u05e0\u05d9 \u05dc\u05d0 \u05d9\u05d5\u05d3\u05e2"},{"english":"Let\'s play with the kitten","hebrew":"\u05d1\u05d5\u05d0 \u05e0\u05e9\u05d7\u05e7 \u05e2\u05dd \u05d4\u05d7\u05ea\u05dc\u05ea\u05d5\u05dc"},{"english":"The teacher is reading a book","hebrew":"\u05d4\u05de\u05d5\u05e8\u05d4 \u05e7\u05d5\u05e8\u05d0 \u05e1\u05e4\u05e8"},{"english":"I like to eat pineapple and grapes","hebrew":"\u05d0\u05e0\u05d9 \u05d0\u05d5\u05d4\u05d1 \u05dc\u05d0\u05db\u05d5\u05dc \u05d0\u05e0\u05e0\u05e1 \u05d5\u05e2\u05e0\u05d1\u05d9\u05dd"},{"english":"The computer is on the table","hebrew":"\u05d4\u05de\u05d7\u05e9\u05d1 \u05e2\u05dc \u05d4\u05e9\u05d5\u05dc\u05d7\u05df"},{"english":"My favorite color is purple","hebrew":"\u05d4\u05e6\u05d1\u05e2 \u05d4\u05d0\u05d4\u05d5\u05d1 \u05e2\u05dc\u05d9 \u05d4\u05d5\u05d0 \u05e1\u05d2\u05d5\u05dc"},{"english":"The driver is wearing a blue shirt","hebrew":"\u05d4\u05e0\u05d4\u05d2 \u05dc\u05d5\u05d1\u05e9 \u05d7\u05d5\u05dc\u05e6\u05d4 \u05db\u05d7\u05d5\u05dc\u05d4"},{"english":"We are going to the beach tomorrow","hebrew":"\u05d0\u05e0\u05d7\u05e0\u05d5 \u05d4\u05d5\u05dc\u05db\u05d9\u05dd \u05dc\u05d7\u05d5\u05e3 \u05de\u05d7\u05e8"},{"english":"The singer is dancing on stage","hebrew":"\u05d4\u05d6\u05de\u05e8 \u05e8\u05d5\u05e7\u05d3 \u05e2\u05dc \u05d4\u05d1\u05de\u05d4"},{"english":"I need to buy a new phone","hebrew":"\u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e7\u05e0\u05d5\u05ea \u05d8\u05dc\u05e4\u05d5\u05df \u05d7\u05d3\u05e9"},{"english":"The weather is warm and sunny","hebrew":"\u05de\u05d6\u05d2 \u05d4\u05d0\u05d5\u05d5\u05d9\u05e8 \u05d7\u05dd \u05d5\u05e9\u05de\u05e9\u05d9"},{"english":"My mother is cooking dinner","hebrew":"\u05d0\u05de\u05d0 \u05e9\u05dc\u05d9 \u05de\u05d1\u05e9\u05dc\u05ea \u05d0\u05e8\u05d5\u05d7\u05ea \u05e2\u05e8\u05d1"},{"english":"Good idea","hebrew":"\u05e8\u05e2\u05d9\u05d5\u05df \u05d8\u05d5\u05d1"}]},{"name":"Objects","wordPairs":[{"english":"Apple","hebrew":"\u05ea\u05e4\u05d5\u05d7"},{"english":"Table","hebrew":"\u05e9\u05d5\u05dc\u05d7\u05df"},{"english":"Bottle","hebrew":"\u05d1\u05e7\u05d1\u05d5\u05e7"},{"english":"Chair","hebrew":"\u05db\u05d9\u05e1\u05d0"},{"english":"Mirror","hebrew":"\u05de\u05e8\u05d0\u05d4"},{"english":"Ball","hebrew":"\u05db\u05d3\u05d5\u05e8"},{"english":"Candle","hebrew":"\u05e0\u05e8"},{"english":"Puzzle","hebrew":"\u05e4\u05d0\u05d6\u05dc"}]},{"name":"Shapes and Sizes","wordPairs":[{"english":"Circle","hebrew":"\u05de\u05e2\u05d2\u05dc"},{"english":"Far","hebrew":"\u05e8\u05d7\u05d5\u05e7"},{"english":"Bigger","hebrew":"\u05d2\u05d3\u05d5\u05dc \u05d9\u05d5\u05ea\u05e8"},{"english":"Big","hebrew":"\u05d2\u05d3\u05d5\u05dc"},{"english":"Small","hebrew":"\u05e7\u05d8\u05df"},{"english":"Long","hebrew":"\u05d0\u05e8\u05d5\u05da"},{"english":"Short","hebrew":"\u05e7\u05e6\u05e8"},{"english":"Tall","hebrew":"\u05d2\u05d1\u05d5\u05d4"},{"english":"Thin","hebrew":"\u05e8\u05d6\u05d4"},{"english":"Wide","hebrew":"\u05e8\u05d7\u05d1"},{"english":"Narrow","hebrew":"\u05e6\u05e8"},{"english":"Old","hebrew":"\u05d9\u05e9\u05df"},{"english":"New","hebrew":"\u05d7\u05d3\u05e9"},{"english":"Fast","hebrew":"\u05de\u05d4\u05d9\u05e8"},{"english":"Slow","hebrew":"\u05d0\u05d9\u05d8\u05d9"},{"english":"Expensive","hebrew":"\u05d9\u05e7\u05e8"},{"english":"Cheap","hebrew":"\u05d6\u05d5\u05dc"}]},{"name":"Technology","wordPairs":[{"english":"Laser","hebrew":"\u05dc\u05d9\u05d9\u05d6\u05e8"},{"english":"Computer","hebrew":"\u05de\u05d7\u05e9\u05d1"},{"english":"Phone","hebrew":"\u05d8\u05dc\u05e4\u05d5\u05df"},{"english":"Tablet","hebrew":"\u05d8\u05d0\u05d1\u05dc\u05d8"},{"english":"Camera","hebrew":"\u05de\u05e6\u05dc\u05de\u05d4"},{"english":"Television","hebrew":"\u05d8\u05dc\u05d5\u05d5\u05d9\u05d6\u05d9\u05d4"},{"english":"Radio","hebrew":"\u05e8\u05d3\u05d9\u05d5"},{"english":"Internet","hebrew":"\u05d0\u05d9\u05e0\u05d8\u05e8\u05e0\u05d8"},{"english":"Email","hebrew":"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc"},{"english":"Website","hebrew":"\u05d0\u05ea\u05e8 \u05d0\u05d9\u05e0\u05d8\u05e8\u05e0\u05d8"},{"english":"Robot","hebrew":"\u05e8\u05d5\u05d1\u05d5\u05d8"}]},{"name":"Roles and People","wordPairs":[{"english":"Leader","hebrew":"\u05de\u05d5\u05d1\u05d9\u05dc"},{"english":"Player","hebrew":"\u05e9\u05d7\u05e7\u05df"},{"english":"Singer","hebrew":"\u05d6\u05de\u05e8"},{"english":"Teacher","hebrew":"\u05de\u05d5\u05e8\u05d4"},{"english":"Student","hebrew":"\u05ea\u05dc\u05de\u05d9\u05d3"},{"english":"Doctor","hebrew":"\u05e8\u05d5\u05e4\u05d0"},{"english":"Nurse","hebrew":"\u05d0\u05d7\u05d5\u05ea"},{"english":"Chef","hebrew":"\u05e9\u05e3"},{"english":"Artist","hebrew":"\u05d0\u05de\u05df"},{"english":"Writer","hebrew":"\u05e1\u05d5\u05e4\u05e8"},{"english":"Driver","hebrew":"\u05e0\u05d4\u05d2"}]},{"name":"Nature and Environment","wordPairs":[{"english":"Air","hebrew":"\u05d0\u05d5\u05d5\u05d9\u05e8"},{"english":"Tree","hebrew":"\u05e2\u05e5"},{"english":"Flower","hebrew":"\u05e4\u05e8\u05d7"},{"english":"Grass","hebrew":"\u05d3\u05e9\u05d0"},{"english":"Mountain","hebrew":"\u05d4\u05e8"},{"english":"River","hebrew":"\u05e0\u05d4\u05e8"},{"english":"Ocean","hebrew":"\u05d0\u05d5\u05e7\u05d9\u05d9\u05e0\u05d5\u05e1"},{"english":"Forest","hebrew":"\u05d9\u05e2\u05e8"},{"english":"Desert","hebrew":"\u05de\u05d3\u05d1\u05e8"},{"english":"Lake","hebrew":"\u05d0\u05d2\u05dd"},{"english":"Beach","hebrew":"\u05d7\u05d5\u05e3"}]},{"name":"Money","wordPairs":[{"english":"Penny","hebrew":"\u05e4\u05e0\u05d9"},{"english":"Dollar","hebrew":"\u05d3\u05d5\u05dc\u05e8"},{"english":"Coin","hebrew":"\u05de\u05d8\u05d1\u05e2"},{"english":"Bill","hebrew":"\u05e9\u05d8\u05e8"},{"english":"Bank","hebrew":"\u05d1\u05e0\u05e7"},{"english":"Wallet","hebrew":"\u05d0\u05e8\u05e0\u05e7"},{"english":"Price","hebrew":"\u05de\u05d7\u05d9\u05e8"},{"english":"Cost","hebrew":"\u05e2\u05dc\u05d5\u05ea"},{"english":"Buy","hebrew":"\u05dc\u05e7\u05e0\u05d5\u05ea"},{"english":"Sell","hebrew":"\u05dc\u05de\u05db\u05d5\u05e8"},{"english":"Pay","hebrew":"\u05dc\u05e9\u05dc\u05dd"}]},{"name":"Clothing and Accessories","wordPairs":[{"english":"Cape","hebrew":"\u05d2\u05dc\u05d9\u05de\u05d4"},{"english":"Belt","hebrew":"\u05d7\u05d2\u05d5\u05e8\u05d4"},{"english":"Scarf","hebrew":"\u05e6\u05e2\u05d9\u05e3"},{"english":"Clothes","hebrew":"\u05d1\u05d2\u05d3\u05d9\u05dd"},{"english":"Shirt","hebrew":"\u05d7\u05d5\u05dc\u05e6\u05d4"},{"english":"Pants","hebrew":"\u05de\u05db\u05e0\u05e1\u05d9\u05d9\u05dd"},{"english":"Dress","hebrew":"\u05e9\u05de\u05dc\u05d4"},{"english":"Shoes","hebrew":"\u05e0\u05e2\u05dc\u05d9\u05d9\u05dd"},{"english":"Hat","hebrew":"\u05db\u05d5\u05d1\u05e2"},{"english":"Socks","hebrew":"\u05d2\u05e8\u05d1\u05d9\u05d9\u05dd"},{"english":"Jacket","hebrew":"\u05de\u05e2\u05d9\u05dc"}]},{"name":"Weather","wordPairs":[{"english":"Windy","hebrew":"\u05e1\u05d5\u05e2\u05e8"},{"english":"Weather","hebrew":"\u05de\u05d6\u05d2 \u05d0\u05d5\u05d5\u05d9\u05e8"},{"english":"Cloudy","hebrew":"\u05de\u05e2\u05d5\u05e0\u05df"},{"english":"Rainy","hebrew":"\u05d2\u05e9\u05d5\u05dd"},{"english":"Warm","hebrew":"\u05d7\u05dd"}]},{"name":"Conjunctions and Connectors","wordPairs":[{"english":"But","hebrew":"\u05d0\u05d1\u05dc"},{"english":"And","hebrew":"\u05d5\u05d2\u05dd"},{"english":"Or","hebrew":"\u05d0\u05d5"},{"english":"So","hebrew":"\u05d0\u05d6"},{"english":"Because","hebrew":"\u05db\u05d9"},{"english":"If","hebrew":"\u05d0\u05dd"},{"english":"When","hebrew":"\u05db\u05d0\u05e9\u05e8"},{"english":"Where","hebrew":"\u05d0\u05d9\u05e4\u05d4"},{"english":"Why","hebrew":"\u05dc\u05de\u05d4"},{"english":"How","hebrew":"\u05d0\u05d9\u05da"},{"english":"Then","hebrew":"\u05d0\u05d6"}]}]}'),Jt=Ut.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`,en=(Ut.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`,Ut.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    margin-bottom: 0.6rem;
  }
`),tn=Ut.h3`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
    gap: 0.3rem;
  }
`,nn=Ut.button`
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
`,rn=Ut.button`
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
    padding: 0.6rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: ${e=>e.$showAnswer?"inherit":"#f5f5f5"};
  }
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
`,an=Ut.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${e=>e.$isCorrect?"#E8F5E9":"#FFEBEE"};
  color: ${e=>e.$isCorrect?"#2E7D32":"#C62828"};
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    padding: 0.6rem;
    font-size: 0.75rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 0.4rem;
    padding: 0.5rem;
    font-size: 0.7rem;
  }
`,on=Ut.button`
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
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.85rem;
    margin-top: 0.4rem;
  }
`,ln=Ut.div`
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
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`,sn=Ut.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`,un=Ut.p`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.6rem;
  }
`,cn=Ut.p`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`,dn=Ut.button`
  padding: 0.8rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: #1a252f;
    transform: translateY(-2px);
  }
`,fn=Ut.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
`,hn=Ut.div`
  margin: 1rem 0 1.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    margin: 0.6rem 0 0.8rem;
  }
  
  @media (max-width: 480px) {
    margin: 0.4rem 0 0.6rem;
  }
`,pn=Ut.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    height: 6px;
  }
`,mn=Ut.div`
  width: ${e=>e.$progress}%;
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s ease;
`,gn=Ut.div`
  text-align: right;
  color: #666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,bn=(Ut.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  overflow: hidden;
`,Ut.div`
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
`),vn=Ut.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  margin-top: 2rem;
`,yn=Ut.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,wn=Ut.p`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,xn=Ut.button`
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
`,Sn=()=>{const[t,n]=(0,e.useState)(0),[r,i]=(0,e.useState)(null),[a,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(0),[u,c]=(0,e.useState)(!1),[d,f]=(0,e.useState)(!1),[h,p]=(0,e.useState)(!1),[m,g]=(0,e.useState)({width:0,height:0}),b=(0,e.useRef)(),v=[{particleCount:200,spread:70,origin:{y:.6},startVelocity:55,decay:.9,gravity:1,drift:0,ticks:200,colors:["#ff0000","#ffd700","#ff4500"]},{particleCount:250,spread:60,origin:{y:.6},startVelocity:60,decay:.92,gravity:1.1,drift:.1,ticks:200,colors:["#0000ff","#87ceeb","#ffffff"]},{particleCount:300,spread:90,origin:{y:.6},startVelocity:65,decay:.91,gravity:1.2,drift:.2,ticks:200,colors:["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"]},{particleCount:180,spread:80,origin:{y:.6},startVelocity:50,decay:.93,gravity:.9,drift:.15,ticks:200,colors:["#800080","#ff69b4","#ff1493"]},{particleCount:220,spread:75,origin:{y:.6},startVelocity:58,decay:.89,gravity:1.05,drift:.1,ticks:200,colors:["#008000","#ffd700","#90ee90"]}],y=[{particleCount:300,spread:70,origin:{y:.6},startVelocity:65,decay:.92,gravity:1.1,drift:.1,ticks:200,colors:["#FFD700","#FFA500","#FFE5B4"]},{particleCount:400,spread:90,origin:{y:.6},startVelocity:70,decay:.91,gravity:1.2,drift:.2,ticks:200,colors:["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF"]},{particleCount:350,spread:80,origin:{y:.6},startVelocity:60,decay:.93,gravity:1.05,drift:.15,ticks:200,colors:["#FFFFFF","#FFD700","#FFA500"]}];(0,e.useEffect)((()=>{const e=()=>{g({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const w=e.useMemo((()=>[...Zt.L.filter((e=>"Sentences"!==e.name)).flatMap((e=>e.wordPairs.map((e=>({question:`What is the Hebrew translation for "${e.english}"?`,correctAnswer:e.hebrew,englishWord:e.english})))))].sort((()=>Math.random()-.5)).slice(0,30).map((e=>{const t=[e.correctAnswer,...S(Zt.L,e.correctAnswer,3)].sort((()=>Math.random()-.5));return{...e,options:t}}))),[]),x=w[t];function S(e,t,n){const r=e.filter((e=>"Sentences"!==e.name)).flatMap((e=>e.wordPairs.map((e=>e.hebrew)))).filter(((e,n,r)=>e!==t&&r.indexOf(e)===n));return[...r].sort((()=>Math.random()-.5)).slice(0,Math.min(n,r.length))}const k=e=>{let{confetti:t}=e;b.current=t},E=()=>{n(0),i(null),o(!1),s(0),c(!1),f(!1),p(!1)},C=()=>{p(!1)},_=t/w.length*100;if(u){const e=Math.round(l/w.length*100),t=e>=90,n=100===e;return(0,Vt.jsxs)(Jt,{children:[(0,Vt.jsx)(Xt(),{onInit:k}),(0,Vt.jsxs)(ln,{children:[(0,Vt.jsx)(sn,{children:"Exam Complete!"}),(0,Vt.jsxs)(un,{children:["You got ",l," out of ",w.length," questions correct"]}),(0,Vt.jsxs)(cn,{children:[e,"%"]}),n&&(0,Vt.jsx)(un,{style:{color:"#FFD700",fontWeight:"bold",fontSize:"1.4rem"},children:"Perfect Score! \ud83c\udf1f"}),t&&!n&&(0,Vt.jsx)(un,{style:{color:"#27ae60",fontWeight:"bold"},children:"Excellent! \ud83c\udf89"}),(0,Vt.jsx)(dn,{onClick:E,children:"Take Exam Again"})]}),h&&(0,Vt.jsx)(bn,{children:(0,Vt.jsxs)(vn,{children:[(0,Vt.jsx)(yn,{children:"Keep Practicing!"}),(0,Vt.jsx)(wn,{children:"Your score is below 90%. Consider reviewing the words in the Words tab before trying the exam again."}),(0,Vt.jsx)(xn,{onClick:C,children:"Close"})]})})]})}return(0,Vt.jsxs)(Jt,{role:"main","aria-labelledby":"exam-title",children:[(0,Vt.jsx)(fn,{id:"exam-title",children:"Words Practice"}),(0,Vt.jsxs)(hn,{role:"progressbar","aria-valuenow":t,"aria-valuemax":w.length,"aria-label":"Quiz progress",children:[(0,Vt.jsx)(pn,{$progress:_,children:(0,Vt.jsx)(mn,{$progress:_})}),(0,Vt.jsxs)(gn,{"aria-live":"polite",children:["Question ",t," of ",w.length]})]}),(0,Vt.jsxs)(en,{role:"group","aria-labelledby":"current-question",children:[(0,Vt.jsxs)(tn,{id:"current-question",children:[x.question,(0,Vt.jsx)(nn,{onClick:()=>(e=>{const t=new SpeechSynthesisUtterance(e);t.lang="en-US",window.speechSynthesis.speak(t)})(x.englishWord),"aria-label":`Pronounce ${x.englishWord}`,title:"Click to hear pronunciation",children:"\ud83d\udd0a"})]}),x.options.map(((e,l)=>{const u=r===e,c=e===x.correctAnswer;return(0,Vt.jsx)(rn,{$isSelected:u,$isCorrect:c,$showAnswer:a,onClick:()=>{return r=e,void(a||(i(r),o(!0),r===x.correctAnswer&&(s((e=>e+1)),t<w.length-1&&setTimeout((()=>{i(null),o(!1),n((e=>e+1))}),2e3))));var r},"aria-label":`Option ${l+1}: ${e}`,"aria-pressed":u,role:"button",children:e},l)})),a&&(0,Vt.jsx)(an,{$isCorrect:r===x.correctAnswer,role:"alert","aria-live":"assertive",children:r===x.correctAnswer?"Correct! Well done!":`Incorrect. The correct answer is: ${x.correctAnswer}`})]}),a&&(r!==x.correctAnswer||t===w.length-1)&&(0,Vt.jsx)(on,{onClick:()=>{i(null),o(!1),t===w.length-1?(c(!0),(()=>{if(b.current){const e=Math.round(l/w.length*100);if(100===e)y.forEach(((e,t)=>{setTimeout((()=>{var t;null===(t=b.current)||void 0===t||t.call(b,e)}),500*t)}));else if(e>=90){const e=[v[Math.floor(Math.random()*v.length)],v[Math.floor(Math.random()*v.length)],v[Math.floor(Math.random()*v.length)]];b.current(e[0]),setTimeout((()=>{var t;null===(t=b.current)||void 0===t||t.call(b,e[1])}),300),setTimeout((()=>{var t;null===(t=b.current)||void 0===t||t.call(b,e[2])}),600)}}})()):n((e=>e+1))},children:t===w.length-1?"Finish Quiz":"Next Question"})]})},kn=Ut.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,En=Ut.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,Cn=Ut.div`
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
`,_n=(Ut.div`
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
`,Ut.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Ut.div`
  width: 100%;
  max-width: 400px;
  margin-top: 1rem;
`,Ut.button`
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
`,Ut.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${e=>e.$isCorrect?"#e8f5e9":"#ffebee"};
  color: ${e=>e.$isCorrect?"#27ae60":"#e74c3c"};
  text-align: center;
  font-weight: 500;
`,Ut.button`
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
`,Ut.div`
  margin-bottom: 2rem;
`,Ut.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,Ut.div`
  width: ${e=>e.$progress}%;
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s ease;
`,Ut.div`
  text-align: center;
  color: #2c3e50;
  font-size: 0.9rem;
`,Ut.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`,Ut.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`,Ut.p`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,Ut.div`
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
`,Ut.button`
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
`,()=>(0,Vt.jsxs)(kn,{style:{cursor:"default"},children:[(0,Vt.jsx)(En,{children:"Word Practice in Pictures"}),(0,Vt.jsx)(Cn,{children:(0,Vt.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#666",fontSize:"1.2rem",cursor:"default"},children:"This feature is temporarily unavailable. Please check back later."})})]})),Pn=Ut.div`
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`,zn=Ut.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`,Tn=Ut.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    border-radius: 10px;
  }
`,jn=Ut.h3`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
    gap: 0.3rem;
  }
`,Fn=Ut.button`
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
`,Nn=Ut.button`
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
    padding: 0.6rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    min-height: 42px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
    min-height: 40px;
  }

  &:hover {
    background-color: ${e=>e.$showAnswer?"inherit":"#f5f5f5"};
  }
  
  &:active {
    transform: scale(0.98);
  }
`,On=Ut.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${e=>e.$isCorrect?"#E8F5E9":"#FFEBEE"};
  color: ${e=>e.$isCorrect?"#2E7D32":"#C62828"};
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    padding: 0.6rem;
    font-size: 0.75rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 0.4rem;
    padding: 0.5rem;
    font-size: 0.7rem;
  }
`,Mn=Ut.button`
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
    padding: 0.6rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
    min-height: 42px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.85rem;
    margin-top: 0.4rem;
    min-height: 40px;
  }
`,Rn=Ut.div`
  margin: 1rem 0 1.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    margin: 0.6rem 0 0.8rem;
  }
  
  @media (max-width: 480px) {
    margin: 0.4rem 0 0.6rem;
  }
`,In=Ut.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    height: 6px;
  }
`,Ln=Ut.div`
  width: ${e=>e.$progress}%;
  height: 100%;
  background-color: #2c3e50;
  transition: width 0.3s ease;
`,Dn=Ut.div`
  text-align: right;
  color: #666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,An=Ut.div`
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
`,$n=Ut.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,Wn=Ut.p`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Hn=Ut.p`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,Bn=Ut.button`
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
`,Un=Ut.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`,Vn=Ut.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`,Qn=Ut.p`
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
    font-size: 0.85rem;
  }
`,Kn=Ut.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 1.2rem;
  }
`,Yn=Ut.button`
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
    padding: 0.7rem 1rem;
    min-height: 50px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    min-height: 45px;
    font-size: 0.8rem;
  }
`,Gn=Ut.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,qn=Ut.div`
  font-size: 0.9rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,Xn=Ut.button`
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
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    min-height: 45px;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    min-height: 42px;
  }
`,Zn=()=>{const[t,n]=(0,e.useState)(0),[r,i]=(0,e.useState)(null),[a,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(0),[u,c]=(0,e.useState)(!1),[d,f]=(0,e.useState)(!0),[h,p]=(0,e.useState)(25),m=(0,e.useRef)(),g=e.useMemo((()=>[...Zt.L.filter((e=>"Sentences"!==e.name)).flatMap((e=>e.wordPairs.map((t=>({question:`What is the Hebrew translation for "${t.english}"?`,correctAnswer:t.hebrew,englishWord:t.english,category:e.name})))))].sort((()=>Math.random()-.5)).slice(0,h).map((e=>{const t=[e.correctAnswer,...v(Zt.L,e.correctAnswer,3)].sort((()=>Math.random()-.5));return{...e,options:t}}))),[]),b=g[t];function v(e,t,n){const r=e.flatMap((e=>e.wordPairs.map((e=>e.hebrew)))).filter(((e,n,r)=>e!==t&&r.indexOf(e)===n));return[...r].sort((()=>Math.random()-.5)).slice(0,Math.min(n,r.length))}const y=e=>{let{confetti:t}=e;console.log("Confetti initialized!"),m.current=t},w=()=>{n(0),i(null),o(!1),s(0),c(!1),f(!0)},x=()=>{f(!1),n(0),i(null),o(!1),s(0),c(!1)},S=t/g.length*100;if(u){const e=Math.round(l/g.length*100),t=e>=80,n=100===e;return(0,Vt.jsxs)(Pn,{children:[(0,Vt.jsx)(Xt(),{onInit:y}),(0,Vt.jsxs)(An,{children:[(0,Vt.jsx)($n,{children:"Final Exam Complete! \ud83c\udf93"}),(0,Vt.jsxs)(Wn,{children:["You got ",l," out of ",g.length," questions correct"]}),(0,Vt.jsxs)(Hn,{children:[e,"%"]}),n&&(0,Vt.jsx)(Wn,{style:{color:"#FFD700",fontWeight:"bold",fontSize:"1.4rem"},children:"Perfect Score! \ud83c\udf1f Outstanding!"}),t&&!n&&(0,Vt.jsx)(Wn,{style:{color:"#27ae60",fontWeight:"bold"},children:"Excellent Work! \ud83c\udf89"}),!t&&(0,Vt.jsx)(Wn,{style:{color:"#e67e22",fontWeight:"bold"},children:"Good effort! Keep practicing! \ud83d\udcda"}),(0,Vt.jsx)(Bn,{onClick:w,children:"Take Final Exam Again"})]})]})}return d?(0,Vt.jsxs)(Pn,{children:[(0,Vt.jsx)(zn,{children:"Final Exam Setup"}),(0,Vt.jsxs)(Un,{children:[(0,Vt.jsx)(Vn,{children:"Choose Exam Length"}),(0,Vt.jsx)(Qn,{children:"Select how many questions you want in your final exam. You can always retake the exam with a different length."}),(0,Vt.jsxs)(Kn,{children:[(0,Vt.jsxs)(Yn,{isSelected:25===h,onClick:()=>p(25),children:[(0,Vt.jsx)(Gn,{children:"\u26a1 Mini Exam (25 Questions)"}),(0,Vt.jsx)(qn,{children:"~8-12 minutes \u2022 Perfect for quick review"})]}),(0,Vt.jsxs)(Yn,{isSelected:50===h,onClick:()=>p(50),children:[(0,Vt.jsx)(Gn,{children:"\ud83d\udcdd Quick Exam (50 Questions)"}),(0,Vt.jsx)(qn,{children:"~15-20 minutes \u2022 Good for practice and review"})]}),(0,Vt.jsxs)(Yn,{isSelected:221===h,onClick:()=>p(221),children:[(0,Vt.jsx)(Gn,{children:"\ud83c\udf93 Complete Exam (221 Questions)"}),(0,Vt.jsx)(qn,{children:"~65-80 minutes \u2022 Tests all vocabulary words"})]})]}),(0,Vt.jsxs)(Xn,{onClick:x,children:["Start ",25===h?"Mini":50===h?"Quick":"Complete"," Final Exam"]})]})]}):(0,Vt.jsxs)(Pn,{children:[(0,Vt.jsx)(Xt(),{onInit:y}),(0,Vt.jsxs)(zn,{children:["Final Exam - ",25===h?"Mini":50===h?"Quick":"Complete"," (",h," Questions)"]}),(0,Vt.jsxs)(Rn,{children:[(0,Vt.jsx)(In,{$progress:S,children:(0,Vt.jsx)(Ln,{$progress:S})}),(0,Vt.jsxs)(Dn,{children:[t," / ",g.length]})]}),(0,Vt.jsxs)(Tn,{children:[(0,Vt.jsxs)(jn,{children:[b.question,(0,Vt.jsx)(Fn,{onClick:()=>(e=>{const t=new SpeechSynthesisUtterance(e);t.lang="en-US",window.speechSynthesis.speak(t)})(b.englishWord),children:"\ud83d\udd0a"})]}),b.options.map(((e,l)=>{const u=r===e,c=e===b.correctAnswer;return(0,Vt.jsx)(Nn,{$isSelected:u,$isCorrect:c,$showAnswer:a,onClick:()=>{return r=e,void(a||(i(r),o(!0),r===b.correctAnswer&&(s((e=>e+1)),t<g.length-1&&setTimeout((()=>{i(null),o(!1),n((e=>e+1))}),2e3))));var r},children:e},l)})),a&&(0,Vt.jsx)(On,{$isCorrect:r===b.correctAnswer,children:r===b.correctAnswer?"Correct! Well done!":`Incorrect. The correct answer is: ${b.correctAnswer}`})]}),a&&(r!==b.correctAnswer||t===g.length-1)&&(0,Vt.jsx)(Mn,{onClick:()=>{i(null),o(!1),t===g.length-1?(c(!0),(()=>{if(m.current){const e=Math.round(l/g.length*100);console.log("Confetti triggered! Score:",l,"Total:",g.length,"Percentage:",e),100===e?[{particleCount:300,spread:70,origin:{y:.6},startVelocity:65,decay:.92,gravity:1.1,drift:.1,ticks:200,colors:["#FFD700","#FFA500","#FFE5B4"]},{particleCount:400,spread:90,origin:{y:.6},startVelocity:70,decay:.91,gravity:1.2,drift:.2,ticks:200,colors:["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF"]},{particleCount:350,spread:80,origin:{y:.6},startVelocity:60,decay:.93,gravity:1.05,drift:.15,ticks:200,colors:["#FFFFFF","#FFD700","#FFA500"]}].forEach(((e,t)=>{setTimeout((()=>{var t;null===(t=m.current)||void 0===t||t.call(m,e)}),500*t)})):e>=90&&(console.log("90%+ celebration triggered!"),[{particleCount:200,spread:70,origin:{y:.6},startVelocity:55,decay:.9,gravity:1,drift:0,ticks:200,colors:["#ff0000","#ffd700","#ff4500"]},{particleCount:250,spread:60,origin:{y:.6},startVelocity:60,decay:.92,gravity:1.1,drift:.1,ticks:200,colors:["#0000ff","#87ceeb","#ffffff"]},{particleCount:300,spread:90,origin:{y:.6},startVelocity:65,decay:.91,gravity:1.2,drift:.2,ticks:200,colors:["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"]},{particleCount:180,spread:80,origin:{y:.6},startVelocity:50,decay:.93,gravity:.9,drift:.15,ticks:200,colors:["#800080","#ff69b4","#ff1493"]},{particleCount:220,spread:75,origin:{y:.6},startVelocity:58,decay:.89,gravity:1.05,drift:.1,ticks:200,colors:["#008000","#ffd700","#90ee90"]}].forEach(((e,t)=>{setTimeout((()=>{var t;null===(t=m.current)||void 0===t||t.call(m,e)}),300*t)})))}})()):n((e=>e+1))},children:t===g.length-1?"Finish Final Exam":"Next Question"})]})},Jn=Ut.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`,er=Ut.h1`
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`,tr=Ut.section`
  margin-bottom: 2rem;
`,nr=Ut.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
`,rr=Ut.h3`
  color: #2c3e50;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
`,ir=Ut.p`
  color: #555;
  margin-bottom: 1rem;
`,ar=Ut.ul`
  color: #555;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`,or=Ut.li`
  margin-bottom: 0.5rem;
`,lr=Ut.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  margin-top: 1rem;
`,sr=Ut.a`
  color: #3498db;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
  }
`,ur=()=>(0,Vt.jsxs)(Jn,{children:[(0,Vt.jsx)(er,{children:"Accessibility Statement"}),(0,Vt.jsx)(tr,{children:(0,Vt.jsx)(ir,{children:"We are committed to ensuring that our English-Hebrew Learning Hub is accessible to all users, including those with disabilities. This statement outlines our accessibility features and ongoing commitment to inclusive design."})}),(0,Vt.jsxs)(tr,{children:[(0,Vt.jsx)(nr,{children:"Accessibility Standards"}),(0,Vt.jsx)(ir,{children:"This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and Israeli accessibility regulations. We continuously work to improve accessibility and ensure equal access to educational content for all learners."})]}),(0,Vt.jsxs)(tr,{children:[(0,Vt.jsx)(nr,{children:"Accessibility Features"}),(0,Vt.jsx)(rr,{children:"Keyboard Navigation"}),(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(or,{children:"All interactive elements can be accessed using keyboard navigation (Tab, Enter, Space, Arrow keys)"}),(0,Vt.jsx)(or,{children:"Clear focus indicators are provided for all interactive elements"}),(0,Vt.jsx)(or,{children:"Logical tab order throughout the application"}),(0,Vt.jsx)(or,{children:"No keyboard traps that prevent users from navigating away"})]}),(0,Vt.jsx)(rr,{children:"Screen Reader Support"}),(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(or,{children:"Proper semantic HTML structure with headings, navigation, and main content areas"}),(0,Vt.jsx)(or,{children:"ARIA labels and roles for enhanced screen reader compatibility"}),(0,Vt.jsx)(or,{children:"Alternative text for all meaningful images and icons"}),(0,Vt.jsx)(or,{children:"Live regions for dynamic content updates (quiz feedback, progress)"})]}),(0,Vt.jsx)(rr,{children:"Visual Design"}),(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(or,{children:"High contrast color scheme meeting WCAG AA standards (4.5:1 for normal text, 3:1 for large text)"}),(0,Vt.jsx)(or,{children:"Text remains readable when zoomed to 200%"}),(0,Vt.jsx)(or,{children:"Responsive design that works on various screen sizes and devices"}),(0,Vt.jsx)(or,{children:"Clear visual hierarchy with proper heading structure"})]}),(0,Vt.jsx)(rr,{children:"Interactive Elements"}),(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(or,{children:"Buttons and links have descriptive labels"}),(0,Vt.jsx)(or,{children:"Form elements are properly labeled"}),(0,Vt.jsx)(or,{children:"Interactive elements have minimum touch target size of 44x44 pixels"}),(0,Vt.jsx)(or,{children:"Audio pronunciation features with clear controls"})]})]}),(0,Vt.jsxs)(tr,{children:[(0,Vt.jsx)(nr,{children:"Assistive Technology Compatibility"}),(0,Vt.jsx)(ir,{children:"This website has been tested with:"}),(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(or,{children:"Screen readers (NVDA, JAWS, VoiceOver)"}),(0,Vt.jsx)(or,{children:"Keyboard-only navigation"}),(0,Vt.jsx)(or,{children:"Voice control software"}),(0,Vt.jsx)(or,{children:"Browser zoom up to 200%"})]})]}),(0,Vt.jsxs)(tr,{children:[(0,Vt.jsx)(nr,{children:"Known Limitations"}),(0,Vt.jsx)(ir,{children:"We are continuously working to improve accessibility. Currently known limitations include:"}),(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(or,{children:"Some decorative animations may not be suitable for users with vestibular disorders"}),(0,Vt.jsx)(or,{children:"Audio content does not yet include transcripts (planned for future updates)"})]})]}),(0,Vt.jsxs)(tr,{children:[(0,Vt.jsx)(nr,{children:"Feedback and Support"}),(0,Vt.jsx)(ir,{children:"We welcome feedback about the accessibility of our English-Hebrew Learning Hub. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:"}),(0,Vt.jsxs)(lr,{children:[(0,Vt.jsx)(rr,{children:"Contact Information"}),(0,Vt.jsxs)(ir,{children:[(0,Vt.jsx)("strong",{children:"Email:"})," ",(0,Vt.jsx)(sr,{href:"mailto:accessibility@english-hebrew-hub.com",children:"accessibility@english-hebrew-hub.com"}),(0,Vt.jsx)("br",{}),(0,Vt.jsx)("strong",{children:"Subject Line:"})," Accessibility Feedback - English-Hebrew Learning Hub",(0,Vt.jsx)("br",{}),(0,Vt.jsx)("strong",{children:"Response Time:"})," We aim to respond to accessibility inquiries within 2 business days."]}),(0,Vt.jsx)(ir,{children:"When reporting accessibility issues, please include:"}),(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(or,{children:"Description of the accessibility barrier"}),(0,Vt.jsx)(or,{children:"The page or feature where you encountered the issue"}),(0,Vt.jsx)(or,{children:"The assistive technology you were using (if applicable)"}),(0,Vt.jsx)(or,{children:"Your browser and operating system"})]})]})]}),(0,Vt.jsxs)(tr,{children:[(0,Vt.jsx)(nr,{children:"Ongoing Commitment"}),(0,Vt.jsx)(ir,{children:"Accessibility is an ongoing effort. We regularly:"}),(0,Vt.jsxs)(ar,{children:[(0,Vt.jsx)(or,{children:"Conduct accessibility audits and testing"}),(0,Vt.jsx)(or,{children:"Update our content and features based on user feedback"}),(0,Vt.jsx)(or,{children:"Train our development team on accessibility best practices"}),(0,Vt.jsx)(or,{children:"Stay current with accessibility standards and guidelines"})]})]}),(0,Vt.jsxs)(tr,{children:[(0,Vt.jsx)(nr,{children:"Legal Compliance"}),(0,Vt.jsx)(ir,{children:"This accessibility statement is in accordance with Israeli accessibility regulations and international standards. We are committed to providing equal access to educational resources for all users, regardless of ability."}),(0,Vt.jsxs)(ir,{children:[(0,Vt.jsx)("strong",{children:"Last Updated:"})," ",(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]})]}),cr=Ut.main`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem;
  }
`,dr=Ut.h1`
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
`,fr=Ut.div`
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
`,hr=Ut.p`
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
`,pr=(Ut.div`
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
`,Ut.button`
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
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
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
`),mr=(Ut(pr)`
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
`,Ut.div`
  margin-bottom: 3rem;
`),gr=Ut.h2`
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
`,br=Ut.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`,vr=Ut.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`,yr=(Ut.div`
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
`,Ut.button`
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
`,Ut.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Ut.button`
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
`),wr=Ut.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,xr=Ut.button`
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
`,Sr=Ut.button`
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
`,kr=Ut.nav`
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
`,Er=Ut.button`
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
  
  &:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
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
`,Cr=Ut.h3`
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
`,_r=Ut.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`,Pr=Ut(Er)`
  opacity: 0.5;
  cursor: not-allowed;
  
  &:hover {
    transform: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: none;
  }
`,zr=Ut.div`
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
`,Tr=Ut.button`
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
`,jr=()=>{const[t,n]=(0,e.useState)("main"),[r,i]=(0,e.useState)(0),[a,o]=(0,e.useState)(!1),l=[...Zt.L].sort(((e,t)=>e.name.localeCompare(t.name))),s=Zt.L.filter((e=>"Sentences"!==e.name)).flatMap((e=>e.wordPairs.filter((e=>/(?:le|ar|ir|er)$/i.test(e.english))).map((t=>({...t,category:e.name}))))),u=["le","ar","ir","er"],c=e.useMemo((()=>s.map((e=>{const t=u.find((t=>e.english.toLowerCase().endsWith(t)));return{base:t?e.english.slice(0,-t.length):e.english,correctEnding:t,fullWord:e.english,hebrew:e.hebrew}})).sort((()=>Math.random()-.5)).slice(0,20)),[s.length]),[d,f]=e.useState(0),[h,p]=e.useState(null),[m,g]=e.useState(!1),[b,v]=e.useState(0),[y,w]=e.useState(!1),x=-1===r,S=l[r],[k,E]=(0,e.useState)(!0);return(0,Vt.jsxs)(cr,{children:[(0,Vt.jsx)("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),(0,Vt.jsxs)(br,{children:[(0,Vt.jsx)(dr,{children:"English"}),"main"!==t&&(0,Vt.jsxs)(wr,{children:[(0,Vt.jsx)(xr,{onClick:()=>{"words"===t?k?n("main"):E(!0):n("words")},children:"\u2190 Back"}),(0,Vt.jsx)(Sr,{onClick:()=>{n("main")},children:"\ud83c\udfe0 Home"})]})]}),(0,Vt.jsxs)(vr,{id:"main-content",children:["main"===t&&(0,Vt.jsxs)(kr,{role:"navigation","aria-label":"Main navigation menu",children:[(0,Vt.jsxs)(Er,{onClick:()=>n("words"),"aria-label":"Study vocabulary words by category",children:[(0,Vt.jsx)(Cr,{children:"\ud83d\udcda Words"}),(0,Vt.jsx)(_r,{children:"Study vocabulary by category"})]}),(0,Vt.jsxs)(Er,{onClick:()=>n("exam"),"aria-label":"Practice vocabulary with multiple choice questions",children:[(0,Vt.jsx)(Cr,{children:"\ud83c\udfaf Words Practice"}),(0,Vt.jsx)(_r,{children:"Practice with multiple choice questions"})]}),(0,Vt.jsxs)(Er,{onClick:()=>n("leArIrEr"),"aria-label":"Study words with le, ar, ir, er endings",children:[(0,Vt.jsx)(Cr,{children:"\ud83d\udd24 le, ar, ir, er Words"}),(0,Vt.jsx)(_r,{children:"Special focus on word endings"})]}),(0,Vt.jsxs)(Er,{onClick:()=>n("leArIrErExam"),"aria-label":"Test your knowledge of le, ar, ir, er word endings",children:[(0,Vt.jsx)(Cr,{children:"\ud83d\udcdd le, ar, ir, er Exam"}),(0,Vt.jsx)(_r,{children:"Test your knowledge of word endings"})]}),(0,Vt.jsxs)(Er,{onClick:()=>n("finalExam"),"aria-label":"Take comprehensive final exam with all vocabulary",children:[(0,Vt.jsx)(Cr,{children:"\ud83c\udf93 Final Exam"}),(0,Vt.jsx)(_r,{children:"Comprehensive test of all vocabulary"})]}),(0,Vt.jsxs)(Pr,{"aria-disabled":"true",children:[(0,Vt.jsx)(Cr,{children:"\ud83d\uddbc\ufe0f Word Practice in Pictures"}),(0,Vt.jsx)(_r,{children:"Coming soon..."})]}),(0,Vt.jsxs)(Pr,{"aria-disabled":"true",children:[(0,Vt.jsx)(Cr,{children:"\ud83d\udcd6 Story-1"}),(0,Vt.jsx)(_r,{children:"Coming soon..."})]}),(0,Vt.jsxs)(Pr,{"aria-disabled":"true",children:[(0,Vt.jsx)(Cr,{children:"\ud83d\udcd6 Story-2"}),(0,Vt.jsx)(_r,{children:"Coming soon..."})]}),(0,Vt.jsxs)(Er,{onClick:()=>n("accessibility"),"aria-label":"View accessibility statement and features",children:[(0,Vt.jsx)(Cr,{children:"\u267f Accessibility"}),(0,Vt.jsx)(_r,{children:"Learn about our accessibility features"})]})]}),"words"===t&&(0,Vt.jsx)(Vt.Fragment,{children:k?(0,Vt.jsxs)("div",{style:{width:"100%"},children:[(0,Vt.jsx)(hr,{children:"Choose a category to study vocabulary words"}),(0,Vt.jsxs)(zr,{children:[(0,Vt.jsx)(Tr,{isActive:x,onClick:()=>{i(-1),E(!1)},children:"\ud83d\udcda All Words"}),l.map(((e,t)=>(0,Vt.jsx)(Tr,{isActive:r===t,onClick:()=>{i(t),E(!1)},children:e.name},e.name)))]})]}):(0,Vt.jsxs)("div",{style:{width:"100%"},children:[(0,Vt.jsxs)(hr,{children:["Click on a card to reveal its Hebrew translation.",(0,Vt.jsx)("br",{}),"Click the speaker icon \ud83d\udd0a to hear the English pronunciation."]}),(0,Vt.jsx)("div",{style:{textAlign:"center",marginBottom:"1rem"},children:(0,Vt.jsx)(yr,{onClick:()=>o(!a),children:a?"Show English":"Show Hebrew"})}),x?l.map(((e,t)=>(0,Vt.jsxs)(mr,{children:[(0,Vt.jsx)(gr,{children:e.name}),(0,Vt.jsx)(fr,{children:e.wordPairs.map(((e,t)=>(0,Vt.jsx)(Gt,{english:e.english,hebrew:e.hebrew,forceFlipped:a},t)))})]},t))):(0,Vt.jsxs)(Vt.Fragment,{children:[(0,Vt.jsx)(gr,{children:S.name}),(0,Vt.jsx)(fr,{children:S.wordPairs.map(((e,t)=>(0,Vt.jsx)(Gt,{english:e.english,hebrew:e.hebrew,forceFlipped:a},t)))})]})]})}),"exam"===t&&(0,Vt.jsx)(Sn,{}),"picturePractice"===t&&(0,Vt.jsx)(_n,{}),"finalExam"===t&&(0,Vt.jsx)(Zn,{}),"accessibility"===t&&(0,Vt.jsx)(ur,{}),"leArIrEr"===t&&(0,Vt.jsxs)("div",{style:{width:"100%"},children:[(0,Vt.jsxs)(hr,{children:["Words ending with ",(0,Vt.jsx)("b",{children:"le"}),", ",(0,Vt.jsx)("b",{children:"ar"}),", ",(0,Vt.jsx)("b",{children:"ir"}),", or ",(0,Vt.jsx)("b",{children:"er"})," from all topics.",(0,Vt.jsx)("br",{}),"Click on a card to reveal its Hebrew translation.",(0,Vt.jsx)("br",{}),"Click the speaker icon \ud83d\udd0a to hear the English pronunciation."]}),(0,Vt.jsx)("div",{style:{textAlign:"center",marginBottom:"1rem"},children:(0,Vt.jsx)(yr,{onClick:()=>o(!a),children:a?"Show English":"Show Hebrew"})}),(0,Vt.jsx)(gr,{children:"le, ar, ir, er Words"}),(0,Vt.jsx)(fr,{children:0===s.length?(0,Vt.jsx)("div",{children:"No matching words found."}):s.map(((e,t)=>(0,Vt.jsx)(Gt,{english:e.english,hebrew:e.hebrew,forceFlipped:a},t)))})]}),"leArIrErExam"===t&&(0,Vt.jsxs)("div",{style:{width:"100%"},children:[(0,Vt.jsxs)(hr,{children:["For each question, choose the correct ending (",(0,Vt.jsx)("b",{children:"le"}),", ",(0,Vt.jsx)("b",{children:"ar"}),", ",(0,Vt.jsx)("b",{children:"ir"}),", or ",(0,Vt.jsx)("b",{children:"er"}),") to complete the English word.",(0,Vt.jsx)("br",{}),"Click the speaker icon \ud83d\udd0a to hear the full word.",(0,Vt.jsx)("br",{})]}),(0,Vt.jsx)(gr,{children:"le, ar, ir, er Words Exam"}),y?(0,Vt.jsxs)("div",{style:{textAlign:"center",margin:"2rem 0"},children:[(0,Vt.jsx)("h2",{children:"Quiz Complete!"}),(0,Vt.jsxs)("p",{children:["You got ",b," out of ",c.length," correct."]}),(0,Vt.jsx)("button",{onClick:()=>{f(0),p(null),g(!1),v(0),w(!1)},style:{padding:"0.8rem 1.5rem",borderRadius:8,background:"#2c3e50",color:"white",border:"none",fontSize:"1rem",cursor:"pointer",marginTop:"1rem"},children:"Take Exam Again"})]}):(0,Vt.jsxs)("div",{style:{maxWidth:500,margin:"0 auto",background:"white",borderRadius:15,boxShadow:"0 4px 6px rgba(0,0,0,0.1)",padding:"2rem",textAlign:"center"},children:[(0,Vt.jsxs)("h3",{style:{color:"#2c3e50",marginBottom:"1.5rem"},children:[d+1," / ",c.length]}),(0,Vt.jsxs)("div",{style:{fontSize:"1.5rem",marginBottom:"1.2rem",color:"#2c3e50"},children:[c[d].base,(0,Vt.jsx)("span",{style:{color:"#bbb",fontWeight:400},children:"___"})]}),(0,Vt.jsx)("button",{onClick:()=>{const e=new window.SpeechSynthesisUtterance(c[d].fullWord);e.lang="en-US",window.speechSynthesis.speak(e)},style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",marginBottom:"1rem"},title:"Click to hear pronunciation",children:"\ud83d\udd0a"}),(0,Vt.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"1.5rem"},children:u.map((e=>(0,Vt.jsx)("button",{onClick:()=>(e=>{m||(p(e),g(!0),e===c[d].correctEnding&&v((e=>e+1)))})(e),disabled:m,style:{padding:"0.8rem 1.5rem",borderRadius:8,background:h===e?e===c[d].correctEnding?"#2ecc71":"#e74c3c":"#f7f9fa",color:h===e?"white":"#2c3e50",border:"none",fontSize:"1.1rem",cursor:m?"default":"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:e},e)))}),m&&(0,Vt.jsx)("div",{style:{marginBottom:"1.2rem",color:h===c[d].correctEnding?"#2ecc71":"#e74c3c",fontWeight:500},children:h===c[d].correctEnding?"Correct! Well done!":`Incorrect. The correct ending is: ${c[d].correctEnding}`}),m&&(0,Vt.jsx)("button",{onClick:()=>{p(null),g(!1),d===c.length-1?w(!0):f((e=>e+1))},style:{padding:"0.8rem 1.5rem",borderRadius:8,background:"#2ecc71",color:"white",border:"none",fontSize:"1.1rem",cursor:"pointer"},children:d===c.length-1?"Finish Quiz":"Next Question"})]})]})]})]})};t.createRoot(document.getElementById("root")).render((0,Vt.jsx)(e.StrictMode,{children:(0,Vt.jsx)(jr,{})}))})()})();
//# sourceMappingURL=main.199f7e2f.js.map