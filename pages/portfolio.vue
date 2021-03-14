<template>
  <div class="anim-stagger" style="grid-template-columns: 10% 1fr 1fr 10%">
    <div
      class="flex sticky top-0 shadow-lg justify-center col-start-2 col-end-3 border bg-white p-4 space-x-4"
    >
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
        @click.prevent="category = 'all'"
      >
        ALL
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
        @click.prevent="category = 'package'"
      >
        Package
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
        @click.prevent="category = 'illustration'"
      >
        Illustration
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
        @click.prevent="category = 'drawing'"
      >
        Drawing
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
        @click.prevent="category = 'photography'"
      >
        Photography
      </button>
      <button
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 focus:outline-none focus:ring focus:ring-pink-200 rounded px-6 py-2 my-2 text-white"
        @click.prevent="category = 'others'"
      >
        Others
      </button>
    </div>
    <div
      class="grid grid-cols-4 grid-rows-2 gap-2 border-2 border-gray-600"
      v-if="filteredLists.length"
    >
      <div v-for="item in filteredLists" v-bind:key="item.id">
        <img 
        :src="item.src" 
        @click="openModal(item)"
        alt="" 
        />
      </div>
      
      <portfolio-modal 
          v-if="modalVisible" 
          @close="modalVisible = false" 
          :data="modalData"
      />
      <!-- <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script>
import PortfolioModal from '@/components/PortfolioModal.vue';


export default {
  components: {
    PortfolioModal,
  },
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
  data() {
    return {
      // 포트폴리오 진입 시의 기본 카테고리
      category: 'all',
      modalVisible: false,
      modalData: null,

      // 그림의 리스트. 대충 1개당 1오브젝트 집어넣으면 됨. id는 unique 값으로 넣어야 좋을 거 같음
      // 현재 존재하는 카테고리: package, illustration, drawing, photography, others
      lists: [
        {
          id: 'package_1',
          src: 'https://via.placeholder.com/350',
          category: 'package',
        },
        {
          id: 'package_2',
          src: 'https://via.placeholder.com/350',
          category: 'package',
        },
        {
          id: 'package_3',
          src: 'https://via.placeholder.com/350',
          category: 'package',
        },
        {
          id: 'package_4',
          src: 'https://via.placeholder.com/350',
          category: 'package',
        },
        {
          id: 'package_5',
          src: 'https://via.placeholder.com/350',
          category: 'package',
        },
        {
          id: 'package_6',
          src: 'https://via.placeholder.com/350',
          category: 'package',
        },
        {
          id: 'package_7',
          src: 'https://via.placeholder.com/350',
          category: 'package',
        },
        {
          id: 'package_8',
          src: 'https://via.placeholder.com/350',
          category: 'package',
        },
        {
          id: 'illustration_1',
          src: 'https://via.placeholder.com/350',
          category: 'illustration',
        },
        {
          id: 'illustration_2',
          src: 'https://via.placeholder.com/350',
          category: 'illustration',
        },
        {
          id: 'illustration_3',
          src: 'https://via.placeholder.com/350',
          category: 'illustration',
        },
        {
          id: 'illustration_4',
          src: 'https://via.placeholder.com/350',
          category: 'illustration',
        },
        {
          id: 'illustration_5',
          src: 'https://via.placeholder.com/350',
          category: 'illustration',
        },
        {
          id: 'illustration_6',
          src: 'https://via.placeholder.com/350',
          category: 'illustration',
        },
        {
          id: 'illustration_7',
          src: 'https://via.placeholder.com/350',
          category: 'illustration',
        },
        {
          id: 'illustration_8',
          src: 'https://via.placeholder.com/350',
          category: 'illustration',
        },
        {
          id: 'drawing_1',
          src: 'https://via.placeholder.com/350',
          category: 'drawing',
        },
        {
          id: 'drawing_2',
          src: 'https://via.placeholder.com/350',
          category: 'drawing',
        },
        {
          id: 'drawing_3',
          src: 'https://via.placeholder.com/350',
          category: 'drawing',
        },
        {
          id: 'drawing_4',
          src: 'https://via.placeholder.com/350',
          category: 'drawing',
        },
        {
          id: 'drawing_5',
          src: 'https://via.placeholder.com/350',
          category: 'drawing',
        },
        {
          id: 'drawing_6',
          src: 'https://via.placeholder.com/350',
          category: 'drawing',
        },
        {
          id: 'drawing_7',
          src: 'https://via.placeholder.com/350',
          category: 'drawing',
        },
        {
          id: 'drawing_8',
          src: 'https://via.placeholder.com/350',
          category: 'drawing',
        },
        {
          id: 'photography_1',
          src: 'https://via.placeholder.com/350',
          category: 'photography',
        },
        {
          id: 'photography_2',
          src: 'https://via.placeholder.com/350',
          category: 'photography',
        },
        {
          id: 'photography_3',
          src: 'https://via.placeholder.com/350',
          category: 'photography',
        },
        {
          id: 'photography_4',
          src: 'https://via.placeholder.com/350',
          category: 'photography',
        },
        {
          id: 'photography_5',
          src: 'https://via.placeholder.com/350',
          category: 'photography',
        },
        {
          id: 'photography_6',
          src: 'https://via.placeholder.com/350',
          category: 'photography',
        },
        {
          id: 'photography_7',
          src: 'https://via.placeholder.com/350',
          category: 'photography',
        },
        {
          id: 'photography_8',
          src: 'https://via.placeholder.com/350',
          category: 'photography',
        },
        {
          id: 'others_1',
          src: 'https://via.placeholder.com/350',
          category: 'others',
        },
        {
          id: 'others_2',
          src: 'https://via.placeholder.com/350',
          category: 'others',
        },
        {
          id: 'others_3',
          src: 'https://via.placeholder.com/350',
          category: 'others',
        },
        {
          id: 'others_4',
          src: 'https://via.placeholder.com/350',
          category: 'others',
        },
        {
          id: 'others_5',
          src: 'https://via.placeholder.com/350',
          category: 'others',
        },
        {
          id: 'others_6',
          src: 'https://via.placeholder.com/350',
          category: 'others',
        },
        {
          id: 'others_7',
          src: 'https://via.placeholder.com/350',
          category: 'others',
        },
        {
          id: 'others_8',
          src: 'https://via.placeholder.com/350',
          category: 'others',
        },
      ]
    }
  },
  computed: {
    filteredLists: function() {
      if (this.category === 'all') {
        return this.lists;
      } else {
        let categoryLists = [];
        
        // foreach안에서 this가 작동 안하기 때문에 중간변수 that 추가
        let that = this;
        this.lists.forEach(function(item) {
          if (item.category === that.category){
            categoryLists.push(item);
          }
        });
        return categoryLists;
      }
    }
  },
  methods: {
    openModal(data) {
      this.modalData = data;
      this.modalVisible = true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
