<template>
    <el-card>
        <!-- 面包屑 -->
        <mybread one="权限管理" two="权限列表"></mybread>
        <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    class="tabquanxian"
    >
    <el-table-column type="index">
    </el-table-column>
    <el-table-column
      prop="authName"
      label="权限名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="path"
      label="路径"
      width="180">
    </el-table-column>
    <el-table-column
      label="层级">
      <template slot-scope="scope">
            {{ scope.row.level === "0" ? '一级' : scope.row.level === "1" ? '二级' : '三级' }}
      </template>
    </el-table-column>
  </el-table>
</template>
    </el-card>
</template>

<script>
import mybread from '../layout/mybread'
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getRightList () {
      this.$http({
        method: 'get',
        url: 'rights/list'
      }).then(res => {
        let { data, meta } = res.data
        if (meta.status === 200) {
          this.tableData = data
        } else {
          this.$message.error(meta.msg)
        }
      })
    }
  },
  components: {
    mybread
  },
  mounted () {
    this.getRightList()
  }
}
</script>

<style>
.tabquanxian{
    margin-top: 20px;
}
</style>
