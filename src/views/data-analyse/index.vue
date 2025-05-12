<script lang="ts" setup>
import { onBeforeMount } from 'vue';

import { useAppStore } from '@/store/app';
import DataAnalyseContent from '@/views/data-analyse/components/data-analyse-content.vue';
import DataAnalyseLeft from '@/views/data-analyse/components/data-analyse-left.vue';
import DataAnalyseRight from '@/views/data-analyse/components/data-analyse-right.vue';

const appStore = useAppStore();

onBeforeMount(() => {
  appStore.setBackground('/images/bg/bg05.png');
});
</script>

<template>
  <div class="data-analyse">
    <data-analyse-left />
    <data-analyse-content />
    <data-analyse-right />
  </div>
</template>

<style lang="scss" scoped>
.data-analyse {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 100%;
}
</style>
