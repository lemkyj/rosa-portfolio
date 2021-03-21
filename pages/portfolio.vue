<template>
  <div
    class="grid w-full bg-white"
    style="grid-template-columns: 10% 1fr 1fr 10%"
  >
    <div class="col-span-full z-10 sticky top-0">
      <div
        style="grid-template-columns: 10% 1fr 1fr 10%"
        class="grid anim-fade-y shadow-lg bg-white"
      >
        <div
          class="col-start-2 col-end-4 lg:col-start-1 py-2 overflow-x-auto lg:overflow-hidden flex justify-start items-center lg:justify-center space-x-4"
        >
          <button
            class="custom-button--filter text-sm md:text-lg border rounded px-2 md:px-6 py-1 md:py-2 my-1 md:my-2 text-white"
            @click.prevent="category = 'all'"
          >
            ALL
          </button>
          <button
            class="custom-button--filter text-sm md:text-lg border rounded px-2 md:px-6 py-1 md:py-2 my-1 md:my-2 text-white"
            @click.prevent="category = 'package'"
          >
            Package
          </button>
          <button
            class="custom-button--filter text-sm md:text-lg border rounded px-2 md:px-6 py-1 md:py-2 my-1 md:my-2 text-white"
            @click.prevent="category = 'print'"
          >
            Print
          </button>
          <button
            class="custom-button--filter text-sm md:text-lg border rounded px-2 md:px-6 py-1 md:py-2 my-1 md:my-2 text-white"
            @click.prevent="category = 'illustration'"
          >
            Illustration
          </button>
          <button
            class="custom-button--filter text-sm md:text-lg border rounded px-2 md:px-6 py-1 md:py-2 my-1 md:my-2 text-white"
            @click.prevent="category = 'drawing'"
          >
            Drawing
          </button>
          <button
            class="custom-button--filter text-sm md:text-lg border rounded px-2 md:px-6 py-1 md:py-2 my-1 md:my-2 text-white"
            @click.prevent="category = 'photography'"
          >
            Photography
          </button>
          <button
            class="custom-button--filter text-sm md:text-lg border rounded px-2 md:px-6 py-1 md:py-2 my-1 md:my-2 text-white"
            @click.prevent="category = 'logo'"
          >
            Logo
          </button>

          <button
            class="custom-button--filter text-sm md:text-lg border rounded px-2 md:px-6 py-1 md:py-2 my-1 md:my-2 text-white"
            @click.prevent="category = 'others'"
          >
            Others
          </button>
        </div>
      </div>
    </div>

    <div class="col-start-2 col-end-4">
      <div
        class="anim-fade-y grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-12 gap-4 place-content-center"
        style=""
        v-if="filteredLists.length"
      >
        <div
          class="grid auto-cols-auto"
          v-for="item in filteredLists"
          v-bind:key="item.id"
        >
          <lazy-portfolio-list :item="item" @openModal="openModal(item)" />
        </div>
      </div>
    </div>
    <lazy-portfolio-modal
      v-if="modalVisible"
      @close="modalVisible = false"
      :data="modalData"
    />
  </div>
</template>

<script>
// import PortfolioModal from "@/components/PortfolioModal.vue";

export default {
  // components: {
  //   PortfolioModal,
  // },
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      const tl = gsap.timeline();
      tl.fromTo(
        "#header, .anim-nav",
        { opacity: 0, y: -10 },
        {
          duration: 1,
          stagger: 0.2,
          y: 0,
          opacity: 1,
          ease: "power2.out",
        }
      ).fromTo(
        ".anim-fade-y",
        {
          opacity: 0,
          y: -5,
        },
        {
          duration: 1.2,
          stagger: 0.5,
          y: 0,
          opacity: 1,
          ease: "slowmo.out",
        },
        "-=1"
      );
    },
  },
  data() {
    return {
      // 포트폴리오 진입 시의 기본 카테고리
      category: this.$route.query.category,
      categoryList: [
        "package",
        "illustration",
        "drawing",
        "photography",
        "logo",
        "print",
        "others",
      ],
      modalVisible: false,
      modalData: null,

      // 그림의 리스트. 대충 1개당 1오브젝트 집어넣으면 됨. id는 unique 값으로 넣어야 좋을 거 같음
      // 현재 존재하는 카테고리: package, illustration, drawing, photography, others  ** draw는 illustration, web은 others, info는 print
      lists: this.$store.state.portfolio.list, // store/portfolio.js
    };
  },
  computed: {
    filteredLists: function () {
      if (this.categoryList.includes(this.category)) {
        let categoryLists = [];

        // foreach안에서 this가 작동 안하기 때문에 중간변수 that 추가
        let that = this;
        this.lists.forEach(function (item) {
          if (item.category === that.category) {
            categoryLists.push(item);
          }
        });
        return categoryLists;
      } else {
        return this.lists;
      }
    },
  },
  methods: {
    openModal(data) {
      this.modalData = data;
      this.modalVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-button--filter {
  @apply outline-none;
  color: $brand-black-color;
  background: white;
  font-weight: bold;
  &:focus,
  &:active {
    background: $brand-lightgreen-color;
    color: $brand-green-textcolor;
    border-color: $brand-green-color;
  }
}
.slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  background: $brand-pink-color;
  z-index: -1;
}
</style>
