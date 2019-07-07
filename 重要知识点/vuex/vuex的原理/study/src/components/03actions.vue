<template>
    <div>
        {{ this.$store.state.count }}
        <button @click.prevent="getAction">点我调用actions</button>
        <button @click.prevent="add10">点我调用actions</button>
    </div>
</template>

<script>
export default {
    methods: {
        getAction() {
            // 调用 actions 中的方法
            this.$store.dispatch({
                type: 'updateCount'
            })
        },
        add10() {
            this.$store.dispatch({
                type: 'add10',
                num: 10
            })
        }
    }
}
</script>

<style>

</style>
