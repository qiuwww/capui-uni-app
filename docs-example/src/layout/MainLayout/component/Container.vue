<template>
  <div
    class="doc-container doc-row"
    :class="{ 'doc-container--with-simulator': hasSimulator }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "doc-container",

  props: {
    hasSimulator: Boolean,
  },
};
</script>

<style lang="scss">
@import "../style/variable";

.doc-container {
  overflow: hidden;
  box-sizing: border-box;
  padding-left: $doc-nav-width;

  &--with-simulator {
    padding-right: $doc-simulator-width + $doc-padding;

    @media (max-width: 1300px) {
      padding-right: $doc-simulator-small-width + $doc-padding;
    }
  }
}
</style>
