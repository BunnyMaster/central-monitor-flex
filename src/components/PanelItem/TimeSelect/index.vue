<script lang="ts" setup>
import { TimeSelectType } from '@/components/PanelItem/TimeSelect/type';

defineProps({
  timeList: Array<TimeSelectType>,
});
</script>

<template>
  <select class="time-select" name="timeSelect">
    <option v-for="(item, index) in timeList" :key="index" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.time-select {
  float: left;
  width: 100px;
  height: 26px;
  font-size: 14px;
  background: rgba(24, 69, 135, 0.55);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(14, 95, 255, 0.38);
  }
}
</style>
