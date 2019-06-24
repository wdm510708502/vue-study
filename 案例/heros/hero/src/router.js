// 注册路由

// 引入 vue
import Vue from 'vue'
// 引入 vue-router
import VueRouter from 'vue-router'

// 给路由准备对应的组件
import HeroList from './components/heroList.vue'
import HeroAdd from './components/heroAdd.vue'
import HeroEdit from './components/heroEdit.vue'
import foo from './components/foo.vue'
import boo from './components/boo.vue'
import index from './components/index.vue'

// 使用
Vue.use(VueRouter)

//创建路由选项
let routes = [
    { path: '/heroList', component: HeroList },
    { path: '/foo', component: foo },
    { path: '/boo', component: boo },
    { path: '/heroList/heroAdd', component: HeroAdd },
    { path: '/heroList/heroEdit/:id', component: HeroEdit },
    { path: '/', component: index }, //默认路由
  ]
// 创建路由对象
let router = new VueRouter({
    routes: routes
})

// 暴露给外界： vue 
export default router
