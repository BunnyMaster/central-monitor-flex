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
  <div class="business-supervision__bottom">
    <div class="business-supervision__bottom-inner">
      <div class="flex-x-between">
        <div class="flex-x-between">
          <h1 class="font-size-[22px]">年度税收概览</h1>
          <span class="font-size-[12px]">单位/万元</span>
        </div>
        <TimeSelect :time-list="timeList" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.business-supervision__bottom {
  margin: 20px 0 0 0;
  width: 761px;
  height: 294px;
  background: url('@/assets/images/business-supervision/bg/content/bg-bottom.png') no-repeat center;
  background-size: cover;

  &-inner {
    padding: 20px;
    color: #fff;
  }
}
</style>
