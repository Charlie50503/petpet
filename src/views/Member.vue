<template>
  <div class="member-wrap">
    <div class="container">
      <div class="row">
        <div class="col-xl-1 d-none d-xl-flex"></div>
        <div class="col-12 col-md-6 col-xl-5">
          <div class="member-info">
            <h1 class="font-style-bold title-md member-title">
              會員資料
              <span class="material-icons">
                edit
              </span>
            </h1>
            <div class="d-flex align-items-center mb-4 pb-2">
              <img
                src="@/assets/images/person-5.png"
                alt=""
                class="member-photo mr-3"
              />
              <p class="font-style-medium context-lg mb-0">Joanne</p>
            </div>
            <div class="row pt-1">
              <div class="col-3 col-md-4">
                <p class="font-style-regular context-md">電子信箱</p>
              </div>
              <div class="col-9 col-md-8">
                <p class="font-style-regular context-md">cycample@gmail.com</p>
              </div>
            </div>
            <div class="row pt-1">
              <div class="col-3 col-md-4">
                <p class="font-style-regular context-md">聯絡電話</p>
              </div>
              <div class="col-9 col-md-8">
                <p class="font-style-regular context-md">0912-345-789</p>
              </div>
            </div>
            <div class="row pt-1">
              <div class="col-3 col-md-4">
                <p class="font-style-regular context-md">性別</p>
              </div>
              <div class="col-9 col-md-8">
                <p class="font-style-regular context-md">女</p>
              </div>
            </div>
            <div class="row pt-1">
              <div class="col-3 col-md-4">
                <p class="font-style-regular context-md">聯絡地址</p>
              </div>
              <div class="col-9 col-md-8">
                <p class="font-style-regular context-md">
                  高雄市鹽埕區七賢三路123號
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-6">
          <div class="h-100 d-flex flex-column justify-content-center">
            <p class="font-style-bold title-md pb-1 pb-xl-0">
              Hi, Joanne <br />喜歡我們提供的服務嗎？
              <br />現在你也可以成為寵物保姆囉！
            </p>
            <div class="row pt-3">
              <div class="col-12 col-xl-6">
                <button
                  type="button"
                  class="my-btn my-btn-danger content-lg font-style-regular rounded w-100"
                >
                  成為寵物保姆
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
export default {
  beforeRouteEnter(to, from, next) {
    store.commit('setShowFooter', false);
    store.commit('setShowFixedButton', false);
    next();
  },
  beforeRouteLeave(to, from, next) {
    store.commit('setShowFooter', true);
    store.commit('setShowFixedButton', true);
    next();
  },
};
</script>

<style></style>
