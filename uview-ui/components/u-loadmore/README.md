# LoadMore 还在更多

## 使用说明

[原LoadMore 还在更多文档地址](https://www.uviewui.com/components/loadMore.html)

1. 删掉了原来的两侧的分割线；
2. 替换loading状态的icon为：`https://static.92jkys.com/attachment/20210728190614440_7fd1debc9f92417a9f6a5b99655c8231.gif`；

## API

### 修改的Props

| 参数 | 说明 | 类型 | 默认值 | 平台差异说明 |
| --- | --- | --- | --- | --- |
| color | 字体颜色 | String | `#8C8C8C` | - |
| status | 组件状态 | String | `loading` | loading / nomore，这里只有两种状态，正在加载与加载完成 |
| loadText | 自定义显示的文字 | Object | `{loadmore: '加载更多',loading: '正在加载更多内容...',nomore: '没有更多内容了'}` | - |

