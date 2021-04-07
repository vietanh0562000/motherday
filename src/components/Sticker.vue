<template>
  <drr
    :x="150"
    :y="150"
    :w="100"
    :h="100"
  >
    <slot />
  </drr>
</template>

<script>
/* eslint-disable no-param-reassign,no-unused-expressions,no-console */

export default {
  name: "app",
  components: {
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
  }),
  methods: {
    handleDrag({ target, transform }) {
      target.style.transform = transform;
    },
    handleResize({ target, width, height }) {
      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
    },
    handleScale({ target, transform }) {
      target.style.transform = transform;
    },
    handleRotate({ target, transform }) {
      target.style.transform = transform;
    },
    handleWarp({ target, transform }) {
      target.style.transform = transform;
    },
    clearAllStates() {
      Object.keys(this.states).forEach((key) => {
        this.moveable[key] = false;
      });
    },
  },
  watch: {
    currentState(newState) {
      this.clearAllStates();
      this.moveable[newState] = true;
    },
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>