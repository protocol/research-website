(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"5C/b":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("nKUr"),a=n("cpVT"),i=n("z7pX"),l=(n("q1tI"),n("RBan")),c=n.n(l),s=n("enmc"),o=n.n(s),d=n("TSYQ"),h=n.n(d),p=n("JfSF"),g=n.n(p);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={word:"",highlight:!1,bold:!1};function b(e){var t,n=e.text,l=e.baseDelay,s=e.inView,d=e.highlightWord,p=e.highlightType,j=e.slideUp,b=Object(i.a)(n),m=new RegExp(d),u=n.search(m);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:"visuallyHidden",children:n}),Object(r.jsx)("span",{className:h()(g.a.animation,(t={},Object(a.a)(t,g.a.show,s),Object(a.a)(t,g.a.slideUp,j),t)),role:"presentation",children:b.reduce((function(e,t,n){if(" "===t)return[].concat(Object(i.a)(e),[_]);var r=l*(e.length-1);return[].concat(Object(i.a)(o()(e)),[f(f({},c()(e)),{},{word:c()(e).word.concat(t),delay:r,bold:c()(e).bold||"bold"===p&&d&&u===n,em:c()(e).em||"em"===p&&d&&u===n})])}),[_]).map((function(e,t){var n;return Object(r.jsx)("span",{className:g.a.wordWrapper,children:Object(r.jsx)("div",{className:h()(g.a.word,(n={},Object(a.a)(n,g.a.bold,!!e.bold),Object(a.a)(n,g.a.em,!!e.em),n)),style:Object(a.a)({},j?"animationDelay":"transitionDelay","".concat(e.delay,"ms")),children:e.word})},"word".concat(t))})).reduce((function(e,t){return null===e?[t]:[].concat(Object(i.a)(e),[t])}),null)})]})}b.defaultProps={inView:!1,highlightWord:void 0,slideUp:!1,baseDelay:0,highlightType:"bold"}},JfSF:function(e,t,n){e.exports={animation:"StaggerText_animation__2O5RV",word:"StaggerText_word__3G9-V",wordWrapper:"StaggerText_wordWrapper__3G617",slideUp:"StaggerText_slideUp__1l6o3",show:"StaggerText_show__1ENo-","slide-in-bottom":"StaggerText_slide-in-bottom__AD0ZZ",bold:"StaggerText_bold__un_X7",em:"StaggerText_em__izGmR",fadein:"StaggerText_fadein__6z4-D","text-focus-in":"StaggerText_text-focus-in__27Vhv","slide-in-scaled-left":"StaggerText_slide-in-scaled-left__1KlaW","slide-in-left":"StaggerText_slide-in-left__ly8Rq","scale-in-bl":"StaggerText_scale-in-bl__3PDMi","roll-in-left":"StaggerText_roll-in-left__1JoM6"}},KxBF:function(e,t){e.exports=function(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(n=n>a?a:n)<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(a);++r<a;)i[r]=e[r+t];return i}},RBan:function(e,t){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},aJAD:function(e,t,n){e.exports={wrapper:"Acknowledgements_wrapper__Y4O-T",title:"Acknowledgements_title__2PUuP",highlight:"Acknowledgements_highlight__oQUPz",paragraph:"Acknowledgements_paragraph__Y2lSM",bodyWrapper:"Acknowledgements_bodyWrapper__3JDhl",ctaWrapper:"Acknowledgements_ctaWrapper__p_oq0",enter:"Acknowledgements_enter__8B6nj","slide-in-bottom":"Acknowledgements_slide-in-bottom__HP5eE",contentWrapper:"Acknowledgements_contentWrapper__2gmPX","slide-in-left":"Acknowledgements_slide-in-left__jMJO-",resourcesWrapper:"Acknowledgements_resourcesWrapper__19Txm",resources:"Acknowledgements_resources__xlStR",item:"Acknowledgements_item__2v6Rc",link:"Acknowledgements_link__vrLAf",downloadLink:"Acknowledgements_downloadLink__3ILas",downloadIcon:"Acknowledgements_downloadIcon__2mRJi",inView:"Acknowledgements_inView__3j4Zv",itemsWrapper:"Acknowledgements_itemsWrapper__378DR",fadein:"Acknowledgements_fadein__25nX9","text-focus-in":"Acknowledgements_text-focus-in__Ng6Kg","slide-in-scaled-left":"Acknowledgements_slide-in-scaled-left__1Pdpv","scale-in-bl":"Acknowledgements_scale-in-bl__jBkBT","roll-in-left":"Acknowledgements_roll-in-left__Upd39"}},co3k:function(e,t,n){"use strict";var r=n("nKUr"),a=n("cpVT"),i=(n("q1tI"),n("TSYQ")),l=n.n(i),c=n("kI6m"),s=n.n(c),o=function(e){var t=e.href,n=e.children,i=e.alternate;return Object(r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:l()(s.a.root,Object(a.a)({},s.a.alternate,i)),children:n})};o.defaultProps={alternate:!1},t.a=o},enmc:function(e,t,n){var r=n("KxBF");e.exports=function(e){return(null==e?0:e.length)?r(e,0,-1):[]}},kI6m:function(e,t,n){e.exports={root:"Button_root__2wDFr",alternate:"Button_alternate__FsSiE",fadein:"Button_fadein__1FUgR","text-focus-in":"Button_text-focus-in__Y5-ny","slide-in-scaled-left":"Button_slide-in-scaled-left__1nhxG","slide-in-left":"Button_slide-in-left__GrBRi","slide-in-bottom":"Button_slide-in-bottom__CBhdY","scale-in-bl":"Button_scale-in-bl__9twoJ","roll-in-left":"Button_roll-in-left__1nGDV"}},nVLh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("cpVT"),a=n("nKUr"),i=(n("q1tI"),n("TSYQ")),l=n.n(i),c=n("PGlZ"),s=n("5C/b"),o=n("XCDW"),d=n("co3k"),h=n("aJAD"),p=n.n(h),g=function(e){var t=e.href,n=e.text;return Object(a.jsxs)("a",{className:p.a.downloadLink,target:"_blank",rel:"noreferrer",href:t,children:[n,Object(a.jsx)("img",{className:p.a.downloadIcon,src:"/download.svg",alt:"Download file icon"})]})},j=500/3;function f(){return Object(a.jsx)(o.a,{title:"Acknowledgements",id:"acknowledgements",renderContent:function(){return Object(a.jsxs)("div",{className:p.a.wrapper,children:[Object(a.jsx)(c.a,{thredhold:1,triggerOnce:!0,children:function(e){var t=e.inView,n=e.ref;return Object(a.jsx)("h3",{ref:n,className:p.a.title,children:Object(a.jsx)(s.default,{inView:t,baseDelay:1e3/3,text:"Thank you, folks!",highlightWord:"folks",highlightType:"em",slideUp:!0})})}}),Object(a.jsxs)("div",{className:p.a.contentWrapper,children:[Object(a.jsx)(c.a,{thredhold:.5,triggerOnce:!0,children:function(e){var t=e.inView,n=e.ref;return Object(a.jsxs)("div",{className:p.a.bodyWrapper,ref:n,children:[Object(a.jsx)("div",{className:p.a.paragraph,children:Object(a.jsx)(s.default,{inView:t,baseDelay:200,text:"This is a collaborative effort.",slideUp:!0})}),Object(a.jsx)("div",{className:p.a.paragraph,children:Object(a.jsx)(s.default,{inView:t,baseDelay:1e3/13,text:"These are the people in no particular order that helped us achieve this.",slideUp:!0})})]})}}),Object(a.jsxs)("div",{className:p.a.resourcesWrapper,children:[Object(a.jsx)(c.a,{thredhold:.25,triggerOnce:!0,children:function(e){var t=e.inView,n=e.ref;return Object(a.jsx)("div",{className:l()(p.a.resources,Object(r.a)({},p.a.inView,t)),ref:n,children:Object(a.jsxs)("ul",{className:p.a.itemsWrapper,children:[Object(a.jsxs)("li",{className:p.a.item,style:{animationDelay:"".concat(0,"ms")},children:[Object(a.jsx)("a",{className:p.a.link,href:"https://www.supranational.net/",target:"_blank",rel:"noreferrer",children:"Supranational"})," ","[development of"," ",Object(a.jsx)("a",{href:"https://github.com/supranational/blst",target:"_blank",rel:"noreferrer",children:"blst"}),", many optimisations in"," ",Object(a.jsx)("a",{href:"https://github.com/filecoin-project/bellperson",target:"_blank",rel:"noreferrer",children:"bellperson"})," ","and"," ",Object(a.jsx)("a",{href:"https://github.com/filecoin-project/rust-fil-proofs",target:"_blank",rel:"noreferrer",children:"rust-fil-proofs"}),"]"]}),Object(a.jsxs)("li",{className:p.a.item,style:{animationDelay:"".concat(1*j,"ms")},children:[Object(a.jsx)("a",{href:"https://electriccoin.co/",className:p.a.highlight,target:"_blank",rel:"noreferrer",children:"Electric Coin Company"})," ","&"," ",Object(a.jsx)("a",{href:"https://z.cash/",className:p.a.highlight,target:"_blank",rel:"noreferrer",children:"Zcash"})," ","[original development of"," ",Object(a.jsx)("a",{href:"https://github.com/zkcrypto/bellman",target:"_blank",rel:"noreferrer",children:"bellman"}),"]"]}),Object(a.jsxs)("li",{className:p.a.item,style:{animationDelay:"".concat(2*j,"ms")},children:[Object(a.jsx)("span",{className:p.a.highlight,children:"J. Groth"})," for his work on"," ",Object(a.jsx)(g,{text:"Groth16",href:"https://eprint.iacr.org/2016/260.pdf"})]})]})})}}),Object(a.jsx)(c.a,{thredhold:.25,triggerOnce:!0,children:function(e){var t=e.inView,n=e.ref;return Object(a.jsx)("div",{className:l()(p.a.resources,Object(r.a)({},p.a.inView,t)),ref:n,children:Object(a.jsxs)("ul",{className:p.a.itemsWrapper,children:[Object(a.jsxs)("li",{className:p.a.item,style:{animationDelay:"".concat(500,"ms")},children:[Object(a.jsx)("span",{className:p.a.highlight,children:"R. Gennaro"}),","," ",Object(a.jsx)("span",{className:p.a.highlight,children:"C. Gentry"}),","," ",Object(a.jsx)("span",{className:p.a.highlight,children:"B. Parno"})," and"," ",Object(a.jsx)("span",{className:p.a.highlight,children:"M. Raykova"})," for their work on"," ",Object(a.jsx)(g,{text:"QAPs",href:"https://eprint.iacr.org/2012/215.pdf"})]}),Object(a.jsxs)("li",{className:p.a.item,style:{animationDelay:"".concat(500+1*j,"ms")},children:[Object(a.jsx)("span",{className:p.a.highlight,children:"P. Baretto"}),","," ",Object(a.jsx)("span",{className:p.a.highlight,children:"B. Lynn"})," and"," ",Object(a.jsx)("span",{className:p.a.highlight,children:"M. Scott"})," for their work on"," ",Object(a.jsx)(g,{text:"BLS",href:"https://eprint.iacr.org/2002/088.pdf"})]}),Object(a.jsxs)("li",{className:p.a.item,style:{animationDelay:"".concat(500+2*j,"ms")},children:[Object(a.jsx)("span",{className:p.a.highlight,children:"B. B\xfcnz"}),","," ",Object(a.jsx)("span",{className:p.a.highlight,children:"M. Maller"}),","," ",Object(a.jsx)("span",{className:p.a.highlight,children:"P. Mishra"}),","," ",Object(a.jsx)("span",{className:p.a.highlight,children:"N. Tyagi"})," and"," ",Object(a.jsx)("span",{className:p.a.highlight,children:"P. Vesely"})," for their work on"," ",Object(a.jsx)(g,{text:"Inner Pairing Products",href:"https://eprint.iacr.org/2019/1177"})]})]})})}})]})]}),Object(a.jsx)(c.a,{threshold:1,triggerOnce:!0,children:function(e){var t=e.inView,n=e.ref;return Object(a.jsx)("div",{ref:n,className:l()(p.a.ctaWrapper,Object(r.a)({},p.a.enter,t)),children:Object(a.jsx)(d.a,{alternate:!0,href:"https://jobs.lever.co/protocol",children:"Join the team"})})}})]})}})}},z7pX:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))}}]);