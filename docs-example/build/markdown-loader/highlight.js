const hljs = require("highlight.js");

// 这里可以区分出来当前的代码的类型，``` & `
// Highlighter function. Should return escaped HTML
module.exports = function highlight(str, lang) {
  // console.log("highlight", lang, hljs.getLanguage(lang));

  if (lang && hljs.getLanguage(lang)) {
    // return hljs.highlight(lang, str, true).value;
    return `<pre class="hljs"><code class="hljs-language ${lang}">${
      hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
    }</code></pre>`;
  }
  // 使用额外的默认转义
  return "";
};
