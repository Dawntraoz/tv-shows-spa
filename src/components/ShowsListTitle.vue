<template>
  <v-col cols="12" class="pb-4">
    <h2 class="white--text display-1">{{ title }}</h2>
  </v-col>
</template>

<script>
export default {
  name: "ShowsListTitle",
  props: {
    title: String
  }
};
</script>
