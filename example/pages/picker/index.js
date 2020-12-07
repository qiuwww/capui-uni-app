import Page from '../../common/page';
import Toast from '../../dist/toast/toast';

Page({
  data: {
    column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    column2: [
      { text: '杭州', disabled: true },
      { text: '宁波' },
      { text: '温州' },
    ],
    column3: {
      浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      福建: ['福州', '厦门', '莆田', '三明', '泉州'],
    },
    column4: [
      {
        values: ['浙江', '福建'],
        className: 'column1',
      },
      {
        values: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        className: 'column2',
        defaultIndex: 2,
      },
    ],

    column5: [
      {
        values: ['浙江省', '江苏省'],
        className: 'column1',
      },
      {
        values: ['杭州市', '宁波市'],
        className: 'column2',
        defaultIndex: 0,
      },
      {
        values: ['余杭区', '西湖区', '滨江区', '上城区', '下城区'],
        className: 'column3',
        defaultIndex: 2,
      },
    ],
    dict: {
      浙江省: ['杭州市', '宁波市'],
      江苏省: ['苏州市', '南京市'],
      杭州市: ['余杭区', '西湖区', '滨江区', '萧山区'],
      宁波市: ['海曙区', '江北区', '镇海区', '北仑区', '鄞州区'],
      苏州市: ['昆山市', '吴中区', '张家港市'],
      南京市: ['江宁区', '江北新区', '鼓楼区', '栖霞区'],
    },
  },

  onChange1(event) {
    const { value, index } = event.detail;
    Toast(`Value: ${value}, Index：${index}`);
  },

  onConfirm(event) {
    const { value, index } = event.detail;
    Toast(`Value: ${value}, Index：${index}`);
  },

  onCancel() {
    Toast('取消');
  },

  onChange2(event) {
    const { picker, value } = event.detail;
    picker.setColumnValues(1, this.data.column3[value[0]]);
    getApp().picker = picker;
  },

  onChange3(event) {
    const { picker, value, index } = event.detail;
    const [province, city] = value || [];
    const dict = this.data.dict || {};

    if (index === 0) {
      picker.setColumnValues(1, dict[province]);
      picker.setColumnValues(2, dict[dict[province][0]]);
    }
    if (index === 1) {
      picker.setColumnValues(2, dict[city]);
    }
    getApp().picker = picker;
  },
});
