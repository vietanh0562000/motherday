<template>
    <div ref="draggableContainer" class="draggable-container"  v-touch="editText">
      <div class="text-input draggable-header" @touchstart="dragMouseDown">
        <drr :x="100" :y="100" :w="100" :h="100">
          <div id="textValue" class="textValue" :style="font">{{ inputVal }}</div>
        </drr>
      </div>
    </div>
</template>

<script>
export default {
  name: "text-input",
  props: [
      "text",
      "inputVal",
      "font",
      "idText",
  ],
  data: () => ({
    positions: {
      clientX: undefined,
      clientY: undefined,
      movementX: 0,
      movementY: 0,
    },
  }),
  methods: {
    dragMouseDown: function (event) {
      // eslint-disable-next-line
      debugger
      if (this.isEditting) return;
      //event.preventDefault();
      // eslint-disable-next-line
      // debugger
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      
      // document.ontouchmove = this.elementDrag;
      // document.ontouchend = this.closeDragElement;
      window.addEventListener("touchmove", this.elementDrag);
        window.addEventListener("touchend", this.closeDragElement);
    },
    elementDrag: function (event) {
      //event.preventDefault();
       
      this.positions.movementX = this.positions.clientX - event.touches[0].clientX;
      this.positions.movementY = this.positions.clientY - event.touches[0].clientY;
      this.positions.clientX = event.touches[0].clientX;
      this.positions.clientY = event.touches[0].clientY;
      
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
        // eslint-disable-next-line
      // debugger
    },
    closeDragElement() {
      window.removeEventListener("touchmove", this.elementDrag);
      window.removeEventListener("touchend", this.closeDragElement);
    },
    changeFont(id){
      const fonts =[
        'Lobster',
        'Crimson Pro',
        'ZCOOL XiaoWei'
      ];
      this.font = fonts[id];
      this.getElementById("textValue").styleProps = {
        fontSize: "50px",
        fontFamily: this.font
      }
    },
    editText(){
      console.log(1);
      this.$emit('changeInput', {'val': this.inputVal, 'id': this.idText});
    }
  },
};
</script>

<style scoped>
/*.draggable-container {*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  position: absolute;*/
/*  z-index: 9;*/
/*}*/
/*.draggable-header {*/
/*  z-index: 10;*/
/*}*/
/*input:focus{*/
/*  outline: none;*/
/*}*/
/*.textValue{*/
/*  font-size: 50px;*/
/*  font-family: Magneto;*/
/*}*/
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');
</style>