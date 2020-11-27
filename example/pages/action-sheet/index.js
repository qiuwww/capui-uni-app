import Page from '../../common/page';

Page({
  data: {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
    action1: [{ name: '常态文本' }, { name: '常态文本' }, { name: '常态文本' }],
    action2: [
      { name: '着色选项', color: '#ee0a24' },
      { loading: true },
      { name: '禁用选项', disabled: true },
    ],
    action3: [
      { name: '强调文本', color: '#1E8DFF' },
      { name: '常态文本' },
      { name: '警示文本', color: '#FF4E47' },
    ],
    action4: [
      { name: '常态文本' },
      { name: '常态文本', subname: '副标题文本' },
      { name: '警示文本', color: '#FF4E47' },
    ],
    action6: [
      { name: '获取用户信息', color: '#07c160', openType: 'getUserInfo' },
    ],
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

  toggleActionSheet5() {
    this.toggle('show5');
  },

  toggleActionSheet6() {
    this.toggle('show6');
  },
  toggleActionSheet7() {
    this.toggle('show7');
  },
  onGetUserInfo(e) {
    console.log(e.detail);
  },
});
