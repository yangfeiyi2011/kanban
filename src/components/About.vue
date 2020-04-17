<template>
  <div >
		<h1>{{HomeMsg}}</h1>
  </div>
</template>

<script>
	export default {
	  name: 'About',
	  data () {
	    return {
        HomeMsg: '这是关于信息',
	    }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
