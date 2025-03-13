<script lang="tsx" setup>
import { onMounted, ref } from 'vue';

import { displayContent } from '@/components/PanelItem/DigitalNumber';
import TimeSelect from '@/components/PanelItem/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/PanelItem/TimeSelect/type';
import { renderEcharts } from '@/views/business-supervision/charts/leftSidebarTop';

const chartProgress = ref<HTMLDivElement>();
const money = '1386114';

const timeList = ref<TimeSelectType[]>([
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
]);

onMounted(() => {
  renderEcharts(chartProgress);
});
</script>

<template>
  <div class="business-supervision__sidebar-item h-[246px]">
    <div class="flex-x-between">
      <h1 class="business-supervision__sidebar-title">园区进出口额</h1>
      <div>
        <span class="business-supervision__sidebar-tag">总数据</span>
        <TimeSelect :time-list="timeList" />
      </div>
    </div>

    <div class="money-digit">
      <component :is="displayContent(money)" />
    </div>

    <div>
      <div ref="chartProgress" class="business-supervision__sidebar-progress" />

      <ul class="business-supervision__sidebar-value">
        <li>
          进口额
          <i>¥1551154545</i>
        </li>
        <li class="thin-line h-[20px]" />
        <li>
          <i>¥1551154545</i>
          出口额
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.money-digit {
  margin: 26px 0 0 0;

  span {
    height: 69px;
  }
}

.business-supervision__sidebar {
  &-progress {
    margin: 21px 0 0 0;
    width: 495px;
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
