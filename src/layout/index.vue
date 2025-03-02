<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

import CommonHeader from '@/components/CommonHeader/CommonHeader.vue';
import LayoutHeader from '@/components/CommonHeader/LayoutHeader.vue';

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="layout-container">
    <layout-header v-if="route.name === 'welcome'" />
    <common-header v-else />

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/common/bg/bg-layout.png') no-repeat center;
  background-size: cover;
}

main {
  width: 100%;
  height: calc(100% - 108px);
}
</style>
