import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'
Vue.use(Vuex)

export default new Vuex.Store({
    // 保存状态
    state: {
        title:'',
        subjects: []
    },
    // 修改状态
    mutations: {
        // 负责修改状态(不能处理异步)
        setVal: function (state, payload) {
            state.title = payload.title
            state.subjects = payload.subjects
        }
    },
    // 操作 mutations
    actions: {
        setVal: function (context) {
            let url = 'http://api.douban.com/v2/movie/in_theaters?q=undefined&apikey=0df993c66c0c636e29ecbb5344252a4a'
            // 请求接口获得数据
            jsonp(url, function(err ,data) {
                // 执行 mutattions 中的方法
                context.commit({
                    type:'setVal',
                    title: data.title,
                    subjects: data.subjects
                })
            })
        }
    }
})