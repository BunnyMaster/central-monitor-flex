<script lang="tsx" setup>
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

import DigitalNumber from '@/components/DigitalNumber/DigitalNumber';
import TimeSelect from '@/components/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/TimeSelect/type';
import { useBigDataStore } from '@/store/modules/bigData';
import {
  renderBigDataLeftTopEcharts,
  updateBigDataLeftTopEcharts,
} from '@/views/big-data/charts/right-header';

const TIME_LIST = ref<TimeSelectType[]>([
  { label: '2020.09', value: '2020-09' },
  { label: '2021.09', value: '2021-09' },
  { label: '2022.09', value: '2022-08' },
  { label: '2023.09', value: '2023-08' },
  { label: '2025.09', value: '2025-08' },
]);

const bidDataStore = useBigDataStore();
const { parkImportExportData } = storeToRefs(bidDataStore);

// 图表
const chartProgressRef = ref<HTMLDivElement>();

// 查询表单
const form = reactive({
  date: TIME_LIST.value[0].value,
});

/* 初始化数据 */
const initAppData = () => {
  bidDataStore.fetchParkImportExportData({ date: form.date });
  updateBigDataLeftTopEcharts({
    import: parkImportExportData.value.import,
    export: parkImportExportData.value.export,
  });
};

onMounted(() => {
  // 渲染图表
  renderBigDataLeftTopEcharts(chartProgressRef);

  // 初始化数据
  initAppData();

  // 定时刷新
  useIntervalFn(() => {
    initAppData();
  }, 1000);
});
</script>

<template>
  <div class="big-data__header h-[226px]">
    <div class="flex-x-between">
      <h1 class="big-data__sidebar-title">园区进出口额</h1>
      <div>
        <TimeSelect v-model="form.date" :time-list="TIME_LIST" />
      </div>
    </div>

    <div class="money-digit">
      <DigitalNumber :money="parkImportExportData.amount" :separator="true">
        <span>￥</span>
      </DigitalNumber>
    </div>

    <div>
      <div ref="chartProgressRef" class="big-data__header-progress" />

      <ul class="big-data__header-value">
        <li>
          进口额
          <i>¥ {{ parkImportExportData.import }}</i>
        </li>
        <li class="thin-line h-[20px]" />
        <li>
          <i>¥ {{ parkImportExportData.export }}</i>
          出口额
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.money-digit {
  margin: 14px 0 0 0;
  width: 100%;

  :deep(span) {
    height: 69px;
  }
}

.big-data__header {
  width: 100%;
  height: 226px;

  &-progress {
    margin: 14px 0 0 0;
    width: 100%;
    height: 24px;
  }

  &-value {
    display: flex;
    justify-content: space-between;
    margin: 9px 0 0 0;
    font-size: 18px;

    i {
      font-style: normal;
      font-size: 20px;
      color: var(--color-primary-secondary);
    }
  }
}
</style>
