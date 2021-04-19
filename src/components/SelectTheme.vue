<template>
  <div class="second-screen">
    <h1>Step 1: Choose your template</h1>
    <br />
    <div class="templates">
      <div class="circleImg" style="background-image: url(assets/e-template07.png);" @click="toEdit('07')">
      </div>

      <div class="circleImg" style="background-image: url(assets/e-template16.png);" @click="toEdit('16')">
      </div>

      <div class="circleImg" style="background-image: url(assets/e-template08.png);" @click="toEdit('08')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "select-theme",
  methods: {
    toEdit (themeId) {
        this.$router.push({
            name: 'edit-screen',
            params: {
                themeId
            }
        })
    }
  }
};
</script>

<style scoped>
.second-screen{
  height: 100%;
  width: 100%;
}
.second-screen h1 {
  font-size: 1em;
  margin-top: 5%;
  margin-bottom: 5%;
}
.second-screen a{
  display: block;
}
.circleImg{
  width: 40%;
  height: 25%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: #a8adb3 1px solid;
  padding: 10px;
  margin: 2%;
  border-radius: 10px;
}
.second-screen img {
  width: 25%;
  /*height: auto;*/
  /*border-radius: 50%;*/
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 9px 20px -5px, rgba(0, 0, 0, 0.3) 0px 8px 12px -8px;
}
.second-screen a{
  margin: 2%;
}
.templates{
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}
</style>