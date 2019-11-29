// eslint-disable
<template>
  <div id="root">
    <div class="left">
      <div>
        <span class="dot" v-if="count > 0">{{count}}</span>
        <i class="iconfont">&#xe6cf;</i>
      </div>
    </div>
    <div class="right">
      <div class="tools">
        <div class="add" @click="add">加入购物车</div>
        <div class="submit">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Prop, Vue } from "vue-property-decorator";
import "@/assets/iconfont/iconfont.css";

@Component
export default class BuyToolBar extends Vue {
  @Prop() private product: any;

  private count: number = 0;

  add() {
    this.count++;
  }
}
</script>

<style lang="scss" scoped>
#root {
  display: flex;
  background: white;
  border-top: 1px lightgray solid;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60px;
    width: 80px;
    div {
      position: relative;
      align-self: center;
      width: 40px;
      height: 40px;
      i {
        font-size: 1.8rem;
      }
      .dot {
        display: inline-block;
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        padding: 2px;
        right: -10px;
        top: -5px;
        background: red;
        font-size: 12px;
        color: white;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .right {
    height: 60px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px 0 30px;
    .tools {
      display: flex;
      flex-direction: row;
      border-radius: 20px;
      height: 35px;
      width: 100%;
      overflow: hidden;
      align-items: center;
      font-weight: bold;
      font-size: 14px;
      div {
        flex-grow: 1;
        height: 100%;
        padding-top: 15px;
        color: white;
        width: 50px;
      }
      .add {
        background: rgb(247, 202, 57);
      }
      .submit {
        background: rgb(70, 241, 18);
      }
    }
  }
}
</style>