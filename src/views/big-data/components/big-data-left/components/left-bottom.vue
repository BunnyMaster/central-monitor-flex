<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

import { renderEcharts, updateChart } from '@/views/big-data/charts/leftBottom';

const chart = ref<HTMLDivElement>();
const timer = ref(null);

const randomData = () => {
  function random() {
    return Array(11)
      .fill(0)
      .map(() => {
        const num = (Math.random() * 100).toFixed(2);
        return parseInt(num);
      });
  }

  timer.value = setInterval(() => {
    const data: Array<Array<number>> = [random(), random()];

    updateChart(data);
  }, 1000);
};

onMounted(() => {
  renderEcharts(chart);
  randomData();
});

onUnmounted(() => {
  clearInterval(timer.value);
  timer.value = null;
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
