<script lang="ts" setup>
import MainCenter from '@/views/smart-parking/components/main/main-center.vue';
import RoadCondition from '@/views/smart-parking/components/main/road-condition.vue';
import TrafficOverview from '@/views/smart-parking/components/main/traffic-overview.vue';
</script>

<template>
  <main class="mt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <road-condition />
    <main-center />
    <traffic-overview />
  </main>
</template>

<style lang="scss" scoped>
.left,
.right {
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
