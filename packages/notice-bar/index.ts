import { VantComponent } from '../common/component';
import { getRect, requestAnimationFrame } from '../common/utils';

VantComponent({
  props: {
    text: {
      type: String,
      value: '',
      observer() {
        wx.nextTick(() => {
          this.init();
        });
      },
    },
    type: {
      type: String,
      value: '',
      observer() {
        wx.nextTick(() => {
          this.initTypeInfo();
        });
      },
    },
    mode: {
      type: String,
      value: '',
    },
    url: {
      type: String,
      value: '',
    },
    openType: {
      type: String,
      value: 'navigate',
    },
    delay: {
      type: Number,
      value: 1,
    },
    speed: {
      type: Number,
      value: 50,
      observer() {
        wx.nextTick(() => {
          this.init();
        });
      },
    },
    scrollable: {
      type: Boolean,
      value: true,
    },
    leftIcon: {
      type: String,
      value: '',
    },
    color: String,
    backgroundColor: String,
    background: String,
    wrapable: Boolean,
  },

  data: {
    show: true,
  },

  created() {
    this.resetAnimation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear',
    });
  },

  destroyed() {
    this.timer && clearTimeout(this.timer);
  },

  methods: {
    init() {
      Promise.all([
        getRect.call(this, '.van-notice-bar__content'),
        getRect.call(this, '.van-notice-bar__wrap'),
      ]).then((rects) => {
        const [contentRect, wrapRect] = rects;
        if (
          contentRect == null ||
          wrapRect == null ||
          !contentRect.width ||
          !wrapRect.width
        ) {
          return;
        }

        const { speed, scrollable, delay } = this.data;

        if (scrollable || wrapRect.width < contentRect.width) {
          const duration = (contentRect.width / speed) * 1000;

          this.wrapWidth = wrapRect.width;
          this.contentWidth = contentRect.width;
          this.duration = duration;
          this.animation = wx.createAnimation({
            duration,
            timingFunction: 'linear',
            delay,
          });

          this.scroll();
        }
      });
    },

    scroll() {
      this.timer && clearTimeout(this.timer);
      this.timer = null;

      this.setData({
        animationData: this.resetAnimation
          .translateX(this.wrapWidth)
          .step()
          .export(),
      });

      requestAnimationFrame(() => {
        this.setData({
          animationData: this.animation
            .translateX(-this.contentWidth)
            .step()
            .export(),
        });
      });

      this.timer = setTimeout(() => {
        this.scroll();
      }, this.duration);
    },

    onClickIcon(event) {
      if (this.data.mode === 'closeable') {
        this.timer && clearTimeout(this.timer);
        this.timer = null;

        this.setData({ show: false });
        this.$emit('close', event.detail);
      }
    },

    onClick(event: WechatMiniprogram.TouchEvent) {
      this.$emit('click', event);
    },

    initTypeInfo() {
      if (this.data.type) {
        switch (this.data.type) {
          case 'info':
            this.setData({
              color: '#1E8DFF',
              leftIcon: 'info-o',
              backgroundColor: '#EBF8FF',
            });
            break;
          case 'warning':
            this.setData({
              color: '#FF8200',
              leftIcon: 'waring-o',
              backgroundColor: '#FFF7E6',
            });
            break;
          case 'success':
            this.setData({
              color: '#52C41A',
              leftIcon: 'passed',
              backgroundColor: '#F6FFED',
            });
            break;
          case 'error':
            this.setData({
              color: '#FF4E47',
              leftIcon: 'close',
              backgroundColor: '#FFEEEB',
            });
            break;
          default:
            break;
        }
      }
    },
  },
});
