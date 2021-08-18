<template>
  <router-link
    v-if="path"
    active-class="active"
    :to="base + path"
    v-html="itemName"
  />
  <!-- <a v-else-if="item.link" :href="item.link" v-html="itemName" /> -->
  <a v-else v-html="itemName" />
</template>

<script>
export default {
  name: "doc-nav-link",

  props: {
    base: String,
    // 有path的就可以跳转
    path: String,
    // 展示的title
    title: String,
  },

  computed: {
    itemName() {
      // 为了处理这样的，Button 按钮，前面14px，后边13px
      const name = this.title.split(" ");
      return `${name[0]} <span>${name.slice(1).join(" ")}</span>`;
    },
  },
};
</script>
