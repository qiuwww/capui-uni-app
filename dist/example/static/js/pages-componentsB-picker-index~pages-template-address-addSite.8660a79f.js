(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-picker-index~pages-template-address-addSite"],{"06c5":function(e,t,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var a=n(i("6b75"));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e){if("string"===typeof e)return(0,a.default)(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,a.default)(e,t):void 0}}},2219:function(e,t,i){"use strict";i.r(t);var a=i("b227"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},2909:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=u(i("6005")),n=u(i("db904")),s=u(i("06c5")),r=u(i("3427"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return(0,a.default)(e)||(0,n.default)(e)||(0,s.default)(e)||(0,r.default)()}},3427:function(e,t,i){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"37cd":function(e,t,i){"use strict";var a=i("ce20"),n=i.n(a);n.a},"3d68":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={uPopup:i("2fe5").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("u-popup",{attrs:{maskCloseAble:e.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:e.safeAreaInsetBottom,"z-index":e.uZIndex},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[i("v-uni-view",{staticClass:"u-datetime-picker"},[i("v-uni-view",{staticClass:"u-picker-header",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[i("v-uni-view",{staticClass:"u-btn-picker u-btn-picker--tips",style:{color:e.cancelColor},attrs:{"hover-class":"u-opacity","hover-stay-time":150},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getResult("cancel")}}},[e._v(e._s(e.cancelText))]),i("v-uni-view",{staticClass:"u-picker__title"},[e._v(e._s(e.title))]),i("v-uni-view",{staticClass:"u-btn-picker u-btn-picker--primary",style:{color:e.moving?e.cancelColor:e.confirmColor},attrs:{"hover-class":"u-opacity","hover-stay-time":150},on:{touchmove:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getResult("confirm")}}},[e._v(e._s(e.confirmText))])],1),i("v-uni-view",{staticClass:"u-picker-body"},["region"==e.mode?i("v-uni-picker-view",{staticClass:"u-picker-view",attrs:{value:e.valueArr},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},[!e.reset&&e.params.province?i("v-uni-picker-view-column",e._l(e.provinces,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[i("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(t.label))])],1)})),1):e._e(),!e.reset&&e.params.city?i("v-uni-picker-view-column",e._l(e.citys,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[i("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(t.label))])],1)})),1):e._e(),!e.reset&&e.params.area?i("v-uni-picker-view-column",e._l(e.areas,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[i("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(t.label))])],1)})),1):e._e()],1):"time"==e.mode?i("v-uni-picker-view",{staticClass:"u-picker-view",attrs:{value:e.valueArr},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},[!e.reset&&e.params.year?i("v-uni-picker-view-column",e._l(e.years,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[e._v(e._s(t)),e.showTimeTag?i("v-uni-text",{staticClass:"u-text"},[e._v("年")]):e._e()],1)})),1):e._e(),!e.reset&&e.params.month?i("v-uni-picker-view-column",e._l(e.months,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[e._v(e._s(e.formatNumber(t))),e.showTimeTag?i("v-uni-text",{staticClass:"u-text"},[e._v("月")]):e._e()],1)})),1):e._e(),!e.reset&&e.params.day?i("v-uni-picker-view-column",e._l(e.days,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[e._v(e._s(e.formatNumber(t))),e.showTimeTag?i("v-uni-text",{staticClass:"u-text"},[e._v("日")]):e._e()],1)})),1):e._e(),!e.reset&&e.params.hour?i("v-uni-picker-view-column",e._l(e.hours,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[e._v(e._s(e.formatNumber(t))),e.showTimeTag?i("v-uni-text",{staticClass:"u-text"},[e._v("时")]):e._e()],1)})),1):e._e(),!e.reset&&e.params.minute?i("v-uni-picker-view-column",e._l(e.minutes,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[e._v(e._s(e.formatNumber(t))),e.showTimeTag?i("v-uni-text",{staticClass:"u-text"},[e._v("分")]):e._e()],1)})),1):e._e(),!e.reset&&e.params.second?i("v-uni-picker-view-column",e._l(e.seconds,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[e._v(e._s(e.formatNumber(t))),e.showTimeTag?i("v-uni-text",{staticClass:"u-text"},[e._v("秒")]):e._e()],1)})),1):e._e()],1):"selector"==e.mode?i("v-uni-picker-view",{staticClass:"u-picker-view",attrs:{value:e.valueArr},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},[e.reset?e._e():i("v-uni-picker-view-column",e._l(e.range,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[i("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(e.getItemValue(t,"selector")))])],1)})),1)],1):"multiSelector"==e.mode?i("v-uni-picker-view",{staticClass:"u-picker-view",attrs:{value:e.valueArr},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},e._l(e.range,(function(t,a){return e.reset?e._e():i("v-uni-picker-view-column",{key:a},e._l(t,(function(t,a){return i("v-uni-view",{key:a,staticClass:"u-column-item"},[i("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(e.getItemValue(t,"multiSelector")))])],1)})),1)})),1):e._e()],1)],1)],1)},s=[]},6005:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var a=n(i("6b75"));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e))return(0,a.default)(e)}},"6b75":function(e,t,i){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},b227:function(e,t,i){"use strict";var a=i("4ea4");i("99af"),i("c975"),i("d81d"),i("fb6a"),i("a434"),i("a9e3"),i("d3b7"),i("ac1f"),i("5319"),i("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("2909")),s=a(i("1a5c")),r=a(i("fb6d")),u=a(i("db78")),o={name:"u-picker",props:{params:{type:Object,default:function(){return{year:!0,month:!0,day:!0,hour:!1,minute:!1,second:!1,province:!0,city:!0,area:!0,timestamp:!0}}},range:{type:Array,default:function(){return[]}},defaultSelector:{type:Array,default:function(){return[0]}},rangeKey:{type:String,default:""},mode:{type:String,default:"time"},startYear:{type:[String,Number],default:1950},endYear:{type:[String,Number],default:2050},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},defaultTime:{type:String,default:""},defaultRegion:{type:Array,default:function(){return[]}},showTimeTag:{type:Boolean,default:!0},areaCode:{type:Array,default:function(){return[]}},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},value:{type:Boolean,default:!1},zIndex:{type:[String,Number],default:0},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{years:[],months:[],days:[],hours:[],minutes:[],seconds:[],year:0,month:0,day:0,hour:0,minute:0,second:0,reset:!1,startDate:"",endDate:"",valueArr:[],provinces:s.default,citys:r.default[0],areas:u.default[0][0],province:0,city:0,area:0,moving:!1}},mounted:function(){this.init()},computed:{propsChange:function(){return"".concat(this.mode,"-").concat(this.defaultTime,"-").concat(this.startYear,"-").concat(this.endYear,"-").concat(this.defaultRegion,"-").concat(this.areaCode)},regionChange:function(){return"".concat(this.province,"-").concat(this.city)},yearAndMonth:function(){return"".concat(this.year,"-").concat(this.month)},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},watch:{propsChange:function(){var e=this;this.reset=!0,setTimeout((function(){return e.init()}),10)},regionChange:function(e){this.citys=r.default[this.province],this.areas=u.default[this.province][this.city]},yearAndMonth:function(e){this.params.year&&this.setDays()},value:function(e){var t=this;e&&(this.reset=!0,setTimeout((function(){return t.init()}),10))}},methods:{pickstart:function(){},pickend:function(){},getItemValue:function(e,t){if(this.mode==t)return"object"==typeof e?e[this.rangeKey]:e},formatNumber:function(e){return+e<10?"0"+e:String(e)},generateArray:function(e,t){return e=Number(e),t=Number(t),t=t>e?t:e,(0,n.default)(Array(t+1).keys()).slice(e)},getIndex:function(e,t){var i=e.indexOf(t);return~i?i:0},initTimeValue:function(){var e=this.defaultTime.replace(/\-/g,"/");e=e&&-1==e.indexOf("/")?"2020/01/01 ".concat(e):e;var t=null;t=e?new Date(e):new Date,this.year=t.getFullYear(),this.month=Number(t.getMonth())+1,this.day=t.getDate(),this.hour=t.getHours(),this.minute=t.getMinutes(),this.second=t.getSeconds()},init:function(){this.valueArr=[],this.reset=!1,"time"==this.mode?(this.initTimeValue(),this.params.year&&(this.valueArr.push(0),this.setYears()),this.params.month&&(this.valueArr.push(0),this.setMonths()),this.params.day&&(this.valueArr.push(0),this.setDays()),this.params.hour&&(this.valueArr.push(0),this.setHours()),this.params.minute&&(this.valueArr.push(0),this.setMinutes()),this.params.second&&(this.valueArr.push(0),this.setSeconds())):"region"==this.mode?(this.params.province&&(this.valueArr.push(0),this.setProvinces()),this.params.city&&(this.valueArr.push(0),this.setCitys()),this.params.area&&(this.valueArr.push(0),this.setAreas())):"selector"==this.mode?this.valueArr=this.defaultSelector:"multiSelector"==this.mode&&(this.valueArr=this.defaultSelector,this.multiSelectorValue=this.defaultSelector),this.$forceUpdate()},setYears:function(){this.years=this.generateArray(this.startYear,this.endYear),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.years,this.year))},setMonths:function(){this.months=this.generateArray(1,12),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.months,this.month))},setDays:function(){var e=new Date(this.year,this.month,0).getDate();this.days=this.generateArray(1,e);var t=0;t=this.params.year&&this.params.month?2:this.params.month||this.params.year?1:0,this.day>this.days.length&&(this.day=this.days.length),this.valueArr.splice(t,1,this.getIndex(this.days,this.day))},setHours:function(){this.hours=this.generateArray(0,23),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.hours,this.hour))},setMinutes:function(){this.minutes=this.generateArray(0,59),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.minutes,this.minute))},setSeconds:function(){this.seconds=this.generateArray(0,59),this.valueArr.splice(this.valueArr.length-1,1,this.getIndex(this.seconds,this.second))},setProvinces:function(){if(this.params.province){var e="",t=!1;this.areaCode.length?(e=this.areaCode[0],t=!0):e=this.defaultRegion.length?this.defaultRegion[0]:0,s.default.map((function(i,a){(t?i.value==e:i.label==e)&&(e=a)})),this.province=e,this.provinces=s.default,this.valueArr.splice(0,1,this.province)}},setCitys:function(){if(this.params.city){var e="",t=!1;this.areaCode.length?(e=this.areaCode[1],t=!0):e=this.defaultRegion.length?this.defaultRegion[1]:0,r.default[this.province].map((function(i,a){(t?i.value==e:i.label==e)&&(e=a)})),this.city=e,this.citys=r.default[this.province],this.valueArr.splice(1,1,this.city)}},setAreas:function(){if(this.params.area){var e="",t=!1;this.areaCode.length?(e=this.areaCode[2],t=!0):e=this.defaultRegion.length?this.defaultRegion[2]:0,u.default[this.province][this.city].map((function(i,a){(t?i.value==e:i.label==e)&&(e=a)})),this.area=e,this.areas=u.default[this.province][this.city],this.valueArr.splice(2,1,this.area)}},close:function(){this.$emit("input",!1)},change:function(e){this.valueArr=e.detail.value;var t=0;if("time"==this.mode)this.params.year&&(this.year=this.years[this.valueArr[t++]]),this.params.month&&(this.month=this.months[this.valueArr[t++]]),this.params.day&&(this.day=this.days[this.valueArr[t++]]),this.params.hour&&(this.hour=this.hours[this.valueArr[t++]]),this.params.minute&&(this.minute=this.minutes[this.valueArr[t++]]),this.params.second&&(this.second=this.seconds[this.valueArr[t++]]);else if("region"==this.mode)this.params.province&&(this.province=this.valueArr[t++]),this.params.city&&(this.city=this.valueArr[t++]),this.params.area&&(this.area=this.valueArr[t++]);else if("multiSelector"==this.mode){var i=null;this.defaultSelector.map((function(t,a){t!=e.detail.value[a]&&(i=a)})),null!=i&&this.$emit("columnchange",{column:i,index:e.detail.value[i]})}},getResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t={};"time"==this.mode?(this.params.year&&(t.year=this.formatNumber(this.year||0)),this.params.month&&(t.month=this.formatNumber(this.month||0)),this.params.day&&(t.day=this.formatNumber(this.day||0)),this.params.hour&&(t.hour=this.formatNumber(this.hour||0)),this.params.minute&&(t.minute=this.formatNumber(this.minute||0)),this.params.second&&(t.second=this.formatNumber(this.second||0)),this.params.timestamp&&(t.timestamp=this.getTimestamp())):"region"==this.mode?(this.params.province&&(t.province=s.default[this.province]),this.params.city&&(t.city=r.default[this.province][this.city]),this.params.area&&(t.area=u.default[this.province][this.city][this.area])):("selector"==this.mode||"multiSelector"==this.mode)&&(t=this.valueArr),e&&this.$emit(e,t),this.close()},getTimestamp:function(){var e=this.year+"/"+this.month+"/"+this.day+" "+this.hour+":"+this.minute+":"+this.second;return new Date(e).getTime()/1e3}}};t.default=o},ce20:function(e,t,i){var a=i("e506");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("7a09965b",a,!0,{sourceMap:!1,shadowMode:!1})},db904:function(e,t,i){"use strict";function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},e506:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-datetime-picker[data-v-5e1e5ac4]{position:relative;z-index:999}.u-picker-view[data-v-5e1e5ac4]{height:100%;box-sizing:border-box}.u-picker-header[data-v-5e1e5ac4]{width:100%;height:%?90?%;padding:0 %?40?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;font-size:%?30?%;background:#fff;position:relative}.u-picker-header[data-v-5e1e5ac4]::after{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:0}.u-picker__title[data-v-5e1e5ac4]{color:#606266}.u-picker-body[data-v-5e1e5ac4]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-column-item[data-v-5e1e5ac4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#262626;padding:0 %?8?%}.u-text[data-v-5e1e5ac4]{font-size:%?24?%;padding-left:%?8?%}.u-btn-picker[data-v-5e1e5ac4]{padding:%?16?%;box-sizing:border-box;text-align:center;text-decoration:none}.u-opacity[data-v-5e1e5ac4]{opacity:.5}.u-btn-picker--primary[data-v-5e1e5ac4]{color:#1e8df0}.u-btn-picker--tips[data-v-5e1e5ac4]{color:#909399}',""]),e.exports=t},eb22:function(e,t,i){"use strict";i.r(t);var a=i("3d68"),n=i("2219");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("37cd");var r,u=i("f0c5"),o=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"5e1e5ac4",null,!1,a["a"],r);t["default"]=o.exports}}]);