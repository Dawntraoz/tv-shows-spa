<template>
  <v-app>
    <TheHeader />
    <v-content class="blue-grey darken-4">
      <router-view />
    </v-content>
    <TheSearch />
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheSearch from '@/components/TheSearch.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSearch,
  },
  watch: {
    $route() {
      this.setOpenOverlay(false)
    },
  },
  methods: {
    ...mapMutations('Search', ['setOpenOverlay']),
  },
}
</script>
