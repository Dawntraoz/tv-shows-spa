<template>
  <div class="shows-listing">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ShowsListing",
  components: {
    HelloWorld
  }
};
</script>
