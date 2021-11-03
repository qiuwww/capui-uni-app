(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-card-index"],{"25cf":function(t,e,i){var n=i("38a7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("67f458cd",n,!0,{sourceMap:!1,shadowMode:!1})},"2a55":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-card",props:{full:{type:Boolean,default:!1},title:{type:String,default:""},titleColor:{type:String,default:"#303133"},titleSize:{type:[Number,String],default:"30"},subTitle:{type:String,default:""},subTitleColor:{type:String,default:"#909399"},subTitleSize:{type:[Number,String],default:"26"},border:{type:Boolean,default:!0},index:{type:[Number,String,Object],default:""},margin:{type:String,default:"30rpx"},borderRadius:{type:[Number,String],default:"16"},headStyle:{type:Object,default:function(){return{}}},bodyStyle:{type:Object,default:function(){return{}}},footStyle:{type:Object,default:function(){return{}}},headBorderBottom:{type:Boolean,default:!0},footBorderTop:{type:Boolean,default:!0},thumb:{type:String,default:""},thumbWidth:{type:[String,Number],default:"60"},thumbCircle:{type:Boolean,default:!1},padding:{type:[String,Number],default:"30"},showHead:{type:Boolean,default:!0},showFoot:{type:Boolean,default:!0},boxShadow:{type:String,default:"none"}},data:function(){return{}},methods:{click:function(){this.$emit("click",this.index)},headClick:function(){this.$emit("head-click",this.index)},bodyClick:function(){this.$emit("body-click",this.index)},footClick:function(){this.$emit("foot-click",this.index)}}};e.default=n},"2a98":function(t,e,i){var n=i("594e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("015cfdb9",n,!0,{sourceMap:!1,shadowMode:!1})},3309:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-card",class:{"u-border":t.border,"u-card-full":t.full,"u-card--border":t.borderRadius>0},style:{borderRadius:t.borderRadius+"rpx",margin:t.margin,boxShadow:t.boxShadow},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.showHead?i("v-uni-view",{staticClass:"u-card__head",class:{"u-border-bottom":t.headBorderBottom},style:[{padding:t.padding+"rpx"},t.headStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.headClick.apply(void 0,arguments)}}},[t.$slots.head?t._t("head"):i("v-uni-view",{staticClass:"u-flex u-row-between"},[t.title?i("v-uni-view",{staticClass:"u-card__head--left u-flex u-line-1"},[t.thumb?i("v-uni-image",{staticClass:"u-card__head--left__thumb",style:{height:t.thumbWidth+"rpx",width:t.thumbWidth+"rpx",borderRadius:t.thumbCircle?"100rpx":"6rpx"},attrs:{src:t.thumb,mode:"aspectfull"}}):t._e(),i("v-uni-text",{staticClass:"u-card__head--left__title u-line-1",style:{fontSize:t.titleSize+"rpx",color:t.titleColor}},[t._v(t._s(t.title))])],1):t._e(),t.subTitle?i("v-uni-view",{staticClass:"u-card__head--right u-line-1"},[i("v-uni-text",{staticClass:"u-card__head__title__text",style:{fontSize:t.subTitleSize+"rpx",color:t.subTitleColor}},[t._v(t._s(t.subTitle))])],1):t._e()],1)],2):t._e(),i("v-uni-view",{staticClass:"u-card__body",style:[{padding:t.padding+"rpx"},t.bodyStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bodyClick.apply(void 0,arguments)}}},[t._t("body")],2),t.showFoot?i("v-uni-view",{staticClass:"u-card__foot",class:{"u-border-top":t.footBorderTop},style:[{padding:t.$slots.foot?t.padding+"rpx":0},t.footStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.footClick.apply(void 0,arguments)}}},[t._t("foot")],2):t._e()],1)},a=[]},"38a7":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-card[data-v-cc2ad83a]{position:relative;overflow:hidden;font-size:%?28?%;background-color:#fff;box-sizing:border-box}.u-card-full[data-v-cc2ad83a]{margin-left:0!important;margin-right:0!important;width:100%}.u-card--border[data-v-cc2ad83a]:after{border-radius:%?16?%}.u-card__head--left[data-v-cc2ad83a]{color:#262626}.u-card__head--left__thumb[data-v-cc2ad83a]{margin-right:%?16?%}.u-card__head--left__title[data-v-cc2ad83a]{max-width:%?400?%}.u-card__head--right[data-v-cc2ad83a]{color:#909399;margin-left:%?6?%}.u-card__body[data-v-cc2ad83a]{color:#606266}.u-card__foot[data-v-cc2ad83a]{color:#909399}',""]),t.exports=e},"38dc":function(t,e,i){"use strict";var n=i("25cf"),o=i.n(n);o.a},"3d80":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-05edd86e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-05edd86e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#262626;padding:0 %?6?%}.u-item-bg[data-v-05edd86e]{background-color:#1e8df0;position:absolute;z-index:-1}.u-none-border-right[data-v-05edd86e]{border-right:none!important}.u-item-first[data-v-05edd86e]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-05edd86e]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-05edd86e]{-webkit-transition:all .35s;transition:all .35s;color:#262626;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=e},"594e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-demo[data-v-5358a26f]{padding-top:0}.u-card-wrap[data-v-5358a26f]{background-color:#f3f4f6;padding:1px}.u-body-item[data-v-5358a26f]{font-size:%?32?%;color:#333;padding:%?20?% %?10?%}.u-body-item uni-image[data-v-5358a26f]{width:%?120?%;-webkit-box-flex:0;-webkit-flex:0 0 %?120?%;flex:0 0 %?120?%;height:%?120?%;border-radius:%?8?%;margin-left:%?12?%}',""]),t.exports=e},6700:function(t,e,i){"use strict";i.r(e);var n=i("3309"),o=i("d645f");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("38dc");var r,u=i("f0c5"),d=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"cc2ad83a",null,!1,n["a"],r);e["default"]=d.exports},"685d":function(t,e,i){var n=i("3d80");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5557e50c",n,!0,{sourceMap:!1,shadowMode:!1})},"688e":function(t,e,i){"use strict";var n=i("2a98"),o=i.n(n);o.a},"992f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"素胚勾勒出青花，笔锋浓转淡",subTitle:"2020-05-15",thumb:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",padding:20,bottomSlot:!0,border:!0}},methods:{thumbChange:function(t){this.thumb=0==t?"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg":""},paddingChange:function(t){this.padding=[20,30,40][t]},bottomChange:function(t){this.bottomSlot=!t},borderChange:function(t){this.border=!t},click:function(e){t.log(e)},headClick:function(e){t.log(e)}}};e.default=i}).call(this,i("5a52")["default"])},"9af5":function(t,e,i){"use strict";var n=i("685d"),o=i.n(n);o.a},"9cd6":function(t,e,i){"use strict";i.r(e);var n=i("a8a5"),o=i("9f81");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("688e");var r,u=i("f0c5"),d=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"5358a26f",null,!1,n["a"],r);e["default"]=d.exports},"9f81":function(t,e,i){"use strict";i.r(e);var n=i("992f"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},a8a5:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uCard:i("6700").default,uIcon:i("4f37").default,uSubsection:i("ac28").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-card-wrap"},[i("u-card",{attrs:{title:t.title,"sub-title":t.subTitle,thumb:t.thumb,padding:t.padding,border:t.border},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)},"head-click":function(e){arguments[0]=e=t.$handleEvent(e),t.headClick.apply(void 0,arguments)}}},[i("v-uni-view",{attrs:{slot:"body"},slot:"body"},[i("v-uni-view",{staticClass:"u-body-item u-flex u-border-bottom u-col-between u-p-t-0"},[i("v-uni-view",{staticClass:"u-body-item-title u-line-2"},[t._v("瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半")]),i("v-uni-image",{attrs:{src:"https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"u-body-item u-flex u-row-between u-p-b-0"},[i("v-uni-view",{staticClass:"u-body-item-title u-line-2"},[t._v("釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放")]),i("v-uni-image",{attrs:{src:"https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg",mode:"aspectFill"}})],1)],1),i("v-uni-view",{attrs:{slot:"foot"},slot:"foot"},[t.bottomSlot?i("u-icon",{attrs:{name:"chat-fill",size:"34",label:"30评论"}}):t._e()],1)],1)],1),i("v-uni-view",{staticClass:"u-config-wrap u-demo"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("左上角图标")]),i("u-subsection",{attrs:{list:["显示","隐藏"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.thumbChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("内边距")]),i("u-subsection",{attrs:{current:"1",list:["20","30","40"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.paddingChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("底部")]),i("u-subsection",{attrs:{list:["显示","隐藏"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bottomChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("外边框")]),i("u-subsection",{attrs:{list:["显示","隐藏"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.borderChange.apply(void 0,arguments)}}})],1)],1)],1)},a=[]},ac28:function(t,e,i){"use strict";i.r(e);var n=i("b065"),o=i("f5d5");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("9af5");var r,u=i("f0c5"),d=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"05edd86e",null,!1,n["a"],r);e["default"]=d.exports},b065:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},a=[]},d645f:function(t,e,i){"use strict";i.r(e);var n=i("2a55"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},ec6f:function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=n},f5d5:function(t,e,i){"use strict";i.r(e);var n=i("ec6f"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a}}]);