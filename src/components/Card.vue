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
  margin: 20px auto auto;
  width: 325px;
  background-color: antiquewhite;
}
</style>