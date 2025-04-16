<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped>
h1 {
  position: relative;
  line-height: 40px;
  font-size: 20px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #707070;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 38%;
    height: 2px;
    background: var(--color-primary-secondary);
  }
}
</style>
