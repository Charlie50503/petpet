<template>
  <div :class="outerClass">
    <p
      class="reservation-status context-md mt-2 mb-0 "
      :class="status === 1 ? 'font-style-bold' : ''"
    >
      預約項目
    </p>
    <p
      class="reservation-status font-style-regular context-md mt-2 mb-0"
      :class="status === 2 ? 'font-style-bold' : ''"
    >
      預約資料
    </p>
    <p
      class="reservation-status font-style-regular context-md mt-2 mb-0"
      :class="status === 3 ? 'font-style-bold' : ''"
    >
      付款資訊
    </p>
  </div>
</template>

<script>
export default {
  props: {
    outerClass: {
      type: String,
      default: '',
    },
    status: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style></style>
