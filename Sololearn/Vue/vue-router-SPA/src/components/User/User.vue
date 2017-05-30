<template>
  <div >


  <h2>homepage</h2>

  <button type="button" @click="gotoHomeComponent">Go to Home</button>
  <transition name="fade" mode="out-in">
      <router-view></router-view>
  </transition>
    </div>
</template>
<script>
export default {

  methods: {
    gotoHomeComponent() {
      // this.$router.push('/');
      this.$router.push({name: 'home'});
    }
  }
}
</script>

<style>
</style>
