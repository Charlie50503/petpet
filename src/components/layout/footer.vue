<template>
  <div class="footer">
    <div class="container-md container">
      <div class="row footer-content d-none d-md-flex">
        <div class="col">
          <ul class="footer-list list-unstyled m-0">
            <router-link to="/Home">
              <h3 class="logo footer-list__title">PETPET</h3>
            </router-link>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary">
                關於我們
              </a>
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary">幫助中心</a>
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary">使用條款</a>
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary">隱私政策</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer-list list-unstyled m-0">
            <h3
              class="subtitle-lg font-style-bold footer-list__title d-flex align-items-center"
            >
              寵物服務
            </h3>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary">寵物寄宿</a>
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary"
                >寵物到府保姆</a
              >
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary"
                >寵物美容洗澡</a
              >
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary"
                >寵物行為訓練</a
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer-list list-unstyled m-0">
            <h3
              class="subtitle-lg font-style-bold footer-list__title d-flex align-items-center"
            >
              加入我們
            </h3>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary"
                >成為寵物保姆</a
              >
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary"
                >加入寵物計程車</a
              >
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary"
                >專屬 APP 下載</a
              >
            </li>
            <li class="footer-list__item">
              <a href="" class="font-style-regular link-primary"
                >相關合約條款</a
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="footer-list list-unstyled m-0">
            <h3
              class="subtitle-lg font-style-bold footer-list__title d-flex align-items-center"
            >
              聯繫我們
            </h3>
            <li class="footer-list__item">
              <a
                href="mailto:petpet@petmail.com"
                class="font-style-regular link-primary"
                >petpet@petmail.com</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row d-md-none">
        <div class="col">
          <router-link to="/Home">
            <h3 class="logo">PETPET</h3>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 d-none d-md-block">
          <a
            href="tel:+07-123-4567"
            target=""
            class="link-primary d-flex align-items-center"
          >
            <span class="material-icons icon-md">
              call
            </span>
            <span class="context-md font-style-medium">
              07-123-4567
            </span>
          </a>
        </div>
        <div class="col-md-6 col-12">
          <div class="d-flex justify-content-start justify-content-xl-end">
            <p class="context-sm font-style-medium m-0">
              Copyright © 2020 PetPet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutFooter",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
