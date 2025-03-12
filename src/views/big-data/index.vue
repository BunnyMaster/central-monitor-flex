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
.big-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 25px;
  width: 100%;
  height: 100%;

  @include view-style-default(530px, 748px);
}
</style>
