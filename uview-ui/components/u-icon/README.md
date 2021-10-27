# Icon 图标

## 使用说明

[原Icon图标文档地址](https://www.uviewui.com/components/icon.html)

本次主要在原有图标的基础上新增capui的图标库的一些图标。

原有的图标，默认的`custom-prefix`为`uicon`，新增的icon需要自己添加`custom-prefix="capui"`。

## 新增capui的图标字体库

1. [参考iconfont](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)
2. [iconfont的仓库地址](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2843205)

这里继续原来的icon的设计方案，仍旧使用**unicode模式**引用。

### 使用capui的图标

1. 这里区分于默认的组件库的图表库，都需要添加`custom-prefix="capui"`这个前缀说明；
2. 这里区别于`https://www.uviewui.com/guide/customIcon.html`，这里属于capui的通用图标，不属于单个项目，引入的图表库文件做了兼容和提前引入，不需要自己再次引入；

```html
<u-icon name="toastshibai" custom-prefix="capui" size="40" color="red"></u-icon>
```

### 目前总共添加的图标如下：

```js
  // capui的图标
const capuiList = [{
    name: 'toastshibai',
    prefix: 'capui'
  },
  {
    name: 'toastchenggong',
    prefix: 'capui'
  },
  {
    name: 'searchbaricon',
    prefix: 'capui'
  },
  {
    name: 'biaodanyoujiantou',
    prefix: 'capui'
  },
  {
    name: 'noticebarerror',
    prefix: 'capui'
  },
  {
    name: 'noticebartips',
    prefix: 'capui'
  },
  {
    name: 'noticebarwarning',
    prefix: 'capui'
  },
  {
    name: 'noticebardelete',
    prefix: 'capui'
  },
  {
    name: 'noticebarcorrect',
    prefix: 'capui'
  },
  {
    name: 'noticebarnews',
    prefix: 'capui'
  },
  {
    name: 'navbarback',
    prefix: 'capui'
  },
  {
    name: 'listmust',
    prefix: 'capui'
  },
  {
    name: 'navbarclose',
    prefix: 'capui'
  },
  {
    name: 'navbarnews',
    prefix: 'capui'
  },
  {
    name: 'navbaradd',
    prefix: 'capui'
  },
  {
    name: 'kejian',
    prefix: 'capui'
  },
  {
    name: 'yincang',
    prefix: 'capui'
  }
]
```