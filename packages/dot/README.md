# Dot 徽标

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "van-dot": "@vant/weapp/dot/index"
}
```

## 代码演示

### 基础角标

```html
<van-dot />
```

### 数字角标

```html
<van-dot type="num" num="9" />
```

### 文本角标

```html
<van-dot value="两位" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 角标类型 | String | `common` `num`为数字角标 |
| num | 数字角标数字 | Sting、Number | - |
| value | 中文角标值，type 为`num`时不生效 | Sting | - |

### 外部样式类

| 类名         | 说明                         |
| ------------ | ---------------------------- |
| custom-class | 根节点样式类                 |
| custom-style | 根节点样式属性，可定义背景色 |
