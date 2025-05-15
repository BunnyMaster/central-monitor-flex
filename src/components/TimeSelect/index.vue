<script lang="ts" setup>
import { TimeSelectType } from '@/components/TimeSelect/type';

defineProps({
  timeList: Array<TimeSelectType>,
  modelValue: String,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const handleChange = (e: Event) => {
  const value = (e.target as HTMLSelectElement).value;
  emit('update:modelValue', value); // 触发 v-model 更新
};
</script>

<template>
  <select class="time-select" :value="modelValue" @change="handleChange">
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
