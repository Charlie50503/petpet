<template>
  <div class="detail-wrap">
    <div class="my-wrap">
      <div class="">
        <div class="container">
          <div class="row justify-content-xl-end">
            <div
              class="col-12 col-md-7 col-xl-6 position-sticky-xl order-2 order-md-1"
            >
              <div class="detail-info">
                <div class="d-flex mb-3">
                  <h1 class="font-style-bold title-md mb-0 mr-3">毛孩好家</h1>
                  <p class="d-flex align-items-center m-0">
                    <span
                      v-for="i in 5"
                      :key="'star_' + i"
                      class="material-icons my-text-warning"
                    >
                      star_rate
                    </span>
                  </p>
                </div>
                <p class="font-style-medium context-lg mb-xl-2 mb-2.5">
                  給予毛孩最舒適的環境是我們的職責！
                </p>
                <p
                  class="font-style-medium context-md mb-3 mb-xl-4 pb-2 pb-xl-4"
                >
                  已提供 52 筆服務、並獲得 30 個評價
                </p>
                <h2 class="font-style-bold context-lg pt-1 pt-xl-3">
                  服務內容
                </h2>
                <ul class="list-unstyled mb-4">
                  <li>
                    <p class="font-style-medium context-md mb-2">
                      寄宿 NT$ 450 /晚
                    </p>
                  </li>
                  <li>
                    <p class="font-style-medium context-md mb-2">
                      美容洗澡 NT$ 500 （含剪指甲、剃腳底毛、清耳朵）<br />
                      <span class="my-text-danger">個性貓另加價</span>
                    </p>
                  </li>
                  <li>
                    <p class="font-style-medium context-md mb-2">
                      到府保姆 NT$ 550 /晚
                    </p>
                  </li>
                </ul>
                <div class="d-flex pt-3">
                  <div>
                    <span class="material-icons my-text-danger">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p class="font-style-medium context-md mb-0">
                      高雄市鹽埕區七賢三路123號
                    </p>
                    <p class="font-style-medium context-md mb-0">
                      服務區域：高雄市 全區
                    </p>
                  </div>
                </div>
                <div class="row pt-4">
                  <div class="col-xl-4 col-md-5 col-6">
                    <button
                      class="btn my-btn-danger-reverse font-style-regular my-text-danger :hover-accent context-lg w-100"
                      type="button"
                    >
                      聯繫
                    </button>
                  </div>
                  <div class="col-xl-6 col-md-6 col-6">
                    <reservation> </reservation>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-5 col-xl-6 order-1 order-md-2">
              <div class="mb-4 pb-3 mb-md-0 pb-md-0">
                <div class="detail-imges">
                  <img-carousel></img-carousel>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-6 float-right order-3">
              <ul class="list-unstyled">
                <li class="mb-xl-4 mb-md-4 mb-3">
                  <h2 class="font-style-bold context-mlg">關於</h2>
                  <p
                    class="font-style-medium context-md mb-0 pb-xl-3 pb-md-1 pb-1"
                  >
                    家中有5隻貓寶貝，對貓咪有瘋狂的熱愛 。<br />
                    目前已經照顧超過30位狗狗貓咪朋友！對於我來說，能夠與你們相遇都是緣分！
                  </p>
                </li>
                <li class="mb-xl-4 mb-md-4 mb-3">
                  <h2 class="font-style-bold context-mlg">經歷</h2>
                  <p
                    class="font-style-medium context-md mb-0 pb-xl-3 pb-md-1 pb-1"
                  >
                    曾接手過數次奶貓，照顧後送養成功，目前都是健健康康的毛孩。
                  </p>
                </li>
                <li class="mb-xl-4 mb-md-4 mb-3">
                  <h2 class="font-style-bold context-mlg">技能證照</h2>
                  <p
                    class="font-style-medium context-md mb-0 pb-xl-3 pb-md-1 pb-1"
                  >
                    寵物美容丙級技術證
                  </p>
                </li>
                <li class="mb-xl-4 mb-md-4 mb-3">
                  <h2 class="font-style-bold context-mlg">提供</h2>
                  <p
                    class="font-style-medium context-md mb-0 pb-xl-3 pb-md-1 pb-1"
                  >
                    貓砂盆、罐頭、乾飼料
                  </p>
                </li>
                <li class="mb-xl-4 mb-md-4 mb-3">
                  <h2 class="font-style-bold context-mlg">毛孩活動範圍</h2>
                  <p
                    class="font-style-medium context-md mb-0 pb-xl-3 pb-md-1 pb-1"
                  >
                    想去的任何地方
                  </p>
                </li>
                <li class="">
                  <h2 class="font-style-bold context-mlg">服務地區</h2>
                  <p class="font-style-medium context-md mb-0">
                    高雄市
                  </p>
                </li>
              </ul>
              <div class="my-wrap">
                <h2 class="font-style-bold context-xlg pb-1 mb-3">
                  飼主評論（30）
                </h2>
                <div class="row">
                  <div
                    class="col-12 col-md-6 mt-1 mb-3"
                    v-for="(commentItem, idx) in commentList"
                    :key="'comment_' + idx"
                  >
                    <media-default
                      :imgUrl="commentItem.imgUrl"
                      :title="commentItem.name"
                      :subtitle="commentItem.data"
                      :starRate="commentItem.starRate"
                      :content="commentItem.commentContent"
                    ></media-default>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6"></div>
                  <div class="col-6">
                    <a
                      href=""
                      class="text-decoration-none font-style-medium context-lg my-text-primary float-right"
                      >查看更多</a
                    >
                  </div>
                </div>
              </div>
              <div class="my-wrap">
                <h2 class="d-flex font-style-bold context-xlg pb-1 mb-3">
                  其他
                  <a href="" class="my-text-danger text-decoration-none px-1"
                    ><u>高雄市</u></a
                  >
                  <a href="" class="my-text-danger text-decoration-none  px-1"
                    ><u>寄宿</u></a
                  >
                  的寵物保姆
                </h2>
                <div class="row mx-xl-0">
                  <div
                    class="col-6 col-md-4 col-xl-4 px-xl-1 pb-1 pb-xl-0 mb-2 mb-md-3 mb-xl-2"
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <help></help>
  </div>
