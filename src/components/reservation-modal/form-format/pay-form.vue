<template>
  <div>
    <div class="row mb-3">
      <div class="col-12 col-md-7 col-xl-7">
        <label for="payCreditCardAccount" class="font-style-regular context-md"
          >信用卡帳號</label
        >
        <input
          type="text"
          class="my-input rounded"
          id="payCreditCardAccount"
          placeholder="Xxxx-xxxx-xxxx-xxxx"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 col-md-7 col-xl-7">
        <label for="payEffectiveDate" class="font-style-regular context-md"
          >有效日期</label
        >
        <input
          type="text"
          class="my-input rounded mb-1"
          id="payEffectiveDate"
          placeholder="(MM/YY)"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 col-md-7 col-xl-7">
        <label for="paySecurityCode" class="font-style-regular context-md"
          >安全碼</label
        >
        <input
          type="text"
          class="my-input rounded"
          id="paySecurityCode"
          placeholder="***"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
