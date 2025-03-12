<script lang="ts" setup>
import { ref } from 'vue';

import TimeSelect from '@/components/PanelItem/TimeSelect/index.vue';
import { TimeSelectType } from '@/components/PanelItem/TimeSelect/type';

const timeList = ref<TimeSelectType[]>([
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
  { label: '2020.09', value: '2021' },
]);
</script>

<template>
  <div class="business-supervision__sidebar-item h-[246px]">
    <div class="flex-x-between">
      <div class="business-supervision__sidebar-title">
        <h1>园区进出口额</h1>
      </div>

      <div>
        <span class="business-supervision__sidebar-tag">总数据</span>
        <TimeSelect :time-list="timeList" />
      </div>
    </div>

    <div class="business-supervision__sidebar-top">
      <div class="business-supervision__sidebar--spin">
        <div class="business-supervision__sidebar-describe">
          <strong>894</strong>
          <span>维修业务出口总值</span>
        </div>
      </div>

      <ul class="business-supervision__sidebar-list">
        <li>
          <h1>$ 1.62</h1>
          <img
            alt=""
            src="@/assets/images/business-supervision/bg/sidebar/bg-middle-coordinate.png"
          />
          <p>批准规划面积验收率</p>
        </li>
        <li>
          <h1>$ 1.62</h1>
          <img
            alt=""
            src="@/assets/images/business-supervision/bg/sidebar/bg-middle-coordinate.png"
          />
          <p>批准规划面积验收率</p>
        </li>
        <li>
          <h1>$ 1.62</h1>
          <img
            alt=""
            src="@/assets/images/business-supervision/bg/sidebar/bg-middle-coordinate.png"
          />
          <p>批准规划面积验收率</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.business-supervision__sidebar {
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 14px 0 0 0;
  }

  &--spin {
    width: 167px;
    height: 167px;
    background: url('@/assets/images/business-supervision/bg/sidebar/bg-middle-spin.png') no-repeat
      center;
    background-size: cover;
    animation: rotate 2s linear infinite;
  }

  &-describe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
    color: var(--color-primary-secondary);
    font-size: 14px;
    text-align: center;
    animation: rotate-reverse 2s linear infinite;

    strong {
      color: var(--color-primary-secondary-1);
      font-size: 44px;
    }
  }

  .business-supervision__sidebar-list {
    display: flex;
    justify-content: space-around;
    //align-items: center;
    flex: 1;
    font-size: 13px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        color: var(--color-primary-secondary);
        font-size: 31px;
      }

      img {
        margin: 9px 0 0 0;
        width: 44px;
        height: 50px;
        animation: bounce 4s ease-in-out infinite;
      }

      p {
        margin: 9px 0 0 0;
        width: 72px;
        text-align: center;
      }
    }
  }
}
</style>
