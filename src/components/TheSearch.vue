<template>
  <v-overlay
    color="blue-grey darken-4"
    :absolute="false"
    opacity="1"
    :value="getOpenOverlay"
    class="search d-flex"
  >
    <div class="search-overlay d-flex flex-column">
      <v-btn class="ml-auto" icon color="white" @click="setOpenOverlay(false)">
        <v-icon>{{ closeIcon }}</v-icon>
      </v-btn>
      <v-text-field
        v-model="query"
        @input="searchShows"
        label="Search your favorite TV show"
        class="pt-6"
      ></v-text-field>
      <div v-if="shows.length > 0" class="search-overlay__listing pt-12">
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="show in shows"
            :key="'Search show ' + show.show.id"
            class="pr-4"
          >
            <ShowsListItem :item="show.show" />
          </v-slide-item>
        </v-slide-group>
      </div>
    </div>
  </v-overlay>
</template>

<script>
import { mdiClose } from '@mdi/js'
import { mapGetters, mapMutations } from 'vuex'
import { getSearchShows } from '@/api/search.api'
import ShowsListItem from './ShowsListItem.vue'

export default {
  name: 'TheSearch',
  data: () => ({
    closeIcon: mdiClose,
    query: '',
    shows: [],
    message: '',
  }),
  components: {
    ShowsListItem,
  },
  computed: {
    ...mapGetters('Search', ['getOpenOverlay']),
  },
  methods: {
    ...mapMutations('Search', ['setOpenOverlay']),
    async searchShows() {
      this.message = ''

      getSearchShows(this.query)
        .then(res => (this.shows = res.data))
        .catch(error => {
          this.message = error
        })
    },
  },
}
</script>

<style lang="scss">
.search {
  .v-overlay__content {
    width: 100%;
    padding: 1rem;
  }
}
.search-overlay {
  width: 1140px;
  margin: 0 auto;
  max-width: 100%;
}
</style>
