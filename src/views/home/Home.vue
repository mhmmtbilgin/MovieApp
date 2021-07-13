<template>
  
</template>

<script>
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => console.log("Mount: ⛰ Home Component"));
    onUnmounted(() => console.log("unMount: 👋🏻 Home Component "));

    return {};
  },
};





</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  &__header {
    flex-grow: 1;

    margin: 0;
    padding: 20px;

    min-height: 120px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    background-color: $blue;
    color: $white;
  }
}
</style>
