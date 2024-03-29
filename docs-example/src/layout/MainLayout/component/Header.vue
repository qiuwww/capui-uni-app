<template>
  <div class="doc-header">
    <div class="doc-row">
      <div class="doc-header__top">
        <a class="doc-header__logo" :href="config.logo.href">
          <img :src="config.logo.image" class="logo" />
          <span>{{ config.logo.title }}</span>
        </a>
        <!-- <search-input v-if="searchConfig" :lang="lang" :search-config="searchConfig" /> -->
        <ul class="doc-header__top-nav">
          <li v-for="item in config.nav.logoLink" class="doc-header__top-nav-item" :key="item.url">
            <a class="doc-header__logo-link" target="_blank" :href="item.url">
              <img :src="item.image" />
            </a>
          </li>
          <!-- <li ref="version" v-if="versions" class="doc-header__top-nav-item">
            <span class="doc-header__cube doc-header__version" @click="toggleVersionPop">
              {{ versions[0] }}
              <transition name="doc-dropdown">
                <div v-if="showVersionPop" class="doc-header__version-pop">
                  <div
                    v-for="item in versions"
                    class="doc-header__version-pop-item"
                    @click="onSwitchVersion(item)"
                    :key="item"
                  >
                    {{ item }}
                  </div>
                </div>
              </transition>
            </span>
          </li> -->
          <li v-if="config.nav.lang" class="doc-header__top-nav-item">
            <a class="doc-header__cube" :href="langLink">
              {{ config.nav.lang.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from './SearchInput';

export default {
  name: 'doc-header',

  components: {
    SearchInput,
  },

  props: {
    lang: String,
    config: Object,
    github: String,
    versions: Array,
    searchConfig: Object,
  },

  data() {
    return {
      showVersionPop: false,
    };
  },

  computed: {
    langLink() {
      const { lang } = this.config.nav;
      return `#${this.$route.path.replace(lang.from, lang.to)}`;
    },
  },

  methods: {
    toggleVersionPop() {
      const val = !this.showVersionPop;

      const action = val ? 'add' : 'remove';
      document.body[`${action}EventListener`]('click', this.checkHideVersionPop);

      this.showVersionPop = val;
    },

    checkHideVersionPop(event) {
      if (!this.$refs.version.contains(event.target)) {
        this.showVersionPop = false;
      }
    },

    onSwitchLang(lang) {
      this.$router.push(this.$route.path.replace(lang.from, lang.to));
    },

    onSwitchVersion(version) {
      this.$emit('switch-version', version);
    },
  },
};
</script>

<style lang="scss">
@import '../style/variable';

.doc-header {
  width: 100%;
  user-select: none;
  box-shadow: 0 4px 12px #ebedf0;

  &__top {
    display: flex;
    align-items: center;
    background-color: #001938;
    // background-color: white;
    padding: 0 $doc-padding;
    height: $doc-header-top-height;
    line-height: $doc-header-top-height;

    &-nav {
      flex: 1;
      font-size: 0;
      text-align: right;

      > li {
        display: inline-block;
        position: relative;
        vertical-align: middle;
      }

      &-item {
        margin-left: 20px;
      }

      &-title {
        display: block;
        font-size: 15px;
      }
    }
  }

  &__cube {
    position: relative;
    cursor: pointer;
    padding: 0 10px;
    font-size: 14px;
    line-height: 24px;
    display: block;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.7);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    transition: 0.3s ease-in-out;
  }

  &__version {
    padding-right: 20px;

    &::after {
      position: absolute;
      content: '';
      top: 7px;
      right: 7px;
      width: 5px;
      height: 5px;
      border: 1px solid;
      color: rgba(255, 255, 255, 0.9);
      border-color: transparent transparent currentColor currentColor;
      transform: rotate(-45deg);
    }

    &-pop {
      position: absolute;
      z-index: 99;
      left: 0;
      right: 0;
      top: 30px;
      color: #333;
      transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      text-align: left;
      line-height: 36px;
      border-radius: 3px;
      transform-origin: top;
      background-color: #fff;
      box-shadow: 0 4px 12px #ebedf0;

      &-item {
        padding-left: 7px;
        transition: 0.2s;

        &:hover {
          color: $doc-blue;
        }
      }
    }
  }

  &__logo {
    display: block;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 150px;
      margin-right: 5px;
    }

    span {
      color: #fff;
      font-size: 22px;
    }
  }

  &__logo-link {
    img {
      width: 26px;
      height: 26px;
      display: block;
      transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.doc-dropdown {
  &-enter,
  &-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
