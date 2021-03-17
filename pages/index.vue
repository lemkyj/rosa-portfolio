<template>
  <main>
    <section class="custom-section">
      <div class="custom-hero">
        <div class="custom-hero-img w-full h-full">
          <div class="custom-wrapper-headline opacity-0">
            <h1
              class="custom-headline absolute p-4 py-2 sm:px-8 sm:py-4 font-display text-5xl sm:text-7xl md:text-8xl lg:text-10xl"
            >
              Rosa Lee
            </h1>
          </div>
          <div class="custom-wrapper-subtitle opacity-0">
            <div
              class="custom-subtitle abosolute px-4 py-2 md:px-2 sm:px-8 sm:py-4 text-md sm:text-2xl md:text-4xl lg:text-6xl font-display"
            >
              DESIGN / ILLUSTRATION / PHOTOGRAPHY
            </div>
          </div>
        </div>
      </div>
      <!-- 스크롤다운 인디케이터 -->
      <!-- <scroll-indicator /> -->
    </section>
    <!-- Spacer -->
    <div
      class="anim-fade-y bg-brand-lightgreen my-12"
      style="height: 30vh"
    ></div>
    <!-- Spacer end -->
    <section class="h-screen w-full bg-white">
      <div
        class="h-screen grid grid-cols-1 md:grid-cols-12 grid-rows-12 md:grid-rows-6 grid-flow-col"
      >
        <div class="md:col-span-5">
          <button
            v-for="category in categoryInfos"
            class="custom-button--category row-span-1 anim-fade-y w-full h-full text-right text-2xl sm:text-4xl md:text-6xl font-display"
            :key="category.id"
          >
            <div
              class="flex justify-end items-center w-full h-full bg-brand-lightgreen"
              :class="{ active: checkActive(category.id) }"
              @click="toggleActive(category)"
            >
              <div class="anim-fade-y mx-4 flex justify-end items-center">
                <h2 class="">{{ category.name }}</h2>
                <svg
                  class="hidden sm:flex ml-3 lg:mx-8 h-8 w-8 md:h-12 md:w-12"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.5833 15.3334L40.25 23M40.25 23L32.5833 30.6667M40.25 23H5.75"
                    stroke="#ebf6f5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <!-- <div
          class="hidden md:grid md:col-span-1 md:row-start-1 md:row-end-7"
        ></div> -->
        <div
          class="col-span-7 row-span-full border-2 border-gray-900 overflow-hidden"
        >
          <div class="md:mx-12 md:mt-8 lg:mx-24 mt-12">
            <div class="grid grid-rows-2 justify-start">
              <div class="row-auto">
                <h3 class="anim-fade-y font-display text-4xl mb-4">
                  {{ currentObj.name }}
                </h3>
                <ul class="inline-flex mb-4 space-x-4 font-bold max-w-full">
                  <li
                    class="anim-fade-y truncate flex-1 px-2 py-2 bg-brand-lightgreen rounded-full text-sm overflow-hidden"
                    v-for="tag in currentObj.tag"
                    :key="tag"
                  >
                    {{ "# " + tag }}
                  </li>
                </ul>
                <p
                  class="anim-fade-y line-clamp-4 md:line-clamp-none text-lg max-w-prose"
                >
                  {{ currentObj.contents }}
                </p>
                <nuxt-link
                  :to="'/portfolio?category=' + currentCategory"
                  class="anim-fade-y my-4 font-bold text-base md:text-lg text-brand-green flex items-center transform translate-x-2 hover:translate-x-4 duration-75 ease-out"
                  >VIEW PROJECTS
                  <svg
                    class="ml-2 h-5 w-5"
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

              <div
                class="anim-fade-y row-start-6 row-end-7 border-2 border-green-300"
              >
                <div class="w-full border-2 border-red-300 overflow-hidden">
                  <img
                    class="custom-category-img max-w-full overflow-hidden"
                    :src="require(`~/assets/img/${currentObj.img}`)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="slider"></div>
  </main>
</template>

