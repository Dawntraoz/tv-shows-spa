<template>
  <v-container class="show-listing">
    <v-row v-if="!isLoading">
      <v-col v-for="genre in getGenres" :key="genre" cols="12">
        <ShowsListTitle :title="genre" />
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          min-height="360"
          transition="fade-transition"
        >
          <v-slide-group multiple show-arrows>
            <v-slide-item
              v-for="show in showsByGenre(genre)"
              :key="'Show ' + show.id"
              class="pr-4"
            >
              <ShowsListItem :item="show" />
            </v-slide-item>
          </v-slide-group>
        </v-lazy>
      </v-col>
    </v-row>
    <BaseLoader v-else />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShowsListTitle from '@/components/ShowsListTitle.vue'
import ShowsListItem from '@/components/ShowsListItem.vue'

export default {
  name: 'ShowsListing',
  components: {
    ShowsListTitle,
    ShowsListItem,
  },
  data: () => ({
    isLoading: false,
  }),
  computed: {
    ...mapGetters('Shows', ['getShows']),
    ...mapGetters('Shows', ['getGenres']),
  },
  async mounted() {
    if (this.getShows.length === 0) {
      this.isLoading = true
      await this.fetchShows()
      this.isLoading = false
    }
  },
  methods: {
    ...mapActions('Shows', ['fetchShows']),
    showsByGenre: function(genre) {
      return this.getShows
        .filter(show => show.genres && show.genres.some(g => g === genre))
        .slice(0, 10)
    },
  },
}
</script>

<style scoped lang="scss">
.show-listing {
  height: 100%;
}
</style>
