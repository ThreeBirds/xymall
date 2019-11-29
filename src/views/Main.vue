<template>
  <div id="root">
    <router-view></router-view>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <i class="iconfont">&#xe613;</i>
        <div>首页</div>
      </mt-tab-item>
      <mt-tab-item id="classify">
        <i class="iconfont">&#xe7f9;</i>
        <div>分类</div>
      </mt-tab-item>
      <mt-tab-item id="cart">
        <i class="iconfont">&#xe6cf;</i>
        <div>购物车</div>
      </mt-tab-item>
      <mt-tab-item id="me">
        <i class="iconfont">&#xe611;</i>
        <div>我</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script lang="ts" scoped>
import "@/assets/iconfont/iconfont.css";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Main extends Vue {
	private selected: string = "home";

	@Watch("selected")
	onSelected(val: string):void {
      this.$router.push({ name: val });
	}
}
</script>

<style lang="scss" scoped>
#root {
  margin: 0;
}
</style>
