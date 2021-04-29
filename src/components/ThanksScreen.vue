<template>
  <div class="thankScreen">
    <span>Thank You!</span>
      <b-icon icon="download"  class="btnDownload" @click="exportPhoto" ></b-icon>
      <b-icon-house-door-fill @click="startMake" class="btnDownload" id="Home"/>
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
.thankScreen{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
}
.thankScreen span{
  font-size: 2.5em;
}
.btnDownload{
  width: 100%;
  height: 10%;
  color: #e72573;
}

#Home{
  height: 8%;
}
</style>