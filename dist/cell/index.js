import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
VantComponent({
  classes: [
    'title-class',
    'label-class',
    'value-class',
    'right-icon-class',
    'hover-class',
  ],
  mixins: [link],
  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    moreline: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    isSearch: Boolean,
    titleWidth: {
      type: String,
      value: '112px',
    },
    customStyle: String,
    arrowDirection: String,
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      value: true,
    },
    titleStyle: String,
  },
  methods: {
    onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    },
  },
});
