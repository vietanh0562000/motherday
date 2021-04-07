<template>
  <div class="second-screen">
    <h1>Step 1: Choose your template</h1>
    <br />

    <a href="javascript:void(0)" @click="toEdit('07')">
      <div class="circleImg" style="background-image: url(assets/e-template07.png);">
      </div>
    </a>
    <a href="javascript:void(0)" @click="toEdit('16')">
      <div class="circleImg" style="background-image: url(assets/e-template16.png);">
      </div>
    </a>
    <a href="javascript:void(0)" @click="toEdit('08')">
      <div class="circleImg" style="background-image: url(assets/e-template08.png);">
      </div>
    </a>
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
.second-screen h1 {
  font-size: 1em;
  margin-top: 5%;
  margin-bottom: 5%;
}
.second-screen a{
  display: block;
}
.circleImg{
  width: 25%;
  padding-top: 25%;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  border-radius: 50%;
  background-size: cover;
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

</style>