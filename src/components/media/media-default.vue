<template>
  <div
    class="media d-flex align-items-center my-border-2 my-border-secondary rounded pl-3 pt-3 pb-3"
  >
    <img :src="imgUrl" class="mr-3" alt="" />
    <div class="media-body pl-1">
      <div class="row mb-2">
        <div class="col">
          <div class="d-flex align-items-center">
            <h5 class="font-style-regular context-md mb-0 mr-2">{{ title }}</h5>
            <span class="font-style-regular context-sm my-text-secondary">{{
              subtitle
            }}</span>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <span
            v-for="i in starRate"
            :key="'star_' + i"
            class="material-icons my-text-warning"
          >
            star_rate
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="font-style-regular context-md mb-0">
            {{ content }}
          </p>
        </div>
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
    subtitle: {
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
};
</script>

<style></style>
