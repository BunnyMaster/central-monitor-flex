<script lang="ts" setup>
import LayoutContent from '@/layout/components/layout-content/index.vue';
import LayoutFooter from '@/layout/components/layout-footer/index.vue';
import LayoutHeader from '@/layout/components/layout-header/index.vue';
</script>

<template>
  <div class="layout-container">
    <div class="particle" />
    <layout-header />

    <layout-content />

    <layout-footer />
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  background: url('@/assets/images/bg/bg-layout.png') no-repeat center;
  background-size: cover;

  .particle {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/bg/bg-particle.png') no-repeat center;
    background-size: cover;
  }
}
</style>
