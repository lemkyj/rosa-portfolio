<template>
  <div class="backdrop" @click="$emit('close')">
      <img :src="data.src" alt="">
      <p style="color:white">{{data.id}}</p>
      </div>
</template>

<script>
export default {
  props: ['data'],
  emits: ['close'],
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

</style>