<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Add Hero</h1>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄姓名</label>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="editObj.name" placeholder="请输入英雄姓名">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" id="exampleInputPassword1" value="男" v-model="editObj.gender">男&nbsp;
        <input type="radio" id="exampleInputPassword1" value="女" v-model="editObj.gender">女
      </div>

      <button type="submit" class="btn btn-success" @click.prevent="EditHeroFn">修改</button>
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
        editObj: {
           name: '',
           gender: ''
        },
        id: this.$route.params.id
        }
    },
    methods: {
        getDataById(){
            // 根据id得到默认数据
            this.$http({
                method: 'get',
                url: `${this.url}/${this.id}`
            }).then(res => {
                if (res.status === 200){
                    this.editObj.name = res.data.name
                    this.editObj.gender = res.data.gender
                }
            }).catch( err => {
                console.log(err);
            })
        },
        // 提交编辑数据
        EditHeroFn(){
          this.$http({
              method: 'put',
              url: `${this.url}/${this.id}`,
              data: this.editObj
          }).then(res => {
              // 判断
              if(res.status === 200) {
                  // 跳回 heroList
                  this.$router.push('/heroList')
              }
          }).catch(err => {
              console.log(err);
          })
        }
    },
      mounted() {
        this.getDataById()
    }
};
</script>

<style>
</style>
