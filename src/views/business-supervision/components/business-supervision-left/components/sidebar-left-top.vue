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
      <div class="business-supervision__sidebar-title">
        <h1>园区进出口额</h1>
      </div>
      <div>
        <span class="business-supervision__sidebar-tag">总数据</span>
        <TimeSelect :time-list="timeList" />
      </div>
    </div>

    <div class="business-supervision__sidebar-money-digit">
      <component :is="displayContent(money)" />
    </div>

    <div>
      <div ref="chartProgress" class="business-supervision__sidebar-progress" />

      <ul class="business-supervision__sidebar-value flex-x-between">
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
.business-supervision__sidebar {
  &-money-digit {
    display: flex;
    justify-content: end;
    margin: 26px 0 0 0;
    color: var(--color-primary-secondary);
    font-size: 45px;
    text-align: center;

    span {
      float: left;
      margin: 0 3.5px;
      width: 49px;
      height: 69px;
      background: url('@/assets/images/business-supervision/bg/sidebar/bg-count.png') no-repeat;
      background-size: cover;
    }
  }

  &-progress {
    margin: 21px 0 0 0;
    width: 495px;
    height: 23px;
  }

  &-value {
    font-size: 18px;

    i {
      font-style: normal;
      font-size: 20px;
      color: var(--color-primary-secondary);
    }
  }
}
</style>
