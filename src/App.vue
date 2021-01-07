<template>
  <div id="app">
      <Footer v-show="isShow"></Footer>
      <router-view></router-view>
  </div>
</template>

<script>
// import uri from '@/config/uri'

import Footer from '@/components/Navigation/Footer'
export default {
    data () {
        return {
            // isShow : true
        }
    },
    components:{
        Footer

    },
    created () {
        // this.$http.get(uri.getCities).then(ret => console.log(ret))
        
    },
    computed: {
        isShow(){
           return this.$store.state.global.isShowFooter
        }
    }
}
</script>

<style lang="scss">

</style>
