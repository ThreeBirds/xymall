<template>
  <div id="root">
    <div class="header">推荐</div>
    <div class="container">
      <product-item v-for="(item, index) in products" :key="index" :item="item"></product-item>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import ProductItem from "@/components/common/ProductItem.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { classifyProducts } from "@/assets/Api";

@Component({
  components: {
    ProductItem
  }
})
export default class ClassifyResults extends Vue {
  private products: [] = [];

  created(): void {
    (this as any).$axios
      .get(classifyProducts)
      .then((rep: any) => {
        this.products = rep.data.data;
      })
      .catch((err: any) => {});
  }
}
</script>

<style lang="scss" scoped>
#root {
  padding-top: 20px;
  .header {
    text-align: left;
	padding-left: 10px;
	font-size: 12px;
	font-weight: bold;
  }
  .container {
	position: relative;
	top: -10px;
  }
}
</style>