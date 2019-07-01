import mybread from '../layout/mybread.vue'
export default {
  data () {
    return {
      // 数据源
      tableData: [],
      // 面板的开关
      roleDialog: false,
      rightsList: [],
      defaultProps: {
        children: 'children',
        label: 'authName'
      },
      // 设置默认选中
      defaultChecked: [],
      // 设置当前要设置权限的id
      setRoleId: 0
    }
  },
  methods: {
    // 获取所有角色数据
    getRolesList () {
      this.$http({
        method: 'get',
        url: 'roles'
      }).then(res => {
        let { data, meta } = res.data
        // 判断
        if (meta.status === 200) {
          // 赋值
          this.tableData = data
        }
      })
    },
    // 删除权限
    delRigth (roleId, rightId, scope) {
      this.$http({
        method: 'delete',
        url: `roles/${roleId}/rights/${rightId}`
      }).then(res => {
        let { data, meta} = res.data
        if (meta.status === 200) {
          this.$message({
            message: meta.msg,
            type: 'success'
          })
          scope.row.children = data
        } else {
          this.$message.error(meta.msg)
        }
      })
    },
    // 打开权限分配面板
    openRole (rightsData, id) {
      // 获取当前打开权限面板的id
      this.setRoleId = id
      // this.roleDialog = true
      // 获取所有的权限数据
      this.defaultChecked = []
      this.$http({
        method: 'get',
        url: 'rights/tree'
      }).then(res => {
        let { data, meta } = res.data
        if (meta.status === 200) {
          // 将权限数据保存起来
          this.rightsList = data
          this.roleDialog = true
          // 将所有三级的去哪先的id添加到defaultChecked
          // 遍历第一级
          rightsData.forEach(item1 => {
            // 遍历第二级
            item1.children.forEach(item2 => {
              // 遍历第三级
              item2.children.forEach(item3 => {
                // 得到 id 添加到 defaultChecked 中
                this.defaultChecked.push(item3.id)
              })
            })
          })
        } else {
          this.$message.error(mata.msg)
        }
      })
    },
    // 设置权限
    setRightFn () {
      // 获取更新后权限
      // getCheckedKeys:
      //      特点：只会得到全选的 id，不会得到半选
      // getHalfCheckedKeys
      //      特点：只能得到半选的 id
      let idsAll = this.$refs.mytree.getCheckedKeys()
      let idsHarf = this.$refs.mytree.getHalfCheckedKeys()
      // 将全选和半选组合
      let ids = [...idsAll, ...idsHarf]
      console.log(ids)
      // 将 ids 转为字符串
      ids = ids.join(',')
      // 提交到服务器
      this.$http({
        method: 'post',
        url: `roles/${this.setRoleId}/rights`,
        data: {
          rids: ids
        }
      }).then(res => {
        let { meta } = res.data
        if (meta.status === 200) {
          this.$message({
            message: meta.msg,
            type: 'success'
          })
          // 重新获取数据
          this.getRolesList()
          this.roleDialog = false
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
    this.getRolesList()
  }
}
