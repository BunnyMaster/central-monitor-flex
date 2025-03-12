<script lang="ts" setup>
import MangeContent from '@/views/business-supervision/components/business-supervision-content/index.vue';
import BusinessSupervisionLeft from '@/views/business-supervision/components/business-supervision-left/index.vue';
import BusinessSupervisionRight from '@/views/business-supervision/components/business-supervision-right/index.vue';
</script>

<template>
  <div class="business-supervision">
    <business-supervision-left />
    <mange-content />
    <business-supervision-right />
  </div>
</template>

<style lang="scss">
.business-supervision {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 25px;
  width: 100%;
  height: 100%;

  @include view-style-default(530px, 759px);
}
</style>
