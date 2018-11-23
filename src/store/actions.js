/*
* vuex最核心的管理对象
* */
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART
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
  },

  // 异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if(result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家商品列表
  async getShopGoods ({commit}, cb){
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      typeof cb === 'function' && cb()
    }
  },

  // 异步获取商家评价列表
  async getShopRatings ({commit}){
    const result = await reqShopRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

  // 更新指定food的数量的同步action
  updateFoodCount ({commit}, {food,isAdd}) {
    if(isAdd){
      commit(ADD_FOOD_COUNT, {food})
    }else{
      commit(REDUCE_FOOD_COUNT,{food})
    }
  },

  // 清除购物车数据的同步action
  clearCart ({commit}){
    commit(CLEAR_CART)
  }

}

