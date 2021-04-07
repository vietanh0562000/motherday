<template>
  <div class="second-screen">
    <h1>Select Theme</h1>
    <br />
    <a href="javascript:void(0)" @click="toEdit(1)">
      <img
        src="../assets/theme1.jpg"
        alt="Avatar"
      />
    </a>
    <a href="javascript:void(0)" @click="toEdit(2)">
      <img
        src="../assets/theme2.jpg"
        alt="Avatar"
      />
    </a>
    <a href="javascript:void(0)" @click="toEdit(3)">
      <img
        src="../assets/theme3.jpg"
        alt="Avatar"
      />
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
  margin-top: 5%;
  margin-bottom: 5%;
}
.second-screen img {
  width: 25%;
  height: auto;
  border-radius: 50%;
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 9px 20px -5px, rgba(0, 0, 0, 0.3) 0px 8px 12px -8px;
}
.second-screen a{
  margin: 2%;
}
</style>