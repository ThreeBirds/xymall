<template>
  <div id="root">
    <div class="left">
      <div class="c-title">
        <input id="checkAll" type="checkbox" v-model="checkAll" value="all" />
        <label for="checkAll"></label>
        <label class="title" for="checkAll">全选</label>
      </div>
    </div>
    <div class="right">
      <div class="content">
        <div class="desp">
          <span class="title">合计:</span>
          <span class="price">￥{{priceCount}}</span>
        </div>
        <div class="submit" @click="submit">结算</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class SettlementTool extends Vue {
  // 选中的宝贝的索引
  @Prop() private orders!: Array<any>;
  // 所有宝贝列表
  @Prop() private list!: Array<any>;

  private checkAll: Array<string> = [];
  private price: number = 0;

  submit(): void {}

  @Watch("orders")
  ordersChanged(): void {
    if (this.orders.length === this.list.length && this.orders.length !== 0) {
      this.checkAll.push("all");
      return;
    }
    this.checkAll = [];
  }

  @Watch("list")
  listChanged(): void {
    if (this.orders.length === this.list.length && this.orders.length !== 0) {
      this.checkAll.push("all");
      return;
    }
    this.checkAll = [];
  }

  get priceCount(): string {
    let sum: number = 0;
    for (const it of this.orders) {
      sum += it.count * it.price;
    }
    return sum.toFixed(2);
  }
}
</script>

<style lang="scss" scoped>
#root {
  background: white;
  width: 100%;
  height: 40px;
  border-top: 1px lightgray solid;
  display: flex;
  justify-content: space-between;
  .left {
    height: 100%;
    display: flex;
    padding-left: 20px;
    .c-title {
      align-self: center;
      .title {
        padding-left: 20px;
        font-size: 12px;
      }
      input[type="checkbox"] {
        display: inline-block;
        width: 20px;
        height: 20px;

        position: absolute;
        visibility: hidden;
        + label {
          position: absolute;
          width: 16px;
          height: 16px;
          border: 1px solid #eeeeee;
          border-radius: 50%;
          background-color: #dedede;
        }
        &:checked + label {
          &:after {
            content: "\2714";
            position: absolute;
            top: 0px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            font-size: 12px;
            color: white;
            text-align: center;
            background: lightgreen;
          }
        }
      }
    }
  }
  .right {
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .content {
      display: flex;
      .desp {
        display: flex;
        align-self: center;
        .title {
          font-size: 12px;
          font-weight: bold;
        }
        .price {
          font-size: 12px;
          color: red;
          margin-left: 5px;
        }
      }
      .submit {
        border-radius: 15px;
        margin-left: 10px;
        background-color: orangered;
        color: white;
        font-size: 12px;
        font-weight: bold;
        padding: 5px 20px 5px 20px;
      }
    }
  }
}
</style>