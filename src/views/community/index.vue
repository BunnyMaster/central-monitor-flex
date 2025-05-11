<script lang="ts" setup>
import CommunityContent from '@/views/community/community-content/index.vue';
import CommunityLeft from '@/views/community/community-left/index.vue';
import CommunityRight from '@/views/community/community-right/index.vue';
</script>

<template>
  <div class="community">
    <community-left />
    <community-content />
    <community-right />
  </div>
</template>

<style lang="scss" scoped>
.community {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 25px;
  width: 100%;
  height: 100%;

  @include view-style-default(530px, 759px, #0e5fff33);
}
</style>
