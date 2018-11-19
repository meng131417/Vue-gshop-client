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
      console.log('----')
      this.$store.dispatch('getAddress')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
