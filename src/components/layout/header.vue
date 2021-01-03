<template>
  <div>
    <div class="container-md container">
      <nav class="navbar nav ml-sm-10">
        <div class="row w-100">
          <div class="col-md-6 col-sm-12 ">
            <div class="d-flex d-md-block justify-content-center">
              <router-link to="/Home" class="navbar-brand">
                <h1 class="logo">PETPET</h1>
              </router-link>
              <div class="d-md-none menu">
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
                  to="/Serve"
                  class="context-md font-style-regular text-dark text-decoration-none"
                >
                  預約服務
                </router-link>
              </li>
              <li class="pr-md-4 pl-md-3">
                <router-link
                  to="/product"
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
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
