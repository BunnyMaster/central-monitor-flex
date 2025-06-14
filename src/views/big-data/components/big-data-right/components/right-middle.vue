<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useBigDataStore } from '@/store/modules/bigData';
import { renderEcharts } from '@/views/business-supervision/charts/leftSidebarMiddle';

const chartPie = ref<HTMLDivElement>();

const bidDataStore = useBigDataStore();
const { enterpriseInfo } = storeToRefs(bidDataStore);

const initAppData = () => {
  bidDataStore.fetchEnterpriseInfo();
};

onMounted(() => {
  renderEcharts(chartPie);

  initAppData();

  useIntervalFn(() => {
    initAppData();
  }, 1000);
});
</script>

<template>
  <div class="big-data__body">
    <div class="flex-x-between">
      <h1 class="big-data__sidebar-title">企业信息</h1>
      <span class="big-data__sidebar-title-describe">截止时间至2021.12.30</span>
    </div>

    <ul class="big-data__sidebar-card">
      <li>
        <h1>报税金额</h1>
        <p class="c-warning-secondary">￥{{ enterpriseInfo.taxAmount }}</p>
      </li>
      <li>
        <div class="flex-x-between">
          <div>
            <h1>企业数量</h1>
            <p class="c-primary-secondary">{{ enterpriseInfo.enterpriseCount }}</p>
          </div>
          <div ref="chartPie" class="big-data__sidebar-card-chart-pie" />
        </div>
        <div class="big-data__sidebar-card-enterprise-type">
          <span class="mr-[4px]">
            <i class="bg-primary-secondary" />
            国营企业 {{ enterpriseInfo.stateOwnedEnterprise }}
          </span>
          <span>
            <i class="bg-warning-secondary" />
            私营企业 {{ enterpriseInfo.privateEnterprise }}
          </span>
        </div>
      </li>
      <li>
        <div class="flex-x-between">
          <h1>总投资金额</h1>
          <span class="font-size-[12px]">环比变化</span>
          <span class="font-size-[12px]">+123%</span>
        </div>
        <p class="c-primary-secondary">¥{{ enterpriseInfo.investmentTotal }}</p>
      </li>
      <li>
        <div class="flex-x-between">
          <h1>税收总金额</h1>
          <span class="font-size-[12px]">环比变化</span>
          <span class="font-size-[12px]">-123%</span>
        </div>
        <p class="c-primary-secondary">¥{{ enterpriseInfo.taxTotalAmount }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.big-data__body {
  width: 100%;
  height: 338px;
}

.big-data__sidebar-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  width: 100%;

  li {
    padding: 9px 16px 0 19px;
    margin: 15px 0 0 0;
    width: 242px;
    height: 124px;
    background: url('@/views/big-data/images/frame-1.png') no-repeat center;
    background-size: cover;

    h1 {
      margin: 0 0 2px 0;
      font-size: 18px;
    }

    p {
      font-size: 30px;
    }
  }

  &-enterprise-type {
    margin: 4px 0 0 0;
    width: 100%;

    span {
      font-size: 13px;
    }

    i {
      display: inline-block;
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }
  }

  &-chart-pie {
    width: 82px;
    height: 82px;
  }
}
</style>
