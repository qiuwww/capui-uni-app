import { VantComponent } from '../common/component';
VantComponent({
  field: true,
  classes: ['node-class'],
  props: {
    type: {
      type: String,
      value: 'common',
    },
    num: String || Number,
    value: String,
    customStyle: String,
    customClass: String,
  },
  data() {
    return {
      endVal: '',
    };
  },
  created() {
    this.setData({ endVal: this.getEndVal() });
  },
  methods: {
    getEndVal() {
      let val = this.data.value;
      if (this.data.type === 'num') {
        if (this.data.num > 99) {
          val = '···';
        } else {
          val = this.data.num;
        }
      } else if (this.data.value && this.data.value.length > 4) {
        val = this.data.value.substr(0, 4);
      }
      return val || '';
    },
  },
});
