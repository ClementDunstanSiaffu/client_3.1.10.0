System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/SpatialReference","esri/symbols/PictureMarkerSymbol","esri/geometry/coordinateFormatter","esri/geometry/support/webMercatorUtils","esri/geometry/Point","esri/rest/geometryService","esri/rest/support/ProjectParameters","jimu-core/react"],(function(e,t){var o={},n={},r={},i={},l={},a={},s={},c={},u={},d={},p={},f={},v={};return Object.defineProperty(v,"__esModule",{value:!0}),{setters:[function(e){o.React=e.React,o.ReactResizeDetector=e.ReactResizeDetector,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.i18n=e.i18n,o.jsx=e.jsx,o.lodash=e.lodash,o.moduleLoader=e.moduleLoader,o.utils=e.utils},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent},function(e){r.Button=e.Button,r.Card=e.Card,r.CardBody=e.CardBody,r.CardFooter=e.CardFooter,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.Tooltip=e.Tooltip,r.WidgetPlaceholder=e.WidgetPlaceholder,r.defaultMessages=e.defaultMessages,r.hooks=e.hooks},function(e){i.default=e.default},function(e){l.default=e.default},function(e){a.default=e.default},function(e){s.default=e.default},function(e){c.default=e.default},function(e){u.default=e.default},function(e){d.default=e.default},function(e){p.default=e.default},function(e){f.default=e.default},function(e){Object.keys(e).forEach((function(t){v[t]=e[t]}))}],execute:function(){e((()=>{var e={20640:(e,t,o)=>{"use strict";var n=o(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,i,l,a,s,c,u=!1;t||(t={}),o=t.debug||!1;try{if(l=n(),a=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(c),a.selectNodeContents(c),s.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(n){o&&console.error("unable to copy using execCommand: ",n),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(n){o&&console.error("unable to copy using clipboardData: ",n),o&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(a):s.removeAllRanges()),c&&document.body.removeChild(c),l()}return u}},74300:(e,t,o)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(o(51315)),i=a(o(20640)),l=["text","onCopy","options","children"];function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){g(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(y,e);var t,o,n,a,s=(n=y,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(a){var o=m(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return f(this,e)});function y(){var e;u(this,y);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return g(v(e=s.call.apply(s,[this].concat(o))),"onClick",(function(t){var o=e.props,n=o.text,l=o.onCopy,a=o.children,s=o.options,c=r.default.Children.only(a),u=(0,i.default)(n,s);l&&l(n,u),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(t)})),e}return t=y,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,l),n=r.default.Children.only(t);return r.default.cloneElement(n,c(c({},o),{},{onClick:this.onClick}))}}])&&d(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),y}(r.default.PureComponent);t.CopyToClipboard=y,g(y,"defaultProps",{onCopy:void 0,options:void 0})},74855:(e,t,o)=>{"use strict";var n=o(74300).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},57309:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4.369 7.692 1.6 5.385 4.369 6 4.88 7.292 3.33v6.669l-5.388 3.233.492-2.116-.779-.182-.817 3.51 3.6.171.038-.799-1.81-.086 5.07-3.042 5.442 3.06-1.884.173.073.796 3.589-.329-.971-3.47-.77.215.57 2.039L8.092 9.99V3.33l1.293 1.55L10 4.37Z" fill="#C5C5C5"></path></svg>'},18371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},59788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},40498:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2v10H3V4.414L5.414 2H11ZM2 4.414a1 1 0 0 1 .293-.707l2.414-2.414A1 1 0 0 1 5.414 1H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.414ZM13.048 3v10.56c0 .265-.214.48-.477.48H4V15h8.571c.79 0 1.429-.645 1.429-1.44V3h-.952Z" fill="#000"></path></svg>'},76366:e=>{e.exports='<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 0h1v4H7V0ZM0 8V7h4v1H0Zm11-1v1h4V7h-4Zm-4 4h1v4H7v-4Zm2-5H6v3h3V6Z" fill="#000"></path></svg>'},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},81323:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zMDdfMjIwOCkiPg0KPHBhdGggZD0iTTExLjUgNC41VjE2LjE1ODRMNiAyMS4zMTQ2TDAuNSAxNi4xNTg0VjQuNUMwLjUgMi4yOTA4NiAyLjI5MDg2IDAuNSA0LjUgMC41SDcuNUM5LjcwOTE0IDAuNSAxMS41IDIuMjkwODYgMTEuNSA0LjVaIiBmaWxsPSIjMDA3Rjk0IiBzdHJva2U9IiMwMDYwNzEiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiAxMEM3LjY1Njg1IDEwIDkgOC42NTY4NSA5IDdDOSA1LjM0MzE1IDcuNjU2ODUgNCA2IDRDNC4zNDMxNSA0IDMgNS4zNDMxNSAzIDdDMyA4LjY1Njg1IDQuMzQzMTUgMTAgNiAxMFoiIGZpbGw9IndoaXRlIi8+DQo8L2c+DQo8ZGVmcz4NCjxjbGlwUGF0aCBpZD0iY2xpcDBfMzA3XzIyMDgiPg0KPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjIyIiBmaWxsPSJ3aGl0ZSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K"},94129:e=>{"use strict";e.exports=i},8294:e=>{"use strict";e.exports=d},75443:e=>{"use strict";e.exports=a},679:e=>{"use strict";e.exports=c},52891:e=>{"use strict";e.exports=u},23852:e=>{"use strict";e.exports=l},98442:e=>{"use strict";e.exports=p},19218:e=>{"use strict";e.exports=f},46719:e=>{"use strict";e.exports=s},26826:e=>{"use strict";e.exports=n},48891:e=>{"use strict";e.exports=o},51315:e=>{"use strict";e.exports=v},30726:e=>{"use strict";e.exports=r}},t={};function m(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,m),r.exports}m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},m.d=(e,t)=>{for(var o in t)m.o(t,o)&&!m.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.p="";var g={};return m.p=window.jimuConfig.baseUrl,(()=>{"use strict";m.r(g),m.d(g,{default:()=>Q});var e,t,o,n=m(48891);!function(e){e.xy="XY",e.yx="YX"}(e||(e={})),function(e){e.classic="CLASSIC",e.modern="MODERN"}(t||(t={})),function(e){e.metric="METRIC",e.imperial="IMPERIAL"}(o||(o={}));const r={_widgetLabel:"Coordinates",mapClickTips:"Click the map to get coordinates",mouseMoveTips:"Move the cursor to get coordinates",enableClickTips:"Enable clicking the map to get the coordinates",disableClickTips:"Disable clicking the map to get the coordinates",computing:"Computing...",changeSystem:"Select the output coordinate system",eyeAlt:" Eye Altitude ({alt})",elev:"Elevation ({ele})"};var i=m(26826),l=m(30726),a=m(94129),s=m(23852),c=m(75443),u=m(46719),d=m(679),p=m(52891),f=m(8294),v=m(98442),y=m(19218);const x=["INCHES","FOOT","FOOT_US","YARDS","MILES","NAUTICAL_MILES","MILLIMETERS","CENTIMETERS","METER","KILOMETERS","DECIMETERS","LINK_CLARKE","FOOT_GOLD_COAST","FOOT_CLARKE","CHAIN_SEARS_1992_TRUNCATED","YARD_INDIAN","CHAIN_BENOIT_1895_B","YARD_SEARS","CHAIN_SEARS","FOOT_SEARS","YARD_INDIAN_1937","50_KILOMETERS","150_KILOMETERS"],b=["DECIMAL_DEGREES","DEGREE_MINUTE_SECONDS","DEGREE","DEGREES_DECIMAL_MINUTES","GRAD","MGRS","USNG"],w={INCHES:.0254,FOOT:.3048,FOOT_US:.3048006096012192,YARDS:.9144,MILES:1609.344,NAUTICAL_MILES:1852,MILLIMETERS:.001,CENTIMETERS:.01,METER:1,KILOMETERS:1e3,DECIMETERS:.1,LINK_CLARKE:.2011661949,FOOT_GOLD_COAST:.3047997101815088,FOOT_CLARKE:.304797265,CHAIN_SEARS_1922_TRUNCATED:20.116756,YARD_INDIAN:.9143985307444408,CHAIN_BENOIT_1895_B:20.11678249437587,YARD_SEARS:.9143984146160287,CHAIN_SEARS:20.11676512155263,FOOT_SEARS:.3047994715386762,YARD_INDIAN_1937:.91439523,"50_KILOMETERS":5e4,"150_KILOMETERS":15e4,DEGREE:.0174532925199433,DECIMAL_DEGREES:.0174532925199433,MGRS:.0174532925199433,USNG:.0174532925199433,DEGREE_MINUTE_SECONDS:.0174532925199433,GRAD:.01570796326794897},h=(e,t,o,n)=>{let r=Math.abs(e),i=Math.floor(r);r-=i;let l=Math.floor(60*r),a=60*(r-l/60)*60;60===a&&(l++,a=0),60===l&&(i++,l=0);const s=M(a,{places:o,digitSeparator:n});return`${i}°${l<10?`0${l}`:l}′${a<10?`0${s}`:s}″${"LAT"===t?e<0?"S":"N":e<0?"W":"E"}`},E=(e,t,o)=>{let n=Math.abs(e),r=Math.floor(n);n-=r;let i=Math.floor(60*n),l=Math.floor(60*(n-i/60)*60);return 60===l&&(i++,l=0),60===i&&(r++,i=0),`${r}°${M(i+l/60,{places:t,digitSeparator:o})}′`},S=e=>b.includes(e),j=e=>x.includes(e),M=(e,t)=>{const{places:o,digitSeparator:r}=t;return r?n.i18n.getIntl().formatNumber(e,{maximumFractionDigits:o,minimumFractionDigits:o}):e.toFixed(o)},N=e=>{var t,o;const n=null==e?void 0:e.wkt;if(!n)return"";const r=null==n?void 0:n.lastIndexOf(",UNIT");if(r>0){const e=n.substr(r),i=e.indexOf("["),l=e.indexOf("]"),a=e.substring(i+1,l).split(",");return null===(o=null===(t=null==a?void 0:a[0])||void 0===t?void 0:t.replace(/\"/g,""))||void 0===o?void 0:o.replace(/\'/g,"")}return""},O=(e,t,o)=>{const n=!w[null==e?void 0:e.toUpperCase()]||!w[t.toUpperCase()];return o||!e||!t||"DEGREES_DECIMAL_MINUTES"===t||n?1:w[e.toUpperCase()]/w[t.toUpperCase()]};function C(e,t,o){return n.css`
    flex-direction: row;
    align-items: center;
    min-width: 160px;
    width: ${o.width};
    height: ${o.height};
    display: flex;
    .coordinates-widget-container {
      height: 28px;
      width: 100%;
      background-color: ${e.colors.white};
      border: 1px solid ${e.colors.palette.light[400]};
      .coordinates-locate {
        border-radius: unset;
      }
      .coordinates-card {
        border: none;
        min-width: ${t?"160px":"240px"};
        min-height: ${t?"26px":"138px"};
        background-color: ${e.colors.white};
        .widget-card-content {
          height: calc(100% - 40px);
          padding: 16px;
          .info-container {
            height: 100%;
            .textfit-container {
              width: 48%;
              margin-right: 2%;
              height: 100%;
              float: left;
            }
            .coordinates-computing {
              font-size:14px;
            }
            .coordinates-card-text-geo,
            .coordinates-card-text-empty,
            .coordinates-card-text {
              height: calc(100% - 18px);
              width: 100%;
            }
            .coordinates-card-text-geo {
              height: 100%;
            }
            .coordinates-card-text-empty {
              display: flex;
              align-items: center;
            }
            .info-unit {
              font-weight: 500;
              font-size: 12px;
              line-height: 16px;
            }
          }
        }
        .widget-card-footer {
          padding: 2px 10px;
          height: 32px;
          background-color: unset !important;
        }
      }
      .coordinates-info {
        padding: 0 4px;
        border: 1px solid ${e.colors.palette.light[400]};
        border-top: none;
        border-bottom: none;
        color: ${e.colors.palette.dark[800]};
        line-height: 26px;
        flex-grow: 2;
      }
      .copy-btn {
        cursor: pointer;
        border-right: ${t?`1px solid ${e.colors.palette.light[400]}`:"unset"};
        border-radius: unset;
      }
      .widget-card-footer {
        margin: 0;
        padding: 10px;
      }
    }
  `}var R=m(74855),I=m(40498),D=m.n(I);const T=e=>{const t=window.SVG,{className:o}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),i=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:i,src:D()},r)):n.React.createElement("svg",Object.assign({className:i},r))};var A=m(18371),_=m.n(A);const k=e=>{const t=window.SVG,{className:o}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),i=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:i,src:_()},r)):n.React.createElement("svg",Object.assign({className:i},r))},L=n.React.memo((e=>{const{text:t,disabled:o,className:r}=e,[i,a]=n.React.useState(null),[s,c]=((e,t)=>{const o=n.React.useRef(null),r=n.React.useCallback((e=>{t(e)}),[t]),i=n.React.useCallback((()=>{o.current&&(clearTimeout(o.current),o.current=null),r(!1)}),[r]),l=n.React.useCallback((()=>{i(),r(!0),o.current=setTimeout((()=>{i()}),3e3)}),[3e3,r,i]);return n.React.useEffect((()=>()=>{i()}),[]),[l,i]})(0,a);n.React.useEffect((()=>{c()}),[t,c]);const u=n.React.useCallback(((t,o)=>{(null==e?void 0:e.onCopy)&&e.onCopy(t,o),s()}),[e,s]),d=l.hooks.useTranslate(l.defaultMessages),p=d("copy"),f=d("copiedToClipboard"),v=i?f:p,m=(0,n.jsx)(l.Button,{className:"copy-btn jimu-outline-inside d-flex",icon:!0,size:"sm",type:"tertiary",disabled:o},!i&&(0,n.jsx)(T,{size:"m",autoFlip:!0}),i&&(0,n.jsx)(k,{size:"m"}));return(0,n.jsx)("div",{css:n.css`
    border: none;
    max-height: 32px;
    max-width: 32px;
  `,className:r},(0,n.jsx)(R.CopyToClipboard,{onCopy:u,text:t,options:{format:"text/plain"},"data-testid":"copy-btn"},o?m:(0,n.jsx)(l.Tooltip,{title:v,placement:"auto-end"},m)))})),{useEffect:P,useRef:G}=n.React,U=n.React.memo((e=>{var t,o;const{text:r,className:i,widgetRect:l,domChange:a}=e,s=G(null),c=G(null);P((()=>{u()}),[r,l,null===(t=s.current)||void 0===t?void 0:t.clientWidth,null===(o=s.current)||void 0===o?void 0:o.clientHeight,a]);const u=()=>{var e,t,o,n;const r=null===(e=s.current)||void 0===e?void 0:e.clientWidth,i=null===(t=s.current)||void 0===t?void 0:t.clientHeight,l=null===(o=c.current)||void 0===o?void 0:o.clientWidth,a=null===(n=c.current)||void 0===n?void 0:n.clientHeight;if(r&&l&&i&&a)if(l!==r||a!==i){const e=r/l,t=i/a;c.current.style.transform=`scale(${Math.min(e,t)})`}else c.current.style.transform="none"};return(0,n.jsx)("div",{ref:s,css:n.css`
    width: 100%;
    height: 100%;
    font-size: 20px;
    overflow: hidden;
    .text {
      display: inline-block;
      white-space: nowrap;
      transform-origin: left top;
    }
  `,className:i},(0,n.jsx)("div",{className:"text",ref:c},r))}));var $=m(57309),z=m.n($),W=m(59788),B=m.n(W);const F=e=>{const t=window.SVG,{className:o}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),i=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:i,src:B()},r)):n.React.createElement("svg",Object.assign({className:i},r))};var Z=m(76366),H=m.n(Z);const Y=e=>{const t=window.SVG,{className:o}=e,r=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}(e,["className"]),i=(0,n.classNames)("jimu-icon jimu-icon-component",o);return t?n.React.createElement(t,Object.assign({className:i,src:H()},r)):n.React.createElement("svg",Object.assign({className:i},r))};var V=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function l(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,a)}s((n=n.apply(e,t||[])).next())}))};const{useState:K,useEffect:X,useRef:J}=n.React,Q=g=>{var x;const{config:b,useMapWidgetIds:w,theme:R,id:I}=g,{coordinateSystem:D,coordinateDecimal:T,altitudeDecimal:A,showSeparators:_,displayOrder:k,widgetStyle:P,mapInfo:G,mapInfo2:$}=b,[W,B]=K({width:250,height:100}),[Z,H]=K(null),[Q,q]=K(!0),[ee,te]=K(null===(x=null==D?void 0:D[0])||void 0===x?void 0:x.id),[oe,ne]=K(!1),[re,ie]=K(!1),[le,ae]=K(!1),[se,ce]=K(""),[ue,de]=K(""),[pe,fe]=K(null),[ve,me]=K(""),[ge,ye]=K(""),[xe,be]=K(null),[we,he]=K(""),[Ee,Se]=K(!1),je=l.hooks.useTranslate(r,l.defaultMessages),Me=je("mapClickTips"),Ne=je("mouseMoveTips"),Oe=je("enableClickTips"),Ce=je("disableClickTips"),Re=je("computing"),Ie=je("_widgetLabel"),De=je("unitsInches"),Te=je("unitsLabelFeet"),Ae=je("unitsFoot_US"),_e=je("unitsLabelYards"),ke=je("unitsLabelMiles"),Le=je("unitsLabelNauticalMiles"),Pe=je("unitsMillimeters"),Ge=je("unitsCentimeters"),Ue=je("unitsLabelMeters"),$e=je("unitsLabelKilometers"),ze=je("unitsDecimeters"),We=je("unitsDecimalDegrees"),Be=je("unitsDegreesDecimalMinutes"),Fe=je("unitsDegreeMinutesSeconds"),Ze=je("unitsMgrs"),He=je("unitsUsng"),Ye=je("changeSystem"),Ve=J(null),Ke=J(null),Xe=J(null),Je=J(null),Qe=J(null),qe=J(null),et=J(null),tt={INCHES:De,FOOT:Te,FOOT_US:Ae,YARDS:_e,MILES:ke,NAUTICAL_MILES:Le,MILLIMETERS:Pe,CENTIMETERS:Ge,METER:Ue,KILOMETERS:$e,DECIMETERS:ze,DEGREE:We,DECIMAL_DEGREES:We,DEGREES_DECIMAL_MINUTES:Be,DEGREE_MINUTE_SECONDS:Fe,MGRS:Ze,USNG:He},ot={[$e]:je("kilometerAbbr"),[Ue]:je("meterAbbr"),[Te]:je("feetAbbr")};X((()=>()=>{var e,t,o,n;if(Je.current&&(null===(e=Xe.current)||void 0===e||e.remove(Je.current)),Xe.current){const e=null===(t=null==Z?void 0:Z.view)||void 0===t?void 0:t.map;null==e||e.remove(Xe.current)}qe.current&&(null===(o=qe.current)||void 0===o||o.remove()),Qe.current&&(null===(n=Qe.current)||void 0===n||n.remove())}),[]),l.hooks.useUpdateEffect((()=>{var e,t,o,n;const r=null==Z?void 0:Z.view,i="3d"===(null==r?void 0:r.type);Q?(null===(e=qe.current)||void 0===e||e.remove(),null===(t=Qe.current)||void 0===t||t.remove(),Qe.current=null==r?void 0:r.on("pointer-move",(e=>{var t,o;const n=r.toMap({x:e.x,y:e.y}),l={x:null===(t=null==e?void 0:e.native)||void 0===t?void 0:t.pageX,y:null===(o=null==e?void 0:e.native)||void 0===o?void 0:o.pageY};st(n,i?l:void 0)}))):(null===(o=qe.current)||void 0===o||o.remove(),null===(n=Qe.current)||void 0===n||n.remove(),qe.current=null==r?void 0:r.on("click",(e=>{var t,o;const n={x:null===(t=null==e?void 0:e.native)||void 0===t?void 0:t.pageX,y:null===(o=null==e?void 0:e.native)||void 0===o?void 0:o.pageY};at(e,i?n:void 0)})))}),[Z,oe,Q,ee,D,T,A,_,k]),X((()=>{var e;Xe.current=new s.default({listMode:"hide"}),Je.current=null;const t=null===(e=null==Z?void 0:Z.view)||void 0===e?void 0:e.map;null==t||t.add(Xe.current),it()}),[Z,G,$]);const nt=n.lodash.debounce(((e,t)=>rt(e,t)),200),rt=(e,t)=>{e<160||t<26||B({width:e,height:t})},it=()=>V(void 0,void 0,void 0,(function*(){const e=D.find((e=>e.id===ee));(yield lt(e))?oe||(q(!0),ae(!0)):(q(!1),ae(!1))})),lt=e=>V(void 0,void 0,void 0,(function*(){const{wkid:t,crs:o}=e,r=parseInt(t),i=new c.default({wkid:r}),l=new c.default({wkid:Ve.current}),a=4326===Ve.current&&i.isWebMercator||4326===r&&l.isWebMercator,s=null==o?void 0:o.name,u=(()=>{var e,t,o;const n=null===(o=null===(t=null===(e=null==Z?void 0:Z.view)||void 0===e?void 0:e.map)||void 0===t?void 0:t.portalItem)||void 0===o?void 0:o.id,r=[];return G&&r.push(G),$&&r.push($),r.find((e=>(null==e?void 0:e.id)===n))})(),d=w&&(null==w?void 0:w.length)>0,p=yield(()=>{if(Ve.current&&d){if((null==u?void 0:u.wkid)&&Ve.current===(null==u?void 0:u.wkid))return Promise.resolve(null==u?void 0:u.label);if(Ee){const{getSRLabel:e}=et.current;return e(Ve.current)}return n.moduleLoader.loadModule("jimu-core/wkid").then((e=>{et.current=e,Se(!0);const{getSRLabel:t}=e;return t(Ve.current)}))}return Promise.resolve("")})();return!!(s&&s===p||a)})),at=(e,t)=>V(void 0,void 0,void 0,(function*(){var o;if(!e.mapPoint)return;const r=f.default.fromJSON(e.mapPoint.toJSON());if(e.stopPropagation(),ie(!1),Q||!ee)return;const i=D.find((e=>e.id===ee)),l=yield lt(i);if((l||oe)&&!Je.current&&(Je.current=(e=>{const t=new u.default({url:m(81323),width:12,height:22,yoffset:11});return new a.default({geometry:e,symbol:t})})(e.mapPoint),Xe.current.add(Je.current)),l)return Je.current.geometry=e.mapPoint,void bt(r,t);if(oe){Je.current.geometry=e.mapPoint;const{x:r,y:l}=e.mapPoint,a=null===(o=null==Z?void 0:Z.view)||void 0===o?void 0:o.spatialReference;((e,t,o)=>{const{wkid:r,datumWkid:i,datumWkid2:l,displayUnit:a,crs:s}=t;if(!r)return;const u=parseInt(r),d=new c.default({wkid:u}),p=new c.default({wkid:Ve.current});let f=null;const m=new y.default({geometries:[e],transformForward:!1});f=u,(d.isGeographic||j(a))&&(f=u),i&&l?Ke.current===G.id?m.transformation=new c.default({wkid:parseInt(i)}):Ke.current===$.id&&(m.transformation=new c.default({wkid:parseInt(l)})):i&&!l&&(m.transformation=new c.default({wkid:parseInt(i)})),m.outSpatialReference=new c.default({wkid:parseInt(f)}),ce(Re);const g=n.utils.getGeometryService();v.default.project(g,m).then((e=>{const t=e[0];let o=a;o&&"MGRS"!==o&&"USNG"!==o||(o=vt(d.isGeographic,p.isWebMercator,s)),"MGRS"===o||"USNG"===o?ut(o,t):S(o)?dt(o,t,p.isWebMercator):ft(o,t,p.isWebMercator)}));const x=null==Z?void 0:Z.view;"3d"===(null==x?void 0:x.type)&&(yt(),o&&mt(o))})(new f.default({x:r,y:l,spatialReference:a}),i,t)}})),st=(e,t)=>V(void 0,void 0,void 0,(function*(){if(ae(!1),!Q||!ee)return;const o=D.find((e=>e.id===ee));(yield lt(o))&&bt(e,t)})),ct=e=>tt[e]||tt[null==e?void 0:e.toUpperCase()],ut=(e,t)=>{d.default.load().then((()=>{const o=ct(e);if("MGRS"===e){const e=d.default.toMgrs(t,"automatic",T);ce(`${e} ${o}`)}else if("USNG"===e){const e=d.default.toUsng(t,T);ce(`${e} ${o}`)}}))},dt=(t,o,n)=>{let{x:r,y:i}=o;const l=k===e.xy,a=D.find((e=>e.id===ee)),{crs:s}=a,c=O(N(s),t,n);if(r*=c,i*=c,"DEGREE_MINUTE_SECONDS"===t)r=h(r,"LON",T,_),i=h(i,"LAT",T,_),ce(l?`${r} ${i}`:`${i} ${r}`);else if("DEGREES_DECIMAL_MINUTES"===t)r=E(r,T,_),i=E(i,T,_),ce(l?`${r} ${i}`:`${i} ${r}`);else{const e=ct(t);ce(l?`${pt(r)} ${pt(i)} ${e}`:`${pt(i)} ${pt(r)} ${e}`)}},pt=e=>isNaN(e)?"":M(e,{places:T,digitSeparator:_}),ft=(t,o,n)=>{let{x:r,y:i}=o;const l=D.find((e=>e.id===ee)),{crs:a}=l,s=O(N(a),t,n);r*=s,i*=s;const c=ct(t),u=k===e.xy;ce(u?`${pt(r)} ${pt(i)} ${c}`:`${pt(i)} ${pt(r)} ${c}`)},vt=(e,t,o)=>{const r=(()=>{let e="english";const t=(0,n.getAppStore)().getState(),o=null==t?void 0:t.user;if(!o)return e;{const{culture:t,units:n}=o;e=n||((null==t?void 0:t.startsWith("en"))?"english":"metric")}})();let i="";return e?(i=N(o),i||(i="METER")):i="english"===r?"FOOT":"METER",t&&(i="DECIMAL_DEGREES"),i},mt=e=>{const t=null==Z?void 0:Z.view;if(!e)return de(""),fe(null),void me("");t.hitTest({x:e.x,y:e.y}).then((e=>{let t="";e.results&&e.results[0]&&e.results[0].mapPoint&&e.results[0].mapPoint.z?(t=gt(e.results[0].mapPoint),de(t)):void 0!==e&&e.ground&&null!==e.ground.mapPoint&&void 0!==e.ground.mapPoint.z&&(t=gt(e.ground.mapPoint)),de(t)}))},gt=e=>{let t="";if(e&&e.z){const{num:o,unit:n}=xt(e.z,!0),r=ot[n];fe(o),me(n),t=`${je("elev",{ele:r})} ${o} ${n}`}else fe(null),me("");return t},yt=()=>{var e,t;const o=null==Z?void 0:Z.view;if(!o||!(null==o?void 0:o.camera)||!(null===(e=null==o?void 0:o.camera)||void 0===e?void 0:e.position))return ye(""),be(null),void he("");const n=null===(t=o.camera.position)||void 0===t?void 0:t.z,{num:r,unit:i}=xt(n);ye(`${je("eyeAlt",{alt:ot[i]})} ${r} ${i}`),be(r),he(i)},xt=(e,t)=>{const n=D.find((e=>e.id===ee)),{elevationUnit:r}=n;if(!e)return{num:0,unit:""};let i="",l=1e3;return e=parseFloat(e),t&&(l=1e4),r===o.metric?e>=l||e<=-l?(e/=1e3,i=$e):i=Ue:(e*=1,i=Te),{num:e=M(e,{places:A,digitSeparator:_}),unit:i}},bt=(e,t)=>{if(!e||!(null==e?void 0:e.x)||!(null==e?void 0:e.y))return de(""),fe(null),me(""),void ce("");const o=D.find((e=>e.id===ee)),{displayUnit:n,wkid:r,crs:i}=o,l=parseInt(r),a=new c.default({wkid:l}),s=new c.default({wkid:Ve.current});let{x:u,y:d}=e;const f=4326===Ve.current&&a.isWebMercator||4326===l&&s.isWebMercator;let v=null;v=e.normalize();let m=n;const g=vt(a.isGeographic,s.isWebMercator,i);m&&"MGRS"!==m&&"USNG"!==m||(m=g);const y=S(m),x=j(m);if(y&&(u=v.longitude||u,d=v.latitude||d,v.x=u,v.y=d),f)if(4326===e.spatialReference.wkid&&a.isWebMercator){if("MGRS"===m||"USNG"===m)ut(m,v);else if(y)dt(m,v,s.isWebMercator);else if(x){const e=p.default.lngLatToXY(u,d);ft(m,{x:e[0],y:e[1]},s.isWebMercator)}}else 4326===l&&s.isWebMercator&&("MGRS"===m||"USNG"===m?ut(m,v):y&&dt(m,v,s.isWebMercator));else 4326===e.spatialReference.wkid||e.spatialReference.isWebMercator?"MGRS"===m||"USNG"===m?ut(m,v):y?dt(m,v,s.isWebMercator):x&&ft(m,v,s.isWebMercator):a.isGeographic?"MGRS"===m||"USNG"===m?ut(m,v):y&&dt(m,v,s.isWebMercator):ft(m,v,s.isWebMercator);const b=null==Z?void 0:Z.view;"3d"===(null==b?void 0:b.type)&&(yt(),t&&mt(t))},wt=()=>V(void 0,void 0,void 0,(function*(){ce(""),de(""),fe(null),me(""),ye(""),be(null),he(""),Xe.current.remove(Je.current),Je.current=null;const e=D.find((e=>e.id===ee));(yield lt(e))?oe?(ie(!1),ae(!0),q(!0)):(ie(!0),ae(!1),q(!1)):(ae(!1),q(!1),oe?(ie(!1),ce("")):ie(!0)),ne(!oe)})),ht=e=>V(void 0,void 0,void 0,(function*(){const t=D.find((t=>t.id===e));(yield lt(t))?(q(!0),ae(!0)):(q(!1),ae(!1)),te(e),ne(!1),ie(!1),ce(""),ye(""),be(null),he(""),de(""),fe(null),me(""),Xe.current.remove(Je.current),Je.current=null}));if(!((null==w?void 0:w.length)>0))return(0,n.jsx)(l.WidgetPlaceholder,{widgetId:I,icon:z(),"data-testid":"coordinatesPlaceholder",message:Ie});const Et=oe?Ce:Oe,St=P===t.classic,jt=re?Me:le?Ne:`${se}${ue&&`${se&&" | "}${ue}`}${ge&&`${(se||ue)&&" | "}${ge}`}`||Oe,Mt=xe||pe,Nt=re?Me:le?Ne:(0,n.jsx)("div",{className:"info-container"},(0,n.jsx)("div",{className:"d-flex w-100 "+(Mt?"h-50":"h-100")},se!==Re&&se?(0,n.jsx)(U,{className:"coordinates-card-text-geo",text:se,widgetRect:W,domChange:Mt}):(0,n.jsx)("div",{className:"coordinates-computing"},se||(pe||xe?"--":Oe))),Mt&&(0,n.jsx)("div",{className:"h-50"},pe?(0,n.jsx)("div",{className:"textfit-container"},(0,n.jsx)(U,{className:"coordinates-card-text",text:pe,widgetRect:W}),(0,n.jsx)("div",{className:"info-unit"},je("elev",{ele:ot[ve]}))):(0,n.jsx)("div",{className:"textfit-container"},(0,n.jsx)("div",{className:"coordinates-card-text-empty"},"--"),(0,n.jsx)("div",{className:"info-unit"},je("elev",{ele:ot[ve]}))),xe?(0,n.jsx)("div",{className:"textfit-container"},(0,n.jsx)(U,{className:"coordinates-card-text",text:xe,widgetRect:W}),(0,n.jsx)("div",{className:"info-unit"},je("eyeAlt",{alt:ot[we]}))):(0,n.jsx)("div",{className:"textfit-container"},(0,n.jsx)("div",{className:"coordinates-card-text-empty"},"--"),(0,n.jsx)("div",{className:"info-unit"},je("eyeAlt",{alt:ot[we]}))))),Ot=[Me,Ne,Oe].includes(jt),Ct=Q||Ot||!oe&&!se,Rt=Q||Ot||!oe&&!jt.trim();return(0,n.jsx)("div",{className:"jimu-widget-coordinates jimu-widget h-100",css:C(R,St,W)},St?(0,n.jsx)("div",{className:"coordinates-widget-container d-flex justify-content-between"},(0,n.jsx)(l.Button,{icon:!0,size:"sm",type:"tertiary",onClick:wt,active:oe,title:Et,"aria-label":Et,className:"jimu-outline-inside coordinates-locate"},(0,n.jsx)(Y,null)),(0,n.jsx)("div",{className:"coordinates-info text-truncate",title:jt},jt),(0,n.jsx)(L,{text:jt,disabled:Ct}),(null==D?void 0:D.length)>0&&(0,n.jsx)(l.Dropdown,{size:"sm",activeIcon:!0},(0,n.jsx)(l.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"tertiary",className:"suspension-drop-btn jimu-outline-inside",title:Ye},(0,n.jsx)(F,null)),(0,n.jsx)(l.DropdownMenu,null,D.map((e=>{const t=e.id===ee;return(0,n.jsx)(l.DropdownItem,{key:e.id,active:t,onClick:()=>ht(e.id)},e.name)}))))):(0,n.jsx)("div",{className:"coordinates-widget-container w-100 h-100"},(0,n.jsx)(l.Card,{className:"h-100 coordinates-card"},(0,n.jsx)(l.CardBody,{className:"widget-card-content"},Nt),(0,n.jsx)(l.CardFooter,{className:"widget-card-footer"},(0,n.jsx)("div",{className:"jimu-widget d-flex justify-content-between"},(0,n.jsx)(l.Button,{icon:!0,size:"sm",type:"tertiary",onClick:wt,active:oe,title:Et,"aria-label":Et},(0,n.jsx)(Y,null)),(0,n.jsx)("div",{className:"d-flex justify-content-between"},jt&&(0,n.jsx)(L,{text:jt,disabled:Rt,className:"coordinates-card-copy mr-1"}),(0,n.jsx)(l.Dropdown,{size:"sm",activeIcon:!0},(0,n.jsx)(l.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"tertiary",className:"suspension-drop-btn",title:Ye},(0,n.jsx)(F,{className:"suspension-drop-btn"})),(0,n.jsx)(l.DropdownMenu,null,D.map((e=>{const t=e.id===ee;return(0,n.jsx)(l.DropdownItem,{key:e.id,active:t,onClick:()=>ht(e.id)},e.name)}))))))))),(0,n.jsx)(i.JimuMapViewComponent,{useMapWidgetId:null==w?void 0:w[0],onActiveViewChange:e=>{var t,o,n,r,i,l,a,s,c;if(ce(""),de(""),fe(null),me(""),ye(""),be(null),he(""),ne(!1),Je.current&&(null===(t=Xe.current)||void 0===t||t.remove(Je.current)),Xe.current){const e=null===(o=null==Z?void 0:Z.view)||void 0===o?void 0:o.map;null==e||e.remove(Xe.current)}H(e);const u=null==e?void 0:e.view;if(!u)return;const d="3d"===(null==u?void 0:u.type);Q?(null===(n=qe.current)||void 0===n||n.remove(),null===(r=Qe.current)||void 0===r||r.remove(),Qe.current=null==u?void 0:u.on("pointer-move",(e=>{var t,o;const n=u.toMap({x:e.x,y:e.y}),r={x:null===(t=null==e?void 0:e.native)||void 0===t?void 0:t.pageX,y:null===(o=null==e?void 0:e.native)||void 0===o?void 0:o.pageY};st(n,d?r:void 0)}))):(null===(i=qe.current)||void 0===i||i.remove(),null===(l=Qe.current)||void 0===l||l.remove(),qe.current=null==u?void 0:u.on("click",(e=>{var t,o;const n={x:null===(t=null==e?void 0:e.native)||void 0===t?void 0:t.pageX,y:null===(o=null==e?void 0:e.native)||void 0===o?void 0:o.pageY};at(e,d?n:void 0)}))),Ve.current=null===(a=null==u?void 0:u.spatialReference)||void 0===a?void 0:a.wkid,Ke.current=null===(c=null===(s=null==u?void 0:u.map)||void 0===s?void 0:s.portalItem)||void 0===c?void 0:c.id}}),(0,n.jsx)(n.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:nt}))}})(),g})())}}}));