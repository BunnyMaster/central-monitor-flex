<script lang="ts" setup>
import LayoutHeader from '@/components/CommonHeader/LayoutHeader.vue';
import LayoutContent from '@/layout/components/layout-content/index.vue';
import LayoutFooter from '@/layout/components/layout-footer/index.vue';
</script>

<template>
  <div class="layout-container">
    <div class="particle">
      <layout-header />

      <layout-content />

      <layout-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  position: relative;
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
