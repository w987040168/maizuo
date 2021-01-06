<template>
  <div id="app">
      <Footer/>
      <router-view></router-view>
  </div>
</template>

<script>
// import uri from '@/config/uri'

import Footer from '@/components/Navigation/Footer'
export default {
    components:{
        Footer
    },
    created () {
        // this.$http.get(uri.getCities).then(ret => console.log(ret))
    }
}
</script>

<style lang="scss">

</style>
