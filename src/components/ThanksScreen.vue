<template>
  <div>
      Thank You!
      <button @click="exportPhoto"><i class="fa fa-download"></i></button>
      <button @click="startMake">make again</button>
  </div>
</template>

<script>
export default {
    name: 'thanks-screen',
    props:{
      completeCard: Object
    },
    methods: {
        startMake () {
            this.$router.push('/')
        },
        exportPhoto() {
          console.log(this.completeCard);
        }
    }
}
</script>

<style>

</style>