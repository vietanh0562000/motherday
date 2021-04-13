<template>
  <div class="thankScreen">
    <span>Thank You!</span>

      <a @click="exportPhoto" class="btnDownload">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"/>
        </svg>
      </a>
      <a @click="startMake" class="btnDownload" id="btnHome">
        <svg version="1.1" id="Home" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 330.242 330.242" style="enable-background:new 0 0 330.242 330.242;" xml:space="preserve">
<path d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999
	c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314
	c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053
	v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5
	c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z"
/></svg>
      </a>
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
  height: 20%;
}
.btnDownload svg{
  height: 100%;
}

#Home{
  height: 40%;
}
</style>