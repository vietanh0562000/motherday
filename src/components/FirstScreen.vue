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
  width: calc(90%);
  height: calc(80%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
#btn {
  background: rgb(245, 174, 174);
  height: 7%;
  width: 50%;
  border: none;
  border-radius: 10px;
  color: rgb(255, 249, 249);
  font-size: 1.5em;
  transition: 1s;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% auto 0px auto;
}

#btn #circle {
  width: 5px;
  height: 5px;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  transition: 500ms;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#btn:hover {
  background: transparent;
}

#btn:hover #circle {
  height: 50px;
  width: 150px;
  left: 0;
  border-radius: 0;
  border-bottom: 2px solid #eee;
}
</style>
