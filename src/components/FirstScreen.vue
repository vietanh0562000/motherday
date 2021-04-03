<template>
  <div>
    <button @click="nextScreen">customize</button>
  </div>
</template>

<script>
export default {
    name: "first-screen",
    methods: {
        nextScreen () {
            this.$router.push('select-theme')
        }
    }
}
</script>

<style>

</style>