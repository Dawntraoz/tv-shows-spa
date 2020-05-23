<template>
  <v-app>
    <TheHeader />
    <v-content class="light-blue lighten-5">
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
  },
  data: () => ({
    //
  })
};
</script>
