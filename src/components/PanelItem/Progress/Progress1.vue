<script lang="ts" setup>
defineProps({
  progress: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="progress">
    <div :style="{ width: `${progress}%` }" class="progress-inner" />
  </div>
</template>

<style lang="scss" scoped>
.progress {
  width: 100%;
  height: 11px;
  border: 1px solid var(--color-primary-secondary);

  &-inner {
    height: 100%;
    background: var(--color-primary);
  }
}
</style>
