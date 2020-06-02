// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// Api
import moxios from 'moxios'
import api from '@/api'

// Global components
import BaseLoader from '@/components/BaseLoader.vue'

function appInit(VueInstance) {
  Vue.use(Vuetify)
  moxios.install(api)
  VueInstance.use(VueRouter)
  VueInstance.use(Vuex)
  VueInstance.use(Vuetify)
  VueInstance.config.productionTip = false
  VueInstance.filter('urlFormatter', function(value) {
    if (!value) return ''
    return value.replace(/^http:\/\//i, 'https://')
  })
  VueInstance.component('BaseLoader', BaseLoader)

  return VueInstance
}

export { appInit }
