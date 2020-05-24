<template>
  <v-container>
    <v-row v-for="genre in getGenres" :key="genre">
      <ShowsListTitle :title="genre" />
      <v-col cols="12">
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="show in showsByGenre(genre)"
            :key="'Show ' + show.id"
            class="pr-4"
          >
            <ShowsListItem :item="show" />
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShowsListTitle from '@/components/ShowsListTitle.vue'
import ShowsListItem from '@/components/ShowsListItem.vue'

export default {
  name: 'ShowsListing',
  data: () => ({
    isLoading: false,
  }),
  components: {
    ShowsListTitle,
    ShowsListItem,
  },
  computed: {
    ...mapGetters('Shows', ['getShows']),
    ...mapGetters('Shows', ['getGenres']),
  },
  methods: {
    ...mapActions('Shows', ['fetchShows']),
    showsByGenre: function(genre) {
      return this.getShows.filter(show => show.genres.some(g => g === genre))
    },
  },
  async mounted() {
    if (this.getShows.length === 0) {
      this.isLoading = true
      await this.fetchShows()
      this.isLoading = false
    }
  },
}
</script>
