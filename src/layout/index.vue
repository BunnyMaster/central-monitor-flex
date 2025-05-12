<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import { HeaderTypeEnum } from '@/enums/HeaderTypeEnum';
import LayoutHeaderCommon from '@/layout/layout-header/components/LayoutHeaderCommon.vue';
import LayoutHeaderHome from '@/layout/layout-header/components/LayoutHeaderHome.vue';
import { useAppStore } from '@/store/app';

const route = useRoute();
const appStore = useAppStore();

onBeforeMount(() => {
  appStore.setBackground('/images/bg/bg-layout.png');
});
</script>

<template>
  <div :style="{ background: appStore.background }" class="layout-container">
    <layout-header-home v-if="route.meta.headerType === HeaderTypeEnum.default" />
    <layout-header-common v-else-if="route.meta.headerType === 'subtitle'" />
    <layout-header-common v-else />

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
