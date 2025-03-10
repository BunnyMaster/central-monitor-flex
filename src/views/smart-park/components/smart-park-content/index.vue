<script lang="ts" setup>
import SmartPartContent from '@/views/smart-park/components/smart-park-content/components/smart-park-content/index.vue';
import SmartPartSidebarLeft from '@/views/smart-park/components/smart-park-content/components/smart-park-sidebar-left/index.vue';
import SmartPartSidebarRight from '@/views/smart-park/components/smart-park-content/components/smart-park-sidebar-right/index.vue';
</script>

<template>
  <main class="pt-[78px] mx-auto flex-center w-[1620px] h-[650px]">
    <smart-part-sidebar-left />
    <smart-part-content />
    <smart-part-sidebar-right />
  </main>
</template>
