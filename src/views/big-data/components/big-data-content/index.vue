<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import { getImage } from '@/utils/image';
import { renderFooterChart } from '@/views/big-data/charts/content-footer';

const headerList = [
  { title: '员工', img: '/images/big-data/bg-content-top-1.png' },
  { title: '智慧大楼', img: '/images/big-data/bg-content-top-2.png' },
  { title: '智慧设备', img: '/images/big-data/bg-content-top-3.png' },
  { title: '数据报表', img: '/images/big-data/bg-content-top-4.png' },
];

const isActive = ref(true);
const footerChartRef = ref<HTMLDivElement>();

/* 改变移动状态 */
const changeMoveState = () => {
  useIntervalFn(() => {
    isActive.value = !isActive.value;
  }, 2000);
};

onMounted(() => {
  changeMoveState();
  renderFooterChart(footerChartRef);
});
</script>

<template>
  <div class="big-data__content">
    <header class="big-data__header">
      <ul class="big-data__stats-list">
        <li v-for="(item, index) in headerList" :key="index">
          <img :src="getImage(item.img)" alt="" />
          <h2>{{ item.title }}</h2>
        </li>
      </ul>
    </header>

    <main class="big-data__main">
      <div class="big-data__workbench">
        <img
          :class="[isActive ? 'move-top' : 'move-bottom']"
          alt=""
          src="@/views/big-data/images/bg-middle-move.png"
        />
        <h1>工作台</h1>
        <img
          :class="[isActive ? 'move-bottom' : 'move-top']"
          alt=""
          src="@/views/big-data/images/bg-middle-move.png"
        />
      </div>
    </main>

    <footer class="big-data__body">
      <div ref="footerChartRef" class="big-data__chart-container" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.big-data__header {
  .big-data__stats-list {
    display: flex;
    justify-content: space-between;
    margin: 39px 0 0 0;
    width: 748px;
    height: 351px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 171px;
    height: 283px;

    img {
      width: 171px;
      height: 191px;
      animation: shakeY 4s linear infinite;
    }

    h2 {
      width: 130px;
      height: 52px;
      font-size: 16px;
      line-height: 54px;
      text-align: center;
      color: var(--color-primary-secondary);
      background: url('@/views/big-data/images/bg-content-top-item.png') no-repeat center;
      background-size: cover;
    }
  }

  li:nth-child(1) {
    transform: translateY(68px);
  }

  li:nth-child(4) {
    transform: translateY(68px);
  }
}

.big-data__main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 189px;

  .big-data__workbench {
    position: relative;
    width: 267px;
    height: 189px;
    overflow: hidden;
  }

  h1 {
    width: 266px;
    height: 109px;
    text-align: center;
    line-height: 109px;
    font-size: 34px;
    color: var(--color-primary-secondary);
    background: url('@/views/big-data/images/bg-middle-title.png') no-repeat center;
    background-size: cover;
  }

  .move-top {
    animation: 2s linear 0s infinite normal none running line-move;
  }

  .move-bottom {
    animation: 2s linear 0s infinite normal none running line-move-alternate;
  }
}

.big-data__body {
  margin: 16px 0 0 0;
  width: 100%;
  height: 377px;

  .big-data__chart-container {
    padding: 19px 0 0 0;
    width: 100%;
    height: 100%;
  }
}
</style>
