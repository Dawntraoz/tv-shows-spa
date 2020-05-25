import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 476,
      md: 768,
      lg: 1140,
      xl: 1280,
    },
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.blueGrey.darken4,
        accent: colors.blue.darken4,
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg',
  },
})
