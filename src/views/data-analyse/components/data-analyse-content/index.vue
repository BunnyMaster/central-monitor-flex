<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import PanelTitle1 from '@/components/PanelItem/PanelTitle/PanelTitle1.vue';
import { renderFooterChart } from '@/views/data-analyse/charts/content-footer';

const titleList = [170582, 586220, 168902];

const footerChartRef = ref();

const footerChart = () => {
  renderFooterChart(footerChartRef);
};

onMounted(() => {
  footerChart();
});
</script>

<template>
  <div class="data-analyse-content">
    <ul class="data-analyse-content__header">
      <li v-for="(item, index) in titleList" :key="index">
        <h3>数据展示</h3>
        <strong>{{ item }}</strong>
        <span>台</span>
      </li>
    </ul>

    <main class="data-analyse-content__body">body</main>

    <footer class="data-analyse-content__footer">
      <PanelTitle1 title="销售设备数量区域占比" />
      <div ref="footerChartRef" class="data-analyse-content__footer-chart" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-content {
  margin: 0 35px;
  width: 803px;
  height: 970px;

  h1 {
    color: white;
  }

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
