<template>
  <div class="van-doc">
    <Header
      :lang="lang"
      :github="github"
      :versions="versions"
      :config="config.header"
      :search-config="searchConfig"
      @switch-version="$emit('switch-version', $event)"
    />

    <Nav :nav-config="slideNav" :base="base" />

    <Container :has-simulator="!!(simulator || simulators.length)">
      <Content>
        <slot />
      </Content>
    </Container>

    <!-- <van-doc-simulator v-if="simulator" :src="simulator" />

    <van-doc-simulator
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
import Nav from "./component/Nav";
// import Block from "./component/Block";
import Header from "./component/Header";
import Content from "./component/Content";
import Container from "./component/Container";
// import Simulator from "./component/Simulator";
// import DemoBlock from "./component/DemoBlock";
// import DemoSection from "./component/DemoSection";

export default {
  name: "van-doc",
  components: {
    Header,
    Nav,
    Container,
    Content,
  },
  props: {
    lang: String,
    github: String,
    versions: Array,
    searchConfig: Object,
    currentSimulator: Number,
    simulator: String,
    config: {
      type: Object,
      required: true,
    },
    simulators: {
      type: Array,
      default: () => [],
    },
    base: {
      type: String,
      default: "",
    },
    slideNav: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      nav: [],
      currentPath: null,
      leftNav: null,
      rightNav: null,
    };
  },

  watch: {
    "$route.path"() {
      // this.setNav();
      // this.updateNav();
    },
  },

  created() {
    console.log("MainLayout", this);
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
      this.currentPath = "/" + this.$route.path.split("/").pop();
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
      const nav = direction === "prev" ? this.leftNav : this.rightNav;
      if (nav.path) {
        this.$router.push(this.base + nav.path);
      } else if (nav.link) {
        window.location.href = nav.link;
      }
    },

    keyboardHandler() {
      window.addEventListener("keyup", (event) => {
        switch (event.keyCode) {
          case 37: // left
            this.handleNavClick("prev");
            break;
          case 39: // right
            this.handleNavClick("next");
            break;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "./style/index.scss";
</style>
