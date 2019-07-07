<template>
    <div>
        {{ count }} <br>
        <button @click="addCount">点我修改 count</button>
        <button @click="add10">点我给 count 加任意数据</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
   computed: {
       ...mapState({
           count: state => state.count
       })
   },
   methods: {
       addCount(){
        // 调用 mutations
        // 这样是错误的: this.$store.mutations.updateCount()
        // 这样才是正确的,commit是个方法
        this.$store.commit('updateCount')
       },
       add10(){
        //    this.$store.commit('add10', {
        //        num: 10
        //    })
        // 简写
        this.$store.commit({
            type: 'add10', // 将来调用 mutations 中的方法名
            num: 10 // 参数
        })
       }
   },
}
</script>

<style>

</style>
