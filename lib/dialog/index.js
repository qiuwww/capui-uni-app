'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var component_1 = require('../common/component');
var button_1 = require('../mixins/button');
var open_type_1 = require('../mixins/open-type');
// import { GRAY, RED } from '../common/color';
var PRIMARY_COLOR = '#1E8DFF';
var DEFAULT_COLOR = '#595959';
component_1.VantComponent({
  mixins: [button_1.button, open_type_1.openType],
  props: {
    show: {
      type: Boolean,
      observer: function (show) {
        !show && this.stopLoading();
      },
    },
    title: String,
    message: String,
    theme: {
      type: String,
      value: 'default',
    },
    useSlot: Boolean,
    className: String,
    customStyle: String,
    asyncClose: Boolean,
    messageAlign: String,
    overlayStyle: String,
    useTitleSlot: Boolean,
    showCancelButton: Boolean,
    closeOnClickOverlay: Boolean,
    confirmButtonOpenType: String,
    width: null,
    zIndex: {
      type: Number,
      value: 2000,
    },
    confirmButtonText: {
      type: String,
      value: '确认',
    },
    cancelButtonText: {
      type: String,
      value: '取消',
    },
    confirmButtonColor: {
      type: String,
      value: PRIMARY_COLOR,
    },
    cancelButtonColor: {
      type: String,
      value: DEFAULT_COLOR,
    },
    showConfirmButton: {
      type: Boolean,
      value: true,
    },
    overlay: {
      type: Boolean,
      value: true,
    },
    transition: {
      type: String,
      value: 'scale',
    },
    customButtons: {
      type: Array,
      value: null,
    },
    footerDirection: {
      type: String,
      value: 'row',
    },
  },
  data: {
    loading: {
      confirm: false,
      cancel: false,
    },
  },
  methods: {
    onConfirm: function () {
      this.handleAction('confirm');
    },
    onCancel: function () {
      this.handleAction('cancel');
    },
    onClickOverlay: function () {
      this.onClose('overlay');
    },
    handleAction: function (action) {
      var _a;
      if (this.data.asyncClose) {
        this.setData(((_a = {}), (_a['loading.' + action] = true), _a));
      }
      this.onClose(action);
    },
    close: function () {
      this.setData({
        show: false,
      });
    },
    stopLoading: function () {
      this.setData({
        loading: {
          confirm: false,
          cancel: false,
        },
      });
    },
    onClose: function (action) {
      if (!this.data.asyncClose) {
        this.close();
      }
      this.$emit('close', action);
      // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
      this.$emit(action, { dialog: this });
      var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
      if (callback) {
        callback(this);
      }
    },
    onClickCustomButtons: function (e) {
      var index = e.target.dataset.key;
      var buttons = this.customButtons || this.data.customButtons;
      var triggeredButton = buttons[index];
      var params = {
        index: index,
        command: triggeredButton.command,
        triggeredButton: triggeredButton,
      };
      if (typeof triggeredButton.onClick === 'function') {
        triggeredButton.onClick(params);
      }
      this.close();
      this.data.onConfirm(params);
    },
  },
});
