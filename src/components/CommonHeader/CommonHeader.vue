<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import BarOp from '@/components/CommonHeader/HeaderBarOp.vue';
import dayjs from '@/plugins/dayjs';
import { resetRouter } from '@/router';

const router = useRouter();
const route = useRoute();

const time = ref('');

/** 显示时间 */
const displayTime = () => {
  time.value = dayjs(new Date()).format('YYYY-MM-DD dddd HH:mm:ss');
  setInterval(() => {
    time.value = dayjs(new Date()).format('YYYY-MM-DD dddd HH:mm:ss');
  }, 1000);
};

onMounted(() => {
  displayTime();
});
</script>

<template>
  <header>
    <div class="header-time c-primary">{{ time }}</div>

    <div class="header-title">
      <h1>{{ route.meta.title }}</h1>
      <h2>{{ route.meta.subtitle }}</h2>
      <img
        alt="icon-setting"
        class="ml-[-284px]"
        src="@/assets/images/common/icon/icon-home.png"
        @click="resetRouter()"
      />
      <img alt="icon-home" class="ml-[284px]" src="@/assets/images/common/icon/icon-setting.png" />
    </div>

    <BarOp />
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  height: 108px;
  background: url('@/assets/images/common/header/bg-parking-header.png') no-repeat center;
  background-size: cover;
}

.header-time {
  position: absolute;
  margin: 0 0 0 41px;
  line-height: 60px;
  font-size: 14px;
}

.header-title {
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
    color: #fff;
    font-size: 42px;
    line-height: 60px;
  }

  h2 {
    color: var(--color-primary-secondary);
    font-size: 24px;
    line-height: 45px;
    font-weight: lighter;
  }
}
</style>
