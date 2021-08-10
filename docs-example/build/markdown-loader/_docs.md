# markdown-loader 原理

## 参考

[参考文章：分析 Element 的 Markdown loader : md-loader](https://juejin.cn/post/6943866186438443016)

1. element-ui 将 vue 语法写入了 markdown 文件中，通过 markdown 文件生成了我们看到的文档页。这个过程的实现主要依靠了 element 自研的 md-loader 。
2. 我们将 .md 文件处理为 vue 文件了。
3. 在入口文件中，md-loader 主要做了两件事：
   1. 第一步是将 .md 文件转换为普通的 html 格式。
      1. md-loader 的实现方式是引入了 markdown-it 包。
   2. 第二步是将转换后的 html 代码处理为 vue 格式。??
4. 我们可以观察到文档中的有一段内容被 :::demo 标记包裹了起来
   1. 很显然这个标记不属于正文里的内容，这里使用了 markdown-it 的一个插件，名叫 markdown-it-container。这个插件的作用是获取标记内的代码（ :::demo ）并返回自定义内容。这个过程就类似于 JavaScript 的 replace 方法。

## markdown-it

[在线测试](https://markdown-it.github.io/)
[中文文档](https://markdown-it.docschina.org/#%E7%94%A8%E6%B3%95%E7%A4%BA%E4%BE%8B)

1. 配置项 html，就是可以把 html 转一下；
2.
