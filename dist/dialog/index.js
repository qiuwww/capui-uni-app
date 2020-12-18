import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';
// import { GRAY, RED } from '../common/color';
const PRIMARY_COLOR = '#1E8DFF';
const DEFAULT_COLOR = '#595959';
VantComponent({
  mixins: [button, openType],
  props: {
    show: {
      type: Boolean,
      observer(show) {
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
    onConfirm() {
      this.handleAction('confirm');
    },
    onCancel() {
      this.handleAction('cancel');
    },
    onClickOverlay() {
      this.onClose('overlay');
    },
    handleAction(action) {
      if (this.data.asyncClose) {
        this.setData({
          [`loading.${action}`]: true,
        });
      }
      this.onClose(action);
    },
    close() {
      this.setData({
        show: false,
      });
    },
    stopLoading() {
      this.setData({
        loading: {
          confirm: false,
          cancel: false,
        },
      });
    },
    onClose(action) {
      if (!this.data.asyncClose) {
        this.close();
      }
      this.$emit('close', action);
      // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
      this.$emit(action, { dialog: this });
      const callback = this.data[
        action === 'confirm' ? 'onConfirm' : 'onCancel'
      ];
      if (callback) {
        callback(this);
      }
    },
    onClickCustomButtons(e) {
      const index = e.target.dataset.key;
      const buttons = this.customButtons || this.data.customButtons;
      const triggeredButton = buttons[index];
      const params = {
        index,
        command: triggeredButton.command,
        triggeredButton,
      };
      if (typeof triggeredButton.onClick === 'function') {
        triggeredButton.onClick(params);
      }
      this.close();
      this.data.onConfirm(params);
    },
  },
});
