<template>
   <div class="mybox">
     <!-- 引入头部组件 -->
     <TopHead></TopHead>
     <!-- 引入侧边栏组件 -->
     <SideBar></SideBar>
     
     <div class="content">
       <router-view></router-view>
     </div>
   </div>
</template>

<script>
// 将头部提取为组件
// 1.0 创建组件
// 2.0 引入
// 引入头部的组件文件
import TopHead from './components/tophead'
// 引入侧边栏的组件文件
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
.mybox {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
}

.tophead {
  width: 800px;
  height: 80px;
  border: 5px solid red;
  box-sizing: border-box;
}

.sidebar {
  float: left;
  width: 200px;
  height: 520px;
  border: 5px solid green;
  box-sizing: border-box;
}

.content {
  float: right;
  width: 600px;
  height: 520px;
  border:5px solid blue;
  box-sizing: border-box;
}

</style>
