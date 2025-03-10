<script lang="ts" setup>
import SmartPartContent from '@/views/smart-park/components/smart-park-content/index.vue';
import SmartPartFooter from '@/views/smart-park/components/smart-park-footer/index.vue';
</script>

<template>
  <div class="smart-park">
    <div class="smart-park__arrow left-[38px]">
      <img alt="左箭头" src="@/assets/images/smart-park/arrow/arrow-left.png" />
    </div>

    <smart-part-content />

    <smart-part-footer />

    <div class="smart-park__arrow right-[38px]">
      <img alt="左箭头" src="@/assets/images/smart-park/arrow/arrow-right.png" />
    </div>
  </div>
</template>

<style>
@import 'style.scss';
</style>
