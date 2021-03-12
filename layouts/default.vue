<template>
  <div>
    <header
      id="header"
      class="grid w-full"
      style="grid-template-columns: 10% 1fr 1fr 10%; min-height: 10vh"
    >
      <section class="col-start-2 col-end-3 my-8">
        <nuxt-link exact to="/" class="inline-flex"
          ><Logo id="logo"
        /></nuxt-link>
      </section>
      <section class="custom-navanim my-8 justify-self-end items-center">
        <nav class="hidden md:flex md:space-x-8 items-center text-lg font-bold">
          <nuxt-link to="/portfolio" class="anim-stagger px-10 py-3"
            >Portfolio</nuxt-link
          >
          <nuxt-link
            to="/contact"
            class="anim-stagger px-10 py-3 rounded-full bg-brand-pink text-lg font-bold"
            >Contact</nuxt-link
          >
        </nav>
        <nuxt-link
          to="/contact"
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          id="hamburger"
          class="md:hidden h-8 w-8 justify-center flex items-end"
        >
          <svg
            class=""
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="">
              <rect id="line-top" width="18" height="2" rx="1" fill="#4A4A48" />
              <rect
                id="line-mid"
                y="6"
                width="18"
                height="2"
                rx="1"
                fill="#4A4A48"
              />
              <rect
                id="line-bottom"
                y="12"
                width="18"
                height="2"
                rx="1"
                fill="#4A4A48"
              />
            </g>
          </svg>
        </nuxt-link>
      </section>
    </header>
    <main class="">
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss">
// @import "../assets/main.scss";

/* 
NOTE Concentric CSS Approach
  - CSS Class Orders -
    1. Custom class with 'custom-'prefix
    2. positioning/visibility 
    3. box model 
    4. borders 
    5. background 
    6. typography 
    7. others 

  ex) <div id="box" class="custom-box flex mx-4 border bg-red-200 text-bold"></div>
*/

body {
  overflow: initial;
}
</style>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>