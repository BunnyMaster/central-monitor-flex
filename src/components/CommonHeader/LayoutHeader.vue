<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

import BarOp from '@/components/CommonHeader/HeaderBarOp.vue';

const router = useRouter();
const route = useRoute();
</script>

<template>
  <header>
    <div class="header-title">
      <h1>{{ route.meta.title }}</h1>
      <BarOp />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-title {
  width: 100%;
  height: 108px;
  background: url('@/assets/images/common/header/bg-layout-header.png') no-repeat center;
  background-size: cover;

  h1 {
    color: #fff;
    text-align: center;
    line-height: 100px;
    font-size: 42px;
  }
}
</style>
