<script lang="ts" setup>
import BigDataContent from '@/views/big-data/components/big-data-content/index.vue';
import BigDataLeft from '@/views/big-data/components/big-data-left/index.vue';
import BigDataRight from '@/views/big-data/components/big-data-right/index.vue';
</script>

<template>
  <div class="big-data">
    <big-data-left />
    <big-data-content />
    <big-data-right />
  </div>
</template>

<style lang="scss">
@use 'style';
</style>
