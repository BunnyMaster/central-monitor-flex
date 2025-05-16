<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useCommunityStore } from '@/store/modules/community';
import RightFooterChart from '@/views/community/charts/right-footer';
import CommonPanel from '@/views/community/components/CommonPanel.vue';

import { renderRightHeaderChart, updateRightHeaderChart } from '../charts/right-header';
const communityStore = useCommunityStore();
const { serverProject, dataStatistics } = storeToRefs(communityStore);

const rightHeaderChart = ref();

/* 初始化加载 */
const initAppData = async () => {
  await communityStore.fetchDataStatistics();
  communityStore.fetchServerProject();
  updateRightHeaderChart({ list: dataStatistics.value });
};

onMounted(() => {
  renderRightHeaderChart(rightHeaderChart);
  initAppData();

  useIntervalFn(() => {
    initAppData();
  }, 1000);
});
</script>

<template>
  <div class="community__sidebar">
    <div class="community__sidebar-item">
      <CommonPanel title="标题标题">
        <div ref="rightHeaderChart" class="w-full h-full" />
      </CommonPanel>
    </div>

    <div class="community__sidebar-item">
      <CommonPanel title="标题标题">
        <div class="community__panel-chart">
          <RightFooterChart
            v-for="(chart, index) in serverProject"
            :key="index"
            :title="chart.name"
            :data-left="chart.left"
            :data-right="chart.right"
          />
        </div>
      </CommonPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community__sidebar {
  :deep(.progress) {
    width: 100%;
    height: 20px;
  }

  .community__panel-chart {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
