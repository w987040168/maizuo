<template>
    <div>
        dd
        <button @click="clickHander"> 处罚</button>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions,mapGetters} from 'vuex'
export default {
    created () {
        // this.$store.state.num = 123456
        console.log(this.$store.state.num);
        
    },
    computed: {
        ...mapState(['num','num2'])
    },
    mounted () {
        console.log(this.num);
        console.log(this.num2);
        this.setNum(5)
        this.setNum2(-5)
    },
    methods:{
        ...mapMutations(['setNum','setNum2']),
        clickHander(){
            // this.$store.commit('setNum',5)
            // this.$store.commit('setNum2',-5)
        }
    }
}
</script>