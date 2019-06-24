// 引入 vue app
import Vue from 'vue'
import App from './App.vue'

// 引入 aioxs
import axios from 'axios'
// 写在 main.js 中的代码一般要跟 vue 差生关联，所以在这里不能直接使用 import axios

// 引入 bootstrap 样式 (全局引用)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// 引入 index.css 样式（为模板准备,引入位置一定要放到bootstrap 的下面， 因为它依赖于 bootstrap）
import './assets/css/index.css'

// 引入 router
import router from './router.js'

// 将 axios 作为  Vue 的实例属性添加到构造器
Vue.prototype.$http = axios
// axios ---> $http
// Vue 全家桶：
//   vue
//   vue-router
//   vue-cli
//    vue-resource （远古时期：发送异步请求的）
//      $http
//   axios => $http

// 注册路由
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
