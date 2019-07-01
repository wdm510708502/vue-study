import Vue from 'vue'
import Router from 'vue-router'

// 导入home组件文件
import Home from '../components/home/home.vue'
// 导入member组件文件
import Member from '../components/member/member.vue'
// 导入car组件文件
import Car from '../components/car/car.vue'
// 导入search组件文件
import Search from '../components/search/search.vue'
// 导入newsList组件文件
import newsList from '../components/newsList/newsList.vue'
// 导入新闻数据组件文件
import news from '../components/news/news.vue'
// 导入商品展示组件文件
import shop from '../components/shop/shop.vue'



Vue.use(Router)

export default new Router({
  routes: [
    // 路由重定向,默认撞到home页面
    {path:'/',redirect:'/home'},
    {path:'/home',name:'home',component:Home},
    {path:'/member',name:'member',component:Member},
    {path:'/car',name:'car',component:Car},
    {path:'/search',name:'search',component:Search},
    // 新闻资讯
    {path:'/newsList',name:'newsList',component:newsList},
    // 新闻数据
    { path:'/news/:id',name:'news',component:news},
    // 商品展示
    { path:'/shop',name:'shop',component:shop},
  ]
})
