<template>
  <v-date-picker v-model="range" is-range>
    <template v-slot="{ inputValue, inputEvents }">
      <div class="d-flex align-items-center">
        <input
          :value="inputValue.start"
          v-on="inputEvents.start"
          class="border calendar-input lh-sm rounded px-3 py-2 mr-3 mr-md-0 "
        />
        <span class="font-style-regular context-md d-none d-md-block px-2">
          至
        </span>
        <input
          :value="inputValue.end"
          v-on="inputEvents.end"
          class="border calendar-input lh-sm rounded px-3 py-2 "
        />
      </div>
    </template>
  </v-date-picker>
</template>

<script>
// import Calendar from "v-calendar/lib/components/calendar.umd";
import VDatePicker from "v-calendar/lib/components/date-picker.umd";

// Or just use in separate component
export default {
  components: {
    // Calendar,
    VDatePicker,
  },
  data() {
    return {
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
    };
  },
};
</script>

<style></style>
