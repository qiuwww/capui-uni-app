/* eslint-disable */
import packageJson from '../../package.json';
const { version } = packageJson;

export const github = 'https://gitlab.92jkys.com/f2e/capui-uni-app';

export const versions = [version, '0.x'];

export default {
  header: {
    logo: {
      image: 'https://static.92jkys.com/third_files/GuoYao/202003/11/1274bd068b484d5aadfb039d4c8807a2.png',
      // title: 'Capsule Mini Program',
      href: 'https://capsule.92jkys.com/#/zh-CN/',
    },
    nav: {
      logoLink: [
        // {
        //   image: "https://img.yzcdn.cn/vant/vant-o.svg",
        //   url: "/vant",
        // },
        {
          image: 'https://img.yzcdn.cn/vant/logo/github.svg',
          url: github,
        },
      ],
    },
  },
};
