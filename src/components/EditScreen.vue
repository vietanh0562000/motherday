<template>
  <div>
    theme la {{ themeId }}
    <div id="photo" class="img-cntnr" :style="styleProps">
      <component
        v-for="item in listTextInput"
        :is="item.type"
        v-bind:key="item.id"
      ></component>
    </div>
    <!-- sticker -->
    <div v-if="step === 1" style="margin-top: 100px">
      <a href="javascript:void(0)" @click="addSticker(1)">
        <img
          src="../assets/sticker1.jpg"
          alt="Avatar"
          width="50px"
          height="50px"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker(2)">
        <img
          src="../assets/sticker2.jpg"
          alt="Avatar"
          width="50px"
          height="50px"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker(3)">
        <img
          src="../assets/sticker3.jpg"
          alt="Avatar"
          width="50px"
          height="50px"
        />
      </a>
      <br />
      <button @click="nextStep">To Step 3</button>
      <button @click="toSelectTheme">Back to Step 1</button>
    </div>

    <div v-else>
      <button @click="prevStep">Back to step 2</button>
      <button @click="addText">Add text</button>
      <button @click="exportPhoto">export to png</button>
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
        dragImgMouseStart.x = e.clientX;
        dragImgMouseStart.y = e.clientY;
        currentPos.x += lastDiff.x;
        currentPos.y += lastDiff.y;
        lastDiff = { x: 0, y: 0 };
        window.addEventListener("mousemove", mousemoveDragImg);
        window.addEventListener("mouseup", mouseupDragImg);
      }

      function mousemoveDragImg(e) {
        e.preventDefault();
        lastDiff.x = e.clientX - dragImgMouseStart.x;
        lastDiff.y = e.clientY - dragImgMouseStart.y;
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
        window.removeEventListener("mousemove", mousemoveDragImg);
        window.removeEventListener("mouseup", mouseupDragImg);
      }

      image.addEventListener("mousedown", mousedownDragImg);
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
a img {
  border-radius: 50%;
}
#photo {
  width: 300px;
  height: 300px;
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
</style>