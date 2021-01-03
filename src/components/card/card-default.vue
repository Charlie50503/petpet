<template>
  <div class="card shadow h-100 border-0">
    <img :src="imgUrl" class="card-img-top store-img" alt="" />
    <div class="card-body bgc-secondary px-3 px-md-2.5 pt-2 pb-3 ">
      <h5 class="card-title context-md font-style-regular mb-1">
        {{ title }}
      </h5>
      <p class="mb-1">
        <span
          v-for="i in starRate"
          :key="'star_' + i"
          class="material-icons my-text-warning"
        >
          star_rate
        </span>
      </p>
      <p class="card-text font-style-regular context-sm mb-4">
        {{ content }}
      </p>
    </div>
    <div class="card-footer bgc-white p-0 border-0">
      <div class="d-flex">
        <a
          href="#"
          class="d-flex w-100 justify-content-center align-items-center text-decoration-none :hover-bg-sendorer :hover-color-dark font-style-regular my-text-primary pt-2.5 pb-2.5"
          @click="jumpToDetail()"
          >聯繫</a
        >
        <a
          href="#"
          class="d-flex w-100 justify-content-center align-items-center text-decoration-none :hover-bg-sendorer font-style-regular my-text-danger pt-2.5 pb-2.5"
          @click="jumpToDetail()"
        >
          預約</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    starRate: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: '',
    },
  },
  methods: {
    jumpToDetail() {
      this.$router.push('/Detail');
    },
  },
};
</script>

<style></style>
