<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import BottomChart from '@/views/business-supervision/charts/right-bottom-chart.vue';

const charData1 = ref(Math.round(Math.random() * 100));
const charData2 = ref(Math.round(Math.random() * 100));

onMounted(() => {
  setInterval(() => {
    charData1.value = Math.round(Math.random() * 100);
    charData2.value = Math.round(Math.random() * 100);
  }, 3000);
});
</script>

<template>
  <div class="business-supervision__sidebar-item h-[294px]">
    <div class="flex-x-between">
      <div class="business-supervision__sidebar-title">
        <h1>地理规划</h1>
      </div>
      <span class="business-supervision__sidebar-title-describe">截止时间至2021.12.30</span>
    </div>

    <ul class="business-supervision__sidebar-panel">
      <li>
        <div class="business-supervision__sidebar-panel-change">
          <p>环比变化</p>
          <span>+43.2%</span>
        </div>
        <h1>
          987.1
          <em>亿</em>
        </h1>
        <h2>货物贸易涉外总额</h2>
        <div class="business-supervision__sidebar-panel-chart">
          <bottom-chart :chart-data="charData1" />
        </div>
      </li>
      <li>
        <div class="business-supervision__sidebar-panel-change">
          <p>环比变化</p>
          <span>+43.2%</span>
        </div>
        <h1>
          987.1
          <em>亿</em>
        </h1>
        <h2>货物贸易涉外总额</h2>
        <div class="business-supervision__sidebar-panel-chart">
          <bottom-chart :chart-data="charData2" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.business-supervision__sidebar {
  &-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 33px 4px 0 4px;
    width: 100%;
    height: 167px;

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 240px;
      height: 167px;
      background: url('@/assets/images/business-supervision/bg/sidebar/bg-sidebar-bottom-panel.png')
        no-repeat center;
      background-size: cover;

      h1 {
        margin: 0 0 24px 0;
        color: var(--color-primary-secondary);
        font-size: 32px;

        em {
          font-size: 20px;
          font-style: normal;
        }
      }

      h2 {
        position: absolute;
        bottom: 14px;
        font-size: 19px;
      }
    }

    &-change {
      display: flex;

      p {
        font-size: 13px;
      }

      span {
        display: inline-block;
        margin: 0 0 0 9px;
        color: var(--color-warning-secondary);
        font-size: 13px;
      }
    }

    &-chart {
      position: absolute;
      top: 34px;
      right: 9px;
      width: 29px;
      height: 63px;
    }
  }
}
</style>
