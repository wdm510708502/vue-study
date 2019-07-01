import Vue from 'vue'
import Router from 'vue-router'
// 单独引入 message
import { Message } from 'element-ui'
// 引入路由对应的组件
// import Login from '@/components/login/login.vue'
// import UseElement from '@/components/useElement/useElement.vue'
// import Home from '@/components/home/home.vue'
// import Users from '@/components/users/users.vue'
// import Rights from '../components/rights/rights.vue'
// import Roles from '../components/roles/roles.vue'
// import Categories from '../components/categories/categories.vue'
// import Goods from '../components/goods/goods.vue'
// import GoodsAdd from '@/components/goodsAdd/goodsAdd.vue'
// import Orders from '../components/orders/orders.vue'
// import Reports from '../components/reports/reports.vue'

// 路由懒加载
const Login = () => import('@/components/login/login.vue')
const UseElement = () => import('@/components/useElement/useElement.vue')
const Home = () => import('@/components/home/home.vue')
const Users = () => import('@/components/users/users.vue')
const Rights = () => import('../components/rights/rights.vue')
const Roles = () => import('../components/roles/roles.vue')
const Categories = () => import('../components/categories/categories.vue')
const Goods = () => import('../components/goods/goods.vue')
const GoodsAdd = () => import('@/components/goodsAdd/goodsAdd.vue')
const Orders = () => import('../components/orders/orders.vue')
const Reports = () => import('../components/reports/reports.vue')

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/', redirect: '/home'
    },
    // 添加路由：使用 element=ui 的路由
    {
      path: '/useElement',
      name: 'useElement',
      component: UseElement
    }, // this.$router.push('/userELement')   this.$router.push({ name: 'userElement' })
    // 添加一个 login 路由
    {
      path: '/login',
      name: 'login', // 别名
      component: Login
    },
    // 添加一个首页路由
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/users', component: Users },
        { path: '/rights', component: Rights},
        { path: '/roles', component: Roles }, // 角色列表
        { path: '/categories', component: Categories}, // 商品分类
        { path: '/goods', component: Goods},
        { path: '/goodsAdd', component: GoodsAdd }, // 商品添加
        { path: '/orders', component: Orders }, // 百度地图
        { path: '/reports', component: Reports } // 百度地图
      ]
    }
  ]
})

// 添加一个全局前置守卫
router.beforeEach((to, from, next) => {
  // 获取token
  let token = window.localStorage.getItem('token')

  console.log(to)
  if (to.name === 'login') {
    next()
  } else {
    if (!token) {
    // 跳转到 login 路由
    // $router的写法是在vue的实例里的
      Message.error('你还没有登录,请先登录')
      router.push('/login')
    } else {
    // 存在,继续执行
      next()
    }
  }
  // 判断
  // if(!token) {
  //   // 跳转到 login 路由
  //   // $router的写法是在vue的实例里的
  //   router.push('/login')
  // } else {
  //   // 存在,继续执行
  //   next()
  // }
})

export default router
