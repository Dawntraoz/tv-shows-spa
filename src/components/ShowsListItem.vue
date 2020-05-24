<template>
  <v-card color="transparent" class="white--text" flat width="185">
    <router-link :to="{ name: 'show', params: { id: item.id } }">
      <v-card elevation="6">
        <v-img
          :alt="item.name"
          :src="item.image ? item.image.medium : ''"
          width="175"
          height="275"
          class="blue-grey darken-4"
        />
      </v-card>
    </router-link>
    <h4 class="subtitle-1 pt-2">
      {{ item.name }}
    </h4>
    <span v-if="item.rating && item.rating.average" class="subtitle-1">
      {{ item.rating.average }}
      <v-icon color="orange">mdi-star</v-icon>
    </span>
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
