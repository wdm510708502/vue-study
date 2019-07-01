<template>
  <div id="app">
    <!-- 顶部 -->
    <div class="myhead">
      <header class="mint-header is-fixed">
        <div class="mint-header-button is-left"></div>
        <h1 class="mint-header-title">麦兜-新闻</h1>
        <div class="mint-header-button is-right"></div>
      </header>
    </div>

    <!-- 路由的内容 -->
    <router-view />

    <!-- 底部 -->
    <div class="bot">
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" active-class="mui-active" class="mui-tab-item" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" active-class="mui-active" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-contact">
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/car" active-class="mui-active" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" active-class="mui-active" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
.myhead {
  margin-bottom: 45px;
}
.bot {
  height: 45px;
}
</style>
