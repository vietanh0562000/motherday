<template>
  <div class="app-navbar">
    <router-link :to="'/'" class="router">
      <img src="../../public/assets/logo.jpg" alt="logo" />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.app-navbar {
  width: 100%;
  height: 100%;
}

.app-navbar img {
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
}

.router {
  width: 100%;
  height: 100%;
}
</style>