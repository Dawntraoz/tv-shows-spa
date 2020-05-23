<template>
  <v-col cols="12">
    <h2>{{ title }}</h2>
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
