(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5656)}])},8418:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(6273),c=r(387),l=r(7190);var s={};function f(e,n,r,t){if(e&&u.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var n,r=!1!==e.prefetch,t=c.useRouter(),a=i.default.useMemo((function(){var n=o(u.resolveHref(t,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?u.resolveHref(t,e.as):a||r}}),[t,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var j=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,x=o(l.useIntersection({rootMargin:"200px"}),2),b=x[0],w=x[1],_=i.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);i.default.useEffect((function(){var e=w&&r&&u.isLocalURL(d),n="undefined"!==typeof y?y:t&&t.locale,o=s[d+"%"+p+(n?"%"+n:"")];e&&!o&&f(t,d,p,{locale:n})}),[p,d,w,y,r,t]);var k={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:a,locale:c,scroll:i}))}(e,t,d,p,v,m,g,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(d)&&f(t,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof y?y:t&&t.locale,C=t&&t.isLocaleDomain&&u.getDomainLocale(p,E,t&&t.locales,t&&t.domainLocales);k.href=C||u.addBasePath(u.addLocale(p,E,t&&t.defaultLocale))}return i.default.cloneElement(n,k)};n.default=d},7190:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(n?n.current:null),2),v=h[0],m=h[1],g=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=c.get(t):(n=c.get(r),l.push(r));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(r,n={id:r,observer:a,elements:o}),n}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var n=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&l.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[t,v,r,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){n&&m(n.current)}),[n]),[g,d]};var a=r(7294),i=r(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},5656:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=r(7294),a=r(1163),i=r(9008),u=r(8963),c=r(9729),l=r.n(c),s=(r(906),r(4298));n.default=function(e){var n=e.Component,r=(e.pageProps,(0,a.useRouter)().route),c=(0,o.useState)(!1),f=c[0],d=c[1];return(0,o.useEffect)((function(){d("/"!==r)}),[r]),(0,t.jsxs)("div",{className:l().app,children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("meta",{name:"description",content:"Developer, writer, drummer, and all-around cool guy."}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("title",{children:"FJCMontenegro"})]}),(0,t.jsx)(s.default,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-165360075-1"}),(0,t.jsx)(s.default,{id:"gtag",children:"window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-165360075-1');"}),(0,t.jsx)("header",{children:f&&(0,t.jsx)(u.tD,{})}),(0,t.jsx)("main",{children:(0,t.jsx)(n,{})})]})}},8963:function(e,n,r){"use strict";r.d(n,{hI:function(){return i},$_:function(){return l},tD:function(){return p}});var t=r(5893),o=(r(7294),r(2370)),a=r.n(o),i=function(e){var n=e.children;return(0,t.jsx)("div",{className:a().container,children:(0,t.jsxs)(t.Fragment,{children:[n,(0,t.jsx)(l,{})]})})},u=r(7880),c=r.n(u),l=function(){return(0,t.jsxs)("footer",{children:[(0,t.jsxs)("p",{className:c().links,children:[(0,t.jsx)("a",{href:"https://twitter.com/fjcmontenegro",target:"_blank",rel:"noreferrer",children:"\ud83d\udc26"}),(0,t.jsx)("a",{href:"https://medium.com/@fjcmontenegro",target:"_blank",rel:"noreferrer",children:"\ud83d\udcdd"}),(0,t.jsx)("a",{href:"https://www.instagram.com/fjcmontenegro/",target:"_blank",rel:"noreferrer",children:"\ud83d\udcf7"})]}),(0,t.jsx)("p",{children:"Copyright \xa9 2022 FJCMontenegro"})]})},s=r(1664),f=r(9823),d=r.n(f),p=function(){return(0,t.jsxs)("div",{className:d().topnav,children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.default,{href:"/",children:"FJCMontenegro"})}),(0,t.jsxs)("div",{className:d().links,children:[(0,t.jsx)(s.default,{href:"/developer",children:"\ud83e\uddd1\u200d\ud83d\udcbb"}),(0,t.jsx)(s.default,{href:"/writer",children:"\u270d\ufe0f"}),(0,t.jsx)(s.default,{href:"/drummer",children:"\ud83e\udd41"})]})]})}},2370:function(e){e.exports={container:"AnimatedPresence_container__gJXlM"}},7880:function(e){e.exports={links:"Footer_links__4bN4O"}},9823:function(e){e.exports={topnav:"TopNav_topnav__nhEIj",links:"TopNav_links__JuwzJ"}},9729:function(e){e.exports={app:"app_app__3X0V5"}},906:function(){},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)},1163:function(e,n,r){e.exports=r(387)},4298:function(e,n,r){e.exports=r(699)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var r=e.O();_N_E=r}]);