<template>
  <div id="app">
    <Nav/>
    <Card/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Nav,
    Card,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
#app {
  font-family: 'Dancing Script', cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 80% 10%;
}
</style>
