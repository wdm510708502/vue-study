<template>
  <el-card>
    <!-- 头部组件 -->
    <mybread one="商品管理" two="商品列表"/>
    <!-- 提示信息 -->
    <el-alert title="添加商品信息" type="info" center class="title" show-icon></el-alert>

    <!-- 步骤条 -->
    <el-steps :active="active" align-center finish-status="success">
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
    </el-steps>

    <!-- Tabs标签页 -->

    <!-- tab 标签页 -->
    <!-- tabPosition： 设置 tab 的位置 -->
    <!-- tab-click: 点击下面的 el-tab-pane 会被触发  -->
    <!-- v-model： 双向绑定的数据源，用来决定当前显示的 tab 栏 -->
    <!-- v-model 一般配合 el-tab-pane 中的 name 属性来使用 -->
    <el-tabs tab-position="left" v-model="activeName" @tab-click="tabClick">
      <!-- {{ activeName }} -->
      <el-tab-pane label="基本信息" name="first">
        <!-- 基本信息 -->
        <el-form label-position="top" :rules="rules" :model="form" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商品名称" prop="goods_name">
            <el-input v-model="form.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="goods_price">
            <el-input v-model="form.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="商品重量" prop="goods_weight">
            <el-input v-model="form.goods_weight"></el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="goods_number">
            <el-input v-model="form.goods_number"></el-input>
          </el-form-item>

          <!-- 级联选择器 -->
          <el-form-item label="商品分类">
            {{cateVal}}
            <el-cascader
              v-model="cateVal"
              :options="options"
              :props="{ expandTrigger: 'hover' , value:'cat_id', label:'cat_name'}"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="商品参数" name="second">
        <!-- 商品参数 -->
        <div v-for="(item, index) in goodsMany" :key="index">
          <div class="mybox">{{ item.attr_name }}</div>
          <div>
            <el-checkbox
              v-for="(val, index) in item.attr_vals.split(',')"
              :key="index"
              v-model="checked"
              border
            >{{ val }}</el-checkbox>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="商品属性" name="third">
        <!-- 商品属性 -->
        <el-form label-position="top">
          <el-form-item v-for="(item,index) in goodsMany" :key="index" :label="item.attr_name">
            <el-input v-model="item.attr_vals"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="商品图片" name="fourth">
        <!-- 商品图片 -->
        <!-- action：图片上传的地址 -->
        <!-- 由于后台服务器需要添加 token 才能接收信息，所以需要在上传的图片请求中也添加 token(添加到请求头中) -->
        <!-- on-preview：钩子函数，可以添加一段逻辑代码：当上传的图片被点击时执行 -->
        <!-- on-success：文件成功时执行的函数 -->
        <!-- on-remove：文件移除时执行的函数 -->
        <!-- on-preview： 点击文件列表中已经上传过的图片时触发 -->
        <!-- list-type：上传元素显示的方式： 以图片方式显示 -->
        <el-upload
          class="upload-demo"
          action="http://localhost:8888/api/private/v1/upload"
          :on-remove="handleRemove"
          list-type="picture"
          :headers="uploadheader"
          :on-success="uploadSuccess"
          :on-preview="mypreview"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          {{ fileList }}
        </el-upload>
      </el-tab-pane>
      <el-tab-pane label="商品内容" name="fifth">
         <!-- 添加商品按钮 -->
           <el-button type="success" @click="goodsAdd" plain>添加按钮</el-button>

        <!-- 商品内容 -->
         <div class="edit_container">
        <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
    </div>

      </el-tab-pane>
    </el-tabs>
    <!-- 预览图片的对话框 -->
    <el-dialog title="预览图片" :visible.sync="imgDialog">
      <!-- 预览的图片 -->
      <img ref="myimg" src alt>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="imgDialog = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
import mybread from '../layout/mybread'

