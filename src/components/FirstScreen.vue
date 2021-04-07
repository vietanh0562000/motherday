<template>
  <div class="first-screen">
    <img
      src="https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-3.jpg"
    />
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
}
.first-screen img {
  object-fit: cover;
  margin-top: 5%;
  border-radius: 5%;
  width: calc(68%);
  height: calc(68%);
  /*box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;*/
}
#btn {
  background: rgb(245, 174, 174);
  height: 7%;
  width: 50%;
  border: none;
  border-radius: 10px;
  color: rgb(255, 249, 249);
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% auto 0px auto;
}

</style>
