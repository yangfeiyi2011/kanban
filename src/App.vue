<template>
  <div id="app">
    <!-- <router-link to="HomePage" tag="button">首页</router-link> -->
    <!-- <router-link :to="/HomePage/+userId" tag="button">传递参数</router-link> -->
  <div style="position: relative;z-index: 25;top: 10px"><img src="./assets/patac_simple.png" align="left" style="width: 300px;" alt=""></div>
  <!-- <div style="position:relative">
    <tab-bar>
    <tab-bar-item path="HomePage" activeColor='sandybrown'>
      <img slot="item-icon" src="./assets/home.svg">
      <div slot="item-icon">首页</div>
    </tab-bar-item>
    <tab-bar-item path="Projects" activeColor='sandybrown'>
      <img slot="item-icon" src="./assets/mirror.svg">
      <div slot="item-icon">项目列表</div>
    </tab-bar-item>
    <tab-bar-item path="Profile" activeColor='sandybrown'>
      <img slot="item-icon" src="./assets/nickname.svg">
      <div slot="item-icon">我的</div>
    </tab-bar-item>
    <tab-bar-item path="About" activeColor='sandybrown'>
      <img slot="item-icon" src="./assets/prompt.svg">
      <div slot="item-icon">关于</div>
    </tab-bar-item>
    <tab-bar-item path="Guide" activeColor='sandybrown'>
      <img slot="item-icon" src="./assets/prompt.svg">
      <div slot="item-icon">导航</div>
    </tab-bar-item>
  </tab-bar>
  </div>   -->
  <div>
  <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu> -->
  <div class="line"></div>
  <!-- <h1 style="float:left">看板系统</h1> -->
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    float="right">
    <el-menu-item ></el-menu-item>
    <el-menu-item index="1">
      <tab-bar-item path="HomePage">
      <div slot="item-text">首页</div>
      </tab-bar-item>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">项目列表</template>
      <el-menu-item index="2-1">
        <tab-bar-item path="Projects" style="text-align:left">
          <div slot="item-text">项目1</div>
        </tab-bar-item>
      </el-menu-item>
      <el-menu-item index="2-2">项目2</el-menu-item>
      <el-menu-item index="2-3">项目3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">项目4</template>
        <el-menu-item index="2-4-1">子项目1</el-menu-item>
        <el-menu-item index="2-4-2">子项目2</el-menu-item>
        <el-menu-item index="2-4-3">子项目3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4">
      <tab-bar-item path="Profile">
      <div slot="item-text">我的工作台</div>
      </tab-bar-item>
      <!-- <a href="https://www.ele.me" target="_blank">我的工作台</a> -->
    </el-menu-item>
    <el-menu-item index="5">
      <tab-bar-item path="About">
      <div slot="item-text">关于</div>
      </tab-bar-item>
    </el-menu-item>
    <el-menu-item index="6">
      <tab-bar-item path="Login">
      <div slot="item-text">登录</div>
      </tab-bar-item>
    </el-menu-item>
  </el-menu>
 </div>
  
  <router-view/>
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'App',
  data(){
    return {
      // userId:1234
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goBack() {
      history.back()
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
</style>
