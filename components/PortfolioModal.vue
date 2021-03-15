<template>
  <div class="backdrop" @click="$emit('close')">
    <div
      id="popup-modal"
      class="relative flex justify-center items-center bg-white"
    >
      <div class="img-wrapper">
        <img
          :src="require(`~/assets/img/${data.src}`)"
          class="modal-img shadow-2xl rounded-lg object-cover object-center sm:max-w-sm md:max-w-md lg:max-w-screen-lg"
          alt=""
        />
      </div>

      <!-- <p>{{ data.id }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  emits: ["close"],
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

#popup-modal {
  /* position: sticky;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: white;
  z-index: 100;
  border: none; */
  animation: modal 0.3s ease-out forwards;
  .modal-img {
  }
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>