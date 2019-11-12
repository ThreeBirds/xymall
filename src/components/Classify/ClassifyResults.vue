<template>
  <div id="root">
    <h1>这是猴子结果</h1>
  </div>
</template>

<script lang="ts" scoped>
import ProductItem from "@/components/common/ProductItem.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    ProductItem
  }
})
export default class ClassifyResults extends Vue {}
</script>

<style lang="scss" scoped>
</style>