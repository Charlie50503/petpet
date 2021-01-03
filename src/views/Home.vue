<template>
  <div class="home">
    <div class="my-wrap">
      <div class="row m-0">
        <div class="col-xl-5 col-md-12 p-0">
          <div class="banner"></div>
        </div>
        <div class="col-xl-7 col-md-12 p-0">
          <div class="container h-100">
            <div
              class="d-flex justify-content-center justify-content-xl-start h-100"
            >
              <div
                class="banner-card d-xl-flex flex-column justify-content-xl-center mt-md-0 mt-1"
              >
                <h1
                  class="title-lg font-style-bold d-flex justify-content-center justify-content-md-start mb-md-2 mt-md-4 mt-2 "
                >
                  寵物服務，盡在 PETPET
                </h1>
                <h2
                  class="subtitle-lg font-style-medium font-style-xl-bold d-flex justify-content-center flex-wrap justify-content-md-start flex-xl-nowrap text-nowrap mb-xl-4"
                >
                  <span>
                    當您的毛孩有需要時，
                  </span>
                  <span>幫您找到最合適的服務者！</span>
                </h2>
                <div class="row"></div>
                <div class="search-bar list-unstyled d-xl-flex mt-xl-4">
                  <select
                    class="my-select font-style-regular search-bar__variety mb-3 mb-xl-0"
                  >
                    <option selected>品種</option>
                    <option value="1">純種</option>
                    <option value="2">雜種</option>
                    <option value="3">無毛</option>
                  </select>
                  <select
                    class="my-select font-style-regular search-bar__serve mb-3 mb-xl-0"
                  >
                    <option selected>服務</option>
                    <option value="1">一手包辦</option>
                    <option value="2">到府服務</option>
                    <option value="3">托養</option>
                  </select>
                  <select
                    class="my-select font-style-regular search-bar__local mb-3 mb-xl-0"
                  >
                    <option selected>地區</option>
                    <option value="1">台北</option>
                    <option value="2">台中</option>
                    <option value="3">高雄</option>
                  </select>
                  <button
                    type="button"
                    class="my-btn my-btn-danger font-style-regular search-bar__btn"
                  >
                    搜尋
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-wrap">
      <div class="container">
        <section class="hot-pet-sitter">
          <div class="position-relative">
            <h2 class="title-md font-style-bold mb-1">本月熱門保姆</h2>
            <p class="subtitle-lg font-style-medium pb-1 mb-2">
              即時瞭解您的需求，安排最適合毛孩的寵物保姆！
            </p>
            <swiper-card></swiper-card>
          </div>
        </section>
      </div>
    </div>
    <div class="my-wrap">
      <div class="container">
        <section class="online-appointment">
          <h2 class="title-md font-style-bold mb-1">線上預約</h2>
          <p class="subtitle-lg font-style-medium pb-1 mb-2">
            即時瞭解您的需求，安排最適合毛孩的寵物保姆！
          </p>
          <div class="row m-0">
            <div class="col-md-4 pr-md-0 pl-md-1 pb-md-0 pr-0 pl-0 pb-1">
              <div
                class="rounded serve-banner pet-boarding d-flex justify-content-center align-items-center"
                v-animate-css="{
                  classes: 'bounceInLeft',
                  delay: 200,
                  duration: 1000,
                }"
              >
                <router-link
                  to="/Service"
                  class="w-100 h-100 d-flex justify-content-center align-items-center link-accent context-mlg font-style-bold text-white serve-banner__text"
                >
                  寵物寄宿
                </router-link>
              </div>
            </div>
            <div class="col-md-3 pr-md-0 pl-md-1 pb-md-0 pr-0 pl-0 pb-1">
              <div
                class="rounded serve-banner pet-grooming d-flex justify-content-center align-items-center"
                v-animate-css="{
                  classes: 'bounceInLeft',
                  delay: 400,
                  duration: 1000,
                }"
              >
                <router-link
                  to="/Home"
                  class="w-100 h-100 d-flex justify-content-center align-items-center link-accent context-mlg font-style-bold text-white serve-banner__text"
                >
                  寵物美容
                </router-link>
              </div>
            </div>
            <div class="col-md-3 pr-md-0 pl-md-1 pb-md-0 pr-0 pl-0 pb-1">
              <div class="d-flex justify-content-between flex-column h-100">
                <div
                  class="rounded serve-banner-half home-care d-flex justify-content-center align-items-center mb-md-0 mb-1"
                  v-animate-css="{
                    classes: 'bounceInLeft',
                    delay: 600,
                    duration: 1000,
                  }"
                >
                  <router-link
                    to="/Home"
                    class="w-100 h-100 d-flex justify-content-center align-items-center link-accent context-mlg font-style-bold text-white serve-banner__text"
                  >
                    到府照顧
                  </router-link>
                </div>
                <div
                  class="rounded serve-banner-half dog-sitter d-flex justify-content-center align-items-center"
                  v-animate-css="{
                    classes: 'bounceInLeft',
                    delay: 800,
                    duration: 1000,
                  }"
                >
                  <router-link
                    to="/Home"
                    class="w-100 h-100 d-flex justify-content-center align-items-center link-accent context-mlg font-style-bold text-white serve-banner__text"
                  >
                    遛狗保姆
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-md-2 pr-md-0 pl-md-1 pr-0 pl-0 pb-md-0">
              <div
                class="rounded serve-banner behavior-training d-flex justify-content-center align-items-center"
                v-animate-css="{
                  classes: 'bounceInLeft',
                  delay: 1000,
                  duration: 1000,
                }"
              >
                <router-link
                  to="/Home"
                  class="w-100 h-100 d-flex justify-content-center align-items-center link-accent context-mlg font-style-bold text-white serve-banner__text"
                >
                  寵物寄宿
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="my-wrap">
      <div
        class="useing-member-banner"
        v-animate-css="{
          classes: 'bounceInLeft',
          delay: 1400,
          duration: 1000,
        }"
      >
        <section class="useing-member">
          <div class="container">
            <h2
              class="useing-member-title context-llg font-style-bold my-text-accent text-center text-md-left"
            >
              PETPET目前已有
            </h2>
            <div class="row m-0">
              <div class="col-xl-3 col-md-4 p-0">
                <div
                  class="d-flex justify-content-center justify-content-md-start"
                >
                  <div class="bd-left-2 bd-accent pl-4 useing-member-item">
                    <div class="my-wrap-second">
                      <h3
                        class="context-lllg font-style-bold my-text-accent m-0"
                      >
                        5278
                      </h3>
                      <p
                        class="context-lg font-style-medium my-text-accent m-0"
                      >
                        人使用 PETPET
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-4 p-0">
                <div
                  class="d-flex justify-content-center justify-content-md-start"
                >
                  <div class="bd-left-2 bd-accent pl-4 useing-member-item">
                    <div class="my-wrap-second">
                      <h3
                        class="context-lllg font-style-bold my-text-accent m-0"
                      >
                        580
                      </h3>
                      <p
                        class="context-lg font-style-medium my-text-accent m-0"
                      >
                        人成為寵物保母
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-4 p-0">
                <div
                  class="d-flex justify-content-center justify-content-md-start"
                >
                  <div class="bd-left-2 bd-accent pl-4 useing-member-item">
                    <div class="my-wrap-second">
                      <h3
                        class="context-lllg font-style-bold my-text-accent m-0"
                      >
                        10000+
                      </h3>
                      <p
                        class="context-lg font-style-medium my-text-accent m-0"
                      >
                        已完成服務
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="appointment-process">
      <div class="my-wrap">
        <div class="container">
          <h2 class="context-llg font-style-bold my-text-primary mb-1">
            預約流程
          </h2>
          <p
            class="font-style-medium context-lg my-text-primary pb-1 mb-2 mb-md-3"
          >
            輕鬆三步驟，立即獲取最佳服務！
          </p>
          <div class="row">
            <div class="col-md-4 col-12">
              <p class="font-style-medium context-lg my-text-primary mb-1 ">
                1.查詢想要的服務
              </p>
              <img class="w-100" src="@/assets/images/index-10.png" alt="" />
            </div>
            <div class="col-md-4 col-12">
              <p class="font-style-medium context-lg my-text-primary mb-1 ">
                2.找到合適的保姆
              </p>
              <img class="w-100" src="@/assets/images/index-11.png" alt="" />
            </div>
            <div class="col-md-4 col-12">
              <p class="font-style-medium context-lg my-text-primary mb-1 ">
                3.填寫資料完成預約
              </p>
              <img class="w-100" src="@/assets/images/index-12.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <help></help>
  </div>
</template>

<script>
import SwiperCard from '@/components/swiper-card.vue';
import Help from '@/components/help.vue';
export default {
  name: 'Home',
  components: {
    SwiperCard,
    Help,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
};
</script>
