<template>
  <!-- <div >
	<h1>{{HomeMsg}}</h1>
  </div> -->
	<el-table
	:data="tableData"
	stripe
	style="width: 100%">
	<el-table-column
		prop="date"
		label="日期"
		width="180">
	</el-table-column>
	<el-table-column
		prop="name"
		label="姓名"
		width="180">
	</el-table-column>
	<el-table-column
		prop="address"
		label="备注">
	</el-table-column>
	</el-table>
</template>

<script>
	import {request} from '../common/axios'
	export default {
	  name: 'Projects',
	  data () {
	    return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
					}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
					}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
					}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				projectData:[],
			}
	  },
	  created: function() {
			request({
				url:'/api/v1/login',
				method: 'POST',
				data: {
					username: 'yangfei',
					password: '123',
				}
				}).then(res =>{
					console.log(res)
				}).catch(err => {
					console.log(err)
					alert("登陆失败！")
				})
			
		},
		mounted: function() {
			request({
				url:'/api/v1/projects',
				method: 'GET',
				}).then(res =>{
					console.log(res)
					this.projectData = res.data.projects
					this.tableData[0].date = this.projectData[0].ct
					this.tableData[0].name = this.projectData[0].owner
					this.tableData[0].address = this.projectData[0].note
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
