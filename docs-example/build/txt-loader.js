const { getOptions } = require("loader-utils");

module.exports = function loader(source) {
  const options = getOptions(this);
  // 获取options参数
  console.log("\n\n##################txt-loader：", source, options);

  source = source.replace(/\[name\]/g, options.name);
  // 返回一个js文件内容 | vue文件(给vue-loader)
  return `export default ${JSON.stringify(source)}`;
};
