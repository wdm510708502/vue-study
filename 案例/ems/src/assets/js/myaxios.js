// 导入 axios
import axios from 'axios'
// 创建对象
var myaxios = {}
// 添加方法
myaxios.install = function(Vue) {
    // 给 vue 实例挂载属性
    Vue.prototype.$http = axios
}

export default myaxios