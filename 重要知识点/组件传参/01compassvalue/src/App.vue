<template>
  <div id="app">
    <h3>01 父传子</h3>
    {{ msg }}
    <!-- 父:通过自定义属性将参数交给子组件 -->
    <fatherToSon :abc="msg"/>
    
    <h3>02 子传父</h3>
    {{ sonMsg }}{{ sonMsg2 }}
    <sonTofather @tofather="getval"/>
    
    <h3>03 eventBus </h3>
    <son1 />
    <son2 />
  </div>
</template>

<script>
import fatherToSon from './components/01fatherToSon'
import sonTofather from './components/02sonTofather'
import son1 from './components/03son1'
import son2 from './components/03son2'

export default {
  name: 'App',
  data(){
     return {
       msg: '父元素中的参数',
       sonMsg:'',
       sonMsg2:'',
     }
  },
  components: {
    fatherToSon,
    sonTofather,
    son1,
    son2
  },
  // 实现 getVal 方法
  methods: {
    // 子组件绑定的自定义事件
    getval(val,val2) {
      // console.log(val);
      this.sonMsg = val
      this.sonMsg2 = val2
    }
  }
}
</script>

<style>
#app {
  border: 5px solid red;
}
</style>
