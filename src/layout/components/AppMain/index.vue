<script lang="ts" setup>
import MainCenter from '@/layout/components/AppMain/MainCenter.vue';
import MainLeft from '@/layout/components/AppMain/MainLeft.vue';
import MainRight from '@/layout/components/AppMain/MainRight.vue';
</script>

<template>
  <main class="mt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <MainLeft />

    <MainCenter />

    <MainRight />
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
