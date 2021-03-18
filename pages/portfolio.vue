<template>
  <div class="grid w-full" style="grid-template-columns: 10% 1fr 1fr 10%">
    <div
      class="anim-fade-y z-10 flex sticky top-0 overflow-x-scroll lg:overflow-hidden shadow-lg justify-start lg:justify-center col-span-full lg:col-start-1 lg:col-end-5 border bg-white p-4 space-x-4"
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

    <div class="col-start-2 col-end-4">
      <div
        class="anim-fade-y grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-12 auto-rows-auto gap-4 place-content-center"
        style=""
        v-if="filteredLists.length"
      >
        <div
          class="grid auto-cols-auto"
          v-for="item in filteredLists"
          v-bind:key="item.id"
        >
          <img
            :src="require(`~/assets/img/${item.src}`)"
            @click="openModal(item)"
            :alt="item.id"
            class="cursor-pointer flex self-center object-cover object-center mx-auto overscroll-auto rounded-md m-4 shadow-lg border bg-gray-100"
          />
        </div>

        <!-- <div class="">
        <img src="https://via.placeholder.com/350" alt="" />
      </div> -->
      </div>
    </div>
    <portfolio-modal
      v-if="modalVisible"
      @close="modalVisible = false"
      :data="modalData"
    />
  </div>
</template>

<script>
import PortfolioModal from "@/components/PortfolioModal.vue";

