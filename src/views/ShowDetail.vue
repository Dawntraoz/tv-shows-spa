<template>
  <v-lazy
    :options="{
      threshold: 0.5,
    }"
    transition="fade-transition"
  >
    <v-parallax
      class="blue-grey darken-4"
      height="auto"
      :src="backgroundImage | urlFormatter"
    >
      <v-container>
        <v-row class="white--text py-md-12">
          <v-col cols="12" md="5">
            <v-img
              :src="posterImage | urlFormatter"
              class="ml-auto elevation-6"
              contain
              width="400"
            ></v-img>
          </v-col>
          <v-col cols="12" md="7" class="pa-4">
            <h1 class="display-2">
              {{ getShowInfo.name }}
            </h1>
            <div class="d-flex flex-column pt-2">
              <p class="subtitle-1">
                <span
                  v-for="genre in getShowInfo.genres"
                  :key="genre"
                  class="pr-2"
                >
                  {{ genre }}
                </span>
              </p>
              <p
                class="headline d-flex align-center"
                v-if="getShowInfo.rating && getShowInfo.rating.average"
              >
                {{ getShowInfo.rating.average }}
                <v-icon color="orange">{{ starIcon }}</v-icon>
              </p>
              <div v-html="getShowInfo.summary"></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </v-lazy>
</template>

<script>
import { mdiStar } from '@mdi/js'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ShowDetail',
  props: {
    id: [Number, String],
  },
  data: () => ({
    starIcon: mdiStar,
  }),
  computed: {
    ...mapGetters('Shows', ['getShowInfo']),
    ...mapGetters('Shows', ['getShowImages']),
    backgroundImage() {
      if (this.getShowImages.length <= 0) return ''

      const bgImage = this.getShowImages.filter(
        image => image.type === 'background',
      )[0]
      return bgImage ? bgImage.resolutions.original.url : ''
    },
    posterImage() {
      if (this.getShowImages.length <= 0) return ''

      const psImage = this.getShowImages.filter(
        image => image.type === 'poster',
      )[0]
      return psImage ? psImage.resolutions.original.url : ''
    },
  },
  async mounted() {
    await this.fetchShow(this.id)
  },
  methods: {
    ...mapActions('Shows', ['fetchShow']),
  },
  async beforeRouteUpdate(to, from, next) {
    await this.fetchShow(to.params.id)
    next()
  },
}
</script>

<style lang="scss">
.v-parallax {
  min-height: 90vh;

  .v-parallax__image-container {
    opacity: 0.15;
  }
}
</style>
