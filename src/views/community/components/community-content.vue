<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import { useCommunityStore } from '@/store/modules/community';
import { getImage } from '@/utils/image';

const BODY_CARD_LIST = ['大数据中心', '数字楼宇', '平台设备管理'];

const communityStore = useCommunityStore();
const { communityStatisticsList } = storeToRefs(communityStore);

onMounted(() => {
  communityStore.loadCommunityStatisticsList();
});
</script>

<template>
  <div class="community__content">
    <header class="community__header">
      <ul class="community__stats-list">
        <li
          v-for="(item, index) in communityStatisticsList"
          :key="index"
          class="community__stat-card"
        >
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
        <div class="community__metric-card">
          <h1>80</h1>
          <span>
            设备
            <br />
            正常运行总数
          </span>
        </div>
        <div class="community__metric-card">
          <h1>20</h1>
          <span>
            设备
            <br />
            故障总数
          </span>
        </div>
        <div class="community__instrument-panel">xxxx</div>
        <div class="community__metric-card">
          <h1>20</h1>
          <span>
            设备
            <br />
            故障总数
          </span>
        </div>
        <div class="community__metric-card">
          <h1>98%</h1>
          <span>
            设备
            <br />
            故障总数
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
    width: 209px;
    height: 204px;
    color: #fff;

    img {
      position: absolute;
      top: 0;
      left: 0;
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
  background: url('../images/bg-body.png') no-repeat;
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
      background: url('../images/bg-body-card.png');

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
      width: 286px;
      height: 169px;
      background: url('../images/bg-body-instrument-panel.png');
    }
  }
}
</style>
