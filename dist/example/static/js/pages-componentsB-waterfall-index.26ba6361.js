(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-waterfall-index"],{"038b":function(t,i,e){var n=e("9dbc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("ff6fe776",n,!0,{sourceMap:!1,shadowMode:!1})},"07e9":function(t,i,e){"use strict";var n=e("286a"),a=e.n(n);a.a},1655:function(t,i,e){"use strict";e.r(i);var n=e("752c"),a=e("77121");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("87c0");var r,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"290ad067",null,!1,n["a"],r);i["default"]=c.exports},1971:function(t,i,e){"use strict";e.r(i);var n=e("fc5d"),a=e("6428");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("a421"),e("07e9");var r,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"110db3af",null,!1,n["a"],r);i["default"]=c.exports},2716:function(t,i,e){"use strict";var n=e("4ea4");e("99af"),e("c740"),e("fb6a"),e("a434"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var a=n(e("1da1")),s={name:"u-waterfall",props:{value:{type:Array,required:!0,default:function(){return[]}},addTime:{type:[Number,String],default:200},idKey:{type:String,default:"id"}},data:function(){return{leftList:[],rightList:[],tempList:[],children:[]}},watch:{copyFlowList:function(t,i){var e=Array.isArray(i)&&i.length>0?i.length:0;this.tempList=this.tempList.concat(this.cloneData(t.slice(e))),this.splitData()}},mounted:function(){this.tempList=this.cloneData(this.copyFlowList),this.splitData()},computed:{copyFlowList:function(){return this.cloneData(this.value)}},methods:{splitData:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var e,n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.tempList.length){i.next=2;break}return i.abrupt("return");case 2:return i.next=4,t.$uGetRect("#u-left-column");case 4:return e=i.sent,i.next=7,t.$uGetRect("#u-right-column");case 7:if(n=i.sent,a=t.tempList[0],a){i.next=11;break}return i.abrupt("return");case 11:e.height<n.height?t.leftList.push(a):e.height>n.height?t.rightList.push(a):t.leftList.length<=t.rightList.length?t.leftList.push(a):t.rightList.push(a),t.tempList.splice(0,1),t.tempList.length&&setTimeout((function(){t.splitData()}),t.addTime);case 14:case"end":return i.stop()}}),i)})))()},cloneData:function(t){return JSON.parse(JSON.stringify(t))},clear:function(){this.leftList=[],this.rightList=[],this.$emit("input",[]),this.tempList=[]},remove:function(t){var i=this,e=-1;e=this.leftList.findIndex((function(e){return e[i.idKey]==t})),-1!=e?this.leftList.splice(e,1):(e=this.rightList.findIndex((function(e){return e[i.idKey]==t})),-1!=e&&this.rightList.splice(e,1)),e=this.value.findIndex((function(e){return e[i.idKey]==t})),-1!=e&&this.$emit("input",this.value.splice(e,1))},modify:function(t,i,e){var n=this,a=-1;if(a=this.leftList.findIndex((function(i){return i[n.idKey]==t})),-1!=a?this.leftList[a][i]=e:(a=this.rightList.findIndex((function(i){return i[n.idKey]==t})),-1!=a&&(this.rightList[a][i]=e)),a=this.value.findIndex((function(i){return i[n.idKey]==t})),-1!=a){var s=this.cloneData(this.value);s[a][i]=e,this.$emit("input",s)}}}};i.default=s},"286a":function(t,i,e){var n=e("a2db");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("6975e354",n,!0,{sourceMap:!1,shadowMode:!1})},4862:function(t,i,e){var n=e("e730");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("47893371",n,!0,{sourceMap:!1,shadowMode:!1})},6428:function(t,i,e){"use strict";e.r(i);var n=e("99aa"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"752c":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-waterfall"},[e("v-uni-view",{staticClass:"u-column",attrs:{id:"u-left-column"}},[t._t("left",null,{leftList:t.leftList})],2),e("v-uni-view",{staticClass:"u-column",attrs:{id:"u-right-column"}},[t._t("right",null,{rightList:t.rightList})],2)],1)},s=[]},77121:function(t,i,e){"use strict";e.r(i);var n=e("2716"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"87c0":function(t,i,e){"use strict";var n=e("4862"),a=e.n(n);a.a},"99aa":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{loadStatus:"loadmore",flowList:[],list:[{price:35,title:"北国风光，千里冰封，万里雪飘",shop:"李白杜甫白居易旗舰店",image:"http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg"},{price:75,title:"望长城内外，惟余莽莽",shop:"李白杜甫白居易旗舰店",image:"http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg"},{price:385,title:"大河上下，顿失滔滔",shop:"李白杜甫白居易旗舰店",image:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"},{price:784,title:"欲与天公试比高",shop:"李白杜甫白居易旗舰店",image:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg"},{price:7891,title:"须晴日，看红装素裹，分外妖娆",shop:"李白杜甫白居易旗舰店",image:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg"},{price:2341,shop:"李白杜甫白居易旗舰店",title:"江山如此多娇，引无数英雄竞折腰",image:"http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg"},{price:661,shop:"李白杜甫白居易旗舰店",title:"惜秦皇汉武，略输文采",image:"http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg"},{price:1654,title:"唐宗宋祖，稍逊风骚",shop:"李白杜甫白居易旗舰店",image:"http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg"},{price:1678,title:"一代天骄，成吉思汗",shop:"李白杜甫白居易旗舰店",image:"http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg"},{price:924,title:"只识弯弓射大雕",shop:"李白杜甫白居易旗舰店",image:"http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg"},{price:8243,title:"俱往矣，数风流人物，还看今朝",shop:"李白杜甫白居易旗舰店",image:"http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg"}]}},onLoad:function(){this.addRandomData()},onReachBottom:function(){var t=this;this.loadStatus="loading",setTimeout((function(){t.addRandomData(),t.loadStatus="loadmore"}),1e3)},methods:{addRandomData:function(){for(var t=0;t<10;t++){var i=this.$u.random(0,this.list.length-1),e=JSON.parse(JSON.stringify(this.list[i]));e.id=this.$u.guid(),this.flowList.push(e)}},remove:function(t){this.$refs.uWaterfall.remove(t)},clear:function(){this.$refs.uWaterfall.clear()}}};i.default=n},"9dbc":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* page不能写带scope的style标签中，否则无效 */uni-page-body[data-v-110db3af]{background-color:#f0f0f0}body.?%PAGE?%[data-v-110db3af]{background-color:#f0f0f0}",""]),t.exports=i},a2db:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.demo-warter[data-v-110db3af]{border-radius:8px;margin:5px;background-color:#fff;padding:8px;position:relative}.u-close[data-v-110db3af]{position:absolute;top:%?32?%;right:%?32?%}.demo-image[data-v-110db3af]{width:100%;border-radius:4px}.demo-title[data-v-110db3af]{font-size:%?30?%;margin-top:5px;color:#262626;word-break:break-all}.demo-tag[data-v-110db3af]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:5px}.demo-tag-owner[data-v-110db3af]{background-color:#ff4e47;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?4?% %?14?%;border-radius:%?50?%;font-size:%?20?%;line-height:1}.demo-tag-text[data-v-110db3af]{border:1px solid #1e8df0;color:#1e8df0;margin-left:10px;border-radius:%?50?%;line-height:1;padding:%?4?% %?14?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?50?%;font-size:%?20?%}.demo-price[data-v-110db3af]{font-size:%?30?%;color:#ff4e47;margin-top:5px}.demo-shop[data-v-110db3af]{font-size:%?22?%;color:#909399;margin-top:5px}',""]),t.exports=i},a421:function(t,i,e){"use strict";var n=e("038b"),a=e.n(n);a.a},e730:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-waterfall[data-v-290ad067]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.u-column[data-v-290ad067]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;height:auto}.u-image[data-v-290ad067]{width:100%}',""]),t.exports=i},fc5d:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uWaterfall:e("1655").default,uLazyLoad:e("e7c2").default,uIcon:e("4f37").default,uLoadmore:e("9aeb").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"wrap"},[e("u-waterfall",{ref:"uWaterfall",scopedSlots:t._u([{key:"left",fn:function(i){var n=i.leftList;return t._l(n,(function(i,n){return e("v-uni-view",{key:n,staticClass:"demo-warter"},[e("u-lazy-load",{attrs:{threshold:"-450","border-radius":"10",image:i.image,index:n}}),e("v-uni-view",{staticClass:"demo-title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"demo-price"},[t._v(t._s(i.price)+"元")]),e("v-uni-view",{staticClass:"demo-tag"},[e("v-uni-view",{staticClass:"demo-tag-owner"},[t._v("自营")]),e("v-uni-view",{staticClass:"demo-tag-text"},[t._v("放心购")])],1),e("v-uni-view",{staticClass:"demo-shop"},[t._v(t._s(i.shop))]),e("v-uni-view",{staticClass:"u-close"},[e("u-icon",{attrs:{name:"close-circle-fill",color:"#fa3534",size:"34"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove(i.id)}}})],1)],1)}))}},{key:"right",fn:function(i){var n=i.rightList;return t._l(n,(function(i,n){return e("v-uni-view",{key:n,staticClass:"demo-warter"},[e("u-lazy-load",{attrs:{threshold:"-450","border-radius":"10",image:i.image,index:n}}),e("v-uni-view",{staticClass:"demo-title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"demo-price"},[t._v(t._s(i.price)+"元")]),e("v-uni-view",{staticClass:"demo-tag"},[e("v-uni-view",{staticClass:"demo-tag-owner"},[t._v("自营")]),e("v-uni-view",{staticClass:"demo-tag-text"},[t._v("放心购")])],1),e("v-uni-view",{staticClass:"demo-shop"},[t._v(t._s(i.shop))]),e("v-uni-view",{staticClass:"u-close"},[e("u-icon",{attrs:{name:"close-circle-fill",color:"#fa3534",size:"34"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove(i.id)}}})],1)],1)}))}}]),model:{value:t.flowList,callback:function(i){t.flowList=i},expression:"flowList"}}),e("u-loadmore",{attrs:{"bg-color":"rgb(240, 240, 240)",status:t.loadStatus},on:{loadmore:function(i){arguments[0]=i=t.$handleEvent(i),t.addRandomData.apply(void 0,arguments)}}})],1)},s=[]}}]);