<template>
  <div>
    <h3>Select User Detail Information</h3>
    <p>Selected User ID {{ $route.params.id }}</p>
    <!-- <router-link :to="`/user/${$route.params.id}/edit`" tag="button">Edit</router-link> -->
    <router-link
    :to="{name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'ko', amount: 100} }"
     tag="button"
     type="button">Edit</router-link>

  </div>


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
