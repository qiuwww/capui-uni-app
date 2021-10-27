<template>
  <div class="doc-nav" :style="style">
    <div class="doc-nav__item" v-for="group in navConfig" :key="group.title">
      <NavLink :title="group.title" :path="group.path" :base="base" />
      <div v-for="(subGroup, index) in group.children" :key="index">
        <div class="doc-nav__group-title">{{ subGroup.title }}</div>
        <div>
          <div :key="index" class="doc-nav__subitem" v-for="(navItem, index) in subGroup.children">
            <NavLink :title="navItem.title" :path="navItem.path" :base="base" />
            <span v-if="navItem.desc" style="color: red; display: inline-block">{{ navItem.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: 'doc-nav',

  components: {
    NavLink,
  },

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      top: 60,
      bottom: 0,
    };
  },

  computed: {
    style() {
      return {
        top: this.top + 'px',
        bottom: this.bottom + 'px',
      };
    },
  },

  created() {
    console.log('Nav', this.navConfig);

    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 60 - offset);
    },
  },
};
</script>

<style lang="scss">
@import '../style/variable';

.doc-nav {
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 1;
  position: fixed;
  overflow-y: scroll;
  padding: 25px 0 75px;
  background-color: #fff;
  min-width: $doc-nav-width;
  max-width: $doc-nav-width;
  box-shadow: 0 8px 12px #ebedf0;
  border-right: 1px solid $doc-border-color;

  @media (min-width: $doc-row-max-width) {
    left: 50%;
    margin-left: -($doc-row-max-width * 0.5);
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }

  &__item,
  &__subitem {
    a {
      margin: 0;
      display: block;
      color: #455a64;
      font-size: 16px;
      padding: 10px 10px 10px $doc-padding;
      line-height: 24px;
      transition: all 0.3s;

      &.active {
        color: $doc-blue;
      }
    }
  }

  &__item {
    > a {
      font-weight: bold;
    }
  }

  &__subitem {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      font-size: 14px;

      &:hover {
        color: $doc-blue;
      }
    }

    span {
      font-size: 13px;
    }
  }

  &__group-title {
    font-size: 12px;
    line-height: 40px;
    padding-left: $doc-padding;
    color: $doc-text-light-blue;
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;

    &__item,
    &__subitem {
      a {
        line-height: 22px;
      }
    }

    &__subitem {
      a {
        font-size: 13px;
      }
    }
  }
}
</style>
