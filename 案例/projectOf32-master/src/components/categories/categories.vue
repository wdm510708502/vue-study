<template>
  <el-card>
    <!-- 面包屑导航 -->
    <mybread one="商品管理" two="商品分类"></mybread>
    <el-button type="success" class="mybtn" @click="sortAdd" plain>添加分类</el-button>
    <!-- 树状结构 -->
    <el-table
      v-loading="loading"
      :data="pageList"
      style="width: 100%"
      row-key="cat_id"
      border
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="cat_name" label="分类名称" width="300"></el-table-column>
      <el-table-column label="级别" width="180">
        <template
          slot-scope="scope"
        >{{ scope.row.cat_level === 0 ? '一级' : scope.row.cat_level === 1 ? '二级': '三级' }}</template>
      </el-table-column>
      <el-table-column label="是否有效" width="200">
        <template slot-scope="scope">{{ scope.row.cat_deleted ? '无效' : '有效'}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit"
          @click="sortEdit(scope.row.cat_id)" plain size="mini"></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="deleteList(scope.row.cat_id)"
            plain
            size="mini"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页功能 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <!-- 添加分类 -->
    <el-dialog title="添加商品分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          {{ value }}
          <el-cascader
            v-model="value"
            :options="options"
            :clearable="true"
            placeholder="默认添加一级分类"
            :filterable="true"
            :props="props"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addList">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑分类 -->
    <el-dialog title="编辑商品分类" :visible.sync="dialogFormVisible2">
  <el-form :model="form">
    <el-form-item label="分类名称" :label-width="formLabelWidth">
      <el-input v-model="sortName" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="stm">确 定</el-button>
  </div>
</el-dialog>
  </el-card>
</template>

<script>
import mybread from '../layout/mybread'
export default {
  data () {
    return {
      // 表格的数据源
      tableData: [],
      //  分页
      pageList: [],
      // 当前页
      currentPage: 1,
      // 页容量的选择
      pageSizes: [5, 10, 20],
      // 总条数
      total: 0,
      // 页容量
      pageSize: 5,
      // 分页的数据源
      pageList: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: ''
      },
      formLabelWidth: '120px',
      // 级联选择器
      value: [],
      options: [],
      props: {
        expandTrigger: 'hover',
        multiple: false,
        checkStrictly: true,
        value: 'cat_id',
        label: 'cat_name'
      },
      loading: true,
      sortName: '',
      dialogTableVisible2: false,
      dialogFormVisible2: false,
      // 当前编辑的id
      stmId: 0
    }
  },
  methods: {
    //  获取所有的分类数据
    getCategoriesList () {
      this.$http({
        method: 'get',
        url: 'categories'
      }).then(res => {
        let { meta, data } = res.data
        if (meta.status === 200) {
          // 将数据进行保存
          this.tableData = data
          // 获得分页数据
          this.getPageList()
          // 获取总条数
          this.total = data.length
          // 加载效果的结束
          setTimeout(() => {
            this.loading = false
          }, 1000)
        } else {
          this.$message.error(meta.msg)
        }
      })
    },
    // 根据数据源得到分页的数据
    getPageList () {
      // this.pageList =
      // 得到开始的下标
      let begin = this.pageSize * (this.currentPage - 1)
      // // 结束的下标
      let end = this.pageSize * this.currentPage
      // 根据下标去数组中取得数据
      this.pageList = this.tableData.slice(begin, end)
    },
    // 页容量发生变化
    handleSizeChange (pagesize) {
      // 赋值
      this.pageSize = pagesize
      // 重新获取数据
      this.getPageList()
    },
    // 当前页发生了变化
    handleCurrentChange (currentPage) {
      // 赋值
      this.currentPage = currentPage
      // 重新获取数据
      this.getPageList()
    },
    // 添加分类(获得二级分类的数据)
    getTwoData () {
      this.$http({
        method: 'get',
        url: 'categories/?type=2'
      }).then(res => {
        let { data, meta } = res.data
        if (meta.status === 200) {
          this.options = data
        }
      })
    },
    // 打开添加分类面板,并加载数据
    sortAdd () {
      this.dialogFormVisible = true
      this.getTwoData()
    },
    // 点击确定添加分类,并关闭面板
    addList () {
      let catPid = this.value.length ? this.value[this.value.length - 1] : 0
      let catName = this.form.name
      let catLevel = this.value.length

      this.$http({
        method: 'post',
        url: 'categories',
        data: {
          cat_pid: catPid,
          cat_name: catName,
          cat_level: catLevel
        }
      }).then(res => {
        this.$message({
          message: res.data.meta.msg,
          type: 'success'
        })
        // 刷新数据
        this.getCategoriesList()
        // 关闭面板
        this.dialogFormVisible = false
      })
    },
    deleteList (id) {
      this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          console.log(id)
          this.$http({
            method: 'delete',
            url: `categories/${id}`
          }).then(res => {
            let { meta } = res.data
            if (meta.status === 200) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              // 刷新数据
              this.getCategoriesList()
            } else {
              this.$message({
                type: 'info',
                message: '出错了哦!'
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 打开编辑分类
    sortEdit (id) {
      this.dialogFormVisible2 = true,
      this.stmId = id,
      // 根据id查询分类
      this.$http({
        method: 'get',
        url: `categories/${id}`
      }).then(res => {
        let { data, meta } = res.data
        if (meta.status === 200) {
          this.sortName = data.cat_name
        } else {
          this.$message.error(meta.msg)
        }
      })
    },

    // 编辑,点击确定修改分类名
    stm () {
      // 根据id修改分类
      this.$http({
        method: 'put',
        url: `categories/${this.stmId}`,
        data: {
          cat_name: this.sortName
        }
      }).then(res => {
        let {meta} = res.data
        if (meta.status === 200) {
          this.getCategoriesList()
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.dialogFormVisible2 = false
        } else {
          this.$message({
            type: 'info',
            message: '出错啦~'
          })
        }
      })
    }
  },
  components: {
    mybread
  },
  mounted () {
    this.getCategoriesList()
  }
}
</script>

<style>
.mybtn {
  margin: 10px 0;
}
</style>
