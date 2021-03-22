<template>
  <div class="bg-brand-lightgreen border-t-2 overflow-x-hidden">
    <div
      v-for="category in $store.state.main.list"
      :key="category.id"
      class="sm:hidden mx-4 my-12 p-8 shadow-lg rounded-3xl bg-white"
    >
      <h3 class="relative font-display text-4xl mb-4">
        <span class="relative z-10">{{ category.name }}</span>
        <span
          aria-hidden="true"
          class="bg-brand-green z-0 absolute w-8 sm:w-10 h-full -left-3 -top-1"
        ></span>
      </h3>
      <ul class="inline-flex space-x-4 mb-4 font-bold w-full">
        <li
          class="px-4 py-2 rounded-full bg-brand-lightgreen text-sm truncate"
          v-for="tag in category.tag"
          :key="tag"
        >
          {{ "# " + tag }}
        </li>
      </ul>
      <p class="line-clamp-2 md:line-clamp-none text-lg max-w-prose">
        {{ category.contents }}
      </p>
      <nuxt-link
        :to="'/portfolio?category=' + category.id"
        class="custom-link-btn my-4 font-bold text-base md:text-lg text-brand-green flex items-center transform translate-x-2 hover:translate-x-4 duration-75 ease-out"
        >VIEW PROJECTS
        <svg
          class="ml-2 h-5 w-5 anim-svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5833 15.3334L40.25 23M40.25 23L32.5833 30.6667M40.25 23H5.75"
            stroke="#1f423e"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>