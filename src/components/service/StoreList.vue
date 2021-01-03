<template>
  <div class="store-list">
    <div class="row">
      <div
        class="col-6 col-md-4 col-xl-3 col-px-md-reset pb-md-1 pb-xl-0 mb-2.5 mb-md-3 mb-xl-4"
        :class="activeClass(storeItem.idx)"
        v-for="storeItem in storeList"
        :key="'Item__' + storeItem.idx"
      >
        <card-default
          :title="storeItem.title"
          :starRate="storeItem.starRate"
          :content="storeItem.service"
          :imgUrl="storeItem.img"
        >
        </card-default>
      </div>
    </div>
  </div>
</template>

<script>
import CardDefault from '@/components/card/card-default';
export default {
  components: {
    CardDefault,
  },
  data() {
    return {
      storeList: [
        {
          idx: 1,
          title: '寵屋屋',
          starRate: 5,
          img:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-2.jpeg',
          service: '寄宿、美容洗澡、到府保姆',
        },
        {
          idx: 2,
          title: '毛孩好家',
          starRate: 5,
          img:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-3.jpeg',
          service: '寄宿、美容洗澡、到府保姆',
        },
        {
          idx: 3,
          title: '妖貓X僕SS',
          starRate: 5,
          img:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-4.jpeg',
          service: '寄宿、美容洗澡',
        },
        {
          idx: 4,
          title: '貓是主我是僕',
          starRate: 5,
          img:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-5.jpeg',
          service: '寄宿、美容洗澡、到府保姆',
        },
        {
          idx: 5,
          title: '萌寵底家',
          starRate: 5,
          img:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-6.jpeg',
          service: '寄宿、到府保姆',
        },
        {
          idx: 6,
          title: '貓狗大戰',
          starRate: 5,
          img:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-7.jpeg',
          service: '寄宿、美容洗澡、到府保姆',
        },
        {
          idx: 7,
          title: '卯咪',
          starRate: 5,
          img:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-8.jpeg',
          service: '寄宿、寵物行為訓練',
        },
        {
          idx: 8,
          title: '汪汪隊',
          starRate: 5,
          img:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-2.jpeg',
          service: '寄宿、到府保姆、寵物行為訓練',
        },
      ],
    };
  },
  methods: {
    activeClass(idx) {
      if (idx % 2 === 0) {
        return 'pl-0';
      }
    },
  },
};
</script>

<style></style>
