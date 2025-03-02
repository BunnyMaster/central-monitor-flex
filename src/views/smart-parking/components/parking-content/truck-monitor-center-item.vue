<script lang="ts" setup>
defineProps({
  count: Number,
  door: String,
});
</script>

<template>
  <div class="flex-y-between position-relative">
    <h1 class="font-size-[34px] c-primary-secondary">{{ count }}</h1>
    <div class="mt-[-12px] font-size-[16px] c-white">今日 进出车辆数/辆</div>
    <div class="mt-[7px] font-size-[18px] c-primary">{{ door }}</div>
    <div class="flex-center mt-[8px] c-primary">
      <span class="float-left font-size-[14px] c-primary-secondary cursor-pointer hover">查看</span>
      <img
        alt="arrow-item"
        class="float-left h-[16px]"
        src="@/assets/images/smart-parking/arrow/arrow-item.png"
      />
    </div>
  </div>
</template>
