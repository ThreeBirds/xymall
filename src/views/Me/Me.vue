<template>
  <div id="root">
    <h1>Me</h1>
    <div ref="myChart" id="myChart"></div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Prop, Vue, Model } from "vue-property-decorator";
import echarts from "echarts";

@Component
export default class Me extends Vue {
  private myChart: any;
}
</script>

<style lang="scss" scoped>
#root {
  #myChart {
    width: 100%;
    height: 300px;
  }
}
</style>