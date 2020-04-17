<template>
  <div >
    <!-- <button @click="goHomePage">首页</button>
    <button @click="goBack">返回</button> -->
		<!-- <a class="title" href="www.baidu.com">项目列表</a>
    <a class="title" href="www.baidu.com">项目详情</a>
    <a class="title" href="www.baidu.com">项目数据</a> -->
    
		<h1>{{HomeMsg}}</h1>
    <!-- <h2>{{$route.params.userId}}</h2> -->
  </div>
</template>

<script>
	export default {
	  name: 'HomePage',
	  data () {
	    return {
        HomeMsg: '这是首页',
        // userId: $route.params.userId
	    }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
