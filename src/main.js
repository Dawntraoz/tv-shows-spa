import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

Vue.filter('urlFormatter', function(value) {
  if (!value) return ''
  return value.replace(/^http:\/\//i, 'https://')
})

// Global components
import BaseLoader from '@/components/BaseLoader.vue'

Vue.component('BaseLoader', BaseLoader)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
