<template>
  <div>
    <app-header class="opacity-0 z-10" />
    <!-- <Nuxt /> -->
    <div class="fixed inset-0 bg-brand-pink w-full h-full z-20">
      <div class="flex justify-end mt-8 mr-8">
        <svg
          width="46"
          height="46"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Hamburger-svg">
            <rect
              id="line-top"
              x="3.32892"
              width="30.547"
              height="3.39411"
              rx="1.69706"
              transform="rotate(45 3.32892 0)"
              fill="#4A4A48"
            />
            <rect
              id="line-mid"
              x="11.2319"
              y="10.1823"
              width="3.39411"
              height="3.39411"
              rx="1.69706"
              fill="#4A4A48"
            />
            <rect
              id="line-bottom"
              x="0.928925"
              y="21.6"
              width="30.547"
              height="3.39411"
              rx="1.69706"
              transform="rotate(-45 0.928925 21.6)"
              fill="#4A4A48"
            />
          </g>
        </svg>
      </div>
      <div
        class="flex flex-col w-full h-full justify-center items-center space-y-14"
      >
        <nuxt-link exact to="/" class="text-5xl font-bold">Home</nuxt-link>
        <nuxt-link to="/portfolio" class="text-5xl font-bold"
          >Portfolio</nuxt-link
        >
        <a href="mailto:lia8488@hotmail.com" class="text-5xl font-bold"
          >Email</a
        >
      </div>
    </div>
    <div class="slider"></div>
    <div class="custom-scroll-top opacity-0 absolute z-10">
      <button
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
}

/* ScrollBar */

/* Scrollbar end */
</style>

<script>
import AppHeader from "../components/AppHeader.vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
// gsap.registerPlugin(ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);

export default {
  components: {
    AppHeader,
  },
  mounted() {
    this.animInit();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 500);
    });
  },
  methods: {
    animInit() {},
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>