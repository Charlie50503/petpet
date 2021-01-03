<template>
  <div>
    <div class="container">
      <div class="row m-0">
        <div class="col-xl-6 col-12 pl-0 d-none d-xl-flex">
          <div class="banner"></div>
        </div>
        <div class="col-xl-6 col-12">
          <div class="login-wrap">
            <h1 class="font-style-bold title-md login-title">登入</h1>
            <ul class="list-unstyled">
              <li class="mb-3">
                <label for="userEmail" class="font-style-regular context-md"
                  >電子信箱</label
                >
                <input
                  type="text"
                  class="my-input rounded"
                  id="userEmail"
                  placeholder="example@gmail.com"
                />
              </li>
              <li class="mb-3">
                <label for="userPassword" class="font-style-regular context-md"
                  >密碼</label
                >
                <input
                  type="text"
                  class="my-input rounded mb-1"
                  id="userPassword"
                  placeholder="請輸入密碼"
                />
                <a
                  href="#"
                  class="text-decoration-none font-style-regular context-sm my-text-info"
                >
                  忘記密碼
                </a>
              </li>
              <li class="mb-3">
                <input type="checkbox" class="mr-1" id="checkRemeber" />
                <label for="checkRemeber" class="font-style-regular context-md"
                  >記住我的帳號</label
                >
              </li>
            </ul>
            <div class="row mb-3">
              <div class="col-xl-6 col-12 mb-2 mb-xl-0">
                <button
                  type="button"
                  class="btn d-flex justify-content-center align-items-center w-100 bgc-white border bd-accent-200 rounded py-1 "
                >
                  <img src="@/assets/images/facebook.svg" alt="" />
                  <span class="font-style-regular conten-md my-text-info">
                    Facebook
                  </span>
                </button>
              </div>
              <div class="col-xl-6 col-12 mt-1 mt-xl-0">
                <button
                  type="button"
                  class="btn d-flex justify-content-center align-items-center w-100 bgc-white border bd-accent-200 rounded py-1 "
                >
                  <img src="@/assets/images/google.svg" alt="" />
                  <span class="font-style-regular conten-md my-text-info">
                    Google
                  </span>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-xl-5">
                <button
                  type="button"
                  class="my-btn my-btn-danger rounded w-100 mt-4 mb-2"
                  @click="login()"
                >
                  登入
                </button>
                <a
                  href="#"
                  class="text-decoration-none font-style-regular context-md my-text-danger"
                >
                  還沒註冊嗎？
                </a>
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
  methods: {
    login() {
      this.$router.push('member');
    },
  },
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
