"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[70944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),l=a(72389),o=a(67392),s=a(7094),p=a(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a,l=e.lazy,d=e.block,m=e.defaultValue,v=e.values,h=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,r.useState)(y),E=T[0],j=T[1],I=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=w[h];null!=C&&C!==E&&k.some((function(e){return e.value===C}))&&j(C)}var P=function(e){var t=e.currentTarget,a=I.indexOf(t),n=k[a].value;n!==E&&(O(t),j(n),null!=h&&x(h,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var i,l=I.indexOf(e.currentTarget)-1;a=null!=(i=I[l])?i:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:Z,onClick:P},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},62066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(65488),o=a(85162),s=a(44996),p=["components"],c={id:"installation",title:"",sidebar_label:"Installation"},u=void 0,d={unversionedId:"installation",id:"version-4.0.0-rc.1/installation",title:"",description:"Installation",source:"@site/versioned_docs/version-4.0.0-rc.1/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/4.0.0-rc.1/installation",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/installation.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"installation",title:"",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/4.0.0-rc.1/"},next:{title:"Troubleshooting",permalink:"/docs/4.0.0-rc.1/troubleshooting"}},m={},v=[{value:"Installation",id:"installation",level:2},{value:"Stable",id:"stable",level:3},{value:"Bleeding Edge",id:"bleeding-edge",level:3},{value:"Peer dependencies",id:"peer-dependencies",level:2},{value:"Install react-native-vector-icons",id:"install-react-native-vector-icons",level:3},{value:"Install react-native-safe-area-context",id:"install-react-native-safe-area-context",level:3},{value:"Using Expo",id:"using-expo",level:2},{value:"New Expo project",id:"new-expo-project",level:3},{value:"Existing Expo project",id:"existing-expo-project",level:3},{value:"Using on Web",id:"using-on-web",level:2},{value:"Why do I have to set this up?",id:"why-do-i-have-to-set-this-up",level:3},{value:"Create React App",id:"create-react-app",level:3}],h={toc:v};function b(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"stable"},"Stable"),(0,i.kt)(l.Z,{groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/themed @rneui/base\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rneui/themed @rneui/base\n")))),(0,i.kt)("h3",{id:"bleeding-edge"},"Bleeding Edge"),(0,i.kt)(l.Z,{groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# @rneui/base\nnpm install react-native-elements/react-native-elements#base\n\n# @rneui/themed\nnpm install react-native-elements/react-native-elements#themed\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# @rneui/base\nyarn add @rneui/base@github:react-native-elements/react-native-elements#base\n\n# @rneui/themed\nyarn add @rneui/themed@github:react-native-elements/react-native-elements#themed\n")))),(0,i.kt)("h2",{id:"peer-dependencies"},"Peer dependencies"),(0,i.kt)("h3",{id:"install-react-native-vector-icons"},"Install react-native-vector-icons"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://expo.io"},"Expo")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"),"\nprojects include ",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," out of the box, hence this step can be skipped."),(0,i.kt)("p",null,"If your project is a standard React Native project created using\n",(0,i.kt)("inlineCode",{parentName:"p"},"react-native init")," (it should have an ios/android directory), then you need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,i.kt)("p",null,"Or if you encounter the following error."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you see the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNMET PEER DEPENDENCY")," warning for ",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," like below, you can ignore it as ",(0,i.kt)("em",{parentName:"p"},"react-native-vector-icons")," is already installed by ",(0,i.kt)("em",{parentName:"p"},"expo")," or ",(0,i.kt)("em",{parentName:"p"},"crna"),"."),(0,i.kt)("img",{alt:"React Native Vector Icons Unmet Peer Dependency",src:(0,s.Z)("img/peer-dep-error.png")})),(0,i.kt)("p",null,"Otherwise run the following command:"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Manual linking of react-native-vector-icons is not necessary if you're using ",(0,i.kt)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native unlink react-native-vector-icons")," and the process will run as expected.")),(0,i.kt)(l.Z,{defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-vector-icons\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-vector-icons\n")))),(0,i.kt)("p",null,"Link the dependency"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-vector-icons\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you have any issues installing react-native-vector-icons, check out their\ninstallation guide\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/oblador/react-native-vector-icons#installation"},"here")," or\ndebug it using\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/react-native-elements/react-native-elements/issues/503"},"this issue"),".")),(0,i.kt)("h3",{id:"install-react-native-safe-area-context"},"Install react-native-safe-area-context"),(0,i.kt)("p",null,"If you have already installed ",(0,i.kt)("strong",{parentName:"p"},"react-native-safe-area-context")," as a dependency for\nyour project you can skip this step. Otherwise run the following command:"),(0,i.kt)(l.Z,{defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-safe-area-context\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-safe-area-context\n")))),(0,i.kt)("admonition",{title:"Useful information.",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Manual linking of react-native-safe-area-context is not necessary if you're using ",(0,i.kt)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native unlink react-native-safe-area-context")," and the process will run as expected.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-safe-area-context\n")),(0,i.kt)("p",null,"It is required to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaProvider")," to the outside of the app. The suggested way to do this is\nthe following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { SafeAreaProvider } from 'react-native-safe-area-context';\n\nfunction App() {\n  return <SafeAreaProvider>...</SafeAreaProvider>;\n}\n")),(0,i.kt)("h2",{id:"using-expo"},"Using Expo"),(0,i.kt)("h3",{id:"new-expo-project"},"New Expo project"),(0,i.kt)("p",null,"Create a new project with Expo CLI and React Native Elements template"),(0,i.kt)(l.Z,{defaultValue:"stable",values:[{label:"Stable",value:"stable"},{label:"Bleeding Edge",value:"edge"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"stable",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"expo init app --template @rneui/template\n"))),(0,i.kt)(o.Z,{value:"edge",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"expo init app --template @rneui/template@edge\n")))),(0,i.kt)("h3",{id:"existing-expo-project"},"Existing Expo project"),(0,i.kt)("p",null,"Just install the package and its peer dependencies"),(0,i.kt)("h2",{id:"using-on-web"},"Using on Web"),(0,i.kt)("p",null,"React Native Elements just like on mobile can be used in your web projects. This is possible using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"react-native-web"),". We'll highlight how to set this up using create-react-app."),(0,i.kt)("h3",{id:"why-do-i-have-to-set-this-up"},"Why do I have to set this up?"),(0,i.kt)("p",null,"On the web, you can usually use UI libraries directly from npm without any additional setup. However in react-native, it's a bit different."),(0,i.kt)("p",null,"The major difference is that React Native can support JSX and advanced javascript out the box. This means that we don't need to transpile our code before we ship it to npm. ",(0,i.kt)("strong",{parentName:"p"},"We ship JSX and advanced javascript directly to npm")," in React Native Elements, so we need to account for this in our web projects."),(0,i.kt)("h3",{id:"create-react-app"},"Create React App"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," is a very popular framework for building react applications. Unfortunately it doesn't allow much customization of the build setup. To accomplish this we'll be making use of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/arackaf/customize-cra"},"customize-cra"),"."),(0,i.kt)("p",null,"After creating a new create-react-app project, run the following commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add  @rneui/base @rneui/themed react-native-web react-native-vector-icons\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired\n")),(0,i.kt)("p",null,"Secondly, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"config-overrides.js")," file in the root of your project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { override, addBabelPlugins, babelInclude } = require('customize-cra');\n\nmodule.exports = override(\n  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),\n  babelInclude([\n    path.resolve(__dirname, 'node_modules/@rneui/base'),\n    path.resolve(__dirname, 'node_modules/@rneui/themed'),\n    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),\n    path.resolve(__dirname, 'node_modules/react-native-ratings'),\n    path.resolve(__dirname, 'src'),\n  ])\n);\n")),(0,i.kt)("p",null,"Also you should keep in mind that not all of React Native components are implemented for web-platform out-of-box.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal")," component is not yet implemented in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-web"),". Therefore, to use some of our components\nyou may need to install additional third-party libraries that implement the missing functionality.\nFor ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0.0-rc.1/components/overlay"},(0,i.kt)("inlineCode",{parentName:"a"},"Overlay"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0.0-rc.1/components/tooltip"},(0,i.kt)("inlineCode",{parentName:"a"},"Tooltip"))," components ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal")," implementation is required."),(0,i.kt)("p",null,"Lastly, change your scripts in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," to use react-app-rewired:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test"\n}\n')),(0,i.kt)("p",null,"At this point your app can start. However trying to use any components that use icons, will not show them. In your App.js, load these fonts as you would on the web with a style tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<style type=\"text/css\">{`\n  @font-face {\n    font-family: 'MaterialIcons';\n    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'FontAwesome';\n    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');\n  }\n`}</style>\n")),(0,i.kt)("p",null,"The full setup of the guide can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/create-react-app-example"},"https://github.com/react-native-elements/create-react-app-example"),"."))}b.isMDXComponent=!0}}]);