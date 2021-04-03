<template>
  <div ref="draggableContainer" class="draggable-container">
    <div class="text-input draggable-header" @mousedown="dragMouseDown">
      <div v-if="!isEditting" @dblclick="isEditting = true">{{ inputVal }}</div>
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
      event.preventDefault();
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function (event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
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