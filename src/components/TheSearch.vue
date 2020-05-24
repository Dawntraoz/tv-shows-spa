<template>
  <v-overlay
    color="blue-grey darken-4"
    :absolute="false"
    opacity="1"
    :value="getOpenOverlay"
    justify="start"
    align="start"
  >
    <v-btn icon color="white" @click="setOpenOverlay(false)">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-overlay>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { getSearchShows } from "@/api/search.api";

export default {
  name: "TheSearch",
  data: () => ({
    query: "",
    shows: []
  }),
  computed: {
    ...mapGetters("Search", ["getOpenOverlay"])
  },
  methods: {
    ...mapMutations("Search", ["setOpenOverlay"]),
    async searchShows() {
      getSearchShows(this.query)
        .then(res => (this.shows = res.data))
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss"></style>
