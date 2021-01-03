<template>
  <div class="form-modal-success-wrap">
    <div class="container">
      <div class="d-flex flex-column align-items-center">
        <span class="material-icons pets-icon my-text-success">
          pets
        </span>
        <h2 class="font-style-bold context-mlg mb-2 pb-1">預約成功!</h2>
        <p class="font-syle-regular context-md mb-md-4">
          您可以在會員頁找到您的預約資料並修改或取消預約。
        </p>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-12 col-md-8 col-xl-6">
          <button
            class="my-btn my-btn-danger rounded w-100"
            @click="goMemberPage()"
          >
            前往會員頁
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goMemberPage() {
      this.$router.push('/member');
    },
  },
};
</script>

<style lang="scss" scoped>
.pets-icon {
   font-size: 80px;
   line-height: 1;
}

</style>
