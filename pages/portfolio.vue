<template>
  <div class="anim-stagger" style="grid-template-columns: 10% 1fr 1fr 10%">
    <div
      class="flex sticky top-0 shadow-lg justify-center col-start-2 col-end-3 border bg-white p-4 space-x-4"
    >
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
      >
        ALL
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
      >
        Package
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
      >
        Illustration
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
      >
        Drawing
      </button>
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
      >
        Photography
      </button>
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 focus:outline-none focus:ring focus:ring-pink-200 rounded px-6 py-2 my-2 text-white"
      >
        Others
      </button>
      </button>
    </div>
    <div
      class="grid grid-cols-4 grid-rows-2 gap-2 border-2 border-gray-600"
    >
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
      <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      const tl = gsap.timeline();
      tl.set(document.body, {
        opacity: 0,
        x: -10,
      }).to(document.body, {
        duration: 1.5,
        opacity: 1,
        x: 0,
        ease: "slowmo.out",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
