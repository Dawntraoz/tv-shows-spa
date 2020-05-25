<template>
  <v-app-bar app class="blue-grey darken-4" flat>
    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <router-link to="/" text>
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

    <v-btn icon color="white" @click="setOpenOverlay(!getOpenOverlay)">
      <v-icon>{{ searchIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TheHeader',
  data: () => ({
    searchIcon: mdiMagnify,
  }),
  computed: {
    ...mapGetters('Search', ['getOpenOverlay']),
  },
  methods: {
    ...mapMutations('Search', ['setOpenOverlay']),
  },
}
</script>
