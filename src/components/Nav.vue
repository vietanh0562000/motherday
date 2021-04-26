<template>
  <div class="navbar">
    <router-link :to="'/'" class="router">
      <img src='../../public/assets/logo.jpg' alt="logo"/>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
  .navbar{
    width: 100%;
    height: 100%;
  }
  .navbar img{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }
  .router{
    width: 100%;
    height: 100%;
  }
</style>