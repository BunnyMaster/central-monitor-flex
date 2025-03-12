<script lang="ts" setup>
import { ref } from 'vue';

import TimeSelect from '@/components/PanelItem/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/PanelItem/TimeSelect/type';

const timeList = ref<TimeSelectType[]>([
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
]);
</script>

<template>
  <div class="big-data__sidebar-item h-[200px]">
    <div class="flex-x-between">
      <div class="big-data__sidebar-title">
        <h1>规模效益</h1>
      </div>

      <div>
        <TimeSelect :time-list="timeList" />
      </div>
    </div>

    <ul class="big-data__body">
      <li class="big-data__body-item">
        <div class="big-data__body-title">
          <h1>进出口总值</h1>
          <span>
            总值增幅
            <em>+123%</em>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.big-data__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px 15px;
    width: 100%;
  }

  &-title {
    display: flex;
    justify-content: space-between;
    width: 100%;

    em {
      font-style: normal;
    }
  }
}
</style>
