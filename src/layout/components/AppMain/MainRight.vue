<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { renderEcharts } from '@/layout/components/AppMain/data';

const weekDataChart = ref<HTMLDivElement>();

onMounted(() => {
  renderEcharts(weekDataChart);
});
</script>

<template>
  <div class="right ml-[20px]">
    <div class="pt-[55px] pl-[25px]">
      <!-- 路况 -->
      <div class="road-condition">
        <h1 class="c-white">近7天车流量概览</h1>
      </div>

      <!-- 汽车列表 -->
      <ul class="flex-x-around mt-[32px] w-[331px]">
        <li class="detail-item flex-y-between">
          <span class="bg-frame c-white">最高进园车流量</span>
          <span class="bg-frame c-primary-secondary">897</span>
        </li>
        <li class="detail-item flex-y-between">
          <span class="bg-frame c-white">最高进园车流量</span>
          <span class="bg-frame c-primary-secondary">494</span>
        </li>
      </ul>

      <!-- 七天数据 -->
      <div class="w-[325px] h-[205px]">
        <div ref="weekDataChart" class="week-data" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detail-item {
  width: 162px;
  height: 111px;
  text-align: center;

  span:nth-child(1) {
    width: 161px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background: url('@/assets/images/bg/bg-frame-2.png') no-repeat center;
    background-size: cover;
  }

  span:nth-child(2) {
    width: 161px;
    height: 66px;
    line-height: 66px;
    font-size: 34px;
    background: url('@/assets/images/bg/bg-frame-3.png') no-repeat center;
    background-size: cover;
  }
}

.week-data {
  margin: 71px 0 0 0;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transform-origin: 0 0;
}
</style>
