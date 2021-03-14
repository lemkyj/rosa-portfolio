<template>
  <main>
    <section class="custom-section">
      <div class="custom-hero">
        <div class="img w-full h-full">
          <h1
            class="custom-headline inline-flex px-4 py-2 sm:px-8 sm:py-4 font-display text-10xl"
          >
            Rosa Lee
          </h1>
          <p
            class="custom-subtitle inline-flex px-4 py-2 md:px-2 sm:px-8 sm:py-4 text-2xl md:text-5xl font-display"
          >
            DESIGN / ILLUSTRATION / PHOTOGRAPHY
          </p>
        </div>
        <div class="scroller text-center">--- SCROLL ---</div>
      </div>
    </section>
    <section class="h-screen w-full border border-blue-200"></section>
    <div class="slider"></div>
  </main>
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
      tl.to(".anim, #header", {
        duration: 0.8,
        stagger: 0.05,
        ease: "slowmo.out",
      });
      tl.to(
        ".custom-hero",
        { duration: 0.8, height: "0%", ease: "power4.in" },
        "-=0.8"
      ).to(".slider", {
        duration: 0.8,
        x: "-100%",
        ease: "power4.in",
        onComplete: () =>
          setInterval(function () {
            done();
          }, 500),
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

.custom-section {
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

      .custom-headline,
      .custom-subtitle {
        position: absolute;
        color: black;
        mix-blend-mode: screen;
        background-color: #fbe3e8;
        &:after {
          content: "";
          background: black;
          position: absolute;
          left: 0;
          top: 50;
        }
      }
      .custom-headline {
        top: 64%;
        left: -4.5%;
        @apply text-8xl;
        font-family: "Bebas Neue", cursive;
        @screen sm {
          top: 54.5%;
          left: -2.3%;
          font-size: 8.6rem;
        }
      }
      .custom-subtitle {
        top: 82.9%;
        left: 0%;

        @screen sm {
          top: 83%;
        }
      }
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
