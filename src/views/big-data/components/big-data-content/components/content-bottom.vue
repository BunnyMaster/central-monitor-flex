<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { renderEcharts } from '@/views/big-data/charts/content-bottom';

const chart = ref<HTMLDivElement>();

onMounted(() => {
  renderEcharts(chart);
});
</script>

<template>
  <div class="big-data__sidebar-item">
    <div ref="chart" class="big-data__sidebar-item-chart" />
  </div>
</template>

<style lang="scss" scoped>
.big-data__sidebar-item {
  width: 800px;
  height: 377px;

  &-chart {
    padding: 29px 25px 21px 28px;
    width: 100%;
    height: 100%;
  }
}
</style>
