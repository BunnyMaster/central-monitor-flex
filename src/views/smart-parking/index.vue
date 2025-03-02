<script lang="ts" setup>
import ParkingContent from '@/views/smart-parking/components/parking-content/index.vue';
import ParkingFooter from '@/views/smart-parking/components/parking-footer/index.vue';
</script>

<template>
  <div class="layout">
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

<style scoped>
.layout {
  width: 100%;
  height: 100%;

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    img {
      width: 65px;
    }
  }
}
</style>
