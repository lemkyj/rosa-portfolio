<template>
  <div
    v-if="loading"
    class="loading-page absolute inset-0 flex justify-center items-center z-50"
  >
    <div class="inline-block">
      <svg
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="240px"
        height="240px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
        xml:space="preserve"
      >
        <g transform="translate(50,40)">
          <text
            x="0"
            y="0"
            alignment-baseline="middle"
            font-size="12"
            stroke-width="0"
            stroke="#000"
            text-anchor="middle"
          ></text>
          <g>
            <rect x="-14" y="-10%" width="4" height="10" fill="#424242">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="-4" y="-10%" width="4" height="10" fill="#424242">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.2s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="5" y="-10%" width="4" height="10" fill="#424242">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.4s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1500);
    });
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped lang="scss">
#L9 {
  margin: 0 auto;
}
</style>