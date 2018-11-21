<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    components: {
      FooterGuide
    },

    mounted () {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUserInfo')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
