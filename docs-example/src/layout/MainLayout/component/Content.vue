<template>
  <div :class="['doc-content', `doc-content--${currentPage}`]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "DocContent",

  computed: {
    currentPage() {
      const { path } = this.$route;
      if (path) {
        return path.split("/").slice(-1)[0];
      }
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
@import "../style/variable";
// 这里自己定制md文件转换到html的时候的样式控制

// md文件转换为html的过程中会添加各种标签及class等，需要这里进行样式控制
// 这里是一个通用的处理方式

.doc-content {
  flex: 1;
  position: relative;
  padding: 0 0 75px;

  h1 {
    font-size: 50;
  }

  .block {
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 8px 12px #ebedf0;
  }

  a {
    color: $doc-blue;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
    font-weight: normal;
    color: $doc-black;

    &[id] {
      cursor: pointer;
      position: relative;

      &:hover:before {
        content: "#";
        display: inline-block;
        color: #2d8cf0;
        position: absolute;
        left: -14px;
        bottom: 0;
        top: 0;
      }
    }
  }

  h1 {
    margin: 0 0 30px;
    font-size: 26px;
    cursor: default;
  }

  h2 {
    font-size: 20px;
    margin: 0 0 10px;
  }

  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 15px;
    font-weight: 500;
    margin: 24px 0 12px;
  }

  h5 {
    font-size: 14px;
    font-weight: 500;
    margin: 24px 0 12px;
  }

  p {
    font-size: 14px;
    line-height: 26px;
    color: $doc-text-color;
  }

  table {
    width: 100%;
    margin-top: 12px;
    font-size: 13px;
    line-height: 1.5;
    border-radius: 6px;
    border-collapse: collapse;
    color: $doc-text-color;

    th {
      padding: 8px 10px;
      text-align: left;
      font-weight: 500;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    td {
      padding: 8px;
      border-top: 1px solid $doc-code-background-color;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    code {
      font-size: 13px;
      padding: 0 8px;
      font-family: inherit;
      word-break: keep-all;
    }
  }

  ul li,
  ol li {
    color: $doc-text-color;
    font-size: 14px;
    line-height: 22px;
    margin: 5px 0 5px 10px;
    padding-left: 15px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 6px;
      margin-top: 8px;
      border-radius: 50%;
      box-sizing: border-box;
      border: 1px solid $doc-dark-grey;
    }
  }

  hr {
    border: 0 none;
    margin: 30px 0;
    border-top: 1px solid #eee;
  }

  p > code,
  li > code,
  table code {
    margin: 2px 3px;
    padding: 2px 5px;
    display: inline;
    box-shadow: none;
    background-color: #f0f2f5;
  }

  section {
    padding: 30px;
    overflow: hidden;
  }

  blockquote {
    padding: 16px;
    margin: 20px 0 0;
    font-size: 14px;
    background-color: #ecf9ff;
    color: rgba(52, 73, 94, 0.8);
    border-left: 8px solid #42b983;
  }

  // 匹配到唯一子元素
  .block > blockquote:only-child {
    margin: 0;
  }

  img {
    width: 100%;
    margin: 15px 0;
    box-shadow: 0 2px 4px #ebedf0;
  }

  // 特殊处理的部分
  &--changelog {
    strong {
      display: block;
      margin: 12px 0;
      font-size: 15px;
      font-weight: 500;
    }

    h3 {
      font-size: 20px;

      + p code {
        margin: 0;
      }

      a {
        color: inherit;
      }
    }
  }

  // 这里处理pre>code的嵌套
  pre.hljs > code {
    background-color: #f9f9f9;
    border-radius: 6px;
    position: relative;
    padding: 10px;
  }

  .hljs {
    padding: 0;
  }

  // 引用
  .danger {
    blockquote {
      background-color: #ffe6e6;
      border-color: #c00;
      color: #4d0000;
      p:first-child {
        color: #c00;
      }
    }
  }

  .warning {
    blockquote {
      background-color: #fff;
      border-color: #e7c000;
      color: #6b5900;
      p:first-child {
        color: #e7c000;
        font-weight: 600;
      }
    }
  }
}
</style>
