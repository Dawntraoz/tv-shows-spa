<template>
  <v-app-bar app class="blue-grey darken-4" flat>
    <router-link to="/" :title="'Go to homepage'">
      <v-icon color="white">{{ listIcon }}</v-icon>
    </router-link>

    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <router-link to="/" text :title="'Go to homepage'">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="60"
          height="60"
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      aria-label="search"
      icon
      color="white"
      @click="setOpenOverlay(!getOpenOverlay)"
    >
      <v-icon>{{ searchIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mdiMagnify, mdiViewDashboard } from '@mdi/js'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TheHeader',
  data: () => ({
    searchIcon: mdiMagnify,
    listIcon: mdiViewDashboard,
  }),
  computed: {
    ...mapGetters('Search', ['getOpenOverlay']),
  },
  methods: {
    ...mapMutations('Search', ['setOpenOverlay']),
  },
}
</script>
