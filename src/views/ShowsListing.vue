<template>
  <v-container>
    <v-row v-for="genre in genres" :key="genre">
      <ShowsListTitle :title="genre" />
      <v-slide-group multiple>
        <v-slide-item
          v-for="show in showsByGenre(genre)"
          :key="'Show ' + show.id"
          class="px-4"
        >
          <ShowsListItem :item="show" />
        </v-slide-item>
      </v-slide-group>
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
    getAllShows().then(res => {
      res.data.map(show => {
        show.genres.map(genre => {
          if (!this.genres.some(g => g === genre)) this.genres.push(genre);
        });
      });
      this.shows = res.data;
    });
  },
  methods: {
    showsByGenre: function(genre) {
      return this.shows.filter(show => show.genres.some(g => g === genre));
    }
  }
};
</script>
