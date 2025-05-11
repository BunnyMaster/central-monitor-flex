<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import PanelTitle1 from '@/components/PanelItem/PanelTitle/PanelTitle1.vue';
import { renderEcharts } from '@/views/data-analyse/charts/right-header';

const footerChartRef = ref();
const renderFooterChart = () => {
  renderEcharts(footerChartRef);
};

onMounted(() => {
  renderFooterChart();
});
</script>

<template>
  <div class="data-analyse-right">
    <header class="data-analyse-right__header">
      <PanelTitle1 title="数据占有率" />
    </header>

    <main class="data-analyse-right__body">
      <PanelTitle1 title="数据分析展示" />
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
    margin: 10px 0 0 0;
    width: 100%;
    height: 350px;
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
