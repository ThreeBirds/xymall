<template>
  <div id="root">
    <div class="header">
      <span class="search">输入关键字搜索商品</span>
    </div>
    <div class="content">
      <div class="left">
        <ul>
          <li
            @click="classClicked(i)"
            :class="{onselect:i == selectIndex}"
            v-for="(t, i) in types"
            :key="i"
          >{{t.title}}</li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { classListApi } from "@/assets/Api";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Classify extends Vue {
  types: [] = [];
  searchKey: string = "";
  selectIndex: string = "0";

  created(): void {
    (this as any).$axios
      .get(classListApi)
      .then((rep: any) => {
        this.types = rep.data.data;
      })
      .catch((err: any) => {});
  }

  classClicked(index: string): void {
    this.selectIndex = index;
    this.$router.push({
      name: "classifyResults",
      query: { tid: (this as any).selectIndex }
    });
  }

}
</script>

<style lang="scss" scoped>
#root {
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 25px 0 25px;
    height: 50px;
    .search {
      background: #eeeeee;
      font-size: 12px;
      color: lightgray;
      border-radius: 10px;
      padding: 5px 0 5px 0;
    }
  }
  .content {
    display: flex;
    background: #fafafa;
    .left {
      width: 80px;
      text-align: left;
      ul {
        padding-left: 0px;
        max-height: calc(100vh - 300px);
        overflow: scroll;
        li {
          list-style-type: none;
          font-size: 12px;
          padding: 10px 0 10px 10px;
          border-bottom: 1px #eeeeee solid;
          &.onselect {
            font-weight: bold;
            background: #eeeeee;
          }
        }
      }
    }
    .right {
      display: flex;
      flex-grow: 1;
      background: greenyellow;
    }
  }
}
</style>