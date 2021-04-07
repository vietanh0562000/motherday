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
    methods: {
        startMake () {
            this.$router.push('/')
        },
        exportPhoto() {
          var download = document.createElement("a");
          download.href = this.$route.params.completeCard;
          download.download = "happy_mother.png";
          download.click();
        }
    }
}
</script>

<style>

</style>