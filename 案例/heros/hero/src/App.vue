<template>
<div>
  <!-- 头部区域 -->
    <TopHead></TopHead>
  <!-- 侧边栏区域 -->
    <SideBar></SideBar>

    <!-- 内容区域-路由-渲染视图 -->
    <router-view></router-view>
     
</div>
</template>

<script>
// 导入 Tophead 组件
import TopHead from './components/tophead'
// 导入 SideBar 组件
import SideBar from './components/sidebar'


export default {
  components: {
     // 添加头部组件
     TopHead,
     // 添加侧边栏组件
     SideBar
   },
 
}
</script>

<style>

</style>
