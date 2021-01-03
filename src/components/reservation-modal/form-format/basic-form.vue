<template>
  <div>
    <ul class="list-unstyled d-flex justify-content-between">
      <li>
        <input
          type="checkbox"
          class="d-none"
          id="formHomeStay"
          v-model="homeStayCheck"
          @click="homeStayCheck = !homeStayCheck"
        />
        <label
          class="d-flex flex-column justify-content-center align-items-center shadow rounded checkboxItem"
          for="formHomeStay"
          :class="homeStayCheck === true ? 'bd-3 bd-danger' : ''"
          ><span class="material-icons context-lg context-md-xllg lh-1">
            house
          </span>
          <p class="mb-0">寄宿</p></label
        >
      </li>
      <li>
        <input
          type="checkbox"
          class="d-none"
          id="formSalon"
          v-model="salonCheck"
          @click="salonCheck = !salonCheck"
        />
        <label
          class="d-flex flex-column justify-content-center align-items-center shadow rounded checkboxItem"
          for="formSalon"
          :class="salonCheck === true ? 'bd-3 bd-danger' : ''"
          ><span class="material-icons context-lg context-md-xllg lh-1">
            wash
          </span>
          <p class="mb-0">美容</p></label
        >
      </li>
      <li>
        <input
          type="checkbox"
          class="d-none"
          id="formBabySitter"
          v-model="babySitterCheck"
          @click="babySitterCheck = !babySitterCheck"
        />
        <label
          class="d-flex flex-column justify-content-center align-items-center shadow rounded checkboxItem"
          :class="babySitterCheck === true ? 'bd-3 bd-danger' : ''"
          for="formBabySitter"
          ><span class="material-icons context-lg context-md-xllg lh-1">
            roofing
          </span>
          <p class="mb-0">到府保姆</p></label
        >
      </li>
      <li>
        <input
          type="checkbox"
          class="d-none"
          id="formDogWalking"
          v-model="dogWalkingCheck"
          @click="dogWalkingCheck = !dogWalkingCheck"
        />
        <label
          class="d-flex flex-column justify-content-center align-items-center shadow rounded checkboxItem"
          for="formDogWalking"
          :class="dogWalkingCheck === true ? 'bd-3 bd-danger' : ''"
          ><span class="material-icons context-lg context-md-xllg lh-1">
            directions_walk
          </span>
          <p class="mb-0">遛狗保姆</p></label
        >
      </li>
    </ul>
    <h5 class="font-style-regular context-md mb-1">選擇日期</h5>
    <v-date-picker v-model="range" is-range>
      <template v-slot="{ inputValue, inputEvents }">
        <div class="row mb-xl-4 mb-3 pb-xl-1 pb-1">
          <div
            class="col-xl-auto col-md-5 col-auto d-flex align-items-center pr-xl-0 pb-2 pb-md-0"
          >
            <input
              :value="inputValue.start"
              v-on="inputEvents.start"
              class="border w-auto lh-sm rounded px-3 py-2 mr-3 mr-md-0 "
            />
            <span class="font-style-regular context-md px-md-2 ">
              至
            </span>
          </div>
          <div
            class="col-xl-auto col-md-7 col-auto d-flex align-items-center pl-xl-0"
          >
            <input
              :value="inputValue.end"
              v-on="inputEvents.end"
              class="border w-auto lh-sm rounded px-3 py-2 ml-md-2 ml-xl-0"
            />
            <span class="font-style-regular context-md text-nowrap px-2">
              共 1 晚
            </span>
          </div>
        </div>
      </template>
    </v-date-picker>
    <div class="row pb-xl-2 pb-md-4">
      <div class="col-md-2 col-4">
        <p class="font-style-regular context-md mb-1">毛孩數量</p>
        <select
          class="custom-select custom-select-sm font-style-regular h-auto min-w-50 py-2"
        >
          <option selected>1隻</option>
          <option value="1">2隻</option>
          <option value="2">3隻</option>
        </select>
      </div>
      <div class="col-md-3 col-4">
        <p class="font-style-regular context-md mb-1">您的毛孩是</p>
        <select
          class="custom-select custom-select-sm font-style-regular h-auto  min-w-50 py-2"
        >
          <option value="1">貓</option>
          <option value="2">狗</option>
        </select>
      </div>
      <div class="col-md-2 col-4">
        <p class="font-style-regular context-md mb-1">年齡</p>
        <select
          class="custom-select custom-select-sm font-style-regular h-auto min-w-50 py-2"
        >
          <option selected>1歲</option>
          <option value="1">2歲</option>
          <option value="2">3歲</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import VDatePicker from 'v-calendar/lib/components/date-picker.umd';
export default {
  components: {
    VDatePicker,
  },
  data() {
    return {
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
      dogWalkingCheck: false,
      babySitterCheck: false,
      salonCheck: false,
      homeStayCheck: false,
    };
  },
};
</script>

<style></style>
