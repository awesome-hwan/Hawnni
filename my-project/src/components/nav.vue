<template>
  <div class="nav">
    <h1>{{ msg }}</h1>

    <h2>
       현재 페이지는 Framework Vuejs를 사용하여 만들었습니다. SPA(single page application)입니다.
     </h2>

    <ul>
      <li><router-link to="/buttonEffect" tag="a" >버튼 연습</router-link></li>
      <li><router-link to="/responsive" tag="a" >반응형 연습</router-link></li>
      <li><router-link to="/todolist" tag="a" >Todo list</router-link></li>
    </ul>

    <!-- <h2>Ecosystem</h2>

    <ul>

      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: '쓰나미\'s blog'
    }
  }
}
</script>

<style lang="sass" scoped>
h1, h2
  font-weight: normal


ul
  list-style-type: none
  padding: 0


li
  display: inline-block
  margin: 0 10px


a
  color: #42b983
.nav
  // margin-top: 60px
</style>
