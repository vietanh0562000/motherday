<template>
  <div class="navbar">
    <img src='../assets/logo.jpg' alt="logo"/>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
  .navbar{
    margin-top: 2%;
    width: 100%;
    height: 100%;
  }
  .navbar img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>