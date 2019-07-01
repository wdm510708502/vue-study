<template>
  <div>
    <ul class="mui-table-view mui-grid-view mui-center">
      <li v-for="(value,index) in shopList" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
        <a href="#">
          <img class="mui-media-object" src="../../assets/logo.png" />
          <div class="mui-media-body">{{ value.title }}
            <div class="cost">
            <i class="yuan">&yen;{{ value.sell_price }}</i>  <del>&yen;{{value.market_price}}</del>
            <p class="remai"><b class="one">热卖中</b><b class="two">剩余{{value.stock_quantity}}件</b></p>
          </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            shopList:[]
        }
    },
    methods:{
        getShop(){
            this.$http({
            url:'http://localhost:8888/api/getgoods?pageindex=1'
        }).then(res => {
            this.shopList = res.data.message
            console.log(this.shopList);
        })
        }
    },
    mounted(){
        this.getShop()
    }
};
</script>

<style>
.mui-center {
    text-align: center; 
}
.mui-table-view-cell {
   width: 180px;
   border: 1px solid rgb(200,200,200);
   margin-top:5px;
   margin-left: 6px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object{
    width: 60px;
}
.mui-table-view-cell div{
    text-align: center;
}
.cost {
   background-color: pink;
   position: relative;
   margin: 0 auto;
   width: 96%;
   height: 50px;
   padding: 5px;
}
.mui-table-view-cell>a:not(.mui-btn){
    white-space:inherit 
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    height: 100%;
    font-size: 12px;
}
.yuan {
    font-style: normal;
    font-size: 14px;
    color: red;
    float: left;
}
.cost del {
    margin-left: -40px;
    color:rgb(124, 116, 116);
}
.mui-table-view-cell>a:not(.mui-btn){
    padding: 0px;
}
.remai {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    font-size: 12px;
    font-weight: 300;
}
.one{
    float: left;
    font-weight: 300;
}
.two{
float: right;
font-weight: 300;
}

</style>
