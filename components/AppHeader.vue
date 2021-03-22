<template>
  <header
    id="header"
    class="grid w-full"
    style="grid-template-columns: 10% 1fr 1fr 10%; min-height: 10vh"
  >
    <section class="col-start-2 col-end-3 my-8">
      <nuxt-link exact to="/" class="inline-flex"><Logo id="logo" /></nuxt-link>
    </section>
    <section class="my-8 justify-self-end items-center">
      <nav
        class="custom-logo--text hidden md:flex md:space-x-8 items-center text-lg font-bold"
      >
        <nuxt-link to="/portfolio" class="anim-nav px-10 py-3"
          >Portfolio</nuxt-link
        >
        <button
          role="Navigation Button"
          class="anim-nav px-10 py-3 rounded-full bg-brand-pink text-lg font-bold"
          @click="$store.commit('main/navisOpen')"
        >
          Contacts
        </button>
      </nav>
      <button
        @click="$store.commit('main/navisOpen')"
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        id="hamburger"
        class="anim-nav md:hidden h-8 w-8 justify-center flex items-end"
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
      </button>
    </section>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {};
  },
  methods: {
    // openMenu() {
    //   this.navisOpen = !this.navisOpen;
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>