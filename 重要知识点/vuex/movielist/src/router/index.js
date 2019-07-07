import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

// 引入需要的组件
import coming_soon from '../components/coming_soon/coming_soon.vue'
import in_theaters from '../components/in_theaters/in_theaters.vue'
import top250 from '../components/top250/top250.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {path: '/coming_soon',name:'coming_soon',component:coming_soon},
        {path: '/in_theaters',name:'in_theaters',component:in_theaters},
        {path: '/top250',name:'top250',component:top250}
      ]
    }
  ]
})
