<template>
    <div class="son">
        <h4>子组件</h4>
        {{ sonMsg }}
        <button @click.prevent="passVal">点我向父组件传值</button>
    </div>
</template>

<script>
export default {
    data() {
       return {
           sonMsg: '子组件中的数据',
           sonMsg2: ',我是第二个数据'
       }
    },
    methods: {
        // 给父组件传参
        passVal() {
            // 给子组件添加一个自定义事件
            this.$emit('tofather',this.sonMsg,this.sonMsg2)
        }
    },
}
</script>

<style>

</style>
