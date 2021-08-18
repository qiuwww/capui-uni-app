<template>
  <section class="simulator">
    <div class="model-content">
      <iframe
        scrolling="auto"
        frameborder="0"
        :src="src"
        class="iframe"
      ></iframe>
    </div>
  </section>
</template>

<script>
const iframeBaseSrc = "http://localhost:8181/#/";

export default {
  props: ["src"],
};
</script>

<style lang="scss" scoped>
@import "../style/variable";

.simulator {
  // position: absolute;
  // border-radius: 6px;
  // background: #fafafa;
  // box-sizing: border-box;
  // right: $doc-padding;

  // box-sizing: border-box;
  // // width: 500px;
  // background-color: thistle;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // // padding: 20px 0;

  z-index: 1;
  overflow: hidden;
  position: fixed;
  border-radius: 6px;
  // background: #fafafa;
  box-sizing: border-box;
  right: $doc-padding;
  width: $doc-simulator-width;
  min-width: $doc-simulator-width;
  top: $doc-padding + $doc-header-top-height;
  // box-shadow: #ebedf0 0 4px 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  .model-content {
    box-sizing: border-box;
    // border-bottom-left-radius: 30px;
    font-size: 16px;
    // background-color: #fff;
    width: 300px;
    height: 609px;
    // background-color: red;

    background-image: url(https://gitee.com/qiuwww/imgs/raw/master/md/iPhoneX_model.png);
    background-repeat: no-repeat;
    background-size: 100%;

    border-radius: 30px;
    padding: 43px 23px 38px 16px;
  }
  iframe {
    height: 100%;
    width: 100%;
    border-radius: 30px;
  }
}
</style>
