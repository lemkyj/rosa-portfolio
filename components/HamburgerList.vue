<template>
  <div class="fixed inset-0 bg-brand-pink w-full h-full z-20">
    <div class="absolute right-16 top-16" @click="$store.commit('main/navisOpen')">
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
      @click="$store.commit('main/navisOpen')"
    >
      <nuxt-link exact to="/" class="text-5xl font-bold">Home</nuxt-link>
      <nuxt-link to="/portfolio" class="text-5xl font-bold"
        >Portfolio</nuxt-link
      >
      <a :href="`mailto:${$store.state.main.email}`" class="text-5xl font-bold">Email</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>