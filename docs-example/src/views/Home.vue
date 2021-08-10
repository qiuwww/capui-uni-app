<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    md: <md />
    <div id="div1"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import txt from "./test.txt";
import md from "@/layout/test.md";

console.log("txt", txt);
console.log("md", md);
console.log("HelloWorld", HelloWorld);

export default {
  name: "Home",
  components: {
    HelloWorld,
    md,
  },
};
</script>
