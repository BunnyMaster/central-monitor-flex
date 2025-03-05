<script lang="ts" setup>
import SmartPartCenter from '@/views/smart-park/smart-park-main/smart-park-center.vue';
import SmartPartSidebarLeft from '@/views/smart-park/smart-park-main/smart-park-sidebar-left.vue';
import SmartPartSidebarRight from '@/views/smart-park/smart-park-main/smart-park-sidebar-right.vue';
</script>

<template>
  <main class="pt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <smart-part-sidebar-left />
    <smart-part-center />
    <smart-part-sidebar-right />
  </main>
</template>
