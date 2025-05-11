<script lang="tsx" setup>
defineProps({
  percent: Number,
});

import ArrowDown from '@/views/smart-park/images/arrow/arrow-down.png';
import ArrowUp from '@/views/smart-park/images/arrow/arrow-up.png';

const calPercentItem = (percent: number): Element => {
  return percent > 25 ? (
    <div class="flex-center c-warning">
      <img alt="arrow" class="mt-[6px] w-[13px] h-[23px]" src={ArrowUp} />
      <span className="font-size-[15px]">{percent}%</span>
    </div>
  ) : (
    <div class="flex-center  c-primary-secondary">
      <img alt="arrow" class="mt-[6px] w-[13px] h-[23px]" src={ArrowDown} />
      <span className="font-size-[15px]">{percent}%</span>
    </div>
  );
};
</script>

<template>
  <div class="smart-park__main-percent-item">
    <div class="flex-y-around mt-[16px] mr-[13px] mb-[20px] ml-[13px]">
      <component :is="calPercentItem(percent)" />
      <span class="font-size-[15px] text-center c-info">环比</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.smart-park__main-percent-item {
  position: absolute;
  width: 86px;
  height: 86px;
  background: url('@/views/smart-park/images/bg/bg-main-1.png') no-repeat center;
  background-size: cover;
}
</style>
