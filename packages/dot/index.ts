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
      const num = this.data.num ? Number(this.data.num) : '';
      console.log(num, typeof num === 'number');
      if (num && num > 99) {
        val = '···';
      } else if (num) {
        val = num;
      } else if (this.data.value && this.data.value.length > 4) {
        val = this.data.value.substr(0, 4);
      }
      return val || '';
    },
  },
});
