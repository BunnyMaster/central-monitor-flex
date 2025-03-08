<script lang="ts" setup>
import SidebarRightBottom from '@/views/business-supervision/business-supervision-right/components/sidebar-right-bottom.vue';
import SidebarRightMiddle from '@/views/business-supervision/business-supervision-right/components/sidebar-right-middle.vue';
import SidebarRightTop from '@/views/business-supervision/business-supervision-right/components/sidebar-right-top.vue';
</script>

<template>
  <div class="business-supervision__sidebar flex-y-between">
    <sidebar-right-top />

    <sidebar-right-middle />

    <sidebar-right-bottom />
  </div>
</template>

<style lang="scss" scoped></style>
