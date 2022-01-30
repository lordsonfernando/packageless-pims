"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[424],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5540:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={title:"Create a pims repository",id:"create-pim-repo"},c=void 0,s={unversionedId:"create-pim-repo",id:"create-pim-repo",title:"Create a pims repository",description:"Creating a pims repository is fairly simple, but there are a couple requirements:",source:"@site/docs/create-pim-repo.md",sourceDirName:".",slug:"/create-pim-repo",permalink:"/packageless-pims/create-pim-repo",editUrl:"https://github.com/everettraven/packageless-pims/edit/main/docs/docs/create-pim-repo.md",tags:[],version:"current",frontMatter:{title:"Create a pims repository",id:"create-pim-repo"},sidebar:"sidebar",previous:{title:"Contributing",permalink:"/packageless-pims/contributing"},next:{title:"Creating a pim configuration file",permalink:"/packageless-pims/create-pim-config"}},l=[],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Creating a pims repository is fairly simple, but there are a couple requirements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The repository needs to be accessible via the internet"),(0,i.kt)("li",{parentName:"ol"},"The repository needs to have a URL that will return the raw contents of a file in the repository")),(0,i.kt)("p",null,"Once that is created, you are ready to add pim configuration files! We recommend that you add a ",(0,i.kt)("strong",{parentName:"p"},"pims")," directory to store all your pim configuration files but this isn't necessary."),(0,i.kt)("p",null,"You can follow the ",(0,i.kt)("a",{parentName:"p",href:"/packageless-pims/create-pim-config"},"Creating a pim configuration file")," guide to create your first pim configuration file."),(0,i.kt)("p",null,"Once you have some pim configuration files in your repository you can then set packageless to point to it by changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"repository_host")," value in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.packageless/config.hcl")," to have the base url that returns the raw contents of a file. This base url should also include the route to the pims directory if it is not the root directory. EX: ",(0,i.kt)("a",{parentName:"p",href:"https://custom.pim-repo.raw/pims/"},"https://custom.pim-repo.raw/pims/")))}m.isMDXComponent=!0}}]);