module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        // 'router': '@/router',//this.$router
        // 'store': '@/store',//this.$store
      }
    }
  }
}