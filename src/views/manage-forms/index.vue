<script lang="ts" setup>
import MangeContent from '@/views/manage-forms/components/manage-content/index.vue';
import ManageLeft from '@/views/manage-forms/components/manage-left/index.vue';
import ManageRight from '@/views/manage-forms/components/manage-right/index.vue';
</script>

<template>
  <div class="manage flex-x-between">
    <manage-left />
    <mange-content />
    <manage-right />
  </div>
</template>

<style lang="scss" scoped>
.manage {
  padding: 19px 25px;
  width: 100%;
  height: 100%;
  background: #20a0ff;
}
</style>
