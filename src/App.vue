<template>
  <div id="app">
    <Nav />

    <div class="card">
      <router-view />
    </div>

  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap");

@font-face {
  font-family: "Gotham";
  src: url("../public/fonts/Gotham-Medium.otf"); /* IE9 Compat Modes */
  font-weight: 400;
  font-style: normal;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: "Gotham", cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: grid;
  grid-template-rows: 25% 75%;
}

.card {
  margin: 0px auto auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: antiquewhite; */
}
</style>
