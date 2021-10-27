// 用来渲染左侧nav，用来生成路由
// 三级结构，保持两边结构一致
export default [
  {
    title: '开发指南',
    path: '/guide',
    children: [
      {
        children: [
          {
            path: '/intro',
            title: '介绍',
            views: 'guide',
            example: '/',
          },
          {
            path: '/install',
            title: '安装',
            views: 'guide',
            example: '/',
          },
          {
            path: '/quickstart',
            title: '快速上手',
            views: 'guide',
            example: '/',
          },
          // {
          //   path: '/changelog',
          //   title: '更新日志',
          //   views: 'guide',
          //   example: '/',
          // },
          {
            path: '/common',
            title: '内置样式',
            views: 'guide',
            example: '/',
          },
          // {
          //   path: '/custom-style',
          //   title: '样式覆盖',
          //   views: 'guide',
          //   example: '/',
          // },
          // {
          //   path: '/theme',
          //   title: '定制主题',
          //   views: 'guide',
          //   example: '/',
          // },
        ],
      },
    ],
  },

  {
    title: '组件',
    path: '/component',
    children: [
      {
        title: '基础组件',
        path: '/base',
        children: [
          {
            path: '/color',
            title: 'Color 色彩',
            desc: '一期',
            views: 'components',
            example: 'pages/componentsC/color/index',
          },
          {
            path: '/u-icon',
            title: 'Icon 图标',
            desc: '一期',
            example: 'pages/componentsA/icon/index',
          },
          {
            path: '/u-image',
            title: 'Image 图片',
            desc: '一期',
            example: 'pages/componentsB/image/index',
          },
          {
            path: '/u-button',
            title: 'Button 按钮',
            desc: '一期',
            example: 'pages/componentsC/button/index',
          },
          {
            path: '/layout',
            title: 'Layout 布局',
            views: 'components',
            example: 'pages/componentsC/cell/index',
          },
          {
            path: '/u-cell',
            title: 'Cell 单元格',
            example: 'pages/componentsC/badge/index',
          },
          {
            path: '/u-badge',
            title: 'Badge 徽标数',
            example: 'pages/componentsC/badge/index',
          },
          {
            path: '/u-tag',
            title: 'Tag 标签',
            desc: '一期',
            example: 'pages/componentsA/tag/index',
          },
        ],
      },
      {
        title: '表单组件',
        path: '/form',
        children: [
          {
            path: '/u-input',
            title: 'Input 输入框',
          },
          {
            path: '/u-form',
            title: 'Form 表单',
            example: 'pages/componentsA/form/index',
          },
          {
            path: '/u-calendar',
            title: 'Calendar 日历',
            example: 'pages/componentsA/calendar/index',
          },
          {
            path: '/u-select',
            title: 'Select 列选择器',
            example: 'pages/componentsA/select/index',
          },

          {
            path: '/u-keyboard',
            title: 'Keyboard 键盘',
            example: 'pages/componentsA/keyboard/index',
          },
          {
            path: '/u-picker',
            title: 'Picker 选择器',
            example: 'pages/componentsB/picker/index',
          },
          {
            path: '/u-rate',
            title: 'Rate 评分',
            example: 'pages/componentsB/rate/index',
          },
          {
            path: '/u-search',
            title: 'Search 搜索',
            desc: '一期',
            example: 'pages/componentsB/search/index',
          },
          {
            path: '/u-number-box',
            title: 'NumberBox 步进器',
            example: 'pages/componentsC/numberBox/index',
          },
          {
            path: '/u-upload',
            title: 'Upload 上传',
            example: 'pages/componentsB/upload/index',
          },
          {
            path: '/u-verification-code',
            title: 'VerificationCode 验证码倒计时',
            example: 'pages/componentsA/verificationCode/index',
          },
          {
            path: '/u-field',
            title: 'Field 输入框',
            example: 'pages/componentsA/field/index',
          },
          {
            path: '/u-checkbox',
            title: 'Checkbox 复选框',
            example: 'pages/componentsB/checkbox/index',
          },
          {
            path: '/u-radio',
            title: 'Radio 单选框',
            example: 'pages/componentsB/radio/index',
          },
          {
            path: '/u-switch',
            title: 'Switch 开关选择器',
            example: 'pages/componentsB/switch/index',
          },
          {
            path: '/u-slider',
            title: 'Slider 滑动选择器 ',
            example: 'pages/componentsA/slider/index',
          },
        ],
      },
      {
        title: '数据组件',
        path: '/data',
        children: [
          {
            path: '/u-circle-progress',
            title: 'CircleProgress 圆形进度条',
            example: 'pages/componentsC/circleProgress/index',
          },
          {
            path: '/u-line-progress',
            title: 'LineProgress 线形进度条',
            example: 'pages/componentsC/progress/index',
          },
          {
            path: '/u-table',
            title: 'Table 表格',
            example: 'pages/componentsB/table/index',
          },
          {
            path: '/u-count-down',
            title: 'CountDown 倒计时',
            example: 'pages/componentsB/countDown/index',
          },
          {
            path: '/u-count-to',
            title: 'CountTo 数字滚动',
            example: 'pages/componentsC/countTo/index',
          },
        ],
      },
      {
        title: '反馈组件',
        path: '/feedback',
        children: [
          {
            path: '/u-action-sheet',
            title: 'ActionSheet 操作菜单',
            example: 'pages/componentsC/actionSheet/index',
          },
          {
            path: '/u-alert-tips',
            title: 'AlertTips 警告提示',
            example: 'pages/componentsC/alertTips/index',
          },
          {
            path: '/u-toast',
            title: 'Toast 消息提示',
            example: 'pages/componentsA/toast/index',
          },
          {
            path: '/u-notice-bar',
            title: 'NoticeBar 滚动通知',
            example: 'pages/componentsB/noticeBar/index',
          },
          {
            path: '/u-top-tips',
            title: 'TopTips 顶部提示',
            example: 'pages/componentsA/topTips/index',
          },
          {
            path: '/u-collapse',
            title: 'Collapse 折叠面板',
            example: 'pages/componentsC/collapse/index',
          },
          {
            path: '/u-popup',
            title: 'Popup 弹出层',
            example: 'pages/componentsC/popup/index',
          },
          {
            path: '/u-swipe-action',
            title: 'SwipeAction 滑动操作',
            example: 'pages/componentsB/swipeAction/index',
          },
          {
            path: '/u-modal',
            title: 'Modal 模态框',
            example: 'pages/componentsA/modal/index',
          },
          {
            path: '/u-full-screen',
            title: 'FullScreen 压窗屏',
            example: 'pages/componentsA/fullScreen/index',
          },
        ],
      },
      {
        title: '布局组件',
        path: '/layout',
        children: [
          {
            path: '/u-line',
            title: 'Line 线条',
            example: 'pages/componentsB/line/index',
          },
          {
            path: '/u-card',
            title: 'Card 卡片',
            example: 'pages/componentsB/card/index',
          },
          {
            path: '/u-mask',
            title: 'Mask 遮罩层',
            example: 'pages/componentsC/mask/index',
          },
          {
            path: '/u-no-network',
            title: 'NoNetwork 无网络提示',
            example: 'pages/componentsA/noNetwork/index',
          },
          {
            path: '/u-grid',
            title: 'Grid 宫格布局',
            example: 'pages/componentsC/grid/index',
          },
          {
            path: '/u-swiper',
            title: 'Swiper 轮播图',
            example: 'pages/componentsB/swiper/index',
          },
          {
            path: '/u-timeLine',
            title: 'TimeLine 时间轴',
            example: 'pages/componentsA/timeLine/index',
          },
          {
            path: '/u-skeleton',
            title: 'Skeleton 骨架屏',
            example: 'pages/componentsB/skeleton/index',
          },
          {
            path: '/u-sticky',
            title: 'Sticky 吸顶',
            example: 'pages/componentsB/sticky/index',
          },
          {
            path: '/u-waterfall',
            title: 'Waterfall 瀑布流',
            example: 'pages/componentsB/waterfall/index',
          },
          {
            path: '/u-divider',
            title: 'Divider 分割线',
            example: 'pages/componentsB/divider/index',
          },
        ],
      },
      {
        title: '导航组件',
        path: '/nav',
        children: [
          {
            path: '/u-dropdown',
            title: 'Dropdown 下拉菜单',
            example: 'pages/componentsB/dropdown/index',
          },
          {
            path: '/u-tabbar',
            title: 'Tabbar 底部导航栏',
            example: 'pages/componentsB/tabbar/index',
          },
          {
            path: '/u-back-top',
            title: 'BackTop 返回顶部',
            example: 'pages/componentsA/backTop/index',
          },
          {
            path: '/u-navbar',
            title: 'Navbar 自定义导航栏',
            example: 'pages/componentsA/navbar/index',
          },
          {
            path: '/u-tabs',
            title: 'Tabs 标签',
            example: 'pages/componentsA/tabs/index',
          },
          {
            path: '/u-tabs-swiper',
            title: 'TabsSwiper 全屏选项卡',
            desc: '一期',
            example: 'pages/template/order/index',
          },
          {
            path: '/u-subsection',
            title: 'Subsection 分段器',
            example: 'pages/componentsC/subsection/index',
          },
          {
            path: '/u-index-list',
            title: 'IndexList 索引列表',
            example: 'pages/componentsA/indexList/index',
          },
          {
            path: '/u-steps',
            title: 'Steps 步骤条',
            example: 'pages/componentsB/steps/index',
          },
          {
            path: '/u-empty',
            title: 'Empty 内容为空',
            example: 'pages/componentsA/empty/index',
          },
          {
            path: '/u-link',
            title: 'Link 超链接',
            example: 'pages/componentsC/link/index',
          },
          {
            path: '/u-section',
            title: 'Section 查看更多',
            example: 'pages/componentsC/section/index',
          },
        ],
      },
      {
        title: '其他组件',
        path: '/others',
        children: [
          {
            path: '/u-parse',
            title: 'Parse 富文本解析器',
            example: 'pages/componentsA/parse/index',
          },
          {
            path: '/u-message-input',
            title: 'MessageInput 验证码输入',
            example: 'pages/componentsC/messageInput/index',
          },
          {
            path: '/u-avatar-cropper',
            title: 'AvatarCropper 头像裁剪',
            example: 'pages/componentsA/avatarCropper/index',
          },
          {
            path: '/u-loadmore',
            title: 'loadMore 加载更多',
            desc: '一期',
            example: 'pages/componentsC/loadMore/index',
          },
          {
            path: '/u-read-more',
            title: 'ReadMore 展开阅读更多',
            example: 'pages/componentsB/readMore/index',
          },
          {
            path: '/u-lazy-load',
            title: 'LazyLoad 懒加载',
            example: 'pages/componentsA/lazyLoad/index',
          },
          {
            path: '/u-gap',
            title: 'Gap 间隔槽',
            example: 'pages/componentsA/gap/index',
          },
          {
            path: '/u-avatar',
            title: 'Avatar 头像',
            example: 'pages/componentsA/avatar/index',
          },
          {
            path: '/u-loading',
            title: 'Loading 加载动画',
            example: 'pages/componentsB/loading/index',
          },
        ],
      },
    ],
  },
];
