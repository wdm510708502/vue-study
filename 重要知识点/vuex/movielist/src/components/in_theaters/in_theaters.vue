<template>
  <div>
      <h1 class="page-header">{{ title }}</h1>
    <div class="row">
      <div v-for="(item,index) in subjects" :key="index" class="col-md-4 martop">
          <!-- 将图片名称前面的 http:// 替换为 https://images.weserv.nl?url= -->
        <img :src="item.images.large.replace('http://', 'https://images.weserv.nl?url=')" alt />
        <h4>{{ item.title }}</h4>
        <p>{{ item.genres }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    // 映射
    computed: {
        ...mapState({
            title: state => state.title,
            subjects: state => state.subjects
        })
    },
      mounted() {
        // 获取数据
        this.$store.dispatch({
            type: 'setVal'
        })
    }
};
</script>

<style>
img {
  float: left;
  width: 50%;
}
.martop{
    margin-top:5px;
}
</style>
