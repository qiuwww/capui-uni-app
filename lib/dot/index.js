'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var component_1 = require('../common/component');
component_1.VantComponent({
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
  data: function () {
    return {
      endVal: '',
    };
  },
  created: function () {
    this.setData({ endVal: this.getEndVal() });
  },
  methods: {
    getEndVal: function () {
      var val = this.data.value;
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
