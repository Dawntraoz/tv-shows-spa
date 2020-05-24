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
import { mapActions, mapGetters } from "vuex";
import ShowsListTitle from "@/components/ShowsListTitle.vue";
import ShowsListItem from "@/components/ShowsListItem.vue";

export default {
  name: "ShowsListing",
  data: () => ({
    isLoading: false
  }),
  components: {
    ShowsListTitle,
    ShowsListItem
  },
  computed: {
    ...mapGetters("Shows", ["getShows"]),
    ...mapGetters("Shows", ["getGenres"])
  },
  methods: {
    showsByGenre: function(genre) {
      return this.getShows.filter(show => show.genres.some(g => g === genre));
    },
    ...mapActions("Shows", ["fetchShows"])
  },
  async mounted() {
    if (this.getShows.length === 0) {
      this.isLoading = true;
      await this.fetchShows();
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss">
.v-slide-group__prev,
.v-slide-group__next {
  position: absolute;
  top: -4rem;

  .v-icon {
    font-size: 40px;
    color: rgba(255, 255, 255, 1);
  }

  &.v-slide-group__next--disabled,
  &.v-slide-group__prev--disabled {
    .v-icon.v-icon--disabled {
      color: rgba(255, 255, 255, 0.15) !important;
    }
  }
}
.v-slide-group__prev {
  right: 3rem;
}
.v-slide-group__next {
  right: 0;
}
</style>
