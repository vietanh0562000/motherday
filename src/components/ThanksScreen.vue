<template>
  <div class="thankScreen">
    <span>Thank You!</span>
    <b-icon icon="download" class="btnDownload" @click="exportPhoto"></b-icon>
    <b-icon-house-door-fill @click="startMake" class="btnDownload" id="Home" />
  </div>
</template>

<script>
export default {
  name: "thanks-screen",
  methods: {
    startMake() {
      this.$router.push("/");
    },
    exportPhoto() {
      var download = document.createElement("a");
      download.href = this.$route.params.completeCard;
      if (this.getMobileOperatingSystem() === "iOS") {
        download.download = "happy_mother.jpg";
        download.click();
      } else if (this.getMobileOperatingSystem() === "Android") {
        download.download = "happy_mother.jpg";
        download.click();
      } else {
        download.download = "happy_mother.png";
        download.click();
      }
    },
    getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
        return "Android";
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }

      return "unknown";
    },
  },
};
</script>

<style>
.thankScreen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
}
.thankScreen span {
  font-size: 2.5em;
}
.btnDownload {
  width: 100%;
  height: 10%;
  color: #e72573;
}

#Home {
  height: 8%;
}
</style>