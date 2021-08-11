<template>
  <section class="simulator">
    <div class="model-content">
      <iframe
        scrolling="auto"
        frameborder="0"
        :src="iframeSrc"
        id="demo-modal"
        class="iframe"
      ></iframe>
    </div>
  </section>
</template>

<script>
const iframeBaseSrc = "http://localhost:8181/#/";

export default {};
</script>

<style lang="scss" scoped>
.simulator {
  box-sizing: border-box;
  width: 500px;
  background-color: thistle;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 20px 0;

  .model-content {
    box-sizing: border-box;
    // border-bottom-left-radius: 30px;
    font-size: 16px;
    background-color: #fff;
    width: 300px;
    height: 609px;
    background-color: red;

    // position: fixed;
    // z-index: 10;
    // margin: 0;
    // top: calc(50vh - 280px + 1.8rem);

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
