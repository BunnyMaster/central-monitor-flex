<script lang="ts" setup>
import MangeContent from '@/views/manage-forms/components/manage-content/index.vue';
import ManageLeft from '@/views/manage-forms/components/manage-left/index.vue';
import ManageRight from '@/views/manage-forms/components/manage-right/index.vue';
</script>

<template>
  <div class="manage-forms flex-x-between">
    <manage-left />
    <mange-content />
    <manage-right />
  </div>
</template>
