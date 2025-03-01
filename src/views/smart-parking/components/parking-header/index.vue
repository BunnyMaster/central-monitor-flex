<script lang="ts" setup>
import { useRouter } from 'vue-router';

import BarOp from '@/components/Common/BarOp.vue';
import { resetRouter } from '@/router';

const router = useRouter();
</script>

<template>
  <header class="h-[105px]">
    <div class="time c-primary">2025年2月25日22:45:14</div>

    <div class="title">
      <h1 class="c-white">智慧智能监管中心</h1>
      <h2 class="c-primary-secondary">车辆监控中心</h2>
      <img
        alt="icon-setting"
        class="ml-[-284px]"
        src="@/assets/images/icon/icon-home.png"
        @click="resetRouter()"
      />
      <img alt="icon-home" class="ml-[284px]" src="@/assets/images/icon/icon-setting.png" />
    </div>

    <BarOp />
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  background: url('@/assets/images/header/bg-parking-header.png') no-repeat center;
  background-size: cover;
}

.time {
  position: absolute;
  margin: 0 0 0 41px;
  line-height: 60px;
  font-size: 14px;
}

.title {
  position: relative;
  text-align: center;

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    object-fit: cover;
    z-index: 1;
    cursor: pointer;
  }

  h1 {
    font-size: 42px;
    line-height: 60px;
  }

  h2 {
    font-size: 24px;
    line-height: 45px;
    font-weight: lighter;
  }
}
</style>
