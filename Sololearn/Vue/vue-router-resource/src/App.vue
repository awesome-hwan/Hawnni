<template>
  <div id="app">

    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>

    <!-- <add-login></add-login> -->
  </div>
</template>

<script>
// import Login from './components/UserLogin.vue'
export default {
  name: 'app',
  components: {
    // addLogin: Login
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">

.fade-enter-active
  animation: fade-in 0.3s
.fade-leave-active
  animation: fade-out 0.3s
@keyframes fade-in
  from

  to
    opacity: 1
@keyframes fade-out
  from

  to
    opacity: 0
</style>
