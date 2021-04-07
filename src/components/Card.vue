<template>
  <div class="card">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {
  }
}
</script>

<style scoped>
.card{
  padding-top: 20px;
  margin: 0px auto auto;
  width: 100%;
  height: 100%;
  /* background-color: antiquewhite; */
}
</style>