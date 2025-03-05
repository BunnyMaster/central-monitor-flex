<script lang="ts" setup>
import { PropType } from 'vue';

defineProps<{
  color: PropType<string>;
  title: PropType<string | number>;
  description: PropType<string>;
}>();
</script>

<template>
  <div class="manage-device">
    <h1>{{ title.toString() }}</h1>
    <p>{{ description }}</p>
    <div class="device-carriage">
      <i :style="{ color }" class="i-mdi:electricity" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.manage-device {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;

  h1 {
    text-align: center;
    font-size: 24px;
  }

  p {
    margin: 0 0 2px 0;
    text-align: center;
    font-size: 14px;
  }

  .device-carriage {
    display: flex;
    justify-content: center;
    width: 74px;
    height: 46px;
    background: url('@/assets/images/manage-forms/bg/device-carriage.png') no-repeat center;
    background-size: cover;

    i {
      //color: #ff7e5f;
      font-size: 26px;
    }
  }
}
</style>
