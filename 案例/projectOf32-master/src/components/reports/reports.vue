<template>
    <div id="myBox" :style="{width: '80%', height: '400px'}"></div>
</template>

<script>
// 引入
import Echarts from 'echarts'
export default {
  mounted () {
    // 初始化
    var echarts = Echarts.init(document.getElementById('myBox'))
    // 指定图表的配置项和数据,发送请求到服务器
    this.$http({
      url: 'reports/type/1'
    }).then(res => {
      let {data, meta} = res.data
      if (meta.status === 200) {
        var option = data
        option.xAxis[0].boundaryGap = false
        this.$message.success(meta.msg)
        // 使用刚指定的配置项和数据显示图表。写在里面,因为作用域的问题,写在外面
        // 就得不到里面的数据
        echarts.setOption(option)
      }
    })
  }
}
</script>

<style>

</style>
