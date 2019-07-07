<template>
    <div class="son2">
        <h4>son2</h4>
        {{ son1msg }}
    </div>
</template>

<script>
// 得到 bus
import bus from '../assets/js/bus'
export default {
    data(){
        return{
             son1msg:''
        }
    },
    // 因为不知道'bus'几时到,所以要开启参数监听
    mounted() {
        // 监听事件
        bus.$on('toSon', val => {
            //   console.log(val);
              this.son1msg = val
        })
    },
}
</script>

<style>
.son2 {
  border: 5px solid pink;
}
</style>
