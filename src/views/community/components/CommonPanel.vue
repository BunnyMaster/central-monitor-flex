<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="panel">
    <h1>{{ title }}</h1>

    <div class="panel-body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  width: 430px;
  height: 440px;
  background: url('../images/bg-common-panel.png') no-repeat center;
  background-size: cover;

  h1 {
    color: var(--color-primary-1);
    font-size: 20px;
    text-align: center;
    line-height: 85px;
  }

  &-body {
    display: flex;
    justify-self: center;
    width: 368px;
    height: 314px;
  }
}
</style>
