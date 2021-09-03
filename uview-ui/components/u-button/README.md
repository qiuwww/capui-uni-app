# Button 按钮

<!-- [主要参考](https://www.uviewui.com/components/button.html) -->

## 设置尺寸

button组件的size，可选值为default(默认)、large、medium(中等尺寸)、small和mini(小尺寸)

```html
<u-button size="default">default</u-button>
<u-button size="large">large</u-button>
<u-button size="medium">medium</u-button>
<u-button size="mini">mini</u-button>
<u-button size="small">small</u-button>
```

## 添加icon

通过slot添加。

```html
<u-button size="medium">
  <u-icon name="checkbox-mark"></u-icon>
  <span>medium</span>
</u-button>
```

## 支持自定义样式，通过style（所有标签共有属性）来设置

```html
<u-button size="medium" :style="{backgroundColor: 'red'}">
  支持自定义样式
</u-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| size | 按钮尺寸，可选值为 `normal` `large` `middle` `small` `mini` | _string_ | `normal` | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` `text` | _string_ | `default` | - |