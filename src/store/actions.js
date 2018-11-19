/*
* vuex最核心的管理对象
* */
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  //异步获取地址信息
  async getAddress ({commit,state}) {
    //发送ajax请求
    const {geohash} = state
    const result = await reqAddress(geohash)
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
  }

}

