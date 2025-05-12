<script lang="ts" setup>
import CommonPanel from '@/views/community/components/CommonPanel.vue';
</script>

<template>
  <div class="community__sidebar">
    <div class="community__sidebar-item">
      <CommonPanel title="智慧设备总数" />
    </div>

    <div class="community__sidebar-item">
      <CommonPanel title="预警概览" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community__sidebar {
  //background: #fff;
}
</style>
