<script lang="ts" setup>
import ParkingContent from '@/views/smart-parking/components/parking-content/index.vue';
import ParkingFooter from '@/views/smart-parking/components/parking-footer/index.vue';
</script>

<template>
  <div class="smart-parking">
    <div class="arrow left-[38px]">
      <img alt="左箭头" src="@/assets/images/smart-parking/arrow/arrow-left.png" />
    </div>
    <parking-content />
    <parking-footer />
    <div class="arrow right-[38px]">
      <img alt="左箭头" src="@/assets/images/smart-parking/arrow/arrow-right.png" />
    </div>
  </div>
</template>
