(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-login-index"],{1377:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uIcon:e("4f37").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"top"}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"title"},[t._v("欢迎登录美团")]),e("v-uni-input",{staticClass:"u-border-bottom",attrs:{type:"number",placeholder:"请输入手机号"},model:{value:t.tel,callback:function(i){t.tel=i},expression:"tel"}}),e("v-uni-view",{staticClass:"tips"},[t._v("未注册的手机号验证后自动创建美团账号")]),e("v-uni-button",{staticClass:"getCaptcha",style:[t.inputStyle],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit.apply(void 0,arguments)}}},[t._v("获取短信验证码")]),e("v-uni-view",{staticClass:"alternative"},[e("v-uni-view",{staticClass:"password"},[t._v("密码登录")]),e("v-uni-view",{staticClass:"issue"},[t._v("遇到问题")])],1)],1),e("v-uni-view",{staticClass:"buttom"},[e("v-uni-view",{staticClass:"loginType"},[e("v-uni-view",{staticClass:"wechat item"},[e("v-uni-view",{staticClass:"icon"},[e("u-icon",{attrs:{size:"70",name:"weixin-fill",color:"rgb(83,194,64)"}})],1),t._v("微信")],1),e("v-uni-view",{staticClass:"QQ item"},[e("v-uni-view",{staticClass:"icon"},[e("u-icon",{attrs:{size:"70",name:"qq-fill",color:"rgb(17,183,233)"}})],1),t._v("QQ")],1)],1),e("v-uni-view",{staticClass:"hint"},[t._v("登录代表同意"),e("v-uni-text",{staticClass:"link"},[t._v("美团点评用户协议、隐私政策，")]),t._v("并授权使用您的美团点评账号信息（如昵称、头像、收获地址）以便您统一管理")],1)],1)],1)},o=[]},"257b":function(t,i,e){"use strict";var n=e("c651"),a=e.n(n);a.a},"5509c":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.wrap[data-v-124119c1]{font-size:%?28?%}.wrap .content[data-v-124119c1]{width:%?600?%;margin:%?80?% auto 0}.wrap .content .title[data-v-124119c1]{text-align:left;font-size:%?60?%;font-weight:500;margin-bottom:%?100?%}.wrap .content uni-input[data-v-124119c1]{text-align:left;margin-bottom:%?10?%;padding-bottom:%?6?%}.wrap .content .tips[data-v-124119c1]{color:#909399;margin-bottom:%?60?%;margin-top:%?8?%}.wrap .content .getCaptcha[data-v-124119c1]{background-color:#fdf3d0;color:#909399;border:none;font-size:%?30?%;padding:%?12?% 0}.wrap .content .getCaptcha[data-v-124119c1]::after{border:none}.wrap .content .alternative[data-v-124119c1]{color:#909399;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?30?%}.wrap .buttom .loginType[data-v-124119c1]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?350?% %?150?% %?150?% %?150?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.wrap .buttom .loginType .item[data-v-124119c1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#606266;font-size:%?28?%}.wrap .buttom .hint[data-v-124119c1]{padding:%?20?% %?40?%;font-size:%?20?%;color:#909399}.wrap .buttom .hint .link[data-v-124119c1]{color:#ff8200}',""]),t.exports=i},"912c":function(t,i,e){"use strict";e.r(i);var n=e("1377"),a=e("97aa");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("257b");var s,c=e("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"124119c1",null,!1,n["a"],s);i["default"]=l.exports},"97aa":function(t,i,e){"use strict";e.r(i);var n=e("f01a"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},c651:function(t,i,e){var n=e("5509c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("01eed58c",n,!0,{sourceMap:!1,shadowMode:!1})},f01a:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{tel:""}},computed:{inputStyle:function(){var t={};return this.tel&&(t.color="#fff",t.backgroundColor=this.$u.color["warning"]),t}},methods:{submit:function(){this.$u.test.mobile(this.tel)&&this.$u.route({url:"pages/template/login/code"})}}};i.default=n}}]);