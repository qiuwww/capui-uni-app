export default function (options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'CapUI Mini Program 组件库演示',
      };
    },
    ...options,
  });
}
