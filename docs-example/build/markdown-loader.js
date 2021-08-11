const loaderUtils = require("loader-utils");
const MarkdownIt = require("markdown-it");
// 处理锚点
const markdownItAnchor = require("markdown-it-anchor");
// 用于获取拼音https://www.npmjs.com/package/transliteration
const { slugify } = require("transliteration");

module.exports = function loader(source) {
  const loaderContext = this;
  const { resourcePath, resourceQuery } = loaderContext;
  // loader options
  const options = loaderUtils.getOptions(loaderContext);

  // 初始化markdownit
  const markdownItContent = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    ...options.markdownConfig,
  }).use(markdownItAnchor, {
    level: 2,
    slugify,
  });

  var mtParse = markdownItContent.render("# markdown-it rulezz!");
  var mtParse2 = markdownItContent.render(source);

  // 获取options参数
  // console.log("##################md-loader：", source);

  // console.log("resourcePath, resourceQuery", resourceQuery);

  // console.log("##################options", options);

  // console.log("mtParse", mtParse);

  console.log("mtParse2", mtParse2);

  // the final return
  const ret = `
<template>
    <div class="templateClass">
        <pre>${source}</pre>
        ${mtParse}
        ${mtParse2}
    </div>
</template>

<script>
    // srciptImport
    export default {
        name: 'ComponentDoc',
        components: {
            // components.join(',')
        }
    };
</script>
<style>
.templateClass{
  border: 1px solid red;
}
</style>
`;

  return `export default ${ret}`;

  // return `export default ${JSON.stringify(source)}`;
};
