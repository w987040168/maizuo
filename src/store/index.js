import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //   num : 0,
    //   num2 : 100,
  },
  mutations: {
    //   setNum(state,arg){
    //     state.num += arg
    //   },
    //   setNum2(state,arg){
    //     state.num2 += arg
    //   }
  },
  actions: {
  },
  getters: {
      
  },
  modules: {
    global
  }
})
