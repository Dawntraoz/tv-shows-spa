<template>
  <v-container class="not-found">
    <v-row>
      <v-col cols="12">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
  data: () => ({
    title: 'Not found',
  }),
}
</script>
