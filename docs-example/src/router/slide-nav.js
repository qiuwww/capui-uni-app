// 用来渲染左侧nav，用来生成路由
// 三级结构，保持两边结构一致
export default [
  {
    title: "开发指南",
    path: "/guide",
    children: [
      {
        children: [
          {
            path: "/intro",
            title: "介绍",
            views: "guide",
          },
          {
            path: "/install",
            title: "安装",
            views: "guide",
            example: "pages/componentsC/button/index",
          },
          {
            path: "/quickstart",
            title: "快速上手",
            views: "guide",
          },
          {
            path: "/changelog",
            title: "更新日志",
            views: "guide",
          },
          // {
          //   path: "/common",
          //   title: "内置样式",
          //   views: "guide",
          // },
          {
            path: "/custom-style",
            title: "样式覆盖",
            views: "guide",
          },
          {
            path: "/theme",
            title: "定制主题",
            views: "guide",
          },
          {
            path: "/demo",
            title: "demo",
            views: "guide",
          },
        ],
      },
    ],
  },

  {
    title: "组件",
    path: "/component",
    children: [
      {
        title: "基础组件",
        path: "/base",
        icon: "https://img.yzcdn.cn/vant/basic-0401.svg",
        children: [
          {
            path: "/color",
            title: "Color 色彩",
            desc: "一期",
            views: "components",
            example: "pages/componentsC/button/index",
          },
          {
            path: "/u-button",
            title: "Button 按钮",
            desc: "一期",
            example: "pages/componentsC/button/index",
          },
        ],
      },
      {
        title: "表单组件",
        path: "/form",
        icon: "https://img.yzcdn.cn/vant/basic-0401.svg",
        children: [
          {
            path: "/u-input",
            title: "Input 输入框",
          },
          {
            path: "/u-form",
            title: "Form 表单",
            example: "pages/componentsA/form/index",
          },
        ],
      },
    ],
  },
];

