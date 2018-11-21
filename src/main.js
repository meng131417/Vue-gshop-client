/**
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'
import store from './store'

//注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component(Button.name, Button)

import './mock/mockSever'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
