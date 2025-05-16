<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import LayoutHeaderNav from '@/layout/layout-header/components/layout-nav/LayoutHeaderNav.vue';
import dayjs from '@/plugins/dayjs';
import { resetRouter } from '@/router';

const route = useRoute();

const time = ref('');

/** 显示时间 */
const displayTime = () => {
  time.value = dayjs(new Date()).format('YYYY-MM-DD dddd HH:mm:ss');
  useIntervalFn(() => {
    time.value = dayjs(new Date()).format('YYYY-MM-DD dddd HH:mm:ss');
  }, 1000);
};

onMounted(() => {
  displayTime();
});
</script>

<template>
  <header>
    <div class="header-time">{{ time }}</div>

    <div class="header-title">
      <h1 @click="resetRouter()">{{ route.meta.title }}</h1>
      <h2>{{ route.meta.subtitle }}</h2>
      <!--<img-->
      <!--  alt="icon-setting"-->
      <!--  class="ml-[-464px]"-->
      <!--  src="../images/icon/icon-home.png"-->
      <!--  @click="resetRouter()"-->
      <!--/>-->
      <!--<img alt="icon-home" class="ml-[464px]" src="../images/icon/icon-setting.png" />-->
    </div>

    <LayoutHeaderNav />
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  height: 80px;
  background: url('@/layout/layout-header/images/layout-header-2.png') no-repeat center;
  background-size: cover;
}

.header-time {
  position: absolute;
  margin: 0 0 0 41px;
  line-height: 50px;
  color: var(--color-info);
  font-size: 14px;
}

.header-title {
  position: relative;
  text-align: center;

  img {
    position: absolute;
    left: 50%;
    bottom: -14px;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    object-fit: cover;
    z-index: 1;
    cursor: pointer;
  }

  h1 {
    color: #fff;
    font-size: 34px;
    line-height: 50px;
    cursor: pointer;
  }

  h2 {
    color: var(--color-primary-secondary);
    font-size: 24px;
    line-height: 24px;
    font-weight: lighter;
  }
}
</style>
