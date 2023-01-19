System.register(["jimu-core","jimu-theme","jimu-ui"],(function(e,t){var r={},s={},o={};return{setters:[function(e){r.Immutable=e.Immutable,r.React=e.React,r.ReactRedux=e.ReactRedux,r.UrlInfoPartType=e.UrlInfoPartType,r.classNames=e.classNames,r.css=e.css,r.isKeyboardMode=e.isKeyboardMode,r.jsx=e.jsx,r.moduleLoader=e.moduleLoader,r.polished=e.polished,r.queryString=e.queryString,r.utils=e.utils},function(e){s.registerStyles=e.registerStyles,s.withStyles=e.withStyles},function(e){o.Button=e.Button,o.PanelHeader=e.PanelHeader,o.Popper=e.Popper,o.Select=e.Select,o.defaultMessages=e.defaultMessages,o.getFallbackPlacementsModifier=e.getFallbackPlacementsModifier,o.hooks=e.hooks}],execute:function(){e((()=>{var e={2534:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5v9c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5v-9C1 1.567 4.134 0 8 0s7 1.567 7 3.5ZM2 5.304V6.5C2 7.692 4.615 9 8 9s6-1.308 6-2.5V5.304C12.775 6.32 10.546 7 8 7s-4.775-.68-6-1.696ZM8 10c2.546 0 4.775-.68 6-1.696V9.5c0 1.192-2.615 2.5-6 2.5s-6-1.308-6-2.5V8.304C3.225 9.32 5.454 10 8 10Zm6 1.304C12.775 12.32 10.546 13 8 13s-4.775-.68-6-1.696V12.5C2 13.692 4.615 15 8 15s6-1.308 6-2.5v-1.196ZM14 3.5C14 4.692 11.385 6 8 6S2 4.692 2 3.5 4.615 1 8 1s6 1.308 6 2.5Z" fill="#000"></path></svg>'},76339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.39 3.425 5.553.588a2.006 2.006 0 0 0-2.837 0L.588 2.716a2.006 2.006 0 0 0 0 2.837L3.425 8.39a2.006 2.006 0 0 0 2.837 0l.71-.709 1.347 1.347-.71.71a2.006 2.006 0 0 0 0 2.837l2.838 2.837a2.006 2.006 0 0 0 2.837 0l2.128-2.128a2.006 2.006 0 0 0 0-2.837L12.575 7.61a2.006 2.006 0 0 0-2.837 0l-.71.709-1.347-1.347.71-.71a2.006 2.006 0 0 0 0-2.837ZM6.972 6.262l.709-.709a1.003 1.003 0 0 0 0-1.419L4.844 1.297a1.003 1.003 0 0 0-1.419 0L1.297 3.425a1.003 1.003 0 0 0 0 1.419L4.134 7.68a1.003 1.003 0 0 0 1.419 0l.71-.71-.894-.892a.501.501 0 0 1 .71-.71l.893.893Zm2.056 3.476.6.599a.502.502 0 0 0 .709-.71l-.6-.599.71-.709a1.003 1.003 0 0 1 1.419 0l2.837 2.837a1.003 1.003 0 0 1 0 1.419l-2.128 2.128a1.003 1.003 0 0 1-1.419 0L8.32 11.866a1.003 1.003 0 0 1 0-1.419l.71-.71Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=r},34796:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=o}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";a.r(l),a.d(l,{DynamicUrlEditor:()=>w,UrlInfoSelector:()=>u});var e={};a.r(e),a.d(e,{DynamicUrlEditor:()=>s,UrlInfoSelector:()=>o});var t=a(34796),r=a(48891);function s(e){const t=e.theme;return r.css`
    .component-dynamic-url-editor{
      width: 100%;
      height: 100%;
      .ql-container{
        background-color: ${t.colors.palette.light[200]};
      }
      .ql-editor{
        outline: none;
        padding: ${r.polished.rem(5)} ${r.polished.rem(6)};
        p{
          word-break: break-all;
        }
        &:focus {
          border: 1px solid ${t.colors.palette.primary[700]};
        }
      }
      .dynamic-url-editor-btngroup{
        background-color: ${t.colors.palette.light[200]};
      }
    }
  `}function o(e){const t=e.theme;return r.css`
    .component-url-info-selector{
      .param-list{
        height: calc(100% - 45px);
        overflow-y: auto;
        .param-item.param-item-selected{
          border: 1px solid ${t.colors.primary};
        }
        .param-item{
          border: 1px solid transparent;
          cursor: pointer;
          background-color: ${t.colors.palette.light[400]};
          user-select: none;
        }
        .param-item:hover{
          background-color: ${t.colors.palette.light[500]};
        }
        .param-item:active.param-item:hover{
          background-color: ${t.colors.white};
        }
      }
    }
  `}var i=a(30726);const{useSelector:n}=r.ReactRedux,{useState:c}=r.React,d=e=>{const t=[];return Object.keys(e).forEach((r=>{"draft"!==r&&t.push({key:r,value:e[r]})})),t},u=(0,t.withStyles)((e=>{const{editor:t,className:s,selectWidgets:o,selection:a}=e,l=n((e=>(e.appStateInBuilder?e.appStateInBuilder:e).queryObject)),u=e=>{const t=o.findIndex((t=>t.id===e));let s={};if(t>-1){const e=o[t].config.expression;let a="";if(e&&(a=e.replace(/<[^>]+>/g,"")),a&&a.includes("?")){const e=a.substr(a.indexOf("?"));s=r.queryString.parse(e)}}else s=l;return s},[p,m]=c("appURL"),[h,f]=c(d(u(p))),y=i.hooks.useEventCallback((e=>{if(null==a)return;const s=(0,r.Immutable)(e).name;((e,r,s,o)=>{t.deleteText(o.index,o.length),t.insertEmbed(o.index,"urlInfo",{uniqueid:e,name:r,urlInfo:s},"user"),t.setSelection(o.index+1,"user"),t.focus()})(r.utils.getUUID(),s,e,a)}));return r.React.createElement("div",{className:(0,r.classNames)("w-100 h-100",{[s]:!!s})},r.React.createElement("div",{className:"component-url-info-selector w-100 h-100"},r.React.createElement("div",{className:"p-3",style:{display:"none"}},r.React.createElement(i.Select,{size:"sm",value:p,onChange:e=>{const t=e.target.value;m(t),f(d(u(t)))},className:"top-drop"},[{id:"appURL",name:"App Url"}].map((e=>r.React.createElement("option",{key:e.id,value:e.id,title:e.name},e.name))))),r.React.createElement("div",{className:"param-list px-3"},h.map((e=>r.React.createElement("div",{key:e.key,title:e.key,onClick:()=>(e=>{const t=e.key,s={type:r.UrlInfoPartType.Urlinfo,urlsearch:`{${p}.search.${t}}`};y({name:s.urlsearch,parts:[s]})})(e),className:"param-item text-truncate mt-2 p-1"},`${e.key}`))))))}),"UrlInfoSelector");var p=a(76339),m=a.n(p);const h=e=>{const t=window.SVG,{className:s}=e,o=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]])}return r}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",s);return t?r.React.createElement(t,Object.assign({className:a,src:m()},o)):r.React.createElement("svg",Object.assign({className:a},o))};var f=a(2534),y=a.n(f);const x=e=>{const t=window.SVG,{className:s}=e,o=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]])}return r}(e,["className"]),a=(0,r.classNames)("jimu-icon jimu-icon-component",s);return t?r.React.createElement(t,Object.assign({className:a,src:y()},o)):r.React.createElement("svg",Object.assign({className:a},o))};const{useState:v,useRef:b}=r.React,g=[{name:"preventOverflow",options:{altAxis:!0}},(0,i.getFallbackPlacementsModifier)(["left-start","left-end"],!0)],E=[0,8],j=e=>{const{className:t,editorRef:s,useDataSourcesEnabled:o,useDataSources:a,onChange:l,widgetId:n,value:c,selectWidgets:d,RichExpressionBuilder:p,useMixinKeyboardEnterModules:m,useEditorSelectionFormats:f,richTextEditorUtils:y,RichEditorCore:j,Delta:S,ExpressionBuilderType:w}=e,R=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]])}return r}(e,["className","editorRef","useDataSourcesEnabled","useDataSources","onChange","widgetId","value","selectWidgets","RichExpressionBuilder","useMixinKeyboardEnterModules","useEditorSelectionFormats","richTextEditorUtils","RichEditorCore","Delta","ExpressionBuilderType"]),[O,k]=v(!1),[M,N]=v(!1),P=b(null),C=b(null),[I,T]=i.hooks.useForwardValueRef(s),U=i.hooks.useTranslate(i.defaultMessages),[B,D]=f(I,!0),[L,F]=v(c),[$,K]=v(!1),V=r.React.useCallback(((e,t)=>{if((e=>{var t;return!!(null===(t=null==e?void 0:e.ops)||void 0===t?void 0:t.length)&&e.ops.some((e=>{var t;const r=null!==(t=null==e?void 0:e.insert)&&void 0!==t?t:{};return r.urlInfo||r.expression||r.urlinfo}))})(t))return t;const r=t.map((e=>"string"==typeof e.insert?e.insert:"")).join("");return(new S).insert(r)}),[S]),Z=r.React.useMemo((()=>({toolbar:!1,keyboard:{bindings:{bold:{handler:()=>{}},italic:{handler:()=>{}},underline:{handler:()=>{}},enter:{key:13,handler:()=>{}},tab:{key:9,handler:()=>{}}}},clipboard:{matchers:[["*",V]]}})),[V]);i.hooks.useUnmount((()=>{l(L)}));const q=a&&a.length>0;return(0,r.jsx)("div",{className:(0,r.classNames)("w-100 h-100",{[t]:!!t})},(0,r.jsx)("div",{className:"component-dynamic-url-editor"},(0,r.jsx)(j,Object.assign({modules:Z,className:(0,r.classNames)("rich-text-editor"),onChange:e=>{(0,r.isKeyboardMode)()&&(k(!1),N(!1)),F((e=>{const t=null==e?void 0:e.match(/\<exp((?!\<exp).)+\<\/exp\>/gim);let r=e;return t&&t.forEach((e=>{var t,s;const o=null===(t=e.match(/<exp[^>]*>([\s\S]*?)<\/exp>/))||void 0===t?void 0:t[1],a=o.match(/<span[^>]*>([\s\S]*?)<\/span>/),l=a&&(null===(s=o.match(/<span[^>]*>([\s\S]*?)<\/span>/))||void 0===s?void 0:s[1]);(!o.trim()||a&&!l.trim())&&(r=r.replace(e,""))})),r})(e))},onClick:()=>{$||(K(!0),y.setEditorCursorEnd(I))},onBlur:()=>{K(!1),l(L)},editorRef:T,onKeyDown:e=>{e&&e.target&&("Enter"===e.key&&e.target.blur(),"Tab"!==e.key||e.shiftKey||(e.preventDefault(),P.current.focus()))},defaultValue:c,placeholder:U("websitePlaceholder")},R)),(0,r.jsx)("div",{className:"dynamic-url-editor-btngroup"},(0,r.jsx)(i.Button,{size:"sm",icon:!0,onClick:()=>{k(!O),M&&N(!1)},ref:P,active:O,type:"tertiary",title:U("urlInfo"),className:"jimu-outline-inside"},(0,r.jsx)(h,null)),o&&(0,r.jsx)(i.Button,{size:"sm",icon:!0,onClick:()=>{N(!M),O&&k(!1)},ref:C,active:M,type:"tertiary",disabled:!q,title:U(q?"data":"dataUnavailableTips"),className:"jimu-outline-inside"},(0,r.jsx)(x,null))),(0,r.jsx)(i.Popper,{open:O,disableResize:!0,placement:"left-start",reference:P.current,modifiers:g,showArrow:!0,toggle:e=>{var t;(null==I?void 0:I.root.contains(null==e?void 0:e.target))||(O&&(null===(t=P.current)||void 0===t||t.focus()),k((e=>!e)))},trapFocus:!0,autoFocus:!0,"aria-label":U("urlInfo")},(0,r.jsx)("div",{style:{width:180,height:300}},(0,r.jsx)(i.PanelHeader,{className:"px-3 py-2",title:U("urlInfo"),onClose:()=>{k(!1),O&&P.current.focus()}}),(0,r.jsx)(u,{editor:I,className:t,selectWidgets:d,selection:D,formats:B}))),(0,r.jsx)(i.Popper,{open:M,disableResize:!0,placement:"left-start",reference:C.current,modifiers:g,showArrow:!0,toggle:e=>{var t;(null==I?void 0:I.root.contains(null==e?void 0:e.target))||(O&&(null===(t=C.current)||void 0===t||t.focus()),N((e=>!e)))},offset:E,trapFocus:!0,autoFocus:!0,"aria-label":U("dataPanelTitle")},(0,r.jsx)("div",{css:r.css`
            width: 240px;
            height: 360px;
            .field-list{
              height: calc(100% - 200px) !important;
            }
          `},(0,r.jsx)(i.PanelHeader,{className:"px-3 py-2",title:U("dataPanelTitle"),onClose:()=>{N(!1),M&&C.current.focus()}}),(0,r.jsx)(p,{widgetId:n,source:"user",useDataSources:a,editor:I,formats:B,editable:!1,autoInsertSpace:!1,types:(0,r.Immutable)([w.Attribute]),selection:D})))))};class S extends r.React.PureComponent{constructor(){super(...arguments),this.state={moduleLoaded:!1}}componentDidMount(){Promise.all([r.moduleLoader.loadModule("jimu-ui/advanced/rich-text-editor"),r.moduleLoader.loadModule("jimu-ui/advanced/expression-builder")]).then((e=>{const[{RichExpressionBuilder:t,useEditorSelectionFormats:r,richTextEditorUtils:s,RichEditorCore:o,Delta:a,useMixinKeyboardEnterModules:l},{ExpressionBuilderType:i}]=e;this.state.moduleLoaded||(this.RichExpressionBuilder=t,this.useEditorSelectionFormats=r,this.richTextEditorUtils=s,this.RichEditorCore=o,this.ExpressionBuilderType=i,this.Delta=a,this.useMixinKeyboardEnterModules=l,this.setState({moduleLoaded:!0}))}))}render(){return this.state.moduleLoaded?(0,r.jsx)(j,Object.assign({},this.props,{Delta:this.Delta,useMixinKeyboardEnterModules:this.useMixinKeyboardEnterModules,RichExpressionBuilder:this.RichExpressionBuilder,useEditorSelectionFormats:this.useEditorSelectionFormats,richTextEditorUtils:this.richTextEditorUtils,RichEditorCore:this.RichEditorCore,ExpressionBuilderType:this.ExpressionBuilderType})):null}}const w=(0,t.withStyles)(S,"DynamicUrlEditor");(0,t.registerStyles)("jimu-ui/advanced/dynamic-url-editor",e)})(),l})())}}}));