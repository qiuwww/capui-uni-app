# TabsSwiper 全屏选项卡

## 使用说明

[原TabsSwiper 全屏选项卡地址](https://www.uviewui.com/components/tabsSwiper.html)

## 内容高度不能自适应

1. 需要自己去计算出子元素高度，动态的赋值给外层元素；

```js
// uni-app相关文档：https://uniapp.dcloud.io/api/ui/nodes-info?id=selectorqueryselect
export const getBoundingClientRect = (selector, context) => {
  return new Promise((resolve, reject) => {
    try {
      const query = uni.createSelectorQuery().in(context);
      query
        .select(selector)
        .boundingClientRect(data => {
          resolve(data);
        })
        .exec();
    } catch (e) {
      reject(e);
    }
  });
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| gutter | 单个tab标签的左右内边距之和，单位rpx| String/ Number | 32 |
