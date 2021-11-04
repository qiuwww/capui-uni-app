const path = require('path');

module.exports = {
  lintOnSave: false,
  // 那可以通过 resolveLoader 属性添加 loader 本地目录, 例如下面配置就会去找 project/loaders/txt-loader 下面的自定义 loader
  configureWebpack: {
    resolveLoader: {
      modules: ['node_modules', './build/'],
    },
  },

  chainWebpack: (config, resolve) => {
    // markdown-loader
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('markdown-loader')
      .loader(path.resolve(__dirname, './build/markdown-loader/index.js'))
      .end();

    // txt-loader
    config.module
      .rule('txt-loader')
      .test(/.txt$/)
      .use('txt-loader')
      .loader(path.resolve(__dirname, './build/txt-loader.js'))
      .options({
        name: 'kelly',
      });
  },
};
