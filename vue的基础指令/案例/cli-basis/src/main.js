// main.js 为入口文件，并与app.vue组件向关联使此组件为跟组件

// 模块的导入
// import fs from 'fs'
import Vue from 'vue'
// 是所有的内容都在app.vue 上面呈现。
import App from './App.vue'

// 安装 npm i vue-router --save  //save是保存信息的
// 引入 vue-router
import VueRouter from 'vue-router'
// 使用VueRouter
Vue.use(VueRouter)

// 引入 mus 的组件文件
import Mus from './components/mus.vue'
// 引入 News 的组件文件
import News from './components/news.vue'

// 创建路由选项
let routes = [
  { path: '/mus', component: Mus },
  { path: '/news', component: News }
]

// 创建路由对象
let router = new VueRouter({
    routes
})

// 生成vue的根实例;创建每个组件都会生成一个vue的实列，并且会用到根实例上面的所有属性
new Vue({
  el: '#app',
  // 将内容渲染到 App 中
  render: h => h(App),
  router
})
