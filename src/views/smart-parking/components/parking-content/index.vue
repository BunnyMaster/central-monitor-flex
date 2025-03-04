<script lang="ts" setup>
import RoadCondition from '@/views/smart-parking/components/parking-content/road-condition.vue';
import TrafficOverview from '@/views/smart-parking/components/parking-content/traffic-overview.vue';
import TruckMonitor from '@/views/smart-parking/components/parking-content/truck-monitor.vue';
</script>

<template>
  <main class="pt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <road-condition />
    <truck-monitor />
    <traffic-overview />
  </main>
</template>
