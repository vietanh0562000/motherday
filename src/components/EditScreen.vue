<template>
  <div class="edit-screen">
    <div class="action">Step 2: Choose Your e-Sticker/s</div>
    <!-- sticker -->
    <div class="sticker">
      <a href="javascript:void(0)" @click="addSticker('01')">
        <img
            src="../../public/assets/e-stickers01.png"
            alt="Avatar"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker('02')">
        <img
            src="../../public/assets/e-stickers02.png"
            alt="Avatar"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker('04')">
        <img
            src="../../public/assets/e-stickers04.png"
            alt="Avatar"
        />
      </a>
      <a href="javascript:void(0)" @click="addSticker('06')">
        <img
            src="../../public/assets/e-stickers06.png"
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
        @changeInput = "changeInput"
        :inputVal="item.inputValue"
        :font="fontStyle"
        :idText="item.id"
      ></component>

      <component
        v-for="item in listSticker"
        :is="item.type"
        v-bind:key="item.id"
      >
        <img :src="item.img" width="100" height="100" class="image"/>
      </component>
    </div>


    <div>
      <div class="btn">
        <a id='changeFont' @click="changeFont" class="smallBtn" :style="fontStyle">Aa</a>
        <input id='inputValue' v-if="isEditing" v-model="listTextInput[selectedId].inputValue" class="inputValue" @keyup.enter="isEditing = false" :style="fontStyle"  />
        <a v-else @click="addText" class="mediumBtn">Click to Enter Text</a>
      </div>
      <button @click="nextScreen" class="btn">CLICK COMPLETE</button>
    </div>
  </div>
</template>

<script>
import * as htmlImage from 'html-to-image';

export default {
  name: "edit-screen",
  components: {
    'text-input': () => import('./TextInput'),
    'sticker': () => import('./Sticker'),
  },
  beforeUpdate() {

  },
  mounted() {
    this.themeId = this.$route.params?.themeId ?? 1;
    const theme = require(`../../public/assets/e-template${this.themeId}.png`);
    console.log(theme);
    this.styleProps = {
      backgroundImage: `url(${theme})`,
      backgroundSize: "100% 100%",
      width: "70%",
      height: "50%",
      margin: "auto",
      borderRadius: "5%",
      position: "relative"
    };
  },
  data: () => ({
    moveable: {
      draggable: true,
      throttleDrag: 1,
      resizable: false,
      throttleResize: 1,
      keepRatio: false,
      scalable: true,
      throttleScale: 0.01,
      rotatable: true,
      throttleRotate: 0.2,
      pinchable: true,
      origin: false,
    },
    states: {
      scalable: "Scalable",
      resizable: "Resizable",
      warpable: "Warpable",
    },
    currentState: "scalable",
    themeId: 1,
    step: 1,
    styleProps: {},
    listTextInput: [],
    lastTextInputId: 0,
    fontStyle: {
      fontFamily: 'Monospace',
      fontSize: '1.5rem'
    },
    fontId: 0,
    isEditing: false,
    inputValue: [],
    choosenInput: 0,
    selectedId: null,
    listSticker: [],
    lastStickerId: 0
  }),

  methods: {
    addSticker(stickerId) {
      const item = {
        id: this.lastStickerId++,
        type: "sticker",
        img: require(`../../public/assets/e-stickers${stickerId}.png`)
      };
      this.listSticker.push(item);
    },
    async exportPhoto() {
      let div = document.getElementById("photo");
      return htmlImage.toPng(div)
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    },
    async nextScreen() {
      const completeCard = await this.exportPhoto();
      await this.$router.push({name: "tks-screen", params: {completeCard: completeCard}});
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
        fontSize: '1.5rem'
      }
      this.fontId++;

    },
    changeInput(value){
      // eslint-disable-next-line
      this.selectedId = value.id
      console.log(value);
      this.inputValue=value;
      this.isEditing=true;
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
  margin-left: 2%;
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
.inputValue{
  color: white;
  background: black;
  outline: none;
  border: none;
}
</style>