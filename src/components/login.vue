<template>
  <!-- <div >
	<h1>登陆</h1>
  </div> -->
  <div>
    <dir v-show="!$store.state.userstatus">
      <p>用户名:<br>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
      <p>密码:<br>
      <el-input type="password" v-model="passwd" placeholder="请输入密码"></el-input></p>
      <el-button v-on:click="login">登录</el-button>
    </dir>
    
    <p v-show="$store.state.userstatus">登录成功！</p>
  </div>
</template>

<script>
	export default {
	  name: 'Login',
	  data () {
	    return {
        username:"",
        passwd:"",
			}
    },
    methods :{
      login() {
        this.$store.dispatch('login',{'username':this.username, 'passwd':this.passwd})
      },
      keyDown(e) {
        if(e.keyCode == 13) {
          this.login()
        }
      }
    },
    mounted() {
      window.addEventListener('keydown', this.keyDown)
    },
    destroyed() {
      window.removeEventListener('keydown', this.keyDown, false)
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-input {
    width: 200px;
    height: 30px
  }
</style>
