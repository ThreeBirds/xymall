<template>
  <div id="root">
    <div class="fav" v-for="(p, index) in productList" :key="index">
      <span>{{p.title}}</span>
      <div v-for="(item, index) in p.list" :key="index">
		<product-item :item="item"></product-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { productListApi } from "@/assets/Api";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import  ProductItem  from "@/components/common/ProductItem.vue";

@Component({
	components: {ProductItem}
})
export default class ProductList extends Vue  {
  private productList: [] = [];

  created(): void {
    (this as any).$axios
      .get(productListApi)
      .then((rep: any) => {
        this.productList = rep.data.data;
      })
      .catch((err: any) => {});
  }

}
</script>

<style lang="scss" scoped>
@mixin fav-title {
  font-weight: bold;
  padding-left: 10px;
  font-size: 15px;
}

#root {
  margin-top: 5px;
  padding-top: 5px;
  background: white;
  .fav {
	text-align: left;
	margin-top: 10px;
    > span {
      @include fav-title();
    }
  }
}
</style>