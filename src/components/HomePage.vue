<template>
  <div >
    <!-- <button @click="goHomePage">首页</button>
    <button @click="goBack">返回</button> -->
		<!-- <a class="title" href="www.baidu.com">项目列表</a>
    <a class="title" href="www.baidu.com">项目详情</a>
    <a class="title" href="www.baidu.com">项目数据</a> -->
    <h1>{{HomeMsg}}</h1>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item>
        <img src= '../assets/wheel/1.jpg' style="width:700px" alt="数据仪表">
      </el-carousel-item>
      <el-carousel-item>
        <img src= '../assets/wheel/2.png' style="width:700px" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src= '../assets/wheel/3.jpg' style="width:700px" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src= '../assets/wheel/4.jpg' style="width:700px" alt="">
      </el-carousel-item>
    </el-carousel>
		
    <!-- <h2>{{$route.params.userId}}</h2> -->
  </div>
</template>

<script>
	export default {
	  name: 'HomePage',
	  data () {
	    return {
        HomeMsg: '数据看板',
        Wheel:[
          '仪表盘',
          '里程碑',
          '代码构建成功率',
          'UT覆盖率',
        ],
        WheelUrl:[
          '../assets/wheel/1.jpg',
          '../assets/wheel/2.jpg',
          '../assets/wheel/3.jpg',
          '../assets/wheel/4.jpg',
        ]
        // userId: $route.params.userId
	    }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
