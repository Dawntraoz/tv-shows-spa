<template>
  <v-card color="transparent" class="white--text" flat width="185">
    <router-link
      :to="{ name: 'show', params: { id: item.id } }"
      :title="'Go to ' + item.name"
    >
      <v-img
        :alt="item.name"
        :src="item.image ? item.image.medium : '' | urlFormatter"
        width="175"
        height="275"
        class="blue-grey darken-4 elevation-6"
      />
    </router-link>
    <header>
      <h3 class="subtitle-1 pt-2">
        {{ item.name }}
      </h3>
    </header>
    <span v-if="item.rating && item.rating.average" class="subtitle-1">
      {{ item.rating.average }}
      <v-icon color="orange">{{ starIcon }}</v-icon>
    </span>
  </v-card>
</template>

<script>
import { mdiStar } from '@mdi/js'

export default {
  name: 'ShowsListItem',
  props: {
    item: Object,
  },
  data: () => ({
    starIcon: mdiStar,
  }),
}
</script>
