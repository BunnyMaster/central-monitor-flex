<script lang="ts" setup>
import { useRoute } from 'vue-router';

import LayoutHeaderNav from '@/layout/layout-header/components/LayoutHeaderNav.vue';

const route = useRoute();
</script>

<template>
  <header>
    <div class="header-title">
      <h1>{{ route.meta.title }}</h1>
      <LayoutHeaderNav />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-title {
  width: 100%;
  height: 108px;
  background: url('@/layout/layout-header/images/layout-header-1.png') no-repeat center;
  background-size: cover;

  h1 {
    color: #fff;
    text-align: center;
    line-height: 100px;
    font-size: 42px;
  }
}
</style>
