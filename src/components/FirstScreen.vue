<template>
  <div class="first-screen">
    <img src="assets/welcome.png" />
    <div id="btn" @click="nextScreen">
      <span class="noselect">Customize</span>
      <div id="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "first-screen",
  methods: {
    nextScreen() {
      this.$router.push("select-theme");
    },
  },
};
</script>

<style>
.first-screen {
  width: 100%;
  height: 100%;
  max-width: 700px;
}
.first-screen img {
  object-fit: contain;
  margin-top: 5%;
  border-radius: 5%;
  width: calc(68%);
  height: calc(68%);
}
#btn {
  background: #e72573;
  height: 7%;
  width: 50%;
  border: none;
  border-radius: 10px;
  color: rgb(255, 249, 249);
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
}
</style>
