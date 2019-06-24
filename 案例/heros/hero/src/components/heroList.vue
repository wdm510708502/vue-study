<template>
       <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Hero List</h1>


         <button type="button" @click="toHeroAdd" class="btn btn-success">Add</button>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
             <tbody>
                   <!-- :key: 一般与 v-for 结合起来使用，可以给元素设置一个唯一标识 -->
                    <tr v-for="(item, index) in dataList" :key="index">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.gender }}</td>
                        <td>
                            <a href="#" @click.prevent="del(item.id)">删除</a>
                            <a href="#" @click.prevent="edit(item.id)">编辑</a>
                        </td>
                    </tr>
             </tbody>
            </table>
          </div>
        </div>
</template>

<script>
// 1 动态渲染列表数据
//  引入axios
// import axios from 'axios'

export default {
    data(){
      return {
        // 服务器的地址
        url: 'http://localhost:3000/heros',
        // 数据源
        dataList: []
      }
    },
    methods: {
      // 获取列表数据
      getDataList(){
        // 发送 get 请求获取数据
        this.$http({
          method:'get',
          url: this.url
        }).then(res => {
          // 解构
          console.log(res.data);
          let {status, data} = res
          //判断
          if(status === 200) {
            this.dataList = data
          }
        }).catch(err => {
          console.log(err);
        })
      },
      // 点击Add到英雄新增页面
      toHeroAdd(){
        // 编程式导航
        this.$router.push('/heroList/heroAdd')
      },
      // 点击del删除对应的英雄
      del(id){
        if(confirm('确定删除吗?')){
          // 发送请求到服务器
          this.$http({
            method: 'delete',
            url: `${this.url}/${id}`
          }).then(res => {
            // 判断
            if(res.status === 200) {
                this.getDataList()
            }
          })
        }
      },
      // 编辑数据: 打开编辑页面
      edit(id) {
         // 编程式导航
         this.$router.push('/heroList/heroEdit/' + id)
      }
    },
    mounted() {
        this.getDataList()

    }
}
</script>

<style>

</style>
