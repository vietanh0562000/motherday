<template>
  <div>
      Tkss
      <button @click="startMake">make again</button>
  </div>
</template>

<script>
export default {
    name: 'thanks-screen',
    methods: {
        startMake () {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>