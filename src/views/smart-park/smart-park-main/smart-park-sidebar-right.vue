<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { renderEcharts } from '@/views/smart-park/smart-park-main/charts';

const weekDataChart = ref<HTMLDivElement>();

onMounted(() => {
  renderEcharts(weekDataChart);
});
</script>

<template>
  <div class="smart-park__sidebar ml-[20px]">
    <div class="pt-[55px] pl-[25px]">
      <!-- 路况 -->
      <div class="smart-park__sidebar-title">
        <h1>近7天车流量概览</h1>
      </div>

      <!-- 汽车列表 -->
      <ul class="flex-x-around mt-[32px] w-[331px]">
        <li class="smart-park__sidebar-flow-item">
          <span>最高进园车流量</span>
          <span>897</span>
        </li>
        <li class="smart-park__sidebar-flow-item">
          <span>最高进园车流量</span>
          <span>494</span>
        </li>
      </ul>

      <!-- 七天数据 -->
      <div class="w-[325px] h-[205px]">
        <div ref="weekDataChart" class="smart-park__sidebar-charts" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.smart-park__sidebar-flow-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 162px;
  height: 111px;
  text-align: center;

  span:nth-child(1) {
    width: 161px;
    height: 40px;
    color: #fff;
    line-height: 40px;
    font-size: 16px;
    background: url('@/assets/images/smart-park/bg/bg-frame-2.png') no-repeat center;
    background-size: cover;
  }

  span:nth-child(2) {
    width: 161px;
    height: 66px;
    color: var(--color-primary-secondary);
    line-height: 66px;
    font-size: 34px;
    background: url('@/assets/images/smart-park/bg/bg-frame-3.png') no-repeat center;
    background-size: cover;
  }
}

.smart-park__sidebar-charts {
  margin: 71px 0 0 0;
  width: 100%;
  height: 100%;
}
</style>
