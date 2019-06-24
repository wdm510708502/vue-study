// Vue:是构造器 vue是每个.vue  vue实例是以Vue为构造器创建的对象
import Vue from 'vue'
import App from './App.vue'



// 引入 bootstrap 样式 (根据后缀名 全局引用)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// 引入 index.css 样式（为模板准备,引入位置一定要放到bootstrap 的下面， 因为它依赖于 bootstrap）
import './assets/css/index.css'
// 引入 路由vue-router 模块
import VueRouter from 'vue-router'


// 给路由准备对应的组件
import HeroList from './components/heroList.vue'
import foo from './components/foo.vue'
import boo from './components/boo.vue'
import HeroAdd from './components/heroAdd.vue'
import HeroEdit from './components/heroEdit.vue'


Vue.use(VueRouter)


// 创建路由路径
let routes = [
  { path: '/heroList', component: HeroList },
  { path: '/foo', component: foo },
  { path: '/boo', component: boo },
  { path: '/heroAdd', component: HeroAdd },
  { path: '/heroEdit/:id', component: HeroEdit },
]

// 实例化路由对象
let router = new VueRouter({
  routes
})




new Vue({
  el: '#app',
  render: h => h(App),
  router
})
