module.exports = (source) => {
  console.log("markdown-loader", source);
  return `export default () => "222";`;
};
