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
      <div class="business-supervision__bottom-title">
        <div class="flex-x-between">
          <h1>年度税收概览</h1>
          <span class="business-supervision__bottom-title-unit">单位/万元</span>
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

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;

    h1 {
      font-size: 22px;
    }

    &-unit {
      display: inline-block;
      margin: 14px 0 0 4px;
      font-size: 12px;
    }
  }
}
</style>
