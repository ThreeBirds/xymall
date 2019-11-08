<template>
  <div id="root">
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item class="banner-item" v-for="(banner, index) in bannerList" :key="index">
        <img :src="banner.cover" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script scoped>
import { bannerApi } from "@/assets/Api.js";

export default {
  name: "HomeBanner",
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.$axios
      .get(bannerApi)
      .then(rep => {
        this.bannerList = rep.data.data;
      })
      .catch(err => {});
  }
};
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