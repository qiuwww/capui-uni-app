const path = require("path");

module.exports = {
  lintOnSave: false,
  // 那可以通过 resolveLoader 属性添加 loader 本地目录, 例如下面配置就会去找 project/loaders/txt-loader 下面的自定义 loader
  configureWebpack: {
    resolveLoader: {
      modules: ["node_modules", "./build/"],
    },
  },

  chainWebpack: (config, resolve) => {
    config.module
      // 规则名称
      .rule("md")
      // 匹配的方式
      .test(/\.md$/)

      .use("vue")
      .loader("vue-loader")
      .end()

      // .use("loader2")
      // .loader("loader2")
      // .end()

      .use("md-loader")
      .loader(path.resolve(__dirname, "./build/markdown-loader.js"))
      .options({
        demoWrapperClass: "vue-demo-wrapper",
        templateClass: "vue-demo-container",
        descWrapperClass: "vue-demo-desc",
        highlightClass: "vue-demo-highlight",
      })
      .end();

    // txt-loader
    config.module
      .rule("txt-loader")
      .test(/.txt$/)
      .use("txt-loader")
      .loader(path.resolve(__dirname, "./build/txt-loader.js"))
      .options({
        name: "kelly",
      });
  },
};

// {
//   test: /\.txt$/,
//   use: {
//     loader: path.resolve(__dirname, './txt-loader.js'),
//     options: {
//       name: 'kelly',
//     },
//   },
// },

// new MyPlugin({
//   name: "MyPlugin"
// })
