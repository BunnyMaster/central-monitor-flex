<script lang="ts" setup>
import DigitalNumber from '@/components/DigitalNumber/DigitalNumber';
import CommonPanel from '@/views/community/components/CommonPanel.vue';
</script>

<template>
  <div class="community__sidebar">
    <div class="community__sidebar-item">
      <CommonPanel title="智慧设备总数">
        <div class="community__sidebar-digital">
          <DigitalNumber :money="1964" />
        </div>
      </CommonPanel>
    </div>

    <div class="community__sidebar-item">
      <CommonPanel title="预警概览" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community__sidebar {
  &-digital {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    :deep(span) {
      float: left;
      margin: 0 11px 0 0;
      width: 64px;
      height: 68px;
      font-size: 50px;
      line-height: 68px;
      text-align: center;
      background: url('@/views/community/images/digital-number.png');
    }
  }
}
</style>
