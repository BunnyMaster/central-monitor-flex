<script lang="ts" setup>
import { ref } from 'vue';

import { displayContent } from '@/components/PanelItem/DigitalNumber';
import TimeSelect from '@/components/PanelItem/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/PanelItem/TimeSelect/type';

const timeList = ref<TimeSelectType[]>([
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
]);
</script>

<template>
  <div class="big-data__sidebar-item">
    <div class="flex-x-between">
      <h1 class="big-data__sidebar-title">规模效益</h1>
      <TimeSelect :time-list="timeList" />
    </div>

    <ul>
      <li>
        <div class="big-data__sidebar-item-body-title">
          <h1>进出口总值</h1>
          <div>
            <span>
              总值增幅
              <em>+123%</em>
            </span>
            <span>
              超越第二名
              <em>+22.3%</em>
            </span>
          </div>
        </div>
        <div class="money-digit">
          <component :is="displayContent('8888888')" />
        </div>
      </li>

      <li>
        <div class="big-data__sidebar-item-body-title">
          <h1>进出口总值</h1>
          <div>
            <span>
              环比变化
              <em>+123%</em>
            </span>
          </div>
        </div>
        <div class="money-digit">
          <component :is="displayContent('888888')" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 198px;

  li {
    display: flex;
    flex-direction: column;
    margin: 9px 0 0 0;
    width: 100%;
  }
}

.big-data__sidebar-item {
  height: 274px;

  &-body-title {
    display: flex;
    justify-content: space-between;
    margin: 0 0 5px 0;
    width: 100%;

    h1 {
      font-size: 18px;
    }

    span {
      margin: 0 4px 0 0;
      font-size: 12px;
    }

    em {
      font-style: normal;
      font-size: 14px;
      color: var(--color-success);
    }
  }
}
</style>
