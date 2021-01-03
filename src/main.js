import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
// import 'swiper/dist/css/swiper.css'
// import 'bootstrap';

import 'bootstrap'
import jQuery from 'jquery'
import VAnimateCss from 'v-animate-css';
Vue.use(BootstrapVue)
Vue.use(VAnimateCss);
window.$ = window.jQuery = jQuery
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
