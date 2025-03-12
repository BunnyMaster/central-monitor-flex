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
  </div>
</template>

<style lang="scss" scoped></style>
