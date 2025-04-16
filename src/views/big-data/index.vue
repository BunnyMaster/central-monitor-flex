<script lang="ts" setup>
import { onBeforeMount } from 'vue';

import { useAppStore } from '@/store/app';
import BigDataContent from '@/views/big-data/components/big-data-content/index.vue';
import BigDataLeft from '@/views/big-data/components/big-data-left/index.vue';
import BigDataRight from '@/views/big-data/components/big-data-right/index.vue';

const appStore = useAppStore();

onBeforeMount(async () => {
  appStore.setBackground('/images/bg/bg03.png');
});
</script>

<template>
  <div class="big-data">
    <big-data-left />
    <big-data-content />
    <big-data-right />
  </div>
</template>

<style lang="scss">
.big-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9px 0 9px;
  width: 100%;
  height: 100%;

  @include view-style-default(530px, 800px, #122953b3);
}
</style>
