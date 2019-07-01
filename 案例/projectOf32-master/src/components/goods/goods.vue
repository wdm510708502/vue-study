<template>
  <el-card>
    <!-- 父传子接 -->
    <mybread one="商品管理" two="商品列表"></mybread>
    <!-- 搜索框 -->
    <el-row class="goods">
      <el-col :span="6">
        <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
          <el-button @click.prevent="search" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="success" @click.prevent="$router.push('/goodsAdd')" plain>添加商品</el-button>
      </el-col>
    </el-row>

    <!-- 内容 -->
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="400"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格" width="180"></el-table-column>
        <el-table-column prop="goods_weight" label="商品重量"></el-table-column>

        <el-table-column label="创建时间">
          <template slot-scope="scope">{{scope.row.add_time | dateformat }}</template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" plain size="mini"></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="deleteGoods(scope.row.goods_id)"
              plain
              size="mini"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </el-card>
</template>

<script>
import mybread from '../layout/mybread'
export default {
  components: {
    mybread
  },
  data () {
    return {
      tableData: [],
      // 页容量选择
      pageSizes: [5, 10, 20],
      // 页容量
      pageSize: 5,
      // 当前页
      currentPage: 1,
      // 总条数
      total: 0,
      // 搜索框
      value: ''
    }
  },
  methods: {
    // 得到商品数据
    getGoodsList () {
      this.$http({
        url: `http://localhost:8888/api/private/v1/goods?query=${
          this.value
        }&pagenum=${this.currentPage}&pagesize=${this.pageSize}`
      }).then(res => {
        let { data, meta } = res.data
        if (meta.status === 200) {
          (this.tableData = data.goods), (this.total = data.total)
        } else {
          this.$message.errot(meta.msg)
        }
      })
    },
    // 当前页发生改变
    handleCurrentChange (current) {
      (this.currentPage = current), this.getGoodsList()
    },
    // 页容量的选项发生变化
    handleSizeChange (size) {
      this.pageSize = size
      this.getGoodsList()
    },
    // 搜索商品
    search () {
      this.getGoodsList()
    },
    // 删除商品
    deleteGoods (id) {
      this.$confirm('你是否要删除该商品?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$http({
            method: 'delete',
            url: `goods/${id}`
          }).then(res => {
            let { data, meta } = res.data
            if (meta.status === 200) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getGoodsList()
            } else {
              this.$message.errot('删除失败!')
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  mounted () {
    this.getGoodsList()
  }
}
</script>

<style>
.goods {
  margin: 20px 0;
}
</style>
