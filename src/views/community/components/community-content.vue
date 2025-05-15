<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useCommunityStore } from '@/store/modules/community';
import { getImage } from '@/utils/image';
import { renderBodyChart, updateBodyChart } from '@/views/community/charts/conten-body-chart';

const BODY_CARD_LIST = ['大数据中心', '数字楼宇', '平台设备管理'];

const communityStore = useCommunityStore();
const { statisticsList, deviceStatus } = storeToRefs(communityStore);

// 图表Ref
const securityCharRef = ref();

/* 初始化数据 */
const initData = async () => {
  await communityStore.fetchCommunityStatisticsList();
  await communityStore.fetchCommityDeicesStatus();

  updateBodyChart({ data: deviceStatus.value.security });
};

onMounted(() => {
  renderBodyChart(securityCharRef);
  initData();

  useIntervalFn(() => {
    initData();
  }, 1000);
});
</script>

<template>
  <div class="community__content">
    <header class="community__header">
      <ul class="community__stats-list">
        <li v-for="(item, index) in statisticsList" :key="index" class="community__stat-card">
          <div class="community__stat-content">
            <h1>{{ item.name }}</h1>
            <h2>{{ item.total }}</h2>
            <span>{{ item.subtitle }} {{ item.subPercent }}（{{ item.subTotal }}）</span>
          </div>

          <img :src="`/images/community/bg-card-${index + 1}.png`" alt="" />
        </li>
      </ul>
    </header>

    <main class="community__main">
      <ul class="community__feature-list">
        <li v-for="(item, index) in BODY_CARD_LIST" :key="index">
          <img
            :src="getImage(`/images/community/body-image-${index + 1}.png`)"
            alt=""
            class="animate__animated animate__pulse animate__infinite"
          />
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="community__metrics">
        <div
          v-for="(item, index) in deviceStatus?.devcies?.slice(0, 2)"
          :key="index"
          class="community__metric-card"
        >
          <h1>{{ item.total }}</h1>
          <span>
            设备
            <br />
            {{ item.title }}
          </span>
        </div>
        <div ref="securityCharRef" class="community__instrument-panel" />
        <div
          v-for="(item, index) in deviceStatus?.devcies?.slice(2, 4)"
          :key="index"
          class="community__metric-card"
        >
          <h1>{{ item.total }}</h1>
          <span>
            设备
            <br />
            {{ item.title }}
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
/* 头部内容 */
.community__header {
  .community__stats-list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .community__stat-card {
    position: relative;
    width: 215px;
    height: 204px;
    color: #fff;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .community__stat-content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      height: 100%;
      z-index: 1;

      h1 {
        font-size: 24px;
      }

      h2 {
        font-size: 38px;
      }

      span {
        font-size: 14px;
      }
    }
  }
}

/* 中间层内容 */
.community__main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0 0 0;
  width: 100%;
  height: 660px;
  background: url('../images/bg-body.png') no-repeat center;
  background-size: contain;

  /* 数据图片内容 */
  .community__feature-list {
    display: flex;
    width: 100%;
    height: 286px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 286px;
      height: 286px;
      color: var(--color-primary-2);
      font-size: 24px;
    }

    img {
      width: 230px;
      height: 209px;
    }
  }

  /* 仪表盘列表 */
  .community__metrics {
    margin: 44px 0 0 0;
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: space-around;

    /* 仪表盘周围内容 */
    .community__metric-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 105px;
      height: 170px;
      background: url('../images/bg-body-card.png') no-repeat center;
      background-size: cover;

      h1 {
        font-size: 40px;
        color: var(--color-primary-secondary);
      }

      span {
        font-size: 14px;
        text-align: center;
        color: #fff;
      }
    }

    /* 中间仪表盘内容 */
    .community__instrument-panel {
      padding: 20px;
      width: 286px;
      height: 169px;
      color: #fff;
      background: url('../images/bg-body-instrument-panel.png') no-repeat center;
      background-size: cover;
    }
  }
}
</style>
