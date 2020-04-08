<template>
  <div >
		<a class="title" href="www.baidu.com">项目列表</a>
    <a class="title" href="www.baidu.com">项目详情</a>
    <a class="title" href="www.baidu.com">项目数据</a>
		<h1>{{HomeMsg}}</h1>
  </div>
</template>

<script>
	export default {
	  name: 'HomePage',
	  data () {
	    return {
	      HomeMsg: 'This is the HomePage！'
	    }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
.title {
  background-color: #398DEE;
}
</style>
