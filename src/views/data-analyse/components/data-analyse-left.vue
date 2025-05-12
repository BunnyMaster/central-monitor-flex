<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import Progress1 from '@/components/Progress/Progress1.vue';
import { renderEcharts } from '@/views/data-analyse/charts/left-brand';
import PanelTitle from '@/views/data-analyse/components/PanelTitle.vue';

const brandChartRef = ref();
const deviceTotal = ref('1010');

const companyList = [
  { name: '科技有限公司', amount: 18888, percent: '40' },
  { name: '科技有限公司', amount: 18888, percent: '50' },
  { name: '科技有限公司', amount: 18888, percent: '10' },
  { name: '科技有限公司', amount: 18888, percent: '80' },
  { name: '科技有限公司', amount: 18888, percent: '50' },
];

onMounted(() => {
  renderEcharts(brandChartRef);
});
</script>

<template>
  <!--顶部-->
  <div class="data-analyse-left">
    <div class="data-analyse-left__top">
      <div>
        <h1 class="font-size-[21px]">销售设备总量(台)</h1>
        <div class="data-analyse-left__top-percent">
          <span>环比去年增长 52%</span>
          <i class="i-mdi-trending-up">s</i>
        </div>
      </div>

      <ul class="flex">
        <li v-for="(num, index) in deviceTotal" :key="index">{{ num }}</li>
      </ul>
    </div>

    <!--中心区域-->
    <div class="data-analyse-left__center">
      <PanelTitle title="销售公司销售设备数量占比" />

      <ul>
        <li v-for="(item, index) in companyList" :key="index">
          <div class="data-analyse-left__center-info">
            <span>{{ item.name }}</span>
            <div class="info-left">
              <span class="mr-[14px]">{{ item.amount }}台</span>
              <span class="mr-[9px] c-primary-secondary">环比 {{ item.percent }} %</span>
              <i class="i-mdi-trending-up" />
            </div>
          </div>
          <Progress1 :progress="parseInt(item.percent)" />
        </li>
      </ul>
    </div>

    <!--底部区域-->
    <div class="data-analyse-left__bottom">
      <PanelTitle title="品牌占有率" />

      <div ref="brandChartRef" class="data-analyse-left__bottom-chart" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-analyse-left {
  width: 496px;
  height: 970px;
  color: white;

  /* 顶部 */
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 496px;
    height: 100px;

    &-percent {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-primary-secondary);
      font-size: 16px;

      span {
        font-size: 18px;
      }

      i {
        font-size: 21px;
      }
    }

    li {
      margin: 0 4px;
      width: 56px;
      height: 53px;
      line-height: 53px;
      text-align: center;
      font-size: 47px;
      border: 1px solid var(--color-primary-secondary);
      background-color: rgba(39, 63, 86, 0.34);
    }
  }

  /* 中心区域 */
  &__center {
    margin: 47px 0 0 0;

    li {
      margin: 0 0 27px 0;

      &:nth-child(1) {
        margin: 35px 0 27px 0;
      }
    }

    &-info {
      display: flex;
      justify-content: space-between;

      .info-left {
        display: flex;
        justify-content: space-between;
        align-items: center;

        i {
          color: var(--color-primary-secondary);
        }
      }
    }
  }

  /* 底部区域 */
  &__bottom {
    margin: 25px 0 0 0;
    width: 468px;
    height: 387px;

    &-chart {
      margin: 0 0 25px 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
