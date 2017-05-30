<template>
<nav class="gnb">
  <ul>
    <li><router-link to="/" active-class="current-page" exact>Home</router-link></li>
    <li><router-link to="/user" active-class="current-page">User</router-link></li>

  </ul>
</nav>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style>

</style>
