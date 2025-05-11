<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import { renderEcharts, updateChart } from '@/views/big-data/charts/left-bottom';

const chart = ref<HTMLDivElement>();

/* 随机数据 */
const randomData = () => {
  function random() {
    return Array(12)
      .fill(0)
      .map(() => {
        const num = (Math.random() * 100).toFixed(2);
        return parseInt(num);
      });
  }

  const data: Array<Array<number>> = [random(), random()];

  updateChart(data);
};

/* 模拟数据 */
const mockRandomData = () => {
  useIntervalFn(() => {
    randomData();
  }, 1000);
};

onMounted(() => {
  renderEcharts(chart);
  randomData();

  mockRandomData();
});
</script>

<template>
  <div class="big-data__sidebar-item">
    <div class="flex-x-between">
      <div class="big-data__sidebar-title">
        <h1>园区规划</h1>
      </div>
    </div>
    <div ref="chart" class="chart" />
  </div>
</template>

<style lang="scss" scoped>
.big-data__sidebar-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 272px;
}

.chart {
  width: 100%;
  height: 200px;
}
</style>
