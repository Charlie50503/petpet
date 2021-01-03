<template>
  <div>
    <img
      class="view-img shadow rounded-lg w-100 mb-2"
      :src="viewImg"
      alt=""
      v-animate-css.click="'tada'"
    />
    <div class="row pt-xl-1 m-0">
      <div
        class="col-3 col-md-auto pl-0"
        :class="imgItemActiveClass(item.idx)"
        v-for="item in imgList"
        :key="'img_item__' + item.idx"
      >
        <img
          class="item-img rounded-lg"
          :src="item.url"
          alt=""
          v-animate-css.hover="'pulse'"
          @click="viewImg = item.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imgCarousel",
  data() {
    return {
      viewImg:
        "https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-3.jpeg",
      imgList: [
        {
          idx: 1,
          url:
            "https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-3.jpeg",
        },
        {
          idx: 2,
          url:
            "https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-5.jpeg",
        },
        {
          idx: 3,
          url:
            "https://hexschool.github.io/webLayoutTraining1st/petpet-week8/detail-1.jpeg",
        },
        {
          idx: 4,
          url:
            "https://hexschool.github.io/webLayoutTraining1st/petpet-week8/detail2.jpeg",
        },
      ],
    };
  },
  methods: {
    imgItemActiveClass(idx) {
      return (this.imgList.length === idx ? "pr-0" : "pr-1 pr-md-2")
    },
  },
};
</script>

<style></style>
animate__pulse