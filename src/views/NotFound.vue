<template>
  <v-container class="text-center white--text">
    <v-row>
      <v-col cols="12">
        <h1 class="pt-6">{{ title }}</h1>
        <router-link to="/" :title="'Go to homepage'">
          <v-btn color="primary" class="mt-4">Go to home</v-btn>
        </router-link>
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
