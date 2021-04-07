<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>
#app /deep/ .container{
  margin: 20px auto auto;
  background-color: aqua;
  width: 100%;
  height: 75%;
  background-color: antiquewhite;
  display: grid;
  grid-template-rows: 80% 20%;
}
</style>