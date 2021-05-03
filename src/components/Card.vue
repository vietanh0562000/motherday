<template>
  <div class="app-card">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Card",
  methods: {},
};
</script>

<style scoped>
.app-card {
  margin: 0px auto auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>