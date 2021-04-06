<template>
  <div class="edit-screen">
    <div v-if="step === 1" class="btnControl">
      <span @click="toSelectTheme" class="arrow left"></span>
      <div class="action">Add Sticker</div>
      <span @click="nextStep" class="arrow right"></span>
    </div>
    <div v-else class="btnControl">
      <span @click="prevStep" class="arrow left"></span>
      <div class="action">Add Text</div>
      <div @click="exportPhoto" class="btnExport">Export</div>
    </div>

    <div id="photo" class="img-cntnr" :style="styleProps">
      <component
        v-for="item in listTextInput"
        :is="item.type"
        v-bind:key="item.id"
      ></component>
    </div>
    <!-- sticker -->
    <div v-if="step === 1" class="sticker">
      <a href="javascript:void(0)" @click="addSticker(1)">
        <img
          src="../assets/sticker2.jpg"
          alt="Avatar"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker(2)">
        <img
          src="../assets/sticker2.jpg"
          alt="Avatar"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker(3)">
        <img
          src="../assets/sticker3.jpg"
          alt="Avatar"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker(2)">
        <img
          src="../assets/sticker2.jpg"
          alt="Avatar"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker(2)">
        <img
          src="../assets/sticker2.jpg"
          alt="Avatar"
        />
      </a>
      <br />
      
    </div>

    <div v-else>
      <form action="javascript:void(0);" class="formText">
      <input placeholder="Add your text" required/>
      <button type="submit" @click="addText" class="btnAdd">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import domtoimage from "dom-to-image";

export default {
  name: "edit-screen",
  components: {
    'text-input': () => import('./TextInput')
  },
  mounted() {
    this.themeId = this.$route.params?.themeId ?? 1;
    const theme = require(`../assets/theme${this.themeId}.jpg`);
    this.styleProps = {
      backgroundImage: `url(${theme})`,
      backgroundSize: "contain",
      width: "80%",
      height: "70%",
      margin: "auto"
    };
  },
  data: () => ({
    themeId: 1,
    step: 1,
    styleProps: {},
    listTextInput: [],
    lastTextInputId: 0,
  }),
  methods: {
    addSticker(stickerId) {
      const img = new Image();
      img.src = require(`../assets/sticker${stickerId}.jpg`);
      img.width = "100";
      img.height = "100";
      img.style.position = "absolute";
      document.getElementById("photo").appendChild(img);

      let image = img,
        dragImgMouseStart = {},
        lastDiff = { x: 0, y: 0 },
        initialPos = image.getBoundingClientRect(),
        currentPos = { x: -initialPos.width / 2, y: 0 };

      function mousedownDragImg(e) {
        e.preventDefault();
        dragImgMouseStart.x = e.touches[0].clientX;
        dragImgMouseStart.y = e.touches[0].clientY;
        currentPos.x += lastDiff.x;
        currentPos.y += lastDiff.y;
        lastDiff = { x: 0, y: 0 };
        window.addEventListener("touchmove", mousemoveDragImg);
        window.addEventListener("touchend", mouseupDragImg);
      }

      function mousemoveDragImg(e) {
        // e.preventDefault();
        // eslint-disable-next-line
        // debugger
        lastDiff.x = e.touches[0].clientX - dragImgMouseStart.x;
        lastDiff.y = e.touches[0].clientY - dragImgMouseStart.y;
        requestAnimationFrame(function () {
          image.style.transform =
            "translate(" +
            (currentPos.x + lastDiff.x) +
            "px," +
            (currentPos.y + lastDiff.y) +
            "px)";
        });
      }

      function mouseupDragImg(e) {  
        e.preventDefault();
        window.removeEventListener("touchmove", mousemoveDragImg);
        window.removeEventListener("touchend", mouseupDragImg);
      }

      image.addEventListener("touchstart", mousedownDragImg);
    },
    exportPhoto() {
      let div = document.getElementById("photo");
      domtoimage
        .toPng(div)
        .then((dataUrl) => {
          var download = document.createElement("a");
          download.href = dataUrl;
          download.download = "test.png";
          download.click();
          setTimeout(() => {
            this.$router.push('/tks-screen')
          }, 1000)
        })
        .catch((error) => console.error("oops, something went wrong!", error));
    },
    nextStep() {
      this.step += 1;
    },
    addText() {
      const item = {
        id: this.lastTextInputId++,
        type: "text-input",
      };
      this.listTextInput.push(item);
    },
    prevStep () {
        this.step -= 1
    },
    toSelectTheme () {
        this.$router.push('/select-theme')
    }
  },
};
</script>

<style scoped>
.edit-screen{
  width: 100%;
  height: 100%;
}
a img {
  border-radius: 50%;
}
#photo {
  position: relative;
  overflow: hidden;
}
.img-cntnr img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: -webkit-grab;
} 
.sticker{
  margin-top: 5%;
}
.sticker img{
  margin: 2%;
  width: 15%;
  height: auto;
}
.btnControl{
  display: flex;
  justify-content: space-between;
}
.btnControl .action{
  font-size: 1.5em;
  align-self: center;
}
.arrow {
  display: block;
  background-color: black;
  width: 3vmin;
  height: 3vmin;
  margin: 5% 5% 2% 5%;
  background: transparent;
  border-top: 1vmin solid rgb(231, 129, 129);
  border-right: 1vmin solid rgb(231, 129, 129);
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
}
.arrow.left {
  left: 0;
  transform: translate3d(0, -50%, 0) rotate(-135deg);
}
.arrow.right {
  right: 0;
  transform: translate3d(0, -50%, 0) rotate(45deg);
}
.btnExport {
  color: rgb(245, 174, 174);
  font-size: 1.5em;
  align-self: center;
  margin-right: 0.5em;
}

.btnAdd{
  background: rgb(245, 174, 174);
  height: 7%;
  width: 50%;
  border: none;
  border-radius: 10px;
  color: rgb(255, 249, 249);
  font-size: 1.5em;
  transition: 1s;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% auto 0px auto;
}
.formText{
  margin: 5% auto;
  width: 70%;
  display: flex;
  justify-content: space-around;
}
.formText input{
  width: 50%;
  height: 20px;
  align-self: center;
}
.formText button{
  width: 20%;
  font-size: 1.3em;
  align-self: center;
}

</style>