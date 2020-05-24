<template>
  <v-container>
    <v-row v-for="genre in genres" :key="genre">
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
// @ is an alias to /src
import { getAllShows } from "@/api/shows.api";
import ShowsListTitle from "@/components/ShowsListTitle.vue";
import ShowsListItem from "@/components/ShowsListItem.vue";

export default {
  name: "ShowsListing",
  data: () => ({
    genres: [],
    shows: []
  }),
  components: {
    ShowsListTitle,
    ShowsListItem
  },
  mounted() {
    getAllShows()
      .then(res => {
        this.genres = res.data
          .reduce((acc, show) => acc.concat(show.genres), [])
          .filter((genre, index, self) => self.indexOf(genre) === index);
        this.shows = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    showsByGenre: function(genre) {
      return this.shows.filter(show => show.genres.some(g => g === genre));
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
