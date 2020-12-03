<template>
  <div>
    <div class="swiper">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide>
          <img class="w-100" src="../assets/banners/banner1.jpeg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/banners/banner2.jpeg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/banners/banner3.jpeg" alt="" />
        </swiper-slide>
        <div
          class="swiper-pagination pagination-home text-right px-3 pb-2"
          slot="pagination"
        ></div>
      </swiper>
    </div>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center text-dark-1 pt-3">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-story"></i>
          <div class="py-2">故事站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-shop"></i>
          <div class="py-2">周边商场</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-experience"></i>
          <div class="py-2">体验服</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-new"></i>
          <div class="py-2">新人专区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-smriti"></i>
          <div class="py-2">荣耀-传承</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-community"></i>
          <div class="py-2">同人社区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-camp"></i>
          <div class="py-2">王者营地</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-wechat"></i>
          <div class="py-2">公众号</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav-icons -->

    <!-- 新闻资讯 -->
    <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{ news.categoryName }}] </span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{
            news.title
          }}</span>
          <span class="text-grey fs-sm">{{ news.createdAt | date }}</span>
        </router-link>
      </template>
    </m-list-card>

    <!-- 英雄列表 -->
    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{ category }">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width: 20%"
            v-for="(hero, index) in category.heroList"
            :key="index"
          >
            <img :src="hero.avatar" alt="" class="w-100" />
            <div>{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickble: true,
        },
      },
      newsCats: [],
      heroCats: [],
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroesCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    },
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroesCats();
  },
  filters: {
    date(value) {
      return dayjs(value).format("MM/DD");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 2px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>