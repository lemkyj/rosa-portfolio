<template>
  <section class="custom-section">
    <div class="custom-hero">
      <div class="img w-full h-full">
        <div class="hero-title font-display -space-y-1">
          <div class="anim custom-headline-box inline-flex px-8 py-1">
            <h1 class="custom-headline text-display text-brand-black">
              Rosa Lee
            </h1>
          </div>
          <div class="anim custom-subtitle-box flex ml-20 px-8 py-2">
            <p class="custom-subtitle text-subtitle text-brand-black">
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
export default {
  components: {},
  transition: {
    mode: "out-in",
    css: false,
    enter(el) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".custom-hero",
        { height: "0%" },
        { duration: 1.2, height: "80%", ease: Power2.easeInOut }
      )
        .fromTo(
          ".custom-hero",
          { width: "100%" },
          { duration: 1.2, width: "80%", ease: Power2.easeInOut }
        )
        .fromTo(
          ".slider",
          1.2,
          { x: "-100%" },
          { duration: 1.2, x: "0%", ease: Power2.easeInOut },
          "-=1.2"
        );
    },
    leave(el, done) {
      const tl = gsap.timeline();
      // tl.to(".anim, #header", {
      //   duration: 0.8,
      //   stagger: 0.05,
      //   opacity: 0.3,
      //   ease: "slowmo.out",
      // })
      tl.to(
        ".custom-hero",
        { duration: 0.8, height: "0%", ease: "power4.in" },
        "-=0.8"
      ).to(".slider", {
        duration: 0.8,
        x: "-100%",
        ease: "power4.in",
        onComplete: () => done(),
      });
    },
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
    height: 60%;
    width: 80%;
    margin-top: -6rem;
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
