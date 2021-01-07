<template>
    <div class="conter">
       <van-list
        v-model="isLoading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <!-- <div class="loading" v-show="isLoading">
            <van-loading size="24px" type="spinner">加载中...</van-loading>

        </div> -->
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
                    
                    <div>
                        主演 :{{item.actors | parseActors}}
                    </div>
                    <div >
                        上映日期： <span >{{item.premiereAt | parserPremiereAt}}</span> 
                    </div>
                    <div>
                        {{item.nation}} | {{item.runtime}} 分钟
                       

                            <div class="nowPlayingFilm-buy">预约</div>
                      
                    </div>
                </div>
            </template>
            
        </van-card>
        </van-list>
    </div>
</template>
<script>
import uri from '@/config/uri'
import Vue from 'vue';
import {Loading , Toast,Card , List  } from 'vant';


Vue.use(Loading);
Vue.use(Card);
Vue.use(Toast);
Vue.use(List );
import moment from 'moment'
export default {
    data(){
        return{
            finished:false,
            isLoading:true,
            list : [],
            pageNum: 1,
        }
    },
    methods:{
        onLoad(){
            this.getData()
        },
        getData() {
            this.$http.get(uri.getComingSoon + '?pageNum=' + this.pageNum).then(ret => {
            if (ret.status === 0) {
                if (this.pageNum <= Math.ceil(ret.data.total / 10)){
                    this.list = [...this.list,...ret.data.films]
                    this.pageNum++
                
                } else {
                    this.finished = true
                }
                
            } else {
                Toast.fail("网络繁忙")
            }
            this.isLoading = false

           
        })
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
        },
        parserPremiereAt(time){
            const arr = ['日','一','二','三','四','五','六']
            const weak = arr[moment(time * 1000).format('d')]
            const day = moment(time * 1000).format('D')
            const month = moment(time * 1000).format('M')
            return `周${weak} ${month}月${day}日`
        }
    },
    created () {
        this.getData()
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
    .van-card__thumb {
        width: 66px;    
        height: 92px;
    }
    .conter{
        margin-bottom: 50px;
    }
</style>