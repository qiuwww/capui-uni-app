<p align="center">
  <img alt="logo" src="https://static.92jkys.com/third_files/GuoYao/202003/11/1274bd068b484d5aadfb039d4c8807a2.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center">Capsule Mini Program - 轻量、可靠的小程序 UI 组件库</h3>

<p align="center">
  🔥 <a href="https://static.92jkys.com/f2e/capui-mini-program/#/intro">文档网站</a>
  &nbsp;
  &nbsp;
  🚀 <a href="https://capsule-mobile.92jkys.com/v1/#/zh-CN/" target="_blank">移动端版</a>
</p>

---

### 介绍

Capsule-Mini-Program 是智云健康前端团队及设计团队开发的移动端组件库，基于 vant weapp，于 2020 年开始。

## 预览

扫描下方小程序二维码，体验组件库示例：

<img src="http://static.92jkys.com/third_files/GuoYao/202011/24/33ce1513e86c40bc975d8e90a9589418.jpg" width="200" height="200" style="margin-top: 10px;" >

## 使用之前

使用 CapUi Mini Program 前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

### 方式一. 通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
# 通过 npm 安装
npm i @vant/weapp -S --production

# 通过 yarn 安装
yarn add @vant/weapp --production

# 安装 0.x 版本
npm i vant-weapp -S --production
```

### 方式二. 下载代码

直接通过 git 下载 Vant Weapp 源代码，并将`dist`目录拷贝到自己的项目中

```bash
git clone https://github.com/youzan/vant-weapp.git
```

## 使用组件

以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "van-button": "/path/to/vant-weapp/dist/button/index"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<van-button type="primary">按钮</van-button>
```

## 在开发者工具中预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，把`vant-weapp/example`目录添加进去就可以预览示例了。

PS：关于 `van-area` Area 省市区选择组件，地区数据初始化可以直接在云开发环境中导入`vant-weapp/example/database_area.JSON`文件使用

## 基础库版本

最低支持到小程序基础库 2.2.3 版本

## Merge request 规范

如果遇到问题，建议保持你的 MR 足够小。保证一个 MR 只解决一个问题或只添加一个功能 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定 在 MR 中请添加合适的描述，并关联相关的 Issue

### Merge request 流程

1. clone 主仓库，如果已经 clone 过，请同步主仓库的最新代码
2. 基于 clone 后仓库的 dev 分支新建一个分支，比如 feature/button_color
3. 在新分支上进行开发，开发完成后，新建 merge request 到主仓库的 dev 分支
4. 找相应的人员帮你 Review，在 Review 通过后被合并到主仓库

## 目录结构

- 仓库的组件代码位于 _package_ 下，每个组件一个文件夹
- docs 目录下是文档网站的代码，本地开发时可以在目录下运行 npm run dev 开启文档网站
- example 是小程序端查看组件的目录例子项目主要目录如下：
