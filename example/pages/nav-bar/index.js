import Page from '../../common/page';

Page({
  data: {
    showActionSheet: false,
    actions: [
      {
        name: '基础用法',
        id: 0,
      },
      {
        name: '左侧箭头',
        id: 1,
      },
      {
        name: '纯色背景',
        id: 2,
      },
      {
        name: '渐变背景',
        id: 3,
      },
      {
        name: '无分割线',
        id: 4,
      },
    ],
    active: 0,
  },
  onClickShow() {
    this.setData({ showActionSheet: true });
  },
  onClose() {
    this.setData({ showActionSheet: false });
  },
  onSelect({ detail }) {
    this.setData({ active: detail.id });
  },
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
  },

  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
});
