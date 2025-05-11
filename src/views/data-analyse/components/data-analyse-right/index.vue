<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import PanelTitle1 from '@/components/PanelItem/PanelTitle/PanelTitle1.vue';
import { renderBodyChart } from '@/views/data-analyse/charts/right-body';
import { renderFooterChart } from '@/views/data-analyse/charts/right-footer';

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
      <PanelTitle1 title="数据占有率" />
      <div ref="bodyChartRef" class="data-analyse-right-chart" />
    </header>

    <main class="data-analyse-right__body">
      <PanelTitle1 title="数据分析展示" />
      <div ref="bodyChartRef" class="data-analyse-right__body-chart" />
    </main>

    <footer class="data-analyse-right__footer">
      <PanelTitle1 title="数据展示统计" />

      <div ref="footerChartRef" class="data-analyse-right__footer-chart" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-right {
  width: 496px;
  height: 970px;

  h1 {
    color: #fff;
  }

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
