<template>
    <div>
        <h3>方式一: 直接使用(个人觉得第一种方便,但最好用第二种,都是一样的)</h3>
        {{ $store.state.count }}
        <h3>方式二: 使用辅助函数来将 state 中的内容映射过来</h3>
        {{ count }}<br />
        {{ name }}<br/>
        {{ gender }}<br/>
        {{ age }}
        </div>
</template>

<script>
// 引入输出函数 mapState
import { mapState } from 'vuex'

export default {
    // mapState 可以将 store 中的 state 进行映射
     computed: {
         ...mapState({
             count: function(state){
                 return state.count
             },
             name: function(state) {
                 return state.name
             },
            //  简写
             gender: state => state.gender,
             age: state => state.age 
             
         })
     },
}
</script>

<style>

</style>
