<script lang="tsx" setup>
import { onMounted, ref } from 'vue';

import { displayContent } from '@/components/PanelItem/DigitalNumber';
import TimeSelect from '@/components/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/TimeSelect/type';
import { renderEcharts } from '@/views/big-data/charts/right-header';

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
  <div class="big-data__header h-[226px]">
    <div class="flex-x-between">
      <h1 class="big-data__header-title">园区进出口额</h1>
      <div>
        <span class="big-data__header-tag">总数据</span>
        <TimeSelect :time-list="timeList" />
      </div>
    </div>

    <div class="money-digit">
      <component :is="displayContent(money)" />
    </div>

    <div>
      <div ref="chartProgress" class="big-data__header-progress" />

      <ul class="big-data__header-value">
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
  margin: 14px 0 0 0;
  width: 100%;

  span {
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
