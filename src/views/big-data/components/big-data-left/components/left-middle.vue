<script lang="tsx" setup>
import { onMounted, onUnmounted, ref } from 'vue';

import { formatter } from '@/utils/chart';
import { ChartProgress } from '@/views/big-data/charts/left-middle';

const timer = ref(null);
const randomNumber = (range: number = 100) => {
  return parseInt((Math.random() * range).toFixed(0));
};

const list = ref([
  { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
  { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
  { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
  { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
]);

const renderItem = () => {
  return (
    <>
      {list.value.map((item, index) => {
        return (
          <li key={index}>
            <div>
              <h1>{item.title}</h1>
              <em>¥ {formatter(item.amount)}</em>
            </div>
            <ChartProgress percent={item.percent} />
          </li>
        );
      })}
    </>
  );
};

onMounted(() => {
  timer.value = setInterval(() => {
    list.value = [
      { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
      { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
      { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
      { title: '经营总收入', amount: randomNumber(9999999), percent: randomNumber() },
    ];
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer.value);
  timer.value = null;
});
</script>

<template>
  <div class="big-data__sidebar-item h-[389px]">
    <div class="flex-x-between">
      <h1 class="big-data__sidebar-title">本年经营收入</h1>
      <span class="big-data__sidebar-title-describe">截止时间至2021年6月</span>
    </div>

    <ul>
      <component :is="renderItem()" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
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
  background: url('@/assets/images/big-data/bg/bg-middle.png') no-repeat center;
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
</style>
