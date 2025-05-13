<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useSmartPark } from '@/store/modules/smartPark';
import { renderEcharts, updateChart } from '@/views/smart-park/charts/right-sidebar';
import ContentItem from '@/views/smart-park/components/common/content-item.vue';
import ContentPercent from '@/views/smart-park/components/common/content-percent.vue';

const weekDataChart = ref<HTMLDivElement>();

const smartPark = useSmartPark();
const { roadStatus, roadStatusSuggest, tollgateMonitoringData, trafficStatistics } =
  storeToRefs(smartPark);

const initData = () => {
  smartPark.fetchRoadStatus();
  smartPark.fetchTollgateMonitoringData();
  smartPark.fetchFlowRate();

  updateChart({
    enter: trafficStatistics.value.enter,
    outer: trafficStatistics.value.outer,
    timeline: trafficStatistics.value.timeline,
  });
};

onMounted(() => {
  renderEcharts(weekDataChart);
  initData();

  useIntervalFn(() => {
    initData();
  }, 1000);
});
</script>

<template>
  <div class="pt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <div class="smart-park__sidebar smart-park__sidebar--left">
      <div class="pt-[55px] pl-[25px]" style="transform: rotateY(180deg)">
        <!-- 路况 -->
        <div class="smart-park__sidebar-title">
          <h1>实时道路情况</h1>
        </div>

        <!-- 汽车列表 -->
        <ul class="mt-[32px]">
          <li
            v-for="(item, index) in roadStatus"
            :key="index"
            class="smart-park__sidebar--left-item"
          >
            <div v-show="item.status === '畅通'" class="flex-x-around w-[100%]">
              <img alt="car-1" src="../images/car/car-1.png" />
              <p>{{ item.name }}</p>
              <span class="dashed-circle c-primary-secondary border-b-primary-secondary">
                {{ item.status }}
              </span>
            </div>

            <div v-show="item.status === '拥堵'" class="flex-x-around w-[100%]">
              <img alt="car-1" src="../images/car/car-2.png" />
              <p>{{ item.name }}</p>
              <span class="dashed-circle c-warning border-b-warning">
                {{ item.status }}
              </span>
            </div>
          </li>
        </ul>

        <!-- 建议 -->
        <div class="smart-park__sidebar--left-suggest">
          <h5>车流量建议</h5>
          <p v-html="roadStatusSuggest" />
        </div>
      </div>
    </div>

    <div class="smart-park__body">
      <div class="h-[570px] flex-y-between">
        <div class="smart-park__body-title">
          <h1>卡口车辆监控</h1>
        </div>

        <!-- 中间布局 -->
        <div class="smart-park__body-inner">
          <div v-for="(item, index) in tollgateMonitoringData" :key="index" class="pos-relative">
            <content-item
              :count="item.count"
              class="top-[37px] left-[40px] w-[175px]"
              :door="item.door"
            />
            <content-percent :percent="item.percent" class="top-[73px] left-[193px]" />
          </div>

          <div class="smart-park__body-content">
            <div class="smart-park__body-content-headline flex-center">
              <h1>智能管控</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="smart-park__sidebar ml-[20px]">
      <div class="pt-[55px] pl-[25px]">
        <!-- 路况 -->
        <div class="smart-park__sidebar-title">
          <h1>近7天车流量概览</h1>
        </div>

        <!-- 汽车列表 -->
        <ul class="flex-x-around mt-[32px] w-[331px]">
          <li
            v-for="(item, index) in trafficStatistics.overview"
            :key="index"
            class="smart-park__sidebar-flow-item"
          >
            <span>{{ item.title }}</span>
            <span>{{ item.statistics }}</span>
          </li>
        </ul>

        <!-- 七天数据 -->
        <div class="w-[325px] h-[205px]">
          <div ref="weekDataChart" class="smart-park__sidebar-flow-item-charts" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.smart-park__sidebar--left {
  margin: 0 20px 0 0;
  transform: rotateY(180deg);

  &-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 330px;
    height: 61px;
    margin: 0 0 9px 0;
    background: url('@/views/smart-park/images/bg/bg-frame.png') no-repeat center;
    background-size: cover;

    img {
      width: 60px;
    }

    p {
      color: #fff;
      font-size: 14px;
    }
  }

  &-suggest {
    margin: 24px 0 0 0;
    padding: 15px 14px 17px 20px;
    width: 330px;
    height: 157px;
    color: #fff;
    font-size: 14px;
    background: url('@/views/smart-park/images/bg/bg-suggest.png') no-repeat center;
    background-size: cover;

    :deep(span) {
      color: var(--color-warning-secondary);
    }
  }
}

.smart-park__body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 824px;
  height: 650px;
  background: url('@/views/smart-park/images/bg/bg-middle.png') no-repeat center;
  background-size: cover;

  // 中间部分标题
  &-title {
    height: 61px;
    background: url('@/views/smart-park/images/bg/bg-main-title.png') no-repeat center;
    background-size: cover;

    h1 {
      color: #fff;
      font-size: 22px;
      text-align: center;
    }
  }

  // 中间部分四个部分
  &-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
    margin: 28px 0 77px 0;
    width: 666px;
    height: 400px;
    background: url('@/views/smart-park/images/bg/bg-main-1.png') no-repeat center;
    background-size: cover;
  }

  // 中心智能管控
  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 138px;
    height: 138px;

    &-headline {
      width: 100%;
      height: 100%;
      background: url('@/views/smart-park/images/bg/bg-main-center.png');
      background-size: cover;
      font-size: 19px;
      animation: rotate 30s linear infinite;

      h1 {
        width: 53px;
        color: var(--color-primary-secondary);
        text-align: center;
        animation: rotate-reverse 30s linear infinite;
      }
    }
  }
}

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
