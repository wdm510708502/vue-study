<template>
     <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <!-- 设置 链接激活时使用的 CSS 类名 -->
            <!-- <li class="active"><a href="#">英雄列表<span class="sr-only">(current)</span></a></li> -->
              <router-link active-class="active" tag="li" to="/heroList">
                <a>英雄列表</a>
            </router-link>
            <!-- <li class="active"><a href="#">武器列表</a></li> -->
            <router-link active-class="active" tag="li" to="/foo">
                <a>武器列表</a>
            </router-link>
            <!-- <li><a href="#">装备列表</a></li> -->
            <router-link active-class="active" tag="li" to="/boo">
                <a>装备列表</a>
            </router-link>
          </ul>

        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
