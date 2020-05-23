<template>
  <v-card color="transparent" flat width="200">
    <router-link :to="{ name: 'show', params: { id: item.id } }">
      <v-card elevation="6">
        <v-img
          :alt="item.name"
          :src="item.image.medium"
          width="175"
          height="275"
        />
      </v-card>
    </router-link>
    <h3 class="pt-2">{{ item.name }}</h3>
  </v-card>
</template>

<script>
export default {
  name: "ShowsListItem",
  props: {
    item: Object
  }
};
</script>
