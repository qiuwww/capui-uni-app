# Icon 图标

## 使用说明

[原 Icon 图标文档地址](https://www.uviewui.com/components/icon.html)

本次主要在原有图标的基础上新增 capui 的图标库的一些图标。

原有的图标，默认的`custom-prefix`为`uicon`，新增的 icon 需要自己添加`custom-prefix="capui"`。

## 新增 capui 的图标字体库

1. [参考 iconfont](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)
2. [iconfont 的仓库地址](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2843205)

这里继续原来的 icon 的设计方案，仍旧使用**unicode 模式**引用。

### 使用 capui 的图标

1. 这里区分于默认的组件库的图表库，都需要添加`custom-prefix="capui"`这个前缀说明；
2. 这里区别于`https://www.uviewui.com/guide/customIcon.html`，这里属于 capui 的通用图标，不属于单个项目，引入的图表库文件做了兼容和提前引入，不需要自己再次引入；

```html
<u-icon name="toastshibai" custom-prefix="capui" size="40" color="red"></u-icon>
```

### 目前总共添加的图标如下：

```js
// capui的图标
const capuiList = [
  {
    name: 'toastshibai',
    prefix: 'capui',
  },
  {
    name: 'toastchenggong',
    prefix: 'capui',
  },
  {
    name: 'searchbaricon',
    prefix: 'capui',
  },
  {
    name: 'biaodanyoujiantou',
    prefix: 'capui',
  },
  {
    name: 'noticebarerror',
    prefix: 'capui',
  },
  {
    name: 'noticebartips',
    prefix: 'capui',
  },
  {
    name: 'noticebarwarning',
    prefix: 'capui',
  },
  {
    name: 'noticebardelete',
    prefix: 'capui',
  },
  {
    name: 'noticebarcorrect',
    prefix: 'capui',
  },
  {
    name: 'noticebarnews',
    prefix: 'capui',
  },
  {
    name: 'navbarback',
    prefix: 'capui',
  },
  {
    name: 'listmust',
    prefix: 'capui',
  },
  {
    name: 'navbarclose',
    prefix: 'capui',
  },
  {
    name: 'navbarnews',
    prefix: 'capui',
  },
  {
    name: 'navbaradd',
    prefix: 'capui',
  },
  {
    name: 'kejian',
    prefix: 'capui',
  },
  {
    name: 'yincang',
    prefix: 'capui',
  },
];
```

## 对于 icon，需要再定义一组自己的 iconfont，比如 capui-，主要开发过程如下

组件库的 icon 设置

参考：`capui-uni-app/uview-ui/iconfont.css`

uni-app 的 icon：`https://uniapp.dcloud.io/component/icon?id=icon`

1. 修改 iconfont 仓库：`https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2843205`
2. 重新生成 iconfont 文件，复制 Unicode 的代码地址到：`uView/uview-ui/capui-iconfont.scss`
3. 增加映射关系，在 capui-iconfont.scss 内添加：

```css
&-down:before {
  content: '\e728';
}
```

4. 修改：`uView/pages/componentsA/icon/index.vue`的配置；
5. npm link 到项目；
   1. 小程序项目，需要重启；
