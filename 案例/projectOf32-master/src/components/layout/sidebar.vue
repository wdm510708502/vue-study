<template>
    <!-- el-menu: 菜单栏 -->
    <el-menu :router="true" :unique-opened="true" class="mymenu el-menu-vertical-demo">
        <!-- el-submenu：选项 index: 当前选项的唯一标识（跳转路径） -->
        <!-- item.path的是绝对路径,如果改写成 '/' + item.path就是绝对路径 -->
        <el-submenu v-for="item in rightsList" :key="item.id" :index="item.path">
         <!-- template：菜单选项的内容 -->
    <template slot="title">
        <!-- 图标 -->
        <i class="el-icon-location"></i>
        <!-- 文本 -->
        <span> {{ item.authName }}</span>
    </template>
    <!-- 菜单选项下的子选项:二级菜单 -->
    <el-menu-item v-for="son in item.children" :key="son.id" :index="son.path">
            <!-- 图标 -->
        <i class="el-icon-menu"></i>
        <!-- 文本 -->
        <span> {{ son.authName }}</span>
    </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {

  data () {
    return {
      rightsList: []
    }
  },
  methods: {
    // 根据登录进来的用户(以token为标识),获取对应左侧才菜单栏的权限
    getRightsList () {
      this.$http({
        url: 'menus'
      }).then(res => {
        let { meta, data } = res.data
        if (meta.status === 200) {
          this.rightsList = data
        } else {
          this.$message.errot(meta.msg)
        }
      })
    }
  },
  mounted () {
    this.getRightsList()
  }
}
</script>

<style>

</style>
