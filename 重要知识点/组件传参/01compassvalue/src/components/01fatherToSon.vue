<template>
  <div class="son">
      <h4>子组件</h4>
      {{ abc }}
  </div>
</template>

<script>
export default {
  // 子: 通过 props 接收传递过来的参数 
    props:["abc"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.son {
  border: 5px solid pink;
}
</style>
