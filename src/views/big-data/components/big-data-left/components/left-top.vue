<script lang="ts" setup>
import { ref } from 'vue';

import TimeSelect from '@/components/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/TimeSelect/type';

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
    <ul>
      <li>
        <div class="big-data__left-main-title">
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
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  li {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .big-data__left-main-title {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
