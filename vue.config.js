module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack(config) {
    config.plugins.delete('prefetch')
  },
}
