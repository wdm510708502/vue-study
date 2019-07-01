<template>

    <div id="allmap" class="allmap" style="width: 100%; height:500px;"></div>
</template>

<script>
import BMap from 'BMap'
export default {
  mounted () {
    var map = new BMap.Map('allmap') // 创建地图实例
    var point = new BMap.Point(116.331398, 39.897445) // 创建点坐标
    map.centerAndZoom(point, 15)
  }
}
</script>

<style>

</style>
