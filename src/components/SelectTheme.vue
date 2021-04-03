<template>
  <div>
    <h2 style="margin-bottom: 50px">select theme</h2>
    <br />
    <a href="javascript:void(0)" @click="toEdit(1)">
      <img
        src="../assets/theme1.jpg"
        alt="Avatar"
        width="100px"
        height="100px"
      />
    </a>
    <a href="javascript:void(0)" @click="toEdit(2)">
      <img
        src="../assets/theme2.jpg"
        alt="Avatar"
        width="100px"
        height="100px"
      />
    </a>
    <a href="javascript:void(0)" @click="toEdit(3)">
      <img
        src="../assets/theme3.jpg"
        alt="Avatar"
        width="100px"
        height="100px"
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
img {
  border-radius: 50%;
}
</style>