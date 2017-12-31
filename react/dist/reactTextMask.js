!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.reactTextMask=t(require("react")):e.reactTextMask=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(s).default}});var f=r(11),c=n(f),p=r(9),d=n(p),h=r(5),v=n(h),y=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.onChange=function(e){n.textMaskInputElement.update(),"function"==typeof n.props.onChange&&n.props.onChange(e)},a=r,i(n,a)}return a(t,e),l(t,[{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,v.default)(u({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(){this.initTextMask()}},{key:"render",value:function(){var e=this,t=u({},this.props);return delete t.mask,delete t.guide,delete t.pipe,delete t.placeholderChar,delete t.keepCharPositions,delete t.onChange,delete t.showMask,delete t.innerRef,c.default.createElement("input",u({},t,{onChange:this.props.defaultValue?null:this.onChange,ref:function(t){e.inputElement=t,e.props.innerRef&&e.props.innerRef(t)}}))}}]),t}(c.default.Component);t.default=y,y.propTypes={mask:d.default.oneOfType([d.default.array,d.default.func,d.default.bool,d.default.shape({mask:d.default.oneOfType([d.default.array,d.default.func]),pipe:d.default.func})]).isRequired,guide:d.default.bool,value:d.default.oneOfType([d.default.string,d.default.number]),pipe:d.default.func,placeholderChar:d.default.string,keepCharPositions:d.default.bool,showMask:d.default.bool}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_"},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.guide,u=void 0===n||n,l=r.previousConformedValue,s=void 0===l?a:l,f=r.placeholderChar,c=void 0===f?i.placeholderChar:f,p=r.placeholder,d=void 0===p?(0,o.convertMaskToPlaceholder)(t,c):p,h=r.currentCaretPosition,v=r.keepCharPositions,y=u===!1&&void 0!==s,m=e.length,g=s.length,b=d.length,C=t.length,k=m-g,O=k>0,P=h+(O?-k:0),x=P+Math.abs(k);if(v===!0&&!O){for(var T=a,_=P;_<x;_++)d[_]===c&&(T+=c);e=e.slice(0,P)+T+e.slice(P,m)}for(var w=e.split(a).map(function(e,t){return{char:e,isNew:t>=P&&t<x}}),M=m-1;M>=0;M--){var j=w[M].char;if(j!==c){var S=M>=P&&g===C;j===d[S?M-k:M]&&w.splice(M,1)}}var E=a,R=!1;e:for(var V=0;V<b;V++){var N=d[V];if(N===c){if(w.length>0)for(;w.length>0;){var I=w.shift(),A=I.char,q=I.isNew;if(A===c&&y!==!0){E+=c;continue e}if(t[V].test(A)){if(v===!0&&q!==!1&&s!==a&&u!==!1&&O){for(var D=w.length,F=null,L=0;L<D;L++){var J=w[L];if(J.char!==c&&J.isNew===!1)break;if(J.char===c){F=L;break}}null!==F?(E+=A,w.splice(F,1)):V--}else E+=A;continue e}R=!0}y===!1&&(E+=d.substr(V,b));break}E+=N}if(y&&O===!1){for(var U=null,W=0;W<E.length;W++)d[W]===c&&(U=W);E=null!==U?E.substr(0,U+1):a}return{conformedValue:E,meta:{someCharsRejected:R}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(3),i=r(1),a=""},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(s),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isString=o,t.isNumber=i,t.processCaretTraps=a;var u=r(1),l=[],s="[]"},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,c=e.placeholderChar,p=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?n:d,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===l)return 0;var m=f.length,g=r.length,b=p.length,C=s.length,k=m-g,O=k>0,P=0===g,x=k>1&&!O&&!P;if(x)return l;var T=O&&(r===s||s===p),_=0,w=void 0,M=void 0;if(T)_=l-k;else{var j=s.toLowerCase(),S=f.toLowerCase(),E=S.substr(0,l).split(o),R=E.filter(function(e){return j.indexOf(e)!==-1});M=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=p.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,I=N!==V,A=void 0!==a[R.length-1]&&void 0!==p[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==p[R.length-1]&&a[R.length-1]===p[R.length-2];!O&&(I||A)&&V>0&&p.indexOf(M)>-1&&void 0!==f[l]&&(w=!0,M=f[l]);for(var q=h.map(function(e){return j[e]}),D=q.filter(function(e){return e===M}).length,F=R.filter(function(e){return e===M}).length,L=p.substr(0,p.indexOf(c)).split(o).filter(function(e,t){return e===M&&f[t]!==e}).length,J=L+F+D+(w?1:0),U=0,W=0;W<C;W++){var B=j[W];if(_=W+1,B===M&&U++,U>=J)break}}if(O){for(var H=_,Y=_;Y<=b;Y++)if(p[Y]===c&&(H=Y),p[Y]===c||y.indexOf(Y)!==-1||Y===b)return H}else if(w){for(var z=_-1;z>=0;z--)if(s[z]===M||y.indexOf(z)!==-1||0===z)return z}else for(var G=_;G>=0;G--)if(p[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,c=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,O=void 0!==k&&k,P=n.showMask,x=void 0!==P&&P;if("undefined"==typeof r&&(r=o.value),r!==t.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===g&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var T=void 0,_=void 0;if(s instanceof Array&&(T=(0,d.convertMaskToPlaceholder)(s,C)),s!==!1){var w=a(r),M=o.selectionEnd,j=t.previousConformedValue,S=t.previousPlaceholder,E=void 0;if(("undefined"==typeof s?"undefined":l(s))===v){if(_=s(w,{currentCaretPosition:M,previousConformedValue:j,placeholderChar:C}),_===!1)return;var R=(0,d.processCaretTraps)(_),V=R.maskWithoutCaretTraps,N=R.indexes;_=V,E=N,T=(0,d.convertMaskToPlaceholder)(_,C)}else _=s;var I={previousConformedValue:j,guide:c,placeholderChar:C,pipe:m,placeholder:T,currentCaretPosition:M,keepCharPositions:O},A=(0,p.default)(w,_,I),q=A.conformedValue,D=("undefined"==typeof m?"undefined":l(m))===v,F={};D&&(F=m(q,u({rawValue:w},I)),F===!1?F={value:j,rejected:!0}:(0,d.isString)(F)&&(F={value:F}));var L=D?F.value:q,J=(0,f.default)({previousConformedValue:j,previousPlaceholder:S,conformedValue:L,placeholder:T,rawValue:w,currentCaretPosition:M,placeholderChar:C,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:E}),U=L===T&&0===J,W=x?T:y,B=U?W:L;t.previousConformedValue=B,t.previousPlaceholder=T,o.value!==B&&(o.value=B,i(o,J))}}}}}function i(e,t){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(t,t,m)},0):e.setSelectionRange(t,t,m))}function a(e){if((0,d.isString)(e))return e;if((0,d.isNumber)(e))return String(e);if(void 0===e||null===e)return y;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var s=r(4),f=n(s),c=r(2),p=n(c),d=r(3),h=r(1),v="function",y="",m="none",g="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,i,a,u,l){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,l],c=0;s=new Error(t.replace(/%s/g,function(){return f[c++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports=r(8)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(t,r){t.exports=e}])});