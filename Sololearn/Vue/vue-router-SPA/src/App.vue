<template>
  <div id="app">
      <h1><abbr title="Single Page Application">SPA</abbr></h1>

      <router-view name="gnb"></router-view>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">


.current-page
  text-decoration: none
  font-weight: 900


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

.slide-enter
  opacity: 0
.slide-enter-active
  animation: slide-in .4s ease forwards
  transition: opacity .4s
// .slide-enter-to
// .slide-leave
.slide-leave-active
  animation: slide-out .4s ease forwards
  transition: opacity .4s
  // opacity: 0
.slide-leave-to
  opacity: 0

@keyframes slide-in
  from
    transform: translateY(20px)
  to
    transform: translateY(0px)
@keyframes slide-out
  from
    transform: translateY(0px)
  to
    transform: translateY(20px)

</style>