import { quillEditor } from 'vue-quill-editor' // 调用编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  data () {
    return {
      // 默认的tab标签选项
      activeName: 'first',
      // 进度条
      active: 0,
      // 级联选择器的数据源
      options: [],
      // 级联框中的数据
      cateVal: [],
      // 商品参数
      goodsMany: [],
      // 选中的状态
      checked: true,
      // 图片上传的请求头
      uploadheader: {
        Authorization: window.localStorage.getItem('token')
      },
      // 上传的图片的集合
      fileList: [],
      // 预览图片
      imgDialog: false,
      // 富文本
      content: '',
      editorOption: {},
      // 添加商品的必填项,还有三个参数还没写
      form: {
        goods_name: '',
        goods_price: '',
        goods_number: '',
        goods_weight: ''
      },
      // 表单的验证,注意一定要 form.*** 和 *** 配合使用
      rules: {
        goods_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        goods_price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        goods_number: [
          { required: true, message: '请输入商品数量', trigger: 'blur' }
        ],
        goods_weight: [
          { required: true, message: '请输入商品重量', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // tab 选项中的tab被点击时触发
    tabClick (tab) {
      //  步骤条和tab同步
      this.active = +tab.index
      // 商品参数
      if (tab.index === '1') {
        this.getParams('many')
      }
      if (tab.index === '2') {
        this.getParams('only')
      }
    },
    //  得到级联框中的数据
    getCateList () {
      this.$http({
        url: 'categories'
      }).then(res => {
        // 解构
        let { data, meta } = res.data
        if (meta.status === 200) {
          this.options = data
        }
      })
    },
    // 级联框
    handleChange (value) {
      console.log(value)
    },
    // 得到商品参数&商品属性
    // sel: 判断是many 还是 only
    getParams (sel) {
      // 判断级联框是否选中
      if (this.cateVal.length !== 0) {
        // 如果选中根据分类去查询参数
        this.$http({
          url: `categories/${
            this.cateVal[this.cateVal.length - 1]
          }/attributes?sel=${sel}`
        }).then(res => {
          let { meta, data } = res.data
          this.goodsMany = data
        })
      } else {
        this.$message.error('你应该选择参数')
      }
    },
    // 点击上传触发的钩子
    uploadSuccess (response, file, fileList) {
      // reponse: 上传成功后响应的内容
      // file: 上传成功的文件信息
      // fileList: 上传成功的文件集合
      this.fileList.push(response.data.tmp_path)
      // console.log(response.data.tmp_path);
    },
    // 移除时的钩子
    handleRemove (file, fileList) {
      let img = file.response.data.tmp_path
      this.fileList.forEach((item, index) => {
        if (item === img) {
          this.fileList.splice(index, 1)
        }
      })
    },
    // 预览图片
    mypreview (file) {
      // 得到图片的在线地址
      var img = file.response.data.url
      // 渲染到一个对话框中
      // 打开对话框

      this.imgDialog = true
      // 当页面渲染完成后，会马上执行（将回调延迟到下次 DOM 更新循环之后执行）
      // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，
      // 然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，
      // 不同的是回调的 this 自动绑定到调用它的实例上。
      this.$nextTick(() => {
        this.$refs.myimg.src = img
      })

      // setTimeout(() => {
      //     // 将图片进行显示
      //     this.$refs.myimg.src = img
      //     console.log(this.$refs)
      // }, 1000)
    },
    onEditorReady (editor) { // 准备编辑器
    },
    onEditorBlur () {}, // 失去焦点事件
    onEditorFocus () {}, // 获得焦点事件
    onEditorChange () {}, // 内容改变事件
    // 添加商品
    goodsAdd () {
      this.form.goods_cat = this.cateVal.join(','),
      console.log(this.cateVal.join(','))
      this.$http({
        method: 'post',
        url: 'goods',
        data: this.form
      }).then(res => {
        let {data, meta } = res.data
        if (meta.status === 201) {
          console.log(meta.msg)
          this.$message.success(meta.msg)
          this.$router.push('/goods')
        } else {
          this.$message.error(meta.msg)
          //  console.log(meta.msg);
        }
      })
    }
  },
  components: {
    mybread,
    quillEditor
  },
  mounted () {
    this.getCateList()
  },
  // 富文本
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  }

}
</script>

<style>
.title {
  margin: 20px 0;
}
.el-step__title {
  font-size: 12px;
  line-height: 38px;
}
.mybox {
  margin: 20px 0px;
}
.ql-editor {
  height: 300px;
}
</style>
