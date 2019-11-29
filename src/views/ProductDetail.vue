<template>
  <div id="root">
    <div class="header">
      <mt-header fixed title="商品详情"></mt-header>
    </div>
    <div class="container">
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item, index) in detail.imgs" :key="index">
            <img :src="item" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="topics">
        <div class="t-price">￥{{detail.price}}</div>
        <div class="t-tags">{{detail.tags | tagsFilter}}</div>
        <div class="t-title">{{detail.title}}</div>
      </div>
      <div class="desp" v-html="detailHtml"></div>
    </div>
    <div class="footer">
      <buy-tool-bar></buy-tool-bar>
    </div>
  </div>
</template>

	<script lang="ts" scoped>
import { Component, Prop, Vue, Model } from "vue-property-decorator";
import { detailApi } from "@/assets/Api";
import BuyToolBar from "@/components/common/BuyToolBar.vue";
import axios from "axios";

@Component({
  filters: {
    tagsFilter(val: []): string {
      return val === undefined ? "" : val.join(" ");
    }
  },
  components: { BuyToolBar }
})
export default class ProductDetail extends Vue {
  private detail: any = {};
  private detailHtml: string = "";

  // tslint:disable-next-line:typedef
  async created() {
    try {
      let rep: any = await axios.get(detailApi);
      this.detail = rep.data.data;
      const detailUrl: any = this.detail.detail;
      let html: any = await axios.get(detailUrl);
      this.detailHtml = html.data;
      window.console.log("tag", html);
    } catch (error) {
      window.console.log("tag", error);
    }
  }
}
</script>

	<style lang="scss" scoped>
#root {
  .container {
    padding-top: 40px;
    .banner {
      height: 200px;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .topics {
      padding: 5px 5px 10px 10px;
      margin-bottom: 5px;
      border-bottom: 1px lightgray solid;
      text-align: left;
      div {
        margin-top: 3px;
      }
      .t-price {
        color: red;
        font-size: 1.8rem;
        &:first-letter {
          font-size: 1.2rem;
        }
      }
      .t-tags {
        color: lightcoral;
        font-size: 12px;
      }
      .t-title {
        font-size: 14px;
        font-weight: bold;
      }
    }
    .desp {
      margin-bottom: 80px;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    height: 60px;
    width: 100%;
  }
}
</style>