<template>
  <div>
		<img src="../assets/patac_red.jpg" style="width: 300px" alt="">
		<h1  style="white-space: pre-line;font-size:20px">{{HomeMsg}}</h1>
  </div>
</template>

<script>
	export default {
	  name: 'About',
	  data () {
	    return {
				HomeMsg: `
				作者：杨非
				电话：18627811576
				邮箱：Fei3_Yang.sgmwh@saic-gm.com
				地址：湖北省武汉市江夏区上汽通用大道
				上汽通用汽车有限公司武汉分公司`,
	    }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
