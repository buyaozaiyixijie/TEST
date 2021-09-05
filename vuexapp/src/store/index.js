import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import buyCar from './buyCar'

Vue.use(Vuex)

//创建整个项目的数据仓库对象，将多组件公用的数据放置到此对象里
export default new Vuex.Store({
  //data
  state,
  getters,
  //methods,在mutation里处理状态
  mutations,
  //异步方法
  actions,
  //模块
  modules: {
    buyCar
  }
})
