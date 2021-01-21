import Page from '../../common/page';

Page({
  data: {
    sms: '',
    value: '',
    password: '',
    username: '',
    username2: '',
    username3: '',
    message: '',
    phone: '1365577',
    longValue: '编辑完成文本编辑完成文本编辑完成文本',
  },

  onClickIcon() {
    wx.showToast({
      icon: 'none',
      title: '点击图标',
    });
  },
});
