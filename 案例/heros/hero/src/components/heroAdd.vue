<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Add Hero</h1>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄姓名</label>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="addHero.name" placeholder="请输入英雄姓名">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" id="exampleInputPassword1" value="男" v-model="addHero.gender">男&nbsp;
        <input type="radio" id="exampleInputPassword1" value="女" v-model="addHero.gender">女
      </div>

      <button type="submit" class="btn btn-success" @click.prevent="addHeroFn">新增英雄</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
        // 服务器地址
           url: 'http://localhost:3000/heros',
        // 新增对象
        addHero: {
           name: '',
           gender: ''
        }
        }
    },
    methods: {
        addHeroFn(){
            this.$http({
                method: 'post',
                url: this.url,
                data: this.addHero
            }).then(res => {
                // 解构
                let { status } = res
                // 判断
                if (status === 201) {
                    // 如果成功应该调回 heroList
                    this.$router.push('/heroList')
                } else {
                    alert('出错啦')
                }
            }).catch( err => {
                console.log(err);
            })
        }
    },
};
</script>

<style>
</style>
