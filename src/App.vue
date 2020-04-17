<template>
  <div id="app">
    <!-- <router-link to="HomePage" tag="button">首页</router-link> -->
    <!-- <router-link :to="/HomePage/+userId" tag="button">传递参数</router-link> -->
  <div style="text-align:left"><img src="./assets/patac_simple.png" style="width: 300px;" alt=""></div>
  <div style="position:relative">
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
  </tab-bar>
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
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
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