const config = [
  {
    name: "基础组件",
    icon: "https://img.yzcdn.cn/vant/basic-0401.svg",
    children: [
      {
        path: "/u-button",
        title: "Button 按钮",
        desc: "一期",
        demoPath: "pages/componentsC/button/index",
      },
      {
        path: "/u-cell",
        title: "Cell 单元格",
        desc: "一期",
        demoPath: "pages/componentsC/cell/index",
      },
      {
        path: "/u-row",
        title: "Cell 单元格222",
        desc: "一期",
        demoPath: "pages/componentsC/cell/index",
      },
      //     {
      //       path: '/icon',
      //       title: 'Icon 图标',
      //     },
      //     {
      //       path: '/image',
      //       title: 'Image 图片',
      //     },
      //     {
      //       path: '/dot',
      //       title: 'Dot 徽标',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/col',
      //       title: 'Layout 布局',
      //     },
      //     {
      //       path: '/popup',
      //       title: 'Popup 弹出层',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/transition',
      //       title: 'Transition 动画',
      //     },
      //   ],
      // },
      // {
      //   name: '表单组件',
      //   icon: 'https://img.yzcdn.cn/vant/form-0401.svg',
      //   list: [
      //     {
      //       path: '/calendar',
      //       title: 'Calendar 日历',
      //     },
      //     {
      //       path: '/checkbox',
      //       title: 'Checkbox 复选框',
      //     },
      //     {
      //       path: '/datetime-picker',
      //       title: 'DatetimePicker 时间选择',
      //     },
      //     {
      //       path: '/field',
      //       title: 'Field 输入框',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/picker',
      //       title: 'Picker 选择器',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/radio',
      //       title: 'Radio 单选框',
      //     },
      //     {
      //       path: '/rate',
      //       title: 'Rate 评分',
      //     },
      //     {
      //       path: '/search',
      //       title: 'Search 搜索',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/slider',
      //       title: 'Slider 滑块',
      //     },
      //     {
      //       path: '/stepper',
      //       title: 'Stepper 步进器',
      //     },
      //     {
      //       path: '/switch',
      //       title: 'Switch 开关',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/uploader',
      //       title: 'Uploader 文件上传',
      //     },
      //   ],
      // },
      // {
      //   name: '反馈组件',
      //   icon: 'passed',
      //   list: [
      //     {
      //       path: '/action-sheet',
      //       title: 'ActionSheet 上拉菜单',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/modal-sheet',
      //       title: 'ModalSheet 模态框',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/dialog',
      //       title: 'Dialog 弹出框',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/dropdown-menu',
      //       title: 'DropdownMenu 下拉菜单',
      //     },
      //     {
      //       path: '/loading',
      //       title: 'Loading 加载',
      //     },
      //     {
      //       path: '/notify',
      //       title: 'Notify 消息通知',
      //     },
      //     {
      //       path: '/overlay',
      //       title: 'Overlay 遮罩层',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/share-sheet',
      //       title: 'ShareSheet 分享面板',
      //     },
      //     {
      //       path: '/swipe-cell',
      //       title: 'SwipeCell 滑动单元格',
      //     },
      //     {
      //       path: '/toast',
      //       title: 'Toast 轻提示',
      //     },
      //   ],
      // },
      // {
      //   name: '展示组件',
      //   icon: 'photo-o',
      //   list: [
      //     {
      //       path: '/circle',
      //       title: 'Circle 进度条',
      //     },
      //     {
      //       path: '/collapse',
      //       title: 'Collapse 折叠面板',
      //     },
      //     {
      //       path: '/count-down',
      //       title: 'CountDown 倒计时',
      //     },
      //     {
      //       path: '/divider',
      //       title: 'Divider 分割线',
      //     },
      //     {
      //       path: '/empty',
      //       title: 'Empty 空状态',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/notice-bar',
      //       title: 'NoticeBar 通告栏',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/panel',
      //       title: 'Panel 面板',
      //     },
      //     {
      //       path: '/progress',
      //       title: 'Progress 进度条',
      //     },
      //     {
      //       path: '/skeleton',
      //       title: 'Skeleton 骨架屏',
      //     },
      //     {
      //       path: '/steps',
      //       title: 'Steps 步骤条',
      //     },
      //     {
      //       path: '/sticky',
      //       title: 'Sticky 粘性布局',
      //     },
      //     {
      //       path: '/tag',
      //       title: 'Tag 标记',
      //     },
      //     {
      //       path: '/tree-select',
      //       title: 'TreeSelect 分类选择',
      //     },
      //   ],
      // },
      // {
      //   name: '导航组件',
      //   icon: 'https://img.yzcdn.cn/vant/nav-0401.svg',
      //   list: [
      //     {
      //       path: '/grid',
      //       title: 'Grid 宫格',
      //     },
      //     {
      //       path: '/index-bar',
      //       title: 'IndexBar 索引栏',
      //     },
      //     {
      //       path: '/sidebar',
      //       title: 'Sidebar 侧边导航',
      //     },
      //     {
      //       path: '/nav-bar',
      //       title: 'NavBar 导航栏',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/tab',
      //       title: 'Tab 标签页',
      //       desc: '一期',
      //     },
      //     {
      //       path: '/tabbar',
      //       title: 'Tabbar 标签栏',
      //     },
      //   ],
      // },
      // {
      //   name: '业务组件',
      //   icon: 'ellipsis',
      //   list: [
      //     {
      //       path: '/area',
      //       title: 'Area 省市区选择',
      //     },
      //     {
      //       path: '/card',
      //       title: 'Card 商品卡片',
      //     },
      //     {
      //       path: '/submit-bar',
      //       title: 'SubmitBar 提交订单栏',
      //     },
      //     {
      //       path: '/goods-action',
      //       title: 'GoodsAction 商品导航',
      //     },
    ],
  },
];
