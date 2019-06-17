// 主要职责,将 App.vue 渲染到 index.html
import Vue from 'vue'
import App from './App.vue'
// 引入 vue-router
import VueRouter from 'vue-router'
// 使用
Vue.use(VueRouter)

// 给路由准备对应的组件
// mus 
import Mus from './components/mus.vue'
// news
import News from './components/news.vue'
// 创建路由选项
let routes = [
  { path:'/mus', component: Mus },
  { path:'/news', component: News }
]

// 创建路由对象
let router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
