# 基于 uView ui 组件库的二次开发——capui-uni-app

[github 仓库地址](https://github.com/qiuwww/capui-uni-app.git)

## 是什么

1. [uni-app 是什么](https://uniapp.dcloud.io/README)，可以理解为一个框架（自有组件库，自成体系），也可以理解为一个工具（编译结果为别的端的代码），类似的有[Taro](https://docs.taro.zone/docs/README)；
2. uni-app 的组件说明：
   1. 内置组件，等于内置标签，如`view`、`text`等，[具体参照](https://uniapp.dcloud.io/component/README)；
   2. [扩展组件库 uni-ui](https://uniapp.dcloud.io/component/README?id=uniui)，缺点需要逐个导入，也不是很全；
   3. 其他非官方的三方组件库，如 `uview ui`；

## 本次二次封装的缘由

1. 本次基于 `uView ui` 开发，1.X.X 版本基本稳定，基于这个开发问题不大，2.X.X 版本还在开发，暂时也不能用；

2. 仓库地址：[capui-uni-app](https://github.com/qiuwww/capui-uni-app.git)，主分支：reDev-master；

3. 命名为 **capui-uni-app**，表示专门给 uni-app 项目使用的，符合[capui 标准](https://lanhuapp.com/web/#/item/project/stage?type=share_mark&pid=746d6231-6086-48d2-9451-1c0ede86abb1&activeSectionId=&toRouteName=ItemProjectEditor&teamId=761ca69b-66c9-4098-a8c9-845722b52b89&userId=5159da50-e5ef-49ef-86be-9d4d1f994bfd&param=none)的组件库，是一个全端可用的组件库，不过目前主要处理了用在小程序的组件的兼容；

4. 组件库的特点：

   1. vue 写成的；
   2. 一套代码，多端适用，app、h5、各种小程序都适用；
   3. [uni-app 组件受欢迎排行](https://ext.dcloud.net.cn/?page=3)。

5. 最主要的还是 **ui 统一的问题**， 需要符合当前的 ui 标准，提高开发效率。

### 使用基础组件开发过程中遇到的一些问题

1. `uni-app基础组件` 和 `uni ui` 组件功能单一，只提供了基础的功能；
2. 官方的 `sticky` 都不好用，微信小程序官方的组件部分功能也不支持，如[sticky 组件](https://developers.weixin.qq.com/miniprogram/dev/extended/component-plus/sticky.html)；
   1. [在 ios 下的失效问题](https://segmentfault.com/a/1190000039366740)；
   2. [在 Android10 及以上机型上，扩展组件中的 Sticky 失效](https://developers.weixin.qq.com/community/develop/doc/0002aaede6cc48c6ce3aa29d451c00?_at=1592174015295)
3. `indicator-dots`、`swiper` 的指示器、`Tabbar` 自定义导航栏，这些也不太好用；
   1. `swiper` 轮播图，不能嵌入别的东西，只能是图片和文字？
4. 业务组件抽离之后，也不知道放到哪里，没法给别人复用；
5. 小程序组件开发，可以转为 h5 开发，调试/开发都方便很多（开发的时候编译到 h5）。

## 开发 & 发布

### 项目整体结构

```yaml
.                           # 整体项目，是组件库的示例项目，可以编译到多端
├── App.vue
├── LICENSE
├── README.md
├── common
├── components
├── docs-example            # 文档系统
    ├── README.md
    ├── babel.config.js
    ├── build
    ├── dist
    ├── node_modules
    ├── package.json
    ├── public
    ├── src
    ├── vue.config.js
    └── yarn.lock
├── main.js
├── manifest.json
├── package-lock.json
├── package.json
├── pages
├── pages.json
├── src
├── static
├── store
├── template.h5.html
├── uni.scss
├── unpackage               # 中间编译结果和build结果都在这里
├── uview-ui                # 组件库具体内容，vue编写，不需要编译就可以用在uni-app项目中，修改后需要修改版本号发不到npm仓库中
    ├── LICENSE
    ├── README.md
    ├── capui-iconfont.scss
    ├── components
    ├── docs
    ├── iconfont.css
    ├── index.js
    ├── index.scss
    ├── libs
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── theme.scss
├── vue.config.js
└── yarn.lock
```

1. 整体 capui-uni-app 项目分三个部分：

   1. 整体项目 capui-uni-app，运行打开的是示例项目，目前是使用 HBuilder 的方式运行，cli 方式对项目结构改动较大；
      1. HBuilder 左侧目录 -> 导入 -> 从本地目录导入 -> 左键选中项目（单击一下） -> 顶部工具栏-运行 -> 可以选择运行到哪个端；
         1. 一般开发可以选择运行到**浏览器**，方便开发&调试；
         2. 运行到微信小程序开发工具-**微信开发工具**，运行成功通过，使用开发工具打开`/capui-uni-app/unpackage/dist/dev/mp-weixin`；
         3. 运行到**手机模拟器**，android 需要自己安装模拟器，ios 可以直接运行；
   2. 打开`docs-example`是文档系统，本次新增的主要内容；
   3. 发布 npm 包的是`uview-ui`，这是真正的组件库，与一般的组件使用类似，不需要编译，直接发布；

2. 打开示例项目 HBuilder 中选中`capui-uni-app`目录，选择运行到**浏览器**中；
   1. 这个时候打开的是一个一般的 vue 项目，使用`uview-ui`组件库写的 uni-app 项目；
   2. 访问地址：`http://localhost:8181/#/`，浏览器的方式方便调试代码；
3. 打开文档项目，打开目录`docs-example`；
   1. 编辑项目的文档与示例，运行`yarn dev`；
   2. 访问地址：`http://localhost:8080/#/intro`；
   3. 更新 routes，`capui-uni-app/docs-example/src/router/slide-nav.js`；
   4. 更新文档内容，目前没有更新的用的都是`正在开发...`；

### 更新组件&使用文档

1. **修改组件的样式及逻辑**，直接修改`uview-ui/components`，主要是修改样式和基础的默认值，基础类型等；
2. 修改文档系统；
   1. 修改 route：`capui-uni-app/docs-example/src/router/slide-nav.js`，相关分类可以参考[原项目文档分类](https://www.uviewui.com/components/intro.html)；
   2. 文档一般与组件在同一个文件的`README.md`，如果是特殊的组件的文档就在`capui-uni-app/uview-ui/docs`中；

### git 提交规范

目标分支：`master-reDev`，也就是代码合并的最终分支。

如何开发一个新功能或者更新文档：

1. 选择分支：
   1. 如果是更新基础文档可以统一在`reDev-qatest-base`分支上进行；
   2. 如果是修改具体组件、相关的文档或者示例项目，可以创建或者拉取如`reDev-qatest-button`，来修改 button 组件相关内容；
2. 测试合并，可以修改后在示例项目查看修改结果，没有问题的话 merge 到`reDev-qatest`进行统一测试，最后测试修改完成后合并到`master-reDev`，打包发布在线文档、发布 uview-ui 组件库的 npm 包；
   1. 如果想要测试一下`uview-ui`包，可以发布 beta 版本来安装测试；

需要定期合并 uView 官网 的 fix；

### npm 包的开发与发布

#### link 到正在开发的项目中

1. 在`capui-uni-app/uview-ui`目录运行`npm link`；
2. 在需要的项目中`npm link @zyf2e/capui-uni-app`；
   1. 需要发布的时候需要安装`@zyf2e/capui-uni-app`。

#### 发布 npm 包

1. 在`capui-uni-app/uview-ui`目录中更新版本号，运行`npm login & npm publish`；
2. 不确定的功能最好提交 **beta 版本**，自测没问题了再发布，防止别人没注意更新到了这个版本。

### 安装使用

1. [HBuilder 的 easycom 方式引入组件](https://uniapp.dcloud.io/collocation/pages?id=easycom)；
2. 直接下载 uview-ui 包，然后复制文件夹到项目的 src 目录下，这样下次需要更新的时候不方便边处理；
3. npm 方式安装，升级`uview-ui`到指定的版本，就可以直接使用了。

### 目前已修改的部分组件

- u-icon
- u-button
- u-tabs-swiper
- u-swiper
- u-search
- u-image
- u-loadmore
- u-tag
- u-badge
- u-sticky

## 后续的规划

1. 依照 ui 规范 继续修改相关组件，同时更新相对应的文档；
2. 发布文档系统到线上；
3. 逐步优化已有组件；
4. 抽离业务组件到组件库方便使用：
   1. 支付组件添加；
   2. common/webview 组件抽离；
   3. ...

### 小程序的公共方法包提取，相关 utils

1. 公共的分享；
2. 打开 pdf 的方法；
3. 注入 h5 参数方法；
4. 小程序埋点方式方法；
5. ...

## 主要参考文档

1. [uni-app 官网](https://uniapp.dcloud.io/frame?id=%E5%88%A4%E6%96%AD%E5%B9%B3%E5%8F%B0)
2. [关于 uni-app 的 ui 库、ui 框架、ui 组件](https://ask.dcloud.net.cn/article/35489)
3. [uni-app 原生组件的 h5 演示使用](https://hellouniapp.dcloud.net.cn/pages/component/cover-view/cover-view)
4. [md-loader](https://gitee.com/snake_yl/md-vue-loader/)
5. [markdown-拓展](https://vuepress.vuejs.org/zh/guide/markdown.html#%E7%9B%AE%E5%BD%95)
6. [使用 cli 创建项目和使用 HBuilderX 可视化界面创建项目有什么区别](https://uniapp.dcloud.io/quickstart-cli?id=%e4%bd%bf%e7%94%a8cli%e5%88%9b%e5%bb%ba%e9%a1%b9%e7%9b%ae%e5%92%8c%e4%bd%bf%e7%94%a8hbuilderx%e5%8f%af%e8%a7%86%e5%8c%96%e7%95%8c%e9%9d%a2%e5%88%9b%e5%bb%ba%e9%a1%b9%e7%9b%ae%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab)
7. [npm 发包指南](https://segmentfault.com/a/1190000022116379)
