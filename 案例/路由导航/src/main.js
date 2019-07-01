// 主要职责,将 App.vue 渲染到 index.html
import Vue from 'vue'
import App from './App.vue'
// 引入 vue-router
import VueRouter from "vue-router"
// 使用VueRouter
Vue.use(VueRouter)

// 引入路由组件文件
import Mus from './components/mus'
import News from './components/news'

// 设置路由的路径
const routes = [
  {
    path:'/mus',component:Mus
  },
  {
    path:'/news',component:News
  }
]

// 实例化路由对象
var router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
