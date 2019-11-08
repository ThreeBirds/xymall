<template>
  <div id="root">
    <mt-header fixed title="商城首页"></mt-header>
    <div class="container">
		<home-banner></home-banner>
		<hot-apps ></hot-apps>
		<product-list></product-list>
    </div>
  </div>
</template>

<script scoped>
import HomeBanner from '@/components/Home/HomeBanner'
import HotApps from '@/components/Home/HotApps'
import ProductList from '@/components/Home/ProductList'

export default {
  name: "Home",
  data() {
    return {};
  },
  created() {

  },
  components: {
	  HomeBanner,
	  HotApps,
	  ProductList
  }
};
</script>

<style lang="scss" scoped>
#root {
	background: #eeeeee;
    .container {
	 margin-top: 40px;
  }
}
</style>
