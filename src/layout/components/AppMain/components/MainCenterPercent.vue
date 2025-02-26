<script lang="tsx" setup>
defineProps({
  percent: Number,
});

import ArrowDown from '@/assets/images/layout/arrow/arrow-down.png';
import ArrowUp from '@/assets/images/layout/arrow/arrow-up.png';

const calPercentItem: Element = (percent: number) => {
  return percent > 25 ? (
    <div class="flex-center font-size-[20px] c-warning">
      <img alt="arrow" class="mt-2 h-[23px]" src={ArrowUp} />
      <span>{percent}%</span>
    </div>
  ) : (
    <div class="flex-center font-size-[20px] c-primary-secondary">
      <img alt="arrow" class="mt-2 h-[23px]" src={ArrowDown} />
      <span>{percent}%</span>
    </div>
  );
};
</script>

<template>
  <div class="main-center-percent">
    <div class="flex-y-around mt-[16px] mr-[13px] mb-[20px] ml-[13px]">
      <component :is="calPercentItem(percent)" />
      <span class="font-size-[15px] text-center c-info">环比</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-center-percent {
  position: absolute;
  width: 86px;
  height: 86px;
  background: url('@/assets/images/bg/bg-main-2.png') no-repeat center;
  background-size: cover;
}
</style>
