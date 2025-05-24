<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useDataAnalyseHook } from '@/store/modules/dataAnalyse';
import { renderBodyChart } from '@/views/data-analyse/charts/right-body';
import { renderFooterChart } from '@/views/data-analyse/charts/right-footer';
import { renderTopChart, updateTopChart } from '@/views/data-analyse/charts/right-top';
import PanelTitle from '@/views/data-analyse/components/PanelTitle.vue';

const topChartRef = ref();
const bodyChartRef = ref();
const footerChartRef = ref();

const dataAnalyseHook = useDataAnalyseHook();
const { dataRatio } = storeToRefs(dataAnalyseHook);

/* 渲染图表 */
const renderChart = () => {
  renderTopChart(topChartRef);
  renderBodyChart(bodyChartRef);
  renderFooterChart(footerChartRef);
};

const initAppData = async () => {
  await dataAnalyseHook.fetchDataRatio();
  updateTopChart(dataRatio.value);
};

onMounted(() => {
  renderChart();
  initAppData();

  useIntervalFn(() => {
    initAppData();
  }, 10000);
});
</script>

<template>
  <div class="data-analyse-right">
    <header class="data-analyse-right__header">
      <PanelTitle title="数据占有率" />
      <div ref="topChartRef" class="data-analyse-right__header-chart" />
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

    &-chart {
      width: 100%;
      height: 100%;
    }
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
