<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import CommonHeader from '@/components/CommonHeader/CommonHeader.vue';
import LayoutHeader from '@/components/CommonHeader/LayoutHeader.vue';
import { useAppStore } from '@/store/app';

const router = useRouter();
const route = useRoute();
const appStore = useAppStore();

onBeforeMount(() => {
  appStore.setBackground('/images/common/bg/bg-layout.png');
});
</script>

<template>
  <div :style="{ background: appStore.background }" class="layout-container">
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
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
}

main {
  width: 100%;
  height: calc(100% - 108px);
}
</style>
