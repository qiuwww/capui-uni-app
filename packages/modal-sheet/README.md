# ModalSheet 模态框

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "van-modal-sheet": "@vant/weapp/modal-sheet/index"
}
```

## 代码演示

### 用法

```html
  <van-modal-sheet
    title="标题"
    show="{{ show }}"
    bind:close="toggle"
    type="mini"
  >
    <van-icon slot="headLeft" name="cross" bind:click="toggle"/>
    <view slot="headRight" bind:tap="showSummary">使用说明</view>
    <view>我是内容</view>
  </van-modal-sheet>
```

```javascript
Page({
  data: {
    show: false,
  },

  toggle() {
      this.setData({
        show: !this.data.show,
      });
  },

  showSummary() {
    wx.showModal({
      title: '使用说明',
      content: '我是使用说明',
      success: () => {
        this.toggle();
      },
      fail: () => {
        this.toggle();
      },
    });
  },
});
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| show | 是否显示弹出层 | _boolean_ | `false` | - |
| title | 标题 | _string_ | - | - |
| z-index | z-index 层级 | _number_ | `100` | - |
| overlay | 是否显示遮罩层 | _boolean_ | - | - ||
| close-on-click-action | 是否在点击选项后关闭 | _boolean_ | `true` | - |
| close-on-click-overlay | 点击遮罩是否关闭菜单 | _boolean_ | - | - |
| safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | _boolean_ | `true` | - |
| customClass | 自定义样式 | _string_ | - | - |
| type|弹框高度|string｜-（'mini、normal、large'）｜

### Slots
| 名称    | 说明                       |
| ------- | -------------------------- |
| headLeft | 标题左边插槽    |
| headRight   | 标题右边插槽 |
