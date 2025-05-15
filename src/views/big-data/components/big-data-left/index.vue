<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';

import DigitalNumber from '@/components/DigitalNumber/DigitalNumber';
import TimeSelect from '@/components/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/TimeSelect/type';
import { useBigDataStore } from '@/store/modules/bigData';
import { formatter } from '@/utils/chart';
import { ChartProgress } from '@/views/big-data/charts/left-body';
import { renderFooterChart, updateFooterChart } from '@/views/big-data/charts/left-footer';

const TIME_LIST = ref<TimeSelectType[]>([
  { label: '2020.09', value: '2020-09' },
  { label: '2021.09', value: '2021-09' },
  { label: '2022.09', value: '2022-08' },
  { label: '2023.09', value: '2023-08' },
  { label: '2025.09', value: '2025-08' },
]);

const bigdataStore = useBigDataStore();
const { scaleProfit, incomeList, parkPlan } = storeToRefs(bigdataStore);
const form = reactive({
  date: TIME_LIST.value[0].value,
});

/* 底部图表---模拟数据 */
const footerChartRef = ref<HTMLDivElement>();

/* 初始化数据 */
const initAppData = () => {
  bigdataStore.fetchScaleProfit({ date: form.date });
  bigdataStore.fetchYearIncome();
  bigdataStore.fetchParkPlan();
  updateFooterChart(parkPlan.value);
};

onMounted(() => {
  // 渲染底部图表
  renderFooterChart(footerChartRef);
  initAppData();

  // 模拟底部图表
  useIntervalFn(() => {
    initAppData();
  }, 1000);
});
</script>

<template>
  <div class="big-data__sidebar">
    <header class="big-data__header">
      <div class="flex-x-between">
        <h1 class="big-data__sidebar-title">规模效益</h1>
        <TimeSelect v-model="form.date" :time-list="TIME_LIST" />
      </div>

      <ul>
        <li>
          <div class="big-data__header-title">
            <h1>进出口总值</h1>
            <div>
              <span>
                总值增幅
                <em>+{{ scaleProfit.total }}%</em>
              </span>
              <span>
                超越第二名
                <em>+{{ scaleProfit.incomeChain }}%</em>
              </span>
            </div>
          </div>
          <div class="money-digit">
            <DigitalNumber :money="scaleProfit.income" :separator="true" />
          </div>
        </li>

        <li>
          <div class="big-data__header-title">
            <h1>进出口总值</h1>
            <div>
              <span>
                环比变化
                <em>+{{ scaleProfit.expendChain }}%</em>
              </span>
            </div>
          </div>
          <div class="money-digit">
            <DigitalNumber :money="scaleProfit.expend" :separator="true" />
          </div>
        </li>
      </ul>
    </header>

    <main class="big-data__body h-[389px]">
      <div class="flex-x-between">
        <h1 class="big-data__sidebar-title">本年经营收入</h1>
        <span class="big-data__sidebar-title-describe">
          截止时间至 {{ dayjs(incomeList.endTime).format('YYYY-MM-DD') }}
        </span>
      </div>

      <ul>
        <li v-for="(item, index) in incomeList.list" :key="index">
          <div>
            <h1>{{ item.title }}</h1>
            <em>¥ {{ formatter(item.amount) }}</em>
          </div>
          <ChartProgress :percent="item.percent" />
        </li>
      </ul>
    </main>

    <footer class="big-data__footer">
      <div class="flex-x-between">
        <div class="big-data__sidebar-title">
          <h1>园区规划</h1>
        </div>
      </div>
      <div ref="footerChartRef" class="big-data__footer-chart-container" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.big-data__header {
  width: 100%;
  height: 274px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 198px;

    li {
      display: flex;
      flex-direction: column;
      margin: 9px 0 0 0;
      width: 100%;
    }
  }

  &-title {
    display: flex;
    justify-content: space-between;
    margin: 0 0 5px 0;
    width: 100%;

    h1 {
      font-size: 18px;
    }

    span {
      margin: 0 4px 0 0;
      font-size: 12px;
    }

    em {
      font-style: normal;
      font-size: 14px;
      color: var(--color-success);
    }
  }
}

.big-data__body {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin: 18px 0 0 0;
    width: 100%;
    height: 300px;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 18px 0 14px;
    width: 248px;
    height: 143px;
    background: url('@/views/big-data/images/bg-middle.png') no-repeat center;
    background-size: cover;

    .progress {
      position: absolute;
      top: -10px;
      right: -5px;
      width: 100px;
      height: 100px;
    }

    h1 {
      font-size: 18px;
    }

    em {
      font-size: 28px;
      color: var(--color-warning-secondary);
      font-style: normal;
    }
  }
}

.big-data__footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 272px;

  &-chart-container {
    width: 100%;
    height: 200px;
  }
}
</style>