export default {
  components: {
    PortfolioModal,
  },
  transition: {
    mode: "out-in",
    css: false,
    enter(el, done) {
      const tl = gsap.timeline();
      tl.to(".slider", {
        duration: 0.3,
        yPercent: 100,
        delay: 1,
        ease: "power2.out",
      });
      tl.to(
        ".slider",
        {
          duration: 0.3,
          yPercent: 100,
          delay: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      )
        .set(".slider")
        // .to()
        // tl.fromTo(
        //   ".slider",
        //   { yPercent: 0 },
        //   {
        //     duration: 1,
        //     yPercent: 201,
        //     ease: "power4.out",
        //   },
        //   1
        // )
        .fromTo(
          "#header, .anim-nav",
          { opacity: 0, x: -10 },
          {
            duration: 1,
            stagger: 0.2,
            x: 0,
            opacity: 1,
            ease: "power2.out",
          }
        )
        .fromTo(
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
      lists: [
        {
          id: "package_001",
          src: "img-package/boxdesign.png",
          category: "package",
        },
        {
          id: "package_002",
          src: "img-package/cafe_menu_mockup.JPG",
          category: "package",
        },
        {
          id: "package_003",
          src: "img-package/cafesign.jpg",
          category: "package",
        },
        {
          id: "package_004",
          src: "img-package/CannibisGummies_back.png",
          category: "package",
        },
        {
          id: "package_005",
          src: "img-package/CannibisGummies_dieline.jpg",
          category: "package",
        },
        {
          id: "package_006",
          src: "img-package/CannibisGummies_front.png",
          category: "package",
        },
        {
          id: "package_007",
          src: "img-package/CannibisGummies_mockup.jpg",
          category: "package",
        },
        {
          id: "package_008",
          src: "img-package/coffbag.jpg",
          category: "package",
        },
        {
          id: "package_009",
          src: "img-package/coffee_MockUp.jpg",
          category: "package",
        },
        {
          id: "package_010",
          src: "img-package/giftbox_mockup.png",
          category: "package",
        },
        {
          id: "package_011",
          src: "img-package/giftbox1.jpg",
          category: "package",
        },
        {
          id: "package_012",
          src: "img-package/giftbox2.jpg",
          category: "package",
        },
        {
          id: "package_013",
          src: "img-package/giftbox3.jpg",
          category: "package",
        },
        {
          id: "package_014",
          src: "img-package/hotsauce_label1.jpg",
          category: "package",
        },
        {
          id: "package_015",
          src: "img-package/hotsauce_label2.jpg",
          category: "package",
        },
        {
          id: "package_016",
          src: "img-package/hotsauce_mockup.png",
          category: "package",
        },
        {
          id: "package_017",
          src: "img-package/hotsaucebottle2.png",
          category: "package",
        },
        {
          id: "package_018",
          src: "img-package/hotsaucebox-01.png",
          category: "package",
        },
        {
          id: "package_019",
          src: "img-package/hotsaucebox-02.png",
          category: "package",
        },
        {
          id: "package_020",
          src: "img-package/hotsaucebox-03.png",
          category: "package",
        },
        {
          id: "package_021",
          src: "img-package/menu1.jpg",
          category: "package",
        },
        {
          id: "package_022",
          src: "img-package/menu1-1.jpg",
          category: "package",
        },
        {
          id: "package_023",
          src: "img-package/menu1-2.jpg",
          category: "package",
        },
        {
          id: "package_024",
          src: "img-package/menu1-3.jpg",
          category: "package",
        },
        {
          id: "package_025",
          src: "img-package/menu1-4.jpg",
          category: "package",
        },
        {
          id: "package_026",
          src: "img-package/menu2-01.jpg",
          category: "package",
        },
        {
          id: "package_027",
          src: "img-package/menu2-02.jpg",
          category: "package",
        },
        {
          id: "package_028",
          src: "img-package/winebottle_box_blk.png",
          category: "package",
        },
        {
          id: "package_029",
          src: "img-package/winebottle_mockup.jpg",
          category: "package",
        },
        {
          id: "package_030",
          src: "img-package/winebox1.jpg",
          category: "package",
        },
        {
          id: "package_031",
          src: "img-package/winebox3.jpg",
          category: "package",
        },
        {
          id: "package_032",
          src: "img-package/winebox4.jpg",
          category: "package",
        },
        {
          id: "package_033",
          src: "img-package/winemockup.jpg",
          category: "package",
        },
        {
          id: "package_034",
          src: "img-package/wineset.jpg",
          category: "package",
        },
        {
          id: "illust_001",
          src: "img-illust/bear1.png",
          category: "illustration",
        },
        {
          id: "illust_002",
          src: "img-illust/buffalo1.png",
          category: "illustration",
        },
        {
          id: "illust_003",
          src: "img-illust/cow_2021.png",
          category: "illustration",
        },
        {
          id: "illust_004",
          src: "img-illust/deer.png",
          category: "illustration",
        },
        {
          id: "illust_005",
          src: "img-illust/eagle.png",
          category: "illustration",
        },
        {
          id: "illust_006",
          src: "img-illust/eagle2.png",
          category: "illustration",
        },
        {
          id: "illust_007",
          src: "img-illust/golila1.png",
          category: "illustration",
        },
        {
          id: "illust_008",
          src: "img-illust/indian6.png",
          category: "illustration",
        },
        {
          id: "illust_009",
          src: "img-illust/retro_poster2.jpg",
          category: "illustration",
        },
        {
          id: "illust_010",
          src: "img-illust/self_card.png",
          category: "illustration",
        },
        {
          id: "illust_011",
          src: "img-illust/snowboard.png",
          category: "illustration",
        },
        {
          id: "logo_001",
          src: "img-logos/20181026_213204.jpg",
          category: "logo",
        },
        {
          id: "logo_002",
          src: "img-logos/20181109_091926.jpg",
          category: "logo",
        },
        { id: "logo_003", src: "img-logos/firehot_logo.jpg", category: "logo" },
        { id: "logo_004", src: "img-logos/logo.jpeg", category: "logo" },
        {
          id: "logo_005",
          src: "img-logos/logo_benefaction1.png",
          category: "logo",
        },
        {
          id: "logo_006",
          src: "img-logos/LOGO_CAFE_FINAL.jpg",
          category: "logo",
        },
        { id: "logo_007", src: "img-logos/mamapure.png", category: "logo" },
        { id: "logo_008", src: "img-logos/musiclogo.jpg", category: "logo" },
        { id: "logo_009", src: "img-logos/puplelogo.png", category: "logo" },
        { id: "logo_010", src: "img-logos/resortlogo.png", category: "logo" },
        { id: "logo_011", src: "img-logos/rosalee1.jpg", category: "logo" },
        { id: "logo_012", src: "img-logos/winelogo.png", category: "logo" },
        {
          id: "draw_001",
          src: "img-draw/20170321_004527.jpg",
          category: "drawing",
        },
        {
          id: "draw_002",
          src: "img-draw/20170327_211538.jpg",
          category: "drawing",
        },
        {
          id: "draw_003",
          src: "img-draw/20170329_115306.jpg",
          category: "drawing",
        },
        {
          id: "draw_004",
          src: "img-draw/20170329_124532.jpg",
          category: "drawing",
        },
        {
          id: "draw_005",
          src: "img-draw/20171005_030816.jpg",
          category: "drawing",
        },
        {
          id: "draw_006",
          src: "img-draw/20180114_122748.jpg",
          category: "drawing",
        },
        {
          id: "draw_007",
          src: "img-draw/20180213_181123.jpg",
          category: "drawing",
        },
        {
          id: "draw_008",
          src: "img-draw/20180220_215840.jpg",
          category: "drawing",
        },
        { id: "draw_009", src: "img-draw/bg.JPG", category: "drawing" },
        { id: "draw_010", src: "img-draw/bg3.JPG", category: "drawing" },
        { id: "draw_011", src: "img-draw/cactus.JPG", category: "drawing" },
        {
          id: "draw_012",
          src: "img-draw/colour_pencil_drawing.JPG",
          category: "drawing",
        },
        {
          id: "draw_013",
          src: "img-draw/girl_pencil.JPG",
          category: "drawing",
        },
        {
          id: "draw_014",
          src: "img-draw/labyrinth_colour_pencil.JPG",
          category: "drawing",
        },
        {
          id: "draw_015",
          src: "img-draw/pencil_drawing.JPG",
          category: "drawing",
        },
        { id: "draw_016", src: "img-draw/rosaself.jpg", category: "drawing" },
        {
          id: "draw_017",
          src: "img-draw/self_potrait.jpg",
          category: "drawing",
        },
        {
          id: "photos_001",
          src: "img-photos/photo-autumn-sm.png",
          category: "photography",
        },
        {
          id: "photos_002",
          src: "img-photos/photo-building-sm.png",
          category: "photography",
        },
        {
          id: "photos_003",
          src: "img-photos/photo-desk-sm.png",
          category: "photography",
        },
        {
          id: "photos_004",
          src: "img-photos/photo-dog-sm.png",
          category: "photography",
        },
        {
          id: "photos_005",
          src: "img-photos/photo-fall-sm.png",
          category: "photography",
        },
        {
          id: "photos_006",
          src: "img-photos/photo-horse-sm.png",
          category: "photography",
        },
        {
          id: "photos_007",
          src: "img-photos/photo-pond-sm.png",
          category: "photography",
        },
        {
          id: "photos_008",
          src: "img-photos/photo-river-sm.png",
          category: "photography",
        },
        {
          id: "photos_009",
          src: "img-photos/photo-sew-sm.png",
          category: "photography",
        },
        {
          id: "photos_010",
          src: "img-photos/photo-snow-sm.png",
          category: "photography",
        },
        {
          id: "print_001",
          src: "img-print/albumcover21.JPG",
          category: "print",
        },
        { id: "print_002", src: "img-print/book4.JPG", category: "print" },
        { id: "print_003", src: "img-print/book6.JPG", category: "print" },
        { id: "print_004", src: "img-print/brochure.JPG", category: "print" },
        {
          id: "print_005",
          src: "img-print/brochure_trifold.jpg",
          category: "print",
        },
        { id: "print_006", src: "img-print/brochure1.JPG", category: "print" },
        { id: "print_007", src: "img-print/brochure3.jpg", category: "print" },
        {
          id: "print_008",
          src: "img-print/cd_cover__box_mockup.jpg",
          category: "print",
        },
        {
          id: "print_009",
          src: "img-print/cd_cover__box_mockup1.jpg",
          category: "print",
        },
        { id: "print_010", src: "img-print/cookbook-2.JPG", category: "print" },
        { id: "print_011", src: "img-print/cookbook-3.JPG", category: "print" },
        { id: "print_012", src: "img-print/cookbook-4.JPG", category: "print" },
        { id: "print_013", src: "img-print/cookbook-5.JPG", category: "print" },
        { id: "print_014", src: "img-print/cookbook-6.JPG", category: "print" },
        { id: "print_015", src: "img-print/cookbook-7.JPG", category: "print" },
        { id: "print_016", src: "img-print/cookbook-8.JPG", category: "print" },
        { id: "print_017", src: "img-print/cookbook-9.JPG", category: "print" },
        {
          id: "print_018",
          src: "img-print/cookbook-10.JPG",
          category: "print",
        },
        {
          id: "print_019",
          src: "img-print/cookbook-11-back.JPG",
          category: "print",
        },
        {
          id: "print_020",
          src: "img-print/designedge_content3.jpg",
          category: "print",
        },
        {
          id: "print_021",
          src: "img-print/designu_book2.JPG",
          category: "print",
        },
        {
          id: "print_022",
          src: "img-print/grandfathers_teaching3.jpg",
          category: "print",
        },
        {
          id: "print_023",
          src: "img-print/grandfathers_teaching4.jpg",
          category: "print",
        },
        {
          id: "print_024",
          src: "img-print/grandfathers_teaching5.jpg",
          category: "print",
        },
        {
          id: "print_025",
          src: "img-print/grandfathers_teaching6.jpg",
          category: "print",
        },
        {
          id: "print_026",
          src: "img-print/grandfathers_teaching7.jpg",
          category: "print",
        },
        {
          id: "print_027",
          src: "img-print/grandfathers_teaching8.jpg",
          category: "print",
        },
        {
          id: "print_028",
          src: "img-print/grandfathers_teaching9.jpg",
          category: "print",
        },
        {
          id: "print_029",
          src: "img-print/grandfathers_teaching10.jpg",
          category: "print",
        },
        {
          id: "print_030",
          src: "img-print/grandfathers_teaching11.jpg",
          category: "print",
        },
        {
          id: "print_031",
          src: "img-print/IMG-20181104-f.jpg",
          category: "print",
        },
        {
          id: "print_032",
          src: "img-print/laotzubook5.JPG",
          category: "print",
        },
        { id: "print_033", src: "img-print/lavi.jpg", category: "print" },
        {
          id: "print_034",
          src: "img-print/magazine_design022.jpg",
          category: "print",
        },
        {
          id: "print_035",
          src: "img-print/magazinecover03.jpg",
          category: "print",
        },
        {
          id: "print_036",
          src: "img-print/moremode_mockup.JPG",
          category: "print",
        },
        {
          id: "print_037",
          src: "img-print/moremode_mockup2.JPG",
          category: "print",
        },
        {
          id: "print_038",
          src: "img-print/moremode_mockup2.png",
          category: "print",
        },
        { id: "print_039", src: "img-print/moremode3.jpg", category: "print" },
        { id: "print_040", src: "img-print/moremode4.jpg", category: "print" },
        {
          id: "print_041",
          src: "img-print/seven_grandfathers__teaching2.jpg",
          category: "print",
        },
        {
          id: "print_042",
          src: "img-print/seven_grandfathers__teaching3.jpg",
          category: "print",
        },
        {
          id: "print_043",
          src: "img-print/seven_grandfathers__teaching4.jpg",
          category: "print",
        },
        {
          id: "print_044",
          src: "img-print/seven_grandfathers__teaching5.jpg",
          category: "print",
        },
        {
          id: "print_045",
          src: "img-print/seven_grandfathers__teaching6.jpg",
          category: "print",
        },
        {
          id: "print_046",
          src: "img-print/seven_grandfathers__teaching7.jpg",
          category: "print",
        },
        {
          id: "print_047",
          src: "img-print/seven_grandfathers__teaching8.jpg",
          category: "print",
        },
        {
          id: "print_048",
          src: "img-print/seven_grandfathers__teaching9.jpg",
          category: "print",
        },
        {
          id: "print_049",
          src: "img-print/seven_grandfathers__teaching10.jpg",
          category: "print",
        },
        {
          id: "print_050",
          src: "img-print/seven_grandfathers__teaching11.jpg",
          category: "print",
        },
        {
          id: "print_051",
          src: "img-print/seven_grandfathers__teaching12.jpg",
          category: "print",
        },
        { id: "info_001", src: "img-info/ad_davidtea1.jpg", category: "print" },
        {
          id: "info_002",
          src: "img-info/ad_hotsouced2.jpg",
          category: "print",
        },
        { id: "info_003", src: "img-info/info_graphic.jpg", category: "print" },
        { id: "info_004", src: "img-info/info-desisgn.JPG", category: "print" },
        { id: "info_005", src: "img-info/info-jazz.JPG", category: "print" },
        { id: "info_006", src: "img-info/mural-sas.jpg", category: "print" },
        { id: "info_007", src: "img-info/photowork.JPG", category: "print" },
        {
          id: "info_008",
          src: "img-info/poster_ballet1.jpg",
          category: "print",
        },
        {
          id: "info_009",
          src: "img-info/poster_ballet2.png",
          category: "print",
        },
        {
          id: "info_010",
          src: "img-info/poster_openhouse1.jpg",
          category: "print",
        },
        {
          id: "info_011",
          src: "img-info/saskatchewan-Mockup.jpg",
          category: "print",
        },
        {
          id: "others_001",
          src: "img-others/20170922_025124.jpg",
          category: "others",
        },
        {
          id: "others_002",
          src: "img-others/20170929_142000.jpg",
          category: "others",
        },
        {
          id: "others_003",
          src: "img-others/20171007.jpg",
          category: "others",
        },
        {
          id: "others_004",
          src: "img-others/20171007_233000.jpg",
          category: "others",
        },
        {
          id: "others_005",
          src: "img-others/20171019_072421.jpg",
          category: "others",
        },
        {
          id: "others_006",
          src: "img-others/20171222_184728.jpg",
          category: "others",
        },
        {
          id: "others_007",
          src: "img-others/20171222_184751.jpg",
          category: "others",
        },
        {
          id: "others_008",
          src: "img-others/20171222_184856.jpg",
          category: "others",
        },
        {
          id: "others_009",
          src: "img-others/20171222_184926.jpg",
          category: "others",
        },
        {
          id: "others_010",
          src: "img-others/20181008_231555.jpg",
          category: "others",
        },
        {
          id: "others_011",
          src: "img-others/20181008_231631.jpg",
          category: "others",
        },
        {
          id: "others_012",
          src: "img-others/20181008_231742.jpg",
          category: "others",
        },
        {
          id: "others_013",
          src: "img-others/20181008_231808.jpg",
          category: "others",
        },
        {
          id: "others_014",
          src: "img-others/20181010_090548.jpg",
          category: "others",
        },
        {
          id: "others_015",
          src: "img-others/20181012_015303.jpg",
          category: "others",
        },
        {
          id: "others_016",
          src: "img-others/20181013_044007.jpg",
          category: "others",
        },
        {
          id: "others_017",
          src: "img-others/20181022_075653.jpg",
          category: "others",
        },
        { id: "others_018", src: "img-others/thum1.JPG", category: "others" },
        { id: "others_019", src: "img-others/thum2.JPG", category: "others" },
        { id: "others_020", src: "img-others/thum3.JPG", category: "others" },
        { id: "others_021", src: "img-others/thum4.JPG", category: "others" },
        { id: "others_022", src: "img-others/thum5.JPG", category: "others" },
        {
          id: "others_023",
          src: "img-others/thumbnails_cookbook1.jpg",
          category: "others",
        },
        {
          id: "others_024",
          src: "img-others/thumbnails1.jpg",
          category: "others",
        },
        {
          id: "others_025",
          src: "img-others/thunms_cookbook2.jpg",
          category: "others",
        },
        { id: "others_026", src: "img-others/thunms2.jpg", category: "others" },
        {
          id: "web_001",
          src: "img-web/lee_project5a_tablet.jpg",
          category: "others",
        },
        { id: "web_002", src: "img-web/website.JPG", category: "others" },
      ],
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
