<script lang="ts" setup>
import LeftCenter from '@/views/data-analyse/components/data-analyse-left/components/left-center.vue';
import LeftTop from '@/views/data-analyse/components/data-analyse-left/components/left-top.vue';
</script>

<template>
  <div class="data-analyse-left">
    <left-top />
    <left-center />
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-left {
  width: 496px;
  height: 970px;
  color: white;
}
</style>
