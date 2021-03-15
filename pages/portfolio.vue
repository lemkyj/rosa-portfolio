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
        class="text-lg border border-green-300 bg-green-500 hover:bg-green-300 rounded px-6 py-2 my-2 text-white"
        @click.prevent="category = 'print'"
      >
        Print
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
        :src="require(`~/assets/img/${item.src}`)"
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
      category: this.$route.query.category,
      categoryList: ['package', 'illustration', 'drawing', 'photography', 'print', 'others'],
      modalVisible: false,
      modalData: null,

      // 그림의 리스트. 대충 1개당 1오브젝트 집어넣으면 됨. id는 unique 값으로 넣어야 좋을 거 같음
      // 현재 존재하는 카테고리: package, illustration, drawing, photography, others  ** draw는 illustration, web은 others, info는 print
      lists: [
        { id: 'package_001', src: 'img-package/boxdesign.png', category: 'package' },
        { id: 'package_002', src: 'img-package/cafe_menu_mockup.JPG', category: 'package' },
        { id: 'package_003', src: 'img-package/cafesign.jpg', category: 'package' },
        { id: 'package_004', src: 'img-package/CannibisGummies_back.png', category: 'package' },
        { id: 'package_005', src: 'img-package/CannibisGummies_dieline.jpg', category: 'package' },
        { id: 'package_006', src: 'img-package/CannibisGummies_front.png', category: 'package' },
        { id: 'package_007', src: 'img-package/CannibisGummies_mockup.jpg', category: 'package' },
        { id: 'package_008', src: 'img-package/coffbag.jpg', category: 'package' },
        { id: 'package_009', src: 'img-package/coffee_MockUp.jpg', category: 'package' },
        { id: 'package_010', src: 'img-package/giftbox_mockup.png', category: 'package' },
        { id: 'package_011', src: 'img-package/giftbox1.jpg', category: 'package' },
        { id: 'package_012', src: 'img-package/giftbox2.jpg', category: 'package' },
        { id: 'package_013', src: 'img-package/giftbox3.jpg', category: 'package' },
        { id: 'package_014', src: 'img-package/hotsauce_label1.jpg', category: 'package' },
        { id: 'package_015', src: 'img-package/hotsauce_label2.jpg', category: 'package' },
        { id: 'package_016', src: 'img-package/hotsauce_mockup.png', category: 'package' },
        { id: 'package_017', src: 'img-package/hotsaucebottle2.png', category: 'package' },
        { id: 'package_018', src: 'img-package/hotsaucebox-01.png', category: 'package' },
        { id: 'package_019', src: 'img-package/hotsaucebox-02.png', category: 'package' },
        { id: 'package_020', src: 'img-package/hotsaucebox-03.png', category: 'package' },
        { id: 'package_021', src: 'img-package/menu1.jpg', category: 'package' },
        { id: 'package_022', src: 'img-package/menu1-1.jpg', category: 'package' },
        { id: 'package_023', src: 'img-package/menu1-2.jpg', category: 'package' },
        { id: 'package_024', src: 'img-package/menu1-3.jpg', category: 'package' },
        { id: 'package_025', src: 'img-package/menu1-4.jpg', category: 'package' },
        { id: 'package_026', src: 'img-package/menu2-01.jpg', category: 'package' },
        { id: 'package_027', src: 'img-package/menu2-02.jpg', category: 'package' },
        { id: 'package_028', src: 'img-package/winebottle_box_blk.png', category: 'package' },
        { id: 'package_029', src: 'img-package/winebottle_mockup.jpg', category: 'package' },
        { id: 'package_030', src: 'img-package/winebox1.jpg', category: 'package' },
        { id: 'package_031', src: 'img-package/winebox3.jpg', category: 'package' },
        { id: 'package_032', src: 'img-package/winebox4.jpg', category: 'package' },
        { id: 'package_033', src: 'img-package/winemockup.jpg', category: 'package' },
        { id: 'package_034', src: 'img-package/wineset.jpg', category: 'package' },
        { id: 'illustration_001', src: 'img-illust/bear1.png', category: 'illustration' },
        { id: 'illustration_002', src: 'img-illust/buffalo1.png', category: 'illustration' },
        { id: 'illustration_003', src: 'img-illust/cow_2021.png', category: 'illustration' },
        { id: 'illustration_004', src: 'img-illust/deer.png', category: 'illustration' },
        { id: 'illustration_005', src: 'img-illust/eagle.png', category: 'illustration' },
        { id: 'illustration_006', src: 'img-illust/eagle2.png', category: 'illustration' },
        { id: 'illustration_007', src: 'img-illust/golila1.png', category: 'illustration' },
        { id: 'illustration_008', src: 'img-illust/indian6.png', category: 'illustration' },
        { id: 'illustration_009', src: 'img-illust/retro_poster2.jpg', category: 'illustration' },
        { id: 'illustration_010', src: 'img-illust/self_card.png', category: 'illustration' },
        { id: 'illustration_011', src: 'img-illust/snowboard.png', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/20170321_004527.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/20170327_211538.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/20170329_115306.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/20170329_124532.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/20171005_030816.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/20180114_122748.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/20180213_181123.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/20180220_215840.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/bg.JPG', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/bg3.JPG', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/cactus.JPG', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/colour_pencil_drawing.JPG', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/girl_pencil.JPG', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/labyrinth_colour_pencil.JPG', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/pencil_drawing.JPG', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/rosaself.jpg', category: 'illustration' },
        { id: 'draw_001', src: 'img-draw/self_potrait.jpg', category: 'illustration' },
      ]
    }
  },
  computed: {
    filteredLists: function() {
      if (this.categoryList.includes(this.category)){
        let categoryLists = [];
        
        // foreach안에서 this가 작동 안하기 때문에 중간변수 that 추가
        let that = this;
        this.lists.forEach(function(item) {
          if (item.category === that.category){
            categoryLists.push(item);
          }
        });
        return categoryLists;
      } else {
        return this.lists;
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
