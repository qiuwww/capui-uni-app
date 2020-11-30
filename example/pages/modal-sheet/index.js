import Page from '../../common/page';

Page({
  data: {
    show1: false,
  },

  toggle(type) {
    this.setData({
      [type]: !this.data[type],
    });
  },

  toggleActionSheet1() {
    this.toggle('show1');
  },
});
