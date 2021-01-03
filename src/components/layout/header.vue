<template>
  <div class="fixed-top bg-white">
    <div class="border position-relative ">
      <div class="container-md container">
        <nav class="navbar nav ml-sm-10">
          <div class="row w-100">
            <div class="col-md-6 col-sm-12 ">
              <div class="d-flex d-md-block justify-content-center">
                <router-link to="/Home" class="navbar-brand">
                  <h1 class="logo">PETPET</h1>
                </router-link>
                <div class="d-md-none menu" @click="toggleMeunSmBar()">
                  <span class="material-icons menu-icon">
                    menu
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-1 w-100">
              <ul
                class="d-md-flex d-none justify-content-end list-unstyled align-items-center mb-0 h-100"
              >
                <li class="pr-md-4">
                  <router-link
                    to="/Service"
                    class="context-md font-style-regular text-dark text-decoration-none"
                  >
                    預約服務
                  </router-link>
                </li>
                <li class="pr-md-4 pl-md-3">
                  <router-link
                    to="/Service"
                    class="context-md font-style-regular text-dark text-decoration-none"
                  >
                    成為寵物保姆
                  </router-link>
                </li>
                <li class="pl-md-3">
                  <router-link
                    to="/Login"
                    class="context-md font-style-regular text-dark text-decoration-none"
                  >
                    登入
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        v-if="showMeunSmBar"
        class="row d-md-none m-0 position-absolute menu-sm-bar w-100"
        v-animate-css="'zoomIn'"
      >
        <div class="col-12 p-0">
          <router-link
            to="/Service"
            class="context-lg font-style-medium text-dark text-decoration-none text-center w-100 border-top py-3"
          >
            預約服務
          </router-link>
        </div>
        <div class="col-12 p-0">
          <router-link
            to="/Service"
            class="context-lg font-style-medium text-dark text-decoration-none text-center w-100 border-top py-3"
          >
            成為寵物保姆
          </router-link>
        </div>
        <div class="col-12 p-0">
          <router-link
            to="/Login"
            class="context-lg font-style-medium text-dark text-decoration-none text-center w-100 border-top border-bottom py-3"
          >
            登入
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {},
  data() {
    return {
      showMeunSmBar: false,
    };
  },
  methods: {
    toggleMeunSmBar() {
      return (this.showMeunSmBar = !this.showMeunSmBar);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-sm-bar {
   z-index: 100;
   background-color: #fff;
}

</style>
