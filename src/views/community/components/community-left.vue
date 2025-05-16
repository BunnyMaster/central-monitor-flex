<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import DigitalNumber from '@/components/DigitalNumber/DigitalNumber';
import { useCommunityStore } from '@/store/modules/community';
import { renderBodyChart, updateBodyChart } from '@/views/community/charts/left-footer-chart';
import LeftHeaderChart from '@/views/community/charts/left-header-chart';
import CommonPanel from '@/views/community/components/CommonPanel.vue';

const communityStore = useCommunityStore();
const { devicesList, alarmOverviewList } = storeToRefs(communityStore);

// 语句概览图表
const alarmOverviewChartRef = ref();

/* 计算接入设备值 */
const calculateDevicePercent = (val1: number, val2: number) => {
  const sum = val1 + val2;
  const percent = (val2 / sum) * 100;
  return parseInt(percent.toFixed(0));
};

/* 初始化数据 */
const initData = async () => {
  await communityStore.fetchCommunityDevicesAmount();
  await communityStore.fetchAlarmsOverview();
  updateBodyChart(alarmOverviewList.value);
};

onMounted(() => {
  renderBodyChart(alarmOverviewChartRef);

  initData();
  useIntervalFn(() => initData(), 1000);
});
</script>

<template>
  <div class="community__sidebar">
    <div class="community__sidebar-item">
      <CommonPanel title="设备总数">
        <div class="community__sidebar-digital">
          <DigitalNumber :money="devicesList?.total" />

          <div v-for="(item, index) in devicesList?.list" :key="index" class="progress-list">
            <LeftHeaderChart
              :data-left="calculateDevicePercent(item.connect, item.outside)"
              :data-right="calculateDevicePercent(item.outside, item.connect)"
            />
            <div class="progress-list-content">
              <span>{{ item.name }}</span>
              <span>内部设备{{ item.outside }} 接入设备{{ item.connect }}</span>
            </div>
          </div>
        </div>
      </CommonPanel>
    </div>

    <div class="community__sidebar-item">
      <CommonPanel title="预警概览">
        <div ref="alarmOverviewChartRef" class="w-[100%] h-[100%]" />
      </CommonPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community__sidebar {
  &-digital {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;

    .progress-list {
      display: flex;
      flex-direction: column;
      justify-items: center;
      margin: 14px 0 0 0;
      width: 100%;
      color: #fff;

      :deep(.progress) {
        width: 100%;
        height: 20px;
      }

      &-content {
        display: flex;
        justify-content: space-between;
      }
    }

    :nth-child(1) :deep(span) {
      float: left;
      margin: 0 11px 0 0;
      width: 64px;
      height: 68px;
      font-size: 50px;
      line-height: 68px;
      text-align: center;
      background: url('@/views/community/images/digital-number.png');
    }
  }
}
</style>
