<script lang="ts" setup>
import RoadCondition from '@/views/smart-parking/components/parking-content/road-condition.vue';
import TrafficOverview from '@/views/smart-parking/components/parking-content/traffic-overview.vue';
import TruckMonitor from '@/views/smart-parking/components/parking-content/truck-monitor.vue';
</script>

<template>
  <main class="mt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <road-condition />
    <truck-monitor />
    <traffic-overview />
  </main>
</template>

<style lang="scss" scoped>
.card-container {
  width: 380px;
  height: 650px;
  background: url('@/assets/images/bg/bg-side.png') no-repeat center;
  background-size: cover;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ::v-deep(.road-condition) {
    background: url('@/assets/images/bg/bg-road-condition.png') no-repeat center;
    background-size: cover;

    h1 {
      font-size: 18px;
    }
  }
}
</style>
