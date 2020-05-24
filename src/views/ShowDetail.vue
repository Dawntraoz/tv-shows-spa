<template>
  <div>
    <v-parallax
      class="blue-grey darken-4"
      height="90vh"
      :src="backgroundImage ? backgroundImage.resolutions.original.url : ''"
    >
      <v-card class="transparent white--text" flat>
        <v-container>
          <v-row dense>
            <v-col cols="12" md="4">
              <v-img
                v-if="posterImage"
                :src="posterImage.resolutions.original.url"
                class="ml-auto"
                contain
                width="400"
              ></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <h1 class="display-3">{{ getShowInfo.name }}</h1>
              <span v-if="getShowInfo.rating && getShowInfo.rating.average">
                {{ getShowInfo.rating.average }}
                <v-icon color="orange">mdi-star</v-icon>
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-parallax>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ShowDetail",
  props: {
    id: [Number, String]
  },
  computed: {
    ...mapGetters("Shows", ["getShowInfo"]),
    ...mapGetters("Shows", ["getShowImages"]),
    backgroundImage() {
      return this.getShowImages.length > 0
        ? this.getShowImages.filter(image => image.type === "background")[0]
        : "";
    },
    posterImage() {
      return this.getShowImages.length > 0
        ? this.getShowImages.filter(image => image.type === "poster")[0]
        : "";
    }
  },
  async mounted() {
    await this.fetchShow(this.id);
  },
  methods: {
    ...mapActions("Shows", ["fetchShow"])
  },
  async beforeRouteUpdate(to, from, next) {
    await this.fetchShow(to.params.id);
    next();
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
