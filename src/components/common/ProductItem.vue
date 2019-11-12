<template>
  <div id="root">
    <div class="fav-content">
      <div>
        <img :src="item.img" alt />
      </div>
      <div class="fav-content-desp">
        <div class="p-title">{{item.title}}</div>
        <div class="p-bottom">
          <span>{{item.tags | tagsFilter}}</span>
          <span>￥{{item.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  filters: {
    tagsFilter(val: []): string {
      return val.join(" ");
    }
  }
})
export default class ProductItem extends Vue {
	@Prop() private item: any;
}
</script>

<style lang="scss" scoped>
#root {
  .fav-content {
    display: flex;
    height: 100px;
    padding: 5px 10px 0 10px;
    margin-bottom: 10px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 3px;
    }
    .fav-content-desp {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      height: 100%;
      flex-grow: 1;
      border-bottom: 1px #eeeeee solid;
      .p-title {
        font-size: 14px;
        font-family: "Microsoft YaHei";
        font-weight: 600;
      }
      .p-bottom {
        padding-bottom: 5px;
        > span:first-child {
          display: block;
          color: lightcoral;
          font-size: 12px;
          padding-left: 10px;
        }
        > span:last-child {
          color: red;
          font-size: 20px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>