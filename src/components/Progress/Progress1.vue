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
  border-radius: 2px;

  &-inner {
    height: 100%;
    border-radius: 4px;
    background: var(--color-primary);
    transition: all 0.4s;
  }
}
</style>