</template>

<script>
import ImgCarousel from '@/components/img-carousel.vue';
import Help from '@/components/help.vue';
import reservation from '@/components/reservation-modal/main.vue';
import MediaDefault from '@/components/media/media-default.vue';
import CardDefault from '@/components/card/card-default.vue';
export default {
  name: 'Detail',
  components: {
    ImgCarousel,
    reservation,
    Help,
    MediaDefault,
    CardDefault,
  },
  data() {
    return {
      commentList: [
        {
          imgUrl:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-4.png',
          name: '葉子',
          date: 'Oct 17 2020',
          starRate: 5,
          commentContent: '服務很秋！',
        },
        {
          imgUrl:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-5.png',
          name: 'Joanne',
          date: 'Oct 17 2020',
          starRate: 5,
          commentContent: '貓完全不想回家了。',
        },
        {
          imgUrl:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-6.png',
          name: 'Ray',
          date: 'Oct 17 2020',
          starRate: 5,
          commentContent: '超喜歡超棒超讚的...',
        },

        {
          imgUrl:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-7.png',
          name: '穎旻',
          date: 'Oct 17 2020',
          starRate: 5,
          commentContent: '下次還會麻煩您～',
        },
        {
          imgUrl:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-8.png',
          name: '俊儀',
          date: 'Oct 17 2020',
          starRate: 5,
          commentContent: '讚的！',
        },
        {
          imgUrl:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-9.png',
          name: '子琪',
          date: 'Oct 17 2020',
          starRate: 5,
          commentContent: '服務很棒耶哈哈哈！',
        },
      ],
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
        return 'pl-xl-0 pl-md-3 pl-0';
      }
    },
  },
};
</script>

<style></style>
