<template>
  <main>
    <section class="custom-section">
      <div class="custom-hero">
        <div class="custom-hero-img w-full h-full">
          <div class="flex items-end h-full">
            <div class="flex-initial flex-col">
              <div
                class="flex-initial inline-flex custom-wrapper-headline opacity-0 max-w-sm lg:max-w-lg"
              >
                <h1
                  class="custom-headline px-4 py-2 sm:px-8 sm:py-4 font-display text-6xl md:text-8xl lg:text-10xl"
                >
                  Rosa Lee
                </h1>
              </div>
              <div class="flex-initial custom-wrapper-subtitle opacity-0">
                <div
                  class="custom-subtitle px-4 py-2 sm:px-8 sm:py-4 md:px-2 md:py-4 text-2xl md:text-4xl lg:text-6xl font-display"
                >
                  DESIGN / ILLUSTRATION / PHOTOGRAPHY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 스크롤다운 인디케이터 -->
      <!-- <scroll-indicator /> -->
    </section>
    <!-- Spacer -->
    <div class="bg-transparent" style="height: 0vh"></div>
    <!-- Spacer end -->
    <section class="w-full h-screen bg-white anim-scroll-trigger">
      <!-- small: 1 column, tablet: 12 columns -->
      <div
        class="grid h-screen grid-cols-1 md:grid-cols-12 grid-rows-12 md:grid-rows-6 grid-flow-col"
      >
        <!-- small: 1 column, tablet: 5 columns inside 12 columns -->
        <div class="md:col-span-5">
          <button
            :aria-label="`${category.id} button`"
            v-for="category in categoryInfos"
            @click="toggleActive(category)"
            class="opacity-0 custom-category relative anim-fade-left border border-gray-100 row-span-1 w-full h-full text-right text-2xl sm:text-4xl md:text-6xl font-display"
            :key="category.id"
          >
            <div class="flex justify-end items-center w-full h-full">
              <div
                :class="[category.css, { active: checkActive(category.id) }]"
                class="custom-category--bg absolute w-full h-full bg-brand-lightgreen"
              ></div>
              <div
                class="custom-category--text z-10 mx-4 flex justify-end items-center"
              >
                <h2 class="">{{ category.name }}</h2>
                <svg
                  class="hidden anim-svg sm:flex ml-3 lg:mx-8 h-8 w-8 md:h-12 md:w-12"
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
        <!-- small: 1 column, tablet: 7 columns inside 12 columns -->
        <div class="col-span-1 md:col-span-7 row-span-full overflow-hidden">
          <div class="md:mt-8 md:ml-8 lg:ml-48 lg:mt-12">
            <div class="anim-default grid h-screen row-span-full">
              <div class="col-span-12 row-span-4">
                <h3 class="anim-fade-right font-display text-4xl mb-4">
                  {{ currentObj.name }}
                </h3>
                <ul
                  class="anim-fade-right inline-flex space-x-4 mb-4 font-bold"
                >
                  <li
                    class="anim-fade-right px-4 py-2 rounded-full bg-brand-lightgreen text-sm whitespace-nowrap"
                    v-for="tag in currentObj.tag"
                    :key="tag"
                  >
                    {{ "# " + tag }}
                  </li>
                </ul>
                <p
                  class="anim-fade-right line-clamp-4 md:line-clamp-none text-lg max-w-prose"
                >
                  {{ currentObj.contents }}
                </p>
                <nuxt-link
                  :to="'/portfolio?category=' + currentCategory"
                  class="anim-fade-right custom-link-btn my-4 font-bold text-base md:text-lg text-brand-green flex items-center transform translate-x-2 hover:translate-x-4 duration-75 ease-out"
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

              <div class="col-span-12 row-span-8">
                <div class="relative img-preview anim-fade-right">
                  <img
                    class="custom-category-img"
                    :src="require(`~/assets/img/${currentObj.img}`)"
                    :alt="`the image of ${currentObj.id}`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ScrollIndicator from "../components/ScrollIndicator.vue";
