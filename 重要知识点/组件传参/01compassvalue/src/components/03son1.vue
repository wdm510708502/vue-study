<template>
    <div class="son1">
        <h4>son1</h4>
        {{ msg }}<br>
        <button @click="toSon2">点我向 son2 中传递参数</button>
    </div>
</template>

<script>
// 引入 bus
import bus from '../assets/js/bus'

export default {
    data(){
        return{
            msg:'son1'
        }
    },
    methods: {
        // 向 bus 中传参
        toSon2() {
            // 给 bus 这个vue实例添加一个自定义事件
            bus.$emit('toSon', this.msg)
        }
    },
}
</script>

<style>
.son1 {
  border: 5px solid pink;
}
</style>
