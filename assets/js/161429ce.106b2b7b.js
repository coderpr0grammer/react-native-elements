"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[58655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),c=n(7094),s=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,d=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),E=w.tabGroupChoices,C=w.setTabGroupChoices,N=(0,a.useState)(k),O=N[0],I=N[1],x=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var Z=E[v];null!=Z&&Z!==O&&g.some((function(e){return e.value===Z}))&&I(Z)}var _=function(e){var t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==O&&(T(t),I(r),null!=v&&C(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var l,o=x.indexOf(e.currentTarget)-1;n=null!=(l=x[o])?l:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onClick:_},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>c});var r=n(67294),a=n(35742),l=n(14330),o=n(98576),i=n(61720),c=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(63366),a=n(87462),l=n(67294),o=n(10407),i=n(86010),c=(n(95999),n(52263)),s=n(91262),u=n(66412);const m="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",d="playgroundPreview_bb8I",f="toggleContainer_ZZiH",v="toggleIcon_OnrQ",h="showCode_O0Od";var b=n(72389),g=n(5434),y=["children","transformCode"];function k(){return l.createElement("div",null,"Loading...")}function w(e){var t=(0,b.Z)(),n=(0,l.useContext)(o.L2),r=n.code,i=n.language,c=n.theme,s=n.disabled,u=n.onChange;return l.createElement(o.uz,(0,a.Z)({key:String(t),code:r,language:i,theme:c,disabled:s,onChange:u},e,{className:p}))}function E(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,l.useState(t)),c=a[0],u=a[1],m=function(){u((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:d},l.createElement(s.Z,{fallback:l.createElement(k,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.i5,null),l.createElement(o.IF,null),l.createElement("div",{className:f},l.createElement("div",{className:(0,i.Z)(v),onClick:m},l.createElement(g.xoN,null),l.createElement("span",{className:h},c?"Hide":"Show"," Code"))))}))),c&&l.createElement(w,{preImports:r,showCode:c}))}function C(e){var t=e.children,n=(e.transformCode,(0,r.Z)(e,y)),i=((0,c.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,u.p)());return l.createElement("div",{className:m},l.createElement(o.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:i},n),l.createElement(E,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(32408),l=n(13925),o=n(53211),i=n(83279);const c=Object.assign({React:r,LinearGradient:i.Z},a,l,o,r)},24170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(37047),i=(n(65488),n(85162),n(96711)),c=n(47516),s=["components"],u={id:"listitem_content",title:"ListItem.Content"},m=void 0,p={unversionedId:"components/listitem_content",id:"components/listitem_content",title:"ListItem.Content",description:"This allows adding content to the ListItem.",source:"@site/docs/components/ListItem.Content.mdx",sourceDirName:"components",slug:"/components/listitem_content",permalink:"/docs/next/components/listitem_content",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/ListItem.Content.mdx",tags:[],version:"current",frontMatter:{id:"listitem_content",title:"ListItem.Content"},sidebar:"docs",previous:{title:"ListItem.Chevron",permalink:"/docs/next/components/listitem_chevron"},next:{title:"ListItem.Input",permalink:"/docs/next/components/listitem_input"}},d={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"This allows adding content to the ListItem.\nThis, Receives all ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"import { ListItem } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(c.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"ListItemContent"))),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"text#props"},"Text")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"right")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}))))))}h.isMDXComponent=!0}}]);