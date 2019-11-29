<template>
  <div>
    <mt-header fixed title="购物车"></mt-header>
    <div class="container">
      <span>共有{{items.length}}件宝贝</span>
      <div class="card" v-for="(item, index) in items" :key="index">
        <div class="c-title">
          <input :id="index" type="checkbox" v-model="orders" :value="item" />
          <label :for="index"></label>
          <label class="title" :for="index">{{item.productName}}</label>
        </div>
        <div class="content-d">
          <img class="content-i" :src="item.cover" />
          <div class="content-c">
            <div class="title">
              <span>{{item.title}}</span>
            </div>
            <div class="bottom">
              <div class="price">￥{{item.price}}</div>
              <div class="count">
                <span class="opt" @click="reduce(item, index)">-</span>
                <span class="c">{{item.count}}</span>
                <span class="opt" @click="add(item)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
	  <settlement-tool :orders="orders" :list="items" class="tool"></settlement-tool>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { cartApi } from "@/assets/Api";
import SettlementTool from "@/components/SettlementTool.vue";

@Component({
	components: {SettlementTool},
})
export default class Cart extends Vue {
  private items: Array<any> = [];
  //   加入付款列表的物品
  private orders: Array<any> = [];

  // tslint:disable-next-line:typedef
  async mounted() {
    try {
      let rep: any = await axios.get(cartApi);
      this.items = rep.data.data;
    } catch (error) {}
  }

  reduce(item: any, index: number): void {
    if (item.count > 0) {
	  item.count--;
	  if (item.count === 0) {
		  this.items.splice(index, 1);
		  for (let i: number = 0; i < this.orders.length; i++) {
			  if (this.orders[i].count === 0) {
				  this.orders.splice(i, 1);
				  return;
			  }
		  }
	  }
    }
  }

  add(item: any): void {
    item.count++;
  }
}
</script>

<style lang="scss" scoped>
#root {
  .container {
    margin-top: 40px;
    background-color: #eeeeee;
    padding: 5px 10px 80px 10px;
    min-height: calc(100vh - 80px);
    text-align: left;
    span {
      display: inline-block;
      margin-bottom: 10px;
      padding-left: 5px;
      font-weight: 500;
      font-size: 14px;
      color: gray;
    }
    .card {
      height: 150px;
      margin-bottom: 10px;
      border-radius: 5px;
      background: white;
      padding-left: 10px;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      .content-d {
        width: 100%;
        height: 80px;
        display: flex;
        .content-i {
          width: 80px;
          height: 80px;
          position: relative;
          left: 5px;
        }
        .content-c {
          flex-grow: 1;
          height: 100%;
          width: 100%px;
          display: flex;
          flex-direction: column;
          padding: 0 10px 0 10px;
          justify-content: space-around;
          .bottom {
            display: flex;
            justify-content: space-around;
            .price {
              color: red;
              font-weight: bold;
              &:first-letter {
                font-size: 12px;
              }
            }
            .count {
              flex-grow: 1;
              display: flex;
              justify-content: flex-end;
              padding-right: 5px;
              .c {
                border: 1px lightgray solid;
                height: 18px;
                width: 25px;
				text-align: center;
              }
              .opt {
                font-size: 16px;
                font-weight: bold;
                height: 18px;
                width: 35px;
                border: 1px lightgray solid;
                text-align: center;
              }
            }
          }
        }
      }
      .c-title {
        .title {
          padding-left: 30px;
          font-size: 14px;
          font-weight: bold;
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
	.tool {
		position: fixed;
		bottom: 40px;
		left: 0;
	}
  }
}
</style>