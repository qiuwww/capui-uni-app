<template>
  <section class="doc-demo-block">
    <h2 class="doc-demo-block__title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'doc-demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.doc-demo-block {
  &__title {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: $doc-text-light-blue;
    padding: 35px 15px 15px;
  }

  &:first-of-type {
    .doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
