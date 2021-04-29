<template>
  <div id="app">
    <Nav/>
    <Card/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Card from "@/components/Card";

export default {
  name: 'App',
  components: {
    Nav,
    Card,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
@font-face {
  font-family: 'Gotham';
  src: url('../public/fonts/Gotham-Medium.otf'); /* IE9 Compat Modes */
  font-weight: 400;
  font-style: normal;
}
#app {
  font-family: 'Gotham', cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: grid;
  grid-template-rows: 25% 75%;
  /* overflow: hidden; */
}
* {
  box-sizing: border-box;
}


.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
