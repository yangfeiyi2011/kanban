<template>
  <!-- <div >
	<h1>{{HomeMsg}}</h1>
  </div> -->
	<el-table
	:data="projectData"
	stripe
	style="width: 100%">
	<el-table-column
		prop="id"
		label="序号"
		width="180">
	</el-table-column>
	<el-table-column
		prop="name"
		label="项目名"
		width="180">
	</el-table-column>
	<el-table-column
		prop="owner"
		label="项目创建者"
		width="180">
	</el-table-column>
	<el-table-column
		prop="ct"
		label="日期"
		width="180">
	</el-table-column>
	<el-table-column
		prop="note"
		label="备注">
	</el-table-column>
	</el-table>
</template>

<script>
	import { request } from '../common/axios'
	export default {
	  name: 'Projects',
	  data () {
	    return {
				projectData:[
				],
			}
	  },
		mounted: function() {
			console.log("mouted success");
			request({
				url:'/api/v1/projects',
				method: 'GET',
				}).then(res =>{
					console.log(res.data.projects[0])
					this.projectData = res.data.projects
					
				}).catch(err => {
					console.log(err)
					alert("项目获取失败！")
				})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
