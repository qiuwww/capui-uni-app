import { VantComponent } from '../common/component';
import { commonProps, inputProps, textareaProps } from './props';

VantComponent({
  field: true,

  classes: ['input-class', 'right-icon-class', 'label-class'],

  props: {
    ...commonProps,
    ...inputProps,
    ...textareaProps,
    size: String,
    icon: String,
    label: String,
    error: Boolean,
    action: String,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    rightIcon: String,
    autosize: {
      type: [Boolean, Object],
      value: true,
    },
    required: Boolean,
    iconClass: String,
    clickable: Boolean,
    inputAlign: String,
    customStyle: String,
    errorMessage: String,
    arrowDirection: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    readonly: {
      type: Boolean,
      observer: 'setShowClear',
    },
    clearable: {
      type: Boolean,
      observer: 'setShowClear',
    },
    border: {
      type: Boolean,
      value: true,
    },
    titleWidth: {
      type: String,
      value: '80px',
    },
  },

  data: {
    focused: false,
    innerValue: '',
    showClear: false,
    isHidePlaceholder: false,
  },

  created() {
    this.value = this.data.value;
    this.setData({
      innerValue: this.value,
      isHidePlaceholder: !!this.data.value,
    });
  },

  methods: {
    onInput(event: WechatMiniprogram.Input | WechatMiniprogram.TextareaInput) {
      const { value = '' } = event.detail || {};
      this.value = value;
      this.setShowClear();
      this.emitChange();
    },

    onFocus(
      event: WechatMiniprogram.InputFocus | WechatMiniprogram.TextareaFocus
    ) {
      this.focused = true;
      this.setShowClear();
      this.$emit('focus', event.detail);
    },

    onBlur(
      event: WechatMiniprogram.InputBlur | WechatMiniprogram.TextareaBlur
    ) {
      this.focused = false;
      this.setShowClear();
      this.$emit('blur', event.detail);
    },

    onClickIcon() {
      this.$emit('click-icon');
    },

    onClickAction() {
      this.$emit('click-action');
    },

    onClear() {
      this.setData({ innerValue: '' });
      this.value = '';
      this.setShowClear();
      this.setData({
        isHidePlaceholder: false,
      });

      wx.nextTick(() => {
        this.emitChange();
        this.$emit('clear', '');
      });
    },

    onConfirm(
      event: WechatMiniprogram.InputConfirm | WechatMiniprogram.TextareaConfirm
    ) {
      const { value = '' } = event.detail || {};
      this.value = value;
      this.setShowClear();
      this.$emit('confirm', value);
    },

    setValue(value) {
      this.value = value;
      this.setShowClear();

      if (value === '') {
        this.setData({ innerValue: '' });
      }

      this.emitChange();
    },

    onLineChange(event: WechatMiniprogram.TextareaLineChange) {
      this.$emit('linechange', event.detail);
    },

    onKeyboardHeightChange(
      event:
        | WechatMiniprogram.InputKeyboardHeightChange
        | WechatMiniprogram.TextareaKeyboardHeightChange
    ) {
      this.$emit('keyboardheightchange', event.detail);
    },

    emitChange() {
      this.setData({ value: this.value });

      wx.nextTick(() => {
        this.$emit('input', this.value);
        this.$emit('change', this.value);
      });
    },

    setShowClear() {
      const { clearable, readonly } = this.data;
      const { focused, value } = this;
      this.setData({
        showClear: !!clearable && !!focused && !!value && !readonly,
      });
    },

    noop() {},
  },
});
