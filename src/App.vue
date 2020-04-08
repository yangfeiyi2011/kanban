<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <!-- <router-link to="HomePage" tag="button">首页</router-link> -->
    <button @click="goHomePage">首页</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goHomePage() {
      this.$router.push('/HomePage')
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
  margin-top: 60px;
}
</style>
