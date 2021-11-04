# docs-example

文档项目，用于构建文档与例子的映射关系，需要打包发布线上，方便查阅。文档主要使用 markdown 写成，只要有两部分。

1. `capui-uni-app/uview-ui/docs/`，这里边包括非组件类型的文档；
2. 组件相关的文档与组件存放在同一个目录下边，如`capui-uni-app/uview-ui/components/u-button/README.md`；

## 主要逻辑

1. 入口文件：`main.js => router/index.js => *.md文件 => vue.config.js => 加入markdown-loader(docs-example/build/markdown-loader/index.js) => vue文件 => html`；
   1. `slide-nav.js`，即渲染左侧目录，又用做路由构建；
   2. `MainLayout`，用于处理项目的布局；
   3. 这里的 markdown 文件的处理，主要参考`@vant/markdown-loader(也就是element使用的markdown-loader)`；
2. `@/styles/md-styles控制引入的md文件的样式`；

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
