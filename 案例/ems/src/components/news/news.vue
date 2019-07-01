<template>
    <div>
        <i class="exit" @click.prevent="exit">返回</i>
        <h4>{{ title }}</h4>
        <p>{{ add_time }}</p>
        <hr>
        <p v-html="newsData"></p>
    </div>
</template>

<script>
export default {
    data(){
       return{
           title:'',
           add_time:'',
           newsData:''
       }
    },
    methods:{
        getNews(id){
            this.$http({
                url:`http://localhost:8888/api/getnew/${id}`
            }).then( res => {
                // 解构
                let {message} = res.data
                // 新闻标题
                this.title = message[0].title
                // 时间
                this.add_time = message[0].add_time

                // 新闻内容
                this.newsData = message[0].content
                
            })
        },
        // 返回到新闻列表页
        exit(){
            this.$router.push('/newsList/')
        }
    },
    mounted(){
      this.getNews(this.$route.params.id)
    }
}
</script>

<style>
.exit{
    font-style: normal;
    font-size: 14px;
    position: fixed;
    color:white;
    top: 10px;
    right: 5px;
    z-index: 2;
}
</style>
