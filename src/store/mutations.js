/*
* 包含n个直接更新状态数据的对象
* */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  SEND_CODE
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

  [SEND_CODE] (state, {phone}) {
    state.phone = phone
  },

  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },

  [RESET_USER] (state){
    state.user = {}
  }
}