<script>
import ScrollIndicator from "../components/ScrollIndicator.vue";
export default {
  components: { ScrollIndicator },
  data() {
    return {
      currentCategory: "package",
      currentObj: {
        id: "",
        name: "",
        tag: [],
        contents: ``,
        img: "img-index/main-logo2.jpg",
      },
      isActive: false,
      categoryInfos: {
        package: {
          id: "package",
          name: "PACKAGE DESIGN",
          tag: ["Icomoclast Coffee", "Cannibis Gummies", "Cateaurora Wine"],
          contents: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet autem eius obcaecati illo, tempora quam natus architecto
              sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
              dicta est?`,
          img: "img-index/main-package.png",
        },
        print: {
          id: "print",
          name: "PRINT DESIGN",
          tag: ["1"],
          contents: `prints Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet autem eius obcaecati illo, tempora quam natus architecto
              sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
              dicta est?`,
          img: "img-index/main-print.png",
        },
        illustration: {
          id: "illustration",
          name: "ILLUSTRATION",
          tag: [4, 5, 6],
          contents: `illusts Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet autem eius obcaecati illo, tempora quam natus architecto
              sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
              dicta est?`,
          img: "img-index/main-illustration.png",
        },
        photography: {
          id: "photography",
          name: "PHOTOGRAPHY",
          tag: [7, 8, 9, 10],
          contents: `photos Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet autem eius obcaecati illo, tempora quam natus architecto
              sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
              dicta est?`,
          img: "img-index/main-photo1.png",
        },
        logo: {
          id: "logo",
          name: "LOGO DESIGN",
          tag: [11, 12, 13, 14, 15],
          contents: `logos Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet autem eius obcaecati illo, tempora quam natus architecto
              sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
              dicta est?`,
          img: "img-index/main-logo1.jpg",
        },
        others: {
          id: "others",
          name: "OTHERS",
          tag: [16, 17, 18, 19, 20],
          contents: `others Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet autem eius obcaecati illo, tempora quam natus architecto
              sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
              dicta est?`,
          img: "img-index/main-other1.jpg",
        },
      },
    };
  },
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
        .fromTo(
          "#header, .anim-nav",
          { opacity: 0, x: -10 },
          {
            duration: 1,
            stagger: 0.2,
            x: 0,
            opacity: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          ".custom-wrapper-headline, .custom-wrapper-subtitle",
          {
            duration: 0.8,
            opacity: 1,
            ease: "power2.in",
          },
          "-=0.8"
        )
        .fromTo(
          ".custom-subtitle, .custom-headline",
          {
            xPercent: -5,
          },
          {
            duration: 1.2,
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
      tl.to(".custom-headline, .custom-subtitle", {
        stagger: 0.1,
        duration: 0.3,
        opacity: 0,
        ease: "power4.in",
      })
        .to(
          ".custom-wrapper-headline, .custom-wrapper-subtitle",
          { duration: 0.5, x: -20, opacity: 0, ease: "power4.in" },
          "-=0.5"
        )
        .to(".custom-hero", { duration: 0.5, height: "0%", ease: "power4.in" })
        .to("#header", {
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "slowmo.out",
        })
        .to(
          ".slider",
          {
            duration: 0.8,
            y: "-100%",
            ease: "power4.in",
            onComplete: () =>
              setInterval(function () {
                done();
              }, 1000),
          },
          "-=0.5"
        );
    },
  },
  methods: {
    toggleActive(target) {
      this.currentCategory = target.id;
      this.currentObj = target;
    },
    checkActive(id) {
      if (this.currentCategory === id) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.toggleActive(this.categoryInfos.package);
    this.checkActive(this.currentCategory);
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
      width: 100%;
      height: 100%;
      position: static;
      // background-position: left bottom;
      @screen sm {
        background-size: cover;
        background-position: center;
      }

      .custom-wrapper-headline {
        bottom: 10vh;
        left: 0%;
        position: absolute;
        color: black;
        mix-blend-mode: screen;
        background-color: #fbe3e8;
        @screen sm {
          @apply px-2;
        }
        @screen md {
          @apply px-2;
        }
        @screen lg {
          left: 0%;
          @apply px-8;
        }
        .custom-headline {
          position: relative;
          bottom: 0%;
          font-family: "Bebas Neue", cursive;
        }
      }
      .custom-wrapper-subtitle {
        bottom: 13%;
        left: 4%;
        position: absolute;
        color: black;
        mix-blend-mode: screen;
        background-color: #fbe3e8;
        @screen sm {
          bottom: 9.5%;
        }
        @screen md {
          bottom: 8%;
        }
        @screen lg {
          bottom: 4%;
          left: 4%;
          @apply px-2;
        }
        .custom-subtitle {
          position: relative;
          bottom: 0%;
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
  height: 100%;
  background: #ebf6f5;
  z-index: -1;
}

.active {
  background: $brand-green-color;
  color: $brand-black-color;
}

.custom-button--category {
  @apply focus:outline-none;
}
</style>
