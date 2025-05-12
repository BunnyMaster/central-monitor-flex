<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';
import { onMounted, ref } from 'vue';

import { displayContent } from '@/components/DigitalNumber/DigitalCurrency';
import TimeSelect from '@/components/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/TimeSelect/type';
import { formatter } from '@/utils/chart';
import { ChartProgress } from '@/views/big-data/charts/left-body';
import { renderFooterChart, updateFooterChart } from '@/views/big-data/charts/left-footer';

const timeList = ref<TimeSelectType[]>([
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
]);

/* body数据---模拟数据 */
const bodyList = ref([]);
const initBodyList = () => {
  const randomNumber = (range: number = 100) => {
    return parseInt((Math.random() * range).toFixed(0));
  };

  bodyList.value = [
    { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
    { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
    { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
    { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
  ];
};

/* 底部图表---模拟数据 */
const footerChartRef = ref<HTMLDivElement>();
const mockFooterChart = () => {
  function random() {
    return Array(12)
      .fill(0)
      .map(() => {
        const num = (Math.random() * 100).toFixed(2);
        return parseInt(num);
      });
  }

  const data: Array<Array<number>> = [random(), random()];
  updateFooterChart(data);
};

onMounted(() => {
  // 渲染底部图表
  renderFooterChart(footerChartRef);
  initBodyList();

  // 模拟底部图表
  useIntervalFn(() => {
    mockFooterChart();
    initBodyList();
  }, 1000);
});
</script>

<template>
  <div class="big-data__sidebar">
    <div class="big-data__header">
      <div class="flex-x-between">
        <h1 class="big-data__sidebar-title">规模效益</h1>
        <TimeSelect :time-list="timeList" />
      </div>

      <ul>
        <li>
          <div class="big-data__header-title">
            <h1>进出口总值</h1>
            <div>
              <span>
                总值增幅
                <em>+123%</em>
              </span>
              <span>
                超越第二名
                <em>+22.3%</em>
              </span>
            </div>
          </div>
          <div class="money-digit">
            <component :is="displayContent('8888888')" />
          </div>
        </li>

        <li>
          <div class="big-data__header-title">
            <h1>进出口总值</h1>
            <div>
              <span>
                环比变化
                <em>+123%</em>
              </span>
            </div>
          </div>
          <div class="money-digit">
            <component :is="displayContent('888888')" />
          </div>
        </li>
      </ul>
    </div>

    <div class="big-data__body h-[389px]">
      <div class="flex-x-between">
        <h1 class="big-data__sidebar-title">本年经营收入</h1>
        <span class="big-data__sidebar-title-describe">截止时间至2021年6月</span>
      </div>

      <ul>
        <li v-for="(item, index) in bodyList" :key="index">
          <div>
            <h1>{{ item.title }}</h1>
            <em>¥ {{ formatter(item.amount) }}}</em>
          </div>
          <ChartProgress :percent="item.percent" />
        </li>
      </ul>
    </div>

    <div class="big-data__footer">
      <div class="flex-x-between">
        <div class="big-data__sidebar-title">
          <h1>园区规划</h1>
        </div>
      </div>
      <div ref="footerChartRef" class="big-data__footer-chart-container" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.big-data__header {
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
