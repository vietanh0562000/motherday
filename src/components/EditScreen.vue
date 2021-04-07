<template>
  <div class="edit-screen">
    <div class="action">Step 2: Choose Your e-Sticker/s</div>
    <!-- sticker -->
    <div class="sticker">
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
    <div id="photo" class="img-cntnr" :style="styleProps">
      <component
        v-for="item in listTextInput"
        :is="item.type"
        v-bind:key="item.id"
      ></component>
    </div>


    <div>
      <div class="btn">
        <a id='changeFont' @click="changeFont" class="smallBtn" :style="fontStyle">Aa</a>
        <a @click="addText" class="mediumBtn">Click to Enter Text</a>
      </div>
      <button @click="nextScreen" class="btn">CLICK COMPLETE</button>
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
      backgroundSize: "100% 100%",
      width: "70%",
      height: "50%",
      margin: "auto",
      borderRadius: "5%"
    };
  },
  data: () => ({
    themeId: 1,
    step: 1,
    styleProps: {},
    listTextInput: [],
    lastTextInputId: 0,
    fontStyle: {
      fontFamily: 'Monospace',
      fontSize: '1.5em'
    },
    fontId: 0,
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
    async exportPhoto() {
      let div = document.getElementById("photo");
      return await domtoimage.toPng(div).catch((error) => console.error("oops, something went wrong!", error));
    },
    async nextScreen() {
      const completeCard = await this.exportPhoto();
      this.$router.push({path: "tks-screen", props: {completeCard: completeCard}});
    },
    addText() {
      const item = {
        id: this.lastTextInputId++,
        type: "text-input",
        inputValue: 'Alo'
      };
      this.listTextInput.push(item);
    },
    prevStep () {
        this.step -= 1
    },
    toSelectTheme () {
        this.$router.push('/select-theme')
    },
    changeFont(){
      const fonts = [
        'Monospace',
        'Fantasy',
        'Dancing Script',
      ]
      this.fontStyle = {
        fontFamily : fonts[(this.fontId+1)%fonts.length],
        fontSize: '1.5em'
      }
      this.fontId++;

    }
  },
};
</script>

<style scoped>
.edit-screen{
  width: 100%;
  height: 100%;
}
.action{
  font-size: 1em;
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
  cursor: grab;
} 
.sticker{
  margin-top: 5%;
}
.sticker img{
  margin: 2%;
  width: 10%;
  height: auto;
}
.smallBtn{
  background: black;
  border-right: 1px solid white;
  width: 20%;
  text-align: center;
  color: rgb(255, 249, 249);
  font-size: 1.2em;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mediumBtn{
  background: black;
  border: none;
  width: 80%;
  border-radius: 10px;
  color: rgb(255, 249, 249);
  font-size: 1.2em;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn{
  background: black;
  height: 6%;
  width: 65%;
  border: none;
  border-radius: 10px;
  color: rgb(255, 249, 249);
  font-size: 1.2em;
  font-family: inherit;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 2% auto 0px auto;
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