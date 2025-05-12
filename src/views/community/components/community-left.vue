<script lang="ts" setup>
import CommunityPanel from '@/components/PanelItem/CommunityPanel/index.vue';
</script>

<template>
  <div class="community__sidebar">
    <div class="community__sidebar-item">
      <CommunityPanel title="智慧设备总数" />
    </div>

    <div class="community__sidebar-item">
      <CommunityPanel title="预警概览" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community__sidebar {
  //background: #fff;
}
</style>
