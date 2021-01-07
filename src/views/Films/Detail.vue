<template>
    <div>
        <!-- 图片 -->
        <div>
            <img v-lazy="filmInfo.poster" width="100%">
        </div>
        <!-- 介绍 -->
        <div>
            <div>{{filmInfo.name}}</div>
            <div>{{filmInfo.category}}</div>
            <div>{{filmInfo.premiereAt | parserPremiereAt}} 上映</div>
            <div>{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
            <div>{{filmInfo.synopsis}}</div>
        </div>
        <!-- 演员 -->
            <Actors :key="filmInfo.actors.length">
                <div class="swiper-slide" v-for="(item,index) in filmInfo.actors" :key="index">
                    <img :src="item.avatarAddress" width="85">
                </div>
            </Actors>
        <div>

        </div>
        <!-- 剧照 -->
        <div></div>
    </div>
</template>
<script>
import Actors from '@/views/Films/Actors'
import moment from 'moment'
import Vue from 'vue';
import { Toast,  } from 'vant';

Vue.use(Toast);
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
    loading : 'https://2url.cc/1OwrB'
})


import uri from '@/config/uri'
export default {
    data(){
        return {
            filmInfo:{actors:[]}
        }
    },
    components: {
        Actors
    },
    created(){
        this.$http.get(uri.getFilmInfo + '?filmId=' + this.$route.params.filmId)
        .then(ret => {
            console.log(ret);
            if (ret.status === 0) {
                this.filmInfo = ret.data.film
            } else {
                Toast.fail(ret.msg);
            }
        })
    },
    filters:{
        parserPremiereAt(time){
            return moment(time * 1000).format('YYYY-MM-DD')
        }
    }
}
</script>