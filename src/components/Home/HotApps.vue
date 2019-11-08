<template>
  <div id="root">
    <mt-swipe class="hot-container" :auto="0" :continuous="false" :showIndicators="false">
      <mt-swipe-item v-for="(item,index) in swipeItems" :key="index">
        <div class="swipe-item">
          <div v-for="i in item" :key="i.id">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="i.class" />
            </svg>
			<div class="icon-title">{{i.title}}</div>
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script scoped>
import "@/assets/iconfont/iconfont.js";
import "@/assets/iconfont/iconfont.css";
import {hotAppsApi} from '@/assets/Api.js'

export default {
  name: "HotApps",
  data() {
    return {
      swipeItems: []
    };
  },

  created() {
	this.$axios.get(hotAppsApi)
	.then(rep => {
		console.log('tag', rep.data)
		let tmp = []
		let index = 0
		while(index < rep.data.data.length) {
			tmp.push(rep.data.data.slice(index, index += 5))
		}
		this.swipeItems = tmp
	})
	.catch(err => {

	})
  }
};
</script>

<style lang="scss" scoped>
#root {
  background: white;
  .hot-container {
	padding-top: 10px;
	padding-bottom: 10px;
    height: 50px;
    .swipe-item {
      display: flex;
	  justify-content: space-evenly;
      .icon {
        width: 30px;
        height: 30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
	  }
	  .icon-title {
		  font-size: 12px;
		  margin-top: 5px;
	  }
    }
  }
}
</style>