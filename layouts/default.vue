<template>
  <div>
    <app-header class="opacity-0 z-50" />
    <hamburger-list v-show="$store.state.main.navisOpen" />
    <Nuxt />

    <div class="slider"></div>
    <div class="custom-scroll-top opacity-0 absolute z-10">
      <button
        aria-label="scroll to top"
        @click="scrollTop()"
        class="rounded-full bg-brand-green fixed bottom-16 right-10 p-3"
      >
        <svg
          class=""
          width="32"
          height="32"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3334 13.4167L23 5.75M23 5.75L30.6667 13.4167M23 5.75L23 40.25"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.custom-nav--open {
  @apply absolute inset-0 bg-brand-pink w-full h-full z-20;
}

/* 
NOTE Concentric CSS Approach
  - CSS Class Orders -
    1. 'custom-'prefix classes
    2. positioning/visibility 
    3. box model 
    4. borders 
    5. background 
    6. typography 
    7. others 

  ex) <div id="box" class="custom-box flex mx-4 border bg-red-200 text-bold"></div>
*/

body {
  // overflow: hidden;
  height: 100%;
  // overflow-x: hidden;
}

/* ScrollBar */

/* Scrollbar end */
</style>

<script>
import AppHeader from "../components/AppHeader.vue";
import HamburgerList from "../components/HamburgerList.vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
// gsap.registerPlugin(ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);

export default {
  components: {
    AppHeader,
    HamburgerList,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 1000);
    });
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>