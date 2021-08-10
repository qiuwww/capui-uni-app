const loaderUtils = require("loader-utils");
const MarkdownIt = require("markdown-it");
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
  });

  // 获取options参数
  console.log("##################md-loader：", source);

  console.log("resourcePath, resourceQuery", resourceQuery);

  console.log("##################options", options);

  var mtParse = markdownItContent.render("# markdown-it rulezz!");
  var mtParse2 = markdownItContent.render(source);

  console.log("markdownItContent", markdownItContent, mtParse);

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
