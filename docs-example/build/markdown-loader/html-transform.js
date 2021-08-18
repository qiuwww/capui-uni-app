// 针对某些具体标签的处理
// 转换html

module.exports = function cardWrapper(html) {
  // 下边是可以直接使用正则分割的吧
  const group = html
    // .replace(/<h3/g, ":::<h3")
    .replace(/<h2/g, ":::<h2")
    .split(":::");

  return group
    .map((fragment) => {
      // 这里给h3的标签添加class，控制其样式
      if (fragment.indexOf("<h2") !== -1) {
        return `<div class="block">${fragment}</div>`;
      }
      return fragment;
    })
    .join("");
};

// 这里可以约定样式，然后整体控制文档，比如约定：

// h1 => 标题
// h2 => 开头的模块
// <div class="blockquote warning"> => warning/default的引用，默认添加一个div来标记waring的内容，默认不添加
// ``, ``` ``` => 转换
// 强调 ** -> <b></b>
