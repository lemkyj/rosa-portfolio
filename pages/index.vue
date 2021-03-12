<template>
  <section class="custom-section">
    <div class="custom-hero">
      <div class="anim img w-full h-full">
        <div class="hero-title font-display -space-y-1">
          <div
            class="anim custom-headline-box inline-flex px-8 py-1 bg-brand-pink"
          >
            <h1 class="custom-headline text-display">Rosa Lee</h1>
          </div>
          <div
            class="anim custom-subtitle-box flex ml-20 px-8 py-2 bg-brand-pink"
          >
            <p class="custom-subtitle text-subtitle">
              DESIGN / ILLUSTRATION / PHOTOGRAPHY
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="slider"></div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>


<style scoped lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

section {
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;

  .custom-hero {
    position: relative;
    height: 100%;
    width: 80%;
    @media (min-width: 640px) {
      height: 80%;
      margin-top: -3rem;
    }
    &:after {
      content: "";
      background: black;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }
    .img {
      background: url("~@/assets/mountain.jpg");
      background-size: cover;
      width: 100%;
      height: 100%;
    }
    .hero-title {
      position: absolute;
      top: 95%;
      left: 3%;
      font-size: 100px;
      transform: translate(-20%, -70%);
      color: white;
      z-index: 3;
    }
  }
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ebf6f5;
  z-index: -1;
}
</style>
