// 将 vuex 进行封装
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建仓库
let store = new Vuex.Store({
    // 保存状态
    state:{
        count: 3,
        name: 'xjj',
        gender: '男',
        age: 18
    },
    // 修改状态
    mutations: {
        // state: 就是当前仓库对象的 state
        updateCount:function (state){
            state.count += 1
        },
        add10: function (state,payload){
            // 加的数字由 payload 中的 num 来决定
            state.count += payload.num
        }
    },
    // 操作 mutations
    actions: {
        updateCount: function(context){
            // // context 上下文包含整个仓库中的所有内容
            // console.log(context);
            // 操作 Mutations
            context.commit({
                type: 'updateCount'
            })
        },
        add10: function(context, payload) {
            // context.commit('add10',payload)
            // 简写
            context.commit(payload)
        }
    }
})

// 导出对象
export default store