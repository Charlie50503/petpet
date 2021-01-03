<template>
  <div>
    <div class="service-pet-boarding">
      <div class="container">
        <div class="row flex-column-reverse flex-md-row">
          <div
            class="d-flex justify-content-center flex-column align-items-center align-items-start col-12 col-md-6 col-xl-4"
          >
            <h1
              class="font-style-bold title-md-lg title-sm my-text-primary pt-2 pt-md-0 mt-1 mt-md-0 mb-xl-3 mb-md-2 mb-1"
            >
              寵物寄宿
            </h1>
            <p
              class="font-style-md-bold font-style-medium subtitle-lg my-text-primary pb-2 pb-md-0 mb-1 mb-md-0"
            >
              給您的毛孩最舒適的環境
            </p>
          </div>
          <div class="col-12 col-md-6 col-xl-8 col-px-0 col-px-md-reset">
            <div class="service-pet-boarding-banner"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-wrap">
      <div class="bgc-primary d-flex pt-3 pb-3">
        <div class="container">
          <div class="row">
            <div class="col-auto mb-2 mb-md-0 pr-md-0">
              <select
                class="custom-select custom-select-sm font-style-regular h-auto w-auto py-2 mr-2"
              >
                <option selected>寵物</option>
                <option value="1">貓</option>
                <option value="2">狗</option>
              </select>
              <select
                class="custom-select custom-select-sm font-style-regular h-auto my-w-md py-2 mr-2"
              >
                <option selected>地區</option>
                <option value="1">高雄</option>
                <option value="2">台北</option>
                <option value="3">台中</option>
              </select>
            </div>
            <div class="col-auto pl-md-0">
              <calendar></calendar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-wrap">
      <div class="container">
        <h2 class="font-style-bold pb-1 mb-2">本月熱門寄宿</h2>
        <swiper-card></swiper-card>
      </div>
    </div>
    <div class="my-wrap">
      <div class="container">
        <store-list></store-list>
        <div class="row">
          <div class="col">
            <ul class="pagination float-right mt-2 pb-1">
              <li class="page-item">
                <a class="page-link pt-2 pb-2" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link my-text-primary font-style-regular context-md h-100 pt-2 pb-2"
                  href="#"
                  >1</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link my-text-primary font-style-regular context-md h-100 pt-2 pb-2"
                  href="#"
                  >2</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link my-text-primary font-style-regular context-md h-100 pt-2 pb-2"
                  href="#"
                  >3</a
                >
              </li>
              <li class="page-item">
                <a class="page-link pt-2 pb-2" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <help></help>
  </div>
</template>

<script>
import SwiperCard from '@/components/swiper-card.vue';
import Calendar from '@/components/calendar/calendar.vue';
import Help from '@/components/help.vue';
import StoreList from '@/components/service/StoreList.vue';
export default {
  components: {
    Calendar,
    SwiperCard,
    Help,
    StoreList,
  },
};
</script>

<style></style>