export default {
  components: { ScrollIndicator },
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
          "-=1.8"
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
          "-=2"
        );
    },
    leave(el, done) {
      const tl = gsap.timeline();
      tl.to(".anim-fade-left, .custom-category, .active", {
        duration: 0.8,
        stagger: 0.1,
        x: "-=10",
        opacity: 0,
        ease: "power4.in",
      })
        .to(
          ".anim-fade-right",
          {
            duration: 0.8,
            stagger: 0.1,
            x: "+=10",
            opacity: 0,
            ease: "power4.in",
          },
          "<"
        )
        .to(
          ".custom-wrapper-headline, .custom-wrapper-subtitle",
          { duration: 0.5, x: -20, opacity: 0, ease: "power4.in" },
          "<"
        )
        .to(
          ".custom-headline, .custom-subtitle",
          {
            stagger: 0.1,
            duration: 0.3,
            opacity: 0,
            ease: "power4.in",
          },
          "<"
        )
        .to(
          ".custom-hero",
          { duration: 0.5, height: "0%", ease: "power4.in" },
          "-=0.7"
        )
        .to(
          "#header",
          {
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "slowmo.out",
          },
          "-=0.3"
        )
        .to(
          ".slider",
          {
            duration: 0.8,
            x: "-100%",
            ease: "power4.in",
            onComplete: () =>
              setInterval(function () {
                done();
              }, 500),
          },
          1
        );
    },
  },
  data() {
    return {
      currentCategory: "package",
      currentObj: {
        id: "",
        name: "",
        tag: [],
        contents: ``,
        img: "img-index/preview-package.png",
        css: "packagePos",
      },
      isActive: false,
      categoryInfos: this.$store.state.main.list, // store/main.js
    };
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
    categoryActive() {
      console.log(this);
    },
  },
  mounted() {
    this.toggleActive(this.categoryInfos.package);
    this.checkActive(this.currentCategory);

    ScrollTrigger.matchMedia({
      // Desktop Start
      "(min-width:800px)": function () {
        let tl = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".anim-scroll-trigger",
            toggleActions: "play none none none",
            // pin: true, // pin the trigger element while active
            start: "top center", // 트리거에서 20px위 스크롤 시작, 스크롤러 viewport 젤 위에서 80% 밑으로
            // end: "0", // end after scrolling 500px beyond the start
            // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
          },
        });
        // add animations and labels to the timeline
        tl.to(".custom-category", {
          duration: 1.5,
          opacity: 1,
          ease: "power2.out",
        })
          .fromTo(
            ".custom-category--bg, .active",
            {
              xPercent: -100,
            },
            {
              duration: 0.8,
              stagger: 0.1,
              xPercent: 0,
              ease: "back.out",
            },
            "<"
          )
          .fromTo(
            ".anim-fade-right",
            {
              opacity: 0,
              xPercent: 2,
            },
            {
              duration: 1.2,
              opacity: 1,
              xPercent: 0,
              ease: "slowMo.out",
            }
          );
      },
      // ----- desktop end //
    });
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
    .custom-hero-img {
      background: url("~@/assets/mountain.jpg");
      width: 100%;
      height: 100%;
      position: relative;
      background-size: cover;
      background-position: center;
      // background-position: left bottom;
      @screen sm {
      }

      .custom-wrapper-headline {
        color: black;
        mix-blend-mode: screen;
        background-color: #fbe3e8;

        .custom-headline {
          position: relative;
          bottom: 0%;
          font-family: "Bebas Neue", cursive;
        }
      }
      .custom-wrapper-subtitle {
        bottom: 0%;
        left: 0%;
        color: black;
        mix-blend-mode: screen;
        background-color: #fbe3e8;
      }
    }
  }
}

.active {
  background: $brand-green-color;
  color: $brand-black-color;
  transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  transform: translateX(0%) !important;
  will-change: transform, opacity;
}

.custom-button--category {
  @apply focus:outline-none;
}

.img-preview {
  transform: translate(45%, 0%);
  overflow: hidden;
}

.packagePos {
  transform: translateX(-10%);
}

.printPos {
  transform: translateX(-16%);
}

.illustPos {
  transform: translateX(-23%);
}

.photoPos {
  transform: translateX(-32%);
}
.logoPos {
  transform: translateX(-21%);
}
.otherPos {
  transform: translateX(-18%);
}
</style>

