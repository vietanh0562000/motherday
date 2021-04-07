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
#app {
  font-family: 'Dancing Script', cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 90vh;
  display: grid;
  grid-template-rows: 15% 90%;
}
* {
  overflow: hidden;
  box-sizing: border-box;
}
</style>
