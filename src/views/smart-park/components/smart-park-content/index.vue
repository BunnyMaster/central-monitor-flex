<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import { renderEcharts, updateChart } from '@/views/smart-park/charts/right-sidebar';
import SmartPartContent from '@/views/smart-park/components/smart-park-content/components/smart-park-content/index.vue';
import SmartPartSidebarLeft from '@/views/smart-park/components/smart-park-content/components/smart-park-sidebar-left/index.vue';

const weekDataChart = ref<HTMLDivElement>();

/** 随机数据 */
const randomData = () => {
  renderEcharts(weekDataChart);

  function random() {
    return Array(11)
      .fill(0)
      .map(() => {
        const num = (Math.random() * 100).toFixed(2);
        return parseInt(num);
      });
  }

  useIntervalFn(() => {
    updateChart({ data1: random(), data2: random() });
  }, 1000);
};

onMounted(() => {
  randomData();
});
</script>

<template>
  <main class="pt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <smart-part-sidebar-left />
    <smart-part-content />
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
          <div ref="weekDataChart" class="smart-park__sidebar-flow-item-charts" />
        </div>
      </div>
    </div>
  </main>
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
    background: url('@/views/smart-park/images/bg/bg-frame-2.png') no-repeat center;
    background-size: cover;
  }

  span:nth-child(2) {
    width: 161px;
    height: 66px;
    color: var(--color-primary-secondary);
    line-height: 66px;
    font-size: 34px;
    background: url('@/views/smart-park/images/bg/bg-frame-3.png') no-repeat center;
    background-size: cover;
  }

  &-charts {
    margin: 71px 0 0 0;
    width: 100%;
    height: 100%;
  }
}
</style>
