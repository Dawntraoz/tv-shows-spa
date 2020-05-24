<template>
  <v-app>
    <TheHeader />
    <v-content class="blue-grey darken-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>
