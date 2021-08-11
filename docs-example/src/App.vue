<template>
  <div id="app">
    <MainLayout
      active="小程序组件"
      :config="docsConfig"
      :github="github"
      :versions="versions"
      :simulator="simulator"
      @switch-version="onSwitchVersion"
      :slide-nav="slideNav"
    >
      <router-view />
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/layout/MainLayout/index.vue";
import docsConfig, { github, versions } from "./docs.config";
import slideNav from "@/router/slide-nav";

export default {
  components: {
    MainLayout,
  },
  data() {
    return {
      docsConfig,
      github,
      versions,
      slideNav,
    };
  },
  computed: {
    simulator() {
      let prefix = "https://capsule-mobile.91jkys.com";
      const { path } = this.$route.meta;

      // if (
      //   location.hostname === '0.0.0.0' ||
      //   location.hostname === 'localhost'
      // ) {
      //   prefix = 'https://youzan.github.io';
      // }

      // if (!UNSHARED.includes(path)) {
      //   return `${prefix}/v1/mobile.html#/zh-CN/${path}`;
      // }

      return `${prefix}/v1/mobile.html#/zh-CN/${path}`;
      // return `./preview.html#${path}`;
    },
  },
  methods: {
    onSwitchVersion(version) {
      if (version !== pkgJson.version) {
        location.href = `https://youzan.github.io/vant-weapp/${version}`;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.van-doc-intro {
  padding-top: 20px;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-align: center;

  &__logo {
    width: 120px;
    height: 120px;
  }

  h2 {
    font-weight: normal;
    font-size: 32px;
    line-height: 60px;
  }

  p {
    margin-bottom: 20px;
    color: #455a64;
    font-size: 15px;
  }
}

.van-doc-header__logo img {
  width: 150px !important;
}

// .van-doc-header__top {
//   background-color: white !important;
// }
</style>
