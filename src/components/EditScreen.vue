<template>
  <div class="edit-screen">
    <loading :active.sync="isLoading"
       :can-cancel="true"
       :is-full-page="fullPage"></loading>
    <div class="action">Step 2: Choose Your e-Sticker/s</div>
    <!-- sticker -->
    <div class="sticker">
      <div class="circleImg" style="background-image: url(assets/e-stickers01.png);" @click="addSticker('01')">
      </div>
      <div class="circleImg" style="background-image: url(assets/e-stickers02.png);" @click="addSticker('02')">
      </div>
      <div class="circleImg" style="background-image: url(assets/e-stickers04.png);" @click="addSticker('04')">
      </div>
      <div class="circleImg" style="background-image: url(assets/e-stickers06.png);" @click="addSticker('06')">
      </div>
      <div class="circleImg" style="background-image: url(assets/e-stickers07.png);" @click="addSticker('07')">
      </div>
      <br />

    </div>
    <div id="photo">
      <div id='photo-child'>
         <div id="capture-img" class="img-cntnr" :style="styleProps">
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
            v-bind:key="'sticker' + item.id"
            >
            <img :src="item.img" width="100" height="100" class="image"/>
        </component>
      </div>
      </div>
    </div>

    <div class="btn">
      <div class="smallBtn" >
        <a id='changeFont' @click="changeFont" :style="fontStyle">{{fontSample}}</a>
      </div>
      <div class="mediumBtn">
        <input id='inputValue' v-if="isEditing" v-model="listTextInput[selectedId].inputValue" class="inputValue" @keyup.enter="isEditing = false" :style="fontStyle"  />
        <a v-else @click="addText" >click to enter text</a>
      </div>
    </div>
    <div class="btn">
      <a @click="nextScreen">click to complete</a>
    </div>
  </div>
</template>

<script>
import * as htmlImage from 'html-to-image';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "edit-screen",
  components: {
    'text-input': () => import('./TextInput'),
    'sticker': () => import('./Sticker'),
    Loading
  },
  beforeUpdate() {

  },
  mounted() {
    this.themeId = this.$route.params?.themeId ?? 1;
    const theme = require(`../../public/assets/e-template${this.themeId}.png`);
    this.styleProps = {
      backgroundImage: `url(${theme})`,
      backgroundSize: "100% 100%",
      width: "100%",
      height: "100%",
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
      fontFamily: 'Dancing Script',
      fontSize: '1.2rem'
    },
    fontId: 0,
    fontSample: 'Aa',
    isEditing: false,
    inputValue: [],
    choosenInput: 0,
    selectedId: null,
    listSticker: [],
    lastStickerId: 0,
    isLoading: false,
    fullPage: true,
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
      let div = document.getElementById("photo-child");
      return await htmlImage.toPng(div);
    },
    async nextScreen() {
      this.isLoading = true;
      const completeCard = await this.exportPhoto();
      this.isLoading = false;
      await this.$router.push({name: "tks-screen", params: {completeCard: completeCard}});
    },
    addText() {
      const item = {
        id: this.lastTextInputId++,
        type: "text-input",
        inputValue: 'Your text'
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
        'Josefin Sans',
        'Fantasy',
        'Dancing Script',
        'ZCOOL XiaoWei',
      ]
      this.fontStyle = {
        fontFamily : fonts[(this.fontId+1)%fonts.length],
        fontSize: '1.2rem',
      }
      this.fontId = (this.fontId + 1) % fonts.length;
      if (this.fontId == fonts.length-1){
        this.fontSample='字';
      }else{
        this.fontSample='Aa';
      }

    },
    changeInput(value){
      this.selectedId = value.id
      this.inputValue=value;
      this.isEditing=true;
    }
  },
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .edit-screen{
    width: 100%;
    height: 100%;
  }
}
@media only screen and (min-width: 801px) {
  .edit-screen {
    width: 400px;
    height: 100%;
  }
}
.action{
  font-size: 1em;
}

.circleImg{
  width: 20%;
  height: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
#photo {
  overflow: hidden;
  width: 70%;
  height: 50%;
  margin: auto;
}
#photo-child {
  width: 100%;
  height: 100%;
}
#capture-img {
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
  display: flex;
  height: 20%;
  width: 100%;
  margin-top: 5%;
  padding: 5%;
}
.smallBtn{
  background: #e72573;
  border-right: 1px solid white;
  width: 20%;
  height: 100%;
  text-align: center;
  color: rgb(255, 249, 249);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
}
.mediumBtn{
  background: #e72573;
  border: none;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  color: rgb(255, 249, 249);
  font-size: 1.2rem;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn{
  background: #e72573;
  height: 6%;
  width: 75%;
  border: none;
  border-radius: 10px;
  color: rgb(255, 249, 249);
  font-size: 1.2rem;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% auto 0px auto;
}
.inputValue{
  color: white;
  background: #e72573;
  outline: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-size: 1.2rem;
}
</style>