<template>
    <div>
        <div class="loading" v-show="isLoading">
            <van-loading size="24px" type="spinner">加载中...</van-loading>

        </div>
        <van-card v-for="item in list" :key="item.filmId">
             <template #thumb>
                <img :src="item.poster" width="66">
            </template>
            <template #title>
                <div class="title">
                    {{item.name}}
                    <span class="item">{{item.filmType.name}}</span>
                </div>
            </template>
            <template #desc>
                <div class="desc">
                    <div >
                        观众评分 <span class="grade">{{item.grade}}</span> 
                    </div>
                    <div>
                        主演 :{{item.actors | parseActors}}
                    </div>
                    <div>
                        {{item.nation}} | {{item.runtime}} 分钟
                       

                            <div class="nowPlayingFilm-buy">购票</div>
                      
                    </div>
                </div>
            </template>
            
        </van-card>
    </div>
</template>
<script>
import uri from '@/config/uri'
import Vue from 'vue';
import {Loading , Toast,Card } from 'vant';


Vue.use(Loading);
Vue.use(Card);
Vue.use(Toast);
export default {
    data(){
        return{
            isLoading:true,
            list : [],
        }
    },
    filters:{
        parseActors(actors){
            if (actors) {
                var str = ''
                actors.forEach(item => {
                    str += item.name + ' '
                })
                return str.substr(0,15) + '...'
            } else {
                return '暂无主演'
            }
        }
    },
    created () {
        this.$http.get(uri.getNowPlaying).then(ret => {
            if (ret.status === 0) {
                this.list = ret.data.films
            } else {
                Toast.fail("网络繁忙")
            }
            this.isLoading = false
            console.log(ret);
        })
    }
}
</script>
<style lang="scss" scoped>
    .loading{
        text-align: center;
    }
    
        
    img{
        border-radius: 0;
    }
    .title{
        color: #191a1b;
        font-size: 16px;
    }
    .item{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
    }
    .grade{
        color: #ffb232;
        font-size: 14px;
    }
    .desc{
        font-size: 13px;
        position: relative;;
    }
    .nowPlayingFilm-buy{
        line-height: 25px;
        height: 25px;
        width: 50px;
        border: 1px solid #ff5f16;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: absolute;
        top: 0;
        right: 0;
    }
</style>