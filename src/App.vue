<template>
  <div id="app">
    <layout-header></layout-header>
    <router-view />
    <layout-footer :class="showFooter !== true ? 'd-none' : ''"></layout-footer>
    <div
      v-if="showFixedButton"
      class="my-custom-btn my-btn-danger vertical-scroll-btn d-none d-md-flex justify-content-center align-items-center"
    >
      <span class="material-icons text-white h2 mb-0">
        arrow_drop_down
      </span>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout/header.vue';
import LayoutFooter from '@/components/layout/footer.vue';
export default {
  name: 'App',
  props: {
    msg: String,
  },
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  computed: {
    showFooter() {
      return this.$store.getters['getShowFooter'];
    },
    showFixedButton() {
      return this.$store.getters['getShowFixedButton'];
    },
  },
  methods: {
    setEvent() {
      document
        .querySelector('.vertical-scroll-btn')
        .addEventListener('click', () => {
          window.scrollTo(0, document.body.scrollHeight);
        });
    },
  },
  mounted() {
    this.setEvent();
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/all.scss';

</style>
