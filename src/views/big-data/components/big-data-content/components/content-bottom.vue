<script lang="ts" setup>
import { ref } from 'vue';

const chart = ref<HTMLDivElement>();
</script>

<template>
  <div class="content-bottom">
    <div ref="chart" />
  </div>
</template>

<style lang="scss" scoped>
.content-bottom {
  width: 800px;
  height: 377px;
  background: mediumpurple;
}
</style>
