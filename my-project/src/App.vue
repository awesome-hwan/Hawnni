<template>
  <div id="app">

    <header class="header">
      <img src="./assets/logo.png">
    </header>
    <br>
    <router-link to="/" class="return" > Home 바로가기 </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  margin: 0
  text-align: center
  color: #2c3e50

a
  color: #42b983
  
.header
  margin: 0


</style>
