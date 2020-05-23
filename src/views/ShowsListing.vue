<template>
  <div class="shows-listing">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-for="show in shows" :key="'Show ' + show.id">
      <router-link :to="{ name: 'show', params: { id: show.id } }">
        {{ show.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getAllShows } from "@/api/shows.api";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ShowsListing",
  components: {
    HelloWorld
  },
  data: () => {
    return {
      shows: []
    };
  },
  mounted() {
    getAllShows().then(res => (this.shows = res.data));
  }
};
</script>
