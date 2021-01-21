import Page from '../../common/page';

Page({
  data: {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
  },

  toggle(type) {
    this.setData({
      [type]: !this.data[type],
    });
  },

  toggleActionSheet1() {
    this.toggle('show1');
  },

  toggleActionSheet2() {
    this.toggle('show2');
  },

  toggleActionSheet3() {
    this.toggle('show3');
  },

  toggleActionSheet4() {
    this.toggle('show4');
  },

  showSummary() {
    wx.showModal({
      title: '使用说明',
      content: '我是使用说明',
      success: () => {
        this.toggleActionSheet1();
      },
      fail: () => {
        this.toggleActionSheet1();
      },
    });
  },

  confirmMsg() {
    wx.showToast({
      title: '确认成功',
      icon: 'none',
      success: () => {
        this.toggleActionSheet2();
      },
    });
  },
});
