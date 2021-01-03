<template>
  <div class="swiper-card">
    <div class="card-deck d-block d-md-none">
      <div class="card mb-2.5">
        <img
          src="@/assets/images/index-2.jpeg"
          class="card-img-top reserve-banner"
          alt=""
        />

        <div class="card-body position-relative">
          <img
            src="@/assets/images/person-1.png"
            alt=""
            class="ml-auto mr-auto reserve-person-photo"
          />
          <p
            class="font-style-medium context-lg reserve-title text-center mb-1"
          >
            Jamie
          </p>
          <p class="font-style-regular context-md text-center mb-2">
            寄宿、美容、寵物行為訓練
          </p>
          <div class="d-flex justify-content-center mt-1 mb-4">
            <button
              type="button"
              class="my-btn my-btn-danger font-style-regular rounded reserve-btn"
            >
              預約
            </button>
          </div>
          <div class="row">
            <div class="col">
              <p class=" font-style-regular text-center mb-2">
                獲得評價
              </p>
            </div>
            <div class="col">
              <p class=" font-style-regular text-center mb-2">
                已完成訂單
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p
                class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
              >
                198
                <small class="context-sm font-style-regular pl-1">則</small>
              </p>
            </div>
            <div class="col">
              <p
                class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
              >
                580
                <small class="context-sm font-style-regular pl-1">件</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-2.5">
        <img
          src="@/assets/images/index-3.jpeg"
          class="card-img-top reserve-banner"
          alt=""
        />
        <div class="card-body position-relative">
          <img
            src="@/assets/images/person-2.png"
            alt=""
            class="ml-auto mr-auto reserve-person-photo"
          />
          <p
            class="font-style-medium context-lg reserve-title text-center mb-1"
          >
            Eric
          </p>
          <p class="font-style-regular context-md text-center mb-2">
            寄宿、美容
          </p>
          <div class="d-flex justify-content-center mt-1 mb-4">
            <button
              type="button"
              class="my-btn my-btn-danger font-style-regular rounded reserve-btn"
            >
              預約
            </button>
          </div>
          <div class="row">
            <div class="col">
              <p class=" font-style-regular text-center mb-2">
                獲得評價
              </p>
            </div>
            <div class="col">
              <p class=" font-style-regular text-center mb-2">
                已完成訂單
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p
                class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
              >
                76
                <small class="context-sm font-style-regular pl-1">則</small>
              </p>
            </div>
            <div class="col">
              <p
                class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
              >
                208
                <small class="context-sm font-style-regular pl-1">件</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <img
          src="@/assets/images/index-4.jpeg"
          class="card-img-top reserve-banner"
          alt=""
        />

        <div class="card-body position-relative">
          <img
            src="@/assets/images/person-3.png"
            alt=""
            class="ml-auto mr-auto reserve-person-photo"
          />
          <p
            class="font-style-medium context-lg reserve-title text-center mb-1"
          >
            Yvonne
          </p>
          <p class="font-style-regular context-md text-center mb-2">
            寄宿、美容、寵物行為訓練
          </p>
          <div class="d-flex justify-content-center mt-1 mb-4">
            <button
              type="button"
              class="my-btn my-btn-danger font-style-regular rounded reserve-btn"
            >
              預約
            </button>
          </div>
          <div class="row">
            <div class="col">
              <p class=" font-style-regular text-center mb-2">
                獲得評價
              </p>
            </div>
            <div class="col">
              <p class=" font-style-regular text-center mb-2">
                已完成訂單
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p
                class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
              >
                52
                <small class="context-sm font-style-regular pl-1">則</small>
              </p>
            </div>
            <div class="col">
              <p
                class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
              >
                196
                <small class="context-sm font-style-regular pl-1">件</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-deck d-none d-md-block">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <div class="card">
            <img
              src="@/assets/images/index-2.jpeg"
              class="card-img-top reserve-banner"
              alt=""
            />

            <div class="card-body position-relative">
              <img
                src="@/assets/images/person-1.png"
                alt=""
                class="ml-auto mr-auto reserve-person-photo"
              />
              <p
                class="font-style-medium context-lg reserve-title text-center mb-1"
              >
                Jamie
              </p>
              <p class="font-style-regular context-md text-center mb-2">
                寄宿、美容、寵物行為訓練
              </p>
              <div class="d-flex justify-content-center mt-1 mb-4">
                <button
                  type="button"
                  class="my-btn my-btn-danger font-style-regular rounded reserve-btn"
                >
                  預約
                </button>
              </div>
              <div class="row">
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    獲得評價
                  </p>
                </div>
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    已完成訂單
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    198
                    <small class="context-sm font-style-regular pl-1">則</small>
                  </p>
                </div>
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    580
                    <small class="context-sm font-style-regular pl-1">件</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="@/assets/images/index-3.jpeg"
              class="card-img-top reserve-banner"
              alt=""
            />
            <div class="card-body position-relative">
              <img
                src="@/assets/images/person-2.png"
                alt=""
                class="ml-auto mr-auto reserve-person-photo"
              />
              <p
                class="font-style-medium context-lg reserve-title text-center mb-1"
              >
                Eric
              </p>
              <p class="font-style-regular context-md text-center mb-2">
                寄宿、美容
              </p>
              <div class="d-flex justify-content-center mt-1 mb-4">
                <button
                  type="button"
                  class="my-btn my-btn-danger font-style-regular rounded reserve-btn"
                >
                  預約
                </button>
              </div>
              <div class="row">
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    獲得評價
                  </p>
                </div>
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    已完成訂單
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    76
                    <small class="context-sm font-style-regular pl-1">則</small>
                  </p>
                </div>
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    208
                    <small class="context-sm font-style-regular pl-1">件</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="@/assets/images/index-4.jpeg"
              class="card-img-top reserve-banner"
              alt=""
            />

            <div class="card-body position-relative">
              <img
                src="@/assets/images/person-3.png"
                alt=""
                class="ml-auto mr-auto reserve-person-photo"
              />
              <p
                class="font-style-medium context-lg reserve-title text-center mb-1"
              >
                Yvonne
              </p>
              <p class="font-style-regular context-md text-center mb-2">
                寄宿、美容、寵物行為訓練
              </p>
              <div class="d-flex justify-content-center mt-1 mb-4">
                <button
                  type="button"
                  class="my-btn my-btn-danger font-style-regular rounded reserve-btn"
                >
                  預約
                </button>
              </div>
              <div class="row">
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    獲得評價
                  </p>
                </div>
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    已完成訂單
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    52
                    <small class="context-sm font-style-regular pl-1">則</small>
                  </p>
                </div>
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    196
                    <small class="context-sm font-style-regular pl-1">件</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="@/assets/images/index-4.jpeg"
              class="card-img-top reserve-banner"
              alt=""
            />

            <div class="card-body position-relative">
              <img
                src="@/assets/images/person-3.png"
                alt=""
                class="ml-auto mr-auto reserve-person-photo"
              />
              <p
                class="font-style-medium context-lg reserve-title text-center mb-1"
              >
                Yvonne
              </p>
              <p class="font-style-regular context-md text-center mb-2">
                寄宿、美容、寵物行為訓練
              </p>
              <div class="d-flex justify-content-center mt-1 mb-4">
                <button
                  type="button"
                  class="my-btn my-btn-danger font-style-regular rounded reserve-btn"
                >
                  預約
                </button>
              </div>
              <div class="row">
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    獲得評價
                  </p>
                </div>
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    已完成訂單
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    52
                    <small class="context-sm font-style-regular pl-1">則</small>
                  </p>
                </div>
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    196
                    <small class="context-sm font-style-regular pl-1">件</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <img
              src="@/assets/images/index-4.jpeg"
              class="card-img-top reserve-banner"
              alt=""
            />

            <div class="card-body position-relative">
              <img
                src="@/assets/images/person-3.png"
                alt=""
                class="ml-auto mr-auto reserve-person-photo"
              />
              <p
                class="font-style-medium context-lg reserve-title text-center mb-1"
              >
                Yvonne
              </p>
              <p class="font-style-regular context-md text-center mb-2">
                寄宿、美容、寵物行為訓練
              </p>
              <div class="d-flex justify-content-center mt-1 mb-4">
                <button
                  type="button"
                  class="my-btn my-btn-danger font-style-regular rounded reserve-btn"
                  @click="jumpToDetail()"
                >
                  預約
                </button>
              </div>
              <div class="row">
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    獲得評價
                  </p>
                </div>
                <div class="col">
                  <p class=" font-style-regular text-center mb-2">
                    已完成訂單
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    52
                    <small class="context-sm font-style-regular pl-1">則</small>
                  </p>
                </div>
                <div class="col">
                  <p
                    class="context-xlg font-style-bold d-flex align-items-center justify-content-center mt-1 mb-0"
                  >
                    196
                    <small class="context-sm font-style-regular pl-1">件</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-next w-auto" slot="button-next">
          <div
            class="my-custom-btn my-btn-danger d-flex justify-content-center align-items-center"
          >
            <span class="material-icons text-white h2 mb-0">arrow_right</span>
          </div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'swiper-card',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        direction: 'horizontal',
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
        },
        breakpoints: {
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        },
        // on: {
        //   resize: () => {
        //     this.swiper.changeDirection(
        //       window.innerWidth <= 768 ? "vertical" : "horizontal"
        //     );
        //   },
        // },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    jumpToDetail() {
      this.$router.push('/Detail');
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper-card {
   .swiper-button-next:after {
      content: '';
   }
}

</style>
