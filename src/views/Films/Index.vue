<template>
    <div>

        <Header/>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/Navigation/Header'
export default {
    components:{
        Header
    }
}
</script>