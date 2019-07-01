
<template>
  <div class="mybox">
      <TopHead></TopHead>
      <SideBar></SideBar>
      <div class="content">
      <router-view></router-view>

      </div>
  </div>
</template>

<script>
// 将头部提取为组件
// 1.创建组件
// 2.引入        tophead.vue的
// 头部
import TopHead from './components/tophead'
// 侧边栏
import SideBar from './components/sideBar'

// ES6标准的导出
export default {
  components: {
    // 注册头部组件
    TopHead,
    SideBar
  }
}
</script>

<style>
.mybox{
  width: 800px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
}
.tophead {
  width: 800px;
  height: 80px;
  border: 5px solid red;
  text-align: center;
  box-sizing: border-box;
}
.sidebar {
  float: left;
  height: 520px;
  width: 200px;
  border: 5px solid green;
  box-sizing: border-box;
}
.content {
  float: right;
  height: 520px;
  width: 600px;
  border: 5px solid blue;
  box-sizing: border-box;
}
img{
  height: 300px;
  width: 300px;
}
</style>
