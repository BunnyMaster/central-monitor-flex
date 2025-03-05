<script lang="ts" setup>
import MangeContent from '@/views/business-supervision/business-supervision-content/index.vue';
import BusinessSupervisionLeft from '@/views/business-supervision/business-supervision-left/index.vue';
import BusinessSupervisionRight from '@/views/business-supervision/business-supervision-right/index.vue';
</script>

<template>
  <div class="business-supervision">
    <business-supervision-left />
    <mange-content />
    <business-supervision-right />
  </div>
</template>

<style>
@import 'style.scss';
</style>
