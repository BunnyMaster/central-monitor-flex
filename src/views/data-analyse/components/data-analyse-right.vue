<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { renderBodyChart } from '@/views/data-analyse/charts/right-body';
import { renderFooterChart } from '@/views/data-analyse/charts/right-footer';
import PanelTitle from '@/views/data-analyse/components/PanelTitle.vue';

const footerChartRef = ref();
const footerChart = () => {
  renderFooterChart(footerChartRef);
};

const bodyChartRef = ref();
const bodyChart = () => {
  renderBodyChart(bodyChartRef);
};

onMounted(() => {
  bodyChart();
  footerChart();
});
</script>

<template>
  <div class="data-analyse-right">
    <header class="data-analyse-right__header">
      <PanelTitle title="数据占有率" />
      <div ref="bodyChartRef" class="data-analyse-right-chart" />
    </header>

    <main class="data-analyse-right__body">
      <PanelTitle title="数据分析展示" />
      <div ref="bodyChartRef" class="data-analyse-right__body-chart" />
    </main>

    <footer class="data-analyse-right__footer">
      <PanelTitle title="数据展示统计" />

      <div ref="footerChartRef" class="data-analyse-right__footer-chart" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-right {
  width: 496px;
  height: 970px;

  &__header {
    margin: 10px 0 0 0;
    width: 100%;
    height: 305px;
  }

  &__body {
    margin: 10px;
    width: 100%;
    height: 350px;

    &-chart {
      width: 100%;
      height: 320px;
    }
  }

  &__footer {
    margin: 10px 0 0 0;
    width: 100%;
    height: 257px;

    &-chart {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
