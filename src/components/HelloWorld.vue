<template>
  <div class="hello">
    <img src="../assets/patac_simple.png" style="width: 500px">
    <h1>{{ msg }}</h1>
    <button @click="goHomePage">开始</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎进入看板系统'
    }
  },
  methods: {
    goHomePage() {
      this.$router.push('/HomePage')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.hello {
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
  color: #42b983;
}
</style>
