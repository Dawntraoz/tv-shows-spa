<template>
  <v-app>
    <TheHeader />
    <v-content class="blue-grey darken-4">
      <transition name="fade">
        <router-view />
      </transition>
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

<style lang="scss">
.v-slide-group__prev,
.v-slide-group__next {
  position: absolute;
  top: -3.75rem;

  .v-icon {
    font-size: 35px;
    color: rgba(255, 255, 255, 1);

    &,
    svg {
      height: 35px;
      width: 35px;
    }
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
  right: -0.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
