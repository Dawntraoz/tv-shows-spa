<template>
  <v-card color="transparent" flat width="185">
    <router-link :to="{ name: 'show', params: { id: item.id } }">
      <v-card elevation="6">
        <v-img
          :alt="item.name"
          :src="item.image.medium"
          width="175"
          height="275"
          class="blue-grey darken-4"
        />
      </v-card>
    </router-link>
    <h4 class="white--text subtitle-1 pt-2">{{ item.name }}</h4>
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
