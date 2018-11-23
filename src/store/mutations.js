/*
* 包含n个直接更新状态数据的对象
* */
import Vue from 'vue'
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
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },

  [RESET_USER] (state){
    state.user = {}
  },

  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },

  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },

  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },

  [ADD_FOOD_COUNT] (state, {food}) {
    if(food.count){
      food.count ++
    }else{ // 第一次
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }
  },

  [REDUCE_FOOD_COUNT] (state, {food}) {
    if(food.count){
      food.count --
      this.cartFoods.splice(this.cartFoods.indexOf(food),1)
    }
  },

  [CLEAR_CART] (state) {
    // 清除food中的count
    state.cartFoods.forEach (food => food.count = 0)
    state.cartFoods = []
  },
}
