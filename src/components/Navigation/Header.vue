<template>
    <div>
        <van-tabs @click="onClick" v-model="active" line-width="55px">
            <van-tab  title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
    data(){
        return {
            active:0,
            urls:['/films/nowPlaying','/films/comingSoon']
        }
    },
    methods: {
    onClick(index) {
            this.$router.push(this.urls[index])
        },
    },
    created () {
        this.active = this.urls.indexOf(this.$route.path)
    }
}
</script>