# Search 搜索

## 修改了默认的搜索按钮

	// 左边输入框的图标，可以为uView图标名称或图片路径
		searchIcon: {
			type: String,
			default: 'searchbaricon'
		},
    searchIconPrefix: {
			type: String,
			default: 'capui'
		}

## 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "van-search": "@vant/weapp/search/index"
}
```

## 代码演示

### 基础用法

`van-search` 中，value 用于控制搜索框中的文字。background 可以自定义搜索框外部背景色。

```html
<van-search value="{{ value }}" placeholder="请输入搜索关键词" />
```

### 事件监听

`van-search` 提供了 search 和 cancel 事件。search 事件在用户点击键盘上的搜索按钮触发。cancel 事件在用户点击搜索框右侧取消按钮时触发

```html
<van-search
  value="{{ value }}"
  placeholder="请输入搜索关键词"
  show-action
  bind:search="onSearch"
  bind:cancel="onCancel"
/>
```

### 搜索框内容对齐

通过 `input-align` 属性可以设置搜索框内容的对齐方式

```html
<van-search
  value="{{ value }}"
  input-align="center"
  placeholder="请输入搜索关键词"
/>
```

### 禁用搜索框

通过 `disabled` 属性可以将组件设置为禁用状态

```html
<van-search disabled value="{{ value }}" placeholder="请输入搜索关键词" />
```

### 自定义背景色

通过`background`属性可以设置搜索框外部的背景色，通过`shape`属性设置搜索框的形状，可选值为`round`

```html
<van-search
  value="{{ value }}"
  shape="round"
  background="#4fc08d"
  placeholder="请输入搜索关键词"
/>
```

### 自定义按钮

`van-search` 支持自定义右侧取消按钮，使用名字为 action 的 slot，并设置 use-action-slot 为 true 即可。

```html
<van-search
  value="{{ value }}"
  label="地址"
  placeholder="请输入搜索关键词"
  use-action-slot
  bind:change="onChange"
  bind:search="onSearch"
>
  <view slot="action" bind:tap="onClick">搜索</view>
</van-search>
```

```javascript
Page({
  data: {
    value: '',
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
    Toast('搜索' + this.data.value);
  },
});
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| searchBgColor | 整个模块的背景色 | _string_ | #ffffff | - |

### Events

| 事件名      | 说明               | 参数                     |
| ----------- | ------------------ | ------------------------ |
| bind:search | 确定搜索时触发     | event.detail: 当前输入值 |
| bind:change | 输入内容变化时触发 | event.detail: 当前输入值 |
| bind:cancel | 取消搜索搜索时触发 | -                        |
| bind:focus  | 输入框聚焦时触发   | -                        |
| bind:blur   | 输入框失焦时触发   | -                        |
| bind:clear  | 点击清空控件时触发 | -                        |

### Slot

| 名称 | 说明 |
| --- | --- |
| action | 自定义搜索框右侧按钮，需要在`use-action-slot`为 true 时才会显示 |
| label | 自定义搜索框左侧文本 |
| left-icon | 自定义输入框左侧图标，需要在`use-left-icon-slot`为 true 时才会显示 |
| right-icon | 自定义输入框右侧图标，需要在`use-right-icon-slot`为 true 时才会显示 |

### 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| custom-class | 根节点样式类   |
| field-class  | 搜索框样式类   |
| input-class  | 输入框样式类   |
| cancel-class | 取消按钮样式类 |
