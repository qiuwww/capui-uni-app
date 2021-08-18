<template>
  <div class="home">home: {{ txt }}</div>
</template>

<script>
// @ is an alias to /src
import txt from "./test.txt";
console.log("txt", txt);

export default {
  name: "Home",
  components: {},
  data() {
    return {
      txt,
    };
  },
};
</script>
