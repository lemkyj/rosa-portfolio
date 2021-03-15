<template>
  <main>
    <section class="custom-section">
      <div class="custom-hero">
        <div class="custom-hero-img w-full h-full">
          <div class="custom-titles opacity-0">
            <h1
              class="custom-headline relative flex px-4 py-2 sm:px-8 sm:py-4 font-display text-10xl"
            >
              Rosa Lee
            </h1>
            <p
              class="custom-subtitle relative flex px-4 py-2 md:px-2 sm:px-8 sm:py-4 text-2xl md:text-5xl font-display"
            >
              DESIGN / ILLUSTRATION / PHOTOGRAPHY
            </p>
          </div>
        </div>
        <div class="scroller text-center">--- SCROLL ---</div>
      </div>
    </section>
    <!-- Spacer -->
    <div
      class="border border-gray-500 bg-brand-lightgreen"
      style="height: 15vh"
    ></div>
    <!-- Spacer end -->
    <section class="h-screen w-full border-4 border-blue-600 bg-white">
      <div class="h-screen grid grid-cols-2 grid-rows-6 grid-flow-col">
        <div class="border border-red-500">
          <button class="w-full h-full text-6xl font-display border-2">
            <div
              class="flex justify-end items-center w-full h-full bg-brand-lightgreen"
            >
              <h2 class="">PACKAGE DESIGN</h2>
              <img
                class="ml-4"
                src="~/assets/arrow-right.svg"
                alt="right-icon"
              />
            </div>
          </button>
        </div>
        <div class="border border-red-500">
          <div
            class="w-full h-full bg-brand-lightgreen flex justify-end items-center"
          >
            <h2 class="text-6xl font-display mr-8">ILLUSTRATION</h2>
          </div>
        </div>
        <div class="border border-red-500">
          <div
            class="w-full h-full bg-brand-lightgreen flex justify-end items-center"
          >
            <h2 class="text-6xl font-display mr-8">DRAWING</h2>
          </div>
        </div>
        <div class="border border-red-500">
          <div
            class="w-full h-full bg-brand-lightgreen flex justify-end items-center"
          >
            <h2 class="text-6xl font-display mr-8">PHOTOGRAPHY</h2>
          </div>
        </div>
        <div class="border border-red-500">
          <div
            class="w-full h-full bg-brand-lightgreen flex justify-end items-center"
          >
            <h2 class="text-6xl font-display mr-8">LOGO DESIGN</h2>
          </div>
        </div>
        <div class="border border-red-500">
          <div
            class="w-full h-full bg-brand-lightgreen flex justify-end items-center"
          >
            <h2 class="text-6xl font-display mr-8">OTHERS</h2>
          </div>
        </div>
        <div class="border-2 border-red-600 row-start-1 row-end-7">dsa</div>
      </div>
    </section>
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
        )
        .to(".custom-titles", {
          duration: 1,
          opacity: 1,
          ease: "power2.in",
        })
        .fromTo(
          ".custom-subtitle, .custom-headline",
          {
            xPercent: -5,
          },
          {
            duration: 2,
            stagger: 0.5,
            xPercent: 0,
            opacity: 1,
            ease: "slowmo.in",
          },
          "-=1"
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
      )
        .to(
          ".custom-headline, .custom-subtitle",
          { stagger: 0.3, duration: 0.5, opacity: 1, ease: "slowmo.in" },
          "-=1.5"
        )
        .to(".slider", {
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
    .custom-hero-img {
      background: url("~@/assets/mountain.jpg");
      background-size: cover;
      width: 100%;
      height: 100%;

      .custom-titles {
        // top: 64%;
        bottom: 0;
        left: 0%;
        position: absolute;
        color: black;
        mix-blend-mode: screen;
        background-color: #fbe3e8;
        &:after {
          content: "";
          background: black;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .custom-headline {
        @apply text-8xl;
        font-family: "Bebas Neue", cursive;
        @screen sm {
          // top: 54.5%;
          // left: -2.3%;
          font-size: 8.6rem;
        }
      }
      .custom-subtitle {
        // top: 82.9%;
        // left: 0%;

        @screen sm {
          // top: 83%;
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
