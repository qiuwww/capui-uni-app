<template>
  <div class="home">
    <ul class="slide-nav" v-for="section in slideNav" :key="section.name">
      <h3>{{ section.name }}</h3>
      <li
        v-for="nav in section.list"
        :key="nav.title"
        @click="$router.push(nav.path)"
      >
        {{ nav.title }}
      </li>
    </ul>
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

import slideNav from "../router/slide-nav";

console.log("###slideNav", slideNav);

export default {
  name: "Home",
  components: {
    HelloWorld,
    md,
  },
  data() {
    return {
      slideNav,
    };
  },
};
</script>
