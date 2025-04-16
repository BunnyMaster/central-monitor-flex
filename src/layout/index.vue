<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import CommonHeader from '@/components/CommonHeader/CommonHeader.vue';
import LayoutHeader from '@/components/CommonHeader/LayoutHeader.vue';
import { HeaderTypeEnum } from '@/enums/HeaderTypeEnum';
import { useAppStore } from '@/store/app';

const route = useRoute();
const appStore = useAppStore();

onBeforeMount(() => {
  appStore.setBackground('/images/bg/bg-layout.png');
});
</script>

<template>
  <div :style="{ background: appStore.background }" class="layout-container">
    <layout-header v-if="route.meta.headerType === HeaderTypeEnum.default" />
    <common-header v-else-if="route.meta.headerType === 'subtitle'" />
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
