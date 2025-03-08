<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { renderEcharts } from '@/views/business-supervision/business-supervision-left/charts/sidebarMiddle';

const chartPie = ref<HTMLDivElement>();

onMounted(() => {
  renderEcharts(chartPie);
});
</script>

<template>
  <div class="business-supervision__sidebar-item h-[354px]">
    <div class="flex-x-between">
      <div class="business-supervision__sidebar-title">
        <h1>企业信息</h1>
      </div>
      <span class="business-supervision__sidebar-title-describe">截止时间至2021.12.30</span>
    </div>

    <ul class="business-supervision__sidebar-card">
      <li>
        <h1>报税金额</h1>
        <p class="c-warning-secondary">¥1551154545</p>
      </li>
      <li>
        <div class="flex-x-between">
          <div>
            <h1>企业数量</h1>
            <p class="c-primary-secondary">783</p>
          </div>
          <div ref="chartPie" class="business-supervision__sidebar-card-chart-pie" />
        </div>
        <div class="business-supervision__sidebar-card-enterprise-type">
          <span class="mr-[13px]">
            <i class="bg-primary-secondary" />
            国营企业 345
          </span>
          <span>
            <i class="bg-warning-secondary" />
            私营企业 345
          </span>
        </div>
      </li>
      <li>
        <div class="flex-x-between">
          <h1>总投资金额</h1>
          <span class="font-size-[12px]">环比变化</span>
          <span class="font-size-[12px]">+123%</span>
        </div>
        <p class="c-primary-secondary">¥1551154545</p>
      </li>
      <li>
        <div class="flex-x-between">
          <h1>税收总金额</h1>
          <span class="font-size-[12px]">环比变化</span>
          <span class="font-size-[12px]">-123%</span>
        </div>
        <p class="c-primary-secondary">¥1551154545</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.business-supervision__sidebar-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  width: 100%;
  height: 100%;

  li {
    padding: 9px 16px 0 19px;
    margin: 15px 0 0 0;
    width: 242px;
    height: 124px;
    background: url('@/assets/images/business-supervision/bg/sidebar/frame-1.png') no-repeat center;
    background-size: cover;

    h1 {
      margin: 0 0 2px 0;
      font-size: 18px;
    }

    p {
      font-size: 30px;
    }
  }

  &-enterprise-type {
    margin: 4px 0 0 0;
    width: 100%;

    span {
      font-size: 13px;
    }

    i {
      display: inline-block;
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }
  }

  &-chart-pie {
    width: 82px;
    height: 82px;
  }
}
</style>
