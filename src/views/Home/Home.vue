<template>
  <div id="root">
    <mt-header fixed title="商城首页"></mt-header>
    <div class="container">
      <home-banner></home-banner>
      <hot-apps class="hot-apps"></hot-apps>
      <product-list></product-list>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import HomeBanner from "@/components/Home/HomeBanner.vue";
import HotApps from "@/components/Home/HotApps.vue";
import ProductList from "@/components/Home/ProductList.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    HomeBanner,
    HotApps,
    ProductList
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#root {
  background: #eeeeee;
  .container {
    margin-top: 40px;
	.hot-apps {
		background: white;
	}
  }
}
</style>
