(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-library-deepClone-index"],{"09e4":function(e,n,t){var u=t("5971");"string"===typeof u&&(u=[[e.i,u,""]]),u.locals&&(e.exports=u.locals);var s=t("4f06").default;s("90c48b0a",u,!0,{sourceMap:!1,shadowMode:!1})},"330f":function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"u-demo"},[t("v-uni-view",{staticClass:"u-demo-wrap"},[t("v-uni-view",{staticClass:"u-demo-title"},[e._v("演示效果")]),t("v-uni-view",{staticClass:"u-demo-area"},[t("v-uni-view",{staticClass:"u-no-demo-here"},[e._v("源对象为：\"{info: {name: 'mary'}}\"")]),t("v-uni-view",{staticClass:"u-demo-result-line"},[e._v(e._s(e.result))])],1)],1)],1)},i=[]},"58c1":function(e,n,t){"use strict";var u=t("09e4"),s=t.n(u);s.a},5971:function(e,n,t){var u=t("24fb");n=u(!1),n.push([e.i,'@charset "UTF-8";/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */',""]),e.exports=n},c7e4:function(e,n,t){"use strict";t.r(n);var u=t("e430"),s=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=s.a},e430:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{obj:{info:{name:"mary"}},result:""}},onLoad:function(){this.result=this.$u.deepClone(this.obj)}};n.default=u},e5de:function(e,n,t){"use strict";t.r(n);var u=t("330f"),s=t("c7e4");for(var i in s)"default"!==i&&function(e){t.d(n,e,(function(){return s[e]}))}(i);t("58c1");var a,r=t("f0c5"),c=Object(r["a"])(s["default"],u["b"],u["c"],!1,null,"5f68b36f",null,!1,u["a"],a);n["default"]=c.exports}}]);