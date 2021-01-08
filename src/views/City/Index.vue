<template>
    <div>
        <van-index-bar :index-list="indexList">
            <van-index-anchor index="1">标题1</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

            <van-index-anchor index="2">标题2</van-index-anchor>
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />

        ...
        </van-index-bar>
    </div>
</template>
<script>
import uri from '@/config/uri'
import Vue from 'vue';
import { IndexBar, IndexAnchor , Cell} from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
    data () {
        return {
            indexList : [1,2],

        }
    },
    created () {
        this.$store.commit('global/setFooter',false)
        this.$http.get(uri.getCities).then(ret => {
            console.log(ret);
        })
    },
    beforeDestroy(){
        this.$store.commit('global/setFooter',true)

    }
}
</script>