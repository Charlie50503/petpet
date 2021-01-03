<template>
  <div>
    <button
      class="btn my-btn-danger font-style-regular context-lg my-text-accent :hover-accent w-100"
      type="button"
      @click="$bvModal.show('formModal')"
    >
      立刻預約
    </button>
    <b-modal
      id="formModal"
      dialog-class="form-modal-size"
      body-class="form-modal-body"
      centered
      scrollable
      hide-footer
      hide-header
    >
      <div class="form-wrap" v-show="reservationStatus < 4">
        <div class="row">
          <div class="col-xl-8 order-2 order-md-2 order-xl-1">
            <h2
              class="font-style-bold context-mlg d-none d-xl-block pb-1 pb-md-0 pb-xl-2 mb-2 mb-md-4"
            >
              {{ formTitle }}
            </h2>
            <modal-basic-form
              v-show="reservationStatus === 1"
            ></modal-basic-form>
            <modal-contact-form
              v-show="reservationStatus === 2"
            ></modal-contact-form>
            <modal-pay-form v-show="reservationStatus === 3"> </modal-pay-form>

            <reservation-line
              :outerClass="
                'd-none d-md-flex justify-content-around mt-md-4 pt-md-4'
              "
              :status="reservationStatus"
            >
            </reservation-line>
            <div class="row d-xl-none mt-4 pt-2.5">
              <div class="col-12 col-md-6 mb-3 mb-md-0">
                <button
                  class="my-btn my-btn-danger-reverse text-dark :hover-accent rounded w-100"
                  @click="goBack()"
                >
                  返回
                </button>
              </div>
              <div class="col-12 col-md-6">
                <button
                  class="my-btn my-btn-danger rounded w-100"
                  @click="goNextForm()"
                >
                  下一步
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-4 order-1 order-md-1 order-xl-2">
            <reservation-line
              :outerClass="
                'd-flex d-md-none justify-content-around mt-md-4 pt-md-4'
              "
              :status="reservationStatus"
            >
            </reservation-line>
            <h2
              class="font-style-bold context-mlg d-block d-xl-none pb-1 pb-md-0 mb-2 mb-md-4"
            >
              {{ formTitle }}
            </h2>
            <div class="pb-md-1 pb-xl-4 mb-4 mb-md-3 mb-xl-4">
              <media-quartet
                :imgUrl="imgUrl"
                :content="location"
                :starRate="starRate"
                :title="title"
              ></media-quartet>
            </div>
            <button
              v-show="reservationStatus > 1"
              class="my-btn my-btn-danger-reverse text-dark :hover-accent rounded d-none d-xl-inline-block w-100"
              @click="goBack()"
            >
              返回
            </button>
            <button
              class="my-btn my-btn-danger rounded d-none d-xl-inline-block w-100 mt-4"
              @click="goNextForm()"
            >
              下一步
            </button>
          </div>
        </div>
      </div>
      <modal-success v-show="reservationStatus === 4"> </modal-success>
    </b-modal>
  </div>
</template>

<script>
import MediaQuartet from '@/components/media/media-quartet.vue';
// import VDatePicker from 'v-calendar/lib/components/date-picker.umd';
import ReservationLine from './reservation-line.vue';
import ModalBasicForm from './form-format/basic-form.vue';
import ModalContactForm from './form-format/contact-form.vue';
import ModalPayForm from './form-format/pay-form.vue';
import ModalSuccess from './form-format/success.vue';

export default {
  components: {
    MediaQuartet,
    // VDatePicker,
    ReservationLine,
    ModalBasicForm,
    ModalContactForm,
    ModalPayForm,
    ModalSuccess,
  },
  data() {
    return {
      reservationStatus: 1,
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
      dogWalkingCheck: false,
      babySitterCheck: false,
      salonCheck: false,
      homeStayCheck: false,
      imgUrl:
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-3.jpeg',
      location: '高雄市苓雅區、新興區、前鎮區',
      starRate: 5,
      title: '毛孩好家',
    };
  },
  computed: {
    formTitle() {
      if (this.reservationStatus === 1) {
        return '預約項目';
      }
      if (this.reservationStatus === 2) {
        return '預約資料';
      }
      if (this.reservationStatus === 3) {
        return '付款資訊';
      }
      return '';
    },
  },
  methods: {
    goNextForm() {
      if (this.reservationStatus !== 4) {
        return this.reservationStatus++;
      }
    },
    goBack() {
      if (this.reservationStatus === 1) return this.$bvModal.hide('formModal');
      if (this.reservationStatus >= 1) return this.reservationStatus--;
    },
  },
};
</script>
