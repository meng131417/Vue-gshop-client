/*
* vuex最核心的管理对象
* */
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'

export default {
  //异步获取地址信息
  async getAddress ({commit,state}) {
    //发送ajax请求
    const {latitude,longitude} = state
    const result = await reqAddress(latitude,longitude)
    // 根据结果提交mutation
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },

  //异步获取食品分类列表
  async getCategorys ({commit}) {
    //发送ajax请求
    const result = await reqFoodCategorys()
    // 根据结果提交mutation
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  //异步获取商家列表
  async getShops ({commit, state}) {
    //发送ajax请求
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    // 根据结果提交mutation
    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  // 保存user的同步action
  saveUser({commit},user) {
    commit(RECEIVE_USER, {user})
  },

  //获取当前用户的信息异步action
  async getUserInfo ({commit}) {
    const result = await reqUserInfo ()
    if(result.code === 0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },

  //退出登录异步action
  async logout ({commit}) {
    const result = await reqLogout ()
    if(result.code === 0){
      commit(RESET_USER)
    }
  }

}

