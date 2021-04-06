<template>
  <div ref="draggableContainer" class="draggable-container">
    <div class="text-input draggable-header" @touchstart="dragMouseDown">
      <div style="font-size:50px" v-if="!isEditting" @dblclick="isEditting = true">{{ inputVal }}</div>
      <input
        v-else
        v-model="inputVal"
        @keyup.enter="isEditting = false"
        @blur="isEditting = false"
        type="text"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "text-input",
  props: ["text"],
  data: () => ({
    inputVal: "hello",
    isEditting: false,
    positions: {
      clientX: undefined,
      clientY: undefined,
      movementX: 0,
      movementY: 0,
    },
  }),
  methods: {
    dragMouseDown: function (event) {
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
  },
};
</script>

<style scoped>
.draggable-container {
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 9;
}
.draggable-header {
  z-index: 10;
}
</style>