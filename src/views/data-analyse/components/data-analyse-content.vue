<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useDataAnalyseHook } from '@/store/modules/dataAnalyse';
import { renderBodyChart } from '@/views/data-analyse/charts/content-body';
import { renderFooterChart, updateChart } from '@/views/data-analyse/charts/content-footer';
import PanelTitle from '@/views/data-analyse/components/PanelTitle.vue';

const dataAnalyseHook = useDataAnalyseHook();
const { dataShow, regionSalesRatio } = storeToRefs(dataAnalyseHook);

const footerChartRef = ref();
const bodyChartRef = ref();

// 初始化数据
const initAppData = async () => {
  // 数据展示
  dataAnalyseHook.fetchDataShow();
  // 销售设备数量区域占比
  await dataAnalyseHook.fetchRegionSalesRatio();

  updateChart(regionSalesRatio.value);
};

onMounted(() => {
  renderFooterChart(footerChartRef);
  renderBodyChart(bodyChartRef);

  initAppData();

  useIntervalFn(() => {
    initAppData();
  }, 1000);
});
</script>

<template>
  <div class="data-analyse-content">
    <ul class="data-analyse-content__header">
      <li v-for="(item, index) in dataShow" :key="index">
        <h3>{{ item.name }}</h3>
        <strong>{{ item.value }}</strong>
        <span>台</span>
      </li>
    </ul>

    <main class="data-analyse-content__body">
      <div ref="bodyChartRef" class="w-full h-[567px]" />
    </main>

    <footer class="data-analyse-content__footer">
      <PanelTitle title="销售设备数量区域占比" />
      <div ref="footerChartRef" class="data-analyse-content__footer-chart" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-content {
  margin: 0 35px;
  width: 803px;
  height: 970px;

  &__header {
    display: flex;
    justify-content: space-between;
    margin: 15px 0 0 0;

    h3 {
      color: #94ddff;
      font-size: 18px;
    }

    strong {
      color: #fff;
      font-size: 36px;
    }

    span {
      margin: 0 0 0 8px;
      color: #fff;
      font-size: 16px;
    }
  }

  &__body {
    margin: 14px 0 0 0;
    width: 100%;
    height: 567px;
  }

  &__footer {
    margin: 6px 0 0 0;
    width: 100%;
    height: 284px;

    &-chart {
      width: 100%;
      height: 275px;
    }
  }
}
</style>
