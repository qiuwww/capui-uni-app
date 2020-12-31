export const commonProps = {
  value: {
    type: String,
    observer(this: WechatMiniprogram.Component.TrivialInstance, value: string) {
      if (value !== this.value) {
        this.setData({ innerValue: value });
        this.value = value;
      }
    },
  },
  action: String,
  placeholder: String,
  placeholderStyle: String,
  placeholderClass: String,
  disabled: Boolean,
  maxlength: {
    type: Number,
    value: -1,
  },
  cursorSpacing: {
    type: Number,
    value: 50,
  },
  autoFocus: Boolean,
  focus: Boolean,
  cursor: {
    type: Number,
    value: -1,
  },
  selectionStart: {
    type: Number,
    value: -1,
  },
  selectionEnd: {
    type: Number,
    value: -1,
  },
  adjustPosition: {
    type: Boolean,
    value: true,
  },
  holdKeyboard: Boolean,
};

export const inputProps = {
  type: {
    type: String,
    value: 'text',
  },
  password: Boolean,
  confirmType: String,
  confirmHold: Boolean,
};

export const textareaProps = {
  autoHeight: {
    type: Boolean,
    value: true,
  },
  fixed: Boolean,
  showConfirmBar: {
    type: Boolean,
    value: true,
  },
  disableDefaultPadding: {
    type: Boolean,
    value: true,
  },
};
