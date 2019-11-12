<template>
  <div id="root">
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item class="banner-item" v-for="(banner, index) in bannerList" :key="index">
        <img :src="banner.cover" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script lang="ts" scoped>
import { bannerApi } from "@/assets/Api";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeBanner extends Vue {
  private bannerList: [] = [];
  created(): void {
    (this as any).$axios
      .get(bannerApi)
      .then((rep: any) => {
        this.bannerList = rep.data.data;
      })
      .catch((err: any) => {});
  }
}
</script>

<style lang="scss" scoped>
#root {
  .banner {
    position: relative;
    height: 180px;
    width: 100%;
    .banner-item {
      > img {
        width: 100%;
      }
    }
  }
}
</style>