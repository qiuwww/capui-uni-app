<template>
  <div class="doc">
    <Header
      :lang="lang"
      :github="github"
      :versions="versions"
      :config="docsConfig.header"
      :search-config="searchConfig"
      @switch-version="$emit('switch-version', $event)"
    />

    <Nav :nav-config="slideNav" :base="base" />
    <Container :has-simulator="!!simulator">
      <Content>
        <router-view />
      </Content>
    </Container>

    <Simulator v-if="simulator" :src="simulator" />
    <!-- <doc-simulator
      v-for="(url, index) in simulators"
      v-show="index === currentSimulator"
      :src="url"
      :key="url"
    /> -->
  </div>
</template>

<script>
// import Vue from "vue";
// import VanDoc from "./VanDoc";
import Nav from './component/Nav';
// import Block from "./component/Block";
import Header from './component/Header';
import Content from './component/Content';
import Container from './component/Container';
import Simulator from './component/Simulator';
// import DemoBlock from "./component/DemoBlock";
// import DemoSection from "./component/DemoSection";

// import MainLayout from "@/layout/MainLayout/index.vue";
import docsConfig, { github, versions } from '@/docs.config';
import slideNav from '@/router/slide-nav';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Nav,
    Container,
    Content,
    Simulator,
  },

  data() {
    return {
      lang: 'zh-cn',
      searchConfig: {},
      base: '',
      nav: [],
      currentPath: null,
      leftNav: null,
      rightNav: null,
      docsConfig,
      github,
      versions,
      slideNav,
      currentSimulator: 0,
    };
  },

  computed: {
    simulator() {
      let prefix = 'https://capsule-mobile.91jkys.com';
      let { path, example } = this.$route.meta;

      if (!example) {
        return '';
      }

      // 设置 / 定位到首页
      if (example === '/') {
        example = '';
      }

      if (location.hostname === '0.0.0.0' || location.hostname === 'localhost') {
        // prefix = 'https://youzan.github.io';
        prefix = 'http://localhost:8181/#/';
      }
      // if (!UNSHARED.includes(path)) {
      //   return `${prefix}/v1/mobile.html#/zh-CN/${path}`;
      // }

      return `${prefix}${example}`;
      return `${prefix}/v1/mobile.html#/zh-CN/${path}`;
      // return `./preview.html#${path}`;
    },
  },

  watch: {
    '$route.path'(value) {
      console.log(value);
      // this.setNav();
      // this.updateNav();
    },
  },

  created() {
    console.log('MainLayout', this);
    // this.setNav();
    // this.updateNav();
    // this.keyboardHandler();
  },

  methods: {
    setNav() {
      const nav = this.config.nav;
      for (let i = 0; i < nav.length; i++) {
        const navItem = nav[i];
        if (!navItem.groups) {
          this.nav.push(nav[i]);
        } else {
          for (let j = 0; j < navItem.groups.length; j++) {
            this.nav = this.nav.concat(navItem.groups[j].list);
          }
        }
      }
    },

    updateNav() {
      let currentIndex;
      this.currentPath = '/' + this.$route.path.split('/').pop();
      for (let i = 0, len = this.nav.length; i < len; i++) {
        if (this.nav[i].path === this.currentPath) {
          currentIndex = i;
          break;
        }
      }
      this.leftNav = this.nav[currentIndex - 1];
      this.rightNav = this.nav[currentIndex + 1];
    },

    handleNavClick(direction) {
      const nav = direction === 'prev' ? this.leftNav : this.rightNav;
      if (nav.path) {
        this.$router.push(this.base + nav.path);
      } else if (nav.link) {
        window.location.href = nav.link;
      }
    },

    keyboardHandler() {
      window.addEventListener('keyup', (event) => {
        switch (event.keyCode) {
          case 37: // left
            this.handleNavClick('prev');
            break;
          case 39: // right
            this.handleNavClick('next');
            break;
        }
      });
    },
    onSwitchVersion(version) {
      if (version !== pkgJson.version) {
        location.href = `https://youzan.github.io/vant-weapp/${version}`;
      }
    },
  },
};
</script>

<style lang="scss">
@import './style/index.scss';
</style>
