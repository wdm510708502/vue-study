// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

// 注释了的vuex是因为进行封装了
// // 引入 vuex
// import Vuex from 'vuex'

// // use vuex
// Vue.use(Vuex)

// 创建一个 Vuex 对象
// Vuex 中创建的对象一般我们习惯叫做仓库
// const store = new Vuex.Store({
//   // 仓库中的状态
//   state: {
//     count: 1
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 将 vuex 挂载到 vue实例中
  store
})
