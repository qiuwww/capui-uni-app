# 介绍

<div class="block header">
  <img class="logo" style="width: 100px; height: 100px; box-shadow: none;" src="https://www.uviewui.com/common/logo.png">
  <p class="title" style="margin: 0; font-size: 32px; line-height: 60px;">uView</p>
  <p class="overview">多平台快速开发的UI框架</p>
</div>

## 来由

uni-app2018年初发布以来，一直蓬勃发展，一派欣欣向荣，社区也是人声鼎沸，众望所归。
<br/>

因此，uView应运而生，uView的目标是成为uni-app生态最优秀的UI框架。
<br/>

关于uView的取名来由，首字母u来自于uni-app首字母，uni-app是基于Vue.js，Vue和View(延伸为UI、视图之意)同音，同时view组件uni-app中 最基础，最重要的组件，故取名uView，表达源于uni-app和Vue之意，同时在此也对它们表示感谢。

## 适用领域

uView是uni-app生态专用的UI框架，uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自uni-app网)。

## 版权信息

uView遵循[MIT](https://baike.baidu.com/item/MIT/10772952)开源协议，意味着您无需支付任何费用，也无需授权，即可将uView应用到您的产品中。
<br/>

注意：这并不意味着您可以将uView应用到非法的领域，比如涉及赌博，暴力等方面。如因此产生纠纷等法律问题，uView不承担任何责任。

## 本地化二次封装的缘由

### ui统一的问题

1. 需要符合当前的ui标准，不然每次开发都需要从非常细节的地方来写样式；

### 使用中遇到的一些问题

1. 小程序，直接写原生可能会有一些问题，不如用uni-app来写；
2. uni-app和uni ui组件功能单一，只提供了基础的功能；
3. 微信小程序官方的组件部分功能不支持，如[sticky组件](https://developers.weixin.qq.com/miniprogram/dev/extended/component-plus/sticky.html)；
   1. [在ios下的失效问题](https://segmentfault.com/a/1190000039366740)；
   2. [在Android10及以上机型上，扩展组件中的Sticky失效](https://developers.weixin.qq.com/community/develop/doc/0002aaede6cc48c6ce3aa29d451c00?_at=1592174015295)
4. `indicator-dots`，`swiper` 的指示器，这个就不能定制位置，定制样式；
5. `Tabbar` 自定义导航栏；
6. 官方的 `sticky` 都不好用；
7. 这里的样式修改非常的麻烦；
8. `swiper` 轮播图，不能嵌入别的东西，只能是图片和文字？
9. `van-weapp，swiper` 文档都没有；
10. 小程序开发，可以转为 h5 开发，调试/开发都方便很多。
11. <https://ext.dcloud.net.cn/?page=3>，组件挺受欢迎的；
12. 添加 webview 公用组件，添加 token 获取，分享设置；
    1. 给 url 添加 token 等其他参数；
    2. 添加url设置的函数；
