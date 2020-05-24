<template>
  <v-parallax class="blue-grey darken-4" height="90vh" :src="backgroundImage">
    <v-card class="transparent white--text" flat>
      <v-container>
        <v-row dense>
          <v-col cols="12" md="4">
            <v-img
              :src="posterImage"
              class="ml-auto"
              contain
              width="400"
            ></v-img>
          </v-col>
          <v-col cols="12" md="8">
            <h1 class="display-3">{{ info.name }}</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-parallax>
</template>

<script>
import { getShow, getShowImages } from "@/api/shows.api";

export default {
  name: "ShowDetail",
  props: {
    id: [Number, String]
  },
  data: () => ({
    info: [],
    images: []
  }),
  computed: {
    backgroundImage() {
      return this.images.length > 0
        ? this.images.filter(image => image.type === "background")[0]
            .resolutions.original.url
        : "";
    },
    posterImage() {
      return this.images.length > 0
        ? this.images.filter(image => image.type === "poster")[0].resolutions
            .original.url
        : "";
    }
  },
  mounted() {
    getShow(this.id)
      .then(res => (this.info = res.data))
      .catch(error => {
        console.log(error);
      });
    getShowImages(this.id)
      .then(res => (this.images = res.data))
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss">
.v-parallax {
  min-height: 90vh;

  .v-parallax__image-container {
    opacity: 0.15;
  }
}
</style>
