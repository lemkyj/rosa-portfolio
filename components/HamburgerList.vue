<template>
  <div class="fixed inset-0 bg-brand-pink w-full h-full z-50">
    <button
      aria-label="Close"
      class="absolute right-8 sm:right-16 top-8 sm:top-16 cursor-pointer"
      @click="$store.commit('main/navisOpen')"
    >
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
    </button>
    <div
      aria-label="Close"
      class="flex flex-col w-full h-full justify-center items-center space-y-14"
      @click="$store.commit('main/navisOpen')"
    >
      <nuxt-link exact to="/" class="custom-hover lg:hidden text-5xl font-bold"
        >Home</nuxt-link
      >
      <nuxt-link
        to="/portfolio"
        class="custom-hover lg:hidden text-5xl font-bold"
        >Portfolio</nuxt-link
      >
      <a
        :href="`mailto:${$store.state.main.email}`"
        class="hidden lg:block custom-hover text-5xl font-bold"
        >{{ $store.state.main.email }}</a
      >
      <a
        :href="`mailto:${$store.state.main.email}`"
        class="lg:hidden custom-hover text-5xl font-bold"
        >Email</a
      >
      <div class="flex">
        <a
          rel="noreferrer"
          :href="$store.state.main.twitter"
          target="_blank"
          class="custom-hover cursor-pointer text-base sm:text-2xl font-bold mx-3 sm:mx-8 uppercase m-4"
          >Twitter</a
        >
        <a
          rel="noreferrer"
          :href="$store.state.main.facebook"
          target="_blank"
          class="custom-hover cursor-pointer text-base sm:text-2xl font-bold mx-3 sm:mx-8 uppercase m-4"
          >Facebook</a
        >
        <a
          rel="noreferrer"
          :href="$store.state.main.instagram"
          target="_blank"
          class="custom-hover cursor-pointer text-base sm:text-2xl font-bold mx-3 sm:mx-8 uppercase m-4"
          >Instagram</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.custom-hover {
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover,
  &:focus {
    color: $brand-green-color;
  }
}
</style>