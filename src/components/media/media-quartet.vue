<template>
  <div class="media d-flex align-items-center ">
    <div class="row m-0 row-mx-md-reset ">
      <div class="col-xl-12 col-md-auto col-auto p-0 col-px-md-reset">
        <img
          :src="imgUrl"
          class="media-quartet-img rounded mr-2 mr-md-0 mb-xl-2 my-w-xl-100"
          alt=""
        />
      </div>
      <div
        class="col-xl-12 col-md-auto col-auto d-flex align-items-md-center p-0 col-px-md-reset"
      >
        <div class="media-body pl-1 pl-md-0">
          <div class="row mr-0 ml-0 mb-md-2">
            <div class="col-md-auto p-0">
              <div class="d-flex align-items-center">
                <h5 class="font-style-bold context-lg mb-0 mr-2">
                  {{ title }}
                </h5>
              </div>
            </div>
            <div class="col-md-auto p-0 mb-1">
              <span
                v-for="i in starRate"
                :key="'star_' + i"
                class="material-icons my-text-warning"
              >
                star_rate
              </span>
            </div>
          </div>
          <div class="row mr-0 ml-0 mb-2">
            <div class="col p-0">
              <div class="d-flex align-items-md-center">
                <span class="material-icons my-text-danger">
                  location_on
                </span>
                <p class="font-style-regular context-md mb-0">
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
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
