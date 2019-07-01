<template>
    <div>
        <ul class="mui-table-view">
				<li v-for="value in newsList" :key="value.id" class="mui-table-view-cell mui-media">
					<a @click.prevent="skipNews(value.id)" class="">
						<img class="mui-media-object mui-pull-left" src="../../assets/logo.png">
						<div class="mui-media-body">
							<p class="mui-ellipsis">{{ value.title }}</p>
							<p class="mui-ellipsis">{{ value.add_time }}</p>
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
            newsList:[]
        }
    },
    methods:{
        getNewList(){
            this.$http({
                url:'http://localhost:8888/api/getnewslist'
            }).then(res => {
				// console.log(res.data);
				// 解构
				let { data, meta } = res
				console.log(data);
			    this.newsList = data.message
            })
		},
		// 跳转到对应id的新闻
		skipNews(id){
           this.$router.push('/news/' + id)
		}
    },
    mounted(){
        this.getNewList()
    }
}
</script>

<style>

</style>
