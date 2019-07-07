<template>
  <div>
    <!-- 头部 -->
    <tophead />
    <!-- 内容 -->
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <siderBar />
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- <h1 class="page-header">Dashboard</h1> -->
          <!-- 内容 -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tophead from "./layout/tophead";
import siderBar from "./layout/siderBar";

export default {
  data() {
    return {};
  },
  components: {
    tophead,
    siderBar
  }
};
</script>


<style scoped>
</style>
