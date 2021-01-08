'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var component_1 = require('../common/component');
component_1.VantComponent({
  props: {
    show: Boolean,
    title: { type: String, value: '我是标题' },
    customClass: {
      type: String,
    },
    round: {
      type: Boolean,
      value: true,
    },
    zIndex: {
      type: Number,
      value: 100,
    },
    overlay: {
      type: Boolean,
      value: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true,
    },
    type: {
      type: String,
      value: '',
    },
  },
  methods: {
    onClose: function () {
      this.$emit('close');
    },
    onClickOverlay: function () {
      this.$emit('click-overlay');
      this.onClose();
    },
  },
});
