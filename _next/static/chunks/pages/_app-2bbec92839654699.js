(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(500)}])},1210:function(e,t){"use strict";function o(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,l=r(o(7294)),u=o(6273),i=o(2725),c=o(3462),f=o(1018),s=o(7190),d=o(1210),p=o(8684),v={};function h(e,t,o,n){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var r=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var _=l.default.forwardRef(function(e,t){var o,r,_=e.href,m=e.as,y=e.children,x=e.prefetch,b=e.passHref,g=e.replace,j=e.shallow,C=e.scroll,O=e.locale,w=e.onClick,M=e.onMouseEnter,L=e.onTouchStart,P=e.legacyBehavior,E=void 0===P?!0!==Boolean(!1):P,R=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=y,E&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));var k=!1!==x,T=l.default.useContext(c.RouterContext),N=l.default.useContext(f.AppRouterContext);N&&(T=N);var H=l.default.useMemo(function(){var e=n(u.resolveHref(T,_,!0),2),t=e[0],o=e[1];return{href:t,as:m?u.resolveHref(T,m):o||t}},[T,_,m]),D=H.href,S=H.as,I=l.default.useRef(D),B=l.default.useRef(S);E&&(r=l.default.Children.only(o));var U=E?r&&"object"==typeof r&&r.ref:t,K=n(s.useIntersection({rootMargin:"200px"}),3),Z=K[0],A=K[1],G=K[2],F=l.default.useCallback(function(e){(B.current!==S||I.current!==D)&&(G(),B.current=S,I.current=D),Z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[S,U,D,G,Z]);l.default.useEffect(function(){var e=A&&k&&u.isLocalURL(D),t=void 0!==O?O:T&&T.locale,o=v[D+"%"+S+(t?"%"+t:"")];e&&!o&&h(T,D,S,{locale:t})},[S,D,A,O,k,T]);var z={ref:F,onClick:function(e){E||"function"!=typeof w||w(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,i,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:i}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}}(e,T,D,S,g,j,C,O,Boolean(N),k)},onMouseEnter:function(e){E||"function"!=typeof M||M(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!k&&N)&&u.isLocalURL(D)&&h(T,D,S,{priority:!0})},onTouchStart:function(e){E||"function"!=typeof L||L(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!k&&N)&&u.isLocalURL(D)&&h(T,D,S,{priority:!0})}};if(!E||b||"a"===r.type&&!("href"in r.props)){var Q=void 0!==O?O:T&&T.locale,X=T&&T.isLocaleDomain&&d.getDomainLocale(S,Q,T.locales,T.domainLocales);z.href=X||p.addBasePath(i.addLocale(S,Q,T&&T.defaultLocale))}return E?l.default.cloneElement(r,z):l.default.createElement("a",Object.assign({},R,z),o)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!l,f=n(r.useState(!1),2),s=f[0],d=f[1],p=n(r.useState(null),2),v=p[0],h=p[1];return r.useEffect(function(){if(l){if(!c&&!s&&v&&v.tagName){var e,n,r,f,p,h,_;return n=function(e){return e&&d(e)},p=(f=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=i.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=u.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},i.push(o),u.set(o,t),t}(r={root:null==t?void 0:t.current,rootMargin:o})).id,h=f.observer,(_=f.elements).set(v,n),h.observe(v),function(){if(_.delete(v),h.unobserve(v),0===_.size){h.disconnect(),u.delete(p);var e=i.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&i.splice(e,1)}}}}else if(!s){var m=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(m)}}},[v,c,o,t,s]),[h,s,r.useCallback(function(){d(!1)},[])]};var r=o(7294),a=o(9311),l="function"==typeof IntersectionObserver,u=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var a=n.default.createContext(null);t.LayoutRouterContext=a;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=n.default.createContext(null);t.TemplateContext=u},500:function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.r(t),o.d(t,{default:function(){return d}});var r=o(5893),a=o(9008),l=o.n(a),u=o(1664),i=o.n(u),c=o(214),f=o.n(c);function s(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("meta",{charset:"utf-8"}),(0,r.jsx)("title",{children:"ross.fyi"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"ross.fyi"}),(0,r.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\uD83D\uDDFF</text></svg>"})]}),(0,r.jsxs)("div",{className:f().container,children:[(0,r.jsx)("header",{className:f().header,children:(0,r.jsx)("h1",{className:f().title,children:(0,r.jsx)(i(),{href:"/",children:"ross.fyi"})})}),(0,r.jsx)("main",{className:f().main,children:(0,r.jsx)("article",{children:t})})]}),(0,r.jsx)("footer",{className:f().footer,children:(0,r.jsx)(i(),{href:"/",children:"Copyright \xa9 2022 ross.fyi"})})]})}o(906);var d=function(e){var t=e.Component,o=e.pageProps;return(0,r.jsx)(s,{children:(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){n(e,t,o[t])})}return e}({},o))})}},214:function(e){e.exports={container:"Home_container__bCOhY",header:"Home_header__GCVRv",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85"}},906:function(){},9008:function(e,t,o){e.exports=o(5443)},1664:function(e,t,o){e.exports=o(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);