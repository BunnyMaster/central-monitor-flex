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
  margin: 16px 0 0 0;
  width: 100%;
  height: 377px;

  &-chart {
    padding: 19px 0 0 0;
    width: 100%;
    height: 100%;
  }
}
</style>
