<script lang="ts" setup>
import LayoutContent from '@/views/home/layout-content/index.vue';
import LayoutFooter from '@/views/home/layout-footer/index.vue';
</script>

<template>
  <div class="particle">
    <layout-content />

    <layout-footer />
  </div>
</template>

<style lang="scss" scoped>
.particle {
  width: 100%;
  height: 100%;
  background: url('@/assets/images/bg/bg-particle.png') no-repeat center;
  background-size: cover;
}
</style>
