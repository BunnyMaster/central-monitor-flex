<script lang="ts" setup>
import PageList from '@/views/welcome/components/welcome-content/page-list.vue';
</script>

<template>
  <div class="flex-y-around welcome">
    <div class="mt-[158px]">
      <p class="c-white">
        <img alt="welcome" src="@/assets/images/icon/welcome.png" />
        <i class="c-primary-secondary">xxxx</i>
        你好 欢迎使用xxxxxxxzz
      </p>
    </div>
    <page-list />
  </div>
</template>

<style lang="scss  " scoped>
.welcome {
  p {
    font-size: 16px;
  }

  img {
    width: 239px;
    height: 34px;
  }
}
</style>
