<script lang="ts" setup>
import ParkingContent from '@/views/smart-parking/components/parking-content/index.vue';
import ParkingFooter from '@/views/smart-parking/components/parking-footer/index.vue';
import ParkingHeader from '@/views/smart-parking/components/parking-header/index.vue';
</script>

<template>
  <div class="layout">
    <div class="arrow left-[38px]">
      <img alt="左箭头" src="@/assets/images/arrow/arrow-left.png" />
    </div>
    <parking-header />
    <parking-content />
    <parking-footer />
    <div class="arrow right-[38px]">
      <img alt="左箭头" src="@/assets/images/arrow/arrow-right.png" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/bg/bg.png') no-repeat center;
  background-size: cover;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;

  img {
    width: 65px;
  }
}
</style>
